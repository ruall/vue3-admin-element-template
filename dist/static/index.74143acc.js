var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t,a)=>new Promise(((l,n)=>{var o=e=>{try{r(a.next(e))}catch(t){n(t)}},i=e=>{try{r(a.throw(e))}catch(t){n(t)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);r((a=a.apply(e,t)).next())}));import{i as s}from"./index.e64ca411.js";import{_ as c}from"./index.4a8845ec.js";import{B as p,K as b,aM as d,O as u,p as f,a as m,r as h,o as P,b as v,f as y,w as g,z as w,F as O,G as j,D,e as _,H as x,A as k}from"./vendor.29147fb2.js";const I={components:{Descrition:c},setup(){const{t:e}=p(),c=b({icon:{}});d((()=>r(this,null,(function*(){yield f()}))));const f=()=>r(this,null,(function*(){s({url:"/icon",method:"get"}).then((e=>{c.icon=e.data}))}));return m=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&i(e,a,t[a]);return e})({},u(c)),t(m,a({t:e}));var m}};f("data-v-83cb2f6e");const z={class:"icon-container"},A=D(" Vue3-admin 推荐使用 "),B=w("a",{href:"https://iconpark.oceanengine.com/official",target:"_blank"},"IconPark",-1),E=D(" 作为图标库 "),F={class:"icon-centent"},G={class:"icon-title"};m(),I.render=function(e,t,a,l,n,o){const i=h("Descrition"),r=h("el-table-column"),s=h("el-table");return P(),v("div",z,[y(i,{title:l.t("iconPage.title")},{descrition:g((()=>[A,B,E])),_:1},8,["title"]),y(i,{title:l.t("iconPage.demo"),showDesc:!1},null,8,["title"]),w("div",F,[(P(!0),v(O,null,j(e.icon.icons,((e,t)=>(P(),v("div",{class:"icon-item",key:t},[(P(),_(x(e.name),{class:"icon-name",size:"20"})),w("p",G,k(e.name),1)])))),128))]),y(i,{title:l.t("iconPage.props"),showDesc:!1},null,8,["title"]),y(s,{data:e.icon.props,border:"",style:{width:"100%"}},{default:g((()=>[y(r,{prop:"param",label:l.t("iconPage.table.label1"),width:"180"},null,8,["label"]),y(r,{prop:"type",label:l.t("iconPage.table.label2"),width:"180"},null,8,["label"]),y(r,{prop:"all",label:l.t("iconPage.table.label3")},null,8,["label"]),y(r,{prop:"default",label:l.t("iconPage.table.label4")},null,8,["label"]),y(r,{prop:"desc",label:l.t("iconPage.table.label5")},null,8,["label"])])),_:1},8,["data"])])},I.__scopeId="data-v-83cb2f6e";export{I as default};
