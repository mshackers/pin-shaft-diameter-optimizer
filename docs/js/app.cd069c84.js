(function(t){function a(a){for(var r,i,h=a[0],o=a[1],u=a[2],c=0,l=[];c<h.length;c++)i=h[c],s[i]&&l.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);p&&p(a);while(l.length)l.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,h=1;h<e.length;h++){var o=e[h];0!==s[o]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},s={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],o=h.push.bind(h);h.push=a,h=h.slice();for(var u=0;u<h.length;u++)a(h[u]);var p=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("c21b"),s=e.n(r);s.a},3600:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",staticStyle:{"max-width":"640px","margin-top":"1rem"},attrs:{id:"app"}},[e("div",{staticStyle:{"margin-bottom":"2rem"}},[e("input-table",{attrs:{pin:t.pin,shaft:t.shaft,housing:t.housing},on:{update:t.onUpdate}}),e("div",[e("label",{staticStyle:{"font-weight":"bold"}},[t._v("許容せん断応力/許容引張応力"),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.allowableShearStress,expression:"allowableShearStress",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.allowableShearStress},on:{input:function(a){a.target.composing||(t.allowableShearStress=t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])])],1),e("output-table",{attrs:{results:[t.a,t.b,t.c,t.d,t.e,t.f,t.g]}})],1)},n=[],i=(e("7f7f"),e("c665")),h=e("aa9a"),o=e("a322"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("table",{staticClass:"table table-striped table-bordered table-hover table-sm"},[t._m(0),e("tbody",[e("input-table-row",{attrs:{component:t.pin},on:{update:function(a){t.onUpdate(t.pin.name,a)}}}),e("input-table-row",{attrs:{component:t.shaft},on:{update:function(a){t.onUpdate(t.shaft.name,a)}}}),e("input-table-row",{attrs:{component:t.housing},on:{update:function(a){t.onUpdate(t.housing.name,a)}}})],1)])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("td"),e("th",[t._v("外径")]),e("th",[t._v("応力")])])])}],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v(t._s(t.component.name))]),e("td",[e("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.component.diameter},on:{input:function(a){t.onUpdate(a,"diameter")}}})]),e("td",[e("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.component.stress},on:{input:function(a){t.onUpdate(a,"stress")}}})])])},l=[],d={props:["component"],methods:{onUpdate:function(t,a){this.$emit("update",{prop:a,value:parseFloat(t.target.value)||""})}}},f=d,b=(e("c772"),e("2877")),m=Object(b["a"])(f,c,l,!1,null,null,null);m.options.__file="InputTableRow.vue";var v=m.exports,w={props:["pin","shaft","housing"],components:{InputTableRow:v},methods:{onUpdate:function(t,a){var e=a.prop,r=a.value;this.$emit("update",{name:t,prop:e,value:r})}}},M=w,g=(e("9a84"),Object(b["a"])(M,u,p,!1,null,null,null));g.options.__file="InputTable.vue";var S=g.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table-striped table-bordered table-hover table-sm"},[t._m(0),e("tbody",t._l(t.results,function(t){return e("output-table-row",{key:t.name,attrs:{result:t}})}))])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("壊れる部分")]),e("th",[t._v("最大荷重 N")]),e("th",[t._v("最大トルク N・mm")])])])}],j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v(t._s(t.result.name))]),e("td",[t._v(t._s(Math.round(t.result.n)))]),e("td",[t._v(t._s(Math.round(t.result.nMm)))])])},y=[],x={props:["result"]},q=x,H=(e("bf4b"),Object(b["a"])(q,j,y,!1,null,null,null));H.options.__file="OutputTableRow.vue";var T=H.exports,$={components:{OutputTableRow:T},props:["results"]},P=$,U=(e("d218"),Object(b["a"])(P,_,O,!1,null,null,null));U.options.__file="OutputTable.vue";var k=U.exports,A=function(){function t(a,e,r){Object(i["a"])(this,t),Object(o["a"])(this,"name",void 0),Object(o["a"])(this,"diameter",void 0),Object(o["a"])(this,"stress",void 0),this.name=a,this.diameter=e,this.stress=r}return Object(h["a"])(t,[{key:"validate",value:function(){return this.diameter&&this.stress}},{key:"radius",get:function(){return this.diameter/2}}]),t}(),E=function t(a){Object(i["a"])(this,t),Object(o["a"])(this,"label",void 0),Object(o["a"])(this,"name",void 0),Object(o["a"])(this,"archH",void 0),Object(o["a"])(this,"rad",void 0),Object(o["a"])(this,"archArea",void 0),Object(o["a"])(this,"area",void 0),Object(o["a"])(this,"archShearStrength",void 0),Object(o["a"])(this,"n",void 0),Object(o["a"])(this,"nMm",void 0),this.name=a},C={name:"app",components:{InputTable:S,OutputTable:k},data:function(){return{pin:new A("ピン",3,300),shaft:new A("シャフト",7,1200),housing:new A("ハウジング",11,1200),allowableShearStress:.8}},computed:{a:function(){var t=this.shaft.radius,a=new E("a: シャフト断面");return a.archH=t-this.pin.radius,a.rad=2*Math.acos(1-a.archH/t),a.archArea=a.rad*Math.pow(t,2)/2-(t-a.archH)*Math.sqrt(a.archH*(2*t-a.archH)),a.area=2*a.archArea,a.archShearStrength=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))-t)/t)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+t)/t)-2*this.pin.radius*t*Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/t)*Math.pow(t,3))*(this.shaft.stress*this.allowableShearStress/(12*t)),a.n=a.area*this.shaft.stress,a.nMm=4*a.archShearStrength,a},b:function(){var t=this.housing.radius,a=new E("b: ハウジング断面");a.archH=t-this.pin.radius,a.rad=2*Math.acos(1-a.archH/t),a.archArea=a.rad*Math.pow(t,2)/2-(t-a.archH)*Math.sqrt(a.archH*(2*t-a.archH)),a.area=2*(a.archArea-this.a.archArea),a.archShearStrength=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))-t)/t)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+t)/t)-2*this.pin.radius*t*Math.sqrt(Math.pow(t,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/t)*Math.pow(t,3))*(this.housing.stress*this.allowableShearStress/(12*t));var e=(Math.pow(this.pin.radius,3)*Math.log(Math.abs(Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))-this.shaft.radius)/this.shaft.radius)-Math.pow(this.pin.radius,3)*Math.log((Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))+this.shaft.radius)/this.shaft.radius)-2*this.pin.radius*this.shaft.radius*Math.sqrt(Math.pow(this.shaft.radius,2)-Math.pow(this.pin.radius,2))+4*Math.acos(this.pin.radius/this.shaft.radius)*Math.pow(this.shaft.radius,3))*(this.housing.stress*this.allowableShearStress/(12*this.shaft.radius));return a.n=a.area*this.housing.stress,a.nMm=4*(a.archShearStrength-e),a},c:function(){var t=new E("c: ピンとシャフトの接触 ピン");return t.area=this.pin.diameter*this.shaft.diameter,t.archShearStrength=this.pin.diameter*this.pin.stress*Math.pow(this.shaft.radius,2)/3,t.n=t.area*this.pin.stress,t.nMm=2*t.archShearStrength,t},d:function(){var t=new E("d: ピンとシャフトの接触 シャフト");return t.archShearStrength=this.pin.diameter*this.shaft.stress*Math.pow(this.shaft.radius,2)/3,t.n=this.c.area*this.shaft.stress,t.nMm=2*t.archShearStrength,t},e:function(){var t=new E("e: ピンとハウジングの接触 ピン");return t.area=(this.housing.diameter-this.shaft.diameter)*this.pin.diameter,t.archShearStrength=this.pin.diameter*this.pin.stress*(Math.pow(this.housing.diameter,2)-Math.pow(this.shaft.diameter,2))/3,t.n=t.area*this.pin.stress,t.nMm=2*t.archShearStrength,t},f:function(){var t=new E("f: ピンとハウジングの接触 ハウジング");return t.archShearStrength=this.pin.diameter*this.housing.stress*(Math.pow(this.housing.diameter,2)-Math.pow(this.shaft.diameter,2))/3,t.n=this.e.area*this.housing.stress,t.nMm=2*t.archShearStrength,t},g:function(){var t=new E("g: ピン断面のせん断");return t.area=Math.PI*Math.pow(this.pin.radius,2),t.n=2*t.area*this.pin.stress*this.allowableShearStress,t.nMm=t.n*this.shaft.radius,t}},methods:{onUpdate:function(t){var a=t.name,e=t.prop,r=t.value;switch(a){case"ピン":this.pin[e]=r;break;case"シャフト":this.shaft[e]=r;break;case"ハウジング":this.housing[e]=r;break}}}},I=C,R=(e("034f"),Object(b["a"])(I,s,n,!1,null,null,null));R.options.__file="App.vue";var N=R.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(N)}}).$mount("#app")},"9a84":function(t,a,e){"use strict";var r=e("ac0f"),s=e.n(r);s.a},ac0f:function(t,a,e){},b252:function(t,a,e){},bf4b:function(t,a,e){"use strict";var r=e("eb54"),s=e.n(r);s.a},c21b:function(t,a,e){},c772:function(t,a,e){"use strict";var r=e("b252"),s=e.n(r);s.a},d218:function(t,a,e){"use strict";var r=e("3600"),s=e.n(r);s.a},eb54:function(t,a,e){}});
//# sourceMappingURL=app.cd069c84.js.map