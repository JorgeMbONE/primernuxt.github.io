(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,e,o){var content=o(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("1c93b39a",content,!0,{sourceMap:!1})},149:function(t,e,o){var content=o(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("36873827",content,!0,{sourceMap:!1})},150:function(t,e,o){"use strict";var r=o(148);o.n(r).a},151:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},152:function(t,e,o){"use strict";var r=o(149);o.n(r).a},153:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},154:function(t,e,o){"use strict";o.r(e);o(150);var r=o(10),n={components:{Logo:Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports},data:function(){return{id:""}},methods:{enviarParametro:function(t){this.$router.push("/contactos/"+t+" "+this.id)}}},l=(o(152),Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("div",[o("logo"),t._v(" "),o("h1",{staticClass:"title"},[t._v("\n      primer-nuxt\n    ")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("\n      primer proyecto del curso con nuxt\n    ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escribir parametro"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),o("div",{staticClass:"links"},[o("nuxt-link",{staticClass:"button--green",attrs:{to:"/contactos"}},[t._v("Contactos")]),t._v(" "),o("nuxt-link",{staticClass:"button--grey",attrs:{to:"/contactos/123"}},[t._v("Contacto parametro")]),t._v(" "),o("button",{staticClass:"btn btn-success",on:{click:function(e){return t.enviarParametro(123)}}},[t._v("Enviar parametro")])],1)],1)])},[],!1,null,null,null));e.default=l.exports}}]);