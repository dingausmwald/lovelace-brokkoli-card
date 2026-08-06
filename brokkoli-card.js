/*! For license information please see brokkoli-card.js.LICENSE.txt */
(()=>{"use strict";var t={4356:(t,e,i)=>{i.r(e),i.d(e,{DEFAULT_DOMAIN_ICON:()=>Z,DEFAULT_PANEL:()=>J,DEFAULT_VIEW_ENTITY_ID:()=>rt,DOMAINS_HIDE_MORE_INFO:()=>et,DOMAINS_MORE_INFO_NO_HISTORY:()=>it,DOMAINS_TOGGLE:()=>at,DOMAINS_WITH_CARD:()=>Q,DOMAINS_WITH_MORE_INFO:()=>tt,NumberFormat:()=>n,STATES_OFF:()=>nt,TimeFormat:()=>a,UNIT_C:()=>ot,UNIT_F:()=>st,applyThemesOnElement:()=>j,computeCardSize:()=>L,computeDomain:()=>N,computeEntity:()=>R,computeRTL:()=>H,computeRTLDirection:()=>G,computeStateDisplay:()=>X,computeStateDomain:()=>B,createThing:()=>ht,debounce:()=>ut,domainIcon:()=>mt,evaluateFilter:()=>gt,fireEvent:()=>lt,fixedIcons:()=>pt,formatDate:()=>c,formatDateMonth:()=>f,formatDateMonthYear:()=>_,formatDateNumeric:()=>u,formatDateShort:()=>m,formatDateTime:()=>k,formatDateTimeNumeric:()=>E,formatDateTimeWithSeconds:()=>S,formatDateWeekday:()=>l,formatDateYear:()=>b,formatNumber:()=>K,formatTime:()=>C,formatTimeWeekday:()=>z,formatTimeWithSeconds:()=>P,forwardHaptic:()=>_t,getLovelace:()=>Et,handleAction:()=>wt,handleActionConfig:()=>bt,handleClick:()=>xt,hasAction:()=>kt,hasConfigOrEntityChanged:()=>$t,hasDoubleClick:()=>St,isNumericState:()=>V,navigate:()=>vt,numberFormatToLocale:()=>W,relativeTime:()=>F,round:()=>q,stateIcon:()=>Dt,timerTimeRemaining:()=>O,toggleEntity:()=>yt,turnOnOffEntities:()=>It,turnOnOffEntity:()=>ft});var n,a,o,s=function(){return s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},s.apply(this,arguments)},r={second:45,minute:45,hour:22,day:5},l=function(t,e){return d(e).format(t)},d=function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"})},c=function(t,e){return h(e).format(t)},h=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})},u=function(t,e){return p(e).format(t)},p=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"})},m=function(t,e){return g(e).format(t)},g=function(t){return new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})},_=function(t,e){return v(e).format(t)},v=function(t){return new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"})},f=function(t,e){return y(e).format(t)},y=function(t){return new Intl.DateTimeFormat(t.language,{month:"long"})},b=function(t,e){return w(e).format(t)},w=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric"})};(o=n||(n={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(a||(a={}));var x=function(t){if(t.time_format===a.language||t.time_format===a.system){var e=t.time_format===a.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===a.am_pm},k=function(t,e){return $(e).format(t)},$=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:x(t)?"numeric":"2-digit",minute:"2-digit",hour12:x(t)})},S=function(t,e){return I(e).format(t)},I=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},E=function(t,e){return T(e).format(t)},T=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:x(t)})},C=function(t,e){return D(e).format(t)},D=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:x(t)})},P=function(t,e){return M(e).format(t)},M=function(t){return new Intl.DateTimeFormat(t.language,{hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},z=function(t,e){return A(e).format(t)},A=function(t){return new Intl.DateTimeFormat(t.language,{hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},F=function(t,e,i,n){void 0===n&&(n=!0);var a=function(t,e,i){void 0===e&&(e=Date.now()),void 0===i&&(i={});var n=s(s({},r),i||{}),a=(+t-+e)/1e3;if(Math.abs(a)<n.second)return{value:Math.round(a),unit:"second"};var o=a/60;if(Math.abs(o)<n.minute)return{value:Math.round(o),unit:"minute"};var l=a/3600;if(Math.abs(l)<n.hour)return{value:Math.round(l),unit:"hour"};var d=a/86400;if(Math.abs(d)<n.day)return{value:Math.round(d),unit:"day"};var c=new Date(t),h=new Date(e),u=c.getFullYear()-h.getFullYear();if(Math.round(Math.abs(u))>0)return{value:Math.round(u),unit:"year"};var p=12*u+c.getMonth()-h.getMonth();if(Math.round(Math.abs(p))>0)return{value:Math.round(p),unit:"month"};var m=a/604800;return{value:Math.round(m),unit:"week"}}(t,i);return n?function(t){return new Intl.RelativeTimeFormat(t.language,{numeric:"auto"})}(e).format(a.value,a.unit):Intl.NumberFormat(e.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};function O(t){var e,i=3600*(e=t.attributes.remaining.split(":").map(Number))[0]+60*e[1]+e[2];if("active"===t.state){var n=(new Date).getTime(),a=new Date(t.last_changed).getTime();i=Math.max(i-(n-a)/1e3,0)}return i}function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var j=function(t,e,i,n){void 0===n&&(n=!1),t._themes||(t._themes={});var a=e.default_theme;("default"===i||i&&e.themes[i])&&(a=i);var o=U({},t._themes);if("default"!==a){var s=e.themes[a];Object.keys(s).forEach((function(e){var i="--"+e;t._themes[i]="",o[i]=s[e]}))}if(t.updateStyles?t.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,o),n){var r=document.querySelector("meta[name=theme-color]");if(r){r.hasAttribute("default-content")||r.setAttribute("default-content",r.getAttribute("content"));var l=o["--primary-color"]||r.getAttribute("default-content");r.setAttribute("content",l)}}},L=function(t){return"function"==typeof t.getCardSize?t.getCardSize():4};function N(t){return t.substr(0,t.indexOf("."))}function R(t){return t.substr(t.indexOf(".")+1)}function H(t){var e,i=(null==t||null==(e=t.locale)?void 0:e.language)||"en";return t.translationMetadata.translations[i]&&t.translationMetadata.translations[i].isRTL||!1}function G(t){return H(t)?"rtl":"ltr"}function B(t){return N(t.entity_id)}var V=function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class},W=function(t){switch(t.number_format){case n.comma_decimal:return["en-US","en"];case n.decimal_comma:return["de","es","it"];case n.space_comma:return["fr","sv","cs"];case n.system:return;default:return t.language}},q=function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)},K=function(t,e,i){var a=e?W(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==n.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(a,Y(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Y(t,i)).format(Number(t))}return"string"==typeof t?t:q(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Y=function(t,e){var i=U({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},X=function(t,e,i,n){var a=void 0!==n?n:e.state;if("unknown"===a||"unavailable"===a)return t("state.default."+a);if(V(e)){if("monetary"===e.attributes.device_class)try{return K(a,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return K(a,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o=B(e);if("input_datetime"===o){var s;if(void 0===n)return e.attributes.has_date&&e.attributes.has_time?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),k(s,i)):e.attributes.has_date?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),c(s,i)):e.attributes.has_time?((s=new Date).setHours(e.attributes.hour,e.attributes.minute),C(s,i)):e.state;try{var r=n.split(" ");if(2===r.length)return k(new Date(r.join("T")),i);if(1===r.length){if(n.includes("-"))return c(new Date(n+"T00:00"),i);if(n.includes(":")){var l=new Date;return C(new Date(l.toISOString().split("T")[0]+"T"+n),i)}}return n}catch(t){return n}}return"humidifier"===o&&"on"===a&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?K(a,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+a)||t("component."+o+".state._."+a)||a},Z="mdi:bookmark",J="lovelace",Q=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],tt=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],et=["input_number","input_select","input_text","scene","weblink"],it=["camera","configurator","history_graph","scene"],nt=["closed","locked","off"],at=new Set(["fan","input_boolean","light","switch","group","automation"]),ot="°C",st="°F",rt="group.default_view",lt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,t.dispatchEvent(a),a},dt=new Set(["call-service","divider","section","weblink","cast","select"]),ct={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ht=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var a=t.type;if(a&&a.startsWith("custom:"))a=a.substr(7);else if(e)if(dt.has(a))a="hui-"+a+"-row";else{if(!t.entity)return i("Invalid config given.",t);var o=t.entity.split(".",1)[0];a="hui-"+(ct[o]||"text")+"-entity-row"}else a="hui-"+a+"-card";if(customElements.get(a))return n(a,t);var s=i("Custom element doesn't exist: "+t.type+".",t);s.style.display="None";var r=setTimeout((function(){s.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(r),lt(s,"ll-rebuild",{},s)})),s},ut=function(t,e,i){var n;return void 0===i&&(i=!1),function(){var a=[].slice.call(arguments),o=this,s=i&&!n;clearTimeout(n),n=setTimeout((function(){n=null,i||t.apply(o,a)}),e),s&&t.apply(o,a)}},pt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function mt(t,e){if(t in pt)return pt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var gt=function(t,e){var i=e.value||e,n=e.attribute?t.attributes[e.attribute]:t.state;switch(e.operator||"=="){case"==":return n===i;case"<=":return n<=i;case"<":return n<i;case">=":return n>=i;case">":return n>i;case"!=":return n!==i;case"regex":return n.match(i);default:return!1}},_t=function(t){lt(window,"haptic",t)},vt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),lt(window,"location-changed",{replace:i})},ft=function(t,e,i){void 0===i&&(i=!0);var n,a=N(e),o="group"===a?"homeassistant":a;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(o,n,{entity_id:e})},yt=function(t,e){var i=nt.includes(t.states[e].state);return ft(t,e,i)},bt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(_t("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&lt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&vt(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(yt(e,i.entity),_t("success"));break;case"call-service":if(!n.service)return void _t("failure");var a=n.service.split(".",2);e.callService(a[0],a[1],n.service_data,n.target),_t("success");break;case"fire-dom-event":lt(t,"ll-custom",n)}},wt=function(t,e,i,n){var a;"double_tap"===n&&i.double_tap_action?a=i.double_tap_action:"hold"===n&&i.hold_action?a=i.hold_action:"tap"===n&&i.tap_action&&(a=i.tap_action),bt(t,e,i,a)},xt=function(t,e,i,n,a){var o;if(a&&i.double_tap_action?o=i.double_tap_action:n&&i.hold_action?o=i.hold_action:!n&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(lt(t,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&_t(o.haptic));break;case"navigate":o.navigation_path&&(vt(0,o.navigation_path),o.haptic&&_t(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&_t(o.haptic);break;case"toggle":i.entity&&(yt(e,i.entity),o.haptic&&_t(o.haptic));break;case"call-service":if(!o.service)return;var s=o.service.split(".",2),r=s[0],l=s[1],d=U({},o.service_data);"entity"===d.entity_id&&(d.entity_id=i.entity),e.callService(r,l,d,o.target),o.haptic&&_t(o.haptic);break;case"fire-dom-event":lt(t,"ll-custom",o),o.haptic&&_t(o.haptic)}};function kt(t){return void 0!==t&&"none"!==t.action}function $t(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}function St(t){return void 0!==t&&"none"!==t.action}var It=function(t,e,i){void 0===i&&(i=!0);var n={};e.forEach((function(e){if(nt.includes(t.states[e].state)===i){var a=N(e),o=["cover","lock"].includes(a)?a:"homeassistant";o in n||(n[o]=[]),n[o].push(e)}})),Object.keys(n).forEach((function(e){var a;switch(e){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}t.callService(e,a,{entity_id:n[e]})}))},Et=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null},Tt={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ct={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return mt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Tt)return Tt[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var n=10*Math.round(i/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var a=t.attributes.unit_of_measurement;return"°C"===a||"°F"===a?"mdi:thermometer":mt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?mt("input_datetime"):"mdi:calendar":"mdi:clock"}},Dt=function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=N(t.entity_id);return e in Ct?Ct[e](t):mt(e,t.state)}},8049:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliAreaCardEditor=void 0;const a=i(4437),o=i(2924),s=i(4356),r=[{value:"health",label:"Health"},...i(4139).plantAttributes];let l=class extends a.LitElement{constructor(){super(...arguments),this._computeLabel=t=>{var e;return null!==(e={title:"Titel",area:"Area",entities:"Pflanzen / Cycles (manuell)",show_rings:"Sensor-Ringe",show_labels:"Sensor-Labels (Mitte)",heatmap:"Heatmap-Sensor",heatmap_color:"Heatmap-Farbe",heatmap_secondary_color:"Heatmap-Sekundärfarbe",heatmap_opacity:"Heatmap-Opacity",legend:"Legende anzeigen",identifier:"Identifier (für List-/Plant-Card-Verkn.)"}[t.name])&&void 0!==e?e:t.name}}setConfig(t){this._config=t}get _schema(){return[{name:"title",selector:{text:{}}},{name:"area",selector:{area:{}}},{name:"entities",selector:{entity:{multiple:!0,filter:[{domain:"plant"},{domain:"cycle"}]}}},{name:"show_rings",selector:{select:{multiple:!0,mode:"list",options:r}}},{name:"show_labels",selector:{select:{multiple:!0,mode:"list",options:r}}},{name:"heatmap",selector:{select:{mode:"dropdown",options:[{value:"",label:"Aus"},...r]}}},{name:"heatmap_color",selector:{color_rgb:{}}},{name:"heatmap_secondary_color",selector:{color_rgb:{}}},{name:"heatmap_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}}},{name:"legend",selector:{boolean:{}}},{name:"identifier",selector:{text:{}}}]}render(){return this.hass&&this._config?a.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:a.html``}_valueChanged(t){(0,s.fireEvent)(this,"config-changed",{config:t.detail.value})}static get styles(){return a.css`ha-form { display: block; }`}};e.BrokkoliAreaCardEditor=l,n([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),n([(0,o.state)()],l.prototype,"_config",void 0),e.BrokkoliAreaCardEditor=l=n([(0,o.customElement)("brokkoli-area-card-editor")],l)},2434:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default_show_labels=e.default_show_rings=e.AREA_CARD_EDITOR_NAME=e.AREA_CARD_NAME=void 0;const o=i(4437),s=i(2924),r=i(3073);i(9446),i(8049);const l=i(8063),d=i(9442),c=i(2413);i(9242),e.AREA_CARD_NAME="brokkoli-area-card",e.AREA_CARD_EDITOR_NAME="brokkoli-area-card-editor",e.default_show_rings=["health","moisture","temperature"],e.default_show_labels=[],window.customCards=window.customCards||[],window.customCards.push({type:e.AREA_CARD_NAME,name:"Brokkoli Area Card",preview:!0,description:"Zeigt die Positionen von Pflanzen in einem Bereich an"});let h=class extends o.LitElement{constructor(){super(...arguments),this._handleEntitySelected=t=>{var e;this._selectedEntityId=t.detail.entityId;const i=t.detail.selectedEntities||[];if(null===(e=this.config)||void 0===e?void 0:e.identifier){const e=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:t.detail.entityId,selectedEntities:i.length?i:t.detail.entityId?[t.detail.entityId]:[]}});window.dispatchEvent(e)}}}setConfig(t){var i;if(!t.area&&!t.entity&&!(null===(i=t.entities)||void 0===i?void 0:i.length))throw new Error(this._hass?c.TranslationUtils.translateUI(this._hass,"area_config_error"):"Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren");this.config=Object.assign(Object.assign({},t),{show_rings:t.show_rings||[...e.default_show_rings],show_labels:t.show_labels||[],legend:void 0===t.legend||t.legend})}set hass(t){this._hass=t,c.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()}))}static getConfigElement(){return a(this,void 0,void 0,(function*(){return document.createElement(e.AREA_CARD_EDITOR_NAME)}))}static getStubConfig(){return{type:"custom:brokkoli-area-card",title:"Pflanzen-Bereich",area:"wohnzimmer"}}_getAllPlantEntities(){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").map((t=>t.entity_id)):[]}_getPlantEntitiesInArea(t){return this._hass?l.PlantEntityUtils.getPlantEntities(this._hass,"plant").filter((e=>{const i=d.FilterUtils.getAreaForEntity(this._hass,e.entity_id);return i&&i.toLowerCase()===t.toLowerCase()})).map((t=>t.entity_id)):[]}render(){if(!this.config||!this._hass)return o.html``;let t=[];t=this.config.area?this._getPlantEntitiesInArea(this.config.area):this._getAllPlantEntities(),this.config.entity&&t.push(this.config.entity),this.config.entities&&(t=[...t,...this.config.entities]);const e=t.filter((t=>this._hass.states[t]));return o.html`
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
      ${r.positionStyles}
      
      .no-padding {
        padding: 0 !important;
      }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("request-area-id",(t=>{t.detail&&"function"==typeof t.detail.callback&&t.detail.callback(this.config.area||"")})),this.addEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("brokkoli-area-entity-selected",this._handleEntitySelected)}};n([(0,s.property)({attribute:!1})],h.prototype,"_hass",void 0),n([(0,s.property)()],h.prototype,"config",void 0),n([(0,s.state)()],h.prototype,"_error",void 0),n([(0,s.state)()],h.prototype,"_selectedEntityId",void 0),h=n([(0,s.customElement)(e.AREA_CARD_NAME)],h),e.default=h},4828:function(t,e,i){var n,a=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i);var a=Object.getOwnPropertyDescriptor(e,i);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,a)}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},r=this&&this.__importStar||(n=function(t){return n=Object.getOwnPropertyNames||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[e.length]=i);return e},n(t)},function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i=n(t),s=0;s<i.length;s++)"default"!==i[s]&&a(e,t,i[s]);return o(e,t),e}),l=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const d=i(4437),c=i(2924),h=i(6800),u=i(9130),p=r(i(8330)),m=i(9429),g=i(4139),_=i(2135),v=i(2413);i(4507),i(6822),i(5953),i(2618),i(1261),console.info(`%c BROKKOLI-CARD %c ${p.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:g.CARD_NAME,name:"Brokkoli card",preview:!0,description:"Custom brokkoli card for https://github.com/Olen/homeassistant-plant"});let f=class extends d.LitElement{constructor(){super(...arguments),this._expanded={attributes:!1,timeline:!1,consumption:!1,history:!1,details:!1},this._expandedOrder=[],this._showGallery=!1,this._currentImageIndex=0,this._nextImageIndex=1,this._isFading=!1,this._activePopup=null,this._showFlyoutMenu=!1,this._popupData={},this._showPlantDropdown=!1,this.selectedPlantEntity=null,this._listenToSelector=null,this._selectedEntities=[],this._imageUrls=[],this._handleOutsideDropdownClick=()=>{this._showPlantDropdown=!1,this.requestUpdate()},this._handleOutsideClick=t=>{t.composedPath().some((t=>t instanceof HTMLElement&&t.classList.contains("flyout-menu")))||(this._showFlyoutMenu=!1,document.removeEventListener("click",this._handleOutsideClick))},this._handleCycleMemberSelected=t=>{var e;if((null===(e=this.config)||void 0===e?void 0:e.entity)&&this.stateObj&&t.detail){const{originalEntityId:e,selectedEntityId:i,sourceCardId:n}=t.detail;if(n===this)return;(e===this.config.entity||this._popupData.originalEntity&&this._popupData.originalEntity===e)&&(this.selectedPlantEntity=i,!this._popupData.originalEntity&&this.stateObj&&(this._popupData.originalEntity=this.stateObj.entity_id),this._hass&&(this.stateObj=this._hass.states[i],this.get_data(this._hass).then((()=>{var t,e;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-graph");n&&n.forEach((t=>{t&&(t.entityId=i,"function"==typeof t.updateDateRange?t.updateDateRange().then((()=>{"function"==typeof t.updateGraphData&&t.updateGraphData(!0)})):"function"==typeof t.updateGraphData&&t.updateGraphData(!0))}));const a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-consumption");a&&a.forEach((t=>{t&&(t.entityId=i)})),this.requestUpdate()}))))}},this._handleCardEntitySelected=t=>{if(this._listenToSelector&&t.detail){const{sourceIdentifier:e,selectedEntityId:i,selectedEntities:n}=t.detail;if(e===this._listenToSelector){if(n&&Array.isArray(n)?this._selectedEntities=[...n]:this._selectedEntities=i?[i]:[],this.selectedPlantEntity=i,!i)return this.stateObj=void 0,void this.requestUpdate();this._hass&&i&&this._hass.states[i]&&(this.stateObj=this._hass.states[i],this.get_data(this._hass).then((()=>{var t,e;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-graph");n&&n.forEach((t=>{t&&(t.entityId=i,"function"==typeof t.updateDateRange?t.updateDateRange().then((()=>{"function"==typeof t.updateGraphData&&t.updateGraphData(!0)})):"function"==typeof t.updateGraphData&&t.updateGraphData(!0))}));const a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-consumption");a&&a.forEach((t=>{t&&(t.entityId=i)})),this.requestUpdate()})))}}}}getGrowthPhaseIcon(t){return(0,g.getGrowthPhaseIcon)(t,this._hass,this.stateObj)}disconnectedCallback(){super.disconnectedCallback(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),window.removeEventListener("brokkoli-card-cycle-member-selected",this._handleCycleMemberSelected),window.removeEventListener("brokkoli-card-entity-selected",this._handleCardEntitySelected)}connectedCallback(){super.connectedCallback(),window.addEventListener("brokkoli-card-cycle-member-selected",this._handleCycleMemberSelected),window.addEventListener("brokkoli-card-entity-selected",this._handleCardEntitySelected)}set hass(t){var e,i;this._hass=t,v.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()})),this.selectedPlantEntity?this.stateObj=t.states[this.selectedPlantEntity]:(null===(e=this.config)||void 0===e?void 0:e.entity)?this.stateObj=t.states[this.config.entity]:this.stateObj=void 0,this.previousFetchDate||(this.previousFetchDate=0),(this.selectedPlantEntity||(null===(i=this.config)||void 0===i?void 0:i.entity))&&Date.now()>this.previousFetchDate+1e3&&(this.previousFetchDate=Date.now(),this.get_data(t).then((()=>{this.requestUpdate()})))}static getConfigElement(){return l(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>r(i(43)))),document.createElement(g.CARD_EDITOR_NAME)}))}static getStubConfig(t){const e=t=>{if("object"==typeof t&&"entity_id"in t&&"string"==typeof t.entity_id&&(0===t.entity_id.indexOf("plant.")||0===t.entity_id.indexOf("cycle.")))return!!t};let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:[...g.default_show_bars],show_elements:[...g.default_show_elements],option_elements:[...g.default_option_elements],default_expanded_options:[...g.initial_expanded_options]}}setConfig(t){var e;if(!t.entity&&!t.listen_to)throw new Error(this._hass?v.TranslationUtils.translateUI(this._hass,"config_error_entity_required"):"Du musst entweder eine Entity oder listen_to definieren");if(this.config=Object.assign(Object.assign({},t),{show_elements:t.show_elements||[...g.default_show_elements],option_elements:t.option_elements||[...g.default_option_elements],default_expanded_options:t.default_expanded_options||[...g.initial_expanded_options]}),t.listen_to&&(this._listenToSelector=t.listen_to),this._expandedOrder=[],null===(e=this.config.default_expanded_options)||void 0===e?void 0:e.length){const t=this.config.default_expanded_options.filter((t=>this.config.option_elements.includes(t)));this._expanded=Object.assign(Object.assign({},this._expanded),Object.fromEntries(t.map((t=>[t,!0])))),this._expandedOrder=[...t]}}_renderElement(t){switch(t){case"header":return this._renderHeader();case"attributes":return this._renderAttributes();case"options":return this._renderOptions();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return d.html``}}_renderHeader(){var t,e,i,n,a,o,s,r,l;const c=this.config.display_type===u.DisplayType.Compact?"header-compact":"header",h=(this.stateObj.entity_id.split(".")[1],this.stateObj.entity_id.startsWith("cycle.")),p=null!==this.selectedPlantEntity;let f="",y=[];if(p&&this._popupData.originalEntity){const t=this._popupData.originalEntity.split(".")[1],e=this._hass.states[`select.${t}_growth_phase`];e&&e.attributes.member_plants&&(y=e.attributes.member_plants)}else if(h){const a=null===(n=null===(i=null===(e=null===(t=this.plantinfo)||void 0===t?void 0:t.result)||void 0===e?void 0:e.helpers)||void 0===i?void 0:i.growth_phase)||void 0===n?void 0:n.entity_id,o=a?this._hass.states[a]:void 0;o&&o.attributes.member_plants&&(y=o.attributes.member_plants)}if(h)f=`${this.stateObj.attributes.member_count||0} ${v.TranslationUtils.translateUI(this._hass,"plants_count")}`;else if(this._listenToSelector&&this._selectedEntities.length>1){const t=v.TranslationUtils.translateUI(this._hass,"plants_selected");f=`${this._selectedEntities.length} ${t}`}else f=this.stateObj.attributes.strain+" - "+this.stateObj.attributes.breeder;const b=null===(o=null===(a=this.plantinfo)||void 0===a?void 0:a.result)||void 0===o?void 0:o.helpers,w=null===(s=null==b?void 0:b.growth_phase)||void 0===s?void 0:s.entity_id,x=null===(r=null==b?void 0:b.pot_size)||void 0===r?void 0:r.entity_id,k=w?this._hass.states[w]:void 0,$=x?this._hass.states[x]:void 0,S=v.TranslationUtils.translateUI(this._hass,"unavailable"),I=k?v.TranslationUtils.translateGrowthPhase(this._hass,k.state):S,E=$?$.state+"L":S,T=this.config.show_elements.length>1;return d.html`
            <div class="${c}">
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
                <span id="name" @click="${()=>(0,_.moreInfo)(this,this.stateObj.entity_id)}"> ${this.stateObj.attributes.friendly_name} <ha-icon .icon="mdi:${"problem"==this.stateObj.state.toLowerCase()?"alert-circle-outline":""}"></ha-icon>
                </span>
                <span id="battery">${(0,m.renderBattery)(this)}</span>
                ${h||p||null!==this._listenToSelector&&this._selectedEntities.length>0?d.html`
                    <div id="species" class="plant-dropdown-container">
                        <div @click="${this._togglePlantDropdown}" class="clickable-plants">
                            ${f}
                            <ha-icon icon="mdi:chevron-down"></ha-icon>
                        </div>
                        ${this._showPlantDropdown?this._renderPlantDropdown(y):""}
                    </div>
                    `:d.html`<span id="species">${f}</span>`}
                ${this.config.display_type!==u.DisplayType.Compact?d.html`
                <div id="status-container">
                    <span @click="${()=>x&&(0,_.moreInfo)(this,x)}">
                        <ha-icon icon="mdi:cup"></ha-icon>${E}
                    </span>
                    <span @click="${()=>w&&(0,_.moreInfo)(this,w)}">
                        <ha-icon icon="${this.getGrowthPhaseIcon(null!==(l=null==k?void 0:k.state)&&void 0!==l?l:I)}"></ha-icon>${I}
                    </span>
                    </div>
                `:""}
                </div>
                ${T?d.html`<div class="divider"></div>`:""}
            ${this._renderPopups()}
        `}_togglePlantDropdown(t){t.stopPropagation(),this._showPlantDropdown=!this._showPlantDropdown,this.requestUpdate(),this._showPlantDropdown&&document.addEventListener("click",this._handleOutsideDropdownClick,{once:!0})}_renderPlantDropdown(t){if(!t.length&&this._selectedEntities.length>0&&(t=[...this._selectedEntities]),!t.length){const t=v.TranslationUtils.translateUI(this._hass,"no_plants_found");return d.html`
                <div class="plant-dropdown">
                    <div class="plant-dropdown-item">${t}</div>
                </div>
            `}const e=[...null!==this.selectedPlantEntity&&this._popupData.originalEntity?[this._popupData.originalEntity]:[],...t];return d.html`
            <div class="plant-dropdown">
                ${e.map((t=>{const e=this._hass.states[t];if(!e){const e=v.TranslationUtils.translateUI(this._hass,"entity_not_found");return d.html`
                            <div class="plant-dropdown-item">
                                <div class="plant-dropdown-name">${t}</div>
                                <div class="plant-dropdown-info">${e}</div>
                            </div>
                        `}const i=t.startsWith("cycle."),n=e.attributes.friendly_name||t.split(".")[1];if(i){const t=v.TranslationUtils.translateUI(this._hass,"return_to_cycle");return d.html`
                            <div class="plant-dropdown-item" @click="${()=>this._returnToCycle()}">
                                <div class="plant-dropdown-name">${n}</div>
                                <div class="plant-dropdown-info">${t}</div>
                            </div>
                        `}const a=e.attributes.strain||"",o=e.attributes.breeder||"";return d.html`
                        <div class="plant-dropdown-item" @click="${()=>this._selectPlant(t)}">
                            <div class="plant-dropdown-name">${n}</div>
                            <div class="plant-dropdown-info">${a} - ${o}</div>
                        </div>
                    `}))}
            </div>
        `}_selectPlant(t){this.selectedPlantEntity=t,this._showPlantDropdown=!1,!this._popupData.originalEntity&&this.stateObj&&(this._popupData.originalEntity=this.stateObj.entity_id),this._hass&&(this.stateObj=this._hass.states[t],this.get_data(this._hass).then((()=>{var e,i,n;const a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-graph");a&&a.forEach((e=>{e&&(e.entityId=t,"function"==typeof e.updateDateRange?e.updateDateRange().then((()=>{"function"==typeof e.updateGraphData&&e.updateGraphData(!0)})):"function"==typeof e.updateGraphData&&e.updateGraphData(!0))}));const o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll("flower-consumption");o&&o.forEach((e=>{e&&(e.entityId=t)}));const s=new CustomEvent("brokkoli-card-cycle-member-selected",{bubbles:!0,composed:!0,detail:{originalEntityId:this._popupData.originalEntity||(null===(n=this.config)||void 0===n?void 0:n.entity),selectedEntityId:t,sourceCardId:this}});window.dispatchEvent(s),this.requestUpdate()})))}_toggleFlyoutMenu(t){t.stopPropagation(),this._showFlyoutMenu=!this._showFlyoutMenu,this._showFlyoutMenu?document.addEventListener("click",this._handleOutsideClick):document.removeEventListener("click",this._handleOutsideClick)}_renderFlyoutMenu(){const t=null!==this.selectedPlantEntity;return d.html`
            <div class="flyout-menu">
                ${t?d.html`
                    <div class="flyout-menu-item" @click="${this._returnToCycle}">
                        <ha-icon icon="mdi:arrow-left"></ha-icon>
                        <span>${v.TranslationUtils.translateUI(this._hass,"return_to_cycle")}</span>
                    </div>
                    <div class="flyout-menu-divider"></div>
                `:""}
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="clone",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:content-duplicate"></ha-icon>
                    <span>${v.TranslationUtils.translateUI(this._hass,"clone_plant")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="move",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:arrow-decision"></ha-icon>
                    <span>${v.TranslationUtils.translateUI(this._hass,"move_to_cycle")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="replace",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                    <span>${v.TranslationUtils.translateUI(this._hass,"replace_sensors")}</span>
                </div>
                <div class="flyout-menu-item" @click="${()=>{this._activePopup="remove",this._showFlyoutMenu=!1}}">
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                    <span>${v.TranslationUtils.translateUI(this._hass,"delete_plant")}</span>
                </div>
            </div>
        `}_returnToCycle(){this._popupData.originalEntity&&this._hass&&(this.selectedPlantEntity=null,this.stateObj=this._hass.states[this._popupData.originalEntity],this.get_data(this._hass).then((()=>{var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("flower-graph");i&&i.forEach((t=>{t&&(t.entityId=this._popupData.originalEntity,"function"==typeof t.updateDateRange?t.updateDateRange().then((()=>{"function"==typeof t.updateGraphData&&t.updateGraphData(!0)})):"function"==typeof t.updateGraphData&&t.updateGraphData(!0))}));const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("flower-consumption");n&&n.forEach((t=>{t&&(t.entityId=this._popupData.originalEntity)}));const a=new CustomEvent("brokkoli-card-cycle-member-selected",{bubbles:!0,composed:!0,detail:{originalEntityId:this._popupData.originalEntity,selectedEntityId:this._popupData.originalEntity,sourceCardId:this}});window.dispatchEvent(a),this._popupData.originalEntity=null,this.requestUpdate()}))),this._showPlantDropdown=!1}_handleClonePlant(){return l(this,void 0,void 0,(function*(){yield this._hass.callService("plant","clone_plant",Object.assign({source_entity_id:this.stateObj.entity_id},this._popupData)),this._closePopup()}))}_handleMoveToCycle(){return l(this,void 0,void 0,(function*(){yield this._hass.callService("plant","move_to_cycle",{plant_entity:this.stateObj.entity_id,cycle_entity:this._popupData.cycle_entity}),this._closePopup()}))}_handleRemovePlant(){return l(this,void 0,void 0,(function*(){yield this._hass.callService("plant","remove_plant",{plant_entity:this.stateObj.entity_id}),this._closePopup()}))}_handleReplaceSensors(){return l(this,void 0,void 0,(function*(){var t,e,i,n;const a=["temperature","moisture","illuminance","humidity","conductivity","power_consumption"],o=null===(t=this.plantinfo)||void 0===t?void 0:t.result,s=null!=o?o:{},r=null!==(e=null==o?void 0:o.diagnostic_sensors)&&void 0!==e?e:{};for(const t of a){const e=this._popupData[`new_${t}_sensor`],a="power_consumption"===t?null===(i=r.total_power_consumption)||void 0===i?void 0:i.entity_id:null===(n=s[t])||void 0===n?void 0:n.sensor;e&&a&&(yield this._hass.callService("plant","replace_sensor",{meter_entity:a,new_sensor:e}))}this._closePopup()}))}_closePopup(){this._activePopup=null,this._popupData={},this.requestUpdate()}_renderPopups(){if(!this._activePopup)return d.html``;switch(this._activePopup){case"clone":return this._renderClonePopup();case"move":return this._renderMovePopup();case"remove":return this._renderRemovePopup();case"replace":return this._renderReplacePopup();default:return d.html``}}_renderClonePopup(){return d.html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${t=>t.stopPropagation()}">
                    <div class="popup-title">${v.TranslationUtils.translateUI(this._hass,"clone_plant")}</div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateField(this._hass,"friendly_name")}</label>
                        <input type="text" .value="${this._popupData.name||""}"
                               @input="${t=>this._popupData.name=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"temperature")}</label>
                        <input type="text" .value="${this._popupData.temperature_sensor||""}"
                               @input="${t=>this._popupData.temperature_sensor=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"soil_moisture")}</label>
                        <input type="text" .value="${this._popupData.moisture_sensor||""}"
                               @input="${t=>this._popupData.moisture_sensor=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"illuminance")}</label>
                        <input type="text" .value="${this._popupData.illuminance_sensor||""}"
                               @input="${t=>this._popupData.illuminance_sensor=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"air_humidity")}</label>
                        <input type="text" .value="${this._popupData.humidity_sensor||""}"
                               @input="${t=>this._popupData.humidity_sensor=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"conductivity")}</label>
                        <input type="text" .value="${this._popupData.conductivity_sensor||""}"
                               @input="${t=>this._popupData.conductivity_sensor=t.target.value}">
                    </div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateSensor(this._hass,"total_power_consumption")}</label>
                        <input type="text" .value="${this._popupData.power_consumption_sensor||""}"
                               @input="${t=>this._popupData.power_consumption_sensor=t.target.value}">
                    </div>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${v.TranslationUtils.translateUI(this._hass,"cancel")}</button>
                        <button @click="${this._handleClonePlant}">${v.TranslationUtils.translateUI(this._hass,"clone")}</button>
                    </div>
                </div>
            </div>
        `}_renderMovePopup(){const t=Object.entries(this._hass.states).filter((([t])=>t.startsWith("cycle."))).map((([t,e])=>{var i;return{entity_id:t,name:(null===(i=e.attributes)||void 0===i?void 0:i.friendly_name)||t.split(".")[1]}}));return d.html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${t=>t.stopPropagation()}">
                    <div class="popup-title">${v.TranslationUtils.translateUI(this._hass,"move_to_cycle")}</div>
                    <div class="form-field">
                        <label>${v.TranslationUtils.translateUI(this._hass,"select_cycle")}</label>
                        <select @change="${t=>this._popupData.cycle_entity=t.target.value}">
                            <option value="">${v.TranslationUtils.translateUI(this._hass,"please_select")}</option>
                            ${t.map((t=>d.html`
                                <option value="${t.entity_id}">${t.name}</option>
                            `))}
                        </select>
                    </div>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${v.TranslationUtils.translateUI(this._hass,"cancel")}</button>
                        <button @click="${this._handleMoveToCycle}" ?disabled="${!this._popupData.cycle_entity}">
                            ${v.TranslationUtils.translateUI(this._hass,"move")}
                        </button>
                    </div>
                </div>
            </div>
        `}_renderRemovePopup(){return d.html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${t=>t.stopPropagation()}">
                    <div class="popup-title">${v.TranslationUtils.translateUI(this._hass,"delete_plant")}</div>
                    <p>${v.TranslationUtils.translateUI(this._hass,"delete_plant_confirmation")}</p>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${v.TranslationUtils.translateUI(this._hass,"cancel")}</button>
                        <button @click="${this._handleRemovePlant}" class="danger">
                            ${v.TranslationUtils.translateUI(this._hass,"confirm_delete")}
                        </button>
                    </div>
                </div>
            </div>
        `}_renderReplacePopup(){var t,e,i,n,a,o;const s=[{key:"temperature",label:v.TranslationUtils.translateSensor(this._hass,"temperature"),icon:"mdi:thermometer"},{key:"moisture",label:v.TranslationUtils.translateSensor(this._hass,"soil_moisture"),icon:"mdi:water-percent"},{key:"illuminance",label:v.TranslationUtils.translateSensor(this._hass,"illuminance"),icon:"mdi:brightness-5"},{key:"humidity",label:v.TranslationUtils.translateSensor(this._hass,"air_humidity"),icon:"mdi:water"},{key:"conductivity",label:v.TranslationUtils.translateSensor(this._hass,"conductivity"),icon:"mdi:flash"},{key:"power_consumption",label:v.TranslationUtils.translateSensor(this._hass,"total_power_consumption"),icon:"mdi:power-plug"}],r=null===(t=this.plantinfo)||void 0===t?void 0:t.result,l=null!=r?r:{},c=null!==(e=null==r?void 0:r.diagnostic_sensors)&&void 0!==e?e:{},h={};for(const t of s){const e="power_consumption"===t.key?null===(i=c.total_power_consumption)||void 0===i?void 0:i.entity_id:null===(n=l[t.key])||void 0===n?void 0:n.sensor;h[t.key]=e?null===(o=null===(a=this._hass.states[e])||void 0===a?void 0:a.attributes)||void 0===o?void 0:o.external_sensor:void 0}const u=t=>Object.entries(this._hass.states).filter((([t,e])=>!(!t.startsWith("sensor.")||e.attributes&&"external_sensor"in e.attributes))).filter((([,e])=>{var i,n;const a=null===(i=e.attributes)||void 0===i?void 0:i.device_class,o=null===(n=e.attributes)||void 0===n?void 0:n.unit_of_measurement;switch(t){case"temperature":return"temperature"===a||"°C"===o||"°F"===o;case"moisture":return"moisture"===a||"humidity"===a&&"%"===o;case"illuminance":return"illuminance"===a||"lx"===o||"lm"===o;case"humidity":return"humidity"===a||"%"===o;case"conductivity":return"conductivity"===a||"µS/cm"===o||"mS/cm"===o;case"power_consumption":return"power"===a||"energy"===a||"W"===o||"kW"===o||"kWh"===o||"Wh"===o;default:return!1}})).map((([t,e])=>{var i;return{entity_id:t,name:(null===(i=e.attributes)||void 0===i?void 0:i.friendly_name)||t}}));return d.html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${t=>t.stopPropagation()}">
                    <div class="popup-title">${v.TranslationUtils.translateUI(this._hass,"replace_sensors")}</div>
                    ${s.map((t=>{const e=u(t.key),i=h[t.key];return i&&!this._popupData[`new_${t.key}_sensor`]&&(this._popupData[`new_${t.key}_sensor`]=i),d.html`
                            <div class="form-field">
                                <label>
                                    <ha-icon icon="${t.icon}"></ha-icon>
                                    ${t.label}
                                </label>
                                <select @change="${e=>this._popupData[`new_${t.key}_sensor`]=e.target.value}">
                                    <option value="">${v.TranslationUtils.translateUI(this._hass,"please_select")}</option>
                                    ${e.length>0?e.map((t=>d.html`
                                            <option value="${t.entity_id}" ?selected="${t.entity_id===i}">${t.name}</option>
                                        `)):d.html`<option value="" disabled>${v.TranslationUtils.translateUI(this._hass,"no_matching_sensors")}</option>`}
                                </select>
                            </div>
                        `}))}
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${v.TranslationUtils.translateUI(this._hass,"cancel")}</button>
                        <button @click="${this._handleReplaceSensors}">${v.TranslationUtils.translateUI(this._hass,"replace_sensors")}</button>
                    </div>
                </div>
            </div>
        `}_renderOptions(){var t,e,i,n,a;const o=this.config.option_elements;if(0===o.length)return d.html``;const s={attributes:{icon:"mdi:tune",expanded:null===(t=this._expanded)||void 0===t?void 0:t.attributes},timeline:{icon:"mdi:chart-timeline-variant",expanded:null===(e=this._expanded)||void 0===e?void 0:e.timeline},consumption:{icon:"mdi:chart-box-outline",expanded:null===(i=this._expanded)||void 0===i?void 0:i.consumption},history:{icon:"mdi:history",expanded:null===(n=this._expanded)||void 0===n?void 0:n.history},details:{icon:"mdi:information-outline",expanded:null===(a=this._expanded)||void 0===a?void 0:a.details}};return d.html`
            <div class="options-container">
                ${o.map((t=>{if(t in s){const e=s[t];return d.html`
                            <div class="options-section ${e.expanded?"expanded":""}" 
                                 @click="${e=>this._toggleExpand(e,t)}">
                                <ha-icon icon="${e.icon}"></ha-icon>
                            </div>
                        `}return""}))}
            </div>
        `}_renderTimeline(){var t;const e=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("timeline")?d.html`
                <div class="timeline-container">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-timeline>
                </div>
            `:(null===(t=this._expanded)||void 0===t?void 0:t.timeline)?d.html`
                <div class="expanded-content show" data-section="timeline">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-timeline>
                </div>
            `:d.html`<div class="expanded-content" data-section="timeline"></div>`}_renderConsumption(){var t;const e=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("consumption")?d.html`
                <div class="component-container">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-consumption>
                </div>
            `:(null===(t=this._expanded)||void 0===t?void 0:t.consumption)?d.html`
                <div class="expanded-content show" data-section="consumption">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${e}
                    ></flower-consumption>
                </div>
            `:d.html`<div class="expanded-content" data-section="consumption"></div>`}_renderHistory(){var t;const e=this.selectedPlantEntity||this.config.entity;return this.config.show_elements.includes("history")?d.html`
                <div class="component-container">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${e}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `:(null===(t=this._expanded)||void 0===t?void 0:t.history)?d.html`
                <div class="expanded-content show" data-section="history">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${e}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `:d.html`<div class="expanded-content" data-section="history"></div>`}_renderDetails(){var t;return this.config.show_elements.includes("details")?d.html`
                <div class="plant-details">
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"strain")}</span>
                        <span class="value">${this.stateObj.attributes.variety||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"feminized")}</span>
                        <span class="value">${this.stateObj.attributes.feminized||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"effects")}</span>
                        <span class="value">${this.stateObj.attributes.effects||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"smell")}</span>
                        <span class="value">${this.stateObj.attributes.smell||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"taste")}</span>
                        <span class="value">${this.stateObj.attributes.taste||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"phenotype")}</span>
                        <span class="value">${this.stateObj.attributes.phenotype||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"hunger")}</span>
                        <span class="value">${this.stateObj.attributes.hunger||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"growth_stretch")}</span>
                        <span class="value">${this.stateObj.attributes.growth_stretch||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"flower_stretch")}</span>
                        <span class="value">${this.stateObj.attributes.flower_stretch||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"mold_resistance")}</span>
                        <span class="value">${this.stateObj.attributes.mold_resistance||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"difficulty")}</span>
                        <span class="value">${this.stateObj.attributes.difficulty||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"yield")}</span>
                        <span class="value">${this.stateObj.attributes.yield||"-"}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"website")}</span>
                        ${this.stateObj.attributes.website?d.html`
                            <a href="${this.stateObj.attributes.website}" target="_blank" class="value link">${this.stateObj.attributes.website}</a>
                        `:d.html`<span class="value">-</span>`}
                    </div>
                    <div class="detail-item">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"notes")}</span>
                        <span class="value">${this.stateObj.attributes.notes||"-"}</span>
                    </div>
                    <div class="detail-item full-width">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"infotext1")}</span>
                        <span class="value">${this.stateObj.attributes.infotext1||"-"}</span>
                    </div>
                    <div class="detail-item full-width">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"infotext2")}</span>
                        <span class="value">${this.stateObj.attributes.infotext2||"-"}</span>
                    </div>
                    <div class="detail-item full-width">
                        <span class="label">${v.TranslationUtils.translateField(this._hass,"lineage")}</span>
                        <span class="value">${this.stateObj.attributes.lineage||"-"}</span>
                    </div>
                </div>
            `:(null===(t=this._expanded)||void 0===t?void 0:t.details)?d.html`
                <div class="expanded-content show" data-section="details">
                    <div class="plant-details">
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"strain")}</span>
                            <span class="value">${this.stateObj.attributes.variety||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"feminized")}</span>
                            <span class="value">${this.stateObj.attributes.feminized||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"effects")}</span>
                            <span class="value">${this.stateObj.attributes.effects||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"smell")}</span>
                            <span class="value">${this.stateObj.attributes.smell||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"taste")}</span>
                            <span class="value">${this.stateObj.attributes.taste||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"phenotype")}</span>
                            <span class="value">${this.stateObj.attributes.phenotype||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"hunger")}</span>
                            <span class="value">${this.stateObj.attributes.hunger||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"growth_stretch")}</span>
                            <span class="value">${this.stateObj.attributes.growth_stretch||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"flower_stretch")}</span>
                            <span class="value">${this.stateObj.attributes.flower_stretch||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"mold_resistance")}</span>
                            <span class="value">${this.stateObj.attributes.mold_resistance||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"difficulty")}</span>
                            <span class="value">${this.stateObj.attributes.difficulty||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"yield")}</span>
                            <span class="value">${this.stateObj.attributes.yield||"-"}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"website")}</span>
                            ${this.stateObj.attributes.website?d.html`
                                <a href="${this.stateObj.attributes.website}" target="_blank" class="value link">${this.stateObj.attributes.website}</a>
                            `:d.html`<span class="value">-</span>`}
                        </div>
                        <div class="detail-item">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"notes")}</span>
                            <span class="value">${this.stateObj.attributes.notes||"-"}</span>
                        </div>
                        <div class="detail-item full-width">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"infotext1")}</span>
                            <span class="value">${this.stateObj.attributes.infotext1||"-"}</span>
                        </div>
                        <div class="detail-item full-width">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"infotext2")}</span>
                            <span class="value">${this.stateObj.attributes.infotext2||"-"}</span>
                        </div>
                        <div class="detail-item full-width">
                            <span class="label">${v.TranslationUtils.translateField(this._hass,"lineage")}</span>
                            <span class="value">${this.stateObj.attributes.lineage||"-"}</span>
                        </div>
                    </div>
                </div>
            `:d.html`<div class="expanded-content" data-section="details"></div>`}_renderAttributes(){var t;return this.config.show_elements.includes("attributes")?d.html`${(0,m.renderAttributes)(this)}`:(null===(t=this._expanded)||void 0===t?void 0:t.attributes)?d.html`
                <div class="expanded-content show" data-section="attributes">
                    ${(0,m.renderAttributes)(this)}
                </div>
            `:d.html`<div class="expanded-content" data-section="attributes"></div>`}render(){if(!this.config||!this._hass)return d.html``;if(!this.stateObj&&!this._listenToSelector){const t=v.TranslationUtils.translateUI(this._hass,"entity_unavailable"),e=v.TranslationUtils.translateUI(this._hass,"no_entity_configured");return d.html`
                <hui-warning>
                ${t}: ${this.config.entity||e}
                </hui-warning>
              `}if(!this.stateObj&&this._listenToSelector)return d.html``;const t=this.config.show_elements,e="header"===t[0]&&this.config.display_type!==u.DisplayType.Compact?"card-margin-top":"",i=t.map((t=>this._renderElement(t))),n=this._expandedOrder.filter((e=>!t.includes(e)&&this._expanded[e])).map((t=>{switch(t){case"attributes":return this._renderAttributes();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return d.html``}})),a=this.config.option_elements.filter((e=>!t.includes(e)&&!this._expandedOrder.includes(e))).map((t=>{switch(t){case"attributes":return this._renderAttributes();case"timeline":return this._renderTimeline();case"consumption":return this._renderConsumption();case"history":return this._renderHistory();case"details":return this._renderDetails();default:return d.html``}}));return d.html`
            <ha-card class="${e}">
                ${i}
                ${n}
                ${a}
            </ha-card>
            ${this._showGallery?d.html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${this.stateObj.entity_id}
                    .images=${this._imageUrls}
                    .onClose=${()=>this._showGallery=!1}
                ></flower-gallery>
            `:""}
        `}_toggleExpand(t,e){t.stopPropagation();const i=Object.assign({},this._expanded),n=!i[e];i[e]=n;let a=[...this._expandedOrder];n?a.includes(e)||a.push(e):a=a.filter((t=>t!==e)),this._expanded=i,this._expandedOrder=a,this.requestUpdate()}get_data(t){return l(this,void 0,void 0,(function*(){var e,i;try{const n=this.selectedPlantEntity||(null===(e=this.config)||void 0===e?void 0:e.entity);if(this.plantinfo=yield t.callWS({type:"plant/get_info",entity_id:n}),null===(i=this.stateObj)||void 0===i?void 0:i.attributes.images){const t=this.stateObj.attributes.download_path||"/local/images/plants/",e=[...this.stateObj.attributes.images].sort(((t,e)=>{var i,n;const a=(null===(i=t.match(/_(\d{8}_\d{6})/))||void 0===i?void 0:i[1])||"",o=(null===(n=e.match(/_(\d{8}_\d{6})/))||void 0===n?void 0:n[1])||"";return a.localeCompare(o)})),i=yield this._filterImagesAfterFirstPhase(e);this._imageUrls=i.map((e=>`${t}${e}`)),this.stateObj.attributes.entity_picture&&this._imageUrls.unshift(this.stateObj.attributes.entity_picture),this._currentImageIndex=0,this._nextImageIndex=this._imageUrls.length>1?1:0,this._isFading=!1,this._startImageRotation()}else this._imageUrls=[],this._currentImageIndex=0,this._nextImageIndex=0,this._imageRotationInterval&&(clearInterval(this._imageRotationInterval),this._imageRotationInterval=void 0)}catch(t){this.plantinfo={result:{}},this._imageUrls=[],this._currentImageIndex=0,this._nextImageIndex=0}}))}getCardSize(){return 5}static get styles(){return h.style}_changeImage(){return l(this,void 0,void 0,(function*(){if(this._imageUrls.length<=1)return;this._nextImageIndex=(this._currentImageIndex+1)%this._imageUrls.length;const t=new Image;t.src=this._imageUrls[this._nextImageIndex],yield new Promise((e=>{t.onload=e,t.onerror=e})),this._isFading=!0,this.requestUpdate(),yield new Promise((t=>setTimeout(t,500))),this._currentImageIndex=this._nextImageIndex,this._isFading=!1,this.requestUpdate()}))}_startImageRotation(){this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this._imageUrls.length>1&&(this._imageRotationInterval=setInterval((()=>{this._changeImage()}),1e4))}_filterImagesAfterFirstPhase(t){return l(this,void 0,void 0,(function*(){var e,i,n,a,o;if(!(null===(a=null===(n=null===(i=null===(e=this.plantinfo)||void 0===e?void 0:e.result)||void 0===i?void 0:i.helpers)||void 0===n?void 0:n.growth_phase)||void 0===a?void 0:a.entity_id))return t;const s=this.plantinfo.result.helpers.growth_phase.entity_id,r=null===(o=this._hass)||void 0===o?void 0:o.states[s];if(!r)return t;const l=["seeds","germination","rooting","growing","flowering","harvested","removed"];let d=null;for(const t of l){const e=r.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){d=new Date(e);break}}return d?t.filter((t=>{const e=t.match(/_(\d{8}_\d{6})/);if(!e)return!0;const i=e[1],n=i.slice(0,4),a=i.slice(4,6),o=i.slice(6,8),s=i.slice(9,11),r=i.slice(11,13);return new Date(`${n}-${a}-${o}T${s}:${r}:00`)>=d})):t}))}};s([(0,c.property)()],f.prototype,"_hass",void 0),s([(0,c.property)()],f.prototype,"config",void 0),s([(0,c.state)()],f.prototype,"_expanded",void 0),s([(0,c.state)()],f.prototype,"_expandedOrder",void 0),s([(0,c.state)()],f.prototype,"_showGallery",void 0),s([(0,c.state)()],f.prototype,"_currentImageIndex",void 0),s([(0,c.state)()],f.prototype,"_nextImageIndex",void 0),s([(0,c.state)()],f.prototype,"_isFading",void 0),s([(0,c.state)()],f.prototype,"_activePopup",void 0),s([(0,c.state)()],f.prototype,"_showFlyoutMenu",void 0),s([(0,c.state)()],f.prototype,"_popupData",void 0),s([(0,c.state)()],f.prototype,"_showPlantDropdown",void 0),s([(0,c.state)()],f.prototype,"selectedPlantEntity",void 0),s([(0,c.state)()],f.prototype,"_listenToSelector",void 0),s([(0,c.state)()],f.prototype,"_selectedEntities",void 0),f=s([(0,c.customElement)(g.CARD_NAME)],f),e.default=f},2489:function(t,e,i){var n,a=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i);var a=Object.getOwnPropertyDescriptor(e,i);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,a)}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},r=this&&this.__importStar||(n=function(t){return n=Object.getOwnPropertyNames||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[e.length]=i);return e},n(t)},function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i=n(t),s=0;s<i.length;s++)"default"!==i[s]&&a(e,t,i[s]);return o(e,t),e}),l=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const d=i(4437),c=i(2924),h=i(6800),u=i(1772),p=r(i(8330)),m=i(9442),g=i(6754),_=i(8265),v=i(3048),f=i(8063),y=i(8358),b=i(7361),w=i(2413);i(9242),i(4507),i(1894),console.info(`%c BROKKOLI-LIST-CARD %c ${p.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"brokkoli-list-card",name:"Brokkoli List Card",preview:!0,description:"Eine tabellarische Übersicht aller Pflanzen"});let x=class extends d.LitElement{constructor(){super(...arguments),this._showPlantDialog=!1,this._dialogPosition={x:0,y:0},this._lastSelectedEntityId=null,this.plantEntities=[],this.EDITABLE_PLANT_ATTRIBUTES=g.ConfigUtils.EDITABLE_PLANT_ATTRIBUTES}static getStubConfig(){return g.ConfigUtils.getDefaultConfig()}static getConfigElement(){return l(this,void 0,void 0,(function*(){return document.createElement("brokkoli-list-card-editor")}))}setConfig(t){this.config=Object.assign(Object.assign({},g.ConfigUtils.getDefaultConfig(this._hass)),t),this.stateManager&&this.stateManager.updateConfig(this.config)}set hass(t){this._hass=t,!this.stateManager&&t&&(this.stateManager=new b.StateManager(t,this.config,(()=>this.requestUpdate()))),t&&w.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()})),this.plantEntities.length?this._refreshExistingEntities():this.updatePlantEntities()}_refreshExistingEntities(){return l(this,void 0,void 0,(function*(){if(this._hass){for(let t=0;t<this.plantEntities.length;t++){const e=this.plantEntities[t],i=this._hass.states[e.entity_id],n=yield f.PlantEntityUtils.getPlantInfo(this._hass,e.entity_id),a=this._buildSensorMap(n);this.plantEntities[t]=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:a,_apiInfo:n})})}this.requestUpdate()}}))}_buildSensorMap(t){if(!t)return{};const e={};for(const i in t)t[i]&&"object"==typeof t[i]&&t[i].sensor&&(e[{moisture:"soil_moisture",humidity:"air_humidity",ph:"ph"}[i]||i]=t[i].sensor);if(t.diagnostic_sensors)for(const i in t.diagnostic_sensors)t.diagnostic_sensors[i]&&t.diagnostic_sensors[i].entity_id&&(e[{moisture:"soil_moisture",humidity:"air_humidity",total_integral:"total_ppfd_mol_integral",total_water:"total_water_consumption",total_fertilizer:"total_fertilizer_consumption"}[i]||i]=t.diagnostic_sensors[i].entity_id);if(t.helpers)for(const i in t.helpers)t.helpers[i]&&t.helpers[i].entity_id&&(e[i]=t.helpers[i].entity_id);return e}updatePlantEntities(){return l(this,void 0,void 0,(function*(){if(!this._hass)return;const t=f.PlantEntityUtils.getPlantEntities(this._hass);f.PlantEntityUtils.initPlantDataLoading(this._hass,t.map((t=>t.entity_id)));const e=[];for(const i of t)try{const t=yield f.PlantEntityUtils.getPlantInfo(this._hass,i.entity_id),n=this._buildSensorMap(t),a=Object.assign(Object.assign({},i),{attributes:Object.assign(Object.assign({},i.attributes),{_sensorMap:n,_apiInfo:t})});e.push(a)}catch(t){console.error(`[FLOWER-LIST] Fehler beim Anreichern von ${i.entity_id}:`,t),e.push(i)}this.plantEntities=e,this.requestUpdate()}))}getVisibleColumns(){return g.ConfigUtils.getVisibleColumns(this.config,this._hass)}_handleAddPlant(){this._showPlantDialog=!0,this._dialogPosition={x:50,y:50},this.requestUpdate()}_handleDialogClosed(){this._showPlantDialog=!1,this.requestUpdate(),this.updatePlantEntities()}connectedCallback(){super.connectedCallback(),this.addEventListener("flower-image-click",this._handleFlowerImageClick.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("flower-image-click",this._handleFlowerImageClick.bind(this)),f.PlantEntityUtils.clearAllTimeouts()}_handleFlowerImageClick(t){if(!this.stateManager)return;const e=t.detail.entityId;e&&this.stateManager.handleGalleryOpen(e)}_handleRowClick(t,e){var i;if(t.target.closest(".clickable"))return;if(!this.stateManager)return;if(this.stateManager.getState().multiSelectMode)return;const n=this._lastSelectedEntityId===e.entity_id;if(this._lastSelectedEntityId=n?null:e.entity_id,null===(i=this.config)||void 0===i?void 0:i.identifier){const t=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:this._lastSelectedEntityId}});window.dispatchEvent(t)}}render(){var t,e,i,n,a,o;if(!this._hass||!this.stateManager)return d.html``;const s=this.stateManager.getState(),r=v.SortUtils.getSortedPlants(m.FilterUtils.getFilteredPlants(this._hass,this.plantEntities,s.filterState,s.searchQuery,this.EDITABLE_PLANT_ATTRIBUTES),s.sortColumn,s.sortDirection,this._hass),l=this.getVisibleColumns(),c=!1!==(null===(e=null===(t=this.config)||void 0===t?void 0:t.add_plant)||void 0===e?void 0:e.enabled),h=(null===(n=null===(i=this.config)||void 0===i?void 0:i.add_plant)||void 0===n?void 0:n.position)||"bottom";return d.html`
            <div class="card-container">
                <ha-card>
                    ${_.BrokkoliListComponents.renderHeader(null===(a=this.config)||void 0===a?void 0:a.title,this._hass)}
                    
                    ${_.BrokkoliListComponents.renderToolbar(this.config,s.searchQuery,s.filterMode,s.multiSelectMode,(()=>this.stateManager.toggleFilterMode()),(()=>this.stateManager.toggleMultiSelect()),(t=>this.stateManager.handleSearch(t)),(()=>this.stateManager.clearSearch()),this._hass)}

                    ${s.filterMode?_.BrokkoliListComponents.renderFilterSidebar(l,s.filterState,(t=>this.stateManager.toggleEntityType(t)),((t,e)=>this.stateManager.toggleFilter(t,e)),this._hass,this.plantEntities):""}

                    <div class="table-container${s.filterMode?" filtered":""}">
                        <table>
                            ${_.BrokkoliListComponents.renderTableHeader(l,s.multiSelectMode,s.sortColumn,s.sortDirection,(t=>this.stateManager.handleSort(t)))}
                            <tbody>
                                ${c&&"top"===h?_.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                                ${r.map((t=>_.BrokkoliListComponents.renderTableRow(t,l,s.multiSelectMode,s.selectedPlants,((t,e)=>this.stateManager.togglePlantSelection(t,e)),((t,e,i)=>this.stateManager.handleCellClick(t,e,i,this.dispatchEvent.bind(this))),((t,e)=>this._handleRowClick(t,e)),(t=>this.stateManager.getCursorStyle(t)),((t,e)=>y.CellRenderer.renderCell({hass:this._hass,plant:t,columnId:e,editingCell:s.editingCell,onCellClick:i=>this.stateManager.handleCellClick(i,t,e,this.dispatchEvent.bind(this)),onInputUpdate:(i,n)=>this.stateManager.handleInputUpdate(i,t,e,n),onRowClick:e=>this._handleRowClick(e,t)})))))}
                                ${c&&"bottom"===h?_.BrokkoliListComponents.renderAddPlantButton((()=>this._handleAddPlant()),this._hass):""}
                            </tbody>
                        </table>
                    </div>
                </ha-card>
            </div>
            
            ${this._showPlantDialog?d.html`
                <plant-create-dialog
                    .hass=${this._hass}
                    .position=${this._dialogPosition}
                    .areaId=${(null===(o=this.config)||void 0===o?void 0:o.area)||""}
                    @dialog-closed=${this._handleDialogClosed}
                ></plant-create-dialog>
            `:""}

            ${s.showGallery?d.html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${s.galleryEntityId||""}
                    .images=${s.galleryImages}
                    .onClose=${()=>this.stateManager.closeGallery()}
                ></flower-gallery>
            `:""}
        `}getCardSize(){return 1+Math.ceil(this.plantEntities.length/2)}static get styles(){return[h.style,u.flowerListStyle]}};s([(0,c.property)()],x.prototype,"_hass",void 0),s([(0,c.property)()],x.prototype,"config",void 0),s([(0,c.state)()],x.prototype,"_showPlantDialog",void 0),s([(0,c.state)()],x.prototype,"_dialogPosition",void 0),s([(0,c.state)()],x.prototype,"_lastSelectedEntityId",void 0),x=s([(0,c.customElement)("brokkoli-list-card")],x),e.default=x},5419:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME=e.SENSOR_ASSIGNMENT_CARD_NAME=void 0;const o=i(4437),s=i(2924);i(9961),i(1536);const r=i(2413);e.SENSOR_ASSIGNMENT_CARD_NAME="brokkoli-sensor-assignment-card",e.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME="brokkoli-sensor-assignment-card-editor",window.customCards=window.customCards||[],window.customCards.push({type:e.SENSOR_ASSIGNMENT_CARD_NAME,name:"Brokkoli Sensor-Zuweisung",preview:!0,description:"Sensoren per Drag & Drop Pflanzen zuweisen"});let l=class extends o.LitElement{setConfig(t){this.config=Object.assign({},t)}set hass(t){this._hass=t,r.TranslationUtils.initializeTranslations(t).then((()=>{this.requestUpdate()}))}static getConfigElement(){return a(this,void 0,void 0,(function*(){return document.createElement(e.SENSOR_ASSIGNMENT_CARD_EDITOR_NAME)}))}static getStubConfig(){return{type:`custom:${e.SENSOR_ASSIGNMENT_CARD_NAME}`,title:"Sensor-Zuweisung"}}render(){return this.config&&this._hass?o.html`
      <ha-card>
        ${this.config.title?o.html`<h1 class="card-header">${this.config.title}</h1>`:""}
        <div class="card-content no-padding">
          <sensor-assignment .hass=${this._hass}></sensor-assignment>
        </div>
      </ha-card>
    `:o.html``}getCardSize(){return 4}static get styles(){return o.css`
      .no-padding {
        padding: 0 !important;
      }
    `}};n([(0,s.property)({attribute:!1})],l.prototype,"_hass",void 0),n([(0,s.property)()],l.prototype,"config",void 0),l=n([(0,s.customElement)(e.SENSOR_ASSIGNMENT_CARD_NAME)],l),e.default=l},7814:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliAreaLegend=void 0;const a=i(4437),o=i(2924),s=i(1145),r=i(8621),l=i(2413),d=["temperature","moisture","conductivity","dli","health","humidity","illuminance","water_consumption","fertilizer_consumption","power_consumption"];let c=class extends a.LitElement{constructor(){super(...arguments),this.initialShowRings=[],this.initialShowLabels=[],this._activeTab="rings",this._selectedRings=[],this._selectedLabels=[],this._heatmapColor="#ff6666",this._heatmapSecondaryColor="#ffffff",this._heatmapOpacity=.8,this._isDraggingOpacity=!1,this._userChangedSettings=!1}firstUpdated(){this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity}updated(t){super.updated(t),(t.has("initialShowRings")||t.has("initialShowLabels")||t.has("initialHeatmap")||t.has("initialHeatmapColor")||t.has("initialHeatmapSecondaryColor")||t.has("initialHeatmapOpacity"))&&(this._userChangedSettings||(this._selectedRings=[...this.initialShowRings],this._selectedLabels=[...this.initialShowLabels],this._heatmapSensor=this.initialHeatmap,this._heatmapColor=this._fixColorValue(this.initialHeatmapColor)||this._heatmapColor,this._heatmapSecondaryColor=this._fixColorValue(this.initialHeatmapSecondaryColor)||this._heatmapSecondaryColor,this._heatmapOpacity=void 0!==this.initialHeatmapOpacity?this.initialHeatmapOpacity:this._heatmapOpacity))}_fixColorValue(t){if(t)return t.startsWith("#")?t:{red:"#ff0000",blue:"#0000ff"}[t.toLowerCase()]||t}_getIconForSensor(t){var e,i,n,a,o;return(null===(e=this.plantInfo)||void 0===e?void 0:e.result)&&(null===(i=this.plantInfo.result[t])||void 0===i?void 0:i.icon)?this.plantInfo.result[t].icon:"health"===t&&(null===(o=null===(a=null===(n=this.plantInfo)||void 0===n?void 0:n.result)||void 0===a?void 0:a.helpers)||void 0===o?void 0:o.health)?"mdi:heart-pulse":{temperature:"mdi:thermometer",moisture:"mdi:water-percent",conductivity:"mdi:flash",dli:"mdi:white-balance-sunny",health:"mdi:heart-pulse",humidity:"mdi:water",illuminance:"mdi:brightness-5",water_consumption:"mdi:cup-water",fertilizer_consumption:"mdi:fertilizer",power_consumption:"mdi:flash-circle",ph:"mdi:ph"}[t]||"mdi:help-circle-outline"}_stopEvent(t){t.stopPropagation()}_getAvailableSensors(){return this.hass?d.map((t=>({id:t,name:l.TranslationUtils.translateSensor(this.hass,t)}))):[]}_cycleTab(t){t.stopPropagation(),"rings"===this._activeTab?this._activeTab="labels":"labels"===this._activeTab?this._activeTab="heatmap":this._activeTab="rings",this.requestUpdate()}_handleRingChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._selectedRings.includes(e)?this._selectedRings=this._selectedRings.filter((t=>t!==e)):this._selectedRings.push(e),this._dispatchSettingsChanged()}_handleLabelChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._selectedLabels.includes(e)?this._selectedLabels=this._selectedLabels.filter((t=>t!==e)):this._selectedLabels.push(e),this._dispatchSettingsChanged()}_handleHeatmapSensorChange(t,e){t.stopPropagation(),this._userChangedSettings=!0,this._heatmapSensor===e?this._heatmapSensor=null:this._heatmapSensor=e,this._dispatchSettingsChanged()}_handleColorChange(t,e){t.stopPropagation(),this._userChangedSettings=!0;const i=t.target;e?this._heatmapColor=i.value:this._heatmapSecondaryColor=i.value,this._dispatchSettingsChanged()}_handleOpacityDragStart(t){t.stopPropagation(),t.preventDefault(),this._isDraggingOpacity=!0,this._updateOpacityFromMouseEvent(t);const e=t=>this._updateOpacityFromMouseEvent(t),i=()=>{this._isDraggingOpacity=!1,window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}_updateOpacityFromMouseEvent(t){var e;if(!this._isDraggingOpacity)return;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".gradient-preview");if(!i)return;const n=i.getBoundingClientRect(),a=t.clientX-n.left,o=n.width,s=Math.max(0,Math.min(1,a/o));this._heatmapOpacity=s,this._userChangedSettings=!0,this._dispatchSettingsChanged()}_dispatchSettingsChanged(){const t={activeTab:this._activeTab,selectedRings:[...this._selectedRings],selectedLabels:[...this._selectedLabels],heatmapSensor:this._heatmapSensor,heatmapColor:this._heatmapColor||"#ff6666",heatmapSecondaryColor:this._heatmapSecondaryColor||"#ffffff",heatmapOpacity:void 0!==this._heatmapOpacity?this._heatmapOpacity:.8};this.dispatchEvent(new CustomEvent("settings-changed",{detail:t,bubbles:!0,composed:!0}))}_renderModeToggle(){if(!this.hass)return a.html``;let t,e;switch(this._activeTab){case"rings":t="mdi:circle-outline",e=l.TranslationUtils.translateUI(this.hass,"legend_rings_mode_active");break;case"labels":t="mdi:label-outline",e=l.TranslationUtils.translateUI(this.hass,"legend_labels_mode_active");break;case"heatmap":t="mdi:gradient",e=l.TranslationUtils.translateUI(this.hass,"legend_heatmap_mode_active")}return a.html`
      <button 
        class="mode-toggle" 
        title="${e}"
        @click=${this._cycleTab}
      >
        <ha-icon icon="${t}"></ha-icon>
      </button>
    `}_renderRingOptions(){if("rings"!==this._activeTab)return a.html``;const t=this._getAvailableSensors();return a.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._selectedRings.includes(t.id);return a.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleRingChange(e,t.id)}
              style=${(0,s.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,s.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderLabelOptions(){if("labels"!==this._activeTab)return a.html``;const t=this._getAvailableSensors();return a.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._selectedLabels.includes(t.id);return a.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleLabelChange(e,t.id)}
              style=${(0,s.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,s.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
              ></ha-icon>
            </div>
          `}))}
      </div>
    `}_renderHeatmapOptions(){if("heatmap"!==this._activeTab)return a.html``;const t=this._getAvailableSensors();return a.html`
      <div class="sensor-icons vertical" @click=${this._stopEvent}>
        ${t.map((t=>{const e=this._heatmapSensor===t.id;return a.html`
            <div 
              class="sensor-icon ${e?"selected":""}"
              title="${t.name}"
              @click=${e=>this._handleHeatmapSensorChange(e,t.id)}
              style=${(0,s.styleMap)({backgroundColor:e?`var(--sensor-ring-${t.id}-color, var(--primary-color))`:"var(--secondary-background-color, #f5f5f5)"})}
            >
              <ha-icon 
                icon="${this._getIconForSensor(t.id)}"
                style=${(0,s.styleMap)({color:e?"white":`var(--sensor-ring-${t.id}-color, var(--primary-color))`})}
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
              style=${(0,s.styleMap)({background:`linear-gradient(to right, ${this._heatmapColor||"#ff6666"}, ${this._heatmapSecondaryColor||"#ffffff"})`,cursor:"ew-resize"})}
              @mousedown=${this._handleOpacityDragStart}
              title="${this.hass?l.TranslationUtils.translateUI(this.hass,"legend_opacity"):"Opacity"}"
            ></div>
          </div>
        </div>
      </div>
    `}render(){return a.html`
      <div class="legend-container" @click=${this._stopEvent}>
        ${this._renderModeToggle()}
        
        <div class="content-container" @click=${this._stopEvent}>
          ${this._renderRingOptions()}
          ${this._renderLabelOptions()}
          ${this._renderHeatmapOptions()}
        </div>
      </div>
    `}static get styles(){return r.legendStyles}};e.BrokkoliAreaLegend=c,n([(0,o.property)({attribute:!1})],c.prototype,"hass",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialShowRings",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialShowLabels",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialHeatmap",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialHeatmapColor",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialHeatmapSecondaryColor",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"initialHeatmapOpacity",void 0),n([(0,o.property)({attribute:!1})],c.prototype,"plantInfo",void 0),n([(0,o.state)()],c.prototype,"_activeTab",void 0),n([(0,o.state)()],c.prototype,"_selectedRings",void 0),n([(0,o.state)()],c.prototype,"_selectedLabels",void 0),n([(0,o.state)()],c.prototype,"_heatmapSensor",void 0),n([(0,o.state)()],c.prototype,"_heatmapColor",void 0),n([(0,o.state)()],c.prototype,"_heatmapSecondaryColor",void 0),n([(0,o.state)()],c.prototype,"_heatmapOpacity",void 0),n([(0,o.state)()],c.prototype,"_isDraggingOpacity",void 0),e.BrokkoliAreaLegend=c=n([(0,o.customElement)("brokkoli-area-legend")],c)},9446:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliArea=void 0;const o=i(4437),s=i(2924),r=i(1145),l=i(3073);i(9242),i(896),i(7814);const d=i(8063);let c=class extends o.LitElement{constructor(){super(...arguments),this.entities=[],this.showRings=[],this.showLabels=[],this.showLegend=!0,this._userSettings={},this._positions={},this._draggingMember=null,this._hoveringMember=null,this._dragOffset={x:0,y:0},this._containerSize={width:0,height:0},this._cellSize=60,this._targetPosition=null,this._isSnapping=!1,this._currentDragPosition=null,this._originalPosition=null,this._wasElementSelected=!1,this._selectedMembers=new Set,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._showSelectionHint=!1,this._justFinishedMultiDrag=!1,this._cycleGroups=[],this._bounds={minX:0,minY:0,maxX:0,maxY:0},this._showAddPlantIndicator=null,this._showAddPlantDialog=!1,this._showPlantFlyout=!1,this._flyoutPosition={x:0,y:0},this._newPlantPosition={x:0,y:0},this._debugMode=!1,this._highlightCell=null,this._plantInfoCache={},this._plantRetryTimeouts={},this._plantLastLoaded={},this._updateTimeout=0,this._boundHandleDrag=this._handleDrag.bind(this),this._boundEndDrag=this._endDrag.bind(this),this._handleResize=()=>{const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._calculateCellSize(),this.requestUpdate()},this._handleGlobalClick=t=>{!t.composedPath().some((t=>t===this))&&!this._isDraggingSelection&&this._showAddPlantIndicator&&(this._showAddPlantIndicator=null,this.requestUpdate())},this._handlePlantCreated=t=>a(this,void 0,void 0,(function*(){if(!this.hass)return;const{entity_id:e,position:i}=t.detail;this._positions[e]=i,this._calculateBounds(),this._normalizePositions();const n=Object.entries(this._positions).map((([t,e])=>this._savePosition(t,e)));yield Promise.all(n),this._loadPositions()})),this._handleNewPlantRequested=t=>{const{position:e}=t.detail;this._newPlantPosition=e,this._showPlantFlyout=!1,this._showAddPlantDialog=!0,this.requestUpdate()},this._handleMovePlantRequested=t=>a(this,void 0,void 0,(function*(){if(!this.hass)return;const{plant:e,position:i}=t.detail;this._positions[e.entity_id]=i,this._calculateBounds(),this._normalizePositions();const n=Object.entries(this._positions).map((([t,e])=>this._savePosition(t,e)));if(yield Promise.all(n),this.areaId)try{const t=this.hass.entities[e.entity_id];if(null==t?void 0:t.device_id){const e=this.areaId.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[t.device_id],area_id:e})}}catch(t){console.error("Fehler beim Setzen der Area:",t)}this._showPlantFlyout=!1,this._loadPositions()})),this._handlePlantCloned=()=>{this._showPlantFlyout=!1,this.requestUpdate()},this._handleMenuClosed=()=>{this._showPlantFlyout=!1,this.requestUpdate()}}firstUpdated(){const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._loadPositions(),this._calculateCellSize(),window.addEventListener("resize",this._handleResize),this._resizeObserver=new ResizeObserver((()=>this._handleResize())),this._resizeObserver.observe(this),window.addEventListener("click",this._handleGlobalClick),this.addEventListener("plant-created",this._handlePlantCreated)}updated(t){super.updated(t),(t.has("hass")||t.has("entities"))&&this._loadPositions(),this._updateCycleGroups(),(t.has("entities")||t.has("hass")&&!t.get("hass"))&&this._loadAllPlantData(),t.has("_showAddPlantDialog")&&this._handleDialogStateChange()}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),window.removeEventListener("click",this._handleGlobalClick),null===(t=this._resizeObserver)||void 0===t||t.disconnect(),this._resizeObserver=void 0,this.removeEventListener("plant-created",this._handlePlantCreated),this._updateTimeout&&(clearTimeout(this._updateTimeout),this._updateTimeout=0)}_findLocationEntity(t){var e,i,n;if(!this.hass)return null;const a=null===(e=this.hass.entities)||void 0===e?void 0:e[t],o=null==a?void 0:a.device_id;if(!o)return null;for(const t of Object.values(null!==(i=this.hass.entities)&&void 0!==i?i:{}))if(t.device_id===o&&t.entity_id.startsWith("text.")&&t.entity_id.endsWith("_location"))return null!==(n=this.hass.states[t.entity_id])&&void 0!==n?n:null;return null}_loadPositions(){if(!this.hass)return;const t=new Set,e=[];this.entities.forEach((i=>{const n=this._findLocationEntity(i);let a=!1;if(n&&n.state&&"unknown"!==n.state)try{const e=JSON.parse(n.state);if(e&&"number"==typeof e.x&&"number"==typeof e.y){const n={x:e.x,y:e.y};return this._positions[i]=n,t.add(`${n.x},${n.y}`),void(a=!0)}}catch(t){}this._positions[i]={x:0,y:0},a||e.push(i)})),e.length>0&&this._distributeUndefinedPositionEntities(e,t),this._identifyCycleGroups(),this._calculateBounds(),this._normalizePositions()}_distributeUndefinedPositionEntities(t,e){if(0===t.length)return;const i=[[1,0],[0,1],[-1,0],[0,-1]];let n=0,a=0,o=0,s=1,r=0,l=0;t.forEach((t=>{let d=!1;for(;!d;){const c=`${n},${a}`;e.has(c)?(n+=i[o][0],a+=i[o][1],r++,r===s&&(o=(o+1)%4,r=0,l++,2===l&&(s++,l=0))):(this._positions[t]={x:n,y:a},e.add(c),d=!0)}}))}_identifyCycleGroups(){if(!this.hass||!this.entities||0===this.entities.length)return void(this._cycleGroups=[]);const t={};this.entities.forEach((e=>{const i={entity_id:e},n=this._getEntityCycleName(i);n&&(t[n]||(t[n]=[]),t[n].push(e))})),this._cycleGroups=Object.entries(t).filter((([,t])=>t.length>=2)).map((([t,e])=>({name:t,color:this._getColorForCycle(t),members:e,positions:e.map((t=>this._positions[t])).filter(Boolean)})))}_calculateBounds(){if(0===Object.keys(this._positions).length)return this._bounds={minX:0,minY:0,maxX:0,maxY:0},!1;let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER;[...Object.values(this._positions),...this._targetPosition?[this._targetPosition]:[],...Object.values(this._isMultiDragging?this._targetPositions:{})].forEach((a=>{t=Math.min(t,a.x),e=Math.min(e,a.y),i=Math.max(i,a.x),n=Math.max(n,a.y)}));const a=Object.assign({},this._bounds);this._bounds={minX:t,minY:e,maxX:i,maxY:n};const o=JSON.stringify(a)!==JSON.stringify(this._bounds);return o&&this._calculateCellSize(),o}_calculateCellSize(){const{minX:t,minY:e,maxX:i,maxY:n}=this._bounds,{width:a,height:o}=this._containerSize,s=i-t+2,r=n-e+2+.5;this._cellSize=Math.min(a/s,o/r)}_gridToPixel(t,e){const{minX:i,minY:n}=this._bounds,{offsetX:a,offsetY:o}=this._getGridOffsets();return{x:a+(t-i)*this._cellSize,y:o+(e-n)*this._cellSize}}_pixelToGrid(t,e){const{minX:i,minY:n}=this._bounds,{offsetX:a,offsetY:o}=this._getGridOffsets();return{x:Math.floor((t-a)/this._cellSize)+i,y:Math.floor((e-o)/this._cellSize)+n}}_getGridOffsets(){const{minX:t,minY:e,maxX:i,maxY:n}=this._bounds,a=n-e+2,o=(i-t+2)*this._cellSize,s=a*this._cellSize;return{offsetX:(this._containerSize.width-o)/2+this._cellSize/2,offsetY:(this._containerSize.height-s)/2+this._cellSize/2}}_renderMembersWithLabels(){if(!this.hass)return[];const t=[...this.entities].sort(((t,e)=>{const i=this._positions[t]||{x:0,y:0},n=this._positions[e]||{x:0,y:0};return i.y!==n.y?i.y-n.y:n.x-i.x})),e=new Map,i=t.length;return t.forEach(((t,n)=>e.set(t,i-1-n+1))),t.map((t=>{var i,n,a;const s=this.hass.states[t];if(!s)return o.html``;const l=this._positions[t]||{x:0,y:0};let c;if(this._isMultiDragging&&this._selectedMembers.has(t)&&this._currentDragPosition)if(t===this._draggingMember)c=Object.assign({},this._currentDragPosition);else{const e=this._originalPositions[this._draggingMember],i=this._originalPositions[t],n=i.x-e.x,a=i.y-e.y;c={x:this._currentDragPosition.x+n*this._cellSize,y:this._currentDragPosition.y+a*this._cellSize}}else this._draggingMember===t&&this._currentDragPosition?c=Object.assign({},this._currentDragPosition):(c=this._gridToPixel(l.x,l.y),c.x+=this._cellSize/2,c.y+=this._cellSize/2);const h=s.attributes.friendly_name||t.split(".")[1],u=s.attributes.entity_picture||"",p=this._draggingMember===t||this._isMultiDragging&&this._selectedMembers.has(t),m=this._isSnapping&&(this._draggingMember===t||this._selectedMembers.has(t)),g=this._hoveringMember===t,_=this._selectedMembers.has(t);let v=e.get(t);p?v+=3:g?v+=2:_&&(v+=1);let f=null;const y=this._getHeatmapSensor();if(y&&t.startsWith("plant.")&&this._plantInfoCache[t]){const e=this._plantInfoCache[t];if(e&&e.result){const t=e.result[y],s=(null===(n=null===(i=e.result.helpers)||void 0===i?void 0:i.health)||void 0===n?void 0:n.entity_id)&&(null===(a=this.hass)||void 0===a?void 0:a.states[e.result.helpers.health.entity_id]);if("health"===y&&s){const t=Number(s.state),e=5,i=Math.min(100,Math.max(0,Math.round(t/e*100))),n=this._getHeatmapColor()||"rgb(148,202,83)",a=this._getHeatmapSecondaryColor()||"white",l=this._getHeatmapOpacity();f=o.html`
              <div class="heatmap-overlay" style=${(0,r.styleMap)({backgroundColor:`color-mix(in srgb, ${n} ${i}%, ${a})`,opacity:l})}></div>
            `}else if(t){const e=Number(t.current||0),i=Number(t.min||0),n=Number(t.max||100),a=Math.min(1,Math.max(0,(e-i)/(n-i))),s=Math.round(100*a),l=this._getHeatmapColor()||`var(--sensor-ring-${y}-color)`,d=this._getHeatmapSecondaryColor()||"white",c=this._getHeatmapOpacity();f=o.html`
              <div class="heatmap-overlay" style=${(0,r.styleMap)({backgroundColor:`color-mix(in srgb, ${l} ${s}%, ${d})`,opacity:c})}></div>
            `}else{const t=this._getHeatmapSecondaryColor()||"white",e=this._getHeatmapOpacity();f=o.html`
              <div class="heatmap-overlay" style=${(0,r.styleMap)({backgroundColor:t,opacity:e})}></div>
            `}}}let b="";t.startsWith("plant.")&&(this._plantInfoCache[t]&&this._plantInfoCache[t].result?b=this._renderPlantSensorRings(t):(b=this._renderDisabledRings(),this.hass&&d.PlantEntityUtils.getPlantInfo(this.hass,t).then((e=>{e&&(this._plantInfoCache[t]={result:e},this.requestUpdate())}))));const w=this._renderSensorLabels(t);return o.html`
        <div 
          class="member-wrapper ${p?"dragging":""} ${g?"hovering":""} ${_?"selected":""}"
          style=${(0,r.styleMap)({left:`${c.x}px`,top:`${c.y}px`,"--cell-size":`${this._cellSize}px`,"--z-index":`${v}`,"z-index":`${v}`})}
          data-entity-id="${t}"
        >
          <div
            class="member ${p?"dragging":""} ${m?"snapping":""} ${_?"selected":""}"
            @mousedown=${e=>this._startDrag(e,t)}
            @touchstart=${e=>this._handleTouchStart(e,t)}
            @click=${e=>this._handleClick(e,t)}
            @mouseover=${()=>{this._hoveringMember=t}}
            @mouseleave=${()=>{this._hoveringMember=null}}
          >
            <div class="member-image" style=${(0,r.styleMap)({backgroundImage:u?`url(${u})`:"none"})}>
              ${f}
              ${b}
              ${u?"":o.html`<ha-icon icon="mdi:flower"></ha-icon>`}
            </div>
          </div>
          <div class="entity-name ${p?"dragging":""} ${g?"hovering":""} ${_?"selected":""}">
            ${h}
          </div>
          ${w}
        </div>
      `}))}_renderPlantSensorRings(t){var e,i;const n=this._plantInfoCache[t],a=this._getActiveRings();if(0===a.length)return o.html``;if(!n||!n.result)return this._renderDisabledRings();const s=n.result;let r=null;if(this.hass&&(null===(i=null===(e=s.helpers)||void 0===e?void 0:e.health)||void 0===i?void 0:i.entity_id)){const t=s.helpers.health.entity_id;this.hass.states[t]&&(r=this.hass.states[t])}const l=a.filter((t=>"health"===t?null!==r:s[t]&&void 0!==s[t].current));return 0===l.length?this._renderDisabledRings():o.html`
      <div class="sensor-rings">
        ${l.map(((t,e)=>{const i=e,n=l.length;if("health"===t&&r){const e={current:Number(r.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:r.entity_id,unit_of_measurement:""};return this._renderSensorRing(e,i,n,t)}return this._renderSensorRing(s[t],i,n,t)}))}
      </div>
    `}_renderSensorRing(t,e,i,n){if(!t||void 0===t.current)return this._renderDisabledRing(e);const a=Number(t.current),s=Number(t.min),r=Number(t.max),l=0===a,d=a<s&&!l,c=a>r;let h=0;h=isNaN(a)?0:"health"===n&&l?.05:l||d?.1:a===s?.02:c?1:Math.max(0,Math.min(1,(a-s)/(r-s)));const u=Math.max(0,this._cellSize/2-2-4*e),p=2*Math.PI*u,m=`${p*h} ${p*(1-h)}`,g=l||d||c||"health"===n&&a<=1.5?"sensor-pulsating":"";let _=null,v="";if("health"===n)if(a<=0)_="rgba(240,100,100,1)";else if(a<=.5)_="rgba(240,163,163,1)";else if(a<=2.5){const t=(a-.5)/2;_=`rgb(${240+15*t}, ${163+51*t}, ${163-163*t})`}else{const t=(a-2.5)/2.5;_=`rgb(${255-212*t}, ${214-20*t}, ${0+83*t})`}else v=`sensor-ring-${n}`;return o.html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${u}" 
          class="sensor-ring-bg"
        />
        <circle 
          class="sensor-ring-fg ${v} ${g}"
          cx="${this._cellSize/2}" 
          cy="${this._cellSize/2}" 
          r="${u}" 
          stroke-dasharray="${m}"
          stroke-dashoffset="0"
          transform="rotate(-90, ${this._cellSize/2}, ${this._cellSize/2})"
          style="${_?`stroke: ${_}`:""}"
        />
      </svg>
    `}_renderDisabledRing(t){const e=Math.max(0,this._cellSize/2-2-4*t);return o.html`
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
    `}_handleClick(t,e){this._draggingMember||this._isMultiDragging||(t.stopPropagation(),t.preventDefault(),this._justFinishedMultiDrag?this._justFinishedMultiDrag=!1:setTimeout((()=>{const t=this._selectedMembers.has(e);t?this._selectedMembers.delete(e):this._selectedMembers.add(e);let i=e;t&&this._selectedMembers.size>0&&(i=Array.from(this._selectedMembers)[this._selectedMembers.size-1]);const n=new CustomEvent("brokkoli-area-entity-selected",{bubbles:!0,composed:!0,detail:{entityId:this._selectedMembers.size>0?i:null,selectedEntities:Array.from(this._selectedMembers)}});this.dispatchEvent(n),this.requestUpdate()}),10))}_startDrag(t,e){if(this._showAddPlantDialog)return;if(this._justFinishedMultiDrag)return;let i,n;t.preventDefault(),this._highlightCell=null,this._showAddPlantIndicator=null,document.body.style.userSelect="none",this._wasElementSelected=this._selectedMembers.has(e),"touches"in t?(i=t.touches[0].clientX,n=t.touches[0].clientY):(i=t.clientX,n=t.clientY);const a=this.getBoundingClientRect();if(this._selectedMembers.has(e)&&this._selectedMembers.size>1){this._isMultiDragging=!0,this._draggingMember=e,this._isDraggingSelection=!0,this._selectedMembers.forEach((t=>{this._originalPositions[t]=Object.assign({},this._positions[t])}));const{x:t,y:o}=this._positions[e],s=this._gridToPixel(t,o);this._dragOffset={x:i-a.left-s.x-this._cellSize/2,y:n-a.top-s.y-this._cellSize/2}}else{this._draggingMember=e,this._originalPosition=Object.assign({},this._positions[e]);const{x:t,y:o}=this._positions[e],s=this._gridToPixel(t,o);this._dragOffset={x:i-a.left-s.x-this._cellSize/2,y:n-a.top-s.y-this._cellSize/2}}window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),window.addEventListener("mousemove",this._boundHandleDrag),window.addEventListener("touchmove",this._boundHandleDrag,{passive:!1}),window.addEventListener("mouseup",this._boundEndDrag),window.addEventListener("touchend",this._boundEndDrag)}_handleDrag(t){if(!this._draggingMember&&!this._isMultiDragging)return;t.preventDefault();const e="touches"in t?t.touches[0].clientX:t.clientX,i="touches"in t?t.touches[0].clientY:t.clientY,n=this.getBoundingClientRect(),a=e-n.left,o=i-n.top;this._currentDragPosition={x:a-this._dragOffset.x,y:o-this._dragOffset.y};const s=this._pixelToGrid(a,o);if(this._isMultiDragging){const t=Array.from(this._selectedMembers)[0],e=this._originalPositions[t],i=s.x-e.x,n=s.y-e.y,a=Object.assign({},this._targetPositions);this._targetPositions={};let o=!0;this._selectedMembers.forEach((t=>{const e=this._originalPositions[t],a={x:e.x+i,y:e.y+n};Object.entries(this._positions).some((([t,e])=>!this._selectedMembers.has(t)&&e.x===a.x&&e.y===a.y))&&(o=!1),this._targetPositions[t]=a})),o||(this._targetPositions={}),JSON.stringify(a)!==JSON.stringify(this._targetPositions)&&this._calculateBounds()}else if(this._draggingMember){const t=Object.entries(this._positions).some((([t,e])=>t!==this._draggingMember&&e.x===s.x&&e.y===s.y));this._targetPosition=t?null:Object.assign({},s),this._highlightCell=t?null:{x:s.x,y:s.y},t||(this._highlightCell=JSON.parse(JSON.stringify({x:s.x,y:s.y}))),this._calculateBounds(),this.requestUpdate()}}_endDrag(t){if(!this._draggingMember&&!this._isMultiDragging)return;const e=this._isMultiDragging;if(window.removeEventListener("mousemove",this._boundHandleDrag),window.removeEventListener("touchmove",this._boundHandleDrag),window.removeEventListener("mouseup",this._boundEndDrag),window.removeEventListener("touchend",this._boundEndDrag),document.body.style.userSelect="",null!==this._currentDragPosition&&(this._draggingMember&&this._originalPosition?Math.abs(this._currentDragPosition.x-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).x)>5||Math.abs(this._currentDragPosition.y-this._gridToPixel(this._originalPosition.x,this._originalPosition.y).y)>5:this._isMultiDragging))if(this._isMultiDragging&&this._draggingMember){this._justFinishedMultiDrag=!0,this._isSnapping=!0;const e="touches"in t?t.changedTouches[0].clientX:t.clientX,i="touches"in t?t.changedTouches[0].clientY:t.clientY,n=this.getBoundingClientRect(),a=this._pixelToGrid(e-n.left,i-n.top),o=this._originalPositions[this._draggingMember],s=a.x-o.x,r=a.y-o.y;let l=!0;this._selectedMembers.forEach((t=>{const e=this._originalPositions[t],i=e.x+s,n=e.y+r;Object.entries(this._positions).some((([t,e])=>!this._selectedMembers.has(t)&&e.x===i&&e.y===n))&&(l=!1)})),l?(this._selectedMembers.forEach((t=>{const e=this._originalPositions[t];this._positions[t]={x:e.x+s,y:e.y+r}})),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([t,e])=>{this._savePosition(t,e)})),this._identifyCycleGroups(),this._calculateCellSize()):Object.entries(this._originalPositions).forEach((([t,e])=>{this._positions[t]=Object.assign({},e)})),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)}else this._targetPosition&&this._draggingMember?(this._justFinishedMultiDrag=!0,this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._targetPosition),!this._wasElementSelected&&this._selectedMembers.size>1&&[...this._selectedMembers].filter((t=>t!==this._draggingMember)).forEach((t=>this._selectedMembers.delete(t))),this._calculateBounds(),this._normalizePositions(),Object.entries(this._positions).forEach((([t,e])=>{this._savePosition(t,e)})),this._identifyCycleGroups(),this._calculateCellSize(),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300)):this._draggingMember&&(this._isSnapping=!0,this._positions[this._draggingMember]=Object.assign({},this._originalPosition),setTimeout((()=>{this._isSnapping=!1,this.requestUpdate()}),300));this._draggingMember=null,this._isMultiDragging=!1,this._originalPositions={},this._targetPositions={},this._isDraggingSelection=!1,this._currentDragPosition=null,this._originalPosition=null,this._targetPosition=null,this._highlightCell=null,this._wasElementSelected=!1,this.requestUpdate(),(e||this._justFinishedMultiDrag)&&setTimeout((()=>{this._justFinishedMultiDrag=!1}),100),setTimeout((()=>{this._calculateBounds();const t=this.getBoundingClientRect();this._containerSize={width:t.width,height:t.height},this._calculateCellSize(),this.requestUpdate()}),50)}_normalizePositions(){if(0===Object.keys(this._positions).length)return;let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER;Object.values(this._positions).forEach((i=>{t=Math.min(t,i.x),e=Math.min(e,i.y)})),0===t&&0===e||(Object.keys(this._positions).forEach((i=>{this._positions[i]={x:this._positions[i].x-t,y:this._positions[i].y-e}})),this._bounds={minX:0,minY:0,maxX:this._bounds.maxX-t,maxY:this._bounds.maxY-e})}_savePosition(t,e){return a(this,void 0,void 0,(function*(){if(this.hass)try{yield this.hass.callService("plant","change_position",{entity_id:t,position_x:e.x,position_y:e.y})}catch(t){}}))}_renderCycleGroups(){var t;if(!(null===(t=this._cycleGroups)||void 0===t?void 0:t.length))return o.html``;const e=this._cycleGroups.filter((t=>t.positions.length>=2)).map((t=>{const e=`cycle-${t.name.replace(/\s+/g,"-")}`;return o.html`<div id="${e}" data-name="${t.name}" class="cycle-group-frame"></div>`}));return e.length?o.html`<div class="cycle-layer">${e}</div>`:o.html``}render(){if(!this.hass)return o.html``;let t;t=0===this.entities.length?4:this._bounds.maxY-this._bounds.minY+2;const e=t*this._cellSize+20,i=new Set;Object.entries(this._positions).forEach((([t,e])=>{t!==this._draggingMember&&i.add(`${e.x},${e.y}`)}));const n=[];let a,s,l,d;0===this.entities.length?(a=-1,s=2,l=-1,d=2):(a=this._bounds.minX-1,s=this._bounds.maxX+1,l=this._bounds.minY-1,d=this._bounds.maxY+1);for(let t=l;t<=d;t++)for(let e=a;e<=s;e++){const a=`${e},${t}`;if(!i.has(a)){const i=this._gridToPixel(e,t),a=null!==this._highlightCell&&this._highlightCell.x===e&&this._highlightCell.y===t,s=this._showAddPlantIndicator&&this._showAddPlantIndicator.x===e&&this._showAddPlantIndicator.y===t;n.push(o.html`
            <svg 
              class="cell ${a?"highlight":""} ${s?"add-indicator":""}" 
              style=${(0,r.styleMap)({left:`${i.x}px`,top:`${i.y}px`,width:`${this._cellSize}px`,height:`${this._cellSize}px`,transform:"translate(-50%, -50%)",zIndex:a||s?"5":"1"})}
            >
              <rect 
                x="0" 
                y="0" 
                width="${this._cellSize}" 
                height="${this._cellSize}" 
                fill="transparent" 
                stroke="${a?"var(--primary-color, #3498db)":s?"var(--accent-color, #f3a95e)":"var(--divider-color, #e0e0e0)"}" 
                stroke-width="${a||s?"2.5":"0.8"}" 
                stroke-opacity="${a||s?"1":"0.4"}"
                ${a?'stroke-dasharray="5,3"':""}
                rx="2" 
                ry="2"
              />
            </svg>
            ${s?o.html`
              <div 
                class="add-plant-button"
                style=${(0,r.styleMap)({position:"absolute",left:`${i.x}px`,top:`${i.y}px`,width:`${this._cellSize}px`,height:`${this._cellSize}px`,transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:1*this._cellSize+"px",color:"var(--accent-color, #f3a95e)",opacity:"0.1",zIndex:"50",cursor:"pointer"})}
                @click=${i=>this._handleCellClick(i,e,t)}
              >+</div>
            `:""}
          `)}}const c=this._cellSize/2,h=o.html`
      <div class="container" 
           style=${(0,r.styleMap)({height:`${e}px`})} 
           @click=${this._handleContainerClick}>
        <div class="grid-background" style=${(0,r.styleMap)({transform:`translate(${c}px, ${c}px)`})}>
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
    `}_updateCycleGroups(){setTimeout((()=>{this._cycleGroups.forEach((t=>{var e;if(t.positions.length<1)return;const i=`cycle-${t.name.replace(/\s+/g,"-")}`,n=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(i);if(!n)return;n.innerHTML="";const a=[];t.members.forEach((t=>{var e;const i=`.member-wrapper[data-entity-id="${t}"]`,n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(i);n&&a.push(n)})),a.length<1||this._identifyIslands(t.members).forEach((e=>{const i=a.filter((t=>{const i=t.getAttribute("data-entity-id");return i&&e.includes(i)}));if(i.length<1)return;const o=[];let s=Number.MAX_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,d=Number.MIN_SAFE_INTEGER;i.forEach((t=>{const e=t.getBoundingClientRect(),i=this.getBoundingClientRect(),n=e.left-i.left+e.width/2,a=e.top-i.top+e.height/2,c=Math.max(e.width,e.height)/2;o.push({center:{x:n,y:a},radius:c}),s=Math.min(s,n-c-20),r=Math.min(r,a-c-20),l=Math.max(l,n+c+20),d=Math.max(d,a+c+20)}));const c=document.createElement("div");c.className="cycle-group-frame",c.style.position="absolute",c.style.boxSizing="border-box",c.style.zIndex="2",c.style.pointerEvents="none",c.style.left=`${s}px`,c.style.top=`${r}px`,c.style.width=l-s+"px",c.style.height=d-r+"px",c.dataset.centerX=`${s+(l-s)/2}`,c.dataset.centerY=`${r+(d-r)/2}`,c.dataset.width=""+(l-s),c.dataset.height=""+(d-r),c.dataset.groupName=t.name,c.dataset.groupColor=t.color||"#3388ff";const h=document.createElementNS("http://www.w3.org/2000/svg","svg");let u;if(h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.style.position="absolute",h.style.top="0",h.style.left="0",h.style.overflow="visible",1===i.length){const t=o[0],e=t.radius+15;u=`M ${t.center.x-s-e} ${t.center.y-r} a ${e} ${e} 0 1 0 ${2*e} 0 a ${e} ${e} 0 1 0 ${2*-e} 0`}else u=this._createHullPath(o,s,r);const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",u),p.setAttribute("fill","none"),p.setAttribute("stroke",t.color||"#3388ff"),p.setAttribute("stroke-width","2"),p.setAttribute("stroke-linejoin","round"),p.setAttribute("stroke-linecap","round"),h.appendChild(p),c.appendChild(h),n.appendChild(c)}))})),this._createClickableCycleLabels()}),100)}_selectCycleMembers(t){const e=this._cycleGroups.find((e=>e.name===t));e?(e.members.every((t=>this._selectedMembers.has(t)))?e.members.forEach((t=>{this._selectedMembers.delete(t)})):(this._selectedMembers.clear(),e.members.forEach((t=>{this._selectedMembers.add(t)}))),this.requestUpdate()):console.warn(`Keine Cycle-Gruppe mit Namen ${t} gefunden`)}_createHullPath(t,e,i){if(t.length<2)return"";const n=[];t.forEach((t=>{const{center:a,radius:o}=t,s=o+20;for(let t=0;t<16;t++){const o=t/16*2*Math.PI;n.push({x:a.x-e+s*Math.cos(o),y:a.y-i+s*Math.sin(o)})}}));const a=this._computeConvexHull(n);if(a.length<3)return"";let o=`M ${a[0].x} ${a[0].y}`;for(let t=1;t<a.length;t++){const e=a[t-1],i=a[t],n=(e.x+i.x)/2,s=(e.y+i.y)/2;o+=` Q ${e.x} ${e.y}, ${n} ${s}`}const s=a[a.length-1],r=a[0],l=(s.x+r.x)/2,d=(s.y+r.y)/2;return o+=` Q ${s.x} ${s.y}, ${l} ${d}`,o+=` Q ${r.x} ${r.y}, ${a[0].x} ${a[0].y}`,o}_computeConvexHull(t){if(t.length<3)return t;let e=t[0];for(let i=1;i<t.length;i++)(t[i].y<e.y||t[i].y===e.y&&t[i].x<e.x)&&(e=t[i]);const i=t.slice();i.sort(((t,i)=>{if(t===e)return-1;if(i===e)return 1;const n=Math.atan2(t.y-e.y,t.x-e.x),a=Math.atan2(i.y-e.y,i.x-e.x);return n===a?Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))-Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)):n-a}));const n=[];for(let t=0;t<i.length;t++)0!==t&&i[t].x===i[t-1].x&&i[t].y===i[t-1].y||n.push(i[t]);const a=[];for(let t=0;t<Math.min(3,n.length);t++)a.push(n[t]);for(let t=3;t<n.length;t++){for(;a.length>1&&this._ccw(a[a.length-2],a[a.length-1],n[t])<=0;)a.pop();a.push(n[t])}return a}_ccw(t,e,i){return(e.x-t.x)*(i.y-t.y)-(e.y-t.y)*(i.x-t.x)}_identifyIslands(t){const e={};t.forEach((t=>{const i=this._positions[t];i&&(e[`${i.x},${i.y}`]=t)}));const i={};t.forEach((t=>{const e=this._positions[t];e&&(i[t]=e)}));const n=new Set,a=[];return t.forEach((t=>{if(n.has(t))return;const o=[],s=[t];for(;s.length>0;){const t=s.pop();if(n.has(t))continue;n.add(t),o.push(t);const a=i[t];a&&[`${a.x},${a.y-1}`,`${a.x},${a.y+1}`,`${a.x-1},${a.y}`,`${a.x+1},${a.y}`,`${a.x-1},${a.y-1}`,`${a.x+1},${a.y-1}`,`${a.x-1},${a.y+1}`,`${a.x+1},${a.y+1}`].forEach((t=>{const i=e[t];i&&!n.has(i)&&s.push(i)}))}o.length>0&&a.push(o)})),a}_renderSelectionHint(){return o.nothing}static get styles(){return o.css`
      ${l.positionStyles}
    `}_getEntityCycleName(t){if(!t||!t.entity_id||!t.entity_id.startsWith("plant."))return null;const e=this._plantInfoCache[t.entity_id];if(e&&e.result){const t=e.result;if(t.helpers&&t.helpers.cycle&&t.helpers.cycle.current)return t.helpers.cycle.current}return null}_getColorForCycle(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);return`hsl(${Math.abs(e)%360}, 70%, 45%)`}_createClickableCycleLabels(){var t,e,i,n,a;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".clickable-cycle-label");null==o||o.forEach((t=>t.remove()));let s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".cycle-labels-layer");s||(s=document.createElement("div"),s.className="cycle-labels-layer",null===(n=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".container"))||void 0===n||n.appendChild(s));const r=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelectorAll(".cycle-group-frame");null==r||r.forEach((t=>{const e=parseFloat(t.getAttribute("data-center-x")||"0"),i=parseFloat(t.getAttribute("data-center-y")||"0"),n=parseFloat(t.getAttribute("data-height")||"0"),a=t.getAttribute("data-group-name")||"",o=t.getAttribute("data-group-color")||"#3388ff";if(!a)return;const r=document.createElement("div");r.className="clickable-cycle-label",r.textContent=a,r.style.left=`${e}px`,r.style.top=i+n/2-5+"px",r.style.backgroundColor=o,r.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",this._handleGlobalClick),this._cycleGroups.find((t=>t.name===a))&&this._selectCycleMembers(a),setTimeout((()=>{window.addEventListener("click",this._handleGlobalClick)}),10)})),null==s||s.appendChild(r)}))}_convertToGlobalPosition(t){const e=this._bounds.minX,i=this._bounds.minY;return{x:t.x+e,y:t.y+i}}_handleCellClick(t,e,i){if(this._selectedMembers.clear(),this._showAddPlantDialog||this._showPlantFlyout)return this._showAddPlantDialog=!1,this._showPlantFlyout=!1,void(this._showAddPlantIndicator=null);Object.values(this._positions).some((t=>t.x===e&&t.y===i))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===e&&this._showAddPlantIndicator.y===i?(this._newPlantPosition=this._convertToGlobalPosition({x:e,y:i}),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator={x:e,y:i},this.requestUpdate())}_closeAddPlantDialog(){this._showAddPlantDialog=!1,this._showAddPlantIndicator=null,this.requestUpdate()}_handleDialogStateChange(){this._showAddPlantDialog&&this.hass?this._createDialog():this._removeDialog()}_createDialog(){this._removeDialog();const t=document.createElement("div");t.id="plant-dialog-container",t.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: auto;";const e=document.createElement("plant-create-dialog");document.body.appendChild(t),t.appendChild(e);const i=e;i.hass=this.hass,i.position=this._newPlantPosition,i.areaId=this.areaId||"",e.addEventListener("dialog-closed",(()=>{this._closeAddPlantDialog()}))}_removeDialog(){const t=document.getElementById("plant-dialog-container");t&&document.body.contains(t)&&document.body.removeChild(t)}_handleContainerClick(t){const e=t.composedPath();if(e.some((t=>t instanceof HTMLElement&&"flower-area-legend"===t.tagName.toLowerCase())))return;if(this._selectedMembers.clear(),e.some((t=>{if(t instanceof HTMLElement){if(t.getAttribute("data-entity-id"))return!0;if("svg"===t.tagName&&t.classList.contains("cell"))return!1;if(t.classList.contains("member")||t.classList.contains("member-wrapper")||t.classList.contains("member-image")||t.classList.contains("cycle-label")||t.classList.contains("clickable-cycle-label")||t.classList.contains("name-label"))return!0}return!1})))return;const i=this.getBoundingClientRect(),n=t.clientX-i.left,a=t.clientY-i.top,o=this._pixelToGrid(n,a);Object.values(this._positions).some((t=>t.x===o.x&&t.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleOverlayClick(t){this._selectedMembers.clear();const e=t.composedPath();if(e.some((t=>{var e,i;return t instanceof HTMLElement&&((null===(i=null===(e=t.className)||void 0===e?void 0:e.split)||void 0===i?void 0:i.call(e," "))||[]).some((t=>t.includes("member")||t.includes("name")||t.includes("cycle-label")||t.includes("clickable-cycle-label")))})))return;if(e.some((t=>{if(t instanceof HTMLElement){const e=t.className.split(" ");return e.includes("member")||e.includes("member-wrapper")||e.includes("cycle-label")||e.includes("clickable-cycle-label")}return!1})))return;const i=this.getBoundingClientRect(),n=t.clientX-i.left,a=t.clientY-i.top,o=this._pixelToGrid(n,a);Object.values(this._positions).some((t=>t.x===o.x&&t.y===o.y))||(this._showAddPlantIndicator&&this._showAddPlantIndicator.x===o.x&&this._showAddPlantIndicator.y===o.y?(this._newPlantPosition=this._convertToGlobalPosition(o),this._flyoutPosition={x:t.clientX,y:t.clientY},this._showPlantFlyout=!0,this._showAddPlantIndicator=null):this._showAddPlantIndicator=o,this.requestUpdate())}_handleTouchStart(t,e){let i=!1;t.preventDefault();const n=t.touches[0],a=n.clientX,o=n.clientY,s=n=>{if(i)return;const s=n.touches[0],r=s.clientX,l=s.clientY;(Math.abs(r-a)>10||Math.abs(l-o)>10)&&(i=!0,this._startDrag(t,e))},r=()=>{window.removeEventListener("touchmove",s),window.removeEventListener("touchend",r),i||this._handleClick(new MouseEvent("click"),e)};window.addEventListener("touchmove",s,{passive:!1}),window.addEventListener("touchend",r)}_loadPlantInfo(){return a(this,void 0,void 0,(function*(){yield this._loadAllPlantData()}))}_initPlantDataLoading(){this._loadAllPlantData()}_loadPlantInfosWithDelay(){this._loadAllPlantData()}_renderSensorLabels(t){var e,i;const n=this._plantInfoCache[t],a=this._getActiveLabels();if(0===a.length)return o.html``;if(!n||!n.result)return o.html``;const s=n.result;let r=null;if(this.hass&&(null===(i=null===(e=s.helpers)||void 0===e?void 0:e.health)||void 0===i?void 0:i.entity_id)){const t=s.helpers.health.entity_id;this.hass.states[t]&&(r=this.hass.states[t])}const l=a.filter((t=>"health"===t?null!==r:s[t]&&void 0!==s[t].current&&null!==s[t].current));if(0===l.length)return o.html``;const d=l.map((t=>"health"===t&&r?{type:t,current:Number(r.state),min:0,max:5,icon:"mdi:heart-pulse",sensor:r.entity_id,unit_of_measurement:""}:Object.assign({type:t},s[t])));return o.html`
      <div class="sensor-labels">
        ${d.map((t=>{const e=Number(t.current),i=Number(t.min),n=Number(t.max),a=0===e,s=a||e<i&&!a||e>n||"health"===t.type&&e<=1.5?"sensor-pulsating":"";let r="";if("health"===t.type)if(e<=.5)r="rgba(240,163,163,1)";else if(e<=2.5){const t=(e-.5)/2;r=`rgb(${240+15*t}, ${163+51*t}, ${163-163*t})`}else{const t=(e-2.5)/2.5;r=`rgb(${255-212*t}, ${214-20*t}, ${0+83*t})`}else r=`var(--sensor-ring-${t.type}-color, var(--primary-color))`;let l=isNaN(e)?"-":e;return Number.isInteger(e)?l=Math.round(e):isNaN(e)||(l=e.toFixed(1)),o.html`
            <div class="sensor-label ${s}">
              <ha-icon 
                icon="${t.icon||`mdi:${t.type}`}" 
                style="color: ${r};"
              ></ha-icon>
              <span class="sensor-value">${l}</span>
              <span class="sensor-unit">${t.unit_of_measurement||""}</span>
            </div>
          `}))}
      </div>
    `}_handleSettingsChanged(t){const e=t.detail;this._userSettings={showRings:e.selectedRings,showLabels:e.selectedLabels,heatmap:e.heatmapSensor,heatmapColor:e.heatmapColor,heatmapSecondaryColor:e.heatmapSecondaryColor,heatmapOpacity:e.heatmapOpacity},this.requestUpdate()}_getActiveRings(){return void 0!==this._userSettings.showRings?this._userSettings.showRings:this.showRings}_getActiveLabels(){return void 0!==this._userSettings.showLabels?this._userSettings.showLabels:this.showLabels}_getHeatmapSensor(){if(null!==this._userSettings.heatmap)return void 0!==this._userSettings.heatmap?this._userSettings.heatmap:this.heatmap}_getHeatmapColor(){return void 0!==this._userSettings.heatmapColor?this._userSettings.heatmapColor:this.heatmapColor}_getHeatmapSecondaryColor(){return void 0!==this._userSettings.heatmapSecondaryColor?this._userSettings.heatmapSecondaryColor:this.heatmapSecondaryColor}_getHeatmapOpacity(){return void 0!==this._userSettings.heatmapOpacity?this._userSettings.heatmapOpacity:.8}_loadAllPlantData(){return a(this,void 0,void 0,(function*(){if(!this.hass)return;const t=this.entities.filter((t=>t.startsWith("plant.")));if(0===t.length)return;let e=!0;for(const i of t)if(!this._plantInfoCache[i]||!this._plantInfoCache[i].result){e=!1;break}if(e)return this._identifyCycleGroups(),this.requestUpdate(),this._updateTimeout&&clearTimeout(this._updateTimeout),void(this._updateTimeout=window.setTimeout((()=>{this._loadAllPlantData()}),1e4));const i=t.map((t=>a(this,void 0,void 0,(function*(){try{const e=yield this.hass.callWS({type:"plant/get_info",entity_id:t});return e&&"object"==typeof e&&"result"in e&&e.result&&(this._plantInfoCache[t]={result:e.result}),{entityId:t,success:!0}}catch(e){return console.error(`[FLOWER-AREA] Fehler beim Laden der Daten für ${t}:`,e),{entityId:t,success:!1}}}))));yield Promise.all(i),this._identifyCycleGroups(),this.requestUpdate(),this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=window.setTimeout((()=>{this._loadAllPlantData()}),1e4)}))}};e.BrokkoliArea=c,n([(0,s.property)({attribute:!1})],c.prototype,"hass",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"entities",void 0),n([(0,s.property)()],c.prototype,"areaId",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"showRings",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"showLabels",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"heatmap",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"heatmapColor",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"heatmapSecondaryColor",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"heatmapOpacity",void 0),n([(0,s.property)({attribute:!1})],c.prototype,"showLegend",void 0),n([(0,s.state)()],c.prototype,"_userSettings",void 0),n([(0,s.state)()],c.prototype,"_positions",void 0),n([(0,s.state)()],c.prototype,"_draggingMember",void 0),n([(0,s.state)()],c.prototype,"_hoveringMember",void 0),n([(0,s.state)()],c.prototype,"_dragOffset",void 0),n([(0,s.state)()],c.prototype,"_containerSize",void 0),n([(0,s.state)()],c.prototype,"_cellSize",void 0),n([(0,s.state)()],c.prototype,"_targetPosition",void 0),n([(0,s.state)()],c.prototype,"_isSnapping",void 0),n([(0,s.state)()],c.prototype,"_currentDragPosition",void 0),n([(0,s.state)()],c.prototype,"_originalPosition",void 0),n([(0,s.state)()],c.prototype,"_wasElementSelected",void 0),n([(0,s.state)()],c.prototype,"_selectedMembers",void 0),n([(0,s.state)()],c.prototype,"_isMultiDragging",void 0),n([(0,s.state)()],c.prototype,"_originalPositions",void 0),n([(0,s.state)()],c.prototype,"_targetPositions",void 0),n([(0,s.state)()],c.prototype,"_isDraggingSelection",void 0),n([(0,s.state)()],c.prototype,"_showSelectionHint",void 0),n([(0,s.state)()],c.prototype,"_justFinishedMultiDrag",void 0),n([(0,s.state)()],c.prototype,"_cycleGroups",void 0),n([(0,s.state)()],c.prototype,"_bounds",void 0),n([(0,s.state)()],c.prototype,"_showAddPlantIndicator",void 0),n([(0,s.state)()],c.prototype,"_showAddPlantDialog",void 0),n([(0,s.state)()],c.prototype,"_showPlantFlyout",void 0),n([(0,s.state)()],c.prototype,"_flyoutPosition",void 0),n([(0,s.state)()],c.prototype,"_newPlantPosition",void 0),n([(0,s.state)()],c.prototype,"_debugMode",void 0),n([(0,s.state)()],c.prototype,"_highlightCell",void 0),n([(0,s.state)()],c.prototype,"_plantInfoCache",void 0),n([(0,s.state)()],c.prototype,"_plantRetryTimeouts",void 0),n([(0,s.state)()],c.prototype,"_plantLastLoaded",void 0),e.BrokkoliArea=c=n([(0,s.customElement)("brokkoli-area")],c)},2618:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerConsumption=void 0;const o=i(4437),s=i(2924),r=i(4356),l=i(2075),d=i(2413),c=i(8063),h=120,u=60;let p=class extends o.LitElement{constructor(){super(...arguments),this._charts=new Map,this._selectedPhase=null,this._phaseData=new Map,this._consumptionData=null,this._plantInfo=null,this._lastOptions=new Map,this._lastPhaseData=new Map}_loadPlantInfo(t){return a(this,void 0,void 0,(function*(){if(!this.hass)return;const e=yield c.PlantEntityUtils.getPlantInfo(this.hass,t);this._plantInfo=e}))}firstUpdated(){return a(this,void 0,void 0,(function*(){window.ApexCharts||(yield this._loadApexChartsScript())}))}disconnectedCallback(){super.disconnectedCallback(),this._charts.forEach((t=>{t&&t.destroy()})),this._charts.clear(),this._lastPhaseData.clear()}_showMoreInfo(t){(0,r.fireEvent)(this,"hass-more-info",{entityId:t})}_updateConsumptionForPhase(t,e){return a(this,void 0,void 0,(function*(){var t,i,n,a,o,s;if(!this.hass)return;if(!e)return this._selectedPhase=null,this._consumptionData=null,this._triggerValueAnimation(),void this.requestUpdate();const r=this._phaseData.get(e);if(!r)return;const l=r.start.toISOString(),d=(r.end||new Date).toISOString();try{const e=null===(t=this._plantInfo)||void 0===t?void 0:t.diagnostic_sensors,r=[null===(i=null==e?void 0:e.total_integral)||void 0===i?void 0:i.entity_id,null===(n=null==e?void 0:e.total_fertilizer_consumption)||void 0===n?void 0:n.entity_id,null===(a=null==e?void 0:e.total_water_consumption)||void 0===a?void 0:a.entity_id,null===(o=null==e?void 0:e.total_power_consumption)||void 0===o?void 0:o.entity_id,null===(s=null==e?void 0:e.energy_cost)||void 0===s?void 0:s.entity_id];if(r.some((t=>!t)))return;const c=r.map((t=>this.hass.callApi("GET",`history/period/${l}?filter_entity_id=${t}&end_time=${d}`))),h=yield Promise.all(c),u=t=>{if(!t||!t[0]||t[0].length<2)return 0;const e=t[0].filter((t=>"unavailable"!==t.state&&"unknown"!==t.state)).map((t=>parseFloat(t.state)));return e.length>=2?e[e.length-1]-e[0]:e[0]||0};this._consumptionData={ppfd:u(h[0]),fertilizer:u(h[1]),water:u(h[2]),power:u(h[3]),cost:u(h[4])},this._triggerValueAnimation(),this.requestUpdate()}catch(t){console.warn("Fehler beim Laden der Verbrauchsdaten:",t)}}))}_triggerValueAnimation(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll(".consumption-item");e&&e.forEach((t=>{t.classList.remove("animate"),t.offsetWidth,t.classList.add("animate")}))}render(){var t,e,i,n,a,s,r,l,c,h,u,p,m,g,_,v,f,y,b;if(!this.hass||!this.entityId)return o.html``;const w=this.entityId.split(".")[1],x=null===(t=this._plantInfo)||void 0===t?void 0:t.diagnostic_sensors,k=null!==(i=null===(e=null==x?void 0:x.total_integral)||void 0===e?void 0:e.entity_id)&&void 0!==i?i:"",$=null!==(a=null===(n=null==x?void 0:x.total_fertilizer_consumption)||void 0===n?void 0:n.entity_id)&&void 0!==a?a:"",S=null!==(r=null===(s=null==x?void 0:x.total_water_consumption)||void 0===s?void 0:s.entity_id)&&void 0!==r?r:"",I=null!==(c=null===(l=null==x?void 0:x.total_power_consumption)||void 0===l?void 0:l.entity_id)&&void 0!==c?c:"",E=null!==(u=null===(h=null==x?void 0:x.energy_cost)||void 0===h?void 0:h.entity_id)&&void 0!==u?u:"",T=(t,e=1)=>("string"==typeof t&&(t=parseFloat(t)),isNaN(t)?"N/A":t.toFixed(e));return o.html`
            <div class="consumption-data">
                <div class="consumption-item" @click="${()=>k&&this._showMoreInfo(k)}">
                    <ha-icon icon="mdi:counter"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_ppfd")}</span>
                        <span class="value consumption-value">${T(this._consumptionData?this._consumptionData.ppfd:(k?null===(p=this.hass.states[k])||void 0===p?void 0:p.state:null)||"N/A")} mol/s⋅m²</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>$&&this._showMoreInfo($)}">
                    <ha-icon icon="mdi:chart-line-variant"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_fertilizer_consumption")}</span>
                        <span class="value consumption-value">${T(this._consumptionData?this._consumptionData.fertilizer:($?null===(m=this.hass.states[$])||void 0===m?void 0:m.state:null)||"N/A")} ${null!==(v=$?null===(_=null===(g=this.hass.states[$])||void 0===g?void 0:g.attributes)||void 0===_?void 0:_.unit_of_measurement:null)&&void 0!==v?v:"mS/cm"}</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>S&&this._showMoreInfo(S)}">
                    <ha-icon icon="mdi:water-pump"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_water_consumption")}</span>
                        <span class="value consumption-value">${T(this._consumptionData?this._consumptionData.water:(S?null===(f=this.hass.states[S])||void 0===f?void 0:f.state:null)||"N/A")} L</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${()=>I&&this._showMoreInfo(I)}">
                    <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"total_power_consumption")}</span>
                        <span class="value consumption-value">${T(this._consumptionData?this._consumptionData.power:(I?null===(y=this.hass.states[I])||void 0===y?void 0:y.state:null)||"N/A")} kWh</span>
                    </div>
                </div>
                <div class="consumption-item large" @click="${()=>E&&this._showMoreInfo(E)}">
                    <ha-icon icon="mdi:cash-multiple"></ha-icon>
                    <div class="consumption-details large">
                        <span class="label">${d.TranslationUtils.translateSensor(this.hass,"energy_cost")}</span>
                        <span class="value consumption-value">${T(this._consumptionData?this._consumptionData.cost:(E?null===(b=this.hass.states[E])||void 0===b?void 0:b.state:null)||"N/A",2)} €</span>
                    </div>
                </div>
            </div>
            
            <div class="consumption-charts-container">
                <div class="pie-chart-container">
                    ${this._renderPieChart(w)}
                </div>
            </div>
        `}_renderPieChart(t){var e,i,n,a,s,r;const l=null===(n=null===(i=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===i?void 0:i.growth_phase)||void 0===n?void 0:n.entity_id,c=l?this.hass.states[l]:void 0;if(!c)return o.html`
                <div style="text-align: center; padding: 20px;">
                    Keine Daten für das Pie Chart verfügbar
                </div>
            `;const h={Seed:this._calculatePhaseDuration(c.attributes.seeds_start,c.attributes.seeds_duration),Germination:this._calculatePhaseDuration(c.attributes.germination_start,c.attributes.germination_duration),Rooting:this._calculatePhaseDuration(c.attributes.rooting_start,c.attributes.rooting_duration),Growth:this._calculatePhaseDuration(c.attributes.growing_start,c.attributes.growing_duration),"Flowering Past":0,"Flowering To Go":0,Harvested:this._calculatePhaseDuration(c.attributes.harvested_date,c.attributes.harvested_duration)},u=null===(r=null===(s=null===(a=this._plantInfo)||void 0===a?void 0:a.helpers)||void 0===s?void 0:s.flowering_duration)||void 0===r?void 0:r.entity_id,p=u?this.hass.states[u]:void 0,m=c.attributes.flowering_start,g=m&&"null"!==m&&""!==m;if(null==p?void 0:p.state){const t=parseInt(p.state);if(g){const e=new Date(m),i=new Date,n=Math.floor((i.getTime()-e.getTime())/864e5);n>=0?(h["Flowering Past"]=Math.min(n,t),h["Flowering To Go"]=Math.max(0,t-n)):h["Flowering To Go"]=t}else h["Flowering To Go"]=t}return 0===Object.values(h).reduce(((t,e)=>t+e),0)?o.html`
                <div style="text-align: center; padding: 20px;">
${d.TranslationUtils.translateUI(this.hass,"no_completed_phases")}
                </div>
            `:o.html`
            <div class="pie-chart">
                <div id="pie-chart-${t}"></div>
            </div>
        `}_calculatePhaseDuration(t,e){if(!t||"null"===t||""===t)return 0;if(e)return e;const i=new Date(t),n=new Date,a=Math.floor((n.getTime()-i.getTime())/864e5);return Math.max(1,a)}_getPhaseDataString(t){return t?JSON.stringify({samen:t.attributes.seeds_duration||0,keimen:t.attributes.germination_duration||0,wurzeln:t.attributes.rooting_duration||0,wachstum:t.attributes.growing_duration||0,bluete:t.attributes.flower_duration||0,geerntet:t.attributes.harvested_duration||0}):""}_initPieChart(t){return a(this,void 0,void 0,(function*(){var e,i,n,a,o,s,r,l,c,p,m,g;if(!window.ApexCharts)try{yield this._loadApexChartsScript()}catch(t){return void console.error("Fehler beim Laden von ApexCharts:",t)}const _=this._charts.has("pie"),v=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#pie-chart-${t}`);if(!v)return;const f=null===(a=null===(n=null===(i=this._plantInfo)||void 0===i?void 0:i.helpers)||void 0===n?void 0:n.growth_phase)||void 0===a?void 0:a.entity_id,y=f?null===(o=this.hass)||void 0===o?void 0:o.states[f]:void 0;if(!y)return;const b=this._getPhaseDataString(y);if(b===this._lastPhaseData.get(t)&&_)return;this._lastPhaseData.set(t,b);const w={Seed:this._calculatePhaseDuration(y.attributes.seeds_start,y.attributes.seeds_duration),Germination:this._calculatePhaseDuration(y.attributes.germination_start,y.attributes.germination_duration),Rooting:this._calculatePhaseDuration(y.attributes.rooting_start,y.attributes.rooting_duration),Growth:this._calculatePhaseDuration(y.attributes.growing_start,y.attributes.growing_duration),"Flowering Past":0,"Flowering To Go":0,Harvested:this._calculatePhaseDuration(y.attributes.harvested_date,y.attributes.harvested_duration)},x=null===(l=null===(r=null===(s=this._plantInfo)||void 0===s?void 0:s.helpers)||void 0===r?void 0:r.flowering_duration)||void 0===l?void 0:l.entity_id,k=x?this.hass.states[x]:void 0,$=y.attributes.flowering_start,S=$&&"null"!==$&&""!==$;if(null==k?void 0:k.state){const t=parseInt(k.state);if(S){const e=new Date($),i=new Date,n=Math.floor((i.getTime()-e.getTime())/864e5);n>=0&&(w["Flowering Past"]=Math.min(n,t),w["Flowering To Go"]=Math.max(0,t-n))}}const I=d.TranslationUtils,E={Seed:I.translateGrowthPhase(this.hass,"seeds"),Germination:I.translateGrowthPhase(this.hass,"germination"),Rooting:I.translateGrowthPhase(this.hass,"rooting"),Growth:I.translateGrowthPhase(this.hass,"growing"),"Flowering Past":I.translateUI(this.hass,"flowering_past"),"Flowering To Go":I.translateUI(this.hass,"flowering_to_go"),Harvested:I.translateGrowthPhase(this.hass,"harvested")},T=I.translateUI(this.hass,"days"),C=I.translateGrowthPhase(this.hass,"flowering"),D=Object.values(w).filter((t=>t>0)),P=Object.entries(w).filter((([,t])=>t>0)).map((([t])=>{var e;return null!==(e=E[t])&&void 0!==e?e:t})),M=this._charts.get("pie");if(M)return void M.updateOptions({labels:P,series:D});const z={chart:{type:"pie",background:"transparent",redrawOnParentResize:!0,animations:{enabled:!0,speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},events:{dataPointSelection:(e,i,n)=>{var a,o;const s=P[n.dataPointIndex],r=null!==(o=null===(a=Object.entries(E).find((([,t])=>t===s)))||void 0===a?void 0:a[0])&&void 0!==o?o:s;0===n.selectedDataPoints[0].length||this._selectedPhase===r&&1===n.selectedDataPoints[0].length?(this._updateConsumptionForPhase(t,null),n.selectedDataPoints[0]=[],i.w.globals.selectedDataPoints[0]=[]):(this._selectedPhase=r,this._updateConsumptionForPhase(t,r))}}},series:D,labels:P,colors:[`hsl(${h}, ${u}%, 55%)`,`hsl(${h}, ${u}%, 50%)`,`hsl(${h}, ${u}%, 45%)`,`hsl(${h}, ${u}%, 40%)`,`hsl(${h}, ${u}%, 35%)`,`hsl(${h}, ${u}%, 30%)`,`hsl(${h}, ${u}%, 45%)`],legend:{show:!1},dataLabels:{enabled:!0,style:{fontSize:"clamp(10px, 1.2vw, 14px)",fontFamily:"var(--paper-font-body1_-_font-family)"},textAnchor:"start",distributed:!0,color:"var(--primary-text-color)",formatter:function(t,e){const i=e.w.globals.series[e.seriesIndex],n=e.w.globals.labels[e.seriesIndex],a=E["Flowering Past"];if(n===E["Flowering To Go"]){const t=P.indexOf(a),e=t>=0&&D[t]||0;return e>0?[C,`${e}/${i}/${e+i} ${T}`]:[C,`${i} ${T}`]}return n===a?[""]:[`${n}`,`${i} ${T}`]}},tooltip:{enabled:!0,theme:"light",style:{fontSize:"clamp(10px, 1.2vw, 14px)"},y:{formatter:function(t){return`${t} ${T}`}}},plotOptions:{pie:{dataLabels:{minAngleToShowLabel:0,offset:-25},donut:{size:"0%"},expandOnClick:!0,offsetX:0,offsetY:0}},stroke:{show:!0,width:2,colors:["var(--card-background-color)"]},theme:{mode:"light",palette:"palette1"}};if(y){const t=["seeds","germination","rooting","growing","flowering","harvested"],e={seeds:"Seed",germination:"Germination",rooting:"Rooting",growing:"Growth",flowering:"Flowering",harvested:"Harvested"};t.forEach(((i,n)=>{const a=y.attributes[`${i}_start`];if(a){const o=new Date(a);let s=null;if(n<t.length-1){const e=t[n+1],i=y.attributes[`${e}_start`];i&&(s=new Date(i))}s||y.state!==i||(s=new Date),this._phaseData.set(e[i],{start:o,end:s,duration:s?Math.floor((s.getTime()-o.getTime())/864e5):0})}}));const i=new Date,n=null===(m=null===(p=null===(c=this._plantInfo)||void 0===c?void 0:c.helpers)||void 0===p?void 0:p.flowering_duration)||void 0===m?void 0:m.entity_id,a=n?null===(g=this.hass)||void 0===g?void 0:g.states[n]:void 0,o=(null==a?void 0:a.state)?parseInt(a.state):0;if(y.attributes.flowering_start){const t=new Date(y.attributes.flowering_start);if(this._phaseData.set("Flowering Past",{start:t,end:i,duration:Math.floor((i.getTime()-t.getTime())/864e5)}),o>0){const e=new Date(t);e.setDate(e.getDate()+o),this._phaseData.set("Flowering To Go",{start:i,end:e,duration:Math.floor((e.getTime()-i.getTime())/864e5)})}}else if(o>0){const t=new Date(i);t.setDate(t.getDate()+o),this._phaseData.set("Flowering To Go",{start:i,end:t,duration:o})}}const A=new window.ApexCharts(v,z);yield A.render(),this._charts.set("pie",A)}))}_loadApexChartsScript(){return a(this,void 0,void 0,(function*(){const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.css",document.head.appendChild(t);const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.min.js";const i=new Promise((t=>{e.onload=()=>{setTimeout(t,100)}}));document.head.appendChild(e),yield i}))}updated(t){if(super.updated(t),this.entityId&&this.hass){const e=this.entityId.split(".")[1];if(t.has("entityId")&&this.entityId)return this._charts.forEach((t=>{t.destroy()})),this._charts.clear(),this._lastPhaseData.clear(),void this._loadPlantInfo(this.entityId).then((()=>this._initPieChart(e)));t.has("hass")&&this._initPieChart(e)}}};e.FlowerConsumption=p,p.styles=l.style,n([(0,s.property)()],p.prototype,"hass",void 0),n([(0,s.property)()],p.prototype,"entityId",void 0),n([(0,s.state)()],p.prototype,"_charts",void 0),n([(0,s.state)()],p.prototype,"_selectedPhase",void 0),n([(0,s.state)()],p.prototype,"_phaseData",void 0),n([(0,s.state)()],p.prototype,"_consumptionData",void 0),n([(0,s.state)()],p.prototype,"_plantInfo",void 0),e.FlowerConsumption=p=n([(0,s.customElement)("flower-consumption")],p)},4507:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerGallery=void 0;const o=i(4437),s=i(2924),r=i(6781),l=i(364),d=i(8063),c=i(2413),h=i(4139);class u extends o.LitElement{constructor(){super(...arguments),this.images=[],this._currentImageIndex=0,this._isFading=!1,this._showFlyout=!1,this._showDeleteFlyout=!1,this._showMainImageFlyout=!1,this._showOtherImages=!1,this._reparentedToBody=!1,this._plantInfo=null,this._isLoading=!1,this._imagesList=[],this._isImagesLoading=!1,this._otherImagesList=[]}_changeImage(){return a(this,arguments,void 0,(function*(t="next"){this._isFading=!0,this.requestUpdate(),yield new Promise((t=>setTimeout(t,500))),this._currentImageIndex="next"===t?(this._currentImageIndex+1)%this.images.length:(this._currentImageIndex-1+this.images.length)%this.images.length,this._isFading=!1,this.requestUpdate()}))}_selectImage(t){return a(this,void 0,void 0,(function*(){t!==this._currentImageIndex&&(this._isFading=!0,this.requestUpdate(),yield new Promise((t=>setTimeout(t,500))),this._currentImageIndex=t,this._isFading=!1,this.requestUpdate())}))}_toggleFlyout(t){t.preventDefault(),t.stopPropagation(),this._showFlyout=!this._showFlyout}_toggleDeleteFlyout(t){t.preventDefault(),t.stopPropagation(),this._showDeleteFlyout=!this._showDeleteFlyout}_toggleMainImageFlyout(t){t.preventDefault(),t.stopPropagation(),this._showMainImageFlyout=!this._showMainImageFlyout}_toggleOtherImages(t){t.preventDefault(),t.stopPropagation(),this._showOtherImages=!this._showOtherImages,this.requestUpdate()}_calculateOtherImagesWidth(){return 84*this._otherImagesList.length+8*Math.max(0,this._otherImagesList.length-1)+16}_handleFileUpload(t){return a(this,void 0,void 0,(function*(){const e=t.target.files;if(e&&e.length>0){const t=e[0];if(!t.type.startsWith("image/"))return void alert(c.TranslationUtils.translateUI(this.hass,"upload_images_only"));if(t.size>10485760)return void alert(c.TranslationUtils.translateUI(this.hass,"image_too_large"));try{yield this._uploadImage(t),this._showFlyout=!1}catch(t){alert(c.TranslationUtils.translateUI(this.hass,"upload_error")+": "+t.message)}}}))}_uploadImage(t){return a(this,void 0,void 0,(function*(){if(!this.entityId||!this.hass)return;const e=16384,i=new FileReader;i.onload=i=>a(this,void 0,void 0,(function*(){var n;if(!(null===(n=i.target)||void 0===n?void 0:n.result))return;const a=i.target.result,o=Math.ceil(a.byteLength/e);for(let i=0;i<o;i++){const n=a.slice(i*e,(i+1)*e),s=Array.from(new Uint8Array(n)).map((t=>t.toString(16).padStart(2,"0"))).join("");try{yield this.hass.connection.sendMessagePromise({type:"plant/upload_image",entity_id:this.entityId,filename:t.name,chunk:s,chunk_index:i,total_chunks:o})}catch(t){throw console.error("Upload error:",t),t}}yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId}),setTimeout((()=>{this._initGallery()}),1e3)})),i.readAsArrayBuffer(t)}))}_deleteImage(t){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/delete_image",entity_id:this.entityId,filename:t}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(t){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"delete_image_error")}: ${t.message}`)}}))}_setMainImage(t){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass)try{yield this.hass.connection.sendMessagePromise({type:"plant/set_main_image",entity_id:this.entityId,filename:t}),yield this.hass.callService("homeassistant","update_entity",{entity_id:this.entityId})}catch(t){throw new Error(`${c.TranslationUtils.translateUI(this.hass,"set_main_image_error")}: ${t.message}`)}}))}_close(t){t.stopPropagation(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.onClose&&this.onClose(),this.remove()}_loadPlantInfo(){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&!this._isLoading){this._isLoading=!0;try{this._plantInfo=yield d.PlantEntityUtils.getPlantInfo(this.hass,this.entityId),yield this._initGallery()}catch(t){console.warn("Fehler beim Laden der Pflanzen-Info:",t),this._plantInfo=null}finally{this._isLoading=!1}}}))}_initGallery(){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&this._plantInfo&&!this._isImagesLoading){this._isImagesLoading=!0;try{this._imagesList=yield u.getImagesWithDates(this.hass,this.entityId,this._plantInfo),this._otherImagesList=yield u.getOtherImagesWithDates(this.hass,this.entityId,this._plantInfo);const t=[...this._imagesList,...this._otherImagesList];this.images.length,this.images=t.map((t=>t.url)),this._imageRotationInterval&&clearInterval(this._imageRotationInterval),this.images.length>1&&(this._imageRotationInterval=setInterval((()=>{this._changeImage()}),1e4)),this.requestUpdate()}catch(t){console.warn("Fehler beim Laden der Bilder:",t)}finally{this._isImagesLoading=!1}}}))}connectedCallback(){super.connectedCallback(),this.parentElement!==document.body&&(document.body.appendChild(this),this._reparentedToBody=!0),void 0!==this.initialImageIndex&&(this._currentImageIndex=this.initialImageIndex),this._loadPlantInfo()}disconnectedCallback(){super.disconnectedCallback(),this._imageRotationInterval&&clearInterval(this._imageRotationInterval)}static get styles(){return l.galleryStyles}static getImageDateFromUrl(t){const e=t.match(/_(\d{8}_\d{6})/);if(!e)return null;const i=e[1],n=i.slice(0,4),a=i.slice(4,6),o=i.slice(6,8),s=i.slice(9,11),r=i.slice(11,13);return new Date(`${n}-${a}-${o}T${s}:${r}:00`)}static getImagesWithDates(t,e,i){return a(this,void 0,void 0,(function*(){const n=t.states[e];if(!(null==n?void 0:n.attributes.images))return[];const a=n.attributes.download_path||"/local/images/plants/",o=[];let s;return s=i?yield this.getFirstPhaseDate(t,e,i):yield this.getFirstPhaseDate(t,e),n.attributes.entity_picture&&s&&o.push({url:n.attributes.entity_picture,date:s}),n.attributes.images.forEach((t=>{const e=this.getImageDateFromUrl(t);e&&s&&e>=s&&o.push({url:`${a}${t}`,date:e})})),o.sort(((t,e)=>t.date.getTime()-e.date.getTime()))}))}static getOtherImagesWithDates(t,e,i){return a(this,void 0,void 0,(function*(){const n=t.states[e];if(!(null==n?void 0:n.attributes.images))return[];const a=n.attributes.download_path||"/local/images/plants/",o=[];let s;return s=i?yield this.getFirstPhaseDate(t,e,i):yield this.getFirstPhaseDate(t,e),s?(n.attributes.images.forEach((t=>{const e=this.getImageDateFromUrl(t);e?e<s&&o.push({url:`${a}${t}`,date:e}):o.push({url:`${a}${t}`,date:new Date(1970,0,1)})})),o.sort(((t,e)=>t.date.getTime()-e.date.getTime()))):[]}))}static getFirstPhaseDate(t,e,i){return a(this,void 0,void 0,(function*(){var n,a,o,s;if(i){if(!(null===(a=null===(n=null==i?void 0:i.helpers)||void 0===n?void 0:n.growth_phase)||void 0===a?void 0:a.entity_id))return null;const e=i.helpers.growth_phase.entity_id,o=t.states[e];if(!o)return null;const s=h.PHASES;for(const t of s){const e=o.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e)return new Date(e)}return null}try{const i=yield d.PlantEntityUtils.getPlantInfo(t,e);if(!(null===(s=null===(o=null==i?void 0:i.helpers)||void 0===o?void 0:o.growth_phase)||void 0===s?void 0:s.entity_id))return null;const n=i.helpers.growth_phase.entity_id,a=t.states[n];if(!a)return null;const r=h.PHASES;for(const t of r){const e=a.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e)return new Date(e)}return null}catch(t){return console.warn("Fehler beim Laden der Pflanzen-Info für getFirstPhaseDate:",t),null}}))}_getGroupedImages(){var t,e,i;if(!this.entityId||!this.hass||!this._plantInfo)return[];const n=[];if(this._otherImagesList.length>0){const t=[];this._otherImagesList.forEach(((e,i)=>{t.push({url:e.url,day:i+1,totalDays:this._otherImagesList.length})})),n.push({phase:c.TranslationUtils.translateUI(this.hass,"other_images"),images:t,color:"var(--secondary-text-color)"})}if(!(null===(i=null===(e=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===e?void 0:e.growth_phase)||void 0===i?void 0:i.entity_id))return n;const a=this._plantInfo.helpers.growth_phase.entity_id,o=this.hass.states[a];if(!o)return n;const s=h.PHASES;let r="",l=[];const d=s.filter((t=>null!=o.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`])),u={};s.forEach((t=>{u[t]=c.TranslationUtils.translateGrowthPhase(this.hass,t)}));let p=null;for(const t of s){const e=o.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){p=new Date(e);break}}if(!p)return n;if(this._imagesList.forEach((t=>{const e=t.url,i=t.date;let a="",c=0,h=0;for(const t of s){const e=o.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const n=new Date(e);i>=n&&(a=u[t],c=Math.floor((i.getTime()-n.getTime())/864e5))}}if(h=Math.floor((i.getTime()-p.getTime())/864e5),a){if(a!==r){if(l.length>0){const t=s.find((t=>u[t]===r)),e=t?d.indexOf(t):-1;let i="var(--primary-color)";"harvested"===t?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===t?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":t&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-e/Math.max(1,d.length-1)*25}%)`),n.push({phase:r,images:l,color:i})}r=a,l=[]}l.push({url:e,day:c+1,totalDays:h+1})}})),l.length>0){const t=s.find((t=>u[t]===r)),e=t?d.indexOf(t):-1;let i="var(--primary-color)";"harvested"===t?i="repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--dark-primary-color) 10px, var(--dark-primary-color) 20px)":"removed"===t?i="repeating-linear-gradient(45deg, var(--error-color), var(--error-color) 10px, var(--dark-error-color) 10px, var(--dark-error-color) 20px)":t&&(i=`hsl(var(--hue, 120), var(--saturation, 60%), ${55-e/Math.max(1,d.length-1)*25}%)`),n.push({phase:r,images:l,color:i})}return n}_getImageDate(t){var e,i,n,a;let o=this._imagesList.find((e=>e.url===t));if(o||(o=this._otherImagesList.find((e=>e.url===t))),!o)return c.TranslationUtils.translateUI(this.hass,"unknown_date");const s=o.date;if(s.getTime()===new Date(1970,0,1).getTime())return`<div class="date-line">${c.TranslationUtils.translateUI(this.hass,"unknown_date")}</div>`;const r=s.toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});if(!(null===(n=null===(i=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===i?void 0:i.growth_phase)||void 0===n?void 0:n.entity_id))return r;const l=this._plantInfo.helpers.growth_phase.entity_id,d=null===(a=this.hass)||void 0===a?void 0:a.states[l];if(!d)return r;const u=h.PHASES;let p="",m=0,g=0,_=null;for(const t of u){const e=d.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){_=new Date(e);break}}for(const t of u){const e=d.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const i=new Date(e);s>=i&&(p=c.TranslationUtils.translateGrowthPhase(this.hass,t),m=Math.floor((s.getTime()-i.getTime())/864e5))}}if(_&&(g=Math.floor((s.getTime()-_.getTime())/864e5)),0===this.images.indexOf(t)){let t=`<div class="date-line">${r}</div>`;return t+=`<div class="info-line">Tag 1 <span class="phase">${p}</span>/1 Total</div>`,t}let v=`<div class="date-line">${r}</div>`;return v+=`<div class="info-line">Tag ${m+1} <span class="phase">${p}</span>/${g+1} Total</div>`,v}render(){return o.html`
            <div class="gallery-overlay" @click="${this._close}">
                <div class="gallery-content" @click="${t=>t.stopPropagation()}">
                    <div class="gallery-header">
                        <span class="gallery-date">
                            ${this.images.length>0?(0,r.unsafeHTML)(this._getImageDate(this.images[this._currentImageIndex])):c.TranslationUtils.translateUI(this.hass,"no_images_available")}
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
                                    ${this._getGroupedImages().map((t=>o.html`
                                        <div class="thumbnail-group">
                                            <div class="thumbnail-group-label" style="--phase-color: ${t.color}">
                                                ${t.phase}
                                            </div>
                                            <div class="thumbnail-group-images">
                                                ${t.images.map((t=>o.html`
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
                    `:o.html`
                        <div class="no-images-message">
                            <ha-icon icon="mdi:image-off"></ha-icon>
                            <span>${c.TranslationUtils.translateUI(this.hass,"no_images_available")}</span>
                            <span>${c.TranslationUtils.translateUI(this.hass,"click_camera_to_add_image")}</span>
                        </div>
                    `}
                </div>
            </div>
        `}}e.FlowerGallery=u,n([(0,s.property)()],u.prototype,"hass",void 0),n([(0,s.property)()],u.prototype,"entityId",void 0),n([(0,s.property)({type:Array})],u.prototype,"images",void 0),n([(0,s.property)()],u.prototype,"onClose",void 0),n([(0,s.property)()],u.prototype,"getImageDate",void 0),n([(0,s.property)({type:Number})],u.prototype,"initialImageIndex",void 0),n([(0,s.state)()],u.prototype,"_currentImageIndex",void 0),n([(0,s.state)()],u.prototype,"_isFading",void 0),n([(0,s.state)()],u.prototype,"_showFlyout",void 0),n([(0,s.state)()],u.prototype,"_showDeleteFlyout",void 0),n([(0,s.state)()],u.prototype,"_showMainImageFlyout",void 0),n([(0,s.state)()],u.prototype,"_showOtherImages",void 0),customElements.get("flower-gallery")||customElements.define("flower-gallery",u)},5953:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerGraph=e.chartOptions=void 0,e.setStartTimestamp=c;const o=i(4437),s=i(2924),r=i(1334),l=i(8063),d=i(2413);function c(t){window.startTimestamp=t}e.chartOptions={chart:{type:"rangeArea",height:250,animations:{enabled:!0,speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",zoom:{enabled:!0,autoScaleYaxis:!1,allowMouseWheelZoom:!0,type:"x"},toolbar:{show:!0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0},autoSelected:"zoom"}},series:[],legend:{show:!0,showForSingleSeries:!0,position:"right",horizontalAlign:"left",offsetY:5,offsetX:0,fontSize:"0px",markers:{size:0}},xaxis:{type:"datetime",labels:{rotateAlways:!1,datetimeUTC:!1,hideOverlappingLabels:!0,formatter:function(t,e,i){var n,a,o,s;const r=new Date(t),l=new Date(window.startTimestamp||r);l.setHours(0,0,0,0);const d=Math.floor((r.getTime()-l.getTime())/864e5)+1,c=(null===(a=null===(n=null==i?void 0:i.w)||void 0===n?void 0:n.globals)||void 0===a?void 0:a.minX)||0,h=((null===(s=null===(o=null==i?void 0:i.w)||void 0===o?void 0:o.globals)||void 0===s?void 0:s.maxX)||0)-c;if(h<2592e5)return new Date(r.getTime()-36e5).getDate()!==r.getDate()?`(${d}) ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(r)}`:new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit"}).format(r);if(h<26784e5)return`${d} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(r)}`;{const t=new Date(r.getTime()+864e5);return r.getMonth()!==t.getMonth()?`${d} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric",year:"2-digit"}).format(r)}`:`${d} | ${new Intl.DateTimeFormat(void 0,{day:"numeric",month:"numeric"}).format(r)}`}},style:{fontSize:"12px",fontFamily:"var(--paper-font-body1_-_font-family)"}},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:[{labels:{formatter:t=>`${t.toFixed(0)}`,style:{fontSize:"11px",fontFamily:"var(--paper-font-body1_-_font-family)"},offsetX:-5},min:0,max:35,tickAmount:10,axisBorder:{show:!1},axisTicks:{show:!1}},{opposite:!0,labels:{formatter:t=>`${t.toFixed(0)}`,style:{fontSize:"11px",fontFamily:"var(--paper-font-body1_-_font-family)"},offsetX:5},min:0,max:100,floating:!0,tickAmount:10,axisBorder:{show:!1},axisTicks:{show:!1}}],stroke:{curve:"straight",width:Array(20).fill(2),dashArray:Array(20).fill(0)},colors:[],tooltip:{enabled:!0,shared:!0,intersect:!1,followCursor:!1,custom:function({series:t,dataPointIndex:e,w:i}){var n;try{const a=null===(n=i.globals.seriesX[0])||void 0===n?void 0:n[e],o=new Date(null!=a?a:NaN),s=!isNaN(o.getTime());let r=0;if(s&&window.startTimestamp){const t=window.startTimestamp<1e12?1e3*window.startTimestamp:window.startTimestamp,e=new Date(t);if(!isNaN(e.getTime())){const t=new Date(e);t.setHours(0,0,0,0),r=Math.floor((o.getTime()-t.getTime())/864e5)+1}}const l=s?new Intl.DateTimeFormat(void 0,{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(o):"",d=r>0?`<strong>Tag ${r}</strong> - ${l}`:l,c=(i.config.series?i.config.series.filter(((t,e)=>e%2==1)).map(((t,e)=>{const n=2*e;return{name:t.name,unit:i.config.series[n].unit||"",color:i.config.colors[n],index:n}})):[]).map((e=>{var n,o,s,r,l;const d=function(t,e){if(!t||0===t.length||isNaN(e))return-1;let i=-1;for(let n=0;n<t.length&&t[n]<=e;n++)i=n;return i}(i.globals.seriesX[e.index+1],a),c=-1===d||null===(o=null===(n=i.globals.seriesRangeStart)||void 0===n?void 0:n[e.index])||void 0===o?void 0:o[d],h=-1===d||null===(r=null===(s=i.globals.seriesRangeEnd)||void 0===s?void 0:s[e.index])||void 0===r?void 0:r[d],u=null==c||null==h?void 0:{min:c,max:h},p=-1===d||null===(l=t[e.index+1])||void 0===l?void 0:l[d];return`<div class="tooltip-sensor-name" style="color: ${e.color}">${e.name}:</div><div class="tooltip-range">${u?`${Number(u.min).toFixed(0)} - ${Number(u.max).toFixed(0)}`:"-"}</div><div class="tooltip-mean">${null==p?"-":`${Number(p).toFixed(1)}${e.unit}`}</div>`})).join("");return`\n                    <div class="tooltip-container">\n                        <div class="tooltip-header">${d}</div>\n                        <div class="tooltip-content">${c}</div>\n                    </div>\n                `}catch(t){return console.error("Fehler beim Erstellen des Tooltips:",t),'<div class="tooltip-error">Fehler beim Laden der Daten</div>'}},fillSeriesColor:!1,theme:!1,onDatasetHover:{highlightDataSeries:!0}},dataLabels:{enabled:!1},markers:{size:[0,0],strokeWidth:2,hover:{size:3,sizeOffset:3}},fill:{type:["solid","solid"],opacity:[.24,1]},grid:{show:!1,padding:{top:0,right:0,bottom:0,left:0}},theme:{mode:"light"}};let h=class extends o.LitElement{constructor(){super(...arguments),this._data=[],this._dateRange=[new Date,new Date],this._lastUpdate=0,this._scriptLoaded=!1,this._prevRangeData=null,this._prevMeanData=null,this._prevMoistureRangeData=null,this._prevMoistureMeanData=null,this._isConnected=!1,this._initialized=!1,this._plantInfo=null,this._sensorTypes=[{id:"temperature",scale:1,yaxis:0,color:"#2E93fA"},{id:"conductivity",scale:.01,yaxis:0,color:"#00D2FF"},{id:"dli",scale:1,yaxis:0,color:"#FFB900"},{id:"health",scale:6,yaxis:0,color:"#FF4560",apiPath:"helpers.health"},{id:"water_consumption",scale:1,yaxis:0,color:"#775DD0"},{id:"fertilizer_consumption",scale:.01,yaxis:0,color:"#00D2FF"},{id:"power_consumption",scale:.01,yaxis:0,color:"#FEB019"},{id:"soil_moisture",scale:1,yaxis:1,color:"#00E396",apiPath:"moisture"},{id:"illuminance",scale:.01,yaxis:1,color:"#CED4DC"},{id:"humidity",scale:1,yaxis:1,color:"#008FFB"}],this._sensors=[]}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this._isConnected=!0,this.entityId&&this.hass&&(yield this._loadScripts(),yield this._loadFlatpickr(),this._initialized&&!this._chart&&(this._initDatePicker(),this._initChart()))}))}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this._chart&&(this._chart.destroy(),this._chart=void 0),this._picker&&(this._picker.destroy(),this._picker=void 0)}firstUpdated(){return a(this,void 0,void 0,(function*(){this.entityId&&this.hass&&(yield this._loadScripts(),yield this._loadFlatpickr(),this._initDatePicker(),this._plantInfo=yield this._getPlantInfo(),this._plantInfo?(this._updateSensorsFromPlantInfo(),yield this.updateDateRange(),this._initChart(),this.requestUpdate(),this._initialized=!0):console.warn("Keine Pflanzeninformationen verfügbar"))}))}_updateSensorsFromPlantInfo(){this._plantInfo&&(this._sensors=this._sensorTypes.map((t=>{const e=(t.apiPath||t.id).split(".");let i=this._plantInfo;for(const t of e){if(!i||"object"!=typeof i||!i[t]){i=null;break}i=i[t]}return"helpers"===e[0]&&i&&i.entity_id?{id:t.id,name:this.hass?d.TranslationUtils.translateSensor(this.hass,t.id):t.id,scale:t.scale,yaxis:t.yaxis,color:t.color,entityId:i.entity_id,icon:i.icon,unit:i.unit_of_measurement}:{id:t.id,name:this.hass?d.TranslationUtils.translateSensor(this.hass,t.id):t.id,scale:t.scale,yaxis:t.yaxis,color:t.color,entityId:(null==i?void 0:i.sensor)||null,icon:null==i?void 0:i.icon,unit:null==i?void 0:i.unit_of_measurement}})).filter((t=>null!==t.entityId)))}updateDateRange(){return a(this,void 0,void 0,(function*(){var t,e,i;if(!this.entityId||!this.hass)return;this.entityId.split(".")[1];const n=null===(i=null===(e=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===e?void 0:e.growth_phase)||void 0===i?void 0:i.entity_id,a=n?this.hass.states[n]:void 0;if(null==a?void 0:a.attributes){const t=["seeds_start","germination_start","rooting_start","growing_start","flowering_start","removed_date","harvested_date"],e=[];for(const i of t){const t=a.attributes[i];if(t){const i=new Date(t);isNaN(i.getTime())||e.push(i)}}if(e.length>0){const t=new Date(Math.min(...e.map((t=>t.getTime()))));this._dateRange=[t,new Date],this._picker&&this._picker.setDate(this._dateRange,!1)}}return this._dateRange}))}_loadScripts(){return a(this,void 0,void 0,(function*(){if(this._scriptLoaded||window.ApexCharts)return void(this._scriptLoaded=!0);const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.css",document.head.appendChild(t);const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.min.js";const i=new Promise((t=>{e.onload=t}));document.head.appendChild(e),yield i,this._scriptLoaded=!0}))}_loadFlatpickr(){return a(this,void 0,void 0,(function*(){if(window.flatpickr)return;const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css",document.head.appendChild(t);const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js";const i=new Promise((t=>{e.onload=t}));document.head.appendChild(e),yield i;const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/de.js";const a=new Promise((t=>{n.onload=t}));document.head.appendChild(n),yield a}))}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return a(this,void 0,void 0,(function*(){var i,n;if(e.updated.call(this,t),!this._scriptLoaded)return yield this._loadScripts(),void(yield this._loadFlatpickr());if(t.has("entityId"))this.updateGraphData();else if(t.has("hass")&&this.hass&&this.entityId){const e=t.get("hass");if(!e)return;const a=null===(n=null===(i=this._plantInfo)||void 0===i?void 0:i.temperature)||void 0===n?void 0:n.sensor;if(!a)return;const o=e.states[a],s=this.hass.states[a];(null==o?void 0:o.state)!==(null==s?void 0:s.state)&&this.updateGraphData()}}))}_initDatePicker(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#date-picker");e&&window.flatpickr&&(this._picker=window.flatpickr(e,{mode:"range",enableTime:!0,time_24hr:!0,locale:"de",defaultDate:this._dateRange,formatDate:t=>{const e=(this._dateRange[1].getTime()-this._dateRange[0].getTime())/864e5;return e>30?t.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"2-digit"}):e>2?t.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"}):t.toLocaleString(void 0,{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})},onChange:t=>{2===t.length&&(this._dateRange=[t[0],t[1]],this.updateGraphData())}}))}_getPlantInfo(){return a(this,void 0,void 0,(function*(){return this.entityId&&this.hass?l.PlantEntityUtils.getPlantInfo(this.hass,this.entityId):null}))}updateGraphData(){return a(this,arguments,void 0,(function*(t=!0){if(!this.entityId||!this.hass)return;this._plantInfo=yield this._getPlantInfo(),this._updateSensorsFromPlantInfo();const e=this._dateRange[0].toISOString(),i=this._dateRange[1].toISOString(),n=(this._dateRange[1].getTime()-this._dateRange[0].getTime())/864e5,a={},o=this._sensors.filter((t=>!t.entityId.startsWith("number.")&&!t.entityId.startsWith("input_number."))),s=this._sensors.filter((t=>t.entityId.startsWith("number.")||t.entityId.startsWith("input_number.")));let r="hour";n<=2&&(r="5minute");for(const t of s){const n=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${t.entityId}&end_time=${i}`);if(n&&Array.isArray(n)&&n.length>0){let e=n[0].filter((t=>t.state&&!isNaN(parseFloat(t.state))&&"unavailable"!==t.state&&"unknown"!==t.state)).map((t=>{const e=parseFloat(t.state),i=new Date(t.last_changed).getTime();return{start:new Date(i).toISOString(),end:new Date(i+6e4).toISOString(),mean:e,min:e,max:e,sum:e}}));e=this._groupHistoryData(e,r),e.length>0&&(a[t.entityId]=e)}}if(o.length>0){const t=o.map((t=>t.entityId));let s=null;n<=2&&(s=yield this.hass.callWS({type:"recorder/statistics_during_period",start_time:e,end_time:i,statistic_ids:t,period:"5minute"}),s&&0!==Object.keys(s).length&&Object.values(s).some((t=>t&&t.length>0))||(s=null)),s||(s=yield this.hass.callWS({type:"recorder/statistics_during_period",start_time:e,end_time:i,statistic_ids:t,period:"hour"})),s&&Object.assign(a,s)}const l=[];if(this._sensors.forEach((t=>{const e=t.entityId;let i=[],n=[];if(a[e]&&a[e].length>0){const o=a[e],s=this._getScale(t.id),r=t=>null==t;if(o.length>50){const t=this._groupGraphData(o,s);i=t.rangeData,n=t.meanData}else{const t=o.slice().sort(((t,e)=>new Date(t.start).getTime()-new Date(e.start).getTime()));i=t.map((t=>({x:new Date(t.start).getTime(),y:r(t.min)||r(t.max)?[null,null]:[t.min*s,t.max*s]}))),n=t.map((t=>({x:new Date(t.start).getTime(),y:r(t.mean)?null:t.mean*s})))}"health"===t.id?(i=this._forwardFill(i),n=this._forwardFill(n)):(i=this._insertGapMarkers(i,!0),n=this._insertGapMarkers(n,!1))}l.push({rangeData:i,meanData:n})})),this._chart){const e=this._sensors.map(((t,e)=>[{name:`${t.name}bereich`,type:"rangeArea",data:l[e].rangeData,yAxisIndex:t.yaxis,unit:t.unit},{name:t.name,type:"line",data:l[e].meanData,yAxisIndex:t.yaxis,unit:t.unit}])).flat();this._chart.updateSeries(e,t)}this._lastUpdate=Date.now()}))}_getSeriesName(t,e){const i=this.hass?d.TranslationUtils.translateSensor(this.hass,t):t,n=this.hass?d.TranslationUtils.translateUI(this.hass,"tooltip_range"):"Bereich";return e?`${i}${n}`:i}_groupGraphData(t,e=1){if(0===t.length)return{rangeData:[],meanData:[]};const i=t.slice().sort(((t,e)=>new Date(t.start).getTime()-new Date(e.start).getTime())),n=i.map((t=>new Date(t.start).getTime())),a=[];if(n.length>=3){const t=[];for(let e=1;e<n.length;e++)t.push(n[e]-n[e-1]);t.sort(((t,e)=>t-e));const e=t[Math.floor(t.length/2)],i=Math.max(3*e,6e5);for(let t=1;t<n.length;t++)n[t]-n[t-1]>i&&a.push({from:n[t-1],to:n[t]})}const o=n[0],s=(n[n.length-1]-o)/50,r=[];for(let t=0;t<50;t++)r.push({xValues:[],min:1/0,max:-1/0,sum:0,count:0});i.forEach((t=>{const i=new Date(t.start).getTime();let n=Math.floor((i-o)/s);n>=50&&(n=49);const a=r[n];a.xValues.push(i),null!==t.min&&void 0!==t.min&&(a.min=Math.min(a.min,t.min*e)),null!==t.max&&void 0!==t.max&&(a.max=Math.max(a.max,t.max*e)),null!==t.mean&&void 0!==t.mean&&(a.sum+=t.mean*e,a.count++)}));const l=[],d=[];return r.forEach(((t,e)=>{const i=t.xValues.length>0?t.xValues.reduce(((t,e)=>t+e),0)/t.xValues.length:o+(e+.5)*s,n=a.some((t=>i>t.from&&i<t.to)),r=!n&&t.min!==1/0&&t.max!==-1/0,c=!n&&t.count>0;l.push({x:i,y:r?[t.min,t.max]:[null,null]}),d.push({x:i,y:c?t.sum/t.count:null})})),{rangeData:l,meanData:d}}_insertGapMarkers(t,e){if(t.length<3)return t;const i=[];for(let e=1;e<t.length;e++)i.push(t[e].x-t[e-1].x);const n=i.slice().sort(((t,e)=>t-e)),a=1.4*n[Math.floor(n.length/2)],o=e?[null,null]:null,s=[];for(let e=0;e<t.length;e++)if(s.push(t[e]),e<t.length-1){const i=t[e+1].x-t[e].x;if(i>a){const n=t[e].x+i/2;s.push({x:n,y:o})}}return s}_forwardFill(t){let e=null;return t.map((t=>null===t.y||void 0===t.y||Array.isArray(t.y)&&(null===t.y[0]||void 0===t.y[0])?null===e?t:Object.assign(Object.assign({},t),{y:e}):(e=t.y,t)))}_getScale(t){return{temperature:1,conductivity:.01,dli:1,health:1,water_consumption:1,fertilizer_consumption:.01,power_consumption:.01,soil_moisture:1,illuminance:.01,humidity:1}[t]||1}_initChart(){return a(this,void 0,void 0,(function*(){var t,i,n,a,o;if(!window.ApexCharts)return void console.warn("ApexCharts ist noch nicht geladen");yield new Promise((t=>requestAnimationFrame(t)));const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#chart");if(!s)return void console.warn("Chart Container nicht gefunden");if(0===s.clientWidth)return void setTimeout((()=>this._initChart()),100);if(this._chart){try{this._chart.destroy()}catch(t){console.warn("Fehler beim Zerstören des alten Charts:",t)}this._chart=void 0}if((null===(i=this.entityId)||void 0===i?void 0:i.split(".")[1])&&this.hass){const t=null===(o=null===(a=null===(n=this._plantInfo)||void 0===n?void 0:n.helpers)||void 0===a?void 0:a.growth_phase)||void 0===o?void 0:o.entity_id,e=t?this.hass.states[t]:void 0;if(null==e?void 0:e.attributes){const t=["seeds","germination","rooting","growing","flowering","removed","harvested"],i=[];for(const n of t){const t=e.attributes[`${"removed"===n||"harvested"===n?n:n+"_start"}`];if(t){const e=new Date(t);isNaN(e.getTime())||i.push(e)}}i.length>0&&c(new Date(Math.min(...i.map((t=>t.getTime())))).getTime())}}const r=[],l=[];for(const t of this._sensors){r.push({name:`${t.name}bereich`,type:"rangeArea",data:[],yAxisIndex:t.yaxis,unit:t.unit}),r.push({name:t.name,type:"line",data:[],yAxisIndex:t.yaxis,unit:t.unit});const e=t.color||"#777777";l.push(e,e)}const d=Object.assign(Object.assign({},e.chartOptions),{series:r,colors:l,chart:Object.assign(Object.assign({},e.chartOptions.chart),{events:{zoomed:(t,{xaxis:e})=>{e&&console.debug("Zoomed event triggered with xaxis:",e)},beforeZoom:(t,{xaxis:e})=>{if(!e||!window.startTimestamp)return;let i=e.min,n=e.max;i<window.startTimestamp&&(i=window.startTimestamp);const a=(new Date).getTime();n>a&&(n=a);const o=new Date(i),s=new Date(n);return isNaN(o.getTime())||isNaN(s.getTime())?(console.warn("Ungültige Datumswerte beim Zoom:",e),{xaxis:{min:i,max:n}}):(this._dateRange=[o,s],this._picker&&this._picker.setDate(this._dateRange,!1),this.updateGraphData(!1),{xaxis:{min:i,max:n}})},beforeResetZoom:()=>{var t,e,i,n;if(this.entityId&&this.hass)try{this.entityId.split(".")[1];const a=null===(i=null===(e=null===(t=this._plantInfo)||void 0===t?void 0:t.helpers)||void 0===e?void 0:e.growth_phase)||void 0===i?void 0:i.entity_id,o=a?null===(n=this.hass)||void 0===n?void 0:n.states[a]:void 0;if(!(null==o?void 0:o.attributes))return;const s=["seeds","germination","rooting","growing","flowering","removed","harvested"],r=[];for(const t of s){const e=o.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const t=new Date(e);isNaN(t.getTime())||r.push(t)}}if(r.length>0){const t=new Date(Math.min(...r.map((t=>t.getTime())))),e=new Date;return this._dateRange=[t,e],this._picker&&this._picker.setDate(this._dateRange,!1),this.updateGraphData(!1),{xaxis:{min:t.getTime(),max:e.getTime()}}}}catch(t){console.warn("Fehler beim Reset-Zoom:",t)}}}})});try{this._chart=new window.ApexCharts(s,d),yield this._chart.render(),this.updateGraphData()}catch(t){console.error("Fehler bei der Chart-Initialisierung:",t),this._chart=void 0}}))}render(){return this.entityId&&this.hass?o.html`
            <div class="graph-container">
                <div class="date-picker-container">
                    <input type="text" id="date-picker" readonly>
                </div>
                <div id="chart"></div>
                
                ${this._plantInfo&&this._sensors.length>0?o.html`
                <div class="custom-legend">
                    ${this._sensors.map(((t,e)=>o.html`
                        <div class="legend-item" @click=${()=>this._toggleSeries(2*e)}>
                            <ha-icon icon="${t.icon||""}" class="legend-marker"></ha-icon>
                            <span class="legend-text">${this._getSeriesName(t.id,!1)}</span>
                        </div>
                    `))}
                </div>
                `:o.html``}
            </div>
        `:o.html``}_toggleSeries(t){if(this._chart&&this.shadowRoot)try{const e=this.shadowRoot.querySelector(`.legend-item:nth-child(${Math.floor(t/2)+1})`);if(!e)return void console.warn("Legend-Item nicht gefunden bei Index:",t);if(e.classList.toggle("inactive"),this._chart&&this._chart.w&&this._chart.w.globals&&this._chart.w.globals.initialSeries){const e=this._chart.w.globals.initialSeries;if(!e||e.length<=t+1)return void console.warn("Serien nicht gefunden:",t);this._chart.toggleSeries(e[t].name),this._chart.toggleSeries(e[t+1].name)}}catch(t){console.error("Fehler beim Umschalten der Serien:",t)}}static get styles(){return r.graphStyles}_groupHistoryData(t,e){if(0===t.length)return[];const i={},n="5minute"===e?3e5:36e5;return t.forEach((t=>{const e=new Date(t.start).getTime(),a=(Math.floor(e/n)*n).toString();i[a]||(i[a]=[]),i[a].push(t)})),Object.entries(i).map((([t,e])=>{const i=Math.min(...e.map((t=>t.min))),a=Math.max(...e.map((t=>t.max))),o=e.reduce(((t,e)=>t+e.mean),0),s=o/e.length;return{start:new Date(parseInt(t)).toISOString(),end:new Date(parseInt(t)+n).toISOString(),mean:s,min:i,max:a,sum:o}})).sort(((t,e)=>new Date(t.start).getTime()-new Date(e.start).getTime()))}};e.FlowerGraph=h,e.FlowerGraph=h=n([(0,s.customElement)("flower-graph")],h)},1261:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerHistory=e.EVENT_TYPES=void 0;const o=i(4437),s=i(2924),r=i(4356),l=i(4302),d=i(4507),c=i(4139),h=i(8063),u=i(2413),p=120,m=60,g=207,_=90,v=280,f=70,y=45,b=100,w=175,x=70,k=330,$=80,S=207,I=90;e.EVENT_TYPES={PHASE:"phase",AREA:"area",POT:"pot-size",TREATMENT:"treatment",IMAGE:"image",JOURNAL:"journal"};const E="phase",T="area",C="pot-size",D="treatment",P="journal";let M=class extends o.LitElement{constructor(){super(...arguments),this.events=[],this._imageUrls=[],this._showGallery=!1,this._selectedImageIndex=null,this._expandedJournalIds=new Set,this._plantingDate=null,this._addMenuOpen=!1,this._selectedAddAction=null,this._newEntryValue="",this._newEntryDate=(new Date).toISOString().split("T")[0],this._addingEntry=!1,this._newEntryAdded=!1}_showMoreInfo(t){(0,r.fireEvent)(this,"hass-more-info",{entityId:t})}connectedCallback(){super.connectedCallback(),this._updateEvents()}updated(t){(t.has("entityId")||t.has("hass"))&&this._updateEvents()}_updateEvents(){return a(this,void 0,void 0,(function*(){if(!this.entityId||!this.hass)return;const t=this.entityId.split(".")[1];this._plantingDate=yield this._getPlantingDate(),this.events=yield this._collectEvents(t)}))}_getPlantingDate(){return a(this,void 0,void 0,(function*(){var t;if(!this.entityId||!this.hass)return null;let e;try{e=yield h.PlantEntityUtils.getPlantInfo(this.hass,this.entityId)}catch(t){return null}const i=null===(t=((null==e?void 0:e.helpers)||{}).growth_phase)||void 0===t?void 0:t.entity_id;if(!i)return null;const n=this.hass.states[i];if(!(null==n?void 0:n.attributes))return null;const a=["seeds","germination","rooting","growing","flowering","removed","harvested"],o=[];for(const t of a){const e=n.attributes[`${"removed"===t||"harvested"===t?t:t+"_start"}`];if(e){const t=new Date(e);isNaN(t.getTime())||o.push(t)}}return o.length>0?new Date(Math.min(...o.map((t=>t.getTime())))):null}))}_collectEvents(t){return a(this,void 0,void 0,(function*(){var i,n,a,o,s,r,l;if(!this.hass)return[];const c=[],S=this.hass.states[`plant.${t}`];if(!S)return[];let I;try{I=yield h.PlantEntityUtils.getPlantInfo(this.hass,`plant.${t}`)}catch(t){return console.warn("Fehler beim Laden der Pflanzen-Info:"),[]}const E=(null==I?void 0:I.helpers)||{},T=this.historyGroups||Object.values(e.EVENT_TYPES);if(T.includes(e.EVENT_TYPES.PHASE)&&(null===(i=E.growth_phase)||void 0===i?void 0:i.entity_id)){const t=E.growth_phase.entity_id,e=this.hass.states[t];if(e){const t=["seeds","germination","rooting","growing","flowering","removed","harvested"],i=[];for(const n of t){const a=null==e?void 0:e.attributes[`${"removed"===n||"harvested"===n?n:n+"_start"}`];if(a){const e={date:new Date(a),type:`phase-${n}`,label:u.TranslationUtils.translateGrowthPhase(this.hass,n),description:`${u.TranslationUtils.translateGrowthPhase(this.hass,n)} ${u.TranslationUtils.translateHistory(this.hass,"phase_started")} ${new Date(a).toLocaleDateString()}`};if("removed"===n)e.style="display: none;";else if("harvested"===n)e.style=`background-color: hsl(${p}, 70%, 45%);`;else{const i=t.filter((t=>"removed"!==t&&"harvested"!==t)),a=i.indexOf(n),o=1===i.length?55:55-a/Math.max(1,i.length-1)*25;e.style=`background-color: hsl(${p}, ${m}%, ${o}%)`}i.push(e)}}c.push(...i)}}if(T.includes(e.EVENT_TYPES.IMAGE)){const e=yield d.FlowerGallery.getImagesWithDates(this.hass,`plant.${t}`,I);this._imageUrls=e.map((t=>t.url));const i=e.map(((t,e)=>({date:t.date,type:"image",label:u.TranslationUtils.translateHistory(this.hass,"photo"),description:`${u.TranslationUtils.translateHistory(this.hass,"image_taken")} ${t.date.toLocaleDateString()}`,style:`background-color: hsl(${w}, ${x}%, 45%);`,data:{imageIndex:e,url:t.url}})));c.push(...i)}if(T.includes(e.EVENT_TYPES.POT)&&(null===(n=E.pot_size)||void 0===n?void 0:n.entity_id))try{const t=(null===(a=c[0])||void 0===a?void 0:a.date.toISOString())||(new Date).toISOString(),e=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${E.pot_size.entity_id}&end_time=${e}`);if(i&&Array.isArray(i)&&i.length>0){let t=null;const e=[],n=i[0];for(let i=0;i<n.length;i++){const a=n[i];a.state&&!isNaN(parseFloat(a.state))&&"unavailable"!==a.state&&"unknown"!==a.state&&(null!==t&&a.state===t||(e.push({date:new Date(a.last_changed),type:"pot-size",label:`${a.state}L`,description:`${u.TranslationUtils.translateHistory(this.hass,"pot_size_changed")} ${a.state}L ${new Date(a.last_changed).toLocaleDateString()}`}),t=a.state))}e.forEach(((t,e)=>{const i=65-10*e;t.style=`background-color: hsl(${g}, ${_}%, ${i}%)`})),c.push(...e)}}catch(t){}if(T.includes(e.EVENT_TYPES.AREA)&&S){const t=((null===(o=null==S?void 0:S.attributes)||void 0===o?void 0:o.area_history)||[]).map((t=>({date:new Date(t.date),type:"area-moved",label:t.area,description:`${u.TranslationUtils.translateHistory(this.hass,"moved_to")} ${t.area} ${new Date(t.date).toLocaleDateString()}`})));t.forEach(((t,e)=>{const i=65-10*e;t.style=`background-color: hsl(${v}, ${f}%, ${i}%)`})),c.push(...t)}if(T.includes(e.EVENT_TYPES.TREATMENT)&&(null===(s=E.treatment)||void 0===s?void 0:s.entity_id))try{const t=(null===(r=c[0])||void 0===r?void 0:r.date.toISOString())||(new Date).toISOString(),e=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${E.treatment.entity_id}&end_time=${e}`);if(i&&Array.isArray(i)&&i.length>0){const t=[],e=i[0];for(let i=0;i<e.length;i++){const n=e[i];n.state&&"unavailable"!==n.state&&"unknown"!==n.state&&"none"!==n.state&&t.push({date:new Date(n.last_changed),type:"treatment",label:u.TranslationUtils.translateTreatment(this.hass,n.state),description:`${u.TranslationUtils.translateHistory(this.hass,"treatment")}: ${u.TranslationUtils.translateTreatment(this.hass,n.state)} ${new Date(n.last_changed).toLocaleDateString()}`,data:{originalValue:n.state}})}t.forEach(((t,e)=>{const i=Math.max(80-8*e,0);t.style=`background-color: hsl(${y}, ${b}%, ${i}%);`})),c.push(...t)}}catch(t){}if(T.includes(e.EVENT_TYPES.JOURNAL)){const t=null===(l=E.journal)||void 0===l?void 0:l.entity_id;if(t)try{const e=new Date((new Date).setMonth((new Date).getMonth()-6)).toISOString(),i=(new Date).toISOString(),n=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${t}&end_time=${i}`);if(n&&Array.isArray(n)&&n.length>0){const t=n[0];let e="";for(let i=0;i<t.length;i++){const n=t[i];n.state&&"unavailable"!==n.state&&"unknown"!==n.state&&n.state!==e&&(c.push({date:new Date(n.last_changed),type:"journal",label:u.TranslationUtils.translateHistory(this.hass,"journal"),description:n.state,style:`background-color: hsl(${k}, ${$}%, 45%);`}),e=n.state)}}}catch(t){}}return c.sort(((t,e)=>e.date.getTime()-t.date.getTime()))}))}_handleImageClick(t){this._selectedImageIndex=t,this._showGallery=!0}_animateElement(t,e,i){if(t)if(e){t.classList.remove("closing","expanded"),t.style.height="0",t.offsetHeight;const e=t.scrollHeight;t.style.height=`${e}px`,t.classList.add("expanded"),i&&setTimeout(i,300)}else t.style.height=`${t.scrollHeight}px`,t.offsetHeight,t.classList.remove("expanded"),t.classList.add("closing"),setTimeout((()=>{t.classList.remove("closing"),t.style.height="0",i&&i()}),300)}_toggleJournalExpand(t){var e;const i=new Set(this._expandedJournalIds),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#journal-${t}`);i.has(t)?this._animateElement(n,!1,(()=>{i.delete(t),this._expandedJournalIds=i})):(i.add(t),this._expandedJournalIds=i,setTimeout((()=>{var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#journal-${t}`);this._animateElement(i,!0)}),10))}_toggleAddMenu(){var t,e,i,n;if(null!==this._selectedAddAction){const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".form-content"),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-header");i&&i.classList.remove("visible"),n&&n.classList.remove("visible"),setTimeout((()=>{this._selectedAddAction=null,this._newEntryValue="",this._addMenuOpen=!1,this.requestUpdate()}),300)}else if(this._addMenuOpen=!this._addMenuOpen,this._newEntryValue="",this._addMenuOpen)this.requestUpdate(),setTimeout((()=>{var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-menu-container"),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-menu-options");if(i&&n){const t=n.scrollHeight;i.style.height=`${t}px`,setTimeout((()=>{n.classList.add("visible")}),50)}}),10);else{const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".add-menu-container"),e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".add-menu-options");e&&e.classList.remove("visible"),t&&(t.style.height="0")}}_selectAddAction(t){var e,i;this._selectedAddAction=t,this._newEntryValue="";const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".add-option"),a=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(`.add-option[data-action="${t}"]`);n&&a&&(n.forEach((t=>{t!==a?t.classList.add("fade-out"):t.classList.add("selected")})),setTimeout((()=>{a.classList.add("move-to-header"),setTimeout((()=>{this.requestUpdate(),setTimeout((()=>{var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-header"),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".form-content");if(i&&i.classList.add("visible"),n){n.classList.add("visible");const t=n.querySelector("input, select, textarea");t&&t.focus()}}),50)}),300)}),300))}_addNewEntry(){return a(this,void 0,void 0,(function*(){var t,e,i,n,a;if(this.hass&&this.entityId&&this._selectedAddAction&&this._newEntryValue){this._addingEntry=!0;try{const o=yield h.PlantEntityUtils.getPlantInfo(this.hass,this.entityId);if(!o)return void(this._addingEntry=!1);const s=o.helpers||{},r=null===(t=s.growth_phase)||void 0===t?void 0:t.entity_id,l=null===(e=s.pot_size)||void 0===e?void 0:e.entity_id,d=null===(i=s.treatment)||void 0===i?void 0:i.entity_id,c=null===(n=s.journal)||void 0===n?void 0:n.entity_id;switch(this._selectedAddAction){case E:{if(!r)break;yield this.hass.callService("select","select_option",{entity_id:r,option:this._newEntryValue});const t="removed"===this._newEntryValue||"harvested"===this._newEntryValue?this._newEntryValue:`${this._newEntryValue}_beginn`;yield this.hass.callService("homeassistant","update_entity_attribute",{entity_id:r,attribute:t,value:(new Date).toISOString().split("T")[0]});break}case T:{const t=this._newEntryValue,e="-"===t?"":null===(a=Object.entries(this.hass.areas||{}).find((([,e])=>e.name===t)))||void 0===a?void 0:a[0],i=this.hass.entities[this.entityId];(null==i?void 0:i.device_id)&&(yield this.hass.callService("plant","move_to_area",{device_id:i.device_id,area_id:e||""}));break}case C:if(!l)break;yield this.hass.callService("number","set_value",{entity_id:l,value:parseFloat(this._newEntryValue)});break;case D:if(!d)break;yield this.hass.callService("select","select_option",{entity_id:d,option:this._newEntryValue});break;case P:if(!c)break;yield this.hass.callService("text","set_value",{entity_id:c,value:this._newEntryValue})}this._newEntryAdded=!0,setTimeout((()=>{var t,e;this._newEntryAdded=!1,this._addingEntry=!1;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".form-content"),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-header");i&&i.classList.remove("visible"),n&&n.classList.remove("visible"),setTimeout((()=>{this._selectedAddAction=null,this._newEntryValue="",this._addMenuOpen=!1,this._updateEvents()}),300)}),1e3)}catch(t){this._addingEntry=!1}}}))}_handleKeyDown(t){t.stopPropagation(),"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this._addNewEntry())}_getIconForAction(t){if(!t)return"";switch(t){case E:return"mdi:sprout";case T:return"mdi:map-marker";case C:return"mdi:cup";case D:return"mdi:medical-bag";case P:return"mdi:notebook";default:return""}}_getColorForAction(t){if(!t)return"";switch(t){case E:return`${p}, ${m}%, 45%`;case T:return`${v}, ${f}%, 45%`;case C:return`${g}, ${_}%, 45%`;case D:return`${y}, ${b}%, 45%`;case P:return`${k}, ${$}%, 45%`;default:return""}}_getLabelForAction(t){if(!t||!this.hass)return"";switch(t){case E:return u.TranslationUtils.translateHistory(this.hass,"growth_phase");case T:return u.TranslationUtils.translateHistory(this.hass,"area");case C:return u.TranslationUtils.translateHistory(this.hass,"pot_size");case D:return u.TranslationUtils.translateHistory(this.hass,"treatment");case P:return u.TranslationUtils.translateHistory(this.hass,"journal");default:return""}}_renderFormForAction(t){var e;if(!t)return o.html``;const i=t=>t.stopPropagation(),n=t=>{t.stopPropagation();const e=t.target.value;this._newEntryValue=e,e&&this._addNewEntry()},a=t=>{t.stopPropagation(),this._newEntryValue=t.target.value},s=t=>{t.stopPropagation(),"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this._newEntryValue&&this._addNewEntry())},r=t=>{t.stopPropagation(),this._newEntryValue&&this._addNewEntry()};switch(t){case E:return o.html`
                    <div class="form-field">
                        <select id="phase-select" 
                            @click=${i}
                            @change=${n}
                        >
                            <option value="" disabled selected>${u.TranslationUtils.translateHistory(this.hass,"please_select")}</option>
                            <option value="seed">${u.TranslationUtils.translateGrowthPhase(this.hass,"seed")}</option>
                            <option value="germination">${u.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                            <option value="rooting">${u.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                            <option value="growth">${u.TranslationUtils.translateGrowthPhase(this.hass,"growth")}</option>
                            <option value="flowering">${u.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                            <option value="removed">${u.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
                            <option value="harvested">${u.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
                        </select>
                    </div>
                `;case T:{const t=Object.values((null===(e=this.hass)||void 0===e?void 0:e.areas)||{}).map((t=>t.name)).sort(((t,e)=>t.localeCompare(e,"de")));return o.html`
                    <div class="form-field">
                        <select id="area-select" 
                            @click=${i}
                            @change=${n}
                        >
                            <option value="" disabled selected>${u.TranslationUtils.translateHistory(this.hass,"please_select")}</option>
                            <option value="-">-</option>
                            ${t.map((t=>o.html`<option value="${t}">${t}</option>`))}
                        </select>
                    </div>
                `}case C:return o.html`
                    <div class="form-field">
                        <input type="number" 
                            id="pot-input" 
                            min="0.1" 
                            step="0.1" 
                            placeholder="${u.TranslationUtils.translateHistory(this.hass,"pot_size_placeholder")}" 
                            @click=${i}
                            @input=${a}
                            @keydown=${s}
                            @blur=${r}
                        >
                    </div>
                `;case D:return o.html`
                    <div class="form-field">
                        <select id="treatment-select" 
                            @click=${i}
                            @change=${n}
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
                            @input=${a}
                        ></textarea>
                    </div>
                    <div class="journal-submit">
                        <ha-icon-button 
                            icon="mdi:send" 
                            @click=${t=>{t.stopPropagation(),this._addNewEntry()}}
                            ?disabled=${!this._newEntryValue}
                            title="${u.TranslationUtils.translateUI(this.hass,"confirm")}"
                        ></ha-icon-button>
                    </div>
                `;default:return o.html``}}render(){if(!this.hass||!this.entityId)return o.html``;const t=this.historyGroups||Object.values(e.EVENT_TYPES),i="right"===this.linePosition?"timeline-right":"";return o.html`
            <div class="history-container">
                <div class="vertical-timeline ${i}">
                    <div class="timeline-line" style="background-color: hsl(${p}, ${m}%, 45%);"></div>
                    
                    <!-- Hinzufügen-Button am Anfang der Timeline -->
                    <div class="phase-item add-item" @click=${this._toggleAddMenu}>
                        <div class="phase-dot add-dot" style="background-color: hsl(${S}, ${I}%, 45%);">
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
                                        @click=${t=>{t.stopPropagation(),this._toggleAddMenu()}}
                                    ></ha-icon-button>
                                </div>
                                
                                <!-- Formular zum Hinzufügen des ausgewählten Eintrags -->
                                <div class="form-content" @click=${t=>t.stopPropagation()}>
                                    ${this._renderFormForAction(this._selectedAddAction)}
                                    
                                    ${this._selectedAddAction!==P&&this._selectedAddAction!==E&&this._selectedAddAction!==D&&this._selectedAddAction!==T&&this._selectedAddAction!==C?o.html`
                                        <div class="form-actions">
                                            <ha-icon-button 
                                                icon="mdi:check" 
                                                @click=${t=>{t.stopPropagation(),this._addNewEntry()}}
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
                                        ${t.includes(e.EVENT_TYPES.PHASE)?o.html`
                                            <div class="add-option" data-action="${E}" @click=${t=>{t.stopPropagation(),this._selectAddAction(E)}}>
                                                <ha-icon icon="mdi:sprout" class="option-icon" style="color: hsl(${p}, ${m}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"growth_phase")}</span>
                                            </div>
                                        `:""}
                                        ${t.includes(e.EVENT_TYPES.AREA)?o.html`
                                            <div class="add-option" data-action="${T}" @click=${t=>{t.stopPropagation(),this._selectAddAction(T)}}>
                                                <ha-icon icon="mdi:map-marker" class="option-icon" style="color: hsl(${v}, ${f}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"area")}</span>
                                            </div>
                                        `:""}
                                        ${t.includes(e.EVENT_TYPES.POT)?o.html`
                                            <div class="add-option" data-action="${C}" @click=${t=>{t.stopPropagation(),this._selectAddAction(C)}}>
                                                <ha-icon icon="mdi:cup" class="option-icon" style="color: hsl(${g}, ${_}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"pot_size")}</span>
                                            </div>
                                        `:""}
                                        ${t.includes(e.EVENT_TYPES.TREATMENT)?o.html`
                                            <div class="add-option" data-action="${D}" @click=${t=>{t.stopPropagation(),this._selectAddAction(D)}}>
                                                <ha-icon icon="mdi:medical-bag" class="option-icon" style="color: hsl(${y}, ${b}%, 45%);"></ha-icon>
                                                <span>${u.TranslationUtils.translateHistory(this.hass,"treatment")}</span>
                                            </div>
                                        `:""}
                                        ${t.includes(e.EVENT_TYPES.JOURNAL)?o.html`
                                            <div class="add-option" data-action="${P}" @click=${t=>{t.stopPropagation(),this._selectAddAction(P)}}>
                                                <ha-icon icon="mdi:notebook" class="option-icon" style="color: hsl(${k}, ${$}%, 45%);"></ha-icon>
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
            ${this.events.map(((t,e)=>{var i,n,a;let s="",r="";const l=t.type.startsWith("phase-"),d="journal"===t.type,h=`event-${e}-${t.type}-${t.date.getTime()}`,u=this._expandedJournalIds.has(h);let S="";if(l){s=t.style||`background-color: hsl(${p}, ${m}%, 45%);`;const e=s.match(/background-color:\s*hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);if(e){const[,t,i,n]=e;S=`--milestone-color: hsla(${t}, ${i}%, ${n}%, 0.15)`}else S=`--milestone-color: hsla(${p}, ${m}%, 45%, 0.15)`;const n=t.type.split("-")[1],a=null===(i=this.entityId)||void 0===i?void 0:i.split(".")[1],o=a?this.hass.states[`plant.${a}`]:void 0;r=(0,c.getGrowthPhaseIcon)(n,this.hass,o)}else if("pot-size"===t.type)s=t.style||`background-color: hsl(${g}, ${_}%, 45%);`,r="mdi:cup";else if("area-moved"===t.type)s=t.style||`background-color: hsl(${v}, ${f}%, 45%);`,r="mdi:map-marker";else if("treatment"===t.type){s=t.style||`background-color: hsl(${y}, ${b}%, 45%);`;const e=null===(n=this.entityId)||void 0===n?void 0:n.split(".")[1],i=e?this.hass.states[`plant.${e}`]:void 0,o=(null===(a=t.data)||void 0===a?void 0:a.originalValue)||t.label;r=(0,c.getTreatmentIcon)(o,this.hass,i)}else"image"===t.type?(s=t.style||`background-color: hsl(${w}, ${x}%, 45%);`,r="mdi:camera"):d&&(s=t.style||`background-color: hsl(${k}, ${$}%, 45%);`,r="mdi:notebook");let I=new Date(t.date).toLocaleDateString();if(this._plantingDate&&t.date){const e=new Date(this._plantingDate);e.setHours(0,0,0,0);const i=Math.abs(new Date(t.date).getTime()-e.getTime());I=`${Math.ceil(i/864e5)} | ${I}`}return o.html`
                    <div class="phase-item ${l?"milestone":""}" @click=${()=>{var e;"image"===t.type&&void 0!==(null===(e=t.data)||void 0===e?void 0:e.imageIndex)?this._handleImageClick(t.data.imageIndex):d&&this._toggleJournalExpand(h)}}>
                        <div class="phase-dot ${l?"milestone":""}" style="${s}">
                            ${r?o.html`<ha-icon icon="${r}" class="dot-icon"></ha-icon>`:""}
                        </div>
                        <div class="phase-content ${l?"milestone":""}" style="${l?S:""}">
                            <div class="phase-header">
                                <div class="phase-name">${t.label}</div>
                                <div class="phase-date">${I}</div>
                            </div>
                            <div class="journal-container ${d&&u?"expanded":""}" id="journal-${h}" style="height: 0;">
                                <div class="phase-description">${t.description}</div>
                            </div>
                        </div>
                    </div>
                `}))}
        `}};e.FlowerHistory=M,M.styles=l.historyStyles,n([(0,s.property)()],M.prototype,"hass",void 0),n([(0,s.property)()],M.prototype,"entityId",void 0),n([(0,s.property)({type:Array})],M.prototype,"historyGroups",void 0),n([(0,s.property)({type:String})],M.prototype,"linePosition",void 0),n([(0,s.state)()],M.prototype,"events",void 0),n([(0,s.state)()],M.prototype,"_imageUrls",void 0),n([(0,s.state)()],M.prototype,"_showGallery",void 0),n([(0,s.state)()],M.prototype,"_selectedImageIndex",void 0),n([(0,s.state)()],M.prototype,"_expandedJournalIds",void 0),n([(0,s.state)()],M.prototype,"_plantingDate",void 0),n([(0,s.state)()],M.prototype,"_addMenuOpen",void 0),n([(0,s.state)()],M.prototype,"_selectedAddAction",void 0),n([(0,s.state)()],M.prototype,"_newEntryValue",void 0),n([(0,s.state)()],M.prototype,"_newEntryDate",void 0),n([(0,s.state)()],M.prototype,"_addingEntry",void 0),n([(0,s.state)()],M.prototype,"_newEntryAdded",void 0),e.FlowerHistory=M=n([(0,s.customElement)("flower-history")],M)},9242:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantCreateDialog=void 0;const o=i(4437),s=i(2924),r=i(2413),l=customElements.get("plant-create-dialog");class d extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0}}closeDialog(){this.dispatchEvent(new CustomEvent("dialog-closed"))}createPlant(t){return a(this,void 0,void 0,(function*(){if(t.preventDefault(),!this.hass)return;const e=new FormData(t.target),i={};e.forEach(((t,e)=>{""!==t&&"string"==typeof t&&(i[e]=t)}));try{const t=yield this.hass.callWS({type:"call_service",domain:"plant",service:"create_plant",service_data:i,return_response:!0});if(t&&t.response){const{entity_id:e,device_id:i}=t.response;e&&i&&(yield this._setPositionAndArea(e,i,this.position,this.areaId))}this.closeDialog()}catch(t){}}))}_setPositionAndArea(t,e,i,n){return a(this,void 0,void 0,(function*(){if(this.hass)try{if(this.dispatchEvent(new CustomEvent("plant-created",{bubbles:!0,composed:!0,detail:{entity_id:t,device_id:e,position:i,area_id:n}})),n){const t=n.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");yield this.hass.callService("plant","move_to_area",{device_id:[e],area_id:t})}}catch(t){}}))}render(){return this.hass?o.html`
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
                <option value="seed">${r.TranslationUtils.translateGrowthPhase(this.hass,"seed")}</option>
                <option value="germination">${r.TranslationUtils.translateGrowthPhase(this.hass,"germination")}</option>
                <option value="rooting" selected>${r.TranslationUtils.translateGrowthPhase(this.hass,"rooting")}</option>
                <option value="growth">${r.TranslationUtils.translateGrowthPhase(this.hass,"growth")}</option>
                <option value="flowering">${r.TranslationUtils.translateGrowthPhase(this.hass,"flowering")}</option>
                <option value="removed">${r.TranslationUtils.translateGrowthPhase(this.hass,"removed")}</option>
                <option value="harvested">${r.TranslationUtils.translateGrowthPhase(this.hass,"harvested")}</option>
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
    `}}n([(0,s.property)({attribute:!1})],d.prototype,"hass",void 0),n([(0,s.property)()],d.prototype,"position",void 0),n([(0,s.property)()],d.prototype,"areaId",void 0),l||customElements.define("plant-create-dialog",d),e.PlantCreateDialog=l?customElements.get("plant-create-dialog"):d},896:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantFlyoutMenu=void 0;const o=i(4437),s=i(2924),r=i(8063),l=i(9442),d=i(365);let c=class extends o.LitElement{constructor(){super(...arguments),this.position={x:0,y:0},this.targetPosition={x:0,y:0},this.isMobile=!1,this._searchQuery="",this._plants=[],this._filteredPlants=[],this._showCloneDialog=!1,this._cloneData={}}connectedCallback(){super.connectedCallback(),this._loadPlants()}_loadPlants(){return a(this,void 0,void 0,(function*(){if(!this.hass)return;const t=r.PlantEntityUtils.getPlantEntities(this.hass,"plant");this._plants=t,this._filteredPlants=t}))}_handleSearch(t){const e=t.target;this._searchQuery=e.value.toLowerCase(),this._searchQuery?this._filteredPlants=this._plants.filter((t=>{var e;return(null===(e=t.attributes.friendly_name)||void 0===e?void 0:e.toLowerCase().includes(this._searchQuery))||t.entity_id.toLowerCase().includes(this._searchQuery)})):this._filteredPlants=this._plants}_handleNewPlant(){this.dispatchEvent(new CustomEvent("new-plant-requested",{bubbles:!0,composed:!0,detail:{position:this.targetPosition,areaId:this.areaId}}))}_handleMovePlant(t){this.dispatchEvent(new CustomEvent("move-plant-requested",{bubbles:!0,composed:!0,detail:{plant:t,position:this.targetPosition}}))}_handleClonePlant(t){this._selectedPlantForClone=t,this._cloneData={name:`Clone of ${t.attributes.friendly_name||t.entity_id}`,temperature_sensor:"",moisture_sensor:"",conductivity_sensor:"",illuminance_sensor:"",humidity_sensor:"",power_consumption_sensor:"",ph_sensor:""},this._showCloneDialog=!0}_executeClone(){return a(this,void 0,void 0,(function*(){if(this.hass&&this._selectedPlantForClone)try{yield this.hass.callService("plant","clone_plant",Object.assign({source_entity_id:this._selectedPlantForClone.entity_id},this._cloneData)),this.dispatchEvent(new CustomEvent("plant-cloned",{bubbles:!0,composed:!0,detail:{source_entity_id:this._selectedPlantForClone.entity_id,position:this.position,areaId:this.areaId}})),this._closeCloneDialog(),this._closeMenu()}catch(t){console.error("Error cloning plant:",t)}}))}_closeCloneDialog(){this._showCloneDialog=!1,this._selectedPlantForClone=void 0,this._cloneData={}}_closeMenu(){this.dispatchEvent(new CustomEvent("menu-closed",{bubbles:!0,composed:!0}))}_handleOverlayClick(t){t.target===t.currentTarget&&this._closeMenu()}_getPlantArea(t){var e;if(!this.hass)return"";const i=l.FilterUtils.getAreaForEntity(this.hass,t.entity_id);if(!i)return"Kein Raum";const n=null===(e=this.hass.areas)||void 0===e?void 0:e[i];return(null==n?void 0:n.name)||i}render(){if(!this.hass)return o.html``;const t=this.isMobile?"":`\n      position: fixed;\n      left: ${this.position.x}px;\n      top: ${this.position.y}px;\n      transform: translate(-50%, -10px);\n    `;return o.html`
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
    `}_renderCloneDialog(){var t,e,i,n,a,s,r;return o.html`
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
                  ${Object.entries((null===(n=this.hass)||void 0===n?void 0:n.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"illuminance"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
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
                  ${Object.entries((null===(a=this.hass)||void 0===a?void 0:a.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"humidity"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
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
                  ${Object.entries((null===(s=this.hass)||void 0===s?void 0:s.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"energy"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
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
                  ${Object.entries((null===(r=this.hass)||void 0===r?void 0:r.states)||{}).filter((([t,e])=>{const i=e;return t.startsWith("sensor.")&&i.attributes&&"ph"===i.attributes.device_class})).map((([t,e])=>{const i=e;return o.html`<option value="${t}">${i.attributes.friendly_name||t}</option>`}))}
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
    `}};e.PlantFlyoutMenu=c,c.styles=d.plantFlyoutMenuStyles,n([(0,s.property)({attribute:!1})],c.prototype,"hass",void 0),n([(0,s.property)()],c.prototype,"position",void 0),n([(0,s.property)()],c.prototype,"targetPosition",void 0),n([(0,s.property)()],c.prototype,"areaId",void 0),n([(0,s.property)()],c.prototype,"isMobile",void 0),n([(0,s.state)()],c.prototype,"_searchQuery",void 0),n([(0,s.state)()],c.prototype,"_plants",void 0),n([(0,s.state)()],c.prototype,"_filteredPlants",void 0),n([(0,s.state)()],c.prototype,"_showCloneDialog",void 0),n([(0,s.state)()],c.prototype,"_selectedPlantForClone",void 0),n([(0,s.state)()],c.prototype,"_cloneData",void 0),e.PlantFlyoutMenu=c=n([(0,s.customElement)("plant-flyout-menu")],c)},9961:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SensorAssignment=void 0;const o=i(4437),s=i(2924),r=i(1294),l=i(7514);let d=class extends o.LitElement{constructor(){super(...arguments),this._sensorDevices=[],this._plantDevices=[],this._sensorInfo=new Map,this._entityToGroupId=new Map,this._lastHassStatesKey="",this._onPointerMove=t=>{var e;this._dragGhost&&(this._dragGhost.style.transform=`translate(${t.clientX-32}px, ${t.clientY-32}px)`);const i=this._deepElementFromPoint(t.clientX,t.clientY),n=null===(e=null==i?void 0:i.closest)||void 0===e?void 0:e.call(i,"[data-plant-entity]"),a=null==n?void 0:n.dataset.plantEntity;a!==this._dragOverPlantId&&(this._dragOverPlantId=a)},this._onPointerUp=()=>{var t;window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),null===(t=this._dragGhost)||void 0===t||t.remove(),this._dragGhost=void 0;const e=this._dragGroup,i=this._dragOverPlantId;this._dragGroup=void 0,this._dragGroupId=void 0,this._dragOverPlantId=void 0,e&&i&&this._assignDeviceToPlant(e,i)}}willUpdate(){var t;if(!this.hass)return;const e=Object.keys(this.hass.states).length+":"+Object.keys(null!==(t=this.hass.entities)&&void 0!==t?t:{}).length;if(e===this._lastHassStatesKey)return;this._lastHassStatesKey=e;const i=l.SensorAssignmentUtils.getPlantAndCycleDeviceIds(this.hass);this._sensorDevices=l.SensorAssignmentUtils.getSensorDevices(this.hass,i),this._plantDevices=l.SensorAssignmentUtils.getPlantDevices(this.hass),this._entityToGroupId=new Map;for(const t of this._sensorDevices)for(const e of Object.values(t.types))this._entityToGroupId.set(e,t.id);this._loadSensorInfo()}_loadSensorInfo(){return a(this,void 0,void 0,(function*(){if(!this.hass)return;const t=this.hass,e=yield Promise.all(this._plantDevices.map((e=>a(this,void 0,void 0,(function*(){const i=yield l.SensorAssignmentUtils.getPlantSensorInfo(t,e.entityId);return[e.entityId,i]})))));this._sensorInfo=new Map(e)}))}_onSensorPointerDown(t,e){void 0!==t.button&&0!==t.button||(t.preventDefault(),this._dragGroup=e,this._dragGroupId=e.id,this._createGhost(e,t.clientX,t.clientY),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp))}_createGhost(t,e,i){const n=document.createElement("div");n.style.cssText="\n            position: fixed; left: 0; top: 0; width: 64px; height: 64px;\n            border-radius: 50%; pointer-events: none; z-index: 9999;\n            border: 2px solid var(--primary-color, #03a9f4);\n            background-color: var(--card-background-color, #fff);\n            background-size: cover; background-position: center;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n            opacity: 0.85;\n        ",t.picture?n.style.backgroundImage=`url(${t.picture})`:n.innerHTML='<ha-icon icon="mdi:chip" style="--mdc-icon-size: 28px; display:flex; align-items:center; justify-content:center; height:100%; color: var(--secondary-text-color);"></ha-icon>',n.style.transform=`translate(${e-32}px, ${i-32}px)`,document.body.appendChild(n),this._dragGhost=n}_deepElementFromPoint(t,e){let i=document.elementFromPoint(t,e);for(;null==i?void 0:i.shadowRoot;){const n=i.shadowRoot.elementFromPoint(t,e);if(!n||n===i)break;i=n}return i}_assignDeviceToPlant(t,e){return a(this,void 0,void 0,(function*(){var i,n;if(!this.hass)return;const a=null!==(i=this._sensorInfo.get(e))&&void 0!==i?i:{};for(const[e,i]of Object.entries(t.types)){const t=null===(n=a[e])||void 0===n?void 0:n.meterEntityId;t&&(yield this.hass.callService("plant","replace_sensor",{meter_entity:t,new_sensor:i}))}yield this._loadSensorInfo()}))}_unassignType(t,e){return a(this,void 0,void 0,(function*(){var i,n;if(!this.hass)return;const a=null===(n=null===(i=this._sensorInfo.get(t))||void 0===i?void 0:i[e])||void 0===n?void 0:n.meterEntityId;a&&(yield this.hass.callService("plant","replace_sensor",{meter_entity:a}),yield this._loadSensorInfo())}))}_renderOrbitTile(t){const e=`width: ${2*t.radius+t.mainSize/2}px; height: ${2*t.radius+t.mainSize/2}px;`,i=`width: ${t.mainSize}px; height: ${t.mainSize}px;`,n=!1!==t.useGlobalPositions;return o.html`
            <div class="sa-tile-orbit" style="${e}">
                <div
                    class="sa-tile-main ${t.dragging?"sa-dragging":""}"
                    style="${i} ${t.picture?`background-image: url(${t.picture})`:""}"
                    @pointerdown="${t.onMainPointerDown}"
                >
                    ${t.picture?"":o.html`<ha-icon icon="${t.fallbackIcon}"></ha-icon>`}
                </div>
                ${t.satellites.map(((e,i)=>{const a=n?l.SENSOR_TYPES.findIndex((t=>t.key===e.typeKey)):i,s=n?l.SENSOR_TYPES.length:t.satellites.length,r=l.SensorAssignmentUtils.getSatellitePosition(a,s,t.radius);return o.html`
                        <div
                            class="sa-satellite ${e.active?"sa-active":""} ${e.onClick?"sa-clickable":""}"
                            style="transform: translate(${r.x}px, ${r.y}px); --sa-type-color: var(--sa-color-${e.typeKey})"
                            title="${e.typeKey}"
                            @click="${e.onClick}"
                        >
                            <ha-icon icon="${e.icon}"></ha-icon>
                        </div>
                    `}))}
            </div>
        `}_renderSensorDeviceTile(t){const e=Object.keys(t.types).map((t=>({typeKey:t,icon:l.SENSOR_TYPES.find((e=>e.key===t)).icon,active:!0})));return o.html`
            <div class="sa-tile">
                ${this._renderOrbitTile({picture:t.picture,fallbackIcon:t.isDevice?"mdi:chip":t.entityIcon||"mdi:help-circle-outline",satellites:e,mainSize:64,radius:40,dragging:this._dragGroupId===t.id,onMainPointerDown:e=>this._onSensorPointerDown(e,t),useGlobalPositions:!1})}
                <div class="sa-tile-name" title="${t.name}">${t.name}</div>
            </div>
        `}_renderDockedCopy(t,e,i){const n=Object.keys(t.types).map((e=>{var n;return{typeKey:e,icon:l.SENSOR_TYPES.find((t=>t.key===e)).icon,active:(null===(n=i[e])||void 0===n?void 0:n.source)===t.types[e]}}));return o.html`
            <div class="sa-docked-tile">
                ${this._renderOrbitTile({picture:t.picture,fallbackIcon:t.isDevice?"mdi:chip":t.entityIcon||"mdi:help-circle-outline",satellites:n,mainSize:40,radius:22})}
                <div class="sa-docked-name" title="${t.name}">${t.name}</div>
            </div>
        `}_renderPlantTile(t){var e,i;const n=null!==(e=this._sensorInfo.get(t.entityId))&&void 0!==e?e:{},a=new Set;for(const t of l.SENSOR_TYPES){const e=null===(i=n[t.key])||void 0===i?void 0:i.source;if(!e)continue;const o=this._entityToGroupId.get(e);o&&a.add(o)}const s=this._sensorDevices.filter((t=>a.has(t.id))),r=l.SENSOR_TYPES.map((e=>{var i;const a=!!(null===(i=n[e.key])||void 0===i?void 0:i.source);return{typeKey:e.key,icon:e.icon,active:a,onClick:a?()=>this._unassignType(t.entityId,e.key):void 0}}));return o.html`
            <div class="sa-tile" data-plant-entity="${t.entityId}">
                <div class="sa-plant-row ${this._dragOverPlantId===t.entityId?"sa-drop-target":""}">
                    ${this._renderOrbitTile({picture:t.picture,fallbackIcon:"mdi:sprout",satellites:r,mainSize:64,radius:40})}
                    <div class="sa-docked-row">
                        ${s.map((e=>this._renderDockedCopy(e,t.entityId,n)))}
                    </div>
                </div>
                <div class="sa-tile-name" title="${t.name}">${t.name}</div>
            </div>
        `}render(){if(!this.hass)return o.html``;const t=this._sensorDevices.filter((t=>t.isDevice)),e=this._sensorDevices.filter((t=>!t.isDevice));return o.html`
            <div class="sa-container">
                <div class="sa-column">
                    <div class="sa-column-title">Geräte</div>
                    <div class="sa-scroll-section">
                        <div class="sa-tiles">
                            ${t.length>0?t.map((t=>this._renderSensorDeviceTile(t))):o.html`<div class="sa-empty-hint">Keine passenden Geräte gefunden</div>`}
                        </div>
                    </div>
                    <div class="sa-section-divider"></div>
                    <div class="sa-column-title">Entitäten</div>
                    <div class="sa-scroll-section">
                        <div class="sa-tiles">
                            ${e.length>0?e.map((t=>this._renderSensorDeviceTile(t))):o.html`<div class="sa-empty-hint">Keine losen Entitäten gefunden</div>`}
                        </div>
                    </div>
                </div>
                <div class="sa-column">
                    <div class="sa-column-title">Pflanzen</div>
                    <div class="sa-scroll-section sa-scroll-section-tall">
                        <div class="sa-tiles sa-tiles-vertical">
                            ${this._plantDevices.length>0?this._plantDevices.map((t=>this._renderPlantTile(t))):o.html`<div class="sa-empty-hint">Keine Pflanzen gefunden</div>`}
                        </div>
                    </div>
                </div>
            </div>
        `}static get styles(){return r.sensorAssignmentStyles}};e.SensorAssignment=d,n([(0,s.property)({attribute:!1})],d.prototype,"hass",void 0),n([(0,s.state)()],d.prototype,"_sensorDevices",void 0),n([(0,s.state)()],d.prototype,"_plantDevices",void 0),n([(0,s.state)()],d.prototype,"_sensorInfo",void 0),n([(0,s.state)()],d.prototype,"_dragGroupId",void 0),n([(0,s.state)()],d.prototype,"_dragOverPlantId",void 0),e.SensorAssignment=d=n([(0,s.customElement)("sensor-assignment")],d)},6822:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FlowerTimeline=void 0;const o=i(4437),s=i(2924),r=i(4911),l=i(4507),d=i(8063),c=i(2413),h=120,u=60,p=207,m=90,g=280,_=70,v=45,f=100,y=175,b=70;let w=class extends o.LitElement{constructor(){super(...arguments),this.events=[],this.stateHistory=[],this._timelineWidth=500,this.labelOffsets={},this.markerOffsets={},this._showGallery=!1,this._hoveredImageIndex=null,this._hoveredEventIndex=null,this._lastUpdate=0,this._imageUrls=[],this._isLoading=!1}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".timeline-events");e&&(this._timelineWidth=e.getBoundingClientRect().width,this._resizeObserver=new ResizeObserver((t=>{for(const e of t)this._timelineWidth=e.contentRect.width,this.requestUpdate()})),this._resizeObserver.observe(e))}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect()}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){t.connectedCallback.call(this),yield this._updateTimelineData(),yield this._loadPlantInfo()}))}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return a(this,void 0,void 0,(function*(){e.updated.call(this,t),Date.now()-this._lastUpdate>2e3&&(yield this._updateTimelineData(),yield this._loadPlantInfo())}))}_updateTimelineData(){return a(this,void 0,void 0,(function*(){var t;if(this.entityId&&this.hass){const e=this.entityId.split(".")[1];this.events=yield this.collectTimelineEvents(e);try{const e=(null===(t=this.events[0])||void 0===t?void 0:t.date.toISOString())||(new Date).toISOString(),i=(new Date).toISOString(),n=yield this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${this.entityId}&end_time=${i}`);n&&Array.isArray(n)&&n.length>0&&(this.stateHistory=n[0])}catch(t){console.warn("Fehler beim Laden der Status-Historie:"),this.stateHistory=[]}this._lastUpdate=Date.now()}}))}_loadPlantInfo(){return a(this,void 0,void 0,(function*(){if(this.entityId&&this.hass&&!this._isLoading){this._isLoading=!0;try{this._plantInfo=yield d.PlantEntityUtils.getPlantInfo(this.hass,this.entityId)}catch(t){console.warn("Fehler beim Laden der Pflanzen-Info:",t),this._plantInfo=null}finally{this._isLoading=!1}}}))}collectTimelineEvents(t){return a(this,void 0,void 0,(function*(){var e,i,n,a,o,s,r;if(!this.hass)return[];const w=[];let x;try{x=yield d.PlantEntityUtils.getPlantInfo(this.hass,`plant.${t}`)}catch(t){return console.warn("Fehler beim Laden der Pflanzen-Info:",t),[]}const k=(null==x?void 0:x.helpers)||{},$=null===(e=k.growth_phase)||void 0===e?void 0:e.entity_id,S=null===(i=k.pot_size)||void 0===i?void 0:i.entity_id,I=null===(n=k.treatment)||void 0===n?void 0:n.entity_id,E=null===(a=k.location)||void 0===a?void 0:a.entity_id,T=yield l.FlowerGallery.getImagesWithDates(this.hass,`plant.${t}`,x);this._imageUrls=T.map((t=>t.url));const C=T.map(((t,e)=>({date:t.date,type:"image",label:c.TranslationUtils.translateHistory(this.hass,"photo"),description:`${c.TranslationUtils.translateHistory(this.hass,"image_taken")} ${t.date.toLocaleDateString()}`,style:`background-color: hsl(${y}, ${b}%, 45%);`,data:{imageIndex:e,url:t.url}})));w.push(...C);const D=["seeds","germination","rooting","growing","flowering","removed","harvested"],P=[];if($){const t=this.hass.states[$];if(t)for(const e of D){const i=null==t?void 0:t.attributes[`${"removed"===e||"harvested"===e?e:e+"_start"}`];if(i){const t={date:new Date(i),type:`phase-${e}`,label:c.TranslationUtils.translateGrowthPhase(this.hass,e),description:`${c.TranslationUtils.translateGrowthPhase(this.hass,e)} ${c.TranslationUtils.translateHistory(this.hass,"phase_started")} ${new Date(i).toLocaleDateString()}`};if("removed"===e)t.style="display: none;";else if("harvested"===e)t.style="\n                                background-color: hsl(120, 70%, 45%);\n                                background-image: repeating-linear-gradient(45deg, \n                                    transparent,\n                                    transparent 2px,\n                                    rgba(255,255,255,0.4) 2px,\n                                    rgba(255,255,255,0.4) 4px\n                                );\n                            ";else{const i=D.filter((t=>"removed"!==t&&"harvested"!==t)),n=i.indexOf(e),a=1===i.length?55:55-n/Math.max(1,i.length-1)*25;t.style=`background-color: hsl(${h}, ${u}%, ${a}%)`}P.push(t)}}}w.push(...P);try{if(S){const t=(null===(o=w[0])||void 0===o?void 0:o.date.toISOString())||(new Date).toISOString(),e=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${S}&end_time=${e}`);if(i&&Array.isArray(i)&&i.length>0){let t=null;const e=[],n=i[0];for(let i=0;i<n.length;i++){const a=n[i];a.state&&!isNaN(parseFloat(a.state))&&"unavailable"!==a.state&&"unknown"!==a.state&&(null!==t&&a.state===t||(e.push({date:new Date(a.last_changed),type:"pot-size",label:`${a.state}L`,description:`${c.TranslationUtils.translateHistory(this.hass,"pot_size_changed")} ${a.state}L ${new Date(a.last_changed).toLocaleDateString()}`}),t=a.state))}e.forEach(((t,e)=>{const i=65-10*e;t.style=`background-color: hsl(${p}, ${m}%, ${i}%)`})),w.push(...e)}}}catch(t){console.warn("Fehler beim Laden der Topfgrößen-Historie:",t)}try{if(E){const t=(null===(s=w[0])||void 0===s?void 0:s.date.toISOString())||(new Date).toISOString(),e=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${E}&end_time=${e}`);if(i&&Array.isArray(i)&&i.length>0){const t=[],e=i[0];let n=null;for(let i=0;i<e.length;i++){const a=e[i];if(a.state&&"unavailable"!==a.state&&"unknown"!==a.state)try{const e=JSON.parse(a.state);e&&e.area&&(null!==n&&e.area===n||(t.push({date:new Date(a.last_changed),type:"area-moved",label:e.area,description:`${c.TranslationUtils.translateHistory(this.hass,"moved_to")} ${e.area} ${new Date(a.last_changed).toLocaleDateString()}`}),n=e.area))}catch(t){continue}}t.forEach(((t,e)=>{const i=65-10*e;t.style=`background-color: hsl(${g}, ${_}%, ${i}%)`})),w.push(...t)}}}catch(t){console.warn("Fehler beim Laden der Area-Historie:",t)}try{if(I){const t=(null===(r=w[0])||void 0===r?void 0:r.date.toISOString())||(new Date).toISOString(),e=(new Date).toISOString(),i=yield this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${I}&end_time=${e}`);if(i&&Array.isArray(i)&&i.length>0){const t=[],e=i[0];let n=null;for(let i=0;i<e.length;i++){const a=e[i];a.state&&"unavailable"!==a.state&&"unknown"!==a.state&&"none"!==a.state&&(null!==n&&a.state===n||(t.push({date:new Date(a.last_changed),type:"treatment",label:c.TranslationUtils.translateTreatment(this.hass,a.state),description:`${c.TranslationUtils.translateHistory(this.hass,"treatment")}: ${c.TranslationUtils.translateTreatment(this.hass,a.state)} ${new Date(a.last_changed).toLocaleDateString()}`}),n=a.state))}t.forEach(((t,e)=>{const i=Math.max(80-8*e,0);t.style=`background-color: hsl(${v}, ${f}%, ${i}%);`})),w.push(...t)}}}catch(t){console.warn("Fehler beim Laden der Treatment-Historie:",t)}return w.sort(((t,e)=>t.date.getTime()-e.date.getTime()))}))}static get styles(){return r.timelineStyles}calculateEventPosition(t,e,i){const n=i.getTime()-e.getTime(),a=t.date.getTime()-e.getTime();return Math.min(a/n*100,100)}checkCollisions(t,e,i){const n=new Map,a=new Map;t.forEach((t=>{const a=this.calculateEventPosition(t,e,i);n.set(t,a*this._timelineWidth/100)})),t.sort(((t,e)=>n.get(t)-n.get(e)));for(let e=1;e<t.length;e++){const i=t[e],o=t[e-1],s=n.get(i),r=n.get(o)+(a.get(o)||0)+4;s<r&&a.set(i,r-s)}return a}calculateEventWidth(t,e,i,n,a){const o=this.calculateEventPosition(t,n,a);if("treatment"===t.type)return{position:`${o}%`,width:"2px"};if(e===i.length-1)return{position:`${o}%`,width:`calc(100% - ${o}%)`};const s=i[e+1];return{position:`${o}%`,width:`calc(${this.calculateEventPosition(s,n,a)}% - ${o}%)`}}formatDate(t,e){return"harvest"===(null==e?void 0:e.type)&&e.displayDate?e.displayDate.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"}):t.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"})}checkOverlap(t){const e={};let i=0;t.sort(((t,e)=>t.position-e.position));const n=new Map,a=document.createElement("div");a.style.visibility="hidden",a.style.position="absolute",a.className="timeline-label",document.body.appendChild(a),t.forEach((t=>{let e;e=t.index>=this.events.length?c.TranslationUtils.translateHistory(this.hass,"harvest"):this.events[t.index].label,a.textContent=e;const i=a.getBoundingClientRect().width;n.set(t.index,i)})),document.body.removeChild(a);for(let a=0;a<t.length;a++){const o=t[a];let s=!1;for(let e=Math.max(0,a-3);e<a;e++){const a=t[e],r=((n.get(o.index)||0)+(n.get(a.index)||0))/2+1,l=o.position/100*this._timelineWidth,d=a.position/100*this._timelineWidth;if(Math.abs(l-d)<r){s=!0,0===i?i=1:1===i?i=2:2===i&&(i=0);break}}s?e[o.index]=i:(e[o.index]=0,i=0)}return e}renderEventGroup(t,e,i,n,a,s){return o.html`
            ${t.map(((r,l)=>{var d,c,h;const{position:u,width:p}=this.calculateEventWidth(r,l,t,i,n),m=a.get(r)||0,g="image"===r.type,_="treatment"===r.type,v=g?null===(d=r.data)||void 0===d?void 0:d.imageIndex:null,f=this.events.findIndex((t=>t===r)),y=g&&this._hoveredImageIndex===v||this._hoveredEventIndex===f;return o.html`
                    <div class="timeline-event ${r.type}"
                         style="left: calc(${u} + ${m}px); 
                                width: ${p};
                                top: ${null===(c=s.get(e))||void 0===c?void 0:c.top}px;
                                height: ${null===(h=s.get(e))||void 0===h?void 0:h.height}px;
                                ${r.style||""}"
                         title="${r.description}"
                         @click="${()=>{g?this._handleImageClick(v):this._handleTimelineEventClick(r)}}"
                         @mouseenter="${()=>{g&&(this._hoveredImageIndex=v),this._hoveredEventIndex=f}}"
                         @mouseleave="${()=>{g&&(this._hoveredImageIndex=null),this._hoveredEventIndex=null}}"
                         ?data-hovered="${y}"
                         ?data-scale-effect="${g||_}"
                    >
                    </div>
                `}))}
        `}renderStatusIndicators(t,e,i,n){return o.html`
            ${t.map(((t,a)=>{var s,r;const l=new Date(t.last_changed),d=this.stateHistory[a+1],c=d?new Date(d.last_changed):new Date,h=Math.min((l.getTime()-e.getTime())/(i.getTime()-e.getTime())*100,100),u=Math.min((c.getTime()-l.getTime())/(i.getTime()-e.getTime())*100,100-h),p="problem"===t.state?"timeline-status-problem":"unknown"===t.state?"timeline-status-unknown":"";return p?o.html`
                    <div class="timeline-status-indicator ${p}"
                         style="left: ${h}%; 
                                width: ${u}%;
                                top: ${null===(s=n.get("status"))||void 0===s?void 0:s.top}px;
                                height: ${null===(r=n.get("status"))||void 0===r?void 0:r.height}px;">
                    </div>
                `:""}))}
        `}_handleImageClick(t){this._showGallery=!0,this._hoveredImageIndex=t,this.requestUpdate()}renderTimelineItems(t,e,i,n){return o.html`
            ${t.map(((t,a)=>{var s;const r=Math.min((t.date.getTime()-e.getTime())/(i.getTime()-e.getTime())*100,100),l=n?this.labelOffsets[a]||0:this.markerOffsets[a]||0,d="image"===t.type,c=d?null===(s=t.data)||void 0===s?void 0:s.imageIndex:null,h=this.events.findIndex((e=>e===t)),u=d&&this._hoveredImageIndex===c||this._hoveredEventIndex===h;let p="";p=n?1===l?"offset-up":2===l?"offset-up-2":-1===l?"offset-down":"":1===l?"offset-up":2===l?"offset-up-2":-1===l?"offset-down":-2===l?"offset-down-2":"";const m=n?"timeline-label":"timeline-marker",g=n?t.label:this.formatDate(t.date,t);return o.html`
                    <div class="${m} ${p} ${u?"hovered":""}"
                         style="left: ${r}%; ${t.style||""}"
                         @click="${()=>{d?this._handleImageClick(c):this._handleTimelineEventClick(t)}}"
                         @mouseenter="${()=>{d&&(this._hoveredImageIndex=c),this._hoveredEventIndex=h}}"
                         @mouseleave="${()=>{d&&(this._hoveredImageIndex=null),this._hoveredEventIndex=null}}"
                         ?data-hovered="${u}"
                         data-type="${t.type}"
                    >
                        ${g}
                    </div>
                `}))}
        `}_handleTimelineEventClick(t){var e,i,n,a;if("image"===t.type)return;let o=t.date,s=new Date;if(t.type.startsWith("phase-")){const r=t.type.split("-")[1];if(null===(n=null===(i=null===(e=this._plantInfo)||void 0===e?void 0:e.helpers)||void 0===i?void 0:i.growth_phase)||void 0===n?void 0:n.entity_id){const e=this._plantInfo.helpers.growth_phase.entity_id,i=null===(a=this.hass)||void 0===a?void 0:a.states[e];if(null==i?void 0:i.attributes){o=t.date;const e=["seeds","germination","rooting","growing","flowering","removed","harvested"],n=e.indexOf(r);if(n>=0&&n<e.length-1){const t=e[n+1],a="removed"===t||"harvested"===t?t:`${t}_start`,o=i.attributes[a];o&&(s=new Date(o))}}}}else if("area-moved"===t.type){o=t.date;const e=this.events.filter((t=>"area-moved"===t.type)),i=e.findIndex((e=>e.date.getTime()===t.date.getTime()));i>=0&&i<e.length-1&&(s=e[i+1].date)}else if("pot-size"===t.type){o=t.date;const e=this.events.filter((t=>"pot-size"===t.type)),i=e.findIndex((e=>e.date.getTime()===t.date.getTime()));i>=0&&i<e.length-1&&(s=e[i+1].date)}s=new Date(s.getTime()+864e5),this._updateGraph(o,s)}_updateGraph(t,e){var i;const n=null===(i=this.parentNode)||void 0===i?void 0:i.querySelector("flower-graph");n&&(n._dateRange=[t,e],n._picker&&n._picker.setDate(n._dateRange,!1),n.updateGraphData(!0))}render(){var t,e,i;if(!this.entityId||!this.hass||0===this.events.length)return o.html``;let n,a;if(!(null===(t=this._plantInfo)||void 0===t?void 0:t.helpers))return o.html``;{const t=this._plantInfo.helpers,o=null===(e=t.growth_phase)||void 0===e?void 0:e.entity_id,s=null===(i=t.flowering_duration)||void 0===i?void 0:i.entity_id;n=o?this.hass.states[o]:null,a=s?this.hass.states[s]:null}if(!n)return o.html``;const s=this.events[0].date,r=n.state,l=new Date;let d;if("removed"===r)d=new Date(n.attributes.removed_date);else if("harvested"===r)d=new Date(n.attributes.harvested_date);else if("flowering"===r&&(null==a?void 0:a.state)){const t=new Date(n.attributes.flowering_start);d=new Date(t),d.setDate(d.getDate()+parseInt(a.state))}else(null==a?void 0:a.state)?(d=new Date(l),d.setDate(d.getDate()+parseInt(a.state))):d=l;const h=(l.getTime()-s.getTime())/.9,u=new Date(s.getTime()+h),p=[...this.events],m={date:u,displayDate:d,type:"harvest",label:c.TranslationUtils.translateHistory(this.hass,"harvest"),description:`${c.TranslationUtils.translateHistory(this.hass,"expected_harvest_date")}: ${d.toLocaleDateString()}`};p.push(m);const g=p.map(((t,e)=>({index:e,position:Math.min((t.date.getTime()-s.getTime())/(u.getTime()-s.getTime())*100,100),type:"label",offset:0})));this.labelOffsets=this.checkOverlap(g),this.markerOffsets=Object.fromEntries(Object.entries(this.labelOffsets).map((([t,e])=>[t,-1*e])));const _=this.events.filter((t=>t.type.startsWith("phase"))),v=this.events.filter((t=>t.type.startsWith("area"))),f=this.events.filter((t=>"pot-size"===t.type)),y=this.events.filter((t=>"treatment"===t.type)),b=this.events.filter((t=>"image"===t.type)),w=this.checkCollisions(_,s,u),x=this.checkCollisions(v,s,u),k=this.checkCollisions(f,s,u),$=this.checkCollisions(y,s,u),S=this.checkCollisions(b,s,u),I=new Map;return _.length>0&&I.set("phase",{top:0,height:10}),v.length>0&&I.set("area",{top:10,height:10}),f.length>0&&I.set("pot",{top:20,height:10}),this.stateHistory.length>0&&I.set("status",{top:30,height:4}),y.length>0&&I.set("treatment",{top:0,height:34}),b.length>0&&I.set("image",{top:0,height:34}),o.html`
            <div class="timeline-container">
                <div class="timeline">
                    <div class="timeline-labels">
                        ${this.renderTimelineItems(p,s,u,!0)}
                    </div>
                    <div class="timeline-events">
                        <div class="current-time-line" style="left: 90%;"></div>
                        ${this.renderEventGroup(_,"phase",s,u,w,I)}
                        ${this.renderEventGroup(v,"area",s,u,x,I)}
                        ${this.renderEventGroup(f,"pot",s,u,k,I)}
                        ${this.renderStatusIndicators(this.stateHistory,s,u,I)}
                        ${this.renderEventGroup(y,"treatment",s,u,$,I)}
                        ${this.renderEventGroup(b,"image",s,u,S,I)}
                    </div>
                    <div class="timeline-markers">
                        ${this.renderTimelineItems(p,s,u,!1)}
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
        `}};e.FlowerTimeline=w,n([(0,s.property)()],w.prototype,"hass",void 0),n([(0,s.property)()],w.prototype,"entityId",void 0),n([(0,s.property)({type:Array})],w.prototype,"events",void 0),n([(0,s.property)()],w.prototype,"stateHistory",void 0),n([(0,s.state)()],w.prototype,"_timelineWidth",void 0),n([(0,s.state)()],w.prototype,"labelOffsets",void 0),n([(0,s.state)()],w.prototype,"markerOffsets",void 0),n([(0,s.state)()],w.prototype,"_showGallery",void 0),n([(0,s.state)()],w.prototype,"_hoveredImageIndex",void 0),n([(0,s.state)()],w.prototype,"_hoveredEventIndex",void 0),e.FlowerTimeline=w=n([(0,s.customElement)("flower-timeline")],w)},43:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliCardEditor=void 0;const a=i(4437),o=i(2924),s=i(4356),r=i(9130),l=i(4139),d=i(1261),c=l.elementOptions.filter((t=>"header"!==t.value&&"options"!==t.value)),h=[{label:"Wachstumsphasen",value:d.EVENT_TYPES.PHASE},{label:"Topfgrößen",value:d.EVENT_TYPES.POT},{label:"Standorte",value:d.EVENT_TYPES.AREA},{label:"Behandlungen",value:d.EVENT_TYPES.TREATMENT},{label:"Bilder",value:d.EVENT_TYPES.IMAGE},{label:"Journal",value:d.EVENT_TYPES.JOURNAL}];let u=class extends a.LitElement{constructor(){super(...arguments),this._computeLabel=t=>{var e;return null!==(e={entity:"Entity",display_type:"Display Type",battery_sensor:"Battery Sensor",show_bars:"Show Bars",full_width_bars:"Full Width Bars",show_elements:"Show Elements",option_elements:"Option Elements",default_expanded_options:"Default Expanded Options",history_groups:"History Groups",history_line_position:"History Line Position",listen_to:"Listen-to (List-Card Identifier)"}[t.name])&&void 0!==e?e:t.name}}setConfig(t){this._config=t}get _schema(){return[{name:"entity",required:!0,selector:{entity:{filter:[{domain:"plant"},{domain:"cycle"}]}}},{name:"display_type",selector:{select:{mode:"dropdown",options:[{value:r.DisplayType.Full,label:"Full"},{value:r.DisplayType.Compact,label:"Compact"}]}}},{name:"battery_sensor",selector:{entity:{filter:{domain:"sensor",device_class:"battery"}}}},{name:"show_bars",selector:{select:{multiple:!0,mode:"list",options:l.plantAttributes.map((t=>({value:t.value,label:t.label})))}}},{name:"full_width_bars",selector:{select:{multiple:!0,mode:"list",options:l.plantAttributes.map((t=>({value:t.value,label:t.label})))}}},{name:"show_elements",selector:{select:{multiple:!0,mode:"list",options:l.elementOptions.map((t=>({value:t.value,label:t.label})))}}},{name:"option_elements",selector:{select:{multiple:!0,mode:"list",options:c.map((t=>({value:t.value,label:t.label})))}}},{name:"default_expanded_options",selector:{select:{multiple:!0,mode:"list",options:c.map((t=>({value:t.value,label:t.label})))}}},{name:"history_groups",selector:{select:{multiple:!0,mode:"list",options:h.map((t=>({value:t.value,label:t.label})))}}},{name:"history_line_position",selector:{select:{mode:"dropdown",options:[{value:"left",label:"Links"},{value:"right",label:"Rechts"}]}}},{name:"listen_to",selector:{text:{}}}]}_data(){return Object.assign({show_bars:[...l.default_show_bars],show_elements:[...l.default_show_elements],option_elements:[...l.default_option_elements],default_expanded_options:[...l.initial_expanded_options],full_width_bars:[]},this._config)}render(){return this.hass&&this._config?a.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._data()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:a.html``}_valueChanged(t){(0,s.fireEvent)(this,"config-changed",{config:t.detail.value})}static get styles(){return a.css`
      ha-form { display: block; }
    `}};e.BrokkoliCardEditor=u,n([(0,o.property)({attribute:!1})],u.prototype,"hass",void 0),n([(0,o.state)()],u.prototype,"_config",void 0),e.BrokkoliCardEditor=u=n([(0,o.customElement)("brokkoli-card-editor")],u)},1894:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliListCardEditor=void 0;const a=i(4437),o=i(2924),s=i(4356),r=i(5869).FIELD_DEFINITIONS.map((t=>({value:t.id,label:"string"==typeof t.name?t.name:t.id})));let l=class extends a.LitElement{constructor(){super(...arguments),this._schema=[{name:"title",selector:{text:{}}},{name:"area",selector:{area:{}}},{name:"identifier",selector:{text:{}}},{name:"enabled_columns",selector:{select:{multiple:!0,mode:"list",options:r}}},{name:"search_enabled",selector:{boolean:{}}},{name:"search_placeholder",selector:{text:{}}},{name:"multiselect_enabled",selector:{boolean:{}}},{name:"filter_enabled",selector:{boolean:{}}},{name:"add_plant_enabled",selector:{boolean:{}}},{name:"add_plant_position",selector:{select:{mode:"dropdown",options:[{value:"top",label:"Oben"},{value:"bottom",label:"Unten"}]}}}],this._computeLabel=t=>{var e;return null!==(e={title:"Titel",area:"Area-Filter",identifier:"Identifier (für Plant-/Area-Card-Verkn.)",enabled_columns:"Sichtbare Spalten",search_enabled:"Suche aktiviert",search_placeholder:"Suche-Placeholder",multiselect_enabled:"Multi-Select aktiviert",filter_enabled:"Filter aktiviert",add_plant_enabled:'"Pflanze hinzufügen" Button',add_plant_position:"Button-Position"}[t.name])&&void 0!==e?e:t.name}}setConfig(t){this._config=t}_toEditorData(){var t,e,i,n,a,o,s,r,l,d,c,h;const u=null!==(t=this._config)&&void 0!==t?t:{},p=u.show_columns?Object.entries(u.show_columns).filter((([,t])=>t)).map((([t])=>t)):[];return{title:u.title,area:u.area,identifier:u.identifier,enabled_columns:p,search_enabled:null===(i=null===(e=u.search)||void 0===e?void 0:e.enabled)||void 0===i||i,search_placeholder:null===(n=u.search)||void 0===n?void 0:n.placeholder,multiselect_enabled:null!==(o=null===(a=u.multiselect)||void 0===a?void 0:a.enabled)&&void 0!==o&&o,filter_enabled:null===(r=null===(s=u.filter)||void 0===s?void 0:s.enabled)||void 0===r||r,add_plant_enabled:null===(d=null===(l=u.add_plant)||void 0===l?void 0:l.enabled)||void 0===d||d,add_plant_position:null!==(h=null===(c=u.add_plant)||void 0===c?void 0:c.position)&&void 0!==h?h:"bottom"}}_fromEditorData(t){var e,i,n,a,o,s,r;const l={};for(const e of t.enabled_columns)l[e]=!0;return Object.assign(Object.assign({},this._config),{type:null!==(i=null===(e=this._config)||void 0===e?void 0:e.type)&&void 0!==i?i:"custom:brokkoli-list-card",title:t.title,area:t.area,identifier:t.identifier,show_columns:l,search:{enabled:t.search_enabled,placeholder:null!==(n=t.search_placeholder)&&void 0!==n?n:"Suche..."},multiselect:Object.assign(Object.assign({},null!==(o=null===(a=this._config)||void 0===a?void 0:a.multiselect)&&void 0!==o?o:{showbydefault:!1}),{enabled:t.multiselect_enabled}),filter:Object.assign(Object.assign({},null!==(r=null===(s=this._config)||void 0===s?void 0:s.filter)&&void 0!==r?r:{showbydefault:!1}),{enabled:t.filter_enabled}),add_plant:{enabled:t.add_plant_enabled,position:t.add_plant_position}})}render(){return this.hass&&this._config?a.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._toEditorData()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:a.html``}_valueChanged(t){(0,s.fireEvent)(this,"config-changed",{config:this._fromEditorData(t.detail.value)})}static get styles(){return a.css`ha-form { display: block; }`}};e.BrokkoliListCardEditor=l,n([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),n([(0,o.state)()],l.prototype,"_config",void 0),e.BrokkoliListCardEditor=l=n([(0,o.customElement)("brokkoli-list-card-editor")],l)},1536:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliSensorAssignmentCardEditor=void 0;const a=i(4437),o=i(2924),s=i(4356);let r=class extends a.LitElement{constructor(){super(...arguments),this._computeLabel=t=>{var e;return null!==(e={title:"Titel"}[t.name])&&void 0!==e?e:t.name}}setConfig(t){this._config=t}get _schema(){return[{name:"title",selector:{text:{}}}]}render(){return this.hass&&this._config?a.html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:a.html``}_valueChanged(t){(0,s.fireEvent)(this,"config-changed",{config:t.detail.value})}static get styles(){return a.css`ha-form { display: block; }`}};e.BrokkoliSensorAssignmentCardEditor=r,n([(0,o.property)({attribute:!1})],r.prototype,"hass",void 0),n([(0,o.state)()],r.prototype,"_config",void 0),e.BrokkoliSensorAssignmentCardEditor=r=n([(0,o.customElement)("brokkoli-sensor-assignment-card-editor")],r)},6800:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const n=i(4437);e.style=n.css`
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
`},3073:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.positionStyles=void 0;const n=i(4437);e.positionStyles=n.css`
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
`},2075:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const n=i(4437);e.style=n.css`
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
`},1334:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.graphStyles=void 0;const n=i(4437);e.graphStyles=n.css`
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
`},4302:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.historyStyles=void 0;const n=i(4437);e.historyStyles=n.css`
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
`},8621:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.legendStyles=void 0;const n=i(4437);e.legendStyles=n.css`
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
`},365:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.plantFlyoutMenuStyles=void 0;const n=i(4437);e.plantFlyoutMenuStyles=n.css`
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
`},1294:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sensorAssignmentStyles=void 0;const n=i(4437);e.sensorAssignmentStyles=n.css`
  :host {
    --sa-color-temperature: #e74c3c;
    --sa-color-illuminance: #f1c40f;
    --sa-color-humidity: #3498db;
    --sa-color-moisture: #16a085;
    --sa-color-conductivity: #9b59b6;
    --sa-color-power_consumption: #e67e22;
    --sa-color-ph: #2ecc71;

    display: block;
  }

  .sa-container {
    display: flex;
    gap: 32px;
    padding: 16px;
    align-items: flex-start;
  }

  .sa-column {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .sa-column-title {
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--primary-text-color);
  }

  /* Geräte- und Entitäten-Bereich sind unabhängig voneinander scrollbar,
     statt die ganze Spalte beliebig wachsen zu lassen. */
  .sa-scroll-section {
    max-height: 340px;
    overflow-y: auto;
    padding-right: 4px;
  }

  .sa-scroll-section-tall {
    max-height: 720px;
  }

  .sa-section-divider {
    height: 1px;
    background: var(--divider-color, #ccc);
    margin: 4px 0;
  }

  .sa-tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: flex-start;
  }

  .sa-tiles-vertical {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 20px;
  }

  /* Ein Tile besteht aus großem Kreis (Foto/Icon) + kleinen Satelliten-
     Kreisen für jeden Sensortyp, angeordnet per JS-berechnetem transform. */
  .sa-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  /* Pflanze + ihre angedockten Geräte-Kopien nebeneinander in einer Reihe —
     "Kopie rechts neben der Pflanze", damit die farbigen Satelliten-Punkte
     der Pflanze und der Kopie sich optisch als zusammengehörig lesen. */
  .sa-plant-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 4px;
    border-radius: 12px;
    transition: background-color 0.15s ease;
  }

  .sa-plant-row.sa-drop-target {
    background-color: var(--primary-color, #03a9f4);
    opacity: 0.85;
  }

  .sa-tile-orbit {
    position: relative;
    flex-shrink: 0;
  }

  .sa-tile-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    border: 2px solid var(--divider-color, #ccc);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: grab;
    user-select: none;
    z-index: 2;
  }

  .sa-tile-main.sa-dragging {
    cursor: grabbing;
    opacity: 0.5;
  }

  .sa-tile-main ha-icon {
    --mdc-icon-size: 28px;
    color: var(--secondary-text-color);
  }

  .sa-satellite {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    margin-left: -12px;
    border-radius: 50%;
    background: var(--card-background-color, #fff);
    border: 2px solid var(--disabled-text-color, #bbb);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  }

  .sa-satellite ha-icon {
    --mdc-icon-size: 13px;
    color: var(--disabled-text-color, #bbb);
    transition: color 0.2s ease;
  }

  .sa-satellite.sa-active {
    background: var(--sa-type-color);
    border-color: var(--sa-type-color);
  }

  .sa-satellite.sa-active ha-icon {
    color: white;
  }

  .sa-satellite.sa-clickable {
    cursor: pointer;
  }

  .sa-tile-name {
    font-size: 0.8em;
    text-align: center;
    color: var(--primary-text-color);
    max-width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Angedockte Kopien zugewiesener Geräte neben einer Pflanze — jede Kopie
     ist eine verkleinerte Version der Sensoren-Kachel (großes Icon +
     Satelliten), damit die farbig hervorgehobenen Typ-Punkte optisch mit
     denen der Pflanze "verbunden" wirken. */
  .sa-docked-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
  }

  .sa-docked-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .sa-docked-name {
    font-size: 0.65em;
    text-align: center;
    color: var(--secondary-text-color);
    max-width: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sa-empty-hint {
    color: var(--secondary-text-color);
    font-style: italic;
    font-size: 0.9em;
  }
`},4911:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.timelineStyles=void 0;const n=i(4437);e.timelineStyles=n.css`
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
`},9130:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayType=void 0,function(t){t.Full="full",t.Compact="compact"}(i||(e.DisplayType=i={}))},9429:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderAttributeChunks=e.getChunkedDisplayed=e.renderAttribute=e.renderAttributes=e.renderBattery=void 0;const n=i(9130),a=i(4437),o=i(6781),s=i(4139),r=i(2135),l=i(2413);e.renderBattery=t=>{if(!t.config.battery_sensor)return a.html``;const e=t._hass.states[t.config.battery_sensor];if(!e)return a.html``;const i=parseInt(e.state),{icon:n,color:o}=[{threshold:90,icon:"mdi:battery",color:"green"},{threshold:80,icon:"mdi:battery-90",color:"green"},{threshold:70,icon:"mdi:battery-80",color:"green"},{threshold:60,icon:"mdi:battery-70",color:"green"},{threshold:50,icon:"mdi:battery-60",color:"green"},{threshold:40,icon:"mdi:battery-50",color:"green"},{threshold:30,icon:"mdi:battery-40",color:"orange"},{threshold:20,icon:"mdi:battery-30",color:"orange"},{threshold:10,icon:"mdi:battery-20",color:"red"},{threshold:0,icon:"mdi:battery-10",color:"red"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline",color:"red"}].find((({threshold:t})=>i>t))||{icon:"mdi:battery-alert-variant-outline",color:"red"};return a.html`
        <div class="battery tooltip" @click="${e=>{e.stopPropagation(),(0,r.moreInfo)(t,t.config.battery_sensor)}}">
            <div class="tip">${i}%</div>
            <ha-icon .icon="${n}" style="color: ${o}"></ha-icon>
        </div>
    `},e.renderAttributes=t=>{var i,n,a,o;const r={},l={},d={},c={},h={},u={},p={},m=t.config.show_bars||s.default_show_bars,g=t.selectedPlantEntity||(null===(i=t.config)||void 0===i?void 0:i.entity);if(!g||!t._hass.states[g])return[];if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const i of m)if(e[i]||"health"===i&&(null===(n=e.helpers)||void 0===n?void 0:n.health)){let n,s,m,g,_,v;if("health"===i){if(!(null===(o=null===(a=e.helpers)||void 0===a?void 0:a.health)||void 0===o?void 0:o.entity_id))continue;const i=t._hass.states[e.helpers.health.entity_id];if(!i)continue;n=5,s=0,m=Number(i.state),g="mdi:heart-pulse",_=i.entity_id,v=""}else({max:n,min:s,current:m,icon:g,sensor:_,unit_of_measurement:v}=e[i]);n=Number(n),s=Number(s),g=String(g),_=String(_),m=Number(m),v=String(v);const f="health"===i?m.toString():t._hass.formatEntityState(t._hass.states[_]).replace(/[^\d,.]/g,"");c[`max_${i}`]={max:n,min:s},h[i]=m,r[i]=g,u[i]=_,d[i]=v,l[i]=v,"dli"===i&&(d.dli="mol/d⋅m²",l.dli='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>'),p[i]={name:i,current:m,limits:c[`max_${i}`],icon:g,sensor:_,unit_of_measurement:v,display_state:f}}}return(0,e.renderAttributeChunks)(t,p,m)},e.renderAttribute=(t,e)=>{var i;const{max:s,min:d}=e.limits,c=e.unit_of_measurement&&"null"!==e.unit_of_measurement?e.unit_of_measurement:"",h=e.icon||"mdi:help-circle-outline",u=e.current||0,p=!isNaN(u),m=e.display_state,g=(null===(i=t.config.full_width_bars)||void 0===i?void 0:i.includes(e.name))||!1,_=t.config.display_type===n.DisplayType.Compact;if("health"===e.name){const i=Math.floor(2*u);let n;if(i<=5){const t=(i-1)/4;n="rgba(240,163,163,1)",t>=0&&(n=`rgb(${240+15*t}, ${163+51*t}, ${163-163*t})`)}else{const t=(i-5)/5;n=`rgb(${255-212*t}, ${214-20*t}, ${0+83*t})`}const o=Array.from({length:10},((t,e)=>{const i=p&&u>.5*e,o=i?n:"var(--primary-background-color)";return a.html`
                <span class="health-segment ${i?"active":""}" 
                      style="grid-column: ${e+1}; background-color: ${o};">
                </span>
            `})),s=()=>{const i=Math.max(0,u-.5);t._hass.callService("number","set_value",{entity_id:e.sensor,value:i})},r=()=>{const i=Math.min(5,u+.5);t._hass.callService("number","set_value",{entity_id:e.sensor,value:i})};return a.html`
            <div class="attribute ${_||g?"width-100":""} ${g?"full-width":""}" data-attribute="health">
                <ha-icon .icon="${h}" 
                         @click="${t=>{t.stopPropagation(),s()}}">
                </ha-icon>
                <div class="meter green">
                    ${o}
                    <input type="range" 
                           min="0" 
                           max="5" 
                           step="0.5"
                           .value="${u}"
                           @input="${i=>{i.stopPropagation();const n=i.target,a=parseFloat(n.value);t._hass.callService("number","set_value",{entity_id:e.sensor,value:a})}}"
                    >
                </div>
                ${_&&!g?"":a.html`
                    <div class="header" @click="${t=>{t.stopPropagation(),r()}}">
                        <span class="value">${m}</span>
                    </div>
                `}
            </div>
        `}const v=100*Math.max(0,Math.min(1,(u-d)/(s-d))),f=p?l.TranslationUtils.createSensorTooltip(t._hass,e.name,u,d,s,c):l.TranslationUtils.translateUI(t._hass,"unavailable");let y="";return"dli"===e.name?y='<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':c&&(y=c),a.html`
        <div class="attribute tooltip ${_||g?"width-100":""} ${g?"full-width":""}" data-attribute="${e.name}" @click="${()=>(0,r.moreInfo)(t,e.sensor)}">
            <div class="tip">${(0,o.unsafeHTML)(f)}</div>
            <ha-icon .icon="${h}"></ha-icon>
            <div class="meter red">
                <span class="${p?u<d||u>s?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${p?u>s?"bad":"good":"unavailable"}" style="width:${p?v:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${p?u>s?100:0:"0"}%;"></span>
            </div>
            ${_&&!g?"":a.html`<div class="header"><span class="value">${m}</span>&nbsp;${y?a.html`<span class='unit'>${(0,o.unsafeHTML)(y)}</span>`:""}</div>`}
        </div>
    `},e.getChunkedDisplayed=(t,e,i=[],n=[])=>{const a=[];for(const o of n){const n=t[o];if(n)if(i.includes(o))a.push([n]);else{const t=a.length>0?a[a.length-1]:null;t&&t.length<e&&!i.includes(t[0].name)?t.push(n):a.push([n])}}const o=Object.assign({},t);for(const t of n)delete o[t];const s=Object.values(o);for(let t=0;t<s.length;t++){const n=s[t];if(i.includes(n.name))a.push([n]);else{let t=null;for(let n=a.length-1;n>=0;n--){const o=a[n];if(o.length<e&&!i.includes(o[0].name)){t=o;break}}t&&t.length<e?t.push(n):a.push([n])}}return a},e.renderAttributeChunks=(t,i,o=[])=>{const s=t.config.display_type===n.DisplayType.Compact?1:2,r=t.config.full_width_bars||[],l=(0,e.getChunkedDisplayed)(i,s,r,o),d="attributes "+(t.config.display_type===n.DisplayType.Compact?"width-100":"");return l.map((i=>{const n=1===i.length&&r.includes(i[0].name),o=`${d}${n?" has-full-width-item":""}`;return a.html`<div class="${o}">${i.map((i=>i?a.html`${(0,e.renderAttribute)(t,i)}`:""))}</div>`})).flat()}},8265:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BrokkoliListComponents=void 0;const n=i(4437),a=i(9442),o=i(8598),s=i(2413);e.BrokkoliListComponents=class{static renderHeader(t,e){if(""===t)return n.html``;const i=e?s.TranslationUtils.translateListCard(e,"title"):"Pflanzenübersicht";return n.html`
            <div class="card-header">
                <div class="name">${t||i}</div>
            </div>
        `}static renderToolbar(t,e,i,a,o,r,l,d,c){var h,u,p,m,g,_,v;if(!(null===(h=null==t?void 0:t.multiselect)||void 0===h?void 0:h.enabled)&&!(null===(u=null==t?void 0:t.search)||void 0===u?void 0:u.enabled)&&!(null===(p=null==t?void 0:t.filter)||void 0===p?void 0:p.enabled))return n.html``;const f=c?s.TranslationUtils.translateListCard(c,"filter_close"):"Filter schließen",y=c?s.TranslationUtils.translateListCard(c,"filter"):"Filter",b=c?s.TranslationUtils.translateListCard(c,"multiselect_end"):"Mehrfachauswahl beenden",w=c?s.TranslationUtils.translateListCard(c,"multiselect"):"Mehrfachauswahl",x=c?s.TranslationUtils.translateListCard(c,"search_reset"):"Suche zurücksetzen",k=c?s.TranslationUtils.translateListCard(c,"search_default"):"Suche...";return n.html`
            <div class="toolbar">
                ${(null===(m=null==t?void 0:t.filter)||void 0===m?void 0:m.enabled)?n.html`
                    <ha-icon-button
                        .label=${i?f:y}
                        @click=${o}
                    >
                        <ha-icon icon="mdi:${i?"filter-off":"filter"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(g=null==t?void 0:t.multiselect)||void 0===g?void 0:g.enabled)?n.html`
                    <ha-icon-button
                        .label=${a?b:w}
                        @click=${r}
                    >
                        <ha-icon icon="mdi:${a?"close":"checkbox-multiple-outline"}"></ha-icon>
                    </ha-icon-button>
                `:""}
                ${(null===(_=null==t?void 0:t.search)||void 0===_?void 0:_.enabled)?n.html`
                    <div class="search-container">
                        <ha-icon icon="mdi:magnify"></ha-icon>
                        <input
                            type="text"
                            .value=${e}
                            placeholder="${(null===(v=null==t?void 0:t.search)||void 0===v?void 0:v.placeholder)||k}"
                            @input=${l}
                        >
                        ${e?n.html`
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
        `}static renderTableHeader(t,e,i,a,o){return n.html`
            <thead>
                <tr>
                    ${e?n.html`
                        <th class="checkbox-column"></th>
                    `:""}
                    ${t.map((t=>n.html`
                        <th @click=${()=>o(t.id)} data-column="${t.id}">
                            ${t.name}
                            ${i===t.id?n.html`<ha-icon icon="mdi:${"asc"===a?"arrow-up":"arrow-down"}"></ha-icon>`:""}
                        </th>
                    `))}
                </tr>
            </thead>
        `}static renderTableRow(t,e,i,a,o,s,r,l,d){return n.html`
            <tr>
                ${i?n.html`
                    <td>
                        <input 
                            type="checkbox"
                            .checked=${a.has(t.entity_id)}
                            @change=${e=>o(t.entity_id,e)}
                            class="row-select"
                        >
                    </td>
                `:""}
                ${e.map((e=>n.html`
                    <td data-column="${e.id}" 
                        @click=${n=>{i&&a.size>0?s(n,t,e.id):i||r(n,t)}}
                        style="cursor: ${l(e.id)}"
                    >
                        ${d(t,e.id)}
                    </td>
                `))}
            </tr>
        `}static renderFilterSidebar(t,e,i,a,o,r){const l=s.TranslationUtils.translateListCard(o,"entity_type"),d=s.TranslationUtils.translateListCard(o,"plants"),c=s.TranslationUtils.translateListCard(o,"cycles");return n.html`
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
                    ${this.renderColumnFilter(s,e,a,o,r)}
                `))}
            </div>
        `}static renderColumnFilter(t,e,i,r,l){if(o.SensorUtils.isSensorColumn(t.id)){const a=o.SensorUtils.getSensorRange(r,l,t.id),d=e.activeFilters[t.id]||a;return n.html`
                <div class="filter-range">
                    <div class="filter-header">${t.name}</div>
                    <div class="filter-range-inputs">
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.min}
                            @change=${n=>{var o;const s=n.target,r=Number(s.value);i(t.id,{min:r,max:(null===(o=e.activeFilters[t.id])||void 0===o?void 0:o.max)||a.max})}}
                            step="0.1"
                        >
                        <span>${s.TranslationUtils.translateListCard(r,"filter_range_to")}</span>
                        <input
                            class="filter-input"
                            type="number"
                            .value=${d.max}
                            @change=${n=>{var o;const s=n.target,r=Number(s.value);i(t.id,{min:(null===(o=e.activeFilters[t.id])||void 0===o?void 0:o.min)||a.min,max:r})}}
                            step="0.1"
                        >
                        <span>${a.unit}</span>
                    </div>
                </div>
            `}return n.html`
            <div class="filter-group">
                <div class="filter-header">${t.name}</div>
                ${a.FilterUtils.getUniqueValues(r,l,t.id).map((a=>{var o;return n.html`
                    <label class="filter-item">
                        <input type="checkbox"
                            .checked=${(null===(o=e.activeFilters[t.id])||void 0===o?void 0:o.has(a))||!1}
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
        `}}},8358:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CellRenderer=void 0;const n=i(4437),a=i(289),o=i(9442),s=i(70),r=i(2413),l=i(5869);e.CellRenderer=class{static renderCell(t){const{hass:e,plant:i,columnId:n,editingCell:a,onCellClick:o,onInputUpdate:s,onRowClick:r}=t,l=i.entity_id.split(".")[1],d={hass:e,plant:i,columnId:n,onInput:(t,e)=>s(t,e),onClick:o,onRowClick:r};return(null==a?void 0:a.entityId)===i.entity_id&&(null==a?void 0:a.column)===n?this.renderEditingCell(l,n,e,d):this.renderNormalCell(l,n,e,i,d)}static renderEditingCell(t,e,i,o){const l=o.plant,d=t=>{if(l.attributes._sensorMap&&l.attributes._sensorMap[t])return l.attributes._sensorMap[t]};if(a.CellTypeUtils.isDateInput(e)){const t=d("growth_phase");if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t];return s.TemplateUtils.renderDateInput(null==a?void 0:a.attributes[e],o)}if(a.CellTypeUtils.isDurationInput(e)){const t=d("growth_phase");if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t];return s.TemplateUtils.renderNumberInput(null==a?void 0:a.attributes[e],r.TranslationUtils.translateUI(i,"days"),o,1)}if(a.CellTypeUtils.isNumberInput(e)){const t=d(e);if(!t)return n.html`<span>Sensor map missing</span>`;const a=null==i?void 0:i.states[t],r=this.getNumberInputUnit(e,a,i);return s.TemplateUtils.renderNumberInput(null==a?void 0:a.state,r,o)}return a.CellTypeUtils.isSelectInput(e)?this.renderSelectInput(e,t,i,o):a.CellTypeUtils.isTextInput(e)||a.CellTypeUtils.isTextArea(e)?s.TemplateUtils.renderTextInput(o.plant.attributes[e],o,a.CellTypeUtils.isTextArea(e)):n.html``}static renderNormalCell(t,e,i,o,d){const c=(0,l.getFieldDefinition)(e);if(a.CellTypeUtils.isDateInput(e))return this.renderDateValue(t,e,i,d);if(a.CellTypeUtils.isDurationInput(e)){let t;if(o.attributes._sensorMap&&o.attributes._sensorMap.growth_phase){const a=o.attributes._sensorMap.growth_phase;t=null==i?void 0:i.states[a];const s=null==t?void 0:t.attributes[e];return n.html`
                    <span @click=${d.onClick}>
                        ${s?`${s} ${r.TranslationUtils.translateUI(i,"days")}`:"-"}
                    </span>
                `}return n.html`<span @click=${d.onClick}>-</span>`}if((null==c?void 0:c.isSensor)&&c.showStatusBar)return s.TemplateUtils.renderSensorCell(d);if((null==c?void 0:c.isSensor)&&!c.showStatusBar){let t;if(o.attributes._sensorMap&&o.attributes._sensorMap[e]){const a=o.attributes._sensorMap[e];return t=null==i?void 0:i.states[a],n.html`
                    <span @click=${d.onClick}>
                        ${t?`${t.state} ${t.attributes.unit_of_measurement||c.unit||""}`:"-"}
                    </span>
                `}return n.html`<span @click=${d.onClick}>-</span>`}switch(e){case"friendly_name":return s.TemplateUtils.renderPlantName(o.attributes.friendly_name,o.attributes.entity_picture,d);case"state":return s.TemplateUtils.renderBadge(o.state,d,"status");case"cycle":return this.renderCycleValue(t,o,i,d);case"area":return this.renderAreaValue(o,i,d);case"growth_phase":return this.renderGrowthPhaseValue(t,i,d);case"pot_size":case"flowering_duration":return this.renderMeasurementValue(t,e,i,d);case"website":return s.TemplateUtils.renderWebsiteCell(o.attributes.website,d,!1);default:return this.renderDefaultValue(e,o,d)}}static getNumberInputUnit(t,e,i){return"flowering_duration"===t?i?r.TranslationUtils.translateUI(i,"days"):"days":"pot_size"===t?"L":(null==e?void 0:e.attributes.unit_of_measurement)||""}static renderSelectInput(t,e,i,n){var r;let l,d=[];const c=n.plant;if("growth_phase"===t){if(c.attributes._sensorMap&&c.attributes._sensorMap.growth_phase){const t=c.attributes._sensorMap.growth_phase,e=null==i?void 0:i.states[t];d=a.CellTypeUtils.getGrowthPhaseOptions(i,c),l=null==e?void 0:e.state}}else if("cycle"===t){if(c.attributes._sensorMap&&c.attributes._sensorMap.cycle){const t=c.attributes._sensorMap.cycle,e=null==i?void 0:i.states[t];d=a.CellTypeUtils.getCycleOptions(i,c),l=null==e?void 0:e.state}}else if("area"===t){const t=o.FilterUtils.getAreaForEntity(i,n.plant.entity_id);l=t?null===(r=null==i?void 0:i.areas[t])||void 0===r?void 0:r.name:"",d=a.CellTypeUtils.getAreaOptions(i)}return s.TemplateUtils.renderSelectInput(l,d,n,`${t}-select`)}static renderDateValue(t,e,i,a){const o=a.plant;if(o.attributes._sensorMap&&o.attributes._sensorMap.growth_phase){const t=o.attributes._sensorMap.growth_phase,s=null==i?void 0:i.states[t],r=null==s?void 0:s.attributes[e];if(r){const t=new Date(r);return n.html`
                    <span @click=${a.onClick}>
                        ${t.toLocaleDateString()}
                    </span>
                `}}return n.html`<span @click=${a.onClick}>-</span>`}static renderCycleValue(t,e,i,a){if(e.entity_id.startsWith("cycle."))return n.html`${e.attributes.member_count||0} ${r.TranslationUtils.translateUI(i,"members")}`;if(e.attributes._sensorMap&&e.attributes._sensorMap.cycle){const t=e.attributes._sensorMap.cycle,n=null==i?void 0:i.states[t];return s.TemplateUtils.renderBadge(null==n?void 0:n.state,a,"cycle")}return n.html`<span @click=${a.onClick}>-</span>`}static renderAreaValue(t,e,i){var n;const a=o.FilterUtils.getAreaForEntity(e,t.entity_id),r=a?null===(n=null==e?void 0:e.areas[a])||void 0===n?void 0:n.name:"-";return s.TemplateUtils.renderBadge(r,i,"area")}static renderGrowthPhaseValue(t,e,i){const a=i.plant;if(a.attributes._sensorMap&&a.attributes._sensorMap.growth_phase){const t=a.attributes._sensorMap.growth_phase,n=null==e?void 0:e.states[t];return s.TemplateUtils.renderBadge(null==n?void 0:n.state,i,"phase")}return n.html`<span @click=${i.onClick}>-</span>`}static renderMeasurementValue(t,e,i,a){const o=a.plant;if(o.attributes._sensorMap&&o.attributes._sensorMap[e]){const t=o.attributes._sensorMap[e],s=null==i?void 0:i.states[t],l="pot_size"===e?"L":r.TranslationUtils.translateUI(i,"days");return n.html`
                <span @click=${a.onClick}>
                    ${s?`${s.state} ${l}`:"-"}
                </span>
            `}return n.html`<span @click=${a.onClick}>-</span>`}static renderDefaultValue(t,e,i){var a,o;const r=(0,l.getFieldDefinition)(t),d=(null==r?void 0:r.clickAction)||"none";return(null==r?void 0:r.hasExternalLink)?s.TemplateUtils.renderWebsiteCell(e.attributes[t],i,!1):"edit"===d?n.html`
                <span @click=${i.onClick}>
                    ${(null===(a=e.attributes[t])||void 0===a?void 0:a.toString())||"-"}
                </span>
            `:n.html`${(null===(o=e.attributes[t])||void 0===o?void 0:o.toString())||"-"}`}}},289:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CellTypeUtils=void 0;const n=i(5869);e.CellTypeUtils=class{static getClickAction(t){const e=(0,n.getFieldDefinition)(t);return(null==e?void 0:e.clickAction)||"none"}static getCursorStyle(t){switch(this.getClickAction(t)){case"more-info":case"edit":return"pointer";default:return"default"}}static isDateInput(t){return"date"===(0,n.getFieldType)(t)}static isDurationInput(t){const e=(0,n.getFieldDefinition)(t);return"phaseduration"===(null==e?void 0:e.group)}static isNumberInput(t){return"number"===(0,n.getFieldType)(t)}static isSelectInput(t){return"select"===(0,n.getFieldType)(t)}static isTextInput(t){return"text"===(0,n.getFieldType)(t)}static isTextArea(t){return"textarea"===(0,n.getFieldType)(t)}static getCycleOptions(t,e){var i;const a=(0,n.getSensorMapEntity)(t,e,"cycle");return(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.options)||[]}static getGrowthPhaseOptions(t,e){var i;const a=(0,n.getSensorMapEntity)(t,e,"growth_phase");return(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.options)||[]}static getAreaOptions(t){return t?Object.values(t.areas||{}).map((t=>t.name)).sort():[]}static formatNumber(t,e=2){const i="string"==typeof t?parseFloat(t):t;return isNaN(i)?"-":i.toFixed(e)}static getSearchableValue(t,e,i){return(0,n.getFieldValue)(i,t,e).toString()}}},6754:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ConfigUtils=void 0;const n=i(5869),a=i(2413);class o{static getDefaultShowColumns(){const t=new Set(n.FIELD_DEFINITIONS.map((t=>t.group))),e={};return t.forEach((t=>{e[t]="min_max"!==t&&"diagnostics"!==t&&"notes"!==t})),n.FIELD_DEFINITIONS.filter((t=>"sensor"===t.type)).forEach((t=>{e[t.id]=["soil_moisture","temperature","conductivity","illuminance","air_humidity","dli","ph","health","power_consumption"].includes(t.id)})),e}static getDefaultConfig(t){return{type:"custom:brokkoli-list-card",title:t?a.TranslationUtils.translateListCard(t,"title"):"Pflanzenübersicht",search:{enabled:!0,placeholder:t?a.TranslationUtils.translateListCard(t,"search_placeholder"):"Suche..."},multiselect:{enabled:!1,showbydefault:!1},filter:{enabled:!0,showbydefault:!1},add_plant:{enabled:!0,position:"bottom"},show_columns:this.getDefaultShowColumns()}}static getVisibleColumns(t,e){const i=(null==t?void 0:t.show_columns)||this.getDefaultConfig(e).show_columns,a=new Map(n.FIELD_DEFINITIONS.map((t=>[t.id,{id:t.id,name:"function"==typeof t.name?e?t.name(e):t.id:t.name,group:t.group}]))),o=new Map;n.FIELD_DEFINITIONS.forEach((t=>{o.has(t.group)||o.set(t.group,[]),o.get(t.group).push({id:t.id,name:"function"==typeof t.name?e?t.name(e):t.id:t.name,group:t.group})}));const s=[];for(const[t,e]of Object.entries(i))e&&(o.has(t)?s.push(...o.get(t)):a.has(t)&&s.push(a.get(t)));return s}static getAllAvailableColumns(){return n.FIELD_DEFINITIONS.map((t=>t.id))}}e.ConfigUtils=o,o.EDITABLE_PLANT_ATTRIBUTES=n.FIELD_DEFINITIONS.filter((t=>"edit"===t.clickAction)).map((t=>t.id))},4139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getGrowthPhaseIcon=e.getTreatmentIcon=e.getTreatmentIconByIndex=e.getGrowthPhaseIconByIndex=e.plantAttributes=e.missingImage=e.elementOptions=e.initial_expanded_options=e.default_option_elements=e.default_show_elements=e.default_show_bars=e.PHASES=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="brokkoli-card",e.CARD_EDITOR_NAME="brokkoli-card-editor",e.PHASES=["seeds","germination","rooting","growing","flowering","removed","harvested"],e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli","water_consumption","fertilizer_consumption","ppfd","power_consumption","ph","health"],e.default_show_elements=["header","options"],e.default_option_elements=["attributes","timeline","consumption","history","details"],e.initial_expanded_options=["attributes"],e.elementOptions=[{label:"Header",value:"header"},{label:"Attribute Bars",value:"attributes"},{label:"Options Menu",value:"options"},{label:"Timeline",value:"timeline"},{label:"Consumption",value:"consumption"},{label:"History",value:"history"},{label:"Details",value:"details"}],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"Water Consumption",value:"water_consumption"},{label:"Fertilizer Consumption",value:"fertilizer_consumption"},{label:"PPFD",value:"ppfd"},{label:"Power Consumption",value:"power_consumption"},{label:"pH",value:"ph"},{label:"Health",value:"health"}];const i=["mdi:seed","mdi:seed-outline","mdi:sprout","mdi:leaf","mdi:flower","mdi:delete","mdi:content-cut"],n=["mdi:help-circle","mdi:content-cut","mdi:arrow-down-bold-circle","mdi:arrow-up-bold-circle","mdi:candy","mdi:scissors-cutting","mdi:leaf","mdi:spray","mdi:water"];e.getGrowthPhaseIconByIndex=t=>t>=0&&t<i.length?i[t]:"mdi:help-circle",e.getTreatmentIconByIndex=t=>t>=0&&t<n.length?n[t]:"mdi:help-circle",e.getTreatmentIcon=(t,i,n)=>{var a,o;if(i&&(null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a._sensorMap)&&"object"==typeof n.attributes._sensorMap){const a=n.attributes._sensorMap.treatment;if(a){const n=i.states[a];if((null===(o=null==n?void 0:n.attributes)||void 0===o?void 0:o.options)&&Array.isArray(n.attributes.options)){const i=n.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getTreatmentIconByIndex)(i)}}}switch(t.toLowerCase()){case"":case"none":case"keine":default:return"mdi:help-circle";case"cut":case"schneiden":return"mdi:content-cut";case"super cropping":return"mdi:arrow-down-bold-circle";case"topping":return"mdi:arrow-up-bold-circle";case"lollipop":return"mdi:candy";case"fim":return"mdi:scissors-cutting";case"rib":return"mdi:leaf";case"spray pest":case"spray water":return t.includes("pest")?"mdi:spray":"mdi:water"}},e.getGrowthPhaseIcon=(t,i,n)=>{var a,o;if(i&&(null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a._sensorMap)&&"object"==typeof n.attributes._sensorMap){const a=n.attributes._sensorMap.growth_phase;if(a){const n=i.states[a];if((null===(o=null==n?void 0:n.attributes)||void 0===o?void 0:o.options)&&Array.isArray(n.attributes.options)){const i=n.attributes.options.findIndex((e=>e===t));if(-1!==i)return(0,e.getGrowthPhaseIconByIndex)(i)}}}switch(t.toLowerCase()){case"seeds":return"mdi:seed";case"germination":return"mdi:seed-outline";case"rooting":return"mdi:sprout";case"growing":return"mdi:leaf";case"flowering":return"mdi:flower";case"harvested":return"mdi:content-cut";case"removed":return"mdi:delete";default:return"mdi:help-circle"}}},1322:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.EventUtils=void 0;const a=i(5869);class o{static handleInputUpdate(t,e,i){return n(this,void 0,void 0,(function*(){var n;if(t instanceof KeyboardEvent&&"Escape"===t.key)return void e.onUpdate();if(t instanceof KeyboardEvent&&"Enter"!==t.key&&"select"!==i)return;let o=t.target.value;if("number"===i){const t=(0,a.getFieldDefinition)(e.columnId);if(o="integer"===((null===(n=null==t?void 0:t.validation)||void 0===n?void 0:n.numberType)||"integer")?parseInt(o):parseFloat(o),isNaN(o))return}try{e.multiSelectMode&&e.selectedPlants.size>0?yield this.applyBulkUpdate(o,e.columnId,e):yield this.applySingleUpdate(o,e),e.onUpdate()}catch(t){console.error(`Error updating ${e.columnId}:`,t)}}))}static applyBulkUpdate(t,e,i){return n(this,void 0,void 0,(function*(){const{hass:e,selectedPlants:n}=i;for(const a of n)yield this.applySingleUpdate(t,Object.assign(Object.assign({},i),{plant:e.states[a]}))}))}static applySingleUpdate(t,e){return n(this,void 0,void 0,(function*(){const{hass:i,plant:n,columnId:s}=e,r=(0,a.getFieldDefinition)(s),l=null==r?void 0:r.service;if(!l)return;if("move_to_area"===l.action){const i=new Event("change");return Object.defineProperty(i,"target",{value:{value:t.toString()}}),void(yield o.handleAreaUpdate(i,e))}const d=(0,a.getSensorMapEntityId)(n,s);if(l.entityPrefix&&d){const e={entity_id:d};l.valueKey?e[l.valueKey]=t:e[s]=t,yield i.callService(l.domain,l.action,e)}else{const e={entity_id:n.entity_id};l.valueKey?e[l.valueKey]=t:e[s]=t,yield i.callService(l.domain,l.action,e)}}))}static handleAreaUpdate(t,e){return n(this,void 0,void 0,(function*(){var i;const{hass:n,plant:a,multiSelectMode:o,selectedPlants:s}=e,r=t.target.value,l="-"===r?"":null===(i=Object.entries(n.areas||{}).find((([,t])=>t.name===r)))||void 0===i?void 0:i[0];if(o&&s.size>0)for(const t of s){const e=n.entities[t];(null==e?void 0:e.device_id)&&(yield n.callService("plant","move_to_area",{device_id:e.device_id,area_id:l||""}))}else{const t=n.entities[a.entity_id];(null==t?void 0:t.device_id)&&(yield n.callService("plant","move_to_area",{device_id:t.device_id,area_id:l||""}))}e.onUpdate()}))}static handleSearch(t,e){e(t.target.value.toLowerCase())}static handleRowClick(t,e,i,n){if(t.stopPropagation(),!(0,a.getFieldDefinition)(i))return void n(e.entity_id);n((0,a.getSensorMapEntityId)(e,i)||e.entity_id)}static handleInputEvent(t,e,i){var n;let o=t.target.value;if("number"===e){const t=(0,a.getFieldDefinition)(i);if(o="integer"===((null===(n=null==t?void 0:t.validation)||void 0===n?void 0:n.numberType)||"integer")?parseInt(o):parseFloat(o),isNaN(o))return}return o}}e.EventUtils=o},5869:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getFieldName=e.getFieldOptions=e.getFieldValue=e.isSensorField=e.getFieldService=e.getFieldType=e.isFieldEditable=e.getFieldsByGroup=e.getFieldDefinition=e.FIELD_DEFINITIONS=e.getSensorMapEntity=e.getSensorMapEntityId=void 0;const n=i(2413),a=i(4139),o={domain:"plant",action:"update_plant_attributes"},s={domain:"select",action:"select_option",entityPrefix:"select.",valueKey:"option"},r={domain:"number",action:"set_value",entityPrefix:"number.",valueKey:"value"};e.getSensorMapEntityId=(t,e)=>t.attributes._sensorMap&&t.attributes._sensorMap[e]?t.attributes._sensorMap[e]:null,e.getSensorMapEntity=(t,i,n)=>{const a=(0,e.getSensorMapEntityId)(i,n);return a?null==t?void 0:t.states[a]:null};const l=(t,i,n,a)=>{const o=(0,e.getSensorMapEntity)(t,i,a);return(null==o?void 0:o.state)||""},d=(t,i,n,a)=>{var o;const s=(0,e.getSensorMapEntity)(t,i,a);return(null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.options)||[]};e.FIELD_DEFINITIONS=[{id:"friendly_name",name:t=>n.TranslationUtils.translateField(t,"friendly_name"),group:"name",type:"plant-name",clickAction:"none",getValue:(t,e)=>e.attributes.friendly_name||""},{id:"state",name:t=>n.TranslationUtils.translateField(t,"state"),group:"basic",type:"badge",clickAction:"more-info",getValue:(t,e)=>e.state},{id:"area",name:t=>n.TranslationUtils.translateField(t,"area"),group:"growing",type:"select",clickAction:"edit",service:{domain:"plant",action:"move_to_area"},options:t=>["-",...Object.values(t.areas||{}).map((t=>t.name)).sort()],getValue:(t,e)=>{var i;if(e.attributes._sensorMap&&e.attributes._sensorMap.location){const n=e.attributes._sensorMap.location,a=null===(i=null==t?void 0:t.states[n])||void 0===i?void 0:i.state;if(a)try{return JSON.parse(a).area||""}catch(t){return a}}return""}},{id:"growth_phase",name:t=>n.TranslationUtils.translateField(t,"growth_phase"),group:"growing",type:"select",clickAction:"edit",service:s,options:(t,e)=>d(t,e,0,"growth_phase"),getValue:(t,e)=>l(t,e,0,"growth_phase")},{id:"cycle",name:t=>n.TranslationUtils.translateField(t,"cycle"),group:"growing",type:"select",clickAction:"edit",service:s,options:(t,e)=>d(t,e,0,"cycle"),getValue:(t,e)=>l(t,e,0,"cycle")},{id:"pot_size",name:t=>n.TranslationUtils.translateField(t,"pot_size"),group:"growing",type:"number",clickAction:"edit",service:r,unit:"L",validation:{min:0,step:.1,numberType:"float"},getValue:(t,e)=>l(t,e,0,"pot_size")},{id:"flowering_duration",name:t=>n.TranslationUtils.translateField(t,"flowering_duration"),group:"growing",type:"number",clickAction:"edit",service:r,unit:"days",validation:{min:0,step:1,numberType:"integer"},getValue:(t,e)=>l(t,e,0,"flowering_duration")},{id:"strain",name:t=>n.TranslationUtils.translateField(t,"strain"),group:"genetics",type:"text",clickAction:"edit",service:o},{id:"breeder",name:t=>n.TranslationUtils.translateField(t,"breeder"),group:"genetics",type:"text",clickAction:"edit",service:o},{id:"feminized",name:t=>n.TranslationUtils.translateField(t,"feminized"),group:"genetics",type:"select",clickAction:"edit",service:o,options:t=>[n.TranslationUtils.translateUI(t,"yes"),n.TranslationUtils.translateUI(t,"no")]},{id:"original_flowering_duration",name:t=>n.TranslationUtils.translateField(t,"original_flowering_duration"),group:"genetics",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1,numberType:"integer"}},...a.PHASES.map((t=>{const e="removed"===t||"harvested"===t?"_date":"_start";return{id:`${t}${e}`,name:i=>n.TranslationUtils.translateField(i,`${t}${e}`),group:"phasebegin",type:"date",clickAction:"edit",service:o}})),{id:"seeds_duration",name:t=>n.TranslationUtils.translateField(t,"seeds_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"germination_duration",name:t=>n.TranslationUtils.translateField(t,"germination_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"rooting_duration",name:t=>n.TranslationUtils.translateField(t,"rooting_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"growing_duration",name:t=>n.TranslationUtils.translateField(t,"growing_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"flower_duration",name:t=>n.TranslationUtils.translateField(t,"flower_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"removed_duration",name:t=>n.TranslationUtils.translateField(t,"removed_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"harvested_duration",name:t=>n.TranslationUtils.translateField(t,"harvested_duration"),group:"phaseduration",type:"number",clickAction:"edit",service:o,unit:"days",validation:{min:0,step:1}},{id:"soil_moisture",name:t=>n.TranslationUtils.translateSensor(t,"soil_moisture"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"soil_moisture")},{id:"temperature",name:t=>n.TranslationUtils.translateSensor(t,"temperature"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"°C",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"temperature")},{id:"conductivity",name:t=>n.TranslationUtils.translateSensor(t,"conductivity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"µS/cm",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"conductivity")},{id:"ph",name:t=>n.TranslationUtils.translateSensor(t,"ph"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"pH",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"ph")},{id:"illuminance",name:t=>n.TranslationUtils.translateSensor(t,"illuminance"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"lx",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"illuminance")},{id:"air_humidity",name:t=>n.TranslationUtils.translateSensor(t,"air_humidity"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"%",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"air_humidity")},{id:"dli",name:t=>n.TranslationUtils.translateSensor(t,"dli"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"mol/d⋅m²",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"dli")},{id:"water_consumption",name:t=>n.TranslationUtils.translateSensor(t,"water_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"water_consumption")},{id:"fertilizer_consumption",name:t=>n.TranslationUtils.translateSensor(t,"fertilizer_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"fertilizer_consumption")},{id:"health",name:t=>n.TranslationUtils.translateSensor(t,"health"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"health")},{id:"power_consumption",name:t=>n.TranslationUtils.translateSensor(t,"power_consumption"),group:"sensors",type:"sensor",clickAction:"more-info",unit:"W",isSensor:!0,showStatusBar:!0,getValue:(t,e)=>l(t,e,0,"power_consumption")},{id:"ppfd_mol",name:t=>n.TranslationUtils.translateDiagnostics(t,"ppfd_mol"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"µmol/m²/s",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>{const i=l(t,e,0,"ppfd_mol");return i?Number(i).toFixed(6):i}},{id:"total_ppfd_mol_integral",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_ppfd_mol_integral"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"mol/m²",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_ppfd_mol_integral")},{id:"total_water_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_water_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"L",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_water_consumption")},{id:"total_fertilizer_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_fertilizer_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"ml",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_fertilizer_consumption")},{id:"total_power_consumption",name:t=>n.TranslationUtils.translateDiagnostics(t,"total_power_consumption"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"kWh",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"total_power_consumption")},{id:"energy_cost",name:t=>n.TranslationUtils.translateDiagnostics(t,"energy_cost"),group:"diagnostics",type:"sensor",clickAction:"more-info",unit:"€",isSensor:!0,showStatusBar:!1,getValue:(t,e)=>l(t,e,0,"energy_cost")},...["air_humidity","soil_moisture","temperature","conductivity","illuminance","dli","water_consumption","fertilizer_consumption","ph"].flatMap((t=>[{id:`min_${t}`,name:e=>n.TranslationUtils.translateField(e,`min_${t}`),group:"min_max",type:"number",clickAction:"edit",service:r,getValue:(e,i)=>l(e,i,0,`min_${t}`)},{id:`max_${t}`,name:e=>n.TranslationUtils.translateField(e,`max_${t}`),group:"min_max",type:"number",clickAction:"edit",service:r,getValue:(e,i)=>l(e,i,0,`max_${t}`)}])),{id:"timestamp",name:t=>n.TranslationUtils.translateField(t,"timestamp"),group:"details",type:"text",clickAction:"none",getValue:(t,e)=>e.attributes.timestamp||""},{id:"difficulty",name:t=>n.TranslationUtils.translateField(t,"difficulty"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.difficulty||""},{id:"yield",name:t=>n.TranslationUtils.translateField(t,"yield"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.yield||""},{id:"mold_resistance",name:t=>n.TranslationUtils.translateField(t,"mold_resistance"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.mold_resistance||""},{id:"hunger",name:t=>n.TranslationUtils.translateField(t,"hunger"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.hunger||""},{id:"effects",name:t=>n.TranslationUtils.translateField(t,"effects"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.effects||""},{id:"smell",name:t=>n.TranslationUtils.translateField(t,"smell"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.smell||""},{id:"taste",name:t=>n.TranslationUtils.translateField(t,"taste"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.taste||""},{id:"phenotype",name:t=>n.TranslationUtils.translateField(t,"phenotype"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.phenotype||""},{id:"growth_stretch",name:t=>n.TranslationUtils.translateField(t,"growth_stretch"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.growth_stretch||""},{id:"flower_stretch",name:t=>n.TranslationUtils.translateField(t,"flower_stretch"),group:"details",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.flower_stretch||""},{id:"notes",name:t=>n.TranslationUtils.translateField(t,"notes"),group:"notes",type:"textarea",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.notes||""},{id:"website",name:t=>n.TranslationUtils.translateField(t,"website"),group:"notes",type:"text",clickAction:"edit",service:o,getValue:(t,e)=>e.attributes.website||"",hasExternalLink:!0}],e.getFieldDefinition=t=>e.FIELD_DEFINITIONS.find((e=>e.id===t)),e.getFieldsByGroup=t=>e.FIELD_DEFINITIONS.filter((e=>e.group===t)),e.isFieldEditable=t=>{var i;return"edit"===(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.clickAction)},e.getFieldType=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.type)||"text"},e.getFieldService=t=>{var i;return null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.service},e.isSensorField=t=>{var i;return(null===(i=(0,e.getFieldDefinition)(t))||void 0===i?void 0:i.isSensor)||!1},e.getFieldValue=(t,i,n)=>{var a;const o=(0,e.getFieldDefinition)(t);return o?o.getValue?o.getValue(i,n):(null===(a=n.attributes[t])||void 0===a?void 0:a.toString())||"":""},e.getFieldOptions=(t,i,n)=>{const a=(0,e.getFieldDefinition)(t);return(null==a?void 0:a.options)?a.options(i,n):[]},e.getFieldName=(t,i)=>{const n=(0,e.getFieldDefinition)(t);return n?"function"==typeof n.name?n.name(i):n.name:t}},9442:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FilterUtils=void 0;const n=i(8598),a=i(5869);class o{static getEntityValue(t,e,i){return(0,a.getFieldValue)(i,t,e).toString()}static getUniqueValues(t,e,i){return[...new Set(e.map((e=>this.getEntityValue(t,e,i))))].sort()}static getAreaForEntity(t,e){if(!t)return;const i=t.devices||{},n=(t.entities||{})[e];if(n){if(n.area_id)return n.area_id;if(n.device_id){const t=i[n.device_id];if(null==t?void 0:t.area_id)return t.area_id}}}static applyFilters(t,e,i){let o=e.filter((t=>{const e=t.entity_id.split(".")[0];return i.entityTypes.has(e)}));return Object.keys(i.activeFilters).length>0&&(o=o.filter((e=>Object.entries(i.activeFilters).every((([i,o])=>{if("entity_type"===i)return!0;if((0,a.isSensorField)(i)){const a=n.SensorUtils.getSensorInfo(t,e,i),s=o;return a.value>=s.min&&a.value<=s.max}const s=this.getEntityValue(t,e,i);return o.has(s)}))))),o}static toggleFilter(t,e,i){if((0,a.isSensorField)(t))i.activeFilters[t]=e,i.activeFilters[t]||delete i.activeFilters[t];else{i.activeFilters[t]||(i.activeFilters[t]=new Set);const n=i.activeFilters[t];n.has(e)?(n.delete(e),0===n.size&&delete i.activeFilters[t]):n.add(e)}}static toggleEntityType(t,e){e.entityTypes.has(t)?e.entityTypes.size>1&&e.entityTypes.delete(t):e.entityTypes.add(t)}static getFilteredPlants(t,e,i,n,s){let r=o.applyFilters(t,e,i);return n&&(r=r.filter((e=>[(0,a.getFieldValue)("friendly_name",t,e),(0,a.getFieldValue)("state",t,e),(0,a.getFieldValue)("area",t,e),...s.map((i=>(0,a.getFieldValue)(i,t,e)))].filter(Boolean).some((t=>t.toString().toLowerCase().includes(n.toLowerCase())))))),r}}e.FilterUtils=o},8063:function(t,e){var i=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlantEntityUtils=void 0;class n{static getPlantInfo(t,e){return i(this,void 0,void 0,(function*(){return this._plantInfoCache[e]?this._plantInfoCache[e]:this._loadPlantInfoWithRetry(t,e)}))}static _loadPlantInfoWithRetry(t,e){return i(this,void 0,void 0,(function*(){try{this._plantLastLoaded[e]=Date.now();const i=yield t.callWS({type:"plant/get_info",entity_id:e}),n="object"==typeof i&&null!==i&&"result"in i?i.result:null;return n&&(this._plantInfoCache[e]=n),this._scheduleNextUpdate(t,e),n}catch(i){return console.error(`[PLANT-ENTITY] Error in API call for ${e}:`,i),this._scheduleNextUpdate(t,e,!0),null}}))}static _scheduleNextUpdate(t,e,i=!1){this._plantRetryTimeouts[e]&&(window.clearTimeout(this._plantRetryTimeouts[e]),delete this._plantRetryTimeouts[e]),this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i?1e4:5e3)}static initPlantDataLoading(t,e){t&&0!==e.length&&(this.clearAllTimeouts(),e.forEach((e=>{if(this._plantInfoCache[e])return void(this._plantRetryTimeouts[e]||this._scheduleNextUpdate(t,e));const i=500+2e3*Math.random();this._plantRetryTimeouts[e]=window.setTimeout((()=>{delete this._plantRetryTimeouts[e],this._loadPlantInfoWithRetry(t,e)}),i)})))}static clearAllTimeouts(){Object.values(this._plantRetryTimeouts).forEach((t=>{window.clearTimeout(t)})),this._plantRetryTimeouts={}}static getPlantEntities(t,e="all"){return Object.values(t.states).filter((t=>{if("object"!=typeof t||null===t||!("entity_id"in t)||!("attributes"in t)||"string"!=typeof t.entity_id)return!1;const i=t.entity_id.startsWith("plant."),n=t.entity_id.startsWith("cycle.")&&"member_count"in t.attributes;return"plant"===e?i:"cycle"===e?n:i||n}))}static updatePlantInfo(t,e,n){return i(this,void 0,void 0,(function*(){const i=new Map(n),a=e.map((t=>t.entity_id));this.initPlantDataLoading(t,a);for(const t of e){const e=this._plantInfoCache[t.entity_id];e?i.set(t.entity_id,e):i.has(t.entity_id)||i.set(t.entity_id,null)}return i}))}static togglePlantSelection(t,e,i){null==i||i.stopPropagation();const n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}static clearPlantSelection(){return new Set}}e.PlantEntityUtils=n,n._plantInfoCache={},n._plantRetryTimeouts={},n._plantLastLoaded={}},7514:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SensorAssignmentUtils=e.SENSOR_TYPES=void 0;const a=i(8063);e.SENSOR_TYPES=[{key:"temperature",icon:"mdi:thermometer",matches:(t,e)=>"temperature"===t||"°C"===e||"°F"===e},{key:"moisture",icon:"mdi:water-percent",matches:(t,e)=>"moisture"===t||"humidity"===t&&"%"===e},{key:"illuminance",icon:"mdi:brightness-5",matches:(t,e)=>"illuminance"===t||"lx"===e||"lm"===e},{key:"humidity",icon:"mdi:water",matches:(t,e)=>"humidity"===t||"%"===e},{key:"conductivity",icon:"mdi:flash",matches:(t,e)=>"conductivity"===t||"µS/cm"===e||"mS/cm"===e},{key:"power_consumption",icon:"mdi:power-plug",matches:(t,e)=>"power"===t||"energy"===t||"W"===e||"kW"===e||"kWh"===e||"Wh"===e},{key:"ph",icon:"mdi:ph",matches:(t,e)=>"ph"===t||"pH"===e}],e.SensorAssignmentUtils=class{static getSensorDevices(t,i){var n,a,o,s,r,l,d,c,h,u;const p=new Map;for(const[m,g]of Object.entries(t.states)){if(!m.startsWith("sensor."))continue;const _=g;if(_.attributes&&"external_sensor"in _.attributes)continue;const v=null===(a=null===(n=t.entities)||void 0===n?void 0:n[m])||void 0===a?void 0:a.device_id;if(v&&i.has(v))continue;const f=null===(o=_.attributes)||void 0===o?void 0:o.device_class,y=null===(s=_.attributes)||void 0===s?void 0:s.unit_of_measurement,b=e.SENSOR_TYPES.filter((t=>t.matches(f,y)));if(0===b.length)continue;const w=null===(r=t.entities)||void 0===r?void 0:r[m],x=null==w?void 0:w.device_id,k=x||m;let $=p.get(k);if(!$){const e=x?null===(l=t.devices)||void 0===l?void 0:l[x]:void 0;$={id:k,name:(null==e?void 0:e.name_by_user)||(null==e?void 0:e.name)||(null===(d=_.attributes)||void 0===d?void 0:d.friendly_name)||m,picture:null===(c=_.attributes)||void 0===c?void 0:c.entity_picture,types:{},isDevice:!!x,entityIcon:x?void 0:(null===(h=_.attributes)||void 0===h?void 0:h.icon)||b[0].icon},p.set(k,$)}!$.picture&&(null===(u=_.attributes)||void 0===u?void 0:u.entity_picture)&&($.picture=_.attributes.entity_picture);for(const t of b)$.types[t.key]||($.types[t.key]=m)}return Array.from(p.values()).sort(((t,e)=>t.name.localeCompare(e.name)))}static getPlantAndCycleDeviceIds(t){var e,i;const n=a.PlantEntityUtils.getPlantEntities(t,"all"),o=new Set;for(const a of n){const n=null===(i=null===(e=t.entities)||void 0===e?void 0:e[a.entity_id])||void 0===i?void 0:i.device_id;n&&o.add(n)}return o}static getPlantDevices(t){return a.PlantEntityUtils.getPlantEntities(t,"plant").map((e=>{var i,n,a;const o=null===(i=t.entities)||void 0===i?void 0:i[e.entity_id];return{entityId:e.entity_id,deviceId:null==o?void 0:o.device_id,name:(null===(n=e.attributes)||void 0===n?void 0:n.friendly_name)||e.entity_id,picture:null===(a=e.attributes)||void 0===a?void 0:a.entity_picture}})).sort(((t,e)=>t.name.localeCompare(e.name)))}static getPlantSensorInfo(t,i){return n(this,void 0,void 0,(function*(){var n,o,s,r,l;const d=yield a.PlantEntityUtils.getPlantInfo(t,i),c={};if(!d)return c;for(const i of e.SENSOR_TYPES){const e="power_consumption"===i.key?null===(o=null===(n=d.diagnostic_sensors)||void 0===n?void 0:n.total_power_consumption)||void 0===o?void 0:o.entity_id:null===(s=d[i.key])||void 0===s?void 0:s.sensor,a=e?null===(l=null===(r=t.states[e])||void 0===r?void 0:r.attributes)||void 0===l?void 0:l.external_sensor:void 0;c[i.key]={source:a,meterEntityId:e}}return c}))}static getSatellitePosition(t,e,i){const n=t/e*2*Math.PI-Math.PI/2;return{x:Math.cos(n)*i,y:Math.sin(n)*i}}}},8598:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SensorUtils=void 0;const n=i(5869);e.SensorUtils=class{static getSensorInfo(t,e,i){const a=(0,n.getFieldDefinition)(i),o=(0,n.getSensorMapEntity)(t,e,i);if(o)return{value:Number(o.state)||0,state:o.state,unit:(null==a?void 0:a.unit)||o.attributes.unit_of_measurement||"",min:o.attributes.min_value,max:o.attributes.max_value};if(e.attributes._apiInfo){const t=e.attributes._apiInfo,n={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[n]&&t[n].current)return{value:Number(t[n].current)||0,state:String(t[n].current),unit:(null==a?void 0:a.unit)||t[n].unit_of_measurement||"",min:t[n].min?Number(t[n].min):null,max:t[n].max?Number(t[n].max):null};if(t.diagnostic_sensors&&t.diagnostic_sensors[n]&&t.diagnostic_sensors[n].current)return{value:Number(t.diagnostic_sensors[n].current)||0,state:String(t.diagnostic_sensors[n].current),unit:(null==a?void 0:a.unit)||t.diagnostic_sensors[n].unit_of_measurement||"",min:null,max:null}}return{value:0,state:"N/A",unit:(null==a?void 0:a.unit)||"",min:null,max:null}}static getSensorRange(t,e,i){const a=(0,n.getFieldDefinition)(i);return{min:null,max:null,unit:(null==a?void 0:a.unit)||""}}static getSensorThresholds(t,e,i){var a,o;if(e.attributes._apiInfo){const t=e.attributes._apiInfo,n={soil_moisture:"moisture",air_humidity:"humidity",total_ppfd_mol_integral:"total_integral",total_water_consumption:"total_water",total_fertilizer_consumption:"total_fertilizer"}[i]||i;if(t[n]&&void 0!==t[n].min&&void 0!==t[n].max)return{min:Number(t[n].min)||0,max:Number(t[n].max)||100}}const s=(0,n.getSensorMapEntityId)(e,`min_${i}`),r=(0,n.getSensorMapEntityId)(e,`max_${i}`);return s&&r&&"unavailable"!==(null===(a=t.states[s])||void 0===a?void 0:a.state)&&"unavailable"!==(null===(o=t.states[r])||void 0===o?void 0:o.state)?{min:Number(t.states[s].state)||0,max:Number(t.states[r].state)||100}:{min:0,max:100}}static isSensorColumn(t){return(0,n.isSensorField)(t)}static calculateSensorStatus(t,e,i){return isNaN(t)?"unavailable":t>=e&&t<=i?"good":"bad"}}},3048:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SortUtils=void 0;const n=i(5869);e.SortUtils=class{static getSortedPlants(t,e,i,a){return[...t].sort(((t,o)=>{const s=(0,n.getFieldValue)(e,a,t),r=(0,n.getFieldValue)(e,a,o);if("number"==typeof s&&"number"==typeof r)return"asc"===i?s-r:r-s;const l=String(s).toLowerCase(),d=String(r).toLowerCase();return"asc"===i?l.localeCompare(d):d.localeCompare(l)}))}}},7361:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.StateManager=void 0;const a=i(9442),o=i(1322),s=i(289),r=i(5869);e.StateManager=class{constructor(t,e,i){this.hass=t,this.config=e,this.requestUpdate=i,this.state=this.getInitialState()}getInitialState(){return{sortColumn:"friendly_name",sortDirection:"asc",editingCell:null,searchQuery:"",multiSelectMode:!1,selectedPlants:new Set,filterMode:!1,filterState:{activeFilters:{},entityTypes:new Set(["plant","cycle"])},showGallery:!1,galleryEntityId:null,galleryImages:[]}}getState(){return this.state}updateConfig(t){this.config=t}updateHass(t){this.hass=t}handleSort(t){this.state.sortColumn===t?this.state.sortDirection="asc"===this.state.sortDirection?"desc":"asc":(this.state.sortColumn=t,this.state.sortDirection="asc"),this.requestUpdate()}handleCellClick(t,e,i,n){switch(t.stopPropagation(),this.state.multiSelectMode&&0===this.state.selectedPlants.size&&this.state.selectedPlants.add(e.entity_id),s.CellTypeUtils.getClickAction(i)){case"edit":this.state.editingCell={entityId:e.entity_id,column:i};break;case"more-info":{let t=e.entity_id;if((0,r.isSensorField)(i)){const n=(0,r.getSensorMapEntityId)(e,i);n&&(t=n)}n(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}));break}}this.requestUpdate()}handleRowClick(t,e,i,n){t.stopPropagation(),this.handleCellClick(t,e,i,n)}handleSearch(t){o.EventUtils.handleSearch(t,(t=>{this.state.searchQuery=t,this.requestUpdate()}))}handleInputUpdate(t,e,i,a){return n(this,void 0,void 0,(function*(){yield o.EventUtils.handleInputUpdate(t,{hass:this.hass,plant:e,columnId:i,multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}},a)}))}handleAreaUpdate(t,e){return n(this,void 0,void 0,(function*(){yield o.EventUtils.handleAreaUpdate(t,{hass:this.hass,plant:e,columnId:"area",multiSelectMode:this.state.multiSelectMode,selectedPlants:this.state.selectedPlants,editingCell:this.state.editingCell,onUpdate:()=>{this.state.editingCell=null,this.requestUpdate()}})}))}toggleMultiSelect(){this.state.multiSelectMode=!this.state.multiSelectMode,this.state.multiSelectMode||this.state.selectedPlants.clear(),this.requestUpdate()}togglePlantSelection(t,e){e.preventDefault(),e.stopPropagation(),this.state.selectedPlants.has(t)?this.state.selectedPlants.delete(t):this.state.selectedPlants.add(t),this.sendEntitySelectedEvent(),this.requestUpdate()}sendEntitySelectedEvent(){var t;if(!(null===(t=this.config)||void 0===t?void 0:t.identifier))return;if(0===this.state.selectedPlants.size){const t=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:null,selectedEntities:[]}});return void window.dispatchEvent(t)}const e=Array.from(this.state.selectedPlants),i=e[e.length-1];if(!i||!this.hass.states[i])return;const n=new CustomEvent("brokkoli-card-entity-selected",{bubbles:!0,composed:!0,detail:{sourceIdentifier:this.config.identifier,selectedEntityId:i,selectedEntities:e}});window.dispatchEvent(n)}toggleFilterMode(){this.state.filterMode=!this.state.filterMode,this.requestUpdate()}toggleFilter(t,e){a.FilterUtils.toggleFilter(t,e,this.state.filterState),this.requestUpdate()}toggleEntityType(t){a.FilterUtils.toggleEntityType(t,this.state.filterState),this.requestUpdate()}getCursorStyle(t){return s.CellTypeUtils.getCursorStyle(t)}clearSearch(){this.state.searchQuery="",this.requestUpdate()}handleGalleryOpen(t){return n(this,void 0,void 0,(function*(){if(!this.hass)return;const e=this.hass.states[t];if(!e)return;const i=[];if(e.attributes.entity_picture&&i.push(e.attributes.entity_picture),e.attributes.images&&Array.isArray(e.attributes.images)){const t=e.attributes.download_path||"/local/images/plants/";e.attributes.images.forEach((e=>{i.push(`${t}${e}`)}))}this.state.showGallery=!0,this.state.galleryEntityId=t,this.state.galleryImages=i,this.requestUpdate()}))}closeGallery(){this.state.showGallery=!1,this.state.galleryEntityId=null,this.requestUpdate()}}},70:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateUtils=void 0;const n=i(4437),a=i(8598),o=i(5869),s=i(2413);e.TemplateUtils=class{static renderDateInput(t,e){return n.html`
            <input
                type="date"
                .value="${(null==t?void 0:t.split("T")[0])||""}"
                @change=${t=>e.onInput(t,"date")}
                @click=${t=>t.stopPropagation()}
                class="date-input"
            >
        `}static renderNumberInput(t,e,i,a=.1){var s,r;const l=(0,o.getFieldDefinition)(i.columnId);return n.html`
            <input
                type="number"
                step="${(null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.step)||a}"
                min="${(null===(r=null==l?void 0:l.validation)||void 0===r?void 0:r.min)||0}"
                .value="${t||""}"
                @keydown=${t=>i.onInput(t,"number")}
                @click=${t=>t.stopPropagation()}
                class="numeric-input"
            > ${(null==l?void 0:l.unit)||e}
        `}static renderSelectInput(t,e,i,a){const s=(0,o.getFieldDefinition)(i.columnId),r=(null==s?void 0:s.options)?s.options(i.hass,i.plant):e;return n.html`
            <select
                @change=${t=>i.onInput(t,"select")}
                @click=${t=>t.stopPropagation()}
                class="${a}"
            >
                ${r.map((e=>n.html`
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
        `}static renderSensorCell(t){const{hass:e,plant:i,columnId:o}=t,s=a.SensorUtils.getSensorInfo(e,i,o),r=a.SensorUtils.getSensorThresholds(e,i,o),l=100*Math.max(0,Math.min(1,(s.value-r.min)/(r.max-r.min))),d=a.SensorUtils.calculateSensorStatus(s.value,r.min,r.max);return n.html`
            <div class="sensor-cell" @click=${t.onClick}>
                <div class="meter-container">
                    <div class="meter red">
                        <span class="${d}" style="width: 100%;"></span>
                    </div>
                    <div class="meter green">
                        <span class="${d}" style="width:${"unavailable"!==d?l:"0"}%;"></span>
                    </div>
                    <div class="meter red">
                        <span class="bad" style="width:${"unavailable"!==d&&s.value>r.max?100:0}%;"></span>
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
        `}}},2413:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(a,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function r(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((n=n.apply(t,e||[])).next())}))},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.TranslationUtils=void 0;const o=a(i(4944)),s=a(i(4300)),r=a(i(3099)),l=a(i(4055)),d=a(i(4668)),c=a(i(9538)),h=a(i(277)),u=a(i(1119)),p=a(i(6679)),m=a(i(6958)),g=a(i(5661)),_={de:o.default,en:s.default,es:r.default,fr:l.default,hu:d.default,it:c.default,nl:h.default,pl:u.default,pt:p.default,ru:m.default,zh:g.default};e.TranslationUtils=class{static getLanguage(t){return t.language||"en"}static getBundle(t){var e,i;return null!==(i=null!==(e=_[t])&&void 0!==e?e:_.en)&&void 0!==i?i:{}}static getTranslation(t,e){const i=this.getBundle(this.getLanguage(t));return this.getTranslationFromObject(i,e)}static getTranslationFromObject(t,e){const i=e.split(".");let n=t;for(const t of i){if(!n||"object"!=typeof n||!(t in n))return e;n=n[t]}return"string"==typeof n?n:e}static initializeTranslations(t){return n(this,void 0,void 0,(function*(){}))}static translateField(t,e){return this.getTranslation(t,`frontend.fields.${e}`)}static translateSensor(t,e){return this.getTranslation(t,`frontend.sensors.${e}`)}static translateGrowthPhase(t,e){return this.getTranslation(t,`frontend.growth_phases.${e}`)}static translateTreatment(t,e){return this.getTranslation(t,`frontend.treatments.${e}`)}static translateDiagnostics(t,e){return this.getTranslation(t,`frontend.sensors.${e}`)}static translateUI(t,e){return this.getTranslation(t,`frontend.ui.${e}`)}static translateListCard(t,e){return this.getTranslation(t,`frontend.list_card.${e}`)}static translateHistory(t,e){return this.getTranslation(t,`frontend.history.${e}`)}static translate(t,e){return this.getTranslation(t,e)}static translateHelper(t,e){return this.getTranslation(t,`frontend.helpers.${e}`)}static createSensorTooltip(t,e,i,n,a,o){const s=this.translateSensor(t,e),r=this.translateUI(t,"tooltip_min_max");return o?`${s}: ${i} ${o}<br>(${r}: ${n} ~ ${a} ${o})`:`${s}: ${i}<br>(${r}: ${n} ~ ${a})`}}},2135:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.moreInfo=e.getStubConfig=e.getConfigElement=void 0;const n=i(4356),a=i(4139);e.getConfigElement=()=>document.createElement("brokkoli-card-editor"),e.getStubConfig=t=>{const e=t=>{if("object"==typeof t&&"entity_id"in t&&"string"==typeof t.entity_id&&0===t.entity_id.indexOf("plant."))return!!t};let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:a.default_show_bars}},e.moreInfo=(t,e)=>{(0,n.fireEvent)(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})}},7804:(t,e,i)=>{i.d(e,{OA:()=>n,WL:()=>o,u$:()=>a});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6752:(t,e,i)=>{var n;i.d(e,{JW:()=>I,XX:()=>V,c0:()=>E,ge:()=>G,qy:()=>S,s6:()=>T});const a=window,o=a.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,d="?"+l,c=`<${d}>`,h=document,u=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,g=t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),_="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,y=/>/g,b=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,k=/^(?:script|style|textarea|title)$/i,$=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),S=$(1),I=$(2),E=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),C=new WeakMap,D=h.createTreeWalker(h,129,null,!1);function P(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const M=(t,e)=>{const i=t.length-1,n=[];let a,o=2===e?"<svg>":"",s=v;for(let e=0;e<i;e++){const i=t[e];let d,h,u=-1,p=0;for(;p<i.length&&(s.lastIndex=p,h=s.exec(i),null!==h);)p=s.lastIndex,s===v?"!--"===h[1]?s=f:void 0!==h[1]?s=y:void 0!==h[2]?(k.test(h[2])&&(a=RegExp("</"+h[2],"g")),s=b):void 0!==h[3]&&(s=b):s===b?">"===h[0]?(s=null!=a?a:v,u=-1):void 0===h[1]?u=-2:(u=s.lastIndex-h[2].length,d=h[1],s=void 0===h[3]?b:'"'===h[3]?x:w):s===x||s===w?s=b:s===f||s===y?s=v:(s=b,a=void 0);const m=s===b&&t[e+1].startsWith("/>")?" ":"";o+=s===v?i+c:u>=0?(n.push(d),i.slice(0,u)+r+i.slice(u)+l+m):i+l+(-2===u?(n.push(void 0),e):m)}return[P(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,s=0;const c=t.length-1,h=this.parts,[p,m]=M(t,e);if(this.el=z.createElement(p,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=D.nextNode())&&h.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(r)||e.startsWith(l)){const i=m[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+r).split(l),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?N:"@"===e[1]?R:U})}else h.push({type:6,index:a})}for(const e of t)n.removeAttribute(e)}if(k.test(n.tagName)){const t=n.textContent.split(l),e=t.length-1;if(e>0){n.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],u()),D.nextNode(),h.push({type:2,index:++a});n.append(t[e],u())}}}else if(8===n.nodeType)if(n.data===d)h.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(l,t+1));)h.push({type:7,index:a}),t+=l.length-1}a++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function A(t,e,i=t,n){var a,o,s,r;if(e===E)return e;let l=void 0!==n?null===(a=i._$Co)||void 0===a?void 0:a[n]:i._$Cl;const d=p(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(r=i)._$Co)&&void 0!==s?s:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=A(t,l._$AS(t,e.values),l,n)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);D.currentNode=a;let o=D.nextNode(),s=0,r=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new O(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new H(o,this,t)),this._$AV.push(e),l=n[++r]}s!==(null==l?void 0:l.index)&&(o=D.nextNode(),s++)}return D.currentNode=h,a}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,n){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),p(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):g(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,a="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=z.createElement(P(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.v(i);else{const t=new F(a,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new z(t)),e}T(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new O(this.k(u()),this.k(u()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,i,n,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const a=this.strings;let o=!1;if(void 0===a)t=A(this,t,e,0),o=!p(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const n=t;let s,r;for(t=a[0],s=0;s<a.length-1;s++)r=A(this,n[i+s],e,s),r===E&&(r=this._$AH[s]),o||(o=!p(r)||r!==this._$AH[s]),r===T?t=T:t!==T&&(t+=(null!=r?r:"")+a[s+1]),this._$AH[s]=r}o&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const L=o?o.emptyScript:"";class N extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class R extends U{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=A(this,t,e,0))&&void 0!==i?i:T)===E)return;const n=this._$AH,a=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==T&&(n===T||a);a&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const G={O:r,P:l,A:d,C:1,M,L:F,R:g,D:A,I:O,V:U,H:N,N:R,U:j,F:H},B=a.litHtmlPolyfillSupport;null==B||B(z,O),(null!==(n=a.litHtmlVersions)&&void 0!==n?n:a.litHtmlVersions=[]).push("2.8.0");const V=(t,e,i)=>{var n,a;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;o._$litPart$=s=new O(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s}},2924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>n,eventOptions:()=>d,property:()=>s,query:()=>c,queryAll:()=>h,queryAssignedElements:()=>g,queryAssignedNodes:()=>_,queryAsync:()=>u,state:()=>r});const n=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),a=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function s(t){return(e,i)=>void 0!==i?o(t,e,i):a(t,e)}function r(t){return s({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(i,n)=>{var a;if(void 0===n){const n=null!==(a=i.originalKey)&&void 0!==a?a:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const a=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(a,n)}};function d(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function c(t,e){return l({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}function h(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const m=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function g(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:n=>({get(){var n;const a="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(a),s=null!=o?m(o,t):[];return i?s.filter((t=>t.matches(i))):s},enumerable:!0,configurable:!0})})}function _(t,e,i){let n,a=t;return"object"==typeof t?(a=t.slot,n=t):n={flatten:e},i?g({slot:a,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(a?`[name=${a}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==o?void 0:o.assignedNodes(n))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},1145:(t,e,i)=>{i.r(e),i.d(e,{styleMap:()=>r});var n=i(6752),a=i(7804);const o="important",s=" !"+o,r=(0,a.u$)(class extends a.WL{constructor(t){var e;if(super(t),t.type!==a.OA.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const n=e[t];if(null!=n){this.ht.add(t);const e="string"==typeof n&&n.endsWith(s);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?o:""):i[t]=n}}return n.c0}})},6781:(t,e,i)=>{i.r(e),i.d(e,{UnsafeHTMLDirective:()=>o,unsafeHTML:()=>s});var n=i(6752),a=i(7804);class o extends a.WL{constructor(t){if(super(t),this.et=n.s6,t.type!==a.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.s6||null==t)return this.ft=void 0,this.et=t;if(t===n.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const s=(0,a.u$)(o)},4437:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>r,LitElement:()=>I,ReactiveElement:()=>w,UpdatingElement:()=>S,_$LE:()=>T,_$LH:()=>$.ge,adoptStyles:()=>c,css:()=>d,defaultConverter:()=>v,getCompatibleStyle:()=>h,html:()=>$.qy,isServer:()=>C,noChange:()=>$.c0,notEqual:()=>f,nothing:()=>$.s6,render:()=>$.XX,supportsAdoptingStyleSheets:()=>a,svg:()=>$.JW,unsafeCSS:()=>l});const n=window,a=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new r("string"==typeof t?t:t+"",void 0,o),d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(i,t,o)},c=(t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),a=n.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,t.appendChild(i)}))},h=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var u;const p=window,m=p.trustedTypes,g=m?m.emptyScript:"",_=p.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f},b="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=y){var n;const a=this.constructor._$Ep(t,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,a=n._$Ev.get(t);if(void 0!==a&&this._$El!==a){const t=n.getPropertyOptions(a),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=a,this[a]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w[b]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:w}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");var x,k,$=i(6752);const S=w;class I extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,$.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return $.c0}}I.finalized=!0,I._$litElement$=!0,null===(x=globalThis.litElementHydrateSupport)||void 0===x||x.call(globalThis,{LitElement:I});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:I});const T={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(k=globalThis.litElementVersions)&&void 0!==k?k:globalThis.litElementVersions=[]).push("3.3.3");const C=!1},8330:t=>{t.exports=JSON.parse('{"name":"brokkoli-card","version":"2026.8.0","description":"A Lovelace brokkoli card for Home Assistant","main":"brokkoli-card.js","repository":{"type":"git","url":"git+ssh://git@github.com/Olen/lovelace-brokkoli-card.git"},"author":"Ola Bjorling Erdal <ola@bjorling.se>","license":"MIT","scripts":{"build":"webpack -c webpack.config.js","lint":"eslint src/**/*.ts","watch":"webpack -c webpack.config.js --watch --mode=development"},"dependencies":{"@mdi/js":"^7.4.47","custom-card-helpers":"^1.9.0","flatpickr":"^4.6.13","home-assistant-js-websocket":"^9.4.0","lit":"^2.8.0","lit-element":"^2.5.1"},"devDependencies":{"@babel/core":"^7.26.0","@babel/preset-env":"^7.26.0","@babel/preset-typescript":"^7.26.0","@types/node":"^20.11.30","@typescript-eslint/eslint-plugin":"^8.19.1","apexcharts":"^4.4.0","babel-loader":"^9.1.3","compression-webpack-plugin":"^11.1.0","copy-webpack-plugin":"^13.0.0","css-loader":"^7.1.2","eslint":"^8.57.0","style-loader":"^4.0.0","ts-loader":"^9.5.2","typescript":"^5.7.3","webpack":"^5.97.1","webpack-cli":"^5.1.4"},"keywords":[],"bugs":{"url":"https://github.com/Olen/lovelace-brokkoli-card/issues"},"homepage":"https://github.com/Olen/lovelace-brokkoli-card#readme"}')},4944:t=>{t.exports=JSON.parse('{"frontend":{"ui":{"entity_not_available":"Entität nicht verfügbar","no_data":"Keine Daten verfügbar","error":"Fehler","define_entity":"Sie müssen eine Entität definieren","loading":"Wird geladen...","unknown_state":"Unbekannter Zustand","name":"Name","status":"Status","area":"Bereich","config_error_entity_required":"Du musst entweder eine Entity oder listen_to definieren","unavailable":"Nicht verfügbar","plants_count":"Plants","plants_selected":"Plants ausgewählt","no_plants_found":"Keine Pflanzen gefunden","entity_not_found":"Entity nicht gefunden","return_to_cycle":"Zurück zum Cycle","entity_unavailable":"Entity nicht verfügbar","no_entity_configured":"Keine Entity oder listen_to konfiguriert","area_config_error":"Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren","days":"Tage","members":"Mitglieder","open":"Öffnen","photo_taken_on":"Foto aufgenommen am","previous_image":"Vorheriges Bild","next_image":"Nächstes Bild","unknown_date":"Datum unbekannt","no_completed_phases":"Noch keine abgeschlossenen Phasen verfügbar","harvest_date":"Ernte am","harvest_weight":"Erntegewicht","harvest_notes":"Ernte-Notizen","treatment_description":"Behandlung durchgeführt","pot_size_changed":"Topfgröße geändert auf","moved_to_area":"Umzug nach","legend_primary_color":"Primärfarbe","legend_secondary_color":"Sekundärfarbe","legend_opacity":"Deckkraft","legend_rings_mode":"Ringe-Modus","legend_labels_mode":"Labels-Modus","legend_heatmap_mode":"Heatmap-Modus","confirm":"Bestätigen","tooltip_error":"Fehler beim Laden der Daten","tooltip_range":"Bereich","tooltip_mean":"Mittelwert","tooltip_min_max":"Min - Max","day":"Tag","days_since_planting":"Tage seit Pflanzung","upload_images_only":"Bitte nur Bilder hochladen!","image_too_large":"Bild ist zu groß! Maximale Größe ist 10MB.","upload_error":"Fehler beim Upload","delete_image_error":"Fehler beim Löschen des Bildes","set_main_image_error":"Fehler beim Setzen des Hauptbildes","delete_error":"Fehler beim Löschen","add_image":"Bild hinzufügen","set_as_main_image":"Als Hauptbild setzen","delete_image":"Bild löschen","close":"Schließen","no_images_available":"Keine Bilder vorhanden","click_camera_to_add_image":"Klicke auf das Kamera-Symbol oben, um ein Bild hinzuzufügen","clone_plant":"Pflanze klonen","move_to_cycle":"Zu Zyklus verschieben","replace_sensors":"Sensoren ersetzen","delete_plant":"Pflanze löschen","select_cycle":"Zyklus auswählen","please_select":"Bitte wählen...","move":"Verschieben","cancel":"Abbrechen","clone":"Klonen","delete_plant_confirmation":"Möchten Sie diese Pflanze wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.","confirm_delete":"Löschen bestätigen","no_matching_sensors":"Keine passenden Sensoren gefunden","other_images":"Andere Bilder","back_to_main_images":"Zurück zu Hauptbildern","main_images":"Hauptbilder","legend_rings_mode_active":"Modus: Ringe (Klick wechselt)","legend_labels_mode_active":"Modus: Labels (Klick wechselt)","legend_heatmap_mode_active":"Modus: Heatmap (Klick wechselt)","flowering_past":"Bisherige Blüte","flowering_to_go":"Restliche Blüte"},"fields":{"friendly_name":"Name","state":"Status","area":"Bereich","growth_phase":"Wachstumsphase","cycle":"Durchgang","pot_size":"Topfgröße","flowering_duration":"Blütezeit","strain":"Sorte","breeder":"Züchter","feminized":"Feminisiert","original_flowering_duration":"Original Blütezeit","timestamp":"Zeitstempel","difficulty":"Schwierigkeit","yield":"Ertrag","mold_resistance":"Schimmelresistenz","hunger":"Hunger","effects":"Effekte","smell":"Geruch","taste":"Geschmack","phenotype":"Phänotyp","growth_stretch":"Wachstumsdehnung","flower_stretch":"Blütendehnung","notes":"Notizen","website":"Website","lineage":"Abstammung","infotext1":"Infotext 1","infotext2":"Infotext 2","min_soil_moisture":"Min. Bodenfeuchtigkeit","max_soil_moisture":"Max. Bodenfeuchtigkeit","min_temperature":"Min. Temperatur","max_temperature":"Max. Temperatur","min_conductivity":"Min. Leitfähigkeit","max_conductivity":"Max. Leitfähigkeit","min_illuminance":"Min. Beleuchtungsstärke","max_illuminance":"Max. Beleuchtungsstärke","min_air_humidity":"Min. Luftfeuchtigkeit","max_air_humidity":"Max. Luftfeuchtigkeit","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Wasserverbrauch","max_water_consumption":"Max. Wasserverbrauch","min_fertilizer_consumption":"Min. Düngerverbrauch","max_fertilizer_consumption":"Max. Düngerverbrauch","min_ph":"Min. pH-Wert","max_ph":"Max. pH-Wert","seed_start":"Samen Start","germination_start":"Keimen Start","rooting_start":"Wurzeln Start","growth_start":"Wachstum Start","flowering_start":"Blüte Start","harvested_start":"Geerntet Start","removed_start":"Entfernt Start","seed_duration":"Samen Dauer","germination_duration":"Keimen Dauer","rooting_duration":"Wurzeln Dauer","growth_duration":"Wachstum Dauer","flower_duration":"Blüte Dauer","harvested_duration":"Geerntet Dauer","removed_duration":"Entfernt Dauer"},"sensors":{"temperature":"Temperatur","soil_moisture":"Bodenfeuchtigkeit","moisture":"Bodenfeuchtigkeit","conductivity":"Leitfähigkeit","illuminance":"Beleuchtungsstärke","air_humidity":"Luftfeuchtigkeit","humidity":"Luftfeuchtigkeit","dli":"Tägliche Lichtintegral","water_consumption":"Wasserverbrauch","fertilizer_consumption":"Düngerverbrauch","power_consumption":"Stromverbrauch","total_water_consumption":"Gesamter Wasserverbrauch","total_fertilizer_consumption":"Gesamter Düngerverbrauch","total_power_consumption":"Gesamter Stromverbrauch","ph":"pH-Wert","health":"Gesundheit","ppfd_mol":"PPFD","total_ppfd":"Gesamt PPFD","total_ppfd_mol_integral":"Gesamt PPFD","total_integral":"Gesamtintegral","energy_cost":"Energiekosten"},"growth_phases":{"seeds":"Samen","germination":"Keimen","rooting":"Wurzeln","growing":"Wachstum","flowering":"Blüte","harvested":"Geerntet","removed":"Entfernt"},"treatments":{"":"Keine","cut":"Schneiden","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Schädlingsbekämpfung","spray water":"Bewässerung"},"history":{"days":"Tage","pot_size_placeholder":"Topfgröße in Liter...","please_select":"Bitte wählen...","cut":"Schneiden","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Schädlingsbekämpfung","spray_water":"Bewässerung","growth_phase":"Wachstumsphase","area":"Bereich","pot_size":"Topfgröße","treatment":"Behandlung","journal":"Journal","add_entry":"Eintrag hinzufügen","image_taken":"Bild aufgenommen","photo":"Foto","phase_started":"Phase gestartet","pot_size_changed":"Topfgröße geändert","moved_to":"Umgezogen nach","harvest":"Ernte","expected_harvest_date":"Erwartetes Erntedatum","journal_placeholder":"Journal-Eintrag..."},"list_card":{"title":"Brokkoli List Card","description":"Eine tabellarische Übersicht aller Pflanzen","plant_overview":"Pflanzenübersicht","search_placeholder":"Suche nach Pflanzen...","filter_close":"Filter schließen","filter":"Filter","multiselect_end":"Mehrfachauswahl beenden","multiselect":"Mehrfachauswahl","search_reset":"Suche zurücksetzen","search_default":"Suche...","entity_type":"Entity Typ","plants":"Pflanzen","cycles":"Cycles","filter_range_to":"bis","add_plant":"Neue Pflanze hinzufügen"},"helpers":{"growth_phase":"Wachstumsphase","flowering_duration":"Blütedauer","pot_size":"Topfgröße","water_capacity":"Wasserkapazität","treatment":"Behandlung","health":"Gesundheit","journal":"Journal","location":"Standort","cycle":"Zyklus"}}}')},4300:t=>{t.exports=JSON.parse('{"frontend":{"ui":{"unavailable":"Unavailable","config_error_entity_required":"You must define either an entity or listen_to","area_config_error":"You must define at least an area, an entity, or a list of entities","plants_count":"Plants","return_to_cycle":"Return to Cycle","previous_image":"Previous Image","next_image":"Next Image","unknown_date":"Unknown Date","tooltip_error":"Error","tooltip_range":"Range","tooltip_mean":"Mean","tooltip_min_max":"Min - Max","day":"Day","days_since_planting":"Days Since Planting","upload_images_only":"Please upload images only!","image_too_large":"Image too large! Maximum size is 10MB.","upload_error":"Upload Error","delete_image_error":"Error deleting image","set_main_image_error":"Error setting main image","delete_error":"Error deleting","add_image":"Add Image","set_as_main_image":"Set as Main Image","delete_image":"Delete Image","close":"Close","no_images_available":"No images available","click_camera_to_add_image":"Click the camera icon above to add an image","clone_plant":"Clone Plant","move_to_cycle":"Move to Cycle","replace_sensors":"Replace Sensors","delete_plant":"Delete Plant","select_cycle":"Select Cycle","please_select":"Please select...","move":"Move","cancel":"Cancel","clone":"Clone","delete_plant_confirmation":"Do you really want to delete this plant? This action cannot be undone.","confirm_delete":"Confirm Delete","no_matching_sensors":"No matching sensors found","other_images":"Other Images","back_to_main_images":"Back to Main Images","main_images":"Main Images","legend_rings_mode_active":"Mode: Rings (click to switch)","legend_labels_mode_active":"Mode: Labels (click to switch)","legend_heatmap_mode_active":"Mode: Heatmap (click to switch)","flowering_past":"Flowering past","flowering_to_go":"Flowering remaining","days":"Days"},"fields":{"friendly_name":"Name","state":"State","area":"Area","growth_phase":"Growth Phase","cycle":"Cycle","pot_size":"Pot Size","flowering_duration":"Flowering Duration","strain":"Strain","breeder":"Breeder","feminized":"Feminized","original_flowering_duration":"Original Flowering Duration","timestamp":"Timestamp","difficulty":"Difficulty","yield":"Yield","mold_resistance":"Mold Resistance","hunger":"Hunger","effects":"Effects","smell":"Smell","taste":"Taste","phenotype":"Phenotype","growth_stretch":"Growth Stretch","flower_stretch":"Flower Stretch","notes":"Notes","website":"Website","lineage":"Lineage","infotext1":"Info Text 1","infotext2":"Info Text 2","min_soil_moisture":"Min. Soil Moisture","max_soil_moisture":"Max. Soil Moisture","min_temperature":"Min. Temperature","max_temperature":"Max. Temperature","min_conductivity":"Min. Conductivity","max_conductivity":"Max. Conductivity","min_illuminance":"Min. Illuminance","max_illuminance":"Max. Illuminance","min_air_humidity":"Min. Air Humidity","max_air_humidity":"Max. Air Humidity","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Water Consumption","max_water_consumption":"Max. Water Consumption","min_fertilizer_consumption":"Min. Fertilizer Consumption","max_fertilizer_consumption":"Max. Fertilizer Consumption","min_ph":"Min. pH Value","max_ph":"Max. pH Value","seed_start":"Seed Start","germination_start":"Germination Start","rooting_start":"Rooting Start","growth_start":"Growth Start","flowering_start":"Flowering Start","harvested_start":"Harvested Start","removed_start":"Removed Start","seed_duration":"Seed Duration","germination_duration":"Germination Duration","rooting_duration":"Rooting Duration","growth_duration":"Growth Duration","flower_duration":"Flower Duration","harvested_duration":"Harvested Duration","removed_duration":"Removed Duration"},"sensors":{"temperature":"Temperature","soil_moisture":"Soil Moisture","moisture":"Soil Moisture","conductivity":"Conductivity","illuminance":"Illuminance","air_humidity":"Air Humidity","humidity":"Air Humidity","dli":"Daily Light Integral","water_consumption":"Water Consumption","fertilizer_consumption":"Fertilizer Consumption","power_consumption":"Power Consumption","total_water_consumption":"Total Water Consumption","total_fertilizer_consumption":"Total Fertilizer Consumption","total_power_consumption":"Total Power Consumption","ph":"pH Value","health":"Health","ppfd_mol":"PPFD","total_ppfd":"Total PPFD","total_ppfd_mol_integral":"Total PPFD","total_integral":"Total Integral","energy_cost":"Energy Cost"},"growth_phases":{"seeds":"Seed","germination":"Germination","rooting":"Rooting","growing":"Growth","flowering":"Flowering","harvested":"Harvested","removed":"Removed"},"treatments":{"":"None","cut":"Cut","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Pest Control","spray water":"Water Spray"},"history":{"days":"Days","pot_size_placeholder":"Pot size in liters...","please_select":"Please select...","cut":"Cut","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Pest Control","spray_water":"Water Spray","growth_phase":"Growth Phase","area":"Area","pot_size":"Pot Size","treatment":"Treatment","journal":"Journal","add_entry":"Add Entry","image_taken":"Image Taken","photo":"Photo","phase_started":"Phase Started","pot_size_changed":"Pot Size Changed","moved_to":"Moved to","harvest":"Harvest","expected_harvest_date":"Expected Harvest Date","journal_placeholder":"Journal entry..."},"list_card":{"title":"Brokkoli List Card","description":"A tabular overview of all plants","plant_overview":"Plant Overview","search_placeholder":"Search for plants...","filter_close":"Close Filter","filter":"Filter","multiselect_end":"End Multi-Select","multiselect":"Multi-Select","search_reset":"Reset Search","search_default":"Search...","entity_type":"Entity Type","plants":"Plants","cycles":"Cycles","filter_range_to":"to","add_plant":"Add New Plant"},"helpers":{"growth_phase":"Growth Phase","flowering_duration":"Flowering Duration","pot_size":"Pot Size","water_capacity":"Water Capacity","treatment":"Treatment","health":"Health","journal":"Journal","location":"Location","cycle":"Cycle"}}}')},3099:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"No disponible","config_error_entity_required":"Debes definir una entidad o listen_to","area_config_error":"Debes definir al menos un área, una entidad o una lista de entidades","plants_count":"Plantas","return_to_cycle":"Volver al Ciclo","previous_image":"Imagen Anterior","next_image":"Siguiente Imagen","unknown_date":"Fecha Desconocida","tooltip_error":"Error","tooltip_range":"Rango","tooltip_mean":"Media","tooltip_min_max":"Min - Max","day":"Día","days_since_planting":"Días Desde la Plantación","upload_images_only":"¡Por favor, sube solo imágenes!","image_too_large":"¡Imagen demasiado grande! El tamaño máximo es 10MB.","upload_error":"Error de Subida","delete_image_error":"Error al eliminar imagen","set_main_image_error":"Error al establecer imagen principal","delete_error":"Error al eliminar","add_image":"Añadir Imagen","set_as_main_image":"Establecer como Imagen Principal","delete_image":"Eliminar Imagen","close":"Cerrar","no_images_available":"No hay imágenes disponibles","click_camera_to_add_image":"Haz clic en el icono de la cámara arriba para añadir una imagen","clone_plant":"Clonar Planta","move_to_cycle":"Mover al Ciclo","replace_sensors":"Reemplazar Sensores","delete_plant":"Eliminar Planta","select_cycle":"Seleccionar Ciclo","please_select":"Por favor selecciona...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"¿Realmente quieres eliminar esta planta? Esta acción no se puede deshacer.","confirm_delete":"Confirmar Eliminación","no_matching_sensors":"No se encontraron sensores coincidentes"},"fields":{"friendly_name":"Nombre","state":"Estado","area":"Área","growth_phase":"Fase de Crecimiento","cycle":"Ciclo","pot_size":"Tamaño de Maceta","flowering_duration":"Duración de Floración","strain":"Variedad","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duración Original de Floración","timestamp":"Marca de Tiempo","difficulty":"Dificultad","yield":"Rendimiento","mold_resistance":"Resistencia al Moho","hunger":"Hambre","effects":"Efectos","smell":"Olor","taste":"Sabor","phenotype":"Fenotipo","growth_stretch":"Estiramiento de Crecimiento","flower_stretch":"Estiramiento de Floración","notes":"Notas","website":"Sitio Web","lineage":"Linaje","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Humedad Mín. del Suelo","max_soil_moisture":"Humedad Máx. del Suelo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Conductividad Mín.","max_conductivity":"Conductividad Máx.","min_illuminance":"Iluminación Mín.","max_illuminance":"Iluminación Máx.","min_air_humidity":"Humedad Mín. del Aire","max_air_humidity":"Humedad Máx. del Aire","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Agua","max_water_consumption":"Consumo Máx. de Agua","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seed_start":"Inicio de Semilla","germination_start":"Inicio de Germinación","rooting_start":"Inicio de Enraizamiento","growth_start":"Inicio de Crecimiento","flowering_start":"Inicio de Floración","harvested_start":"Inicio de Cosecha","removed_start":"Inicio de Eliminación","seed_duration":"Duración de Semilla","germination_duration":"Duración de Germinación","rooting_duration":"Duración de Enraizamiento","growth_duration":"Duración de Crecimiento","flower_duration":"Duración de Floración","harvested_duration":"Duración de Cosecha","removed_duration":"Duración de Eliminación"},"sensors":{"temperature":"Temperatura","soil_moisture":"Humedad del Suelo","moisture":"Humedad del Suelo","conductivity":"Conductividad","illuminance":"Iluminación","air_humidity":"Humedad del Aire","humidity":"Humedad del Aire","dli":"Integral de Luz Diaria","water_consumption":"Consumo de Agua","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energía","ph":"Valor pH","health":"Salud","total_ppfd":"PPFD Total","energy_cost":"Costo de Energía"},"growth_phases":{"seeds":"Semilla","germination":"Germinación","rooting":"Enraizamiento","growing":"Crecimiento","flowering":"Floración","harvested":"Cosechada","removed":"Eliminada"},"treatments":{"":"Ninguno","cut":"Cortar","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Control de Plagas","spray water":"Rociado de Agua"},"history":{"days":"Días","pot_size_placeholder":"Tamaño de maceta en litros...","please_select":"Por favor selecciona...","cut":"Cortar","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Control de Plagas","spray_water":"Rociado de Agua","growth_phase":"Fase de Crecimiento","area":"Área","pot_size":"Tamaño de Maceta","treatment":"Tratamiento","journal":"Diario","add_entry":"Añadir Entrada","image_taken":"Imagen Tomada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamaño de Maceta Cambiado","moved_to":"Movido a","harvest":"Cosecha","expected_harvest_date":"Fecha de Cosecha Esperada","journal_placeholder":"Entrada de diario..."},"list_card":{"title":"Tarjeta de Lista Brokkoli","description":"Una vista tabular de todas las plantas","plant_overview":"Vista General de Plantas","search_placeholder":"Buscar plantas...","filter_close":"Cerrar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Selección","multiselect":"Multi-Selección","search_reset":"Restablecer Búsqueda","search_default":"Buscar...","entity_type":"Tipo de Entidad","plants":"Plantas","cycles":"Ciclos","filter_range_to":"a","add_plant":"Añadir Nueva Planta"},"graph":{"temperature":"Temperatura","conductivity":"Conductividad","dli":"DLI","health":"Salud","water_consumption":"Consumo de Agua","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energía"},"diagnostics":{"energy_cost":"Costo de Energía","total_power_consumption":"Consumo Total de Energía","total_integral":"Integral Total","total_water_consumption":"Consumo Total de Agua","total_fertilizer_consumption":"Consumo Total de Fertilizante","power_consumption":"Consumo de Energía","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Fase de Crecimiento","flowering_duration":"Duración de Floración","pot_size":"Tamaño de Maceta","water_capacity":"Capacidad de Agua","treatment":"Tratamiento","health":"Salud","journal":"Diario","location":"Ubicación","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modo: Anillos (clic para cambiar)","legend_labels_mode_active":"Modo: Etiquetas (clic para cambiar)","legend_heatmap_mode_active":"Modo: Mapa de calor (clic para cambiar)","flowering_past":"Floración pasada","flowering_to_go":"Floración restante","days":"Días"},"sensors":{}}}')},4055:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Indisponible","config_error_entity_required":"Vous devez définir une entité ou listen_to","area_config_error":"Vous devez définir au moins une zone, une entité ou une liste d\'entités","plants_count":"Plantes","return_to_cycle":"Retour au Cycle","previous_image":"Image Précédente","next_image":"Image Suivante","unknown_date":"Date Inconnue","tooltip_error":"Erreur","tooltip_range":"Plage","tooltip_mean":"Moyenne","tooltip_min_max":"Min - Max","day":"Jour","days_since_planting":"Jours Depuis la Plantation","upload_images_only":"Veuillez télécharger uniquement des images !","image_too_large":"Image trop grande ! La taille maximale est de 10MB.","upload_error":"Erreur de Téléchargement","delete_image_error":"Erreur lors de la suppression de l\'image","set_main_image_error":"Erreur lors de la définition de l\'image principale","delete_error":"Erreur lors de la suppression","add_image":"Ajouter une Image","set_as_main_image":"Définir comme Image Principale","delete_image":"Supprimer l\'Image","close":"Fermer","no_images_available":"Aucune image disponible","click_camera_to_add_image":"Cliquez sur l\'icône de l\'appareil photo ci-dessus pour ajouter une image","clone_plant":"Cloner la Plante","move_to_cycle":"Déplacer vers le Cycle","replace_sensors":"Remplacer les Capteurs","delete_plant":"Supprimer la Plante","select_cycle":"Sélectionner le Cycle","please_select":"Veuillez sélectionner...","move":"Déplacer","cancel":"Annuler","clone":"Cloner","delete_plant_confirmation":"Voulez-vous vraiment supprimer cette plante ? Cette action ne peut pas être annulée.","confirm_delete":"Confirmer la Suppression","no_matching_sensors":"Aucun capteur correspondant trouvé"},"fields":{"friendly_name":"Nom","state":"État","area":"Zone","growth_phase":"Phase de Croissance","cycle":"Cycle","pot_size":"Taille du Pot","flowering_duration":"Durée de Floraison","strain":"Variété","breeder":"Éleveur","feminized":"Féminisée","original_flowering_duration":"Durée de Floraison Originale","timestamp":"Horodatage","difficulty":"Difficulté","yield":"Rendement","mold_resistance":"Résistance à la Moisissure","hunger":"Faim","effects":"Effets","smell":"Odeur","taste":"Goût","phenotype":"Phénotype","growth_stretch":"Étirement de Croissance","flower_stretch":"Étirement de Floraison","notes":"Notes","website":"Site Web","lineage":"Lignée","infotext1":"Texte Info 1","infotext2":"Texte Info 2","min_soil_moisture":"Humidité Min. du Sol","max_soil_moisture":"Humidité Max. du Sol","min_temperature":"Température Min.","max_temperature":"Température Max.","min_conductivity":"Conductivité Min.","max_conductivity":"Conductivité Max.","min_illuminance":"Éclairage Min.","max_illuminance":"Éclairage Max.","min_air_humidity":"Humidité Min. de l\'Air","max_air_humidity":"Humidité Max. de l\'Air","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consommation Min. d\'Eau","max_water_consumption":"Consommation Max. d\'Eau","min_fertilizer_consumption":"Consommation Min. d\'Engrais","max_fertilizer_consumption":"Consommation Max. d\'Engrais","min_ph":"Valeur pH Min.","max_ph":"Valeur pH Max.","seed_start":"Début de Graine","germination_start":"Début de Germination","rooting_start":"Début d\'Enracinement","growth_start":"Début de Croissance","flowering_start":"Début de Floraison","harvested_start":"Début de Récolte","removed_start":"Début de Suppression","seed_duration":"Durée de Graine","germination_duration":"Durée de Germination","rooting_duration":"Durée d\'Enracinement","growth_duration":"Durée de Croissance","flower_duration":"Durée de Floraison","harvested_duration":"Durée de Récolte","removed_duration":"Durée de Suppression"},"sensors":{"temperature":"Température","soil_moisture":"Humidité du Sol","moisture":"Humidité du Sol","conductivity":"Conductivité","illuminance":"Éclairage","air_humidity":"Humidité de l\'Air","humidity":"Humidité de l\'Air","dli":"Intégrale de Lumière Quotidienne","water_consumption":"Consommation d\'Eau","fertilizer_consumption":"Consommation d\'Engrais","power_consumption":"Consommation d\'Énergie","ph":"Valeur pH","health":"Santé","total_ppfd":"PPFD Total","energy_cost":"Coût Énergétique"},"growth_phases":{"seeds":"Graine","germination":"Germination","rooting":"Enracinement","growing":"Croissance","flowering":"Floraison","harvested":"Récoltée","removed":"Supprimée"},"treatments":{"":"Aucun","cut":"Couper","super cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Contrôle des Nuisibles","spray water":"Pulvérisation d\'Eau"},"history":{"days":"Jours","pot_size_placeholder":"Taille du pot en litres...","please_select":"Veuillez sélectionner...","cut":"Couper","super_cropping":"Super Cropping","topping":"Étêtage","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Contrôle des Nuisibles","spray_water":"Pulvérisation d\'Eau","growth_phase":"Phase de Croissance","area":"Zone","pot_size":"Taille du Pot","treatment":"Traitement","journal":"Journal","add_entry":"Ajouter une Entrée","image_taken":"Image Prise","photo":"Photo","phase_started":"Phase Commencée","pot_size_changed":"Taille du Pot Changée","moved_to":"Déplacé vers","harvest":"Récolte","expected_harvest_date":"Date de Récolte Prévue","journal_placeholder":"Entrée de journal..."},"list_card":{"title":"Carte de Liste Brokkoli","description":"Une vue tabulaire de toutes les plantes","plant_overview":"Vue d\'Ensemble des Plantes","search_placeholder":"Rechercher des plantes...","filter_close":"Fermer le Filtre","filter":"Filtre","multiselect_end":"Terminer la Multi-Sélection","multiselect":"Multi-Sélection","search_reset":"Réinitialiser la Recherche","search_default":"Rechercher...","entity_type":"Type d\'Entité","plants":"Plantes","cycles":"Cycles","filter_range_to":"à","add_plant":"Ajouter une Nouvelle Plante"},"graph":{"temperature":"Température","conductivity":"Conductivité","dli":"DLI","health":"Santé","water_consumption":"Consommation d\'Eau","fertilizer_consumption":"Consommation d\'Engrais","power_consumption":"Consommation d\'Énergie"},"diagnostics":{"energy_cost":"Coût Énergétique","total_power_consumption":"Consommation Totale d\'Énergie","total_integral":"Intégrale Totale","total_water_consumption":"Consommation Totale d\'Eau","total_fertilizer_consumption":"Consommation Totale d\'Engrais","power_consumption":"Consommation d\'Énergie","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Phase de Croissance","flowering_duration":"Durée de Floraison","pot_size":"Taille du Pot","water_capacity":"Capacité d\'Eau","treatment":"Traitement","health":"Santé","journal":"Journal","location":"Emplacement","cycle":"Cycle"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Mode: Anneaux (cliquez pour changer)","legend_labels_mode_active":"Mode: Étiquettes (cliquez pour changer)","legend_heatmap_mode_active":"Mode: Carte de chaleur (cliquez pour changer)","flowering_past":"Floraison écoulée","flowering_to_go":"Floraison restante","days":"Jours"},"sensors":{}}}')},4668:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Nem elérhető","config_error_entity_required":"Meg kell adnia egy entitást vagy listen_to-t","area_config_error":"Meg kell adnia legalább egy területet, egy entitást vagy egy entitáslistát","plants_count":"Növények","return_to_cycle":"Vissza a Ciklushoz","previous_image":"Előző Kép","next_image":"Következő Kép","unknown_date":"Ismeretlen Dátum","tooltip_error":"Hiba","tooltip_range":"Tartomány","tooltip_mean":"Átlag","tooltip_min_max":"Min - Max","day":"Nap","days_since_planting":"Napok az Ültetés Óta","upload_images_only":"Kérjük, csak képeket töltsön fel!","image_too_large":"A kép túl nagy! A maximális méret 10MB.","upload_error":"Feltöltési Hiba","delete_image_error":"Hiba a kép törlése során","set_main_image_error":"Hiba a főkép beállítása során","delete_error":"Hiba a törlés során","add_image":"Kép Hozzáadása","set_as_main_image":"Beállítás Főképnek","delete_image":"Kép Törlése","close":"Bezárás","no_images_available":"Nincsenek elérhető képek","click_camera_to_add_image":"Kattintson a fenti kamera ikonra kép hozzáadásához","clone_plant":"Növény Klónozása","move_to_cycle":"Áthelyezés Ciklusba","replace_sensors":"Érzékelők Cseréje","delete_plant":"Növény Törlése","select_cycle":"Ciklus Kiválasztása","please_select":"Kérjük válasszon...","move":"Áthelyezés","cancel":"Mégse","clone":"Klónozás","delete_plant_confirmation":"Valóban törölni szeretné ezt a növényt? Ez a művelet nem vonható vissza.","confirm_delete":"Törlés Megerősítése","no_matching_sensors":"Nem találhatók megfelelő érzékelők"},"fields":{"friendly_name":"Név","state":"Állapot","area":"Terület","growth_phase":"Növekedési Fázis","cycle":"Ciklus","pot_size":"Cserép Mérete","flowering_duration":"Virágzási időtartam","strain":"Fajta","breeder":"Tenyésztő","feminized":"Nőstény","original_flowering_duration":"Eredeti Virágzás Időtartama","timestamp":"Időbélyeg","difficulty":"Nehézség","yield":"Hozam","mold_resistance":"Penészállóság","hunger":"Éhség","effects":"Hatások","smell":"Illat","taste":"Íz","phenotype":"Fenotípus","growth_stretch":"Növekedési Nyúlás","flower_stretch":"Virágzási Nyúlás","notes":"Megjegyzések","website":"Weboldal","lineage":"Származás","infotext1":"Info Szöveg 1","infotext2":"Info Szöveg 2","min_soil_moisture":"Min. Talaj Nedvesség","max_soil_moisture":"Max. Talaj Nedvesség","min_temperature":"Min. Hőmérséklet","max_temperature":"Max. Hőmérséklet","min_conductivity":"Min. Vezetőképesség","max_conductivity":"Max. Vezetőképesség","min_illuminance":"Min. Megvilágítás","max_illuminance":"Max. Megvilágítás","min_air_humidity":"Min. Levegő Nedvesség","max_air_humidity":"Max. Levegő Nedvesség","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Vízfogyasztás","max_water_consumption":"Max. Vízfogyasztás","min_fertilizer_consumption":"Min. Műtrágya Fogyasztás","max_fertilizer_consumption":"Max. Műtrágya Fogyasztás","min_ph":"Min. pH Érték","max_ph":"Max. pH Érték","seed_start":"Mag Kezdet","germination_start":"Csírázás Kezdet","rooting_start":"Gyökeresedés Kezdet","growth_start":"Növekedés Kezdet","flowering_start":"Virágzás Kezdet","harvested_start":"Betakarítás Kezdet","removed_start":"Eltávolítás Kezdet","seed_duration":"Mag Időtartam","germination_duration":"Csírázás Időtartam","rooting_duration":"Gyökeresedés Időtartam","growth_duration":"Növekedési időtartam","flower_duration":"Virágzási időtartam","harvested_duration":"Betakarítás Időtartam","removed_duration":"Eltávolítás Időtartam"},"sensors":{"temperature":"Hőmérséklet","soil_moisture":"Talaj Nedvesség","moisture":"Talaj Nedvesség","conductivity":"Vezetőképesség","illuminance":"Megvilágítás","air_humidity":"Levegő Nedvesség","humidity":"Levegő Nedvesség","dli":"Napi Fény Integrál","water_consumption":"Vízfogyasztás","fertilizer_consumption":"Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás","ph":"pH Érték","health":"Egészség","total_ppfd":"Összes PPFD","energy_cost":"Energia Költség"},"growth_phases":{"seeds":"Mag","germination":"Csírázás","rooting":"Gyökeresedés","growing":"Növekedés","flowering":"Virágzás","harvested":"Betakarítva","removed":"Eltávolítva"},"treatments":{"":"Nincs","cut":"Vágás","super cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray pest":"Kártevő Irtás","spray water":"Vízpermetezés"},"history":{"days":"Napok","pot_size_placeholder":"Cserép mérete literben...","please_select":"Kérjük válasszon...","cut":"Vágás","super_cropping":"Szuper Vágás","topping":"Csúcslevágás","lollipop":"Nyalóka","fim":"FIM","rib":"Rib","spray_pest":"Kártevő Irtás","spray_water":"Vízpermetezés","growth_phase":"Növekedési Fázis","area":"Terület","pot_size":"Cserép Mérete","treatment":"Kezelés","journal":"Napló","add_entry":"Bejegyzés Hozzáadása","image_taken":"Kép Készítve","photo":"Fotó","phase_started":"Fázis Elkezdve","pot_size_changed":"Cserép Mérete Megváltozott","moved_to":"Áthelyezve ide","harvest":"Betakarítás","expected_harvest_date":"Várható Betakarítási Dátum","journal_placeholder":"Napló bejegyzés..."},"list_card":{"title":"Brokkoli Lista Kártya","description":"Táblázatos áttekintés az összes növényről","plant_overview":"Növény Áttekintés","search_placeholder":"Növények keresése...","filter_close":"Szűrő Bezárása","filter":"Szűrő","multiselect_end":"Többszörös Kiválasztás Befejezése","multiselect":"Többszörös Kiválasztás","search_reset":"Keresés Visszaállítása","search_default":"Keresés...","entity_type":"Entitás Típus","plants":"Növények","cycles":"Ciklusok","filter_range_to":"ig","add_plant":"Új Növény Hozzáadása"},"graph":{"temperature":"Hőmérséklet","conductivity":"Vezetőképesség","dli":"DLI","health":"Egészség","water_consumption":"Vízfogyasztás","fertilizer_consumption":"Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás"},"diagnostics":{"energy_cost":"Energia Költség","total_power_consumption":"Összes Energiafogyasztás","total_integral":"Összes Integrál","total_water_consumption":"Összes Vízfogyasztás","total_fertilizer_consumption":"Összes Műtrágya Fogyasztás","power_consumption":"Energiafogyasztás","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Összes PPFD"},"helpers":{"growth_phase":"Növekedési Fázis","flowering_duration":"Virágzás Időtartama","pot_size":"Cserép Mérete","water_capacity":"Víz Kapacitás","treatment":"Kezelés","health":"Egészség","journal":"Napló","location":"Helyszín","cycle":"Ciklus"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Mód: Gyűrűk (kattintson a váltáshoz)","legend_labels_mode_active":"Mód: Címkék (kattintson a váltáshoz)","legend_heatmap_mode_active":"Mód: Hőtérkép (kattintson a váltáshoz)","flowering_past":"Eltelt virágzás","flowering_to_go":"Hátralévő virágzás","days":"Napok"},"sensors":{}}}')},9538:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Non disponibile","config_error_entity_required":"Devi definire un\'entità o listen_to","area_config_error":"Devi definire almeno un\'area, un\'entità o un elenco di entità","plants_count":"Piante","return_to_cycle":"Ritorna al Ciclo","previous_image":"Immagine Precedente","next_image":"Immagine Successiva","unknown_date":"Data Sconosciuta","tooltip_error":"Errore","tooltip_range":"Intervallo","tooltip_mean":"Media","tooltip_min_max":"Min - Max","day":"Giorno","days_since_planting":"Giorni dalla Piantagione","upload_images_only":"Per favore carica solo immagini!","image_too_large":"Immagine troppo grande! La dimensione massima è 10MB.","upload_error":"Errore di Caricamento","delete_image_error":"Errore nell\'eliminazione dell\'immagine","set_main_image_error":"Errore nell\'impostazione dell\'immagine principale","delete_error":"Errore nell\'eliminazione","add_image":"Aggiungi Immagine","set_as_main_image":"Imposta come Immagine Principale","delete_image":"Elimina Immagine","close":"Chiudi","no_images_available":"Nessuna immagine disponibile","click_camera_to_add_image":"Clicca sull\'icona della fotocamera sopra per aggiungere un\'immagine","clone_plant":"Clona Pianta","move_to_cycle":"Sposta al Ciclo","replace_sensors":"Sostituisci Sensori","delete_plant":"Elimina Pianta","select_cycle":"Seleziona Ciclo","please_select":"Per favore seleziona...","move":"Sposta","cancel":"Annulla","clone":"Clona","delete_plant_confirmation":"Vuoi davvero eliminare questa pianta? Questa azione non può essere annullata.","confirm_delete":"Conferma Eliminazione","no_matching_sensors":"Nessun sensore corrispondente trovato"},"fields":{"friendly_name":"Nome","state":"Stato","area":"Area","growth_phase":"Fase di Crescita","cycle":"Ciclo","pot_size":"Dimensione Vaso","flowering_duration":"Durata di Fioritura","strain":"Varietà","breeder":"Allevatore","feminized":"Femminizzata","original_flowering_duration":"Durata Fioritura Originale","timestamp":"Timestamp","difficulty":"Difficoltà","yield":"Resa","mold_resistance":"Resistenza alla Muffa","hunger":"Fame","effects":"Effetti","smell":"Odore","taste":"Gusto","phenotype":"Fenotipo","growth_stretch":"Allungamento Crescita","flower_stretch":"Allungamento Fioritura","notes":"Note","website":"Sito Web","lineage":"Lignaggio","infotext1":"Testo Info 1","infotext2":"Testo Info 2","min_soil_moisture":"Umidità Min. Suolo","max_soil_moisture":"Umidità Max. Suolo","min_temperature":"Temperatura Min.","max_temperature":"Temperatura Max.","min_conductivity":"Conduttività Min.","max_conductivity":"Conduttività Max.","min_illuminance":"Illuminazione Min.","max_illuminance":"Illuminazione Max.","min_air_humidity":"Umidità Min. Aria","max_air_humidity":"Umidità Max. Aria","min_dli":"DLI Min.","max_dli":"DLI Max.","min_water_consumption":"Consumo Min. Acqua","max_water_consumption":"Consumo Max. Acqua","min_fertilizer_consumption":"Consumo Min. Fertilizzante","max_fertilizer_consumption":"Consumo Max. Fertilizzante","min_ph":"Valore pH Min.","max_ph":"Valore pH Max.","seed_start":"Inizio Seme","germination_start":"Inizio Germinazione","rooting_start":"Inizio Radicazione","growth_start":"Inizio Crescita","flowering_start":"Inizio Fioritura","harvested_start":"Inizio Raccolta","removed_start":"Inizio Rimozione","seed_duration":"Durata Seme","germination_duration":"Durata Germinazione","rooting_duration":"Durata Radicazione","growth_duration":"Durata di Crescita","flower_duration":"Durata di Fioritura","harvested_duration":"Durata Raccolta","removed_duration":"Durata Rimozione"},"sensors":{"temperature":"Temperatura","soil_moisture":"Umidità del Suolo","moisture":"Umidità del Suolo","conductivity":"Conduttività","illuminance":"Illuminazione","air_humidity":"Umidità dell\'Aria","humidity":"Umidità dell\'Aria","dli":"Integrale di Luce Giornaliera","water_consumption":"Consumo d\'Acqua","fertilizer_consumption":"Consumo di Fertilizzante","power_consumption":"Consumo di Energia","ph":"Valore pH","health":"Salute","total_ppfd":"PPFD Totale","energy_cost":"Costo Energetico"},"growth_phases":{"seeds":"Seme","germination":"Germinazione","rooting":"Radicazione","growing":"Crescita","flowering":"Fioritura","harvested":"Raccolta","removed":"Rimossa"},"treatments":{"":"Nessuno","cut":"Taglio","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controllo Parassiti","spray water":"Spruzzatura Acqua"},"history":{"days":"Giorni","pot_size_placeholder":"Dimensione vaso in litri...","please_select":"Per favore seleziona...","cut":"Taglio","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controllo Parassiti","spray_water":"Spruzzatura Acqua","growth_phase":"Fase di Crescita","area":"Area","pot_size":"Dimensione Vaso","treatment":"Trattamento","journal":"Diario","add_entry":"Aggiungi Voce","image_taken":"Immagine Scattata","photo":"Foto","phase_started":"Fase Iniziata","pot_size_changed":"Dimensione Vaso Cambiata","moved_to":"Spostato a","harvest":"Raccolta","expected_harvest_date":"Data Raccolta Prevista","journal_placeholder":"Voce del diario..."},"list_card":{"title":"Scheda Lista Brokkoli","description":"Una vista tabellare di tutte le piante","plant_overview":"Panoramica Piante","search_placeholder":"Cerca piante...","filter_close":"Chiudi Filtro","filter":"Filtro","multiselect_end":"Termina Multi-Selezione","multiselect":"Multi-Selezione","search_reset":"Reimposta Ricerca","search_default":"Cerca...","entity_type":"Tipo Entità","plants":"Piante","cycles":"Cicli","filter_range_to":"a","add_plant":"Aggiungi Nuova Pianta"},"graph":{"temperature":"Temperatura","conductivity":"Conduttività","dli":"DLI","health":"Salute","water_consumption":"Consumo d\'Acqua","fertilizer_consumption":"Consumo di Fertilizzante","power_consumption":"Consumo di Energia"},"diagnostics":{"energy_cost":"Costo Energetico","total_power_consumption":"Consumo Totale di Energia","total_integral":"Integrale Totale","total_water_consumption":"Consumo Totale d\'Acqua","total_fertilizer_consumption":"Consumo Totale di Fertilizzante","power_consumption":"Consumo di Energia","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Totale"},"helpers":{"growth_phase":"Fase di Crescita","flowering_duration":"Durata Fioritura","pot_size":"Dimensione Vaso","water_capacity":"Capacità Acqua","treatment":"Trattamento","health":"Salute","journal":"Diario","location":"Posizione","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modalità: Anelli (clic per cambiare)","legend_labels_mode_active":"Modalità: Etichette (clic per cambiare)","legend_heatmap_mode_active":"Modalità: Mappa di calore (clic per cambiare)","flowering_past":"Fioritura passata","flowering_to_go":"Fioritura rimanente","days":"Giorni"},"sensors":{}}}')},277:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Niet beschikbaar","config_error_entity_required":"Je moet een entiteit of listen_to definiëren","area_config_error":"Je moet minstens een gebied, een entiteit of een lijst van entiteiten definiëren","plants_count":"Planten","return_to_cycle":"Terug naar Cyclus","previous_image":"Vorige Afbeelding","next_image":"Volgende Afbeelding","unknown_date":"Onbekende Datum","tooltip_error":"Fout","tooltip_range":"Bereik","tooltip_mean":"Gemiddelde","tooltip_min_max":"Min - Max","day":"Dag","days_since_planting":"Dagen sinds Planten","upload_images_only":"Upload alleen afbeeldingen!","image_too_large":"Afbeelding te groot! Maximale grootte is 10MB.","upload_error":"Upload Fout","delete_image_error":"Fout bij verwijderen afbeelding","set_main_image_error":"Fout bij instellen hoofdafbeelding","delete_error":"Fout bij verwijderen","add_image":"Afbeelding Toevoegen","set_as_main_image":"Instellen als Hoofdafbeelding","delete_image":"Afbeelding Verwijderen","close":"Sluiten","no_images_available":"Geen afbeeldingen beschikbaar","click_camera_to_add_image":"Klik op het camera-icoon hierboven om een afbeelding toe te voegen","clone_plant":"Plant Klonen","move_to_cycle":"Verplaats naar Cyclus","replace_sensors":"Sensoren Vervangen","delete_plant":"Plant Verwijderen","select_cycle":"Cyclus Selecteren","please_select":"Selecteer alsjeblieft...","move":"Verplaatsen","cancel":"Annuleren","clone":"Klonen","delete_plant_confirmation":"Wil je deze plant echt verwijderen? Deze actie kan niet ongedaan worden gemaakt.","confirm_delete":"Verwijdering Bevestigen","no_matching_sensors":"Geen overeenkomende sensoren gevonden"},"fields":{"friendly_name":"Naam","state":"Status","area":"Gebied","growth_phase":"Groeifase","cycle":"Cyclus","pot_size":"Pot Grootte","flowering_duration":"Bloeiduur","strain":"Soort","breeder":"Kweker","feminized":"Gefeminiseerd","original_flowering_duration":"Originele Bloei Duur","timestamp":"Tijdstempel","difficulty":"Moeilijkheid","yield":"Opbrengst","mold_resistance":"Schimmelresistentie","hunger":"Honger","effects":"Effecten","smell":"Geur","taste":"Smaak","phenotype":"Fenotype","growth_stretch":"Groei Rek","flower_stretch":"Bloei Rek","notes":"Notities","website":"Website","lineage":"Afstamming","infotext1":"Info Tekst 1","infotext2":"Info Tekst 2","min_soil_moisture":"Min. Bodem Vochtigheid","max_soil_moisture":"Max. Bodem Vochtigheid","min_temperature":"Min. Temperatuur","max_temperature":"Max. Temperatuur","min_conductivity":"Min. Geleidbaarheid","max_conductivity":"Max. Geleidbaarheid","min_illuminance":"Min. Verlichting","max_illuminance":"Max. Verlichting","min_air_humidity":"Min. Lucht Vochtigheid","max_air_humidity":"Max. Lucht Vochtigheid","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Waterverbruik","max_water_consumption":"Max. Waterverbruik","min_fertilizer_consumption":"Min. Mestverbruik","max_fertilizer_consumption":"Max. Mestverbruik","min_ph":"Min. pH Waarde","max_ph":"Max. pH Waarde","seed_start":"Zaad Start","germination_start":"Kieming Start","rooting_start":"Worteling Start","growth_start":"Groei Start","flowering_start":"Bloei Start","harvested_start":"Geoogst Start","removed_start":"Verwijderd Start","seed_duration":"Zaad Duur","germination_duration":"Kieming Duur","rooting_duration":"Worteling Duur","growth_duration":"Groeiduur","flower_duration":"Bloeiduur","harvested_duration":"Geoogst Duur","removed_duration":"Verwijderd Duur"},"sensors":{"temperature":"Temperatuur","soil_moisture":"Bodem Vochtigheid","moisture":"Bodem Vochtigheid","conductivity":"Geleidbaarheid","illuminance":"Verlichting","air_humidity":"Lucht Vochtigheid","humidity":"Lucht Vochtigheid","dli":"Dagelijkse Licht Integraal","water_consumption":"Waterverbruik","fertilizer_consumption":"Mestverbruik","power_consumption":"Energieverbruik","ph":"pH Waarde","health":"Gezondheid","total_ppfd":"Totale PPFD","energy_cost":"Energiekosten"},"growth_phases":{"seeds":"Zaad","germination":"Kieming","rooting":"Worteling","growing":"Groei","flowering":"Bloei","harvested":"Geoogst","removed":"Verwijderd"},"treatments":{"":"Geen","cut":"Snijden","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Ongedierte Bestrijding","spray water":"Water Sproeien"},"history":{"days":"Dagen","pot_size_placeholder":"Pot grootte in liters...","please_select":"Selecteer alsjeblieft...","cut":"Snijden","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Ongedierte Bestrijding","spray_water":"Water Sproeien","growth_phase":"Groeifase","area":"Gebied","pot_size":"Pot Grootte","treatment":"Behandeling","journal":"Dagboek","add_entry":"Item Toevoegen","image_taken":"Afbeelding Genomen","photo":"Foto","phase_started":"Fase Gestart","pot_size_changed":"Pot Grootte Veranderd","moved_to":"Verplaatst naar","harvest":"Oogst","expected_harvest_date":"Verwachte Oogst Datum","journal_placeholder":"Dagboek item..."},"list_card":{"title":"Brokkoli Lijst Kaart","description":"Een tabeloverzicht van alle planten","plant_overview":"Plant Overzicht","search_placeholder":"Zoek planten...","filter_close":"Filter Sluiten","filter":"Filter","multiselect_end":"Multi-Selectie Beëindigen","multiselect":"Multi-Selectie","search_reset":"Zoeken Resetten","search_default":"Zoeken...","entity_type":"Entiteit Type","plants":"Planten","cycles":"Cycli","filter_range_to":"tot","add_plant":"Nieuwe Plant Toevoegen"},"graph":{"temperature":"Temperatuur","conductivity":"Geleidbaarheid","dli":"DLI","health":"Gezondheid","water_consumption":"Waterverbruik","fertilizer_consumption":"Mestverbruik","power_consumption":"Energieverbruik"},"diagnostics":{"energy_cost":"Energiekosten","total_power_consumption":"Totaal Energieverbruik","total_integral":"Totale Integraal","total_water_consumption":"Totaal Waterverbruik","total_fertilizer_consumption":"Totaal Mestverbruik","power_consumption":"Energieverbruik","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Totale PPFD"},"helpers":{"growth_phase":"Groeifase","flowering_duration":"Bloei Duur","pot_size":"Pot Grootte","water_capacity":"Water Capaciteit","treatment":"Behandeling","health":"Gezondheid","journal":"Dagboek","location":"Locatie","cycle":"Cyclus"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modus: Ringen (klik om te wisselen)","legend_labels_mode_active":"Modus: Labels (klik om te wisselen)","legend_heatmap_mode_active":"Modus: Hittekaart (klik om te wisselen)","flowering_past":"Bloei verstreken","flowering_to_go":"Bloei resterend","days":"Dagen"},"sensors":{}}}')},1119:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Niedostępne","config_error_entity_required":"Musisz zdefiniować encję lub listen_to","area_config_error":"Musisz zdefiniować co najmniej jeden obszar, encję lub listę encji","plants_count":"Rośliny","return_to_cycle":"Powrót do Cyklu","previous_image":"Poprzedni Obraz","next_image":"Następny Obraz","unknown_date":"Nieznana Data","tooltip_error":"Błąd","tooltip_range":"Zakres","tooltip_mean":"Średnia","tooltip_min_max":"Min - Max","day":"Dzień","days_since_planting":"Dni od Sadzenia","upload_images_only":"Proszę przesyłać tylko obrazy!","image_too_large":"Obraz zbyt duży! Maksymalny rozmiar to 10MB.","upload_error":"Błąd Przesyłania","delete_image_error":"Błąd usuwania obrazu","set_main_image_error":"Błąd ustawiania głównego obrazu","delete_error":"Błąd usuwania","add_image":"Dodaj Obraz","set_as_main_image":"Ustaw jako Główny Obraz","delete_image":"Usuń Obraz","close":"Zamknij","no_images_available":"Brak dostępnych obrazów","click_camera_to_add_image":"Kliknij ikonę aparatu powyżej, aby dodać obraz","clone_plant":"Klonuj Roślinę","move_to_cycle":"Przenieś do Cyklu","replace_sensors":"Zamień Czujniki","delete_plant":"Usuń Roślinę","select_cycle":"Wybierz Cykl","please_select":"Proszę wybrać...","move":"Przenieś","cancel":"Anuluj","clone":"Klonuj","delete_plant_confirmation":"Czy na pewno chcesz usunąć tę roślinę? Ta akcja nie może być cofnięta.","confirm_delete":"Potwierdź Usunięcie","no_matching_sensors":"Nie znaleziono pasujących czujników"},"fields":{"friendly_name":"Nazwa","state":"Stan","area":"Obszar","growth_phase":"Faza Wzrostu","cycle":"Cykl","pot_size":"Rozmiar Doniczki","flowering_duration":"Czas Kwitnienia","strain":"Odmiana","breeder":"Hodowca","feminized":"Sfeminizowana","original_flowering_duration":"Oryginalny Czas Kwitnienia","timestamp":"Znacznik Czasu","difficulty":"Trudność","yield":"Plon","mold_resistance":"Odporność na Pleśń","hunger":"Głód","effects":"Efekty","smell":"Zapach","taste":"Smak","phenotype":"Fenotyp","growth_stretch":"Rozciągnięcie Wzrostu","flower_stretch":"Rozciągnięcie Kwitnienia","notes":"Notatki","website":"Strona Internetowa","lineage":"Rodowód","infotext1":"Tekst Info 1","infotext2":"Tekst Info 2","min_soil_moisture":"Min. Wilgotność Gleby","max_soil_moisture":"Max. Wilgotność Gleby","min_temperature":"Min. Temperatura","max_temperature":"Max. Temperatura","min_conductivity":"Min. Przewodność","max_conductivity":"Max. Przewodność","min_illuminance":"Min. Oświetlenie","max_illuminance":"Max. Oświetlenie","min_air_humidity":"Min. Wilgotność Powietrza","max_air_humidity":"Max. Wilgotność Powietrza","min_dli":"Min. DLI","max_dli":"Max. DLI","min_water_consumption":"Min. Zużycie Wody","max_water_consumption":"Max. Zużycie Wody","min_fertilizer_consumption":"Min. Zużycie Nawozu","max_fertilizer_consumption":"Max. Zużycie Nawozu","min_ph":"Min. Wartość pH","max_ph":"Max. Wartość pH","seed_start":"Start Nasiona","germination_start":"Start Kiełkowania","rooting_start":"Start Ukorzeniania","growth_start":"Start Wzrostu","flowering_start":"Start Kwitnienia","harvested_start":"Start Zbioru","removed_start":"Start Usunięcia","seed_duration":"Czas Nasiona","germination_duration":"Czas Kiełkowania","rooting_duration":"Czas Ukorzeniania","growth_duration":"Czas Wzrostu","flower_duration":"Czas Kwitnienia","harvested_duration":"Czas Zbioru","removed_duration":"Czas Usunięcia"},"sensors":{"temperature":"Temperatura","soil_moisture":"Wilgotność Gleby","moisture":"Wilgotność Gleby","conductivity":"Przewodność","illuminance":"Oświetlenie","air_humidity":"Wilgotność Powietrza","humidity":"Wilgotność Powietrza","dli":"Dzienna Całka Światła","water_consumption":"Zużycie Wody","fertilizer_consumption":"Zużycie Nawozu","power_consumption":"Zużycie Energii","ph":"Wartość pH","health":"Zdrowie","total_ppfd":"Całkowite PPFD","energy_cost":"Koszt Energii"},"growth_phases":{"seeds":"Nasiono","germination":"Kiełkowanie","rooting":"Ukorzenianie","growing":"Wzrost","flowering":"Kwitnienie","harvested":"Zebrane","removed":"Usunięte"},"treatments":{"":"Brak","cut":"Cięcie","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Zwalczanie Szkodników","spray water":"Opryskiwanie Wodą"},"history":{"days":"Dni","pot_size_placeholder":"Rozmiar doniczki w litrach...","please_select":"Proszę wybrać...","cut":"Cięcie","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Zwalczanie Szkodników","spray_water":"Opryskiwanie Wodą","growth_phase":"Faza Wzrostu","area":"Obszar","pot_size":"Rozmiar Doniczki","treatment":"Zabieg","journal":"Dziennik","add_entry":"Dodaj Wpis","image_taken":"Obraz Zrobiony","photo":"Zdjęcie","phase_started":"Faza Rozpoczęta","pot_size_changed":"Rozmiar Doniczki Zmieniony","moved_to":"Przeniesiono do","harvest":"Zbiór","expected_harvest_date":"Oczekiwana Data Zbioru","journal_placeholder":"Wpis do dziennika..."},"list_card":{"title":"Karta Listy Brokkoli","description":"Widok tabelaryczny wszystkich roślin","plant_overview":"Przegląd Roślin","search_placeholder":"Szukaj roślin...","filter_close":"Zamknij Filtr","filter":"Filtr","multiselect_end":"Zakończ Wielokrotny Wybór","multiselect":"Wielokrotny Wybór","search_reset":"Resetuj Wyszukiwanie","search_default":"Szukaj...","entity_type":"Typ Encji","plants":"Rośliny","cycles":"Cykle","filter_range_to":"do","add_plant":"Dodaj Nową Roślinę"},"graph":{"temperature":"Temperatura","conductivity":"Przewodność","dli":"DLI","health":"Zdrowie","water_consumption":"Zużycie Wody","fertilizer_consumption":"Zużycie Nawozu","power_consumption":"Zużycie Energii"},"diagnostics":{"energy_cost":"Koszt Energii","total_power_consumption":"Całkowite Zużycie Energii","total_integral":"Całkowita Całka","total_water_consumption":"Całkowite Zużycie Wody","total_fertilizer_consumption":"Całkowite Zużycie Nawozu","power_consumption":"Zużycie Energii","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Całkowite PPFD"},"helpers":{"growth_phase":"Faza Wzrostu","flowering_duration":"Czas Kwitnienia","pot_size":"Rozmiar Doniczki","water_capacity":"Pojemność Wody","treatment":"Zabieg","health":"Zdrowie","journal":"Dziennik","location":"Lokalizacja","cycle":"Cykl"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Tryb: Pierścienie (kliknij, aby przełączyć)","legend_labels_mode_active":"Tryb: Etykiety (kliknij, aby przełączyć)","legend_heatmap_mode_active":"Tryb: Mapa cieplna (kliknij, aby przełączyć)","flowering_past":"Kwitnienie minęło","flowering_to_go":"Kwitnienie pozostało","days":"Dni"},"sensors":{}}}')},6679:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Indisponível","config_error_entity_required":"Você deve definir uma entidade ou listen_to","area_config_error":"Você deve definir pelo menos uma área, uma entidade ou uma lista de entidades","plants_count":"Plantas","return_to_cycle":"Voltar ao Ciclo","previous_image":"Imagem Anterior","next_image":"Próxima Imagem","unknown_date":"Data Desconhecida","tooltip_error":"Erro","tooltip_range":"Intervalo","tooltip_mean":"Média","tooltip_min_max":"Min - Max","day":"Dia","days_since_planting":"Dias desde o Plantio","upload_images_only":"Por favor, envie apenas imagens!","image_too_large":"Imagem muito grande! O tamanho máximo é 10MB.","upload_error":"Erro de Envio","delete_image_error":"Erro ao excluir imagem","set_main_image_error":"Erro ao definir imagem principal","delete_error":"Erro ao excluir","add_image":"Adicionar Imagem","set_as_main_image":"Definir como Imagem Principal","delete_image":"Excluir Imagem","close":"Fechar","no_images_available":"Nenhuma imagem disponível","click_camera_to_add_image":"Clique no ícone da câmera acima para adicionar uma imagem","clone_plant":"Clonar Planta","move_to_cycle":"Mover para Ciclo","replace_sensors":"Substituir Sensores","delete_plant":"Excluir Planta","select_cycle":"Selecionar Ciclo","please_select":"Por favor selecione...","move":"Mover","cancel":"Cancelar","clone":"Clonar","delete_plant_confirmation":"Você realmente quer excluir esta planta? Esta ação não pode ser desfeita.","confirm_delete":"Confirmar Exclusão","no_matching_sensors":"Nenhum sensor correspondente encontrado"},"fields":{"friendly_name":"Nome","state":"Estado","area":"Área","growth_phase":"Fase de Crescimento","cycle":"Ciclo","pot_size":"Tamanho do Vaso","flowering_duration":"Duração da Floração","strain":"Variedade","breeder":"Criador","feminized":"Feminizada","original_flowering_duration":"Duração Original da Floração","timestamp":"Carimbo de Tempo","difficulty":"Dificuldade","yield":"Rendimento","mold_resistance":"Resistência ao Mofo","hunger":"Fome","effects":"Efeitos","smell":"Cheiro","taste":"Sabor","phenotype":"Fenótipo","growth_stretch":"Alongamento do Crescimento","flower_stretch":"Alongamento da Floração","notes":"Notas","website":"Site","lineage":"Linhagem","infotext1":"Texto Info 1","infotext2":"Texto Info 2","min_soil_moisture":"Umidade Mín. do Solo","max_soil_moisture":"Umidade Máx. do Solo","min_temperature":"Temperatura Mín.","max_temperature":"Temperatura Máx.","min_conductivity":"Condutividade Mín.","max_conductivity":"Condutividade Máx.","min_illuminance":"Iluminação Mín.","max_illuminance":"Iluminação Máx.","min_air_humidity":"Umidade Mín. do Ar","max_air_humidity":"Umidade Máx. do Ar","min_dli":"DLI Mín.","max_dli":"DLI Máx.","min_water_consumption":"Consumo Mín. de Água","max_water_consumption":"Consumo Máx. de Água","min_fertilizer_consumption":"Consumo Mín. de Fertilizante","max_fertilizer_consumption":"Consumo Máx. de Fertilizante","min_ph":"Valor pH Mín.","max_ph":"Valor pH Máx.","seed_start":"Início da Semente","germination_start":"Início da Germinação","rooting_start":"Início do Enraizamento","growth_start":"Início do Crescimento","flowering_start":"Início da Floração","harvested_start":"Início da Colheita","removed_start":"Início da Remoção","seed_duration":"Duração da Semente","germination_duration":"Duração da Germinação","rooting_duration":"Duração do Enraizamento","growth_duration":"Duração do Crescimento","flower_duration":"Duração da Floração","harvested_duration":"Duração da Colheita","removed_duration":"Duração da Remoção"},"sensors":{"temperature":"Temperatura","soil_moisture":"Umidade do Solo","moisture":"Umidade do Solo","conductivity":"Condutividade","illuminance":"Iluminação","air_humidity":"Umidade do Ar","humidity":"Umidade do Ar","dli":"Integral de Luz Diária","water_consumption":"Consumo de Água","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energia","ph":"Valor pH","health":"Saúde","total_ppfd":"PPFD Total","energy_cost":"Custo de Energia"},"growth_phases":{"seeds":"Semente","germination":"Germinação","rooting":"Enraizamento","growing":"Crescimento","flowering":"Floração","harvested":"Colhida","removed":"Removida"},"treatments":{"":"Nenhum","cut":"Corte","super cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray pest":"Controle de Pragas","spray water":"Pulverização de Água"},"history":{"days":"Dias","pot_size_placeholder":"Tamanho do vaso em litros...","please_select":"Por favor selecione...","cut":"Corte","super_cropping":"Super Cropping","topping":"Topping","lollipop":"Lollipop","fim":"FIM","rib":"Rib","spray_pest":"Controle de Pragas","spray_water":"Pulverização de Água","growth_phase":"Fase de Crescimento","area":"Área","pot_size":"Tamanho do Vaso","treatment":"Tratamento","journal":"Diário","add_entry":"Adicionar Entrada","image_taken":"Imagem Tirada","photo":"Foto","phase_started":"Fase Iniciada","pot_size_changed":"Tamanho do Vaso Alterado","moved_to":"Movido para","harvest":"Colheita","expected_harvest_date":"Data Esperada da Colheita","journal_placeholder":"Entrada do diário..."},"list_card":{"title":"Cartão de Lista Brokkoli","description":"Uma visão tabular de todas as plantas","plant_overview":"Visão Geral das Plantas","search_placeholder":"Buscar plantas...","filter_close":"Fechar Filtro","filter":"Filtro","multiselect_end":"Terminar Multi-Seleção","multiselect":"Multi-Seleção","search_reset":"Redefinir Busca","search_default":"Buscar...","entity_type":"Tipo de Entidade","plants":"Plantas","cycles":"Ciclos","filter_range_to":"para","add_plant":"Adicionar Nova Planta"},"graph":{"temperature":"Temperatura","conductivity":"Condutividade","dli":"DLI","health":"Saúde","water_consumption":"Consumo de Água","fertilizer_consumption":"Consumo de Fertilizante","power_consumption":"Consumo de Energia"},"diagnostics":{"energy_cost":"Custo de Energia","total_power_consumption":"Consumo Total de Energia","total_integral":"Integral Total","total_water_consumption":"Consumo Total de Água","total_fertilizer_consumption":"Consumo Total de Fertilizante","power_consumption":"Consumo de Energia","ppfd_mol":"PPFD","total_ppfd_mol_integral":"PPFD Total"},"helpers":{"growth_phase":"Fase de Crescimento","flowering_duration":"Duração da Floração","pot_size":"Tamanho do Vaso","water_capacity":"Capacidade de Água","treatment":"Tratamento","health":"Saúde","journal":"Diário","location":"Localização","cycle":"Ciclo"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Modo: Anéis (clique para alternar)","legend_labels_mode_active":"Modo: Etiquetas (clique para alternar)","legend_heatmap_mode_active":"Modo: Mapa de calor (clique para alternar)","flowering_past":"Floração decorrida","flowering_to_go":"Floração restante","days":"Dias"},"sensors":{}}}')},6958:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"Недоступно","config_error_entity_required":"Вы должны определить сущность или listen_to","area_config_error":"Вы должны определить хотя бы одну область, сущность или список сущностей","plants_count":"Растения","return_to_cycle":"Вернуться к Циклу","previous_image":"Предыдущее Изображение","next_image":"Следующее Изображение","unknown_date":"Неизвестная Дата","tooltip_error":"Ошибка","tooltip_range":"Диапазон","tooltip_mean":"Среднее","tooltip_min_max":"Мин - Макс","day":"День","days_since_planting":"Дни с Посадки","upload_images_only":"Пожалуйста, загружайте только изображения!","image_too_large":"Изображение слишком большое! Максимальный размер 10MB.","upload_error":"Ошибка Загрузки","delete_image_error":"Ошибка удаления изображения","set_main_image_error":"Ошибка установки главного изображения","delete_error":"Ошибка удаления","add_image":"Добавить Изображение","set_as_main_image":"Установить как Главное Изображение","delete_image":"Удалить Изображение","close":"Закрыть","no_images_available":"Нет доступных изображений","click_camera_to_add_image":"Нажмите на значок камеры выше, чтобы добавить изображение","clone_plant":"Клонировать Растение","move_to_cycle":"Переместить в Цикл","replace_sensors":"Заменить Датчики","delete_plant":"Удалить Растение","select_cycle":"Выбрать Цикл","please_select":"Пожалуйста, выберите...","move":"Переместить","cancel":"Отменить","clone":"Клонировать","delete_plant_confirmation":"Вы действительно хотите удалить это растение? Это действие нельзя отменить.","confirm_delete":"Подтвердить Удаление","no_matching_sensors":"Подходящие датчики не найдены"},"fields":{"friendly_name":"Имя","state":"Состояние","area":"Область","growth_phase":"Фаза Роста","cycle":"Цикл","pot_size":"Размер Горшка","flowering_duration":"Продолжительность цветения","strain":"Сорт","breeder":"Заводчик","feminized":"Феминизированный","original_flowering_duration":"Исходная Длительность Цветения","timestamp":"Временная Метка","difficulty":"Сложность","yield":"Урожай","mold_resistance":"Устойчивость к Плесени","hunger":"Голод","effects":"Эффекты","smell":"Запах","taste":"Вкус","phenotype":"Фенотип","growth_stretch":"Растяжение Роста","flower_stretch":"Растяжение Цветения","notes":"Заметки","website":"Веб-сайт","lineage":"Происхождение","infotext1":"Инфо Текст 1","infotext2":"Инфо Текст 2","min_soil_moisture":"Мин. Влажность Почвы","max_soil_moisture":"Макс. Влажность Почвы","min_temperature":"Мин. Температура","max_temperature":"Макс. Температура","min_conductivity":"Мин. Проводимость","max_conductivity":"Макс. Проводимость","min_illuminance":"Мин. Освещение","max_illuminance":"Макс. Освещение","min_air_humidity":"Мин. Влажность Воздуха","max_air_humidity":"Макс. Влажность Воздуха","min_dli":"Мин. DLI","max_dli":"Макс. DLI","min_water_consumption":"Мин. Потребление Воды","max_water_consumption":"Макс. Потребление Воды","min_fertilizer_consumption":"Мин. Потребление Удобрений","max_fertilizer_consumption":"Макс. Потребление Удобрений","min_ph":"Мин. Значение pH","max_ph":"Макс. Значение pH","seed_start":"Начало Семени","germination_start":"Начало Прорастания","rooting_start":"Начало Укоренения","growth_start":"Начало Роста","flowering_start":"Начало Цветения","harvested_start":"Начало Урожая","removed_start":"Начало Удаления","seed_duration":"Длительность Семени","germination_duration":"Длительность Прорастания","rooting_duration":"Длительность Укоренения","growth_duration":"Продолжительность роста","flower_duration":"Продолжительность цветения","harvested_duration":"Длительность Урожая","removed_duration":"Длительность Удаления"},"sensors":{"temperature":"Температура","soil_moisture":"Влажность Почвы","moisture":"Влажность Почвы","conductivity":"Проводимость","illuminance":"Освещение","air_humidity":"Влажность Воздуха","humidity":"Влажность Воздуха","dli":"Дневной Интеграл Света","water_consumption":"Потребление Воды","fertilizer_consumption":"Потребление Удобрений","power_consumption":"Потребление Энергии","ph":"Значение pH","health":"Здоровье","total_ppfd":"Общий PPFD","energy_cost":"Стоимость Энергии"},"growth_phases":{"seeds":"Семя","germination":"Прорастание","rooting":"Укоренение","growing":"Рост","flowering":"Цветение","harvested":"Собрано","removed":"Удалено"},"treatments":{"":"Нет","cut":"Обрезка","super cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray pest":"Борьба с Вредителями","spray water":"Опрыскивание Водой"},"history":{"days":"Дни","pot_size_placeholder":"Размер горшка в литрах...","please_select":"Пожалуйста, выберите...","cut":"Обрезка","super_cropping":"Супер Кроппинг","topping":"Топпинг","lollipop":"Лоллипоп","fim":"FIM","rib":"Rib","spray_pest":"Борьба с Вредителями","spray_water":"Опрыскивание Водой","growth_phase":"Фаза Роста","area":"Область","pot_size":"Размер Горшка","treatment":"Обработка","journal":"Журнал","add_entry":"Добавить Запись","image_taken":"Изображение Сделано","photo":"Фото","phase_started":"Фаза Начата","pot_size_changed":"Размер Горшка Изменен","moved_to":"Перемещено в","harvest":"Урожай","expected_harvest_date":"Ожидаемая Дата Урожая","journal_placeholder":"Запись в журнале..."},"list_card":{"title":"Карточка Списка Brokkoli","description":"Табличный вид всех растений","plant_overview":"Обзор Растений","search_placeholder":"Поиск растений...","filter_close":"Закрыть Фильтр","filter":"Фильтр","multiselect_end":"Завершить Множественный Выбор","multiselect":"Множественный Выбор","search_reset":"Сбросить Поиск","search_default":"Поиск...","entity_type":"Тип Сущности","plants":"Растения","cycles":"Циклы","filter_range_to":"до","add_plant":"Добавить Новое Растение"},"graph":{"temperature":"Температура","conductivity":"Проводимость","dli":"DLI","health":"Здоровье","water_consumption":"Потребление Воды","fertilizer_consumption":"Потребление Удобрений","power_consumption":"Потребление Энергии"},"diagnostics":{"energy_cost":"Стоимость Энергии","total_power_consumption":"Общее Потребление Энергии","total_integral":"Общий Интеграл","total_water_consumption":"Общее Потребление Воды","total_fertilizer_consumption":"Общее Потребление Удобрений","power_consumption":"Потребление Энергии","ppfd_mol":"PPFD","total_ppfd_mol_integral":"Общий PPFD"},"helpers":{"growth_phase":"Фаза Роста","flowering_duration":"Длительность Цветения","pot_size":"Размер Горшка","water_capacity":"Емкость Воды","treatment":"Обработка","health":"Здоровье","journal":"Журнал","location":"Местоположение","cycle":"Цикл"}}}},"frontend":{"ui":{"legend_rings_mode_active":"Режим: Кольца (нажмите для переключения)","legend_labels_mode_active":"Режим: Метки (нажмите для переключения)","legend_heatmap_mode_active":"Режим: Тепловая карта (нажмите для переключения)","flowering_past":"Цветение прошло","flowering_to_go":"Цветение осталось","days":"Дни"},"sensors":{}}}')},5661:t=>{t.exports=JSON.parse('{"component":{"plant":{"frontend":{"ui":{"unavailable":"不可用","config_error_entity_required":"您必须定义一个实体或listen_to","area_config_error":"您必须定义至少一个区域、一个实体或一个实体列表","plants_count":"植物","return_to_cycle":"返回周期","previous_image":"上一张图片","next_image":"下一张图片","unknown_date":"未知日期","tooltip_error":"错误","tooltip_range":"范围","tooltip_mean":"平均值","tooltip_min_max":"最小值 - 最大值","day":"天","days_since_planting":"种植后天数","upload_images_only":"请只上传图片！","image_too_large":"图片太大！最大尺寸为10MB。","upload_error":"上传错误","delete_image_error":"删除图片错误","set_main_image_error":"设置主图片错误","delete_error":"删除错误","add_image":"添加图片","set_as_main_image":"设为主图片","delete_image":"删除图片","close":"关闭","no_images_available":"没有可用图片","click_camera_to_add_image":"点击上方相机图标添加图片","clone_plant":"克隆植物","move_to_cycle":"移动到周期","replace_sensors":"替换传感器","delete_plant":"删除植物","select_cycle":"选择周期","please_select":"请选择...","move":"移动","cancel":"取消","clone":"克隆","delete_plant_confirmation":"您真的要删除这个植物吗？此操作无法撤销。","confirm_delete":"确认删除","no_matching_sensors":"未找到匹配的传感器"},"fields":{"friendly_name":"名称","state":"状态","area":"区域","growth_phase":"生长阶段","cycle":"周期","pot_size":"花盆大小","flowering_duration":"开花持续时间","strain":"品种","breeder":"育种者","feminized":"雌性化","original_flowering_duration":"原始开花持续时间","timestamp":"时间戳","difficulty":"难度","yield":"产量","mold_resistance":"抗霉菌性","hunger":"饥饿","effects":"效果","smell":"气味","taste":"味道","phenotype":"表型","growth_stretch":"生长拉伸","flower_stretch":"开花拉伸","notes":"备注","website":"网站","lineage":"血统","infotext1":"信息文本1","infotext2":"信息文本2","min_soil_moisture":"最小土壤湿度","max_soil_moisture":"最大土壤湿度","min_temperature":"最低温度","max_temperature":"最高温度","min_conductivity":"最小电导率","max_conductivity":"最大电导率","min_illuminance":"最小照度","max_illuminance":"最大照度","min_air_humidity":"最小空气湿度","max_air_humidity":"最大空气湿度","min_dli":"最小DLI","max_dli":"最大DLI","min_water_consumption":"最小用水量","max_water_consumption":"最大用水量","min_fertilizer_consumption":"最小肥料消耗","max_fertilizer_consumption":"最大肥料消耗","min_ph":"最小pH值","max_ph":"最大pH值","seed_start":"种子开始","germination_start":"发芽开始","rooting_start":"生根开始","growth_start":"生长开始","flowering_start":"开花开始","harvested_start":"收获开始","removed_start":"移除开始","seed_duration":"种子持续时间","germination_duration":"发芽持续时间","rooting_duration":"生根持续时间","growth_duration":"生长持续时间","flower_duration":"开花持续时间","harvested_duration":"收获持续时间","removed_duration":"移除持续时间"},"sensors":{"temperature":"温度","soil_moisture":"土壤湿度","moisture":"土壤湿度","conductivity":"电导率","illuminance":"照度","air_humidity":"空气湿度","humidity":"空气湿度","dli":"每日光积分","water_consumption":"用水量","fertilizer_consumption":"肥料消耗","power_consumption":"电力消耗","ph":"pH值","health":"健康","total_ppfd":"总PPFD","energy_cost":"能源成本"},"growth_phases":{"seeds":"种子","germination":"发芽","rooting":"生根","growing":"生长","flowering":"开花","harvested":"已收获","removed":"已移除"},"treatments":{"":"无","cut":"修剪","super cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray pest":"害虫防治","spray water":"喷水"},"history":{"days":"天","pot_size_placeholder":"花盆大小（升）...","please_select":"请选择...","cut":"修剪","super_cropping":"超级修剪","topping":"打顶","lollipop":"棒棒糖","fim":"FIM","rib":"肋骨","spray_pest":"害虫防治","spray_water":"喷水","growth_phase":"生长阶段","area":"区域","pot_size":"花盆大小","treatment":"处理","journal":"日志","add_entry":"添加条目","image_taken":"拍摄图片","photo":"照片","phase_started":"阶段开始","pot_size_changed":"花盆大小已更改","moved_to":"移动到","harvest":"收获","expected_harvest_date":"预期收获日期","journal_placeholder":"日志条目..."},"list_card":{"title":"Brokkoli列表卡片","description":"所有植物的表格视图","plant_overview":"植物概览","search_placeholder":"搜索植物...","filter_close":"关闭过滤器","filter":"过滤器","multiselect_end":"结束多选","multiselect":"多选","search_reset":"重置搜索","search_default":"搜索...","entity_type":"实体类型","plants":"植物","cycles":"周期","filter_range_to":"到","add_plant":"添加新植物"},"graph":{"temperature":"温度","conductivity":"电导率","dli":"DLI","health":"健康","water_consumption":"用水量","fertilizer_consumption":"肥料消耗","power_consumption":"电力消耗"},"diagnostics":{"energy_cost":"能源成本","total_power_consumption":"总电力消耗","total_integral":"总积分","total_water_consumption":"总用水量","total_fertilizer_consumption":"总肥料消耗","power_consumption":"电力消耗","ppfd_mol":"PPFD","total_ppfd_mol_integral":"总PPFD"},"helpers":{"growth_phase":"生长阶段","flowering_duration":"开花持续时间","pot_size":"花盆大小","water_capacity":"水容量","treatment":"处理","health":"健康","journal":"日志","location":"位置","cycle":"周期"}}}},"frontend":{"ui":{"legend_rings_mode_active":"模式：环形（点击切换）","legend_labels_mode_active":"模式：标签（点击切换）","legend_heatmap_mode_active":"模式：热力图（点击切换）","flowering_past":"已过开花期","flowering_to_go":"剩余开花期","days":"天"},"sensors":{}}}')}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(4828),i(2434),i(2489),i(5419)})();