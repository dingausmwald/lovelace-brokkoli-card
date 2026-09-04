import { CSSResult, HTMLTemplateResult, LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { HomeAssistant } from 'custom-card-helpers';
import { galleryStyles } from '../styles/gallery-styles';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { TranslationUtils } from '../utils/translation-utils';
import { PHASES } from '../utils/constants';

interface PlantInfo {
  result?: {
    [key: string]: {
      icon?: string;
      max?: number;
      min?: number;
      current?: number;
      sensor?: string;
      unit_of_measurement?: string;
    };
  } & {
    helpers?: {
      health?: {
        entity_id?: string;
      };
      growth_phase?: {
        entity_id?: string;
      };
    };
  };
  helpers?: {
    growth_phase?: {
      entity_id?: string;
    };
  };
}

// Klasse definieren ohne customElement-Decorator
export class FlowerGallery extends LitElement {
    @property() public hass?: HomeAssistant;
    @property() public entityId?: string;
    @property({ type: Array }) public images: string[] = [];
    @property() public onClose?: () => void;
    @property() public getImageDate?: (url: string) => string;
    @property({ type: Number }) public initialImageIndex?: number;
    @state() private _currentImageIndex = 0;
    @state() private _isFading = false;
    @state() private _showFlyout = false;
    @state() private _showDeleteFlyout = false;
    @state() private _showMainImageFlyout = false;
    @state() private _showOtherImages = false;
    private _imageRotationInterval?: NodeJS.Timeout;
    private _reparentedToBody: boolean = false;
    private _plantInfo: PlantInfo | null = null;
    private _isLoading: boolean = false;
    private _imagesList: Array<{url: string, date: Date}> = [];
    private _isImagesLoading: boolean = false;
    private _otherImagesList: Array<{url: string, date: Date}> = [];

    private async _changeImage(direction: 'next' | 'prev' = 'next') {
        this._isFading = true;
        this.requestUpdate();

        await new Promise(resolve => setTimeout(resolve, 500));

        if (direction === 'next') {
            this._currentImageIndex = (this._currentImageIndex + 1) % this.images.length;
        } else {
            this._currentImageIndex = (this._currentImageIndex - 1 + this.images.length) % this.images.length;
        }
        
        this._isFading = false;
        this.requestUpdate();
    }

    private async _selectImage(index: number) {
        if (index === this._currentImageIndex) return;
        
        // Starte Fade-Out
        this._isFading = true;
        this.requestUpdate();

        // Warte auf Fade-Out Animation
        await new Promise(resolve => setTimeout(resolve, 500));

        // Setze neuen Index
        this._currentImageIndex = index;
        
        // Starte Fade-In
        this._isFading = false;
        this.requestUpdate();
    }

    private _toggleFlyout(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this._showFlyout = !this._showFlyout;
    }

    private _toggleDeleteFlyout(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this._showDeleteFlyout = !this._showDeleteFlyout;
    }

    private _toggleMainImageFlyout(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this._showMainImageFlyout = !this._showMainImageFlyout;
    }

    private _toggleOtherImages(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this._showOtherImages = !this._showOtherImages;
        
        // Nur die Ansicht ändern, nicht die Bilder
        this.requestUpdate();
    }

    private _calculateOtherImagesWidth(): number {
        // Korrekte Berechnung basierend auf den CSS-Werten:
        // - Jedes Thumbnail: 84px (80px + 2px padding + 2px border)
        // - Gap zwischen Thumbnails: 8px
        // - Gap zwischen Gruppen: 16px
        const thumbnailWidth = 84;
        const thumbnailGap = 8;
        const groupGap = 16;
        
        const thumbnailsWidth = this._otherImagesList.length * thumbnailWidth;
        const gapsWidth = Math.max(0, this._otherImagesList.length - 1) * thumbnailGap;
        
        return thumbnailsWidth + gapsWidth + groupGap;
    }

    private async _handleFileUpload(e: Event) {
        const input = e.target as HTMLInputElement;
        const files = input.files;
        
        if (files && files.length > 0) {
            const file = files[0];
            if (!file.type.startsWith('image/')) {
                alert(TranslationUtils.translateUI(this.hass!, 'upload_images_only'));
                return;
            }
            
            if (file.size > 10 * 1024 * 1024) {
                alert(TranslationUtils.translateUI(this.hass!, 'image_too_large'));
                return;
            }
            
            try {
                await this._uploadImage(file);
                this._showFlyout = false;
            } catch (error) {
                alert(TranslationUtils.translateUI(this.hass!, 'upload_error') + ': ' + error.message);
            }
        }
    }

    private async _uploadImage(file: File) {
        if (!this.entityId || !this.hass) return;

        const chunkSize = 16384; // 16KB Chunks
        const reader = new FileReader();
        
        reader.onload = async (e) => {
            if (!e.target?.result) return;
            
            const data = e.target.result as ArrayBuffer;
            const totalChunks = Math.ceil(data.byteLength / chunkSize);
            
            for (let i = 0; i < totalChunks; i++) {
                const chunk = data.slice(i * chunkSize, (i + 1) * chunkSize);
                const hexChunk = Array.from(new Uint8Array(chunk))
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
                
                try {
                    await this.hass.connection.sendMessagePromise({
                        type: 'plant/upload_image',
                        entity_id: this.entityId,
                        filename: file.name,
                        chunk: hexChunk,
                        chunk_index: i,
                        total_chunks: totalChunks
                    });
                } catch (error) {
                    console.error('Upload error:', error);
                    throw error;
                }
            }

            // Aktualisiere die Entity nach dem Upload
            await this.hass.callService('homeassistant', 'update_entity', {
                entity_id: this.entityId
            });

            // Lade die Gallerie neu
            setTimeout(() => {
                this._initGallery();
            }, 1000);
        };
        
        reader.readAsArrayBuffer(file);
    }

    private async _deleteImage(filename: string) {
        if (!this.entityId || !this.hass) return;

        try {
            await this.hass.connection.sendMessagePromise({
                type: 'plant/delete_image',
                entity_id: this.entityId,
                filename: filename
            });

            // Aktualisiere die Entity nach dem Löschen
            await this.hass.callService('homeassistant', 'update_entity', {
                entity_id: this.entityId
            });
        } catch (error) {
            throw new Error(`${TranslationUtils.translateUI(this.hass!, 'delete_image_error')}: ${error.message}`);
        }
    }

    private async _setMainImage(filename: string) {
        if (!this.entityId || !this.hass) return;

        try {
            await this.hass.connection.sendMessagePromise({
                type: 'plant/set_main_image',
                entity_id: this.entityId,
                filename: filename
            });

            // Aktualisiere die Entity nach dem Setzen des Hauptbildes
            await this.hass.callService('homeassistant', 'update_entity', {
                entity_id: this.entityId
            });
        } catch (error) {
            throw new Error(`${TranslationUtils.translateUI(this.hass!, 'set_main_image_error')}: ${error.message}`);
        }
    }

    private _close(e: Event) {
        e.stopPropagation();
        if (this._imageRotationInterval) {
            clearInterval(this._imageRotationInterval);
        }
        if (this.onClose) {
            this.onClose();
        }
        this.remove();
    }

    private async _loadPlantInfo() {
        if (!this.entityId || !this.hass || this._isLoading) return;

        this._isLoading = true;
        try {
            // Verwende PlantEntityUtils, um die Pflanzen-Info zu holen
            this._plantInfo = PlantEntityUtils.buildPlantView(this.hass, this.entityId);
            // Lade die Bilder, nachdem die Pflanzeninfo geladen ist
            await this._initGallery();
        } catch (err) {
            console.warn('Fehler beim Laden der Pflanzen-Info:', err);
            this._plantInfo = null;
        } finally {
            this._isLoading = false;
        }
    }

    private async _initGallery() {
        if (!this.entityId || !this.hass || !this._plantInfo || this._isImagesLoading) return;

        this._isImagesLoading = true;
        try {
            // Lade die Bilder mit der bereits geladenen plantInfo
            this._imagesList = await FlowerGallery.getImagesWithDates(this.hass, this.entityId, this._plantInfo);
            
            // Lade auch die "anderen Bilder" (vor der ersten Phase)
            this._otherImagesList = await FlowerGallery.getOtherImagesWithDates(this.hass, this.entityId, this._plantInfo);
            
            // Kombiniere alle Bilder für die Rotation (normale Bilder zuerst)
            const allImages = [...this._imagesList, ...this._otherImagesList];
            
            // Wenn URLs übergeben wurden, verwende diese, ansonsten benutze die geladenen Bilder
            if (this.images.length === 0) {
                this.images = allImages.map(img => img.url);
            } else {
                // Aktualisiere die images Liste auch bei Reload
                this.images = allImages.map(img => img.url);
            }
            
            // Starte Bildrotation wenn mehr als ein Bild vorhanden
            if (this._imageRotationInterval) {
                clearInterval(this._imageRotationInterval);
            }
            if (this.images.length > 1) {
                this._imageRotationInterval = setInterval(() => {
                    this._changeImage();
                }, 10000);
            }
            
            // Nötige Updates auslösen
            this.requestUpdate();
        } catch (err) {
            console.warn('Fehler beim Laden der Bilder:', err);
        } finally {
            this._isImagesLoading = false;
        }
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.parentElement !== document.body) {
            document.body.appendChild(this);
            this._reparentedToBody = true;
        }
        if (this.initialImageIndex !== undefined) {
            this._currentImageIndex = this.initialImageIndex;
        }
        // Bildrotation wird jetzt in _initGallery() gestartet, wenn die Bilder geladen sind
        // Lade die Pflanzen-Info (und dann die Bilder)
        this._loadPlantInfo();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._imageRotationInterval) {
            clearInterval(this._imageRotationInterval);
        }
    }

    static get styles(): CSSResult {
        return galleryStyles;
    }

    public static getImageDateFromUrl(url: string): Date | null {
        const match = url.match(/_(\d{8}_\d{6})/);
        if (!match) return null;

        const datePart = match[1];
        const year = datePart.slice(0, 4);
        const month = datePart.slice(4, 6);
        const day = datePart.slice(6, 8);
        const hour = datePart.slice(9, 11);
        const minute = datePart.slice(11, 13);
        return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
    }

    public static async getImagesWithDates(hass: HomeAssistant, entityId: string, plantInfo?: PlantInfo): Promise<Array<{url: string, date: Date}>> {
        const plantEntity = hass.states[entityId];
        if (!plantEntity?.attributes.images) return [];

        const downloadPath = plantEntity.attributes.download_path || '/local/images/plants/';
        const images: Array<{url: string, date: Date}> = [];

        // Benutze plantInfo wenn es übergeben wurde, ansonsten hole es über API
        let firstPhaseDate: Date | null;
        if (plantInfo) {
            firstPhaseDate = await this.getFirstPhaseDate(hass, entityId, plantInfo);
        } else {
            firstPhaseDate = await this.getFirstPhaseDate(hass, entityId);
        }

        // Füge das Hauptbild hinzu, wenn vorhanden
        if (plantEntity.attributes.entity_picture && firstPhaseDate) {
            images.push({
                url: plantEntity.attributes.entity_picture,
                date: firstPhaseDate
            });
        }

        // Füge alle anderen Bilder hinzu, die nach der ersten Phase liegen
        plantEntity.attributes.images.forEach((img: string) => {
            const imageDate = this.getImageDateFromUrl(img);
            if (imageDate && firstPhaseDate && imageDate >= firstPhaseDate) {
                images.push({
                    url: `${downloadPath}${img}`,
                    date: imageDate
                });
            }
        });

        return images.sort((a, b) => a.date.getTime() - b.date.getTime());
    }

    public static async getOtherImagesWithDates(hass: HomeAssistant, entityId: string, plantInfo?: PlantInfo): Promise<Array<{url: string, date: Date}>> {
        const plantEntity = hass.states[entityId];
        if (!plantEntity?.attributes.images) return [];

        const downloadPath = plantEntity.attributes.download_path || '/local/images/plants/';
        const otherImages: Array<{url: string, date: Date}> = [];

        // Benutze plantInfo wenn es übergeben wurde, ansonsten hole es über API
        let firstPhaseDate: Date | null;
        if (plantInfo) {
            firstPhaseDate = await this.getFirstPhaseDate(hass, entityId, plantInfo);
        } else {
            firstPhaseDate = await this.getFirstPhaseDate(hass, entityId);
        }

        if (!firstPhaseDate) return [];

        // Füge alle Bilder hinzu, die vor der ersten Phase liegen oder kein Datum haben
        plantEntity.attributes.images.forEach((img: string) => {
            const imageDate = this.getImageDateFromUrl(img);
            if (!imageDate) {
                // Bilder ohne Datum gehören zu "Andere Bilder" mit einem sehr frühen Datum
                otherImages.push({
                    url: `${downloadPath}${img}`,
                    date: new Date(1970, 0, 1) // Sehr früh, damit sie ganz am Anfang stehen
                });
            } else if (imageDate < firstPhaseDate) {
                otherImages.push({
                    url: `${downloadPath}${img}`,
                    date: imageDate
                });
            }
        });

        return otherImages.sort((a, b) => a.date.getTime() - b.date.getTime());
    }

    private static async getFirstPhaseDate(hass: HomeAssistant, entityId: string, plantInfo?: PlantInfo): Promise<Date | null> {
        // Wenn plantInfo übergeben wurde, verwende es direkt
        if (plantInfo) {
            if (!plantInfo?.helpers?.growth_phase?.entity_id) return null;
            
            const phaseEntityId = plantInfo.helpers.growth_phase.entity_id;
            const phaseEntity = hass.states[phaseEntityId];
            if (!phaseEntity) return null;

            const phases = PHASES;
            
            for (const phase of phases) {
                const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                if (startDate) {
                    return new Date(startDate);
                }
            }
            return null;
        }
        
        // Ansonsten verwende PlantEntityUtils, um die Pflanzen-Info zu holen
        try {
            const newPlantInfo = PlantEntityUtils.buildPlantView(hass, entityId) as PlantInfo;
            if (!newPlantInfo?.helpers?.growth_phase?.entity_id) return null;
            
            const phaseEntityId = newPlantInfo.helpers.growth_phase.entity_id;
            const phaseEntity = hass.states[phaseEntityId];
            if (!phaseEntity) return null;

            const phases = PHASES;
            
            for (const phase of phases) {
                const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                if (startDate) {
                    return new Date(startDate);
                }
            }
            return null;
        } catch (err) {
            console.warn('Fehler beim Laden der Pflanzen-Info für getFirstPhaseDate:', err);
            return null;
        }
    }

    private _getGroupedImages(): Array<{phase: string, images: Array<{url: string, day: number, totalDays: number}>, color: string}> {
        if (!this.entityId || !this.hass || !this._plantInfo) return [];

        const groupedImages: Array<{phase: string, images: Array<{url: string, day: number, totalDays: number}>, color: string}> = [];

        // Erstelle "Andere Bilder" Gruppe wenn vorhanden (am Anfang hinzufügen, damit sie links stehen)
        if (this._otherImagesList.length > 0) {
            const otherImagesGroup: Array<{url: string, day: number, totalDays: number}> = [];
            
            this._otherImagesList.forEach((imgObject, index) => {
                otherImagesGroup.push({
                    url: imgObject.url,
                    day: index + 1,
                    totalDays: this._otherImagesList.length
                });
            });

            groupedImages.push({
                phase: TranslationUtils.translateUI(this.hass!, 'other_images'),
                images: otherImagesGroup,
                color: 'var(--secondary-text-color)'
            });
        }

        // Hole die growth_phase Entity-ID aus der plantInfo
        if (!this._plantInfo?.helpers?.growth_phase?.entity_id) {
            return groupedImages;
        }

        const phaseEntityId = this._plantInfo.helpers.growth_phase.entity_id;
        const phaseEntity = this.hass.states[phaseEntityId];
        
        if (!phaseEntity) return groupedImages;

        const phases = PHASES;

        let currentPhase = '';
        let currentImages: Array<{url: string, day: number, totalDays: number}> = [];

        // Sammle aktive Phasen
        const activePhases = phases.filter(phase => {
            const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
            return startDate != null;
        });

        // Übersetze alle Phasen EINMAL am Anfang (Performance-Optimierung)
        const translatedPhases: {[key: string]: string} = {};
        phases.forEach(phase => {
            translatedPhases[phase] = TranslationUtils.translateGrowthPhase(this.hass!, phase);
        });

        // Finde die erste Phase
        let firstPhaseDate: Date | null = null;
        for (const phase of phases) {
            const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
            if (startDate) {
                firstPhaseDate = new Date(startDate);
                break;
            }
        }

        if (!firstPhaseDate) return groupedImages;

        // Gehe durch alle Bilder (normale Bilder nach der ersten Phase)
        this._imagesList.forEach((imgObject) => {
            const url = imgObject.url;
            const imageDate = imgObject.date;
            let imagePhase = '';
            let daysInPhase = 0;
            let totalDays = 0;

            // Finde die Phase zum Zeitpunkt des Bildes
            for (const phase of phases) {
                const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                if (startDate) {
                    const phaseStartDate = new Date(startDate);
                    if (imageDate >= phaseStartDate) {
                        imagePhase = translatedPhases[phase];
                        daysInPhase = Math.floor((imageDate.getTime() - phaseStartDate.getTime()) / (1000 * 60 * 60 * 24));
                    }
                }
            }

            // Berechne Gesamtalter
            totalDays = Math.floor((imageDate.getTime() - firstPhaseDate.getTime()) / (1000 * 60 * 60 * 24));

            if (imagePhase) {
                // Wenn sich die Phase ändert, erstelle eine neue Gruppe
                if (imagePhase !== currentPhase) {
                    if (currentImages.length > 0) {
                        const currentPhaseKey = phases.find(phase => translatedPhases[phase] === currentPhase);
                        const phaseIndex = currentPhaseKey ? activePhases.indexOf(currentPhaseKey) : -1;
                        let color = 'var(--primary-color)';

                        if (currentPhaseKey === 'harvested') {
                            color = 'repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)';
                        } else if (currentPhaseKey === 'removed') {
                            color = 'repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)';
                        } else if (currentPhaseKey) {
                            // Berechne die Helligkeit basierend auf dem Index in den aktiven Phasen
                            const lightness = 55 - ((phaseIndex / Math.max(1, activePhases.length - 1)) * 25);
                            color = `hsl(var(--hue, 120), var(--saturation, 60%), ${lightness}%)`;
                        }

                        groupedImages.push({
                            phase: currentPhase,
                            images: currentImages,
                            color: color
                        });
                    }
                    currentPhase = imagePhase;
                    currentImages = [];
                }

                currentImages.push({
                    url,
                    day: daysInPhase + 1,
                    totalDays: totalDays + 1
                });
            }
        });

        // Füge die letzte Gruppe hinzu
        if (currentImages.length > 0) {
            const currentPhaseKey = phases.find(phase => translatedPhases[phase] === currentPhase);
            const phaseIndex = currentPhaseKey ? activePhases.indexOf(currentPhaseKey) : -1;
            let color = 'var(--primary-color)';

            if (currentPhaseKey === 'harvested') {
                color = 'repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)';
            } else if (currentPhaseKey === 'removed') {
                color = 'repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)';
            } else if (currentPhaseKey) {
                // Berechne die Helligkeit basierend auf dem Index in den aktiven Phasen
                const lightness = 55 - ((phaseIndex / Math.max(1, activePhases.length - 1)) * 25);
                color = `hsl(var(--hue, 120), var(--saturation, 60%), ${lightness}%)`;
            }

            groupedImages.push({
                phase: currentPhase,
                images: currentImages,
                color: color
            });
        }

        return groupedImages;
    }

    private _getImageDate(url: string): string {
        // Suche das Bild in der geladenen Liste
        let imgObject = this._imagesList.find(img => img.url === url);
        
        // Falls nicht gefunden, suche in der "anderen Bilder" Liste
        if (!imgObject) {
            imgObject = this._otherImagesList.find(img => img.url === url);
        }
        
        if (!imgObject) return TranslationUtils.translateUI(this.hass!, 'unknown_date');

        const imageDate = imgObject.date;
        
        // Prüfe ob es ein Bild ohne Datum ist (sehr früh gesetzt)
        if (imageDate.getTime() === new Date(1970, 0, 1).getTime()) {
            return `<div class="date-line">${TranslationUtils.translateUI(this.hass!, 'unknown_date')}</div>`;
        }
        
        const dateStr = imageDate.toLocaleDateString('de-DE', {
            weekday: 'short',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Hole die Phase zum Zeitpunkt des Bildes
        // Hole die growth_phase Entity-ID aus der plantInfo
        if (!this._plantInfo?.helpers?.growth_phase?.entity_id) {
            return dateStr;
        }

        const phaseEntityId = this._plantInfo.helpers.growth_phase.entity_id;
        const phaseEntity = this.hass?.states[phaseEntityId];
        
        if (!phaseEntity) return dateStr;

        const phases = PHASES;

        let phaseAtImage = '';
        let daysInPhase = 0;
        let totalAge = 0;

        // Finde die erste Phase
        let firstPhaseDate: Date | null = null;
        for (const phase of phases) {
            const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
            if (startDate) {
                firstPhaseDate = new Date(startDate);
                break;
            }
        }

        // Finde die Phase zum Zeitpunkt des Bildes
        for (const phase of phases) {
            const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
            if (startDate) {
                const phaseStartDate = new Date(startDate);
                if (imageDate >= phaseStartDate) {
                    phaseAtImage = TranslationUtils.translateGrowthPhase(this.hass!, phase);
                    daysInPhase = Math.floor((imageDate.getTime() - phaseStartDate.getTime()) / (1000 * 60 * 60 * 24));
                }
            }
        }

        // Berechne Gesamtalter
        if (firstPhaseDate) {
            totalAge = Math.floor((imageDate.getTime() - firstPhaseDate.getTime()) / (1000 * 60 * 60 * 24));
        }

        // Prüfe ob es das erste Bild (entity_picture) ist
        if (this.images.indexOf(url) === 0) {
            // Hauptbild benutzt "Tag 1" anstatt berechnete Tage
            let info = `<div class="date-line">${dateStr}</div>`;
            info += `<div class="info-line">Tag 1 <span class="phase">${phaseAtImage}</span>/1 Total</div>`;
            return info;
        }

        // Formatiere die Ausgabe
        let info = `<div class="date-line">${dateStr}</div>`;
        info += `<div class="info-line">Tag ${daysInPhase + 1} <span class="phase">${phaseAtImage}</span>/${totalAge + 1} Total</div>`;

        return info;
    }

    render(): HTMLTemplateResult {
        return html`
            <div class="gallery-overlay" @click="${this._close}">
                <div class="gallery-content" @click="${(e: Event) => e.stopPropagation()}">
                    <div class="gallery-header">
                        <span class="gallery-date">
                            ${this.images.length > 0
                                ? unsafeHTML(this._getImageDate(this.images[this._currentImageIndex])) 
                                : TranslationUtils.translateUI(this.hass!, 'no_images_available')}
                        </span>
                        <div class="gallery-header-buttons">
                            <div class="flyout-container ${this._showFlyout ? 'open' : ''} ${this._showDeleteFlyout ? 'delete-open' : ''} ${this._showMainImageFlyout ? 'main-open' : ''}">
                                <ha-icon-button
                                    @click="${this._toggleFlyout}"
                                    .label=${TranslationUtils.translateUI(this.hass!, 'add_image')}
                                    class="add-button"
                                >
                                    <ha-icon icon="mdi:camera-plus"></ha-icon>
                                </ha-icon-button>
                                <div class="flyout-menu">
                                    <label class="flyout-option">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            @change="${(e: Event) => {
                                                this._handleFileUpload(e);
                                                this._showFlyout = false;
                                            }}"
                                            style="display: none;"
                                        >
                                        <ha-icon-button>
                                            <ha-icon icon="mdi:image"></ha-icon>
                                        </ha-icon-button>
                                    </label>
                                    <label class="flyout-option">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            capture="environment"
                                            @change="${(e: Event) => {
                                                this._handleFileUpload(e);
                                                this._showFlyout = false;
                                            }}"
                                            style="display: none;"
                                        >
                                        <ha-icon-button>
                                            <ha-icon icon="mdi:camera"></ha-icon>
                                        </ha-icon-button>
                                    </label>
                                </div>
                            </div>
                            ${this.images.length > 0 ? html`
                                <div class="flyout-container ${this._showMainImageFlyout ? 'open' : ''} ${this._showDeleteFlyout ? 'delete-open' : ''}">
                                    <ha-icon-button
                                        @click="${this._toggleMainImageFlyout}"
                                        .label=${TranslationUtils.translateUI(this.hass!, 'set_as_main_image')}
                                        class="main-button"
                                    >
                                        <ha-icon icon="mdi:image-check"></ha-icon>
                                    </ha-icon-button>
                                    <div class="flyout-menu">
                                        <ha-icon-button
                                            @click="${async () => {
                                                const url = this.images[this._currentImageIndex];
                                                const filename = url.split('/').pop();
                                                if (filename) {
                                                    try {
                                                        await this._setMainImage(filename);
                                                        this._showMainImageFlyout = false;
                                                    } catch (error) {
                                                        alert(TranslationUtils.translateUI(this.hass!, 'set_main_image_error') + ': ' + error.message);
                                                    }
                                                }
                                            }}"
                                            class="confirm-main"
                                            style="--mdc-icon-button-size: 32px; color: var(--primary-color, #03a9f4);"
                                        >
                                            <ha-icon icon="mdi:check"></ha-icon>
                                        </ha-icon-button>
                                    </div>
                                </div>
                                <div class="flyout-container ${this._showDeleteFlyout ? 'open' : ''}">
                                    <ha-icon-button
                                        @click="${this._toggleDeleteFlyout}"
                                        .label=${TranslationUtils.translateUI(this.hass!, 'delete_image')}
                                        class="delete-button"
                                    >
                                        <ha-icon icon="mdi:delete"></ha-icon>
                                    </ha-icon-button>
                                    <div class="flyout-menu">
                                        <ha-icon-button
                                            @click="${async () => {
                                                const url = this.images[this._currentImageIndex];
                                                const filename = url.split('/').pop();
                                                if (filename) {
                                                    try {
                                                        await this._deleteImage(filename);
                                                        this._showDeleteFlyout = false;
                                                        // Aktualisiere die Bilderliste
                                                        this.images = this.images.filter(img => !img.includes(filename));
                                                        // Wenn das aktuelle Bild gelöscht wurde, zeige das erste Bild an
                                                        if (this._currentImageIndex >= this.images.length) {
                                                            this._currentImageIndex = Math.max(0, this.images.length - 1);
                                                        }
                                                    } catch (error) {
                                                        alert(TranslationUtils.translateUI(this.hass!, 'delete_error') + ': ' + error.message);
                                                    }
                                                }
                                            }}"
                                            class="confirm-delete"
                                            style="--mdc-icon-button-size: 32px; color: var(--error-color, #db4437);"
                                        >
                                            <ha-icon icon="mdi:check"></ha-icon>
                                        </ha-icon-button>
                                    </div>
                                </div>
                            ` : ''}
                            <ha-icon-button
                                @click="${this._close}"
                                .label=${TranslationUtils.translateUI(this.hass!, 'close')}
                            >
                                <ha-icon icon="mdi:close"></ha-icon>
                            </ha-icon-button>
                        </div>
                    </div>
                    
                    ${this.images.length > 0 ? html`
                        <div class="gallery-image-container">
                            <ha-icon-button
                                class="gallery-nav prev"
                                @click="${() => this._changeImage('prev')}"
                                .label=${TranslationUtils.translateUI(this.hass!, 'previous_image')}
                            >
                                <ha-icon icon="mdi:chevron-left"></ha-icon>
                            </ha-icon-button>
                            <a href="${this.images[this._currentImageIndex]}" target="_blank">
                                <img class="gallery-image ${this._isFading ? 'fade' : ''}" 
                                    src="${this.images[this._currentImageIndex]}"
                                >
                            </a>
                            <ha-icon-button
                                class="gallery-nav next"
                                @click="${() => this._changeImage('next')}"
                                .label=${TranslationUtils.translateUI(this.hass!, 'next_image')}
                            >
                                <ha-icon icon="mdi:chevron-right"></ha-icon>
                            </ha-icon-button>
                        </div>
                        <div class="gallery-thumbnails">
                            <div class="thumbnails-container">
                                ${this._otherImagesList.length > 0 ? html`
                                    <div class="nav-toggle ${this._showOtherImages ? 'open' : 'closed'}"
                                         @click="${this._toggleOtherImages}">
                                        <ha-icon icon="mdi:chevron-left" class="nav-icon"></ha-icon>
                                    </div>
                                ` : ''}
                                <div class="thumbnails-scroll ${this._otherImagesList.length > 0 ? 'has-other-images' : ''} ${this._showOtherImages ? 'shifted-right' : ''}"
                                     style="--other-images-width: ${this._otherImagesList.length > 0 ? this._calculateOtherImagesWidth() : 0}px">
                                    ${this._getGroupedImages().map(group => html`
                                        <div class="thumbnail-group">
                                            <div class="thumbnail-group-label" style="--phase-color: ${group.color}">
                                                ${group.phase}
                                            </div>
                                            <div class="thumbnail-group-images">
                                                ${group.images.map(image => html`
                                                    <div class="thumbnail-container ${this.images[this._currentImageIndex] === image.url ? 'active' : ''}"
                                                         @click="${() => this._selectImage(this.images.indexOf(image.url))}">
                                                        <div class="thumbnail-day">Tag ${image.day}/${image.totalDays}</div>
                                                        <img class="thumbnail" src="${image.url}">
                                                    </div>
                                                `)}
                                            </div>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        </div>
                    ` : html`
                        <div class="no-images-message">
                            <ha-icon icon="mdi:image-off"></ha-icon>
                            <span>${TranslationUtils.translateUI(this.hass!, 'no_images_available')}</span>
                            <span>${TranslationUtils.translateUI(this.hass!, 'click_camera_to_add_image')}</span>
                        </div>
                    `}
                </div>
            </div>
        `;
    }
}

// Manuell beim Laden des Moduls registrieren, wenn noch nicht registriert
if (!customElements.get('flower-gallery')) {
    customElements.define('flower-gallery', FlowerGallery);
} 