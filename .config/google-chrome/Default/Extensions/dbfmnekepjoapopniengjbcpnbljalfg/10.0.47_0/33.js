(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{756:function(t,e,i){t.exports=i.p+"images/empty.adec9ea.png"},757:function(t,e,i){t.exports=i.p+"images/empty_list.c352bfa.png"},773:function(t,e,i){"use strict";i.r(e),i.d(e,"SideHistory",(function(){return _}));var o=i(48),s=i.n(o),r=(i(13),i(16),i(52),i(1)),n=i(242),a=(i(10),i(17),i(104)),l=i.n(a),h=i(7),c=i.n(h),d=i(8),p=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};class y{constructor(){this.fetchId=0,this.histories=[],this.searchKey="",this.count=0,this.loading=!1,this.hasMore=!1,this.state="",this.historyMap={}}setState(t){this.state=t}get lists(){return 0===this.histories.length?[]:this.histories.map(t=>Object.assign(Object.assign({},t),{date:new Date(t.lastVisitTime).toLocaleDateString()}))}get historyList(){var t;return 0===this.lists.length?[]:Object.values(l()(t=this.lists).call(t,(t,e)=>(t[e.date]?t[e.date].push(e):t[e.date]=[e],t),{}))}updateSearchKey(t,e=!1){this.searchKey=t,this.fetch(e)}setList(t){this.histories=t}deleteHistory({url:t}){window.chrome.history.deleteUrl({url:t})}clear(){window.chrome.history.deleteAll(()=>this.fetch(!0))}async fetch(t){t&&(this.count=0,this.histories=[]),this.loading=!0;const e=++this.fetchId,{searchKey:i}=this;this.count+=30;const o=await new c.a(t=>{window.chrome.history.search({text:i,startTime:0,maxResults:this.count},t)});if(e!==this.fetchId)throw new Error("expired fetch");const s=o.map(t=>({id:t.id,url:t.url,title:t.title||t.url,lastVisitTime:t.lastVisitTime}));Object(d.i)(()=>{this.loading=!1;const{length:t}=this.histories;s.length>t&&this.histories.push(...s.slice(t)),s.length<this.count?this.hasMore=!0:this.hasMore=!1})}fetchNextPage(){this.loading||this.fetch(!1)}}p([d.g],y.prototype,"fetchId",void 0),p([d.g],y.prototype,"histories",void 0),p([d.g],y.prototype,"searchKey",void 0),p([d.g],y.prototype,"loading",void 0),p([d.g],y.prototype,"hasMore",void 0),p([d.g],y.prototype,"state",void 0),p([d.b],y.prototype,"setState",null),p([d.e],y.prototype,"lists",null),p([d.e],y.prototype,"historyList",null),p([d.b],y.prototype,"updateSearchKey",null),p([d.b],y.prototype,"setList",null),p([d.b],y.prototype,"deleteHistory",null),p([d.b],y.prototype,"clear",null),p([d.b],y.prototype,"fetch",null),p([d.b],y.prototype,"fetchNextPage",null);var g=new y,f=i(21),u=i(2),m=(i(541),i(468)),b=(i(500),i(345)),v=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let w=class extends r.a{constructor(){super(...arguments),this.data={},this.state=""}_formatTime(t){const e=new Date(t);return`${e.getHours()}:${("0"+e.getMinutes()).substr(-2)}`}delete(){const t=new CustomEvent("i-deleteUrl",{detail:{item:this.data},bubbles:!0,composed:!0});this.dispatchEvent(t)}loadMore(){const{url:t}=this.data,e=new CustomEvent("i-load",{detail:{url:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const{data:{title:t,url:e,lastVisitTime:i}}=this;return r.e`
      <div class="side-history-item" @click="${t=>this.openUrl(t,e)}">
        <div class="main-body">
          <div class="content">
            <div class="icon">
              <i-favicon .url="${e}"></i-favicon>
            </div>
            <p class="t">${t||e}</p>
          </div>
          <p class="lastVisitTime">${this._formatTime(i)}</p>
        </div>
        <i-dot-expanded tabindex="0">
          ${"loadmore"!==this.state?r.e`<li class="history-dot-item" @click=${this.loadMore}>${i18n("more_content_from_site")}</li>`:null}
          <li class="history-dot-item" @click=${this.delete}>${i18n("del_folder")}</li>
        </i-dot-expanded>
      </div>
    `}openUrl(t,e){b.a.sendEvent({action:{openHistory:f.a.getTargetLogDomain(e)}}),f.a.openUrl(e,m.settingStore.setting.link.history,t)}};w.styles=r.b`
    :host {
      width: 100%;
    }
    .side-history-item {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 20px 0 30px;
      height: 70px;
      overflow: hidden;
      cursor: pointer;
      transition: all 300ms ease-in-out;
    }
    .main-body {
      flex: 1;
      overflow: hidden;
      margin-right: 10px;
    }
    .content {
      display: flex;
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-top: 2px;
      margin-right: 10px;
    }
    img,
    i-facicon {
      width: 100%;
      height: 100%;
    }
    p {
      margin: 0;
    }
    .t {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lastVisitTime {
      margin-top: 4px;
      font-size: 12px;
      color: #b6b6b6;
    }
    i-svg {
      width: 14px;
      height: 14px;
    }
    .delete-btn:hover i-svg {
      color: rgba(51, 51, 51, 0.5);
    }
    .side-history-item:hover,
    .side-history-item:focus-within {
      background: rgba(246, 246, 246, 1);
    }
    .side-history-item:hover i-dot-expanded {
      opacity: 1;
    }
    i-dot-expanded {
      width: 32px;
      --dot-hover: rgba(0, 0, 0, 0.15);
      opacity: 0;
      outline: none;
      transition: opacity 0.3s;
    }
    i-dot-expanded:focus {
      opacity: 1;
      background: var(--dot-hover);
    }
  `,v([Object(r.g)({type:Object})],w.prototype,"data",void 0),v([Object(r.g)({type:String})],w.prototype,"state",void 0),w=v([Object(r.c)("side-history-item")],w);var x=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let $=class extends r.a{emit(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){return r.e`
      <div class="wrapper">
        <p>${i18n("confirm_clear_all_history")}</p>
        <div class="btns">
          <infinito-button @click=${()=>this.emit("cancel")}> ${i18n("cancel")} </infinito-button>
          <infinito-button primary class="ok" @click=${()=>this.emit("ok")}> ${i18n("confirm")} </infinito-button>
        </div>
      </div>
    `}};$.styles=r.b`
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
  `,$=x([Object(r.c)("history-delete-tips")],$);var j=i(336),O=i(756),k=i.n(O),S=i(757),T=i.n(S),M=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let _=class extends n.a{constructor(){super(...arguments),this.store=g,this.showModal=!1,this.scrollTop=0,this.cancelDelete=()=>{this.showModal=!1}}firstUpdated(){this.store.fetch(!1),this.listBody.addEventListener("scroll",()=>{this.listBody.scrollTop+this.listBody.clientHeight>=this.listBody.scrollHeight&&this.store.fetchNextPage()}),window.chrome.history.onVisitRemoved.addListener(t=>{const{allHistory:e,urls:i}=t;if(e&&this.store.setList([]),i.length){let t=[];i.forEach(e=>{t=this.store.histories.filter(t=>t.url!==e)}),this.store.setList(t)}}),window.chrome.history.onVisited.addListener(t=>{const e=[...this.store.histories];e.unshift(t),this.store.setList(e)})}format(t){const e=new Date,i=e.getFullYear(),o=e.getMonth(),s=e.getDay(),r={year:"numeric",month:"long",day:"2-digit",weekday:"long"},n=new Date(t);return n.toDateString()===e.toDateString()?`${Object(u.i18n)("today")} ${f.a.fmtTime(t,r)}`:n.getFullYear()===i&&n.getMonth()===o&&n.getDay()+1===s?`${Object(u.i18n)("yesterday")} ${f.a.fmtTime(t,r)}`:""+f.a.fmtTime(t,r)}deleteUrl(t){this.store.deleteHistory({url:t.item.url})}loadMore({url:t}){const e=new s.a(t).hostname;this.searchEle.set(e),this.store.updateSearchKey(e,!0),this.store.setState("loadmore")}handleSearch(t){const e=t.detail.text;this.store.updateSearchKey(e,!0),this.store.setState("search")}clear(){this.store.updateSearchKey("",!0),this.store.setState()}remove(){this.store.histories.length&&(this.showModal=!0)}ok(){this.store.clear(),this.showModal=!1}handleTabClose(){this.store.searchKey&&(this.clear(),this.searchEle.clear())}handleTabOpen(){this.searchEle.focus()}afterHide(){this.handleTabClose()}afterShow(){this.handleTabOpen()}render(){const{searchKey:t,historyList:e}=this.store;return r.e`
      <i-side2-header .title="${Object(u.i18n)("history")}"></i-side2-header>
      <div class="container">
        <div class="search-container">
          <i-search
            placeholder="${Object(u.i18n)("history_week")}"
            @i-search="${f.a.debounce(this.handleSearch,200)}"
            @i-clear=${this.clear}
          >
          </i-search>
        </div>
        <div class="remove">
          <button class="${e.length?"active":""}" @click="${this.remove}">
            ${Object(u.i18n)("clear_historys")}
          </button>
        </div>
        <div class="history-lists">
          <div class="global-scrollbar list-body">
            <div class=${0===e.length?"empty-list":""}>
              ${t?this.renderSearch():this.renderList()}
            </div>
          </div>
        </div>
      </div>
      <div>
        <infinito-portal-entrance destination="history">
          <infinito-modal
            style="--modal-padding: 30px; --modal-top: 30vh;"
            ?open=${this.showModal}
            .closeable=${!1}
            .onCancel=${this.cancelDelete}
          >
            <history-delete-tips slot="body" @ok=${this.ok} @cancel=${this.cancelDelete}> </history-delete-tips>
          </infinito-modal>
        </infinito-portal-entrance>
      </div>
    `}renderSearch(){const{histories:t,state:e,loading:i}=this.store;return t.length||i?r.e`
        ${t.map(t=>r.e`
              <side-history-item
                .data=${t}
                .state=${e}
                @i-deleteUrl="${t=>this.deleteUrl(t.detail)}"
                @i-load=${t=>this.loadMore(t.detail)}
              >
              </side-history-item>
            `)}
      `:r.e`
        <div class="empty">
          <img .src=${k.a} />
          <p>${Object(u.i18n)("no_search_result")}</p>
        </div>
      `}renderList(){const{historyList:t,state:e,loading:i}=this.store;return t.length||i?r.e`
        ${t.map(t=>r.e`
              <div class="date">${this.format(t[0].lastVisitTime)}</div>
              ${t.length?t.map(t=>r.e` <side-history-item
                        .data=${t}
                        .state=${e}
                        @i-deleteUrl="${t=>this.deleteUrl(t.detail)}"
                        @i-load=${t=>this.loadMore(t.detail)}
                      >
                      </side-history-item>`):null}
            `)}
      `:r.e`
        <div class="empty">
          <img .src=${T.a} />
          <p>${Object(u.i18n)("your_browsing_history_appears_here")}</p>
        </div>
      `}};_.styles=[j.a,r.b`
      :host {
        display: block;
        height: 100%;
        background-color: #fff;
      }
      .container {
        display: flex;
        flex-flow: column;
        flex: 1;
        overflow: hidden;
        height: calc(100% - var(--side-header-height));
      }
      .search-container {
        padding: 0 30px;
        margin: 30px 0 14px;
      }
      .remove {
        padding: 0 30px;
        margin-bottom: 20px;
      }
      .remove button {
        padding: 0;
        border: none;
        background: none;
        font-size: 12px;
        outline: none;
        cursor: not-allowed;
        color: #b6b6b6;
      }
      .remove button.active {
        color: #5c5c5c;
        cursor: pointer;
      }
      .history-lists {
        flex: 1;
        overflow: hidden;
      }
      .empty-list {
        height: 100%;
        display: flex;
        justify-content: center;
      }
      .list-body {
        height: 100%;
        /* overflow: auto; */
      }

      .active:hover {
        opacity: 0.7;
      }
      .date {
        margin-top: 10px;
        margin-bottom: 5px;
        padding: 0 30px;
        font-size: 18px;
        color: #333;
        font-weight: 500;
      }
      .empty {
        margin-top: 126px;
        color: #999;
      }
      .empty img {
        display: block;
        width: 86px;
        height: 86px;
        margin: 0 auto;
        margin-bottom: 6px;
      }
      .empty p {
        margin: 0;
        text-align: center;
        color: #999;
        font-weight: 300;
      }
    `],M([Object(r.h)(".list-body")],_.prototype,"listBody",void 0),M([Object(r.h)("i-search")],_.prototype,"searchEle",void 0),M([Object(r.g)({type:Boolean})],_.prototype,"showModal",void 0),M([Object(r.g)({type:Number})],_.prototype,"scrollTop",void 0),_=M([Object(r.c)("side-history")],_)}}]);