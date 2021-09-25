(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,12,29,34,36,37,39,42],[,,,,function(t,e,i){"use strict";i.d(e,"b",(function(){return v})),i.d(e,"a",(function(){return w}));i(17),i(10),i(13),i(16);var o=i(7),n=i.n(o),r=i(105),a=i.n(r),s=i(0),l=i(8);const c=a.a.create({timeout:3e4});let p=!1;const d=[],h=()=>new n.a(async(t,e)=>{if(d.push({resolve:t,reject:e}),!p){p=!0;try{const{userStore:t}=await Promise.all([i.e(0),i.e(5),i.e(6),i.e(7),i.e(36)]).then(i.bind(null,468)),{refreshToken:e}=t;if(!e)return t.setOutdated(),p=!1,void d.forEach(t=>{t.reject(new Error("no refreshtoken"))});const{status:o,data:n}=await c.post(s.w+"/refresh_token",{refresh_token:e},{headers:{"i-lang":s.B.lang}});if(200===o&&0===n.code){const{token:e,refreshToken:i}=n.data;Object(l.i)(()=>{t.token=e,t.refreshToken=i}),p=!1,d.forEach(t=>{t.resolve(e)})}else{if(200!==o||3010!==n.code&&3012!==n.code)throw new Error(null==n?void 0:n.message);t.setOutdated(),p=!1,d.forEach(t=>{t.reject(n.message)})}}catch(t){p=!1,d.forEach(e=>{e.reject(t)})}}});var u=i(21);i(52);const g=["params","data","_auth"],f=async t=>{const{slave:e}=await i.e(12).then(i.bind(null,177)),o=((t,e={})=>{const i=Object.keys(e).map(t=>`${t}=${encodeURIComponent(e[t])}`);return i.length?t.includes("?")?t+i.join("&"):t+"?"+i.join("&"):t})(t.url,t.params),{request:n,option:r}=(t=>{const e={},i={};return t.data&&!e.body&&(e.body=JSON.stringify(t.data)),Object.keys(t).forEach(o=>{g.includes(o)||(o.startsWith("_")?i[o]=t[o]:e[o]=t[o])}),{request:e,option:i}})(t);return e.postTask("slave:fetch",{url:o,request:n,option:r})},m=a.a.CancelToken,b=a.a.create({timeout:6e4});b.interceptors.response.use(null,t=>(t.message=i18n("network_error"),n.a.reject(t)));const y=Object.create(null),v=t=>{y[t]&&y[t]()},w=async t=>{if(t._single){const e=(t=>{let e;return e=!0===t._single?t.method+"-"+t.url.split("?")[0]:t._single,e})(t);y[e]&&y[e](),t.cancelToken=new m(t=>{y[e]=t})}var e;t._delay&&await(e=t._delay,new n.a(t=>{setTimeout(t,e)}));const o={};if(t._auth){const{userStore:e}=await Promise.all([i.e(0),i.e(29)]).then(i.bind(null,364));if(!e||!e.token)throw new Error("error token");{const i=u.a.parseJwt(e.token),n=await u.a.getTimestamp();if(t._Authorization)o.Authorization=t._Authorization,o["i-token"]=t._Authorization;else if(Math.floor(n/1e3)>i.exp-60){const t=await h();o.Authorization="Bearer "+t,o["i-token"]="Bearer "+t}else o.Authorization="Bearer "+e.token,o["i-token"]="Bearer "+e.token}}let r;if(t.url.includes(s.w)&&(o["i-lang"]=s.B.lang,o["i-edition"]=s.e,o["i-version"]=s.B.extVersion),t.headers=Object.assign(Object.assign({},o),t.headers),r=t._proxy?await f(t):await b(t),t._responseAll)return r;let{data:a}=r;if(!t._Authorization&&3010===(null==a?void 0:a.code)){const e=await h();t._Authorization="Bearer "+e,delete t.headers.Authorization,delete t.headers["i-token"],a=await w(t)}return a};["get","delete"].forEach(t=>{w[t]=(e,i,o={})=>w(Object.assign({url:e,params:i,method:t},o))}),["post","patch","put"].forEach(t=>{w[t]=(e,i,o={})=>w(Object.assign({url:e,data:i,method:t},o))}),w.jsonp=(t,e,i={})=>w(Object.assign({url:t,params:e},i))},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"c",(function(){return l})),i.d(e,"d",(function(){return c})),i.d(e,"b",(function(){return p})),i.d(e,"e",(function(){return d})),i.d(e,"f",(function(){return h})),i.d(e,"g",(function(){return u})),i.d(e,"a",(function(){return g}));var o=i(7),n=i.n(o),r=(i(10),i(13),i(16),i(0)),a=i(26),s=i.n(a);function l(t,e){if(r.l){if(t=window.chrome.runtime.getURL(t),null==e?void 0:e.isNewTab)return window.chrome.tabs.create({url:t});window.chrome.tabs.getCurrent(e=>window.chrome.tabs.update(e.id,{url:t},()=>{chrome.runtime.lastError&&t&&(t.startsWith("http")?window.open(t,"_self"):window.chrome.tabs.create({url:t}))}))}else{if(null==e?void 0:e.isNewTab)return window.open(t);window.open(t,"_self")}}async function c(){if(r.l){const{slave:t}=await i.e(12).then(i.bind(null,177));window.chrome.tabs.getCurrent(e=>{t.sendMessage("tabs-reload"),setTimeout(()=>{window.chrome.tabs.remove(e.id)},16)})}else setTimeout(()=>{l("/")},16)}async function p(t,e){try{if(e){return await s.a.getItem(t)}{const e=localStorage.getItem(t);if(e)return"string"==typeof e?JSON.parse(e):e}}catch(t){throw new Error(t)}}async function d(t,e,i){i?await s.a.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}async function h(t,e,i=!1){const o=await p(t,i);if(o&&Object.keys(o).length){d(t,Object.assign({},o,e),i)}else d(t,e,i)}async function u(t,e){const{autoBackupPipe:i}=await p("store-sync",!0);i.data[t]=e,i.timestamp=Date.now(),i.websocketKeys.includes(t)||i.websocketKeys.push(t),await h("store-sync",{autoBackupPipe:i},!0)}async function g(){const t=await new n.a(t=>chrome.bookmarks.getTree(t));if(r.n){const e=t[0].children.findIndex(t=>"unfiled_____"===t.id),i=t[0].children.findIndex(t=>"toolbar_____"===t.id);if(-1!==e&&-1!==i)if(e>i){const[o]=t[0].children.splice(e,1),[n]=t[0].children.splice(i,1);t[0].children.unshift(n,o)}else{const[o]=t[0].children.splice(i,1),[n]=t[0].children.splice(e,1);t[0].children.unshift(o,n)}}return t}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"i",(function(){return o})),i.d(e,"d",(function(){return n})),i.d(e,"h",(function(){return $})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return a})),i.d(e,"g",(function(){return s})),i.d(e,"e",(function(){return c})),i.d(e,"f",(function(){return xt})),i.d(e,"c",(function(){return l}));var o={};i.r(o),i.d(o,"getLocalCity",(function(){return h})),i.d(o,"getForecastWeather",(function(){return u})),i.d(o,"getCityList",(function(){return g}));var n={};i.r(n),i.d(n,"getSearchSuggest",(function(){return w})),i.d(n,"getEnginesList",(function(){return x}));var r={};i.r(r),i.d(r,"getIcon",(function(){return D})),i.d(r,"getUrlInfoWithPermission",(function(){return N})),i.d(r,"getUrlIcon",(function(){return F})),i.d(r,"getFetchiconUrls",(function(){return W}));var a={};i.r(a),i.d(a,"getUnreadEmails",(function(){return q}));var s={};i.r(s),i.d(s,"register",(function(){return G})),i.d(s,"login",(function(){return K})),i.d(s,"updateProfile",(function(){return Q})),i.d(s,"getUserProfile",(function(){return J})),i.d(s,"uploadAvatar",(function(){return Z})),i.d(s,"modifyPassword",(function(){return tt})),i.d(s,"forgetPassword",(function(){return et})),i.d(s,"resetPassword",(function(){return it})),i.d(s,"getCode",(function(){return ot})),i.d(s,"getRegisterCode",(function(){return nt})),i.d(s,"inspceCode",(function(){return rt})),i.d(s,"checkTokenIsExpired",(function(){return at})),i.d(s,"deleteAccount",(function(){return st})),i.d(s,"loginWithUid",(function(){return lt})),i.d(s,"v1BasicLogin",(function(){return ct})),i.d(s,"getMobileUid",(function(){return pt}));var l={};i.r(l),i.d(l,"getRepairConcat",(function(){return dt})),i.d(l,"postErrorCollect",(function(){return ht})),i.d(l,"sendLog",(function(){return ut}));var c={};i.r(c),i.d(c,"getSyncList",(function(){return mt})),i.d(c,"getSyncDetail",(function(){return bt})),i.d(c,"autoBackup",(function(){return yt})),i.d(c,"manualBackup",(function(){return vt})),i.d(c,"getV2DataFromV1",(function(){return wt}));i(10);var p=i(0),d=i(4);const h=async()=>{try{const t=await d.a.get(p.y+"/city/locate",{lang:p.B.lang},{timeout:1e4});if(t&&t.city)return{data:t.city}}catch(t){return{error:t}}},u=async t=>{try{return{data:(await d.a.get(p.y+"/weather/forecast",{lang:p.B.lang,cid:t},{timeout:1e4})).forecast}}catch(t){return{error:t}}},g=async t=>{try{return{data:await d.a.get(p.y+"/city/list",{lang:p.B.lang,searchkey:t},{timeout:1e4})}}catch(t){return{error:t}}};i(17);var f=i(21),m=i(99),b=i.n(m),y=i(239),v=i.n(y);const w=async t=>p.B.isZh?p.h||p.r?_(t):S(t):p.h||p.r?O(t):j(t),x=async t=>{let e=p.q?36e5:6e4;t||(e=0);try{if(!f.a.requestFirefoxThrottle("/search/list",e,!0))return{error:"request throttle error"};const i=await d.a.get(p.w+"/search/list",{lang:p.B.lang,platform:p.B.platform,platformVersion:p.B.platformVersion,edition:p.e,maybe360:p.D,version:t||""+Date.now()});if(0===i.code){const t=i.data.map(t=>{const e={};return e.name=t.name,e.uuid=t.seId,e.logo=t.logo,e.desc=t.desc,e.types=t.types,e.hide=t.hide,e});return f.a.requestFirefoxThrottle("/search/list",!0,!0),{data:{list:t,hash:b()(JSON.stringify(t)),meta:i.meta}}}if(2005===i.code)return f.a.requestFirefoxThrottle("/search/list",!0,!0),{error:i};throw i}catch(t){return{error:t}}},k=f.a.getLastReqValue(d.a.jsonp),_=async t=>{var e;try{const i=await k(p.b+"/su?ie=utf-8&p=3",{wd:t},{adapter:v.a,callbackParamName:"cb"});return{data:(null===(e=null==i?void 0:i.s)||void 0===e?void 0:e.map(t=>({text:t})))||[]}}catch(t){return{error:t}}},O=async t=>{var e;try{const i=await k(p.g+"/complete/search?client=chrome",{q:t},{adapter:v.a,callbackParamName:"jsonp"});return{data:(null==i?void 0:i.length)&&(null===(e=i[1])||void 0===e?void 0:e.length)?i[1].map(t=>({text:t})):[]}}catch(t){return{error:t}}},S=async t=>{try{const e=await d.a.get(p.b+"/su?p=3&ie=UTF-8&cb=",{wd:t},{_single:!0,_delay:0}),i=/s:(\[[\w\W]*\])/.exec(e),o=JSON.parse(i[1]);return{data:o.map(t=>({text:t}))}}catch(t){return{error:t}}},j=async t=>{try{const e=await d.a.get(p.g+"/complete/search?client=chrome",{q:t},{_single:!0,_delay:200});return{data:e[2].map((t,i)=>(t||(t=e[1][i]),{text:t}))}}catch(t){return{error:t}}};var $=i(188),I=i(7),C=i.n(I),T=i(104),E=i.n(T),L=i(48),P=i.n(L);i(52),i(243),i(13),i(16),i(44);const R=p.B.lang,D=async({page:t=0,type:e,keyword:i,source:o}={})=>{try{const n=await d.a.get(p.v+"/get-icons",{lang:R,page:t,type:e,source:o,keyword:i},{_single:!0,_delay:200});if(n.success)return n.icons.forEach(t=>{if("infinity"===t.source)switch("infinity://wallpaper"===t.url&&(t.name="wallpaper_library"),t.url){case"infinity://wallpaper":case"infinity://weather":case"infinity://todos":case"infinity://notes":case"infinity://history":case"infinity://bookmarks":case"infinity://settings":t.name=i18n(t.name),t.description=i18n(t.description);break;case"infinity://extension":t.name=i18n(t.name),t.description=i18n(t.description,p.B.vendor)}t._footer=t.description||i18n("no_description")}),{data:n};throw n}catch(t){return{error:t}}},A=async t=>{try{const e=await d.a.get(p.w+"/icon/title",{url:t},{_single:!0,_delay:0,timeout:3e3});if(0===e.code)return{data:{name:e.data.title}};throw e}catch(t){return{error:t}}},M=/<title[^>]*>\s*(.*)\s*<\/title>/,N=t=>window.__INFINITY__.hasAllUrlPermission?new C.a(async e=>{let i=0;A(t).then(t=>{i+=1,t.error&&2!==i||e(t)}),(async t=>{try{const e=await d.a.get(t,{},{_single:"getUrlInfoFromFE",timeout:3e3,responseType:"text",_responseAll:!0}),i=e.data;if(i&&e.status>=200&&e.status<300){const t=i.indexOf("<title");if(t>0){const e=i.slice(t,t+200),o=M.exec(e),n=null==o?void 0:o[1];if(n)return{data:{name:n}}}}return{error:"error"}}catch(t){return{error:t}}})(t).then(t=>{i+=1,t.error&&2!==i||e(t)})}):new C.a(async e=>{e(await A(t))}),z=(t,e)=>{if(0===e.length)return e;const i=new Map,o=[];return t.forEach((t,e)=>{i.set(t,e)}),e.forEach(t=>{const e=i.get(t);o[e]=t}),o.filter(t=>!!t)},B=t=>new C.a(e=>{const i=()=>{const e=z(t,r),i=z(t,a),o=z(t,s);return e.concat(i,o)},o=t.length;let n=0;const r=[],a=[],s=[];t.forEach(t=>{const l=new Image;l.onload=function(){n+=1;const{width:l,height:c}=this,p=Math.max(l,c),d=Math.min(l,c);p/d<5?d>50&&p>100?r.push(t):d>50||p>100?a.push(t):s.push(t):s.push(t),n===o&&e(i())},l.onerror=()=>{n+=1,n===o&&e(i())},l.src=t}),setTimeout(()=>{e(i())},3e3)}),U=/\.(ico|png|jpg|jpeg|svg|webp)$/,F=async t=>{var e;try{const i=await d.a.get(t,{},{_single:"getUrlIcon",timeout:3e3,responseType:"text",_responseAll:!0}),o=i.data;if(o&&i.status>=200&&i.status<300){const n=(null===(e=i.request)||void 0===e?void 0:e.responseURL)||t;let r=((t,e)=>{const i=[];return e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi,(t,e)=>{i.push(e)}),E()(i).call(i,(e,i)=>{if(i&&U.test(i)){const o=new P.a(i,t);e.push(o.href)}return e},[])})(n,o);if(r.length<6){const t=((t,e)=>{const i=[];return e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi,(t,e)=>{i.push(e)}),E()(i).call(i,(e,i)=>{if(i&&U.test(i)){const o=new P.a(i,t);e.push(o.href)}return e},[])})(n,o);r=r.concat(t)}r.length>4&&(r.length=4);let a=await B(r);return a=Array.from(new Set(a)),a.length>2&&(a.length=2),{data:a}}return{error:""}}catch(t){return{error:t}}},W=async t=>{try{const{host:e}=new P.a(t),i=await d.a.get(p.w+"/icon/get_icon_urls",{host:e});return 0!==i.code?{error:i}:{data:i.data.map(t=>t.url)}}catch(t){return{error:t}}};function H(t){return t?t.textContent:null}function q(t){return new C.a((e,i)=>{const o=new XMLHttpRequest;o.onreadystatechange=function(){var t,n;if(4==o.readyState)if(o.responseXML){const i=o.responseXML;let r=H(i.querySelector("title"));if(r)try{r=/(\w+)@(\w+\.\w+)/.exec(r)[0]}catch(t){}const a=parseInt(H(i.querySelector("fullcount")),10),s=i.querySelectorAll("entry"),l=[];let c=-1;for(let e=0,i=s.length;e<i;e++){const i=s[e],o={id:H(i.querySelector("id")),issued:H(i.querySelector("issued")),title:H(i.querySelector("title")),summary:H(i.querySelector("summary")),link:(t=i.querySelector("link"),n="href",t?t.getAttribute(n):null),authorName:H(i.querySelector("author name")),authorEmail:H(i.querySelector("author email"))};o.issued&&(o.issued=new Date(o.issued).valueOf(),c=Math.max(c,o.issued)),l.push(o)}e({account:r,lastIssuedTime:c,count:a,emails:l})}else i()},o.onerror=i,o.open("GET",function(t){return p.f+"/mail/feed/atom?zx="+encodeURIComponent(t)}(t),!0),o.send(null)})}var V=i(126),Y=i.n(V),X=i(22);const G=async({email:t,password:e,repeatPassword:i,code:o})=>{const n={email:Y()(t).call(t),password:b()(e),repeatPassword:b()(i),code:Y()(o).call(o)};try{return await d.a.post(p.w+"/user/register",n)}catch(t){return t}},K=async({email:t,password:e})=>{const i={email:Y()(t).call(t),password:b()(e)};try{return await d.a.post(p.w+"/user/login",i)}catch(t){return t}};async function Q(t){const e=(await Object(X.b)("store-user")).userInfo.uid;try{return await d.a.post(p.w+"/user/update_profile/"+e,t,{_auth:!0})}catch(t){throw new Error(t.message)}}async function J(){try{return await d.a.get(p.w+"/user/get_user_profile",{},{_auth:!0,_proxy:!0})}catch(t){return t}}async function Z(t){const e=new FormData;e.append("file",t);try{const t=await d.a.post(p.w+"/upload/avatar",e,{_auth:!0,headers:{"Content-Type":"multipart/form-data"}});if(0===(null==t?void 0:t.code))return t;throw new Error(i18n("upload_avatar_failure"))}catch(t){throw new Error(t)}}async function tt({originPassword:t,newPassword:e}){const i=await Object(X.b)("store-user"),o=i.userInfo.uid,{token:n}=i;if(!n)throw new Error(i18n("unknown_mistake"));const r={originPassword:b()(t),newPassword:b()(e)};try{return await d.a.post(p.w+"/user/modify_password/"+o,r,{_auth:!0})}catch(t){return t}}async function et(t){try{return await d.a.post(p.w+"/user/forget_password",t)}catch(t){return t}}async function it({password:t,repeatPassword:e,email:i,code:o}){const n={password:b()(t),repeatPassword:b()(e),email:Y()(i).call(i),code:Y()(o).call(o)};try{return await d.a.post(p.w+"/user/reset_password",n)}catch(t){return t}}async function ot(t){try{return await d.a.post(`${p.w}/get_code?lang=${p.B.lang}`,t)}catch(t){return t}}async function nt(t){try{return await d.a.post(`${p.w}/get_register_code?lang=${p.B.lang}`,t)}catch(t){return t}}async function rt(t){try{return await d.a.post(p.w+"/inspce_code",t)}catch(t){return t}}async function at(){try{return await d.a.get(p.w+"/check_token",{},{_auth:!0})}catch(t){return t}}async function st(){const t=(await Object(X.b)("store-user")).userInfo.uid;try{return await d.a.post(p.w+"/user/delete/"+t,{},{_auth:!0})}catch(t){return t}}const lt=async t=>{try{return await d.a.post(p.w+"/user/login_uid",t,{timeout:1e4})}catch(t){return t}},ct=async t=>{try{return await d.a.post(p.w+"/user/v1_basic_login",t,{timeout:1e4})}catch(t){return t}},pt=async(t,e)=>{try{return await d.a.get(`${p.w}/user/user_hash?uid=${t}&secret=${e}`)}catch(t){return t}},dt=async()=>{try{const t=await d.a.get(p.w+"/get_concat_info");if(0===t.code)return{data:t.data};throw t}catch(t){return{error:t}}},ht=async(t,e)=>{try{const{response:i,stack:o,config:n}=e;let r=i||n;r&&(r=JSON.stringify(r,(t,e)=>{if(e instanceof FormData){const t={};for(const[i,o]of e)t[i]=o;return t}if(e instanceof File){return{lastModified:e.lastModified,name:e.name,size:e.size,type:e.type}}return e}));let a=await Object(X.b)("store-user");if(a){const t=["mobileuid","avatar","refreshToken","secret","gender","name"];a=JSON.stringify(a,(e,i)=>{if(!t.includes(e))return i})}const s=await d.a.post(p.w+"/collect",{type:t,user:a,stack:o,info:r,env:Object.assign({},p.B)});if(0===s.code)return{data:s.data};throw s}catch(t){return{error:t}}},ut=async t=>{await d.a.get(t,void 0,{_proxy:!0,_proxyIgnoreRes:!0})},gt=t=>{const e=JSON.stringify(t),i=(new TextEncoder).encode(e);return new Blob([i],{type:"application/json;charset=utf-8"})},ft=t=>({id:t,time:f.a.fmtTime(Number(t))}),mt=async()=>{try{const t=await d.a.get(p.w+"/sync/list",void 0,{_auth:!0,_proxy:!0});return 0!==t.code?{error:t}:(t.data.auto=t.data.auto.map(ft),t.data.manual=t.data.manual.map(ft),{data:t.data})}catch(t){return{error:t}}},bt=async(t,e,i="all")=>{try{const o=await d.a.get(p.w+"/sync/download_url",{id:t,type:e,keys:i},{_auth:!0});if(0!==o.code)return{error:o};const n=o.data;let r={};const a=await C.a.all(n.map(e=>d.a.get(e.url+"&timestampid="+("latest"===t?Date.now():t),{},{timeout:18e4})));return n.forEach((t,i)=>{const o=t.fileKey;"manual"===e?r=Object.assign(Object.assign({},r),a[i]):"auto"===e&&(r[o]=a[i])}),{data:r}}catch(t){return ht("getSyncDetail",t),{error:t}}},yt=async(t,e="")=>{const i=Object.keys(t).join(",");try{const o=await d.a.get(p.w+"/sync/token",{type:"auto",keys:i},{_auth:!0});if(0!==o.code||!o.data.length)return{error:o};const n=o.data;await C.a.all(n.map(e=>{const{url:i,key:o,token:n,host:r}=e,a=new FormData;return a.append("token",n),a.append("key",i),a.append("file",gt(t[o])),d.a.post(r,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4})})),localStorage.setItem("pre-sync-id",n[0].timestamp+"");const r=await d.a.post(p.w+"/sync/done",{type:"auto",websocketkeys:e,keys:i,record_time:n[0].timestamp},{_auth:!0});return 0!==r.code?{error:r}:{data:r.data.map(ft)}}catch(t){return ht("autoBackup",t),{error:t}}},vt=async t=>{try{const e=await d.a.get(p.w+"/sync/token",{type:"manual",keys:"data"},{_auth:!0});if(0!==e.code||!e.data.length)return{error:e};const{token:i,url:o,timestamp:n,host:r}=e.data[0],a=new FormData;a.append("token",i),a.append("key",o),a.append("file",gt(t)),await d.a.post(r,a,{headers:{"Content-Type":"multipart/form-data"},timeout:18e4});const s=await d.a.post(p.w+"/sync/done",{type:"manual",keys:"data",record_time:n},{_auth:!0});return 0!==s.code?{error:s}:{data:s.data.map(ft)}}catch(t){return ht("manualBackup",t),{error:t}}},wt=t=>"pro"===t?async function(){try{const{userInfo:t={}}=await Object(X.b)("store-user"),{uid:e,secret:i}=t,o=await d.a.get(p.v+"/user/recovery-pro",{uid:e,secret:i},{timeout:2e5});if(o.success)return{data:o.data};throw o}catch(t){return ht("getProV1Data",t),{error:t}}}():"basic"===t?async function(){try{const t=await d.a.get(p.w+"/sync/recover_basic",{},{_auth:!0,timeout:2e5});return 0!==t.code?{error:t}:{data:t.data}}catch(t){return ht("getBasicV1Data",t),{error:t}}}():void 0;var xt=i(251)},,,,,,,,,,,,,,,,,,function(t,e,i){var o,n,r,a,s;o=i(347),n=i(252).utf8,r=i(348),a=i(252).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):n.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var i=o.bytesToWords(t),l=8*t.length,c=1732584193,p=-271733879,d=-1732584194,h=271733878,u=0;u<i.length;u++)i[u]=16711935&(i[u]<<8|i[u]>>>24)|4278255360&(i[u]<<24|i[u]>>>8);i[l>>>5]|=128<<l%32,i[14+(l+64>>>9<<4)]=l;var g=s._ff,f=s._gg,m=s._hh,b=s._ii;for(u=0;u<i.length;u+=16){var y=c,v=p,w=d,x=h;c=g(c,p,d,h,i[u+0],7,-680876936),h=g(h,c,p,d,i[u+1],12,-389564586),d=g(d,h,c,p,i[u+2],17,606105819),p=g(p,d,h,c,i[u+3],22,-1044525330),c=g(c,p,d,h,i[u+4],7,-176418897),h=g(h,c,p,d,i[u+5],12,1200080426),d=g(d,h,c,p,i[u+6],17,-1473231341),p=g(p,d,h,c,i[u+7],22,-45705983),c=g(c,p,d,h,i[u+8],7,1770035416),h=g(h,c,p,d,i[u+9],12,-1958414417),d=g(d,h,c,p,i[u+10],17,-42063),p=g(p,d,h,c,i[u+11],22,-1990404162),c=g(c,p,d,h,i[u+12],7,1804603682),h=g(h,c,p,d,i[u+13],12,-40341101),d=g(d,h,c,p,i[u+14],17,-1502002290),c=f(c,p=g(p,d,h,c,i[u+15],22,1236535329),d,h,i[u+1],5,-165796510),h=f(h,c,p,d,i[u+6],9,-1069501632),d=f(d,h,c,p,i[u+11],14,643717713),p=f(p,d,h,c,i[u+0],20,-373897302),c=f(c,p,d,h,i[u+5],5,-701558691),h=f(h,c,p,d,i[u+10],9,38016083),d=f(d,h,c,p,i[u+15],14,-660478335),p=f(p,d,h,c,i[u+4],20,-405537848),c=f(c,p,d,h,i[u+9],5,568446438),h=f(h,c,p,d,i[u+14],9,-1019803690),d=f(d,h,c,p,i[u+3],14,-187363961),p=f(p,d,h,c,i[u+8],20,1163531501),c=f(c,p,d,h,i[u+13],5,-1444681467),h=f(h,c,p,d,i[u+2],9,-51403784),d=f(d,h,c,p,i[u+7],14,1735328473),c=m(c,p=f(p,d,h,c,i[u+12],20,-1926607734),d,h,i[u+5],4,-378558),h=m(h,c,p,d,i[u+8],11,-2022574463),d=m(d,h,c,p,i[u+11],16,1839030562),p=m(p,d,h,c,i[u+14],23,-35309556),c=m(c,p,d,h,i[u+1],4,-1530992060),h=m(h,c,p,d,i[u+4],11,1272893353),d=m(d,h,c,p,i[u+7],16,-155497632),p=m(p,d,h,c,i[u+10],23,-1094730640),c=m(c,p,d,h,i[u+13],4,681279174),h=m(h,c,p,d,i[u+0],11,-358537222),d=m(d,h,c,p,i[u+3],16,-722521979),p=m(p,d,h,c,i[u+6],23,76029189),c=m(c,p,d,h,i[u+9],4,-640364487),h=m(h,c,p,d,i[u+12],11,-421815835),d=m(d,h,c,p,i[u+15],16,530742520),c=b(c,p=m(p,d,h,c,i[u+2],23,-995338651),d,h,i[u+0],6,-198630844),h=b(h,c,p,d,i[u+7],10,1126891415),d=b(d,h,c,p,i[u+14],15,-1416354905),p=b(p,d,h,c,i[u+5],21,-57434055),c=b(c,p,d,h,i[u+12],6,1700485571),h=b(h,c,p,d,i[u+3],10,-1894986606),d=b(d,h,c,p,i[u+10],15,-1051523),p=b(p,d,h,c,i[u+1],21,-2054922799),c=b(c,p,d,h,i[u+8],6,1873313359),h=b(h,c,p,d,i[u+15],10,-30611744),d=b(d,h,c,p,i[u+6],15,-1560198380),p=b(p,d,h,c,i[u+13],21,1309151649),c=b(c,p,d,h,i[u+4],6,-145523070),h=b(h,c,p,d,i[u+11],10,-1120210379),d=b(d,h,c,p,i[u+2],15,718787259),p=b(p,d,h,c,i[u+9],21,-343485551),c=c+y>>>0,p=p+v>>>0,d=d+w>>>0,h=h+x>>>0}return o.endian([c,p,d,h])})._ff=function(t,e,i,o,n,r,a){var s=t+(e&i|~e&o)+(n>>>0)+a;return(s<<r|s>>>32-r)+e},s._gg=function(t,e,i,o,n,r,a){var s=t+(e&o|i&~o)+(n>>>0)+a;return(s<<r|s>>>32-r)+e},s._hh=function(t,e,i,o,n,r,a){var s=t+(e^i^o)+(n>>>0)+a;return(s<<r|s>>>32-r)+e},s._ii=function(t,e,i,o,n,r,a){var s=t+(i^(e|~o))+(n>>>0)+a;return(s<<r|s>>>32-r)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var i=o.wordsToBytes(s(t,e));return e&&e.asBytes?i:e&&e.asString?a.bytesToString(i):o.bytesToHex(i)}},,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"iMessage",(function(){return d})),i.d(e,"message",(function(){return h}));i(13),i(16);var o=i(344),n=i(1),r=i(335),a=i(366),s=i.n(a),l=i(367),c=i.n(l),p=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let d=class extends n.a{constructor(){super(...arguments),this.content="",this.type="error"}render(){const t={"infinity-message":!0,"position-top":"top"===this.type};return n.e`
      <div class=${Object(r.a)(t)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `}renderImg(){return"error"===this.type?n.e`<img .src=${s.a} />`:"warn"===this.type?n.e`<img .src=${c.a} />`:void 0}};d.styles=n.b`
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
  `,p([Object(n.g)({type:String})],d.prototype,"content",void 0),p([Object(n.g)({type:String})],d.prototype,"type",void 0),d=p([Object(n.c)("i-message")],d);const h={newInstance:function(t,e=2,i,o){let n;if(document.querySelector("i-message"))return void clearInterval(n);const r=document.createElement("i-message");return r.setAttribute("content",t),r.setAttribute("type",i),document.body.appendChild(r),0!==e&&(n=setTimeout(()=>{document.body.removeChild(r),o&&o()},1e3*e)),r},error:function(t,e,i){o.default.error(t,e),i&&setTimeout(i,e)},success:function(t,e,i){o.default.success(t,e),i&&setTimeout(i,e)},top:function(t,e,i){const o=this.newInstance(t,e,"top",i);setTimeout(()=>null==o?void 0:o.classList.add("anim"))},warn:function(t,e,i){this.newInstance(t,e,"warn",i)}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return n})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return a}));i(17);const o=i(0).r?"serviceworker":"background";let n=!1;"background"===o?n="undefined"==typeof ServiceWorkerGlobalScope&&chrome.extension.getBackgroundPage()===window:"serviceworker"===o&&(n="undefined"!=typeof ServiceWorkerGlobalScope);const r={timeout:0,taskId:""},a=()=>(""+Date.now()/1e3/1e5).split(".")[1].substr(0,8)+(""+Math.random()).split(".")[1].substr(0,8).padEnd(8,"0")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var o=i(7),n=i.n(o),r=(i(10),i(0)),a=i(26),s=i.n(a);const l=new class{constructor(){this.errorList=[],this.clearAllData=async()=>{try{await s.a.removeItem("old-data"),await s.a.removeItem("error-data")}catch(t){}}}getLocalData(){const t={};for(let e=0,i=localStorage.length;e<i;e++){const i=localStorage.key(e);t[i]=localStorage[i]}return t}async getIndexedData(){const t={};try{return await s.a.iterate((e,i)=>{t[i]=e}),t}catch(t){return await this.trackOnError(t),null}}async getOldData(){try{return await s.a.getItem("old-data")}catch(t){return await this.trackOnError(t),null}}async getErrorData(){try{return await s.a.getItem("error-data")}catch(t){return await this.trackOnError(t),null}}async exportDebugData(){const t=await this.getOldData(),e=await this.getErrorData();let i={};r.r||(i=await new n.a(t=>chrome.storage.local.get(null,t)));return{oldData:t,errorData:e,localData:this.getLocalData(),chromeData:i}}async backupOldData(t,e){try{const i=this.getLocalData(),o=await new n.a(t=>chrome.storage.local.get(null,t));let a;t&&(a=await this.getIndexedData()),await s.a.setItem("old-data",{localData:i,chromeData:o,indexedData:a,beforeUpdateVersion:e,version:r.B.extVersion})}catch(t){await this.trackOnError(t)}}async track(t){if(t)try{this.errorList=await s.a.getItem("error-data")||[];let e=t;"string"==typeof t&&(e=new Error(t)),this.errorList.push({message:e.message,stack:e.stack,time:Date.now()}),await s.a.setItem("error-data",this.errorList)}catch(t){await this.trackOnError(t)}}async trackOnError(t){try{const e=await new n.a(t=>chrome.storage.local.get("error-data",t));Array.isArray(e["error-data"])||(e["error-data"]=[]),e["error-data"].push({message:t.message,stack:t.stack,time:Date.now()}),await new n.a(t=>chrome.storage.local.set(e,t))}catch(t){localStorage["error-data"]=JSON.stringify({message:t.message,stack:t.stack})}}};e.a=l},,,function(t,e,i){"use strict";i.r(e),i.d(e,"slave",(function(){return s}));i(10),i(13),i(16),i(52);var o=i(7),n=i.n(o),r=i(253),a=i(121);const s=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new r.a,this.initChannel=()=>{"serviceworker"===a.b?this.initServiceworker():"background"===a.b&&this.initBackground()},this.awaitChannel=()=>new n.a(async(t,e)=>{"serviceworker"===a.b?this.channel?(await this.channel.active,await this.channel.controlling,t(null)):(this.initResolve.push(t),this.initReject.push(e)):"background"===a.b&&t(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:t}=await i.e(11).then(i.bind(null,462)),e=await t();if(!e)return;e.addEventListener("message",t=>{const{type:e,payload:i={}}=t.data;"master:bordcast-message"===e&&this.messageScheduler.execTask(i.type,i.payload)}),await e.active,await e.controlling,this.channel=e,this.initResolve.forEach(t=>{t()}),this.channel.postTask=this.channel.messageSW}catch(t){console.log("slave初始化错误：",t),this.initReject.forEach(t=>{t()})}},this.initBackground=()=>{this.channel={postTask:t=>new n.a((e,i)=>{chrome.runtime.sendMessage(t,t=>{chrome.runtime.lastError&&i(chrome.runtime.lastError),e(t)})})},chrome.runtime.onMessage.addListener(({type:t,payload:e,ignoreId:i})=>{"master:bordcast-message"===t?chrome.tabs.getCurrent(t=>{i!==t.id&&this.messageScheduler.execTask(e.type,e.payload)}):"slave:bordcast-message"===t&&this.messageScheduler.execTask(e.data.type,e.data.payload)})},a.a)throw new Error("it's not page");this.initChannel()}postTask(t,e,i){return new n.a(async(o,n)=>{let r=!1;await this.awaitChannel();const s=Object.assign(Object.assign(Object.assign({},a.d),{taskId:Object(a.c)()}),i);s.timeout&&setTimeout(()=>{r||o({error:"timeout"})},s.timeout);try{const i=await this.channel.postTask({type:t,payload:Object.assign({data:e},s)});r=!0,o(i)}catch(t){o({error:t})}})}listenMessage(t,e){this.messageScheduler.listenTask(t,e)}sendMessage(t,e=""){this.postTask("slave:bordcast-message",{type:t,payload:e})}}},,,,,,,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"imgConfig",(function(){return l})),i.d(e,"getRandomWallpaper",(function(){return c})),i.d(e,"getBingWallpaper",(function(){return p})),i.d(e,"getWallpapers",(function(){return d})),i.d(e,"likeWallpaper",(function(){return h})),i.d(e,"collectionWallpaper",(function(){return u})),i.d(e,"addCustomColor",(function(){return g})),i.d(e,"setCustomColorItems",(function(){return f})),i.d(e,"getCustomColor",(function(){return m})),i.d(e,"removeCustomColor",(function(){return b})),i.d(e,"uploadWallpaper",(function(){return y})),i.d(e,"getWallpapersById",(function(){return v})),i.d(e,"createWallpaperLibrary",(function(){return w})),i.d(e,"getUserWallpaperLibrary",(function(){return x})),i.d(e,"hasWallpaperLibrary",(function(){return k})),i.d(e,"getLikedWallpaper",(function(){return _})),i.d(e,"getCollectionWallpaper",(function(){return O})),i.d(e,"getWallpaperLibraryItems",(function(){return S})),i.d(e,"getUserWallpaperLibraryItemsById",(function(){return j})),i.d(e,"removeWallpaperLibraryItem",(function(){return $})),i.d(e,"removeWallpaperLibrary",(function(){return I})),i.d(e,"addImagesToLibrary",(function(){return C})),i.d(e,"renameWallpaperLibrary",(function(){return T})),i.d(e,"getNextWallpaper",(function(){return E})),i.d(e,"convertURL",(function(){return L}));i(10),i(52);var o=i(0),n=i(4),r=i(23);const a=Math.floor(screen.width*window.devicePixelRatio),s=Math.floor(203*window.devicePixelRatio),l={smallWidth:s>2560?2560:s,normalWidth:a>2560?2560:a,format:r.c?"":"format/webp/"},c=async()=>{try{const t=await n.a.get(o.v+"/random-wallpaper",{_:(new Date).getTime()});if(!t.success)throw t;const{src:e,_id:i,source:r}=t.data[0],{url:a,rawUrl:s}=L(e.rawSrc);return{data:{url:a,rawUrl:s,id:i,source:r}}}catch(t){return{error:t}}},p=async()=>{try{const t=await n.a.get(o.w+"/get_bing_wallpaper",null,{_single:"getBingWallpaper"});if(t.error)throw t.error;const{data:e}=t,{content:i,url:r,rawUrl:a}=L(e.src.rawSrc);return e.thumbnail=i,e.url=r,e.rawUrl=a,t}catch(t){return{error:t}}},d=async t=>{const{source:e}=t;t.source="all"===e?"":e;try{const e=await n.a.get(o.v+"/get-wallpaper",t,{_single:"getWallpapers"}),{data:i}=e;return i.forEach(t=>{const{content:e,url:i,rawUrl:o}=L(t.src.rawSrc);t.thumbnail=e,t.url=i,t.rawUrl=o}),{result:e}}catch(t){return{error:t}}},h=async(t,e)=>{try{const i=await n.a.post(o.w+"/like_wallpaper",{id:t,state:e},{_auth:!0});if(0!==i.code)throw i;return i}catch(t){return{error:t}}},u=async(t,e)=>{try{const i=await n.a.post(o.w+"/collection_wallpaper",{id:t,state:e},{_auth:!0});if(0!==i.code)throw i;return i}catch(t){return{error:t}}},g=async t=>{try{const e=await n.a.post(o.w+"/add_custom_color",Object.assign(Object.assign({},t),{newVer:!0}),{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},f=async t=>{try{const e=await n.a.post(o.w+"/set_custom_color_items",t,{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},m=async()=>{try{const t=await n.a.get(o.w+"/get_custom_color",null,{_auth:!0});if(0!==t.code)throw t;return t}catch(t){return{error:t}}},b=async t=>{try{const e=await n.a.post(o.w+"/remove_custom_color",{id:t,newVer:!0},{_auth:!0});if(0!==e.code)throw e;return e}catch(t){return{error:t}}},y=async t=>{try{const e=await n.a.post(o.w+"/upload_wallpaper",t,{headers:{"Content-Type":"multipart/form-data"}});if(0!==e.code)throw e;return{data:e.data}}catch(t){return{error:t}}},v=async t=>{try{const e=await n.a.get(o.w+"/get_wallpapers_by_id",{id:t});if(0!==e.code)throw e;const{data:i}=e;return i.forEach(t=>{const{content:e,url:i,rawUrl:o}=L(t.src.rawSrc);t.thumbnail=e,t.url=i,t.rawUrl=o}),{data:i}}catch(t){return{error:t}}},w=async({libraryName:t,libraryId:e,wallpapers:i})=>{try{return await n.a.post(o.w+"/create_wallpaper_library",{libraryName:t,libraryId:e,wallpapers:i},{_auth:!0})}catch(t){return{error:t}}},x=async()=>await n.a.get(o.w+"/get_user_wallpaper_library",null,{_auth:!0}),k=async t=>{try{return await n.a.get(o.w+"/has_wallpaper_library",{libraryId:t},{_auth:!0,_proxy:!0})}catch(t){return{error:t}}},_=async()=>{try{return await n.a.get(o.w+"/get_liked_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},O=async()=>{try{return await n.a.get(o.w+"/get_collection_wallpaper",null,{_auth:!0})}catch(t){return{error:t}}},S=async t=>{const e=await n.a.get(o.w+"/get_user_wallpaper_library_items",{libraryId:t});e.data.map(t=>{const{content:e,url:i,rawUrl:o}=L(t.url);return t.content=e,t.url=i,t.rawUrl=o,t});const{data:i}=e;return e.data={items:i,count:i.length},e.data},j=async t=>{try{const e=await n.a.get(o.w+"/get_user_wallpaper_library_items_by_id",{libraryItemsId:t}),{data:i}=e;return e.data={items:i,count:i.length},e.data}catch(t){return{error:t}}},$=async(t,e,i)=>{try{return await n.a.post(o.w+"/remove_wallpaper_library_item",{libraryId:t,libraryItemId:e,ext:i},{_auth:!0})}catch(t){return{error:t}}},I=async t=>{try{return await n.a.post(o.w+"/remove_wallpaper_library",{libraryId:t},{_auth:!0})}catch(t){return{error:t}}},C=async(t,e)=>{try{return await n.a.post(o.w+"/add_images_to_library",{libraryId:t,wallpapers:e},{_auth:!0})}catch(t){return{error:t}}},T=async(t,e)=>{try{return await n.a.post(o.w+"/rename_wallpaper_library",{libraryId:t,libraryName:e},{_auth:!0})}catch(t){return{error:t}}},E=async(t,e,i="library")=>{const r={source:t,type:i};e&&(r._id=e);const a=await n.a.get(o.w+"/get_next_wallpaper",r,{_single:"getNextWallpaper"});if(0!==a.code)throw new Error;const{data:s}=a,{content:l,url:c,rawUrl:p}=L(s.rawUrl);return s.thumbnail=l,s.url=c,s.rawUrl=p,a},L=t=>({rawUrl:t,url:`${t}?imageView2/2/w/${l.normalWidth}/${l.format}interlace/1`,content:`${t}?imageView2/2/w/${l.smallWidth}/${l.format}interlace/1`})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){var i=1;function o(t){var e=[];for(var i in t)e.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e.join("&")}t.exports=function(t){return new Promise((function(e,n){var r=document.createElement("script"),a=t.url;if(t.params){var s=o(t.params);s&&(a+=(a.indexOf("?")>=0?"&":"?")+s)}function l(){r&&(r.onload=r.onreadystatechange=r.onerror=null,r.parentNode&&r.parentNode.removeChild(r),r=null)}r.async=!0;var c="axiosJsonpCallback"+i++,p=window[c],d=!1;window[c]=function(t){(window[c]=p,d)||e({data:t,status:200})};var h={_:(new Date).getTime()};h[t.callbackParamName||"callback"]=c,a+=(a.indexOf("?")>=0?"&":"?")+o(h),r.onload=r.onreadystatechange=function(){r.readyState&&!/loaded|complete/.test(r.readyState)||l()},r.onerror=function(){l(),n(new Error("Network Error"))},t.cancelToken&&t.cancelToken.promise.then((function(t){r&&(d=!0,n(t))})),r.src=a,document.head.appendChild(r)}))}},,,function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i(8);const n=Symbol("LitMobxRenderReaction"),r=Symbol("LitMobxRequestUpdate");var a=i(1);class s extends(function(t){var e,i;return i=class extends t{constructor(){super(...arguments),this[e]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const t=this.constructor.name||this.nodeName;this[n]=new o.a(t+".update()",this[r]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[n]&&(this[n].dispose(),this[n]=void 0)}update(t){this[n]?this[n].track(super.update.bind(this,t)):super.update(t)}},e=r,i}(a.a)){}},,,function(t,e,i){t.exports=i(349)},,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"uploadFile",(function(){return s}));i(10);var o=i(0),n=i(4);const r=["infinity-notes-img","custom-wallpaper-library"],a={},s=async(t,e,i)=>{let s;try{if(a[i]&&a[i].endTime>Date.now())s=a[i];else{let t=null;if(t=r.includes(i)?await n.a.get(o.w+"/upload/public_private_token",{type:i},{_auth:!0}):await n.a.get(o.w+"/upload/token",{type:i}),0!==t.code||!t.data.token)return{error:t};s=t.data,s.endTime=Date.now()+1e3*(s.expires-600),a[i]=s}const{token:l,prefix:c}=s,p=new FormData;p.append("token",l),p.append("key",c+e),p.append("file",t,e);const{key:d,url:h}=await n.a.post(s.host,p,{timeout:18e4,headers:{"Content-Type":"multipart/form-data"}});return{data:{url:h,key:d}}}catch(t){return{error:t}}}},function(t,e){var i={utf8:{stringToBytes:function(t){return i.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(i.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],i=0;i<t.length;i++)e.push(255&t.charCodeAt(i));return e},bytesToString:function(t){for(var e=[],i=0;i<t.length;i++)e.push(String.fromCharCode(t[i]));return e.join("")}}};t.exports=i},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(13),i(16);class o{constructor(){this._events=new Map}listenTask(t,e){if("function"!=typeof e)return;this._events.has(t)||this._events.set(t,new Set);this._events.get(t).add(e)}execTask(t,e,...i){if(this._events.has(t)){const o=this._events.get(t);for(const t of o)t(e,...i)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i(125);
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
 */class n{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const r=new WeakMap,a=Object(o.e)(t=>e=>{if(!(e instanceof o.a)||e instanceof o.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:a}=i;let s=r.get(e);void 0===s&&(a.setAttribute("class",i.strings.join(" ")),r.set(e,s=new Set));const l=a.classList||new n(a);s.forEach(e=>{e in t||(l.remove(e),s.delete(e))});for(const e in t){const i=t[e];i!=s.has(e)&&(i?(l.add(e),s.add(e)):(l.remove(e),s.delete(e)))}"function"==typeof l.commit&&l.commit()})},function(t,e,i){"use strict";var o=i(1);e.a=o.b`.global-scrollbar {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ddd #f2f2f2;
}
.global-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.global-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: transparent;
  border: 1px dashed transparent;
  background-clip: padding-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.global-scrollbar::-webkit-scrollbar-thumb:hover,
.global-scrollbar:hover::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
  background-clip: border-box;
}
.global-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
.global-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
@media only screen and (hover: none) {
  .global-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
}
`},function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"f",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return p})),i.d(e,"e",(function(){return d})),i.d(e,"d",(function(){return h}));var o=i(7),n=i.n(o),r=(i(10),i(13),i(16),i(0)),a=i(188);function s(t){let e=0;switch(t){case"per-hour":e=r.q?36e5:2e4;break;case"twelve-hour":e=432e5;break;case"one-day":e=864e5}return e}async function l(t){let e;var i;return e="string"==typeof t?await(i=t,fetch(i).then(t=>t.blob())):t,await new n.a((t,i)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>{t(o.result)},o.onerror=i})}function c(t,e="cloud"){return t.map(t=>({type:e,id:t._id,url:t.url,content:t.thumbnail,like:t.like,source:t.source,rawUrl:t.rawUrl}))}async function p(){const t=await Object(a.getBingWallpaper)();if(t.error)throw t.error;const[e]=c([t.data]);return e}function d(t){return!["image/gif"].includes(t.type)&&t.size>window.__INFINITY__.maxLocalFileSize}async function h(){const t=await Object(a.getCustomColor)();if(!t.error)return t.data.map(t=>(t.type="color",t));console.warn(t.error)}},,,,,,,function(t,e,i){"use strict";i.r(e);var o=i(7),n=i.n(o),r=(i(13),i(16),i(242)),a=i(364),s=i(1),l=i(8),c=s.b`.i-bubble {
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
`,p=i(21),d=i(23),h=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const u=Object(d.a)("network-error.png",!1),g=Object(d.a)("error.png",!1),f=Object(d.a)("success.png",!1),m=Object(d.a)("loading.png",!1);class b extends r.a{constructor(){super(...arguments),this.popup=!1,this.showButton=!1}static _timeToHideHandler(t){if(t.showButton){const e=t.shadowRoot.querySelector(".i-bubble .i-bubble-button");e.onclick&&(e.onclick=null)}const e=t.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");let i=!1;const o=()=>{t.onmouseenter=null,t.onmouseleave=null,document.body.contains(t)&&document.body.removeChild(t),i=!0};e.addEventListener("transitionend",o,{once:!0}),e.addEventListener("transitioncancel",o,{once:!0}),setTimeout(()=>{i||o()},150),t.setPopup(!1)}static _setTimerToHide(t,e){this._clearTimerToHide(t),t.hideTimer=setTimeout(()=>this._timeToHideHandler(t),e)}static _clearTimerToHide(t){t.hideTimer&&(clearTimeout(t.hideTimer),t.hideTimer=null)}static _messageMisc(t,e,i){this.setText(t),document.body.appendChild(this),window.customElements.whenDefined("i-bubble").then(()=>(this.offsetWidth,this.setPopup(!0),new n.a(t=>requestAnimationFrame(t)))).then(()=>{i&&i(this)}),e>0&&b._setTimerToHide(this,e)}static message(t,e){const i=document.createElement("i-bubble");i.setType("message"),e=null!=e?e:this.duration,this._messageMisc.call(i,t,e)}static networkError(t,e){const i=document.createElement("i-bubble");i.setType("network-error"),e=null!=e?e:this.duration,this._messageMisc.call(i,t,e)}static success(t,e){const i=document.createElement("i-bubble");i.setType("success"),e=null!=e?e:this.duration,this._messageMisc.call(i,t,e)}static error(t,e){const i=document.createElement("i-bubble");i.setType("error"),e=null!=e?e:this.duration,this._messageMisc.call(i,t,e)}static popupLogin(t){const e=this.popup(i18n("reqeust_login_message"),{showButton:!0,btnValue:i18n("to_login"),type:"message",onBtnClick:null!=t?t:()=>{a.userStore.openModal()}}),i=Date.now();let o=this.duration2;e.onmouseenter=()=>{o=Date.now()-i,b._clearTimerToHide(e)},e.onmouseleave=()=>{b._setTimerToHide(e,o)}}static popupLoading(t){const e=this.popup(i18n("wallpaper_loading"),{duration:0,showButton:!0,btnValue:i18n("cancel"),type:"loading",onBtnClick:t});return()=>setTimeout(()=>this._timeToHideHandler(e),b.waitForReady)}static loading(t){const e=this.popup(t,{type:"loading",duration:0});return()=>setTimeout(()=>this._timeToHideHandler(e),b.waitForReady)}static popup(t,e){const{duration:i=this.duration2,btnValue:o,onBtnClick:n,type:r,showButton:a}=e,s=document.createElement("i-bubble");return s.setType(r),o&&s.setBtnValue(o),a&&s.setShowButton(a),this._messageMisc.call(s,t,i,()=>{if(s.showButton){s.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick=t=>{n&&n(t),this._timeToHideHandler(s)}}}),s}firstUpdated(){const t="\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ",e=document.createElement("style");e.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${u});${t}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${f});${t}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${g});${t}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${m});${t}\n      }\n      `)),this.shadowRoot.appendChild(e)}render(){return s.e`
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
      <section class="i-bubble-mask" @click=${p.a.stopBubble}></section>
    `}setType(t){this.type=t}setText(t){this.text=t}setBtnValue(t){this.btnValue=t}setPopup(t){this.popup=t}setShowButton(t){this.showButton=t}}b.duration=3e3,b.duration2=5e3,b.waitForReady=1e3/60,b.styles=c,h([l.g],b.prototype,"type",void 0),h([l.g],b.prototype,"text",void 0),h([l.g],b.prototype,"btnValue",void 0),h([l.g],b.prototype,"popup",void 0),h([l.g],b.prototype,"showButton",void 0),h([l.b],b.prototype,"setType",null),h([l.b],b.prototype,"setText",null),h([l.b],b.prototype,"setBtnValue",null),h([l.b],b.prototype,"setPopup",null),h([l.b],b.prototype,"setShowButton",null),window.customElements.define("i-bubble",b);e.default=b},function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));i(10),i(13),i(16),i(52);var o=i(0);var n=(new Date).valueOf();function r(){return n++}var a=function(t){return localStorage.getItem(t)},s=function(t,e){localStorage.setItem(t,e)};function l(t){var e=[];for(var i in t){var o=t[i];null!=o&&!1!==o&&(!0===o&&(o=1),e.push(encodeURIComponent(i)+"="+encodeURIComponent(o)))}return e.join("&")}var c=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i,o=this.baseInfo={v:1,tid:e.trackingId,uid:e.userId},n=a("ga:clientId");n||(i=Date.now()+performance.now(),n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=(i+16*Math.random())%16|0;return i=Math.floor(i/16),("x"===t?e:3&e|8).toString(16)})),s("ga:clientId",n)),o.cid=n,this.systemInfo={sr:screen.width+"x"+window.screen.height,sd:screen.colorDepth+"-bits",ul:navigator.language},this.extraInfo={dl:location.href.split("#")[0]}}return c(t,[{key:"getEventUrl",value:function(t){return this.getSendUrl("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"event",value:function(t){return this.send("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"getPageviewUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.getSendUrl("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"pageview",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.send("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"send",value:function(t,e){var i=p({_t:r(),t:t},this.baseInfo,this.systemInfo,e),o=this.extraInfo;for(var n in o)null==i[n]&&(i[n]=o[n]);var a=new XMLHttpRequest,s="https://www.google-analytics.com/collect?"+l(i);return a.open("GET",s,!0),a.send(null),s}},{key:"getSendUrl",value:function(t,e){var i=p({_t:r(),t:t},this.baseInfo,this.systemInfo,e),o=this.extraInfo;for(var n in o)null==i[n]&&(i[n]=o[n]);return"https://www.google-analytics.com/collect?"+l(i)}}]),t}();d.version="1.0.2";var h=d,u=i(48),g=i.n(u),f=i(4);var m=i(81);const b=new class{constructor(){this.ga=null,this.localKey="analytics-status-time",this.gap=432e5,this.getPermission=async()=>{let t=!0;if(o.n)try{const{privacyStore:e}=await Promise.all([i.e(5),i.e(6),i.e(42)]).then(i.bind(null,468));1!==e.collectData&&(t=!1)}catch(e){t=!1}return t},this.trySendStatus=t=>{const e=localStorage.getItem(this.localKey);e?(Date.now()-Number(e)>this.gap||Number(e)>Date.now())&&this.sendStatus(t):this.sendStatus(t)},this.sendPageView=async t=>{if(!await this.getPermission())return;const e=this.ga.getPageviewUrl(t);m.c.sendLog(e)},this.sendEvent=async(t,e=!1)=>{await this.getPermission()&&Object.keys(t).forEach(i=>{const o=t[i];if("object"==typeof o)Object.keys(o).forEach(t=>{const n=o[t],r=this.ga.getEventUrl({category:i,action:t,label:String(n),nonInteraction:e});m.c.sendLog(r)});else{const t=this.ga.getEventUrl({category:i,action:String(o),nonInteraction:e});m.c.sendLog(t)}})},this.sendBaidu=async t=>{await this.getPermission()&&(async(t="")=>{const e=o.B.runtimePlatform;if(null==t?void 0:t.includes("baidu.com")){const i=new g.a(t).searchParams.get("tn"),n=`https://manage-api.infinitytab.com/analysis-manager/send/60efd763a741942ac60374e1?label=${o.A.baiduLabel}&action=${i}&event=${e}`;o.r?navigator.sendBeacon(n):f.a.post(n,null,{_proxy:!0})}})(t)},this.ga=new h({trackingId:o.A.trackingId})}async sendStatus(t){try{this.sendEvent(t,!0),localStorage.setItem(this.localKey,""+Date.now())}catch(t){}}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));i(13),i(16);class o{constructor(){this._caches={},this._setCaches=t=>(...e)=>{this._caches[t]=e}}}const n=[],r=t=>new Proxy(t,{set:(t,e,i)=>null===i?(t[e]=i,!0):"function"==typeof t[e]?(console.warn("失败：重复注册"),!0):(t[e]=i,n.includes(e)&&delete t._caches[e],t._caches.hasOwnProperty(e)&&(t[e](...t._caches[e]),delete t._caches[e]),!0),get:(t,e)=>"function"==typeof t[e]?t[e]:t._setCaches(e)})},function(t,e){var i,o;i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&o.rotl(t,8)|4278255360&o.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=o.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],i=0,o=0;i<t.length;i++,o+=8)e[o>>>5]|=t[i]<<24-o%32;return e},wordsToBytes:function(t){for(var e=[],i=0;i<32*t.length;i+=8)e.push(t[i>>>5]>>>24-i%32&255);return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],i=0;i<t.length;i+=2)e.push(parseInt(t.substr(i,2),16));return e},bytesToBase64:function(t){for(var e=[],o=0;o<t.length;o+=3)for(var n=t[o]<<16|t[o+1]<<8|t[o+2],r=0;r<4;r++)8*o+6*r<=8*t.length?e.push(i.charAt(n>>>6*(3-r)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],o=0,n=0;o<t.length;n=++o%4)0!=n&&e.push((i.indexOf(t.charAt(o-1))&Math.pow(2,-2*n+8)-1)<<2*n|i.indexOf(t.charAt(o))>>>6-2*n);return e}},t.exports=o},function(t,e){function i(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(i(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&i(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,i){var o=i(350);t.exports=o},function(t,e,i){i(238);var o=i(351),n=i(124),r=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.keys;return t===r||t instanceof Array&&e===r.keys||a.hasOwnProperty(n(t))?o:e}},function(t,e,i){var o=i(352);t.exports=o},function(t,e,i){i(189);var o=i(176);t.exports=o("Array").keys},function(t,e,i){"use strict";i(13),i(16);var o=i(1),n=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let r=class extends o.a{constructor(){super(...arguments),this.src=""}render(){return o.e`
      <div class="svg" style="-webkit-mask-image: url(${this.src})"></div>
    `}};r.styles=o.b`
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
  `,n([Object(o.g)({type:String})],r.prototype,"src",void 0),r=n([Object(o.c)("i-svg")],r)},,function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i(13),i(16),i(17),i(44);var o=i(1),n=i(372),r=i.n(n),a=(i(371),i(368),o.b`/*!
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
`),s=o.b`:host {
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
`,l=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.a{constructor(){super(...arguments),this.modalStatus=!1,this.rgba="",this.initRgba="",this.title="",this.showImg=!1,this.cropper=null}static create(t){const e=null==t?void 0:t.title,i=document.body,o=document.createElement("i-cropper");return e&&o.setAttribute("title",e),i.appendChild(o),this.instance=o,o}static destroy(){var t,e;null===(e=null===(t=this.instance)||void 0===t?void 0:t.parentNode)||void 0===e||e.removeChild(this.instance),this.instance=null}init(t,e){this.showImg=!1,this.rgba=e||"transparent",this.initRgba=e||"transparent",this.cropper?(this.cropper.replace(t),this.cropper.reset()):(this.$img.src=t,this.cropper=new r.a(this.$img,{aspectRatio:1,zoomOnWheel:!0,autoCropArea:.9999,preview:this.$preview,checkCrossOrigin:!1,dragMode:"move",ready:()=>{this.showImg=!0}}))}close(t=!0){this.modalStatus=!1,this.showImg=!1,t&&(this.rgba="")}show(){this.modalStatus=!0}_rotateCropper(t){this.cropper.rotate(t)}_scaleCropper(t){this.cropper.zoom(t)}_resetCropper(){this.rgba=this.initRgba,this.cropper.reset(),requestAnimationFrame(()=>{this.$colorPicker.resetActiveIndex()})}_onSubmitImg(){this.cropper.getCroppedCanvas({minWidth:512,minHeight:512,maxWidth:600,maxHeight:600}).toBlob(t=>{const e=new CustomEvent("on-change",{detail:{data:t,color:this.rgba}});this.dispatchEvent(e),this.close()},"image/png")}_pickColor(t){const{value:e}=t.detail;this.rgba=e}render(){return o.e` <div class="img-modal ${this.modalStatus?"show":"hide"}">
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
    </div>`}};c.styles=[s,a],c.instance=null,l([Object(o.h)(".file-img")],c.prototype,"$img",void 0),l([Object(o.h)(".preview")],c.prototype,"$preview",void 0),l([Object(o.h)("i-colorpicker")],c.prototype,"$colorPicker",void 0),l([Object(o.g)({type:Boolean})],c.prototype,"modalStatus",void 0),l([Object(o.g)({type:String})],c.prototype,"rgba",void 0),l([Object(o.g)({type:String})],c.prototype,"title",void 0),l([Object(o.f)()],c.prototype,"showImg",void 0),c=l([Object(o.c)("i-cropper")],c)},function(t,e,i){"use strict";i.d(e,"a",(function(){return E}));var o=i(382),n=i.n(o);function r(t,e,i){return e in t?n()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=i(48),s=i.n(a),l=i(7),c=i.n(l),p=(i(17),i(10),i(44),i(52),i(1)),d=i(242),h=p.b`:host {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 20px 60px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
textarea,
input {
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.box-dynamic {
  padding-bottom: 30px;
}
.item-icon {
  height: 70px;
}
.img-item-box:not([hidden]) {
  display: flex;
  align-items: flex-end;
}
.img-item {
  width: 60px;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.item {
  position: relative;
  margin-bottom: 20px;
}
.item .label-box {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.item .label-box .label {
  font-weight: 500;
  color: #333333;
}
.item .label-box .tip-question {
  margin-left: 2px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.item #icon-preview {
  border: 4px solid #f6f6f6;
  transform: scale(0.25);
  transform-origin: left top;
  position: relative;
  border-radius: 30px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;
}
.item .img-dropper {
  position: relative;
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 6px;
  cursor: pointer;
}
.item .img-dropper[hidden] {
  display: none;
}
.item .img-preview {
  background-size: cover;
  border: 1px solid #dadce0;
  box-sizing: border-box;
}
.item .img-preview .editing:hover {
  opacity: 1;
}
.item .img-preview .editing {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
}
.item .img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.item .img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.item .img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
}
.item input::placeholder,
.item .input::placeholder,
.item textarea::placeholder {
  color: #999999;
}
.item input[type='text'],
.item .input {
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
}
.item .input {
  height: auto;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
}
.item input:-moz-read-only {
  cursor: not-allowed;
}
.item input:read-only {
  cursor: not-allowed;
}
.item textarea.target {
  outline: none;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  resize: none;
  word-break: break-all;
  color: #333333;
}
.item input[type='file'] {
  width: 100px;
}
.item.btn-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item.btn-box infinito-button {
  width: 220px;
  height: 38px;
  background: #333333;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #ffffff;
}
.item.btn-box infinito-button:disabled {
  background: rgba(51, 51, 51, 0.7);
}
.item.btn-box .btn-cancel {
  margin-top: 14px;
  background: #eeeeee;
  border-radius: 6px;
  font-size: 14px;
  color: #333333;
}
.item.btn-box .btn-cancel:hover {
  background: #c8c8c8;
}
.del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  cursor: pointer;
  transition: transform 0.2s;
}
.del:hover {
  transform: scale(1.1);
}
.svg-box {
  width: 70px;
  height: 70px;
  border: 1px solid #f6f6f6;
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  overflow: hidden;
}
`,u=i(355),g=(i(368),i(353),i(371),i(8)),f=i(81),m=i(21),b=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class y{async getTargetInfo(t,e){const{data:i,error:o}=await f.b.getUrlInfoWithPermission(t.split("?")[0]);if(null==o?void 0:o.__CANCEL__)return;if(o)return e?{name:"",bgText:""}:null;const{name:n}=i;let r="";return r=n.length>3?n.substr(0,2):n,{name:n,bgText:r}}async uploadIcon(t,e){var i,o;const{data:n,error:r}=await f.f.uploadFile(t,m.a.randomId("icon-")+".png",e);if(r){return{error:(null===(o=null===(i=r.response)||void 0===i?void 0:i.data)||void 0===o?void 0:o.error)?r.response.data.error:r.message,url:""}}return{url:n.url,error:""}}}b([g.b],y.prototype,"getTargetInfo",null),b([g.b],y.prototype,"uploadIcon",null);const v=new y;var w=i(2),x=i(120),k=(i(13),i(16),i(336)),_=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let O=class extends p.a{constructor(){super(...arguments),this.show=!1,this.closeModal=()=>{this.show=!1;const t=new CustomEvent("on-close",{});this.dispatchEvent(t)}}render(){return p.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.show} .onCancel="${this.closeModal}">
        <div slot="body">
          <div class="container">
            <h2 class="title">${i18n("tip_question_title")}</h2>
            <span class="gap-line"></span>
            <div class="global-scrollbar" style="height: calc(100% - 81px);">
              <div class="content">
                <div class="card">
                  <div class="label">${i18n("tip_question_1")}</div>
                  <div class="img-box">
                    <img class="item-img" src="${i(410)}" alt="" />
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_2")}</div>
                  <div class="img-box img-box-2">
                    <img class="item-img" src="${i(411)}" alt="" />
                    <div class="item-tip">${i18n("copy")}</div>
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_3")}</div>
                  <div class="img-box img-box-3">
                    <img class="item-img" src="${i(412)}" alt="" />
                    <div class="item-tip tip3-box">
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("search_engine")}</span>
                        </div>
                        <span class="input">${i18n("placeholder_name")}</span>
                      </div>
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("website_search_replace_char")}</span
                          ><img class="tip-question" src="${i(374)}" alt="" />
                        </div>
                        <span class="input">https://www.google.com/search?sxsrf=ALeKk02...</span>
                        <img class="tip3-arrow" src="${i(413)}" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </infinito-modal>
    `}};O.styles=[k.a,p.b`
      .container {
        width: 800px;
        height: 70vh;
        min-height: 400px;
        max-height: 1000px;
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
      }
      .title {
        margin: 26px auto;
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
      }
      .gap-line {
        margin: auto;
        display: block;
        width: 720px;
        height: 1px;
        background: #ebebeb;
      }
      .content {
        padding: 33px 114px 50px;
        padding-right: 0;
        width: 572px;
        box-sizing: content-box;
        text-align: left;
      }
      .card {
        padding-bottom: 50px;
      }
      .label {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
      .img-box {
        position: relative;
        margin-top: 20px;
      }
      .img-box .item-img {
        width: 572px;
        height: 235px;
      }
      .item-tip {
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
      .img-box-2 .item-tip {
        top: 86px;
        left: 396px;
      }
      .tip3-box {
        top: 64px;
        left: 138px;
      }
      .tip3-item {
        position: relative;
        margin-bottom: 20px;
        width: 320px;
      }
      .tip3-label-box {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
      }
      .tip3-label {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #333333;
        line-height: 20px;
      }
      .tip3-item .input {
        display: block;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        word-break: keep-all;
        border-bottom: 1px solid #eeeeee;
        box-sizing: content-box;
        padding-bottom: 6px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #656565;
        opacity: 0.8;
        width: 319px;
        height: 20px;
        line-height: 20px;
      }
      .tip-question {
        margin-left: 2px;
        width: 16px;
        height: 16px;
      }
      .tip3-arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        left: -34px;
        bottom: 10px;
      }
    `],_([Object(p.g)({type:Boolean})],O.prototype,"show",void 0),O=_([Object(p.c)("tip-question")],O);var S=i(370),j=i(237);function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function I(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var C,T=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let E=C=class extends d.a{constructor(){super(),this.sideRatio=1,this.isEdit=!1,this.popup=!1,this.iconType="custom-icon",this.readonlyTarget=!1,this.textareaHeight="auto",this.subSpin=!1,this.validate={name:null,image:null,target:null},this.validateMsg={image:""},this.tipQuestion=!1,this.preViewImgUrl="",this.cropper=null,this.manualBgText=!1,this.canvasCtx=null,this.canvasTextHeight=null,this.preViewImgData=null,this.needUploadImage=!1,this.needUploadColor=!1,this.colorTypeDefaultColor="rgba(255,71,52,1)",this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(109,9,255,1)","rgba(255,36,160,1)"],this.value=Object.assign({},C.defaultValue)}get previewFont(){return 3*this.value.bgFont+"px 'PingFang SC', 'Microsoft Yahei', monospace, sans-serif"}get colorType(){return"color"===this.value.bgType}get imageType(){return"image"===this.value.bgType}firstUpdated(){this.initCanvas(),this.popup||this.initCropper()}disconnectedCallback(){u.a.destroy(),super.disconnectedCallback()}setTextareaHeight(){const t=this.value.bgText.split("\n");if(1===t.length)this.textareaHeight="auto";else{const e=16*t.length;this.textareaHeight=e+2+"px"}}initCropper(){this.cropper=u.a.create(),this.cropper.addEventListener("on-change",async t=>{const{data:e,color:i}=t.detail;this.value.bgColor=i,this.preViewImgData=e;const o=this.preViewImgUrl;this.preViewImgUrl=s.a.createObjectURL(this.preViewImgData),s.a.revokeObjectURL(o),this.needUploadImage=!0,this.value.bgImage&&this.changeValue({bgImage:""}),this._validateImg()})}initCanvas(){this.$preview&&(this.canvasCtx=this.$preview.getContext("2d"),this.canvasCtx.textAlign="center",this.canvasCtx.textBaseline="middle",this.popup?this.rerenderCanvas(!0,!0):this.rerenderCanvas(!0,!1))}rerenderCanvas(t,e=!0){}_chooseImg(t){const e=(t.target.files||t.dataTransfer.files)[0],i=new FileReader;i.readAsDataURL(e),t.currentTarget.value=null,i.onload=()=>{this.cropper.init(i.result,this.value.bgColor),this.cropper.show()}}_changeTarget(t,e=!1){e?this.changeValue({target:t.currentTarget.value.replace(/%25s/g,"%s")}):this.changeValue({target:t.currentTarget.value}),this._validateTarget(),this.getTargetInfo()}async getTargetInfo(){let t=this.value.target;if(!t)return;t.includes(":")||(t="http://"+t);if(!/^https?:\/\/(.+\.)+.+/.test(t))return;const e=await v.getTargetInfo(t,this.isAutoName);e&&(this.changeValue({name:e.name,bgText:e.bgText}),this.rerenderCanvas(),this.isAutoName=!0)}_validateTarget(){const t=this.value.target;let e=!0;return t&&("search-engine-custom"!==this.iconType&&"search-engnie-add"!==this.iconType||t.includes("%s"))||(e=!1),this.changeValidate({target:e}),e}_validateImg(t=""){return"image"===this.value.bgType?this.preViewImgUrl||this.value.bgImage?this.changeValidate({image:!0}):this.changeValidate({image:!1},{image:t}):this.changeValidate({image:!0}),this.validate.image}_validateName(t){return t||"custom-icon"===this.iconType?this.changeValidate({name:!0}):this.changeValidate({name:!1}),t}getAllDate(){}_validateAll(){this.changeValue({name:this.$name.value,target:this.$target.value}),this._validateName(this.value.name),this._validateImg(this.validateMsg.image),this._validateTarget();for(const t in this.validate)if(Object.prototype.hasOwnProperty.call(this.validate,t)){if(!1===this.validate[t])return!1}return!0}changeValidate(t,e){this.validate=Object.assign(Object.assign({},this.validate),t),e&&(this.validateMsg=Object.assign(Object.assign({},this.validateMsg),e))}saveImage(){return new c.a((t,e)=>{"color"===this.value.bgType?(this.changeValue({bgColorImage:null}),t(null)):"image"===this.value.bgType&&v.uploadIcon(this.preViewImgData,this.iconType).then(({url:i,error:o})=>o?e(o):(this.changeValue({bgImage:i}),t(i)))})}async _submit(){if(!this._validateAll())return;if(this.needUploadImage&&"image"===this.value.bgType||this.needUploadColor&&"color"===this.value.bgType||""===this.value.bgColorImage&&"color"===this.value.bgType)try{this.subSpin=!0,await this.saveImage(),this.subSpin=!1}catch(t){return this.subSpin=!1,void(t&&t.message?x.message.error(t.message):x.message.error(t||"upload error"))}this.changeValue({bgColorImage:null});const t={value:Object.assign({},this.value)};"color"!==this.value.bgType||this.value.bgColor||(t.value.bgColor=this.colorTypeDefaultColor),t.value.target.includes(":")||(t.value.target="http://"+this.value.target);const e=new CustomEvent("on-submit",{detail:t});this.dispatchEvent(e)}_cancel(){const t=new CustomEvent("on-cancel");this.dispatchEvent(t)}changeValue(t){this.value=Object.assign(Object.assign({},this.value),t)}reset(){this.validate={name:null,image:null,target:null},this.validateMsg={image:""},this.preViewImgUrl&&(s.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgUrl=""),this.preViewImgData=null,this.needUploadImage=!1,this.needUploadColor=!1,this.value=Object.assign({},C.defaultValue),this.canvasCtx.clearRect(0,0,this.$preview.width,this.$preview.height),this.canvasCtx.fillStyle=this.colorTypeDefaultColor,this.canvasCtx.fillRect(0,0,this.$preview.width,this.$preview.height)}_editImg(){this.cropper.init(this.preViewImgUrl||this.value.bgImage,this.value.bgColor),this.cropper.show()}_delImg(t){t.stopPropagation(),this.preViewImgUrl?(this.preViewImgData=null,s.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgUrl=""):this.changeValue({bgImage:""})}openTipQuestion(){this.tipQuestion=!0}_renderBasic(){const{value:t}=this;return"custom-icon"===this.iconType?p.e`<div .hidden="${this.popup}" class="item">
          <div class="label-box">
            <span class="label">${Object(w.i18n)("website_address")}</span
            ><span .hidden="${!1!==this.validate.target}" class="error">*${Object(w.i18n)("please_enter_url")}</span>
          </div>
          <input
            class="target"
            autocomplete="off"
            type="text"
            .value="${t.target||""}"
            .placeholder="${Object(w.i18n)("website_address")}"
            .readOnly="${this.readonlyTarget}"
            @input=${t=>{this._changeTarget(t)}}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(w.i18n)("website_name")}</span
            ><span .hidden="${!1!==this.validate.name}" class="error">*${Object(w.i18n)("name_error")}</span>
          </div>
          <input
            autocomplete="off"
            type="text"
            class="name"
            .value="${t.name||""}"
            .placeholder="${Object(w.i18n)("website_name")}"
            @input=${t=>{this.isAutoName=!1;const e=t.currentTarget.value;if(!this.manualBgText){let t="";t=e.length>3?e.substr(0,2):e,this.changeValue({bgText:t}),this.rerenderCanvas()}this._validateName(t.currentTarget.value)}}
          />
        </div>`:p.e` <div class="item">
          <div class="label-box">
            <span class="label">${Object(w.i18n)("search_engine")}</span
            ><span .hidden="${!1!==this.validate.name}" class="error">*${Object(w.i18n)("search_engine_error")}</span>
          </div>
          <input
            autocomplete="off"
            .value="${t.name||""}"
            type="text"
            class="name"
            .placeholder="${Object(w.i18n)("placeholder_name")}"
            @input=${t=>{this.isAutoName=!1,this._validateName(t.currentTarget.value)}}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(w.i18n)("website_search_replace_char")}</span
            ><img
              @click="${this.openTipQuestion}"
              class="tip-question"
              src="${i(374)}"
              alt=""
            /><span .hidden="${!1!==this.validate.target}" class="error">*${Object(w.i18n)("format_error")}</span>
          </div>
          <textarea
            class="target global-scrollbar"
            rows="1"
            @input="${t=>this._changeTarget(t,!0)}"
            autocomplete="off"
            .value="${t.target||""}"
            .placeholder="${Object(w.i18n)("website_address")}"
          ></textarea>
        </div>`}render(){const t=this.sideRatio>.7?0:300*(this.sideRatio-.7),{value:e}=this;return p.e`
      ${this._renderBasic()}
      <div .hidden="${this.popup}" class="item">
        <infinito-radio-group
          @on-change="${t=>{if(this.changeValue({bgType:t.detail.selected}),"color"===t.detail.selected&&(this.rerenderCanvas(!0),!this.value.bgText&&this.value.name)){let t="";t=this.value.name.length>3?this.value.name.substr(0,2):this.value.name,this.changeValue({bgText:t})}}}"
          .selected="${e.bgType}"
        >
          <infinito-radio value="color">${Object(w.i18n)("pure_color")}</infinito-radio>
          <infinito-radio value="image">${Object(w.i18n)("icon")}</infinito-radio>
        </infinito-radio-group>
      </div>
      <div class="box-dynamic">
        <div .hidden="${!this.colorType}" class="item item-icon">
          <div class="svg-box">
            <div class="svg-text" style="">
              ${Object(S.a)(Object(j.a)(I(I({},this.value),{},{bgColor:this.value.bgColor||this.colors[0]})))}
            </div>
          </div>
          <!-- <canvas id="icon-preview" width="280" height="280"></canvas> -->
        </div>
        <div .hidden="${!this.colorType}" class="item">
          <div class="label-box"><span class="label">${Object(w.i18n)("show_name")}</span></div>
          <textarea
            class="input global-scrollbar"
            rows="1"
            style="height:${this.textareaHeight}"
            autocomplete="off"
            @input="${t=>{this.manualBgText=!0,this.changeValue({bgText:t.currentTarget.value.slice(0,80)}),this.setTextareaHeight(),this.rerenderCanvas(),this.isAutoName=!1}}"
            .value="${e.bgText}"
            .placeholder="${Object(w.i18n)("show_name")}"
          ></textarea>
        </div>
        <div .hidden="${!this.colorType}" class="item">
          <div class="label-box"><span class="label">${Object(w.i18n)("font_size")}</span></div>
          <infinito-slider
            @on-change="${t=>{this.changeValue({bgFont:t.detail.value}),this.rerenderCanvas(!0)}}"
            .value=${e.bgFont}
            .min=${14}
            .max=${74}
          ></infinito-slider>
        </div>
        <div .hidden="${!this.colorType}" class="item">
          <div class="label-box"><span class="label">${Object(w.i18n)("color")}</span></div>
          <i-colorpicker
            .side="${!this.popup}"
            .value="${e.bgColor||this.colorTypeDefaultColor}"
            .colors="${this.colors}"
            .offsetRight="${t}"
            @on-change="${t=>{this.changeValue({bgColor:t.detail.value}),this.rerenderCanvas()}}"
          ></i-colorpicker>
        </div>
        <div .hidden="${!this.imageType}" class="item img-item-box">
          <div class="img-item">
            <input
              @drop="${this._chooseImg}"
              accept="image/*"
              @change="${this._chooseImg}"
              type="file"
              id="imgType"
              style="position:absolute;clip:rect(0 0 0 0);"
            />
            <label .hidden="${!!e.bgImage||!!this.preViewImgUrl}" class="img-dropper" for="imgType">
              <i-usesvg style="color:#C3C3C3;width:22px;height:22px" type="icon-xingzhuangjiehe2x" iconfont></i-usesvg>
            </label>
            <div
              .hidden="${!e.bgImage&&!this.preViewImgUrl}"
              class="img-dropper img-preview"
              style="background-color:${this.value.bgColor||"transparent"}; background-image: url('${this.preViewImgUrl||e.bgImage}')"
              @click="${this._editImg}"
            >
              <div class="editing">
                <img class="editing-icon" src="${i(414)}" alt="" />
              </div>
              <img class="del" @click="${this._delImg}" src="${i(415)}" alt="" />
            </div>
          </div>
          <span .hidden="${!1!==this.validate.image}" class="error"
            >* ${this.validateMsg.image||Object(w.i18n)("please_upload_photos")}</span
          >
        </div>
      </div>
      <div class="item btn-box">
        <infinito-button primary .loading="${this.subSpin}" @click="${this._submit}"
          >${Object(w.i18n)("confirm")}</infinito-button
        >
        ${"custom-icon"!==this.iconType||this.isEdit?p.e`<infinito-button class="btn-cancel" @click="${this._cancel}">${Object(w.i18n)("cancel")}</infinito-button>`:""}
      </div>
      <infinito-portal-entrance destination="tip-question">
        <tip-question
          @on-close="${()=>{this.tipQuestion=!1}}"
          .show="${this.tipQuestion}"
        ></tip-question>
      </infinito-portal-entrance>
    `}};E.styles=[k.a,h],E.defaultValue={bgType:"color",bgColor:"",bgFont:30,bgText:"",bgImage:"",target:"",name:"",bgColorImage:""},T([Object(p.g)({type:Number})],E.prototype,"sideRatio",void 0),T([Object(p.g)({type:Boolean})],E.prototype,"isEdit",void 0),T([Object(p.g)({type:Boolean})],E.prototype,"popup",void 0),T([Object(p.g)({type:String})],E.prototype,"iconType",void 0),T([Object(p.g)({type:Boolean})],E.prototype,"readonlyTarget",void 0),T([Object(p.g)({type:Object})],E.prototype,"value",void 0),T([Object(p.f)()],E.prototype,"textareaHeight",void 0),T([Object(p.f)()],E.prototype,"subSpin",void 0),T([Object(p.f)()],E.prototype,"isAutoName",void 0),T([Object(p.f)()],E.prototype,"validate",void 0),T([Object(p.f)()],E.prototype,"validateMsg",void 0),T([Object(p.f)()],E.prototype,"tipQuestion",void 0),T([Object(p.f)()],E.prototype,"preViewImgUrl",void 0),T([Object(p.h)(".target")],E.prototype,"$target",void 0),T([Object(p.h)(".name")],E.prototype,"$name",void 0),T([Object(p.h)("#icon-preview")],E.prototype,"$preview",void 0),E=C=T([Object(p.c)("i-editicon")],E)},,,,,,,function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return p}));i(13),i(16),i(10),i(52);var o=i(8),n=i(22),r=i(177),a=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const s={},l=new Set;class c{constructor(){this.firstSync=!1,this.syncTabTime=0,this._lockRollback=!1,this.isRollbackFromStorage=!1,this.backupFileKey="",this.backupValueKeys=[],this.rollbackFromStorage=()=>null,this.stopToStorageReaction=()=>{},this.stopAutoBackupReaction=()=>{},this.convertBackupEquals=t=>t}async initSyncStore(t,e,i={},a,l=20){if(s[t])throw new Error("storage key 重复");s[t]=this,0!==e.length&&(this.rollbackFromStorage=async()=>{let r=!1;const s=Object.create(null);Object.keys(i).forEach(t=>{e.includes(t)&&(s[t]=i[t])});try{const i=await Object(n.b)(t,a),o=i?Object.keys(i):[];i&&o.forEach(t=>{e.includes(t)&&(s[t]=i[t])}),this.firstSync||i&&!e.some(t=>!o.includes(t))||(r=!0)}catch(t){console.error("storageSync",t)}this.isRollbackFromStorage=!0,this.stopToStorageReaction(),this.stopAutoBackupReaction(),Object(o.i)(()=>{for(const t in s)this[t]=s[t];this.firstSync||(this.firstSync=!0)}),this.restartAutoBackupReaction(),this.stopToStorageReaction=Object(o.h)(()=>{const t={};return e.forEach(e=>{t[e]=Object(o.j)(this[e])}),t},e=>{this.isRollbackFromStorage=!1,Object(n.e)(t,e,a),Object(o.i)(()=>{this.syncTabTime=Date.now()})},{equals:o.d.structural,delay:l,fireImmediately:r})},await this.rollbackFromStorage(),Object(o.h)(()=>this.syncTabTime,e=>{e&&r.slave.sendMessage("tabs-sync",t)},{delay:60}))}restartAutoBackupReaction(t=!1){this.stopAutoBackupReaction(),this.stopAutoBackupReaction=Object(o.h)(()=>{const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(o.j)(this[e])}),t},t=>{(async(t,e)=>{try{const{syncStore:o}=await Promise.all([i.e(5),i.e(6),i.e(39)]).then(i.bind(null,461));o.pushAutoBackupPipe({[t]:e})}catch(t){}})(this.backupFileKey,t).catch()},{fireImmediately:t,equals:(t,e)=>{const i=this.convertBackupEquals(t),n=this.convertBackupEquals(e);return o.d.structural(i,n)},delay:40})}initAutoBackup(t,e){if(l.has(t))throw new Error("file key 重复");l.add(t),0!==e.length&&(this.backupFileKey=t,this.backupValueKeys=[...e])}async getBackupData(){const t={};return this.backupValueKeys.forEach(e=>{t[e]=Object(o.j)(this[e])}),t}}a([o.g],c.prototype,"firstSync",void 0),a([o.g],c.prototype,"syncTabTime",void 0),a([o.b],c.prototype,"initSyncStore",null);const p=t=>{const e=s[t];(null==e?void 0:e._lockRollback)||e.rollbackFromStorage()}},function(t,e,i){"use strict";i.r(e),i.d(e,"userStore",(function(){return x}));i(10),i(52),i(13),i(16),i(17);var o=i(7),n=i.n(o),r=i(245),a=i.n(r),s=i(104),l=i.n(s),c=i(8),p=i(363),d=i(81),h=i(0),u=i(120),g=i(26),f=i.n(g),m=i(196),b=i(177),y=i(365),v=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class w extends p.a{constructor(){super(),this.isExpired=!1,this.isLogin=!1,this.token="",this.userInfo={},this.refreshToken="",this.userProfilePromise=n.a.resolve(),this.wpColorUpdate=0,this.logining=!1,this.modalOpen=!1,this.removeAccountDisableSec=10,this.removeAccountDisableTimer=null,this.showLoginTipModal=!1,this.profileModal=!1,this.syncListModal=!1,this.isModify=!1,this.isShowLogoutConfirm=!1,this.showConfirmOpt="",this.clearAllData=!1,this.loading=!1,this.URL=h.w}setWpColorUpdate(t){this.wpColorUpdate=t}get qrcode(){if(this.isLogin&&m.e){const{uid:t,secret:e}=this.userInfo;return`${this.URL}/user/user_qr?uid=${t}&secret=${e}`}}closeModal(){this.modalOpen=!1}openModal(){this.modalOpen=!0}toggleLoginTipModal(){this.showLoginTipModal=!this.showLoginTipModal}closeLoginTipModal(){this.showLoginTipModal=!1}closeProfileModal(){this.profileModal=!1}openProfileModal(){this.profileModal=!0}closeSyncListModal(){this.syncListModal=!1}openSyncListModal(){this.syncListModal=!0}openModify(){this.isModify=!0}async modifyProfile(t){try{const e=await d.g.updateProfile(t);Object(c.i)(()=>{if(e&&0===e.code){const{user:{name:t,gender:i,avatar:o}}=e.data;this.userInfo.name=t,this.userInfo.gender=i,this.userInfo.avatar=o,this.closeModify()}else u.message.error(i18n("update_data_failure"))})}catch(t){u.message.error(t.message)}}async getUserProfile(){const t=await d.g.getUserProfile();Object(c.i)(()=>{if(t)if(0===t.code&&this.isLogin){const{gender:e,name:i,avatar:o}=t.data;this.userInfo.name=i,this.userInfo.gender=e,this.userInfo.avatar=o,this.userInfo["auto-backup"]=t.data["auto-backup"],this.userInfo["wp-color-update"]=t.data["wp-color-update"]}else 3012===t.code&&(u.message.error(t.message),this.exitAccount())})}async updateAvatar(t){try{return await d.g.uploadAvatar(t)}catch(t){u.message.error(i18n("upload_avatar_failure"))}}closeModify(){this.isModify=!1}thirdPartyLogin(t){let e;switch(this.logining=!0,t){case"facebook":e=this.URL+"/login/facebook";break;case"google":e=this.URL+"/login/google";break;case"qq":const t=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/qq");e="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101410947&redirect_uri="+t;break;case"sina":e=this.URL+"/login/weibo";break;case"wechat":const i=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/wechat");e="https://open.weixin.qq.com/connect/qrconnect?state=123&appid=wx5af98300f5d18d16&response_type=code&scope=snsapi_login&redirect_uri="+i}setTimeout(async()=>{const t=Math.floor(window.screenY+200),i=Math.floor(window.screenX+window.innerWidth/3),o=window.open(e,"_blank",`top=${t},left=${i},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);if(this.opener=o,h.n)return;const n=setInterval(()=>{o.postMessage({from:"origin_login"},"*")},300),r=t=>{if(!t.data&&!t.data.key&&"login"!==t.data.key)return;clearInterval(n),window.removeEventListener("message",r,!1);const{message:e}=t.data;this.login3rdSuccess(e)};window.addEventListener("message",r,!1)},300)}async login(t){const e=await d.g.login(t);Object(c.i)(()=>{if(!e||0!==e.code)throw u.message.error(e.message),new Error(e.code);this.loginEmailSuccess(e.data.user),this.setToken(e.data),this.setRefreshToken(e.data.refreshToken)})}async setMobileUid(){if(m.e){const{uid:t,secret:e}=this.userInfo,i=await d.g.getMobileUid(t,e);if(0===(null==i?void 0:i.code)){const{mobileuid:t}=i.data;Object(c.i)(()=>{this.userInfo.mobileuid=t})}}}async loginEmailSuccess(t){this.logining=!1,this.closeModal(),this.isLogin=!0,this.userInfo=t,this.isExpired=!1,await this.setMobileUid()}setUserData(t){this.logining=!1,this.closeModal(),this.isLogin=t.isLogin,this.userInfo=t,this.isExpired=!1;["token","refreshToken","isLogin"].forEach(t=>delete this.userInfo[t])}async login3rdSuccess(t){if(!t||!Object.keys(t).length)return void this.cancelLogin();const e=t["login-type"];if(["qq","wechat"].includes(e)){const e=await d.g.loginWithUid(t);0===e.code?Object(c.i)(()=>{this.setUserData(t),this.setToken(e.data),this.setRefreshToken(e.data.refreshToken)}):3006===e.code&&u.message.error("获取token失败")}else this.setUserData(t),this.setToken(t),this.setRefreshToken(t.refreshToken);await this.setMobileUid()}cancelLogin(){var t;this.logining=!1,null===(t=this.opener)||void 0===t||t.close()}toggleClear(t){this.clearAllData=t}logout(t){this.isShowLogoutConfirm=!0,this.showConfirmOpt=t,"remove"===t&&(this.removeAccountDisableSec=10,clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=setInterval(()=>{Object(c.i)(()=>{this.removeAccountDisableSec-=1,0===this.removeAccountDisableSec&&(clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=null)})},1e3))}async exitAccount(){this.loading=!0,this.isLogin=!1,this.userInfo={},this.clearToken(),await new n.a(t=>{setTimeout(()=>{this.clearAllData?this.clearAllStore().then(t):t(null)},200)}),this.clearAllData?window.location.reload():(Object(c.i)(()=>this.loading=!1),this.closeLogoutConfirm(),this.closeProfileModal(),h.r&&y.pluginStore.hideLast())}async deleteAccount(){this.loading=!0;const t=await d.g.deleteAccount();Object(c.i)(()=>{t&&0===t.code?this.exitAccount():(3012===t.code&&this.exitAccount(),u.message.error(t.message)),this.loading=!1})}preserveStorageKeys(){const t=[];return["store-privacy"].forEach(e=>t.push({key:e,data:localStorage.getItem(e)})),t}restoreKeysToStorage(t){t.forEach(({data:t,key:e})=>localStorage.setItem(e,t))}async clearAllStore(){this.stopAutoBackupReaction(),this.stopToStorageReaction();!h.r&&await new n.a(t=>chrome.storage.local.clear(t)),this._clearLocalStorage(["store-privacy","store-setting->permission","store-search->ignoreSuggest","first-installed"]),await this._deleteIdb(["store-notes","store-todo","store-sync","store-wallpaper","store-wallpaper-cache","infinity-image-base64"]),b.slave.sendMessage("tabs-reload")}async _deleteIdb(t){const e=await new n.a(t=>a()(f.a).call(f.a,(e,i)=>t(i)));await n.a.all(t.map(t=>new n.a(i=>{const o=t.split("->");if(1===o.length)return e.includes(t)?void f.a.removeItem(t,i):void i(null);i(null),e.includes(o[0])&&f.a.getItem(o[0],t=>{l()(o).call(o,(t,e,i)=>(i===o.length-1&&Reflect.deleteProperty(t,e),t[e]),t),f.a.setItem(o[0],i)})})))}_clearLocalStorage(t){const e=new Map;t.filter(Boolean).forEach(t=>{const i=t.split("->");if(1===i.length)return void e.set(t,localStorage.getItem(t));const o=JSON.parse(localStorage.getItem(i[0]));i.slice(1).forEach((t,e)=>{const n=0===e?o:o[i[e]];for(const e in n)t!==e&&Reflect.deleteProperty(n,e)}),e.set(i[0],JSON.stringify(o))}),localStorage.clear();for(const t of a()(e).call(e))localStorage.setItem(t,e.get(t))}closeLogoutConfirm(){this.isShowLogoutConfirm=!1}setToken(t){this.token=t.token}setRefreshToken(t){this.refreshToken=t}clearToken(){this.token="",this.refreshToken=""}setOutdated(){this.isExpired=!0,this.isLogin=!1}toggleReLogin(){this.isExpired=!1}}v([c.g],w.prototype,"isExpired",void 0),v([c.g],w.prototype,"isLogin",void 0),v([c.g],w.prototype,"token",void 0),v([c.g],w.prototype,"userInfo",void 0),v([c.g],w.prototype,"refreshToken",void 0),v([c.g],w.prototype,"wpColorUpdate",void 0),v([c.b],w.prototype,"setWpColorUpdate",null),v([c.e],w.prototype,"qrcode",null),v([c.g],w.prototype,"opener",void 0),v([c.g],w.prototype,"logining",void 0),v([c.g],w.prototype,"modalOpen",void 0),v([c.g],w.prototype,"removeAccountDisableSec",void 0),v([c.g],w.prototype,"removeAccountDisableTimer",void 0),v([c.b],w.prototype,"closeModal",null),v([c.b],w.prototype,"openModal",null),v([c.g],w.prototype,"showLoginTipModal",void 0),v([c.b],w.prototype,"toggleLoginTipModal",null),v([c.b],w.prototype,"closeLoginTipModal",null),v([c.g],w.prototype,"profileModal",void 0),v([c.g],w.prototype,"syncListModal",void 0),v([c.b],w.prototype,"closeProfileModal",null),v([c.b],w.prototype,"openProfileModal",null),v([c.b],w.prototype,"closeSyncListModal",null),v([c.b],w.prototype,"openSyncListModal",null),v([c.g],w.prototype,"isModify",void 0),v([c.b],w.prototype,"openModify",null),v([c.b],w.prototype,"modifyProfile",null),v([c.b],w.prototype,"getUserProfile",null),v([c.b],w.prototype,"updateAvatar",null),v([c.b],w.prototype,"closeModify",null),v([c.b],w.prototype,"thirdPartyLogin",null),v([c.b],w.prototype,"login",null),v([c.b],w.prototype,"setMobileUid",null),v([c.b],w.prototype,"loginEmailSuccess",null),v([c.b],w.prototype,"setUserData",null),v([c.b],w.prototype,"login3rdSuccess",null),v([c.b],w.prototype,"cancelLogin",null),v([c.g],w.prototype,"isShowLogoutConfirm",void 0),v([c.g],w.prototype,"showConfirmOpt",void 0),v([c.g],w.prototype,"clearAllData",void 0),v([c.b],w.prototype,"toggleClear",null),v([c.b],w.prototype,"logout",null),v([c.g],w.prototype,"loading",void 0),v([c.b],w.prototype,"exitAccount",null),v([c.b],w.prototype,"deleteAccount",null),v([c.b],w.prototype,"clearAllStore",null),v([c.b],w.prototype,"closeLogoutConfirm",null),v([c.b],w.prototype,"setToken",null),v([c.b],w.prototype,"setRefreshToken",null),v([c.b],w.prototype,"clearToken",null),v([c.b],w.prototype,"setOutdated",null),v([c.b],w.prototype,"toggleReLogin",null);const x=new w;Object(c.c)(()=>{x.isLogin&&(x.userProfilePromise=x.getUserProfile())}),x.initSyncStore("store-user",["userInfo","isLogin","token","refreshToken","wpColorUpdate"])},function(t,e,i){"use strict";i.r(e),i.d(e,"pluginStore",(function(){return p}));i(13),i(16),i(10);var o=i(8),n=i(129),r=i(346);class a extends r.a{opened(t){}}const s=Object(r.b)(new a);var l=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class c{constructor(){this.pluginsMap={"infinity://weather":"side-weather","infinity://todos":"side-todos","infinity://notes":"side-notes","infinity://history":"side-history","infinity://bookmarks":"side-bookmarks","infinity://extension":"side-extension","infinity://chrome-apps":"chrome-apps","infinity://wallpaper":"wallpaper","infinity://settings":"side-profile",search:"side-search",profile:"side-profile",editIcon:"side-editicon"},this.pluginsTags={"side-weather":!1,"side-todos":!1,"side-notes":!1,"side-history":!1,"side-bookmarks":!1,"side-extension":!1,"chrome-apps":!1,"side-profile":!1,"side-search":!1,"side-editicon":!1,wallpaper:!1},this.pluginViews=[],this.focusRepair=!1,Object(o.h)(()=>this.pluginViews.map(t=>t),([t])=>{s.opened(t)})}initDom(t){this.pluginsTags[t]=!0}async show(t){if(this.pluginViews.includes(t))return;const e=this.pluginsMap[t];if(!1===this.pluginsTags[e])try{await this.requestPermission(e),Object(o.i)(()=>{this.pluginsTags[e]=!0,this.pluginViews.push(t)})}catch(t){}else this.pluginViews.push(t)}async showRepair(){this.focusRepair=!0,this.show("profile"),localStorage.setItem("user-checkout-old-data","true")}blurRepair(){this.focusRepair=!1}requestPermission(t){switch(t){case"side-bookmarks":return n.a.request(["bookmarks"],["chrome://favicon/"]);case"side-extension":case"chrome-apps":return n.a.request(["management"]);case"side-history":return n.a.request(["history"],["chrome://favicon/"])}}hideLast(){const t=this.pluginViews.pop();return 0===this.pluginViews.length&&document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform","none"),t}}l([o.g],c.prototype,"pluginsTags",void 0),l([o.b],c.prototype,"initDom",null),l([o.g],c.prototype,"pluginViews",void 0),l([o.g],c.prototype,"focusRepair",void 0),l([o.b],c.prototype,"show",null),l([o.b],c.prototype,"showRepair",null),l([o.b],c.prototype,"blurRepair",null),l([o.b],c.prototype,"hideLast",null);const p=new c},function(t,e,i){t.exports=i.p+"images/error.f782e7c.png"},function(t,e,i){t.exports=i.p+"images/remind.896ff6f.png"},function(t,e,i){"use strict";i(13),i(16);var o=i(1),n=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let r=class extends o.a{constructor(){super(...arguments),this.type="",this.iconfont=!1}render(){return this.iconfont?o.e`
        <svg part="svg">
          <use href="${i(400)}#${this.type}" style=${this.color?`fill: ${this.color};`:""}></use>
        </svg>
      `:o.e`
        <svg part="svg">
          <use href="${i(401)}#${this.type}"></use>
        </svg>
      `}};r.styles=o.b`
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
  `,n([Object(o.g)({type:String})],r.prototype,"type",void 0),n([Object(o.g)({type:Boolean})],r.prototype,"iconfont",void 0),n([Object(o.g)({type:String})],r.prototype,"color",void 0),r=n([Object(o.c)("i-usesvg")],r)},function(t,e,i){"use strict";i.r(e),i.d(e,"IConfirm",(function(){return s}));i(13),i(16),i(10);var o=i(1),n=o.b`.container {
  height: 100%;
  z-index: 100001;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.container[hidden] {
  display: none;
}
.container .top,
.container .bottom {
  flex-grow: 1;
}
.container .bottom {
  height: var(--modal-top, 15vh);
}
.body {
  width: 360px;
  min-height: 200px;
  padding: 30px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.18);
  border-radius: 6px;
}
.title,
.text {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
.title {
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 30px;
}
.footer {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.footer infinito-button {
  width: 120px;
  height: 42px;
  --hover-color: #eee;
  --hover-font-color: #000;
}
.footer infinito-button[primary] {
  --hover-color: #000;
  --hover-font-color: #fff;
}
.footer infinito-button:not(:last-of-type) {
  margin-right: 20px;
}
`,r=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let a=null,s=class extends o.a{constructor(){super(...arguments),this.defaultData={title:i18n("info"),text:"",onCancel:()=>{},onConfirm:()=>{}},this.show=!1,this.title=this.defaultData.title,this.text=this.defaultData.text,this.onCancel=()=>{},this.onConfirm=()=>{}}static create(){if(a)return a;const t=document.body;return a=document.createElement("i-confirm"),t.appendChild(a),a}firstUpdated(){}async performUpdate(){super.performUpdate()}shouldUpdate(t){return!t.has("show")||!1!==this.show||(setTimeout(()=>{this.requestUpdate()},1),!1)}updated(t){t.has("show")&&this.show&&(this.$container.animate([{opacity:"0"},{opacity:"1"}],{duration:300,easing:"ease-in"}),this.$body.animate([{opacity:"0",transform:"scale(0.8)"},{opacity:"1",transform:"none"}],{duration:300,easing:"ease-in"}))}toShow(t){this.show=!0;const e=Object.assign(Object.assign({},this.defaultData),t);this.title=e.title,this.text=e.text,this.onCancel=e.onCancel,this.onConfirm=e.onConfirm}toHide(){this.show=!1}render(){return o.e`
      <div class="container" .hidden="${!this.show}">
        <div class="top"></div>
        <section class="body">
          <div class="title">${this.title}</div>
          <div class="text">${this.text}</div>
          <div class="footer">
            <infinito-button
              @click="${()=>{this.toHide(),this.onCancel()}}"
            >${i18n("cancel")}</infinito-button>
            <infinito-button
              @click="${()=>{this.toHide(),this.onConfirm()}}"
              primary
            >${i18n("confirm")}</infinito-button>
          </div>
        </section>
        <div class="bottom"></div>
      </div>
    `}};s.styles=n,r([Object(o.g)({type:Boolean})],s.prototype,"show",void 0),r([Object(o.g)({type:String})],s.prototype,"title",void 0),r([Object(o.g)({type:String})],s.prototype,"text",void 0),r([Object(o.g)({attribute:!1})],s.prototype,"onCancel",void 0),r([Object(o.g)({attribute:!1})],s.prototype,"onConfirm",void 0),r([Object(o.h)(".container")],s.prototype,"$container",void 0),r([Object(o.h)(".body")],s.prototype,"$body",void 0),s=r([Object(o.c)("i-confirm")],s)},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i(102),n=i(125);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,a=Object(n.e)(t=>e=>{if(!(e instanceof n.b))throw new Error("unsafeHTML can only be used in text bindings");const i=r.get(e);if(void 0!==i&&Object(o.h)(t)&&t===i.value&&e.value===i.fragment)return;const a=document.createElement("template");a.innerHTML=t;const s=document.importNode(a.content,!0);e.setValue(s),r.set(e,{value:t,fragment:s})})},function(t,e,i){"use strict";i(13),i(16),i(10);var o=i(1),n=i(335),r=(i(353),o.b`:host {
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
`),a=i(373),s=i.n(a),l=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.a{constructor(){super(...arguments),this.value="",this.offsetRight=0,this.side=!1,this.name="",this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(138,49,255,1)","transparent"],this.pickerStatus=!1,this.activeIndex=-1,this._close_picker_lock=!1,this._preClosePicker=()=>{this._close_picker_lock&&(this._close_picker_lock=!1)},this._postClosePicker=()=>{this._close_picker_lock||this._closePicker()},this._closePicker=()=>{this.pickerStatus=!1}}firstUpdated(){this._importColor(),this.resetActiveIndex(),window.addEventListener("mousedown",this._preClosePicker),window.addEventListener("mouseup",this._postClosePicker)}disconnectedCallback(){this._closePicker(),window.removeEventListener("mousedown",this._preClosePicker),window.removeEventListener("mouseup",this._postClosePicker),super.disconnectedCallback()}resetActiveIndex(){this.activeIndex=this.colors.findIndex(t=>t===this.value)}_importColor(){const t=document.querySelector("#script-vue"),e=document.querySelector("#script-color");if(!t){const t=document.createElement("script");t.src="/vendor/vue.min.js",t.id="script-vue",t.onload=()=>{if(!e){const t=document.createElement("script");t.src="/vendor/color-picker.min.js",t.id="script-color",document.body.append(t)}},document.body.append(t)}}_showPicker(t){t.stopPropagation(),this.pickerStatus=!0,"transparent"===this.value&&(this.value="#ff4734",this.activeIndex=-1,this._emitChange())}_pickColor(t){if(t instanceof CustomEvent){const{rgba:e}=t.detail[0],{r:i,g:o,b:n,a:r}=e;this.value=`rgba(${[i,o,n,r].join(",")})`,this.activeIndex=-1,this._emitChange()}}_pickThisColor(t){this.value=this.colors[t],this.activeIndex=t,this._emitChange()}_emitChange(){const t=new CustomEvent("on-change",{detail:{value:this.value}});this.dispatchEvent(t)}async performUpdate(){this.resetActiveIndex(),super.performUpdate()}updated(t){if(t.has("pickerStatus")&&!0===this.pickerStatus)try{this.$colorPicker.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(t){}}render(){return o.e`
      <section class="color-pick-list">
        ${this.colors.map((t,e)=>o.e`<span
            @click="${()=>this._pickThisColor(e)}"
            class="${Object(n.a)({active:e===this.activeIndex,"color-item":!0,transparent:"transparent"===t})}"
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
        ${this.pickerStatus?o.e` <color-picker
              @mousedown=${t=>{t.stopPropagation(),this._close_picker_lock=!0}}
              value="${this.value}"
              @input="${this._pickColor}"
            ></color-picker>`:null}
      </section>
    `}};c.styles=r,l([Object(o.g)({type:String})],c.prototype,"value",void 0),l([Object(o.g)({type:Number})],c.prototype,"offsetRight",void 0),l([Object(o.g)({type:Boolean})],c.prototype,"side",void 0),l([Object(o.g)({type:String})],c.prototype,"name",void 0),l([Object(o.g)({type:Array})],c.prototype,"colors",void 0),l([Object(o.f)()],c.prototype,"pickerStatus",void 0),l([Object(o.f)()],c.prototype,"activeIndex",void 0),l([Object(o.h)(".color-picker")],c.prototype,"$colorPicker",void 0),c=l([Object(o.c)("i-colorpicker")],c)},function(t,e,i){
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
t.exports=function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function e(e){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var l="undefined"!=typeof window&&void 0!==window.document,c=l?window:{},p=!(!l||!c.document.documentElement)&&"ontouchstart"in c.document.documentElement,d=!!l&&"PointerEvent"in c,h="".concat("cropper","-crop"),u="".concat("cropper","-disabled"),g="".concat("cropper","-hidden"),f="".concat("cropper","-hide"),m="".concat("cropper","-invisible"),b="".concat("cropper","-modal"),y="".concat("cropper","-move"),v="".concat("cropper","Action"),w="".concat("cropper","Preview"),x=p?"touchstart":"mousedown",k=p?"touchmove":"mousemove",_=p?"touchend touchcancel":"mouseup",O=d?"pointerdown":x,S=d?"pointermove":k,j=d?"pointerup pointercancel":_,$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,I=/^data:/,C=/^data:image\/jpeg;base64,/,T=/^img|canvas$/i,E={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},L=Number.isNaN||c.isNaN;function P(t){return"number"==typeof t&&!L(t)}var R=function(t){return t>0&&t<1/0};function D(t){return void 0===t}function A(t){return"object"===i(t)&&null!==t}var M=Object.prototype.hasOwnProperty;function N(t){if(!A(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&M.call(i,"isPrototypeOf")}catch(t){return!1}}function z(t){return"function"==typeof t}var B=Array.prototype.slice;function U(t){return Array.from?Array.from(t):B.call(t)}function F(t,e){return t&&z(e)&&(Array.isArray(t)||P(t.length)?U(t).forEach((function(i,o){e.call(t,i,o,t)})):A(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var W=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return A(t)&&i.length>0&&i.forEach((function(e){A(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},H=/\.\d*(?:0|9){12}\d*$/;function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return H.test(t)?Math.round(t*e)/e:t}var V=/^width|height|left|top|marginLeft|marginTop$/;function Y(t,e){var i=t.style;F(e,(function(t,e){V.test(e)&&P(t)&&(t="".concat(t,"px")),i[e]=t}))}function X(t,e){if(e)if(P(t.length))F(t,(function(t){X(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function G(t,e){e&&(P(t.length)?F(t,(function(t){G(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function K(t,e,i){e&&(P(t.length)?F(t,(function(t){K(t,e,i)})):i?X(t,e):G(t,e))}var Q=/([a-z\d])([A-Z])/g;function J(t){return t.replace(Q,"$1-$2").toLowerCase()}function Z(t,e){return A(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(J(e)))}function tt(t,e,i){A(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(J(e)),i)}var et=/\s\s*/,it=function(){var t=!1;if(l){var e=!1,i=function(){},o=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});c.addEventListener("test",i,o),c.removeEventListener("test",i,o)}return t}();function ot(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(et).forEach((function(e){if(!it){var r=t.listeners;r&&r[e]&&r[e][i]&&(n=r[e][i],delete r[e][i],0===Object.keys(r[e]).length&&delete r[e],0===Object.keys(r).length&&delete t.listeners)}t.removeEventListener(e,n,o)}))}function nt(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(et).forEach((function(e){if(o.once&&!it){var r=t.listeners,a=void 0===r?{}:r;n=function(){delete a[e][i],t.removeEventListener(e,n,o);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];i.apply(t,s)},a[e]||(a[e]={}),a[e][i]&&t.removeEventListener(e,a[e][i],o),a[e][i]=n,t.listeners=a}t.addEventListener(e,n,o)}))}function rt(t,e,i){var o;return z(Event)&&z(CustomEvent)?o=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(o)}function at(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var st=c.location,lt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ct(t){var e=t.match(lt);return null!==e&&(e[1]!==st.protocol||e[2]!==st.hostname||e[3]!==st.port)}function pt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function dt(t){var e=t.rotate,i=t.scaleX,o=t.scaleY,n=t.translateX,r=t.translateY,a=[];P(n)&&0!==n&&a.push("translateX(".concat(n,"px)")),P(r)&&0!==r&&a.push("translateY(".concat(r,"px)")),P(e)&&0!==e&&a.push("rotate(".concat(e,"deg)")),P(i)&&1!==i&&a.push("scaleX(".concat(i,")")),P(o)&&1!==o&&a.push("scaleY(".concat(o,")"));var s=a.length?a.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function ht(t,i){var o=t.pageX,n=t.pageY,r={endX:o,endY:n};return i?r:e({startX:o,startY:n},r)}function ut(t){var e=t.aspectRatio,i=t.height,o=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",r=R(o),a=R(i);if(r&&a){var s=i*e;"contain"===n&&s>o||"cover"===n&&s<o?i=o/e:o=i*e}else r?i=o/e:a&&(o=i*e);return{width:o,height:i}}function gt(t,e,i,o){var n=e.aspectRatio,r=e.naturalWidth,s=e.naturalHeight,l=e.rotate,c=void 0===l?0:l,p=e.scaleX,d=void 0===p?1:p,h=e.scaleY,u=void 0===h?1:h,g=i.aspectRatio,f=i.naturalWidth,m=i.naturalHeight,b=o.fillColor,y=void 0===b?"transparent":b,v=o.imageSmoothingEnabled,w=void 0===v||v,x=o.imageSmoothingQuality,k=void 0===x?"low":x,_=o.maxWidth,O=void 0===_?1/0:_,S=o.maxHeight,j=void 0===S?1/0:S,$=o.minWidth,I=void 0===$?0:$,C=o.minHeight,T=void 0===C?0:C,E=document.createElement("canvas"),L=E.getContext("2d"),P=ut({aspectRatio:g,width:O,height:j}),R=ut({aspectRatio:g,width:I,height:T},"cover"),D=Math.min(P.width,Math.max(R.width,f)),A=Math.min(P.height,Math.max(R.height,m)),M=ut({aspectRatio:n,width:O,height:j}),N=ut({aspectRatio:n,width:I,height:T},"cover"),z=Math.min(M.width,Math.max(N.width,r)),B=Math.min(M.height,Math.max(N.height,s)),U=[-z/2,-B/2,z,B];return E.width=q(D),E.height=q(A),L.fillStyle=y,L.fillRect(0,0,D,A),L.save(),L.translate(D/2,A/2),L.rotate(c*Math.PI/180),L.scale(d,u),L.imageSmoothingEnabled=w,L.imageSmoothingQuality=k,L.drawImage.apply(L,[t].concat(a(U.map((function(t){return Math.floor(q(t))}))))),L.restore(),E}var ft=String.fromCharCode,mt=/^data:.*,/;function bt(t){var e,i=new DataView(t);try{var o,n,r;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var a=i.byteLength,s=2;s+1<a;){if(255===i.getUint8(s)&&225===i.getUint8(s+1)){n=s;break}s+=1}if(n){var l=n+10;if("Exif"===function(t,e,i){var o="";i+=e;for(var n=e;n<i;n+=1)o+=ft(t.getUint8(n));return o}(i,n+4,4)){var c=i.getUint16(l);if(((o=18761===c)||19789===c)&&42===i.getUint16(l+2,o)){var p=i.getUint32(l+4,o);p>=8&&(r=l+p)}}}if(r){var d,h,u=i.getUint16(r,o);for(h=0;h<u;h+=1)if(d=r+12*h+2,274===i.getUint16(d,o)){d+=8,e=i.getUint16(d,o),i.setUint16(d,1,o);break}}}catch(t){e=1}return e}var yt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,o=this.cropper,n=Number(e.minContainerWidth),r=Number(e.minContainerHeight);X(o,g),G(t,g);var a={width:Math.max(i.offsetWidth,n>=0?n:200),height:Math.max(i.offsetHeight,r>=0?r:100)};this.containerData=a,Y(o,{width:a.width,height:a.height}),X(t,g),G(o,g)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,o=Math.abs(e.rotate)%180==90,n=o?e.naturalHeight:e.naturalWidth,r=o?e.naturalWidth:e.naturalHeight,a=n/r,s=t.width,l=t.height;t.height*a>t.width?3===i?s=t.height*a:l=t.width/a:3===i?l=t.width/a:s=t.height*a;var c={aspectRatio:a,naturalWidth:n,naturalHeight:r,width:s,height:l};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=W({},c)},limitCanvas:function(t,e){var i=this.options,o=this.containerData,n=this.canvasData,r=this.cropBoxData,a=i.viewMode,s=n.aspectRatio,l=this.cropped&&r;if(t){var c=Number(i.minCanvasWidth)||0,p=Number(i.minCanvasHeight)||0;a>1?(c=Math.max(c,o.width),p=Math.max(p,o.height),3===a&&(p*s>c?c=p*s:p=c/s)):a>0&&(c?c=Math.max(c,l?r.width:0):p?p=Math.max(p,l?r.height:0):l&&(c=r.width,(p=r.height)*s>c?c=p*s:p=c/s));var d=ut({aspectRatio:s,width:c,height:p});c=d.width,p=d.height,n.minWidth=c,n.minHeight=p,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(a>(l?0:1)){var h=o.width-n.width,u=o.height-n.height;n.minLeft=Math.min(0,h),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,h),n.maxTop=Math.max(0,u),l&&this.limited&&(n.minLeft=Math.min(r.left,r.left+(r.width-n.width)),n.minTop=Math.min(r.top,r.top+(r.height-n.height)),n.maxLeft=r.left,n.maxTop=r.top,2===a&&(n.width>=o.width&&(n.minLeft=Math.min(0,h),n.maxLeft=Math.max(0,h)),n.height>=o.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=o.width,n.maxTop=o.height},renderCanvas:function(t,e){var i=this.canvasData,o=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,o=t.degree;if(90==(o=Math.abs(o)%180))return{width:i,height:e};var n=o%90*Math.PI/180,r=Math.sin(n),a=Math.cos(n),s=e*a+i*r,l=e*r+i*a;return o>90?{width:l,height:s}:{width:s,height:l}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0}),r=n.width,a=n.height,s=i.width*(r/i.naturalWidth),l=i.height*(a/i.naturalHeight);i.left-=(s-i.width)/2,i.top-=(l-i.height)/2,i.width=s,i.height=l,i.aspectRatio=r/a,i.naturalWidth=r,i.naturalHeight=a,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Y(this.canvas,W({width:i.width,height:i.height},dt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,o=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);W(i,{width:o,height:n,left:(e.width-o)/2,top:(e.height-n)/2}),Y(this.image,W({width:i.width,height:i.height},dt(W({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,o=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*o),n.height=Math.max(n.minHeight,n.height*o),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=W({},n)},limitCropBox:function(t,e){var i=this.options,o=this.containerData,n=this.canvasData,r=this.cropBoxData,a=this.limited,s=i.aspectRatio;if(t){var l=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,p=a?Math.min(o.width,n.width,n.width+n.left,o.width-n.left):o.width,d=a?Math.min(o.height,n.height,n.height+n.top,o.height-n.top):o.height;l=Math.min(l,o.width),c=Math.min(c,o.height),s&&(l&&c?c*s>l?c=l/s:l=c*s:l?c=l/s:c&&(l=c*s),d*s>p?d=p/s:p=d*s),r.minWidth=Math.min(l,p),r.minHeight=Math.min(c,d),r.maxWidth=p,r.maxHeight=d}e&&(a?(r.minLeft=Math.max(0,n.left),r.minTop=Math.max(0,n.top),r.maxLeft=Math.min(o.width,n.left+n.width)-r.width,r.maxTop=Math.min(o.height,n.top+n.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=o.width-r.width,r.maxTop=o.height-r.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&tt(this.face,v,i.width>=e.width&&i.height>=e.height?"move":"all"),Y(this.cropBox,W({width:i.width,height:i.height},dt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),rt(this.element,"crop",this.getData())}},vt={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,o=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",r=document.createElement("img");if(e&&(r.crossOrigin=e),r.src=o,r.alt=n,this.viewBox.appendChild(r),this.viewBoxImage=r,i){var a=i;"string"==typeof i?a=t.ownerDocument.querySelectorAll(i):i.querySelector&&(a=[i]),this.previews=a,F(a,(function(t){var i=document.createElement("img");tt(t,w,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=o,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){F(this.previews,(function(t){var e=Z(t,w);Y(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(A(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(J(e)))}(t,w)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,o=i.width,n=i.height,r=t.width,a=t.height,s=i.left-e.left-t.left,l=i.top-e.top-t.top;this.cropped&&!this.disabled&&(Y(this.viewBoxImage,W({width:r,height:a},dt(W({translateX:-s,translateY:-l},t)))),F(this.previews,(function(e){var i=Z(e,w),c=i.width,p=i.height,d=c,h=p,u=1;o&&(h=n*(u=c/o)),n&&h>p&&(d=o*(u=p/n),h=p),Y(e,{width:d,height:h}),Y(e.getElementsByTagName("img")[0],W({width:r*u,height:a*u},dt(W({translateX:-s*u,translateY:-l*u},t))))})))}},wt={bind:function(){var t=this.element,e=this.options,i=this.cropper;z(e.cropstart)&&nt(t,"cropstart",e.cropstart),z(e.cropmove)&&nt(t,"cropmove",e.cropmove),z(e.cropend)&&nt(t,"cropend",e.cropend),z(e.crop)&&nt(t,"crop",e.crop),z(e.zoom)&&nt(t,"zoom",e.zoom),nt(i,O,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&nt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&nt(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),nt(t.ownerDocument,S,this.onCropMove=this.cropMove.bind(this)),nt(t.ownerDocument,j,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&nt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;z(e.cropstart)&&ot(t,"cropstart",e.cropstart),z(e.cropmove)&&ot(t,"cropmove",e.cropmove),z(e.cropend)&&ot(t,"cropend",e.cropend),z(e.crop)&&ot(t,"crop",e.crop),z(e.zoom)&&ot(t,"zoom",e.zoom),ot(i,O,this.onCropStart),e.zoomable&&e.zoomOnWheel&&ot(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&ot(i,"dblclick",this.onDblclick),ot(t.ownerDocument,S,this.onCropMove),ot(t.ownerDocument,j,this.onCropEnd),e.responsive&&ot(window,"resize",this.onResize)}},xt={resize:function(){if(!this.disabled){var t,e,i=this.options,o=this.container,n=this.containerData,r=o.offsetWidth/n.width,a=o.offsetHeight/n.height,s=Math.abs(r-1)>Math.abs(a-1)?r:a;1!==s&&(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(F(t,(function(e,i){t[i]=e*s}))),this.setCropBoxData(F(e,(function(t,i){e[i]=t*s})))))}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e=h,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,o=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?o=t.deltaY>0?1:-1:t.wheelDelta?o=-t.wheelDelta/120:t.detail&&(o=t.detail>0?1:-1),this.zoom(-o*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(P(e)&&1!==e||P(i)&&0!==i||t.ctrlKey))){var o,n=this.options,r=this.pointers;t.changedTouches?F(t.changedTouches,(function(t){r[t.identifier]=ht(t)})):r[t.pointerId||0]=ht(t),o=Object.keys(r).length>1&&n.zoomable&&n.zoomOnTouch?"zoom":Z(t.target,v),$.test(o)&&!1!==rt(this.element,"cropstart",{originalEvent:t,action:o})&&(t.preventDefault(),this.action=o,this.cropping=!1,"crop"===o&&(this.cropping=!0,X(this.dragBox,b)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==rt(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?F(t.changedTouches,(function(t){W(i[t.identifier]||{},ht(t,!0))})):W(i[t.pointerId||0]||{},ht(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?F(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,K(this.dragBox,b,this.cropped&&this.options.modal)),rt(this.element,"cropend",{originalEvent:t,action:e}))}}},kt={change:function(t){var i,o=this.options,n=this.canvasData,r=this.containerData,a=this.cropBoxData,s=this.pointers,l=this.action,c=o.aspectRatio,p=a.left,d=a.top,h=a.width,u=a.height,f=p+h,m=d+u,b=0,y=0,v=r.width,w=r.height,x=!0;!c&&t.shiftKey&&(c=h&&u?h/u:1),this.limited&&(b=a.minLeft,y=a.minTop,v=b+Math.min(r.width,n.width,n.left+n.width),w=y+Math.min(r.height,n.height,n.top+n.height));var k=s[Object.keys(s)[0]],_={x:k.endX-k.startX,y:k.endY-k.startY},O=function(t){switch(t){case"e":f+_.x>v&&(_.x=v-f);break;case"w":p+_.x<b&&(_.x=b-p);break;case"n":d+_.y<y&&(_.y=y-d);break;case"s":m+_.y>w&&(_.y=w-m)}};switch(l){case"all":p+=_.x,d+=_.y;break;case"e":if(_.x>=0&&(f>=v||c&&(d<=y||m>=w))){x=!1;break}O("e"),(h+=_.x)<0&&(l="w",p-=h=-h),c&&(u=h/c,d+=(a.height-u)/2);break;case"n":if(_.y<=0&&(d<=y||c&&(p<=b||f>=v))){x=!1;break}O("n"),u-=_.y,d+=_.y,u<0&&(l="s",d-=u=-u),c&&(h=u*c,p+=(a.width-h)/2);break;case"w":if(_.x<=0&&(p<=b||c&&(d<=y||m>=w))){x=!1;break}O("w"),h-=_.x,p+=_.x,h<0&&(l="e",p-=h=-h),c&&(u=h/c,d+=(a.height-u)/2);break;case"s":if(_.y>=0&&(m>=w||c&&(p<=b||f>=v))){x=!1;break}O("s"),(u+=_.y)<0&&(l="n",d-=u=-u),c&&(h=u*c,p+=(a.width-h)/2);break;case"ne":if(c){if(_.y<=0&&(d<=y||f>=v)){x=!1;break}O("n"),u-=_.y,d+=_.y,h=u*c}else O("n"),O("e"),_.x>=0?f<v?h+=_.x:_.y<=0&&d<=y&&(x=!1):h+=_.x,_.y<=0?d>y&&(u-=_.y,d+=_.y):(u-=_.y,d+=_.y);h<0&&u<0?(l="sw",d-=u=-u,p-=h=-h):h<0?(l="nw",p-=h=-h):u<0&&(l="se",d-=u=-u);break;case"nw":if(c){if(_.y<=0&&(d<=y||p<=b)){x=!1;break}O("n"),u-=_.y,d+=_.y,h=u*c,p+=a.width-h}else O("n"),O("w"),_.x<=0?p>b?(h-=_.x,p+=_.x):_.y<=0&&d<=y&&(x=!1):(h-=_.x,p+=_.x),_.y<=0?d>y&&(u-=_.y,d+=_.y):(u-=_.y,d+=_.y);h<0&&u<0?(l="se",d-=u=-u,p-=h=-h):h<0?(l="ne",p-=h=-h):u<0&&(l="sw",d-=u=-u);break;case"sw":if(c){if(_.x<=0&&(p<=b||m>=w)){x=!1;break}O("w"),h-=_.x,p+=_.x,u=h/c}else O("s"),O("w"),_.x<=0?p>b?(h-=_.x,p+=_.x):_.y>=0&&m>=w&&(x=!1):(h-=_.x,p+=_.x),_.y>=0?m<w&&(u+=_.y):u+=_.y;h<0&&u<0?(l="ne",d-=u=-u,p-=h=-h):h<0?(l="se",p-=h=-h):u<0&&(l="nw",d-=u=-u);break;case"se":if(c){if(_.x>=0&&(f>=v||m>=w)){x=!1;break}O("e"),u=(h+=_.x)/c}else O("s"),O("e"),_.x>=0?f<v?h+=_.x:_.y>=0&&m>=w&&(x=!1):h+=_.x,_.y>=0?m<w&&(u+=_.y):u+=_.y;h<0&&u<0?(l="nw",d-=u=-u,p-=h=-h):h<0?(l="sw",p-=h=-h):u<0&&(l="ne",d-=u=-u);break;case"move":this.move(_.x,_.y),x=!1;break;case"zoom":this.zoom(function(t){var i=e({},t),o=0;return F(t,(function(t,e){delete i[e],F(i,(function(e){var i=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),r=Math.abs(t.endX-e.endX),a=Math.abs(t.endY-e.endY),s=Math.sqrt(i*i+n*n),l=(Math.sqrt(r*r+a*a)-s)/s;Math.abs(l)>Math.abs(o)&&(o=l)}))})),o}(s),t),x=!1;break;case"crop":if(!_.x||!_.y){x=!1;break}i=at(this.cropper),p=k.startX-i.left,d=k.startY-i.top,h=a.minWidth,u=a.minHeight,_.x>0?l=_.y>0?"se":"ne":_.x<0&&(p-=h,l=_.y>0?"sw":"nw"),_.y<0&&(d-=u),this.cropped||(G(this.cropBox,g),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(a.width=h,a.height=u,a.left=p,a.top=d,this.action=l,this.renderCropBox()),F(s,(function(t){t.startX=t.endX,t.startY=t.endY}))}},_t={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&X(this.dragBox,b),G(this.cropBox,g),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=W({},this.initialImageData),this.canvasData=W({},this.initialCanvasData),this.cropBoxData=W({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(W(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),G(this.dragBox,b),X(this.cropBox,g)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,F(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,G(this.cropper,u)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,X(this.cropper,u)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,o=i.left,n=i.top;return this.moveTo(D(t)?t:o+Number(t),D(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(P(t)&&(i.left=t,o=!0),P(e)&&(i.top=e,o=!0),o&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var o=this.options,n=this.canvasData,r=n.width,a=n.height,s=n.naturalWidth,l=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&o.zoomable){var c=s*t,p=l*t;if(!1===rt(this.element,"zoom",{ratio:t,oldRatio:r/s,originalEvent:i}))return this;if(i){var d=this.pointers,h=at(this.cropper),u=d&&Object.keys(d).length?function(t){var e=0,i=0,o=0;return F(t,(function(t){var n=t.startX,r=t.startY;e+=n,i+=r,o+=1})),{pageX:e/=o,pageY:i/=o}}(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-r)*((u.pageX-h.left-n.left)/r),n.top-=(p-a)*((u.pageY-h.top-n.top)/a)}else N(e)&&P(e.x)&&P(e.y)?(n.left-=(c-r)*((e.x-n.left)/r),n.top-=(p-a)*((e.y-n.top)/a)):(n.left-=(c-r)/2,n.top-=(p-a)/2);n.width=c,n.height=p,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return P(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,P(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(P(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(P(t)&&(i.scaleX=t,o=!0),P(e)&&(i.scaleY=e,o=!0),o&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,o=this.imageData,n=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){t={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height};var a=o.width/o.naturalWidth;if(F(t,(function(e,i){t[i]=e/a})),e){var s=Math.round(t.y+t.height),l=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=l-t.x,t.height=s-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=o.rotate||0),i.scalable&&(t.scaleX=o.scaleX||1,t.scaleY=o.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,o=this.canvasData,n={};if(this.ready&&!this.disabled&&N(t)){var r=!1;e.rotatable&&P(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,r=!0),e.scalable&&(P(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,r=!0),P(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var a=i.width/i.naturalWidth;P(t.x)&&(n.left=t.x*a+o.left),P(t.y)&&(n.top=t.y*a+o.top),P(t.width)&&(n.width=t.width*a),P(t.height)&&(n.height=t.height*a),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?W({},this.containerData):{}},getImageData:function(){return this.sized?W({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&F(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&N(t)&&(P(t.left)&&(e.left=t.left),P(t.top)&&(e.top=t.top),P(t.width)?(e.width=t.width,e.height=t.width/i):P(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,o=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&N(t)&&(P(t.left)&&(o.left=t.left),P(t.top)&&(o.top=t.top),P(t.width)&&t.width!==o.width&&(e=!0,o.width=t.width),P(t.height)&&t.height!==o.height&&(i=!0,o.height=t.height),n&&(e?o.height=o.width/n:i&&(o.width=o.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=gt(this.image,this.imageData,e,t);if(!this.cropped)return i;var o=this.getData(),n=o.x,r=o.y,s=o.width,l=o.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(n*=c,r*=c,s*=c,l*=c);var p=s/l,d=ut({aspectRatio:p,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),h=ut({aspectRatio:p,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=ut({aspectRatio:p,width:t.width||(1!==c?i.width:s),height:t.height||(1!==c?i.height:l)}),g=u.width,f=u.height;g=Math.min(d.width,Math.max(h.width,g)),f=Math.min(d.height,Math.max(h.height,f));var m=document.createElement("canvas"),b=m.getContext("2d");m.width=q(g),m.height=q(f),b.fillStyle=t.fillColor||"transparent",b.fillRect(0,0,g,f);var y=t.imageSmoothingEnabled,v=void 0===y||y,w=t.imageSmoothingQuality;b.imageSmoothingEnabled=v,w&&(b.imageSmoothingQuality=w);var x,k,_,O,S,j,$=i.width,I=i.height,C=n,T=r;C<=-s||C>$?(C=0,x=0,_=0,S=0):C<=0?(_=-C,C=0,S=x=Math.min($,s+C)):C<=$&&(_=0,S=x=Math.min(s,$-C)),x<=0||T<=-l||T>I?(T=0,k=0,O=0,j=0):T<=0?(O=-T,T=0,j=k=Math.min(I,l+T)):T<=I&&(O=0,j=k=Math.min(l,I-T));var E=[C,T,x,k];if(S>0&&j>0){var L=g/s;E.push(_*L,O*L,S*L,j*L)}return b.drawImage.apply(b,[i].concat(a(E.map((function(t){return Math.floor(q(t))}))))),m},setAspectRatio:function(t){var e=this.options;return this.disabled||D(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,o=this.face;if(this.ready&&!this.disabled){var n="crop"===t,r=e.movable&&"move"===t;t=n||r?t:"none",e.dragMode=t,tt(i,v,t),K(i,h,n),K(i,y,r),e.cropBoxMovable||(tt(o,v,t),K(o,h,n),K(o,y,r))}return this}},Ot=c.Cropper,St=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),!e||!T.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=W({},E,N(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var e,i,r;return e=t,r=[{key:"noConflict",value:function(){return window.Cropper=Ot,t}},{key:"setDefaults",value:function(t){W(E,N(t)&&t)}}],(i=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,o=this.options;if(o.rotatable||o.scalable||(o.checkOrientation=!1),o.checkOrientation&&window.ArrayBuffer)if(I.test(t))C.test(t)?this.read((n=t.replace(mt,""),r=atob(n),a=new ArrayBuffer(r.length),F(s=new Uint8Array(a),(function(t,e){s[e]=r.charCodeAt(e)})),a)):this.clone();else{var n,r,a,s,l=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,this.xhr=l,l.onabort=c,l.onerror=c,l.ontimeout=c,l.onprogress=function(){"image/jpeg"!==l.getResponseHeader("content-type")&&l.abort()},l.onload=function(){e.read(l.response)},l.onloadend=function(){e.reloading=!1,e.xhr=null},o.checkCrossOrigin&&ct(t)&&i.crossOrigin&&(t=pt(t)),l.open("GET",t,!0),l.responseType="arraybuffer",l.withCredentials="use-credentials"===i.crossOrigin,l.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,o=bt(t),n=0,r=1,a=1;if(o>1){this.url=function(t,e){for(var i=[],o=new Uint8Array(t);o.length>0;)i.push(ft.apply(null,U(o.subarray(0,8192)))),o=o.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,"image/jpeg");var s=function(t){var e=0,i=1,o=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:o=-1;break;case 5:e=90,o=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:o}}(o);n=s.rotate,r=s.scaleX,a=s.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=r,i.scaleY=a),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,o=e;this.options.checkCrossOrigin&&ct(e)&&(i||(i="anonymous"),o=pt(e)),this.crossOrigin=i,this.crossOriginUrl=o;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=o||e,n.alt=t.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),X(n,f),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=c.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent),o=function(e,i){W(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=W({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),r=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){o(n.width,n.height),i||r.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",r.appendChild(n))}else o(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,o=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var r=n.querySelector(".".concat("cropper","-container")),a=r.querySelector(".".concat("cropper","-canvas")),s=r.querySelector(".".concat("cropper","-drag-box")),l=r.querySelector(".".concat("cropper","-crop-box")),c=l.querySelector(".".concat("cropper","-face"));this.container=o,this.cropper=r,this.canvas=a,this.dragBox=s,this.cropBox=l,this.viewBox=r.querySelector(".".concat("cropper","-view-box")),this.face=c,a.appendChild(i),X(t,g),o.insertBefore(r,t.nextSibling),this.isImg||G(i,f),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,X(l,g),e.guides||X(l.getElementsByClassName("".concat("cropper","-dashed")),g),e.center||X(l.getElementsByClassName("".concat("cropper","-center")),g),e.background&&X(r,"".concat("cropper","-bg")),e.highlight||X(c,m),e.cropBoxMovable&&(X(c,y),tt(c,v,"all")),e.cropBoxResizable||(X(l.getElementsByClassName("".concat("cropper","-line")),g),X(l.getElementsByClassName("".concat("cropper","-point")),g)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),z(e.ready)&&nt(t,"ready",e.ready,{once:!0}),rt(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),G(this.element,g))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(e.prototype,i),r&&n(e,r),t}();return W(St.prototype,yt,vt,wt,xt,kt,_t),St}()},function(t,e,i){t.exports=i.p+"images/color.321ebce.jpg"},function(t,e,i){t.exports=i.p+"images/question.b0f36f5.svg"},,,,,,,,function(t,e,i){t.exports=i(407)},,,,,,,,,,,,,,,,,,function(t,e,i){t.exports=i.p+"images/iconfont.919d651.svg"},function(t,e,i){t.exports=i.p+"images/icon.196b87f.svg"},,,,,,function(t,e,i){var o=i(408);t.exports=o},function(t,e,i){i(409);var o=i(70).Object,n=t.exports=function(t,e,i){return o.defineProperty(t,e,i)};o.defineProperty.sham&&(n.sham=!0)},function(t,e,i){var o=i(27),n=i(25);o({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperty:i(71).f})},function(t,e,i){t.exports=i.p+"images/item_1.8b1e737.png"},function(t,e,i){t.exports=i.p+"images/item_2.f6e1bf0.png"},function(t,e,i){t.exports=i.p+"images/item_3.d04a54a.png"},function(t,e,i){t.exports=i.p+"images/arrow.1799f5d.png"},function(t,e,i){t.exports=i.p+"images/edit.064f8e9.svg"},function(t,e,i){t.exports=i.p+"images/del.20d8e3b.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"syncStore",(function(){return T}));var o=i(7),n=i.n(o),r=i(104),a=i.n(r),s=(i(13),i(16),i(10),i(52),i(17),i(8)),l=i(81),c=i(363),p=i(475),d=i(470),h=i(476),u=i(469),g=i(472),f=i(477),m=i(364),b=i(473),y=i(1),v=i(242),w=y.b`.container {
  width: 410px;
  box-sizing: border-box;
  padding: 40px 40px 34px 40px;
  background: #ffffff;
  border-radius: 6px;
}
.header {
  text-align: center;
  line-height: 30px;
  height: 28px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.main {
  margin: 24px auto 40px;
}
.tips {
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #656565;
  line-height: 20px;
}
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.checkbox .input-box {
  display: flex;
  align-items: center;
  position: relative;
}
.checkbox label {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
}
.checkbox label::after {
  content: '';
  width: 9px;
  height: 5px;
  position: absolute;
  top: 1px;
  left: 1px;
  border: 2px solid #333;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
.checkbox input {
  visibility: hidden;
}
.checkbox input:checked + label::after {
  opacity: 1;
}
.checkbox:last-of-type {
  margin-bottom: 0;
}
.btn {
  width: 330px;
  height: 52px;
}
`,x=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let k=class extends v.a{constructor(){super(...arguments),this.onChecked=t=>{},this.show=!1,this.checked=0,this.handleCheck=t=>{this.show=!1,"function"==typeof this.onChecked&&this.onChecked(t),this.checked=0,this.onChecked=()=>{}}}static create(t){const e=document.body.querySelector("#modal-first-sync");if(e){if(!this.instance){const t=document.createElement("modal-first-sync");e.appendChild(t),this.instance=t}return this.instance.show=!0,this.instance.onChecked=t,this.instance}}static hide(){this.instance&&this.instance.show&&this.instance.handleCheck(null)}firstUpdated(){}checkOne(t){this.checked=t}updated(){this.radios[this.checked].checked=!0}render(){return y.e`<infinito-modal style="--modal-padding:0;" .closeable="${!1}" .open=${this.show}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n("choose_sync_type")}</div>
          <div class="main">
            <div class="tips">${i18n("sync_type_tips")}</div>
            <div class="checkbox-box">
              <div class="checkbox" @click="${()=>this.checkOne(0)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="0" id="first_sync_0" />
                  <label for="first_sync_0"></label>
                </div>
                <span>${i18n("merge_cloud_local")}</span>
              </div>
              <div class="checkbox" @click="${()=>this.checkOne(1)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="1" id="first_sync_1" />
                  <label for="first_sync_1"></label>
                </div>
                <span>${i18n("use_local")}</span>
              </div>
              <div class="checkbox" @click="${()=>this.checkOne(2)}">
                <div class="input-box">
                  <input name="first_sync" type="radio" value="2" id="first_sync_2" />
                  <label for="first_sync_2"></label>
                </div>
                <span>${i18n("use_cloud")}</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <infinito-button
              primary
              class="btn"
              @click="${()=>{this.handleCheck(this.checked)}}"
              >${i18n("confirm")}</infinito-button
            >
          </div>
        </div>
      </div>
    </infinito-modal> `}};k.styles=w,k.instance=null,x([Object(y.g)()],k.prototype,"onChecked",void 0),x([Object(y.g)({type:Boolean})],k.prototype,"show",void 0),x([Object(y.g)({type:Number})],k.prototype,"checked",void 0),x([Object(y.i)('[name="first_sync"]')],k.prototype,"radios",void 0),k=x([Object(y.c)("modal-first-sync")],k);var _=i(177),O=i(0),S=i(337),j=i(345),$=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const I=[d.b,p.a,u.a,h.a,g.a,f.a,b.weatherStore];class C extends c.a{constructor(){super(...arguments),this.timmer=null,this.downloading=!1,this.backuping=!1,this.isBackup=!1,this.isOpenSync=!0,this.syncId="",this.lastSyncTime=0,this.syncSucsess=!1,this.syncFail=!1,this.syncFailMsg="",this.autosSyncList=[],this.waitMergeData=null,this.waitMergeId=null,this.manualSyncList=[],this.isRecovered=!1,this.recoverErrorTimes=0,this.master=!1,this.prerender=[],this.autoBackupPipe={data:{},websocketKeys:[],timestamp:0},this.getAllBackupData=async()=>{const t={};return await n.a.all(I.map(async e=>{const i=await e.getBackupData();t[e.backupFileKey]=i})),t},this.getAutoLatest=async(t="all")=>{const e=localStorage.getItem("lock-auto-recover");if(e&&Date.now()-Number(e)<50)return;if(localStorage.setItem("lock-auto-recover",""+Date.now()),await this.getSyncList(),0===this.autosSyncList.length){const t=m.userStore.userInfo["backup-version-v2"];if(m.userStore.userInfo["auto-backup"]&&!t){const t=m.userStore.userInfo.email?"basic":"pro";await this.getV1RemoteData(t)}else this.tiggerBackup();return}const i=this.autosSyncList[0];if((null==i?void 0:i.id)===this.syncId||this.waitMergeId===(null==i?void 0:i.id))return;const o=localStorage.getItem("pre-sync-id");o&&(null==i?void 0:i.id)===o||(await this.getDetail(i.id,"auto",t,!1,!0),localStorage.removeItem("lock-auto-recover"))},this.changeSyncStatus=t=>{this.master=!1,this.downloading=t.downloading,this.backuping=t.backuping,this.isBackup=t.isBackup,this.syncFail=t.syncFail,this.syncFailMsg=t.syncFailMsg,this.syncSucsess=t.syncSucsess,(this.syncSucsess||this.syncFail)&&this.syncEnd()}}get autoSyncing(){return this.downloading||this.backuping}async changeSyncSwitch(t){this.isOpenSync=t}async autoBackup(t,e=""){const i=await this.toSync(!0,t,e);return i.error||Object(s.i)(()=>{this.autosSyncList=i.data}),i}async manualBackup(){const{default:t}=await Promise.resolve().then(i.bind(null,344)),e=t.loading(i18n("backing_up")),{error:o,data:n}=await this.toSync();e(),o?t.error(i18n("backup_failed")):Object(s.i)(()=>{this.manualSyncList=n})}async toSync(t=!1,e={},i=""){var o,r;let a;if(this.master=!0,t)this.isBackup=!0,this.backuping=!0,a=await l.e.autoBackup(e,i);else{const t={};await n.a.all(I.map(async e=>{const i=await e.getBackupData();t[e.backupFileKey]=i})),a=await l.e.manualBackup(t)}const{error:s,data:c=[]}=a;return t&&(s||_.slave.postTask("slave:sync-to-server",i),s?this.backupEnd(s.message||"auto-backup error",null===(o=c[0])||void 0===o?void 0:o.id):this.backupEnd(null,null===(r=c[0])||void 0===r?void 0:r.id)),a}backupEnd(t,e=""){Object(s.i)(()=>{this.master=!0,this.backuping=!1,t?this.syncFail=!0:(this.syncSucsess=!0,e&&(this.syncId=e,this.lastSyncTime=Date.now()))}),this.syncEnd()}downloadEnd(t,e=""){Object(s.i)(()=>{this.master=!0,this.downloading=!1,this.backuping=!1,t?this.syncFail=!0:(this.syncSucsess=!0,e&&(this.syncId=e,this.lastSyncTime=Date.now()))}),this.syncEnd()}syncEnd(){clearTimeout(this.timmer),this.timmer=setTimeout(()=>{Object(s.i)(()=>{this.syncFail=!1,this.syncFailMsg="",this.syncSucsess=!1,this.isBackup=!1})},3e3)}async getSyncList(){const{data:t,error:e}=await l.e.getSyncList();if(e)throw e;Object(s.i)(()=>{this.autosSyncList=t.auto,this.manualSyncList=t.manual})}async getDetail(t,e,o="all",n=!1,r=!1){let a,s;if(this.master=!0,n){const{default:t}=await Promise.resolve().then(i.bind(null,344));a=t,s=a.loading(i18n("syncing"))}else this.downloading=!0,this.isBackup=!1;const{data:c,error:p}=await l.e.getSyncDetail(r?"latest":t,e,o);n&&(null==s||s()),p?n?null==a||a.error(i18n("sync_fail")):this.downloadEnd(p.message||"download error"):(await this.useRemote(c,n),this.downloadEnd(null,t),this.tiggerBackup())}tiggerBackup(){var t;this.changeRecoveredStatus(!0),(null===(t=this.autoBackupPipe.websocketKeys)||void 0===t?void 0:t.length)&&(this.autoBackupPipe.timestamp=Date.now())}async getV1RemoteData(t,e=!1){let o,n;if(this.master=!0,e){const{default:t}=await Promise.resolve().then(i.bind(null,344));o=t,n=o.loading(i18n("syncing"))}else this.downloading=!0,this.isBackup=!1;const{error:r,data:a}=await l.e.getV2DataFromV1(t);e&&(null==n||n()),r?(e?null==o||o.error(i18n("sync_fail")):this.downloadEnd(r.message||"download v1 error"),this.recoverErrorTimes+=1):(this.downloadEnd(null),await this.useRemote(a,e,!0),this.tiggerBackup())}changeRecoveredStatus(t){this.isRecovered=t}autoRunGetAutoLatest(){setTimeout(()=>{this.getAutoLatest()},0)}showModalAndCheckType(t=!1){return new n.a((e,i)=>{var o;if(t&&k.hide(),null===(o=k.instance)||void 0===o?void 0:o.show)return void e(null);const r=Object(s.j)(this.waitMergeData);k.create(async o=>{this.mergeType=o,this.diffColorItems();try{await n.a.all(I.map(async t=>{if(r&&r[t.backupFileKey])if(1===o)t.restartAutoBackupReaction(!0);else if(2===o)try{await t.mergeRemote(r[t.backupFileKey],!0)}catch(t){}else{if(0!==o)throw new Error("not check");try{await t.mergeRemote(r[t.backupFileKey],!1)}catch(t){}t.restartAutoBackupReaction(!0)}})),this.downloadEnd(null,this.waitMergeId),this.tiggerBackup(),Object(s.i)(()=>{this.waitMergeData=null,this.waitMergeId=null})}catch(e){t&&i(e)}e(null)})})}useLocalData(t){I.map(async e=>{if(null==t?void 0:t[e.backupFileKey])try{await e.mergeRemote(t[e.backupFileKey],!0)}catch(t){console.error("Store ~ syncStores.map ~ error",t)}})}useRemote(t,e,i=!1){return new n.a(async o=>{if(Object(s.i)(()=>{this.waitMergeData=null,this.waitMergeId=null}),e)await n.a.all(I.map(async e=>{if(null==t?void 0:t[e.backupFileKey])try{await e.mergeRemote(t[e.backupFileKey],!0)}catch(t){}})),this.mergeType=2,this.diffColorItems(),o(null);else if(this.isRecovered)await n.a.all(I.map(async e=>{if(null==t?void 0:t[e.backupFileKey])if(i)try{await e.mergeRemote(t[e.backupFileKey],!0)}catch(t){}else{e.stopAutoBackupReaction();try{await e.mergeRemote(t[e.backupFileKey],!0)}catch(t){}e.restartAutoBackupReaction()}})),o(null);else{I.some(e=>{if(t&&t[e.backupFileKey]){console.log("diffData ~ st.backupFileKey",e.backupFileKey);return e.diffRemote(t[e.backupFileKey])}return!1})?(Object(s.i)(()=>{var e;this.waitMergeData=t,this.waitMergeId=null===(e=this.autosSyncList[0])||void 0===e?void 0:e.id}),await this.showModalAndCheckType(!0),o(null)):(this.mergeType=2,this.diffColorItems(),await n.a.all(I.map(async e=>{if(null==t?void 0:t[e.backupFileKey])try{await e.mergeRemote(t[e.backupFileKey],!0)}catch(t){}})),o(null))}})}pushAutoBackupPipe(t){m.userStore.isLogin&&this.isOpenSync&&(Object.keys(t).forEach(e=>{this.autoBackupPipe.data[e]=t[e],this.autoBackupPipe.websocketKeys.includes(e)||this.autoBackupPipe.websocketKeys.push(e)}),this.autoBackupPipe.timestamp=Date.now())}cleanupPipe(t){t===this.autoBackupPipe.timestamp&&(this.autoBackupPipe={data:{},websocketKeys:[],timestamp:0})}async diffColorItems(){await m.userStore.userProfilePromise;const t=m.userStore.userInfo["wp-color-update"];if(t===m.userStore.wpColorUpdate)return;const{mergeType:e}=this,i=await Object(S.d)(),o=Object(s.j)(u.a.customColorItems);await u.a.mergeCustomColor(o,i,Number(e),!0),m.userStore.setWpColorUpdate(t)}}$([s.g],C.prototype,"downloading",void 0),$([s.g],C.prototype,"backuping",void 0),$([s.g],C.prototype,"isBackup",void 0),$([s.g],C.prototype,"isOpenSync",void 0),$([s.g],C.prototype,"syncId",void 0),$([s.g],C.prototype,"lastSyncTime",void 0),$([s.g],C.prototype,"syncSucsess",void 0),$([s.g],C.prototype,"syncFail",void 0),$([s.g],C.prototype,"syncFailMsg",void 0),$([s.g],C.prototype,"autosSyncList",void 0),$([s.g],C.prototype,"waitMergeData",void 0),$([s.g],C.prototype,"waitMergeId",void 0),$([s.g],C.prototype,"manualSyncList",void 0),$([s.g],C.prototype,"isRecovered",void 0),$([s.g],C.prototype,"recoverErrorTimes",void 0),$([s.g],C.prototype,"master",void 0),$([s.g],C.prototype,"prerender",void 0),$([s.g],C.prototype,"autoBackupPipe",void 0),$([s.e],C.prototype,"autoSyncing",null),$([s.b],C.prototype,"changeSyncSwitch",null),$([s.b],C.prototype,"autoBackup",null),$([s.b],C.prototype,"manualBackup",null),$([s.b],C.prototype,"toSync",null),$([s.b],C.prototype,"backupEnd",null),$([s.b],C.prototype,"downloadEnd",null),$([s.b],C.prototype,"syncEnd",null),$([s.b],C.prototype,"getSyncList",null),$([s.b],C.prototype,"getDetail",null),$([s.b],C.prototype,"tiggerBackup",null),$([s.b],C.prototype,"getV1RemoteData",null),$([s.b],C.prototype,"changeRecoveredStatus",null),$([s.b],C.prototype,"getAutoLatest",void 0),$([s.b],C.prototype,"pushAutoBackupPipe",null),$([s.b],C.prototype,"cleanupPipe",null),$([s.b],C.prototype,"changeSyncStatus",void 0);const T=new C;T.initSyncStore("store-sync",["autoBackupPipe","syncId","lastSyncTime","isOpenSync","isRecovered","recoverErrorTimes","prerender","waitMergeData","waitMergeId"],void 0,!0,50);Object(s.c)(()=>{var t;if(T.firstSync){const{isOpenSync:e,isRecovered:i,downloading:o}=T;if(m.userStore.isLogin&&e&&i&&!o&&!(null===(t=k.instance)||void 0===t?void 0:t.show)){const{data:t,websocketKeys:e,timestamp:i}=T.autoBackupPipe;(async t=>{const{data:e,websocketKeys:i,timestamp:o}=t,r=Object.assign({},e);if(Object.keys(r).length)try{const t=localStorage.getItem("lock-auto-backup");if(t&&Date.now()-Number(t)<4e3)return;localStorage.setItem("lock-auto-backup",""+Date.now()),0===T.autosSyncList.length?await n.a.all(I.map(async t=>{const e=await t.getBackupData();r[t.backupFileKey]=e})):await n.a.all(I.map(async t=>{if(i.includes(t.backupFileKey)){const e=await t.getBackupData();r[t.backupFileKey]=e}}));const{error:e}=await T.autoBackup(Object(s.j)(r),i.join(","));if(e)return;T.cleanupPipe(o),localStorage.removeItem("lock-auto-backup")}catch(t){}})({data:t,websocketKeys:e,timestamp:i})}}},{delay:4e3}),Object(s.c)(()=>{if(T.firstSync){const t=T.isOpenSync&&m.userStore.isLogin;_.slave.postTask("slave:change-sync",{status:t,userInfo:{uid:m.userStore.userInfo.uid,secret:m.userStore.userInfo.secret}}),t?T.autoRunGetAutoLatest():m.userStore.isLogin&&T.getSyncList()}},{delay:100}),Object(s.c)(()=>{T.firstSync&&(T.isOpenSync&&m.userStore.isLogin||(T.changeRecoveredStatus(!1),Object(s.i)(()=>{T.syncId="",T.waitMergeId=null,T.waitMergeData=null}),localStorage.removeItem("pre-sync-id")))}),Object(s.c)(()=>{T.firstSync&&m.userStore.isLogin&&0===m.userStore.userInfo["auto-backup"]&&0===T.autosSyncList.length&&p.a.restartAutoBackupReaction(!0)}),Object(s.c)(()=>{if(T.firstSync&&T.master){const t={downloading:T.downloading,backuping:T.backuping,syncSucsess:T.syncSucsess,syncFail:T.syncFail,syncFailMsg:T.syncFailMsg,isBackup:T.isBackup};_.slave.sendMessage("tabs-sync-status",t)}},{delay:20}),Object(s.c)(()=>{var t;T.firstSync&&T.autosSyncList.length&&(T.waitMergeId===(null===(t=T.autosSyncList[0])||void 0===t?void 0:t.id)?T.showModalAndCheckType():k.hide())},{delay:1}),window.addEventListener("beforeunload",()=>{T.master&&_.slave.sendMessage("tabs-sync-status",{downloading:!1,backuping:!1,syncSucsess:!1,syncFail:!1,syncFailMsg:"",isBackup:!1})}),Object(s.h)(()=>T.firstSync,async t=>{if(t){const t=await E();j.a.trySendStatus(t)}},{delay:1e3});const E=async()=>({currentIsLogin:!!m.userStore.isLogin,currentIsOpenSync:m.userStore.isLogin&&T.isOpenSync,currentSearchEngine:h.a.searchEngine.current.types[0].url.split("?")[0],currentWallpaper:(()=>{try{const t=u.a.type,e=["userLibraryAuto","cloudAuto"],i=["cloud","color"];if(["local","default","bing"].includes(t))return t;if(e.includes(t))return{[t]:u.a.switchType};if(i.includes(t))return"color"===t?{[t]:u.a.color}:{[t]:u.a.rawUrl}}catch(t){return"error"}})(),currentIconCount:(()=>{try{var t;const e=a()(t=p.a.sites).call(t,(t,e)=>{if(null==e?void 0:e.length){return t+a()(e).call(e,(t,e)=>{var i;return(null===(i=null==e?void 0:e.children)||void 0===i?void 0:i.length)?t+e.children.length:t+1},0)}return t},0);return 10*Math.round(e/10)}catch(t){return"error"}})(),currentVersion:O.B.extVersion,currentBrowserEnv:O.c,currentRunBrowser:O.B.runtimePlatform});j.a.sendPageView({page:"newtab"})},,,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"LocalSync",(function(){return n.a})),i.d(e,"syncTabsStore",(function(){return n.b})),i.d(e,"pluginStore",(function(){return r.pluginStore})),i.d(e,"userStore",(function(){return a.userStore})),i.d(e,"settingStore",(function(){return s.b})),i.d(e,"requestCalcSize",(function(){return s.a})),i.d(e,"siteStore",(function(){return l.a})),i.d(e,"searchStore",(function(){return c.a})),i.d(e,"wallpaperStore",(function(){return p.a})),i.d(e,"todoStore",(function(){return d.a})),i.d(e,"noteStore",(function(){return h.a})),i.d(e,"weatherStore",(function(){return u.weatherStore})),i.d(e,"gmailStore",(function(){return m})),i.d(e,"syncStore",(function(){return b.syncStore})),i.d(e,"privacyStore",(function(){return w}));var o=i(8),n=i(363),r=i(365),a=i(364),s=i(470),l=i(475),c=i(476),p=i(469),d=i(472),h=i(477),u=i(473),g=(i(13),i(16),function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a});class f extends n.a{constructor(){super(...arguments),this.unreadEmailCount=null}update(t){this.unreadEmailCount!==t&&(this.unreadEmailCount=t)}}g([o.g],f.prototype,"unreadEmailCount",void 0),g([o.b],f.prototype,"update",null);const m=new f;m.initSyncStore("store-gmail",["unreadEmailCount"]);var b=i(461),y=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class v extends n.a{constructor(){super(...arguments),this.userDate=0,this.collectData=0}agreeUserData(){this.userDate=1}refuseUserData(){this.userDate=-1}resetUserData(){this.userDate=0}agreeCollectData(){this.collectData=1}refuseCollectData(){this.collectData=-1}}y([o.g],v.prototype,"userDate",void 0),y([o.g],v.prototype,"collectData",void 0),y([o.b],v.prototype,"agreeUserData",null),y([o.b],v.prototype,"refuseUserData",null),y([o.b],v.prototype,"resetUserData",null),y([o.b],v.prototype,"agreeCollectData",null),y([o.b],v.prototype,"refuseCollectData",null);const w=new v;w.initSyncStore("store-privacy",["userDate","collectData"]),Object(o.f)({enforceActions:"observed"})},function(t,e,i){"use strict";i.d(e,"a",(function(){return P}));var o=i(104),n=i.n(o),r=i(471),a=i.n(r),s=i(48),l=i.n(s),c=i(7),p=i.n(c),d=(i(17),i(44),i(52),i(13),i(16),i(10),i(487),i(8)),h=i(241),u=i(363),g=i(120),f=i(0),m=i(482),b=i(479),y=i(177),v=i(337);function w(){y.slave.postTask("slave:bg-run-clear-wallpaper-timer-task")}async function x(t){let e;return e=await fetch(t).then(t=>t.blob()),e}var k=i(364),_=i(188),O=i(499),S=i.n(O),j=i(21),$=i(480),I=i(344),C=i(23),T=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const E=i(354);class L extends u.a{constructor(){super(),this.url=E,this.urlInUI=E,this.rawUrl=E,this.setWpSouceCount=t=>this.wpSourceCount=t,this.type="default",this.switchType="disabled",this.setSwitchType=t=>{this.switchType=t,this._updateTimer(!0)},this.setWpSourceCount=t=>this.wpSourceCount=t,this.wpExt="png",this.list=[],this.index=-1,this.timeEnd=0,this.remoteData=[],this.opacity=40,this.blur=0,this.setOpacity=t=>this.opacity=t,this.setBlur=t=>this.blur=t,this.liked=[],this.setLiked=t=>{this.liked=t},this.customColorItems=[],this.setCustomColorItems=t=>this.customColorItems=t,this._rgbaToHex=t=>{const e=t.replace(/rgba?\(/,"").replace(/\)/,"").replace(/[\s+]/g,"").split(","),i=parseFloat(e[3]||"1"),o=Math.floor(i*parseInt(e[0])+255*(1-i)),n=Math.floor(i*parseInt(e[1])+255*(1-i)),r=Math.floor(i*parseInt(e[2])+255*(1-i));return("0"+o.toString(16)).slice(-2)+("0"+n.toString(16)).slice(-2)+("0"+r.toString(16)).slice(-2)},this._maxCollectionlen=100,this.cloudCollection=[],this.appendCloudCollection=t=>this.cloudCollection.push(t),this.setCloudCollection=t=>this.cloudCollection=t,this._maxRecentUsedLen=100,this.cloudRecentUsedOrder={},this.setCloudRecentUsedOrder=t=>{const{cloudRecentUsedOrder:e,cloudRecentUsed:i}=this,o={};Object.keys(e).forEach(t=>{i.includes(t)&&(o[t]=e[t])}),o[t]=Date.now(),this.cloudRecentUsedOrder=o},this.cloudRecentUsed=[],this.setCloudRecentUsed=t=>{const e=Object.keys(this.cloudRecentUsedOrder);t.forEach(t=>{const i=e.indexOf(t);-1!==i&&e.splice(i,1)}),e.length>0&&e.forEach(t=>{delete this.localRecentUsedOrder[t]}),this.cloudRecentUsed=t},this.appendCloudRecentUsed=t=>{this.cloudRecentUsed.push(t),this.cloudRecentUsed=Array.from(new Set(this.cloudRecentUsed))},this.localRecentUsedOrder={},this.setLocalRecentUsedOrder=t=>{this.localRecentUsedOrder[t]=Date.now()},this.localRecentUsed=[],this.setLocalRecentUsed=t=>{const e=Object.keys(this.localRecentUsedOrder);t.forEach(t=>{const i=e.indexOf(t);-1!==i&&e.splice(i,1)}),e.length>0&&e.forEach(t=>{delete this.localRecentUsedOrder[t]}),this.localRecentUsed=t},this.appendLocalRecentUsed=t=>{this.localRecentUsed.push(t),this.localRecentUsed=Array.from(new Set(this.localRecentUsed))},this.isLibraryItem=t=>t.includes(window.__INFINITY__.wpLibraryItemId),this.isLocal=t=>t.includes(window.__INFINITY__.wpId),this.isColorItem=t=>t.includes(window.__INFINITY__.wpColorId),this.isCurrentWp=t=>this.id===t,this.diffRemote=t=>{const e=["type","switchType","timeEnd","id","wpSource","opacity","blur","customColorItems"],i=Object.keys(t).every(i=>!e.includes(i)||d.d.structural(this[i],t[i]));let o=!1;return"local"!==t.type&&t.url&&(o=this.urlInUI!==t.url),!i||o},this.nextPage=0,this.totalPage=-1,this.delay=-1,this._whenLocalSynced=()=>{const t=Object(h.e)(),e=!(this.isAuto&&!t.ready);switch(e&&this.stopAutoBackupReaction&&this.stopAutoBackupReaction(),t.type){case"local":this._setLocalAfterInit(t);break;case"cloudAuto":case"userLibraryAuto":this._setCloudAutoAfterInit(t);break;case"bing":case"color":case"cloud":break;case"default":default:this._setDefaultAfterInit(t)}switch(function(t){Object(d.c)(()=>{const{opacity:e,blur:i}=t,o={"--wallpaper-alpha":e/100,"--wallpaper-filter":i/5+"px"};Object.keys(o).forEach(t=>{document.body.style.setProperty(t,o[t])}),Object(h.j)({opacity:e,blur:i})},{delay:0}),Object(d.h)(()=>t.type,e=>{e.includes("Auto")||("bing"!==e?t.wpSource&&(t.wpSource=void 0):t.wpSource=e,t.switchType="disabled",w())}),Object(d.c)(()=>{const{id:e}=t;e&&t.addRecentUsedP(e)});const e=document.querySelector(".wallpaper");Object(d.h)(()=>[t.urlInUI,t.color],async([i,o])=>{if(o&&"color"===t.type)Object(h.h)(o);else if(i){await Object(h.c)(i)?e.style.backgroundColor?(Object(h.h)("#999"),setTimeout(()=>{Object(h.i)(i)},200)):Object(h.i)(i):t.setDefaultWallpaperRaw()}})}(this),t.type){case"bing":this._setBingAfterInit();break;case"userLibraryAuto":this._checkLibraryExists()}e&&this.restartAutoBackupReaction()},this._syncLock=!1,this.mergeRemote=async(t,e)=>{try{if(this._syncLock)return;if(this._syncLock=!0,!("type"in t))return;if(f.n&&delete t.blur,"cloudRecentUsed"in t){if(e)this.setCloudRecentUsed(t.cloudRecentUsed);else{const e=Array.from(new Set(t.cloudRecentUsed.concat(this.cloudRecentUsed)));this.setCloudRecentUsed(e)}delete t.cloudRecentUsed}if("customColorItems"in t&&(this.mergeCustomColor(this.customColorItems,t.customColorItems,e?2:0),delete t.customColorItems),"local"===t.type)return void await this._mergeLocal(t);t.urlInUI=t.url,this._merge(t),this._afterSynced()}catch(t){console.log(t)}finally{this._syncLock=!1}},this.windmillRotating=!1,this._windmillPrevRotateSpeed=0,this._windmillPrevRotateDegree=0,this._windmillPrevRotateTime=-1,this.performWindmillRotate=t=>{if(-1===this._windmillPrevRotateTime)return this._windmillPrevRotateTime=t,void requestAnimationFrame(this.performWindmillRotate);const e=t-this._windmillPrevRotateTime;let i=this._windmillPrevRotateDegree;const{_windmillPrevRotateSpeed:o}=this;let n=o,r=0;if(this.windmillRotating)if(o<.46){let t,i;n+=36e-5*e,n>.46?(i=(n-.46)/36e-5,t=e-i,n=.46):(t=e,i=0),r=.46*i+o*t+18e-5*t*t}else r=.46*e;else{let i;n-=36e-5*e,n<0?(i=o/36e-5,n=0):i=e,0===n&&(t=-1),r=o*i-18e-5*i*i}i-=r,i%=360,i<0&&(i=360+i),this.windmillParent&&this.windmillParent.rotateWindMill(i),this._windmillPrevRotateDegree=i,this._windmillPrevRotateTime=t,this._windmillPrevRotateSpeed=n,0!==n&&requestAnimationFrame(this.performWindmillRotate)},this._lockLoadRandomP=!1,this.needSwitchWallpaper=!1,this._afterWpAutoSwitched=()=>{this._updateTimer(!0),this._prepareNextWp()},this.timeToSwitchWallpaper=async()=>{await this.switchWallpaper(),this._afterWpAutoSwitched()},this.switchToNextWallpaper=async()=>{try{await this.timeToSwitchWallpaper()}catch(t){g.message.top(i18n("wallpaper_switch_failure"))}},this._lockLoadUserWpNeeded=!1,this._lockRollback=!0,this.initAutoBackup("wallpaper",["id","url","rawUrl","wpSource","wpSourceName","type","switchType","color","timeEnd","index","opacity","blur","cloudRecentUsed","cloudRecentUsedOrder","customColorItems","nextPage","totalPage","wpExt"]),async function(t){await t.initSyncStore("store-wallpaper",["id","urlInUI","rawUrl","wpSource","wpSourceCount","wpSourceName","type","switchType","imageName","imageSource","imageType","color","index","timeEnd","remoteData","opacity","blur","cloudRecentUsed","localRecentUsed","cloudRecentUsedOrder","localRecentUsedOrder","nextPage","totalPage","wpExt","customColorItems","delay"],void 0,!0)}(this).then(this._whenLocalSynced).finally(()=>{setTimeout(()=>{this._lockRollback=!1},30)}),setTimeout(()=>{this.windmillParent=document.querySelector("newtab-main")})}_updateTimer(t=!1){const{switchType:e}=this;if(["disabled","when-newtab"].includes(e))w(),this.setTimeEnd(0);else{if(t){const t=Date.now();this.setTimeEnd(t+Object(v.b)(e))}!function(t,e){const i=Date.now(),o=Object(v.b)(e),n=t.timeEnd;let r;n>i?r=n-i:(r=o,t.setTimeEnd(i+o)),y.slave.postTask("slave:bg-run-timer-to-switch-wallpaper",r)}(this,e)}}setWpSourceName(t){this.wpSourceName=t}setWallpaper(t){this.setWallpaperRaw(t);const e={};e.type=this.type,e.switchType=this.switchType,e.nextP=null,e.ready=!1,e.oneP=!1,Object(h.j)(e)}async setBase64Wallpaper(){const{type:t,url:e}=this;if(["local","color"].includes(t))return;const i=await Object(v.f)(e);await Object(h.g)(i)}setWallpaperRaw(t){const{url:e,urlInUI:i,rawUrl:o,id:n,name:r,source:a}=t;r&&(this.imageName=r),this.id=n,this.url=e,this.urlInUI=i,this.rawUrl=o,this.imageSource=a,Object(h.j)({currentP:t}),this.setBase64Wallpaper()}setColor(t){this.type="color",this.id=t.id,this.color=t.content,this.urlInUI=void 0;const e={};e.type=this.type,e.color=t.content,e.switchType="disabled",Object(h.j)(e)}setCloudWallpaper(t){this.type="cloud",this.setCloudWallpaperRaw(t)}setCloudWallpaperRaw(t){this.setWallpaper({type:t.type,id:t.id,url:t.url,urlInUI:t.url,rawUrl:t.rawUrl,source:t.source})}setAutoWallpaperRaw(t){this.setWallpaperRaw({type:t.type,id:t.id,url:t.url,urlInUI:t.url,rawUrl:t.rawUrl,source:t.source})}setWpExt(t){this.wpExt=t}async setLocalWallpaper(t){const{file:e}=t;this.setWpExt(S.a.getExtension(e.type));const i=await Object(v.f)(e);await Object(h.g)(i),this.setType("local"),this.setWallpaper({type:t.type,url:null,urlInUI:t.url,rawUrl:t.url,id:t.id})}async enableBingWallpaper(t){this.type="bing",this.wpSource="bing",this.setBingWallpaper(t)}setBingWallpaper(t){this.setCloudWallpaperRaw(t)}setList(t){this.list=t}pushList(t){this.list.push(...t)}setIndex(t){this.index=t}setTimeEnd(t){this.timeEnd=t,Object(h.j)({timeEnd:this.timeEnd})}setRemoteData(t){this.remoteData=t}pushRemoteData(t){this.remoteData.push(...t)}spliceRemoteData(t,e=0){this.remoteData.splice(e,t)}get isAuto(){return this.type.includes("Auto")}removeLiked(t){const e=this.liked.indexOf(t);-1!==e&&this.liked.splice(e,1)}addLiked(t){const e=Object(d.j)(this.liked);e.push(t);const i=Array.from(new Set(e));this.setLiked(i)}includeLiked(t){return this.liked.includes(t)}async loadCollectionP(){const t=await Object(_.getCollectionWallpaper)();t.error||this.setCloudCollection(t.data)}async loadLikedP(){const t=await Object(_.getLikedWallpaper)();t.error||this.setLiked(t.data)}pushCustomColor(t){this.customColorItems.push(...t)}includesColorItem(t){return-1!==this.customColorItems.findIndex(({content:e})=>t===e)}appendCustomColor(t){if(-1===this.customColorItems.findIndex(({content:e})=>e===t.content)){const e=Object(d.j)(this.customColorItems);this.setCustomColorItems([t].concat(e))}}removeCustomColor(t){const e=this.customColorItems.findIndex(({id:e})=>e===t);-1!==e&&this.customColorItems.splice(e,1)}_rgbToHex(t){var e;return n()(e=t.map(t=>t.toString(16).padStart(0))).call(e,(t,e)=>t+e)}async addCustomColorItem(t){if(this.includesColorItem(t))return;const e=this._rgbaToHex(t),i=window.__INFINITY__.color_list,o=i.map(t=>j.a.hexColorDelta(e,t)),n=i[o.indexOf(Math.max.apply(null,o))],r={id:`${window.__INFINITY__.wpColorId}${Object($.a)()}`,content:t,similarColor:n};try{k.userStore.isLogin&&await Object(_.addCustomColor)(r),this.appendCustomColor(Object.assign({type:"color"},r)),I.default.success(i18n("add_success"))}catch(t){I.default.error(i18n("network_error"))}}addCloudCollectionP(t){if(this.cloudCollection.includes(t))return;this.appendCloudCollection(t);const e=this._maxCollectionlen-this.collectionLen;if(e<0){const t=Object(d.j)(this.cloudCollection).reverse();t.length+=e,this.setCloudCollection(t.reverse())}}removeCloudCollectionP(t){const e=this.cloudCollection.indexOf(t);-1!==e&&this.cloudCollection.splice(e,1)}get collectionLen(){return this.cloudCollection.length}removeCollectionP(t){this.removeCloudCollectionP(t)}addCollectionP(t){this.addCloudCollectionP(t)}includeCollection(t){return this.cloudCollection.includes(t)}async loadCollectP(){const{cloudCollection:t,customColorItems:e}=this,{commonColorItems:i}=b.a,o=[];if(0!==t.length){const n=[],r=[],a=[];if(t.forEach(t=>{this.isLibraryItem(t)?r.push(t):this.isColorItem(t)?a.push(t):n.push(t)}),n.length>0){const t=await Object(_.getWallpapersById)(n.join(","));if(t.error)throw t.error;o.push(...Object(v.a)(t.data))}if(r.length>0){const t=await Object(_.getUserWallpaperLibraryItemsById)(r.join(","));if(t.error)throw t.error;o.push(...m.a.mapUploadWallpapers(t.items))}a.length>0&&a.forEach(t=>{let n=i.find(({id:e})=>e===t);n||(n=e.find(({id:e})=>e===t)),n&&o.push(n)})}return o}dropCloudRecentUsed(t){const e=this.cloudRecentUsed.indexOf(t);-1!==e&&this.cloudRecentUsed.splice(e,1)}get recentUsedLen(){return this.cloudRecentUsed.length+this.localRecentUsed.length}addLocalRecentP(t){if(this.setLocalRecentUsedOrder(t),this.localRecentUsed.includes(t))return;this.appendLocalRecentUsed(t);const e=this._maxRecentUsedLen-this.recentUsedLen;if(e<0){const t=Object(d.j)(this.localRecentUsed).reverse();t.length+=e,this.setLocalRecentUsed(t.reverse())}}addCloudRecentP(t){if(this.setCloudRecentUsedOrder(t),this.cloudRecentUsed.includes(t))return;this.appendCloudRecentUsed(t);const e=this._maxRecentUsedLen-this.recentUsedLen;if(e<0){const t=Object(d.j)(this.cloudRecentUsed).reverse();t.length+=e,this.setCloudRecentUsed(t.reverse())}}removeCloudRecentUsedP(t){const e=Object(d.j)(this.cloudRecentUsed);t.forEach(t=>{const i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this.setCloudRecentUsed(e)}addRecentUsedP(t){this.addCloudRecentP(t)}_getItemTime(t){return"local"===t.type?this.localRecentUsedOrder[t.id]:["cloud","color"].includes(t.type)?this.cloudRecentUsedOrder[t.id]:void 0}async loadRecentUsedP(){const{localRecentUsed:t,cloudRecentUsed:e,customColorItems:i}=this,{localItems:o,commonColorItems:n}=b.a,r=[];if(0!==e.length){const t=[],o=[],a=[];if(e.forEach(e=>{this.isLibraryItem(e)?o.push(e):this.isColorItem(e)?a.push(e):t.push(e)}),t.length>0){const e=await Object(_.getWallpapersById)(t.join(","));if(e.error)throw e.error;r.push(...Object(v.a)(e.data))}if(o.length>0){const t=await Object(_.getUserWallpaperLibraryItemsById)(o.join(","));if(t.error)throw t.error;r.push(...m.a.mapUploadWallpapers(t.items))}a.length>0&&a.forEach(t=>{let e=n.find(({id:e})=>e===t);e||(e=i.find(({id:e})=>e===t)),e&&r.push(e)})}return a()(r).call(r,(t,e)=>{const i=this._getItemTime(t),o=this._getItemTime(e);return i>o?-1:i<o?1:0}),r}async getBackupData(){const t={};this.backupValueKeys.forEach(e=>{t[e]=Object(d.j)(this[e])});try{if("local"===this.type){const e=await Object(h.d)();t.url=e}else t.url=this.urlInUI}catch(e){t.type="default"}return t}async modifyUserLibrary(t){if(t!==this.wpSource)return;const e=m.a.customLibraryMap[t],i=e.findIndex(({_id:t})=>t===this.id),o=Object(h.e)(),{nextP:n}=o;(-1===e.findIndex(({_id:t})=>t===n.id)||e.length>1&&o.oneP)&&(o.nextP=null,o.ready=!1,o.oneP=!1,Object(h.j)(o)),-1===i&&await this.timeToSwitchWallpaper()}_setDefaultAfterInit(t){}_setLocalAfterInit({currentP:t}){this.rawUrl=this.urlInUI=t.rawUrl}_setCloudAutoAfterInit(t){t.ready?this._updateTimer(!0):(this.setAutoWallpaperRaw(t.currentP),this._afterWpAutoSwitched())}async _setBingAfterInit(){const t=await Object(v.c)();this.id!==t.id&&this.setCloudWallpaperRaw(t)}setDefaultWallpaperRaw(){this.id=null,this.urlInUI=this.url=h.b,this.rawUrl=h.a}setDefaultWallpaper(){this.id=null,this.type="default",this.urlInUI=this.url=h.b,this.rawUrl=h.a;const t=Object(h.e)();t.oneP=!1,t.ready=!1,t.currentP={id:null,url:h.b,urlInUI:h.b,rawUrl:h.a},t.type="default",t.switchType="disabled",Object(h.j)(t)}async _checkLibraryExists(){try{const t=await Object(_.hasWallpaperLibrary)(this.wpSource);if(t.error)throw t.error;1!==t.data&&this.setDefaultWallpaper()}catch(t){}}setType(t){this.type=t}_merge(t){Object.keys(t).forEach(e=>{this[e]!==t[e]&&(this[e]=t[e])})}async _mergeLocal(t){if("local"===this.type&&this.urlInUI.startsWith("blob:")){if(await Object(h.d)()!==t.url){const e=await x(t.url);t.urlInUI=t.rawUrl=l.a.createObjectURL(e),await Object(h.g)(t.url)}else t.urlInUI=null,t.rawUrl=null}else{const e=await x(t.url);t.urlInUI=t.rawUrl=l.a.createObjectURL(e),await Object(h.g)(t.url)}t.url=null;const e=t.wpExt;delete t.wpExt,this._merge(t),t.id?this.setWpExt(e):this.setWpExt(""),this._afterSynced()}async mergeCustomColor(t,e,i,o=!1){switch(i){case 1:if(0===t.length)return;await Object(_.setCustomColorItems)(t.map(t=>(delete t.type,t)));break;case 2:P.setCustomColorItems(e.map(t=>(t.type="color",t)));break;case 0:{const i=[],n=[];for(let e=0,o=t.length;e<o;++e){const o=t[e];n.includes(o.id)||(i.push(o),n.push(o.id))}for(let t=0,o=e.length;t<o;++t){const o=e[t];n.includes(o.id)||(i.push(o),n.push(o.id))}o&&await Object(_.setCustomColorItems)(i.map(t=>(delete t.type,t))),P.setCustomColorItems(i.map(t=>("type"in t||(t.type="color"),t)))}}}_afterSynced(){C.c&&Object(d.i)(()=>{this.url=this.url.replace(h.l,""),this.urlInUI=this.urlInUI.replace(h.l,"")});const t={currentP:{id:this.id,url:this.url,urlInUI:this.urlInUI,rawUrl:this.rawUrl}};t.type=this.type,t.color=this.color,t.switchType=this.switchType,t.timeEnd=this.timeEnd,t.opacity=this.opacity,t.blur=this.blur,t.ready=!1,t.oneP=!1,t.nextP=null,Object(h.j)(t),this.setBase64Wallpaper(),this.isAuto&&(this._updateTimer(),this._prepareNextWp())}startRotateWindmill(){this.windmillRotating=!0,0===this._windmillPrevRotateSpeed&&requestAnimationFrame(this.performWindmillRotate)}endRotateWindmill(){this.windmillRotating=!1}async randomWallpaper(){if(!this._lockLoadRandomP){this._lockLoadRandomP=!0,this.startRotateWindmill();try{const{data:t,error:e}=await Object(_.getRandomWallpaper)();if(e)throw new Error(JSON.stringify(e));const i=await Object(h.c)(t.url);if(!i)throw new Error("fetch res to check :"+i);this.setCloudWallpaper(Object.assign({type:"cloud"},t)),g.message.top(i18n("wallpaper_switch_success"))}catch(t){g.message.top(i18n("wallpaper_switch_failure"))}finally{this._lockLoadRandomP=!1,this.endRotateWindmill()}}}async getNextWp(...t){const{data:e}=await Object(_.getNextWallpaper)(...t),[i]=Object(v.a)([e]);return i}async _prepareNextWp(){if(Object(h.e)().oneP)return;const t="userLibraryAuto"!==this.type?"library":"userLibrary",e=await this.getNextWp(this.wpSource,this.id,t);await Object(h.c)(e.url);const i={};e.id===this.id?i.oneP=!0:i.oneP=!1,i.nextP=e,i.ready=!0,Object(h.j)(i)}enableUserLibraryAuto({libraryId:t,libraryName:e},i,o){this.type="userLibraryAuto",this.switchType=i,this.wpSource=t,this.wpSourceName=e,this._afterEnableWpAuto(o)}enableCloudAuto(t,e,i){this.type="cloudAuto",this.wpSource=t,this.switchType=e,this._afterEnableWpAuto(i)}_afterEnableWpAuto(t){this.setAutoWallpaperRaw(t);const e={currentP:t};e.type=this.type,e.switchType=this.switchType,e.timeEnd=this.timeEnd,e.ready=!1,e.oneP=!1,e.nextP=null,Object(h.j)(e),this._afterWpAutoSwitched()}async switchWallpaper(){Object(h.e)().ready||await this._prepareNextWp();const t=Object(h.e)();this.setAutoWallpaperRaw(t.nextP),Object(h.j)({ready:!1,nextP:null})}releaseLockLoadUserWp(){this._lockLoadUserWpNeeded=!1}lockLoadUserWp(){this._lockLoadUserWpNeeded=!0}loadUserWpNeededRaw(){const t=[];return this._lockLoadUserWpNeeded||t.push(m.a.loadUserWallpaperLibrary(),P.loadCollectionP(),P.loadLikedP()),p.a.all(t)}}T([d.g],L.prototype,"id",void 0),T([d.g],L.prototype,"url",void 0),T([d.g],L.prototype,"urlInUI",void 0),T([d.g],L.prototype,"rawUrl",void 0),T([d.g],L.prototype,"wpSource",void 0),T([d.g],L.prototype,"wpSourceCount",void 0),T([d.b],L.prototype,"setWpSouceCount",void 0),T([d.g],L.prototype,"type",void 0),T([d.g],L.prototype,"switchType",void 0),T([d.b],L.prototype,"setSwitchType",void 0),T([d.b],L.prototype,"setWpSourceCount",void 0),T([d.g],L.prototype,"wpSourceName",void 0),T([d.b],L.prototype,"setWpSourceName",null),T([d.g],L.prototype,"imageName",void 0),T([d.g],L.prototype,"imageSource",void 0),T([d.g],L.prototype,"imageType",void 0),T([d.b],L.prototype,"setWallpaper",null),T([d.b],L.prototype,"setWallpaperRaw",null),T([d.g],L.prototype,"color",void 0),T([d.b],L.prototype,"setColor",null),T([d.b],L.prototype,"setCloudWallpaper",null),T([d.b],L.prototype,"setCloudWallpaperRaw",null),T([d.b],L.prototype,"setAutoWallpaperRaw",null),T([d.g],L.prototype,"wpExt",void 0),T([d.b],L.prototype,"setWpExt",null),T([d.b],L.prototype,"enableBingWallpaper",null),T([d.b],L.prototype,"setBingWallpaper",null),T([d.g],L.prototype,"list",void 0),T([d.b],L.prototype,"setList",null),T([d.b],L.prototype,"pushList",null),T([d.g],L.prototype,"index",void 0),T([d.b],L.prototype,"setIndex",null),T([d.g],L.prototype,"timeEnd",void 0),T([d.b],L.prototype,"setTimeEnd",null),T([d.g],L.prototype,"remoteData",void 0),T([d.b],L.prototype,"setRemoteData",null),T([d.b],L.prototype,"pushRemoteData",null),T([d.b],L.prototype,"spliceRemoteData",null),T([d.g],L.prototype,"opacity",void 0),T([d.g],L.prototype,"blur",void 0),T([d.b],L.prototype,"setOpacity",void 0),T([d.b],L.prototype,"setBlur",void 0),T([d.e],L.prototype,"isAuto",null),T([d.g],L.prototype,"liked",void 0),T([d.b],L.prototype,"setLiked",void 0),T([d.b],L.prototype,"removeLiked",null),T([d.b],L.prototype,"addLiked",null),T([d.g],L.prototype,"customColorItems",void 0),T([d.b],L.prototype,"setCustomColorItems",void 0),T([d.b],L.prototype,"pushCustomColor",null),T([d.b],L.prototype,"removeCustomColor",null),T([d.b],L.prototype,"addCustomColorItem",null),T([d.g],L.prototype,"cloudCollection",void 0),T([d.b],L.prototype,"appendCloudCollection",void 0),T([d.b],L.prototype,"setCloudCollection",void 0),T([d.b],L.prototype,"addCloudCollectionP",null),T([d.b],L.prototype,"removeCloudCollectionP",null),T([d.e],L.prototype,"collectionLen",null),T([d.g],L.prototype,"cloudRecentUsed",void 0),T([d.b],L.prototype,"dropCloudRecentUsed",null),T([d.b],L.prototype,"setCloudRecentUsed",void 0),T([d.b],L.prototype,"appendCloudRecentUsed",void 0),T([d.g],L.prototype,"localRecentUsed",void 0),T([d.b],L.prototype,"setLocalRecentUsed",void 0),T([d.b],L.prototype,"appendLocalRecentUsed",void 0),T([d.e],L.prototype,"recentUsedLen",null),T([d.b],L.prototype,"addLocalRecentP",null),T([d.b],L.prototype,"addCloudRecentP",null),T([d.b],L.prototype,"removeCloudRecentUsedP",null),T([d.b],L.prototype,"modifyUserLibrary",null),T([d.g],L.prototype,"delay",void 0),T([d.b],L.prototype,"_setDefaultAfterInit",null),T([d.b],L.prototype,"_setLocalAfterInit",null),T([d.b],L.prototype,"_setCloudAutoAfterInit",null),T([d.b],L.prototype,"setDefaultWallpaperRaw",null),T([d.b],L.prototype,"setDefaultWallpaper",null),T([d.b],L.prototype,"setType",null),T([d.b],L.prototype,"_merge",null),T([d.b],L.prototype,"mergeRemote",void 0),T([d.b],L.prototype,"randomWallpaper",null),T([d.b],L.prototype,"enableUserLibraryAuto",null),T([d.b],L.prototype,"enableCloudAuto",null),T([d.b],L.prototype,"switchWallpaper",null);const P=new L;Object(d.h)(()=>P.wpSource,t=>m.a.setPSource(t),{fireImmediately:!0}),Object(d.h)(()=>k.userStore.isLogin,t=>{t||(P.setCloudCollection([]),P.setLiked([]),P.releaseLockLoadUserWp(),m.a.setCustomLibrary([]),m.a.clearCustomLibraryMap())})},function(t,e,i){"use strict";i.d(e,"b",(function(){return f})),i.d(e,"a",(function(){return b}));i(13),i(16),i(17),i(10),i(52);var o=i(8),n=i(363),r=i(21),a=i(129),s=i(338),l=i(375),c=i(0),p=i(472),d=i(497),h=i(345),u=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class g extends n.a{constructor(){super(...arguments),this.localSettings={},this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,this.iconSpaceWidth=0,this.iconSpaceHeight=0,this.setting=this.init(),this.updatetime=0,this.permission={topUseful:-1,topBookmark:-1,searchSuggest:-1,gmailNotice:-1,gmailCount:-1,todoNotice:-1},this.logs=new Map,this.permissionMapper={topBookmark:[["bookmarks"],["chrome://favicon/"]],topUseful:[["topSites"],["chrome://favicon/"]],searchSuggest:[[],["https://suggestion.baidu.com/","https://google.com/"]],gmailNotice:[["notifications"],["https://mail.google.com/"]],gmailCount:[[],["https://mail.google.com/"]],todoNotice:[["notifications"],[]]},this.showSettingHomeModal=!1,this.webClickName=""}init(t={}){return{notice:Object.assign({},s.b.notice),link:Object.assign({},s.b.link),view:Object.assign({},s.b.view),layout:Object.assign({},s.b.layout),animation:Object.assign({},s.b.animation),icon:Object.assign({},s.b.icon),search:Object.assign({},s.b.search),font:Object.assign({},s.b.font),_v1Setting:t}}get withPermissionTopUseful(){return this.setting.view.topUseful&&1===this.permission.topUseful}get withPermissionTopBookmark(){return this.setting.view.topBookmark&&1===this.permission.topBookmark}get withPermissionSearchSuggest(){return this.setting.search.searchSuggest&&1===this.permission.searchSuggest}get needPermissionList(){const t=[],{view:e,notice:i,search:o}=this.setting,{topUseful:n,topBookmark:r,searchSuggest:a,gmailNotice:s,gmailCount:l,todoNotice:d}=this.permission;return c.m&&o.searchSuggest&&1!==a&&t.push({key:"searchSuggest",title:i18n("permission_serch_suggest_title"),content:i18n("permission_serch_suggest_content")}),c.m&&i.gmail&&1!==s&&t.push({key:"gmailNotice",title:i18n("permission_gmail_notice_title"),content:i18n("permission_gmail_notice_content")}),c.m&&i.gmailNumber&&1!==l&&t.push({key:"gmailCount",title:i18n("permission_gmail_num_title"),content:i18n("permission_gmail_num_content")}),!c.r&&e.topBookmark&&1!==r&&t.push({key:"topBookmark",title:i18n("permission_top_bookmark_title"),content:i18n("permission_top_bookmark_content")}),!c.r&&e.topUseful&&1!==n&&t.push({key:"topUseful",title:i18n("permission_top_useful_title"),content:i18n("permission_top_useful_content")}),p.a.needNotificationPermission&&1!==d&&(c.r&&"denied"===Notification.permission||t.push({key:"todoNotice",title:i18n("permission_todo_notice_title"),content:i18n("permission_todo_notice_content")})),t}get sideRatio(){return this.setting.view.scaleSide}reset(){this.setting=this.init(this.setting._v1Setting)}diffRemote(t){return!o.d.structural(t.setting||{},this.setting)}sendSettingValue(){Object.keys(this.localSettings).length&&(h.a.sendEvent({settingValue:this.localSettings}),this.localSettings={})}async mergeRemote(t){const e=t.setting;if(!t.setting)return;const i=this.setting;this.setting={notice:Object.assign(Object.assign({},i.notice),e.notice),link:Object.assign(Object.assign({},i.link),e.link),view:Object.assign(Object.assign({},i.view),e.view),layout:Object.assign(Object.assign({},i.layout),e.layout),animation:Object.assign(Object.assign({},i.animation),e.animation),icon:Object.assign(Object.assign({},i.icon),e.icon),search:Object.assign(Object.assign({},i.search),e.search),font:Object.assign(Object.assign({},i.font),e.font),_v1Setting:e._v1Setting};const n=await r.a.getTimestamp();Object(o.i)(()=>{this.updatetime=n})}sendSettingLog(t,e){this.logs.has(t)&&clearTimeout(this.logs.get(t)),this.logs.set(t,setTimeout(()=>{h.a.sendEvent({settingAction:{[t]:e}}),this.logs.delete(t)},2e3))}async changeSetting(t,e,i){if(this.setting[t][e]===i)return;this.setting[t][e]=i;let n=`${t}_${e}`,a=i;"layout"!==t||"col"!==e&&"row"!==e||(n="layout",a=this.setting.layout.row+"*"+this.setting.layout.col),this.sendSettingLog(n,a),this.localSettings[n]=a;const s=await r.a.getTimestamp();Object(o.i)(()=>{this.updatetime=s}),this.changeSettingEffect(t,e,i)}changeSettingEffect(t,e,i){switch(!0){case"topBookmark"===e:i&&this.requestPermission("topBookmark",!0);break;case"topUseful"===e:i&&this.requestPermission("topUseful",!0);break;case"notice"===t&&"gmail"===e:i&&this.requestPermission("gmailNotice",!0);break;case"notice"===t&&"gmailNumber"===e:i&&this.requestPermission("gmailCount",!0);break;case"searchSuggest"===e:i&&this.requestPermission("searchSuggest",!0)}}async checkPermission(t){if(c.r){switch(t){case"todoNotice":"granted"===Notification.permission?this.permission[t]=1:"default"===Notification.permission?this.permission[t]=-1:this.permission[t]=0}return}if(1===this.permission[t])return;const e=this.permissionMapper[t];try{await a.a.has(e[0],e[1])&&Object(o.i)(()=>{this.permission[t]=1})}catch(t){}}async requestPermission(t,e=!1){if(c.r&&["todoNotice"].includes(t))return await Object(d.a)(),void Object(o.i)(()=>{this.permission.todoNotice=1});const i=this.permissionMapper[t];if(e||0!==this.permission[t]&&1!==this.permission[t])try{await a.a.request(i[0],i[1]),Object(o.i)(()=>{this.permission[t]=1}),"gmailNotice"===t&&this.checkPermission("todoNotice")}catch(e){e&&"REJECT"===e.message&&Object(o.i)(()=>{this.permission[t]=0})}}async requestAllPermission(){if(c.r)return await Object(d.a)(),void Object(o.i)(()=>{this.permission.todoNotice=1});const t=[[],[]];this.needPermissionList.forEach(e=>{const i=this.permissionMapper[e.key];t[0].push(...i[0]),i&&t[1].push(...i[1])});try{await a.a.request(t[0],t[1]),Object(o.i)(()=>{this.needPermissionList.forEach(t=>{this.permission[t.key]=1})})}catch(t){Object(o.i)(()=>{this.needPermissionList.forEach(t=>{this.permission[t.key]=0})})}}resetPermission(t){this.permission[t]=-1}setIconSpace(t){this.setting.icon.scale=t.iconScale,this.setting.layout.colGap=t.colGap,this.setting.layout.rowGap=t.rowGap,this.setting.search.scale=t.searchScale}openSearchSuggest(){this.setting.search.searchSuggest?this.requestPermission("searchSuggest",!0):this.setting.search.searchSuggest=!0}get sideScaleRatio(){return this.setting.view.scaleSide}toggleShowSettingHome(t){this.setting.view.isShowHomepageBtn=!t}toggleSettingHomeModal(){this.webClickName="",this.showSettingHomeModal=!this.showSettingHomeModal}closeSettingHomeModal(){this.showSettingHomeModal=!1}setWebClickName(t){this.webClickName=t}}u([o.g],g.prototype,"innerWidth",void 0),u([o.g],g.prototype,"innerHeight",void 0),u([o.g],g.prototype,"iconSpaceWidth",void 0),u([o.g],g.prototype,"iconSpaceHeight",void 0),u([o.g],g.prototype,"setting",void 0),u([o.g],g.prototype,"updatetime",void 0),u([o.g],g.prototype,"permission",void 0),u([o.e],g.prototype,"withPermissionTopUseful",null),u([o.e],g.prototype,"withPermissionTopBookmark",null),u([o.e],g.prototype,"withPermissionSearchSuggest",null),u([o.e],g.prototype,"needPermissionList",null),u([o.e],g.prototype,"sideRatio",null),u([o.b],g.prototype,"reset",null),u([o.b],g.prototype,"mergeRemote",null),u([o.b],g.prototype,"changeSetting",null),u([o.b],g.prototype,"checkPermission",null),u([o.b],g.prototype,"requestPermission",null),u([o.b],g.prototype,"requestAllPermission",null),u([o.b],g.prototype,"resetPermission",null),u([o.b],g.prototype,"setIconSpace",null),u([o.b],g.prototype,"openSearchSuggest",null),u([o.e],g.prototype,"sideScaleRatio",null),u([o.b],g.prototype,"toggleShowSettingHome",null),u([o.g],g.prototype,"showSettingHomeModal",void 0),u([o.b],g.prototype,"toggleSettingHomeModal",null),u([o.b],g.prototype,"closeSettingHomeModal",null),u([o.g],g.prototype,"webClickName",void 0),u([o.b],g.prototype,"setWebClickName",null);const f=new g;f.initSyncStore("store-setting",["setting","permission","updatetime"],s.b),f.initAutoBackup("setting",["setting"]),Object(o.c)(()=>{f.firstSync&&f.setting.view.topBookmark&&f.checkPermission("topBookmark")},{delay:50}),Object(o.c)(()=>{f.firstSync&&f.setting.view.topUseful&&f.checkPermission("topUseful")},{delay:50}),Object(o.c)(()=>{f.firstSync&&f.setting.notice.gmail&&f.checkPermission("gmailNotice")},{delay:50}),Object(o.c)(()=>{p.a.firstSync&&p.a.needNotificationPermission&&f.checkPermission("todoNotice")},{delay:50}),Object(o.c)(()=>{f.firstSync&&f.setting.notice.gmailNumber&&f.checkPermission("gmailCount")},{delay:50}),Object(o.c)(()=>{f.firstSync&&f.setting.search.searchSuggest&&f.checkPermission("searchSuggest")},{delay:50}),Object(o.c)(()=>{f.firstSync&&1===f.permission.gmailNotice&&r.a.send({key:"bg-notice-gmail-permission",data:!0})}),Object(o.c)(()=>{if(f.firstSync){const{gmail:t,gmailVoice:e,gmailNumber:i}=f.setting.notice,{gmailCount:o,gmailNotice:n}=f.permission;r.a.send({key:"bg-notice-gmail-updated",data:{gmail:t&&1===n,gmailVoice:e,gmailNumber:i&&(1===n||1===o)}})}},{delay:100}),Object(o.c)(()=>{if(!0===f.setting.layout.custom){const{customItem:t}=f.setting.layout;Object(o.i)(()=>{f.setting.layout.row=t[0],f.setting.layout.col=t[1]})}}),Object(o.c)(()=>{if(f.firstSync){const t={"--side-ratio":f.sideRatio,"--main-ratio":f.setting.view.scaleMain,"--icon-radius":Math.round(100*f.setting.icon.radius)+"%","--icon-font-color":f.setting.font.color,"--icon-font-size":Math.ceil(Math.max(f.setting.font.size*f.setting.view.scaleMain,12))+"px","--icon-opacity":f.setting.icon.opacity,"--icon-visible":f.setting.icon.isHideIconName?"hidden":"visible","--search-radius":""+f.setting.search.radius,"--search-opacity":f.setting.search.opacity};r.a.setStyle(t)}},{delay:50}),Object(o.c)(()=>{if(f.firstSync){let t=0,e=20;f.withPermissionTopBookmark&&(t+=36),f.withPermissionTopUseful&&(e+=26);const i={"--top-bar-height":t+"px","--settings-icon-top-offset":e+"px"};r.a.setStyle(i)}});const m=t=>{const e={"--search-height":t.searchHeight,"--search-width":t.searchWidth,"--search-margin-top":t.searchMarginTop,"--search-margin-bottom":t.searchMarginBottom,"--search-ratio":t.searchRatio,"--icon-box-width":t.iconBoxWidth,"--icon-box-height":t.iconBoxHeight,"--icon-one-height":t.iconOneHeight,"--icon-width":t.iconWidth,"--mini-icon-padding":t.miniIconPadding,"--icon-ratio":t.iconRatio,"--icon-row":f.setting.layout.row,"--icon-col":f.setting.layout.col,"--main-icons-margin":t.iconsMargin};r.a.setStyle(e)},b=(t=!0)=>{const e={row:f.setting.layout.row,col:f.setting.layout.col,rowGap:f.setting.layout.rowGap,colGap:f.setting.layout.colGap,iconScale:f.setting.icon.scale,searchScale:f.setting.search.scale,innerHeight:innerHeight,innerWidth:innerWidth,miniMode:f.setting.icon.miniMode,fontSize:f.setting.font.size,topUseful:f.withPermissionTopUseful,topBookmark:f.withPermissionTopBookmark,mainRatio:f.setting.view.scaleMain};if(t)requestIdleCallback(()=>{const t=Object(l.a)(e);m(t)});else{const t=Object(l.a)(e);m(t)}};Object(o.c)(()=>{f.firstSync&&b(!1)},{delay:40}),window.addEventListener("resize",r.a.throttle(()=>{b(!1)},56))},,function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var o=i(126),n=i.n(o),r=(i(13),i(16),i(10),i(8)),a=i(481),s=i.n(a),l=i(363),c=i(21),p=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const d=[{text:i18n("todo_welcome"),todoId:"todo-id1dtkk87it2iepal6dv4hr2uig0c",time:Date.now(),updatetime:0,done:!1}];class h extends l.a{constructor(){super(...arguments),this.todoList=d,this.currenetState="done",this.listLength=localStorage.getItem("todo-length")||0}toggleState(t){this.currenetState=t}get needNotificationPermission(){return this.todoList.some(t=>!!t.dueDate)}diffRemote(t){const e=t=>{if(null==t?void 0:t.updatetime){const e={updatetime:void 0};return t.done=!!t.done,Object.assign(Object.assign({},t),e)}},i=s()(t.todoList||[],e),o=s()(Object(r.j)(this.todoList),e);return!r.d.structural(i,o)}mergeRemote(t,e){if(t.todoList)if(e)this.todoList=t.todoList;else{const e=this.todoList,i=t.todoList,{result:o}=c.a.mergeArray(e,i,"todoId");this.todoList=o}}edit(t){this.todoList=this.todoList.map(e=>e.todoId===t?Object.assign(Object.assign({},e),{edit:!e.edit}):e)}get hasDoneTodo(){return this.todoList.filter(t=>t.done).length}async addTodo(t){if(!n()(t).call(t).length)return;const e={done:!1,time:+new Date,todoId:c.a.randomId("todo-"),updatetime:await c.a.getTimestamp(),text:t};Object(r.i)(()=>{this.todoList=[e,...this.todoList]})}removeTodo(){this.todoList=this.todoList.filter(t=>!t.done)}deleteTodo(t){this.todoList=this.todoList.filter(e=>e.todoId!==t)}async toggleTodo(t){const e=await c.a.getTimestamp();Object(r.i)(()=>{this.todoList=this.todoList.map(i=>i.todoId===t?Object.assign(Object.assign({},i),{done:!i.done,updatetime:e}):Object.assign({},i))})}async updateTodo(t,e){const i=await c.a.getTimestamp();Object(r.i)(()=>{this.todoList=this.todoList.map(o=>o.todoId===t?Object.assign(Object.assign(Object.assign({},o),e),{updatetime:i,edit:!1}):Object.assign({},o))})}removeTime(t){this.todoList=this.todoList.map(e=>e.todoId===t?Object.assign(Object.assign({},e),{dueDate:"",dueTime:"",dueTimestamp:null}):e)}}p([r.g],h.prototype,"todoList",void 0),p([r.g],h.prototype,"currenetState",void 0),p([r.b],h.prototype,"toggleState",null),p([r.e],h.prototype,"needNotificationPermission",null),p([r.b],h.prototype,"mergeRemote",null),p([r.b],h.prototype,"edit",null),p([r.g],h.prototype,"listLength",void 0),p([r.e],h.prototype,"hasDoneTodo",null),p([r.b],h.prototype,"addTodo",null),p([r.b],h.prototype,"removeTodo",null),p([r.b],h.prototype,"deleteTodo",null),p([r.b],h.prototype,"toggleTodo",null),p([r.b],h.prototype,"updateTodo",null),p([r.b],h.prototype,"removeTime",null);const u=new h;u.initSyncStore("store-todo",["todoList","listLength"],{},!0),u.initAutoBackup("todo",["todoList"]),Object(r.c)(()=>{if(u.firstSync){const t=u.todoList.filter(t=>!t.done).length;Object(r.i)(()=>{u.listLength=t}),localStorage.setItem("todo-length",t+"")}}),Object(r.c)(()=>{let t=!1;const{todoList:e}=u;for(let i=0;i<e.length-1;i++){const{done:o}=e[i],n=e[i+1].done;if(o&&!n){t=!0;break}}t&&(Object(r.i)(()=>{const t=e.filter(t=>t.done),i=e.filter(t=>!t.done);u.todoList=[...i,...t]}),t=!1)},{delay:300})},function(t,e,i){"use strict";i.r(e),i.d(e,"weatherStore",(function(){return v})),i.d(e,"getCurrentWeather",(function(){return w}));var o=i(7),n=i.n(o),r=i(471),a=i.n(r),s=(i(13),i(16),i(10),i(8)),l=i(81),c=i(21),p=i(363),d=i(0);const h={100:i18n("w_100"),101:i18n("w_101"),102:i18n("w_102"),103:i18n("w_103"),104:i18n("w_104"),200:i18n("w_200"),201:i18n("w_201"),202:i18n("w_202"),203:i18n("w_203"),204:i18n("w_204"),205:i18n("w_205"),206:i18n("w_206"),207:i18n("w_207"),208:i18n("w_208"),209:i18n("w_209"),210:i18n("w_210"),211:i18n("w_211"),212:i18n("w_212"),213:i18n("w_213"),300:i18n("w_300"),301:i18n("w_301"),302:i18n("w_302"),303:i18n("w_303"),304:i18n("w_304"),305:i18n("w_305"),306:i18n("w_306"),307:i18n("w_307"),308:i18n("w_308"),309:i18n("w309"),310:i18n("w_310"),311:i18n("w_311"),312:i18n("w_312"),313:i18n("w_313"),314:i18n("w_314"),315:i18n("w_315"),316:i18n("w_316"),317:i18n("w_317"),318:i18n("w_318"),399:i18n("w_399"),400:i18n("w_400"),401:i18n("w_401"),402:i18n("w_402"),403:i18n("w_403"),404:i18n("w_404"),405:i18n("w_405"),406:i18n("w_406"),407:i18n("w_407"),408:i18n("w_408"),409:i18n("w_409"),410:i18n("w_410"),499:i18n("w_499"),500:i18n("w_500"),501:i18n("w_501"),502:i18n("w_502"),503:i18n("w_503"),504:i18n("w_504"),507:i18n("w_507"),508:i18n("w_508"),509:i18n("w_509"),510:i18n("w_510"),511:i18n("w_511"),512:i18n("w_512"),513:i18n("w_513"),514:i18n("w_514"),515:i18n("w_515"),900:i18n("w_900"),901:i18n("w_901"),999:i18n("w_999")},u={alyBGColor(t){let e="#36B3FF";switch(t.conditionCode){case"100":case"101":case"102":case"103":case"104":e="#0F7CFF";break;case"200":case"201":case"202":case"203":case"204":case"205":case"206":e="#10BDFF";break;case"207":case"208":case"209":case"210":case"211":case"212":e="#096BB2";break;case"213":case"900":e="#FF7F3B";break;case"300":case"301":case"302":case"303":case"304":case"305":case"306":case"307":case"308":case"309":case"310":case"311":case"312":case"313":case"314":case"315":case"316":case"317":case"318":case"399":e="#427BD1";break;case"301":case"300":case"402":case"403":case"404":case"405":case"406":case"407":case"408":case"409":case"410":case"4991":e="#87A6D5";break;case"500":case"501":case"502":case"503":case"504":case"505":case"506":case"507":case"508":case"509":case"510":case"511":case"512":case"513":case"514":case"515":case"999":e="#98A6BD";break;default:e="#0441C5"}return e},alyWIcon:t=>`${d.a}/weather/code_${t.conditionCode}.png`,alyText:t=>h[t.conditionCode]};function g(t,e,i){let o,n;return"celsius"===e?(o=t,n="°C"):(o=Math.floor(1.8*t+32),n="°F"),i&&(o+=n),o}var f=i(345),m=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},b=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(i[o[n]]=t[o[n]])}return i};class y extends p.a{constructor(){super(...arguments),this.localData={},this.list=[],this.lastUpdated=+new Date,this.unit="celsius",this.isShowModal=!1,this.isShowSetting=!1,this.searchState="none",this.citys=[]}get formateList(){return this.list.filter(t=>t.items).map(t=>{var e=b(t,[]);return e.items=e.items.map((t,e)=>{var i=b(t,[]);return 0===e&&(i._bgColor=u.alyBGColor(i),i._text=u.alyText(i)),i._bgImg=u.alyWIcon(i),i}),e})}sortList(t){this.list=t}changeIndex(t,e){var i;if(t===e)return;let o=[...this.list];const n=o.findIndex(e=>e.cid===t);if(-1===n)return;if("bottom"===e){const[t]=o.splice(n,1);o.push(t)}else if("top"===e){const[t]=o.splice(n,1);o.unshift(t)}else{const t=o.findIndex(t=>t.cid===e);if(-1===t)return;const[i]=o.splice(n,1);o.splice(t,0,i)}const r=(null===(i=this.list.filter(t=>t.top)[0])||void 0===i?void 0:i.name)||"";(r===t||r===e)&&(o=this.list.map(t=>t.top?Object.assign(Object.assign({},t),{top:0}):t)),this.list=o}openModal(){this.isShowModal=!0}closeModal(){this.isShowModal=!1,this.searchCitys("")}updateList(t){this.list=t}diffRemote(t){var e;if((null===(e=null==t?void 0:t.list)||void 0===e?void 0:e.length)!==this.list.length)return!0;if(this.unit!==t.unit)return!0;return this.list.some((e,i)=>e.cid!==t.list[i].cid)}async mergeRemote(t,e){if(t.list)try{const i=await this.getWeatherByCid(t.list);Object(s.i)(()=>{if(this.unit=t.unit,e)this.list=i;else{const t=this.list,e=i,{result:o}=c.a.mergeArray(t,e,"cid","updateTime");this.list=o}})}catch(t){}}async getWeatherByCid(t){t=t.filter(t=>t.name&&t.cid&&t.items);return await n.a.all(t.map(async t=>{if(t.cid){const e=await l.i.getForecastWeather(t.cid);if(null==e?void 0:e.data){return Object.assign(Object.assign({},e.data),{name:t.name})}}}))}async initLocal(){const t=await l.i.getLocalCity();Object(s.i)(()=>{t&&(this.localData=t.data)})}async addCity(t,e){const{data:i}=await l.i.getForecastWeather(t);if(!i)throw new Error(i18n("no_current_city_weather_data"));Object(s.i)(()=>{for(const e in this.list)if(this.list[e].cid===t)throw new Error(i18n("repeat_city"));this.list.push(Object.assign(Object.assign({},i),{cid:t,name:e})),this.lastUpdated=+new Date,this.closeModal()})}async searchCitys(t){if(!t)return this.citys=[],void(this.searchState="none");this.searchState="ing";try{const{data:e}=await l.i.getCityList(t);e?Object(s.i)(()=>{if(200===e.status){this.searchState="done";const t=e.cities.filter(t=>!this.filterCity(t.cid));this.citys=t}}):Object(s.i)(()=>{this.searchState="error"})}catch(t){Object(s.i)(()=>{this.searchState="error"})}}filterCity(t){const e=t.substr(t.length-1);return/^[a-zA-Z]+$/.test(e)}changeSelected(t,e){this.citys[t].selected=e}deleteCityWeather(t){let e=-1;for(const i in this.list)t===this.list[i].cid&&(e=Number(i));this.list.splice(e,1),this.lastUpdated=+new Date}changeUnit(){this.unit="celsius"===this.unit?"fahrenheit":"celsius",f.a.sendEvent({settingAction:{weatherUnit:this.unit}})}toggleSetting(){this.isShowSetting=!this.isShowSetting}closeSetting(){this.isShowSetting=!1}reset(){this.isShowSetting=!1,this.isShowModal=!1}toTop(t,e){var i;this.list=a()(i=this.list.map(i=>i.cid===t?Object.assign(Object.assign({},i),{top:0===e?1:0}):Object.assign(Object.assign({},i),{top:0}))).call(i,(t,e)=>e.top-t.top)}toggleOpen(t){this.list=this.list.map(e=>e.cid===t?Object.assign(Object.assign({},e),{open:0===e.open?1:0}):Object.assign({},e))}}m([s.g],y.prototype,"localData",void 0),m([s.g],y.prototype,"list",void 0),m([s.g],y.prototype,"lastUpdated",void 0),m([s.g],y.prototype,"unit",void 0),m([s.g],y.prototype,"isShowModal",void 0),m([s.g],y.prototype,"isShowSetting",void 0),m([s.g],y.prototype,"searchState",void 0),m([s.g],y.prototype,"citys",void 0),m([s.e],y.prototype,"formateList",null),m([s.b],y.prototype,"sortList",null),m([s.b],y.prototype,"changeIndex",null),m([s.b],y.prototype,"openModal",null),m([s.b],y.prototype,"closeModal",null),m([s.b],y.prototype,"updateList",null),m([s.b],y.prototype,"mergeRemote",null),m([s.b],y.prototype,"addCity",null),m([s.b],y.prototype,"searchCitys",null),m([s.b],y.prototype,"changeSelected",null),m([s.b],y.prototype,"deleteCityWeather",null),m([s.b],y.prototype,"changeUnit",null),m([s.b],y.prototype,"toggleSetting",null),m([s.b],y.prototype,"closeSetting",null),m([s.b],y.prototype,"reset",null),m([s.b],y.prototype,"toTop",null),m([s.b],y.prototype,"toggleOpen",null);const v=new y;v.initSyncStore("store-weather",["localData","list","unit","lastUpdated"],{},!0),v.initAutoBackup("weather",["list","unit"]);const w=()=>{const t=v.formateList[0],e=null==t?void 0:t.items[0];if(!e)return{};return{name:g(e.tmpMax,v.unit,!0),bgColor:e._bgColor,bgImg:e._bgImg}};Object(s.c)(()=>{v.list.some(t=>!t||!t.cid)&&(d.j&&alert("error"),Object(s.i)(()=>{v.list=v.list.filter(t=>(null==t?void 0:t.name)&&(null==t?void 0:t.cid)&&(null==t?void 0:t.items))}))})},,function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var o=i(104),n=i.n(o),r=i(471),a=i.n(r),s=(i(13),i(16),i(52),i(10),i(8)),l=i(481),c=i.n(l),p=i(363),d=i(470),h=i(21),u=i(0),g=i(191),f=i(365),m=i(473),b=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class y extends p.a{constructor(){super(...arguments),this.sites=Object(g.f)(u.B.lang),this.editingId=null,this.currentPageIndex=0,this.mergeSiteArray=(t,e,i)=>{const o=t=>{if("object"==typeof t){if(t.target===g.j.target){const e=["target","uuid"];return n()(e).call(e,(e,i)=>e+t[i],"")}{var e;const i=a()(e=Object.keys(t).filter(t=>"id"!==t&&"updatetime"!==t)).call(e);return n()(i).call(i,(e,i)=>e+t[i],"")}}},r=(t=>{const e=Object.create(null),i=t=>{t.forEach(t=>{var o;if(Array.isArray(t))i(t);else if(t&&t.id){const n=t.id;e[n]=t,(null===(o=t.children)||void 0===o?void 0:o.length)>0&&i(t.children)}})};return i(t),e})(e),s=(t=>{const e=Object.create(null),i=t=>{t.forEach(t=>{var n;if(Array.isArray(t))i(t);else if("object"==typeof t)if((null===(n=t.children)||void 0===n?void 0:n.length)>0)i(t.children);else{const i=o(t);e[i]=!0}})};return i(t),e})(e);let l=!1;t.forEach((e,i)=>{t[i]=e.filter(t=>{var e;const i=r[t.id],n=t.updatetime||0;if((null===(e=t.children)||void 0===e?void 0:e.length)>0){if(i){return n>(i.updatetime||0)&&(l=!0,i.name=t.name),t.children.forEach(t=>{if(r[t.id]){const e=r[t.id].updatetime||0;(t.updatetime||0)>e&&(l=!0,Object.assign(r[t.id],t))}else l=!0,i.children.push(t)}),!1}return t.children=t.children.filter(t=>{if(r[t.id]){const e=r[t.id].updatetime||0;return(t.updatetime||0)>e&&(l=!0,Object.assign(r[t.id],t)),!1}return!0}),0!==t.children.length&&(1===t.children.length&&(Object.assign(t,t.children[0]),delete t.children),!0)}{if(!t.updatetime)return!1;const e=o(t);if(s[e])return!1;if(i){return n>(i.updatetime||0)&&(l=!0,Object.assign(r[t.id],t)),!1}return!0}})});const c=[];if(t.forEach(t=>{t.forEach(t=>{c.push(t)})}),c.length>0&&e.length>0){l=!0;let t=e.length-1;c.forEach(o=>{e[t].length<i?e[t].push(o):(t+=1,e[t]=[o])})}return{result:e,isLocalEffective:l}},this.convertBackupEquals=t=>{const{sites:e}=t;return(null==e?void 0:e.length)&&e.forEach(t=>{(null==t?void 0:t.length)&&t.forEach(t=>{(null==t?void 0:t.uuid)===g.j.uuid?(t.name=void 0,t.bgColor=void 0,t.bgImage=void 0):(null==t?void 0:t.children)&&t.children.forEach(t=>{(null==t?void 0:t.uuid)===g.j.uuid&&(t.name=void 0,t.bgColor=void 0,t.bgImage=void 0)})})}),t}}get uids(){const t=new Set;return(f.pluginStore.pluginViews.includes("infinity://settings")||f.pluginStore.pluginViews.includes("profile"))&&this.sites.forEach(e=>{e.filter(t=>t).forEach(e=>{e.children?e.children.forEach(e=>{t.add(e.uuid+"#"+e.target)}):t.add(e.uuid+"#"+e.target)})}),t}changeCurrentPage(t){this.currentPageIndex=t}diffRemote(t){const e=t=>{if((null==t?void 0:t.target)===g.j.target){const e={name:void 0,bgColor:void 0,bgImage:void 0};return Object.assign(Object.assign({},t),e)}},i=c()(t.sites||[],e),o=c()(Object(s.j)(this.sites),e);return!s.d.structural(i,o)}mergeRemote(t,e){if(!t.sites)return;const i=Object(m.getCurrentWeather)();if(e)this.setWeatherIcon(t.sites,i),this.sites=t.sites;else{const{col:e,row:o}=d.b.setting.layout,n=e*o,{result:r}=this.mergeSiteArray(Object(s.j)(this.sites),t.sites,n);this.setWeatherIcon(r,i),this.sites=r}this.sites.length?this.sites.length-1<this.currentPageIndex&&document.querySelector("newtab-main").toPage(this.sites.length-1):this.currentPageIndex=0}clearEditSite(){this.editingId=null}setEditSite(t){this.editingId=t}delSites(t=[],e=!0){var i,o,n;const[r,a,s]=t;let l,c=null;return 2===t.length?l=this.sites[r].splice(a,1):3===t.length&&(l=null===(o=null===(i=this.sites[r][a])||void 0===i?void 0:i.children)||void 0===o?void 0:o.splice(s,1)),e&&this.finishingSites(t[0]),2===t.length&&0===(null===(n=this.sites[r])||void 0===n?void 0:n.length)&&(c=r),{data:l,clearPageIndex:c}}insertSite(t=[],e){var i,o;const[n,r,a]=t;2===t.length?this.sites[n].splice(r,0,e):3===t.length&&(null===(o=null===(i=this.sites[n][r])||void 0===i?void 0:i.children)||void 0===o||o.splice(a,0,e))}handelStatus(t,e,i,o,n){const[r]=t;let[a]=e;if(null!==n&&n<a&&(a-=1,document.querySelector("newtab-main")._toPrevPage(!0)),3===t.length&&i.children.length<2){const t=this.findIndex(r,i.id);this.destroyFolder(t),a-=1}const s=null!==n?Math.min(n,a):a;return this.finishingSites(Math.max(s,0)),this.findIndex(a,o.id)}findIndex(t,e){const i=[];for(let o=Math.max(t||0,0);o<this.sites.length;o++){const t=this.sites[o];i[0]=o;if(t.find((t,o)=>t.id===e?(i[1]=o,!0):!!t.children&&t.children.find((t,n)=>t.id===e&&(i[1]=o,i[2]=n,!0))))return i}}findIcon(t,e){let i={};for(let o=Math.max(t||0,0);o<this.sites.length;o++){if(this.sites[o].some(t=>t.id===e?(i=t,!0):!!t.children&&t.children.some(t=>t.id===e&&(i=t,!0))))return i}return i}destroyFolder(t){const[e,i]=t,o=this.sites[e][i].children;0===o.length?this.sites[e].splice(i,1):(this.sites[e][i]=o.shift(),o.length>0&&this.sites[e].push(...o))}manualDestroyFolder(t){const[e,i]=t,o=this.sites[e][i].children;this.sites[e].splice(i,1);const{col:n,row:r}=d.b.setting.layout,a=n*r-this.sites[e].length;if(a>=o.length)this.sites[e].push(...o);else{const t=o.splice(0,a);this.sites[e].push(...t);const i=this.sites.length-1;this.sites[i].push(...o),this.finishingSites(i)}}finishingSites(t=0){const{col:e,row:i}=d.b.setting.layout,o=e*i,n=t=>{if(this.sites.length<=t)return;const e=this.sites[t].length;if(e>o){const i=t+1,r=this.sites[t].splice(o,e-o);this.sites.length>i?this.sites[i].unshift(...r):this.sites.push(r),n(i)}else 0===e?(t&&t===this.sites.length-1&&document.querySelector("newtab-main").toPage(t-1),this.sites.splice(t,1),n(t)):n(t+1)};n(t);for(let t=0;t<this.sites.length;){const e=this.sites[t];e&&e.length||(this.sites.splice(t,1),t-=1),t+=1}}reSort(t,e){var i;const o=t*e,r=n()(i=this.sites).call(i,(t,e)=>t.concat(e),[]),a=Array(Math.ceil(r.length/o)).fill(null);this.sites=a.map((t,e)=>r.slice(e*o,(e+1)*o))}addSite(t,e=0){if(this.sites.length>e){const{col:i,row:o}=d.b.setting.layout,n=i*o;return this.sites[e].length<n?(this.sites[e].push(t),e):this.addSite(t,e+1)}return this.sites[e]=[t],e}isIcon(t,e){return!this.findIcon(t,e).children}changeFolderName(t,e){const[i,o]=t;this.sites[i][o].name=e,this.sites[i][o].updatetime=Date.now()}setWeatherIcon(t,e){t.forEach(t=>{t&&t.forEach(t=>{t.target===g.j.target&&(t.name=e.name||g.j.name,t.bgColor=e.bgColor||g.j.bgColor,t.bgImage=e.bgImg||g.j.bgImage),t.children&&t.children.forEach(t=>{t.target===g.j.target&&(t.name=e.name||g.j.name,t.bgColor=e.bgColor||g.j.bgColor,t.bgImage=e.bgImg||g.j.bgImage)})})})}async submitSite(t){if("color"===t.bgType?delete t.bgImage:"image"===t.bgType&&(delete t.bgFont,delete t.bgText,delete t.bgColorImage,"transparent"===t.bgColor&&(t.bgColor=void 0)),t.updatetime=await h.a.getTimestamp(),this.editingId){const e=this.findIcon(this.currentPageIndex,this.editingId);let i={};Object(s.i)(()=>{if(i=Object.assign(e,t),i.target===g.j.target){const t=Object(m.getCurrentWeather)();this.setWeatherIcon(v.sites,t)}})}else{const e=Object.assign({uuid:h.a.randomId("site-"),id:h.a.randomId("siteId-"),type:"web"},t),i=v.addSite(e,this.currentPageIndex);if(e.target===g.j.target){const t=Object(m.getCurrentWeather)();this.setWeatherIcon(v.sites,t)}document.querySelector("newtab-main").toPage(i)}return null}}b([s.g],y.prototype,"sites",void 0),b([s.g],y.prototype,"editingId",void 0),b([s.g],y.prototype,"currentPageIndex",void 0),b([s.e],y.prototype,"uids",null),b([s.b],y.prototype,"changeCurrentPage",null),b([s.b],y.prototype,"mergeRemote",null),b([s.b],y.prototype,"clearEditSite",null),b([s.b],y.prototype,"setEditSite",null),b([s.b],y.prototype,"delSites",null),b([s.b],y.prototype,"insertSite",null),b([s.b],y.prototype,"destroyFolder",null),b([s.b],y.prototype,"manualDestroyFolder",null),b([s.b],y.prototype,"finishingSites",null),b([s.b],y.prototype,"reSort",null),b([s.b],y.prototype,"addSite",null),b([s.b],y.prototype,"changeFolderName",null),b([s.b],y.prototype,"setWeatherIcon",null),b([s.b],y.prototype,"submitSite",null);const v=new y;v.initSyncStore("store-site",["sites"]),v.initAutoBackup("site",["sites"]),Object(s.h)(()=>[d.b.setting.layout.col,d.b.setting.layout.row].join(","),()=>{if(v.firstSync){const{col:t,row:e}=d.b.setting.layout;v.reSort(t,e),setTimeout(()=>{Object(d.a)(!1)},0)}});const w=()=>{requestIdleCallback(()=>{v.firstSync?v.sites.forEach((t,e)=>{t.forEach((t,i)=>{t||Object(s.i)(()=>{v.sites[e].splice(i,1)})})}):w()})};setTimeout(()=>{w()},60),Object(s.c)(()=>{if(m.weatherStore.firstSync){const t=Object(m.getCurrentWeather)();v.setWeatherIcon(v.sites,t)}},{delay:20})},function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var o=i(471),n=i.n(o),r=i(104),a=i.n(r),s=(i(13),i(16),i(52),i(10),i(8)),l=i(363),c=i(191),p=i(21),d=i(81),h=i(0),u=i(364),g=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const f=h.B.isZh?c.a:c.b;class m extends l.a{constructor(){super(...arguments),this.list=[],this.defaultSearch=c.e,this.listHash="",this.version="",this.lang="",this.ignoreSuggest=!1,this.searchEngine={custom:[],addList:[],current:f,all:[Object.assign(Object.assign({},f),{updatetime:0}),Object.assign(Object.assign({},c.c),{updatetime:0})]},this.convertBackupEquals=t=>{var e,i;let o=null===(e=null==t?void 0:t.searchEngine)||void 0===e?void 0:e.all,n=null===(i=null==t?void 0:t.searchEngine)||void 0===i?void 0:i.current;if(o&&(o=t.searchEngine.all.map(t=>t.uuid)),n&&(n=t.searchEngine.current.uuid),o||n){const e=Object.assign(Object.assign({},t.searchEngine),{all:o,current:n});return Object.assign(Object.assign({},t),{searchEngine:e})}return t},this.mergeAddArray=(t=[],e=[])=>{const i="uuid";if(!t||0===t.length)return{result:e||[],isLocalEffective:!1};const o=e.filter(t=>!!t),r=t=>{if("object"==typeof t){var e;const i=n()(e=Object.keys(t).filter(t=>"uuid"!==t&&"updatetime"!==t)).call(e);return a()(i).call(i,(e,i)=>e+t[i],"")}},s=(t=>{const e=Object.create(null);return t.forEach(t=>{const i=r(t);e[i]=!0}),e})(e),l=Object.create(null);e.forEach((t,e)=>{if(t[i]){const o=t[i];l[o]=e}});let c=!1;return t.filter(t=>0!==t.updatetime).forEach(t=>{const e=r(t);if(s[e])return;const n=t[i],a=l[n];if(void 0!==a){(o[a].updatetime||0)<(t.updatetime||0)&&(o[a]=t,c=!0)}else c=!0,o.push(t)}),{result:o.filter(t=>!!t),isLocalEffective:c}}}get allItems(){return[this.defaultSearch,...this.searchEngine.all]}diffRemote(t){var e,i;const o=t.searchEngine||{};if(JSON.stringify(o.addList||{})!==JSON.stringify(this.searchEngine.addList))return!0;if(JSON.stringify(o.custom||{})!==JSON.stringify(this.searchEngine.custom))return!0;if((null===(e=o.current)||void 0===e?void 0:e.uuid)!==this.searchEngine.current.uuid)return!0;if((null===(i=o.all)||void 0===i?void 0:i.length)!==this.searchEngine.all.length)return!0;return this.searchEngine.all.some((t,e)=>{var i,n;return(null===(n=null===(i=o.all)||void 0===i?void 0:i[e])||void 0===n?void 0:n.uuid)!==t.uuid})}mergeRemote(t,e){if(t.searchEngine)if(e)this.searchEngine=this.transformSearchI18n(t.searchEngine);else{const e=this.searchEngine.custom,i=t.searchEngine.custom,{result:o}=p.a.mergeArray(e,i,"uuid"),n=this.searchEngine.addList,r=t.searchEngine.addList,{result:a}=this.mergeAddArray(n,r),s=this.searchEngine.all,l=t.searchEngine.all,{result:c}=p.a.mergeArray(s,l,"uuid");this.searchEngine=this.transformSearchI18n({custom:o,addList:a,current:t.searchEngine.current,all:c})}}transformSearchI18n(t){const e=Object.create(null);this.list.forEach(t=>{e[t.uuid]=t});const i=t=>e[t.uuid]?Object.assign(Object.assign({},t),e[t.uuid]):t;return{custom:t.custom,addList:t.addList,current:i(t.current),all:t.all.map(t=>i(t))}}setActive(t){this.searchEngine.current=this.allItems[t]}closeSuggestTips(){this.ignoreSuggest=!0}delShortcut(t){const e=this.searchEngine.all.findIndex(e=>e.uuid===t);e>-1&&this.searchEngine.all.splice(e,1)}updateShortcut(t){if(t){this.searchEngine.all.some((e,i)=>e.uuid===t.uuid&&(this.searchEngine.all[i]=t,!0))||this.searchEngine.all.push(t);const e=this.searchEngine.current.uuid;t.uuid===e&&(this.searchEngine.current=t)}}createEngine(t,e=null){if(null===e){const e=p.a.randomId("custom-search-"),i=Object.assign(Object.assign({},t),{uuid:e});return this.searchEngine.custom.push(i),i}return this.searchEngine.custom[e]=Object.assign(Object.assign({},this.searchEngine.custom[e]),t),this.searchEngine.custom[e]}delEngine(t){const{uuid:e}=this.searchEngine.custom[t];return e!==this.searchEngine.current.uuid&&(this.delShortcut(e),this.searchEngine.custom.splice(t,1),!0)}createEngineAdd(t,e=null){if(null===e){const e=p.a.randomId("add-search-"),i=Object.assign(Object.assign({},t),{uuid:e});return this.searchEngine.addList.push(Object.assign(Object.assign({},t),{uuid:e})),i}return this.searchEngine.addList[e]=Object.assign(Object.assign({},this.searchEngine.addList[e]),t),this.searchEngine.addList[e]}delEngineAdd(t){return this.searchEngine.addList.splice(t,1),!0}async getEnginesList(){let t=this.version;this.lang!==h.B.lang&&(t="");const{data:e,error:i}=await d.d.getEnginesList(t);if(!i&&(Object(s.i)(()=>{var t;this.version=null===(t=e.meta)||void 0===t?void 0:t.version,this.lang=h.B.lang}),e.hash!==this.listHash))if(u.userStore.isLogin)this.updateEngines({list:e.list,listHash:e.hash});else{this.stopAutoBackupReaction();try{this.updateEngines({list:e.list,listHash:e.hash})}catch(i){}this.restartAutoBackupReaction()}}updateEngines({list:t,listHash:e}){this.list=t,this.listHash=e;const i={};t.forEach(t=>{i[t.uuid]=t});const o=this.searchEngine.current.uuid;i[o]&&(this.searchEngine.current=i[o]);const n=this.defaultSearch.uuid;i[n]&&(this.defaultSearch=i[n]);const r=[];this.searchEngine.all.forEach(t=>{const e=t.uuid;i[e]?0===t.updatetime?r.push(Object.assign(Object.assign({},i[e]),{updatetime:0})):r.push(Object.assign({},i[e])):r.push(t)}),this.searchEngine.all=r}sortShortcut(t,e){if(t===e)return;const i=[...this.searchEngine.all],o=i.findIndex(e=>e.uuid===t);if(-1!==o){if("all"===e){const[t]=i.splice(o,1);i.push(t)}else{const t=i.findIndex(t=>t.uuid===e);if(-1===t)return;const[n]=i.splice(o,1);i.splice(t,0,n)}this.searchEngine.all=i}}}g([s.g],m.prototype,"list",void 0),g([s.g],m.prototype,"defaultSearch",void 0),g([s.g],m.prototype,"listHash",void 0),g([s.g],m.prototype,"version",void 0),g([s.g],m.prototype,"lang",void 0),g([s.g],m.prototype,"ignoreSuggest",void 0),g([s.g],m.prototype,"searchEngine",void 0),g([s.e],m.prototype,"allItems",null),g([s.b],m.prototype,"mergeRemote",null),g([s.b],m.prototype,"setActive",null),g([s.b],m.prototype,"closeSuggestTips",null),g([s.b],m.prototype,"delShortcut",null),g([s.b],m.prototype,"updateShortcut",null),g([s.b],m.prototype,"createEngine",null),g([s.b],m.prototype,"delEngine",null),g([s.b],m.prototype,"createEngineAdd",null),g([s.b],m.prototype,"delEngineAdd",null),g([s.b],m.prototype,"getEnginesList",null),g([s.b],m.prototype,"updateEngines",null),g([s.b],m.prototype,"sortShortcut",null);const b=new m;b.initSyncStore("store-search",["searchEngine","list","listHash","ignoreSuggest","version","lang"],{list:c.g}),b.initAutoBackup("searcher",["searchEngine"]),requestIdleCallback(()=>{b.getEnginesList()})},function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var o=i(471),n=i.n(o),r=(i(13),i(16),i(10),i(8)),a=i(481),s=i.n(a),l=i(363),c=i(81),p=i(21),d=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const h=[{title:"",content:"",time:+new Date,id:"note-default-1ehj4oc7ubn8bgu9zb2spjip0vj",updatetime:0,fontSize:14}];class u extends l.a{constructor(){super(...arguments),this.linkModal=!1,this.list=h,this.checkedId=this.list[0].id,this.boldActive=!1}toogleLinkModal(){this.linkModal=!this.linkModal}setBoldActive(t){this.boldActive=t}get isEmpty(){return 0===this.list.length}get checkedNote(){return this.checkedId?this.list.filter(t=>t.id===this.checkedId)[0]:this.list[0]}get sortList(){var t,e;return(null===(t=this.list)||void 0===t?void 0:t.length)?n()(e=this.list.slice()).call(e,(t,e)=>e.time-t.time):[]}diffRemote(t){const e=t=>{if(null==t?void 0:t.updatetime){const e={updatetime:void 0};return Object.assign(Object.assign({},t),e)}},i=s()(t.list||[],e),o=s()(Object(r.j)(this.list),e);return!r.d.structural(i,o)}mergeRemote(t,e){if(t.list)if(e)this.list=t.list,this.checkedId=t.checkedId;else{const e=this.list,i=t.list;this.checkedId=t.checkedId;const{result:o}=p.a.mergeArray(e,i);this.list=o}}async add({title:t="",content:e=""}){const i=p.a.randomId("note-"),o=await p.a.getTimestamp(),n={title:t,content:e,time:+new Date,id:i,updatetime:o,fontSize:14};Object(r.i)(()=>{this.list=[n,...this.list],this.checkedId=i})}delete(t){this.list=this.list.filter(e=>e.id!==t),t!==this.checkedId||this.isEmpty||(this.checkedId=this.list[0].id)}updateId(t){this.checkedId=t}async updateNote(t){const e=await p.a.getTimestamp();Object(r.i)(()=>{var i;(null===(i=this.list)||void 0===i?void 0:i.length)&&(this.list=this.list.map(i=>i.id===t.id?Object.assign(Object.assign(Object.assign({},i),t),{updatetime:e}):Object.assign({},i)))})}async upload(t,e){var i,o;const{data:n,error:r}=await c.f.uploadFile(t,e+".png","infinity-notes-img");if(r){return{error:(null===(o=null===(i=r.response)||void 0===i?void 0:i.data)||void 0===o?void 0:o.error)?r.response.data.error:r.message,data:""}}return{data:n,error:""}}}d([r.g],u.prototype,"linkModal",void 0),d([r.b],u.prototype,"toogleLinkModal",null),d([r.g],u.prototype,"list",void 0),d([r.g],u.prototype,"checkedId",void 0),d([r.g],u.prototype,"boldActive",void 0),d([r.b],u.prototype,"setBoldActive",null),d([r.e],u.prototype,"isEmpty",null),d([r.e],u.prototype,"checkedNote",null),d([r.e],u.prototype,"sortList",null),d([r.b],u.prototype,"mergeRemote",null),d([r.b],u.prototype,"add",null),d([r.b],u.prototype,"delete",null),d([r.b],u.prototype,"updateId",null),d([r.b],u.prototype,"updateNote",null),d([r.b],u.prototype,"upload",null);const g=new u;g.initSyncStore("store-notes",["list","checkedId"],{},!0),g.initAutoBackup("note",["list","checkedId"])},,function(t,e,i){"use strict";var o=i(48),n=i.n(o),r=(i(13),i(16),i(10),i(52),i(8)),a=i(81),s=i(344),l=i(498),c=i(26),p=i.n(c),d=i(21),h=i(337),u=i(480),g=i(188),f=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class m{constructor(){this.cloudItems=[],this.setCloudItems=t=>this.cloudItems=t,this.appendCloudItems=t=>this.cloudItems.push(...t),this.recentItems=[],this.localItems=[],this.setLocalItems=t=>this.localItems=t,this.appendLocalItem=t=>{if(-1===this.localItems.findIndex(({id:e})=>e===t.id)){const e=Object(r.j)(this.localItems);this.setLocalItems([t].concat(e))}},this.collectItems=[],this.inLoading=!1,this.setInLoading=t=>this.inLoading=t,this.empty=!1,this.setEmpty=t=>this.empty=t,this.inLoadingNext=!1,this.setInLoadingNext=t=>this.inLoadingNext=t,this.error=!1,this.setError=t=>this.error=t,this.commonColorItems=[],this.filterCondition={},this._pageCount=0,this.mapToIcon={},this.removeFilterTag=()=>this.filterCondition.tag&&(this.filterCondition.tag=null),this.removeFilterColor=()=>this.filterCondition.color&&(this.filterCondition.color=null),this.localPObjectStore=p.a.createInstance({name:"idb-wallpaper",storeName:"store-local-wallpaper"}),this._loadLocalWallpapers()}setRecentItems(t){this.recentItems=t}async removeLocalItem(t){const e=this.localItems.findIndex(({id:e})=>e===t);-1!==e&&this.localItems.splice(e,1),await this.localPObjectStore.removeItem(t)}setCollectItems(t){this.collectItems=t}removeCollectItem(t){const e=this.collectItems.findIndex(({id:e})=>e===t);-1!==e&&this.collectItems.splice(e,1)}showItemExtraOpts(t){this.itemExtraOptsState===t?this.itemExtraOptsState=void 0:this.itemExtraOptsState=t}hideItemExtraOpts(){this.itemExtraOptsState=void 0}likeWp(t,e){const i=this.cloudItems.find(({id:e})=>e===t);i&&(1===e?i.like++:i.like>0&&i.like--)}initDataIfNeeded(){this.commonColorItems=[{id:window.__INFINITY__.wpColorId+"_1",type:"color",content:"#E1E1E1"},{id:window.__INFINITY__.wpColorId+"_2",type:"color",content:"#EE6D52"},{id:window.__INFINITY__.wpColorId+"_3",type:"color",content:"#FBAF42"},{id:window.__INFINITY__.wpColorId+"_4",type:"color",content:"#FFE000"},{id:window.__INFINITY__.wpColorId+"_5",type:"color",content:"#84D071"},{id:window.__INFINITY__.wpColorId+"_6",type:"color",content:"#6BC7DB"},{id:window.__INFINITY__.wpColorId+"_7",type:"color",content:"#4F9FED"},{id:window.__INFINITY__.wpColorId+"_8",type:"color",content:"#8D68E0"}],window.__INFINITY__.wallpaper_sources.forEach(t=>{this.mapToIcon[t.value]=t.icon})}async _loadLocalWallpapers(){const t=[];await this.localPObjectStore.iterate(e=>{const i=n.a.createObjectURL(e.file);if(e.rawUrl=e.url=i,e.smallFile){const t=n.a.createObjectURL(e.smallFile);e.content=t}else e.content=i;t.push(e)}),this.setLocalItems(t)}isFilterTag(t){return this.filterCondition.tag===t}setFilterTag(t){this.filterCondition.tag=t}isFilterColor(t){return this.filterCondition.color===t}setFilterColor(t){this.filterCondition.color=t}isFilterOrder(t){return this.filterCondition.order===t}setFilterOrder(t){this.filterCondition.order=t}clearState(){this.error&&this.setError(!1),this.empty&&this.setEmpty(!1),this.inLoading&&this.setInLoading(!1),this.inLoadingNext&&this.setInLoadingNext(!1)}async loadNextPage(){if(!(this.filterCondition.page>this._pageCount)){this.clearState(),this.setInLoadingNext(!0);try{const t=await this.loadWallpapersRaw(this.filterCondition);this.filterCondition.page=t.nextPage,this._pageCount=t.totalPages,this.appendCloudItems(t.data)}finally{this.setInLoadingNext(!1)}}}async loadCloudWallpapers(){const t=await this.loadWallpapersRaw(Object.assign(this.filterCondition,{page:0}));return this.filterCondition.page=t.nextPage,this._pageCount=t.totalPages,t.data}async loadWallpapersRaw(t){const{result:e,error:i}=await a.h.getWallpapers(t);if(i)throw i.__CANCEL__||(this.setError(!0),s.default.error(i.message),this.setInLoading(!1)),i;if(e.success)return e.data=Object(h.a)(e.data),e;throw s.default.error(i18n("unknown_mistake")),this.setError(!0),new Error(e)}async loadLocalImage(t){if(t.size>window.__INFINITY__.xMaxLocalFileSize)return void s.default.error(i18n("wallpaper_upload_file_size_exceed"));let e,i=t;try{Object(h.e)(t)&&(e=s.default.loading(i18n("wallpaper_loading")),await d.a.sleep(150),i=await Object(l.a)(t,{maxSizeMB:window.__INFINITY__.maxLocalFileSize/1024/1024,maxWidthOrHeight:window.__INFINITY__.minFileMaxWidthOrHeight,useWebWorker:!1}));const o=await this.addFileToLocal(i);return this.appendLocalItem(o),o}catch(t){throw s.default.error(i18n("wallpaper_apply_from_local_error")),t}finally{e&&e()}}async addFileToLocal(t){const e={type:"local",id:`${window.__INFINITY__.wpId}${Object(u.a)()}`,file:t};e.similarColor=await d.a.getSimilarColor(t);const i=await Object(l.a)(t,{useWebWorker:!0,maxWidthOrHeight:2*g.imgConfig.smallWidth});e.smallFile=i,await this.localPObjectStore.setItem(e.id,e);const o=n.a.createObjectURL(t),r=n.a.createObjectURL(i);return e.rawUrl=e.url=o,e.content=r,e}}f([r.g],m.prototype,"cloudItems",void 0),f([r.b],m.prototype,"setCloudItems",void 0),f([r.b],m.prototype,"appendCloudItems",void 0),f([r.g],m.prototype,"recentItems",void 0),f([r.b],m.prototype,"setRecentItems",null),f([r.g],m.prototype,"localItems",void 0),f([r.b],m.prototype,"setLocalItems",void 0),f([r.b],m.prototype,"removeLocalItem",null),f([r.g],m.prototype,"collectItems",void 0),f([r.b],m.prototype,"setCollectItems",null),f([r.b],m.prototype,"removeCollectItem",null),f([r.g],m.prototype,"itemExtraOptsState",void 0),f([r.b],m.prototype,"showItemExtraOpts",null),f([r.b],m.prototype,"hideItemExtraOpts",null),f([r.g],m.prototype,"inLoading",void 0),f([r.b],m.prototype,"setInLoading",void 0),f([r.g],m.prototype,"empty",void 0),f([r.b],m.prototype,"setEmpty",void 0),f([r.g],m.prototype,"inLoadingNext",void 0),f([r.b],m.prototype,"setInLoadingNext",void 0),f([r.g],m.prototype,"error",void 0),f([r.b],m.prototype,"setError",void 0),f([r.b],m.prototype,"likeWp",null),f([r.g],m.prototype,"commonColorItems",void 0),f([r.b],m.prototype,"initDataIfNeeded",null),f([r.g],m.prototype,"filterCondition",void 0),f([r.b],m.prototype,"setFilterTag",null),f([r.b],m.prototype,"setFilterColor",null),f([r.b],m.prototype,"setFilterOrder",null),f([r.b],m.prototype,"removeFilterTag",void 0),f([r.b],m.prototype,"removeFilterColor",void 0),f([r.b],m.prototype,"clearState",null);const b=new m;e.a=b},,,function(t,e,i){"use strict";var o=i(7),n=i.n(o),r=(i(10),i(13),i(16),i(21)),a=i(8),s=i(344),l=i(251),c=i(498),p=i(499),d=i.n(p),h=i(188),u=i(480),g=i(337),f=i(0),m=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class b{constructor(){this.setSwitchType=t=>this.switchTypeInUI=t,this.setPSource=t=>this.pSource=t,this.customLibraryMap={},this.customLibrary=[],this.setCustomLibrary=t=>this.customLibrary=t,this.maxCountPerLibrary=20,this.maxFileLenPerUpload=20,this._maxPerQueue=4,this._uploadKey="custom-wallpaper-library",this.switch_interval_options={"when-newtab":f.r?i18n("wallpaper_switch_when_open_web"):i18n("wallpaper_switch_when_open"),"per-hour":i18n("wallpaper_switch_per_hour"),"twelve-hour":i18n("wallpaper_switch_per_twelve_hour"),"one-day":i18n("wallpaper_switch_everyday")},this.iOptionsModalShow=!1,this.toggleIOptionsModal=t=>{t.stopPropagation(),this.iOptionsModalShow?this.iOptionsModalShow=!1:this.iOptionsModalShow=!0},this.mapUploadWallpapers=t=>t.map(t=>{const{content:e,url:i,rawUrl:o}=Object(h.convertURL)(t.url);return t.type="user-library",t.content=e,t.url=i,t.rawUrl=o,t})}setCustomLibraryMap(t,e){this.customLibraryMap[t]=e}delCustomLibraryMap(t){delete this.customLibraryMap[t]}clearCustomLibraryMap(){this.customLibraryMap={}}popCustomLibraryItem(t,e){const i=this.customLibraryMap[t],o=i.findIndex(({id:t})=>t===e);-1!==o&&i.splice(o,1)}appendCustomLibraryItem(t,e){const i=this.customLibraryMap[t];this.customLibraryMap[t]=i.concat(e)}getLibraryItems(t){return this.customLibraryMap[t]}getLibraryCoverImg(t){const e=this.customLibraryMap[t];return e&&e.length>0?e[0].content:null}popCustomLibrary(t){const e=this.customLibrary.findIndex(({libraryId:e})=>e===t);-1!==e&&this.customLibrary.splice(e,1)}appendCustomLibrary(t){this.customLibrary.push(t)}setCustomLibraryName(t,e){const i=this.customLibrary.findIndex(({libraryId:e})=>e===t);-1!==i&&(this.customLibrary[i].libraryName=e)}closeIOptionsModal(){this.iOptionsModalShow&&(this.iOptionsModalShow=!1)}async renameLibraryName(t,e){this.setCustomLibraryName(t,e),await Object(h.renameWallpaperLibrary)(t,e)}async removeWallpaperLibrary(t){const e=s.default.loading(i18n("wallpaper_loading"));try{await Object(h.removeWallpaperLibrary)(t),this.delCustomLibraryMap(t),this.popCustomLibrary(t)}finally{e()}}async loadUserWallpaperLibrary(){const t=(await Object(h.getUserWallpaperLibrary)()).data;this.setCustomLibrary(t),t.length>0&&await n.a.all(t.map(({libraryId:t})=>(async()=>{const e=await Object(h.getWallpaperLibraryItems)(t);this.setCustomLibraryMap(t,e.items)})()))}_filesPreCheck(t){return t.filter(t=>!(t.size>window.__INFINITY__.xMaxLocalFileSize))}async addImagesToLibrary(t,e){const i=this._filesPreCheck(e);if(0===i.length)return void s.default.error(i18n("wallpaper_upload_file_size_exceed"));i.length!==e.length&&s.default.error(i18n("wallpaper_upload_file_size_exceed"));const o=await this._uploadFileToCloudRaw(t,i);return await Object(h.addImagesToLibrary)(t,o),this.mapUploadWallpapers(o)}async createWallpaperLibrary(t){const e=this._filesPreCheck(t);if(0===e.length)return;const i=s.default.loading(i18n("wallpaper_loading"));try{const t=r.a.randomId(`${window.__INFINITY__.wpLibraryId}${Object(u.a)()}`),o=i18n("add_new_wallpaper_libary"),n=await this._uploadFileToCloudRaw(t,e),a=await Object(h.createWallpaperLibrary)({libraryName:o,libraryId:t,wallpapers:n});if(6001===a.code)return void s.default.error(a.message);const l=this.mapUploadWallpapers(n);this.appendCustomLibrary({libraryId:t,libraryName:o}),this.setCustomLibraryMap(t,l)}catch(t){throw s.default.error(i18n("wallpaper_create_library_error")),t}finally{i()}}async createWallpaperLibraryOnly(t,e){try{const i=await Object(h.createWallpaperLibrary)({libraryName:e,libraryId:t});if(6001===i.code)return void s.default.error(i.message);this.appendCustomLibrary({libraryId:t,libraryName:e}),this.setCustomLibraryMap(t,[])}catch(t){throw s.default.error(i18n("wallpaper_create_library_error")),t}}async _uploadFileToCloudRaw(t,e){const i=await this._handleLocalFiles(e),o=await this._uploadFileToCloud(i,t);return Array.apply(null,{length:o.length}).map((e,n)=>{const{id:r,similarColor:a}=i[n],{key:s,url:l}=o[n].data;return{id:r,key:s,url:l,libraryId:t,similarColor:a}})}_uploadFileToCloud(t,e){return n.a.all(t.map(({file:t,id:i})=>new n.a((o,n)=>{Object(l.uploadFile)(t,`${e}/${i}.${d.a.getExtension(t.type)}`,this._uploadKey).then(t=>{t.error?n(t):o(t)})})))}async _handleLocalFiles(t){const e=async t=>{let e=t;return Object(g.e)(t)&&(e=await Object(c.a)(t,{maxSizeMB:window.__INFINITY__.maxLocalFileSize/1024/1024,maxWidthOrHeight:window.__INFINITY__.minFileMaxWidthOrHeight,useWebWorker:!1})),{file:e,similarColor:await r.a.getSimilarColor(e)}},i=[];for(let o=0,r=t.length;o<r;o++)i.push(await e(t[o])),await new n.a(t=>setTimeout(t,100));return(t=>t.map(({file:t,similarColor:e})=>({id:r.a.randomId(`${window.__INFINITY__.wpLibraryItemId}${Object(u.a)()}`),file:t,similarColor:e})))(i)}}m([a.g],b.prototype,"switchTypeInUI",void 0),m([a.b],b.prototype,"setSwitchType",void 0),m([a.g],b.prototype,"pSource",void 0),m([a.b],b.prototype,"setPSource",void 0),m([a.g],b.prototype,"customLibraryMap",void 0),m([a.b],b.prototype,"setCustomLibraryMap",null),m([a.b],b.prototype,"delCustomLibraryMap",null),m([a.b],b.prototype,"clearCustomLibraryMap",null),m([a.b],b.prototype,"popCustomLibraryItem",null),m([a.b],b.prototype,"appendCustomLibraryItem",null),m([a.g],b.prototype,"customLibrary",void 0),m([a.b],b.prototype,"setCustomLibrary",void 0),m([a.b],b.prototype,"popCustomLibrary",null),m([a.b],b.prototype,"appendCustomLibrary",null),m([a.b],b.prototype,"setCustomLibraryName",null),m([a.g],b.prototype,"iOptionsModalShow",void 0),m([a.b],b.prototype,"closeIOptionsModal",null),m([a.b],b.prototype,"toggleIOptionsModal",void 0),m([a.b],b.prototype,"removeWallpaperLibrary",null);const y=new b;e.a=y},function(t,e,i){"use strict";var o=i(7),n=i.n(o),r=i(126),a=i.n(r),s=(i(13),i(16),i(10),i(8)),l=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class c{constructor(){this.list=[],this.searchList=[],this.searchTxt="",this.permissionList=[],this.isShowAppModal=!1}get extensionList(){return this.list.length?this.list.filter(t=>"extension"===t.type):[]}get appList(){return this.list.length?this.list.filter(t=>t.isApp):[]}get compuList(){return[...this.extensionList,...this.appList]}get isEmpty(){return!(0!==this.appList.length||0!==this.extensionList.length)}async getAll(){const t=await new n.a(t=>window.chrome.management.getAll(t));Object(s.i)(()=>{this.list=t})}toggleOpen(t){this.list=t?this.list.map(e=>e.id===t?Object.assign(Object.assign({},e),{open:!e.open}):Object.assign(Object.assign({},e),{open:!1})):this.list.map(t=>Object.assign(Object.assign({},t),{open:!1}))}setEnabled(t,e){window.chrome.management.setEnabled(t,!e)}uninstall(t){window.chrome.management.uninstall(t,{showConfirmDialog:!0})}async getPermissionWarningsById(t){const e=await new n.a(e=>window.chrome.management.getPermissionWarningsById(t,e));Object(s.i)(()=>{this.permissionList=e})}search(t){this.searchTxt=t,this.searchList=this.list.filter(e=>e.name.toLowerCase().includes(a()(t).call(t).toLowerCase()))}closeModal(){this.isShowAppModal=!1}openModal(){this.isShowAppModal=!0}}l([s.g],c.prototype,"list",void 0),l([s.g],c.prototype,"searchList",void 0),l([s.g],c.prototype,"searchTxt",void 0),l([s.g],c.prototype,"permissionList",void 0),l([s.g],c.prototype,"isShowAppModal",void 0),l([s.e],c.prototype,"extensionList",null),l([s.e],c.prototype,"appList",null),l([s.e],c.prototype,"compuList",null),l([s.e],c.prototype,"isEmpty",null),l([s.b],c.prototype,"getAll",null),l([s.b],c.prototype,"toggleOpen",null),l([s.b],c.prototype,"setEnabled",null),l([s.b],c.prototype,"uninstall",null),l([s.b],c.prototype,"getPermissionWarningsById",null),l([s.b],c.prototype,"search",null),l([s.b],c.prototype,"closeModal",null),l([s.b],c.prototype,"openModal",null);const p=new c;e.a=p},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i(125);
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
 */const n=new WeakMap,r=Object(o.e)(t=>e=>{if(!(e instanceof o.a)||e instanceof o.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let a=n.get(e);void 0===a&&(r.cssText=i.strings.join(" "),n.set(e,a=new Set)),a.forEach(e=>{e in t||(a.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))});for(const e in t)a.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])})},,,,,,function(t,e,i){t.exports=i.p+"images/arrow-right.d51ffb7.svg"},,,,,,,function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i(7),n=i.n(o),r=(i(10),i(0)),a=i(129);async function s(){if(r.r){if("granted"!==await new n.a(t=>{!function(){try{Notification.requestPermission().then()}catch(t){return!1}return!0}()?Notification.requestPermission(t):Notification.requestPermission().then(t)}))throw new Error}else await a.a.request(["notifications"])}},,,function(t,e,i){"use strict";i(13),i(16);var o=i(1),n=i(0),r=i(21),a=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let s=class extends o.a{constructor(){super(...arguments),this.url="",this._once=!1,this.onError=({currentTarget:t})=>{if(!this._once){const e=r.a.getFavIconSrc(this.url);t.src="https://favicon.infinitynewtab.com/"+e+".png",this._once=!0}}}firstUpdated(){}getSrc(){if(n.n||n.h){return"https://favicon.infinitynewtab.com/"+r.a.getFavIconSrc(this.url)+".png"}return"chrome://favicon/size/32@2x/"+this.url}render(){const t=this.getSrc();return o.e` <img src="${t}" @error="${this.onError}" /> `}};s.styles=o.b`
    :host {
      display: inline-block;
      flex-shrink: 0;
      width: inherit;
      height: inherit;
    }
    img {
      width: 100%;
      height: 100%;
    }
  `,a([Object(o.g)()],s.prototype,"url",void 0),s=a([Object(o.c)("i-favicon")],s)},,,,,,,,,,,,,,,,,,,,,function(t,e,i){t.exports=i.p+"images/clear.31d5f14.png"},function(t,e,i){t.exports=i.p+"images/spin.f9360d9.svg"},,,,,,,,,,,,,,,,,,function(t,e,i){t.exports=i.p+"images/empty.1b04259.png"},function(t,e,i){"use strict";i(13),i(16);var o=i(1),n=i(335),r=(i(353),i(684)),a=i.n(r),s=i(521),l=i.n(s),c=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends o.a{constructor(){super(...arguments),this.placeholder="",this.value="",this.isClear=!1,this.searchBtnPosition="right",this.type="black"}handleInputChange(t){const e=t.target.value;this.value=e,this.dispatchEvent(new CustomEvent("i-search",{detail:{text:e},bubbles:!0,composed:!0}))}handleBlur(t){this.dispatchEvent(new CustomEvent("i-blur",{detail:{text:t.target.value},bubbles:!0,composed:!0}))}set(t){this.value=t,this.forElement.value=t}focus(){this.forElement.focus()}clear(t=!0){this.value="",this.forElement.value="",t&&this.forElement.focus(),this.dispatchEvent(new CustomEvent("i-clear",{bubbles:!0,composed:!0}))}render(){return o.e`
      <div class="i-search-wrapper ${this.type}">
        ${"left"===this.searchBtnPosition?o.e`<i-svg class="search-icon-left" .src=${a.a}></i-svg>`:null}
        <input
          class=${Object(n.a)({"padding-left":"left"===this.searchBtnPosition})}
          placeholder="${this.placeholder}"
          @blur="${this.handleBlur}"
          @input=${t=>{t.target.keyEvent||this.handleInputChange(t)}}
        />
        <div class="search-icon">
          ${this.value?o.e`<i-svg class="clear-icon" .src=${l.a} @click=${this.clear}></i-svg>`:null}
          ${this.value||"right"!==this.searchBtnPosition?null:o.e`<img class="search-icons" .src=${a.a} />`}
        </div>
      </div>
    `}};p.styles=o.b`
    :host {
      display: block;
      width: 100%;
      --height: 52px;
    }
    .i-search-wrapper {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: var(--height);
      background: rgba(255, 255, 255, 1);
      border: 1px solid #999;
      border-radius: 6px;
      overflow: hidden;
    }
    .i-search-wrapper:hover {
      border: 1px solid #333;
    }
    .i-search-wrapper:focus-within {
      border: 1px solid #333;
    }
    .white {
      border: none !important;
    }
    input {
      flex: 1;
      height: 100%;
      padding: 0px 48px 0px 20px;
      border: none;
      outline: none;
      font-size: 14px;
      min-width: 100px;
      font-family: PingFangSC-Regular, 'PingFang SC';
    }
    input.padding-left {
      padding-left: 44px;
    }
    .white input::placeholder {
      color: #bbb;
    }
    .search-icon {
      position: absolute;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
    }
    .i-search-wrapper:hover .search-icon-left {
      color: #333;
    }
    .i-search-wrapper:focus-within .search-icon-left {
      color: #333;
    }
    .search-icon-left {
      position: absolute;
      left: 16px;
      width: 18px;
      height: 18px;
      color: #999;
      transition: color 0.2s;
    }
    .search-icons {
      width: 18px;
      height: 18px;
    }
    .clear-icon {
      margin: 2px;
      width: 14px;
      height: 14px;
      color: #999;
      cursor: pointer;
      transition: color 0.2s;
      transform: translateZ(10px);
    }
    .clear-icon:hover {
      color: #333;
    }
  `,c([Object(o.g)({type:String})],p.prototype,"placeholder",void 0),c([Object(o.g)({type:String})],p.prototype,"value",void 0),c([Object(o.g)({type:Boolean,reflect:!0})],p.prototype,"isClear",void 0),c([Object(o.g)({type:String})],p.prototype,"searchBtnPosition",void 0),c([Object(o.g)({type:String})],p.prototype,"type",void 0),c([Object(o.h)("input")],p.prototype,"forElement",void 0),c([Object(o.d)({passive:!0})],p.prototype,"handleInputChange",null),p=c([Object(o.c)("i-search")],p)},function(t,e,i){t.exports=i.p+"images/link.15a4941.svg"},function(t,e,i){t.exports=i.p+"images/refresh.fbac946.svg"},function(t,e,i){t.exports=i.p+"images/payment.bdef3b5.png"},function(t,e,i){t.exports=i.p+"images/facebook-bg.10b1b46.png"},function(t,e,i){t.exports=i.p+"images/qq-bg.e497f75.png"},function(t,e,i){t.exports=i.p+"images/femael.fe86af2.png"},function(t,e,i){t.exports=i.p+"images/male.72d961f.png"},function(t,e,i){t.exports=i.p+"images/icon-backup.b9c87b9.svg"},function(t,e,i){t.exports=i.p+"images/arrow_qr_code.8fe97e0.png"},function(t,e,i){var o={"./icon_facebook.png":552,"./icon_google.png":553,"./icon_qq.png":554,"./icon_sina.png":555,"./icon_wechat.png":556};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=551},function(t,e,i){t.exports=i.p+"images/icon_facebook.5e5a555.png"},function(t,e,i){t.exports=i.p+"images/icon_google.5a5277b.png"},function(t,e,i){t.exports=i.p+"images/icon_qq.dc39b28.png"},function(t,e,i){t.exports=i.p+"images/icon_sina.05f30d5.png"},function(t,e,i){t.exports=i.p+"images/icon_wechat.24b00c8.png"},function(t,e,i){var o={"./arrow_qr_code.png":550,"./avator.png":711,"./douban_icon.png":712,"./facebook-bg.png":545,"./facebook_icon.png":713,"./google_icon.png":714,"./linked_icon.png":715,"./login/icon_facebook.png":552,"./login/icon_google.png":553,"./login/icon_qq.png":554,"./login/icon_sina.png":555,"./login/icon_wechat.png":556,"./payment.png":544,"./qq-bg.png":546,"./qq_icon.png":716,"./source/all.png":717,"./source/barn-images.png":718,"./source/bing.png":719,"./source/free-nature-stock.png":720,"./source/infinity.png":721,"./source/jay-mantri.png":722,"./source/life-of-pix.png":723,"./source/mmt.png":724,"./source/picography.png":725,"./source/realistic-shots.png":726,"./source/skitter-photo.png":727,"./source/startup-stock-photos.png":728,"./source/unsplash.png":729,"./twitter_icon.png":730,"./wallpaper_download.png":558,"./xinlang_icon.png":731,"./zone_icon.png":732};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=557},function(t,e,i){t.exports=i.p+"images/wallpaper_download.46fc473.png"},function(t,e,i){t.exports=i.p+"images/close.5f38fbc.png"},function(t,e,i){t.exports=i.p+"images/recommand.163ee25.png"},function(t,e,i){t.exports=i.p+"images/close.5f38fbc.png"},function(t,e,i){t.exports=i.p+"images/arrow.4ee035b.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){t.exports=i.p+"images/edit.39cf929.png"},function(t,e,i){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,o){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=o?o:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,o,n,r,a,s;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(o=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),s=o.reduce((function(t,e){return t+e})),r=i.reduce((function(t,e){return t+e})),a=s/o.length,n=r/i.length,Math.abs(a)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(this)},function(t,e,i){t.exports=i.p+"images/expand.f5e33fc.svg"},function(t,e,i){t.exports=i.p+"images/update-side.f885641.jpg"},function(t,e,i){t.exports=i.p+"images/infinity.e82d3fc.svg"},function(t,e,i){t.exports=i.p+"images/left.de9b35b.svg"},function(t,e,i){t.exports=i.p+"images/close.a7cbff9.svg"},function(t,e,i){t.exports=i.p+"images/setting.9bb7a8a.png"},function(t,e,i){t.exports=i.p+"images/close.5575d99.png"},function(t,e,i){t.exports=i.p+"images/location.6694f8a.png"},function(t,e,i){t.exports=i.p+"images/spin.f9360d9.svg"},function(t,e,i){t.exports=i.p+"images/error.7c8e11f.png"},function(t,e,i){t.exports=i.p+"images/empty.c781995.png"},function(t,e,i){t.exports=i.p+"images/left.050db11.png"},function(t,e,i){t.exports=i.p+"images/right.7c65f69.png"},function(t,e,i){t.exports=i.p+"images/close.b9682ba.png"},function(t,e,i){var o,n,r;
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/n=[t,e],void 0===(r="function"==typeof(o=function(t,e){"use strict";var i,o,n="function"==typeof Map?new Map:(i=[],o=[],{has:function(t){return i.indexOf(t)>-1},get:function(t){return o[i.indexOf(t)]},set:function(t,e){-1===i.indexOf(t)&&(i.push(t),o.push(e))},delete:function(t){var e=i.indexOf(t);e>-1&&(i.splice(e,1),o.splice(e,1))}}),r=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){r=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function a(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!n.has(t)){var e,i=null,o=null,a=null,s=function(){t.clientWidth!==o&&d()},l=function(e){window.removeEventListener("resize",s,!1),t.removeEventListener("input",d,!1),t.removeEventListener("keyup",d,!1),t.removeEventListener("autosize:destroy",l,!1),t.removeEventListener("autosize:update",d,!1),Object.keys(e).forEach((function(i){t.style[i]=e[i]})),n.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",l,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",d,!1),window.addEventListener("resize",s,!1),t.addEventListener("input",d,!1),t.addEventListener("autosize:update",d,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",n.set(t,{destroy:l,update:d}),"vertical"===(e=window.getComputedStyle(t,null)).resize?t.style.resize="none":"both"===e.resize&&(t.style.resize="horizontal"),i="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(i)&&(i=0),d()}function c(e){var i=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=i,t.style.overflowY=e}function p(){if(0!==t.scrollHeight){var e=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(t),n=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+i+"px",o=t.clientWidth,e.forEach((function(t){t.node.scrollTop=t.scrollTop})),n&&(document.documentElement.scrollTop=n)}}function d(){p();var e=Math.round(parseFloat(t.style.height)),i=window.getComputedStyle(t,null),o="content-box"===i.boxSizing?Math.round(parseFloat(i.height)):t.offsetHeight;if(o<e?"hidden"===i.overflowY&&(c("scroll"),p(),o="content-box"===i.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==i.overflowY&&(c("hidden"),p(),o="content-box"===i.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),a!==o){a=o;var n=r("autosize:resized");try{t.dispatchEvent(n)}catch(t){}}}}function s(t){var e=n.get(t);e&&e.destroy()}function l(t){var e=n.get(t);e&&e.update()}var c=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((c=function(t){return t}).destroy=function(t){return t},c.update=function(t){return t}):((c=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return a(t)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],s),t},c.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],l),t}),e.default=c,t.exports=e.default})?o.apply(e,n):o)||(t.exports=r)},function(t,e,i){t.exports=i.p+"images/alarm.12375fc.png"},function(t,e,i){t.exports=i.p+"images/error.cb0c05c.png"},function(t,e,i){
/*! @license DOMPurify 2.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.0/LICENSE */
t.exports=function(){"use strict";var t=Object.hasOwnProperty,e=Object.setPrototypeOf,i=Object.isFrozen,o=Object.getPrototypeOf,n=Object.getOwnPropertyDescriptor,r=Object.freeze,a=Object.seal,s=Object.create,l="undefined"!=typeof Reflect&&Reflect,c=l.apply,p=l.construct;c||(c=function(t,e,i){return t.apply(e,i)}),r||(r=function(t){return t}),a||(a=function(t){return t}),p||(p=function(t,e){return new(Function.prototype.bind.apply(t,[null].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(e))))});var d,h=k(Array.prototype.forEach),u=k(Array.prototype.pop),g=k(Array.prototype.push),f=k(String.prototype.toLowerCase),m=k(String.prototype.match),b=k(String.prototype.replace),y=k(String.prototype.indexOf),v=k(String.prototype.trim),w=k(RegExp.prototype.test),x=(d=TypeError,function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return p(d,e)});function k(t){return function(e){for(var i=arguments.length,o=Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];return c(t,e,o)}}function _(t,o){e&&e(t,null);for(var n=o.length;n--;){var r=o[n];if("string"==typeof r){var a=f(r);a!==r&&(i(o)||(o[n]=a),r=a)}t[r]=!0}return t}function O(e){var i=s(null),o=void 0;for(o in e)c(t,e,[o])&&(i[o]=e[o]);return i}function S(t,e){for(;null!==t;){var i=n(t,e);if(i){if(i.get)return k(i.get);if("function"==typeof i.value)return k(i.value)}t=o(t)}return function(t){return console.warn("fallback value for",t),null}}var j=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),$=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),C=r(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),T=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),E=r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=r(["#text"]),P=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),R=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),D=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),A=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),M=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),N=a(/<%[\s\S]*|[\s\S]*%>/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),B=a(/^aria-[\-\w]+$/),U=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),F=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function q(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var V=function(){return"undefined"==typeof window?null:window},Y=function(t,e){if("object"!==(void 0===t?"undefined":H(t))||"function"!=typeof t.createPolicy)return null;var i=null;e.currentScript&&e.currentScript.hasAttribute("data-tt-policy-suffix")&&(i=e.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(i?"#"+i:"");try{return t.createPolicy(o,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),i=function(e){return t(e)};if(i.version="2.3.0",i.removed=[],!e||!e.document||9!==e.document.nodeType)return i.isSupported=!1,i;var o=e.document,n=e.document,a=e.DocumentFragment,s=e.HTMLTemplateElement,l=e.Node,c=e.Element,p=e.NodeFilter,d=e.NamedNodeMap,k=void 0===d?e.NamedNodeMap||e.MozNamedAttrMap:d,X=e.Text,G=e.Comment,K=e.DOMParser,Q=e.trustedTypes,J=c.prototype,Z=S(J,"cloneNode"),tt=S(J,"nextSibling"),et=S(J,"childNodes"),it=S(J,"parentNode");if("function"==typeof s){var ot=n.createElement("template");ot.content&&ot.content.ownerDocument&&(n=ot.content.ownerDocument)}var nt=Y(Q,o),rt=nt&&Mt?nt.createHTML(""):"",at=n,st=at.implementation,lt=at.createNodeIterator,ct=at.createDocumentFragment,pt=at.getElementsByTagName,dt=o.importNode,ht={};try{ht=O(n).documentMode?n.documentMode:{}}catch(t){}var ut={};i.isSupported="function"==typeof it&&st&&void 0!==st.createHTMLDocument&&9!==ht;var gt=M,ft=N,mt=z,bt=B,yt=F,vt=W,wt=U,xt=null,kt=_({},[].concat(q(j),q($),q(I),q(T),q(L))),_t=null,Ot=_({},[].concat(q(P),q(R),q(D),q(A))),St=null,jt=null,$t=!0,It=!0,Ct=!1,Tt=!1,Et=!1,Lt=!1,Pt=!1,Rt=!1,Dt=!1,At=!0,Mt=!1,Nt=!0,zt=!0,Bt=!1,Ut={},Ft=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Wt=null,Ht=_({},["audio","video","img","source","image","track"]),qt=null,Vt=_({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Yt="http://www.w3.org/1998/Math/MathML",Xt="http://www.w3.org/2000/svg",Gt="http://www.w3.org/1999/xhtml",Kt=Gt,Qt=!1,Jt=null,Zt=n.createElement("form"),te=function(t){Jt&&Jt===t||(t&&"object"===(void 0===t?"undefined":H(t))||(t={}),t=O(t),xt="ALLOWED_TAGS"in t?_({},t.ALLOWED_TAGS):kt,_t="ALLOWED_ATTR"in t?_({},t.ALLOWED_ATTR):Ot,qt="ADD_URI_SAFE_ATTR"in t?_(O(Vt),t.ADD_URI_SAFE_ATTR):Vt,Wt="ADD_DATA_URI_TAGS"in t?_(O(Ht),t.ADD_DATA_URI_TAGS):Ht,St="FORBID_TAGS"in t?_({},t.FORBID_TAGS):{},jt="FORBID_ATTR"in t?_({},t.FORBID_ATTR):{},Ut="USE_PROFILES"in t&&t.USE_PROFILES,$t=!1!==t.ALLOW_ARIA_ATTR,It=!1!==t.ALLOW_DATA_ATTR,Ct=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Tt=t.SAFE_FOR_TEMPLATES||!1,Et=t.WHOLE_DOCUMENT||!1,Rt=t.RETURN_DOM||!1,Dt=t.RETURN_DOM_FRAGMENT||!1,At=!1!==t.RETURN_DOM_IMPORT,Mt=t.RETURN_TRUSTED_TYPE||!1,Pt=t.FORCE_BODY||!1,Nt=!1!==t.SANITIZE_DOM,zt=!1!==t.KEEP_CONTENT,Bt=t.IN_PLACE||!1,wt=t.ALLOWED_URI_REGEXP||wt,Kt=t.NAMESPACE||Gt,Tt&&(It=!1),Dt&&(Rt=!0),Ut&&(xt=_({},[].concat(q(L))),_t=[],!0===Ut.html&&(_(xt,j),_(_t,P)),!0===Ut.svg&&(_(xt,$),_(_t,R),_(_t,A)),!0===Ut.svgFilters&&(_(xt,I),_(_t,R),_(_t,A)),!0===Ut.mathMl&&(_(xt,T),_(_t,D),_(_t,A))),t.ADD_TAGS&&(xt===kt&&(xt=O(xt)),_(xt,t.ADD_TAGS)),t.ADD_ATTR&&(_t===Ot&&(_t=O(_t)),_(_t,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&_(qt,t.ADD_URI_SAFE_ATTR),zt&&(xt["#text"]=!0),Et&&_(xt,["html","head","body"]),xt.table&&(_(xt,["tbody"]),delete St.tbody),r&&r(t),Jt=t)},ee=_({},["mi","mo","mn","ms","mtext"]),ie=_({},["foreignobject","desc","title","annotation-xml"]),oe=_({},$);_(oe,I),_(oe,C);var ne=_({},T);_(ne,E);var re=function(t){var e=it(t);e&&e.tagName||(e={namespaceURI:Gt,tagName:"template"});var i=f(t.tagName),o=f(e.tagName);if(t.namespaceURI===Xt)return e.namespaceURI===Gt?"svg"===i:e.namespaceURI===Yt?"svg"===i&&("annotation-xml"===o||ee[o]):Boolean(oe[i]);if(t.namespaceURI===Yt)return e.namespaceURI===Gt?"math"===i:e.namespaceURI===Xt?"math"===i&&ie[o]:Boolean(ne[i]);if(t.namespaceURI===Gt){if(e.namespaceURI===Xt&&!ie[o])return!1;if(e.namespaceURI===Yt&&!ee[o])return!1;var n=_({},["title","style","font","a","script"]);return!ne[i]&&(n[i]||!oe[i])}return!1},ae=function(t){g(i.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=rt}catch(e){t.remove()}}},se=function(t,e){try{g(i.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){g(i.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!_t[t])if(Rt||Dt)try{ae(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},le=function(t){var e=void 0,i=void 0;if(Pt)t="<remove></remove>"+t;else{var o=m(t,/^[\r\n\t ]+/);i=o&&o[0]}var r=nt?nt.createHTML(t):t;if(Kt===Gt)try{e=(new K).parseFromString(r,"text/html")}catch(t){}if(!e||!e.documentElement){e=st.createDocument(Kt,"template",null);try{e.documentElement.innerHTML=Qt?"":r}catch(t){}}var a=e.body||e.documentElement;return t&&i&&a.insertBefore(n.createTextNode(i),a.childNodes[0]||null),Kt===Gt?pt.call(e,Et?"html":"body")[0]:Et?e.documentElement:a},ce=function(t){return lt.call(t.ownerDocument||t,t,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT,null,!1)},pe=function(t){return!(t instanceof X||t instanceof G||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof k&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI&&"function"==typeof t.insertBefore)},de=function(t){return"object"===(void 0===l?"undefined":H(l))?t instanceof l:t&&"object"===(void 0===t?"undefined":H(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},he=function(t,e,o){ut[t]&&h(ut[t],(function(t){t.call(i,e,o,Jt)}))},ue=function(t){var e=void 0;if(he("beforeSanitizeElements",t,null),pe(t))return ae(t),!0;if(m(t.nodeName,/[\u0080-\uFFFF]/))return ae(t),!0;var o=f(t.nodeName);if(he("uponSanitizeElement",t,{tagName:o,allowedTags:xt}),!de(t.firstElementChild)&&(!de(t.content)||!de(t.content.firstElementChild))&&w(/<[/\w]/g,t.innerHTML)&&w(/<[/\w]/g,t.textContent))return ae(t),!0;if(!xt[o]||St[o]){if(zt&&!Ft[o]){var n=it(t)||t.parentNode,r=et(t)||t.childNodes;if(r&&n)for(var a=r.length-1;a>=0;--a)n.insertBefore(Z(r[a],!0),tt(t))}return ae(t),!0}return t instanceof c&&!re(t)?(ae(t),!0):"noscript"!==o&&"noembed"!==o||!w(/<\/no(script|embed)/i,t.innerHTML)?(Tt&&3===t.nodeType&&(e=t.textContent,e=b(e,gt," "),e=b(e,ft," "),t.textContent!==e&&(g(i.removed,{element:t.cloneNode()}),t.textContent=e)),he("afterSanitizeElements",t,null),!1):(ae(t),!0)},ge=function(t,e,i){if(Nt&&("id"===e||"name"===e)&&(i in n||i in Zt))return!1;if(It&&!jt[e]&&w(mt,e));else if($t&&w(bt,e));else{if(!_t[e]||jt[e])return!1;if(qt[e]);else if(w(wt,b(i,vt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==y(i,"data:")||!Wt[t])if(Ct&&!w(yt,b(i,vt,"")));else if(i)return!1}return!0},fe=function(t){var e=void 0,o=void 0,n=void 0,r=void 0;he("beforeSanitizeAttributes",t,null);var a=t.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_t};for(r=a.length;r--;){var l=e=a[r],c=l.name,p=l.namespaceURI;if(o=v(e.value),n=f(c),s.attrName=n,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,he("uponSanitizeAttribute",t,s),o=s.attrValue,!s.forceKeepAttr&&(se(c,t),s.keepAttr))if(w(/\/>/i,o))se(c,t);else{Tt&&(o=b(o,gt," "),o=b(o,ft," "));var d=t.nodeName.toLowerCase();if(ge(d,n,o))try{p?t.setAttributeNS(p,c,o):t.setAttribute(c,o),u(i.removed)}catch(t){}}}he("afterSanitizeAttributes",t,null)}},me=function t(e){var i=void 0,o=ce(e);for(he("beforeSanitizeShadowDOM",e,null);i=o.nextNode();)he("uponSanitizeShadowNode",i,null),ue(i)||(i.content instanceof a&&t(i.content),fe(i));he("afterSanitizeShadowDOM",e,null)};return i.sanitize=function(t,n){var r=void 0,s=void 0,c=void 0,p=void 0,d=void 0;if((Qt=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!de(t)){if("function"!=typeof t.toString)throw x("toString is not a function");if("string"!=typeof(t=t.toString()))throw x("dirty is not a string, aborting")}if(!i.isSupported){if("object"===H(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof t)return e.toStaticHTML(t);if(de(t))return e.toStaticHTML(t.outerHTML)}return t}if(Lt||te(n),i.removed=[],"string"==typeof t&&(Bt=!1),Bt);else if(t instanceof l)1===(s=(r=le("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?r=s:r.appendChild(s);else{if(!Rt&&!Tt&&!Et&&-1===t.indexOf("<"))return nt&&Mt?nt.createHTML(t):t;if(!(r=le(t)))return Rt?null:rt}r&&Pt&&ae(r.firstChild);for(var h=ce(Bt?t:r);c=h.nextNode();)3===c.nodeType&&c===p||ue(c)||(c.content instanceof a&&me(c.content),fe(c),p=c);if(p=null,Bt)return t;if(Rt){if(Dt)for(d=ct.call(r.ownerDocument);r.firstChild;)d.appendChild(r.firstChild);else d=r;return At&&(d=dt.call(o,d,!0)),d}var u=Et?r.outerHTML:r.innerHTML;return Tt&&(u=b(u,gt," "),u=b(u,ft," ")),nt&&Mt?nt.createHTML(u):u},i.setConfig=function(t){te(t),Lt=!0},i.clearConfig=function(){Jt=null,Lt=!1},i.isValidAttribute=function(t,e,i){Jt||te({});var o=f(t),n=f(e);return ge(o,n,i)},i.addHook=function(t,e){"function"==typeof e&&(ut[t]=ut[t]||[],g(ut[t],e))},i.removeHook=function(t){ut[t]&&u(ut[t])},i.removeHooks=function(t){ut[t]&&(ut[t]=[])},i.removeAllHooks=function(){ut={}},i}()}()},function(t,e,i){t.exports=i.p+"images/spin.053f510.svg"},function(t,e,i){t.exports=i.p+"images/close.f02850c.png"},function(t,e,i){t.exports=i.p+"images/note.d7ede44.png"},function(t,e,i){t.exports=i.p+"images/bold.08bc468.png"},function(t,e,i){t.exports=i.p+"images/plus.9b73992.png"},function(t,e,i){t.exports=i.p+"images/min.2ddeb34.png"},function(t,e,i){t.exports=i.p+"images/link.e1e6090.png"},function(t,e,i){t.exports=i.p+"images/pic.ce6b6ab.png"},function(t,e,i){t.exports=i.p+"images/added.e27311a.svg"},function(t,e,i){t.exports=i.p+"images/search_result.2f0ee91.svg"},function(t,e,i){t.exports=i.p+"images/popular.37b00cd.svg"},function(t,e,i){t.exports=i.p+"images/share_by_user.6dc1594.svg"},function(t,e,i){t.exports=i.p+"images/application.87292f2.svg"},function(t,e,i){t.exports=i.p+"images/news.eee6b7c.svg"},function(t,e,i){t.exports=i.p+"images/music_video.605f663.svg"},function(t,e,i){t.exports=i.p+"images/photos.0a1f40b.svg"},function(t,e,i){t.exports=i.p+"images/shopping.9a830b3.svg"},function(t,e,i){t.exports=i.p+"images/social.4dcfc82.svg"},function(t,e,i){t.exports=i.p+"images/sports.7b38f0b.svg"},function(t,e,i){t.exports=i.p+"images/life_style.4460e9b.svg"},function(t,e,i){t.exports=i.p+"images/games.d0c6657.svg"},function(t,e,i){t.exports=i.p+"images/education.eefa8c2.svg"},function(t,e,i){t.exports=i.p+"images/tech.5a20545.svg"},function(t,e,i){t.exports=i.p+"images/finance.ecb9742.svg"},function(t,e,i){t.exports=i.p+"images/read.59ac46b.svg"},function(t,e,i){t.exports=i.p+"images/others.29c4520.svg"},function(t,e,i){t.exports=i.p+"images/search.1ffd553.png"},function(t,e,i){t.exports=i.p+"images/defaultapp.d47f3f3.png"},function(t,e,i){t.exports=i.p+"images/holder.de15c91.png"},function(t,e,i){t.exports=i.p+"images/added.e27311a.svg"},function(t,e,i){t.exports=i.p+"images/networkerr.ab12fcc.png"},function(t,e,i){t.exports=i.p+"images/no-result.80a1e8b.png"},function(t,e,i){t.exports=i.p+"images/edit.064f8e9.svg"},function(t,e,i){t.exports=i.p+"images/del.20d8e3b.svg"},function(t,e,i){t.exports=i.p+"images/permission_img.1fa8fa6.svg"},function(t,e,i){t.exports=i.p+"images/close.0d8a2c5.svg"},function(t,e,i){t.exports=i.p+"images/custom.469c6c9.svg"},function(t,e,i){t.exports=i.p+"images/qrcode.3aadda2.jpg"},function(t,e){var i;!function(){function t(t){this.mode=l.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;i>e;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function o(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var o=0;o<t.length-i;o++)this.num[o]=t[o+i]}function n(t,e){this.totalCount=t,this.dataCount=e}function r(){this.buffer=[],this.length=0}function a(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var i=e.toString().match(/android ([0-9]\.[0-9])/i);i&&i[1]&&(t=parseFloat(i[1]))}return t}function s(t,e){for(var i=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),n=0,r=g.length;r>=n;n++){var a=0;switch(e){case c.L:a=g[n][0];break;case c.M:a=g[n][1];break;case c.Q:a=g[n][2];break;case c.H:a=g[n][3]}if(a>=o)break;i++}if(i>g.length)throw new Error("Too long data");return i}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;i>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var i=new t(e);this.dataList.push(i),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,i){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[o][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,i),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,i)},setupPositionProbePattern:function(t,e){for(var i=-1;7>=i;i++)if(!(-1>=t+i||this.moduleCount<=t+i))for(var o=-1;7>=o;o++)-1>=e+o||this.moduleCount<=e+o||(this.modules[t+i][e+o]=i>=0&&6>=i&&(0==o||6==o)||o>=0&&6>=o&&(0==i||6==i)||i>=2&&4>=i&&o>=2&&4>=o)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;8>i;i++){this.makeImpl(!0,i);var o=d.getLostPoint(this);(0==i||t>o)&&(t=o,e=i)}return e},createMovieClip:function(t,e,i){var o=t.createEmptyMovieClip(e,i);this.make();for(var n=0;n<this.modules.length;n++)for(var r=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,r),o.lineTo(s+1,r),o.lineTo(s+1,r+1),o.lineTo(s,r+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var o=t[e],n=t[i];if(null==this.modules[o][n])for(var r=-2;2>=r;r++)for(var a=-2;2>=a;a++)this.modules[o+r][n+a]=-2==r||2==r||-2==a||2==a||0==r&&0==a}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),i=0;18>i;i++){var o=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=o}for(i=0;18>i;i++){o=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=o}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,o=d.getBCHTypeInfo(i),n=0;15>n;n++){var r=!t&&1==(o>>n&1);6>n?this.modules[n][8]=r:8>n?this.modules[n+1][8]=r:this.modules[this.moduleCount-15+n][8]=r}for(n=0;15>n;n++){r=!t&&1==(o>>n&1);8>n?this.modules[8][this.moduleCount-n-1]=r:9>n?this.modules[8][15-n-1+1]=r:this.modules[8][15-n-1]=r}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,o=this.moduleCount-1,n=7,r=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[o][a-s]){var l=!1;r<t.length&&(l=1==(t[r]>>>n&1)),d.getMask(e,o,a-s)&&(l=!l),this.modules[o][a-s]=l,-1==--n&&(r++,n=7)}if(0>(o+=i)||this.moduleCount<=o){o-=i,i=-i;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,i,o){for(var a=n.getRSBlocks(t,i),s=new r,l=0;l<o.length;l++){var c=o[l];s.put(c.mode,4),s.put(c.getLength(),d.getLengthInBits(c.mode,t)),c.write(s)}var p=0;for(l=0;l<a.length;l++)p+=a[l].dataCount;if(s.getLengthInBits()>8*p)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*p+")");for(s.getLengthInBits()+4<=8*p&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*p)&&(s.put(e.PAD0,8),!(s.getLengthInBits()>=8*p));)s.put(e.PAD1,8);return e.createBytes(s,a)},e.createBytes=function(t,e){for(var i=0,n=0,r=0,a=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var c=e[l].dataCount,p=e[l].totalCount-c;n=Math.max(n,c),r=Math.max(r,p),a[l]=new Array(c);for(var h=0;h<a[l].length;h++)a[l][h]=255&t.buffer[h+i];i+=c;var u=d.getErrorCorrectPolynomial(p),g=new o(a[l],u.getLength()-1).mod(u);s[l]=new Array(u.getLength()-1);for(h=0;h<s[l].length;h++){var f=h+g.getLength()-s[l].length;s[l][h]=f>=0?g.get(f):0}}var m=0;for(h=0;h<e.length;h++)m+=e[h].totalCount;var b=new Array(m),y=0;for(h=0;n>h;h++)for(l=0;l<e.length;l++)h<a[l].length&&(b[y++]=a[l][h]);for(h=0;r>h;h++)for(l=0;l<e.length;l++)h<s[l].length&&(b[y++]=s[l][h]);return b};for(var l={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},c={L:1,M:0,Q:3,H:2},p={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case p.PATTERN000:return(e+i)%2==0;case p.PATTERN001:return e%2==0;case p.PATTERN010:return i%3==0;case p.PATTERN011:return(e+i)%3==0;case p.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case p.PATTERN101:return e*i%2+e*i%3==0;case p.PATTERN110:return(e*i%2+e*i%3)%2==0;case p.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),i=0;t>i;i++)e=e.multiply(new o([1,h.gexp(i)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case l.MODE_NUMBER:return 10;case l.MODE_ALPHA_NUM:return 9;case l.MODE_8BIT_BYTE:case l.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case l.MODE_NUMBER:return 12;case l.MODE_ALPHA_NUM:return 11;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case l.MODE_NUMBER:return 14;case l.MODE_ALPHA_NUM:return 13;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,o=0;e>o;o++)for(var n=0;e>n;n++){for(var r=0,a=t.isDark(o,n),s=-1;1>=s;s++)if(!(0>o+s||o+s>=e))for(var l=-1;1>=l;l++)0>n+l||n+l>=e||(0!=s||0!=l)&&a==t.isDark(o+s,n+l)&&r++;r>5&&(i+=3+r-5)}for(o=0;e-1>o;o++)for(n=0;e-1>n;n++){var c=0;t.isDark(o,n)&&c++,t.isDark(o+1,n)&&c++,t.isDark(o,n+1)&&c++,t.isDark(o+1,n+1)&&c++,(0==c||4==c)&&(i+=3)}for(o=0;e>o;o++)for(n=0;e-6>n;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(i+=40);for(n=0;e>n;n++)for(o=0;e-6>o;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(i+=40);var p=0;for(n=0;e>n;n++)for(o=0;e>o;o++)t.isDark(o,n)&&p++;return i+10*(Math.abs(100*p/e/e-50)/5)}},h={glog:function(t){if(1>t)throw new Error("glog("+t+")");return h.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return h.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;8>u;u++)h.EXP_TABLE[u]=1<<u;for(u=8;256>u;u++)h.EXP_TABLE[u]=h.EXP_TABLE[u-4]^h.EXP_TABLE[u-5]^h.EXP_TABLE[u-6]^h.EXP_TABLE[u-8];for(u=0;255>u;u++)h.LOG_TABLE[h.EXP_TABLE[u]]=u;o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=h.gexp(h.glog(this.get(i))+h.glog(t.get(n)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=h.glog(this.get(0))-h.glog(t.get(0)),i=new Array(this.getLength()),n=0;n<this.getLength();n++)i[n]=this.get(n);for(n=0;n<t.getLength();n++)i[n]^=h.gexp(h.glog(t.get(n))+e);return new o(i,0).mod(t)}},n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var i=n.getRsBlockTable(t,e);if(null==i)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=i.length/3,r=[],a=0;o>a;a++)for(var s=i[3*a+0],l=i[3*a+1],c=i[3*a+2],p=0;s>p;p++)r.push(new n(l,c));return r},n.getRsBlockTable=function(t,e){switch(e){case c.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case c.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case c.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case c.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;e>i;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var g=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],f=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&i.setAttribute(o,e[o]);return i}var i=this._htOption,o=this._el,n=t.getModuleCount();Math.floor(i.width/n),Math.floor(i.height/n),this.clear();var r=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:i.colorLight});r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(r),r.appendChild(e("rect",{fill:i.colorLight,width:"100%",height:"100%"})),r.appendChild(e("rect",{fill:i.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;n>a;a++)for(var s=0;n>s;s++)if(t.isDark(a,s)){var l=e("use",{x:String(s),y:String(a)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),r.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase()?f:"undefined"!=typeof CanvasRenderingContext2D?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var i=this;if(i._fFail=e,i._fSuccess=t,null===i._bSupportDataURI){var o=document.createElement("img"),n=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)};return o.onabort=n,o.onerror=n,o.onload=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)},void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===i._bSupportDataURI&&i._fSuccess?i._fSuccess.call(i):!1===i._bSupportDataURI&&i._fFail&&i._fFail.call(i)}if(this._android&&this._android<=2.1){var i=1/window.devicePixelRatio,o=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,n,r,a,s,l,c,p){if("nodeName"in t&&/img/i.test(t.nodeName))for(var d=arguments.length-1;d>=1;d--)arguments[d]=arguments[d]*i;else void 0===c&&(arguments[1]*=i,arguments[2]*=i,arguments[3]*=i,arguments[4]*=i);o.apply(this,arguments)}}var n=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,i=this._oContext,o=this._htOption,n=t.getModuleCount(),r=o.width/n,a=o.height/n,s=Math.round(r),l=Math.round(a);e.style.display="none",this.clear();for(var c=0;n>c;c++)for(var p=0;n>p;p++){var d=t.isDark(c,p),h=p*r,u=c*a;i.strokeStyle=d?o.colorDark:o.colorLight,i.lineWidth=1,i.fillStyle=d?o.colorDark:o.colorLight,i.fillRect(h,u,r,a),i.strokeRect(Math.floor(h)+.5,Math.floor(u)+.5,s,l),i.strokeRect(Math.ceil(h)-.5,Math.ceil(u)-.5,s,l)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,i=this._el,o=t.getModuleCount(),n=Math.floor(e.width/o),r=Math.floor(e.height/o),a=['<table style="border:0;border-collapse:collapse;">'],s=0;o>s;s++){a.push("<tr>");for(var l=0;o>l;l++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+r+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),i.innerHTML=a.join("");var c=i.childNodes[0],p=(e.width-c.offsetWidth)/2,d=(e.height-c.offsetHeight)/2;p>0&&d>0&&(c.style.margin=d+"px "+p+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();(i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:c.H},"string"==typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=f),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},i.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},i.prototype.clear=function(){this._oDrawing.clear()},i.CorrectLevel=c}(),function(t,e,o){function n(t,e){var o=function(){var t=arguments;if(u)return u.apply(null,t);var e={};return d(t,(function(t){d(t,(function(t,i){e[i]=t}))})),t[0]=e}({},w,e||{},function(t){if(t.dataset)return t.dataset;var e={};return t.hasAttributes()?(d(t.attributes,(function(t){var i=t.name;return 0!==i.indexOf("data-")||(i=i.replace(/^data-/i,"").replace(/-(\w)/g,(function(t,e){return e.toUpperCase()})),void(e[i]=t.value))})),e):{}}(t));o.imageSelector&&(o.image=a(o.imageSelector).map((function(t){return t.src})).join("||")),function(t,e){if(e&&"string"==typeof e){var i=(t.className+" "+e).split(/\s+/),o=" ";d(i,(function(t){o.indexOf(" "+t+" ")<0&&(o+=t+" ")})),t.className=o.slice(1,-1)}}(t,"share-component social-share"),function(t,e){var i=function(t){t.mobileSites.length||(t.mobileSites=t.sites);var e=(f?t.mobileSites:t.sites).slice(0),i=t.disabled;return"string"==typeof e&&(e=e.split(/\s*,\s*/)),"string"==typeof i&&(i=i.split(/\s*,\s*/)),g&&i.push("wechat"),i.length&&d(i,(function(t){e.splice(function(t,e,i){var o;if(e){if(h)return h.call(e,t,i);for(o=e.length,i=i?0>i?Math.max(0,o+i):i:0;o>i;i++)if(i in e&&e[i]===t)return i}return-1}(t,e),1)})),e}(e),o="prepend"==e.mode;d(o?i.reverse():i,(function(i){var n=r(i,e),a=e.initialized?c(t,"icon-"+i):p('<a class="social-share-icon icon-'+i+'"></a>');return!a.length||(a[0].href=n,"wechat"===i?a[0].tabindex=-1:a[0].target="_blank",void(e.initialized||(o?t.insertBefore(a[0],t.firstChild):t.appendChild(a[0]))))}))}(t,o),function(t,e){var o=c(t,"icon-wechat","a");if(0===o.length)return!1;var n=p('<div class="wechat-qrcode"><h4>'+e.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+e.wechatQrcodeHelper+"</div></div>"),r=c(n[0],"qrcode","div");o[0].appendChild(n[0]),new i(r[0],{text:e.url,width:e.wechatQrcodeSize,height:e.wechatQrcodeSize})}(t,o),t.initialized=!0}function r(t,e){return e.summary=e.description,x[t].replace(/\{\{(\w)(\w*)\}\}/g,(function(i,n,r){var a=t+n+r.toLowerCase();return r=(n+r).toLowerCase(),encodeURIComponent((e[a]===o?e[r]:e[a])||"")}))}function a(i){return(e.querySelectorAll||t.jQuery||t.Zepto||s).call(e,i)}function s(t){var i=[];return d(t.split(/\s*,\s*/),(function(o){var n=o.match(/([#.])(\w+)/);if(null===n)throw Error("Supports only simple single #ID or .CLASS selector.");if(n[1]){var r=e.getElementById(n[2]);r&&i.push(r)}i=i.concat(c(t))})),i}function l(t){return(e.getElementsByName(t)[0]||0).content}function c(t,e,i){if(t.getElementsByClassName)return t.getElementsByClassName(e);var o=[],n=t.getElementsByTagName(i||"*");return e=" "+e+" ",d(n,(function(t){(" "+(t.className||"")+" ").indexOf(e)>=0&&o.push(t)})),o}function p(t){var i=e.createElement("div");return i.innerHTML=t,i.childNodes}function d(t,e){var i=t.length;if(i===o){for(var n in t)if(t.hasOwnProperty(n)&&!1===e.call(t[n],t[n],n))break}else for(var r=0;i>r&&!1!==e.call(t[r],t[r],r);r++);}var h=Array.prototype.indexOf,u=Object.assign,g=/MicroMessenger/i.test(navigator.userAgent),f=e.documentElement.clientWidth<=768,m=(e.images[0]||0).src||"",b=l("site")||l("Site")||e.title,y=l("title")||l("Title")||e.title,v=l("description")||l("Description")||"",w={url:location.href,origin:location.origin,source:b,title:y,description:v,image:m,imageSelector:o,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},x={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};t.socialShare=function(t,e){(t="string"==typeof t?a(t):t).length===o&&(t=[t]),d(t,(function(t){t.initialized||n(t,e)}))},function(i){var o="addEventListener",n=e[o]?"":"on";~e.readyState.indexOf("m")?i():"load DOMContentLoaded readystatechange".replace(/\w+/g,(function(r,a){(a?e:t)[n?"attachEvent":o](n+r,(function(){i&&(6>a||~e.readyState.indexOf("m"))&&(i(),i=0)}),!1)}))}((function(){socialShare(".social-share, .share-component")}))}(window,document)},function(t,e,i){t.exports=i.p+"images/0.eaad457.svg"},function(t,e,i){t.exports=i.p+"images/10.4c57f00.svg"},function(t,e,i){t.exports=i.p+"images/15.d2b4e87.svg"},function(t,e,i){t.exports=i.p+"images/20.151fae4.svg"},function(t,e,i){t.exports=i.p+"images/25.08e5fd2.svg"},function(t,e,i){t.exports=i.p+"images/0.46cff52.svg"},function(t,e,i){t.exports=i.p+"images/10.41414fe.svg"},function(t,e,i){t.exports=i.p+"images/15.541edc8.svg"},function(t,e,i){t.exports=i.p+"images/20.7dc2d60.svg"},function(t,e,i){t.exports=i.p+"images/25.b869696.svg"},function(t,e,i){t.exports=i.p+"images/icon-miyao.ac22fbf.png"},function(t,e,i){t.exports=i.p+"images/icon-zhuxiao.2738595.png"},function(t,e,i){t.exports=i.p+"images/icon-download.1ceeaa3.svg"},function(t,e,i){t.exports=i.p+"images/tips.c8b5b9a.svg"},function(t,e,i){t.exports=i.p+"images/avator.d181190.png"},function(t,e,i){t.exports=i.p+"images/douban_icon.a2ee6f8.png"},function(t,e,i){t.exports=i.p+"images/facebook_icon.8214bbc.png"},function(t,e,i){t.exports=i.p+"images/google_icon.e6f4a7e.png"},function(t,e,i){t.exports=i.p+"images/linked_icon.81a2e4d.png"},function(t,e,i){t.exports=i.p+"images/qq_icon.cc7a6d4.png"},function(t,e,i){t.exports=i.p+"images/all.056e60b.png"},function(t,e,i){t.exports=i.p+"images/barn-images.06fdb09.png"},function(t,e,i){t.exports=i.p+"images/bing.63f1e9a.png"},function(t,e,i){t.exports=i.p+"images/free-nature-stock.055d792.png"},function(t,e,i){t.exports=i.p+"images/infinity.a805a8d.png"},function(t,e,i){t.exports=i.p+"images/jay-mantri.c4e3fad.png"},function(t,e,i){t.exports=i.p+"images/life-of-pix.8d05ce1.png"},function(t,e,i){t.exports=i.p+"images/mmt.4fd5f2c.png"},function(t,e,i){t.exports=i.p+"images/picography.23b7fc6.png"},function(t,e,i){t.exports=i.p+"images/realistic-shots.fe0d48a.png"},function(t,e,i){t.exports=i.p+"images/skitter-photo.f0d1f9c.png"},function(t,e,i){t.exports=i.p+"images/startup-stock-photos.f18e9f1.png"},function(t,e,i){t.exports=i.p+"images/unsplash.40b97f2.png"},function(t,e,i){t.exports=i.p+"images/twitter_icon.9cd5d0f.png"},function(t,e,i){t.exports=i.p+"images/xinlang_icon.8ede9b1.png"},function(t,e,i){t.exports=i.p+"images/zone_icon.47ae7d6.png"},function(t,e,i){(function(o){var n,r;void 0===(r="function"==typeof(n=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?a(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(e){var r=n(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return s(this,i)}}function c(t,e,i){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}var p=function(){function e(){t(this,e),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return i(e,[{key:"addEventListener",value:function(t,e,i){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push({callback:e,options:i})}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var i=this.listeners[t],o=0,n=i.length;o<n;o++)if(i[o].callback===e)return void i.splice(o,1)}},{key:"dispatchEvent",value:function(t){if(t.type in this.listeners){for(var e=this.listeners[t.type].slice(),i=0,o=e.length;i<o;i++){var n=e[i];try{n.callback.call(this,t)}catch(t){Promise.resolve().then((function(){throw t}))}n.options&&n.options.once&&this.removeEventListener(t.type,n.callback)}return!t.defaultPrevented}}}]),e}(),d=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(s,e);var o=l(s);function s(){var e;return t(this,s),(e=o.call(this)).listeners||p.call(a(e)),Object.defineProperty(a(e),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(a(e),"onabort",{value:null,writable:!0,configurable:!0}),e}return i(s,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),c(n(s.prototype),"dispatchEvent",this).call(this,t)}}]),s}(p),h=function(){function e(){t(this,e),Object.defineProperty(this,"signal",{value:new d,writable:!0,configurable:!0})}return i(e,[{key:"abort",value:function(){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),e}();function u(t){return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof t.Request&&!t.Request.prototype.hasOwnProperty("signal")||!t.AbortController}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(h.prototype[Symbol.toStringTag]="AbortController",d.prototype[Symbol.toStringTag]="AbortSignal"),function(t){if(u(t))if(t.fetch){var e=function(t){"function"==typeof t&&(t={fetch:t});var e=t,i=e.fetch,o=e.Request,n=void 0===o?i.Request:o,r=e.AbortController,a=e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,s=void 0!==a&&a;if(!u({fetch:i,Request:n,AbortController:r,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:s}))return{fetch:i,Request:l};var l=n;(l&&!l.prototype.hasOwnProperty("signal")||s)&&((l=function(t,e){var i;e&&e.signal&&(i=e.signal,delete e.signal);var o=new n(t,e);return i&&Object.defineProperty(o,"signal",{writable:!1,enumerable:!1,configurable:!0,value:i}),o}).prototype=n.prototype);var c=i;return{fetch:function(t,e){var i=l&&l.prototype.isPrototypeOf(t)?t.signal:e?e.signal:void 0;if(i){var o;try{o=new DOMException("Aborted","AbortError")}catch(t){(o=new Error("Aborted")).name="AbortError"}if(i.aborted)return Promise.reject(o);var n=new Promise((function(t,e){i.addEventListener("abort",(function(){return e(o)}),{once:!0})}));return e&&e.signal&&delete e.signal,Promise.race([n,c(t,e)])}return c(t,e)},Request:l}}(t),i=e.fetch,o=e.Request;t.fetch=i,t.Request=o,Object.defineProperty(t,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:h}),Object.defineProperty(t,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:d})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!=typeof self?self:o)})?n.call(e,i,e,t):n)||(t.exports=r)}).call(this,i(51))},function(t,e,i){t.exports=i.p+"images/empty.6075087.png"},function(t,e,i){t.exports=i.p+"images/libraryMask.124c230.jpg"},function(t,e,i){var o={"./chrome.png":737,"./close.png":559,"./edge.png":738,"./extfans.png":739,"./firefox.png":740,"./home.png":741,"./recommand.png":560};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=736},function(t,e,i){t.exports=i.p+"images/chrome.b915791.png"},function(t,e,i){t.exports=i.p+"images/edge.ef8e0f9.png"},function(t,e,i){t.exports=i.p+"images/extfans.d471fcf.png"},function(t,e,i){t.exports=i.p+"images/firefox.6bc945d.png"},function(t,e,i){t.exports=i.p+"images/home.483cb16.png"},function(t,e,i){var o={"./1.png":743,"./2.png":744,"./3.png":745,"./4.png":746,"./5.png":747,"./6.png":748,"./arrow.png":562,"./close.png":561};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=742},function(t,e,i){t.exports=i.p+"images/1.c6a8a92.png"},function(t,e,i){t.exports=i.p+"images/2.f260bed.png"},function(t,e,i){t.exports=i.p+"images/3.ca68e72.png"},function(t,e,i){t.exports=i.p+"images/4.e5f22bb.png"},function(t,e,i){t.exports=i.p+"images/5.9ede8df.png"},function(t,e,i){t.exports=i.p+"images/6.670ed54.png"},,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"level1",(function(){return rc})),i.d(e,"level2",(function(){return ac}));i(52),i(10),i(13),i(16);var o=i(7),n=i.n(o),r=i(1),a=i(242),s=i(468),l=(i(487),i(0)),c=i(21),p=r.b`:host {
  --topbar-bookmark-height: calc(30px + 6px);
  display: block;
  width: 100vw;
  height: var(--topbar-bookmark-height);
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  box-sizing: border-box;
  padding: 4px 8px;
  position: relative;
}
.bookmarks {
  width: 100%;
  height: 100%;
}
.bookmarks .bookmarks-topbar {
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
}
.bookmarks .bookmarks-topbar .bookmark-dropdown-entry {
  display: block;
  width: 0;
  height: 100%;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: center;
  margin-right: 3px;
  box-sizing: border-box;
}
.bookmarks .bookmarks-topbar .bookmark-split-line {
  display: block;
  width: 1px;
  height: 50%;
  background-color: #ccc;
  margin: 0 6px;
}
.bookmarks .bookmarks-topbar bookmark-item,
.bookmarks .bookmarks-topbar .bookmark-item {
  border-radius: calc(var(--topbar-bookmark-height) / 2);
  position: relative;
}
.bookmarks .bookmarks-topbar bookmark-item.active::before,
.bookmarks .bookmarks-topbar .bookmark-item.active::before {
  opacity: 0.05;
}
.bookmarks .bookmarks-topbar bookmark-item::before,
.bookmarks .bookmarks-topbar .bookmark-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #000;
  border-radius: inherit;
  transition: opacity 400ms;
}
.bookmarks .bookmarks-topbar bookmark-item:hover::before,
.bookmarks .bookmarks-topbar .bookmark-item:hover::before {
  transition: opacity 200ms;
  opacity: 0.1;
}
.bookmarks .bookmarks-topbar .bookmark-items {
  flex: 1;
  width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-flow: row wrap;
  overflow: hidden;
}
.bookmarks .bookmarks-topbar .bookmark-items > bookmark-item {
  margin-left: 3px;
}
.bookmarks .bookmarks-topbar .bookmark-items > bookmark-item:first-child {
  margin-left: 0;
}
.bookmarks .bookmarks-topbar .other-bookmark {
  display: inline-flex;
  width: auto;
  height: 100%;
  align-items: center;
}
.bookmarks .bookmarks-popup-mask {
  position: fixed;
  top: -var(--topbar-bookmark-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--topbar-bookmark-height));
  z-index: 99999;
}
`,d=r.b`:host(bookmark-item) {
  display: block;
  width: auto;
  height: 26px;
}
:host(.first) .bookmark-item {
  margin-top: 0 !important;
}
.bookmark-item {
  height: 100%;
  width: inherit;
  max-width: inherit;
  box-sizing: border-box;
  padding: 2px 10px;
  position: relative;
  border-radius: calc(var(--topbar-bookmark-height) / 2);
  flex-flow: row nowrap;
  align-items: center;
  list-style: none;
}
.bookmark-item .bookmark-icon {
  width: 16px;
  height: 16px;
}
.bookmark-item .bookmark-text {
  font-size: 12px;
  color: #333;
  margin-left: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
.bookmark-item .item-folder-arrow {
  width: 12px;
  height: 12px;
  vertical-align: top;
}
.bookmark-item.popup {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 6px;
}
`,h=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const u="STAR",g="FOLDER",f="ITEM";class m extends r.a{constructor(){super(...arguments),this.folder_arrow=!1,this.inPopup=!1}render(){return r.e`
      <div
        class="bookmark-item${this.inPopup?" popup":""}"
        style="${this.folder_arrow?"display: flex;":"display: inline-flex;"}"
      >
        ${this.type===u?r.e` <img class="bookmark-icon" src=${i(416)} /> `:null}
        ${this.type===g?r.e` <img class="bookmark-icon" src=${i(402)} /> `:null}
        ${this.type===f?r.e` <i-favicon class="bookmark-icon" .url=${this.url}></i-favicon> `:null}
        <span class="bookmark-text" style="${this.text?"":"margin-left: 0;"}">${this.text}</span>
        ${this.type===g&&this.folder_arrow?r.e`<img class="item-folder-arrow" src=${i(490)} />`:null}
      </div>
    `}}m.styles=d,h([Object(r.g)({type:String})],m.prototype,"url",void 0),h([Object(r.g)({type:String})],m.prototype,"type",void 0),h([Object(r.g)({type:String})],m.prototype,"text",void 0),h([Object(r.g)({type:Boolean})],m.prototype,"folder_arrow",void 0),h([Object(r.g)({type:Boolean})],m.prototype,"inPopup",void 0),window.customElements.define("bookmark-item",m);var b=i(240),y=i(125);
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
 */
const v=new WeakMap,w=Object(y.e)(t=>e=>{if(!(e instanceof y.b))throw new Error("cache can only be used in text bindings");let i=v.get(e);void 0===i&&(i=new WeakMap,v.set(e,i));const o=e.value;if(o instanceof b.a){if(t instanceof y.d&&o.template===e.options.templateFactory(t))return void e.setValue(t);{let t=i.get(o.template);void 0===t&&(t={instance:o,nodes:document.createDocumentFragment()},i.set(o.template,t)),Object(y.g)(t.nodes,e.startNode.nextSibling,e.endNode)}}if(t instanceof y.d){const o=e.options.templateFactory(t),n=i.get(o);void 0!==n&&(e.setValue(n.nodes),e.commit(),e.value=n.instance)}e.setValue(t)});var x=i(8),k=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class _{constructor(){this.list=null,this.listInTopBar=[],this.listInDropdown=[],this.otherList=null,this.keep_open=!1,this.bookmarkBarHeight=36,this.popup_bottom=6,this.maxWidth=152,this.popupMaxWidth=2*this.maxWidth,this.minWidth=50}setKeepOpen(t){this.keep_open=t}async updateBookmarks(){const t=await new n.a(t=>chrome.bookmarks.getTree(t));let e,i;if(l.n){const{children:o}=t[0],[n,r]=["toolbar_____","unfiled_____"];[e,i]=[o.find(({id:t})=>t===n),o.find(({id:t})=>t===r)]}else[e,i]=t[0].children;this._updateList(e),this._updateOtherList(i)}_updateList(t){this.list=t}updateListInView(t,e){this.listInTopBar=t,this.listInDropdown=e}getListInView(){return[Object(x.j)(this.listInTopBar),Object(x.j)(this.listInDropdown)]}_updateOtherList(t){this.otherList=t}}k([x.g],_.prototype,"list",void 0),k([x.g],_.prototype,"listInTopBar",void 0),k([x.g],_.prototype,"listInDropdown",void 0),k([x.g],_.prototype,"otherList",void 0),k([x.g],_.prototype,"keep_open",void 0),k([x.b],_.prototype,"setKeepOpen",null),k([x.g],_.prototype,"maxWidth",void 0),k([x.g],_.prototype,"popupMaxWidth",void 0),k([x.g],_.prototype,"minWidth",void 0),k([x.b],_.prototype,"_updateList",null),k([x.b],_.prototype,"updateListInView",null),k([x.b],_.prototype,"getListInView",null),k([x.b],_.prototype,"_updateOtherList",null);var O=new _,S=i(336),j=i(345),$=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class I extends r.a{constructor(){super(...arguments),this.tree=[],this.open=!1,this.popupType="",this._open=!1,this._children=[],this._pos={},this._activeIndex=-1,this._update_threshold=180}handleOpenChange(t){this.hideAllChildrenPopup()}hideAllChildrenPopup(){this._open&&(this._open=!1),this._setActiveIndex(-1)}updated(t){t.has("open")&&this.handleOpenChange(this.open)}_clickToOpenFolder(t,e,i){O.setKeepOpen(!0);const o=t.currentTarget;this._setActiveIndex(i),this._openFolder(o,e,i)}_openFolder(t,e,i){this._pos={top:-5e3,right:-5e3},this._open||(this._open=!0),this._children=e,requestAnimationFrame(()=>{this._childrenPopup=this.shadowRoot.querySelector("bookmarks-popup"),this._updatePos(t)})}_whenMouseEnterItem(t,e,i){const o=t.currentTarget;this._update_throttle_timer&&(clearTimeout(this._update_throttle_timer),this._update_throttle_timer=void 0),this._update_throttle_timer=setTimeout(()=>{if(O.keep_open){if(Reflect.has(e,"children")){if(this._setActiveIndex(i),this._open){this._children=e.children;const t=Object.assign({},this._pos);Reflect.has(t,"bottom")&&Reflect.deleteProperty(t,"bottom"),this._pos=t,requestAnimationFrame(()=>{this._updatePos(o)})}else this._openFolder(o,e.children,i);return}this._setActiveIndex(-1),this._open&&(this._open=!1)}},this._update_threshold)}_updatePos(t){if(!this._childrenPopup)return;this._childrenPopup.hideAllChildrenPopup();const{innerHeight:e,innerWidth:i}=window,{x:o,y:n}=t.getBoundingClientRect(),{offsetWidth:r}=t.parentElement,{offsetHeight:a}=t,{offsetWidth:s,offsetHeight:l}=this._childrenPopup,c={},p=i-o-r,d=Math.max(o,p),h=()=>{let t;d===p?(t=i-p,this._popup_type="right"):(t=d-s,this._popup_type="left"),c.left=t};if(d>=s||i<s)if(this.popupType?"right"===this.popupType&&p>s?(c.left=i-p,this._popup_type=this.popupType):"left"===this.popupType&&o>s?(c.left=o-s,this._popup_type=this.popupType):h():h(),l>e)c.top=O.bookmarkBarHeight,c.bottom=O.popup_bottom;else{const t=e-n-O.popup_bottom;if(l<t)c.top=n;else{const e=l-t;c.top=n-e}}else if(i>s){c.left=o;const t=e-n-a,i=n-O.bookmarkBarHeight;Math.max(t,i)===t?(c.top=n+a,l>t&&(c.bottom=O.popup_bottom)):(c.bottom=e-n,l>i&&(c.top=O.bookmarkBarHeight))}this._pos=c}_clickToOpenUrl(t,e){this.closeFolder(),j.a.sendEvent({action:{openTopBookmark:c.a.getTargetLogDomain(t)}}),c.a.openUrl(t,s.settingStore.setting.link.bookmark,e)}_setActiveIndex(t){this._activeIndex=t}render(){return r.e`
      <section class="bookmarks-popup">
        <ul
          class="bookmarks-popup-tree global-scrollbar"
          style="max-width: ${O.popupMaxWidth}px;min-width: ${O.maxWidth}px;"
          @scroll=${()=>this.hideAllChildrenPopup()}
        >
          ${0===this.tree.length?r.e`<li class="bookmark-item-empty">${i18n("empty")}</li>`:null}
          ${this.tree.map((t,e)=>r.e`
                  <bookmark-item
                    class="${this._activeIndex===e?"active":""}${0===e?" first":""}"
                    .title=${Reflect.has(t,"children")?"":t.title}
                    .text=${t.title}
                    .url=${t.url}
                    .type=${Reflect.has(t,"children")?"FOLDER":"ITEM"}
                    style="max-width: ${O.popupMaxWidth+"px"};height: 28px;"
                    ?folder_arrow=${!0}
                    ?inPopup=${!0}
                    @click=${i=>{Reflect.has(t,"children")?this._clickToOpenFolder(i,t.children,e):(this._setActiveIndex(-1),this._clickToOpenUrl(t.url,i))}}
                    @mouseenter=${i=>this._whenMouseEnterItem(i,t,e)}
                  ></bookmark-item>
                `)}
        </ul>
      </section>
      <!-- 试用上下树渲染会带来性能损耗 -->
      ${w(this._open?r.e`<bookmarks-popup
              .tree=${this._children}
              .popupType=${this._popup_type}
              .closeFolder=${this.closeFolder}
              ?open=${this._open}
              style="
              ${"top"in this._pos?"top: "+this._pos.top+"px; ":""}
              ${"left"in this._pos?"left: "+this._pos.left+"px; ":""}
              ${"right"in this._pos?"right: "+this._pos.right+"px; ":""}
              ${"bottom"in this._pos?"bottom: "+this._pos.bottom+"px; ":""}"
              @mouseenter=${()=>{this._update_throttle_timer&&(clearTimeout(this._update_throttle_timer),this._update_throttle_timer=void 0)}}
            ></bookmarks-popup>`:null)}
    `}}I.styles=[S.a,r.b`
      :host {
        width: auto;
        height: auto;
        min-width: 80px;
        position: fixed;
        overflow: hidden;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 12px 3px;
      }

      .bookmarks-popup {
        width: 100%;
        height: 100%;
      }

      .bookmarks-popup .bookmarks-popup-tree {
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        padding: 10px 0;
      }

      .bookmarks-popup .bookmarks-popup-tree .bookmark-item-empty {
        width: inherit;
        height: inherit;
        min-width: inherit;
        max-width: inherit;
        box-sizing: border-box;
        padding: 2px 10px;
      }

      .bookmarks-popup .bookmarks-popup-tree bookmark-item {
        position: relative;
      }

      .bookmarks-popup .bookmarks-popup-tree bookmark-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: #000;
        border-radius: inherit;
        transition: opacity 100ms;
      }
      // .bookmarks-popup .bookmarks-popup-tree bookmark-item.active::before {
      //   opacity: 0.1;
      // }
      .bookmarks-popup .bookmarks-popup-tree bookmark-item:hover::before {
        transition: opacity 100ms;
        opacity: 0.1;
      }
    `],$([Object(r.g)({type:Array})],I.prototype,"tree",void 0),$([Object(r.g)({type:Boolean})],I.prototype,"open",void 0),$([Object(r.g)({type:String})],I.prototype,"popupType",void 0),$([Object(r.g)({type:Object})],I.prototype,"closeFolder",void 0),$([Object(r.f)()],I.prototype,"_open",void 0),$([Object(r.f)()],I.prototype,"_children",void 0),$([Object(r.f)()],I.prototype,"_pos",void 0),$([Object(r.f)()],I.prototype,"_popup_type",void 0),window.customElements.define("bookmarks-popup",I);var C=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class T extends a.a{constructor(){super(),this._zindex=1e7,this._activeIndex=-1,this._popup_index=-1,this._children=[],this._open=!1,this._popup_pos={},this._popup_zindex=-1,this._emitUpdateList=()=>{this._throttleUpdateList()},this._bookmarks_url="chrome://bookmarks",this._closeFolder=()=>{this._popup_pos={},O.keep_open&&O.setKeepOpen(!1),this._open&&(this._open=!1),this._popup_zindex=-1,this._activeIndex=-1},c.a.send({key:"bg-run-start-watch-bookmarks"})}firstUpdated(){this._itemsContainer=this.shadowRoot.querySelector(".bookmark-items"),this._bookmarksPopup=this.shadowRoot.querySelector(".bookmarks-popup-comp"),this._initPage()}_bookmarksToLocal(t){var e;const i=Math.ceil(window.screen.width/this._itemsContainer.clientWidth)*t,o=Object(x.j)((null===(e=O.list)||void 0===e?void 0:e.children)||[]);o.length>i&&o.splice(i),localStorage.setItem("bookmarks",JSON.stringify(o))}_initPage(){this._throttleUpdateList=c.a.throttle(this._updateList,40),O.updateBookmarks().finally(()=>{n.a.resolve().then(()=>this.updateComplete).then(()=>{this.style.display="block"}).then(()=>this.updateComplete).then(()=>new n.a(t=>setTimeout(t,100))).finally(()=>{const t=document.querySelector(".top-bookmark");t&&t.parentElement.removeChild(t)})}),this._updateListDisposer=Object(x.h)(()=>O.list,()=>this._throttleUpdateList(!0)),this._updateOtherListDisposer=Object(x.h)(()=>O.otherList,()=>this._throttleUpdateList(!0)),this._watchListDisposer=Object(x.h)(()=>O.listInTopBar.length,t=>this._bookmarksToLocal(t),{fireImmediately:!0}),window.addEventListener("resize",this._emitUpdateList),window.addEventListener("blur",this._closeFolder)}_updateList(t=!1){this._open&&this._closeFolder();const{offsetWidth:e}=this._itemsContainer,{minWidth:i}=O;let o=Math.floor(e/i);l.i&&o--;const{children:n}=O.list,r=n.slice(0,o),a=n.slice(o);O.updateListInView(r,a),this.updateComplete.then(()=>{let t=0;const e=this.shadowRoot.querySelectorAll('.bookmark-items>bookmark-item:not([type="STAR"])');for(let i=0,o=e.length-1;o>=i;o--){if(!(e[o].offsetTop>10))break;t++}0!==t&&(a.unshift(...r.splice(-t)),O.updateListInView(r,a))})}disconnectedCallback(){this._throttleUpdateList&&(window.removeEventListener("resize",this._emitUpdateList),window.removeEventListener("blur",this._closeFolder)),this._updateListDisposer&&this._updateListDisposer(),this._updateOtherListDisposer&&this._updateOtherListDisposer(),this._watchListDisposer&&this._watchListDisposer()}_clickToOpenFolder(t,e,i){if(O.keep_open)return this._popup_pos={},this._open=!1,O.setKeepOpen(!1),this._popup_zindex=-1,void(this._activeIndex=-1);this._popup_index=i,this._setActiveIndex(i),O.setKeepOpen(!0),this._open=!0,this._children=e;const{offsetLeft:o}=t.currentTarget;requestAnimationFrame(()=>{this._updatePopupPos(o),this._popup_zindex=this._zindex})}_whenMouseEnterItem(t,e,i){if(O.keep_open){this._setActiveIndex(i);const o=e=>{this._popup_zindex=-1,this._open||(this._open=!0),this._children=e,this._popup_pos={};const{offsetLeft:i}=t.currentTarget;requestAnimationFrame(()=>{this._updatePopupPos(i),this._popup_zindex=this._zindex})},n=t=>{this._popup_index!==i&&this._bookmarksPopup.hideAllChildrenPopup(),this._popup_index=i,o(t)};Array.isArray(e)?n(e):Reflect.has(e,"children")&&n(e.children)}}_updatePopupPos(t){const{innerWidth:e,innerHeight:i}=window,{offsetWidth:o,offsetHeight:n}=this._bookmarksPopup,r=Object.assign({},this._popup_pos);t+o>e?r.right=0:r.left=t,r.top=O.bookmarkBarHeight,n>i&&(r.bottom=O.popup_bottom),this._popup_pos=r}_clickToOpenUrl(t,e){j.a.sendEvent({action:{openTopBookmark:c.a.getTargetLogDomain(t)}}),c.a.openUrl(t,s.settingStore.setting.link.bookmark,e)}_setActiveIndex(t){this._activeIndex=t}render(){return r.e`
      <section class="bookmarks">
        <section class="bookmarks-topbar">
          <section class="bookmark-items">
            ${l.i?r.e`
                  <bookmark-item
                    type="STAR"
                    .text=${i18n("bookmarks")}
                    .url=${this._bookmarks_url}
                    style="max-width: ${O.maxWidth+"px"}"
                    @click=${t=>this._clickToOpenUrl(this._bookmarks_url,t)}
                    .title=${i18n("bookmarks")}
                  ></bookmark-item>
                  <!-- @mouseenter=${()=>{this._open&&(this._open=!1)}} -->
                `:null}
            ${O.listInTopBar.map((t,e)=>r.e`
                    <bookmark-item
                      class="${this._activeIndex===e?"active":""}"
                      .title=${Reflect.has(t,"children")?"":t.title}
                      .text=${t.title}
                      .url=${t.url}
                      .type=${Reflect.has(t,"children")?"FOLDER":"ITEM"}
                      style="max-width: ${O.maxWidth+"px"}"
                      @click=${i=>{Reflect.has(t,"children")?this._clickToOpenFolder(i,t.children,e):(this._setActiveIndex(-1),this._clickToOpenUrl(t.url,i))}}
                      @mouseenter=${i=>this._whenMouseEnterItem(i,t,e)}
                    ></bookmark-item>
                  `)}
          </section>

          <i
            class="bookmark-item bookmark-dropdown-entry${-2===this._activeIndex?" active":""}"
            style="background-image: url(${i(417)});${0===O.listInDropdown.length?"visibility: hidden;":""}"
            @click=${t=>this._clickToOpenFolder(t,O.listInDropdown,-2)}
            @mouseenter=${t=>this._whenMouseEnterItem(t,O.listInDropdown,-2)}
          ></i>
          <i class="bookmark-split-line"></i>
          <section
            @click=${t=>this._clickToOpenFolder(t,O.otherList.children,-3)}
            @mouseenter=${t=>this._whenMouseEnterItem(t,O.otherList,-3)}
            class="bookmark-item other-bookmark${-3===this._activeIndex?" active":""}"
            style="max-width: ${O.maxWidth}px"
          >
            <img class="bookmark-icon" src=${i(402)} />
            <span class="bookmark-text">${i18n("other_bookmarks")}</span>
          </section>
        </section>

        <!-- 点击bookmarks弹出的文件夹框和背景透明mask -->
        <section
          class="bookmarks-popup"
          style="
            ${this._open?"":"display: none;"}
          "
        >
          <section class="bookmarks-popup-mask" @click=${()=>this._closeFolder()}></section>
          <bookmarks-popup
            class="bookmarks-popup-comp"
            style="z-index: ${this._popup_zindex};
            ${"top"in this._popup_pos?"top: "+this._popup_pos.top+"px; ":""}
            ${"left"in this._popup_pos?"left: "+this._popup_pos.left+"px; ":""}
            ${"right"in this._popup_pos?"right: "+this._popup_pos.right+"px; ":""}
            ${"bottom"in this._popup_pos?"bottom: "+this._popup_pos.bottom+"px; ":""}"
            .tree=${this._children}
            ?open=${this._open}
            .closeFolder=${this._closeFolder.bind(this)}
          ></bookmarks-popup>
        </section>
      </section>
    `}}T.styles=[p,d],C([Object(r.f)()],T.prototype,"_children",void 0),C([Object(r.f)()],T.prototype,"_open",void 0),C([Object(r.f)()],T.prototype,"_popup_pos",void 0),C([Object(r.f)()],T.prototype,"_popup_zindex",void 0),window.customElements.define("topbar-bookmarks",T);var E=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let L=class extends a.a{firstUpdated(){this.style.zIndex="100000"}render(){const{withPermissionTopBookmark:t}=s.settingStore;return r.e`
      <div class="newtab-topbar">
        ${t?r.e` <topbar-bookmarks style="display: none;"></topbar-bookmarks> `:null}
      </div>
    `}};L.styles=r.b`
    .newtab-topbar {
      position: relative;
      z-index: 102;
    }
  `,L=E([Object(r.c)("newtab-topbar")],L);i(17);var P=i(22),R=r.b`.main {
  width: 100vw;
  height: 100%;
}
.hide {
  display: none !important;
}
.main-left,
.main-right {
  position: absolute;
  top: 0;
  z-index: 2;
  width: var(--main-side-width);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0;
}
.main-left[hidden],
.main-right[hidden] {
  display: none;
}
.main-left {
  left: 0;
}
.main-right {
  right: 0;
}
.main-middle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.main-middle-center {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-middle-center:active,
.main-middle-center:focus {
  border: none !important;
  outline: none !important;
}
.search {
  margin-top: var(--search-margin-top);
}
.swiper-container {
  flex-shrink: 0;
  position: relative;
  padding: 0 0 20px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  margin-top: calc(var(--icon-padding-top) * -1);
}
.swiper-container .swiper-content {
  height: calc(var(--icon-box-height) + var(--icon-padding-top));
  width: calc(var(--icon-box-width) + var(--main-icons-margin) * 2);
  box-sizing: border-box;
}
.swiper-container .swiper-pagination {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
}
.swiper-container .swiper-pagination .dot {
  margin: 0 10px;
  display: block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.4;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.swiper-container .swiper-pagination .dot:hover {
  opacity: 0.6;
}
.swiper-container .swiper-pagination .dot.active {
  opacity: 1;
}
.swiper-btn-prev,
.swiper-btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.swiper-btn-next {
  right: calc(var(--main-side-width) / 2);
}
.swiper-btn-prev {
  left: calc(var(--main-side-width) / 2);
  transform: translateY(-50%) rotate(180deg);
}
.swiper-btn.hide {
  opacity: 0;
  pointer-events: none;
}
.swiper-btn {
  margin-top: calc(var(--search-height) / 2);
  opacity: 0.2;
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: ease;
  cursor: pointer;
}
.swiper-btn img {
  height: var(--icon-width);
  max-width: 42px;
  max-height: 125px;
}
.swiper-btn:hover {
  opacity: 0.8;
}
.swiper-btn::after {
  content: none;
}
.btn-setting-box {
  position: absolute;
  right: 20px;
  top: var(--settings-icon-top-offset);
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
}
i-updater {
  pointer-events: auto;
}
.btn-setting,
.setting-home-box .btn-setting-home {
  margin-left: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  pointer-events: auto;
}
.btn-setting:hover {
  transform: scale(1.1);
}
.setting-home-box {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.setting-home-box .btn-setting-home {
  margin: 0;
}
.setting-home-box .btn-setting-home:hover {
  transform: scale(1.1);
}
.setting-home-box .setting-home-text {
  position: absolute;
  top: -100px;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #222222;
  line-height: 28px;
  min-width: 80px;
  padding: 0 10px;
  box-sizing: border-box;
  height: 28px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  white-space: nowrap;
}
.sync {
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
}
.sync .syncing-img {
  width: 20px;
  height: 20px;
  animation: round 0.8s linear infinite;
}
.sync-end {
  align-items: center;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.sync-end img {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.windmill {
  position: absolute;
  right: 20px;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.windmill img {
  z-index: 1;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.windmill span {
  display: block;
  margin-top: -30px;
  margin-left: auto;
  margin-right: auto;
  width: 5px;
  height: 56px;
  background-color: #fefefe;
}
.icp {
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  text-align: center;
  pointer-events: none;
}
.icp-link {
  color: #fff;
  font-size: 12px;
  opacity: 0.4;
  text-decoration: none;
  pointer-events: all;
}
.icp-link:hover {
  opacity: 0.8;
}
.hide {
  display: none;
}
`,D=i(346);class A extends D.a{}const M=Object(D.b)(new A);var N=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class z{constructor(){this.flipStatus=!1,this.iconEditing=!1,this.folderIndexs=null,this.folderFlipData=null,this.focusName=!1,this.offsetX=0,this.iconActive=!1}get folderStatus(){return null!==this.folderIndexs}get folderItem(){if(null===this.folderIndexs)return null;const t=this.folderIndexs[0],e=this.folderIndexs[1];return s.siteStore.sites[t][e]}changeIconEditing(t){this.iconEditing=t}openFolderWithIndexs(t){this.folderIndexs=t}closeFolder(){this.folderIndexs=null}changeFolderFlipData(t){if(t){const t={};this.folderFlipData=t}else this.folderFlipData=t}changeFlipStatus(t){this.flipStatus=t}changeFocusStatus(t){this.focusName=t}changeOffsetX(t){this.offsetX=t}changeIconActive(t){this.iconActive=t}}N([x.g],z.prototype,"flipStatus",void 0),N([x.g],z.prototype,"iconEditing",void 0),N([x.g],z.prototype,"folderIndexs",void 0),N([x.g],z.prototype,"folderFlipData",void 0),N([x.g],z.prototype,"focusName",void 0),N([x.g],z.prototype,"offsetX",void 0),N([x.g],z.prototype,"iconActive",void 0),N([x.e],z.prototype,"folderStatus",null),N([x.e],z.prototype,"folderItem",null),N([x.b],z.prototype,"changeIconEditing",null),N([x.b],z.prototype,"openFolderWithIndexs",null),N([x.b],z.prototype,"closeFolder",null),N([x.b],z.prototype,"changeFolderFlipData",null),N([x.b],z.prototype,"changeFlipStatus",null),N([x.b],z.prototype,"changeFocusStatus",null),N([x.b],z.prototype,"changeOffsetX",null),N([x.b],z.prototype,"changeIconActive",null);const B=new z,U=()=>{if(B.iconActive){if(s.pluginStore.pluginViews.includes("infinity://settings")||s.pluginStore.pluginViews.includes("profile")){const t=s.pluginStore.pluginViews.slice(-1)[0];if("infinity://settings"===t||"profile"===t){const t=(innerWidth-parseInt(document.body.style.getPropertyValue("--icon-box-width")))/2;if(t<350&&t>10)return void B.changeOffsetX(Math.max(t-400,-t))}}B.changeOffsetX(0)}else B.changeOffsetX(0)};Object(x.c)(U,{delay:50}),window.addEventListener("resize",c.a.throttle(()=>{document.querySelector("i-menu").toHide(),U()},50)),M.setAddIconActiveStatus=t=>{B.changeIconActive(t)};var F=r.b`:host {
  display: block;
  --left: 0;
  --top: 0;
}
.menu-container {
  pointer-events: none;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.menu-box {
  padding: 7px 0;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  left: var(--left);
  top: var(--top);
  -moz-user-select: none;
       user-select: none;
  box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s opacity;
  opacity: 1;
}
.menu-box .menu-item {
  margin: 1px 0;
  cursor: pointer;
  font-size: 13px;
  line-height: 1.4;
  padding: 8px 20px;
  color: #333;
  white-space: nowrap;
  transition: none;
  background-color: #ffffff;
}
.menu-box .menu-item:hover {
  background-color: #f1f1f1;
}
`,W=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let H=null,q=class extends r.a{constructor(){super(...arguments),this.show=!1,this.menus=[],this.position={left:0,top:0},this._renderMenu=()=>this.menus.map(t=>r.e`<span
        class="menu-item"
        @click="${e=>{this.toHide(),t.handler(e)}}"
        >${t.text}</span
      > `)}static create(){if(H)return H;const t=document.body;return H=document.createElement("i-menu"),t.appendChild(H),H}firstUpdated(){}destroy(){this.parentNode.removeChild(this)}updated(){const{left:t,top:e}=this.position,i={left:t,top:e},{clientWidth:o,clientHeight:n}=this.$menuBox,{width:r,height:a}=document.body.getBoundingClientRect();r<t+o&&(i.left-=o),a<e+n&&(i.top-=n),this.style.setProperty("--left",i.left+"px"),this.style.setProperty("--top",i.top+"px")}toShow(t,e){this.menus=t,this.position=e,this.show=!0}toHide(){this.show&&(this.show=!1)}render(){return r.e`
      <div class="menu-container" .hidden="${!this.show}">
        <div class="menu-box">${this._renderMenu()}</div>
      </div>
    `}};q.styles=F,W([Object(r.h)(".menu-box")],q.prototype,"$menuBox",void 0),W([Object(r.g)({type:Boolean})],q.prototype,"show",void 0),W([Object(r.g)({type:Array,attribute:!1})],q.prototype,"menus",void 0),W([Object(r.g)({type:Object})],q.prototype,"position",void 0),q=W([Object(r.c)("i-menu")],q);var V=i(369);const Y=t=>{const e=[];return t?(t.querySelectorAll("[flipkey]").forEach(t=>{e.push(t)}),e):e};class X{constructor({root:t=document.body,selector:e=Y,duration:i=300,easing:o="ease",viewBox:n}){this.root=null,this.viewBox=null,this.selector=null,this.duration=null,this.easing=null,this._first={},this._last={},this._animations={},this.root=t,this.viewBox=n,this.selector=e,this.duration=i,this.easing=o,this._first={},this._last={},this._animations={}}_read(t){const e={},i=this.selector(this.root);let o;return this.viewBox&&(o=this.viewBox.getBoundingClientRect()),i.forEach(i=>{const n=i.getAttribute("flipkey");if(n&&"undefined"!==n){e[n]&&console.warn("当前[flipkey]重复：",n);const r=i.getBoundingClientRect(),{left:a,top:s,width:l,height:c}=r,p={left:a,top:s,width:l,height:c};!function(t,e){return e?t.top+t.height>=e.top&&t.left+t.width>=e.left&&t.bottom-t.height<=e.bottom&&t.right-t.width<=e.right:t.top+t.height>=0&&t.left+t.width>=0&&t.bottom-t.height<=window.innerHeight&&t.right-t.width<=window.innerWidth}(r,o)?e[n]=null:(t&&(p.elm=i),e[n]=p)}}),e}read(t={}){const e=this._read();return this._first=Object.assign(Object.assign({},e),t),this._first}cancel(t){this._animations[t]&&this._animations[t].cancel()}play({keepScale:t="",props:e=["scale","position"],created:i=null}={keepScale:"",props:["scale","position"],created:null}){return new n.a(o=>{this._last=this._read(!0);let n=0,r=0;Object.keys(this._last).forEach(a=>{const s={},l={},c=this._last[a],p=this._first[a];if(!c)return;const d={},h={duration:this.duration,easing:this.easing};if(p?(e.includes("position")&&(d.translateX=Math.round(p.left-c.left)||0,d.translateY=Math.round(p.top-c.top)||0),e.includes("scale")&&(d.scaleX=c.width>10?p.width/c.width:1,d.scaleY=c.height>10?p.height/c.height:1,"width"===t?d.scaleY=d.scaleX:"height"===t&&(d.scaleX=d.scaleY))):"scale"===i&&(d.scaleX=d.scaleY=.3,s.opacity="0",l.opacity="1",h.duration=200),s.transform=`matrix(${d.scaleX||1},0,0,${d.scaleY||1},${d.translateX||0},${d.translateY||0})`,l.transform="matrix(1,0,0,1,0,0)",l.transform!==s.transform&&Object.keys(s).length&&Object.keys(l).length){n+=1;const t=c.elm;t.style.pointerEvents="none";const e=t.animate([s,l],h);this._animations[a]=e,e.onfinish=()=>{this._animations[a]=null,t.style.pointerEvents="",r+=1,r===n&&o(r)},e.oncancel=()=>{this._animations[a]=null,t.style.pointerEvents="",r+=1,r===n&&o(r)}}}),0===n&&o(0)})}}var G=i(335),K=i(483),Q=i(2),J=(i(368),i(191)),Z=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class tt{constructor(){this.dragId="",this.dragIndexs=[],this.startMove=!1,this.mobileDrag=!1,this.dragXLimit=!1,this.dragStage=null,this.dragMergeHolderIndexs=null,this.dropTargetId="",this.dragIns=null,this.dragNone={dom:null,oraginOffsetX:0,oraginOffsetY:0,offsetX:0,offsetY:0,marginX:0,width:0,height:0,x:0,y:0},this.drag=Object.assign({},this.dragNone),this.folderTimer=null}setDragStatus(t,e=[]){this.dragId=t,this.dragIndexs=e}changeXLimitStatus(t){this.dragXLimit=t}setStartMove(t){this.startMove=t}clearDragStatus(){this.dragId="",this.dragIndexs=[],this.startMove=!1,this.dragStage=null,this.dragMergeHolderIndexs=null,this.dropTargetId=""}clearDragIndexs(){this.dragIndexs=[]}setMergeStatus(t,e){this.dragStage=t,this.dropTargetId=e}checkDragIndexs(){var t,e;const[i,o,n]=this.dragIndexs;let r=null;if(2===this.dragIndexs.length?r=s.siteStore.sites[i][o]:3===this.dragIndexs.length&&(r=null===(e=null===(t=s.siteStore.sites[i][o])||void 0===t?void 0:t.children)||void 0===e?void 0:e[n]),(null==r?void 0:r.id)===this.dragId)return;const a=s.siteStore.findIndex(0,this.dragId);this.dragIndexs=a||[]}setMobileDrag(t){this.mobileDrag=t}setHolderIndexs(t=[]){2===t.length&&2===this.dragIndexs.length&&t[0]===this.dragIndexs[0]&&t[1]>this.dragIndexs[1]?this.dragMergeHolderIndexs=[...this.dragIndexs]:this.dragMergeHolderIndexs=null}clearMergeStatus(){this.dragStage=null,this.dropTargetId=""}setDragIns(t){this.dragIns=t}sortSites(t,e){const[i,o,n]=this.dragIndexs,[r,a,l]=t;i===r&&(3===t.length&&3===this.dragIndexs.length?"left"===e&&l>n&&l%s.settingStore.setting.layout.col==0?e="right":"right"===e&&l<n&&l%s.settingStore.setting.layout.col==s.settingStore.setting.layout.col-1&&(e="left"):2===t.length&&2===this.dragIndexs.length&&("left"===e&&a>o&&a%s.settingStore.setting.layout.col==0?e="right":"right"===e&&a<o&&a%s.settingStore.setting.layout.col==s.settingStore.setting.layout.col-1&&(e="left")));const c=s.siteStore.sites[i][o];let p=c;3===this.dragIndexs.length&&(p=p.children[n]),"right"===e?2!==t.length||2===this.dragIndexs.length&&i===r&&o<a?3===t.length&&n>l&&(t[2]+=1):t[1]+=1:2===t.length&&2===this.dragIndexs.length&&i===r&&o<a?t[1]-=1:3===t.length&&n<l&&(t[2]-=1);const{data:d,clearPageIndex:h}=s.siteStore.delSites(this.dragIndexs,!1);s.siteStore.insertSite(t,d[0]);const u=s.siteStore.handelStatus(this.dragIndexs,t,c,p,h);this.dragIndexs=u}createFolder(t){const[e,i,o]=this.dragIndexs,[n,r]=t,a=s.siteStore.sites[e][i];let l=a;const p=s.siteStore.sites[n][r];3===this.dragIndexs.length&&(l=l.children[o]);const d={name:i18n("folder"),uuid:c.a.randomId("folder-"),id:c.a.randomId("folderId-"),children:[p,l],updatetime:Date.now()};s.siteStore.delSites(t,!1),s.siteStore.insertSite(t,d),this.setMergeStatus("merge",d.id);const{clearPageIndex:h}=s.siteStore.delSites(this.dragIndexs,!1),u=s.siteStore.handelStatus(this.dragIndexs,t,a,l,h);return this.dragIndexs=u,{folderId:d.id,uuid:d.uuid}}intoFolder(t){const[e,i,o]=this.dragIndexs,[n,r]=t,a=s.siteStore.sites[e][i];let l=a;const c=s.siteStore.sites[n][r];3===this.dragIndexs.length&&(l=l.children[o]);const p=c.children.length;et.setMergeStatus("merge",c.id),s.siteStore.insertSite([...t,p],l);const{clearPageIndex:d}=s.siteStore.delSites(this.dragIndexs,!1),h=s.siteStore.handelStatus(this.dragIndexs,t,a,l,d);this.dragIndexs=h}}Z([x.g],tt.prototype,"dragId",void 0),Z([x.g],tt.prototype,"dragIndexs",void 0),Z([x.g],tt.prototype,"startMove",void 0),Z([x.g],tt.prototype,"mobileDrag",void 0),Z([x.g],tt.prototype,"dragXLimit",void 0),Z([x.g],tt.prototype,"dragStage",void 0),Z([x.g],tt.prototype,"dragMergeHolderIndexs",void 0),Z([x.g],tt.prototype,"dropTargetId",void 0),Z([x.g],tt.prototype,"dragIns",void 0),Z([x.b],tt.prototype,"setDragStatus",null),Z([x.b],tt.prototype,"changeXLimitStatus",null),Z([x.b],tt.prototype,"setStartMove",null),Z([x.b],tt.prototype,"clearDragStatus",null),Z([x.b],tt.prototype,"clearDragIndexs",null),Z([x.b],tt.prototype,"setMergeStatus",null),Z([x.b],tt.prototype,"checkDragIndexs",null),Z([x.b],tt.prototype,"setMobileDrag",null),Z([x.b],tt.prototype,"setHolderIndexs",null),Z([x.b],tt.prototype,"clearMergeStatus",null),Z([x.b],tt.prototype,"setDragIns",null),Z([x.b],tt.prototype,"sortSites",null),Z([x.b],tt.prototype,"createFolder",null),Z([x.b],tt.prototype,"intoFolder",null);const et=new tt;Object(x.h)(()=>({dragId:et.dragId,folderStatus:B.folderStatus}),t=>{var e;if(t.dragId){const i=document.body.querySelector(".drag-icon-box");if(i){let o=0,n=0;if(t.folderStatus)B.folderFlipData&&(n=116),et.folderTimer=setTimeout(()=>{var t;const e=null===(t=document.querySelector("newtab-main").shadowRoot.querySelector("icon-folder").shadowRoot.querySelector("icon-box"))||void 0===t?void 0:t.shadowRoot.querySelector("icon-content");if(e){const{width:t,height:n}=e.getBoundingClientRect();i.style.width=t+"px",i.style.height=n+"px";const{width:r}=e.shadowRoot.querySelector(".icon-content").getBoundingClientRect();o=(t-r)/2,et.drag.width=r}const n=i.querySelector(".icon-content"),r=i.querySelector(".icon-name");n.style.width="calc(var(--icon-width) * 0.8)",n.style.height="calc(var(--icon-width) * 0.8)",r.style.width="calc(var(--icon-width) * 1.2)",et.drag.offsetX=.8*et.drag.oraginOffsetX+o,et.drag.offsetY=.8*et.drag.oraginOffsetY,et.drag.marginX=o;const a=et.drag.x-et.drag.offsetX,s=et.drag.y-et.drag.offsetY;i.style.left=a+"px",i.style.top=s+"px"},n);else{et.folderTimer&&clearTimeout(et.folderTimer);const t=null===(e=document.querySelector("newtab-main").shadowRoot.querySelector("newtab-icons").shadowRoot.querySelector("icon-box"))||void 0===e?void 0:e.shadowRoot.querySelector("icon-content");if(t){const{width:e,height:n}=t.getBoundingClientRect();i.style.width=e+"px",i.style.height=n+"px";const{width:r}=t.shadowRoot.querySelector(".icon-content").getBoundingClientRect();o=(e-r)/2,et.drag.width=r}const n=i.querySelector(".icon-content"),r=i.querySelector(".icon-name");n.style.width="var(--icon-width)",n.style.height="var(--icon-width)",r.style.width="calc(var(--icon-width) * 1.5)",et.drag.offsetX=et.drag.oraginOffsetX+o,et.drag.offsetY=et.drag.oraginOffsetY,et.drag.marginX=o;const a=et.drag.x-et.drag.offsetX,s=et.drag.y-et.drag.offsetY;i.style.left=a+"px",i.style.top=s+"px"}}}}),Object(x.c)(()=>{if(et.dragIns){const t=document.querySelector("newtab-main");B.folderStatus?et.dragIns.updateOption({dropPointShadowRoot:t.$folderBox.shadowRoot}):et.dragIns.updateOption({dropPointShadowRoot:t.$items.shadowRoot}),B.iconEditing?et.dragIns.updateOption({mobileStartDelayTime:0}):et.dragIns.updateOption({mobileStartDelayTime:500})}},{delay:20});var it=i(120),ot=i(23),nt=i(370),rt=i(237),at=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let st=class extends a.a{constructor(){super(...arguments),this.icon=null,this.indexs=[],this.flipkey="",this.mousedown=!1,this.isFolderItem=!1,this.menu=null,this.menus=[{text:Object(Q.i18n)("open_folder_icons"),handler:()=>{this.icon.children.forEach(t=>{if("web"===t.type){const e={url:t.target,active:!1};l.l?chrome.tabs.create(e):c.a.openUrl(t.target,!0)}})}},{text:Object(Q.i18n)("rename_folder"),handler:()=>{B.changeFolderFlipData({}),B.openFolderWithIndexs(this.indexs),B.changeFocusStatus(!0)}},{text:Object(Q.i18n)("del_folder"),handler:()=>{V.IConfirm.create().toShow({title:Object(Q.i18n)("del_folder"),text:Object(Q.i18n)("confirm_del_folder"),onConfirm:()=>{s.siteStore.delSites(this.indexs)}})}},{text:Object(Q.i18n)("unzip_folder_title"),handler:()=>{V.IConfirm.create().toShow({title:Object(Q.i18n)("unzip_folder_title"),text:Object(Q.i18n)("unzip_folder_content"),onConfirm:()=>{s.siteStore.manualDestroyFolder(this.indexs)}})}}],this._mouseUp=()=>{window.removeEventListener("mouseup",this._mouseUp,{capture:!0}),this.mousedown=!1},this.onMousedown=t=>{const{button:e}=t;if(1===e)return t.stopPropagation(),void this._handleClick(t);if(0===e){if(!0===this.mousedown)return;this.mousedown=!0,window.addEventListener("mouseup",this._mouseUp,{capture:!0})}},this.onTouchStart=t=>{!0!==this.mousedown&&(this.mousedown=!0,t.target.addEventListener("touchend",this._mouseUp))},this._handleClick=t=>{if(this.menu.toHide(),this.icon.children)B.changeFolderFlipData({}),B.openFolderWithIndexs(this.indexs),j.a.sendEvent({action:"openFolder"});else{const e=this.icon;if(B.iconEditing){if(e.target===J.j.target)return;s.siteStore.setEditSite(e.id),s.pluginStore.show("editIcon"),j.a.sendEvent({action:{openEditicon:c.a.getTargetLogDomain(e.target)}})}else{j.a.sendEvent({action:{openIcon:c.a.getTargetLogDomain(e.target)}});const{link:i}=s.settingStore.setting;if(e.target.startsWith("chrome-app://"))return void c.a.openChromeApp(e.target.split("chrome-app://")[1],i.icon,t);if(e.target.startsWith("infinity://")){const o=e.target.split("://")[1];if(this.blockTarget(o))return;return l.h&&"infinity://history"===e.target?void c.a.openUrl("chrome://history/",i.icon,t):"infinity://gmail"===e.target?void c.a.openUrl("https://mail.google.com/mail/ca",i.icon,t):"infinity://chrome-apps"===e.target?l.n?void it.message.error(Object(Q.i18n)("firefox_does_not_support_this_feature")):(s.pluginStore.show(e.target),void K.a.openModal()):"infinity://extension"===e.target&&l.n?void it.message.error(Object(Q.i18n)("firefox_does_not_support_this_feature")):!s.userStore.isLogin&&l.r?void s.userStore.toggleLoginTipModal():void s.pluginStore.show(e.target)}if(e.target.startsWith("chrome://")){const t=e.target.split("://")[1].split("/")[0];if(this.blockTarget(t))return}c.a.openUrl(e.target,i.icon,t)}}}}static get styles(){return r.b`
      .icon-content {
        margin: auto;
        opacity: var(--icon-opacity);
        position: relative;
        cursor: pointer;
        transition-property: box-shadow, transform, border-radius, filter;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        width: var(--icon-width);
        height: var(--icon-width);
      }
      .icon-content::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      .mousedown::after {
        transform: scale(1.2);
      }
      .with-drag {
        transition: none;
      }
      /* .icon-content:not(.folder) {
        backface-visibility: hidden;
      } */
      .folder-item {
        width: calc(var(--icon-width) * 0.8);
        height: calc(var(--icon-width) * 0.8);
        will-change: transform;
      }
      .mini-icon {
        /* backface-visibility: hidden; */
        overflow: hidden;
      }

      .mousedown:not(.with-drag) {
        transform: scale(0.9);
      }
      @media not all and (hover: none) {
        .icon-content:not(.with-drag):hover {
          animation: blinking ease 2s infinite;
          box-shadow: none;
        }
      }

      @keyframes blinking {
        0% {
          -webkit-filter: drop-shadow(0px 0px 3px rgba(33, 150, 243, 0.72));
        }
        50% {
          -webkit-filter: drop-shadow(0px 0px 10px rgba(33, 150, 243, 0.72));
        }
        100% {
          -webkit-filter: drop-shadow(0px 0px 3px rgba(33, 150, 243, 0.72));
        }
      }

      .del {
        position: absolute;
        width: 2vmin;
        height: 2vmin;
        max-width: 20px;
        max-height: 20px;
        min-width: 10px;
        min-height: 10px;
        box-sizing: border-box;
        padding: 0.5vmin;
        background-color: hsla(0, 0%, 100%, 0.5);
        border-radius: 50%;
        right: calc(0.25 * var(--icon-radius));
        top: calc(0.25 * var(--icon-radius));
        transform: translate(40%, -40%) scale(1.1);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform, background-color 0.3s;
        cursor: auto;
      }
      .del i-usesvg {
        top: 0;
        width: 100%;
        height: 100%;
      }
      .del:hover {
        transform: translate(40%, -40%) scale(1.2);
        background-color: hsla(0, 0%, 100%, 1);
      }

      .icon-content.editing:not(.folder) {
        animation: spin 0.3s ease infinite;
        animation-delay: 0.3s;
        will-change: transform;
      }
      .mousedown.editing:not(.with-drag) {
        animation: spinscale 0.2s ease;
        /* animation-fill-mode: backwards; */
        animation-fill-mode: forwards;
        /* animation:none; */
      }
      @keyframes spinscale {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.9);
        }
      }

      .icon-content.editing .op {
        display: block !important;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: var(--icon-radius);
      }
      .icon-content.weather-item .edit-icon-box {
        display: none !important;
      }
      i-usesvg {
        position: relative;
        top: -5px;
        width: 100%;
        height: 100%;
        color: #ff4e50;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(-2deg);
        }
        60% {
          transform: rotate(0deg);
        }
        80% {
          transform: rotate(2deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      .icon-name {
        transition: 0.2s color;
        user-select: none;
      }
      .edit-icon-box {
        width: 100%;
        height: 100%;
        border-radius: var(--icon-radius);
        overflow: hidden;
        transition: opacity 0.3s;
        background: rgba(255, 255, 255, 0.4);
        opacity: 0;
      }
      .edit-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 40%;
      }
      .edit-icon-box:hover {
        opacity: 1;
      }
      .with-drag:hover .edit-icon-box {
        opacity: 0;
      }
      .mobile-drag .edit-icon {
        opacity: 0 !important;
      }
      .icon-content.editing .red-tag {
        display: none;
      }

      .red-tag {
        /* backface-visibility: hidden; */
        display: block;
        position: absolute;
        right: calc(0.25 * var(--icon-radius));
        top: calc(0.25 * var(--icon-radius));
        transform: translate(40%, -40%);
        font-size: calc(var(--icon-width) * 0.15);
        padding: 0 calc(var(--icon-width) * 0.075);
        border-radius: calc(var(--icon-width) * 0.21);
        color: #fff;
        background-color: #ff4e50;
        line-height: 1;
        min-width: 12px;
        box-sizing: border-box;
        height: calc(var(--icon-width) * 0.21);
        min-height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
      }
      .red-tag > span {
        line-height: 1;
        margin-top: -1px;
      }
      .folder-item .red-tag {
        transform: translate(40%, -40%) scale(0.8);
      }
      .mini-icon-padding .red-tag {
        right: calc(0.2 * var(--icon-radius) + var(--icon-width) * 0.03);
        top: calc(0.2 * var(--icon-radius) + var(--icon-width) * 0.03);
        transform: translateX(50%) translateY(-50%) scale(0.3);
        z-index: 11;
      }

      .shake-item {
        transform: scale(1.1);
        filter: drop-shadow(0 0 5px rgba(33, 150, 243, 0.72)) !important;
        /* animation-name: shake;
        animation-duration: 300ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1; */
      }
      .hover-item {
        transition: all 0.2s;
        transform: scale(1.1);
        filter: drop-shadow(0 0 5px rgba(33, 150, 243, 0.72)) !important;
      }
      img {
        user-select: none;
      }
    `}async firstUpdated(){this.menu=q.create()}delAmimation(){return new n.a(t=>{this.$icon.animate([{transform:"scale(1)",opacity:1},{transform:"scale(0.1)",opacity:0}],{duration:300,easing:"ease-in-out"}).onfinish=t,setTimeout(()=>{t(null)},300)})}async _delItem(t){t.stopPropagation(),await this.delAmimation(),s.siteStore.delSites(this.indexs),B.folderStatus&&(0===B.folderItem.children.length?(B.closeFolder(),s.siteStore.delSites(this.indexs)):1===B.folderItem.children.length&&(B.closeFolder(),s.siteStore.destroyFolder(this.indexs)))}blockTarget(t){return!(!["history","bookmarks","extension","chrome-apps","extensions"].includes(t)||!l.r)&&(s.settingStore.toggleSettingHomeModal(),s.settingStore.setWebClickName(t),!0)}_rightClick(t){if(t.stopPropagation(),t.preventDefault(),s.userStore.isLogin||!l.r){if(this.icon.children){const e={left:t.pageX,top:t.pageY};return this.menus[0].text=Object(Q.i18n)("open_all")+"("+this.icon.children.filter(t=>"web"===t.type).length+")",this.menu.toShow(this.menus,e),!1}this.menu.toHide(),B.changeIconEditing(!0)}else s.userStore.toggleLoginTipModal()}_clickIcon(t){t.stopPropagation(),this._handleClick(t)}_renderTag(t){return"infinity://gmail"===t.target?s.settingStore.setting.notice.gmailNumber&&Number(s.gmailStore.unreadEmailCount)?r.e` <div hidden class="red-tag">
            <span>${s.gmailStore.unreadEmailCount>99?"99+":s.gmailStore.unreadEmailCount}</span>
          </div>`:null:"infinity://todos"===t.target&&s.settingStore.setting.notice.todoNumber&&Number(s.todoStore.listLength)?r.e` <div hidden class="red-tag">
            <span>${s.todoStore.listLength>99?"99+":s.todoStore.listLength}</span>
          </div>`:null}render(){const{startMove:t,dragStage:e,dropTargetId:o,mobileDrag:n}=et;if(!this.icon)return;const{bgType:a,bgImage:l,bgColor:c,children:p,bgColorImage:d,id:h,target:u}=this.icon;let g="box-sizing: border-box;background-size: cover;--svg-radius:var(--icon-radius);";g+="background-repeat: no-repeat;background-position: center;border-radius: var(--icon-radius);",g+="display: flex;justify-content: center;align-items: center;",u===J.j.target?(g+=`background-color:${c||J.j.bgColor};`,g+="background-size: 60% 60%;",g+="will-change: transform;",g+=`background-image:url(${Object(ot.d)(l||J.j.bgImage)});`):"image"===a?(g+=`background-color:${c||"transparent"};`,g+=`background-image:url(${Object(ot.d)(l)});`):"color"===a&&d&&(g+=`background-color:${c||"transparent"};`,g+=`background-image:url(${Object(ot.d)(d)});`),s.settingStore.setting.icon.shadow&&(g+="filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.2));"),p&&(g+="padding: var(--mini-icon-padding);background-color: hsla(0, 0%, 78.4%, 0.75);will-change:transform;");let f="visibility: var(--icon-visible);overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: center;margin: auto;margin-top: 8%;max-width: calc(var(--icon-box-width) / var(--icon-col) / 1.5);min-width: calc(var(--icon-font-size) * 3);font-size: var(--icon-font-size);height: calc(var(--icon-font-size) * 1.4);color: var(--icon-font-color);opacity: var(--icon-opacity);";return s.settingStore.setting.font.shadow&&(f+=" text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);"),this.isFolderItem?f+="width: calc(var(--icon-width) * 1.2);":f+="width: calc(var(--icon-width) * 1.5);",r.e`
      <div class="icon-item">
        <section
          class="${Object(G.a)({editing:B.iconEditing,"with-drag":t,mousedown:this.mousedown,"icon-content":!0,"icon-drag":!0,folder:p&&p.length,"folder-item":this.isFolderItem,"weather-item":u===J.j.target,"shake-item":"merge"===e&&h===o,"hover-item":"hover"===e&&h===o,"mobile-drag":n})}"
          data-dragid="${h}"
          style="${g}"
          @contextmenu="${this._rightClick}"
          @mousedown="${this.onMousedown}"
          @touchstart="${this.onTouchStart}"
          @click="${this._clickIcon}"
          flipkey="${this.flipkey}"
        >
          ${"color"!==a||d||u===J.j.target?"":Object(nt.a)(Object(rt.a)(this.icon))}
          ${p?r.e` <div
                class="mini-icon-box"
                style="width: 100%;height: 100%;display:flex;flex-wrap: wrap;align-content: flex-start;"
              >
                ${p.map((t,e)=>{if(e>8)return null;const{bgType:i,bgImage:o,bgColor:n,bgColorImage:a,target:s}=t;let l="position: relative;width:100%;height:100%;opacity:0.8;background-size: cover;background-repeat: no-repeat;background-position: center;";return l+="border-radius: var(--icon-radius);",l+="text-align: center; justify-content: center;align-items: center;",s===J.j.target?(l+=`background-image:url(${Object(ot.d)(o||J.j.bgImage)});`,l+=`background-color:${n||J.j.bgColor};background-size: 60% 60%;`):"image"===i?(l+=`background-color:${n||"transparent"};`,l+=`background-image:url(${Object(ot.d)(o)});`):"color"===i&&(a?(l+=`background-color:${n||"transparent"};`,l+=`background-image:url(${Object(ot.d)(a)});`):l+="overflow:hidden;"),r.e`<div
                    class="mini-icon-padding"
                    style="--svg-radius:var(--icon-radius);position: relative;width:33%;height:33%;box-sizing:border-box;padding:4%;flex-shrink:0;"
                  >
                    <div class="mini-icon" style="${l}">
                      ${"color"!==i||a||s===J.j.target?"":Object(nt.a)(Object(rt.a)(t))}
                    </div>
                    ${this._renderTag(t)}
                  </div>`})}
              </div>`:r.e`
                <div class="op" style="display:none">
                  <div class="edit-icon-box">
                    <img
                      @dragstart="${t=>{t.preventDefault()}}"
                      draggable="false"
                      class="edit-icon"
                      src="${i(638)}"
                      alt=""
                    />
                  </div>
                  <span
                    class="del"
                    @mousedown="${t=>{t.stopPropagation()}}"
                    @touchstart="${t=>{t.stopPropagation()}}"
                    @click="${this._delItem}"
                  >
                    <i-usesvg type="infinity-pro-pure-icon-close"></i-usesvg>
                  </span>
                </div>
                ${this._renderTag(this.icon)}
              `}
        </section>
        <section class="icon-name" style="${f}">${this.icon.name}</section>
      </div>
    `}};at([Object(r.g)({type:Object})],st.prototype,"icon",void 0),at([Object(r.g)({type:Array})],st.prototype,"indexs",void 0),at([Object(r.g)({type:String})],st.prototype,"flipkey",void 0),at([Object(r.g)({type:Boolean})],st.prototype,"mousedown",void 0),at([Object(r.g)({type:Boolean})],st.prototype,"isFolderItem",void 0),at([Object(r.h)(".icon-content")],st.prototype,"$icon",void 0),st=at([Object(r.c)("icon-content")],st);var lt=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ct=class extends a.a{constructor(){super(...arguments),this.icon=null,this.indexs=[],this.flipkey="",this.isFolderItem=!1}static get styles(){return r.b`
      :host {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        will-change: transform;
      }
      .icon {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .hide {
        opacity: 0;
      }
      .icon-holder {
        background-color: red;
      }
    `}render(){return r.e`<div class="icon ${et.startMove&&this.icon.id===et.dragId?"hide":""}">
      <icon-content
        flipkey="${this.flipkey}"
        .isFolderItem=${this.isFolderItem}
        .icon=${this.icon}
        .indexs=${this.indexs}
      ></icon-content>
    </div>`}};lt([Object(r.g)({type:Object})],ct.prototype,"icon",void 0),lt([Object(r.g)({type:Array,hasChanged(t,e){if(t===e)return!1;if(t&&e&&Array.isArray(t)){if(t.every((t,i)=>t===e[i]))return!1}return!0}})],ct.prototype,"indexs",void 0),lt([Object(r.g)({type:String})],ct.prototype,"flipkey",void 0),lt([Object(r.g)({type:Boolean})],ct.prototype,"isFolderItem",void 0),ct=lt([Object(r.c)("icon-box")],ct);var pt=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let dt=class extends a.a{constructor(){super(...arguments),this.flipping=null,this.folderName=""}firstUpdated(){this.$foldername.addEventListener("keydown",t=>{if("Enter"===t.key)return t.stopPropagation(),t.preventDefault(),this.$foldername.blur(),!1}),this.$foldername.addEventListener("blur",t=>{const e=t.target.value;s.siteStore.changeFolderName(B.folderIndexs,e)}),this.flipping=new X({root:this.$iconbox}),this.flipping.read()}update(t){this.flipping&&(B.changeFlipStatus(!0),this.flipping.read()),super.update(t)}updated(){var t;B.folderFlipData&&(this.$mask.animate([{opacity:"0"},{opacity:"1"}],{duration:window.__ANIMATION__.aniFolderBgTime,easing:window.__ANIMATION__.aniFolderBgFn}),this.$body.animate([{opacity:"0",transform:"scale(0.5)"},{opacity:"1",transform:"none"}],{duration:window.__ANIMATION__.aniFolderTime,easing:window.__ANIMATION__.aniFolderFn}),B.changeFolderFlipData(null),this.folderName=null===(t=B.folderItem)||void 0===t?void 0:t.name),this.flipping.play().then(()=>{B.changeFlipStatus(!1)}),B.focusName&&(this.focusName(),B.changeFocusStatus(!1))}close(){this.$foldername.blur(),B.closeFolder()}clickMask(t){t.stopPropagation(),document.querySelector("i-menu").toHide(),this.close()}_renderIcons(){if(!B.folderStatus)return null;const{children:t}=B.folderItem;return t?r.e` ${t.map((t,e)=>r.e`<icon-box
        class="icon-drop"
        data-dropid="${t.id}"
        .icon=${t}
        .isFolderItem=${!0}
        .indexs="${[...B.folderIndexs,e]}"
        flipkey="${t.id}"
      ></icon-box>`)}`:(B.closeFolder(),null)}_changeFolderName(t){const e=t.target.value;e.length>80&&(t.target.value=e.slice(0,80),s.siteStore.changeFolderName(B.folderIndexs,e.slice(0,80))),this.folderName=t.target.value}focusName(){this.shadowRoot.querySelector(".folder-name").focus()}render(){B.folderStatus?this.style.display="":this.style.display="none";const{name:t="",id:e=""}=B.folderItem||{};return r.e`
      <section @click="${this.clickMask}}" @contextmenu="${c.a.stopShowMenu}" class="mask"></section>
      <section class="icon-folder">
        <div class="name-box">
          <span class="folder-name-holder">${this.folderName}</span>
          <input type="text" @input="${this._changeFolderName}" class="folder-name" .value="${t}" />
        </div>
        <div class="icon-box-wrap" flipkey="${e}">
          <div
            style="
            margin: 10px 0;
            box-sizing: border-box;
            padding: calc(var(--icon-width) * 0.283);
            min-height: 100px;
            max-height: calc(100vh - 250px);
            "
            class="global-scrollbar"
          >
            <div class="icon-box icon-drop" data-dropid="end">${this._renderIcons()}</div>
          </div>
        </div>
      </section>
    `}};dt.styles=[S.a,r.b`
      :host {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .mask {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
      }
      .icon-folder {
        margin-top: -3.5%;
        z-index: 2;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
      .name-box {
        position: relative;
        text-align: center;
        margin-bottom: 20px;
        pointer-events: all;
        min-height: 36px;
        box-sizing: border-box;
        height: calc(2.8vmin + 24px);
      }
      .folder-name-holder {
        opacity: 0;
        display: inline-block;
        min-width: 100px;
        max-width: 1000px;
        font-size: 2.8vmin;
        padding: 12px 40px;
        min-height: 36px;
        box-sizing: border-box;
        height: calc(2.8vmin + 24px);
        min-height: 36px;
        line-height: 1;
        word-break: keep-all;
        white-space: pre-wrap;
      }
      .folder-name {
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        font-size: 2.8vmin;
        padding: 12px 10px;
        color: rgb(255, 255, 255);
        background: transparent;
        border-radius: 4px;
        border: none;
        outline: none;
        line-height: 1;
        text-align: center;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-property: background-color;
        color: var(--icon-font-color);
      }
      .folder-name:hover {
        background-color: hsla(0, 0%, 78.4%, 0.2);
      }
      .folder-name:focus {
        outline: none;
        border: none;
        background-color: hsla(0, 0%, 78.4%, 0.2);
      }
      .icon-box-wrap {
        min-width: 400px;
        max-width: 80vw;
        width: calc(var(--icon-box-width) * 0.8);
        border-radius: 4px;
        background-color: hsla(0, 0%, 78.4%, 0.75);
        pointer-events: all;
        box-shadow: 0 calc(var(--main-ratio) * 2px) calc(var(--main-ratio) * 4px) rgba(0, 0, 0, 0.2);
      }
      .icon-box icon-box {
        height: calc(var(--icon-one-height) * 0.8);
      }
      .icon-box {
        display: grid;
        grid-template-columns: repeat(var(--icon-col), calc(100% / var(--icon-col)));
        row-gap: 20px;

        align-items: center;
        justify-items: center;
      }
    `],pt([Object(r.h)(".mask")],dt.prototype,"$mask",void 0),pt([Object(r.h)(".icon-folder")],dt.prototype,"$body",void 0),pt([Object(r.h)(".icon-box")],dt.prototype,"$iconbox",void 0),pt([Object(r.h)(".folder-name")],dt.prototype,"$foldername",void 0),pt([Object(r.f)()],dt.prototype,"folderName",void 0),dt=pt([Object(r.c)("icon-folder")],dt);i(44);var ht=r.b`[hidden] {
  display: none !important;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
button,
input {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  line-height: 1;
}
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}
button {
  cursor: pointer;
}
.show-up {
  z-index: 11;
}
.newtab-search {
  width: var(--search-width);
  min-width: 200px;
  max-width: 80vw;
  min-height: 50px;
  margin-bottom: var(--search-margin-bottom);
}
.minimode.newtab-search {
  margin-bottom: 0;
}
.search-type {
  display: flex;
  flex-direction: row;
  margin-bottom: calc(var(--search-height) * 0.388);
  margin-left: calc(var(--search-height) * 0.273);
}
.search-type-item {
  font-weight: 300;
  font-size: calc(var(--search-height) * 0.288);
  margin-right: calc(var(--search-height) * 0.91);
  color: var(--icon-font-color);
  opacity: 0.5;
  cursor: pointer;
  transition-property: color, text-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}
.search-type-item:hover {
  opacity: 0.75;
}
.search-type-item.active {
  opacity: 1;
}
.search-card {
  position: relative;
  height: var(--search-height);
  min-height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  border-radius: calc(var(--search-height) * var(--search-radius));
  opacity: var(--search-opacity);
}
.search-card.shadow {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.search-card:focus-within {
  opacity: 1;
}
.search-card-engine {
  width: calc(var(--search-height) * 1.091);
  min-width: 22px;
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #cccccc;
  border-radius: 0;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-property: background-color;
}
.search-card-engine:hover {
  background-color: #eee;
}
.search-card-engine .search-icon-img,
.search-card-engine .search-icon {
  width: calc(var(--search-height) * 0.485);
  height: calc(var(--search-height) * 0.485);
  margin-right: calc(var(--search-height) * 0.1);
  object-fit: cover;
}
.search-card-engine .search-icon {
  margin-bottom: 0;
}
.icon-down {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 4px 0;
  transform: scale(var(--search-ratio));
  border-color: #cccccc transparent transparent transparent;
}
.search-input-box {
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  position: relative;
  display: flex;
}
.search-card-input {
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0;
  font-weight: 300;
  padding-left: calc(var(--search-height) * 0.155);
  padding-right: 2.5em;
  font-size: calc(var(--search-height) * 0.304);
  color: #333;
}
.search-card-input:not(:placeholder-shown) + .search-input-clear {
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
}
.search-card-input::placeholder {
  color: #999;
  font-size: calc(var(--search-height) * 0.304);
  font-weight: 300;
}
.search-input-clear {
  font-size: calc(var(--search-height) * 0.304);
  position: absolute;
  right: 1.5em;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  height: 1em;
  width: 1em;
  opacity: 0;
  pointer-events: none;
  transition: color 0.2s, opacity 0.2s;
}
.search-input-clear:hover {
  color: #333;
}
.search-card-btn {
  position: relative;
  width: calc(var(--search-height) * 1.136);
  min-width: 20px;
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: var(--search-btn-bgcolor);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-search {
  width: calc(var(--search-height) * 0.454);
  height: calc(var(--search-height) * 0.454);
}
.shortcut-list {
  position: absolute;
  margin-top: calc(var(--search-height) * 0.155);
  width: var(--search-width);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: calc(var(--search-height) * var(--search-radius));
  background-color: #fff;
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: ease;
}
.shortcut-list.hide {
  height: 0;
  opacity: 0;
  pointer-events: none;
}
.shortcut-list.show {
  height: auto;
  opacity: 1;
  pointer-events: auto;
}
.search-icon {
  width: calc(var(--search-height) * 0.543);
  height: calc(var(--search-height) * 0.543);
  margin-bottom: calc(var(--search-height) * 0.18);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.search-icon .bg-text {
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
}
.drag-fake-wrapper {
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
}
.drag-fake-wrapper.hide {
  display: none !important;
}
.has-drag .force-default {
  opacity: 0.4;
}
.has-drag .del-shortcut {
  display: none !important;
}
.shortcut-item {
  position: relative;
  width: calc(100% / 6);
  min-height: 40px;
  padding: calc(var(--search-height) * 0.31) 4px calc(var(--search-height) * 0.22);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  overflow: hidden;
  cursor: pointer;
}
.shortcut-item:hover {
  background-color: #f3f3f3;
}
.shortcut-item:hover .del-shortcut:not(.hide) {
  display: block;
}
.shortcut-item.fake .del-shortcut {
  display: none !important;
}
.shortcut-item.dragd {
  opacity: 0.7;
}
.shortcut-item img {
  width: calc(var(--search-height) * 0.543);
  height: calc(var(--search-height) * 0.543);
  margin-bottom: calc(var(--search-height) * 0.18);
  object-fit: cover;
}
.shortcut-item .name {
  width: 100%;
  color: #5c5c5c;
  font-size: calc(var(--search-height) * 0.233);
  font-weight: 200;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
.shortcut-item i-usesvg {
  color: #5c5c5c;
  width: calc(var(--search-height) * 0.543);
  height: calc(var(--search-height) * 0.543);
  transform: scale(0.6);
}
.del-shortcut {
  position: absolute;
  top: calc(var(--search-height) * -0.528);
  right: calc(var(--search-height) * -0.528);
  width: calc(var(--search-height) * 1.057);
  height: calc(var(--search-height) * 1.057);
  border-radius: 50%;
  background-color: #fff;
  background: rgba(0, 0, 0, 0.04);
  display: none;
}
.del-shortcut i-usesvg {
  color: #b6b6b6;
  position: absolute;
  width: calc(var(--search-height) * 0.317);
  height: calc(var(--search-height) * 0.317);
  left: calc(var(--search-height) * 0.176);
  bottom: calc(var(--search-height) * 0.176);
}
.search-suggest {
  position: absolute;
  margin-top: calc(var(--search-height) * 0.155);
  min-width: 200px;
  max-width: 80vw;
  width: var(--search-width);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
}
.search-suggest.hide {
  height: 0;
  opacity: 0;
  pointer-events: none;
}
.search-suggest.show {
  height: auto;
  opacity: 1;
  pointer-events: auto;
}
.suggest-item {
  height: calc(var(--search-height) * 0.705);
  min-height: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
  cursor: pointer;
  font-size: calc(var(--search-height) * 0.247);
  color: #666;
  box-sizing: border-box;
}
.suggest-item .icon-box {
  width: calc(var(--search-height) * 1.234);
  min-width: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.suggest-item .icon-box .search-icon {
  width: calc(var(--search-height) * 0.423);
  height: calc(var(--search-height) * 0.423);
  border-radius: 50%;
  margin-bottom: 0;
}
.suggest-item .icon-box .search-icon-img {
  width: calc(var(--search-height) * 0.423);
  height: calc(var(--search-height) * 0.423);
  border-radius: 50%;
}
.suggest-item .name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 10px;
}
.suggest-item .name.add {
  color: #ff4e50;
}
.suggest-item:hover,
.suggest-item.active {
  background-color: #e6e6e6;
}
.suggest-tips {
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
}
.suggest-tips.hide {
  display: none;
}
.suggest-tips:focus {
  outline: none;
  border: none;
}
.suggest-tips-title {
  height: 26px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  line-height: 26px;
}
.suggest-tips-body {
  margin-top: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #656565;
  line-height: 20px;
}
.sugges-btns {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 4px;
}
.sugges-btns .btn {
  margin-left: 14px;
  widows: 100px;
}
`,ut=i(81),gt=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ft=class extends r.a{constructor(){super(...arguments),this.zIndex=11,this.show=!1,this.box=null}clickModal(t){if(t.composedPath()[0]===this.box){const t=new CustomEvent("close",{detail:{message:""}});this.dispatchEvent(t)}}firstUpdated(){this.box=this.shadowRoot.querySelector(".i-mask")}render(){return r.e`
      <div
        @contextmenu="${c.a.stopShowMenu}"
        class="i-mask ${this.show?"show":"hide"}"
        @click="${this.clickModal}"
        style="z-index:${this.zIndex}"
      >
        <slot></slot>
      </div>
    `}};ft.styles=r.b`
    .i-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      transition-property: opacity;
      transition-duration: 300ms;
      transition-timing-function: ease;
    }
    .hide {
      opacity: 0;
      pointer-events: none;
    }
    .show {
      opacity: 1;
      pointer-events: auto;
    }
  `,gt([Object(r.g)({type:Number})],ft.prototype,"zIndex",void 0),gt([Object(r.g)({type:Boolean})],ft.prototype,"show",void 0),ft=gt([Object(r.c)("i-mask")],ft);var mt=i(376),bt=function(t,e){return(bt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function yt(t,e){function i(){this.constructor=t}bt(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}function vt(t){return"function"==typeof t}var wt=!1,xt={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;wt=t},get useDeprecatedSynchronousErrorHandling(){return wt}};function kt(t){setTimeout((function(){throw t}),0)}var _t={closed:!0,next:function(t){},error:function(t){if(xt.useDeprecatedSynchronousErrorHandling)throw t;kt(t)},complete:function(){}},Ot=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function St(t){return null!==t&&"object"==typeof t}var jt=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),$t=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var i=this._parentOrParents,o=this._ctorUnsubscribe,n=this._unsubscribe,r=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,i instanceof t)i.remove(this);else if(null!==i)for(var a=0;a<i.length;++a){i[a].remove(this)}if(vt(n)){o&&(this._unsubscribe=void 0);try{n.call(this)}catch(t){e=t instanceof jt?It(t.errors):[t]}}if(Ot(r)){a=-1;for(var s=r.length;++a<s;){var l=r[a];if(St(l))try{l.unsubscribe()}catch(t){e=e||[],t instanceof jt?e=e.concat(It(t.errors)):e.push(t)}}}if(e)throw new jt(e)}},t.prototype.add=function(e){var i=e;if(!e)return t.EMPTY;switch(typeof e){case"function":i=new t(e);case"object":if(i===this||i.closed||"function"!=typeof i.unsubscribe)return i;if(this.closed)return i.unsubscribe(),i;if(!(i instanceof t)){var o=i;(i=new t)._subscriptions=[o]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var n=i._parentOrParents;if(null===n)i._parentOrParents=this;else if(n instanceof t){if(n===this)return i;i._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return i;n.push(this)}var r=this._subscriptions;return null===r?this._subscriptions=[i]:r.push(i),i},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function It(t){return t.reduce((function(t,e){return t.concat(e instanceof jt?e.errors:e)}),[])}var Ct=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Tt=function(t){function e(i,o,n){var r=t.call(this)||this;switch(r.syncErrorValue=null,r.syncErrorThrown=!1,r.syncErrorThrowable=!1,r.isStopped=!1,arguments.length){case 0:r.destination=_t;break;case 1:if(!i){r.destination=_t;break}if("object"==typeof i){i instanceof e?(r.syncErrorThrowable=i.syncErrorThrowable,r.destination=i,i.add(r)):(r.syncErrorThrowable=!0,r.destination=new Et(r,i));break}default:r.syncErrorThrowable=!0,r.destination=new Et(r,i,o,n)}return r}return yt(e,t),e.prototype[Ct]=function(){return this},e.create=function(t,i,o){var n=new e(t,i,o);return n.syncErrorThrowable=!1,n},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}($t),Et=function(t){function e(e,i,o,n){var r,a=t.call(this)||this;a._parentSubscriber=e;var s=a;return vt(i)?r=i:i&&(r=i.next,o=i.error,n=i.complete,i!==_t&&(vt((s=Object.create(i)).unsubscribe)&&a.add(s.unsubscribe.bind(s)),s.unsubscribe=a.unsubscribe.bind(a))),a._context=s,a._next=r,a._error=o,a._complete=n,a}return yt(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;xt.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,i=xt.useDeprecatedSynchronousErrorHandling;if(this._error)i&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)i?(e.syncErrorValue=t,e.syncErrorThrown=!0):kt(t),this.unsubscribe();else{if(this.unsubscribe(),i)throw t;kt(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var i=function(){return t._complete.call(t._context)};xt.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,i),this.unsubscribe()):(this.__tryOrUnsub(i),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),xt.useDeprecatedSynchronousErrorHandling)throw t;kt(t)}},e.prototype.__tryOrSetError=function(t,e,i){if(!xt.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,i)}catch(e){return xt.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(kt(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(Tt);var Lt=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Pt(t){return t}function Rt(t){return 0===t.length?Pt:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var Dt=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var i=new t;return i.source=this,i.operator=e,i},t.prototype.subscribe=function(t,e,i){var o=this.operator,n=function(t,e,i){if(t){if(t instanceof Tt)return t;if(t[Ct])return t[Ct]()}return t||e||i?new Tt(t,e,i):new Tt(_t)}(t,e,i);if(o?n.add(o.call(n,this.source)):n.add(this.source||xt.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),xt.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){xt.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,i=e.closed,o=e.destination,n=e.isStopped;if(i||n)return!1;t=o&&o instanceof Tt?o:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var i=this;return new(e=At(e))((function(e,o){var n;n=i.subscribe((function(e){try{t(e)}catch(t){o(t),n&&n.unsubscribe()}}),o,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[Lt]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:Rt(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=At(t))((function(t,i){var o;e.subscribe((function(t){return o=t}),(function(t){return i(t)}),(function(){return t(o)}))}))},t.create=function(e){return new t(e)},t}();function At(t){if(t||(t=xt.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function Mt(t,e){return function(i){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return i.lift(new Nt(t,e))}}var Nt=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new zt(t,this.project,this.thisArg))},t}(),zt=function(t){function e(e,i,o){var n=t.call(this,e)||this;return n.project=i,n.count=0,n.thisArg=o||n,n}return yt(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(Tt);function Bt(t,e,i,o){return vt(i)&&(o=i,i=void 0),o?Bt(t,e,i).pipe(Mt((function(t){return Ot(t)?o.apply(void 0,t):o(t)}))):new Dt((function(o){!function t(e,i,o,n,r){var a;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var s=e;e.addEventListener(i,o,r),a=function(){return s.removeEventListener(i,o,r)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var l=e;e.on(i,o),a=function(){return l.off(i,o)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var c=e;e.addListener(i,o),a=function(){return c.removeListener(i,o)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var p=0,d=e.length;p<d;p++)t(e[p],i,o,n,r)}n.add(a)}(t,e,(function(t){arguments.length>1?o.next(Array.prototype.slice.call(arguments)):o.next(t)}),o,i)}))}function Ut(t){return t&&"function"==typeof t.schedule}var Ft=function(t){return function(e){for(var i=0,o=t.length;i<o&&!e.closed;i++)e.next(t[i]);e.complete()}};function Wt(t,e){return new Dt((function(i){var o=new $t,n=0;return o.add(e.schedule((function(){n!==t.length?(i.next(t[n++]),i.closed||o.add(this.schedule())):i.complete()}))),o}))}function Ht(t,e){return e?Wt(t,e):new Dt(Ft(t))}function qt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=t[t.length-1];return Ut(i)?(t.pop(),Wt(t,i)):Ht(t)}function Vt(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var Yt=Vt(),Xt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Gt(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var Kt=function(t){if(t&&"function"==typeof t[Lt])return o=t,function(t){var e=o[Lt]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(Xt(t))return Ft(t);if(Gt(t))return i=t,function(t){return i.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,kt),t};if(t&&"function"==typeof t[Yt])return e=t,function(t){for(var i=e[Yt]();;){var o=void 0;try{o=i.next()}catch(e){return t.error(e),t}if(o.done){t.complete();break}if(t.next(o.value),t.closed)break}return"function"==typeof i.return&&t.add((function(){i.return&&i.return()})),t};var e,i,o,n=St(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+n+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Qt(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[Lt]}(t))return function(t,e){return new Dt((function(i){var o=new $t;return o.add(e.schedule((function(){var n=t[Lt]();o.add(n.subscribe({next:function(t){o.add(e.schedule((function(){return i.next(t)})))},error:function(t){o.add(e.schedule((function(){return i.error(t)})))},complete:function(){o.add(e.schedule((function(){return i.complete()})))}}))}))),o}))}(t,e);if(Gt(t))return function(t,e){return new Dt((function(i){var o=new $t;return o.add(e.schedule((function(){return t.then((function(t){o.add(e.schedule((function(){i.next(t),o.add(e.schedule((function(){return i.complete()})))})))}),(function(t){o.add(e.schedule((function(){return i.error(t)})))}))}))),o}))}(t,e);if(Xt(t))return Wt(t,e);if(function(t){return t&&"function"==typeof t[Yt]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new Dt((function(i){var o,n=new $t;return n.add((function(){o&&"function"==typeof o.return&&o.return()})),n.add(e.schedule((function(){o=t[Yt](),n.add(e.schedule((function(){if(!i.closed){var t,e;try{var n=o.next();t=n.value,e=n.done}catch(t){return void i.error(t)}e?i.complete():(i.next(t),this.schedule())}})))}))),n}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function Jt(t,e){return e?Qt(t,e):t instanceof Dt?t:new Dt(Kt(t))}var Zt=function(t){function e(e){var i=t.call(this)||this;return i.parent=e,i}return yt(e,t),e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(Tt),te=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return yt(e,t),e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(Tt);function ee(t,e){if(!e.closed){if(t instanceof Dt)return t.subscribe(e);var i;try{i=Kt(t)(e)}catch(t){e.error(t)}return i}}function ie(t,e,i){return void 0===i&&(i=Number.POSITIVE_INFINITY),"function"==typeof e?function(o){return o.pipe(ie((function(i,o){return Jt(t(i,o)).pipe(Mt((function(t,n){return e(i,t,o,n)})))}),i))}:("number"==typeof e&&(i=e),function(e){return e.lift(new oe(t,i))})}var oe=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new ne(t,this.project,this.concurrent))},t}(),ne=function(t){function e(e,i,o){void 0===o&&(o=Number.POSITIVE_INFINITY);var n=t.call(this,e)||this;return n.project=i,n.concurrent=o,n.hasCompleted=!1,n.buffer=[],n.active=0,n.index=0,n}return yt(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,i=this.index++;try{e=this.project(t,i)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e)},e.prototype._innerSub=function(t){var e=new Zt(this),i=this.destination;i.add(e);var o=ee(t,e);o!==e&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(te);function re(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),ie(Pt,t)}function ae(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=Number.POSITIVE_INFINITY,o=null,n=t[t.length-1];return Ut(n)?(o=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(i=t.pop())):"number"==typeof n&&(i=t.pop()),null===o&&1===t.length&&t[0]instanceof Dt?t[0]:re(i)(Ht(t,o))}var se=function(t){function e(e,i){var o=t.call(this,e,i)||this;return o.scheduler=e,o.work=i,o.pending=!1,o}return yt(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var i=this.id,o=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(o,this.id,e),this},e.prototype.requestAsyncId=function(t,e,i){return void 0===i&&(i=0),setInterval(t.flush.bind(t,this),i)},e.prototype.recycleAsyncId=function(t,e,i){if(void 0===i&&(i=0),null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var i=!1,o=void 0;try{this.work(t)}catch(t){i=!0,o=!!t&&t||new Error(t)}if(i)return this.unsubscribe(),o},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,i=e.actions,o=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&i.splice(o,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,i){return t.call(this)||this}return yt(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}($t)),le=function(t){function e(e,i){var o=t.call(this,e,i)||this;return o.scheduler=e,o.work=i,o}return yt(e,t),e.prototype.requestAsyncId=function(e,i,o){return void 0===o&&(o=0),null!==o&&o>0?t.prototype.requestAsyncId.call(this,e,i,o):(e.actions.push(this),e.scheduled||(e.scheduled=requestAnimationFrame((function(){return e.flush(null)}))))},e.prototype.recycleAsyncId=function(e,i,o){if(void 0===o&&(o=0),null!==o&&o>0||null===o&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,i,o);0===e.actions.length&&(cancelAnimationFrame(i),e.scheduled=void 0)},e}(se),ce=function(){function t(e,i){void 0===i&&(i=t.now),this.SchedulerAction=e,this.now=i}return t.prototype.schedule=function(t,e,i){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(i,e)},t.now=function(){return Date.now()},t}(),pe=function(t){function e(i,o){void 0===o&&(o=ce.now);var n=t.call(this,i,(function(){return e.delegate&&e.delegate!==n?e.delegate.now():o()}))||this;return n.actions=[],n.active=!1,n.scheduled=void 0,n}return yt(e,t),e.prototype.schedule=function(i,o,n){return void 0===o&&(o=0),e.delegate&&e.delegate!==this?e.delegate.schedule(i,o,n):t.prototype.schedule.call(this,i,o,n)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}},e}(ce),de=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return yt(e,t),e.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,i=this.actions,o=-1,n=i.length;t=t||i.shift();do{if(e=t.execute(t.state,t.delay))break}while(++o<n&&(t=i.shift()));if(this.active=!1,e){for(;++o<n&&(t=i.shift());)t.unsubscribe();throw e}},e}(pe))(le);function he(t,e){return function(i){return i.lift(new ue(t,e))}}var ue=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new ge(t,this.predicate,this.thisArg))},t}(),ge=function(t){function e(e,i,o){var n=t.call(this,e)||this;return n.predicate=i,n.thisArg=o,n.count=0,n}return yt(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(Tt);function fe(t,e){return"function"==typeof e?function(i){return i.pipe(fe((function(i,o){return Jt(t(i,o)).pipe(Mt((function(t,n){return e(i,t,o,n)})))})))}:function(e){return e.lift(new me(t))}}var me=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new be(t,this.project))},t}(),be=function(t){function e(e,i){var o=t.call(this,e)||this;return o.project=i,o.index=0,o}return yt(e,t),e.prototype._next=function(t){var e,i=this.index++;try{e=this.project(t,i)}catch(t){return void this.destination.error(t)}this._innerSub(e)},e.prototype._innerSub=function(t){var e=this.innerSubscription;e&&e.unsubscribe();var i=new Zt(this),o=this.destination;o.add(i),this.innerSubscription=ee(t,i),this.innerSubscription!==i&&o.add(this.innerSubscription)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=void 0},e.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t){this.destination.next(t)},e}(te);function ye(t){return function(e){return e.lift(new ve(t))}}var ve=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var i=new we(t),o=ee(this.notifier,new Zt(i));return o&&!i.seenValue?(i.add(o),e.subscribe(i)):i},t}(),we=function(t){function e(e){var i=t.call(this,e)||this;return i.seenValue=!1,i}return yt(e,t),e.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(te),xe=new pe(se),ke={leading:!0,trailing:!1};function _e(t,e,i){return void 0===e&&(e=xe),void 0===i&&(i=ke),function(o){return o.lift(new Oe(t,e,i.leading,i.trailing))}}var Oe=function(){function t(t,e,i,o){this.duration=t,this.scheduler=e,this.leading=i,this.trailing=o}return t.prototype.call=function(t,e){return e.subscribe(new Se(t,this.duration,this.scheduler,this.leading,this.trailing))},t}(),Se=function(t){function e(e,i,o,n,r){var a=t.call(this,e)||this;return a.duration=i,a.scheduler=o,a.leading=n,a.trailing=r,a._hasTrailingValue=!1,a._trailingValue=null,a}return yt(e,t),e.prototype._next=function(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(je,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))},e.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},e.prototype.clearThrottle=function(){var t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)},e}(Tt);function je(t){t.subscriber.clearThrottle()}var $e=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}(),Ie=new Dt((function(t){return t.complete()}));function Ce(t){return t?function(t){return new Dt((function(e){return t.schedule((function(){return e.complete()}))}))}(t):Ie}function Te(t){return function(e){return 0===t?Ce():e.lift(new Ee(t))}}var Ee=function(){function t(t){if(this.total=t,this.total<0)throw new $e}return t.prototype.call=function(t,e){return e.subscribe(new Le(t,this.total))},t}(),Le=function(t){function e(e,i){var o=t.call(this,e)||this;return o.total=i,o.count=0,o}return yt(e,t),e.prototype._next=function(t){var e=this.total,i=++this.count;i<=e&&(this.destination.next(t),i===e&&(this.destination.complete(),this.unsubscribe()))},e}(Tt);const Pe=(t,e,i)=>{var o;for(let n=0;n<t.length;n++){const r=t[n];if(null===(o=r.matches)||void 0===o?void 0:o.call(r,e))return r;if(r===i)return null}return null},Re=(t,e,i,o)=>{let n=t,r=9;for(;n&&r&&(r--,!(n instanceof Document))&&!(n instanceof ShadowRoot);)n=n.parentNode;return((t,e)=>{var i,o;let n=9;if(null===(i=null==t?void 0:t.matches)||void 0===i?void 0:i.call(t,e))return t;for(;n&&t;)if(n--,null===(o=null==(t=t.parentElement)?void 0:t.matches)||void 0===o?void 0:o.call(t,e))return t;return null})(n.elementFromPoint(i,o),e)},De=t=>{t.stopPropagation(),window.removeEventListener("click",De,!0)},Ae=()=>{window.addEventListener("click",De,!0),setTimeout(()=>{document.body.click()},0)},Me=(t,e)=>Math.max(Math.abs(t.x-e.x),Math.abs(t.y-e.y));class Ne{constructor(t){this.dragElement=null,this.startMove=!1,this.option=t,this.init()}init(){const{dragRoot:t,dragSelector:e,dropRoot:i=document.body,dropSelector:o="",dropLine:n=null,dropPointShadowRoot:r,moveDistanceLimit:a=4}=this.option;this.option.dropPointShadowRoot=r||i;const s=Bt(document,"mouseup"),l=Bt(document,"mousemove"),c=Bt(t,"mousedown").pipe(Mt(t=>{const e=t.composedPath();return{event:t,path:e}})).pipe(Mt(({event:i,path:o})=>({event:i,dragElement:Pe(o,e,t)})),he(({dragElement:t,event:e})=>{if(0===e.button&&null!==t)return!0}),Mt(({event:t,dragElement:e})=>{const i={type:"dragStart",payload:{x:t.clientX,y:t.clientY,dragElement:e}};return this.dragElement=e,this.startMove=!1,i})).pipe(fe(t=>qt(t,Object.assign(Object.assign({},t),{fork:"forDrop"}),Object.assign(Object.assign({},t),{fork:"forMove"}))),ie(t=>{if("forMove"===t.fork)return ae(l.pipe(ye(s),_e(0,de),Mt(e=>{if(!this.startMove){Me(t.payload,{x:e.clientX,y:e.clientY})>a&&(this.startMove=!0)}return{type:"dragMove",payload:{x:e.clientX,y:e.clientY,startMove:this.startMove,dragElement:this.dragElement}}})),s.pipe(Mt(t=>{const e={type:"dragEnd",payload:{x:t.clientX,y:t.clientY,dragElement:this.dragElement,startMove:this.startMove}};return this.startMove&&Ae(),this.dragElement=null,this.startMove=!1,e}),Te(1)));if("forDrop"===t.fork){const{x:e,y:r}=t.payload;return(n?l:Bt(i,"mousemove")).pipe(ye(s),_e(20),Mt(t=>{if(!o)return{event:t,target:document.body};if(n){let i=t.clientX,a=t.clientY;"x"===n?a=r:"y"===n&&(i=e);return{event:t,target:Re(this.option.dropPointShadowRoot,o,i,a)}}{const e=Pe(t.composedPath(),o,i);return{event:t,target:e}}}),he(({target:t})=>!!t),Mt(({target:t,event:e})=>({type:"drop",payload:{x:e.clientX,y:e.clientY,dragElement:this.dragElement,dropElement:t}})))}return qt(t)}));this.drag$=c}subscribe(t){this.subscription&&this.subscription.unsubscribe(),this.subscription=this.drag$.subscribe(t)}updateOption(t){this.option=Object.assign(Object.assign({},this.option),t)}}function ze(t){var e=t.error;t.subscriber.error(e)}var Be;Be||(Be={});var Ue=function(){function t(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}},t.prototype.accept=function(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return qt(this.value);case"E":return t=this.error,new Dt(e?function(i){return e.schedule(ze,0,{error:t,subscriber:i})}:function(e){return e.error(t)});case"C":return Ce()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function Fe(t,e){void 0===e&&(e=xe);var i,o=(i=t)instanceof Date&&!isNaN(+i)?+t-e.now():Math.abs(t);return function(t){return t.lift(new We(o,e))}}var We=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new He(t,this.delay,this.scheduler))},t}(),He=function(t){function e(e,i,o){var n=t.call(this,e)||this;return n.delay=i,n.scheduler=o,n.queue=[],n.active=!1,n.errored=!1,n}return yt(e,t),e.dispatch=function(t){for(var e=t.source,i=e.queue,o=t.scheduler,n=t.destination;i.length>0&&i[0].time-o.now()<=0;)i.shift().notification.observe(n);if(i.length>0){var r=Math.max(0,i[0].time-o.now());this.schedule(t,r)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.destination.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,i=new qe(e.now()+this.delay,t);this.queue.push(i),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(Ue.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.scheduleNotification(Ue.createComplete()),this.unsubscribe()},e}(Tt),qe=function(){return function(t,e){this.time=t,this.notification=e}}();var Ve=function(){function t(t,e,i){void 0===i&&(i=!1),this.accumulator=t,this.seed=e,this.hasSeed=i}return t.prototype.call=function(t,e){return e.subscribe(new Ye(t,this.accumulator,this.seed,this.hasSeed))},t}(),Ye=function(t){function e(e,i,o,n){var r=t.call(this,e)||this;return r.accumulator=i,r._seed=o,r.hasSeed=n,r.index=0,r}return yt(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,i=this.index++;try{e=this.accumulator(this.seed,t,i)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(Tt);function Xe(){}function Ge(t,e,i){return function(o){return o.lift(new Ke(t,e,i))}}var Ke=function(){function t(t,e,i){this.nextOrObserver=t,this.error=e,this.complete=i}return t.prototype.call=function(t,e){return e.subscribe(new Qe(t,this.nextOrObserver,this.error,this.complete))},t}(),Qe=function(t){function e(e,i,o,n){var r=t.call(this,e)||this;return r._tapNext=Xe,r._tapError=Xe,r._tapComplete=Xe,r._tapError=o||Xe,r._tapComplete=n||Xe,vt(i)?(r._context=r,r._tapNext=i):i&&(r._context=i,r._tapNext=i.next||Xe,r._tapError=i.error||Xe,r._tapComplete=i.complete||Xe),r}return yt(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(Tt);class Je{constructor(t){this.dragElement=null,this.touchTarget=null,this.mobileStartDelayLimit=2,this.startMove=!1,this.option=t,this.init()}init(){const{dragRoot:t,dragSelector:e,dropRoot:i,dropSelector:o,dropLine:n=null,dropPointShadowRoot:r,moveDistanceLimit:a=1}=this.option;this.option.dropPointShadowRoot=r||i;const s=Bt(t,"touchstart").pipe(Mt(t=>{const e=t.composedPath();return this.touchTarget=e[0],{event:t,path:e}})).pipe(ie(({event:t,path:e})=>{var i;return qt({event:t,path:e}).pipe(Fe(null!==(i=this.option.mobileStartDelayTime)&&void 0!==i?i:200),ye(ae(Bt(this.touchTarget,"touchmove").pipe(function(t,e){var i=!1;return arguments.length>=2&&(i=!0),function(o){return o.lift(new Ve(t,e,i))}}(t=>t+1,0),he(t=>t>this.mobileStartDelayLimit),Ge(()=>{this.touchTarget=null})),Bt(this.touchTarget,"touchend").pipe(Ge(()=>{this.touchTarget=null})))))}),Mt(({event:i,path:o})=>({event:i,dragElement:Pe(o,e,t)})),he(({dragElement:t})=>this.touchTarget&&null!==t),Mt(({event:t,dragElement:e})=>{const i={type:"dragStart",payload:{x:t.touches[0].clientX,y:t.touches[0].clientY,dragElement:e}};return this.dragElement=e,this.startMove=!1,i})).pipe(fe(t=>qt(t,Object.assign(Object.assign({},t),{fork:"forDrop"}),Object.assign(Object.assign({},t),{fork:"forMove"}))),ie(t=>{if("forMove"===t.fork)return ae(Bt(this.touchTarget,"touchmove").pipe(ye(Bt(this.touchTarget,"touchend")),_e(0,de),Mt(e=>{if(!this.startMove){Me(t.payload,{x:e.touches[0].clientX,y:e.touches[0].clientY})>a&&(this.startMove=!0)}return{type:"dragMove",payload:{x:e.touches[0].clientX,y:e.touches[0].clientY,startMove:this.startMove,dragElement:this.dragElement}}})),Bt(this.touchTarget,"touchend").pipe(Mt(t=>{const e={type:"dragEnd",payload:{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY,dragElement:this.dragElement,startMove:this.startMove}};return this.startMove&&Ae(),this.dragElement=null,this.touchTarget=null,this.startMove=!1,e}),Te(1)));if("forDrop"===t.fork){const{x:e,y:i}=t.payload;return Bt(this.touchTarget,"touchmove").pipe(ye(Bt(this.touchTarget,"touchend")),_e(50),Mt(t=>{if(!o)return{event:t,target:document.body};let r=t.touches[0].clientX,a=t.touches[0].clientY;"x"===n?a=i:"y"===n&&(r=e);return{event:t,target:Re(this.option.dropPointShadowRoot,o,r,a)}}),he(({target:t})=>!!t),Mt(({target:t,event:e})=>({type:"drop",payload:{x:e.touches[0].clientX,y:e.touches[0].clientY,dragElement:this.dragElement,dropElement:t}})))}return qt(t)}));this.drag$=s}subscribe(t){this.subscription&&this.subscription.unsubscribe(),this.subscription=this.drag$.subscribe(t)}updateOption(t){this.option=Object.assign(Object.assign({},this.option),t)}}class Ze{constructor(t){this.pc=new Ne(t),window.TouchEvent&&(this.mobile=new Je(t))}subscribe(t){var e,i;this.mobile&&(null===(e=this.mobile.subscription)||void 0===e||e.unsubscribe(),this.mobile.subscription=this.mobile.drag$.subscribe(t)),this.pc&&(null===(i=this.pc.subscription)||void 0===i||i.unsubscribe(),this.pc.subscription=this.pc.drag$.subscribe(t))}updateOption(t){var e,i;null===(e=this.mobile)||void 0===e||e.updateOption(t),null===(i=this.pc)||void 0===i||i.updateOption(t)}}var ti=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ei=class extends a.a{constructor(){super(...arguments),this.activeType=0,this.shortcutListStatus=!1,this.suggestList=[],this.suggesStatus=!1,this.suggesTipsStatus=!1,this.dragId=null,this.dragMoved=!1,this.dragFakeDom=null,this.suggestActiveIndex=null,this.dragOffsetX=0,this.dragOffsetY=0,this.focusElement=null,this.input=null,this.flipping=!1,this.oraginValue="",this.baseUrl="",this.initDrag=()=>{new Ze({dragRoot:this.dragWrapper,dragSelector:".shortcut-drag",dropRoot:this.dragWrapper,dropSelector:".shortcut-drop",mobileStartDelayTime:0}).subscribe(t=>{switch(t.type){case"dragStart":document.querySelector("i-menu").toHide(),this.dragStart(t.payload);break;case"dragMove":this.dragMove(t.payload);break;case"dragEnd":this.dragEnd();break;case"drop":this.dragDrop(t.payload)}})},this.dragStart=({x:t,y:e,dragElement:i})=>{this.dragMoved=!1;const{left:o,top:n,width:r,height:a}=i.getBoundingClientRect();this.dragOffsetX=t-o,this.dragOffsetY=e-n,this.dragFakeDom=i.cloneNode(!0),this.dragFakeDom.style.position="fixed",this.dragFakeDom.style.top="-999px",this.dragFakeDom.style.left="-999px",this.dragFakeDom.style.width=r+"px",this.dragFakeDom.style.height=a+"px",this.dragFakeDom.classList.add("fake"),this.dragId=this.dragFakeDom.dataset.uuid,this.dragFakeWrapper.appendChild(this.dragFakeDom)},this.dragMove=({x:t,y:e,startMove:i})=>{const o=t-this.dragOffsetX,n=e-this.dragOffsetY;!this.dragMoved&&i?this.dragMoved=!0:i&&(this.dragFakeDom.style.left=o+"px",this.dragFakeDom.style.top=n+"px")},this.dragDrop=({dropElement:t})=>{if(this.flipping)return;const e=this.dragFakeDom.dataset.uuid,i=t.dataset.uuid;s.searchStore.sortShortcut(e,i)},this.dragEnd=()=>{this.dragMoved=!1,this.dragFakeDom&&(this.dragFakeWrapper.removeChild(this.dragFakeDom),this.dragFakeDom=null,this.dragId=null)},this.handleClick=t=>{s.searchStore.setActive(t),this.activeType=0,this.shortcutListStatus=!1},this.closeSugges=()=>{setTimeout(()=>{this.suggesStatus=!1,this.focusElement||(this.suggesTipsStatus=!1)},0)},this._renderShortcutList=t=>r.e`<ul
      @contextmenu="${c.a.stopShowMenu}"
      data-uuid="all"
      class="shortcut-list shortcut-drop show-up ${this.dragMoved?"has-drag":""} ${this.shortcutListStatus?"show":"hide"}"
    >
      ${t.map((t,e)=>{if(!t)return null;let i=t.noDel;return 0===e&&(i=!0),r.e`<li
          class="shortcut-item shortcut-drop ${0===e?"force-default":""} ${this.dragId===t.uuid?"dragd":""}"
          data-uuid="${t.uuid}"
          flipkey="${t.uuid}"
          @click="${()=>{this.handleClick(e)}}"
        >
          ${Object(nt.a)(Object(mt.a)(t,!0,0!==e))}
          <span class="name">${t.name}</span>
          <div
            class="del-shortcut ${i?"hide":""}"
            @click="${e=>{e.stopPropagation(),this.delShortcutList(t.uuid)}}"
          >
            <i-usesvg type="infinity-pro-pure-icon-dustbin"></i-usesvg>
          </div>
        </li>`})}
      ${r.e`<li
        @click="${()=>{s.userStore.isLogin||!l.r?s.pluginStore.show("search"):s.userStore.toggleLoginTipModal()}}"
        class="shortcut-item"
        flipkey="add-btn"
      >
        <i-usesvg type="infinity-pro-pure-icon-plus"></i-usesvg>
        <span class="name">${Object(Q.i18n)("add")}</span>
      </li>`}
    </ul>`,this._renderSuggestList=()=>r.e`<ul
      @contextmenu="${c.a.stopShowMenu}"
      class="search-suggest show-up ${this.suggesStatus?"show":"hide"}"
    >
      ${this.suggestList.map((t,e)=>r.e`<li
          @mousedown="${e=>{if(0!==e.button)return e.stopPropagation(),void e.preventDefault();let i="",o="";t.types?i=t.types[0].url:t.target?i=t.target:o=t.text,t.text&&(this.input.value=t.text),this.toSearch(i,o,e)}}"
          class="suggest-item ${this.suggestActiveIndex===e?"active":""}"
        >
          ${t.uuid?r.e`<div class="icon-box">${Object(nt.a)(Object(mt.a)(t))}</div>
                <span class="name add">${Object(Q.i18n)("search_from",t.name)}</span>`:r.e`<div class="icon-box"></div>
                <span class="name">${t.text}</span>`}
        </li>`)}
    </ul>`,this._renderSuggestTips=()=>r.e`<ul
      @contextmenu="${c.a.stopShowMenu}"
      tabindex="0"
      @focus="${t=>{this.focusElement=t.target}}"
      @blur="${()=>{this.focusElement=null,this.closeSugges()}}"
      class="search-suggest suggest-tips show-up ${this.suggesTipsStatus?"show":"hide"}"
    >
      <div class="suggest-tips-title">${Object(Q.i18n)("search_suggest")}</div>
      <div class="suggest-tips-body">${Object(Q.i18n)("permission_serch_suggest_content")}</div>
      <div class="sugges-btns">
        <infinito-button class="btn" @mousedown="${this.closeSuggestTips}">${Object(Q.i18n)("ignore")}</infinito-button>
        <infinito-button primary class="btn" @mousedown="${this.openSearchSuggest}"
          >${Object(Q.i18n)("permission")}</infinito-button
        >
      </div>
    </ul>`}static get styles(){return[ht]}async firstUpdated(){this.input=this.shadowRoot.querySelector(".search-card-input"),(l.h||l.r)&&this.input.focus(),this.initDrag(),this.flip=new X({root:this.dragWrapper}),this.flip.read(),this.addEventListener("keydown",t=>{if("ArrowUp"===t.key)return t.preventDefault(),t.stopPropagation(),this.changeSuggesIndex("up"),!1;"ArrowDown"===t.key&&this.changeSuggesIndex("down")}),this.addEventListener("dragstart",t=>{t.preventDefault(),t.stopPropagation()}),document.querySelector("#fake_focus").addEventListener("focus",()=>{var t;null===(t=this.input)||void 0===t||t.focus()})}update(t){this.flip&&this.flip.read(),super.update(t)}updated(){0===s.pluginStore.pluginViews.length&&(this.flipping=!0,this.flip.play({props:["position"]}).then(()=>{this.flipping=!1}))}changeSuggesIndex(t){null===this.suggestActiveIndex&&(this.oraginValue=this.input.value),"up"===t?null===this.suggestActiveIndex?this.suggestActiveIndex=this.suggestList.length-1:(this.suggestActiveIndex-=1,this.suggestActiveIndex<0&&(this.suggestActiveIndex=null,this.input.value=this.oraginValue)):null===this.suggestActiveIndex?this.suggestActiveIndex=0:(this.suggestActiveIndex+=1,this.suggestActiveIndex>this.suggestList.length-1&&(this.suggestActiveIndex=null,this.input.value=this.oraginValue)),this.baseUrl=void 0;const e=this.suggestList[this.suggestActiveIndex];(null==e?void 0:e.types)?(this.baseUrl=e.types[0].url,this.input.value=this.oraginValue):(null==e?void 0:e.target)?(this.baseUrl=e.target,this.input.value=this.oraginValue):(null==e?void 0:e.text)?this.input.value=e.text:this.input.value=this.oraginValue}async changeInputVal(){this.suggestActiveIndex=null,this.focusInput();const t=this.input.value;if(!t)return this.suggestList=[],void(this.suggesStatus=!1);let e=[];if(s.settingStore.withPermissionSearchSuggest||s.settingStore.setting.search.searchSuggest&&(l.h||l.r)){const{data:i,error:o}=await ut.d.getSearchSuggest(t);!o&&this.input.value&&(e=i)}this.input.value?(0===e.length&&this.suggestList.length>0||(e.length>7&&(e.length=7),this.suggestList=s.searchStore.searchEngine.addList.concat(e)),this.suggesStatus=!0):this.suggesStatus=!1}toSearch(t,e,i){var o,n;this.baseUrl=void 0,this.suggesStatus=!1;const{link:r}=s.settingStore.setting;if(!t){const{current:e}=s.searchStore.searchEngine;t=(null===(n=null===(o=e.types)||void 0===o?void 0:o[this.activeType])||void 0===n?void 0:n.url)||e.target}e||(e=this.input.value),j.a.sendBaidu(t),setTimeout(()=>{this.input.value=""},50),t.indexOf("%s")>-1?c.a.openUrl(t.replace(/%s/g,encodeURIComponent(e)),r.search,i):c.a.openUrl(t+encodeURIComponent(e),r.search,i)}delShortcutList(t){s.searchStore.delShortcut(t)}closeSuggestTips(t){0===t.button?(s.searchStore.closeSuggestTips(),this.focusElement=null):(t.stopPropagation(),t.preventDefault())}openSearchSuggest(t){0===t.button?(s.settingStore.openSearchSuggest(),this.focusElement=null):(t.stopPropagation(),t.preventDefault())}focusInput(){this.focusElement=this.input,this.input.value?this.suggesTipsStatus&&(this.suggesTipsStatus=!1):!s.searchStore.ignoreSuggest&&s.settingStore.setting.search.searchSuggest&&-1===s.settingStore.permission.searchSuggest&&(this.suggesTipsStatus=!0)}clearSearch(){this.input.value="",setTimeout(()=>{this.input.focus()},0)}render(){const{allItems:t,searchEngine:e}=s.searchStore,{types:o}=e.current,{shadow:n,hideButton:a,hideCategory:p}=s.settingStore.setting.search,{miniMode:d}=s.settingStore.setting.icon;return r.e`
      <div class="newtab-search ${d?"minimode":""}">
        <ul .hidden="${p}" class="search-type">
          ${o&&o.length>1?o.map((t,e)=>r.e`<li
                  @contextmenu="${c.a.stopShowMenu}"
                  class="search-type-item ${this.activeType===e?"active":""}"
                  @click="${()=>this.activeType=e}"
                >
                  ${t.name}
                </li>`):r.e`<li class="search-type-item holder">&nbsp;</li>`}
        </ul>
        <form
          class="${Object(G.a)({"search-card":!0,"show-up":this.suggesStatus,shadow:n})}"
          @contextmenu="${c.a.stopShowMenu}"
          @submit="${t=>{t.preventDefault(),t.stopPropagation(),this.toSearch(this.baseUrl,this.input.value,t)}}"
        >
          <button
            @click="${()=>{this.shortcutListStatus=!0,this.suggesStatus=!1}}"
            type="button"
            class="search-card-engine"
          >
            ${Object(nt.a)(Object(mt.a)(e.current))}
            <i class="icon-down"></i>
          </button>
          <div class="search-input-box">
            <input
              style="${et.startMove?"cursor: default;":""}"
              @input="${this.changeInputVal}"
              @focus="${this.focusInput}"
              @blur="${()=>{this.focusElement=null,this.closeSugges()}}"
              class="search-card-input"
              type="text"
              placeholder="${Object(Q.i18n)("input_and_search")}"
            />
            <i-svg
              @mousedown="${this.clearSearch}"
              class="search-input-clear"
              src="${i(521)}"
            ></i-svg>
          </div>

          <button
            @click="${t=>{t.stopPropagation(),t.preventDefault(),this.toSearch(void 0,void 0,t)}}"
            .hidden="${a}"
            class="search-card-btn"
            type="button"
          >
            <img class="icon-search" src="https://infinityicon.infinitynewtab.com/assets/search.svg" />
          </button>
        </form>
        <i-mask
          @close="${()=>{this.shortcutListStatus=!1,this.suggesStatus=!1}}"
          ?show="${this.shortcutListStatus}"
        ></i-mask>
        ${this._renderShortcutList(t)} ${this._renderSuggestList()}
        ${l.h||l.r?"":this._renderSuggestTips()}
      </div>
      <div class="drag-fake-wrapper ${this.dragId?"":"hide"}"></div>
    `}};ti([Object(r.g)({type:Number})],ei.prototype,"activeType",void 0),ti([Object(r.g)({type:Boolean})],ei.prototype,"shortcutListStatus",void 0),ti([Object(r.g)({type:Array})],ei.prototype,"suggestList",void 0),ti([Object(r.g)({type:Boolean})],ei.prototype,"suggesStatus",void 0),ti([Object(r.g)({type:Boolean})],ei.prototype,"suggesTipsStatus",void 0),ti([Object(r.f)()],ei.prototype,"dragId",void 0),ti([Object(r.f)()],ei.prototype,"dragMoved",void 0),ti([Object(r.f)()],ei.prototype,"dragFakeDom",void 0),ti([Object(r.f)()],ei.prototype,"suggestActiveIndex",void 0),ti([Object(r.h)(".shortcut-list")],ei.prototype,"dragWrapper",void 0),ti([Object(r.h)(".drag-fake-wrapper")],ei.prototype,"dragFakeWrapper",void 0),ei=ti([Object(r.c)("newtab-search")],ei);var ii=i(639),oi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ni=class extends a.a{constructor(){super(...arguments),this.isSliding=!1,this.currentPage=0,this.pageLength=1,this.lethargyX=new ii.Lethargy(5),this.lethargyY=new ii.Lethargy(5),this.mouseDownClientX=null,this.mouseMoveCount=0,this.firstTime=!0,this.layoutCol=s.settingStore.setting.layout.col,this.layoutRow=s.settingStore.setting.layout.row,this._touchDown=!1,this.pageOffset=0,this.inertia=localStorage.getItem("platforn-inertia"),this.wheelCount=0,this._mouseMove=c.a.throttle(t=>{if(null===this.mouseDownClientX)return;if(et.dragId)return;this.mouseMoveCount+=1;const e=this.$items.style.transform.split("("),i=e[e.length-1].split("%")[0];let o;o=window.TouchEvent&&t instanceof TouchEvent?t.touches[0].clientX:t.clientX;const n=o-this.mouseDownClientX;this.pageOffset=n;let r=i+"% ";r+=n>0?"+ "+Math.abs(n)+"px":"- "+Math.abs(n)+"px",this.$items.style.transform=`translateX(calc(${r}))`},20),this._mouseUp=t=>{if(this._touchDown=!1,this.pageOffset=0,window.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp),window.removeEventListener("touchmove",this._mouseMove),window.removeEventListener("touchend",this._mouseUp),this.mouseMoveCount<3)return this.mouseDownClientX=null,void(this.mouseMoveCount&&this.changePage(this.currentPage));let e;e=window.TouchEvent&&t instanceof TouchEvent?t.changedTouches[0].clientX:t.clientX;const i=e-this.mouseDownClientX;Math.abs(i)>150&&s.siteStore.sites.length>1?i>0?this.slideToLeft():this.slideToRight():(i||s.siteStore.sites.length<2)&&this.changePage(this.currentPage),this.mouseDownClientX=null},this._scrollEnd=()=>{!1!==this.isSliding&&(-1===this.currentPage?(this.$items.style.transitionProperty="none",this.currentPage=this.pageLength-1,setTimeout(()=>{requestAnimationFrame(()=>{this.$items.style.transform=`translateX(${-1*(this.currentPage+1)*100}%)`,this.isSliding=!1})},0)):this.currentPage>=this.pageLength?(this.$items.style.transitionProperty="none",this.currentPage=0,setTimeout(()=>{requestAnimationFrame(()=>{this.$items.style.transform=`translateX(${-1*(this.currentPage+1)*100}%)`,this.isSliding=!1})},0)):this.isSliding=!1)},this.lastWheelTime=performance.now(),this.wheelFilter=()=>{const t=performance.now(),e=this.lastWheelTime;return this.lastWheelTime=t,!(t-e<90)},this.wheelScroll=t=>{if(B.folderStatus)return;let e,i;t.stopPropagation(),t.preventDefault(),Math.abs(t.deltaX)>Math.abs(t.deltaY)?(e=this.lethargyX.check({deltaY:t.deltaX}),i=t.deltaX):(e=this.lethargyY.check(t),i=t.deltaY),this.inertia?e&&Math.abs(i)>1&&this.wheelFilter()&&(i<0?this.slideToLeft(void 0,!0):this.slideToRight(void 0,!0)):(!1===e?(this.wheelCount+=1,this.wheelCount>40&&(this.inertia="true",localStorage.setItem("platforn-inertia",this.inertia))):this.wheelCount=0,e&&Math.abs(i)>1&&(i<0?this.slideToLeft(void 0,!0):this.slideToRight(void 0,!0)))}}static get styles(){return r.b`
      :host {
        display: block;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-top: var(--icon-padding-top);
        width: 100%;
        margin-left: calc((100vw - var(--icon-box-width) - (var(--main-icons-margin) * 2)) / 2);
      }
      .items-container {
        height: 100%;
        display: flex;
        transition-property: transform;
        will-change: transform;
        width: 100%;
      }
      .linear {
        transition-timing-function: ease-in-out;
        transition-duration: 350ms;
      }
      .elastic {
        transition-timing-function: cubic-bezier(0.41, 1.5, 0.5, 1.01);
        transition-duration: 620ms;
      }
      .opacity {
        transition-timing-function: ease-in;
        transition-duration: 450ms;
      }
      .opacity .items-card-wrap {
        opacity: 0.1;
      }
      .items-card-wrap {
        width: var(--icon-box-width);
        margin: 0 var(--main-icons-margin);
        padding: 0;
        flex-shrink: 0;
        box-sizing: border-box;
        transition: opacity 620ms ease-in;
      }
      .items-card-wrap.active {
        opacity: 1;
      }
      .items-card {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(var(--icon-col), calc(100% / var(--icon-col)));
        grid-template-rows: repeat(var(--icon-row), calc(100% / var(--icon-row)));
        align-items: center;
        justify-items: center;
      }

      .offset-animate-right {
        animation: offsetAnimateRight 0.5s ease-in-out;
      }
      .offset-animate-left {
        animation: offsetAnimateLeft 0.5s ease-in-out;
      }
      .merge-holder {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        opacity: 0;
      }
      @keyframes offsetAnimateRight {
        50% {
          transform: translateX(6%);
        }
      }

      @keyframes offsetAnimateLeft {
        50% {
          transform: translateX(-6%);
        }
      }
    `}async firstUpdated(){this.flipping=new X({root:this.$items,viewBox:document.querySelector("newtab-main").shadowRoot.querySelector("newtab-icons")}),this.flipping.read(),this.$items.addEventListener("transitionend",t=>{"opacity"===s.settingStore.setting.animation.easing?"opacity"===t.propertyName&&this._scrollEnd():"transform"===t.propertyName&&this._scrollEnd()}),this.addEventListener("mousedown",t=>{0===t.button&&!0!==this._touchDown&&(this._touchDown=!0,this.mouseDownClientX=t.clientX,this.mouseMoveCount=0,this.$items.style.transitionProperty="none",this.isSliding&&(this._scrollEnd(),this.isSliding=!1),window.addEventListener("mousemove",this._mouseMove),window.addEventListener("mouseup",this._mouseUp),document.querySelector("i-menu").toHide())}),this.addEventListener("touchstart",t=>{!0!==this._touchDown&&(this._touchDown=!0,this.mouseDownClientX=t.touches[0].clientX,this.mouseMoveCount=0,this.$items.style.transitionProperty="none",this.isSliding&&(this._scrollEnd(),this.isSliding=!1),window.addEventListener("touchmove",this._mouseMove),window.addEventListener("touchend",this._mouseUp),document.querySelector("i-menu").toHide())})}update(t){this.flipping&&!this.firstTime&&(B.changeFlipStatus(!0),this.flipping.read()),super.update(t)}updated(t){if(this.firstTime)this.firstTime=!1;else{const{col:t,row:e}=s.settingStore.setting.layout;this.layoutCol!==t||this.layoutRow!==e?(0!==s.siteStore.currentPageIndex&&this.changePage(0),this.layoutRow=e,this.layoutCol=t,B.changeFlipStatus(!1),setTimeout(()=>{this.flipping.play({created:"scale",props:["position"]}).then(()=>{B.changeFlipStatus(!1)})},0)):requestAnimationFrame(()=>{this.flipping.play({created:"scale",props:["position"]}).then(()=>{B.changeFlipStatus(!1)})})}super.updated(t)}sendChangePage(t){const e=new CustomEvent("on-changepage",{detail:{type:t}});this.dispatchEvent(e)}slideToLeft(t=!1,e=!1){0!==this.pageOffset&&(t=!0),this.isSliding||(this.isSliding=!0,this.sendChangePage("left"),s.siteStore.sites.length<2&&e?this._offsetAnimate(-1).then(()=>{this.isSliding=!1}):this.changePage(this.currentPage-1,t)),t&&(this.isSliding=!1)}slideToRight(t=!1,e=!1){0!==this.pageOffset&&(t=!0),this.isSliding||(this.sendChangePage("right"),this.isSliding=!0,s.siteStore.sites.length<2&&e?this._offsetAnimate(1).then(()=>{this.isSliding=!1}):this.changePage(this.currentPage+1,t)),t&&(this.isSliding=!1)}_offsetAnimate(t){return new n.a(e=>{let i="";i=t>0?"offset-animate-left":"offset-animate-right",this.shadowRoot.querySelector(".active").classList.add(i),setTimeout(()=>{var t;null===(t=this.shadowRoot.querySelector("."+i))||void 0===t||t.classList.remove(i),e(null)},500)})}changePage(t,e=!1){let i=t;this.pageLength=s.siteStore.sites.length;let o=" ";if(this.pageOffset>0?o+="+ "+Math.abs(this.pageOffset)+"px":o+="- "+Math.abs(this.pageOffset)+"px",s.siteStore.sites.length<2)return s.siteStore.changeCurrentPage(0),this.currentPage=0,this.$items.style.transitionProperty=e?"none":"transform",void(this.$items.style.transform=`translateX(calc(-100%${o}))`);i<-1?i=-1:i>this.pageLength&&(i=this.pageLength),-1===i?s.siteStore.changeCurrentPage(this.pageLength-1):i===this.pageLength?s.siteStore.changeCurrentPage(0):s.siteStore.changeCurrentPage(i),this.currentPage=i,this.$items.style.transitionProperty=e?"none":"transform",this.$items.style.transform=`translateX(calc(${-1*(this.currentPage+1)*100}%${o}))`}_renderItem(t,e){const i=s.siteStore.sites[t]||[];return r.e`
      <div class="items-card-wrap ${t===s.siteStore.currentPageIndex?"active":""}">
        <div data-dropid="end" class="items-card icon-drop">
          ${i.filter(t=>t).map((i,o)=>"merge"===et.dragStage&&et.dragMergeHolderIndexs&&e&&et.dragMergeHolderIndexs[0]===t&&et.dragMergeHolderIndexs[1]===o?r.e` <div
                      class="icon-drop merge-holder"
                      data-dropid="holder"
                      data-dropindexs="${[t,o].join(",")}"
                    ></div>
                    <icon-box
                      class="icon-drop"
                      flipkey="${e?i.id:""}"
                      data-dropid="${i.id}"
                      .icon=${i}
                      .indexs="${[t,o]}"
                    ></icon-box>`:r.e`<icon-box
                class="icon-drop"
                flipkey="${e?i.id:""}"
                data-dropid="${i.id}"
                .icon=${i}
                .indexs="${[t,o]}"
              ></icon-box>`)}
        </div>
      </div>
    `}_renderEmptyItem(){return r.e`
      <div class="items-card-wrap">
        <div class="items-card"></div>
      </div>
    `}renderPage(t){return t.length>1?r.e` <!-- 最后一页图标，仅补位 -->
        ${this._renderItem(this.pageLength-1,!1)}
        <!-- 真实图标 -->
        ${t.map((t,e)=>r.e`${this._renderItem(e,!0)} `)}
        <!-- 第一页图标，仅补位 -->
        ${this._renderItem(0,!1)}`:(this.$items&&(this.$items.style.transitionProperty="none",this.$items.style.transform="translateX(-100%)"),s.siteStore.changeCurrentPage(0),r.e`
        ${this._renderEmptyItem()}
        ${t.map((t,e)=>r.e`${this._renderItem(e,!0)} `)}
      `)}render(){const{sites:t}=s.siteStore;return this.pageLength=t.length,r.e`
      <div style="transform:translateX(-100%);" class="items-container ${s.settingStore.setting.animation.easing}">
        ${this.renderPage(t)}
      </div>
    `}};oi([Object(r.h)(".items-container")],ni.prototype,"$items",void 0),ni=oi([Object(r.c)("newtab-icons")],ni);var ri=i(490),ai=i.n(ri),si=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let li=class extends r.a{constructor(){super(...arguments),this.show=!1}async checkShow(){if(document.querySelector("i-updating").classList.contains("hide")){if(localStorage.getItem("user-checkout-old-data"))this.show=!1;else{const{checkOldLocalData:t}=await i.e(10).then(i.bind(null,770)),e=await t();this.show=e}}else this.show=!1}firstUpdated(){l.l&&requestIdleCallback(async()=>{this.checkShow()})}toDetail(){s.pluginStore.showRepair(),setTimeout(()=>{this.checkShow()},20)}render(){return this.show?r.e`
      <div class="content">
        <div class="mask"></div>
        <div class="tips">
          <span class="desc">${i18n("check_olddata_desc")}</span>
          <span class="btn" @click="${this.toDetail}">&nbsp; ${i18n("show_detail")}<i-svg .src=${ai.a}></i-svg></span>
        </div>
      </div>
    `:null}};li.styles=r.b`
    .content {
      position: absolute;
      z-index: 99;
      height: 32px;
      width: 100vw;
      pointer-events: none;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 32px;
      background: rgba(51, 51, 51, 0.2);
    }
    .tips {
      text-align: center;
      height: 32px;
      font-size: 13px;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      width: 100vw;
      box-sizing: border-box;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      pointer-events: auto;
    }
    .desc {
      display: block;
      max-width: calc(100vw - 200px);
      min-width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    i-svg {
      width: 14px;
      height: 14px;
      color: #ffffff;
    }
  `,si([Object(r.g)({type:Boolean})],li.prototype,"show",void 0),li=si([Object(r.c)("i-check-olddata")],li);var ci=r.b`.title {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
.tip {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  color: #8e8e8e;
  line-height: 22px;
}
.footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
.btn,
delay-button {
  max-width: 160px;
  font-size: 13px;
}
.btn {
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 34px;
  box-sizing: border-box;
  border-radius: 6px;
  font-weight: 400;
  color: #333333;
  line-height: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-out;
}
.btn.hover-light:hover {
  background: rgba(255, 102, 102, 0.8);
}
.btn-main {
  background: #ff6666;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.btn-main:hover {
  background: #ff6666;
}
delay-button {
  margin-left: 16px;
}
.level-1 {
  position: absolute;
  top: 58px;
  right: -70px;
  width: 377px;
  min-height: 160px;
  padding: 20px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background-color: #fff;
}
.level-1 .arrow {
  position: absolute;
  top: -20px;
  right: 80px;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent transparent #fff;
}
`,pi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let di=class extends r.a{constructor(){super(...arguments),this.showList=!1,this.fontSize=13,this.list=[{label:i18n("two_hours_later"),delay:()=>Date.now()+72e5},{label:i18n("one_day_later"),delay:()=>{const t=new Date;return t.setHours(0,0,0,0),t.getTime()+864e5}},{label:i18n("one_week_later"),delay:()=>Date.now()+6048e5}],this.closeList=()=>{this.showList=!1},this.expandList=t=>{this.showList=!this.showList,t.stopImmediatePropagation()}}firstUpdated(){window.addEventListener("click",this.closeList)}disconnectedCallback(){window.removeEventListener("click",this.closeList),super.disconnectedCallback()}changeDelay(t){const e=new CustomEvent("on-changedelay",{bubbles:!0,composed:!0,detail:{value:t.delay()}});this.dispatchEvent(e)}render(){return r.e`<div class="delay-btn ${this.showList?"open":""}">
      <infinito-button @click="${this.expandList}">
        <div class="button-content" style="font-size:${this.fontSize}px;">
          <div class="btn-text">${i18n("show_later")}</div>
          <infinito-svg src="${i(640)}"></infinito-svg>
        </div>
      </infinito-button>
      <ul class="${this.showList?"show":"hide"}">
        ${this.list.map(t=>r.e`<li class="" @click="${()=>this.changeDelay(t)}">${t.label}</li> `)}
      </ul>
    </div>`}};di.styles=[r.b`
      :host {
        --padding: 18px;
      }
      .delay-btn {
        height: 100%;
      }
      infinito-button {
        width: 100%;
        --button-padding: 0 var(--padding);
        height: inherit;
      }
      .btn-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .button-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      infinito-svg {
        margin-left: 5px;
        width: 12px;
        height: 12px;
        color: #666;
      }
      .delay-btn {
        position: relative;
        border-radius: 6px;
        background: #eeeeee;
      }
      .open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      ul.show {
        opacity: 1;
      }
      ul.hide {
        opacity: 0;
        pointer-events: none;
      }
      ul {
        margin: 0;
        padding: 0;
        /* width: 100%; */
        /* position: absolute; */
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: #eeeeee;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        transition: opacity 0.2s;
      }
      li {
        margin: 0;
        list-style: none;
        width: 100%;
        padding: 8px var(--padding);
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s ease-out;
        font-size: inherit;
        font-weight: 400;
        color: #616161;
        word-break: break-word;
        overflow-wrap: break-word;
      }
      li:last-of-type {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
      li:hover {
        background: #d9d9d9;
        color: #333;
      }
    `],pi([Object(r.f)()],di.prototype,"showList",void 0),pi([Object(r.g)({type:Number})],di.prototype,"fontSize",void 0),di=pi([Object(r.c)("delay-button")],di);var hi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ui=class extends r.a{firstUpdated(){}toSelectWay(){const t=new CustomEvent("on-toupdate");this.dispatchEvent(t)}render(){const{info:t}=this;return r.e`<div class="level-1">
      <div class="arrow"></div>
      <div class="title">${t.title}</div>
      <div class="tip">${t.shortTip}</div>
      <div class="footer">
        <button @click="${this.toSelectWay}" class="btn hover-light btn-main">${i18n("update_now")}</button>
        <delay-button style="--padding: 18px;height:34px;"></delay-button>
      </div>
    </div>`}};ui.styles=ci,hi([Object(r.g)({type:Object})],ui.prototype,"info",void 0),ui=hi([Object(r.c)("update-level-1")],ui);var gi=r.b`.level-modal {
  width: 800px;
  height: 532px;
  display: flex;
  border-radius: 6px;
}
.left {
  flex-shrink: 0;
  width: 350px;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
}
.left img {
  width: 100%;
  height: 100%;
}
.right {
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 450px;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  line-height: 37px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tip {
  min-height: 50px;
  max-height: 80px;
  overflow: auto;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  line-height: 22px;
}
.footer {
  display: flex;
  justify-content: center;
}
.btn {
  display: block;
  padding: 0 30px;
  box-sizing: border-box;
  height: 44px;
  border-radius: 6px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn.hover-light:hover {
  background: rgba(255, 102, 102, 0.8);
}
.btn-main {
  background: #ff6666;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.btn,
delay-button {
  max-width: 186px;
  font-size: 15px;
}
delay-button {
  margin-left: 16px;
}
.ic-content {
  margin: 30px 0;
  margin-top: 24px;
}
.conetnt-header {
  margin-bottom: 20px;
  text-align: center;
}
.conetnt-header img {
  width: 26px;
  height: 13px;
}
.conetnt-body {
  height: 140px;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
}
.content-item {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  transition: transform 1s;
}
.content-item .item-title {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
.content-item .item-body {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #656565;
  line-height: 22px;
}
.conetnt-footer {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.conetnt-footer .dot {
  margin-right: 8px;
  display: block;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #333333;
  cursor: pointer;
  background: #fff;
  transition: background 0.3s;
}
.conetnt-footer .dot:last-child {
  margin-right: 0;
}
.conetnt-footer .dot.active {
  background: #333333;
}
`,fi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let mi=class extends r.a{constructor(){super(...arguments),this.force=!1,this.contentActive=0,this.timer=null,this.setLoop=()=>{clearInterval(this.timer),this.timer=setInterval(()=>{const t=(this.contentActive+1)%this.info.content.length;this.contentActive=t},6e3)},this.activeThis=t=>{t!==this.contentActive&&(this.contentActive=t,this.setLoop())}}firstUpdated(){this.setLoop()}disconnectedCallback(){clearInterval(this.timer),super.disconnectedCallback()}toSelectWay(){const t=new CustomEvent("on-toupdate",{composed:!0,bubbles:!0});this.dispatchEvent(t)}render(){const{info:t}=this;return r.e` <infinito-modal style="--modal-padding:0px" .closeable="${!1}" .open=${!0}>
      <div class="level-modal level-2" slot="body">
        <div class="left">
          <img src="${i(641)}" alt="" />
        </div>
        <div class="right">
          <div class="title">${t.title}</div>
          <div class="tip global-scrollbar">${t.tip}</div>
          <div class="ic-content">
            <div class="conetnt-header">
              <img src="${i(642)}" alt="" />
            </div>
            <div class="conetnt-body global-scrollbar">
              ${t.content.map(t=>r.e`
                  <div style="transform: translateX(${-390*this.contentActive}px);" class="content-item">
                    <div class="item-title">${t.title}</div>
                    <div class="item-body">${Object(nt.a)(t.body)}</div>
                  </div>
                `)}
            </div>
            <div class="conetnt-footer">
              ${t.content.map((t,e)=>r.e`
                  <span
                    @click="${()=>this.activeThis(e)}"
                    class="dot ${e===this.contentActive?"active":""}"
                  ></span>
                `)}
            </div>
          </div>
          <div class="footer">
            <button @click="${this.toSelectWay}" class="btn hover-light btn-main">${i18n("update_now")}</button>
            ${this.force?null:r.e`<delay-button fontSize="${15}" style="--padding:20px;height:44px;"></delay-button>`}
          </div>
        </div>
      </div>
    </infinito-modal>`}};mi.styles=[S.a,gi],fi([Object(r.g)({type:Boolean})],mi.prototype,"force",void 0),fi([Object(r.g)({type:Object})],mi.prototype,"info",void 0),fi([Object(r.g)({type:Number})],mi.prototype,"contentActive",void 0),mi=fi([Object(r.c)("update-level-2")],mi);var bi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let yi=class extends r.a{render(){const{info:t}=this;return r.e` <update-level-2 .force="${!0}" .info="${this.info}"></update-level-2>`}};bi([Object(r.g)({type:Object})],yi.prototype,"info",void 0),yi=bi([Object(r.c)("update-level-3")],yi);var vi=r.b`.tabs {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  --point-height: 4px;
}
.tabs.vertically {
  align-items: center;
}
.tabs.horizontally {
  flex-direction: column;
}
.tabs[style]::after {
  content: '';
}
.tabs.vertically::after {
  --width: 28;
  position: absolute;
  width: calc(var(--width) * 1px);
  left: calc((var(--target-left) + (var(--target-width) - var(--width)) / 2) * 1px);
  border-bottom: var(--point-height) solid #333;
  bottom: 0;
  transition: left 0.2s, width 0.2s;
}
.tabs.horizontally::after {
  position: absolute;
  width: 100%;
  height: calc(var(--target-height, 0) * 1px);
  top: calc(var(--target-top, -500) * 1px);
  border-right: var(--point-height) solid #333;
  right: 0;
  transition: top 0.2s, height 0.2s;
}
.way-modal {
  width: 760px;
  height: 70vh;
  min-height: 532px;
  max-height: 1032px;
  background: #ffffff;
  border-radius: 6px;
}
.way-header {
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 6px 0 0;
  border-bottom: 1px solid #ebebeb;
}
.way-header-back {
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-right: 20px;
  cursor: pointer;
}
.way-header-list {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.way-header-list .tab-item {
  cursor: pointer;
  margin-left: 40px;
  padding-bottom: 26px;
  font-size: 20px;
  font-weight: 400;
  color: #999;
}
.way-header-list .tab-item:first-of-type {
  margin-left: 10px;
}
.way-header-list .tab-item.active {
  color: #000;
}
.way-content {
  height: calc(70vh - 132px);
  max-height: 900px;
  min-height: 400px;
  margin: 20px auto;
  padding: 20px;
  overflow: auto;
  line-height: initial;
}
`,wi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let xi=class extends r.a{constructor(){super(...arguments),this.list=[],this.active=0,this.activeInited=!1}firstUpdated(){this.$content.addEventListener("click",t=>{const e=t.target;this.openStore(e.getAttribute("extension-store"))}),requestAnimationFrame(()=>{this.setActiveStyle(),this.activeInited=!0})}openStore(t){if("chrome"===t)return chrome.tabs.create({url:"chrome://extensions/"})}download(t){window.open(t)}onClose(){const t=new CustomEvent("on-close-way",{composed:!0,bubbles:!0});this.dispatchEvent(t)}onBack(){const t=new CustomEvent("on-back-level");this.dispatchEvent(t)}_activeThis(t,e){this.active=e,this.$content.scrollTop=0}_renderWay(t,e){return Object(nt.a)(t[e].content)}setActiveStyle(){const t=this.$tabs.querySelectorAll(".tab-item");if(t&&t.length>0){const e=t[this.active],i=this.$tabs.style,{offsetTop:o,offsetLeft:n,offsetWidth:r,offsetHeight:a}=e;i.setProperty("--target-width",r+""),i.setProperty("--target-height",a+""),i.setProperty("--target-left",n+""),i.setProperty("--target-top",o+"")}}updated(t){t.has("active")&&this.activeInited&&this.setActiveStyle()}render(){const{list:t,active:e}=this;return r.e` <infinito-modal .closeable="${!1}" .open=${!0} .onCancel=${this.onClose}>
      <div class="way-modal" slot="body">
        <div class="way-header">
          <img class="way-header-back" @click="${this.onBack}" src="${i(643)}" alt="" />
          <div class="way-header-list">
            <div class="tabs vertically">
              ${t.map((t,e)=>r.e`
                  <div
                    @click="${t=>this._activeThis(t,e)}"
                    class="tab-item ${this.active===e?"active":""}"
                  >
                    <span>${t.title}</span>
                  </div>
                `)}
            </div>
          </div>
        </div>
        <div class="way-content global-scrollbar">${this._renderWay(t,e)}</div>
      </div>
    </infinito-modal>`}};xi.styles=[S.a,vi],wi([Object(r.g)({type:Array})],xi.prototype,"list",void 0),wi([Object(r.g)({type:Number})],xi.prototype,"active",void 0),wi([Object(r.h)(".way-content")],xi.prototype,"$content",void 0),wi([Object(r.h)(".tabs")],xi.prototype,"$tabs",void 0),xi=wi([Object(r.c)("update-way")],xi);var ki=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let _i=class extends r.a{constructor(){super(...arguments),this.delay={version:"",date:0},this.step=0,this.platform="",this.localInfo={extId:l.B.extId,version:l.B.extVersion,lang:l.B.lang,platformVersion:l.B.platformVersion},this.info={level:0,latestVersion:"",currentVersion:l.B.extVersion,title:"",tip:"",shortTip:"",content:[],updateWayActive:0,updateWayList:[],contentHash:""},this.timer=null,this.GAP_TIME=12e4,this.init=()=>{const t=localStorage.getItem("infinity-updater");if(t)try{const{info:e,delay:i,updatetime:o}=JSON.parse(t);if(this.info.currentVersion!==e.currentVersion)return localStorage.removeItem("infinity-updater"),void this.requestLevel();this.info=e,this.delay=i,this.showCard(),Date.now()-o>this.GAP_TIME&&this.requestLevel()}catch(t){this.requestLevel()}else this.requestLevel()},this.requestLevel=async()=>{try{if(!c.a.requestFirefoxThrottle("get_ext_version",l.q?36e5:6e4,!0))return;const t=Object.keys(this.localInfo).map(t=>`${t}=${this.localInfo[t]}`),e="platform="+this.platform+"&"+t.join("&"),i=await window.fetch(l.w+"/get_ext_version?"+e),{code:o,data:n}=await i.json();if(0!==o)return;c.a.requestFirefoxThrottle("get_ext_version",!0,!0);const{level:r,latestVersion:a,contentHash:s}=n;if(0===r)return this.step=0,this.info.level=r,this.info.latestVersion=a,this.info.contentHash=s,void this.saveStorage();if(r===this.info.level&&a===this.info.latestVersion&&s===this.info.contentHash)return;this.getContent(e,{version:a,contentHash:s})}catch(t){}}}firstUpdated(){this.init(),this.timer=setInterval(()=>{this.requestLevel()},432e5)}saveStorage(){const t={info:this.info,delay:this.delay,updatetime:Date.now()};localStorage.setItem("infinity-updater",JSON.stringify(t))}async getContent(t,e){try{const i=await window.fetch(l.w+"/update_content?"+t),{code:o,data:n}=await i.json();if(0!==o)return;const{level:r,title:a,tip:s,shortTip:c,content:p,updateWayList:d,updateWayActive:h}=n;this.info.level=r,this.info.title=a,this.info.content=p,this.info.tip=s,this.info.shortTip=c,this.info.updateWayList=d,this.info.updateWayActive=h,this.info.latestVersion=e.version,this.info.contentHash=e.contentHash,this.showCard(),this.saveStorage()}catch(t){}}showCard(t){if(t)this.step=2;else{const{date:t}=this.delay;this.info.level>0&&Date.now()>t&&(1===this.info.level?this.step=1:this.step=2)}2===this.step&&this.preRender()}preRender(){this.info.updateWayList.forEach(t=>{document.createElement("div").innerHTML=t.content})}showWay(){this.step=3}showCardDetail(){this.showCard(!0)}changeDelay(t){const{value:e}=t.detail;this.step=0,this.delay={version:this.info.latestVersion,date:e},this.saveStorage()}closeWay(){}_renderCard(){if(1===this.step)return r.e`
        <update-level-1
          @on-toupdate="${this.showCardDetail}"
          @on-changedelay="${this.changeDelay}"
          .info="${this.info}"
        ></update-level-1>
      `;if(2===this.step)switch(this.info.level){case 1:case 2:return r.e`
            <update-level-2
              @on-toupdate="${this.showWay}"
              @on-changedelay="${this.changeDelay}"
              .info="${this.info}"
            ></update-level-2>
          `;case 3:return r.e` <update-level-3 @on-toupdate="${this.showWay}" .info="${this.info}"></update-level-3> `;default:return null}else if(3===this.step)return r.e`
        <update-way
          @on-close-way="${()=>this.showCard(!0)}"
          @on-back-level="${()=>this.showCard(!0)}"
          .active="${this.info.updateWayActive}"
          .list="${this.info.updateWayList}"
        ></update-way>
      `;return null}render(){return this.info.level?r.e`<div @click="${this.showCard}" class="startup">
          <img class="starup-img" src="https://infinityicon.infinitynewtab.com/assets/btn-update.png" alt="" />
        </div>
        ${this._renderCard()}`:null}};_i.styles=r.b`
    :host {
      position: relative;
      line-height: normal;
    }
    .startup {
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease;
    }
    .startup:hover {
      transform: scale(1.1);
    }
    .starup-img {
      width: 40px;
      height: 40px;
    }
  `,ki([Object(r.f)()],_i.prototype,"delay",void 0),ki([Object(r.f)()],_i.prototype,"step",void 0),ki([Object(r.g)()],_i.prototype,"platform",void 0),ki([Object(r.f)()],_i.prototype,"localInfo",void 0),ki([Object(r.f)()],_i.prototype,"info",void 0),_i=ki([Object(r.c)("i-updater")],_i);var Oi=i(188),Si=i(344),ji=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let $i=class extends a.a{constructor(){super(...arguments),this.capture=!1,this.sidePageAnimate={$el:null,cb:null,instanceIn:null,instanceOut:null},this.menu=null,this.menus=[{text:i18n("edit_icon"),handler:()=>{s.userStore.isLogin||!l.r?B.changeIconEditing(!0):s.userStore.toggleLoginTipModal()}},{text:i18n("random_wallpaper"),handler:()=>{j.a.sendEvent({action:{randomWallpaper:"rightClickMenu"}}),this.changeWallpaper()}}],this.moveTimer=null,this.moveArea="",this.dropId="",this.dropIndexs=[],this.dragFolderOragin=null,this.dragFolderTimer=null,this.clearAsideMethod=null,this.clearDropStatus=()=>{this.moveTimer&&(clearTimeout(this.moveTimer),this.moveTimer=null,this.moveArea="",this.dropId="",this.dropIndexs=[])},this.dragToEnd=()=>{B.folderStatus?this.dropIndexs=[...B.folderIndexs,B.folderItem.children.length-1]:this.dropIndexs=[s.siteStore.currentPageIndex,s.siteStore.sites[s.siteStore.currentPageIndex].length-1];const t=this.dropIndexs[1]===s.settingStore.setting.layout.row*s.settingStore.setting.layout.col-1?"left":"right";et.sortSites(this.dropIndexs,t)},this._scheduler=(t,e)=>{if(e!==this.dropId||t!==this.moveArea){const i=200,o=500,n=350,{dragId:r}=et;if(clearTimeout(this.moveTimer),this.moveArea=t,this.dropId=e,et.checkDragIndexs(),0===et.dragIndexs.length)return;"center"!==t||B.folderStatus||!s.siteStore.isIcon(0,r)?this.moveTimer=setTimeout(()=>{et.clearMergeStatus(),"end"===e&&(B.folderStatus?this.dropIndexs=[...B.folderIndexs,B.folderItem.children.length-1]:this.dropIndexs=[s.siteStore.currentPageIndex,s.siteStore.sites[s.siteStore.currentPageIndex].length-1]),et.sortSites(this.dropIndexs,t)},i):s.siteStore.isIcon(s.siteStore.currentPageIndex,e)?(et.setMergeStatus("hover",e),et.setHolderIndexs(this.dropIndexs),this.moveTimer=setTimeout(()=>{const{folderId:t}=et.createFolder(this.dropIndexs);this.dropId=t,this.moveTimer=setTimeout(()=>{this._handleFolderStatus(this.dropId)},o)},n)):(et.setMergeStatus("hover",e),et.setHolderIndexs(this.dropIndexs),this.moveTimer=setTimeout(()=>{et.intoFolder(this.dropIndexs),this.moveTimer=setTimeout(()=>{this._handleFolderStatus(this.dropId)},o)},n))}},this._toPrevPage=(t=!1)=>{this.$items.slideToLeft(t,!0)},this._toNextPage=()=>{this.$items.slideToRight(void 0,!0)},this._clearStatus=t=>{var e,i;!1!==this.capture&&(null===(e=this.sidePageAnimate.instanceIn)||void 0===e||e.cancel(),null===(i=this.sidePageAnimate.instanceOut)||void 0===i||i.cancel(),t.style.opacity="0",this.capture=!1)}}rotateWindMill(t){this._$windmill.style.transform=`rotate(${t}deg)`}async firstUpdated(){this.menu=q.create(),this.addEventListener("click",()=>{B.changeIconEditing(!1),this.menu.toHide()}),this.oncontextmenu=t=>(t.stopPropagation(),this.rightClickMenu(t)),this.$main.addEventListener("mouseleave",()=>{this.$main.blur()}),this.$main.addEventListener("wheel",this.$items.wheelScroll),window.addEventListener("keydown",t=>{this.keyboardScroll(t)}),this.initDrag(),document.body.addEventListener("mousemove",c.a.throttle(()=>{et.setMobileDrag(!1)},50)),document.body.addEventListener("touchmove",c.a.throttle(()=>{et.setMobileDrag(!0)},50))}initDrag(){const t=new Ze({dragRoot:this.$mainBox,dragSelector:".icon-drag",dropRoot:this.$mainBox,dropSelector:".icon-drop"});t.subscribe(t=>{switch(t.type){case"dragStart":this.dragStart(t.payload);break;case"dragEnd":this.dragEnd(t.payload);break;case"dragMove":this.dragMove(t.payload);break;case"drop":this.drop(t.payload)}}),et.setDragIns(t)}dragStart({x:t,y:e,dragElement:i}){const{left:o,top:n,width:r,height:a}=i.getBoundingClientRect(),s=t-o,l=e-n;B.folderStatus?(et.drag.oraginOffsetX=1.25*s,et.drag.oraginOffsetY=1.25*l):(et.drag.oraginOffsetX=s,et.drag.oraginOffsetY=l),et.drag.width=r,et.drag.height=a,et.drag.x=t,et.drag.y=e;const c=i.parentElement.cloneNode(!0);c.classList.add("drag-icon-box"),c.style.transformOrigin="top left",c.style.position="fixed",c.style.zIndex="10",c.style.pointerEvents="none",c.style.display="none",c.style.overflow="visible",et.drag.dom=c,document.body.appendChild(et.drag.dom);const p=i.dataset.dragid,d=i.parentElement.parentNode.host.indexs;et.setDragStatus(p,d)}dragEnd({x:t,y:e}){this.sidePageAnimate.$el&&this._clearStatus(this.sidePageAnimate.$el),et.changeXLimitStatus(!1),et.checkDragIndexs(),et.dragIndexs.length&&et.dragIndexs[0]!==s.siteStore.currentPageIndex?this.dragToEnd():B.folderStatus||et.dragStage||3!==et.dragIndexs.length||this.dragToEnd(),setTimeout(()=>{this.cancelDragAnimate(),this.dragEndAnimate(t,e),this.clearDropStatus()},20)}cancelDragAnimate(){this.$items.flipping.cancel(et.dragId),this.$folderBox.flipping.cancel(et.dragId)}dragEndAnimate(t,e){var i;if(!et.startMove||0===et.dragIndexs.length)return et.drag=Object.assign({},et.dragNone),this.tryRemoveFakerDom(),void et.clearDragStatus();let o=null;if(3===et.dragIndexs.length)if(B.folderStatus)o=this.$folderBox.shadowRoot.querySelector(`[flipkey="${et.dragId}"]`).shadowRoot.querySelector("icon-content").shadowRoot.querySelector(".icon-content");else{const t=this.$items.shadowRoot.querySelector(`[flipkey="${et.dropTargetId}"]`).shadowRoot.querySelector("icon-content").shadowRoot.querySelectorAll(".mini-icon");o=t[t.length-1]}else if(2===et.dragIndexs.length){const t=this.$items.shadowRoot.querySelector(`[flipkey="${et.dragId}"]`);o=null===(i=null==t?void 0:t.shadowRoot.querySelector("icon-content"))||void 0===i?void 0:i.shadowRoot.querySelector(".icon-content")}if(!o)return et.drag=Object.assign({},et.dragNone),this.tryRemoveFakerDom(),void et.clearDragStatus();const{left:n,top:r,width:a}=o.getBoundingClientRect();if(n>0&&n<innerWidth){const i=n-t+et.drag.offsetX-et.drag.marginX+"px",o=r-e+et.drag.offsetY+"px",s=a/et.drag.width,l=et.drag.dom.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${i},${o}) scale(${Math.min(s,1)})`}],{duration:200,easing:"ease-in"});et.clearDragIndexs(),l.onfinish=()=>{et.drag=Object.assign({},et.dragNone),this.tryRemoveFakerDom(),et.clearDragStatus()}}else o.animate([{transform:"scale(0.1)",opacity:"0.1"},{transform:"scale(1)",opacity:"1"}],{duration:300,easing:"ease-in"}),et.drag=Object.assign({},et.dragNone),this.tryRemoveFakerDom(),et.clearDragStatus()}tryRemoveFakerDom(){try{document.body.removeChild(document.querySelector(".drag-icon-box"))}catch(t){}}dragMove({x:t,y:e,startMove:i}){if(!et.drag.dom)return;et.drag.x=t,et.drag.y=e;const o=t-et.drag.offsetX,n=e-et.drag.offsetY;!et.startMove&&i?(et.setStartMove(!0),et.setMobileDrag(!0),et.changeXLimitStatus(!0),et.drag.dom.style.left=o+"px",et.drag.dom.style.top=n+"px",et.drag.dom.style.display="block",this.menu.toHide()):et.startMove&&(et.drag.dom.style.left=o+"px",et.drag.dom.style.top=n+"px"),this.dragOutFolder(t,e)}drop({dropElement:t,x:e,y:i}){var o;if(!et.drag.dom)return;const{flipStatus:n}=B;if(n||this.$items.isSliding)return;const r=t.dataset.dropid;if("aside-left"===r)return this.clearDropStatus(),et.clearMergeStatus(),this._captureToPrev(),void(this.clearAsideMethod="_stopCaptureToPrev");if("aside-right"===r)return this.clearDropStatus(),et.clearMergeStatus(),this._captureToNext(),void(this.clearAsideMethod="_stopCaptureToNext");if(this.clearAsideMethod&&(this[this.clearAsideMethod](),this.clearAsideMethod=null),et.dragId===r||"wrapper"===r)return this.clearDropStatus(),void et.clearMergeStatus();this.dropIndexs=t.indexs||(null===(o=t.dataset.dropindexs)||void 0===o?void 0:o.split(",").map(t=>Number(t)));let a="";if("end"===r)a="right";else if("holder"===r)a="left";else{const{left:o,top:n,width:r,height:s}=t.shadowRoot.querySelector("icon-content").shadowRoot.querySelector(".icon-content").getBoundingClientRect(),l=e-et.drag.offsetX+et.drag.marginX+r/2,c=i-et.drag.offsetY+s/2;a=this._calcArea({pointX:e,centerX:l,centerY:c,targetX:o,targetY:n,targetWidth:r,targetHeight:s})}this._scheduler(a,r)}_calcArea({pointX:t,centerX:e,centerY:i,targetX:o,targetY:n,targetWidth:r,targetHeight:a}){let s="";return s=t>o+r/2?"right":"left",e>o+.2*r&&i>n&&e<o+.8*r&&i<n+a&&(s="center"),s}dragOutFolder(t,e){if(!B.folderStatus)return clearTimeout(this.dragFolderTimer),this.dragFolderOragin=null,void(this.dragFolderTimer=null);const{width:i,height:o,left:n,top:r}=this.$folderBox.shadowRoot.querySelector(".icon-box-wrap").getBoundingClientRect();if(t>n&&e>r&&t<n+i&&e<r+o)clearTimeout(this.dragFolderTimer),this.dragFolderTimer=null;else{if(null!==this.dragFolderTimer)return;null===this.dragFolderOragin&&(this.dragFolderOragin={x:t,y:e}),this.dragFolderTimer=setTimeout(()=>{(Math.abs(t-this.dragFolderOragin.x)>20||Math.abs(e-this.dragFolderOragin.y)>20)&&B.closeFolder(),this.dragFolderTimer=null},250)}}_handleFolderStatus(t){B.changeFolderFlipData({});const e=s.siteStore.findIndex(s.siteStore.currentPageIndex,t);B.openFolderWithIndexs(e),et.setMergeStatus("open",t)}updaterRightClick(t){t.stopPropagation(),t.preventDefault();const e=t.composedPath()[0];return!!c.a.isInputType(e)}rightClickMenu(t){var e;const i=t.composedPath()[0];if(c.a.isInputType(i))return this.menu.toHide(),!0;if(i&&"none"===i.getAttribute("data-menu"))return this.menu.toHide(),!1;{let i={left:0,top:0};t instanceof MouseEvent?i={left:t.pageX,top:t.pageY}:window.TouchEvent&&t instanceof TouchEvent&&(i={left:t.touches[0].pageX,top:null===(e=t.touches[0])||void 0===e?void 0:e.pageY});const o=[...this.menus];s.userStore.isLogin&&o.unshift({text:i18n("backup_now"),handler:()=>{V.IConfirm.create().toShow({title:i18n("backup_now"),text:i18n("confirm_cover_remote"),onConfirm:()=>{s.syncStore.manualBackup()}})}});const{type:n,id:r}=s.wallpaperStore;return r&&!r.includes("__wp_")&&["cloud","cloudAuto","color","bing"].includes(n)&&o.push({text:i18n("wallpaper_collect_current"),handler:()=>{s.userStore.isLogin?s.wallpaperStore.cloudCollection.includes(r)||Object(Oi.collectionWallpaper)(r,1).then(()=>{s.wallpaperStore.addCollectionP(r)}).catch(console.warn):Si.default.popupLogin()}}),"color"!==n&&o.push({text:i18n("download_current_wallpaper"),handler:()=>{s.wallpaperStore.rawUrl?c.a.downloadImg(s.wallpaperStore.rawUrl,void 0,s.wallpaperStore.wpExt):c.a.downloadImg(Object(P.b)("wallpaper-src"),"wallpaper")}}),n.includes("Auto")&&o.push({text:i18n("wallpaper_switch_to_next_wallpaper"),handler:()=>{s.wallpaperStore.switchToNextWallpaper()}}),s.wallpaperStore.firstSync&&this.menu.toShow(o,i),B.changeIconEditing(!1),!1}}keyboardScroll(t){var e;const i=t.composedPath()[0];c.a.isInputType(i)||s.pluginStore.pluginViews.length>0||B.folderStatus||(null===(e=this.shadowRoot.querySelector("newtab-search"))||void 0===e?void 0:e.shortcutListStatus)||("ArrowLeft"===t.key?this._toPrevPage():"ArrowRight"===t.key&&this._toNextPage())}openSetting(){s.userStore.isLogin||!l.r?s.pluginStore.show("profile"):s.userStore.toggleLoginTipModal()}clickChangeWallpaper(){j.a.sendEvent({action:{randomWallpaper:"windmill"}}),this.changeWallpaper()}changeWallpaper(){s.wallpaperStore.randomWallpaper()}__captureToChangeAnimate(){this.sidePageAnimate.instanceIn=this.sidePageAnimate.$el.animate([{opacity:.05},{opacity:.3}],{duration:300}),this.sidePageAnimate.instanceIn.onfinish=async()=>{this.capture&&(this.sidePageAnimate.$el.style.opacity="0.3",this.capture&&(this.sidePageAnimate.cb(),this.sidePageAnimate.instanceOut=this.sidePageAnimate.$el.animate([{opacity:.3},{opacity:.05}],{duration:600}),this.sidePageAnimate.instanceOut.onfinish=async()=>{this.capture&&(this.sidePageAnimate.$el.style.opacity="0.05",this.capture&&this.__captureToChangeAnimate())}))}}_captureToChange(t,e){!0===this.capture||B.folderStatus||(this.capture=!0,this.clearDropStatus(),et.clearMergeStatus(),this.sidePageAnimate.$el=t,this.sidePageAnimate.cb=e,this.__captureToChangeAnimate())}changePage(){this.clearDropStatus(),et.clearMergeStatus()}_captureToPrev(){this._captureToChange(this.$left,this._toPrevPage)}_stopCaptureToPrev(){this._clearStatus(this.$left)}_captureToNext(){this._captureToChange(this.$right,this._toNextPage)}_stopCaptureToNext(){this._clearStatus(this.$right)}toPage(t){t!==s.siteStore.currentPageIndex&&this.$items.changePage(t)}handleMouseOver(t){const e=window.innerWidth,i=t.target.getBoundingClientRect(),{right:o}=i,n=e-o;this.$settingTips.offsetWidth>=2*n&&(this.$settingTips.style.right="0px"),this.$settingTips.style.top="50px"}_renderSyncTips(){return s.syncStore.autoSyncing?r.e`<div class="sync">
        <img class="syncing-img" src="${Object(ot.a)("syncing.png",!1)}" alt="" />
      </div>`:s.syncStore.syncFail?r.e`
        <div class="sync sync-end">
          <img src="${Object(ot.a)("sync_failed.png",!1)}" alt="" /> ${s.syncStore.isBackup?i18n("backup_failed"):i18n("sync_fail")}${s.syncStore.syncFailMsg?" : "+s.syncStore.syncFailMsg:""}
        </div>
      `:null}render(){const{firstSync:t,setting:e}=s.settingStore,{icon:i,search:o}=e,{sites:n}=s.siteStore;return this.style.display=t?"":"none",r.e`
      <main class="main">
        <i-check-olddata></i-check-olddata>
        <aside
          .hidden="${!1===et.dragXLimit||s.siteStore.sites.length<2}"
          @mouseleave="${this._stopCaptureToPrev}"
          @mouseenter="${this._captureToPrev}"
          class="main-left icon-drop"
          data-dropid="aside-left"
        ></aside>
        <section class="main-middle">
          <icon-folder></icon-folder>
          <aside style="${"transition:none"}" tabindex="0" data-dropid="wrapper" class="main-middle-center icon-drop">
            <section .hidden="${o.hide}" class="search">
              <newtab-search></newtab-search>
            </section>
            <section .hidden="${i.miniMode}" class="swiper-container">
              <div
                class="swiper-content"
                style="transition: transform 300ms ease-out;${B.offsetX?`transform:translateX(${B.offsetX}px)`:""}"
              >
                <newtab-icons @on-changepage="${this.changePage}"></newtab-icons>
              </div>
              <div class="swiper-pagination ${n.length>1?"":"hide"}">
                ${n.map((t,e)=>r.e`
                    <span
                      @click="${()=>this.toPage(e)}"
                      class="dot ${e===s.siteStore.currentPageIndex?"active":""}"
                    ></span>
                  `)}
              </div>
            </section>
          </aside>
          <div
            .hidden="${!e.view.pagin||e.icon.miniMode}"
            @click="${()=>this._toPrevPage()}"
            @contextmenu="${c.a.stopShowMenu}"
            class="swiper-btn-prev swiper-btn"
          >
            <img src="https://infinityicon.infinitynewtab.com/assets/arrow_right.svg" alt="" />
          </div>
          <div
            .hidden="${!e.view.pagin||e.icon.miniMode}"
            @click="${this._toNextPage}"
            @contextmenu="${c.a.stopShowMenu}"
            class="swiper-btn-next swiper-btn"
          >
            <img src="https://infinityicon.infinitynewtab.com/assets/arrow_right.svg" alt="" />
          </div>
          <!-- web端需要显示设为主页按钮 -->
          <aside data-menu="none" class="btn-setting-box">
            ${l.r&&s.settingStore.setting.view.isShowHomepageBtn?r.e`
                  <div class="setting-home-box">
                    <img
                      class="btn-setting-home"
                      src="https://infinityicon.infinitynewtab.com/assets/home.png"
                      @click=${t=>{t.stopPropagation(),s.settingStore.toggleSettingHomeModal()}}
                      @mouseover=${this.handleMouseOver}
                      @mouseout=${()=>{this.$settingTips.style.top="-100px"}}
                    />
                    <div class="setting-home-text">${i18n("set_to_homepage")}</div>
                  </div>
                `:null}
            ${l.r?null:r.e`<i-updater
                  @contextmenu="${this.updaterRightClick}"
                  data-menu="none"
                  platform="${l.B.platform}"
                ></i-updater>`}

            <img
              data-menu="none"
              @click="${this.openSetting}"
              class="btn-setting"
              src="https://infinityicon.infinitynewtab.com/assets/btn-setting.png"
              alt=""
            />
          </aside>

          ${e.view.windmill?r.e`<div data-menu="none" class="windmill">
                <img
                  id="windmill"
                  data-menu="none"
                  @click="${this.clickChangeWallpaper}"
                  src="https://infinityicon.infinitynewtab.com/assets/windmill.svg"
                />
                <span data-menu="none"></span>
              </div>`:null}
          ${this._renderSyncTips()}
        </section>
        <aside
          .hidden="${!1===et.dragXLimit||s.siteStore.sites.length<2}"
          @mouseleave="${this._stopCaptureToNext}"
          @mouseenter="${this._captureToNext}"
          class="main-right icon-drop"
          data-dropid="aside-right"
        ></aside>
        <div class="icp ${Q.IS_ZH&&l.r?"":"hide"}">
          <a class="icp-link" target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index"
            >渝ICP备15002199号-10</a
          >
        </div>
      </main>
    `}};$i.styles=R,ji([Object(r.h)("newtab-icons")],$i.prototype,"$items",void 0),ji([Object(r.h)(".main-middle")],$i.prototype,"$mainBox",void 0),ji([Object(r.h)("icon-folder")],$i.prototype,"$folderBox",void 0),ji([Object(r.h)(".main-middle-center")],$i.prototype,"$main",void 0),ji([Object(r.h)(".main-left")],$i.prototype,"$left",void 0),ji([Object(r.h)(".main-right")],$i.prototype,"$right",void 0),ji([Object(r.h)("img#windmill")],$i.prototype,"_$windmill",void 0),ji([Object(r.h)(".setting-home-text")],$i.prototype,"$settingTips",void 0),$i=ji([Object(r.c)("newtab-main")],$i);var Ii=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class Ci{constructor(){this.topSites=[],this.minWidth=60,this.maxWidth=160}getTopSites(){chrome.topSites.get(t=>this.setData(t))}setData(t){this.topSites=t,localStorage.setItem("topSites",JSON.stringify(t))}}Ii([x.g],Ci.prototype,"topSites",void 0),Ii([x.b],Ci.prototype,"getTopSites",null),Ii([x.b],Ci.prototype,"setData",null);var Ti=new Ci,Ei=(i(500),function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a});let Li=class extends a.a{constructor(){super(...arguments),this.store=Ti}openUrl(t,e){j.a.sendEvent({action:{openTopsite:c.a.getTargetLogDomain(t)}}),c.a.openUrl(t,s.settingStore.setting.link.icon,e)}render(){return r.e`
      <div class="topbar-useful">
        <div class="flex">
          ${Ti.topSites.map(t=>r.e`
              <div
                class="item"
                .title=${t.title}
                style="max-width: ${Ti.maxWidth}px;min-width: ${Ti.minWidth}px;"
                @click=${e=>this.openUrl(t.url,e)}
              >
                <i-favicon style="border-radius: 50%; overflow: hidden;" .url="${t.url}"></i-favicon>
                <span>${t.title}</span>
              </div>
            `)}
        </div>
      </div>
    `}firstUpdated(){this.store.getTopSites(),this._hideFake()}_hideFake(){n.a.resolve().then(()=>this.updateComplete).then(()=>new n.a(t=>setTimeout(t,100))).finally(()=>{const t=document.querySelector(".top-useful");t&&t.parentElement.removeChild(t)})}};Li.styles=r.b`
    .topbar-useful {
      width: 100%;
      height: 36px;
    }

    .flex {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 12px;
      box-sizing: border-box;
      padding: 4px 8px;
      flex-flow: row wrap;
      overflow: hidden;
    }
    .item:not(:last-child) {
      margin-right: 5px;
    }
    .item {
      display: inline-flex;
      height: 100%;
      align-items: center;
      border-radius: 24px;
      flex-shrink: 0;
      position: relative;
      box-sizing: border-box;
      padding: 2px 10px;
      cursor: pointer;
    }
    .item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: #151517;
      border-radius: inherit;
      transition: opacity 200ms;
      pointer-events: none;
      cursor: pointer;
    }
    .item:hover::before {
      opacity: 0.12;
    }

    img,
    i-favicon {
      width: 16px;
      height: 16px;
      margin-right: 0;
    }
    span {
      margin-left: 6px;
      color: #ececec;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      z-index: 1;
    }
  `,Li=Ei([Object(r.c)("topbar-useful")],Li);var Pi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ri=class extends a.a{render(){return r.e`
      <div class="newtab-topsite">
        ${s.settingStore.withPermissionTopUseful?r.e`<topbar-useful></topbar-useful>`:null}
      </div>
    `}};Ri=Pi([Object(r.c)("newtab-topsite")],Ri);i(399);var Di=i(177);var Ai=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Mi=class extends r.a{constructor(){super(...arguments),this.show=!1,this.duration=window.__ANIMATION__.aniSideTime,this.statusQueue=[]}firstUpdated(){var t,e;const i=null===(t=this.$slot.assignedNodes())||void 0===t?void 0:t.find(t=>1===t.nodeType);null===(e=null==i?void 0:i.style)||void 0===e||e.setProperty("backface-visibility","hidden")}updated(t){t.has("show")&&!0===this.show&&this.onShow()}shouldUpdate(t){return!this.$content||(!t.has("show")||!1!==this.show||(this.onHide().then(()=>{0===this.statusQueue.length&&this.requestUpdate()}),!1))}close(){const t=new CustomEvent("on-close",{bubbles:!0,composed:!0});this.dispatchEvent(t)}async onShow(){0===this.statusQueue.length&&await this.callLifeCycle("beforeShow"),await this.transformAnimate(),0===this.statusQueue.length&&await this.callLifeCycle("afterShow")}async onHide(){0===this.statusQueue.length&&await this.callLifeCycle("beforeHide"),await this.transformAnimate(!0),0===this.statusQueue.length&&await this.callLifeCycle("afterHide")}async callLifeCycle(t){"beforeHide"===t?this.$close.classList.add("hide-close"):"afterShow"===t&&this.$close.classList.remove("hide-close");const e=this.$slot.assignedNodes().find(t=>1===t.nodeType);(null==e?void 0:e[t])&&await e[t]()}transformAnimate(t=!1){return new n.a(e=>{const i=`transform ${window.__ANIMATION__.aniSideTime}ms ${window.__ANIMATION__.aniSideFn} 0s`;0===this.statusQueue.length&&this.$content.style.setProperty("transition",i),this.statusQueue.push(t),requestAnimationFrame(async()=>{await new n.a(t=>setTimeout(t,0)),t?(this.$mask.style.setProperty("pointer-events","none"),this.$content.style.setProperty("transform","translateX(calc(100% * var(--side-ratio))) scale(var(--side-ratio)) translateZ(0)")):(this.$mask.style.setProperty("pointer-events","auto"),this.$content.style.setProperty("transform","translateX(0) scale(var(--side-ratio)) translateZ(0)"))}),setTimeout(()=>{this.statusQueue.shift(),0===this.statusQueue.length&&this.$content.style.removeProperty("transition"),e(null)},window.__ANIMATION__.aniSideTime)})}render(){return r.e`
      <div .hidden="${!this.show}">
        <div @click="${this.close}" class="mask"></div>
        <div class="content">
          <div @click="${this.close}" class="close hide-close">
            <img class="img" src="${i(644)}" alt="" />
          </div>
          <slot></slot>
        </div>
      </div>
    `}};Mi.styles=r.b`
    :host {
      --side-width: 420px;
    }
    [hidden] {
      display: none !important;
    }
    .mask {
      position: absolute;
      z-index: 100;
      top: var(--top-bar-height);
      right: 0;
      left: 0;
      bottom: 0;
    }
    .content {
      position: absolute;
      will-change: transform;
      top: var(--top-bar-height);
      right: 0;
      z-index: 101;
      width: var(--side-width);
      max-width: calc(100vw - 50px);
      height: calc((1 / var(--side-ratio)) * (100% - var(--top-bar-height)));
      transform-origin: top right;
      transform: translateX(calc(100% * var(--side-ratio))) scale(var(--side-ratio)) translateZ(0);
      box-shadow: #555 0 0 calc(var(--side-ratio) * 8px);
    }
    .close {
      position: absolute;
      top: 10px;
      left: -46px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .close:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
    .close .img {
      width: 14px;
      height: 14px;
    }
    .hide-close {
      display: none;
    }
  `,Ai([Object(r.g)({type:Boolean})],Mi.prototype,"show",void 0),Ai([Object(r.g)({type:Number})],Mi.prototype,"duration",void 0),Ai([Object(r.h)(".content")],Mi.prototype,"$content",void 0),Ai([Object(r.h)(".mask")],Mi.prototype,"$mask",void 0),Ai([Object(r.h)("slot")],Mi.prototype,"$slot",void 0),Ai([Object(r.h)(".close")],Mi.prototype,"$close",void 0),Mi=Ai([Object(r.c)("i-side2")],Mi);i(353);var Ni=i(645),zi=i.n(Ni),Bi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ui=class extends r.a{constructor(){super(...arguments),this.title="",this.borderBottom=!0,this.showSetting=!1}handleSetting(t){t.stopPropagation();const e=new CustomEvent("on-setting",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return r.e`
      <div class="i-side2-header ${this.borderBottom?"border-bottom":""}">
        <slot name="content">
          <div class="default-content">
            <div class="default-title">${this.title}</div>
            ${this.showSetting?r.e`
                  <div class="default-setting" @click=${this.handleSetting}>
                    <i-svg class="default-setting-btn" src="${zi.a}"></i-svg>
                  </div>
                `:""}
          </div>
        </slot>
        <slot name="setting"></slot>
      </div>
    `}};Ui.styles=r.b`
    .i-side2-header {
      height: var(--side-header-height);
      box-sizing: border-box;
      border-bottom: 1px solid transparent;
      background-color: #fff;
    }

    .border-bottom {
      border-bottom-color: rgb(239, 239, 239);
    }
    .default-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 30px;
    }

    .default-title {
      font-size: 27px;
      color: rgb(51, 51, 51);
    }
    .default-setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      margin-right: 23px;
      transition: all ease 0.2s;
      border-radius: 6px;
      cursor: pointer;
      transform: translateZ(10px);
    }
    .default-setting:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    :host(.setting-active) .default-setting {
      background: rgba(0, 0, 0, 0.05);
    }
    .default-setting-btn {
      width: 28px;
      height: 28px;
    }
    .default-setting-btn:hover {
      opacity: 0.8;
    }
  `,Bi([Object(r.g)({type:String})],Ui.prototype,"title",void 0),Bi([Object(r.g)({type:Boolean})],Ui.prototype,"borderBottom",void 0),Bi([Object(r.g)({type:Boolean})],Ui.prototype,"showSetting",void 0),Ui=Bi([Object(r.c)("i-side2-header")],Ui);var Fi=i(484),Wi=r.b`button {
  border: none;
  background: none;
  outline: none;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
.tips {
  padding: 24px 30px;
  height: 35px;
}
.tips > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.tips > div > span {
  font-size: 12px;
  color: #999999;
  cursor: text;
}
.tips i-svg {
  width: 20px;
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: column;
  height: calc(100% - var(--side-header-height));
  overflow: hidden;
}
.container .main-list {
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  padding-left: 30px;
  overflow-x: hidden;
}
.container .side-weather-list {
  width: 360px;
}
.unit-setting-wrapper {
  box-sizing: border-box;
  position: absolute;
  top: 90px;
  width: 360px;
  height: 76px;
  padding: 0 24px;
  left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 9;
  border-radius: 6px;
}
.unit-setting-wrapper.hide {
  display: none;
}
.unit-setting-wrapper .unit {
  font-size: 20px;
  color: #999999;
}
.unit-setting-wrapper .unit .active {
  color: #333333;
}
.unit-setting-wrapper infinito-button {
  width: auto;
  height: auto;
}
/* weather-list */
.empty {
  margin: 75px 0 50px;
}
.empty img {
  display: block;
  margin: 0 auto;
  width: 86px;
  height: 86px;
}
.empty img + p {
  font-size: 14px;
  color: #999;
  text-align: center;
}
.item {
  box-sizing: border-box;
  padding: 12px 0;
}
.sort-item.hide {
  animation: hide 300ms 0s ease forwards;
}
@keyframes hide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200%);
  }
}
/* weather-item */
weather-item {
  display: block;
}
.drag-item {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  width: 360px;
  height: 99px;
  pointer-events: none;
  cursor: pointer;
}
.drag-item i-dot-expanded {
  opacity: 1;
}
.side-weather-item {
  position: relative;
  box-sizing: border-box;
  background: #0f7cff;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
}
.side-weather-item:hover i-dot-expanded {
  opacity: 1;
}
.side-weather-item.hide {
  animation: hide 300ms 0s ease forwards;
}
.side-weather-item .head-panel {
  box-sizing: border-box;
  position: relative;
  height: 99px;
  padding: 0 6px 0 20px;
}
.side-weather-item .head-panel .delete-btn {
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
  transition: all 300ms;
  cursor: pointer;
}
.side-weather-item .head-panel .delete-btn img {
  width: 24px;
}
.side-weather-item .head-panel .drag-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 300ms;
}
.side-weather-item .head-panel .drag-btn img {
  width: 14px;
  height: 14px;
}
.side-weather-item .head-panel .hidden {
  opacity: 0;
}
.side-weather-item .info-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #fff;
}
.side-weather-item .info-content .left {
  flex: 1;
  overflow: hidden;
  margin-right: 30px;
}
.side-weather-item .info-content .left .city-name {
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 400;
}
.side-weather-item .info-content .left .weather-status-wrapper {
  display: flex;
  align-items: center;
}
.side-weather-item .info-content .left .weather-status-wrapper .weather-status {
  font-size: 12px;
  font-weight: 300;
}
.side-weather-item .info-content .left .weather-status-wrapper .icon-tmp {
  width: 30px;
  height: 30px;
  margin-right: 6px;
  margin-left: -2px;
}
.side-weather-item .info-content .left .weather-status-wrapper .icon-tmp img {
  width: 100%;
  height: 100%;
}
.side-weather-item .info-content .right {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;
}
.side-weather-item .info-content .right .temp {
  font-family: PingFangSC-Thin, PingFang SC;
  font-size: 42px;
  font-weight: 100;
  color: #fff;
}
.side-weather-item .body-panel {
  height: 0;
  overflow: hidden;
}
.side-weather-item .body-panel.open {
  animation: open 300ms 0s ease forwards;
}
.side-weather-item .body-panel.close {
  animation: close 300ms 0s ease forwards;
}
.side-weather-item .body-panel.hidden {
  height: 0;
}
.side-weather-item ul {
  display: flex;
  margin: 0;
  padding: 0;
  padding-top: 23px;
  box-sizing: border-box;
}
.side-weather-item ul li {
  width: 25%;
  list-style: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side-weather-item ul li .date {
  margin-bottom: 16px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.side-weather-item ul li img {
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  margin-bottom: 12px;
}
.side-weather-item ul li .temp {
  margin-bottom: 27px;
  font-size: 12px;
}
.side-weather-item ul li .detail-name {
  margin-bottom: 8px;
  font-size: 12px;
  text-align: center;
}
.side-weather-item ul li .detail-num {
  font-size: 12px;
}
i-dot-expanded {
  margin-left: 6px;
  margin-bottom: auto;
  margin-top: 10px;
  --dot-color: #fff;
  --dot-hover: rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.3s;
  outline: none;
}
i-dot-expanded:focus {
  opacity: 1;
  background: var(--dot-hover);
}
@keyframes open {
  from {
    height: 0;
  }
  to {
    height: 310px;
  }
}
@keyframes close {
  from {
    height: 310px;
  }
  to {
    height: 0;
  }
}
@keyframes hide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200%);
  }
}
`,Hi=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let qi=class extends a.a{constructor(){super(...arguments),this.store=s.weatherStore,this.parentEle=this.parentElement}_slice(t,e=0,i=4){return t.slice(e,i)}renderDate(t){let e="";switch(new Date(t).getDay()){case 0:e=""+Object(Q.i18n)("sun");break;case 1:e=""+Object(Q.i18n)("mon");break;case 2:e=""+Object(Q.i18n)("tue");break;case 3:e=""+Object(Q.i18n)("wed");break;case 4:e=""+Object(Q.i18n)("thu");break;case 5:e=""+Object(Q.i18n)("fri");break;default:e=""+Object(Q.i18n)("sat")}return e}renderTemp(t){return"celsius"===this.store.unit?t:Math.floor(1.8*t+32)}handleToggle(t){t.preventDefault(),t.stopPropagation(),"true"===this.open?this.open="false":this.open="true"}delete(t,e){this.dispatchEvent(new CustomEvent("on-delete",{detail:{cid:e},bubbles:!0,composed:!0}))}toTop(t,e){this.store.toTop(this.cid,e)}render(){var t,e,i,o,n;const a=this.store.formateList.filter(t=>t.cid===this.cid),{name:s="",items:l=[],cid:c="",top:p=0}=a.length?a[0]:{},d=c===(null===(t=this.store.formateList[0])||void 0===t?void 0:t.cid);return r.e`
      <div class="side-weather-item" style="background: ${null===(e=null==l?void 0:l[0])||void 0===e?void 0:e._bgColor}">
        <div
          class="head-panel"
          @click="${this.handleToggle}"
        >
          <div class="info-content">
            <div class="left">
              <h4 class="city-name">${s}</h4>
              <div class="weather-status-wrapper">
                <div class="icon-tmp">
                  <img
                    draggable="false"
                    src="${null===(i=null==l?void 0:l[0])||void 0===i?void 0:i._bgImg}"
                    @dragstart=${t=>t.preventDefault()}
                  />
                </div>
                <p class="weather-status">${null===(o=null==l?void 0:l[0])||void 0===o?void 0:o._text}</p>
              </div>
            </div>
            <div class="right">
              <div class="temp">${this.renderTemp(null===(n=null==l?void 0:l[0])||void 0===n?void 0:n.tmpMax)}</div>
              <i-dot-expanded>
                ${d?null:r.e`
                      <li class="weather-dot-item" @click=${t=>this.toTop(t,p)}>
                        ${Object(Q.i18n)("set_top")}
                      </li>
                    `}
                <li class="weather-dot-item" @click="${t=>this.delete(t,c)}">${Object(Q.i18n)("del_folder")}</li>
              </i-dot-expanded>
            </div>
          </div>
        </div>
        <div
          class="body-panel"
          class=${Object(G.a)({"body-panel":!0,open:"true"===this.open,close:"false"===this.open})}
          @click=${this.handleToggle}
        >
          <ul>
            ${this._slice(l).map(t=>r.e`
                <li>
                  <div class="date">${this.renderDate(t.time)}</div>
                  <img
                    draggable="false"
                    src="${t._bgImg}"
                    @dragstart=${t=>t.preventDefault()}
                  />
                  <div class="temp">${this.renderTemp(t.tmpMin)}/${this.renderTemp(t.tmpMax)}</div>
                  <div class="detail-name">${Object(Q.i18n)("wind_force")}</div>
                  <div class="detail-name">${t.windScale?t.windScale:Object(Q.i18n)("no_data")}</div>
                  <div class="detail-name">${Object(Q.i18n)("relative_humidity")}</div>
                  <div class="detail-name">${t.humidity?t.humidity+"%":Object(Q.i18n)("no_data")}</div>
                  <div class="detail-name">${Object(Q.i18n)("air_pressure")}</div>
                  <div class="detail-num">${t.pressure?t.pressure+" hPa":Object(Q.i18n)("no_data")}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}createRenderRoot(){return this}};qi.styles=Wi,Hi([Object(r.h)(".body-panel")],qi.prototype,"bodyPanel",void 0),Hi([Object(r.g)({type:String,reflect:!0})],qi.prototype,"cid",void 0),Hi([Object(r.g)({type:String,reflect:!0})],qi.prototype,"open",void 0),qi=Hi([Object(r.c)("weather-item")],qi);var Vi=i(646),Yi=i.n(Vi),Xi=i(540),Gi=i.n(Xi),Ki=i(647),Qi=i.n(Ki),Ji=i(648),Zi=i.n(Ji),to=i(649),eo=i.n(to),io=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let oo=class extends a.a{constructor(){super(),this.store=s.weatherStore,this.selectedIdx=-1,document.addEventListener("keydown",t=>{const{citys:e}=this.store,i=t.keyCode;if(40===i||38===i){if(this.searchEle.blur(),e.length<1)return;for(const t in e)this.store.changeSelected(Number(t),!1);40===i?(this.selectedIdx<e.length-1&&this.selectedIdx++,this.scoll(this.selectedIdx,"down",!1)):(this.selectedIdx>0&&(this.selectedIdx--,this.scoll(this.selectedIdx,"up",!1)),-1===this.selectedIdx&&(this.selectedIdx=e.length-1,this.scoll(this.selectedIdx,"up",!0))),this.store.changeSelected(this.selectedIdx,!0)}if(13===i){const t=this.store.citys[this.selectedIdx];t&&this.addToLocal(t.cid,t.city)}})}scoll(t,e,i){const o=this.shadowRoot.querySelector(".list ul"),n=o.offsetTop;"up"===e&&t<5&&(o.scrollTop-=30),"down"===e&&t>5&&(o.scrollTop+=80),"up"===e&&i&&(o.scrollTop=n)}async handleSearch(t){const e=t.detail.text;await this.store.searchCitys(e),this.selectedIdx=-1}async reload(){const t=this.searchEle.value;await this.store.searchCitys(t),this.selectedIdx=-1}clear(){this.store.searchCitys("")}async addToLocal(t,e){try{await this.store.addCity(t,e),this.searchEle.clear()}catch(t){it.message.error(t.message)}}close(){this.store.closeModal(),this.searchEle.clear()}updated(){this.store.isShowModal?this.searchEle.focus():this.searchEle.clear()}render(){return r.e` <div class="box">
      <!-- <i-svg class="close" src="${Yi.a}" @click="${this.close}"></i-svg> -->
      <div class="search-container">
        <span class="title">${Object(Q.i18n)("add_city")}</span>
        <div class="search-wrapper">
          <i-search
            placeholder="${Object(Q.i18n)("input_city")}"
            @i-search="${c.a.debounce(this.handleSearch,200)}"
            @i-clear=${this.clear}
          >
          </i-search>
        </div>
        <div class="list">
          <ul class="global-scrollbar">
            ${"none"!==this.store.searchState?this.renderSearchList():this.renderLocaleData()}
          </ul>
        </div>
      </div>
    </div>`}renderLocaleData(){const{localData:t,list:e}=this.store;if(!Object.keys(t||{}).length)return null;const{cid:i,city:o,country:n,selected:a}=t;return e.some(t=>t.cid===i)?null:r.e`
      <li class="default ${a?"selected":""}" @click="${()=>this.addToLocal(i,o)}">
        <div class="padding-box">
          <div class="pre">
            <i-svg class="location-icon" src="${Qi.a}"></i-svg>
            <span>${o}，${n}，${i}</span>
          </div>
        </div>
      </li>
    `}renderSearchList(){const{citys:t,searchState:e}=this.store;return"ing"===e?r.e`
        <div class="no-data">
          <i-svg class="empty-icon" src="${Zi.a}"></i-svg>
          <p>${Object(Q.i18n)("searching")}</p>
        </div>
      `:"done"===e?t.length?r.e`
        ${t.map(t=>r.e`
            <li
              class="default ${t.selected?"selected":""} ${t.isAdded?"disabled":""}"
              @click="${()=>this.addToLocal(t.cid,t.city)}"
            >
              <div class="padding-box">
                <div class="pre">
                  <span>${t.city}，${t.country}，${t.cid.substring(0,2)}</span>
                </div>
              </div>
            </li>
          `)}
      `:r.e`
          <div class="no-data">
            <i-svg class="empty-icon" src="${Gi.a}"></i-svg>
            <p>${Object(Q.i18n)("no_search_result")}</p>
          </div>
        `:"error"===e?r.e`
        <div class="no-data">
          <i-svg class="empty-icon" src="${eo.a}"></i-svg>
          <p>${Object(Q.i18n)("search_error")} <span class="reload" @click=${this.reload}>${Object(Q.i18n)("reload")}</span></p>
        </div>
      `:void 0}};oo.styles=[S.a,r.b`
      :host {
        display: block;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style: none;
      }
      .box {
        display: block;
        width: 410px;
        max-height: 540px;
        min-height: 400px;
        height: 60vh;
        background: white;
        border-radius: 6px;
      }
      .close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 14px;
        height: 14px;
        cursor: pointer;
        transition: opacity 0.3s;
      }
      .close:hover {
        opacity: 0.4;
      }
      .search-container {
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        width: 100%;
        height: 100%;
        padding: 40px 0;
      }
      .search-wrapper {
        padding: 0 30px;
      }
      .list {
        margin-top: 8px;
        flex: 1;
        overflow: hidden;
      }
      .list ul {
        height: 100%;
        overflow-y: auto;
      }
      .list li {
        margin: 0;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 0 30px;
      }
      .list li:hover {
        background: #f7f7f7;
      }
      .list .selected {
        background: #f7f7f7;
      }
      .list .selected span,
      .list .selected i-svg {
        color: #333 !important;
        font-weight: 500 !important;
      }
      .list li:hover .list li .padding-box {
        border-color: #f7f7f7 !important;
      }
      .list .padding-box i-svg {
        width: 22px;
        color: rgb(101, 101, 101);
        margin-right: 8px;
      }
      .list .padding-box span {
        color: #999;
      }
      .list .disabled span {
        color: rgba(0, 0, 0, 0.4);
      }
      .list .disabled {
        cursor: not-allowed;
      }
      .list .padding-box .location-icon {
        width: 14px;
      }
      .list li .padding-box {
        display: flex;
        width: 350px;
        border-bottom: 1px solid #f7f7f7;
        height: 100%;
        align-items: center;
        justify-content: space-between;
      }
      .list li .padding-box .pre {
        display: flex;
        align-items: center;
      }
      .list li:hover span,
      .list li:hover i-svg {
        color: #333 !important;
      }
      .list .disabled:hover span.list .disabled:hover i-svg {
        color: rgba(0, 0, 0, 0.4);
      }
      .title {
        display: block;
        width: 100%;
        margin-bottom: 30px;
        color: #333;
        font-size: 20px;
        text-align: center;
      }
      .no-data {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #656565;
      }
      .no-data .empty-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
      }
      .no-data .reload {
        color: #333;
        cursor: pointer;
      }
    `],io([Object(r.g)({type:Number})],oo.prototype,"selectedIdx",void 0),io([Object(r.h)("i-search")],oo.prototype,"searchEle",void 0),oo=io([Object(r.c)("add-weather-modal")],oo);var no=i(650),ro=i.n(no),ao=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let so=class extends a.a{constructor(){super(...arguments),this.store=s.weatherStore,this.flipping=!1,this.cloneEle=null,this.dragOffsetY=0,this.dropTime=0,this.endtime=0,this.startMove=!1,this.dragId=null,this.sortedList=[],this.opt="",this.itemHeight=99*s.settingStore.sideRatio,this.dragStart=({y:t,dragElement:e})=>{this.weatherMainContent.style.cursor="pointer";this.weatherWrapper.querySelectorAll(".item").forEach(t=>{t.querySelector("weather-item").removeAttribute("open")});const{top:i}=e.getBoundingClientRect();if(this.dragOffsetY=t-i>this.itemHeight?this.itemHeight:t-i,this.dragOffsetY=this.dragOffsetY<0?0:this.dragOffsetY,this.dragEndTimer&&(clearTimeout(this.dragEndTimer),this.dragEndTimer=void 0),!this.cloneEle){this.cloneEle=e.cloneNode(!0),this.cloneEle.className="drag-item";let t=document.body.style.getPropertyValue("--top-bar-height");t=Number(t.substring(0,t.length-2)),this.cloneEle.style.top=i/s.settingStore.sideRatio-t/s.settingStore.sideRatio+"px",this.cloneEle.dataset.id=e.dataset.id,this.weatherWrapper.appendChild(this.cloneEle),this.dragId=this.cloneEle.dataset.id}e.style.opacity=".4"},this.dragMove=({y:t})=>{let e=document.body.style.getPropertyValue("--top-bar-height");e=Number(e.substring(0,e.length-2)),this.cloneEle&&(this.cloneEle.style.top=(t-this.dragOffsetY)/s.settingStore.sideRatio-e+"px")},this.dragEnd=()=>{let t;if(this.startMove=!1,!this.cloneEle)return;const e=this.cloneEle.dataset.id;let i=document.body.style.getPropertyValue("--top-bar-height");i=Number(i.substring(0,i.length-2)),this.endtime=Date.now();if(this.endtime-this.dropTime>150){this.weatherWrapper.querySelectorAll(".weather-drag").forEach(o=>{if(o.dataset.id===e){const e=o.getBoundingClientRect().top;t=e/s.settingStore.sideRatio-i/s.settingStore.sideRatio}}),this.cloneEle.style.transition="all 0.3s ease-out",this.cloneEle.style.top=t+"px",this.dragEndTimer=setTimeout(()=>{this.cloneEle&&(this.weatherWrapper.removeChild(this.cloneEle),this.cloneEle=null,this.dragId=null),this.dragEndTimer=void 0},300)}else this.weatherWrapper.removeChild(this.cloneEle),this.cloneEle=null,this.dragId=null;this.weatherWrapper.querySelectorAll(".weather-drag").forEach(t=>{t.style.opacity="1"}),this.weatherMainContent.style.cursor="auto"},this.dragDrop=async({dropElement:t})=>{if(this.flipping)return;if(!this.cloneEle)return;this.dropTime=Date.now();const e=t.dataset.id,i=this.cloneEle.dataset.id;if(this.store.changeIndex(i,e),await this.updateComplete,e!==i){this.weatherWrapper.querySelectorAll(".weather-drag").forEach(t=>{const e=t.dataset.id;t.style.opacity=e===i?".4":"1"})}},this.closeModal=()=>{this.store.closeModal()}}firstUpdated(){this.initDrag();let t=300;s.settingStore.sideScaleRatio>1&&(t*=s.settingStore.sideScaleRatio),this.flip=new X({root:this.weatherWrapper,duration:t}),this.flip.read(),window.addEventListener("click",()=>this.store.closeSetting())}update(t){this.flip&&this.flip.read(),super.update(t)}updated(){this.flipping=!0,"delete"!==this.opt&&this.flip.play({props:["position"]}).then(()=>{this.flipping=!1})}initDrag(){new Ze({dragRoot:this,dragSelector:".weather-drag",dropRoot:this.shadowRoot,dropSelector:".weather-drop",dropLine:"y"}).subscribe(t=>{switch(t.type){case"dragStart":this.startMove=!1;break;case"dragMove":!this.startMove&&t.payload.startMove?(this.startMove=!0,this.dragStart(t.payload)):t.payload.startMove&&(this.opt="other",this.dragMove(t.payload));break;case"drop":this.dragDrop(t.payload);break;case"dragEnd":this.dragEnd()}})}handleSetting(t){t.stopPropagation(),this.store.toggleSetting()}changeUnit(t){t.stopPropagation(),this.store.changeUnit()}handleTabClose(){this.weatherWrapper.parentElement.scrollTop=0;const t=this.weatherWrapper.querySelectorAll(".item");t.length&&setTimeout(()=>{t.forEach(t=>{t.querySelector("weather-item").removeAttribute("open")})},500)}afterHide(){this.handleTabClose()}render(){const{isShowModal:t,unit:e,isShowSetting:i,formateList:o,lastUpdated:n}=this.store;return r.e`
      <i-side2-header
        class="weather-drop"
        class=${Object(G.a)({"weather-drop":!0,"setting-active":i})}
        data-id="top"
        .showSetting=${!0}
        .title="${Object(Q.i18n)("weather")}"
        @on-setting="${this.handleSetting}"
      >
        <div
          slot="setting"
          style=${Object(Fi.a)({display:i?"block":"none",position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px","z-index":"8"})}
        >
          <div class="unit-setting-wrapper ${i?"":"hide"}" @click=${t=>t.stopPropagation()}>
            <div style="display:${"celsius"!==e?"flex":"none"}" class="unit">
              C/<span class="active">F</span>
            </div>
            <div style="display:${"celsius"===e?"flex":"none"}" class="unit">
              <span class="active">C</span>/F
            </div>
            <infinito-button @click="${this.changeUnit}" .scaleRatio=${s.settingStore.sideScaleRatio}>
              ${Object(Q.i18n)("switch_to")} ${"celsius"===e?""+Object(Q.i18n)("fahrenheit"):""+Object(Q.i18n)("celsius")}
            </infinito-button>
          </div>
        </div>
      </i-side2-header>
      <div class="container">
        <div class="last_time_update weather-drop" data-id="top">
          <span>${Object(Q.i18n)("last_time_update")}: ${c.a.fmtTime(n)}</span>
        </div>
        <div class="global-scrollbar main-list weather-drop" id="weather-main-content" data-id="bottom">
          <div class="side-weather-list" style="position: relative;">
            ${o.length?this.renderCityList():r.e`
                  <div class="empty">
                    <img src=${ro.a} />
                    <p>${Object(Q.i18n)("weather_empty")}</p>
                  </div>
                `}
          </div>
          <infinito-button class="add-city" @click="${this.addCity}" .scaleRatio=${s.settingStore.sideScaleRatio}
            >${Object(Q.i18n)("add_city")}</infinito-button
          >
        </div>
      </div>
      <infinito-portal-entrance destination="weather">
        <infinito-modal .open=${t} style="--modal-padding: 0;" .onCancel="${this.closeModal}">
          <div slot="body">
            <add-weather-modal></add-weather-modal>
          </div>
        </infinito-modal>
      </infinito-portal-entrance>
    `}renderCityList(){const{formateList:t}=this.store;return r.e`
      ${t.map(t=>r.e`
            <div class="item sort-item weather-drop" data-id=${t.cid} flipkey=${t.cid}>
              <weather-item
                class="weather-drag"
                .cid=${t.cid}
                data-id=${t.cid}
                @on-delete=${this.handleDelete}
              ></weather-item>
            </div>
          `)}
    `}async handleDelete(t){this.opt="delete",t.target.parentNode.classList.add("hide"),setTimeout(()=>{this.store.deleteCityWeather(t.detail.cid);this.weatherWrapper.querySelectorAll(".sort-item").forEach(t=>t.classList.remove("hide"))},200)}addCity(){this.store.initLocal(),this.store.openModal()}};so.styles=[Wi,S.a,r.b`
      :host {
        display: block;
        height: 100%;
        background-color: #fff;
      }
      .last_time_update {
        padding: 24px 30px;
        color: #999;
        font-size: 12px;
      }
      .add-city {
        --border-color: #efefef;
        --button-color: #efefef;
        --hover-color: #dfdfdf;
        --hover-font-color: #333;
        display: block;
        width: 360px;
        height: 52px;
        margin: 12px 0 15px 0;
      }
    `],ao([Object(r.f)()],so.prototype,"dragId",void 0),ao([Object(r.h)(".drag-fake-wrapper")],so.prototype,"dragFakeWrapper",void 0),ao([Object(r.h)("#weather-main-content")],so.prototype,"weatherMainContent",void 0),ao([Object(r.h)(".side-weather-list")],so.prototype,"weatherWrapper",void 0),ao([Object(r.h)(".main-list")],so.prototype,"mainWrapper",void 0),ao([Object(r.g)({type:Array})],so.prototype,"sortedList",void 0),ao([Object(r.g)({type:String})],so.prototype,"opt",void 0),so=ao([Object(r.c)("side-weather")],so);var lo=r.b`.side-todos-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(100% - var(--side-header-height));
  overflow: auto;
  padding-top: 30px;
  box-sizing: border-box;
}
.side-todos-container .list {
  flex: 1;
}
.side-todos-remove {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
}
.side-todos-remove button {
  padding: 0;
  border: none;
  background: none;
  color: #a2a2a2;
  outline: none;
  cursor: not-allowed;
  font-weight: 500;
}
.side-todos-remove button:hover {
  opacity: 0.7;
}
.side-todos-remove button.allow {
  color: #333333;
  cursor: pointer;
}
.side-todos-input-wrapper {
  position: relative;
  padding: 0 30px;
}
.side-todos-input-wrapper .side-todos-input {
  box-sizing: border-box;
  width: 360px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #999;
  border-radius: 6px;
  padding: 12px;
  padding-right: 50px;
  outline: none;
  color: #333;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.side-todos-input-wrapper .side-todos-input:hover {
  border-color: #333;
}
.side-todos-input-wrapper .side-todos-input:focus {
  border-color: #333;
}
.side-todos-input-wrapper .icon {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 18px;
  right: 50px;
  cursor: pointer;
}
.side-todos-input-wrapper .icon .clear-icon {
  width: 100%;
}
/**
 * checkbox 样式
 */
.i-checkbox {
  position: relative;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin: 3px 13px 0 0;
  border: 2px solid #333;
  border-radius: 6px;
}
.i-checkbox::after {
  content: ' ';
  position: absolute;
  top: 50%;
  left: 2px;
  display: table;
  width: 4px;
  height: 7px;
  border-top: 0;
  border-left: 0;
  opacity: 0;
  transform: rotate(45deg) scale(0) translate(-50%, -50%);
}
.i-checkbox.i-checkbox-checked {
  border-color: #999;
}
.i-checkbox.i-checkbox-checked::after {
  border: 2px solid #999;
  border-top: 0;
  border-left: 0;
  opacity: 1;
  transform: rotate(45deg) scale(1) translate(-50%, -50%);
}
.i-checkbox .i-checkbox-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
}
/**
 * side-todo-item
 */
.side-todos-item {
  box-sizing: border-box;
  position: relative;
  padding: 24px 30px;
  min-height: 72px;
  cursor: pointer;
}
.side-todos-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 30px;
  right: 30px;
  height: 1px;
  background: #eeeeee;
}
.side-todos-item.normal:hover {
  background: #f6f6f6;
}
.side-todos-item.normal:hover .dot-container {
  opacity: 1;
}
.side-todos-item.normal:hover .side-todos-item-text {
  color: #999;
}
.side-todos-item.normal:focus-within {
  background: #f6f6f6;
}
.side-todos-item.normal:focus-within .dot-container {
  opacity: 1;
}
.side-todos-item.done .side-todos-item-text {
  text-decoration: line-through;
  color: #999;
}
.side-todos-item.done .date {
  color: #999 !important;
}
.side-todos-item .content {
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.side-todos-item .side-todos-item-text {
  font-family: PingFangSC-Regular, PingFang SC;
  box-sizing: border-box;
  flex: 1;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  transition: all 0.1s ease-in-out;
  line-height: 22px;
  margin: 0;
  padding: 0;
  max-width: 300px;
  max-height: 90px;
  word-wrap: break-word;
  word-break: break-all;
}
.side-todos-item .side-todos-item-text.pure-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
.side-todos-item .side-todos-item-text.global-scrollbar.edit-text {
  overflow-x: hidden;
  width: 100%;
  cursor: auto;
  outline: none;
  border: none;
  background: none;
  overflow: auto;
  resize: none;
}
.side-todos-item .date {
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  bottom: 8px;
  font-size: 12px;
  color: #333;
  font-weight: 400;
  cursor: default;
}
.side-todos-item .date.red {
  color: #ea4747;
}
.side-todos-item .date > img {
  display: block;
  width: 16px;
  margin-right: 7px;
}
.side-todos-item .date > i {
  font-style: normal;
}
.side-todos-item .dot-container {
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  padding: 6px 0;
  margin-left: 12px;
  border-radius: 4px;
  margin-top: -10px;
  opacity: 0;
  transition: opacity 0.3s;
  outline: none;
}
.side-todos-item .dot-container:hover {
  background: rgba(0, 0, 0, 0.15);
}
.side-todos-item .dot-container:focus,
.side-todos-item .dot-container.active {
  opacity: 1;
  background: rgba(0, 0, 0, 0.15);
}
.side-todos-item .dot-container > span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #999;
}
.side-todos-item .dot-container ul {
  display: none;
}
.side-todos-lists {
  width: 100%;
  height: auto;
}
`;function co(t,e){const i=[];if(void 0===t||void 0===e){const i=new Date;t=i.getFullYear(),e=i.getMonth()+1}const o=new Date(t,e-1,1);let n=o.getDay();0===n&&(n=7),t=o.getFullYear(),e=o.getMonth()+1;const r=new Date(t,e-1,0).getDate(),a=n,s=new Date(t,e,0).getDate();for(let o=0;o<42;o++){const n=o+1-a;let l=n,c=e;n<=0?(c=e-1,l=r+n):n>s&&(c=e+1,l-=s),0===c&&(c=12),13===c&&(c=1),i.push({year:t,month:c,date:n,showDate:l})}return{year:t,month:e,days:i}}var po=i(651),ho=i.n(po),uo=i(652),go=i.n(uo),fo=i(653),mo=i.n(fo),bo=r.b`:host {
  --main-bg-color: #fff;
  --input-color: rgba(0, 0, 0, 0.65);
  --border-color: #c9c9c9;
  --th-color: rgba(0, 0, 0, 0.85);
  --td-color: var(--input-color);
  --td--prevmonth-color: rgba(0, 0, 0, 0.25);
}
.datepicker-wrapper {
  position: relative;
  width: 280px;
  height: 402px;
  background: var(--main-bg-color);
  border-radius: 6px;
}
.datepicker-header {
  padding: 16px;
  padding-bottom: 0;
  border-bottom: 1px solid var(--border-color);
}
.h-container {
  box-sizing: border-box;
  display: flex;
  width: 248px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background: var(--main-bg-color);
}
.input-control {
  position: relative;
  flex: 1;
}
.icon {
  display: none;
  position: absolute;
  right: 5px;
  top: 3px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
.icon.show {
  display: block;
}
.icon:hover {
  opacity: 0.5;
}
.icon img {
  width: 100%;
  height: 100%;
}
.spacer {
  width: 1px;
  height: 12px;
  margin-top: 7px;
  background: var(--border-color);
}
input {
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  color: var(--input-color);
  outline: none;
  border: none;
  background: none;
  box-sizing: border-box;
}
.year-month-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 8px;
}
.arrow {
  cursor: pointer;
}
.arrow img {
  width: 12px;
  height: 12px;
}
.arrow:hover {
  opacity: 0.5;
}
.year-month {
  margin: 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
.datepicker-body {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
}
.datepicker-body table {
  width: 100%;
  border-collapse: collapse;
}
.datepicker-body th,
.datepicker-body td {
  height: 33px;
  line-height: 33px;
  text-align: center;
  padding: 0;
}
.datepicker-body th {
  color: var(--th-color);
  font-size: 14px;
  max-width: 34px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.datepicker-body td {
  font-size: 14px;
  cursor: pointer;
  color: var(--td-color);
}
.datepicker-body td.gray {
  color: var(--td--prevmonth-color);
}
.datepicker-body td.today {
  background: #eeeeee;
  border-radius: 2px;
}
.datepicker-body td.active {
  color: #fff;
  background: #333333;
  border-radius: 2px;
}
.datepicker-footer {
  display: flex;
  justify-content: center;
}
infinito-button {
  margin-top: 10px;
  width: 76px;
  height: 32px;
  background: #333333;
  box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}
.timer-dropdown {
  display: none;
  position: absolute;
  top: 44px;
  right: 16px;
  width: 123px;
  background: #fff;
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.timer-dropdown.show {
  display: block;
}
.timer-dropdown .body {
  display: flex;
}
.timer-dropdown .body .time-range-wrapper {
  box-sizing: border-box;
  flex: 1;
  height: 196px;
  overflow: auto;
}
.timer-dropdown .body .time-range-wrapper > div::after {
  content: '';
  display: block;
  height: 164px;
}
.timer-dropdown .body .time-range-wrapper .range-item {
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  padding-left: 16px;
  color: var(--td-color);
  transition: all 300ms ease-in-out;
  cursor: pointer;
  text-align: center;
  padding-left: 5px;
  box-sizing: border-box;
}
.timer-dropdown .body .time-range-wrapper .range-item.active {
  background: #f5f5f5;
}
.timer-dropdown .body .time-range-wrapper .range-item:hover {
  background: #f6f6f6;
}
.timer-dropdown .body .space {
  width: 1px;
  height: 196px;
  background: #efefef;
}
.timer-dropdown .header {
  box-sizing: border-box;
  display: flex;
  height: 38px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid #efefef;
}
.timer-dropdown .header .h-item {
  flex: 1;
}
`,yo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let vo=class extends r.a{constructor(){super(...arguments),this.HEIGHT=32,this.monthData={},this.choosedDate="",this.choosedTime="",this.choosedHour="",this.choosedMins="",this.showTime=!1,this.hours=[],this.mins=[],this.defaultDates={},this.showClearTime=!1}firstUpdated(){this.monthData=co(),this.datepickerWrapper.addEventListener("click",t=>{t.stopPropagation(),this.showTime=!1},!1);const{date:t,time:e,dueTimestamp:i}=this.defaultDates;if(this.choosedDate=t||this.format(new Date),this.choosedTime=e||"",this.choosedTime){const[t,e]=this.choosedTime.split(":");this.choosedHour=t,this.choosedMins=e}if(i)this.date=new Date(i);else{const e=c.a.internaDateToStan(t);e instanceof Date&&(this.date=new Date(e.getFullYear(),e.getMonth(),e.getDate(),+this.choosedHour,+this.choosedMins))}}updated(){const t=this.timeInput.value;this.showClearTime=!!t}setDefaultHour(){const t=(new Date).getHours();return t<=9?"0"+t:t}setDefaultMin(){const t=(new Date).getMinutes();return t<=9?"0"+t:t}async chooseTime(t){if(t.stopPropagation(),!this.choosedDate)return;this.showTime=!this.showTime;const{hours:e,mins:i}=function(){const t=[],e=[];for(let e=0;e<24;e++){const i=e<10?"0"+e:e;t.push(i)}for(let t=0;t<60;t++){const i=t<10?"0"+t:t;e.push(i)}return{hours:t,mins:e}}();this.hours=e,this.mins=i,this.choosedTime||(this.choosedHour=this.setDefaultHour()+"",this.choosedMins=this.setDefaultMin()+"",this.choosedTime=`${this.choosedHour}:${this.choosedMins}`,this.timeInput.value=this.choosedTime),await this.updateComplete,this.hoursPanel.scrollTop=Number(this.choosedHour)*this.HEIGHT,this.minsPanel.scrollTop=Number(this.choosedMins)*this.HEIGHT}selectHour(t,e){if(t.stopPropagation(),this.choosedHour=e,this.choosedTime){const t=this.choosedTime.split(":")[1];this.choosedTime=`${e}:${t}`,this.timeInput.value=`${e}:${t}`}else this.choosedTime=`${e}:${this.choosedMins}`,this.timeInput.value=`${e}:${this.choosedMins}`;this.hoursPanel.scrollTop=Number(e)*this.HEIGHT}selectMins(t,e){t.stopPropagation(),this.choosedMins=e,this.choosedTime=`${this.choosedHour}:${e}`,this.timeInput.value=`${this.choosedHour}:${e}`,this.minsPanel.scrollTop=Number(e)*this.HEIGHT,this.showTime=!1}listToMatrix(t,e){const i=[];for(let o=0,n=-1;o<t.length;o++)o%e==0&&(n++,i[n]=[]),i[n].push(t[o]);return i}format(t){return new Date(t).toLocaleDateString(l.B.lang)}changeMonth(t){const{monthData:{year:e,month:i}}=this;this.monthData=co(e,"prev"===t?i-1:i+1)}handleClick(t){const{classList:e,dataset:i}=t.target,o=this.shadowRoot.querySelectorAll("td");Array.from(o).map(t=>t.classList.remove("active")),e.add("active");const{monthData:{year:n,month:r}}=this,a=new Date(n,r-1,i.date);this.choosedDate=this.format(a),this.monthData.date=i.date}submit(t){t.stopPropagation(),void 0===this.monthData.date&&(this.monthData.date=(new Date).getDate()),this.choosedHour||(this.choosedHour=String(9));const e=new Date(this.monthData.year,this.monthData.month-1,this.monthData.date,+this.choosedHour,+this.choosedMins).valueOf();this.dispatchEvent(new CustomEvent("on-submit",{detail:{data:e},bubbles:!0,composed:!0}))}setClasses(t,e){const i=t=>t<=9?"0"+t:t;let{month:o,showDate:n}=e;o=i(o),n=i(n);const r=e.date<=0?e.year-1:e.year;let a=!1,s=!1;const l=c.a.internaDateToStan(t);l instanceof Date&&(a=Number(r)===l.getFullYear()&&Number(o)===l.getMonth()+1&&Number(n)===l.getDate());const p=new Date;s=Number(r)===p.getFullYear()&&Number(o)===p.getMonth()+1&&Number(n)===p.getDate();return{active:a,today:s}}render(){const{choosedDate:t,choosedTime:e,monthData:{year:i="",month:o="",days:n=[]},showTime:a,hours:s,mins:l}=this,c=this.listToMatrix(n,7);return r.e`
      <div class="datepicker-wrapper">
        <div class="datepicker-header">
          <div class="h-container">
            <div class="input-control">
              <input name="date" placeholder="${Object(Q.i18n)("select_date")}" readonly value="${t}" />
              <div
                class="icon ${t?"show":""}"
                @click="${t=>{t.stopPropagation(),this.choosedDate="",this.choosedTime="",this.showTime=!1,this.choosedHour=this.setDefaultHour()+"",this.choosedMins=this.setDefaultMin()+"",this.timeInput.value=""}}"
              >
                <img src="${mo.a}" />
              </div>
            </div>
            <div class="spacer"></div>
            <div class="input-control" @click="${t=>this.chooseTime(t)}">
              <input readonly id="timeInput" placeholder="${Object(Q.i18n)("select_time")}" value="${e}" />
              <div
                class="icon ${this.showClearTime?"show":""}"
                @click=${t=>{t.stopPropagation(),this.choosedTime="",this.choosedHour=this.setDefaultHour()+"",this.choosedMins=this.setDefaultMin()+"",this.timeInput.value="",this.showClearTime=!1}}
              >
                <img src="${mo.a}" />
              </div>
            </div>
          </div>
          <div class="year-month-wrapper">
            <div class="arrow left-arrow" @click="${()=>this.changeMonth("prev")}">
              <img src="${ho.a}" />
            </div>
            <div class="t">
              <h2 class="year-month">${Object(Q.i18n)("year_month_date",[i,Object(Q.i18n)("month_"+o)])}</h2>
            </div>
            <div class="arrow right-arrow" @click="${()=>this.changeMonth("next")}">
              <img src="${go.a}" />
            </div>
          </div>
        </div>
        <div class="datepicker-body">
          <table>
            <thead>
              <tr>
                <th title="${Object(Q.i18n)("sun_min")}">${Object(Q.i18n)("sun_min")}</th>
                <th title="${Object(Q.i18n)("mon_min")}">${Object(Q.i18n)("mon_min")}</th>
                <th title="${Object(Q.i18n)("tue_min")}">${Object(Q.i18n)("tue_min")}</th>
                <th title="${Object(Q.i18n)("wed_min")}">${Object(Q.i18n)("wed_min")}</th>
                <th title="${Object(Q.i18n)("thu_min")}">${Object(Q.i18n)("thu_min")}</th>
                <th title="${Object(Q.i18n)("fri_min")}">${Object(Q.i18n)("fri_min")}</th>
                <th title="${Object(Q.i18n)("sat_min")}">${Object(Q.i18n)("sat_min")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${c.length?c.map(e=>r.e`<tr>
                      ${e.map(e=>r.e`<td
                          data-date="${e.date}"
                          class="? 'today' : ''}"
                          class=${Object(G.a)(this.setClasses(t,e))}
                          @click="${t=>this.handleClick(t)}"
                        >
                          ${e.showDate}
                        </td>`)}
                    </tr>`):""}
            </tbody>
          </table>
        </div>
        <div class="datepicker-footer">
          <infinito-button primary @click="${t=>this.submit(t)}">${Object(Q.i18n)("done")}</infinito-button>
        </div>
        ${r.e`
          <div
            class=${Object(G.a)({"timer-dropdown":!0,show:a})}
          >
            <div class="header">
              <div class="h-item">${Object(Q.i18n)("hour")}</div>
              <div class="h-item">${Object(Q.i18n)("mins")}</div>
            </div>
            <div class="body">
              <div class="global-scrollbar time-range-wrapper hours-panel">
                <div>
                  ${s.length?s.map(t=>r.e` <div
                          class=${Object(G.a)({"range-item":!0,active:Number(t)===Number(this.choosedHour)})}
                          @click="${e=>this.selectHour(e,t)}"
                        >
                          ${t}
                        </div>`):""}
                </div>
              </div>
              <div class="space"></div>
              <div class="global-scrollbar time-range-wrapper mins-panel">
                <div>
                  ${l.length?l.map(t=>r.e` <div
                          class=${Object(G.a)({"range-item":!0,active:Number(t)===Number(this.choosedMins)})}
                          @click="${e=>this.selectMins(e,t)}"
                        >
                          ${t}
                        </div>`):""}
                </div>
              </div>
            </div>
          </div>
        `}
      </div>
    `}};vo.styles=[S.a,bo],yo([Object(r.h)(".datepicker-wrapper")],vo.prototype,"datepickerWrapper",void 0),yo([Object(r.h)("#timeInput")],vo.prototype,"timeInput",void 0),yo([Object(r.h)(".hours-panel")],vo.prototype,"hoursPanel",void 0),yo([Object(r.h)(".mins-panel")],vo.prototype,"minsPanel",void 0),yo([Object(r.g)({type:Object})],vo.prototype,"monthData",void 0),yo([Object(r.g)({type:String})],vo.prototype,"choosedDate",void 0),yo([Object(r.g)({type:String})],vo.prototype,"choosedTime",void 0),yo([Object(r.g)({type:String})],vo.prototype,"choosedHour",void 0),yo([Object(r.g)({type:String})],vo.prototype,"choosedMins",void 0),yo([Object(r.g)({type:Boolean})],vo.prototype,"showTime",void 0),yo([Object(r.g)({type:Array})],vo.prototype,"hours",void 0),yo([Object(r.g)({type:Array})],vo.prototype,"mins",void 0),yo([Object(r.g)({type:Object})],vo.prototype,"defaultDates",void 0),yo([Object(r.g)({type:Boolean})],vo.prototype,"showClearTime",void 0),yo([Object(r.f)()],vo.prototype,"date",void 0),vo=yo([Object(r.c)("i-datepicker")],vo);var wo=i(521),xo=i.n(wo),ko=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let _o=class extends r.a{constructor(){super(...arguments),this.isShowClear=!1}firstUpdated(){this.submit()}submit(){this.inputEle.addEventListener("keypress",t=>{13===t.keyCode&&(this.add(this.inputEle.value),this.inputEle.value="",this.isShowClear=!1)},!1)}add(t){this.dispatchEvent(new CustomEvent("on-submit",{detail:{text:t},bubbles:!0,composed:!0}))}focusing(t=!0){t&&this.inputEle.focus()}clear(t){this.inputEle.value="",this.focusing(t),this.isShowClear=!1}handleChange(t){t.target.value?this.isShowClear=!0:this.isShowClear=!1}render(){return r.e`
      <div class="side-todos-input-wrapper">
        <input
          placeholder="${Object(Q.i18n)("use_entry_key_add_todo_item")}"
          class="side-todos-input"
          maxlength="1000"
          @input=${this.handleChange}
        />
        ${this.isShowClear?r.e`
              <div class="icon">
                <img class="clear-icon" .src=${xo.a} @click=${()=>this.clear(!0)} />
              </div>
            `:null}
      </div>
    `}};_o.styles=lo,ko([Object(r.g)({type:Boolean})],_o.prototype,"isShowClear",void 0),ko([Object(r.h)("input")],_o.prototype,"inputEle",void 0),_o=ko([Object(r.c)("side-todo-input")],_o);var Oo=i(654),So=i.n(Oo),jo=i(655),$o=i.n(jo),Io=i(497),Co=r.b`.container {
  height: 100%;
  z-index: 100001;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.container[hidden] {
  display: none;
}
.container .top,
.container .bottom {
  flex-grow: 1;
}
.container .bottom {
  height: var(--modal-top, 15vh);
}
.body {
  width: 478px;
  padding: 30px;
  padding-bottom: 25px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.18);
  border-radius: 6px;
  position: relative;
  will-change: transform;
}
.body .close {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.2;
}
.body .close:hover {
  opacity: 0.4;
}
.title,
.text {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
.title {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #333;
}
.text {
  font-size: 11px;
  font-weight: 400;
  color: #ec414d;
  line-height: 20px;
  vertical-align: middle;
}
.text img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}
.footer {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
.footer infinito-button {
  width: 120px;
  height: 42px;
  --hover-color: #eee;
  --hover-font-color: #000;
}
.footer infinito-button[primary] {
  --hover-color: #000;
  --hover-font-color: #fff;
  width: 128px;
}
.footer infinito-button:not(:last-of-type) {
  margin-right: 20px;
}
`,To=i(656),Eo=i.n(To),Lo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Po=null,Ro=class extends r.a{constructor(){super(...arguments),this.defaultData={title:i18n("no_permission_title"),text:i18n("no_permission_text"),onConfirm:()=>{}},this.show=!1,this.title=this.defaultData.title,this.text=this.defaultData.text,this.onCancel=()=>{},this.onConfirm=()=>{}}static create(){if(Po)return Po;const t=document.body;return Po=document.createElement("i-permission-popup"),t.appendChild(Po),Po}shouldUpdate(t){return!t.has("show")||!1!==this.show||(setTimeout(()=>{this.requestUpdate()},1),!1)}updated(t){t.has("show")&&this.show&&(this.$container.animate([{opacity:"0"},{opacity:"1"}],{duration:300,easing:"ease-in"}),this.$body.animate([{opacity:"0",transform:"scale(0.8)"},{opacity:"1",transform:"none"}],{duration:300,easing:"ease-in"}))}toShow(t){this.show=!0;const e=Object.assign(Object.assign({},this.defaultData),t);this.title=e.title,this.text=e.text,this.onCancel=e.onCancel,this.onConfirm=e.onConfirm}toHide(){this.show=!1}render(){return r.e`
      <div class="container" .hidden="${!this.show}">
        <div class="top"></div>
        <section class="body">
          <span class="close" @click=${()=>this.toHide()}>
            <svg width="14px" height="14px" viewBox="0 0 14 14">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="1">
                <g transform="translate(-1086.000000, -226.000000)" fill="#333333" fill-rule="nonzero">
                  <g transform="translate(320.000000, 206.000000)">
                    <g>
                      <g transform="translate(766.000000, 20.000000)">
                        <g>
                          <path
                            d="M13.2303076,0.802251953 C12.8052342,0.377204963 12.1160812,0.377207829 11.6910113,0.802258354 L7.05672461,5.43633398 L7.05672461,5.43633398 L2.38977766,0.769621758 C1.96470002,0.344565503 1.27553537,0.344566517 0.850458984,0.769624023 C0.425408624,1.19465551 0.425393322,1.883783 0.850424806,2.30883336 C0.850436954,2.30884551 0.850449102,2.30885766 0.85046125,2.3088698 L5.5174082,6.97558203 L5.5174082,6.97558203 L0.866831437,11.6259476 C0.441760949,12.0509988 0.441745304,12.7401586 0.866796493,13.1652291 C0.866798899,13.1652315 0.866801305,13.1652339 0.866803711,13.1652363 C1.29186357,13.5903075 1.98103035,13.5903186 2.40610392,13.1652611 L7.05671094,8.51483008 L7.05671094,8.51483008 L11.6909746,13.1489765 C12.1160521,13.5740432 12.8052287,13.5740389 13.2303008,13.1489668 C13.6553632,12.7239044 13.6553632,12.034742 13.2303008,11.6096796 C13.2302959,11.6096747 13.230291,11.6096699 13.2302862,11.609665 L8.59602734,6.97558203 L8.59602734,6.97558203 L13.2303169,2.34146831 C13.6553572,1.91644415 13.6553703,1.22733077 13.2303461,0.802290481 C13.2303333,0.802277638 13.2303205,0.802264795 13.2303076,0.802251953 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>

          <div class="title">${this.title}</div>
          <div class="text">
            <img src=${Eo.a} width="14" />
            <span>${this.text}</span>
          </div>
          <div class="footer">
            <infinito-button
              @click="${()=>{this.toHide(),this.onConfirm()}}"
              primary
              >${i18n("confirm")}</infinito-button
            >
          </div>
        </section>
        <div class="bottom"></div>
      </div>
    `}};Ro.styles=Co,Lo([Object(r.g)({type:Boolean})],Ro.prototype,"show",void 0),Lo([Object(r.g)({type:String})],Ro.prototype,"title",void 0),Lo([Object(r.g)({type:String})],Ro.prototype,"text",void 0),Lo([Object(r.g)({attribute:!1})],Ro.prototype,"onCancel",void 0),Lo([Object(r.g)({attribute:!1})],Ro.prototype,"onConfirm",void 0),Lo([Object(r.h)(".container")],Ro.prototype,"$container",void 0),Lo([Object(r.h)(".body")],Ro.prototype,"$body",void 0),Ro=Lo([Object(r.c)("i-permission-popup")],Ro);var Do=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ao=class extends a.a{constructor(){super(...arguments),this.store=s.todoStore,this.timer=null,this.MAX_LENGTH=1e3,this.isExpired=!1,this.data={},this.index=0}handleDotClick(t){t.stopPropagation();const e=document.createElement("div");e.className="dot-wrapper";const i=document.createElement("div");i.className="infinity-modal";const o=t.currentTarget.querySelector("ul").cloneNode(!0);if(this.dotEle.classList.add("active"),e.appendChild(i),e.appendChild(o),document.body.appendChild(e),"DIV"===t.currentTarget.tagName){const e=t.currentTarget.getBoundingClientRect(),{bottom:i,right:n,top:r}=e,a=window.innerWidth,l=document.body.clientHeight;o.style.right=a-n+"px";const c=o.clientHeight,p=this.dotEle.clientHeight*s.settingStore.sideScaleRatio;o.style.top=r+c+p>=l?r-c+"px":i+"px"}o.addEventListener("click",async t=>{const i=t.target;if("LI"===i.tagName){const t=i.classList;if(document.body.removeChild(e),this.dotEle.classList.remove("active"),t.contains("edit")&&this.handleEdit(),t.contains("delete")&&this.delete(),t.contains("show")){if("denied"===Notification.permission)return void Ro.create().toShow();await Object(Io.a)(),this.dotEle.focus(),this.showDate()}t.contains("remove")&&this.remove()}}),i.addEventListener("click",()=>{this.dotEle.classList.remove("active"),document.body.removeChild(e)})}firstUpdated(){this.invalidTime()}startSchedule(){const{dueDate:t="",done:e}=this.data;t&&!e&&(this.timer=setInterval(()=>{this.invalidTime()},2e3))}removeSchedule(){clearInterval(this.timer)}updated(){var t;this.checkboxEle.checked=null===(t=this.data)||void 0===t?void 0:t.done,this.invalidTime()}invalidTime(){const{dueDate:t="",dueTime:e="",done:i,dueTimestamp:o=null}=this.data;if(i||!t)return;const n=e||"23:59";let r=!1;const a=+new Date;let s;if("number"==typeof o)s=o;else{const e=c.a.internaDateToStan(t);if(e instanceof Date){const[t,i]=n.split(":");s=+new Date(e.getFullYear(),e.getMonth(),e.getDate(),t,i)}}r=s<a,this.isExpired=r}renderCheckbox(){const t=this.data.done;return r.e`
      <span class=${Object(G.a)({"i-checkbox":!0,"i-checkbox-checked":t})}>
        <input
          type="checkbox"
          class="i-checkbox-input"
          .checked=${t}
          @change=${this.handleCheckbox}
          @click=${t=>t.stopPropagation()}
        />
      </span>
    `}renderDot(){const{done:t,dueDate:e=""}=this.data;return r.e`
      <div class="dot-container" @click=${this.handleDotClick} tabindex="0">
        <span></span>
        <span></span>
        <span></span>
        <ul class="dot-ul">
          ${t?null:r.e`
                <li class="opt-item show" @click=${this.showDate}>
                  ${e?i18n("change_remind_time"):i18n("set_remind_time")}
                </li>
                ${e?r.e`<li class="opt-item remove" @click=${this.remove}>${i18n("cancel_remind_time")}</li>`:null}
                <li class="opt-item edit" @click=${this.handleEdit}>${i18n("edit_content")}</li>
              `}
          <li class="opt-item delete" @click=${this.delete}>${i18n("del_folder")}</li>
        </ul>
      </div>
    `}renderDate(){const{dueDate:t="",dueTime:e=""}=this.data;return t||e?r.e`
        <span class=${Object(G.a)({date:!0,red:this.isExpired})} @click=${t=>t.stopPropagation()}>
          <img src="${$o.a}" />
          <i>${this.data.dueDate} ${this.data.dueTime}</i>
        </span>
      `:r.e``}render(){const{done:t,edit:e,text:i}=this.data,o={"side-todos-item":!0,done:t,edit:e,normal:!e};return r.e`
      ${e?r.e`
            <div class=${Object(G.a)(o)}>
              <div class="content">
                ${this.renderCheckbox()}
                <textarea
                  class="global-scrollbar side-todos-item-text edit-text"
                  @blur=${this.handleBlur}
                  @keydown=${this.handleKeyDown}
                  @keypress=${this.handleKeyPress}
                  @paste=${this.handleEditorPaste}
                  @click=${t=>t.stopPropagation()}
                >
${i}</textarea
                >
                ${this.renderDot()}
              </div>
              ${this.renderDate()}
            </div>
          `:r.e`
            <div class=${Object(G.a)(o)} @click=${this.toggle}>
              <div class="content">
                ${this.renderCheckbox()}
                <div class="side-todos-item-text pure-text">${i}</div>
                ${this.renderDot()}
              </div>
              ${this.renderDate()}
            </div>
          `}
    `}async handleEdit(){const t=this.textEle.clientHeight;this.store.edit(this.data.todoId),await this.updateComplete;const e=await this.editEle;if(e){if(e.style.height=t+10+"px",e.focus(),e.setSelectionRange){const t=2*e.value.length;setTimeout(()=>e.setSelectionRange(t,t),1)}else this.editEle.value=e.value;e.scrollTop=999999}}handleBlur(t){const e=t.target.value;e?(this.store.updateTodo(this.data.todoId,{text:e}),this.store.toggleState("done")):this.store.deleteTodo(this.data.todoId)}handleKeyDown(t){t.stopPropagation(),13!==t.keyCode&&27!==t.keyCode||(t.preventDefault(),this.store.updateTodo(this.data.todoId,{text:t.target.value}),this.store.toggleState("done"))}handleKeyPress(t){const e=t.target.value;if((null==e?void 0:e.length)>this.MAX_LENGTH)return it.message.error(i18n("limit_input_length")),t.stopPropagation(),t.preventDefault(),!1;t.stopPropagation(),So()(t.target),this.store.toggleState("editing")}handleEditorPaste(t){const e=t.target.value,i=(t.originalEvent||t).clipboardData.getData("text/plain");if((null==e?void 0:e.length)+(null==i?void 0:i.length)>this.MAX_LENGTH){it.message.error(i18n("limit_input_length")),t.stopPropagation(),t.preventDefault();const o=e+i;return t.target.value=o.substring(0,this.MAX_LENGTH),!1}t.stopPropagation(),So()(t.target),this.store.toggleState("editing")}showDate(){const t=document.createElement("div");t.className="dot-wrapper";const e=document.createElement("div");e.className="infinity-modal";const i=document.createElement("todo-tooltip");t.appendChild(e),t.appendChild(i),document.body.appendChild(t);const o=this.dotEle.getBoundingClientRect(),{top:n,left:r,width:a,height:s}=o;i.setAttribute("rect",JSON.stringify({top:n,left:r,width:a,height:s}));const{dueDate:l="",dueTime:c="",todoId:p,dueTimestamp:d}=this.data;i.setAttribute("time",JSON.stringify({dueDate:l,dueTime:c,dueTimestamp:d})),i.setAttribute("todoId",p),e.addEventListener("click",()=>document.body.removeChild(t))}remove(){this.store.removeTime(this.data.todoId)}delete(){this.store.deleteTodo(this.data.todoId)}handleCheckbox(){this.store.toggleTodo(this.data.todoId)}toggle(){"editing"!==this.store.currenetState&&this.handleCheckbox()}};Ao.styles=[S.a,lo],Do([Object(r.j)(".edit-text")],Ao.prototype,"editEle",void 0),Do([Object(r.h)(".dot-container")],Ao.prototype,"dotEle",void 0),Do([Object(r.h)(".i-checkbox-input")],Ao.prototype,"checkboxEle",void 0),Do([Object(r.h)(".side-todos-item")],Ao.prototype,"todoItemEle",void 0),Do([Object(r.h)(".side-todos-item-text")],Ao.prototype,"textEle",void 0),Do([Object(r.g)({type:Boolean})],Ao.prototype,"isExpired",void 0),Do([Object(r.g)({type:Object})],Ao.prototype,"data",void 0),Do([Object(r.g)({type:Number})],Ao.prototype,"index",void 0),Ao=Do([Object(r.c)("side-todo-item")],Ao);var Mo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let No=class extends r.a{render(){return r.e`
      <div class="side-todos-tips">
        <img src="${Gi.a}" alt="${Object(Q.i18n)("no_reminders")}" />
        <p>${Object(Q.i18n)("current_no_reminders")}</p>
        <p>${Object(Q.i18n)("enter_key_to_input_reminders")}</p>
      </div>
    `}};No.styles=r.b`
    .side-todos-tips {
      margin: 80px 0;
      text-align: center;
    }
    img {
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
    }
    p {
      margin: 0;
      line-height: 22px;
      color: rgba(101,101,101,1);
    }
  `,No=Mo([Object(r.c)("side-todo-empty")],No);var zo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Bo=class extends r.a{render(){const{dueDate:t="",dueTime:e="",dueTimestamp:i}=JSON.parse(this.time);return r.e`
      <div class="wrapper">
        <div class="arrow"></div>
        <i-datepicker
          defaultDates=${JSON.stringify({date:t,time:e,dueTimestamp:i})}
          @on-submit="${t=>this.settingTime(t.detail)}"
        ></i-datepicker>
      </div>
    `}firstUpdated(){this.initPosition()}settingTime({data:t}){const e=new Date(t),i=e.toLocaleDateString(l.B.lang),o=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,n={todoId:this.todoId,dueDate:i,dueTime:o,dueTimestamp:t};s.todoStore.updateTodo(this.todoId,n);const r=document.querySelector(".dot-wrapper");r&&document.body.removeChild(r)}initPosition(){if(this.rect){const t=JSON.parse(this.rect),{top:e,left:i,width:o,height:n}=t,r=window.innerWidth,a=document.body.clientHeight,s=20;this.arrowDiv.style.top=e-s/2+o/2+"px",this.arrowDiv.style.right=r-i+"px";const l=this.clientHeight;if(this.style.right=r-i+s+"px",e+l/2>=a)this.style.bottom="0px";else{const t=e+n/2-l/2;this.style.top=t<=0?"0px":t+"px"}}}};Bo.styles=r.b`
    :host {
      position: absolute;
      z-index: 10000;
      display: block;
      width: 280px;
      height: 402px;
    }
    .wrapper {
      background: #fff;
      border-radius: 6px;
      box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03), 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
        0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
      z-index: 1000;
    }
    .arrow {
      position: fixed;
      z-index: 1000;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left-color: #fff;
    }
  `,zo([Object(r.h)(".arrow")],Bo.prototype,"arrowDiv",void 0),zo([Object(r.g)({type:String,reflect:!0})],Bo.prototype,"rect",void 0),zo([Object(r.g)({type:String,reflect:!0})],Bo.prototype,"time",void 0),zo([Object(r.g)({type:String,reflect:!0})],Bo.prototype,"todoId",void 0),Bo=zo([Object(r.c)("todo-tooltip")],Bo);var Uo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Fo=class extends r.a{emit(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){return r.e`
      <div class="wrapper">
        <p>${i18n("confirm_delete_done_todos")}</p>
        <div class="btns">
          <infinito-button @click=${()=>this.emit("cancel")}> ${i18n("cancel")} </infinito-button>
          <infinito-button primary class="ok" @click=${()=>this.emit("ok")}> ${i18n("confirm")} </infinito-button>
        </div>
      </div>
    `}};Fo.styles=r.b`
    infinito-button {
      width: 120px;
      height: 42px;
      line-height: 42px;
      font-weight: 500;
      border-radius: 4px;
      transition: opacity 300ms ease 0s;
    }
    infinito-button:not(:last-child) {
      margin-right: 16px;
    }
    .wrapper {
      width: 300px;
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    p {
      margin: 10px 0;
      text-align: center;
    }
  `,Fo=Uo([Object(r.c)("todo-delete-tips")],Fo);var Wo=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ho=class extends a.a{constructor(){super(...arguments),this.store=s.todoStore,this.deleteModal=!1,this.cancelDelete=()=>{this.deleteModal=!1}}handleAddTodo({text:t}){const e=t.substring(0,200);this.store.addTodo(e)}afterShow(){this.handleTabOpend()}handleTabOpend(){this.inputEle.focusing(),this.$todoItem.forEach(t=>{t.invalidTime(),t.startSchedule()})}handleTabClose(){this.$todoItem.forEach(t=>{t.removeSchedule()}),this.inputEle.clear(!1)}afterHide(){this.handleTabClose()}render(){const{store:{hasDoneTodo:t,todoList:e}}=this;return r.e`
      <i-side2-header .title="${Object(Q.i18n)("todos")}"></i-side2-header>
      <div class="side-todos-container">
        <div class="up">
          <side-todo-input @on-submit="${t=>this.handleAddTodo(t.detail)}"></side-todo-input>
          <div class="side-todos-remove">
            <button class="${t?"allow":""}" @click="${this.remove}">${Object(Q.i18n)("remove_done")}</button>
          </div>
        </div>
        <div class="global-scrollbar list">
          <div class="side-todos-lists">
            ${e.length?e.map((t,e)=>r.e` <side-todo-item .data=${t} .index=${e}> </side-todo-item> `):r.e`<side-todo-empty></side-todo-empty>`}
          </div>
        </div>
      </div>
      <infinito-portal-entrance destination="delete-todo-modal">
        <infinito-modal
          style="--modal-padding: 30px; --modal-top: 30vh;"
          ?open=${this.deleteModal}
          .closeable=${!1}
          .onCancel=${this.cancelDelete}
        >
          <todo-delete-tips slot="body" @ok=${this.confirmDelete} @cancel=${this.cancelDelete}> </todo-delete-tips>
        </infinito-modal>
      </infinito-portal-entrance>
    `}remove(){this.store.hasDoneTodo&&(this.deleteModal=!0)}confirmDelete(){this.deleteModal=!1,this.store.removeTodo()}};Ho.styles=[S.a,lo,r.b`
      :host {
        display: block;
        height: 100%;
        background-color: #fff;
      }
    `],Wo([Object(r.g)({type:Boolean})],Ho.prototype,"deleteModal",void 0),Wo([Object(r.h)("side-todo-input")],Ho.prototype,"inputEle",void 0),Wo([Object(r.i)("side-todo-item")],Ho.prototype,"$todoItem",void 0),Ho=Wo([Object(r.c)("side-todos")],Ho);var qo=i(126),Vo=i.n(qo),Yo=i(48),Xo=i.n(Yo);function Go(t,e){return!(t!==e&&!t.contains(e))}function Ko(t){return t&&t.replace(/&nbsp;|\u202F|\u00A0/g," ")}var Qo=i(657),Jo=i.n(Qo),Zo=r.b`:host {
  --border-color: #ededed;
}
/* side-notes-list */
.side-notes-list {
  height: calc(100% - 55px);
}
/* side-notes-item */
.note-item {
  position: relative;
  padding: 0 30px;
  height: 80px;
  background: #fff;
  z-index: 1;
  cursor: pointer;
}
.note-item::before {
  content: '';
  position: absolute;
  width: 5px;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 300ms;
}
.note-item:hover::before {
  background: #ebebeb;
}
.note-item:hover .close-icon {
  display: block;
}
.note-item.active {
  z-index: 2;
  box-shadow: 0px 4px 24px -12px rgba(0, 0, 0, 0.3);
}
.note-item.active::before {
  background: #0f7cff;
}
.note-item.active .border {
  border-color: #fff;
}
.note-item .border {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid #eeeeee;
}
.note-item .title {
  width: 90%;
  margin: 0;
  margin-bottom: 6px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.note-item .date {
  margin: 0;
  font-size: 12px;
  color: #999999;
}
.note-item .close-icon {
  display: none;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.note-item .close-icon img {
  width: 100%;
  height: 100%;
}
.note-item .close-icon:hover {
  opacity: 0.8;
  transform: scale(0.9);
}
/* note-editor */
.note-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.note-editor .main-body {
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  flex: 1;
  height: 0;
  height: 100%;
  padding: 20px 0;
  padding-bottom: 0;
  overflow: hidden;
}
.note-editor .main-body .time {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 12px;
  text-align: center;
  color: #999999;
}
.note-editor .edit-area {
  flex: 1;
  height: 0;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}
.note-editor .edit-area .edit-wrapper {
  flex: 1;
  padding-left: 30px;
  margin-top: 10px;
}
.note-editor .btns {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.note-editor button {
  padding: 0;
  margin: 0;
  width: 155px;
  height: 52px;
  border: 1px solid #333333;
  border-radius: 4px;
  outline: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms;
}
.note-editor button.primary {
  background: #333333;
  color: #fff;
}
.note-editor button:hover {
  opacity: 0.9;
}
`,tn=i(658),en=i.n(tn),on=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let nn=class extends r.a{emit(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){return r.e`
      <div class="wrapper">
        <p>${i18n("confirm_delete_note")}</p>
        <div class="btns">
          <infinito-button @click=${()=>this.emit("cancel")}> ${i18n("cancel")} </infinito-button>
          <infinito-button primary class="ok" @click=${()=>this.emit("ok")}> ${i18n("confirm")} </infinito-button>
        </div>
      </div>
    `}};nn.styles=r.b`
    infinito-button {
      width: 120px;
      height: 42px;
      line-height: 42px;
      font-weight: 500;
      border-radius: 4px;
      transition: opacity 300ms ease 0s;
    }
    infinito-button:not(:last-child) {
      margin-right: 16px;
    }
    .wrapper {
      width: 300px;
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    p {
      margin: 10px 0;
      text-align: center;
    }
  `,nn=on([Object(r.c)("note-delete-tips")],nn);var rn=i(659),an=i.n(rn),sn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ln=class extends a.a{constructor(){super(...arguments),this.store=s.noteStore,this.data={}}check(t,e){t.stopPropagation(),this.store.updateId(e),this.dispatchEvent(new CustomEvent("check",{bubbles:!0,composed:!0}))}delete(t,e){t.stopPropagation(),this.dispatchEvent(new CustomEvent("delete",{detail:{id:e},bubbles:!0,composed:!0}))}_formatTime(t){return c.a.fmtTime(t,{month:"long",day:"2-digit"})}render(){const{data:{title:t,time:e,id:i},store:o}=this;return r.e`
      <div
        class="note-item ${i===o.checkedId?"active":""}"
        @click="${t=>this.check(t,i)}"
      >
        <div class="border">
          <h3 class="title">${t||i18n("no_title")}</h3>
          <p class="date">${this._formatTime(e)}</p>
        </div>
        <i
          class="close-icon"
          @click=${t=>this.delete(t,i)}
        >
          <img src="${an.a}" />
        </i>
      </div>
    `}};ln.styles=Zo,sn([Object(r.g)({type:Object})],ln.prototype,"data",void 0),ln=sn([Object(r.c)("side-notes-item")],ln);var cn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let pn=class extends r.a{constructor(){super(...arguments),this.data=[]}render(){return r.e`
      <div class="global-scrollbar side-notes-list">
        ${this.data.map(t=>r.e`
            <side-notes-item
              .data=${t}
              @check=${this.handleCheck}
              @delete=${this.handleDelete}
            ></side-notes-item>
          `)}
      </div>
    `}handleCheck(){this.dispatchEvent(new CustomEvent("on-check",{bubbles:!0,composed:!0}))}handleDelete(t){this.dispatchEvent(new CustomEvent("on-delete",{detail:{id:t.detail.id},bubbles:!0,composed:!0}))}};pn.styles=[S.a,Zo],cn([Object(r.g)({type:Array})],pn.prototype,"data",void 0),pn=cn([Object(r.c)("side-notes-list")],pn);var dn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let hn=class extends a.a{constructor(){super(...arguments),this.store=s.noteStore}async add(){this.store.add({}),await this.updateComplete,this.dispatchEvent(new CustomEvent("add",{bubbles:!0,composed:!0}))}render(){return r.e`
      <div class="side-notes-add" @click="${t=>this.add()}">
        <svg viewBox="0 0 1024 1024">
          <path d="M32 416h960c19.2 0 32 12.8 32 32v128c0 19.2-12.8 32-32 32H32C12.8 608 0 595.2 0 576V448c0-19.2 12.8-32 32-32z"></path>
          <path d="M448 0h128c19.2 0 32 12.8 32 32v960c0 19.2-12.8 32-32 32H448c-19.2 0-32-12.8-32-32V32c0-19.2 12.8-32 32-32z"></path>
        </svg>
      </div>
    `}};hn.styles=r.b`
    :host {
      --border-color: #ededed;
    }
    .side-notes-add {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 54px;
      color: #333;
      cursor: pointer;
      border-top: 1px solid var(--border-color);
      transition: all 300ms ease-in-out;
    }
    .side-notes-add:hover {
      background: rgb(249, 249, 249);
    }
    .side-notes-add svg {
      width: 14px;
      height: 14px;
    }
  `,hn=dn([Object(r.c)("add-note-btn")],hn);var un=i(660),gn=i.n(un),fn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let mn=class extends r.a{render(){return r.e`
      <div class="wrapper">
        <img src="${gn.a}" alt="icon" />
        <p>${Object(Q.i18n)("add_first_note")}</p>
      </div>
    `}};mn.styles=r.b`
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100% - 55px);
    }
    img {
      width: 86px;
      height: 86px;
    }
    p {
      margin: 0;
      color: #999;
      font-size: 14px;
    }
  `,mn=fn([Object(r.c)("note-empty")],mn);var bn=i(661),yn=i.n(bn),vn=i(662),wn=i.n(vn),xn=i(663),kn=i.n(xn),_n=i(664),On=i.n(_n),Sn=i(665),jn=i.n(Sn),$n=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let In=class extends r.a{constructor(){super(...arguments),this.txt="",this.titleError="",this.urlError=""}firstUpdated(){this.titleInput&&this.titleInput.focus()}render(){return r.e`
      <div class="note-link">
        <h2>${Object(Q.i18n)("add_link")}</h2>
        <div class="form">
          <div class="input-control">
            <div class="label">${Object(Q.i18n)("text")}</div>
            <input
              name="title"
              .placeholder="${Object(Q.i18n)("please_enter_text")}"
              .value=${this.txt}
              autocomplete="off"
              @input="${this.handleTxtChange}"
              @focus=${()=>{this.titleError=""}}
            />
            <span class="error">${this.titleError}</span>
          </div>
          <div class="input-control">
            <div class="label">URL</div>
            <input
              name="url"
              placeholder="${Object(Q.i18n)("type_link")}"
              @input="${this.handleUrlChange}"
              @keypress=${t=>this.handleKeyUp(t)}
              @focus=${()=>{this.urlError=""}}
              autocomplete="off"
            />
            <span class="error">${this.urlError}</span>
          </div>
        </div>
        <div class="btns">
          <infinito-button style="width: 155px; height: 52px;" @click="${this.cancel}"
            >${Object(Q.i18n)("cancel")}</infinito-button
          >
          <infinito-button style="width: 155px; height: 52px;" primary @click="${this.confirm}"
            >${Object(Q.i18n)("confirm")}</infinito-button
          >
        </div>
      </div>
    `}reset(){this.titleInput.value="",this.urlInput.value=""}handleTxtChange(t){this.dispatchEvent(new CustomEvent("txt-change",{detail:{value:t.target.value}}))}handleUrlChange(t){this.dispatchEvent(new CustomEvent("url-change",{detail:{value:t.target.value}}))}handleKeyUp(t){13===t.keyCode&&this.confirm()}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0})),this.reset()}confirm(){const t=this.titleInput.value;let e=this.urlInput.value;if(!t)return void(this.titleError=Object(Q.i18n)("type_text"));if(!e)return void(this.urlError=Object(Q.i18n)("please_type_link"));if(!this.isUrl(e))return void(this.urlError=Object(Q.i18n)("please_type_right_link"));const i=e.startsWith("chrome://")||e.startsWith("http://")||e.startsWith("https://");e=i?e:"http://"+e,this.dispatchEvent(new CustomEvent("ok",{detail:{title:t,url:e}})),this.reset()}isUrl(t){return/^[^\u4e00-\u9fa5]+$/.test(t)}};In.styles=r.b`
    :host {
      box-sizing: border-box;
      display: block;
      width: 370px;
      height: 370px;
      padding: 20px;
    }
    h2 {
      margin: 0;
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 500;
      color: #333;
      text-align: center;
    }
    .input-control {
      position: relative;
      width: 100%;
      margin-bottom: 40px;
    }
    .error {
      position: absolute;
      right: 0;
      bottom: -20px;
      font-size: 12px;
      color: #ea4747;
    }
    input {
      width: 100%;
      padding: 10px 0;
      border: none;
      background: none;
      outline: none;
      border-bottom: 1px solid#656565;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
    }
    infinito-button {
      width: 155px;
      height: 52px;
    }
  `,$n([Object(r.g)({type:String})],In.prototype,"txt",void 0),$n([Object(r.g)({type:String})],In.prototype,"titleError",void 0),$n([Object(r.g)({type:String})],In.prototype,"urlError",void 0),$n([Object(r.h)('input[name="title"]')],In.prototype,"titleInput",void 0),$n([Object(r.h)('input[name="url"]')],In.prototype,"urlInput",void 0),In=$n([Object(r.c)("add-note-link")],In);var Cn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Tn=class extends a.a{constructor(){super(...arguments),this.store=s.noteStore,this.txt="",this.handleCancel=()=>{this.store.toogleLinkModal(),this.emit("cancelLink")}}emit(t,e){const i=new CustomEvent(t,{detail:Object.assign({},e),bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return r.e`
      <div class="edit-options">
        <div class="area fonts-area">
          <button
            class=${Object(G.a)({"bold-button":!0,active:this.store.boldActive})}
            @click="${this.toggleBold}"
          >
            <img src="${yn.a}" />
          </button>
          <button
            @click=${()=>{this.emit("increase",{focus:!0})}}
            @touchend=${t=>{t.stopPropagation(),t.preventDefault(),this.emit("increase",{focus:!1})}}
          >
            <img src="${wn.a}" />
          </button>
          <button
            @click=${()=>{this.emit("decrease",{focus:!0})}}
            @touchend=${t=>{t.stopPropagation(),t.preventDefault(),this.emit("decrease",{focus:!1})}}
          >
              <img src="${kn.a}" />
            </button>
        </div>
        <div class="area media-area">
          <button @click=${this.createLink}><img src="${On.a}" /></button>
          <div class="insert-img-wrapper">
            <button @click="${this.handleUploadImg}"><img src="${jn.a}" /></button>
            <input type="file" hidden @change=${this.uploadInputChange} accept="image/png, image/jpeg"/>
          </div>
        </div>
      </div>
      ${this.store.linkModal?r.e`
            <infinito-modal
              .open=${this.store.linkModal}
              .onCancel=${this.handleCancel}
            >
              <div slot="body">
                <add-note-link
                  .txt=${this.txt}
                  @cancel=${this.handleCancel}
                  @ok=${this.handleOk}
                >
                </add-note-link>
              </div>
            </infinito-modal>
          `:null}
    `}handleOk(t){this.store.toogleLinkModal(),this.emit("insertLink",Object.assign({},t.detail))}createLink(){this.store.toogleLinkModal(),this.emit("createLink")}toggleBold(t){const e=t.currentTarget.classList.contains("active");this.emit("bold",{state:!e}),this.store.setBoldActive(!e)}handleUploadImg(t){t.stopPropagation();const{isLogin:e}=s.userStore;e?this.input.click():Si.default.popupLogin()}async uploadInputChange(){const t=this.input.files[0];this.emit("insertImg",{file:t}),this.input.value=""}};Tn.styles=r.b`
    .edit-options {
      display: flex;
      height: 55px;
    }
    .area {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: none;
      outline: none;
      transition: background .3s;
    }
    button:hover {
      background: rgba(0, 0, 0, .05);
    }
    button.active {
      background: rgba(0, 0, 0, .08);
    }
    img {
      width: 26px;
      height: 26px;
    }
    img {
      cursor: pointer;
    }
    .fonts-area button {
      margin-left: 30px;
    }
    .media-area {
      justify-content: flex-end;
    }
    .media-area button {
      margin-right: 30px;
    }
    .insert-img-wrapper {
      position: relative;
      width: 38px;
      height: 31px;
      margin-right: 30px;
      cursor: pointer;
    }
    .insert-img-wrapper:hover {
      opacity: .8;
    }
    .insert-img-wrapper button {
      margin: 0;
      cursor: pointer;
    }
  `,Cn([Object(r.g)({type:String,reflect:!0})],Tn.prototype,"txt",void 0),Cn([Object(r.h)("input")],Tn.prototype,"input",void 0),Tn=Cn([Object(r.c)("note-editor-options")],Tn);var En=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ln=class extends a.a{constructor(){super(...arguments),this.store=s.noteStore}_formatTime(t){return t?c.a.fmtTime(t):""}render(){const{checkedNote:t}=this.store;return r.e`
      <div class="note-editor">
        <div class="main-body">
          <p class="time">${this._formatTime(null==t?void 0:t.time)}</p>
          <div class="edit-area">
            <slot name="title"></slot>
            <div class="global-scrollbar edit-wrapper">
              <slot name="editor"></slot>
            </div>
          </div>
        </div>
        <slot name="options"></slot>
      </div>
    `}};Ln.styles=[S.a,Zo],En([Object(r.h)(".edit-wrapper")],Ln.prototype,"editWrapper",void 0),Ln=En([Object(r.c)("note-editor")],Ln);var Pn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Rn=class extends a.a{constructor(){super(...arguments),this.store=s.noteStore,this.MAX_LENGTH=2e5,this.deleteModal=!1,this.deleteId="",this.debounceHandleScrollCursor=c.a.debounce(this.handleScrollCursor,50),this.cancelDelete=()=>{this.deleteModal=!1}}opened(){this.inputEle&&this.inputEle.focus()}handleTabClose(){this.store.linkModal&&this.store.toogleLinkModal()}firstUpdated(){var t;if(this.editBox){if(document.execCommand("defaultParagraphSeparator",!1,"p"),this.editBox.addEventListener("contextmenu",t=>(t.stopPropagation(),!0),{capture:!0}),this.editBox.addEventListener("mouseup",()=>{const t=document.queryCommandState("bold");this.store.setBoldActive(t)}),null===(t=this.store)||void 0===t?void 0:t.checkedNote){const{content:t}=this.store.checkedNote;this.editBox.innerHTML=t?this.store.checkedNote.content:"<p><br></p>"}this.editBox.addEventListener("drop",t=>{t.preventDefault()})}}shouldUpdated(){const{content:t=""}=this.store.checkedNote;if(this.editBox&&Ko(this.editBox.innerHTML)!==Ko(t))return!0}updated(){var t;if(this.editBox&&(null===(t=this.store)||void 0===t?void 0:t.checkedNote)){const{content:t}=this.store.checkedNote;Ko(this.editBox.innerHTML)!==Ko(t)&&(this.editBox.innerHTML=t||"<p><br></p>"),t&&"<p><br></p>"!==t&&"<br>"!==t||this.store.setBoldActive(!1)}}afterShow(){this.opened()}afterHide(){this.handleTabClose()}render(){var t,e,i;const{store:o}=this;return r.e`
      <i-side2-header .title="${Object(Q.i18n)("notes")}"></i-side2-header>
      <div class="side-notes">
        <div class="side-notes-left">
          ${o.isEmpty?r.e`<note-empty></note-empty>`:r.e` <side-notes-list
                .data=${o.sortList}
                @on-check=${this.handleCheck}
                @on-delete=${this.handleDelete}
              ></side-notes-list>`}
          <add-note-btn @add=${this.handleAdd}></add-note-btn>
        </div>
        <div class="side-notes-right">
          ${o.checkedNote?r.e`
                <note-editor>
                  <div slot="title" class="note-title-wrapper">
                    <input
                      name="title"
                      autocomplete="off"
                      .placeholder="${Object(Q.i18n)("note_title")}"
                      .value=${null===(t=this.store.checkedNote)||void 0===t?void 0:t.title}
                      @keydown=${t=>{t.target.keyEvent=!0}}
                      @compositionstart=${t=>{t.target.isNeedPrevent=!0}}
                      @compositionend=${t=>{t.target.isNeedPrevent=!1}}
                      @input=${t=>{t.target.keyEvent||this.handleTitleInput(t)}}
                      @keyup=${t=>{t.target.isNeedPrevent||(this.handleTitleInput(t),t.target.keyEvent=!1)}}
                      @keypress=${t=>this.handleTitleKeyPress(t)}
                    />
                  </div>
                  <div
                    slot="editor"
                    class="note-editor"
                    contenteditable="true"
                    spellcheck="false"
                    style="font-size: ${null===(i=null===(e=this.store)||void 0===e?void 0:e.checkedNote)||void 0===i?void 0:i.fontSize}px"
                    @blur=${this.handleEditorBlur}
                    @keypress="${this.checkContent}"
                    @input=${this.handleEditorChange}
                    @click=${this.handleEditorClick}
                    @paste=${this.handleEditorPaste}
                  ></div>
                  <note-editor-options
                    slot="options"
                    @bold=${this.execBoldCommand}
                    @increase=${t=>this.handleChangeSize(t,"increase")}
                    @decrease=${t=>this.handleChangeSize(t,"decrease")}
                    @createLink=${this.handleCreateLink}
                    @insertLink=${this.handleInsertLink}
                    @cancelLink=${()=>this.reStorePosition()}
                    @insertImg=${this.handleInsertImg}
                  >
                  </note-editor-options>
                </note-editor>
              `:null}
        </div>
      </div>
      <infinito-portal-entrance destination="delete-note-modal">
        <infinito-modal
          style="--modal-padding: 30px; --modal-top: 30vh;"
          ?open=${this.deleteModal}
          .closeable=${!1}
          .onCancel=${this.cancelDelete}
        >
          <note-delete-tips slot="body" @ok=${this.confirmDelete} @cancel=${this.cancelDelete}> </note-delete-tips>
        </infinito-modal>
      </infinito-portal-entrance>
    `}createRenderRoot(){return this}handleCheck(){this.handleAdd()}handleDelete(t){this.deleteId=t.detail.id,this.deleteModal=!0}confirmDelete(){this.store.delete(this.deleteId),this.deleteModal=!1,this.handleAdd()}async handleAdd(){await this.updateComplete,this.inputEle&&this.inputEle.focus()}handleTitleInput(t){const e=t.target.value;this.updateContent({title:e})}handleTitleKeyPress(t){13===t.keyCode&&this.editBox.focus()}updateContent(t){const e=Object.assign(Object.assign(Object.assign({},this.store.checkedNote),t),{time:+new Date});this.store.updateNote(e)}saveCursorPosition(){const t=window.getSelection(),e={range:null,collapsed:!0,text:""};t.rangeCount>0&&Go(this.editBox,t.anchorNode)&&Go(this.editBox,t.focusNode)&&(e.collapsed=t.isCollapsed,e.range=t.getRangeAt(0),e.text=t.toString()),this.prevEditorSelection=e}reStorePosition(){var t;const e=window.getSelection();e.removeAllRanges();let i=null;return(null===(t=this.prevEditorSelection)||void 0===t?void 0:t.range)?i=this.prevEditorSelection.range:(i=document.createRange(),i.selectNodeContents(this.editBox),i.collapse(!1)),e.addRange(i),o=100,new n.a(t=>setTimeout(t,o));var o}handleEditorBlur(){this.saveCursorPosition()}checkContent(t){const e=t.target.innerHTML;if((null==e?void 0:e.length)>this.MAX_LENGTH)return it.message.error(Object(Q.i18n)("limit_input_length")),t.stopPropagation(),t.preventDefault(),!1}handleEditorChange(t){const e=t.target.innerHTML;(null==e?void 0:e.length)>this.MAX_LENGTH&&"deleteContentBackward"!==t.inputType&&(it.message.error(Object(Q.i18n)("limit_input_length")),t.target.blur()),this.updateContent({content:e})}handleEditorClick(t){const e=function(t,e,i=document.body){for(;!t.matches||!t.matches(e);)if(!(t=t.parentElement)||t===i){t=null;break}return t}(t.target,"a",this.editBox);if(e){const i=e.getAttribute("href");c.a.openUrl(i,s.settingStore.setting.link.icon,t)}}handleEditorPaste(t){var e;t.preventDefault();let i=null;const o=(t.originalEvent||t).clipboardData;let n=o.getData("text/html");if((null===(e=this.editBox.innerHTML)||void 0===e?void 0:e.length)+(null==n?void 0:n.length)>this.MAX_LENGTH)it.message.error(Object(Q.i18n)("limit_input_length"));else{if(0===n.length){if(n=o.getData("text/plain"),0===n.length)return;i=n.split(/\r\n?|\n/g).map(t=>{if(0===Vo()(t).call(t).length)return"<br/>";const e=document.createElement("div");return e.innerText=t.replace(/\s/g," "),e.outerHTML}).join("")}else i=Jo.a.sanitize(n,{ALLOWED_TAGS:["a","img","ul","ol","nl","li","div","p","pre","code","br"],ALLOWED_ATTR:["href","target","src"],ALLOW_DATA_ATTR:!1});setTimeout(()=>{document.execCommand("insertHTML",!1,i),this.updateContent({content:this.editBox.innerHTML})},0)}}async execBoldCommand({detail:t}){var e;await this.reStorePosition();const i=window.getSelection(),o=i.getRangeAt(0);if(null===(e=this.prevEditorSelection)||void 0===e?void 0:e.collapsed)if(t.state)document.execCommand("insertHTML",!1,"<b>&#8203;</b>");else if(l.n){const t=document.createRange();t.setStartAfter(o.endContainer.parentNode),t.collapse(!0),i.removeAllRanges(),i.addRange(t)}else document.execCommand("insertHTML",!1,"&#8203;");else document.execCommand("bold",!1,null)}async handleChangeSize(t,e){var i;const o=t.detail.focus;let n=null===(i=this.store.checkedNote)||void 0===i?void 0:i.fontSize;switch(e){case"increase":n+=2;break;case"decrease":n-=2;break;default:return}if(n>=20&&(n=20),n<=12&&(n=12),o)await this.reStorePosition();else{window.getSelection().removeAllRanges()}this.updateContent({fontSize:n}),this.debounceHandleScrollCursor()}handleScrollCursor(){const t=this.noteEditor.editWrapper,{y:e}=function(){const t=window,e=t.document,i=t.getSelection();let o,n,r,a=0,s=0;if(i.rangeCount&&(o=i.getRangeAt(0).cloneRange(),o.getClientRects&&(o.collapse(!0),n=o.getClientRects(),n.length>0&&(r=n[0]),r&&(a=r.left,s=r.top)),0===a&&0===s||void 0===r)){const t=e.createElement("span");if(t.getClientRects){t.appendChild(e.createTextNode("​")),o.insertNode(t),r=t.getClientRects()[0],a=r.left,s=r.top;const i=t.parentNode;i.removeChild(t),i.normalize()}}return{x:a,y:s}}(),i=e+t.scrollTop-t.getBoundingClientRect().height;t.scrollTop=i}handleCreateLink(){var t,e;this.editOptions.txt=null!==(e=null===(t=this.prevEditorSelection)||void 0===t?void 0:t.text)&&void 0!==e?e:""}async handleInsertLink({detail:t}){var e;await this.reStorePosition();const{title:i,url:o}=t,n=document.createElement("a");n.classList.add("link"),n.setAttribute("href",o),n.innerText=i,(null===(e=this.prevEditorSelection)||void 0===e?void 0:e.text)?(this.prevEditorSelection.range.deleteContents(),this.prevEditorSelection.range.insertNode(n)):(document.execCommand("insertHTML",!1,n.outerHTML),document.execCommand("insertHTML",!1,"<span>&#8203;</span>"));const r=this.editBox.innerHTML;this.debounceHandleScrollCursor(),this.updateContent({content:r})}async handleInsertImg({detail:t}){await this.reStorePosition();const e=c.a.randomId("note-"),{file:i}=t;if((null==i?void 0:i.size)>16048584)return void it.message.error(Object(Q.i18n)("note_upload_img_15"));const o=Xo.a.createObjectURL(i),{width:r,height:a}=await function(t){return new n.a(e=>{const i=new Image;i.onload=function(){e({width:i.width,height:i.height})},i.src=t})}(o);!function(t){let e,i;if(window.getSelection&&(e=window.getSelection(),e.getRangeAt&&e.rangeCount)){i=e.getRangeAt(0),i.deleteContents();const o=document.createElement("div");o.innerHTML=t;const n=document.createDocumentFragment();let r,a;for(;r=o.firstChild;)a=n.appendChild(r);i.insertNode(n),a&&(i=i.cloneRange(),i.setStartAfter(a),i.collapse(!0),e.removeAllRanges(),e.addRange(i))}}(`<span\n        class="note-img-wrapper uploading"\n        data-width="${r}"\n        data-height="${a}"\n        data-picture="${e}.png"\n      ><img class="main-img" src=${o} /><img class="uploading-text" src=${en.a} /></span>`),this.debounceHandleScrollCursor();try{const{data:t,error:n}=await this.store.upload(i,e);if(!Object.keys(t).length)throw new Error(n);{let{url:e,key:i}=t;i=i.split("/")[2];const n=this.editBox.querySelector(`span[data-picture="${i}"]`);n.classList.remove("uploading");n.querySelector(".main-img").src=e;n.querySelector(".uploading-text").remove(),Xo.a.revokeObjectURL(o)}}catch(t){this.editBox.querySelector(`span[data-picture="${e}.png"]`).remove(),it.message.error(Object(Q.i18n)("upload_image_error"))}const s=this.editBox.innerHTML;this.updateContent({content:s})}};Rn.styles=Zo,Pn([Object(r.g)({type:Boolean})],Rn.prototype,"deleteModal",void 0),Pn([Object(r.g)({type:String})],Rn.prototype,"deleteId",void 0),Pn([Object(r.h)(".note-editor")],Rn.prototype,"editBox",void 0),Pn([Object(r.h)("note-editor")],Rn.prototype,"noteEditor",void 0),Pn([Object(r.h)("note-editor-options")],Rn.prototype,"editOptions",void 0),Pn([Object(r.h)('input[name="title"]')],Rn.prototype,"inputEle",void 0),Rn=Pn([Object(r.c)("side-notes")],Rn);var Dn=r.b`:host {
  display: block;
  height: 100%;
  --point-height: 2px;
  --display: none;
}
.tabs {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}
.tabs.vertically {
  align-items: center;
}
.tabs.horizontally {
  flex-direction: column;
}
.tabs[style]::after {
  content: '';
}
.tabs.vertically::after {
  display: var(--display, none);
  --width: 28;
  position: absolute;
  width: calc(var(--width) * 1px);
  left: calc((var(--target-left) + (var(--target-width) - var(--width)) / 2) * 1px);
  border-bottom: var(--point-height) solid #333;
  bottom: 0;
  transition: left 0.2s, width 0.2s;
}
.tabs.horizontally::before {
  display: var(--display, none);
  content: '';
  position: absolute;
  z-index: 0;
  width: 100%;
  height: calc(var(--target-height, 0) * 1px);
  top: calc(var(--target-top, -9000) * 1px);
  left: 0;
  background: #f5f5f5;
  border-radius: 6px;
  transition: top 0.2s, height 0.2s;
}
`,An=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Mn=class extends r.a{constructor(){super(...arguments),this.type="vertically",this.active=0}setActiveStyle(){var t,e;const i=null===(e=null===(t=this.$slot)||void 0===t?void 0:t.assignedNodes())||void 0===e?void 0:e.filter(t=>1===t.nodeType);if(i&&i.length>0){const t=i[this.active],e=this.$tabsbox.style,{offsetTop:o,offsetLeft:n,offsetWidth:r,offsetHeight:a}=t;if(0===r&&0===a)return void e.setProperty("--display","none");e.setProperty("--display","block"),e.setProperty("--target-width",r+""),e.setProperty("--target-height",a+""),e.setProperty("--target-left",n+""),"horizontally"===this.type&&e.setProperty("--target-top",o+"")}}updated(t){t.has("active")&&this.setActiveStyle()}render(){return r.e`
      <div class="tabs ${this.type}">
        <slot></slot>
      </div>
    `}};Mn.styles=Dn,An([Object(r.g)({type:String})],Mn.prototype,"type",void 0),An([Object(r.g)({type:Number})],Mn.prototype,"active",void 0),An([Object(r.h)(".tabs")],Mn.prototype,"$tabsbox",void 0),An([Object(r.h)("slot")],Mn.prototype,"$slot",void 0),Mn=An([Object(r.c)("i-tabs")],Mn);var Nn=r.b`:host {
  display: block;
  padding: 30px;
  padding-top: 41px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  text-align: center;
}
.card {
  padding: 8px 16px 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}
.card {
  margin-bottom: 32px;
  text-align: left;
}
.card-header {
  display: flex;
  align-items: center;
  height: 20px;
}
.card-header .img-box {
  position: relative;
  margin-top: -8px;
  width: 52px;
  height: 52px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-header .added-icon {
  width: 14px;
  height: 14px;
  position: absolute;
  bottom: 6px;
  right: 4px;
}
.card-header .img-icon-box {
  width: 40px;
  height: 40px;
  border: 1px solid #eee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.card-header .img-icon {
  border-radius: 50%;
  object-fit: cover;
  box-sizing: border-box;
}
.card-header .title {
  max-width: 120px;
  margin-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.card-content {
  margin-top: 16px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
}
.card-content .desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
.card-footer .add-btn {
  min-width: 94px;
  height: 34px;
}
`,zn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Bn=class extends a.a{firstUpdated(){}addSearch(t){var e,i;s.searchStore.updateShortcut(t),j.a.sendEvent({action:{addDefaultSearchEngine:c.a.getTargetLogDomain(null===(i=null===(e=t.types)||void 0===e?void 0:e[0])||void 0===i?void 0:i.url)}})}render(){const{list:t,searchEngine:e}=s.searchStore;return r.e`
      ${t.filter(t=>!t.hide).map(t=>{const o=e.all.some(e=>t.uuid.toLocaleLowerCase()===e.uuid.toLocaleLowerCase());return r.e`
            <section class="card">
              <div class="card-header">
                <div class="img-box">
                  <div class="img-icon-box">
                    <img class="img-icon" width="32" height="32" src="${Object(ot.b)(t.logo)}" alt="" />
                  </div>
                  ${o?r.e` <img class="added-icon" src="${i(666)}" alt="" />`:r.e``}
                </div>
                <div class="title">${t.name}</div>
              </div>
              <div class="card-content">
                <div class="desc">${t.desc}</div>
              </div>
              <div class="card-footer">
                ${o?r.e`<infinito-button white class="add-btn" disabled>${Object(Q.i18n)("icon_added")}</infinito-button>`:r.e`<infinito-button white class="add-btn" @click="${()=>this.addSearch(t)}"
                      >${Object(Q.i18n)("add")}</infinito-button
                    >`}
              </div>
            </section>
          `})}
      <span style="color: #b6b6b6;">${Object(Q.i18n)("no_more")}</span>
    `}};Bn.styles=Nn,Bn=zn([Object(r.c)("side-search-default")],Bn);var Un=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class Fn{constructor(){this.editing=!1,this.editData={},this.editIndex=null}changeStatus(t,e=null){this.editing=t,this.editIndex=e,this.editData={},null!==e&&("add"===this.editing?this.editData=Object.assign({},s.searchStore.searchEngine.addList[e]):"custom"===this.editing&&(this.editData=Object.assign({},s.searchStore.searchEngine.custom[e])))}async submit(t){const{editIndex:e}=this;let i=null;if("color"===t.bgType?delete t.logo:"image"===t.bgType&&(delete t.bgFont,delete t.bgText,delete t.bgColorImage),t.updatetime=await c.a.getTimestamp(),"add"===this.editing)i=s.searchStore.createEngineAdd(t,e);else if("custom"===this.editing){const o=Object.assign({},t);o.types=[{name:t.name,url:t.target}],i=s.searchStore.createEngine(o,e)}return Object(x.i)(()=>{this.editing=!1}),i}cancel(){this.editing=!1}}Un([x.g],Fn.prototype,"editing",void 0),Un([x.g],Fn.prototype,"editData",void 0),Un([x.g],Fn.prototype,"editIndex",void 0),Un([x.b],Fn.prototype,"changeStatus",null),Un([x.b],Fn.prototype,"submit",null),Un([x.b],Fn.prototype,"cancel",null);const Wn=new Fn;var Hn=r.b`.btn-add {
  width: 360px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 6px;
  cursor: pointer;
}
.btn-add-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}
.btn-add-text i-usesvg {
  margin-right: 4px;
  width: 18px;
  height: 18px;
  color: #333;
}
.btn-add-text div {
  max-width: calc(100% - 100px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
custom-engine-card {
  margin-bottom: 20px;
}
`,qn=r.b`:host {
  display: block;
}
.container {
  position: relative;
  display: flex;
  background: #ffffff;
}
.main {
  display: flex;
  align-items: center;
  padding: 16px;
}
.main .left {
  flex-shrink: 0;
  margin-right: 14px;
  width: 56px;
  height: 56px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  overflow: hidden;
}
.main .left.add {
  border-radius: 50%;
}
.main .left img {
  width: 100%;
  height: 100%;
}
.main .search-icon {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .search-icon .bg-text {
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
}
.main .right .name {
  width: 170px;
  height: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.main .right .target {
  margin-top: 6px;
  width: 224px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.container:hover .dot-container,
.dot-container.active {
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
}
.dot-container {
  position: absolute;
  top: 28px;
  right: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  padding: 6px 0;
  border-radius: 4px;
  transition: opacity 0.3s;
  outline: none;
}
.dot-container:hover {
  background: #f2f2f2;
}
.dot-container:focus,
.dot-container.active {
  opacity: 1;
  background: #f2f2f2;
}
.dot-container > span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #999;
}
.dot-container ul {
  display: none;
}
`,Vn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Yn=class extends a.a{constructor(){super(...arguments),this.data={logo:"",name:"",target:""},this.isShortcut=!1,this.noDel=!1,this.type="add"}_edit(){const t=new CustomEvent("on-edit");this.dispatchEvent(t)}_del(){const t=new CustomEvent("on-del");this.dispatchEvent(t)}_add(){const t=new CustomEvent("on-add");this.dispatchEvent(t)}handleDotClick(t){t.stopPropagation();const e=document.createElement("div");e.className="dot-wrapper";const i=document.createElement("div");i.className="infinity-modal";const o=t.currentTarget.querySelector("ul").cloneNode(!0);if(this.dotEle.classList.add("active"),e.appendChild(i),e.appendChild(o),document.body.appendChild(e),"DIV"===t.currentTarget.tagName){const e=t.currentTarget.getBoundingClientRect(),{bottom:i,right:n,top:r}=e,a=window.innerWidth,l=document.body.clientHeight;o.style.right=a-n+"px";const c=o.clientHeight,p=this.dotEle.clientHeight*s.settingStore.sideScaleRatio;o.style.top=r+c+p>=l?r-c+"px":i+"px"}o.addEventListener("click",async t=>{const i=t.target;if("LI"===i.tagName){const t=i.classList;document.body.removeChild(e),this.dotEle.classList.remove("active"),t.contains("edit")?this._edit():t.contains("delete")?this._del():t.contains("add")&&this._add()}},{once:!0}),i.addEventListener("click",()=>{this.dotEle.classList.remove("active"),document.body.removeChild(e)},{once:!0})}render(){return r.e`
      <div class="container">
        <main class="main">
          <div
            class="${Object(G.a)({left:!0,add:"add"===this.type})}"
          >
            ${Object(nt.a)(Object(mt.a)(this.data))}
          </div>
          <div class="right">
            <div class="name">${this.data.name}</div>
            <div class="target">${this.data.target}</div>
          </div>
        </main>
        <div class="dot-container" @click=${this.handleDotClick} tabindex="0">
          <span></span>
          <span></span>
          <span></span>
          <ul class="dot-ul">
            ${"custom"===this.type&&this.isShortcut?r.e`<li class="op-item added disabled">${i18n("icon_added")}</li>`:null}
            ${"custom"!==this.type||this.isShortcut?null:r.e`<li class="op-item add" @click=${this._add}>${i18n("add")}</li>`}
            <li class="op-item edit" @click="${this._edit}">${i18n("edit")}</li>
            <li .hidden="${this.noDel}" class="op-item delete" @click="${this._del}">${i18n("del_folder")}</li>
          </ul>
        </div>
      </div>
    `}};Yn.styles=[qn],Vn([Object(r.g)({type:Object})],Yn.prototype,"data",void 0),Vn([Object(r.g)({type:Boolean})],Yn.prototype,"isShortcut",void 0),Vn([Object(r.g)({type:Boolean})],Yn.prototype,"noDel",void 0),Vn([Object(r.g)({type:String})],Yn.prototype,"type",void 0),Vn([Object(r.h)(".dot-container")],Yn.prototype,"dotEle",void 0),Yn=Vn([Object(r.c)("custom-engine-card")],Yn);var Xn=i(356),Gn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Kn=class extends a.a{_addCustom(){Wn.changeStatus("custom")}_addShortcut(t){s.searchStore.updateShortcut(t)}_edit(t){Wn.changeStatus("custom",t)}_del(t){s.searchStore.delEngine(t)}async _onSubmit(t){const{bgType:e,bgColor:i,bgFont:o,bgText:n,name:r,target:a,bgImage:l,bgColorImage:p}=t.detail.value,d={bgType:e,logo:l,bgColor:i,bgFont:o,bgText:n,name:r,target:a,bgColorImage:p};null===Wn.editIndex&&j.a.sendEvent({action:{addCustomSearchEngine:c.a.getTargetLogDomain(a)}});const h=await Wn.submit(d);s.searchStore.updateShortcut(h)}cancel(){Wn.cancel()}_renderList(){const{custom:t,all:e,current:i}=s.searchStore.searchEngine;return r.e`
      ${t.map((t,o)=>{const n=e.some(e=>t.uuid===e.uuid);return r.e` <custom-engine-card
          @on-add="${()=>this._addShortcut(t)}"
          @on-edit="${()=>this._edit(o)}"
          @on-del="${()=>this._del(o)}"
          .isShortcut="${n}"
          .data="${t}"
          .noDel="${i.uuid===t.uuid}"
          type="custom"
        ></custom-engine-card>`})}
      <div @click="${this._addCustom}" class="btn-add">
        <div class="btn-add-text">
          <i-usesvg iconfont type="icon-icon-xinjian"></i-usesvg>
          <div>${Object(Q.i18n)("add_new_search_engine")}</div>
        </div>
      </div>
    `}render(){const t=Object.assign(Object.assign({},Xn.a.defaultValue),Wn.editData);return Wn.editData.logo&&(t.bgImage=Wn.editData.logo,Wn.editData.bgType||(t.bgType="image")),r.e`${Wn.editing?r.e`
          <i-editicon
            .sideRatio="${s.settingStore.sideRatio}"
            iconType="search-engine-custom"
            .value="${t}"
            @on-cancel="${this.cancel}"
            @on-submit="${this._onSubmit}"
          ></i-editicon>
        `:this._renderList()} `}};Kn.styles=Hn,Kn=Gn([Object(r.c)("custom-engine")],Kn);var Qn=r.b`.btn-add {
  width: 360px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 6px;
  cursor: pointer;
}
.btn-add-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.btn-add-text i-usesvg {
  margin-right: 4px;
  width: 18px;
  height: 18px;
  color: #333;
}
.btn-add-text div {
  max-width: calc(100% - 100px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
custom-engine-card {
  margin-bottom: 20px;
}
.tips {
  width: 360px;
  height: 196px;
  margin-bottom: 20px;
}
.tips img {
  width: 100%;
  height: 100%;
}
`,Jn=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Zn=class extends a.a{_addCustom(){Wn.changeStatus("add")}_edit(t){Wn.changeStatus("add",t)}_del(t){s.searchStore.delEngineAdd(t)}async _onSubmit(t){const{bgType:e,bgColor:i,bgFont:o,bgText:n,name:r,target:a,bgImage:s,bgColorImage:l}=t.detail.value,p={bgType:e,logo:s,bgColor:i,bgFont:o,bgText:n,name:r,target:a,bgColorImage:l};null===Wn.editIndex&&j.a.sendEvent({action:{addAddonSearchEngine:c.a.getTargetLogDomain(a)}}),await Wn.submit(p)}cancel(){Wn.cancel()}_renderList(){const{addList:t}=s.searchStore.searchEngine;return r.e`
      <div class="tips">
        <img src="${Object(ot.a)("add_engine.gif",!1)}" alt="" />
      </div>
      ${t.map((t,e)=>r.e` <custom-engine-card
          @on-edit="${()=>this._edit(e)}"
          @on-del="${()=>this._del(e)}"
          type="add"
          .data="${t}"
        ></custom-engine-card>`)}
      <div @click="${this._addCustom}" class="btn-add">
        <div class="btn-add-text">
          <i-usesvg iconfont type="icon-icon-xinjian"></i-usesvg>
          <div>${Object(Q.i18n)("add_new_search_engine")}</div>
        </div>
      </div>
    `}render(){const t=Object.assign(Object.assign({},Xn.a.defaultValue),Wn.editData);return Wn.editData.logo&&(t.bgImage=Wn.editData.logo,Wn.editData.bgType||(t.bgType="image")),r.e`${Wn.editing?r.e`
          <i-editicon
            .sideRatio="${s.settingStore.sideRatio}"
            .value="${t}"
            @on-cancel="${this.cancel}"
            @on-submit="${this._onSubmit}"
            iconType="search-engnie-add"
          ></i-editicon>
        `:this._renderList()} `}};Zn.styles=Qn,Zn=Jn([Object(r.c)("custom-engine-add")],Zn);var tr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let er=class extends a.a{constructor(){super(...arguments),this.active=0,this.tabs=[Object(Q.i18n)("search_engine"),Object(Q.i18n)("additional_search_engine")],this.clickTab=t=>{this.active!==t&&(this.active=t,Wn.cancel())}}render(){return r.e`
      <nav class="nav">
        ${this.tabs.map((t,e)=>r.e`
            <div @click="${()=>this.clickTab(e)}" class="tab ${this.active===e?"active":""}">
              <span class="text">${t}</span>
            </div>
          `)}
      </nav>
      <main class="main">
        ${0===this.active?r.e` <custom-engine></custom-engine> `:r.e` <custom-engine-add></custom-engine-add> `}
      </main>
    `}};er.styles=r.b`
    :host {
      display: block;
      padding: 30px;
      height: 100%;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .nav {
      display: flex;
      background: #fff;
      height: 46px;
      border-radius: 6px;
    }
    /* .tab:first-of-type {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .tab:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    } */
    .tab {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      color: #656565;
      border-radius: 6px;
      background-color: transparent;
      transition: background-color 0.2s, color 0.2s;
    }
    .tab .text {
      max-width: calc(100% - 20px);
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .tab.active {
      background-color: #333333;
      color: #fff;
    }
    .main {
      margin-top: 30px;
    }
  `,tr([Object(r.g)({type:Number})],er.prototype,"active",void 0),er=tr([Object(r.c)("side-search-custom")],er);var ir=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let or=class extends a.a{constructor(){super(...arguments),this.tabsActive=0,this.tabs=[Object(Q.i18n)("default"),Object(Q.i18n)("custom")],this.firstShow=!1,this.changeTabs=t=>{this.tabsActive=t}}firstUpdated(){}beforeShow(){this.firstShow||(this.firstShow=!0,setTimeout(()=>{this.$itabs.setActiveStyle()},20))}render(){return r.e`
      <i-side2-header .title="${Object(Q.i18n)("add_search_engine")}"></i-side2-header>
      <i-tabs class="nav" .active=${this.tabsActive}>
        ${this.tabs.map((t,e)=>r.e`
            <div @click="${()=>this.changeTabs(e)}" class="tab ${this.tabsActive===e?"active":""}">
              <span>${t}</span>
            </div>
          `)}
      </i-tabs>
      <main class="main">
        ${0===this.tabsActive?r.e`<side-search-default class="global-scrollbar"></side-search-default>`:r.e` <side-search-custom></side-search-custom>`}
      </main>
    `}};or.styles=[S.a,r.b`
      :host {
        display: block;
        height: 100%;
      }
      .nav {
        height: 50px;
        padding: 0 30px;
        background-color: #fff;
      }
      .main {
        height: calc(100% - var(--side-header-height) - 50px);
        background-color: #ededed;
      }
      .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        font-weight: 400;
        color: rgba(101, 101, 101, 1);
        cursor: pointer;
        margin-right: 30px;
      }
      .tab:last-of-type {
        margin-right: 0;
      }
      .tab.active {
        font-weight: 500;
        color: #333333;
      }
    `],ir([Object(r.g)({type:Number})],or.prototype,"tabsActive",void 0),ir([Object(r.h)("i-tabs")],or.prototype,"$itabs",void 0),or=ir([Object(r.c)("side-search")],or);i(243);var nr=i(129),rr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const ar=({type:t})=>"hosted_app"===t||"packaged_app"===t||"legacy_packaged_app"===t,sr=async()=>{let t=[];return t=await new n.a(t=>window.chrome.management.getAll(t)),t=t.filter(ar).map(t=>({name:t.name,uid:t.id,src:t.icons&&t.icons.length>0?t.icons[t.icons.length-1].url:null,url:"chrome-app://"+t.id,description:t.description,_footer:t.description||Object(Q.i18n)("no_description")})),t},lr=[{type:"search",text:Object(Q.i18n)("search_result"),logo:i(667)},{type:"popular",text:Object(Q.i18n)("popular"),logo:i(668)},{source:"shareByUser",text:Object(Q.i18n)("share_by_user"),logo:i(669)},{type:"app",text:Object(Q.i18n)("application"),logo:i(670)},{type:"news",text:Object(Q.i18n)("news"),logo:i(671)},{type:"music",text:Object(Q.i18n)("music_video"),logo:i(672)},{type:"photos",text:Object(Q.i18n)("photos"),logo:i(673)},{type:"shopping",text:Object(Q.i18n)("shopping"),logo:i(674)},{type:"social",text:Object(Q.i18n)("social"),logo:i(675)},{type:"sports",text:Object(Q.i18n)("sports"),logo:i(676)},{type:"life",text:Object(Q.i18n)("life_style"),logo:i(677)},{type:"games",text:Object(Q.i18n)("games"),logo:i(678)},{type:"education",text:Object(Q.i18n)("education"),logo:i(679)},{type:"tech",text:Object(Q.i18n)("tech"),logo:i(680)},{type:"finance",text:Object(Q.i18n)("finance"),logo:i(681)},{type:"read",text:Object(Q.i18n)("read"),logo:i(682)},{type:"others",text:Object(Q.i18n)("others"),logo:i(683)}];class cr{constructor(){this.listData=[],this.params={page:0},this.loading=null,this.activeNav=1,this.last=!1,this.networkError=!1,this.noAppPermission=null,this.reqPermission=async()=>{try{await nr.a.request(["management"]);const t=await sr();Object(x.i)(()=>{this.noAppPermission=!1,this.listData=t.concat(this.listData)})}catch(t){}}}async getList(t,e=!1){this.loading=!0,this.networkError=!1,this.last=!1,this.params=t;const{data:i,error:o}=await ut.b.getIcon(Object.assign({},t));o?Object(x.i)(()=>{o.__CANCEL__||(this.loading=!1,this.networkError=!0)}):Object(x.i)(()=>{this.loading=!1,i.totalPages===i.nextPage&&(this.last=!0),this.listData=e?this.listData.concat(i.icons):i.icons})}async loadNextPage(){if(this.last)return;let t=this.params.page;this.networkError||(t+=1),this.getList(Object.assign(Object.assign({},this.params),{page:t}),!0)}async search(t){this.getList(t)}async changeNav(t){if(this.activeNav=t,0===t)return;const e=lr[t],{type:i,source:o}=e,n={page:0};if(i&&(n.type=i),o&&(n.source=o),l.i&&"app"===i){let t=[];const e=await nr.a.has(["management"]);e&&(t=await sr()),Object(x.i)(()=>{this.listData=t,this.noAppPermission=!e})}else this.listData=[];this.getList(n,"app"===i)}}rr([x.g],cr.prototype,"listData",void 0),rr([x.g],cr.prototype,"params",void 0),rr([x.g],cr.prototype,"loading",void 0),rr([x.g],cr.prototype,"activeNav",void 0),rr([x.g],cr.prototype,"last",void 0),rr([x.g],cr.prototype,"networkError",void 0),rr([x.g],cr.prototype,"noAppPermission",void 0),rr([x.b],cr.prototype,"getList",null),rr([x.b],cr.prototype,"loadNextPage",null),rr([x.b],cr.prototype,"search",null),rr([x.b],cr.prototype,"changeNav",null),rr([x.b],cr.prototype,"reqPermission",void 0);const pr=new cr;var dr=r.b`:host {
  display: block;
  height: 100%;
}
[hidden] {
  display: none !important;
}
.content-header {
  display: flex;
  align-items: center;
  height: 80px;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 1px solid #efefef;
}
.content-header .default-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-header .default-title .search-box {
  background-color: #fff;
  width: 320px;
  height: 40px;
  border-radius: 6px;
}
.content-header .default-title .custom-btn {
  position: relative;
  background-color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}
.content-header .default-title .custom-btn:hover {
  opacity: 0.8;
}
.content-header .default-title .custom-btn .img {
  width: 24px;
  height: 24px;
}
.content-header .custom-title {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #656565;
  line-height: 18px;
  cursor: pointer;
}
.content-header .custom-title .img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  color: #555;
}
.content-header .custom-title:hover {
  color: #555;
}
.content {
  height: calc(100% - 80px);
}
.custom-icon-scroll-box {
  height: 100%;
}
icons-custom {
  z-index: 1111;
}
icons-custom[show] {
  display: block;
}
`,hr=(i(541),r.b`:host {
  --nav-item-height: 46px;
  display: flex;
  height: 100%;
  overflow: hidden;
}
.side-nav.hide-search {
  margin-top: calc(18px - var(--nav-item-height));
}
.aside-scrollbar {
  width: 160px;
  background-color: #fff;
}
.side-nav {
  position: relative;
  padding-top: 0;
  margin-top: 18px;
  padding-left: 10px;
  padding-right: 6px;
  padding-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow-y: auto;
  transition: margin 0.2s;
}
.side-nav .nav-item:first-child {
  pointer-events: none;
}
.side-nav .nav-item {
  position: relative;
  z-index: 1;
  padding: 12px 0;
  padding-left: 4px;
  font-size: 13px;
  font-weight: 400;
  color: #999;
  line-height: 18px;
  height: 18px;
  cursor: pointer;
  transition: color 0.2s, height 0.2s;
  display: flex;
  align-items: center;
}
.side-nav .nav-item:hover {
  color: #333333;
}
.side-nav .nav-item:hover:after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: background 0.2s;
  background: rgba(245, 245, 245, 0.8);
  border-radius: 6px;
}
.side-nav .nav-item:hover .nav-item-logo {
  color: rgba(51, 51, 51, 0.8);
}
.side-nav .nav-item.active {
  color: #333;
  font-weight: 500;
  border-radius: 6px;
}
.side-nav .nav-item.active .nav-item-logo {
  color: #333;
}
.side-nav .nav-item-logo {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: #bbb;
  transition: color 0.2s;
}
.side-nav .nav-item-text {
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.side-nav .nav-item-holder {
  flex-shrink: 0;
}
.side-nav::after {
  position: absolute;
  width: 100%;
  height: calc(var(--target-height, 0) * 1px);
  top: calc(var(--target-top, -500) * 1px);
  border-right: 2px solid #333;
  right: 0;
  transition: top 0.2s, height 0.2s;
}
.side-nav[style]::after {
  content: '';
}
.main {
  width: 220px;
  height: auto;
  box-sizing: content-box;
  padding-top: 32px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.observer-holder {
  height: 40px;
}
.no-content {
  text-align: center;
}
.no-content img {
  display: block;
  margin: auto;
  margin-top: 100px;
  width: 86px;
  height: 86px;
}
.no-content span {
  margin-top: 6px;
  height: 24px;
  font-size: 14px;
  font-weight: 300;
  color: #999999;
  line-height: 24px;
}
.card {
  padding: 8px 16px 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}
.card:not(:last-of-type) {
  margin-bottom: 32px;
}
.card-header {
  display: flex;
  align-items: center;
  height: 20px;
  justify-content: space-between;
}
.card-header .title-left {
  display: flex;
  align-items: center;
}
.card-header .img-box {
  position: relative;
  margin-top: -8px;
  width: 52px;
  height: 52px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-header .added-icon {
  width: 14px;
  height: 14px;
  position: absolute;
  bottom: 6px;
  right: 4px;
}
.card-header .img-icon {
  border-radius: 50%;
  object-fit: cover;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
}
.card-header .title {
  max-width: 120px;
  margin-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
}
.card-header .link-box {
  flex-shrink: 0;
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.card-header .link-box:after {
  position: absolute;
  content: '';
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
}
.card-header .link,
.card-header .link-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.card-header .link-hover {
  visibility: hidden;
  color: #c3c3c3;
  transition: 0.2s color;
}
.card-header .link-box:hover .link-hover {
  visibility: visible;
  color: #333;
}
.card-header .link-box:hover .link {
  visibility: hidden;
}
.card-content {
  margin-top: 16px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
}
.card-content .user-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-content .desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
.card-footer .add-btn {
  min-width: 94px;
  height: 34px;
}
.no-more,
.loading-more {
  margin-top: 20px;
  text-align: center;
  color: #b6b6b6;
  line-height: 1.3;
}
.loading-more-mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
}
.loading-more-mask span {
  color: #b6b6b6;
}
.loading-more-mask[hidden] {
  display: none;
}
.loading-error-line[hidden],
.loading-error-mask[hidden] {
  display: none;
}
.loading-error-line {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-error-mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.loading-error-mask .loading-error-content {
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loading-error-mask .loading-error-content .img {
  width: 86px;
  height: 86px;
  margin-bottom: 10px;
}
.networkerr-text-box {
  height: 24px;
  line-height: 24px;
  background: #ebebeb;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.networkerr-text-box .networkerr-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  line-height: 17px;
  margin-right: 4px;
}
.networkerr-text-box .networkerr-text-reload {
  color: #333;
  width: 12px;
  height: 12px;
}
.networkerr-text-box:hover .networkerr-text,
.networkerr-text-box:hover .networkerr-text-reload {
  color: #555;
}
.no-app-permission-box {
  margin: -10px auto 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.no-app-permission {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  cursor: pointer;
  height: 24px;
  background: #ebebeb;
  border-radius: 6px;
  padding: 0 10px;
  box-sizing: border-box;
}
.no-app-permission .dot {
  margin-right: 4px;
  width: 6px;
  height: 6px;
  background: #fb7f0c;
  border-radius: 50%;
}
.no-app-permission .text {
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  line-height: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-app-permission .text:hover {
  color: #555;
}
`),ur=i(685),gr=i.n(ur);async function fr(t){t||(t=gr.a);const e=await async function({img:t,isApp:e}){const i=document.createElement("canvas");i.setAttribute("width","300"),i.setAttribute("height","300");const o=i.getContext("2d"),r=new Image;if(r.src=t,r.setAttribute("crossOrigin","Anonymous"),await new n.a((t,e)=>{r.addEventListener("load",t),r.addEventListener("error",e)}),e){const t={width:r.width,height:r.height},e=t.height/t.width;t.width=180,t.height=e*t.width,o.drawImage(r,(300-t.width)/2,(300-t.height)/2,t.width,t.height)}else o.drawImage(r,0,0,300,300);return i.toDataURL("image/png")}({img:t,isApp:!0}),{data:i,error:o}=await ut.f.uploadFile(c.a.convertBase64ToBlob(e),c.a.randomId("appicon-")+".png","custom-icon");return o?null:i.url}var mr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let br=class extends a.a{constructor(){super(...arguments),this.observer=null,this.intiateScrollObserver=()=>{const t={root:this.$main,rootMargin:"0px 0px 200px"};this.observer=new IntersectionObserver(t=>{t[0].intersectionRatio>0&&this._scrollBottom()},t),this.observer.observe(this.$observer)},this.setActiveStyle=()=>{this.$itabs.setActiveStyle()}}firstUpdated(){this.intiateScrollObserver(),this._activeThis(1)}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}_scrollBottom(){pr.last||pr.loading||pr.loadNextPage()}_activeThis(t){if(t!==pr.activeNav){if(0===pr.activeNav&&0!==t){const e=new CustomEvent("clear-search",{bubbles:!0,composed:!0,detail:{value:t}});this.dispatchEvent(e)}pr.changeNav(t),this.scrollToTop()}}scrollToTop(){this.$main.scrollTop=0}scrollSideToTop(){this.$side.scrollTop=0}async _addApp(t){const e={name:t.name,uuid:t.uid,bgType:"image",bgImage:t.src,updatetime:Date.now(),id:c.a.randomId("siteId-"),target:t.url};if(e.target.startsWith("infinity://")){if(e.type="app",e.target===J.j.target){const{getCurrentWeather:t}=await Promise.resolve().then(i.bind(null,473)),o=t();e.name=o.name||J.j.name,e.bgColor=o.bgColor||J.j.bgColor,e.bgImage=o.bgImg||J.j.bgImage,e.updatetime=Date.now()}}else e.type="web";if(e.target.startsWith("chrome-app://")&&(e.bgColor="#fff",e.bgImage=await fr(e.bgImage),!e.bgImage))return void it.message.error(Object(Q.i18n)("upload_file_error"));const o=s.siteStore.addSite(e,s.siteStore.currentPageIndex);j.a.sendEvent({action:{addDefaultIcon:c.a.getTargetLogDomain(e.target)}}),document.querySelector("newtab-main").toPage(o)}_openApp({url:t,uid:e},i){if(j.a.sendEvent({action:{openDefaultIcon:c.a.getTargetLogDomain(t)}}),"infinity://settings"===t){const t=new CustomEvent("open-setting",{bubbles:!0,composed:!0});return void this.dispatchEvent(t)}const{link:o}=s.settingStore.setting;t.startsWith("chrome-app://")?c.a.openChromeApp(e,o.icon,i):t.startsWith("infinity://")?"infinity://gmail"===t?c.a.openUrl("https://mail.google.com/mail/ca",o.icon,i):"infinity://chrome-apps"===t?(s.pluginStore.show(t),K.a.openModal()):s.pluginStore.show(t):c.a.openUrl(t,o.icon,i)}_replaceErrorImg(t){t.currentTarget.src=i(686)}render(){const{activeNav:t}=pr,{uids:e}=s.siteStore;return r.e`
      <div
        class="aside-scrollbar global-scrollbar"
        style="
          flex-shrink: 0;
          height: 100%;
        "
      >
        <i-tabs
          type="horizontally"
          .active="${pr.activeNav}"
          class="side-nav ${0===t?"":"hide-search"}"
          style="overflow: hidden; height: auto;"
        >
          ${lr.map((t,e)=>r.e`<div
              @click="${()=>this._activeThis(e)}"
              class="nav-item ${e===pr.activeNav?"active":""}"
            >
              <i-svg class="nav-item-logo" src="${t.logo}"></i-svg>
              <span class="nav-item-text">${t.text}</span>
            </div>`)}
          <div class="nav-item-holder"></div>
        </i-tabs>
      </div>

      <div
        class="main-scrollbar global-scrollbar"
        style="
        height: 100%;
        position: relative;
        flex-grow: 1;
        "
      >
        <main class="main">
          ${pr.noAppPermission&&"app"===lr[t].type?r.e`
                <div class="no-app-permission-box">
                  <div
                    class="no-app-permission"
                    @click="${()=>{pr.reqPermission()}}"
                  >
                    <span class="dot"></span>
                    <span class="text">${Object(Q.i18n)("get_app_permission")}</span>
                  </div>
                </div>
              `:null}
          ${pr.listData.map(o=>r.e`<section class="card">
              <div class="card-header">
                <div class="title-left">
                  <div class="img-box">
                    <img
                      class="img-icon"
                      width="40"
                      height="40"
                      loading="lazy"
                      @error="${this._replaceErrorImg}"
                      src="${Object(ot.d)(o.src)}"
                      alt=""
                    />
                    ${e.has(o.uid+"#"+o.url)?r.e` <img class="added-icon" src="${i(687)}" alt="" />`:r.e``}
                  </div>
                  <div class="title">${o.name}</div>
                </div>

                <div @click="${t=>this._openApp(o,t)}" class="link-box">
                  <img class="link" src="${i(542)}" />
                  <i-svg class="link-hover" src="${i(542)}"></i-svg>
                </div>
              </div>
              <div class="card-content">
                ${"shareByUser"===lr[t].source?r.e` <div class="user-desc">${Object(Q.i18n)("come_from")} ${o.userName}</div> `:""}
                <div class="desc">${o._footer}</div>
              </div>
              <div class="card-footer">
                <infinito-button white class="add-btn" @click="${()=>this._addApp(o)}"
                  >${Object(Q.i18n)("add")}</infinito-button
                >
              </div>
            </section>`)}
          <!-- 末尾的网络错误 -->
          <div .hidden="${!(pr.networkError&&0!==pr.listData.length)}" class="loading-error-line">
            <div
              @click="${()=>{pr.loadNextPage()}}"
              class="networkerr-text-box"
            >
              <span class="networkerr-text">${Object(Q.i18n)("icon_network_error")}</span
              ><i-svg class="networkerr-text-reload" src="${i(543)}"></i-svg>
            </div>
          </div>
          <!-- 铺满的网络错误 -->
          <div .hidden="${!(pr.networkError&&0===pr.listData.length)}" class="loading-error-mask">
            <div class="loading-error-content">
              <img class="img" src="${i(688)}" alt="" />
              <div
                @click="${()=>{pr.loadNextPage()}}"
                class="networkerr-text-box"
              >
                <span class="networkerr-text">${Object(Q.i18n)("icon_network_error")}</span
                ><i-svg class="networkerr-text-reload" src="${i(543)}"></i-svg>
              </div>
            </div>
          </div>
          <!-- 末尾的loading -->
          <div .hidden="${!(0!==pr.listData.length&&pr.loading)}" class="loading-more">
            <infinito-spin spinning .isSvg=${l.p} style="width:60px;height:30px;margin:auto"></infinito-spin>
          </div>
          <!-- 铺满的loading -->
          <div .hidden="${!(0===pr.listData.length&&pr.loading)}" class="loading-more-mask">
            <infinito-spin spinning .isSvg=${l.p} style="width:60px;height:30px"></infinito-spin>
          </div>
          <!-- 没有更多了 -->
          <div .hidden="${!(pr.last&&0!==pr.listData.length)}" class="no-more">${Object(Q.i18n)("no_more")}</div>
          <!-- 搜索没有数据 -->
          ${!1!==pr.loading||0!==pr.listData.length||pr.networkError?"":r.e`
                <div class="no-content">
                  <img src="${i(689)}" alt="" />
                  <span>${Object(Q.i18n)("no_search_result")}</span>
                </div>
              `}
          <div class="observer-holder"></div>
        </main>
      </div>
    `}};br.styles=[S.a,hr],mr([Object(r.h)("i-tabs")],br.prototype,"$itabs",void 0),mr([Object(r.h)(".aside-scrollbar")],br.prototype,"$side",void 0),mr([Object(r.h)(".main-scrollbar")],br.prototype,"$main",void 0),mr([Object(r.h)(".observer-holder")],br.prototype,"$observer",void 0),mr([Object(r.d)({once:!0})],br.prototype,"_replaceErrorImg",null),br=mr([Object(r.c)("icons-default")],br);var yr=r.b`:host {
  display: block;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.label-box {
  max-width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.label-box .label {
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.input {
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 20px;
  box-sizing: content-box;
  padding-bottom: 10px;
  width: 100%;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.input::placeholder {
  color: #999999;
}
.input:-moz-read-only {
  cursor: not-allowed;
  color: #999999;
}
.input:read-only {
  cursor: not-allowed;
  color: #999999;
}
`,vr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const wr=async t=>null;let xr=class extends r.a{constructor(){super(...arguments),this.label="",this.defaultValue="",this.value="",this.validateMsg=i18n("format_error"),this.placeholder=i18n("please_enter_text"),this.readonly=!1,this.validate=wr,this.validateStatus=null,this.onChange=t=>{const e=t.currentTarget.value;!1===this.validateStatus&&this.validate(e)&&(this.validateStatus=!0),this.value=e,this.emitChangeEvent(e)},this.emitChangeEvent=t=>{const e=new CustomEvent("on-change",{detail:{value:t}});this.dispatchEvent(e)},this.checkValidity=async()=>(this.validateStatus=await this.validate(this.value),this.validateStatus),this.reset=()=>{this.value=this.defaultValue,this.emitChangeEvent(this.defaultValue),this.validateStatus=null}}render(){return r.e`
      <div class="item">
        <div class="label-box">
          <span class="label">${this.label}</span
          ><span .hidden="${!1!==this.validateStatus}" class="error ellipsis">*${this.validateMsg}</span>
        </div>

        <slot name="input">
          <input
            class="input"
            autocomplete="off"
            type="text"
            .value="${this.value||""}"
            .placeholder="${this.placeholder}"
            .readOnly="${this.readonly}"
            @blur="${this.checkValidity}"
            @input=${t=>{this.onChange(t)}}
          />
        </slot>
      </div>
    `}};xr.styles=yr,vr([Object(r.g)({type:String})],xr.prototype,"label",void 0),vr([Object(r.g)({type:String})],xr.prototype,"defaultValue",void 0),vr([Object(r.g)({type:String})],xr.prototype,"value",void 0),vr([Object(r.g)({type:String})],xr.prototype,"validateMsg",void 0),vr([Object(r.g)({type:String})],xr.prototype,"placeholder",void 0),vr([Object(r.g)({type:Boolean})],xr.prototype,"readonly",void 0),vr([Object(r.g)({attribute:!1})],xr.prototype,"validate",void 0),vr([Object(r.f)()],xr.prototype,"validateStatus",void 0),xr=vr([Object(r.c)("i-input")],xr);var kr=r.b`.input {
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid #eeeeee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
  background-color: transparent;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
`,_r=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Or=class extends r.a{constructor(){super(...arguments),this.textareaHeight="auto",this.value="",this.placeholder="",this.emitChangeEvent=t=>{const e=new CustomEvent("on-change",{detail:{value:t}});this.dispatchEvent(e)}}setTextareaHeight(t){const e=t.split("\n");if(1===e.length)this.textareaHeight="auto";else{const t=16*e.length;this.textareaHeight=t+2+"px"}}updated(t){t.has("value")&&this.setTextareaHeight(this.value)}render(){return r.e`
      <textarea
        class="input global-scrollbar"
        rows="1"
        style="height:${this.textareaHeight}"
        autocomplete="off"
        @input="${t=>{const e=t.currentTarget.value;this.value=e,this.emitChangeEvent(e),this.setTextareaHeight(e)}}"
        .value="${this.value}"
        .placeholder="${this.placeholder}"
      ></textarea>
    `}};Or.styles=[S.a,kr],_r([Object(r.f)()],Or.prototype,"textareaHeight",void 0),_r([Object(r.g)({type:String})],Or.prototype,"value",void 0),_r([Object(r.g)({type:String})],Or.prototype,"placeholder",void 0),Or=_r([Object(r.c)("i-textarea")],Or);var Sr=r.b`.icon-preview {
  transform: scale(0.25);
  transform-origin: left top;
}
.svg-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  overflow: hidden;
}
`,jr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let $r=class extends r.a{constructor(){super(...arguments),this.bgText="",this.bgFont=30,this.bgColor="",this.iconType="custom-icon",this.fontScale=18/7,this.getImg=()=>new n.a(t=>{t(null)})}get previewFont(){return this.bgFont*this.fontScale+"px 'PingFang SC', 'Microsoft Yahei', monospace, sans-serif"}render(){return r.e`<div class="svg-box">
      <div class="svg-text" style="">
        ${Object(nt.a)(Object(rt.a)({bgFont:this.bgFont,bgText:this.bgText,bgColor:this.bgColor}))}
      </div>
    </div>`}};$r.styles=Sr,jr([Object(r.g)({type:String})],$r.prototype,"bgText",void 0),jr([Object(r.g)({type:Number})],$r.prototype,"bgFont",void 0),jr([Object(r.g)({type:String})],$r.prototype,"bgColor",void 0),jr([Object(r.g)({type:String})],$r.prototype,"iconType",void 0),jr([Object(r.h)(".icon-preview")],$r.prototype,"$preview",void 0),$r=jr([Object(r.c)("i-texticon")],$r);var Ir=r.b`.item {
  position: relative;
  width: 100%;
  height: 100%;
}
.img-item {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.img-dropper {
  position: relative;
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 6px;
  cursor: pointer;
}
.img-dropper[hidden] {
  display: none;
}
.active .preview {
  border-color: transparent;
}
.img-preview {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
}
.img-preview .editing:hover {
  opacity: 1;
}
.img-preview .editing {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
}
.img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
}
.del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  cursor: pointer;
  transition: transform 0.2s;
}
.del:hover {
  transform: scale(1.1);
}
#imgType {
  width: 1px;
  height: 1px;
}
`,Cr=i(355),Tr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Er=class extends r.a{constructor(){super(...arguments),this.cropper=null,this.preViewImgData=null,this.preViewImgUrl="",this.active=!1,this.bgColor="",this.iconType="custom-icon",this.canDelete=!1,this.emitChangeEvent=()=>{const t=new CustomEvent("on-change",{detail:{bgColor:this.bgColor,preViewImgData:this.preViewImgData,preViewImgUrl:this.preViewImgUrl}});this.dispatchEvent(t)},this.initCropper=()=>{this.cropper=Cr.a.create(),this.cropper.addEventListener("on-change",async t=>{const{data:e,color:i}=t.detail;this.bgColor=i,this.preViewImgData=e;const o=this.preViewImgUrl;this.preViewImgUrl=Xo.a.createObjectURL(this.preViewImgData),Xo.a.revokeObjectURL(o),this.emitChangeEvent()})},this.getImg=async()=>{var t,e;const{data:i,error:o}=await ut.f.uploadFile(this.preViewImgData,c.a.randomId("icon-")+".png",this.iconType);if(o){const i=(null===(e=null===(t=o.response)||void 0===t?void 0:t.data)||void 0===e?void 0:e.error)?o.response.data.error:o.message;throw new Error(i)}return{url:i.url,bgColor:this.bgColor}},this._chooseImg=t=>{const e=(t.target.files||t.dataTransfer.files)[0],i=new FileReader;i.readAsDataURL(e),t.currentTarget.value=null,i.onload=()=>{this.cropper.init(i.result,this.bgColor),this.cropper.show()}},this.reset=()=>{this.preViewImgUrl&&Xo.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgData=null,this.preViewImgUrl="",this.bgColor="",this.emitChangeEvent()},this._delImg=t=>{t.stopPropagation(),this.preViewImgUrl&&Xo.a.revokeObjectURL(this.preViewImgUrl),this.preViewImgData=null,this.preViewImgUrl="",this.emitChangeEvent()},this._editImg=()=>{this.cropper.init(this.preViewImgUrl,this.bgColor),this.cropper.show()}}firstUpdated(){this.initCropper()}disconnectedCallback(){Cr.a.destroy(),super.disconnectedCallback()}render(){return r.e`
      <div class="item img-item">
        <div class="img-item">
          <input
            @drop="${this._chooseImg}"
            accept="image/*"
            @change="${this._chooseImg}"
            type="file"
            id="imgType"
            style="position:absolute;clip:rect(0 0 0 0);"
          />
          <label
            .hidden="${!!this.preViewImgUrl}"
            class="img-dropper"
            style="${this.active?"background-image: none;":""}"
            for="imgType"
          >
            <i-usesvg style="color:#C3C3C3;width:22px;height:22px" type="icon-xingzhuangjiehe2x" iconfont></i-usesvg>
          </label>
          <div
            .hidden="${!this.preViewImgUrl}"
            class="img-dropper img-preview"
            style="border:${this.active?"none":"1px solid #DADCE0"};background-color:${this.bgColor||"transparent"}; background-image: url('${this.preViewImgUrl}')"
            @click="${this._editImg}"
          >
            <div class="editing">
              <img class="editing-icon" src="${i(690)}" alt="" />
            </div>
            <img
              .hidden="${!this.canDelete}"
              class="del"
              @click="${this._delImg}"
              src="${i(691)}"
              alt=""
            />
          </div>
        </div>
      </div>
    `}};Er.styles=Ir,Tr([Object(r.g)({type:String})],Er.prototype,"preViewImgUrl",void 0),Tr([Object(r.g)({type:Boolean})],Er.prototype,"active",void 0),Tr([Object(r.g)({type:String})],Er.prototype,"bgColor",void 0),Tr([Object(r.g)({type:String})],Er.prototype,"iconType",void 0),Tr([Object(r.g)({type:Boolean})],Er.prototype,"canDelete",void 0),Er=Tr([Object(r.c)("i-imgicon")],Er);var Lr=r.b`:host,
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
:host {
  display: none;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mask {
  background-color: transparent;
}
.custom-card {
  position: absolute;
  top: 70px;
  right: 30px;
  width: 360px;
  min-height: 324px;
  box-sizing: border-box;
  padding: 30px 0;
  background: #ffffff;
  box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.21);
  border-radius: 6px;
}
.title-box,
.step-0 {
  margin-left: 20px;
  margin-right: 20px;
}
.title-box {
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-box .title-side-back {
  cursor: pointer;
}
.title-box .title-side {
  display: flex;
  align-items: center;
  width: calc(100% - 30px);
}
.title-box .back {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.title-box .title {
  height: 28px;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.title-box .close {
  width: 14px;
  height: 14px;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.3;
}
.title-box .close:hover {
  opacity: 0.5;
}
i-input {
  display: block;
  margin-top: 20px;
}
.step-btn {
  width: 260px;
  height: 40px;
  margin: auto;
  margin-top: 30px;
}
.step-0 .step-btn {
  margin-top: 30px;
}
.step-0,
.step-1 {
  overflow: auto;
  overflow-x: hidden;
}
.step-1 {
  max-height: calc(100vh - 270px);
  max-height: calc((100vh - 270px * var(--side-ratio)) / var(--side-ratio));
}
.step-1 .item {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.step-1 .label-box {
  max-width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.step-1 .label-box .label {
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
}
.step-1 .target-content {
  position: relative;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.step-1 .target-content .target-name {
  position: relative;
  max-width: 40%;
}
.step-1 .target-content .target-gap {
  margin-left: 4px;
  margin-right: 4px;
  flex-shrink: 0;
  width: 1px;
  height: 14px;
  background-color: #999999;
}
.step-1 .imgs-box {
  display: flex;
}
.step-1 .img-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
}
.step-1 .img-item-box .name {
  margin-top: 8px;
  max-width: 80px;
  height: 16px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  color: #b3b3b3;
}
.step-1 .active .img-item {
  box-shadow: 0px 4px 8px 0px rgba(59, 62, 64, 0.73);
}
.step-1 .active .name {
  font-weight: 500;
  color: #4d4d4d;
}
.step-1 .img-item {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s box-shadow;
}
.step-1 .color-img {
  overflow: hidden;
}
.step-1 .cloud-imgs-box {
  display: flex;
}
.step-1 .cloud-imgs-box .cloud-img-box:not(:last-of-type) {
  margin-right: 10px;
}
.step-1 .color-img-box {
  margin-right: 17px;
  position: relative;
}
.step-1 .color-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  right: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.step-1 .local-img-box {
  position: relative;
  margin-left: 17px;
}
.step-1 .cloud-imgs-box + .local-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  left: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.step-1 .cloud-imgs-box {
  margin: 0 17px;
}
.step-1 .color-type-box {
  position: relative;
  margin-top: 18px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background: #f5f8fa;
}
.step-1 .color-type-box:after {
  position: absolute;
  content: '';
  top: -19px;
  left: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #f5f8fa;
}
.permission-img {
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  display: flex;
  align-items: center;
  justify-content: center;
}
.permission-img img {
  width: 28px;
  height: 28px;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
`,Pr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Rr=class extends a.a{constructor(){super(...arguments),this.value=Object.assign({},Xn.a.defaultValue),this.step=0,this.hasPermission=!1,this.subSpin=!1,this.imgType=null,this.imgIndex=0,this.localImageError=!1,this.localImagePreViewUrl="",this.cloudImgs=[],this.show=!1,this.isAutoName=!0,this.colors=["rgba(255,71,52,1)","rgba(255,122,9,1)","rgba(255,207,12,1)","rgba(42,233,121,1)","rgba(44,214,223,1)","rgba(0,116,255,1)","rgba(109,9,255,1)","rgba(255,36,160,1)"],this.close=()=>{const t=new CustomEvent("on-close");this.dispatchEvent(t),this.reset()},this.toNextStep=async()=>{const t=this.$step0.querySelectorAll("i-input");if((await n.a.all(Array.prototype.map.call(t,async t=>await t.checkValidity()))).includes(!1))return;const{name:e}=this.value;let i="";i=e.length>3?e.substr(0,2):e,this.cloudImgs=[],this.changeValue({bgText:i}),(this.hasPermission||l.r)&&this.getUrlIcon(),this.step=1},this.back=()=>{1===this.step&&(this.step=0,this.changeValue({bgType:"color"}),this.cloudImgs=[])},this.submit=async()=>{this.subSpin=!0;try{await this.saveImage()}catch(t){if(this.subSpin=!1,!this.localImagePreViewUrl)return;return void(t&&t.message?it.message.error(t.message):it.message.error(t||"upload error"))}this.subSpin=!1;const t={value:Object.assign({},this.value)};"color"!==this.value.bgType||this.value.bgColor||(t.value.bgColor=this.colors[0]),t.value.target=this.getFormateUrl(this.value.target),j.a.sendEvent({action:{addCustomIcon:c.a.getTargetLogDomain(t.value.target)}}),s.siteStore.submitSite(t.value),this.close()},this.getPermissionUrl=()=>{let t=[];return t=l.k?["http://*/","https://*/"]:["<all_urls>"],t}}changeValue(t){this.value=Object.assign(Object.assign({},this.value),t)}changeTarget(t){this.changeValue({target:t.currentTarget.value}),this.getTargetInfo()}async getTargetInfo(){let t=this.value.target;if(!t)return;t.includes(":")||(t="http://"+t);if(!/^https?:\/\/(.+\.)+.+/.test(t))return;const{data:e,error:i}=await ut.b.getUrlInfoWithPermission(t.split("?")[0]);if(1===this.step||(null==i?void 0:i.__CANCEL__))return;if(i)return this.isAutoName&&this.changeValue({name:""}),null;const{name:o}=e;this.changeValue({name:o}),this.isAutoName=!0}choosetextImg(){this.changeValue({bgType:"color"})}chooseCloudImg(t){this.changeValue({bgType:"image"}),this.imgType="cloud",this.imgIndex=t}chooseLocalImg(){this.changeValue({bgType:"image"}),this.imgType="local"}async saveImage(){if("color"===this.value.bgType){const t=await this.$texticon.getImg();this.changeValue({bgColorImage:t})}else if("image"===this.value.bgType){let t={};if("cloud"===this.imgType){const e=this.$cloudIcons.querySelectorAll("i-imgicon")[this.imgIndex];t=await e.getImg()}else if("local"===this.imgType){if(!this.localImagePreViewUrl)throw this.localImageError=!0,new Error("none img");t=await this.$localicon.getImg()}this.changeValue({bgImage:t.url,bgColor:t.bgColor})}}getFormateUrl(t){return t.includes(":")?t:"http://"+this.value.target}reset(t=!0){var e;this.step=0,this.value=Object.assign({},Xn.a.defaultValue);this.$step0.querySelectorAll("i-input").forEach(t=>{t.reset()}),t&&(null===(e=this.$localicon)||void 0===e||e.reset())}updated(t){t.has("show")&&!1===this.show&&this.reset()}renderCloudImgs(){return r.e`
      <div class="cloud-imgs-box">
        ${this.cloudImgs.map((t,e)=>r.e`<div
            class="img-item-box cloud-img-box ${"image"===this.value.bgType&&"cloud"===this.imgType&&this.imgIndex===e?"active":""}"
          >
            <div class="img-item cloud-img">
              <i-imgicon
                .preViewImgUrl="${t.url}"
                .bgColor="${"transparent"}"
                .canDelete="${!1}"
                .active="${"image"===this.value.bgType&&"cloud"===this.imgType&&this.imgIndex===e}"
                @on-change="${()=>{this.chooseCloudImg(e)}}"
              ></i-imgicon>
            </div>
            <div class="name ellipsis">${i18n("icon")}${"0"+(e+1)}</div>
          </div>`)}
      </div>
    `}async getUrlIcon(){const t=this.getFormateUrl(this.value.target);let e;e=l.r?await ut.b.getFetchiconUrls(t):await ut.b.getUrlIcon(t.split("?")[0]);const{data:i,error:o}=e;this.cloudImgs=o?[]:i.map(t=>({url:t}))}async getPermission(){try{await nr.a.request([],this.getPermissionUrl()),this.hasPermission=!0,window.__INFINITY__.hasAllUrlPermission=this.hasPermission,this.getUrlIcon()}catch(t){console.log("getPermission ~ error",t)}}async checkPermission(){try{const t=await nr.a.has([],this.getPermissionUrl());this.hasPermission=!!t,window.__INFINITY__.hasAllUrlPermission=this.hasPermission}catch(t){console.log("checkPermission ~ error",t)}}renderPermissionIcon(){return r.e`
      <div class="cloud-imgs-box">
        <div class="img-item-box cloud-img-box ">
          <div @click="${this.getPermission}" class="img-item permission-img">
            <img src="${i(692)}" alt="" />
          </div>
          <div class="name ellipsis">${i18n("get_cloud_icon")}</div>
        </div>
      </div>
    `}firstUpdated(){this.checkPermission()}render(){const t=s.settingStore.sideRatio>.7?0:300*(s.settingStore.sideRatio-.7);return r.e`
      <div class="mask"></div>
      <div class="custom-card">
        <div class="title-box">
          <div @click="${this.back}" class="title-side ${1===this.step?"title-side-back":""}">
            ${1===this.step?r.e`<img src="${Object(ot.a)("back.svg",!1)}" class="back" alt="" /> `:null}
            <span class="title ellipsis">${i18n("custom_site")}</span>
          </div>
          <img @click="${this.close}" src="${i(693)}" class="close" alt="" />
        </div>
        <div .hidden=${0!==this.step} class="step-0">
          <div class="form-box">
            <i-input
              name="target"
              .value="${this.value.target}"
              .label="${i18n("website_address")}"
              .placeholder=${i18n("please_enter_url")}
              .validateMsg=${i18n("please_enter_url")}
              .validate="${async t=>!!t}"
              @on-change="${this.changeTarget}"
            ></i-input>
            <i-input
              name="name"
              .value="${this.value.name}"
              .label=${i18n("website_name")}
              .placeholder=${i18n("name_error")}
              @on-change="${t=>{this.changeValue({name:t.currentTarget.value}),this.isAutoName=!1}}"
            ></i-input>
          </div>
          <infinito-button
            class="step-btn"
            @click="${()=>{this.toNextStep()}}"
            >${i18n("next")}</infinito-button
          >
        </div>
        <div .hidden="${1!==this.step}" class="step-1 global-scrollbar">
          <div class="form-box">
            <div class="item">
              <div class="label-box">
                <span class="label">${i18n("website_address")}</span>
              </div>
              <div class="target-content">
                ${this.value.name?r.e`<div class="target-name ellipsis">${this.value.name}</div>
                      <div class="target-gap"></div>`:null}
                <div class="target-target ellipsis">${this.value.target}</div>
              </div>
            </div>
            <div class="item">
              <div class="label-box">
                <span class="label">${i18n("select_icon")}</span>
                <span
                  .hidden="${"image"!==this.value.bgType||"local"!==this.imgType||!this.localImageError}"
                  class="error ellipsis"
                  >* ${i18n("please_upload_photos")}</span
                >
              </div>
              <div class="imgs-box">
                <div class="img-item-box color-img-box ${"color"===this.value.bgType?"active":""}">
                  <div class="img-item color-img" @click="${this.choosetextImg}">
                    <i-texticon
                      .bgColor="${this.value.bgColor||this.colors[0]}"
                      .bgFont="${this.value.bgFont}"
                      .bgText="${this.value.bgText}"
                    ></i-texticon>
                  </div>
                  <div class="name ellipsis">${i18n("color_icon")}</div>
                </div>
                ${this.cloudImgs.length?this.renderCloudImgs():!1===this.hasPermission&&l.l&&!l.h?this.renderPermissionIcon():null}
                <div
                  class="img-item-box local-img-box ${"image"===this.value.bgType&&"local"===this.imgType?"active":""}"
                >
                  <div class="img-item local-img">
                    <i-imgicon
                      class="local-img-icon"
                      .preViewImgUrl="${this.value.bgImage}"
                      .bgColor="${"transparent"}"
                      .canDelete="${!0}"
                      .active=${"image"===this.value.bgType&&"local"===this.imgType}
                      @on-change="${t=>{this.localImagePreViewUrl=t.detail.preViewImgUrl,this.localImagePreViewUrl&&this.chooseLocalImg()}}"
                    ></i-imgicon>
                  </div>
                  <div class="name ellipsis">${i18n("local_icon")}</div>
                </div>
              </div>
            </div>
            <div .hidden="${"color"!==this.value.bgType}" class="color-type-box">
              <i-input name="displayname" .label=${i18n("icon_bg_text")} .placeholder=${i18n("please_input_bg_text")}>
                <div class="bg-text" slot="input">
                  <i-textarea
                    .value="${this.value.bgText}"
                    .placeholder="${i18n("show_name")}"
                    @on-change="${t=>{this.changeValue({bgText:t.detail.value})}}"
                  ></i-textarea>
                </div>
              </i-input>
              <i-input name="displayfont" .label=${i18n("font_size")}>
                <div class="slider" style="margin-top: -2px;" slot="input">
                  <infinito-slider
                    style="--bg-color: #f5f8fa;"
                    @on-change="${t=>{this.changeValue({bgFont:t.detail.value})}}"
                    .value=${this.value.bgFont}
                    .min=${14}
                    .max=${74}
                  ></infinito-slider>
                </div>
              </i-input>
              <i-input name="displaycolor" style="margin-top: 16px;" .label=${i18n("color")}>
                <div class="color" style="margin-top:14px;" slot="input">
                  <i-colorpicker
                    .side="${!0}"
                    .value="${this.value.bgColor||this.colors[0]}"
                    .colors="${this.colors}"
                    .offsetRight="${t}"
                    @on-change="${t=>{this.changeValue({bgColor:t.detail.value})}}"
                  ></i-colorpicker>
                </div>
              </i-input>
            </div>
          </div>
          <infinito-button class="step-btn" primary .loading="${this.subSpin}" @click="${this.submit}"
            >${i18n("add")}</infinito-button
          >
        </div>
      </div>
    `}};Rr.styles=[S.a,Lr],Pr([Object(r.f)()],Rr.prototype,"value",void 0),Pr([Object(r.f)()],Rr.prototype,"step",void 0),Pr([Object(r.f)()],Rr.prototype,"hasPermission",void 0),Pr([Object(r.f)()],Rr.prototype,"subSpin",void 0),Pr([Object(r.f)()],Rr.prototype,"imgType",void 0),Pr([Object(r.f)()],Rr.prototype,"imgIndex",void 0),Pr([Object(r.f)()],Rr.prototype,"localImageError",void 0),Pr([Object(r.f)()],Rr.prototype,"localImagePreViewUrl",void 0),Pr([Object(r.f)()],Rr.prototype,"cloudImgs",void 0),Pr([Object(r.g)({type:Boolean,reflect:!0})],Rr.prototype,"show",void 0),Pr([Object(r.h)(".step-0")],Rr.prototype,"$step0",void 0),Pr([Object(r.h)(".cloud-imgs-box")],Rr.prototype,"$cloudIcons",void 0),Pr([Object(r.h)("i-texticon")],Rr.prototype,"$texticon",void 0),Pr([Object(r.h)(".local-img-icon")],Rr.prototype,"$localicon",void 0),Rr=Pr([Object(r.c)("icons-custom")],Rr);var Dr=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ar=class extends a.a{constructor(){super(...arguments),this.showCustomIconCard=!1,this.handleSearch=t=>{const e=t.detail.text;e?(this.$iconsDefault.scrollToTop(),pr.search({page:0,type:"search",keyword:e}),0!==pr.activeNav&&(pr.changeNav(0),this.$iconsDefault.scrollSideToTop())):0===pr.activeNav&&pr.changeNav(1)},this.clear=()=>{0===pr.activeNav&&pr.changeNav(1)},this.clearSearch=()=>{var t;null===(t=this.$search)||void 0===t||t.clear(!1)},this.focusSearch=()=>{var t;c.a.isTouchScreendevice()||null===(t=this.$search)||void 0===t||t.focus()},this.showAddIcon=()=>{this.showCustomIconCard=!this.showCustomIconCard}}setActiveStyle(){var t;null===(t=this.$iconsDefault)||void 0===t||t.setActiveStyle()}setActiveType(t){0===t&&(this.showCustomIconCard=!1,0===pr.activeNav&&pr.changeNav(1),setTimeout(()=>{this.focusSearch()},20))}render(){return r.e` <div class="content-header">
        <div class="default-title">
          <i-search
            type="white"
            class="search-box"
            .searchBtnPosition="${"left"}"
            style="--height:40px"
            placeholder="${Object(Q.i18n)("search_website")}"
            @i-search="${this.handleSearch}"
            @i-clear=${this.clear}
          >
          </i-search>
          <div @click="${()=>this.showAddIcon()}" class="custom-btn">
            <img src="${i(694)}" alt="" class="img" />
          </div>
        </div>
      </div>
      <div class="content">
        <icons-default @clear-search="${this.clearSearch}"></icons-default>
        <icons-custom
          @on-close="${()=>{this.showCustomIconCard=!1}}"
          .show="${this.showCustomIconCard}"
        ></icons-custom>
      </div>`}};Ar.styles=[S.a,dr],Dr([Object(r.f)()],Ar.prototype,"showCustomIconCard",void 0),Dr([Object(r.h)("icons-default")],Ar.prototype,"$iconsDefault",void 0),Dr([Object(r.h)("i-search")],Ar.prototype,"$search",void 0),Ar=Dr([Object(r.c)("side-icons")],Ar);var Mr=r.b`.user-info {
  position: relative;
  display: flex;
  padding: 4px 0 12px 0;
}
.user-info > div {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
.user-info.login {
  padding-bottom: 24px;
}
.user-info .avatar-img {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  margin-right: 14px;
  border-radius: 50%;
  cursor: pointer;
}
.user-info .user-name-wrapper {
  flex: 1;
  overflow: hidden;
}
.user-info .qr-code {
  position: absolute;
  width: 24px;
  height: 24px;
  top: -16px;
  right: -16px;
  overflow: hidden;
  cursor: pointer;
}
.user-info .qr-code img {
  width: 100%;
}
.user-info .user-name {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  cursor: pointer;
}
.user-info .name {
  margin-right: 6px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  padding: 0 0 2px 4px;
}
.user-info .gender {
  width: 16px;
  height: 16px;
}
.user-info .email {
  font-size: 14px;
  font-weight: 300;
  color: #828282;
}
.user-info .svg {
  margin-left: auto;
  cursor: pointer;
}
.user-info i-svg {
  width: 16px;
  height: 16px;
}
.user-info + infinito-modal {
  --border-radius: 6px;
}
.synchronous {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  border-width: 1px 0;
  border-style: solid;
  border-color: #eee;
}
.synchronous .title {
  color: #333;
  font-size: 12px;
  font-weight: 500;
}
.synchronous .time {
  margin-top: 8px;
  font-size: 12px;
  color: #6f6f6f;
}
.synchronous .time.hide {
  display: none;
}
.backup-wrapper,
.backup-wrapper .mange-backup,
.backup-wrapper .backup-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.backup-wrapper i-svg {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.backup-wrapper .mange-backup {
  margin: 0;
  cursor: pointer;
}
.backup-wrapper .mange-backup i-svg {
  margin-left: 5px;
}
.backup-wrapper span {
  color: #333;
  font-size: 12px;
  font-weight: 500;
}
.backup-wrapper .backup-btn {
  margin: 0;
  cursor: pointer;
}
.backup-wrapper .backup-btn i-svg {
  margin-right: 5px;
}
infinito-card[close] + infinito-card:not([close]) {
  margin-top: 30px;
}
infinito-card:not([close]) + infinito-card[close] {
  margin-top: 30px;
}
infinito-card {
  transition: margin-top 0.3s ease-in-out;
}
infinito-card p {
  margin: 0;
  margin-top: 12px;
  color: #656565;
  font-size: 12px;
  line-height: 22px;
}
infinito-card infinito-button {
  --button-color: #efefef;
  --border-color: none;
  --hover-color: #dfdfdf;
  --hover-font-color: #333;
  width: 122px;
  height: 42px;
}
infinito-card infinito-button.use-basic-version {
  width: 182px;
}
infinito-card .btns {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
infinito-card .btns.rating {
  padding: 0 30px;
}
infinito-card .payment .payment-cover {
  display: block;
  width: 280px;
  margin: 0 auto;
  margin-top: 40px;
}
infinito-card .payment + .btns {
  margin-bottom: 10px;
}
infinito-card .wechat_desc {
  -moz-user-select: text;
       user-select: text;
}
infinito-card .wechat {
  width: 132px;
  height: 132px;
  margin: 30px auto 0;
  box-shadow: 0px 12px 20px -8px rgba(0, 0, 0, 0.1);
}
infinito-card .wechat img {
  width: 100%;
  height: 100%;
}
.choose-plan {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.wallpaper-container {
  width: 100%;
  margin: 20px 0 0;
}
.wallpaper-container .wp-inner-container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  border-radius: 4px;
  transition: background-color 200ms ease 0s;
}
.wallpaper-container .wp-download-button {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 200ms;
  cursor: pointer;
}
.wallpaper-container .wp-download-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.wallpaper-container .wp-inner-container .wp-hover-mask:hover {
  background-color: rgba(0, 0, 0, 0.24);
}
.wallpaper-container .wp-inner-container .wp-hover-mask:hover .wph-mask-button {
  display: block;
}
@media only screen and (hover: none) {
  .wallpaper-container .wp-inner-container .wp-hover-mask {
    background-color: rgba(0, 0, 0, 0.24);
  }
  .wallpaper-container .wp-inner-container .wp-hover-mask .wph-mask-button {
    display: block;
  }
}
.wallpaper-container .wp-hover-mask {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 150ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallpaper-container .wp-hover-mask .wph-mask-button {
  display: none;
  max-width: 145px;
  height: 40px;
  background: rgba(51, 51, 51, 0.6);
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #ffffff;
  line-height: 20px;
  box-sizing: border-box;
  padding: 0 4px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  padding: 0 15px;
}
.wallpaper-container .slider-wrapper {
  margin-top: 30px;
}
.wallpaper-container .mask:first-child {
  margin-bottom: 25px;
}
.wallpaper-container .mask > p {
  font-size: 14px;
  color: #454545;
  font-weight: 400;
  margin-bottom: 17px;
}
.suport {
  margin-top: 30px;
}
.suport infinito-button {
  position: relative;
  --hover-color: inherit;
  --button-padding: 0;
  --border-width: 0;
  width: 150px;
  height: 40px;
  transition: opacity 0.2s;
}
.suport infinito-button:hover {
  opacity: 0.7;
}
.suport infinito-button.facebook-group span {
  width: 105px;
  left: 35px;
  line-height: 20px;
}
.suport infinito-button.qq-group span {
  left: 60px;
  line-height: 20px;
}
.suport infinito-button img {
  width: 100%;
  height: 100%;
}
.suport infinito-button span {
  position: absolute;
  top: 10px;
  color: #fff;
  transition: all 300ms;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.suport infinito-button span:hover {
  opacity: 0.7;
}
.suport infinito-button span img {
  width: 100%;
  height: 100%;
}
.version {
  margin: 12px 0 8px;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  width: 33%;
  margin-top: 16px;
}
li span {
  display: block;
  width: 100%;
  word-break: break-all;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
li span:hover {
  opacity: 0.8;
}
.icons {
  display: flex;
  flex-wrap: wrap;
}
.icons p {
  width: 40px;
  height: 40px;
  margin-top: 30px;
  margin-right: 30px;
  transition: all 300ms;
  cursor: pointer;
}
.icons p:hover {
  opacity: 0.6;
}
.icons p:nth-child(5n) {
  margin-right: 0;
}
.icons img {
  width: 100%;
  height: 100%;
}
.use-basic-account-migration {
  padding: 20px;
  background: #fff;
}
.use-basic-account-migration .logo {
  padding: 10px 0 30px;
}
.use-basic-account-migration .logo img {
  display: block;
  width: 68px;
  margin: 0 auto;
}
.use-basic-account-migration .control {
  margin-bottom: 20px;
}
.use-basic-account-migration .control .top {
  display: flex;
}
.use-basic-account-migration .control span {
  color: #333;
  font-weight: 500;
}
.use-basic-account-migration .control span.red-msg {
  margin-left: 4px;
  color: #ea4747;
  font-size: 14px;
  font-weight: 400;
}
.use-basic-account-migration .control input {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
}
.use-basic-account-migration .btns {
  margin: 60px 0 20px;
}
.use-basic-account-migration infinito-button {
  display: block;
  width: 220px;
  height: 38px;
  margin: 0 auto;
}
.use-basic-account-migration infinito-button.cancel {
  --border-color: #eee;
  --button-color: #eee;
  margin-top: 14px;
}
.backup-recovery {
  --padding-bottom: 0;
  --margin-left: 0;
  --margin-right: 0;
}
.backup-btn-box .backup-btn-card {
  padding: 0 20px;
}
.backup-btn-box .backup-btn-content {
  padding: 20px 0;
  border-top: 1px solid #eeeeee;
}
.backup-btn-box .backup-btn-card:first-of-type {
  margin-top: 4px;
}
.backup-btn-box .backup-btn-card:first-of-type .backup-btn-content {
  border-top-color: transparent;
}
.backup-btn-box .repair-card.focus {
  animation: focusblink 1.2s ease-in-out;
}
@keyframes focusblink {
  0% {
    transform: scale(0.95);
    box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0);
    background: #fff;
  }
  35% {
    transform: scale(1.05);
    box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.2);
    background: #fcfcfc;
  }
  70% {
    transform: scale(1);
    box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0);
    background: #fff;
  }
  100% {
    transform: scale(1);
    box-shadow: none;
    background: #fff;
  }
}
.backup-btn-box .backup-btn {
  min-height: 44px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.backup-btn-box .backup-btn-title {
  display: flex;
  justify-content: space-between;
}
.backup-btn-box .backup-btn-title-text {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.backup-btn-box .backup-btn-desc {
  margin-top: 8px;
  font-size: 11px;
  font-weight: 400;
  color: #b3b3b3;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.backup-btn-box i-svg {
  width: 16px;
  height: 16px;
  color: #333234;
}
`,Nr=i(544),zr=i.n(Nr),Br=i(545),Ur=i.n(Br),Fr=i(546),Wr=i.n(Fr),Hr=i(695),qr=i.n(Hr),Vr=i(196);function Yr(t){const e=document.createElement("div");e.innerHTML=t;const i=e.firstChild;return(null==i?void 0:i.textContent)?i.textContent.substring(0,20):e.textContent.substring(0,20)}const Xr=async t=>{let e="";const i={list:t.map(t=>{const{_v2:i={}}=t;return t.__select__&&(e=(null==i?void 0:i.id)||""+t.time),{content:t.text,time:t.time,id:i.id||""+t.time,title:i.title||Yr(t.text),updatetime:i.updatetime||+Date.now(),fontSize:14}})};return i.checkedId=e||i.list[0].id,i},Gr={c34f380f9d9136fc3b4dbd32f24feea3:"c4ba1648d4014bad7fdea130cd421589","9001elkctdjjfkgmudthhs3li21nez":"6dcbbe4e9dc6ef2fd68da7d8befd117c"},Kr={c26068f55492ef9e93e05e34a3b31139:"C26068F55492EF9E93E05E34A3B31139"},Qr=((t=>{const e={};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){e[t[i]]=i}})(Gr),{pagin:!1,scaleSide:1,scaleMain:1,rowGap:.2,colGap:.3,easing:"linear",iconShadow:!1,iconScale:.5,searchSuggest:!0,searchShadow:!0,searchScale:.82,searchRadius:.5,searchOpacity:1,fontShadow:!0,fontSize:15,folderInfo:{},noteFontsize:14,customItem:[3,4],url:"https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png",rawUrl:"https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png",wallpaperOpacity:40}),Jr=(t,e)=>{const i=[];return t.forEach(t=>{t.forEach(t=>{t.children&&1===t.children.length&&(Object.assign(t,t.children[0]),t.children=void 0)}),i.push(...((t,e)=>{const i=[];if(t.length<=e)return[t];const o=Math.ceil(t.length/e);for(let n=0;n<o;n++){const o=e*n;i.push(t.slice(o,o+e))}return i})(t,e))}),i.filter(t=>t.length)},Zr="eed2a9287b324510678cd5e714888e99",ta="https://infinityicon.infinitynewtab.com/assets/weather/default.png",ea="#36B3FF",ia=async t=>{function e(t){const e={uuid:t.seId||c.a.randomId("v1-search-"),logo:t.logo,name:t.name,desc:t.desc,updatetime:t.updatetime};return e.uuid=Kr[e.uuid]||e.uuid,t.bgColor&&("transparent"===t.bgColor?e.bgColor="transparent":e.bgColor="#"+t.bgColor),t.types&&(e.types=t.types),e}const i=e(t.current);t.current.isCustom?i.target=t.current.types[0].url:i.types=t.current.types;return{searchEngine:{current:i,all:(t.all||[]).map(t=>{const i=e(t);return t.isCustom?i.target=t.types[0].url:i.types=t.types,i}),addList:(t.additions||[]).map(t=>{const i=e(t);return i.target=t.url,i}),custom:(t.customEngines||[]).map(t=>{const i=e(t);return i.target=t.types[0].url,i})}}},oa=async(t,e)=>{function i(t){return Number((t/100).toFixed(2))}let o=!0;const n=function(t,e){let i=null;switch(t+"*"+e){case"2*4":case"2*5":i={iconScale:.5,colGap:.3,rowGap:.2,searchScale:.82};break;case"2*6":i={iconScale:.6,colGap:.3,rowGap:.3,searchScale:.9};break;case"2*7":i={iconScale:.7,colGap:.3,rowGap:.3,searchScale:.9};break;case"3*3":i={iconScale:.7,colGap:.24,rowGap:.2,searchScale:.82}}return i}(t.column,t.row);return n&&n.rowGap===e.rowGap&&n.colGap===e.colGap&&(o=!1),{setting:{notice:{gmail:t.isOpentGmailNotication,gmailVoice:t.isOpentGmailRingNotication,gmailNumber:t.isShowGmailNum,todoNumber:t.isShowToDoNumbersInIco},link:{icon:t.isOpenLinkInNewTab,search:t.isSearchInNewTab,bookmark:t.isOpenBookmarkInNewTab,history:t.isOpenBookmarkInNewTab},view:{topBookmark:t.isShowTopBar&&"bookmarks"===t.topBarType,topUseful:t.isShowTopBar&&"topsites"===t.topBarType,windmill:t.isShowRandomWallpaperBtn,pagin:e.pagin,scaleSide:e.scaleSide,scaleMain:e.scaleMain},layout:{row:t.column,col:t.row,rowGap:e.rowGap,colGap:e.colGap,custom:o,customItem:o?[t.column,t.row]:e.customItem},animation:{easing:e.easing},icon:{miniMode:t.isMinimalistMode,shadow:e.iconShadow,opacity:i(parseInt(t.iconOpacity,10)),radius:i(Math.floor(t.iconBorderRadius/2)),scale:e.iconScale,startAnimation:t.isOpenStartAnimation,isHideIconName:t.isHideIconName||!1},search:{hide:!t.isShowSearchBox,searchSuggest:e.searchSuggest,hideCategory:!t.isShowSearchType,hideButton:!t.isShowSearchBtn,shadow:e.searchShadow,scale:e.searchScale,radius:e.searchRadius,opacity:e.searchOpacity},font:{shadow:e.fontShadow,size:e.fontSize,color:t.fontColor},_v1Setting:{isAutoBackUp:t.isAutoBackUp,gmailUnreadNum:t.gmailUnreadNum,toDoNumber:t.toDoNumber,wallpaperType:t.wallpaperType,woeid:t.woeid,tempUnitC:t.tempUnitC,isBlurWallpaper:t.isBlurWallpaper,bingMd5:t.bingMd5,autoWallpaper:t.autoWallpaper,"random-wallpaper":t["random-wallpaper"]}}}};var na=i(104),ra=i.n(na);const aa=async(t,e,i)=>{function o(t){var e;const{_v2:i={}}=t,o={name:t.name,id:t.id||c.a.randomId("site-"),uuid:(Gr[t.uid]?Gr[t.uid]:t.uid)||c.a.randomId("siteid-"),updatetime:t.updateTime||Date.now(),target:t.url||"",type:0===(null===(e=t.url)||void 0===e?void 0:e.indexOf("infinity://"))?"app":"web",bgImage:t.src,bgType:t.src?"image":"color",bgText:t.showText||"",bgFont:i.bgFont||30};return o.uuid===Zr&&(o.bgColor=ea,o.bgImage=ta),t.bgColor?"transparent"===t.bgColor||t.bgColor.startsWith("rgb")||t.bgColor.startsWith("#")?o.bgColor=t.bgColor:o.bgColor="#"+t.bgColor:o.bgColor="rgba(255,71,52,1)",o}const{folderInfo:n={}}=i,r={},a=t.map(t=>ra()(t).call(t,(t,e)=>{const{_v2:i={}}=e,a=i.folderId;if(a){if(r[a])return r[a].children.push(o(e)),t;r[a]=Object.assign(Object.assign({},n[a]),{children:[o(e)]}),t.push(r[a])}else t.push(o(e));return t},[]));return{sites:Jr(a,e.row*e.column)}},sa=async t=>{const{todos:e=[],dones:i=[]}=t;return{todoList:[...e,...i].map(t=>{const{_v2:e={}}=t;return{done:t.isDo,text:t.text,todoId:t.todoId,time:e.time||Date.now(),updatetime:e.updatetime||Date.now(),dueDate:e.dueDate,dueTime:e.dueTime}})}},la=async(t,e)=>{const i={type:"cloud",url:t["random-wallpaper"]||e.url,rawUrl:t["random-wallpaper"]||e.rawUrl,opacity:e.wallpaperOpacity,blur:t.isBlurWallpaper?30:0};if("local"===t.wallpaperType&&(i.type="local"),"auto"===t.wallpaperType){i.type="cloudAuto",i.switchType="one-day",i.wpSource="InfinityLandscape";const t=new Date,e=`https://wallpaper.infinitynewtab.com/InfinityWallpaper/${t.getMonth()+1}_${t.getDate()}.jpg`;i.url=e,i.rawUrl=e}if("bing"===t.wallpaperType){i.type="bing",i.wpSource="bing",i.id=void 0;const e="https://img.infinitynewtab.com/bingWallpaper/bg.jpg?md5="+t.bingMd5;i.url=e,i.rawUrl=e}return i},ca={Google:{name:"Google",seId:"a22dcc25c75de3f58cb518e32c576865",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://www.google.com/search?q="},{name:"images",url:"https://www.google.com/search?tbm=isch&q="},{name:"news",url:"https://www.google.com/search?tbm=nws&q="},{name:"videos",url:"https://www.google.com/search?tbm=vid&q="},{name:"maps",url:"https://www.google.com/maps/preview?q="}]},search:{name:"search",seId:"dd3af9cc97ad7de8984baaf59514bb52",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/mychromesearch.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://mychromesearch.com/search?ac=6891140047&q="},{name:"images",url:"https://www.google.com/search?tbm=isch&q="},{name:"news",url:"https://www.google.com/search?tbm=nws&q="},{name:"videos",url:"https://www.google.com/search?tbm=vid&q="},{name:"maps",url:"https://www.google.com/maps/preview?q="}]},Yahoo:{name:"Yahoo",seId:"C26068F55492EF9E93E05E34A3B31139",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/yahoo.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://search.yahoo.com/search?p="},{name:"images",url:"https://images.search.yahoo.com/search/images?p="},{name:"news",url:"https://news.search.yahoo.com/search?p="},{name:"videos",url:"https://video.search.yahoo.com/search/video?p="}]},Bing:{name:"Bing",seId:"5a6afaa65c95a841f6149c4e1591a637",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://www.bing.com/search?isource=infinity&iname=bing&itype=web&q="},{name:"images",url:"https://www.bing.com/images/search?isource=infinity&iname=bing&q="},{name:"news",url:"https://global.bing.com/news/search?isource=infinity&iname=bing&q="},{name:"videos",url:"https://www.bing.com/videos/search?isource=infinity&iname=bing&q="},{name:"maps",url:"https://www.bing.com/ditu/?isource=infinity&iname=bing&q="}]},"百度":{name:"Baidu",seId:"0c47016a8cd2d631bc618d4f3a741335",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://www.baidu.com/s?tn=02003390_hao_pg&ie=utf-8&wd="},{name:"images",url:"https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word="},{name:"news",url:"https://news.baidu.com/ns?tn=news&ie=utf-8&word="},{name:"videos",url:"http://video.baidu.com/v?ie=utf-8&word="},{name:"maps",url:"http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D"}]},Sogou:{name:"sogou",seId:"a3e908082e31a92396970f8b58583863",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/sougou.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://www.sogou.com/sogou?pid=sogou-site-7985672db979303a&query="},{name:"images",url:"https://pic.sogou.com/pics?ie=utf8&query="},{name:"news",url:"http://news.sogou.com/news?ie=utf8&query="},{name:"videos",url:"http://v.sogou.com/v?ie=utf8&query="},{name:"weixin",url:"http://weixin.sogou.com/weixin?ie=utf8&query="}]},se360:{name:"360search",seId:"70adaba7374f6089aca0374dea85df00",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/360.png",desc:"",bgColor:"transparent",types:[{name:"web",url:"https://www.so.com/s?src=lm&ls=sm2054017&lm_extend=ctype:4&q="},{name:"images",url:"https://image.so.com/i?q="},{name:"news",url:"http://news.so.com/ns?q="},{name:"videos",url:"http://video.so.com/v?q="}]}},pa={weather:{uid:"eed2a9287b324510678cd5e714888e99",name:"weather",url:"infinity://weather",src:"https://infinityicon.infinitynewtab.com/user-share-icon/b6a95410ed77627337567fea2cbb157c.png",iconType:"official"},todos:{uid:"c09f31db43d7faca5bf659fadad3967c",name:"todos",url:"infinity://todos",src:"https://infinityicon.infinitynewtab.com/user-share-icon/6e49210c084629259f22609980c48ecf.png",iconType:"official"},notepad:{uid:"ea5ac5d9e9e08c1d57ad413e9e38d376",name:"notes",url:"infinity://notes",src:"https://infinityicon.infinitynewtab.com/user-share-icon/006b88c07a2e87d5a61f3c969a70575c.png",iconType:"official"},bookmarks:{uid:"96646a13688f5bfd0aaf4811a579aee1",name:"bookmarks",url:"infinity://bookmarks",src:"https://infinityicon.infinitynewtab.com/user-share-icon/31a36139ccf4b9b005ec55445bf833b0.png",iconType:"official"},history:{uid:"4528cef4f8d66e661cb3143af733694e",name:"history",url:"infinity://history",src:"https://infinityicon.infinitynewtab.com/user-share-icon/faa06f85d37cdd552e2e57cb282ad0f7.png",iconType:"official"},gmail:{uid:"c5cb65ab55611b1d8bb2e09ad143b797",name:"Gmail",url:"infinity://gmail",src:"https://infinityicon.infinitynewtab.com/user-share-icon/7b6cee8dfbfeff522a7668c924429ad7.png",iconType:"official"},setting:{uid:"552fa3a378b29375843fa3d021cbe129",name:"settings",url:"infinity://settings",src:"https://infinityicon.infinitynewtab.com/user-share-icon/9622b98e90dd4f107d23481566095b34.png",iconType:"official"},apps:{uid:"194dd7b46ac16ac93becf5386f14bcca",name:"extension",url:"infinity://extension",src:"https://infinityicon.infinitynewtab.com/icon/194dd7b46ac16ac93becf5386f14bcca.png",iconType:"official"}},da=t=>{var e,i;let o=t.settings,n=null===(e=t.otherData)||void 0===e?void 0:e.notes,r=null===(i=t.otherData)||void 0===i?void 0:i.todos,a=t.searches,s=t.icons;if(!(o&&n&&r&&a&&s)){const{setting:e,main:i}=t,l=JSON.parse(decodeURIComponent(e)),p=JSON.parse(decodeURIComponent(i));o||(o=(t=>{const e={column:2,row:5,isAutoBackUp:!1};if(t.iconNum){const[i,o]=t.iconNum.split("x");e.column=parseInt(i)||2,e.row=parseInt(o)||5}return e.isAutoBackUp=t.isAutoBackUp||!1,e.bingMd5=(new Date).getTime(),e.isOpenLinkInNewTab=t.openInNewtab,e.isSearchInNewTab=t.searchInNewtab,e.isOpenBookmarkInNewTab=t.OpenBookmarksInNewtab,e.isOpentGmailNotication=t.GmailMessage,e.isOpentGmailRingNotication=t.notificationSound,e.isShowSearchBox=t.searchBox,e.isShowSearchType=t.searchType,e.iconBorderRadius=t.iconFillet,e.iconOpacity=t.iconOpacity,e.tempUnitC="Celsius"===t.temperatureUnit,e.fontColor=t.fontColor,e.isMinimalistMode=t.minimalistMode,e.isShowTopBar=t.displayAtTop,e.topBarType="Bookmarksbar"===t.displayTopType?"bookmarks":"topsites",e.isOpenStartAnimation=t.startAnimation,e.wallpaperType="local","infinity"===t.bgType?e.wallpaperType="auto":"bing"===t.bgType?e.wallpaperType="bing":"random"===t.bgType&&(e.wallpaperType="random"),e["random-wallpaper"]=t.lastWallpaper,e.isBlurWallpaper=t.blurWallpaper,e})(l)),n||(n=(t=>{const e=t.notes||[];return e.length?e.map(t=>({title:t.title,content:t.text,time:Date.now(),id:"note-"+Date.now(),updatetime:Date.now(),fontSize:14})):[]})(l)),r||(r=(t=>{const e=t.todostrue||[],i=t.todosfalse||[];return[...e.map(t=>({text:t,done:!0})),...i.map(t=>({text:t,done:!1}))].map(t=>Object.assign(Object.assign({},t),{todoId:"todo-"+Date.now(),time:Date.now(),updatetime:Date.now()}))})(l)),a||(a=(t=>({current:ca[t.searchEngine]||ca.search,all:Object.keys(ca).filter(t=>"search"!==t).map(t=>ca[t]),customEngines:[],additions:[]}))(l)),s||(s=(t=>{try{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.length;t++){const e=i[t];let o={};if(e.bgColor&&"rgba(0,0,0,0)"===e.bgColor.replace(/\s/g,"")&&(e.bgColor="transparent"),Object.prototype.hasOwnProperty.call(pa,e.type))o=pa[e.type],o.name=e.name||o.name;else if("ico"!==e.type||e.title)if("custom"===e.type||e.title)o.bgColor=e.bgColor?e.bgColor:"transparent",o.iconType="custom",o.name=e.name,o.showText=e.title.substr(0,2),o.url=e.url,e.ico?(o.customType="image",o.src=e.ico):(o.customType="text",o.src=""),o.uid=c.a.randomId("basic-old");else{if("app"!==e.type)continue;o.bgColor=e.bgColor,o.iconType="app",o.src=e.ico,o.name=e.name,o.url=e.url}else{o.iconType="official",o.name=e.name,o.url=e.url;const t=e.ico.indexOf("ouddn.com");if(t>0){const i=e.ico.substr(t+9,e.ico.length);o.src="https://infinityicon.infinitynewtab.com"+i}else o.src=e.ico;if(0===o.src.indexOf("https")){let t;try{t=new Xo.a(o.src),o.src=t.origin+t.pathname}catch(t){}}o.bgColor=e.bgColor?e.bgColor:"transparent",o.uid=c.a.randomId("basic-old")}i[t]=o}}}catch(t){console.error("兼容旧数据getV1Icons ~ e:",t)}return t||[[]]})(p))}return{v1sSettings:o,v1Notes:n,v1Todos:r,v1Searches:a,v1Icons:s}},ha=async t=>await(async t=>{const{v1sSettings:e,v1Icons:i,v1Notes:o,v1Searches:r,v1Todos:a}=da(t),s=(t=>{let e={};switch(t.column+"*"+t.row){case"2*5":e={iconScale:.6,colGap:.5,rowGap:.35,searchScale:.93};break;case"3*4":e={iconScale:.8,colGap:.6,rowGap:.6,searchScale:.93};break;case"3*5":e={iconScale:.8,colGap:.5,rowGap:.7,searchScale:.93};break;case"3*6":e={iconScale:.75,colGap:.45,rowGap:.7,searchScale:.93}}return e})(e),l=Object.assign(Object.assign({},Qr),s),[c,p,d,h,u,g]=await n.a.all([oa(e,l),Xr(o),sa(a),ia(r),aa(i,e,l),la(e,l)]);return{setting:c,note:p,todo:d,searcher:h,site:u,wallpaper:g}})(t);i(696);var ua=r.b`.reward-modal-wrapper {
  width: 370px;
}
.reward-modal-wrapper .t {
  margin: 20px 0;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
.reward-modal-wrapper .reward-body {
  padding: 0 20px;
}
.reward-modal-wrapper .reward-head {
  display: flex;
  padding: 0 70px;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
  border-bottom: 1px solid #EBEBEB;
}
.reward-modal-wrapper .reward-head > div {
  position: relative;
  padding-bottom: 13px;
  cursor: pointer;
}
.reward-modal-wrapper .reward-head > div::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
}
.reward-modal-wrapper .reward-head > div.active {
  color: #333;
}
.reward-modal-wrapper .reward-head > div.active::after {
  background: #333;
}
.reward-modal-wrapper .reward-qrcode {
  padding-top: 25px;
}
.reward-modal-wrapper .reward-qrcode + p {
  margin: 22px 0 4px;
  font-size: 20px;
  text-align: center;
}
`,ga=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const fa={0:i(697),10:i(698),15:i(699),20:i(700),25:i(701)},ma={0:i(702),10:i(703),15:i(704),20:i(705),25:i(706)};let ba=class extends r.a{constructor(){super(...arguments),this.payType="",this.donateMoney=""}render(){return r.e`
      ${"alipay"===this.payType?r.e`<img .src=${fa[this.donateMoney]} alt="qrcode" />`:r.e`<img .src=${ma[this.donateMoney]} alt="qrcode" />`}
    `}};ba.styles=r.b`
    :host {
      display: block;
      width: 220px;
      height: 220px;
      margin: 0 auto;
    }
    img {
      width: 220px;
      height: 220px;
    }
  `,ga([Object(r.g)({type:String})],ba.prototype,"payType",void 0),ga([Object(r.g)({type:String})],ba.prototype,"donateMoney",void 0),ba=ga([Object(r.c)("donate-qrcode")],ba);var ya=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let va=class extends r.a{constructor(){super(...arguments),this.open=!1,this.payType="",this.donateMoney="",this.handleClose=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("on-cancel"))}}render(){return r.e`
      <infinito-modal .open=${this.open} .onCancel=${this.handleClose}>
        <div slot="body" class="reward-modal-wrapper">
          <h2 class="t">${Object(Q.i18n)("give_money")}</h2>
          <div class="reward-body">
            <div class="reward-head">
              <div class="${"alipay"===this.payType?"active":""}" @click=${()=>this.payType="alipay"}>
                ${Object(Q.i18n)("zhifubao")}
              </div>
              <div class="${"weixin"===this.payType?"active":""}" @click=${()=>this.payType="weixin"}>
                ${Object(Q.i18n)("wechat")}
              </div>
            </div>
            <div class="reward-qrcode">
              <donate-qrcode payType="${this.payType}" donateMoney="${this.donateMoney}"></donate-qrcode>
            </div>
            <p>${Object(Q.i18n)("currency_symbol")}${0===Number(this.donateMoney)?Object(Q.i18n)("any_money"):this.donateMoney}</p>
          </div>
        </div>
      </infinito-modal>
    `}};va.styles=ua,ya([Object(r.g)({type:Boolean,reflect:!0})],va.prototype,"open",void 0),ya([Object(r.g)({type:String})],va.prototype,"payType",void 0),ya([Object(r.g)({type:String})],va.prototype,"donateMoney",void 0),va=ya([Object(r.c)("donate-section")],va);var wa=i(547),xa=i.n(wa),ka=i(548),_a=i.n(ka),Oa=i(549),Sa=i.n(Oa),ja=i(550),$a=i.n(ja),Ia=r.b`.login-wrapper {
  display: flex;
}
.login-wrapper .bg {
  width: 380px;
  min-height: 500px;
}
.login-wrapper .form {
  box-sizing: border-box;
  width: 420px;
  padding: 40px 45px 24px;
  background: #f9f9f9;
  border-radius: 0px 6px 6px 0px;
}
.login-wrapper .large-title {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
}
.login-wrapper .large-title + p {
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  font-family: PingFangSC-Light, PingFang SC;
  height: 23px;
  color: #333;
  line-height: 20px;
}
.login-wrapper .form-control {
  margin-top: 30px;
}
.login-wrapper .form-control infinito-button {
  --button-color: #333;
  width: 100%;
  height: 52px;
}
.login-wrapper .form-control infinito-input {
  min-height: 80px;
}
.login-wrapper .no-account {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
}
.login-wrapper .no-account p {
  margin: 0;
  font-size: 13px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 300ms;
}
.login-wrapper .no-account p:hover {
  opacity: 0.8;
}
.login-wrapper .third-party {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
}
.login-wrapper .third-party span {
  font-size: 12px;
  color: #ccc;
}
.login-wrapper .third-party .icons {
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
}
.login-wrapper .third-party p {
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
}
.login-wrapper .third-party p:not(:last-child) {
  margin-right: 30px;
}
.login-wrapper .third-party p:hover {
  opacity: 0.8;
}
.login-wrapper .third-party img {
  width: 32px;
  height: 32px;
}
`,Ca=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const Ta=[{name:"facebook",src:"icon_facebook"},{name:"google",src:"icon_google"},{name:"qq",src:"icon_qq"},{name:"wechat",src:"icon_wechat"},{name:"sina",src:"icon_sina"}].map(t=>Object.assign(Object.assign({},t),{src:i(551)(`./${t.src}.png`)}));let Ea=class extends r.a{constructor(){super(...arguments),this.store=s.userStore,this.emailError="",this.passwordError="",this.modalOpen=!1,this.loading=!1}updated(t){t.forEach((t,e)=>{"modalOpen"===e&&(!1===t?setTimeout(()=>{this.emailInput.shadowRoot.querySelector("input").focus()},500):setTimeout(()=>{this.emailInput.value="",this.passwordInput.value="",this.passwordInput._show=!1,this.passwordError="",this.emailError=""},500))})}render(){return r.e`
      <div class="login-wrapper">
        <div
          class="bg"
          style=${Object(Fi.a)({background:`url(${Object(ot.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg.png")})`,backgroundSize:"cover"})}
        ></div>
        <div class="form">
          <div>
            <h2 class="large-title">${Object(Q.i18n)("welcome_infinity")}</h2>
            <p>${Object(Q.i18n)("login_now")}</p>
          </div>
          <div class="form-control">
            <infinito-input
              name="email"
              placeholder=${Object(Q.i18n)("email")}
              .error=${this.emailError}
              @onfocus=${()=>{this.emailError=""}}
            >
            </infinito-input>
            <infinito-input
              name="password"
              type="password"
              .isShowEye=${!1}
              placeholder=${Object(Q.i18n)("password")}
              .error=${this.passwordError}
              @onfocus=${()=>{this.passwordError=""}}
              @keyup=${this.handleKeyUp}
            >
            </infinito-input>
            <infinito-button primary .loading=${this.loading} @click="${this.handleLogin}">
              ${Object(Q.i18n)("next")}
            </infinito-button>
          </div>
          <div class="no-account">
            <p style="margin-right:10px" @click="${this.toRegister}">${Object(Q.i18n)("no_account_register")}</p>
            <p @click="${this.toFindPassword}">${Object(Q.i18n)("forget_password")}</p>
          </div>
          <div class="third-party">
            <span>${Object(Q.i18n)("thirt_party")}</span>
            <div class="icons">
              ${Ta.map(t=>r.e`
                    <p @click="${e=>this.onClick(e,t.name)}">
                      <img .src="${t.src}" />
                    </p>
                  `)}
            </div>
          </div>
        </div>
      </div>
    `}toFindPassword(t){t.preventDefault();let e="/find-password/index.html";l.l&&(e=window.chrome.runtime.getURL(e)),c.a.openUrl(e,!0,t)}toRegister(t){t.preventDefault();let e="/user-register/index.html";l.l&&(e=window.chrome.runtime.getURL(e)),c.a.openUrl(e,!0,t)}onClick(t,e){t.preventDefault(),this.store.thirdPartyLogin(e)}handleKeyUp(t){13===t.keyCode&&(t.preventDefault(),this.handleLogin(t))}async handleLogin(t){if(t.stopPropagation(),this.loading)return;const e=this.emailInput.value,i=this.passwordInput.value;if(this.emailError=this.checkEmail(Vo()(e).call(e)),!this.emailError)if(i){try{this.loading=!0,await this.store.login({email:e,password:i}),setTimeout(()=>{this.emailInput.value="",this.passwordInput.value=""},1e3)}catch(t){"3006"===t.message&&setTimeout(()=>{this.passwordInput.value="",this.passwordInput.shadowRoot.querySelector("input").focus()},500)}this.loading=!1}else this.passwordError=Object(Q.i18n)("password_dont_empty")}checkEmail(t){return t?/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)?void 0:Object(Q.i18n)("email_format_error"):Object(Q.i18n)("cannot_empty")}};Ea.styles=Ia,Ca([Object(r.h)('infinito-input[name="email"]')],Ea.prototype,"emailInput",void 0),Ca([Object(r.h)('infinito-input[name="password"]')],Ea.prototype,"passwordInput",void 0),Ca([Object(r.g)({type:String})],Ea.prototype,"emailError",void 0),Ca([Object(r.g)({type:String})],Ea.prototype,"passwordError",void 0),Ca([Object(r.g)({type:Boolean,reflect:!0})],Ea.prototype,"modalOpen",void 0),Ca([Object(r.g)({type:Boolean})],Ea.prototype,"loading",void 0),Ea=Ca([Object(r.c)("user-login")],Ea);var La=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Pa=class extends r.a{constructor(){super(...arguments),this.store=s.userStore}render(){return r.e`
      <div class="loading-wrapper">
        <infinito-spin spinning .isSvg=${l.p}></infinito-spin>
        <div class="tips">${Object(Q.i18n)("loging")}</div>
        <infinito-button @click="${this.handleClick}">${Object(Q.i18n)("cancel_login")}</infinito-button>
      </div>
    `}async handleClick(){this.store.cancelLogin()}};Pa.styles=r.b`
    .loading-wrapper {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 500px;
      background: #fff;
      border-radius: 6px;
    }
    .tips {
      margin: 80px 0 40px;
      font-size: 20px;
      font-weight: 300;
      color: #333;
    }
    infinito-button {
      --button-color: #efefef;
      --border-color: #efefef;
      --hover-color: #dfdfdf;
      --hover-font-color: #333;
      width: 155px;
      height: 52px;
    }
  `,Pa=La([Object(r.c)("logining-loading")],Pa);var Ra=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Da=class extends a.a{constructor(){super(...arguments),this.store=s.userStore}render(){return r.e`
      <div class="wrapper">
        <h2 class="title">${i18n("mobile_devices")}</h2>
        <p class="sub-title">${i18n("use_mobile_screen")}</p>
        <div class="qrcode">${this.store.qrcode?r.e`<img src=${this.store.qrcode} />`:r.e``}</div>
        <p class="desc">${i18n("or_use_mobile_browser")}</p>
        <p class="website">m.infinitynewtab.com?${this.store.userInfo.mobileuid}</p>
      </div>
    `}};Da.styles=r.b`
    .wrapper {
      font-family: PingFangSC-Regular, PingFang SC;
      box-sizing: border-box;
      width: 370px;
      height: 408px;
      text-align: center;
      padding-top: 22px;
    }
    .title {
      margin: 0 0 30px 0;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
    }
    .sub-title {
      margin: 0 0 16px 0;
      font-size: 14px;
      font-weight: 400;
      color: #656565;
      line-height: 20px;
    }
    .qrcode {
      margin: 0 auto;
      box-sizing: border-box;
      width: 200px;
      height: 200px;
    }
    .qrcode img {
      width: 100%;
    }
    .desc {
      margin: 20px 0 12px;
      font-size: 14px;
      font-weight: 400;
      color: #656565;
      line-height: 20px;
    }
    .website {
      user-select: text;
      margin: 0;
      font-weight: 400;
      color: #656565;
      line-height: 22px;
    }
  `,Da=Ra([Object(r.c)("mobile-qrcode")],Da);var Aa=i(707),Ma=i.n(Aa),Na=i(708),za=i.n(Na),Ba=i(522),Ua=i.n(Ba),Fa=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Wa=class extends a.a{constructor(){super(...arguments),this.store=s.userStore,this.closeModal=()=>this.store.closeLogoutConfirm()}render(){return r.e`
      <infinito-modal .open=${this.store.isShowLogoutConfirm} .onCancel="${this.closeModal}">
        <div slot="body">
          <div class="container">
            ${"logout"===this.store.showConfirmOpt?r.e`
                  <h2 class="title">${Object(Q.i18n)("ensure_logout")}</h2>
                  <p class="tips">${Object(Q.i18n)("logout_tips")}</p>
                  <div class="options">
                    <div class="checkbox-div">
                      <input
                        type="checkbox"
                        id="checkbox"
                        @change="${this.handleChange}"
                        .disabled=${this.store.loading}
                      />
                      <label for="checkbox"></label>
                    </div>
                    <p @click=${this.handleClick}>${Object(Q.i18n)("logout_clear_something")}</p>
                  </div>
                  <div class="btns">
                    <infinito-button primary .loading=${this.store.loading} @click="${()=>this.store.exitAccount()}"
                      >${Object(Q.i18n)("confirm_logout")}</infinito-button
                    >
                    <infinito-button class="cancel" @click="${()=>this.store.closeLogoutConfirm()}"
                      >${Object(Q.i18n)("cancel")}</infinito-button
                    >
                  </div>
                `:r.e`
                  <h2 class="title">${Object(Q.i18n)("request_logout_confirm")}</h2>
                  <p class="tips">${Object(Q.i18n)("logout_warn")}</p>
                  <div class="options">
                    <div class="checkbox-div">
                      <input
                        type="checkbox"
                        id="checkbox"
                        @change="${this.handleChange}"
                        .disabled=${this.store.loading}
                      />
                      <label for="checkbox"></label>
                    </div>
                    <p @click=${this.handleClick}>${Object(Q.i18n)("logout_clear_something")}</p>
                  </div>
                  <div class="btns">
                    <infinito-button
                      class="cancel"
                      .disabled=${this.store.removeAccountDisableSec>0}
                      .loading=${this.store.loading}
                      @click="${()=>{this.store.removeAccountDisableSec>0||this.store.deleteAccount()}}"
                    >
                      ${Object(Q.i18n)("remove_account")}${this.store.removeAccountDisableSec>0?`(${this.store.removeAccountDisableSec}s)`:""}
                    </infinito-button>
                    <infinito-button primary @click="${()=>this.store.closeLogoutConfirm()}">
                      ${Object(Q.i18n)("cancel")}
                    </infinito-button>
                  </div>
                `}
          </div>
        </div>
      </infinito-modal>
    `}handleChange(t){this.store.loading||this.store.toggleClear(t.target.checked)}handleClick(){if(this.store.loading)return;const t=this.inputEle.checked;this.inputEle.checked=!t,this.store.toggleClear(this.inputEle.checked)}};Wa.styles=r.b`
    .container {
      box-sizing: border-box;
      width: 370px;
      padding: 0 20px;
    }
    .title {
      margin: 20px 0 24px;
      color: #333333;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }
    .tips {
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      color: #656565;
    }
    .options {
      display: flex;
      align-items: center;
      margin: 30px 0 40px;
    }
    .options p {
      margin: 0;
      margin-left: 10px;
    }
    .btns {
      display: flex;
      justify-content: space-between;
    }
    infinito-button {
      width: 155px;
      height: 52px;
    }
    .cancel {
      --button-color: #efefef;
      --border-color: #efefef;
      --hover-color: #dfdfdf;
      --hover-font-color: #333;
    }
    .checkbox-div {
      position: relative;
      width: 16px;
      height: 16px;
    }
    label {
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      border: 2px solid #333;
      border-radius: 8px;
      cursor: pointer;
    }
    label::after {
      content: '';
      width: 9px;
      height: 5px;
      position: absolute;
      top: 1px;
      left: 1px;
      border: 2px solid #333;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }

    input[type='checkbox'] {
      visibility: hidden;
    }
    input[type='checkbox']:checked + label::after {
      opacity: 1;
    }
  `,Fa([Object(r.h)("input")],Wa.prototype,"inputEle",void 0),Wa=Fa([Object(r.c)("logout-confirm")],Wa);var Ha=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let qa=class extends a.a{constructor(){super(...arguments),this.store=s.userStore,this.cropper=null,this.preViewImgData=null,this.gender="",this.loading=!1,this.uploadLoading=!1,this.avatar="",this.avatarKey=""}firstUpdated(){this.initCropper()}updated(){this.store.isModify||(this.gender="",this.avatar="",this.avatarKey="",this.uploadLoading=!1,this.loading=!1)}initCropper(){this.cropper=Cr.a.create({title:Object(Q.i18n)("edit_avatar")}),this.cropper.addEventListener("on-change",async t=>{const{data:e}=t.detail;this.preViewImgData=e;const i=this.avatar;this.avatar=Xo.a.createObjectURL(this.preViewImgData),Xo.a.revokeObjectURL(i),setTimeout(async()=>{this.uploadLoading=!0;const t=await this.store.updateAvatar(this.preViewImgData);0===(null==t?void 0:t.code)?this.avatarKey=t.data.key:(this.avatar="",this.preViewImgData=null,it.message.error(Object(Q.i18n)("upload_avatar_failure"))),this.uploadLoading=!1},500)})}chooseImage(){const t=this.avatarInput.files[0];if(!("image/jpeg"===t.type||"image/png"===t.type))return it.message.error(Object(Q.i18n)("please_chose_picture")),void(this.avatarInput.value="");if(!(t.size/1024/1024<2))return it.message.error(Object(Q.i18n)("oversize")),void(this.avatarInput.value="");const e=new FileReader;e.readAsDataURL(t),this.avatarInput.value=null,e.onload=()=>{this.cropper.init(e.result),this.cropper.show()}}render(){const{userInfo:t,isModify:e}=this.store;return r.e`
      <div class="user-profile-modal ${e?"edit":""}">
        <h3 class="t">${Object(Q.i18n)("profile")}</h3>
        ${e?r.e`
              <div class="avatar">
                <input
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  @change=${this.chooseImage}
                  @drop=${this.chooseImage}
                />
                <div
                  class="avatar-img"
                  style="background: url(${this.avatar||t.avatar||Vr.f}); background-size: cover;"
                ></div>
                ${this.uploadLoading?r.e`
                      <div class="loading">
                        <img src=${Ua.a} width="50px" />
                      </div>
                    `:null}
              </div>
              <div>${Object(Q.i18n)("avatar")}</div>
              <div class="form">
                <infinito-input
                  placeholder="${Object(Q.i18n)("please_enter_nickname")}"
                  name="username"
                  value=${t.name}
                ></infinito-input>
                <div class="radio-control">
                  <span style="margin-right: 5px;">${Object(Q.i18n)("gender")}</span>
                  <infinito-radio-group selected=${this.gender||t.gender} @on-change=${this.radioChange}>
                    <infinito-radio value="male">
                      <div class="radio-content">
                        <p>${Object(Q.i18n)("male")}</p>
                        <img .src=${_a.a} />
                      </div>
                    </infinito-radio>
                    <infinito-radio value="female">
                      <div class="radio-content">
                        <p>${Object(Q.i18n)("female")}</p>
                        <img .src=${xa.a} />
                      </div>
                    </infinito-radio>
                    <infinito-radio value="x">${Object(Q.i18n)("none")}</infinito-radio>
                  </infinito-radio-group>
                </div>
              </div>
              <div class="save-btn-wrapper">
                <infinito-button class="save-btn" primary .loading=${this.loading} @click=${this.handleSave}>
                  ${Object(Q.i18n)("save")}
                </infinito-button>
              </div>
            `:r.e`
              <div class="avatar">
                <div
                  class="avatar-img"
                  style="background: url(${t.avatar||Vr.f}); background-size: cover;"
                ></div>
              </div>
              <div class="user-name">
                <div class="name">${t.name}</div>
                ${"male"===t.gender?r.e`<img class="gender" .src=${_a.a} />`:null}
                ${"female"===t.gender?r.e`<img class="gender" .src=${xa.a} />`:null}
              </div>
              <div class="btns">
                <infinito-button primary @click=${this.modify}>${Object(Q.i18n)("modify")}</infinito-button>
                <infinito-button class="logout" @click="${this.logout}">${Object(Q.i18n)("logout")}</infinito-button>
              </div>
            `}
        <div class="opts">
          <p @click="${this.removeAccount}">
            <span>${Object(Q.i18n)("remove_account")}</span>
            <img .src="${za.a}" />
          </p>
          <p @click="${this.toModify}">
            <span>${Object(Q.i18n)("modify_password")}</span>
            <img .src="${Ma.a}" />
          </p>
        </div>
      </div>

      <infinito-portal-entrance destination="logout-confirm">
        <logout-confirm></logout-confirm>
      </infinito-portal-entrance>
    `}radioChange(t){this.gender=t.detail.selected}async uploadInputChange(){const t=this.avatarInput.files[0];if(!("image/jpeg"===t.type||"image/png"===t.type))return it.message.error(Object(Q.i18n)("please_chose_picture")),void(this.avatarInput.value="");if(!(t.size/1024/1024<2))return it.message.error(Object(Q.i18n)("oversize")),void(this.avatarInput.value="");const e=new FormData;e.append("file",t);try{await this.store.updateAvatar(e)}catch(t){it.message.error(t.message)}}toModify(t){if(t.preventDefault(),this.store.userInfo.email){let e="/modify-password/index.html";l.l&&(e=window.chrome.runtime.getURL(e)),c.a.openUrl(e,!0,t)}else it.message.error(Object(Q.i18n)("cannot_change_password"))}removeAccount(){this.store.logout("remove")}modify(){this.store.userInfo.email?this.store.openModify():it.message.error(Object(Q.i18n)("cannot_change_profile"))}async handleSave(){var t;if(this.loading)return;const e=Vo()(t=this.userInput.value).call(t);if(!e)return it.message.error(Object(Q.i18n)("username_cannot_empty")),void this.userInput.shadowRoot.querySelector("input").focus();const i={name:e,gender:this.gender||this.store.userInfo.gender,avatar:this.avatarKey};this.loading=!0,await this.store.modifyProfile(i),this.loading=!1}logout(){this.store.logout("logout")}};qa.styles=r.b`
    .user-profile-modal {
      box-sizing: border-box;
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 20px;
      width: 410px;
      height: auto;
    }
    .t {
      margin: 0;
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
    }
    .avatar {
      position: relative;
      width: 92px;
      height: 92px;
      margin: 30px 0 14px;
      border-radius: 50%;
      overflow: hidden;
    }
    .avatar .avatar-img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .avatar input[type='file'],
    .loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 1;
      width: 100%;
      cursor: pointer;
    }
    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
      opacity: 1;
    }
    .loading i-svg {
      color: #fff;
      width: 50px;
      height: 50px;
    }
    .user-name {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      overflow: hidden;
    }
    .name {
      font-size: 18px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre;
      padding-left: 2px;
    }
    .gender {
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }
    .btns {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 60px;
      padding: 0 20px;
    }
    infinito-button {
      width: 155px;
      height: 52px;
      &:hover {
        opacity: 0.5;
      }
    }
    .save-btn-wrapper {
      box-sizing: border-box;
      width: 100%;
      padding: 0 20px;
    }
    .save-btn {
      width: 100%;
    }
    .logout {
      --button-color: #efefef;
      --border-color: #efefef;
      --hover-color: #dfdfdf;
      --hover-font-color: #333;
    }
    .opts {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 20px 0;
      padding: 0 20px;
    }
    .opts > p {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
      transition: opacity 0.3s;
      cursor: pointer;
    }
    .opts > p:hover {
      opacity: 0.8;
    }
    .opts img {
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }
    p {
      margin: 0;
    }
    .form {
      margin-top: 30px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: flex-start;
      margin-top: 30px;
      width: 330px;
    }
    .radio-control {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 24px 0 40px;
    }
    .radio-content {
      display: flex;
      align-items: center;
    }
    .radio-control img {
      width: 16px;
      height: 16px;
      margin-left: 6px;
    }
  `,Ha([Object(r.g)({type:String})],qa.prototype,"gender",void 0),Ha([Object(r.g)({type:Boolean})],qa.prototype,"loading",void 0),Ha([Object(r.g)({type:Boolean})],qa.prototype,"uploadLoading",void 0),Ha([Object(r.g)()],qa.prototype,"avatar",void 0),Ha([Object(r.g)({type:String})],qa.prototype,"avatarKey",void 0),Ha([Object(r.h)('infinito-input[name="username"]')],qa.prototype,"userInput",void 0),Ha([Object(r.h)('input[name="avatar"]')],qa.prototype,"avatarInput",void 0),qa=Ha([Object(r.c)("user-profile")],qa);var Va=i(709),Ya=i.n(Va),Xa=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ga=class extends a.a{constructor(){super(...arguments),this.manualBackup=()=>{V.IConfirm.create().toShow({title:Object(Q.i18n)("backup_now"),text:Object(Q.i18n)("confirm_cover_remote"),onConfirm:()=>{s.syncStore.manualBackup()}})},this.recover=(t,e)=>{V.IConfirm.create().toShow({title:Object(Q.i18n)("revovery_data"),text:Object(Q.i18n)("confirm_recovery_data"),onConfirm:()=>{if("v1"===t){const t=s.userStore.userInfo.email?"basic":"pro";s.syncStore.getV1RemoteData(t,!0)}else s.syncStore.getDetail(t,e,"all",!0)}})}}render(){return r.e`
      <div class="container">
        <img
          class="left-img"
          src="${Object(ot.b)("https://infinityicon.infinitynewtab.com/assets/images/sync-left.jpg")}"
          alt=""
        />
        <div class="right">
          <div class="right-header">
            <div class="title">${Object(Q.i18n)("history_backup_list")}</div>
            <div class="tips">${Object(Q.i18n)("backup_tips")}</div>
          </div>
          <div class="right-card">
            <div class="item header">
              <span class="title">${Object(Q.i18n)("manul_backup")}</span>
              <span @click="${this.manualBackup}" class="op"
                ><i-svg .src="${Sa.a}"></i-svg> ${Object(Q.i18n)("backup_now")}</span
              >
            </div>
            ${s.syncStore.manualSyncList.map(t=>r.e` <div class="item">
                <span class="title">${t.time}</span>
                <span @click="${()=>this.recover(t.id,"manual")}" class="op"
                  ><i-svg .src="${Ya.a}"></i-svg> ${Object(Q.i18n)("recover_this")}</span
                >
              </div>`)}
            ${0===s.syncStore.manualSyncList.length?r.e`<div class="item-none item-none-first">${Object(Q.i18n)("none_manual_backup")}</div> `:""}
          </div>
          <div class="right-card">
            <div class="item header">
              <span class="title">${Object(Q.i18n)("scheduled_backup")}</span>
            </div>
            ${s.syncStore.autosSyncList.map(t=>r.e` <div class="item ">
                <span class="title">${t.time}</span>
                ${t.id===s.syncStore.syncId?r.e`<span class="op op-none">${Object(Q.i18n)("current_node")}</span>`:r.e`<span @click="${()=>this.recover(t.id,"auto")}" class="op"
                      ><i-svg .src="${Ya.a}"></i-svg> ${Object(Q.i18n)("recover_this")}</span
                    >`}
              </div>`)}
            ${0===s.syncStore.autosSyncList.length&&!s.userStore.userInfo["backup-version-v2"]&&s.userStore.userInfo["auto-backup"]?r.e`
                  <div class="item ">
                    <span class="title">${c.a.fmtTime(Number(s.userStore.userInfo["auto-backup"]))}</span>
                    <span @click="${()=>this.recover("v1","auto")}" class="op"
                      ><i-svg .src="${Ya.a}"></i-svg> ${Object(Q.i18n)("recover_this")}</span
                    >
                  </div>
                `:""}
            ${0===s.syncStore.autosSyncList.length&&0===s.userStore.userInfo["auto-backup"]?r.e`<div class="item-none item-none-first">${Object(Q.i18n)("none_auto_backup")}</div>
                  <div class="item-none">${Object(Q.i18n)("none_auto_backup_desc")}</div>`:""}
          </div>
        </div>
      </div>
    `}};Ga.styles=r.b`
    .container {
      width: 614px;
      box-sizing: border-box;
      display: flex;
      border-radius: 6px;
      overflow: hidden;
    }
    .left-img {
      width: 200px;
      /* height: 437px; */
      max-height: 500px;
    }
    .right {
      flex-grow: 1;
      padding: 30px;
      box-sizing: border-box;
    }
    .right-header {
      margin-top: 4px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    .right-header .title {
      font-size: 20px;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
    }
    .right-header .tips {
      margin-top: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
    .right-card {
      margin-top: 30px;
    }
    .item {
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
    }
    .item .title {
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
    .item.header .title {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      line-height: 20px;
    }
    .item .op {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: #333333;
      line-height: 17px;
      cursor: pointer;
    }
    .op.op-none {
      opacity: 0.5;
      cursor: initial;
    }
    i-svg {
      width: 18px;
      height: 13px;
      margin-right: 2px;
    }
    .item-none {
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
    .item-none-first {
      margin-top: 6px;
    }
  `,Ga=Xa([Object(r.c)("modal-sync-list")],Ga);var Ka=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Qa=class extends a.a{constructor(){super(...arguments),this.store=s.userStore,this.showQrcode=!1,this.toggleQrcode=()=>{this.showQrcode=!this.showQrcode,this.showQrcode&&(s.userStore.userInfo.mobileuid||s.userStore.setMobileUid())},this.closeProfile=()=>{this.store.closeProfileModal(),this.store.closeModify()},this.handleCancel=()=>{this.store.closeModal(),this.store.cancelLogin()},this.openSyncList=()=>{this.store.openSyncListModal()},this.closeSyncList=()=>{this.store.closeSyncListModal()}}render(){const{isLogin:t,userInfo:e,modalOpen:i,logining:o,profileModal:n,syncListModal:a}=this.store;return r.e`
      ${t?r.e`
            <div class="user-info login">
              <div @click=${this.openProfile}>
                <div
                  class="avatar-img"
                  style="background: url(${e.avatar||Vr.f}); background-size: cover;"
                ></div>
                <div class="user-name-wrapper">
                  <div class="user-name">
                    <div class="name">${e.name}</div>
                    ${"male"===e.gender?r.e`<img class="gender" .src=${_a.a} />`:null}
                    ${"female"===e.gender?r.e`<img class="gender" .src=${xa.a} />`:null}
                  </div>
                </div>
                <div class="svg">
                  <i-svg .src="${ai.a}"></i-svg>
                </div>
              </div>
              ${Vr.e?r.e`
                    <div class="qr-code" @click=${this.toggleQrcode}>
                      <img .src=${$a.a} />
                    </div>
                  `:null}
            </div>
            <div class="synchronous">
              <div>
                <div class="title">${Object(Q.i18n)("backup_with_device")}</div>
                <div class="time ${s.syncStore.isOpenSync?"":"hide"}">
                  ${s.syncStore.lastSyncTime?Object(Q.i18n)("last_sync_time",c.a.fmtTime(Number(s.syncStore.lastSyncTime))):Object(Q.i18n)("no_backup_time")}
                </div>
              </div>
              <infinito-switch
                .checked=${s.syncStore.isOpenSync}
                @change=${t=>s.syncStore.changeSyncSwitch(t.detail.checked)}
              ></infinito-switch>
            </div>
            <div class="backup-wrapper">
              <div @click="${this.openSyncList}" class="mange-backup">
                <span>${Object(Q.i18n)("manage_backup_node")}</span>
                <i-svg .src=${ai.a}></i-svg>
              </div>
              <div @click="${this.manualBackup}" class="backup-btn">
                <i-svg .src="${Sa.a}"></i-svg>
                <span>${Object(Q.i18n)("backup_now")}</span>
              </div>
            </div>
          `:r.e`
            <div class="user-info">
              <div @click=${this.handleModal}>
                <div class="avatar-img" style="background: url(${Vr.f}); background-size: cover;"></div>
                <div>
                  <div class="user-name">
                    <div class="name">${Object(Q.i18n)("login_register")}</div>
                  </div>
                  <div class="email">${Object(Q.i18n)("want_more")}</div>
                </div>
              </div>
            </div>
          `}

      <infinito-portal-entrance destination="modal">
        <infinito-modal style="--modal-padding: 0;" .open=${i} .onCancel=${this.handleCancel}>
          <div slot="body">
            ${o?r.e`<logining-loading></logining-loading>`:r.e`<user-login ?modalOpen=${this.store.modalOpen}></user-login>`}
          </div>
        </infinito-modal>
        <infinito-modal
          style="--modal-padding: 0;"
          class="user-profile"
          .open=${n}
          .onCancel=${this.closeProfile}
        >
          <div slot="body">
            <user-profile></user-profile>
          </div>
        </infinito-modal>
      </infinito-portal-entrance>
      <infinito-portal-entrance destination="modal-sync-list">
        <infinito-modal
          style="--modal-padding: 0;overflow:hidden"
          .open=${a}
          .onCancel=${this.closeSyncList}
        >
          <div slot="body">
            <modal-sync-list></modal-sync-list>
          </div>
        </infinito-modal>
      </infinito-portal-entrance>
      <infinito-portal-entrance destination="mobile-qrcode">
        <infinito-modal .open=${this.showQrcode} .onCancel=${this.toggleQrcode}>
          <div slot="body">
            <mobile-qrcode></mobile-qrcode>
          </div>
        </infinito-modal>
      </infinito-portal-entrance>
    `}openProfile(){this.store.openProfileModal(),this.store.getUserProfile()}handleModal(){this.store.openModal()}manualBackup(){V.IConfirm.create().toShow({title:Object(Q.i18n)("backup_now"),text:Object(Q.i18n)("confirm_cover_remote"),onConfirm:()=>{s.syncStore.manualBackup()}})}createRenderRoot(){return this}};Ka([Object(r.g)({type:Boolean})],Qa.prototype,"showQrcode",void 0),Qa=Ka([Object(r.c)("user-card")],Qa);var Ja=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Za=class extends a.a{constructor(){super(...arguments),this.showCard=!1,this.list=[{key:""}]}_permissionAll(){s.settingStore.requestAllPermission()}_permission(t){s.settingStore.requestPermission(t,!0)}render(){return r.e`
      <div class="wrapper">
        <div class="header">${Object(Q.i18n)("need_you_permission")}</div>
        <div class="items global-scrollbar">
          ${s.settingStore.needPermissionList.map(t=>r.e` <div class="item">
              <div class="item-header">
                <div class="item-title">${t.title}</div>
                <infinito-button
                  class="item-btn"
                  primary
                  @click="${()=>{this._permission(t.key)}}"
                >
                  ${Object(Q.i18n)("permission")}
                </infinito-button>
              </div>
              <div class="item-content">
                <span>${t.content}</span>
              </div>
            </div>`)}
        </div>
        <div class="footer">
          <infinito-button @click="${this._permissionAll}" class="footer-btn" primary
            >${Object(Q.i18n)("permission_all")}</infinito-button
          >
        </div>
      </div>
    `}};Za.styles=[S.a,r.b`
      .wrapper {
        width: 370px;
        box-sizing: border-box;
      }
      .header {
        margin-top: 16px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 28px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .items {
        max-height: 420px;
      }
      .item {
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        padding: 14px 0;
        border-bottom: 1px solid #eeeeee;
      }
      .item:last-of-type {
        border-bottom: none;
      }
      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item-title {
        max-width: 200px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 26px;
      }
      .item-btn {
        min-width: 56px;
        height: 28px;
        background: rgba(239, 239, 239, 1);
        border-radius: 6px;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        transition: background 0.3s, color 0.3s;
      }
      .item-btn:hover {
        background: rgba(51, 51, 51, 1);
        color: rgba(255, 255, 255, 1);
      }
      .item-content {
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(101, 101, 101, 1);
        line-height: 20px;
        word-break: break-all;
      }
      .footer {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        text-align: center;
      }
      .footer-btn {
        width: 100%;
        height: 52px;
        border-radius: 6px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        --hover-color: #000;
        --font-size: 16px;
      }
    `],Ja([Object(r.g)({type:Boolean})],Za.prototype,"showCard",void 0),Za=Ja([Object(r.c)("user-permission-modal")],Za);var ts=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let es=class extends a.a{constructor(){super(...arguments),this.showCard=!1,this._openCard=()=>{this.showCard=!0},this._closeCard=()=>{this.showCard=!1}}render(){const t=s.settingStore.needPermissionList.length;return 0===t&&(this.showCard=!1),r.e`
      ${t>0?r.e` <infinito-card>
            <div class="entry" @click=${this._openCard}>
              <div class="tips">
                <span class="circle"></span>
                <span>${Object(Q.i18n)("fully_authorized_to_use")}(${t})</span>
              </div>
              <i-svg class="svg" .src="${ai.a}"></i-svg>
            </div>
          </infinito-card>`:r.e``}
      <infinito-portal-entrance destination="user-permission">
        <infinito-modal
          .open=${this.showCard&&t>0}
          .onCancel=${this._closeCard}
        >
          <div slot="body">
            <user-permission-modal></user-permission-modal>
          </div>
        </infinito-modal>
      </infinito-portal-entrance>
    `}};es.styles=r.b`
    .entry {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      cursor: pointer;
      margin-bottom: -10px;
    }
    .entry .circle {
      margin-right: 8px;
      display: inline-block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background: rgba(255, 127, 59, 1);
    }
    .entry .svg {
      width: 18px;
      height: 18px;
    }
    .card {
      width: 410px;
      min-height: 200px;
      border-radius: 6px;
    }
  `,ts([Object(r.g)({type:Boolean})],es.prototype,"showCard",void 0),es=ts([Object(r.c)("user-permission")],es);var is=i(174),os=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ns=class extends r.a{constructor(){super(...arguments),this.show=!1,this.firstShowQQ=!0,this.qq="172263837",this.loading=!1}async generateRepairFile(){this.loading=!0;try{const t=await s.syncStore.getAllBackupData(),e=await is.a.exportDebugData()||{},i={version:"v2-repair",browserEnv:l.c,editionEnv:l.e,backupType:"local",time:(new Date).getTime(),extVersion:l.B.extVersion,backupData:t,data:e},o=JSON.stringify(i),n=new Blob([o],{type:"text/infinity"}),r=new Date,a=r.getFullYear(),c=r.getMonth()+1,p=a+"-"+c+"-"+r.getDate(),d=document.createElement("a"),h=Xo.a.createObjectURL(n);d.href=h,d.download="infinityRepair-"+p+".infinity",document.body.appendChild(d),d.click(),document.body.removeChild(d),Xo.a.revokeObjectURL(h),j.a.sendEvent({action:"exportRepair"})}catch(t){}this.loading=!1}async getQQ(){const{data:t,error:e}=await ut.c.getRepairConcat();e||(null==t?void 0:t.qq)&&(this.qq=t.qq,this.firstShowQQ=!1)}updated(t){t.has("show")&&!0===this.show&&this.firstShowQQ&&this.getQQ()}render(){return r.e`
      <div class="layout-body">
        <div class="layout-title">${i18n("repair_data_title")}</div>
        <div class="layout-content">
          <div class="main">
            <div class="desc">${i18n("repair_data_desc_contnet")}</div>
            <div class="concat">
              <div class="concat-title">${i18n("repair_concat")}</div>
              <div class="concat-qq">
                <span>${i18n("repair_concat_qq")}</span><span class="concat-text">${this.qq}</span>
              </div>
              <div class="concat-email">
                <span>${i18n("repair_concat_email")}</span><span class="concat-text">infinitynewtab@gmail.com</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <infinito-button .disabled="${this.loading}" primary @click="${this.generateRepairFile}">
              ${i18n("repair_export_btn")}</infinito-button
            >
          </div>
        </div>
      </div>
    `}};ns.styles=[r.b`
      .layout-body {
        box-sizing: border-box;
        width: 360px;
        padding: 20px 40px;
      }
      .layout-title {
        margin-top: 30px;
        margin-bottom: 14px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #333333;
        line-height: 26px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .desc {
        margin-top: 14px;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: 400;
        color: #b3b3b3;
        line-height: 19px;
      }
      .concat-title {
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 500;
        color: #333333;
        line-height: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .concat-qq,
      .concat-email {
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #4d4d4d;
        line-height: 16px;
        white-space: nowrap;
      }
      .footer infinito-button {
        margin-top: 24px;
        margin-bottom: 10px;
        height: 42px;
      }
      .concat-text {
        user-select: text;
      }
    `],os([Object(r.g)({type:Boolean})],ns.prototype,"show",void 0),os([Object(r.f)()],ns.prototype,"qq",void 0),os([Object(r.f)()],ns.prototype,"loading",void 0),ns=os([Object(r.c)("modal-repair-contact")],ns);var rs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let as=class extends r.a{constructor(){super(...arguments),this.show=!1,this.loading=!1,this.contactModal=!1,this.updateText=i18n("update_data"),this.generateBackupFile=async()=>{localStorage.setItem("backup-file",""+Date.now());const t=await s.syncStore.getAllBackupData(),e={version:"v2",browserEnv:l.c,editionEnv:l.e,backupType:"local",time:(new Date).getTime(),extVersion:l.B.extVersion,data:t},i=JSON.stringify(e),o=new Blob([i],{type:"text/infinity"}),n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),a=document.createElement("a"),c=Xo.a.createObjectURL(o);a.href=c,a.download="infinityBackup-"+r+".infinity",document.body.appendChild(a),a.click(),document.body.removeChild(a),Xo.a.revokeObjectURL(c)},this.showContactModal=()=>{const t=new CustomEvent("on-contact",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}firstUpdated(){this.updateText=i18n("update_data")}async reUpdate(){this.loading=!0;const t=localStorage.getItem("backup-file");let e=0;t&&Date.now()-Number(t)<6e4?e=0:(this.updateText=i18n("repair_auto_backup"),await this.generateBackupFile(),e=2e3),setTimeout(()=>{localStorage.removeItem("user-checkout-old-data"),localStorage.setItem("bg-updating",""+Date.now()),localStorage.setItem("updating-manual","true"),Di.slave.sendMessage("tabs-reload"),c.a.send({key:"bg-update",data:"9.9.9"}),setTimeout(()=>{location.reload()},20)},e)}close(){const t=new CustomEvent("on-closerepair",{bubbles:!0,composed:!0});this.dispatchEvent(t),this.show=!1}render(){return r.e`
      <infinito-modal style="--modal-padding:0;" .onCancel="${this.close}" .open=${this.show}>
        <div class="layout-body" slot="body">
          <div class="layout-title">${i18n("update_or_repair_data")}</div>
          <div class="layout-content">
            <div class="main">
              <div class="desc">${i18n("update_desc_1")}</div>
              <div class="desc">${i18n("update_desc_2")}</div>
              <div class="desc desc-tip">
                <img src="${i(710)}" alt="" />
                <span>${i18n("update_desc_3")}</span>
              </div>
            </div>
            <div class="footer">
              <infinito-button primary @click="${this.generateBackupFile}"
                >${i18n("export_local_data")}</infinito-button
              >
              <infinito-button .disabled="${this.loading}" @click="${this.reUpdate}"
                >${this.updateText}</infinito-button
              >
              <div class="btn contact">
                <span @click="${this.showContactModal}">${i18n("contact_engineer")}</span>
              </div>
            </div>
          </div>
        </div>
      </infinito-modal>
    `}};as.styles=[r.b`
      .layout-body {
        box-sizing: border-box;
        width: 360px;
        padding: 20px 40px;
      }
      .layout-title {
        margin-top: 30px;
        margin-bottom: 14px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #333333;
        line-height: 26px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .desc {
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #b3b3b3;
        line-height: 20px;
      }
      .desc-tip {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 12px;
        font-weight: 400;
        color: #ff3838;
        line-height: 16px;
      }
      .desc-tip img,
      .desc-tip span {
        vertical-align: middle;
      }
      .concat-title {
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 500;
        color: #333333;
        line-height: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .concat-qq,
      .concat-email {
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #4d4d4d;
        line-height: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .footer infinito-button {
        margin-bottom: 10px;
        height: 42px;
      }
      .btn.contact {
        margin-top: 16px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #b3b3b3;
        line-height: 20px;
      }
      .btn.contact span {
        cursor: pointer;
      }
    `],rs([Object(r.g)({type:Boolean})],as.prototype,"show",void 0),rs([Object(r.g)({type:Boolean})],as.prototype,"loading",void 0),rs([Object(r.f)()],as.prototype,"contactModal",void 0),rs([Object(r.f)()],as.prototype,"updateText",void 0),as=rs([Object(r.c)("side-repair-modal")],as);var ss=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const ls=[{src:"twitter_icon",title:"twitter"},{src:"linked_icon",title:"linkedin"},{src:"facebook_icon",title:"facebook"},{src:"google_icon",title:"google"},{src:"zone_icon",title:"qzone"},{src:"qq_icon",title:"qq"},{src:"douban_icon",title:"douban"},{src:"xinlang_icon",title:"weibo"}].map(t=>Object.assign(Object.assign({},t),{src:i(557)(`./${t.src}.png`)})),cs=[{href:"https://twitter.com/infinitynewtab",src:"twitter_icon",title:Object(Q.i18n)("twitter")},{href:"https://www.facebook.com/people/Infinity-Newtab/100017954043897",src:"facebook_icon",title:Object(Q.i18n)("facebook")},{href:"http://weibo.com/u/5868302170",src:"xinlang_icon",title:Object(Q.i18n)("xin_lang_weibo")}].map(t=>Object.assign(Object.assign({},t),{src:i(557)(`./${t.src}.png`)}));let ps=class extends a.a{constructor(){super(...arguments),this.payType="alipay",this.donateMoney="10",this.showDonateMoney=!1,this.repairModal=!1,this.focusRepair=!1,this.repairContactModal=!1,this.closeModal=()=>{this.showDonateMoney=!1},this.openWallPaperSource=()=>{},this.recoveryFromFile=async()=>{const t=await c.a.chooseFile(".infinity,text/plain,application/json","readAsText");try{const e=JSON.parse(t);let i={};if("v2"===e.version)i=e.data;else{if(10!==e.version)return void Si.default.error(Object(Q.i18n)("recover_error_version"));i=await ha(e)}s.syncStore.useLocalData(i),j.a.sendEvent({action:"localRecovery"})}catch(t){Si.default.error(Object(Q.i18n)("recover_error")),console.error("recovery error:",t)}},this.generateBackupFile=async()=>{localStorage.setItem("backup-file",""+Date.now());const t=await s.syncStore.getAllBackupData(),e={version:"v2",browserEnv:l.c,editionEnv:l.e,backupType:"local",time:(new Date).getTime(),extVersion:l.B.extVersion,data:t},i=JSON.stringify(e),o=new Blob([i],{type:"text/infinity"}),n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),a=document.createElement("a"),c=Xo.a.createObjectURL(o);a.href=c,a.download="infinityBackup-"+r+".infinity",document.body.appendChild(a),a.click(),document.body.removeChild(a),Xo.a.revokeObjectURL(c),j.a.sendEvent({action:"localBackup"})},this.openRepairModal=async()=>{localStorage.setItem("user-checkout-old-data","true");let t=!1;if(l.l){const{checkOldLocalData:e}=await i.e(10).then(i.bind(null,770));t=await e()}t?this.repairModal=!0:this.openRepairContactModal()},this.closeRepairModal=()=>{this.repairModal=!1},this.closeContactModal=()=>{this.repairContactModal=!1},this.openRepairContactModal=()=>{this.repairContactModal=!0}}changeMask(t,e){const{value:i}=t.detail;e?s.wallpaperStore.setOpacity(i):s.wallpaperStore.setBlur(i)}changeWallPaper(t){t.stopPropagation();this.shadowRoot.querySelector(".wallpaper-source").classList.toggle("open")}giveFiveStar(t){const e=window.chrome.runtime.id;if(l.i){const i=Object(Vr.b)(e);c.a.openUrl(i,!0,t)}if(l.n&&c.a.openUrl(Vr.a,!0,t),l.k){const i=Object(Vr.c)(e);c.a.openUrl(i,!0,t)}}feedback(t){c.a.openUrl("https://infinity.mikecrm.com/x5tPd5V",!0,t)}radioChange(t){this.donateMoney=t.detail.selected}giveMoney(t){t.stopPropagation(),t.preventDefault(),this.showDonateMoney=!0}follow(t,e){c.a.openUrl(e,!0,t)}share(t){const{href:e}=t.currentTarget;c.a.openUrl(e,!0,t)}showRepairAnimation(){try{this.shadowRoot.querySelector(".repair-card").scrollIntoView({block:"nearest"})}catch(t){}setTimeout(()=>{this.focusRepair=!0},0)}firstUpdated(){if(l.d){const t=new Date(Number(l.d));console.log("versionTime:"+t.toLocaleString())}document.body.addEventListener("click",this.openWallPaperSource);const t=l.i?"Chorme":l.n?"Firefox":"Edge";window.socialShare(this.container,{url:"https://infinitynewtab.com",source:"infinitynewtab",image:"https://infinity-permanent.infinitynewtab.com/infinity/share/home.jpg",title:Object(Q.i18n)("share_title",t),description:Object(Q.i18n)("share_desc"),sites:["twitter","facebook","google","linkedin","qzone","qq","douban","weibo"]}),this.$repair.addEventListener("animationcancel",t=>{"focusblink"===t.animationName&&(this.focusRepair=!1,s.pluginStore.blurRepair())}),this.$repair.addEventListener("animationend",t=>{"focusblink"===t.animationName&&(this.focusRepair=!1,s.pluginStore.blurRepair())})}disconnectedCallback(){document.body.removeEventListener("click",this.openWallPaperSource)}downloadWallpaper(){c.a.downloadImg(s.wallpaperStore.rawUrl,void 0,s.wallpaperStore.wpExt)}_openWallpaperModal(){s.pluginStore.show("infinity://wallpaper")}render(){return r.e`
      <div style="height:100%;box-sizing: border-box; padding: 30px;padding-right:0;" class="global-scrollbar">
        <div style="width:360px;" class="container">
          <infinito-card style="--padding-width:20px 20px 12px 20px">
            <user-card></user-card>
          </infinito-card>
          <infinito-card class="backup-recovery" cTitle="${Object(Q.i18n)("backup_and_recovery")}">
            <div class="backup-btn-box">
              <div class="backup-btn-card">
                <div class="backup-btn-content">
                  <div class="backup-btn" @click="${this.generateBackupFile}">
                    <div class="backup-btn-title">
                      <span class="backup-btn-title-text">${Object(Q.i18n)("export_local_data")}</span>
                      <i-svg .src=${ai.a}></i-svg>
                    </div>
                    <span class="backup-btn-desc">${Object(Q.i18n)("export_local_data_desc")}</span>
                  </div>
                </div>
              </div>
              <div class="backup-btn-card">
                <div class="backup-btn-content">
                  <div class="backup-btn" @click="${this.recoveryFromFile}">
                    <div class="backup-btn-title">
                      <span class="backup-btn-title-text">${Object(Q.i18n)("import_data")}</span>
                      <i-svg .src=${ai.a}></i-svg>
                    </div>
                    <span class="backup-btn-desc">${Object(Q.i18n)("import_data_desc")}</span>
                  </div>
                </div>
              </div>
              <div class="backup-btn-card repair-card ${this.focusRepair?"focus":""}">
                <div class="backup-btn-content">
                  <div class="backup-btn" @click="${this.openRepairModal}">
                    <div class="backup-btn-title">
                      <span class="backup-btn-title-text">${Object(Q.i18n)("repair_data")}</span>
                      <i-svg .src=${ai.a}></i-svg>
                    </div>
                    <span class="backup-btn-desc">${Object(Q.i18n)("repair_data_title")}</span>
                  </div>
                </div>
              </div>
            </div>
          </infinito-card>
          <side-repair-modal
            .show="${this.repairModal}"
            @on-contact="${this.openRepairContactModal}"
            @on-closerepair="${this.closeRepairModal}"
          ></side-repair-modal>
          <infinito-portal-entrance destination="modal-repair-contact">
            <infinito-modal .open=${this.repairContactModal} .onCancel=${this.closeContactModal}>
              <div slot="body">
                <modal-repair-contact .show=${this.repairContactModal}></modal-repair-contact>
              </div>
            </infinito-modal>
          </infinito-portal-entrance>
          <user-permission></user-permission>

          <infinito-card .cTitle="${Object(Q.i18n)("wallpaper")}">
            <div class="wallpaper-container">
              <div class="wp-inner-container">
                <wp-item-raw
                  .type=${s.wallpaperStore.type}
                  .content=${"color"===s.wallpaperStore.type?s.wallpaperStore.color:s.wallpaperStore.urlInUI}
                ></wp-item-raw>
                <div
                  class="wp-download-button"
                  @click=${this.downloadWallpaper}
                  style="${"color"===s.wallpaperStore.type?"display: none;":""}"
                >
                  <img
                    class="wp-download-icon"
                    src=${i(558)}
                    decoding="async"
                    importance="auto"
                    width="20"
                  />
                </div>

                <div class="wp-hover-mask" @click=${this._openWallpaperModal}>
                  <input class="wph-mask-button" type="button" value=${Object(Q.i18n)("change_wallpaper")} />
                </div>
              </div>
              <div class="slider-wrapper">
                <div class="mask">
                  <p>${Object(Q.i18n)("mask_density")}</p>
                  <div
                    style="
                padding-left: 4px;
                box-sizing: border-box;
                width: calc(100% + 10px);
                  "
                  >
                    <infinito-slider
                      @on-change="${t=>this.changeMask(t,!0)}"
                      .value="${s.wallpaperStore.opacity}"
                      .min=${0}
                      .max=${100}
                      suffix="%"
                    >
                    </infinito-slider>
                  </div>
                </div>
                ${l.n?null:r.e`
                      <div class="mask">
                        <p>${Object(Q.i18n)("ambiguity")}</p>
                        <div
                          style="
                padding-left: 4px;
                box-sizing: border-box;
                width: calc(100% + 10px);
                  "
                        >
                          <infinito-slider
                            @on-change="${t=>this.changeMask(t)}"
                            .value="${s.wallpaperStore.blur}"
                            .min=${0}
                            .max=${100}
                            suffix="%"
                          >
                          </infinito-slider>
                        </div>
                      </div>
                    `}
              </div>
            </div>
          </infinito-card>
          <infinito-card cTitle="${Object(Q.i18n)("user_evaluation")}">
            <p>${l.r?Object(Q.i18n)("give_some_feedback_to_improve_web"):Object(Q.i18n)("give_some_feedback_to_improve")}</p>
            <div class="btns rating">
              ${l.r?null:r.e` <infinito-button @click="${this.giveFiveStar}">${Object(Q.i18n)("five_star")}</infinito-button> `}

              <infinito-button @click="${this.feedback}">${Object(Q.i18n)("feedback")}</infinito-button>
            </div>
          </infinito-card>
          ${Q.IS_ZH?r.e`
                <infinito-card cTitle="${Object(Q.i18n)("give_money")}">
                  <div class="payment">
                    <p>${Object(Q.i18n)("give_money_thanks")}</p>
                    <img class="payment-cover" .src=${zr.a} />
                  </div>
                  <div class="choose-plan">
                    <infinito-radio-group selected="${this.donateMoney}" @on-change=${this.radioChange}>
                      <infinito-radio value="10">${Object(Q.i18n)("currency_symbol")}10</infinito-radio>
                      <infinito-radio value="15">${Object(Q.i18n)("currency_symbol")}15</infinito-radio>
                      <infinito-radio value="20">${Object(Q.i18n)("currency_symbol")}20</infinito-radio>
                      <infinito-radio value="25">${Object(Q.i18n)("currency_symbol")}25</infinito-radio>
                      <infinito-radio value="0">${Object(Q.i18n)("currency_symbol")}${Object(Q.i18n)("any_money")}</infinito-radio>
                    </infinito-radio-group>
                  </div>
                  <div class="btns" style="justify-content: center;">
                    <infinito-button @click="${this.giveMoney}}">${Object(Q.i18n)("i_want_to_reward")}</infinito-button>
                  </div>
                </infinito-card>
                <infinito-card cTitle="${Object(Q.i18n)("follow_wechat")}">
                  <p class="wechat_desc">${Object(Q.i18n)("follow_wechat_desc")}</p>
                  <div class="wechat">
                    <img .src="${qr.a}" />
                  </div>
                </infinito-card>
              `:null}
          <infinito-card cTitle="${Object(Q.i18n)("share")}">
            <div class="icons social-share" data-initialized="true">
              ${ls.map(t=>r.e`
                    <p class="icon-${t.title}" @click=${this.share}>
                      <img .src="${t.src}" />
                    </p>
                  `)}
            </div>
          </infinito-card>
          <infinito-card cTitle="${Object(Q.i18n)("follow_us")}">
            <div class="icons">
              ${cs.map(t=>r.e`
                    <p @click="${e=>this.follow(e,t.href)}">
                      <img .src="${t.src}" />
                    </p>
                  `)}
            </div>
          </infinito-card>
          <infinito-card cTitle="${Object(Q.i18n)("support")}">
            <div class="btns suport">
              <infinito-button
                class="facebook-group"
                @click=${t=>this.handleOpenUrl(t,"https://www.facebook.com/groups/464169353959006/")}
              >
                <img src="${Ur.a}" />
                <span>${Object(Q.i18n)("facebook_group")}</span>
              </infinito-button>
              <infinito-button
                class="qq-group"
                @click=${t=>this.handleOpenUrl(t,"http://qm.qq.com/cgi-bin/qm/qr?k=WYvnxT5rIeATl2wm4T2Dkc0sajWbbCjE&group_code=194737859")}
              >
                <img src="${Wr.a}" />
                <span>${Object(Q.i18n)("qq_group")}</span>
              </infinito-button>
            </div>
          </infinito-card>
          <infinito-card cTitle="${Object(Q.i18n)("about")}">
            <p class="version">v${l.x}</p>
            <ul class="about-us">
              <li @click=${t=>this.handleOpenUrl(t,"https://policies.extfans.com/policies/about.html")}>
                <span>${Object(Q.i18n)("about_us")}</span>
              </li>
              <li @click=${t=>this.handleOpenUrl(t,"https://policies.extfans.com/policies/contact.html")}>
                <span>${Object(Q.i18n)("contact_us")}</span>
              </li>
              <li title=${Object(Q.i18n)("privacy_policy")} @click=${t=>this.handleOpenUrl(t,c.a.getPrivacyUrl())}>
                <span>${Object(Q.i18n)("privacy_policy")}</span>
              </li>
              <li @click=${t=>this.handleOpenUrl(t,"https://policies.extfans.com/policies/terms.html")}>
                <span>${Object(Q.i18n)("term_of_use")}</span>
              </li>
            </ul>
          </infinito-card>
        </div>
        <infinito-portal-entrance destination="donate">
          <donate-section
            .open=${this.showDonateMoney}
            .payType=${this.payType}
            .donateMoney=${this.donateMoney}
            @on-cancel=${this.closeModal}
          ></donate-section>
        </infinito-portal-entrance>
      </div>
    `}handleOpenUrl(t,e){c.a.openUrl(e,!0,t)}};ps.styles=[S.a,Mr],ss([Object(r.g)({type:String})],ps.prototype,"payType",void 0),ss([Object(r.g)({type:String})],ps.prototype,"donateMoney",void 0),ss([Object(r.g)({type:Boolean})],ps.prototype,"showDonateMoney",void 0),ss([Object(r.g)({type:Boolean})],ps.prototype,"show",void 0),ss([Object(r.g)({type:Boolean})],ps.prototype,"repairModal",void 0),ss([Object(r.g)({type:Boolean})],ps.prototype,"focusRepair",void 0),ss([Object(r.g)({type:Boolean})],ps.prototype,"repairContactModal",void 0),ss([Object(r.h)(".social-share")],ps.prototype,"container",void 0),ss([Object(r.h)(".repair-card")],ps.prototype,"$repair",void 0),ps=ss([Object(r.c)("side-user")],ps);var ds=i(338),hs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const us=[{key:"history",label:Object(Q.i18n)("open_newtab_history"),type:"switch"}],gs=[{key:"bookmark",label:Object(Q.i18n)("open_newtab_bookmarks"),type:"switch"}],fs=[{key:"icon",label:Object(Q.i18n)("open_new_tab"),type:"switch"},{key:"search",label:Object(Q.i18n)("open_newtab_show_search"),type:"switch"},...l.r?[]:gs,...l.h||l.r?[]:us],ms=[{key:"gmail",label:Object(Q.i18n)("gamil_notice"),type:"switch"},{key:"gmailVoice",label:Object(Q.i18n)("gmail_notice_voice"),type:"switch"},{key:"gmailNumber",label:Object(Q.i18n)("show_gamil_unread_number"),type:"switch"}],bs=[...l.h||l.r?[]:ms,{key:"todoNumber",label:Object(Q.i18n)("show_reminders_number"),type:"switch"}],ys=[{key:"scaleMain",label:Object(Q.i18n)("scale_main"),type:"slider",min:.5,max:1.5,step:.01,percentage:!0},{key:"scaleSide",label:Object(Q.i18n)("scale_side"),type:"slider",min:.5,max:1.5,step:.01,percentage:!0},{key:"windmill",label:Object(Q.i18n)("wind_mill"),type:"switch"},...l.r?[]:[{key:"topUseful",label:Object(Q.i18n)("top_use_ful"),type:"switch"},{key:"topBookmark",label:Object(Q.i18n)("top_bookmark"),type:"switch"}],{key:"pagin",label:Object(Q.i18n)("pagin"),type:"switch"},...l.r?[{key:"isShowHomepageBtn",label:Object(Q.i18n)("hide_homepage_btn"),type:"switch"}]:[]],vs=[{key:"colGap",label:Object(Q.i18n)("col_gap"),type:"slider",min:0,max:1,step:.01,percentage:!0},{key:"rowGap",label:Object(Q.i18n)("row_gap"),type:"slider",min:0,max:1,step:.01,percentage:!0},{cardKey:"icon",key:"scale",label:Object(Q.i18n)("scale"),type:"slider",min:.1,max:1,step:.01,percentage:!0}],ws=[{key:"miniMode",label:Object(Q.i18n)("mini_mode"),type:"switch"},{key:"isHideIconName",label:Object(Q.i18n)("hide_icon_name"),type:"switch"},{key:"shadow",label:Object(Q.i18n)("shadow"),type:"switch"},{key:"startAnimation",label:Object(Q.i18n)("start_animation"),type:"switch"},{key:"radius",label:Object(Q.i18n)("redius"),type:"slider",min:0,max:.5,step:.01,percentage:!0},{key:"opacity",label:Object(Q.i18n)("opacity"),type:"slider",min:.1,max:1,step:.01,percentage:!0},{key:"scale",label:Object(Q.i18n)("scale"),type:"slider",min:.1,max:1,step:.01,percentage:!0}],xs=[{key:"hide",label:Object(Q.i18n)("hide_search_input"),type:"switch"},{key:"searchSuggest",label:Object(Q.i18n)("search_suggest"),type:"switch"},{key:"hideCategory",label:Object(Q.i18n)("hide_search_category"),type:"switch"},{key:"hideButton",label:Object(Q.i18n)("hide_search_button"),type:"switch"},{key:"shadow",label:Object(Q.i18n)("search_input_shadow"),type:"switch"},{key:"scale",label:Object(Q.i18n)("search_size"),type:"slider",min:.5,max:1.5,step:.01,percentage:!0},{key:"radius",label:Object(Q.i18n)("search_redius"),type:"slider",min:0,max:.5,step:.01,percentage:!0},{key:"opacity",label:Object(Q.i18n)("search_opacity"),type:"slider",min:.1,max:1,step:.01,percentage:!0}],ks=[{key:"shadow",label:Object(Q.i18n)("text_shadow"),type:"switch"},{key:"size",label:Object(Q.i18n)("font_size"),type:"slider",min:12,max:30}];class _s{constructor(){if(this.viewData=[{key:"link",title:Object(Q.i18n)("target_open_way"),tip:Object(Q.i18n)("only_used_infinity"),children:fs},{key:"notice",title:Object(Q.i18n)("notice"),children:bs},{key:"view",title:Object(Q.i18n)("view"),children:ys},{key:"layout",title:Object(Q.i18n)("layout"),children:vs,custom:!0},{key:"icon",title:Object(Q.i18n)("icon"),children:ws},{key:"search",title:Object(Q.i18n)("search_input"),children:xs},{key:"font",title:Object(Q.i18n)("font"),children:ks,custom:!0},{key:"animation",title:Object(Q.i18n)("animation"),tip:Object(Q.i18n)("animation_tips"),custom:!0}],this.layout={list:[[2,4],[2,5],[2,6],[2,7],[3,3]],activeIndex:null,modal:!1},this.animationList=[{label:Object(Q.i18n)("default"),easing:"linear",icon:Object(ot.a)("setting/animate-default.png"),iconActive:Object(ot.a)("setting/animate-default-active.png")},{label:Object(Q.i18n)("cubic_bezier"),easing:"elastic",icon:Object(ot.a)("setting/animate-bounce.png"),iconActive:Object(ot.a)("setting/animate-bounce-active.png")},{label:Object(Q.i18n)("ease_in"),easing:"opacity",icon:Object(ot.a)("setting/animate-easin.png"),iconActive:Object(ot.a)("setting/animate-easin-active.png")}],this.animationIndex=null,this.fontColors=["rgba(255,255,255,0.8)","#df5f47","#efa738","#faec63","#73b364","#60c0d6","#57a0ee","#6c4cb9"],this.closed=new Set,l.r){const t=this.viewData.findIndex(({key:t})=>"view"===t);this.viewData.splice(t,0,{key:"language",title:Object(Q.i18n)("language"),custom:!0})}}chooseLayout(t){if(t===this.layout.list.length-1)s.settingStore.changeSetting("layout","custom",!0),s.settingStore.setting.layout.row===s.settingStore.setting.layout.customItem[0]&&s.settingStore.setting.layout.col===s.settingStore.setting.layout.customItem[1]||s.settingStore.changeSetting("layout","customItem",[s.settingStore.setting.layout.row,s.settingStore.setting.layout.col]);else{const e=this.layout.list[t];s.settingStore.changeSetting("layout","custom",!1),s.settingStore.changeSetting("layout","row",e[0]),s.settingStore.changeSetting("layout","col",e[1]);const i=Object(ds.a)(e[0],e[1]);i&&s.settingStore.setIconSpace(i)}}changeLayoutModal(t){t&&this.chooseLayout(5),this.layout.modal=t}chooseAnimation(t){const e=this.animationList[t];s.settingStore.changeSetting("animation","easing",e.easing)}chooseFontClolor(t){s.settingStore.changeSetting("font","color",t)}close(t){this.closed.add(t)}open(t){this.closed.delete(t)}}hs([x.g],_s.prototype,"layout",void 0),hs([x.g],_s.prototype,"animationIndex",void 0),hs([x.g],_s.prototype,"closed",void 0),hs([x.b],_s.prototype,"chooseLayout",null),hs([x.b],_s.prototype,"changeLayoutModal",null),hs([x.b],_s.prototype,"chooseAnimation",null),hs([x.b],_s.prototype,"chooseFontClolor",null),hs([x.b],_s.prototype,"close",null),hs([x.b],_s.prototype,"open",null);const Os=new _s;Object(x.c)(()=>{if(s.settingStore.firstSync){const{col:t,row:e,custom:i,customItem:o}=s.settingStore.setting.layout,n=5;Object(x.i)(()=>{if(Os.layout.list[n]=o,i)Os.layout.activeIndex=n;else{const i=[e,t],o=Os.layout.list.findIndex(t=>i.join(",")===t.join(","));Os.layout.activeIndex=o}})}}),Object(x.c)(()=>{if(s.settingStore.firstSync){const{easing:t}=s.settingStore.setting.animation;Object(x.i)(()=>{const e=Os.animationList.findIndex(e=>e.easing===t);Os.animationIndex=e})}});var Ss=r.b`infinito-card {
  width: 360px;
  transition: margin-top 0.3s ease-in-out;
}
infinito-card[close] + infinito-card:not([close]) {
  margin-top: 30px;
}
infinito-card:not([close]) + infinito-card[close] {
  margin-top: 30px;
}
.tips {
  margin-top: 6px;
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
}
.rule-box {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.rule-box .rule {
  color: #454545;
  font-weight: 400;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 10px;
  height: 20px;
  line-height: 20px;
}
.rule-box.slider-type {
  flex-direction: column;
}
.rule-box.slider-type .rule-option {
  margin: 10px 0 0;
  padding-left: 4px;
  box-sizing: border-box;
  width: calc(100% + 10px);
}
.rule-box.scale-side {
  margin: 0 0 -16px;
  padding: 20px 0;
  box-sizing: border-box;
}
.layout-custom {
  margin: 24px 0 -20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
.layout-custom .item {
  max-width: 94px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.layout-custom .active i-svg,
.layout-custom .active .item-text {
  color: #333333;
}
.layout-custom .active .item-card {
  border: 2px solid #333333;
}
.layout-custom .active .item-card-holder {
  background-color: #fff;
}
.layout-custom .active .item-card-holder.hard {
  background: #333;
}
.layout-custom .item-card {
  width: 100%;
  height: 53px;
  box-sizing: border-box;
  display: grid;
  justify-items: stretch;
  align-items: stretch;
  border-radius: 6px;
  overflow: hidden;
}
.layout-custom .item-card-holder {
  background-color: #f5f5f5;
}
.layout-custom .item-card-holder.hard {
  background: #ebebeb;
}
.layout-custom .item:last-of-type .item-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
.layout-custom i-svg {
  width: 24px;
  height: 24px;
  color: #999999;
}
.layout-custom .item-text {
  margin-top: 6px;
  color: #999999;
}
.animation-card {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}
.animation-card .animation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.animation-card .item-card {
  background: #f5f5f5;
  border-radius: 6px;
}
.animation-card .item-card img {
  width: 100%;
}
.animation-card .item-card .animateimg {
  display: block;
}
.animation-card .item-text {
  margin-top: 10px;
  color: #999999;
}
.animation-card .active .item-text {
  color: #333333;
}
.rule-box.colors {
  flex-direction: column;
  position: relative;
}
.rule-box.colors .rule-option {
  margin: 20px 0 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  position: relative;
  display: block;
  outline: 0;
  border: 0;
  width: 122px;
  height: 42px;
  background: #efefef;
  border-radius: 6px;
  font-weight: 500;
  color: #333333;
  cursor: pointer;
}
.btn:hover {
  background: #dedede;
}
.reset-btn {
  margin: 24px auto 0;
}
.language-card .language-item {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
}
.language-card .language-select-wrap .label {
  max-width: 110px;
}
.language-card .language-select-wrap .language-select {
  flex: 1;
  width: 0;
  max-width: 120px;
  height: 24px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  line-height: 24px;
  color: #656565;
  font-size: 12px;
}
`,js=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let $s=class extends r.a{constructor(){super(...arguments),this.checked=!1}_changeHandler(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return r.e`
      <div id="container">
        <input
          hidden
          type="checkbox"
          id="switch"
          .checked=${this.checked}
          @change="${this._changeHandler}"
        >
        <label class="switch" for="switch"></label>
      </div>
    `}};$s.styles=r.b`
    .switch {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      width: 24px;
      height: 16px;
      border-radius: 20px;
      border: 2px solid rgba(51, 51, 51, .2);
      transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      vertical-align: middle;
      cursor: pointer;
    }
    .switch::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 10px;
      height: 10px;
      background: rgba(51, 51, 51, .2);
      border-radius: 50%;
      transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    /* .switch:active::before {
      box-shadow: 0 2px 8px rgba(0,0,0,0.28), 0 0 0 20px rgba(128,128,128,0.1);
    } */
    input:checked + .switch {
      border: 2px solid rgba(51, 51, 51, 1);
    }
    input:checked + .switch::before {
      left: 9px;
      background: rgba(51, 51, 51, 1);
    }
    /* input:checked + .switch:active::before {
      box-shadow: 0 2px 8px rgba(0,0,0,0.28), 0 0 0 20px rgba(0,150,136,0.2);
    } */
  `,js([Object(r.g)({type:Boolean})],$s.prototype,"checked",void 0),$s=js([Object(r.c)("i-switch")],$s);i(371);var Is=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Cs=class extends r.a{constructor(){super(...arguments),this.value="",this.label="",this.min="",this.max="",this.step="",this.floatScaleRatio=1,this.rect={top:null,left:null,width:null,height:null,right:null},this.floatScale=!1,this.start=null}shouldUpdate(t){if(t.has("floatScale")&&!1===this.floatScale&&this.$container&&this.start){const t={left:this.rect.left-20*this.floatScaleRatio+"px",top:this.rect.top+"px",width:this.rect.width/this.floatScaleRatio+"px",transform:`scale(${this.floatScaleRatio})`};return this.$itemBox.animate([this.start,t],{duration:400,easing:"ease-in-out"}).onfinish=()=>{this.$container.style.opacity="0",this.requestUpdate()},!1}return!0}updated(t){t.has("floatScale")&&!0===this.floatScale&&(this.$container.offsetHeight,this.$container.style.opacity="1",this.start={left:this.rect.left-20*this.floatScaleRatio+"px",top:this.rect.top+"px",width:this.rect.width/this.floatScaleRatio+"px",transform:`scale(${this.floatScaleRatio})`})}render(){const{top:t,left:e,width:i}=this.rect,o=this.floatScaleRatio;return r.e`
      <div class="float-scale" .hidden="${!this.floatScale}">
        <div
          class="item-box"
          style="transform:scale(${o});width:${i/o}px; left:${e-20*o}px;top:${t}px;"
        >
          <span class="rule">${this.label}</span>
          <div class="item">
            <infinito-slider
              .value=${this.value}
              .min=${this.min}
              .max=${this.max}
              .step=${this.step}
              .translator=${t=>Math.round(100*t)+"%"}
            ></infinito-slider>
          </div>
        </div>
      </div>
    `}};Cs.styles=r.b`
    .float-scale {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 99999;
      transition: 0.3s opacity;
    }
    .item-box {
      padding: 20px;
      position: absolute;
      background-color: #fff;
      box-shadow: 0px 24px 30px -18px rgba(0, 0, 0, 0.23);
      border-radius: 6px;
      transform-origin: left top;
    }
    .item {
      margin: 10px 0;
      background-color: #fff;
      padding-left: 4px;
      box-sizing: border-box;
      width: calc(100% + 10px);
    }
  `,Is([Object(r.g)()],Cs.prototype,"value",void 0),Is([Object(r.g)()],Cs.prototype,"label",void 0),Is([Object(r.g)()],Cs.prototype,"min",void 0),Is([Object(r.g)()],Cs.prototype,"max",void 0),Is([Object(r.g)()],Cs.prototype,"step",void 0),Is([Object(r.g)({type:Number})],Cs.prototype,"floatScaleRatio",void 0),Is([Object(r.g)({type:Object})],Cs.prototype,"rect",void 0),Is([Object(r.g)({type:Boolean})],Cs.prototype,"floatScale",void 0),Is([Object(r.h)(".float-scale")],Cs.prototype,"$container",void 0),Is([Object(r.h)(".item-box")],Cs.prototype,"$itemBox",void 0),Cs=Is([Object(r.c)("side-float-scale")],Cs);var Ts=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Es=class extends r.a{constructor(){super(...arguments),this.show=!1}_changeLayoutCustom(t,e){const{customItem:i}=s.settingStore.setting.layout,o=[...i];"row"===t?o[0]=e.detail.value:"col"===t&&(o[1]=e.detail.value),s.settingStore.changeSetting("layout","customItem",o)}_submitLayoutModal(){Os.changeLayoutModal(!1)}_renderDefaultCard(t){var e;if(t)return null===(e=t.children)||void 0===e?void 0:e.map(e=>{var i;const{key:o,type:n,label:a}=e,l=null!==(i=e.cardKey)&&void 0!==i?i:t.key;if(!o)return null;if("switch"===n)return r.e`
          <div class="rule-box">
            <span class="rule">${a}</span>
            <span class="rule-option">
              <i-switch
                @change="${t=>s.settingStore.changeSetting(l,o,t.detail.checked)}"
                ?checked=${s.settingStore.setting[l][o]}
              ></i-switch>
            </span>
          </div>
        `;if("slider"===n){const{min:t=1,max:i=10,step:n=1,percentage:c=!1}=e;return r.e`
          <div class="rule-box slider-type">
            <span class="rule">${a}</span>
            <span class="rule-option">
              <infinito-slider
                @on-change="${t=>s.settingStore.changeSetting(l,o,t.detail.value)}"
                .value=${s.settingStore.setting[l][o]}
                .min=${t}
                .max=${i}
                .step=${n}
                .translator=${c?t=>Math.round(100*t)+"%":null}
              ></infinito-slider>
            </span>
          </div>
        `}return null})}render(){if(!this.show)return null;const{customItem:t}=s.settingStore.setting.layout;return r.e`
      <infinito-modal style="--modal-padding:0;" .onCancel="${this._submitLayoutModal}" .open=${this.show}>
        <div class="layout-body" slot="body">
          <div class="layout-title">${Object(Q.i18n)("custom_layout")}</div>
          <div class="scroll-body global-scrollbar">
            <div class="rule-box slider-type">
              <span class="rule">${Object(Q.i18n)("col_num")}</span>
              <span class="rule-option">
                <infinito-slider
                  @on-change="${t=>this._changeLayoutCustom("row",t)}"
                  .value=${t[0]}
                  .min=${1}
                  .max=${8}
                ></infinito-slider>
              </span>
            </div>
            <div class="rule-box slider-type">
              <span class="rule">${Object(Q.i18n)("row_num")}</span>
              <span class="rule-option">
                <infinito-slider
                  @on-change="${t=>this._changeLayoutCustom("col",t)}"
                  .value=${t[1]}
                  .min=${1}
                  .max=${8}
                ></infinito-slider>
              </span>
            </div>
            ${this._renderDefaultCard(this.card)}
          </div>
        </div>
      </infinito-modal>
    `}};Es.styles=[S.a,r.b`
      .layout-title {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .layout-body {
        box-sizing: border-box;
        width: 360px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .layout-btns {
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .rule-box {
        width: 290px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-top: 0;
      }

      .rule-box.slider-type {
        flex-direction: column;
        .rule-option {
          margin: 10px 0 0;
          padding-left: 4px;
        }
      }
      .btn {
        position: relative;
        display: block;
        outline: 0;
        border: 0;
        width: 122px;
        height: 42px;
        background: rgba(239, 239, 239, 1);
        border-radius: 6px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        cursor: pointer;
      }
      .btn:hover {
        background: rgba(222, 222, 222, 1);
      }
      .submit-btn {
        margin: 50px auto 0;
        width: 280px;
        max-width: 100%;
        height: 52px;
        background: rgba(51, 51, 51, 1);
        color: #fff;
        font-size: 16px;
      }
      .submit-btn:hover {
        background: rgba(51, 51, 51, 0.9);
      }
      .scroll-body {
        max-height: calc(100vh - 200px);
        min-height: 100px;
      }
    `],Ts([Object(r.g)({type:Boolean})],Es.prototype,"show",void 0),Ts([Object(r.g)({type:Object})],Es.prototype,"card",void 0),Es=Ts([Object(r.c)("side-layout-modal")],Es);var Ls=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ps=class extends a.a{constructor(){super(...arguments),this.floatScaleShow=!1,this.hidden=!1,this.floatScaleRatio=1,this.floatScaleRect={left:null,top:null,width:null,height:null},this._languageList={"zh-CN":"中文简体",cs:"čeština",da:"dansk",de:"Deutsche",el:"Ελληνικά",en:"English","en-US":"English (United States)","en-GB":"English (United Kingdom)",es:"Español","es-419":"Español (América Latina y el Caribe)",fi:"Suomalainen",fr:"français",hu:"Magyar",it:"italiano",ja:"日本語",ko:"한국어",ms:"Orang Malaysia",no:"norsk",nl:"Nederlands",pl:"Polskie","pt-BR":"Portugues (brasil)","pt-PT":"Portugues (portugal)",ro:"Română",ru:"русский язык",sk:"Slovák",sv:"svenska",th:"ไทย",tr:"Türk",uk:"Український",vi:"Tiếng Việt","zh-TW":"中文繁體",hi:"हिंदी",id:"bahasa Indonesia"}}updated(t){this.hidden&&s.settingStore.sendSettingValue(),super.updated(t)}closeModal(){Os.changeLayoutModal(!1)}_renderDefaultCard(t){var e;const{key:i}=t;return null===(e=t.children)||void 0===e?void 0:e.map((e,o)=>{const{key:n,type:a,label:l}=e;if(!n)return null;if("search"===i&&s.settingStore.setting.search.hide&&0!==o)return null;if("icon"===i&&s.settingStore.setting.icon.miniMode&&0!==o)return null;if("switch"===a)return r.e`
          <div class="rule-box">
            <span class="rule">${l}</span>
            <span class="rule-option">
              <i-switch
                @change="${e=>{"isShowHomepageBtn"===n?s.settingStore.changeSetting(t.key,n,!e.detail.checked):s.settingStore.changeSetting(t.key,n,e.detail.checked)}}"
                ?checked=${"isShowHomepageBtn"===n?!s.settingStore.setting[t.key][n]:s.settingStore.setting[t.key][n]}
              ></i-switch>
            </span>
          </div>
        `;if("slider"===a){const{min:i=1,max:o=10,step:a=1,percentage:c=!1}=e;return"scaleSide"===n?r.e`
            <div class="rule-box slider-type scale-side">
              <span class="rule">${l}</span>
              <span class="rule-option">
                <infinito-slider
                  @on-start="${t=>{this.floatScaleShow=!0,this.floatScaleRatio=s.settingStore.setting.view.scaleSide,this.floatScaleRect=t.target.parentElement.parentElement.getBoundingClientRect()}}"
                  @on-end="${t=>{this.floatScaleShow=!1,this.floatScaleRatio=s.settingStore.setting.view.scaleSide,this.floatScaleRect=t.target.parentElement.parentElement.getBoundingClientRect()}}"
                  @on-change="${e=>s.settingStore.changeSetting(t.key,n,e.detail.value)}"
                  .value=${s.settingStore.setting[t.key][n]}
                  .min=${i}
                  .max=${o}
                  .step=${a}
                  .translator=${c?t=>Math.round(100*t)+"%":null}
                ></infinito-slider>
              </span>
              <infinito-portal-entrance destination="side-float-scale">
                <side-float-scale
                  .label="${l}"
                  .floatScale=${this.floatScaleShow}
                  .floatScaleRatio=${this.floatScaleRatio}
                  .value=${s.settingStore.setting[t.key][n]}
                  .min=${i}
                  .max=${o}
                  .step=${a}
                  .rect=${this.floatScaleRect}
                ></side-float-scale>
              </infinito-portal-entrance>
            </div>
          `:r.e`
          <div class="rule-box slider-type">
            <span class="rule">${l}</span>
            <span class="rule-option">
              <infinito-slider
                @on-change="${e=>s.settingStore.changeSetting(t.key,n,e.detail.value)}"
                .value=${s.settingStore.setting[t.key][n]}
                .min=${i}
                .max=${o}
                .step=${a}
                .translator=${c?t=>Math.round(100*t)+"%":null}
              ></infinito-slider>
            </span>
          </div>
        `}return null})}_choosLayout(t){document.querySelector("newtab-main").toPage(0),Os.chooseLayout(t)}_openLayoutModal(){Os.changeLayoutModal(!0)}_renderCustomLayoutCard(t,e){const i=[];for(;t;){let o=!(--t%2);[...Array(e)].forEach(()=>{o=!o,i.push(o)})}return i.map(t=>r.e`<div
          class="${Object(G.a)({"item-card-holder":!0,hard:t})}"
        ></div> `)}_renderCustomLayout(t){const{list:e,activeIndex:i,modal:o}=Os.layout;return r.e` <div class="layout-custom">
      ${e.map((n,a)=>{const l=n[0],c=n[1];return a===e.length-1?r.e`
            <div @click="${this._openLayoutModal}" class="item ${a===i?"active":""}">
              <div class="item-card item-card-custom">
                <i-svg src="${Object(ot.a)("setting/edit.svg",!1)}"></i-svg>
              </div>
              ${s.settingStore.setting.layout.custom?r.e`<div class="item-text">${Object(Q.i18n)("custom")}(${l}x${c})</div>`:r.e`<div class="item-text">${Object(Q.i18n)("custom")}</div>`}
            </div>
            <side-layout-modal .card="${t}" ?show="${o}"></side-layout-modal>
          `:r.e`
          <div @click="${()=>this._choosLayout(a)}" class="item ${a===i?"active":""}">
            <div
              style="grid-template-columns: repeat(${c}, 1fr);grid-template-rows: repeat(${l}, 1fr);"
              class="item-card"
            >
              ${this._renderCustomLayoutCard(l,c)}
            </div>
            <div class="item-text">${l}x${c}</div>
          </div>
        `})}
    </div>`}_choosAnimation(t){Os.chooseAnimation(t)}_renderAnimation(){const{animationIndex:t,animationList:e}=Os;return r.e` <div class="animation-card">
      ${e.map((e,i)=>r.e`
          <div @click="${()=>this._choosAnimation(i)}" class="animation-item">
            <div class="item-card">
              <img class="animateimg" src="${i===t?e.iconActive:e.icon}" alt="" />
            </div>
            <div class="item-text">${e.label}</div>
          </div>
        `)}
    </div>`}_pickColor(t){const{value:e}=t.detail;Os.chooseFontClolor(e)}_renderFontColor(){const{fontColors:t}=Os,{color:e}=s.settingStore.setting.font,i=s.settingStore.sideRatio>.7?0:300*(s.settingStore.sideRatio-.7);return r.e`
      <div class="rule-box colors">
        <span class="rule">${Object(Q.i18n)("font_color")}</span>
        <i-colorpicker
          side
          class="rule-option"
          .colors=${t}
          .value="${e}"
          .offsetRight="${i}"
          @on-change="${this._pickColor}"
        ></i-colorpicker>
      </div>
    `}async _switchLanguage(t){try{const e=t.target.value,i=await fetch(`${l.z}/_locales/${e.replace("-","_")}/messages.json?v=1630379499468`).then(t=>t.json());Object.keys(i).length>50&&(await Object(Q.setLangToLocal)(i),localStorage.setItem("langCode",e),localStorage.setItem("setLangCode","1"),Di.slave.sendMessage("tabs-reload"),location.reload())}catch(t){Si.default.error(Object(Q.i18n)("network_error"))}}_renderLanguageCard(){const{_languageList:t}=this,e=l.B.lang;return r.e`
      <div class="language-card">
        <div class="language-items">
          <div class="language-item language-select-wrap">
            <span class="label">${Object(Q.i18n)("language_select")}</span>
            <select class="language-select" @change=${this._switchLanguage}>
              ${Object.keys(t).map(i=>r.e` <option value=${i} ?selected=${e===i}>${t[i]}</option> `)}
            </select>
          </div>
        </div>
      </div>
    `}_renderCard(t){if(!t.custom)return this._renderDefaultCard(t);switch(t.key){case"layout":return r.e`${this._renderCustomLayout(t)}`;case"animation":return this._renderAnimation();case"font":return r.e` ${this._renderDefaultCard(t)} ${this._renderFontColor()} `;case"language":return this._renderLanguageCard();default:return this._renderDefaultCard(t)}}resetModal(){V.IConfirm.create().toShow({text:Object(Q.i18n)("request_reset_all_settings"),title:Object(Q.i18n)("hint"),onConfirm:()=>{j.a.sendEvent({settingAction:"reset"}),s.settingStore.reset()}})}render(){return r.e`
      <div
        class="global-scrollbar"
        style="
        height:100%;
      box-sizing: border-box;
      padding: 30px;
      padding-right:0;
      "
      >
        ${Os.viewData.map(t=>r.e`
            <infinito-card cTitle="${t.title}">
              ${t.tip&&r.e` <span class="tips">${Object(Q.i18n)("only_used_infinity")}</span>`} ${this._renderCard(t)}
            </infinito-card>
          `)}
        <infinito-card cTitle="${Object(Q.i18n)("reset_setting")}">
          <span style="margin-top:12px;" class="tips">${Object(Q.i18n)("set_setting_default")}</span>
          <infinito-button
            class="btn reset-btn"
            @click="${this.resetModal}"
            .scaleRatio=${s.settingStore.sideScaleRatio}
            style="--border-color: #efefef;"
            >${Object(Q.i18n)("restore_setting")}</infinito-button
          >
        </infinito-card>
      </div>
    `}};Ps.styles=[S.a,Ss],Ls([Object(r.f)()],Ps.prototype,"floatScaleShow",void 0),Ls([Object(r.g)({type:Boolean,reflect:!0})],Ps.prototype,"hidden",void 0),Ls([Object(r.f)()],Ps.prototype,"floatScaleRatio",void 0),Ls([Object(r.f)()],Ps.prototype,"floatScaleRect",void 0),Ps=Ls([Object(r.c)("side-setting")],Ps);var Rs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ds=class extends a.a{constructor(){super(...arguments),this.tabsActive=0,this.tabs=[{text:Object(Q.i18n)("add"),icon:"icon-tianjia",borderBottom:!1},{text:Object(Q.i18n)("me"),icon:"icon-wode2x",borderBottom:!0},{text:Object(Q.i18n)("settings"),icon:"icon-shezhi2x",borderBottom:!0}]}firstUpdated(){this.addEventListener("open-setting",()=>{this.activeThis(2)})}updated(){var t;0===this.tabsActive&&(this._setIconsActiveStyle(),null===(t=this.$sideIcons)||void 0===t||t.clearSearch(),this.$sideIcons.focusSearch(),this.$sideIcons.setActiveType(0)),M.setAddIconActiveStatus(0===this.tabsActive)}_setIconsActiveStyle(){setTimeout(()=>{this.$sideIcons.setActiveStyle()},0)}beforeShow(){var t;s.pluginStore.pluginViews.includes("infinity://settings")&&(this.tabsActive=2),s.pluginStore.pluginViews.includes("profile")&&s.pluginStore.focusRepair&&(this.tabsActive=1),0===this.tabsActive&&(this._setIconsActiveStyle(),null===(t=this.$sideIcons)||void 0===t||t.clearSearch())}afterShow(){0===this.tabsActive?this.$sideIcons.focusSearch():1===this.tabsActive&&s.pluginStore.focusRepair&&this.$sideUser.showRepairAnimation()}afterHide(){switch(this.tabsActive){case 0:this.$sideIcons.setActiveType(0);break;case 1:this.$sideUser.closeRepairModal();break;case 2:this.$sideSetting.closeModal(),s.settingStore.sendSettingValue()}}activeThis(t){this.tabsActive=t,1===this.tabsActive&&this.$sideUser.closeRepairModal()}render(){return r.e`
      <i-side2-header .borderBottom="${this.tabs[this.tabsActive].borderBottom}">
        <nav slot="content" class="side-header">
          ${this.tabs.map((t,e)=>r.e`
              <div @click="${()=>this.activeThis(e)}" class="item ${this.tabsActive===e?"active":""}">
                <i-usesvg style="width:24px;height:24px" iconfont type="${t.icon}"></i-usesvg>
                <span>${t.text}</span>
              </div>
            `)}
        </nav>
      </i-side2-header>
      <div class="side-content">
        <side-icons .hidden="${0!==this.tabsActive}"></side-icons>
        <side-user .hidden="${1!==this.tabsActive}"></side-user>
        <side-setting .hidden="${2!==this.tabsActive}"></side-setting>
      </div>
    `}};Ds.styles=r.b`
    :host {
      display: block;
      height: 100%;
    }
    [hidden] {
      display: none !important;
    }
    .side-header {
      display: flex;
      justify-content: space-between;
      padding: 21px 58px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
    .item {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 17px;
      opacity: 0.4;
      cursor: pointer;
      transition-property: opacity;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      backface-visibility: hidden;
    }
    .item.active {
      opacity: 1;
    }
    .side-content {
      height: calc(100% - var(--side-header-height));
      overflow: hidden;
      background-color: rgb(245, 245, 245);
      backface-visibility: hidden;
      transform: translateZ(0);
    }
  `,Rs([Object(r.g)({type:Number})],Ds.prototype,"tabsActive",void 0),Rs([Object(r.h)("side-setting")],Ds.prototype,"$sideSetting",void 0),Rs([Object(r.h)("side-icons")],Ds.prototype,"$sideIcons",void 0),Rs([Object(r.h)("side-user")],Ds.prototype,"$sideUser",void 0),Ds=Rs([Object(r.c)("side-profile")],Ds);var As=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ms=class extends a.a{constructor(){super(...arguments),this.initIEditicon=()=>{var t;null===(t=this.$editicon)||void 0===t||t.initCanvas()}}afterHide(){s.siteStore.clearEditSite()}beforeShow(){this.initIEditicon()}afterShow(){this.initIEditicon()}_close(){const t=new CustomEvent("on-close",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_onSubmit(t){s.siteStore.submitSite(t.detail.value),requestAnimationFrame(()=>{setTimeout(()=>{this._close()},0)})}render(){let t=null;if(s.siteStore.editingId){const e=s.siteStore.findIcon(s.siteStore.currentPageIndex,s.siteStore.editingId);t=Object.assign(Object.assign({},Xn.a.defaultValue),e)}return r.e`
      <i-side2-header .title="${i18n("edit_icon")}"></i-side2-header>
      <div class="side-editicon global-scrollbar">
        <div class="scroll-container-body">
          ${s.siteStore.editingId?r.e`
                <i-editicon
                  .isEdit="${!0}"
                  .sideRatio="${s.settingStore.sideRatio}"
                  .value="${t}"
                  .readonlyTarget="${"app"===t.type}"
                  @on-cancel="${this._close}"
                  @on-submit="${this._onSubmit}"
                  iconType="custom-icon"
                ></i-editicon>
              `:null}
        </div>
      </div>
    `}};Ms.styles=[S.a,r.b`
      :host {
        display: block;
        height: 100%;
      }
      .side-editicon {
        height: calc(100% - var(--side-header-height));
        padding: 24px 0;
        box-sizing: border-box;
        background-color: #f6f6f6;
        overflow-y: auto;
      }
      .scroll-container-body {
        width: 360px;
        box-sizing: content-box;
        padding-left: 30px;
      }
    `],As([Object(r.h)("i-editicon")],Ms.prototype,"$editicon",void 0),As([Object(r.h)(".global-scrollbar")],Ms.prototype,"$scrollBar",void 0),Ms=As([Object(r.c)("side-editicon")],Ms);var Ns=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const zs=[{name:"facebook",src:"icon_facebook"},{name:"google",src:"icon_google"},{name:"qq",src:"icon_qq"},{name:"wechat",src:"icon_wechat"},{name:"sina",src:"icon_sina"}].map(t=>Object.assign(Object.assign({},t),{src:i(551)(`./${t.src}.png`)}));let Bs=class extends a.a{constructor(){super(...arguments),this.store=s.userStore,this.emailError="",this.passwordError="",this.loading=!1,this.handleCancel=()=>{this.store.toggleReLogin()}}render(){return r.e`
      <infinito-modal style="--modal-padding: 0;" .open=${this.store.isExpired} .onCancel=${this.handleCancel}>
        <div class="login-wrapper" slot="body">
          <div
            class="bg"
            style=${Object(Fi.a)({background:`url(${Object(ot.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg2.png")})`,backgroundSize:"cover"})}
          ></div>
          <div class="form">
            <div>
              <h2 class="large-title">${Object(Q.i18n)("please_re_login")}</h2>
              <p>${Object(Q.i18n)("account_expired")}</p>
            </div>
            <div class="form-control">
              <infinito-input
                name="email"
                placeholder=${Object(Q.i18n)("email")}
                .error=${this.emailError}
                @onfocus=${()=>{this.emailError=""}}
              >
              </infinito-input>
              <infinito-input
                name="password"
                type="password"
                placeholder=${Object(Q.i18n)("password")}
                .error=${this.passwordError}
                @onfocus=${()=>{this.passwordError=""}}
                @keyup=${this.handleKeyUp}
              >
              </infinito-input>
              <infinito-button primary .loading=${this.loading} @click="${this.handleLogin}">
                ${Object(Q.i18n)("login")}
              </infinito-button>
            </div>
            <div class="no-account" style="justify-content: center;">
              <p @click="${this.toFindPassword}">${Object(Q.i18n)("forget_password")}</p>
            </div>
            <div class="third-party">
              <span>${Object(Q.i18n)("thirt_party")}</span>
              <div class="icons">
                ${zs.map(t=>r.e`
                      <p @click="${e=>this.onClick(e,t.name)}">
                        <img .src="${t.src}" />
                      </p>
                    `)}
              </div>
            </div>
          </div>
        </div>
      </infinito-modal>
    `}toFindPassword(t){t.preventDefault();let e="/find-password/index.html";l.l&&(e=window.chrome.runtime.getURL(e)),c.a.openUrl(e,!0,t)}toRegister(t){t.preventDefault();let e="/user-register/index.html";l.l&&(e=window.chrome.runtime.getURL(e)),c.a.openUrl(e,!0,t)}handleKeyUp(t){13===t.keyCode&&(t.preventDefault(),this.handleLogin(t))}onClick(t,e){t.preventDefault(),this.store.thirdPartyLogin(e)}async handleLogin(t){if(t.stopPropagation(),this.loading)return;const e=this.emailInput.value,i=this.passwordInput.value;if(this.emailError=this.checkEmail(e),!this.emailError)if(i){try{this.loading=!0,await this.store.login({email:e,password:i}),setTimeout(()=>{this.emailInput.value="",this.passwordInput.value=""},1e3)}catch(t){"3006"===t.message&&setTimeout(()=>{this.passwordInput.value="",this.passwordInput.shadowRoot.querySelector("input").focus()},500)}this.loading=!1}else this.passwordError=Object(Q.i18n)("password_dont_empty")}checkEmail(t){return t?/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)?void 0:Object(Q.i18n)("email_format_error"):Object(Q.i18n)("cannot_empty")}};Bs.styles=Ia,Ns([Object(r.h)('infinito-input[name="email"]')],Bs.prototype,"emailInput",void 0),Ns([Object(r.h)('infinito-input[name="password"]')],Bs.prototype,"passwordInput",void 0),Ns([Object(r.g)({type:String})],Bs.prototype,"emailError",void 0),Ns([Object(r.g)({type:String})],Bs.prototype,"passwordError",void 0),Ns([Object(r.g)({type:Boolean})],Bs.prototype,"loading",void 0),Bs=Ns([Object(r.c)("user-relogin")],Bs);var Us=r.b`ul {
  margin: 0;
  padding: 0;
}
.container {
  width: 564px;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  line-height: 22px;
}
.header {
  text-align: center;
  height: 30px;
  font-size: 22px;
  line-height: 30px;
}
.main {
  margin: 26px auto;
  max-height: 400px;
}
.main.collect {
  min-height: 180px;
  max-height: 380px;
  height: calc(100vh - 343px);
}
.main.userdata {
  min-height: 180px;
  max-height: 480px;
  height: calc(100vh - 246px);
}
.tips {
  margin: 28px 0;
  font-weight: 500;
  font-size: 16px;
}
.item {
  margin-top: 10px;
  margin-left: 1em;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.item:before {
  content: '•';
  color: #333;
  display: inline-block;
  margin-right: 0.3em;
}
.link {
  color: #5ddb64;
  text-decoration: underline;
}
.footer {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.btn {
  margin-right: 20px;
  width: 130px;
  height: 44px;
  background: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.switch {
  margin-right: 14px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.btn:last-of-type {
  margin-right: 0;
}
.checkcard {
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  width: 484px;
  min-height: 64px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.checkcard.active {
  border: 1px solid #000000;
  color: #000000;
}
.uninstalltext {
  margin-bottom: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  line-height: 22px;
}
.items {
  margin-left: 2em;
  list-style: initial;
}
.items li {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 15px;
}
p {
  margin-top: 20px;
  font-weight: 400;
  font-size: 15px;
}
.category-title {
  font-weight: 500;
}
`,Fs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ws=class extends a.a{agree(){s.privacyStore.agreeUserData()}refuse(){s.privacyStore.refuseUserData()}render(){return r.e`<infinito-modal .closeable="${!1}" .open=${!0}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n("privacy_and_data_20_8_18")}</div>
          <div class="global-scrollbar main userdata">
            <p class="category-title">${i18n("privacy_data_title_1")}</p>
            <ul class="items">
              <li>${i18n("privacy_data_item_1_1")}</li>
              <li>${i18n("privacy_data_item_1_2")}</li>
            </ul>
            <p class="category-title">${i18n("privacy_data_title_2")}</p>
            <ul class="items">
              <li>${i18n("privacy_data_item_2_1")}</li>
              <li>${i18n("privacy_data_item_2_2")}</li>
              <li>${i18n("privacy_data_item_2_3")}</li>
              <li>${i18n("privacy_data_item_2_4")}</li>
              <li>${i18n("privacy_data_item_2_5")}</li>
              <li>${i18n("privacy_data_item_2_6")}</li>
              <li>${i18n("privacy_data_item_2_7")}</li>
              <li>${i18n("privacy_data_item_2_8")}</li>
            </ul>
            <p class="category-title">${i18n("privacy_data_title_3")}</p>
            <ul class="items">
              <li>${i18n("privacy_data_item_3_1")}</li>
            </ul>
            <p class="category-title">${i18n("privacy_data_title_5")}</p>
            <ul class="items">
              <li>${i18n("privacy_data_item_5_1")}</li>
            </ul>
            <p class="tips">
              ${Object(nt.a)(i18n("privacy_data_item_9",`<a style="color: #5ddb64;text-decoration: underline;" target="_blank" href="${c.a.getPrivacyUrl()}"> ${i18n("privacy_title")} </a>`))}
            </p>
          </div>
          <div class="footer">
            <infinito-button class="btn" @click="${this.agree}">${i18n("uninstall_agree")}</infinito-button>
            <infinito-button class="btn" @click="${this.refuse}">${i18n("privacy_disagree")}</infinito-button>
          </div>
        </div>
      </div>
    </infinito-modal> `}};Ws.styles=[S.a,Us],Ws=Fs([Object(r.c)("modal-userdata")],Ws);var Hs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let qs=class extends a.a{constructor(){super(...arguments),this.checked=!1}submit(){this.checked?s.privacyStore.agreeCollectData():s.privacyStore.refuseCollectData()}check(){this.checked=!this.checked}render(){return r.e`<infinito-modal .closeable="${!1}" .open=${!0}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n("privacy_and_data_20_8_18")}</div>
          <div class="main collect global-scrollbar">
            <p class="category-title">${i18n("privacy_data_title_4")}</p>
            <ul class="items">
              <li>${i18n("privacy_data_item_4_1")}</li>
              <li>${i18n("privacy_data_item_4_2")}</li>
              <li>${i18n("privacy_data_item_4_3")}</li>
              <li>${i18n("privacy_data_item_2_8")}</li>
              <li>${i18n("privacy_data_item_4_8")}</li>
              <li>${i18n("privacy_data_item_4_9")}</li>
              <li>${i18n("privacy_data_item_4_10")}</li>
              <li>${i18n("privacy_data_item_4_11")}</li>
              <li>${i18n("privacy_data_item_4_13")}</li>
              <li>${i18n("privacy_data_item_4_5")}</li>
              <li>${i18n("privacy_data_item_4_6")}</li>
              <li>${i18n("privacy_data_item_4_7")}</li>
            </ul>
          </div>
          <div
            class="${Object(G.a)({checkcard:!0,active:this.checked})}"
          >
            <div class="switch">
              <infinito-switch .checked=${this.checked} @change=${this.check}></infinito-switch>
            </div>
            <p class="checktext">${this.checked?i18n("privacy_data_yes"):i18n("privacy_data_no")}</p>
          </div>
          <div class="footer">
            <infinito-button class="btn" @click="${this.submit}">${i18n("done")}</infinito-button>
          </div>
        </div>
      </div>
    </infinito-modal>`}};qs.styles=[S.a,Us],Hs([Object(r.f)()],qs.prototype,"checked",void 0),qs=Hs([Object(r.c)("modal-collectdata")],qs);var Vs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ys=class extends a.a{agree(){chrome.management.uninstallSelf()}refuse(){s.privacyStore.resetUserData()}render(){return r.e`<infinito-modal .closeable="${!1}" .open=${!0}>
      <div slot="body">
        <div class="container">
          <div class="header">${i18n(Vr.h)}</div>
          <div class="main">
            <p class="uninstalltext">${i18n(Vr.g)}</p>
          </div>
          <div class="footer">
            <infinito-button class="btn" @click="${this.agree}">${i18n("confirm")}</infinito-button>
            <infinito-button class="btn" @click="${this.refuse}">${i18n("cancel")}</infinito-button>
          </div>
        </div>
      </div>
    </infinito-modal> `}};Ys.styles=Us,Ys=Vs([Object(r.c)("modal-uninstall")],Ys);var Xs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Gs=class extends a.a{firstUpdated(){}render(){if(!l.n)return;const{userDate:t,collectData:e}=s.privacyStore;return 0===t?r.e`<modal-userdata></modal-userdata>`:1===t&&0===e?r.e`<modal-collectdata></modal-collectdata>`:-1===t?r.e`<modal-uninstall></modal-uninstall>`:void 0}};Gs.styles=Us,Gs=Xs([Object(r.c)("modal-privacy")],Gs);var Ks=r.b`.modal-wallpaper {
  width: 700px;
  height: 520px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-sizing: border-box;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}
.modal-wallpaper .modal-wallpaper-header {
  display: flex;
  border-bottom: 1px solid #eee;
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 60px;
}
.modal-wallpaper .modal-wallpaper-header > .title {
  font-size: 18px;
  color: #999;
  padding-bottom: 24px;
  cursor: pointer;
}
.modal-wallpaper .modal-wallpaper-header > .title:nth-child(n + 2)::before {
  content: '';
  display: inline-block;
  width: 16px;
}
.modal-wallpaper .modal-wallpaper-header > .title.active {
  color: #333;
}
.modal-wallpaper .modal-wallpaper-header .mw-header-bar {
  position: absolute;
  bottom: 0;
  width: 24px;
  height: 3px;
  background-color: #333;
  left: 0;
  transition: left 150ms ease 0s;
  display: none;
}
.modal-wallpaper .modal-wallpaper-header .mw-header-bar.active {
  display: block;
}
.modal-wallpaper .modal-wallpaper-content {
  flex: 1;
  height: 0;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.modal-wallpaper .modal-wallpaper-content .content-cloud-wallpaper,
.modal-wallpaper .modal-wallpaper-content .content-auto-wallpaper {
  display: block;
  width: 100%;
  height: 100%;
}
`,Qs=i(469),Js=i(479),Zs=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let tl=class extends a.a{constructor(){super(...arguments),this._collectWallpaper=async({detail:t})=>{if(!t)return;if(!s.userStore.isLogin)return void Si.default.popupLogin();const e=Qs.a.cloudCollection.includes(t);e?Qs.a.removeCollectionP(t):Qs.a.addCollectionP(t);if(!Qs.a.isLocal(t)){const i=await Object(Oi.collectionWallpaper)(t,Number(!e));i.error&&console.warn(i.error)}}}_openCustomColorPopup(){this.openCustomColorPopup()}async _removeCustomColor(t,e){t.stopPropagation();try{if(s.userStore.isLogin){const{error:t}=await Object(Oi.removeCustomColor)(e);if(t)throw t}Qs.a.removeCustomColor(e),Si.default.success(i18n("wallpaper_delete_color_success"))}catch(t){console.warn(t)}finally{Js.a.hideItemExtraOpts()}}_showItemExtraOpts(t,e){t.stopPropagation(),Js.a.showItemExtraOpts(e)}_applyColorP({target:t}){const{wp:e}=t.dataset;if(!e)return;const i=JSON.parse(e);Qs.a.setColor(i)}render(){return r.e`
      <section class="${"solid-color-items"}" style=${this.show?"":"display: none;"}>
        <!-- custom color items -->
        <div class="custom-color-items">
          <strong class="color-items-title">${i18n("wallpaper_custom_color")}</strong>

          <div class="color-items-wrap" @click=${this._applyColorP}>
            <div class="custom-color-item-wrap custom-color-button" @click=${this._openCustomColorPopup}>
              <i-usesvg class="color-button-icon" iconfont type="icon-zidingyiyanse"></i-usesvg>
              <span class="color-button-text">${i18n("wallpaper_custom_color")}</span>
            </div>

            ${Qs.a.customColorItems.map(t=>r.e`
                <div class="custom-color-item-wrap" @mouseleave=${()=>Js.a.hideItemExtraOpts()}>
                  <wp-item-raw
                    class="custom-color-item"
                    .type=${t.type}
                    .content=${t.content}
                    data-wp=${JSON.stringify(t)}
                  >
                  </wp-item-raw>
                  <div
                    class="popup-options-bar${Js.a.itemExtraOptsState===t.id?" active":""}"
                    @click=${e=>this._showItemExtraOpts(e,t.id)}
                    style=${Qs.a.id===t.id?"display: none;":""}
                  >
                    <div class="popup-options-icon-wrap">
                      <i-usesvg class="popup-options-icon" color="#fff" iconfont type="icon-xingzhuangjiehe"></i-usesvg>
                    </div>
                    <ul class="popup-options">
                      <li class="popup-option-item" @click=${e=>this._removeCustomColor(e,t.id)}>
                        ${i18n("wallpaper_delete_color")}
                      </li>
                    </ul>
                  </div>
                </div>
              `)}
          </div>
        </div>

        <!-- common color list -->
        <div class="common-color-items">
          <strong class="color-items-title">${i18n("wallpaper_common_color")}</strong>
          <div class="color-items-wrap" @click=${this._applyColorP}>
            ${Js.a.commonColorItems.map(t=>r.e`
                  <wp-item-raw
                    class="common-color-item"
                    .type=${t.type}
                    .content=${t.content}
                    data-wp=${JSON.stringify(t)}
                  ></wp-item-raw>
                `)}
          </div>
        </div>
      </section>
    `}};tl.styles=r.b`
    .solid-color-items {
      width: 100%;
    }

    .solid-color-items .color-items-title {
      font-size: 12px;
      color: #333;
      margin: 0;
    }

    .solid-color-items .color-items-wrap {
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      margin-top: 16px;
    }
    .solid-color-items .custom-color-items .custom-color-item-wrap {
      width: 203px;
      height: 114px;
      cursor: pointer;
      margin-bottom: 20px;
      position: relative;
      margin-right: 16px;
    }
    .solid-color-items .custom-color-items .custom-color-item-wrap:nth-child(3n) {
      margin-right: 0;
    }

    .solid-color-items .custom-color-items .custom-color-item {
      width: 100%;
      height: 100%;
    }

    .solid-color-items .custom-color-items .popup-options-bar {
      --side-length: 32px;

      position: absolute;
      top: 8px;
      right: 8px;
      width: var(--side-length);
      height: var(--side-length);

      opacity: 0;
      pointer-events: none;
      transition: opacity 200ms ease 0s;
    }

    .solid-color-items .custom-color-item-wrap:hover .popup-options-bar {
      opacity: 1;
      pointer-events: initial;
    }

    @media only screen and (hover: none) {
      .solid-color-items .custom-color-item-wrap .popup-options-bar {
        opacity: 1;
        pointer-events: initial;
      }
    }

    .solid-color-items .custom-color-items .popup-options-bar:not(.active) .popup-options {
      display: none;
    }

    .solid-color-items .custom-color-items .popup-options-bar .popup-options-icon-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 150ms ease-in 0s;
      cursor: pointer;
      border-radius: 4px;
    }
    .solid-color-items .custom-color-items .popup-options-bar .popup-options-icon-wrap:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }

    .solid-color-items .custom-color-items .popup-options-bar .popup-options {
      position: absolute;
      top: var(--side-length);
      right: 0;
      list-style: none;

      box-sizing: border-box;
      padding: 5px 0;
      margin: 0;
      background-color: #fff;
      border-radius: 2px;
      font-size: 12px;
      color: #333;
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
      max-width: 212px;
    }

    .solid-color-items .custom-color-items .popup-options-bar .popup-options .popup-option-item {
      width: 100%;
      box-sizing: border-box;
      padding: 0 24px;
      line-height: 27px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .solid-color-items .custom-color-items .popup-options-bar .popup-options .popup-option-item:hover {
      background-color: #f5f5f5;
    }

    .solid-color-items .custom-color-items .custom-color-button {
      box-sizing: border-box;
      border: 1px dashed #dadada;
      text-align: center;
      cursor: pointer;
    }

    .solid-color-items .custom-color-items .color-button-icon {
      margin-top: 28px;
      width: 100%;
      height: 28px;
    }
    .solid-color-items .custom-color-items .color-button-text {
      display: inline-block;
      margin-top: 14px;
    }

    .solid-color-items .common-color-items .color-items-title {
      display: inline-block;
    }

    .solid-color-items .common-color-items .common-color-item {
      width: 203px;
      height: 114px;
      cursor: pointer;
      margin-bottom: 20px;
      margin-right: 15px;
    }
    .solid-color-items .common-color-items .common-color-item:nth-child(3n) {
      margin-right: 0;
    }
  `,Zs([Object(r.g)({type:Boolean})],tl.prototype,"show",void 0),Zs([Object(r.g)({type:Object})],tl.prototype,"openCustomColorPopup",void 0),tl=Zs([Object(r.c)("solid-color-items")],tl);var el=r.b`.cloud-wallpaper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 24px;
  display: flex;
  flex-flow: column nowrap;
}
.cloud-wallpaper ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cloud-wallpaper .cloud-wallpaper-header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 17px 30px 20px;
}
.cloud-wallpaper .cloud-wallpaper-header .header-filter-list {
  flex: 1;
  width: 0;
  max-width: 75%;
  overflow-x: auto;
}
.cloud-wallpaper .cloud-wallpaper-header .filter-list-wrap {
  display: flex;
}
.cloud-wallpaper .cloud-wallpaper-header .filter-list-wrap .filter-item {
  height: 26px;
  margin-right: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  color: #454545;
  line-height: 26px;
  padding: 0 8px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  transition: color 200ms ease-in 0s, background-color 200ms ease-in 0s;
}
.cloud-wallpaper .cloud-wallpaper-header .filter-list-wrap .filter-item.active {
  color: #fff;
  background-color: #656565;
}
.cloud-wallpaper .cloud-wallpaper-header .filter-list-wrap .filter-item:last-child {
  margin-right: 0;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort {
  position: relative;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .wallpaper-sort-wrap {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .wallpaper-sort-icon {
  width: 14px;
  height: 14px;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .wallpaper-sort-text {
  color: #333;
  font-size: 14px;
  margin-left: 3px;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .sort-options-popup {
  position: absolute;
  top: 26px;
  right: 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.16);
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1;
  color: #656565;
  font-size: 12px;
  display: none;
  box-sizing: border-box;
  padding: 6px 0;
  text-align: left;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .sort-options-popup .sort-option-item {
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  line-height: 30px;
  transition: all 200ms ease-in 0s;
  transition-property: color, background-color;
  white-space: nowrap;
  cursor: pointer;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .sort-options-popup .sort-option-item:hover {
  background-color: #f5f5f5;
  color: #333;
}
.cloud-wallpaper .cloud-wallpaper-header .header-wallpaper-sort .sort-options-popup.active {
  display: initial;
}
.cloud-wallpaper .cloud-wallpaper-body {
  flex: 1;
  height: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  overflow: hidden;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-right: 15px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-header .color-filter-title {
  color: #333;
  font-size: 12px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-header .clear-filter-text {
  font-size: 9px;
  color: #b3b3b3;
  cursor: pointer;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-items {
  margin-top: 10px;
  display: flex;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-items .color-filter-item:last-child {
  margin-right: 0;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-items .color-filter-item {
  margin-right: 8px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .color-filter .color-filter-items .color-filter-item.active::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  padding-top: 6px;
  padding-left: 10px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translate(-50%, -70%) rotate(-45deg);
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter {
  margin-top: 20px;
  flex: 1;
  height: 0;
  display: flex;
  flex-flow: column nowrap;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-header .tag-filter-title {
  color: #333;
  font-size: 12px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-header .clear-filter-text {
  font-size: 9px;
  color: #b3b3b3;
  cursor: pointer;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-items {
  flex: 1;
  height: 0;
  margin-top: 10px;
  width: 203px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-items .tag-filter-item {
  padding: 5px 10px;
  background-color: #f5f5f5;
  color: #454545;
  flex-grow: 0;
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 12px;
  margin-right: 12px;
  transition: color 200ms ease-in 0s, background-color 200ms ease-in 0s;
  font-size: 12px;
  line-height: 1.5em;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-filter .tag-filter .tag-filter-items .tag-filter-item.active {
  color: #fff;
  background-color: #656565;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content {
  flex: 1;
  width: 0;
  height: 100%;
  position: relative;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-item {
  display: inline-block;
  width: 203px;
  height: 114px;
  margin-right: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-item .item-apply-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  display: none;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-item .item-apply-loading.loading {
  display: flex;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-item .item-apply-loading .apply-loading-icon {
  width: 80px;
  height: 40px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item:hover .item-extra-opts {
  opacity: 1;
  pointer-events: initial;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts {
  --side-length: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  width: var(--side-length);
  height: var(--side-length);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease 0s;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts .opts-icon-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms ease-in 0s;
  cursor: pointer;
  border-radius: 4px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts .opts-icon-wrap:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts:not(.active) .extra-options {
  display: none;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts .extra-options {
  position: absolute;
  top: var(--side-length);
  right: 0;
  list-style: none;
  box-sizing: border-box;
  padding: 5px 0;
  margin: 0;
  background-color: #fff;
  border-radius: 2px;
  font-size: 12px;
  color: #333;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
  max-width: 212px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts .extra-options .extra-option {
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  line-height: 27px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts .extra-options .extra-option:hover {
  background-color: #f5f5f5;
}
@media only screen and (hover: none) {
  .cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-items .wp-local-item .item-extra-opts {
    opacity: 1;
    pointer-events: initial;
  }
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content div:not(.wp-cloud-items) .wp-item:nth-child(3n) {
  margin-right: 0;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content div.wp-cloud-items .loading-next {
  width: 100%;
  text-align: center;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content div.wp-cloud-items .loading-next .loading-next-icon {
  display: inline-block;
  width: 80px;
  height: 40px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content div.wp-cloud-items .wp-item:nth-child(2n) {
  margin-right: 0;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-local-items .pick-local-button {
  display: inline-block;
  width: 203px;
  height: 114px;
  margin-right: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px dashed #dadada;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-local-items .pick-local-button .pick-local-icon {
  margin-top: 28px;
  width: 100%;
  height: 28px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .wp-local-items .pick-local-button .pick-local-text {
  display: block;
  width: 100%;
  margin-top: 14px;
  text-align: center;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .cloud-wallpaper-loading,
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .cloud-wallpaper-empty {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .cloud-wallpaper-empty {
  flex-flow: column nowrap;
  font-size: 14px;
  color: #999;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .cloud-wallpaper-empty > .empty-text {
  margin-top: 12px;
}
.cloud-wallpaper .cloud-wallpaper-body .cloud-wallpaper-content .cloud-wallpaper-loading > .spin {
  width: 80px;
  height: 40px;
}
.cloud-wallpaper .cloud-wallpaper-filter .color-filter-items {
  margin-top: 10px;
  display: flex;
}
.cloud-wallpaper .cloud-wallpaper-filter .color-filter-items .color-filter-item:last-child {
  margin-right: 0;
}
.cloud-wallpaper .cloud-wallpaper-filter .color-filter-items .color-filter-item {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}
.cloud-wallpaper .cloud-wallpaper-filter .color-filter-items .color-filter-item.active::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  padding-top: 6px;
  padding-left: 10px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translate(-50%, -70%) rotate(-45deg);
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter {
  flex: 1;
  height: 0;
  flex-shrink: 0;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter-items {
  margin-top: 10px;
  width: 235px;
  flex: 1;
  flex-shrink: 0;
  height: 0;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter-items .menu-filter-item {
  padding: 5px 10px;
  background-color: #f5f5f5;
  color: #454545;
  flex-grow: 0;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  vertical-align: top;
  margin-bottom: 12px;
  margin-right: 12px;
  transition: color 200ms ease-in 0s, background-color 200ms ease-in 0s;
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter-items .menu-filter-item .mf-item-icon {
  margin-right: 2px;
  width: 14px;
  height: 14px;
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter-items .menu-filter-item .mf-item-text {
  font-size: 12px;
  line-height: 1.5em;
  vertical-align: middle;
  pointer-events: none;
}
.cloud-wallpaper .cloud-wallpaper-filter .menu-filter-items .menu-filter-item.active {
  color: #fff;
  background-color: #656565;
}
.cloud-wallpaper .cloud-wallpaper-filter .pick-local-wp {
  width: 220px;
  height: 38px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.cloud-wallpaper .cloud-wallpaper-filter .pick-local-wp .pick-local-wp-icon {
  margin-right: 6px;
  width: 14px;
  height: 12px;
}
.cloud-wallpaper .cloud-wallpaper-filter .pick-local-wp .pick-local-wp-text {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}
.cloud-wallpaper .cloud-wallpaper-filter .pick-local-wp .pick-local-wp-el {
  display: none;
}
`,il=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let ol=class extends r.a{constructor(){super(...arguments),this.open=!1,this._color="rgba(255, 204, 0, 1)"}_setColor({detail:t}){if(!t)return;const[e]=t,{rgba:i}=e;this._color=`rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})`}_addCustomColor(){s.wallpaperStore.addCustomColorItem(this._color),this.close()}render(){return r.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.open} .onCancel=${this.close}>
        <section class="custom-color-editor" slot="body">
          <h3 class="color-editor-title">${i18n("wallpaper_add_custom_color")}</h3>

          <div class="color-editor-wrap">
            <color-picker value="${this._color}" @input="${this._setColor}"></color-picker>
          </div>

          <div class="editor-button-group">
            <infinito-button class="confirm-button" primary @click=${this._addCustomColor}>
              ${i18n("confirm")}</infinito-button
            >
            <infinito-button class="cancel-button" @click=${this.close}> ${i18n("cancel")} </infinito-button>
          </div>
        </section>
      </infinito-modal>
    `}};ol.styles=r.b`
    .custom-color-editor {
      width: 386px;
    }

    .custom-color-editor .color-editor-title {
      padding-top: 24px;
      font-size: 18px;
      color: #333;
      line-height: 25px;
      margin: 0;
      text-align: center;
    }

    .custom-color-editor .color-editor-wrap {
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      flex-flow: row nowrap;
    }

    .custom-color-editor .editor-button-group {
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding-bottom: 40px;
    }

    .custom-color-editor .editor-button-group > infinito-button {
      width: 120px;
      height: 42px;
    }

    .custom-color-editor .editor-button-group .confirm-button {
      margin-right: 16px;
    }
  `,il([Object(r.g)({type:Boolean})],ol.prototype,"open",void 0),il([Object(r.g)({type:Object})],ol.prototype,"close",void 0),ol=il([Object(r.c)("color-editor-popup")],ol);var nl=i(4),rl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};i(733);let al=class extends a.a{constructor(){super(...arguments),this._colorList=window.__INFINITY__.color_list,this._tagList=window.__INFINITY__.tag_list,this._filterList=[{text:i18n("wallpaper_cloud"),type:"cloud"},{text:i18n("local_wallpaper2"),type:"local"},{text:i18n("solid_color_wallpaper"),type:"color"},{text:i18n("recently_use"),type:"recent"},{text:i18n("my_collection"),type:"collect"}],this._contentType="cloud",this.cancelRequest=()=>Object(nl.b)("getWallpapers"),this._applyWallpaper=({target:t})=>{const{index:e,wp:i}=t.dataset;if(void 0===i)return;const o=JSON.parse(i);if(Qs.a.isCurrentWp(o.id))return;if("color"===o.type)return void Qs.a.setColor(o);if("local"===o.type)return void Qs.a.setLocalWallpaper(Js.a.localItems[e]);this._wpLoadingIndex=Number(e);const n=new AbortController;this._abortController&&!this._abortController.signal.aborted&&this._abortController.abort(),fetch(o.url,{signal:n.signal}).then(t=>t.arrayBuffer()).then(()=>{Qs.a.setCloudWallpaper(o),null!==this._wpLoadingIndex&&(this._wpLoadingIndex=null),this._abortController=null}).catch(t=>{"AbortError"!==t.name&&(console.warn("wallpaper apply failure error: "),Si.default.error(i18n("network_error")))}),this._abortController=n},this._once=!1,this.whenOpen=async()=>{switch(this._once||(await this._filterCloudP(),this._once=!0),this._contentType){case"recent":this._filterRecentUsed();break;case"collect":this._filterCollectP()}},this._filterColor=({target:t})=>{const{color:e}=t.dataset;e&&(Js.a.isFilterColor(e)||(Js.a.setFilterColor(e),this._onCloudFilter()))},this._removeFilterColor=()=>{Js.a.removeFilterColor(),this._onCloudFilter()},this._removeFilterTag=()=>{Js.a.removeFilterTag(),this._onCloudFilter()},this._filterTag=({target:t})=>{const{tag:e}=t.dataset;e&&(Js.a.isFilterTag(e)||(Js.a.setFilterTag(e),this._onCloudFilter()))},this._scrollThreshold=100,this._lockLoadNext=!1,this._lockLoadNextOnce=!1,this._customColorPopup=!1,this._openCustomColorPopup=()=>{!this._customColorPopup&&(this._customColorPopup=!0)},this._closeCustomColorPopup=()=>{this._customColorPopup&&(this._customColorPopup=!1)},this._currentSortOption=i18n("wallpaper_sort_default"),this._sortOptionsPopup=!1,this._sortOptions=[{value:1,text:i18n("wallpaper_sort_option_1")},{value:2,text:i18n("wallpaper_sort_option_2")},{value:0,text:i18n("wallpaper_sort_default")}],this._openSortOptionsPopup=()=>{!this._sortOptionsPopup&&(this._sortOptionsPopup=!0)},this._closeSortOptionsPopup=()=>{this._sortOptionsPopup&&(this._sortOptionsPopup=!1)},this._applySort=({target:t})=>{const{value:e,text:i}=t.dataset;"string"==typeof e&&(Js.a.isFilterOrder(e)||(this._currentSortOption=i,Js.a.setFilterOrder(e),this._onCloudFilter()))},this._collectWallpaper=async({detail:t})=>{if(!t)return;if(!s.userStore.isLogin)return void Si.default.popupLogin();const e=Qs.a.cloudCollection.includes(t);e?(Qs.a.removeCollectionP(t),"collect"===this._contentType&&(Js.a.removeCollectItem(t),this._renderEmptyOrNot(Js.a.collectItems))):Qs.a.addCollectionP(t);if(!Qs.a.isLocal(t)){const i=await Object(Oi.collectionWallpaper)(t,Number(!e));i.error&&console.warn(i.error)}},this._likeWallpaper=async({detail:t})=>{if(!t)return;if(!s.userStore.isLogin)return void Si.default.popupLogin();const e=Qs.a.liked.includes(t);e?Qs.a.removeLiked(t):Qs.a.addLiked(t),Js.a.likeWp(t,Number(!e));if(!Qs.a.isLocal(t)){(await Object(Oi.likeWallpaper)(t,Number(!e))).error}},this.hidePopupNeeded=()=>{this._closeSortOptionsPopup(),Js.a.hideItemExtraOpts()}}async _setContentType(t){if(this._contentType!==t){Js.a.clearState(),this.cancelRequest(),this._contentType=t;try{switch(t){case"cloud":await this._filterCloudP();break;case"recent":await this._filterRecentUsed();break;case"color":case"local":break;case"collect":await this._filterCollectP()}}catch(t){t.__CANCEL__||(console.error(t),Si.default.error(i18n("network_error")))}}}async _filterCloudP(){Js.a.setInLoading(!0);try{const t=await Js.a.loadCloudWallpapers();Js.a.setCloudItems(t),this._renderEmptyOrNot(t)}finally{Js.a.setInLoading(!1)}this._cloudItemsWrap||(this._cloudItemsWrap=this.shadowRoot.querySelector(".cloud-wallpaper .cloud-wallpaper-content .wp-cloud-items"))}async _filterRecentUsed(){Js.a.setInLoading(!0);try{const t=await Qs.a.loadRecentUsedP();Js.a.setRecentItems(t),this._renderEmptyOrNot(t)}finally{Js.a.setInLoading(!1)}}_filterColorP(){}_filterLocalP(){}async _filterCollectP(){Js.a.setInLoading(!0);try{const t=await Qs.a.loadCollectP();Js.a.setCollectItems(t),this._renderEmptyOrNot(t)}finally{Js.a.setInLoading(!1)}}_renderEmptyOrNot(t){Array.isArray(t)&&0===t.length?Js.a.setEmpty(!0):Js.a.setEmpty(!1)}async _removeLocalP(t){V.IConfirm.create().toShow({text:i18n("wallpaper_confirm_delete_file"),onConfirm:()=>Js.a.removeLocalItem(t)})}_showItemExtraOpts(t,e){t.stopPropagation(),Js.a.showItemExtraOpts(e)}async _onCloudFilter(){Js.a.clearState(),this.cancelRequest(),Js.a.setInLoading(!0);try{const t=await Js.a.loadCloudWallpapers();Js.a.setCloudItems(t),this._renderEmptyOrNot(t),this._cloudItemsWrap&&this._cloudItemsWrap.scrollTo&&(this._lockLoadNextOnce=!0,this._cloudItemsWrap.scrollTo(0,0))}catch(t){t.__CANCEL__||(console.error(t),Si.default.error(i18n("network_error")))}Js.a.setInLoading(!1)}_clearFilter(){this._removeFilterTagAndColor(),Js.a.loadCloudWallpapers()}_removeFilterTagAndColor(){Js.a.removeFilterTag(),Js.a.removeFilterColor()}_scrollToLoadIfNeeded(t){if(this._lockLoadNextOnce)return void(this._lockLoadNextOnce=!1);if(this._lockLoadNext)return;const e=t.currentTarget,{scrollTop:i,scrollHeight:o,clientHeight:n}=e;o<=n||o-i-n<this._scrollThreshold&&(this._lockLoadNext=!0,Js.a.loadNextPage().finally(()=>this._lockLoadNext=!1))}async _pickLocalImage({currentTarget:t}){try{const[e]=t.files,i=await Js.a.loadLocalImage(e);i&&Qs.a.setLocalWallpaper(i)}finally{t.value=""}}_toggleSortOptionsPopup(t){t.stopPropagation(),this._sortOptionsPopup=!this._sortOptionsPopup}connectedCallback(){super.connectedCallback(),document.body.addEventListener("click",this.hidePopupNeeded)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("click",this.hidePopupNeeded)}render(){return r.e`
      <section class="cloud-wallpaper">
        <!-- left -->

        <div class="cloud-wallpaper-header">
          <div class="header-filter-list global-scrollbar">
            <ul class="filter-list-wrap">
              ${this._filterList.map(({text:t,type:e})=>r.e`
                    <li
                      @click=${()=>this._setContentType(e)}
                      class="filter-item${e===this._contentType?" active":""}"
                    >
                      ${t}
                    </li>
                  `)}
            </ul>
          </div>
          <div class="header-wallpaper-sort" style=${"cloud"!==this._contentType?"display: none;":""}>
            <span class="wallpaper-sort-wrap" @click=${this._toggleSortOptionsPopup}>
              <i-usesvg class="wallpaper-sort-icon" type="icon-zhu_shengxu" iconfont></i-usesvg>
              <span class="wallpaper-sort-text">${this._currentSortOption}</span>
            </span>
            <ul class="sort-options-popup${this._sortOptionsPopup?" active":""}" @click=${this._applySort}>
              ${this._sortOptions.map(({value:t,text:e})=>r.e` <li class="sort-option-item" data-value=${t} data-text=${e}>${e}</li> `)}
            </ul>
          </div>
        </div>

        <div class="cloud-wallpaper-body">
          <!--  -->
          ${this.renderAdvFilterNeeded()}
          <!--  -->

          ${this.renderContent(this._contentType)}
        </div>

        <color-editor-popup ?open=${this._customColorPopup} .close=${this._closeCustomColorPopup}></color-editor-popup>
      </section>
    `}renderAdvFilterNeeded(){return"cloud"!==this._contentType?null:r.e`
      <div class="cloud-wallpaper-filter">
        <div class="color-filter">
          <div class="color-filter-header">
            <span class="color-filter-title">${i18n("color")}</span>
            <span
              class="clear-filter-text"
              style=${Js.a.filterCondition.color?"":"display: none;"}
              @click=${this._removeFilterColor}
            >
              ${i18n("wallpaper_clear_filter")}
            </span>
          </div>

          <ul class="color-filter-items" @click=${this._filterColor}>
            ${this._colorList.map(t=>r.e`
                  <li
                    class="color-filter-item${Js.a.filterCondition.color===t?" active":""}"
                    style="background-color: #${t}"
                    data-color=${t}
                  ></li>
                `)}
          </ul>
        </div>

        <div class="tag-filter">
          <div class="tag-filter-header">
            <span class="tag-filter-title">${i18n("label")}</span>
            <span
              class="clear-filter-text"
              style=${Js.a.filterCondition.tag?"":"display: none;"}
              @click=${this._removeFilterTag}
            >
              ${i18n("wallpaper_clear_filter")}
            </span>
          </div>
          <ul class="tag-filter-items global-scrollbar" @click=${this._filterTag}>
            ${this._tagList.map(t=>r.e`
                <li
                  class="tag-filter-item${Js.a.filterCondition.tag===t?" active":""}"
                  data-tag=${t}
                >
                  ${t}
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}renderContent(t){let e;switch(t){case"cloud":e=this.renderCloudContent();break;case"recent":e=this.renderRecentContent();break;case"color":e=this.renderColorContent();break;case"local":e=this.renderLocalContent();break;case"collect":e=this.renderCollectContent();break;default:e=this.renderCloudContent()}return r.e`
      <div class="cloud-wallpaper-content">
        <!-- wp item list -->
        ${e}
        <!-- empty -->
        <div class="cloud-wallpaper-empty" style="${Js.a.empty?"":"display: none;"}">
          <img class="empty-image" src=${i(734)} width="86" />
          <span class="empty-text">${i18n("wallpaper_empty_text")}</span>
        </div>
        <!-- error -->
        <div class="cloud-wallpaper-error" style="display: none;"></div>
        <!-- loading -->
        <div class="cloud-wallpaper-loading" style="${Js.a.inLoading?"":"display: none;"}">
          <infinito-spin class="spin" spinning .isSvg=${l.p}></infinito-spin>
        </div>
      </div>
    `}renderCloudContent(){return r.e`
      <div
        class="wp-cloud-items wp-items global-scrollbar"
        @scroll=${this._scrollToLoadIfNeeded}
        @click=${this._applyWallpaper}
      >
        ${Js.a.cloudItems.map((t,e)=>r.e`
            <div class="wp-cloud-item wp-item">
              <wp-item
                .wp=${t}
                data-index=${e}
                data-wp=${JSON.stringify(t)}
                @collect=${this._collectWallpaper}
                @like=${this._likeWallpaper}
                @mouseleave=${this.hidePopupNeeded}
              ></wp-item>

              <div class="item-apply-loading${this._wpLoadingIndex===e?" loading":""}">
                <infinito-spin .isSvg=${l.p} class="apply-loading-icon" spinning></infinito-spin>
              </div>
            </div>
          `)}

        <!-- loading next icon -->
        <div class="loading-next" style=${Js.a.inLoadingNext?"":"display: none;"}>
          <infinito-spin .isSvg=${l.p} class="loading-next-icon" spinning></infinito-spin>
        </div>
      </div>
    `}renderRecentContent(){return r.e`
      <div class="wp-recent-items wp-items global-scrollbar" @click=${this._applyWallpaper}>
        ${Js.a.recentItems.map((t,e)=>r.e`
            <div class="wp-item">
              <wp-item-raw
                .type=${t.type}
                .content=${t.content}
                data-index=${e}
                data-wp=${JSON.stringify(t)}
                @mouseleave=${this.hidePopupNeeded}
              ></wp-item-raw>

              <div class="item-apply-loading${this._wpLoadingIndex===e?" loading":""}">
                <infinito-spin .isSvg=${l.p} class="apply-loading-icon" spinning></infinito-spin>
              </div>
            </div>
          `)}
      </div>
    `}renderColorContent(){return r.e`
      <div class="wp-color-items wp-items global-scrollbar">
        <solid-color-items ?show=${!0} .openCustomColorPopup=${this._openCustomColorPopup}></solid-color-items>
      </div>
    `}renderLocalContent(){return r.e`
      <div class="wp-local-items wp-items global-scrollbar" @click=${this._applyWallpaper}>
        <label class="wp-item pick-local-button" for="pick-local-wp">
          <i-usesvg type="icon-bendibizhi" color="#333" iconfont class="pick-local-icon"></i-usesvg>
          <span class="pick-local-text">${i18n("pick_local_wallpaper")}</span>
          <input
            id="pick-local-wp"
            type="file"
            accept="image/*"
            @change=${this._pickLocalImage}
            style="display: none;"
          />
        </label>

        ${Js.a.localItems.map((t,e)=>r.e`
            <div class="wp-item wp-local-item">
              <wp-item-raw
                .type=${t.type}
                .content=${t.content}
                data-index=${e}
                data-wp=${JSON.stringify(t)}
                @mouseleave=${this.hidePopupNeeded}
              ></wp-item-raw>

              <div
                style=${Qs.a.id!==t.id?"":"display: none;"}
                class="item-extra-opts${Js.a.itemExtraOptsState===t.id?" active":""}"
                @click=${e=>this._showItemExtraOpts(e,t.id)}
              >
                <div class="opts-icon-wrap">
                  <i-usesvg class="opts-icon" color="#fff" iconfont type="icon-xingzhuangjiehe"></i-usesvg>
                </div>
                <ul class="extra-options">
                  <li class="extra-option" @click=${()=>this._removeLocalP(t.id)}>
                    ${i18n("wallpaper_delete_file")}
                  </li>
                </ul>
              </div>
            </div>
          `)}
      </div>
    `}renderCollectContent(){return r.e`
      <div class="wp-collect-items wp-items global-scrollbar" @click=${this._applyWallpaper}>
        ${Js.a.collectItems.map((t,e)=>r.e`
            <div class="wp-item wp-collect-item">
              <wp-item
                .wp=${t}
                data-index=${e}
                data-wp=${JSON.stringify(t)}
                @collect=${this._collectWallpaper}
                @like=${this._likeWallpaper}
                @mouseleave=${this.hidePopupNeeded}
                ?disableLike=${!0}
              ></wp-item>

              <div class="item-apply-loading${this._wpLoadingIndex===e?" loading":""}">
                <infinito-spin .isSvg=${l.p} class="apply-loading-icon" spinning></infinito-spin>
              </div>
            </div>
          `)}
      </div>
    `}};al.styles=[S.a,el],rl([Object(r.f)()],al.prototype,"_contentType",void 0),rl([Object(r.f)()],al.prototype,"_wpLoadingIndex",void 0),rl([Object(r.f)()],al.prototype,"_customColorPopup",void 0),rl([Object(r.f)()],al.prototype,"_currentSortOption",void 0),rl([Object(r.f)()],al.prototype,"_sortOptionsPopup",void 0),al=rl([Object(r.c)("cloud-wallpaper")],al);var sl=r.b`.auto-wallpaper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.auto-wallpaper .ws-items {
  width: 100%;
  flex: 1;
  height: 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding-left: 30px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
}
.auto-wallpaper .ws-items:before,
.auto-wallpaper .ws-items:after {
  content: '';
  display: block;
  height: 20px;
  width: 100%;
}
.auto-wallpaper .ws-item {
  width: 200px;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  margin-top: 20px;
}
.auto-wallpaper .ws-item:nth-child(3n - 1) {
  margin-left: 20px;
  margin-right: 20px;
}
.auto-wallpaper .ws-item:hover .wsi-options-bar {
  pointer-events: initial;
  opacity: 1;
}
.auto-wallpaper .ws-item .wsi-options-bar {
  --side-length: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  width: var(--side-length);
  height: var(--side-length);
  opacity: 0;
  transition: opacity 200ms ease 0s;
  pointer-events: none;
}
.auto-wallpaper .ws-item .wsi-options-bar .wsi-option-icon-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms ease-in 0s;
  cursor: pointer;
  border-radius: 4px;
}
.auto-wallpaper .ws-item .wsi-options-bar .wsi-option-icon-wrap:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
.auto-wallpaper .ws-item .wsi-options-bar:not(.active) .wsi-popup-options {
  display: none;
}
.auto-wallpaper .ws-item .wsi-options-bar .wsi-popup-options {
  position: absolute;
  top: var(--side-length);
  right: 0;
  list-style: none;
  box-sizing: border-box;
  padding: 5px 0;
  margin: 0;
  background-color: #fff;
  border-radius: 2px;
  font-size: 12px;
  color: #333;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
  max-width: 212px;
}
.auto-wallpaper .ws-item .wsi-options-bar .wsi-popup-options .popup-option-item {
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  line-height: 27px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.auto-wallpaper .ws-item .wsi-options-bar .wsi-popup-options .popup-option-item:hover {
  background-color: #f5f5f5;
}
@media only screen and (hover: none) {
  .auto-wallpaper .ws-item .wsi-options-bar {
    pointer-events: initial;
    opacity: 1;
  }
}
.auto-wallpaper .ws-item .ws-item-img {
  width: 100%;
  height: 73px;
  vertical-align: top;
  pointer-events: none;
  object-fit: cover;
  object-position: center;
}
.auto-wallpaper .ws-item .ws-item-info {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  pointer-events: none;
}
.auto-wallpaper .ws-item .ws-item-name {
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.auto-wallpaper .ws-item .ws-item-desc {
  margin-top: 4px;
  font-size: 12px;
  color: #333;
  line-height: 17px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.auto-wallpaper .ws-item .ws-item-checked-icon {
  position: absolute;
  bottom: 33px;
  right: 10px;
  width: 20px;
  height: 20px;
  opacity: 0;
  transition: opacity 250ms ease 0s;
  pointer-events: none;
}
.auto-wallpaper .ws-item.ws-new-item {
  text-align: center;
  border: 1px dashed #dadada;
  cursor: default;
}
.auto-wallpaper .ws-item.ws-new-item .wsn-item-label {
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.auto-wallpaper .ws-item.ws-new-item .wsn-item-icon {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 50px;
  height: 50px;
}
.auto-wallpaper .ws-item.ws-new-item .wsn-item-text {
  display: inline-block;
  margin-top: 21px;
  color: #999;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.auto-wallpaper .ws-item:before {
  --spacing: 0;
  --border-width: 3px;
  content: '';
  pointer-events: none;
  position: absolute;
  top: var(--spacing);
  left: var(--spacing);
  right: var(--spacing);
  bottom: var(--spacing);
  border-radius: inherit;
  border: var(--border-width) solid #ff8181;
  opacity: 0;
}
.auto-wallpaper .ws-item.active:before {
  opacity: 1;
}
.auto-wallpaper .ws-item.active .ws-item-checked-icon {
  opacity: 1;
}
`,ll=i(482),cl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let pl=class extends a.a{constructor(){super(...arguments),this.library={},this._dirty=!1,this._once=!1,this._lockRemoveImage=!1,this._closeModal=()=>this._closePopup()}async _closePopup(){if(!this._once){this._once=!0;try{this._dirty&&(await Qs.a.modifyUserLibrary(this.library.libraryId),this._dirty=!1)}catch(t){}finally{this.closeAtlasEditPopup()}}}get _libraryCount(){return this._libraryItems.length}get _libraryItems(){const{libraryId:t}=this.library;return ll.a.getLibraryItems(t)||[]}_checkSwitchType({target:t}){const{switchType:e}=t.dataset;e&&(ll.a.switchTypeInUI!==e&&ll.a.setSwitchType(e),ll.a.closeIOptionsModal())}async _applyAtlas(){var t;try{const{libraryId:e}=this.library;if(!(null===(t=ll.a.getLibraryItems(e))||void 0===t?void 0:t.length))return;if(Qs.a.wpSource===e)return void(Qs.a.switchType!==ll.a.switchTypeInUI&&Qs.a.setSwitchType(ll.a.switchTypeInUI));if(!navigator.onLine)return void Si.default.error(i18n("wallpaper_no_network_connect"));this._applyUserLibraryAuto()}finally{this._closePopup()}}async _applyUserLibraryAuto(){const{libraryId:t,libraryName:e}=this.library,[i,o]=c.a.checkImage(),n=Si.default.popupLoading(()=>{Object(nl.b)("getNextWallpaper"),o()});try{const o=await Qs.a.getNextWp(t,void 0,"userLibrary");await i(o.url),Qs.a.enableUserLibraryAuto({libraryId:t,libraryName:e},ll.a.switchTypeInUI,o)}catch(t){!t.__CANCEL__&&t.message&&Si.default.error(t.message)}finally{n()}}_onChangeAtlasName({currentTarget:t}){this._renameLibraryName(t.value)}_renameLibraryName(t){t?(this.library.libraryName=t,this.new||(ll.a.renameLibraryName(this.library.libraryId,t),Qs.a.setWpSourceName(t))):Si.default.error(i18n("wallpaper_atlas_name_illegal"))}_onEnterKeyModifyAtlasName(t){const e=t.currentTarget;"Enter"===t.key&&(this._renameLibraryName(e.value),e.blur())}async _addImagesToLibrary({currentTarget:t}){let e=Array.from(t.files).filter(t=>/^image\//.test(t.type));if(0===e.length)return;this._dirty=!0;const i=ll.a.maxCountPerLibrary-this._libraryCount;e.length>i&&(e=e.slice(0,i)),e.length>ll.a.maxFileLenPerUpload&&(e=e.slice(0,ll.a.maxFileLenPerUpload));const o=Si.default.loading(i18n("wallpaper_loading"));await c.a.sleep(150);try{this.new&&(await ll.a.createWallpaperLibraryOnly(this.library.libraryId,this.library.libraryName),this.new=!1);const i=await ll.a.addImagesToLibrary(this.library.libraryId,e);i&&ll.a.appendCustomLibraryItem(this.library.libraryId,i)}catch(t){Si.default.error(i18n("wallpaper_add_images_to_library_error"))}finally{t.value="",o()}}async _removeImageFromLibrary(t){const{libraryId:e,id:i,key:o,_id:n}=t;if(this._dirty=!0,Qs.a.wpSource!==e||1!==this._libraryItems.length){if(!this._lockRemoveImage){this._lockRemoveImage=!0;try{const t=o.split(".").reverse()[0],r=await Object(Oi.removeWallpaperLibraryItem)(e,i,t);if(r.error)throw r.error;if(0!==r.code)throw r;Qs.a.dropCloudRecentUsed(n),ll.a.popCustomLibraryItem(e,i)}catch(t){console.warn(t),Si.default.error(i18n("wallpaper_delete_library_item_failure"))}finally{this._lockRemoveImage=!1,this.requestUpdateInternal()}}}else Si.default.error(i18n("wallpaper_user_library_limit_text"))}_popupToShow(){this._once=!1,this.library.libraryId===Qs.a.wpSource?ll.a.setSwitchType(Qs.a.switchType):ll.a.setSwitchType("one-day")}_popupToHide(){}updated(t){t.has("open")&&(this.open?this._popupToShow():this._popupToHide())}_clearSideEffect(t){c.a.stopBubble(t),ll.a.closeIOptionsModal()}_createWallpaperLibrary({currentTarget:t}){let e=Array.from(t.files).filter(t=>/^image\//.test(t.type));0!==e.length&&(e.length>ll.a.maxFileLenPerUpload&&(e=e.slice(0,ll.a.maxFileLenPerUpload)),ll.a.createWallpaperLibrary(e))}render(){var t,e;return r.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.open} .onCancel=${this._closeModal}>
        <section class="atlas-edit-panel" slot="body" @click=${this._clearSideEffect}>
          <div class="panel-wrap">
            <div class="panel-header">
              <input
                type="text"
                class="patlas-name-input"
                .value=${this.library.libraryName}
                @change=${this._onChangeAtlasName}
                @keypress=${this._onEnterKeyModifyAtlasName}
                maxlength="80"
              />

              <span class="pheader-tips"> ${i18n("wallpaper_atlas_upload_tips")} </span>
            </div>

            <div class="panel-content">
              <div class="library-items global-scrollbar">
                <div
                  class="upload-button library-item"
                  style="${this._libraryCount>=ll.a.maxCountPerLibrary?"display: none;":""}"
                >
                  <label class="upload-button-label" for="aitem-upload-input">
                    <i-usesvg class="upload-icon" color="#dbdbdb" iconfont type="icon-xingzhuangjiehe2x"></i-usesvg>
                    <span class="upload-text">${i18n("wallpaper_upload_form_local")}</span>
                  </label>
                  <input
                    id="aitem-upload-input"
                    type="file"
                    multiple
                    accept="image/*"
                    @change=${this._addImagesToLibrary}
                    style="display: none;"
                  />
                </div>
                ${null===(t=ll.a.getLibraryItems(this.library.libraryId))||void 0===t?void 0:t.map(t=>r.e`
                    <div class="library-item">
                      <wp-item-raw class="library-item-content" .type=${t.type} .content=${t.content}></wp-item-raw>

                      <div class="library-item-remove" @click=${()=>this._removeImageFromLibrary(t)}>
                        <i-usesvg class="library-item-remove-icon" color="#fff" iconfont type="icon-guanbi1"></i-usesvg>
                      </div>
                    </div>
                  `)}
              </div>
            </div>

            <div class="modal-footer">
              <div class="footer-switch-info">
                <div class="footer-switch-wrap">
                  <strong class="switch-text">${i18n("wallpaper_auto_options_text")}:</strong>

                  <div class="switch-options-wrap">
                    <span class="current-option" @click=${ll.a.toggleIOptionsModal}>
                      ${ll.a.switch_interval_options[ll.a.switchTypeInUI]}
                    </span>
                    <i-usesvg class="option-dropdown" iconfont type="icon-you1"></i-usesvg>

                    <ul
                      class="switch-popup-options${ll.a.iOptionsModalShow?" active":""}"
                      @click=${this._checkSwitchType}
                    >
                      ${Object.entries(ll.a.switch_interval_options).map(([t,e])=>r.e` <li class="popup-option" data-switch-type=${t}>${e}</li> `)}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="footer-button">
                <!--               
                      <infinito-button class="save-button" @click=${this._createWallpaperLibrary}>
                        ${i18n("save")}
                      </infinito-button>
                 -->

                <infinito-button
                  class="sure-button"
                  primary
                  ?disabled=${!(null===(e=ll.a.getLibraryItems(this.library.libraryId))||void 0===e?void 0:e.length)}
                  @click=${this._applyAtlas}
                  >${i18n("apply")}</infinito-button
                >
              </div>
            </div>
          </div>
        </section>
      </infinito-modal>
    `}};pl.styles=[S.a,r.b`
      .atlas-edit-panel {
        width: 652px;
        height: 480px;
      }

      .atlas-edit-panel .panel-wrap {
        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column nowrap;
      }
      .atlas-edit-panel .panel-header {
        width: 100%;
        border-bottom: 1px solid #eee;

        display: flex;
        align-items: center;
        flex-flow: row nowrap;

        box-sizing: border-box;
        padding: 24px 30px 16px;
      }

      .atlas-edit-panel .panel-header .patlas-name-input {
        min-width: 180px;
        font-size: 16px;
        color: #333;
        line-height: 35px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        font-weight: bold;
        border: 1px solid transparent;
        padding: 0;
        outline: none;
        box-sizing: border-box;

        transition-property: border-color padding color font-weight border-radius;
        transition-duration: 200ms;
        transition-delay: 0s;
        transition-timing-function: ease-out;
      }

      .atlas-edit-panel .panel-header .patlas-name-input:focus {
        border: 2px solid #4378d2;
        padding: 0 12px;
        color: #666;
        font-weight: normal;
        border-radius: 3px;
      }

      .atlas-edit-panel .panel-header .pheader-tips {
        flex: 1;
        width: 0;

        color: #999;
        font-size: 12px;
        margin-left: 12px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: right;
      }

      .atlas-edit-panel .panel-content {
        width: 100%;
        flex: 1;
        height: 0;
        overflow: hidden;
      }

      .atlas-edit-panel .panel-content .library-items {
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        overflow-y: auto;

        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;

        box-sizing: border-box;
        padding-left: 30px;
        padding-top: 24px;
      }

      .atlas-edit-panel .panel-content .library-item {
        width: 187px;
        height: 105px;
        position: relative;
        margin-bottom: 20px;
        margin-right: 16px;
      }

      .atlas-edit-panel .panel-content .library-item .library-item-remove {
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        height: 18px;
        transform: translate(40%, -40%);
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
      }

      .atlas-edit-panel .panel-content .library-item .library-item-remove-icon {
        width: 10px;
        height: 10px;
      }

      .atlas-edit-panel .panel-content .upload-button {
        box-sizing: border-box;
        border: 2px dashed #dbdbdb;
        text-align: center;
      }

      .atlas-edit-panel .panel-content .upload-button .upload-button-label {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height: 100%;
        cursor: pointer;
        justify-content: space-around;
      }

      .atlas-edit-panel .panel-content .upload-button .upload-icon {
        width: 100%;
        height: 35px;
        margin-top: 6px;
      }
      .atlas-edit-panel .panel-content .upload-button .upload-text {
        font-size: 12px;
        color: #999;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .modal-footer {
        width: 100%;
        height: 80px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .modal-footer .footer-switch-info {
        flex: 1;
        width: 0;
      }

      .modal-footer .footer-switch-wrap {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;

        font-size: 14px;
        color: #333;
      }

      .modal-footer .footer-switch-wrap .switch-text {
        white-space: nowrap;
      }

      .modal-footer .footer-switch-wrap .switch-options-wrap {
        margin-left: 6px;
        flex: 1;
        width: 0;
        position: relative;
        display: flex;
        align-items: center;
      }

      .modal-footer .switch-options-wrap .current-option {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
        display: inline-block;
      }
      .modal-footer .current-option + .option-dropdown {
        width: 14px;
        height: 14px;
        margin-left: 4px;
      }

      .modal-footer .footer-switch-wrap .switch-popup-options {
        position: absolute;
        list-style: none;
        margin: 0;
        bottom: 28px;
        left: 0;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 10px 0;
        background-color: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

        font-size: 14px;
        color: #333;
        line-height: 40px;

        opacity: 0;
        transform: scale(0.8);
        transition: opacity 100ms ease-in 0s, transform 150ms ease 0s;
        pointer-events: none;
        z-index: 1;
      }

      .modal-footer .footer-switch-wrap .switch-popup-options.active {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
      }

      .modal-footer .footer-switch-wrap .switch-popup-options .popup-option {
        width: 100%;
        box-sizing: border-box;
        padding: 0 14px;
        white-space: nowrap;
      }
      .modal-footer .footer-switch-wrap .switch-popup-options .popup-option:hover {
        background-color: #f6f6f6;
        cursor: pointer;
      }

      .modal-footer .footer-button {
        margin-left: 6px;
        height: 40px;
        display: flex;
        max-width: 178px;
        min-width: 80px;
      }

      .modal-footer .footer-button .save-button {
        margin-right: 14px;
      }

      .modal-footer .footer-button .sure-button {
        width: 100%;
        height: 100%;
      }
    `],cl([Object(r.g)({type:Boolean})],pl.prototype,"open",void 0),cl([Object(r.g)({type:Boolean})],pl.prototype,"new",void 0),cl([Object(r.g)({type:Object})],pl.prototype,"library",void 0),cl([Object(r.g)({type:Object})],pl.prototype,"closeAtlasEditPopup",void 0),pl=cl([Object(r.c)("modal-atlas-edit")],pl);var dl=i(337),hl=i(241),ul=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let gl=class extends a.a{constructor(){super(...arguments),this._inLoading=!1,this._inLoadingNext=!1,this._libraryItems=[],this._bing={},this._scrollThreshold=100,this._lockLoadNext=!1}async _loadAtlasInfo(){const t=window.__INFINITY__.wallpaper_sources.find(({value:t})=>t===this.atlasSource);this._atlasName=t.name,this._atlasDesc=t.desc}async _loadAtlasItems(){this._inLoading=!0;try{const t=await Js.a.loadWallpapersRaw({source:"all"===this.atlasSource?"":this.atlasSource,page:this._page});this._page=t.nextPage,this._pageCount=t.totalPages,this._atlasCount=t.count,this._libraryItems=t.data}catch(t){console.warn(t)}finally{this._inLoading=!1}}async _loadNextPage(){if(!(this._page>this._pageCount)){this._inLoading&&(this._inLoading=!1),this._inLoadingNext=!0;try{const t=await Js.a.loadWallpapersRaw({source:"all"===this.atlasSource?"":this.atlasSource,page:this._page});this._page=t.nextPage,this._pageCount=t.totalPages,this._atlasCount=t.count,this._libraryItems=this._libraryItems.concat(t.data)}finally{this._inLoadingNext=!1}}}_scrollToLoadIfNeeded(t){if(this._lockLoadNext)return;const e=t.currentTarget,{scrollTop:i,scrollHeight:o,clientHeight:n}=e;o<=n||o-i-n<this._scrollThreshold&&(this._lockLoadNext=!0,this._loadNextPage().then(()=>this._lockLoadNext=!1))}updated(t){t.has("open")&&(this.open?this.popupToShow():this.popupToHide())}async popupToShow(){if(this._inLoading&&(this._inLoading=!1),this._inLoadingNext&&(this._inLoadingNext=!1),this._libraryItems.length>0&&(this._libraryItems=[]),this._atlasCount=null,this._atlasName=null,this._atlasDesc=null,this._page=null,this._pageCount=null,this._bing={},this.atlasSource){if(this._loadAtlasInfo(),"bing"===this.atlasSource)try{this._inLoading=!0;const t=await Object(dl.c)();this._bing=t}catch(t){t.__CANCEL__||Si.default.error(t.message)}finally{this._inLoading=!1}else this._loadAtlasItems();this.atlasSource===Qs.a.wpSource?ll.a.setSwitchType(Qs.a.switchType):ll.a.setSwitchType("one-day")}else Si.default.error(i18n("unknown_mistake"))}popupToHide(){}_checkSwitchType({target:t}){const{switchType:e}=t.dataset;e&&(ll.a.switchTypeInUI!==e&&ll.a.setSwitchType(e),ll.a.closeIOptionsModal())}async _applyAtlas(){try{if("bing"===this.atlasSource&&"bing"===Qs.a.wpSource)return;if(Qs.a.wpSource===this.atlasSource)return void(Qs.a.switchType!==ll.a.switchTypeInUI&&Qs.a.setSwitchType(ll.a.switchTypeInUI));if(!navigator.onLine)return void Si.default.error(i18n("wallpaper_no_network_connect"));"bing"!==this.atlasSource?await this._applyCloudAuto():await this._applyBingWallpaper()}finally{this.close()}}async _applyCloudAuto(){const[t,e]=c.a.checkImage(),i=Si.default.popupLoading(()=>{Object(nl.b)("getNextWallpaper"),e()});try{const e=await Qs.a.getNextWp(this.atlasSource);await t(e.url),Qs.a.enableCloudAuto(this.atlasSource,ll.a.switchTypeInUI,e)}catch(t){!t.__CANCEL__&&t.message&&Si.default.error(t.message)}finally{i()}}async _applyBingWallpaper(){const t=Si.default.popupLoading();try{await Object(hl.c)(this._bing.url),Qs.a.enableBingWallpaper(this._bing)}catch(t){t.__CANCEL__||Si.default.error(i18n("network_error"))}finally{t()}}_clearSideEffect(t){c.a.stopBubble(t),ll.a.closeIOptionsModal()}render(){return r.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.open} .onCancel=${this.close}>
        <section class="atlas-preview-panel" slot="body" @click=${this._clearSideEffect}>
          <div class="atlas-preview-header">
            <div class="pheader-head">
              <h3 class="pheader-head-title">${this._atlasName}</h3>
              <span class="pheader-atlas-count">${this._atlasCount}</span>
            </div>

            <span class="pheader-desc">${this._atlasDesc}</span>
          </div>

          <div class="atlas-preview-content">
            ${"bing"===this.atlasSource?r.e`
                  <div class="library-preview-bing">
                    <wp-item-raw type="image" .content=${this._bing.rawUrl}></wp-item-raw>
                  </div>
                `:r.e`
                  <div class="atlas-preview-items global-scrollbar" @scroll=${this._scrollToLoadIfNeeded}>
                    ${this._libraryItems.map(t=>r.e`
                          <wp-item-raw class="atlas-preview-item" .type=${t.type} .content=${t.content}></wp-item-raw>
                        `)}
                    <!-- loading next icon -->
                    <div class="loading-next" style=${this._inLoadingNext?"":"display: none;"}>
                      <infinito-spin .isSvg=${l.p} class="loading-next-icon" spinning></infinito-spin>
                    </div>
                  </div>
                `}
            <!-- loading -->
            <div class="apreview-items-loading" style="${this._inLoading?"":"display: none;"}">
              <infinito-spin class="loading-element" spinning .isSvg=${l.p}></infinito-spin>
            </div>
          </div>

          <div class="atlas-preview-footer">
            <div class="footer-switch-info">
              <div class="footer-switch-wrap" style="${"bing"===this.atlasSource?"display: none;":""}">
                <strong class="switch-text">${i18n("wallpaper_auto_options_text")}:</strong>

                <div class="switch-options-wrap">
                  <span class="current-option" @click=${ll.a.toggleIOptionsModal}>
                    ${ll.a.switch_interval_options[ll.a.switchTypeInUI]}
                  </span>
                  <i-usesvg class="option-dropdown" iconfont type="icon-you1"></i-usesvg>

                  <ul
                    class="switch-popup-options${ll.a.iOptionsModalShow?" active":""}"
                    @click=${this._checkSwitchType}
                  >
                    ${Object.entries(ll.a.switch_interval_options).map(([t,e])=>r.e` <li class="popup-option" data-switch-type=${t}>${e}</li> `)}
                  </ul>
                </div>
              </div>
              <div class="limit-text" style="${"bing"!==this.atlasSource?"display: none;":""}">
                ${i18n("wallpaper_switch_limit_with_bing")}
              </div>
            </div>

            <div class="ws-sure-button">
              <infinito-button class="sure-button" primary @click=${this._applyAtlas}>
                ${i18n("apply")}
              </infinito-button>
            </div>
          </div>
        </section>
      </infinito-modal>
    `}};gl.styles=[S.a,r.b`
      .atlas-preview-panel {
        width: 652px;
        height: 480px;

        display: flex;
        flex-flow: column nowrap;
      }

      .atlas-preview-header {
        box-sizing: border-box;
        padding: 18px 30px;
        border-bottom: 1px solid #eee;
      }

      .atlas-preview-header .pheader-head {
        display: flex;
        align-items: center;
      }

      .atlas-preview-header .pheader-head .pheader-head-title {
        font-size: 18px;
        color: #333;
        margin: 0;
        line-height: 25px;
      }

      .atlas-preview-header .pheader-head .pheader-atlas-count {
        background-color: #f5f5f5;
        color: #999;
        font-size: 12px;
        margin-left: 6px;
        display: block;
        line-height: 19px;
        padding: 0 6px;
      }

      .atlas-preview-header .pheader-desc {
        color: #333;
        line-height: 17px;
        font-size: 12px;
        margin-top: 2px;
      }

      .atlas-preview-content {
        width: inherit;
        flex: 1;
        height: 0;
        box-sizing: border-box;
        padding: 14px 0;
        position: relative;
        overflow: hidden;
      }

      .atlas-preview-content .library-preview-bing {
        height: 100%;
        padding: 0 14px;
      }

      .atlas-preview-content .atlas-preview-items {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 30px;
        padding-right: 20px;

        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        overflow-y: auto;
      }

      .atlas-preview-content .atlas-preview-items .atlas-preview-item {
        width: 187px;
        height: 105px;
        margin-bottom: 20px;
      }

      .atlas-preview-content .atlas-preview-items .loading-next {
        width: 100%;
        text-align: center;
      }
      .atlas-preview-content .atlas-preview-items .loading-next-icon {
        display: inline-block;
        width: 80px;
        height: 40px;
      }
      .atlas-preview-content .atlas-preview-items .atlas-preview-item:nth-child(3n-1) {
        margin-left: 16px;
        margin-right: 16px;
      }

      .atlas-preview-content .apreview-items-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .atlas-preview-content .apreview-items-loading > .loading-element {
        width: 80px;
        height: 40px;
      }

      .atlas-preview-footer {
        width: 100%;
        height: 80px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .atlas-preview-footer .footer-switch-info {
        flex: 1;
        width: 0;
      }

      .atlas-preview-footer .footer-switch-wrap {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;

        font-size: 14px;
        color: #333;
      }

      .atlas-preview-footer .footer-switch-wrap .switch-text {
        white-space: nowrap;
      }

      .atlas-preview-footer .footer-switch-wrap .switch-options-wrap {
        margin-left: 6px;
        flex: 1;
        width: 0;
        position: relative;
        display: flex;
        align-items: center;
      }

      .atlas-preview-footer .switch-options-wrap .current-option {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
        display: inline-block;
      }
      .atlas-preview-footer .current-option + .option-dropdown {
        width: 14px;
        height: 14px;
        margin-left: 4px;
      }

      .atlas-preview-footer .footer-switch-wrap .switch-popup-options {
        position: absolute;
        list-style: none;
        margin: 0;
        bottom: 28px;
        left: 0;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 10px 0;
        background-color: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

        font-size: 14px;
        color: #333;
        line-height: 40px;

        opacity: 0;
        transform: scale(0.8);
        transition: opacity 100ms ease-in 0s, transform 150ms ease 0s;
        pointer-events: none;
        z-index: 1;
      }

      .atlas-preview-footer .footer-switch-wrap .switch-popup-options.active {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
      }

      .atlas-preview-footer .footer-switch-wrap .switch-popup-options .popup-option {
        width: 100%;
        box-sizing: border-box;
        padding: 0 14px;
        white-space: nowrap;
      }
      .atlas-preview-footer .footer-switch-wrap .switch-popup-options .popup-option:hover {
        background-color: #f6f6f6;
        cursor: pointer;
      }

      .atlas-preview-footer .limit-text {
        font-size: 14px;
        color: #999;
      }

      .atlas-preview-footer .ws-sure-button {
        margin-left: 6px;
        max-width: 178px;
        height: 40px;
        min-width: 80px;
      }

      .atlas-preview-footer .ws-sure-button .sure-button {
        width: 100%;
        height: 100%;
      }
    `],ul([Object(r.g)({type:Boolean})],gl.prototype,"open",void 0),ul([Object(r.g)({type:String})],gl.prototype,"atlasSource",void 0),ul([Object(r.g)({type:Object})],gl.prototype,"close",void 0),ul([Object(r.f)()],gl.prototype,"_inLoading",void 0),ul([Object(r.f)()],gl.prototype,"_inLoadingNext",void 0),ul([Object(r.f)()],gl.prototype,"_libraryItems",void 0),ul([Object(r.f)()],gl.prototype,"_atlasCount",void 0),ul([Object(r.f)()],gl.prototype,"_atlasName",void 0),ul([Object(r.f)()],gl.prototype,"_atlasDesc",void 0),ul([Object(r.f)()],gl.prototype,"_bing",void 0),gl=ul([Object(r.c)("modal-atlas-preview")],gl);var fl=i(735),ml=i.n(fl),bl=i(480),yl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let vl=class extends a.a{constructor(){super(...arguments),this._wallpaper_source_items=window.__INFINITY__.wallpaper_sources,this._itemOptionsPopup="",this._openOrCloseItemOptionsPopup=t=>{t.stopPropagation();const e=t.currentTarget,{itemPopup:i}=e.dataset;i===this._itemOptionsPopup?this._itemOptionsPopup="":this._itemOptionsPopup=i},this._editAtlasPopupShow=!1,this._isNewLibraryPopup=!1,this._library={},this._closeAtlasEditPopup=()=>{this._editAtlasPopupShow&&(this._editAtlasPopupShow=!1),this._isNewLibraryPopup&&(this._isNewLibraryPopup=!1),this._library={}},this._atlasPreviewPopupShow=!1,this._closeAtlasPreviewPopup=()=>{this._atlasPreviewPopupShow&&(this._atlasPreviewPopupShow=!1),this._atlasPreviewSource&&(this._atlasPreviewSource=null)},this._clearSideEffect=()=>{this._closeAtlasEditPopup(),this._closeAtlasPreviewPopup(),ll.a.closeIOptionsModal(),this._itemOptionsPopup=""},this._hideItemOptionsPopup=()=>this._itemOptionsPopup&&(this._itemOptionsPopup="")}_checkPSourceAndOpen(t){t.stopPropagation(),this._itemOptionsPopup="";const{dataset:e}=t.target,{psource:i,pname:o}=e;i&&("userLibrary"in e?this._openAndSetAtlasPopup(i,o):this._openAndSetAtlasPreviewPopup(i))}_createWallpaperLibrary({currentTarget:t}){let e=Array.from(t.files).filter(t=>/^image\//.test(t.type));0!==e.length&&(e.length>ll.a.maxFileLenPerUpload&&(e=e.slice(0,ll.a.maxFileLenPerUpload)),ll.a.createWallpaperLibrary(e))}_clickToCreateLibrary(t){return s.userStore.isLogin?1===ll.a.customLibrary.length?(t.preventDefault(),void Si.default.error(i18n("wallpaper_create_library_limit"))):(this._isNewLibraryPopup=!0,void this._openAndSetAtlasPopup(`${window.__INFINITY__.wpLibraryId}${Object(bl.a)()}`,i18n("add_new_wallpaper_libary"))):(t.preventDefault(),void Si.default.popupLogin())}_openAndSetAtlasPopup(t,e){this._library={libraryId:t,libraryName:e},this._editAtlasPopupShow=!0}_removeAtlas(t){V.IConfirm.create().toShow({title:i18n("confirm_remove_wallpaper_library"),text:i18n("remove_wallpaper_library_warn"),onConfirm:()=>{const e=ll.a.customLibraryMap[t];Array.isArray(e)&&s.wallpaperStore.removeCloudRecentUsedP(e.map(t=>t.id)),ll.a.removeWallpaperLibrary(t)}})}_openAndSetAtlasPreviewPopup(t){this._atlasPreviewPopupShow=!0,this._atlasPreviewSource=t}connectedCallback(){super.connectedCallback(),document.body.addEventListener("click",this._clearSideEffect)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("click",this._clearSideEffect)}render(){return r.e`
      <section class="auto-wallpaper">
        <div class="ws-items global-scrollbar" @click=${this._checkPSourceAndOpen}>
          <div class="ws-item ws-new-item">
            <label class="wsn-item-label" for="_new-upload-el" @click=${this._clickToCreateLibrary}>
              <i-usesvg class="wsn-item-icon" color="#d4d4d4" iconfont type="icon-xinjianbizhiku"></i-usesvg>
              <span class="wsn-item-text">${i18n("chose_from_mypc")}</span>
            </label>
            <input
              id="new-upload-el"
              type="file"
              accept="image/*"
              multiple
              style="display: none;"
              @change=${this._createWallpaperLibrary}
            />
          </div>

          <!-- user wallpaper library -->
          ${ll.a.customLibrary.map(({libraryId:t,libraryName:e})=>r.e`
              <div
                class="ws-item${ll.a.pSource===t?" active":""}"
                data-psource=${t}
                data-pname=${e}
                data-user-library
                @mouseleave=${this._hideItemOptionsPopup}
              >
                <i-usesvg class="ws-item-checked-icon" color="#ff8181" iconfont type="icon-xuanzhong"></i-usesvg>
                <img
                  class="ws-item-img"
                  src=${ll.a.getLibraryCoverImg(t)||ml.a}
                  decoding="async"
                  importance="auto"
                  width="200"
                />
                <div class="ws-item-info">
                  <strong class="ws-item-name">${e}</strong>
                  <span class="ws-item-desc" style="${s.userStore.isLogin?"":"display: none;"}"
                    >${i18n("wallpaper_atlas_desc",s.userStore.userInfo.name)}</span
                  >
                </div>

                <div
                  class="wsi-options-bar${this._itemOptionsPopup===t?" active":""}"
                  @click=${this._openOrCloseItemOptionsPopup}
                  data-item-popup=${t}
                  style=${s.wallpaperStore.wpSource===t?"display: none;":""}
                >
                  <div class="wsi-option-icon-wrap">
                    <i-usesvg class="wsi-option-icon" iconfont type="icon-xingzhuangjiehe" color="#fff"></i-usesvg>
                  </div>
                  <ul class="wsi-popup-options">
                    <li class="popup-option-item" @click=${()=>this._removeAtlas(t)}>
                      ${i18n("wallpaper_remove_atlas")}
                    </li>
                  </ul>
                </div>
              </div>
            `)}

          <!-- cloud -->
          ${this._wallpaper_source_items.map(({img:t,name:e,desc:i,value:o})=>r.e`
              <div class="ws-item${ll.a.pSource===o?" active":""}" data-psource=${o}>
                <i-usesvg class="ws-item-checked-icon" color="#ff8181" iconfont type="icon-xuanzhong"></i-usesvg>
                <img class="ws-item-img" src=${t} decoding="async" importance="auto" width="200" />
                <div class="ws-item-info">
                  <strong class="ws-item-name">${e}</strong>
                  <span class="ws-item-desc">${i}</span>
                </div>

                <!-- <div
                  class="wsi-options-bar${this._itemOptionsPopup===e?" active":""}"
                  @click=${this._openOrCloseItemOptionsPopup}
                  data-item-popup=${e}
                >
                  <div class="wsi-option-icon-wrap">
                    <i-usesvg class="wsi-option-icon" iconfont type="icon-xingzhuangjiehe"></i-usesvg>
                  </div>
                  <ul class="wsi-popup-options">
                    <li class="popup-option-item" @click=${()=>this._openAndSetAtlasPreviewPopup(o)}>
                      ${i18n("wallpaper_atlas_preview")}
                    </li>
                  </ul>
                </div> -->
              </div>
            `)}
        </div>

        <modal-atlas-edit
          ?open=${this._editAtlasPopupShow}
          .library=${this._library}
          .closeAtlasEditPopup=${this._closeAtlasEditPopup}
          .new=${this._isNewLibraryPopup}
        ></modal-atlas-edit>

        <modal-atlas-preview
          ?open=${this._atlasPreviewPopupShow}
          .atlasSource=${this._atlasPreviewSource}
          .close=${this._closeAtlasPreviewPopup}
        ></modal-atlas-preview>
      </section>
    `}};vl.styles=[S.a,sl],yl([Object(r.f)()],vl.prototype,"_itemOptionsPopup",void 0),yl([Object(r.f)()],vl.prototype,"_editAtlasPopupShow",void 0),yl([Object(r.f)()],vl.prototype,"_isNewLibraryPopup",void 0),yl([Object(r.f)()],vl.prototype,"_library",void 0),yl([Object(r.f)()],vl.prototype,"_atlasPreviewPopupShow",void 0),yl([Object(r.f)()],vl.prototype,"_atlasPreviewSource",void 0),vl=yl([Object(r.c)("auto-wallpaper")],vl);var wl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let xl=class extends a.a{constructor(){super(...arguments),this.type="image",this._inLoading=!1,this._showImage=({currentTarget:t})=>{this._url=this.content,this._inLoading=!1,t.style.display=""},this._loadError=({currentTarget:t})=>{t.style.display="none"}}updated(t){t.has("content")&&"color"!==this.type&&this._url!==this.content&&!this._inLoading&&(this._inLoading=!0)}render(){return r.e`
      <div
        class="wp-item-raw ${this.type}"
        style="${"color"===this.type?`background-color: ${this.content};`:""}"
      >
        ${"color"!==this.type?r.e`
              <img
                class="wp-item-image"
                src=${this.content}
                width=${Oi.imgConfig.smallWidth}
                @load=${this._showImage}
                @error=${this._loadError}
                decoding="async"
                importance="auto"
              />

              <div class="wp-item-loading pre-loading" style=${this._inLoading?"":"display: none;"}>
                <infinito-spin .isSvg=${l.p} class="pre-loading-icon" spinning></infinito-spin>
              </div>
            `:null}
      </div>
    `}};xl.styles=r.b`
    .wp-item-raw {
      width: 100%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
    }

    .wp-item-raw.color {
      border: 1px solid #e9e9e9;
      border-radius: 4px;
    }

    .wp-item-raw .wp-item-image {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
      object-position: center;
    }

    .wp-item-raw .wp-item-loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    .wp-item-raw .pre-loading {
      background-color: #f5f5f5;
    }

    .wp-item-raw .pre-loading .pre-loading-icon {
      width: 80px;
      height: 40px;
    }
  `,wl([Object(r.g)({type:String})],xl.prototype,"type",void 0),wl([Object(r.g)({type:String})],xl.prototype,"content",void 0),wl([Object(r.f)()],xl.prototype,"_inLoading",void 0),xl=wl([Object(r.c)("wp-item-raw")],xl);var kl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let _l=class extends a.a{constructor(){super(...arguments),this._emitCollectEvent=t=>{t.stopPropagation();const e=new CustomEvent("collect",{detail:this.wp.id});this.dispatchEvent(e)},this._emitLikeEvent=t=>{if(t.stopPropagation(),"cloud"!==this.wp.type)return;const e=new CustomEvent("like",{detail:this.wp.id});this.dispatchEvent(e)}}render(){return r.e`
      <div class="wp-item">
        <wp-item-raw .type=${this.wp.type} .content=${this.wp.content}></wp-item-raw>

        <div class="wp-item-mask">
          <!-- collect and like -->
          <div class="mask-wp-other">
            <i-usesvg
              iconfont
              type="icon-caozuo-shoucang-line"
              class="mask-wp-collect"
              .color=${Qs.a.includeCollection(this.wp.id)?"#ff5353":"#fff"}
              @click=${this._emitCollectEvent}
              style=${this.disableCollect?"display: none;":""}
            >
            </i-usesvg>
            <span class="mask-wp-like" @click=${this._emitLikeEvent} style=${this.disableLike?"display: none;":""}>
              <i-usesvg
                class="wp-like-icon"
                iconfont
                .color=${Qs.a.includeLiked(this.wp.id)?"#ffd45d":"#fff"}
                type="icon-zan-dianji2x"
              >
              </i-usesvg>
              <span class="wp-like-count">${this.wp.like}</span>
            </span>
          </div>
        </div>
      </div>
    `}};_l.styles=r.b`
    .wp-item {
      width: 100%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
    }

    .wp-item .wp-item-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 0;
      transition: opacity 200ms ease-in 0s;
    }

    @media only screen and (hover: none) {
      .wp-item .wp-item-mask {
        opacity: 1;
      }
    }

    .wp-item:hover .wp-item-mask {
      opacity: 1;
    }

    .wp-item .wp-item-mask .mask-wp-other {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 4px 10px;

      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

      background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
      // border-radius: 6px 6px 4px 4px;
    }

    .wp-item .wp-item-mask .mask-wp-collect {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .wp-item .wp-item-mask .mask-wp-like {
      cursor: pointer;
    }

    .wp-item .wp-item-mask .wp-like-icon {
      width: 16px;
      height: 16px;
      margin-right: 2px;
      vertical-align: middle;
    }

    .wp-item .wp-item-mask .wp-like-count {
      font-size: 12px;
      color: #fff;
      vertical-align: middle;
    }
  `,kl([Object(r.g)({type:Object})],_l.prototype,"wp",void 0),kl([Object(r.g)({type:Boolean})],_l.prototype,"disableLike",void 0),kl([Object(r.g)({type:Boolean})],_l.prototype,"disableCollect",void 0),_l=kl([Object(r.c)("wp-item")],_l);var Ol=i(364),Sl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let jl=class extends a.a{constructor(){super(...arguments),this._tabList=["cloud-wallpaper","wallpaper-auto"],this._activeTab=this._tabList[0],this._activeDefaultTab=({currentTarget:t})=>{this._$headerBar.style.left=t.dataset.barLeft,this._activeTab=this._tabList[0]},this._activeWpSource=({currentTarget:t})=>{this._$headerBar.style.left=t.dataset.barLeft,this._activeTab=this._tabList[1]},this._life_once=!1,this._lockLoadUserWp=!1}initHeaderBar(){if(this._$headerBar){if(this._$headerBar.classList.contains("active"))return;const t=this._$headerItems.item(0);this._$headerBar.style.left=t.dataset.barLeft,this._$headerBar.classList.add("active")}}_initHeaderBarPos(){if(this._$headerItems&&0!==this._$headerItems.length){let t=1;for(const e of this._$headerItems){let i=e.offsetLeft+e.clientWidth/2;1===t&&(i-=15,t++),e.dataset.barLeft=i+"px"}}}_loadUserWpNeeded(){Object(x.c)(()=>{const{isLogin:t}=Ol.userStore;t&&Qs.a.loadUserWpNeededRaw().then(()=>{this._lockLoadUserWp=!0}).catch(()=>{Si.default.error(i18n("network_error"))})})}async _afterShow(){await this.updateComplete,this._initHeaderBarPos(),this.initHeaderBar(),Js.a.initDataIfNeeded()}updated(t){t.has("open")&&this.open&&(this._life_once||(this._afterShow(),this._life_once=!0),this._lockLoadUserWp||this._loadUserWpNeeded(),this._$cloudWallpaper&&this._$cloudWallpaper.whenOpen())}render(){return r.e`
      <div class="modal-wallpaper">
        <div class="modal-wallpaper-header">
          <div class="title${this._activeTab===this._tabList[0]?" active":""}" @click=${this._activeDefaultTab}>
            ${i18n("wallpaper_choose_single")}
          </div>
          <div class="title${this._activeTab===this._tabList[1]?" active":""}" @click=${this._activeWpSource}>
            ${i18n("wallpaper_choose_library")}
          </div>
          <i class="mw-header-bar"></i>
        </div>

        <div class="modal-wallpaper-content">
          <cloud-wallpaper
            class="content-cloud-wallpaper"
            style="${this._activeTab===this._tabList[0]?"":"display: none;"}"
          >
          </cloud-wallpaper>

          <auto-wallpaper
            class="content-auto-wallpaper"
            style="${this._activeTab===this._tabList[1]?"":"display: none;"}"
          >
          </auto-wallpaper>
        </div>
      </div>
    `}};jl.styles=Ks,Sl([Object(r.g)({type:Boolean})],jl.prototype,"open",void 0),Sl([Object(r.h)(".modal-wallpaper-header .mw-header-bar")],jl.prototype,"_$headerBar",void 0),Sl([Object(r.i)(".modal-wallpaper-header .title")],jl.prototype,"_$headerItems",void 0),Sl([Object(r.f)()],jl.prototype,"_activeTab",void 0),Sl([Object(r.h)(".modal-wallpaper-content >.content-cloud-wallpaper")],jl.prototype,"_$cloudWallpaper",void 0),jl=Sl([Object(r.c)("wallpaper-default")],jl);var $l=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Il=class extends a.a{constructor(){super(...arguments),this.show=!1,this.onCloseModal=()=>s.pluginStore.hideLast()}render(){return r.e`
      <infinito-portal-entrance destination="modal-wallpaper-default">
        <infinito-modal style="--modal-padding:0px" ?open=${this.show} .onCancel=${this.onCloseModal}>
          <wallpaper-default slot="body" ?open=${this.show}></wallpaper-default>
        </infinito-modal>
      </infinito-portal-entrance>
    `}};$l([Object(r.g)({type:Boolean})],Il.prototype,"show",void 0),Il=$l([Object(r.c)("modal-wallpaper-default")],Il);var Cl=r.b`:host {
  --dot-color: #333;
  --dot-hover: #fff;
  border-radius: 4px;
}
:host([disabled]) {
  cursor: not-allowed !important;
}
:host(.active) {
  opacity: 1 !important;
  background: var(--dot-hover);
}
::slotted(li) {
  box-sizing: border-box;
  padding: 7px 14px;
  margin: 0;
  list-style: none;
  text-align: center;
  transition: all 300ms;
  font-size: 14px;
}
::slotted(li:hover) {
  background: #f5f5f5;
}
ul {
  box-sizing: border-box;
  padding: 7px 0;
  margin: 0;
}
.dot-expanded-container {
  position: relative;
}
.dot {
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  padding: 6px 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
.dot:hover {
  background: var(--dot-hover);
}
.dot span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--dot-color);
}
.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: block;
  cursor: default;
  position: fixed;
}
.drop-wrapper {
  display: none;
  position: fixed;
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  color: #333;
  z-index: 999;
  overflow: hidden;
}
.drop-wrapper.drop-open {
  display: inline-block;
}
`,Tl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let El=class extends r.a{constructor(){super(...arguments),this.isDropdown=!1,this.disabled=!1,this.liNodes=[],this.renderDot=t=>{if(t.preventDefault(),t.stopPropagation(),this.disabled)return;this.classList.add("active");const e=document.createElement("div");e.className="dot-wrapper",this.$ele=e;const i=document.createElement("div");i.className="infinity-modal";const o=document.createElement("ul");if(o.className="dot-ul",this.liNodes.forEach(t=>{t.style.cssText="",o.appendChild(t)}),e.appendChild(i),e.appendChild(o),document.body.appendChild(e),"DIV"===t.currentTarget.tagName){const e=t.currentTarget.getBoundingClientRect(),{bottom:i,right:n,top:r}=e,a=window.innerWidth,l=document.body.clientHeight;o.style.right=a-n+"px";const c=o.clientHeight,p=this.clientHeight*s.settingStore.sideScaleRatio;o.style.top=r+c+p>=l?r-c+"px":i+"px"}o.addEventListener("click",t=>{"LI"===t.target.tagName&&(document.body.removeChild(e),this.classList.remove("active"))}),i.addEventListener("click",()=>{document.body.removeChild(e),this.classList.remove("active")})}}firstUpdated(){this.dot.addEventListener("mousedown",t=>t.stopPropagation()),this.dot.addEventListener("touchstart",t=>t.stopPropagation()),this.dot.addEventListener("touchend",this.renderDot),this.dot.addEventListener("click",this.renderDot)}render(){const t={"drop-wrapper":!0,"drop-open":this.isDropdown};return r.e`
      <div class="dot-expanded-container">
        <div id="dot" class="dot">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class=${Object(G.a)(t)}>
          <ul>
            <slot id="slot" @slotchange="${this.slotChange}"></slot>
          </ul>
        </div>
      </div>
    `}slotChange(){this.requestUpdate()}updated(){const t=this.liSlot.assignedNodes();if(t&&t.length)for(let e=0;e<t.length;e++){const i=t[e];"LI"===i.tagName&&this.liNodes.push(i)}}};El.styles=Cl,Tl([Object(r.h)("#dot")],El.prototype,"dot",void 0),Tl([Object(r.h)(".drop-wrapper")],El.prototype,"dropWrapper",void 0),Tl([Object(r.h)("#slot")],El.prototype,"liSlot",void 0),Tl([Object(r.g)({type:Boolean,reflect:!0})],El.prototype,"isDropdown",void 0),Tl([Object(r.g)({type:Boolean,reflect:!0})],El.prototype,"disabled",void 0),El=Tl([Object(r.c)("i-dot-expanded")],El);var Ll=r.b`.wrapper {
  position: relative;
  width: 800px;
  border-radius: 40px;
  overflow: hidden;
}
.wrapper .close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  top: 26px;
  right: 28px;
  cursor: pointer;
  transition: opacity 300ms;
}
.wrapper .close-btn:hover {
  opacity: 0.8;
}
.wrapper .close-btn img {
  width: 14px;
  height: 14px;
}
.bg {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.bg img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.content {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  min-height: 240px;
  padding: 20px;
}
.items {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
}
.tips {
  width: 100%;
  font-size: 22px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 30px;
  margin: 0;
  text-align: center;
  word-break: break-word;
}
.setting-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 48px;
  margin-top: 27px;
  padding: 0 20px;
  background: #151515;
  border-radius: 24px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.setting-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 16px 0px rgba(110, 70, 255, 0.3);
}
.setting-btn > img {
  margin-right: 12px;
}
.hidden-option {
  margin-top: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.hidden-option .text {
  padding-left: 8px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9BA3AE;
  line-height: 17px;
}
.spacer {
  width: 1px;
  height: 160px;
  margin-top: -10px;
  background: #DEDEDE;
}
.browsers {
  display: flex;
  margin-top: 23px;
  justify-content: space-evenly;
  width: 100%;
}
.browsers.m-40 {
  justify-content: center;
}
.browsers.m-40 > div {
  width: 100px;
}
.browsers.m-40 > div:not(:last-child) {
  margin-right: 15px;
}
.browsers > div {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80px;
  cursor: pointer;
  transition: opacity 300ms;
  text-align: center;
}
.browsers > div:hover {
  opacity: 0.8;
}
.browsers > div > div {
  position: relative;
}
.browsers img {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
}
.browsers img.recommand {
  position: absolute;
  top: 0;
  right: -12px;
  width: 24px;
  height: 12px;
}
.browsers p {
  margin: 0;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9BA3AE;
  line-height: 17px;
}
.checkbox-div {
  position: relative;
  width: 13px;
  height: 13px;
}
label {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #9BA3AE;
  border-radius: 50%;
  cursor: pointer;
}
label::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 2px;
  top: 3px;
  left: 2.5px;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
input[type='checkbox'] {
  visibility: hidden;
}
input[type='checkbox']:checked + label {
  background: #000;
}
input[type='checkbox']:checked + label::after {
  opacity: 1;
}
`,Pl=i(559),Rl=i.n(Pl),Dl=i(560),Al=i.n(Dl),Ml=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const{isZh:Nl}=l.B,zl=[{name:i18n("extfans"),desc:"extfans",url:Nl?"https://www.extfans.com/productivity/nnnkddnnlpamobajfibfdgfnbcnkgngh/":"https://www.extfans.com/productivity/dbfmnekepjoapopniengjbcpnbljalfg/"}],Bl=[...Nl?zl:[],{name:i18n("chrome"),desc:"chrome",url:Nl?"https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh":"https://chrome.google.com/webstore/detail/infinity-new-tab/dbfmnekepjoapopniengjbcpnbljalfg?hl=en-US"},{name:i18n("edge"),desc:"edge",url:Nl?"https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-pro/hajlmbnnniemimmaehcefkamdadpjlfa":"https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab/aadnmeanpbokjjahcnikajejglihibpd?hl=en-US"},{name:i18n("firefox"),desc:"firefox",url:Nl?"https://addons.mozilla.org/zh-CN/firefox/addon/infinity-new-tab-pro-firefox":"https://addons.mozilla.org/en-GB/firefox/addon/infinity-new-tab"},...Nl?[]:zl].map(t=>Object.assign(Object.assign({},t),{src:i(736)(`./${t.desc}.png`)}));let Ul=class extends a.a{render(){const{webClickName:t}=s.settingStore;return r.e`
      <div class="wrapper" @click=${t=>t.stopPropagation()}>
        <div class="close-btn" @click=${()=>s.settingStore.toggleSettingHomeModal()}>
          <img src=${Rl.a} />
        </div>
        <div class="bg">
          <img
            class="btn-setting-home"
            src=${Object(ot.b)("https://infinityicon.infinitynewtab.com/assets/settinghome-guide-bg.png")}
          />
        </div>
        <div class="content">
          ${t?null:r.e`
                <div class="items">
                  ${i18n("set_infinity_to_homepage").split("_#_").filter(Boolean).map(t=>r.e` <p class="tips">${t}</p> `)}
                  <button class="setting-btn" @click=${this.handleSetting}>
                    <img
                      src="https://infinityicon.infinitynewtab.com/assets/btn-setting-home.png@2x.png"
                      width="16"
                      height="16"
                    />
                    ${i18n("set_to_homepage")}
                  </button>
                  <div class="hidden-option">
                    <div class="checkbox-div">
                      <input
                        type="checkbox"
                        id="checkbox"
                        @change=${this.handleChange}
                        .checked=${!s.settingStore.setting.view.isShowHomepageBtn}
                      />
                      <label for="checkbox"></label>
                    </div>
                    <div class="text" @click=${this.handleInpuClick}>${i18n("hide_set_homepage_btn")}</div>
                  </div>
                </div>
                <div class="spacer"></div>
              `}
          <div class="items">
            ${t?r.e`
                  <div>
                    ${i18n("set_homepage_title2").split("_#_").filter(Boolean).map(t=>r.e` <p class="tips">${t}</p> `)}
                  </div>
                `:r.e`
                  <div>
                    ${i18n("set_homepage_desc").split("_#_").filter(Boolean).map(t=>r.e` <p class="tips">${t}</p> `)}
                  </div>
                `}
            <div
              class=${Object(G.a)({browsers:!0,"m-40":t})}
            >
              ${Bl.map(t=>r.e`
                  <div class="b-items" @click=${()=>this.handleClick(t.url)}>
                    <div>
                      <img .src=${t.src} />
                      ${"extfans"===t.desc&&Nl?r.e`<img class="recommand" .src=${Al.a} />`:null}
                    </div>
                    <p>${t.name}</p>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </div>
    `}handleSetting(){Object(P.c)(location.origin+"/sethome",{isNewTab:!0})}handleClick(t){Object(P.c)(t,{isNewTab:!0})}handleChange(t){s.settingStore.toggleShowSettingHome(t.target.checked)}handleInpuClick(){const t=this.inputEle.checked;this.inputEle.checked=!t,s.settingStore.toggleShowSettingHome(this.inputEle.checked)}};Ul.styles=Ll,Ml([Object(r.h)("input")],Ul.prototype,"inputEle",void 0),Ul=Ml([Object(r.c)("setting-guide")],Ul);var Fl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Wl=class extends a.a{constructor(){super(...arguments),this.open=!0}firstUpdated(){document.body.addEventListener("click",()=>{s.settingStore.showSettingHomeModal&&s.settingStore.closeSettingHomeModal()})}render(){return r.e`
      <infinito-portal-entrance destination="setting-home-modal">
        <infinito-modal
          style="--modal-padding: 0; --border-radius: 40px;"
          .closeable=${!1}
          ?open=${s.settingStore.showSettingHomeModal}
          .onCancel=${()=>s.settingStore.toggleSettingHomeModal()}
        >
          <setting-guide slot="body"></setting-guide>
        </infinito-modal>
      </infinito-portal-entrance>
    `}};Fl([Object(r.g)({type:Boolean})],Wl.prototype,"open",void 0),Wl=Fl([Object(r.c)("setting-home")],Wl);var Hl=r.b`.wrapper {
  position: relative;
  width: 560px;
  border-radius: 40px;
  overflow: hidden;
}
.wrapper .close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  top: 26px;
  right: 28px;
  cursor: pointer;
  transition: opacity 300ms;
}
.wrapper .close-btn:hover {
  opacity: 0.8;
}
.wrapper .close-btn img {
  width: 14px;
  height: 14px;
}
.bg {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.bg img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.content {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  min-height: 170px;
  padding: 0 20px 20px;
}
.items {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
}
.tips {
  width: 100%;
  margin: 0;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 33px;
  text-align: center;
  word-break: break-word;
}
.setting-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 48px;
  margin-top: 22px;
  padding: 0 20px;
  background: #151515;
  border-radius: 24px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 300ms;
  z-index: 1;
}
.setting-btn:hover {
  background: #2B2932;
}
.setting-btn:hover > img {
  transform: translateX(4px);
}
.setting-btn > img {
  display: block;
  width: 12px;
  height: 12px;
  margin-left: 16px;
  transition: transform 0.3s ease-out;
}
.img-box img {
  position: absolute;
}
.img-box .img-1 {
  width: 21px;
  height: 21px;
  top: 199px;
  left: 85px;
  animation: animationFramesTwo 15s linear infinite;
}
.img-box .img-2 {
  width: 31px;
  height: 32px;
  top: 198px;
  right: 159px;
  animation: animationFramesOne 20s linear infinite alternate;
}
.img-box .img-3 {
  width: 21px;
  height: 21px;
  bottom: 94px;
  right: 26px;
  animation: animationFramesOne 14s linear infinite alternate;
}
.img-box .img-4 {
  width: 35px;
  height: 35px;
  bottom: 10px;
  right: 203px;
  animation: animationFramesTwo 10s linear infinite;
}
.img-box .img-5 {
  width: 19px;
  height: 20px;
  bottom: 62px;
  left: 138px;
  animation: animationFramesOne 17s linear infinite;
}
.img-box .img-6 {
  width: 31px;
  height: 35px;
  bottom: 11px;
  left: 53px;
  animation: animationFramesTwo 17s linear infinite;
}
@keyframes animationFramesOne {
  0% {
    transform: translate(0) rotate(0deg);
  }
  20% {
    transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    transform: translate(-40px, 72px) rotate(144deg);
  }
  to {
    transform: translate(0) rotate(0deg);
  }
}
@keyframes animationFramesTwo {
  0% {
    transform: translate(0) rotate(0deg) scale(1);
  }
  20% {
    transform: translate(73px, -1px) rotate(36deg) scale(0.9);
  }
  40% {
    transform: translate(141px, 72px) rotate(72deg) scale(1);
  }
  60% {
    transform: translate(83px, 122px) rotate(108deg) scale(1.2);
  }
  80% {
    transform: translate(-40px, 72px) rotate(144deg) scale(1.1);
  }
  to {
    transform: translate(0) rotate(0deg) scale(1);
  }
}
`,ql=i(561),Vl=i.n(ql),Yl=i(562),Xl=i.n(Yl),Gl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const Kl=[];for(let t=1;t<7;t++)Kl.push(i(742)(`./${t}.png`));let Ql=class extends a.a{render(){return r.e`
      <div class="wrapper" @click=${t=>t.stopPropagation()}>
        <div class="close-btn" @click=${()=>s.userStore.toggleLoginTipModal()}>
          <img src=${Vl.a} />
        </div>
        <div class="bg">
          <img
            class="btn-setting-home"
            src=${Object(ot.b)("https://infinityicon.infinitynewtab.com/assets/login-tips-bg.png")}
          />
        </div>
        <div class="content">
          <div class="items">
            <p class="tips">Hello!</p>
            <p class="tips">${i18n("you_need_login")}</p>
            <button class="setting-btn" @click=${this.handleSetting}>
              ${i18n("login_now_btn")}
              <img src=${Xl.a} width="16" height="16" />
            </button>
          </div>
        </div>
        <div class="img-box">${Kl.map((t,e)=>r.e` <img class="img-${e+1}" src=${t} /> `)}</div>
      </div>
    `}handleSetting(){s.userStore.toggleLoginTipModal(),s.userStore.openModal()}};Ql.styles=Hl,Ql=Gl([Object(r.c)("login-tips-content")],Ql);var Jl=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Zl=class extends a.a{firstUpdated(){document.querySelector('infinito-portal-destination[name="login-tips"]').addEventListener("click",()=>{s.userStore.closeLoginTipModal()})}render(){return r.e`
      <infinito-portal-entrance destination="login-tips">
        <infinito-modal
          style="--modal-padding: 0; --border-radius: 40px;"
          .closeable=${!1}
          ?open=${s.userStore.showLoginTipModal}
          .onCancel=${()=>s.userStore.toggleLoginTipModal()}
        >
          <login-tips-content slot="body"></login-tips-content>
        </infinito-modal>
      </infinito-portal-entrance>
    `}};Zl=Jl([Object(r.c)("login-tips")],Zl);var tc=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};i.e(33).then(i.bind(null,773)),i.e(31).then(i.bind(null,772)),i.e(32).then(i.bind(null,774)),i.e(38).then(i.bind(null,775)),l.l&&chrome.runtime.onMessage.addListener(({key:t,data:e})=>{switch(t){case"gmail-number-updated":s.gmailStore.update(e);break;case"tabs-update-bookmarks":O.updateBookmarks();break;case"login":s.userStore.login3rdSuccess(e);break;case"cancelLogin":s.userStore.cancelLogin();break;case"open-todo":s.pluginStore.show("infinity://todos")}}),Di.slave.listenMessage("tabs-time-to-switch-wallpaper",()=>s.wallpaperStore.timeToSwitchWallpaper()),Di.slave.listenMessage("tabs-sync",s.syncTabsStore),Di.slave.listenMessage("tabs-sync-status",s.syncStore.changeSyncStatus),Di.slave.listenMessage("tabs-reload",()=>location.reload()),Di.slave.listenMessage("websocket-sync",s.syncStore.getAutoLatest),Di.slave.listenMessage("master:created",async()=>{l.r&&await i.e(40).then(i.bind(null,767))});let ec=class extends a.a{firstUpdated(){this.addEventListener("on-close",t=>{t.stopPropagation(),this.hide()}),this.initNeededDom(["side-profile","wallpaper"])}initNeededDom(t){requestIdleCallback(e=>{for(;e.timeRemaining()&&t.length>0;)s.pluginStore.initDom(t.pop());t.length>0&&this.initNeededDom(t)})}hide(){s.pluginStore.hideLast()}render(){const{pluginsTags:t,pluginViews:e}=s.pluginStore;return r.e`
      ${t["side-profile"]?r.e`
            <i-side2 ?show=${e.includes("infinity://settings")||e.includes("profile")}>
              <side-profile></side-profile>
            </i-side2>
          `:null}
      ${t["side-weather"]?r.e`
            <i-side2 ?show="${e.includes("infinity://weather")}">
              <side-weather></side-weather>
            </i-side2>
          `:null}
      ${t["side-todos"]?r.e`
            <i-side2 ?show="${e.includes("infinity://todos")}">
              <side-todos></side-todos>
            </i-side2>
          `:null}
      ${t["side-notes"]?r.e`
            <i-side2 .duration="${250}" style="--side-width:780px" ?show="${e.includes("infinity://notes")}">
              <side-notes></side-notes>
            </i-side2>
          `:null}
      ${t["side-search"]?r.e`
            <i-side2 ?show=${e.includes("search")}>
              <side-search></side-search>
            </i-side2>
          `:null}
      ${t["side-editicon"]||B.iconEditing?r.e`
            <i-side2 ?show="${e.includes("editIcon")}">
              <side-editicon></side-editicon>
            </i-side2>
          `:null}
      ${l.l&&t["side-history"]?r.e`
            <i-side2 ?show="${e.includes("infinity://history")}">
              <side-history></side-history>
            </i-side2>
          `:null}
      ${l.l&&t["side-bookmarks"]?r.e`
            <i-side2 ?show="${e.includes("infinity://bookmarks")}">
              <side-bookmarks></side-bookmarks>
            </i-side2>
          `:null}
      ${l.l&&t["side-extension"]?r.e`
            <i-side2 ?show="${e.includes("infinity://extension")}">
              <side-extension></side-extension>
            </i-side2>
          `:null}
      <!-- 切换壁纸弹窗 -> 非自动切换类型 -->
      ${t.wallpaper?r.e`<modal-wallpaper-default
            ?show=${e.includes("infinity://wallpaper")}
          ></modal-wallpaper-default>`:null}
      ${l.l&&t["chrome-apps"]?r.e`<chrome-apps></chrome-apps>`:null}
      ${l.r?r.e`<setting-home></setting-home>`:null} ${l.r?r.e`<login-tips></login-tips>`:null}
    `}createRenderRoot(){return this}};ec=tc([Object(r.c)("plugin-box")],ec);const ic=()=>{const t=document.querySelector(".main-middle");t.classList.add("hide"),requestIdleCallback(()=>{document.querySelector(".wallpaper").classList.add("ready"),t.parentNode.removeChild(t)}),document.querySelector("newtab-main").classList.remove("hide-opacity")};let oc=0;const nc=()=>{oc+=1,setTimeout(()=>{window.__INFINITY__.startAnimationEnd?ic():oc>20?(window.__INFINITY__.startAnimationEnd=!0,ic()):nc()},30)},rc=async()=>{console.time("level1-main"),await new n.a(t=>{setTimeout(t,0),document.oncontextmenu=function(t){const e=t.composedPath()[0];return!!c.a.isInputType(e)},document.body.addEventListener("dragstart",t=>{t.preventDefault()}),c.a.send({key:"bg-open-newtab"})}),Array.prototype.filter.call(document.body.children,t=>"SCRIPT"!==t.nodeName).forEach(t=>{t.addEventListener("wheel",t=>{t.ctrlKey&&t.preventDefault()})}),window.__INFINITY__.startAnimationEnd?ic():nc(),console.timeEnd("level1-main")},ac=async()=>{window.__INFINITY__.maxLocalFileSize=5242880,window.__INFINITY__.xMaxLocalFileSize=10485760,window.__INFINITY__.minFileMaxWidthOrHeight=8192,console.time("level2-plugin"),await new n.a(t=>{setTimeout(()=>{t(null)},0)});const{createWorkBox:t}=await i.e(11).then(i.bind(null,462));await t(),console.timeEnd("level2-plugin")}}]]);