import{d as b,u as y,A as h,k,l as D,L as q,h as i,p as x,r as B,B as C,s as E,o as F,c as I,i as S,$ as l,x as j,D as L,W as R,q as T,E as d}from"./index-97c8c12b.js";const M={style:{"min-height":"300px"}},O=b({__name:"form",setup(w){const f=y(),c=h(),m=k(),u=D(),e=q({formData:{list:[],form:{},config:{}},dict:{},loading:!0}),n=i(()=>c.query.id),a=i(()=>c.query.form),g=i(()=>n.value?2:1),v=()=>{if(!a.value)return l.error("非法操作."),!1;const t={id:a.value};j("designById",t).then(r=>{var s;const o=r.data;o&&Object.keys(o).length&&(e.formData=L(o.data),e.dict=R(o.dict),(n.value||(s=e.formData.config)!=null&&s.addLoad)&&u.value.getData({formId:a.value,id:n.value}),f.changeBreadcrumb([{label:"内容管理"},{label:o.name}])),T(()=>{e.loading=!1})}).catch(r=>{e.loading=!1,l.error(r.message||"非法操作..")})},p=t=>(t.formId=a.value,t),_=t=>{t==="success"&&m.go(-1)};return x(()=>{v()}),(t,r)=>{const o=B("ak-form"),s=C("loading");return E((F(),I("div",M,[S(o,{ref_key:"formEl",ref:u,data:e.formData,type:g.value,dict:e.dict,"request-url":"getFormContent","submit-url":"saveFormContent","edit-url":"editFormContent","before-submit":p,"after-submit":_},null,8,["data","type","dict"])])),[[s,e.loading]])}}});typeof d=="function"&&d(O);export{O as default};
