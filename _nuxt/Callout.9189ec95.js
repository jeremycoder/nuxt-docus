import m from"./ContentSlot.957e4f20.js";import{a as d,l,o as _,f,j as a,q as o,h as c,u as r,a2 as v,a3 as h,s as g,k as y}from"./entry.606741cb.js";/* empty css                    */const C={class:"summary"},V={class:"content"},k=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const n=m,p=g;return _(),f("div",{class:c(["callout",[s.type]])},[a("span",{class:"preview",onClick:i},[a("span",C,[o(n,{use:t.$slots.summary},null,8,["use"])]),o(p,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(a("div",V,[o(n,{use:t.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}}),x=y(k,[["__scopeId","data-v-961b73c7"]]);export{x as default};
