var d=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,i=(t,e)=>{for(var o in e||(e={}))b.call(e,o)&&c(t,o,e[o]);if(m)for(var o of m(e))h.call(e,o)&&c(t,o,e[o]);return t},p=(t,e)=>_(t,g(e));import{_ as v}from"./index.472ba73a.js";import{n as x,i as k,p as y,r as u,o as C,x as V,a as f,w,s as D}from"./vendor.f9fdd043.js";const E={name:"addForm",props:{},components:{},setup(t){const o=x({formData:{list:[{name:"upload",type:"upload",control:{modelValue:[],action:"http://localhost:3001/upload/single",listType:"picture-card",limit:2,onError:(r,s,l)=>{console.log("\u9519\u8BEF\u5F02\u5E38\u5904\u7406"),console.log(r,s,l)}},config:{tip:"\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848",btnText:""},item:{label:"\u56FE\u7247",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1637303910371",rulesComm:[]}}}),a=k(),n=()=>{a.value.validate(r=>{if(console.log(r),r)alert(a.value.getValue());else return console.log("error submit"),!1})};return setTimeout(()=>{a.value.setValue({upload:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]})},1e3),p(i({},y(o)),{submit:n,formName:a})}},N=D("\u63D0\u4EA4");function T(t,e,o,a,n,r){const s=u("ak-form-design"),l=u("el-button");return C(),V("div",null,[f(s,{formData:t.formData,ref:"formName"},null,8,["formData"]),f(l,{type:"primary",onClick:a.submit},{default:w(()=>[N]),_:1},8,["onClick"])])}var q=v(E,[["render",T]]);export{q as default};
