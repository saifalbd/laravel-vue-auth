(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5b8a84"],{"184e":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("loginRegisterLayout",{attrs:{title:"Forgot password",loading:e.loading}},[i("VeeOb",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.handleSubmit;return[i("v-card-text",[i("v-text-field",{attrs:{"error-messages":e.errorMessage,outlined:"",label:"email address"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(t){return o(e.submitFrom)}}},[i("v-icon",{attrs:{left:"",dark:""}},[e._v("mdi-login")]),e._v("\n            confirm\n            \n            ")],1)],1)]}}])})],1)},s=[],n=i("9ab4"),l=i("60a3"),r=i("4604"),a=i("5e47"),d=i("466b"),c=i("7bb1"),m=i("4c93");Object(c["c"])("required",Object(n["a"])(Object(n["a"])({},m["d"]),{message:"This field is required"})),Object(c["c"])("email",Object(n["a"])(Object(n["a"])({},m["b"]),{message:"This is not valid email"}));var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loading=!1,t.email="sahedksm@gmail.com",t.errorMessage="",t}return Object(n["d"])(t,e),t.prototype.resend=function(){return Object(n["b"])(this,void 0,void 0,(function(){return Object(n["e"])(this,(function(e){return[2]}))}))},t.prototype.submitFrom=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e,t,i=this;return Object(n["e"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),this.loading=!0,[4,r["a"].sendPasswordResetLink(this.email)];case 1:return t=o.sent(),this.loading=!1,this.$router.push({name:"resetPassword",query:{email:this.email}}),[3,3];case 2:return e=o.sent(),e.response&&(t=e.response,422===t.status&&(this.errorMessage=Object.values(t.data.errors).join("->"))),setTimeout((function(){i.loading=!1}),4e3),[2,e];case 3:return[2]}}))}))},t.prototype.emailOnChanged=function(e){this.errorMessage=""},t.prototype.mounted=function(){},Object(n["c"])([Object(l["d"])("email")],t.prototype,"emailOnChanged",null),t=Object(n["c"])([Object(l["a"])({components:{loginRegisterLayout:a["a"],ConfirmationCodeInput:d["a"],VeeP:c["b"],VeeOb:c["a"]}})],t),t}(l["c"]),h=u,p=h,b=i("2877"),v=i("6544"),f=i.n(v),O=i("8336"),y=i("99d9"),j=i("132d"),g=i("2fa4"),T=i("8654"),w=Object(b["a"])(p,o,s,!1,null,null,null);t["default"]=w.exports;f()(w,{VBtn:O["a"],VCardActions:y["a"],VCardText:y["b"],VIcon:j["a"],VSpacer:g["a"],VTextField:T["a"]})},4604:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var o=i("9ab4"),s=i("e1c0"),n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o["d"])(t,e),t.sendPasswordResetLink=function(e){return Object(o["b"])(this,void 0,void 0,(function(){var t;return Object(o["e"])(this,(function(i){switch(i.label){case 0:return[4,this.axios.post("/reset-password-send",{email:e})];case 1:return t=i.sent(),console.log(t.data),[2,t]}}))}))},t.matchToken=function(e,t){return Object(o["b"])(this,void 0,void 0,(function(){var i;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return[4,this.axios.post("/match-reset-token",{email:e,token:t})];case 1:return i=o.sent(),console.log(i),[2,i]}}))}))},t.generatePassword=function(e){return Object(o["b"])(this,void 0,void 0,(function(){var t;return Object(o["e"])(this,(function(i){switch(i.label){case 0:return[4,this.axios.post("/generate-password",e)];case 1:return t=i.sent(),console.log(t),[2,t]}}))}))},t}(s["a"])},"466b":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelOne,callback:function(t){e.modelOne=t},expression:"modelOne"}})],1)],1),i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelTwo,callback:function(t){e.modelTwo=t},expression:"modelTwo"}})],1)],1),i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelThree,callback:function(t){e.modelThree=t},expression:"modelThree"}})],1)],1),i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelFour,callback:function(t){e.modelFour=t},expression:"modelFour"}})],1)],1),i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelFive,callback:function(t){e.modelFive=t},expression:"modelFive"}})],1)],1),i("v-col",{attrs:{cols:"2"}},[i("v-card",{staticClass:"pa-1",attrs:{outlined:"",tile:""}},[i("v-text-field",{staticClass:"centered-input",attrs:{dense:"","hide-details":"",label:""},model:{value:e.modelSix,callback:function(t){e.modelSix=t},expression:"modelSix"}})],1)],1)],1)},s=[],n=i("9ab4"),l=i("60a3"),r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.modelOne="",t.modelTwo="",t.modelThree="",t.modelFour="",t.modelFive="",t.modelSix="",t.modelGroup=["modelOne","modelTwo","modelThree","modelFour","modelFive","modelSix"],t}return Object(n["d"])(t,e),t.prototype.isEmpty=function(e){return!this[e]||" "===this[e]},t.prototype.emitValue=function(){var e=this,t=this.modelGroup.map((function(t){var i=t;return e[i]})).join("");this.$emit("input",t)},t.prototype.modelOneChanged=function(e){this.emitValue()},t.prototype.modelTwoChanged=function(e){e.trim()&&(this.isEmpty("modelOne")&&(this.modelOne=e,this.modelTwo=" "),this.emitValue())},t.prototype.modelThreeChanged=function(e){e.trim()&&(this.isEmpty("modelOne")?(this.modelOne=e.trim(),this.modelThree=" "):this.isEmpty("modelTwo")&&(this.modelTwo=e.trim(),this.modelThree=" "),this.emitValue())},t.prototype.modelFourChanged=function(e){e.trim()&&(this.isEmpty("modelOne")?(this.modelOne=e.trim(),this.modelFour=" "):this.isEmpty("modelTwo")?(this.modelTwo=e.trim(),this.modelFour=" "):this.isEmpty("modelThree")&&(this.modelThree=e.trim(),this.modelFour=" "),this.emitValue())},t.prototype.modelFiveChanged=function(e){e.trim()&&(this.isEmpty("modelOne")?(this.modelOne=e.trim(),this.modelFive=" "):this.isEmpty("modelTwo")?(this.modelTwo=e.trim(),this.modelFive=" "):this.isEmpty("modelThree")?(this.modelThree=e.trim(),this.modelFive=" "):this.isEmpty("modelFour")&&(this.modelFour=e.trim(),this.modelFive=" "),this.emitValue())},t.prototype.modelSixChanged=function(e){e.trim()&&(this.isEmpty("modelOne")?(this.modelOne=e.trim(),this.modelSix=" "):this.isEmpty("modelTwo")?(this.modelTwo=e.trim(),this.modelSix=" "):this.isEmpty("modelThree")?(this.modelThree=e.trim(),this.modelSix=" "):this.isEmpty("modelFour")?(this.modelFour=e.trim(),this.modelSix=" "):this.isEmpty("modelFive")&&(this.modelFive=e.trim(),this.modelSix=" "),this.emitValue())},t.prototype.modelGroupOnChanged=function(e,t){return Object(n["b"])(this,void 0,void 0,(function(){return Object(n["e"])(this,(function(e){return this[t]=" ",[2]}))}))},Object(n["c"])([Object(l["d"])("modelOne")],t.prototype,"modelOneChanged",null),Object(n["c"])([Object(l["d"])("modelTwo")],t.prototype,"modelTwoChanged",null),Object(n["c"])([Object(l["d"])("modelThree")],t.prototype,"modelThreeChanged",null),Object(n["c"])([Object(l["d"])("modelFour")],t.prototype,"modelFourChanged",null),Object(n["c"])([Object(l["d"])("modelFive")],t.prototype,"modelFiveChanged",null),Object(n["c"])([Object(l["d"])("modelSix")],t.prototype,"modelSixChanged",null),t=Object(n["c"])([l["a"]],t),t}(l["c"]),a=r,d=a,c=(i("c8ee"),i("2877")),m=i("6544"),u=i.n(m),h=i("b0af"),p=i("62ad"),b=i("0fd9"),v=i("8654"),f=Object(c["a"])(d,o,s,!1,null,"91c039a4",null);t["a"]=f.exports;u()(f,{VCard:h["a"],VCol:p["a"],VRow:b["a"],VTextField:v["a"]})},"6f3c":function(e,t,i){},c8ee:function(e,t,i){"use strict";var o=i("6f3c"),s=i.n(o);s.a}}]);
//# sourceMappingURL=chunk-0f5b8a84.77ff7c94.js.map