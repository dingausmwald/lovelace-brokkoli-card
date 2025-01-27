/*! For license information please see flower-card.js.LICENSE.txt */
(()=>{"use strict";var t={147:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=i(356),n=i(823),o=i(516),s=i(167);class a extends n.LitElement{constructor(){super(...arguments),this.controlRenderers={[o.FormControlType.Dropdown]:s.renderDropdown,[o.FormControlType.Radio]:s.renderRadio,[o.FormControlType.Checkboxes]:s.renderCheckboxes,[o.FormControlType.EntityDropdown]:s.renderDropdown,[o.FormControlType.Switch]:s.renderSwitch,[o.FormControlType.Textbox]:s.renderTextbox,[o.FormControlType.Filler]:s.renderFiller}}setConfig(t){this._config=t,this.requestUpdate("_config")}set hass(t){this._hass=t}renderForm(t){return n.html`
            <div class="card-config">
                ${t.map((t=>{const e=t.cssClass?`form-row ${t.cssClass}`:"form-row";return t.hidden?"":n.html`
                        <div class="${e}">
                            <label>${t.label}</label>
                            ${t.controls.map((t=>this.renderControl(t)))}
                        </div>
                        `}))}            
            </div>
            `}renderControl(t){const e=this.controlRenderers[t.type];if(!e)throw new Error(`Unsupported control type: ${t.type}`);return e(this,t)}_valueChanged(t){if(!this._config||!this._hass)return;const e=t.target,i=t.detail;if("HA-CHECKBOX"===e.tagName){const t=this._config[e.configValue].indexOf(e.value);let i;i=e.checked&&t<0?[...this._config[e.configValue],e.value]:!e.checked&&t>-1?[...this._config[e.configValue].slice(0,t),...this._config[e.configValue].slice(t+1)]:this._config[e.configValue],this._config={...this._config,[e.configValue]:i}}else if(e.configValue)if(e.configValue.indexOf(".")>-1){const[t,i]=e.configValue.split(".");this._config={...this._config,[t]:{...this._config[t],[i]:e.checked}}}else this._config={...this._config,[e.configValue]:void 0===e.checked&&(null==i?void 0:i.value)?e.checked||i.value:e.value||e.checked};(0,r.fireEvent)(this,"config-changed",{config:this._config},{bubbles:!0,composed:!0}),this.requestUpdate("_config")}static get styles(){return n.css`
            .form-row {
                margin-bottom: 10px;
            }
            .form-control {
                display: flex;
                align-items: center;
            }
            ha-switch {
                padding: 16px 6px;
            }
            .side-by-side {
                display: flex;
                flex-flow: row wrap;
            }            
            .side-by-side > label {
                width: 100%;
            }
            .side-by-side > .form-control {
                width: 49%;
                padding: 2px;
            }
            ha-textfield { 
                width: 100%;
            }
        `}}e.default=a},516:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.FormControlType=void 0,function(t){t.Dropdown="dropdown",t.Checkbox="checkbox",t.Checkboxes="checkboxes",t.Radio="radio",t.Switch="switch",t.Textbox="textbox",t.Filler="filler",t.EntityDropdown="entity-dropdown"}(i||(e.FormControlType=i={}))},167:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderCheckboxes=e.renderRadio=e.renderDropdown=e.renderSwitch=e.renderTextbox=e.renderEntityDropdown=e.renderFiller=void 0;const r=i(823),n=i(770);e.renderFiller=()=>r.html`<div class="form-control"></div>`,e.renderEntityDropdown=(t,e)=>{var i;return r.html`
    <div class="form-control">
        <ha-entity-picker
            label="${e.label}"
            .value="${null!==(i=t._config[e.configValue])&&void 0!==i?i:""}"
            .configValue="${e.configValue}"
            .hass="${t._hass}"
            domain-filter="${e.domain}"
            @change="${t._valueChanged}">
        </ha-entity-picker>
    </div>
    `},e.renderTextbox=(t,e)=>{var i;return r.html`
    <div class="form-control">
        <ha-textfield
            label="${e.label}"
            .value="${null!==(i=t._config[e.configValue])&&void 0!==i?i:""}"
            .configValue="${e.configValue}"
            @change="${t._valueChanged}">
        </ha-textfield>
    </div>
    `},e.renderSwitch=(t,e)=>r.html`
    <div class="form-control">
        <ha-switch
            id="${e.configValue}"
            name="${e.configValue}"
            .checked="${t._config[e.configValue]}"
            .configValue="${e.configValue}"
            @change="${t._valueChanged}"
        >
        </ha-switch>
        <label for="${e.configValue}">${e.label}</label>
    </div>
    `,e.renderDropdown=(t,e)=>{var i;const o=null!==(i=e.items)&&void 0!==i?i:(0,n.getEntitiesByDomain)(t._hass,e.domain);return r.html`  
    <div class="form-control">
        <ha-combo-box
            label="${e.label}"
            .value="${t._config[e.configValue]}"
            .configValue="${e.configValue}"
            .items="${o}"
            @value-changed="${t._valueChanged}"
            @change=${t._valueChanged}
        ></ha-combo-box>
    </div>
      `},e.renderRadio=(t,e)=>r.html`
        <div class="form-control">
            <label>${e.label}</label>
            ${e.items.map((i=>r.html`
                    <ha-radio
                        id="${e.configValue}_${i.value}"
                        name="${e.configValue}"
                        .checked="${t._config[e.configValue]===i.value}"
                        .configValue="${e.configValue}"
                        .value="${i.value}"
                        @change="${t._valueChanged}"
                    >
                    </ha-radio>
                    <label for="${e.configValue}_${i.value}">${i.label}</label>
                `))}
        </div>
      `,e.renderCheckboxes=(t,e)=>r.html`
        <label>${e.label}</label>
        ${e.items.map((i=>{var n;return r.html`                
            <div class="form-control">
                <ha-checkbox
                    id="${e.configValue}_${i.value}"
                    name="${e.configValue}[]"
                    .checked="${(null===(n=t._config[e.configValue])||void 0===n?void 0:n.indexOf(i.value))>-1}"
                    .configValue="${e.configValue}"
                    .value="${i.value}"
                    @change="${t._valueChanged}"
                >
                </ha-checkbox>
                <label for="${e.configValue}_${i.value}">${i.label}</label>
            </div>
            `}))}
      `},770:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getDropdownOptionsFromEnum=e.formatList=e.getEntitiesByDeviceClass=e.getEntitiesByDomain=void 0,e.getEntitiesByDomain=(t,i)=>Object.keys(t.states).filter((t=>t.substr(0,t.indexOf("."))===i)).map((i=>(0,e.formatList)(i,t))),e.getEntitiesByDeviceClass=(t,i,r)=>Object.keys(t.states).filter((e=>e.substr(0,e.indexOf("."))===i&&t.states[e].attributes.device_class===r)).map((i=>(0,e.formatList)(i,t))),e.formatList=(t,e)=>({label:e.states[t].attributes.friendly_name,value:t}),e.getDropdownOptionsFromEnum=t=>{const e=[];for(const[i,r]of Object.entries(t))e.push({value:r,label:i});return e}},356:(t,e,i)=>{i.r(e),i.d(e,{DEFAULT_DOMAIN_ICON:()=>J,DEFAULT_PANEL:()=>K,DEFAULT_VIEW_ENTITY_ID:()=>at,DOMAINS_HIDE_MORE_INFO:()=>et,DOMAINS_MORE_INFO_NO_HISTORY:()=>it,DOMAINS_TOGGLE:()=>nt,DOMAINS_WITH_CARD:()=>G,DOMAINS_WITH_MORE_INFO:()=>tt,NumberFormat:()=>r,STATES_OFF:()=>rt,TimeFormat:()=>n,UNIT_C:()=>ot,UNIT_F:()=>st,applyThemesOnElement:()=>P,computeCardSize:()=>R,computeDomain:()=>H,computeEntity:()=>z,computeRTL:()=>F,computeRTLDirection:()=>V,computeStateDisplay:()=>X,computeStateDomain:()=>B,createThing:()=>ut,debounce:()=>ht,domainIcon:()=>mt,evaluateFilter:()=>ft,fireEvent:()=>lt,fixedIcons:()=>pt,formatDate:()=>d,formatDateMonth:()=>v,formatDateMonthYear:()=>g,formatDateNumeric:()=>h,formatDateShort:()=>m,formatDateTime:()=>x,formatDateTimeNumeric:()=>C,formatDateTimeWithSeconds:()=>E,formatDateWeekday:()=>l,formatDateYear:()=>b,formatNumber:()=>Y,formatTime:()=>k,formatTimeWeekday:()=>O,formatTimeWithSeconds:()=>T,forwardHaptic:()=>gt,getLovelace:()=>Ct,handleAction:()=>$t,handleActionConfig:()=>bt,handleClick:()=>wt,hasAction:()=>xt,hasConfigOrEntityChanged:()=>At,hasDoubleClick:()=>Et,isNumericState:()=>W,navigate:()=>yt,numberFormatToLocale:()=>q,relativeTime:()=>L,round:()=>Q,stateIcon:()=>Dt,timerTimeRemaining:()=>j,toggleEntity:()=>_t,turnOnOffEntities:()=>St,turnOnOffEntity:()=>vt});var r,n,o,s=function(){return s=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},s.apply(this,arguments)},a={second:45,minute:45,hour:22,day:5},l=function(t,e){return c(e).format(t)},c=function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"})},d=function(t,e){return u(e).format(t)},u=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})},h=function(t,e){return p(e).format(t)},p=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"})},m=function(t,e){return f(e).format(t)},f=function(t){return new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})},g=function(t,e){return y(e).format(t)},y=function(t){return new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"})},v=function(t,e){return _(e).format(t)},_=function(t){return new Intl.DateTimeFormat(t.language,{month:"long"})},b=function(t,e){return $(e).format(t)},$=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric"})};(o=r||(r={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(n||(n={}));var w=function(t){if(t.time_format===n.language||t.time_format===n.system){var e=t.time_format===n.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===n.am_pm},x=function(t,e){return A(e).format(t)},A=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:w(t)?"numeric":"2-digit",minute:"2-digit",hour12:w(t)})},E=function(t,e){return S(e).format(t)},S=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:w(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:w(t)})},C=function(t,e){return M(e).format(t)},M=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:w(t)})},k=function(t,e){return D(e).format(t)},D=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:w(t)})},T=function(t,e){return N(e).format(t)},N=function(t){return new Intl.DateTimeFormat(t.language,{hour:w(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:w(t)})},O=function(t,e){return I(e).format(t)},I=function(t){return new Intl.DateTimeFormat(t.language,{hour:w(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:w(t)})},L=function(t,e,i,r){void 0===r&&(r=!0);var n=function(t,e,i){void 0===e&&(e=Date.now()),void 0===i&&(i={});var r=s(s({},a),i||{}),n=(+t-+e)/1e3;if(Math.abs(n)<r.second)return{value:Math.round(n),unit:"second"};var o=n/60;if(Math.abs(o)<r.minute)return{value:Math.round(o),unit:"minute"};var l=n/3600;if(Math.abs(l)<r.hour)return{value:Math.round(l),unit:"hour"};var c=n/86400;if(Math.abs(c)<r.day)return{value:Math.round(c),unit:"day"};var d=new Date(t),u=new Date(e),h=d.getFullYear()-u.getFullYear();if(Math.round(Math.abs(h))>0)return{value:Math.round(h),unit:"year"};var p=12*h+d.getMonth()-u.getMonth();if(Math.round(Math.abs(p))>0)return{value:Math.round(p),unit:"month"};var m=n/604800;return{value:Math.round(m),unit:"week"}}(t,i);return r?function(t){return new Intl.RelativeTimeFormat(t.language,{numeric:"auto"})}(e).format(n.value,n.unit):Intl.NumberFormat(e.language,{style:"unit",unit:n.unit,unitDisplay:"long"}).format(Math.abs(n.value))};function j(t){var e,i=3600*(e=t.attributes.remaining.split(":").map(Number))[0]+60*e[1]+e[2];if("active"===t.state){var r=(new Date).getTime(),n=new Date(t.last_changed).getTime();i=Math.max(i-(r-n)/1e3,0)}return i}function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}var P=function(t,e,i,r){void 0===r&&(r=!1),t._themes||(t._themes={});var n=e.default_theme;("default"===i||i&&e.themes[i])&&(n=i);var o=U({},t._themes);if("default"!==n){var s=e.themes[n];Object.keys(s).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=s[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),r){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var l=o["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",l)}}},R=function(t){return"function"==typeof t.getCardSize?t.getCardSize():4};function H(t){return t.substr(0,t.indexOf("."))}function z(t){return t.substr(t.indexOf(".")+1)}function F(t){var e,i=(null==t||null==(e=t.locale)?void 0:e.language)||"en";return t.translationMetadata.translations[i]&&t.translationMetadata.translations[i].isRTL||!1}function V(t){return F(t)?"rtl":"ltr"}function B(t){return H(t.entity_id)}var W=function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class},q=function(t){switch(t.number_format){case r.comma_decimal:return["en-US","en"];case r.decimal_comma:return["de","es","it"];case r.space_comma:return["fr","sv","cs"];case r.system:return;default:return t.language}},Q=function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)},Y=function(t,e,i){var n=e?q(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==r.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Z(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Z(t,i)).format(Number(t))}return"string"==typeof t?t:Q(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Z=function(t,e){var i=U({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var r=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=r,i.maximumFractionDigits=r}return i},X=function(t,e,i,r){var n=void 0!==r?r:e.state;if("unknown"===n||"unavailable"===n)return t("state.default."+n);if(W(e)){if("monetary"===e.attributes.device_class)try{return Y(n,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return Y(n,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o=B(e);if("input_datetime"===o){var s;if(void 0===r)return e.attributes.has_date&&e.attributes.has_time?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),x(s,i)):e.attributes.has_date?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),d(s,i)):e.attributes.has_time?((s=new Date).setHours(e.attributes.hour,e.attributes.minute),k(s,i)):e.state;try{var a=r.split(" ");if(2===a.length)return x(new Date(a.join("T")),i);if(1===a.length){if(r.includes("-"))return d(new Date(r+"T00:00"),i);if(r.includes(":")){var l=new Date;return k(new Date(l.toISOString().split("T")[0]+"T"+r),i)}}return r}catch(t){return r}}return"humidifier"===o&&"on"===n&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?Y(n,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+n)||t("component."+o+".state._."+n)||n},J="mdi:bookmark",K="lovelace",G=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],tt=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],et=["input_number","input_select","input_text","scene","weblink"],it=["camera","configurator","history_graph","scene"],rt=["closed","locked","off"],nt=new Set(["fan","input_boolean","light","switch","group","automation"]),ot="°C",st="°F",at="group.default_view",lt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,t.dispatchEvent(n),n},ct=new Set(["call-service","divider","section","weblink","cast","select"]),dt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ut=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return r("hui-error-card",{type:"error",error:t,config:e})},r=function(t,e){var r=window.document.createElement(t);try{if(!r.setConfig)return;r.setConfig(e)}catch(r){return console.error(t,r),i(r.message,e)}return r};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr(7);else if(e)if(ct.has(n))n="hui-"+n+"-row";else{if(!t.entity)return i("Invalid config given.",t);var o=t.entity.split(".",1)[0];n="hui-"+(dt[o]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return r(n,t);var s=i("Custom element doesn't exist: "+t.type+".",t);s.style.display="None";var a=setTimeout((function(){s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(a),lt(s,"ll-rebuild",{},s)})),s},ht=function(t,e,i){var r;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),o=this,s=i&&!r;clearTimeout(r),r=setTimeout((function(){r=null,i||t.apply(o,n)}),e),s&&t.apply(o,n)}},pt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function mt(t,e){if(t in pt)return pt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var ft=function(t,e){var i=e.value||e,r=e.attribute?t.attributes[e.attribute]:t.state;switch(e.operator||"=="){case"==":return r===i;case"<=":return r<=i;case"<":return r<i;case">=":return r>=i;case">":return r>i;case"!=":return r!==i;case"regex":return r.match(i);default:return!1}},gt=function(t){lt(window,"haptic",t)},yt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),lt(window,"location-changed",{replace:i})},vt=function(t,e,i){void 0===i&&(i=!0);var r,n=H(e),o="group"===n?"homeassistant":n;switch(n){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;default:r=i?"turn_on":"turn_off"}return t.callService(o,r,{entity_id:e})},_t=function(t,e){var i=rt.includes(t.states[e].state);return vt(t,e,i)},bt=function(t,e,i,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(i.entity||i.camera_image)&&lt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":r.navigation_path&&yt(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":i.entity&&(_t(e,i.entity),gt("success"));break;case"call-service":if(!r.service)return void gt("failure");var n=r.service.split(".",2);e.callService(n[0],n[1],r.service_data,r.target),gt("success");break;case"fire-dom-event":lt(t,"ll-custom",r)}},$t=function(t,e,i,r){var n;"double_tap"===r&&i.double_tap_action?n=i.double_tap_action:"hold"===r&&i.hold_action?n=i.hold_action:"tap"===r&&i.tap_action&&(n=i.tap_action),bt(t,e,i,n)},wt=function(t,e,i,r,n){var o;if(n&&i.double_tap_action?o=i.double_tap_action:r&&i.hold_action?o=i.hold_action:!r&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(lt(t,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&gt(o.haptic));break;case"navigate":o.navigation_path&&(yt(0,o.navigation_path),o.haptic&&gt(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&gt(o.haptic);break;case"toggle":i.entity&&(_t(e,i.entity),o.haptic&&gt(o.haptic));break;case"call-service":if(!o.service)return;var s=o.service.split(".",2),a=s[0],l=s[1],c=U({},o.service_data);"entity"===c.entity_id&&(c.entity_id=i.entity),e.callService(a,l,c,o.target),o.haptic&&gt(o.haptic);break;case"fire-dom-event":lt(t,"ll-custom",o),o.haptic&&gt(o.haptic)}};function xt(t){return void 0!==t&&"none"!==t.action}function At(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}function Et(t){return void 0!==t&&"none"!==t.action}var St=function(t,e,i){void 0===i&&(i=!0);var r={};e.forEach((function(e){if(rt.includes(t.states[e].state)===i){var n=H(e),o=["cover","lock"].includes(n)?n:"homeassistant";o in r||(r[o]=[]),r[o].push(e)}})),Object.keys(r).forEach((function(e){var n;switch(e){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(e,n,{entity_id:r[e]})}))},Ct=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null},Mt={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},kt={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return mt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Mt)return Mt[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var r=10*Math.round(i/10);return r>=100?"mdi:battery":r<=0?"mdi:battery-alert":"hass:battery-"+r}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":mt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?mt("input_datetime"):"mdi:calendar":"mdi:clock"}},Dt=function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=H(t.entity_id);return e in kt?kt[e](t):mt(e,t.state)}},43:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerCardEditor=void 0;const n=i(437),o=i(924),s=i(854),a=i(139),l=i(147),c=i(516),d=i(770),u=i(770);let h=class extends l.default{render(){if(!this._hass||!this._config)return n.html``;Object.prototype.hasOwnProperty.call(this._config,"show_bars")||(this._config.show_bars=a.default_show_bars);const t=(0,d.getEntitiesByDomain)(this._hass,"plant"),e=(0,u.getEntitiesByDeviceClass)(this._hass,"sensor","battery");return this.renderForm([{controls:[{label:"Display Type",configValue:"display_type",type:c.FormControlType.Radio,items:[{label:"Full",value:s.DisplayType.Full},{label:"Compact",value:s.DisplayType.Compact}]}]},{controls:[{label:"Entity",configValue:"entity",type:c.FormControlType.Dropdown,items:t}]},{controls:[{label:"Battery Sensor",configValue:"battery_sensor",type:c.FormControlType.Dropdown,items:e}]},{controls:[{label:"Show Bars",configValue:"show_bars",type:c.FormControlType.Checkboxes,items:a.plantAttributes}]}])}};e.FlowerCardEditor=h,e.FlowerCardEditor=h=r([(0,o.customElement)("flower-card-editor")],h)},248:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},n=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function s(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=i(437),s=i(924),a=i(800),l=i(854),c=i(330),d=i(429),u=i(139),h=i(135);console.info(`%c FLOWER-CARD %c ${c.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:u.CARD_NAME,name:"Flower card",preview:!0,description:"Custom flower card for https://github.com/Olen/homeassistant-plant"});let p=class extends o.LitElement{set hass(t){var e;this._hass=t,this.stateObj=(null===(e=this.config)||void 0===e?void 0:e.entity)?t.states[this.config.entity]:void 0,this.previousFetchDate||(this.previousFetchDate=0),Date.now()>this.previousFetchDate+1e3&&(this.previousFetchDate=Date.now(),this.get_data(t).then((()=>{this.requestUpdate()})))}static getConfigElement(){return n(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>i(43))),document.createElement(u.CARD_EDITOR_NAME)}))}static getStubConfig(t){const e=t=>{if("object"==typeof t&&"entity_id"in t&&"string"==typeof t.entity_id&&0===t.entity_id.indexOf("plant."))return!!t};let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:u.default_show_bars}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}render(){var t,e,i;if(!this.config||!this._hass)return o.html``;if(!this.stateObj)return o.html`
                <hui-warning>
                Entity not available: ${this.config.entity}
                </hui-warning>
              `;const r=this.stateObj.attributes.strain+" - "+this.stateObj.attributes.breeder,n=this.config.display_type===l.DisplayType.Compact?"header-compact":"header",s=this.config.display_type===l.DisplayType.Compact?"":"card-margin-top",a=this.stateObj.entity_id.split(".")[1],c=this._hass.states[`select.${a}_growth_phase`],p=this._hass.states[`number.${a}_pot_size`],m=c?c.state:"Nicht verfügbar",f=p?p.state+"L":"Nicht verfügbar";return o.html`
            <ha-card class="${s}">
            <div class="${n}">
                <img src="${this.stateObj.attributes.entity_picture?this.stateObj.attributes.entity_picture:u.missingImage}" @click="${()=>(0,h.moreInfo)(this,this.stateObj.entity_id)}">
                <span id="name" @click="${()=>(0,h.moreInfo)(this,this.stateObj.entity_id)}"> ${this.stateObj.attributes.friendly_name} <ha-icon .icon="mdi:${"problem"==this.stateObj.state.toLowerCase()?"alert-circle-outline":""}"></ha-icon>
                </span>
                <span id="battery">${(0,d.renderBattery)(this)}</span>
                <span id="species">${r}</span>
                <div id="status-container">
                    <span @click="${()=>(0,h.moreInfo)(this,`select.${a}_growth_phase`)}">
                        <ha-icon icon="mdi:sprout"></ha-icon>${m}
                    </span>
                    <span @click="${()=>(0,h.moreInfo)(this,`number.${a}_pot_size`)}">
                        <ha-icon icon="mdi:cup"></ha-icon>${f}
                    </span>
                </div>
                <div id="metrics-container">
                    <span @click="${()=>(0,h.moreInfo)(this,`sensor.${a}_total_ppfd_mol_integral`)}">
                        <ha-icon icon="mdi:counter"></ha-icon>${(null===(t=this._hass.states[`sensor.${a}_total_ppfd_mol_integral`])||void 0===t?void 0:t.state)||"Nicht verfügbar"} mol/s⋅m²
                    </span>
                    <span @click="${()=>(0,h.moreInfo)(this,`sensor.${a}_water_consumption`)}">
                        <ha-icon icon="mdi:water-pump"></ha-icon>${(null===(e=this._hass.states[`sensor.${a}_water_consumption`])||void 0===e?void 0:e.state)||"Nicht verfügbar"} L/d
                    </span>
                    <span @click="${()=>(0,h.moreInfo)(this,`sensor.${a}_fertilizer_consumption`)}">
                        <ha-icon icon="mdi:chart-line-variant"></ha-icon>${(null===(i=this._hass.states[`sensor.${a}_fertilizer_consumption`])||void 0===i?void 0:i.state)||"Nicht verfügbar"} μS/cm/d
                    </span>
                </div>
            </div>
            <div class="divider"></div>
            ${(0,d.renderAttributes)(this)}
            </ha-card>
            `}get_data(t){return n(this,void 0,void 0,(function*(){var e;try{this.plantinfo=yield t.callWS({type:"plant/get_info",entity_id:null===(e=this.config)||void 0===e?void 0:e.entity})}catch(t){this.plantinfo={result:{}}}}))}getCardSize(){return 5}static get styles(){return a.style}};r([(0,s.property)()],p.prototype,"_hass",void 0),r([(0,s.property)()],p.prototype,"config",void 0),p=r([(0,s.customElement)(u.CARD_NAME)],p),e.default=p},800:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const r=i(437);e.style=r.css`
.card-margin-top {
  margin-top: 32px;
}
.attributes {
  display: flex;
  white-space: nowrap;
  padding: 8px;
}
.attributes.width-100 {
  padding: 2px;
}
.attribute ha-icon {
  margin-right: 10px;
  margin-left: 5px;
}
.attribute {
  white-space: nowrap;
  display: flex;  
  align-items: center;
  width: 50%;
}
#battery {
  float: right;
  margin-right: 16px;
  margin-top: -15px;
}
.header {
  padding-top: 8px;
  height: 100px;
  position: relative;
}
.header-compact {
  padding-top: 4px;
  height: 55px;
}
.attribute .header, .attribute .header-compact {
  height: auto;
  padding-top: 0px;
}
.header > img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -16px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header-compact > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 4px;
  margin-top: 0px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  text-transform: capitalize;
  display: block;
  margin-left: 132px;
}
.header-compact > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  text-transform: capitalize;
  display: block;
  white-space: nowrap;
}
#name ha-icon {
    color: rgb(240, 163, 163);
}
.header > #species {
  text-transform: capitalize;
  color: #8c96a5;
  display: block;
  margin-top: 4px;
  margin-left: 132px;
}
.header > #status-container {
  display: flex;
  gap: 16px;
  margin-left: 132px;
  margin-top: 4px;
}
.header > #status-container span {
  color: #8c96a5;
  display: flex;
  align-items: center;
}
.header > #metrics-container {
  position: absolute;
  top: 28px;
  right: 16px;
  text-align: right;
  color: #8c96a5;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.header > #metrics-container ha-icon,
.header > #status-container ha-icon {
  margin-right: 4px;
  --mdc-icon-size: 16px;
}
.header-compact > #species {
  text-transform: capitalize;
  line-height: 85%;
  color: #8c96a5;
  font-size: 0.8em;
  margin-top: 0px;
  margin-right: 4px;
  opacity: 0.4;
  display: block;
}
.meter {
  height: 12px;
  background-color: var(--primary-background-color);
  border-radius: 3px;
  display: inline-grid;
  overflow: hidden;
}
.meter.red {
  flex-grow: 1;
  margin-right: 2px;
  max-width: 5%
}
.meter.green {
  flex-grow: 10;
  margin-right: 2px;
  max-width: 90%
}
.attribute.tooltip.width-100 .meter.green {
  max-width: 90%;
}
.attribute.tooltip.width-100 .header {
  display: none;
}
.meter > span {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
}
.meter > .good {
  background-color: rgba(43,194,83,1);
}
.meter > .bad {
  background-color: rgba(240,163,163);
}
.meter > .unavailable {
  background-color: rgba(158,158,158,1);
}
.divider {
  height: 1px;
  background-color: #727272;
  opacity: 0.25;
  margin-left: 8px;
  margin-right: 8px;
}
.tooltip {
  position: relative;
}
.tooltip .tip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  padding: 6px 10px;
  top: 3.3em;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-180%);
          transform: translateX(-50%) translateY(-180%);
  background: grey;
  color: white;
  white-space: nowrap;
  z-index: 2;
  border-radius: 2px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.battery.tooltip .tip {
  top: 2em;
}
.tooltip:hover .tip, .tooltip:active .tip {
  display: block;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-200%);
          transform: translateX(-50%) translateY(-200%);
}
.width-100 {
  width: 100%;    
  margin-bottom: 3px;
  margin-right: 5px;
}
.width-100 .header {
  display: none;
}
@media (max-width: 600px) {
  .header > .unit {
    display: none;
  }
}
.table-container {
  overflow-x: auto;
  margin: 0 16px;
  padding: 16px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  color: var(--primary-text-color);
  table-layout: auto;
}
th {
  padding: 12px 16px;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid var(--divider-color);
  user-select: none;
}
th:hover {
  background-color: var(--secondary-background-color);
}
td {
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
.plant-name {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
}
.plant-name img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
ha-icon {
  --mdc-icon-size: 18px;
  margin-left: 4px;
}
.card-header {
  padding: 0px 16px;
  margin: 0 16px;
  border-bottom: 1px solid var(--divider-color);
}
.card-header .name {
  font-size: 16px;
  font-weight: bold;
}
td, th {
  padding: 12px 16px;
  border-bottom: 1px solid var(--divider-color);
  white-space: nowrap;
  width: fit-content;
}
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
.sensor-cell {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}
.meter-container {
    display: flex;
    gap: 2px;
    width: 120px;
    flex-shrink: 0;
}
.meter {
    height: 8px;
    background-color: var(--primary-background-color);
    border-radius: 2px;
    display: inline-grid;
    overflow: hidden;
}
.meter.red {
    flex-grow: 1;
    margin-right: 2px;
    max-width: 5%
}
.meter.green {
    flex-grow: 10;
    margin-right: 2px;
    max-width: 90%
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
.search-container {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 8px 0;
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
.toolbar {
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin: 0 16px;
    border-bottom: 1px solid var(--divider-color);
    border-top: none;
    background-color: var(--card-background-color);
    height: 48px;
}
.toolbar ha-icon-button {
    --mdc-icon-button-size: 40px;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -8px;
}
.toolbar ha-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
}
td input[type="checkbox"] {
    width: 14px;
    height: 14px;
    margin: 0;
    vertical-align: middle;
    position: relative;
    top: 0;
}
.search-container {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 8px 0;
    border-bottom: none;
}
ha-checkbox {
    margin: 0 8px;
    --mdc-checkbox-state-layer-size: 40px;
}
.filter-sidebar {
    position: absolute;
    left: 0;
    top: 98px;
    bottom: 0;
    width: 234px;
    background: var(--card-background-color);
    border-right: 1px solid var(--divider-color);
    overflow-y: auto;
    z-index: 1;
    padding: 16px 16px 16px 32px;
}
.filter-group {
    margin-bottom: 16px;
}
.filter-header {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-text-color);
}
.filter-item {
    display: flex;
    align-items: center;
    padding: 4px 0;
    color: var(--primary-text-color);
    cursor: pointer;
}
.filter-item input[type="checkbox"] {
    margin-right: 8px;
}
.table-container {
    position: relative;
    transition: margin-left 0.3s ease;
}
.table-container.filtered {
    margin-left: 282px;
}
.filter-range-inputs {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
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
`},854:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayType=void 0,function(t){t.Full="full",t.Compact="compact"}(i||(e.DisplayType=i={}))},429:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderAttributeChunks=e.getChunkedDisplayed=e.renderAttribute=e.renderAttributes=e.renderBattery=void 0;const r=i(854),n=i(437),o=i(534),s=i(139),a=i(135);e.renderBattery=t=>{if(!t.config.battery_sensor)return n.html``;const e=t._hass.states[t.config.battery_sensor];if(!e)return n.html``;const i=parseInt(e.state),{icon:r,color:o}=[{threshold:90,icon:"mdi:battery",color:"green"},{threshold:80,icon:"mdi:battery-90",color:"green"},{threshold:70,icon:"mdi:battery-80",color:"green"},{threshold:60,icon:"mdi:battery-70",color:"green"},{threshold:50,icon:"mdi:battery-60",color:"green"},{threshold:40,icon:"mdi:battery-50",color:"green"},{threshold:30,icon:"mdi:battery-40",color:"orange"},{threshold:20,icon:"mdi:battery-30",color:"orange"},{threshold:10,icon:"mdi:battery-20",color:"red"},{threshold:0,icon:"mdi:battery-10",color:"red"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline",color:"red"}].find((({threshold:t})=>i>t))||{icon:"mdi:battery-alert-variant-outline",color:"red"};return n.html`
        <div class="battery tooltip" @click="${e=>{e.stopPropagation(),(0,a.moreInfo)(t,t.config.battery_sensor)}}">
            <div class="tip" style="text-align:center;">${i}%</div>
            <ha-icon .icon="${r}" style="color: ${o}"></ha-icon>
        </div>
    `},e.renderAttributes=t=>{const i={},r={},n={},o={},a={},l={},c={},d=t.config.show_bars||s.default_show_bars;if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const s of d)if(e[s]){let{max:d,min:u,current:h,icon:p,sensor:m,unit_of_measurement:f}=e[s];d=Number(d),u=Number(u),p=String(p),m=String(m),h=Number(h);const g=t._hass.formatEntityState(t._hass.states[m]).replace(/[^\d,.]/g,"");f=String(f),o[`max_${s}`]={max:d,min:u},a[s]=h,i[s]=p,l[s]=m,n[s]=f,r[s]=f,"dli"===s&&(n.dli="mol/d⋅m²",r.dli='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>'),c[s]={name:s,current:h,limits:o[`max_${s}`],icon:p,sensor:m,unit_of_measurement:f,display_state:g}}}return(0,e.renderAttributeChunks)(t,c)},e.renderAttribute=(t,e)=>{const{max:i,min:s}=e.limits,l=e.unit_of_measurement,c=e.icon||"mdi:help-circle-outline",d=e.current||0,u=!isNaN(d),h=e.display_state,p=100*Math.max(0,Math.min(1,(d-s)/(i-s))),m=u?`${e.name}: ${d} ${l}<br>(${s} ~ ${i} ${l})`:t._hass.localize("state.default.unavailable"),f="dli"===e.name?'<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':l,g="attribute tooltip "+(t.config.display_type===r.DisplayType.Compact?"width-100":"");return n.html`
        <div class="${g}" @click="${()=>(0,a.moreInfo)(t,e.sensor)}">
            <div class="tip" style="text-align:center;">${(0,o.unsafeHTML)(m)}</div>
            <ha-icon .icon="${c}"></ha-icon>
            <div class="meter red">
                <span class="${u?d<s||d>i?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${u?d>i?"bad":"good":"unavailable"}" style="width:${u?p:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${u?d>i?100:0:"0"}%;"></span>
            </div>
            ${t.config.display_type===r.DisplayType.Compact?"":n.html`<div class="header"><span class="value">${h}</span>&nbsp;<span class='unit'>${(0,o.unsafeHTML)(f)}</span></div>`}
        </div>
    `},e.getChunkedDisplayed=(t,e)=>Object.values(t).reduce(((t,i,r)=>{const n=Math.floor(r/e);return t[n]||(t[n]=[]),t[n].push(i),t}),[]),e.renderAttributeChunks=(t,i)=>{const o=(0,e.getChunkedDisplayed)(i,t.config.display_type===r.DisplayType.Compact?1:2),s="attributes "+(t.config.display_type===r.DisplayType.Compact?"width-100":"");return o.map((i=>n.html`<div class="${s}">${i.map((i=>i?n.html`${(0,e.renderAttribute)(t,i)}`:""))}</div>`)).flat()}},139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.plantAttributes=e.missingImage=e.default_show_bars=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="flower-card",e.CARD_EDITOR_NAME=`${e.CARD_NAME}-editor`,e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli"],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"}]},135:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.moreInfo=e.getStubConfig=e.getConfigElement=void 0;const r=i(356),n=i(139);e.getConfigElement=()=>document.createElement("flower-card-editor"),e.getStubConfig=t=>{const e=t=>{if("object"==typeof t&&"entity_id"in t&&"string"==typeof t.entity_id&&0===t.entity_id.indexOf("plant."))return!!t};let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:n.default_show_bars}},e.moreInfo=(t,e)=>{(0,r.fireEvent)(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})}},823:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>a,LitElement:()=>ft,ReactiveElement:()=>S,_$LE:()=>yt,_$LH:()=>ht,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>x,getCompatibleStyle:()=>u,html:()=>Y,isServer:()=>vt,mathml:()=>X,noChange:()=>J,notEqual:()=>A,nothing:()=>K,render:()=>mt,supportsAdoptingStyleSheets:()=>n,svg:()=>Z,unsafeCSS:()=>l});const r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new a("string"==typeof t?t:t+"",void 0,o),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new a(i,t,o)},d=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=r.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},u=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t,{is:h,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,v=globalThis,_=v.trustedTypes,b=_?_.emptyScript:"",$=v.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},A=(t,e)=>!h(t,e),E={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&p(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const o=r?.call(this);n.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??E}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...f(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??A)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[w("elementProperties")]=new Map,S[w("finalized")]=new Map,$?.({ReactiveElement:S}),(v.reactiveElementVersions??=[]).push("2.0.4");const C=globalThis,M=C.trustedTypes,k=M?M.createPolicy("lit-html",{createHTML:t=>t}):void 0,D="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+T,O=`<${N}>`,I=document,L=()=>I.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,P=t=>U(t)||"function"==typeof t?.[Symbol.iterator],R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,V=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,W=/"/g,q=/^(?:script|style|textarea|title)$/i,Q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Y=Q(1),Z=Q(2),X=Q(3),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),G=new WeakMap,tt=I.createTreeWalker(I,129);function et(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":3===e?"<math>":"",s=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===H?"!--"===l[1]?s=z:void 0!==l[1]?s=F:void 0!==l[2]?(q.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=V):void 0!==l[3]&&(s=V):s===V?">"===l[0]?(s=n??H,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?V:'"'===l[3]?W:B):s===W||s===B?s=V:s===z||s===F?s=H:(s=V,n=void 0);const u=s===V&&t[e+1].startsWith("/>")?" ":"";o+=s===H?i+O:c>=0?(r.push(a),i.slice(0,c)+D+i.slice(c)+T+u):i+T+(-2===c?e:u)}return[et(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class rt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const s=t.length-1,a=this.parts,[l,c]=it(t,e);if(this.el=rt.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=tt.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(D)){const e=c[o++],i=r.getAttribute(t).split(T),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?lt:"?"===s[1]?ct:"@"===s[1]?dt:at}),r.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:n}),r.removeAttribute(t));if(q.test(r.tagName)){const t=r.textContent.split(T),e=t.length-1;if(e>0){r.textContent=M?M.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],L()),tt.nextNode(),a.push({type:2,index:++n});r.append(t[e],L())}}}else if(8===r.nodeType)if(r.data===N)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(T,t+1));)a.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function nt(t,e,i=t,r){if(e===J)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const o=j(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=nt(t,n._$AS(t,e.values),n,r)),e}class ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??I).importNode(e,!0);tt.currentNode=r;let n=tt.nextNode(),o=0,s=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new st(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ut(n,this,t)),this._$AV.push(e),a=i[++s]}o!==a?.index&&(n=tt.nextNode(),o++)}return tt.currentNode=I,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),j(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):P(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=rt.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new ot(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new rt(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new st(this.O(L()),this.O(L()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=nt(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const r=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=nt(this,r[i+s],e,s),a===J&&(a=this._$AH[s]),o||=!j(a)||a!==this._$AH[s],a===K?t=K:t!==K&&(t+=(a??"")+n[s+1]),this._$AH[s]=a}o&&!r&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class ct extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class dt extends at{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??K)===J)return;const i=this._$AH,r=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==K&&(i===K||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const ht={M:D,P:T,A:N,C:1,L:it,R:ot,D:P,V:nt,I:st,H:at,N:ct,U:dt,B:lt,F:ut},pt=C.litHtmlPolyfillSupport;pt?.(rt,st),(C.litHtmlVersions??=[]).push("3.2.1");const mt=(t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new st(e.insertBefore(L(),t),t,void 0,i??{})}return n._$AI(t),n};class ft extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ft._$litElement$=!0,ft.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ft});const gt=globalThis.litElementPolyfillSupport;gt?.({LitElement:ft});const yt={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.1.1");const vt=!1},752:(t,e,i)=>{var r;i.d(e,{JW:()=>S,XX:()=>W,c0:()=>C,ge:()=>V,qy:()=>E,s6:()=>M});const n=window,o=n.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,c="?"+l,d=`<${c}>`,u=document,h=()=>u.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,f=t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),g="[ \t\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$=/'/g,w=/"/g,x=/^(?:script|style|textarea|title)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),E=A(1),S=A(2),C=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),k=new WeakMap,D=u.createTreeWalker(u,129,null,!1);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const N=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":"",s=y;for(let e=0;e<i;e++){const i=t[e];let c,u,h=-1,p=0;for(;p<i.length&&(s.lastIndex=p,u=s.exec(i),null!==u);)p=s.lastIndex,s===y?"!--"===u[1]?s=v:void 0!==u[1]?s=_:void 0!==u[2]?(x.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=b):void 0!==u[3]&&(s=b):s===b?">"===u[0]?(s=null!=n?n:y,h=-1):void 0===u[1]?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=void 0===u[3]?b:'"'===u[3]?w:$):s===w||s===$?s=b:s===v||s===_?s=y:(s=b,n=void 0);const m=s===b&&t[e+1].startsWith("/>")?" ":"";o+=s===y?i+d:h>=0?(r.push(c),i.slice(0,h)+a+i.slice(h)+l+m):i+l+(-2===h?(r.push(void 0),e):m)}return[T(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class O{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const d=t.length-1,u=this.parts,[p,m]=N(t,e);if(this.el=O.createElement(p,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=D.nextNode())&&u.length<d;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(a)||e.startsWith(l)){const i=m[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+a).split(l),e=/([.?@])?(.*)/.exec(i);u.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?P:"?"===e[1]?H:"@"===e[1]?z:U})}else u.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(x.test(r.tagName)){const t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],h()),D.nextNode(),u.push({type:2,index:++n});r.append(t[e],h())}}}else if(8===r.nodeType)if(r.data===c)u.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)u.push({type:7,index:n}),t+=l.length-1}n++}}static createElement(t,e){const i=u.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,r){var n,o,s,a;if(e===C)return e;let l=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl;const c=p(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(s=(a=i)._$Co)&&void 0!==s?s:a._$Co=[])[r]=l:i._$Cl=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,r)),e}class L{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(i,!0);D.currentNode=n;let o=D.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new j(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new F(o,this,t)),this._$AV.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(o=D.nextNode(),s++)}return D.currentNode=u,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,r){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),p(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=O.createElement(T(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new L(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new O(t)),e}T(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new j(this.k(h()),this.k(h()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,i,r,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,e,0),o=!p(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const r=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=I(this,r[i+s],e,s),a===C&&(a=this._$AH[s]),o||(o=!p(a)||a!==this._$AH[s]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}o&&!r&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class P extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const R=o?o.emptyScript:"";class H extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class z extends U{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:M)===C)return;const r=this._$AH,n=t===M&&r!==M||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==M&&(r===M||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const V={O:a,P:l,A:c,C:1,M:N,L,R:f,D:I,I:j,V:U,H,N:z,U:P,F},B=n.litHtmlPolyfillSupport;null==B||B(O,j),(null!==(r=n.litHtmlVersions)&&void 0!==r?r:n.litHtmlVersions=[]).push("2.8.0");const W=(t,e,i)=>{var r,n;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=s=new j(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s}},924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>r,eventOptions:()=>c,property:()=>s,query:()=>d,queryAll:()=>u,queryAssignedElements:()=>f,queryAssignedNodes:()=>g,queryAsync:()=>h,state:()=>a});const r=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function s(t){return(e,i)=>void 0!==i?o(t,e,i):n(t,e)}function a(t){return s({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}};function c(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function d(t,e){return l({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}function u(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function h(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const m=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function f(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:r=>({get(){var r;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(n),s=null!=o?m(o,t):[];return i?s.filter((t=>t.matches(i))):s},enumerable:!0,configurable:!0})})}function g(t,e,i){let r,n=t;return"object"==typeof t?(n=t.slot,r=t):r={flatten:e},i?f({slot:n,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(n?`[name=${n}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==o?void 0:o.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},534:(t,e,i)=>{i.r(e),i.d(e,{UnsafeHTMLDirective:()=>o,unsafeHTML:()=>s});var r=i(752);class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class o extends n{constructor(t){if(super(t),this.et=r.s6,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r.s6||null==t)return this.ft=void 0,this.et=t;if(t===r.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const s=(a=o,(...t)=>({_$litDirective$:a,values:t}));var a},437:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>a,LitElement:()=>S,ReactiveElement:()=>$,UpdatingElement:()=>E,_$LE:()=>M,_$LH:()=>A.ge,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>y,getCompatibleStyle:()=>u,html:()=>A.qy,isServer:()=>k,noChange:()=>A.c0,notEqual:()=>v,nothing:()=>A.s6,render:()=>A.XX,supportsAdoptingStyleSheets:()=>n,svg:()=>A.JW,unsafeCSS:()=>l});const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new a("string"==typeof t?t:t+"",void 0,o),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new a(i,t,o)},d=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))},u=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var h;const p=window,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},b="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var r;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:y).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:y;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}$[b]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:$}),(null!==(h=p.reactiveElementVersions)&&void 0!==h?h:p.reactiveElementVersions=[]).push("1.6.3");var w,x,A=i(752);const E=$;class S extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,A.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return A.c0}}S.finalized=!0,S._$litElement$=!0,null===(w=globalThis.litElementHydrateSupport)||void 0===w||w.call(globalThis,{LitElement:S});const C=globalThis.litElementPolyfillSupport;null==C||C({LitElement:S});const M={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(x=globalThis.litElementVersions)&&void 0!==x?x:globalThis.litElementVersions=[]).push("3.3.3");const k=!1},330:t=>{t.exports=JSON.parse('{"name":"flower-card","version":"3.0.0","description":"A Lovelace flower card for Home Assistant","main":"flower-card.js","repository":{"type":"git","url":"git+ssh://git@github.com/Olen/lovelace-flower-card.git"},"author":"Ola Bjorling Erdal <ola@bjorling.se>","license":"MIT","scripts":{"build":"webpack -c webpack.config.js","lint":"eslint src/**/*.ts","watch":"webpack -c webpack.config.js --watch --mode=development"},"dependencies":{"@marcokreeft/ha-editor-formbuilder":"2024.9.1","custom-card-helpers":"^1.9.0","home-assistant-js-websocket":"^9.4.0","lit":"^2.8.0","lit-element":"^2.5.1"},"devDependencies":{"@babel/core":"^7.26.0","@babel/preset-env":"^7.26.0","@babel/preset-typescript":"^7.26.0","@types/node":"^20.11.30","@typescript-eslint/eslint-plugin":"^8.19.1","babel-loader":"^9.1.3","compression-webpack-plugin":"^11.1.0","eslint":"^8.57.0","ts-loader":"^9.5.2","typescript":"^5.7.3","webpack":"^5.97.1","webpack-cli":"^5.1.4"},"keywords":[],"bugs":{"url":"https://github.com/Olen/lovelace-flower-card/issues"},"homepage":"https://github.com/Olen/lovelace-flower-card#readme"}')}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(248)})();