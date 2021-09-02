(window.webpackJsonp=window.webpackJsonp||[]).push([[29,7,12,37],{120:function(e,t,o){"use strict";o.r(t),o.d(t,"iMessage",(function(){return u})),o.d(t,"message",(function(){return d}));o(13),o(16);var i=o(344),s=o(1),n=o(335),r=o(366),a=o.n(r),c=o(367),l=o.n(c),p=function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let u=class extends s.a{constructor(){super(...arguments),this.content="",this.type="error"}render(){const e={"infinity-message":!0,"position-top":"top"===this.type};return s.e`
      <div class=${Object(n.a)(e)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `}renderImg(){return"error"===this.type?s.e`<img .src=${a.a} />`:"warn"===this.type?s.e`<img .src=${l.a} />`:void 0}};u.styles=s.b`
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
  `,p([Object(s.g)({type:String})],u.prototype,"content",void 0),p([Object(s.g)({type:String})],u.prototype,"type",void 0),u=p([Object(s.c)("i-message")],u);const d={newInstance:function(e,t=2,o,i){let s;if(document.querySelector("i-message"))return void clearInterval(s);const n=document.createElement("i-message");return n.setAttribute("content",e),n.setAttribute("type",o),document.body.appendChild(n),0!==t&&(s=setTimeout(()=>{document.body.removeChild(n),i&&i()},1e3*t)),n},error:function(e,t,o){i.default.error(e,t),o&&setTimeout(o,t)},success:function(e,t,o){i.default.success(e,t),o&&setTimeout(o,t)},top:function(e,t,o){const i=this.newInstance(e,t,"top",o);setTimeout(()=>null==i?void 0:i.classList.add("anim"))},warn:function(e,t,o){this.newInstance(e,t,"warn",o)}}},174:function(e,t,o){"use strict";o.r(t),o.d(t,"slave",(function(){return a}));o(10),o(13),o(16),o(52);var i=o(7),s=o.n(i),n=o(253),r=o(121);const a=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new n.a,this.initChannel=()=>{"serviceworker"===r.b?this.initServiceworker():"background"===r.b&&this.initBackground()},this.awaitChannel=()=>new s.a(async(e,t)=>{"serviceworker"===r.b?this.channel?(await this.channel.active,await this.channel.controlling,e(null)):(this.initResolve.push(e),this.initReject.push(t)):"background"===r.b&&e(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:e}=await o.e(11).then(o.bind(null,462)),t=await e();if(!t)return;t.addEventListener("message",e=>{const{type:t,payload:o={}}=e.data;"master:bordcast-message"===t&&this.messageScheduler.execTask(o.type,o.payload)}),await t.active,await t.controlling,this.channel=t,this.initResolve.forEach(e=>{e()}),this.channel.postTask=this.channel.messageSW}catch(e){console.log("slave初始化错误：",e),this.initReject.forEach(e=>{e()})}},this.initBackground=()=>{this.channel={postTask:e=>new s.a((t,o)=>{chrome.runtime.sendMessage(e,e=>{chrome.runtime.lastError&&o(chrome.runtime.lastError),t(e)})})},chrome.runtime.onMessage.addListener(({type:e,payload:t,ignoreId:o})=>{"master:bordcast-message"===e?chrome.tabs.getCurrent(e=>{o!==e.id&&this.messageScheduler.execTask(t.type,t.payload)}):"slave:bordcast-message"===e&&this.messageScheduler.execTask(t.data.type,t.data.payload)})},r.a)throw new Error("it's not page");this.initChannel()}postTask(e,t,o){return new s.a(async(i,s)=>{let n=!1;await this.awaitChannel();const a=Object.assign(Object.assign(Object.assign({},r.d),{taskId:Object(r.c)()}),o);a.timeout&&setTimeout(()=>{n||i({error:"timeout"})},a.timeout);try{const o=await this.channel.postTask({type:e,payload:Object.assign({data:t},a)});n=!0,i(o)}catch(e){i({error:e})}})}listenMessage(e,t){this.messageScheduler.listenTask(e,t)}sendMessage(e,t=""){this.postTask("slave:bordcast-message",{type:e,payload:t})}}},242:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var i=o(8);const s=Symbol("LitMobxRenderReaction"),n=Symbol("LitMobxRequestUpdate");var r=o(1);class a extends(function(e){var t,o;return o=class extends e{constructor(){super(...arguments),this[t]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const e=this.constructor.name||this.nodeName;this[s]=new i.a(e+".update()",this[n]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[s]&&(this[s].dispose(),this[s]=void 0)}update(e){this[s]?this[s].track(super.update.bind(this,e)):super.update(e)}},t=n,o}(r.a)){}},335:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var i=o(125);
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
 */class s{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const n=new WeakMap,r=Object(i.e)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.c||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=t,{element:r}=o;let a=n.get(t);void 0===a&&(r.setAttribute("class",o.strings.join(" ")),n.set(t,a=new Set));const c=r.classList||new s(r);a.forEach(t=>{t in e||(c.remove(t),a.delete(t))});for(const t in e){const o=e[t];o!=a.has(t)&&(o?(c.add(t),a.add(t)):(c.remove(t),a.delete(t)))}"function"==typeof c.commit&&c.commit()})},344:function(e,t,o){"use strict";o.r(t);var i=o(7),s=o.n(i),n=(o(13),o(16),o(242)),r=o(364),a=o(1),c=o(8),l=a.b`.i-bubble {
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
`,p=o(21),u=o(23),d=function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const h=Object(u.a)("network-error.png",!1),b=Object(u.a)("error.png",!1),g=Object(u.a)("success.png",!1),y=Object(u.a)("loading.png",!1);class f extends n.a{constructor(){super(...arguments),this.popup=!1,this.showButton=!1}static _timeToHideHandler(e){if(e.showButton){const t=e.shadowRoot.querySelector(".i-bubble .i-bubble-button");t.onclick&&(t.onclick=null)}const t=e.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");let o=!1;const i=()=>{e.onmouseenter=null,e.onmouseleave=null,document.body.contains(e)&&document.body.removeChild(e),o=!0};t.addEventListener("transitionend",i,{once:!0}),t.addEventListener("transitioncancel",i,{once:!0}),setTimeout(()=>{o||i()},150),e.setPopup(!1)}static _setTimerToHide(e,t){this._clearTimerToHide(e),e.hideTimer=setTimeout(()=>this._timeToHideHandler(e),t)}static _clearTimerToHide(e){e.hideTimer&&(clearTimeout(e.hideTimer),e.hideTimer=null)}static _messageMisc(e,t,o){this.setText(e),document.body.appendChild(this),window.customElements.whenDefined("i-bubble").then(()=>(this.offsetWidth,this.setPopup(!0),new s.a(e=>requestAnimationFrame(e)))).then(()=>{o&&o(this)}),t>0&&f._setTimerToHide(this,t)}static message(e,t){const o=document.createElement("i-bubble");o.setType("message"),t=null!=t?t:this.duration,this._messageMisc.call(o,e,t)}static networkError(e,t){const o=document.createElement("i-bubble");o.setType("network-error"),t=null!=t?t:this.duration,this._messageMisc.call(o,e,t)}static success(e,t){const o=document.createElement("i-bubble");o.setType("success"),t=null!=t?t:this.duration,this._messageMisc.call(o,e,t)}static error(e,t){const o=document.createElement("i-bubble");o.setType("error"),t=null!=t?t:this.duration,this._messageMisc.call(o,e,t)}static popupLogin(e){const t=this.popup(i18n("reqeust_login_message"),{showButton:!0,btnValue:i18n("to_login"),type:"message",onBtnClick:null!=e?e:()=>{r.userStore.openModal()}}),o=Date.now();let i=this.duration2;t.onmouseenter=()=>{i=Date.now()-o,f._clearTimerToHide(t)},t.onmouseleave=()=>{f._setTimerToHide(t,i)}}static popupLoading(e){const t=this.popup(i18n("wallpaper_loading"),{duration:0,showButton:!0,btnValue:i18n("cancel"),type:"loading",onBtnClick:e});return()=>setTimeout(()=>this._timeToHideHandler(t),f.waitForReady)}static loading(e){const t=this.popup(e,{type:"loading",duration:0});return()=>setTimeout(()=>this._timeToHideHandler(t),f.waitForReady)}static popup(e,t){const{duration:o=this.duration2,btnValue:i,onBtnClick:s,type:n,showButton:r}=t,a=document.createElement("i-bubble");return a.setType(n),i&&a.setBtnValue(i),r&&a.setShowButton(r),this._messageMisc.call(a,e,o,()=>{if(a.showButton){a.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick=e=>{s&&s(e),this._timeToHideHandler(a)}}}),a}firstUpdated(){const e="\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ",t=document.createElement("style");t.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${h});${e}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${g});${e}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${b});${e}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${y});${e}\n      }\n      `)),this.shadowRoot.appendChild(t)}render(){return a.e`
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
    `}setType(e){this.type=e}setText(e){this.text=e}setBtnValue(e){this.btnValue=e}setPopup(e){this.popup=e}setShowButton(e){this.showButton=e}}f.duration=3e3,f.duration2=5e3,f.waitForReady=1e3/60,f.styles=l,d([c.g],f.prototype,"type",void 0),d([c.g],f.prototype,"text",void 0),d([c.g],f.prototype,"btnValue",void 0),d([c.g],f.prototype,"popup",void 0),d([c.g],f.prototype,"showButton",void 0),d([c.b],f.prototype,"setType",null),d([c.b],f.prototype,"setText",null),d([c.b],f.prototype,"setBtnValue",null),d([c.b],f.prototype,"setPopup",null),d([c.b],f.prototype,"setShowButton",null),window.customElements.define("i-bubble",f);t.default=f},346:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return n}));o(13),o(16);class i{constructor(){this._caches={},this._setCaches=e=>(...t)=>{this._caches[e]=t}}}const s=[],n=e=>new Proxy(e,{set:(e,t,o)=>null===o?(e[t]=o,!0):"function"==typeof e[t]?(console.warn("失败：重复注册"),!0):(e[t]=o,s.includes(t)&&delete e._caches[t],e._caches.hasOwnProperty(t)&&(e[t](...e._caches[t]),delete e._caches[t]),!0),get:(e,t)=>"function"==typeof e[t]?e[t]:e._setCaches(t)})},363:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return p}));o(13),o(16),o(10),o(52);var i=o(8),s=o(22),n=o(174),r=function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const a={},c=new Set;class l{constructor(){this.firstSync=!1,this.syncTabTime=0,this._lockRollback=!1,this.isRollbackFromStorage=!1,this.backupFileKey="",this.backupValueKeys=[],this.rollbackFromStorage=()=>null,this.stopToStorageReaction=()=>{},this.stopAutoBackupReaction=()=>{},this.convertBackupEquals=e=>e}async initSyncStore(e,t,o={},r,c=20){if(a[e])throw new Error("storage key 重复");a[e]=this,0!==t.length&&(this.rollbackFromStorage=async()=>{let n=!1;const a=Object.create(null);Object.keys(o).forEach(e=>{t.includes(e)&&(a[e]=o[e])});try{const o=await Object(s.b)(e,r),i=o?Object.keys(o):[];o&&i.forEach(e=>{t.includes(e)&&(a[e]=o[e])}),this.firstSync||o&&!t.some(e=>!i.includes(e))||(n=!0)}catch(e){console.error("storageSync",e)}this.isRollbackFromStorage=!0,this.stopToStorageReaction(),this.stopAutoBackupReaction(),Object(i.i)(()=>{for(const e in a)this[e]=a[e];this.firstSync||(this.firstSync=!0)}),this.restartAutoBackupReaction(),this.stopToStorageReaction=Object(i.h)(()=>{const e={};return t.forEach(t=>{e[t]=Object(i.j)(this[t])}),e},t=>{this.isRollbackFromStorage=!1,Object(s.e)(e,t,r),Object(i.i)(()=>{this.syncTabTime=Date.now()})},{equals:i.d.structural,delay:c,fireImmediately:n})},await this.rollbackFromStorage(),Object(i.h)(()=>this.syncTabTime,t=>{t&&n.slave.sendMessage("tabs-sync",e)},{delay:60}))}restartAutoBackupReaction(e=!1){this.stopAutoBackupReaction(),this.stopAutoBackupReaction=Object(i.h)(()=>{const e={};return this.backupValueKeys.forEach(t=>{e[t]=Object(i.j)(this[t])}),e},e=>{(async(e,t)=>{try{const{syncStore:i}=await Promise.all([o.e(5),o.e(6),o.e(39)]).then(o.bind(null,461));i.pushAutoBackupPipe({[e]:t})}catch(e){}})(this.backupFileKey,e).catch()},{fireImmediately:e,equals:(e,t)=>{const o=this.convertBackupEquals(e),s=this.convertBackupEquals(t);return i.d.structural(o,s)},delay:40})}initAutoBackup(e,t){if(c.has(e))throw new Error("file key 重复");c.add(e),0!==t.length&&(this.backupFileKey=e,this.backupValueKeys=[...t])}async getBackupData(){const e={};return this.backupValueKeys.forEach(t=>{e[t]=Object(i.j)(this[t])}),e}}r([i.g],l.prototype,"firstSync",void 0),r([i.g],l.prototype,"syncTabTime",void 0),r([i.b],l.prototype,"initSyncStore",null);const p=e=>{const t=a[e];(null==t?void 0:t._lockRollback)||t.rollbackFromStorage()}},364:function(e,t,o){"use strict";o.r(t),o.d(t,"userStore",(function(){return v}));o(10),o(52),o(13),o(16),o(17);var i=o(7),s=o.n(i),n=o(245),r=o.n(n),a=o(104),c=o.n(a),l=o(8),p=o(363),u=o(81),d=o(0),h=o(120),b=o(26),g=o.n(b),y=o(196),f=o(174),m=o(365),w=function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};class k extends p.a{constructor(){super(),this.isExpired=!1,this.isLogin=!1,this.token="",this.userInfo={},this.refreshToken="",this.userProfilePromise=s.a.resolve(),this.wpColorUpdate=0,this.logining=!1,this.modalOpen=!1,this.removeAccountDisableSec=10,this.removeAccountDisableTimer=null,this.showLoginTipModal=!1,this.profileModal=!1,this.syncListModal=!1,this.isModify=!1,this.isShowLogoutConfirm=!1,this.showConfirmOpt="",this.clearAllData=!1,this.loading=!1,this.URL=d.w}setWpColorUpdate(e){this.wpColorUpdate=e}get qrcode(){if(this.isLogin&&y.e){const{uid:e,secret:t}=this.userInfo;return`${this.URL}/user/user_qr?uid=${e}&secret=${t}`}}closeModal(){this.modalOpen=!1}openModal(){this.modalOpen=!0}toggleLoginTipModal(){this.showLoginTipModal=!this.showLoginTipModal}closeLoginTipModal(){this.showLoginTipModal=!1}closeProfileModal(){this.profileModal=!1}openProfileModal(){this.profileModal=!0}closeSyncListModal(){this.syncListModal=!1}openSyncListModal(){this.syncListModal=!0}openModify(){this.isModify=!0}async modifyProfile(e){try{const t=await u.g.updateProfile(e);Object(l.i)(()=>{if(t&&0===t.code){const{user:{name:e,gender:o,avatar:i}}=t.data;this.userInfo.name=e,this.userInfo.gender=o,this.userInfo.avatar=i,this.closeModify()}else h.message.error(i18n("update_data_failure"))})}catch(e){h.message.error(e.message)}}async getUserProfile(){const e=await u.g.getUserProfile();Object(l.i)(()=>{if(e)if(0===e.code&&this.isLogin){const{gender:t,name:o,avatar:i}=e.data;this.userInfo.name=o,this.userInfo.gender=t,this.userInfo.avatar=i,this.userInfo["auto-backup"]=e.data["auto-backup"],this.userInfo["wp-color-update"]=e.data["wp-color-update"]}else 3012===e.code&&(h.message.error(e.message),this.exitAccount())})}async updateAvatar(e){try{return await u.g.uploadAvatar(e)}catch(e){h.message.error(i18n("upload_avatar_failure"))}}closeModify(){this.isModify=!1}thirdPartyLogin(e){let t;switch(this.logining=!0,e){case"facebook":t=this.URL+"/login/facebook";break;case"google":t=this.URL+"/login/google";break;case"qq":const e=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/qq");t="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101410947&redirect_uri="+e;break;case"sina":t=this.URL+"/login/weibo";break;case"wechat":const o=encodeURIComponent("https://infinity-api.infinitynewtab.com/on-login/wechat");t="https://open.weixin.qq.com/connect/qrconnect?state=123&appid=wx5af98300f5d18d16&response_type=code&scope=snsapi_login&redirect_uri="+o}setTimeout(async()=>{const e=Math.floor(window.screenY+200),o=Math.floor(window.screenX+window.innerWidth/3),i=window.open(t,"_blank",`top=${e},left=${o},height=600,width=770,menubar=no,toolbar=yes,location=yes,status=no,resizable=no`);if(this.opener=i,d.n)return;const s=setInterval(()=>{i.postMessage({from:"origin_login"},"*")},300),n=e=>{if(!e.data&&!e.data.key&&"login"!==e.data.key)return;clearInterval(s),window.removeEventListener("message",n,!1);const{message:t}=e.data;this.login3rdSuccess(t)};window.addEventListener("message",n,!1)},300)}async login(e){const t=await u.g.login(e);Object(l.i)(()=>{if(!t||0!==t.code)throw h.message.error(t.message),new Error(t.code);this.loginEmailSuccess(t.data.user),this.setToken(t.data),this.setRefreshToken(t.data.refreshToken)})}async setMobileUid(){if(y.e){const{uid:e,secret:t}=this.userInfo,o=await u.g.getMobileUid(e,t);if(0===(null==o?void 0:o.code)){const{mobileuid:e}=o.data;Object(l.i)(()=>{this.userInfo.mobileuid=e})}}}async loginEmailSuccess(e){this.logining=!1,this.closeModal(),this.isLogin=!0,this.userInfo=e,this.isExpired=!1,await this.setMobileUid()}setUserData(e){this.logining=!1,this.closeModal(),this.isLogin=e.isLogin,this.userInfo=e,this.isExpired=!1;["token","refreshToken","isLogin"].forEach(e=>delete this.userInfo[e])}async login3rdSuccess(e){if(!e||!Object.keys(e).length)return void this.cancelLogin();const t=e["login-type"];if(["qq","wechat"].includes(t)){const t=await u.g.loginWithUid(e);0===t.code?Object(l.i)(()=>{this.setUserData(e),this.setToken(t.data),this.setRefreshToken(t.data.refreshToken)}):3006===t.code&&h.message.error("获取token失败")}else this.setUserData(e),this.setToken(e),this.setRefreshToken(e.refreshToken);await this.setMobileUid()}cancelLogin(){var e;this.logining=!1,null===(e=this.opener)||void 0===e||e.close()}toggleClear(e){this.clearAllData=e}logout(e){this.isShowLogoutConfirm=!0,this.showConfirmOpt=e,"remove"===e&&(this.removeAccountDisableSec=10,clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=setInterval(()=>{Object(l.i)(()=>{this.removeAccountDisableSec-=1,0===this.removeAccountDisableSec&&(clearInterval(this.removeAccountDisableTimer),this.removeAccountDisableTimer=null)})},1e3))}async exitAccount(){this.loading=!0,this.isLogin=!1,this.userInfo={},this.clearToken(),await new s.a(e=>{setTimeout(()=>{this.clearAllData?this.clearAllStore().then(e):e(null)},200)}),this.clearAllData?window.location.reload():(Object(l.i)(()=>this.loading=!1),this.closeLogoutConfirm(),this.closeProfileModal(),d.r&&m.pluginStore.hideLast())}async deleteAccount(){this.loading=!0;const e=await u.g.deleteAccount();Object(l.i)(()=>{e&&0===e.code?this.exitAccount():(3012===e.code&&this.exitAccount(),h.message.error(e.message)),this.loading=!1})}preserveStorageKeys(){const e=[];return["store-privacy"].forEach(t=>e.push({key:t,data:localStorage.getItem(t)})),e}restoreKeysToStorage(e){e.forEach(({data:e,key:t})=>localStorage.setItem(t,e))}async clearAllStore(){this.stopAutoBackupReaction(),this.stopToStorageReaction();!d.r&&await new s.a(e=>chrome.storage.local.clear(e)),this._clearLocalStorage(["store-privacy","store-setting->permission","store-search->ignoreSuggest","first-installed"]),await this._deleteIdb(["store-notes","store-todo","store-sync","store-wallpaper","store-wallpaper-cache","infinity-image-base64"]),f.slave.sendMessage("tabs-reload")}async _deleteIdb(e){const t=await new s.a(e=>r()(g.a).call(g.a,(t,o)=>e(o)));await s.a.all(e.map(e=>new s.a(o=>{const i=e.split("->");if(1===i.length)return t.includes(e)?void g.a.removeItem(e,o):void o(null);o(null),t.includes(i[0])&&g.a.getItem(i[0],e=>{c()(i).call(i,(e,t,o)=>(o===i.length-1&&Reflect.deleteProperty(e,t),e[t]),e),g.a.setItem(i[0],o)})})))}_clearLocalStorage(e){const t=new Map;e.filter(Boolean).forEach(e=>{const o=e.split("->");if(1===o.length)return void t.set(e,localStorage.getItem(e));const i=JSON.parse(localStorage.getItem(o[0]));o.slice(1).forEach((e,t)=>{const s=0===t?i:i[o[t]];for(const t in s)e!==t&&Reflect.deleteProperty(s,t)}),t.set(o[0],JSON.stringify(i))}),localStorage.clear();for(const e of r()(t).call(t))localStorage.setItem(e,t.get(e))}closeLogoutConfirm(){this.isShowLogoutConfirm=!1}setToken(e){this.token=e.token}setRefreshToken(e){this.refreshToken=e}clearToken(){this.token="",this.refreshToken=""}setOutdated(){this.isExpired=!0,this.isLogin=!1}toggleReLogin(){this.isExpired=!1}}w([l.g],k.prototype,"isExpired",void 0),w([l.g],k.prototype,"isLogin",void 0),w([l.g],k.prototype,"token",void 0),w([l.g],k.prototype,"userInfo",void 0),w([l.g],k.prototype,"refreshToken",void 0),w([l.g],k.prototype,"wpColorUpdate",void 0),w([l.b],k.prototype,"setWpColorUpdate",null),w([l.e],k.prototype,"qrcode",null),w([l.g],k.prototype,"opener",void 0),w([l.g],k.prototype,"logining",void 0),w([l.g],k.prototype,"modalOpen",void 0),w([l.g],k.prototype,"removeAccountDisableSec",void 0),w([l.g],k.prototype,"removeAccountDisableTimer",void 0),w([l.b],k.prototype,"closeModal",null),w([l.b],k.prototype,"openModal",null),w([l.g],k.prototype,"showLoginTipModal",void 0),w([l.b],k.prototype,"toggleLoginTipModal",null),w([l.b],k.prototype,"closeLoginTipModal",null),w([l.g],k.prototype,"profileModal",void 0),w([l.g],k.prototype,"syncListModal",void 0),w([l.b],k.prototype,"closeProfileModal",null),w([l.b],k.prototype,"openProfileModal",null),w([l.b],k.prototype,"closeSyncListModal",null),w([l.b],k.prototype,"openSyncListModal",null),w([l.g],k.prototype,"isModify",void 0),w([l.b],k.prototype,"openModify",null),w([l.b],k.prototype,"modifyProfile",null),w([l.b],k.prototype,"getUserProfile",null),w([l.b],k.prototype,"updateAvatar",null),w([l.b],k.prototype,"closeModify",null),w([l.b],k.prototype,"thirdPartyLogin",null),w([l.b],k.prototype,"login",null),w([l.b],k.prototype,"setMobileUid",null),w([l.b],k.prototype,"loginEmailSuccess",null),w([l.b],k.prototype,"setUserData",null),w([l.b],k.prototype,"login3rdSuccess",null),w([l.b],k.prototype,"cancelLogin",null),w([l.g],k.prototype,"isShowLogoutConfirm",void 0),w([l.g],k.prototype,"showConfirmOpt",void 0),w([l.g],k.prototype,"clearAllData",void 0),w([l.b],k.prototype,"toggleClear",null),w([l.b],k.prototype,"logout",null),w([l.g],k.prototype,"loading",void 0),w([l.b],k.prototype,"exitAccount",null),w([l.b],k.prototype,"deleteAccount",null),w([l.b],k.prototype,"clearAllStore",null),w([l.b],k.prototype,"closeLogoutConfirm",null),w([l.b],k.prototype,"setToken",null),w([l.b],k.prototype,"setRefreshToken",null),w([l.b],k.prototype,"clearToken",null),w([l.b],k.prototype,"setOutdated",null),w([l.b],k.prototype,"toggleReLogin",null);const v=new k;Object(l.c)(()=>{v.isLogin&&(v.userProfilePromise=v.getUserProfile())}),v.initSyncStore("store-user",["userInfo","isLogin","token","refreshToken","wpColorUpdate"])},365:function(e,t,o){"use strict";o.r(t),o.d(t,"pluginStore",(function(){return p}));o(13),o(16),o(10);var i=o(8),s=o(129),n=o(346);class r extends n.a{opened(e){}}const a=Object(n.b)(new r);var c=function(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};class l{constructor(){this.pluginsMap={"infinity://weather":"side-weather","infinity://todos":"side-todos","infinity://notes":"side-notes","infinity://history":"side-history","infinity://bookmarks":"side-bookmarks","infinity://extension":"side-extension","infinity://chrome-apps":"chrome-apps","infinity://wallpaper":"wallpaper","infinity://settings":"side-profile",search:"side-search",profile:"side-profile",editIcon:"side-editicon"},this.pluginsTags={"side-weather":!1,"side-todos":!1,"side-notes":!1,"side-history":!1,"side-bookmarks":!1,"side-extension":!1,"chrome-apps":!1,"side-profile":!1,"side-search":!1,"side-editicon":!1,wallpaper:!1},this.pluginViews=[],this.focusRepair=!1,Object(i.h)(()=>this.pluginViews.map(e=>e),([e])=>{a.opened(e)})}initDom(e){this.pluginsTags[e]=!0}async show(e){if(this.pluginViews.includes(e))return;const t=this.pluginsMap[e];if(!1===this.pluginsTags[t])try{await this.requestPermission(t),Object(i.i)(()=>{this.pluginsTags[t]=!0,this.pluginViews.push(e)})}catch(e){}else this.pluginViews.push(e)}async showRepair(){this.focusRepair=!0,this.show("profile"),localStorage.setItem("user-checkout-old-data","true")}blurRepair(){this.focusRepair=!1}requestPermission(e){switch(e){case"side-bookmarks":return s.a.request(["bookmarks"],["chrome://favicon/"]);case"side-extension":case"chrome-apps":return s.a.request(["management"]);case"side-history":return s.a.request(["history"],["chrome://favicon/"])}}hideLast(){const e=this.pluginViews.pop();return 0===this.pluginViews.length&&document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform","none"),e}}c([i.g],l.prototype,"pluginsTags",void 0),c([i.b],l.prototype,"initDom",null),c([i.g],l.prototype,"pluginViews",void 0),c([i.g],l.prototype,"focusRepair",void 0),c([i.b],l.prototype,"show",null),c([i.b],l.prototype,"showRepair",null),c([i.b],l.prototype,"blurRepair",null),c([i.b],l.prototype,"hideLast",null);const p=new l},366:function(e,t,o){e.exports=o.p+"images/error.f782e7c.png"},367:function(e,t,o){e.exports=o.p+"images/remind.896ff6f.png"}}]);