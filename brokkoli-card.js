/*! For license information please see brokkoli-card.js.LICENSE.txt */
(()=>{"use strict";var e={4356:(e,t,i)=>{i.r(t),i.d(t,{DEFAULT_DOMAIN_ICON:()=>X,DEFAULT_PANEL:()=>J,DEFAULT_VIEW_ENTITY_ID:()=>se,DOMAINS_HIDE_MORE_INFO:()=>te,DOMAINS_MORE_INFO_NO_HISTORY:()=>ie,DOMAINS_TOGGLE:()=>ne,DOMAINS_WITH_CARD:()=>Q,DOMAINS_WITH_MORE_INFO:()=>ee,NumberFormat:()=>a,STATES_OFF:()=>ae,TimeFormat:()=>n,UNIT_C:()=>oe,UNIT_F:()=>re,applyThemesOnElement:()=>U,computeCardSize:()=>L,computeDomain:()=>N,computeEntity:()=>R,computeRTL:()=>H,computeRTLDirection:()=>G,computeStateDisplay:()=>Z,computeStateDomain:()=>B,createThing:()=>he,debounce:()=>ue,domainIcon:()=>me,evaluateFilter:()=>_e,fireEvent:()=>le,fixedIcons:()=>pe,formatDate:()=>c,formatDateMonth:()=>f,formatDateMonthYear:()=>g,formatDateNumeric:()=>u,formatDateShort:()=>m,formatDateTime:()=>k,formatDateTimeNumeric:()=>E,formatDateTimeWithSeconds:()=>$,formatDateWeekday:()=>l,formatDateYear:()=>b,formatNumber:()=>q,formatTime:()=>I,formatTimeWeekday:()=>T,formatTimeWithSeconds:()=>P,forwardHaptic:()=>ge,getLovelace:()=>Ee,handleAction:()=>we,handleActionConfig:()=>be,handleClick:()=>xe,hasAction:()=>ke,hasConfigOrEntityChanged:()=>Se,hasDoubleClick:()=>$e,isNumericState:()=>V,navigate:()=>ve,numberFormatToLocale:()=>W,relativeTime:()=>F,round:()=>K,stateIcon:()=>Me,timerTimeRemaining:()=>O,toggleEntity:()=>ye,turnOnOffEntities:()=>ze,turnOnOffEntity:()=>fe});var a,n,o,r=function(){return r=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},s={second:45,minute:45,hour:22,day:5},l=function(e,t){return d(t).format(e)},d=function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})},c=function(e,t){return h(t).format(e)},h=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})},u=function(e,t){return p(t).format(e)},p=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})},m=function(e,t){return _(t).format(e)},_=function(e){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"})},g=function(e,t){return v(t).format(e)},v=function(e){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"})},f=function(e,t){return y(t).format(e)},y=function(e){return new Intl.DateTimeFormat(e.language,{month:"long"})},b=function(e,t){return w(t).format(e)},w=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric"})};(o=a||(a={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(n||(n={}));var x=function(e){if(e.time_format===n.language||e.time_format===n.system){var t=e.time_format===n.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===n.am_pm},k=function(e,t){return S(t).format(e)},S=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:x(e)?"numeric":"2-digit",minute:"2-digit",hour12:x(e)})},$=function(e,t){return z(t).format(e)},z=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:x(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(e)})},E=function(e,t){return C(t).format(e)},C=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:x(e)})},I=function(e,t){return M(t).format(e)},M=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:x(e)})},P=function(e,t){return D(t).format(e)},D=function(e){return new Intl.DateTimeFormat(e.language,{hour:x(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(e)})},T=function(e,t){return A(t).format(e)},A=function(e){return new Intl.DateTimeFormat(e.language,{hour:x(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(e)})},F=function(e,t,i,a){void 0===a&&(a=!0);var n=function(e,t,i){void 0===t&&(t=Date.now()),void 0===i&&(i={});var a=r(r({},s),i||{}),n=(+e-+t)/1e3;if(Math.abs(n)<a.second)return{value:Math.round(n),unit:"second"};var o=n/60;if(Math.abs(o)<a.minute)return{value:Math.round(o),unit:"minute"};var l=n/3600;if(Math.abs(l)<a.hour)return{value:Math.round(l),unit:"hour"};var d=n/86400;if(Math.abs(d)<a.day)return{value:Math.round(d),unit:"day"};var c=new Date(e),h=new Date(t),u=c.getFullYear()-h.getFullYear();if(Math.round(Math.abs(u))>0)return{value:Math.round(u),unit:"year"};var p=12*u+c.getMonth()-h.getMonth();if(Math.round(Math.abs(p))>0)return{value:Math.round(p),unit:"month"};var m=n/604800;return{value:Math.round(m),unit:"week"}}(e,i);return a?function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})}(t).format(n.value,n.unit):Intl.NumberFormat(t.language,{style:"unit",unit:n.unit,unitDisplay:"long"}).format(Math.abs(n.value))};function O(e){var t,i=3600*(t=e.attributes.remaining.split(":").map(Number))[0]+60*t[1]+t[2];if("active"===e.state){var a=(new Date).getTime(),n=new Date(e.last_changed).getTime();i=Math.max(i-(a-n)/1e3,0)}return i}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var U=function(e,t,i,a){void 0===a&&(a=!1),e._themes||(e._themes={});var n=t.default_theme;("default"===i||i&&t.themes[i])&&(n=i);var o=j({},e._themes);if("default"!==n){var r=t.themes[n];Object.keys(r).forEach((function(t){var i="--"+t;e._themes[i]="",o[i]=r[t]}))}if(e.updateStyles?e.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,o),a){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=o["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}},L=function(e){return"function"==typeof e.getCardSize?e.getCardSize():4};function N(e){return e.substr(0,e.indexOf("."))}function R(e){return e.substr(e.indexOf(".")+1)}function H(e){var t,i=(null==e||null==(t=e.locale)?void 0:t.language)||"en";return e.translationMetadata.translations[i]&&e.translationMetadata.translations[i].isRTL||!1}function G(e){return H(e)?"rtl":"ltr"}function B(e){return N(e.entity_id)}var V=function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class},W=function(e){switch(e.number_format){case a.comma_decimal:return["en-US","en"];case a.decimal_comma:return["de","es","it"];case a.space_comma:return["fr","sv","cs"];case a.system:return;default:return e.language}},K=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},q=function(e,t,i){var n=t?W(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==a.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(n,Y(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Y(e,i)).format(Number(e))}return"string"==typeof e?e:K(e,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Y=function(e,t){var i=j({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var a=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=a,i.maximumFractionDigits=a}return i},Z=function(e,t,i,a){var n=void 0!==a?a:t.state;if("unknown"===n||"unavailable"===n)return e("state.default."+n);if(V(t)){if("monetary"===t.attributes.device_class)try{return q(n,i,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return q(n,i)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o=B(t);if("input_datetime"===o){var r;if(void 0===a)return t.attributes.has_date&&t.attributes.has_time?(r=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),k(r,i)):t.attributes.has_date?(r=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),c(r,i)):t.attributes.has_time?((r=new Date).setHours(t.attributes.hour,t.attributes.minute),I(r,i)):t.state;try{var s=a.split(" ");if(2===s.length)return k(new Date(s.join("T")),i);if(1===s.length){if(a.includes("-"))return c(new Date(a+"T00:00"),i);if(a.includes(":")){var l=new Date;return I(new Date(l.toISOString().split("T")[0]+"T"+a),i)}}return a}catch(e){return a}}return"humidifier"===o&&"on"===n&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?q(n,i):t.attributes.device_class&&e("component."+o+".state."+t.attributes.device_class+"."+n)||e("component."+o+".state._."+n)||n},X="mdi:bookmark",J="lovelace",Q=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],ee=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],te=["input_number","input_select","input_text","scene","weblink"],ie=["camera","configurator","history_graph","scene"],ae=["closed","locked","off"],ne=new Set(["fan","input_boolean","light","switch","group","automation"]),oe="°C",re="°F",se="group.default_view",le=function(e,t,i,a){a=a||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n},de=new Set(["call-service","divider","section","weblink","cast","select"]),ce={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},he=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return a("hui-error-card",{type:"error",error:e,config:t})},a=function(e,t){var a=window.document.createElement(e);try{if(!a.setConfig)return;a.setConfig(t)}catch(a){return console.error(e,a),i(a.message,t)}return a};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var n=e.type;if(n&&n.startsWith("custom:"))n=n.substr(7);else if(t)if(de.has(n))n="hui-"+n+"-row";else{if(!e.entity)return i("Invalid config given.",e);var o=e.entity.split(".",1)[0];n="hui-"+(ce[o]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return a(n,e);var r=i("Custom element doesn't exist: "+e.type+".",e);r.style.display="None";var s=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),le(r,"ll-rebuild",{},r)})),r},ue=function(e,t,i){var a;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),o=this,r=i&&!a;clearTimeout(a),a=setTimeout((function(){a=null,i||e.apply(o,n)}),t),r&&e.apply(o,n)}},pe={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function me(e,t){if(e in pe)return pe[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var _e=function(e,t){var i=t.value||t,a=t.attribute?e.attributes[t.attribute]:e.state;switch(t.operator||"=="){case"==":return a===i;case"<=":return a<=i;case"<":return a<i;case">=":return a>=i;case">":return a>i;case"!=":return a!==i;case"regex":return a.match(i);default:return!1}},ge=function(e){le(window,"haptic",e)},ve=function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),le(window,"location-changed",{replace:i})},fe=function(e,t,i){void 0===i&&(i=!0);var a,n=N(t),o="group"===n?"homeassistant":n;switch(n){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}return e.callService(o,a,{entity_id:t})},ye=function(e,t){var i=ae.includes(e.states[t].state);return fe(e,t,i)},be=function(e,t,i,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(ge("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&le(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&ve(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(ye(t,i.entity),ge("success"));break;case"call-service":if(!a.service)return void ge("failure");var n=a.service.split(".",2);t.callService(n[0],n[1],a.service_data,a.target),ge("success");break;case"fire-dom-event":le(e,"ll-custom",a)}},we=function(e,t,i,a){var n;"double_tap"===a&&i.double_tap_action?n=i.double_tap_action:"hold"===a&&i.hold_action?n=i.hold_action:"tap"===a&&i.tap_action&&(n=i.tap_action),be(e,t,i,n)},xe=function(e,t,i,a,n){var o;if(n&&i.double_tap_action?o=i.double_tap_action:a&&i.hold_action?o=i.hold_action:!a&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(le(e,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&ge(o.haptic));break;case"navigate":o.navigation_path&&(ve(0,o.navigation_path),o.haptic&&ge(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&ge(o.haptic);break;case"toggle":i.entity&&(ye(t,i.entity),o.haptic&&ge(o.haptic));break;case"call-service":if(!o.service)return;var r=o.service.split(".",2),s=r[0],l=r[1],d=j({},o.service_data);"entity"===d.entity_id&&(d.entity_id=i.entity),t.callService(s,l,d,o.target),o.haptic&&ge(o.haptic);break;case"fire-dom-event":le(e,"ll-custom",o),o.haptic&&ge(o.haptic)}};function ke(e){return void 0!==e&&"none"!==e.action}function Se(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var a=t.get("hass");return!a||a.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}function $e(e){return void 0!==e&&"none"!==e.action}var ze=function(e,t,i){void 0===i&&(i=!0);var a={};t.forEach((function(t){if(ae.includes(e.states[t].state)===i){var n=N(t),o=["cover","lock"].includes(n)?n:"homeassistant";o in a||(a[o]=[]),a[o].push(t)}})),Object.keys(a).forEach((function(t){var n;switch(t){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}e.callService(t,n,{entity_id:a[t]})}))},Ee=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},Ce={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ie={binary_sensor:function(e,t){var i="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return me("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Ce)return Ce[t];if("battery"===t){var i=Number(e.state);if(isNaN(i))return"mdi:battery-unknown";var a=10*Math.round(i/10);return a>=100?"mdi:battery":a<=0?"mdi:battery-alert":"hass:battery-"+a}var n=e.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":me("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?me("input_datetime"):"mdi:calendar":"mdi:clock"}},Me=function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=N(e.entity_id);return t in Ie?Ie[t](e):me(t,e.state)}},8049:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliAreaCardEditor=void 0;const n=i(4437),o=i(2924),r=i(4356),s=[{value:"health",label:"Health"},...i(4139).plantAttributes];let l=class extends n.LitElement{constructor(){super(...arguments),this._computeLabel=e=>{var t;return null!==(t={title:"Titel",area:"Area",entities:"Pflanzen / Cycles (manuell)",show_rings:"Sensor-Ringe",show_labels:"Sensor-Labels (Mitte)",heatmap:"Heatmap-Sensor",heatmap_color:"Heatmap-Farbe",heatmap_secondary_color:"Heatmap-Sekundärfarbe",heatmap_opacity:"Heatmap-Opacity",legend:"Legende anzeigen",identifier:"Identifier (für List-/Plant-Card-Verkn.)"}[e.name])&&void 0!==t?t:e.name}}setConfig(e){this._config=e}get _schema(){return[{name:"title",selector:{text:{}}},{name:"area",selector:{area:{}}},{name:"entities",selector:{entity:{multiple:!0,filter:[{domain:"plant"},{domain:"cycle"}]}}},{name:"show_rings",selector:{select:{multiple:!0,mode:"list",options:s}}},{name:"show_labels",selector:{select:{multiple:!0,mode:"list",options:s}}},{name:"heatmap",selector:{select:{mode:"dropdown",options:[{value:"",label:"Aus"},...s]}}},{name:"heatmap_color",selector:{color_rgb:{}}},{name:"heatmap_secondary_color",selector:{color_rgb:{}}},{name:"heatmap_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}}},{name:"legend",selector:{boolean:{}}},{name:"identifier",selector:{text:{}}}]}render(){return this.hass&&this._config?n.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:n.html``}_valueChanged(e){(0,r.fireEvent)(this,"config-changed",{config:e.detail.value})}static get styles(){return n.css`ha-form { display: block; }`}};t.BrokkoliAreaCardEditor=l,a([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),a([(0,o.state)()],l.prototype,"_config",void 0),t.BrokkoliAreaCardEditor=l=a([(0,o.customElement)("brokkoli-area-card-editor")],l)},2434:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.default_show_labels=t.default_show_rings=t.AREA_CARD_EDITOR_NAME=t.AREA_CARD_NAME=void 0;const o=i(4437),r=i(2924),s=i(3073);i(9446),i(8049);const l=i(8063),d=i(9442),c=i(2413);i(9242);const h=i(3063);t.AREA_CARD_NAME="brokkoli-area-card",t.AREA_CARD_EDITOR_NAME="brokkoli-area-card-editor",t.default_show_rings=["health","moisture","temperature"],t.default_show_labels=[],window.customCards=window.customCards||[],window.customCards.push({type:t.AREA_CARD_NAME,name:"Brokkoli Area Card",preview:!0,description:"Zeigt die Positionen von Pflanzen in einem Bereich an"});let u=class extends o.LitElement{constructor(){super(...arguments),this._hassGeneration=0,this._beobachter=new h.HassBeobachter,this._handleEntitySelected=e=>{var t;this._selectedEntityId=e.detail.entityId;const i=e.detail.selectedEntities||[];if(null===(t=this.config)||void 0===t?void 0:t.identifier){const t=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:e.detail.entityId,selectedEntities:i.length?i:e.detail.entityId?[e.detail.entityId]:[]}});window.dispatchEvent(t)}}}setConfig(e){var i;if(!e.area&&!e.entity&&!(null===(i=e.entities)||void 0===i?void 0:i.length))throw new Error(this._hass?c.TranslationUtils.translateUI(this._hass,"area_config_error"):"Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren");this.config=Object.assign(Object.assign({},e),{show_rings:e.show_rings||[...t.default_show_rings],show_labels:e.show_labels||[],legend:void 0===e.legend||e.legend})}willUpdate(e){super.willUpdate(e),e.has("config")&&this._beobachter.markiereVeraltet()}_beobachteteEntities(e){var t;const i=(null===(t=this.config)||void 0===t?void 0:t.area)?this._getPlantEntitiesInArea(this.config.area):this._getAllPlantEntities();return l.PlantEntityUtils.collectPlantEntityIds(e,i)}set hass(e){const t=this._beobachter.betrifftUns(e,(e=>this._beobachteteEntities(e)));this._hass=e,t&&this._hassGeneration++}static getConfigElement(){return n(this,void 0,void 0,(function*(){return document.createElement(t.AREA_CARD_EDITOR_NAME)}))}static getStubConfig(){return{type:"custom:brokkoli-area-card",title:"Pflanzen-Bereich",area:"wohnzimmer"}}_getAllPlantEntities(){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").map((e=>e.entity_id)):[]}_getPlantEntitiesInArea(e){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").filter((t=>{const i=d.FilterUtils.getAreaForEntity(this._hass,t.entity_id);return i&&i.toLowerCase()===e.toLowerCase()})).map((e=>e.entity_id)):[]}_getEntities(){const e=this._hass;if(!e||!this.config)return[];const t=this._entityCache;if(t&&t.entities===e.entities&&t.devices===e.devices&&t.config===this.config&&t.result.every((t=>e.states[t])))return t.result;let i=[];i=this.config.area?this._getPlantEntitiesInArea(this.config.area):this._getAllPlantEntities(),this.config.entity&&i.push(this.config.entity),this.config.entities&&(i=[...i,...this.config.entities]);const a=i.filter((t=>e.states[t]));return this._entityCache={entities:e.entities,devices:e.devices,config:this.config,result:a},a}render(){if(!this.config||!this._hass)return o.html``;const e=this._getEntities(),t=e=>null==e?null:"number"==typeof e?`${e}px`:e,i=[t(this.config.height)?`height:${t(this.config.height)}`:"",t(this.config.width)?`width:${t(this.config.width)}`:""].filter(Boolean).join(";");return o.html`
      <ha-card style=${i||o.nothing}>
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
    `}getCardSize(){var e;const t=null===(e=this.config)||void 0===e?void 0:e.height;if("number"==typeof t)return Math.max(1,Math.round(t/50));if("string"==typeof t){const e=/^(\d+(?:\.\d+)?)px$/.exec(t.trim());if(e)return Math.max(1,Math.round(parseFloat(e[1])/50))}return 3}static get styles(){return o.css`
      ${s.positionStyles}
      
      .no-padding {
        padding: 0 !important;
      }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("request-area-id",(e=>{e.detail&&"function"==typeof e.detail.callback&&e.detail.callback(this.config.area||"")})),this.addEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}};a([(0,r.state)()],u.prototype,"_hassGeneration",void 0),a([(0,r.property)()],u.prototype,"config",void 0),a([(0,r.state)()],u.prototype,"_error",void 0),a([(0,r.state)()],u.prototype,"_selectedEntityId",void 0),u=a([(0,r.customElement)(t.AREA_CARD_NAME)],u),t.default=u},4828:function(e,t,i){var a,n,o=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,n)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},l=this&&this.__importStar||(a=function(e){return a=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},a(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i=a(e),n=0;n<i.length;n++)"default"!==i[n]&&o(t,e,i[n]);return r(t,e),t}),d=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const c=i(4437),h=i(2924),u=i(6800),p=i(9130),m=l(i(8330)),_=i(9429),g=i(4139),v=i(2135),f=i(2413),y=i(8063),b=i(3063);i(2813),i(8928),i(1151),i(4507),i(6822),i(5953),i(2618),i(1261),console.info(`%c BROKKOLI-CARD %c ${m.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:g.CARD_NAME,name:"Brokkoli card",preview:!0,description:"Custom brokkoli card for https://github.com/Olen/homeassistant-plant"});let w=n=class extends c.LitElement{constructor(){super(...arguments),this._hassGeneration=0,this._beobachter=new b.HassBeobachter,this._expanded={attributes:!1,timeline:!1,consumption:!1,history:!1,details:!1},this._expandedOrder=[],this._showGallery=!1,this._currentImageIndex=0,this._nextImageIndex=1,this._isFading=!1,this._activePopup=null,this._showFlyoutMenu=!1,this._detailsEditing=!1,this._detailsDraft={},this._popupData={},this._showPlantDropdown=!1,this.selectedPlantEntity=null,this._listenToSelector=null,this._selectedEntities=[],this._imageUrls=[],this._handleOutsideDropdownClick=()=>{this._showPlantDropdown=!1,this.requestUpdate()},this._handleOutsideClick=e=>{e.composedPath().some((e=>e instanceof HTMLElement&&e.classList.contains("flyout-menu")))||(this._showFlyoutMenu=!1,document.removeEventListener("click",this._handleOutsideClick))},this._handleCycleMemberSelected=e=>{var t;if((null===(t=this.config)||void 0===t?void 0:t.entity)&&this.stateObj&&e.detail){const{originalEntityId:t,selectedEntityId:i,sourceCardId:a}=e.detail;if(a===this)return;(t===this.config.entity||this._popupData.originalEntity&&this._popupData.originalEntity===t)&&(this.selectedPlantEntity=i,!this._popupData.originalEntity&&this.stateObj&&(this._popupData.originalEntity=this.stateObj.entity_id),this._hass&&(this.stateObj=this._hass.states[i],this.get_data(this._hass).then((()=>{var e,t;const a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-graph");a&&a.forEach((e=>{e&&(e.entityId=i,"function"==typeof e.updateDateRange?e.updateDateRange().then((()=>{"function"==typeof e.updateGraphData&&e.updateGraphData(!0)})):"function"==typeof e.updateGraphData&&e.updateGraphData(!0))}));const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-consumption");n&&n.forEach((e=>{e&&(e.entityId=i)})),this.requestUpdate()}))))}},this._handleCardEntitySelected=e=>{if(this._listenToSelector&&e.detail){const{sourceIdentifier:t,selectedEntityId:i,selectedEntities:a}=e.detail;if(t===this._listenToSelector){if(a&&Array.isArray(a)?this._selectedEntities=[...a]:this._selectedEntities=i?[i]:[],this.selectedPlantEntity=i,!i)return this.stateObj=void 0,void this.requestUpdate();this._hass&&i&&this._hass.states[i]&&(this.stateObj=this._hass.states[i],this.get_data(this._hass).then((()=>{var e,t;const a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-graph");a&&a.forEach((e=>{e&&(e.entityId=i,"function"==typeof e.updateDateRange?e.updateDateRange().then((()=>{"function"==typeof e.updateGraphData&&e.updateGraphData(!0)})):"function"==typeof e.updateGraphData&&e.updateGraphData(!0))}));const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-consumption");n&&n.forEach((e=>{e&&(e.entityId=i)})),this.requestUpdate()})))}}}}getGrowthPhaseIcon(e){return(0,g.getGrowthPhaseIcon)(e,this._hass,this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),window.removeEventListener("brokkoli-card-cycle-member-selected",this._handleCycleMemberSelected),window.removeEventListener("brokkoli-card-entity-selected",this._handleCardEntitySelected)}connectedCallback(){super.connectedCallback(),window.addEventListener("brokkoli-card-cycle-member-selected",this._handleCycleMemberSelected),window.addEventListener("brokkoli-card-entity-selected",this._handleCardEntitySelected)}willUpdate(e){super.willUpdate(e),(e.has("config")||e.has("selectedPlantEntity")||e.has("_selectedEntities"))&&this._beobachter.markiereVeraltet()}_beobachteteEntities(e){var t,i;const a=[this.selectedPlantEntity||(null===(t=this.config)||void 0===t?void 0:t.entity),...this._selectedEntities].filter(Boolean);if(0===a.length)return[];const n=new Set(y.PlantEntityUtils.collectPlantEntityIds(e,a));for(const t of a){const a=y.PlantEntityUtils.buildSensorMap(e,t).growth_phase,o=a?null===(i=e.states[a])||void 0===i?void 0:i.attributes.member_plants:void 0;null==o||o.forEach((e=>n.add(e)))}return[...n]}set hass(e){var t,i;const a=this._beobachter.betrifftUns(e,(e=>this._beobachteteEntities(e)));this._hass=e,a&&this._hassGeneration++,this.selectedPlantEntity?this.stateObj=e.states[this.selectedPlantEntity]:(null===(t=this.config)||void 0===t?void 0:t.entity)?this.stateObj=e.states[this.config.entity]:this.stateObj=void 0,(this.selectedPlantEntity||(null===(i=this.config)||void 0===i?void 0:i.entity))&&a&&(this._rebuildPlantInfo(e),this._berechneBildStand()!==this._bildStand&&this.get_data(e).then((()=>{this.requestUpdate()})))}static getConfigElement(){return d(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>l(i(43)))),document.createElement(g.CARD_EDITOR_NAME)}))}static getStubConfig(e){const t=e=>{if("object"==typeof e&&"entity_id"in e&&"string"==typeof e.entity_id&&(0===e.entity_id.indexOf("plant.")||0===e.entity_id.indexOf("cycle.")))return!!e};let i=[];try{i=Object.values(e.states).filter(t)}catch(e){console.info(`Unable to get ha-data: ${e}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:[...g.default_show_bars],show_elements:[...g.default_show_elements],option_elements:[...g.default_option_elements],default_expanded_options:[...g.initial_expanded_options]}}setConfig(e){var t;if(!e.entity&&!e.listen_to)throw new Error(this._hass?f.TranslationUtils.translateUI(this._hass,"config_error_entity_required"):"Du musst entweder eine Entity oder listen_to definieren");if(this.config=Object.assign(Object.assign({},e),{show_elements:e.show_elements||[...g.default_show_elements],option_elements:e.option_elements||[...g.default_option_elements],default_expanded_options:e.default_expanded_options||[...g.initial_expanded_options]}),e.listen_to&&(this._listenToSelector=e.listen_to),this._expandedOrder=[],null===(t=this.config.default_expanded_options)||void 0===t?void 0:t.length){const e=this.config.default_expanded_options.filter((e=>this.config.option_elements.includes(e)));this._expanded=Object.assign(Object.assign({},this._expanded),Object.fromEntries(e.map((e=>[e,!0])))),this._expandedOrder=[...e]}}_renderElement(e){switch(e){case"header":return this._renderHeader();case"attributes":return this._renderAttributes();case"options":return this._renderOptions();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return c.html``}}_renderHeader(){var e,t,i,a,n,o,r,s,l;const d=this.config.display_type===p.DisplayType.Compact?"header-compact":"header",h=(this.stateObj.entity_id.split(".")[1],this.stateObj.entity_id.startsWith("cycle.")),u=null!==this.selectedPlantEntity;let m="",y=[];if(u&&this._popupData.originalEntity){const e=this._popupData.originalEntity.split(".")[1],t=this._hass.states[`select.${e}_growth_phase`];t&&t.attributes.member_plants&&(y=t.attributes.member_plants)}else if(h){const n=null===(a=null===(i=null===(t=null===(e=this.plantinfo)||void 0===e?void 0:e.result)||void 0===t?void 0:t.helpers)||void 0===i?void 0:i.growth_phase)||void 0===a?void 0:a.entity_id,o=n?this._hass.states[n]:void 0;o&&o.attributes.member_plants&&(y=o.attributes.member_plants)}if(h)m=`${this.stateObj.attributes.member_count||0} ${f.TranslationUtils.translateUI(this._hass,"plants_count")}`;else if(this._listenToSelector&&this._selectedEntities.length>1){const e=f.TranslationUtils.translateUI(this._hass,"plants_selected");m=`${this._selectedEntities.length} ${e}`}else m=this.stateObj.attributes.strain+" - "+this.stateObj.attributes.breeder;const b=null===(o=null===(n=this.plantinfo)||void 0===n?void 0:n.result)||void 0===o?void 0:o.helpers,w=null===(r=null==b?void 0:b.growth_phase)||void 0===r?void 0:r.entity_id,x=null===(s=null==b?void 0:b.pot_size)||void 0===s?void 0:s.entity_id,k=w?this._hass.states[w]:void 0,S=x?this._hass.states[x]:void 0,$=f.TranslationUtils.translateUI(this._hass,"unavailable"),z=k?f.TranslationUtils.translateGrowthPhase(this._hass,k.state):$,E=S?S.state+"L":$,C=this.config.show_elements.length>1;return c.html`
            <div class="${d}">
                <div class="menu-button" @click="${this._toggleFlyoutMenu}">
                    <ha-icon icon="mdi:dots-vertical"></ha-icon>
                </div>
                ${this._showFlyoutMenu?this._renderFlyoutMenu():""}
                <div class="image-container">
                    <img class="back-image" 
                         src="${this._imageUrls[this._nextImageIndex]||this._imageUrls[this._currentImageIndex]||g.missingImage}">
                    <img class="front-image ${this._isFading?"fade":""}" 
                         src="${this._imageUrls[this._currentImageIndex]||g.missingImage}" 
                         @click="${()=>this._showGallery=!0}">
                </div>
                <span id="name" @click="${()=>(0,v.moreInfo)(this,this.stateObj.entity_id)}"> ${this.stateObj.attributes.friendly_name} <ha-icon .icon="mdi:${"problem"==this.stateObj.state.toLowerCase()?"alert-circle-outline":""}"></ha-icon>
                </span>
                <span id="battery">${(0,_.renderBattery)(this)}</span>
                ${h||u||null!==this._listenToSelector&&this._selectedEntities.length>0?c.html`
                    <div id="species" class="plant-dropdown-container">
                        <div @click="${this._togglePlantDropdown}" class="clickable-plants">
                            ${m}
                            <ha-icon icon="mdi:chevron-down"></ha-icon>
                        </div>
                        ${this._showPlantDropdown?this._renderPlantDropdown(y):""}
                    </div>
                    `:c.html`<span id="species">${m}</span>`}
                ${this.config.display_type!==p.DisplayType.Compact?c.html`
                <div id="status-container">
                    <span @click="${()=>x&&(0,v.moreInfo)(this,x)}">
                        <ha-icon icon="mdi:cup"></ha-icon>${E}
                    </span>
                    <span @click="${()=>w&&(0,v.moreInfo)(this,w)}">
                        <ha-icon icon="${this.getGrowthPhaseIcon(null!==(l=null==k?void 0:k.state)&&void 0!==l?l:z)}"></ha-icon>${z}
                    </span>
                    </div>
                `:""}
                </div>
                ${C?c.html`<div class="divider"></div>`:""}
            ${this._renderPopups()}
        `}_togglePlantDropdown(e){e.stopPropagation(),this._showPlantDropdown=!this._showPlantDropdown,this.requestUpdate(),this._showPlantDropdown&&document.addEventListener("click",this._handleOutsideDropdownClick,{once:!0})}_renderPlantDropdown(e){if(!e.length&&this._selectedEntities.length>0&&(e=[...this._selectedEntities]),!e.length){const e=f.TranslationUtils.translateUI(this._hass,"no_plants_found");return c.html`
                <div class="plant-dropdown">
                    <div class="plant-dropdown-item">${e}</div>
                </div>
            `}const t=[...null!==this.selectedPlantEntity&&this._popupData.originalEntity?[this._popupData.originalEntity]:[],...e];return c.html`
            <div class="plant-dropdown">
                ${t.map((e=>{const t=this._hass.states[e];if(!t){const t=f.TranslationUtils.translateUI(this._hass,"entity_not_found");return c.html`
                            <div class="plant-dropdown-item">
                                <div class="plant-dropdown-name">${e}</div>
                                <div class="plant-dropdown-info">${t}</div>
                            </div>
                        `}const i=e.startsWith("cycle."),a=t.attributes.friendly_name||e.split(".")[1];if(i){const e=f.TranslationUtils.translateUI(this._hass,"return_to_cycle");return c.html`
                            <div class="plant-dropdown-item" @click="${()=>this._returnToCycle()}">
                                <div class="plant-dropdown-name">${a}</div>
                                <div class="plant-dropdown-info">${e}</div>
                            </div>
                        `}const n=t.attributes.strain||"",o=t.attributes.breeder||"";return c.html`
                        <div class="plant-dropdown-item" @click="${()=>this._selectPlant(e)}">
                            <div class="plant-dropdown-name">${a}</div>
                            <div class="plant-dropdown-info">${n} - ${o}</div>
                        </div>
                    `}))}
            </div>
        `}_selectPlant(e){this.selectedPlantEntity=e,this._showPlantDropdown=!1,!this._popupData.originalEntity&&this.stateObj&&(this._popupData.originalEntity=this.stateObj.entity_id),this._hass&&(this.stateObj=this._hass.states[e],this.get_data(this._hass).then((()=>{var t,i,a;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-graph");n&&n.forEach((t=>{t&&(t.entityId=e,"function"==typeof t.updateDateRange?t.updateDateRange().then((()=>{"function"==typeof t.updateGraphData&&t.updateGraphData(!0)})):"function"==typeof t.updateGraphData&&t.updateGraphData(!0))}));const o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll("flower-consumption");o&&o.forEach((t=>{t&&(t.entityId=e)}));const r=new CustomEvent("brokkoli-card-cycle-member-selected",{bubbles:!0,composed:!0,detail:{originalEntityId:this._popupData.originalEntity||(null===(a=this.config)||void 0===a?void 0:a.entity),selectedEntityId:e,sourceCardId:this}});window.dispatchEvent(r),this.requestUpdate()})))}_toggleFlyoutMenu(e){e.stopPropagation(),this._showFlyoutMenu=!this._showFlyoutMenu,this._showFlyoutMenu?document.addEventListener("click",this._handleOutsideClick):document.removeEventListener("click",this._handleOutsideClick)}_renderFlyoutMenu(){const e=null!==this.selectedPlantEntity;return c.html`
            <div class="flyout-menu">
                ${e?c.html`
                    <div class="flyout-menu-item" @click="${this._returnToCycle}">
                        <ha-icon icon="mdi:arrow-left"></ha-icon>
                        <span>${f.TranslationUtils.translateUI(this._hass,"return_to_cycle")}</span>
                    </div>
                    <div class="flyout-menu-divider"></div>
                `:""}
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="clone",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:content-duplicate"></ha-icon>
                    <span>${f.TranslationUtils.translateUI(this._hass,"clone_plant")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="move",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:arrow-decision"></ha-icon>
                    <span>${f.TranslationUtils.translateUI(this._hass,"move_to_cycle")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="replace",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                    <span>${f.TranslationUtils.translateUI(this._hass,"replace_sensors")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="remove",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                    <span>${f.TranslationUtils.translateUI(this._hass,"delete_plant")}</span>
                </div>
            </div>
        `}_returnToCycle(){this._popupData.originalEntity&&this._hass&&(this.selectedPlantEntity=null,this.stateObj=this._hass.states[this._popupData.originalEntity],this.get_data(this._hass).then((()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-graph");i&&i.forEach((e=>{e&&(e.entityId=this._popupData.originalEntity,"function"==typeof e.updateDateRange?e.updateDateRange().then((()=>{"function"==typeof e.updateGraphData&&e.updateGraphData(!0)})):"function"==typeof e.updateGraphData&&e.updateGraphData(!0))}));const a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-consumption");a&&a.forEach((e=>{e&&(e.entityId=this._popupData.originalEntity)}));const n=new CustomEvent("brokkoli-card-cycle-member-selected",{bubbles:!0,composed:!0,detail:{originalEntityId:this._popupData.originalEntity,selectedEntityId:this._popupData.originalEntity,sourceCardId:this}});window.dispatchEvent(n),this._popupData.originalEntity=null,this.requestUpdate()}))),this._showPlantDropdown=!1}_handleMoveToCycle(){return d(this,void 0,void 0,(function*(){yield this._hass.callService("plant","move_to_cycle",{plant_entity:this.stateObj.entity_id,cycle_entity:this._popupData.cycle_entity}),this._closePopup()}))}_closePopup(){this._activePopup=null,this._popupData={},this.requestUpdate()}_renderPopups(){if(!this._activePopup)return c.html``;switch(this._activePopup){case"clone":return c.html`
                    <plant-clone-dialog
                        .hass="${this._hass}"
                        .plant="${this.stateObj}"
                        @dialog-closed="${this._closePopup}"
                        @plant-cloned="${this._closePopup}"
                    ></plant-clone-dialog>
                `;case"move":return this._renderMovePopup();case"remove":return c.html`
                    <plant-delete-dialog
                        .hass="${this._hass}"
                        .plant="${this.stateObj}"
                        @dialog-closed="${this._closePopup}"
                    ></plant-delete-dialog>
                `;case"replace":return c.html`
                    <plant-replace-sensors-dialog
                        .hass="${this._hass}"
                        .plant="${this.stateObj}"
                        @dialog-closed="${this._closePopup}"
                    ></plant-replace-sensors-dialog>
                `;default:return c.html``}}_renderMovePopup(){const e=Object.entries(this._hass.states).filter((([e])=>e.startsWith("cycle."))).map((([e,t])=>{var i;return{entity_id:e,name:(null===(i=t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".")[1]}}));return c.html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${e=>e.stopPropagation()}">
                    <div class="popup-title">${f.TranslationUtils.translateUI(this._hass,"move_to_cycle")}</div>
                    <div class="form-field">
                        <label>${f.TranslationUtils.translateUI(this._hass,"select_cycle")}</label>
                        <select @change="${e=>this._popupData.cycle_entity=e.target.value}">
                            <option value="">${f.TranslationUtils.translateUI(this._hass,"please_select")}</option>
                            ${e.map((e=>c.html`
                                <option value="${e.entity_id}">${e.name}</option>
                            `))}
                        </select>
                    </div>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${f.TranslationUtils.translateUI(this._hass,"cancel")}</button>
                        <button @click="${this._handleMoveToCycle}" ?disabled="${!this._popupData.cycle_entity}">
                            ${f.TranslationUtils.translateUI(this._hass,"move")}
                        </button>
                    </div>
                </div>
            </div>
        `}_renderOptions(){var e,t,i,a,n;const o=this.config.option_elements;if(0===o.length)return c.html``;const r={attributes:{icon:"mdi:tune",expanded:null===(e=this._expanded)||void 0===e?void 0:e.attributes},timeline:{icon:"mdi:chart-timeline-variant",expanded:null===(t=this._expanded)||void 0===t?void 0:t.timeline},consumption:{icon:"mdi:chart-box-outline",expanded:null===(i=this._expanded)||void 0===i?void 0:i.consumption},history:{icon:"mdi:history",expanded:null===(a=this._expanded)||void 0===a?void 0:a.history},details:{icon:"mdi:information-outline",expanded:null===(n=this._expanded)||void 0===n?void 0:n.details}};return c.html`
            <div class="options-container">
                ${o.map((e=>{if(e in r){const t=r[e];return c.html`
                            <div class="options-section ${t.expanded?"expanded":""}" 
                                 @click="${t=>this._toggleExpand(t,e)}">
                                <ha-icon icon="${t.icon}"></ha-icon>
                            </div>
                        `}return""}))}
            </div>
        `}_renderTimeline(){var e;const t=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("timeline")?c.html`
                <div class="timeline-container">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-timeline>
                </div>
            `:(null===(e=this._expanded)||void 0===e?void 0:e.timeline)?c.html`
                <div class="expanded-content show" data-section="timeline">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-timeline>
                </div>
            `:c.html`<div class="expanded-content" data-section="timeline"></div>`}_renderConsumption(){var e;const t=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("consumption")?c.html`
                <div class="component-container">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-consumption>
                </div>
            `:(null===(e=this._expanded)||void 0===e?void 0:e.consumption)?c.html`
                <div class="expanded-content show" data-section="consumption">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${t}
                    ></flower-consumption>
                </div>
            `:c.html`<div class="expanded-content" data-section="consumption"></div>`}_renderHistory(){var e;const t=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("history")?c.html`
                <div class="component-container">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${t}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `:(null===(e=this._expanded)||void 0===e?void 0:e.history)?c.html`
                <div class="expanded-content show" data-section="history">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${t}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `:c.html`<div class="expanded-content" data-section="history"></div>`}_startDetailsEdit(){var e,t;const i={};for(const a of n.DETAIL_FIELDS)a.readonly||(i[a.key]=String(null!==(t=this.stateObj.attributes[null!==(e=a.attr)&&void 0!==e?e:a.key])&&void 0!==t?t:""));this._detailsDraft=i,this._detailsEditing=!0}_saveDetailsEdit(){return d(this,void 0,void 0,(function*(){var e;const t={};for(const[i,a]of Object.entries(this._detailsDraft))a!==String(null!==(e=this.stateObj.attributes[i])&&void 0!==e?e:"")&&(t[i]=a);Object.keys(t).length>0&&(yield this._hass.callService("plant","update_plant_attributes",Object.assign({entity_id:this.stateObj.entity_id},t))),this._detailsEditing=!1}))}_renderDetailFields(){const e=this._detailsEditing;return c.html`
            <div class="plant-details">
                <div class="details-actions">
                    ${e?c.html`
                        <ha-icon icon="mdi:close" title="${f.TranslationUtils.translateUI(this._hass,"cancel")}"
                                 @click="${()=>{this._detailsEditing=!1}}"></ha-icon>
                        <ha-icon icon="mdi:check" title="${f.TranslationUtils.translateUI(this._hass,"save")}"
                                 @click="${this._saveDetailsEdit}"></ha-icon>
                    `:c.html`
                        <ha-icon icon="mdi:pencil" title="${f.TranslationUtils.translateUI(this._hass,"edit")}"
                                 @click="${this._startDetailsEdit}"></ha-icon>
                    `}
                </div>
                ${n.DETAIL_FIELDS.map((t=>{var i,a,n,o;const r=String(null!==(a=this.stateObj.attributes[null!==(i=t.attr)&&void 0!==i?i:t.key])&&void 0!==a?a:"");return c.html`
                        <div class="detail-item ${t.wide?"full-width":""}">
                            <span class="label">${f.TranslationUtils.translateField(this._hass,t.key)}</span>
                            ${e&&!t.readonly?t.multiline?c.html`<textarea class="detail-edit" rows="3"
                                            .value="${null!==(n=this._detailsDraft[t.key])&&void 0!==n?n:""}"
                                            @input="${e=>{this._detailsDraft[t.key]=e.target.value}}"></textarea>`:c.html`<input type="text" class="detail-edit"
                                            .value="${null!==(o=this._detailsDraft[t.key])&&void 0!==o?o:""}"
                                            @input="${e=>{this._detailsDraft[t.key]=e.target.value}}">`:t.link&&r?c.html`<a href="${r}" target="_blank" class="value link">${r}</a>`:c.html`<span class="value">${r||"-"}</span>`}
                        </div>
                    `}))}
            </div>
        `}_renderDetails(){var e;return this.config.show_elements.includes("details")?this._renderDetailFields():(null===(e=this._expanded)||void 0===e?void 0:e.details)?c.html`
                <div class="expanded-content show" data-section="details">
                    ${this._renderDetailFields()}
                </div>
            `:c.html`<div class="expanded-content" data-section="details"></div>`}_renderAttributes(){var e;return this.config.show_elements.includes("attributes")?c.html`${(0,_.renderAttributes)(this)}`:(null===(e=this._expanded)||void 0===e?void 0:e.attributes)?c.html`
                <div class="expanded-content show" data-section="attributes">
                    ${(0,_.renderAttributes)(this)}
                </div>
            `:c.html`<div class="expanded-content" data-section="attributes"></div>`}render(){if(!this.config||!this._hass)return c.html``;if(!this.stateObj&&!this._listenToSelector){const e=f.TranslationUtils.translateUI(this._hass,"entity_unavailable"),t=f.TranslationUtils.translateUI(this._hass,"no_entity_configured");return c.html`
                <hui-warning>
                ${e}: ${this.config.entity||t}
                </hui-warning>
              `}if(!this.stateObj&&this._listenToSelector)return c.html``;const e=this.config.show_elements,t="header"===e[0]&&this.config.display_type!==p.DisplayType.Compact?"card-margin-top":"",i=e.map((e=>this._renderElement(e))),a=this._expandedOrder.filter((t=>!e.includes(t)&&this._expanded[t])).map((e=>{switch(e){case"attributes":return this._renderAttributes();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return c.html``}})),n=this.config.option_elements.filter((t=>!e.includes(t)&&!this._expandedOrder.includes(t))).map((e=>{switch(e){case"attributes":return this._renderAttributes();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return c.html``}}));return c.html`
            <ha-card class="${t}">
                ${i}
                ${a}
                ${n}
            </ha-card>
            ${this._showGallery?c.html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${this.stateObj.entity_id}
                    .images=${this._imageUrls}
                    .onClose=${()=>this._showGallery=!1}
                ></flower-gallery>
            `:""}
        `}_toggleExpand(e,t){e.stopPropagation();const i=Object.assign({},this._expanded),a=!i[t];i[t]=a;let n=[...this._expandedOrder];a?n.includes(t)||n.push(t):n=n.filter((e=>e!==t)),this._expanded=i,this._expandedOrder=n,this.requestUpdate()}_berechneBildStand(){var e,t,i,a;const n=null===(e=this.stateObj)||void 0===e?void 0:e.attributes.images;return[this.selectedPlantEntity||(null===(t=this.config)||void 0===t?void 0:t.entity)||"",null!==(a=null===(i=this.stateObj)||void 0===i?void 0:i.attributes.entity_picture)&&void 0!==a?a:"",(null!=n?n:[]).join(",")].join("|")}_rebuildPlantInfo(e){var t,i;const a=this.selectedPlantEntity||(null===(t=this.config)||void 0===t?void 0:t.entity);this.plantinfo={result:a&&null!==(i=y.PlantEntityUtils.buildPlantView(e,a))&&void 0!==i?i:{}}}get_data(e){return d(this,void 0,void 0,(function*(){var t;try{if(this._rebuildPlantInfo(e),this._bildStand=this._berechneBildStand(),null===(t=this.stateObj)||void 0===t?void 0:t.attributes.images){const e=this.stateObj.attributes.download_path||"/local/images/plants/",t=[...this.stateObj.attributes.images].sort(((e,t)=>{var i,a;const n=(null===(i=e.match(/_(\d{8}_\d{6})/))||void 0===i?void 0:i[1])||"",o=(null===(a=t.match(/_(\d{8}_\d{6})/))||void 0===a?void 0:a[1])||"";return n.localeCompare(o)})),i=yield this._filterImagesAfterFirstPhase(t);this._imageUrls=i.map((t=>`${e}${t}`)),this.stateObj.attributes.entity_picture&&this._imageUrls.unshift(this.stateObj.attributes.entity_picture),this._currentImageIndex=0,this._nextImageIndex=this._imageUrls.length>1?1:0,this._isFading=!1,this._startImageRotation()}else this._imageUrls=[],this._currentImageIndex=0,this._nextImageIndex=0,this._imageRotationInterval&&(clearInterval(this._imageRotationInterval),this._imageRotationInterval=void 0)}catch(e){this.plantinfo={result:{}},this._imageUrls=[],this._currentImageIndex=0,this._nextImageIndex=0}}))}getCardSize(){return 5}static get styles(){return u.style}_changeImage(){return d(this,void 0,void 0,(function*(){if(this._imageUrls.length<=1)return;this._nextImageIndex=(this._currentImageIndex+1)%this._imageUrls.length;const e=new Image;e.src=this._imageUrls[this._nextImageIndex],yield new Promise((t=>{e.onload=t,e.onerror=t})),this._isFading=!0,this.requestUpdate(),yield new Promise((e=>setTimeout(e,500))),this._currentImageIndex=this._nextImageIndex,this._isFading=!1,this.requestUpdate()}))}_startImageRotation(){this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this._imageUrls.length>1&&(this._imageRotationInterval=setInterval((()=>{this._changeImage()}),1e4))}_filterImagesAfterFirstPhase(e){return d(this,void 0,void 0,(function*(){var t,i,a,n,o;if(!(null===(n=null===(a=null===(i=null===(t=this.plantinfo)||void 0===t?void 0:t.result)||void 0===i?void 0:i.helpers)||void 0===a?void 0:a.growth_phase)||void 0===n?void 0:n.entity_id))return e;const r=this.plantinfo.result.helpers.growth_phase.entity_id,s=null===(o=this._hass)||void 0===o?void 0:o.states[r];if(!s)return e;const l=["seeds","germination","rooting","growing","flowering","harvested","removed"];let d=null;for(const e of l){const t=s.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){d=new Date(t);break}}return d?e.filter((e=>{const t=e.match(/_(\d{8}_\d{6})/);if(!t)return!0;const i=t[1],a=i.slice(0,4),n=i.slice(4,6),o=i.slice(6,8),r=i.slice(9,11),s=i.slice(11,13);return new Date(`${a}-${n}-${o}T${r}:${s}:00`)>=d})):e}))}};w.DETAIL_FIELDS=[{key:"strain",attr:"variety",readonly:!0},{key:"feminized",readonly:!0},{key:"effects"},{key:"smell"},{key:"taste"},{key:"phenotype"},{key:"hunger"},{key:"growth_stretch"},{key:"flower_stretch"},{key:"mold_resistance"},{key:"difficulty"},{key:"yield"},{key:"website",link:!0},{key:"notes"},{key:"infotext1",wide:!0,multiline:!0},{key:"infotext2",wide:!0,multiline:!0},{key:"lineage",wide:!0}],s([(0,h.state)()],w.prototype,"_hassGeneration",void 0),s([(0,h.property)()],w.prototype,"config",void 0),s([(0,h.state)()],w.prototype,"_expanded",void 0),s([(0,h.state)()],w.prototype,"_expandedOrder",void 0),s([(0,h.state)()],w.prototype,"_showGallery",void 0),s([(0,h.state)()],w.prototype,"_currentImageIndex",void 0),s([(0,h.state)()],w.prototype,"_nextImageIndex",void 0),s([(0,h.state)()],w.prototype,"_isFading",void 0),s([(0,h.state)()],w.prototype,"_activePopup",void 0),s([(0,h.state)()],w.prototype,"_showFlyoutMenu",void 0),s([(0,h.state)()],w.prototype,"_detailsEditing",void 0),s([(0,h.state)()],w.prototype,"_popupData",void 0),s([(0,h.state)()],w.prototype,"_showPlantDropdown",void 0),s([(0,h.state)()],w.prototype,"selectedPlantEntity",void 0),s([(0,h.state)()],w.prototype,"_listenToSelector",void 0),s([(0,h.state)()],w.prototype,"_selectedEntities",void 0),w=n=s([(0,h.customElement)(g.CARD_NAME)],w),t.default=w},2489:function(e,t,i){var a,n=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,n)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},s=this&&this.__importStar||(a=function(e){return a=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},a(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i=a(e),r=0;r<i.length;r++)"default"!==i[r]&&n(t,e,i[r]);return o(t,e),t}),l=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const d=i(4437),c=i(2924),h=i(6800),u=i(1772),p=s(i(8330)),m=i(9442),_=i(6754),g=i(8265),v=i(3048),f=i(8063),y=i(8358),b=i(3063),w=i(7361),x=i(2413);i(9242),i(2e3),i(1151),i(4507),i(1894),console.info(`%c BROKKOLI-LIST-CARD %c ${p.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"brokkoli-list-card",name:"Brokkoli List Card",preview:!0,description:"Eine tabellarische Übersicht aller Pflanzen"});let k=class extends d.LitElement{constructor(){super(...arguments),this._hassGeneration=0,this._beobachter=new b.HassBeobachter,this._showBulkMenu=!1,this._showBulkDelete=!1,this._lastSelectedEntityId=null,this.plantEntities=[],this.plantIds="",this.EDITABLE_PLANT_ATTRIBUTES=_.ConfigUtils.EDITABLE_PLANT_ATTRIBUTES}static getStubConfig(){return _.ConfigUtils.getDefaultConfig()}static getConfigElement(){return l(this,void 0,void 0,(function*(){return document.createElement("brokkoli-list-card-editor")}))}setConfig(e){this.config=Object.assign(Object.assign({},_.ConfigUtils.getDefaultConfig(this._hass)),e),this.stateManager&&this.stateManager.updateConfig(this.config)}_beobachteteEntities(e){const t=f.PlantEntityUtils.getPlantEntities(e).map((e=>e.entity_id));return f.PlantEntityUtils.collectPlantEntityIds(e,t)}set hass(e){const t=this._beobachter.betrifftUns(e,(e=>this._beobachteteEntities(e)));if(this._hass=e,!e)return;this.stateManager||(this.stateManager=new w.StateManager(e,this.config,(()=>this.requestUpdate())));const i=f.PlantEntityUtils.getPlantEntities(e).map((e=>e.entity_id)).join(",");if(i!==this.plantIds)return this.plantIds=i,this._beobachter.markiereVeraltet(),void this.updatePlantEntities();t&&(this._hassGeneration++,this._refreshExistingEntities())}_refreshExistingEntities(){return l(this,void 0,void 0,(function*(){if(this._hass){for(let e=0;e<this.plantEntities.length;e++){const t=this.plantEntities[e],i=this._hass.states[t.entity_id],a=f.PlantEntityUtils.buildPlantView(this._hass,t.entity_id),n=this._buildSensorMap(a,t.entity_id);this.plantEntities[e]=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:n,_apiInfo:a})})}this.requestUpdate()}}))}_buildSensorMap(e,t){if(!e)return f.PlantEntityUtils.buildSensorMap(this._hass,t);const i={};for(const t in e)e[t]&&"object"==typeof e[t]&&e[t].sensor&&(i[{moisture:"soil_moisture",humidity:"air_humidity",ph:"ph"}[t]||t]=e[t].sensor);if(e.diagnostic_sensors)for(const t in e.diagnostic_sensors)e.diagnostic_sensors[t]&&e.diagnostic_sensors[t].entity_id&&(i[{moisture:"soil_moisture",humidity:"air_humidity",total_integral:"total_ppfd_mol_integral",total_water:"total_water_consumption",total_fertilizer:"total_fertilizer_consumption"}[t]||t]=e.diagnostic_sensors[t].entity_id);if(e.helpers)for(const t in e.helpers)e.helpers[t]&&e.helpers[t].entity_id&&(i[t]=e.helpers[t].entity_id);return Object.assign(Object.assign({},i),f.PlantEntityUtils.buildSensorMap(this._hass,t))}updatePlantEntities(){return l(this,void 0,void 0,(function*(){if(!this._hass)return;const e=f.PlantEntityUtils.getPlantEntities(this._hass),t=[];for(const i of e)try{const e=f.PlantEntityUtils.buildPlantView(this._hass,i.entity_id),a=this._buildSensorMap(e,i.entity_id),n=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:a,_apiInfo:e})});t.push(n)}catch(e){console.error(`[FLOWER-LIST] Fehler beim Anreichern von ${i.entity_id}:`,e),t.push(i)}this.plantEntities=t,this.requestUpdate()}))}getVisibleColumns(){return _.ConfigUtils.getVisibleColumns(this.config,this._hass)}_handleAddPlant(){var e;if(!this._hass)return;this._removeDialog();const t=document.createElement("plant-create-dialog");document.body.appendChild(t),t.hass=this._hass,t.position={x:50,y:50},t.areaId=(null===(e=this.config)||void 0===e?void 0:e.area)||"",t.addEventListener("dialog-closed",(()=>this._handleDialogClosed())),this.plantDialog=t}_removeDialog(){var e;null===(e=this.plantDialog)||void 0===e||e.remove(),this.plantDialog=void 0}_handleDialogClosed(){this._removeDialog(),this.updatePlantEntities()}connectedCallback(){super.connectedCallback(),this.addEventListener("flower-image-click",this._handleFlowerImageClick.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("flower-image-click",this._handleFlowerImageClick.bind(this)),this._removeDialog()}_handleFlowerImageClick(e){if(!this.stateManager)return;const t=e.detail.entityId;t&&this.stateManager.handleGalleryOpen(t)}_handleRowClick(e,t){var i;if(e.target.closest(".clickable"))return;if(!this.stateManager)return;if(this.stateManager.getState().multiSelectMode)return;const a=this._lastSelectedEntityId===t.entity_id;if(this._lastSelectedEntityId=a?null:t.entity_id,null===(i=this.config)||void 0===i?void 0:i.identifier){const e=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:this._lastSelectedEntityId}});window.dispatchEvent(e)}}render(){var e,t,i,a,n;if(!this._hass||!this.stateManager)return d.html``;const o=this.stateManager.getState(),r=v.SortUtils.getSortedPlants(m.FilterUtils.getFilteredPlants(this._hass,this.plantEntities,o.filterState,o.searchQuery,this.EDITABLE_PLANT_ATTRIBUTES),o.sortColumn,o.sortDirection,this._hass),s=this.getVisibleColumns(),l=!1!==(null===(t=null===(e=this.config)||void 0===e?void 0:e.add_plant)||void 0===t?void 0:t.enabled),c=(null===(a=null===(i=this.config)||void 0===i?void 0:i.add_plant)||void 0===a?void 0:a.position)||"bottom";return d.html`
            <div class="card-container">
                <ha-card>
                    ${g.BrokkoliListComponents.renderHeader(null===(n=this.config)||void 0===n?void 0:n.title,this._hass)}

                    ${o.multiSelectMode&&o.selectedPlants.size>0?d.html`
                        <div class="bulk-actions">
                            <button class="bulk-trigger" @click=${e=>{e.stopPropagation(),this._showBulkMenu=!this._showBulkMenu}}>
                                <ha-icon icon="mdi:dots-vertical"></ha-icon>
                            </button>
                            ${this._showBulkMenu?d.html`
                                <div class="bulk-menu">
                                    <div class="bulk-item danger" @click=${e=>{e.stopPropagation(),this._showBulkMenu=!1,this._showBulkDelete=!0}}>
                                        <ha-icon icon="mdi:delete"></ha-icon>
                                        <span>${x.TranslationUtils.translateUI(this._hass,"delete_selected")} (${o.selectedPlants.size})</span>
                                    </div>
                                </div>
                            `:""}
                        </div>
                    `:""}

                    ${this._showBulkDelete?d.html`
                        <plant-delete-dialog
                            .hass=${this._hass}
                            .plants=${this.plantEntities.filter((e=>o.selectedPlants.has(e.entity_id)))}
                            @dialog-closed=${()=>{this._showBulkDelete=!1}}
                            @plant-deleted=${()=>{var e;null===(e=this.stateManager)||void 0===e||e.toggleMultiSelect(),this.updatePlantEntities()}}
                        ></plant-delete-dialog>
                    `:""}
                    
                    ${g.BrokkoliListComponents.renderToolbar(this.config,o.searchQuery,o.filterMode,o.multiSelectMode,(()=>this.stateManager.toggleFilterMode()),(()=>this.stateManager.toggleMultiSelect()),(e=>this.stateManager.handleSearch(e)),(()=>this.stateManager.clearSearch()),this._hass)}

                    ${o.filterMode?g.BrokkoliListComponents.renderFilterSidebar(s,o.filterState,(e=>this.stateManager.toggleEntityType(e)),((e,t)=>this.stateManager.toggleFilter(e,t)),this._hass,this.plantEntities):""}

                    <div class="table-container${o.filterMode?" filtered":""}">
                        <table>
                            ${g.BrokkoliListComponents.renderTableHeader(s,o.multiSelectMode,o.sortColumn,o.sortDirection,(e=>this.stateManager.handleSort(e)),!0)}
                            <tbody>
                                ${l&&"top"===c?g.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                                ${r.map((e=>g.BrokkoliListComponents.renderTableRow(e,s,o.multiSelectMode,o.selectedPlants,((e,t)=>this.stateManager.togglePlantSelection(e,t)),((e,t,i)=>this.stateManager.handleCellClick(e,t,i,this.dispatchEvent.bind(this))),((e,t)=>this._handleRowClick(e,t)),(e=>this.stateManager.getCursorStyle(e)),((e,t)=>y.CellRenderer.renderCell({hass:this._hass,plant:e,columnId:t,editingCell:o.editingCell,onCellClick:i=>this.stateManager.handleCellClick(i,e,t,this.dispatchEvent.bind(this)),onInputUpdate:(i,a)=>this.stateManager.handleInputUpdate(i,e,t,a),onRowClick:t=>this._handleRowClick(t,e)})),d.html`<plant-actions-menu
                                            .hass=${this._hass}
                                            .plant=${e}
                                            @plant-deleted=${()=>this.updatePlantEntities()}
                                        ></plant-actions-menu>`)))}
                                ${l&&"bottom"===c?g.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                            </tbody>
                        </table>
                    </div>
                </ha-card>
            </div>
            
            ${o.showGallery?d.html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${o.galleryEntityId||""}
                    .images=${o.galleryImages}
                    .onClose=${()=>this.stateManager.closeGallery()}
                ></flower-gallery>
            `:""}
        `}getCardSize(){return 1+Math.ceil(this.plantEntities.length/2)}static get styles(){return[h.style,u.flowerListStyle]}};r([(0,c.state)()],k.prototype,"_hassGeneration",void 0),r([(0,c.property)()],k.prototype,"config",void 0),r([(0,c.state)()],k.prototype,"_showBulkMenu",void 0),r([(0,c.state)()],k.prototype,"_showBulkDelete",void 0),r([(0,c.state)()],k.prototype,"_lastSelectedEntityId",void 0),k=r([(0,c.customElement)("brokkoli-list-card")],k),t.default=k},5419:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME=t.SENSOR_ASSIGNMENT_CARD_NAME=void 0;const o=i(4437),r=i(2924);i(9961),i(1536);const s=i(8063),l=i(3063);t.SENSOR_ASSIGNMENT_CARD_NAME="brokkoli-sensor-assignment-card",t.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME="brokkoli-sensor-assignment-card-editor",window.customCards=window.customCards||[],window.customCards.push({type:t.SENSOR_ASSIGNMENT_CARD_NAME,name:"Brokkoli Sensor-Zuweisung",preview:!0,description:"Sensoren per Drag & Drop Pflanzen zuweisen"});let d=class extends o.LitElement{constructor(){super(...arguments),this._hassGeneration=0,this._beobachter=new l.HassBeobachter}setConfig(e){this.config=Object.assign({},e)}connectedCallback(){super.connectedCallback(),this.toggleAttribute("in-panel-view",this._isInPanelView())}_isInPanelView(){var e;let t=this;for(;t;){if(t instanceof HTMLElement&&"hui-panel-view"===t.localName)return!0;const i=t.parentElement;t=null!=i?i:null!==(e=t.getRootNode().host)&&void 0!==e?e:null}return!1}get _heightStyle(){var e;const t=null===(e=this.config)||void 0===e?void 0:e.height;return void 0===t||""===t?"":"number"==typeof t?`height: ${t}px;`:`height: ${t};`}_beobachteteEntities(e){const t=s.PlantEntityUtils.getPlantEntities(e,"plant").map((e=>e.entity_id));return s.PlantEntityUtils.collectPlantEntityIds(e,t)}set hass(e){const t=this._beobachter.betrifftUns(e,(e=>this._beobachteteEntities(e)));this._hass=e,t&&this._hassGeneration++}static getConfigElement(){return n(this,void 0,void 0,(function*(){return document.createElement(t.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME)}))}static getStubConfig(){return{type:`custom:${t.SENSOR_ASSIGNMENT_CARD_NAME}`,title:"Sensor-Zuweisung"}}render(){var e;return this.config&&this._hass?o.html`
      <ha-card style="${this._heightStyle}">
        ${this.config.title?o.html`<h1 class="card-header">${this.config.title}</h1>`:""}
        <div class="sa-card-body">
          <sensor-assignment
            .hass=${this._hass}
            .defaultView=${null!==(e=this.config.view)&&void 0!==e?e:"flower"}
            .defaultPhases=${this.config.plant_phases}
            .defaultAreas=${this.config.plant_areas}
          ></sensor-assignment>
        </div>
      </ha-card>
    `:o.html``}getCardSize(){return 6}getGridOptions(){return{rows:8,columns:12,min_rows:4,min_columns:6}}static get styles(){return o.css`
      /* Die Höhe muss von :host bis zur innersten Scroll-Box durchgereicht
         werden. Bricht die Kette an einer Stelle (fehlendes height:100% oder
         min-height:0), fällt der Inhalt auf seine natürliche Höhe zurück und
         die eingestellte Kartenhöhe bleibt teils leer bzw. wird überlaufen. */
      :host {
        display: block;
        height: 100%;
      }

      /* Panel-View: HA gibt hier keine Höhe vor, also selbst gegen den Viewport
         rechnen. --header-height ist die Variable, mit der HA seine Kopfleiste
         bemisst; die 8px sind der Außenabstand, den die Panel-View setzt. */
      :host([in-panel-view]) {
        height: calc(100vh - var(--header-height, 56px) - 8px);
      }

      ha-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      .card-header {
        flex: 0 0 auto;
        margin: 0;
        padding: 12px 16px 4px;
        font-size: 1.3em;
        font-weight: 400;
        line-height: 1.3;
      }

      .sa-card-body {
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
      }

      sensor-assignment {
        flex: 1 1 auto;
        min-height: 0;
      }
    `}};a([(0,r.state)()],d.prototype,"_hassGeneration",void 0),a([(0,r.property)()],d.prototype,"config",void 0),d=a([(0,r.customElement)(t.SENSOR_ASSIGNMENT_CARD_NAME)],d),t.default=d},7814:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliAreaLegend=void 0;const n=i(4437),o=i(2924),r=i(1145),s=i(8621),l=i(2413),d=["strain","breeder"],c=["temperature","moisture","conductivity","dli","health","humidity","illuminance","water_consumption","fertilizer_consumption","power_consumption"];let h=class extends n.LitElement{constructor(){super(...arguments),this.initialShowRings=[],this.initialShowLabels=[],this._activeTab="rings",this._selectedRings=[],this._selectedLabels=[],this._heatmapColor="#ff6666",this._heatmapSecondaryColor="#ffffff",this._heatmapOpacity=.8,this._isDraggingOpacity=!1,this._userChangedSettings=!1}firstUpdated(){this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity,this._activeTab=this.initialActiveTab||this._activeTab}updated(e){super.updated(e),(e.has("initialShowRings")||e.has("initialShowLabels")||e.has("initialHeatmap")||e.has("initialHeatmapColor")||e.has("initialHeatmapSecondaryColor")||e.has("initialHeatmapOpacity"))&&(this._userChangedSettings||(this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity))}_fixColorValue(e){if(e)return e.startsWith("#")?e:{red:"#ff0000",blue:"#0000ff"}[e.toLowerCase()]||e}_getIconForSensor(e){var t,i,a,n,o;const r={strain:"mdi:dna",breeder:"mdi:account-tie",temperature:"mdi:thermometer",moisture:"mdi:water-percent",conductivity:"mdi:flash",dli:"mdi:white-balance-sunny",health:"mdi:heart-pulse",humidity:"mdi:water",illuminance:"mdi:brightness-5",water_consumption:"mdi:cup-water",fertilizer_consumption:"mdi:fertilizer",power_consumption:"mdi:flash-circle",ph:"mdi:ph"};return d.includes(e)?r[e]:(null===(t=this.plantInfo)||void 0===t?void 0:t.result)&&(null===(i=this.plantInfo.result[e])||void 0===i?void 0:i.icon)?this.plantInfo.result[e].icon:"health"===e&&(null===(o=null===(n=null===(a=this.plantInfo)||void 0===a?void 0:a.result)||void 0===n?void 0:n.helpers)||void 0===o?void 0:o.health)?"mdi:heart-pulse":r[e]||"mdi:help-circle-outline"}_stopEvent(e){e.stopPropagation()}_getAvailableSensors(){return this.hass?c.map((e=>({id:e,name:l.TranslationUtils.translateSensor(this.hass,e)}))):[]}_getAvailableLabels(){return this.hass?[...d.map((e=>({id:e,name:l.TranslationUtils.translateField(this.hass,e)}))),...this._getAvailableSensors()]:[]}_cycleTab(e){e.stopPropagation(),"rings"===this._activeTab?this._activeTab="labels":"labels"===this._activeTab?this._activeTab="heatmap":"heatmap"===this._activeTab?this._activeTab="collapsed":this._activeTab="rings",this._dispatchSettingsChanged(),this.requestUpdate()}_handleRingChange(e,t){e.stopPropagation(),this._userChangedSettings=!0,this._selectedRings.includes(t)?this._selectedRings=this._selectedRings.filter((e=>e!==t)):this._selectedRings.push(t),this._dispatchSettingsChanged()}_handleLabelChange(e,t){e.stopPropagation(),this._userChangedSettings=!0,this._selectedLabels.includes(t)?this._selectedLabels=this._selectedLabels.filter((e=>e!==t)):this._selectedLabels.push(t),this._dispatchSettingsChanged()}_handleHeatmapSensorChange(e,t){e.stopPropagation(),this._userChangedSettings=!0,this._heatmapSensor===t?this._heatmapSensor=null:this._heatmapSensor=t,this._dispatchSettingsChanged()}_handleColorChange(e,t){e.stopPropagation(),this._userChangedSettings=!0;const i=e.target;t?this._heatmapColor=i.value:this._heatmapSecondaryColor=i.value,this._dispatchSettingsChanged()}_handleOpacityDragStart(e){e.stopPropagation(),e.preventDefault(),this._isDraggingOpacity=!0,this._updateOpacityFromMouseEvent(e);const t=e=>this._updateOpacityFromMouseEvent(e),i=()=>{this._isDraggingOpacity=!1,window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}_updateOpacityFromMouseEvent(e){var t;if(!this._isDraggingOpacity)return;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".gradient-preview");if(!i)return;const a=i.getBoundingClientRect(),n=e.clientX-a.left,o=a.width,r=Math.max(0,Math.min(1,n/o));this._heatmapOpacity=r,this._userChangedSettings=!0,this._dispatchSettingsChanged()}_dispatchSettingsChanged(){const e={activeTab:this._activeTab,selectedRings:[...this._selectedRings],selectedLabels:[...this._selectedLabels],heatmapSensor:this._heatmapSensor,heatmapColor:this._heatmapColor||"#ff6666",heatmapSecondaryColor:this._heatmapSecondaryColor||"#ffffff",heatmapOpacity:void 0!==this._heatmapOpacity?this._heatmapOpacity:.8};this.dispatchEvent(new CustomEvent("settings-changed",{detail:e,bubbles:!0,composed:!0}))}_renderModeToggle(){if(!this.hass)return n.html``;let e,t;switch(this._activeTab){case"rings":e="mdi:circle-outline",t=l.TranslationUtils.translateUI(this.hass,"legend_rings_mode_active");break;case"labels":e="mdi:label-outline",t=l.TranslationUtils.translateUI(this.hass,"legend_labels_mode_active");break;case"heatmap":e="mdi:gradient",t=l.TranslationUtils.translateUI(this.hass,"legend_heatmap_mode_active");break;case"collapsed":e="mdi:unfold-more-horizontal",t=l.TranslationUtils.translateUI(this.hass,"legend_collapsed_mode_active")}return n.html`
      <button 
        class="mode-toggle" 
        title="${t}"
        @click=${this._cycleTab}
      >
        <ha-icon icon="${e}"></ha-icon>
      </button>
    `}_renderRingOptions(){if("rings"!==this._activeTab)return n.html``;const e=this._getAvailableSensors();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${e.map((e=>{const t=this._selectedRings.includes(e.id);return n.html`
            <div 
              class="sensor-icon ${t?"selected":""}"
              title="${e.name}"
              @click=${t=>this._handleRingChange(t,e.id)}
              style=${(0,r.styleMap)({backgroundColor:t?`var(--sensor-ring-${e.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(e.id)}"
                style=${(0,r.styleMap)({color:t?"white":`var(--sensor-ring-${e.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderLabelOptions(){if("labels"!==this._activeTab)return n.html``;const e=this._getAvailableLabels();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${e.map((e=>{const t=this._selectedLabels.includes(e.id);return n.html`
            <div 
              class="sensor-icon ${t?"selected":""}"
              title="${e.name}"
              @click=${t=>this._handleLabelChange(t,e.id)}
              style=${(0,r.styleMap)({backgroundColor:t?`var(--sensor-ring-${e.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(e.id)}"
                style=${(0,r.styleMap)({color:t?"white":`var(--sensor-ring-${e.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderHeatmapOptions(){if("heatmap"!==this._activeTab)return n.html``;const e=this._getAvailableSensors();return n.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${e.map((e=>{const t=this._heatmapSensor===e.id;return n.html`
            <div 
              class="sensor-icon ${t?"selected":""}"
              title="${e.name}"
              @click=${t=>this._handleHeatmapSensorChange(t,e.id)}
              style=${(0,r.styleMap)({backgroundColor:t?`var(--sensor-ring-${e.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(e.id)}"
                style=${(0,r.styleMap)({color:t?"white":`var(--sensor-ring-${e.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
        
        <!-- Farbauswahl immer anzeigen, unabhängig vom Sensor-Status -->
        <div class="color-picker-section" @click=${this._stopEvent}>
          <div class="color-option">
            <input 
              type="color" 
              .value=${this._heatmapColor} 
              @change=${e=>this._handleColorChange(e,!0)}
              title="${this.hass?l.TranslationUtils.translateUI(this.hass,"legend_primary_color"):"Primary Color"}"
            />
            <input 
              type="color" 
              .value=${this._heatmapSecondaryColor} 
              @change=${e=>this._handleColorChange(e,!1)}
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
      <div class="legend-container ${"collapsed"===this._activeTab?"collapsed":""}" @click=${this._stopEvent}>
        ${this._renderModeToggle()}
        
        <div class="content-container" @click=${this._stopEvent}>
          ${this._renderRingOptions()}
          ${this._renderLabelOptions()}
          ${this._renderHeatmapOptions()}
        </div>
      </div>
    `}static get styles(){return s.legendStyles}};t.BrokkoliAreaLegend=h,a([(0,o.property)({attribute:!1})],h.prototype,"hass",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialShowRings",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialShowLabels",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialHeatmap",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialHeatmapColor",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialHeatmapSecondaryColor",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialHeatmapOpacity",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"initialActiveTab",void 0),a([(0,o.property)({attribute:!1})],h.prototype,"plantInfo",void 0),a([(0,o.state)()],h.prototype,"_activeTab",void 0),a([(0,o.state)()],h.prototype,"_selectedRings",void 0),a([(0,o.state)()],h.prototype,"_selectedLabels",void 0),a([(0,o.state)()],h.prototype,"_heatmapSensor",void 0),a([(0,o.state)()],h.prototype,"_heatmapColor",void 0),a([(0,o.state)()],h.prototype,"_heatmapSecondaryColor",void 0),a([(0,o.state)()],h.prototype,"_heatmapOpacity",void 0),a([(0,o.state)()],h.prototype,"_isDraggingOpacity",void 0),t.BrokkoliAreaLegend=h=a([(0,o.customElement)("brokkoli-area-legend")],h)},9446:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliArea=void 0;const o=i(4437),r=i(2924),s=i(1145),l=i(3073);i(9242),i(896),i(7814);const d=i(8063),c=i(2413),h=["entities","_bounds","_cellSize","_containerSize","_cycleGroups","_currentDragPosition","_draggingMember","_isSnapping","_editMode"];let u=class extends o.LitElement{constructor(){super(...arguments),this._hassGeneration=0,this._watchedValueEntities=[],this._watchedPositionEntities=[],this._watchedDirty=!0,this._positionsDirty=!0,this._geometryChanged=!1,this.entities=[],this.showRings=[],this.showLabels=[],this.showLegend=!0,this._userSettings={},this._positions={},this._draggingMember=null,this._dragOffset={x:0,y:0},this._containerSize={width:0,height:0},this._cellSize=60,this._targetPosition=null,this._isSnapping=!1,this._currentDragPosition=null,this._originalPosition=null,this._wasElementSelected=!1,this._editMode=!1,this._selectedMembers=new Set,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._showSelectionHint=!1,this._justFinishedMultiDrag=!1,this._cycleGroups=[],this._bounds={minX:0,minY:0,maxX:0,maxY:0},this._showAddPlantIndicator=null,this._showAddPlantDialog=!1,this._showPlantFlyout=!1,this._flyoutPosition={x:0,y:0},this._newPlantPosition={x:0,y:0},this._debugMode=!1,this._highlightCell=null,this._plantInfoCache={},this._cycleGroupTimer=0,this._dragFrame=0,this._boundHandleDrag=this._handleDrag.bind(this),this._boundEndDrag=this._endDrag.bind(this),this._handleResize=()=>{const e=this.getBoundingClientRect();this._containerSize={width:e.width,height:e.height},this._calculateCellSize(),this.requestUpdate()},this._locationHelperIndex=new Map,this._toggleEditMode=e=>{e.stopPropagation(),this._editMode=!this._editMode,this._editMode||(this._selectedMembers=new Set,this._showAddPlantIndicator=null,this._showSelectionHint=!1)},this._handleGlobalClick=e=>{!e.composedPath().some((e=>e===this))&&!this._isDraggingSelection&&this._showAddPlantIndicator&&(this._showAddPlantIndicator=null,this.requestUpdate())},this._handlePlantCreated=e=>n(this,void 0,void 0,(function*(){if(!this.hass)return;const{entity_id:t,position:i}=e.detail;this._positions[t]=i,this._calculateBounds(),this._normalizePositions();const a=Object.entries(this._positions).map((([e,t])=>this._savePosition(e,t)));yield Promise.all(a),this._loadPositions()})),this._handleNewPlantRequested=e=>{const{position:t}=e.detail;this._newPlantPosition=t,this._showPlantFlyout=!1,this._showAddPlantDialog=!0,this.requestUpdate()},this._handleMovePlantRequested=e=>n(this,void 0,void 0,(function*(){var t;if(!this.hass)return;const{plant:i,position:a}=e.detail;this._positions[i.entity_id]=a,this._calculateBounds(),this._normalizePositions();const n=Object.entries(this._positions).map((([e,t])=>this._savePosition(e,t)));yield Promise.all(n),yield this._assignArea(null===(t=this.hass.entities[i.entity_id])||void 0===t?void 0:t.device_id),this._showPlantFlyout=!1,this._loadPositions()})),this._handlePlantCloned=e=>n(this,void 0,void 0,(function*(){var t,i;this._showPlantFlyout=!1,this.requestUpdate();const{entity_id:a,device_id:n,position:o}=null!==(t=e.detail)&&void 0!==t?t:{};this.hass&&a&&o&&(this._positions[a]=o,this._calculateBounds(),this._normalizePositions(),yield Promise.all(Object.entries(this._positions).map((([e,t])=>this._savePosition(e,t)))),yield this._assignArea(null!=n?n:null===(i=this.hass.entities[a])||void 0===i?void 0:i.device_id),this._loadPositions())})),this._handleMenuClosed=()=>{this._showPlantFlyout=!1,this.requestUpdate()}}set hass(e){const t=this._hass;if(this._hass=e,!e)return;if(!t)return this._watchedDirty=!0,this._positionsDirty=!0,void this._hassGeneration++;if(t.entities!==e.entities||t.devices!==e.devices)return this._watchedDirty=!0,this._positionsDirty=!0,void this._hassGeneration++;if(t.states===e.states&&t.language===e.language)return;this._watchedDirty&&this._rebuildWatchedEntities();const i=this._watchedPositionEntities.some((i=>t.states[i]!==e.states[i])),a=i||t.language!==e.language||this._watchedValueEntities.some((i=>t.states[i]!==e.states[i]));i&&(this._positionsDirty=!0),a&&this._hassGeneration++}get hass(){return this._hass}firstUpdated(){const e=this.getBoundingClientRect();this._containerSize={width:e.width,height:e.height},this._loadPositions(),this._calculateCellSize(),window.addEventListener("resize",this._handleResize),this._resizeObserver=new ResizeObserver((()=>this._handleResize())),this._resizeObserver.observe(this),window.addEventListener("click",this._handleGlobalClick),this.addEventListener("plant-created",this._handlePlantCreated),this._userSettings=this._ladeEinstellungen(),this._visibilityObserver=new IntersectionObserver((e=>{const t=e.some((e=>e.isIntersecting));this.toggleAttribute("data-offscreen",!t)})),this._visibilityObserver.observe(this)}get _speicherSchluessel(){return`brokkoli-area:${this.areaId||"default"}`}_ladeEinstellungen(){try{const e=localStorage.getItem(this._speicherSchluessel);return e?JSON.parse(e):{}}catch(e){return{}}}willUpdate(e){if(super.willUpdate(e),e.has("entities")&&(this._watchedDirty=!0,this._positionsDirty=!0),this._rebuildPlantData(),this._positionsDirty&&this.hass){this._positionsDirty=!1;const e=this._positionSignature();this._loadPositions(),e!==this._positionSignature()&&(this._geometryChanged=!0)}}_positionSignature(){return Object.entries(this._positions).map((([e,t])=>`${e}:${t.x},${t.y}`)).join("|")}updated(e){super.updated(e),(this._geometryChanged||h.some((t=>e.has(t))))&&(this._geometryChanged=!1,this._scheduleCycleGroupUpdate()),e.has("_showAddPlantDialog")&&this._handleDialogStateChange(),(e.has("_showPlantFlyout")||e.has("_flyoutPosition"))&&(this._showPlantFlyout&&this.hass?this._createFlyout():this._removeFlyout())}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._removeFlyout(),this._removeDialog(),window.removeEventListener("resize",this._handleResize),window.removeEventListener("click",this._handleGlobalClick),null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=void 0,null===(t=this._visibilityObserver)||void 0===t||t.disconnect(),this._visibilityObserver=void 0,this.removeEventListener("plant-created",this._handlePlantCreated),this._cycleGroupTimer&&(clearTimeout(this._cycleGroupTimer),this._cycleGroupTimer=0),this._dragFrame&&(cancelAnimationFrame(this._dragFrame),this._dragFrame=0)}_findLocationEntity(e){var t,i;const a=this._locationHelperFor(e);return a&&null!==(i=null===(t=this.hass)||void 0===t?void 0:t.states[a])&&void 0!==i?i:null}_locationHelperFor(e){var t;const i=this.hass;if(!(null==i?void 0:i.entities))return;if(this._locationHelperIndexSource!==i.entities){const e=new Map;for(const t of Object.values(i.entities))t.device_id&&t.entity_id.startsWith("text.")&&"location"===t.translation_key&&e.set(t.device_id,t.entity_id);this._locationHelperIndex=e,this._locationHelperIndexSource=i.entities}const a=null===(t=i.entities[e])||void 0===t?void 0:t.device_id;return a?this._locationHelperIndex.get(a):void 0}_rebuildWatchedEntities(){this._watchedDirty=!1;const e=this._hass,t=new Set(this.entities),i=new Set;if(!e)return this._watchedValueEntities=[...t],void(this._watchedPositionEntities=[]);for(const a of this.entities){const n=this._locationHelperFor(a);n&&i.add(n);for(const i of Object.values(d.PlantEntityUtils.buildSensorMap(e,a)))t.add(i)}this._watchedValueEntities=[...t],this._watchedPositionEntities=[...i]}_loadPositions(){if(!this.hass)return;const e=new Set,t=[];this.entities.forEach((i=>{const a=this._findLocationEntity(i);let n=!1;if(a&&a.state&&"unknown"!==a.state)try{const t=JSON.parse(a.state);if(t&&"number"==typeof t.x&&"number"==typeof t.y){const a={x:t.x,y:t.y};return this._positions[i]=a,e.add(`${a.x},${a.y}`),void(n=!0)}}catch(e){}this._positions[i]={x:0,y:0},n||t.push(i)})),t.length>0&&this._distributeUndefinedPositionEntities(t,e),this._identifyCycleGroups(),this._calculateBounds(),this._normalizePositions()}_distributeUndefinedPositionEntities(e,t){if(0===e.length)return;const i=[[1,0],[0,1],[-1,0],[0,-1]];let a=0,n=0,o=0,r=1,s=0,l=0;e.forEach((e=>{let d=!1;for(;!d;){const c=`${a},${n}`;t.has(c)?(a+=i[o][0],n+=i[o][1],s++,s===r&&(o=(o+1)%4,s=0,l++,2===l&&(r++,l=0))):(this._positions[e]={x:a,y:n},t.add(c),d=!0)}}))}_identifyCycleGroups(){if(!this.hass||!this.entities||0===this.entities.length)return void(this._cycleGroups=[]);const e={};this.entities.forEach((t=>{const i={entity_id:t},a=this._getEntityCycleName(i);a&&(e[a]||(e[a]=[]),e[a].push(t))}));const t=Object.entries(e).filter((([,e])=>e.length>=2)).map((([e,t])=>({name:e,color:this._getColorForCycle(e),members:t,positions:t.map((e=>this._positions[e])).filter(Boolean)}))),i=e=>e.map((e=>`${e.name}:${e.members.join(",")}#${e.positions.length}`)).join("|");i(t)!==i(this._cycleGroups)&&(this._cycleGroups=t)}_calculateBounds(){if(0===Object.keys(this._positions).length)return this._bounds={minX:0,minY:0,maxX:0,maxY:0},!1;let e=Number.MAX_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER;[...Object.values(this._positions),...this._targetPosition?[this._targetPosition]:[],...Object.values(this._isMultiDragging?this._targetPositions:{})].forEach((n=>{e=Math.min(e,n.x),t=Math.min(t,n.y),i=Math.max(i,n.x),a=Math.max(a,n.y)}));const n=Object.assign({},this._bounds);this._bounds={minX:e,minY:t,maxX:i,maxY:a};const o=JSON.stringify(n)!==JSON.stringify(this._bounds);return o&&this._calculateCellSize(),o}_calculateCellSize(){const{minX:e,minY:t,maxX:i,maxY:a}=this._bounds,{width:n,height:o}=this._containerSize,r=i-e+2,s=a-t+2+.5;this._cellSize=Math.min(n/r,o/s)}_gridToPixel(e,t){const{minX:i,minY:a}=this._bounds,{offsetX:n,offsetY:o}=this._getGridOffsets();return{x:n+(e-i)*this._cellSize,y:o+(t-a)*this._cellSize}}_pixelToGrid(e,t){const{minX:i,minY:a}=this._bounds,{offsetX:n,offsetY:o}=this._getGridOffsets();return{x:Math.floor((e-n)/this._cellSize)+i,y:Math.floor((t-o)/this._cellSize)+a}}_getGridOffsets(){const{minX:e,minY:t,maxX:i,maxY:a}=this._bounds,n=a-t+2,o=(i-e+2)*this._cellSize,r=n*this._cellSize;return{offsetX:(this._containerSize.width-o)/2+this._cellSize/2,offsetY:(this._containerSize.height-r)/2+this._cellSize/2}}_openMoreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_handleSensorLabelClick(e,t){!this._editMode&&t&&(e.stopPropagation(),e.preventDefault(),this._openMoreInfo(t))}_renderMembersWithLabels(){if(!this.hass)return[];const e=[...this.entities].sort(((e,t)=>{const i=this._positions[e]||{x:0,y:0},a=this._positions[t]||{x:0,y:0};return i.y!==a.y?i.y-a.y:a.x-i.x})),t=new Map,i=e.length;return e.forEach(((e,a)=>t.set(e,i-1-a+1))),e.map((e=>{var i,a,n,r,l,d,c;const h=this.hass.states[e];if(!h)return o.html``;const u=this._positions[e]||{x:0,y:0};let p;if(this._isMultiDragging&&this._selectedMembers.has(e)&&this._currentDragPosition)if(e===this._draggingMember)p=Object.assign({},this._currentDragPosition);else{const t=this._originalPositions[this._draggingMember],i=this._originalPositions[e],a=i.x-t.x,n=i.y-t.y;p={x:this._currentDragPosition.x+a*this._cellSize,y:this._currentDragPosition.y+n*this._cellSize}}else this._draggingMember===e&&this._currentDragPosition?p=Object.assign({},this._currentDragPosition):(p=this._gridToPixel(u.x,u.y),p.x+=this._cellSize/2,p.y+=this._cellSize/2);const m=h.attributes.friendly_name||e.split(".")[1],_=h.attributes.entity_picture||"",g=this._draggingMember===e||this._isMultiDragging&&this._selectedMembers.has(e),v=this._isSnapping&&(this._draggingMember===e||this._selectedMembers.has(e)),f=this._selectedMembers.has(e);let y=t.get(e);g?y+=3:f&&(y+=1);let b=null;const w=this._getHeatmapSensor();if(w&&e.startsWith("plant.")&&this._plantInfoCache[e]){const t=this._plantInfoCache[e];if(t&&t.result){const e=t.result[w],l=(null===(a=null===(i=t.result.helpers)||void 0===i?void 0:i.health)||void 0===a?void 0:a.entity_id)&&(null===(n=this.hass)||void 0===n?void 0:n.states[t.result.helpers.health.entity_id]);if("health"===w&&l){const e=Number(l.state),t=5,i=Math.min(100,Math.max(0,Math.round(e/t*100))),a=this._getHeatmapColor()||"rgb(148,202,83)",n=this._getHeatmapSecondaryColor()||"white",r=this._getHeatmapOpacity();b=o.html`
              <div class="heatmap-overlay" style=${(0,s.styleMap)({backgroundColor:`color-mix(in srgb, ${a} ${i}%, ${n})`,opacity:r})}></div>
            `}else if(e){const t=null!==(r=this._liveCurrent(e))&&void 0!==r?r:Number(e.current||0),i=Number(e.min||0),a=Number(e.max||100),n=Math.min(1,Math.max(0,(t-i)/(a-i))),l=Math.round(100*n),d=this._getHeatmapColor()||`var(--sensor-ring-${w}-color)`,c=this._getHeatmapSecondaryColor()||"white",h=this._getHeatmapOpacity();b=o.html`
              <div class="heatmap-overlay" style=${(0,s.styleMap)({backgroundColor:`color-mix(in srgb, ${d} ${l}%, ${c})`,opacity:h})}></div>
            `}else{const e=this._getHeatmapSecondaryColor()||"white",t=this._getHeatmapOpacity();b=o.html`
              <div class="heatmap-overlay" style=${(0,s.styleMap)({backgroundColor:e,opacity:t})}></div>
            `}}}let x="";e.startsWith("plant.")&&(x=this._plantInfoCache[e]&&this._plantInfoCache[e].result?this._renderPlantSensorRings(e):this._renderDisabledRings());const k=this._renderSensorLabels(e),S=null!==(c=null===(d=null===(l=this.hass)||void 0===l?void 0:l.states[e])||void 0===d?void 0:d.attributes)&&void 0!==c?c:{},$=this._getActiveLabels(),z=[];$.includes("strain")&&S.strain&&z.push(String(S.strain)),$.includes("breeder")&&S.breeder&&z.push(String(S.breeder));const E=z.join(" - ");return o.html`
        <div 
          class="member-wrapper ${g?"dragging":""} ${f?"selected":""}"
          style=${(0,s.styleMap)({left:`${p.x}px`,top:`${p.y}px`,"--cell-size":`${this._cellSize}px`,"--z-index":`${y}`,"z-index":`${y}`})}
          data-entity-id="${e}"
        >
          <div
            class="member ${g?"dragging":""} ${v?"snapping":""} ${f?"selected":""}"
            @mousedown=${t=>this._startDrag(t,e)}
            @touchstart=${t=>this._handleTouchStart(t,e)}
            @click=${t=>this._handleClick(t,e)}
          >
            <div class="member-image" style=${(0,s.styleMap)({backgroundImage:_?`url(${_})`:"none"})}>
              ${b}
              ${x}
              ${_?"":o.html`<ha-icon icon="mdi:flower"></ha-icon>`}
            </div>
          </div>
          <div class="entity-name ${E?"shifted":""} ${g?"dragging":""} ${f?"selected":""}">
            ${m}
          </div>
          ${E?o.html`
            <div class="entity-strain ${g?"dragging":""} ${f?"selected":""}">
              ${E}
            </div>
          `:""}
          ${k}
        </div>
      `}))}_liveCurrent(e){var t,i;const a=(null==e?void 0:e.sensor)?null===(i=null===(t=this.hass)||void 0===t?void 0:t.states[e.sensor])||void 0===i?void 0:i.state:void 0;if(void 0===a||"unknown"===a||"unavailable"===a)return;const n=Number(a);return Number.isNaN(n)?void 0:n}_renderPlantSensorRings(e){var t,i;const a=this._plantInfoCache[e],n=this._getActiveRings();if(0===n.length)return o.html``;if(!a||!a.result)return this._renderDisabledRings();const r=a.result;let s=null;if(this.hass&&(null===(i=null===(t=r.helpers)||void 0===t?void 0:t.health)||void 0===i?void 0:i.entity_id)){const e=r.helpers.health.entity_id;this.hass.states[e]&&(s=this.hass.states[e])}const l=n.filter((e=>"health"===e?null!==s:r[e]&&void 0!==r[e].current));return 0===l.length?this._renderDisabledRings():o.html`
      <div class="sensor-rings">
        ${l.map(((e,t)=>{const i=t,a=l.length;if("health"===e&&s){const t={current:Number(s.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:s.entity_id,unit_of_measurement:""};return this._renderSensorRing(t,i,a,e)}return this._renderSensorRing(r[e],i,a,e)}))}
      </div>
    `}_renderSensorRing(e,t,i,a){var n;if(!e||void 0===e.current)return this._renderDisabledRing(t);const r=null!==(n=this._liveCurrent(e))&&void 0!==n?n:Number(e.current),s=Number(e.min),l=Number(e.max),d=0===r,c=r<s&&!d,h=r>l;let u=0;u=isNaN(r)?0:"health"===a&&d?.05:d||c?.1:r===s?.02:h?1:Math.max(0,Math.min(1,(r-s)/(l-s)));const p=Math.max(0,this._cellSize/2-2-4*t),m=2*Math.PI*p,_=`${m*u} ${m*(1-u)}`,g=d||c||h||"health"===a&&r<=1.5?"sensor-pulsating":"";let v=null,f="";if("health"===a)if(r<=0)v="rgba(240,100,100,1)";else if(r<=.5)v="rgba(240,163,163,1)";else if(r<=2.5){const e=(r-.5)/2;v=`rgb(${240+15*e}, ${163+51*e}, ${163-163*e})`}else{const e=(r-2.5)/2.5;v=`rgb(${255-212*e}, ${214-20*e}, ${0+83*e})`}else f=`sensor-ring-${a}`;return o.html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${p}" 
          class="sensor-ring-bg"
        />
        <circle 
          class="sensor-ring-fg ${f} ${g}"
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${p}" 
          stroke-dasharray="${_}"
          stroke-dashoffset="0"
          transform="rotate(-90, ${this._cellSize/2}, ${this._cellSize/2})"
          style="${v?`stroke: ${v}`:""}"
        />
      </svg>
    `}_renderDisabledRing(e){const t=Math.max(0,this._cellSize/2-2-4*e);return o.html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${t}" 
          class="sensor-ring-bg"
        />
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${t}" 
          class="sensor-ring-disabled"
          transform="rotate(-90 ${this._cellSize/2} ${this._cellSize/2})"
        />
      </svg>
    `}_renderDisabledRings(){const e=this._getActiveRings();return 0===e.length?o.html``:o.html`
      <div class="sensor-rings">
        ${Array.from({length:e.length},((e,t)=>this._renderDisabledRing(t)))}
      </div>
    `}_handleClick(e,t){this._draggingMember||this._isMultiDragging||(e.stopPropagation(),e.preventDefault(),this._editMode?this._justFinishedMultiDrag?this._justFinishedMultiDrag=!1:setTimeout((()=>{const e=this._selectedMembers.has(t);e?this._selectedMembers.delete(t):this._selectedMembers.add(t);let i=t;e&&this._selectedMembers.size>0&&(i=Array.from(this._selectedMembers)[this._selectedMembers.size-1]);const a=new CustomEvent("brokkoli-area-entity-selected",{bubbles:!0,composed:!0,detail:{entityId:this._selectedMembers.size>0?i:null,selectedEntities:Array.from(this._selectedMembers)}});this.dispatchEvent(a),this.requestUpdate()}),10):this._openMoreInfo(t))}_startDrag(e,t){if(!this._editMode)return;if(this._showAddPlantDialog)return;if(this._justFinishedMultiDrag)return;let i,a;e.preventDefault(),this._highlightCell=null,this._showAddPlantIndicator=null,document.body.style.userSelect="none",this._wasElementSelected=this._selectedMembers.has(t),"touches"in e?(i=e.touches[0].clientX,a=e.touches[0].clientY):(i=e.clientX,a=e.clientY);const n=this.getBoundingClientRect();if(this._selectedMembers.has(t)&&this._selectedMembers.size>1){this._isMultiDragging=!0,this._draggingMember=t,this._isDraggingSelection=!0,this._selectedMembers.forEach((e=>{this._originalPositions[e]=Object.assign({},this._positions[e])}));const{x:e,y:o}=this._positions[t],r=this._gridToPixel(e,o);this._dragOffset={x:i-n.left-r.x-this._cellSize/2,y:a-n.top-r.y-this._cellSize/2}}else{this._draggingMember=t,this._originalPosition=Object.assign({},this._positions[t]);const{x:e,y:o}=this._positions[t],r=this._gridToPixel(e,o);this._dragOffset={x:i-n.left-r.x-this._cellSize/2,y:a-n.top-r.y-this._cellSize/2}}window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),window.addEventListener("mousemove",this._boundHandleDrag),window.addEventListener("touchmove",this._boundHandleDrag,{passive:!1}),window.addEventListener("mouseup",this._boundEndDrag),window.addEventListener("touchend",this._boundEndDrag)}_handleDrag(e){(this._draggingMember||this._isMultiDragging)&&(e.preventDefault(),this._pendingDragPoint={x:"touches"in e?e.touches[0].clientX:e.clientX,y:"touches"in e?e.touches[0].clientY:e.clientY},this._dragFrame||(this._dragFrame=requestAnimationFrame((()=>{this._dragFrame=0;const e=this._pendingDragPoint;this._pendingDragPoint=void 0,e&&this._applyDrag(e.x,e.y)}))))}_applyDrag(e,t){if(!this._draggingMember&&!this._isMultiDragging)return;const i=this.getBoundingClientRect(),a=e-i.left,n=t-i.top;this._currentDragPosition={x:a-this._dragOffset.x,y:n-this._dragOffset.y};const o=this._pixelToGrid(a,n);if(this._isMultiDragging){const e=Array.from(this._selectedMembers)[0],t=this._originalPositions[e],i=o.x-t.x,a=o.y-t.y,n=Object.assign({},this._targetPositions);this._targetPositions={};let r=!0;this._selectedMembers.forEach((e=>{const t=this._originalPositions[e],n={x:t.x+i,y:t.y+a};Object.entries(this._positions).some((([e,t])=>!this._selectedMembers.has(e)&&t.x===n.x&&t.y===n.y))&&(r=!1),this._targetPositions[e]=n})),r||(this._targetPositions={}),JSON.stringify(n)!==JSON.stringify(this._targetPositions)&&this._calculateBounds()}else if(this._draggingMember){const e=Object.entries(this._positions).some((([e,t])=>e!==this._draggingMember&&t.x===o.x&&t.y===o.y));this._targetPosition=e?null:Object.assign({},o),this._highlightCell=e?null:{x:o.x,y:o.y},e||(this._highlightCell=JSON.parse(JSON.stringify({x:o.x,y:o.y}))),this._calculateBounds(),this.requestUpdate()}}_endDrag(e){if(!this._draggingMember&&!this._isMultiDragging)return;this._dragFrame&&(cancelAnimationFrame(this._dragFrame),this._dragFrame=0,this._pendingDragPoint=void 0);const t=this._isMultiDragging;if(window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),document.body.style.userSelect="",null!==this._currentDragPosition&&(this._draggingMember&&this._originalPosition?Math.abs(this._currentDragPosition.x-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).x)>5||Math.abs(this._currentDragPosition.y-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).y)>5:this._isMultiDragging))if(this._isMultiDragging&&this._draggingMember){this._justFinishedMultiDrag=!0,this._isSnapping=!0;const t="touches"in e?e.changedTouches[0].clientX:e.clientX,i="touches"in e?e.changedTouches[0].clientY:e.clientY,a=this.getBoundingClientRect(),n=this._pixelToGrid(t-a.left,i-a.top),o=this._originalPositions[this._draggingMember],r=n.x-o.x,s=n.y-o.y;let l=!0;this._selectedMembers.forEach((e=>{const t=this._originalPositions[e],i=t.x+r,a=t.y+s;Object.entries(this._positions).some((([e,t])=>!this._selectedMembers.has(e)&&t.x===i&&t.y===a))&&(l=!1)})),l?(this._selectedMembers.forEach((e=>{const t=this._originalPositions[e];this._positions[e]={x:t.x+r,y:t.y+s}})),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([e,t])=>{this._savePosition(e,t)})),this._identifyCycleGroups(),this._calculateCellSize()):Object.entries(this._originalPositions).forEach((([e,t])=>{this._positions[e]=Object.assign({},t)})),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)}else this._targetPosition&&this._draggingMember?(this._justFinishedMultiDrag=!0,this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._targetPosition),!this._wasElementSelected&&this._selectedMembers.size>1&&[...this._selectedMembers].filter((e=>e!==this._draggingMember)).forEach((e=>this._selectedMembers.delete(e))),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([e,t])=>{this._savePosition(e,t)})),this._identifyCycleGroups(),this._calculateCellSize(),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)):this._draggingMember&&(this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._originalPosition),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300));this._draggingMember=null,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._currentDragPosition=null,this._originalPosition=null,this._targetPosition=null,this._highlightCell=null,this._wasElementSelected=!1,this.requestUpdate(),(t||this._justFinishedMultiDrag)&&setTimeout((()=>{this._justFinishedMultiDrag=!1}),100),setTimeout((()=>{this._calculateBounds();const e=this.getBoundingClientRect();this._containerSize={width:e.width,height:e.height},this._calculateCellSize(),this.requestUpdate()}),50)}_normalizePositions(){if(0===Object.keys(this._positions).length)return;let e=Number.MAX_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER;Object.values(this._positions).forEach((i=>{e=Math.min(e,i.x),t=Math.min(t,i.y)})),0===e&&0===t||(Object.keys(this._positions).forEach((i=>{this._positions[i]={x:this._positions[i].x-e,y:this._positions[i].y-t}})),this._bounds={minX:0,minY:0,maxX:this._bounds.maxX-e,maxY:this._bounds.maxY-t})}_savePosition(e,t){return n(this,void 0,void 0,(function*(){if(this.hass)try{yield this.hass.callService("plant","change_position",{entity_id:e,position_x:t.x,position_y:t.y})}catch(e){}}))}_renderCycleGroups(){var e;if(!(null===(e=this._cycleGroups)||void 0===e?void 0:e.length))return o.html``;const t=this._cycleGroups.filter((e=>e.positions.length>=2)).map((e=>{const t=`cycle-${e.name.replace(/\s+/g,"-")}`;return o.html`<div id="${t}" data-name="${e.name}" class="cycle-group-frame"></div>`}));return t.length?o.html`<div class="cycle-layer">${t}</div>`:o.html``}render(){if(!this.hass)return o.html``;let e;e=0===this.entities.length?4:this._bounds.maxY-this._bounds.minY+2;const t=e*this._cellSize+20,i=new Set;Object.entries(this._positions).forEach((([e,t])=>{e!==this._draggingMember&&i.add(`${t.x},${t.y}`)}));const a=[],n=[];let r,l,d,h;0===this.entities.length?(r=-1,l=2,d=-1,h=2):(r=this._bounds.minX-1,l=this._bounds.maxX+1,d=this._bounds.minY-1,h=this._bounds.maxY+1);for(let e=d;e<=h;e++)for(let t=r;t<=l;t++){const r=`${t},${e}`;if(!i.has(r)){const i=this._gridToPixel(t,e),r=null!==this._highlightCell&&this._highlightCell.x===t&&this._highlightCell.y===e,l=this._showAddPlantIndicator&&this._showAddPlantIndicator.x===t&&this._showAddPlantIndicator.y===e;a.push(o.svg`
            <rect 
              class="grid-cell ${r?"highlight":""} ${l?"add-indicator":""}"
              x="${i.x-this._cellSize/2}" 
              y="${i.y-this._cellSize/2}" 
              width="${this._cellSize}" 
              height="${this._cellSize}" 
              rx="2" 
              ry="2"
            />
          `),l&&n.push(o.html`
              <div 
                class="add-plant-button"
                style=${(0,s.styleMap)({position:"absolute",left:`${i.x}px`,top:`${i.y}px`,width:`${this._cellSize}px`,height:`${this._cellSize}px`,transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:1*this._cellSize+"px",color:"var(--accent-color, #f3a95e)",opacity:"0.1",zIndex:"50",cursor:"pointer"})}
                @click=${i=>this._handleCellClick(i,t,e)}
              >+</div>
            `)}}const u=this._cellSize/2,p=o.html`
      <div class="container ${this._editMode?"edit-mode":""}" 
           style=${(0,s.styleMap)({height:`${t}px`})} 
           @click=${this._handleContainerClick}>
        <div class="grid-background" style=${(0,s.styleMap)({transform:`translate(${u}px, ${u}px)`})}>
          <svg class="grid-svg">${a}</svg>
          ${n}
        </div>
        
        <div class="cycle-layer">
          ${this._renderCycleGroups()}
        </div>
        
        <div class="members">
          ${this._renderMembersWithLabels()}
        </div>
        
        <div class="cycle-labels-layer"></div>
        
        ${this._renderSelectionHint()}
        
        <!-- Umschalter Ansicht <-> Bearbeiten. Sitzt links neben dem
             Legendenknopf und ist genauso gross, damit beide im
             eingeklappten Zustand als Paar wirken. -->
        <div 
          class="edit-toggle-container" 
          style=${(0,s.styleMap)({right:this.showLegend?"58px":"10px"})}
        >
          <button 
            class="edit-toggle ${this._editMode?"active":""}"
            title=${c.TranslationUtils.translateUI(this.hass,this._editMode?"area_edit_mode_on":"area_edit_mode_off")}
            @click=${this._toggleEditMode}
          >
            <ha-icon icon=${this._editMode?"mdi:cursor-move":"mdi:cursor-default-outline"}></ha-icon>
          </button>
        </div>
        
        <!-- Legende einfügen -->
        ${this.showLegend?o.html`
          <brokkoli-area-legend
            .hass=${this.hass}
            .initialShowRings=${this._getActiveRings()}
            .initialShowLabels=${this._getActiveLabels()}
            .initialHeatmap=${this._getHeatmapSensor()}
            .initialHeatmapColor=${this._getHeatmapColor()}
            .initialHeatmapSecondaryColor=${this._getHeatmapSecondaryColor()}
            .initialActiveTab=${this._userSettings.activeTab}
            .plantInfo=${this._plantInfoCache[Object.keys(this._plantInfoCache)[0]]}
            @settings-changed=${this._handleSettingsChanged}
          ></brokkoli-area-legend>
        `:""}
      </div>
    `;return o.html`
      ${p}
    `}_scheduleCycleGroupUpdate(){this._cycleGroupTimer||(this._cycleGroupTimer=window.setTimeout((()=>{this._cycleGroupTimer=0,this._updateCycleGroups()}),100))}_updateCycleGroups(){const e=this.getBoundingClientRect();this._cycleGroups.forEach((t=>{var i;if(t.positions.length<1)return;const a=`cycle-${t.name.replace(/\s+/g,"-")}`,n=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById(a);if(!n)return;n.innerHTML="";const o=[];t.members.forEach((e=>{var t;const i=`.member-wrapper[data-entity-id="${e}"]`,a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(i);a&&o.push(a)})),o.length<1||this._identifyIslands(t.members).forEach((i=>{const a=o.filter((e=>{const t=e.getAttribute("data-entity-id");return t&&i.includes(t)}));if(a.length<1)return;const r=[];let s=Number.MAX_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER,d=Number.MIN_SAFE_INTEGER,c=Number.MIN_SAFE_INTEGER;a.forEach((t=>{const i=t.getBoundingClientRect(),a=i.left-e.left+i.width/2,n=i.top-e.top+i.height/2,o=Math.max(i.width,i.height)/2;r.push({center:{x:a,y:n},radius:o}),s=Math.min(s,a-o-20),l=Math.min(l,n-o-20),d=Math.max(d,a+o+20),c=Math.max(c,n+o+20)}));const h=document.createElement("div");h.className="cycle-group-frame",h.style.position="absolute",h.style.boxSizing="border-box",h.style.zIndex="2",h.style.pointerEvents="none",h.style.left=`${s}px`,h.style.top=`${l}px`,h.style.width=d-s+"px",h.style.height=c-l+"px",h.dataset.centerX=`${s+(d-s)/2}`,h.dataset.centerY=`${l+(c-l)/2}`,h.dataset.width=""+(d-s),h.dataset.height=""+(c-l),h.dataset.groupName=t.name,h.dataset.groupColor=t.color||"#3388ff";const u=document.createElementNS("http://www.w3.org/2000/svg","svg");let p;if(u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.style.position="absolute",u.style.top="0",u.style.left="0",u.style.overflow="visible",1===a.length){const e=r[0],t=e.radius+15;p=`M ${e.center.x-s-t} ${e.center.y-l} a ${t} ${t} 0 1 0 ${2*t} 0 a ${t} ${t} 0 1 0 ${2*-t} 0`}else p=this._createHullPath(r,s,l);const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",p),m.setAttribute("fill","none"),m.setAttribute("stroke",t.color||"#3388ff"),m.setAttribute("stroke-width","2"),m.setAttribute("stroke-linejoin","round"),m.setAttribute("stroke-linecap","round"),u.appendChild(m),h.appendChild(u),n.appendChild(h)}))})),this._createClickableCycleLabels()}_selectCycleMembers(e){const t=this._cycleGroups.find((t=>t.name===e));t?(t.members.every((e=>this._selectedMembers.has(e)))?t.members.forEach((e=>{this._selectedMembers.delete(e)})):(this._selectedMembers.clear(),t.members.forEach((e=>{this._selectedMembers.add(e)}))),this.requestUpdate()):console.warn(`Keine Cycle-Gruppe mit Namen ${e} gefunden`)}_createHullPath(e,t,i){if(e.length<2)return"";const a=[];e.forEach((e=>{const{center:n,radius:o}=e,r=o+20;for(let e=0;e<16;e++){const o=e/16*2*Math.PI;a.push({x:n.x-t+r*Math.cos(o),y:n.y-i+r*Math.sin(o)})}}));const n=this._computeConvexHull(a);if(n.length<3)return"";let o=`M ${n[0].x} ${n[0].y}`;for(let e=1;e<n.length;e++){const t=n[e-1],i=n[e],a=(t.x+i.x)/2,r=(t.y+i.y)/2;o+=` Q ${t.x} ${t.y}, ${a} ${r}`}const r=n[n.length-1],s=n[0],l=(r.x+s.x)/2,d=(r.y+s.y)/2;return o+=` Q ${r.x} ${r.y}, ${l} ${d}`,o+=` Q ${s.x} ${s.y}, ${n[0].x} ${n[0].y}`,o}_computeConvexHull(e){if(e.length<3)return e;let t=e[0];for(let i=1;i<e.length;i++)(e[i].y<t.y||e[i].y===t.y&&e[i].x<t.x)&&(t=e[i]);const i=e.slice();i.sort(((e,i)=>{if(e===t)return-1;if(i===t)return 1;const a=Math.atan2(e.y-t.y,e.x-t.x),n=Math.atan2(i.y-t.y,i.x-t.x);return a===n?Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))-Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)):a-n}));const a=[];for(let e=0;e<i.length;e++)0!==e&&i[e].x===i[e-1].x&&i[e].y===i[e-1].y||a.push(i[e]);const n=[];for(let e=0;e<Math.min(3,a.length);e++)n.push(a[e]);for(let e=3;e<a.length;e++){for(;n.length>1&&this._ccw(n[n.length-2],n[n.length-1],a[e])<=0;)n.pop();n.push(a[e])}return n}_ccw(e,t,i){return(t.x-e.x)*(i.y-e.y)-(t.y-e.y)*(i.x-e.x)}_identifyIslands(e){const t={};e.forEach((e=>{const i=this._positions[e];i&&(t[`${i.x},${i.y}`]=e)}));const i={};e.forEach((e=>{const t=this._positions[e];t&&(i[e]=t)}));const a=new Set,n=[];return e.forEach((e=>{if(a.has(e))return;const o=[],r=[e];for(;r.length>0;){const e=r.pop();if(a.has(e))continue;a.add(e),o.push(e);const n=i[e];n&&[`${n.x},${n.y-1}`,`${n.x},${n.y+1}`,`${n.x-1},${n.y}`,`${n.x+1},${n.y}`,`${n.x-1},${n.y-1}`,`${n.x+1},${n.y-1}`,`${n.x-1},${n.y+1}`,`${n.x+1},${n.y+1}`].forEach((e=>{const i=t[e];i&&!a.has(i)&&r.push(i)}))}o.length>0&&n.push(o)})),n}_renderSelectionHint(){return o.nothing}static get styles(){return o.css`
      ${l.positionStyles}
    `}_getEntityCycleName(e){if(!e||!e.entity_id||!e.entity_id.startsWith("plant."))return null;const t=this._plantInfoCache[e.entity_id];if(t&&t.result){const e=t.result;if(e.helpers&&e.helpers.cycle&&e.helpers.cycle.current)return e.helpers.cycle.current}return null}_getColorForCycle(e){let t=0;for(let i=0;i<e.length;i++)t=e.charCodeAt(i)+((t<<5)-t);return`hsl(${Math.abs(t)%360}, 70%, 45%)`}_createClickableCycleLabels(){var e,t,i,a,n;const o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".clickable-cycle-label");null==o||o.forEach((e=>e.remove()));let r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".cycle-labels-layer");r||(r=document.createElement("div"),r.className="cycle-labels-layer",null===(a=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".container"))||void 0===a||a.appendChild(r));const s=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".cycle-group-frame");null==s||s.forEach((e=>{const t=parseFloat(e.getAttribute("data-center-x")||"0"),i=parseFloat(e.getAttribute("data-center-y")||"0"),a=parseFloat(e.getAttribute("data-height")||"0"),n=e.getAttribute("data-group-name")||"",o=e.getAttribute("data-group-color")||"#3388ff";if(!n)return;const s=document.createElement("div");s.className=this._editMode?"clickable-cycle-label":"clickable-cycle-label static",s.textContent=n,s.style.left=`${t}px`,s.style.top=i+a/2-5+"px",s.style.backgroundColor=o,this._editMode&&s.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),window.removeEventListener("click",this._handleGlobalClick),this._cycleGroups.find((e=>e.name===n))&&this._selectCycleMembers(n),setTimeout((()=>{window.addEventListener("click",this._handleGlobalClick)}),10)})),null==r||r.appendChild(s)}))}_convertToGlobalPosition(e){const t=this._bounds.minX,i=this._bounds.minY;return{x:e.x+t,y:e.y+i}}_handleCellClick(e,t,i){if(this._selectedMembers.clear(),this._showAddPlantDialog||this._showPlantFlyout)return this._showAddPlantDialog=!1,this._showPlantFlyout=!1,void(this._showAddPlantIndicator=null);Object.values(this._positions).some((e=>e.x===t&&e.y===i))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===t&&this._showAddPlantIndicator.y===i?(this._newPlantPosition=this._convertToGlobalPosition({x:t,y:i}),this._flyoutPosition={x:e.clientX,y:e.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator={x:t,y:i},this.requestUpdate())}_closeAddPlantDialog(){this._showAddPlantDialog=!1,this._showAddPlantIndicator=null,this.requestUpdate()}_handleDialogStateChange(){this._showAddPlantDialog&&this.hass?this._createDialog():this._removeDialog()}_createDialog(){this._removeDialog();const e=document.createElement("div");e.id="plant-dialog-container",e.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: auto;";const t=document.createElement("plant-create-dialog");document.body.appendChild(e),e.appendChild(t);const i=t;i.hass=this.hass,i.position=this._newPlantPosition,i.areaId=this.areaId||"",t.addEventListener("dialog-closed",(()=>{this._closeAddPlantDialog()}))}_removeDialog(){const e=document.getElementById("plant-dialog-container");e&&document.body.contains(e)&&document.body.removeChild(e)}_createFlyout(){this._removeFlyout();const e=document.createElement("div");e.id="plant-flyout-container",e.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: none;";const t=document.createElement("plant-flyout-menu"),i=t;i.hass=this.hass,i.position=this._flyoutPosition,i.targetPosition=this._newPlantPosition,i.areaId=this.areaId||"",i.isMobile=window.innerWidth<=768,e.appendChild(t),document.body.appendChild(e),t.addEventListener("new-plant-requested",this._handleNewPlantRequested.bind(this)),t.addEventListener("move-plant-requested",this._handleMovePlantRequested.bind(this)),t.addEventListener("plant-cloned",this._handlePlantCloned.bind(this)),t.addEventListener("menu-closed",this._handleMenuClosed.bind(this))}_removeFlyout(){const e=document.getElementById("plant-flyout-container");e&&document.body.contains(e)&&document.body.removeChild(e)}_handleContainerClick(e){if(!this._editMode)return;const t=e.composedPath();if(t.some((e=>e instanceof HTMLElement&&"flower-area-legend"===e.tagName.toLowerCase())))return;if(this._selectedMembers.clear(),t.some((e=>{if(e instanceof HTMLElement){if(e.getAttribute("data-entity-id"))return!0;if("svg"===e.tagName&&e.classList.contains("cell"))return!1;if(e.classList.contains("member")||e.classList.contains("member-wrapper")||e.classList.contains("member-image")||e.classList.contains("cycle-label")||e.classList.contains("clickable-cycle-label")||e.classList.contains("name-label"))return!0}return!1})))return;const i=this.getBoundingClientRect(),a=e.clientX-i.left,n=e.clientY-i.top,o=this._pixelToGrid(a,n);Object.values(this._positions).some((e=>e.x===o.x&&e.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:e.clientX,y:e.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleOverlayClick(e){if(!this._editMode)return;this._selectedMembers.clear();const t=e.composedPath();if(t.some((e=>{var t,i;return e instanceof HTMLElement&&((null===(i=null===(t=e.className)||void 0===t?void 0:t.split)||void 0===i?void 0:i.call(t," "))||[]).some((e=>e.includes("member")||e.includes("name")||e.includes("cycle-label")||e.includes("clickable-cycle-label")))})))return;if(t.some((e=>{if(e instanceof HTMLElement){const t=e.className.split(" ");return t.includes("member")||t.includes("member-wrapper")||t.includes("cycle-label")||t.includes("clickable-cycle-label")}return!1})))return;const i=this.getBoundingClientRect(),a=e.clientX-i.left,n=e.clientY-i.top,o=this._pixelToGrid(a,n);Object.values(this._positions).some((e=>e.x===o.x&&e.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:e.clientX,y:e.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleTouchStart(e,t){if(!this._editMode)return;let i=!1;e.preventDefault();const a=e.touches[0],n=a.clientX,o=a.clientY,r=a=>{if(i)return;const r=a.touches[0],s=r.clientX,l=r.clientY;(Math.abs(s-n)>10||Math.abs(l-o)>10)&&(i=!0,this._startDrag(e,t))},s=()=>{window.removeEventListener("touchmove",r),window.removeEventListener("touchend",s),i||this._handleClick(new MouseEvent("click"),t)};window.addEventListener("touchmove",r,{passive:!1}),window.addEventListener("touchend",s)}_assignArea(e){return n(this,void 0,void 0,(function*(){if(this.hass&&this.areaId&&e)try{const t=this.areaId.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[e],area_id:t})}catch(e){console.error("Fehler beim Setzen der Area:",e)}}))}_renderSensorLabels(e){var t,i;const a=this._plantInfoCache[e],n=this._getActiveLabels().filter((e=>"strain"!==e&&"breeder"!==e));if(0===n.length)return o.html``;if(!a||!a.result)return o.html``;const r=a.result;let s=null;if(this.hass&&(null===(i=null===(t=r.helpers)||void 0===t?void 0:t.health)||void 0===i?void 0:i.entity_id)){const e=r.helpers.health.entity_id;this.hass.states[e]&&(s=this.hass.states[e])}const l=n.filter((e=>"health"===e?null!==s:r[e]&&void 0!==r[e].current&&null!==r[e].current));if(0===l.length)return o.html``;const d=l.map((e=>"health"===e&&s?{type:e,current:Number(s.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:s.entity_id,unit_of_measurement:""}:Object.assign({type:e},r[e])));return o.html`
      <div class="sensor-labels">
        ${d.map((e=>{var t;const i=null!==(t=this._liveCurrent(e))&&void 0!==t?t:Number(e.current),a=Number(e.min),n=Number(e.max),r=0===i,s=r||i<a&&!r||i>n||"health"===e.type&&i<=1.5?"sensor-pulsating":"";let l="";if("health"===e.type)if(i<=.5)l="rgba(240,163,163,1)";else if(i<=2.5){const e=(i-.5)/2;l=`rgb(${240+15*e}, ${163+51*e}, ${163-163*e})`}else{const e=(i-2.5)/2.5;l=`rgb(${255-212*e}, ${214-20*e}, ${0+83*e})`}else l=`var(--sensor-ring-${e.type}-color, var(--primary-color))`;let d=isNaN(i)?"-":i;return Number.isInteger(i)?d=Math.round(i):isNaN(i)||(d=i.toFixed(1)),o.html`
            <div 
              class="sensor-label ${s}"
              @click=${t=>this._handleSensorLabelClick(t,e.sensor)}
            >
              <ha-icon 
                icon="${e.icon||`mdi:${e.type}`}" 
                style="color: ${l};"
              ></ha-icon>
              <span class="sensor-value">${d}</span>
              <span class="sensor-unit">${e.unit_of_measurement||""}</span>
            </div>
          `}))}
      </div>
    `}_handleSettingsChanged(e){const t=e.detail;this._userSettings={showRings:t.selectedRings,showLabels:t.selectedLabels,heatmap:t.heatmapSensor,heatmapColor:t.heatmapColor,heatmapSecondaryColor:t.heatmapSecondaryColor,heatmapOpacity:t.heatmapOpacity,activeTab:t.activeTab};try{localStorage.setItem(this._speicherSchluessel,JSON.stringify(this._userSettings))}catch(e){}this.requestUpdate()}_getActiveRings(){return void 0!==this._userSettings.showRings?this._userSettings.showRings:this.showRings}_getActiveLabels(){return void 0!==this._userSettings.showLabels?this._userSettings.showLabels:this.showLabels}_getHeatmapSensor(){if(null!==this._userSettings.heatmap)return void 0!==this._userSettings.heatmap?this._userSettings.heatmap:this.heatmap}_getHeatmapColor(){return void 0!==this._userSettings.heatmapColor?this._userSettings.heatmapColor:this.heatmapColor}_getHeatmapSecondaryColor(){return void 0!==this._userSettings.heatmapSecondaryColor?this._userSettings.heatmapSecondaryColor:this.heatmapSecondaryColor}_getHeatmapOpacity(){return void 0!==this._userSettings.heatmapOpacity?this._userSettings.heatmapOpacity:.8}_rebuildPlantData(){const e=this._hass;if(!e)return;const t=this.entities.filter((e=>e.startsWith("plant.")));if(0===t.length)return;const i={};for(const a of t){const t=d.PlantEntityUtils.buildPlantView(e,a);t&&(i[a]={result:t})}this._plantInfoCache=i,this._identifyCycleGroups()}};t.BrokkoliArea=u,a([(0,r.state)()],u.prototype,"_hassGeneration",void 0),a([(0,r.property)({attribute:!1,hasChanged:(e,t)=>{const i=null!=e?e:[],a=null!=t?t:[];return i.length!==a.length||i.some(((e,t)=>e!==a[t]))}})],u.prototype,"entities",void 0),a([(0,r.property)()],u.prototype,"areaId",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"showRings",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"showLabels",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"heatmap",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"heatmapColor",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"heatmapSecondaryColor",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"heatmapOpacity",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"showLegend",void 0),a([(0,r.state)()],u.prototype,"_userSettings",void 0),a([(0,r.state)()],u.prototype,"_positions",void 0),a([(0,r.state)()],u.prototype,"_draggingMember",void 0),a([(0,r.state)()],u.prototype,"_dragOffset",void 0),a([(0,r.state)()],u.prototype,"_containerSize",void 0),a([(0,r.state)()],u.prototype,"_cellSize",void 0),a([(0,r.state)()],u.prototype,"_targetPosition",void 0),a([(0,r.state)()],u.prototype,"_isSnapping",void 0),a([(0,r.state)()],u.prototype,"_currentDragPosition",void 0),a([(0,r.state)()],u.prototype,"_originalPosition",void 0),a([(0,r.state)()],u.prototype,"_wasElementSelected",void 0),a([(0,r.state)()],u.prototype,"_editMode",void 0),a([(0,r.state)()],u.prototype,"_selectedMembers",void 0),a([(0,r.state)()],u.prototype,"_isMultiDragging",void 0),a([(0,r.state)()],u.prototype,"_originalPositions",void 0),a([(0,r.state)()],u.prototype,"_targetPositions",void 0),a([(0,r.state)()],u.prototype,"_isDraggingSelection",void 0),a([(0,r.state)()],u.prototype,"_showSelectionHint",void 0),a([(0,r.state)()],u.prototype,"_justFinishedMultiDrag",void 0),a([(0,r.state)()],u.prototype,"_cycleGroups",void 0),a([(0,r.state)()],u.prototype,"_bounds",void 0),a([(0,r.state)()],u.prototype,"_showAddPlantIndicator",void 0),a([(0,r.state)()],u.prototype,"_showAddPlantDialog",void 0),a([(0,r.state)()],u.prototype,"_showPlantFlyout",void 0),a([(0,r.state)()],u.prototype,"_flyoutPosition",void 0),a([(0,r.state)()],u.prototype,"_newPlantPosition",void 0),a([(0,r.state)()],u.prototype,"_debugMode",void 0),a([(0,r.state)()],u.prototype,"_highlightCell",void 0),a([(0,r.state)()],u.prototype,"_plantInfoCache",void 0),t.BrokkoliArea=u=a([(0,r.customElement)("brokkoli-area")],u)},2618:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FlowerConsumption=void 0;const o=i(4437),r=i(2924),s=i(4356),l=i(2075),d=i(2413),c=i(8063),h=i(3898),u=120,p=60;let m=class extends o.LitElement{constructor(){super(...arguments),this._charts=new Map,this._selectedPhase=null,this._phaseData=new Map,this._consumptionData=null,this._plantInfo=null,this._lastOptions=new Map,this._lastPhaseData=new Map}_loadPlantInfo(e){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const t=c.PlantEntityUtils.buildPlantView(this.hass,e);this._plantInfo=t}))}firstUpdated(){return n(this,void 0,void 0,(function*(){yield this._loadApexChartsScript()}))}disconnectedCallback(){super.disconnectedCallback(),this._charts.forEach((e=>{e&&e.destroy()})),this._charts.clear(),this._lastPhaseData.clear()}_showMoreInfo(e){(0,s.fireEvent)(this,"hass-more-info",{entityId:e})}_updateConsumptionForPhase(e,t){return n(this,void 0,void 0,(function*(){var e,i,a,n,o,r;if(!this.hass)return;if(!t)return this._selectedPhase=null,this._consumptionData=null,this._triggerValueAnimation(),void this.requestUpdate();const s=this._phaseData.get(t);if(!s)return;const l=s.start.toISOString(),d=(s.end||new Date).toISOString();try{const t=null===(e=this._plantInfo)||void 0===e?void 0:e.diagnostic_sensors,s=[null===(i=null==t?void 0:t.total_integral)||void 0===i?void 0:i.entity_id,null===(a=null==t?void 0:t.total_fertilizer_consumption)||void 0===a?void 0:a.entity_id,null===(n=null==t?void 0:t.total_water_consumption)||void 0===n?void 0:n.entity_id,null===(o=null==t?void 0:t.total_power_consumption)||void 0===o?void 0:o.entity_id,null===(r=null==t?void 0:t.energy_cost)||void 0===r?void 0:r.entity_id];if(s.some((e=>!e)))return;const c=s.map((e=>this.hass.callApi("GET",`history/period/${l}?filter_entity_id=${e}&end_time=${d}`))),h=yield Promise.all(c),u=e=>{if(!e||!e[0]||e[0].length<2)return 0;const t=e[0].filter((e=>"unavailable"!==e.state&&"unknown"!==e.state)).map((e=>parseFloat(e.state)));return t.length>=2?t[t.length-1]-t[0]:t[0]||0};this._consumptionData={ppfd:u(h[0]),fertilizer:u(h[1]),water:u(h[2]),power:u(h[3]),cost:u(h[4])},this._triggerValueAnimation(),this.requestUpdate()}catch(e){console.warn("Fehler beim Laden der Verbrauchsdaten:",e)}}))}_triggerValueAnimation(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".consumption-item");t&&t.forEach((e=>{e.classList.remove("animate"),e.offsetWidth,e.classList.add("animate")}))}render(){var e,t,i,a,n,r,s,l,c,h,u,p,m,_,g,v,f,y,b;if(!this.hass||!this.entityId)return o.html``;const w=this.entityId.split(".")[1],x=null===(e=this._plantInfo)||void 0===e?void 0:e.diagnostic_sensors,k=null!==(i=null===(t=null==x?void 0:x.total_integral)||void 0===t?void 0:t.entity_id)&&void 0!==i?i:"",S=null!==(n=null===(a=null==x?void 0:x.total_fertilizer_consumption)||void 0===a?void 0:a.entity_id)&&void 0!==n?n:"",$=null!==(s=null===(r=null==x?void 0:x.total_water_consumption)||void 0===r?void 0:r.entity_id)&&void 0!==s?s:"",z=null!==(c=null===(l=null==x?void 0:x.total_power_consumption)||void 0===l?void 0:l.entity_id)&&void 0!==c?c:"",E=null!==(u=null===(h=null==x?void 0:x.energy_cost)||void 0===h?void 0:h.entity_id)&&void 0!==u?u:"",C=(e,t=1)=>("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?"N/A":e.toFixed(t));return o.html`
            <div class="consumption-data">
                <div class="consumption-item" @click="${()=>k&&this._showMoreInfo(k)}">
                    <ha-icon icon="mdi:counter"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_ppfd")}</span>
                        <span class="value consumption-value">${C(this._consumptionData?this._consumptionData.ppfd:(k?null===(p=this.hass.states[k])||void 0===p?void 0:p.state:null)||"N/A")} mol/s⋅m²</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>S&&this._showMoreInfo(S)}">
                    <ha-icon icon="mdi:chart-line-variant"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_fertilizer_consumption")}</span>
                        <span class="value consumption-value">${C(this._consumptionData?this._consumptionData.fertilizer:(S?null===(m=this.hass.states[S])||void 0===m?void 0:m.state:null)||"N/A")} ${null!==(v=S?null===(g=null===(_=this.hass.states[S])||void 0===_?void 0:_.attributes)||void 0===g?void 0:g.unit_of_measurement:null)&&void 0!==v?v:"mS/cm"}</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>$&&this._showMoreInfo($)}">
                    <ha-icon icon="mdi:water-pump"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_water_consumption")}</span>
                        <span class="value consumption-value">${C(this._consumptionData?this._consumptionData.water:($?null===(f=this.hass.states[$])||void 0===f?void 0:f.state:null)||"N/A")} L</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>z&&this._showMoreInfo(z)}">
                    <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_power_consumption")}</span>
                        <span class="value consumption-value">${C(this._consumptionData?this._consumptionData.power:(z?null===(y=this.hass.states[z])||void 0===y?void 0:y.state:null)||"N/A")} kWh</span>
                    </div>
                </div>
                <div class="consumption-item large" @click="${()=>E&&this._showMoreInfo(E)}">
                    <ha-icon icon="mdi:cash-multiple"></ha-icon>
                    <div class="consumption-details large">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"energy_cost")}</span>
                        <span class="value consumption-value">${C(this._consumptionData?this._consumptionData.cost:(E?null===(b=this.hass.states[E])||void 0===b?void 0:b.state:null)||"N/A",2)} €</span>
                    </div>
                </div>
            </div>
            
            <div class="consumption-charts-container">
                <div class="pie-chart-container">
                    ${this._renderPieChart(w)}
                </div>
            </div>
        `}_renderPieChart(e){var t,i,a,n,r,s;const l=null===(a=null===(i=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===i?void 0:i.growth_phase)||void 0===a?void 0:a.entity_id,c=l?this.hass.states[l]:void 0;if(!c)return o.html`
                <div style="text-align: center; padding: 20px;">
                    Keine Daten für das Pie Chart verfügbar
                </div>
            `;const h={Seed:this._calculatePhaseDuration(c.attributes.seeds_start,c.attributes.seeds_duration),Germination:this._calculatePhaseDuration(c.attributes.germination_start,c.attributes.germination_duration),Rooting:this._calculatePhaseDuration(c.attributes.rooting_start,c.attributes.rooting_duration),Growth:this._calculatePhaseDuration(c.attributes.growing_start,c.attributes.growing_duration),"Flowering Past":0,"Flowering To Go":0,Harvested:this._calculatePhaseDuration(c.attributes.harvested_date,c.attributes.harvested_duration)},u=null===(s=null===(r=null===(n=this._plantInfo)||void 0===n?void 0:n.helpers)||void 0===r?void 0:r.flowering_duration)||void 0===s?void 0:s.entity_id,p=u?this.hass.states[u]:void 0,m=c.attributes.flowering_start,_=m&&"null"!==m&&""!==m;if(null==p?void 0:p.state){const e=parseInt(p.state);if(_){const t=new Date(m),i=new Date,a=Math.floor((i.getTime()-t.getTime())/864e5);a>=0?(h["Flowering Past"]=Math.min(a,e),h["Flowering To Go"]=Math.max(0,e-a)):h["Flowering To Go"]=e}else h["Flowering To Go"]=e}return 0===Object.values(h).reduce(((e,t)=>e+t),0)?o.html`
                <div style="text-align: center; padding: 20px;">
${d.TranslationUtils.translateUI(this.hass,"no_completed_phases")}
                </div>
            `:o.html`
            <div class="pie-chart">
                <div id="pie-chart-${e}"></div>
            </div>
        `}_calculatePhaseDuration(e,t){if(!e||"null"===e||""===e)return 0;if(t)return t;const i=new Date(e),a=new Date,n=Math.floor((a.getTime()-i.getTime())/864e5);return Math.max(1,n)}_getPhaseDataString(e){return e?JSON.stringify({samen:e.attributes.seeds_duration||0,keimen:e.attributes.germination_duration||0,wurzeln:e.attributes.rooting_duration||0,wachstum:e.attributes.growing_duration||0,bluete:e.attributes.flower_duration||0,geerntet:e.attributes.harvested_duration||0}):""}_initPieChart(e){return n(this,void 0,void 0,(function*(){var t,i,a,n,o,r,s,l,c,h,m,_;yield this._loadApexChartsScript();const g=this._charts.has("pie"),v=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`#pie-chart-${e}`);if(!v)return;const f=null===(n=null===(a=null===(i=this._plantInfo)||void 0===i?void 0:i.helpers)||void 0===a?void 0:a.growth_phase)||void 0===n?void 0:n.entity_id,y=f?null===(o=this.hass)||void 0===o?void 0:o.states[f]:void 0;if(!y)return;const b=this._getPhaseDataString(y);if(b===this._lastPhaseData.get(e)&&g)return;this._lastPhaseData.set(e,b);const w={Seed:this._calculatePhaseDuration(y.attributes.seeds_start,y.attributes.seeds_duration),Germination:this._calculatePhaseDuration(y.attributes.germination_start,y.attributes.germination_duration),Rooting:this._calculatePhaseDuration(y.attributes.rooting_start,y.attributes.rooting_duration),Growth:this._calculatePhaseDuration(y.attributes.growing_start,y.attributes.growing_duration),"Flowering Past":0,"Flowering To Go":0,Harvested:this._calculatePhaseDuration(y.attributes.harvested_date,y.attributes.harvested_duration)},x=null===(l=null===(s=null===(r=this._plantInfo)||void 0===r?void 0:r.helpers)||void 0===s?void 0:s.flowering_duration)||void 0===l?void 0:l.entity_id,k=x?this.hass.states[x]:void 0,S=y.attributes.flowering_start,$=S&&"null"!==S&&""!==S;if(null==k?void 0:k.state){const e=parseInt(k.state);if($){const t=new Date(S),i=new Date,a=Math.floor((i.getTime()-t.getTime())/864e5);a>=0&&(w["Flowering Past"]=Math.min(a,e),w["Flowering To Go"]=Math.max(0,e-a))}}const z=d.TranslationUtils,E={Seed:z.translateGrowthPhase(this.hass,"seeds"),Germination:z.translateGrowthPhase(this.hass,"germination"),Rooting:z.translateGrowthPhase(this.hass,"rooting"),Growth:z.translateGrowthPhase(this.hass,"growing"),"Flowering Past":z.translateUI(this.hass,"flowering_past"),"Flowering To Go":z.translateUI(this.hass,"flowering_to_go"),Harvested:z.translateGrowthPhase(this.hass,"harvested")},C=z.translateUI(this.hass,"days"),I=z.translateGrowthPhase(this.hass,"flowering"),M=Object.values(w).filter((e=>e>0)),P=Object.entries(w).filter((([,e])=>e>0)).map((([e])=>{var t;return null!==(t=E[e])&&void 0!==t?t:e})),D=this._charts.get("pie");if(D)return void D.updateOptions({labels:P,series:M});const T={chart:{type:"pie",background:"transparent",redrawOnParentResize:!0,animations:{enabled:!0,speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},events:{dataPointSelection:(t,i,a)=>{var n,o;const r=P[a.dataPointIndex],s=null!==(o=null===(n=Object.entries(E).find((([,e])=>e===r)))||void 0===n?void 0:n[0])&&void 0!==o?o:r;0===a.selectedDataPoints[0].length||this._selectedPhase===s&&1===a.selectedDataPoints[0].length?(this._updateConsumptionForPhase(e,null),a.selectedDataPoints[0]=[],i.w.globals.selectedDataPoints[0]=[]):(this._selectedPhase=s,this._updateConsumptionForPhase(e,s))}}},series:M,labels:P,colors:[`hsl(${u}, ${p}%, 55%)`,`hsl(${u}, ${p}%, 50%)`,`hsl(${u}, ${p}%, 45%)`,`hsl(${u}, ${p}%, 40%)`,`hsl(${u}, ${p}%, 35%)`,`hsl(${u}, ${p}%, 30%)`,`hsl(${u}, ${p}%, 45%)`],legend:{show:!1},dataLabels:{enabled:!0,style:{fontSize:"clamp(10px, 1.2vw, 14px)",fontFamily:"var(--paper-font-body1_-_font-family)"},textAnchor:"start",distributed:!0,color:"var(--primary-text-color)",formatter:function(e,t){const i=t.w.globals.series[t.seriesIndex],a=t.w.globals.labels[t.seriesIndex],n=E["Flowering Past"];if(a===E["Flowering To Go"]){const e=P.indexOf(n),t=e>=0&&M[e]||0;return t>0?[I,`${t}/${i}/${t+i} ${C}`]:[I,`${i} ${C}`]}return a===n?[""]:[`${a}`,`${i} ${C}`]}},tooltip:{enabled:!0,theme:"light",style:{fontSize:"clamp(10px, 1.2vw, 14px)"},y:{formatter:function(e){return`${e} ${C}`}}},plotOptions:{pie:{dataLabels:{minAngleToShowLabel:0,offset:-25},donut:{size:"0%"},expandOnClick:!0,offsetX:0,offsetY:0}},stroke:{show:!0,width:2,colors:["var(--card-background-color)"]},theme:{mode:"light",palette:"palette1"}};if(y){const e=["seeds","germination","rooting","growing","flowering","harvested"],t={seeds:"Seed",germination:"Germination",rooting:"Rooting",growing:"Growth",flowering:"Flowering",harvested:"Harvested"};e.forEach(((i,a)=>{const n=y.attributes[`${i}_start`];if(n){const o=new Date(n);let r=null;if(a<e.length-1){const t=e[a+1],i=y.attributes[`${t}_start`];i&&(r=new Date(i))}r||y.state!==i||(r=new Date),this._phaseData.set(t[i],{start:o,end:r,duration:r?Math.floor((r.getTime()-o.getTime())/864e5):0})}}));const i=new Date,a=null===(m=null===(h=null===(c=this._plantInfo)||void 0===c?void 0:c.helpers)||void 0===h?void 0:h.flowering_duration)||void 0===m?void 0:m.entity_id,n=a?null===(_=this.hass)||void 0===_?void 0:_.states[a]:void 0,o=(null==n?void 0:n.state)?parseInt(n.state):0;if(y.attributes.flowering_start){const e=new Date(y.attributes.flowering_start);if(this._phaseData.set("Flowering Past",{start:e,end:i,duration:Math.floor((i.getTime()-e.getTime())/864e5)}),o>0){const t=new Date(e);t.setDate(t.getDate()+o),this._phaseData.set("Flowering To Go",{start:i,end:t,duration:Math.floor((t.getTime()-i.getTime())/864e5)})}}else if(o>0){const e=new Date(i);e.setDate(e.getDate()+o),this._phaseData.set("Flowering To Go",{start:i,end:e,duration:o})}}if(!this._apex)return;const A=new this._apex(v,T);yield A.render(),this._charts.set("pie",A)}))}_loadApexChartsScript(){return n(this,void 0,void 0,(function*(){this._apex=yield(0,h.apexChartsLaden)()}))}updated(e){if(super.updated(e),this.entityId&&this.hass){const t=this.entityId.split(".")[1];if(e.has("entityId")&&this.entityId)return this._charts.forEach((e=>{e.destroy()})),this._charts.clear(),this._lastPhaseData.clear(),void this._loadPlantInfo(this.entityId).then((()=>this._initPieChart(t)));e.has("hass")&&this._initPieChart(t)}}};t.FlowerConsumption=m,m.styles=l.style,a([(0,r.property)()],m.prototype,"hass",void 0),a([(0,r.property)()],m.prototype,"entityId",void 0),a([(0,r.state)()],m.prototype,"_charts",void 0),a([(0,r.state)()],m.prototype,"_selectedPhase",void 0),a([(0,r.state)()],m.prototype,"_phaseData",void 0),a([(0,r.state)()],m.prototype,"_consumptionData",void 0),a([(0,r.state)()],m.prototype,"_plantInfo",void 0),t.FlowerConsumption=m=a([(0,r.customElement)("flower-consumption")],m)},4507:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FlowerGallery=void 0;const o=i(4437),r=i(2924),s=i(6781),l=i(364),d=i(8063),c=i(2413),h=i(4139);class u extends o.LitElement{constructor(){super(...arguments),this.images=[],this._currentImageIndex=0,this._isFading=!1,this._showFlyout=!1,this._showDeleteFlyout=!1,this._showMainImageFlyout=!1,this._showOtherImages=!1,this._reparentedToBody=!1,this._plantInfo=null,this._isLoading=!1,this._imagesList=[],this._isImagesLoading=!1,this._otherImagesList=[]}_changeImage(){return n(this,arguments,void 0,(function*(e="next"){this._isFading=!0,this.requestUpdate(),yield new Promise((e=>setTimeout(e,500))),this._currentImageIndex="next"===e?(this._currentImageIndex+1)%this.images.length:(this._currentImageIndex-1+this.images.length)%this.images.length,this._isFading=!1,this.requestUpdate()}))}_selectImage(e){return n(this,void 0,void 0,(function*(){e!==this._currentImageIndex&&(this._isFading=!0,this.requestUpdate(),yield new Promise((e=>setTimeout(e,500))),this._currentImageIndex=e,this._isFading=!1,this.requestUpdate())}))}_toggleFlyout(e){e.preventDefault(),e.stopPropagation(),this._showFlyout=!this._showFlyout}_toggleDeleteFlyout(e){e.preventDefault(),e.stopPropagation(),this._showDeleteFlyout=!this._showDeleteFlyout}_toggleMainImageFlyout(e){e.preventDefault(),e.stopPropagation(),this._showMainImageFlyout=!this._showMainImageFlyout}_toggleOtherImages(e){e.preventDefault(),e.stopPropagation(),this._showOtherImages=!this._showOtherImages,this.requestUpdate()}_calculateOtherImagesWidth(){return 84*this._otherImagesList.length+8*Math.max(0,this._otherImagesList.length-1)+16}_handleFileUpload(e){return n(this,void 0,void 0,(function*(){const t=e.target.files;if(t&&t.length>0){const e=t[0];if(!e.type.startsWith("image/"))return void alert(c.TranslationUtils.translateUI(this.hass,"upload_images_only"));if(e.size>10485760)return void alert(c.TranslationUtils.translateUI(this.hass,"image_too_large"));try{yield this._uploadImage(e),this._showFlyout=!1}catch(e){alert(c.TranslationUtils.translateUI(this.hass,"upload_error")+": "+e.message)}}}))}_uploadImage(e){return n(this,void 0,void 0,(function*(){if(!this.entityId||!this.hass)return;const t=16384,i=new FileReader;i.onload=i=>n(this,void 0,void 0,(function*(){var a;if(!(null===(a=i.target)||void 0===a?void 0:a.result))return;const n=i.target.result,o=Math.ceil(n.byteLength/t);for(let i=0;i<o;i++){const a=n.slice(i*t,(i+1)*t),r=Array.from(new Uint8Array(a)).map((e=>e.toString(16).padStart(2,"0"))).join("");try{yield this.hass.connection.sendMessagePromise({type:"plant/upload_image",entity_id:this.entityId,filename:e.name,chunk:r,chunk_index:i,total_chunks:o})}catch(e){throw console.error("Upload error:",e),e}}yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId}),setTimeout((()=>{this._initGallery()}),1e3)})),i.readAsArrayBuffer(e)}))}_deleteImage(e){return n(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/delete_image",entity_id:this.entityId,filename:e}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(e){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"delete_image_error")}: ${e.message}`)}}))}_setMainImage(e){return n(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/set_main_image",entity_id:this.entityId,filename:e}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(e){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"set_main_image_error")}: ${e.message}`)}}))}_close(e){e.stopPropagation(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.onClose&&this.onClose(),this.remove()}_loadPlantInfo(){return n(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&!this._isLoading){this._isLoading=!0;try{this._plantInfo=d.PlantEntityUtils.buildPlantView(this.hass,this.entityId),yield this._initGallery()}catch(e){console.warn("Fehler beim Laden der Pflanzen-Info:",e),this._plantInfo=null}finally{this._isLoading=!1}}}))}_initGallery(){return n(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&this._plantInfo&&!this._isImagesLoading){this._isImagesLoading=!0;try{this._imagesList=yield u.getImagesWithDates(this.hass,this.entityId,this._plantInfo),this._otherImagesList=yield u.getOtherImagesWithDates(this.hass,this.entityId,this._plantInfo);const e=[...this._imagesList,...this._otherImagesList];this.images.length,this.images=e.map((e=>e.url)),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.images.length>1&&(this._imageRotationInterval=setInterval((()=>{this._changeImage()}),1e4)),this.requestUpdate()}catch(e){console.warn("Fehler beim Laden der Bilder:",e)}finally{this._isImagesLoading=!1}}}))}connectedCallback(){super.connectedCallback(),this.parentElement!==document.body&&(document.body.appendChild(this),this._reparentedToBody=!0),void 0!==this.initialImageIndex&&(this._currentImageIndex=this.initialImageIndex),this._loadPlantInfo()}disconnectedCallback(){super.disconnectedCallback(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval)}static get styles(){return l.galleryStyles}static getImageDateFromUrl(e){const t=e.match(/_(\d{8}_\d{6})/);if(!t)return null;const i=t[1],a=i.slice(0,4),n=i.slice(4,6),o=i.slice(6,8),r=i.slice(9,11),s=i.slice(11,13);return new Date(`${a}-${n}-${o}T${r}:${s}:00`)}static getImagesWithDates(e,t,i){return n(this,void 0,void 0,(function*(){const a=e.states[t];if(!(null==a?void 0:a.attributes.images))return[];const n=a.attributes.download_path||"/local/images/plants/",o=[];let r;return r=i?yield this.getFirstPhaseDate(e,t,i):yield this.getFirstPhaseDate(e,t),a.attributes.entity_picture&&r&&o.push({url:a.attributes.entity_picture,date:r}),a.attributes.images.forEach((e=>{const t=this.getImageDateFromUrl(e);t&&r&&t>=r&&o.push({url:`${n}${e}`,date:t})})),o.sort(((e,t)=>e.date.getTime()-t.date.getTime()))}))}static getOtherImagesWithDates(e,t,i){return n(this,void 0,void 0,(function*(){const a=e.states[t];if(!(null==a?void 0:a.attributes.images))return[];const n=a.attributes.download_path||"/local/images/plants/",o=[];let r;return r=i?yield this.getFirstPhaseDate(e,t,i):yield this.getFirstPhaseDate(e,t),r?(a.attributes.images.forEach((e=>{const t=this.getImageDateFromUrl(e);t?t<r&&o.push({url:`${n}${e}`,date:t}):o.push({url:`${n}${e}`,date:new Date(1970,0,1)})})),o.sort(((e,t)=>e.date.getTime()-t.date.getTime()))):[]}))}static getFirstPhaseDate(e,t,i){return n(this,void 0,void 0,(function*(){var a,n,o,r;if(i){if(!(null===(n=null===(a=null==i?void 0:i.helpers)||void 0===a?void 0:a.growth_phase)||void 0===n?void 0:n.entity_id))return null;const t=i.helpers.growth_phase.entity_id,o=e.states[t];if(!o)return null;const r=h.PHASES;for(const e of r){const t=o.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t)return new Date(t)}return null}try{const i=d.PlantEntityUtils.buildPlantView(e,t);if(!(null===(r=null===(o=null==i?void 0:i.helpers)||void 0===o?void 0:o.growth_phase)||void 0===r?void 0:r.entity_id))return null;const a=i.helpers.growth_phase.entity_id,n=e.states[a];if(!n)return null;const s=h.PHASES;for(const e of s){const t=n.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t)return new Date(t)}return null}catch(e){return console.warn("Fehler beim Laden der Pflanzen-Info für getFirstPhaseDate:",e),null}}))}_getGroupedImages(){var e,t,i;if(!this.entityId||!this.hass||!this._plantInfo)return[];const a=[];if(this._otherImagesList.length>0){const e=[];this._otherImagesList.forEach(((t,i)=>{e.push({url:t.url,day:i+1,totalDays:this._otherImagesList.length})})),a.push({phase:c.TranslationUtils.translateUI(this.hass,"other_images"),images:e,color:"var(--secondary-text-color)"})}if(!(null===(i=null===(t=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===t?void 0:t.growth_phase)||void 0===i?void 0:i.entity_id))return a;const n=this._plantInfo.helpers.growth_phase.entity_id,o=this.hass.states[n];if(!o)return a;const r=h.PHASES;let s="",l=[];const d=r.filter((e=>null!=o.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`])),u={};r.forEach((e=>{u[e]=c.TranslationUtils.translateGrowthPhase(this.hass,e)}));let p=null;for(const e of r){const t=o.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){p=new Date(t);break}}if(!p)return a;if(this._imagesList.forEach((e=>{const t=e.url,i=e.date;let n="",c=0,h=0;for(const e of r){const t=o.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){const a=new Date(t);i>=a&&(n=u[e],c=Math.floor((i.getTime()-a.getTime())/864e5))}}if(h=Math.floor((i.getTime()-p.getTime())/864e5),n){if(n!==s){if(l.length>0){const e=r.find((e=>u[e]===s)),t=e?d.indexOf(e):-1;let i="var(--primary-color)";"harvested"===e?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===e?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":e&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-t/Math.max(1,d.length-1)*25}%)`),a.push({phase:s,images:l,color:i})}s=n,l=[]}l.push({url:t,day:c+1,totalDays:h+1})}})),l.length>0){const e=r.find((e=>u[e]===s)),t=e?d.indexOf(e):-1;let i="var(--primary-color)";"harvested"===e?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===e?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":e&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-t/Math.max(1,d.length-1)*25}%)`),a.push({phase:s,images:l,color:i})}return a}_getImageDate(e){var t,i,a,n;let o=this._imagesList.find((t=>t.url===e));if(o||(o=this._otherImagesList.find((t=>t.url===e))),!o)return c.TranslationUtils.translateUI(this.hass,"unknown_date");const r=o.date;if(r.getTime()===new Date(1970,0,1).getTime())return`<div class="date-line">${c.TranslationUtils.translateUI(this.hass,"unknown_date")}</div>`;const s=r.toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});if(!(null===(a=null===(i=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===i?void 0:i.growth_phase)||void 0===a?void 0:a.entity_id))return s;const l=this._plantInfo.helpers.growth_phase.entity_id,d=null===(n=this.hass)||void 0===n?void 0:n.states[l];if(!d)return s;const u=h.PHASES;let p="",m=0,_=0,g=null;for(const e of u){const t=d.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){g=new Date(t);break}}for(const e of u){const t=d.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){const i=new Date(t);r>=i&&(p=c.TranslationUtils.translateGrowthPhase(this.hass,e),m=Math.floor((r.getTime()-i.getTime())/864e5))}}if(g&&(_=Math.floor((r.getTime()-g.getTime())/864e5)),0===this.images.indexOf(e)){let e=`<div class="date-line">${s}</div>`;return e+=`<div class="info-line">Tag 1 <span class="phase">${p}</span>/1 Total</div>`,e}let v=`<div class="date-line">${s}</div>`;return v+=`<div class="info-line">Tag ${m+1} <span class="phase">${p}</span>/${_+1} Total</div>`,v}render(){return o.html`
            <div class="gallery-overlay" @click="${this._close}">
                <div class="gallery-content" @click="${e=>e.stopPropagation()}">
                    <div class="gallery-header">
                        <span class="gallery-date">
                            ${this.images.length>0?(0,s.unsafeHTML)(this._getImageDate(this.images[this._currentImageIndex])):c.TranslationUtils.translateUI(this.hass,"no_images_available")}
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
                                            @change="${e=>{this._handleFileUpload(e),this._showFlyout=!1}}"
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
                                            @change="${e=>{this._handleFileUpload(e),this._showFlyout=!1}}"
                                            style="display: none;"
                                        >
                                        <ha-icon-button>
                                            <ha-icon icon="mdi:camera"></ha-icon>
                                        </ha-icon-button>
                                    </label>
                                </div>
                            </div>
                            ${this.images.length>0?o.html`
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
                                            @click="${()=>n(this,void 0,void 0,(function*(){const e=this.images[this._currentImageIndex].split("/").pop();if(e)try{yield this._setMainImage(e),this._showMainImageFlyout=!1}catch(e){alert(c.TranslationUtils.translateUI(this.hass,"set_main_image_error")+": "+e.message)}}))}"
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
                                            @click="${()=>n(this,void 0,void 0,(function*(){const e=this.images[this._currentImageIndex].split("/").pop();if(e)try{yield this._deleteImage(e),this._showDeleteFlyout=!1,this.images=this.images.filter((t=>!t.includes(e))),this._currentImageIndex>=this.images.length&&(this._currentImageIndex=Math.max(0,this.images.length-1))}catch(e){alert(c.TranslationUtils.translateUI(this.hass,"delete_error")+": "+e.message)}}))}"
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
                    
                    ${this.images.length>0?o.html`
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
                                ${this._otherImagesList.length>0?o.html`
                                    <div class="nav-toggle ${this._showOtherImages?"open":"closed"}"
                                         @click="${this._toggleOtherImages}">
                                        <ha-icon icon="mdi:chevron-left" class="nav-icon"></ha-icon>
                                    </div>
                                `:""}
                                <div class="thumbnails-scroll ${this._otherImagesList.length>0?"has-other-images":""} ${this._showOtherImages?"shifted-right":""}"
                                     style="--other-images-width: ${this._otherImagesList.length>0?this._calculateOtherImagesWidth():0}px">
                                    ${this._getGroupedImages().map((e=>o.html`
                                        <div class="thumbnail-group">
                                            <div class="thumbnail-group-label" style="--phase-color: ${e.color}">
                                                ${e.phase}
                                            </div>
                                            <div class="thumbnail-group-images">
                                                ${e.images.map((e=>o.html`
                                                    <div class="thumbnail-container ${this.images[this._currentImageIndex]===e.url?"active":""}"
                                                         @click="${()=>this._selectImage(this.images.indexOf(e.url))}">
                                                        <div class="thumbnail-day">Tag ${e.day}/${e.totalDays}</div>
                                                        <img class="thumbnail" src="${e.url}">
                                                    </div>
                                                `))}
                                            </div>
                                        </div>
                                    `))}
                                </div>
                            </div>
                        </div>
                    `:o.html`
                        <div class="no-images-message">
                            <ha-icon icon="mdi:image-off"></ha-icon>
                            <span>${c.TranslationUtils.translateUI(this.hass,"no_images_available")}</span>
                            <span>${c.TranslationUtils.translateUI(this.hass,"click_camera_to_add_image")}</span>
                        </div>
                    `}
                </div>
            </div>
        `}}t.FlowerGallery=u,a([(0,r.property)()],u.prototype,"hass",void 0),a([(0,r.property)()],u.prototype,"entityId",void 0),a([(0,r.property)({type:Array})],u.prototype,"images",void 0),a([(0,r.property)()],u.prototype,"onClose",void 0),a([(0,r.property)()],u.prototype,"getImageDate",void 0),a([(0,r.property)({type:Number})],u.prototype,"initialImageIndex",void 0),a([(0,r.state)()],u.prototype,"_currentImageIndex",void 0),a([(0,r.state)()],u.prototype,"_isFading",void 0),a([(0,r.state)()],u.prototype,"_showFlyout",void 0),a([(0,r.state)()],u.prototype,"_showDeleteFlyout",void 0),a([(0,r.state)()],u.prototype,"_showMainImageFlyout",void 0),a([(0,r.state)()],u.prototype,"_showOtherImages",void 0),customElements.get("flower-gallery")||customElements.define("flower-gallery",u)},5953:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FlowerGraph=t.chartOptions=void 0;const o=i(4437),r=i(2924),s=i(1334),l=i(3898),d=i(8063),c=i(2413);function h(e){return new Promise(((t,i)=>{const a=document.createElement("script");a.src=e,a.onload=()=>t(),a.onerror=()=>i(new Error(`Skript nicht ladbar: ${e}`)),document.head.appendChild(a)}))}t.chartOptions={chart:{type:"rangeArea",height:250,animations:{enabled:!0,speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",zoom:{enabled:!0,autoScaleYaxis:!1,allowMouseWheelZoom:!0,type:"x"},toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0},autoSelected:"zoom"}},series:[],legend:{show:!0,showForSingleSeries:!0,position:"right",horizontalAlign:"left",offsetY:5,offsetX:0,fontSize:"0px",markers:{size:0}},xaxis:{type:"datetime",labels:{rotateAlways:!1,datetimeUTC:!1,hideOverlappingLabels:!0,formatter:function(e,t,i){var a,n,o,r,s,l;const d=new Date(e),c=new Date((null===(n=null===(a=null==i?void 0:i.w)||void 0===a?void 0:a.config)||void 0===n?void 0:n.brokkoliStart)||d);c.setHours(0,0,0,0);const h=Math.floor((d.getTime()-c.getTime())/864e5)+1,u=(null===(r=null===(o=null==i?void 0:i.w)||void 0===o?void 0:o.globals)||void 0===r?void 0:r.minX)||0,p=((null===(l=null===(s=null==i?void 0:i.w)||void 0===s?void 0:s.globals)||void 0===l?void 0:l.maxX)||0)-u;if(p<2592e5)return new Date(d.getTime()-36e5).getDate()!==d.getDate()?`(${h}) ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(d)}`:new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit"}).format(d);if(p<26784e5)return`${h} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(d)}`;{const e=new Date(d.getTime()+864e5);return d.getMonth()!==e.getMonth()?`${h} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric",year:"2-digit"}).format(d)}`:`${h} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(d)}`}},style:{fontSize:"12px",fontFamily:"var(--paper-font-body1_-_font-family)"}},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:[{labels:{formatter:e=>`${e.toFixed(0)}`,style:{fontSize:"11px",fontFamily:"var(--paper-font-body1_-_font-family)"},offsetX:-5},min:0,max:35,tickAmount:10,axisBorder:{show:!1},axisTicks:{show:!1}},{opposite:!0,labels:{formatter:e=>`${e.toFixed(0)}`,style:{fontSize:"11px",fontFamily:"var(--paper-font-body1_-_font-family)"},offsetX:5},min:0,max:100,floating:!0,tickAmount:10,axisBorder:{show:!1},axisTicks:{show:!1}}],stroke:{curve:"straight",width:Array(20).fill(2),dashArray:Array(20).fill(0)},colors:[],tooltip:{enabled:!0,shared:!0,intersect:!1,followCursor:!1,custom:function({series:e,dataPointIndex:t,w:i}){var a;try{const n=null===(a=i.globals.seriesX[0])||void 0===a?void 0:a[t],o=new Date(null!=n?n:NaN),r=!isNaN(o.getTime());let s=0;const l=i.config.brokkoliStart;if(r&&l){const e=new Date(l<1e12?1e3*l:l);if(!isNaN(e.getTime())){const t=new Date(e);t.setHours(0,0,0,0),s=Math.floor((o.getTime()-t.getTime())/864e5)+1}}const d=r?new Intl.DateTimeFormat(void 0,{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(o):"",c=s>0?`<strong>Tag ${s}</strong> - ${d}`:d,h=(i.config.series?i.config.series.filter(((e,t)=>t%2==1)).map(((e,t)=>{const a=2*t;return{name:e.name,unit:i.config.series[a].unit||"",color:i.config.colors[a],index:a}})):[]).map((t=>{var a,o,r,s,l;const d=function(e,t){if(!e||0===e.length||isNaN(t))return-1;let i=-1;for(let a=0;a<e.length&&e[a]<=t;a++)i=a;return i}(i.globals.seriesX[t.index+1],n),c=-1===d||null===(o=null===(a=i.globals.seriesRangeStart)||void 0===a?void 0:a[t.index])||void 0===o?void 0:o[d],h=-1===d||null===(s=null===(r=i.globals.seriesRangeEnd)||void 0===r?void 0:r[t.index])||void 0===s?void 0:s[d],u=null==c||null==h?void 0:{min:c,max:h},p=-1===d||null===(l=e[t.index+1])||void 0===l?void 0:l[d];return`<div class="tooltip-sensor-name" style="color: ${t.color}">${t.name}:</div><div class="tooltip-range">${u?`${Number(u.min).toFixed(0)} - ${Number(u.max).toFixed(0)}`:"-"}</div><div class="tooltip-mean">${null==p?"-":`${Number(p).toFixed(1)}${t.unit}`}</div>`})).join("");return`\n                    <div class="tooltip-container">\n                        <div class="tooltip-header">${c}</div>\n                        <div class="tooltip-content">${h}</div>\n                    </div>\n                `}catch(e){return console.error("Fehler beim Erstellen des Tooltips:",e),'<div class="tooltip-error">Fehler beim Laden der Daten</div>'}},fillSeriesColor:!1,theme:!1,onDatasetHover:{highlightDataSeries:!0}},dataLabels:{enabled:!1},markers:{size:[0,0],strokeWidth:2,hover:{size:3,sizeOffset:3}},fill:{type:["solid","solid"],opacity:[.24,1]},grid:{show:!1,padding:{top:0,right:0,bottom:0,left:0}},theme:{mode:"light"}};let u=class extends o.LitElement{constructor(){super(...arguments),this._data=[],this._dateRange=[new Date,new Date],this._lastUpdate=0,this._scriptLoaded=!1,this._prevRangeData=null,this._prevMeanData=null,this._prevMoistureRangeData=null,this._prevMoistureMeanData=null,this._isConnected=!1,this._initialized=!1,this._plantInfo=null,this._sensorTypes=[{id:"temperature",scale:1,yaxis:0,color:"#2E93fA"},{id:"conductivity",scale:.01,yaxis:0,color:"#00D2FF"},{id:"dli",scale:1,yaxis:0,color:"#FFB900"},{id:"health",scale:6,yaxis:0,color:"#FF4560",apiPath:"helpers.health"},{id:"water_consumption",scale:1,yaxis:0,color:"#775DD0"},{id:"fertilizer_consumption",scale:.01,yaxis:0,color:"#00D2FF"},{id:"power_consumption",scale:.01,yaxis:0,color:"#FEB019"},{id:"soil_moisture",scale:1,yaxis:1,color:"#00E396",apiPath:"moisture"},{id:"illuminance",scale:.01,yaxis:1,color:"#CED4DC"},{id:"humidity",scale:1,yaxis:1,color:"#008FFB"}],this._sensors=[],this._chartBautGerade=!1,this._aufbauFehlversuche=0,this._versteckteSensoren=new Set}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return n(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this._isConnected=!0,this._aufbauFehlversuche=0,yield this._chartAufbauen()}))}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this._chart&&(this._chart.destroy(),this._chart=void 0),this._picker&&(this._picker.destroy(),this._picker=void 0)}firstUpdated(){return n(this,void 0,void 0,(function*(){yield this._chartAufbauen()}))}_chartAufbauen(){return n(this,void 0,void 0,(function*(){if(!this._chartBautGerade&&!this._chart&&this.entityId&&this.hass&&!(this._aufbauFehlversuche>=3)){this._chartBautGerade=!0;try{if(yield this._loadScripts(),yield this._loadFlatpickr(),this._picker||this._initDatePicker(),this._plantInfo=this._getPlantInfo(),!this._plantInfo)return;this._updateSensorsFromPlantInfo(),yield this.updateDateRange(),yield this._initChart(),this.requestUpdate(),this._chart?(this._aufbauFehlversuche=0,this._initialized=!0):this._aufbauNotieren()}catch(e){console.warn("Graph konnte nicht aufgebaut werden:",e),this._aufbauNotieren()}finally{this._chartBautGerade=!1}}}))}_aufbauNotieren(){this._aufbauFehlversuche++,this._aufbauFehlversuche>=3&&console.error(`Graph fuer ${this.entityId} nach 3 Versuchen aufgegeben. Neu versucht wird erst nach einem Neuaufbau der Karte.`)}_updateSensorsFromPlantInfo(){this._plantInfo&&(this._sensors=this._sensorTypes.map((e=>{const t=(e.apiPath||e.id).split(".");let i=this._plantInfo;for(const e of t){if(!i||"object"!=typeof i||!i[e]){i=null;break}i=i[e]}return"helpers"===t[0]&&i&&i.entity_id?{id:e.id,name:this.hass?c.TranslationUtils.translateSensor(this.hass,e.id):e.id,scale:e.scale,yaxis:e.yaxis,color:e.color,entityId:i.entity_id,icon:i.icon,unit:i.unit_of_measurement}:{id:e.id,name:this.hass?c.TranslationUtils.translateSensor(this.hass,e.id):e.id,scale:e.scale,yaxis:e.yaxis,color:e.color,entityId:(null==i?void 0:i.sensor)||null,icon:null==i?void 0:i.icon,unit:null==i?void 0:i.unit_of_measurement}})).filter((e=>null!==e.entityId)))}updateDateRange(){return n(this,void 0,void 0,(function*(){var e,t,i;if(!this.entityId||!this.hass)return;this.entityId.split(".")[1];const a=null===(i=null===(t=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===t?void 0:t.growth_phase)||void 0===i?void 0:i.entity_id,n=a?this.hass.states[a]:void 0;if(null==n?void 0:n.attributes){const e=["seeds_start","germination_start","rooting_start","growing_start","flowering_start","removed_date","harvested_date"],t=[];for(const i of e){const e=n.attributes[i];if(e){const i=new Date(e);isNaN(i.getTime())||t.push(i)}}if(t.length>0){const e=new Date(Math.min(...t.map((e=>e.getTime()))));this._dateRange=[e,new Date],this._picker&&this._picker.setDate(this._dateRange,!1)}}return this._dateRange}))}_loadScripts(){return n(this,void 0,void 0,(function*(){this._scriptLoaded&&this._apex||((0,l.apexStylesheetLaden)(),this._apex=yield(0,l.apexChartsLaden)(),this._scriptLoaded=!0)}))}_loadFlatpickr(){return n(this,void 0,void 0,(function*(){if(!window.flatpickr){!function(){const e=document.createElement("link");e.rel="stylesheet",e.href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css",document.head.appendChild(e)}(),yield h("https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js");try{yield h("https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/de.js")}catch(e){console.warn("Flatpickr-Lokalisierung nicht ladbar, nutze Standard:",e)}}}))}updated(e){const t=Object.create(null,{updated:{get:()=>super.updated}});return n(this,void 0,void 0,(function*(){var i,a;if(t.updated.call(this,e),e.has("entityId")&&(this._aufbauFehlversuche=0),this._chart){if(e.has("entityId"))this.updateGraphData();else if(e.has("hass")&&this.hass&&this.entityId){const t=e.get("hass");if(!t)return;const n=null===(a=null===(i=this._plantInfo)||void 0===i?void 0:i.temperature)||void 0===a?void 0:a.sensor;if(!n)return;const o=t.states[n],r=this.hass.states[n];(null==o?void 0:o.state)!==(null==r?void 0:r.state)&&this.updateGraphData()}}else yield this._chartAufbauen()}))}_initDatePicker(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#date-picker");t&&window.flatpickr&&(this._picker=window.flatpickr(t,{mode:"range",enableTime:!0,time_24hr:!0,locale:"de",defaultDate:this._dateRange,formatDate:e=>{const t=(this._dateRange[1].getTime()-this._dateRange[0].getTime())/864e5;return t>30?e.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"2-digit"}):t>2?e.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"}):e.toLocaleString(void 0,{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})},onChange:e=>{2===e.length&&(this._dateRange=[e[0],e[1]],this.updateGraphData())}}))}_getPlantInfo(){return this.entityId&&this.hass?d.PlantEntityUtils.buildPlantView(this.hass,this.entityId):null}updateGraphData(){return n(this,arguments,void 0,(function*(e=!0){if(!this.entityId||!this.hass)return;this._plantInfo=this._getPlantInfo(),this._updateSensorsFromPlantInfo();const t=this._dateRange[0].toISOString(),i=this._dateRange[1].toISOString(),a=(this._dateRange[1].getTime()-this._dateRange[0].getTime())/864e5,n={},o=this._sensors.filter((e=>!e.entityId.startsWith("number.")&&!e.entityId.startsWith("input_number."))),r=this._sensors.filter((e=>e.entityId.startsWith("number.")||e.entityId.startsWith("input_number.")));let s="hour";a<=2&&(s="5minute");for(const e of r){const a=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${e.entityId}&end_time=${i}`);if(a&&Array.isArray(a)&&a.length>0){let t=a[0].filter((e=>e.state&&!isNaN(parseFloat(e.state))&&"unavailable"!==e.state&&"unknown"!==e.state)).map((e=>{const t=parseFloat(e.state),i=new Date(e.last_changed).getTime();return{start:new Date(i).toISOString(),end:new Date(i+6e4).toISOString(),mean:t,min:t,max:t,sum:t}}));t=this._groupHistoryData(t,s),t.length>0&&(n[e.entityId]=t)}}if(o.length>0){const e=o.map((e=>e.entityId));let r=null;a<=2&&(r=yield this.hass.callWS({type:"recorder/statistics_during_period",start_time:t,end_time:i,statistic_ids:e,period:"5minute"}),r&&0!==Object.keys(r).length&&Object.values(r).some((e=>e&&e.length>0))||(r=null)),r||(r=yield this.hass.callWS({type:"recorder/statistics_during_period",start_time:t,end_time:i,statistic_ids:e,period:"hour"})),r&&Object.assign(n,r)}const l=[];if(this._sensors.forEach((e=>{const t=e.entityId;let i=[],a=[];if(n[t]&&n[t].length>0){const o=n[t],r=this._getScale(e.id),s=e=>null==e;if(o.length>50){const e=this._groupGraphData(o,r);i=e.rangeData,a=e.meanData}else{const e=o.slice().sort(((e,t)=>new Date(e.start).getTime()-new Date(t.start).getTime()));i=e.map((e=>({x:new Date(e.start).getTime(),y:s(e.min)||s(e.max)?[null,null]:[e.min*r,e.max*r]}))),a=e.map((e=>({x:new Date(e.start).getTime(),y:s(e.mean)?null:e.mean*r})))}"health"===e.id?(i=this._forwardFill(i),a=this._forwardFill(a)):(i=this._insertGapMarkers(i,!0),a=this._insertGapMarkers(a,!1))}l.push({rangeData:i,meanData:a})})),this._chart){const t=this._sensors.map(((e,t)=>[{name:`${e.name}bereich`,type:"rangeArea",data:l[t].rangeData,yAxisIndex:e.yaxis,unit:e.unit},{name:e.name,type:"line",data:l[t].meanData,yAxisIndex:e.yaxis,unit:e.unit}])).flat();this._chart.updateSeries(t,e),this._sichtbarkeitAnwenden()}this._lastUpdate=Date.now()}))}_getSeriesName(e,t){const i=this.hass?c.TranslationUtils.translateSensor(this.hass,e):e,a=this.hass?c.TranslationUtils.translateUI(this.hass,"tooltip_range"):"Bereich";return t?`${i}${a}`:i}_groupGraphData(e,t=1){if(0===e.length)return{rangeData:[],meanData:[]};const i=e.slice().sort(((e,t)=>new Date(e.start).getTime()-new Date(t.start).getTime())),a=i.map((e=>new Date(e.start).getTime())),n=[];if(a.length>=3){const e=[];for(let t=1;t<a.length;t++)e.push(a[t]-a[t-1]);e.sort(((e,t)=>e-t));const t=e[Math.floor(e.length/2)],i=Math.max(3*t,6e5);for(let e=1;e<a.length;e++)a[e]-a[e-1]>i&&n.push({from:a[e-1],to:a[e]})}const o=a[0],r=(a[a.length-1]-o)/50,s=[];for(let e=0;e<50;e++)s.push({xValues:[],min:1/0,max:-1/0,sum:0,count:0});i.forEach((e=>{const i=new Date(e.start).getTime();let a=Math.floor((i-o)/r);a>=50&&(a=49);const n=s[a];n.xValues.push(i),null!==e.min&&void 0!==e.min&&(n.min=Math.min(n.min,e.min*t)),null!==e.max&&void 0!==e.max&&(n.max=Math.max(n.max,e.max*t)),null!==e.mean&&void 0!==e.mean&&(n.sum+=e.mean*t,n.count++)}));const l=[],d=[];return s.forEach(((e,t)=>{const i=e.xValues.length>0?e.xValues.reduce(((e,t)=>e+t),0)/e.xValues.length:o+(t+.5)*r,a=n.some((e=>i>e.from&&i<e.to)),s=!a&&e.min!==1/0&&e.max!==-1/0,c=!a&&e.count>0;l.push({x:i,y:s?[e.min,e.max]:[null,null]}),d.push({x:i,y:c?e.sum/e.count:null})})),{rangeData:l,meanData:d}}_insertGapMarkers(e,t){if(e.length<3)return e;const i=[];for(let t=1;t<e.length;t++)i.push(e[t].x-e[t-1].x);const a=i.slice().sort(((e,t)=>e-t)),n=1.4*a[Math.floor(a.length/2)],o=t?[null,null]:null,r=[];for(let t=0;t<e.length;t++)if(r.push(e[t]),t<e.length-1){const i=e[t+1].x-e[t].x;if(i>n){const a=e[t].x+i/2;r.push({x:a,y:o})}}return r}_forwardFill(e){let t=null;return e.map((e=>null===e.y||void 0===e.y||Array.isArray(e.y)&&(null===e.y[0]||void 0===e.y[0])?null===t?e:Object.assign(Object.assign({},e),{y:t}):(t=e.y,e)))}_getScale(e){return{temperature:1,conductivity:.01,dli:1,health:1,water_consumption:1,fertilizer_consumption:.01,power_consumption:.01,soil_moisture:1,illuminance:.01,humidity:1}[e]||1}_initChart(){return n(this,void 0,void 0,(function*(){var e,i,a,n,o;yield new Promise((e=>requestAnimationFrame(e)));const r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#chart");if(!r)return void console.warn("Chart Container nicht gefunden");if(0===r.clientWidth)return void setTimeout((()=>this._initChart()),100);if(this._chart){try{this._chart.destroy()}catch(e){console.warn("Fehler beim Zerstören des alten Charts:",e)}this._chart=void 0}if((null===(i=this.entityId)||void 0===i?void 0:i.split(".")[1])&&this.hass){const e=null===(o=null===(n=null===(a=this._plantInfo)||void 0===a?void 0:a.helpers)||void 0===n?void 0:n.growth_phase)||void 0===o?void 0:o.entity_id,t=e?this.hass.states[e]:void 0;if(null==t?void 0:t.attributes){const e=["seeds","germination","rooting","growing","flowering","removed","harvested"],i=[];for(const a of e){const e=t.attributes[`${"removed"===a||"harvested"===a?a:a+"_start"}`];if(e){const t=new Date(e);isNaN(t.getTime())||i.push(t)}}if(i.length>0){const e=new Date(Math.min(...i.map((e=>e.getTime()))));this._startTimestamp=e.getTime()}}}const s=[],l=[];for(const e of this._sensors){s.push({name:`${e.name}bereich`,type:"rangeArea",data:[],yAxisIndex:e.yaxis,unit:e.unit}),s.push({name:e.name,type:"line",data:[],yAxisIndex:e.yaxis,unit:e.unit});const t=e.color||"#777777";l.push(t,t)}const d=Object.assign(Object.assign({},t.chartOptions),{series:s,colors:l,brokkoliStart:this._startTimestamp,chart:Object.assign(Object.assign({},t.chartOptions.chart),{events:{zoomed:(e,{xaxis:t})=>{t&&console.debug("Zoomed event triggered with xaxis:",t)},beforeZoom:(e,{xaxis:t})=>{if(!t||!this._startTimestamp)return;let i=t.min,a=t.max;i<this._startTimestamp&&(i=this._startTimestamp);const n=(new Date).getTime();a>n&&(a=n);const o=new Date(i),r=new Date(a);return isNaN(o.getTime())||isNaN(r.getTime())?(console.warn("Ungültige Datumswerte beim Zoom:",t),{xaxis:{min:i,max:a}}):(this._dateRange=[o,r],this._picker&&this._picker.setDate(this._dateRange,!1),this.updateGraphData(!1),{xaxis:{min:i,max:a}})},beforeResetZoom:()=>{var e,t,i,a;if(this.entityId&&this.hass)try{this.entityId.split(".")[1];const n=null===(i=null===(t=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===t?void 0:t.growth_phase)||void 0===i?void 0:i.entity_id,o=n?null===(a=this.hass)||void 0===a?void 0:a.states[n]:void 0;if(!(null==o?void 0:o.attributes))return;const r=["seeds","germination","rooting","growing","flowering","removed","harvested"],s=[];for(const e of r){const t=o.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){const e=new Date(t);isNaN(e.getTime())||s.push(e)}}if(s.length>0){const e=new Date(Math.min(...s.map((e=>e.getTime())))),t=new Date;return this._dateRange=[e,t],this._picker&&this._picker.setDate(this._dateRange,!1),this.updateGraphData(!1),{xaxis:{min:e.getTime(),max:t.getTime()}}}}catch(e){console.warn("Fehler beim Reset-Zoom:",e)}}}})});try{if(!this._apex)throw new Error("ApexCharts steht nicht bereit");this._chart=new this._apex(r,d),yield this._chart.render(),this.updateGraphData()}catch(e){console.error("Fehler bei der Chart-Initialisierung:",e),this._chart=void 0}}))}render(){return this.entityId&&this.hass?o.html`
            <div class="graph-container">
                <div class="date-picker-container">
                    <input type="text" id="date-picker" readonly>
                </div>
                <div id="chart"></div>
                
                ${this._plantInfo&&this._sensors.length>0?o.html`
                <div class="custom-legend">
                    ${this._sensors.map((e=>o.html`
                        <div
                            class="legend-item ${this._versteckteSensoren.has(e.id)?"inactive":""}"
                            @click=${()=>this._toggleSeries(e.id)}
                        >
                            <ha-icon icon="${e.icon||""}" class="legend-marker"></ha-icon>
                            <span class="legend-text">${this._getSeriesName(e.id,!1)}</span>
                        </div>
                    `))}
                </div>
                `:o.html``}
            </div>
        `:o.html``}_toggleSeries(e){const t=new Set(this._versteckteSensoren);t.has(e)?t.delete(e):t.add(e),this._versteckteSensoren=t;const i=this._sensors.find((t=>t.id===e));i&&this._sensorAnwenden(i,t.has(e))}_sichtbarkeitAnwenden(){if(this._chart&&0!==this._versteckteSensoren.size)for(const e of this._sensors)this._versteckteSensoren.has(e.id)&&this._sensorAnwenden(e,!0)}_sensorAnwenden(e,t){if(this._chart)for(const i of[`${e.name}bereich`,e.name])try{t?this._chart.hideSeries(i):this._chart.showSeries(i)}catch(e){console.warn(`Serie ${i} liess sich nicht umschalten:`,e)}}static get styles(){return s.graphStyles}_groupHistoryData(e,t){if(0===e.length)return[];const i={},a="5minute"===t?3e5:36e5;return e.forEach((e=>{const t=new Date(e.start).getTime(),n=(Math.floor(t/a)*a).toString();i[n]||(i[n]=[]),i[n].push(e)})),Object.entries(i).map((([e,t])=>{const i=Math.min(...t.map((e=>e.min))),n=Math.max(...t.map((e=>e.max))),o=t.reduce(((e,t)=>e+t.mean),0),r=o/t.length;return{start:new Date(parseInt(e)).toISOString(),end:new Date(parseInt(e)+a).toISOString(),mean:r,min:i,max:n,sum:o}})).sort(((e,t)=>new Date(e.start).getTime()-new Date(t.start).getTime()))}};t.FlowerGraph=u,a([(0,r.property)({attribute:!1})],u.prototype,"hass",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"entityId",void 0),a([(0,r.state)()],u.prototype,"_versteckteSensoren",void 0),t.FlowerGraph=u=a([(0,r.customElement)("flower-graph")],u)},1261:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FlowerHistory=t.EVENT_TYPES=void 0;const o=i(4437),r=i(2924),s=i(4356),l=i(4302),d=i(4507),c=i(4139),h=i(8063),u=i(2413),p=120,m=60,_=207,g=90,v=280,f=70,y=45,b=100,w=175,x=70,k=330,S=80,$=207,z=90;t.EVENT_TYPES={PHASE:"phase",AREA:"area",POT:"pot-size",TREATMENT:"treatment",IMAGE:"image",JOURNAL:"journal"};const E="phase",C="area",I="pot-size",M="treatment",P="journal";let D=class extends o.LitElement{constructor(){super(...arguments),this.events=[],this._imageUrls=[],this._showGallery=!1,this._selectedImageIndex=null,this._expandedJournalIds=new Set,this._plantingDate=null,this._addMenuOpen=!1,this._selectedAddAction=null,this._newEntryValue="",this._newEntryDate=(new Date).toISOString().split("T")[0],this._addingEntry=!1,this._newEntryAdded=!1}_showMoreInfo(e){(0,s.fireEvent)(this,"hass-more-info",{entityId:e})}connectedCallback(){super.connectedCallback(),this._updateEvents()}updated(e){(e.has("entityId")||e.has("hass"))&&this._updateEvents()}_updateEvents(){return n(this,void 0,void 0,(function*(){if(!this.entityId||!this.hass)return;const e=this.entityId.split(".")[1];this._plantingDate=yield this._getPlantingDate(),this.events=yield this._collectEvents(e)}))}_getPlantingDate(){return n(this,void 0,void 0,(function*(){var e;if(!this.entityId||!this.hass)return null;let t;try{t=h.PlantEntityUtils.buildPlantView(this.hass,this.entityId)}catch(e){return null}const i=null===(e=((null==t?void 0:t.helpers)||{}).growth_phase)||void 0===e?void 0:e.entity_id;if(!i)return null;const a=this.hass.states[i];if(!(null==a?void 0:a.attributes))return null;const n=["seeds","germination","rooting","growing","flowering","removed","harvested"],o=[];for(const e of n){const t=a.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(t){const e=new Date(t);isNaN(e.getTime())||o.push(e)}}return o.length>0?new Date(Math.min(...o.map((e=>e.getTime())))):null}))}_collectEvents(e){return n(this,void 0,void 0,(function*(){var i,a,n,o,r,s,l;if(!this.hass)return[];const c=[],$=this.hass.states[`plant.${e}`];if(!$)return[];let z;try{z=h.PlantEntityUtils.buildPlantView(this.hass,`plant.${e}`)}catch(e){return console.warn("Fehler beim Laden der Pflanzen-Info:"),[]}const E=(null==z?void 0:z.helpers)||{},C=this.historyGroups||Object.values(t.EVENT_TYPES);if(C.includes(t.EVENT_TYPES.PHASE)&&(null===(i=E.growth_phase)||void 0===i?void 0:i.entity_id)){const e=E.growth_phase.entity_id,t=this.hass.states[e];if(t){const e=["seeds","germination","rooting","growing","flowering","removed","harvested"],i=[];for(const a of e){const n=null==t?void 0:t.attributes[`${"removed"===a||"harvested"===a?a:a+"_start"}`];if(n){const t={date:new Date(n),type:`phase-${a}`,label:u.TranslationUtils.translateGrowthPhase(this.hass,a),description:`${u.TranslationUtils.translateGrowthPhase(this.hass,a)} ${u.TranslationUtils.translateHistory(this.hass,"phase_started")} ${new Date(n).toLocaleDateString()}`};if("removed"===a)t.style="display: none;";else if("harvested"===a)t.style=`background-color: hsl(${p}, 70%, 45%);`;else{const i=e.filter((e=>"removed"!==e&&"harvested"!==e)),n=i.indexOf(a),o=1===i.length?55:55-n/Math.max(1,i.length-1)*25;t.style=`background-color: hsl(${p}, ${m}%, ${o}%)`}i.push(t)}}c.push(...i)}}if(C.includes(t.EVENT_TYPES.IMAGE)){const t=yield d.FlowerGallery.getImagesWithDates(this.hass,`plant.${e}`,z);this._imageUrls=t.map((e=>e.url));const i=t.map(((e,t)=>({date:e.date,type:"image",label:u.TranslationUtils.translateHistory(this.hass,"photo"),description:`${u.TranslationUtils.translateHistory(this.hass,"image_taken")} ${e.date.toLocaleDateString()}`,style:`background-color: hsl(${w}, ${x}%, 45%);`,data:{imageIndex:t,url:e.url}})));c.push(...i)}if(C.includes(t.EVENT_TYPES.POT)&&(null===(a=E.pot_size)||void 0===a?void 0:a.entity_id))try{const e=(null===(n=c[0])||void 0===n?void 0:n.date.toISOString())||(new Date).toISOString(),t=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${E.pot_size.entity_id}&end_time=${t}`);if(i&&Array.isArray(i)&&i.length>0){let e=null;const t=[],a=i[0];for(let i=0;i<a.length;i++){const n=a[i];n.state&&!isNaN(parseFloat(n.state))&&"unavailable"!==n.state&&"unknown"!==n.state&&(null!==e&&n.state===e||(t.push({date:new Date(n.last_changed),type:"pot-size",label:`${n.state}L`,description:`${u.TranslationUtils.translateHistory(this.hass,"pot_size_changed")} ${n.state}L ${new Date(n.last_changed).toLocaleDateString()}`}),e=n.state))}t.forEach(((e,t)=>{const i=65-10*t;e.style=`background-color: hsl(${_}, ${g}%, ${i}%)`})),c.push(...t)}}catch(e){}if(C.includes(t.EVENT_TYPES.AREA)&&$){const e=((null===(o=null==$?void 0:$.attributes)||void 0===o?void 0:o.area_history)||[]).map((e=>({date:new Date(e.date),type:"area-moved",label:e.area,description:`${u.TranslationUtils.translateHistory(this.hass,"moved_to")} ${e.area} ${new Date(e.date).toLocaleDateString()}`})));e.forEach(((e,t)=>{const i=65-10*t;e.style=`background-color: hsl(${v}, ${f}%, ${i}%)`})),c.push(...e)}if(C.includes(t.EVENT_TYPES.TREATMENT)&&(null===(r=E.treatment)||void 0===r?void 0:r.entity_id))try{const e=(null===(s=c[0])||void 0===s?void 0:s.date.toISOString())||(new Date).toISOString(),t=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${E.treatment.entity_id}&end_time=${t}`);if(i&&Array.isArray(i)&&i.length>0){const e=[],t=i[0];for(let i=0;i<t.length;i++){const a=t[i];a.state&&"unavailable"!==a.state&&"unknown"!==a.state&&"none"!==a.state&&e.push({date:new Date(a.last_changed),type:"treatment",label:u.TranslationUtils.translateTreatment(this.hass,a.state),description:`${u.TranslationUtils.translateHistory(this.hass,"treatment")}: ${u.TranslationUtils.translateTreatment(this.hass,a.state)} ${new Date(a.last_changed).toLocaleDateString()}`,data:{originalValue:a.state}})}e.forEach(((e,t)=>{const i=Math.max(80-8*t,0);e.style=`background-color: hsl(${y}, ${b}%, ${i}%);`})),c.push(...e)}}catch(e){}if(C.includes(t.EVENT_TYPES.JOURNAL)){const e=null===(l=E.journal)||void 0===l?void 0:l.entity_id;if(e)try{const t=new Date((new Date).setMonth((new Date).getMonth()-6)).toISOString(),i=(new Date).toISOString(),a=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${e}&end_time=${i}`);if(a&&Array.isArray(a)&&a.length>0){const e=a[0];let t="";for(let i=0;i<e.length;i++){const a=e[i];a.state&&"unavailable"!==a.state&&"unknown"!==a.state&&a.state!==t&&(c.push({date:new Date(a.last_changed),type:"journal",label:u.TranslationUtils.translateHistory(this.hass,"journal"),description:a.state,style:`background-color: hsl(${k}, ${S}%, 45%);`}),t=a.state)}}}catch(e){}}return c.sort(((e,t)=>t.date.getTime()-e.date.getTime()))}))}_handleImageClick(e){this._selectedImageIndex=e,this._showGallery=!0}_animateElement(e,t,i){if(e)if(t){e.classList.remove("closing","expanded"),e.style.height="0",e.offsetHeight;const t=e.scrollHeight;e.style.height=`${t}px`,e.classList.add("expanded"),i&&setTimeout(i,300)}else e.style.height=`${e.scrollHeight}px`,e.offsetHeight,e.classList.remove("expanded"),e.classList.add("closing"),setTimeout((()=>{e.classList.remove("closing"),e.style.height="0",i&&i()}),300)}_toggleJournalExpand(e){var t;const i=new Set(this._expandedJournalIds),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`#journal-${e}`);i.has(e)?this._animateElement(a,!1,(()=>{i.delete(e),this._expandedJournalIds=i})):(i.add(e),this._expandedJournalIds=i,setTimeout((()=>{var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`#journal-${e}`);this._animateElement(i,!0)}),10))}_toggleAddMenu(){var e,t,i,a;if(null!==this._selectedAddAction){const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".form-content"),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-header");i&&i.classList.remove("visible"),a&&a.classList.remove("visible"),setTimeout((()=>{this._selectedAddAction=null,this._newEntryValue="",this._addMenuOpen=!1,this.requestUpdate()}),300)}else if(this._addMenuOpen=!this._addMenuOpen,this._newEntryValue="",this._addMenuOpen)this.requestUpdate(),setTimeout((()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-menu-container"),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-menu-options");if(i&&a){const e=a.scrollHeight;i.style.height=`${e}px`,setTimeout((()=>{a.classList.add("visible")}),50)}}),10);else{const e=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".add-menu-container"),t=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector(".add-menu-options");t&&t.classList.remove("visible"),e&&(e.style.height="0")}}_selectAddAction(e){var t,i;this._selectedAddAction=e,this._newEntryValue="";const a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".add-option"),n=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(`.add-option[data-action="${e}"]`);a&&n&&(a.forEach((e=>{e!==n?e.classList.add("fade-out"):e.classList.add("selected")})),setTimeout((()=>{n.classList.add("move-to-header"),setTimeout((()=>{this.requestUpdate(),setTimeout((()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-header"),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".form-content");if(i&&i.classList.add("visible"),a){a.classList.add("visible");const e=a.querySelector("input, select, textarea");e&&e.focus()}}),50)}),300)}),300))}_addNewEntry(){return n(this,void 0,void 0,(function*(){var e,t,i,a,n;if(this.hass&&this.entityId&&this._selectedAddAction&&this._newEntryValue){this._addingEntry=!0;try{const o=h.PlantEntityUtils.buildPlantView(this.hass,this.entityId);if(!o)return void(this._addingEntry=!1);const r=o.helpers||{},s=null===(e=r.growth_phase)||void 0===e?void 0:e.entity_id,l=null===(t=r.pot_size)||void 0===t?void 0:t.entity_id,d=null===(i=r.treatment)||void 0===i?void 0:i.entity_id,c=null===(a=r.journal)||void 0===a?void 0:a.entity_id;switch(this._selectedAddAction){case E:{if(!s)break;yield this.hass.callService("select","select_option",{entity_id:s,option:this._newEntryValue});const e="removed"===this._newEntryValue||"harvested"===this._newEntryValue?this._newEntryValue:`${this._newEntryValue}_beginn`;yield this.hass.callService("homeassistant","update_entity_attribute",{entity_id:s,attribute:e,value:(new Date).toISOString().split("T")[0]});break}case C:{const e=this._newEntryValue,t="-"===e?"":null===(n=Object.entries(this.hass.areas||{}).find((([,t])=>t.name===e)))||void 0===n?void 0:n[0],i=this.hass.entities[this.entityId];(null==i?void 0:i.device_id)&&(yield this.hass.callService("plant","move_to_area",{device_id:i.device_id,area_id:t||""}));break}case I:if(!l)break;yield this.hass.callService("number","set_value",{entity_id:l,value:parseFloat(this._newEntryValue)});break;case M:if(!d)break;yield this.hass.callService("select","select_option",{entity_id:d,option:this._newEntryValue});break;case P:if(!c)break;yield this.hass.callService("text","set_value",{entity_id:c,value:this._newEntryValue})}this._newEntryAdded=!0,setTimeout((()=>{var e,t;this._newEntryAdded=!1,this._addingEntry=!1;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".form-content"),a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-header");i&&i.classList.remove("visible"),a&&a.classList.remove("visible"),setTimeout((()=>{this._selectedAddAction=null,this._newEntryValue="",this._addMenuOpen=!1,this._updateEvents()}),300)}),1e3)}catch(e){this._addingEntry=!1}}}))}_handleKeyDown(e){e.stopPropagation(),"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._addNewEntry())}_getIconForAction(e){if(!e)return"";switch(e){case E:return"mdi:sprout";case C:return"mdi:map-marker";case I:return"mdi:cup";case M:return"mdi:medical-bag";case P:return"mdi:notebook";default:return""}}_getColorForAction(e){if(!e)return"";switch(e){case E:return`${p}, ${m}%, 45%`;case C:return`${v}, ${f}%, 45%`;case I:return`${_}, ${g}%, 45%`;case M:return`${y}, ${b}%, 45%`;case P:return`${k}, ${S}%, 45%`;default:return""}}_getLabelForAction(e){if(!e||!this.hass)return"";switch(e){case E:return u.TranslationUtils.translateHistory(this.hass,"growth_phase");case C:return u.TranslationUtils.translateHistory(this.hass,"area");case I:return u.TranslationUtils.translateHistory(this.hass,"pot_size");case M:return u.TranslationUtils.translateHistory(this.hass,"treatment");case P:return u.TranslationUtils.translateHistory(this.hass,"journal");default:return""}}_renderFormForAction(e){var t;if(!e)return o.html``;const i=e=>e.stopPropagation(),a=e=>{e.stopPropagation();const t=e.target.value;this._newEntryValue=t,t&&this._addNewEntry()},n=e=>{e.stopPropagation(),this._newEntryValue=e.target.value},r=e=>{e.stopPropagation(),"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._newEntryValue&&this._addNewEntry())},s=e=>{e.stopPropagation(),this._newEntryValue&&this._addNewEntry()};switch(e){case E:return o.html`
                    <div class="form-field">
                        <select id="phase-select" 
                            @click=${i}
                            @change=${a}
                        >
                            <option value="" disabled selected>${u.TranslationUtils.translateHistory(this.hass,"please_select")}</option>
                            <option value="seeds">${u.TranslationUtils.translateGrowthPhase(this.hass,"seeds")}</option>
                            <option value="germination">${u.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                            <option value="rooting">${u.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                            <option value="growing">${u.TranslationUtils.translateGrowthPhase(this.hass,"growing")}</option>
                            <option value="flowering">${u.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                            <option value="harvested">${u.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
                            <option value="removed">${u.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
                        </select>
                    </div>
                `;case C:{const e=Object.values((null===(t=this.hass)||void 0===t?void 0:t.areas)||{}).map((e=>e.name)).sort(((e,t)=>e.localeCompare(t,"de")));return o.html`
                    <div class="form-field">
                        <select id="area-select" 
                            @click=${i}
                            @change=${a}
                        >
                            <option value="" disabled selected>${u.TranslationUtils.translateHistory(this.hass,"please_select")}</option>
                            <option value="-">-</option>
                            ${e.map((e=>o.html`<option value="${e}">${e}</option>`))}
                        </select>
                    </div>
                `}case I:return o.html`
                    <div class="form-field">
                        <input type="number" 
                            id="pot-input" 
                            min="0.1" 
                            step="0.1" 
                            placeholder="${u.TranslationUtils.translateHistory(this.hass,"pot_size_placeholder")}" 
                            @click=${i}
                            @input=${n}
                            @keydown=${r}
                            @blur=${s}
                        >
                    </div>
                `;case M:return o.html`
                    <div class="form-field">
                        <select id="treatment-select" 
                            @click=${i}
                            @change=${a}
                        >
                            <option value="" disabled selected>${u.TranslationUtils.translateHistory(this.hass,"please_select")}</option>
                            <option value="cut">${u.TranslationUtils.translateTreatment(this.hass,"cut")}</option>
                            <option value="super cropping">${u.TranslationUtils.translateTreatment(this.hass,"super cropping")}</option>
                            <option value="topping">${u.TranslationUtils.translateTreatment(this.hass,"topping")}</option>
                            <option value="lollipop">${u.TranslationUtils.translateTreatment(this.hass,"lollipop")}</option>
                            <option value="fim">${u.TranslationUtils.translateTreatment(this.hass,"fim")}</option>
                            <option value="rib">${u.TranslationUtils.translateTreatment(this.hass,"rib")}</option>
                            <option value="spray pest">${u.TranslationUtils.translateTreatment(this.hass,"spray pest")}</option>
                            <option value="spray water">${u.TranslationUtils.translateTreatment(this.hass,"spray water")}</option>
                        </select>
                    </div>
                `;case P:return o.html`
                    <div class="form-field">
                        <textarea id="journal-input" 
                            placeholder="${u.TranslationUtils.translateHistory(this.hass,"journal_placeholder")}" 
                            @click=${i}
                            @input=${n}
                        ></textarea>
                    </div>
                    <div class="journal-submit">
                        <ha-icon-button 
                            icon="mdi:send" 
                            @click=${e=>{e.stopPropagation(),this._addNewEntry()}}
                            ?disabled=${!this._newEntryValue}
                            title="${u.TranslationUtils.translateUI(this.hass,"confirm")}"
                        ></ha-icon-button>
                    </div>
                `;default:return o.html``}}render(){if(!this.hass||!this.entityId)return o.html``;const e=this.historyGroups||Object.values(t.EVENT_TYPES),i="right"===this.linePosition?"timeline-right":"";return o.html`
            <div class="history-container">
                <div class="vertical-timeline ${i}">
                    <div class="timeline-line" style="background-color: hsl(${p}, ${m}%, 45%);"></div>
                    
                    <!-- Hinzufügen-Button am Anfang der Timeline -->
                    <div class="phase-item add-item" @click=${this._toggleAddMenu}>
                        <div class="phase-dot add-dot" style="background-color: hsl(${$}, ${z}%, 45%);">
                            <ha-icon icon="mdi:plus" class="dot-icon"></ha-icon>
                        </div>
                        <div class="phase-content add-content">
                            ${null!==this._selectedAddAction?o.html`
                                <!-- Header mit ausgewählter Aktion -->
                                <div class="add-header">
                                    <div class="add-header-title">
                                        <ha-icon icon="${this._getIconForAction(this._selectedAddAction)}" 
                                                style="color: hsl(${this._getColorForAction(this._selectedAddAction)});">
                                        </ha-icon>
                                        <span>${this._getLabelForAction(this._selectedAddAction)}</span>
                                    </div>
                                    <ha-icon-button 
                                        icon="mdi:close" 
                                        @click=${e=>{e.stopPropagation(),this._toggleAddMenu()}}
                                    ></ha-icon-button>
                                </div>
                                
                                <!-- Formular zum Hinzufügen des ausgewählten Eintrags -->
                                <div class="form-content" @click=${e=>e.stopPropagation()}>
                                    ${this._renderFormForAction(this._selectedAddAction)}
                                    
                                    ${this._selectedAddAction!==P&&this._selectedAddAction!==E&&this._selectedAddAction!==M&&this._selectedAddAction!==C&&this._selectedAddAction!==I?o.html`
                                        <div class="form-actions">
                                            <ha-icon-button 
                                                icon="mdi:check" 
                                                @click=${e=>{e.stopPropagation(),this._addNewEntry()}}
                                                ?disabled=${this._addingEntry||!this._newEntryValue}
                                                class="${this._newEntryAdded?"success":""}"
                                                title="${u.TranslationUtils.translateUI(this.hass,"confirm")}"
                                            ></ha-icon-button>
                                        </div>
                                    `:""}
                                </div>
                            `:o.html`
                                <!-- Überschrift für den Hinzufügen-Button -->
                                <div class="phase-header">
                                    <div class="phase-name">${u.TranslationUtils.translateHistory(this.hass,"add_entry")}</div>
                                </div>
                                
                                <!-- Menü zum Hinzufügen neuer Einträge -->
                                <div class="add-menu-container ${this._addMenuOpen?"expanded":""}">
                                    <div class="add-menu-options">
                                        ${e.includes(t.EVENT_TYPES.PHASE)?o.html`
                                            <div class="add-option" data-action="${E}" @click=${e=>{e.stopPropagation(),this._selectAddAction(E)}}>
                                                <ha-icon icon="mdi:sprout" class="option-icon" style="color: hsl(${p}, ${m}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"growth_phase")}</span>
                                            </div>
                                        `:""}
                                        ${e.includes(t.EVENT_TYPES.AREA)?o.html`
                                            <div class="add-option" data-action="${C}" @click=${e=>{e.stopPropagation(),this._selectAddAction(C)}}>
                                                <ha-icon icon="mdi:map-marker" class="option-icon" style="color: hsl(${v}, ${f}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"area")}</span>
                                            </div>
                                        `:""}
                                        ${e.includes(t.EVENT_TYPES.POT)?o.html`
                                            <div class="add-option" data-action="${I}" @click=${e=>{e.stopPropagation(),this._selectAddAction(I)}}>
                                                <ha-icon icon="mdi:cup" class="option-icon" style="color: hsl(${_}, ${g}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"pot_size")}</span>
                                            </div>
                                        `:""}
                                        ${e.includes(t.EVENT_TYPES.TREATMENT)?o.html`
                                            <div class="add-option" data-action="${M}" @click=${e=>{e.stopPropagation(),this._selectAddAction(M)}}>
                                                <ha-icon icon="mdi:medical-bag" class="option-icon" style="color: hsl(${y}, ${b}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"treatment")}</span>
                                            </div>
                                        `:""}
                                        ${e.includes(t.EVENT_TYPES.JOURNAL)?o.html`
                                            <div class="add-option" data-action="${P}" @click=${e=>{e.stopPropagation(),this._selectAddAction(P)}}>
                                                <ha-icon icon="mdi:notebook" class="option-icon" style="color: hsl(${k}, ${S}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"journal")}</span>
                                            </div>
                                        `:""}
                                    </div>
                                </div>
                            `}
                        </div>
                    </div>
                    
                    ${this._renderEvents()}
                </div>
            </div>
            ${this._showGallery?o.html`
                <flower-gallery
                    .hass=${this.hass}
                    .entityId=${this.entityId}
                    .images=${this._imageUrls}
                    .initialImageIndex=${this._selectedImageIndex}
                    .onClose=${()=>{this._showGallery=!1,this._selectedImageIndex=null}}
                ></flower-gallery>
            `:""}
        `}_renderEvents(){return 0===this.events.length?o.html`
                <div class="phase-item">
                    <div class="phase-dot" style="background-color: hsl(${p}, ${m}%, 45%);"></div>
                    <div class="phase-content">
                        <div class="phase-name">Keine Ereignisse verfügbar</div>
                    </div>
                </div>
            `:o.html`
            ${this.events.map(((e,t)=>{var i,a,n;let r="",s="";const l=e.type.startsWith("phase-"),d="journal"===e.type,h=`event-${t}-${e.type}-${e.date.getTime()}`,u=this._expandedJournalIds.has(h);let $="";if(l){r=e.style||`background-color: hsl(${p}, ${m}%, 45%);`;const t=r.match(/background-color:\s*hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);if(t){const[,e,i,a]=t;$=`--milestone-color: hsla(${e}, ${i}%, ${a}%, 0.15)`}else $=`--milestone-color: hsla(${p}, ${m}%, 45%, 0.15)`;const a=e.type.split("-")[1],n=null===(i=this.entityId)||void 0===i?void 0:i.split(".")[1],o=n?this.hass.states[`plant.${n}`]:void 0;s=(0,c.getGrowthPhaseIcon)(a,this.hass,o)}else if("pot-size"===e.type)r=e.style||`background-color: hsl(${_}, ${g}%, 45%);`,s="mdi:cup";else if("area-moved"===e.type)r=e.style||`background-color: hsl(${v}, ${f}%, 45%);`,s="mdi:map-marker";else if("treatment"===e.type){r=e.style||`background-color: hsl(${y}, ${b}%, 45%);`;const t=null===(a=this.entityId)||void 0===a?void 0:a.split(".")[1],i=t?this.hass.states[`plant.${t}`]:void 0,o=(null===(n=e.data)||void 0===n?void 0:n.originalValue)||e.label;s=(0,c.getTreatmentIcon)(o,this.hass,i)}else"image"===e.type?(r=e.style||`background-color: hsl(${w}, ${x}%, 45%);`,s="mdi:camera"):d&&(r=e.style||`background-color: hsl(${k}, ${S}%, 45%);`,s="mdi:notebook");let z=new Date(e.date).toLocaleDateString();if(this._plantingDate&&e.date){const t=new Date(this._plantingDate);t.setHours(0,0,0,0);const i=Math.abs(new Date(e.date).getTime()-t.getTime());z=`${Math.ceil(i/864e5)} | ${z}`}return o.html`
                    <div class="phase-item ${l?"milestone":""}" @click=${()=>{var t;"image"===e.type&&void 0!==(null===(t=e.data)||void 0===t?void 0:t.imageIndex)?this._handleImageClick(e.data.imageIndex):d&&this._toggleJournalExpand(h)}}>
                        <div class="phase-dot ${l?"milestone":""}" style="${r}">
                            ${s?o.html`<ha-icon icon="${s}" class="dot-icon"></ha-icon>`:""}
                        </div>
                        <div class="phase-content ${l?"milestone":""}" style="${l?$:""}">
                            <div class="phase-header">
                                <div class="phase-name">${e.label}</div>
                                <div class="phase-date">${z}</div>
                            </div>
                            <div class="journal-container ${d&&u?"expanded":""}" id="journal-${h}" style="height: 0;">
                                <div class="phase-description">${e.description}</div>
                            </div>
                        </div>
                    </div>
                `}))}
        `}};t.FlowerHistory=D,D.styles=l.historyStyles,a([(0,r.property)()],D.prototype,"hass",void 0),a([(0,r.property)()],D.prototype,"entityId",void 0),a([(0,r.property)({type:Array})],D.prototype,"historyGroups",void 0),a([(0,r.property)({type:String})],D.prototype,"linePosition",void 0),a([(0,r.state)()],D.prototype,"events",void 0),a([(0,r.state)()],D.prototype,"_imageUrls",void 0),a([(0,r.state)()],D.prototype,"_showGallery",void 0),a([(0,r.state)()],D.prototype,"_selectedImageIndex",void 0),a([(0,r.state)()],D.prototype,"_expandedJournalIds",void 0),a([(0,r.state)()],D.prototype,"_plantingDate",void 0),a([(0,r.state)()],D.prototype,"_addMenuOpen",void 0),a([(0,r.state)()],D.prototype,"_selectedAddAction",void 0),a([(0,r.state)()],D.prototype,"_newEntryValue",void 0),a([(0,r.state)()],D.prototype,"_newEntryDate",void 0),a([(0,r.state)()],D.prototype,"_addingEntry",void 0),a([(0,r.state)()],D.prototype,"_newEntryAdded",void 0),t.FlowerHistory=D=a([(0,r.customElement)("flower-history")],D)},2e3:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantActionsMenu=void 0;const n=i(4437),o=i(2924),r=i(2413);i(2813),i(8928),i(1151);const s=customElements.get("plant-actions-menu");class l extends n.LitElement{constructor(){super(...arguments),this._open=!1,this._dialog=null,this._position={x:0,y:0},this._closeOnOutside=()=>{this._open=!1},this._closeDialog=()=>{this._dialog=null}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._closeOnOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this._closeOnOutside)}_toggle(e){e.stopPropagation();const t=e.currentTarget.getBoundingClientRect();this._position={x:t.right,y:t.bottom},this._open=!this._open}_pick(e,t){e.stopPropagation(),this._open=!1,this._dialog=t}render(){return this.hass&&this.plant?n.html`
            <button class="trigger" @click=${this._toggle} title="${r.TranslationUtils.translateUI(this.hass,"edit")}">
                <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </button>

            ${this._open?n.html`
                <div class="menu" style="left: ${this._position.x}px; top: ${this._position.y}px">
                    <div class="item" @click=${e=>this._pick(e,"clone")}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        <span>${r.TranslationUtils.translateUI(this.hass,"clone_plant")}</span>
                    </div>
                    <div class="item" @click=${e=>this._pick(e,"replace")}>
                        <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                        <span>${r.TranslationUtils.translateUI(this.hass,"replace_sensors")}</span>
                    </div>
                    <div class="item danger" @click=${e=>this._pick(e,"delete")}>
                        <ha-icon icon="mdi:delete"></ha-icon>
                        <span>${r.TranslationUtils.translateUI(this.hass,"delete_plant")}</span>
                    </div>
                </div>
            `:""}

            ${"clone"===this._dialog?n.html`
                <plant-clone-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-clone-dialog>`:""}
            ${"replace"===this._dialog?n.html`
                <plant-replace-sensors-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-replace-sensors-dialog>`:""}
            ${"delete"===this._dialog?n.html`
                <plant-delete-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-delete-dialog>`:""}
        `:n.html``}static get styles(){return n.css`
            :host {
                display: inline-block;
            }

            .trigger {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                color: var(--primary-text-color);
                opacity: 0.7;
            }

            .trigger:hover {
                opacity: 1;
            }

            .menu {
                position: fixed;
                transform: translateX(-100%);
                background: var(--card-background-color, #fff);
                color: var(--primary-text-color);
                border-radius: 4px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
                min-width: 190px;
                padding: 4px 0;
                z-index: 9999;
            }

            .item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 16px;
                cursor: pointer;
                white-space: nowrap;
            }

            .item:hover {
                background: var(--secondary-background-color, #f0f0f0);
            }

            .item ha-icon {
                --mdc-icon-size: 20px;
            }

            .item.danger {
                color: var(--error-color, #db4437);
            }
        `}}a([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),a([(0,o.property)({attribute:!1})],l.prototype,"plant",void 0),a([(0,o.state)()],l.prototype,"_open",void 0),a([(0,o.state)()],l.prototype,"_dialog",void 0),a([(0,o.state)()],l.prototype,"_position",void 0),s||customElements.define("plant-actions-menu",l),t.PlantActionsMenu=s?customElements.get("plant-actions-menu"):l},2813:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantCloneDialog=void 0;const o=i(4437),r=i(2924),s=i(2413),l=i(5546),d=i(9582),c=customElements.get("plant-clone-dialog");class h extends o.LitElement{constructor(){super(...arguments),this._data={},this._busy=!1}connectedCallback(){super.connectedCallback(),this._data={name:this._nextCloneName()}}_nextCloneName(){var e,t,i,a,n;const o=String((null===(t=null===(e=this.plant)||void 0===e?void 0:e.attributes)||void 0===t?void 0:t.friendly_name)||(null===(i=this.plant)||void 0===i?void 0:i.entity_id)||""),r=new Set(Object.entries(null!==(n=null===(a=this.hass)||void 0===a?void 0:a.states)&&void 0!==n?n:{}).filter((([e])=>e.startsWith("plant."))).map((([,e])=>{var t,i;return String(null!==(i=null===(t=e.attributes)||void 0===t?void 0:t.friendly_name)&&void 0!==i?i:"")})));let s=1;for(;r.has(`${o} ${s}`);)s++;return`${o} ${s}`}_close(){this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0}))}_submit(e){return n(this,void 0,void 0,(function*(){var t,i;if(e.preventDefault(),this.hass&&this.plant&&!this._busy){this._busy=!0;try{const e=Object.fromEntries(Object.entries(this._data).filter((([,e])=>""!==e&&null!=e))),a=yield this.hass.callWS({type:"call_service",domain:"plant",service:"clone_plant",service_data:Object.assign({source_entity_id:this.plant.entity_id},e),return_response:!0});this.dispatchEvent(new CustomEvent("plant-cloned",{bubbles:!0,composed:!0,detail:{source_entity_id:this.plant.entity_id,entity_id:null===(t=null==a?void 0:a.response)||void 0===t?void 0:t.entity_id,device_id:null===(i=null==a?void 0:a.response)||void 0===i?void 0:i.device_id}})),this._close()}catch(e){console.error("Error cloning plant:",e)}finally{this._busy=!1}}}))}render(){var e;return this.hass&&this.plant?o.html`
            <div class="backdrop" @click=${e=>e.stopPropagation()}>
                <div class="dialog" @click=${e=>e.stopPropagation()}>
                    <div class="header">
                        <h2>${s.TranslationUtils.translateUI(this.hass,"clone_plant")}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>

                    <form @submit=${this._submit}>
                        <div class="field">
                            <label for="clone-name">${s.TranslationUtils.translateField(this.hass,"friendly_name")}</label>
                            <input type="text" id="clone-name" required
                                .value=${null!==(e=this._data.name)&&void 0!==e?e:""}
                                @input=${e=>{this._data=Object.assign(Object.assign({},this._data),{name:e.target.value})}}>
                        </div>

                        ${l.SENSOR_SOURCE_TYPES.map((e=>{var t;return o.html`
                            <div class="field">
                                <label for="clone-${e.key}">
                                    <ha-icon icon="${e.icon}"></ha-icon>
                                    ${s.TranslationUtils.translateSensor(this.hass,e.label)}
                                </label>
                                <select id="clone-${e.key}"
                                    .value=${null!==(t=this._data[e.field])&&void 0!==t?t:""}
                                    @change=${t=>{this._data=Object.assign(Object.assign({},this._data),{[e.field]:t.target.value})}}>
                                    <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                                    ${(0,l.getSourceSensors)(this.hass,e.key).map((e=>o.html`
                                        <option value="${e.entity_id}">${e.name}</option>
                                    `))}
                                </select>
                            </div>
                        `}))}

                        <div class="actions">
                            <button type="button" class="secondary" @click=${this._close}>
                                ${s.TranslationUtils.translateUI(this.hass,"cancel")}
                            </button>
                            <button type="submit" class="primary" ?disabled=${this._busy}>
                                ${s.TranslationUtils.translateUI(this.hass,"clone")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `:o.html``}static get styles(){return d.dialogStyles}}a([(0,r.property)({attribute:!1})],h.prototype,"hass",void 0),a([(0,r.property)({attribute:!1})],h.prototype,"plant",void 0),a([(0,r.state)()],h.prototype,"_data",void 0),a([(0,r.state)()],h.prototype,"_busy",void 0),c||customElements.define("plant-clone-dialog",h),t.PlantCloneDialog=c?customElements.get("plant-clone-dialog"):h},9242:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantCreateDialog=void 0;const o=i(4437),r=i(2924),s=i(2413),l=customElements.get("plant-create-dialog");class d extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0}}closeDialog(){this.dispatchEvent(new CustomEvent("dialog-closed"))}createPlant(e){return n(this,void 0,void 0,(function*(){if(e.preventDefault(),!this.hass)return;const t=new FormData(e.target),i={};t.forEach(((e,t)=>{""!==e&&"string"==typeof e&&(i[t]=e)}));try{const e=yield this.hass.callWS({type:"call_service",domain:"plant",service:"create_plant",service_data:i,return_response:!0});if(e&&e.response){const{entity_id:t,device_id:i}=e.response;t&&i&&(yield this._setPositionAndArea(t,i,this.position,this.areaId))}this.closeDialog()}catch(e){}}))}_setPositionAndArea(e,t,i,a){return n(this,void 0,void 0,(function*(){if(this.hass)try{if(this.dispatchEvent(new CustomEvent("plant-created",{bubbles:!0,composed:!0,detail:{entity_id:e,device_id:t,position:i,area_id:a}})),a){const e=a.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[t],area_id:e})}}catch(e){}}))}_hintWithLink(e){const t=e.match(/^(.*)\[(.+?)\]\((.+?)\)(.*)$/);return t?o.html`${t[1]}<a href="${t[3]}" target="_blank" rel="noopener">${t[2]}</a>${t[4]}`:o.html`${e}`}render(){return this.hass?o.html`
      <div class="dialog-container">
        <div class="dialog-content">
          <div class="dialog-header">
            <h2>${s.TranslationUtils.translateUI(this.hass,"create_plant")}</h2>
            <button class="close-button" @click=${this.closeDialog}>×</button>
          </div>
          <form @submit=${this.createPlant}>
            <div class="form-field">
              <label for="name">${s.TranslationUtils.translateField(this.hass,"friendly_name")}</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-field">
              <label for="strain">${s.TranslationUtils.translateField(this.hass,"strain")}</label>
              <input type="text" id="strain" name="strain" required>
            </div>
            <div class="form-field">
              <label for="breeder">${s.TranslationUtils.translateField(this.hass,"breeder")}</label>
              <input type="text" id="breeder" name="breeder" required>
            </div>
            <div class="form-field">
              <label for="plant_emoji">${s.TranslationUtils.translateField(this.hass,"plant_emoji")}</label>
              <input type="text" id="plant_emoji" name="plant_emoji" value="🥦">
              <div class="field-hint">
                ${this._hintWithLink(s.TranslationUtils.translateUI(this.hass,"plant_emoji_hint"))}
              </div>
            </div>
            <div class="form-field">
              <label for="growth_phase">${s.TranslationUtils.translateField(this.hass,"growth_phase")}</label>
              <select id="growth_phase" name="growth_phase" required>
                <option value="seeds">${s.TranslationUtils.translateGrowthPhase(this.hass,"seeds")}</option>
                <option value="germination">${s.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                <option value="rooting" selected>${s.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                <option value="growing">${s.TranslationUtils.translateGrowthPhase(this.hass,"growing")}</option>
                <option value="flowering">${s.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                <option value="harvested">${s.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
                <option value="removed">${s.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
              </select>
            </div>
            
            <div class="form-field">
              <label for="temperature_sensor">${s.TranslationUtils.translateSensor(this.hass,"temperature")}</label>
              <select id="temperature_sensor" name="temperature_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"temperature"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="moisture_sensor">${s.TranslationUtils.translateSensor(this.hass,"soil_moisture")}</label>
              <select id="moisture_sensor" name="moisture_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"moisture"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="conductivity_sensor">${s.TranslationUtils.translateSensor(this.hass,"conductivity")}</label>
              <select id="conductivity_sensor" name="conductivity_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"conductivity"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="ph_sensor">${s.TranslationUtils.translateSensor(this.hass,"ph")}</label>
              <select id="ph_sensor" name="ph_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"ph"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="illuminance_sensor">${s.TranslationUtils.translateSensor(this.hass,"illuminance")}</label>
              <select id="illuminance_sensor" name="illuminance_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"illuminance"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="humidity_sensor">${s.TranslationUtils.translateSensor(this.hass,"air_humidity")}</label>
              <select id="humidity_sensor" name="humidity_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"humidity"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-field">
              <label for="power_consumption_sensor">${s.TranslationUtils.translateSensor(this.hass,"total_power_consumption")}</label>
              <select id="power_consumption_sensor" name="power_consumption_sensor">
                <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                ${Object.entries(this.hass.states).filter((([e,t])=>{const i=t;return e.startsWith("sensor.")&&i.attributes&&"energy"===i.attributes.device_class})).map((([e,t])=>{const i=t;return o.html`<option value="${e}">${i.attributes.friendly_name||e}</option>`}))}
              </select>
            </div>
            
            <div class="form-actions">
              <button type="button" @click=${this.closeDialog}>${s.TranslationUtils.translateUI(this.hass,"cancel")}</button>
              <button type="submit">${s.TranslationUtils.translateUI(this.hass,"create")}</button>
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
      
      .field-hint {
        margin-top: 0.3rem;
        font-size: 0.8rem;
        color: var(--secondary-text-color, #727272);
      }

      .field-hint a {
        color: var(--primary-color);
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
    `}}a([(0,r.property)({attribute:!1})],d.prototype,"hass",void 0),a([(0,r.property)()],d.prototype,"position",void 0),a([(0,r.property)()],d.prototype,"areaId",void 0),l||customElements.define("plant-create-dialog",d),t.PlantCreateDialog=l?customElements.get("plant-create-dialog"):d},1151:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantDeleteDialog=void 0;const o=i(4437),r=i(2924),s=i(2413),l=i(9582),d=customElements.get("plant-delete-dialog");class c extends o.LitElement{constructor(){super(...arguments),this._busy=!1}_close(){this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0}))}get _betroffen(){var e;return(null===(e=this.plants)||void 0===e?void 0:e.length)?this.plants:this.plant?[this.plant]:[]}_delete(){return n(this,void 0,void 0,(function*(){if(this.hass&&!this._busy&&0!==this._betroffen.length){this._busy=!0;try{for(const e of this._betroffen)yield this.hass.callService("plant","remove_plant",{plant_entity:e.entity_id});this.dispatchEvent(new CustomEvent("plant-deleted",{bubbles:!0,composed:!0,detail:{entity_ids:this._betroffen.map((e=>e.entity_id))}})),this._close()}catch(e){console.error("Error removing plant:",e)}finally{this._busy=!1}}}))}render(){if(!this.hass||0===this._betroffen.length)return o.html``;const e=this._betroffen.map((e=>{var t;return(null===(t=e.attributes)||void 0===t?void 0:t.friendly_name)||e.entity_id}));return o.html`
            <div class="backdrop" @click=${e=>e.stopPropagation()}>
                <div class="dialog" @click=${e=>e.stopPropagation()}>
                    <div class="header">
                        <h2>${s.TranslationUtils.translateUI(this.hass,"delete_plant")}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>
                    <div class="body">
                        <!-- Was Loeschen bedeutet, weiss jeder; der Dialog nennt nur,
                             was es trifft. Der erklaerende Satz machte das Fenster
                             unnoetig breit. -->
                        <p class="names">${e.join(", ")}</p>
                        <div class="actions">
                            <button class="secondary" @click=${this._close}>
                                ${s.TranslationUtils.translateUI(this.hass,"cancel")}
                            </button>
                            <button class="danger" ?disabled=${this._busy} @click=${this._delete}>
                                ${s.TranslationUtils.translateUI(this.hass,"confirm_delete")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `}static get styles(){return l.dialogStyles}}a([(0,r.property)({attribute:!1})],c.prototype,"hass",void 0),a([(0,r.property)({attribute:!1})],c.prototype,"plant",void 0),a([(0,r.property)({attribute:!1})],c.prototype,"plants",void 0),a([(0,r.state)()],c.prototype,"_busy",void 0),d||customElements.define("plant-delete-dialog",c),t.PlantDeleteDialog=d?customElements.get("plant-delete-dialog"):c},896:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantFlyoutMenu=void 0;const o=i(4437),r=i(2924),s=i(8063),l=i(9442),d=i(365);i(2813);let c=class extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0},this.targetPosition={x:0,y:0},this.isMobile=!1,this._searchQuery="",this._plants=[],this._filteredPlants=[],this._showCloneDialog=!1}connectedCallback(){super.connectedCallback(),this._loadPlants()}_loadPlants(){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const e=s.PlantEntityUtils.getPlantEntities(this.hass,"plant");this._plants=e,this._filteredPlants=e}))}_handleSearch(e){const t=e.target;this._searchQuery=t.value.toLowerCase(),this._searchQuery?this._filteredPlants=this._plants.filter((e=>{var t;return(null===(t=e.attributes.friendly_name)||void 0===t?void 0:t.toLowerCase().includes(this._searchQuery))||e.entity_id.toLowerCase().includes(this._searchQuery)})):this._filteredPlants=this._plants}_handleNewPlant(){this.dispatchEvent(new CustomEvent("new-plant-requested",{bubbles:!0,composed:!0,detail:{position:this.targetPosition,areaId:this.areaId}}))}_handleMovePlant(e){this.dispatchEvent(new CustomEvent("move-plant-requested",{bubbles:!0,composed:!0,detail:{plant:e,position:this.targetPosition}}))}_handleClonePlant(e){this._selectedPlantForClone=e,this._showCloneDialog=!0}_handlePlantCloned(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("plant-cloned",{bubbles:!0,composed:!0,detail:Object.assign(Object.assign({},e.detail),{position:this.targetPosition,areaId:this.areaId})})),this._closeCloneDialog(),this._closeMenu()}_closeCloneDialog(){this._showCloneDialog=!1,this._selectedPlantForClone=void 0}_closeMenu(){this.dispatchEvent(new CustomEvent("menu-closed",{bubbles:!0,composed:!0}))}_handleOverlayClick(e){e.target===e.currentTarget&&this._closeMenu()}_getPlantArea(e){var t;if(!this.hass)return"";const i=l.FilterUtils.getAreaForEntity(this.hass,e.entity_id);if(!i)return"Kein Raum";const a=null===(t=this.hass.areas)||void 0===t?void 0:t[i];return(null==a?void 0:a.name)||i}render(){if(!this.hass)return o.html``;const e=this.isMobile?"":`\n      position: fixed;\n      left: ${this.position.x}px;\n      top: ${this.position.y}px;\n      transform: translate(-50%, -10px);\n    `;return o.html`
      <div class="flyout-overlay ${this.isMobile?"mobile":""}" @click=${this._handleOverlayClick}>
        <div class="flyout-menu ${this.isMobile?"mobile":""}" style="${e}">
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
            ${this._filteredPlants.map((e=>o.html`
              <div class="plant-item">
                <div class="plant-info">
                  <div class="plant-image">
                    ${e.attributes.entity_picture?o.html`
                      <img src="${e.attributes.entity_picture}" alt="${e.attributes.friendly_name}">
                    `:o.html`
                      <ha-icon icon="mdi:sprout"></ha-icon>
                    `}
                  </div>
                  <div class="plant-details">
                    <div class="plant-name">${e.attributes.friendly_name||e.entity_id}</div>
                    <div class="plant-area">${this._getPlantArea(e)}</div>
                  </div>
                </div>
                <div class="plant-actions">
                  <button 
                    class="action-button move" 
                    @click=${()=>this._handleMovePlant(e)}
                    title="Verschieben"
                  >
                    <ha-icon icon="mdi:arrow-all"></ha-icon>
                  </button>
                  <button 
                    class="action-button clone" 
                    @click=${()=>this._handleClonePlant(e)}
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

      ${this._showCloneDialog&&this._selectedPlantForClone?o.html`
        <plant-clone-dialog
          .hass=${this.hass}
          .plant=${this._selectedPlantForClone}
          @dialog-closed=${this._closeCloneDialog}
          @plant-cloned=${this._handlePlantCloned}
        ></plant-clone-dialog>
      `:""}
    `}};t.PlantFlyoutMenu=c,c.styles=d.plantFlyoutMenuStyles,a([(0,r.property)({attribute:!1})],c.prototype,"hass",void 0),a([(0,r.property)()],c.prototype,"position",void 0),a([(0,r.property)()],c.prototype,"targetPosition",void 0),a([(0,r.property)()],c.prototype,"areaId",void 0),a([(0,r.property)()],c.prototype,"isMobile",void 0),a([(0,r.state)()],c.prototype,"_searchQuery",void 0),a([(0,r.state)()],c.prototype,"_plants",void 0),a([(0,r.state)()],c.prototype,"_filteredPlants",void 0),a([(0,r.state)()],c.prototype,"_showCloneDialog",void 0),a([(0,r.state)()],c.prototype,"_selectedPlantForClone",void 0),t.PlantFlyoutMenu=c=a([(0,r.customElement)("plant-flyout-menu")],c)},8928:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PlantReplaceSensorsDialog=void 0;const o=i(4437),r=i(2924),s=i(2413),l=i(5546),d=i(9582),c=i(8063),h=customElements.get("plant-replace-sensors-dialog");class u extends o.LitElement{constructor(){super(...arguments),this._selection={},this._busy=!1}connectedCallback(){super.connectedCallback(),this._load()}_load(){var e;this.hass&&this.plant&&(this._result=null!==(e=c.PlantEntityUtils.buildPlantView(this.hass,this.plant.entity_id))&&void 0!==e?e:void 0)}_meterEntity(e){var t,i,a;if(this._result)return"power_consumption"===e?null===(i=null===(t=this._result.diagnostic_sensors)||void 0===t?void 0:t.total_power_consumption)||void 0===i?void 0:i.entity_id:null===(a=this._result[e])||void 0===a?void 0:a.sensor}_currentSource(e){var t,i,a;const n=this._meterEntity(e);return n?null===(a=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states[n])||void 0===i?void 0:i.attributes)||void 0===a?void 0:a.external_sensor:void 0}_close(){this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0}))}_submit(){return n(this,void 0,void 0,(function*(){if(this.hass&&!this._busy){this._busy=!0;try{for(const e of l.SENSOR_SOURCE_TYPES){const t=this._selection[e.key],i=this._meterEntity(e.key);t&&i&&t!==this._currentSource(e.key)&&(yield this.hass.callService("plant","replace_sensor",{meter_entity:i,new_sensor:t}))}this._close()}catch(e){console.error("Error replacing sensors:",e)}finally{this._busy=!1}}}))}render(){return this.hass&&this.plant?o.html`
            <div class="backdrop" @click=${e=>e.stopPropagation()}>
                <div class="dialog" @click=${e=>e.stopPropagation()}>
                    <div class="header">
                        <h2>${s.TranslationUtils.translateUI(this.hass,"replace_sensors")}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>

                    <div class="body">
                        ${l.SENSOR_SOURCE_TYPES.map((e=>{const t=(0,l.getSourceSensors)(this.hass,e.key),i=this._currentSource(e.key);return o.html`
                                <div class="field">
                                    <label>
                                        <ha-icon icon="${e.icon}"></ha-icon>
                                        ${s.TranslationUtils.translateSensor(this.hass,e.label)}
                                    </label>
                                    <select @change=${t=>{this._selection=Object.assign(Object.assign({},this._selection),{[e.key]:t.target.value})}}>
                                        <option value="">${s.TranslationUtils.translateUI(this.hass,"no_sensor")}</option>
                                        ${t.length>0?t.map((e=>o.html`
                                                <option value="${e.entity_id}" ?selected=${e.entity_id===i}>
                                                    ${e.name}
                                                </option>`)):o.html`<option value="" disabled>
                                                ${s.TranslationUtils.translateUI(this.hass,"no_matching_sensors")}
                                            </option>`}
                                    </select>
                                </div>
                            `}))}

                        <div class="actions">
                            <button class="secondary" @click=${this._close}>
                                ${s.TranslationUtils.translateUI(this.hass,"cancel")}
                            </button>
                            <button class="primary" ?disabled=${this._busy} @click=${this._submit}>
                                ${s.TranslationUtils.translateUI(this.hass,"replace_sensors")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `:o.html``}static get styles(){return d.dialogStyles}}a([(0,r.property)({attribute:!1})],u.prototype,"hass",void 0),a([(0,r.property)({attribute:!1})],u.prototype,"plant",void 0),a([(0,r.state)()],u.prototype,"_result",void 0),a([(0,r.state)()],u.prototype,"_selection",void 0),a([(0,r.state)()],u.prototype,"_busy",void 0),h||customElements.define("plant-replace-sensors-dialog",u),t.PlantReplaceSensorsDialog=h?customElements.get("plant-replace-sensors-dialog"):u},9961:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SensorAssignment=void 0;const o=i(4437),r=i(2924),s=i(1294),l=i(7514),d=i(93),c=i(2413),h=i(9442),u=290,p=145,m="__ohne__",_=Object.fromEntries(l.SENSOR_TYPES.map((e=>[e.key,e.icon]))),g='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"',v={soil:`<svg ${g}>\n        <rect x="8" y="2.2" width="8" height="9.6" rx="3" fill="currentColor" stroke="none"/>\n        <path d="M10.4 11.8 9.7 20.4M13.6 11.8 14.3 20.4" stroke-width="1.7"/>\n        <path d="M2.6 15.6h18.8" stroke-width="1.5" stroke-dasharray="3 2.4" opacity="0.6"/>\n    </svg>`,climate:`<svg ${g}>\n        <rect x="4.2" y="3.2" width="15.6" height="17.6" rx="3.2" stroke-width="1.7"/>\n        <rect x="7" y="6.4" width="10" height="6.6" rx="1.5" fill="currentColor" stroke="none" opacity="0.85"/>\n        <path d="M7.6 16.8h4.2M14.6 16.8h1.8" stroke-width="1.6"/>\n    </svg>`,generic:`<svg ${g}>\n        <rect x="3.6" y="9" width="16.8" height="11.4" rx="2.6" stroke-width="1.7"/>\n        <circle cx="12" cy="14.7" r="2.1" fill="currentColor" stroke="none"/>\n        <path d="M12 9V5.4" stroke-width="1.6"/>\n        <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"/>\n    </svg>`};let f=class extends o.LitElement{constructor(){var e,t;super(...arguments),this.defaultView="flower",this._sensorDevices=[],this._plantDevices=[],this._sensorInfo=new Map,this._sourceQuery="",this._plantQuery="",this._typeFilter=new Set,this._selection=new Set,this._allowOverwrite=!1,this._dragGroupIds=new Set,this._dropOnSources=!1,this._meterEntities=new Map,this._phaseEntities=new Map,this._sensorInfoSignature="",this._entityToGroupId=new Map,this._lastHassStatesKey="",this._flowerNodes=[],this._springs=new Map,this._seedPositions=new Map,this._lastTs=0,this._visible=!0,this._reducedMotion=null!==(t=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches)&&void 0!==t&&t,this._ghostHalf=28,this._dragLeafRadius=94,this._pointer={x:0,y:0},this._overlayStems=[],this._dragEndedAt=0,this._showStrain=!1,this._showBreeder=!1,this._tick=e=>{const t=this._lastTs?(e-this._lastTs)/1e3:1/60;this._lastTs=e;let i=!1;for(const e of this._flowerNodes)for(const a of e.leaves){const e=Math.cos(a.angle)*a.radius,n=Math.sin(a.angle)*a.radius;this._reducedMotion||(0,d.isSettled)(a.spring,e,n)?(0,d.settleSpring)(a.spring,e,n):((0,d.stepSpring)(a.spring,e,n,t),i=!0);const o=a.spring.x,r=a.spring.y;a.el.style.transform=`translate(${o.toFixed(1)}px, ${r.toFixed(1)}px)`,r<-12?a.el.classList.add("sa-leaf-above"):r>12&&a.el.classList.remove("sa-leaf-above"),this._placeLeafName(a,o,r);const s=l.SensorAssignmentUtils.fanAngles(Math.atan2(r,o),a.pathEls.length,a.sector);a.pathEls.forEach(((e,t)=>{const i=l.SensorAssignmentUtils.buildStem(p,p,p+o,p+r,s[t],34,58,a.half);e.setAttribute("d",i.path);const n=a.iconEls[t];n&&(n.style.transform=`translate(${(i.iconX-p).toFixed(1)}px, ${(i.iconY-p).toFixed(1)}px)`)}))}this._ghostSpring&&(this._tickDrag(t),i=!0),this._rafId=i?requestAnimationFrame(this._tick):void 0},this._onPendingMove=e=>{const t=this._pendingDrag;t&&(Math.hypot(e.clientX-t.x,e.clientY-t.y)<6||(this._clearPendingDrag(),this._beginDrag(t.payload,e)))},this._onPendingCancel=()=>{this._clearPendingDrag()},this._onPointerMove=e=>{this._pointer={x:e.clientX,y:e.clientY},this._updateSnapTarget(),this._startAnimation()},this._onPointerUp=()=>{const e=this._drag,t=this._snapPlantId,i=this._snapCenter,a=this._dropOnSources,n=this._ghostSpring?{x:this._ghostSpring.x,y:this._ghostSpring.y}:void 0;if(this._endDrag(),e)if(t){if(i&&n)for(const a of e.entries)this._seedPositions.set(`${t}|${a.group.id}`,{x:n.x-i.x,y:n.y-i.y});this._assign(e,t)}else a&&e.fromPlantId&&this._unassignTypes(e.fromPlantId,this._flatTypes(e).map((e=>e.typeKey)))},this._onPointerCancel=()=>{this._endDrag()}}_strainLine(e){const t=[];return this._showStrain&&e.strain&&t.push(e.strain),this._showBreeder&&e.breeder&&t.push(e.breeder),t.join(" - ")}get _view(){var e;return null!==(e=this._viewOverride)&&void 0!==e?e:this.defaultView}get _phases(){var e;if(this._phaseOverride)return this._phaseOverride;const t=(null===(e=this.defaultPhases)||void 0===e?void 0:e.length)?this.defaultPhases:l.DEFAULT_PLANT_PHASES;return new Set(t)}_togglePhase(e){const t=new Set(this._phases);t.has(e)?t.delete(e):t.add(e),this._phaseOverride=t}_areaOptions(){var e,t,i,a;const n=new Map,o=null!==(t=null===(e=this.hass)||void 0===e?void 0:e.areas)&&void 0!==t?t:{};for(const e of this._plantDevices){const t=this._areaOf(e.entityId);n.has(t)||n.set(t,t===m?"Ohne Raum":null!==(a=null===(i=o[t])||void 0===i?void 0:i.name)&&void 0!==a?a:t)}return Array.from(n,(([e,t])=>({id:e,name:t}))).sort(((e,t)=>e.id===m?1:t.id===m?-1:e.name.localeCompare(t.name)))}_areaOf(e){var t;return this.hass&&null!==(t=h.FilterUtils.getAreaForEntity(this.hass,e))&&void 0!==t?t:m}get _areas(){var e;return this._areaOverride?this._areaOverride:(null===(e=this.defaultAreas)||void 0===e?void 0:e.length)?new Set(this.defaultAreas):new Set(this._areaOptions().map((e=>e.id)))}_toggleArea(e){const t=new Set(this._areas);t.has(e)?t.delete(e):t.add(e),this._areaOverride=t}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver((e=>{this._visible=e.some((e=>e.isIntersecting)),this._visible&&this._startAnimation()})),this._observer.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._observer)||void 0===e||e.disconnect(),this._observer=void 0,this._stopAnimation(),this._endDrag()}_startAnimation(){void 0===this._rafId&&this._visible&&(this._lastTs=0,this._rafId=requestAnimationFrame(this._tick))}_stopAnimation(){void 0!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=void 0)}willUpdate(){var e;if(!this.hass)return;const t=Object.keys(this.hass.states).length+":"+Object.keys(null!==(e=this.hass.entities)&&void 0!==e?e:{}).length;if(t!==this._lastHassStatesKey){this._lastHassStatesKey=t;const e=l.SensorAssignmentUtils.getPlantAndCycleDeviceIds(this.hass);this._sensorDevices=l.SensorAssignmentUtils.getSensorDevices(this.hass,e),this._plantDevices=l.SensorAssignmentUtils.getPlantDevices(this.hass),this._entityToGroupId=new Map;for(const e of this._sensorDevices)for(const t of Object.values(e.types))this._entityToGroupId.set(t,e.id);this._loadMeterEntities()}this._refreshSensorInfo()}updated(){this._rebuildFlowerNodes(),this._startAnimation()}_refreshSensorInfo(){if(!this.hass)return;const e=l.SensorAssignmentUtils.resolveSources(this.hass,this._meterEntities),t=JSON.stringify(Array.from(e,(([e,t])=>[e,l.SENSOR_TYPES.map((e=>{var i,a;return null!==(a=null===(i=t[e.key])||void 0===i?void 0:i.source)&&void 0!==a?a:""}))])));t!==this._sensorInfoSignature&&(this._sensorInfoSignature=t,this._sensorInfo=e)}_loadMeterEntities(){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const e=this.hass,t=yield Promise.all(this._plantDevices.map((t=>n(this,void 0,void 0,(function*(){const i=l.SensorAssignmentUtils.getPlantMeterEntities(e,t.entityId);return[t.entityId,i]})))));this._meterEntities=new Map(t.map((([e,t])=>[e,t.meters]))),this._phaseEntities=new Map(t.map((([e,t])=>[e,t.growthPhaseEntity]))),this._refreshSensorInfo(),this.requestUpdate()}))}_flowerLayout(e){var t,i;const a=null!==(t=this._sensorInfo.get(e.entityId))&&void 0!==t?t:{},n=new Map;for(const e of l.SENSOR_TYPES){const t=null===(i=a[e.key])||void 0===i?void 0:i.source;if(!t)continue;const o=this._entityToGroupId.get(t);if(!o)continue;const r=n.get(o);r?r.push(e.key):n.set(o,[e.key])}const o=Array.from(n.entries()).filter((([e])=>!!this._sensorDevices.find((t=>t.id===e)))),r=l.SENSOR_TYPES.filter((e=>{var t;return!(null===(t=a[e.key])||void 0===t?void 0:t.source)})),s=o.length+r.length,d=s>0?2*Math.PI/s:2*Math.PI;return{leaves:o.map((([e,t],i)=>({key:e,group:this._sensorDevices.find((t=>t.id===e)),typeKeys:t,angle:-Math.PI/2+i*d,sector:d}))),open:r.map(((e,t)=>({typeKey:e.key,angle:-Math.PI/2+(o.length+t)*d})))}}_leavesFor(e){return this._flowerLayout(e).leaves}_assignedGroupIds(){const e=new Set;for(const t of this._plantDevices)for(const i of this._leavesFor(t))e.add(i.key);return e}_typeLabel(e){return this.hass?c.TranslationUtils.translateSensor(this.hass,e):e}_filteredSources(){const e=this._sourceQuery.trim().toLowerCase();return this._sensorDevices.filter((t=>{const i=Object.keys(t.types);return!(this._typeFilter.size>0&&!i.some((e=>this._typeFilter.has(e))))&&(!e||t.name.toLowerCase().includes(e))}))}_phaseOf(e){var t,i;const a=this._phaseEntities.get(e);return a?null===(i=null===(t=this.hass)||void 0===t?void 0:t.states[a])||void 0===i?void 0:i.state:void 0}_filteredPlants(){const e=this._plantQuery.trim().toLowerCase(),t=this._phases,i=this._areas;return this._plantDevices.filter((a=>{const n=this._phaseOf(a.entityId);return!(n&&!t.has(n))&&!!i.has(this._areaOf(a.entityId))&&(!e||a.name.toLowerCase().includes(e))}))}_toggleTypeFilter(e){const t=new Set(this._typeFilter);t.has(e)?t.delete(e):t.add(e),this._typeFilter=t}_selectionKey(e,t){return`${e}::${t}`}_toggleSelection(e,t){if(Date.now()-this._dragEndedAt<300)return;const i=this._sensorDevices.find((t=>t.id===e)),a=i?Object.keys(i.types):[t],n=new Set(this._selection);if(!a.some((t=>n.has(this._selectionKey(e,t))))&&this._typeFilter.size>0)for(const t of a)this._typeFilter.has(t)&&n.add(this._selectionKey(e,t));const o=this._selectionKey(e,t);n.has(o)?n.delete(o):n.add(o),this._selection=n}_activeTypes(e){const t=Object.keys(e.types),i=t.filter((t=>this._selection.has(this._selectionKey(e.id,t))));if(i.length>0)return i;if(this._typeFilter.size>0){const e=t.filter((e=>this._typeFilter.has(e)));if(e.length>0)return e}return t}_isNarrowed(e){return this._typeFilter.size>0||Object.keys(e.types).some((t=>this._selection.has(this._selectionKey(e.id,t))))}_selectionEntries(){const e=[];for(const t of this._sensorDevices){const i=Object.keys(t.types).filter((e=>this._selection.has(this._selectionKey(t.id,e))));i.length>0&&e.push({group:t,typeKeys:i})}return e}_rebuildFlowerNodes(){var e,t;const i=this.shadowRoot;if(!i)return;const a=[],n=new Set;for(const o of Array.from(i.querySelectorAll(".sa-flower, .sa-row"))){const i=o.dataset.plant,r=o.querySelector(".sa-flower-canvas, .sa-core");if(!r)continue;const s=[];for(const a of Array.from(r.querySelectorAll(".sa-leaf"))){const o=a.dataset.leaf,l=`${i}|${o}`;n.add(l);let c=this._springs.get(l);if(!c){const i=this._seedPositions.get(l);c=(0,d.createSpring)(null!==(e=null==i?void 0:i.x)&&void 0!==e?e:0,null!==(t=null==i?void 0:i.y)&&void 0!==t?t:0),this._springs.set(l,c),this._seedPositions.delete(l)}const h=CSS.escape(o),u=a.querySelector(".sa-leaf-name");s.push({el:a,angle:Number(a.dataset.angle),sector:Number(a.dataset.sector),half:Number(a.dataset.half),radius:Number(a.dataset.radius),isEntity:a.classList.contains("sa-leaf-entity"),nameEl:u,nameHalfW:u?u.offsetWidth/2:0,nameHalfH:u?u.offsetHeight/2:0,spring:c,pathEls:Array.from(r.querySelectorAll(`path[data-owner="${h}"]`)),iconEls:Array.from(r.querySelectorAll(`.sa-type[data-owner="${h}"]`))})}a.push({plantId:i,el:o,canvas:r,leaves:s})}for(const e of Array.from(this._springs.keys()))n.has(e)||this._springs.delete(e);this._flowerNodes=a}_placeLeafName(e,t,i){const a=e.nameEl;if(!a)return;const n=(e,t)=>Math.max(-t,Math.min(t,e)),o=p-e.nameHalfW-2,r=p-e.nameHalfH-2;if(!e.isEntity){const e=n(t,o)-t;return void(a.style.transform=`translate(${e.toFixed(1)}px, 0)`)}const s=Math.hypot(t,i)||1,l=t/s,d=i/s,c=12+Math.abs(l)*e.nameHalfW+Math.abs(d)*e.nameHalfH+5,h=n(t+l*c,o)-t,u=n(i+d*c,r)-i;a.style.transform=`translate(${h.toFixed(1)}px, ${u.toFixed(1)}px) translateY(-50%)`}_planAssignment(e,t){var i,a;const n=null!==(i=this._sensorInfo.get(t))&&void 0!==i?i:{},o=new Set,r=[];for(const t of e.entries)for(const e of t.typeKeys){const i=!this._allowOverwrite&&!!(null===(a=n[e])||void 0===a?void 0:a.source)||o.has(e);i||o.add(e),r.push({group:t.group,typeKey:e,blocked:i})}return r}_flatTypes(e){return e.entries.flatMap((e=>e.typeKeys.map((t=>({group:e.group,typeKey:t})))))}_onDragStart(e,t){void 0!==e.button&&0!==e.button||(this._pendingDrag={payload:t,x:e.clientX,y:e.clientY},window.addEventListener("pointermove",this._onPendingMove),window.addEventListener("pointerup",this._onPendingCancel),window.addEventListener("pointercancel",this._onPendingCancel))}_payloadForSource(e){if(Object.keys(e.types).some((t=>this._selection.has(this._selectionKey(e.id,t))))){const e=this._selectionEntries();if(e.length>0)return{entries:e}}return{entries:[{group:e,typeKeys:this._activeTypes(e)}]}}_clearPendingDrag(){this._pendingDrag=void 0,window.removeEventListener("pointermove",this._onPendingMove),window.removeEventListener("pointerup",this._onPendingCancel),window.removeEventListener("pointercancel",this._onPendingCancel)}_beginDrag(e,t){this._drag=e,this._dragLeafRadius=e.entries[0].group.isDevice?94:58,this._dragGroupIds=e.fromPlantId?new Set:new Set(e.entries.map((e=>e.group.id))),this._dragLeafKey=e.fromPlantId?`${e.fromPlantId}|${e.entries[0].group.id}`:void 0,this._pointer={x:t.clientX,y:t.clientY},this._ghostSpring=(0,d.createSpring)(t.clientX,t.clientY),this._createGhost(e),this._createOverlay(e),this._updateSnapTarget(),this._startAnimation(),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerCancel)}_createGhost(e){var t,i;const a=e.entries[0].group,n=this._flatTypes(e).length,o=document.createElement("div"),r=a.isDevice,s=e.entries[0].typeKeys[0];this._ghostHalf=r?28:17;const d=2*this._ghostHalf;if(o.style.cssText=`\n            position: fixed; left: 0; top: 0; width: ${d}px; height: ${d}px;\n            border-radius: ${r?"14px":"50%"};\n            pointer-events: none; z-index: 10000;\n            border: 2px solid ${r?"var(--primary-color, #03a9f4)":null!==(t=l.SENSOR_TYPE_COLORS[s])&&void 0!==t?t:"#03a9f4"};\n            background-color: var(--card-background-color, #fff);\n            background-size: cover; background-position: center;\n            box-shadow: 0 4px 14px rgba(0,0,0,0.35);\n            display: flex; flex-direction: column; align-items: center; justify-content: center;\n            font-size: 13px; font-weight: 500; color: var(--primary-text-color, #212121);\n        `,r)a.picture?o.style.backgroundImage=`url(${a.picture})`:(o.innerHTML=v[this._deviceGlyph(a)],o.style.color="var(--secondary-text-color, #727272)");else{const e=null!==(i=l.SENSOR_TYPE_COLORS[s])&&void 0!==i?i:"var(--primary-color)";o.style.background=e;const t=document.createElement("ha-icon");t.setAttribute("icon",_[s]),t.style.cssText="--mdc-icon-size: 18px; color: #fff;",o.appendChild(t)}if(n>1){const e=document.createElement("div");e.textContent=String(n),e.style.cssText="\n                position: absolute; top: -6px; right: -6px;\n                min-width: 20px; height: 20px; padding: 0 5px;\n                border-radius: 10px; box-sizing: border-box;\n                background: var(--primary-color, #03a9f4); color: #fff;\n                font-size: 11px; font-weight: 600; line-height: 20px; text-align: center;\n                box-shadow: 0 1px 4px rgba(0,0,0,0.35);\n            ",o.style.position="fixed",o.appendChild(e)}o.style.transform=`translate(${this._pointer.x-this._ghostHalf}px, ${this._pointer.y-this._ghostHalf}px)`,document.body.appendChild(o),this._ghost=o}_createOverlay(e){const t=document.createElement("div");t.style.cssText="\n            position: fixed; inset: 0; pointer-events: none; z-index: 9999;\n            opacity: 0; transition: opacity 0.12s ease;\n        ";const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.style.cssText="position:absolute; inset:0; overflow:visible;",t.appendChild(i),this._overlayStems=this._flatTypes(e).map((({group:e,typeKey:a})=>{var n;const o=null!==(n=l.SENSOR_TYPE_COLORS[a])&&void 0!==n?n:"var(--primary-color)",r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("fill","none"),r.setAttribute("stroke",o),r.setAttribute("stroke-width","2.5"),r.setAttribute("stroke-linecap","round"),r.setAttribute("opacity","0.85"),i.appendChild(r);const s=document.createElement("div");s.style.cssText=`\n                position: absolute; left: 0; top: 0; width: 24px; height: 24px;\n                margin: -12px 0 0 -12px; border-radius: 50%;\n                background: ${o}; border: 2px solid ${o};\n                display: flex; align-items: center; justify-content: center;\n                box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n            `;const d=document.createElement("ha-icon");return d.setAttribute("icon",_[a]),d.style.cssText="--mdc-icon-size: 13px; color: #fff;",s.appendChild(d),t.appendChild(s),{typeKey:a,isDevice:e.isDevice,pathEl:r,iconEl:s}})),document.body.appendChild(t),this._overlay=t}_applyOverlayBlocking(e){if(!this._drag||0===this._overlayStems.length)return;if(!e)return;const t=this._planAssignment(this._drag,e);this._overlayStems.forEach(((e,i)=>{var a,n,o;const r=null!==(n=null===(a=t[i])||void 0===a?void 0:a.blocked)&&void 0!==n&&n,s=null!==(o=l.SENSOR_TYPE_COLORS[e.typeKey])&&void 0!==o?o:"var(--primary-color)";e.pathEl.setAttribute("stroke",r?"var(--disabled-text-color, #9e9e9e)":s),e.pathEl.setAttribute("stroke-dasharray",r?"4 4":""),e.pathEl.setAttribute("opacity",r?"0.45":"0.85"),e.iconEl.style.background=r?"var(--disabled-text-color, #9e9e9e)":s,e.iconEl.style.borderColor=r?"var(--disabled-text-color, #9e9e9e)":s,e.iconEl.style.opacity=r?"0.55":"1";const d=e.iconEl.querySelector("ha-icon");null==d||d.setAttribute("icon",r?"mdi:lock":_[e.typeKey]),e.iconEl.style.display=e.isDevice||r?"flex":"none"}))}_updateSnapTarget(){var e,t,i,a;const n=this._isOverSourcesColumn(),o=n&&!!(null===(e=this._drag)||void 0===e?void 0:e.fromPlantId);if(o!==this._dropOnSources&&(this._dropOnSources=o),n)return this._snapCenter=void 0,void 0!==this._snapPlantId&&(this._snapPlantId=void 0),void(this._overlay&&(this._overlay.style.opacity="0"));const r=null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".sa-column-garden .sa-scroll"))||void 0===i?void 0:i.getBoundingClientRect(),s="list"===this._view;let l;for(const e of this._flowerNodes){if(e.plantId===(null===(a=this._drag)||void 0===a?void 0:a.fromPlantId))continue;const t=e.canvas.getBoundingClientRect(),i=t.left+t.width/2,n=t.top+t.height/2;if(r&&(n<r.top||n>r.bottom||i<r.left||i>r.right))continue;const o=Math.hypot(this._pointer.x-i,this._pointer.y-n);if(s){const t=e.el.getBoundingClientRect();this._pointer.x>=t.left&&this._pointer.x<=t.right&&this._pointer.y>=t.top&&this._pointer.y<=t.bottom&&(l={id:e.plantId,x:i,y:n,d:o})}else o<=175&&(!l||o<l.d)&&(l={id:e.plantId,x:i,y:n,d:o})}this._snapCenter=l?{x:l.x,y:l.y}:void 0,(null==l?void 0:l.id)!==this._snapPlantId&&(this._snapPlantId=null==l?void 0:l.id),this._overlay&&(this._overlay.style.opacity=l?"1":"0"),this._applyOverlayBlocking(null==l?void 0:l.id)}_isOverSourcesColumn(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".sa-column-sources");if(!t)return!1;const i=t.getBoundingClientRect();return this._pointer.x>=i.left&&this._pointer.x<=i.right&&this._pointer.y>=i.top&&this._pointer.y<=i.bottom}_tickDrag(e){if(!this._ghostSpring||!this._ghost)return;let t=this._pointer.x,i=this._pointer.y;const a=this._snapCenter;if(a){const e=this._pointer.x-a.x,n=this._pointer.y-a.y,o=Math.hypot(e,n)||1,r=o+.6*(this._dragLeafRadius-o);t=a.x+e/o*r,i=a.y+n/o*r}(0,d.stepSpring)(this._ghostSpring,t,i,e,260,24);const n=this._ghostSpring.x,o=this._ghostSpring.y;if(this._ghost.style.transform=`translate(${(n-this._ghostHalf).toFixed(1)}px, ${(o-this._ghostHalf).toFixed(1)}px)`,!a||0===this._overlayStems.length)return;const r=l.SensorAssignmentUtils.fanAngles(Math.atan2(o-a.y,n-a.x),this._overlayStems.length,1.4);this._overlayStems.forEach(((e,t)=>{const i=l.SensorAssignmentUtils.buildStem(a.x,a.y,n,o,r[t],34,58,this._ghostHalf);e.pathEl.setAttribute("d",i.path),e.iconEl.style.transform=`translate(${i.iconX.toFixed(1)}px, ${i.iconY.toFixed(1)}px)`}))}_endDrag(){var e,t;this._clearPendingDrag(),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("pointercancel",this._onPointerCancel),this._drag&&(this._dragEndedAt=Date.now()),null===(e=this._ghost)||void 0===e||e.remove(),this._ghost=void 0,null===(t=this._overlay)||void 0===t||t.remove(),this._overlay=void 0,this._overlayStems=[],this._ghostSpring=void 0,this._drag=void 0,this._dragGroupIds=new Set,this._dragLeafKey=void 0,this._snapPlantId=void 0,this._snapCenter=void 0,this._dropOnSources=!1}_assign(e,t){return n(this,void 0,void 0,(function*(){var i;if(!this.hass)return;const a=null!==(i=this._meterEntities.get(t))&&void 0!==i?i:{},n=this._planAssignment(e,t),o=[];for(const e of n){if(e.blocked)continue;const t=a[e.typeKey],i=e.group.types[e.typeKey];t&&i&&(yield this.hass.callService("plant","replace_sensor",{meter_entity:t,new_sensor:i}),o.push(e.typeKey))}e.fromPlantId&&e.fromPlantId!==t&&o.length>0&&(yield this._unassignTypes(e.fromPlantId,o)),!e.fromPlantId&&o.length>0&&this._selection.size>0&&(this._selection=new Set),this._refreshSensorInfo()}))}_unassignTypes(e,t){return n(this,void 0,void 0,(function*(){var i;if(!this.hass)return;const a=null!==(i=this._meterEntities.get(e))&&void 0!==i?i:{};for(const e of t){const t=a[e];t&&(yield this.hass.callService("plant","replace_sensor",{meter_entity:t}))}this._refreshSensorInfo()}))}_renderSearch(e,t,i){return o.html`
            <div class="sa-search">
                <ha-icon icon="mdi:magnify"></ha-icon>
                <input
                    type="search"
                    .value="${e}"
                    placeholder="${t}"
                    @input="${e=>i(e.target.value)}"
                />
                ${e?o.html`
                        <button class="sa-icon-button" title="Suche leeren" @click="${()=>i("")}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    `:""}
            </div>
        `}_renderTypeFilter(){return o.html`
            <div class="sa-type-filter">
                ${l.SENSOR_TYPES.map((e=>{const t=this._typeFilter.has(e.key);return o.html`
                        <button
                            class="sa-filter-chip ${t?"sa-filter-on":""}"
                            style="--sa-filter-color: ${l.SENSOR_TYPE_COLORS[e.key]}"
                            title="${this._typeLabel(e.key)}"
                            @click="${()=>this._toggleTypeFilter(e.key)}"
                        >
                            <ha-icon icon="${e.icon}"></ha-icon>
                        </button>
                    `}))}
                <button
                    class="sa-icon-button sa-filter-reset"
                    title="Typ-Filter zurücksetzen"
                    ?disabled="${0===this._typeFilter.size}"
                    @click="${()=>{this._typeFilter=new Set}}"
                >
                    <ha-icon icon="mdi:filter-remove-outline"></ha-icon>
                </button>
                <button
                    class="sa-icon-button sa-overwrite ${this._allowOverwrite?"sa-overwrite-on":""}"
                    title="${this._allowOverwrite?"Überschreiben ist AN — belegte Sensoren werden beim Ablegen ersetzt":"Überschreiben ist aus — belegte Sensoren bleiben unangetastet"}"
                    @click="${()=>{this._allowOverwrite=!this._allowOverwrite}}"
                >
                    <ha-icon icon="${this._allowOverwrite?"mdi:lock-open-variant":"mdi:lock"}"></ha-icon>
                </button>
            </div>
        `}_renderSourceRow(e,t){const i=Object.keys(e.types),a=i.filter((t=>this._selection.has(this._selectionKey(e.id,t)))),n=e.isDevice?i:i.slice(1),r=i[0],s=this._selection.has(this._selectionKey(e.id,r)),d=new Set(this._activeTypes(e)),c=this._isNarrowed(e);return o.html`
            <div
                class="sa-source ${this._dragGroupIds.has(e.id)?"sa-source-dragging":""} ${t.has(e.id)?"sa-source-used":""} ${a.length>0?"sa-source-selected":""}"
                @pointerdown="${t=>this._onDragStart(t,this._payloadForSource(e))}"
                title="${e.name}"
            >
                <div class="sa-source-avatar-slot">
                    ${e.isDevice?this._renderDeviceAvatar(e,"sa-avatar"):o.html`
                            <div
                                class="sa-avatar-button ${s?"sa-avatar-selected":""}"
                                style="color: ${l.SENSOR_TYPE_COLORS[r]}"
                                title="${this._typeLabel(r)} — ${e.types[r]} (klicken zum Aus-/Abwählen)"
                                @click="${t=>{t.stopPropagation(),this._toggleSelection(e.id,r)}}"
                            >
                                ${this._renderEntityAvatar(e,r,"sa-avatar")}
                            </div>
                        `}
                </div>
                <div class="sa-source-body">
                    <div class="sa-source-name">${e.name}</div>
                    ${n.length>0?o.html`
                            <div class="sa-source-types">
                                ${n.map((t=>{const i=d.has(t),a=l.SENSOR_TYPE_COLORS[t];return o.html`
                                        <button
                                            class="sa-chip ${i?"":"sa-chip-off"} ${i&&c?"sa-chip-selected":""}"
                                            style="background: ${i?a:"transparent"}; border-color: ${a}; color: ${a}"
                                            title="${this._typeLabel(t)} — ${e.types[t]} (${i?"klicken zum Abwählen":"klicken zum Dazunehmen"})"
                                            @click="${i=>{i.stopPropagation(),this._toggleSelection(e.id,t)}}"
                                        >
                                            <ha-icon icon="${_[t]}"></ha-icon>
                                        </button>
                                    `}))}
                            </div>
                        `:""}
                </div>
            </div>
        `}_deviceGlyph(e){const t=new Set(Object.keys(e.types));return t.has("moisture")?"soil":t.has("temperature")&&t.has("humidity")?"climate":"generic"}_renderDeviceGlyph(e){return"soil"===e?o.html`
                <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round">
                    ${o.svg`<rect x="8" y="2.2" width="8" height="9.6" rx="3" fill="currentColor" stroke="none"></rect>`}
                    ${o.svg`<path d="M10.4 11.8 9.7 20.4M13.6 11.8 14.3 20.4" stroke-width="1.7"></path>`}
                    ${o.svg`<path d="M2.6 15.6h18.8" stroke-width="1.5" stroke-dasharray="3 2.4" opacity="0.6"></path>`}
                </svg>
            `:"climate"===e?o.html`
                <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round">
                    ${o.svg`<rect x="4.2" y="3.2" width="15.6" height="17.6" rx="3.2" stroke-width="1.7"></rect>`}
                    ${o.svg`<rect x="7" y="6.4" width="10" height="6.6" rx="1.5" fill="currentColor" stroke="none" opacity="0.85"></rect>`}
                    ${o.svg`<path d="M7.6 16.8h4.2M14.6 16.8h1.8" stroke-width="1.6"></path>`}
                </svg>
            `:o.html`
            <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round">
                ${o.svg`<rect x="3.6" y="9" width="16.8" height="11.4" rx="2.6" stroke-width="1.7"></rect>`}
                ${o.svg`<circle cx="12" cy="14.7" r="2.1" fill="currentColor" stroke="none"></circle>`}
                ${o.svg`<path d="M12 9V5.4" stroke-width="1.6"></path>`}
                ${o.svg`<circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"></circle>`}
            </svg>
        `}_renderDeviceAvatar(e,t){return o.html`
            <div
                class="${t} sa-avatar-device"
                style="${e.picture?`background-image: url(${e.picture})`:""}"
            >
                ${e.picture?"":this._renderDeviceGlyph(this._deviceGlyph(e))}
            </div>
        `}_renderEntityAvatar(e,t,i){var a;const n=null!==(a=l.SENSOR_TYPE_COLORS[t])&&void 0!==a?a:"var(--primary-color)";return o.html`
            <div class="${i} sa-avatar-entity" style="background: ${n}; color: ${n}">
                <ha-icon icon="${_[t]}"></ha-icon>
            </div>
        `}_renderFlower(e){const{leaves:t,open:i}=this._flowerLayout(e);return o.html`
            <div
                class="sa-flower ${this._snapPlantId===e.entityId?"sa-flower-snap":""}"
                data-plant="${e.entityId}"
            >
                <div class="sa-flower-canvas">
                    <svg class="sa-stems" viewBox="0 0 ${u} ${u}" width="${u}" height="${u}">
                        ${t.map((e=>e.typeKeys.map((t=>o.html`
                            <path
                                data-owner="${e.key}"
                                fill="none"
                                stroke="${l.SENSOR_TYPE_COLORS[t]}"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                opacity="0.75"
                            ></path>
                        `))))}
                    </svg>

                    <div
                        class="sa-core"
                        style="${e.picture?`background-image: url(${e.picture})`:""}"
                        title="${e.name}"
                    >
                        ${e.picture?"":o.html`<ha-icon icon="mdi:sprout"></ha-icon>`}
                    </div>

                    <div class="sa-flower-name" title="${e.name}">${e.name}</div>
                    ${this._strainLine(e)?o.html`<div class="sa-flower-strain" title="${this._strainLine(e)}">${this._strainLine(e)}</div>`:""}

                    ${i.map((e=>o.html`
                        <div
                            class="sa-type sa-type-open"
                            style="border-color: ${l.SENSOR_TYPE_COLORS[e.typeKey]}; color: ${l.SENSOR_TYPE_COLORS[e.typeKey]}; transform: translate(${(58*Math.cos(e.angle)).toFixed(1)}px, ${(58*Math.sin(e.angle)).toFixed(1)}px)"
                            title="${this._typeLabel(e.typeKey)} — noch nicht zugewiesen"
                        >
                            <ha-icon icon="${_[e.typeKey]}"></ha-icon>
                        </div>
                    `))}

                    ${t.map((t=>{const i={entries:[{group:t.group,typeKeys:t.typeKeys}],fromPlantId:e.entityId},a=this._dragLeafKey===`${e.entityId}|${t.key}`;return o.html`
                            <div
                                class="sa-leaf ${t.group.isDevice?"sa-leaf-device":"sa-leaf-entity"} ${a?"sa-leaf-dragging":""}"
                                data-leaf="${t.key}"
                                data-angle="${t.angle}"
                                data-sector="${t.sector}"
                                data-half="${t.group.isDevice?22:12}"
                                data-radius="${t.group.isDevice?94:58}"
                                title="${t.group.name} — ziehen: zu einer anderen Pflanze hängen oder links in die Liste zum Lösen"
                                @pointerdown="${e=>this._onDragStart(e,i)}"
                            >
                                ${t.group.isDevice?this._renderDeviceAvatar(t.group,"sa-leaf-avatar"):this._renderEntityAvatar(t.group,t.typeKeys[0],"sa-leaf-avatar")}
                                <div class="sa-leaf-name">${t.group.name}</div>
                            </div>
                        `}))}

                    ${t.filter((e=>e.group.isDevice)).map((t=>t.typeKeys.map((i=>o.html`
                            <div
                                class="sa-type"
                                data-owner="${t.key}"
                                data-type="${i}"
                                style="background: ${l.SENSOR_TYPE_COLORS[i]}; border-color: ${l.SENSOR_TYPE_COLORS[i]}"
                                title="${this._typeLabel(i)} — klicken zum Lösen"
                                @click="${()=>this._unassignTypes(e.entityId,[i])}"
                            >
                                <ha-icon icon="${_[i]}"></ha-icon>
                            </div>
                        `))))}
                </div>
            </div>
        `}_renderPlantRow(e){const{leaves:t,open:i}=this._flowerLayout(e);return o.html`
            <div
                class="sa-row ${this._snapPlantId===e.entityId?"sa-row-snap":""}"
                data-plant="${e.entityId}"
            >
                <div class="sa-row-plant">
                    <div
                        class="sa-core"
                        style="${e.picture?`background-image: url(${e.picture})`:""}"
                        title="${e.name}"
                    >
                        ${e.picture?"":o.html`<ha-icon icon="mdi:sprout"></ha-icon>`}
                    </div>
                    <div class="sa-row-name" title="${e.name}">${e.name}</div>
                    ${this._strainLine(e)?o.html`<div class="sa-row-strain" title="${this._strainLine(e)}">${this._strainLine(e)}</div>`:""}
                </div>

                <div class="sa-row-groups">
                    ${t.map((t=>this._renderListGroup(e,t)))}
                    ${i.length>0?this._renderListOpenGroup(i):""}
                </div>
            </div>
        `}_renderListGroup(e,t){const i=26*t.typeKeys.length-2,a={entries:[{group:t.group,typeKeys:t.typeKeys}],fromPlantId:e.entityId},n=this._dragLeafKey===`${e.entityId}|${t.key}`;return o.html`
            <div class="sa-group" style="height: ${i}px">
                <div class="sa-group-types">
                    ${t.typeKeys.map(((t,i)=>o.html`
                        <div
                            class="sa-type sa-type-list"
                            style="top: ${26*i}px; background: ${l.SENSOR_TYPE_COLORS[t]}; border-color: ${l.SENSOR_TYPE_COLORS[t]}"
                            title="${this._typeLabel(t)} — klicken zum Lösen"
                            @click="${()=>this._unassignTypes(e.entityId,[t])}"
                        >
                            <ha-icon icon="${_[t]}"></ha-icon>
                        </div>
                    `))}
                </div>

                <div
                    class="sa-group-source ${n?"sa-leaf-dragging":""}"
                    title="${t.group.name} — ziehen: zu einer anderen Pflanze hängen oder links in die Liste zum Lösen"
                    @pointerdown="${e=>this._onDragStart(e,a)}"
                >
                    <div class="sa-source-avatar-slot">
                        ${t.group.isDevice?this._renderDeviceAvatar(t.group,"sa-avatar"):this._renderEntityAvatar(t.group,t.typeKeys[0],"sa-avatar")}
                    </div>
                    <span class="sa-group-source-name">${t.group.name}</span>
                </div>
            </div>
        `}_renderListOpenGroup(e){return o.html`
            <div class="sa-group sa-group-open" style="height: ${26*e.length-2}px">
                <div class="sa-group-types">
                    ${e.map(((e,t)=>o.html`
                        <div
                            class="sa-type sa-type-list sa-type-open"
                            style="top: ${26*t}px; border-color: ${l.SENSOR_TYPE_COLORS[e.typeKey]}; color: ${l.SENSOR_TYPE_COLORS[e.typeKey]}"
                            title="${this._typeLabel(e.typeKey)} — noch nicht zugewiesen"
                        >
                            <ha-icon icon="${_[e.typeKey]}"></ha-icon>
                        </div>
                    `))}
                </div>
                <div class="sa-group-source sa-group-source-empty">nicht zugewiesen</div>
            </div>
        `}render(){if(!this.hass)return o.html``;const e=this._filteredSources(),t=e.filter((e=>e.isDevice)),i=e.filter((e=>!e.isDevice)),a=this._filteredPlants(),n=this._areaOptions(),r=this._assignedGroupIds(),s=""!==this._sourceQuery.trim()||this._typeFilter.size>0,d=this._selection.size;return o.html`
            <div class="sa-container">
                <div class="sa-column sa-column-sources ${this._dropOnSources?"sa-drop-active":""}">
                    <div class="sa-toolbar">
                        ${this._renderSearch(this._sourceQuery,"Geräte und Entitäten suchen",(e=>{this._sourceQuery=e}))}
                        ${this._renderTypeFilter()}
                        ${d>0?o.html`
                                <div class="sa-selection-bar">
                                    <span>${d} ausgewählt — ziehen zum Zuweisen</span>
                                    <button
                                        class="sa-icon-button"
                                        title="Auswahl aufheben"
                                        @click="${()=>{this._selection=new Set}}"
                                    >
                                        <ha-icon icon="mdi:close"></ha-icon>
                                    </button>
                                </div>
                            `:""}
                    </div>

                    <div class="sa-scroll">
                        <div class="sa-section-title">Geräte</div>
                        ${t.length>0?t.map((e=>this._renderSourceRow(e,r))):o.html`<div class="sa-empty-hint">${s?"Keine Treffer":"Keine passenden Geräte gefunden"}</div>`}

                        <div class="sa-section-title">Entitäten</div>
                        ${i.length>0?i.map((e=>this._renderSourceRow(e,r))):o.html`<div class="sa-empty-hint">${s?"Keine Treffer":"Keine losen Entitäten gefunden"}</div>`}
                    </div>

                    <div class="sa-drop-hint">Hier ablegen zum Lösen</div>
                </div>

                <div class="sa-column sa-column-garden">
                    <div class="sa-toolbar sa-toolbar-garden">
                        ${this._renderSearch(this._plantQuery,"Pflanze suchen",(e=>{this._plantQuery=e}))}
                        <div class="sa-view-switch">
                            <button
                                class="${"flower"===this._view?"sa-view-on":""}"
                                title="Blütenansicht"
                                @click="${()=>{this._viewOverride="flower"}}"
                            >
                                <ha-icon icon="mdi:flower-outline"></ha-icon>
                            </button>
                            <button
                                class="${"list"===this._view?"sa-view-on":""}"
                                title="Listenansicht"
                                @click="${()=>{this._viewOverride="list"}}"
                            >
                                <ha-icon icon="mdi:format-list-bulleted"></ha-icon>
                            </button>
                        </div>
                        <div class="sa-view-switch">
                            <button
                                class="${this._showStrain?"sa-view-on":""}"
                                title="Strain anzeigen"
                                @click="${()=>{this._showStrain=!this._showStrain}}"
                            >
                                <ha-icon icon="mdi:dna"></ha-icon>
                            </button>
                            <button
                                class="${this._showBreeder?"sa-view-on":""}"
                                title="Breeder anzeigen"
                                @click="${()=>{this._showBreeder=!this._showBreeder}}"
                            >
                                <ha-icon icon="mdi:account-tie"></ha-icon>
                            </button>
                        </div>
                    </div>

                    <div class="sa-phase-filter">
                        <span class="sa-filter-label">Phase</span>
                        ${l.GROWTH_PHASES.map((e=>o.html`
                            <button
                                class="sa-phase-chip ${this._phases.has(e)?"sa-phase-on":""}"
                                title="Wachstumsphase ${c.TranslationUtils.translateGrowthPhase(this.hass,e)}"
                                @click="${()=>this._togglePhase(e)}"
                            >
                                ${c.TranslationUtils.translateGrowthPhase(this.hass,e)}
                            </button>
                        `))}
                    </div>

                    ${n.length>1?o.html`
                            <div class="sa-phase-filter">
                                <span class="sa-filter-label">Raum</span>
                                ${n.map((e=>o.html`
                                    <button
                                        class="sa-phase-chip ${this._areas.has(e.id)?"sa-phase-on":""}"
                                        title="Raum ${e.name}"
                                        @click="${()=>this._toggleArea(e.id)}"
                                    >
                                        ${e.name}
                                    </button>
                                `))}
                            </div>
                        `:""}

                    <div class="sa-scroll">
                        ${0===a.length?o.html`<div class="sa-empty-hint">${this._plantQuery?"Keine Treffer":"Keine Pflanzen gefunden"}</div>`:"list"===this._view?o.html`<div class="sa-list">${a.map((e=>this._renderPlantRow(e)))}</div>`:o.html`<div class="sa-garden">${a.map((e=>this._renderFlower(e)))}</div>`}
                    </div>
                </div>
            </div>
        `}static get styles(){return s.sensorAssignmentStyles}};t.SensorAssignment=f,a([(0,r.property)({attribute:!1})],f.prototype,"hass",void 0),a([(0,r.property)({attribute:!1})],f.prototype,"defaultView",void 0),a([(0,r.state)()],f.prototype,"_viewOverride",void 0),a([(0,r.property)({attribute:!1})],f.prototype,"defaultPhases",void 0),a([(0,r.state)()],f.prototype,"_phaseOverride",void 0),a([(0,r.property)({attribute:!1})],f.prototype,"defaultAreas",void 0),a([(0,r.state)()],f.prototype,"_areaOverride",void 0),a([(0,r.state)()],f.prototype,"_sensorDevices",void 0),a([(0,r.state)()],f.prototype,"_plantDevices",void 0),a([(0,r.state)()],f.prototype,"_sensorInfo",void 0),a([(0,r.state)()],f.prototype,"_sourceQuery",void 0),a([(0,r.state)()],f.prototype,"_plantQuery",void 0),a([(0,r.state)()],f.prototype,"_typeFilter",void 0),a([(0,r.state)()],f.prototype,"_selection",void 0),a([(0,r.state)()],f.prototype,"_allowOverwrite",void 0),a([(0,r.state)()],f.prototype,"_dragGroupIds",void 0),a([(0,r.state)()],f.prototype,"_dragLeafKey",void 0),a([(0,r.state)()],f.prototype,"_snapPlantId",void 0),a([(0,r.state)()],f.prototype,"_dropOnSources",void 0),a([(0,r.state)()],f.prototype,"_showStrain",void 0),a([(0,r.state)()],f.prototype,"_showBreeder",void 0),t.SensorAssignment=f=a([(0,r.customElement)("sensor-assignment")],f)},6822:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},n=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FlowerTimeline=void 0;const o=i(4437),r=i(2924),s=i(4911),l=i(4507),d=i(8063),c=i(2413),h=120,u=60,p=207,m=90,_=280,g=70,v=45,f=100,y=175,b=70;let w=class extends o.LitElement{constructor(){super(...arguments),this.events=[],this.stateHistory=[],this._timelineWidth=500,this.labelOffsets={},this.markerOffsets={},this._showGallery=!1,this._hoveredImageIndex=null,this._hoveredEventIndex=null,this._lastUpdate=0,this._imageUrls=[],this._isLoading=!1}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".timeline-events");t&&(this._timelineWidth=t.getBoundingClientRect().width,this._resizeObserver=new ResizeObserver((e=>{for(const t of e)this._timelineWidth=t.contentRect.width,this.requestUpdate()})),this._resizeObserver.observe(t))}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return n(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this._updateTimelineData(),yield this._loadPlantInfo()}))}updated(e){const t=Object.create(null,{updated:{get:()=>super.updated}});return n(this,void 0,void 0,(function*(){t.updated.call(this,e),Date.now()-this._lastUpdate>2e3&&(yield this._updateTimelineData(),yield this._loadPlantInfo())}))}_updateTimelineData(){return n(this,void 0,void 0,(function*(){var e;if(this.entityId&&this.hass){const t=this.entityId.split(".")[1];this.events=yield this.collectTimelineEvents(t);try{const t=(null===(e=this.events[0])||void 0===e?void 0:e.date.toISOString())||(new Date).toISOString(),i=(new Date).toISOString(),a=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${this.entityId}&end_time=${i}`);a&&Array.isArray(a)&&a.length>0&&(this.stateHistory=a[0])}catch(e){console.warn("Fehler beim Laden der Status-Historie:"),this.stateHistory=[]}this._lastUpdate=Date.now()}}))}_loadPlantInfo(){return n(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&!this._isLoading){this._isLoading=!0;try{this._plantInfo=d.PlantEntityUtils.buildPlantView(this.hass,this.entityId)}catch(e){console.warn("Fehler beim Laden der Pflanzen-Info:",e),this._plantInfo=null}finally{this._isLoading=!1}}}))}collectTimelineEvents(e){return n(this,void 0,void 0,(function*(){var t,i,a,n,o,r,s;if(!this.hass)return[];const w=[];let x;try{x=d.PlantEntityUtils.buildPlantView(this.hass,`plant.${e}`)}catch(e){return console.warn("Fehler beim Laden der Pflanzen-Info:",e),[]}const k=(null==x?void 0:x.helpers)||{},S=null===(t=k.growth_phase)||void 0===t?void 0:t.entity_id,$=null===(i=k.pot_size)||void 0===i?void 0:i.entity_id,z=null===(a=k.treatment)||void 0===a?void 0:a.entity_id,E=null===(n=k.location)||void 0===n?void 0:n.entity_id,C=yield l.FlowerGallery.getImagesWithDates(this.hass,`plant.${e}`,x);this._imageUrls=C.map((e=>e.url));const I=C.map(((e,t)=>({date:e.date,type:"image",label:c.TranslationUtils.translateHistory(this.hass,"photo"),description:`${c.TranslationUtils.translateHistory(this.hass,"image_taken")} ${e.date.toLocaleDateString()}`,style:`background-color: hsl(${y}, ${b}%, 45%);`,data:{imageIndex:t,url:e.url}})));w.push(...I);const M=["seeds","germination","rooting","growing","flowering","removed","harvested"],P=[];if(S){const e=this.hass.states[S];if(e)for(const t of M){const i=null==e?void 0:e.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(i){const e={date:new Date(i),type:`phase-${t}`,label:c.TranslationUtils.translateGrowthPhase(this.hass,t),description:`${c.TranslationUtils.translateGrowthPhase(this.hass,t)} ${c.TranslationUtils.translateHistory(this.hass,"phase_started")} ${new Date(i).toLocaleDateString()}`};if("removed"===t)e.style="display: none;";else if("harvested"===t)e.style="\n                                background-color: hsl(120, 70%, 45%);\n                                background-image: repeating-linear-gradient(45deg, \n                                    transparent,\n                                    transparent 2px,\n                                    rgba(255,255,255,0.4) 2px,\n                                    rgba(255,255,255,0.4) 4px\n                                );\n                            ";else{const i=M.filter((e=>"removed"!==e&&"harvested"!==e)),a=i.indexOf(t),n=1===i.length?55:55-a/Math.max(1,i.length-1)*25;e.style=`background-color: hsl(${h}, ${u}%, ${n}%)`}P.push(e)}}}w.push(...P);try{if($){const e=(null===(o=w[0])||void 0===o?void 0:o.date.toISOString())||(new Date).toISOString(),t=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${$}&end_time=${t}`);if(i&&Array.isArray(i)&&i.length>0){let e=null;const t=[],a=i[0];for(let i=0;i<a.length;i++){const n=a[i];n.state&&!isNaN(parseFloat(n.state))&&"unavailable"!==n.state&&"unknown"!==n.state&&(null!==e&&n.state===e||(t.push({date:new Date(n.last_changed),type:"pot-size",label:`${n.state}L`,description:`${c.TranslationUtils.translateHistory(this.hass,"pot_size_changed")} ${n.state}L ${new Date(n.last_changed).toLocaleDateString()}`}),e=n.state))}t.forEach(((e,t)=>{const i=65-10*t;e.style=`background-color: hsl(${p}, ${m}%, ${i}%)`})),w.push(...t)}}}catch(e){console.warn("Fehler beim Laden der Topfgrößen-Historie:",e)}try{if(E){const e=(null===(r=w[0])||void 0===r?void 0:r.date.toISOString())||(new Date).toISOString(),t=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${E}&end_time=${t}`);if(i&&Array.isArray(i)&&i.length>0){const e=[],t=i[0];let a=null;for(let i=0;i<t.length;i++){const n=t[i];if(n.state&&"unavailable"!==n.state&&"unknown"!==n.state)try{const t=JSON.parse(n.state);t&&t.area&&(null!==a&&t.area===a||(e.push({date:new Date(n.last_changed),type:"area-moved",label:t.area,description:`${c.TranslationUtils.translateHistory(this.hass,"moved_to")} ${t.area} ${new Date(n.last_changed).toLocaleDateString()}`}),a=t.area))}catch(e){continue}}e.forEach(((e,t)=>{const i=65-10*t;e.style=`background-color: hsl(${_}, ${g}%, ${i}%)`})),w.push(...e)}}}catch(e){console.warn("Fehler beim Laden der Area-Historie:",e)}try{if(z){const e=(null===(s=w[0])||void 0===s?void 0:s.date.toISOString())||(new Date).toISOString(),t=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${z}&end_time=${t}`);if(i&&Array.isArray(i)&&i.length>0){const e=[],t=i[0];let a=null;for(let i=0;i<t.length;i++){const n=t[i];n.state&&"unavailable"!==n.state&&"unknown"!==n.state&&"none"!==n.state&&(null!==a&&n.state===a||(e.push({date:new Date(n.last_changed),type:"treatment",label:c.TranslationUtils.translateTreatment(this.hass,n.state),description:`${c.TranslationUtils.translateHistory(this.hass,"treatment")}: ${c.TranslationUtils.translateTreatment(this.hass,n.state)} ${new Date(n.last_changed).toLocaleDateString()}`}),a=n.state))}e.forEach(((e,t)=>{const i=Math.max(80-8*t,0);e.style=`background-color: hsl(${v}, ${f}%, ${i}%);`})),w.push(...e)}}}catch(e){console.warn("Fehler beim Laden der Treatment-Historie:",e)}return w.sort(((e,t)=>e.date.getTime()-t.date.getTime()))}))}static get styles(){return s.timelineStyles}calculateEventPosition(e,t,i){const a=i.getTime()-t.getTime(),n=e.date.getTime()-t.getTime();return Math.min(n/a*100,100)}checkCollisions(e,t,i){const a=new Map,n=new Map;e.forEach((e=>{const n=this.calculateEventPosition(e,t,i);a.set(e,n*this._timelineWidth/100)})),e.sort(((e,t)=>a.get(e)-a.get(t)));for(let t=1;t<e.length;t++){const i=e[t],o=e[t-1],r=a.get(i),s=a.get(o)+(n.get(o)||0)+4;r<s&&n.set(i,s-r)}return n}calculateEventWidth(e,t,i,a,n){const o=this.calculateEventPosition(e,a,n);if("treatment"===e.type)return{position:`${o}%`,width:"2px"};if(t===i.length-1)return{position:`${o}%`,width:`calc(100% - ${o}%)`};const r=i[t+1];return{position:`${o}%`,width:`calc(${this.calculateEventPosition(r,a,n)}% - ${o}%)`}}formatDate(e,t){return"harvest"===(null==t?void 0:t.type)&&t.displayDate?t.displayDate.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"}):e.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"})}checkOverlap(e){const t={};let i=0;e.sort(((e,t)=>e.position-t.position));const a=new Map,n=document.createElement("div");n.style.visibility="hidden",n.style.position="absolute",n.className="timeline-label",document.body.appendChild(n),e.forEach((e=>{let t;t=e.index>=this.events.length?c.TranslationUtils.translateHistory(this.hass,"harvest"):this.events[e.index].label,n.textContent=t;const i=n.getBoundingClientRect().width;a.set(e.index,i)})),document.body.removeChild(n);for(let n=0;n<e.length;n++){const o=e[n];let r=!1;for(let t=Math.max(0,n-3);t<n;t++){const n=e[t],s=((a.get(o.index)||0)+(a.get(n.index)||0))/2+1,l=o.position/100*this._timelineWidth,d=n.position/100*this._timelineWidth;if(Math.abs(l-d)<s){r=!0,0===i?i=1:1===i?i=2:2===i&&(i=0);break}}r?t[o.index]=i:(t[o.index]=0,i=0)}return t}renderEventGroup(e,t,i,a,n,r){return o.html`
            ${e.map(((s,l)=>{var d,c,h;const{position:u,width:p}=this.calculateEventWidth(s,l,e,i,a),m=n.get(s)||0,_="image"===s.type,g="treatment"===s.type,v=_?null===(d=s.data)||void 0===d?void 0:d.imageIndex:null,f=this.events.findIndex((e=>e===s)),y=_&&this._hoveredImageIndex===v||this._hoveredEventIndex===f;return o.html`
                    <div class="timeline-event ${s.type}"
                         style="left: calc(${u} + ${m}px); 
                                width: ${p};
                                top: ${null===(c=r.get(t))||void 0===c?void 0:c.top}px;
                                height: ${null===(h=r.get(t))||void 0===h?void 0:h.height}px;
                                ${s.style||""}"
                         title="${s.description}"
                         @click="${()=>{_?this._handleImageClick(v):this._handleTimelineEventClick(s)}}"
                         @mouseenter="${()=>{_&&(this._hoveredImageIndex=v),this._hoveredEventIndex=f}}"
                         @mouseleave="${()=>{_&&(this._hoveredImageIndex=null),this._hoveredEventIndex=null}}"
                         ?data-hovered="${y}"
                         ?data-scale-effect="${_||g}"
                    >
                    </div>
                `}))}
        `}renderStatusIndicators(e,t,i,a){return o.html`
            ${e.map(((e,n)=>{var r,s;const l=new Date(e.last_changed),d=this.stateHistory[n+1],c=d?new Date(d.last_changed):new Date,h=Math.min((l.getTime()-t.getTime())/(i.getTime()-t.getTime())*100,100),u=Math.min((c.getTime()-l.getTime())/(i.getTime()-t.getTime())*100,100-h),p="problem"===e.state?"timeline-status-problem":"unknown"===e.state?"timeline-status-unknown":"";return p?o.html`
                    <div class="timeline-status-indicator ${p}"
                         style="left: ${h}%; 
                                width: ${u}%;
                                top: ${null===(r=a.get("status"))||void 0===r?void 0:r.top}px;
                                height: ${null===(s=a.get("status"))||void 0===s?void 0:s.height}px;">
                    </div>
                `:""}))}
        `}_handleImageClick(e){this._showGallery=!0,this._hoveredImageIndex=e,this.requestUpdate()}renderTimelineItems(e,t,i,a){return o.html`
            ${e.map(((e,n)=>{var r;const s=Math.min((e.date.getTime()-t.getTime())/(i.getTime()-t.getTime())*100,100),l=a?this.labelOffsets[n]||0:this.markerOffsets[n]||0,d="image"===e.type,c=d?null===(r=e.data)||void 0===r?void 0:r.imageIndex:null,h=this.events.findIndex((t=>t===e)),u=d&&this._hoveredImageIndex===c||this._hoveredEventIndex===h;let p="";p=a?1===l?"offset-up":2===l?"offset-up-2":-1===l?"offset-down":"":1===l?"offset-up":2===l?"offset-up-2":-1===l?"offset-down":-2===l?"offset-down-2":"";const m=a?"timeline-label":"timeline-marker",_=a?e.label:this.formatDate(e.date,e);return o.html`
                    <div class="${m} ${p} ${u?"hovered":""}"
                         style="left: ${s}%; ${e.style||""}"
                         @click="${()=>{d?this._handleImageClick(c):this._handleTimelineEventClick(e)}}"
                         @mouseenter="${()=>{d&&(this._hoveredImageIndex=c),this._hoveredEventIndex=h}}"
                         @mouseleave="${()=>{d&&(this._hoveredImageIndex=null),this._hoveredEventIndex=null}}"
                         ?data-hovered="${u}"
                         data-type="${e.type}"
                    >
                        ${_}
                    </div>
                `}))}
        `}_handleTimelineEventClick(e){var t,i,a,n;if("image"===e.type)return;let o=e.date,r=new Date;if(e.type.startsWith("phase-")){const s=e.type.split("-")[1];if(null===(a=null===(i=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===i?void 0:i.growth_phase)||void 0===a?void 0:a.entity_id){const t=this._plantInfo.helpers.growth_phase.entity_id,i=null===(n=this.hass)||void 0===n?void 0:n.states[t];if(null==i?void 0:i.attributes){o=e.date;const t=["seeds","germination","rooting","growing","flowering","removed","harvested"],a=t.indexOf(s);if(a>=0&&a<t.length-1){const e=t[a+1],n="removed"===e||"harvested"===e?e:`${e}_start`,o=i.attributes[n];o&&(r=new Date(o))}}}}else if("area-moved"===e.type){o=e.date;const t=this.events.filter((e=>"area-moved"===e.type)),i=t.findIndex((t=>t.date.getTime()===e.date.getTime()));i>=0&&i<t.length-1&&(r=t[i+1].date)}else if("pot-size"===e.type){o=e.date;const t=this.events.filter((e=>"pot-size"===e.type)),i=t.findIndex((t=>t.date.getTime()===e.date.getTime()));i>=0&&i<t.length-1&&(r=t[i+1].date)}r=new Date(r.getTime()+864e5),this._updateGraph(o,r)}_updateGraph(e,t){var i;const a=null===(i=this.parentNode)||void 0===i?void 0:i.querySelector("flower-graph");a&&(a._dateRange=[e,t],a._picker&&a._picker.setDate(a._dateRange,!1),a.updateGraphData(!0))}render(){var e,t,i;if(!this.entityId||!this.hass||0===this.events.length)return o.html``;let a,n;if(!(null===(e=this._plantInfo)||void 0===e?void 0:e.helpers))return o.html``;{const e=this._plantInfo.helpers,o=null===(t=e.growth_phase)||void 0===t?void 0:t.entity_id,r=null===(i=e.flowering_duration)||void 0===i?void 0:i.entity_id;a=o?this.hass.states[o]:null,n=r?this.hass.states[r]:null}if(!a)return o.html``;const r=this.events[0].date,s=a.state,l=new Date;let d;if("removed"===s)d=new Date(a.attributes.removed_date);else if("harvested"===s)d=new Date(a.attributes.harvested_date);else if("flowering"===s&&(null==n?void 0:n.state)){const e=new Date(a.attributes.flowering_start);d=new Date(e),d.setDate(d.getDate()+parseInt(n.state))}else(null==n?void 0:n.state)?(d=new Date(l),d.setDate(d.getDate()+parseInt(n.state))):d=l;const h=(l.getTime()-r.getTime())/.9,u=new Date(r.getTime()+h),p=[...this.events],m={date:u,displayDate:d,type:"harvest",label:c.TranslationUtils.translateHistory(this.hass,"harvest"),description:`${c.TranslationUtils.translateHistory(this.hass,"expected_harvest_date")}: ${d.toLocaleDateString()}`};p.push(m);const _=p.map(((e,t)=>({index:t,position:Math.min((e.date.getTime()-r.getTime())/(u.getTime()-r.getTime())*100,100),type:"label",offset:0})));this.labelOffsets=this.checkOverlap(_),this.markerOffsets=Object.fromEntries(Object.entries(this.labelOffsets).map((([e,t])=>[e,-1*t])));const g=this.events.filter((e=>e.type.startsWith("phase"))),v=this.events.filter((e=>e.type.startsWith("area"))),f=this.events.filter((e=>"pot-size"===e.type)),y=this.events.filter((e=>"treatment"===e.type)),b=this.events.filter((e=>"image"===e.type)),w=this.checkCollisions(g,r,u),x=this.checkCollisions(v,r,u),k=this.checkCollisions(f,r,u),S=this.checkCollisions(y,r,u),$=this.checkCollisions(b,r,u),z=new Map;return g.length>0&&z.set("phase",{top:0,height:10}),v.length>0&&z.set("area",{top:10,height:10}),f.length>0&&z.set("pot",{top:20,height:10}),this.stateHistory.length>0&&z.set("status",{top:30,height:4}),y.length>0&&z.set("treatment",{top:0,height:34}),b.length>0&&z.set("image",{top:0,height:34}),o.html`
            <div class="timeline-container">
                <div class="timeline">
                    <div class="timeline-labels">
                        ${this.renderTimelineItems(p,r,u,!0)}
                    </div>
                    <div class="timeline-events">
                        <div class="current-time-line" style="left: 90%;"></div>
                        ${this.renderEventGroup(g,"phase",r,u,w,z)}
                        ${this.renderEventGroup(v,"area",r,u,x,z)}
                        ${this.renderEventGroup(f,"pot",r,u,k,z)}
                        ${this.renderStatusIndicators(this.stateHistory,r,u,z)}
                        ${this.renderEventGroup(y,"treatment",r,u,S,z)}
                        ${this.renderEventGroup(b,"image",r,u,$,z)}
                    </div>
                    <div class="timeline-markers">
                        ${this.renderTimelineItems(p,r,u,!1)}
                    </div>
                </div>
            </div>
            ${this._showGallery?o.html`
                <flower-gallery
                    .hass=${this.hass}
                    .entityId=${this.entityId}
                    .images=${this._imageUrls}
                    .initialImageIndex=${this._hoveredImageIndex}
                    .onClose=${()=>{this._showGallery=!1,this._hoveredImageIndex=null}}
                ></flower-gallery>
            `:""}
        `}};t.FlowerTimeline=w,a([(0,r.property)()],w.prototype,"hass",void 0),a([(0,r.property)()],w.prototype,"entityId",void 0),a([(0,r.property)({type:Array})],w.prototype,"events",void 0),a([(0,r.property)()],w.prototype,"stateHistory",void 0),a([(0,r.state)()],w.prototype,"_timelineWidth",void 0),a([(0,r.state)()],w.prototype,"labelOffsets",void 0),a([(0,r.state)()],w.prototype,"markerOffsets",void 0),a([(0,r.state)()],w.prototype,"_showGallery",void 0),a([(0,r.state)()],w.prototype,"_hoveredImageIndex",void 0),a([(0,r.state)()],w.prototype,"_hoveredEventIndex",void 0),t.FlowerTimeline=w=a([(0,r.customElement)("flower-timeline")],w)},43:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliCardEditor=void 0;const n=i(4437),o=i(2924),r=i(4356),s=i(9130),l=i(4139),d=i(1261),c=l.elementOptions.filter((e=>"header"!==e.value&&"options"!==e.value)),h=[{label:"Wachstumsphasen",value:d.EVENT_TYPES.PHASE},{label:"Topfgrößen",value:d.EVENT_TYPES.POT},{label:"Standorte",value:d.EVENT_TYPES.AREA},{label:"Behandlungen",value:d.EVENT_TYPES.TREATMENT},{label:"Bilder",value:d.EVENT_TYPES.IMAGE},{label:"Journal",value:d.EVENT_TYPES.JOURNAL}];let u=class extends n.LitElement{constructor(){super(...arguments),this._computeLabel=e=>{var t;return null!==(t={entity:"Entity",display_type:"Display Type",battery_sensor:"Battery Sensor",show_bars:"Show Bars",full_width_bars:"Full Width Bars",show_elements:"Show Elements",option_elements:"Option Elements",default_expanded_options:"Default Expanded Options",history_groups:"History Groups",history_line_position:"History Line Position",listen_to:"Listen-to (List-Card Identifier)"}[e.name])&&void 0!==t?t:e.name}}setConfig(e){this._config=e}get _schema(){return[{name:"entity",required:!0,selector:{entity:{filter:[{domain:"plant"},{domain:"cycle"}]}}},{name:"display_type",selector:{select:{mode:"dropdown",options:[{value:s.DisplayType.Full,label:"Full"},{value:s.DisplayType.Compact,label:"Compact"}]}}},{name:"battery_sensor",selector:{entity:{filter:{domain:"sensor",device_class:"battery"}}}},{name:"show_bars",selector:{select:{multiple:!0,mode:"list",options:l.plantAttributes.map((e=>({value:e.value,label:e.label})))}}},{name:"full_width_bars",selector:{select:{multiple:!0,mode:"list",options:l.plantAttributes.map((e=>({value:e.value,label:e.label})))}}},{name:"show_elements",selector:{select:{multiple:!0,mode:"list",options:l.elementOptions.map((e=>({value:e.value,label:e.label})))}}},{name:"option_elements",selector:{select:{multiple:!0,mode:"list",options:c.map((e=>({value:e.value,label:e.label})))}}},{name:"default_expanded_options",selector:{select:{multiple:!0,mode:"list",options:c.map((e=>({value:e.value,label:e.label})))}}},{name:"history_groups",selector:{select:{multiple:!0,mode:"list",options:h.map((e=>({value:e.value,label:e.label})))}}},{name:"history_line_position",selector:{select:{mode:"dropdown",options:[{value:"left",label:"Links"},{value:"right",label:"Rechts"}]}}},{name:"listen_to",selector:{text:{}}}]}_data(){return Object.assign({show_bars:[...l.default_show_bars],show_elements:[...l.default_show_elements],option_elements:[...l.default_option_elements],default_expanded_options:[...l.initial_expanded_options],full_width_bars:[]},this._config)}render(){return this.hass&&this._config?n.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._data()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:n.html``}_valueChanged(e){(0,r.fireEvent)(this,"config-changed",{config:e.detail.value})}static get styles(){return n.css`
      ha-form { display: block; }
    `}};t.BrokkoliCardEditor=u,a([(0,o.property)({attribute:!1})],u.prototype,"hass",void 0),a([(0,o.state)()],u.prototype,"_config",void 0),t.BrokkoliCardEditor=u=a([(0,o.customElement)("brokkoli-card-editor")],u)},1894:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliListCardEditor=void 0;const n=i(4437),o=i(2924),r=i(4356),s=i(5869).FIELD_DEFINITIONS.map((e=>({value:e.id,label:"string"==typeof e.name?e.name:e.id})));let l=class extends n.LitElement{constructor(){super(...arguments),this._schema=[{name:"title",selector:{text:{}}},{name:"area",selector:{area:{}}},{name:"identifier",selector:{text:{}}},{name:"enabled_columns",selector:{select:{multiple:!0,mode:"list",options:s}}},{name:"search_enabled",selector:{boolean:{}}},{name:"search_placeholder",selector:{text:{}}},{name:"multiselect_enabled",selector:{boolean:{}}},{name:"filter_enabled",selector:{boolean:{}}},{name:"add_plant_enabled",selector:{boolean:{}}},{name:"add_plant_position",selector:{select:{mode:"dropdown",options:[{value:"top",label:"Oben"},{value:"bottom",label:"Unten"}]}}}],this._computeLabel=e=>{var t;return null!==(t={title:"Titel",area:"Area-Filter",identifier:"Identifier (für Plant-/Area-Card-Verkn.)",enabled_columns:"Sichtbare Spalten",search_enabled:"Suche aktiviert",search_placeholder:"Suche-Placeholder",multiselect_enabled:"Multi-Select aktiviert",filter_enabled:"Filter aktiviert",add_plant_enabled:'"Pflanze hinzufügen" Button',add_plant_position:"Button-Position"}[e.name])&&void 0!==t?t:e.name}}setConfig(e){this._config=e}_toEditorData(){var e,t,i,a,n,o,r,s,l,d,c,h;const u=null!==(e=this._config)&&void 0!==e?e:{},p=u.show_columns?Object.entries(u.show_columns).filter((([,e])=>e)).map((([e])=>e)):[];return{title:u.title,area:u.area,identifier:u.identifier,enabled_columns:p,search_enabled:null===(i=null===(t=u.search)||void 0===t?void 0:t.enabled)||void 0===i||i,search_placeholder:null===(a=u.search)||void 0===a?void 0:a.placeholder,multiselect_enabled:null!==(o=null===(n=u.multiselect)||void 0===n?void 0:n.enabled)&&void 0!==o&&o,filter_enabled:null===(s=null===(r=u.filter)||void 0===r?void 0:r.enabled)||void 0===s||s,add_plant_enabled:null===(d=null===(l=u.add_plant)||void 0===l?void 0:l.enabled)||void 0===d||d,add_plant_position:null!==(h=null===(c=u.add_plant)||void 0===c?void 0:c.position)&&void 0!==h?h:"bottom"}}_fromEditorData(e){var t,i,a,n,o,r,s;const l={};for(const t of e.enabled_columns)l[t]=!0;return Object.assign(Object.assign({},this._config),{type:null!==(i=null===(t=this._config)||void 0===t?void 0:t.type)&&void 0!==i?i:"custom:brokkoli-list-card",title:e.title,area:e.area,identifier:e.identifier,show_columns:l,search:{enabled:e.search_enabled,placeholder:null!==(a=e.search_placeholder)&&void 0!==a?a:"Suche..."},multiselect:Object.assign(Object.assign({},null!==(o=null===(n=this._config)||void 0===n?void 0:n.multiselect)&&void 0!==o?o:{showbydefault:!1}),{enabled:e.multiselect_enabled}),filter:Object.assign(Object.assign({},null!==(s=null===(r=this._config)||void 0===r?void 0:r.filter)&&void 0!==s?s:{showbydefault:!1}),{enabled:e.filter_enabled}),add_plant:{enabled:e.add_plant_enabled,position:e.add_plant_position}})}render(){return this.hass&&this._config?n.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._toEditorData()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:n.html``}_valueChanged(e){(0,r.fireEvent)(this,"config-changed",{config:this._fromEditorData(e.detail.value)})}static get styles(){return n.css`ha-form { display: block; }`}};t.BrokkoliListCardEditor=l,a([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),a([(0,o.state)()],l.prototype,"_config",void 0),t.BrokkoliListCardEditor=l=a([(0,o.customElement)("brokkoli-list-card-editor")],l)},1536:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliSensorAssignmentCardEditor=void 0;const n=i(4437),o=i(2924),r=i(4356);let s=class extends n.LitElement{constructor(){super(...arguments),this._computeLabel=e=>{var t;return null!==(t={title:"Titel",height:"Höhe (z.B. 600px oder 70vh — leer = automatisch)",view:"Startansicht der Pflanzen",plant_phases:"Sichtbare Wachstumsphasen (leer = alle außer Entfernt)",plant_areas:"Sichtbare Räume (leer = alle)"}[e.name])&&void 0!==t?t:e.name}}setConfig(e){this._config=e}get _schema(){return[{name:"title",selector:{text:{}}},{name:"height",selector:{text:{}}},{name:"view",selector:{select:{mode:"dropdown",options:[{value:"flower",label:"Blüte"},{value:"list",label:"Liste"}]}}},{name:"plant_phases",selector:{select:{multiple:!0,mode:"list",options:[{value:"seeds",label:"Samen"},{value:"germination",label:"Keimen"},{value:"rooting",label:"Wurzeln"},{value:"growing",label:"Wachstum"},{value:"flowering",label:"Blüte"},{value:"harvested",label:"Geerntet"},{value:"removed",label:"Entfernt"}]}}},{name:"plant_areas",selector:{area:{multiple:!0}}}]}render(){return this.hass&&this._config?n.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:n.html``}_valueChanged(e){(0,r.fireEvent)(this,"config-changed",{config:e.detail.value})}static get styles(){return n.css`ha-form { display: block; }`}};t.BrokkoliSensorAssignmentCardEditor=s,a([(0,o.property)({attribute:!1})],s.prototype,"hass",void 0),a([(0,o.state)()],s.prototype,"_config",void 0),t.BrokkoliSensorAssignmentCardEditor=s=a([(0,o.customElement)("brokkoli-sensor-assignment-card-editor")],s)},6800:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.style=void 0;const a=i(4437);t.style=a.css`
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

  /* .tooltip ist positioniert und hat einen z-index -- damit oeffnet es einen
     eigenen Stapelkontext, und die 99999 des .tip zaehlen nur INNERHALB davon.
     Nach aussen galt die 2 der Kachel, also lag der Tooltip unter Menue-Button
     (3), Flyout (10) und Dropdown (100) und sah abgeschnitten aus. Angehoben
     wird nur beim Hovern: im Ruhezustand bleiben die Balken unter einem
     geoeffneten Menue. */
  .tooltip:hover {
    z-index: 500;
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

  /* Bearbeiten-Leiste des Info-Bereichs */
  /* Sitzt in der oberen rechten Ecke des Rasters statt in einer eigenen Zelle --
     als Zelle nahm der Stift den Platz des ersten Feldes ein. */
  .details-actions {
    position: absolute;
    top: 0;
    right: 8px;
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .details-actions ha-icon {
    cursor: pointer;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .details-actions ha-icon:hover {
    opacity: 1;
  }

  .detail-edit {
    width: 100%;
    box-sizing: border-box;
    padding: 4px 6px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: inherit;
    resize: vertical;
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

  /* Die Attribut-Balken bringen keine eigene Scrollflaeche mit, ihre Tooltips
     ragen aber nach oben aus dem Container heraus. Mit overflow-x: hidden bzw.
     overflow-y: auto schnitt der Container sie ab -- kein z-index der Welt
     hilft dagegen, geclippt ist geclippt. */
  .expanded-content[data-section="attributes"],
  .expanded-content.show[data-section="attributes"] {
    overflow: visible;
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
    position: relative;
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
`},3073:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.positionStyles=void 0;const a=i(4437);t.positionStyles=a.css`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    /* Default-Größe für Sections-View ohne grid_options. Wenn der User
       grid_options:rows setzt, gewinnt height:100% über den Parent;
       wenn nicht (Parent kollabiert), zieht min-height die Card auf. */
    min-height: 300px;
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
  
  .grid-background, .grid-svg, .members, .name-layer, .cycle-layer {
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
  
  /* The whole grid lives in ONE svg. Every cell used to be its own absolutely
     positioned <svg> carrying a drop-shadow filter -- a hundred filtered
     layers the compositor repainted on every re-render, for a shadow at 5%
     alpha nobody can see. */
  .grid-svg {
    pointer-events: none;
    overflow: visible;
  }
  
  .grid-cell {
    fill: transparent;
    stroke: var(--divider-color, #e0e0e0);
    stroke-width: 0.8;
    stroke-opacity: 0.4;
  }
  
  .grid-cell.highlight {
    stroke: var(--primary-color, #3498db);
    stroke-width: 2.5;
    stroke-opacity: 1;
    stroke-dasharray: 5 3;
    animation: cell-pulse 1.5s infinite alternate;
  }
  
  .grid-cell.add-indicator {
    stroke: var(--accent-color, #f3a95e);
    stroke-width: 2.5;
    stroke-opacity: 1;
    animation: cell-pulse 1.5s infinite alternate;
  }
  
  .plus-icon {
    cursor: pointer;
    pointer-events: auto;
  }
  
  /* Opacity only: the old keyframes also animated border-width, which the
     <svg> box never had, so every frame cost a layout pass for nothing. */
  @keyframes cell-pulse {
    from { opacity: 0.4; }
    to { opacity: 1; }
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
    cursor: pointer;
    width: calc(var(--cell-size) * 1.1);
    height: calc(var(--cell-size) * 1.1);
  }
  
  .container.edit-mode .member { cursor: move; }
  
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
  
  /* An alarm ring used to animate stroke-width and filter: brightness().
     Both force a repaint of the ring layer on every single frame, times the
     number of plants in alarm -- that is what made the browser sweat. Opacity
     composites instead: the layer is painted once and only re-blended. The
     extra weight is now a static stroke-width, not an animated one. */
  @keyframes sensor-pulse {
    from { opacity: 0.35; }
    to { opacity: 1; }
  }
  
  .sensor-pulsating,
  .pulsating {
    animation: sensor-pulse 1s infinite alternate ease-in-out;
    will-change: opacity;
  }
  
  .sensor-ring-fg.sensor-pulsating,
  .sensor-ring-fg.pulsating {
    stroke-width: 6px;
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
  
  /* Outside edit mode a badge is a shortcut to its own sensor's more-info
     dialog, so it has to catch clicks even though the stack around it does
     not. In edit mode it stays transparent to the mouse: a drag that starts
     on a badge must reach the plant underneath. */
  .container:not(.edit-mode) .sensor-label {
    pointer-events: auto;
    cursor: pointer;
  }
  
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
    font-weight: bold;
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
  
  /* Stammdaten-Badge: steht an der Stelle, an der sonst der Name sitzt.
     Ist es sichtbar, rückt der Name eine Badge-Höhe nach oben. */
  .entity-strain {
    position: absolute;
    left: 50%;
    top: calc(95%);
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: bold;
    max-width: 140%;
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
    transition: opacity 0.2s ease, box-shadow 0.2s ease;
    z-index: 4;
  }

  .entity-name.shifted {
    top: calc(95% - 26px);
  }

  /* Hovering used to be tracked in a reactive state, so moving the mouse
     across the room re-rendered every plant, ring and label. CSS knows who is
     hovered without asking Lit. */
  .entity-strain.dragging,
  .member-wrapper:hover .entity-strain {
    opacity: 1;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  .entity-name.dragging,
  .member-wrapper:hover .entity-name {
    opacity: 1;
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  /* The hovered plant has to win over its neighbours' inline z-index, which
     is why this needs !important -- --z-index is what render() wrote there. */
  .member-wrapper:hover {
    z-index: calc(var(--z-index, 1) + 2) !important;
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
  
  /* Outside edit mode the label does not select anything, so it must not
     advertise that it would. */
  .clickable-cycle-label.static {
    cursor: default;
  }
  
  .clickable-cycle-label.static:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    filter: none;
    transform: translateX(-50%);
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
  
  /* Growing is the alarm signal. Fading while it grows is not: the badge is
     asking to be read at exactly the moment it turns see-through. A pulsating
     badge therefore sits at full opacity and only scales. */
  .sensor-label.sensor-pulsating {
    animation: label-pulse 1s infinite alternate ease-in-out;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    opacity: 1;
    will-change: transform;
  }
  
  /* transform is the one property the compositor can animate without
     repainting anything. The box-shadow that used to grow along with the
     scale is now a static, already-strong shadow. */
  @keyframes label-pulse {
    from { transform: scale(1); }
    to { transform: scale(1.15); }
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
  
  /* Edit-mode toggle. Deliberately built to match the collapsed legend next
     to it -- same 40px shell, same 28px circle -- so the two read as a pair. */
  .edit-toggle-container {
    position: absolute;
    top: 10px;
    z-index: 10;
    width: 40px;
    background-color: var(--card-background-color, #fff);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .edit-toggle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--secondary-background-color, #f5f5f5);
    color: var(--secondary-text-color);
    border: none;
    margin: 4px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  
  .edit-toggle ha-icon {
    --mdc-icon-size: 18px;
  }
  
  .edit-toggle:hover { transform: scale(1.05); }
  
  .edit-toggle.active {
    background-color: var(--accent-color, #f3a95e);
    color: white;
  }
  
  /* A card scrolled out of view still burns frames on its alarm animations.
     The IntersectionObserver in brokkoli-area sets this attribute; the
     animations keep their state and resume where they left off. */
  :host([data-offscreen]) * {
    animation-play-state: paused !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .grid-cell.highlight,
    .grid-cell.add-indicator,
    .sensor-pulsating,
    .pulsating,
    .sensor-label.sensor-pulsating {
      animation: none;
    }
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
`},1772:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flowerListStyle=void 0;const a=i(4437);t.flowerListStyle=a.css`
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

  /* Sammelaktionen bei aktiver Mehrfachauswahl */
  .bulk-actions {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
  }

  .bulk-trigger {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .bulk-trigger:hover {
    opacity: 1;
  }

  .bulk-menu {
    position: absolute;
    right: 16px;
    top: 100%;
    background: var(--card-background-color, #fff);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    min-width: 200px;
    padding: 4px 0;
    z-index: 20;
  }

  .bulk-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    cursor: pointer;
    white-space: nowrap;
  }

  .bulk-item:hover {
    background: var(--secondary-background-color, #f0f0f0);
  }

  .bulk-item.danger {
    color: var(--error-color, #db4437);
  }

  .actions-column,
  .actions-cell {
    width: 40px;
    text-align: center;
  }
`},2075:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.style=void 0;const a=i(4437);t.style=a.css`
    /* ===================================
     * Consumption Grid Layout
     * =================================== */
    .consumption-data {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-auto-rows: 1fr;
        gap: 4px;
        width: 90%;
        margin: 8px auto;
    }

    /* ===================================
     * Consumption Item Styles
     * =================================== */
    .consumption-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 4px;
        background: var(--card-background-color, var(--ha-card-background));
        cursor: pointer;
        transition: background-color 0.3s ease;
        min-width: 0;
        box-sizing: border-box;
    }

    .consumption-item:hover {
        background: var(--primary-background-color);
    }

    /* Large Item (Energiekosten) — spans column 3 across both rows */
    .consumption-item.large {
        grid-column: 3;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 12px;
        height: 100%;
        box-sizing: border-box;
    }

    /* ===================================
     * Icon Styles
     * =================================== */
    .consumption-item ha-icon {
        color: var(--primary-text-color);
        opacity: 0.7;
        width: 20px;
        height: 20px;
    }

    .consumption-item.large ha-icon {
        width: 48px;
        height: 48px;
        --mdc-icon-size: 48px;
    }

    /* ===================================
     * Consumption Details Text Styles
     * =================================== */
    .consumption-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
    }

    /* Large Details (Energiekosten) */
    .consumption-details.large {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    /* Text Sizes */
    .consumption-details .label {
        font-size: 0.7em;
        color: var(--primary-text-color);
        opacity: 0.7;
    }

    .consumption-details .value {
        font-size: 0.8em;
        font-weight: bold;
    }

    .consumption-value {
        display: inline-block;
    }

    .consumption-item.animate ha-icon,
    .consumption-item.animate .label,
    .consumption-item.animate .value {
        animation: value-change 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes value-change {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .consumption-details.large .label {
        font-size: 0.9em;
    }

    .consumption-details.large .value {
        font-size: 1.6em;
        font-weight: bold;
    }

    /* ===================================
     * Consumption Charts Container
     * =================================== */
    .consumption-charts-container {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    /* ===================================
     * Pie Chart Container
     * =================================== */
    .pie-chart-container {
        width: 100%;
        max-width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 0;
        background: var(--card-background-color, var(--ha-card-background));
        border-radius: 4px;
        padding: 16px;
    }

    .pie-chart {
        width: 100%;
        min-width: 0;
    }
`},9582:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dialogStyles=void 0;const a=i(4437);t.dialogStyles=a.css`
    /* Das Flyout-Menue der Area-Card setzt auf seinem :host pointer-events: none
       und schaltet sie nur fuer die eigenen Elemente wieder an. Ein Dialog, der
       darin gerendert wird, erbt das und ist unbedienbar: sichtbar, aber kein
       Klick kommt an -- kein Fehler, kein Klon. Jeder Dialog holt sie sich hier
       selbst zurueck, unabhaengig davon, wer ihn einbettet. */
    :host {
        pointer-events: auto;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }

    .dialog {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        width: 90%;
        max-width: 420px;
        max-height: 85vh;
        overflow-y: auto;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .header h2 {
        margin: 0;
        font-size: 1.1rem;
    }

    .close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
    }

    form, .body {
        padding: 16px;
    }

    .field {
        margin-bottom: 12px;
    }

    label {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
        font-size: 0.9rem;
    }

    label ha-icon {
        --mdc-icon-size: 18px;
        opacity: 0.7;
    }

    input, select {
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 1rem;
    }

    .names {
        margin: 0;
        font-weight: 500;
        overflow-wrap: anywhere;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
    }

    .actions button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    .primary {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
    }

    .secondary {
        background: var(--secondary-background-color, #e0e0e0);
        color: var(--primary-text-color);
    }

    .danger {
        background: var(--error-color, #db4437);
        color: var(--text-primary-color, #fff);
    }
`},364:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.galleryStyles=void 0;const a=i(4437);t.galleryStyles=a.css`
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
`},1334:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.graphStyles=void 0;const a=i(4437);t.graphStyles=a.css`
    .graph-container {
        width: calc(100% +20px);
        margin: 0px -10px 0px -10px !important;
        padding: 0 !important;
        background: var(--ha-card-background, var(--card-background-color, white));
        border-radius: var(--ha-card-border-radius, 4px);
        position: relative;
    }

    .apexcharts-legend {
        width: 9.5% !important;
        overflow: hidden;
    }

    .date-picker-container {
        position: absolute;
        top: 2px;
        right: 125px;
        z-index: 3;
    }

    #date-picker {
        background: var(--ha-card-background, var(--card-background-color, white));
        border: 0px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 10px;
        color: var(--primary-text-color);
        cursor: pointer;
        width: 160px;
        text-align: right;
    }

    #date-picker:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    /* Flatpickr Anpassungen */
    .flatpickr-calendar {
        background: var(--ha-card-background, var(--card-background-color, white)) !important;
        border: 1px solid var(--divider-color, #e0e0e0) !important;
        border-radius: var(--ha-card-border-radius, 4px) !important;
        box-shadow: var(--ha-card-box-shadow, none) !important;
    }

    .flatpickr-day {
        color: var(--primary-text-color) !important;
    }

    .flatpickr-day.selected {
        background: var(--primary-color) !important;
        border-color: var(--primary-color) !important;
        color: var(--text-primary-color) !important;
    }

    .flatpickr-day.inRange {
        background: var(--primary-color) !important;
        opacity: 0.5;
        border-color: var(--primary-color) !important;
        color: var(--text-primary-color) !important;
    }

    .flatpickr-current-month,
    .flatpickr-weekday {
        color: var(--primary-text-color) !important;
    }

    .flatpickr-time input {
        color: var(--primary-text-color) !important;
    }

    /* Custom Legend Styles */
    .custom-legend {
        display: flex;
        align-items: left;
        flex-direction: column;
        position: absolute;
        top: 24px;
        right: 10px;
        background: var(--ha-card-background, var(--card-background-color, white));
        padding: 0px;
        border-radius: 4px;
        font-size: 11px;
        gap: 0px;
        width: 9%;
        overflow: hidden;
    }

    .legend-item {
        display: flex;
        align-items: left;
        gap: 6px;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        padding: 0px;
    }

    .legend-item.inactive {
        opacity: 0.5;
    }

    .legend-marker {
        width: 14px;
        height: 14px;
        --mdc-icon-size: 20px;
    }

    .legend-text {
        padding-top: 1px;
        color: var(--primary-text-color);
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Farben für die Legend-Marker */
    .legend-item:nth-child(1) .legend-marker { color: #2E93fA; }  /* Temperatur */
    .legend-item:nth-child(2) .legend-marker { color: #00D2FF; }  /* Leitfähigkeit */
    .legend-item:nth-child(3) .legend-marker { color: #FFB900; }  /* DLI */
    .legend-item:nth-child(4) .legend-marker { color: #FF4560; }  /* Gesundheit */
    .legend-item:nth-child(5) .legend-marker { color: #775DD0; }  /* Wasserverbrauch */
    .legend-item:nth-child(6) .legend-marker { color: #00D2FF; }  /* Leitfähigkeitsverbrauch */
    .legend-item:nth-child(7) .legend-marker { color: #FEB019; }  /* Stromverbrauch */
    .legend-item:nth-child(8) .legend-marker { color: #00E396; }  /* Feuchtigkeit */
    .legend-item:nth-child(9) .legend-marker { color: #CED4DC; }  /* Beleuchtung */
    .legend-item:nth-child(10) .legend-marker { color: #008FFB; } /* Luftfeuchtigkeit */

    /* Scrollbar-Styling */
    .custom-legend::-webkit-scrollbar {
        width: 4px;
    }

    .custom-legend::-webkit-scrollbar-thumb {
        background: var(--divider-color, #e0e0e0);
        border-radius: 2px;
    }

    .custom-legend::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-text-color);
    }

    /* Tooltip Styles */
    .tooltip-container {
        background: var(--ha-card-background, var(--card-background-color, white));
        padding: 0;
        border: 1px solid var(--divider-color, #e0e0e0);
        box-shadow: 2px 2px 6px -4px #999;
        border-radius: 8px;
    }

    .tooltip-header {
        font-weight: normal;
        font-size: 11px;
        background: var(--primary-color);
        color: var(--text-primary-color);
        padding: 6px 8px;
        border-radius: 8px 8px 0 0;
        margin-bottom: 4px;
        margin-top: 0px;
    }

    .tooltip-header strong {
        font-weight: bold;
    }

    .tooltip-content {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 0 12px;
        align-items: center;
        font-size: 10px;
        padding: 8px;
        line-height: 1.2;
    }

    .tooltip-sensor-name {
        margin: 0;
    }

    .tooltip-range {
        margin: 0;
    }

    .tooltip-mean {
        font-weight: bold;
        margin: 0;
    }

    .tooltip-error {
        background: var(--ha-card-background, var(--card-background-color, white));
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
    }

    /* Grow Phases Container */
    .grow-phases-container {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px;
        padding: 10px;
        background: var(--ha-card-background, var(--card-background-color, white));
        border-radius: var(--ha-card-border-radius, 4px);
    }

    /* Vertical Timeline */
    .vertical-timeline {
        flex: 0 0 200px;
        position: relative;
        padding-right: 20px;
    }

    .timeline-line {
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--primary-color);
    }

    .phase-item {
        position: relative;
        margin: 20px 0;
        padding-left: 40px;
    }

    .phase-dot {
        position: absolute;
        left: 11px;
        width: 10px;
        height: 10px;
        background: var(--primary-color);
        border-radius: 50%;
    }

    .phase-content {
        font-size: 0.9em;
    }

    .phase-name {
        font-weight: bold;
        color: var(--primary-text-color);
    }

    .phase-date {
        font-size: 0.8em;
        color: var(--secondary-text-color);
    }

    /* Pie Chart Container */
    .pie-chart-container {
        flex: 0 0 300px;
        height: 300px;
    }
`},4302:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.historyStyles=void 0;const a=i(4437);t.historyStyles=a.css`
    /* ===================================
     * History Container
     * =================================== */
    .history-container {
        margin-top: 16px;
        background: var(--card-background-color, var(--ha-card-background));
        border-radius: 4px;
        overflow: hidden;
        padding: 16px;
    }

    /* ===================================
     * Vertical Timeline
     * =================================== */
    .vertical-timeline {
        position: relative;
        padding: 16px 0;
        margin-left: 8px;
        min-width: 0;
    }

    /* Timeline Line */
    .timeline-line {
        position: absolute;
        left: 8px;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: var(--primary-color);
        opacity: 0.5;
    }

    /* Timeline Items */
    .phase-item {
        position: relative;
        margin: 6px 0;
        padding-left: 32px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    /* Growth Phases haben mehr vertikalen Abstand */
    .phase-item.milestone {
        margin: 16px 0;
    }

    .phase-item:hover {
        padding-left: 34px;
    }

    .phase-dot {
        position: absolute;
        left: 1px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-color: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
    }

    /* Größere Punkte für Growth Phases */
    .phase-dot.milestone {
        width: 26px;
        height: 26px;
        left: -6px;
        border: 2px solid white;
    }

    .phase-item:hover .phase-dot {
        transform: translateY(-50%) scale(1.1);
    }

    .dot-icon {
        color: white;
        --mdc-icon-size: 14px;
        opacity: 0.9;
    }

    /* Größere Icons für Growth Phases */
    .milestone .dot-icon {
        --mdc-icon-size: 20px;
    }

    .phase-content {
        background: var(--card-background-color, var(--ha-card-background));
        padding: 8px 12px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        transition: box-shadow 0.2s ease;
    }

    /* Kompaktere Inhalte für normale Events */
    .phase-item:not(.milestone) .phase-content {
        padding: 6px 10px;
    }

    /* Hervorgehobene Inhalte für Growth Phases */
    .phase-content.milestone {
        padding: 10px 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        background: linear-gradient(to right, 
            var(--milestone-color, rgba(0,0,0,0.05)) 0%, 
            color-mix(in srgb, var(--milestone-color, rgba(0,0,0,0.05)) 50%, var(--card-background-color, var(--ha-card-background))) 10%, 
            var(--card-background-color, var(--ha-card-background)) 25%);
        background-blend-mode: overlay;
    }

    .phase-item:hover .phase-content {
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .phase-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }

    .phase-name {
        font-weight: bold;
        font-size: 0.9em;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
    }

    /* Größere Schrift für Growth Phases */
    .milestone .phase-name {
        font-size: 1.05em;
    }

    .phase-date {
        font-size: 0.8em;
        color: var(--secondary-text-color);
        margin-top: 0px;
    }

    /* Journal Container mit Animation */
    .journal-container {
        position: relative;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease-out, opacity 0.3s ease-out, margin-top 0.3s ease-out;
        opacity: 0;
        margin-top: 0;
        will-change: height, opacity, margin-top;
    }

    .journal-container.expanded {
        height: auto;
        opacity: 1;
        margin-top: 8px;
    }

    .journal-container.closing {
        height: 0 !important;
        opacity: 0;
        margin-top: 0;
        pointer-events: none;
    }

    .phase-description {
        font-size: 0.85em;
        color: var(--primary-text-color);
        opacity: 0.8;
        white-space: pre-wrap;
        word-break: break-word;
    }

    /* ===================================
     * Rechte Timeline Styles
     * =================================== */
    .vertical-timeline.timeline-right {
        margin-left: 0;
        margin-right: 8px;
    }

    .vertical-timeline.timeline-right .timeline-line {
        left: auto;
        right: 8px;
    }

    .vertical-timeline.timeline-right .phase-item {
        padding-left: 0;
        padding-right: 32px;
    }

    .vertical-timeline.timeline-right .phase-item:hover {
        padding-left: 0;
        padding-right: 34px;
    }

    .vertical-timeline.timeline-right .phase-dot {
        left: auto;
        right: 1px;
    }

    .vertical-timeline.timeline-right .phase-dot.milestone {
        left: auto;
        right: -6px;
    }

    .vertical-timeline.timeline-right .phase-content.milestone {
        background: linear-gradient(to left, 
            var(--milestone-color, rgba(0,0,0,0.05)) 0%, 
            color-mix(in srgb, var(--milestone-color, rgba(0,0,0,0.05)) 50%, var(--card-background-color, var(--ha-card-background))) 10%, 
            var(--card-background-color, var(--ha-card-background)) 25%);
    }

    /* ===================================
     * Add Entry Styles
     * =================================== */
    .phase-item.add-item {
        margin-bottom: 4px;
        margin-top: 2px;
    }

    .phase-dot.add-dot {
        width: 18px;
        height: 18px;
        left: -2px;
        border: 2px solid var(--card-background-color, var(--ha-card-background));
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    .vertical-timeline.timeline-right .phase-dot.add-dot {
        left: auto;
        right: -2px;
    }

    .add-dot .dot-icon {
        --mdc-icon-size: 12px;
    }

    .phase-content.add-content {
        background: var(--card-background-color, var(--ha-card-background));
        transition: box-shadow 0.3s ease;
        padding: 2px 8px;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    .phase-item.add-item:hover .phase-content.add-content {
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    }

    /* ===================================
     * Neue Animationen für Add Menu
     * =================================== */
    .add-menu-container {
        position: relative;
        overflow: hidden;
        transition: height 0.4s ease-out;
        height: 0;
    }

    .add-menu-container.expanded {
        height: auto;
    }

    /* Add Menu Options */
    .add-menu-options {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 4px 0;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    }

    .add-menu-options.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .add-option {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 6px;
        border-radius: 4px;
        background-color: var(--card-background-color, var(--ha-card-background));
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s, opacity 0.3s, margin-top 0.3s;
        opacity: 1;
    }

    .add-option:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    .add-option.fade-out {
        opacity: 0;
        margin-top: -30px;
        pointer-events: none;
    }

    .add-option.selected {
        opacity: 1;
        transform: translateY(0);
        margin-top: 0;
        position: relative;
        z-index: 2;
        transition: transform 0.4s ease-out, margin-top 0.4s ease-out;
    }

    .add-option.move-to-header {
        transform: translateY(-100%);
        margin-top: -8px;
        border-radius: 4px 4px 0 0;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
    }

    .option-icon {
        --mdc-icon-size: 14px;
        margin-right: 8px;
    }

    .add-option span {
        font-size: 0.8em;
        font-weight: 500;
    }

    /* Add Form Styles */
    .form-content {
        padding: 4px;
        background-color: var(--card-background-color, var(--ha-card-background));
        border-radius: 3px;
        width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }

    .form-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .form-field {
        margin-bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .form-field input,
    .form-field select,
    .form-field textarea {
        width: 100%;
        padding: 3px 5px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 3px;
        background-color: var(--card-background-color, var(--ha-card-background));
        font-size: 0.8em;
        box-sizing: border-box;
    }

    .form-field textarea {
        min-height: 30px;
        max-height: 80px;
        resize: vertical;
        box-sizing: border-box;
    }

    .form-field select {
        appearance: none;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,0.5)' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 5px center;
        padding-right: 25px;
        height: auto;
        min-height: 30px;
        cursor: pointer;
        z-index: 10;
        position: relative;
    }

    .form-field select option {
        padding: 5px;
        background-color: var(--card-background-color, var(--ha-card-background));
        color: var(--primary-text-color);
    }

    .form-field input:focus,
    .form-field select:focus,
    .form-field textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color);
    }

    .form-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 3px;
    }

    .success {
        color: var(--success-color, #4caf50);
    }

    .add-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }

    .add-header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .add-header-title {
        font-weight: bold;
        font-size: 0.9em;
        display: flex;
        align-items: center;
    }

    .add-header-title ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 16px;
    }

    .journal-submit {
        display: flex;
        justify-content: flex-end;
        margin-top: 4px;
        margin-bottom: 2px;
        margin-right: 2px;
    }

    .journal-submit ha-icon-button {
        --mdc-icon-button-size: 24px;
        --mdc-icon-size: 14px;
        color: white;
        background-color: var(--success-color, #4CAF50);
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        min-width: 24px;
        min-height: 24px;
        padding: 0;
    }

    .journal-submit ha-icon-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    }

    .journal-submit ha-icon-button[disabled] {
        color: rgba(255, 255, 255, 0.5);
        background-color: rgba(76, 175, 80, 0.5);
        box-shadow: none;
    }

    .phase-item.add-item .phase-header {
        margin-bottom: 0;
        padding: 2px 0;
    }

    .phase-item.add-item .phase-name {
        font-size: 0.85em;
    }

    ha-icon-button {
        --mdc-icon-button-size: 24px;
        --mdc-icon-size: 14px;
        color: var(--primary-color);
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        transition: all 0.2s ease;
    }

    ha-icon-button:hover {
        transform: translateY(-1px);
    }

    ha-icon-button[disabled] {
        color: var(--disabled-text-color);
        cursor: not-allowed;
    }

    ha-icon-button.success {
        color: var(--success-color, #4CAF50);
        animation: pulse 0.5s;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`},8621:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.legendStyles=void 0;const a=i(4437);t.legendStyles=a.css`
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
  
  /* Collapsed, the content area holds nothing but still contributed its 2px
     of padding top and bottom -- 4px below the button, 4px of margin above it,
     so the knob sat visibly off-centre in its box next to the edit toggle. */
  .legend-container.collapsed .content-container {
    display: none;
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
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
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
`},365:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.plantFlyoutMenuStyles=void 0;const a=i(4437);t.plantFlyoutMenuStyles=a.css`
  /* Das Menü wird als Geschwister des Card-Containers gerendert, und der Host
     der Area ist ein Flex-Container. Ohne eigene Positionierung wäre dieses
     Element ein Flex-Kind und erschiene unterhalb der Karte, obwohl seine
     Innereien mit position:fixed auf den Viewport ausgelegt sind. */
  :host {
    position: fixed;
    inset: 0;
    z-index: 1000;
    pointer-events: none;
  }

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
`},1294:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sensorAssignmentStyles=void 0;const a=i(4437);t.sensorAssignmentStyles=a.css`
  /* Ohne border-box zählt der Rand ZUSÄTZLICH zur angegebenen Breite. Alle
     Kreise hier werden über negative Margins bzw. transform auf ihren
     Mittelpunkt gesetzt (z.B. .sa-core: width 68, margin-left -34) — mit einem
     3px-Rand landet der Mittelpunkt dann 3px daneben. Genau das hat das
     Pflanzenbild gegenüber Blütenmitte und Namenspille verschoben. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Die Karte soll ihre in Lovelace eingestellte Höhe wirklich ausfüllen.
     Dafür muss die Höhe lückenlos durchgereicht werden — jedes Glied der Kette
     braucht height:100% bzw. flex:1 UND min-height:0, sonst wächst ein
     Flex-Kind auf seine Inhaltshöhe und der Scrollbereich landet nicht dort,
     wo er hingehört. */
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .sa-container {
    display: flex;
    flex: 1;
    min-height: 0;
    gap: 16px;
    padding: 4px 16px 12px;
  }

  .sa-column {
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
  }

  .sa-column-sources {
    position: relative;
    flex: 0 0 clamp(190px, 28%, 320px);
    border-right: 1px solid var(--divider-color, #e0e0e0);
    padding-right: 12px;
    border-radius: 10px;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
  }

  /* Gegenrichtung des Ziehens: ein Blatt, das hier landet, wird gelöst. */
  .sa-column-sources.sa-drop-active {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    box-shadow: inset 0 0 0 2px var(--error-color, #db4437);
  }

  /* Eigener Hintergrund, sonst liegt der Hinweis unlesbar auf der Liste. */
  .sa-drop-hint {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    padding: 5px 12px;
    border-radius: 999px;
    white-space: nowrap;
    background: var(--error-color, #db4437);
    color: #fff;
    font-size: 0.78em;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.15s ease;
    pointer-events: none;
  }

  .sa-drop-active .sa-drop-hint {
    opacity: 1;
  }

  .sa-column-garden {
    flex: 1 1 auto;
  }

  /* --- Werkzeugleiste (Suche + Typ-Filter) -------------------------------
     Liegt AUSSERHALB von .sa-scroll, damit sie beim Scrollen stehen bleibt. */
  .sa-toolbar {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px 4px 8px;
  }

  .sa-search {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
  }

  .sa-search > ha-icon {
    --mdc-icon-size: 17px;
    color: var(--secondary-text-color);
    flex: 0 0 auto;
  }

  .sa-search input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    padding: 7px 0;
    font-family: inherit;
    font-size: 0.9em;
    color: var(--primary-text-color);
  }

  /* Das native Kreuz von type=search doppelt unseren eigenen Knopf. */
  .sa-search input::-webkit-search-cancel-button {
    display: none;
  }

  .sa-icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    color: var(--secondary-text-color);
  }

  .sa-icon-button:hover:not(:disabled) {
    background: var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .sa-icon-button:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .sa-icon-button ha-icon {
    --mdc-icon-size: 15px;
  }

  /* Sieben Chips plus Reset müssen in eine schmale Spalte passen, ohne
     umzubrechen — sonst kostet die Leiste eine zweite Zeile Höhe. */
  .sa-type-filter {
    display: flex;
    align-items: center;
    gap: 3px;
    flex-wrap: nowrap;
  }

  /* Ungewählt: nur der farbige Umriss, damit die Leiste ruhig bleibt.
     Gewählt: gefüllt — der Filter ist dann sichtbar aktiv. */
  .sa-filter-chip {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    border: 1.5px solid var(--sa-filter-color);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.55;
    transition: opacity 0.12s ease, background-color 0.12s ease;
  }

  .sa-filter-chip ha-icon {
    --mdc-icon-size: 12px;
    color: var(--sa-filter-color);
  }

  .sa-filter-chip:hover {
    opacity: 1;
  }

  .sa-filter-chip.sa-filter-on {
    opacity: 1;
    background: var(--sa-filter-color);
  }

  .sa-filter-chip.sa-filter-on ha-icon {
    color: #fff;
  }

  .sa-filter-reset {
    margin-left: auto;
  }

  /* Überschreiben-Schalter. Steht bewusst kräftiger da als die Filter-Chips
     daneben: er ändert, ob eine bestehende Zuweisung ersetzt wird, und darf
     nicht übersehen werden. Eingeschaltet wird er zusätzlich gefüllt. */
  .sa-overwrite {
    flex: 0 0 auto;
    margin-left: 2px;
    color: var(--primary-text-color);
    border: 1.5px solid var(--divider-color, #ccc);
  }

  .sa-overwrite-on,
  .sa-overwrite-on:hover:not(:disabled) {
    background: var(--error-color, #db4437);
    border-color: var(--error-color, #db4437);
    color: #fff;
  }

  .sa-selection-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 10px;
    border-radius: 999px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 0.76em;
  }

  .sa-selection-bar span {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sa-selection-bar .sa-icon-button {
    color: #fff;
  }

  .sa-selection-bar .sa-icon-button:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  /* Genau EIN Scrollbereich pro Spalte — vorher hatte jede Sektion ihren
     eigenen Kasten mit fester max-height, was zu mehreren ineinander
     verschachtelten Scrollbalken und einer von der Kartenhöhe entkoppelten
     Innenhöhe führte. */
  .sa-scroll {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 4px;
  }

  .sa-section-title {
    position: sticky;
    top: 0;
    z-index: 5;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    padding: 8px 0 6px;
    margin-bottom: 6px;
    font-size: 0.78em;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .sa-section-title ~ .sa-section-title {
    margin-top: 14px;
  }

  /* --- Quellen (linke Spalte) --------------------------------------------
     Kompakte Listenzeilen statt großer Kacheln: die Spalte ist schmal und soll
     möglichst ohne Scrollen auskommen. touch-action: pan-y lässt vertikales
     Scrollen zu und gibt nur horizontale Gesten an das Drag-Handling weiter. */
  .sa-source {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 8px;
    border-radius: 10px;
    cursor: grab;
    user-select: none;
    touch-action: pan-y;
    transition: background-color 0.15s ease, opacity 0.15s ease;
  }

  .sa-source:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .sa-source-dragging {
    opacity: 0.35;
  }

  /* Feste Breite für die Symbolspalte, damit die Namen fluchten, obwohl
     Geräte-Kästchen und Entitäts-Punkte unterschiedlich groß sind. */
  .sa-source-avatar-slot {
    flex: 0 0 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sa-avatar {
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .sa-avatar-device {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    border: 2px solid var(--divider-color, #ccc);
  }

  .sa-source-used .sa-avatar-device {
    border-color: var(--primary-color, #03a9f4);
  }

  .sa-avatar-device ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }

  /* Bei einer Entität ist das Avatar selbst das farbige Typ-Symbol — und
     bleibt klein, in derselben Größe wie die Typ-Chips und die Icons am Stiel. */
  .sa-avatar-entity {
    border-radius: 50%;
    border: none;
  }

  .sa-source-avatar-slot .sa-avatar-entity {
    width: 26px;
    height: 26px;
  }

  .sa-avatar-entity ha-icon {
    --mdc-icon-size: 14px;
    color: #fff;
  }

  .sa-glyph {
    width: 24px;
    height: 24px;
    color: var(--secondary-text-color);
  }

  /* Das Avatar einer Entität ist gleichzeitig ihr Auswahlknopf — dieselbe
     Rolle, die bei Geräten die kleinen Chips haben. */
  .sa-avatar-button {
    flex: 0 0 auto;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .sa-avatar-button:hover {
    transform: scale(1.06);
  }

  .sa-avatar-selected {
    transform: scale(1.06);
    box-shadow:
      0 0 0 2px var(--ha-card-background, var(--card-background-color, #fff)),
      0 0 0 4px currentColor,
      0 1px 5px rgba(0, 0, 0, 0.3);
  }

  .sa-avatar-selected:hover {
    transform: scale(1.12);
  }

  .sa-source-body {
    flex: 1;
    min-width: 0;
  }

  .sa-source-name {
    font-size: 0.88em;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Etwas Luft nach oben/unten, damit die vergrößerten ausgewählten Chips
     nicht an der Zeile darüber kleben. */
  .sa-source-types {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    margin-top: 4px;
    min-height: 20px;
  }

  /* Anklickbar: wählt diesen einen Sensortyp der Quelle aus. Ausgewählte Typen
     werden größer und bekommen einen Ring — beim Ziehen wandern genau sie mit,
     über mehrere Quellen hinweg. */
  .sa-chip {
    width: 16px;
    height: 16px;
    padding: 0;
    border: 1.5px solid transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .sa-chip ha-icon {
    --mdc-icon-size: 10px;
    color: #fff;
  }

  .sa-chip:hover {
    transform: scale(1.15);
  }

  /* Nicht aktiv: nur der farbige Umriss. Der Typ bleibt sichtbar und lässt sich
     per Klick dazunehmen, geht beim Ziehen aber nicht mit. */
  .sa-chip-off ha-icon {
    color: currentColor;
  }

  .sa-chip-off {
    opacity: 0.75;
  }

  .sa-chip-off:hover {
    opacity: 1;
  }

  .sa-chip-selected {
    transform: scale(1.4);
    box-shadow:
      0 0 0 2px var(--ha-card-background, var(--card-background-color, #fff)),
      0 0 0 3.5px currentColor,
      0 1px 4px rgba(0, 0, 0, 0.35);
  }

  .sa-chip-selected:hover {
    transform: scale(1.5);
  }

  .sa-source-selected {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  /* --- Garten (rechte Spalte) --------------------------------------------
     Jede Pflanze ist eine "Blüte": Kern = Pflanze, Blätter = zugewiesene
     Quellen auf einer Umlaufbahn, farbige Typ-Icons sitzen auf dem Stiel
     dazwischen. Positionen werden pro Frame per transform gesetzt (Feder-
     Physik), das Layout hier gibt nur die Zellgröße und die Ankerpunkte vor. */
  .sa-garden {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    justify-items: center;
    /* Die Blätter laufen bis an den Zellrand, ihre Beschriftung ragt noch ein
       Stück darüber hinaus — ohne Zeilenabstand stößt sie an die Blüte darunter. */
    gap: 26px 4px;
  }

  .sa-flower {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sa-flower-canvas {
    position: relative;
    width: 290px;
    height: 290px;
    flex: 0 0 auto;
  }

  /* Einrast-Hinweis beim Ziehen — als Pseudo-Element, damit sich die
     Deckkraft animieren lässt, ohne die Farbe hart zu codieren. */
  .sa-flower-canvas::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, var(--primary-color, #03a9f4) 0%, transparent 62%);
    opacity: 0;
    transition: opacity 0.18s ease;
    pointer-events: none;
  }

  .sa-flower-snap .sa-flower-canvas::before {
    opacity: 0.22;
  }

  .sa-stems {
    position: absolute;
    inset: 0;
    overflow: visible;
    pointer-events: none;
    z-index: 1;
  }

  .sa-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 68px;
    height: 68px;
    margin: -34px 0 0 -34px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    border: 3px solid var(--divider-color, #ccc);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
    z-index: 3;
  }

  .sa-core ha-icon {
    --mdc-icon-size: 32px;
    color: var(--secondary-text-color);
  }

  /* Anker so gesetzt, dass ein transform von (0,0) den MITTELPUNKT der
     Blattkachel exakt auf die Blütenmitte legt — die Physik rechnet in
     Koordinaten relativ zum Zentrum. */
  .sa-leaf {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 84px;
    height: 44px;
    margin: -22px 0 0 -42px;
    z-index: 2;
    cursor: grab;
    user-select: none;
    touch-action: none;
    will-change: transform;
  }

  .sa-leaf-dragging {
    opacity: 0.3;
  }

  /* Über den Mittelpunkt positioniert statt über eine feste Größe: Geräte- und
     Entitäts-Blätter sind unterschiedlich groß, sitzen aber beide exakt auf
     dem Punkt, den die Feder-Physik ausrechnet. */
  .sa-leaf-avatar {
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .sa-leaf-avatar.sa-avatar-device {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 2px solid var(--divider-color, #ccc);
  }

  .sa-leaf-avatar .sa-glyph {
    width: 26px;
    height: 26px;
  }

  /* Eine Entität bleibt so klein wie die Typ-Icons am Stiel — sie ist
     dasselbe Element, nur am Ende des Stiels statt darauf. */
  .sa-leaf-avatar.sa-avatar-entity {
    width: 24px;
    height: 24px;
  }

  .sa-leaf-avatar.sa-avatar-entity ha-icon {
    --mdc-icon-size: 13px;
  }

  /* Steht das Blatt oberhalb der Blütenmitte, wandert seine Beschriftung nach
     oben — sonst läge sie genau auf dem Stiel und den Typ-Icons darunter.
     Die Klasse setzt die Animationsschleife anhand der aktuellen Position. */
  .sa-leaf-name {
    position: absolute;
    left: 0;
    right: 0;
    top: 47px;
    font-size: 0.62em;
    line-height: 1.15;
    text-align: center;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  .sa-leaf-above .sa-leaf-name {
    top: auto;
    bottom: 47px;
  }

  /* Bei Entitäts-Blättern liegt die Beschriftung zunächst mittig auf dem
     Ankerpunkt; die Animationsschleife schiebt sie von dort radial nach außen
     (siehe _placeLeafName), weil der Punkt selbst auf dem inneren Ring sitzt.
     Schmaler und zweizeilig: ein waagerechtes Blatt hat auf seinem Ring nur
     rund 70px Platz bis zum Zellrand, eine einzeilige Beschriftung würde in
     die Nachbarblüte laufen. */
  .sa-leaf-entity .sa-leaf-name,
  .sa-leaf-entity.sa-leaf-above .sa-leaf-name {
    top: 22px;
    bottom: auto;
    left: 50%;
    right: auto;
    width: 64px;
    /* Kein margin-top: die senkrechte Zentrierung macht ein translateY(-50%)
       in _placeLeafName() — nur das stimmt für ein- UND mehrzeilige Texte. */
    margin: 0 0 0 -32px;
    font-size: 0.58em;
    line-height: 1.15;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .sa-type {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -12px;
    border-radius: 50%;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
    will-change: transform;
  }

  .sa-type ha-icon {
    --mdc-icon-size: 13px;
    color: #fff;
  }

  .sa-type:hover {
    filter: brightness(1.15);
  }

  /* Noch nicht belegter Typ: nur der farbige Umriss, gleiche Machart wie die
     Filter-Chips über der Quellenliste. So ist auch bei einer Pflanze ohne
     jede Zuweisung sichtbar, welche Messwerte sie aufnehmen kann. */
  .sa-type-open {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-width: 1.5px;
    cursor: default;
    box-shadow: none;
    opacity: 0.5;
    z-index: 3;
  }

  .sa-type-open ha-icon {
    color: currentColor;
  }

  .sa-type-open:hover {
    opacity: 0.85;
    filter: none;
  }

  /* Namenspille direkt am unteren Rand des Pflanzenbildes — gleiche Machart
     wie .entity-name in der Area-Card (Pille mit Kartenhintergrund, leicht
     über den Bildrand geschoben), damit beide Karten gleich aussehen. */
  .sa-flower-name {
    position: absolute;
    left: 50%;
    top: calc(50% + 26px);
    transform: translateX(-50%);
    z-index: 5;
    max-width: 150px;
    padding: 1px 7px;
    border-radius: 10px;
    background-color: var(--ha-card-background, var(--card-background-color, #fff));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
    opacity: 0.92;
    font-size: 0.8em;
    text-align: center;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  /* Stammdaten unter dem Namen. Bewusst NICHT fett -- der Name ist es hier
     auch nicht, anders als in der Area-Card. */
  .sa-flower-strain {
    position: absolute;
    left: 50%;
    top: calc(50% + 45px);
    transform: translateX(-50%);
    z-index: 5;
    max-width: 170px;
    padding: 1px 7px;
    border-radius: 10px;
    background-color: var(--ha-card-background, var(--card-background-color, #fff));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
    opacity: 0.92;
    font-size: 0.8em;
    text-align: center;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  .sa-row-strain {
    font-size: 0.78em;
    text-align: center;
    color: var(--primary-text-color);
    max-width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* --- Listenansicht ------------------------------------------------------
     Pflanze links, darunter ihr Name; rechts je Sensortyp eine Zeile. Typen
     derselben Quelle stehen zusammen und laufen über geschwungene Verbinder
     auf EINE Quellenkachel zu — dieselbe Aussage wie die Stiele der Blüte. */
  .sa-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sa-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 8px 12px;
    border-radius: 12px;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
  }

  /* Sanfte Trennung statt Rahmen: eine Linie, die zu beiden Enden ausläuft und
     den Rand gar nicht erst erreicht. */
  .sa-row + .sa-row::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 12%;
    right: 12%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--divider-color, #d0d0d0) 25%,
      var(--divider-color, #d0d0d0) 75%,
      transparent
    );
    pointer-events: none;
  }

  .sa-row-snap::before {
    opacity: 0;
  }

  .sa-row-snap {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    box-shadow: inset 0 0 0 2px var(--primary-color, #03a9f4);
  }

  .sa-row-plant {
    flex: 0 0 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  /* In der Zeile steht das Pflanzensymbol im Fluss, nicht absolut zentriert
     wie im Blüten-Canvas. */
  .sa-row-plant .sa-core {
    position: static;
    margin: 0;
    flex: 0 0 auto;
  }

  .sa-row-name {
    font-size: 0.78em;
    font-weight: 500;
    text-align: center;
    color: var(--primary-text-color);
    max-width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Der Abstand macht die Gruppierung: 2px zwischen Typen derselben Quelle
     (steckt in LIST_STEP), 14px zwischen zwei Quellen. Deshalb braucht es
     keine gezeichneten Verbinder — genau wie in der Blüte. */
  .sa-row-groups {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sa-group {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .sa-group-types {
    position: relative;
    flex: 0 0 24px;
    align-self: stretch;
  }

  /* Im Listenlayout sitzen die Typ-Icons an festen Zeilenhöhen statt auf einer
     Umlaufbahn — die Positionierung der Blüte muss hier zurückgesetzt werden. */
  .sa-type-list {
    left: 0;
    margin: 0;
    transform: none;
    will-change: auto;
  }

  .sa-group-source {
    display: flex;
    align-items: center;
    gap: 8px;
    /* Feste Symbolspalte wie in der Quellenliste, damit die Namen fluchten —
       Gerätekachel und Entitätspunkt sind unterschiedlich breit. */
    min-width: 0;
    padding: 4px 10px 4px 4px;
    border-radius: 999px;
    cursor: grab;
    user-select: none;
    touch-action: none;
    transition: background-color 0.15s ease;
  }

  .sa-group-source:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .sa-group-source-name {
    font-size: 0.85em;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Ohne Kachel davor: auf dieselbe Höhe einrücken wie die Namen daneben. */
  .sa-group-source-empty {
    padding-left: 46px;
    font-size: 0.8em;
    font-style: italic;
    color: var(--secondary-text-color);
    cursor: default;
    opacity: 0.75;
  }

  .sa-group-source-empty:hover {
    background: transparent;
  }

  /* --- Phasenfilter --------------------------------------------------------
     Bewusst schlank gehalten: nur die sieben Wachstumsphasen als Umschalter,
     keine Nachbildung des Spaltenfilters der List-Card. */
  .sa-phase-filter {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 0 4px 6px;
  }

  /* Zwei Filterreihen untereinander — ein kurzes Wort davor sagt, wonach die
     jeweilige Reihe filtert. */
  .sa-filter-label {
    align-self: center;
    margin-right: 2px;
    font-size: 0.66em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
  }

  .sa-phase-chip {
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid var(--divider-color, #ccc);
    background: transparent;
    color: var(--secondary-text-color);
    font-family: inherit;
    font-size: 0.72em;
    cursor: pointer;
    transition: background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
  }

  .sa-phase-chip:hover {
    border-color: var(--primary-color, #03a9f4);
  }

  .sa-phase-chip.sa-phase-on {
    background: var(--primary-color, #03a9f4);
    border-color: var(--primary-color, #03a9f4);
    color: #fff;
  }

  /* --- Ansichtsumschalter -------------------------------------------------- */
  .sa-toolbar-garden {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .sa-toolbar-garden .sa-search {
    flex: 1;
    min-width: 0;
  }

  .sa-view-switch {
    flex: 0 0 auto;
    display: flex;
    gap: 2px;
    padding: 2px;
    border-radius: 999px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
  }

  .sa-view-switch button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 26px;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
    color: var(--secondary-text-color);
  }

  .sa-view-switch button ha-icon {
    --mdc-icon-size: 17px;
  }

  .sa-view-switch .sa-view-on {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-color, #03a9f4);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  }

  .sa-empty-hint {
    color: var(--secondary-text-color);
    font-style: italic;
    font-size: 0.9em;
    padding: 4px 0 8px;
  }

  @media (max-width: 700px) {
    .sa-container {
      flex-direction: column;
    }

    .sa-column-sources {
      flex: 0 0 38%;
      border-right: none;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      padding-right: 0;
      padding-bottom: 8px;
    }
  }
`},4911:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.timelineStyles=void 0;const a=i(4437);t.timelineStyles=a.css`
  /* ===== Timeline Container Styles ===== */
  .timeline-container {
    width: calc(100% - 40px);
    margin: 10px 20px 0px 20px;
    padding: 0;
    background: var(--card-background-color, #fff);
    display: flex;
    flex-direction: column;
  }

  .timeline {
    position: relative;
    width: 100%;
    height: 120px;
    margin: 4px 0;
  }

  /* Timeline Labels */
  .timeline-labels {
    position: relative;
    height: 20px;
    margin-bottom: 8px;
  }

  /* Gemeinsame Styles für Labels und Marker */
  .timeline-label,
  .timeline-marker {
    position: absolute;
    transform: translateX(-50%);
    font-size: 0.8em;
    color: white;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    line-height: 1.2em;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: var(--primary-color);
  }

  /* Label-spezifische Positionierung */
  .timeline-label {
    bottom: 0;
  }

  /* Marker-spezifische Positionierung */
  .timeline-marker {
    top: 0;
    font-size: 0.7em;
  }

  /* Offset-Klassen für Labels */
  .timeline-label.offset-up {
    transform: translateX(-50%) translateY(-100%);
  }

  .timeline-label.offset-up-2 {
    transform: translateX(-50%) translateY(-200%);
  }

  .timeline-label.offset-down {
    transform: translateX(-50%) translateY(0);
  }

  /* Offset-Klassen für Marker */
  .timeline-marker.offset-up {
    transform: translateX(-50%) translateY(0);
  }

  .timeline-marker.offset-down {
    transform: translateX(-50%) translateY(100%);
  }

  .timeline-marker.offset-down-2 {
    transform: translateX(-50%) translateY(200%);
  }

  /* Timeline Events */
  .timeline-events {
    position: relative;
    height: 34px;
    background: transparent;
    overflow: visible;
  }

  /* Aktuelle Zeit-Linie */
  .current-time-line {
    position: absolute;
    width: 1px;
    height: calc(100% + 8px);
    background-color: var(--secondary-text-color);
    top: -4px;
    z-index: 2;
  }

  /* Event-Styles */
  .timeline-event {
    position: absolute;
    min-width: 4px;
    height: 10px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    color: var(--text-primary-color);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* Spezielle Styles für Treatment und Image Events */
  .timeline-event.treatment,
  .timeline-event.image {
    position: absolute;
    width: 2px !important;
    height: calc(100% + 8px) !important;
    top: -4px !important;
    margin: 0 !important;
    z-index: 2;
  }

  /* Hover-Effekte für alle Elemente */
  .timeline-event:hover,
  .timeline-event[data-hovered],
  .timeline-label:hover,
  .timeline-marker:hover,
  .timeline-label[data-hovered],
  .timeline-marker[data-hovered],
  .timeline-label.hovered,
  .timeline-marker.hovered {
    filter: brightness(1.2);
    z-index: 10;
  }

  /* Nur für Fotos und Treatments den Größeneffekt */
  .timeline-event[data-scale-effect]:hover,
  .timeline-event[data-scale-effect][data-hovered] {
    transform: scaleX(2);
  }

  /* Timeline Markers Container */
  .timeline-markers {
    position: relative;
    height: 20px;
    margin-top: 8px;
  }

  /* Timeline Status */
  .timeline-status {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    bottom: 4px;
    z-index: 1;
  }

  .timeline-status-indicator {
    position: absolute;
    height: 100%;
  }

  .timeline-status-problem {
    background-color: var(--error-color, #db4437);
  }

  .timeline-status-unknown {
    background-color: var(--disabled-text-color, #bdbdbd);
  }
`},9130:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayType=void 0,function(e){e.Full="full",e.Compact="compact"}(i||(t.DisplayType=i={}))},3898:function(e,t){var i=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.apexChartsLaden=function(){return r||(r=function(){return i(this,void 0,void 0,(function*(){s();const e=window,t=e.ApexCharts,i="ApexCharts"in e,a=document.createElement("script");a.src=n,yield new Promise(((e,t)=>{a.onload=()=>e(),a.onerror=()=>t(new Error(`ApexCharts nicht ladbar: ${n}`)),document.head.appendChild(a)}));const o=e.ApexCharts;if(i?e.ApexCharts=t:delete e.ApexCharts,!o)throw new Error("ApexCharts geladen, aber kein Konstruktor hinterlegt");return o}))}().catch((e=>{throw r=void 0,e}))),r},t.apexStylesheetLaden=s;const a="4.4.0",n=`https://cdn.jsdelivr.net/npm/apexcharts@${a}/dist/apexcharts.min.js`,o=`https://cdn.jsdelivr.net/npm/apexcharts@${a}/dist/apexcharts.css`;let r;function s(){if(document.querySelector(`link[href="${o}"]`))return;const e=document.createElement("link");e.rel="stylesheet",e.href=o,document.head.appendChild(e)}},9429:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderAttributeChunks=t.getChunkedDisplayed=t.renderAttribute=t.renderAttributes=t.renderBattery=void 0;const a=i(9130),n=i(4437),o=i(6781),r=i(4139),s=i(2135),l=i(2413);t.renderBattery=e=>{if(!e.config.battery_sensor)return n.html``;const t=e._hass.states[e.config.battery_sensor];if(!t)return n.html``;const i=parseInt(t.state),{icon:a,color:o}=[{threshold:90,icon:"mdi:battery",color:"green"},{threshold:80,icon:"mdi:battery-90",color:"green"},{threshold:70,icon:"mdi:battery-80",color:"green"},{threshold:60,icon:"mdi:battery-70",color:"green"},{threshold:50,icon:"mdi:battery-60",color:"green"},{threshold:40,icon:"mdi:battery-50",color:"green"},{threshold:30,icon:"mdi:battery-40",color:"orange"},{threshold:20,icon:"mdi:battery-30",color:"orange"},{threshold:10,icon:"mdi:battery-20",color:"red"},{threshold:0,icon:"mdi:battery-10",color:"red"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline",color:"red"}].find((({threshold:e})=>i>e))||{icon:"mdi:battery-alert-variant-outline",color:"red"};return n.html`
        <div class="battery tooltip" @click="${t=>{t.stopPropagation(),(0,s.moreInfo)(e,e.config.battery_sensor)}}">
            <div class="tip">${i}%</div>
            <ha-icon .icon="${a}" style="color: ${o}"></ha-icon>
        </div>
    `};const d={dli:"illuminance",ppfd:"illuminance",water_consumption:"moisture",fertilizer_consumption:"conductivity"},c=(e,t)=>{var i,a,n,o,r,s,l;const c=null===(i=e.plantinfo)||void 0===i?void 0:i.result;if(!c)return!1;if("health"===t)return!0;const h="power_consumption"===t?null===(n=null===(a=c.diagnostic_sensors)||void 0===a?void 0:a.total_power_consumption)||void 0===n?void 0:n.entity_id:null===(r=c[null!==(o=d[t])&&void 0!==o?o:t])||void 0===r?void 0:r.sensor;return Boolean(h&&(null===(l=null===(s=e._hass.states[h])||void 0===s?void 0:s.attributes)||void 0===l?void 0:l.external_sensor))};t.renderAttributes=e=>{var i,a,n,o;const s={},l={},d={},h={},u={},p={},m={},_=e.config.show_bars||r.default_show_bars,g=e.selectedPlantEntity||(null===(i=e.config)||void 0===i?void 0:i.entity);if(!g||!e._hass.states[g])return[];if(e.plantinfo&&e.plantinfo.result){const t=e.plantinfo.result;for(const i of _)if(c(e,i)&&(t[i]||"health"===i&&(null===(a=t.helpers)||void 0===a?void 0:a.health))){let a,r,c,_,g,v;if("health"===i){if(!(null===(o=null===(n=t.helpers)||void 0===n?void 0:n.health)||void 0===o?void 0:o.entity_id))continue;const i=e._hass.states[t.helpers.health.entity_id];if(!i)continue;a=5,r=0,c=Number(i.state),_="mdi:heart-pulse",g=i.entity_id,v=""}else({max:a,min:r,current:c,icon:_,sensor:g,unit_of_measurement:v}=t[i]);a=Number(a),r=Number(r),_=String(_),g=String(g),c=Number(c),v=String(v);const f="health"===i?c.toString():e._hass.formatEntityState(e._hass.states[g]).replace(/[^\d,.]/g,"");h[`max_${i}`]={max:a,min:r},u[i]=c,s[i]=_,p[i]=g,d[i]=v,l[i]=v,"dli"===i&&(d.dli="mol/d⋅m²",l.dli='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>'),m[i]={name:i,current:c,limits:h[`max_${i}`],icon:_,sensor:g,unit_of_measurement:v,display_state:f}}}return(0,t.renderAttributeChunks)(e,m,_)},t.renderAttribute=(e,t)=>{var i;const{max:r,min:d}=t.limits,c=t.unit_of_measurement&&"null"!==t.unit_of_measurement?t.unit_of_measurement:"",h=t.icon||"mdi:help-circle-outline",u=t.current||0,p=!isNaN(u),m=t.display_state,_=(null===(i=e.config.full_width_bars)||void 0===i?void 0:i.includes(t.name))||!1,g=e.config.display_type===a.DisplayType.Compact;if("health"===t.name){const i=Math.floor(2*u);let a;if(i<=5){const e=(i-1)/4;a="rgba(240,163,163,1)",e>=0&&(a=`rgb(${240+15*e}, ${163+51*e}, ${163-163*e})`)}else{const e=(i-5)/5;a=`rgb(${255-212*e}, ${214-20*e}, ${0+83*e})`}const o=Array.from({length:10},((e,t)=>{const i=p&&u>.5*t,o=i?a:"var(--primary-background-color)";return n.html`
                <span class="health-segment ${i?"active":""}" 
                      style="grid-column: ${t+1}; background-color: ${o};">
                </span>
            `})),r=()=>{const i=Math.max(0,u-.5);e._hass.callService("number","set_value",{entity_id:t.sensor,value:i})},s=()=>{const i=Math.min(5,u+.5);e._hass.callService("number","set_value",{entity_id:t.sensor,value:i})};return n.html`
            <div class="attribute ${g||_?"width-100":""} ${_?"full-width":""}" data-attribute="health">
                <ha-icon .icon="${h}" 
                         @click="${e=>{e.stopPropagation(),r()}}">
                </ha-icon>
                <div class="meter green">
                    ${o}
                    <input type="range" 
                           min="0" 
                           max="5" 
                           step="0.5"
                           .value="${u}"
                           @input="${i=>{i.stopPropagation();const a=i.target,n=parseFloat(a.value);e._hass.callService("number","set_value",{entity_id:t.sensor,value:n})}}"
                    >
                </div>
                ${g&&!_?"":n.html`
                    <div class="header" @click="${e=>{e.stopPropagation(),s()}}">
                        <span class="value">${m}</span>
                    </div>
                `}
            </div>
        `}const v=100*Math.max(0,Math.min(1,(u-d)/(r-d))),f=p?l.TranslationUtils.createSensorTooltip(e._hass,t.name,u,d,r,c):l.TranslationUtils.translateUI(e._hass,"unavailable");let y="";return"dli"===t.name?y='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':c&&(y=c),n.html`
        <div class="attribute tooltip ${g||_?"width-100":""} ${_?"full-width":""}" data-attribute="${t.name}" @click="${()=>(0,s.moreInfo)(e,t.sensor)}">
            <div class="tip">${(0,o.unsafeHTML)(f)}</div>
            <ha-icon .icon="${h}"></ha-icon>
            <div class="meter red">
                <span class="${p?u<d||u>r?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${p?u>r?"bad":"good":"unavailable"}" style="width:${p?v:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${p?u>r?100:0:"0"}%;"></span>
            </div>
            ${g&&!_?"":n.html`<div class="header"><span class="value">${m}</span>&nbsp;${y?n.html`<span class='unit'>${(0,o.unsafeHTML)(y)}</span>`:""}</div>`}
        </div>
    `},t.getChunkedDisplayed=(e,t,i=[],a=[])=>{const n=[];for(const o of a){const a=e[o];if(a)if(i.includes(o))n.push([a]);else{const e=n.length>0?n[n.length-1]:null;e&&e.length<t&&!i.includes(e[0].name)?e.push(a):n.push([a])}}const o=Object.assign({},e);for(const e of a)delete o[e];const r=Object.values(o);for(let e=0;e<r.length;e++){const a=r[e];if(i.includes(a.name))n.push([a]);else{let e=null;for(let a=n.length-1;a>=0;a--){const o=n[a];if(o.length<t&&!i.includes(o[0].name)){e=o;break}}e&&e.length<t?e.push(a):n.push([a])}}return n},t.renderAttributeChunks=(e,i,o=[])=>{const r=e.config.display_type===a.DisplayType.Compact?1:2,s=e.config.full_width_bars||[],l=(0,t.getChunkedDisplayed)(i,r,s,o),d="attributes "+(e.config.display_type===a.DisplayType.Compact?"width-100":"");return l.map((i=>{const a=1===i.length&&s.includes(i[0].name),o=`${d}${a?" has-full-width-item":""}`;return n.html`<div class="${o}">${i.map((i=>i?n.html`${(0,t.renderAttribute)(e,i)}`:""))}</div>`})).flat()}},8265:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BrokkoliListComponents=void 0;const a=i(4437),n=i(9442),o=i(8598),r=i(2413);t.BrokkoliListComponents=class{static renderHeader(e,t){if(""===e)return a.html``;const i=t?r.TranslationUtils.translateListCard(t,"title"):"Pflanzenübersicht";return a.html`
            <div class="card-header">
                <div class="name">${e||i}</div>
            </div>
        `}static renderToolbar(e,t,i,n,o,s,l,d,c){var h,u,p,m,_,g,v;if(!(null===(h=null==e?void 0:e.multiselect)||void 0===h?void 0:h.enabled)&&!(null===(u=null==e?void 0:e.search)||void 0===u?void 0:u.enabled)&&!(null===(p=null==e?void 0:e.filter)||void 0===p?void 0:p.enabled))return a.html``;const f=c?r.TranslationUtils.translateListCard(c,"filter_close"):"Filter schließen",y=c?r.TranslationUtils.translateListCard(c,"filter"):"Filter",b=c?r.TranslationUtils.translateListCard(c,"multiselect_end"):"Mehrfachauswahl beenden",w=c?r.TranslationUtils.translateListCard(c,"multiselect"):"Mehrfachauswahl",x=c?r.TranslationUtils.translateListCard(c,"search_reset"):"Suche zurücksetzen",k=c?r.TranslationUtils.translateListCard(c,"search_default"):"Suche...";return a.html`
            <div class="toolbar">
                ${(null===(m=null==e?void 0:e.filter)||void 0===m?void 0:m.enabled)?a.html`
                    <ha-icon-button
                        .label=${i?f:y}
                        @click=${o}
                    >
                        <ha-icon icon="mdi:${i?"filter-off":"filter"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(_=null==e?void 0:e.multiselect)||void 0===_?void 0:_.enabled)?a.html`
                    <ha-icon-button
                        .label=${n?b:w}
                        @click=${s}
                    >
                        <ha-icon icon="mdi:${n?"close":"checkbox-multiple-outline"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(g=null==e?void 0:e.search)||void 0===g?void 0:g.enabled)?a.html`
                    <div class="search-container">
                        <ha-icon icon="mdi:magnify"></ha-icon>
                        <input
                            type="text"
                            .value=${t}
                            placeholder="${(null===(v=null==e?void 0:e.search)||void 0===v?void 0:v.placeholder)||k}"
                            @input=${l}
                        >
                        ${t?a.html`
                            <ha-icon-button
                                .label=${x}
                                @click=${d}
                            >
                                <ha-icon icon="mdi:close"></ha-icon>
                            </ha-icon-button>
                        `:""}
                    </div>
                `:""}
            </div>
        `}static renderTableHeader(e,t,i,n,o,r=!1){return a.html`
            <thead>
                <tr>
                    ${t?a.html`
                        <th class="checkbox-column"></th>
                    `:""}
                    ${e.map((e=>a.html`
                        <th @click=${()=>o(e.id)} data-column="${e.id}">
                            ${e.name}
                            ${i===e.id?a.html`<ha-icon icon="mdi:${"asc"===n?"arrow-up":"arrow-down"}"></ha-icon>`:""}
                        </th>
                    `))}
                    ${r?a.html`<th class="actions-column"></th>`:""}
                </tr>
            </thead>
        `}static renderTableRow(e,t,i,n,o,r,s,l,d,c){return a.html`
            <tr>
                ${i?a.html`
                    <td>
                        <input 
                            type="checkbox"
                            .checked=${n.has(e.entity_id)}
                            @change=${t=>o(e.entity_id,t)}
                            class="row-select"
                        >
                    </td>
                `:""}
                ${t.map((t=>a.html`
                    <td data-column="${t.id}" 
                        @click=${a=>{i&&n.size>0?r(a,e,t.id):i||s(a,e)}}
                        style="cursor: ${l(t.id)}"
                    >
                        ${d(e,t.id)}
                    </td>
                `))}
                ${c?a.html`<td class="actions-cell">${c}</td>`:""}
            </tr>
        `}static renderFilterSidebar(e,t,i,n,o,s){const l=r.TranslationUtils.translateListCard(o,"entity_type"),d=r.TranslationUtils.translateListCard(o,"plants"),c=r.TranslationUtils.translateListCard(o,"cycles");return a.html`
            <div class="filter-sidebar">
                ${e.map((r=>a.html`
                    ${r.id===e[0].id?a.html`
                        <div class="filter-group entity-type-filter">
                            <div class="filter-header">${l}</div>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${t.entityTypes.has("plant")}
                                    @change=${()=>i("plant")}
                                >
                                ${d}
                            </label>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${t.entityTypes.has("cycle")}
                                    @change=${()=>i("cycle")}
                                >
                                ${c}
                            </label>
                        </div>
                    `:""}
                    ${this.renderColumnFilter(r,t,n,o,s)}
                `))}
            </div>
        `}static renderColumnFilter(e,t,i,s,l){if(o.SensorUtils.isSensorColumn(e.id)){const n=o.SensorUtils.getSensorRange(s,l,e.id),d=t.activeFilters[e.id]||n;return a.html`
                <div class="filter-range">
                    <div class="filter-header">${e.name}</div>
                    <div class="filter-range-inputs">
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.min}
                            @change=${a=>{var o;const r=a.target,s=Number(r.value);i(e.id,{min:s,max:(null===(o=t.activeFilters[e.id])||void 0===o?void 0:o.max)||n.max})}}
                            step="0.1"
                        >
                        <span>${r.TranslationUtils.translateListCard(s,"filter_range_to")}</span>
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.max}
                            @change=${a=>{var o;const r=a.target,s=Number(r.value);i(e.id,{min:(null===(o=t.activeFilters[e.id])||void 0===o?void 0:o.min)||n.min,max:s})}}
                            step="0.1"
                        >
                        <span>${n.unit}</span>
                    </div>
                </div>
            `}return a.html`
            <div class="filter-group">
                <div class="filter-header">${e.name}</div>
                ${n.FilterUtils.getUniqueValues(s,l,e.id).map((n=>{var o;return a.html`
                    <label class="filter-item">
                        <input type="checkbox"
                            .checked=${(null===(o=t.activeFilters[e.id])||void 0===o?void 0:o.has(n))||!1}
                            @change=${()=>i(e.id,n)}
                        >
                        ${n}
                    </label>
                `}))}
            </div>
        `}static renderAddPlantButton(e,t){const i=t?r.TranslationUtils.translateListCard(t,"add_plant"):"Neue Pflanze hinzufügen";return a.html`
            <tr class="add-plant-row">
                <td colspan="100%">
                    <div class="add-plant-text" @click=${e}>
                        <ha-icon icon="mdi:plus"></ha-icon>
                        <span>${i}</span>
                    </div>
                </td>
            </tr>
        `}}},8358:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellRenderer=void 0;const a=i(4437),n=i(289),o=i(9442),r=i(70),s=i(2413),l=i(5869);t.CellRenderer=class{static renderCell(e){const{hass:t,plant:i,columnId:a,editingCell:n,onCellClick:o,onInputUpdate:r,onRowClick:s}=e,l=i.entity_id.split(".")[1],d={hass:t,plant:i,columnId:a,onInput:(e,t)=>r(e,t),onClick:o,onRowClick:s};return(null==n?void 0:n.entityId)===i.entity_id&&(null==n?void 0:n.column)===a?this.renderEditingCell(l,a,t,d):this.renderNormalCell(l,a,t,i,d)}static renderEditingCell(e,t,i,o){const l=o.plant,d=e=>{if(l.attributes._sensorMap&&l.attributes._sensorMap[e])return l.attributes._sensorMap[e]};if(n.CellTypeUtils.isDateInput(t)){const e=d("growth_phase");if(!e)return a.html`<span>Sensor map missing</span>`;const n=null==i?void 0:i.states[e];return r.TemplateUtils.renderDateInput(null==n?void 0:n.attributes[t],o)}if(n.CellTypeUtils.isDurationInput(t)){const e=d("growth_phase");if(!e)return a.html`<span>Sensor map missing</span>`;const n=null==i?void 0:i.states[e];return r.TemplateUtils.renderNumberInput(null==n?void 0:n.attributes[t],s.TranslationUtils.translateUI(i,"days"),o,1)}if(n.CellTypeUtils.isNumberInput(t)){const e=d(t);if(!e)return r.TemplateUtils.renderNumberInput(l.attributes[t],this.getNumberInputUnit(t,void 0,i),o);const a=null==i?void 0:i.states[e],n=this.getNumberInputUnit(t,a,i);return r.TemplateUtils.renderNumberInput(null==a?void 0:a.state,n,o)}return n.CellTypeUtils.isSelectInput(t)?this.renderSelectInput(t,e,i,o):n.CellTypeUtils.isTextInput(t)||n.CellTypeUtils.isTextArea(t)?r.TemplateUtils.renderTextInput(o.plant.attributes[t],o,n.CellTypeUtils.isTextArea(t)):a.html``}static renderNormalCell(e,t,i,o,d){const c=(0,l.getFieldDefinition)(t);if(n.CellTypeUtils.isDateInput(t))return this.renderDateValue(e,t,i,d);if(n.CellTypeUtils.isDurationInput(t)){let e;if(o.attributes._sensorMap&&o.attributes._sensorMap.growth_phase){const n=o.attributes._sensorMap.growth_phase;e=null==i?void 0:i.states[n];const r=null==e?void 0:e.attributes[t];return a.html`
                    <span @click=${d.onClick}>
                        ${r?`${r} ${s.TranslationUtils.translateUI(i,"days")}`:"-"}
                    </span>
                `}return a.html`<span @click=${d.onClick}>-</span>`}if((null==c?void 0:c.isSensor)&&c.showStatusBar)return r.TemplateUtils.renderSensorCell(d);if((null==c?void 0:c.isSensor)&&!c.showStatusBar){let e;if(o.attributes._sensorMap&&o.attributes._sensorMap[t]){const n=o.attributes._sensorMap[t];return e=null==i?void 0:i.states[n],a.html`
                    <span @click=${d.onClick}>
                        ${e?`${e.state} ${e.attributes.unit_of_measurement||c.unit||""}`:"-"}
                    </span>
                `}return a.html`<span @click=${d.onClick}>-</span>`}switch(t){case"friendly_name":return r.TemplateUtils.renderPlantName(o.attributes.friendly_name,o.attributes.entity_picture,d);case"state":return r.TemplateUtils.renderBadge(o.state,d,"status");case"cycle":return this.renderCycleValue(e,o,i,d);case"area":return this.renderAreaValue(o,i,d);case"growth_phase":return this.renderGrowthPhaseValue(e,i,d);case"pot_size":case"flowering_duration":return this.renderMeasurementValue(e,t,i,d);case"website":return r.TemplateUtils.renderWebsiteCell(o.attributes.website,d,!1);default:return this.renderDefaultValue(t,o,d)}}static getNumberInputUnit(e,t,i){return"flowering_duration"===e||"original_flowering_duration"===e?i?s.TranslationUtils.translateUI(i,"days"):"days":"pot_size"===e?"L":(null==t?void 0:t.attributes.unit_of_measurement)||""}static renderSelectInput(e,t,i,a){var s;let l,d=[];const c=a.plant;if("growth_phase"===e){if(c.attributes._sensorMap&&c.attributes._sensorMap.growth_phase){const e=c.attributes._sensorMap.growth_phase,t=null==i?void 0:i.states[e];d=n.CellTypeUtils.getGrowthPhaseOptions(i,c),l=null==t?void 0:t.state}}else if("cycle"===e){if(c.attributes._sensorMap&&c.attributes._sensorMap.cycle){const e=c.attributes._sensorMap.cycle,t=null==i?void 0:i.states[e];d=n.CellTypeUtils.getCycleOptions(i,c),l=null==t?void 0:t.state}}else if("area"===e){const e=o.FilterUtils.getAreaForEntity(i,a.plant.entity_id);l=e?null===(s=null==i?void 0:i.areas[e])||void 0===s?void 0:s.name:"",d=n.CellTypeUtils.getAreaOptions(i)}return r.TemplateUtils.renderSelectInput(l,d,a,`${e}-select`)}static renderDateValue(e,t,i,n){const o=n.plant;if(o.attributes._sensorMap&&o.attributes._sensorMap.growth_phase){const e=o.attributes._sensorMap.growth_phase,r=null==i?void 0:i.states[e],s=null==r?void 0:r.attributes[t];if(s){const e=new Date(s);return a.html`
                    <span @click=${n.onClick}>
                        ${e.toLocaleDateString()}
                    </span>
                `}}return a.html`<span @click=${n.onClick}>-</span>`}static renderCycleValue(e,t,i,n){if(t.entity_id.startsWith("cycle."))return a.html`${t.attributes.member_count||0} ${s.TranslationUtils.translateUI(i,"members")}`;if(t.attributes._sensorMap&&t.attributes._sensorMap.cycle){const e=t.attributes._sensorMap.cycle,a=null==i?void 0:i.states[e];return r.TemplateUtils.renderBadge(null==a?void 0:a.state,n,"cycle")}return a.html`<span @click=${n.onClick}>-</span>`}static renderAreaValue(e,t,i){var a;const n=o.FilterUtils.getAreaForEntity(t,e.entity_id),s=n?null===(a=null==t?void 0:t.areas[n])||void 0===a?void 0:a.name:"-";return r.TemplateUtils.renderBadge(s,i,"area")}static renderGrowthPhaseValue(e,t,i){const n=i.plant;if(n.attributes._sensorMap&&n.attributes._sensorMap.growth_phase){const e=n.attributes._sensorMap.growth_phase,a=null==t?void 0:t.states[e];return r.TemplateUtils.renderBadge(null==a?void 0:a.state,i,"phase")}return a.html`<span @click=${i.onClick}>-</span>`}static renderMeasurementValue(e,t,i,n){const o=n.plant;if(o.attributes._sensorMap&&o.attributes._sensorMap[t]){const e=o.attributes._sensorMap[t],r=null==i?void 0:i.states[e],l="pot_size"===t?"L":s.TranslationUtils.translateUI(i,"days");return a.html`
                <span @click=${n.onClick}>
                    ${r?`${r.state} ${l}`:"-"}
                </span>
            `}return a.html`<span @click=${n.onClick}>-</span>`}static renderDefaultValue(e,t,i){var n,o;const s=(0,l.getFieldDefinition)(e),d=(null==s?void 0:s.clickAction)||"none";return(null==s?void 0:s.hasExternalLink)?r.TemplateUtils.renderWebsiteCell(t.attributes[e],i,!1):"edit"===d?a.html`
                <span @click=${i.onClick}>
                    ${(null===(n=t.attributes[e])||void 0===n?void 0:n.toString())||"-"}
                </span>
            `:a.html`${(null===(o=t.attributes[e])||void 0===o?void 0:o.toString())||"-"}`}}},289:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellTypeUtils=void 0;const a=i(5869);t.CellTypeUtils=class{static getClickAction(e){const t=(0,a.getFieldDefinition)(e);return(null==t?void 0:t.clickAction)||"none"}static getCursorStyle(e){switch(this.getClickAction(e)){case"more-info":case"edit":return"pointer";default:return"default"}}static isDateInput(e){return"date"===(0,a.getFieldType)(e)}static isDurationInput(e){const t=(0,a.getFieldDefinition)(e);return"phaseduration"===(null==t?void 0:t.group)}static isNumberInput(e){return"number"===(0,a.getFieldType)(e)}static isSelectInput(e){return"select"===(0,a.getFieldType)(e)}static isTextInput(e){return"text"===(0,a.getFieldType)(e)}static isTextArea(e){return"textarea"===(0,a.getFieldType)(e)}static getCycleOptions(e,t){var i;const n=(0,a.getSensorMapEntity)(e,t,"cycle");return(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.options)||[]}static getGrowthPhaseOptions(e,t){var i;const n=(0,a.getSensorMapEntity)(e,t,"growth_phase");return(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.options)||[]}static getAreaOptions(e){return e?Object.values(e.areas||{}).map((e=>e.name)).sort():[]}static formatNumber(e,t=2){const i="string"==typeof e?parseFloat(e):e;return isNaN(i)?"-":i.toFixed(t)}static getSearchableValue(e,t,i){return(0,a.getFieldValue)(i,e,t).toString()}}},6754:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigUtils=void 0;const a=i(5869),n=i(2413);class o{static getDefaultShowColumns(){const e=new Set(a.FIELD_DEFINITIONS.map((e=>e.group))),t={};return e.forEach((e=>{t[e]="min_max"!==e&&"diagnostics"!==e&&"notes"!==e})),a.FIELD_DEFINITIONS.filter((e=>"sensor"===e.type)).forEach((e=>{t[e.id]=["soil_moisture","temperature","conductivity","illuminance","air_humidity","dli","ph","health","power_consumption"].includes(e.id)})),t}static getDefaultConfig(e){return{type:"custom:brokkoli-list-card",title:e?n.TranslationUtils.translateListCard(e,"title"):"Pflanzenübersicht",search:{enabled:!0,placeholder:e?n.TranslationUtils.translateListCard(e,"search_placeholder"):"Suche..."},multiselect:{enabled:!1,showbydefault:!1},filter:{enabled:!0,showbydefault:!1},add_plant:{enabled:!0,position:"bottom"},show_columns:this.getDefaultShowColumns()}}static getVisibleColumns(e,t){const i=(null==e?void 0:e.show_columns)||this.getDefaultConfig(t).show_columns,n=new Map(a.FIELD_DEFINITIONS.map((e=>[e.id,{id:e.id,name:"function"==typeof e.name?t?e.name(t):e.id:e.name,group:e.group}]))),o=new Map;a.FIELD_DEFINITIONS.forEach((e=>{o.has(e.group)||o.set(e.group,[]),o.get(e.group).push({id:e.id,name:"function"==typeof e.name?t?e.name(t):e.id:e.name,group:e.group})}));const r=[],s=new Set,l=e=>{s.has(e.id)||(s.add(e.id),r.push(e))};for(const[e,t]of Object.entries(i))t&&(o.has(e)?o.get(e).forEach(l):n.has(e)&&l(n.get(e)));return r}static getAllAvailableColumns(){return a.FIELD_DEFINITIONS.map((e=>e.id))}}t.ConfigUtils=o,o.EDITABLE_PLANT_ATTRIBUTES=a.FIELD_DEFINITIONS.filter((e=>"edit"===e.clickAction)).map((e=>e.id))},4139:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGrowthPhaseIcon=t.getTreatmentIcon=t.getTreatmentIconByIndex=t.getGrowthPhaseIconByIndex=t.plantAttributes=t.missingImage=t.elementOptions=t.initial_expanded_options=t.default_option_elements=t.default_show_elements=t.default_show_bars=t.PHASES=t.CARD_EDITOR_NAME=t.CARD_NAME=void 0,t.CARD_NAME="brokkoli-card",t.CARD_EDITOR_NAME="brokkoli-card-editor",t.PHASES=["seeds","germination","rooting","growing","flowering","removed","harvested"],t.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli","water_consumption","fertilizer_consumption","ppfd","power_consumption","ph","health"],t.default_show_elements=["header","options"],t.default_option_elements=["attributes","timeline","consumption","history","details"],t.initial_expanded_options=["attributes"],t.elementOptions=[{label:"Header",value:"header"},{label:"Attribute Bars",value:"attributes"},{label:"Options Menu",value:"options"},{label:"Timeline",value:"timeline"},{label:"Consumption",value:"consumption"},{label:"History",value:"history"},{label:"Details",value:"details"}],t.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",t.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"Water Consumption",value:"water_consumption"},{label:"Fertilizer Consumption",value:"fertilizer_consumption"},{label:"PPFD",value:"ppfd"},{label:"Power Consumption",value:"power_consumption"},{label:"pH",value:"ph"},{label:"Health",value:"health"}];const i=["mdi:seed","mdi:seed-outline","mdi:sprout","mdi:leaf","mdi:flower","mdi:delete","mdi:content-cut"],a=["mdi:help-circle","mdi:content-cut","mdi:arrow-down-bold-circle","mdi:arrow-up-bold-circle","mdi:candy","mdi:scissors-cutting","mdi:leaf","mdi:spray","mdi:water"];t.getGrowthPhaseIconByIndex=e=>e>=0&&e<i.length?i[e]:"mdi:help-circle",t.getTreatmentIconByIndex=e=>e>=0&&e<a.length?a[e]:"mdi:help-circle",t.getTreatmentIcon=(e,i,a)=>{var n,o;if(i&&(null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n._sensorMap)&&"object"==typeof a.attributes._sensorMap){const n=a.attributes._sensorMap.treatment;if(n){const a=i.states[n];if((null===(o=null==a?void 0:a.attributes)||void 0===o?void 0:o.options)&&Array.isArray(a.attributes.options)){const i=a.attributes.options.findIndex((t=>t===e));if(-1!==i)return(0,t.getTreatmentIconByIndex)(i)}}}switch(e.toLowerCase()){case"":case"none":case"keine":default:return"mdi:help-circle";case"cut":case"schneiden":return"mdi:content-cut";case"super cropping":return"mdi:arrow-down-bold-circle";case"topping":return"mdi:arrow-up-bold-circle";case"lollipop":return"mdi:candy";case"fim":return"mdi:scissors-cutting";case"rib":return"mdi:leaf";case"spray pest":case"spray water":return e.includes("pest")?"mdi:spray":"mdi:water"}},t.getGrowthPhaseIcon=(e,i,a)=>{var n,o;if(i&&(null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n._sensorMap)&&"object"==typeof a.attributes._sensorMap){const n=a.attributes._sensorMap.growth_phase;if(n){const a=i.states[n];if((null===(o=null==a?void 0:a.attributes)||void 0===o?void 0:o.options)&&Array.isArray(a.attributes.options)){const i=a.attributes.options.findIndex((t=>t===e));if(-1!==i)return(0,t.getGrowthPhaseIconByIndex)(i)}}}switch(e.toLowerCase()){case"seeds":return"mdi:seed";case"germination":return"mdi:seed-outline";case"rooting":return"mdi:sprout";case"growing":return"mdi:leaf";case"flowering":return"mdi:flower";case"harvested":return"mdi:content-cut";case"removed":return"mdi:delete";default:return"mdi:help-circle"}}},1322:function(e,t,i){var a=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.EventUtils=void 0;const n=i(5869);class o{static handleInputUpdate(e,t,i){return a(this,void 0,void 0,(function*(){var a;if(e instanceof KeyboardEvent&&"Escape"===e.key)return void t.onUpdate();if(e instanceof KeyboardEvent&&"Enter"!==e.key&&"select"!==i)return;let o=e.target.value;if("number"===i){const e=(0,n.getFieldDefinition)(t.columnId);if(o="integer"===((null===(a=null==e?void 0:e.validation)||void 0===a?void 0:a.numberType)||"integer")?parseInt(o):parseFloat(o),isNaN(o))return}try{t.multiSelectMode&&t.selectedPlants.size>0?yield this.applyBulkUpdate(o,t.columnId,t):yield this.applySingleUpdate(o,t),t.onUpdate()}catch(e){console.error(`Error updating ${t.columnId}:`,e)}}))}static applyBulkUpdate(e,t,i){return a(this,void 0,void 0,(function*(){const{hass:t,selectedPlants:a}=i;for(const n of a)yield this.applySingleUpdate(e,Object.assign(Object.assign({},i),{plant:t.states[n]}))}))}static applySingleUpdate(e,t){return a(this,void 0,void 0,(function*(){const{hass:i,plant:a,columnId:r}=t,s=(0,n.getFieldDefinition)(r),l=null==s?void 0:s.service;if(!l)return;if("move_to_area"===l.action){const i=new Event("change");return Object.defineProperty(i,"target",{value:{value:e.toString()}}),void(yield o.handleAreaUpdate(i,t))}const d=(0,n.getSensorMapEntityId)(i,a,r);if(l.entityPrefix&&d){const t={entity_id:d};l.valueKey?t[l.valueKey]=e:t[r]=e,yield i.callService(l.domain,l.action,t)}else{if(l.entityPrefix)return void console.warn(`[BROKKOLI] Keine Helfer-Entity fuer ${r} an ${a.entity_id}`);{const t={entity_id:a.entity_id};l.valueKey?t[l.valueKey]=e:t[r]=e,yield i.callService(l.domain,l.action,t)}}}))}static handleAreaUpdate(e,t){return a(this,void 0,void 0,(function*(){var i;const{hass:a,plant:n,multiSelectMode:o,selectedPlants:r}=t,s=e.target.value,l="-"===s?"":null===(i=Object.entries(a.areas||{}).find((([,e])=>e.name===s)))||void 0===i?void 0:i[0];if(o&&r.size>0)for(const e of r){const t=a.entities[e];(null==t?void 0:t.device_id)&&(yield a.callService("plant","move_to_area",{device_id:t.device_id,area_id:l||""}))}else{const e=a.entities[n.entity_id];(null==e?void 0:e.device_id)&&(yield a.callService("plant","move_to_area",{device_id:e.device_id,area_id:l||""}))}t.onUpdate()}))}static handleSearch(e,t){t(e.target.value.toLowerCase())}static handleRowClick(e,t,i,a,o){if(e.stopPropagation(),!(0,n.getFieldDefinition)(i))return void a(t.entity_id);a((0,n.getSensorMapEntityId)(o,t,i)||t.entity_id)}static handleInputEvent(e,t,i){var a;let o=e.target.value;if("number"===t){const e=(0,n.getFieldDefinition)(i);if(o="integer"===((null===(a=null==e?void 0:e.validation)||void 0===a?void 0:a.numberType)||"integer")?parseInt(o):parseFloat(o),isNaN(o))return}return o}}t.EventUtils=o},5869:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFieldName=t.getFieldOptions=t.getFieldValue=t.isSensorField=t.getFieldService=t.getFieldType=t.isFieldEditable=t.getFieldsByGroup=t.getFieldDefinition=t.FIELD_DEFINITIONS=t.getSensorMapEntity=t.getSensorMapEntityId=void 0;const a=i(2413),n=i(8063),o=i(4139),r={domain:"plant",action:"update_plant_attributes"},s={domain:"select",action:"select_option",entityPrefix:"select.",valueKey:"option"},l={domain:"number",action:"set_value",entityPrefix:"number.",valueKey:"value"};t.getSensorMapEntityId=(e,t,i)=>{if(t.attributes._sensorMap&&t.attributes._sensorMap[i])return t.attributes._sensorMap[i];if(e){const a=n.PlantEntityUtils.buildSensorMap(e,t.entity_id)[i];if(a)return a}return null},t.getSensorMapEntity=(e,i,a)=>{const n=(0,t.getSensorMapEntityId)(e,i,a);return n?null==e?void 0:e.states[n]:null};const d=(e,i,a,n)=>{const o=(0,t.getSensorMapEntity)(e,i,n);return(null==o?void 0:o.state)||""},c=(e,i,a,n)=>{var o;const r=(0,t.getSensorMapEntity)(e,i,n);return(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.options)||[]};t.FIELD_DEFINITIONS=[{id:"friendly_name",name:e=>a.TranslationUtils.translateField(e,"friendly_name"),group:"name",type:"plant-name",clickAction:"none",getValue:(e,t)=>t.attributes.friendly_name||""},{id:"state",name:e=>a.TranslationUtils.translateField(e,"state"),group:"basic",type:"badge",clickAction:"more-info",getValue:(e,t)=>t.state},{id:"area",name:e=>a.TranslationUtils.translateField(e,"area"),group:"growing",type:"select",clickAction:"edit",service:{domain:"plant",action:"move_to_area"},options:e=>["-",...Object.values(e.areas||{}).map((e=>e.name)).sort()],getValue:(e,t)=>{var i;if(t.attributes._sensorMap&&t.attributes._sensorMap.location){const a=t.attributes._sensorMap.location,n=null===(i=null==e?void 0:e.states[a])||void 0===i?void 0:i.state;if(n)try{return JSON.parse(n).area||""}catch(e){return n}}return""}},{id:"growth_phase",name:e=>a.TranslationUtils.translateField(e,"growth_phase"),group:"growing",type:"select",clickAction:"edit",service:s,options:(e,t)=>c(e,t,0,"growth_phase"),getValue:(e,t)=>d(e,t,0,"growth_phase")},{id:"cycle",name:e=>a.TranslationUtils.translateField(e,"cycle"),group:"growing",type:"select",clickAction:"edit",service:s,options:(e,t)=>c(e,t,0,"cycle"),getValue:(e,t)=>d(e,t,0,"cycle")},{id:"pot_size",name:e=>a.TranslationUtils.translateField(e,"pot_size"),group:"growing",type:"number",clickAction:"edit",service:l,unit:"L",validation:{min:0,step:.1,numberType:"float"},getValue:(e,t)=>d(e,t,0,"pot_size")},{id:"flowering_duration",name:e=>a.TranslationUtils.translateField(e,"flowering_duration"),group:"growing",type:"number",clickAction:"edit",service:l,unit:"days",validation:{min:0,step:1,numberType:"integer"},getValue:(e,t)=>d(e,t,0,"flowering_duration")},{id:"strain",name:e=>a.TranslationUtils.translateField(e,"strain"),group:"genetics",type:"text",clickAction:"edit",service:r},{id:"breeder",name:e=>a.TranslationUtils.translateField(e,"breeder"),group:"genetics",type:"text",clickAction:"edit",service:r},{id:"feminized",name:e=>a.TranslationUtils.translateField(e,"feminized"),group:"genetics",type:"select",clickAction:"edit",service:r,options:e=>[a.TranslationUtils.translateUI(e,"yes"),a.TranslationUtils.translateUI(e,"no")]},{id:"original_flowering_duration",name:e=>a.TranslationUtils.translateField(e,"original_flowering_duration"),group:"genetics",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1,numberType:"integer"}},...o.PHASES.map((e=>{const t="removed"===e||"harvested"===e?"_date":"_start";return{id:`${e}${t}`,name:i=>a.TranslationUtils.translateField(i,`${e}${t}`),group:"phasebegin",type:"date",clickAction:"edit",service:r}})),{id:"seeds_duration",name:e=>a.TranslationUtils.translateField(e,"seeds_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"germination_duration",name:e=>a.TranslationUtils.translateField(e,"germination_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"rooting_duration",name:e=>a.TranslationUtils.translateField(e,"rooting_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"growing_duration",name:e=>a.TranslationUtils.translateField(e,"growing_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"flower_duration",name:e=>a.TranslationUtils.translateField(e,"flower_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"removed_duration",name:e=>a.TranslationUtils.translateField(e,"removed_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"harvested_duration",name:e=>a.TranslationUtils.translateField(e,"harvested_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1}},{id:"soil_moisture",name:e=>a.TranslationUtils.translateSensor(e,"soil_moisture"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"soil_moisture")},{id:"temperature",name:e=>a.TranslationUtils.translateSensor(e,"temperature"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"°C",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"temperature")},{id:"conductivity",name:e=>a.TranslationUtils.translateSensor(e,"conductivity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"µS/cm",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"conductivity")},{id:"ph",name:e=>a.TranslationUtils.translateSensor(e,"ph"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"pH",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"ph")},{id:"illuminance",name:e=>a.TranslationUtils.translateSensor(e,"illuminance"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"lx",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"illuminance")},{id:"air_humidity",name:e=>a.TranslationUtils.translateSensor(e,"air_humidity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"air_humidity")},{id:"dli",name:e=>a.TranslationUtils.translateSensor(e,"dli"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"mol/d⋅m²",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"dli")},{id:"water_consumption",name:e=>a.TranslationUtils.translateSensor(e,"water_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"water_consumption")},{id:"fertilizer_consumption",name:e=>a.TranslationUtils.translateSensor(e,"fertilizer_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"fertilizer_consumption")},{id:"health",name:e=>a.TranslationUtils.translateSensor(e,"health"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"health")},{id:"power_consumption",name:e=>a.TranslationUtils.translateSensor(e,"power_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"W",isSensor:!0,showStatusBar:!0,getValue:(e,t)=>d(e,t,0,"power_consumption")},{id:"ppfd_mol",name:e=>a.TranslationUtils.translateDiagnostics(e,"ppfd_mol"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"µmol/m²/s",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>{const i=d(e,t,0,"ppfd_mol");return i?Number(i).toFixed(6):i}},{id:"total_ppfd_mol_integral",name:e=>a.TranslationUtils.translateDiagnostics(e,"total_ppfd_mol_integral"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"mol/m²",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>d(e,t,0,"total_ppfd_mol_integral")},{id:"total_water_consumption",name:e=>a.TranslationUtils.translateDiagnostics(e,"total_water_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"L",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>d(e,t,0,"total_water_consumption")},{id:"total_fertilizer_consumption",name:e=>a.TranslationUtils.translateDiagnostics(e,"total_fertilizer_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>d(e,t,0,"total_fertilizer_consumption")},{id:"total_power_consumption",name:e=>a.TranslationUtils.translateDiagnostics(e,"total_power_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"kWh",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>d(e,t,0,"total_power_consumption")},{id:"energy_cost",name:e=>a.TranslationUtils.translateDiagnostics(e,"energy_cost"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"€",isSensor:!0,showStatusBar:!1,getValue:(e,t)=>d(e,t,0,"energy_cost")},...["air_humidity","soil_moisture","temperature","conductivity","illuminance","dli","water_consumption","fertilizer_consumption","ph"].flatMap((e=>[{id:`min_${e}`,name:t=>a.TranslationUtils.translateField(t,`min_${e}`),group:"min_max",type:"number",clickAction:"edit",service:l,getValue:(t,i)=>d(t,i,0,`min_${e}`)},{id:`max_${e}`,name:t=>a.TranslationUtils.translateField(t,`max_${e}`),group:"min_max",type:"number",clickAction:"edit",service:l,getValue:(t,i)=>d(t,i,0,`max_${e}`)}])),{id:"timestamp",name:e=>a.TranslationUtils.translateField(e,"timestamp"),group:"details",type:"text",clickAction:"none",getValue:(e,t)=>t.attributes.timestamp||""},{id:"difficulty",name:e=>a.TranslationUtils.translateField(e,"difficulty"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.difficulty||""},{id:"yield",name:e=>a.TranslationUtils.translateField(e,"yield"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.yield||""},{id:"mold_resistance",name:e=>a.TranslationUtils.translateField(e,"mold_resistance"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.mold_resistance||""},{id:"hunger",name:e=>a.TranslationUtils.translateField(e,"hunger"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.hunger||""},{id:"effects",name:e=>a.TranslationUtils.translateField(e,"effects"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.effects||""},{id:"smell",name:e=>a.TranslationUtils.translateField(e,"smell"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.smell||""},{id:"taste",name:e=>a.TranslationUtils.translateField(e,"taste"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.taste||""},{id:"phenotype",name:e=>a.TranslationUtils.translateField(e,"phenotype"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.phenotype||""},{id:"growth_stretch",name:e=>a.TranslationUtils.translateField(e,"growth_stretch"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.growth_stretch||""},{id:"flower_stretch",name:e=>a.TranslationUtils.translateField(e,"flower_stretch"),group:"details",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.flower_stretch||""},{id:"notes",name:e=>a.TranslationUtils.translateField(e,"notes"),group:"notes",type:"textarea",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.notes||""},{id:"website",name:e=>a.TranslationUtils.translateField(e,"website"),group:"notes",type:"text",clickAction:"edit",service:r,getValue:(e,t)=>t.attributes.website||"",hasExternalLink:!0}],t.getFieldDefinition=e=>t.FIELD_DEFINITIONS.find((t=>t.id===e)),t.getFieldsByGroup=e=>t.FIELD_DEFINITIONS.filter((t=>t.group===e)),t.isFieldEditable=e=>{var i;return"edit"===(null===(i=(0,t.getFieldDefinition)(e))||void 0===i?void 0:i.clickAction)},t.getFieldType=e=>{var i;return(null===(i=(0,t.getFieldDefinition)(e))||void 0===i?void 0:i.type)||"text"},t.getFieldService=e=>{var i;return null===(i=(0,t.getFieldDefinition)(e))||void 0===i?void 0:i.service},t.isSensorField=e=>{var i;return(null===(i=(0,t.getFieldDefinition)(e))||void 0===i?void 0:i.isSensor)||!1},t.getFieldValue=(e,i,a)=>{var n;const o=(0,t.getFieldDefinition)(e);return o?o.getValue?o.getValue(i,a):(null===(n=a.attributes[e])||void 0===n?void 0:n.toString())||"":""},t.getFieldOptions=(e,i,a)=>{const n=(0,t.getFieldDefinition)(e);return(null==n?void 0:n.options)?n.options(i,a):[]},t.getFieldName=(e,i)=>{const a=(0,t.getFieldDefinition)(e);return a?"function"==typeof a.name?a.name(i):a.name:e}},9442:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FilterUtils=void 0;const a=i(8598),n=i(5869);class o{static getEntityValue(e,t,i){return(0,n.getFieldValue)(i,e,t).toString()}static getUniqueValues(e,t,i){return[...new Set(t.map((t=>this.getEntityValue(e,t,i))))].sort()}static getAreaForEntity(e,t){if(!e)return;const i=e.devices||{},a=(e.entities||{})[t];if(a){if(a.area_id)return a.area_id;if(a.device_id){const e=i[a.device_id];if(null==e?void 0:e.area_id)return e.area_id}}}static applyFilters(e,t,i){let o=t.filter((e=>{const t=e.entity_id.split(".")[0];return i.entityTypes.has(t)}));return Object.keys(i.activeFilters).length>0&&(o=o.filter((t=>Object.entries(i.activeFilters).every((([i,o])=>{if("entity_type"===i)return!0;if((0,n.isSensorField)(i)){const n=a.SensorUtils.getSensorInfo(e,t,i),r=o;return n.value>=r.min&&n.value<=r.max}const r=this.getEntityValue(e,t,i);return o.has(r)}))))),o}static toggleFilter(e,t,i){if((0,n.isSensorField)(e))i.activeFilters[e]=t,i.activeFilters[e]||delete i.activeFilters[e];else{i.activeFilters[e]||(i.activeFilters[e]=new Set);const a=i.activeFilters[e];a.has(t)?(a.delete(t),0===a.size&&delete i.activeFilters[e]):a.add(t)}}static toggleEntityType(e,t){t.entityTypes.has(e)?t.entityTypes.size>1&&t.entityTypes.delete(e):t.entityTypes.add(e)}static getFilteredPlants(e,t,i,a,r){let s=o.applyFilters(e,t,i);return a&&(s=s.filter((t=>[(0,n.getFieldValue)("friendly_name",e,t),(0,n.getFieldValue)("state",e,t),(0,n.getFieldValue)("area",e,t),...r.map((i=>(0,n.getFieldValue)(i,e,t)))].filter(Boolean).some((e=>e.toString().toLowerCase().includes(a.toLowerCase())))))),s}}t.FilterUtils=o},3063:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HassBeobachter=void 0,t.HassBeobachter=class{constructor(){this._ids=[],this._neuAufbauen=!0}markiereVeraltet(){this._neuAufbauen=!0}betrifftUns(e,t){const i=this._vorher,a=e;return this._vorher=e,i?i.entities!==a.entities||i.devices!==a.devices||i.areas!==a.areas?(this._neuAufbauen=!0,!0):i.language!==a.language||i.locale!==a.locale||i.themes!==a.themes||i.states!==a.states&&(this._neuAufbauen&&(this._ids=t(e),this._neuAufbauen=!1),this._ids.some((e=>i.states[e]!==a.states[e]))):(this._neuAufbauen=!0,!0)}}},8063:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlantEntityUtils=void 0;class i{static buildSensorMap(e,t){var i,a,n;const o=null==e?void 0:e.entities,r=null===(i=null==o?void 0:o[t])||void 0===i?void 0:i.device_id;if(!o||!r)return{};const s={};for(const e of Object.values(o)){if(e.device_id!==r||!e.translation_key)continue;const t=e.translation_key.match(/^(min|max)_(.+)$/),i=t?`${t[1]}_${null!==(a=this.TYPE_ALIAS[t[2]])&&void 0!==a?a:t[2]}`:null!==(n=this.TK_ALIAS[e.translation_key])&&void 0!==n?n:e.translation_key;s[e.translation_key]=e.entity_id,s[i]=e.entity_id}return s}static collectPlantEntityIds(e,t){var i;const a=null==e?void 0:e.entities;if(!a)return[...t];const n=new Set;for(const e of t){const t=null===(i=a[e])||void 0===i?void 0:i.device_id;t&&n.add(t)}const o=new Set(t);if(0===n.size)return[...o];for(const e of Object.values(a))e.device_id&&n.has(e.device_id)&&o.add(e.entity_id);return[...o]}static buildPlantView(e,t){var i,a,n;const o=null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[t];if(!o)return null;const r=this.buildSensorMap(e,t),s=t=>t?e.states[t]:void 0,l=e=>{if(void 0===e)return;const t=Number(e);return""!==e&&Number.isFinite(t)?t:e},d={path:o.attributes.download_path||"/local/images/plants/",device_type:t.startsWith("cycle.")?"cycle":"plant",entity_id:t,name:null!==(a=o.attributes.friendly_name)&&void 0!==a?a:t,icon:o.attributes.icon,state:o.state},c=e=>{var t;const i=null===(t=s(e))||void 0===t?void 0:t.state;return void 0===i||"unknown"===i||"unavailable"===i?null:l(i)};for(const[e,t]of Object.entries(this.VIEW_SENSORS)){const i=s(r[t.messwert]);i&&(d[e]={max:t.grenze?c(r[`max_${t.grenze}`]):void 0,min:t.grenze?c(r[`min_${t.grenze}`]):void 0,current:l(i.state),icon:i.attributes.icon,unit_of_measurement:i.attributes.unit_of_measurement,sensor:i.entity_id})}const h={};for(const e of this.VIEW_DIAGNOSTICS){const t=s(r[e]);t&&(h[e]={entity_id:t.entity_id,current:l(t.state),icon:t.attributes.icon,unit_of_measurement:t.attributes.unit_of_measurement})}d.diagnostic_sensors=h;const u={};for(const[e,t]of Object.entries(this.VIEW_HELPERS)){const i=s(r[e]);if(!i)continue;const a=i.state,o="unknown"===a||"unavailable"===a,d={entity_id:i.entity_id,current:o?null:a,icon:i.attributes.icon,type:t};"select"===t?d.options=null!==(n=i.attributes.options)&&void 0!==n?n:[]:"number"===t&&(d.current=o?null:l(a),d.unit_of_measurement=i.attributes.unit_of_measurement,d.min=i.attributes.min,d.max=i.attributes.max,d.step=i.attributes.step),u[e]=d}return d.helpers=u,d}static getPlantEntities(e,t="all"){return Object.values(e.states).filter((e=>{if("object"!=typeof e||null===e||!("entity_id"in e)||!("attributes"in e)||"string"!=typeof e.entity_id)return!1;const i=e.entity_id.startsWith("plant."),a=e.entity_id.startsWith("cycle.")&&"member_count"in e.attributes;return"plant"===t?i:"cycle"===t?a:i||a}))}static togglePlantSelection(e,t,i){null==i||i.stopPropagation();const a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a}static clearPlantSelection(){return new Set}}t.PlantEntityUtils=i,i.TK_ALIAS={current_moisture:"soil_moisture",current_temperature:"temperature",current_conductivity:"conductivity",current_illuminance:"illuminance",current_humidity:"air_humidity",current_ph:"ph",current_ppfd:"ppfd_mol",current_power_consumption:"power_consumption",moisture_consumption:"water_consumption",total_integral:"total_ppfd_mol_integral"},i.TYPE_ALIAS={moisture:"soil_moisture",humidity:"air_humidity"},i.VIEW_SENSORS={temperature:{messwert:"current_temperature",grenze:"temperature"},illuminance:{messwert:"current_illuminance",grenze:"illuminance"},moisture:{messwert:"current_moisture",grenze:"moisture"},conductivity:{messwert:"current_conductivity",grenze:"conductivity"},humidity:{messwert:"current_humidity",grenze:"humidity"},dli:{messwert:"dli",grenze:"dli"},water_consumption:{messwert:"moisture_consumption",grenze:"water_consumption"},fertilizer_consumption:{messwert:"fertilizer_consumption",grenze:"fertilizer_consumption"},power_consumption:{messwert:"current_power_consumption",grenze:"power_consumption"},ph:{messwert:"current_ph",grenze:"ph"}},i.VIEW_DIAGNOSTICS=["energy_cost","total_power_consumption","total_integral","total_water_consumption","total_fertilizer_consumption"],i.VIEW_HELPERS={growth_phase:"select",flowering_duration:"number",pot_size:"number",water_capacity:"number",lux_to_ppfd:"number",treatment:"select",health:"number",journal:"text",location:"text",cycle:"select"}},7514:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SensorAssignmentUtils=t.DEFAULT_PLANT_PHASES=t.GROWTH_PHASES=t.SENSOR_TYPE_COLORS=t.SENSOR_TYPES=void 0;const a=i(8063);t.SENSOR_TYPES=[{key:"temperature",icon:"mdi:thermometer",matches:(e,t)=>e?"temperature"===e:"°C"===t||"°F"===t},{key:"moisture",icon:"mdi:water-percent",matches:(e,t)=>e?"moisture"===e:"%"===t},{key:"illuminance",icon:"mdi:brightness-5",matches:(e,t)=>e?"illuminance"===e:"lx"===t||"lm"===t},{key:"humidity",icon:"mdi:water",matches:(e,t)=>e?"humidity"===e:"%"===t},{key:"conductivity",icon:"mdi:flash",matches:(e,t)=>e?"conductivity"===e:"µS/cm"===t||"μS/cm"===t||"mS/cm"===t},{key:"power_consumption",icon:"mdi:power-plug",matches:(e,t)=>e?"power"===e||"energy"===e:"W"===t||"kW"===t||"kWh"===t||"Wh"===t},{key:"ph",icon:"mdi:ph",matches:(e,t)=>e?"ph"===e:"pH"===t}],t.SENSOR_TYPE_COLORS={temperature:"#e74c3c",moisture:"#16a085",illuminance:"#f1c40f",humidity:"#3498db",conductivity:"#9b59b6",power_consumption:"#e67e22",ph:"#2ecc71"},t.GROWTH_PHASES=["seeds","germination","rooting","growing","flowering","harvested","removed"],t.DEFAULT_PLANT_PHASES=t.GROWTH_PHASES.filter((e=>"removed"!==e)),t.SensorAssignmentUtils=class{static getSensorDevices(e,i){var a,n,o,r,s,l,d,c;const h=new Map;for(const[u,p]of Object.entries(e.states)){if(!u.startsWith("sensor."))continue;const m=p;if(m.attributes&&"external_sensor"in m.attributes)continue;const _=null===(a=e.entities)||void 0===a?void 0:a[u],g=null==_?void 0:_.device_id;if(g&&i.has(g))continue;if(null==_?void 0:_.entity_category)continue;if((null==_?void 0:_.hidden_by)||(null==_?void 0:_.disabled_by))continue;const v=null===(n=m.attributes)||void 0===n?void 0:n.device_class,f=null===(o=m.attributes)||void 0===o?void 0:o.unit_of_measurement,y=t.SENSOR_TYPES.filter((e=>e.matches(v,f)));if(0===y.length)continue;const b=g,w=b||u;let x=h.get(w);if(!x){const t=b?null===(r=e.devices)||void 0===r?void 0:r[b]:void 0;x={id:w,name:(null==t?void 0:t.name_by_user)||(null==t?void 0:t.name)||(null===(s=m.attributes)||void 0===s?void 0:s.friendly_name)||u,picture:null===(l=m.attributes)||void 0===l?void 0:l.entity_picture,types:{},isDevice:!!b,entityIcon:b?void 0:(null===(d=m.attributes)||void 0===d?void 0:d.icon)||y[0].icon},h.set(w,x)}!x.picture&&(null===(c=m.attributes)||void 0===c?void 0:c.entity_picture)&&(x.picture=m.attributes.entity_picture);for(const e of y)x.types[e.key]||(x.types[e.key]=u)}return Array.from(h.values()).sort(((e,t)=>e.name.localeCompare(t.name)))}static getPlantAndCycleDeviceIds(e){var t,i;const n=a.PlantEntityUtils.getPlantEntities(e,"all"),o=new Set;for(const a of n){const n=null===(i=null===(t=e.entities)||void 0===t?void 0:t[a.entity_id])||void 0===i?void 0:i.device_id;n&&o.add(n)}return o}static getPlantDevices(e){return a.PlantEntityUtils.getPlantEntities(e,"plant").map((t=>{var i,a,n,o,r;const s=null===(i=e.entities)||void 0===i?void 0:i[t.entity_id];return{entityId:t.entity_id,deviceId:null==s?void 0:s.device_id,name:(null===(a=t.attributes)||void 0===a?void 0:a.friendly_name)||t.entity_id,picture:null===(n=t.attributes)||void 0===n?void 0:n.entity_picture,strain:null===(o=t.attributes)||void 0===o?void 0:o.strain,breeder:null===(r=t.attributes)||void 0===r?void 0:r.breeder}})).sort(((e,t)=>e.name.localeCompare(t.name)))}static getPlantMeterEntities(e,i){var n,o,r,s,l;const d=a.PlantEntityUtils.buildPlantView(e,i),c={};if(!d)return{meters:c};for(const e of t.SENSOR_TYPES)c[e.key]="power_consumption"===e.key?null===(o=null===(n=d.diagnostic_sensors)||void 0===n?void 0:n.total_power_consumption)||void 0===o?void 0:o.entity_id:null===(r=d[e.key])||void 0===r?void 0:r.sensor;return{meters:c,growthPhaseEntity:null===(l=null===(s=d.helpers)||void 0===s?void 0:s.growth_phase)||void 0===l?void 0:l.entity_id}}static resolveSources(e,i){var a,n;const o=new Map;for(const[r,s]of i){const i={};for(const o of t.SENSOR_TYPES){const t=s[o.key];i[o.key]={meterEntityId:t,source:t&&(null===(n=null===(a=e.states[t])||void 0===a?void 0:a.attributes)||void 0===n?void 0:n.external_sensor)||void 0}}o.set(r,i)}return o}static fanAngles(e,t,i){if(t<=1)return[e];const a=Math.min(.45,.75*i/(t-1)),n=e-a*(t-1)/2;return Array.from({length:t},((e,t)=>n+a*t))}static buildStem(e,t,i,a,n,o,r,s){const l=e+Math.cos(n)*r,d=t+Math.sin(n)*r,c=e+Math.cos(n)*o,h=t+Math.sin(n)*o,u=i-e,p=a-t,m=Math.hypot(u,p)||1,_=i-u/m*s,g=a-p/m*s,v=(4*l-c-_)/2,f=(4*d-h-g)/2;return{path:`M ${c.toFixed(1)} ${h.toFixed(1)} Q ${v.toFixed(1)} ${f.toFixed(1)} ${_.toFixed(1)} ${g.toFixed(1)}`,iconX:l,iconY:d}}}},5546:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSourceSensors=t.SENSOR_SOURCE_TYPES=void 0,t.SENSOR_SOURCE_TYPES=[{key:"temperature",field:"temperature_sensor",label:"temperature",icon:"mdi:thermometer"},{key:"moisture",field:"moisture_sensor",label:"soil_moisture",icon:"mdi:water-percent"},{key:"conductivity",field:"conductivity_sensor",label:"conductivity",icon:"mdi:flash"},{key:"illuminance",field:"illuminance_sensor",label:"illuminance",icon:"mdi:brightness-5"},{key:"humidity",field:"humidity_sensor",label:"air_humidity",icon:"mdi:water"},{key:"ph",field:"ph_sensor",label:"ph",icon:"mdi:ph"},{key:"power_consumption",field:"power_consumption_sensor",label:"total_power_consumption",icon:"mdi:power-plug"}],t.getSourceSensors=(e,t)=>{var i;return Object.entries(null!==(i=null==e?void 0:e.states)&&void 0!==i?i:{}).filter((([e,i])=>{if(!e.startsWith("sensor."))return!1;const a=i.attributes;if(a&&"external_sensor"in a)return!1;const n=null==a?void 0:a.device_class,o=null==a?void 0:a.unit_of_measurement;switch(t){case"temperature":return"temperature"===n||"°C"===o||"°F"===o;case"moisture":return"moisture"===n||"humidity"===n&&"%"===o;case"illuminance":return"illuminance"===n||"lx"===o||"lm"===o;case"humidity":return"humidity"===n||"%"===o;case"conductivity":return"conductivity"===n||"µS/cm"===o||"μS/cm"===o||"mS/cm"===o;case"ph":return"ph"===n||"pH"===o;case"power_consumption":return"power"===n||"energy"===n||"W"===o||"kW"===o||"kWh"===o||"Wh"===o;default:return!1}})).map((([e,t])=>{var i;return{entity_id:e,name:(null===(i=t.attributes)||void 0===i?void 0:i.friendly_name)||e}}))}},8598:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SensorUtils=void 0;const a=i(5869);t.SensorUtils=class{static getSensorInfo(e,t,i){const n=(0,a.getFieldDefinition)(i),o=(0,a.getSensorMapEntity)(e,t,i);if(o)return{value:Number(o.state)||0,state:o.state,unit:(null==n?void 0:n.unit)||o.attributes.unit_of_measurement||"",min:o.attributes.min_value,max:o.attributes.max_value};if(t.attributes._apiInfo){const e=t.attributes._apiInfo,a={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(e[a]&&e[a].current)return{value:Number(e[a].current)||0,state:String(e[a].current),unit:(null==n?void 0:n.unit)||e[a].unit_of_measurement||"",min:e[a].min?Number(e[a].min):null,max:e[a].max?Number(e[a].max):null};if(e.diagnostic_sensors&&e.diagnostic_sensors[a]&&e.diagnostic_sensors[a].current)return{value:Number(e.diagnostic_sensors[a].current)||0,state:String(e.diagnostic_sensors[a].current),unit:(null==n?void 0:n.unit)||e.diagnostic_sensors[a].unit_of_measurement||"",min:null,max:null}}return{value:0,state:"N/A",unit:(null==n?void 0:n.unit)||"",min:null,max:null}}static getSensorRange(e,t,i){const n=(0,a.getFieldDefinition)(i);return{min:null,max:null,unit:(null==n?void 0:n.unit)||""}}static getSensorThresholds(e,t,i){var n,o,r;const s=(0,a.getSensorMapEntityId)(e,t,`min_${i}`),l=(0,a.getSensorMapEntityId)(e,t,`max_${i}`);if(s&&l&&void 0!==(null===(n=e.states[s])||void 0===n?void 0:n.state)&&"unavailable"!==(null===(o=e.states[s])||void 0===o?void 0:o.state)&&"unavailable"!==(null===(r=e.states[l])||void 0===r?void 0:r.state))return{min:Number(e.states[s].state)||0,max:Number(e.states[l].state)||100};if(t.attributes._apiInfo){const e=t.attributes._apiInfo,a={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(e[a]&&void 0!==e[a].min&&void 0!==e[a].max)return{min:Number(e[a].min)||0,max:Number(e[a].max)||100}}return{min:0,max:100}}static isSensorColumn(e){return(0,a.isSensorField)(e)}static calculateSensorStatus(e,t,i){return isNaN(e)?"unavailable":e>=t&&e<=i?"good":"bad"}}},3048:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SortUtils=void 0;const a=i(5869);t.SortUtils=class{static getSortedPlants(e,t,i,n){return[...e].sort(((e,o)=>{const r=(0,a.getFieldValue)(t,n,e),s=(0,a.getFieldValue)(t,n,o);if("number"==typeof r&&"number"==typeof s)return"asc"===i?r-s:s-r;const l=String(r).toLowerCase(),d=String(s).toLowerCase();return"asc"===i?l.localeCompare(d):d.localeCompare(l)}))}}},93:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSpring=function(e=0,t=0){return{x:e,y:t,vx:0,vy:0}},t.stepSpring=function(e,t,i,a,n=190,o=20){const r=Math.min(a,.05);e.vx+=((t-e.x)*n-e.vx*o)*r,e.vy+=((i-e.y)*n-e.vy*o)*r,e.x+=e.vx*r,e.y+=e.vy*r},t.settleSpring=function(e,t,i){e.x=t,e.y=i,e.vx=0,e.vy=0},t.isSettled=function(e,t,i){return Math.abs(e.vx)<.4&&Math.abs(e.vy)<.4&&Math.abs(e.x-t)<.4&&Math.abs(e.y-i)<.4}},7361:function(e,t,i){var a=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.StateManager=void 0;const n=i(9442),o=i(1322),r=i(289),s=i(5869);t.StateManager=class{constructor(e,t,i){this.hass=e,this.config=t,this.requestUpdate=i,this.state=this.getInitialState()}getConfiguredFilters(){var e,t;const i=null===(t=null===(e=this.config)||void 0===e?void 0:e.filter)||void 0===t?void 0:t.filters;if(!i)return{};const a={};for(const[e,t]of Object.entries(i))Array.isArray(t)?t.length>0&&(a[e]=new Set(t)):t&&"object"==typeof t&&(a[e]=t);return a}getInitialState(){return{sortColumn:"friendly_name",sortDirection:"asc",editingCell:null,searchQuery:"",multiSelectMode:!1,selectedPlants:new Set,filterMode:!1,filterState:{activeFilters:this.getConfiguredFilters(),entityTypes:new Set(["plant","cycle"])},showGallery:!1,galleryEntityId:null,galleryImages:[]}}getState(){return this.state}updateConfig(e){this.config=e}updateHass(e){this.hass=e}handleSort(e){this.state.sortColumn===e?this.state.sortDirection="asc"===this.state.sortDirection?"desc":"asc":(this.state.sortColumn=e,this.state.sortDirection="asc"),this.requestUpdate()}handleCellClick(e,t,i,a){switch(e.stopPropagation(),this.state.multiSelectMode&&0===this.state.selectedPlants.size&&this.state.selectedPlants.add(t.entity_id),r.CellTypeUtils.getClickAction(i)){case"edit":this.state.editingCell={entityId:t.entity_id,column:i};break;case"more-info":{let e=t.entity_id;if((0,s.isSensorField)(i)){const a=(0,s.getSensorMapEntityId)(this.hass,t,i);a&&(e=a)}a(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}));break}}this.requestUpdate()}handleRowClick(e,t,i,a){e.stopPropagation(),this.handleCellClick(e,t,i,a)}handleSearch(e){o.EventUtils.handleSearch(e,(e=>{this.state.searchQuery=e,this.requestUpdate()}))}handleInputUpdate(e,t,i,n){return a(this,void 0,void 0,(function*(){yield o.EventUtils.handleInputUpdate(e,{hass:this.hass,plant:t,columnId:i,multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}},n)}))}handleAreaUpdate(e,t){return a(this,void 0,void 0,(function*(){yield o.EventUtils.handleAreaUpdate(e,{hass:this.hass,plant:t,columnId:"area",multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}})}))}toggleMultiSelect(){this.state.multiSelectMode=!this.state.multiSelectMode,this.state.multiSelectMode||this.state.selectedPlants.clear(),this.requestUpdate()}togglePlantSelection(e,t){t.preventDefault(),t.stopPropagation(),this.state.selectedPlants.has(e)?this.state.selectedPlants.delete(e):this.state.selectedPlants.add(e),this.sendEntitySelectedEvent(),this.requestUpdate()}sendEntitySelectedEvent(){var e;if(!(null===(e=this.config)||void 0===e?void 0:e.identifier))return;if(0===this.state.selectedPlants.size){const e=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:null,selectedEntities:[]}});return void window.dispatchEvent(e)}const t=Array.from(this.state.selectedPlants),i=t[t.length-1];if(!i||!this.hass.states[i])return;const a=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:i,selectedEntities:t}});window.dispatchEvent(a)}toggleFilterMode(){this.state.filterMode=!this.state.filterMode,this.requestUpdate()}toggleFilter(e,t){n.FilterUtils.toggleFilter(e,t,this.state.filterState),this.requestUpdate()}toggleEntityType(e){n.FilterUtils.toggleEntityType(e,this.state.filterState),this.requestUpdate()}getCursorStyle(e){return r.CellTypeUtils.getCursorStyle(e)}clearSearch(){this.state.searchQuery="",this.requestUpdate()}handleGalleryOpen(e){return a(this,void 0,void 0,(function*(){if(!this.hass)return;const t=this.hass.states[e];if(!t)return;const i=[];if(t.attributes.entity_picture&&i.push(t.attributes.entity_picture),t.attributes.images&&Array.isArray(t.attributes.images)){const e=t.attributes.download_path||"/local/images/plants/";t.attributes.images.forEach((t=>{i.push(`${e}${t}`)}))}this.state.showGallery=!0,this.state.galleryEntityId=e,this.state.galleryImages=i,this.requestUpdate()}))}closeGallery(){this.state.showGallery=!1,this.state.galleryEntityId=null,this.requestUpdate()}}},70:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateUtils=void 0;const a=i(4437),n=i(8598),o=i(5869),r=i(2413);t.TemplateUtils=class{static renderDateInput(e,t){return a.html`
            <input
                type="date"
                .value="${(null==e?void 0:e.split(/[T ]/)[0])||""}"
                @change=${e=>t.onInput(e,"date")}
                @click=${e=>e.stopPropagation()}
                class="date-input"
            >
        `}static renderNumberInput(e,t,i,n=.1){var r,s;const l=(0,o.getFieldDefinition)(i.columnId);return a.html`
            <input
                type="number"
                step="${(null===(r=null==l?void 0:l.validation)||void 0===r?void 0:r.step)||n}"
                min="${(null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.min)||0}"
                .value="${e||""}"
                @keydown=${e=>i.onInput(e,"number")}
                @click=${e=>e.stopPropagation()}
                class="numeric-input"
            > ${(null==l?void 0:l.unit)||t}
        `}static renderSelectInput(e,t,i,n){const r=(0,o.getFieldDefinition)(i.columnId),s=(null==r?void 0:r.options)?r.options(i.hass,i.plant):t;return a.html`
            <select
                @change=${e=>i.onInput(e,"select")}
                @click=${e=>e.stopPropagation()}
                class="${n}"
            >
                ${s.map((t=>a.html`
                    <option value="${t}" ?selected=${t===e}>
                        ${t}
                    </option>
                `))}
            </select>
        `}static renderTextInput(e,t,i=!1){return i?a.html`
                <textarea
                    .value="${e||""}"
                    @keydown=${e=>t.onInput(e,"text")}
                    @click=${e=>e.stopPropagation()}
                    class="notes-textarea"
                ></textarea>
            `:a.html`
            <input
                type="text"
                .value="${e||""}"
                @keydown=${e=>t.onInput(e,"text")}
                @click=${e=>e.stopPropagation()}
                class="text-input"
            >
        `}static renderSensorCell(e){const{hass:t,plant:i,columnId:o}=e,r=n.SensorUtils.getSensorInfo(t,i,o),s=n.SensorUtils.getSensorThresholds(t,i,o),l=100*Math.max(0,Math.min(1,(r.value-s.min)/(s.max-s.min))),d=n.SensorUtils.calculateSensorStatus(r.value,s.min,s.max);return a.html`
            <div class="sensor-cell" @click=${e.onClick}>
                <div class="meter-container">
                    <div class="meter red">
                        <span class="${d}" style="width: 100%;"></span>
                    </div>
                    <div class="meter green">
                        <span class="${d}" style="width:${"unavailable"!==d?l:"0"}%;"></span>
                    </div>
                    <div class="meter red">
                        <span class="bad" style="width:${"unavailable"!==d&&r.value>s.max?100:0}%;"></span>
                    </div>
                </div>
                <div class="sensor-value">
                    ${r.value} ${r.unit}
                </div>
            </div>
        `}static renderBadge(e,t,i){const n={status:`status-badge ${(null==e?void 0:e.toLowerCase())||""}`,phase:"phase-badge",cycle:"cycle-badge",area:"area-badge"};return a.html`
            <div class="${n[i]}" @click=${t.onClick}>
                ${e||"-"}
            </div>
        `}static renderWebsiteCell(e,t,i){return i?this.renderTextInput(e,t):a.html`
            <div class="website-container">
                <span class="website-text text-ellipsis" @click=${t.onClick}>
                    ${e||"-"}
                </span>
                ${e?a.html`
                    <ha-icon-button
                        .label=${r.TranslationUtils.translateUI(t.hass,"open")}
                        @click=${t=>{t.stopPropagation(),window.open(e,"_blank")}}
                        class="website-icon-button"
                    >
                        <ha-icon icon="mdi:open-in-new" class="website-icon"></ha-icon>
                    </ha-icon-button>
                `:""}
            </div>
        `}static renderPlantName(e,t,i){return a.html`
            <div class="plant-name">
                ${t?a.html`
                    <img src="${t}" alt="${e}" @click="${e=>{e.stopPropagation();const t=new CustomEvent("flower-image-click",{detail:{entityId:i.plant.entity_id},bubbles:!0,composed:!0});e.target.dispatchEvent(t),i.onClick(e)}}">
                `:a.html`
                    <div class="plant-icon">
                        <ha-icon icon="mdi:flower"></ha-icon>
                    </div>
                `}
                ${e}
            </div>
        `}}},2413:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TranslationUtils=void 0;const n=a(i(4944)),o=a(i(4300)),r=a(i(3099)),s=a(i(4055)),l=a(i(4668)),d=a(i(9538)),c=a(i(277)),h=a(i(1119)),u=a(i(6679)),p=a(i(6958)),m=a(i(5661)),_={de:n.default,en:o.default,es:r.default,fr:s.default,hu:l.default,it:d.default,nl:c.default,pl:h.default,pt:u.default,ru:p.default,zh:m.default};t.TranslationUtils=class{static getLanguage(e){return e.language||"en"}static getBundle(e){var t,i;return null!==(i=null!==(t=_[e])&&void 0!==t?t:_.en)&&void 0!==i?i:{}}static getTranslation(e,t){const i=this.getLanguage(e),a=this.getTranslationFromObject(this.getBundle(i),t);return a!==t||"en"===i?a:this.getTranslationFromObject(this.getBundle("en"),t)}static getTranslationFromObject(e,t){const i=t.split(".");let a=e;for(const e of i){if(!a||"object"!=typeof a||!(e in a))return t;a=a[e]}return"string"==typeof a?a:t}static translateField(e,t){return this.getTranslation(e,`frontend.fields.${t}`)}static translateSensor(e,t){return this.getTranslation(e,`frontend.sensors.${t}`)}static translateGrowthPhase(e,t){return this.getTranslation(e,`frontend.growth_phases.${t}`)}static translateTreatment(e,t){return this.getTranslation(e,`frontend.treatments.${t}`)}static translateDiagnostics(e,t){return this.getTranslation(e,`frontend.sensors.${t}`)}static translateUI(e,t){return this.getTranslation(e,`frontend.ui.${t}`)}static translateListCard(e,t){return this.getTranslation(e,`frontend.list_card.${t}`)}static translateHistory(e,t){return this.getTranslation(e,`frontend.history.${t}`)}static translate(e,t){return this.getTranslation(e,t)}static translateHelper(e,t){return this.getTranslation(e,`frontend.helpers.${t}`)}static createSensorTooltip(e,t,i,a,n,o){const r=this.translateSensor(e,t),s=this.translateUI(e,"tooltip_min_max");return o?`${r}: ${i} ${o}<br>(${s}: ${a} ~ ${n} ${o})`:`${r}: ${i}<br>(${s}: ${a} ~ ${n})`}}},2135:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.moreInfo=t.getStubConfig=t.getConfigElement=void 0;const a=i(4356),n=i(4139);t.getConfigElement=()=>document.createElement("brokkoli-card-editor"),t.getStubConfig=e=>{const t=e=>{if("object"==typeof e&&"entity_id"in e&&"string"==typeof e.entity_id&&0===e.entity_id.indexOf("plant."))return!!e};let i=[];try{i=Object.values(e.states).filter(t)}catch(e){console.info(`Unable to get ha-data: ${e}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:n.default_show_bars}},t.moreInfo=(e,t)=>{(0,a.fireEvent)(e,"hass-more-info",{entityId:t},{bubbles:!1,composed:!0})}},7804:(e,t,i)=>{i.d(t,{OA:()=>a,WL:()=>o,u$:()=>n});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},6752:(e,t,i)=>{var a;i.d(t,{JW:()=>z,XX:()=>V,c0:()=>E,ge:()=>G,qy:()=>$,s6:()=>C});const n=window,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,d="?"+l,c=`<${d}>`,h=document,u=()=>h.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,m=Array.isArray,_=e=>m(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),g="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,y=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,k=/^(?:script|style|textarea|title)$/i,S=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=S(1),z=S(2),E=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),I=new WeakMap,M=h.createTreeWalker(h,129,null,!1);function P(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(t):t}const D=(e,t)=>{const i=e.length-1,a=[];let n,o=2===t?"<svg>":"",r=v;for(let t=0;t<i;t++){const i=e[t];let d,h,u=-1,p=0;for(;p<i.length&&(r.lastIndex=p,h=r.exec(i),null!==h);)p=r.lastIndex,r===v?"!--"===h[1]?r=f:void 0!==h[1]?r=y:void 0!==h[2]?(k.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=b):void 0!==h[3]&&(r=b):r===b?">"===h[0]?(r=null!=n?n:v,u=-1):void 0===h[1]?u=-2:(u=r.lastIndex-h[2].length,d=h[1],r=void 0===h[3]?b:'"'===h[3]?x:w):r===x||r===w?r=b:r===f||r===y?r=v:(r=b,n=void 0);const m=r===b&&e[t+1].startsWith("/>")?" ":"";o+=r===v?i+c:u>=0?(a.push(d),i.slice(0,u)+s+i.slice(u)+l+m):i+l+(-2===u?(a.push(void 0),t):m)}return[P(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),a]};class T{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0;const c=e.length-1,h=this.parts,[p,m]=D(e,t);if(this.el=T.createElement(p,i),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=M.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith(s)||t.startsWith(l)){const i=m[r++];if(e.push(t),void 0!==i){const e=a.getAttribute(i.toLowerCase()+s).split(l),t=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?U:"?"===t[1]?N:"@"===t[1]?R:j})}else h.push({type:6,index:n})}for(const t of e)a.removeAttribute(t)}if(k.test(a.tagName)){const e=a.textContent.split(l),t=e.length-1;if(t>0){a.textContent=o?o.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],u()),M.nextNode(),h.push({type:2,index:++n});a.append(e[t],u())}}}else if(8===a.nodeType)if(a.data===d)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(l,e+1));)h.push({type:7,index:n}),e+=l.length-1}n++}}static createElement(e,t){const i=h.createElement("template");return i.innerHTML=e,i}}function A(e,t,i=e,a){var n,o,r,s;if(t===E)return t;let l=void 0!==a?null===(n=i._$Co)||void 0===n?void 0:n[a]:i._$Cl;const d=p(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,a)),void 0!==a?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[a]=l:i._$Cl=l),void 0!==l&&(t=A(e,l._$AS(e,t.values),l,a)),t}class F{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:a}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:h).importNode(i,!0);M.currentNode=n;let o=M.nextNode(),r=0,s=0,l=a[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new O(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new H(o,this,e)),this._$AV.push(t),l=a[++s]}r!==(null==l?void 0:l.index)&&(o=M.nextNode(),r++)}return M.currentNode=h,n}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class O{constructor(e,t,i,a){var n;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cp=null===(n=null==a?void 0:a.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),p(e)?e===C||null==e||""===e?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&p(this._$AH)?this._$AA.nextSibling.data=e:this.$(h.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:a}=e,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=T.createElement(P(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(i);else{const e=new F(n,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new T(e)),t}T(e){m(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new O(this.k(u()),this.k(u()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class j{constructor(e,t,i,a,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const n=this.strings;let o=!1;if(void 0===n)e=A(this,e,t,0),o=!p(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const a=e;let r,s;for(e=n[0],r=0;r<n.length-1;r++)s=A(this,a[i+r],t,r),s===E&&(s=this._$AH[r]),o||(o=!p(s)||s!==this._$AH[r]),s===C?e=C:e!==C&&(e+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class U extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}const L=o?o.emptyScript:"";class N extends j{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class R extends j{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=A(this,e,t,0))&&void 0!==i?i:C)===E)return;const a=this._$AH,n=e===C&&a!==C||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==C&&(a===C||n);n&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class H{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const G={O:s,P:l,A:d,C:1,M:D,L:F,R:_,D:A,I:O,V:j,H:N,N:R,U,F:H},B=n.litHtmlPolyfillSupport;null==B||B(T,O),(null!==(a=n.litHtmlVersions)&&void 0!==a?a:n.litHtmlVersions=[]).push("2.8.0");const V=(e,t,i)=>{var a,n;const o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t;let r=o._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new O(t.insertBefore(u(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r}},2924:(e,t,i)=>{i.r(t),i.d(t,{customElement:()=>a,eventOptions:()=>d,property:()=>r,query:()=>c,queryAll:()=>h,queryAssignedElements:()=>_,queryAssignedNodes:()=>g,queryAsync:()=>u,state:()=>s});const a=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(t){customElements.define(e,t)}}})(e,t),n=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},o=(e,t,i)=>{t.constructor.createProperty(i,e)};function r(e){return(t,i)=>void 0!==i?o(e,t,i):n(e,t)}function s(e){return r({...e,state:!0})}const l=({finisher:e,descriptor:t})=>(i,a)=>{var n;if(void 0===a){const a=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=t?{kind:"method",placement:"prototype",key:a,descriptor:t(i.key)}:{...i,key:a};return null!=e&&(o.finisher=function(t){e(t,a)}),o}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,a,t(a)),null==e||e(n,a)}};function d(e){return l({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}function c(e,t){return l({descriptor:i=>{const a={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;a.get=function(){var i,a;return void 0===this[t]&&(this[t]=null!==(a=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==a?a:null),this[t]}}return a}})}function h(e){return l({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(e){return l({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}var p;const m=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function _(e){const{slot:t,selector:i}=null!=e?e:{};return l({descriptor:a=>({get(){var a;const n="slot"+(t?`[name=${t}]`:":not([name])"),o=null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(n),r=null!=o?m(o,e):[];return i?r.filter((e=>e.matches(i))):r},enumerable:!0,configurable:!0})})}function g(e,t,i){let a,n=e;return"object"==typeof e?(n=e.slot,a=e):a={flatten:t},i?_({slot:n,flatten:t,selector:i}):l({descriptor:e=>({get(){var e,t;const i="slot"+(n?`[name=${n}]`:":not([name])"),o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i);return null!==(t=null==o?void 0:o.assignedNodes(a))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}},1145:(e,t,i)=>{i.r(t),i.d(t,{styleMap:()=>s});var a=i(6752),n=i(7804);const o="important",r=" !"+o,s=(0,n.u$)(class extends n.WL{constructor(e){var t;if(super(e),e.type!==n.OA.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const a=t[e];if(null!=a){this.ht.add(e);const t="string"==typeof a&&a.endsWith(r);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?o:""):i[e]=a}}return a.c0}})},6781:(e,t,i)=>{i.r(t),i.d(t,{UnsafeHTMLDirective:()=>o,unsafeHTML:()=>r});var a=i(6752),n=i(7804);class o extends n.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.ft=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const r=(0,n.u$)(o)},4437:(e,t,i)=>{i.r(t),i.d(t,{CSSResult:()=>s,LitElement:()=>z,ReactiveElement:()=>w,UpdatingElement:()=>$,_$LE:()=>C,_$LH:()=>S.ge,adoptStyles:()=>c,css:()=>d,defaultConverter:()=>v,getCompatibleStyle:()=>h,html:()=>S.qy,isServer:()=>I,noChange:()=>S.c0,notEqual:()=>f,nothing:()=>S.s6,render:()=>S.XX,supportsAdoptingStyleSheets:()=>n,svg:()=>S.JW,unsafeCSS:()=>l});const a=window,n=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new s("string"==typeof e?e:e+"",void 0,o),d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new s(i,e,o)},c=(e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=a.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))},h=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return l(t)})(e):e;var u;const p=window,m=p.trustedTypes,_=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},f=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f},b="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const a=this._$Ep(i,t);void 0!==a&&(this._$Ev.set(a,i),e.push(a))})),e}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const n=this[e];this[t]=a,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=y){var a;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:v).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const a=this.constructor,n=a._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=a.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:v;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||f)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}w[b]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:w}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");var x,k,S=i(6752);const $=w;class z extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,S.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return S.c0}}z.finalized=!0,z._$litElement$=!0,null===(x=globalThis.litElementHydrateSupport)||void 0===x||x.call(globalThis,{LitElement:z});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:z});const C={_$AK:(e,t,i)=>{e._$AK(t,i)},_$AL:e=>e._$AL};(null!==(k=globalThis.litElementVersions)&&void 0!==k?k:globalThis.litElementVersions=[]).push("3.3.3");const I=!1},8330:e=>{e.exports=JSON.parse('{"name":"brokkoli-card","version":"2026.9.8","description":"A Lovelace brokkoli card for Home Assistant","main":"brokkoli-card.js","repository":{"type":"git","url":"git+ssh://git@github.com/Olen/lovelace-brokkoli-card.git"},"author":"Ola Bjorling Erdal <ola@bjorling.se>","license":"MIT","scripts":{"build":"webpack -c webpack.config.js","lint":"eslint src/**/*.ts","watch":"webpack -c webpack.config.js --watch --mode=development"},"dependencies":{"@mdi/js":"^7.4.47","custom-card-helpers":"^1.9.0","flatpickr":"^4.6.13","home-assistant-js-websocket":"^9.4.0","lit":"^2.8.0","lit-element":"^2.5.1"},"devDependencies":{"@babel/core":"^7.26.0","@babel/preset-env":"^7.26.0","@babel/preset-typescript":"^7.26.0","@types/node":"^20.11.30","@typescript-eslint/eslint-plugin":"^8.19.1","babel-loader":"^9.1.3","compression-webpack-plugin":"^11.1.0","copy-webpack-plugin":"^13.0.0","css-loader":"^7.1.2","eslint":"^8.57.0","style-loader":"^4.0.0","ts-loader":"^9.5.2","typescript":"^5.7.3","webpack":"^5.97.1","webpack-cli":"^5.1.4","apexcharts":"^4.4.0"},"keywords":[],"bugs":{"url":"https://github.com/Olen/lovelace-brokkoli-card/issues"},"homepage":"https://github.com/Olen/lovelace-brokkoli-card#readme"}')},4944:e=>{e.exports=JSON.parse('{"frontend":{"ui":{"entity_not_available":"Entität nicht verfügbar","no_data":"Keine Daten verfügbar","error":"Fehler","define_entity":"Sie müssen eine Entität definieren","loading":"Wird geladen...","unknown_state":"Unbekannter Zustand","name":"Name","status":"Status","area":"Bereich","config_error_entity_required":"Du musst entweder eine Entity oder listen_to definieren","unavailable":"Nicht verfügbar","plants_count":"Plants","plants_selected":"Plants ausgewählt","no_plants_found":"Keine Pflanzen gefunden","entity_not_found":"Entity nicht gefunden","return_to_cycle":"Zurück zum Cycle","entity_unavailable":"Entity nicht verfügbar","no_entity_configured":"Keine Entity oder listen_to konfiguriert","area_config_error":"Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren","days":"Tage","members":"Mitglieder","open":"Öffnen","photo_taken_on":"Foto aufgenommen am","previous_image":"Vorheriges Bild","next_image":"Nächstes Bild","unknown_date":"Datum unbekannt","no_completed_phases":"Noch keine abgeschlossenen Phasen verfügbar","harvest_date":"Ernte am","harvest_weight":"Erntegewicht","harvest_notes":"Ernte-Notizen","treatment_description":"Behandlung durchgeführt","pot_size_changed":"Topfgröße geändert auf","moved_to_area":"Umzug nach","legend_primary_color":"Primärfarbe","legend_secondary_color":"Sekundärfarbe","legend_opacity":"Deckkraft","legend_rings_mode":"Ringe-Modus","legend_labels_mode":"Labels-Modus","legend_heatmap_mode":"Heatmap-Modus","confirm":"Bestätigen","tooltip_error":"Fehler beim Laden der Daten","tooltip_range":"Bereich","tooltip_mean":"Mittelwert","tooltip_min_max":"Min - Max","day":"Tag","days_since_planting":"Tage seit Pflanzung","upload_images_only":"Bitte nur Bilder hochladen!","image_too_large":"Bild ist zu groß! Maximale Größe ist 10MB.","upload_error":"Fehler beim Upload","delete_image_error":"Fehler beim Löschen des Bildes","set_main_image_error":"Fehler beim Setzen des Hauptbildes","delete_error":"Fehler beim Löschen","add_image":"Bild hinzufügen","set_as_main_image":"Als Hauptbild setzen","delete_image":"Bild löschen","close":"Schließen","no_images_available":"Keine Bilder vorhanden","click_camera_to_add_image":"Klicke auf das Kamera-Symbol oben, um ein Bild hinzuzufügen","clone_plant":"Pflanze klonen","move_to_cycle":"Zu Zyklus verschieben","replace_sensors":"Sensoren ersetzen","delete_plant":"Pflanze löschen","select_cycle":"Zyklus auswählen","please_select":"Bitte wählen...","move":"Verschieben","cancel":"Abbrechen","clone":"Klonen","delete_plant_confirmation":"Möchten Sie diese Pflanze wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.","confirm_delete":"Löschen bestätigen","no_matching_sensors":"Keine passenden Sensoren gefunden","other_images":"Andere Bilder","back_to_main_images":"Zurück zu Hauptbildern","main_images":"Hauptbilder","legend_rings_mode_active":"Modus: Ringe (Klick wechselt)","legend_labels_mode_active":"Modus: Labels (Klick wechselt)","legend_heatmap_mode_active":"Modus: Heatmap (Klick wechselt)","flowering_past":"Bisherige Blüte","flowering_to_go":"Restliche Blüte","plant_emoji_hint":"Eine große Auswahl findest du auf [emojipedia.org](https://emojipedia.org)","create_plant":"Pflanze erstellen","create":"Erstellen","no_sensor":"Keiner","edit":"Bearbeiten","save":"Speichern","legend_collapsed_mode_active":"Modus: Eingeklappt (Klick wechselt)","delete_selected":"Ausgewählte löschen","area_edit_mode_on":"Verschieben aktiv - Klick beendet den Bearbeiten-Modus","area_edit_mode_off":"Ansicht - Klick aktiviert Verschieben und Mehrfachauswahl"},"fields":{"friendly_name":"Name","state":"Status","area":"Bereich","growth_phase":"Wachstumsphase","cycle":"Durchgang","pot_size":"Topfgröße","flowering_duration":"Blütezeit","strain":"Sorte","breeder":"Züchter","feminized":"Feminisiert","original_flowering_duration":"Original Blütezeit","timestamp":"Zeitstempel","difficulty":"Schwierigkeit","yield":"Ertrag","mold_resistance":"Schimmelresistenz","hunger":"Hunger","effects":"Effekte","smell":"Geruch","taste":"Geschmack","phenotype":"Phänotyp","growth_stretch":"Wachstumsdehnung","flower_stretch":"Blütendehnung","notes":"Notizen","website":"Website","lineage":"Abstammung","infotext1":"Infotext 1","infotext2":"Infotext 2","min_soil_moisture":"Min. Bodenfeuchtigkeit","max_soil_moisture":"Max. Bodenfeuchtigkeit","min_temperature":"Min. Temperatur","max_temperature":"Max. Temperatur","min_conductivity":"Min. Leitfähigkeit","max_conductivity":"Max. Leitfähigkeit","min_illuminance":"Min. Beleuchtungsstärke","max_illuminance":"Max. Beleuchtungsstärke","min_air_humidity":"Min. Luftfeuchtigkeit","max_air_humidity":"Max. Luftfeuchtigkeit","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Wasserverbrauch","max_water_consumption":"Max. Wasserverbrauch","min_fertilizer_consumption":"Min. Düngerverbrauch","max_fertilizer_consumption":"Max. Düngerverbrauch","min_ph":"Min. pH-Wert","max_ph":"Max. pH-Wert","seeds_start":"Samen Start","germination_start":"Keimen Start","rooting_start":"Wurzeln Start","growing_start":"Wachstum Start","flowering_start":"Blüte Start","harvested_date":"Geerntet am","removed_date":"Entfernt am","seeds_duration":"Samen Dauer","germination_duration":"Keimen Dauer","rooting_duration":"Wurzeln Dauer","growing_duration":"Wachstum Dauer","flower_duration":"Blüte Dauer","harvested_duration":"Geerntet Dauer","removed_duration":"Entfernt Dauer","plant_emoji":"Icon"},"sensors":{"temperature":"Temperatur","soil_moisture":"Bodenfeuchtigkeit","moisture":"Bodenfeuchtigkeit","conductivity":"Leitfähigkeit","illuminance":"Beleuchtungsstärke","air_humidity":"Luftfeuchtigkeit","humidity":"Luftfeuchtigkeit","dli":"Tägliche Lichtintegral","water_consumption":"Wasserverbrauch","fertilizer_consumption":"Düngerverbrauch","power_consumption":"Stromverbrauch","total_water_consumption":"Gesamter Wasserverbrauch","total_fertilizer_consumption":"Gesamter Düngerverbrauch","total_power_consumption":"Gesamter Stromverbrauch","ph":"pH-Wert","health":"Gesundheit","ppfd_mol":"PPFD","total_ppfd":"Gesamt PPFD","total_ppfd_mol_integral":"Gesamt PPFD","total_integral":"Gesamtintegral","energy_cost":"Energiekosten"},"growth_phases":{"seeds":"Samen","germination":"Keimen","rooting":"Wurzeln","growing":"Wachstum","flowering":"Blüte","harvested":"Geerntet","removed":"Entfernt"},"treatments":{"":"Keine","cut":"Schneiden","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Schädlingsbekämpfung","spray water":"Bewässerung"},"history":{"days":"Tage","pot_size_placeholder":"Topfgröße in Liter...","please_select":"Bitte wählen...","cut":"Schneiden","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Schädlingsbekämpfung","spray_water":"Bewässerung","growth_phase":"Wachstumsphase","area":"Bereich","pot_size":"Topfgröße","treatment":"Behandlung","journal":"Journal","add_entry":"Eintrag hinzufügen","image_taken":"Bild aufgenommen","photo":"Foto","phase_started":"Phase gestartet","pot_size_changed":"Topfgröße geändert","moved_to":"Umgezogen nach","harvest":"Ernte","expected_harvest_date":"Erwartetes Erntedatum","journal_placeholder":"Journal-Eintrag..."},"list_card":{"title":"Brokkoli List Card","description":"Eine tabellarische Übersicht aller Pflanzen","plant_overview":"Pflanzenübersicht","search_placeholder":"Suche nach Pflanzen...","filter_close":"Filter schließen","filter":"Filter","multiselect_end":"Mehrfachauswahl beenden","multiselect":"Mehrfachauswahl","search_reset":"Suche zurücksetzen","search_default":"Suche...","entity_type":"Entity Typ","plants":"Pflanzen","cycles":"Cycles","filter_range_to":"bis","add_plant":"Neue Pflanze hinzufügen"},"helpers":{"growth_phase":"Wachstumsphase","flowering_duration":"Blütedauer","pot_size":"Topfgröße","water_capacity":"Wasserkapazität","treatment":"Behandlung","health":"Gesundheit","journal":"Journal","location":"Standort","cycle":"Zyklus"}}}')},4300:e=>{e.exports=JSON.parse('{"frontend":{"ui":{"unavailable":"Unavailable","config_error_entity_required":"You must define either an entity or listen_to","area_config_error":"You must define at least an area, an entity, or a list of entities","plants_count":"Plants","return_to_cycle":"Return to Cycle","previous_image":"Previous Image","next_image":"Next Image","unknown_date":"Unknown Date","tooltip_error":"Error","tooltip_range":"Range","tooltip_mean":"Mean","tooltip_min_max":"Min - Max","day":"Day","days_since_planting":"Days Since Planting","upload_images_only":"Please upload images only!","image_too_large":"Image too large! Maximum size is 10MB.","upload_error":"Upload Error","delete_image_error":"Error deleting image","set_main_image_error":"Error setting main image","delete_error":"Error deleting","add_image":"Add Image","set_as_main_image":"Set as Main Image","delete_image":"Delete Image","close":"Close","no_images_available":"No images available","click_camera_to_add_image":"Click the camera icon above to add an image","clone_plant":"Clone Plant","move_to_cycle":"Move to Cycle","replace_sensors":"Replace Sensors","delete_plant":"Delete Plant","select_cycle":"Select Cycle","please_select":"Please select...","move":"Move","cancel":"Cancel","clone":"Clone","delete_plant_confirmation":"Do you really want to delete this plant? This action cannot be undone.","confirm_delete":"Confirm Delete","no_matching_sensors":"No matching sensors found","other_images":"Other Images","back_to_main_images":"Back to Main Images","main_images":"Main Images","legend_rings_mode_active":"Mode: Rings (click to switch)","legend_labels_mode_active":"Mode: Labels (click to switch)","legend_heatmap_mode_active":"Mode: Heatmap (click to switch)","flowering_past":"Flowering past","flowering_to_go":"Flowering remaining","days":"Days","plant_emoji_hint":"Find a large selection at [emojipedia.org](https://emojipedia.org)","create_plant":"Create Plant","create":"Create","no_sensor":"None","entity_not_available":"Entity not available","no_data":"No data available","error":"Error","define_entity":"You must define an entity","loading":"Loading...","unknown_state":"Unknown state","name":"Name","status":"Status","area":"Area","plants_selected":"Plants selected","no_plants_found":"No plants found","entity_not_found":"Entity not found","entity_unavailable":"Entity not available","no_entity_configured":"No entity or listen_to configured","members":"Members","open":"Open","photo_taken_on":"Photo taken on","no_completed_phases":"No completed phases yet","harvest_date":"Harvested on","harvest_weight":"Harvest weight","harvest_notes":"Harvest notes","treatment_description":"Treatment applied","pot_size_changed":"Pot size changed to","moved_to_area":"Moved to","legend_primary_color":"Primary color","legend_secondary_color":"Secondary color","legend_opacity":"Opacity","legend_rings_mode":"Rings mode","legend_labels_mode":"Labels mode","legend_heatmap_mode":"Heatmap mode","confirm":"Confirm","edit":"Edit","save":"Save","legend_collapsed_mode_active":"Mode: Collapsed (click to switch)","delete_selected":"Delete selected","area_edit_mode_on":"Move mode on - click to leave edit mode","area_edit_mode_off":"View mode - click to enable moving and multi-select"},"fields":{"friendly_name":"Name","state":"State","area":"Area","growth_phase":"Growth Phase","cycle":"Cycle","pot_size":"Pot Size","flowering_duration":"Flowering Duration","strain":"Strain","breeder":"Breeder","feminized":"Feminized","original_flowering_duration":"Original Flowering Duration","timestamp":"Timestamp","difficulty":"Difficulty","yield":"Yield","mold_resistance":"Mold Resistance","hunger":"Hunger","effects":"Effects","smell":"Smell","taste":"Taste","phenotype":"Phenotype","growth_stretch":"Growth Stretch","flower_stretch":"Flower Stretch","notes":"Notes","website":"Website","lineage":"Lineage","infotext1":"Info Text 1","infotext2":"Info Text 2","min_soil_moisture":"Min. Soil Moisture","max_soil_moisture":"Max. Soil Moisture","min_temperature":"Min. Temperature","max_temperature":"Max. Temperature","min_conductivity":"Min. Conductivity","max_conductivity":"Max. Conductivity","min_illuminance":"Min. Illuminance","max_illuminance":"Max. Illuminance","min_air_humidity":"Min. Air Humidity","max_air_humidity":"Max. Air Humidity","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Water Consumption","max_water_consumption":"Max. Water Consumption","min_fertilizer_consumption":"Min. Fertilizer Consumption","max_fertilizer_consumption":"Max. Fertilizer Consumption","min_ph":"Min. pH Value","max_ph":"Max. pH Value","seeds_start":"Seed Start","germination_start":"Germination Start","rooting_start":"Rooting Start","growing_start":"Growth Start","flowering_start":"Flowering Start","harvested_date":"Harvest Date","removed_date":"Removed Date","seeds_duration":"Seed Duration","germination_duration":"Germination Duration","rooting_duration":"Rooting Duration","growing_duration":"Growth Duration","flower_duration":"Flower Duration","harvested_duration":"Harvested Duration","removed_duration":"Removed Duration","plant_emoji":"Icon"},"sensors":{"temperature":"Temperature","soil_moisture":"Soil Moisture","moisture":"Soil Moisture","conductivity":"Conductivity","illuminance":"Illuminance","air_humidity":"Air Humidity","humidity":"Air Humidity","dli":"Daily Light Integral","water_consumption":"Water Consumption","fertilizer_consumption":"Fertilizer Consumption","power_consumption":"Power Consumption","total_water_consumption":"Total Water Consumption","total_fertilizer_consumption":"Total Fertilizer Consumption","total_power_consumption":"Total Power Consumption","ph":"pH Value","health":"Health","ppfd_mol":"PPFD","total_ppfd":"Total PPFD","total_ppfd_mol_integral":"Total PPFD","total_integral":"Total Integral","energy_cost":"Energy Cost"},"growth_phases":{"seeds":"Seed","germination":"Germination","rooting":"Rooting","growing":"Growth","flowering":"Flowering","harvested":"Harvested","removed":"Removed"},"treatments":{"":"None","cut":"Cut","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Pest Control","spray water":"Water Spray"},"history":{"days":"Days","pot_size_placeholder":"Pot size in liters...","please_select":"Please select...","cut":"Cut","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Pest Control","spray_water":"Water Spray","growth_phase":"Growth Phase","area":"Area","pot_size":"Pot Size","treatment":"Treatment","journal":"Journal","add_entry":"Add Entry","image_taken":"Image Taken","photo":"Photo","phase_started":"Phase Started","pot_size_changed":"Pot Size Changed","moved_to":"Moved to","harvest":"Harvest","expected_harvest_date":"Expected Harvest Date","journal_placeholder":"Journal entry..."},"list_card":{"title":"Brokkoli List Card","description":"A tabular overview of all plants","plant_overview":"Plant Overview","search_placeholder":"Search for plants...","filter_close":"Close Filter","filter":"Filter","multiselect_end":"End Multi-Select","multiselect":"Multi-Select","search_reset":"Reset Search","search_default":"Search...","entity_type":"Entity Type","plants":"Plants","cycles":"Cycles","filter_range_to":"to","add_plant":"Add New Plant"},"helpers":{"growth_phase":"Growth Phase","flowering_duration":"Flowering Duration","pot_size":"Pot Size","water_capacity":"Water Capacity","treatment":"Treatment","health":"Health","journal":"Journal","location":"Location","cycle":"Cycle"}}}')},3099:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"No disponible","config_error_entity_required":"Debes definir una entidad o listen_to","area_config_error":"Debes definir al menos un área, una entidad o una lista de entidades","plants_count":"Plantas","return_to_cycle":"Volver al Ciclo","previous_image":"Imagen Anterior","next_image":"Siguiente Imagen","unknown_date":"Fecha Desconocida","tooltip_error":"Error","tooltip_range":"Rango","tooltip_mean":"Media","tooltip_min_max":"Min - Max","day":"Día","days_since_planting":"Días Desde la Plantación","upload_images_only":"¡Por favor, sube solo imágenes!","image_too_large":"¡Imagen demasiado grande! El tamaño máximo es 10MB.","upload_error":"Error de Subida","delete_image_error":"Error al eliminar imagen","set_main_image_error":"Error al establecer imagen principal","delete_error":"Error al eliminar","add_image":"Añadir Imagen","set_as_main_image":"Establecer como Imagen Principal","delete_image":"Eliminar Imagen","close":"Cerrar","no_images_available":"No hay imágenes disponibles","click_camera_to_add_image":"Haz clic en el icono de la cámara arriba para añadir una imagen","clone_plant":"Clonar Planta","move_to_cycle":"Mover al Ciclo","replace_sensors":"Reemplazar Sensores","delete_plant":"Eliminar Planta","select_cycle":"Seleccionar Ciclo","please_select":"Por favor selecciona...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"¿Realmente quieres eliminar esta planta? Esta acción no se puede deshacer.","confirm_delete":"Confirmar Eliminación","no_matching_sensors":"No se encontraron sensores coincidentes"},"fields":{"friendly_name":"Nombre","state":"Estado","area":"Área","growth_phase":"Fase de Crecimiento","cycle":"Ciclo","pot_size":"Tamaño de Maceta","flowering_duration":"Duración de Floración","strain":"Variedad","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duración Original de Floración","timestamp":"Marca de Tiempo","difficulty":"Dificultad","yield":"Rendimiento","mold_resistance":"Resistencia al Moho","hunger":"Hambre","effects":"Efectos","smell":"Olor","taste":"Sabor","phenotype":"Fenotipo","growth_stretch":"Estiramiento de Crecimiento","flower_stretch":"Estiramiento de Floración","notes":"Notas","website":"Sitio Web","lineage":"Linaje","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Humedad Mín. del Suelo","max_soil_moisture":"Humedad Máx. del Suelo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Conductividad Mín.","max_conductivity":"Conductividad Máx.","min_illuminance":"Iluminación Mín.","max_illuminance":"Iluminación Máx.","min_air_humidity":"Humedad Mín. del Aire","max_air_humidity":"Humedad Máx. del Aire","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Agua","max_water_consumption":"Consumo Máx. de Agua","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seed_start":"Inicio de Semilla","germination_start":"Inicio de Germinación","rooting_start":"Inicio de Enraizamiento","growth_start":"Inicio de Crecimiento","flowering_start":"Inicio de Floración","harvested_start":"Inicio de Cosecha","removed_start":"Inicio de Eliminación","seed_duration":"Duración de Semilla","germination_duration":"Duración de Germinación","rooting_duration":"Duración de Enraizamiento","growth_duration":"Duración de Crecimiento","flower_duration":"Duración de Floración","harvested_duration":"Duración de Cosecha","removed_duration":"Duración de Eliminación"},"sensors":{"temperature":"Temperatura","soil_moisture":"Humedad del Suelo","moisture":"Humedad del Suelo","conductivity":"Conductividad","illuminance":"Iluminación","air_humidity":"Humedad del Aire","humidity":"Humedad del Aire","dli":"Integral de Luz Diaria","water_consumption":"Consumo de Agua","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energía","ph":"Valor pH","health":"Salud","total_ppfd":"PPFD Total","energy_cost":"Costo de Energía"},"growth_phases":{"seeds":"Semilla","germination":"Germinación","rooting":"Enraizamiento","growing":"Crecimiento","flowering":"Floración","harvested":"Cosechada","removed":"Eliminada"},"treatments":{"":"Ninguno","cut":"Cortar","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Control de Plagas","spray water":"Rociado de Agua"},"history":{"days":"Días","pot_size_placeholder":"Tamaño de maceta en litros...","please_select":"Por favor selecciona...","cut":"Cortar","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Control de Plagas","spray_water":"Rociado de Agua","growth_phase":"Fase de Crecimiento","area":"Área","pot_size":"Tamaño de Maceta","treatment":"Tratamiento","journal":"Diario","add_entry":"Añadir Entrada","image_taken":"Imagen Tomada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamaño de Maceta Cambiado","moved_to":"Movido a","harvest":"Cosecha","expected_harvest_date":"Fecha de Cosecha Esperada","journal_placeholder":"Entrada de diario..."},"list_card":{"title":"Tarjeta de Lista Brokkoli","description":"Una vista tabular de todas las plantas","plant_overview":"Vista General de Plantas","search_placeholder":"Buscar plantas...","filter_close":"Cerrar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Selección","multiselect":"Multi-Selección","search_reset":"Restablecer Búsqueda","search_default":"Buscar...","entity_type":"Tipo de Entidad","plants":"Plantas","cycles":"Ciclos","filter_range_to":"a","add_plant":"Añadir Nueva Planta"},"graph":{"temperature":"Temperatura","conductivity":"Conductividad","dli":"DLI","health":"Salud","water_consumption":"Consumo de Agua","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energía"},"diagnostics":{"energy_cost":"Costo de Energía","total_power_consumption":"Consumo Total de Energía","total_integral":"Integral Total","total_water_consumption":"Consumo Total de Agua","total_fertilizer_consumption":"Consumo Total de Fertilizante","power_consumption":"Consumo de Energía","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Fase de Crecimiento","flowering_duration":"Duración de Floración","pot_size":"Tamaño de Maceta","water_capacity":"Capacidad de Agua","treatment":"Tratamiento","health":"Salud","journal":"Diario","location":"Ubicación","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modo: Anillos (clic para cambiar)","legend_labels_mode_active":"Modo: Etiquetas (clic para cambiar)","legend_heatmap_mode_active":"Modo: Mapa de calor (clic para cambiar)","flowering_past":"Floración pasada","flowering_to_go":"Floración restante","days":"Días","plant_emoji_hint":"Encuentra una gran selección en [emojipedia.org](https://emojipedia.org)","create_plant":"Crear planta","create":"Crear","no_sensor":"Ninguno","entity_not_available":"Entidad no disponible","no_data":"No hay datos disponibles","error":"Error","define_entity":"Debes definir una entidad","loading":"Cargando...","unknown_state":"Estado desconocido","name":"Nombre","status":"Estado","area":"Área","config_error_entity_required":"Debes definir una entidad o listen_to","unavailable":"No disponible","plants_count":"Plantas","plants_selected":"Plantas seleccionadas","no_plants_found":"No se encontraron plantas","entity_not_found":"Entidad no encontrada","return_to_cycle":"Volver al ciclo","entity_unavailable":"Entidad no disponible","no_entity_configured":"Ninguna entidad o listen_to configurada","area_config_error":"Debes definir al menos un área, una entidad o una lista de entidades","members":"Miembros","open":"Abrir","photo_taken_on":"Foto tomada el","previous_image":"Imagen anterior","next_image":"Imagen siguiente","unknown_date":"Fecha desconocida","no_completed_phases":"Aún no hay fases completadas","harvest_date":"Cosechada el","harvest_weight":"Peso de la cosecha","harvest_notes":"Notas de la cosecha","treatment_description":"Tratamiento aplicado","pot_size_changed":"Tamaño de maceta cambiado a","moved_to_area":"Trasladada a","legend_primary_color":"Color primario","legend_secondary_color":"Color secundario","legend_opacity":"Opacidad","legend_rings_mode":"Modo anillos","legend_labels_mode":"Modo etiquetas","legend_heatmap_mode":"Modo mapa de calor","confirm":"Confirmar","tooltip_error":"Error al cargar los datos","tooltip_range":"Rango","tooltip_mean":"Media","tooltip_min_max":"Mín - Máx","day":"Día","days_since_planting":"Días desde la plantación","upload_images_only":"¡Sube solo imágenes!","image_too_large":"¡Imagen demasiado grande! El tamaño máximo es 10MB.","upload_error":"Error al subir","delete_image_error":"Error al eliminar la imagen","set_main_image_error":"Error al establecer la imagen principal","delete_error":"Error al eliminar","add_image":"Añadir imagen","set_as_main_image":"Establecer como imagen principal","delete_image":"Eliminar imagen","close":"Cerrar","no_images_available":"No hay imágenes","click_camera_to_add_image":"Haz clic en el icono de la cámara de arriba para añadir una imagen","clone_plant":"Clonar planta","move_to_cycle":"Mover al ciclo","replace_sensors":"Reemplazar sensores","delete_plant":"Eliminar planta","select_cycle":"Seleccionar ciclo","please_select":"Selecciona...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"¿Seguro que quieres eliminar esta planta? Esta acción no se puede deshacer.","confirm_delete":"Confirmar eliminación","no_matching_sensors":"No se encontraron sensores compatibles","other_images":"Otras imágenes","back_to_main_images":"Volver a las imágenes principales","main_images":"Imágenes principales","edit":"Editar","save":"Guardar","legend_collapsed_mode_active":"Modo: Plegado (clic para cambiar)","delete_selected":"Eliminar seleccionadas","area_edit_mode_on":"Modo mover activo: haz clic para salir del modo de edición","area_edit_mode_off":"Modo vista: haz clic para activar mover y selección múltiple"},"sensors":{"temperature":"Temperatura","soil_moisture":"Humedad del sustrato","moisture":"Humedad del sustrato","conductivity":"Conductividad","illuminance":"Iluminancia","air_humidity":"Humedad del aire","humidity":"Humedad del aire","dli":"Integral diaria de luz","water_consumption":"Consumo de agua","fertilizer_consumption":"Consumo de fertilizante","power_consumption":"Consumo eléctrico","total_water_consumption":"Consumo total de agua","total_fertilizer_consumption":"Consumo total de fertilizante","total_power_consumption":"Consumo eléctrico total","ph":"Valor de pH","health":"Salud","ppfd_mol":"PPFD","total_ppfd":"PPFD total","total_ppfd_mol_integral":"PPFD total","total_integral":"Integral total","energy_cost":"Coste energético"},"fields":{"friendly_name":"Nombre","state":"Estado","area":"Área","growth_phase":"Fase de Crecimiento","cycle":"Ciclo","pot_size":"Tamaño de Maceta","flowering_duration":"Duración de Floración","strain":"Variedad","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duración Original de Floración","timestamp":"Marca de Tiempo","difficulty":"Dificultad","yield":"Rendimiento","mold_resistance":"Resistencia al Moho","hunger":"Hambre","effects":"Efectos","smell":"Olor","taste":"Sabor","phenotype":"Fenotipo","growth_stretch":"Estiramiento de Crecimiento","flower_stretch":"Estiramiento de Floración","notes":"Notas","website":"Sitio Web","lineage":"Linaje","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Humedad Mín. del Suelo","max_soil_moisture":"Humedad Máx. del Suelo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Conductividad Mín.","max_conductivity":"Conductividad Máx.","min_illuminance":"Iluminación Mín.","max_illuminance":"Iluminación Máx.","min_air_humidity":"Humedad Mín. del Aire","max_air_humidity":"Humedad Máx. del Aire","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Agua","max_water_consumption":"Consumo Máx. de Agua","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seeds_start":"Inicio de Semilla","germination_start":"Inicio de Germinación","rooting_start":"Inicio de Enraizamiento","growing_start":"Inicio de Crecimiento","flowering_start":"Inicio de Floración","harvested_date":"Inicio de Cosecha","removed_date":"Inicio de Eliminación","seeds_duration":"Duración de Semilla","germination_duration":"Duración de Germinación","rooting_duration":"Duración de Enraizamiento","growing_duration":"Duración de Crecimiento","flower_duration":"Duración de Floración","harvested_duration":"Duración de Cosecha","removed_duration":"Duración de Eliminación","plant_emoji":"Icono"},"growth_phases":{"seeds":"Semilla","germination":"Germinación","rooting":"Enraizamiento","growing":"Crecimiento","flowering":"Floración","harvested":"Cosechada","removed":"Eliminada"},"treatments":{"":"Ninguno","cut":"Cortar","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Control de Plagas","spray water":"Rociado de Agua"},"history":{"days":"Días","pot_size_placeholder":"Tamaño de maceta en litros...","please_select":"Por favor selecciona...","cut":"Cortar","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Control de Plagas","spray_water":"Rociado de Agua","growth_phase":"Fase de Crecimiento","area":"Área","pot_size":"Tamaño de Maceta","treatment":"Tratamiento","journal":"Diario","add_entry":"Añadir Entrada","image_taken":"Imagen Tomada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamaño de Maceta Cambiado","moved_to":"Movido a","harvest":"Cosecha","expected_harvest_date":"Fecha de Cosecha Esperada","journal_placeholder":"Entrada de diario..."},"list_card":{"title":"Tarjeta de Lista Brokkoli","description":"Una vista tabular de todas las plantas","plant_overview":"Vista General de Plantas","search_placeholder":"Buscar plantas...","filter_close":"Cerrar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Selección","multiselect":"Multi-Selección","search_reset":"Restablecer Búsqueda","search_default":"Buscar...","entity_type":"Tipo de Entidad","plants":"Plantas","cycles":"Ciclos","filter_range_to":"a","add_plant":"Añadir Nueva Planta"},"helpers":{"growth_phase":"Fase de Crecimiento","flowering_duration":"Duración de Floración","pot_size":"Tamaño de Maceta","water_capacity":"Capacidad de Agua","treatment":"Tratamiento","health":"Salud","journal":"Diario","location":"Ubicación","cycle":"Ciclo"}}}')},4055:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Indisponible","config_error_entity_required":"Vous devez définir une entité ou listen_to","area_config_error":"Vous devez définir au moins une zone, une entité ou une liste d\'entités","plants_count":"Plantes","return_to_cycle":"Retour au Cycle","previous_image":"Image Précédente","next_image":"Image Suivante","unknown_date":"Date Inconnue","tooltip_error":"Erreur","tooltip_range":"Plage","tooltip_mean":"Moyenne","tooltip_min_max":"Min - Max","day":"Jour","days_since_planting":"Jours Depuis la Plantation","upload_images_only":"Veuillez télécharger uniquement des images !","image_too_large":"Image trop grande ! La taille maximale est de 10MB.","upload_error":"Erreur de Téléchargement","delete_image_error":"Erreur lors de la suppression de l\'image","set_main_image_error":"Erreur lors de la définition de l\'image principale","delete_error":"Erreur lors de la suppression","add_image":"Ajouter une Image","set_as_main_image":"Définir comme Image Principale","delete_image":"Supprimer l\'Image","close":"Fermer","no_images_available":"Aucune image disponible","click_camera_to_add_image":"Cliquez sur l\'icône de l\'appareil photo ci-dessus pour ajouter une image","clone_plant":"Cloner la Plante","move_to_cycle":"Déplacer vers le Cycle","replace_sensors":"Remplacer les Capteurs","delete_plant":"Supprimer la Plante","select_cycle":"Sélectionner le Cycle","please_select":"Veuillez sélectionner...","move":"Déplacer","cancel":"Annuler","clone":"Cloner","delete_plant_confirmation":"Voulez-vous vraiment supprimer cette plante ? Cette action ne peut pas être annulée.","confirm_delete":"Confirmer la Suppression","no_matching_sensors":"Aucun capteur correspondant trouvé"},"fields":{"friendly_name":"Nom","state":"État","area":"Zone","growth_phase":"Phase de Croissance","cycle":"Cycle","pot_size":"Taille du Pot","flowering_duration":"Durée de Floraison","strain":"Variété","breeder":"Éleveur","feminized":"Féminisée","original_flowering_duration":"Durée de Floraison Originale","timestamp":"Horodatage","difficulty":"Difficulté","yield":"Rendement","mold_resistance":"Résistance à la Moisissure","hunger":"Faim","effects":"Effets","smell":"Odeur","taste":"Goût","phenotype":"Phénotype","growth_stretch":"Étirement de Croissance","flower_stretch":"Étirement de Floraison","notes":"Notes","website":"Site Web","lineage":"Lignée","infotext1":"Texte Info 1","infotext2":"Texte Info 2","min_soil_moisture":"Humidité Min. du Sol","max_soil_moisture":"Humidité Max. du Sol","min_temperature":"Température Min.","max_temperature":"Température Max.","min_conductivity":"Conductivité Min.","max_conductivity":"Conductivité Max.","min_illuminance":"Éclairage Min.","max_illuminance":"Éclairage Max.","min_air_humidity":"Humidité Min. de l\'Air","max_air_humidity":"Humidité Max. de l\'Air","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consommation Min. d\'Eau","max_water_consumption":"Consommation Max. d\'Eau","min_fertilizer_consumption":"Consommation Min. d\'Engrais","max_fertilizer_consumption":"Consommation Max. d\'Engrais","min_ph":"Valeur pH Min.","max_ph":"Valeur pH Max.","seed_start":"Début de Graine","germination_start":"Début de Germination","rooting_start":"Début d\'Enracinement","growth_start":"Début de Croissance","flowering_start":"Début de Floraison","harvested_start":"Début de Récolte","removed_start":"Début de Suppression","seed_duration":"Durée de Graine","germination_duration":"Durée de Germination","rooting_duration":"Durée d\'Enracinement","growth_duration":"Durée de Croissance","flower_duration":"Durée de Floraison","harvested_duration":"Durée de Récolte","removed_duration":"Durée de Suppression"},"sensors":{"temperature":"Température","soil_moisture":"Humidité du Sol","moisture":"Humidité du Sol","conductivity":"Conductivité","illuminance":"Éclairage","air_humidity":"Humidité de l\'Air","humidity":"Humidité de l\'Air","dli":"Intégrale de Lumière Quotidienne","water_consumption":"Consommation d\'Eau","fertilizer_consumption":"Consommation d\'Engrais","power_consumption":"Consommation d\'Énergie","ph":"Valeur pH","health":"Santé","total_ppfd":"PPFD Total","energy_cost":"Coût Énergétique"},"growth_phases":{"seeds":"Graine","germination":"Germination","rooting":"Enracinement","growing":"Croissance","flowering":"Floraison","harvested":"Récoltée","removed":"Supprimée"},"treatments":{"":"Aucun","cut":"Couper","super cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Contrôle des Nuisibles","spray water":"Pulvérisation d\'Eau"},"history":{"days":"Jours","pot_size_placeholder":"Taille du pot en litres...","please_select":"Veuillez sélectionner...","cut":"Couper","super_cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Contrôle des Nuisibles","spray_water":"Pulvérisation d\'Eau","growth_phase":"Phase de Croissance","area":"Zone","pot_size":"Taille du Pot","treatment":"Traitement","journal":"Journal","add_entry":"Ajouter une Entrée","image_taken":"Image Prise","photo":"Photo","phase_started":"Phase Commencée","pot_size_changed":"Taille du Pot Changée","moved_to":"Déplacé vers","harvest":"Récolte","expected_harvest_date":"Date de Récolte Prévue","journal_placeholder":"Entrée de journal..."},"list_card":{"title":"Carte de Liste Brokkoli","description":"Une vue tabulaire de toutes les plantes","plant_overview":"Vue d\'Ensemble des Plantes","search_placeholder":"Rechercher des plantes...","filter_close":"Fermer le Filtre","filter":"Filtre","multiselect_end":"Terminer la Multi-Sélection","multiselect":"Multi-Sélection","search_reset":"Réinitialiser la Recherche","search_default":"Rechercher...","entity_type":"Type d\'Entité","plants":"Plantes","cycles":"Cycles","filter_range_to":"à","add_plant":"Ajouter une Nouvelle Plante"},"graph":{"temperature":"Température","conductivity":"Conductivité","dli":"DLI","health":"Santé","water_consumption":"Consommation d\'Eau","fertilizer_consumption":"Consommation d\'Engrais","power_consumption":"Consommation d\'Énergie"},"diagnostics":{"energy_cost":"Coût Énergétique","total_power_consumption":"Consommation Totale d\'Énergie","total_integral":"Intégrale Totale","total_water_consumption":"Consommation Totale d\'Eau","total_fertilizer_consumption":"Consommation Totale d\'Engrais","power_consumption":"Consommation d\'Énergie","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Phase de Croissance","flowering_duration":"Durée de Floraison","pot_size":"Taille du Pot","water_capacity":"Capacité d\'Eau","treatment":"Traitement","health":"Santé","journal":"Journal","location":"Emplacement","cycle":"Cycle"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Mode: Anneaux (cliquez pour changer)","legend_labels_mode_active":"Mode: Étiquettes (cliquez pour changer)","legend_heatmap_mode_active":"Mode: Carte de chaleur (cliquez pour changer)","flowering_past":"Floraison écoulée","flowering_to_go":"Floraison restante","days":"Jours","plant_emoji_hint":"Trouvez une grande sélection sur [emojipedia.org](https://emojipedia.org)","create_plant":"Créer une plante","create":"Créer","no_sensor":"Aucun","entity_not_available":"Entité non disponible","no_data":"Aucune donnée disponible","error":"Erreur","define_entity":"Vous devez définir une entité","loading":"Chargement...","unknown_state":"État inconnu","name":"Nom","status":"État","area":"Zone","config_error_entity_required":"Vous devez définir une entité ou listen_to","unavailable":"Non disponible","plants_count":"Plantes","plants_selected":"Plantes sélectionnées","no_plants_found":"Aucune plante trouvée","entity_not_found":"Entité introuvable","return_to_cycle":"Retour au cycle","entity_unavailable":"Entité non disponible","no_entity_configured":"Aucune entité ni listen_to configuré","area_config_error":"Vous devez définir au moins une zone, une entité ou une liste d\'entités","members":"Membres","open":"Ouvrir","photo_taken_on":"Photo prise le","previous_image":"Image précédente","next_image":"Image suivante","unknown_date":"Date inconnue","no_completed_phases":"Aucune phase terminée pour l\'instant","harvest_date":"Récoltée le","harvest_weight":"Poids de la récolte","harvest_notes":"Notes de récolte","treatment_description":"Traitement effectué","pot_size_changed":"Taille du pot changée en","moved_to_area":"Déplacée vers","legend_primary_color":"Couleur primaire","legend_secondary_color":"Couleur secondaire","legend_opacity":"Opacité","legend_rings_mode":"Mode anneaux","legend_labels_mode":"Mode étiquettes","legend_heatmap_mode":"Mode carte de chaleur","confirm":"Confirmer","tooltip_error":"Erreur lors du chargement des données","tooltip_range":"Plage","tooltip_mean":"Moyenne","tooltip_min_max":"Min - Max","day":"Jour","days_since_planting":"Jours depuis la plantation","upload_images_only":"Veuillez téléverser uniquement des images !","image_too_large":"Image trop volumineuse ! La taille maximale est de 10 Mo.","upload_error":"Erreur lors du téléversement","delete_image_error":"Erreur lors de la suppression de l\'image","set_main_image_error":"Erreur lors de la définition de l\'image principale","delete_error":"Erreur lors de la suppression","add_image":"Ajouter une image","set_as_main_image":"Définir comme image principale","delete_image":"Supprimer l\'image","close":"Fermer","no_images_available":"Aucune image disponible","click_camera_to_add_image":"Cliquez sur l\'icône appareil photo ci-dessus pour ajouter une image","clone_plant":"Cloner la plante","move_to_cycle":"Déplacer vers un cycle","replace_sensors":"Remplacer les capteurs","delete_plant":"Supprimer la plante","select_cycle":"Sélectionner un cycle","please_select":"Veuillez choisir...","move":"Déplacer","cancel":"Annuler","clone":"Cloner","delete_plant_confirmation":"Voulez-vous vraiment supprimer cette plante ? Cette action est irréversible.","confirm_delete":"Confirmer la suppression","no_matching_sensors":"Aucun capteur correspondant trouvé","other_images":"Autres images","back_to_main_images":"Retour aux images principales","main_images":"Images principales","edit":"Modifier","save":"Enregistrer","legend_collapsed_mode_active":"Mode : Replié (cliquer pour changer)","delete_selected":"Supprimer la sélection","area_edit_mode_on":"Mode déplacement actif - cliquer pour quitter le mode édition","area_edit_mode_off":"Mode affichage - cliquer pour activer le déplacement et la sélection multiple"},"sensors":{"temperature":"Température","soil_moisture":"Humidité du substrat","moisture":"Humidité du substrat","conductivity":"Conductivité","illuminance":"Éclairement","air_humidity":"Humidité de l\'air","humidity":"Humidité de l\'air","dli":"Intégrale lumineuse journalière","water_consumption":"Consommation d\'eau","fertilizer_consumption":"Consommation d\'engrais","power_consumption":"Consommation électrique","total_water_consumption":"Consommation totale d\'eau","total_fertilizer_consumption":"Consommation totale d\'engrais","total_power_consumption":"Consommation électrique totale","ph":"Valeur de pH","health":"Santé","ppfd_mol":"PPFD","total_ppfd":"PPFD total","total_ppfd_mol_integral":"PPFD total","total_integral":"Intégrale totale","energy_cost":"Coût énergétique"},"fields":{"friendly_name":"Nom","state":"État","area":"Zone","growth_phase":"Phase de Croissance","cycle":"Cycle","pot_size":"Taille du Pot","flowering_duration":"Durée de Floraison","strain":"Variété","breeder":"Éleveur","feminized":"Féminisée","original_flowering_duration":"Durée de Floraison Originale","timestamp":"Horodatage","difficulty":"Difficulté","yield":"Rendement","mold_resistance":"Résistance à la Moisissure","hunger":"Faim","effects":"Effets","smell":"Odeur","taste":"Goût","phenotype":"Phénotype","growth_stretch":"Étirement de Croissance","flower_stretch":"Étirement de Floraison","notes":"Notes","website":"Site Web","lineage":"Lignée","infotext1":"Texte Info 1","infotext2":"Texte Info 2","min_soil_moisture":"Humidité Min. du Sol","max_soil_moisture":"Humidité Max. du Sol","min_temperature":"Température Min.","max_temperature":"Température Max.","min_conductivity":"Conductivité Min.","max_conductivity":"Conductivité Max.","min_illuminance":"Éclairage Min.","max_illuminance":"Éclairage Max.","min_air_humidity":"Humidité Min. de l\'Air","max_air_humidity":"Humidité Max. de l\'Air","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consommation Min. d\'Eau","max_water_consumption":"Consommation Max. d\'Eau","min_fertilizer_consumption":"Consommation Min. d\'Engrais","max_fertilizer_consumption":"Consommation Max. d\'Engrais","min_ph":"Valeur pH Min.","max_ph":"Valeur pH Max.","seeds_start":"Début de Graine","germination_start":"Début de Germination","rooting_start":"Début d\'Enracinement","growing_start":"Début de Croissance","flowering_start":"Début de Floraison","harvested_date":"Début de Récolte","removed_date":"Début de Suppression","seeds_duration":"Durée de Graine","germination_duration":"Durée de Germination","rooting_duration":"Durée d\'Enracinement","growing_duration":"Durée de Croissance","flower_duration":"Durée de Floraison","harvested_duration":"Durée de Récolte","removed_duration":"Durée de Suppression","plant_emoji":"Icône"},"growth_phases":{"seeds":"Graine","germination":"Germination","rooting":"Enracinement","growing":"Croissance","flowering":"Floraison","harvested":"Récoltée","removed":"Supprimée"},"treatments":{"":"Aucun","cut":"Couper","super cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Contrôle des Nuisibles","spray water":"Pulvérisation d\'Eau"},"history":{"days":"Jours","pot_size_placeholder":"Taille du pot en litres...","please_select":"Veuillez sélectionner...","cut":"Couper","super_cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Contrôle des Nuisibles","spray_water":"Pulvérisation d\'Eau","growth_phase":"Phase de Croissance","area":"Zone","pot_size":"Taille du Pot","treatment":"Traitement","journal":"Journal","add_entry":"Ajouter une Entrée","image_taken":"Image Prise","photo":"Photo","phase_started":"Phase Commencée","pot_size_changed":"Taille du Pot Changée","moved_to":"Déplacé vers","harvest":"Récolte","expected_harvest_date":"Date de Récolte Prévue","journal_placeholder":"Entrée de journal..."},"list_card":{"title":"Carte de Liste Brokkoli","description":"Une vue tabulaire de toutes les plantes","plant_overview":"Vue d\'Ensemble des Plantes","search_placeholder":"Rechercher des plantes...","filter_close":"Fermer le Filtre","filter":"Filtre","multiselect_end":"Terminer la Multi-Sélection","multiselect":"Multi-Sélection","search_reset":"Réinitialiser la Recherche","search_default":"Rechercher...","entity_type":"Type d\'Entité","plants":"Plantes","cycles":"Cycles","filter_range_to":"à","add_plant":"Ajouter une Nouvelle Plante"},"helpers":{"growth_phase":"Phase de Croissance","flowering_duration":"Durée de Floraison","pot_size":"Taille du Pot","water_capacity":"Capacité d\'Eau","treatment":"Traitement","health":"Santé","journal":"Journal","location":"Emplacement","cycle":"Cycle"}}}')},4668:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Nem elérhető","config_error_entity_required":"Meg kell adnia egy entitást vagy listen_to-t","area_config_error":"Meg kell adnia legalább egy területet, egy entitást vagy egy entitáslistát","plants_count":"Növények","return_to_cycle":"Vissza a Ciklushoz","previous_image":"Előző Kép","next_image":"Következő Kép","unknown_date":"Ismeretlen Dátum","tooltip_error":"Hiba","tooltip_range":"Tartomány","tooltip_mean":"Átlag","tooltip_min_max":"Min - Max","day":"Nap","days_since_planting":"Napok az Ültetés Óta","upload_images_only":"Kérjük, csak képeket töltsön fel!","image_too_large":"A kép túl nagy! A maximális méret 10MB.","upload_error":"Feltöltési Hiba","delete_image_error":"Hiba a kép törlése során","set_main_image_error":"Hiba a főkép beállítása során","delete_error":"Hiba a törlés során","add_image":"Kép Hozzáadása","set_as_main_image":"Beállítás Főképnek","delete_image":"Kép Törlése","close":"Bezárás","no_images_available":"Nincsenek elérhető képek","click_camera_to_add_image":"Kattintson a fenti kamera ikonra kép hozzáadásához","clone_plant":"Növény Klónozása","move_to_cycle":"Áthelyezés Ciklusba","replace_sensors":"Érzékelők Cseréje","delete_plant":"Növény Törlése","select_cycle":"Ciklus Kiválasztása","please_select":"Kérjük válasszon...","move":"Áthelyezés","cancel":"Mégse","clone":"Klónozás","delete_plant_confirmation":"Valóban törölni szeretné ezt a növényt? Ez a művelet nem vonható vissza.","confirm_delete":"Törlés Megerősítése","no_matching_sensors":"Nem találhatók megfelelő érzékelők"},"fields":{"friendly_name":"Név","state":"Állapot","area":"Terület","growth_phase":"Növekedési Fázis","cycle":"Ciklus","pot_size":"Cserép Mérete","flowering_duration":"Virágzási időtartam","strain":"Fajta","breeder":"Tenyésztő","feminized":"Nőstény","original_flowering_duration":"Eredeti Virágzás Időtartama","timestamp":"Időbélyeg","difficulty":"Nehézség","yield":"Hozam","mold_resistance":"Penészállóság","hunger":"Éhség","effects":"Hatások","smell":"Illat","taste":"Íz","phenotype":"Fenotípus","growth_stretch":"Növekedési Nyúlás","flower_stretch":"Virágzási Nyúlás","notes":"Megjegyzések","website":"Weboldal","lineage":"Származás","infotext1":"Info Szöveg 1","infotext2":"Info Szöveg 2","min_soil_moisture":"Min. Talaj Nedvesség","max_soil_moisture":"Max. Talaj Nedvesség","min_temperature":"Min. Hőmérséklet","max_temperature":"Max. Hőmérséklet","min_conductivity":"Min. Vezetőképesség","max_conductivity":"Max. Vezetőképesség","min_illuminance":"Min. Megvilágítás","max_illuminance":"Max. Megvilágítás","min_air_humidity":"Min. Levegő Nedvesség","max_air_humidity":"Max. Levegő Nedvesség","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Vízfogyasztás","max_water_consumption":"Max. Vízfogyasztás","min_fertilizer_consumption":"Min. Műtrágya Fogyasztás","max_fertilizer_consumption":"Max. Műtrágya Fogyasztás","min_ph":"Min. pH Érték","max_ph":"Max. pH Érték","seed_start":"Mag Kezdet","germination_start":"Csírázás Kezdet","rooting_start":"Gyökeresedés Kezdet","growth_start":"Növekedés Kezdet","flowering_start":"Virágzás Kezdet","harvested_start":"Betakarítás Kezdet","removed_start":"Eltávolítás Kezdet","seed_duration":"Mag Időtartam","germination_duration":"Csírázás Időtartam","rooting_duration":"Gyökeresedés Időtartam","growth_duration":"Növekedési időtartam","flower_duration":"Virágzási időtartam","harvested_duration":"Betakarítás Időtartam","removed_duration":"Eltávolítás Időtartam"},"sensors":{"temperature":"Hőmérséklet","soil_moisture":"Talaj Nedvesség","moisture":"Talaj Nedvesség","conductivity":"Vezetőképesség","illuminance":"Megvilágítás","air_humidity":"Levegő Nedvesség","humidity":"Levegő Nedvesség","dli":"Napi Fény Integrál","water_consumption":"Vízfogyasztás","fertilizer_consumption":"Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás","ph":"pH Érték","health":"Egészség","total_ppfd":"Összes PPFD","energy_cost":"Energia Költség"},"growth_phases":{"seeds":"Mag","germination":"Csírázás","rooting":"Gyökeresedés","growing":"Növekedés","flowering":"Virágzás","harvested":"Betakarítva","removed":"Eltávolítva"},"treatments":{"":"Nincs","cut":"Vágás","super cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray pest":"Kártevő Irtás","spray water":"Vízpermetezés"},"history":{"days":"Napok","pot_size_placeholder":"Cserép mérete literben...","please_select":"Kérjük válasszon...","cut":"Vágás","super_cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray_pest":"Kártevő Irtás","spray_water":"Vízpermetezés","growth_phase":"Növekedési Fázis","area":"Terület","pot_size":"Cserép Mérete","treatment":"Kezelés","journal":"Napló","add_entry":"Bejegyzés Hozzáadása","image_taken":"Kép Készítve","photo":"Fotó","phase_started":"Fázis Elkezdve","pot_size_changed":"Cserép Mérete Megváltozott","moved_to":"Áthelyezve ide","harvest":"Betakarítás","expected_harvest_date":"Várható Betakarítási Dátum","journal_placeholder":"Napló bejegyzés..."},"list_card":{"title":"Brokkoli Lista Kártya","description":"Táblázatos áttekintés az összes növényről","plant_overview":"Növény Áttekintés","search_placeholder":"Növények keresése...","filter_close":"Szűrő Bezárása","filter":"Szűrő","multiselect_end":"Többszörös Kiválasztás Befejezése","multiselect":"Többszörös Kiválasztás","search_reset":"Keresés Visszaállítása","search_default":"Keresés...","entity_type":"Entitás Típus","plants":"Növények","cycles":"Ciklusok","filter_range_to":"ig","add_plant":"Új Növény Hozzáadása"},"graph":{"temperature":"Hőmérséklet","conductivity":"Vezetőképesség","dli":"DLI","health":"Egészség","water_consumption":"Vízfogyasztás","fertilizer_consumption":"Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás"},"diagnostics":{"energy_cost":"Energia Költség","total_power_consumption":"Összes Energiafogyasztás","total_integral":"Összes Integrál","total_water_consumption":"Összes Vízfogyasztás","total_fertilizer_consumption":"Összes Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Összes PPFD"},"helpers":{"growth_phase":"Növekedési Fázis","flowering_duration":"Virágzás Időtartama","pot_size":"Cserép Mérete","water_capacity":"Víz Kapacitás","treatment":"Kezelés","health":"Egészség","journal":"Napló","location":"Helyszín","cycle":"Ciklus"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Mód: Gyűrűk (kattintson a váltáshoz)","legend_labels_mode_active":"Mód: Címkék (kattintson a váltáshoz)","legend_heatmap_mode_active":"Mód: Hőtérkép (kattintson a váltáshoz)","flowering_past":"Eltelt virágzás","flowering_to_go":"Hátralévő virágzás","days":"Napok","plant_emoji_hint":"Nagy választék található az [emojipedia.org](https://emojipedia.org) oldalon","create_plant":"Növény létrehozása","create":"Létrehozás","no_sensor":"Nincs","entity_not_available":"Entitás nem érhető el","no_data":"Nincs elérhető adat","error":"Hiba","define_entity":"Meg kell adnod egy entitást","loading":"Betöltés...","unknown_state":"Ismeretlen állapot","name":"Név","status":"Állapot","area":"Terület","config_error_entity_required":"Meg kell adnod egy entitást vagy listen_to-t","unavailable":"Nem érhető el","plants_count":"Növények","plants_selected":"Kiválasztott növények","no_plants_found":"Nem található növény","entity_not_found":"Az entitás nem található","return_to_cycle":"Vissza a ciklushoz","entity_unavailable":"Entitás nem érhető el","no_entity_configured":"Nincs entitás vagy listen_to beállítva","area_config_error":"Meg kell adnod legalább egy területet, egy entitást vagy entitások listáját","members":"Tagok","open":"Megnyitás","photo_taken_on":"A fotó készült","previous_image":"Előző kép","next_image":"Következő kép","unknown_date":"Ismeretlen dátum","no_completed_phases":"Még nincs befejezett fázis","harvest_date":"Betakarítva","harvest_weight":"Betakarított tömeg","harvest_notes":"Betakarítási jegyzetek","treatment_description":"Kezelés elvégezve","pot_size_changed":"Cserépméret módosítva erre","moved_to_area":"Áthelyezve ide","legend_primary_color":"Elsődleges szín","legend_secondary_color":"Másodlagos szín","legend_opacity":"Átlátszatlanság","legend_rings_mode":"Gyűrűk mód","legend_labels_mode":"Címkék mód","legend_heatmap_mode":"Hőtérkép mód","confirm":"Megerősítés","tooltip_error":"Hiba az adatok betöltésekor","tooltip_range":"Tartomány","tooltip_mean":"Átlag","tooltip_min_max":"Min - Max","day":"Nap","days_since_planting":"Ültetés óta eltelt napok","upload_images_only":"Csak képeket tölts fel!","image_too_large":"A kép túl nagy! A maximális méret 10MB.","upload_error":"Feltöltési hiba","delete_image_error":"Hiba a kép törlésekor","set_main_image_error":"Hiba a főkép beállításakor","delete_error":"Hiba a törléskor","add_image":"Kép hozzáadása","set_as_main_image":"Beállítás főképként","delete_image":"Kép törlése","close":"Bezárás","no_images_available":"Nincs elérhető kép","click_camera_to_add_image":"Kattints a fenti kamera ikonra kép hozzáadásához","clone_plant":"Növény klónozása","move_to_cycle":"Áthelyezés ciklusba","replace_sensors":"Érzékelők cseréje","delete_plant":"Növény törlése","select_cycle":"Ciklus kiválasztása","please_select":"Válassz...","move":"Áthelyezés","cancel":"Mégse","clone":"Klónozás","delete_plant_confirmation":"Biztosan törlöd ezt a növényt? A művelet nem vonható vissza.","confirm_delete":"Törlés megerősítése","no_matching_sensors":"Nem található megfelelő érzékelő","other_images":"Egyéb képek","back_to_main_images":"Vissza a főképekhez","main_images":"Főképek","edit":"Szerkesztés","save":"Mentés","legend_collapsed_mode_active":"Mód: Összecsukva (kattints a váltáshoz)","delete_selected":"Kijelöltek törlése","area_edit_mode_on":"Mozgatás mód bekapcsolva - kattints a szerkesztés befejezéséhez","area_edit_mode_off":"Nézet mód - kattints a mozgatás és többszörös kijelölés bekapcsolásához"},"sensors":{"temperature":"Hőmérséklet","soil_moisture":"Talajnedvesség","moisture":"Talajnedvesség","conductivity":"Vezetőképesség","illuminance":"Megvilágítás","air_humidity":"Páratartalom","humidity":"Páratartalom","dli":"Napi fényintegrál","water_consumption":"Vízfogyasztás","fertilizer_consumption":"Tápoldat-fogyasztás","power_consumption":"Áramfogyasztás","total_water_consumption":"Teljes vízfogyasztás","total_fertilizer_consumption":"Teljes tápoldat-fogyasztás","total_power_consumption":"Teljes áramfogyasztás","ph":"pH-érték","health":"Egészség","ppfd_mol":"PPFD","total_ppfd":"Teljes PPFD","total_ppfd_mol_integral":"Teljes PPFD","total_integral":"Teljes integrál","energy_cost":"Energiaköltség"},"fields":{"friendly_name":"Név","state":"Állapot","area":"Terület","growth_phase":"Növekedési Fázis","cycle":"Ciklus","pot_size":"Cserép Mérete","flowering_duration":"Virágzási időtartam","strain":"Fajta","breeder":"Tenyésztő","feminized":"Nőstény","original_flowering_duration":"Eredeti Virágzás Időtartama","timestamp":"Időbélyeg","difficulty":"Nehézség","yield":"Hozam","mold_resistance":"Penészállóság","hunger":"Éhség","effects":"Hatások","smell":"Illat","taste":"Íz","phenotype":"Fenotípus","growth_stretch":"Növekedési Nyúlás","flower_stretch":"Virágzási Nyúlás","notes":"Megjegyzések","website":"Weboldal","lineage":"Származás","infotext1":"Info Szöveg 1","infotext2":"Info Szöveg 2","min_soil_moisture":"Min. Talaj Nedvesség","max_soil_moisture":"Max. Talaj Nedvesség","min_temperature":"Min. Hőmérséklet","max_temperature":"Max. Hőmérséklet","min_conductivity":"Min. Vezetőképesség","max_conductivity":"Max. Vezetőképesség","min_illuminance":"Min. Megvilágítás","max_illuminance":"Max. Megvilágítás","min_air_humidity":"Min. Levegő Nedvesség","max_air_humidity":"Max. Levegő Nedvesség","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Vízfogyasztás","max_water_consumption":"Max. Vízfogyasztás","min_fertilizer_consumption":"Min. Műtrágya Fogyasztás","max_fertilizer_consumption":"Max. Műtrágya Fogyasztás","min_ph":"Min. pH Érték","max_ph":"Max. pH Érték","seeds_start":"Mag Kezdet","germination_start":"Csírázás Kezdet","rooting_start":"Gyökeresedés Kezdet","growing_start":"Növekedés Kezdet","flowering_start":"Virágzás Kezdet","harvested_date":"Betakarítás Kezdet","removed_date":"Eltávolítás Kezdet","seeds_duration":"Mag Időtartam","germination_duration":"Csírázás Időtartam","rooting_duration":"Gyökeresedés Időtartam","growing_duration":"Növekedési időtartam","flower_duration":"Virágzási időtartam","harvested_duration":"Betakarítás Időtartam","removed_duration":"Eltávolítás Időtartam","plant_emoji":"Ikon"},"growth_phases":{"seeds":"Mag","germination":"Csírázás","rooting":"Gyökeresedés","growing":"Növekedés","flowering":"Virágzás","harvested":"Betakarítva","removed":"Eltávolítva"},"treatments":{"":"Nincs","cut":"Vágás","super cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray pest":"Kártevő Irtás","spray water":"Vízpermetezés"},"history":{"days":"Napok","pot_size_placeholder":"Cserép mérete literben...","please_select":"Kérjük válasszon...","cut":"Vágás","super_cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray_pest":"Kártevő Irtás","spray_water":"Vízpermetezés","growth_phase":"Növekedési Fázis","area":"Terület","pot_size":"Cserép Mérete","treatment":"Kezelés","journal":"Napló","add_entry":"Bejegyzés Hozzáadása","image_taken":"Kép Készítve","photo":"Fotó","phase_started":"Fázis Elkezdve","pot_size_changed":"Cserép Mérete Megváltozott","moved_to":"Áthelyezve ide","harvest":"Betakarítás","expected_harvest_date":"Várható Betakarítási Dátum","journal_placeholder":"Napló bejegyzés..."},"list_card":{"title":"Brokkoli Lista Kártya","description":"Táblázatos áttekintés az összes növényről","plant_overview":"Növény Áttekintés","search_placeholder":"Növények keresése...","filter_close":"Szűrő Bezárása","filter":"Szűrő","multiselect_end":"Többszörös Kiválasztás Befejezése","multiselect":"Többszörös Kiválasztás","search_reset":"Keresés Visszaállítása","search_default":"Keresés...","entity_type":"Entitás Típus","plants":"Növények","cycles":"Ciklusok","filter_range_to":"ig","add_plant":"Új Növény Hozzáadása"},"helpers":{"growth_phase":"Növekedési Fázis","flowering_duration":"Virágzás Időtartama","pot_size":"Cserép Mérete","water_capacity":"Víz Kapacitás","treatment":"Kezelés","health":"Egészség","journal":"Napló","location":"Helyszín","cycle":"Ciklus"}}}')},9538:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Non disponibile","config_error_entity_required":"Devi definire un\'entità o listen_to","area_config_error":"Devi definire almeno un\'area, un\'entità o un elenco di entità","plants_count":"Piante","return_to_cycle":"Ritorna al Ciclo","previous_image":"Immagine Precedente","next_image":"Immagine Successiva","unknown_date":"Data Sconosciuta","tooltip_error":"Errore","tooltip_range":"Intervallo","tooltip_mean":"Media","tooltip_min_max":"Min - Max","day":"Giorno","days_since_planting":"Giorni dalla Piantagione","upload_images_only":"Per favore carica solo immagini!","image_too_large":"Immagine troppo grande! La dimensione massima è 10MB.","upload_error":"Errore di Caricamento","delete_image_error":"Errore nell\'eliminazione dell\'immagine","set_main_image_error":"Errore nell\'impostazione dell\'immagine principale","delete_error":"Errore nell\'eliminazione","add_image":"Aggiungi Immagine","set_as_main_image":"Imposta come Immagine Principale","delete_image":"Elimina Immagine","close":"Chiudi","no_images_available":"Nessuna immagine disponibile","click_camera_to_add_image":"Clicca sull\'icona della fotocamera sopra per aggiungere un\'immagine","clone_plant":"Clona Pianta","move_to_cycle":"Sposta al Ciclo","replace_sensors":"Sostituisci Sensori","delete_plant":"Elimina Pianta","select_cycle":"Seleziona Ciclo","please_select":"Per favore seleziona...","move":"Sposta","cancel":"Annulla","clone":"Clona","delete_plant_confirmation":"Vuoi davvero eliminare questa pianta? Questa azione non può essere annullata.","confirm_delete":"Conferma Eliminazione","no_matching_sensors":"Nessun sensore corrispondente trovato"},"fields":{"friendly_name":"Nome","state":"Stato","area":"Area","growth_phase":"Fase di Crescita","cycle":"Ciclo","pot_size":"Dimensione Vaso","flowering_duration":"Durata di Fioritura","strain":"Varietà","breeder":"Allevatore","feminized":"Femminizzata","original_flowering_duration":"Durata Fioritura Originale","timestamp":"Timestamp","difficulty":"Difficoltà","yield":"Resa","mold_resistance":"Resistenza alla Muffa","hunger":"Fame","effects":"Effetti","smell":"Odore","taste":"Gusto","phenotype":"Fenotipo","growth_stretch":"Allungamento Crescita","flower_stretch":"Allungamento Fioritura","notes":"Note","website":"Sito Web","lineage":"Lignaggio","infotext1":"Testo Info 1","infotext2":"Testo Info 2","min_soil_moisture":"Umidità Min. Suolo","max_soil_moisture":"Umidità Max. Suolo","min_temperature":"Temperatura Min.","max_temperature":"Temperatura Max.","min_conductivity":"Conduttività Min.","max_conductivity":"Conduttività Max.","min_illuminance":"Illuminazione Min.","max_illuminance":"Illuminazione Max.","min_air_humidity":"Umidità Min. Aria","max_air_humidity":"Umidità Max. Aria","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consumo Min. Acqua","max_water_consumption":"Consumo Max. Acqua","min_fertilizer_consumption":"Consumo Min. Fertilizzante","max_fertilizer_consumption":"Consumo Max. Fertilizzante","min_ph":"Valore pH Min.","max_ph":"Valore pH Max.","seed_start":"Inizio Seme","germination_start":"Inizio Germinazione","rooting_start":"Inizio Radicazione","growth_start":"Inizio Crescita","flowering_start":"Inizio Fioritura","harvested_start":"Inizio Raccolta","removed_start":"Inizio Rimozione","seed_duration":"Durata Seme","germination_duration":"Durata Germinazione","rooting_duration":"Durata Radicazione","growth_duration":"Durata di Crescita","flower_duration":"Durata di Fioritura","harvested_duration":"Durata Raccolta","removed_duration":"Durata Rimozione"},"sensors":{"temperature":"Temperatura","soil_moisture":"Umidità del Suolo","moisture":"Umidità del Suolo","conductivity":"Conduttività","illuminance":"Illuminazione","air_humidity":"Umidità dell\'Aria","humidity":"Umidità dell\'Aria","dli":"Integrale di Luce Giornaliera","water_consumption":"Consumo d\'Acqua","fertilizer_consumption":"Consumo di Fertilizzante","power_consumption":"Consumo di Energia","ph":"Valore pH","health":"Salute","total_ppfd":"PPFD Totale","energy_cost":"Costo Energetico"},"growth_phases":{"seeds":"Seme","germination":"Germinazione","rooting":"Radicazione","growing":"Crescita","flowering":"Fioritura","harvested":"Raccolta","removed":"Rimossa"},"treatments":{"":"Nessuno","cut":"Taglio","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controllo Parassiti","spray water":"Spruzzatura Acqua"},"history":{"days":"Giorni","pot_size_placeholder":"Dimensione vaso in litri...","please_select":"Per favore seleziona...","cut":"Taglio","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controllo Parassiti","spray_water":"Spruzzatura Acqua","growth_phase":"Fase di Crescita","area":"Area","pot_size":"Dimensione Vaso","treatment":"Trattamento","journal":"Diario","add_entry":"Aggiungi Voce","image_taken":"Immagine Scattata","photo":"Foto","phase_started":"Fase Iniziata","pot_size_changed":"Dimensione Vaso Cambiata","moved_to":"Spostato a","harvest":"Raccolta","expected_harvest_date":"Data Raccolta Prevista","journal_placeholder":"Voce del diario..."},"list_card":{"title":"Scheda Lista Brokkoli","description":"Una vista tabellare di tutte le piante","plant_overview":"Panoramica Piante","search_placeholder":"Cerca piante...","filter_close":"Chiudi Filtro","filter":"Filtro","multiselect_end":"Termina Multi-Selezione","multiselect":"Multi-Selezione","search_reset":"Reimposta Ricerca","search_default":"Cerca...","entity_type":"Tipo Entità","plants":"Piante","cycles":"Cicli","filter_range_to":"a","add_plant":"Aggiungi Nuova Pianta"},"graph":{"temperature":"Temperatura","conductivity":"Conduttività","dli":"DLI","health":"Salute","water_consumption":"Consumo d\'Acqua","fertilizer_consumption":"Consumo di Fertilizzante","power_consumption":"Consumo di Energia"},"diagnostics":{"energy_cost":"Costo Energetico","total_power_consumption":"Consumo Totale di Energia","total_integral":"Integrale Totale","total_water_consumption":"Consumo Totale d\'Acqua","total_fertilizer_consumption":"Consumo Totale di Fertilizzante","power_consumption":"Consumo di Energia","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Totale"},"helpers":{"growth_phase":"Fase di Crescita","flowering_duration":"Durata Fioritura","pot_size":"Dimensione Vaso","water_capacity":"Capacità Acqua","treatment":"Trattamento","health":"Salute","journal":"Diario","location":"Posizione","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modalità: Anelli (clic per cambiare)","legend_labels_mode_active":"Modalità: Etichette (clic per cambiare)","legend_heatmap_mode_active":"Modalità: Mappa di calore (clic per cambiare)","flowering_past":"Fioritura passata","flowering_to_go":"Fioritura rimanente","days":"Giorni","plant_emoji_hint":"Trova una grande selezione su [emojipedia.org](https://emojipedia.org)","create_plant":"Crea pianta","create":"Crea","no_sensor":"Nessuno","entity_not_available":"Entità non disponibile","no_data":"Nessun dato disponibile","error":"Errore","define_entity":"Devi definire un\'entità","loading":"Caricamento...","unknown_state":"Stato sconosciuto","name":"Nome","status":"Stato","area":"Area","config_error_entity_required":"Devi definire un\'entità oppure listen_to","unavailable":"Non disponibile","plants_count":"Piante","plants_selected":"Piante selezionate","no_plants_found":"Nessuna pianta trovata","entity_not_found":"Entità non trovata","return_to_cycle":"Torna al ciclo","entity_unavailable":"Entità non disponibile","no_entity_configured":"Nessuna entità o listen_to configurata","area_config_error":"Devi definire almeno un\'area, un\'entità o un elenco di entità","members":"Membri","open":"Apri","photo_taken_on":"Foto scattata il","previous_image":"Immagine precedente","next_image":"Immagine successiva","unknown_date":"Data sconosciuta","no_completed_phases":"Nessuna fase completata finora","harvest_date":"Raccolta il","harvest_weight":"Peso del raccolto","harvest_notes":"Note sul raccolto","treatment_description":"Trattamento eseguito","pot_size_changed":"Dimensione del vaso cambiata in","moved_to_area":"Spostata in","legend_primary_color":"Colore primario","legend_secondary_color":"Colore secondario","legend_opacity":"Opacità","legend_rings_mode":"Modalità anelli","legend_labels_mode":"Modalità etichette","legend_heatmap_mode":"Modalità mappa di calore","confirm":"Conferma","tooltip_error":"Errore nel caricamento dei dati","tooltip_range":"Intervallo","tooltip_mean":"Media","tooltip_min_max":"Min - Max","day":"Giorno","days_since_planting":"Giorni dalla semina","upload_images_only":"Carica solo immagini!","image_too_large":"Immagine troppo grande! La dimensione massima è 10MB.","upload_error":"Errore durante il caricamento","delete_image_error":"Errore durante l\'eliminazione dell\'immagine","set_main_image_error":"Errore nell\'impostare l\'immagine principale","delete_error":"Errore durante l\'eliminazione","add_image":"Aggiungi immagine","set_as_main_image":"Imposta come immagine principale","delete_image":"Elimina immagine","close":"Chiudi","no_images_available":"Nessuna immagine disponibile","click_camera_to_add_image":"Clicca sull\'icona della fotocamera qui sopra per aggiungere un\'immagine","clone_plant":"Clona pianta","move_to_cycle":"Sposta nel ciclo","replace_sensors":"Sostituisci sensori","delete_plant":"Elimina pianta","select_cycle":"Seleziona ciclo","please_select":"Seleziona...","move":"Sposta","cancel":"Annulla","clone":"Clona","delete_plant_confirmation":"Vuoi davvero eliminare questa pianta? L\'azione non può essere annullata.","confirm_delete":"Conferma eliminazione","no_matching_sensors":"Nessun sensore corrispondente trovato","other_images":"Altre immagini","back_to_main_images":"Torna alle immagini principali","main_images":"Immagini principali","edit":"Modifica","save":"Salva","legend_collapsed_mode_active":"Modalità: Compresso (clic per cambiare)","delete_selected":"Elimina selezionate","area_edit_mode_on":"Modalità spostamento attiva - clicca per uscire dalla modifica","area_edit_mode_off":"Modalità vista - clicca per attivare spostamento e selezione multipla"},"sensors":{"temperature":"Temperatura","soil_moisture":"Umidità del terreno","moisture":"Umidità del terreno","conductivity":"Conducibilità","illuminance":"Illuminamento","air_humidity":"Umidità dell\'aria","humidity":"Umidità dell\'aria","dli":"Integrale luminoso giornaliero","water_consumption":"Consumo d\'acqua","fertilizer_consumption":"Consumo di fertilizzante","power_consumption":"Consumo elettrico","total_water_consumption":"Consumo totale d\'acqua","total_fertilizer_consumption":"Consumo totale di fertilizzante","total_power_consumption":"Consumo elettrico totale","ph":"Valore pH","health":"Salute","ppfd_mol":"PPFD","total_ppfd":"PPFD totale","total_ppfd_mol_integral":"PPFD totale","total_integral":"Integrale totale","energy_cost":"Costo energetico"},"fields":{"friendly_name":"Nome","state":"Stato","area":"Area","growth_phase":"Fase di Crescita","cycle":"Ciclo","pot_size":"Dimensione Vaso","flowering_duration":"Durata di Fioritura","strain":"Varietà","breeder":"Allevatore","feminized":"Femminizzata","original_flowering_duration":"Durata Fioritura Originale","timestamp":"Timestamp","difficulty":"Difficoltà","yield":"Resa","mold_resistance":"Resistenza alla Muffa","hunger":"Fame","effects":"Effetti","smell":"Odore","taste":"Gusto","phenotype":"Fenotipo","growth_stretch":"Allungamento Crescita","flower_stretch":"Allungamento Fioritura","notes":"Note","website":"Sito Web","lineage":"Lignaggio","infotext1":"Testo Info 1","infotext2":"Testo Info 2","min_soil_moisture":"Umidità Min. Suolo","max_soil_moisture":"Umidità Max. Suolo","min_temperature":"Temperatura Min.","max_temperature":"Temperatura Max.","min_conductivity":"Conduttività Min.","max_conductivity":"Conduttività Max.","min_illuminance":"Illuminazione Min.","max_illuminance":"Illuminazione Max.","min_air_humidity":"Umidità Min. Aria","max_air_humidity":"Umidità Max. Aria","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consumo Min. Acqua","max_water_consumption":"Consumo Max. Acqua","min_fertilizer_consumption":"Consumo Min. Fertilizzante","max_fertilizer_consumption":"Consumo Max. Fertilizzante","min_ph":"Valore pH Min.","max_ph":"Valore pH Max.","seeds_start":"Inizio Seme","germination_start":"Inizio Germinazione","rooting_start":"Inizio Radicazione","growing_start":"Inizio Crescita","flowering_start":"Inizio Fioritura","harvested_date":"Inizio Raccolta","removed_date":"Inizio Rimozione","seeds_duration":"Durata Seme","germination_duration":"Durata Germinazione","rooting_duration":"Durata Radicazione","growing_duration":"Durata di Crescita","flower_duration":"Durata di Fioritura","harvested_duration":"Durata Raccolta","removed_duration":"Durata Rimozione","plant_emoji":"Icona"},"growth_phases":{"seeds":"Seme","germination":"Germinazione","rooting":"Radicazione","growing":"Crescita","flowering":"Fioritura","harvested":"Raccolta","removed":"Rimossa"},"treatments":{"":"Nessuno","cut":"Taglio","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controllo Parassiti","spray water":"Spruzzatura Acqua"},"history":{"days":"Giorni","pot_size_placeholder":"Dimensione vaso in litri...","please_select":"Per favore seleziona...","cut":"Taglio","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controllo Parassiti","spray_water":"Spruzzatura Acqua","growth_phase":"Fase di Crescita","area":"Area","pot_size":"Dimensione Vaso","treatment":"Trattamento","journal":"Diario","add_entry":"Aggiungi Voce","image_taken":"Immagine Scattata","photo":"Foto","phase_started":"Fase Iniziata","pot_size_changed":"Dimensione Vaso Cambiata","moved_to":"Spostato a","harvest":"Raccolta","expected_harvest_date":"Data Raccolta Prevista","journal_placeholder":"Voce del diario..."},"list_card":{"title":"Scheda Lista Brokkoli","description":"Una vista tabellare di tutte le piante","plant_overview":"Panoramica Piante","search_placeholder":"Cerca piante...","filter_close":"Chiudi Filtro","filter":"Filtro","multiselect_end":"Termina Multi-Selezione","multiselect":"Multi-Selezione","search_reset":"Reimposta Ricerca","search_default":"Cerca...","entity_type":"Tipo Entità","plants":"Piante","cycles":"Cicli","filter_range_to":"a","add_plant":"Aggiungi Nuova Pianta"},"helpers":{"growth_phase":"Fase di Crescita","flowering_duration":"Durata Fioritura","pot_size":"Dimensione Vaso","water_capacity":"Capacità Acqua","treatment":"Trattamento","health":"Salute","journal":"Diario","location":"Posizione","cycle":"Ciclo"}}}')},277:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Niet beschikbaar","config_error_entity_required":"Je moet een entiteit of listen_to definiëren","area_config_error":"Je moet minstens een gebied, een entiteit of een lijst van entiteiten definiëren","plants_count":"Planten","return_to_cycle":"Terug naar Cyclus","previous_image":"Vorige Afbeelding","next_image":"Volgende Afbeelding","unknown_date":"Onbekende Datum","tooltip_error":"Fout","tooltip_range":"Bereik","tooltip_mean":"Gemiddelde","tooltip_min_max":"Min - Max","day":"Dag","days_since_planting":"Dagen sinds Planten","upload_images_only":"Upload alleen afbeeldingen!","image_too_large":"Afbeelding te groot! Maximale grootte is 10MB.","upload_error":"Upload Fout","delete_image_error":"Fout bij verwijderen afbeelding","set_main_image_error":"Fout bij instellen hoofdafbeelding","delete_error":"Fout bij verwijderen","add_image":"Afbeelding Toevoegen","set_as_main_image":"Instellen als Hoofdafbeelding","delete_image":"Afbeelding Verwijderen","close":"Sluiten","no_images_available":"Geen afbeeldingen beschikbaar","click_camera_to_add_image":"Klik op het camera-icoon hierboven om een afbeelding toe te voegen","clone_plant":"Plant Klonen","move_to_cycle":"Verplaats naar Cyclus","replace_sensors":"Sensoren Vervangen","delete_plant":"Plant Verwijderen","select_cycle":"Cyclus Selecteren","please_select":"Selecteer alsjeblieft...","move":"Verplaatsen","cancel":"Annuleren","clone":"Klonen","delete_plant_confirmation":"Wil je deze plant echt verwijderen? Deze actie kan niet ongedaan worden gemaakt.","confirm_delete":"Verwijdering Bevestigen","no_matching_sensors":"Geen overeenkomende sensoren gevonden"},"fields":{"friendly_name":"Naam","state":"Status","area":"Gebied","growth_phase":"Groeifase","cycle":"Cyclus","pot_size":"Pot Grootte","flowering_duration":"Bloeiduur","strain":"Soort","breeder":"Kweker","feminized":"Gefeminiseerd","original_flowering_duration":"Originele Bloei Duur","timestamp":"Tijdstempel","difficulty":"Moeilijkheid","yield":"Opbrengst","mold_resistance":"Schimmelresistentie","hunger":"Honger","effects":"Effecten","smell":"Geur","taste":"Smaak","phenotype":"Fenotype","growth_stretch":"Groei Rek","flower_stretch":"Bloei Rek","notes":"Notities","website":"Website","lineage":"Afstamming","infotext1":"Info Tekst 1","infotext2":"Info Tekst 2","min_soil_moisture":"Min. Bodem Vochtigheid","max_soil_moisture":"Max. Bodem Vochtigheid","min_temperature":"Min. Temperatuur","max_temperature":"Max. Temperatuur","min_conductivity":"Min. Geleidbaarheid","max_conductivity":"Max. Geleidbaarheid","min_illuminance":"Min. Verlichting","max_illuminance":"Max. Verlichting","min_air_humidity":"Min. Lucht Vochtigheid","max_air_humidity":"Max. Lucht Vochtigheid","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Waterverbruik","max_water_consumption":"Max. Waterverbruik","min_fertilizer_consumption":"Min. Mestverbruik","max_fertilizer_consumption":"Max. Mestverbruik","min_ph":"Min. pH Waarde","max_ph":"Max. pH Waarde","seed_start":"Zaad Start","germination_start":"Kieming Start","rooting_start":"Worteling Start","growth_start":"Groei Start","flowering_start":"Bloei Start","harvested_start":"Geoogst Start","removed_start":"Verwijderd Start","seed_duration":"Zaad Duur","germination_duration":"Kieming Duur","rooting_duration":"Worteling Duur","growth_duration":"Groeiduur","flower_duration":"Bloeiduur","harvested_duration":"Geoogst Duur","removed_duration":"Verwijderd Duur"},"sensors":{"temperature":"Temperatuur","soil_moisture":"Bodem Vochtigheid","moisture":"Bodem Vochtigheid","conductivity":"Geleidbaarheid","illuminance":"Verlichting","air_humidity":"Lucht Vochtigheid","humidity":"Lucht Vochtigheid","dli":"Dagelijkse Licht Integraal","water_consumption":"Waterverbruik","fertilizer_consumption":"Mestverbruik","power_consumption":"Energieverbruik","ph":"pH Waarde","health":"Gezondheid","total_ppfd":"Totale PPFD","energy_cost":"Energiekosten"},"growth_phases":{"seeds":"Zaad","germination":"Kieming","rooting":"Worteling","growing":"Groei","flowering":"Bloei","harvested":"Geoogst","removed":"Verwijderd"},"treatments":{"":"Geen","cut":"Snijden","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Ongedierte Bestrijding","spray water":"Water Sproeien"},"history":{"days":"Dagen","pot_size_placeholder":"Pot grootte in liters...","please_select":"Selecteer alsjeblieft...","cut":"Snijden","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Ongedierte Bestrijding","spray_water":"Water Sproeien","growth_phase":"Groeifase","area":"Gebied","pot_size":"Pot Grootte","treatment":"Behandeling","journal":"Dagboek","add_entry":"Item Toevoegen","image_taken":"Afbeelding Genomen","photo":"Foto","phase_started":"Fase Gestart","pot_size_changed":"Pot Grootte Veranderd","moved_to":"Verplaatst naar","harvest":"Oogst","expected_harvest_date":"Verwachte Oogst Datum","journal_placeholder":"Dagboek item..."},"list_card":{"title":"Brokkoli Lijst Kaart","description":"Een tabeloverzicht van alle planten","plant_overview":"Plant Overzicht","search_placeholder":"Zoek planten...","filter_close":"Filter Sluiten","filter":"Filter","multiselect_end":"Multi-Selectie Beëindigen","multiselect":"Multi-Selectie","search_reset":"Zoeken Resetten","search_default":"Zoeken...","entity_type":"Entiteit Type","plants":"Planten","cycles":"Cycli","filter_range_to":"tot","add_plant":"Nieuwe Plant Toevoegen"},"graph":{"temperature":"Temperatuur","conductivity":"Geleidbaarheid","dli":"DLI","health":"Gezondheid","water_consumption":"Waterverbruik","fertilizer_consumption":"Mestverbruik","power_consumption":"Energieverbruik"},"diagnostics":{"energy_cost":"Energiekosten","total_power_consumption":"Totaal Energieverbruik","total_integral":"Totale Integraal","total_water_consumption":"Totaal Waterverbruik","total_fertilizer_consumption":"Totaal Mestverbruik","power_consumption":"Energieverbruik","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Totale PPFD"},"helpers":{"growth_phase":"Groeifase","flowering_duration":"Bloei Duur","pot_size":"Pot Grootte","water_capacity":"Water Capaciteit","treatment":"Behandeling","health":"Gezondheid","journal":"Dagboek","location":"Locatie","cycle":"Cyclus"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modus: Ringen (klik om te wisselen)","legend_labels_mode_active":"Modus: Labels (klik om te wisselen)","legend_heatmap_mode_active":"Modus: Hittekaart (klik om te wisselen)","flowering_past":"Bloei verstreken","flowering_to_go":"Bloei resterend","days":"Dagen","plant_emoji_hint":"Vind een grote selectie op [emojipedia.org](https://emojipedia.org)","create_plant":"Plant maken","create":"Maken","no_sensor":"Geen","entity_not_available":"Entiteit niet beschikbaar","no_data":"Geen gegevens beschikbaar","error":"Fout","define_entity":"Je moet een entiteit opgeven","loading":"Laden...","unknown_state":"Onbekende status","name":"Naam","status":"Status","area":"Gebied","config_error_entity_required":"Je moet een entiteit of listen_to opgeven","unavailable":"Niet beschikbaar","plants_count":"Planten","plants_selected":"Planten geselecteerd","no_plants_found":"Geen planten gevonden","entity_not_found":"Entiteit niet gevonden","return_to_cycle":"Terug naar cyclus","entity_unavailable":"Entiteit niet beschikbaar","no_entity_configured":"Geen entiteit of listen_to geconfigureerd","area_config_error":"Je moet minstens een gebied, een entiteit of een lijst met entiteiten opgeven","members":"Leden","open":"Openen","photo_taken_on":"Foto genomen op","previous_image":"Vorige afbeelding","next_image":"Volgende afbeelding","unknown_date":"Datum onbekend","no_completed_phases":"Nog geen afgeronde fases","harvest_date":"Geoogst op","harvest_weight":"Oogstgewicht","harvest_notes":"Oogstnotities","treatment_description":"Behandeling uitgevoerd","pot_size_changed":"Potmaat gewijzigd naar","moved_to_area":"Verplaatst naar","legend_primary_color":"Primaire kleur","legend_secondary_color":"Secundaire kleur","legend_opacity":"Dekking","legend_rings_mode":"Ringen-modus","legend_labels_mode":"Labels-modus","legend_heatmap_mode":"Heatmap-modus","confirm":"Bevestigen","tooltip_error":"Fout bij het laden van de gegevens","tooltip_range":"Bereik","tooltip_mean":"Gemiddelde","tooltip_min_max":"Min - Max","day":"Dag","days_since_planting":"Dagen sinds het planten","upload_images_only":"Upload alleen afbeeldingen!","image_too_large":"Afbeelding te groot! Maximale grootte is 10MB.","upload_error":"Fout bij uploaden","delete_image_error":"Fout bij het verwijderen van de afbeelding","set_main_image_error":"Fout bij het instellen van de hoofdafbeelding","delete_error":"Fout bij verwijderen","add_image":"Afbeelding toevoegen","set_as_main_image":"Als hoofdafbeelding instellen","delete_image":"Afbeelding verwijderen","close":"Sluiten","no_images_available":"Geen afbeeldingen beschikbaar","click_camera_to_add_image":"Klik op het camerapictogram hierboven om een afbeelding toe te voegen","clone_plant":"Plant klonen","move_to_cycle":"Naar cyclus verplaatsen","replace_sensors":"Sensoren vervangen","delete_plant":"Plant verwijderen","select_cycle":"Cyclus selecteren","please_select":"Maak een keuze...","move":"Verplaatsen","cancel":"Annuleren","clone":"Klonen","delete_plant_confirmation":"Wil je deze plant echt verwijderen? Deze actie kan niet ongedaan worden gemaakt.","confirm_delete":"Verwijderen bevestigen","no_matching_sensors":"Geen passende sensoren gevonden","other_images":"Andere afbeeldingen","back_to_main_images":"Terug naar hoofdafbeeldingen","main_images":"Hoofdafbeeldingen","edit":"Bewerken","save":"Opslaan","legend_collapsed_mode_active":"Modus: Ingeklapt (klik om te wisselen)","delete_selected":"Selectie verwijderen","area_edit_mode_on":"Verplaatsmodus aan - klik om de bewerkmodus te verlaten","area_edit_mode_off":"Weergavemodus - klik om verplaatsen en meervoudige selectie in te schakelen"},"sensors":{"temperature":"Temperatuur","soil_moisture":"Bodemvochtigheid","moisture":"Bodemvochtigheid","conductivity":"Geleidbaarheid","illuminance":"Lichtsterkte","air_humidity":"Luchtvochtigheid","humidity":"Luchtvochtigheid","dli":"Dagelijkse lichtintegraal","water_consumption":"Waterverbruik","fertilizer_consumption":"Mestverbruik","power_consumption":"Stroomverbruik","total_water_consumption":"Totaal waterverbruik","total_fertilizer_consumption":"Totaal mestverbruik","total_power_consumption":"Totaal stroomverbruik","ph":"pH-waarde","health":"Gezondheid","ppfd_mol":"PPFD","total_ppfd":"Totale PPFD","total_ppfd_mol_integral":"Totale PPFD","total_integral":"Totale integraal","energy_cost":"Energiekosten"},"fields":{"friendly_name":"Naam","state":"Status","area":"Gebied","growth_phase":"Groeifase","cycle":"Cyclus","pot_size":"Pot Grootte","flowering_duration":"Bloeiduur","strain":"Soort","breeder":"Kweker","feminized":"Gefeminiseerd","original_flowering_duration":"Originele Bloei Duur","timestamp":"Tijdstempel","difficulty":"Moeilijkheid","yield":"Opbrengst","mold_resistance":"Schimmelresistentie","hunger":"Honger","effects":"Effecten","smell":"Geur","taste":"Smaak","phenotype":"Fenotype","growth_stretch":"Groei Rek","flower_stretch":"Bloei Rek","notes":"Notities","website":"Website","lineage":"Afstamming","infotext1":"Info Tekst 1","infotext2":"Info Tekst 2","min_soil_moisture":"Min. Bodem Vochtigheid","max_soil_moisture":"Max. Bodem Vochtigheid","min_temperature":"Min. Temperatuur","max_temperature":"Max. Temperatuur","min_conductivity":"Min. Geleidbaarheid","max_conductivity":"Max. Geleidbaarheid","min_illuminance":"Min. Verlichting","max_illuminance":"Max. Verlichting","min_air_humidity":"Min. Lucht Vochtigheid","max_air_humidity":"Max. Lucht Vochtigheid","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Waterverbruik","max_water_consumption":"Max. Waterverbruik","min_fertilizer_consumption":"Min. Mestverbruik","max_fertilizer_consumption":"Max. Mestverbruik","min_ph":"Min. pH Waarde","max_ph":"Max. pH Waarde","seeds_start":"Zaad Start","germination_start":"Kieming Start","rooting_start":"Worteling Start","growing_start":"Groei Start","flowering_start":"Bloei Start","harvested_date":"Geoogst Start","removed_date":"Verwijderd Start","seeds_duration":"Zaad Duur","germination_duration":"Kieming Duur","rooting_duration":"Worteling Duur","growing_duration":"Groeiduur","flower_duration":"Bloeiduur","harvested_duration":"Geoogst Duur","removed_duration":"Verwijderd Duur","plant_emoji":"Pictogram"},"growth_phases":{"seeds":"Zaad","germination":"Kieming","rooting":"Worteling","growing":"Groei","flowering":"Bloei","harvested":"Geoogst","removed":"Verwijderd"},"treatments":{"":"Geen","cut":"Snijden","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Ongedierte Bestrijding","spray water":"Water Sproeien"},"history":{"days":"Dagen","pot_size_placeholder":"Pot grootte in liters...","please_select":"Selecteer alsjeblieft...","cut":"Snijden","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Ongedierte Bestrijding","spray_water":"Water Sproeien","growth_phase":"Groeifase","area":"Gebied","pot_size":"Pot Grootte","treatment":"Behandeling","journal":"Dagboek","add_entry":"Item Toevoegen","image_taken":"Afbeelding Genomen","photo":"Foto","phase_started":"Fase Gestart","pot_size_changed":"Pot Grootte Veranderd","moved_to":"Verplaatst naar","harvest":"Oogst","expected_harvest_date":"Verwachte Oogst Datum","journal_placeholder":"Dagboek item..."},"list_card":{"title":"Brokkoli Lijst Kaart","description":"Een tabeloverzicht van alle planten","plant_overview":"Plant Overzicht","search_placeholder":"Zoek planten...","filter_close":"Filter Sluiten","filter":"Filter","multiselect_end":"Multi-Selectie Beëindigen","multiselect":"Multi-Selectie","search_reset":"Zoeken Resetten","search_default":"Zoeken...","entity_type":"Entiteit Type","plants":"Planten","cycles":"Cycli","filter_range_to":"tot","add_plant":"Nieuwe Plant Toevoegen"},"helpers":{"growth_phase":"Groeifase","flowering_duration":"Bloei Duur","pot_size":"Pot Grootte","water_capacity":"Water Capaciteit","treatment":"Behandeling","health":"Gezondheid","journal":"Dagboek","location":"Locatie","cycle":"Cyclus"}}}')},1119:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Niedostępne","config_error_entity_required":"Musisz zdefiniować encję lub listen_to","area_config_error":"Musisz zdefiniować co najmniej jeden obszar, encję lub listę encji","plants_count":"Rośliny","return_to_cycle":"Powrót do Cyklu","previous_image":"Poprzedni Obraz","next_image":"Następny Obraz","unknown_date":"Nieznana Data","tooltip_error":"Błąd","tooltip_range":"Zakres","tooltip_mean":"Średnia","tooltip_min_max":"Min - Max","day":"Dzień","days_since_planting":"Dni od Sadzenia","upload_images_only":"Proszę przesyłać tylko obrazy!","image_too_large":"Obraz zbyt duży! Maksymalny rozmiar to 10MB.","upload_error":"Błąd Przesyłania","delete_image_error":"Błąd usuwania obrazu","set_main_image_error":"Błąd ustawiania głównego obrazu","delete_error":"Błąd usuwania","add_image":"Dodaj Obraz","set_as_main_image":"Ustaw jako Główny Obraz","delete_image":"Usuń Obraz","close":"Zamknij","no_images_available":"Brak dostępnych obrazów","click_camera_to_add_image":"Kliknij ikonę aparatu powyżej, aby dodać obraz","clone_plant":"Klonuj Roślinę","move_to_cycle":"Przenieś do Cyklu","replace_sensors":"Zamień Czujniki","delete_plant":"Usuń Roślinę","select_cycle":"Wybierz Cykl","please_select":"Proszę wybrać...","move":"Przenieś","cancel":"Anuluj","clone":"Klonuj","delete_plant_confirmation":"Czy na pewno chcesz usunąć tę roślinę? Ta akcja nie może być cofnięta.","confirm_delete":"Potwierdź Usunięcie","no_matching_sensors":"Nie znaleziono pasujących czujników"},"fields":{"friendly_name":"Nazwa","state":"Stan","area":"Obszar","growth_phase":"Faza Wzrostu","cycle":"Cykl","pot_size":"Rozmiar Doniczki","flowering_duration":"Czas Kwitnienia","strain":"Odmiana","breeder":"Hodowca","feminized":"Sfeminizowana","original_flowering_duration":"Oryginalny Czas Kwitnienia","timestamp":"Znacznik Czasu","difficulty":"Trudność","yield":"Plon","mold_resistance":"Odporność na Pleśń","hunger":"Głód","effects":"Efekty","smell":"Zapach","taste":"Smak","phenotype":"Fenotyp","growth_stretch":"Rozciągnięcie Wzrostu","flower_stretch":"Rozciągnięcie Kwitnienia","notes":"Notatki","website":"Strona Internetowa","lineage":"Rodowód","infotext1":"Tekst Info 1","infotext2":"Tekst Info 2","min_soil_moisture":"Min. Wilgotność Gleby","max_soil_moisture":"Max. Wilgotność Gleby","min_temperature":"Min. Temperatura","max_temperature":"Max. Temperatura","min_conductivity":"Min. Przewodność","max_conductivity":"Max. Przewodność","min_illuminance":"Min. Oświetlenie","max_illuminance":"Max. Oświetlenie","min_air_humidity":"Min. Wilgotność Powietrza","max_air_humidity":"Max. Wilgotność Powietrza","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Zużycie Wody","max_water_consumption":"Max. Zużycie Wody","min_fertilizer_consumption":"Min. Zużycie Nawozu","max_fertilizer_consumption":"Max. Zużycie Nawozu","min_ph":"Min. Wartość pH","max_ph":"Max. Wartość pH","seed_start":"Start Nasiona","germination_start":"Start Kiełkowania","rooting_start":"Start Ukorzeniania","growth_start":"Start Wzrostu","flowering_start":"Start Kwitnienia","harvested_start":"Start Zbioru","removed_start":"Start Usunięcia","seed_duration":"Czas Nasiona","germination_duration":"Czas Kiełkowania","rooting_duration":"Czas Ukorzeniania","growth_duration":"Czas Wzrostu","flower_duration":"Czas Kwitnienia","harvested_duration":"Czas Zbioru","removed_duration":"Czas Usunięcia"},"sensors":{"temperature":"Temperatura","soil_moisture":"Wilgotność Gleby","moisture":"Wilgotność Gleby","conductivity":"Przewodność","illuminance":"Oświetlenie","air_humidity":"Wilgotność Powietrza","humidity":"Wilgotność Powietrza","dli":"Dzienna Całka Światła","water_consumption":"Zużycie Wody","fertilizer_consumption":"Zużycie Nawozu","power_consumption":"Zużycie Energii","ph":"Wartość pH","health":"Zdrowie","total_ppfd":"Całkowite PPFD","energy_cost":"Koszt Energii"},"growth_phases":{"seeds":"Nasiono","germination":"Kiełkowanie","rooting":"Ukorzenianie","growing":"Wzrost","flowering":"Kwitnienie","harvested":"Zebrane","removed":"Usunięte"},"treatments":{"":"Brak","cut":"Cięcie","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Zwalczanie Szkodników","spray water":"Opryskiwanie Wodą"},"history":{"days":"Dni","pot_size_placeholder":"Rozmiar doniczki w litrach...","please_select":"Proszę wybrać...","cut":"Cięcie","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Zwalczanie Szkodników","spray_water":"Opryskiwanie Wodą","growth_phase":"Faza Wzrostu","area":"Obszar","pot_size":"Rozmiar Doniczki","treatment":"Zabieg","journal":"Dziennik","add_entry":"Dodaj Wpis","image_taken":"Obraz Zrobiony","photo":"Zdjęcie","phase_started":"Faza Rozpoczęta","pot_size_changed":"Rozmiar Doniczki Zmieniony","moved_to":"Przeniesiono do","harvest":"Zbiór","expected_harvest_date":"Oczekiwana Data Zbioru","journal_placeholder":"Wpis do dziennika..."},"list_card":{"title":"Karta Listy Brokkoli","description":"Widok tabelaryczny wszystkich roślin","plant_overview":"Przegląd Roślin","search_placeholder":"Szukaj roślin...","filter_close":"Zamknij Filtr","filter":"Filtr","multiselect_end":"Zakończ Wielokrotny Wybór","multiselect":"Wielokrotny Wybór","search_reset":"Resetuj Wyszukiwanie","search_default":"Szukaj...","entity_type":"Typ Encji","plants":"Rośliny","cycles":"Cykle","filter_range_to":"do","add_plant":"Dodaj Nową Roślinę"},"graph":{"temperature":"Temperatura","conductivity":"Przewodność","dli":"DLI","health":"Zdrowie","water_consumption":"Zużycie Wody","fertilizer_consumption":"Zużycie Nawozu","power_consumption":"Zużycie Energii"},"diagnostics":{"energy_cost":"Koszt Energii","total_power_consumption":"Całkowite Zużycie Energii","total_integral":"Całkowita Całka","total_water_consumption":"Całkowite Zużycie Wody","total_fertilizer_consumption":"Całkowite Zużycie Nawozu","power_consumption":"Zużycie Energii","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Całkowite PPFD"},"helpers":{"growth_phase":"Faza Wzrostu","flowering_duration":"Czas Kwitnienia","pot_size":"Rozmiar Doniczki","water_capacity":"Pojemność Wody","treatment":"Zabieg","health":"Zdrowie","journal":"Dziennik","location":"Lokalizacja","cycle":"Cykl"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Tryb: Pierścienie (kliknij, aby przełączyć)","legend_labels_mode_active":"Tryb: Etykiety (kliknij, aby przełączyć)","legend_heatmap_mode_active":"Tryb: Mapa cieplna (kliknij, aby przełączyć)","flowering_past":"Kwitnienie minęło","flowering_to_go":"Kwitnienie pozostało","days":"Dni","plant_emoji_hint":"Znajdź duży wybór na [emojipedia.org](https://emojipedia.org)","create_plant":"Utwórz roślinę","create":"Utwórz","no_sensor":"Brak","entity_not_available":"Encja niedostępna","no_data":"Brak dostępnych danych","error":"Błąd","define_entity":"Musisz zdefiniować encję","loading":"Ładowanie...","unknown_state":"Nieznany stan","name":"Nazwa","status":"Stan","area":"Obszar","config_error_entity_required":"Musisz zdefiniować encję lub listen_to","unavailable":"Niedostępne","plants_count":"Rośliny","plants_selected":"Wybrane rośliny","no_plants_found":"Nie znaleziono roślin","entity_not_found":"Nie znaleziono encji","return_to_cycle":"Powrót do cyklu","entity_unavailable":"Encja niedostępna","no_entity_configured":"Nie skonfigurowano encji ani listen_to","area_config_error":"Musisz zdefiniować co najmniej obszar, encję lub listę encji","members":"Członkowie","open":"Otwórz","photo_taken_on":"Zdjęcie zrobiono","previous_image":"Poprzednie zdjęcie","next_image":"Następne zdjęcie","unknown_date":"Nieznana data","no_completed_phases":"Brak zakończonych faz","harvest_date":"Zebrano","harvest_weight":"Masa zbioru","harvest_notes":"Notatki ze zbioru","treatment_description":"Zabieg wykonany","pot_size_changed":"Rozmiar doniczki zmieniony na","moved_to_area":"Przeniesiono do","legend_primary_color":"Kolor podstawowy","legend_secondary_color":"Kolor dodatkowy","legend_opacity":"Krycie","legend_rings_mode":"Tryb pierścieni","legend_labels_mode":"Tryb etykiet","legend_heatmap_mode":"Tryb mapy ciepła","confirm":"Potwierdź","tooltip_error":"Błąd podczas wczytywania danych","tooltip_range":"Zakres","tooltip_mean":"Średnia","tooltip_min_max":"Min - Maks","day":"Dzień","days_since_planting":"Dni od posadzenia","upload_images_only":"Przesyłaj tylko obrazy!","image_too_large":"Obraz jest za duży! Maksymalny rozmiar to 10MB.","upload_error":"Błąd przesyłania","delete_image_error":"Błąd podczas usuwania obrazu","set_main_image_error":"Błąd podczas ustawiania obrazu głównego","delete_error":"Błąd podczas usuwania","add_image":"Dodaj obraz","set_as_main_image":"Ustaw jako obraz główny","delete_image":"Usuń obraz","close":"Zamknij","no_images_available":"Brak obrazów","click_camera_to_add_image":"Kliknij ikonę aparatu powyżej, aby dodać obraz","clone_plant":"Klonuj roślinę","move_to_cycle":"Przenieś do cyklu","replace_sensors":"Zamień czujniki","delete_plant":"Usuń roślinę","select_cycle":"Wybierz cykl","please_select":"Wybierz...","move":"Przenieś","cancel":"Anuluj","clone":"Klonuj","delete_plant_confirmation":"Czy na pewno chcesz usunąć tę roślinę? Tej operacji nie można cofnąć.","confirm_delete":"Potwierdź usunięcie","no_matching_sensors":"Nie znaleziono pasujących czujników","other_images":"Inne obrazy","back_to_main_images":"Powrót do obrazów głównych","main_images":"Obrazy główne","edit":"Edytuj","save":"Zapisz","legend_collapsed_mode_active":"Tryb: Zwinięty (kliknij, aby zmienić)","delete_selected":"Usuń zaznaczone","area_edit_mode_on":"Tryb przesuwania włączony - kliknij, aby wyjść z trybu edycji","area_edit_mode_off":"Tryb podglądu - kliknij, aby włączyć przesuwanie i zaznaczanie wielu roślin"},"sensors":{"temperature":"Temperatura","soil_moisture":"Wilgotność gleby","moisture":"Wilgotność gleby","conductivity":"Przewodność","illuminance":"Natężenie światła","air_humidity":"Wilgotność powietrza","humidity":"Wilgotność powietrza","dli":"Dzienna całka światła","water_consumption":"Zużycie wody","fertilizer_consumption":"Zużycie nawozu","power_consumption":"Zużycie energii","total_water_consumption":"Całkowite zużycie wody","total_fertilizer_consumption":"Całkowite zużycie nawozu","total_power_consumption":"Całkowite zużycie energii","ph":"Wartość pH","health":"Zdrowie","ppfd_mol":"PPFD","total_ppfd":"Całkowite PPFD","total_ppfd_mol_integral":"Całkowite PPFD","total_integral":"Całka całkowita","energy_cost":"Koszt energii"},"fields":{"friendly_name":"Nazwa","state":"Stan","area":"Obszar","growth_phase":"Faza Wzrostu","cycle":"Cykl","pot_size":"Rozmiar Doniczki","flowering_duration":"Czas Kwitnienia","strain":"Odmiana","breeder":"Hodowca","feminized":"Sfeminizowana","original_flowering_duration":"Oryginalny Czas Kwitnienia","timestamp":"Znacznik Czasu","difficulty":"Trudność","yield":"Plon","mold_resistance":"Odporność na Pleśń","hunger":"Głód","effects":"Efekty","smell":"Zapach","taste":"Smak","phenotype":"Fenotyp","growth_stretch":"Rozciągnięcie Wzrostu","flower_stretch":"Rozciągnięcie Kwitnienia","notes":"Notatki","website":"Strona Internetowa","lineage":"Rodowód","infotext1":"Tekst Info 1","infotext2":"Tekst Info 2","min_soil_moisture":"Min. Wilgotność Gleby","max_soil_moisture":"Max. Wilgotność Gleby","min_temperature":"Min. Temperatura","max_temperature":"Max. Temperatura","min_conductivity":"Min. Przewodność","max_conductivity":"Max. Przewodność","min_illuminance":"Min. Oświetlenie","max_illuminance":"Max. Oświetlenie","min_air_humidity":"Min. Wilgotność Powietrza","max_air_humidity":"Max. Wilgotność Powietrza","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Zużycie Wody","max_water_consumption":"Max. Zużycie Wody","min_fertilizer_consumption":"Min. Zużycie Nawozu","max_fertilizer_consumption":"Max. Zużycie Nawozu","min_ph":"Min. Wartość pH","max_ph":"Max. Wartość pH","seeds_start":"Start Nasiona","germination_start":"Start Kiełkowania","rooting_start":"Start Ukorzeniania","growing_start":"Start Wzrostu","flowering_start":"Start Kwitnienia","harvested_date":"Start Zbioru","removed_date":"Start Usunięcia","seeds_duration":"Czas Nasiona","germination_duration":"Czas Kiełkowania","rooting_duration":"Czas Ukorzeniania","growing_duration":"Czas Wzrostu","flower_duration":"Czas Kwitnienia","harvested_duration":"Czas Zbioru","removed_duration":"Czas Usunięcia","plant_emoji":"Ikona"},"growth_phases":{"seeds":"Nasiono","germination":"Kiełkowanie","rooting":"Ukorzenianie","growing":"Wzrost","flowering":"Kwitnienie","harvested":"Zebrane","removed":"Usunięte"},"treatments":{"":"Brak","cut":"Cięcie","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Zwalczanie Szkodników","spray water":"Opryskiwanie Wodą"},"history":{"days":"Dni","pot_size_placeholder":"Rozmiar doniczki w litrach...","please_select":"Proszę wybrać...","cut":"Cięcie","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Zwalczanie Szkodników","spray_water":"Opryskiwanie Wodą","growth_phase":"Faza Wzrostu","area":"Obszar","pot_size":"Rozmiar Doniczki","treatment":"Zabieg","journal":"Dziennik","add_entry":"Dodaj Wpis","image_taken":"Obraz Zrobiony","photo":"Zdjęcie","phase_started":"Faza Rozpoczęta","pot_size_changed":"Rozmiar Doniczki Zmieniony","moved_to":"Przeniesiono do","harvest":"Zbiór","expected_harvest_date":"Oczekiwana Data Zbioru","journal_placeholder":"Wpis do dziennika..."},"list_card":{"title":"Karta Listy Brokkoli","description":"Widok tabelaryczny wszystkich roślin","plant_overview":"Przegląd Roślin","search_placeholder":"Szukaj roślin...","filter_close":"Zamknij Filtr","filter":"Filtr","multiselect_end":"Zakończ Wielokrotny Wybór","multiselect":"Wielokrotny Wybór","search_reset":"Resetuj Wyszukiwanie","search_default":"Szukaj...","entity_type":"Typ Encji","plants":"Rośliny","cycles":"Cykle","filter_range_to":"do","add_plant":"Dodaj Nową Roślinę"},"helpers":{"growth_phase":"Faza Wzrostu","flowering_duration":"Czas Kwitnienia","pot_size":"Rozmiar Doniczki","water_capacity":"Pojemność Wody","treatment":"Zabieg","health":"Zdrowie","journal":"Dziennik","location":"Lokalizacja","cycle":"Cykl"}}}')},6679:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Indisponível","config_error_entity_required":"Você deve definir uma entidade ou listen_to","area_config_error":"Você deve definir pelo menos uma área, uma entidade ou uma lista de entidades","plants_count":"Plantas","return_to_cycle":"Voltar ao Ciclo","previous_image":"Imagem Anterior","next_image":"Próxima Imagem","unknown_date":"Data Desconhecida","tooltip_error":"Erro","tooltip_range":"Intervalo","tooltip_mean":"Média","tooltip_min_max":"Min - Max","day":"Dia","days_since_planting":"Dias desde o Plantio","upload_images_only":"Por favor, envie apenas imagens!","image_too_large":"Imagem muito grande! O tamanho máximo é 10MB.","upload_error":"Erro de Envio","delete_image_error":"Erro ao excluir imagem","set_main_image_error":"Erro ao definir imagem principal","delete_error":"Erro ao excluir","add_image":"Adicionar Imagem","set_as_main_image":"Definir como Imagem Principal","delete_image":"Excluir Imagem","close":"Fechar","no_images_available":"Nenhuma imagem disponível","click_camera_to_add_image":"Clique no ícone da câmera acima para adicionar uma imagem","clone_plant":"Clonar Planta","move_to_cycle":"Mover para Ciclo","replace_sensors":"Substituir Sensores","delete_plant":"Excluir Planta","select_cycle":"Selecionar Ciclo","please_select":"Por favor selecione...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"Você realmente quer excluir esta planta? Esta ação não pode ser desfeita.","confirm_delete":"Confirmar Exclusão","no_matching_sensors":"Nenhum sensor correspondente encontrado"},"fields":{"friendly_name":"Nome","state":"Estado","area":"Área","growth_phase":"Fase de Crescimento","cycle":"Ciclo","pot_size":"Tamanho do Vaso","flowering_duration":"Duração da Floração","strain":"Variedade","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duração Original da Floração","timestamp":"Carimbo de Tempo","difficulty":"Dificuldade","yield":"Rendimento","mold_resistance":"Resistência ao Mofo","hunger":"Fome","effects":"Efeitos","smell":"Cheiro","taste":"Sabor","phenotype":"Fenótipo","growth_stretch":"Alongamento do Crescimento","flower_stretch":"Alongamento da Floração","notes":"Notas","website":"Site","lineage":"Linhagem","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Umidade Mín. do Solo","max_soil_moisture":"Umidade Máx. do Solo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Condutividade Mín.","max_conductivity":"Condutividade Máx.","min_illuminance":"Iluminação Mín.","max_illuminance":"Iluminação Máx.","min_air_humidity":"Umidade Mín. do Ar","max_air_humidity":"Umidade Máx. do Ar","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Água","max_water_consumption":"Consumo Máx. de Água","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seed_start":"Início da Semente","germination_start":"Início da Germinação","rooting_start":"Início do Enraizamento","growth_start":"Início do Crescimento","flowering_start":"Início da Floração","harvested_start":"Início da Colheita","removed_start":"Início da Remoção","seed_duration":"Duração da Semente","germination_duration":"Duração da Germinação","rooting_duration":"Duração do Enraizamento","growth_duration":"Duração do Crescimento","flower_duration":"Duração da Floração","harvested_duration":"Duração da Colheita","removed_duration":"Duração da Remoção"},"sensors":{"temperature":"Temperatura","soil_moisture":"Umidade do Solo","moisture":"Umidade do Solo","conductivity":"Condutividade","illuminance":"Iluminação","air_humidity":"Umidade do Ar","humidity":"Umidade do Ar","dli":"Integral de Luz Diária","water_consumption":"Consumo de Água","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energia","ph":"Valor pH","health":"Saúde","total_ppfd":"PPFD Total","energy_cost":"Custo de Energia"},"growth_phases":{"seeds":"Semente","germination":"Germinação","rooting":"Enraizamento","growing":"Crescimento","flowering":"Floração","harvested":"Colhida","removed":"Removida"},"treatments":{"":"Nenhum","cut":"Corte","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controle de Pragas","spray water":"Pulverização de Água"},"history":{"days":"Dias","pot_size_placeholder":"Tamanho do vaso em litros...","please_select":"Por favor selecione...","cut":"Corte","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controle de Pragas","spray_water":"Pulverização de Água","growth_phase":"Fase de Crescimento","area":"Área","pot_size":"Tamanho do Vaso","treatment":"Tratamento","journal":"Diário","add_entry":"Adicionar Entrada","image_taken":"Imagem Tirada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamanho do Vaso Alterado","moved_to":"Movido para","harvest":"Colheita","expected_harvest_date":"Data Esperada da Colheita","journal_placeholder":"Entrada do diário..."},"list_card":{"title":"Cartão de Lista Brokkoli","description":"Uma visão tabular de todas as plantas","plant_overview":"Visão Geral das Plantas","search_placeholder":"Buscar plantas...","filter_close":"Fechar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Seleção","multiselect":"Multi-Seleção","search_reset":"Redefinir Busca","search_default":"Buscar...","entity_type":"Tipo de Entidade","plants":"Plantas","cycles":"Ciclos","filter_range_to":"para","add_plant":"Adicionar Nova Planta"},"graph":{"temperature":"Temperatura","conductivity":"Condutividade","dli":"DLI","health":"Saúde","water_consumption":"Consumo de Água","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energia"},"diagnostics":{"energy_cost":"Custo de Energia","total_power_consumption":"Consumo Total de Energia","total_integral":"Integral Total","total_water_consumption":"Consumo Total de Água","total_fertilizer_consumption":"Consumo Total de Fertilizante","power_consumption":"Consumo de Energia","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Fase de Crescimento","flowering_duration":"Duração da Floração","pot_size":"Tamanho do Vaso","water_capacity":"Capacidade de Água","treatment":"Tratamento","health":"Saúde","journal":"Diário","location":"Localização","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modo: Anéis (clique para alternar)","legend_labels_mode_active":"Modo: Etiquetas (clique para alternar)","legend_heatmap_mode_active":"Modo: Mapa de calor (clique para alternar)","flowering_past":"Floração decorrida","flowering_to_go":"Floração restante","days":"Dias","plant_emoji_hint":"Encontre uma grande seleção em [emojipedia.org](https://emojipedia.org)","create_plant":"Criar planta","create":"Criar","no_sensor":"Nenhum","entity_not_available":"Entidade não disponível","no_data":"Sem dados disponíveis","error":"Erro","define_entity":"Tens de definir uma entidade","loading":"A carregar...","unknown_state":"Estado desconhecido","name":"Nome","status":"Estado","area":"Área","config_error_entity_required":"Tens de definir uma entidade ou listen_to","unavailable":"Indisponível","plants_count":"Plantas","plants_selected":"Plantas selecionadas","no_plants_found":"Nenhuma planta encontrada","entity_not_found":"Entidade não encontrada","return_to_cycle":"Voltar ao ciclo","entity_unavailable":"Entidade não disponível","no_entity_configured":"Nenhuma entidade ou listen_to configurada","area_config_error":"Tens de definir pelo menos uma área, uma entidade ou uma lista de entidades","members":"Membros","open":"Abrir","photo_taken_on":"Foto tirada a","previous_image":"Imagem anterior","next_image":"Imagem seguinte","unknown_date":"Data desconhecida","no_completed_phases":"Ainda não há fases concluídas","harvest_date":"Colhida a","harvest_weight":"Peso da colheita","harvest_notes":"Notas da colheita","treatment_description":"Tratamento efetuado","pot_size_changed":"Tamanho do vaso alterado para","moved_to_area":"Movida para","legend_primary_color":"Cor primária","legend_secondary_color":"Cor secundária","legend_opacity":"Opacidade","legend_rings_mode":"Modo anéis","legend_labels_mode":"Modo etiquetas","legend_heatmap_mode":"Modo mapa de calor","confirm":"Confirmar","tooltip_error":"Erro ao carregar os dados","tooltip_range":"Intervalo","tooltip_mean":"Média","tooltip_min_max":"Mín - Máx","day":"Dia","days_since_planting":"Dias desde a plantação","upload_images_only":"Carrega apenas imagens!","image_too_large":"Imagem demasiado grande! O tamanho máximo é 10MB.","upload_error":"Erro ao carregar","delete_image_error":"Erro ao eliminar a imagem","set_main_image_error":"Erro ao definir a imagem principal","delete_error":"Erro ao eliminar","add_image":"Adicionar imagem","set_as_main_image":"Definir como imagem principal","delete_image":"Eliminar imagem","close":"Fechar","no_images_available":"Sem imagens disponíveis","click_camera_to_add_image":"Clica no ícone da câmara acima para adicionar uma imagem","clone_plant":"Clonar planta","move_to_cycle":"Mover para ciclo","replace_sensors":"Substituir sensores","delete_plant":"Eliminar planta","select_cycle":"Selecionar ciclo","please_select":"Seleciona...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"Queres mesmo eliminar esta planta? Esta ação não pode ser anulada.","confirm_delete":"Confirmar eliminação","no_matching_sensors":"Nenhum sensor correspondente encontrado","other_images":"Outras imagens","back_to_main_images":"Voltar às imagens principais","main_images":"Imagens principais","edit":"Editar","save":"Guardar","legend_collapsed_mode_active":"Modo: Recolhido (clica para mudar)","delete_selected":"Eliminar selecionadas","area_edit_mode_on":"Modo mover ativo - clique para sair do modo de edição","area_edit_mode_off":"Modo de visualização - clique para ativar mover e seleção múltipla"},"sensors":{"temperature":"Temperatura","soil_moisture":"Humidade do solo","moisture":"Humidade do solo","conductivity":"Condutividade","illuminance":"Iluminância","air_humidity":"Humidade do ar","humidity":"Humidade do ar","dli":"Integral diária de luz","water_consumption":"Consumo de água","fertilizer_consumption":"Consumo de fertilizante","power_consumption":"Consumo elétrico","total_water_consumption":"Consumo total de água","total_fertilizer_consumption":"Consumo total de fertilizante","total_power_consumption":"Consumo elétrico total","ph":"Valor de pH","health":"Saúde","ppfd_mol":"PPFD","total_ppfd":"PPFD total","total_ppfd_mol_integral":"PPFD total","total_integral":"Integral total","energy_cost":"Custo de energia"},"fields":{"friendly_name":"Nome","state":"Estado","area":"Área","growth_phase":"Fase de Crescimento","cycle":"Ciclo","pot_size":"Tamanho do Vaso","flowering_duration":"Duração da Floração","strain":"Variedade","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duração Original da Floração","timestamp":"Carimbo de Tempo","difficulty":"Dificuldade","yield":"Rendimento","mold_resistance":"Resistência ao Mofo","hunger":"Fome","effects":"Efeitos","smell":"Cheiro","taste":"Sabor","phenotype":"Fenótipo","growth_stretch":"Alongamento do Crescimento","flower_stretch":"Alongamento da Floração","notes":"Notas","website":"Site","lineage":"Linhagem","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Umidade Mín. do Solo","max_soil_moisture":"Umidade Máx. do Solo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Condutividade Mín.","max_conductivity":"Condutividade Máx.","min_illuminance":"Iluminação Mín.","max_illuminance":"Iluminação Máx.","min_air_humidity":"Umidade Mín. do Ar","max_air_humidity":"Umidade Máx. do Ar","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Água","max_water_consumption":"Consumo Máx. de Água","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seeds_start":"Início da Semente","germination_start":"Início da Germinação","rooting_start":"Início do Enraizamento","growing_start":"Início do Crescimento","flowering_start":"Início da Floração","harvested_date":"Início da Colheita","removed_date":"Início da Remoção","seeds_duration":"Duração da Semente","germination_duration":"Duração da Germinação","rooting_duration":"Duração do Enraizamento","growing_duration":"Duração do Crescimento","flower_duration":"Duração da Floração","harvested_duration":"Duração da Colheita","removed_duration":"Duração da Remoção","plant_emoji":"Ícone"},"growth_phases":{"seeds":"Semente","germination":"Germinação","rooting":"Enraizamento","growing":"Crescimento","flowering":"Floração","harvested":"Colhida","removed":"Removida"},"treatments":{"":"Nenhum","cut":"Corte","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controle de Pragas","spray water":"Pulverização de Água"},"history":{"days":"Dias","pot_size_placeholder":"Tamanho do vaso em litros...","please_select":"Por favor selecione...","cut":"Corte","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controle de Pragas","spray_water":"Pulverização de Água","growth_phase":"Fase de Crescimento","area":"Área","pot_size":"Tamanho do Vaso","treatment":"Tratamento","journal":"Diário","add_entry":"Adicionar Entrada","image_taken":"Imagem Tirada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamanho do Vaso Alterado","moved_to":"Movido para","harvest":"Colheita","expected_harvest_date":"Data Esperada da Colheita","journal_placeholder":"Entrada do diário..."},"list_card":{"title":"Cartão de Lista Brokkoli","description":"Uma visão tabular de todas as plantas","plant_overview":"Visão Geral das Plantas","search_placeholder":"Buscar plantas...","filter_close":"Fechar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Seleção","multiselect":"Multi-Seleção","search_reset":"Redefinir Busca","search_default":"Buscar...","entity_type":"Tipo de Entidade","plants":"Plantas","cycles":"Ciclos","filter_range_to":"para","add_plant":"Adicionar Nova Planta"},"helpers":{"growth_phase":"Fase de Crescimento","flowering_duration":"Duração da Floração","pot_size":"Tamanho do Vaso","water_capacity":"Capacidade de Água","treatment":"Tratamento","health":"Saúde","journal":"Diário","location":"Localização","cycle":"Ciclo"}}}')},6958:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Недоступно","config_error_entity_required":"Вы должны определить сущность или listen_to","area_config_error":"Вы должны определить хотя бы одну область, сущность или список сущностей","plants_count":"Растения","return_to_cycle":"Вернуться к Циклу","previous_image":"Предыдущее Изображение","next_image":"Следующее Изображение","unknown_date":"Неизвестная Дата","tooltip_error":"Ошибка","tooltip_range":"Диапазон","tooltip_mean":"Среднее","tooltip_min_max":"Мин - Макс","day":"День","days_since_planting":"Дни с Посадки","upload_images_only":"Пожалуйста, загружайте только изображения!","image_too_large":"Изображение слишком большое! Максимальный размер 10MB.","upload_error":"Ошибка Загрузки","delete_image_error":"Ошибка удаления изображения","set_main_image_error":"Ошибка установки главного изображения","delete_error":"Ошибка удаления","add_image":"Добавить Изображение","set_as_main_image":"Установить как Главное Изображение","delete_image":"Удалить Изображение","close":"Закрыть","no_images_available":"Нет доступных изображений","click_camera_to_add_image":"Нажмите на значок камеры выше, чтобы добавить изображение","clone_plant":"Клонировать Растение","move_to_cycle":"Переместить в Цикл","replace_sensors":"Заменить Датчики","delete_plant":"Удалить Растение","select_cycle":"Выбрать Цикл","please_select":"Пожалуйста, выберите...","move":"Переместить","cancel":"Отменить","clone":"Клонировать","delete_plant_confirmation":"Вы действительно хотите удалить это растение? Это действие нельзя отменить.","confirm_delete":"Подтвердить Удаление","no_matching_sensors":"Подходящие датчики не найдены"},"fields":{"friendly_name":"Имя","state":"Состояние","area":"Область","growth_phase":"Фаза Роста","cycle":"Цикл","pot_size":"Размер Горшка","flowering_duration":"Продолжительность цветения","strain":"Сорт","breeder":"Заводчик","feminized":"Феминизированный","original_flowering_duration":"Исходная Длительность Цветения","timestamp":"Временная Метка","difficulty":"Сложность","yield":"Урожай","mold_resistance":"Устойчивость к Плесени","hunger":"Голод","effects":"Эффекты","smell":"Запах","taste":"Вкус","phenotype":"Фенотип","growth_stretch":"Растяжение Роста","flower_stretch":"Растяжение Цветения","notes":"Заметки","website":"Веб-сайт","lineage":"Происхождение","infotext1":"Инфо Текст 1","infotext2":"Инфо Текст 2","min_soil_moisture":"Мин. Влажность Почвы","max_soil_moisture":"Макс. Влажность Почвы","min_temperature":"Мин. Температура","max_temperature":"Макс. Температура","min_conductivity":"Мин. Проводимость","max_conductivity":"Макс. Проводимость","min_illuminance":"Мин. Освещение","max_illuminance":"Макс. Освещение","min_air_humidity":"Мин. Влажность Воздуха","max_air_humidity":"Макс. Влажность Воздуха","min_dli":"Мин. DLI","max_dli":"Макс. DLI","min_water_consumption":"Мин. Потребление Воды","max_water_consumption":"Макс. Потребление Воды","min_fertilizer_consumption":"Мин. Потребление Удобрений","max_fertilizer_consumption":"Макс. Потребление Удобрений","min_ph":"Мин. Значение pH","max_ph":"Макс. Значение pH","seed_start":"Начало Семени","germination_start":"Начало Прорастания","rooting_start":"Начало Укоренения","growth_start":"Начало Роста","flowering_start":"Начало Цветения","harvested_start":"Начало Урожая","removed_start":"Начало Удаления","seed_duration":"Длительность Семени","germination_duration":"Длительность Прорастания","rooting_duration":"Длительность Укоренения","growth_duration":"Продолжительность роста","flower_duration":"Продолжительность цветения","harvested_duration":"Длительность Урожая","removed_duration":"Длительность Удаления"},"sensors":{"temperature":"Температура","soil_moisture":"Влажность Почвы","moisture":"Влажность Почвы","conductivity":"Проводимость","illuminance":"Освещение","air_humidity":"Влажность Воздуха","humidity":"Влажность Воздуха","dli":"Дневной Интеграл Света","water_consumption":"Потребление Воды","fertilizer_consumption":"Потребление Удобрений","power_consumption":"Потребление Энергии","ph":"Значение pH","health":"Здоровье","total_ppfd":"Общий PPFD","energy_cost":"Стоимость Энергии"},"growth_phases":{"seeds":"Семя","germination":"Прорастание","rooting":"Укоренение","growing":"Рост","flowering":"Цветение","harvested":"Собрано","removed":"Удалено"},"treatments":{"":"Нет","cut":"Обрезка","super cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray pest":"Борьба с Вредителями","spray water":"Опрыскивание Водой"},"history":{"days":"Дни","pot_size_placeholder":"Размер горшка в литрах...","please_select":"Пожалуйста, выберите...","cut":"Обрезка","super_cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray_pest":"Борьба с Вредителями","spray_water":"Опрыскивание Водой","growth_phase":"Фаза Роста","area":"Область","pot_size":"Размер Горшка","treatment":"Обработка","journal":"Журнал","add_entry":"Добавить Запись","image_taken":"Изображение Сделано","photo":"Фото","phase_started":"Фаза Начата","pot_size_changed":"Размер Горшка Изменен","moved_to":"Перемещено в","harvest":"Урожай","expected_harvest_date":"Ожидаемая Дата Урожая","journal_placeholder":"Запись в журнале..."},"list_card":{"title":"Карточка Списка Brokkoli","description":"Табличный вид всех растений","plant_overview":"Обзор Растений","search_placeholder":"Поиск растений...","filter_close":"Закрыть Фильтр","filter":"Фильтр","multiselect_end":"Завершить Множественный Выбор","multiselect":"Множественный Выбор","search_reset":"Сбросить Поиск","search_default":"Поиск...","entity_type":"Тип Сущности","plants":"Растения","cycles":"Циклы","filter_range_to":"до","add_plant":"Добавить Новое Растение"},"graph":{"temperature":"Температура","conductivity":"Проводимость","dli":"DLI","health":"Здоровье","water_consumption":"Потребление Воды","fertilizer_consumption":"Потребление Удобрений","power_consumption":"Потребление Энергии"},"diagnostics":{"energy_cost":"Стоимость Энергии","total_power_consumption":"Общее Потребление Энергии","total_integral":"Общий Интеграл","total_water_consumption":"Общее Потребление Воды","total_fertilizer_consumption":"Общее Потребление Удобрений","power_consumption":"Потребление Энергии","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Общий PPFD"},"helpers":{"growth_phase":"Фаза Роста","flowering_duration":"Длительность Цветения","pot_size":"Размер Горшка","water_capacity":"Емкость Воды","treatment":"Обработка","health":"Здоровье","journal":"Журнал","location":"Местоположение","cycle":"Цикл"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Режим: Кольца (нажмите для переключения)","legend_labels_mode_active":"Режим: Метки (нажмите для переключения)","legend_heatmap_mode_active":"Режим: Тепловая карта (нажмите для переключения)","flowering_past":"Цветение прошло","flowering_to_go":"Цветение осталось","days":"Дни","plant_emoji_hint":"Найдите большой выбор на [emojipedia.org](https://emojipedia.org)","create_plant":"Создать растение","create":"Создать","no_sensor":"Нет","entity_not_available":"Объект недоступен","no_data":"Нет данных","error":"Ошибка","define_entity":"Необходимо указать объект","loading":"Загрузка...","unknown_state":"Неизвестное состояние","name":"Название","status":"Состояние","area":"Зона","config_error_entity_required":"Необходимо указать объект или listen_to","unavailable":"Недоступно","plants_count":"Растения","plants_selected":"Выбрано растений","no_plants_found":"Растения не найдены","entity_not_found":"Объект не найден","return_to_cycle":"Назад к циклу","entity_unavailable":"Объект недоступен","no_entity_configured":"Не настроен объект или listen_to","area_config_error":"Необходимо указать хотя бы зону, объект или список объектов","members":"Участники","open":"Открыть","photo_taken_on":"Фото сделано","previous_image":"Предыдущее изображение","next_image":"Следующее изображение","unknown_date":"Дата неизвестна","no_completed_phases":"Завершённых фаз пока нет","harvest_date":"Собрано","harvest_weight":"Масса урожая","harvest_notes":"Заметки об урожае","treatment_description":"Обработка выполнена","pot_size_changed":"Размер горшка изменён на","moved_to_area":"Перемещено в","legend_primary_color":"Основной цвет","legend_secondary_color":"Дополнительный цвет","legend_opacity":"Непрозрачность","legend_rings_mode":"Режим колец","legend_labels_mode":"Режим подписей","legend_heatmap_mode":"Режим тепловой карты","confirm":"Подтвердить","tooltip_error":"Ошибка при загрузке данных","tooltip_range":"Диапазон","tooltip_mean":"Среднее","tooltip_min_max":"Мин - Макс","day":"День","days_since_planting":"Дней с момента посадки","upload_images_only":"Загружайте только изображения!","image_too_large":"Изображение слишком большое! Максимальный размер — 10 МБ.","upload_error":"Ошибка загрузки","delete_image_error":"Ошибка при удалении изображения","set_main_image_error":"Ошибка при установке главного изображения","delete_error":"Ошибка при удалении","add_image":"Добавить изображение","set_as_main_image":"Сделать главным изображением","delete_image":"Удалить изображение","close":"Закрыть","no_images_available":"Изображений нет","click_camera_to_add_image":"Нажмите на значок камеры выше, чтобы добавить изображение","clone_plant":"Клонировать растение","move_to_cycle":"Переместить в цикл","replace_sensors":"Заменить датчики","delete_plant":"Удалить растение","select_cycle":"Выбрать цикл","please_select":"Выберите...","move":"Переместить","cancel":"Отмена","clone":"Клонировать","delete_plant_confirmation":"Вы действительно хотите удалить это растение? Это действие нельзя отменить.","confirm_delete":"Подтвердить удаление","no_matching_sensors":"Подходящие датчики не найдены","other_images":"Другие изображения","back_to_main_images":"Назад к главным изображениям","main_images":"Главные изображения","edit":"Редактировать","save":"Сохранить","legend_collapsed_mode_active":"Режим: Свёрнуто (щёлкните для переключения)","delete_selected":"Удалить выбранные","area_edit_mode_on":"Режим перемещения включён — нажмите, чтобы выйти из режима редактирования","area_edit_mode_off":"Режим просмотра — нажмите, чтобы включить перемещение и множественный выбор"},"sensors":{"temperature":"Температура","soil_moisture":"Влажность почвы","moisture":"Влажность почвы","conductivity":"Электропроводность","illuminance":"Освещённость","air_humidity":"Влажность воздуха","humidity":"Влажность воздуха","dli":"Суточная световая интеграция","water_consumption":"Расход воды","fertilizer_consumption":"Расход удобрений","power_consumption":"Потребление электроэнергии","total_water_consumption":"Общий расход воды","total_fertilizer_consumption":"Общий расход удобрений","total_power_consumption":"Общее потребление электроэнергии","ph":"Значение pH","health":"Здоровье","ppfd_mol":"PPFD","total_ppfd":"Общий PPFD","total_ppfd_mol_integral":"Общий PPFD","total_integral":"Общий интеграл","energy_cost":"Стоимость энергии"},"fields":{"friendly_name":"Имя","state":"Состояние","area":"Область","growth_phase":"Фаза Роста","cycle":"Цикл","pot_size":"Размер Горшка","flowering_duration":"Продолжительность цветения","strain":"Сорт","breeder":"Заводчик","feminized":"Феминизированный","original_flowering_duration":"Исходная Длительность Цветения","timestamp":"Временная Метка","difficulty":"Сложность","yield":"Урожай","mold_resistance":"Устойчивость к Плесени","hunger":"Голод","effects":"Эффекты","smell":"Запах","taste":"Вкус","phenotype":"Фенотип","growth_stretch":"Растяжение Роста","flower_stretch":"Растяжение Цветения","notes":"Заметки","website":"Веб-сайт","lineage":"Происхождение","infotext1":"Инфо Текст 1","infotext2":"Инфо Текст 2","min_soil_moisture":"Мин. Влажность Почвы","max_soil_moisture":"Макс. Влажность Почвы","min_temperature":"Мин. Температура","max_temperature":"Макс. Температура","min_conductivity":"Мин. Проводимость","max_conductivity":"Макс. Проводимость","min_illuminance":"Мин. Освещение","max_illuminance":"Макс. Освещение","min_air_humidity":"Мин. Влажность Воздуха","max_air_humidity":"Макс. Влажность Воздуха","min_dli":"Мин. DLI","max_dli":"Макс. DLI","min_water_consumption":"Мин. Потребление Воды","max_water_consumption":"Макс. Потребление Воды","min_fertilizer_consumption":"Мин. Потребление Удобрений","max_fertilizer_consumption":"Макс. Потребление Удобрений","min_ph":"Мин. Значение pH","max_ph":"Макс. Значение pH","seeds_start":"Начало Семени","germination_start":"Начало Прорастания","rooting_start":"Начало Укоренения","growing_start":"Начало Роста","flowering_start":"Начало Цветения","harvested_date":"Начало Урожая","removed_date":"Начало Удаления","seeds_duration":"Длительность Семени","germination_duration":"Длительность Прорастания","rooting_duration":"Длительность Укоренения","growing_duration":"Продолжительность роста","flower_duration":"Продолжительность цветения","harvested_duration":"Длительность Урожая","removed_duration":"Длительность Удаления","plant_emoji":"Иконка"},"growth_phases":{"seeds":"Семя","germination":"Прорастание","rooting":"Укоренение","growing":"Рост","flowering":"Цветение","harvested":"Собрано","removed":"Удалено"},"treatments":{"":"Нет","cut":"Обрезка","super cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray pest":"Борьба с Вредителями","spray water":"Опрыскивание Водой"},"history":{"days":"Дни","pot_size_placeholder":"Размер горшка в литрах...","please_select":"Пожалуйста, выберите...","cut":"Обрезка","super_cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray_pest":"Борьба с Вредителями","spray_water":"Опрыскивание Водой","growth_phase":"Фаза Роста","area":"Область","pot_size":"Размер Горшка","treatment":"Обработка","journal":"Журнал","add_entry":"Добавить Запись","image_taken":"Изображение Сделано","photo":"Фото","phase_started":"Фаза Начата","pot_size_changed":"Размер Горшка Изменен","moved_to":"Перемещено в","harvest":"Урожай","expected_harvest_date":"Ожидаемая Дата Урожая","journal_placeholder":"Запись в журнале..."},"list_card":{"title":"Карточка Списка Brokkoli","description":"Табличный вид всех растений","plant_overview":"Обзор Растений","search_placeholder":"Поиск растений...","filter_close":"Закрыть Фильтр","filter":"Фильтр","multiselect_end":"Завершить Множественный Выбор","multiselect":"Множественный Выбор","search_reset":"Сбросить Поиск","search_default":"Поиск...","entity_type":"Тип Сущности","plants":"Растения","cycles":"Циклы","filter_range_to":"до","add_plant":"Добавить Новое Растение"},"helpers":{"growth_phase":"Фаза Роста","flowering_duration":"Длительность Цветения","pot_size":"Размер Горшка","water_capacity":"Емкость Воды","treatment":"Обработка","health":"Здоровье","journal":"Журнал","location":"Местоположение","cycle":"Цикл"}}}')},5661:e=>{e.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"不可用","config_error_entity_required":"您必须定义一个实体或listen_to","area_config_error":"您必须定义至少一个区域、一个实体或一个实体列表","plants_count":"植物","return_to_cycle":"返回周期","previous_image":"上一张图片","next_image":"下一张图片","unknown_date":"未知日期","tooltip_error":"错误","tooltip_range":"范围","tooltip_mean":"平均值","tooltip_min_max":"最小值 - 最大值","day":"天","days_since_planting":"种植后天数","upload_images_only":"请只上传图片！","image_too_large":"图片太大！最大尺寸为10MB。","upload_error":"上传错误","delete_image_error":"删除图片错误","set_main_image_error":"设置主图片错误","delete_error":"删除错误","add_image":"添加图片","set_as_main_image":"设为主图片","delete_image":"删除图片","close":"关闭","no_images_available":"没有可用图片","click_camera_to_add_image":"点击上方相机图标添加图片","clone_plant":"克隆植物","move_to_cycle":"移动到周期","replace_sensors":"替换传感器","delete_plant":"删除植物","select_cycle":"选择周期","please_select":"请选择...","move":"移动","cancel":"取消","clone":"克隆","delete_plant_confirmation":"您真的要删除这个植物吗？此操作无法撤销。","confirm_delete":"确认删除","no_matching_sensors":"未找到匹配的传感器"},"fields":{"friendly_name":"名称","state":"状态","area":"区域","growth_phase":"生长阶段","cycle":"周期","pot_size":"花盆大小","flowering_duration":"开花持续时间","strain":"品种","breeder":"育种者","feminized":"雌性化","original_flowering_duration":"原始开花持续时间","timestamp":"时间戳","difficulty":"难度","yield":"产量","mold_resistance":"抗霉菌性","hunger":"饥饿","effects":"效果","smell":"气味","taste":"味道","phenotype":"表型","growth_stretch":"生长拉伸","flower_stretch":"开花拉伸","notes":"备注","website":"网站","lineage":"血统","infotext1":"信息文本1","infotext2":"信息文本2","min_soil_moisture":"最小土壤湿度","max_soil_moisture":"最大土壤湿度","min_temperature":"最低温度","max_temperature":"最高温度","min_conductivity":"最小电导率","max_conductivity":"最大电导率","min_illuminance":"最小照度","max_illuminance":"最大照度","min_air_humidity":"最小空气湿度","max_air_humidity":"最大空气湿度","min_dli":"最小DLI","max_dli":"最大DLI","min_water_consumption":"最小用水量","max_water_consumption":"最大用水量","min_fertilizer_consumption":"最小肥料消耗","max_fertilizer_consumption":"最大肥料消耗","min_ph":"最小pH值","max_ph":"最大pH值","seed_start":"种子开始","germination_start":"发芽开始","rooting_start":"生根开始","growth_start":"生长开始","flowering_start":"开花开始","harvested_start":"收获开始","removed_start":"移除开始","seed_duration":"种子持续时间","germination_duration":"发芽持续时间","rooting_duration":"生根持续时间","growth_duration":"生长持续时间","flower_duration":"开花持续时间","harvested_duration":"收获持续时间","removed_duration":"移除持续时间"},"sensors":{"temperature":"温度","soil_moisture":"土壤湿度","moisture":"土壤湿度","conductivity":"电导率","illuminance":"照度","air_humidity":"空气湿度","humidity":"空气湿度","dli":"每日光积分","water_consumption":"用水量","fertilizer_consumption":"肥料消耗","power_consumption":"电力消耗","ph":"pH值","health":"健康","total_ppfd":"总PPFD","energy_cost":"能源成本"},"growth_phases":{"seeds":"种子","germination":"发芽","rooting":"生根","growing":"生长","flowering":"开花","harvested":"已收获","removed":"已移除"},"treatments":{"":"无","cut":"修剪","super cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray pest":"害虫防治","spray water":"喷水"},"history":{"days":"天","pot_size_placeholder":"花盆大小（升）...","please_select":"请选择...","cut":"修剪","super_cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray_pest":"害虫防治","spray_water":"喷水","growth_phase":"生长阶段","area":"区域","pot_size":"花盆大小","treatment":"处理","journal":"日志","add_entry":"添加条目","image_taken":"拍摄图片","photo":"照片","phase_started":"阶段开始","pot_size_changed":"花盆大小已更改","moved_to":"移动到","harvest":"收获","expected_harvest_date":"预期收获日期","journal_placeholder":"日志条目..."},"list_card":{"title":"Brokkoli列表卡片","description":"所有植物的表格视图","plant_overview":"植物概览","search_placeholder":"搜索植物...","filter_close":"关闭过滤器","filter":"过滤器","multiselect_end":"结束多选","multiselect":"多选","search_reset":"重置搜索","search_default":"搜索...","entity_type":"实体类型","plants":"植物","cycles":"周期","filter_range_to":"到","add_plant":"添加新植物"},"graph":{"temperature":"温度","conductivity":"电导率","dli":"DLI","health":"健康","water_consumption":"用水量","fertilizer_consumption":"肥料消耗","power_consumption":"电力消耗"},"diagnostics":{"energy_cost":"能源成本","total_power_consumption":"总电力消耗","total_integral":"总积分","total_water_consumption":"总用水量","total_fertilizer_consumption":"总肥料消耗","power_consumption":"电力消耗","ppfd_mol":"PPFD","total_ppfd_mol_integral":"总PPFD"},"helpers":{"growth_phase":"生长阶段","flowering_duration":"开花持续时间","pot_size":"花盆大小","water_capacity":"水容量","treatment":"处理","health":"健康","journal":"日志","location":"位置","cycle":"周期"}}}},"frontend":{"ui":{"legend_rings_mode_active":"模式：环形（点击切换）","legend_labels_mode_active":"模式：标签（点击切换）","legend_heatmap_mode_active":"模式：热力图（点击切换）","flowering_past":"已过开花期","flowering_to_go":"剩余开花期","days":"天","plant_emoji_hint":"在 [emojipedia.org](https://emojipedia.org) 找到大量选择","create_plant":"创建植物","create":"创建","no_sensor":"无","entity_not_available":"实体不可用","no_data":"无可用数据","error":"错误","define_entity":"必须指定一个实体","loading":"加载中...","unknown_state":"状态未知","name":"名称","status":"状态","area":"区域","config_error_entity_required":"必须指定实体或 listen_to","unavailable":"不可用","plants_count":"植物","plants_selected":"已选植物","no_plants_found":"未找到植物","entity_not_found":"未找到实体","return_to_cycle":"返回周期","entity_unavailable":"实体不可用","no_entity_configured":"未配置实体或 listen_to","area_config_error":"必须至少指定一个区域、一个实体或实体列表","members":"成员","open":"打开","photo_taken_on":"拍摄于","previous_image":"上一张图片","next_image":"下一张图片","unknown_date":"日期未知","no_completed_phases":"尚无已完成的阶段","harvest_date":"收获于","harvest_weight":"收获重量","harvest_notes":"收获备注","treatment_description":"已执行处理","pot_size_changed":"花盆尺寸更改为","moved_to_area":"移动到","legend_primary_color":"主色","legend_secondary_color":"辅色","legend_opacity":"不透明度","legend_rings_mode":"圆环模式","legend_labels_mode":"标签模式","legend_heatmap_mode":"热力图模式","confirm":"确认","tooltip_error":"加载数据时出错","tooltip_range":"范围","tooltip_mean":"平均值","tooltip_min_max":"最小 - 最大","day":"天","days_since_planting":"种植后天数","upload_images_only":"请只上传图片！","image_too_large":"图片太大！最大为 10MB。","upload_error":"上传出错","delete_image_error":"删除图片时出错","set_main_image_error":"设置主图片时出错","delete_error":"删除时出错","add_image":"添加图片","set_as_main_image":"设为主图片","delete_image":"删除图片","close":"关闭","no_images_available":"暂无图片","click_camera_to_add_image":"点击上方的相机图标添加图片","clone_plant":"克隆植物","move_to_cycle":"移动到周期","replace_sensors":"更换传感器","delete_plant":"删除植物","select_cycle":"选择周期","please_select":"请选择...","move":"移动","cancel":"取消","clone":"克隆","delete_plant_confirmation":"确定要删除这株植物吗？此操作无法撤销。","confirm_delete":"确认删除","no_matching_sensors":"未找到匹配的传感器","other_images":"其他图片","back_to_main_images":"返回主图片","main_images":"主图片","edit":"编辑","save":"保存","legend_collapsed_mode_active":"模式：已折叠（点击切换）","delete_selected":"删除所选","area_edit_mode_on":"移动模式已开启 — 点击退出编辑模式","area_edit_mode_off":"查看模式 — 点击启用移动和多选"},"sensors":{"temperature":"温度","soil_moisture":"土壤湿度","moisture":"土壤湿度","conductivity":"电导率","illuminance":"光照度","air_humidity":"空气湿度","humidity":"空气湿度","dli":"每日光积分","water_consumption":"用水量","fertilizer_consumption":"肥料消耗","power_consumption":"电量消耗","total_water_consumption":"总用水量","total_fertilizer_consumption":"总肥料消耗","total_power_consumption":"总电量消耗","ph":"pH 值","health":"健康度","ppfd_mol":"PPFD","total_ppfd":"总 PPFD","total_ppfd_mol_integral":"总 PPFD","total_integral":"总积分","energy_cost":"能耗成本"},"fields":{"friendly_name":"名称","state":"状态","area":"区域","growth_phase":"生长阶段","cycle":"周期","pot_size":"花盆大小","flowering_duration":"开花持续时间","strain":"品种","breeder":"育种者","feminized":"雌性化","original_flowering_duration":"原始开花持续时间","timestamp":"时间戳","difficulty":"难度","yield":"产量","mold_resistance":"抗霉菌性","hunger":"饥饿","effects":"效果","smell":"气味","taste":"味道","phenotype":"表型","growth_stretch":"生长拉伸","flower_stretch":"开花拉伸","notes":"备注","website":"网站","lineage":"血统","infotext1":"信息文本1","infotext2":"信息文本2","min_soil_moisture":"最小土壤湿度","max_soil_moisture":"最大土壤湿度","min_temperature":"最低温度","max_temperature":"最高温度","min_conductivity":"最小电导率","max_conductivity":"最大电导率","min_illuminance":"最小照度","max_illuminance":"最大照度","min_air_humidity":"最小空气湿度","max_air_humidity":"最大空气湿度","min_dli":"最小DLI","max_dli":"最大DLI","min_water_consumption":"最小用水量","max_water_consumption":"最大用水量","min_fertilizer_consumption":"最小肥料消耗","max_fertilizer_consumption":"最大肥料消耗","min_ph":"最小pH值","max_ph":"最大pH值","seeds_start":"种子开始","germination_start":"发芽开始","rooting_start":"生根开始","growing_start":"生长开始","flowering_start":"开花开始","harvested_date":"收获开始","removed_date":"移除开始","seeds_duration":"种子持续时间","germination_duration":"发芽持续时间","rooting_duration":"生根持续时间","growing_duration":"生长持续时间","flower_duration":"开花持续时间","harvested_duration":"收获持续时间","removed_duration":"移除持续时间","plant_emoji":"图标"},"growth_phases":{"seeds":"种子","germination":"发芽","rooting":"生根","growing":"生长","flowering":"开花","harvested":"已收获","removed":"已移除"},"treatments":{"":"无","cut":"修剪","super cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray pest":"害虫防治","spray water":"喷水"},"history":{"days":"天","pot_size_placeholder":"花盆大小（升）...","please_select":"请选择...","cut":"修剪","super_cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray_pest":"害虫防治","spray_water":"喷水","growth_phase":"生长阶段","area":"区域","pot_size":"花盆大小","treatment":"处理","journal":"日志","add_entry":"添加条目","image_taken":"拍摄图片","photo":"照片","phase_started":"阶段开始","pot_size_changed":"花盆大小已更改","moved_to":"移动到","harvest":"收获","expected_harvest_date":"预期收获日期","journal_placeholder":"日志条目..."},"list_card":{"title":"Brokkoli列表卡片","description":"所有植物的表格视图","plant_overview":"植物概览","search_placeholder":"搜索植物...","filter_close":"关闭过滤器","filter":"过滤器","multiselect_end":"结束多选","multiselect":"多选","search_reset":"重置搜索","search_default":"搜索...","entity_type":"实体类型","plants":"植物","cycles":"周期","filter_range_to":"到","add_plant":"添加新植物"},"helpers":{"growth_phase":"生长阶段","flowering_duration":"开花持续时间","pot_size":"花盆大小","water_capacity":"水容量","treatment":"处理","health":"健康","journal":"日志","location":"位置","cycle":"周期"}}}')}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,i),o.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(4828),i(2434),i(2489),i(5419)})();