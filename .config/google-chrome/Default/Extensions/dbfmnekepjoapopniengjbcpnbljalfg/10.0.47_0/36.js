(window.webpackJsonp=window.webpackJsonp||[]).push([[36,39,42],{345:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(10),n(13),n(16),n(52);var r=n(0);var a=(new Date).valueOf();function o(){return a++}var i=function(t){return localStorage.getItem(t)},s=function(t,e){localStorage.setItem(t,e)};function c(t){var e=[];for(var n in t){var r=t[n];null!=r&&!1!==r&&(!0===r&&(r=1),e.push(encodeURIComponent(n)+"="+encodeURIComponent(r)))}return e.join("&")}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n,r=this.baseInfo={v:1,tid:e.trackingId,uid:e.userId},a=i("ga:clientId");a||(n=Date.now()+performance.now(),a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})),s("ga:clientId",a)),r.cid=a,this.systemInfo={sr:screen.width+"x"+window.screen.height,sd:screen.colorDepth+"-bits",ul:navigator.language},this.extraInfo={dl:location.href.split("#")[0]}}return l(t,[{key:"getEventUrl",value:function(t){return this.getSendUrl("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"event",value:function(t){return this.send("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"getPageviewUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.getSendUrl("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"pageview",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.send("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"send",value:function(t,e){var n=u({_t:o(),t:t},this.baseInfo,this.systemInfo,e),r=this.extraInfo;for(var a in r)null==n[a]&&(n[a]=r[a]);var i=new XMLHttpRequest,s="https://www.google-analytics.com/collect?"+c(n);return i.open("GET",s,!0),i.send(null),s}},{key:"getSendUrl",value:function(t,e){var n=u({_t:o(),t:t},this.baseInfo,this.systemInfo,e),r=this.extraInfo;for(var a in r)null==n[a]&&(n[a]=r[a]);return"https://www.google-analytics.com/collect?"+c(n)}}]),t}();f.version="1.0.2";var d=f,g=n(48),h=n.n(g);var p=n(174),v=n(81);const y=new class{constructor(){this.ga=null,this.localKey="analytics-status-time",this.gap=432e5,this.getPermission=async()=>{let t=!0;if(r.n)try{const{privacyStore:e}=await Promise.all([n.e(5),n.e(6),n.e(42)]).then(n.bind(null,468));1!==e.collectData&&(t=!1)}catch(e){t=!1}return t},this.trySendStatus=t=>{const e=localStorage.getItem(this.localKey);e?(Date.now()-Number(e)>this.gap||Number(e)>Date.now())&&this.sendStatus(t):this.sendStatus(t)},this.sendPageView=async t=>{if(!await this.getPermission())return;const e=this.ga.getPageviewUrl(t);v.c.sendLog(e)},this.sendEvent=async(t,e=!1)=>{await this.getPermission()&&Object.keys(t).forEach(n=>{const r=t[n];if("object"==typeof r)Object.keys(r).forEach(t=>{const a=r[t],o=this.ga.getEventUrl({category:n,action:t,label:String(a),nonInteraction:e});v.c.sendLog(o)});else{const t=this.ga.getEventUrl({category:n,action:String(r),nonInteraction:e});v.c.sendLog(t)}})},this.sendBaidu=async t=>{await this.getPermission()&&(r.r?(async(t="")=>{const e=r.B.runtimePlatform;if(null==t?void 0:t.includes("baidu.com")){const n=new h.a(t).searchParams.get("tn");navigator.sendBeacon(`https://manage-api.infinitytab.com/analysis-manager/send/60efd763a741942ac60374e1?label=${r.A.baiduLabel}&action=${n}&event=${e}`)}})(t):p.slave.postTask("slave:fetch",{service:"sendSearchAnalytics",params:[t]}))},this.ga=new d({trackingId:r.A.trackingId})}async sendStatus(t){try{this.sendEvent(t,!0),localStorage.setItem(this.localKey,""+Date.now())}catch(t){}}}},468:function(t,e,n){"use strict";n.r(e),n.d(e,"LocalSync",(function(){return a.a})),n.d(e,"syncTabsStore",(function(){return a.b})),n.d(e,"pluginStore",(function(){return o.pluginStore})),n.d(e,"userStore",(function(){return i.userStore})),n.d(e,"settingStore",(function(){return s.b})),n.d(e,"requestCalcSize",(function(){return s.a})),n.d(e,"siteStore",(function(){return c.a})),n.d(e,"searchStore",(function(){return l.a})),n.d(e,"wallpaperStore",(function(){return u.a})),n.d(e,"todoStore",(function(){return f.a})),n.d(e,"noteStore",(function(){return d.a})),n.d(e,"weatherStore",(function(){return g.weatherStore})),n.d(e,"gmailStore",(function(){return v})),n.d(e,"syncStore",(function(){return y.syncStore})),n.d(e,"privacyStore",(function(){return m}));var r=n(8),a=n(363),o=n(365),i=n(364),s=n(470),c=n(475),l=n(476),u=n(469),f=n(472),d=n(477),g=n(473),h=(n(13),n(16),function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i});class p extends a.a{constructor(){super(...arguments),this.unreadEmailCount=null}update(t){this.unreadEmailCount!==t&&(this.unreadEmailCount=t)}}h([r.g],p.prototype,"unreadEmailCount",void 0),h([r.b],p.prototype,"update",null);const v=new p;v.initSyncStore("store-gmail",["unreadEmailCount"]);var y=n(461),w=function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};class b extends a.a{constructor(){super(...arguments),this.userDate=0,this.collectData=0}agreeUserData(){this.userDate=1}refuseUserData(){this.userDate=-1}resetUserData(){this.userDate=0}agreeCollectData(){this.collectData=1}refuseCollectData(){this.collectData=-1}}w([r.g],b.prototype,"userDate",void 0),w([r.g],b.prototype,"collectData",void 0),w([r.b],b.prototype,"agreeUserData",null),w([r.b],b.prototype,"refuseUserData",null),w([r.b],b.prototype,"resetUserData",null),w([r.b],b.prototype,"agreeCollectData",null),w([r.b],b.prototype,"refuseCollectData",null);const m=new b;m.initSyncStore("store-privacy",["userDate","collectData"]),Object(r.f)({enforceActions:"observed"})}}]);