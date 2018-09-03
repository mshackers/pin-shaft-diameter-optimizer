(function(t){function a(a){for(var s,r,o=a[0],h=a[1],c=a[2],l=0,p=[];l<o.length;l++)r=o[l],i[r]&&p.push(i[r][0]),i[r]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var h=e[o];0!==i[h]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/pin-shaft-diameter-optimizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=h;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"21da":function(t,a,e){"use strict";var s=e("e916"),i=e.n(s);i.a},"22b5":function(t,a,e){"use strict";var s=e("d801"),i=e.n(s);i.a},"2a6b":function(t,a,e){"use strict";var s=e("e8eb"),i=e.n(s);i.a},"360a":function(t,a,e){},"376e":function(t,a,e){"use strict";var s=e("7f17"),i=e.n(s);i.a},"4a45":function(t,a,e){},"56ac":function(t,a,e){"use strict";var s=e("9b1e"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{class:{"modal-open":t.modalOpen},attrs:{id:"app"}},[s("h1",[t._v("ピンとシャフトの最適径計算")]),s("div",{staticClass:"input-container"},[s("div",{staticClass:"image",class:{hidden:!t.imageIsVisible}},[s("button",{staticClass:"close close-button",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.imageIsVisible=!t.imageIsVisible}}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas",class:{"fa-window-close":t.imageIsVisible,"fa-image":!t.imageIsVisible}})])]),s("transition",{attrs:{name:"fade"}},[t.imageIsVisible?s("img",{attrs:{src:e("aa61")}}):t._e()])],1),s("div",{staticClass:"input"},[s("input-table",{attrs:{pin:t.pin,shaft:t.shaft,housing:t.housing},on:{update:t.onUpdate}}),s("div",[s("label",{staticStyle:{"font-weight":"bold"}},[t._v("許容せん断応力/許容引張応力"),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.allowableShearStress,expression:"allowableShearStress",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.allowableShearStress},on:{input:function(a){a.target.composing||(t.allowableShearStress=t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])])],1)]),s("div",{staticClass:"canvas"},[s("simulation-canvas",{attrs:{pin:t.pin,shaft:t.shaft,housing:t.housing}})],1),s("output-table",{staticClass:"output",attrs:{results:[t.a,t.b,t.c,t.d,t.e,t.f,t.g]}}),s("notation"),s("div",{staticClass:"detail-button-container"},[s("button",{staticClass:"btn btn-outline-info",on:{click:function(a){t.modalOpen=!0}}},[t._v("詳細はこちら")])])],1),t.modalOpen?s("my-dialog",{on:{close:function(a){t.modalOpen=!1}}},[s("detailed-notation")],1):t._e()],1)},n=[],r=(e("7f7f"),e("28a5"),e("9393")),o=(e("386d"),e("c665")),h=e("aa9a"),c=e("a322"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("table",{staticClass:"input-table table table-striped table-bordered table-hover table-sm"},[t._m(0),e("tbody",[e("input-table-row",{attrs:{component:t.pin},on:{update:function(a){t.onUpdate(t.pin.name,a)}}}),e("input-table-row",{attrs:{component:t.shaft},on:{update:function(a){t.onUpdate(t.shaft.name,a)}}}),e("input-table-row",{attrs:{component:t.housing},on:{update:function(a){t.onUpdate(t.housing.name,a)}}})],1)])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("td",{staticStyle:{width:"100px"}}),e("th",[e("code",[t._v("D")]),t._v(" : 外径")]),e("th",[e("code",[t._v("σ")]),t._v(" : 許容引張応力")])])])}],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v(t._s(t.component.name))]),e("td",[e("input",{staticClass:"form-control",domProps:{value:t.component.diameterString},on:{input:function(a){t.onUpdate(a,"diameterString")}}})]),e("td",[e("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.component.stress},on:{input:function(a){t.onUpdate(a,"stress")}}})])])},d=[],f={props:["component"],methods:{onUpdate:function(t,a){this.$emit("update",{prop:a,value:t.target.value})}}},v=f,m=(e("9d81"),e("8bd9"),e("2877")),b=Object(m["a"])(v,p,d,!1,null,"b3a067cc",null);b.options.__file="InputTableRow.vue";var _=b.exports,g={props:["pin","shaft","housing"],components:{InputTableRow:_},methods:{onUpdate:function(t,a){var e=a.prop,s=a.value;this.$emit("update",{name:t,prop:e,value:s})}}},w=g,M=(e("c914"),e("7dfe"),Object(m["a"])(w,u,l,!1,null,"2fb9ea78",null));M.options.__file="InputTable.vue";var S=M.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table-striped table-bordered table-hover table-sm"},[t._m(0),e("tbody",t._l(t.results,function(a){return e("output-table-row",{key:a.name,attrs:{result:a,minN:t.minN,minNMm:t.minNMm}})}))])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("各部分")]),e("th",[t._v("最大荷重")]),e("th",[t._v("最大トルク")])])])}],y=e("8afe"),j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[e("code",[t._v(t._s(t.result.label))]),t._v(" : "+t._s(t.result.name))]),e("td",{class:{"table-danger":t.result.n===t.minN.first,"table-warning":t.result.n===t.minN.second}},[t._v(t._s(t.n))]),e("td",{class:{"table-danger":t.result.nMm===t.minNMm.first,"table-warning":t.result.nMm===t.minNMm.second}},[t._v(t._s(t.nMm))])])},C=[];function T(t){return t<.1||1e5<=t?t.toExponential(2):parseFloat(t.toPrecision(3))}var N={props:["result","minN","minNMm"],computed:{n:function(){return T(this.result.n)},nMm:function(){return T(this.result.nMm)}}},k=N,$=(e("21da"),e("56ac"),Object(m["a"])(k,j,C,!1,null,"38fa6a43",null));$.options.__file="OutputTableRow.vue";var E=$.exports;function P(t){var a=Math.min.apply(Math,Object(y["a"])(t)),e=t.filter(function(t){return t!=a}),s=Math.min.apply(Math,Object(y["a"])(e));return{first:a,second:s}}var I={components:{OutputTableRow:E},props:["results"],computed:{minN:function(){return P(this.results.map(function(t){return t.n}))},minNMm:function(){return P(this.results.map(function(t){return t.nMm}))}}},R=I,q=(e("f245"),e("2a6b"),Object(m["a"])(R,x,O,!1,null,"18227b10",null));q.options.__file="OutputTable.vue";var H=q.exports,U=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"notation"},[e("p",[t._v("※ ピン・シャフト・ハウジング(ハブ)それぞれの外径と許容引張応力"),e("code",[t._v("σ")]),t._v("を入力すると、"),e("code",[t._v("a")]),t._v("~"),e("code",[t._v("g")]),t._v("のそれぞれの部分が支えられる最大の荷重を表示します。最も小さな値が赤くハイライトされるので、荷重が増すとそこが最初に変形すると推測されます。")]),e("p",[t._v("※ 単位は何でもいいですが、寸法と"),e("code",[t._v("σ")]),t._v("に含まれる長さの単位を合わせてください。荷重・トルクともに"),e("code",[t._v("σ")]),t._v("に含まれる単位で表示されます。"),e("code",[t._v("σ")]),t._v("に"),e("code",[t._v("N/mm2")]),t._v("を使用するとトルクは"),e("code",[t._v("N・mm")]),t._v("となるので注意してください。")]),e("p",[t._v("※ 設定したい安全率で耐力を割ったものを許容引張応力としてください。")]),e("p",[t._v("※ 許容せん断応力は許容引張応力の"),e("code",[t._v("0.8倍")]),t._v("を初期値にしています。実験的にはこの程度になることが多いですが、ミーゼスの降伏条件式からは"),e("code",[t._v("1/√3")]),t._v("と導かれます。")]),e("p",[t._v("※ 結果は保証値ではありません 。様々な単純化や近似をして計算しています。"),e("del",[t._v("計算過程の詳細はこちら")])]),e("p",[t._v("※ スプリングピンを使用する場合はピン径として呼び径を入力し、"),e("code",[t._v("g")]),t._v("の数値がピンの2重せん断荷重(破壊荷重)から推定した許容荷重と等しくなるように"),e("code",[t._v("σp")]),t._v("を設定してください。耐力(許容応力)と引張強度(破壊応力)の違いに注意してください。")]),e("p",[t._v("※ 間違いの指摘や、実験や経験での知見をお持ちでしたら"),e("a",{attrs:{target:"_blank",href:"https://twitter.com/RyoNawa"}},[e("i",{staticClass:"fab fa-twitter"}),t._v("@RyoNawa")]),t._v("または"),e("a",{attrs:{href:"mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#109;&#115;&#104;&#97;&#99;&#107;&#101;&#114;&#115;&#46;&#99;&#111;&#46;&#106;&#112;"}},[e("i",{staticClass:"far fa-envelope"}),t._v("contact@mshackers.co.jp")]),t._v("までお願いします。")])])}],D=(e("376e"),{}),V=Object(m["a"])(D,U,A,!1,null,"08c6c0c2",null);V.options.__file="Notation.vue";var F=V.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("canvas",{staticClass:"canvas",attrs:{width:"400",height:"250"}})])}],J={props:["pin","shaft","housing"],mounted:function(){this.ctx=this.$el.getElementsByClassName("canvas")[0].getContext("2d"),this.ctx.lineWidth=1,this.draw()},watch:{"pin.radius":function(){this.draw()},"shaft.radius":function(){this.draw()},"housing.radius":function(){this.draw()}},methods:{draw:function(){this.ctx.save();var t=50/this.housing.radius,a=this.housing.radius*t,e=2*a,s=this.shaft.radius*t,i=2*s,n=this.pin.radius*t,r=2*n,o=400,h=250,c=230,u=50;this.ctx.clearRect(0,0,o,h),this.ctx.translate(60.5,100.5),this.ctx.strokeRect(u,0,c,e),this.ctx.clearRect(0,a-s,c,i),this.ctx.strokeRect(0,a-s,c,i),this.ctx.clearRect(100,0,r,e),this.ctx.strokeRect(100,0,r,e),this.dimensionLine(e,u+c+5,0,"ΦDh=".concat(this.housing.diameterString)),this.dimensionLine(i,-5,a-s,"ΦDs=".concat(this.shaft.diameterString),!0),this.dimensionLine(r,100+r,-5,"ΦDp=".concat(this.pin.diameterString),!0,Math.PI/2),this.ctx.restore()},dimensionLine:function(t,a,e,s,i,n){this.ctx.save(),this.ctx.translate(a,e),n&&this.ctx.rotate(n),i&&this.ctx.scale(-1,1),this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(40,0),this.ctx.moveTo(30,-30),this.ctx.lineTo(30,t),this.ctx.moveTo(25,10),this.ctx.lineTo(30,0),this.ctx.lineTo(35,10),this.ctx.moveTo(25,t-10),this.ctx.lineTo(30,t),this.ctx.lineTo(35,t-10),this.ctx.moveTo(0,t),this.ctx.lineTo(40,t),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore(),this.ctx.save();var r=i?-37:22;n?(this.ctx.translate(a+5,e+r),this.ctx.rotate(n)):this.ctx.translate(a+r,e-5),this.ctx.rotate(Math.PI/2*3),this.ctx.font="18px monospace",this.ctx.fillText(s,0,0),this.ctx.restore()}}},B=J,W=(e("fdea"),Object(m["a"])(B,L,z,!1,null,"57d42394",null));W.options.__file="SimulationCanvas.vue";var G=W.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"wrapper"}),e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"dialog-header"},[e("button",{staticClass:"close close-button",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.$emit("close")}}},[t._m(0)])]),e("div",{staticClass:"dialog-body"},[t._t("default")],2)])])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-window-close"})])}],X={},Y=X,Z=(e("22b5"),Object(m["a"])(Y,K,Q,!1,null,"3cb2e6ca",null));Z.options.__file="MyDialog.vue";var tt=Z.exports,at=function(){function t(a,e,s){Object(o["a"])(this,t),Object(c["a"])(this,"name",void 0),Object(c["a"])(this,"diameterString",void 0),Object(c["a"])(this,"stress",void 0),this.name=a,this.diameterString=e,this.stress=s}return Object(h["a"])(t,[{key:"validate",value:function(){return this.diameter&&this.stress}},{key:"radius",get:function(){return this.diameter/2}},{key:"diameter",get:function(){if(-1!==this.diameterString.search("/")){var t=this.diameterString.split("/"),a=Object(r["a"])(t,2),e=a[0],s=a[1];return parseFloat(e)/parseFloat(s)}return parseFloat(this.diameterString)}},{key:"stress",set:function(t){this.stress=parseFloat(t)||""}}]),t}(),et=function t(a,e){Object(o["a"])(this,t),Object(c["a"])(this,"label",void 0),Object(c["a"])(this,"name",void 0),Object(c["a"])(this,"archH",void 0),Object(c["a"])(this,"rad",void 0),Object(c["a"])(this,"archArea",void 0),Object(c["a"])(this,"area",void 0),Object(c["a"])(this,"archShearStrength",void 0),Object(c["a"])(this,"n",void 0),Object(c["a"])(this,"nMm",void 0),this.label=a,this.name=e},st={name:"app",components:{InputTable:S,OutputTable:H,Notation:F,SimulationCanvas:G,DetailedNotation:F,MyDialog:tt},data:function(){return{pin:new at("ピン","3",245),shaft:new at("シャフト","8",245),housing:new at("ハウジング","12",245),allowableShearStress:.8,imageIsVisible:!0,modalOpen:!1}},computed:{a:function(){var t=this.shaft.radius,a=new et("a","シャフト断面");return a.archH=t-this.pin.radius,a.rad=2*Math.acos(1-a.archH/t),a.archArea=a.rad*Math.pow(t,2)/2-(t-a.archH)*Math.sqrt(a.archH*(2*t-a.archH)),a.area=2*a.archArea,a.archShearStrength=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))-t)/t)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+t)/t)-2*this.pin.radius*t*Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/t)*Math.pow(t,3))*(this.shaft.stress*this.allowableShearStress/(12*t)),a.n=a.area*this.shaft.stress,a.nMm=4*a.archShearStrength,a},b:function(){var t=this.housing.radius,a=new et("b","ハウジング断面");a.archH=t-this.pin.radius,a.rad=2*Math.acos(1-a.archH/t),a.archArea=a.rad*Math.pow(t,2)/2-(t-a.archH)*Math.sqrt(a.archH*(2*t-a.archH)),a.area=2*(a.archArea-this.a.archArea),a.archShearStrength=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))-t)/t)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+t)/t)-2*this.pin.radius*t*Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/t)*Math.pow(t,3))*(this.housing.stress*this.allowableShearStress/(12*t));var e=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))-this.shaft.radius)/this.shaft.radius)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))+this.shaft.radius)/this.shaft.radius)-2*this.pin.radius*this.shaft.radius*Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/this.shaft.radius)*Math.pow(this.shaft.radius,3))*(this.housing.stress*this.allowableShearStress/(12*this.shaft.radius));return a.n=a.area*this.housing.stress,a.nMm=4*(a.archShearStrength-e),a},c:function(){var t=new et("c","ピンとシャフトの接触 ピン");return t.area=this.pin.diameter*this.shaft.diameter,t.archShearStrength=this.pin.diameter*this.pin.stress*Math.pow(this.shaft.radius,2)/3,t.n=t.area*this.pin.stress,t.nMm=2*t.archShearStrength,t},d:function(){var t=new et("d","ピンとシャフトの接触 シャフト");return t.archShearStrength=this.pin.diameter*this.shaft.stress*Math.pow(this.shaft.radius,2)/3,t.n=this.c.area*this.shaft.stress,t.nMm=2*t.archShearStrength,t},e:function(){var t=new et("e","ピンとハウジングの接触 ピン");return t.area=(this.housing.diameter-this.shaft.diameter)*this.pin.diameter,t.archShearStrength=this.pin.diameter*this.pin.stress*(Math.pow(this.housing.diameter,2)-Math.pow(this.shaft.diameter,2))/3,t.n=t.area*this.pin.stress,t.nMm=2*t.archShearStrength,t},f:function(){var t=new et("f","ピンとハウジングの接触 ハウジング");return t.archShearStrength=this.pin.diameter*this.housing.stress*(Math.pow(this.housing.diameter,2)-Math.pow(this.shaft.diameter,2))/3,t.n=this.e.area*this.housing.stress,t.nMm=2*t.archShearStrength,t},g:function(){var t=new et("g","ピン断面のせん断");return t.area=Math.PI*Math.pow(this.pin.radius,2),t.n=2*t.area*this.pin.stress*this.allowableShearStress,t.nMm=t.n*this.shaft.radius,t}},methods:{onUpdate:function(t){var a=t.name,e=t.prop,s=t.value;switch(a){case"ピン":this.pin[e]=s;break;case"シャフト":this.shaft[e]=s;break;case"ハウジング":this.housing[e]=s;break}}}},it=st,nt=(e("b62d"),e("b0a0"),Object(m["a"])(it,i,n,!1,null,"1075359e",null));nt.options.__file="App.vue";var rt=nt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(rt)}}).$mount("#app")},"622b":function(t,a,e){},"7dfe":function(t,a,e){"use strict";var s=e("f791"),i=e.n(s);i.a},"7f17":function(t,a,e){},"8bd9":function(t,a,e){"use strict";var s=e("ca9a"),i=e.n(s);i.a},"9b1e":function(t,a,e){},"9d81":function(t,a,e){"use strict";var s=e("9e3e"),i=e.n(s);i.a},"9e3e":function(t,a,e){},aa61:function(t,a,e){t.exports=e.p+"img/pin_optimizer1.93d8373a.svg"},ae14:function(t,a,e){},b0a0:function(t,a,e){"use strict";var s=e("e03b"),i=e.n(s);i.a},b62d:function(t,a,e){"use strict";var s=e("4a45"),i=e.n(s);i.a},c914:function(t,a,e){"use strict";var s=e("622b"),i=e.n(s);i.a},ca9a:function(t,a,e){},d801:function(t,a,e){},e03b:function(t,a,e){},e8eb:function(t,a,e){},e916:function(t,a,e){},f245:function(t,a,e){"use strict";var s=e("ae14"),i=e.n(s);i.a},f791:function(t,a,e){},fdea:function(t,a,e){"use strict";var s=e("360a"),i=e.n(s);i.a}});
//# sourceMappingURL=app.f42f7e1e.js.map