import{_ as g,a as y}from"./adminBar-5e38ece2.js";import{d as m,o as s,c as o,b as e,t as r,p as v,f as x,_ as f,u as k,g as u,h as b,a as _,i as w,F as I,j as $}from"./index-5dec5081.js";import{a as D}from"./axios-4a70c6fc.js";import{L as N}from"./loadingBar-489b64f4.js";const S=a=>(v("data-v-5618e035"),a=a(),x(),a),B={class:"flex flex-col gap-[4px]"},L=S(()=>e("img",{src:g,class:"bg-transparent",alt:"car"},null,-1)),j=m({__name:"maintenanceItem",props:{maintainerData:{}},setup(a){return(t,n)=>(s(),o("div",{onClick:n[0]||(n[0]=c=>t.$router.push(`maintenance/${t.maintainerData.id}`)),class:"cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2"},[e("div",B,[L,e("div",null,"Username: "+r(t.maintainerData.username),1),e("div",null,"First Name: "+r(t.maintainerData.firstName),1),e("div",null,"Last Name: "+r(t.maintainerData.lastName),1),e("div",null,"Email: "+r(t.maintainerData.email),1)])]))}});const M=f(j,[["__scopeId","data-v-5618e035"]]),l=a=>(v("data-v-539c5aaa"),a=a(),x(),a),C={class:"rhs text-[black] px-[48px] py-[24px] w-full"},F={key:1},P=l(()=>e("div",{class:"search p-[20px] flex align-center justify-end w-full gap-[8px]"},[e("input",{type:"text",placeholder:"Search Maintenance Person"}),e("button",{class:"border-[1px] p-[2px]"},"Search")],-1)),A={class:"rounded-[12px]"},E=l(()=>e("div",{class:"text-[24px] my-4 rounded-4"},"Maintenance Personnel List",-1)),V=l(()=>e("div",null,null,-1)),z={class:"grid grid-cols-3 gap-[20px]"},R=m({__name:"index",setup(a){const t=k(),n=u([]),c=u(!0);b(async()=>{const d="maintenance",p=await D.get(`http://51.20.192.129/users?role=${d}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});n.value=p.data.content,n.value=n.value.filter(i=>i.role==="maintenance"),console.log(n.value),c.value=!1});const h=()=>{t.push("maintenance/create")};return(d,p)=>(s(),o("main",null,[_(y),e("div",C,[c.value?(s(),w(N,{key:0})):(s(),o("div",F,[P,e("div",A,[e("div",{class:"flex justify-space-between align-center"},[E,e("div",{onClick:h,class:"font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]"},"+ Add New Maintenance Person")]),V,e("div",z,[(s(!0),o(I,null,$(n.value,i=>(s(),o("div",{key:i.id},[_(M,{class:"bg-[#eff]","maintainer-data":i},null,8,["maintainer-data"])]))),128))])])]))])]))}});const H=f(R,[["__scopeId","data-v-539c5aaa"]]);export{H as default};
