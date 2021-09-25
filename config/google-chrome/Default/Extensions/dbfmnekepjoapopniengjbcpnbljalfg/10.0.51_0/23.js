(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4,7,12,28,29,34,37],[,,function(t,e,r){"use strict";r.r(e),r.d(e,"i18n",(function(){return p})),r.d(e,"IS_ZH",(function(){return h})),r.d(e,"initMasterI18n",(function(){return d})),r.d(e,"initI18n",(function(){return f})),r.d(e,"setLangToLocal",(function(){return g})),r.d(e,"getLangFromLocal",(function(){return m}));var n=r(67),o=r.n(n),i=(r(13),r(16),r(17),r(44),r(10),r(0)),a=r(105),s=r.n(a),c=r(26),l=r.n(c);let u={};const p=function(t,e){var r;if(i.l)return chrome.i18n.getMessage(t,e)||t;if(i.r){const n=null===(r=u[t])||void 0===r?void 0:r.message,o=[];"string"==typeof e?o.push(e):Array.isArray(e)&&o.push(...e);const i=/(\$.+?\$)/g;let a=i.exec(n),s=n;for(;a;){let[t]=o.splice(0,1);void 0===t&&(t=""),s=s.replace(a[1],t),a=i.exec(n)}return s||t}return t};i.s?o.a.i18n=p:window.i18n=p;const h="zh-CN"===i.B.lang;async function d(){const t=await m();u=t}async function f(){if(!i.r)return;const{slave:t}=await Promise.all([r.e(28),r.e(34)]).then(r.bind(null,177)),e=i.B.lang;try{const r=await m(),n=localStorage.getItem("setLangCode"),o=localStorage.getItem("langCode");(null!==n&&null!==r||o===e&&null!==r)&&(u=r),await async function(t){const e=t.replace("-","_"),r=(await s.a.get(`${i.z}/_locales/${Object(i.C)(e)}/messages.json?v=1630379499468`)).data;Object.keys(r).length>50&&(u=r,localStorage.setItem("langCode",t),g(r))}(n?o:e),t.postTask("slave:master-init-i18n",u)}catch(t){}}function g(t){return l.a.setItem("current-language",t)}function m(){return l.a.getItem("current-language")}},,function(t,e,r){"use strict";r.d(e,"b",(function(){return b})),r.d(e,"a",(function(){return w}));r(17),r(10),r(13),r(16);var n=r(7),o=r.n(n),i=r(105),a=r.n(i),s=r(0),c=r(8);const l=a.a.create({timeout:3e4});let u=!1;const p=[],h=()=>new o.a(async(t,e)=>{if(p.push({resolve:t,reject:e}),!u){u=!0;try{const{userStore:t}=await Promise.all([r.e(0),r.e(5),r.e(6),r.e(7),r.e(36)]).then(r.bind(null,468)),{refreshToken:e}=t;if(!e)return t.setOutdated(),u=!1,void p.forEach(t=>{t.reject(new Error("no refreshtoken"))});const{status:n,data:o}=await l.post(s.w+"/refresh_token",{refresh_token:e},{headers:{"i-lang":s.B.lang}});if(200===n&&0===o.code){const{token:e,refreshToken:r}=o.data;Object(c.i)(()=>{t.token=e,t.refreshToken=r}),u=!1,p.forEach(t=>{t.resolve(e)})}else{if(200!==n||3010!==o.code&&3012!==o.code)throw new Error(null==o?void 0:o.message);t.setOutdated(),u=!1,p.forEach(t=>{t.reject(o.message)})}}catch(t){u=!1,p.forEach(e=>{e.reject(t)})}}});var d=r(21);r(52);const f=["params","data","_auth"],g=async t=>{const{slave:e}=await r.e(12).then(r.bind(null,177)),n=((t,e={})=>{const r=Object.keys(e).map(t=>`${t}=${encodeURIComponent(e[t])}`);return r.length?t.includes("?")?t+r.join("&"):t+"?"+r.join("&"):t})(t.url,t.params),{request:o,option:i}=(t=>{const e={},r={};return t.data&&!e.body&&(e.body=JSON.stringify(t.data)),Object.keys(t).forEach(n=>{f.includes(n)||(n.startsWith("_")?r[n]=t[n]:e[n]=t[n])}),{request:e,option:r}})(t);return e.postTask("slave:fetch",{url:n,request:o,option:i})},m=a.a.CancelToken,y=a.a.create({timeout:6e4});y.interceptors.response.use(null,t=>(t.message=i18n("network_error"),o.a.reject(t)));const v=Object.create(null),b=t=>{v[t]&&v[t]()},w=async t=>{if(t._single){const e=(t=>{let e;return e=!0===t._single?t.method+"-"+t.url.split("?")[0]:t._single,e})(t);v[e]&&v[e](),t.cancelToken=new m(t=>{v[e]=t})}var e;t._delay&&await(e=t._delay,new o.a(t=>{setTimeout(t,e)}));const n={};if(t._auth){const{userStore:e}=await Promise.all([r.e(0),r.e(29)]).then(r.bind(null,364));if(!e||!e.token)throw new Error("error token");{const r=d.a.parseJwt(e.token),o=await d.a.getTimestamp();if(t._Authorization)n.Authorization=t._Authorization,n["i-token"]=t._Authorization;else if(Math.floor(o/1e3)>r.exp-60){const t=await h();n.Authorization="Bearer "+t,n["i-token"]="Bearer "+t}else n.Authorization="Bearer "+e.token,n["i-token"]="Bearer "+e.token}}let i;if(t.url.includes(s.w)&&(n["i-lang"]=s.B.lang,n["i-edition"]=s.e,n["i-version"]=s.B.extVersion),t.headers=Object.assign(Object.assign({},n),t.headers),i=t._proxy?await g(t):await y(t),t._responseAll)return i;let{data:a}=i;if(!t._Authorization&&3010===(null==a?void 0:a.code)){const e=await h();t._Authorization="Bearer "+e,delete t.headers.Authorization,delete t.headers["i-token"],a=await w(t)}return a};["get","delete"].forEach(t=>{w[t]=(e,r,n={})=>w(Object.assign({url:e,params:r,method:t},n))}),["post","patch","put"].forEach(t=>{w[t]=(e,r,n={})=>w(Object.assign({url:e,data:r,method:t},n))}),w.jsonp=(t,e,r={})=>w(Object.assign({url:t,params:e},r))},,,function(t,e,r){t.exports=r(259)},,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(7),o=r.n(n),i=r(48),a=r.n(i),s=(r(10),r(13),r(16),r(17),r(44),r(52),r(223),r(0)),c=r(2),l=r(129),u=r(226),p=r(130);const h=t=>{t&&(s.r?window.open(t,"_self"):window.chrome.tabs.getCurrent(e=>window.chrome.tabs.update(e.id,{url:t},()=>{chrome.runtime.lastError&&(t.startsWith("http")?window.open(t,"_self"):window.chrome.tabs.create({url:t}))})))},d={randomId:p.b,group:(t,e)=>{const r=[],n=Math.ceil(t.length/e);for(let o=0;o<n;o++)o===n-1?r.push(t.slice(o*e,t.length)):r.push(t.slice(o*e,(o+1)*e));return r},openUrl:(t,e=!0,r)=>{!r||1!==r.button&&!d.ctrlKeyStatus(r)?e?s.r?window.open(t,"_blank").focus():window.chrome.tabs.create({url:t,active:!0}):h(t):s.r?window.open(t,"_blank"):window.chrome.tabs.create({url:t,active:!1})},openChromeApp:async(t,e=!0,n)=>{if(!await l.a.has(["management"]))try{await l.a.request(["management"])}catch(t){const{message:e}=await Promise.all([r.e(0),r.e(2),r.e(7),r.e(8)]).then(r.bind(null,120));return void e.error(i18n("no_permission_to_open_app",s.B.vendor))}chrome.management.get(t,async({type:o,launchType:i,enabled:a,appLaunchUrl:c}={})=>{if(chrome.runtime.lastError){const{message:t}=await Promise.all([r.e(0),r.e(2),r.e(7),r.e(8)]).then(r.bind(null,120));t.error(i18n("target_chrome_app_not_installed",s.B.vendor))}else{const s=()=>{!n||1!==n.button&&!d.ctrlKeyStatus(n)?e||"hosted_app"!==o||"OPEN_AS_REGULAR_TAB"!==i?chrome.management.launchApp(t):h(c):chrome.management.launchApp(t)};if(a)s();else{const{IConfirm:e}=await Promise.all([r.e(0),r.e(35)]).then(r.bind(null,369));e.create().toShow({text:i18n("app_disabled_enable_first"),onConfirm:()=>{window.chrome.management.setEnabled(t,!0,()=>{s()})}})}}})},send:async function({key:t,data:e}){s.r||window.chrome.runtime.sendMessage({key:t,data:e})},downloadImg:function(t,e,r){if(!e)if(e="infinity-"+Math.ceil(Date.now()*Math.random()/(555555*Math.random())),t.startsWith("blob:"))e=`${e}.${r||"png"}`;else{const r=t.indexOf("?");let n=t;~r&&(n=t.slice(0,r));e=`${e}.${n.split("/").reverse()[0].split(".").reverse()[0]}`}const n=e,o=document.createElement("a");let i=t;t.startsWith("blob:")||(i=t.includes("?")?`${t}&attname=${n}`:`${t}?attname=${n}`),s.n&&o.setAttribute("target","_blank"),o.setAttribute("download",n),o.setAttribute("href",i),document.body.appendChild(o),o.click(),document.body.removeChild(o)},fmtTime:(t,e)=>new Date(t).toLocaleString(s.B.lang,e||{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}),getTimestamp:async function(){return Date.now()},parseJwt:t=>{const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(e).split("").map(t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(r)},compress:(t,e=10,r)=>new o.a(n=>{const o=new Image,i=document.createElement("canvas"),a=i.getContext("2d");o.onload=()=>{r=r||o.height*e/o.width,i.width=e,i.height=r,a.fillRect(0,0,e,r),a.drawImage(o,0,0,e,r),i.toBlob(n,"image/jpeg")},o.src=t}),mergeArray:function(t=[],e=[],r="id",n="updatetime"){if(!t||0===t.length)return{result:e||[],isLocalEffective:!1};const o=e.filter(t=>!!t),i=Object.create(null);e.forEach((t,e)=>{if(t[r]){const n=t[r];i[n]=e}});let a=!1;return t.filter(t=>0!==t[n]).forEach(t=>{const e=t[r],s=i[e];if(void 0!==s){(o[s][n]||0)<(t[n]||0)&&(o[s]=t,a=!0)}else a=!0,o.push(t)}),{result:o.filter(t=>!!t),isLocalEffective:a}},throttle:function(t,e){let r;return function(...n){const o=this;r||(r=setTimeout(()=>{t.apply(o,n),r=null},e))}},debounce:function(t,e){let r=null;return function(){const n=this,o=arguments;r&&(clearTimeout(r),r=null),r=setTimeout(()=>{t.apply(n,o)},e)}},setStyle:function(t,e=document.body){Object.keys(t).forEach(r=>{e.style.setProperty(r,t[r])})},isInputType:t=>!!t&&(!("INPUT"!==t.tagName||t.getAttribute("type")&&"text"!==t.getAttribute("type")&&"search"!==t.getAttribute("type"))||("TEXTAREA"===t.tagName||(!!t.getAttribute("contenteditable")||void 0))),convertBase64ToBlob:t=>{const e=t.split(",");let r="",n="";e.length>1&&(n=e[1],r=e[0].substring(e[0].indexOf(":")+1,e[0].indexOf(";")));const o=atob(n),i=new ArrayBuffer(o.length),a=new Uint8Array(i);for(let t=0;t<o.length;t++)a[t]=o.charCodeAt(t);return new Blob([i],{type:r})},isTouchScreendevice:()=>!(!("ontouchstart"in window)&&!navigator.maxTouchPoints),stopBubble(t){t.stopPropagation()},hexColorDelta(t,e){let r,n,o,i,a,s;Array.isArray(t)?[r,n,o]=t:(r=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16)),Array.isArray(e)?[i,a,s]=e:(i=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16));let c=255-Math.abs(r-i),l=255-Math.abs(n-a),u=255-Math.abs(o-s);return c/=255,l/=255,u/=255,(c+l+u)/3},async getSimilarColor(t){const e=a.a.createObjectURL(t),r=await new o.a(t=>{const r=new Image;r.onload=()=>t(r),r.src=e}),n=(new ColorThief).getColor(r),i=window.__INFINITY__.color_list,s=i.map(t=>d.hexColorDelta(n,t)),c=Math.max.apply(null,s),l=i[s.indexOf(c)];return a.a.revokeObjectURL(e),l},getPrivacyUrl(){const t=c.IS_ZH?"zh":"en";return s.n?`/privacy/${t}/privacy.html`:`${s.t}/${s.e}/${s.c}/${t}/privacy.html`},sleep:(t=0)=>new o.a(e=>{setTimeout(()=>{e(null)},t)}),checkImage(){let t;return[e=>new o.a((r,n)=>{t=new Image,t.onload=r,t.onerror=n,t.src=e}),()=>{t&&(t.src="")}]},requestFirefoxThrottle(t,e,r=!1){if(s.n||r){const r="throttle-"+t;if("boolean"==typeof e&&localStorage.setItem(r,Date.now()+""),"number"==typeof e){const t=localStorage.getItem(r),n=Date.now();if(t&&Number(t)<n&&Number(t)+e>n)return!1}}return!0},chooseFile:(t,e)=>(t=t||"image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg",e=e||"readAsDataURL",new o.a(r=>{try{document.querySelectorAll(".choose-file").forEach(t=>{document.body.removeChild(t)})}catch(t){}const n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("class","choose-file"),n.setAttribute("accept",t),n.style.opacity="0",n.style.width="0",n.style.height="0",n.value="",n.addEventListener("change",t=>{const o=t.target.files[0],i=new FileReader;i[e](o),i.onload=function(t){const e=t.target.result;r(e);try{document.body.removeChild(n)}catch(t){}}},{once:!0}),document.body.appendChild(n),n.click()})),stopShowMenu(t){if(!d.isInputType(t.target))return t.stopPropagation(),t.preventDefault(),document.querySelector("i-menu").toHide(),!1},ctrlKeyStatus:t=>s.o?t.metaKey:t.ctrlKey,getFavIconSrc:t=>g(t)?t:function(t){try{return new u.a(t).host}catch(e){return t}}(function(t){if(function(t){return/^(.+?):\/\//.test(t)}(t)||g(t))return t;return"http://"+t}(t)).replace("^www.",""),getLastReqValue(t){const e=[],r=this;return async function(n,o,i){const a=r.randomId("req");e.push(a);const s=await t(n,o,i),c=e.findIndex(t=>t===a),l=e.length;return e.splice(0,c+1),c===l-1?s:null}},isFirstDate(t){const e=new Date("2013/11/30").toLocaleDateString(t);let r="";if(e.replace(/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/,(t,e)=>(r=e,"")),"2013"===r)return!0;const n=String(new Date("2013/11/30").getDate());return r===n},internaDateToStan:p.a,getTargetLogDomain(t){if(!t)return"";try{if(t.startsWith("http://")||t.startsWith("https://")){const e=new a.a(t);if(e.host)return e.host}return t.split("?")[0]}catch(e){return t}}};const f=/^\w+:\w/;function g(t){return f.test(t)}e.a=d;const m=document.createElement("script");m.src="/vendor/color-thief.min.js",document.head.appendChild(m),m.onload=()=>{m.remove()}},function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return l})),r.d(e,"b",(function(){return u})),r.d(e,"e",(function(){return p})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return f}));var n=r(7),o=r.n(n),i=(r(10),r(13),r(16),r(0)),a=r(26),s=r.n(a);function c(t,e){if(i.l){if(t=window.chrome.runtime.getURL(t),null==e?void 0:e.isNewTab)return window.chrome.tabs.create({url:t});window.chrome.tabs.getCurrent(e=>window.chrome.tabs.update(e.id,{url:t},()=>{chrome.runtime.lastError&&t&&(t.startsWith("http")?window.open(t,"_self"):window.chrome.tabs.create({url:t}))}))}else{if(null==e?void 0:e.isNewTab)return window.open(t);window.open(t,"_self")}}async function l(){if(i.l){const{slave:t}=await r.e(12).then(r.bind(null,177));window.chrome.tabs.getCurrent(e=>{t.sendMessage("tabs-reload"),setTimeout(()=>{window.chrome.tabs.remove(e.id)},16)})}else setTimeout(()=>{c("/")},16)}async function u(t,e){try{if(e){return await s.a.getItem(t)}{const e=localStorage.getItem(t);if(e)return"string"==typeof e?JSON.parse(e):e}}catch(t){throw new Error(t)}}async function p(t,e,r){r?await s.a.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}async function h(t,e,r=!1){const n=await u(t,r);if(n&&Object.keys(n).length){p(t,Object.assign({},n,e),r)}else p(t,e,r)}async function d(t,e){const{autoBackupPipe:r}=await u("store-sync",!0);r.data[t]=e,r.timestamp=Date.now(),r.websocketKeys.includes(t)||r.websocketKeys.push(t),await h("store-sync",{autoBackupPipe:r},!0)}async function f(){const t=await new o.a(t=>chrome.bookmarks.getTree(t));if(i.n){const e=t[0].children.findIndex(t=>"unfiled_____"===t.id),r=t[0].children.findIndex(t=>"toolbar_____"===t.id);if(-1!==e&&-1!==r)if(e>r){const[n]=t[0].children.splice(e,1),[o]=t[0].children.splice(r,1);t[0].children.unshift(o,n)}else{const[n]=t[0].children.splice(r,1),[o]=t[0].children.splice(e,1);t[0].children.unshift(n,o)}}return t}},function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return c}));r(17);const n=/^http[s]?:\/\//;function o(t){return n.test(t)}const i=navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/),a=(t,e)=>{const r="https://infinityicon.infinitynewtab.com/assets/images/"+t;return!0===e?s(r):!1===e?r:/\.(png|jpg|jpeg)$/.test(t)?s(r):r};function s(t){return o(t)?t.includes("?")?t:i?t+"?imageView2/0/q/100":t+"?imageView2/0/format/webp/q/100":t}function c(t){return o(t)?t.includes("?")?t:i?t+"?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim":t+"?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim":t}},,,,,,,,,,function(t,e,r){var n=r(12),o=r(201),i=r(29),a=r(202),s=r(205),c=r(267),l=o("wks"),u=n.Symbol,p=c?u:u&&u.withoutSetter||a;t.exports=function(t){return i(l,t)&&(s||"string"==typeof l[t])||(s&&i(u,t)?l[t]=u[t]:l[t]=p("Symbol."+t)),l[t]}},,,,,,,,,,,,,,,function(t,e,r){t.exports=r(286)},,,,function(t,e,r){var n=r(3),o=r(107),i=r(254),a=r(14);for(var s in o){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(t){l.forEach=i}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"i",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"h",(function(){return O})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"g",(function(){return s})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return xt})),r.d(e,"c",(function(){return c}));var n={};r.r(n),r.d(n,"getLocalCity",(function(){return h})),r.d(n,"getForecastWeather",(function(){return d})),r.d(n,"getCityList",(function(){return f}));var o={};r.r(o),r.d(o,"getSearchSuggest",(function(){return w})),r.d(o,"getEnginesList",(function(){return x}));var i={};r.r(i),r.d(i,"getIcon",(function(){return B})),r.d(i,"getUrlInfoWithPermission",(function(){return U})),r.d(i,"getUrlIcon",(function(){return N})),r.d(i,"getFetchiconUrls",(function(){return q}));var a={};r.r(a),r.d(a,"getUnreadEmails",(function(){return H}));var s={};r.r(s),r.d(s,"register",(function(){return G})),r.d(s,"login",(function(){return J})),r.d(s,"updateProfile",(function(){return K})),r.d(s,"getUserProfile",(function(){return Z})),r.d(s,"uploadAvatar",(function(){return Q})),r.d(s,"modifyPassword",(function(){return tt})),r.d(s,"forgetPassword",(function(){return et})),r.d(s,"resetPassword",(function(){return rt})),r.d(s,"getCode",(function(){return nt})),r.d(s,"getRegisterCode",(function(){return ot})),r.d(s,"inspceCode",(function(){return it})),r.d(s,"checkTokenIsExpired",(function(){return at})),r.d(s,"deleteAccount",(function(){return st})),r.d(s,"loginWithUid",(function(){return ct})),r.d(s,"v1BasicLogin",(function(){return lt})),r.d(s,"getMobileUid",(function(){return ut}));var c={};r.r(c),r.d(c,"getRepairConcat",(function(){return pt})),r.d(c,"postErrorCollect",(function(){return ht})),r.d(c,"sendLog",(function(){return dt}));var l={};r.r(l),r.d(l,"getSyncList",(function(){return mt})),r.d(l,"getSyncDetail",(function(){return yt})),r.d(l,"autoBackup",(function(){return vt})),r.d(l,"manualBackup",(function(){return bt})),r.d(l,"getV2DataFromV1",(function(){return wt}));r(10);var u=r(0),p=r(4);const h=async()=>{try{const t=await p.a.get(u.y+"/city/locate",{lang:u.B.lang},{timeout:1e4});if(t&&t.city)return{data:t.city}}catch(t){return{error:t}}},d=async t=>{try{return{data:(await p.a.get(u.y+"/weather/forecast",{lang:u.B.lang,cid:t},{timeout:1e4})).forecast}}catch(t){return{error:t}}},f=async t=>{try{return{data:await p.a.get(u.y+"/city/list",{lang:u.B.lang,searchkey:t},{timeout:1e4})}}catch(t){return{error:t}}};r(17);var g=r(21),m=r(99),y=r.n(m),v=r(239),b=r.n(v);const w=async t=>u.B.isZh?u.h||u.r?A(t):_(t):u.h||u.r?S(t):T(t),x=async t=>{let e=u.q?36e5:6e4;t||(e=0);try{if(!g.a.requestFirefoxThrottle("/search/list",e,!0))return{error:"request throttle error"};const r=await p.a.get(u.w+"/search/list",{lang:u.B.lang,platform:u.B.platform,platformVersion:u.B.platformVersion,edition:u.e,maybe360:u.D,version:t||""+Date.now()});if(0===r.code){const t=r.data.map(t=>{const e={};return e.name=t.name,e.uuid=t.seId,e.logo=t.logo,e.desc=t.desc,e.types=t.types,e.hide=t.hide,e});return g.a.requestFirefoxThrottle("/search/list",!0,!0),{data:{list:t,hash:y()(JSON.stringify(t)),meta:r.meta}}}if(2005===r.code)return g.a.requestFirefoxThrottle("/search/list",!0,!0),{error:r};throw r}catch(t){return{error:t}}},k=g.a.getLastReqValue(p.a.jsonp),A=async t=>{var e;try{const r=await k(u.b+"/su?ie=utf-8&p=3",{wd:t},{adapter:b.a,callbackParamName:"cb"});return{data:(null===(e=null==r?void 0:r.s)||void 0===e?void 0:e.map(t=>({text:t})))||[]}}catch(t){return{error:t}}},S=async t=>{var e;try{const r=await k(u.g+"/complete/search?client=chrome",{q:t},{adapter:b.a,callbackParamName:"jsonp"});return{data:(null==r?void 0:r.length)&&(null===(e=r[1])||void 0===e?void 0:e.length)?r[1].map(t=>({text:t})):[]}}catch(t){return{error:t}}},_=async t=>{try{const e=await p.a.get(u.b+"/su?p=3&ie=UTF-8&cb=",{wd:t},{_single:!0,_delay:0}),r=/s:(\[[\w\W]*\])/.exec(e),n=JSON.parse(r[1]);return{data:n.map(t=>({text:t}))}}catch(t){return{error:t}}},T=async t=>{try{const e=await p.a.get(u.g+"/complete/search?client=chrome",{q:t},{_single:!0,_delay:200});return{data:e[2].map((t,r)=>(t||(t=e[1][r]),{text:t}))}}catch(t){return{error:t}}};var O=r(188),j=r(7),C=r.n(j),M=r(104),E=r.n(M),R=r(48),I=r.n(R);r(52),r(243),r(13),r(16),r(44);const L=u.B.lang,B=async({page:t=0,type:e,keyword:r,source:n}={})=>{try{const o=await p.a.get(u.v+"/get-icons",{lang:L,page:t,type:e,source:n,keyword:r},{_single:!0,_delay:200});if(o.success)return o.icons.forEach(t=>{if("infinity"===t.source)switch("infinity://wallpaper"===t.url&&(t.name="wallpaper_library"),t.url){case"infinity://wallpaper":case"infinity://weather":case"infinity://todos":case"infinity://notes":case"infinity://history":case"infinity://bookmarks":case"infinity://settings":t.name=i18n(t.name),t.description=i18n(t.description);break;case"infinity://extension":t.name=i18n(t.name),t.description=i18n(t.description,u.B.vendor)}t._footer=t.description||i18n("no_description")}),{data:o};throw o}catch(t){return{error:t}}},D=async t=>{try{const e=await p.a.get(u.w+"/icon/title",{url:t},{_single:!0,_delay:0,timeout:3e3});if(0===e.code)return{data:{name:e.data.title}};throw e}catch(t){return{error:t}}},P=/<title[^>]*>\s*(.*)\s*<\/title>/,U=t=>window.__INFINITY__.hasAllUrlPermission?new C.a(async e=>{let r=0;D(t).then(t=>{r+=1,t.error&&2!==r||e(t)}),(async t=>{try{const e=await p.a.get(t,{},{_single:"getUrlInfoFromFE",timeout:3e3,responseType:"text",_responseAll:!0}),r=e.data;if(r&&e.status>=200&&e.status<300){const t=r.indexOf("<title");if(t>0){const e=r.slice(t,t+200),n=P.exec(e),o=null==n?void 0:n[1];if(o)return{data:{name:o}}}}return{error:"error"}}catch(t){return{error:t}}})(t).then(t=>{r+=1,t.error&&2!==r||e(t)})}):new C.a(async e=>{e(await D(t))}),$=(t,e)=>{if(0===e.length)return e;const r=new Map,n=[];return t.forEach((t,e)=>{r.set(t,e)}),e.forEach(t=>{const e=r.get(t);n[e]=t}),n.filter(t=>!!t)},z=t=>new C.a(e=>{const r=()=>{const e=$(t,i),r=$(t,a),n=$(t,s);return e.concat(r,n)},n=t.length;let o=0;const i=[],a=[],s=[];t.forEach(t=>{const c=new Image;c.onload=function(){o+=1;const{width:c,height:l}=this,u=Math.max(c,l),p=Math.min(c,l);u/p<5?p>50&&u>100?i.push(t):p>50||u>100?a.push(t):s.push(t):s.push(t),o===n&&e(r())},c.onerror=()=>{o+=1,o===n&&e(r())},c.src=t}),setTimeout(()=>{e(r())},3e3)}),W=/\.(ico|png|jpg|jpeg|svg|webp)$/,N=async t=>{var e;try{const r=await p.a.get(t,{},{_single:"getUrlIcon",timeout:3e3,responseType:"text",_responseAll:!0}),n=r.data;if(n&&r.status>=200&&r.status<300){const o=(null===(e=r.request)||void 0===e?void 0:e.responseURL)||t;let i=((t,e)=>{const r=[];return e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi,(t,e)=>{r.push(e)}),E()(r).call(r,(e,r)=>{if(r&&W.test(r)){const n=new I.a(r,t);e.push(n.href)}return e},[])})(o,n);if(i.length<6){const t=((t,e)=>{const r=[];return e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi,(t,e)=>{r.push(e)}),E()(r).call(r,(e,r)=>{if(r&&W.test(r)){const n=new I.a(r,t);e.push(n.href)}return e},[])})(o,n);i=i.concat(t)}i.length>4&&(i.length=4);let a=await z(i);return a=Array.from(new Set(a)),a.length>2&&(a.length=2),{data:a}}return{error:""}}catch(t){return{error:t}}},q=async t=>{try{const{host:e}=new I.a(t),r=await p.a.get(u.w+"/icon/get_icon_urls",{host:e});return 0!==r.code?{error:r}:{data:r.data.map(t=>t.url)}}catch(t){return{error:t}}};function F(t){return t?t.textContent:null}function H(t){return new C.a((e,r)=>{const n=new XMLHttpRequest;n.onreadystatechange=function(){var t,o;if(4==n.readyState)if(n.responseXML){const r=n.responseXML;let i=F(r.querySelector("title"));if(i)try{i=/(\w+)@(\w+\.\w+)/.exec(i)[0]}catch(t){}const a=parseInt(F(r.querySelector("fullcount")),10),s=r.querySelectorAll("entry"),c=[];let l=-1;for(let e=0,r=s.length;e<r;e++){const r=s[e],n={id:F(r.querySelector("id")),issued:F(r.querySelector("issued")),title:F(r.querySelector("title")),summary:F(r.querySelector("summary")),link:(t=r.querySelector("link"),o="href",t?t.getAttribute(o):null),authorName:F(r.querySelector("author name")),authorEmail:F(r.querySelector("author email"))};n.issued&&(n.issued=new Date(n.issued).valueOf(),l=Math.max(l,n.issued)),c.push(n)}e({account:i,lastIssuedTime:l,count:a,emails:c})}else r()},n.onerror=r,n.open("GET",function(t){return u.f+"/mail/feed/atom?zx="+encodeURIComponent(t)}(t),!0),n.send(null)})}var V=r(126),Y=r.n(V),X=r(22);const G=async({email:t,password:e,repeatPassword:r,code:n})=>{const o={email:Y()(t).call(t),password:y()(e),repeatPassword:y()(r),code:Y()(n).call(n)};try{return await p.a.post(u.w+"/user/register",o)}catch(t){return t}},J=async({email:t,password:e})=>{const r={email:Y()(t).call(t),password:y()(e)};try{return await p.a.post(u.w+"/user/login",r)}catch(t){return t}};async function K(t){const e=(await Object(X.b)("store-user")).userInfo.uid;try{return await p.a.post(u.w+"/user/update_profile/"+e,t,{_auth:!0})}catch(t){throw new Error(t.message)}}async function Z(){try{return await p.a.get(u.w+"/user/get_user_profile",{},{_auth:!0,_proxy:!0})}catch(t){return t}}async function Q(t){const e=new FormData;e.append("file",t);try{const t=await p.a.post(u.w+"/upload/avatar",e,{_auth:!0,headers:{"Content-Type":"multipart/form-data"}});if(0===(null==t?void 0:t.code))return t;throw new Error(i18n("upload_avatar_failure"))}catch(t){throw new Error(t)}}async function tt({originPassword:t,newPassword:e}){const r=await Object(X.b)("store-user"),n=r.userInfo.uid,{token:o}=r;if(!o)throw new Error(i18n("unknown_mistake"));const i={originPassword:y()(t),newPassword:y()(e)};try{return await p.a.post(u.w+"/user/modify_password/"+n,i,{_auth:!0})}catch(t){return t}}async function et(t){try{return await p.a.post(u.w+"/user/forget_password",t)}catch(t){return t}}async function rt({password:t,repeatPassword:e,email:r,code:n}){const o={password:y()(t),repeatPassword:y()(e),email:Y()(r).call(r),code:Y()(n).call(n)};try{return await p.a.post(u.w+"/user/reset_password",o)}catch(t){return t}}async function nt(t){try{return await p.a.post(`${u.w}/get_code?lang=${u.B.lang}`,t)}catch(t){return t}}async function ot(t){try{return await p.a.post(`${u.w}/get_register_code?lang=${u.B.lang}`,t)}catch(t){return t}}async function it(t){try{return await p.a.post(u.w+"/inspce_code",t)}catch(t){return t}}async function at(){try{return await p.a.get(u.w+"/check_token",{},{_auth:!0})}catch(t){return t}}async function st(){const t=(await Object(X.b)("store-user")).userInfo.uid;try{return await p.a.post(u.w+"/user/delete/"+t,{},{_auth:!0})}catch(t){return t}}const ct=async t=>{try{return await p.a.post(u.w+"/user/login_uid",t,{timeout:1e4})}catch(t){return t}},lt=async t=>{try{return await p.a.post(u.w+"/user/v1_basic_login",t,{timeout:1e4})}catch(t){return t}},ut=async(t,e)=>{try{return await p.a.get(`${u.w}/user/user_hash?uid=${t}&secret=${e}`)}catch(t){return t}},pt=async()=>{try{const t=await p.a.get(u.w+"/get_concat_info");if(0===t.code)return{data:t.data};throw t}catch(t){return{error:t}}},ht=async(t,e)=>{try{const{response:r,stack:n,config:o}=e;let i=r||o;i&&(i=JSON.stringify(i,(t,e)=>{if(e instanceof FormData){const t={};for(const[r,n]of e)t[r]=n;return t}if(e instanceof File){return{lastModified:e.lastModified,name:e.name,size:e.size,type:e.type}}return e}));let a=await Object(X.b)("store-user");if(a){const t=["mobileuid","avatar","refreshToken","secret","gender","name"];a=JSON.stringify(a,(e,r)=>{if(!t.includes(e))return r})}const s=await p.a.post(u.w+"/collect",{type:t,user:a,stack:n,info:i,env:Object.assign({},u.B)});if(0===s.code)return{data:s.data};throw s}catch(t){return{error:t}}},dt=async t=>{await p.a.get(t,void 0,{_proxy:!0,_proxyIgnoreRes:!0})},ft=t=>{const e=JSON.stringify(t),r=(new TextEncoder).encode(e);return new Blob([r],{type:"application/json;charset=utf-8"})},gt=t=>({id:t,time:g.a.fmtTime(Number(t))}),mt=async()=>{try{const t=await p.a.get(u.w+"/sync/list",void 0,{_auth:!0,_proxy:!0});return 0!==t.code?{error:t}:(t.data.auto=t.data.auto.map(gt),t.data.manual=t.data.manual.map(gt),{data:t.data})}catch(t){return{error:t}}},yt=async(t,e,r="all")=>{try{const n=await p.a.get(u.w+"/sync/download_url",{id:t,type:e,keys:r},{_auth:!0});if(0!==n.code)return{error:n};const o=n.data;let i={};const a=await C.a.all(o.map(e=>p.a.get(e.url+"&timestampid="+("latest"===t?Date.now():t),{},{timeout:18e4})));return o.forEach((t,r)=>{const n=t.fileKey;"manual"===e?i=Object.assign(Object.assign({},i),a[r]):"auto"===e&&(i[n]=a[r])}),{data:i}}catch(t){return ht("getSyncDetail",t),{error:t}}},vt=async(t,e="")=>{const r=Object.keys(t).join(",");try{const n=await p.a.get(u.w+"/sync/token",{type:"auto",keys:r},{_auth:!0});if(0!==n.code||!n.data.length)return{error:n};const o=n.data;await C.a.all(o.map(e=>{const{url:r,key:n,token:o,host:i}=e,a=new FormData;return a.append("token",o),a.append("key",r),a.append("file",ft(t[n])),p.a.post(i,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4})})),localStorage.setItem("pre-sync-id",o[0].timestamp+"");const i=await p.a.post(u.w+"/sync/done",{type:"auto",websocketkeys:e,keys:r,record_time:o[0].timestamp},{_auth:!0});return 0!==i.code?{error:i}:{data:i.data.map(gt)}}catch(t){return ht("autoBackup",t),{error:t}}},bt=async t=>{try{const e=await p.a.get(u.w+"/sync/token",{type:"manual",keys:"data"},{_auth:!0});if(0!==e.code||!e.data.length)return{error:e};const{token:r,url:n,timestamp:o,host:i}=e.data[0],a=new FormData;a.append("token",r),a.append("key",n),a.append("file",ft(t)),await p.a.post(i,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4});const s=await p.a.post(u.w+"/sync/done",{type:"manual",keys:"data",record_time:o},{_auth:!0});return 0!==s.code?{error:s}:{data:s.data.map(gt)}}catch(t){return ht("manualBackup",t),{error:t}}},wt=t=>"pro"===t?async function(){try{const{userInfo:t={}}=await Object(X.b)("store-user"),{uid:e,secret:r}=t,n=await p.a.get(u.v+"/user/recovery-pro",{uid:e,secret:r},{timeout:2e5});if(n.success)return{data:n.data};throw n}catch(t){return ht("getProV1Data",t),{error:t}}}():"basic"===t?async function(){try{const t=await p.a.get(u.w+"/sync/recover_basic",{},{_auth:!0,timeout:2e5});return 0!==t.code?{error:t}:{data:t.data}}catch(t){return ht("getBasicV1Data",t),{error:t}}}():void 0;var xt=r(251)},,function(t,e,r){var n=r(70),o=r(12),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},,,,,,,,,,,,,function(t,e){t.exports=!0},,,function(t,e,r){var n,o,i,a,s;n=r(347),o=r(252).utf8,i=r(348),a=r(252).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var r=n.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,p=-1732584194,h=271733878,d=0;d<r.length;d++)r[d]=16711935&(r[d]<<8|r[d]>>>24)|4278255360&(r[d]<<24|r[d]>>>8);r[c>>>5]|=128<<c%32,r[14+(c+64>>>9<<4)]=c;var f=s._ff,g=s._gg,m=s._hh,y=s._ii;for(d=0;d<r.length;d+=16){var v=l,b=u,w=p,x=h;l=f(l,u,p,h,r[d+0],7,-680876936),h=f(h,l,u,p,r[d+1],12,-389564586),p=f(p,h,l,u,r[d+2],17,606105819),u=f(u,p,h,l,r[d+3],22,-1044525330),l=f(l,u,p,h,r[d+4],7,-176418897),h=f(h,l,u,p,r[d+5],12,1200080426),p=f(p,h,l,u,r[d+6],17,-1473231341),u=f(u,p,h,l,r[d+7],22,-45705983),l=f(l,u,p,h,r[d+8],7,1770035416),h=f(h,l,u,p,r[d+9],12,-1958414417),p=f(p,h,l,u,r[d+10],17,-42063),u=f(u,p,h,l,r[d+11],22,-1990404162),l=f(l,u,p,h,r[d+12],7,1804603682),h=f(h,l,u,p,r[d+13],12,-40341101),p=f(p,h,l,u,r[d+14],17,-1502002290),l=g(l,u=f(u,p,h,l,r[d+15],22,1236535329),p,h,r[d+1],5,-165796510),h=g(h,l,u,p,r[d+6],9,-1069501632),p=g(p,h,l,u,r[d+11],14,643717713),u=g(u,p,h,l,r[d+0],20,-373897302),l=g(l,u,p,h,r[d+5],5,-701558691),h=g(h,l,u,p,r[d+10],9,38016083),p=g(p,h,l,u,r[d+15],14,-660478335),u=g(u,p,h,l,r[d+4],20,-405537848),l=g(l,u,p,h,r[d+9],5,568446438),h=g(h,l,u,p,r[d+14],9,-1019803690),p=g(p,h,l,u,r[d+3],14,-187363961),u=g(u,p,h,l,r[d+8],20,1163531501),l=g(l,u,p,h,r[d+13],5,-1444681467),h=g(h,l,u,p,r[d+2],9,-51403784),p=g(p,h,l,u,r[d+7],14,1735328473),l=m(l,u=g(u,p,h,l,r[d+12],20,-1926607734),p,h,r[d+5],4,-378558),h=m(h,l,u,p,r[d+8],11,-2022574463),p=m(p,h,l,u,r[d+11],16,1839030562),u=m(u,p,h,l,r[d+14],23,-35309556),l=m(l,u,p,h,r[d+1],4,-1530992060),h=m(h,l,u,p,r[d+4],11,1272893353),p=m(p,h,l,u,r[d+7],16,-155497632),u=m(u,p,h,l,r[d+10],23,-1094730640),l=m(l,u,p,h,r[d+13],4,681279174),h=m(h,l,u,p,r[d+0],11,-358537222),p=m(p,h,l,u,r[d+3],16,-722521979),u=m(u,p,h,l,r[d+6],23,76029189),l=m(l,u,p,h,r[d+9],4,-640364487),h=m(h,l,u,p,r[d+12],11,-421815835),p=m(p,h,l,u,r[d+15],16,530742520),l=y(l,u=m(u,p,h,l,r[d+2],23,-995338651),p,h,r[d+0],6,-198630844),h=y(h,l,u,p,r[d+7],10,1126891415),p=y(p,h,l,u,r[d+14],15,-1416354905),u=y(u,p,h,l,r[d+5],21,-57434055),l=y(l,u,p,h,r[d+12],6,1700485571),h=y(h,l,u,p,r[d+3],10,-1894986606),p=y(p,h,l,u,r[d+10],15,-1051523),u=y(u,p,h,l,r[d+1],21,-2054922799),l=y(l,u,p,h,r[d+8],6,1873313359),h=y(h,l,u,p,r[d+15],10,-30611744),p=y(p,h,l,u,r[d+6],15,-1560198380),u=y(u,p,h,l,r[d+13],21,1309151649),l=y(l,u,p,h,r[d+4],6,-145523070),h=y(h,l,u,p,r[d+11],10,-1120210379),p=y(p,h,l,u,r[d+2],15,718787259),u=y(u,p,h,l,r[d+9],21,-343485551),l=l+v>>>0,u=u+b>>>0,p=p+w>>>0,h=h+x>>>0}return n.endian([l,u,p,h])})._ff=function(t,e,r,n,o,i,a){var s=t+(e&r|~e&n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._gg=function(t,e,r,n,o,i,a){var s=t+(e&n|r&~n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._hh=function(t,e,r,n,o,i,a){var s=t+(e^r^n)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._ii=function(t,e,r,n,o,i,a){var s=t+(r^(e|~n))+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(s(t,e));return e&&e.asBytes?r:e&&e.asString?a.bytesToString(r):n.bytesToHex(r)}},function(t,e){t.exports={}},function(t,e,r){var n=r(39);t.exports=function(t,e,r,o){o&&o.enumerable?t[e]=r:n(t,e,r)}},,function(t,e,r){var n,o,i,a=r(276),s=r(12),c=r(30),l=r(39),u=r(29),p=r(181),h=r(180),d=r(184),f=s.WeakMap;if(a||p.state){var g=p.state||(p.state=new f),m=g.get,y=g.has,v=g.set;n=function(t,e){if(y.call(g,t))throw new TypeError("Object already initialized");return e.facade=t,v.call(g,t,e),e},o=function(t){return m.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=h("state");d[b]=!0,n=function(t,e){if(u(t,b))throw new TypeError("Object already initialized");return e.facade=t,l(t,b,e),e},o=function(t){return u(t,b)?t[b]:{}},i=function(t){return u(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){t.exports=r(309)},,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(49),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},function(t,e,r){var n=r(185),o=r(71).f,i=r(39),a=r(29),s=r(270),c=r(33)("toStringTag");t.exports=function(t,e,r,l){if(t){var u=r?t:t.prototype;a(u,c)||o(u,c,{configurable:!0,value:e}),l&&!n&&i(u,"toString",s)}}},function(t,e,r){"use strict";r.r(e),r.d(e,"iMessage",(function(){return p})),r.d(e,"message",(function(){return h}));r(13),r(16);var n=r(344),o=r(1),i=r(335),a=r(366),s=r.n(a),c=r(367),l=r.n(c),u=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let p=class extends o.a{constructor(){super(...arguments),this.content="",this.type="error"}render(){const t={"infinity-message":!0,"position-top":"top"===this.type};return o.e`
      <div class=${Object(i.a)(t)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `}renderImg(){return"error"===this.type?o.e`<img .src=${s.a} />`:"warn"===this.type?o.e`<img .src=${l.a} />`:void 0}};p.styles=o.b`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      min-width: 330px;
      padding: 0 20px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 48px 0px rgba(0, 0, 0, 0.24);
      border-radius: 6px;
      z-index: 99999999999;
    }
    :host([type='top']) {
      width: 100%;
      margin: 0;
      left: 0;
      top: var(--top-bar-height);
      height: auto;
      padding: 5px;
      border-radius: 0;
      background: rgba(95, 92, 92, 0.6);
      color: #fff;
      transform: none;
      transition: all 300ms;
      opacity: 0;
      pointer-events: none;
    }
    :host(.anim[type='top']) {
      opacity: 1;
    }

    .infinity-message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `,u([Object(o.g)({type:String})],p.prototype,"content",void 0),u([Object(o.g)({type:String})],p.prototype,"type",void 0),p=u([Object(o.c)("i-message")],p);const h={newInstance:function(t,e=2,r,n){let o;if(document.querySelector("i-message"))return void clearInterval(o);const i=document.createElement("i-message");return i.setAttribute("content",t),i.setAttribute("type",r),document.body.appendChild(i),0!==e&&(o=setTimeout(()=>{document.body.removeChild(i),n&&n()},1e3*e)),i},error:function(t,e,r){n.default.error(t,e),r&&setTimeout(r,e)},success:function(t,e,r){n.default.success(t,e),r&&setTimeout(r,e)},top:function(t,e,r){const n=this.newInstance(t,e,"top",r);setTimeout(()=>null==n?void 0:n.classList.add("anim"))},warn:function(t,e,r){this.newInstance(t,e,"warn",r)}}},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"c",(function(){return a}));r(17);const n=r(0).r?"serviceworker":"background";let o=!1;"background"===n?o="undefined"==typeof ServiceWorkerGlobalScope&&chrome.extension.getBackgroundPage()===window:"serviceworker"===n&&(o="undefined"!=typeof ServiceWorkerGlobalScope);const i={timeout:0,taskId:""},a=()=>(""+Date.now()/1e3/1e5).split(".")[1].substr(0,8)+(""+Math.random()).split(".")[1].substr(0,8).padEnd(8,"0")},,,function(t,e,r){var n=r(185),o=r(84),i=r(33)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},,function(t,e,r){t.exports=r(313)},function(t,e,r){var n=r(183),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(84),o=r(12);t.exports="process"==n(o.process)},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(7),o=r.n(n),i=(r(13),r(16),r(0));const a={};const s=new class{constructor(){this.request=(t,e)=>((i.n||i.k||i.h)&&e&&e.includes("chrome://favicon/")&&(e=Array.from(new Set(e))).splice(e.findIndex(t=>"chrome://favicon/"===t),1),new o.a((r,n)=>{if(i.r)return void n();let o="";if(i.n){if(o=t.join(",")+(null==e?void 0:e.join(",")),a[o])return void n(new Error("repeat"));a[o]=!0}chrome.permissions.request({permissions:t,origins:e},t=>{i.n&&a[o]&&delete a[o],chrome.runtime.lastError?n(chrome.runtime.lastError):t?r(!0):n(new Error("REJECT"))})})),this.has=(t,e)=>new o.a(r=>{i.r?r(!1):chrome.permissions.contains({permissions:t,origins:e},t=>{r(t)})})}}},function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));r(13),r(223),r(17),r(44);var n=r(0);function o(t){return function(e){const r=new Uint8Array((e||40)/2);return window.crypto.getRandomValues(r),t+(new Date).getTime().toString(32)+function(t){let e="";const r="abcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}(18)}()}function i(t,e=n.B.lang){const r=this,o=/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/;let i,a,s;return o.test(t)?(t.replace(o,(t,n,o,c)=>{4===n.length?(i=n,a=o,s=c):r.isFirstDate(e)?(s=n,a=o,i=c):(s=o,a=n,i=c),"th"===e&&(i=Number(i)-543)}),new Date(`${i}/${a}/${s}`)):null}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){var n=r(28),o=r(217),i=r(127),a=r(73),s=r(172),c=r(218),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var u,p,h,d,f,g,m,y=r&&r.that,v=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=a(e,y,1+v+w),k=function(t){return u&&c(u),new l(!0,t)},A=function(t){return v?(n(t),w?x(t[0],t[1],k):x(t[0],t[1])):w?x(t,k):x(t)};if(b)u=t;else{if("function"!=typeof(p=s(t)))throw TypeError("Target is not iterable");if(o(p)){for(h=0,d=i(t.length);d>h;h++)if((f=A(t[h]))&&f instanceof l)return f;return new l(!1)}u=p.call(t)}for(g=u.next;!(m=g.call(u)).done;){try{f=A(m.value)}catch(t){throw c(u),t}if("object"==typeof f&&f&&f instanceof l)return f}return new l(!1)}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,r){var n=r(124),o=r(100),i=r(33)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},,,function(t,e,r){var n,o,i=r(12),a=r(178),s=i.process,c=s&&s.versions,l=c&&c.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(70);t.exports=function(t){return n[t+"Prototype"]}},function(t,e,r){"use strict";r.r(e),r.d(e,"slave",(function(){return s}));r(10),r(13),r(16),r(52);var n=r(7),o=r.n(n),i=r(253),a=r(121);const s=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new i.a,this.initChannel=()=>{"serviceworker"===a.b?this.initServiceworker():"background"===a.b&&this.initBackground()},this.awaitChannel=()=>new o.a(async(t,e)=>{"serviceworker"===a.b?this.channel?(await this.channel.active,await this.channel.controlling,t(null)):(this.initResolve.push(t),this.initReject.push(e)):"background"===a.b&&t(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:t}=await r.e(11).then(r.bind(null,462)),e=await t();if(!e)return;e.addEventListener("message",t=>{const{type:e,payload:r={}}=t.data;"master:bordcast-message"===e&&this.messageScheduler.execTask(r.type,r.payload)}),await e.active,await e.controlling,this.channel=e,this.initResolve.forEach(t=>{t()}),this.channel.postTask=this.channel.messageSW}catch(t){console.log("slave初始化错误：",t),this.initReject.forEach(t=>{t()})}},this.initBackground=()=>{this.channel={postTask:t=>new o.a((e,r)=>{chrome.runtime.sendMessage(t,t=>{chrome.runtime.lastError&&r(chrome.runtime.lastError),e(t)})})},chrome.runtime.onMessage.addListener(({type:t,payload:e,ignoreId:r})=>{"master:bordcast-message"===t?chrome.tabs.getCurrent(t=>{r!==t.id&&this.messageScheduler.execTask(e.type,e.payload)}):"slave:bordcast-message"===t&&this.messageScheduler.execTask(e.data.type,e.data.payload)})},a.a)throw new Error("it's not page");this.initChannel()}postTask(t,e,r){return new o.a(async(n,o)=>{let i=!1;await this.awaitChannel();const s=Object.assign(Object.assign(Object.assign({},a.d),{taskId:Object(a.c)()}),r);s.timeout&&setTimeout(()=>{i||n({error:"timeout"})},s.timeout);try{const r=await this.channel.postTask({type:t,payload:Object.assign({data:e},s)});i=!0,n(r)}catch(t){n({error:t})}})}listenMessage(t,e){this.messageScheduler.listenTask(t,e)}sendMessage(t,e=""){this.postTask("slave:bordcast-message",{type:t,payload:e})}}},function(t,e,r){var n=r(83);t.exports=n("navigator","userAgent")||""},function(t,e,r){var n=r(29),o=r(72),i=r(180),a=r(262),s=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,r){var n=r(201),o=r(202),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,r){var n=r(12),o=r(261),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(28),o=r(263);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports={}},function(t,e,r){var n={};n[r(33)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,r){var n,o=r(28),i=r(215),a=r(203),s=r(184),c=r(204),l=r(97),u=r(180),p=u("IE_PROTO"),h=function(){},d=function(t){return"<script>"+t+"<\/script>"},f=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;f=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=l("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete f.prototype[a[r]];return f()};s[p]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(h.prototype=o(t),r=new h,h.prototype=null,r[p]=t):r=f(),void 0===e?r:i(r,e)}},function(t,e){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,e,r){"use strict";r.r(e),r.d(e,"imgConfig",(function(){return c})),r.d(e,"getRandomWallpaper",(function(){return l})),r.d(e,"getBingWallpaper",(function(){return u})),r.d(e,"getWallpapers",(function(){return p})),r.d(e,"likeWallpaper",(function(){return h})),r.d(e,"collectionWallpaper",(function(){return d})),r.d(e,"addCustomColor",(function(){return f})),r.d(e,"setCustomColorItems",(function(){return g})),r.d(e,"getCustomColor",(function(){return m})),r.d(e,"removeCustomColor",(function(){return y})),r.d(e,"uploadWallpaper",(function(){return v})),r.d(e,"getWallpapersById",(function(){return b})),r.d(e,"createWallpaperLibrary",(function(){return w})),r.d(e,"getUserWallpaperLibrary",(function(){return x})),r.d(e,"hasWallpaperLibrary",(function(){return k})),r.d(e,"getLikedWallpaper",(function(){return A})),r.d(e,"getCollectionWallpaper",(function(){return S})),r.d(e,"getWallpaperLibraryItems",(function(){return _})),r.d(e,"getUserWallpaperLibraryItemsById",(function(){return T})),r.d(e,"removeWallpaperLibraryItem",(function(){return O})),r.d(e,"removeWallpaperLibrary",(function(){return j})),r.d(e,"addImagesToLibrary",(function(){return C})),r.d(e,"renameWallpaperLibrary",(function(){return M})),r.d(e,"getNextWallpaper",(function(){return E})),r.d(e,"convertURL",(function(){return R}));r(10),r(52);var n=r(0),o=r(4),i=r(23);const a=Math.floor(screen.width*window.devicePixelRatio),s=Math.floor(203*window.devicePixelRatio),c={smallWidth:s>2560?2560:s,normalWidth:a>2560?2560:a,format:i.c?"":"format/webp/"},l=async()=>{try{const t=await o.a.get(n.v+"/random-wallpaper",{_:(new Date).getTime()});if(!t.success)throw t;const{src:e,_id:r,source:i}=t.data[0],{url:a,rawUrl:s}=R(e.rawSrc);return{data:{url:a,rawUrl:s,id:r,source:i}}}catch(t){return{error:t}}},u=async()=>{try{const t=await o.a.get(n.w+"/get_bing_wallpaper",null,{_single:"getBingWallpaper"});if(t.error)throw t.error;const{data:e}=t,{content:r,url:i,rawUrl:a}=R(e.src.rawSrc);return e.thumbnail=r,e.url=i,e.rawUrl=a,t}catch(t){return{error:t}}},p=async t=>{const{source:e}=t;t.source="all"===e?"":e;try{const e=await o.a.get(n.v+"/get-wallpaper",t,{_single:"getWallpapers"}),{data:r}=e;return r.forEach(t=>{const{content:e,url:r,rawUrl:n}=R(t.src.rawSrc);t.thumbnail=e,t.url=r,t.rawUrl=n}),{result:e}}catch(t){return{error:t}}},h=async(t,e)=>{try{const r=await o.a.post(n.w+"/like_wallpaper",{id:t,state:e},{_auth:!0});if(0!==r.code)throw r;return r}catch(t){return{error:t}}},d=async(t,e)=>{try{const r=await o.a.post(n.w+"/collection_wallpaper",{id:t,state:e},{_auth:!0});if(0!==r.code)throw r;return r}catch(t){return{error:t}}},f=async t=>{try{const e=await o.a.post(n.w+"/add_custom_color",Object.assign(Object.assign({},t),{newVer:!0}),{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},g=async t=>{try{const e=await o.a.post(n.w+"/set_custom_color_items",t,{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},m=async()=>{try{const t=await o.a.get(n.w+"/get_custom_color",null,{_auth:!0});if(0!==t.code)throw t;return t}catch(t){return{error:t}}},y=async t=>{try{const e=await o.a.post(n.w+"/remove_custom_color",{id:t,newVer:!0},{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},v=async t=>{try{const e=await o.a.post(n.w+"/upload_wallpaper",t,{headers:{"Content-Type":"multipart/form-data"}});if(0!==e.code)throw e;return{data:e.data}}catch(t){return{error:t}}},b=async t=>{try{const e=await o.a.get(n.w+"/get_wallpapers_by_id",{id:t});if(0!==e.code)throw e;const{data:r}=e;return r.forEach(t=>{const{content:e,url:r,rawUrl:n}=R(t.src.rawSrc);t.thumbnail=e,t.url=r,t.rawUrl=n}),{data:r}}catch(t){return{error:t}}},w=async({libraryName:t,libraryId:e,wallpapers:r})=>{try{return await o.a.post(n.w+"/create_wallpaper_library",{libraryName:t,libraryId:e,wallpapers:r},{_auth:!0})}catch(t){return{error:t}}},x=async()=>await o.a.get(n.w+"/get_user_wallpaper_library",null,{_auth:!0}),k=async t=>{try{return await o.a.get(n.w+"/has_wallpaper_library",{libraryId:t},{_auth:!0,_proxy:!0})}catch(t){return{error:t}}},A=async()=>{try{return await o.a.get(n.w+"/get_liked_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},S=async()=>{try{return await o.a.get(n.w+"/get_collection_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},_=async t=>{const e=await o.a.get(n.w+"/get_user_wallpaper_library_items",{libraryId:t});e.data.map(t=>{const{content:e,url:r,rawUrl:n}=R(t.url);return t.content=e,t.url=r,t.rawUrl=n,t});const{data:r}=e;return e.data={items:r,count:r.length},e.data},T=async t=>{try{const e=await o.a.get(n.w+"/get_user_wallpaper_library_items_by_id",{libraryItemsId:t}),{data:r}=e;return e.data={items:r,count:r.length},e.data}catch(t){return{error:t}}},O=async(t,e,r)=>{try{return await o.a.post(n.w+"/remove_wallpaper_library_item",{libraryId:t,libraryItemId:e,ext:r},{_auth:!0})}catch(t){return{error:t}}},j=async t=>{try{return await o.a.post(n.w+"/remove_wallpaper_library",{libraryId:t},{_auth:!0})}catch(t){return{error:t}}},C=async(t,e)=>{try{return await o.a.post(n.w+"/add_images_to_library",{libraryId:t,wallpapers:e},{_auth:!0})}catch(t){return{error:t}}},M=async(t,e)=>{try{return await o.a.post(n.w+"/rename_wallpaper_library",{libraryId:t,libraryName:e},{_auth:!0})}catch(t){return{error:t}}},E=async(t,e,r="library")=>{const i={source:t,type:r};e&&(i._id=e);const a=await o.a.get(n.w+"/get_next_wallpaper",i,{_single:"getNextWallpaper"});if(0!==a.code)throw new Error;const{data:s}=a,{content:c,url:l,rawUrl:u}=R(s.rawUrl);return s.thumbnail=c,s.url=l,s.rawUrl=u,a},R=t=>({rawUrl:t,url:`${t}?imageView2/2/w/${c.normalWidth}/${c.format}interlace/1`,content:`${t}?imageView2/2/w/${c.smallWidth}/${c.format}interlace/1`})},function(t,e,r){"use strict";var n=r(82),o=r(279),i=r(100),a=r(103),s=r(213),c=a.set,l=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},,,,function(t,e,r){var n=r(28),o=r(49),i=r(33)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},function(t,e,r){var n=r(183),o=r(68),i=function(t){return function(e,r){var i,a,s=String(o(e)),c=n(r),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){"use strict";var n=r(214).IteratorPrototype,o=r(186),i=r(47),a=r(119),s=r(100),c=function(){return this};t.exports=function(t,e,r){var l=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,l,!1,!0),s[l]=c,t}},function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"h",(function(){return c})),r.d(e,"g",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return p})),r.d(e,"f",(function(){return h}));var n=r(0);const o=.5;function i(t){return`https://chrome.google.com/webstore/detail/infinity-new-tab-producti/${t}/reviews?utm_source=infinity-rate`}const a="https://addons.mozilla.org/"+n.B.lang+"/firefox/addon/infinity-new-tab-firefox/";function s(t){return"https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-produc/"+t}const c="privacy_data_uninstall_title",l="privacy_data_uninstall_confirm",u=!0,p=()=>{chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from="+n.c)},h="https://infinityicon.infinitynewtab.com/assets/logo-basic.png"},,,,function(t,e,r){"use strict";var n=r(27),o=r(179),i=r(182),a=r(186),s=r(39),c=r(47),l=r(170),u=function(t,e){var r=this;if(!(r instanceof u))return new u(t,e);i&&(r=i(new Error(void 0),o(r))),void 0!==e&&s(r,"message",String(e));var n=[];return l(t,n.push,{that:n}),s(r,"errors",n),r};u.prototype=a(Error.prototype,{constructor:c(5,u),message:c(5,""),name:c(5,"AggregateError")}),n({global:!0},{AggregateError:u})},function(t,e,r){var n=r(96),o=r(181);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(83);t.exports=n("document","documentElement")},function(t,e,r){var n=r(175),o=r(18);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(t,e,r){var n=r(12);t.exports=n.Promise},function(t,e,r){var n=r(181),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n,o,i,a=r(12),s=r(18),c=r(73),l=r(204),u=r(97),p=r(209),h=r(128),d=a.location,f=a.setImmediate,g=a.clearImmediate,m=a.process,y=a.MessageChannel,v=a.Dispatch,b=0,w={},x=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},k=function(t){return function(){x(t)}},A=function(t){x(t.data)},S=function(t){a.postMessage(t+"",d.protocol+"//"+d.host)};f&&g||(f=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},n(b),b},g=function(t){delete w[t]},h?n=function(t){m.nextTick(k(t))}:v&&v.now?n=function(t){v.now(k(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=A,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&d&&"file:"!==d.protocol&&!s(S)?(n=S,a.addEventListener("message",A,!1)):n="onreadystatechange"in u("script")?function(t){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),x(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:f,clear:g}},function(t,e,r){var n=r(178);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(n)},function(t,e,r){var n=r(28),o=r(30),i=r(118);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){"use strict";var n=r(27),o=r(49),i=r(118),a=r(171),s=r(170);n({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=i.f(e),n=r.resolve,c=r.reject,l=a((function(){var r=o(e.resolve),i=[],a=0,c=1;s(t,(function(t){var o=a++,s=!1;i.push(void 0),c++,r.call(e,t).then((function(t){s||(s=!0,i[o]={status:"fulfilled",value:t},--c||n(i))}),(function(t){s||(s=!0,i[o]={status:"rejected",reason:t},--c||n(i))}))})),--c||n(i)}));return l.error&&c(l.value),r.promise}})},function(t,e,r){"use strict";var n=r(27),o=r(49),i=r(83),a=r(118),s=r(171),c=r(170);n({target:"Promise",stat:!0},{any:function(t){var e=this,r=a.f(e),n=r.resolve,l=r.reject,u=s((function(){var r=o(e.resolve),a=[],s=0,u=1,p=!1;c(t,(function(t){var o=s++,c=!1;a.push(void 0),u++,r.call(e,t).then((function(t){c||p||(p=!0,n(t))}),(function(t){c||p||(c=!0,a[o]=t,--u||l(new(i("AggregateError"))(a,"No one promise resolved")))}))})),--u||l(new(i("AggregateError"))(a,"No one promise resolved"))}));return u.error&&l(u.value),r.promise}})},function(t,e,r){"use strict";var n=r(27),o=r(195),i=r(179),a=r(182),s=r(119),c=r(39),l=r(101),u=r(33),p=r(96),h=r(100),d=r(214),f=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=u("iterator"),y=function(){return this};t.exports=function(t,e,r,u,d,v,b){o(r,e,u);var w,x,k,A=function(t){if(t===d&&j)return j;if(!g&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},S=e+" Iterator",_=!1,T=t.prototype,O=T[m]||T["@@iterator"]||d&&T[d],j=!g&&O||A(d),C="Array"==e&&T.entries||O;if(C&&(w=i(C.call(new t)),f!==Object.prototype&&w.next&&(p||i(w)===f||(a?a(w,f):"function"!=typeof w[m]&&c(w,m,y)),s(w,S,!0,!0),p&&(h[S]=y))),"values"==d&&O&&"values"!==O.name&&(_=!0,j=function(){return O.call(this)}),p&&!b||T[m]===j||c(T,m,j),h[e]=j,d)if(x={values:A("values"),keys:v?j:A("keys"),entries:A("entries")},b)for(k in x)(g||_||!(k in T))&&l(T,k,x[k]);else n({target:e,proto:!0,forced:g||_},x);return x}},function(t,e,r){"use strict";var n,o,i,a=r(18),s=r(179),c=r(39),l=r(29),u=r(33),p=r(96),h=u("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(n=o):d=!0);var f=null==n||a((function(){var t={};return n[h].call(t)!==t}));f&&(n={}),p&&!f||l(n,h)||c(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},function(t,e,r){var n=r(25),o=r(71),i=r(28),a=r(216);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),s=n.length,c=0;s>c;)o.f(t,r=n[c++],e[r]);return t}},function(t,e,r){var n=r(264),o=r(203);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(33),o=r(100),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,r){var n=r(28);t.exports=function(t){var e=t.return;if(void 0!==e)return n(e.call(t)).value}},function(t,e,r){var n=r(101);t.exports=function(t,e,r){for(var o in e)r&&r.unsafe&&t[o]?t[o]=e[o]:n(t,o,e[o],r);return t}},function(t,e,r){"use strict";var n=r(194).charAt,o=r(103),i=r(213),a=o.set,s=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,r){"use strict";r(189);var n=r(27),o=r(83),i=r(222),a=r(101),s=r(219),c=r(119),l=r(195),u=r(103),p=r(187),h=r(29),d=r(73),f=r(124),g=r(28),m=r(30),y=r(186),v=r(47),b=r(296),w=r(172),x=r(33),k=o("fetch"),A=o("Headers"),S=x("iterator"),_=u.set,T=u.getterFor("URLSearchParams"),O=u.getterFor("URLSearchParamsIterator"),j=/\+/g,C=Array(4),M=function(t){return C[t-1]||(C[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},E=function(t){try{return decodeURIComponent(t)}catch(e){return t}},R=function(t){var e=t.replace(j," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(M(r--),E);return e}},I=/[!'()~]|%20/g,L={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},B=function(t){return L[t]},D=function(t){return encodeURIComponent(t).replace(I,B)},P=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:R(n.shift()),value:R(n.join("="))}))},U=function(t){this.entries.length=0,P(this.entries,t)},$=function(t,e){if(t<e)throw TypeError("Not enough arguments")},z=l((function(t,e){_(this,{type:"URLSearchParamsIterator",iterator:b(T(t).entries),kind:e})}),"Iterator",(function(){var t=O(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r})),W=function(){p(this,W,"URLSearchParams");var t,e,r,n,o,i,a,s,c,l=arguments.length>0?arguments[0]:void 0,u=this,d=[];if(_(u,{type:"URLSearchParams",entries:d,updateURL:function(){},updateSearchParams:U}),void 0!==l)if(m(l))if("function"==typeof(t=w(l)))for(r=(e=t.call(l)).next;!(n=r.call(e)).done;){if((a=(i=(o=b(g(n.value))).next).call(o)).done||(s=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");d.push({key:a.value+"",value:s.value+""})}else for(c in l)h(l,c)&&d.push({key:c,value:l[c]+""});else P(d,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},N=W.prototype;s(N,{append:function(t,e){$(arguments.length,2);var r=T(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},delete:function(t){$(arguments.length,1);for(var e=T(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){$(arguments.length,1);for(var e=T(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){$(arguments.length,1);for(var e=T(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){$(arguments.length,1);for(var e=T(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){$(arguments.length,1);for(var r,n=T(this),o=n.entries,i=!1,a=t+"",s=e+"",c=0;c<o.length;c++)(r=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,r.value=s));i||o.push({key:a,value:s}),n.updateURL()},sort:function(){var t,e,r,n=T(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=T(this).entries,n=d(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new z(this,"keys")},values:function(){return new z(this,"values")},entries:function(){return new z(this,"entries")}},{enumerable:!0}),a(N,S,N.entries),a(N,"toString",(function(){for(var t,e=T(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(D(t.key)+"="+D(t.value));return r.join("&")}),{enumerable:!0}),c(W,"URLSearchParams"),n({global:!0,forced:!i},{URLSearchParams:W}),i||"function"!=typeof k||"function"!=typeof A||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,r,n,o=[t];return arguments.length>1&&(m(e=arguments[1])&&(r=e.body,"URLSearchParams"===f(r)&&((n=e.headers?new A(e.headers):new A).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=y(e,{body:v(0,String(r)),headers:v(0,n)}))),o.push(e)),k.apply(this,o)}}),t.exports={URLSearchParams:W,getState:T}},function(t,e,r){var n=r(18),o=r(33),i=r(96),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),i&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},function(t,e,r){"use strict";var n=r(298),o=r(3),i=r(6),a=r(37),s=r(45),c=r(300),l=r(301),u=r(302),p=r(77),h=r(303),d=n.aTypedArray,f=n.exportTypedArrayMethod,g=o.Uint16Array,m=g&&g.prototype.sort,y=!!m&&!i((function(){var t=new g(2);t.sort(null),t.sort({})})),v=!!m&&!i((function(){if(p)return p<74;if(l)return l<67;if(u)return!0;if(h)return h<602;var t,e,r=new g(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(r.sort((function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));f("sort",(function(t){if(void 0!==t&&a(t),v)return m.call(this,t);d(this);var e,r=s(this.length),n=Array(r);for(e=0;e<r;e++)n[e]=this[e];for(n=c(this,function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t)),e=0;e<r;e++)this[e]=n[e];return this}),!v||y)},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return d}));r(285),r(17),r(44),r(306);var n=r(227),o=r.n(n),i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,s=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function c(t){return(t||"").toString().replace(s,"")}var l=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],u={hash:1,query:1};function p(e){var r,n=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},o={},a=typeof(e=e||n);if("blob:"===e.protocol)o=new d(unescape(e.pathname),{});else if("string"===a)for(r in o=new d(e,{}),u)delete o[r];else if("object"===a){for(r in e)r in u||(o[r]=e[r]);void 0===o.slashes&&(o.slashes=i.test(e.href))}return o}function h(t){t=c(t);var e=a.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function d(t,e){t=c(t);var r,n,i,a,s,u,d=l.slice(),f=this,g=0;for(e=p(e),r=!(n=h(t||"")).protocol&&!n.slashes,f.slashes=n.slashes||r&&e.slashes,f.protocol=n.protocol||e.protocol||"",t=n.rest,n.slashes||(d[3]=[/(.*)/,"pathname"]);g<d.length;g++)"function"!=typeof(a=d[g])?(i=a[0],u=a[1],i!=i?f[u]=t:"string"==typeof i?~(s=t.indexOf(i))&&("number"==typeof a[2]?(f[u]=t.slice(0,s),t=t.slice(s+a[2])):(f[u]=t.slice(s),t=t.slice(0,s))):(s=i.exec(t))&&(f[u]=s[1],t=t.slice(0,s.index)),f[u]=f[u]||r&&a[3]&&e[u]||"",a[4]&&(f[u]=f[u].toLowerCase())):t=a(t);r&&e.slashes&&"/"!==f.pathname.charAt(0)&&(""!==f.pathname||""!==e.pathname)&&(f.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),n=r.length,o=r[n-1],i=!1,a=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),a++):a&&(0===n&&(i=!0),r.splice(n,1),a--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(f.pathname,e.pathname)),o()(f.port,f.protocol)||(f.host=f.hostname,f.port=""),f.username=f.password="",f.auth&&(a=f.auth.split(":"),f.username=a[0]||"",f.password=a[1]||""),f.origin=f.protocol&&f.host&&"file:"!==f.protocol?f.protocol+"//"+f.host:"null",f.href=f.toString()}d.prototype={toString:function(){var t,e=this,r=e.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var n=r+(e.slashes?"//":"");return e.username&&(n+=e.username,e.password&&(n+=":"+e.password),n+="@"),n+=e.host+e.pathname,(t=e.query)&&(n+="?"!==t.charAt(0)?"?"+t:t),e.hash&&(n+=e.hash),n}},d.extractProtocol=h,d.location=p,d.trimLeft=c}).call(this,r(51))},function(t,e,r){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},,,,,,,,,,,function(t,e,r){r(189);var n=r(280),o=r(12),i=r(124),a=r(39),s=r(100),c=r(33)("toStringTag");for(var l in n){var u=o[l],p=u&&u.prototype;p&&i(p)!==c&&a(p,c,l),s[l]=s.Array}},function(t,e){var r=1;function n(t){var e=[];for(var r in t)e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}t.exports=function(t){return new Promise((function(e,o){var i=document.createElement("script"),a=t.url;if(t.params){var s=n(t.params);s&&(a+=(a.indexOf("?")>=0?"&":"?")+s)}function c(){i&&(i.onload=i.onreadystatechange=i.onerror=null,i.parentNode&&i.parentNode.removeChild(i),i=null)}i.async=!0;var l="axiosJsonpCallback"+r++,u=window[l],p=!1;window[l]=function(t){(window[l]=u,p)||e({data:t,status:200})};var h={_:(new Date).getTime()};h[t.callbackParamName||"callback"]=l,a+=(a.indexOf("?")>=0?"&":"?")+n(h),i.onload=i.onreadystatechange=function(){i.readyState&&!/loaded|complete/.test(i.readyState)||c()},i.onerror=function(){c(),o(new Error("Network Error"))},t.cancelToken&&t.cancelToken.promise.then((function(t){i&&(p=!0,o(t))})),i.src=a,document.head.appendChild(i)}))}},,,function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(8);const o=Symbol("LitMobxRenderReaction"),i=Symbol("LitMobxRequestUpdate");var a=r(1);class s extends(function(t){var e,r;return r=class extends t{constructor(){super(...arguments),this[e]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const t=this.constructor.name||this.nodeName;this[o]=new n.a(t+".update()",this[i]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[o]&&(this[o].dispose(),this[o]=void 0)}update(t){this[o]?this[o].track(super.update.bind(this,t)):super.update(t)}},e=i,r}(a.a)){}},,function(t,e,r){"use strict";var n=r(18);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){t.exports=r(349)},function(t,e,r){var n=r(49),o=r(72),i=r(98),a=r(127),s=function(t){return function(e,r,s,c){n(r);var l=o(e),u=i(l),p=a(l.length),h=t?p-1:0,d=t?-1:1;if(s<2)for(;;){if(h in u){c=u[h],h+=d;break}if(h+=d,t?h<0:p<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:p>h;h+=d)h in u&&(c=r(c,u[h],h,l));return c}};t.exports={left:s(!1),right:s(!0)}},,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"uploadFile",(function(){return s}));r(10);var n=r(0),o=r(4);const i=["infinity-notes-img","custom-wallpaper-library"],a={},s=async(t,e,r)=>{let s;try{if(a[r]&&a[r].endTime>Date.now())s=a[r];else{let t=null;if(t=i.includes(r)?await o.a.get(n.w+"/upload/public_private_token",{type:r},{_auth:!0}):await o.a.get(n.w+"/upload/token",{type:r}),0!==t.code||!t.data.token)return{error:t};s=t.data,s.endTime=Date.now()+1e3*(s.expires-600),a[r]=s}const{token:c,prefix:l}=s,u=new FormData;u.append("token",c),u.append("key",l+e),u.append("file",t,e);const{key:p,url:h}=await o.a.post(s.host,u,{timeout:18e4,headers:{"Content-Type":"multipart/form-data"}});return{data:{url:h,key:p}}}catch(t){return{error:t}}}},function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(13),r(16);class n{constructor(){this._events=new Map}listenTask(t,e){if("function"!=typeof e)return;this._events.has(t)||this._events.set(t,new Set);this._events.get(t).add(e)}execTask(t,e,...r){if(this._events.has(t)){const n=this._events.get(t);for(const t of n)t(e,...r)}}}},function(t,e,r){"use strict";var n=r(255).forEach,o=r(258)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(74),o=r(106),i=r(50),a=r(45),s=r(256),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,p=6==t,h=7==t,d=5==t||p;return function(f,g,m,y){for(var v,b,w=i(f),x=o(w),k=n(g,m,3),A=a(x.length),S=0,_=y||s,T=e?_(f,A):r||h?_(f,0):void 0;A>S;S++)if((d||S in x)&&(b=k(v=x[S],S,w),t))if(e)T[S]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:c.call(T,v)}else switch(t){case 4:return!1;case 7:c.call(T,v)}return p?-1:l||u?u:T}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},function(t,e,r){var n=r(15),o=r(257),i=r(5)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){var n=r(34);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){"use strict";var n=r(6);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){var n=r(260);r(281),r(282),r(283),r(284),t.exports=n},function(t,e,r){r(200),r(268),r(269),r(211),r(212),r(278),r(220),r(238);var n=r(70);t.exports=n.Promise},function(t,e,r){var n=r(12),o=r(39);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(18);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(30);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){var n=r(29),o=r(82),i=r(265).indexOf,a=r(184);t.exports=function(t,e){var r,s=o(t),c=0,l=[];for(r in s)!n(a,r)&&n(s,r)&&l.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(l,r)||l.push(r));return l}},function(t,e,r){var n=r(82),o=r(127),i=r(266),a=function(t){return function(e,r,a){var s,c=n(e),l=o(c.length),u=i(a,l);if(t&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(183),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(205);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e){},function(t,e,r){"use strict";var n,o,i,a,s=r(27),c=r(96),l=r(12),u=r(83),p=r(206),h=r(101),d=r(219),f=r(182),g=r(119),m=r(271),y=r(30),v=r(49),b=r(187),w=r(207),x=r(170),k=r(272),A=r(193),S=r(208).set,_=r(273),T=r(210),O=r(275),j=r(118),C=r(171),M=r(103),E=r(109),R=r(33),I=r(277),L=r(128),B=r(175),D=R("species"),P="Promise",U=M.get,$=M.set,z=M.getterFor(P),W=p&&p.prototype,N=p,q=W,F=l.TypeError,H=l.document,V=l.process,Y=j.f,X=Y,G=!!(H&&H.createEvent&&l.dispatchEvent),J="function"==typeof PromiseRejectionEvent,K=!1,Z=E(P,(function(){var t=w(N),e=t!==String(N);if(!e&&66===B)return!0;if(c&&!q.finally)return!0;if(B>=51&&/native code/.test(t))return!1;var r=new N((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[D]=n,!(K=r.then((function(){}))instanceof n)||!e&&I&&!J})),Q=Z||!k((function(t){N.all(t).catch((function(){}))})),tt=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},et=function(t,e){if(!t.notified){t.notified=!0;var r=t.reactions;_((function(){for(var n=t.value,o=1==t.state,i=0;r.length>i;){var a,s,c,l=r[i++],u=o?l.ok:l.fail,p=l.resolve,h=l.reject,d=l.domain;try{u?(o||(2===t.rejection&&it(t),t.rejection=1),!0===u?a=n:(d&&d.enter(),a=u(n),d&&(d.exit(),c=!0)),a===l.promise?h(F("Promise-chain cycle")):(s=tt(a))?s.call(a,p,h):p(a)):h(n)}catch(t){d&&!c&&d.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&nt(t)}))}},rt=function(t,e,r){var n,o;G?((n=H.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),l.dispatchEvent(n)):n={promise:e,reason:r},!J&&(o=l["on"+t])?o(n):"unhandledrejection"===t&&O("Unhandled promise rejection",r)},nt=function(t){S.call(l,(function(){var e,r=t.facade,n=t.value;if(ot(t)&&(e=C((function(){L?V.emit("unhandledRejection",n,r):rt("unhandledrejection",r,n)})),t.rejection=L||ot(t)?2:1,e.error))throw e.value}))},ot=function(t){return 1!==t.rejection&&!t.parent},it=function(t){S.call(l,(function(){var e=t.facade;L?V.emit("rejectionHandled",e):rt("rejectionhandled",e,t.value)}))},at=function(t,e,r){return function(n){t(e,n,r)}},st=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,et(t,!0))},ct=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw F("Promise can't be resolved itself");var n=tt(e);n?_((function(){var r={done:!1};try{n.call(e,at(ct,r,t),at(st,r,t))}catch(e){st(r,e,t)}})):(t.value=e,t.state=1,et(t,!1))}catch(e){st({done:!1},e,t)}}};if(Z&&(q=(N=function(t){b(this,N,P),v(t),n.call(this);var e=U(this);try{t(at(ct,e),at(st,e))}catch(t){st(e,t)}}).prototype,(n=function(t){$(this,{type:P,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q,{then:function(t,e){var r=z(this),n=Y(A(this,N));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=L?V.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&et(r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=U(t);this.promise=t,this.resolve=at(ct,e),this.reject=at(st,e)},j.f=Y=function(t){return t===N||t===i?new o(t):X(t)},!c&&"function"==typeof p&&W!==Object.prototype)){a=W.then,K||(h(W,"then",(function(t,e){var r=this;return new N((function(t,e){a.call(r,t,e)})).then(t,e)}),{unsafe:!0}),h(W,"catch",q.catch,{unsafe:!0}));try{delete W.constructor}catch(t){}f&&f(W,q)}s({global:!0,wrap:!0,forced:Z},{Promise:N}),g(N,P,!1,!0),m(P),i=u(P),s({target:P,stat:!0,forced:Z},{reject:function(t){var e=Y(this);return e.reject.call(void 0,t),e.promise}}),s({target:P,stat:!0,forced:c||Z},{resolve:function(t){return T(c&&this===i?N:this,t)}}),s({target:P,stat:!0,forced:Q},{all:function(t){var e=this,r=Y(e),n=r.resolve,o=r.reject,i=C((function(){var r=v(e.resolve),i=[],a=0,s=1;x(t,(function(t){var c=a++,l=!1;i.push(void 0),s++,r.call(e,t).then((function(t){l||(l=!0,i[c]=t,--s||n(i))}),o)})),--s||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=Y(e),n=r.reject,o=C((function(){var o=v(e.resolve);x(t,(function(t){o.call(e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},function(t,e,r){"use strict";var n=r(185),o=r(124);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,r){"use strict";var n=r(83),o=r(71),i=r(33),a=r(25),s=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[s]&&r(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(33)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){var n,o,i,a,s,c,l,u,p=r(12),h=r(108).f,d=r(208).set,f=r(209),g=r(274),m=r(128),y=p.MutationObserver||p.WebKitMutationObserver,v=p.document,b=p.process,w=p.Promise,x=h(p,"queueMicrotask"),k=x&&x.value;k||(n=function(){var t,e;for(m&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},f||m||g||!y||!v?w&&w.resolve?((l=w.resolve(void 0)).constructor=w,u=l.then,a=function(){u.call(l,n)}):a=m?function(){b.nextTick(n)}:function(){d.call(p,n)}:(s=!0,c=v.createTextNode(""),new y(n).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),t.exports=k||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},function(t,e,r){var n=r(178);t.exports=/web0s(?!.*chrome)/i.test(n)},function(t,e,r){var n=r(12);t.exports=function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}},function(t,e,r){var n=r(12),o=r(207),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports="object"==typeof window},function(t,e,r){"use strict";var n=r(27),o=r(96),i=r(206),a=r(18),s=r(83),c=r(193),l=r(210),u=r(101);if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,s("Promise")),r="function"==typeof t;return this.then(r?function(r){return l(e,t()).then((function(){return r}))}:t,r?function(r){return l(e,t()).then((function(){throw r}))}:t)}}),!o&&"function"==typeof i){var p=s("Promise").prototype.finally;i.prototype.finally!==p&&u(i.prototype,"finally",p,{unsafe:!0})}},function(t,e){t.exports=function(){}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){r(200)},function(t,e,r){r(211)},function(t,e,r){"use strict";var n=r(27),o=r(118),i=r(171);n({target:"Promise",stat:!0},{try:function(t){var e=o.f(this),r=i(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}})},function(t,e,r){r(212)},function(t,e,r){var n=r(19),o=r(3),i=r(76),a=r(304),s=r(14),c=r(20).f,l=r(110).f,u=r(305),p=r(113),h=r(114),d=r(24),f=r(6),g=r(11),m=r(36).enforce,y=r(111),v=r(5),b=r(115),w=r(116),x=v("match"),k=o.RegExp,A=k.prototype,S=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,_=/a/g,T=/a/g,O=new k(_)!==_,j=h.UNSUPPORTED_Y,C=n&&(!O||j||b||w||f((function(){return T[x]=!1,k(_)!=_||k(T)==T||"/a/i"!=k(_,"i")})));if(i("RegExp",C)){for(var M=function(t,e){var r,n,o,i,c,l,h=this instanceof M,d=u(t),f=void 0===e,y=[],v=t;if(!h&&d&&f&&t.constructor===M)return t;if((d||t instanceof M)&&(t=t.source,f&&(e="flags"in v?v.flags:p.call(v))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),v=t,b&&"dotAll"in _&&(n=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),r=e,j&&"sticky"in _&&(o=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),w&&(t=(i=function(t){for(var e,r=t.length,n=0,o="",i=[],a={},s=!1,c=!1,l=0,u="";n<=r;n++){if("\\"===(e=t.charAt(n)))e+=t.charAt(++n);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:S.test(t.slice(n+1))&&(n+=2,c=!0),o+=e,l++;continue;case">"===e&&c:if(""===u||g(a,u))throw new SyntaxError("Invalid capture group name");a[u]=!0,i.push([u,l]),c=!1,u="";continue}c?u+=e:o+=e}return[o,i]}(t))[0],y=i[1]),c=a(k(t,e),h?this:A,M),(n||o||y.length)&&(l=m(c),n&&(l.dotAll=!0,l.raw=M(function(t){for(var e,r=t.length,n=0,o="",i=!1;n<=r;n++)"\\"!==(e=t.charAt(n))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+t.charAt(++n);return o}(t),r)),o&&(l.sticky=!0),y.length&&(l.groups=y)),t!==v)try{s(c,"source",""===v?"(?:)":v)}catch(t){}return c},E=function(t){t in M||c(M,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},R=l(k),I=0;R.length>I;)E(R[I++]);A.constructor=M,M.prototype=A,d(o,"RegExp",M)}y("RegExp")},function(t,e,r){var n=r(287);t.exports=n},function(t,e,r){var n=r(288);t.exports=n},function(t,e,r){r(289),r(297),r(221);var n=r(70);t.exports=n.URL},function(t,e,r){"use strict";r(220);var n,o=r(27),i=r(25),a=r(222),s=r(12),c=r(215),l=r(101),u=r(187),p=r(29),h=r(290),d=r(292),f=r(194).codeAt,g=r(295),m=r(119),y=r(221),v=r(103),b=s.URL,w=y.URLSearchParams,x=y.getState,k=v.set,A=v.getterFor("URL"),S=Math.floor,_=Math.pow,T=/[A-Za-z]/,O=/[\d+-.A-Za-z]/,j=/\d/,C=/^0x/i,M=/^[0-7]+$/,E=/^\d+$/,R=/^[\dA-Fa-f]+$/,I=/[\0\t\n\r #%/:<>?@[\\\]^|]/,L=/[\0\t\n\r #/:<>?@[\\\]^|]/,B=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\t\n\r]/g,P=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return"Invalid host";if(!(r=$(e.slice(1,-1))))return"Invalid host";t.host=r}else if(Y(t)){if(e=g(e),I.test(e))return"Invalid host";if(null===(r=U(e)))return"Invalid host";t.host=r}else{if(L.test(e))return"Invalid host";for(r="",n=d(e),o=0;o<n.length;o++)r+=H(n[o],W);t.host=r}},U=function(t){var e,r,n,o,i,a,s,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(e=c.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=c[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=C.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?E:8==i?M:R).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=_(256,5-e))return null}else if(a>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*_(256,3-n);return s},$=function(t){var e,r,n,o,i,a,s,c=[0,0,0,0,0,0,0,0],l=0,u=null,p=0,h=function(){return t.charAt(p)};if(":"==h()){if(":"!=t.charAt(1))return;p+=2,u=++l}for(;h();){if(8==l)return;if(":"!=h()){for(e=r=0;r<4&&R.test(h());)e=16*e+parseInt(h(),16),p++,r++;if("."==h()){if(0==r)return;if(p-=r,l>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;p++}if(!j.test(h()))return;for(;j.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;p++}c[l]=256*c[l]+o,2!=++n&&4!=n||l++}if(4!=n)return;break}if(":"==h()){if(p++,!h())return}else if(h())return;c[l++]=e}else{if(null!==u)return;p++,u=++l}}if(null!==u)for(a=l-u,l=7;0!=l&&a>0;)s=c[l],c[l--]=c[u+a-1],c[u+--a]=s;else if(8!=l)return;return c},z=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=S(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},W={},N=h({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),q=h({},N,{"#":1,"?":1,"{":1,"}":1}),F=h({},q,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),H=function(t,e){var r=f(t,0);return r>32&&r<127&&!p(e,t)?t:encodeURIComponent(t)},V={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Y=function(t){return p(V,t.scheme)},X=function(t){return""!=t.username||""!=t.password},G=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},J=function(t,e){var r;return 2==t.length&&T.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},K=function(t){var e;return t.length>1&&J(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},Z=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&J(e[0],!0)||e.pop()},Q=function(t){return"."===t||"%2e"===t.toLowerCase()},tt={},et={},rt={},nt={},ot={},it={},at={},st={},ct={},lt={},ut={},pt={},ht={},dt={},ft={},gt={},mt={},yt={},vt={},bt={},wt={},xt=function(t,e,r,o){var i,a,s,c,l,u=r||tt,h=0,f="",g=!1,m=!1,y=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(B,"")),e=e.replace(D,""),i=d(e);h<=i.length;){switch(a=i[h],u){case tt:if(!a||!T.test(a)){if(r)return"Invalid scheme";u=rt;continue}f+=a.toLowerCase(),u=et;break;case et:if(a&&(O.test(a)||"+"==a||"-"==a||"."==a))f+=a.toLowerCase();else{if(":"!=a){if(r)return"Invalid scheme";f="",u=rt,h=0;continue}if(r&&(Y(t)!=p(V,f)||"file"==f&&(X(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=f,r)return void(Y(t)&&V[t.scheme]==t.port&&(t.port=null));f="","file"==t.scheme?u=dt:Y(t)&&o&&o.scheme==t.scheme?u=nt:Y(t)?u=st:"/"==i[h+1]?(u=ot,h++):(t.cannotBeABaseURL=!0,t.path.push(""),u=vt)}break;case rt:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,u=wt;break}u="file"==o.scheme?dt:it;continue;case nt:if("/"!=a||"/"!=i[h+1]){u=it;continue}u=ct,h++;break;case ot:if("/"==a){u=lt;break}u=yt;continue;case it:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&Y(t))u=at;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",u=bt;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),u=yt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",u=wt}break;case at:if(!Y(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,u=yt;continue}u=lt}else u=ct;break;case st:if(u=ct,"/"!=a||"/"!=f.charAt(h+1))continue;h++;break;case ct:if("/"!=a&&"\\"!=a){u=lt;continue}break;case lt:if("@"==a){g&&(f="%40"+f),g=!0,s=d(f);for(var v=0;v<s.length;v++){var b=s[v];if(":"!=b||y){var w=H(b,F);y?t.password+=w:t.username+=w}else y=!0}f=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&Y(t)){if(g&&""==f)return"Invalid authority";h-=d(f).length+1,f="",u=ut}else f+=a;break;case ut:case pt:if(r&&"file"==t.scheme){u=gt;continue}if(":"!=a||m){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&Y(t)){if(Y(t)&&""==f)return"Invalid host";if(r&&""==f&&(X(t)||null!==t.port))return;if(c=P(t,f))return c;if(f="",u=mt,r)return;continue}"["==a?m=!0:"]"==a&&(m=!1),f+=a}else{if(""==f)return"Invalid host";if(c=P(t,f))return c;if(f="",u=ht,r==pt)return}break;case ht:if(!j.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&Y(t)||r){if(""!=f){var x=parseInt(f,10);if(x>65535)return"Invalid port";t.port=Y(t)&&x===V[t.scheme]?null:x,f=""}if(r)return;u=mt;continue}return"Invalid port"}f+=a;break;case dt:if(t.scheme="file","/"==a||"\\"==a)u=ft;else{if(!o||"file"!=o.scheme){u=yt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",u=bt;else{if("#"!=a){K(i.slice(h).join(""))||(t.host=o.host,t.path=o.path.slice(),Z(t)),u=yt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",u=wt}}break;case ft:if("/"==a||"\\"==a){u=gt;break}o&&"file"==o.scheme&&!K(i.slice(h).join(""))&&(J(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),u=yt;continue;case gt:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!r&&J(f))u=yt;else if(""==f){if(t.host="",r)return;u=mt}else{if(c=P(t,f))return c;if("localhost"==t.host&&(t.host=""),r)return;f="",u=mt}continue}f+=a;break;case mt:if(Y(t)){if(u=yt,"/"!=a&&"\\"!=a)continue}else if(r||"?"!=a)if(r||"#"!=a){if(a!=n&&(u=yt,"/"!=a))continue}else t.fragment="",u=wt;else t.query="",u=bt;break;case yt:if(a==n||"/"==a||"\\"==a&&Y(t)||!r&&("?"==a||"#"==a)){if(".."===(l=(l=f).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Z(t),"/"==a||"\\"==a&&Y(t)||t.path.push("")):Q(f)?"/"==a||"\\"==a&&Y(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&J(f)&&(t.host&&(t.host=""),f=f.charAt(0)+":"),t.path.push(f)),f="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",u=bt):"#"==a&&(t.fragment="",u=wt)}else f+=H(a,q);break;case vt:"?"==a?(t.query="",u=bt):"#"==a?(t.fragment="",u=wt):a!=n&&(t.path[0]+=H(a,W));break;case bt:r||"#"!=a?a!=n&&("'"==a&&Y(t)?t.query+="%27":t.query+="#"==a?"%23":H(a,W)):(t.fragment="",u=wt);break;case wt:a!=n&&(t.fragment+=H(a,N))}h++}},kt=function(t){var e,r,n=u(this,kt,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),s=k(n,{type:"URL"});if(void 0!==o)if(o instanceof kt)e=A(o);else if(r=xt(e={},String(o)))throw TypeError(r);if(r=xt(s,a,null,e))throw TypeError(r);var c=s.searchParams=new w,l=x(c);l.updateSearchParams(s.query),l.updateURL=function(){s.query=String(c)||null},i||(n.href=St.call(n),n.origin=_t.call(n),n.protocol=Tt.call(n),n.username=Ot.call(n),n.password=jt.call(n),n.host=Ct.call(n),n.hostname=Mt.call(n),n.port=Et.call(n),n.pathname=Rt.call(n),n.search=It.call(n),n.searchParams=Lt.call(n),n.hash=Bt.call(n))},At=kt.prototype,St=function(){var t=A(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,s=t.query,c=t.fragment,l=e+":";return null!==o?(l+="//",X(t)&&(l+=r+(n?":"+n:"")+"@"),l+=z(o),null!==i&&(l+=":"+i)):"file"==e&&(l+="//"),l+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==s&&(l+="?"+s),null!==c&&(l+="#"+c),l},_t=function(){var t=A(this),e=t.scheme,r=t.port;if("blob"==e)try{return new kt(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&Y(t)?e+"://"+z(t.host)+(null!==r?":"+r:""):"null"},Tt=function(){return A(this).scheme+":"},Ot=function(){return A(this).username},jt=function(){return A(this).password},Ct=function(){var t=A(this),e=t.host,r=t.port;return null===e?"":null===r?z(e):z(e)+":"+r},Mt=function(){var t=A(this).host;return null===t?"":z(t)},Et=function(){var t=A(this).port;return null===t?"":String(t)},Rt=function(){var t=A(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},It=function(){var t=A(this).query;return t?"?"+t:""},Lt=function(){return A(this).searchParams},Bt=function(){var t=A(this).fragment;return t?"#"+t:""},Dt=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&c(At,{href:Dt(St,(function(t){var e=A(this),r=String(t),n=xt(e,r);if(n)throw TypeError(n);x(e.searchParams).updateSearchParams(e.query)})),origin:Dt(_t),protocol:Dt(Tt,(function(t){var e=A(this);xt(e,String(t)+":",tt)})),username:Dt(Ot,(function(t){var e=A(this),r=d(String(t));if(!G(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=H(r[n],F)}})),password:Dt(jt,(function(t){var e=A(this),r=d(String(t));if(!G(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=H(r[n],F)}})),host:Dt(Ct,(function(t){var e=A(this);e.cannotBeABaseURL||xt(e,String(t),ut)})),hostname:Dt(Mt,(function(t){var e=A(this);e.cannotBeABaseURL||xt(e,String(t),pt)})),port:Dt(Et,(function(t){var e=A(this);G(e)||(""==(t=String(t))?e.port=null:xt(e,t,ht))})),pathname:Dt(Rt,(function(t){var e=A(this);e.cannotBeABaseURL||(e.path=[],xt(e,t+"",mt))})),search:Dt(It,(function(t){var e=A(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",xt(e,t,bt)),x(e.searchParams).updateSearchParams(e.query)})),searchParams:Dt(Lt),hash:Dt(Bt,(function(t){var e=A(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",xt(e,t,wt)):e.fragment=null}))}),l(At,"toJSON",(function(){return St.call(this)}),{enumerable:!0}),l(At,"toString",(function(){return St.call(this)}),{enumerable:!0}),b){var Pt=b.createObjectURL,Ut=b.revokeObjectURL;Pt&&l(kt,"createObjectURL",(function(t){return Pt.apply(b,arguments)})),Ut&&l(kt,"revokeObjectURL",(function(t){return Ut.apply(b,arguments)}))}m(kt,"URL"),o({global:!0,forced:!a,sham:!i},{URL:kt})},function(t,e,r){"use strict";var n=r(25),o=r(18),i=r(216),a=r(291),s=r(117),c=r(72),l=r(98),u=Object.assign,p=Object.defineProperty;t.exports=!u||o((function(){if(n&&1!==u({b:1},u(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=u({},t)[r]||"abcdefghijklmnopqrst"!=i(u({},e)).join("")}))?function(t,e){for(var r=c(t),o=arguments.length,u=1,p=a.f,h=s.f;o>u;)for(var d,f=l(arguments[u++]),g=p?i(f).concat(p(f)):i(f),m=g.length,y=0;m>y;)d=g[y++],n&&!h.call(f,d)||(r[d]=f[d]);return r}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){"use strict";var n=r(73),o=r(72),i=r(293),a=r(217),s=r(127),c=r(294),l=r(172);t.exports=function(t){var e,r,u,p,h,d,f=o(t),g="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,v=void 0!==y,b=l(f),w=0;if(v&&(y=n(y,m>2?arguments[2]:void 0,2)),null==b||g==Array&&a(b))for(r=new g(e=s(f.length));e>w;w++)d=v?y(f[w],w):f[w],c(r,w,d);else for(h=(p=b.call(f)).next,r=new g;!(u=h.call(p)).done;w++)d=v?i(p,y,[u.value,w],!0):u.value,c(r,w,d);return r.length=w,r}},function(t,e,r){var n=r(28),o=r(218);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){throw o(t),e}}},function(t,e,r){"use strict";var n=r(79),o=r(71),i=r(47);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},function(t,e,r){"use strict";var n=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,s=String.fromCharCode,c=function(t){return t+22+75*(t<26)},l=function(t,e,r){var n=0;for(t=r?a(t/700):t>>1,t+=a(t/e);t>455;n+=36)t=a(t/35);return a(n+36*t/(t+38))},u=function(t){var e,r,n=[],o=(t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t)).length,u=128,p=0,h=72;for(e=0;e<t.length;e++)(r=t[e])<128&&n.push(s(r));var d=n.length,f=d;for(d&&n.push("-");f<o;){var g=2147483647;for(e=0;e<t.length;e++)(r=t[e])>=u&&r<g&&(g=r);var m=f+1;if(g-u>a((2147483647-p)/m))throw RangeError(i);for(p+=(g-u)*m,u=g,e=0;e<t.length;e++){if((r=t[e])<u&&++p>2147483647)throw RangeError(i);if(r==u){for(var y=p,v=36;;v+=36){var b=v<=h?1:v>=h+26?26:v-h;if(y<b)break;var w=y-b,x=36-b;n.push(s(c(b+w%x))),y=a(w/x)}n.push(s(c(y))),h=l(p,m,f==d),p=0,++f}}++p,++u}return n.join("")};t.exports=function(t){var e,r,i=[],a=t.toLowerCase().replace(o,".").split(".");for(e=0;e<a.length;e++)r=a[e],i.push(n.test(r)?"xn--"+u(r):r);return i.join(".")}},function(t,e,r){var n=r(28),o=r(172);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},function(t,e){},function(t,e,r){"use strict";var n,o=r(299),i=r(19),a=r(3),s=r(15),c=r(11),l=r(112),u=r(14),p=r(24),h=r(20).f,d=r(78),f=r(69),g=r(5),m=r(75),y=a.Int8Array,v=y&&y.prototype,b=a.Uint8ClampedArray,w=b&&b.prototype,x=y&&d(y),k=v&&d(v),A=Object.prototype,S=A.isPrototypeOf,_=g("toStringTag"),T=m("TYPED_ARRAY_TAG"),O=o&&!!f&&"Opera"!==l(a.opera),j=!1,C={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},E=function(t){if(!s(t))return!1;var e=l(t);return c(C,e)||c(M,e)};for(n in C)a[n]||(O=!1);if((!O||"function"!=typeof x||x===Function.prototype)&&(x=function(){throw TypeError("Incorrect invocation")},O))for(n in C)a[n]&&f(a[n],x);if((!O||!k||k===A)&&(k=x.prototype,O))for(n in C)a[n]&&f(a[n].prototype,k);if(O&&d(w)!==k&&f(w,k),i&&!c(k,_))for(n in j=!0,h(k,_,{get:function(){return s(this)?this[T]:void 0}}),C)a[n]&&u(a[n],T,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:j&&T,aTypedArray:function(t){if(E(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(f){if(S.call(x,t))return t}else for(var e in C)if(c(C,n)){var r=a[e];if(r&&(t===r||S.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r){if(i){if(r)for(var n in C){var o=a[n];if(o&&c(o.prototype,t))try{delete o.prototype[t]}catch(t){}}k[t]&&!r||p(k,t,r?e:O&&v[t]||e)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(i){if(f){if(r)for(n in C)if((o=a[n])&&c(o,t))try{delete o[t]}catch(t){}if(x[t]&&!r)return;try{return p(x,t,r?e:O&&x[t]||e)}catch(t){}}for(n in C)!(o=a[n])||o[t]&&!r||p(o,t,e)}},isView:function(t){if(!s(t))return!1;var e=l(t);return"DataView"===e||c(C,e)||c(M,e)},isTypedArray:E,TypedArray:x,TypedArrayPrototype:k}},function(t,e){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,e){var r=Math.floor,n=function(t,e){var a=t.length,s=r(a/2);return a<8?o(t,e):i(n(t.slice(0,s),e),n(t.slice(s),e),e)},o=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},i=function(t,e,r){for(var n=t.length,o=e.length,i=0,a=0,s=[];i<n||a<o;)i<n&&a<o?s.push(r(t[i],e[a])<=0?t[i++]:e[a++]):s.push(i<n?t[i++]:e[a++]);return s};t.exports=n},function(t,e,r){var n=r(40).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},function(t,e,r){var n=r(40);t.exports=/MSIE|Trident/.test(n)},function(t,e,r){var n=r(40).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},function(t,e,r){var n=r(15),o=r(69);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},function(t,e,r){var n=r(15),o=r(34),i=r(5)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,r){"use strict";var n=r(46),o=r(307).start,i=r(308)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},function(t,e,r){var n=r(35),o="["+r(224)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,r){var n=r(6),o=r(224);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,r){var n=r(310);t.exports=n},function(t,e,r){var n=r(311),o=Array.prototype;t.exports=function(t){var e=t.reduce;return t===o||t instanceof Array&&e===o.reduce?n:e}},function(t,e,r){r(312);var n=r(176);t.exports=n("Array").reduce},function(t,e,r){"use strict";var n=r(27),o=r(246).left,i=r(244),a=r(175),s=r(128);n({target:"Array",proto:!0,forced:!i("reduce")||!s&&a>79&&a<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(314);t.exports=n},function(t,e,r){var n=r(315),o=String.prototype;t.exports=function(t){var e=t.trim;return"string"==typeof t||t===o||t instanceof String&&e===o.trim?n:e}},function(t,e,r){r(316);var n=r(176);t.exports=n("String").trim},function(t,e,r){"use strict";var n=r(27),o=r(317).trim;n({target:"String",proto:!0,forced:r(318)("trim")},{trim:function(){return o(this)}})},function(t,e,r){var n=r(68),o="["+r(225)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,r){var n=r(18),o=r(225);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(125);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class o{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const i=new WeakMap,a=Object(n.e)(t=>e=>{if(!(e instanceof n.a)||e instanceof n.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=e,{element:a}=r;let s=i.get(e);void 0===s&&(a.setAttribute("class",r.strings.join(" ")),i.set(e,s=new Set));const c=a.classList||new o(a);s.forEach(e=>{e in t||(c.remove(e),s.delete(e))});for(const e in t){const r=t[e];r!=s.has(e)&&(r?(c.add(e),s.add(e)):(c.remove(e),s.delete(e)))}"function"==typeof c.commit&&c.commit()})},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),i=(r(13),r(16),r(242)),a=r(364),s=r(1),c=r(8),l=s.b`.i-bubble {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
}
.i-bubble.network-error .i-bubble-wrap,
.i-bubble.error .i-bubble-wrap,
.i-bubble.success .i-bubble-wrap {
  padding-left: 30px;
  padding-right: 32px;
}
.i-bubble + .i-bubble-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-in 0s;
}
.i-bubble.loading + .i-bubble-mask {
  display: block;
}
.i-bubble.loading.popup + .i-bubble-mask {
  opacity: 1;
}
.i-bubble .i-bubble-wrap {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color: #333;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 14px;
  line-height: 1.4em;
  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  max-width: 600px;
}
.i-bubble.popup .i-bubble-wrap {
  transform: scale(1);
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.i-bubble .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 12px;
  display: none;
}
.i-bubble .icon.icon-loading {
  animation: spin 700ms linear infinite;
}
.i-bubble .i-bubble-text {
  color: #e4e4e4;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  word-break: break-all;
}
.i-bubble .i-bubble-button {
  width: 70px;
  height: 28px;
  color: #4caf50;
  background-color: initial;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color, background-color 200ms;
  border-radius: 4px;
  outline: none;
  max-width: 180px;
  margin-left: 46px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.i-bubble .i-bubble-button:hover {
  background-color: rgba(76, 175, 80, 0.14);
}
`,u=r(21),p=r(23),h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const d=Object(p.a)("network-error.png",!1),f=Object(p.a)("error.png",!1),g=Object(p.a)("success.png",!1),m=Object(p.a)("loading.png",!1);class y extends i.a{constructor(){super(...arguments),this.popup=!1,this.showButton=!1}static _timeToHideHandler(t){if(t.showButton){const e=t.shadowRoot.querySelector(".i-bubble .i-bubble-button");e.onclick&&(e.onclick=null)}const e=t.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");let r=!1;const n=()=>{t.onmouseenter=null,t.onmouseleave=null,document.body.contains(t)&&document.body.removeChild(t),r=!0};e.addEventListener("transitionend",n,{once:!0}),e.addEventListener("transitioncancel",n,{once:!0}),setTimeout(()=>{r||n()},150),t.setPopup(!1)}static _setTimerToHide(t,e){this._clearTimerToHide(t),t.hideTimer=setTimeout(()=>this._timeToHideHandler(t),e)}static _clearTimerToHide(t){t.hideTimer&&(clearTimeout(t.hideTimer),t.hideTimer=null)}static _messageMisc(t,e,r){this.setText(t),document.body.appendChild(this),window.customElements.whenDefined("i-bubble").then(()=>(this.offsetWidth,this.setPopup(!0),new o.a(t=>requestAnimationFrame(t)))).then(()=>{r&&r(this)}),e>0&&y._setTimerToHide(this,e)}static message(t,e){const r=document.createElement("i-bubble");r.setType("message"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static networkError(t,e){const r=document.createElement("i-bubble");r.setType("network-error"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static success(t,e){const r=document.createElement("i-bubble");r.setType("success"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static error(t,e){const r=document.createElement("i-bubble");r.setType("error"),e=null!=e?e:this.duration,this._messageMisc.call(r,t,e)}static popupLogin(t){const e=this.popup(i18n("reqeust_login_message"),{showButton:!0,btnValue:i18n("to_login"),type:"message",onBtnClick:null!=t?t:()=>{a.userStore.openModal()}}),r=Date.now();let n=this.duration2;e.onmouseenter=()=>{n=Date.now()-r,y._clearTimerToHide(e)},e.onmouseleave=()=>{y._setTimerToHide(e,n)}}static popupLoading(t){const e=this.popup(i18n("wallpaper_loading"),{duration:0,showButton:!0,btnValue:i18n("cancel"),type:"loading",onBtnClick:t});return()=>setTimeout(()=>this._timeToHideHandler(e),y.waitForReady)}static loading(t){const e=this.popup(t,{type:"loading",duration:0});return()=>setTimeout(()=>this._timeToHideHandler(e),y.waitForReady)}static popup(t,e){const{duration:r=this.duration2,btnValue:n,onBtnClick:o,type:i,showButton:a}=e,s=document.createElement("i-bubble");return s.setType(i),n&&s.setBtnValue(n),a&&s.setShowButton(a),this._messageMisc.call(s,t,r,()=>{if(s.showButton){s.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick=t=>{o&&o(t),this._timeToHideHandler(s)}}}),s}firstUpdated(){const t="\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ",e=document.createElement("style");e.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${d});${t}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${g});${t}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${f});${t}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${m});${t}\n      }\n      `)),this.shadowRoot.appendChild(e)}render(){return s.e`
      <section class="i-bubble ${this.type}${this.popup?" popup":""}">
        <section class="i-bubble-wrap">
          <i class="icon icon-${this.type}"></i>
          <span class="i-bubble-text">${this.text}</span>
          <input
            class="i-bubble-button"
            type="button"
            .value=${this.btnValue}
            style="${this.showButton?"":"display: none;"}"
          />
        </section>
      </section>
      <section class="i-bubble-mask" @click=${u.a.stopBubble}></section>
    `}setType(t){this.type=t}setText(t){this.text=t}setBtnValue(t){this.btnValue=t}setPopup(t){this.popup=t}setShowButton(t){this.showButton=t}}y.duration=3e3,y.duration2=5e3,y.waitForReady=1e3/60,y.styles=l,h([c.g],y.prototype,"type",void 0),h([c.g],y.prototype,"text",void 0),h([c.g],y.prototype,"btnValue",void 0),h([c.g],y.prototype,"popup",void 0),h([c.g],y.prototype,"showButton",void 0),h([c.b],y.prototype,"setType",null),h([c.b],y.prototype,"setText",null),h([c.b],y.prototype,"setBtnValue",null),h([c.b],y.prototype,"setPopup",null),h([c.b],y.prototype,"setShowButton",null),window.customElements.define("i-bubble",y);e.default=y},,function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));r(13),r(16);class n{constructor(){this._caches={},this._setCaches=t=>(...e)=>{this._caches[t]=e}}}const o=[],i=t=>new Proxy(t,{set:(t,e,r)=>null===r?(t[e]=r,!0):"function"==typeof t[e]?(console.warn("失败：重复注册"),!0):(t[e]=r,o.includes(e)&&delete t._caches[e],t._caches.hasOwnProperty(e)&&(t[e](...t._caches[e]),delete t._caches[e]),!0),get:(t,e)=>"function"==typeof t[e]?t[e]:t._setCaches(e)})},function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?e.push(r.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=n},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){var n=r(350);t.exports=n},function(t,e,r){r(238);var n=r(351),o=r(124),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.keys;return t===i||t instanceof Array&&e===i.keys||a.hasOwnProperty(o(t))?n:e}},function(t,e,r){var n=r(352);t.exports=n},function(t,e,r){r(189);var n=r(176);t.exports=n("Array").keys},function(t,e,r){"use strict";r(13),r(16);var n=r(1),o=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let i=class extends n.a{constructor(){super(...arguments),this.src=""}render(){return n.e`
      <div class="svg" style="-webkit-mask-image: url(${this.src})"></div>
    `}};i.styles=n.b`
    :host{
      display: block;
      width: 30px;
      height: 30px;
      --size: 100%;
      -webkit-mask-size: var(--size);
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      color: black;
    }
    .svg{
      width: inherit;
      height: inherit;
      -webkit-mask-size: inherit;
      -webkit-mask-position: inherit;
      color: inherit;
      background-color: currentcolor;
      -webkit-mask-repeat: inherit;
    }
  `,o([Object(n.g)({type:String})],i.prototype,"src",void 0),i=o([Object(n.c)("i-svg")],i)},,function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(13),r(16),r(17),r(44);var n=r(1),o=r(372),i=r.n(o),a=(r(371),r(368),n.b`/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:11.623Z
 */
.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}
.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}
.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}
.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}
.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}
.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}
.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}
.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}
.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}
.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}
.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}
.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}
.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}
.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}
.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}
.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}
.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}
.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}
.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}
.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}
.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}
.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}
.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}
.cropper-invisible {
  opacity: 0;
}
.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}
.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
`),s=n.b`:host {
  display: block;
  position: relative;
  z-index: 99999999;
}
.img-modal {
  position: fixed;
  z-index: 111;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.img-modal.hide {
  display: none;
}
.img-modal .img-modal-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.img-modal .img-modal-content {
  width: 640px;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.img-modal .modal-header .close {
  margin-top: 18px;
  text-align: right;
}
.img-modal .modal-header .close i-usesvg {
  color: #d9d6d7;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.img-modal .modal-header .title {
  margin-top: 8px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.img-modal .modal-body {
  display: flex;
  padding-bottom: 20px;
}
.img-modal .cropper {
  position: relative;
  width: 260px;
  height: 260px;
  margin-right: 24px;
  flex-shrink: 0;
  margin-bottom: 32px;
}
.img-modal .float-option {
  position: absolute;
  bottom: -32px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.img-modal .float-option i-usesvg {
  cursor: pointer;
  width: 18px;
  height: 18px;
  color: #333;
  opacity: 0.3;
  transition: opacity 0.2s;
}
.img-modal .float-option i-usesvg:hover {
  opacity: 1;
}
.img-modal .float-option-left > i-usesvg {
  margin-right: 16px;
}
.img-modal .float-option-right > i-usesvg {
  margin-left: 16px;
}
.img-modal .option {
  position: relative;
  flex-grow: 1;
}
.img-modal .option .title {
  display: block;
  margin-bottom: 14px;
  line-height: 1;
  font-weight: 500;
  color: #333333;
}
.img-modal .preview-box .preview {
  border: 1px solid #DADCE0;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
          mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
}
.img-modal .color-box {
  position: relative;
}
.img-modal .color-box i-colorpicker {
  margin-right: 28px;
}
.modal-footer {
  margin-top: 20px;
  margin-bottom: 40px;
}
.modal-footer .btn-box {
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
}
.modal-footer .btn-box infinito-button {
  outline: none;
  border: none;
  width: 120px;
  height: 42px;
  background: #efefef;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #333333;
  cursor: pointer;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper img {
  max-width: 100%;
  max-height: 100%;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper .cropper-crop-box {
  background-color: currentColor;
}
.cropper .cropper-point.point-se {
  height: 5px;
  width: 5px;
}
`,c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let l=class extends n.a{constructor(){super(...arguments),this.modalStatus=!1,this.rgba="",this.initRgba="",this.title="",this.showImg=!1,this.cropper=null}static create(t){const e=null==t?void 0:t.title,r=document.body,n=document.createElement("i-cropper");return e&&n.setAttribute("title",e),r.appendChild(n),this.instance=n,n}static destroy(){var t,e;null===(e=null===(t=this.instance)||void 0===t?void 0:t.parentNode)||void 0===e||e.removeChild(this.instance),this.instance=null}init(t,e){this.showImg=!1,this.rgba=e||"transparent",this.initRgba=e||"transparent",this.cropper?(this.cropper.replace(t),this.cropper.reset()):(this.$img.src=t,this.cropper=new i.a(this.$img,{aspectRatio:1,zoomOnWheel:!0,autoCropArea:.9999,preview:this.$preview,checkCrossOrigin:!1,dragMode:"move",ready:()=>{this.showImg=!0}}))}close(t=!0){this.modalStatus=!1,this.showImg=!1,t&&(this.rgba="")}show(){this.modalStatus=!0}_rotateCropper(t){this.cropper.rotate(t)}_scaleCropper(t){this.cropper.zoom(t)}_resetCropper(){this.rgba=this.initRgba,this.cropper.reset(),requestAnimationFrame(()=>{this.$colorPicker.resetActiveIndex()})}_onSubmitImg(){this.cropper.getCroppedCanvas({minWidth:512,minHeight:512,maxWidth:600,maxHeight:600}).toBlob(t=>{const e=new CustomEvent("on-change",{detail:{data:t,color:this.rgba}});this.dispatchEvent(e),this.close()},"image/png")}_pickColor(t){const{value:e}=t.detail;this.rgba=e}render(){return n.e` <div class="img-modal ${this.modalStatus?"show":"hide"}">
      <div class="img-modal-mask"></div>
      <div class="img-modal-content">
        <section class="modal-header">
          <div class="close">
            <i-usesvg @click="${this.close}" type="icon-guanbi1" iconfont></i-usesvg>
          </div>
          <div class="title">${this.title||i18n("custom_icon")}</div>
        </section>
        <section class="modal-body">
          <div
            style="${this.rgba?`color:${this.rgba};`:"color:transparent;"}${this.showImg?"opacity:1;":"opacity:0;"}"
            class="cropper"
          >
            <img class="file-img" crossorigin="anonymous" src="" alt="" />
            <div class="float-option">
              <div class="float-option-left">
                <i-usesvg @click="${()=>this._rotateCropper(90)}" type="infinity-pro-pure-icon-redo"></i-usesvg>
                <i-usesvg @click="${()=>this._rotateCropper(-90)}" type="infinity-pro-pure-icon-undo"></i-usesvg>
              </div>
              <div class="float-option-right">
                <i-usesvg @click="${()=>this._scaleCropper(-.1)}" type="infinity-pro-pure-icon-zoom-out"></i-usesvg>
                <i-usesvg @click="${()=>this._scaleCropper(.1)}" type="infinity-pro-pure-icon-zoom-in"></i-usesvg>
              </div>
            </div>
          </div>
          <div class="option">
            <div class="preview-box">
              <span class="title">${i18n("preview")}</span>
              <div
                style="${this.rgba?`background-color:${this.rgba};`:"background-color:transparent;"}"
                class="preview"
              ></div>
            </div>
            <div class="color-box">
              <span class="title">${i18n("bg_color")}</span>
              <i-colorpicker .value="${this.rgba}" @on-change="${this._pickColor}"></i-colorpicker>
            </div>
          </div>
        </section>
        <section class="modal-footer">
          <div class="btn-box">
            <infinito-button @click="${this.close}">${i18n("cancel")}</infinito-button>
            <infinito-button @click="${this._resetCropper}">${i18n("reset")}</infinito-button>
            <infinito-button primary @click="${this._onSubmitImg}">${i18n("confirm")}</infinito-button>
          </div>
        </section>
      </div>
    </div>`}};l.styles=[s,a],l.instance=null,c([Object(n.h)(".file-img")],l.prototype,"$img",void 0),c([Object(n.h)(".preview")],l.prototype,"$preview",void 0),c([Object(n.h)("i-colorpicker")],l.prototype,"$colorPicker",void 0),c([Object(n.g)({type:Boolean})],l.prototype,"modalStatus",void 0),c([Object(n.g)({type:String})],l.prototype,"rgba",void 0),c([Object(n.g)({type:String})],l.prototype,"title",void 0),c([Object(n.f)()],l.prototype,"showImg",void 0),l=c([Object(n.c)("i-cropper")],l)},,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return u}));r(13),r(16),r(10),r(52);var n=r(8),o=r(22),i=r(177),a=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const s={},c=new Set;class l{constructor(){this.firstSync=!1,this.syncTabTime=0,this._lockRollback=!1,this.isRollbackFromStorage=!1,this.backupFileKey="",this.backupValueKeys=[],this.rollbackFromStorage=()=>null,this.stopToStorageReaction=()=>{},this.stopAutoBackupReaction=()=>{},this.convertBackupEquals=t=>t}async initSyncStore(t,e,r={},a,c=20){if(s[t])throw new Error("storage key 重复");s[t]=this,0!==e.length&&(this.rollbackFromStorage=async()=>{let i=!1;const s=Object.create(null);Object.keys(r).forEach(t=>{e.includes(t)&&(s[t]=r[t])});try{const r=await Object(o.b)(t,a),n=r?Object.keys(r):[];r&&n.forEach(t=>{e.includes(t)&&(s[t]=r[t])}),this.firstSync||r&&!e.some(t=>!n.includes(t))||(i=!0)}catch(t){console.error("storageSync",t)}this.isRollbackFromStorage=!0,this.stopToStorageReaction(),this.stopAutoBackupReaction(),Object(n.i)(()=>{for(const t in s)this[t]=s[t];this.firstSync||(this.firstSync=!0)}),this.restartAutoBackupReaction(),this.stopToStorageReaction=Object(n.h)(()=>{const t={};return e.forEach(e=>{t[e]=Object(n.j)(this[e])}),t},e=>{this.isRollbackFromStorage=!1,Object(o.e)(t,e,a),Object(n.i)(()=>{this.syncTabTime=Date.now()})},{equals:n.d.structural,delay:c,fireImmediately:i})},await this.rollbackFromStorage(),Object(n.h)(()=>this.syncTabTime,e=>{e&&i.slave.sendMessage("tabs-sync",t)},{delay:60}))}restartAutoBackupReaction(t=!1){this.stopAutoBackupReaction(),this.stopAutoBackupReaction=Object(n.h)(()=>{const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(n.j)(this[e])}),t},t=>{(async(t,e)=>{try{const{syncStore:n}=await Promise.all([r.e(5),r.e(6),r.e(39)]).then(r.bind(null,461));n.pushAutoBackupPipe({[t]:e})}catch(t){}})(this.backupFileKey,t).catch()},{fireImmediately:t,equals:(t,e)=>{const r=this.convertBackupEquals(t),o=this.convertBackupEquals(e);return n.d.structural(r,o)},delay:40})}initAutoBackup(t,e){if(c.has(t))throw new Error("file key 重复");c.add(t),0!==e.length&&(this.backupFileKey=t,this.backupValueKeys=[...e])}async getBackupData(){const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(n.j)(this[e])}),t}}a([n.g],l.prototype,"firstSync",void 0),a([n.g],l.prototype,"syncTabTime",void 0),a([n.b],l.prototype,"initSyncStore",null);const u=t=>{const e=s[t];(null==e?void 0:e._lockRollback)||e.rollbackFromStorage()}},function(t,e,r){"use strict";r.r(e),r.d(e,"userStore",(function(){return x}));r(10),r(52),r(13),r(16),r(17);var n=r(7),o=r.n(n),i=r(245),a=r.n(i),s=r(104),c=r.n(s),l=r(8),u=r(363),p=r(81),h=r(0),d=r(120),f=r(26),g=r.n(f),m=r(196),y=r(177),v=r(365),b=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class w extends u.a{constructor(){super(),this.isExpired=!1,this.isLogin=!1,this.token="",this.userInfo={},this.refreshToken="",this.userProfilePromise=o.a.resolve(),this.wpColorUpdate=0,this.logining=!1,this.modalOpen=!1,this.removeAccountDisableSec=10,this.removeAccountDisableTimer=null,this.showLoginTipModal=!1,this.profileModal=!1,this.syncListModal=!1,this.isModify=!1,this.isShowLogoutConfirm=!1,this.showConfirmOpt="",this.clearAllData=!1,this.loading=!1,this.URL=h.w}setWpColorUpdate(t){this.wpColorUpdate=t}get qrcode(){if(this.isLogin&&m.e){const{uid:t,secret:e}=this.userInfo;return`${this.URL}/user/user_qr?uid=${t}&secret=${e}`}}closeModal(){this.modalOpen=!1}openModal(){this.modalOpen=!0}toggleLoginTipModal(){this.showLoginTipModal=!this.showLoginTipModal}closeLoginTipModal(){this.showLoginTipModal=!1}closeProfileModal(){this.profileModal=!1}openProfileModal(){this.profileModal=!0}closeSyncListModal(){this.syncListModal=!1}openSyncListModal(){this.syncListModal=!0}openModify(){this.isModify=!0}async modifyProfile(t){try{const e=await p.g.updateProfile(t);Object(l.i)(()=>{if(e&&0===e.code){const{user:{name:t,gender:r,avatar:n}}=e.data;this.userInfo.name=t,this.userInfo.gender=r,this.userInfo.avatar=n,this.closeModify()}else d.message.error(i18n("update_data_failure"))})}catch(t){d.message.error(t.message)}}async getUserProfile(){const t=await p.g.getUserProfile();Object(l.i)(()=>{if(t)if(0===t.code&&this.isLogin){const{gender:e,name:r,avatar:n}=t.data;this.userInfo.name=r,this.userInfo.gender=e,this.userInfo.avatar=n,this.userInfo["auto-backup"]=t.data["auto-backup"],this.userInfo["wp-color-update"]=t.data["wp-color-update"]}else 3012===t.code&&(d.message.error(t.message),this.exitAccount())})}async updateAvatar(t){try{return await p.g.uploadAvatar(t)}catch(t){d.message.error(i18n("upload_avatar_failure"))}}closeModify(){this.isModify=!1}thirdPartyLogin(t){let e;switch(this.logining=!0,t){case"facebook":e=this.URL+"/login/facebook";break;case"google":e=this.URL+"/login/google";break;case"qq":const t=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/qq");e="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101410947&redirect_uri="+t;break;case"sina":e=this.URL+"/login/weibo";break;case"wechat":const r=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/wechat");e="https://open.weixin.qq.com/connect/qrconnect?state=123&appid=wx5af98300f5d18d16&response_type=code&scope=snsapi_login&redirect_uri="+r}setTimeout(async()=>{const t=Math.floor(window.screenY+200),r=Math.floor(window.screenX+window.innerWidth/3),n=window.open(e,"_blank",`top=${t},left=${r},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);if(this.opener=n,h.n)return;const o=setInterval(()=>{n.postMessage({from:"origin_login"},"*")},300),i=t=>{if(!t.data&&!t.data.key&&"login"!==t.data.key)return;clearInterval(o),window.removeEventListener("message",i,!1);const{message:e}=t.data;this.login3rdSuccess(e)};window.addEventListener("message",i,!1)},300)}async login(t){const e=await p.g.login(t);Object(l.i)(()=>{if(!e||0!==e.code)throw d.message.error(e.message),new Error(e.code);this.loginEmailSuccess(e.data.user),this.setToken(e.data),this.setRefreshToken(e.data.refreshToken)})}async setMobileUid(){if(m.e){const{uid:t,secret:e}=this.userInfo,r=await p.g.getMobileUid(t,e);if(0===(null==r?void 0:r.code)){const{mobileuid:t}=r.data;Object(l.i)(()=>{this.userInfo.mobileuid=t})}}}async loginEmailSuccess(t){this.logining=!1,this.closeModal(),this.isLogin=!0,this.userInfo=t,this.isExpired=!1,await this.setMobileUid()}setUserData(t){this.logining=!1,this.closeModal(),this.isLogin=t.isLogin,this.userInfo=t,this.isExpired=!1;["token","refreshToken","isLogin"].forEach(t=>delete this.userInfo[t])}async login3rdSuccess(t){if(!t||!Object.keys(t).length)return void this.cancelLogin();const e=t["login-type"];if(["qq","wechat"].includes(e)){const e=await p.g.loginWithUid(t);0===e.code?Object(l.i)(()=>{this.setUserData(t),this.setToken(e.data),this.setRefreshToken(e.data.refreshToken)}):3006===e.code&&d.message.error("获取token失败")}else this.setUserData(t),this.setToken(t),this.setRefreshToken(t.refreshToken);await this.setMobileUid()}cancelLogin(){var t;this.logining=!1,null===(t=this.opener)||void 0===t||t.close()}toggleClear(t){this.clearAllData=t}logout(t){this.isShowLogoutConfirm=!0,this.showConfirmOpt=t,"remove"===t&&(this.removeAccountDisableSec=10,clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=setInterval(()=>{Object(l.i)(()=>{this.removeAccountDisableSec-=1,0===this.removeAccountDisableSec&&(clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=null)})},1e3))}async exitAccount(){this.loading=!0,this.isLogin=!1,this.userInfo={},this.clearToken(),await new o.a(t=>{setTimeout(()=>{this.clearAllData?this.clearAllStore().then(t):t(null)},200)}),this.clearAllData?window.location.reload():(Object(l.i)(()=>this.loading=!1),this.closeLogoutConfirm(),this.closeProfileModal(),h.r&&v.pluginStore.hideLast())}async deleteAccount(){this.loading=!0;const t=await p.g.deleteAccount();Object(l.i)(()=>{t&&0===t.code?this.exitAccount():(3012===t.code&&this.exitAccount(),d.message.error(t.message)),this.loading=!1})}preserveStorageKeys(){const t=[];return["store-privacy"].forEach(e=>t.push({key:e,data:localStorage.getItem(e)})),t}restoreKeysToStorage(t){t.forEach(({data:t,key:e})=>localStorage.setItem(e,t))}async clearAllStore(){this.stopAutoBackupReaction(),this.stopToStorageReaction();!h.r&&await new o.a(t=>chrome.storage.local.clear(t)),this._clearLocalStorage(["store-privacy","store-setting->permission","store-search->ignoreSuggest","first-installed"]),await this._deleteIdb(["store-notes","store-todo","store-sync","store-wallpaper","store-wallpaper-cache","infinity-image-base64"]),y.slave.sendMessage("tabs-reload")}async _deleteIdb(t){const e=await new o.a(t=>a()(g.a).call(g.a,(e,r)=>t(r)));await o.a.all(t.map(t=>new o.a(r=>{const n=t.split("->");if(1===n.length)return e.includes(t)?void g.a.removeItem(t,r):void r(null);r(null),e.includes(n[0])&&g.a.getItem(n[0],t=>{c()(n).call(n,(t,e,r)=>(r===n.length-1&&Reflect.deleteProperty(t,e),t[e]),t),g.a.setItem(n[0],r)})})))}_clearLocalStorage(t){const e=new Map;t.filter(Boolean).forEach(t=>{const r=t.split("->");if(1===r.length)return void e.set(t,localStorage.getItem(t));const n=JSON.parse(localStorage.getItem(r[0]));r.slice(1).forEach((t,e)=>{const o=0===e?n:n[r[e]];for(const e in o)t!==e&&Reflect.deleteProperty(o,e)}),e.set(r[0],JSON.stringify(n))}),localStorage.clear();for(const t of a()(e).call(e))localStorage.setItem(t,e.get(t))}closeLogoutConfirm(){this.isShowLogoutConfirm=!1}setToken(t){this.token=t.token}setRefreshToken(t){this.refreshToken=t}clearToken(){this.token="",this.refreshToken=""}setOutdated(){this.isExpired=!0,this.isLogin=!1}toggleReLogin(){this.isExpired=!1}}b([l.g],w.prototype,"isExpired",void 0),b([l.g],w.prototype,"isLogin",void 0),b([l.g],w.prototype,"token",void 0),b([l.g],w.prototype,"userInfo",void 0),b([l.g],w.prototype,"refreshToken",void 0),b([l.g],w.prototype,"wpColorUpdate",void 0),b([l.b],w.prototype,"setWpColorUpdate",null),b([l.e],w.prototype,"qrcode",null),b([l.g],w.prototype,"opener",void 0),b([l.g],w.prototype,"logining",void 0),b([l.g],w.prototype,"modalOpen",void 0),b([l.g],w.prototype,"removeAccountDisableSec",void 0),b([l.g],w.prototype,"removeAccountDisableTimer",void 0),b([l.b],w.prototype,"closeModal",null),b([l.b],w.prototype,"openModal",null),b([l.g],w.prototype,"showLoginTipModal",void 0),b([l.b],w.prototype,"toggleLoginTipModal",null),b([l.b],w.prototype,"closeLoginTipModal",null),b([l.g],w.prototype,"profileModal",void 0),b([l.g],w.prototype,"syncListModal",void 0),b([l.b],w.prototype,"closeProfileModal",null),b([l.b],w.prototype,"openProfileModal",null),b([l.b],w.prototype,"closeSyncListModal",null),b([l.b],w.prototype,"openSyncListModal",null),b([l.g],w.prototype,"isModify",void 0),b([l.b],w.prototype,"openModify",null),b([l.b],w.prototype,"modifyProfile",null),b([l.b],w.prototype,"getUserProfile",null),b([l.b],w.prototype,"updateAvatar",null),b([l.b],w.prototype,"closeModify",null),b([l.b],w.prototype,"thirdPartyLogin",null),b([l.b],w.prototype,"login",null),b([l.b],w.prototype,"setMobileUid",null),b([l.b],w.prototype,"loginEmailSuccess",null),b([l.b],w.prototype,"setUserData",null),b([l.b],w.prototype,"login3rdSuccess",null),b([l.b],w.prototype,"cancelLogin",null),b([l.g],w.prototype,"isShowLogoutConfirm",void 0),b([l.g],w.prototype,"showConfirmOpt",void 0),b([l.g],w.prototype,"clearAllData",void 0),b([l.b],w.prototype,"toggleClear",null),b([l.b],w.prototype,"logout",null),b([l.g],w.prototype,"loading",void 0),b([l.b],w.prototype,"exitAccount",null),b([l.b],w.prototype,"deleteAccount",null),b([l.b],w.prototype,"clearAllStore",null),b([l.b],w.prototype,"closeLogoutConfirm",null),b([l.b],w.prototype,"setToken",null),b([l.b],w.prototype,"setRefreshToken",null),b([l.b],w.prototype,"clearToken",null),b([l.b],w.prototype,"setOutdated",null),b([l.b],w.prototype,"toggleReLogin",null);const x=new w;Object(l.c)(()=>{x.isLogin&&(x.userProfilePromise=x.getUserProfile())}),x.initSyncStore("store-user",["userInfo","isLogin","token","refreshToken","wpColorUpdate"])},function(t,e,r){"use strict";r.r(e),r.d(e,"pluginStore",(function(){return u}));r(13),r(16),r(10);var n=r(8),o=r(129),i=r(346);class a extends i.a{opened(t){}}const s=Object(i.b)(new a);var c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};class l{constructor(){this.pluginsMap={"infinity://weather":"side-weather","infinity://todos":"side-todos","infinity://notes":"side-notes","infinity://history":"side-history","infinity://bookmarks":"side-bookmarks","infinity://extension":"side-extension","infinity://chrome-apps":"chrome-apps","infinity://wallpaper":"wallpaper","infinity://settings":"side-profile",search:"side-search",profile:"side-profile",editIcon:"side-editicon"},this.pluginsTags={"side-weather":!1,"side-todos":!1,"side-notes":!1,"side-history":!1,"side-bookmarks":!1,"side-extension":!1,"chrome-apps":!1,"side-profile":!1,"side-search":!1,"side-editicon":!1,wallpaper:!1},this.pluginViews=[],this.focusRepair=!1,Object(n.h)(()=>this.pluginViews.map(t=>t),([t])=>{s.opened(t)})}initDom(t){this.pluginsTags[t]=!0}async show(t){if(this.pluginViews.includes(t))return;const e=this.pluginsMap[t];if(!1===this.pluginsTags[e])try{await this.requestPermission(e),Object(n.i)(()=>{this.pluginsTags[e]=!0,this.pluginViews.push(t)})}catch(t){}else this.pluginViews.push(t)}async showRepair(){this.focusRepair=!0,this.show("profile"),localStorage.setItem("user-checkout-old-data","true")}blurRepair(){this.focusRepair=!1}requestPermission(t){switch(t){case"side-bookmarks":return o.a.request(["bookmarks"],["chrome://favicon/"]);case"side-extension":case"chrome-apps":return o.a.request(["management"]);case"side-history":return o.a.request(["history"],["chrome://favicon/"])}}hideLast(){const t=this.pluginViews.pop();return 0===this.pluginViews.length&&document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform","none"),t}}c([n.g],l.prototype,"pluginsTags",void 0),c([n.b],l.prototype,"initDom",null),c([n.g],l.prototype,"pluginViews",void 0),c([n.g],l.prototype,"focusRepair",void 0),c([n.b],l.prototype,"show",null),c([n.b],l.prototype,"showRepair",null),c([n.b],l.prototype,"blurRepair",null),c([n.b],l.prototype,"hideLast",null);const u=new l},function(t,e,r){t.exports=r.p+"images/error.f782e7c.png"},function(t,e,r){t.exports=r.p+"images/remind.896ff6f.png"},function(t,e,r){"use strict";r(13),r(16);var n=r(1),o=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let i=class extends n.a{constructor(){super(...arguments),this.type="",this.iconfont=!1}render(){return this.iconfont?n.e`
        <svg part="svg">
          <use href="${r(400)}#${this.type}" style=${this.color?`fill: ${this.color};`:""}></use>
        </svg>
      `:n.e`
        <svg part="svg">
          <use href="${r(401)}#${this.type}"></use>
        </svg>
      `}};i.styles=n.b`
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      color: #333;
    }
    svg {
      width: inherit;
      height: inherit;
      color: inherit;
      fill: currentColor;
    }
  `,o([Object(n.g)({type:String})],i.prototype,"type",void 0),o([Object(n.g)({type:Boolean})],i.prototype,"iconfont",void 0),o([Object(n.g)({type:String})],i.prototype,"color",void 0),i=o([Object(n.c)("i-usesvg")],i)},,,function(t,e,r){"use strict";r(13),r(16),r(10);var n=r(1),o=r(335),i=(r(353),n.b`:host {
  display: block;
  position: relative;
  z-index: 999;
}
.color-pick-list {
  width: 100%;
  box-sizing: border-box;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backface-visibility: hidden;
}
.color-item {
  position: relative;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  background-color: currentColor;
}
.color-item::before {
  content: "";
  display: none;
  width: 0px;
  height: 0px;
  color: #fff;
  border-width: 0px 0px 2px 2px;
  padding: 3px 3px 3px 6px;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -78%) rotate(-45deg);
}
.color-item.active::before {
  display: block;
}
.color-item.transparent {
  color: #ddd !important;
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
}
.color-item.transparent i-svg {
  color: #fff !important;
  background: #ddd !important;
}
.color-item.transparent.active {
  background: #ddd;
  background-image: none;
}
.color-picker {
  position: absolute;
  bottom: 30px;
  right: 0;
  transform-origin: bottom right;
}
.side {
  transform: scale(calc(1 / var(--side-ratio)));
}
`),a=r(373),s=r.n(a),c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let l=class extends n.a{constructor(){super(...arguments),this.value="",this.offsetRight=0,this.side=!1,this.name="",this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(138,49,255,1)","transparent"],this.pickerStatus=!1,this.activeIndex=-1,this._close_picker_lock=!1,this._preClosePicker=()=>{this._close_picker_lock&&(this._close_picker_lock=!1)},this._postClosePicker=()=>{this._close_picker_lock||this._closePicker()},this._closePicker=()=>{this.pickerStatus=!1}}firstUpdated(){this._importColor(),this.resetActiveIndex(),window.addEventListener("mousedown",this._preClosePicker),window.addEventListener("mouseup",this._postClosePicker)}disconnectedCallback(){this._closePicker(),window.removeEventListener("mousedown",this._preClosePicker),window.removeEventListener("mouseup",this._postClosePicker),super.disconnectedCallback()}resetActiveIndex(){this.activeIndex=this.colors.findIndex(t=>t===this.value)}_importColor(){const t=document.querySelector("#script-vue"),e=document.querySelector("#script-color");if(!t){const t=document.createElement("script");t.src="/vendor/vue.min.js",t.id="script-vue",t.onload=()=>{if(!e){const t=document.createElement("script");t.src="/vendor/color-picker.min.js",t.id="script-color",document.body.append(t)}},document.body.append(t)}}_showPicker(t){t.stopPropagation(),this.pickerStatus=!0,"transparent"===this.value&&(this.value="#ff4734",this.activeIndex=-1,this._emitChange())}_pickColor(t){if(t instanceof CustomEvent){const{rgba:e}=t.detail[0],{r:r,g:n,b:o,a:i}=e;this.value=`rgba(${[r,n,o,i].join(",")})`,this.activeIndex=-1,this._emitChange()}}_pickThisColor(t){this.value=this.colors[t],this.activeIndex=t,this._emitChange()}_emitChange(){const t=new CustomEvent("on-change",{detail:{value:this.value}});this.dispatchEvent(t)}async performUpdate(){this.resetActiveIndex(),super.performUpdate()}updated(t){if(t.has("pickerStatus")&&!0===this.pickerStatus)try{this.$colorPicker.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(t){}}render(){return n.e`
      <section class="color-pick-list">
        ${this.colors.map((t,e)=>n.e`<span
            @click="${()=>this._pickThisColor(e)}"
            class="${Object(o.a)({active:e===this.activeIndex,"color-item":!0,transparent:"transparent"===t})}"
            style="color:${t.includes("255,255,255")?"rgb(221,221,221)":t};"
          >
          </span>`)}
        <span
          @click="${this._showPicker}"
          class="color-item color-dropper ${-1===this.activeIndex&&this.value?"active":""}"
          style="background: url(${s.a}) no-repeat center; background-size: contain;"
        >
        </span>
      </section>
      <section
        @click="${t=>{t.stopPropagation()}}"
        class="color-picker ${this.side?"side":""}"
        .hidden=${!this.pickerStatus}
        style="margin-right:${this.offsetRight}px"
      >
        ${this.pickerStatus?n.e` <color-picker
              @mousedown=${t=>{t.stopPropagation(),this._close_picker_lock=!0}}
              value="${this.value}"
              @input="${this._pickColor}"
            ></color-picker>`:null}
      </section>
    `}};l.styles=i,c([Object(n.g)({type:String})],l.prototype,"value",void 0),c([Object(n.g)({type:Number})],l.prototype,"offsetRight",void 0),c([Object(n.g)({type:Boolean})],l.prototype,"side",void 0),c([Object(n.g)({type:String})],l.prototype,"name",void 0),c([Object(n.g)({type:Array})],l.prototype,"colors",void 0),c([Object(n.f)()],l.prototype,"pickerStatus",void 0),c([Object(n.f)()],l.prototype,"activeIndex",void 0),c([Object(n.h)(".color-picker")],l.prototype,"$colorPicker",void 0),l=c([Object(n.c)("i-colorpicker")],l)},function(t,e,r){
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
t.exports=function(){"use strict";function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c="undefined"!=typeof window&&void 0!==window.document,l=c?window:{},u=!(!c||!l.document.documentElement)&&"ontouchstart"in l.document.documentElement,p=!!c&&"PointerEvent"in l,h="".concat("cropper","-crop"),d="".concat("cropper","-disabled"),f="".concat("cropper","-hidden"),g="".concat("cropper","-hide"),m="".concat("cropper","-invisible"),y="".concat("cropper","-modal"),v="".concat("cropper","-move"),b="".concat("cropper","Action"),w="".concat("cropper","Preview"),x=u?"touchstart":"mousedown",k=u?"touchmove":"mousemove",A=u?"touchend touchcancel":"mouseup",S=p?"pointerdown":x,_=p?"pointermove":k,T=p?"pointerup pointercancel":A,O=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,j=/^data:/,C=/^data:image\/jpeg;base64,/,M=/^img|canvas$/i,E={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},R=Number.isNaN||l.isNaN;function I(t){return"number"==typeof t&&!R(t)}var L=function(t){return t>0&&t<1/0};function B(t){return void 0===t}function D(t){return"object"===r(t)&&null!==t}var P=Object.prototype.hasOwnProperty;function U(t){if(!D(t))return!1;try{var e=t.constructor,r=e.prototype;return e&&r&&P.call(r,"isPrototypeOf")}catch(t){return!1}}function $(t){return"function"==typeof t}var z=Array.prototype.slice;function W(t){return Array.from?Array.from(t):z.call(t)}function N(t,e){return t&&$(e)&&(Array.isArray(t)||I(t.length)?W(t).forEach((function(r,n){e.call(t,r,n,t)})):D(t)&&Object.keys(t).forEach((function(r){e.call(t,t[r],r,t)}))),t}var q=Object.assign||function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return D(t)&&r.length>0&&r.forEach((function(e){D(e)&&Object.keys(e).forEach((function(r){t[r]=e[r]}))})),t},F=/\.\d*(?:0|9){12}\d*$/;function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return F.test(t)?Math.round(t*e)/e:t}var V=/^width|height|left|top|marginLeft|marginTop$/;function Y(t,e){var r=t.style;N(e,(function(t,e){V.test(e)&&I(t)&&(t="".concat(t,"px")),r[e]=t}))}function X(t,e){if(e)if(I(t.length))N(t,(function(t){X(t,e)}));else if(t.classList)t.classList.add(e);else{var r=t.className.trim();r?r.indexOf(e)<0&&(t.className="".concat(r," ").concat(e)):t.className=e}}function G(t,e){e&&(I(t.length)?N(t,(function(t){G(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function J(t,e,r){e&&(I(t.length)?N(t,(function(t){J(t,e,r)})):r?X(t,e):G(t,e))}var K=/([a-z\d])([A-Z])/g;function Z(t){return t.replace(K,"$1-$2").toLowerCase()}function Q(t,e){return D(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(Z(e)))}function tt(t,e,r){D(r)?t[e]=r:t.dataset?t.dataset[e]=r:t.setAttribute("data-".concat(Z(e)),r)}var et=/\s\s*/,rt=function(){var t=!1;if(c){var e=!1,r=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});l.addEventListener("test",r,n),l.removeEventListener("test",r,n)}return t}();function nt(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r;e.trim().split(et).forEach((function(e){if(!rt){var i=t.listeners;i&&i[e]&&i[e][r]&&(o=i[e][r],delete i[e][r],0===Object.keys(i[e]).length&&delete i[e],0===Object.keys(i).length&&delete t.listeners)}t.removeEventListener(e,o,n)}))}function ot(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r;e.trim().split(et).forEach((function(e){if(n.once&&!rt){var i=t.listeners,a=void 0===i?{}:i;o=function(){delete a[e][r],t.removeEventListener(e,o,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];r.apply(t,s)},a[e]||(a[e]={}),a[e][r]&&t.removeEventListener(e,a[e][r],n),a[e][r]=o,t.listeners=a}t.addEventListener(e,o,n)}))}function it(t,e,r){var n;return $(Event)&&$(CustomEvent)?n=new CustomEvent(e,{detail:r,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,r),t.dispatchEvent(n)}function at(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var st=l.location,ct=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function lt(t){var e=t.match(ct);return null!==e&&(e[1]!==st.protocol||e[2]!==st.hostname||e[3]!==st.port)}function ut(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function pt(t){var e=t.rotate,r=t.scaleX,n=t.scaleY,o=t.translateX,i=t.translateY,a=[];I(o)&&0!==o&&a.push("translateX(".concat(o,"px)")),I(i)&&0!==i&&a.push("translateY(".concat(i,"px)")),I(e)&&0!==e&&a.push("rotate(".concat(e,"deg)")),I(r)&&1!==r&&a.push("scaleX(".concat(r,")")),I(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var s=a.length?a.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function ht(t,r){var n=t.pageX,o=t.pageY,i={endX:n,endY:o};return r?i:e({startX:n,startY:o},i)}function dt(t){var e=t.aspectRatio,r=t.height,n=t.width,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",i=L(n),a=L(r);if(i&&a){var s=r*e;"contain"===o&&s>n||"cover"===o&&s<n?r=n/e:n=r*e}else i?r=n/e:a&&(n=r*e);return{width:n,height:r}}function ft(t,e,r,n){var o=e.aspectRatio,i=e.naturalWidth,s=e.naturalHeight,c=e.rotate,l=void 0===c?0:c,u=e.scaleX,p=void 0===u?1:u,h=e.scaleY,d=void 0===h?1:h,f=r.aspectRatio,g=r.naturalWidth,m=r.naturalHeight,y=n.fillColor,v=void 0===y?"transparent":y,b=n.imageSmoothingEnabled,w=void 0===b||b,x=n.imageSmoothingQuality,k=void 0===x?"low":x,A=n.maxWidth,S=void 0===A?1/0:A,_=n.maxHeight,T=void 0===_?1/0:_,O=n.minWidth,j=void 0===O?0:O,C=n.minHeight,M=void 0===C?0:C,E=document.createElement("canvas"),R=E.getContext("2d"),I=dt({aspectRatio:f,width:S,height:T}),L=dt({aspectRatio:f,width:j,height:M},"cover"),B=Math.min(I.width,Math.max(L.width,g)),D=Math.min(I.height,Math.max(L.height,m)),P=dt({aspectRatio:o,width:S,height:T}),U=dt({aspectRatio:o,width:j,height:M},"cover"),$=Math.min(P.width,Math.max(U.width,i)),z=Math.min(P.height,Math.max(U.height,s)),W=[-$/2,-z/2,$,z];return E.width=H(B),E.height=H(D),R.fillStyle=v,R.fillRect(0,0,B,D),R.save(),R.translate(B/2,D/2),R.rotate(l*Math.PI/180),R.scale(p,d),R.imageSmoothingEnabled=w,R.imageSmoothingQuality=k,R.drawImage.apply(R,[t].concat(a(W.map((function(t){return Math.floor(H(t))}))))),R.restore(),E}var gt=String.fromCharCode,mt=/^data:.*,/;function yt(t){var e,r=new DataView(t);try{var n,o,i;if(255===r.getUint8(0)&&216===r.getUint8(1))for(var a=r.byteLength,s=2;s+1<a;){if(255===r.getUint8(s)&&225===r.getUint8(s+1)){o=s;break}s+=1}if(o){var c=o+10;if("Exif"===function(t,e,r){var n="";r+=e;for(var o=e;o<r;o+=1)n+=gt(t.getUint8(o));return n}(r,o+4,4)){var l=r.getUint16(c);if(((n=18761===l)||19789===l)&&42===r.getUint16(c+2,n)){var u=r.getUint32(c+4,n);u>=8&&(i=c+u)}}}if(i){var p,h,d=r.getUint16(i,n);for(h=0;h<d;h+=1)if(p=i+12*h+2,274===r.getUint16(p,n)){p+=8,e=r.getUint16(p,n),r.setUint16(p,1,n);break}}}catch(t){e=1}return e}var vt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,r=this.container,n=this.cropper,o=Number(e.minContainerWidth),i=Number(e.minContainerHeight);X(n,f),G(t,f);var a={width:Math.max(r.offsetWidth,o>=0?o:200),height:Math.max(r.offsetHeight,i>=0?i:100)};this.containerData=a,Y(n,{width:a.width,height:a.height}),X(t,f),G(n,f)},initCanvas:function(){var t=this.containerData,e=this.imageData,r=this.options.viewMode,n=Math.abs(e.rotate)%180==90,o=n?e.naturalHeight:e.naturalWidth,i=n?e.naturalWidth:e.naturalHeight,a=o/i,s=t.width,c=t.height;t.height*a>t.width?3===r?s=t.height*a:c=t.width/a:3===r?c=t.width/a:s=t.height*a;var l={aspectRatio:a,naturalWidth:o,naturalHeight:i,width:s,height:c};this.canvasData=l,this.limited=1===r||2===r,this.limitCanvas(!0,!0),l.width=Math.min(Math.max(l.width,l.minWidth),l.maxWidth),l.height=Math.min(Math.max(l.height,l.minHeight),l.maxHeight),l.left=(t.width-l.width)/2,l.top=(t.height-l.height)/2,l.oldLeft=l.left,l.oldTop=l.top,this.initialCanvasData=q({},l)},limitCanvas:function(t,e){var r=this.options,n=this.containerData,o=this.canvasData,i=this.cropBoxData,a=r.viewMode,s=o.aspectRatio,c=this.cropped&&i;if(t){var l=Number(r.minCanvasWidth)||0,u=Number(r.minCanvasHeight)||0;a>1?(l=Math.max(l,n.width),u=Math.max(u,n.height),3===a&&(u*s>l?l=u*s:u=l/s)):a>0&&(l?l=Math.max(l,c?i.width:0):u?u=Math.max(u,c?i.height:0):c&&(l=i.width,(u=i.height)*s>l?l=u*s:u=l/s));var p=dt({aspectRatio:s,width:l,height:u});l=p.width,u=p.height,o.minWidth=l,o.minHeight=u,o.maxWidth=1/0,o.maxHeight=1/0}if(e)if(a>(c?0:1)){var h=n.width-o.width,d=n.height-o.height;o.minLeft=Math.min(0,h),o.minTop=Math.min(0,d),o.maxLeft=Math.max(0,h),o.maxTop=Math.max(0,d),c&&this.limited&&(o.minLeft=Math.min(i.left,i.left+(i.width-o.width)),o.minTop=Math.min(i.top,i.top+(i.height-o.height)),o.maxLeft=i.left,o.maxTop=i.top,2===a&&(o.width>=n.width&&(o.minLeft=Math.min(0,h),o.maxLeft=Math.max(0,h)),o.height>=n.height&&(o.minTop=Math.min(0,d),o.maxTop=Math.max(0,d))))}else o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height},renderCanvas:function(t,e){var r=this.canvasData,n=this.imageData;if(e){var o=function(t){var e=t.width,r=t.height,n=t.degree;if(90==(n=Math.abs(n)%180))return{width:r,height:e};var o=n%90*Math.PI/180,i=Math.sin(o),a=Math.cos(o),s=e*a+r*i,c=e*i+r*a;return n>90?{width:c,height:s}:{width:s,height:c}}({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),i=o.width,a=o.height,s=r.width*(i/r.naturalWidth),c=r.height*(a/r.naturalHeight);r.left-=(s-r.width)/2,r.top-=(c-r.height)/2,r.width=s,r.height=c,r.aspectRatio=i/a,r.naturalWidth=i,r.naturalHeight=a,this.limitCanvas(!0,!1)}(r.width>r.maxWidth||r.width<r.minWidth)&&(r.left=r.oldLeft),(r.height>r.maxHeight||r.height<r.minHeight)&&(r.top=r.oldTop),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),this.limitCanvas(!1,!0),r.left=Math.min(Math.max(r.left,r.minLeft),r.maxLeft),r.top=Math.min(Math.max(r.top,r.minTop),r.maxTop),r.oldLeft=r.left,r.oldTop=r.top,Y(this.canvas,q({width:r.width,height:r.height},pt({translateX:r.left,translateY:r.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,r=this.imageData,n=r.naturalWidth*(e.width/e.naturalWidth),o=r.naturalHeight*(e.height/e.naturalHeight);q(r,{width:n,height:o,left:(e.width-n)/2,top:(e.height-o)/2}),Y(this.image,q({width:r.width,height:r.height},pt(q({translateX:r.left,translateY:r.top},r)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,r=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,o={width:e.width,height:e.height};r&&(e.height*r>e.width?o.height=o.width/r:o.width=o.height*r),this.cropBoxData=o,this.limitCropBox(!0,!0),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),o.width=Math.max(o.minWidth,o.width*n),o.height=Math.max(o.minHeight,o.height*n),o.left=e.left+(e.width-o.width)/2,o.top=e.top+(e.height-o.height)/2,o.oldLeft=o.left,o.oldTop=o.top,this.initialCropBoxData=q({},o)},limitCropBox:function(t,e){var r=this.options,n=this.containerData,o=this.canvasData,i=this.cropBoxData,a=this.limited,s=r.aspectRatio;if(t){var c=Number(r.minCropBoxWidth)||0,l=Number(r.minCropBoxHeight)||0,u=a?Math.min(n.width,o.width,o.width+o.left,n.width-o.left):n.width,p=a?Math.min(n.height,o.height,o.height+o.top,n.height-o.top):n.height;c=Math.min(c,n.width),l=Math.min(l,n.height),s&&(c&&l?l*s>c?l=c/s:c=l*s:c?l=c/s:l&&(c=l*s),p*s>u?p=u/s:u=p*s),i.minWidth=Math.min(c,u),i.minHeight=Math.min(l,p),i.maxWidth=u,i.maxHeight=p}e&&(a?(i.minLeft=Math.max(0,o.left),i.minTop=Math.max(0,o.top),i.maxLeft=Math.min(n.width,o.left+o.width)-i.width,i.maxTop=Math.min(n.height,o.top+o.height)-i.height):(i.minLeft=0,i.minTop=0,i.maxLeft=n.width-i.width,i.maxTop=n.height-i.height))},renderCropBox:function(){var t=this.options,e=this.containerData,r=this.cropBoxData;(r.width>r.maxWidth||r.width<r.minWidth)&&(r.left=r.oldLeft),(r.height>r.maxHeight||r.height<r.minHeight)&&(r.top=r.oldTop),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),this.limitCropBox(!1,!0),r.left=Math.min(Math.max(r.left,r.minLeft),r.maxLeft),r.top=Math.min(Math.max(r.top,r.minTop),r.maxTop),r.oldLeft=r.left,r.oldTop=r.top,t.movable&&t.cropBoxMovable&&tt(this.face,b,r.width>=e.width&&r.height>=e.height?"move":"all"),Y(this.cropBox,q({width:r.width,height:r.height},pt({translateX:r.left,translateY:r.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),it(this.element,"crop",this.getData())}},bt={initPreview:function(){var t=this.element,e=this.crossOrigin,r=this.options.preview,n=e?this.crossOriginUrl:this.url,o=t.alt||"The image to preview",i=document.createElement("img");if(e&&(i.crossOrigin=e),i.src=n,i.alt=o,this.viewBox.appendChild(i),this.viewBoxImage=i,r){var a=r;"string"==typeof r?a=t.ownerDocument.querySelectorAll(r):r.querySelector&&(a=[r]),this.previews=a,N(a,(function(t){var r=document.createElement("img");tt(t,w,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(r.crossOrigin=e),r.src=n,r.alt=o,r.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(r)}))}},resetPreview:function(){N(this.previews,(function(t){var e=Q(t,w);Y(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(D(t[e]))try{delete t[e]}catch(r){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(r){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(Z(e)))}(t,w)}))},preview:function(){var t=this.imageData,e=this.canvasData,r=this.cropBoxData,n=r.width,o=r.height,i=t.width,a=t.height,s=r.left-e.left-t.left,c=r.top-e.top-t.top;this.cropped&&!this.disabled&&(Y(this.viewBoxImage,q({width:i,height:a},pt(q({translateX:-s,translateY:-c},t)))),N(this.previews,(function(e){var r=Q(e,w),l=r.width,u=r.height,p=l,h=u,d=1;n&&(h=o*(d=l/n)),o&&h>u&&(p=n*(d=u/o),h=u),Y(e,{width:p,height:h}),Y(e.getElementsByTagName("img")[0],q({width:i*d,height:a*d},pt(q({translateX:-s*d,translateY:-c*d},t))))})))}},wt={bind:function(){var t=this.element,e=this.options,r=this.cropper;$(e.cropstart)&&ot(t,"cropstart",e.cropstart),$(e.cropmove)&&ot(t,"cropmove",e.cropmove),$(e.cropend)&&ot(t,"cropend",e.cropend),$(e.crop)&&ot(t,"crop",e.crop),$(e.zoom)&&ot(t,"zoom",e.zoom),ot(r,S,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&ot(r,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&ot(r,"dblclick",this.onDblclick=this.dblclick.bind(this)),ot(t.ownerDocument,_,this.onCropMove=this.cropMove.bind(this)),ot(t.ownerDocument,T,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&ot(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,r=this.cropper;$(e.cropstart)&&nt(t,"cropstart",e.cropstart),$(e.cropmove)&&nt(t,"cropmove",e.cropmove),$(e.cropend)&&nt(t,"cropend",e.cropend),$(e.crop)&&nt(t,"crop",e.crop),$(e.zoom)&&nt(t,"zoom",e.zoom),nt(r,S,this.onCropStart),e.zoomable&&e.zoomOnWheel&&nt(r,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&nt(r,"dblclick",this.onDblclick),nt(t.ownerDocument,_,this.onCropMove),nt(t.ownerDocument,T,this.onCropEnd),e.responsive&&nt(window,"resize",this.onResize)}},xt={resize:function(){if(!this.disabled){var t,e,r=this.options,n=this.container,o=this.containerData,i=n.offsetWidth/o.width,a=n.offsetHeight/o.height,s=Math.abs(i-1)>Math.abs(a-1)?i:a;1!==s&&(r.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),r.restore&&(this.setCanvasData(N(t,(function(e,r){t[r]=e*s}))),this.setCropBoxData(N(e,(function(t,r){e[r]=t*s})))))}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e=h,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,r=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*r,t)))},cropStart:function(t){var e=t.buttons,r=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(I(e)&&1!==e||I(r)&&0!==r||t.ctrlKey))){var n,o=this.options,i=this.pointers;t.changedTouches?N(t.changedTouches,(function(t){i[t.identifier]=ht(t)})):i[t.pointerId||0]=ht(t),n=Object.keys(i).length>1&&o.zoomable&&o.zoomOnTouch?"zoom":Q(t.target,b),O.test(n)&&!1!==it(this.element,"cropstart",{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,"crop"===n&&(this.cropping=!0,X(this.dragBox,y)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var r=this.pointers;t.preventDefault(),!1!==it(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?N(t.changedTouches,(function(t){q(r[t.identifier]||{},ht(t,!0))})):q(r[t.pointerId||0]||{},ht(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,r=this.pointers;t.changedTouches?N(t.changedTouches,(function(t){delete r[t.identifier]})):delete r[t.pointerId||0],e&&(t.preventDefault(),Object.keys(r).length||(this.action=""),this.cropping&&(this.cropping=!1,J(this.dragBox,y,this.cropped&&this.options.modal)),it(this.element,"cropend",{originalEvent:t,action:e}))}}},kt={change:function(t){var r,n=this.options,o=this.canvasData,i=this.containerData,a=this.cropBoxData,s=this.pointers,c=this.action,l=n.aspectRatio,u=a.left,p=a.top,h=a.width,d=a.height,g=u+h,m=p+d,y=0,v=0,b=i.width,w=i.height,x=!0;!l&&t.shiftKey&&(l=h&&d?h/d:1),this.limited&&(y=a.minLeft,v=a.minTop,b=y+Math.min(i.width,o.width,o.left+o.width),w=v+Math.min(i.height,o.height,o.top+o.height));var k=s[Object.keys(s)[0]],A={x:k.endX-k.startX,y:k.endY-k.startY},S=function(t){switch(t){case"e":g+A.x>b&&(A.x=b-g);break;case"w":u+A.x<y&&(A.x=y-u);break;case"n":p+A.y<v&&(A.y=v-p);break;case"s":m+A.y>w&&(A.y=w-m)}};switch(c){case"all":u+=A.x,p+=A.y;break;case"e":if(A.x>=0&&(g>=b||l&&(p<=v||m>=w))){x=!1;break}S("e"),(h+=A.x)<0&&(c="w",u-=h=-h),l&&(d=h/l,p+=(a.height-d)/2);break;case"n":if(A.y<=0&&(p<=v||l&&(u<=y||g>=b))){x=!1;break}S("n"),d-=A.y,p+=A.y,d<0&&(c="s",p-=d=-d),l&&(h=d*l,u+=(a.width-h)/2);break;case"w":if(A.x<=0&&(u<=y||l&&(p<=v||m>=w))){x=!1;break}S("w"),h-=A.x,u+=A.x,h<0&&(c="e",u-=h=-h),l&&(d=h/l,p+=(a.height-d)/2);break;case"s":if(A.y>=0&&(m>=w||l&&(u<=y||g>=b))){x=!1;break}S("s"),(d+=A.y)<0&&(c="n",p-=d=-d),l&&(h=d*l,u+=(a.width-h)/2);break;case"ne":if(l){if(A.y<=0&&(p<=v||g>=b)){x=!1;break}S("n"),d-=A.y,p+=A.y,h=d*l}else S("n"),S("e"),A.x>=0?g<b?h+=A.x:A.y<=0&&p<=v&&(x=!1):h+=A.x,A.y<=0?p>v&&(d-=A.y,p+=A.y):(d-=A.y,p+=A.y);h<0&&d<0?(c="sw",p-=d=-d,u-=h=-h):h<0?(c="nw",u-=h=-h):d<0&&(c="se",p-=d=-d);break;case"nw":if(l){if(A.y<=0&&(p<=v||u<=y)){x=!1;break}S("n"),d-=A.y,p+=A.y,h=d*l,u+=a.width-h}else S("n"),S("w"),A.x<=0?u>y?(h-=A.x,u+=A.x):A.y<=0&&p<=v&&(x=!1):(h-=A.x,u+=A.x),A.y<=0?p>v&&(d-=A.y,p+=A.y):(d-=A.y,p+=A.y);h<0&&d<0?(c="se",p-=d=-d,u-=h=-h):h<0?(c="ne",u-=h=-h):d<0&&(c="sw",p-=d=-d);break;case"sw":if(l){if(A.x<=0&&(u<=y||m>=w)){x=!1;break}S("w"),h-=A.x,u+=A.x,d=h/l}else S("s"),S("w"),A.x<=0?u>y?(h-=A.x,u+=A.x):A.y>=0&&m>=w&&(x=!1):(h-=A.x,u+=A.x),A.y>=0?m<w&&(d+=A.y):d+=A.y;h<0&&d<0?(c="ne",p-=d=-d,u-=h=-h):h<0?(c="se",u-=h=-h):d<0&&(c="nw",p-=d=-d);break;case"se":if(l){if(A.x>=0&&(g>=b||m>=w)){x=!1;break}S("e"),d=(h+=A.x)/l}else S("s"),S("e"),A.x>=0?g<b?h+=A.x:A.y>=0&&m>=w&&(x=!1):h+=A.x,A.y>=0?m<w&&(d+=A.y):d+=A.y;h<0&&d<0?(c="nw",p-=d=-d,u-=h=-h):h<0?(c="sw",u-=h=-h):d<0&&(c="ne",p-=d=-d);break;case"move":this.move(A.x,A.y),x=!1;break;case"zoom":this.zoom(function(t){var r=e({},t),n=0;return N(t,(function(t,e){delete r[e],N(r,(function(e){var r=Math.abs(t.startX-e.startX),o=Math.abs(t.startY-e.startY),i=Math.abs(t.endX-e.endX),a=Math.abs(t.endY-e.endY),s=Math.sqrt(r*r+o*o),c=(Math.sqrt(i*i+a*a)-s)/s;Math.abs(c)>Math.abs(n)&&(n=c)}))})),n}(s),t),x=!1;break;case"crop":if(!A.x||!A.y){x=!1;break}r=at(this.cropper),u=k.startX-r.left,p=k.startY-r.top,h=a.minWidth,d=a.minHeight,A.x>0?c=A.y>0?"se":"ne":A.x<0&&(u-=h,c=A.y>0?"sw":"nw"),A.y<0&&(p-=d),this.cropped||(G(this.cropBox,f),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(a.width=h,a.height=d,a.left=u,a.top=p,this.action=c,this.renderCropBox()),N(s,(function(t){t.startX=t.endX,t.startY=t.endY}))}},At={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&X(this.dragBox,y),G(this.cropBox,f),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=q({},this.initialImageData),this.canvasData=q({},this.initialCanvasData),this.cropBoxData=q({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(q(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),G(this.dragBox,y),X(this.cropBox,f)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,N(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,G(this.cropper,d)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,X(this.cropper,d)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.canvasData,n=r.left,o=r.top;return this.moveTo(B(t)?t:n+Number(t),B(e)?e:o+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.canvasData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(I(t)&&(r.left=t,n=!0),I(e)&&(r.top=e,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var r=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(r.width*t/r.naturalWidth,null,e)},zoomTo:function(t,e,r){var n=this.options,o=this.canvasData,i=o.width,a=o.height,s=o.naturalWidth,c=o.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&n.zoomable){var l=s*t,u=c*t;if(!1===it(this.element,"zoom",{ratio:t,oldRatio:i/s,originalEvent:r}))return this;if(r){var p=this.pointers,h=at(this.cropper),d=p&&Object.keys(p).length?function(t){var e=0,r=0,n=0;return N(t,(function(t){var o=t.startX,i=t.startY;e+=o,r+=i,n+=1})),{pageX:e/=n,pageY:r/=n}}(p):{pageX:r.pageX,pageY:r.pageY};o.left-=(l-i)*((d.pageX-h.left-o.left)/i),o.top-=(u-a)*((d.pageY-h.top-o.top)/a)}else U(e)&&I(e.x)&&I(e.y)?(o.left-=(l-i)*((e.x-o.left)/i),o.top-=(u-a)*((e.y-o.top)/a)):(o.left-=(l-i)/2,o.top-=(u-a)/2);o.width=l,o.height=u,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return I(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,I(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(I(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=this.imageData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(I(t)&&(r.scaleX=t,n=!0),I(e)&&(r.scaleY=e,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.options,n=this.imageData,o=this.canvasData,i=this.cropBoxData;if(this.ready&&this.cropped){t={x:i.left-o.left,y:i.top-o.top,width:i.width,height:i.height};var a=n.width/n.naturalWidth;if(N(t,(function(e,r){t[r]=e/a})),e){var s=Math.round(t.y+t.height),c=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=c-t.x,t.height=s-t.y}}else t={x:0,y:0,width:0,height:0};return r.rotatable&&(t.rotate=n.rotate||0),r.scalable&&(t.scaleX=n.scaleX||1,t.scaleY=n.scaleY||1),t},setData:function(t){var e=this.options,r=this.imageData,n=this.canvasData,o={};if(this.ready&&!this.disabled&&U(t)){var i=!1;e.rotatable&&I(t.rotate)&&t.rotate!==r.rotate&&(r.rotate=t.rotate,i=!0),e.scalable&&(I(t.scaleX)&&t.scaleX!==r.scaleX&&(r.scaleX=t.scaleX,i=!0),I(t.scaleY)&&t.scaleY!==r.scaleY&&(r.scaleY=t.scaleY,i=!0)),i&&this.renderCanvas(!0,!0);var a=r.width/r.naturalWidth;I(t.x)&&(o.left=t.x*a+n.left),I(t.y)&&(o.top=t.y*a+n.top),I(t.width)&&(o.width=t.width*a),I(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?q({},this.containerData):{}},getImageData:function(){return this.sized?q({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&N(["left","top","width","height","naturalWidth","naturalHeight"],(function(r){e[r]=t[r]})),e},setCanvasData:function(t){var e=this.canvasData,r=e.aspectRatio;return this.ready&&!this.disabled&&U(t)&&(I(t.left)&&(e.left=t.left),I(t.top)&&(e.top=t.top),I(t.width)?(e.width=t.width,e.height=t.width/r):I(t.height)&&(e.height=t.height,e.width=t.height*r),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,r,n=this.cropBoxData,o=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&U(t)&&(I(t.left)&&(n.left=t.left),I(t.top)&&(n.top=t.top),I(t.width)&&t.width!==n.width&&(e=!0,n.width=t.width),I(t.height)&&t.height!==n.height&&(r=!0,n.height=t.height),o&&(e?n.height=n.width/o:r&&(n.width=n.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,r=ft(this.image,this.imageData,e,t);if(!this.cropped)return r;var n=this.getData(),o=n.x,i=n.y,s=n.width,c=n.height,l=r.width/Math.floor(e.naturalWidth);1!==l&&(o*=l,i*=l,s*=l,c*=l);var u=s/c,p=dt({aspectRatio:u,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),h=dt({aspectRatio:u,width:t.minWidth||0,height:t.minHeight||0},"cover"),d=dt({aspectRatio:u,width:t.width||(1!==l?r.width:s),height:t.height||(1!==l?r.height:c)}),f=d.width,g=d.height;f=Math.min(p.width,Math.max(h.width,f)),g=Math.min(p.height,Math.max(h.height,g));var m=document.createElement("canvas"),y=m.getContext("2d");m.width=H(f),m.height=H(g),y.fillStyle=t.fillColor||"transparent",y.fillRect(0,0,f,g);var v=t.imageSmoothingEnabled,b=void 0===v||v,w=t.imageSmoothingQuality;y.imageSmoothingEnabled=b,w&&(y.imageSmoothingQuality=w);var x,k,A,S,_,T,O=r.width,j=r.height,C=o,M=i;C<=-s||C>O?(C=0,x=0,A=0,_=0):C<=0?(A=-C,C=0,_=x=Math.min(O,s+C)):C<=O&&(A=0,_=x=Math.min(s,O-C)),x<=0||M<=-c||M>j?(M=0,k=0,S=0,T=0):M<=0?(S=-M,M=0,T=k=Math.min(j,c+M)):M<=j&&(S=0,T=k=Math.min(c,j-M));var E=[C,M,x,k];if(_>0&&T>0){var R=f/s;E.push(A*R,S*R,_*R,T*R)}return y.drawImage.apply(y,[r].concat(a(E.map((function(t){return Math.floor(H(t))}))))),m},setAspectRatio:function(t){var e=this.options;return this.disabled||B(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,r=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var o="crop"===t,i=e.movable&&"move"===t;t=o||i?t:"none",e.dragMode=t,tt(r,b,t),J(r,h,o),J(r,v,i),e.cropBoxMovable||(tt(n,b,t),J(n,h,o),J(n,v,i))}return this}},St=l.Cropper,_t=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!e||!M.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=q({},E,U(r)&&r),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var e,r,i;return e=t,i=[{key:"noConflict",value:function(){return window.Cropper=St,t}},{key:"setDefaults",value:function(t){q(E,U(t)&&t)}}],(r=[{key:"init",value:function(){var t,e=this.element,r=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===r){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===r&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var r=this.element,n=this.options;if(n.rotatable||n.scalable||(n.checkOrientation=!1),n.checkOrientation&&window.ArrayBuffer)if(j.test(t))C.test(t)?this.read((o=t.replace(mt,""),i=atob(o),a=new ArrayBuffer(i.length),N(s=new Uint8Array(a),(function(t,e){s[e]=i.charCodeAt(e)})),a)):this.clone();else{var o,i,a,s,c=new XMLHttpRequest,l=this.clone.bind(this);this.reloading=!0,this.xhr=c,c.onabort=l,c.onerror=l,c.ontimeout=l,c.onprogress=function(){"image/jpeg"!==c.getResponseHeader("content-type")&&c.abort()},c.onload=function(){e.read(c.response)},c.onloadend=function(){e.reloading=!1,e.xhr=null},n.checkCrossOrigin&&lt(t)&&r.crossOrigin&&(t=ut(t)),c.open("GET",t,!0),c.responseType="arraybuffer",c.withCredentials="use-credentials"===r.crossOrigin,c.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,r=this.imageData,n=yt(t),o=0,i=1,a=1;if(n>1){this.url=function(t,e){for(var r=[],n=new Uint8Array(t);n.length>0;)r.push(gt.apply(null,W(n.subarray(0,8192)))),n=n.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(r.join("")))}(t,"image/jpeg");var s=function(t){var e=0,r=1,n=1;switch(t){case 2:r=-1;break;case 3:e=-180;break;case 4:n=-1;break;case 5:e=90,n=-1;break;case 6:e=90;break;case 7:e=90,r=-1;break;case 8:e=-90}return{rotate:e,scaleX:r,scaleY:n}}(n);o=s.rotate,i=s.scaleX,a=s.scaleY}e.rotatable&&(r.rotate=o),e.scalable&&(r.scaleX=i,r.scaleY=a),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,r=t.crossOrigin,n=e;this.options.checkCrossOrigin&&lt(e)&&(r||(r="anonymous"),n=ut(e)),this.crossOrigin=r,this.crossOriginUrl=n;var o=document.createElement("img");r&&(o.crossOrigin=r),o.src=n||e,o.alt=t.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),X(o,g),t.parentNode.insertBefore(o,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var r=l.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(l.navigator.userAgent),n=function(e,r){q(t.imageData,{naturalWidth:e,naturalHeight:r,aspectRatio:e/r}),t.initialImageData=q({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||r){var o=document.createElement("img"),i=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){n(o.width,o.height),r||i.removeChild(o)},o.src=e.src,r||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",i.appendChild(o))}else n(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,r=this.image,n=t.parentNode,o=document.createElement("div");o.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var i=o.querySelector(".".concat("cropper","-container")),a=i.querySelector(".".concat("cropper","-canvas")),s=i.querySelector(".".concat("cropper","-drag-box")),c=i.querySelector(".".concat("cropper","-crop-box")),l=c.querySelector(".".concat("cropper","-face"));this.container=n,this.cropper=i,this.canvas=a,this.dragBox=s,this.cropBox=c,this.viewBox=i.querySelector(".".concat("cropper","-view-box")),this.face=l,a.appendChild(r),X(t,f),n.insertBefore(i,t.nextSibling),this.isImg||G(r,g),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,X(c,f),e.guides||X(c.getElementsByClassName("".concat("cropper","-dashed")),f),e.center||X(c.getElementsByClassName("".concat("cropper","-center")),f),e.background&&X(i,"".concat("cropper","-bg")),e.highlight||X(l,m),e.cropBoxMovable&&(X(l,v),tt(l,b,"all")),e.cropBoxResizable||(X(c.getElementsByClassName("".concat("cropper","-line")),f),X(c.getElementsByClassName("".concat("cropper","-point")),f)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),$(e.ready)&&ot(t,"ready",e.ready,{once:!0}),it(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),G(this.element,f))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&o(e.prototype,r),i&&o(e,i),t}();return q(_t.prototype,vt,bt,wt,xt,kt,At),_t}()},function(t,e,r){t.exports=r.p+"images/color.321ebce.jpg"},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r.p+"images/iconfont.919d651.svg"},function(t,e,r){t.exports=r.p+"images/icon.196b87f.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"SettingProfile",(function(){return S}));var n=r(48),o=r.n(n),i=(r(10),r(1)),a=r(484),s=r(81),c=r(22),l=r(2),u=r(355),p=r(120),h=r(196),d=r(177),f=(r(399),i.b`.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.wrapper .container {
  display: flex;
}
.wrapper .form {
  box-sizing: border-box;
  width: 450px;
  padding: 60px;
  background: #f9f9f9;
  border-radius: 6px 0px 0px 6px;
}
.wrapper .bg {
  width: 400px;
}
.wrapper .bg img {
  width: 100%;
  height: 100%;
}
.large-title {
  margin: 0;
  margin-bottom: 2px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 42px;
}
.large-title + p {
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}
.form-control {
  margin-top: 64px;
}
.form-control infinito-button {
  --button-color: #333;
  margin-top: 26px;
  width: 100%;
  height: 52px;
}
.form-control .cancel {
  display: block;
  margin: 0;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
infinito-input {
  --border-color: #999;
  margin-bottom: 24px;
}
.radio-control {
  display: flex;
}
.radio-control > span {
  font-size: 14px;
  margin-right: 24px;
}
.radio-control infinito-radio-group {
  flex: 1;
}
.radio-control .radio-content {
  display: flex;
}
.radio-control .radio-content p {
  margin: 0;
  margin-right: 6px;
}
.register-wrapper .register-form {
  padding: 45px 60px;
}
.register-wrapper .form-control {
  margin-top: 45px;
}
.register-wrapper .form-control infinito-button {
  margin-top: -4px;
}
.setting-wrapper .large-title {
  font-size: 23px;
  text-align: center;
  line-height: 32px;
}
.setting-wrapper .setting-form {
  padding: 45px 60px 40px;
}
.setting-wrapper .form-control {
  margin-top: 24px;
}
.setting-wrapper .form-control infinito-button {
  margin: 40px 0 30px;
  --font-size: 16px;
}
.setting-wrapper .upload-input-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}
.setting-wrapper .upload-input-control .border {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 14px;
  border-radius: 50%;
  background: #ececec;
  overflow: hidden;
  cursor: pointer;
}
.setting-wrapper .upload-input-control .border input,
.setting-wrapper .upload-input-control .border .loading {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  opacity: 0;
  cursor: pointer;
}
.setting-wrapper .upload-input-control .border .loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 1;
}
.setting-wrapper .upload-input-control .border .loading i-svg {
  color: #fff;
  width: 35px;
  height: 35px;
}
.setting-wrapper .upload-input-control .border .avatar {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
}
.setting-wrapper .upload-input-control .border + span {
  font-size: 14px;
}
.email-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.email-wrapper infinito-input {
  margin: 0;
  flex: 1;
}
.email-wrapper infinito-button {
  --button-color: none;
  --border-color: #999;
  --font-color: #999;
  width: auto;
  min-width: 90px;
  margin: 0;
  margin-left: 10px;
}
`),g=r(523),m=r.n(g),y=r(754),v=r.n(y),b=r(755),w=r.n(b),x=r(522),k=r.n(x),A=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};let S=class extends i.a{constructor(){super(),this.cropper=null,this.preViewImgData=null,this.gender="x",this.avatar="",this.avatarKey="",this.userInfo={},this.error="",this.loading=!1,this.uploadLoading=!1,document.title=Object(l.i18n)("settings")}async firstUpdated(){const t=await Object(c.b)("store-user");this.userInfo=t.userInfo,this.initCropper()}render(){const{avatar:t="",name:e=""}=this.userInfo;return i.e`
      <div class="wrapper setting-wrapper">
        <div class="container">
          <div class="form setting-form">
            <div>
              <h2 class="large-title">${Object(l.i18n)("setting_your_avatar_nickname")}</h2>
            </div>
            <div class="form-control">
              <div class="upload-input-control">
                <div class="border">
                  ${this.avatar?i.e`<div class="avatar" style="background: url(${this.avatar}); background-size: cover;"></div>`:i.e`<img class="avatar" .src=${t||h.f} />`}
                  <input
                    type="file"
                    name="avatar"
                    @change=${this.chooseImage}
                    @drop=${this.chooseImage}
                    accept="image/png, image/jpeg"
                  />
                  ${this.uploadLoading?i.e`
                        <div class="loading">
                          <i-svg src=${k.a}></i-svg>
                        </div>
                      `:null}
                </div>
                <span>${Object(l.i18n)("please_chose_picture")}</span>
              </div>
              <div class="input-control">
                <infinito-input
                  name="username"
                  placeholder="${Object(l.i18n)("please_enter_nickname")}"
                  .value=${e}
                  .error="${this.error}"
                  @onfocus=${()=>{this.error=""}}
                >
                </infinito-input>
              </div>
              <div class="radio-control">
                <span>${Object(l.i18n)("gender")}</span>
                <infinito-radio-group selected="${this.gender}" @on-change=${this.radioChange}>
                  <infinito-radio value="male">
                    <div class="radio-content">
                      <p>${Object(l.i18n)("male")}</p>
                      <img .src=${v.a} />
                    </div>
                  </infinito-radio>
                  <infinito-radio value="female">
                    <div class="radio-content">
                      <p>${Object(l.i18n)("female")}</p>
                      <img .src=${w.a} />
                    </div>
                  </infinito-radio>
                  <infinito-radio value="x">${Object(l.i18n)("none")}</infinito-radio>
                </infinito-radio-group>
              </div>
              <infinito-button primary @click="${this.handleClick}" .loading=${this.loading}>
                ${Object(l.i18n)("confirm")}
              </infinito-button>
              <p class="cancel" @click="${this.handleCancel}">${Object(l.i18n)("skip")}</p>
            </div>
          </div>
          <div
            class="bg register-bg"
            style=${Object(a.a)({backgroundImage:`url(${m.a})`,backgroundSize:"cover"})}
          ></div>
        </div>
      </div>
    `}initCropper(){this.cropper=u.a.create({title:Object(l.i18n)("edit_avatar")}),this.cropper.addEventListener("on-change",async t=>{const{data:e}=t.detail;this.preViewImgData=e;const r=this.avatar;this.avatar=o.a.createObjectURL(this.preViewImgData),o.a.revokeObjectURL(r),setTimeout(()=>{this.uploadAvatar()},500)})}chooseImage(){const t=this.avatarInput.files[0];if(!("image/jpeg"===t.type||"image/png"===t.type))return p.message.error(Object(l.i18n)("please_chose_picture")),void(this.avatarInput.value="");if(!(t.size/1024/1024<2))return p.message.error(Object(l.i18n)("oversize")),void(this.avatarInput.value="");const e=new FileReader;e.readAsDataURL(t),this.avatarInput.value=null,e.onload=()=>{this.cropper.init(e.result),this.cropper.show()}}async uploadAvatar(){this.uploadLoading=!0;const t=await s.g.uploadAvatar(this.preViewImgData);0===(null==t?void 0:t.code)?this.avatarKey=t.data.key:(this.avatar="",this.preViewImgData=null,p.message.error(Object(l.i18n)("upload_avatar_failure"))),this.uploadLoading=!1}radioChange(t){this.gender=t.detail.selected}async handleClick(){if(this.loading)return;const t=this.userInput.value;if(!t)return void(this.error=Object(l.i18n)("username_cannot_empty"));const e={name:t,gender:this.gender,avatar:this.avatarKey};this.loading=!0;try{const t=await s.g.updateProfile(e),r=await Object(c.b)("store-user");if(0===(null==t?void 0:t.code)){const{user:e}=t.data;Object(c.f)("store-user",{userInfo:Object.assign(Object.assign({},r.userInfo),e)}),d.slave.sendMessage("tabs-sync","store-user"),Object(c.d)()}else p.message.error(Object(l.i18n)("update_data_failure"))}catch(t){p.message.error(t.message)}this.loading=!1}handleCancel(){Object(c.d)()}};S.styles=f,A([Object(i.h)('infinito-input[name="username"]')],S.prototype,"userInput",void 0),A([Object(i.h)('input[name="avatar"]')],S.prototype,"avatarInput",void 0),A([Object(i.g)({type:String})],S.prototype,"gender",void 0),A([Object(i.g)({type:String})],S.prototype,"avatar",void 0),A([Object(i.g)({type:String})],S.prototype,"avatarKey",void 0),A([Object(i.g)({type:Object})],S.prototype,"userInfo",void 0),A([Object(i.g)({type:String})],S.prototype,"error",void 0),A([Object(i.g)({type:Boolean})],S.prototype,"loading",void 0),A([Object(i.g)({type:Boolean})],S.prototype,"uploadLoading",void 0),S=A([Object(i.c)("setting-profile")],S)},,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(125);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new WeakMap,i=Object(n.e)(t=>e=>{if(!(e instanceof n.a)||e instanceof n.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=e,{style:i}=r.element;let a=o.get(e);void 0===a&&(i.cssText=r.strings.join(" "),o.set(e,a=new Set)),a.forEach(e=>{e in t||(a.delete(e),-1===e.indexOf("-")?i[e]=null:i.removeProperty(e))});for(const e in t)a.add(e),-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e])})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r.p+"images/spin.f9360d9.svg"},function(t,e,r){t.exports=r.p+"images/user-bg3.85b6f67.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r.p+"images/boy.a9d76a0.svg"},function(t,e,r){t.exports=r.p+"images/girl.7feefef.svg"}]]);