import{a as b}from"./adminBar-5e38ece2.js";import{_ as y,a as k}from"./flagKZ-07f97a3d.js";import{d as f,o as t,c as o,b as e,t as d,e as p,p as v,f as m,_ as x,u as w,g as _,h as $,a as u,i as D,F as I,j as C,n as S}from"./index-5dec5081.js";import{a as B}from"./axios-4a70c6fc.js";import{L}from"./loadingBar-489b64f4.js";const h=a=>(v("data-v-efd4f2f4"),a=a(),m(),a),N={class:"flex flex-col gap-[4px]"},j=h(()=>e("img",{src:y,class:"bg-transparent",alt:"car"},null,-1)),V={class:"rounded-[12px] flex align-center gap-2"},z=h(()=>e("img",{src:k,class:"h-4 rounded-[2px]",alt:"KZ"},null,-1)),A={key:0},F={key:1},M=f({__name:"carItem",props:{carData:{}},setup(a){return(s,r)=>(t(),o("div",{onClick:r[0]||(r[0]=c=>s.$router.push(`cars/${s.carData.id}`)),class:"cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2"},[e("div",N,[j,e("div",null,"Model: "+d(s.carData.model),1),e("div",null,[p("License Plate: "),e("span",V,[z,p(d(s.carData.licencePlate),1)])]),s.carData.driver&&s.carData.driver.user?(t(),o("div",A,"Driver: "+d(s.carData.driver.user.username),1)):(t(),o("div",F,"No Driver"))])]))}});const P=x(M,[["__scopeId","data-v-efd4f2f4"]]),i=a=>(v("data-v-5bbfcaeb"),a=a(),m(),a),T={class:"rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none"},E={key:1},K=i(()=>e("div",{class:"search p-[20px] flex align-center justify-end w-full gap-[8px]"},[e("input",{type:"text",placeholder:"Search for Cars"}),e("button",{class:"border-[1px] p-[2px]"},"Search")],-1)),R={class:"rounded-[12px] mt-[20px]"},Z=i(()=>e("div",{class:"text-[24px] rounded-4"},"Cars List",-1)),q=i(()=>e("div",null,null,-1)),G={class:"grid grid-cols-3 gap-[20px]"},H=f({__name:"index",setup(a){const s=w(),r=_([]),c=_(!0);$(async()=>{const l=await B.get("http://51.20.192.129/vehicles/all",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});r.value=l.data.content,c.value=!1});const g=async()=>{await s.push("cars/create")};return(l,J)=>(t(),o("main",null,[u(b),e("div",T,[c.value?(t(),D(L,{key:0})):(t(),o("div",E,[K,e("div",R,[e("div",{class:"flex justify-space-between align-center mb-4"},[Z,e("div",{onClick:g,class:"font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]"},"+ Add New Car")]),q,e("div",G,[(t(!0),o(I,null,C(r.value,n=>(t(),o("div",{key:n.id},[u(P,{class:S(["bg-[#eff]",{"bg-[#fef]":n.id%2===0}]),"car-data":n},null,8,["class","car-data"])]))),128))])])]))])]))}});const Y=x(H,[["__scopeId","data-v-5bbfcaeb"]]);export{Y as default};
