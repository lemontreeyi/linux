(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12,34],{121:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o}));n(17);const i=n(0).r?"serviceworker":"background";let s=!1;"background"===i?s="undefined"==typeof ServiceWorkerGlobalScope&&chrome.extension.getBackgroundPage()===window:"serviceworker"===i&&(s="undefined"!=typeof ServiceWorkerGlobalScope);const a={timeout:0,taskId:""},o=()=>(""+Date.now()/1e3/1e5).split(".")[1].substr(0,8)+(""+Math.random()).split(".")[1].substr(0,8).padEnd(8,"0")},177:function(e,t,n){"use strict";n.r(t),n.d(t,"slave",(function(){return r}));n(10),n(13),n(16),n(52);var i=n(7),s=n.n(i),a=n(253),o=n(121);const r=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new a.a,this.initChannel=()=>{"serviceworker"===o.b?this.initServiceworker():"background"===o.b&&this.initBackground()},this.awaitChannel=()=>new s.a(async(e,t)=>{"serviceworker"===o.b?this.channel?(await this.channel.active,await this.channel.controlling,e(null)):(this.initResolve.push(e),this.initReject.push(t)):"background"===o.b&&e(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:e}=await n.e(11).then(n.bind(null,462)),t=await e();if(!t)return;t.addEventListener("message",e=>{const{type:t,payload:n={}}=e.data;"master:bordcast-message"===t&&this.messageScheduler.execTask(n.type,n.payload)}),await t.active,await t.controlling,this.channel=t,this.initResolve.forEach(e=>{e()}),this.channel.postTask=this.channel.messageSW}catch(e){console.log("slave初始化错误：",e),this.initReject.forEach(e=>{e()})}},this.initBackground=()=>{this.channel={postTask:e=>new s.a((t,n)=>{chrome.runtime.sendMessage(e,e=>{chrome.runtime.lastError&&n(chrome.runtime.lastError),t(e)})})},chrome.runtime.onMessage.addListener(({type:e,payload:t,ignoreId:n})=>{"master:bordcast-message"===e?chrome.tabs.getCurrent(e=>{n!==e.id&&this.messageScheduler.execTask(t.type,t.payload)}):"slave:bordcast-message"===e&&this.messageScheduler.execTask(t.data.type,t.data.payload)})},o.a)throw new Error("it's not page");this.initChannel()}postTask(e,t,n){return new s.a(async(i,s)=>{let a=!1;await this.awaitChannel();const r=Object.assign(Object.assign(Object.assign({},o.d),{taskId:Object(o.c)()}),n);r.timeout&&setTimeout(()=>{a||i({error:"timeout"})},r.timeout);try{const n=await this.channel.postTask({type:e,payload:Object.assign({data:t},r)});a=!0,i(n)}catch(e){i({error:e})}})}listenMessage(e,t){this.messageScheduler.listenTask(e,t)}sendMessage(e,t=""){this.postTask("slave:bordcast-message",{type:e,payload:t})}}},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(13),n(16);class i{constructor(){this._events=new Map}listenTask(e,t){if("function"!=typeof t)return;this._events.has(e)||this._events.set(e,new Set);this._events.get(e).add(t)}execTask(e,t,...n){if(this._events.has(e)){const i=this._events.get(e);for(const e of i)e(t,...n)}}}},370:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(102),s=n(125);
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
const a=new WeakMap,o=Object(s.e)(e=>t=>{if(!(t instanceof s.b))throw new Error("unsafeHTML can only be used in text bindings");const n=a.get(t);if(void 0!==n&&Object(i.h)(e)&&e===n.value&&t.value===n.fragment)return;const o=document.createElement("template");o.innerHTML=e;const r=document.importNode(o.content,!0);t.setValue(r),a.set(t,{value:e,fragment:r})})},768:function(e,t,n){"use strict";n.r(t),n.d(t,"Imodal",(function(){return c}));n(13),n(16),n(10);var i=n(1),s=n(370),a=(n(399),n(21)),o=n(177),r=function(e,t,n,i){var s,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let c=class extends i.a{constructor(){super(...arguments),this.step="loading"}showError(){this.step="error"}async reUpdate(){localStorage.removeItem("user-checkout-old-data"),localStorage.setItem("bg-updating",""+Date.now()),o.slave.sendMessage("tabs-reload"),a.a.send({key:"bg-update",data:"9.9.9"}),setTimeout(()=>{location.reload()},0)}async showRepair(){if(this.step=null,document.querySelector("i-updating").classList.add("hide"),localStorage.setItem("user-checkout-old-data","true"),localStorage.getItem("updating-manual"))return;const{pluginStore:e}=await Promise.all([n.e(2),n.e(37)]).then(n.bind(null,365));e.showRepair()}render(){return"loading"===this.step?i.e`
        <div class="step-loading">
          <img
            src="https://infinityicon.infinitynewtab.com/assets/updating.png?imageView2/2/w/490/format/webp/interlace/1"
            alt=""
          />
          <p>${i18n("bg_updating")}</p>
        </div>
      `:"error"===this.step?i.e`
        <div class="step-error">
          <infinito-modal style="--modal-padding:0;" .open=${!0} .closeable="${!1}">
            <div slot="body">
              <div class="content">
                <div class="tips">
                  <span> ${i18n("update_error_desc1")} </span>
                  <span>
                    ${Object(s.a)(i18n("update_error_desc2",'<img style="width:18px;height:18px;vertical-align: middle;" src="https://infinityicon.infinitynewtab.com/assets/btn-setting.png" alt="">'))}
                  </span>
                </div>
                <div class="btns">
                  <infinito-button @click="${this.reUpdate}" primary>${i18n("re_update")}</infinito-button>
                  <infinito-button @click="${this.showRepair}">${i18n("do_later")}</infinito-button>
                </div>
              </div>
            </div>
          </infinito-modal>
        </div>
      `:void 0}};c.styles=i.b`
    .step-loading,
    .step-error {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .step-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2b2b2c;
      z-index: 11111111;
    }

    .step-loading img {
      width: 245px;
      margin-bottom: 34px;
    }
    .step-loading p {
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .step-error infinito-modal {
      --modal-top: 50vh;
    }
    .step-error .content {
      width: 478px;
      box-sizing: border-box;
      padding: 28px 48px 30px;
    }
    .step-error .tips {
      font-size: 13px;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 20px;
    }
    .tips span {
      display: block;
    }
    .step-error .btns {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    infinito-button {
      min-width: 128px;
      height: 42px;
    }
    .step-error infinito-button:first-child {
      margin-right: 18px;
    }
  `,r([Object(i.g)({type:String})],c.prototype,"step",void 0),c=r([Object(i.c)("i-updating")],c)}}]);