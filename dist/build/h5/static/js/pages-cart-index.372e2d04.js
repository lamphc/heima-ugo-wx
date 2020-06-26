(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-index"],{1301:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"shipment"},[t.address?[a("v-uni-view",{staticClass:"dt"},[t._v("收货人:")]),a("v-uni-view",{staticClass:"dd meta"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.address.userName))]),a("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.address.telNumber))])],1),a("v-uni-view",{staticClass:"dt"},[t._v("收货地址:")]),a("v-uni-view",{staticClass:"dd"},[t._v(t._s(t.addr))])]:a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)}}},[t._v("获取收获地址")])],2),a("v-uni-view",{staticClass:"carts"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"shopname"},[t._v("优购生活馆")]),t._l(t.carts,(function(e,i){return a("v-uni-view",{key:e.goods_id,staticClass:"goods"},[a("v-uni-image",{staticClass:"pic",attrs:{src:e.goods_small_logo}}),a("v-uni-view",{staticClass:"meta"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.goods_name))]),a("v-uni-view",{staticClass:"price"},[a("v-uni-text",[t._v("￥")]),t._v(t._s(e.goods_price)),a("v-uni-text",[t._v(".00")])],1),a("v-uni-view",{staticClass:"amount"},[a("v-uni-text",{staticClass:"reduce",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCount(i,-1)}}},[t._v("-")]),a("v-uni-input",{staticClass:"number",attrs:{type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerCount(e,i)}},model:{value:e.goods_count,callback:function(a){t.$set(e,"goods_count",a)},expression:"item.goods_count"}}),a("v-uni-text",{staticClass:"plus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCount(i,1)}}},[t._v("+")])],1)],1),a("v-uni-view",{staticClass:"checkbox"},[a("v-uni-icon",{attrs:{type:"success",size:"20",color:e.goods_checked?"#ea4451":"#ccc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selPrd(i)}}})],1)],1)}))],2)],1),a("v-uni-view",{staticClass:"extra"},[a("v-uni-label",{staticClass:"checkall",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selAll.apply(void 0,arguments)}}},[a("v-uni-icon",{attrs:{type:"success",color:t.isAll?"#ea4451":"#ccc",size:"20"}}),t._v("全选")],1),a("v-uni-view",{staticClass:"total"},[t._v("合计:"),a("v-uni-text",[t._v("￥")]),a("v-uni-label",[t._v(t._s(t.amount))]),a("v-uni-text",[t._v(".00")])],1),a("v-uni-view",{staticClass:"pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createOrder.apply(void 0,arguments)}}},[t._v("结算("+t._s(t.checkedPrd.length)+")")])],1)],1)},o=[]},"506f":function(t,e,a){"use strict";a.r(e);var i=a("6101"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},6101:function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("4160"),a("d81d"),a("e25e"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o={data:function(){return{carts:[],address:null}},onShow:function(){this.getCarts()},computed:{addr:function(){return this.address&&this.address.provinceName+this.address.cityName+this.address.countyName+this.address.detailInfo},isAll:function(){return this.checkedPrd.length===this.carts.length&&0!==this.carts.length},checkedPrd:function(){return this.carts.filter((function(t){return t.goods_checked}))},amount:function(){var t=0;return this.checkedPrd.forEach((function(e){t+=e.goods_price*e.goods_count})),t}},methods:{createOrder:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.address&&t.checkedPrd.length){e.next=2;break}return e.abrupt("return",uni.showToast({title:"请填写收货地址和添加商品！",icon:"none"}));case 2:if(uni.getStorageSync("token")){e.next=4;break}return e.abrupt("return",uni.navigateTo({url:"/pages/auth/index"}));case 4:return e.next=6,t.request({url:"/api/public/v1/my/orders/create",method:"post",header:{Authorization:uni.getStorageSync("token")},data:{order_price:t.amount,consignee_addr:t.addr,goods:t.checkedPrd.map((function(t){return t.goods_number=t.goods_count,t}))}});case 6:a=e.sent,a.data,i=a.msg,200===i.status?(uni.removeStorage({key:"carts"}),uni.navigateTo({url:"/pages/order/index"})):uni.showToast({icon:"none",title:i.msg});case 10:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;uni.chooseAddress({success:function(e){t.address=e}})},updateStorage:function(){uni.setStorageSync("carts",this.carts)},handlerCount:function(t,e){console.log(t.detail.value);var a=parseInt(t.detail.value);console.log("h",a),!a||isNaN(a)||a<1?this.carts[e].goods_count=1:this.carts[e].goods_count=a>10?10:a},selAll:function(){this.isAll?this.carts.forEach((function(t){return t.goods_checked=!1})):this.carts.forEach((function(t){return t.goods_checked=!0})),this.updateStorage()},selPrd:function(t){this.carts[t].goods_checked=!this.carts[t].goods_checked,this.updateStorage()},changeCount:function(t,e){var a=this.carts[t].goods_count;1===e&&a>=3||-1===e&&1===a||(this.carts[t].goods_count+=e,this.updateStorage())},getCarts:function(){this.carts=uni.getStorageSync("carts")||[]}}};e.default=o},9101:function(t,e,a){"use strict";var i=a("d036"),n=a.n(i);n.a},9333:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.shipment[data-v-0455805a]{height:%?100?%;line-height:2;padding:%?30?% %?30?% %?40?% %?30?%;font-size:%?27?%;color:#333;background-color:#fff;background-image:url(http://static.botue.com/ugo/images/cart_border%402x.png);background-size:contain;background-repeat:no-repeat;background-position:bottom}.shipment .dt[data-v-0455805a]{width:%?140?%;float:left;clear:both}.shipment .dd[data-v-0455805a]{padding-left:%?160?%}.shipment .meta[data-v-0455805a]{padding-right:%?50?%}.shipment uni-text.phone[data-v-0455805a]{float:right}.carts[data-v-0455805a]{background-color:#f4f4f4;padding-bottom:%?110?%;overflow:hidden}.carts .shopname[data-v-0455805a]{padding:%?30?%;margin-top:%?20?%;font-size:%?30?%;color:#333;background-color:#fff;border-top:%?1?% solid #eee;border-bottom:%?1?% solid #eee}.carts .goods[data-v-0455805a]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?% %?20?% %?30?% 0;margin-left:%?100?%;border-bottom:%?1?% solid #eee;background-color:#fff;position:relative}.carts .goods .checkbox[data-v-0455805a]{width:%?101?%;height:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;left:%?-100?%;top:0}.carts .goods[data-v-0455805a]:last-child{border-bottom:none}.carts .goods .pic[data-v-0455805a]{width:%?200?%;height:%?200?%;margin-right:%?30?%}.carts .goods .meta[data-v-0455805a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?27?%;color:#333;position:relative}.carts .goods .name[data-v-0455805a]{width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.carts .goods .price[data-v-0455805a]{position:absolute;bottom:0;color:#ea4451;font-size:%?33?%}.carts .goods .price uni-text[data-v-0455805a]{font-size:%?22?%}.carts .goods .amount[data-v-0455805a]{position:absolute;bottom:0;right:%?20?%;height:%?48?%;text-align:center;border:%?1?% solid #ddd;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.carts .goods .amount uni-text[data-v-0455805a]{display:block;width:%?60?%;line-height:%?48?%;font-size:%?36?%;color:#ddd;text-align:center}.carts .goods .amount uni-input[data-v-0455805a]{width:%?60?%;height:%?48?%;min-height:%?48?%;font-size:%?27?%;border-left:%?1?% solid #ddd;border-right:%?1?% solid #ddd}.extra[data-v-0455805a]{position:fixed;bottom:0;bottom:50px;left:0;z-index:9;width:%?750?%;height:%?96?%;text-align:center;line-height:%?96?%;font-size:%?36?%;border-top:%?1?% solid #eee;background-color:#fff;color:#333;display:-webkit-box;display:-webkit-flex;display:flex}.extra .checkall[data-v-0455805a]{width:%?140?%;line-height:1;margin-left:%?25?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.extra .checkall uni-icon[data-v-0455805a]{margin-right:%?20?%}.extra .total[data-v-0455805a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.extra .total uni-label[data-v-0455805a],\n    .extra .total uni-text[data-v-0455805a]{color:#ea4451;vertical-align:bottom;position:relative;bottom:%?-2?%}.extra .total uni-text[data-v-0455805a]{position:relative;bottom:%?-3?%;font-size:%?24?%}.extra .total uni-text[data-v-0455805a]:first-child{margin-left:%?10?%}.extra .pay[data-v-0455805a]{width:%?200?%;background-color:#ea4451;color:#fff}',""]),t.exports=e},d036:function(t,e,a){var i=a("9333");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7e6fdf9b",i,!0,{sourceMap:!1,shadowMode:!1})},e16e:function(t,e,a){"use strict";a.r(e);var i=a("1301"),n=a("506f");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("9101");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0455805a",null,!1,i["a"],s);e["default"]=c.exports}}]);