import{d as h,u as y,i as l,c as v,a as g,b as e,w as o,v as n,t as V,h as N,p as j,e as P,o as x,_ as U}from"./index-4d803603.js";import{a as k}from"./adminBar-6b1ddad5.js";const a=i=>(j("data-v-5afa53df"),i=i(),P(),i),C={class:"rhs text-[black] px-[48px] py-[24px] w-full"},D={class:"flex justify-center flex-col w-full"},F=a(()=>e("div",{class:"text-[24px] font-bold mb-4"},"Create New Fueling Person",-1)),B=a(()=>e("div",{class:"text-[18px] font-bold mb-3"},"User Data",-1)),I={class:"grid grid-cols-3 gap-x-16 mb-4"},S={class:"btn flex justify-center mb-5 align-left flex-col"},E=a(()=>e("label",{for:"email",class:"font-italic mb-1"},"Email",-1)),M={class:"btn flex justify-center mb-5 align-left flex-col"},R=a(()=>e("label",{for:"firstname",class:"font-italic"},"First Name",-1)),A={class:"btn flex justify-center mb-5 align-left flex-col"},L=a(()=>e("label",{for:"lastname",class:"font-italic"},"Last Name",-1)),T={class:"btn flex justify-center mb-5 align-left flex-col"},q=a(()=>e("label",{for:"phone",class:"font-italic"},"Phone Number",-1)),z=a(()=>e("div",{class:"text-[18px] font-bold mb-3"},"Password",-1)),G={class:"grid grid-cols-3 gap-x-16 mb-4"},H={class:"btn flex justify-center mb-5 align-left flex-col"},J=a(()=>e("label",{for:"password1",class:"font-italic mb-1"},"Password",-1)),K={class:"btn flex justify-center mb-5 align-left flex-col"},O=a(()=>e("label",{for:"password2",class:"font-italic"},"Repeat Password",-1)),Q={class:""},W={key:0,class:"text-red mb-2"},X=h({__name:"create",setup(i){const b=y(),r=l(""),u=l(""),p=l(""),f=l(""),d=l(""),c=l(""),m=l(!1),_=l(""),w=async()=>{!c.value||!d.value||!u.value||!r.value||!p.value||!f.value?(m.value=!0,_.value="Fill All the Fields!"):c.value!==d.value?(m.value=!0,_.value="Passwords Does not Match!"):await b.push("/admin/drivers")};return(Y,s)=>(x(),v("main",null,[g(k),e("div",C,[e("div",D,[F,B,e("div",I,[e("div",S,[E,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t)},null,512),[[n,r.value]])]),e("div",M,[R,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"firstname","onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t)},null,512),[[n,u.value]])]),e("div",A,[L,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"lastname","onUpdate:modelValue":s[2]||(s[2]=t=>p.value=t)},null,512),[[n,p.value]])]),e("div",T,[q,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"phone","onUpdate:modelValue":s[3]||(s[3]=t=>f.value=t)},null,512),[[n,f.value]])])]),z,e("div",G,[e("div",H,[J,o(e("input",{type:"password",name:"",id:"password1",class:"max-w-[200px]","onUpdate:modelValue":s[4]||(s[4]=t=>d.value=t)},null,512),[[n,d.value]])]),e("div",K,[O,o(e("input",{type:"password",name:"",class:"max-w-[200px]",id:"password2","onUpdate:modelValue":s[5]||(s[5]=t=>c.value=t)},null,512),[[n,c.value]])])]),e("div",Q,[m.value===!0?(x(),v("div",W,V(_.value),1)):N("",!0),e("button",{onClick:w},"Create Fueling Person")])])])]))}});const ee=U(X,[["__scopeId","data-v-5afa53df"]]);export{ee as default};
