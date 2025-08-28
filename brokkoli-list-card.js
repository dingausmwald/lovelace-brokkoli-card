/*! For license information please see brokkoli-list-card.js.LICENSE.txt */
(()=>{"use strict";var t={2489:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4437),s=i(2924),o=i(6800),l=i(1772),d=i(8330),c=i(9442),u=i(6754),p=i(8265),h=i(3048),g=i(8063),m=i(8358),f=i(7361),v=i(2413);i(9242),i(4507),console.info(`%c BROKKOLI-LIST-CARD %c ${d.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"brokkoli-list-card",name:"Brokkoli List Card",preview:!0,description:"Eine tabellarische Übersicht aller Pflanzen"});let y=class extends r.LitElement{constructor(){super(...arguments),this._showPlantDialog=!1,this._dialogPosition={x:0,y:0},this._lastSelectedEntityId=null,this.plantEntities=[],this.EDITABLE_PLANT_ATTRIBUTES=u.ConfigUtils.EDITABLE_PLANT_ATTRIBUTES}static getStubConfig(){return u.ConfigUtils.getDefaultConfig()}setConfig(t){this.config=Object.assign(Object.assign({},u.ConfigUtils.getDefaultConfig(this._hass)),t),this.stateManager&&this.stateManager.updateConfig(this.config)}set hass(t){this._hass=t,!this.stateManager&&t&&(this.stateManager=new f.StateManager(t,this.config,(()=>this.requestUpdate()))),t&&v.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()})),this.plantEntities.length?this._refreshExistingEntities():this.updatePlantEntities()}_refreshExistingEntities(){return a(this,void 0,void 0,(function*(){if(this._hass){for(let t=0;t<this.plantEntities.length;t++){const e=this.plantEntities[t],i=this._hass.states[e.entity_id],n=yield g.PlantEntityUtils.getPlantInfo(this._hass,e.entity_id),a=this._buildSensorMap(n);this.plantEntities[t]=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:a,_apiInfo:n})})}this.requestUpdate()}}))}_buildSensorMap(t){if(!t)return{};const e={};for(const i in t)t[i]&&"object"==typeof t[i]&&t[i].sensor&&(e[{moisture:"soil_moisture",humidity:"air_humidity",ph:"ph"}[i]||i]=t[i].sensor);if(t.diagnostic_sensors)for(const i in t.diagnostic_sensors)t.diagnostic_sensors[i]&&t.diagnostic_sensors[i].entity_id&&(e[{moisture:"soil_moisture",humidity:"air_humidity",total_integral:"total_ppfd_mol_integral",total_water:"total_water_consumption",total_fertilizer:"total_fertilizer_consumption"}[i]||i]=t.diagnostic_sensors[i].entity_id);if(t.helpers)for(const i in t.helpers)t.helpers[i]&&t.helpers[i].entity_id&&(e[i]=t.helpers[i].entity_id);return e}updatePlantEntities(){return a(this,void 0,void 0,(function*(){if(!this._hass)return;const t=g.PlantEntityUtils.getPlantEntities(this._hass);g.PlantEntityUtils.initPlantDataLoading(this._hass,t.map((t=>t.entity_id)));const e=[];for(const i of t)try{const t=yield g.PlantEntityUtils.getPlantInfo(this._hass,i.entity_id),n=this._buildSensorMap(t),a=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:n,_apiInfo:t})});e.push(a)}catch(t){console.error(`[FLOWER-LIST] Fehler beim Anreichern von ${i.entity_id}:`,t),e.push(i)}this.plantEntities=e,this.requestUpdate()}))}getVisibleColumns(){return u.ConfigUtils.getVisibleColumns(this.config,this._hass)}_handleAddPlant(){this._showPlantDialog=!0,this._dialogPosition={x:50,y:50},this.requestUpdate()}_handleDialogClosed(){this._showPlantDialog=!1,this.requestUpdate(),this.updatePlantEntities()}connectedCallback(){super.connectedCallback(),this.addEventListener("flower-image-click",this._handleFlowerImageClick.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("flower-image-click",this._handleFlowerImageClick.bind(this)),g.PlantEntityUtils.clearAllTimeouts()}_handleFlowerImageClick(t){if(!this.stateManager)return;const e=t.detail.entityId;e&&this.stateManager.handleGalleryOpen(e)}_handleRowClick(t,e){var i;if(t.target.closest(".clickable"))return;if(!this.stateManager)return;if(this.stateManager.getState().multiSelectMode)return;const n=this._lastSelectedEntityId===e.entity_id;if(this._lastSelectedEntityId=n?null:e.entity_id,null===(i=this.config)||void 0===i?void 0:i.identifier){const t=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:this._lastSelectedEntityId}});window.dispatchEvent(t)}}render(){var t,e,i,n,a,s;if(!this._hass||!this.stateManager)return r.html``;const o=this.stateManager.getState(),l=h.SortUtils.getSortedPlants(c.FilterUtils.getFilteredPlants(this._hass,this.plantEntities,o.filterState,o.searchQuery,this.EDITABLE_PLANT_ATTRIBUTES),o.sortColumn,o.sortDirection,this._hass),d=this.getVisibleColumns(),u=!1!==(null===(e=null===(t=this.config)||void 0===t?void 0:t.add_plant)||void 0===e?void 0:e.enabled),g=(null===(n=null===(i=this.config)||void 0===i?void 0:i.add_plant)||void 0===n?void 0:n.position)||"bottom";return r.html`
            <div class="card-container">
                <ha-card>
                    ${p.BrokkoliListComponents.renderHeader(null===(a=this.config)||void 0===a?void 0:a.title,this._hass)}
                    
                    ${p.BrokkoliListComponents.renderToolbar(this.config,o.searchQuery,o.filterMode,o.multiSelectMode,(()=>this.stateManager.toggleFilterMode()),(()=>this.stateManager.toggleMultiSelect()),(t=>this.stateManager.handleSearch(t)),(()=>this.stateManager.clearSearch()),this._hass)}

                    ${o.filterMode?p.BrokkoliListComponents.renderFilterSidebar(d,o.filterState,(t=>this.stateManager.toggleEntityType(t)),((t,e)=>this.stateManager.toggleFilter(t,e)),this._hass,this.plantEntities):""}

                    <div class="table-container${o.filterMode?" filtered":""}">
                        <table>
                            ${p.BrokkoliListComponents.renderTableHeader(d,o.multiSelectMode,o.sortColumn,o.sortDirection,(t=>this.stateManager.handleSort(t)))}
                            <tbody>
                                ${u&&"top"===g?p.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                                ${l.map((t=>p.BrokkoliListComponents.renderTableRow(t,d,o.multiSelectMode,o.selectedPlants,((t,e)=>this.stateManager.togglePlantSelection(t,e)),((t,e,i)=>this.stateManager.handleCellClick(t,e,i,this.dispatchEvent.bind(this))),((t,e)=>this._handleRowClick(t,e)),(t=>this.stateManager.getCursorStyle(t)),((t,e)=>m.CellRenderer.renderCell({hass:this._hass,plant:t,columnId:e,editingCell:o.editingCell,onCellClick:i=>this.stateManager.handleCellClick(i,t,e,this.dispatchEvent.bind(this)),onInputUpdate:(i,n)=>this.stateManager.handleInputUpdate(i,t,e,n),onRowClick:e=>this._handleRowClick(e,t)})))))}
                                ${u&&"bottom"===g?p.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                            </tbody>
                        </table>
                    </div>
                </ha-card>
            </div>
            
            ${this._showPlantDialog?r.html`
                <plant-create-dialog
                    .hass=${this._hass}
                    .position=${this._dialogPosition}
                    .areaId=${(null===(s=this.config)||void 0===s?void 0:s.area)||""}
                    @dialog-closed=${this._handleDialogClosed}
                ></plant-create-dialog>
            `:""}

            ${o.showGallery?r.html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${o.galleryEntityId||""}
                    .images=${o.galleryImages}
                    .onClose=${()=>this.stateManager.closeGallery()}
                ></flower-gallery>
            `:""}
        `}getCardSize(){return 1+Math.ceil(this.plantEntities.length/2)}static get styles(){return[o.style,l.flowerListStyle]}};n([(0,s.property)()],y.prototype,"_hass",void 0),n([(0,s.property)()],y.prototype,"config",void 0),n([(0,s.state)()],y.prototype,"_showPlantDialog",void 0),n([(0,s.state)()],y.prototype,"_dialogPosition",void 0),n([(0,s.state)()],y.prototype,"_lastSelectedEntityId",void 0),y=n([(0,s.customElement)("brokkoli-list-card")],y),e.default=y},4507:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerGallery=void 0;const r=i(4437),s=i(2924),o=i(3534),l=i(364),d=i(8063),c=i(2413),u=i(4139);class p extends r.LitElement{constructor(){super(...arguments),this.images=[],this._currentImageIndex=0,this._isFading=!1,this._showFlyout=!1,this._showDeleteFlyout=!1,this._showMainImageFlyout=!1,this._showOtherImages=!1,this._reparentedToBody=!1,this._plantInfo=null,this._isLoading=!1,this._imagesList=[],this._isImagesLoading=!1,this._otherImagesList=[]}_changeImage(){return a(this,arguments,void 0,(function*(t="next"){this._isFading=!0,this.requestUpdate(),yield new Promise((t=>setTimeout(t,500))),this._currentImageIndex="next"===t?(this._currentImageIndex+1)%this.images.length:(this._currentImageIndex-1+this.images.length)%this.images.length,this._isFading=!1,this.requestUpdate()}))}_selectImage(t){return a(this,void 0,void 0,(function*(){t!==this._currentImageIndex&&(this._isFading=!0,this.requestUpdate(),yield new Promise((t=>setTimeout(t,500))),this._currentImageIndex=t,this._isFading=!1,this.requestUpdate())}))}_toggleFlyout(t){t.preventDefault(),t.stopPropagation(),this._showFlyout=!this._showFlyout}_toggleDeleteFlyout(t){t.preventDefault(),t.stopPropagation(),this._showDeleteFlyout=!this._showDeleteFlyout}_toggleMainImageFlyout(t){t.preventDefault(),t.stopPropagation(),this._showMainImageFlyout=!this._showMainImageFlyout}_toggleOtherImages(t){t.preventDefault(),t.stopPropagation(),this._showOtherImages=!this._showOtherImages,this.requestUpdate()}_calculateOtherImagesWidth(){return 84*this._otherImagesList.length+8*Math.max(0,this._otherImagesList.length-1)+16}_handleFileUpload(t){return a(this,void 0,void 0,(function*(){const e=t.target.files;if(e&&e.length>0){const t=e[0];if(!t.type.startsWith("image/"))return void alert(c.TranslationUtils.translateUI(this.hass,"upload_images_only"));if(t.size>10485760)return void alert(c.TranslationUtils.translateUI(this.hass,"image_too_large"));try{yield this._uploadImage(t),this._showFlyout=!1}catch(t){alert(c.TranslationUtils.translateUI(this.hass,"upload_error")+": "+t.message)}}}))}_uploadImage(t){return a(this,void 0,void 0,(function*(){if(!this.entityId||!this.hass)return;const e=16384,i=new FileReader;i.onload=i=>a(this,void 0,void 0,(function*(){var n;if(!(null===(n=i.target)||void 0===n?void 0:n.result))return;const a=i.target.result,r=Math.ceil(a.byteLength/e);for(let i=0;i<r;i++){const n=a.slice(i*e,(i+1)*e),s=Array.from(new Uint8Array(n)).map((t=>t.toString(16).padStart(2,"0"))).join("");try{yield this.hass.connection.sendMessagePromise({type:"plant/upload_image",entity_id:this.entityId,filename:t.name,chunk:s,chunk_index:i,total_chunks:r})}catch(t){throw console.error("Upload error:",t),t}}yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId}),setTimeout((()=>{this._initGallery()}),1e3)})),i.readAsArrayBuffer(t)}))}_deleteImage(t){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/delete_image",entity_id:this.entityId,filename:t}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(t){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"delete_image_error")}: ${t.message}`)}}))}_setMainImage(t){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/set_main_image",entity_id:this.entityId,filename:t}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(t){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"set_main_image_error")}: ${t.message}`)}}))}_close(t){t.stopPropagation(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.onClose&&this.onClose(),this.remove()}_loadPlantInfo(){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&!this._isLoading){this._isLoading=!0;try{this._plantInfo=yield d.PlantEntityUtils.getPlantInfo(this.hass,this.entityId),yield this._initGallery()}catch(t){console.warn("Fehler beim Laden der Pflanzen-Info:",t),this._plantInfo=null}finally{this._isLoading=!1}}}))}_initGallery(){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&this._plantInfo&&!this._isImagesLoading){this._isImagesLoading=!0;try{this._imagesList=yield p.getImagesWithDates(this.hass,this.entityId,this._plantInfo),this._otherImagesList=yield p.getOtherImagesWithDates(this.hass,this.entityId,this._plantInfo);const t=[...this._imagesList,...this._otherImagesList];this.images.length,this.images=t.map((t=>t.url)),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.images.length>1&&(this._imageRotationInterval=setInterval((()=>{this._changeImage()}),1e4)),this.requestUpdate()}catch(t){console.warn("Fehler beim Laden der Bilder:",t)}finally{this._isImagesLoading=!1}}}))}connectedCallback(){super.connectedCallback(),this.parentElement!==document.body&&(document.body.appendChild(this),this._reparentedToBody=!0),void 0!==this.initialImageIndex&&(this._currentImageIndex=this.initialImageIndex),this._loadPlantInfo()}disconnectedCallback(){super.disconnectedCallback(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval)}static get styles(){return l.galleryStyles}static getImageDateFromUrl(t){const e=t.match(/_(\d{8}_\d{6})/);if(!e)return null;const i=e[1],n=i.slice(0,4),a=i.slice(4,6),r=i.slice(6,8),s=i.slice(9,11),o=i.slice(11,13);return new Date(`${n}-${a}-${r}T${s}:${o}:00`)}static getImagesWithDates(t,e,i){return a(this,void 0,void 0,(function*(){const n=t.states[e];if(!(null==n?void 0:n.attributes.images))return[];const a=n.attributes.download_path||"/local/images/plants/",r=[];let s;return s=i?yield this.getFirstPhaseDate(t,e,i):yield this.getFirstPhaseDate(t,e),n.attributes.entity_picture&&s&&r.push({url:n.attributes.entity_picture,date:s}),n.attributes.images.forEach((t=>{const e=this.getImageDateFromUrl(t);e&&s&&e>=s&&r.push({url:`${a}${t}`,date:e})})),r.sort(((t,e)=>t.date.getTime()-e.date.getTime()))}))}static getOtherImagesWithDates(t,e,i){return a(this,void 0,void 0,(function*(){const n=t.states[e];if(!(null==n?void 0:n.attributes.images))return[];const a=n.attributes.download_path||"/local/images/plants/",r=[];let s;return s=i?yield this.getFirstPhaseDate(t,e,i):yield this.getFirstPhaseDate(t,e),s?(n.attributes.images.forEach((t=>{const e=this.getImageDateFromUrl(t);e?e<s&&r.push({url:`${a}${t}`,date:e}):r.push({url:`${a}${t}`,date:new Date(1970,0,1)})})),r.sort(((t,e)=>t.date.getTime()-e.date.getTime()))):[]}))}static getFirstPhaseDate(t,e,i){return a(this,void 0,void 0,(function*(){var n,a,r,s;if(i){if(!(null===(a=null===(n=null==i?void 0:i.helpers)||void 0===n?void 0:n.growth_phase)||void 0===a?void 0:a.entity_id))return null;const e=i.helpers.growth_phase.entity_id,r=t.states[e];if(!r)return null;const s=u.PHASES;for(const t of s){const e=r.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e)return new Date(e)}return null}try{const i=yield d.PlantEntityUtils.getPlantInfo(t,e);if(!(null===(s=null===(r=null==i?void 0:i.helpers)||void 0===r?void 0:r.growth_phase)||void 0===s?void 0:s.entity_id))return null;const n=i.helpers.growth_phase.entity_id,a=t.states[n];if(!a)return null;const o=u.PHASES;for(const t of o){const e=a.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e)return new Date(e)}return null}catch(t){return console.warn("Fehler beim Laden der Pflanzen-Info für getFirstPhaseDate:",t),null}}))}_getGroupedImages(){var t,e,i;if(!this.entityId||!this.hass||!this._plantInfo)return[];const n=[];if(this._otherImagesList.length>0){const t=[];this._otherImagesList.forEach(((e,i)=>{t.push({url:e.url,day:i+1,totalDays:this._otherImagesList.length})})),n.push({phase:c.TranslationUtils.translateUI(this.hass,"other_images"),images:t,color:"var(--secondary-text-color)"})}if(!(null===(i=null===(e=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===e?void 0:e.growth_phase)||void 0===i?void 0:i.entity_id))return n;const a=this._plantInfo.helpers.growth_phase.entity_id,r=this.hass.states[a];if(!r)return n;const s=u.PHASES;let o="",l=[];const d=s.filter((t=>null!=r.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`])),p={};s.forEach((t=>{p[t]=c.TranslationUtils.translateGrowthPhase(this.hass,t)}));let h=null;for(const t of s){const e=r.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){h=new Date(e);break}}if(!h)return n;if(this._imagesList.forEach((t=>{const e=t.url,i=t.date;let a="",c=0,u=0;for(const t of s){const e=r.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const n=new Date(e);i>=n&&(a=p[t],c=Math.floor((i.getTime()-n.getTime())/864e5))}}if(u=Math.floor((i.getTime()-h.getTime())/864e5),a){if(a!==o){if(l.length>0){const t=s.find((t=>p[t]===o)),e=t?d.indexOf(t):-1;let i="var(--primary-color)";"harvested"===t?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===t?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":t&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-e/Math.max(1,d.length-1)*25}%)`),n.push({phase:o,images:l,color:i})}o=a,l=[]}l.push({url:e,day:c+1,totalDays:u+1})}})),l.length>0){const t=s.find((t=>p[t]===o)),e=t?d.indexOf(t):-1;let i="var(--primary-color)";"harvested"===t?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===t?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":t&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-e/Math.max(1,d.length-1)*25}%)`),n.push({phase:o,images:l,color:i})}return n}_getImageDate(t){var e,i,n,a;let r=this._imagesList.find((e=>e.url===t));if(r||(r=this._otherImagesList.find((e=>e.url===t))),!r)return c.TranslationUtils.translateUI(this.hass,"unknown_date");const s=r.date;if(s.getTime()===new Date(1970,0,1).getTime())return`<div class="date-line">${c.TranslationUtils.translateUI(this.hass,"unknown_date")}</div>`;const o=s.toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});if(!(null===(n=null===(i=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===i?void 0:i.growth_phase)||void 0===n?void 0:n.entity_id))return o;const l=this._plantInfo.helpers.growth_phase.entity_id,d=null===(a=this.hass)||void 0===a?void 0:a.states[l];if(!d)return o;const p=u.PHASES;let h="",g=0,m=0,f=null;for(const t of p){const e=d.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){f=new Date(e);break}}for(const t of p){const e=d.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const i=new Date(e);s>=i&&(h=c.TranslationUtils.translateGrowthPhase(this.hass,t),g=Math.floor((s.getTime()-i.getTime())/864e5))}}if(f&&(m=Math.floor((s.getTime()-f.getTime())/864e5)),0===this.images.indexOf(t)){let t=`<div class="date-line">${o}</div>`;return t+=`<div class="info-line">Tag 1 <span class="phase">${h}</span>/1 Total</div>`,t}let v=`<div class="date-line">${o}</div>`;return v+=`<div class="info-line">Tag ${g+1} <span class="phase">${h}</span>/${m+1} Total</div>`,v}render(){return r.html`
            <div class="gallery-overlay" @click="${this._close}">
                <div class="gallery-content" @click="${t=>t.stopPropagation()}">
                    <div class="gallery-header">
                        <span class="gallery-date">
                            ${this.images.length>0?(0,o.unsafeHTML)(this._getImageDate(this.images[this._currentImageIndex])):c.TranslationUtils.translateUI(this.hass,"no_images_available")}
                        </span>
                        <div class="gallery-header-buttons">
                            <div class="flyout-container ${this._showFlyout?"open":""} ${this._showDeleteFlyout?"delete-open":""} ${this._showMainImageFlyout?"main-open":""}">
                                <ha-icon-button
                                    @click="${this._toggleFlyout}"
                                    .label=${c.TranslationUtils.translateUI(this.hass,"add_image")}
                                    class="add-button"
                                >
                                    <ha-icon icon="mdi:camera-plus"></ha-icon>
                                </ha-icon-button>
                                <div class="flyout-menu">
                                    <label class="flyout-option">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            @change="${t=>{this._handleFileUpload(t),this._showFlyout=!1}}"
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
                                            @change="${t=>{this._handleFileUpload(t),this._showFlyout=!1}}"
                                            style="display: none;"
                                        >
                                        <ha-icon-button>
                                            <ha-icon icon="mdi:camera"></ha-icon>
                                        </ha-icon-button>
                                    </label>
                                </div>
                            </div>
                            ${this.images.length>0?r.html`
                                <div class="flyout-container ${this._showMainImageFlyout?"open":""} ${this._showDeleteFlyout?"delete-open":""}">
                                    <ha-icon-button
                                        @click="${this._toggleMainImageFlyout}"
                                        .label=${c.TranslationUtils.translateUI(this.hass,"set_as_main_image")}
                                        class="main-button"
                                    >
                                        <ha-icon icon="mdi:image-check"></ha-icon>
                                    </ha-icon-button>
                                    <div class="flyout-menu">
                                        <ha-icon-button
                                            @click="${()=>a(this,void 0,void 0,(function*(){const t=this.images[this._currentImageIndex].split("/").pop();if(t)try{yield this._setMainImage(t),this._showMainImageFlyout=!1}catch(t){alert(c.TranslationUtils.translateUI(this.hass,"set_main_image_error")+": "+t.message)}}))}"
                                            class="confirm-main"
                                            style="--mdc-icon-button-size: 32px; color: var(--primary-color, #03a9f4);"
                                        >
                                            <ha-icon icon="mdi:check"></ha-icon>
                                        </ha-icon-button>
                                    </div>
                                </div>
                                <div class="flyout-container ${this._showDeleteFlyout?"open":""}">
                                    <ha-icon-button
                                        @click="${this._toggleDeleteFlyout}"
                                        .label=${c.TranslationUtils.translateUI(this.hass,"delete_image")}
                                        class="delete-button"
                                    >
                                        <ha-icon icon="mdi:delete"></ha-icon>
                                    </ha-icon-button>
                                    <div class="flyout-menu">
                                        <ha-icon-button
                                            @click="${()=>a(this,void 0,void 0,(function*(){const t=this.images[this._currentImageIndex].split("/").pop();if(t)try{yield this._deleteImage(t),this._showDeleteFlyout=!1,this.images=this.images.filter((e=>!e.includes(t))),this._currentImageIndex>=this.images.length&&(this._currentImageIndex=Math.max(0,this.images.length-1))}catch(t){alert(c.TranslationUtils.translateUI(this.hass,"delete_error")+": "+t.message)}}))}"
                                            class="confirm-delete"
                                            style="--mdc-icon-button-size: 32px; color: var(--error-color, #db4437);"
                                        >
                                            <ha-icon icon="mdi:check"></ha-icon>
                                        </ha-icon-button>
                                    </div>
                                </div>
                            `:""}
                            <ha-icon-button
                                @click="${this._close}"
                                .label=${c.TranslationUtils.translateUI(this.hass,"close")}
                            >
                                <ha-icon icon="mdi:close"></ha-icon>
                            </ha-icon-button>
                        </div>
                    </div>
                    
                    ${this.images.length>0?r.html`
                        <div class="gallery-image-container">
                            <ha-icon-button
                                class="gallery-nav prev"
                                @click="${()=>this._changeImage("prev")}"
                                .label=${c.TranslationUtils.translateUI(this.hass,"previous_image")}
                            >
                                <ha-icon icon="mdi:chevron-left"></ha-icon>
                            </ha-icon-button>
                            <a href="${this.images[this._currentImageIndex]}" target="_blank">
                                <img class="gallery-image ${this._isFading?"fade":""}" 
                                    src="${this.images[this._currentImageIndex]}"
                                >
                            </a>
                            <ha-icon-button
                                class="gallery-nav next"
                                @click="${()=>this._changeImage("next")}"
                                .label=${c.TranslationUtils.translateUI(this.hass,"next_image")}
                            >
                                <ha-icon icon="mdi:chevron-right"></ha-icon>
                            </ha-icon-button>
                        </div>
                        <div class="gallery-thumbnails">
                            <div class="thumbnails-container">
                                ${this._otherImagesList.length>0?r.html`
                                    <div class="nav-toggle ${this._showOtherImages?"open":"closed"}"
                                         @click="${this._toggleOtherImages}">
                                        <ha-icon icon="mdi:chevron-left" class="nav-icon"></ha-icon>
                                    </div>
                                `:""}
                                <div class="thumbnails-scroll ${this._otherImagesList.length>0?"has-other-images":""} ${this._showOtherImages?"shifted-right":""}"
                                     style="--other-images-width: ${this._otherImagesList.length>0?this._calculateOtherImagesWidth():0}px">
                                    ${this._getGroupedImages().map((t=>r.html`
                                        <div class="thumbnail-group">
                                            <div class="thumbnail-group-label" style="--phase-color: ${t.color}">
                                                ${t.phase}
                                            </div>
                                            <div class="thumbnail-group-images">
                                                ${t.images.map((t=>r.html`
                                                    <div class="thumbnail-container ${this.images[this._currentImageIndex]===t.url?"active":""}"
                                                         @click="${()=>this._selectImage(this.images.indexOf(t.url))}">
                                                        <div class="thumbnail-day">Tag ${t.day}/${t.totalDays}</div>
                                                        <img class="thumbnail" src="${t.url}">
                                                    </div>
                                                `))}
                                            </div>
                                        </div>
                                    `))}
                                </div>
                            </div>
                        </div>
                    `:r.html`
                        <div class="no-images-message">
                            <ha-icon icon="mdi:image-off"></ha-icon>
                            <span>${c.TranslationUtils.translateUI(this.hass,"no_images_available")}</span>
                            <span>${c.TranslationUtils.translateUI(this.hass,"click_camera_to_add_image")}</span>
                        </div>
                    `}
                </div>
            </div>
        `}}e.FlowerGallery=p,n([(0,s.property)()],p.prototype,"hass",void 0),n([(0,s.property)()],p.prototype,"entityId",void 0),n([(0,s.property)({type:Array})],p.prototype,"images",void 0),n([(0,s.property)()],p.prototype,"onClose",void 0),n([(0,s.property)()],p.prototype,"getImageDate",void 0),n([(0,s.property)({type:Number})],p.prototype,"initialImageIndex",void 0),n([(0,s.state)()],p.prototype,"_currentImageIndex",void 0),n([(0,s.state)()],p.prototype,"_isFading",void 0),n([(0,s.state)()],p.prototype,"_showFlyout",void 0),n([(0,s.state)()],p.prototype,"_showDeleteFlyout",void 0),n([(0,s.state)()],p.prototype,"_showMainImageFlyout",void 0),n([(0,s.state)()],p.prototype,"_showOtherImages",void 0),customElements.get("flower-gallery")||customElements.define("flower-gallery",p)},9242:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantCreateDialog=void 0;const r=i(4437),s=i(2924),o=i(2413),l=customElements.get("plant-create-dialog");class d extends r.LitElement{constructor(){super(...arguments),this.position={x:0,y:0}}closeDialog(){this.dispatchEvent(new CustomEvent("dialog-closed"))}createPlant(t){return a(this,void 0,void 0,(function*(){if(t.preventDefault(),!this.hass)return;const e=new FormData(t.target),i={};e.forEach(((t,e)=>{""!==t&&"string"==typeof t&&(i[e]=t)}));try{const t=yield this.hass.callWS({type:"call_service",domain:"plant",service:"create_plant",service_data:i,return_response:!0});if(t&&t.response){const{entity_id:e,device_id:i}=t.response;e&&i&&(yield this._setPositionAndArea(e,i,this.position,this.areaId))}this.closeDialog()}catch(t){}}))}_setPositionAndArea(t,e,i,n){return a(this,void 0,void 0,(function*(){if(this.hass)try{if(this.dispatchEvent(new CustomEvent("plant-created",{bubbles:!0,composed:!0,detail:{entity_id:t,device_id:e,position:i,area_id:n}})),n){const t=n.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[e],area_id:t})}}catch(t){}}))}render(){return this.hass?r.html`
      <div class="dialog-container">
        <div class="dialog-content">
          <div class="dialog-header">
            <h2>Neue Pflanze erstellen</h2>
            <button class="close-button" @click=${this.closeDialog}>×</button>
          </div>
          <form @submit=${this.createPlant}>
            <div class="form-field">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-field">
              <label for="strain">Strain</label>
              <input type="text" id="strain" name="strain" required>
            </div>
            <div class="form-field">
              <label for="breeder">Breeder</label>
              <input type="text" id="breeder" name="breeder" required>
            </div>
            <div class="form-field">
              <label for="plant_emoji">Icon</label>
              <input type="text" id="plant_emoji" name="plant_emoji" value="🥦">
            </div>
            <div class="form-field">
              <label for="growth_phase">Wachstumsphase</label>
              <select id="growth_phase" name="growth_phase" required>
                <option value="seeds">${o.TranslationUtils.translateGrowthPhase(this.hass,"seeds")}</option>
                <option value="germination">${o.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                <option value="rooting" selected>${o.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                <option value="growth">${o.TranslationUtils.translateGrowthPhase(this.hass,"growth")}</option>
                <option value="flowering">${o.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                <option value="removed">${o.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
                <option value="harvested">${o.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
              </select>
            </div>

            <div class="form-field">
              <label for="temperature_sensor">Temperatursensor</label>
              <select id="temperature_sensor" name="temperature_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"temperature"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="moisture_sensor">Feuchtigkeitssensor</label>
              <select id="moisture_sensor" name="moisture_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"moisture"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="conductivity_sensor">Leitfähigkeitssensor</label>
              <select id="conductivity_sensor" name="conductivity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"conductivity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="ph_sensor">pH-Sensor</label>
              <select id="ph_sensor" name="ph_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"ph"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="illuminance_sensor">Helligkeitssensor</label>
              <select id="illuminance_sensor" name="illuminance_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"illuminance"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="humidity_sensor">Luftfeuchtigkeitssensor</label>
              <select id="humidity_sensor" name="humidity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"humidity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="power_consumption_sensor">Energieverbrauchssensor</label>
              <select id="power_consumption_sensor" name="power_consumption_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"energy"===i.attributes.device_class})).map((([t,e])=>{const i=e;return r.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-actions">
              <button type="button" @click=${this.closeDialog}>Abbrechen</button>
              <button type="submit">Erstellen</button>
            </div>
          </form>
        </div>
      </div>
    `:r.html``}static get styles(){return r.css`
      .dialog-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .dialog-content {
        background-color: var(--card-background-color, #fff);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        padding: 1.5rem;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .dialog-header h2 {
        margin: 0;
        font-size: 1.5rem;
      }

      .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.3rem;
        border-radius: 50%;
        line-height: 1;
        width: 2rem;
        height: 2rem;
      }

      .form-field {
        margin-bottom: 1rem;
      }

      label {
        display: block;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }

      input, select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        font-size: 1rem;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }

      button {
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 1rem;
        border: none;
      }

      button[type="submit"] {
        background-color: var(--primary-color);
        color: white;
      }
    `}}n([(0,s.property)({attribute:!1})],d.prototype,"hass",void 0),n([(0,s.property)()],d.prototype,"position",void 0),n([(0,s.property)()],d.prototype,"areaId",void 0),l||customElements.define("plant-create-dialog",d),e.PlantCreateDialog=l?customElements.get("plant-create-dialog"):d},6800:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const n=i(4437);e.style=n.css`
  /* ===== Base Card Styles ===== */
  ha-card {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    max-height: 100%;
    overflow: visible !important;
  }

  .card-margin-top {
    margin-top: 32px;
  }

  /* ===== Header Section ===== */
  .header,
  .header-compact {
    position: relative;
  }

  .header {
    padding-top: 8px;
    height: 100px;
  }

  .header-compact {
    padding-top: 4px;
    height: 55px;
  }

  /* Menu Button */
  .menu-button {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 3;
  }

  .menu-button ha-icon {
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .menu-button:hover ha-icon {
    opacity: 1;
  }

  /* Flyout Menu */
  .flyout-menu {
    position: absolute;
    top: 40px;
    right: 8px;
    background: var(--card-background-color);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    overflow: hidden;
    min-width: 180px;
  }

  .flyout-menu-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .flyout-menu-item:hover {
    background-color: var(--secondary-background-color);
  }

  .flyout-menu-item ha-icon {
    color: var(--primary-text-color);
    opacity: 0.9;
  }

  .flyout-menu-divider {
    height: 1px;
    background-color: var(--divider-color);
    margin: 4px 0;
  }

  /* Plant Dropdown Styles */
  .plant-dropdown-container {
    position: relative;
    display: block;
    margin: 4px 0 0 132px;
    color: #8c96a5;
    text-transform: capitalize;
  }
  
  .clickable-plants {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .clickable-plants:hover {
    text-decoration: underline;
  }

  .plant-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--card-background-color);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
    overflow: hidden;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    margin-top: 5px;
  }

  .plant-dropdown-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid var(--divider-color);
  }

  .plant-dropdown-item:last-child {
    border-bottom: none;
  }

  .plant-dropdown-item:hover {
    background-color: var(--secondary-background-color);
  }

  .plant-dropdown-name {
    font-weight: 500;
    margin-bottom: 4px;
  }

  .plant-dropdown-info {
    font-size: 0.85em;
    opacity: 0.8;
  }

  /* Popup Dialog */
  .popup-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .popup-content {
    background: var(--card-background-color);
    border-radius: 8px;
    padding: 24px;
    min-width: 300px;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .popup-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--divider-color);
    padding-bottom: 10px;
  }

  .popup-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
  }

  .popup-buttons button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .popup-buttons button:first-child {
    background-color: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .popup-buttons button:last-child {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .popup-buttons button:hover {
    opacity: 0.9;
  }

  .popup-buttons button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .popup-buttons button.danger {
    background-color: var(--error-color);
    color: white;
  }

  /* Form Fields */
  .form-field {
    margin-bottom: 16px;
  }

  .form-field label {
    display: block;
    margin-bottom: 6px;
    color: var(--primary-text-color);
    font-weight: 500;
  }

  .form-field .input-group {
    display: flex;
    gap: 8px;
  }

  .form-field .input-group input {
    flex: 1;
  }

  /* Sensor Replacement Styles */
  .form-field select {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    padding-right: 30px;
  }

  .form-field select:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  /* Header Image Container */
  .image-container {
    position: relative;
    width: 100px;
    height: 100px;
    float: left;
    margin: -16px 16px 0;
  }

  .header-compact .image-container {
    width: 50px;
    height: 50px;
    margin: 0 8px;
  }

  /* Header Image */
  .image-container .back-image,
  .image-container .front-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2));
  }

  .image-container .back-image {
    z-index: 1;
  }

  .image-container .front-image {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .image-container .front-image.fade {
    opacity: 0;
  }

  .header > img {
    width: 100px;
    height: 100px;
    margin: -16px 16px 0;
  }

  .header-compact > img {
    width: 50px;
    height: 50px;
    margin: 0 8px;
  }

  .header > img.fade,
  .header-compact > img.fade {
    opacity: 0;
  }

  /* Header Text */
  .header > #name,
  .header-compact > #name {
    font-weight: bold;
    text-transform: capitalize;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header > #name {
    width: fit-content;
    max-width: calc(100% - 150px);
    margin: 16px 0 0 132px;
  }

  .header-compact > #name {
    width: calc(100% - 74px);
    margin-top: 8px;
  }

  #name ha-icon {
    color: rgb(240, 163, 163);
  }

  .header > #species {
    text-transform: capitalize;
    color: #8c96a5;
    display: block;
    margin: 4px 0 0 132px;
  }

  .header-compact > #species {
    text-transform: capitalize;
    color: #8c96a5;
    display: block;
    margin: 4px 0 0 0;
  }

  .header-compact .plant-dropdown-container {
    margin: 4px 0 0 0;
  }

  /* Header Status */
  #battery {
    float: right;
    margin: -15px 16px 0 0;
  }

  .header > #status-container {
    display: flex;
    gap: 16px;
    margin: 4px 0 0 132px;
  }

  .header > #status-container span {
    color: #8c96a5;
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }

  .header > #metrics-container {
    display: none;
  }

  .header > #metrics-container ha-icon,
  .header > #status-container ha-icon {
    margin-right: 4px;
  }

  /* ===== Divider ===== */
  .divider {
    height: 1px;
    background-color: #727272;
    opacity: 0.25;
    margin: 0 8px;
  }

  /* ===== Attributes Section ===== */
  .attributes {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }

  .attributes:first-child {
    margin-top: 16px;
  }

  .attributes.width-100 {
    padding: 2px;
  }

  /* Container für Full-Width Items */
  .attributes.has-full-width-item {
    display: block;
  }

  /* Basis-Styling für alle Attribute */
  .attribute {
    display: flex;
    align-items: center;
    width: 50%;
    box-sizing: border-box;
    position: relative;
  }

  /* Attribute in voller Breite */
  .attribute.width-100,
  .attribute.full-width {
    width: 100%;
  }

  /* Header in Attributen */
  .attribute .header {
    margin-left: auto;
    min-width: 20px;
    height: auto;
    padding-top: 0;
  }

  /* Header in Width-100 ausblenden, aber in Full-Width anzeigen */
  .attribute.width-100 .header {
    display: none;
  }

  .attribute.width-100.full-width .header {
    display: flex;
  }

  /* Icon-Styling */
  .attribute ha-icon {
    margin-right: 8px;
  }

  /* Cursor für klickbare Health-Bar Icons */
  .attribute[data-attribute="health"] ha-icon {
    cursor: pointer;
  }

  /* ===== Meter Styles ===== */
  .meter {
    height: 8px;
    background-color: var(--primary-background-color);
    border-radius: 2px;
    display: inline-grid;
    overflow: hidden;
  }

  .meter.red {
    flex-grow: 1;
    margin-right: 5px;
  }

  .meter.green {
    flex-grow: 10;
    margin-right: 8px;
  }

  /* Spezielle Styles für Health-Bar-Meter */
  .attribute[data-attribute="health"] .meter.green {
    display: grid; 
    grid-template-columns: repeat(10, 1fr); 
    column-gap: 5px; 
    position: relative;
    background-color: transparent;
  }

  /* Health-Bar in Full-Width */
  .attribute.full-width[data-attribute="health"] .meter.green {
    flex: 1;
    width: 100%;
  }

  /* Health-Segmente */
  .attribute[data-attribute="health"] .health-segment {
    grid-row: 1;
    border-radius: 2px;
    height: 8px;
  }

  /* Range-Input für Health-Bar */
  .attribute[data-attribute="health"] .meter.green input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0001;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .meter > span {
    grid-row: 1;
    grid-column: 1;
    height: 100%;
  }

  .meter > .good {
    background-color: rgba(43, 194, 83, 1);
  }

  .meter > .bad {
    background-color: rgba(240, 163, 163);
  }

  .meter > .unavailable {
    background-color: rgba(158, 158, 158, 1);
  }

  /* ===== Tooltip Styles ===== */
  .tooltip {
    position: relative;
    cursor: pointer;
    overflow: visible !important;
    z-index: 2;
  }

  .tooltip .tip {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    padding: 6px 10px;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(97, 97, 97, 0.9);
    color: white;
    white-space: normal;
    z-index: 99999;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    max-width: 300px;
    min-width: 150px;
    text-align: center;
    word-break: normal;
    overflow-wrap: break-word;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    transition-delay: 0s;
  }

  .tooltip .tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(97, 97, 97, 0.9) transparent transparent transparent;
  }

  .battery.tooltip .tip {
    bottom: 180%;
    min-width: unset;
  }

  .tooltip:hover .tip {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.3s;
  }

  /* Ensure tooltips don't get cut off at the edges */
  .attributes .tooltip:first-child .tip {
    left: 20%;
    transform: translateX(0);
  }

  .attributes .tooltip:first-child .tip::after {
    left: 10%;
  }

  .attributes .tooltip:last-child .tip {
    left: 80%;
    transform: translateX(-100%);
  }

  .attributes .tooltip:last-child .tip::after {
    left: 90%;
  }
  
  /* Special handling for compact mode */
  .attributes.width-100 .tooltip .tip {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .attributes.width-100 .tooltip .tip::after {
    left: 50%;
  }

  /* Special handling for full-width items */
  .attributes.has-full-width-item .tooltip .tip {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .attributes.has-full-width-item .tooltip .tip::after {
    left: 50%;
  }

  /* ===== Options Styles ===== */
  .options-container {
    display: flex;
    justify-content: space-between;
    height: 16px;
    line-height: 0;
  }

  /* Wenn options-container das erste Element ist */
  .options-container:first-child {
    margin-top: 0;
  }

  .options-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 2px 0;
    transition: background-color 0.2s ease-in-out;
  }

  .options-section:hover {
    background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
  }

  .options-section ha-icon {
    color: var(--primary-text-color);
    opacity: 0.5;
    width: 12px;
    height: 12px;
    --mdc-icon-size: 12px;
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .options-section.expanded ha-icon {
    opacity: 1;
    transform: rotate(180deg);
    color: var(--primary-color, #03a9f4);
  }

  /* ===== Expanded Content Styles ===== */
  .expanded-content {
    display: none;
    padding: 0 8px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }

  .expanded-content.show {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
    margin: 8px 0;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Wenn expanded-content das erste Element ist */
  .expanded-content.show:first-child {
    margin-top: 16px;
  }

  .expanded-content.show flower-graph,
  .expanded-content.show flower-timeline,
  .expanded-content.show flower-consumption,
  .expanded-content.show flower-history {
    width: 100%;
    max-width: 100%;
    display: block;
  }

  /* Schmale Scrollbar für Webkit-Browser (Chrome, Safari, etc.) */
  .expanded-content.show::-webkit-scrollbar {
    width: 6px;
  }

  .expanded-content.show::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .expanded-content.show::-webkit-scrollbar-track {
    background: transparent;
  }

  /* ===== Plant Details Styles ===== */
  .plant-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 8px 0;
    padding: 0 8px;
    box-sizing: border-box;
  }

  /* Wenn plant-details das erste Element ist */
  .plant-details:first-child {
    margin-top: 16px;
    padding-top: 8px;
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    background: var(--card-background-color, #fff);
    border-radius: 4px;
  }

  .detail-item.full-width {
    grid-column: 1 / -1;
  }

  .detail-item .label {
    font-size: 0.8em;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .detail-item .value {
    font-size: 0.9em;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .detail-item .link {
    color: var(--primary-color);
    text-decoration: none;
  }

  .detail-item .link:hover {
    text-decoration: underline;
  }

  .detail-item ha-icon {
    color: var(--primary-text-color);
    opacity: 0.7;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 600px) {
    .header > .unit {
      display: none;
    }
  }

  /* ===== Timeline Container Styles ===== */
  .timeline-container {
    width: 100%;
    overflow-x: hidden;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 8px 0;
  }

  /* Wenn der Container das erste Element ist */
  .timeline-container:first-child {
    margin-top: 16px;
  }

  .timeline-container flower-graph,
  .timeline-container flower-timeline {
    width: 100%;
    max-width: 100%;
    display: block;
  }

  /* ===== Component Container Styles ===== */
  .component-container {
    width: 100%;
    overflow-x: hidden;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 0 0 8px 0;
  }

  /* Wenn der Container das erste Element ist */
  .component-container:first-child {
    margin-top: 0;
  }

  .component-container flower-consumption,
  .component-container flower-history {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`},1772:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.flowerListStyle=void 0;const n=i(4437);e.flowerListStyle=n.css`
  /* Table Container */
  .table-container {
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .table-container::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .table-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .table-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .table-container::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .table-container.filtered {
    margin-left: 212px;
  }

  /* Table Styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    color: var(--primary-text-color);
    table-layout: auto;
  }

  thead {
    position: sticky;
    top: 0;
    background: var(--card-background-color);
    z-index: 1;
  }

  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 1px solid var(--divider-color);
    user-select: none;
    height: 26px;
    line-height: 26px;
  }

  th:hover {
    background-color: var(--secondary-background-color);
  }

  td, th {
    padding: 12px 16px;
    border-bottom: 1px solid var(--divider-color);
    white-space: nowrap;
    width: fit-content;
  }

  td[data-column="website"] {
    width: 1%;
    white-space: nowrap;
  }

  tr:hover {
    background-color: var(--secondary-background-color);
    cursor: pointer;
  }

  /* Column Widths */
  td[data-column="friendly_name"],
  th[data-column="friendly_name"] {
    max-width: 200px;
    width: fit-content;
  }

  td[data-column="strain"],
  th[data-column="strain"],
  td[data-column="breeder"],
  th[data-column="breeder"],
  td[data-column="notes"],
  th[data-column="notes"] {
    max-width: 150px;
    width: fit-content;
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Plant Name Cell */
  .plant-name {
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 100%;
    min-height: 32px;
  }

  .plant-name img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .plant-name img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 5px rgba(var(--rgb-primary-color, 33, 150, 243), 0.6);
  }

  .plant-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0;
    margin: 0;
  }

  .plant-icon ha-icon {
    --mdc-icon-size: 20px;
    color: var(--text-primary-color, white);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
  }

  /* Filter Sidebar */
  .filter-sidebar {
    position: absolute;
    left: 0;
    top: 98px;
    bottom: 0;
    width: 164px;
    background: var(--card-background-color);
    border-right: 1px solid var(--divider-color);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
    padding: 16px 16px 16px 24px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .filter-sidebar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .filter-sidebar::-webkit-scrollbar-track {
    background: transparent;
  }

  .filter-sidebar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .filter-sidebar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .entity-type-filter {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .filter-group {
    margin-bottom: 16px;
    width: 100%;
  }

  .filter-header {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-text-color);
    word-break: break-word;
  }

  .filter-item {
    display: flex;
    align-items: flex-start;
    padding: 4px 0;
    color: var(--primary-text-color);
    cursor: pointer;
    width: 100%;
  }

  .filter-item input[type="checkbox"] {
    margin: 3px 8px 0 0;
    flex-shrink: 0;
  }

  .filter-item span {
    word-break: break-word;
    white-space: normal;
    line-height: 1.4;
    flex: 1;
  }

  .filter-range-inputs {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    width: 100%;
  }

  .filter-input {
    all: unset;
    width: 35px;
    text-align: right;
    color: var(--primary-text-color);
  }

  .filter-input::-webkit-outer-spin-button,
  .filter-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .filter-input[type=number] {
    -moz-appearance: textfield;
  }

  .filter-range-inputs span {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }

  /* Search Bar */
  .search-container {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 8px 16px;
    border-bottom: none;
  }

  .search-container ha-icon {
    color: var(--secondary-text-color);
    margin-right: 8px;
  }

  .search-container input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    padding: 8px;
    font-size: 16px;
    color: var(--primary-text-color);
  }

  .search-container input::placeholder {
    color: var(--secondary-text-color);
  }

  .search-container ha-icon-button {
    --mdc-icon-button-size: 24px;
    color: var(--secondary-text-color);
  }

  /* Toolbar */
  .toolbar {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid var(--divider-color);
    border-top: none;
    background-color: var(--card-background-color);
    height: 48px;
    flex-shrink: 0;
  }

  .toolbar ha-icon-button {
    --mdc-icon-button-size: 40px;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .toolbar ha-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  /* Table Input Styles */
  td input[type="number"],
  td input[type="text"],
  td select {
    all: unset;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    color: var(--primary-text-color);
  }

  td input[type="number"] {
    text-align: right;
  }

  td input[type="text"],
  td select {
    text-align: left;
  }

  td[data-column="website"] input {
    width: 100%;
    min-width: 100%;
  }

  td input[type="number"]::-webkit-outer-spin-button,
  td input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  td input[type="number"] {
    -moz-appearance: textfield;
  }

  td select {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: 100%;
  }

  td select::-ms-expand {
    display: none;
  }

  td select option {
    background: var(--card-background-color);
    color: var(--primary-text-color);
  }

  /* Sensor Cell Styles */
  .sensor-cell {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .sensor-value {
    min-width: 45px;
    text-align: right;
    white-space: nowrap;
    flex-shrink: 0;
  }

  td[data-column="conductivity"] .sensor-value {
    min-width: 70px;
  }

  /* List Card Specific Meter Styles */
  .table-container .meter-container {
    display: flex;
    gap: 2px;
    width: 120px;
    flex-shrink: 0;
  }

  .table-container .meter {
    height: 8px;
    background-color: var(--primary-background-color);
    border-radius: 2px;
    display: inline-grid;
    overflow: hidden;
  }

  .table-container .meter.red {
    flex-grow: 1;
    margin-right: 2px;
    max-width: 5%;
  }

  .table-container .meter.green {
    flex-grow: 10;
    margin-right: 2px;
    max-width: 90%;
  }

  /* Card Header */
  .card-header {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid var(--divider-color);
    flex-shrink: 0;
  }

  .card-header .name {
    font-size: 16px;
    font-weight: bold;
    padding: 0 16px;
  }

  /* Checkbox Styles */
  td input[type="checkbox"] {
    width: 14px;
    height: 14px;
    margin: 0;
    vertical-align: middle;
    position: relative;
    top: 0;
  }

  ha-checkbox {
    margin: 0 8px;
    --mdc-checkbox-state-layer-size: 40px;
  }

  /* Inline Style Konvertierungen */
  td input[type="checkbox"].row-select {
    width: 20px;
    height: 20px;
    margin: 0 8px;
  }

  /* Website Container Anpassungen */
  .website-container {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    white-space: nowrap;
    line-height: normal;
  }

  .website-text {
    flex: 1;
    padding-right: 8px;
  }

  .text-ellipsis {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .website-icon-button {
    --mdc-icon-button-size: 24px;
    margin: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    padding: 0;
    height: 24px;
    vertical-align: middle;
  }

  .website-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
  }

  .date-input {
    width: 140px;
  }

  .duration-input {
    width: 80px;
  }

  .duration-text {
    margin-left: 4px;
  }

  .phase-select,
  .cycle-select,
  .area-select {
    width: 120px;
  }

  /* Sortier-Icon Styles */
  th ha-icon {
    margin-left: 4px;
    vertical-align: middle;
  }

  /* Status Icon Styles */
  .status-icon {
    margin-right: 4px;
    vertical-align: middle;
  }

  /* Textarea Styles */
  .notes-textarea {
    width: 200px;
    height: 60px;
    resize: vertical;
  }

  /* Website Input */
  .website-input {
    width: 200px;
  }

  /* Numerische Inputs */
  .numeric-input {
    width: 80px;
    text-align: right;
  }

  /* Container für Sensor-Werte mit Einheit */
  .sensor-value-container {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Einheiten-Text */
  .unit-text {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }

  /* Multi-Select Header */
  th.checkbox-column {
    width: 48px;
    padding: 12px 8px;
  }

  /* Filter und Multiselect Icons */
  .action-icon {
    margin-right: 8px;
  }

  /* Zentrierte Container */
  .center-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tooltip Container */
  .tooltip-container {
    position: relative;
    display: inline-block;
  }

  /* Status Badge */
  .status-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9em;
  }

  .status-badge.problem {
    background-color: var(--error-color);
    color: white;
  }

  .status-badge.ok {
    background-color: var(--success-color);
    color: white;
  }

  /* Phase Badge */
  .phase-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9em;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  /* Cycle Badge */
  .cycle-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9em;
    background-color: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  /* Area Badge */
  .area-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.9em;
    background-color: var(--light-primary-color);
    color: var(--primary-text-color);
  }

  /* Empty State */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .empty-state ha-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  /* Loading State */
  .loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
  }

  /* Error State */
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    color: var(--error-color);
    text-align: center;
  }

  .error-state ha-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 8px;
  }

  .card-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  /* Styles für den Hinzufügen-Button */
  .add-plant-row {
    background: transparent;
  }
  
  .add-plant-text {
    display: flex;
    align-items: center;
    padding: 4px 16px;
    cursor: pointer;
    color: var(--secondary-text-color);
    transition: color 0.2s;
  }
  
  .add-plant-text:hover {
    color: var(--primary-text-color);
  }
`},364:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.galleryStyles=void 0;const n=i(4437);e.galleryStyles=n.css`
    .gallery-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px;
    }

    .gallery-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 0px;
        overflow: hidden;
    }

    .gallery-header {
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        color: white;
        z-index: 2;
        position: relative;
    }

    .gallery-date {
        font-size: 0.85em;
        text-align: left;
        background: rgba(0, 0, 0, 0.5);
        padding: 6px 12px;
        border-radius: 4px;
        max-width: 60%;
        position: absolute;
        top: 16px;
        left: 16px;
        right: 140px;
        z-index: 1;
        font-weight: normal;
        line-height: 1.4;
    }

    .gallery-date .info-line {
        white-space: nowrap;
    }

    .gallery-date .phase,
    .gallery-date .day,
    .gallery-date .total {
        font-weight: bold;
    }

    .gallery-date .bracket {
        font-weight: normal;
    }

    .gallery-header-buttons {
        display: flex;
        gap: 4px;
        align-items: center;
        position: relative;
        z-index: 2;
        margin-left: auto;
        height: 32px;
    }

    .gallery-header ha-icon-button {
        --mdc-icon-button-size: 32px;
        --mdc-icon-size: 18px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .gallery-header ha-icon {
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .gallery-image-container {
        flex: 1 1 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0;
        padding: 0 24px;
        min-height: 0;
    }

    .gallery-image-container a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .gallery-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        cursor: zoom-in;
    }

    .gallery-image.fade {
        opacity: 0;
    }

    .gallery-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        --mdc-icon-button-size: 48px;
        --mdc-icon-size: 36px;
        color: white;
        z-index: 2;
    }

    .gallery-nav:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    .gallery-nav.prev {
        left: 8px;
    }

    .gallery-nav.next {
        right: 8px;
    }

    .gallery-nav ha-icon {
        width: 36px;
        height: 36px;
        color: white;
    }

    .gallery-thumbnails {
        flex: 0 0 140px;
        padding: 8px;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
    }

    .thumbnails-container {
        position: relative;
        width: 100%;
        height: 124px;
        overflow: hidden;
    }

    .thumbnails-scroll {
        display: flex;
        gap: 16px;
        padding: 4px;
        height: 124px;
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
        transition: transform 0.3s ease-in-out;
    }

    .thumbnails-scroll.has-other-images {
        transform: translateX(calc(-1 * var(--other-images-width, 150px)));
    }

    .thumbnails-scroll.has-other-images.shifted-right {
        transform: translateX(0px);
    }

    .thumbnail-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex-shrink: 0;
    }

    .thumbnail-group-label {
        color: white;
        font-size: 0.9em;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        padding: 2px 8px;
        border-radius: 4px;
        margin-bottom: 2px;
        position: relative;
    }

    .thumbnail-group-label::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--phase-color);
        border-radius: 0 0 4px 4px;
    }

    .thumbnail-group-images {
        display: flex;
        gap: 8px;
        height: 92px;
        flex-shrink: 0;
    }

    .thumbnail-container {
        position: relative;
        flex: 0 0 auto;
        height: 80px;
        aspect-ratio: 1;
        padding: 2px;
        border: 2px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .thumbnail-day {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 0.8em;
        padding: 1px 6px;
        border-radius: 3px;
        white-space: nowrap;
    }

    .thumbnail-container:hover {
        border-color: rgba(255, 255, 255, 0.5);
    }

    .thumbnail-container.active {
        border-color: var(--primary-color, #03a9f4);
    }

    .thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
    }

    .thumbnails-scroll::-webkit-scrollbar {
        height: 6px;
    }

    .thumbnails-scroll::-webkit-scrollbar-track {
        background: transparent;
    }

    .thumbnails-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
    }

    .flyout-container {
        position: relative;
        display: flex;
        align-items: center;
        height: 32px;
        transition: transform 0.2s ease-in-out;
    }

    .flyout-container:first-child {
        transform: translateX(0);
    }

    .flyout-container:first-child.delete-open,
    .flyout-container:first-child.main-open {
        transform: translateX(-31px);
    }

    .flyout-container:first-child.delete-open.main-open {
        transform: translateX(-62px);
    }

    .flyout-container:nth-child(2).delete-open,
    .flyout-container:nth-child(2).main-open {
        transform: translateX(-31px);
    }

    .flyout-container:nth-child(2).delete-open.main-open {
        transform: translateX(-62px);
    }

    .flyout-container.delete-open,
    .flyout-container.main-open {
        transform: translateX(-31px);
    }

    .flyout-container.delete-open.main-open {
        transform: translateX(-62px);
    }

    .flyout-menu {
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(6px);
        height: 32px;
        background: var(--card-background-color);
        border-radius: 4px;
        padding: 2px;
        display: flex;
        align-items: center;
        gap: 2px;
        box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14));
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in-out;
    }

    .flyout-container.open .flyout-menu {
        transform: translateY(-50%) translateX(0);
        opacity: 1;
        visibility: visible;
    }

    .flyout-option {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
    }

    .flyout-option ha-icon-button {
        --mdc-icon-button-size: 32px;
        --mdc-icon-size: 18px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-button,
    .delete-button,
    .main-button,
    .confirm-delete,
    .confirm-main {
        --mdc-icon-button-size: 32px;
        --mdc-icon-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
    }

    .add-button {
        transition: transform 0.2s ease-in-out;
    }

    .flyout-container.open .add-button {
        transform: rotate(45deg);
    }

    .delete-button:hover,
    .main-button:hover,
    .confirm-delete:hover,
    .confirm-main:hover {
        opacity: 0.8;
    }

    .confirm-delete {
        color: var(--error-color, #db4437);
    }

    .confirm-main {
        color: var(--primary-color, #03a9f4);
    }

    .no-images-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        color: var(--secondary-text-color);
        gap: 16px;
    }

    .no-images-message ha-icon {
        --mdc-icon-size: 64px;
        opacity: 0.5;
    }

    .nav-toggle {
        position: absolute;
        top: calc(50% + 11px);
        left: 8px;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 80px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 10;
        opacity: 0.7;
    }

    .nav-toggle:hover {
        background: rgba(0, 0, 0, 0.9);
        opacity: 1;
    }

    .nav-toggle.open {
        opacity: 1;
    }

    .nav-icon {
        --mdc-icon-size: 18px;
        color: white;
        transition: transform 0.3s ease;
    }

    .nav-toggle.open .nav-icon {
        transform: rotate(180deg);
    }

    @media (max-width: 600px) {
        .gallery-date {
            right: 120px;
        }
    }

    @media (max-width: 400px) {
        .gallery-date {
            right: 100px;
        }
    }
`},8265:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliListComponents=void 0;const n=i(4437),a=i(9442),r=i(8598),s=i(2413);e.BrokkoliListComponents=class{static renderHeader(t,e){if(""===t)return n.html``;const i=e?s.TranslationUtils.translateListCard(e,"title"):"Pflanzenübersicht";return n.html`
            <div class="card-header">
                <div class="name">${t||i}</div>
            </div>
        `}static renderToolbar(t,e,i,a,r,o,l,d,c){var u,p,h,g,m,f,v;if(!(null===(u=null==t?void 0:t.multiselect)||void 0===u?void 0:u.enabled)&&!(null===(p=null==t?void 0:t.search)||void 0===p?void 0:p.enabled)&&!(null===(h=null==t?void 0:t.filter)||void 0===h?void 0:h.enabled))return n.html``;const y=c?s.TranslationUtils.translateListCard(c,"filter_close"):"Filter schließen",b=c?s.TranslationUtils.translateListCard(c,"filter"):"Filter",_=c?s.TranslationUtils.translateListCard(c,"multiselect_end"):"Mehrfachauswahl beenden",x=c?s.TranslationUtils.translateListCard(c,"multiselect"):"Mehrfachauswahl",w=c?s.TranslationUtils.translateListCard(c,"search_reset"):"Suche zurücksetzen",$=c?s.TranslationUtils.translateListCard(c,"search_default"):"Suche...";return n.html`
            <div class="toolbar">
                ${(null===(g=null==t?void 0:t.filter)||void 0===g?void 0:g.enabled)?n.html`
                    <ha-icon-button
                        .label=${i?y:b}
                        @click=${r}
                    >
                        <ha-icon icon="mdi:${i?"filter-off":"filter"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(m=null==t?void 0:t.multiselect)||void 0===m?void 0:m.enabled)?n.html`
                    <ha-icon-button
                        .label=${a?_:x}
                        @click=${o}
                    >
                        <ha-icon icon="mdi:${a?"close":"checkbox-multiple-outline"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(f=null==t?void 0:t.search)||void 0===f?void 0:f.enabled)?n.html`
                    <div class="search-container">
                        <ha-icon icon="mdi:magnify"></ha-icon>
                        <input
                            type="text"
                            .value=${e}
                            placeholder="${(null===(v=null==t?void 0:t.search)||void 0===v?void 0:v.placeholder)||$}"
                            @input=${l}
                        >
                        ${e?n.html`
                            <ha-icon-button
                                .label=${w}
                                @click=${d}
                            >
                                <ha-icon icon="mdi:close"></ha-icon>
                            </ha-icon-button>
                        `:""}
                    </div>
                `:""}
            </div>
        `}static renderTableHeader(t,e,i,a,r){return n.html`
            <thead>
                <tr>
                    ${e?n.html`
                        <th class="checkbox-column"></th>
                    `:""}
                    ${t.map((t=>n.html`
                        <th @click=${()=>r(t.id)} data-column="${t.id}">
                            ${t.name}
                            ${i===t.id?n.html`<ha-icon icon="mdi:${"asc"===a?"arrow-up":"arrow-down"}"></ha-icon>`:""}
                        </th>
                    `))}
                </tr>
            </thead>
        `}static renderTableRow(t,e,i,a,r,s,o,l,d){return n.html`
            <tr>
                ${i?n.html`
                    <td>
                        <input 
                            type="checkbox"
                            .checked=${a.has(t.entity_id)}
                            @change=${e=>r(t.entity_id,e)}
                            class="row-select"
                        >
                    </td>
                `:""}
                ${e.map((e=>n.html`
                    <td data-column="${e.id}" 
                        @click=${n=>{i&&a.size>0?s(n,t,e.id):i||o(n,t)}}
                        style="cursor: ${l(e.id)}"
                    >
                        ${d(t,e.id)}
                    </td>
                `))}
            </tr>
        `}static renderFilterSidebar(t,e,i,a,r,o){const l=s.TranslationUtils.translateListCard(r,"entity_type"),d=s.TranslationUtils.translateListCard(r,"plants"),c=s.TranslationUtils.translateListCard(r,"cycles");return n.html`
            <div class="filter-sidebar">
                ${t.map((s=>n.html`
                    ${s.id===t[0].id?n.html`
                        <div class="filter-group entity-type-filter">
                            <div class="filter-header">${l}</div>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${e.entityTypes.has("plant")}
                                    @change=${()=>i("plant")}
                                >
                                ${d}
                            </label>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${e.entityTypes.has("cycle")}
                                    @change=${()=>i("cycle")}
                                >
                                ${c}
                            </label>
                        </div>
                    `:""}
                    ${this.renderColumnFilter(s,e,a,r,o)}
                `))}
            </div>
        `}static renderColumnFilter(t,e,i,o,l){if(r.SensorUtils.isSensorColumn(t.id)){const a=r.SensorUtils.getSensorRange(o,l,t.id),d=e.activeFilters[t.id]||a;return n.html`
                <div class="filter-range">
                    <div class="filter-header">${t.name}</div>
                    <div class="filter-range-inputs">
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.min}
                            @change=${n=>{var r;const s=n.target,o=Number(s.value);i(t.id,{min:o,max:(null===(r=e.activeFilters[t.id])||void 0===r?void 0:r.max)||a.max})}}
                            step="0.1"
                        >
                        <span>${s.TranslationUtils.translateListCard(o,"filter_range_to")}</span>
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.max}
                            @change=${n=>{var r;const s=n.target,o=Number(s.value);i(t.id,{min:(null===(r=e.activeFilters[t.id])||void 0===r?void 0:r.min)||a.min,max:o})}}
                            step="0.1"
                        >
                        <span>${a.unit}</span>
                    </div>
                </div>
            `}return n.html`
            <div class="filter-group">
                <div class="filter-header">${t.name}</div>
                ${a.FilterUtils.getUniqueValues(o,l,t.id).map((a=>{var r;return n.html`
                    <label class="filter-item">
                        <input type="checkbox"
                            .checked=${(null===(r=e.activeFilters[t.id])||void 0===r?void 0:r.has(a))||!1}
                            @change=${()=>i(t.id,a)}
                        >
                        ${a}
                    </label>
                `}))}
            </div>
        `}static renderAddPlantButton(t,e){const i=e?s.TranslationUtils.translateListCard(e,"add_plant"):"Neue Pflanze hinzufügen";return n.html`
            <tr class="add-plant-row">
                <td colspan="100%">
                    <div class="add-plant-text" @click=${t}>
                        <ha-icon icon="mdi:plus"></ha-icon>
                        <span>${i}</span>
                    </div>
                </td>
            </tr>
        `}}},8358:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CellRenderer=void 0;const n=i(4437),a=i(289),r=i(9442),s=i(70),o=i(2413),l=i(5869);e.CellRenderer=class{static renderCell(t){const{hass:e,plant:i,columnId:n,editingCell:a,onCellClick:r,onInputUpdate:s,onRowClick:o}=t,l=i.entity_id.split(".")[1],d={hass:e,plant:i,columnId:n,onInput:(t,e)=>s(t,e),onClick:r,onRowClick:o};return(null==a?void 0:a.entityId)===i.entity_id&&(null==a?void 0:a.column)===n?this.renderEditingCell(l,n,e,d):this.renderNormalCell(l,n,e,i,d)}static renderEditingCell(t,e,i,r){const l=r.plant,d=t=>{if(l.attributes._sensorMap&&l.attributes._sensorMap[t])return l.attributes._sensorMap[t]};if(a.CellTypeUtils.isDateInput(e)){const t=d("growth_phase");if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t];return s.TemplateUtils.renderDateInput(null==a?void 0:a.attributes[e],r)}if(a.CellTypeUtils.isDurationInput(e)){const t=d("growth_phase");if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t];return s.TemplateUtils.renderNumberInput(null==a?void 0:a.attributes[e],o.TranslationUtils.translateUI(i,"days"),r,1)}if(a.CellTypeUtils.isNumberInput(e)){const t=d(e);if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t],o=this.getNumberInputUnit(e,a,i);return s.TemplateUtils.renderNumberInput(null==a?void 0:a.state,o,r)}return a.CellTypeUtils.isSelectInput(e)?this.renderSelectInput(e,t,i,r):a.CellTypeUtils.isTextInput(e)||a.CellTypeUtils.isTextArea(e)?s.TemplateUtils.renderTextInput(r.plant.attributes[e],r,a.CellTypeUtils.isTextArea(e)):n.html``}static renderNormalCell(t,e,i,r,d){const c=(0,l.getFieldDefinition)(e);if(a.CellTypeUtils.isDateInput(e))return this.renderDateValue(t,e,i,d);if(a.CellTypeUtils.isDurationInput(e)){let t;if(r.attributes._sensorMap&&r.attributes._sensorMap.growth_phase){const a=r.attributes._sensorMap.growth_phase;t=null==i?void 0:i.states[a];const s=null==t?void 0:t.attributes[e];return n.html`
                    <span @click=${d.onClick}>
                        ${s?`${s} ${o.TranslationUtils.translateUI(i,"days")}`:"-"}
                    </span>
                `}return n.html`<span @click=${d.onClick}>-</span>`}if((null==c?void 0:c.isSensor)&&c.showStatusBar)return s.TemplateUtils.renderSensorCell(d);if((null==c?void 0:c.isSensor)&&!c.showStatusBar){let t;if(r.attributes._sensorMap&&r.attributes._sensorMap[e]){const a=r.attributes._sensorMap[e];return t=null==i?void 0:i.states[a],n.html`
                    <span @click=${d.onClick}>
                        ${t?`${t.state} ${t.attributes.unit_of_measurement||c.unit||""}`:"-"}
                    </span>
                `}return n.html`<span @click=${d.onClick}>-</span>`}switch(e){case"friendly_name":return s.TemplateUtils.renderPlantName(r.attributes.friendly_name,r.attributes.entity_picture,d);case"state":return s.TemplateUtils.renderBadge(r.state,d,"status");case"cycle":return this.renderCycleValue(t,r,i,d);case"area":return this.renderAreaValue(r,i,d);case"growth_phase":return this.renderGrowthPhaseValue(t,i,d);case"pot_size":case"flowering_duration":return this.renderMeasurementValue(t,e,i,d);case"website":return s.TemplateUtils.renderWebsiteCell(r.attributes.website,d,!1);default:return this.renderDefaultValue(e,r,d)}}static getNumberInputUnit(t,e,i){return"flowering_duration"===t?i?o.TranslationUtils.translateUI(i,"days"):"days":"pot_size"===t?"L":(null==e?void 0:e.attributes.unit_of_measurement)||""}static renderSelectInput(t,e,i,n){var o;let l,d=[];const c=n.plant;if("growth_phase"===t){if(c.attributes._sensorMap&&c.attributes._sensorMap.growth_phase){const t=c.attributes._sensorMap.growth_phase,e=null==i?void 0:i.states[t];d=a.CellTypeUtils.getGrowthPhaseOptions(i,c),l=null==e?void 0:e.state}}else if("cycle"===t){if(c.attributes._sensorMap&&c.attributes._sensorMap.cycle){const t=c.attributes._sensorMap.cycle,e=null==i?void 0:i.states[t];d=a.CellTypeUtils.getCycleOptions(i,c),l=null==e?void 0:e.state}}else if("area"===t){const t=r.FilterUtils.getAreaForEntity(i,n.plant.entity_id);l=t?null===(o=null==i?void 0:i.areas[t])||void 0===o?void 0:o.name:"",d=a.CellTypeUtils.getAreaOptions(i)}return s.TemplateUtils.renderSelectInput(l,d,n,`${t}-select`)}static renderDateValue(t,e,i,a){const r=a.plant;if(r.attributes._sensorMap&&r.attributes._sensorMap.growth_phase){const t=r.attributes._sensorMap.growth_phase,s=null==i?void 0:i.states[t],o=null==s?void 0:s.attributes[e];if(o){const t=new Date(o);return n.html`
                    <span @click=${a.onClick}>
                        ${t.toLocaleDateString()}
                    </span>
                `}}return n.html`<span @click=${a.onClick}>-</span>`}static renderCycleValue(t,e,i,a){if(e.entity_id.startsWith("cycle."))return n.html`${e.attributes.member_count||0} ${o.TranslationUtils.translateUI(i,"members")}`;if(e.attributes._sensorMap&&e.attributes._sensorMap.cycle){const t=e.attributes._sensorMap.cycle,n=null==i?void 0:i.states[t];return s.TemplateUtils.renderBadge(null==n?void 0:n.state,a,"cycle")}return n.html`<span @click=${a.onClick}>-</span>`}static renderAreaValue(t,e,i){var n;const a=r.FilterUtils.getAreaForEntity(e,t.entity_id),o=a?null===(n=null==e?void 0:e.areas[a])||void 0===n?void 0:n.name:"-";return s.TemplateUtils.renderBadge(o,i,"area")}static renderGrowthPhaseValue(t,e,i){const a=i.plant;if(a.attributes._sensorMap&&a.attributes._sensorMap.growth_phase){const t=a.attributes._sensorMap.growth_phase,n=null==e?void 0:e.states[t];return s.TemplateUtils.renderBadge(null==n?void 0:n.state,i,"phase")}return n.html`<span @click=${i.onClick}>-</span>`}static renderMeasurementValue(t,e,i,a){const r=a.plant;if(r.attributes._sensorMap&&r.attributes._sensorMap[e]){const t=r.attributes._sensorMap[e],s=null==i?void 0:i.states[t],l="pot_size"===e?"L":o.TranslationUtils.translateUI(i,"days");return n.html`
                <span @click=${a.onClick}>
                    ${s?`${s.state} ${l}`:"-"}
                </span>
            `}return n.html`<span @click=${a.onClick}>-</span>`}static renderDefaultValue(t,e,i){var a,r;const o=(0,l.getFieldDefinition)(t),d=(null==o?void 0:o.clickAction)||"none";return(null==o?void 0:o.hasExternalLink)?s.TemplateUtils.renderWebsiteCell(e.attributes[t],i,!1):"edit"===d?n.html`
                <span @click=${i.onClick}>
                    ${(null===(a=e.attributes[t])||void 0===a?void 0:a.toString())||"-"}
                </span>
            `:n.html`${(null===(r=e.attributes[t])||void 0===r?void 0:r.toString())||"-"}`}}},289:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CellTypeUtils=void 0;const n=i(5869);e.CellTypeUtils=class{static getClickAction(t){const e=(0,n.getFieldDefinition)(t);return(null==e?void 0:e.clickAction)||"none"}static getCursorStyle(t){switch(this.getClickAction(t)){case"more-info":case"edit":return"pointer";default:return"default"}}static isDateInput(t){return"date"===(0,n.getFieldType)(t)}static isDurationInput(t){const e=(0,n.getFieldDefinition)(t);return"phaseduration"===(null==e?void 0:e.group)}static isNumberInput(t){return"number"===(0,n.getFieldType)(t)}static isSelectInput(t){return"select"===(0,n.getFieldType)(t)}static isTextInput(t){return"text"===(0,n.getFieldType)(t)}static isTextArea(t){return"textarea"===(0,n.getFieldType)(t)}static getCycleOptions(t,e){var i;const a=(0,n.getSensorMapEntity)(t,e,"cycle");return(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.options)||[]}static getGrowthPhaseOptions(t,e){var i;const a=(0,n.getSensorMapEntity)(t,e,"growth_phase");return(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.options)||[]}static getAreaOptions(t){return t?Object.values(t.areas||{}).map((t=>t.name)).sort():[]}static formatNumber(t,e=2){const i="string"==typeof t?parseFloat(t):t;return isNaN(i)?"-":i.toFixed(e)}static getSearchableValue(t,e,i){return(0,n.getFieldValue)(i,t,e).toString()}}},6754:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ConfigUtils=void 0;const n=i(5869),a=i(2413);class r{static getDefaultShowColumns(){const t=new Set(n.FIELD_DEFINITIONS.map((t=>t.group))),e={};return t.forEach((t=>{e[t]="min_max"!==t&&"diagnostics"!==t&&"notes"!==t})),n.FIELD_DEFINITIONS.filter((t=>"sensor"===t.type)).forEach((t=>{e[t.id]=["soil_moisture","temperature","conductivity","illuminance","air_humidity","dli","ph","health","power_consumption"].includes(t.id)})),e}static getDefaultConfig(t){return{type:"custom:brokkoli-list-card",title:t?a.TranslationUtils.translateListCard(t,"title"):"Pflanzenübersicht",search:{enabled:!0,placeholder:t?a.TranslationUtils.translateListCard(t,"search_placeholder"):"Suche..."},multiselect:{enabled:!1,showbydefault:!1},filter:{enabled:!0,showbydefault:!1},add_plant:{enabled:!0,position:"bottom"},show_columns:this.getDefaultShowColumns()}}static getVisibleColumns(t,e){const i=(null==t?void 0:t.show_columns)||this.getDefaultConfig(e).show_columns,a=new Map(n.FIELD_DEFINITIONS.map((t=>[t.id,{id:t.id,name:"function"==typeof t.name?e?t.name(e):t.id:t.name,group:t.group}]))),r=new Map;n.FIELD_DEFINITIONS.forEach((t=>{r.has(t.group)||r.set(t.group,[]),r.get(t.group).push({id:t.id,name:"function"==typeof t.name?e?t.name(e):t.id:t.name,group:t.group})}));const s=[];for(const[t,e]of Object.entries(i))e&&(r.has(t)?s.push(...r.get(t)):a.has(t)&&s.push(a.get(t)));return s}static getAllAvailableColumns(){return n.FIELD_DEFINITIONS.map((t=>t.id))}}e.ConfigUtils=r,r.EDITABLE_PLANT_ATTRIBUTES=n.FIELD_DEFINITIONS.filter((t=>"edit"===t.clickAction)).map((t=>t.id))},4139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getGrowthPhaseIcon=e.getTreatmentIcon=e.getTreatmentIconByIndex=e.getGrowthPhaseIconByIndex=e.plantAttributes=e.missingImage=e.elementOptions=e.default_option_elements=e.default_show_elements=e.default_show_bars=e.PHASES=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="brokkoli-card",e.CARD_EDITOR_NAME="brokkoli-card-editor",e.PHASES=["seeds","germination","rooting","growth","flowering","removed","harvested"],e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli","water_consumption","fertilizer_consumption","ppfd","power_consumption","ph","health"],e.default_show_elements=["header","attributes","options"],e.default_option_elements=["attributes","timeline","consumption","history","details"],e.elementOptions=[{label:"Header",value:"header"},{label:"Attribute Bars",value:"attributes"},{label:"Options Menu",value:"options"},{label:"Timeline",value:"timeline"},{label:"Consumption",value:"consumption"},{label:"History",value:"history"},{label:"Details",value:"details"}],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"Water Consumption",value:"water_consumption"},{label:"Fertilizer Consumption",value:"fertilizer_consumption"},{label:"PPFD",value:"ppfd"},{label:"Power Consumption",value:"power_consumption"},{label:"pH",value:"ph"},{label:"Health",value:"health"}];const i=["mdi:seed","mdi:seed-outline","mdi:sprout","mdi:leaf","mdi:flower","mdi:delete","mdi:content-cut"],n=["mdi:help-circle","mdi:content-cut","mdi:arrow-down-bold-circle","mdi:arrow-up-bold-circle","mdi:candy","mdi:scissors-cutting","mdi:leaf","mdi:spray","mdi:water"];e.getGrowthPhaseIconByIndex=t=>t>=0&&t<i.length?i[t]:"mdi:help-circle",e.getTreatmentIconByIndex=t=>t>=0&&t<n.length?n[t]:"mdi:help-circle",e.getTreatmentIcon=(t,i,n)=>{var a,r;if(i&&(null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a._sensorMap)&&"object"==typeof n.attributes._sensorMap){const a=n.attributes._sensorMap.treatment;if(a){const n=i.states[a];if((null===(r=null==n?void 0:n.attributes)||void 0===r?void 0:r.options)&&Array.isArray(n.attributes.options)){const i=n.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getTreatmentIconByIndex)(i)}}}switch(t.toLowerCase()){case"":case"none":case"keine":default:return"mdi:help-circle";case"cut":case"schneiden":return"mdi:content-cut";case"super cropping":return"mdi:arrow-down-bold-circle";case"topping":return"mdi:arrow-up-bold-circle";case"lollipop":return"mdi:candy";case"fim":return"mdi:scissors-cutting";case"rib":return"mdi:leaf";case"spray pest":case"spray water":return t.includes("pest")?"mdi:spray":"mdi:water"}},e.getGrowthPhaseIcon=(t,i,n)=>{var a,r;if(i&&(null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a._sensorMap)&&"object"==typeof n.attributes._sensorMap){const a=n.attributes._sensorMap.growth_phase;if(a){const n=i.states[a];if((null===(r=null==n?void 0:n.attributes)||void 0===r?void 0:r.options)&&Array.isArray(n.attributes.options)){const i=n.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getGrowthPhaseIconByIndex)(i)}}}switch(t.toLowerCase()){case"seeds":case"samen":return"mdi:seed";case"germination":case"keimen":return"mdi:seed-outline";case"rooting":case"wurzeln":return"mdi:sprout";case"growing":case"wachstum":return"mdi:leaf";case"flower":case"blüte":return"mdi:flower";case"harvested":case"geerntet":return"mdi:content-cut";case"removed":case"entfernt":return"mdi:delete";default:return"mdi:help-circle"}}},1322:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.EventUtils=void 0;const a=i(5869);class r{static handleInputUpdate(t,e,i){return n(this,void 0,void 0,(function*(){var n;if(t instanceof KeyboardEvent&&"Escape"===t.key)return void e.onUpdate();if(t instanceof KeyboardEvent&&"Enter"!==t.key&&"select"!==i)return;let r=t.target.value;if("number"===i){const t=(0,a.getFieldDefinition)(e.columnId);if(r="integer"===((null===(n=null==t?void 0:t.validation)||void 0===n?void 0:n.numberType)||"integer")?parseInt(r):parseFloat(r),isNaN(r))return}try{e.multiSelectMode&&e.selectedPlants.size>0?yield this.applyBulkUpdate(r,e.columnId,e):yield this.applySingleUpdate(r,e),e.onUpdate()}catch(t){console.error(`Error updating ${e.columnId}:`,t)}}))}static applyBulkUpdate(t,e,i){return n(this,void 0,void 0,(function*(){const{hass:e,selectedPlants:n}=i;for(const a of n)yield this.applySingleUpdate(t,Object.assign(Object.assign({},i),{plant:e.states[a]}))}))}static applySingleUpdate(t,e){return n(this,void 0,void 0,(function*(){const{hass:i,plant:n,columnId:s}=e,o=(0,a.getFieldDefinition)(s),l=null==o?void 0:o.service;if(!l)return;if("move_to_area"===l.action){const i=new Event("change");return Object.defineProperty(i,"target",{value:{value:t.toString()}}),void(yield r.handleAreaUpdate(i,e))}const d=(0,a.getSensorMapEntityId)(n,s);if(l.entityPrefix&&d){const e={entity_id:d};l.valueKey?e[l.valueKey]=t:e[s]=t,yield i.callService(l.domain,l.action,e)}else{const e={entity_id:n.entity_id};l.valueKey?e[l.valueKey]=t:e[s]=t,yield i.callService(l.domain,l.action,e)}}))}static handleAreaUpdate(t,e){return n(this,void 0,void 0,(function*(){var i;const{hass:n,plant:a,multiSelectMode:r,selectedPlants:s}=e,o=t.target.value,l="-"===o?"":null===(i=Object.entries(n.areas||{}).find((([,t])=>t.name===o)))||void 0===i?void 0:i[0];if(r&&s.size>0)for(const t of s){const e=n.entities[t];(null==e?void 0:e.device_id)&&(yield n.callService("plant","move_to_area",{device_id:e.device_id,area_id:l||""}))}else{const t=n.entities[a.entity_id];(null==t?void 0:t.device_id)&&(yield n.callService("plant","move_to_area",{device_id:t.device_id,area_id:l||""}))}e.onUpdate()}))}static handleSearch(t,e){e(t.target.value.toLowerCase())}static handleRowClick(t,e,i,n){if(t.stopPropagation(),!(0,a.getFieldDefinition)(i))return void n(e.entity_id);n((0,a.getSensorMapEntityId)(e,i)||e.entity_id)}static handleInputEvent(t,e,i){var n;let r=t.target.value;if("number"===e){const t=(0,a.getFieldDefinition)(i);if(r="integer"===((null===(n=null==t?void 0:t.validation)||void 0===n?void 0:n.numberType)||"integer")?parseInt(r):parseFloat(r),isNaN(r))return}return r}}e.EventUtils=r},5869:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getFieldName=e.getFieldOptions=e.getFieldValue=e.isSensorField=e.getFieldService=e.getFieldType=e.isFieldEditable=e.getFieldsByGroup=e.getFieldDefinition=e.FIELD_DEFINITIONS=e.getSensorMapEntity=e.getSensorMapEntityId=void 0;const n=i(2413),a=i(4139),r={domain:"plant",action:"update_plant_attributes"},s={domain:"select",action:"select_option",entityPrefix:"select.",valueKey:"option"},o={domain:"number",action:"set_value",entityPrefix:"number.",valueKey:"value"};e.getSensorMapEntityId=(t,e)=>t.attributes._sensorMap&&t.attributes._sensorMap[e]?t.attributes._sensorMap[e]:null,e.getSensorMapEntity=(t,i,n)=>{const a=(0,e.getSensorMapEntityId)(i,n);return a?null==t?void 0:t.states[a]:null};const l=(t,i,n,a)=>{const r=(0,e.getSensorMapEntity)(t,i,a);return(null==r?void 0:r.state)||""},d=(t,i,n,a)=>{var r;const s=(0,e.getSensorMapEntity)(t,i,a);return(null===(r=null==s?void 0:s.attributes)||void 0===r?void 0:r.options)||[]};e.FIELD_DEFINITIONS=[{id:"friendly_name",name:t=>n.TranslationUtils.translateField(t,"friendly_name"),group:"name",type:"plant-name",clickAction:"none",getValue:(t,e)=>e.attributes.friendly_name||""},{id:"state",name:t=>n.TranslationUtils.translateField(t,"state"),group:"basic",type:"badge",clickAction:"more-info",getValue:(t,e)=>e.state},{id:"area",name:t=>n.TranslationUtils.translateField(t,"area"),group:"growing",type:"select",clickAction:"edit",service:{domain:"plant",action:"move_to_area"},options:t=>["-",...Object.values(t.areas||{}).map((t=>t.name)).sort()],getValue:(t,e)=>{var i;if(e.attributes._sensorMap&&e.attributes._sensorMap.location){const n=e.attributes._sensorMap.location,a=null===(i=null==t?void 0:t.states[n])||void 0===i?void 0:i.state;if(a)try{return JSON.parse(a).area||""}catch(t){return a}}return""}},{id:"growth_phase",name:t=>n.TranslationUtils.translateField(t,"growth_phase"),group:"growing",type:"select",clickAction:"edit",service:s,options:(t,e)=>d(t,e,0,"growth_phase"),getValue:(t,e)=>l(t,e,0,"growth_phase")},{id:"cycle",name:t=>n.TranslationUtils.translateField(t,"cycle"),group:"growing",type:"select",clickAction:"edit",service:s,options:(t,e)=>d(t,e,0,"cycle"),getValue:(t,e)=>l(t,e,0,"cycle")},{id:"pot_size",name:t=>n.TranslationUtils.translateField(t,"pot_size"),group:"growing",type:"number",clickAction:"edit",service:o,unit:"L",validation:{min:0,step:.1,numberType:"float"},getValue:(t,e)=>l(t,e,0,"pot_size")},{id:"flowering_duration",name:t=>n.TranslationUtils.translateField(t,"flowering_duration"),group:"growing",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1,numberType:"integer"},getValue:(t,e)=>l(t,e,0,"flowering_duration")},{id:"strain",name:t=>n.TranslationUtils.translateField(t,"strain"),group:"genetics",type:"text",clickAction:"edit",service:r},{id:"breeder",name:t=>n.TranslationUtils.translateField(t,"breeder"),group:"genetics",type:"text",clickAction:"edit",service:r},{id:"feminized",name:t=>n.TranslationUtils.translateField(t,"feminized"),group:"genetics",type:"select",clickAction:"edit",service:r,options:t=>[n.TranslationUtils.translateUI(t,"yes"),n.TranslationUtils.translateUI(t,"no")]},{id:"original_flowering_duration",name:t=>n.TranslationUtils.translateField(t,"original_flowering_duration"),group:"genetics",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1,numberType:"integer"}},...a.PHASES.map((t=>({id:`${t}_start`,name:e=>n.TranslationUtils.translateField(e,`${t}_start`),group:"phasebegin",type:"date",clickAction:"edit",service:r}))),{id:"seeds_duration",name:t=>n.TranslationUtils.translateField(t,"seeds_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"germination_duration",name:t=>n.TranslationUtils.translateField(t,"germination_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"rooting_duration",name:t=>n.TranslationUtils.translateField(t,"rooting_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"growth_duration",name:t=>n.TranslationUtils.translateField(t,"growth_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"flower_duration",name:t=>n.TranslationUtils.translateField(t,"flower_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"removed_duration",name:t=>n.TranslationUtils.translateField(t,"removed_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"harvested_duration",name:t=>n.TranslationUtils.translateField(t,"harvested_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"soil_moisture",name:t=>n.TranslationUtils.translateSensor(t,"soil_moisture"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"soil_moisture")},{id:"temperature",name:t=>n.TranslationUtils.translateSensor(t,"temperature"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"°C",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"temperature")},{id:"conductivity",name:t=>n.TranslationUtils.translateSensor(t,"conductivity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"µS/cm",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"conductivity")},{id:"ph",name:t=>n.TranslationUtils.translateSensor(t,"ph"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"pH",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"ph")},{id:"illuminance",name:t=>n.TranslationUtils.translateSensor(t,"illuminance"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"lx",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"illuminance")},{id:"air_humidity",name:t=>n.TranslationUtils.translateSensor(t,"air_humidity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"air_humidity")},{id:"dli",name:t=>n.TranslationUtils.translateSensor(t,"dli"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"mol/d⋅m²",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"dli")},{id:"water_consumption",name:t=>n.TranslationUtils.translateSensor(t,"water_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"water_consumption")},{id:"fertilizer_consumption",name:t=>n.TranslationUtils.translateSensor(t,"fertilizer_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"fertilizer_consumption")},{id:"health",name:t=>n.TranslationUtils.translateSensor(t,"health"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"health")},{id:"power_consumption",name:t=>n.TranslationUtils.translateSensor(t,"power_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"W",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"power_consumption")},{id:"ppfd_mol",name:t=>n.TranslationUtils.translateDiagnostics(t,"ppfd_mol"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"µmol/m²/s",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>{const i=l(t,e,0,"ppfd_mol");return i?Number(i).toFixed(6):i}},{id:"total_ppfd_mol_integral",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_ppfd_mol_integral"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"mol/m²",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_ppfd_mol_integral")},{id:"total_water_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_water_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"L",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_water_consumption")},{id:"total_fertilizer_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_fertilizer_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_fertilizer_consumption")},{id:"total_power_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_power_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"kWh",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_power_consumption")},{id:"energy_cost",name:t=>n.TranslationUtils.translateDiagnostics(t,"energy_cost"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"€",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"energy_cost")},...["air_humidity","soil_moisture","temperature","conductivity","illuminance","dli","water_consumption","fertilizer_consumption","ph"].flatMap((t=>[{id:`min_${t}`,name:e=>n.TranslationUtils.translateField(e,`min_${t}`),group:"min_max",type:"number",clickAction:"edit",service:o,getValue:(e,i)=>l(e,i,0,`min_${t}`)},{id:`max_${t}`,name:e=>n.TranslationUtils.translateField(e,`max_${t}`),group:"min_max",type:"number",clickAction:"edit",service:o,getValue:(e,i)=>l(e,i,0,`max_${t}`)}])),{id:"timestamp",name:t=>n.TranslationUtils.translateField(t,"timestamp"),group:"details",type:"text",clickAction:"none",getValue:(t,e)=>e.attributes.timestamp||""},{id:"difficulty",name:t=>n.TranslationUtils.translateField(t,"difficulty"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.difficulty||""},{id:"yield",name:t=>n.TranslationUtils.translateField(t,"yield"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.yield||""},{id:"mold_resistance",name:t=>n.TranslationUtils.translateField(t,"mold_resistance"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.mold_resistance||""},{id:"hunger",name:t=>n.TranslationUtils.translateField(t,"hunger"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.hunger||""},{id:"effects",name:t=>n.TranslationUtils.translateField(t,"effects"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.effects||""},{id:"smell",name:t=>n.TranslationUtils.translateField(t,"smell"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.smell||""},{id:"taste",name:t=>n.TranslationUtils.translateField(t,"taste"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.taste||""},{id:"phenotype",name:t=>n.TranslationUtils.translateField(t,"phenotype"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.phenotype||""},{id:"growth_stretch",name:t=>n.TranslationUtils.translateField(t,"growth_stretch"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.growth_stretch||""},{id:"flower_stretch",name:t=>n.TranslationUtils.translateField(t,"flower_stretch"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.flower_stretch||""},{id:"notes",name:t=>n.TranslationUtils.translateField(t,"notes"),group:"notes",type:"textarea",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.notes||""},{id:"website",name:t=>n.TranslationUtils.translateField(t,"website"),group:"notes",type:"text",clickAction:"edit",service:r,getValue:(t,e)=>e.attributes.website||"",hasExternalLink:!0}],e.getFieldDefinition=t=>e.FIELD_DEFINITIONS.find((e=>e.id===t)),e.getFieldsByGroup=t=>e.FIELD_DEFINITIONS.filter((e=>e.group===t)),e.isFieldEditable=t=>{var i;return"edit"===(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.clickAction)},e.getFieldType=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.type)||"text"},e.getFieldService=t=>{var i;return null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.service},e.isSensorField=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.isSensor)||!1},e.getFieldValue=(t,i,n)=>{var a;const r=(0,e.getFieldDefinition)(t);return r?r.getValue?r.getValue(i,n):(null===(a=n.attributes[t])||void 0===a?void 0:a.toString())||"":""},e.getFieldOptions=(t,i,n)=>{const a=(0,e.getFieldDefinition)(t);return(null==a?void 0:a.options)?a.options(i,n):[]},e.getFieldName=(t,i)=>{const n=(0,e.getFieldDefinition)(t);return n?"function"==typeof n.name?n.name(i):n.name:t}},9442:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FilterUtils=void 0;const n=i(8598),a=i(5869);class r{static getEntityValue(t,e,i){return(0,a.getFieldValue)(i,t,e).toString()}static getUniqueValues(t,e,i){return[...new Set(e.map((e=>this.getEntityValue(t,e,i))))].sort()}static getAreaForEntity(t,e){if(!t)return;const i=t.devices||{},n=(t.entities||{})[e];if(n){if(n.area_id)return n.area_id;if(n.device_id){const t=i[n.device_id];if(null==t?void 0:t.area_id)return t.area_id}}}static applyFilters(t,e,i){let r=e.filter((t=>{const e=t.entity_id.split(".")[0];return i.entityTypes.has(e)}));return Object.keys(i.activeFilters).length>0&&(r=r.filter((e=>Object.entries(i.activeFilters).every((([i,r])=>{if("entity_type"===i)return!0;if((0,a.isSensorField)(i)){const a=n.SensorUtils.getSensorInfo(t,e,i),s=r;return a.value>=s.min&&a.value<=s.max}const s=this.getEntityValue(t,e,i);return r.has(s)}))))),r}static toggleFilter(t,e,i){if((0,a.isSensorField)(t))i.activeFilters[t]=e,i.activeFilters[t]||delete i.activeFilters[t];else{i.activeFilters[t]||(i.activeFilters[t]=new Set);const n=i.activeFilters[t];n.has(e)?(n.delete(e),0===n.size&&delete i.activeFilters[t]):n.add(e)}}static toggleEntityType(t,e){e.entityTypes.has(t)?e.entityTypes.size>1&&e.entityTypes.delete(t):e.entityTypes.add(t)}static getFilteredPlants(t,e,i,n,s){let o=r.applyFilters(t,e,i);return n&&(o=o.filter((e=>[(0,a.getFieldValue)("friendly_name",t,e),(0,a.getFieldValue)("state",t,e),(0,a.getFieldValue)("area",t,e),...s.map((i=>(0,a.getFieldValue)(i,t,e)))].filter(Boolean).some((t=>t.toString().toLowerCase().includes(n.toLowerCase())))))),o}}e.FilterUtils=r},8063:function(t,e){var i=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantEntityUtils=void 0;class n{static getPlantInfo(t,e){return i(this,void 0,void 0,(function*(){return this._plantInfoCache[e]?this._plantInfoCache[e]:this._loadPlantInfoWithRetry(t,e)}))}static _loadPlantInfoWithRetry(t,e){return i(this,void 0,void 0,(function*(){try{this._plantLastLoaded[e]=Date.now();const i=yield t.callWS({type:"plant/get_info",entity_id:e}),n="object"==typeof i&&null!==i&&"result"in i?i.result:null;return n&&(this._plantInfoCache[e]=n),this._scheduleNextUpdate(t,e),n}catch(i){return console.error(`[PLANT-ENTITY] Error in API call for ${e}:`,i),this._scheduleNextUpdate(t,e,!0),null}}))}static _scheduleNextUpdate(t,e,i=!1){this._plantRetryTimeouts[e]&&(window.clearTimeout(this._plantRetryTimeouts[e]),delete this._plantRetryTimeouts[e]),this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i?1e4:5e3)}static initPlantDataLoading(t,e){t&&0!==e.length&&(this.clearAllTimeouts(),e.forEach((e=>{if(this._plantInfoCache[e])return void(this._plantRetryTimeouts[e]||this._scheduleNextUpdate(t,e));const i=500+2e3*Math.random();this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i)})))}static clearAllTimeouts(){Object.values(this._plantRetryTimeouts).forEach((t=>{window.clearTimeout(t)})),this._plantRetryTimeouts={}}static getPlantEntities(t,e="all"){return Object.values(t.states).filter((t=>{if("object"!=typeof t||null===t||!("entity_id"in t)||!("attributes"in t)||"string"!=typeof t.entity_id)return!1;const i=t.entity_id.startsWith("plant."),n=t.entity_id.startsWith("cycle.")&&"member_count"in t.attributes;return"plant"===e?i:"cycle"===e?n:i||n}))}static updatePlantInfo(t,e,n){return i(this,void 0,void 0,(function*(){const i=new Map(n),a=e.map((t=>t.entity_id));this.initPlantDataLoading(t,a);for(const t of e){const e=this._plantInfoCache[t.entity_id];e?i.set(t.entity_id,e):i.has(t.entity_id)||i.set(t.entity_id,null)}return i}))}static togglePlantSelection(t,e,i){null==i||i.stopPropagation();const n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}static clearPlantSelection(){return new Set}}e.PlantEntityUtils=n,n._plantInfoCache={},n._plantRetryTimeouts={},n._plantLastLoaded={}},8598:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SensorUtils=void 0;const n=i(5869);e.SensorUtils=class{static getSensorInfo(t,e,i){const a=(0,n.getFieldDefinition)(i),r=(0,n.getSensorMapEntity)(t,e,i);if(r)return{value:Number(r.state)||0,state:r.state,unit:(null==a?void 0:a.unit)||r.attributes.unit_of_measurement||"",min:r.attributes.min_value,max:r.attributes.max_value};if(e.attributes._apiInfo){const t=e.attributes._apiInfo,n={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[n]&&t[n].current)return{value:Number(t[n].current)||0,state:String(t[n].current),unit:(null==a?void 0:a.unit)||t[n].unit_of_measurement||"",min:t[n].min?Number(t[n].min):null,max:t[n].max?Number(t[n].max):null};if(t.diagnostic_sensors&&t.diagnostic_sensors[n]&&t.diagnostic_sensors[n].current)return{value:Number(t.diagnostic_sensors[n].current)||0,state:String(t.diagnostic_sensors[n].current),unit:(null==a?void 0:a.unit)||t.diagnostic_sensors[n].unit_of_measurement||"",min:null,max:null}}return{value:0,state:"N/A",unit:(null==a?void 0:a.unit)||"",min:null,max:null}}static getSensorRange(t,e,i){const a=(0,n.getFieldDefinition)(i);return{min:null,max:null,unit:(null==a?void 0:a.unit)||""}}static getSensorThresholds(t,e,i){var a,r;if(e.attributes._apiInfo){const t=e.attributes._apiInfo,n={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[n]&&void 0!==t[n].min&&void 0!==t[n].max)return{min:Number(t[n].min)||0,max:Number(t[n].max)||100}}const s=(0,n.getSensorMapEntityId)(e,`min_${i}`),o=(0,n.getSensorMapEntityId)(e,`max_${i}`);return s&&o&&"unavailable"!==(null===(a=t.states[s])||void 0===a?void 0:a.state)&&"unavailable"!==(null===(r=t.states[o])||void 0===r?void 0:r.state)?{min:Number(t.states[s].state)||0,max:Number(t.states[o].state)||100}:{min:0,max:100}}static isSensorColumn(t){return(0,n.isSensorField)(t)}static calculateSensorStatus(t,e,i){return isNaN(t)?"unavailable":t>=e&&t<=i?"good":"bad"}}},3048:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SortUtils=void 0;const n=i(5869);e.SortUtils=class{static getSortedPlants(t,e,i,a){return[...t].sort(((t,r)=>{const s=(0,n.getFieldValue)(e,a,t),o=(0,n.getFieldValue)(e,a,r);if("number"==typeof s&&"number"==typeof o)return"asc"===i?s-o:o-s;const l=String(s).toLowerCase(),d=String(o).toLowerCase();return"asc"===i?l.localeCompare(d):d.localeCompare(l)}))}}},7361:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.StateManager=void 0;const a=i(9442),r=i(1322),s=i(289),o=i(5869);e.StateManager=class{constructor(t,e,i){this.hass=t,this.config=e,this.requestUpdate=i,this.state=this.getInitialState()}getInitialState(){return{sortColumn:"friendly_name",sortDirection:"asc",editingCell:null,searchQuery:"",multiSelectMode:!1,selectedPlants:new Set,filterMode:!1,filterState:{activeFilters:{},entityTypes:new Set(["plant","cycle"])},showGallery:!1,galleryEntityId:null,galleryImages:[]}}getState(){return this.state}updateConfig(t){this.config=t}updateHass(t){this.hass=t}handleSort(t){this.state.sortColumn===t?this.state.sortDirection="asc"===this.state.sortDirection?"desc":"asc":(this.state.sortColumn=t,this.state.sortDirection="asc"),this.requestUpdate()}handleCellClick(t,e,i,n){switch(t.stopPropagation(),this.state.multiSelectMode&&0===this.state.selectedPlants.size&&this.state.selectedPlants.add(e.entity_id),s.CellTypeUtils.getClickAction(i)){case"edit":this.state.editingCell={entityId:e.entity_id,column:i};break;case"more-info":{let t=e.entity_id;if((0,o.isSensorField)(i)){const n=(0,o.getSensorMapEntityId)(e,i);n&&(t=n)}n(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}));break}}this.requestUpdate()}handleRowClick(t,e,i,n){t.stopPropagation(),this.handleCellClick(t,e,i,n)}handleSearch(t){r.EventUtils.handleSearch(t,(t=>{this.state.searchQuery=t,this.requestUpdate()}))}handleInputUpdate(t,e,i,a){return n(this,void 0,void 0,(function*(){yield r.EventUtils.handleInputUpdate(t,{hass:this.hass,plant:e,columnId:i,multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}},a)}))}handleAreaUpdate(t,e){return n(this,void 0,void 0,(function*(){yield r.EventUtils.handleAreaUpdate(t,{hass:this.hass,plant:e,columnId:"area",multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}})}))}toggleMultiSelect(){this.state.multiSelectMode=!this.state.multiSelectMode,this.state.multiSelectMode||this.state.selectedPlants.clear(),this.requestUpdate()}togglePlantSelection(t,e){e.preventDefault(),e.stopPropagation(),this.state.selectedPlants.has(t)?this.state.selectedPlants.delete(t):this.state.selectedPlants.add(t),this.sendEntitySelectedEvent(),this.requestUpdate()}sendEntitySelectedEvent(){var t;if(!(null===(t=this.config)||void 0===t?void 0:t.identifier))return;if(0===this.state.selectedPlants.size){const t=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:null,selectedEntities:[]}});return void window.dispatchEvent(t)}const e=Array.from(this.state.selectedPlants),i=e[e.length-1];if(!i||!this.hass.states[i])return;const n=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:i,selectedEntities:e}});window.dispatchEvent(n)}toggleFilterMode(){this.state.filterMode=!this.state.filterMode,this.requestUpdate()}toggleFilter(t,e){a.FilterUtils.toggleFilter(t,e,this.state.filterState),this.requestUpdate()}toggleEntityType(t){a.FilterUtils.toggleEntityType(t,this.state.filterState),this.requestUpdate()}getCursorStyle(t){return s.CellTypeUtils.getCursorStyle(t)}clearSearch(){this.state.searchQuery="",this.requestUpdate()}handleGalleryOpen(t){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const e=this.hass.states[t];if(!e)return;const i=[];if(e.attributes.entity_picture&&i.push(e.attributes.entity_picture),e.attributes.images&&Array.isArray(e.attributes.images)){const t=e.attributes.download_path||"/local/images/plants/";e.attributes.images.forEach((e=>{i.push(`${t}${e}`)}))}this.state.showGallery=!0,this.state.galleryEntityId=t,this.state.galleryImages=i,this.requestUpdate()}))}closeGallery(){this.state.showGallery=!1,this.state.galleryEntityId=null,this.requestUpdate()}}},70:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateUtils=void 0;const n=i(4437),a=i(8598),r=i(5869),s=i(2413);e.TemplateUtils=class{static renderDateInput(t,e){return n.html`
            <input
                type="date"
                .value="${(null==t?void 0:t.split("T")[0])||""}"
                @change=${t=>e.onInput(t,"date")}
                @click=${t=>t.stopPropagation()}
                class="date-input"
            >
        `}static renderNumberInput(t,e,i,a=.1){var s,o;const l=(0,r.getFieldDefinition)(i.columnId);return n.html`
            <input
                type="number"
                step="${(null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.step)||a}"
                min="${(null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.min)||0}"
                .value="${t||""}"
                @keydown=${t=>i.onInput(t,"number")}
                @click=${t=>t.stopPropagation()}
                class="numeric-input"
            > ${(null==l?void 0:l.unit)||e}
        `}static renderSelectInput(t,e,i,a){const s=(0,r.getFieldDefinition)(i.columnId),o=(null==s?void 0:s.options)?s.options(i.hass,i.plant):e;return n.html`
            <select
                @change=${t=>i.onInput(t,"select")}
                @click=${t=>t.stopPropagation()}
                class="${a}"
            >
                ${o.map((e=>n.html`
                    <option value="${e}" ?selected=${e===t}>
                        ${e}
                    </option>
                `))}
            </select>
        `}static renderTextInput(t,e,i=!1){return i?n.html`
                <textarea
                    .value="${t||""}"
                    @keydown=${t=>e.onInput(t,"text")}
                    @click=${t=>t.stopPropagation()}
                    class="notes-textarea"
                ></textarea>
            `:n.html`
            <input
                type="text"
                .value="${t||""}"
                @keydown=${t=>e.onInput(t,"text")}
                @click=${t=>t.stopPropagation()}
                class="text-input"
            >
        `}static renderSensorCell(t){const{hass:e,plant:i,columnId:r}=t,s=a.SensorUtils.getSensorInfo(e,i,r),o=a.SensorUtils.getSensorThresholds(e,i,r),l=100*Math.max(0,Math.min(1,(s.value-o.min)/(o.max-o.min))),d=a.SensorUtils.calculateSensorStatus(s.value,o.min,o.max);return n.html`
            <div class="sensor-cell" @click=${t.onClick}>
                <div class="meter-container">
                    <div class="meter red">
                        <span class="${d}" style="width: 100%;"></span>
                    </div>
                    <div class="meter green">
                        <span class="${d}" style="width:${"unavailable"!==d?l:"0"}%;"></span>
                    </div>
                    <div class="meter red">
                        <span class="bad" style="width:${"unavailable"!==d&&s.value>o.max?100:0}%;"></span>
                    </div>
                </div>
                <div class="sensor-value">
                    ${s.value} ${s.unit}
                </div>
            </div>
        `}static renderBadge(t,e,i){const a={status:`status-badge ${(null==t?void 0:t.toLowerCase())||""}`,phase:"phase-badge",cycle:"cycle-badge",area:"area-badge"};return n.html`
            <div class="${a[i]}" @click=${e.onClick}>
                ${t||"-"}
            </div>
        `}static renderWebsiteCell(t,e,i){return i?this.renderTextInput(t,e):n.html`
            <div class="website-container">
                <span class="website-text text-ellipsis" @click=${e.onClick}>
                    ${t||"-"}
                </span>
                ${t?n.html`
                    <ha-icon-button
                        .label=${s.TranslationUtils.translateUI(e.hass,"open")}
                        @click=${e=>{e.stopPropagation(),window.open(t,"_blank")}}
                        class="website-icon-button"
                    >
                        <ha-icon icon="mdi:open-in-new" class="website-icon"></ha-icon>
                    </ha-icon-button>
                `:""}
            </div>
        `}static renderPlantName(t,e,i){return n.html`
            <div class="plant-name">
                ${e?n.html`
                    <img src="${e}" alt="${t}" @click="${t=>{t.stopPropagation();const e=new CustomEvent("flower-image-click",{detail:{entityId:i.plant.entity_id},bubbles:!0,composed:!0});t.target.dispatchEvent(e),i.onClick(t)}}">
                `:n.html`
                    <div class="plant-icon">
                        <ha-icon icon="mdi:flower"></ha-icon>
                    </div>
                `}
                ${t}
            </div>
        `}}},2413:function(t,e){var i=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function o(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.TranslationUtils=void 0;class n{static getLanguage(t){return t.language||"en"}static getCardBaseUrl(){const t=document.getElementsByTagName("script");for(let e=0;e<t.length;e++){const i=t[e].src;if(i&&(i.includes("brokkoli-card.js")||i.includes("brokkoli-list-card.js")||i.includes("brokkoli-area-card.js")))return i.substring(0,i.lastIndexOf("/"))}return"/local/brokkoli-card"}static loadTranslationFile(t){return i(this,void 0,void 0,(function*(){try{const e=`${this.getCardBaseUrl()}/translations/${t}.json`,i=yield fetch(e);if(!i.ok)throw new Error(`Failed to load translation file: ${i.status}`);return yield i.json()}catch(e){return console.warn(`Failed to load translations for language ${t}, falling back to English`,e),"en"!==t?this.loadTranslationFile("en"):{}}}))}static loadTranslations(t){return i(this,void 0,void 0,(function*(){if(this.translationCache.has(t))return this.translationCache.get(t);if(this.loadingPromises.has(t))return this.loadingPromises.get(t);const e=this.loadTranslationFile(t);this.loadingPromises.set(t,e);try{const i=yield e;return this.translationCache.set(t,i),this.loadingPromises.delete(t),i}catch(e){throw this.loadingPromises.delete(t),e}}))}static getTranslation(t,e){const i=this.getLanguage(t);return this.translationCache.has(i)?this.getTranslationFromObject(this.translationCache.get(i),e):(this.isInitialized||this.loadTranslations(i).catch((t=>{console.warn("Failed to load translations:",t)})),e)}static getTranslationFromObject(t,e){try{const i=e.split(".");let n=t;for(const t of i){if(!n||"object"!=typeof n||!(t in n))return e;n=n[t]}return"string"==typeof n?n:e}catch(t){return console.warn("Translation not found:",e,t),e}}static initializeTranslations(t){return i(this,void 0,void 0,(function*(){const e=this.getLanguage(t);try{yield this.loadTranslations(e),this.isInitialized=!0}catch(t){console.warn("Failed to initialize translations:",t),this.isInitialized=!0}}))}static translateField(t,e){return this.getTranslation(t,`frontend.fields.${e}`)}static translateSensor(t,e){return this.getTranslation(t,`frontend.sensors.${e}`)}static translateGrowthPhase(t,e){return this.getTranslation(t,`frontend.growth_phases.${e}`)}static translateTreatment(t,e){return this.getTranslation(t,`frontend.treatments.${e}`)}static translateGraph(t,e){return this.getTranslation(t,`frontend.graph.${e}`)}static translateDiagnostics(t,e){return this.getTranslation(t,`frontend.diagnostics.${e}`)}static translateUI(t,e){return this.getTranslation(t,`frontend.ui.${e}`)}static translateListCard(t,e){return this.getTranslation(t,`frontend.list_card.${e}`)}static translateHistory(t,e){return this.getTranslation(t,`frontend.history.${e}`)}static translate(t,e){return this.getTranslation(t,e)}static translateHelper(t,e){return this.getTranslation(t,`frontend.helpers.${e}`)}static createSensorTooltip(t,e,i,n,a,r){const s=this.translateSensor(t,e),o=this.translateUI(t,"tooltip_min_max");return r?`${s}: ${i} ${r}<br>(${o}: ${n} ~ ${a} ${r})`:`${s}: ${i}<br>(${o}: ${n} ~ ${a})`}}e.TranslationUtils=n,n.translationCache=new Map,n.loadingPromises=new Map,n.isInitialized=!1},6752:(t,e,i)=>{var n;i.d(e,{JW:()=>S,XX:()=>W,c0:()=>T,ge:()=>V,qy:()=>I,s6:()=>U});const a=window,r=a.trustedTypes,s=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,d="?"+l,c=`<${d}>`,u=document,p=()=>u.createComment(""),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,m=t=>g(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,b=/>/g,_=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,w=/"/g,$=/^(?:script|style|textarea|title)$/i,k=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=k(1),S=k(2),T=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),C=new WeakMap,A=u.createTreeWalker(u,129,null,!1);function E(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const M=(t,e)=>{const i=t.length-1,n=[];let a,r=2===e?"<svg>":"",s=v;for(let e=0;e<i;e++){const i=t[e];let d,u,p=-1,h=0;for(;h<i.length&&(s.lastIndex=h,u=s.exec(i),null!==u);)h=s.lastIndex,s===v?"!--"===u[1]?s=y:void 0!==u[1]?s=b:void 0!==u[2]?($.test(u[2])&&(a=RegExp("</"+u[2],"g")),s=_):void 0!==u[3]&&(s=_):s===_?">"===u[0]?(s=null!=a?a:v,p=-1):void 0===u[1]?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=void 0===u[3]?_:'"'===u[3]?w:x):s===w||s===x?s=_:s===y||s===b?s=v:(s=_,a=void 0);const g=s===_&&t[e+1].startsWith("/>")?" ":"";r+=s===v?i+c:p>=0?(n.push(d),i.slice(0,p)+o+i.slice(p)+l+g):i+l+(-2===p?(n.push(void 0),e):g)}return[E(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class P{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,s=0;const c=t.length-1,u=this.parts,[h,g]=M(t,e);if(this.el=P.createElement(h,i),A.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=A.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(o)||e.startsWith(l)){const i=g[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+o).split(l),e=/([.?@])?(.*)/.exec(i);u.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?N:"?"===e[1]?z:"@"===e[1]?R:j})}else u.push({type:6,index:a})}for(const e of t)n.removeAttribute(e)}if($.test(n.tagName)){const t=n.textContent.split(l),e=t.length-1;if(e>0){n.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],p()),A.nextNode(),u.push({type:2,index:++a});n.append(t[e],p())}}}else if(8===n.nodeType)if(n.data===d)u.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(l,t+1));)u.push({type:7,index:a}),t+=l.length-1}a++}}static createElement(t,e){const i=u.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,n){var a,r,s,o;if(e===T)return e;let l=void 0!==n?null===(a=i._$Co)||void 0===a?void 0:a[n]:i._$Cl;const d=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(o=i)._$Co)&&void 0!==s?s:o._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,n)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(i,!0);A.currentNode=a;let r=A.nextNode(),s=0,o=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new L(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new B(r,this,t)),this._$AV.push(e),l=n[++o]}s!==(null==l?void 0:l.index)&&(r=A.nextNode(),s++)}return A.currentNode=u,a}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,n){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),h(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):m(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&h(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,a="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=P.createElement(E(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.v(i);else{const t=new F(a,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new P(t)),e}T(t){g(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new L(this.k(p()),this.k(p()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,n,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const a=this.strings;let r=!1;if(void 0===a)t=D(this,t,e,0),r=!h(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const n=t;let s,o;for(t=a[0],s=0;s<a.length-1;s++)o=D(this,n[i+s],e,s),o===T&&(o=this._$AH[s]),r||(r=!h(o)||o!==this._$AH[s]),o===U?t=U:t!==U&&(t+=(null!=o?o:"")+a[s+1]),this._$AH[s]=o}r&&!n&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class N extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const O=r?r.emptyScript:"";class z extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,O):this.element.removeAttribute(this.name)}}class R extends j{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:U)===T)return;const n=this._$AH,a=t===U&&n!==U||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==U&&(n===U||a);a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const V={O:o,P:l,A:d,C:1,M,L:F,R:m,D,I:L,V:j,H:z,N:R,U:N,F:B},H=a.litHtmlPolyfillSupport;null==H||H(P,L),(null!==(n=a.litHtmlVersions)&&void 0!==n?n:a.litHtmlVersions=[]).push("2.8.0");const W=(t,e,i)=>{var n,a;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=r._$litPart$;if(void 0===s){const t=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new L(e.insertBefore(p(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s}},2924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>n,eventOptions:()=>d,property:()=>s,query:()=>c,queryAll:()=>u,queryAssignedElements:()=>m,queryAssignedNodes:()=>f,queryAsync:()=>p,state:()=>o});const n=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),a=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},r=(t,e,i)=>{e.constructor.createProperty(i,t)};function s(t){return(e,i)=>void 0!==i?r(t,e,i):a(t,e)}function o(t){return s({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(i,n)=>{var a;if(void 0===n){const n=null!==(a=i.originalKey)&&void 0!==a?a:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{const a=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(a,n)}};function d(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function c(t,e){return l({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}function u(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function p(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var h;const g=null!=(null===(h=window.HTMLSlotElement)||void 0===h?void 0:h.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function m(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:n=>({get(){var n;const a="slot"+(e?`[name=${e}]`:":not([name])"),r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(a),s=null!=r?g(r,t):[];return i?s.filter((t=>t.matches(i))):s},enumerable:!0,configurable:!0})})}function f(t,e,i){let n,a=t;return"object"==typeof t?(a=t.slot,n=t):n={flatten:e},i?m({slot:a,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(a?`[name=${a}]`:":not([name])"),r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==r?void 0:r.assignedNodes(n))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},3534:(t,e,i)=>{i.r(e),i.d(e,{UnsafeHTMLDirective:()=>r,unsafeHTML:()=>s});var n=i(6752);class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class r extends a{constructor(t){if(super(t),this.et=n.s6,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.s6||null==t)return this.ft=void 0,this.et=t;if(t===n.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const s=(o=r,(...t)=>({_$litDirective$:o,values:t}));var o},4437:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>o,LitElement:()=>S,ReactiveElement:()=>x,UpdatingElement:()=>I,_$LE:()=>U,_$LH:()=>k.ge,adoptStyles:()=>c,css:()=>d,defaultConverter:()=>v,getCompatibleStyle:()=>u,html:()=>k.qy,isServer:()=>C,noChange:()=>k.c0,notEqual:()=>y,nothing:()=>k.s6,render:()=>k.XX,supportsAdoptingStyleSheets:()=>a,svg:()=>k.JW,unsafeCSS:()=>l});const n=window,a=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new o("string"==typeof t?t:t+"",void 0,r),d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,r)},c=(t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),a=n.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,t.appendChild(i)}))},u=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var p;const h=window,g=h.trustedTypes,m=g?g.emptyScript:"",f=h.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},_="finalized";class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=b){var n;const a=this.constructor._$Ep(t,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,a=n._$Ev.get(t);if(void 0!==a&&this._$El!==a){const t=n.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=a,this[a]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}x[_]=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:x}),(null!==(p=h.reactiveElementVersions)&&void 0!==p?p:h.reactiveElementVersions=[]).push("1.6.3");var w,$,k=i(6752);const I=x;class S extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,k.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return k.c0}}S.finalized=!0,S._$litElement$=!0,null===(w=globalThis.litElementHydrateSupport)||void 0===w||w.call(globalThis,{LitElement:S});const T=globalThis.litElementPolyfillSupport;null==T||T({LitElement:S});const U={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==($=globalThis.litElementVersions)&&void 0!==$?$:globalThis.litElementVersions=[]).push("3.3.3");const C=!1},8330:t=>{t.exports=JSON.parse('{"name":"brokkoli-card","version":"3.0.0","description":"A Lovelace brokkoli card for Home Assistant","main":"brokkoli-card.js","repository":{"type":"git","url":"git+ssh://git@github.com/Olen/lovelace-brokkoli-card.git"},"author":"Ola Bjorling Erdal <ola@bjorling.se>","license":"MIT","scripts":{"build":"webpack -c webpack.config.js","lint":"eslint src/**/*.ts","watch":"webpack -c webpack.config.js --watch --mode=development"},"dependencies":{"@marcokreeft/ha-editor-formbuilder":"2024.9.1","@mdi/js":"^7.4.47","custom-card-helpers":"^1.9.0","flatpickr":"^4.6.13","home-assistant-js-websocket":"^9.4.0","lit":"^2.8.0","lit-element":"^2.5.1"},"devDependencies":{"@babel/core":"^7.26.0","@babel/preset-env":"^7.26.0","@babel/preset-typescript":"^7.26.0","@types/node":"^20.11.30","@typescript-eslint/eslint-plugin":"^8.19.1","apexcharts":"^4.4.0","babel-loader":"^9.1.3","compression-webpack-plugin":"^11.1.0","copy-webpack-plugin":"^13.0.0","css-loader":"^7.1.2","eslint":"^8.57.0","style-loader":"^4.0.0","ts-loader":"^9.5.2","typescript":"^5.7.3","webpack":"^5.97.1","webpack-cli":"^5.1.4"},"keywords":[],"bugs":{"url":"https://github.com/Olen/lovelace-brokkoli-card/issues"},"homepage":"https://github.com/Olen/lovelace-brokkoli-card#readme"}')}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(2489)})();