(window.webpackJsonp=window.webpackJsonp||[]).push([[30,40],{471:function(e,n,t){e.exports=t(501)},501:function(e,n,t){var i=t(502);e.exports=i},502:function(e,n,t){var i=t(503),o=Array.prototype;e.exports=function(e){var n=e.sort;return e===o||e instanceof Array&&n===o.sort?i:n}},503:function(e,n,t){t(504);var i=t(176);e.exports=i("Array").sort},504:function(e,n,t){"use strict";var i=t(27),o=t(49),a=t(72),r=t(127),s=t(18),c=t(505),u=t(244),f=t(506),l=t(507),m=t(175),d=t(508),g=[],h=g.sort,w=s((function(){g.sort(void 0)})),p=s((function(){g.sort(null)})),b=u("sort"),v=!s((function(){if(m)return m<70;if(!(f&&f>3)){if(l)return!0;if(d)return d<603;var e,n,t,i,o="";for(e=65;e<76;e++){switch(n=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(i=0;i<47;i++)g.push({k:n+i,v:t})}for(g.sort((function(e,n){return n.v-e.v})),i=0;i<g.length;i++)n=g[i].k.charAt(0),o.charAt(o.length-1)!==n&&(o+=n);return"DGBEFHACIJK"!==o}}));i({target:"Array",proto:!0,forced:w||!p||!b||!v},{sort:function(e){void 0!==e&&o(e);var n=a(this);if(v)return void 0===e?h.call(n):h.call(n,e);var t,i,s=[],u=r(n.length);for(i=0;i<u;i++)i in n&&s.push(n[i]);for(t=(s=c(s,function(e){return function(n,t){return void 0===t?-1:void 0===n?1:void 0!==e?+e(n,t)||0:String(n)>String(t)?1:-1}}(e))).length,i=0;i<t;)n[i]=s[i++];for(;i<u;)delete n[i++];return n}})},505:function(e,n){var t=Math.floor,i=function(e,n){var r=e.length,s=t(r/2);return r<8?o(e,n):a(i(e.slice(0,s),n),i(e.slice(s),n),n)},o=function(e,n){for(var t,i,o=e.length,a=1;a<o;){for(i=a,t=e[a];i&&n(e[i-1],t)>0;)e[i]=e[--i];i!==a++&&(e[i]=t)}return e},a=function(e,n,t){for(var i=e.length,o=n.length,a=0,r=0,s=[];a<i||r<o;)a<i&&r<o?s.push(t(e[a],n[r])<=0?e[a++]:n[r++]):s.push(a<i?e[a++]:n[r++]);return s};e.exports=i},506:function(e,n,t){var i=t(178).match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},507:function(e,n,t){var i=t(178);e.exports=/MSIE|Trident/.test(i)},508:function(e,n,t){var i=t(178).match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},767:function(e,n,t){"use strict";t.r(n);t(10);var i=t(7),o=t.n(i),a=(t(52),t(13),t(16),t(22));function r(e){return new o.a(n=>{const t=new Image;t.onload=function(){t.onload=null,n(t)},t.src=e})}var s=t(23);var c=t(0),u=t(471),f=t.n(u);t(17),t(44),t(285);const l=function(){function e(e){return/cpu (?:iphone )?os (\d+_\d+)/.test(e)?parseFloat(RegExp.$1.replace("_",".")):2}const n={result:"Chrome",details:{Chrome:5,Chromium:0,_360SE:0,_360EE:0},sorted:["Chrome","360SE","360EE","Chromium"],exec:function(e){const n={Chrome:5,Chromium:0,_360SE:0,_360EE:0},t=window.navigator.userAgent;if(/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(t)){if("Win32"==window.navigator.platform){if(window.clientInformation.languages||(n._360SE+=8),/zh/i.test(navigator.language)&&(n._360SE+=3,n._360EE+=3),window.clientInformation.languages){const e=window.clientInformation.languages.length;e>=3?(n.Chrome+=10,n.Chromium+=6):2==e?(n.Chrome+=3,n.Chromium+=6,n._360EE+=6):1==e&&(n.Chrome+=4,n.Chromium+=4)}for(var i in window.navigator.plugins)"np-mswmp.dll"==window.navigator.plugins[i].filename&&(n._360SE+=20,n._360EE+=20);window.chrome.webstore?Object.keys(window.chrome.webstore).length<=1?n._360SE+=7:2==Object.keys(window.chrome.webstore).length&&(n._360SE+=4,n.Chromium+=3):(n._360SE+=20,n._360EE+=20),window.navigator.plugins.length>=30?(n._360EE+=7,n._360SE+=7,n.Chrome+=7):window.navigator.plugins.length<30&&window.navigator.plugins.length>10?(n._360EE+=3,n._360SE+=3,n.Chrome+=3):window.navigator.plugins.length<=10&&(n.Chromium+=6)}else n._360SE-=50,n._360EE-=50,/Linux/i.test(window.navigator.userAgent)&&(n.Chromium+=5);let e,t=0;for(var i in window.navigator.plugins)if(e=/^(.+) PDF Viewer$/.exec(window.navigator.plugins[i].name)){if("Chrome"==e[1]){n.Chrome+=6,n._360SE+=6,t=1;break}if("Chromium"==e[1]){n.Chromium+=10,n._360EE+=6,t=1;break}}t||(n.Chromium+=9)}const o=new Object;o.Chrome=n.Chrome,o.Chromium=n.Chromium,o["360SE"]=n._360SE,o["360EE"]=n._360EE;const a=[];for(const e in o)a.push([e,o[e]]);return f()(a).call(a,(e,n)=>n[1]-e[1]),this.sorted=a,this.details=n,this.result=a[0][0],"result"==e?a[0][0]:"details"==e?o:"sorted"==e?a:void 0}};function t(e){if(void 0!==window.scrollMaxX)return"";document.createElement("track");const t=window.navigator.appVersion,i=window.external;if(i&&"SEVersion"in i)return"sougou";if(i&&"LiebaoGetVersion"in i)return"liebao";if(/QQBrowser/.test(t))return"qq";if(/Maxthon/.test(t))return"maxthon";if(/TaoBrowser/.test(t))return"taobao";if(/BIDUBrowser/.test(t))return"baidu";if(/UBrowser/.test(t))return"uc";if(/\sOPR\//.test(t)||/Opera/.test(t)||window.navigator.vendor&&0===window.navigator.vendor.indexOf("Opera"))return"opera";const o=navigator.platform.toLowerCase();return 0==o.indexOf("mac")||0==o.indexOf("linux")||parseInt(e)>86?"chrome":function(){const e=window.navigator.userAgent;try{if(n.exec(),/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(e))return n.result}catch(e){console.warn(e)}}()||"chrome"}return function(){const n={},i=navigator.userAgent.toLowerCase();let o;if(o=i.match(/rv:([\d.]+)\) like gecko/))n.name="ie",n.ie=o[1];else if(o=i.match(/msie ([\d.]+)/))n.name="ie",n.ie=o[1];else if(o=i.match(/edg\/([\d.]+)/))n.name="edge",n.edge=o[1];else if(o=i.match(/firefox\/([\d.]+)/))n.name="firefox",n.firefox=o[1];else if(o=i.match(/chrome\/([\d.]+)/)){n.name="chrome",n.chrome=o[1];const e=t(n.chrome);e&&(n.chrome+="("+e+")")}else(o=i.match(/opera.([\d.]+)/))?(n.name="opera",n.opera=o[1]):(o=i.match(/version\/([\d.]+).*safari/))?(n.name="safari",n.safari=o[1]):(n.name="unknown",n.unknow=0);const a={};if(i.indexOf("iphone")>-1)a.name="iphone",a.iphone=e(i);else if(i.indexOf("ipod")>-1)a.name="ipod",a.ipod=e(i);else if(i.indexOf("ipad")>-1)a.name="ipad",a.ipad=e(i);else if(i.indexOf("nokia")>-1)a.name="nokia",a.nokia=!0;else if(/android (\d+\.\d+)/.test(i))a.name="android",a.android=parseFloat(RegExp.$1);else if(i.indexOf("win")>-1){if(a.name="win",/win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(i))if("nt"==RegExp.$1)switch(RegExp.$2){case"5.0":a.win="2000";break;case"5.1":a.win="XP";break;case"6.0":a.win="Vista";break;case"6.1":a.win="7";break;case"6.2":a.win="8";break;case"6.3":a.win="8.1";break;case"10.0":a.win="10";break;default:a.win="NT"}else"9x"==RegExp.$1?a.win="ME":a.win=RegExp.$1}else i.indexOf("mac")>-1?a.name="mac":i.indexOf("linux")>-1&&(a.name="linux");const r=a.name+(a[a.name]||"")+"|"+n.name+n[n.name];return{browser:n,system:a,isMobile:a.android||a.iphone||a.ios||a.ipad||a.ipod||a.nokia,string:r}}()}();let m=l.browser.name;if("chrome"===m){const e=l.browser.chrome;e.includes("(qq")?m="qq":e.includes("(sougou)")?m="sogou":c.D?m="360p":e.includes("(360EE")&&(m="360safe")}var d=t(196);const g=[async function(){const e=await Object(a.b)("store-weather",!0),{list:n}=e,t=[];if(!(null==n?void 0:n.length))return;n.map(e=>t.push(...e.items));let i=t.map(e=>e.conditionCode);i=[...new Set(i)],await o.a.all(i.map(e=>r(`https://infinityicon.infinitynewtab.com/assets/weather/code_${Number(e)}.png`)))},async function(){try{const e=(await Object(a.b)("store-search",!1)).list;await o.a.all(e.map(({logo:e})=>r(Object(s.b)(e))))}catch(e){}},async function(){try{const e=(await Object(a.b)("store-notes",!0)).list,n=[];e.forEach(({content:e})=>{const t=document.createElement("div");t.innerHTML=e;t.querySelectorAll("img").forEach(e=>{n.push(r(e.getAttribute("src")))})}),await o.a.all(n)}catch(e){}},async function(){const e=["error.png","loading.png","network-error.png","success.png"].map(e=>Object(s.a)(e,!1));try{const n=[];n.push(...e.map(e=>r(e))),await o.a.all(n)}catch(e){}},async function(){var e;const n=Object(s.a)("syncing.png",!1),t=Object(s.a)("sync_failed.png",!1),i=Object(s.a)("add_engine.gif",!1),u=Object(s.a)("setting/animate-default.png"),f=Object(s.a)("setting/animate-default-active.png"),l=Object(s.a)("setting/animate-bounce.png"),g=Object(s.a)("setting/animate-bounce-active.png"),h=Object(s.a)("setting/animate-easin.png"),w=Object(s.a)("setting/animate-easin-active.png"),p=Object(s.a)("setting/edit.svg",!1),b=Object(s.a)("back.svg",!1),v=Object(s.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg.png");let E=[];["360p","360safe"].includes(m)?E=[]:["360safe","qq","sogou","chrome","safari","edge","firefox"].includes(m)&&(E=[1,2]),!c.B.isZh&&["360safe","qq","sogou"].includes(m)&&(E=[]),E.length&&(E=E.map(e=>Object(s.b)(`https://infinityicon.infinitynewtab.com/assets/set_homepage/browser/${m}/${c.B.lang}-${e}.jpg`)));try{const s=await Object(a.b)("store-user",!1),c=(null===(e=null==s?void 0:s.userInfo)||void 0===e?void 0:e.avatar)||d.f;await o.a.all([c,n,t,i,u,l,h,b,f,g,w,p,v,...E].filter(Boolean).map(e=>r(e)))}catch(e){}}];!function e(){requestIdleCallback(async n=>{for(;n.timeRemaining()>0&&g.length>0;)await g.pop()();g.length>0&&e()})}()}}]);