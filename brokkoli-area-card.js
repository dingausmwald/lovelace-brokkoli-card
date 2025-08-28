/*! For license information please see brokkoli-area-card.js.LICENSE.txt */
(()=>{"use strict";var t={2434:function(t,e,i){var s=this&&this.__decorate||function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},n=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default_show_labels=e.default_show_rings=e.AREA_CARD_EDITOR_NAME=e.AREA_CARD_NAME=void 0;const o=i(4437),r=i(2924),a=i(3073);i(9446);const l=i(8063),c=i(9442),d=i(2413);i(9242),e.AREA_CARD_NAME="brokkoli-area-card",e.AREA_CARD_EDITOR_NAME="brokkoli-area-card-editor",e.default_show_rings=["health","moisture","temperature"],e.default_show_labels=[],window.customCards=window.customCards||[],window.customCards.push({type:e.AREA_CARD_NAME,name:"Brokkoli Area Card",preview:!0,description:"Zeigt die Positionen von Pflanzen in einem Bereich an"});let h=class extends o.LitElement{constructor(){super(...arguments),this._handleEntitySelected=t=>{var e;this._selectedEntityId=t.detail.entityId;const i=t.detail.selectedEntities||[];if(null===(e=this.config)||void 0===e?void 0:e.identifier){const e=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:t.detail.entityId,selectedEntities:i.length?i:t.detail.entityId?[t.detail.entityId]:[]}});window.dispatchEvent(e)}}}setConfig(t){var i;if(!t.area&&!t.entity&&!(null===(i=t.entities)||void 0===i?void 0:i.length))throw new Error(this._hass?d.TranslationUtils.translateUI(this._hass,"area_config_error"):"Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren");this.config=Object.assign(Object.assign({},t),{show_rings:t.show_rings||[...e.default_show_rings],show_labels:t.show_labels||[],legend:void 0===t.legend||t.legend})}set hass(t){this._hass=t,d.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()}))}static getConfigElement(){return n(this,void 0,void 0,(function*(){return document.createElement(e.AREA_CARD_EDITOR_NAME)}))}static getStubConfig(){return{type:"custom:brokkoli-area-card",title:"Pflanzen-Bereich",area:"wohnzimmer"}}_getAllPlantEntities(){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").map((t=>t.entity_id)):[]}_getPlantEntitiesInArea(t){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").filter((e=>{const i=c.FilterUtils.getAreaForEntity(this._hass,e.entity_id);return i&&i.toLowerCase()===t.toLowerCase()})).map((t=>t.entity_id)):[]}render(){if(!this.config||!this._hass)return o.html``;let t=[];t=this.config.area?this._getPlantEntitiesInArea(this.config.area):this._getAllPlantEntities(),this.config.entity&&t.push(this.config.entity),this.config.entities&&(t=[...t,...this.config.entities]);const e=t.filter((t=>this._hass.states[t]));return o.html`
      <ha-card>
        ${this.config.title?o.html`<h1 class="card-header">${this.config.title}</h1>`:""}
        <div class="card-content no-padding">
          <brokkoli-area
            .hass=${this._hass}
            .entities=${e}
            .areaId=${this.config.area||""}
            .showRings=${this.config.show_rings}
            .showLabels=${this.config.show_labels}
            .heatmap=${this.config.heatmap}
            .heatmapColor=${this.config.heatmap_color}
            .heatmapSecondaryColor=${this.config.heatmap_secondary_color}
            .heatmapOpacity=${this.config.heatmap_opacity}
            .showLegend=${this.config.legend}
          ></brokkoli-area>
        </div>
      </ha-card>
    `}getCardSize(){return 3}static get styles(){return o.css`
      ${a.positionStyles}
      
      .no-padding {
        padding: 0 !important;
      }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("request-area-id",(t=>{t.detail&&"function"==typeof t.detail.callback&&t.detail.callback(this.config.area||"")})),this.addEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}};s([(0,r.property)({attribute:!1})],h.prototype,"_hass",void 0),s([(0,r.property)()],h.prototype,"config",void 0),s([(0,r.state)()],h.prototype,"_error",void 0),s([(0,r.state)()],h.prototype,"_selectedEntityId",void 0),h=s([(0,r.customElement)(e.AREA_CARD_NAME)],h),e.default=h},7814:function(t,e,i){var s=this&&this.__decorate||function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliAreaLegend=void 0;const n=i(4437),o=i(2924),r=i(4278),a=i(8621),l=i(2413),c=["temperature","moisture","conductivity","dli","health","humidity","illuminance","water_consumption","fertilizer_consumption","power_consumption"];let d=class extends n.LitElement{constructor(){super(...arguments),this.initialShowRings=[],this.initialShowLabels=[],this._activeTab="rings",this._selectedRings=[],this._selectedLabels=[],this._heatmapColor="#ff6666",this._heatmapSecondaryColor="#ffffff",this._heatmapOpacity=.8,this._isDraggingOpacity=!1,this._userChangedSettings=!1}firstUpdated(){this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity}updated(t){super.updated(t),(t.has("initialShowRings")||t.has("initialShowLabels")||t.has("initialHeatmap")||t.has("initialHeatmapColor")||t.has("initialHeatmapSecondaryColor")||t.has("initialHeatmapOpacity"))&&(this._userChangedSettings||(this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity))}_fixColorValue(t){if(t)return t.startsWith("#")?t:{red:"#ff0000",blue:"#0000ff"}[t.toLowerCase()]||t}_getIconForSensor(t){var e,i,s,n,o;return(null===(e=this.plantInfo)||void 0===e?void 0:e.result)&&(null===(i=this.plantInfo.result[t])||void 0===i?void 0:i.icon)?this.plantInfo.result[t].icon:"health"===t&&(null===(o=null===(n=null===(s=this.plantInfo)||void 0===s?void 0:s.result)||void 0===n?void 0:n.helpers)||void 0===o?void 0:o.health)?"mdi:heart-pulse":{temperature:"mdi:thermometer",moisture:"mdi:water-percent",conductivity:"mdi:flash",dli:"mdi:white-balance-sunny",health:"mdi:heart-pulse",humidity:"mdi:water",illuminance:"mdi:brightness-5",water_consumption:"mdi:cup-water",fertilizer_consumption:"mdi:fertilizer",power_consumption:"mdi:flash-circle",ph:"mdi:ph"}[t]||"mdi:help-circle-outline"}_stopEvent(t){t.stopPropagation()}_getAvailableSensors(){return this.hass?c.map((t=>({id:t,name:l.TranslationUtils.translateSensor(this.hass,t)}))):[]}_cycleTab(t){t.stopPropagation(),"rings"===this._activeTab?this._activeTab="labels":"labels"===this._activeTab?this._activeTab="heatmap":this._activeTab="rings",this.requestUpdate()}_handleRingChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._selectedRings.includes(e)?this._selectedRings=this._selectedRings.filter((t=>t!==e)):this._selectedRings.push(e),this._dispatchSettingsChanged()}_handleLabelChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._selectedLabels.includes(e)?this._selectedLabels=this._selectedLabels.filter((t=>t!==e)):this._selectedLabels.push(e),this._dispatchSettingsChanged()}_handleHeatmapSensorChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._heatmapSensor===e?this._heatmapSensor=null:this._heatmapSensor=e,this._dispatchSettingsChanged()}_handleColorChange(t,e){t.stopPropagation(),this._userChangedSettings=!0;const i=t.target;e?this._heatmapColor=i.value:this._heatmapSecondaryColor=i.value,this._dispatchSettingsChanged()}_handleOpacityDragStart(t){t.stopPropagation(),t.preventDefault(),this._isDraggingOpacity=!0,this._updateOpacityFromMouseEvent(t);const e=t=>this._updateOpacityFromMouseEvent(t),i=()=>{this._isDraggingOpacity=!1,window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}_updateOpacityFromMouseEvent(t){var e;if(!this._isDraggingOpacity)return;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".gradient-preview");if(!i)return;const s=i.getBoundingClientRect(),n=t.clientX-s.left,o=s.width,r=Math.max(0,Math.min(1,n/o));this._heatmapOpacity=r,this._userChangedSettings=!0,this._dispatchSettingsChanged()}_dispatchSettingsChanged(){const t={activeTab:this._activeTab,selectedRings:[...this._selectedRings],selectedLabels:[...this._selectedLabels],heatmapSensor:this._heatmapSensor,heatmapColor:this._heatmapColor||"#ff6666",heatmapSecondaryColor:this._heatmapSecondaryColor||"#ffffff",heatmapOpacity:void 0!==this._heatmapOpacity?this._heatmapOpacity:.8};this.dispatchEvent(new CustomEvent("settings-changed",{detail:t,bubbles:!0,composed:!0}))}_renderModeToggle(){if(!this.hass)return n.html``;let t,e;switch(this._activeTab){case"rings":t="mdi:circle-outline",e=l.TranslationUtils.translateUI(this.hass,"legend_rings_mode_active");break;case"labels":t="mdi:label-outline",e=l.TranslationUtils.translateUI(this.hass,"legend_labels_mode_active");break;case"heatmap":t="mdi:gradient",e=l.TranslationUtils.translateUI(this.hass,"legend_heatmap_mode_active")}return n.html`
      <button 
        class="mode-toggle" 
        title="${e}"
        @click=${this._cycleTab}
      >
        <ha-icon icon="${t}"></ha-icon>
      </button>
    `}_renderRingOptions(){if("rings"!==this._activeTab)return n.html``;const t=this._getAvailableSensors();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._selectedRings.includes(t.id);return n.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleRingChange(e,t.id)}
              style=${(0,r.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,r.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderLabelOptions(){if("labels"!==this._activeTab)return n.html``;const t=this._getAvailableSensors();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._selectedLabels.includes(t.id);return n.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleLabelChange(e,t.id)}
              style=${(0,r.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,r.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderHeatmapOptions(){if("heatmap"!==this._activeTab)return n.html``;const t=this._getAvailableSensors();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._heatmapSensor===t.id;return n.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleHeatmapSensorChange(e,t.id)}
              style=${(0,r.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,r.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
        
        <!-- Farbauswahl immer anzeigen, unabhängig vom Sensor-Status -->
        <div class="color-picker-section" @click=${this._stopEvent}>
          <div class="color-option">
            <input 
              type="color" 
              .value=${this._heatmapColor} 
              @change=${t=>this._handleColorChange(t,!0)}
              title="${this.hass?l.TranslationUtils.translateUI(this.hass,"legend_primary_color"):"Primary Color"}"
            />
            <input 
              type="color" 
              .value=${this._heatmapSecondaryColor} 
              @change=${t=>this._handleColorChange(t,!1)}
              title="${this.hass?l.TranslationUtils.translateUI(this.hass,"legend_secondary_color"):"Secondary Color"}"
            />
          </div>
          <div class="color-preview">
            <div 
              class="gradient-preview" 
              style=${(0,r.styleMap)({background:`linear-gradient(to right, ${this._heatmapColor||"#ff6666"}, ${this._heatmapSecondaryColor||"#ffffff"})`,cursor:"ew-resize"})}
              @mousedown=${this._handleOpacityDragStart}
              title="${this.hass?l.TranslationUtils.translateUI(this.hass,"legend_opacity"):"Opacity"}"
            ></div>
          </div>
        </div>
      </div>
    `}render(){return n.html`
      <div class="legend-container" @click=${this._stopEvent}>
        ${this._renderModeToggle()}
        
        <div class="content-container" @click=${this._stopEvent}>
          ${this._renderRingOptions()}
          ${this._renderLabelOptions()}
          ${this._renderHeatmapOptions()}
        </div>
      </div>
    `}static get styles(){return a.legendStyles}};e.BrokkoliAreaLegend=d,s([(0,o.property)({attribute:!1})],d.prototype,"hass",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialShowRings",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialShowLabels",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialHeatmap",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialHeatmapColor",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialHeatmapSecondaryColor",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"initialHeatmapOpacity",void 0),s([(0,o.property)({attribute:!1})],d.prototype,"plantInfo",void 0),s([(0,o.state)()],d.prototype,"_activeTab",void 0),s([(0,o.state)()],d.prototype,"_selectedRings",void 0),s([(0,o.state)()],d.prototype,"_selectedLabels",void 0),s([(0,o.state)()],d.prototype,"_heatmapSensor",void 0),s([(0,o.state)()],d.prototype,"_heatmapColor",void 0),s([(0,o.state)()],d.prototype,"_heatmapSecondaryColor",void 0),s([(0,o.state)()],d.prototype,"_heatmapOpacity",void 0),s([(0,o.state)()],d.prototype,"_isDraggingOpacity",void 0),e.BrokkoliAreaLegend=d=s([(0,o.customElement)("brokkoli-area-legend")],d)},9446:function(t,e,i){var s=this&&this.__decorate||function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},n=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliArea=void 0;const o=i(4437),r=i(2924),a=i(4278),l=i(3073);i(9242),i(896),i(7814);const c=i(8063);let d=class extends o.LitElement{constructor(){super(...arguments),this.entities=[],this.showRings=[],this.showLabels=[],this.showLegend=!0,this._userSettings={},this._positions={},this._draggingMember=null,this._hoveringMember=null,this._dragOffset={x:0,y:0},this._containerSize={width:0,height:0},this._cellSize=60,this._targetPosition=null,this._isSnapping=!1,this._currentDragPosition=null,this._originalPosition=null,this._wasElementSelected=!1,this._selectedMembers=new Set,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._showSelectionHint=!1,this._justFinishedMultiDrag=!1,this._cycleGroups=[],this._bounds={minX:0,minY:0,maxX:0,maxY:0},this._showAddPlantIndicator=null,this._showAddPlantDialog=!1,this._showPlantFlyout=!1,this._flyoutPosition={x:0,y:0},this._newPlantPosition={x:0,y:0},this._debugMode=!1,this._highlightCell=null,this._plantInfoCache={},this._plantRetryTimeouts={},this._plantLastLoaded={},this._updateTimeout=0,this._boundHandleDrag=this._handleDrag.bind(this),this._boundEndDrag=this._endDrag.bind(this),this._handleResize=()=>{const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._calculateCellSize(),this.requestUpdate()},this._handleGlobalClick=t=>{!t.composedPath().some((t=>t===this))&&!this._isDraggingSelection&&this._showAddPlantIndicator&&(this._showAddPlantIndicator=null,this.requestUpdate())},this._handlePlantCreated=t=>n(this,void 0,void 0,(function*(){if(!this.hass)return;const{entity_id:e,position:i}=t.detail;this._positions[e]=i,this._calculateBounds(),this._normalizePositions();const s=Object.entries(this._positions).map((([t,e])=>this._savePosition(t,e)));yield Promise.all(s),this._loadPositions()})),this._handleNewPlantRequested=t=>{const{position:e}=t.detail;this._newPlantPosition=e,this._showPlantFlyout=!1,this._showAddPlantDialog=!0,this.requestUpdate()},this._handleMovePlantRequested=t=>n(this,void 0,void 0,(function*(){if(!this.hass)return;const{plant:e,position:i}=t.detail;this._positions[e.entity_id]=i,this._calculateBounds(),this._normalizePositions();const s=Object.entries(this._positions).map((([t,e])=>this._savePosition(t,e)));if(yield Promise.all(s),this.areaId)try{const t=this.hass.entities[e.entity_id];if(null==t?void 0:t.device_id){const e=this.areaId.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[t.device_id],area_id:e})}}catch(t){console.error("Fehler beim Setzen der Area:",t)}this._showPlantFlyout=!1,this._loadPositions()})),this._handlePlantCloned=()=>{this._showPlantFlyout=!1,this.requestUpdate()},this._handleMenuClosed=()=>{this._showPlantFlyout=!1,this.requestUpdate()}}firstUpdated(){const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._loadPositions(),this._calculateCellSize(),window.addEventListener("resize",this._handleResize),setTimeout((()=>{const e=this.getBoundingClientRect();e.width===t.width&&e.height===t.height||(this._containerSize={width:e.width,height:e.height},this._calculateCellSize(),this.requestUpdate())}),100),window.addEventListener("click",this._handleGlobalClick),this.addEventListener("plant-created",this._handlePlantCreated)}updated(t){super.updated(t),(t.has("hass")||t.has("entities"))&&this._loadPositions(),this._updateCycleGroups(),(t.has("entities")||t.has("hass")&&!t.get("hass"))&&this._loadAllPlantData(),t.has("_showAddPlantDialog")&&this._handleDialogStateChange()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),window.removeEventListener("click",this._handleGlobalClick),this.removeEventListener("plant-created",this._handlePlantCreated),this._updateTimeout&&(clearTimeout(this._updateTimeout),this._updateTimeout=0)}_loadPositions(){if(!this.hass)return;const t=new Set,e=[];this.entities.forEach((i=>{const s=i.split(".")[1],n=s.match(/(.+?)(_\d+)?$/),o=`text.${n?n[1]:s}_location${n&&n[2]?n[2]:""}`,r=this.hass.states[o];let a=!1;if(r&&r.state&&"unknown"!==r.state)try{const e=JSON.parse(r.state);if(e&&"number"==typeof e.x&&"number"==typeof e.y){const s={x:e.x,y:e.y};return this._positions[i]=s,t.add(`${s.x},${s.y}`),void(a=!0)}}catch(t){}this._positions[i]={x:0,y:0},a||e.push(i)})),e.length>0&&this._distributeUndefinedPositionEntities(e,t),this._identifyCycleGroups(),this._calculateBounds(),this._normalizePositions()}_distributeUndefinedPositionEntities(t,e){if(0===t.length)return;const i=[[1,0],[0,1],[-1,0],[0,-1]];let s=0,n=0,o=0,r=1,a=0,l=0;t.forEach((t=>{let c=!1;for(;!c;){const d=`${s},${n}`;e.has(d)?(s+=i[o][0],n+=i[o][1],a++,a===r&&(o=(o+1)%4,a=0,l++,2===l&&(r++,l=0))):(this._positions[t]={x:s,y:n},e.add(d),c=!0)}}))}_identifyCycleGroups(){if(!this.hass||!this.entities||0===this.entities.length)return void(this._cycleGroups=[]);const t={};this.entities.forEach((e=>{const i={entity_id:e},s=this._getEntityCycleName(i);s&&(t[s]||(t[s]=[]),t[s].push(e))})),this._cycleGroups=Object.entries(t).filter((([,t])=>t.length>=2)).map((([t,e])=>({name:t,color:this._getColorForCycle(t),members:e,positions:e.map((t=>this._positions[t])).filter(Boolean)})))}_calculateBounds(){if(0===Object.keys(this._positions).length)return this._bounds={minX:0,minY:0,maxX:0,maxY:0},!1;let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER;[...Object.values(this._positions),...this._targetPosition?[this._targetPosition]:[],...Object.values(this._isMultiDragging?this._targetPositions:{})].forEach((n=>{t=Math.min(t,n.x),e=Math.min(e,n.y),i=Math.max(i,n.x),s=Math.max(s,n.y)}));const n=Object.assign({},this._bounds);this._bounds={minX:t,minY:e,maxX:i,maxY:s};const o=JSON.stringify(n)!==JSON.stringify(this._bounds);return o&&this._calculateCellSize(),o}_calculateCellSize(){const{minX:t,minY:e,maxX:i,maxY:s}=this._bounds,{width:n,height:o}=this._containerSize,r=i-t+2,a=s-e+2+.5;this._cellSize=Math.min(n/r,o/a)}_gridToPixel(t,e){const{minX:i,minY:s}=this._bounds,{offsetX:n,offsetY:o}=this._getGridOffsets();return{x:n+(t-i)*this._cellSize,y:o+(e-s)*this._cellSize}}_pixelToGrid(t,e){const{minX:i,minY:s}=this._bounds,{offsetX:n,offsetY:o}=this._getGridOffsets();return{x:Math.floor((t-n)/this._cellSize)+i,y:Math.floor((e-o)/this._cellSize)+s}}_getGridOffsets(){const{minX:t,minY:e,maxX:i,maxY:s}=this._bounds,n=s-e+2,o=(i-t+2)*this._cellSize,r=n*this._cellSize;return{offsetX:(this._containerSize.width-o)/2+this._cellSize/2,offsetY:(this._containerSize.height-r)/2+this._cellSize/2}}_renderMembersWithLabels(){if(!this.hass)return[];const t=[...this.entities].sort(((t,e)=>{const i=this._positions[t]||{x:0,y:0},s=this._positions[e]||{x:0,y:0};return i.y!==s.y?i.y-s.y:s.x-i.x})),e=new Map,i=t.length;return t.forEach(((t,s)=>e.set(t,i-1-s+1))),t.map((t=>{var i,s,n;const r=this.hass.states[t];if(!r)return o.html``;const l=this._positions[t]||{x:0,y:0};let d;if(this._isMultiDragging&&this._selectedMembers.has(t)&&this._currentDragPosition)if(t===this._draggingMember)d=Object.assign({},this._currentDragPosition);else{const e=this._originalPositions[this._draggingMember],i=this._originalPositions[t],s=i.x-e.x,n=i.y-e.y;d={x:this._currentDragPosition.x+s*this._cellSize,y:this._currentDragPosition.y+n*this._cellSize}}else this._draggingMember===t&&this._currentDragPosition?d=Object.assign({},this._currentDragPosition):(d=this._gridToPixel(l.x,l.y),d.x+=this._cellSize/2,d.y+=this._cellSize/2);const h=r.attributes.friendly_name||t.split(".")[1],u=r.attributes.entity_picture||"",p=this._draggingMember===t||this._isMultiDragging&&this._selectedMembers.has(t),g=this._isSnapping&&(this._draggingMember===t||this._selectedMembers.has(t)),m=this._hoveringMember===t,_=this._selectedMembers.has(t);let y=e.get(t);p?y+=3:m?y+=2:_&&(y+=1);let v=null;const f=this._getHeatmapSensor();if(f&&t.startsWith("plant.")&&this._plantInfoCache[t]){const e=this._plantInfoCache[t];if(e&&e.result){const t=e.result[f],r=(null===(s=null===(i=e.result.helpers)||void 0===i?void 0:i.health)||void 0===s?void 0:s.entity_id)&&(null===(n=this.hass)||void 0===n?void 0:n.states[e.result.helpers.health.entity_id]);if("health"===f&&r){const t=Number(r.state),e=5,i=Math.min(100,Math.max(0,Math.round(t/e*100))),s=this._getHeatmapColor()||"rgb(148,202,83)",n=this._getHeatmapSecondaryColor()||"white",l=this._getHeatmapOpacity();v=o.html`
              <div class="heatmap-overlay" style=${(0,a.styleMap)({backgroundColor:`color-mix(in srgb, ${s} ${i}%, ${n})`,opacity:l})}></div>
            `}else if(t){const e=Number(t.current||0),i=Number(t.min||0),s=Number(t.max||100),n=Math.min(1,Math.max(0,(e-i)/(s-i))),r=Math.round(100*n),l=this._getHeatmapColor()||`var(--sensor-ring-${f}-color)`,c=this._getHeatmapSecondaryColor()||"white",d=this._getHeatmapOpacity();v=o.html`
              <div class="heatmap-overlay" style=${(0,a.styleMap)({backgroundColor:`color-mix(in srgb, ${l} ${r}%, ${c})`,opacity:d})}></div>
            `}else{const t=this._getHeatmapSecondaryColor()||"white",e=this._getHeatmapOpacity();v=o.html`
              <div class="heatmap-overlay" style=${(0,a.styleMap)({backgroundColor:t,opacity:e})}></div>
            `}}}let b="";t.startsWith("plant.")&&(this._plantInfoCache[t]&&this._plantInfoCache[t].result?b=this._renderPlantSensorRings(t):(b=this._renderDisabledRings(),this.hass&&c.PlantEntityUtils.getPlantInfo(this.hass,t).then((e=>{e&&(this._plantInfoCache[t]={result:e},this.requestUpdate())}))));const w=this._renderSensorLabels(t);return o.html`
        <div 
          class="member-wrapper ${p?"dragging":""} ${m?"hovering":""} ${_?"selected":""}"
          style=${(0,a.styleMap)({left:`${d.x}px`,top:`${d.y}px`,"--cell-size":`${this._cellSize}px`,"--z-index":`${y}`,"z-index":`${y}`})}
          data-entity-id="${t}"
        >
          <div
            class="member ${p?"dragging":""} ${g?"snapping":""} ${_?"selected":""}"
            @mousedown=${e=>this._startDrag(e,t)}
            @touchstart=${e=>this._handleTouchStart(e,t)}
            @click=${e=>this._handleClick(e,t)}
            @mouseover=${()=>{this._hoveringMember=t}}
            @mouseleave=${()=>{this._hoveringMember=null}}
          >
            <div class="member-image" style=${(0,a.styleMap)({backgroundImage:u?`url(${u})`:"none"})}>
              ${v}
              ${b}
              ${u?"":o.html`<ha-icon icon="mdi:flower"></ha-icon>`}
            </div>
          </div>
          <div class="entity-name ${p?"dragging":""} ${m?"hovering":""} ${_?"selected":""}">
            ${h}
          </div>
          ${w}
        </div>
      `}))}_renderPlantSensorRings(t){var e,i;const s=this._plantInfoCache[t],n=this._getActiveRings();if(0===n.length)return o.html``;if(!s||!s.result)return this._renderDisabledRings();const r=s.result;let a=null;if(this.hass&&(null===(i=null===(e=r.helpers)||void 0===e?void 0:e.health)||void 0===i?void 0:i.entity_id)){const t=r.helpers.health.entity_id;this.hass.states[t]&&(a=this.hass.states[t])}const l=n.filter((t=>"health"===t?null!==a:r[t]&&void 0!==r[t].current));return 0===l.length?this._renderDisabledRings():o.html`
      <div class="sensor-rings">
        ${l.map(((t,e)=>{const i=e,s=l.length;if("health"===t&&a){const e={current:Number(a.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:a.entity_id,unit_of_measurement:""};return this._renderSensorRing(e,i,s,t)}return this._renderSensorRing(r[t],i,s,t)}))}
      </div>
    `}_renderSensorRing(t,e,i,s){if(!t||void 0===t.current)return this._renderDisabledRing(e);const n=Number(t.current),r=Number(t.min),a=Number(t.max),l=0===n,c=n<r&&!l,d=n>a;let h=0;h=isNaN(n)?0:"health"===s&&l?.05:l||c?.1:n===r?.02:d?1:Math.max(0,Math.min(1,(n-r)/(a-r)));const u=this._cellSize/2-2-4*e,p=2*Math.PI*u,g=`${p*h} ${p*(1-h)}`,m=l||c||d||"health"===s&&n<=1.5?"sensor-pulsating":"";let _=null,y="";if("health"===s)if(n<=0)_="rgba(240,100,100,1)";else if(n<=.5)_="rgba(240,163,163,1)";else if(n<=2.5){const t=(n-.5)/2;_=`rgb(${240+15*t}, ${163+51*t}, ${163-163*t})`}else{const t=(n-2.5)/2.5;_=`rgb(${255-212*t}, ${214-20*t}, ${0+83*t})`}else y=`sensor-ring-${s}`;return o.html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${u}" 
          class="sensor-ring-bg"
        />
        <circle 
          class="sensor-ring-fg ${y} ${m}"
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${u}" 
          stroke-dasharray="${g}"
          stroke-dashoffset="0"
          transform="rotate(-90, ${this._cellSize/2}, ${this._cellSize/2})"
          style="${_?`stroke: ${_}`:""}"
        />
      </svg>
    `}_renderDisabledRing(t){const e=this._cellSize/2-2-4*t;return o.html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${e}" 
          class="sensor-ring-bg"
        />
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${e}" 
          class="sensor-ring-disabled"
          transform="rotate(-90 ${this._cellSize/2} ${this._cellSize/2})"
        />
      </svg>
    `}_renderDisabledRings(){const t=this._getActiveRings();return 0===t.length?o.html``:o.html`
      <div class="sensor-rings">
        ${Array.from({length:t.length},((t,e)=>this._renderDisabledRing(e)))}
      </div>
    `}_handleClick(t,e){this._draggingMember||this._isMultiDragging||(t.stopPropagation(),t.preventDefault(),this._justFinishedMultiDrag?this._justFinishedMultiDrag=!1:setTimeout((()=>{const t=this._selectedMembers.has(e);t?this._selectedMembers.delete(e):this._selectedMembers.add(e);let i=e;t&&this._selectedMembers.size>0&&(i=Array.from(this._selectedMembers)[this._selectedMembers.size-1]);const s=new CustomEvent("brokkoli-area-entity-selected",{bubbles:!0,composed:!0,detail:{entityId:this._selectedMembers.size>0?i:null,selectedEntities:Array.from(this._selectedMembers)}});this.dispatchEvent(s),this.requestUpdate()}),10))}_startDrag(t,e){if(this._showAddPlantDialog)return;if(this._justFinishedMultiDrag)return;let i,s;t.preventDefault(),this._highlightCell=null,this._showAddPlantIndicator=null,document.body.style.userSelect="none",this._wasElementSelected=this._selectedMembers.has(e),"touches"in t?(i=t.touches[0].clientX,s=t.touches[0].clientY):(i=t.clientX,s=t.clientY);const n=this.getBoundingClientRect();if(this._selectedMembers.has(e)&&this._selectedMembers.size>1){this._isMultiDragging=!0,this._draggingMember=e,this._isDraggingSelection=!0,this._selectedMembers.forEach((t=>{this._originalPositions[t]=Object.assign({},this._positions[t])}));const{x:t,y:o}=this._positions[e],r=this._gridToPixel(t,o);this._dragOffset={x:i-n.left-r.x-this._cellSize/2,y:s-n.top-r.y-this._cellSize/2}}else{this._draggingMember=e,this._originalPosition=Object.assign({},this._positions[e]);const{x:t,y:o}=this._positions[e],r=this._gridToPixel(t,o);this._dragOffset={x:i-n.left-r.x-this._cellSize/2,y:s-n.top-r.y-this._cellSize/2}}window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),window.addEventListener("mousemove",this._boundHandleDrag),window.addEventListener("touchmove",this._boundHandleDrag,{passive:!1}),window.addEventListener("mouseup",this._boundEndDrag),window.addEventListener("touchend",this._boundEndDrag)}_handleDrag(t){if(!this._draggingMember&&!this._isMultiDragging)return;t.preventDefault();const e="touches"in t?t.touches[0].clientX:t.clientX,i="touches"in t?t.touches[0].clientY:t.clientY,s=this.getBoundingClientRect(),n=e-s.left,o=i-s.top;this._currentDragPosition={x:n-this._dragOffset.x,y:o-this._dragOffset.y};const r=this._pixelToGrid(n,o);if(this._isMultiDragging){const t=Array.from(this._selectedMembers)[0],e=this._originalPositions[t],i=r.x-e.x,s=r.y-e.y,n=Object.assign({},this._targetPositions);this._targetPositions={};let o=!0;this._selectedMembers.forEach((t=>{const e=this._originalPositions[t],n={x:e.x+i,y:e.y+s};Object.entries(this._positions).some((([t,e])=>!this._selectedMembers.has(t)&&e.x===n.x&&e.y===n.y))&&(o=!1),this._targetPositions[t]=n})),o||(this._targetPositions={}),JSON.stringify(n)!==JSON.stringify(this._targetPositions)&&this._calculateBounds()}else if(this._draggingMember){const t=Object.entries(this._positions).some((([t,e])=>t!==this._draggingMember&&e.x===r.x&&e.y===r.y));this._targetPosition=t?null:Object.assign({},r),this._highlightCell=t?null:{x:r.x,y:r.y},t||(this._highlightCell=JSON.parse(JSON.stringify({x:r.x,y:r.y}))),this._calculateBounds(),this.requestUpdate()}}_endDrag(t){if(!this._draggingMember&&!this._isMultiDragging)return;const e=this._isMultiDragging;if(window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),document.body.style.userSelect="",null!==this._currentDragPosition&&(this._draggingMember&&this._originalPosition?Math.abs(this._currentDragPosition.x-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).x)>5||Math.abs(this._currentDragPosition.y-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).y)>5:this._isMultiDragging))if(this._isMultiDragging&&this._draggingMember){this._justFinishedMultiDrag=!0,this._isSnapping=!0;const e="touches"in t?t.changedTouches[0].clientX:t.clientX,i="touches"in t?t.changedTouches[0].clientY:t.clientY,s=this.getBoundingClientRect(),n=this._pixelToGrid(e-s.left,i-s.top),o=this._originalPositions[this._draggingMember],r=n.x-o.x,a=n.y-o.y;let l=!0;this._selectedMembers.forEach((t=>{const e=this._originalPositions[t],i=e.x+r,s=e.y+a;Object.entries(this._positions).some((([t,e])=>!this._selectedMembers.has(t)&&e.x===i&&e.y===s))&&(l=!1)})),l?(this._selectedMembers.forEach((t=>{const e=this._originalPositions[t];this._positions[t]={x:e.x+r,y:e.y+a}})),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([t,e])=>{this._savePosition(t,e)})),this._identifyCycleGroups(),this._calculateCellSize()):Object.entries(this._originalPositions).forEach((([t,e])=>{this._positions[t]=Object.assign({},e)})),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)}else this._targetPosition&&this._draggingMember?(this._justFinishedMultiDrag=!0,this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._targetPosition),!this._wasElementSelected&&this._selectedMembers.size>1&&[...this._selectedMembers].filter((t=>t!==this._draggingMember)).forEach((t=>this._selectedMembers.delete(t))),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([t,e])=>{this._savePosition(t,e)})),this._identifyCycleGroups(),this._calculateCellSize(),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)):this._draggingMember&&(this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._originalPosition),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300));this._draggingMember=null,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._currentDragPosition=null,this._originalPosition=null,this._targetPosition=null,this._highlightCell=null,this._wasElementSelected=!1,this.requestUpdate(),(e||this._justFinishedMultiDrag)&&setTimeout((()=>{this._justFinishedMultiDrag=!1}),100),setTimeout((()=>{this._calculateBounds();const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._calculateCellSize(),this.requestUpdate()}),50)}_normalizePositions(){if(0===Object.keys(this._positions).length)return;let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER;Object.values(this._positions).forEach((i=>{t=Math.min(t,i.x),e=Math.min(e,i.y)})),0===t&&0===e||(Object.keys(this._positions).forEach((i=>{this._positions[i]={x:this._positions[i].x-t,y:this._positions[i].y-e}})),this._bounds={minX:0,minY:0,maxX:this._bounds.maxX-t,maxY:this._bounds.maxY-e})}_savePosition(t,e){return n(this,void 0,void 0,(function*(){if(this.hass)try{yield this.hass.callService("plant","change_position",{entity_id:t,position_x:e.x,position_y:e.y})}catch(t){}}))}_renderCycleGroups(){var t;if(!(null===(t=this._cycleGroups)||void 0===t?void 0:t.length))return o.html``;const e=this._cycleGroups.filter((t=>t.positions.length>=2)).map((t=>{const e=`cycle-${t.name.replace(/\s+/g,"-")}`;return o.html`<div id="${e}" data-name="${t.name}" class="cycle-group-frame"></div>`}));return e.length?o.html`<div class="cycle-layer">${e}</div>`:o.html``}render(){if(!this.hass)return o.html``;let t;t=0===this.entities.length?4:this._bounds.maxY-this._bounds.minY+2;const e=t*this._cellSize+20,i=new Set;Object.entries(this._positions).forEach((([t,e])=>{t!==this._draggingMember&&i.add(`${e.x},${e.y}`)}));const s=[];let n,r,l,c;0===this.entities.length?(n=-1,r=2,l=-1,c=2):(n=this._bounds.minX-1,r=this._bounds.maxX+1,l=this._bounds.minY-1,c=this._bounds.maxY+1);for(let t=l;t<=c;t++)for(let e=n;e<=r;e++){const n=`${e},${t}`;if(!i.has(n)){const i=this._gridToPixel(e,t),n=null!==this._highlightCell&&this._highlightCell.x===e&&this._highlightCell.y===t,r=this._showAddPlantIndicator&&this._showAddPlantIndicator.x===e&&this._showAddPlantIndicator.y===t;s.push(o.html`
            <svg 
              class="cell ${n?"highlight":""} ${r?"add-indicator":""}" 
              style=${(0,a.styleMap)({left:`${i.x}px`,top:`${i.y}px`,width:`${this._cellSize}px`,height:`${this._cellSize}px`,transform:"translate(-50%, -50%)",zIndex:n||r?"5":"1"})}
            >
              <rect 
                x="0" 
                y="0" 
                width="${this._cellSize}" 
                height="${this._cellSize}" 
                fill="transparent" 
                stroke="${n?"var(--primary-color, #3498db)":r?"var(--accent-color, #f3a95e)":"var(--divider-color, #e0e0e0)"}" 
                stroke-width="${n||r?"2.5":"0.8"}" 
                stroke-opacity="${n||r?"1":"0.4"}"
                ${n?'stroke-dasharray="5,3"':""}
                rx="2" 
                ry="2"
              />
            </svg>
            ${r?o.html`
              <div 
                class="add-plant-button"
                style=${(0,a.styleMap)({position:"absolute",left:`${i.x}px`,top:`${i.y}px`,width:`${this._cellSize}px`,height:`${this._cellSize}px`,transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:1*this._cellSize+"px",color:"var(--accent-color, #f3a95e)",opacity:"0.1",zIndex:"50",cursor:"pointer"})}
                @click=${i=>this._handleCellClick(i,e,t)}
              >+</div>
            `:""}
          `)}}const d=this._cellSize/2,h=o.html`
      <div class="container" 
           style=${(0,a.styleMap)({height:`${e}px`})} 
           @click=${this._handleContainerClick}>
        <div class="grid-background" style=${(0,a.styleMap)({transform:`translate(${d}px, ${d}px)`})}>
          ${s}
        </div>
        
        <div class="cycle-layer">
          ${this._renderCycleGroups()}
        </div>
        
        <div class="members">
          ${this._renderMembersWithLabels()}
        </div>
        
        <div class="cycle-labels-layer"></div>
        
        ${this._renderSelectionHint()}
        
        <!-- Legende einfügen -->
        ${this.showLegend?o.html`
          <brokkoli-area-legend
            .hass=${this.hass}
            .initialShowRings=${this._getActiveRings()}
            .initialShowLabels=${this._getActiveLabels()}
            .initialHeatmap=${this._getHeatmapSensor()}
            .initialHeatmapColor=${this._getHeatmapColor()}
            .initialHeatmapSecondaryColor=${this._getHeatmapSecondaryColor()}
            .plantInfo=${this._plantInfoCache[Object.keys(this._plantInfoCache)[0]]}
            @settings-changed=${this._handleSettingsChanged}
          ></brokkoli-area-legend>
        `:""}
      </div>
    `,u=this._showPlantFlyout?o.html`
      <plant-flyout-menu
        .hass=${this.hass}
        .position=${this._flyoutPosition}
        .targetPosition=${this._newPlantPosition}
        .areaId=${this.areaId}
        .isMobile=${window.innerWidth<=768}
        @new-plant-requested=${this._handleNewPlantRequested}
        @move-plant-requested=${this._handleMovePlantRequested}
        @plant-cloned=${this._handlePlantCloned}
        @menu-closed=${this._handleMenuClosed}
      ></plant-flyout-menu>
    `:"";return o.html`
      ${h}
      ${u}
    `}_updateCycleGroups(){setTimeout((()=>{this._cycleGroups.forEach((t=>{var e;if(t.positions.length<1)return;const i=`cycle-${t.name.replace(/\s+/g,"-")}`,s=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(i);if(!s)return;s.innerHTML="";const n=[];t.members.forEach((t=>{var e;const i=`.member-wrapper[data-entity-id="${t}"]`,s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(i);s&&n.push(s)})),n.length<1||this._identifyIslands(t.members).forEach((e=>{const i=n.filter((t=>{const i=t.getAttribute("data-entity-id");return i&&e.includes(i)}));if(i.length<1)return;const o=[];let r=Number.MAX_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,c=Number.MIN_SAFE_INTEGER;i.forEach((t=>{const e=t.getBoundingClientRect(),i=this.getBoundingClientRect(),s=e.left-i.left+e.width/2,n=e.top-i.top+e.height/2,d=Math.max(e.width,e.height)/2;o.push({center:{x:s,y:n},radius:d}),r=Math.min(r,s-d-20),a=Math.min(a,n-d-20),l=Math.max(l,s+d+20),c=Math.max(c,n+d+20)}));const d=document.createElement("div");d.className="cycle-group-frame",d.style.position="absolute",d.style.boxSizing="border-box",d.style.zIndex="2",d.style.pointerEvents="none",d.style.left=`${r}px`,d.style.top=`${a}px`,d.style.width=l-r+"px",d.style.height=c-a+"px",d.dataset.centerX=`${r+(l-r)/2}`,d.dataset.centerY=`${a+(c-a)/2}`,d.dataset.width=""+(l-r),d.dataset.height=""+(c-a),d.dataset.groupName=t.name,d.dataset.groupColor=t.color||"#3388ff";const h=document.createElementNS("http://www.w3.org/2000/svg","svg");let u;if(h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.style.position="absolute",h.style.top="0",h.style.left="0",h.style.overflow="visible",1===i.length){const t=o[0],e=t.radius+15;u=`M ${t.center.x-r-e} ${t.center.y-a} a ${e} ${e} 0 1 0 ${2*e} 0 a ${e} ${e} 0 1 0 ${2*-e} 0`}else u=this._createHullPath(o,r,a);const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",u),p.setAttribute("fill","none"),p.setAttribute("stroke",t.color||"#3388ff"),p.setAttribute("stroke-width","2"),p.setAttribute("stroke-linejoin","round"),p.setAttribute("stroke-linecap","round"),h.appendChild(p),d.appendChild(h),s.appendChild(d)}))})),this._createClickableCycleLabels()}),100)}_selectCycleMembers(t){const e=this._cycleGroups.find((e=>e.name===t));e?(e.members.every((t=>this._selectedMembers.has(t)))?e.members.forEach((t=>{this._selectedMembers.delete(t)})):(this._selectedMembers.clear(),e.members.forEach((t=>{this._selectedMembers.add(t)}))),this.requestUpdate()):console.warn(`Keine Cycle-Gruppe mit Namen ${t} gefunden`)}_createHullPath(t,e,i){if(t.length<2)return"";const s=[];t.forEach((t=>{const{center:n,radius:o}=t,r=o+20;for(let t=0;t<16;t++){const o=t/16*2*Math.PI;s.push({x:n.x-e+r*Math.cos(o),y:n.y-i+r*Math.sin(o)})}}));const n=this._computeConvexHull(s);if(n.length<3)return"";let o=`M ${n[0].x} ${n[0].y}`;for(let t=1;t<n.length;t++){const e=n[t-1],i=n[t],s=(e.x+i.x)/2,r=(e.y+i.y)/2;o+=` Q ${e.x} ${e.y}, ${s} ${r}`}const r=n[n.length-1],a=n[0],l=(r.x+a.x)/2,c=(r.y+a.y)/2;return o+=` Q ${r.x} ${r.y}, ${l} ${c}`,o+=` Q ${a.x} ${a.y}, ${n[0].x} ${n[0].y}`,o}_computeConvexHull(t){if(t.length<3)return t;let e=t[0];for(let i=1;i<t.length;i++)(t[i].y<e.y||t[i].y===e.y&&t[i].x<e.x)&&(e=t[i]);const i=t.slice();i.sort(((t,i)=>{if(t===e)return-1;if(i===e)return 1;const s=Math.atan2(t.y-e.y,t.x-e.x),n=Math.atan2(i.y-e.y,i.x-e.x);return s===n?Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))-Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)):s-n}));const s=[];for(let t=0;t<i.length;t++)0!==t&&i[t].x===i[t-1].x&&i[t].y===i[t-1].y||s.push(i[t]);const n=[];for(let t=0;t<Math.min(3,s.length);t++)n.push(s[t]);for(let t=3;t<s.length;t++){for(;n.length>1&&this._ccw(n[n.length-2],n[n.length-1],s[t])<=0;)n.pop();n.push(s[t])}return n}_ccw(t,e,i){return(e.x-t.x)*(i.y-t.y)-(e.y-t.y)*(i.x-t.x)}_identifyIslands(t){const e={};t.forEach((t=>{const i=this._positions[t];i&&(e[`${i.x},${i.y}`]=t)}));const i={};t.forEach((t=>{const e=this._positions[t];e&&(i[t]=e)}));const s=new Set,n=[];return t.forEach((t=>{if(s.has(t))return;const o=[],r=[t];for(;r.length>0;){const t=r.pop();if(s.has(t))continue;s.add(t),o.push(t);const n=i[t];n&&[`${n.x},${n.y-1}`,`${n.x},${n.y+1}`,`${n.x-1},${n.y}`,`${n.x+1},${n.y}`,`${n.x-1},${n.y-1}`,`${n.x+1},${n.y-1}`,`${n.x-1},${n.y+1}`,`${n.x+1},${n.y+1}`].forEach((t=>{const i=e[t];i&&!s.has(i)&&r.push(i)}))}o.length>0&&n.push(o)})),n}_renderSelectionHint(){return o.nothing}static get styles(){return o.css`
      ${l.positionStyles}
    `}_getEntityCycleName(t){if(!t||!t.entity_id||!t.entity_id.startsWith("plant."))return null;const e=this._plantInfoCache[t.entity_id];if(e&&e.result){const t=e.result;if(t.helpers&&t.helpers.cycle&&t.helpers.cycle.current)return t.helpers.cycle.current}return null}_getColorForCycle(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);return`hsl(${Math.abs(e)%360}, 70%, 45%)`}_createClickableCycleLabels(){var t,e,i,s,n;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".clickable-cycle-label");null==o||o.forEach((t=>t.remove()));let r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".cycle-labels-layer");r||(r=document.createElement("div"),r.className="cycle-labels-layer",null===(s=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".container"))||void 0===s||s.appendChild(r));const a=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".cycle-group-frame");null==a||a.forEach((t=>{const e=parseFloat(t.getAttribute("data-center-x")||"0"),i=parseFloat(t.getAttribute("data-center-y")||"0"),s=parseFloat(t.getAttribute("data-height")||"0"),n=t.getAttribute("data-group-name")||"",o=t.getAttribute("data-group-color")||"#3388ff";if(!n)return;const a=document.createElement("div");a.className="clickable-cycle-label",a.textContent=n,a.style.left=`${e}px`,a.style.top=i+s/2-5+"px",a.style.backgroundColor=o,a.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",this._handleGlobalClick),this._cycleGroups.find((t=>t.name===n))&&this._selectCycleMembers(n),setTimeout((()=>{window.addEventListener("click",this._handleGlobalClick)}),10)})),null==r||r.appendChild(a)}))}_convertToGlobalPosition(t){const e=this._bounds.minX,i=this._bounds.minY;return{x:t.x+e,y:t.y+i}}_handleCellClick(t,e,i){if(this._selectedMembers.clear(),this._showAddPlantDialog||this._showPlantFlyout)return this._showAddPlantDialog=!1,this._showPlantFlyout=!1,void(this._showAddPlantIndicator=null);Object.values(this._positions).some((t=>t.x===e&&t.y===i))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===e&&this._showAddPlantIndicator.y===i?(this._newPlantPosition=this._convertToGlobalPosition({x:e,y:i}),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator={x:e,y:i},this.requestUpdate())}_closeAddPlantDialog(){this._showAddPlantDialog=!1,this._showAddPlantIndicator=null,this.requestUpdate()}_handleDialogStateChange(){this._showAddPlantDialog&&this.hass?this._createDialog():this._removeDialog()}_createDialog(){this._removeDialog();const t=document.createElement("div");t.id="plant-dialog-container",t.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: auto;";const e=document.createElement("plant-create-dialog");document.body.appendChild(t),t.appendChild(e);const i=e;i.hass=this.hass,i.position=this._newPlantPosition,i.areaId=this.areaId||"",e.addEventListener("dialog-closed",(()=>{this._closeAddPlantDialog()}))}_removeDialog(){const t=document.getElementById("plant-dialog-container");t&&document.body.contains(t)&&document.body.removeChild(t)}_handleContainerClick(t){const e=t.composedPath();if(e.some((t=>t instanceof HTMLElement&&"flower-area-legend"===t.tagName.toLowerCase())))return;if(this._selectedMembers.clear(),e.some((t=>{if(t instanceof HTMLElement){if(t.getAttribute("data-entity-id"))return!0;if("svg"===t.tagName&&t.classList.contains("cell"))return!1;if(t.classList.contains("member")||t.classList.contains("member-wrapper")||t.classList.contains("member-image")||t.classList.contains("cycle-label")||t.classList.contains("clickable-cycle-label")||t.classList.contains("name-label"))return!0}return!1})))return;const i=this.getBoundingClientRect(),s=t.clientX-i.left,n=t.clientY-i.top,o=this._pixelToGrid(s,n);Object.values(this._positions).some((t=>t.x===o.x&&t.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleOverlayClick(t){this._selectedMembers.clear();const e=t.composedPath();if(e.some((t=>{var e,i;return t instanceof HTMLElement&&((null===(i=null===(e=t.className)||void 0===e?void 0:e.split)||void 0===i?void 0:i.call(e," "))||[]).some((t=>t.includes("member")||t.includes("name")||t.includes("cycle-label")||t.includes("clickable-cycle-label")))})))return;if(e.some((t=>{if(t instanceof HTMLElement){const e=t.className.split(" ");return e.includes("member")||e.includes("member-wrapper")||e.includes("cycle-label")||e.includes("clickable-cycle-label")}return!1})))return;const i=this.getBoundingClientRect(),s=t.clientX-i.left,n=t.clientY-i.top,o=this._pixelToGrid(s,n);Object.values(this._positions).some((t=>t.x===o.x&&t.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleTouchStart(t,e){let i=!1;t.preventDefault();const s=t.touches[0],n=s.clientX,o=s.clientY,r=s=>{if(i)return;const r=s.touches[0],a=r.clientX,l=r.clientY;(Math.abs(a-n)>10||Math.abs(l-o)>10)&&(i=!0,this._startDrag(t,e))},a=()=>{window.removeEventListener("touchmove",r),window.removeEventListener("touchend",a),i||this._handleClick(new MouseEvent("click"),e)};window.addEventListener("touchmove",r,{passive:!1}),window.addEventListener("touchend",a)}_loadPlantInfo(){return n(this,void 0,void 0,(function*(){yield this._loadAllPlantData()}))}_initPlantDataLoading(){this._loadAllPlantData()}_loadPlantInfosWithDelay(){this._loadAllPlantData()}_renderSensorLabels(t){var e,i;const s=this._plantInfoCache[t],n=this._getActiveLabels();if(0===n.length)return o.html``;if(!s||!s.result)return o.html``;const r=s.result;let a=null;if(this.hass&&(null===(i=null===(e=r.helpers)||void 0===e?void 0:e.health)||void 0===i?void 0:i.entity_id)){const t=r.helpers.health.entity_id;this.hass.states[t]&&(a=this.hass.states[t])}const l=n.filter((t=>"health"===t?null!==a:r[t]&&void 0!==r[t].current&&null!==r[t].current));if(0===l.length)return o.html``;const c=l.map((t=>"health"===t&&a?{type:t,current:Number(a.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:a.entity_id,unit_of_measurement:""}:Object.assign({type:t},r[t])));return o.html`
      <div class="sensor-labels">
        ${c.map((t=>{const e=Number(t.current),i=Number(t.min),s=Number(t.max),n=0===e,r=n||e<i&&!n||e>s||"health"===t.type&&e<=1.5?"sensor-pulsating":"";let a="";if("health"===t.type)if(e<=.5)a="rgba(240,163,163,1)";else if(e<=2.5){const t=(e-.5)/2;a=`rgb(${240+15*t}, ${163+51*t}, ${163-163*t})`}else{const t=(e-2.5)/2.5;a=`rgb(${255-212*t}, ${214-20*t}, ${0+83*t})`}else a=`var(--sensor-ring-${t.type}-color, var(--primary-color))`;let l=isNaN(e)?"-":e;return Number.isInteger(e)?l=Math.round(e):isNaN(e)||(l=e.toFixed(1)),o.html`
            <div class="sensor-label ${r}">
              <ha-icon 
                icon="${t.icon||`mdi:${t.type}`}" 
                style="color: ${a};"
              ></ha-icon>
              <span class="sensor-value">${l}</span>
              <span class="sensor-unit">${t.unit_of_measurement||""}</span>
            </div>
          `}))}
      </div>
    `}_handleSettingsChanged(t){const e=t.detail;this._userSettings={showRings:e.selectedRings,showLabels:e.selectedLabels,heatmap:e.heatmapSensor,heatmapColor:e.heatmapColor,heatmapSecondaryColor:e.heatmapSecondaryColor,heatmapOpacity:e.heatmapOpacity},this.requestUpdate()}_getActiveRings(){return void 0!==this._userSettings.showRings?this._userSettings.showRings:this.showRings}_getActiveLabels(){return void 0!==this._userSettings.showLabels?this._userSettings.showLabels:this.showLabels}_getHeatmapSensor(){if(null!==this._userSettings.heatmap)return void 0!==this._userSettings.heatmap?this._userSettings.heatmap:this.heatmap}_getHeatmapColor(){return void 0!==this._userSettings.heatmapColor?this._userSettings.heatmapColor:this.heatmapColor}_getHeatmapSecondaryColor(){return void 0!==this._userSettings.heatmapSecondaryColor?this._userSettings.heatmapSecondaryColor:this.heatmapSecondaryColor}_getHeatmapOpacity(){return void 0!==this._userSettings.heatmapOpacity?this._userSettings.heatmapOpacity:.8}_loadAllPlantData(){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const t=this.entities.filter((t=>t.startsWith("plant.")));if(0===t.length)return;let e=!0;for(const i of t)if(!this._plantInfoCache[i]||!this._plantInfoCache[i].result){e=!1;break}if(e)return this._identifyCycleGroups(),this.requestUpdate(),this._updateTimeout&&clearTimeout(this._updateTimeout),void(this._updateTimeout=window.setTimeout((()=>{this._loadAllPlantData()}),1e4));const i=t.map((t=>n(this,void 0,void 0,(function*(){try{const e=yield this.hass.callWS({type:"plant/get_info",entity_id:t});return e&&"object"==typeof e&&"result"in e&&e.result&&(this._plantInfoCache[t]={result:e.result}),{entityId:t,success:!0}}catch(e){return console.error(`[FLOWER-AREA] Fehler beim Laden der Daten für ${t}:`,e),{entityId:t,success:!1}}}))));yield Promise.all(i),this._identifyCycleGroups(),this.requestUpdate(),this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=window.setTimeout((()=>{this._loadAllPlantData()}),1e4)}))}};e.BrokkoliArea=d,s([(0,r.property)({attribute:!1})],d.prototype,"hass",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"entities",void 0),s([(0,r.property)()],d.prototype,"areaId",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"showRings",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"showLabels",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"heatmap",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"heatmapColor",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"heatmapSecondaryColor",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"heatmapOpacity",void 0),s([(0,r.property)({attribute:!1})],d.prototype,"showLegend",void 0),s([(0,r.state)()],d.prototype,"_userSettings",void 0),s([(0,r.state)()],d.prototype,"_positions",void 0),s([(0,r.state)()],d.prototype,"_draggingMember",void 0),s([(0,r.state)()],d.prototype,"_hoveringMember",void 0),s([(0,r.state)()],d.prototype,"_dragOffset",void 0),s([(0,r.state)()],d.prototype,"_containerSize",void 0),s([(0,r.state)()],d.prototype,"_cellSize",void 0),s([(0,r.state)()],d.prototype,"_targetPosition",void 0),s([(0,r.state)()],d.prototype,"_isSnapping",void 0),s([(0,r.state)()],d.prototype,"_currentDragPosition",void 0),s([(0,r.state)()],d.prototype,"_originalPosition",void 0),s([(0,r.state)()],d.prototype,"_wasElementSelected",void 0),s([(0,r.state)()],d.prototype,"_selectedMembers",void 0),s([(0,r.state)()],d.prototype,"_isMultiDragging",void 0),s([(0,r.state)()],d.prototype,"_originalPositions",void 0),s([(0,r.state)()],d.prototype,"_targetPositions",void 0),s([(0,r.state)()],d.prototype,"_isDraggingSelection",void 0),s([(0,r.state)()],d.prototype,"_showSelectionHint",void 0),s([(0,r.state)()],d.prototype,"_justFinishedMultiDrag",void 0),s([(0,r.state)()],d.prototype,"_cycleGroups",void 0),s([(0,r.state)()],d.prototype,"_bounds",void 0),s([(0,r.state)()],d.prototype,"_showAddPlantIndicator",void 0),s([(0,r.state)()],d.prototype,"_showAddPlantDialog",void 0),s([(0,r.state)()],d.prototype,"_showPlantFlyout",void 0),s([(0,r.state)()],d.prototype,"_flyoutPosition",void 0),s([(0,r.state)()],d.prototype,"_newPlantPosition",void 0),s([(0,r.state)()],d.prototype,"_debugMode",void 0),s([(0,r.state)()],d.prototype,"_highlightCell",void 0),s([(0,r.state)()],d.prototype,"_plantInfoCache",void 0),s([(0,r.state)()],d.prototype,"_plantRetryTimeouts",void 0),s([(0,r.state)()],d.prototype,"_plantLastLoaded",void 0),e.BrokkoliArea=d=s([(0,r.customElement)("brokkoli-area")],d)},9242:function(t,e,i){var s=this&&this.__decorate||function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},n=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantCreateDialog=void 0;const o=i(4437),r=i(2924),a=i(2413),l=customElements.get("plant-create-dialog");class c extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0}}closeDialog(){this.dispatchEvent(new CustomEvent("dialog-closed"))}createPlant(t){return n(this,void 0,void 0,(function*(){if(t.preventDefault(),!this.hass)return;const e=new FormData(t.target),i={};e.forEach(((t,e)=>{""!==t&&"string"==typeof t&&(i[e]=t)}));try{const t=yield this.hass.callWS({type:"call_service",domain:"plant",service:"create_plant",service_data:i,return_response:!0});if(t&&t.response){const{entity_id:e,device_id:i}=t.response;e&&i&&(yield this._setPositionAndArea(e,i,this.position,this.areaId))}this.closeDialog()}catch(t){}}))}_setPositionAndArea(t,e,i,s){return n(this,void 0,void 0,(function*(){if(this.hass)try{if(this.dispatchEvent(new CustomEvent("plant-created",{bubbles:!0,composed:!0,detail:{entity_id:t,device_id:e,position:i,area_id:s}})),s){const t=s.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[e],area_id:t})}}catch(t){}}))}render(){return this.hass?o.html`
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
                <option value="seeds">${a.TranslationUtils.translateGrowthPhase(this.hass,"seeds")}</option>
                <option value="germination">${a.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                <option value="rooting" selected>${a.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                <option value="growth">${a.TranslationUtils.translateGrowthPhase(this.hass,"growth")}</option>
                <option value="flowering">${a.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                <option value="removed">${a.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
                <option value="harvested">${a.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
              </select>
            </div>

            <div class="form-field">
              <label for="temperature_sensor">Temperatursensor</label>
              <select id="temperature_sensor" name="temperature_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"temperature"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="moisture_sensor">Feuchtigkeitssensor</label>
              <select id="moisture_sensor" name="moisture_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"moisture"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="conductivity_sensor">Leitfähigkeitssensor</label>
              <select id="conductivity_sensor" name="conductivity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"conductivity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="ph_sensor">pH-Sensor</label>
              <select id="ph_sensor" name="ph_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"ph"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="illuminance_sensor">Helligkeitssensor</label>
              <select id="illuminance_sensor" name="illuminance_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"illuminance"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="humidity_sensor">Luftfeuchtigkeitssensor</label>
              <select id="humidity_sensor" name="humidity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"humidity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-field">
              <label for="power_consumption_sensor">Energieverbrauchssensor</label>
              <select id="power_consumption_sensor" name="power_consumption_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"energy"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
              </select>
            </div>

            <div class="form-actions">
              <button type="button" @click=${this.closeDialog}>Abbrechen</button>
              <button type="submit">Erstellen</button>
            </div>
          </form>
        </div>
      </div>
    `:o.html``}static get styles(){return o.css`
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
    `}}s([(0,r.property)({attribute:!1})],c.prototype,"hass",void 0),s([(0,r.property)()],c.prototype,"position",void 0),s([(0,r.property)()],c.prototype,"areaId",void 0),l||customElements.define("plant-create-dialog",c),e.PlantCreateDialog=l?customElements.get("plant-create-dialog"):c},896:function(t,e,i){var s=this&&this.__decorate||function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},n=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantFlyoutMenu=void 0;const o=i(4437),r=i(2924),a=i(8063),l=i(9442),c=i(365);let d=class extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0},this.targetPosition={x:0,y:0},this.isMobile=!1,this._searchQuery="",this._plants=[],this._filteredPlants=[],this._showCloneDialog=!1,this._cloneData={}}connectedCallback(){super.connectedCallback(),this._loadPlants()}_loadPlants(){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const t=a.PlantEntityUtils.getPlantEntities(this.hass,"plant");this._plants=t,this._filteredPlants=t}))}_handleSearch(t){const e=t.target;this._searchQuery=e.value.toLowerCase(),this._searchQuery?this._filteredPlants=this._plants.filter((t=>{var e;return(null===(e=t.attributes.friendly_name)||void 0===e?void 0:e.toLowerCase().includes(this._searchQuery))||t.entity_id.toLowerCase().includes(this._searchQuery)})):this._filteredPlants=this._plants}_handleNewPlant(){this.dispatchEvent(new CustomEvent("new-plant-requested",{bubbles:!0,composed:!0,detail:{position:this.targetPosition,areaId:this.areaId}}))}_handleMovePlant(t){this.dispatchEvent(new CustomEvent("move-plant-requested",{bubbles:!0,composed:!0,detail:{plant:t,position:this.targetPosition}}))}_handleClonePlant(t){this._selectedPlantForClone=t,this._cloneData={name:`Clone of ${t.attributes.friendly_name||t.entity_id}`,temperature_sensor:"",moisture_sensor:"",conductivity_sensor:"",illuminance_sensor:"",humidity_sensor:"",power_consumption_sensor:"",ph_sensor:""},this._showCloneDialog=!0}_executeClone(){return n(this,void 0,void 0,(function*(){if(this.hass&&this._selectedPlantForClone)try{yield this.hass.callService("plant","clone_plant",Object.assign({source_entity_id:this._selectedPlantForClone.entity_id},this._cloneData)),this.dispatchEvent(new CustomEvent("plant-cloned",{bubbles:!0,composed:!0,detail:{source_entity_id:this._selectedPlantForClone.entity_id,position:this.position,areaId:this.areaId}})),this._closeCloneDialog(),this._closeMenu()}catch(t){console.error("Error cloning plant:",t)}}))}_closeCloneDialog(){this._showCloneDialog=!1,this._selectedPlantForClone=void 0,this._cloneData={}}_closeMenu(){this.dispatchEvent(new CustomEvent("menu-closed",{bubbles:!0,composed:!0}))}_handleOverlayClick(t){t.target===t.currentTarget&&this._closeMenu()}_getPlantArea(t){var e;if(!this.hass)return"";const i=l.FilterUtils.getAreaForEntity(this.hass,t.entity_id);if(!i)return"Kein Raum";const s=null===(e=this.hass.areas)||void 0===e?void 0:e[i];return(null==s?void 0:s.name)||i}render(){if(!this.hass)return o.html``;const t=this.isMobile?"":`\n      position: fixed;\n      left: ${this.position.x}px;\n      top: ${this.position.y}px;\n      transform: translate(-50%, -10px);\n    `;return o.html`
      <div class="flyout-overlay ${this.isMobile?"mobile":""}" @click=${this._handleOverlayClick}>
        <div class="flyout-menu ${this.isMobile?"mobile":""}" style="${t}">
          <div class="flyout-header">
            <div class="search-container">
              <input
                type="text"
                placeholder="Pflanze suchen..."
                .value=${this._searchQuery}
                @input=${this._handleSearch}
                class="search-input"
              >
              <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
            </div>
            ${this.isMobile?o.html`
              <button class="close-button" @click=${this._closeMenu}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            `:""}
          </div>

          <div class="new-plant-button" @click=${this._handleNewPlant}>
            <ha-icon icon="mdi:plus"></ha-icon>
            <span>Neue Pflanze</span>
          </div>

          <div class="plants-list">
            ${this._filteredPlants.map((t=>o.html`
              <div class="plant-item">
                <div class="plant-info">
                  <div class="plant-image">
                    ${t.attributes.entity_picture?o.html`
                      <img src="${t.attributes.entity_picture}" alt="${t.attributes.friendly_name}">
                    `:o.html`
                      <ha-icon icon="mdi:sprout"></ha-icon>
                    `}
                  </div>
                  <div class="plant-details">
                    <div class="plant-name">${t.attributes.friendly_name||t.entity_id}</div>
                    <div class="plant-area">${this._getPlantArea(t)}</div>
                  </div>
                </div>
                <div class="plant-actions">
                  <button 
                    class="action-button move" 
                    @click=${()=>this._handleMovePlant(t)}
                    title="Verschieben"
                  >
                    <ha-icon icon="mdi:arrow-all"></ha-icon>
                  </button>
                  <button 
                    class="action-button clone" 
                    @click=${()=>this._handleClonePlant(t)}
                    title="Klonen"
                  >
                    <ha-icon icon="mdi:content-duplicate"></ha-icon>
                  </button>
                </div>
              </div>
            `))}
          </div>
        </div>
      </div>

      ${this._showCloneDialog?this._renderCloneDialog():""}
    `}_renderCloneDialog(){var t,e,i,s,n,r,a;return o.html`
      <div class="plant-clone-dialog-backdrop" @click=${this._handleOverlayClick}>
        <div class="plant-clone-dialog" @click=${t=>t.stopPropagation()}>
          <div class="plant-clone-dialog-header">
            <h2 class="plant-clone-dialog-title">Pflanze klonen</h2>
            <button class="plant-clone-dialog-close" @click=${this._closeCloneDialog}>×</button>
          </div>
          
          <div class="plant-clone-dialog-content">
            <form class="plant-clone-dialog-form" @submit=${t=>{t.preventDefault(),this._executeClone()}}>
              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-name">Name</label>
                <input 
                  type="text" 
                  id="clone-name" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.name||""}
                  @input=${t=>this._cloneData.name=t.target.value}
                  required
                >
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-temp">Temperatursensor</label>
                <select 
                  id="clone-temp" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.temperature_sensor||""}
                  @change=${t=>this._cloneData.temperature_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(t=this.hass)||void 0===t?void 0:t.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"temperature"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-moisture">Feuchtigkeitssensor</label>
                <select 
                  id="clone-moisture" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.moisture_sensor||""}
                  @change=${t=>this._cloneData.moisture_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(e=this.hass)||void 0===e?void 0:e.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"moisture"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-conductivity">Leitfähigkeitssensor</label>
                <select 
                  id="clone-conductivity" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.conductivity_sensor||""}
                  @change=${t=>this._cloneData.conductivity_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(i=this.hass)||void 0===i?void 0:i.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"conductivity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-illuminance">Helligkeitssensor</label>
                <select 
                  id="clone-illuminance" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.illuminance_sensor||""}
                  @change=${t=>this._cloneData.illuminance_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(s=this.hass)||void 0===s?void 0:s.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"illuminance"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-humidity">Luftfeuchtigkeitssensor</label>
                <select 
                  id="clone-humidity" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.humidity_sensor||""}
                  @change=${t=>this._cloneData.humidity_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(n=this.hass)||void 0===n?void 0:n.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"humidity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-power">Energieverbrauchssensor</label>
                <select 
                  id="clone-power" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.power_consumption_sensor||""}
                  @change=${t=>this._cloneData.power_consumption_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(r=this.hass)||void 0===r?void 0:r.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"energy"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-ph">pH-Sensor</label>
                <select 
                  id="clone-ph" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.ph_sensor||""}
                  @change=${t=>this._cloneData.ph_sensor=t.target.value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries((null===(a=this.hass)||void 0===a?void 0:a.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"ph"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
                </select>
              </div>

              <div class="plant-clone-dialog-actions">
                <button type="button" class="plant-clone-dialog-button secondary" @click=${this._closeCloneDialog}>Abbrechen</button>
                <button type="submit" class="plant-clone-dialog-button primary">Klonen</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `}};e.PlantFlyoutMenu=d,d.styles=c.plantFlyoutMenuStyles,s([(0,r.property)({attribute:!1})],d.prototype,"hass",void 0),s([(0,r.property)()],d.prototype,"position",void 0),s([(0,r.property)()],d.prototype,"targetPosition",void 0),s([(0,r.property)()],d.prototype,"areaId",void 0),s([(0,r.property)()],d.prototype,"isMobile",void 0),s([(0,r.state)()],d.prototype,"_searchQuery",void 0),s([(0,r.state)()],d.prototype,"_plants",void 0),s([(0,r.state)()],d.prototype,"_filteredPlants",void 0),s([(0,r.state)()],d.prototype,"_showCloneDialog",void 0),s([(0,r.state)()],d.prototype,"_selectedPlantForClone",void 0),s([(0,r.state)()],d.prototype,"_cloneData",void 0),e.PlantFlyoutMenu=d=s([(0,r.customElement)("plant-flyout-menu")],d)},3073:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.positionStyles=void 0;const s=i(4437);e.positionStyles=s.css`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
  }
  
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--card-background-color, #fff);
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 0; /* Erstellt einen Stacking-Kontext, damit Kinder-Elemente innerhalb bleiben */
  }
  
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: var(--secondary-text-color);
  }
  
  .grid-background, .cell, .members, .name-layer, .cycle-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .grid-background { z-index: 1; }
  .cycle-layer { z-index: 2; pointer-events: none; }
  .name-layer { z-index: 5; pointer-events: none; }
  .members { z-index: 3; }
  
  .cell {
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05));
  }
  
  .cell.highlight, .cell.add-indicator {
    z-index: 2;
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1));
    animation: pulse 1.5s infinite alternate;
  }
  
  .cell.add-indicator {
    z-index: 3;
    animation: pulse-accent 1.5s infinite alternate;
  }
  
  .plus-icon {
    cursor: pointer;
    pointer-events: auto;
  }
  
  @keyframes pulse {
    from { opacity: 0.3; border-width: 1.5px; }
    to { opacity: 0.9; border-width: 2.5px; }
  }
  
  @keyframes pulse-accent {
    from { opacity: 0.5; border-width: 1.5px; }
    to { opacity: 1; border-width: 2.5px; }
  }
  
  .member-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  .member {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    width: calc(var(--cell-size) * 1.1);
    height: calc(var(--cell-size) * 1.1);
  }
  
  .member:not(.dragging) { transition: transform 0.2s ease; }
  .member:hover { filter: brightness(1.05); }
  
  .member.dragging {
    filter: drop-shadow(0 0 8px var(--primary-color));
    transition: none;
  }
  
  .member.snapping { animation: snap 0.3s ease-in-out forwards; }
  
  @keyframes snap {
    0% { transform: scale(1.1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  
  @keyframes sensor-pulse {
    0% { 
      stroke-width: 4px; 
      filter: brightness(1);
    }
    100% { 
      stroke-width: 8px; 
      filter: brightness(1.8);
    }
  }
  
  .sensor-pulsating {
    animation: sensor-pulse 1s infinite alternate ease-in-out;
  }
  
  .pulsating {
    animation: sensor-pulse 1s infinite alternate ease-in-out;
  }
  
  .add-plant-button {
    position: absolute;
    z-index: 1000 !important;
    pointer-events: auto;
    user-select: none;
    line-height: 1;
    transition: transform 0.2s ease;
  }
  
  .add-plant-button:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
  
  .sensor-rings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .sensor-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Standardfarben für Sensor-Ringe */
  .sensor-ring-temperature { stroke: var(--sensor-ring-temperature-color); }
  .sensor-ring-conductivity { stroke: var(--sensor-ring-conductivity-color); }
  .sensor-ring-dli { stroke: var(--sensor-ring-dli-color); }
  .sensor-ring-health { stroke: var(--sensor-ring-health-color); }
  .sensor-ring-water_consumption { stroke: var(--sensor-ring-water_consumption-color); }
  .sensor-ring-fertilizer_consumption { stroke: var(--sensor-ring-fertilizer_consumption-color); }
  .sensor-ring-power_consumption { stroke: var(--sensor-ring-power_consumption-color); }
  .sensor-ring-moisture { stroke: var(--sensor-ring-moisture-color); }
  .sensor-ring-illuminance { stroke: var(--sensor-ring-illuminance-color); }
  .sensor-ring-humidity { stroke: var(--sensor-ring-humidity-color); }
  
  /* Hintergrundringe */
  .sensor-ring-bg {
    stroke: rgba(0,0,0,0.1);
    fill: none;
    stroke-width: 4px;
  }
  
  /* Disabled Ringe */
  .sensor-ring-disabled {
    stroke: var(--disabled-text-color, #80808080);
    fill: none;
    stroke-width: 4px;
    stroke-dasharray: 5,10;
  }
  
  /* Sensor-Ringe selbst */
  .sensor-ring-fg {
    fill: none;
    stroke-width: 4px;
  }
  
  /* Spezielle Styling für Health-Ring Segmente */
  .sensor-ring-health-segment {
    fill: none;
    stroke-width: 4px;
    transition: stroke 0.3s ease;
  }
  
  /* Farbverlauf für Health-Ring von Rot zu Gelb zu Grün */
  .sensor-ring-health-segment-0 { stroke: rgba(240,163,163,1); } /* Rot - sehr schlecht */
  .sensor-ring-health-segment-1 { stroke: rgb(244,176,144); }     /* Rötlicher Orange */
  .sensor-ring-health-segment-2 { stroke: rgb(248,189,125); }     /* Orange */
  .sensor-ring-health-segment-3 { stroke: rgb(251,202,106); }     /* Orange-Gelb */
  .sensor-ring-health-segment-4 { stroke: rgb(255,214,82); }      /* Gelb */
  .sensor-ring-health-segment-5 { stroke: rgb(234,212,85); }      /* Gelbgrün */
  .sensor-ring-health-segment-6 { stroke: rgb(212,209,83); }      /* Hellgrün */
  .sensor-ring-health-segment-7 { stroke: rgb(191,207,81); }      /* Grün */ 
  .sensor-ring-health-segment-8 { stroke: rgb(169,204,79); }      /* Sattgrün */
  .sensor-ring-health-segment-9 { stroke: rgb(148,202,83); }      /* Dunkelgrün */
  
  .member-image {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary-color);
    background-color: var(--card-background-color, #fff);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  /* Heatmap-Overlay für die Pflanzenbilder */
  .heatmap-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  
  .member:hover .member-image { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
  
  .member.dragging .member-image {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
  }
  
  .member.selected:not(.dragging):hover .member-image {
    transform: scale(1.1);
    cursor: grab;
  }
  
  .member:not(.selected):hover .member-image { cursor: pointer; }
  
  .member-image ha-icon {
    --mdc-icon-size: 70%;
    color: var(--primary-color);
  }
  
  .member.selected .member-image {
    border: 2px solid var(--accent-color, #f3a95e);
    box-shadow: 0 0 0 2px var(--accent-color, #f3a95e);
    transform: scale(1.05);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  
  .entity-name.selected { 
    color: var(--accent-color, #f3a95e);
    font-weight: bold;
  }
  
  .entity-name {
    position: absolute;
    left: 50%;
    top: calc(95%);
    transform: translateX(-50%);
    font-size: 0.8rem;
    max-width: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: var(--primary-text-color);
    background-color: var(--card-background-color, #fff);
    padding: 1px 5px;
    border-radius: 10px;
    opacity: 0.9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    transition: opacity 0.2s ease, box-shadow 0.2s ease, font-weight 0.2s ease;
    z-index: 4;
  }
  
  .entity-name.dragging,
  .entity-name.hovering {
    opacity: 1;
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  
  .cycle-group {
    position: absolute;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    box-sizing: border-box;
  }
  
  .cycle-label {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 5px;
    font-size: 0.8em;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    border-radius: 5px 0 5px 0;
    transform: translate(0, -2px);
    cursor: pointer !important;
    pointer-events: auto !important;
    z-index: 7 !important;
    transition: background-color 0.2s ease;
  }
  
  .cycle-label:hover { background-color: rgba(220, 220, 220, 0.95) !important; }
  
  .grid-point {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: rgba(127, 127, 127, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .grid-point.active { background-color: rgba(127, 127, 127, 0.5); }
  
  .debug-indicator {
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    z-index: 8;
    font-size: 0.8rem;
  }
  
  .member-wrapper.dragging.selected .member-image {
    border-color: var(--accent-color, #f3a95e);
    box-shadow: 0 0 0 3px var(--accent-color, #f3a95e), 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  .clickable-cycle-label {
    position: absolute;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 0 8px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    z-index: 9;
    white-space: nowrap;
    overflow: visible;
    max-width: none;
  }
  
  .clickable-cycle-label:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.4);
    filter: brightness(1.1);
    transform: translateX(-50%) scale(1.05);
  }
  
  .click-overlay {
    cursor: pointer;
    z-index: 3;
    pointer-events: none;
  }
  
  ha-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 0; /* Erstellt einen Stacking-Kontext für die Karte */
  }
  
  ha-card .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  
  /* Styling für Sensorlabels */
  .sensor-labels {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    max-width: 85%;
    z-index: 5;
    pointer-events: none;
  }
  
  .sensor-label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    border-radius: 10px;
    background-color: var(--card-background-color, #fff);
    opacity: 0.9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;
    color: var(--primary-text-color);
    width: auto;
    white-space: nowrap;
    transition: opacity 0.2s ease, box-shadow 0.2s ease, font-weight 0.2s ease;
  }
  
  .sensor-label.sensor-pulsating {
    animation: label-pulse 1s infinite alternate ease-in-out;
  }
  
  .sensor-label.sensor-pulsating ha-icon,
  .sensor-label.sensor-pulsating .sensor-value {
    animation: sensor-color-pulse 1s infinite alternate ease-in-out;
  }
  
  @keyframes label-pulse {
    0% { 
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transform: scale(1);
      opacity: 0.9;
    }
    100% { 
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
      transform: scale(1.15);
      opacity: 1;
    }
  }
  
  @keyframes sensor-color-pulse {
    0% { 
      filter: brightness(1);
    }
    100% { 
      filter: brightness(1.8);
    }
  }
  
  .sensor-label ha-icon {
    --mdc-icon-size: 12px;
    margin-right: 2px;
  }
  
  .sensor-value {
    font-weight: bold;
    margin-right: 2px;
  }
  
  .sensor-unit {
    opacity: 0.8;
    font-size: 0.7rem;
  }
  
  /* Anpassung der CSS-Variablen für die Sensorring-Farben, die auch für die Icons verwendet werden */
  :host {
    --sensor-ring-temperature-color: #2E93fA;
    --sensor-ring-conductivity-color: #00D2FF;
    --sensor-ring-dli-color: #FFB900;
    --sensor-ring-health-color: #FF4560;
    --sensor-ring-water_consumption-color: #775DD0;
    --sensor-ring-fertilizer_consumption-color: #00D2FF;
    --sensor-ring-power_consumption-color: #FEB019;
    --sensor-ring-moisture-color: #00E396;
    --sensor-ring-illuminance-color: #CED4DC;
    --sensor-ring-humidity-color: #008FFB;
  }
`},8621:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.legendStyles=void 0;const s=i(4437);e.legendStyles=s.css`
  :host {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    width: 40px;
    background-color: var(--card-background-color, #fff);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    max-height: calc(100% - 20px); /* Begrenzung nur an die Card */
    display: flex;
    flex-direction: column;
  }
  
  .legend-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow: hidden;
  }
  
  .mode-toggle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    margin: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0;
    flex-shrink: 0; /* Verhindert Schrumpfen bei begrenztem Platz */
  }
  
  .mode-toggle ha-icon {
    --mdc-icon-size: 18px;
  }
  
  .mode-toggle:hover {
    transform: scale(1.05);
  }
  
  .content-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 0; /* Reduziertes Padding */
    -webkit-overflow-scrolling: touch; /* Verbessertes Scrollen für iOS */
    touch-action: pan-y; /* Erlaubt nur vertikales Scrollen */
  }
  
  .sensor-icons {
    display: flex;
    flex-direction: column;
    gap: 2px; /* Reduzierter Abstand zwischen Icons */
    width: 100%;
    align-items: center;
    padding-bottom: 0; /* Kein Padding am Ende */
  }
  
  .sensor-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: var(--secondary-background-color, #f5f5f5);
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0; /* Verhindert Schrumpfen bei begrenztem Platz */
    margin: 1px 0; /* Reduzierter Abstand */
  }
  
  .sensor-icon.selected {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .sensor-icon ha-icon {
    --mdc-icon-size: 16px;
  }
  
  .sensor-icon:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .sensor-icon.selected:hover {
    transform: scale(1.15);
  }
  
  .color-picker-section {
    margin-top: 2px; /* Reduzierter oberer Rand */
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2px; /* Reduzierter Abstand */
    flex-shrink: 0;
    margin-bottom: 2px; /* Reduzierter unterer Rand */
  }
  
  .color-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }
  
  .color-option input[type="color"] {
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .color-preview {
    padding: 1px; /* Reduziertes Padding */
    background-color: var(--secondary-background-color, #f5f5f5);
    border-radius: 4px;
  }
  
  .gradient-preview {
    height: 8px; /* Reduzierte Höhe */
    border-radius: 2px;
    cursor: ew-resize;
  }

  /* Scrollbar ausblenden für alle Browser */
  .content-container::-webkit-scrollbar {
    display: none;
  }
  
  .content-container {
    -ms-overflow-style: none;  /* IE und Edge */
    scrollbar-width: none;  /* Firefox */
  }
`},365:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.plantFlyoutMenuStyles=void 0;const s=i(4437);e.plantFlyoutMenuStyles=s.css`
  .flyout-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
  }

  .flyout-overlay.mobile {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .flyout-menu {
    background: var(--card-background-color, #fff);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 300px;
    max-width: 400px;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
  }

  .flyout-menu.mobile {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
  }

  .flyout-header {
    padding: 1rem;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-container {
    position: relative;
    flex: 1;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }

  .search-icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary-text-color);
    --mdc-icon-size: 20px;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    color: var(--secondary-text-color);
  }

  .close-button:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .plant-flyout-search:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  .new-plant-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-color);
    font-weight: 500;
  }

  .new-plant-button:hover {
    background-color: var(--primary-color);
    color: white;
  }

  .plants-list {
    flex: 1;
    overflow-y: auto;
    max-height: 300px;
  }

  .plant-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .plant-item:last-child {
    border-bottom: none;
  }

  .plant-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .plant-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--divider-color, #e0e0e0);
  }

  .plant-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .plant-image ha-icon {
    --mdc-icon-size: 24px;
    color: var(--primary-color);
  }

  .plant-details {
    flex: 1;
  }

  .plant-name {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--primary-text-color);
  }

  .plant-area {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    margin-top: 0.25rem;
  }

  .plant-actions {
    display: flex;
    gap: 0.5rem;
  }

  .action-button {
    background: none;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  .action-button:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .action-button.move {
    color: var(--primary-color);
  }

  .action-button.clone {
    color: var(--accent-color, #f3a95e);
  }

  .action-button ha-icon {
    --mdc-icon-size: 16px;
  }

  .plant-flyout-empty {
    padding: 32px 16px;
    text-align: center;
    color: var(--secondary-text-color, #666);
    font-size: 14px;
  }

  .plant-flyout-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .plant-flyout-backdrop.mobile {
    z-index: 1000;
  }

  .plant-clone-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--ha-card-background, white);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1002;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
  }

  .plant-clone-dialog-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .plant-clone-dialog-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color, black);
    margin: 0;
  }

  .plant-clone-dialog-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--secondary-text-color, #666);
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plant-clone-dialog-close:hover {
    color: var(--primary-text-color, black);
  }

  .plant-clone-dialog-content {
    padding: 16px;
  }

  .plant-clone-dialog-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .plant-clone-dialog-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .plant-clone-dialog-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color, black);
  }

  .plant-clone-dialog-input {
    padding: 8px 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 14px;
    background: var(--primary-background-color, white);
    color: var(--primary-text-color, black);
    width: 100%;
  }

  .plant-clone-dialog-input:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  .plant-clone-dialog-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .plant-clone-dialog-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .plant-clone-dialog-button.primary {
    background: var(--primary-color, #03a9f4);
    color: white;
    border-color: var(--primary-color, #03a9f4);
  }

  .plant-clone-dialog-button.primary:hover {
    background: var(--primary-color-dark, #0288d1);
  }

  .plant-clone-dialog-button.secondary {
    background: var(--primary-background-color, white);
    color: var(--primary-text-color, black);
  }

  .plant-clone-dialog-button.secondary:hover {
    background: var(--secondary-background-color, #f5f5f5);
  }

  .plant-clone-dialog-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
  }
`},4139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getGrowthPhaseIcon=e.getTreatmentIcon=e.getTreatmentIconByIndex=e.getGrowthPhaseIconByIndex=e.plantAttributes=e.missingImage=e.elementOptions=e.default_option_elements=e.default_show_elements=e.default_show_bars=e.PHASES=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="brokkoli-card",e.CARD_EDITOR_NAME="brokkoli-card-editor",e.PHASES=["seeds","germination","rooting","growth","flowering","removed","harvested"],e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli","water_consumption","fertilizer_consumption","ppfd","power_consumption","ph","health"],e.default_show_elements=["header","attributes","options"],e.default_option_elements=["attributes","timeline","consumption","history","details"],e.elementOptions=[{label:"Header",value:"header"},{label:"Attribute Bars",value:"attributes"},{label:"Options Menu",value:"options"},{label:"Timeline",value:"timeline"},{label:"Consumption",value:"consumption"},{label:"History",value:"history"},{label:"Details",value:"details"}],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"Water Consumption",value:"water_consumption"},{label:"Fertilizer Consumption",value:"fertilizer_consumption"},{label:"PPFD",value:"ppfd"},{label:"Power Consumption",value:"power_consumption"},{label:"pH",value:"ph"},{label:"Health",value:"health"}];const i=["mdi:seed","mdi:seed-outline","mdi:sprout","mdi:leaf","mdi:flower","mdi:delete","mdi:content-cut"],s=["mdi:help-circle","mdi:content-cut","mdi:arrow-down-bold-circle","mdi:arrow-up-bold-circle","mdi:candy","mdi:scissors-cutting","mdi:leaf","mdi:spray","mdi:water"];e.getGrowthPhaseIconByIndex=t=>t>=0&&t<i.length?i[t]:"mdi:help-circle",e.getTreatmentIconByIndex=t=>t>=0&&t<s.length?s[t]:"mdi:help-circle",e.getTreatmentIcon=(t,i,s)=>{var n,o;if(i&&(null===(n=null==s?void 0:s.attributes)||void 0===n?void 0:n._sensorMap)&&"object"==typeof s.attributes._sensorMap){const n=s.attributes._sensorMap.treatment;if(n){const s=i.states[n];if((null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.options)&&Array.isArray(s.attributes.options)){const i=s.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getTreatmentIconByIndex)(i)}}}switch(t.toLowerCase()){case"":case"none":case"keine":default:return"mdi:help-circle";case"cut":case"schneiden":return"mdi:content-cut";case"super cropping":return"mdi:arrow-down-bold-circle";case"topping":return"mdi:arrow-up-bold-circle";case"lollipop":return"mdi:candy";case"fim":return"mdi:scissors-cutting";case"rib":return"mdi:leaf";case"spray pest":case"spray water":return t.includes("pest")?"mdi:spray":"mdi:water"}},e.getGrowthPhaseIcon=(t,i,s)=>{var n,o;if(i&&(null===(n=null==s?void 0:s.attributes)||void 0===n?void 0:n._sensorMap)&&"object"==typeof s.attributes._sensorMap){const n=s.attributes._sensorMap.growth_phase;if(n){const s=i.states[n];if((null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.options)&&Array.isArray(s.attributes.options)){const i=s.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getGrowthPhaseIconByIndex)(i)}}}switch(t.toLowerCase()){case"seeds":case"samen":return"mdi:seed";case"germination":case"keimen":return"mdi:seed-outline";case"rooting":case"wurzeln":return"mdi:sprout";case"growing":case"wachstum":return"mdi:leaf";case"flower":case"blüte":return"mdi:flower";case"harvested":case"geerntet":return"mdi:content-cut";case"removed":case"entfernt":return"mdi:delete";default:return"mdi:help-circle"}}},5869:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getFieldName=e.getFieldOptions=e.getFieldValue=e.isSensorField=e.getFieldService=e.getFieldType=e.isFieldEditable=e.getFieldsByGroup=e.getFieldDefinition=e.FIELD_DEFINITIONS=e.getSensorMapEntity=e.getSensorMapEntityId=void 0;const s=i(2413),n=i(4139),o={domain:"plant",action:"update_plant_attributes"},r={domain:"select",action:"select_option",entityPrefix:"select.",valueKey:"option"},a={domain:"number",action:"set_value",entityPrefix:"number.",valueKey:"value"};e.getSensorMapEntityId=(t,e)=>t.attributes._sensorMap&&t.attributes._sensorMap[e]?t.attributes._sensorMap[e]:null,e.getSensorMapEntity=(t,i,s)=>{const n=(0,e.getSensorMapEntityId)(i,s);return n?null==t?void 0:t.states[n]:null};const l=(t,i,s,n)=>{const o=(0,e.getSensorMapEntity)(t,i,n);return(null==o?void 0:o.state)||""},c=(t,i,s,n)=>{var o;const r=(0,e.getSensorMapEntity)(t,i,n);return(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.options)||[]};e.FIELD_DEFINITIONS=[{id:"friendly_name",name:t=>s.TranslationUtils.translateField(t,"friendly_name"),group:"name",type:"plant-name",clickAction:"none",getValue:(t,e)=>e.attributes.friendly_name||""},{id:"state",name:t=>s.TranslationUtils.translateField(t,"state"),group:"basic",type:"badge",clickAction:"more-info",getValue:(t,e)=>e.state},{id:"area",name:t=>s.TranslationUtils.translateField(t,"area"),group:"growing",type:"select",clickAction:"edit",service:{domain:"plant",action:"move_to_area"},options:t=>["-",...Object.values(t.areas||{}).map((t=>t.name)).sort()],getValue:(t,e)=>{var i;if(e.attributes._sensorMap&&e.attributes._sensorMap.location){const s=e.attributes._sensorMap.location,n=null===(i=null==t?void 0:t.states[s])||void 0===i?void 0:i.state;if(n)try{return JSON.parse(n).area||""}catch(t){return n}}return""}},{id:"growth_phase",name:t=>s.TranslationUtils.translateField(t,"growth_phase"),group:"growing",type:"select",clickAction:"edit",service:r,options:(t,e)=>c(t,e,0,"growth_phase"),getValue:(t,e)=>l(t,e,0,"growth_phase")},{id:"cycle",name:t=>s.TranslationUtils.translateField(t,"cycle"),group:"growing",type:"select",clickAction:"edit",service:r,options:(t,e)=>c(t,e,0,"cycle"),getValue:(t,e)=>l(t,e,0,"cycle")},{id:"pot_size",name:t=>s.TranslationUtils.translateField(t,"pot_size"),group:"growing",type:"number",clickAction:"edit",service:a,unit:"L",validation:{min:0,step:.1,numberType:"float"},getValue:(t,e)=>l(t,e,0,"pot_size")},{id:"flowering_duration",name:t=>s.TranslationUtils.translateField(t,"flowering_duration"),group:"growing",type:"number",clickAction:"edit",service:a,unit:"days",validation:{min:0,step:1,numberType:"integer"},getValue:(t,e)=>l(t,e,0,"flowering_duration")},{id:"strain",name:t=>s.TranslationUtils.translateField(t,"strain"),group:"genetics",type:"text",clickAction:"edit",service:o},{id:"breeder",name:t=>s.TranslationUtils.translateField(t,"breeder"),group:"genetics",type:"text",clickAction:"edit",service:o},{id:"feminized",name:t=>s.TranslationUtils.translateField(t,"feminized"),group:"genetics",type:"select",clickAction:"edit",service:o,options:t=>[s.TranslationUtils.translateUI(t,"yes"),s.TranslationUtils.translateUI(t,"no")]},{id:"original_flowering_duration",name:t=>s.TranslationUtils.translateField(t,"original_flowering_duration"),group:"genetics",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1,numberType:"integer"}},...n.PHASES.map((t=>({id:`${t}_start`,name:e=>s.TranslationUtils.translateField(e,`${t}_start`),group:"phasebegin",type:"date",clickAction:"edit",service:o}))),{id:"seeds_duration",name:t=>s.TranslationUtils.translateField(t,"seeds_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"germination_duration",name:t=>s.TranslationUtils.translateField(t,"germination_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"rooting_duration",name:t=>s.TranslationUtils.translateField(t,"rooting_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"growth_duration",name:t=>s.TranslationUtils.translateField(t,"growth_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"flower_duration",name:t=>s.TranslationUtils.translateField(t,"flower_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"removed_duration",name:t=>s.TranslationUtils.translateField(t,"removed_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"harvested_duration",name:t=>s.TranslationUtils.translateField(t,"harvested_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"soil_moisture",name:t=>s.TranslationUtils.translateSensor(t,"soil_moisture"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"soil_moisture")},{id:"temperature",name:t=>s.TranslationUtils.translateSensor(t,"temperature"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"°C",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"temperature")},{id:"conductivity",name:t=>s.TranslationUtils.translateSensor(t,"conductivity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"µS/cm",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"conductivity")},{id:"ph",name:t=>s.TranslationUtils.translateSensor(t,"ph"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"pH",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"ph")},{id:"illuminance",name:t=>s.TranslationUtils.translateSensor(t,"illuminance"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"lx",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"illuminance")},{id:"air_humidity",name:t=>s.TranslationUtils.translateSensor(t,"air_humidity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"air_humidity")},{id:"dli",name:t=>s.TranslationUtils.translateSensor(t,"dli"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"mol/d⋅m²",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"dli")},{id:"water_consumption",name:t=>s.TranslationUtils.translateSensor(t,"water_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"water_consumption")},{id:"fertilizer_consumption",name:t=>s.TranslationUtils.translateSensor(t,"fertilizer_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"fertilizer_consumption")},{id:"health",name:t=>s.TranslationUtils.translateSensor(t,"health"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"health")},{id:"power_consumption",name:t=>s.TranslationUtils.translateSensor(t,"power_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"W",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"power_consumption")},{id:"ppfd_mol",name:t=>s.TranslationUtils.translateDiagnostics(t,"ppfd_mol"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"µmol/m²/s",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>{const i=l(t,e,0,"ppfd_mol");return i?Number(i).toFixed(6):i}},{id:"total_ppfd_mol_integral",name:t=>s.TranslationUtils.translateDiagnostics(t,"total_ppfd_mol_integral"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"mol/m²",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_ppfd_mol_integral")},{id:"total_water_consumption",name:t=>s.TranslationUtils.translateDiagnostics(t,"total_water_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"L",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_water_consumption")},{id:"total_fertilizer_consumption",name:t=>s.TranslationUtils.translateDiagnostics(t,"total_fertilizer_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_fertilizer_consumption")},{id:"total_power_consumption",name:t=>s.TranslationUtils.translateDiagnostics(t,"total_power_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"kWh",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_power_consumption")},{id:"energy_cost",name:t=>s.TranslationUtils.translateDiagnostics(t,"energy_cost"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"€",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"energy_cost")},...["air_humidity","soil_moisture","temperature","conductivity","illuminance","dli","water_consumption","fertilizer_consumption","ph"].flatMap((t=>[{id:`min_${t}`,name:e=>s.TranslationUtils.translateField(e,`min_${t}`),group:"min_max",type:"number",clickAction:"edit",service:a,getValue:(e,i)=>l(e,i,0,`min_${t}`)},{id:`max_${t}`,name:e=>s.TranslationUtils.translateField(e,`max_${t}`),group:"min_max",type:"number",clickAction:"edit",service:a,getValue:(e,i)=>l(e,i,0,`max_${t}`)}])),{id:"timestamp",name:t=>s.TranslationUtils.translateField(t,"timestamp"),group:"details",type:"text",clickAction:"none",getValue:(t,e)=>e.attributes.timestamp||""},{id:"difficulty",name:t=>s.TranslationUtils.translateField(t,"difficulty"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.difficulty||""},{id:"yield",name:t=>s.TranslationUtils.translateField(t,"yield"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.yield||""},{id:"mold_resistance",name:t=>s.TranslationUtils.translateField(t,"mold_resistance"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.mold_resistance||""},{id:"hunger",name:t=>s.TranslationUtils.translateField(t,"hunger"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.hunger||""},{id:"effects",name:t=>s.TranslationUtils.translateField(t,"effects"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.effects||""},{id:"smell",name:t=>s.TranslationUtils.translateField(t,"smell"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.smell||""},{id:"taste",name:t=>s.TranslationUtils.translateField(t,"taste"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.taste||""},{id:"phenotype",name:t=>s.TranslationUtils.translateField(t,"phenotype"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.phenotype||""},{id:"growth_stretch",name:t=>s.TranslationUtils.translateField(t,"growth_stretch"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.growth_stretch||""},{id:"flower_stretch",name:t=>s.TranslationUtils.translateField(t,"flower_stretch"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.flower_stretch||""},{id:"notes",name:t=>s.TranslationUtils.translateField(t,"notes"),group:"notes",type:"textarea",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.notes||""},{id:"website",name:t=>s.TranslationUtils.translateField(t,"website"),group:"notes",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.website||"",hasExternalLink:!0}],e.getFieldDefinition=t=>e.FIELD_DEFINITIONS.find((e=>e.id===t)),e.getFieldsByGroup=t=>e.FIELD_DEFINITIONS.filter((e=>e.group===t)),e.isFieldEditable=t=>{var i;return"edit"===(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.clickAction)},e.getFieldType=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.type)||"text"},e.getFieldService=t=>{var i;return null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.service},e.isSensorField=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.isSensor)||!1},e.getFieldValue=(t,i,s)=>{var n;const o=(0,e.getFieldDefinition)(t);return o?o.getValue?o.getValue(i,s):(null===(n=s.attributes[t])||void 0===n?void 0:n.toString())||"":""},e.getFieldOptions=(t,i,s)=>{const n=(0,e.getFieldDefinition)(t);return(null==n?void 0:n.options)?n.options(i,s):[]},e.getFieldName=(t,i)=>{const s=(0,e.getFieldDefinition)(t);return s?"function"==typeof s.name?s.name(i):s.name:t}},9442:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FilterUtils=void 0;const s=i(8598),n=i(5869);class o{static getEntityValue(t,e,i){return(0,n.getFieldValue)(i,t,e).toString()}static getUniqueValues(t,e,i){return[...new Set(e.map((e=>this.getEntityValue(t,e,i))))].sort()}static getAreaForEntity(t,e){if(!t)return;const i=t.devices||{},s=(t.entities||{})[e];if(s){if(s.area_id)return s.area_id;if(s.device_id){const t=i[s.device_id];if(null==t?void 0:t.area_id)return t.area_id}}}static applyFilters(t,e,i){let o=e.filter((t=>{const e=t.entity_id.split(".")[0];return i.entityTypes.has(e)}));return Object.keys(i.activeFilters).length>0&&(o=o.filter((e=>Object.entries(i.activeFilters).every((([i,o])=>{if("entity_type"===i)return!0;if((0,n.isSensorField)(i)){const n=s.SensorUtils.getSensorInfo(t,e,i),r=o;return n.value>=r.min&&n.value<=r.max}const r=this.getEntityValue(t,e,i);return o.has(r)}))))),o}static toggleFilter(t,e,i){if((0,n.isSensorField)(t))i.activeFilters[t]=e,i.activeFilters[t]||delete i.activeFilters[t];else{i.activeFilters[t]||(i.activeFilters[t]=new Set);const s=i.activeFilters[t];s.has(e)?(s.delete(e),0===s.size&&delete i.activeFilters[t]):s.add(e)}}static toggleEntityType(t,e){e.entityTypes.has(t)?e.entityTypes.size>1&&e.entityTypes.delete(t):e.entityTypes.add(t)}static getFilteredPlants(t,e,i,s,r){let a=o.applyFilters(t,e,i);return s&&(a=a.filter((e=>[(0,n.getFieldValue)("friendly_name",t,e),(0,n.getFieldValue)("state",t,e),(0,n.getFieldValue)("area",t,e),...r.map((i=>(0,n.getFieldValue)(i,t,e)))].filter(Boolean).some((t=>t.toString().toLowerCase().includes(s.toLowerCase())))))),a}}e.FilterUtils=o},8063:function(t,e){var i=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantEntityUtils=void 0;class s{static getPlantInfo(t,e){return i(this,void 0,void 0,(function*(){return this._plantInfoCache[e]?this._plantInfoCache[e]:this._loadPlantInfoWithRetry(t,e)}))}static _loadPlantInfoWithRetry(t,e){return i(this,void 0,void 0,(function*(){try{this._plantLastLoaded[e]=Date.now();const i=yield t.callWS({type:"plant/get_info",entity_id:e}),s="object"==typeof i&&null!==i&&"result"in i?i.result:null;return s&&(this._plantInfoCache[e]=s),this._scheduleNextUpdate(t,e),s}catch(i){return console.error(`[PLANT-ENTITY] Error in API call for ${e}:`,i),this._scheduleNextUpdate(t,e,!0),null}}))}static _scheduleNextUpdate(t,e,i=!1){this._plantRetryTimeouts[e]&&(window.clearTimeout(this._plantRetryTimeouts[e]),delete this._plantRetryTimeouts[e]),this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i?1e4:5e3)}static initPlantDataLoading(t,e){t&&0!==e.length&&(this.clearAllTimeouts(),e.forEach((e=>{if(this._plantInfoCache[e])return void(this._plantRetryTimeouts[e]||this._scheduleNextUpdate(t,e));const i=500+2e3*Math.random();this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i)})))}static clearAllTimeouts(){Object.values(this._plantRetryTimeouts).forEach((t=>{window.clearTimeout(t)})),this._plantRetryTimeouts={}}static getPlantEntities(t,e="all"){return Object.values(t.states).filter((t=>{if("object"!=typeof t||null===t||!("entity_id"in t)||!("attributes"in t)||"string"!=typeof t.entity_id)return!1;const i=t.entity_id.startsWith("plant."),s=t.entity_id.startsWith("cycle.")&&"member_count"in t.attributes;return"plant"===e?i:"cycle"===e?s:i||s}))}static updatePlantInfo(t,e,s){return i(this,void 0,void 0,(function*(){const i=new Map(s),n=e.map((t=>t.entity_id));this.initPlantDataLoading(t,n);for(const t of e){const e=this._plantInfoCache[t.entity_id];e?i.set(t.entity_id,e):i.has(t.entity_id)||i.set(t.entity_id,null)}return i}))}static togglePlantSelection(t,e,i){null==i||i.stopPropagation();const s=new Set(e);return s.has(t)?s.delete(t):s.add(t),s}static clearPlantSelection(){return new Set}}e.PlantEntityUtils=s,s._plantInfoCache={},s._plantRetryTimeouts={},s._plantLastLoaded={}},8598:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SensorUtils=void 0;const s=i(5869);e.SensorUtils=class{static getSensorInfo(t,e,i){const n=(0,s.getFieldDefinition)(i),o=(0,s.getSensorMapEntity)(t,e,i);if(o)return{value:Number(o.state)||0,state:o.state,unit:(null==n?void 0:n.unit)||o.attributes.unit_of_measurement||"",min:o.attributes.min_value,max:o.attributes.max_value};if(e.attributes._apiInfo){const t=e.attributes._apiInfo,s={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[s]&&t[s].current)return{value:Number(t[s].current)||0,state:String(t[s].current),unit:(null==n?void 0:n.unit)||t[s].unit_of_measurement||"",min:t[s].min?Number(t[s].min):null,max:t[s].max?Number(t[s].max):null};if(t.diagnostic_sensors&&t.diagnostic_sensors[s]&&t.diagnostic_sensors[s].current)return{value:Number(t.diagnostic_sensors[s].current)||0,state:String(t.diagnostic_sensors[s].current),unit:(null==n?void 0:n.unit)||t.diagnostic_sensors[s].unit_of_measurement||"",min:null,max:null}}return{value:0,state:"N/A",unit:(null==n?void 0:n.unit)||"",min:null,max:null}}static getSensorRange(t,e,i){const n=(0,s.getFieldDefinition)(i);return{min:null,max:null,unit:(null==n?void 0:n.unit)||""}}static getSensorThresholds(t,e,i){var n,o;if(e.attributes._apiInfo){const t=e.attributes._apiInfo,s={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[s]&&void 0!==t[s].min&&void 0!==t[s].max)return{min:Number(t[s].min)||0,max:Number(t[s].max)||100}}const r=(0,s.getSensorMapEntityId)(e,`min_${i}`),a=(0,s.getSensorMapEntityId)(e,`max_${i}`);return r&&a&&"unavailable"!==(null===(n=t.states[r])||void 0===n?void 0:n.state)&&"unavailable"!==(null===(o=t.states[a])||void 0===o?void 0:o.state)?{min:Number(t.states[r].state)||0,max:Number(t.states[a].state)||100}:{min:0,max:100}}static isSensorColumn(t){return(0,s.isSensorField)(t)}static calculateSensorStatus(t,e,i){return isNaN(t)?"unavailable":t>=e&&t<=i?"good":"bad"}}},2413:function(t,e){var i=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.TranslationUtils=void 0;class s{static getLanguage(t){return t.language||"en"}static getCardBaseUrl(){const t=document.getElementsByTagName("script");for(let e=0;e<t.length;e++){const i=t[e].src;if(i&&(i.includes("brokkoli-card.js")||i.includes("brokkoli-list-card.js")||i.includes("brokkoli-area-card.js")))return i.substring(0,i.lastIndexOf("/"))}return"/local/brokkoli-card"}static loadTranslationFile(t){return i(this,void 0,void 0,(function*(){try{const e=`${this.getCardBaseUrl()}/translations/${t}.json`,i=yield fetch(e);if(!i.ok)throw new Error(`Failed to load translation file: ${i.status}`);return yield i.json()}catch(e){return console.warn(`Failed to load translations for language ${t}, falling back to English`,e),"en"!==t?this.loadTranslationFile("en"):{}}}))}static loadTranslations(t){return i(this,void 0,void 0,(function*(){if(this.translationCache.has(t))return this.translationCache.get(t);if(this.loadingPromises.has(t))return this.loadingPromises.get(t);const e=this.loadTranslationFile(t);this.loadingPromises.set(t,e);try{const i=yield e;return this.translationCache.set(t,i),this.loadingPromises.delete(t),i}catch(e){throw this.loadingPromises.delete(t),e}}))}static getTranslation(t,e){const i=this.getLanguage(t);return this.translationCache.has(i)?this.getTranslationFromObject(this.translationCache.get(i),e):(this.isInitialized||this.loadTranslations(i).catch((t=>{console.warn("Failed to load translations:",t)})),e)}static getTranslationFromObject(t,e){try{const i=e.split(".");let s=t;for(const t of i){if(!s||"object"!=typeof s||!(t in s))return e;s=s[t]}return"string"==typeof s?s:e}catch(t){return console.warn("Translation not found:",e,t),e}}static initializeTranslations(t){return i(this,void 0,void 0,(function*(){const e=this.getLanguage(t);try{yield this.loadTranslations(e),this.isInitialized=!0}catch(t){console.warn("Failed to initialize translations:",t),this.isInitialized=!0}}))}static translateField(t,e){return this.getTranslation(t,`frontend.fields.${e}`)}static translateSensor(t,e){return this.getTranslation(t,`frontend.sensors.${e}`)}static translateGrowthPhase(t,e){return this.getTranslation(t,`frontend.growth_phases.${e}`)}static translateTreatment(t,e){return this.getTranslation(t,`frontend.treatments.${e}`)}static translateGraph(t,e){return this.getTranslation(t,`frontend.graph.${e}`)}static translateDiagnostics(t,e){return this.getTranslation(t,`frontend.diagnostics.${e}`)}static translateUI(t,e){return this.getTranslation(t,`frontend.ui.${e}`)}static translateListCard(t,e){return this.getTranslation(t,`frontend.list_card.${e}`)}static translateHistory(t,e){return this.getTranslation(t,`frontend.history.${e}`)}static translate(t,e){return this.getTranslation(t,e)}static translateHelper(t,e){return this.getTranslation(t,`frontend.helpers.${e}`)}static createSensorTooltip(t,e,i,s,n,o){const r=this.translateSensor(t,e),a=this.translateUI(t,"tooltip_min_max");return o?`${r}: ${i} ${o}<br>(${a}: ${s} ~ ${n} ${o})`:`${r}: ${i}<br>(${a}: ${s} ~ ${n})`}}e.TranslationUtils=s,s.translationCache=new Map,s.loadingPromises=new Map,s.isInitialized=!1},6752:(t,e,i)=>{var s;i.d(e,{JW:()=>C,XX:()=>G,c0:()=>E,ge:()=>B,qy:()=>A,s6:()=>M});const n=window,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,c="?"+l,d=`<${c}>`,h=document,u=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,m=t=>g(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),_="[ \t\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,b=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,$=/^(?:script|style|textarea|title)$/i,S=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=S(1),C=S(2),E=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),P=new WeakMap,k=h.createTreeWalker(h,129,null,!1);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const D=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=y;for(let e=0;e<i;e++){const i=t[e];let c,h,u=-1,p=0;for(;p<i.length&&(r.lastIndex=p,h=r.exec(i),null!==h);)p=r.lastIndex,r===y?"!--"===h[1]?r=v:void 0!==h[1]?r=f:void 0!==h[2]?($.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=b):void 0!==h[3]&&(r=b):r===b?">"===h[0]?(r=null!=n?n:y,u=-1):void 0===h[1]?u=-2:(u=r.lastIndex-h[2].length,c=h[1],r=void 0===h[3]?b:'"'===h[3]?x:w):r===x||r===w?r=b:r===v||r===f?r=y:(r=b,n=void 0);const g=r===b&&t[e+1].startsWith("/>")?" ":"";o+=r===y?i+d:u>=0?(s.push(c),i.slice(0,u)+a+i.slice(u)+l+g):i+l+(-2===u?(s.push(void 0),e):g)}return[T(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const d=t.length-1,h=this.parts,[p,g]=D(t,e);if(this.el=I.createElement(p,i),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=k.nextNode())&&h.length<d;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(a)||e.startsWith(l)){const i=g[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+a).split(l),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?R:"@"===e[1]?F:N})}else h.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if($.test(s.tagName)){const t=s.textContent.split(l),e=t.length-1;if(e>0){s.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],u()),k.nextNode(),h.push({type:2,index:++n});s.append(t[e],u())}}}else if(8===s.nodeType)if(s.data===c)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(l,t+1));)h.push({type:7,index:n}),t+=l.length-1}n++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var n,o,r,a;if(e===E)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=p(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class L{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);k.currentNode=n;let o=k.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new O(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new H(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=k.nextNode(),r++)}return k.currentNode=h,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),p(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):m(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(T(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new L(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new I(t)),e}T(t){g(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new O(this.k(u()),this.k(u()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class N{constructor(t,e,i,s,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=z(this,t,e,0),o=!p(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=z(this,s[i+r],e,r),a===E&&(a=this._$AH[r]),o||(o=!p(a)||a!==this._$AH[r]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const U=o?o.emptyScript:"";class R extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class F extends N{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:M)===E)return;const s=this._$AH,n=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==M&&(s===M||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const B={O:a,P:l,A:c,C:1,M:D,L,R:m,D:z,I:O,V:N,H:R,N:F,U:j,F:H},V=n.litHtmlPolyfillSupport;null==V||V(I,O),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("2.8.0");const G=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new O(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r}},2924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>s,eventOptions:()=>c,property:()=>r,query:()=>d,queryAll:()=>h,queryAssignedElements:()=>m,queryAssignedNodes:()=>_,queryAsync:()=>u,state:()=>a});const s=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function r(t){return(e,i)=>void 0!==i?o(t,e,i):n(t,e)}function a(t){return r({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}};function c(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function d(t,e){return l({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}function h(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const g=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function m(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:s=>({get(){var s;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n),r=null!=o?g(o,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}function _(t,e,i){let s,n=t;return"object"==typeof t?(n=t.slot,s=t):s={flatten:e},i?m({slot:n,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(n?`[name=${n}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==o?void 0:o.assignedNodes(s))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},4278:(t,e,i)=>{i.r(e),i.d(e,{styleMap:()=>a});var s=i(6752);class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const o="important",r=" !"+o,a=(l=class extends n{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];if(null!=s){this.ht.add(t);const e="string"==typeof s&&s.endsWith(r);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?o:""):i[t]=s}}return s.c0}},(...t)=>({_$litDirective$:l,values:t}));var l},4437:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>a,LitElement:()=>C,ReactiveElement:()=>w,UpdatingElement:()=>A,_$LE:()=>M,_$LH:()=>S.ge,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>y,getCompatibleStyle:()=>h,html:()=>S.qy,isServer:()=>P,noChange:()=>S.c0,notEqual:()=>v,nothing:()=>S.s6,render:()=>S.XX,supportsAdoptingStyleSheets:()=>n,svg:()=>S.JW,unsafeCSS:()=>l});const s=window,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new a("string"==typeof t?t:t+"",void 0,o),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,o)},d=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var u;const p=window,g=p.trustedTypes,m=g?g.emptyScript:"",_=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},b="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:y).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:y;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w[b]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:w}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");var x,$,S=i(6752);const A=w;class C extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,S.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return S.c0}}C.finalized=!0,C._$litElement$=!0,null===(x=globalThis.litElementHydrateSupport)||void 0===x||x.call(globalThis,{LitElement:C});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:C});const M={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==($=globalThis.litElementVersions)&&void 0!==$?$:globalThis.litElementVersions=[]).push("3.3.3");const P=!1}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(2434)})();