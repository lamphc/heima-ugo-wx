(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d83":function(t,e,n){"use strict";n.r(e);var i=n("e7b9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"0d9b":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("1427")),o={data:function(){return{pageHeight:"auto",scrollTop:0,swiper:[],navs:[],floors:[]}},computed:{isShow:function(){return this.scrollTop>this.wh}},components:{search:r.default},onLoad:function(){this.wh=uni.getSystemInfoSync().windowHeight/2,this.getSwiper(),this.getNavs(),this.getFloors()},onReachBottom:function(){console.log("bt...")},onPageScroll:function(t){this.scrollTop=t.scrollTop},onPullDownRefresh:function(){Promise.all([this.getSwiper(),this.getNavs(),this.getFloors()]).then((function(){uni.stopPullDownRefresh()}))},methods:{goMap:function(){uni.navigateTo({url:"/packmap/map/index"})},goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},disScroll:function(t){this.pageHeight=t},getSwiper:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"/api/public/v1/home/swiperdata"});case 2:n=e.sent,200===n.msg.status&&(t.swiper=n.data);case 4:case"end":return e.stop()}}),e)})))()},getNavs:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"/api/public/v1/home/catitems"});case 2:n=e.sent,200===n.msg.status&&(t.navs=n.data);case 4:case"end":return e.stop()}}),e)})))()},getFloors:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"/api/public/v1/home/floordata"});case 2:n=e.sent,200===n.msg.status&&(t.floors=n.data);case 4:case"end":return e.stop()}}),e)})))()}}};e.default=o},1427:function(t,e,n){"use strict";n.r(e);var i=n("5c3b"),a=n("0d83");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("87be");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0a39fa25",null,!1,i["a"],o);e["default"]=u.exports},2909:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||r(t)||Object(o["a"])(t)||s()}},"317a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index .slider uni-swiper[data-v-328d2a2f],\n.index .slider uni-image[data-v-328d2a2f]{width:%?750?%;height:%?340?%}.index .navs[data-v-328d2a2f]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?%;background:#fff;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.index .navs uni-navigator[data-v-328d2a2f]{width:%?128?%;height:%?140?%}.index .floor .ftitle[data-v-328d2a2f]{padding-top:%?30?%;background:#f4f4f4}.index .floor .ftitle uni-image[data-v-328d2a2f]{width:%?750?%;height:%?60?%}.index .floor .fitem[data-v-328d2a2f]{padding:%?20?% %?16?% %?10?%;overflow:hidden}.index .floor .fitem uni-navigator[data-v-328d2a2f]{float:left;width:%?193?%;height:%?188?%;margin-left:%?10?%;margin-bottom:%?10?%}.index .floor .fitem uni-navigator[data-v-328d2a2f]:nth-child(1){width:%?232?%;height:%?386?%;margin-left:0}.index .floor .fitem uni-navigator[data-v-328d2a2f]:nth-child(2),\n  .index .floor .fitem uni-navigator[data-v-328d2a2f]:nth-child(5){width:%?273?%;height:%?188?%}.index .floor:first-child .fitem uni-navigator[data-v-328d2a2f]{width:%?233?%}.index .end[data-v-328d2a2f]{text-align:center;font-size:%?24?%;color:#999}.index .goTop[data-v-328d2a2f]{position:fixed;bottom:%?30?%;bottom:65px;right:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?100?%;height:%?100?%;font-size:%?48?%;color:#666;border-radius:50%;background-color:hsla(0,0%,100%,.8)}',""]),t.exports=e},"593e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index",style:{overflow:"hidden",height:t.pageHeight}},[n("search",{on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.disScroll.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"slider"},[n("v-uni-swiper",{attrs:{autoplay:!0,interval:"2000",circular:!0,"indicator-dots":!0,"indicator-color":"rgba(255,255,255,1)","indicator-active-color":"rgba(255,255,255,.6)"}},t._l(t.swiper,(function(t){return n("v-uni-swiper-item",{key:t.goods_id},[n("v-uni-navigator",{attrs:{url:"/packone/goods/index?id="+t.goods_id}},[n("v-uni-image",{attrs:{src:t.image_src}})],1)],1)})),1)],1),n("v-uni-view",{staticClass:"navs"},t._l(t.navs,(function(t,e){return n("v-uni-navigator",{key:e,attrs:{"open-type":t.open_type||"navigate",url:0===e?"/pages/category/index":"/packone/list/index?query="+t.name}},[n("v-uni-image",{attrs:{src:t.image_src}})],1)})),1),n("v-uni-view",{staticClass:"floors"},t._l(t.floors,(function(e){return n("v-uni-view",{key:e.name,staticClass:"floor"},[n("v-uni-view",{staticClass:"ftitle"},[n("v-uni-image",{attrs:{src:e.floor_title.image_src}})],1),n("v-uni-view",{staticClass:"fitem"},t._l(e.product_list,(function(t){return n("v-uni-navigator",{key:t.name,attrs:{url:"/packone/list/index?query="+t.name}},[n("v-uni-image",{attrs:{src:t.image_src}})],1)})),1)],1)})),1),n("v-uni-view",{staticClass:"end"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMap.apply(void 0,arguments)}}},[t._v("我是有底线的！")])],1),t.isShow?n("v-uni-view",{staticClass:"goTop icon-top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop.apply(void 0,arguments)}}}):t._e()],1)},r=[]},"5c3b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"search",class:{focused:t.isSearch}},[n("v-uni-view",{staticClass:"sinput"},[n("v-uni-input",{attrs:{type:"text",placeholder:"搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.goResult.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchPrd.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}}),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}],staticClass:"scontent"},[n("div",{staticClass:"title"},[t._v("搜索历史"),n("span",{staticClass:"clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearHistory.apply(void 0,arguments)}}})]),0===t.result.length?n("div",{staticClass:"history"},t._l(t.history,(function(e,i){return n("v-uni-navigator",{key:i,attrs:{url:"/packone/list/index"}},[t._v(t._s(e))])})),1):n("v-uni-scroll-view",{staticClass:"result",attrs:{"scroll-y":!0}},t._l(t.result,(function(e){return n("v-uni-navigator",{key:e.cat_id,attrs:{url:"/packone/list/index"}},[t._v(t._s(e.goods_name))])})),1)],1)],1)},r=[]},6062:function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),r=n("e2cc"),o=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),d=n("2626"),l=n("83ab"),f=n("f183").fastKey,v=n("69f3"),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,c){var d=t((function(t,i){s(t,d,e),h(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=i&&u(i,t[c],t,n)})),v=p(e),g=function(t,e,n){var i,a,r=v(t),o=b(t,e);return o?o.value=n:(r.last=o={index:a=f(e,!0),key:e,value:n,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=o),i&&(i.next=o),l?r.size++:t.size++,"F"!==a&&(r.index[a]=o)),t},b=function(t,e){var n,i=v(t),a=f(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return r(d.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=b(e,t);if(i){var a=i.next,r=i.previous;delete n.index[i.index],i.removed=!0,r&&(r.next=a),a&&(a.previous=r),n.first==i&&(n.first=a),n.last==i&&(n.last=r),l?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(d.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&i(d.prototype,"size",{get:function(){return v(this).size}}),d},setStrong:function(t,e,n){var i=e+" Iterator",a=p(e),r=p(i);c(t,e,(function(t,e){h(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("f183"),u=n("2266"),c=n("19aa"),d=n("861d"),l=n("d039"),f=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=p?"set":"add",x=a[t],m=x&&x.prototype,w=x,y={},k=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(r(t,"function"!=typeof x||!(g||m.forEach&&!l((function(){(new x).entries().next()})))))w=n.getConstructor(e,t,p,b),s.REQUIRED=!0;else if(r(t,!0)){var _=new w,S=_[b](g?{}:-0,1)!=_,E=l((function(){_.has(1)})),z=f((function(t){new x(t)})),R=!g&&l((function(){var t=new x,e=5;while(e--)t[b](e,e);return!t.has(-0)}));z||(w=e((function(e,n){c(e,w,t);var i=h(new x,e,w);return void 0!=n&&u(n,i[b],i,p),i})),w.prototype=m,m.constructor=w),(E||R)&&(k("delete"),k("has"),p&&k("get")),(R||S)&&k(b),g&&m.clear&&delete m.clear}return y[t]=w,i({global:!0,forced:w!=x},y),v(w,t),g||n.setStrong(w,t,p),w}},"6e74":function(t,e,n){"use strict";var i=n("c3c7"),a=n.n(i);a.a},8069:function(t,e,n){"use strict";n.r(e);var i=n("0d9b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"87be":function(t,e,n){"use strict";var i=n("a6f8"),a=n.n(i);a.a},a6f8:function(t,e,n){var i=n("b8bf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4b085c18",i,!0,{sourceMap:!1,shadowMode:!1})},b8bf:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search[data-v-0a39fa25]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.search .sinput[data-v-0a39fa25]{box-sizing:border-box;padding:%?20?% %?16?%;background:#ff2d4a;position:relative}.search .sinput[data-v-0a39fa25]::after{position:absolute;top:%?28?%;left:%?302?%;content:"";width:%?44?%;height:%?44?%;line-height:1;background-image:url(https://static.botue.com/ugo/images/icon_search%402x.png);background-size:%?32?%;background-position:%?6?% 50%;background-repeat:no-repeat}.search .sinput uni-input[data-v-0a39fa25]{background:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?24?%;color:#bbb;border-radius:%?5?%}.search .sinput uni-button[data-v-0a39fa25]{display:none;margin-left:%?20?%;width:%?150?%;height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?24?%;border-radius:%?5?%;background:transparent;color:#666}.search.focused[data-v-0a39fa25]{position:absolute;width:100%;height:100%;z-index:10}.search.focused .sinput[data-v-0a39fa25]{display:-webkit-box;display:-webkit-flex;display:flex;background:#eee}.search.focused .sinput uni-input[data-v-0a39fa25]{text-align:left;padding-left:%?60?%}.search.focused .sinput uni-button[data-v-0a39fa25]{display:block}.search.focused .sinput[data-v-0a39fa25]::after{left:%?30?%}.search .scontent[data-v-0a39fa25]{background:#fff;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?27?%}.search .scontent .title[data-v-0a39fa25]{font-size:%?27?%;line-height:1;color:#333}.search .scontent .clear[data-v-0a39fa25]{display:block;width:%?27?%;height:%?27?%;float:right;background-image:url(http://static.botue.com/ugo/images/clear.png);background-size:cover}.search .scontent .history[data-v-0a39fa25]{padding-top:%?30?%}.search .scontent .history uni-navigator[data-v-0a39fa25]{display:inline-block;line-height:1;padding:%?15?% %?20?% %?12?%;background-color:#ddd;font-size:%?24?%;margin-right:%?20?%;margin-bottom:%?15?%;color:#333}.search .scontent .result[data-v-0a39fa25]{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.search .scontent .result uni-navigator[data-v-0a39fa25]{line-height:1;padding:%?20?% %?30?%;font-size:%?24?%;color:#666;border-bottom:1px solid #eee}.search .scontent .result uni-navigator[data-v-0a39fa25]:last-child{border-bottom:none}',""]),t.exports=e},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c3c7:function(t,e,n){var i=n("317a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("043c88d3",i,!0,{sourceMap:!1,shadowMode:!1})},e7b9:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("2909")),o={data:function(){return{isSearch:!1,keyWord:"",result:[],history:uni.getStorageSync("history")||[]}},props:{activeId:{type:Number,default:0}},methods:{clearHistory:function(){this.history=[],uni.clearStorage()},goResult:function(){this.history.push(this.keyWord),this.history=(0,r.default)(new Set(this.history)),uni.setStorage({key:"history",data:this.history}),uni.navigateTo({url:"/packone/list/index"})},search:function(){this.isSearch=!0;var t=uni.getSystemInfoSync().windowHeight+"px";uni.hideTabBar(),this.$emit("search",t)},cancel:function(){this.isSearch=!1,uni.showTabBar(),this.$emit("search","auto"),this.keyWord="",this.result=[]},searchPrd:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"/api/public/v1/goods/qsearch",data:{query:t.keyWord}});case 2:n=e.sent,i=n.msg,a=n.data,console.log(a),200===i.status&&(t.result=a);case 7:case"end":return e.stop()}}),e)}))),600)}}};e.default=o},f183:function(t,e,n){var i=n("d012"),a=n("861d"),r=n("5135"),o=n("9bf2").f,s=n("90e3"),u=n("bb2f"),c=s("meta"),d=0,l=Object.isExtensible||function(){return!0},f=function(t){o(t,c,{value:{objectID:"O"+ ++d,weakData:{}}})},v=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,c)){if(!l(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},h=function(t,e){if(!r(t,c)){if(!l(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},p=function(t){return u&&g.REQUIRED&&l(t)&&!r(t,c)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:v,getWeakData:h,onFreeze:p};i[c]=!0},f75a:function(t,e,n){"use strict";n.r(e);var i=n("593e"),a=n("8069");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6e74");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"328d2a2f",null,!1,i["a"],o);e["default"]=u.exports}}]);