import{a as u}from"./adminBar-6b1ddad5.js";import{d as m}from"./driverItem-e109bd45.js";import{d as _,u as f,c as o,a as d,b as e,F as x,f as v,p as h,e as g,o as r,n as b,_ as y}from"./index-4d803603.js";const t=a=>(h("data-v-bff97435"),a=a(),g(),a),w={class:"rhs text-[black] px-[48px] py-[24px] w-full"},k=t(()=>e("div",{class:"search p-[20px] flex align-center justify-end w-full gap-[8px]"},[e("input",{type:"text",placeholder:"Search for Drivers"}),e("button",{class:"border-[1px] p-[2px]"},"Search")],-1)),N={class:"rounded-[12px]"},C=t(()=>e("div",{class:"text-[24px] my-4 rounded-4"},"Drivers List",-1)),D=t(()=>e("div",null,null,-1)),I=t(()=>e("div",{class:"grid grid-cols-4 w-[90%] mx-auto px-[24px] justify-between align-center font-bold p-2"},[e("div",null,"Firstname"),e("div",null,"Lastname"),e("div",null,"Email"),e("div",{class:"justify-end flex"},"Phone")],-1)),S=_({__name:"index",setup(a){const n=f(),l=[{id:1,data:{name:"Aidyn",lastname:"Zhumaqadyr",email:"aidyn03@gmail.com",phone:"87776665544"}},{id:2,data:{name:"Nursultan",lastname:"Nazarbayev",email:"nurs@gmail.com",phone:"8700000000"}},{id:3,data:{name:"Kairat",lastname:"Nurtas",email:"nurtasinger@gmail.com",phone:"8777777777"}},{id:4,data:{name:"Naruto",lastname:"Uzumaki",email:"narutothehokage@gmail.com",phone:"87077077777"}}],c=async i=>{await n.push(`drivers/${i}`)},p=()=>{n.push("drivers/create")};return(i,j)=>(r(),o("main",null,[d(u),e("div",w,[k,e("div",N,[e("div",{class:"flex justify-space-between align-center"},[C,e("div",{onClick:p,class:"font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]"},"+ Add New Driver")]),D,I,(r(),o(x,null,v(l,s=>e("div",{key:s.id},[d(m,{onClick:B=>c(s.id),class:b(["w-[90%] bg-[#eff]",{"bg-[#fef]":s.id%2===0}]),"driver-data":s.data},null,8,["onClick","class","driver-data"])])),64))])])]))}});const A=y(S,[["__scopeId","data-v-bff97435"]]);export{A as default};
