import{_ as h,a as y}from"./adminBar-5e38ece2.js";import{d as f,o,c as l,b as e,t as r,p as v,f as m,_ as g,u as b,g as p,h as k,a as _,i as w,F as I,j as $}from"./index-5dec5081.js";import{a as D}from"./axios-4a70c6fc.js";import{L as N}from"./loadingBar-489b64f4.js";const S=t=>(v("data-v-206817b8"),t=t(),m(),t),B={class:"flex flex-col gap-[4px]"},F=S(()=>e("img",{src:h,class:"bg-transparent",alt:"car"},null,-1)),L=f({__name:"fuelItem",props:{fuelData:{}},setup(t){return(a,s)=>(o(),l("div",{onClick:s[0]||(s[0]=i=>a.$router.push(`fueling/${a.fuelData.id}`)),class:"cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2"},[e("div",B,[F,e("div",null,"Username: "+r(a.fuelData.username),1),e("div",null,"First Name: "+r(a.fuelData.firstName),1),e("div",null,"Last Name: "+r(a.fuelData.lastName),1),e("div",null,"Email: "+r(a.fuelData.email),1)])]))}});const j=g(L,[["__scopeId","data-v-206817b8"]]),c=t=>(v("data-v-ae6613c0"),t=t(),m(),t),C={class:"rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none"},P={key:1},A=c(()=>e("div",{class:"search p-[20px] flex align-center justify-end w-full gap-[8px]"},[e("input",{type:"text",placeholder:"Search Fuelling Person"}),e("button",{class:"border-[1px] p-[2px]"},"Search")],-1)),E={class:"rounded-[12px]"},V=c(()=>e("div",{class:"text-[24px] my-4 rounded-4"},"Fuelling Personnel List",-1)),z=c(()=>e("div",null,null,-1)),M={class:"grid grid-cols-3 gap-[20px]"},R=f({__name:"index",setup(t){const a=b(),s=p([]),i=p(!0);k(async()=>{const u="fuel",d=await D.get(`http://51.20.192.129/users?role=${u}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});s.value=d.data.content,s.value=s.value.filter(n=>n.role==="fuel"),console.log(s.value),i.value=!1});const x=()=>{a.push("fueling/create")};return(u,d)=>(o(),l("main",null,[_(y),e("div",C,[i.value?(o(),w(N,{key:0})):(o(),l("div",P)),A,e("div",E,[e("div",{class:"flex justify-space-between align-center"},[V,e("div",{onClick:x,class:"font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]"},"+ Add New Fueling Person")]),z,e("div",M,[(o(!0),l(I,null,$(s.value,n=>(o(),l("div",{key:n.id},[_(j,{class:"bg-[#eff]","fuel-data":n},null,8,["fuel-data"])]))),128))])])])]))}});const H=g(R,[["__scopeId","data-v-ae6613c0"]]);export{H as default};
