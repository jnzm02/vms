import{d as b,u as y,g as s,c as v,a as g,b as e,w as i,v as n,t as h,k as w,l as N,p as V,f as k,o as _,_ as D}from"./index-5dec5081.js";import{a as j}from"./adminBar-5e38ece2.js";const o=l=>(V("data-v-c7a1fff3"),l=l(),k(),l),S={class:"rhs text-[black] px-[48px] py-[24px] w-full"},C={class:"flex justify-center flex-col w-full"},U=o(()=>e("div",{class:"text-[24px] font-bold mb-4"},"Create an Appointment",-1)),A={class:"grid grid-cols-3 gap-x-16 mb-4"},B={class:"btn flex justify-center mb-5 align-left flex-col"},I=o(()=>e("label",{for:"name",class:"font-italic mb-1"},"Name",-1)),E={class:"btn flex justify-center mb-5 align-left flex-col"},F=o(()=>e("label",{for:"description",class:"font-italic"},"Description",-1)),P={class:"btn flex justify-center mb-5 align-left flex-col"},z=o(()=>e("label",{for:"start_position",class:"font-italic"},"Start Position",-1)),M={class:"btn flex justify-center mb-5 align-left flex-col"},q=o(()=>e("label",{for:"end_position",class:"font-italic"},"End Position",-1)),K=N('<div class="btn flex justify-center mb-5 align-left flex-col" data-v-c7a1fff3><label for="end_position" class="font-italic" data-v-c7a1fff3>Assign Driver</label><select name="assignDriver" id="assignDriver" data-v-c7a1fff3><option value="driver1" data-v-c7a1fff3>Aidyn Zhumaqadyr</option><option value="driver2" data-v-c7a1fff3>Nursultan Nazarbayev</option><option value="driver3" data-v-c7a1fff3>Kairat Nurtas</option><option value="driver4" data-v-c7a1fff3>Naruto Uzumaki</option></select></div>',1),R={class:""},T={key:0,class:"text-red mb-2"},Z=b({__name:"create",setup(l){const m=y(),c=s(""),r=s(""),d=s(""),f=s(""),u=s(!1),p=s(""),x=async()=>{!c.value||!r.value||!d.value||!f.value?(u.value=!0,p.value="Fill All the Fields!"):await m.push("/admin/routes")};return(G,t)=>(_(),v("main",null,[g(j),e("div",S,[e("div",C,[U,e("div",A,[e("div",B,[I,i(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a)},null,512),[[n,c.value]])]),e("div",E,[F,i(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"firstname","onUpdate:modelValue":t[1]||(t[1]=a=>r.value=a)},null,512),[[n,r.value]])]),e("div",P,[z,i(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"start_position","onUpdate:modelValue":t[2]||(t[2]=a=>d.value=a)},null,512),[[n,d.value]])]),e("div",M,[q,i(e("input",{type:"text",class:"max-w-[200px]",name:"",id:"end_position","onUpdate:modelValue":t[3]||(t[3]=a=>f.value=a)},null,512),[[n,f.value]])])]),K,e("div",R,[u.value===!0?(_(),v("div",T,h(p.value),1)):w("",!0),e("button",{onClick:x},"Create Fueling Person")])])])]))}});const L=D(Z,[["__scopeId","data-v-c7a1fff3"]]);export{L as default};
