(function(t){function a(a){for(var s,n,l=a[0],c=a[1],o=a[2],m=0,u=[];m<l.length;m++)n=l[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},i={app:0},r=[];function n(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0a8a9a7d"}[t]+".js"}function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=n(t);var o=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(m);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,e[1](o)}i[t]=void 0}};var m=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var m=0;m<c.length;m++)a(c[m]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),t._m(1),e("router-view"),t._m(2)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spinner-wrapper"},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"bounce1"}),e("div",{staticClass:"bounce2"}),e("div",{staticClass:"bounce3"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navbar-custom"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand logo-image",attrs:{href:"index.html"}},[e("img",{attrs:{src:"/img/logo.png",alt:"alternative"}})]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-awesome fas fa-bars"}),e("span",{staticClass:"navbar-toggler-awesome fas fa-times"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link page-scroll",attrs:{href:"#none"}},[t._v("INICIO")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link page-scroll",attrs:{href:"#none"}},[t._v("ACERCA DE")])])]),e("span",{staticClass:"nav-item"},[e("a",{staticClass:"btn-outline-sm page-scroll",attrs:{href:"#none"}},[t._v("INGRESAR")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("p",{staticClass:"p-small"},[t._v("Copyright © 2020 "),e("a",{attrs:{href:"https://marbot.bo"}},[e("strong",[t._v("Marbot")])]),t._v(" - All rights reserved")])])])])])}],n=e("2877"),l={},c=Object(n["a"])(l,i,r,!1,null,null,null),o=c.exports,m=(e("d3b7"),e("8c4f")),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"text-container"},[t._m(0),t._m(1),e("button",{staticClass:"btn-solid-lg",staticStyle:{padding:"0.7rem 2.375rem 0.7rem 2.375rem"},on:{click:function(a){return t.changeType(!0)}}},[e("img",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"/img/items/item2.png",alt:""}}),t._v(" BUNGE")]),e("button",{staticClass:"btn-solid-lg",staticStyle:{padding:"0.7rem 2.375rem 0.7rem 2.375rem"},on:{click:function(a){return t.changeType(!1)}}},[e("img",{staticStyle:{width:"19px",height:"22px"},attrs:{src:"/img/items/item3.png",alt:""}}),t._v(" BATTLE")])])]),e("div",{staticClass:"col-lg-9 p-0 mb-3 m-mob"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_name,expression:"filter_name"}],staticClass:"form-control mr-3",attrs:{type:"text",placeholder:"Buscar Avatar"},domProps:{value:t.filter_name},on:{input:function(a){a.target.composing||(t.filter_name=a.target.value)}}})]),e("div",{staticClass:"col-lg-8 col-4"},[e("div",{staticClass:" text-right mb-4"},[e("a",{staticClass:"btn-paginate mr-2",class:{disabled:1===t.currPage},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setPage(t.currPage-1)}}},[e("i",{staticClass:"fas fa-angle-left"})]),e("a",{staticClass:"btn-paginate",class:{disabled:t.currPage===t.totalPage},attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.setPage(t.currPage+1)}}},[e("i",{staticClass:"fas fa-angle-right"})])])])])]),t._l(t.filteredSets.slice(t.pageStart,t.pageStart+t.countOfPage),(function(a,s){return e("div",{key:s,staticClass:"col-lg-9 card-3 mb-4 m-mob",staticStyle:{"z-index":"9","background-color":"#ffffff",padding:"20px","border-radius":"0 20px 20px 0","border-left":"5px solid #7b1fff"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("strong",[t._v("Head")]),e("div",{staticClass:"container6"},[e("img",{attrs:{src:"/img/avatar/head/"+a.head+".png",alt:"Img"}})]),e("small",[t._v(t._s(a.head))])]),e("div",{staticClass:"col-3"},[e("strong",[t._v("Body")]),e("div",{staticClass:"container6"},[e("img",{attrs:{src:"/img/avatar/body/"+a.body+".png",alt:"Img"}})]),e("small",[t._v(t._s(a.body))])]),e("div",{staticClass:"col-3"},[e("strong",[t._v("Glass")]),e("div",{staticClass:"container6"},[e("img",{attrs:{src:"/img/avatar/glass/"+a.glass+".png",alt:"Img"}})]),e("small",[t._v(t._s(a.glass))])]),e("div",{staticClass:"col-3"},[e("strong",[t._v("Flag")]),e("div",{staticClass:"container6"},[e("img",{attrs:{src:"/img/avatar/flag/"+a.flag+".png",alt:"Img"}})]),e("small",[t._v(t._s(a.flag))])])])]),e("div",{staticClass:"col-lg-4 col-12 text-center"},[e("div",{staticClass:"row  pt-3"},[e("div",{staticClass:"col-md-3 col-3"},[e("img",{attrs:{src:"/img/items/item1.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item1))+" ")]),e("div",{staticClass:"col-md-3 col-3"},[e("img",{attrs:{src:"/img/items/item2.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item2))+" ")]),e("div",{staticClass:"col-md-3 col-3"},[e("img",{attrs:{src:"/img/items/item3.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item3))+" ")]),e("div",{staticClass:"col-md-3 col-3"},[e("img",{attrs:{src:"/img/items/item4.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item4))+" ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-3 mt-mob"},[e("img",{attrs:{src:"/img/items/item5.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item5))+" ")]),e("div",{staticClass:"col-md-3 col-3 mt-mob"},[e("img",{attrs:{src:"/img/items/item6.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item6))+" ")]),e("div",{staticClass:"col-md-3 col-3 mt-mob"},[e("img",{attrs:{src:"/img/items/item7.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item7))+" ")]),e("div",{staticClass:"col-md-3 col-3 mt-mob"},[e("img",{attrs:{src:"/img/items/item8.png",alt:""}}),t._v(" "+t._s(t._f("addCero")(a.item8))+" ")])])]),e("div",{staticClass:"col-lg-12 pt-2 text-right mt-mob"},[e("small",{staticClass:"m-0"},[e("strong",{staticClass:"mr-2",staticStyle:{background:"#ffc107",color:"#fff","border-radius":"4px",padding:"3px 10px"}},[t._v("Gold: "+t._s(a.gold.toLocaleString())+" ")]),e("strong",{staticClass:"ml-2",staticStyle:{background:"#007bff",color:"#fff","border-radius":"4px",padding:"3px 10px"}},[t._v("Cash: "+t._s(a.cash.toLocaleString()))])])])])])}))],2)]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[t._v("Generador de Avatares "),e("br"),t._v("100% Gratis")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("p",{staticClass:"p-large p-heading"},[t._v("Esta herramienta fue desarrollada en base a criterios personales para generar y combinar avatares (sets) para dragonbound.")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deco-white-circle-1"},[e("img",{attrs:{src:"/img/decorative-white-circle.svg",alt:"alternative"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deco-white-circle-2"},[e("img",{attrs:{src:"/img/decorative-white-circle.svg",alt:"alternative"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deco-blue-circle"},[e("img",{staticStyle:{width:"100%"},attrs:{src:"/img/circle.png",alt:"alternative"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deco-yellow-circle"},[e("img",{staticStyle:{width:"100%"},attrs:{src:"/img/circle-two.png",alt:"alternative"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deco-green-diamond"},[e("img",{staticStyle:{width:"100%"},attrs:{src:"/img/partial.png",alt:"alternative"}})])}],g=(e("4de4"),e("c975"),e("13d5"),e("b0c0"),e("25f0"),e("498a"),{name:"Home",data:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(){return{bunge:!0,items:data,sets:[],countOfPage:5,currPage:1,filter_name:""}})),created:function(){this.main()},filters:{addCero:function(t){return t<10?"0"+t:t>50?50:t}},methods:{changeType:function(t){this.bunge=t},union:function(t){for(var a={head:"",body:"",glass:"",flag:"",item1:0,item2:0,item3:0,item4:0,item5:0,item6:0,item7:0,item8:0,cash:0,gold:0},e=0;e<t.length;e++){0==e?a.head=t[e].name:1==e?a.body=t[e].name:2==e?a.glass=t[e].name:3==e&&(a.flag=t[e].name);for(var s=1;s<=8;s++)a["item".concat(s)]+=t[e]["item".concat(s)];a.cash+=t[e].cash,a.gold+=t[e].gold}return a},main:function(){for(var t=this.items.reduce((function(t,a){return t*a.length}),1),a=cartesian(this.items[0],this.items[1],this.items[2],this.items[3]),e=[],s=0;s<t;s++)e.push(this.union(a.next().value));console.log("sets",e),this.sets=multiSort(e,{item2:"desc",item1:"desc",item3:"desc",item4:"desc",item5:"desc",item6:"desc",item7:"desc",item8:"desc"})},setPage:function(t){t<=0||t>this.totalPage||(this.currPage=t)}},computed:{filteredSets:function(){var t=this.filter_name.toLowerCase();return""!==this.filter_name.trim()?this.sets.filter((function(a){return a.head.toLowerCase().indexOf(t)>-1||a.body.toLowerCase().indexOf(t)>-1||a.glass.toLowerCase().indexOf(t)>-1||a.flag.toLowerCase().indexOf(t)>-1})):this.sets},pageStart:function(){return(this.currPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.filteredSets.length/this.countOfPage)}}}),f=g,v=(e("cccb"),Object(n["a"])(f,d,u,!1,null,null,null)),p=v.exports;s["a"].use(m["a"]);var h=[{path:"/",name:"Home",component:p},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],b=new m["a"]({mode:"history",base:"/",routes:h}),_=b,C=e("2f62");s["a"].use(C["a"]);var y=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:_,store:y,render:function(t){return t(o)}}).$mount("#app")},"5ced":function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("5ced"),i=e.n(s);i.a}});
//# sourceMappingURL=app.bf2858b6.js.map