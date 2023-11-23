import{d as h,u as y,g as l,c as v,a as g,b as e,w as o,v as n,t as V,h as N,p as j,f as P,o as x,_ as U}from"./index-7b712446.js";import{_ as k}from"./adminBar.vue_vue_type_style_index_0_lang-78c47d1e.js";const a=i=>(j("data-v-364b8eba"),i=i(),P(),i),C={class:"rhs text-[black] px-[48px] py-[24px]"},D={class:"flex justify-center flex-col w-full"},F=a(()=>e("div",{class:"text-[24px] font-bold mb-4"},"Create New Fueling Person",-1)),I=a(()=>e("div",{class:"text-[18px] font-bold mb-3"},"User Data",-1)),S={class:"grid grid-cols-3 gap-x-16 mb-4"},B={class:"btn flex justify-center mb-5 align-left flex-col"},E=a(()=>e("label",{for:"email",class:"font-italic mb-1"},"Email",-1)),M={class:"btn flex justify-center mb-5 align-left flex-col"},R=a(()=>e("label",{for:"firstname",class:"font-italic"},"First Name",-1)),A={class:"btn flex justify-center mb-5 align-left flex-col"},L=a(()=>e("label",{for:"lastname",class:"font-italic"},"Last Name",-1)),T={class:"btn flex justify-center mb-5 align-left flex-col"},$=a(()=>e("label",{for:"phone",class:"font-italic"},"Phone Number",-1)),q=a(()=>e("div",{class:"text-[18px] font-bold mb-3"},"Password",-1)),z={class:"grid grid-cols-3 gap-x-16 mb-4"},G={class:"btn flex justify-center mb-5 align-left flex-col"},H=a(()=>e("label",{for:"password1",class:"font-italic mb-1"},"Password",-1)),J={class:"btn flex justify-center mb-5 align-left flex-col"},K=a(()=>e("label",{for:"password2",class:"font-italic"},"Repeat Password",-1)),O={class:""},Q={key:0,class:"text-red mb-2"},W=h({__name:"create",setup(i){const b=y(),r=l(""),u=l(""),p=l(""),f=l(""),d=l(""),c=l(""),m=l(!1),_=l(""),w=async()=>{!c.value||!d.value||!u.value||!r.value||!p.value||!f.value?(m.value=!0,_.value="Fill All the Fields!"):c.value!==d.value?(m.value=!0,_.value="Passwords Does not Match!"):await b.push("/admin/drivers")};return(X,s)=>(x(),v("main",null,[g(k),e("div",C,[e("div",D,[F,I,e("div",S,[e("div",B,[E,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t)},null,512),[[n,r.value]])]),e("div",M,[R,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"firstname","onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t)},null,512),[[n,u.value]])]),e("div",A,[L,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"lastname","onUpdate:modelValue":s[2]||(s[2]=t=>p.value=t)},null,512),[[n,p.value]])]),e("div",T,[$,o(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"phone","onUpdate:modelValue":s[3]||(s[3]=t=>f.value=t)},null,512),[[n,f.value]])])]),q,e("div",z,[e("div",G,[H,o(e("input",{type:"password",name:"",id:"password1",class:"max-w-[200px]","onUpdate:modelValue":s[4]||(s[4]=t=>d.value=t)},null,512),[[n,d.value]])]),e("div",J,[K,o(e("input",{type:"password",name:"",class:"max-w-[200px]",id:"password2","onUpdate:modelValue":s[5]||(s[5]=t=>c.value=t)},null,512),[[n,c.value]])])]),e("div",O,[m.value===!0?(x(),v("div",Q,V(_.value),1)):N("",!0),e("button",{onClick:w},"Create Fueling Person")])])])]))}});const ee=U(W,[["__scopeId","data-v-364b8eba"]]);export{ee as default};
