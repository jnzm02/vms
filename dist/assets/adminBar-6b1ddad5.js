import{d as c,u as p,i as l,o as d,c as v,b as i,n as t,k as m,_ as u}from"./index-4d803603.js";const x="/assets/profile-6ac7405c.svg",b="/assets/arrow-dd5c240e.svg",f={class:"lhs flex flex-column justify-center align-center"},_={class:"bar w-[100%] text-white h-[70vh]"},g=m('<div class="img flex justify-center align-center w-[60px]" data-v-c7ec5bdb><img src="'+x+'" class="w-[48px]" alt="profile" data-v-c7ec5bdb></div><div class="" data-v-c7ec5bdb><div class="name text-[22px]" data-v-c7ec5bdb>Aidyn</div><div class="email text-[12px]" data-v-c7ec5bdb>Aidyn@gmail.com</div></div><div class="img flex justify-center align-center w-[60px]" data-v-c7ec5bdb><img class="w-[30px]" src="'+b+'" alt="arrow" data-v-c7ec5bdb></div>',3),y=[g],k=c({__name:"adminBar",setup(C){const r=p(),a=l(r.currentRoute.value.fullPath),s=async o=>{a.value=o,console.log(r.currentRoute.value),await r.push(`${o}`)};return(o,e)=>(d(),v("div",f,[i("div",_,[i("div",{class:t(["admin gap-[16px] mb-[24px] py-[16px] pr-[24px] cursor-pointer",{active:a.value==="/admin/profile"}]),onClick:e[0]||(e[0]=n=>s("/admin/profile"))},y,2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/reports"}]),onClick:e[1]||(e[1]=n=>s("/admin/reports"))},"Reports",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/routes"}]),onClick:e[2]||(e[2]=n=>s("/admin/routes"))},"Routes",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/drivers"}]),onClick:e[3]||(e[3]=n=>s("/admin/drivers"))},"Drivers",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/cars"}]),onClick:e[4]||(e[4]=n=>s("/admin/cars"))},"Cars",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/auction"}]),onClick:e[5]||(e[5]=n=>s("/admin/auction"))},"Auction",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/maintenance"}]),onClick:e[6]||(e[6]=n=>s("/admin/maintenance"))},"Maintenance Personnel",2),i("div",{class:t(["my-[2px] cursor-pointer p-[12px] pl-[16px]",{active:a.value==="/admin/fueling"}]),onClick:e[7]||(e[7]=n=>s("/admin/fueling"))},"Fueling Personnel",2)])]))}});const $=u(k,[["__scopeId","data-v-c7ec5bdb"]]);export{$ as a};