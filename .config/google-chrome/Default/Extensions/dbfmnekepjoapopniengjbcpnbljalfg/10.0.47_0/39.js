(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{345:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(10),n(13),n(16),n(52);var a=n(0);var o=(new Date).valueOf();function i(){return o++}var r=function(t){return localStorage.getItem(t)},s=function(t,e){localStorage.setItem(t,e)};function c(t){var e=[];for(var n in t){var a=t[n];null!=a&&!1!==a&&(!0===a&&(a=1),e.push(encodeURIComponent(n)+"="+encodeURIComponent(a)))}return e.join("&")}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n,a=this.baseInfo={v:1,tid:e.trackingId,uid:e.userId},o=r("ga:clientId");o||(n=Date.now()+performance.now(),o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})),s("ga:clientId",o)),a.cid=o,this.systemInfo={sr:screen.width+"x"+window.screen.height,sd:screen.colorDepth+"-bits",ul:navigator.language},this.extraInfo={dl:location.href.split("#")[0]}}return l(t,[{key:"getEventUrl",value:function(t){return this.getSendUrl("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"event",value:function(t){return this.send("event",{ec:t.category,ea:t.action,el:t.label,ev:t.value,ni:!0===t.nonInteraction})}},{key:"getPageviewUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.getSendUrl("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"pageview",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return e.send("pageview",{dl:t.location,dh:t.host,dp:t.page,dt:t.title||document.title})}},{key:"send",value:function(t,e){var n=u({_t:i(),t:t},this.baseInfo,this.systemInfo,e),a=this.extraInfo;for(var o in a)null==n[o]&&(n[o]=a[o]);var r=new XMLHttpRequest,s="https://www.google-analytics.com/collect?"+c(n);return r.open("GET",s,!0),r.send(null),s}},{key:"getSendUrl",value:function(t,e){var n=u({_t:i(),t:t},this.baseInfo,this.systemInfo,e),a=this.extraInfo;for(var o in a)null==n[o]&&(n[o]=a[o]);return"https://www.google-analytics.com/collect?"+c(n)}}]),t}();g.version="1.0.2";var h=g,d=n(48),v=n.n(d);var f=n(174),y=n(81);const w=new class{constructor(){this.ga=null,this.localKey="analytics-status-time",this.gap=432e5,this.getPermission=async()=>{let t=!0;if(a.n)try{const{privacyStore:e}=await Promise.all([n.e(5),n.e(6),n.e(42)]).then(n.bind(null,468));1!==e.collectData&&(t=!1)}catch(e){t=!1}return t},this.trySendStatus=t=>{const e=localStorage.getItem(this.localKey);e?(Date.now()-Number(e)>this.gap||Number(e)>Date.now())&&this.sendStatus(t):this.sendStatus(t)},this.sendPageView=async t=>{if(!await this.getPermission())return;const e=this.ga.getPageviewUrl(t);y.c.sendLog(e)},this.sendEvent=async(t,e=!1)=>{await this.getPermission()&&Object.keys(t).forEach(n=>{const a=t[n];if("object"==typeof a)Object.keys(a).forEach(t=>{const o=a[t],i=this.ga.getEventUrl({category:n,action:t,label:String(o),nonInteraction:e});y.c.sendLog(i)});else{const t=this.ga.getEventUrl({category:n,action:String(a),nonInteraction:e});y.c.sendLog(t)}})},this.sendBaidu=async t=>{await this.getPermission()&&(a.r?(async(t="")=>{const e=a.B.runtimePlatform;if(null==t?void 0:t.includes("baidu.com")){const n=new v.a(t).searchParams.get("tn");navigator.sendBeacon(`https://manage-api.infinitytab.com/analysis-manager/send/60efd763a741942ac60374e1?label=${a.A.baiduLabel}&action=${n}&event=${e}`)}})(t):f.slave.postTask("slave:fetch",{service:"sendSearchAnalytics",params:[t]}))},this.ga=new h({trackingId:a.A.trackingId})}async sendStatus(t){try{this.sendEvent(t,!0),localStorage.setItem(this.localKey,""+Date.now())}catch(t){}}}}}]);