webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("NYxO"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{fixed:"",clipped:t.$vuetify.breakpoint.mdAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?a("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v("\n                       "+t._s(e.heading)+"\n            ")]):t._e()],1),t._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?a("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-content",[a("v-list-tile-title")],1)],1),t._v(" "),t._l(e.children,function(e,i){return a("v-list-tile",t._g({key:i}),[e.icon?a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)})],2):a("v-list-tile",{key:e.text,on:{click:function(t){}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{attrs:{tag:"p",to:{path:e.route}}},[t._v("\n              "+t._s(e.text)+"\n                 ")])],1)],1)],1)]})],2)],1),t._v(" "),a("v-toolbar",{attrs:{color:"blue darken-3",dark:"",app:"","clipped-left":t.$vuetify.breakpoint.mdAndUp,fixed:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("span",{staticClass:"hidden-sm-and-down"},[t._v("Поиск университета ")])],1),t._v(" "),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","prepend-icon":"search",label:"Найти..."}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("apps")])],1),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("notifications")])],1),t._v(" "),a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",tile:""}})],1)],1),t._v(" "),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",[a("router-view")],1)],1)],1),t._v(" "),a("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"red",dark:"",fixed:""},on:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[a("v-icon",[t._v("search")])],1),t._v(" "),a("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1,scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),t._v(" "),a("v-toolbar-title",[t._v("Баллы")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Сохранить данные")])],1),t._v(" "),a("v-menu",{attrs:{bottom:"",right:"","offset-y":""}},[a("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[a("v-icon",[t._v("more_vert")])],1),t._v(" "),a("v-list",t._l(t.items,function(e,i){return a("v-list-tile",{key:i,on:{click:function(t){}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),a("v-card-text",[a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("User Controls")]),t._v(" "),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Content filtering")]),t._v(" "),a("v-list-tile-sub-title",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),t._v(" "),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Password")]),t._v(" "),a("v-list-tile-sub-title",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("General")]),t._v(" "),a("v-list-tile",{attrs:{avatar:""}})],1)],1),t._v(" "),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")({name:"App",data:function(){return{dialog:!1,drawer:null,items:[{icon:"contacts",text:"Университеты",route:"/"},{icon:"history",text:"Професси",route:"/professionlist"},{icon:"content_copy",text:"Программы обучения",route:"/studyprogramlist"}]}}},n,!1,null,null,null).exports,r=a("/ocq"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[t._v("\n       Список университетов\n     "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:"Поиск университета","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("router-link",{attrs:{tag:"tr",to:"university/1"}},[a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.egeval))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.places))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.price))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.link))])])]}}])},[a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n        По вашему запросу "'+t._s(t.search)+'" нет результатов \n     ')])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")({name:"UniversityList",data:function(){return{search:" ",headers:[{text:"Название университета",align:"left",sortable:!0,value:"name"},{text:"Проходной бал",value:"egeval"},{text:"Количество мест",value:"places"},{text:"Стоимость обучения",value:"price"},{text:"Ссылка на сайт",value:"link"}],items:[{name:"Higher school of Economics",egeval:"290",price:100,places:25,link:"link"},{name:"Московский государственный университет",egeval:"290",price:100,places:215}]}}},o,!1,null,null,null).exports,c={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("it works")])},staticRenderFns:[]},u=a("VU/8")({name:"ProfessionList"},c,!1,null,null,null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("it works")])},staticRenderFns:[]},_=a("VU/8")({name:"StudyprogramList"},d,!1,null,null,null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v(this._s(this.$route.params.id))])},staticRenderFns:[]};var m=a("VU/8")({name:"UniversityDetail",data:function(){return{}}},p,!1,function(t){a("zsGx")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm12:""}},[a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"display-1 ",attrs:{large:""}},[t._v("Поиск университетов по результатам ЕГЭ")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("v-btn",{attrs:{large:"",color:"info"}},[t._v("Найти университет")])],1)]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fast_forward")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Material Design")])]),t._v(" "),a("v-card-text",[t._v("\n                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("flash_on")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Fast development")])]),t._v(" "),a("v-card-text",[t._v("\n                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("build")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Completely Open Sourced")])]),t._v(" "),a("v-card-text",[t._v("\n                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                  ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",[a("v-parallax",{attrs:{src:"assets/section.jpg",height:"380"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v("Web development has never been easier")]),t._v(" "),a("em",[t._v("Kick-start your application today")]),t._v(" "),a("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",href:"/pre-made-themes"}},[t._v("\n            Get Started\n          ")])],1)],1)],1),t._v(" "),a("section",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Company info")])]),t._v(" "),a("v-card-text",[t._v("\n                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n              ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact us")])]),t._v(" "),a("v-card-text",[t._v("\n                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n              ")]),t._v(" "),a("v-list",{staticClass:"transparent"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("777-867-5309")])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Chicago, US")])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("john@vuetifyjs.com")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-footer",{staticClass:"blue darken-2"},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text ml-3"},[a("a",{staticClass:"white--text",attrs:{href:"https://github.com/vinogradnick"}},[t._v("Powered by Vinogradov Nikita")])])])],1)],1)],1)},staticRenderFns:[]},f=a("VU/8")({name:"Main",data:function(){return{}}},x,!1,null,null,null).exports;i.a.use(r.a);var h=new r.a({routes:[{path:"/",name:"Main",component:f},{path:"/unviversitylist",name:"UniversityList",component:v},{path:"/professionlist",name:"ProfessionList",component:u},{path:"/studyprogramlist",name:"StudyprogramList",component:_},{path:"/university/:id",name:"UniversityDetail",component:m}]}),b=a("3EgV"),g=a.n(b);a("7zck");i.a.use(s.a),i.a.use(g.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:h,render:function(t){return t(l)}})},zsGx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.677204ccb791a005db4e.js.map