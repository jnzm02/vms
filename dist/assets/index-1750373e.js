import{a as g}from"./adminBar-5e38ece2.js";import{a as y}from"./axios-4a70c6fc.js";import{L as $}from"./loadingBar-489b64f4.js";import{_ as k,a as b}from"./flagKZ-07f97a3d.js";import{d as x,o as s,c as n,b as e,t as l,e as p,p as v,f as h,_ as m,g as u,h as I,a as _,i as w,F as S,j as B}from"./index-5dec5081.js";const f=t=>(v("data-v-d2a2c515"),t=t(),h(),t),D={class:"flex flex-col gap-[4px]"},j=f(()=>e("img",{src:k,class:"bg-transparent",alt:"car"},null,-1)),A={class:"rounded-[12px] flex align-center gap-2"},L=f(()=>e("img",{src:b,class:"h-4 rounded-[2px]",alt:"KZ"},null,-1)),C=x({__name:"auctionItem",props:{auctionData:{}},setup(t){return(a,o)=>(s(),n("div",{onClick:o[0]||(o[0]=c=>a.$router.push(`auction/${a.auctionData.id}`)),class:"flex rounded-[20px] px-[24px] w-full justify-center align-center p-2 cursor-pointer"},[e("div",D,[j,e("div",null,"Model: "+l(a.auctionData.vehicle.model),1),e("div",null,[p("License Plate: "),e("span",A,[L,p(l(a.auctionData.vehicle.licencePlate),1)])]),e("div",null,"Year: "+l(a.auctionData.vehicle.year),1)])]))}});const N=m(C,[["__scopeId","data-v-d2a2c515"]]),r=t=>(v("data-v-877caa34"),t=t(),h(),t),V={class:"rhs text-[black] px-[48px] py-[24px] w-full"},F={key:1},M=r(()=>e("div",{class:"search p-[20px] flex align-center justify-end w-full gap-[8px]"},[e("input",{type:"text",placeholder:"Search Auction"}),e("button",{class:"border-[1px] p-[2px]"},"Search")],-1)),P={class:"rounded-[12px]"},T={class:"flex justify-space-between align-center"},z=r(()=>e("div",{class:"text-[24px] my-4 rounded-4"},"Auctions",-1)),E=r(()=>e("div",null,null,-1)),K={class:"grid grid-cols-3 gap-[20px]"},Y=x({__name:"index",setup(t){const a=u([]),o=u(!0);return I(async()=>{const c=await y.get("http://51.20.192.129/auctions/all",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});a.value=c.data.content,o.value=!1}),(c,d)=>(s(),n("main",null,[_(g),e("div",V,[o.value?(s(),w($,{key:0})):(s(),n("div",F,[M,e("div",P,[e("div",T,[z,e("div",{onClick:d[0]||(d[0]=i=>c.$router.push("auction/create")),class:"font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]"},"+ New Auction")]),E,e("div",K,[(s(!0),n(S,null,B(a.value,i=>(s(),n("div",{key:i.id},[_(N,{class:"bg-[#eff]","auction-data":i},null,8,["auction-data"])]))),128))])])]))])]))}});const O=m(Y,[["__scopeId","data-v-877caa34"]]);export{O as default};
