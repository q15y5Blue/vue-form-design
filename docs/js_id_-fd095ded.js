import{d as f,A as g,l as o,V as v,h as _,p as h,o as s,c as i,F as b,a as k,b as y,z as D,E as u}from"./assets/index-be6f6fba.js";import{g as S,_ as B}from"./jsgetData-74220cd6.js";import"./jsechartsInt.vue_vue_type_script_setup_true_lang-32701cd7.js";const x=f({__name:"[id]",setup(z){const d=g(),l=o(!0),r=o({});v("globalScreen",r);const e=o({list:[],config:{}}),p=_(()=>{const{width:a,height:c,background:t,primary:n}=e.value.config;return{width:a,height:c,background:t,color:n,position:"relative"}}),m=()=>{S(d.params.id).then(a=>{l.value=!1,e.value=a.screenData,r.value=a.globalData}).catch(()=>{l.value=!1})};return h(()=>{m()}),(a,c)=>(s(),i("div",{style:D(p.value),class:"design-canvas"},[(s(!0),i(b,null,k(e.value.list,(t,n)=>(s(),y(B,{key:n,data:t},null,8,["data"]))),128))],4))}});typeof u=="function"&&u(x);export{x as default};
