import{d as k,u as x,g as t,c as p,b as e,w as m,v as g,t as S,k as f,e as b,p as I,f as E,o as v,_ as U}from"./index-5dec5081.js";import{a as V}from"./axios-4a70c6fc.js";const C="/assets/login_back-0725e5c2.jpg",o=l=>(I("data-v-4d799545"),l=l(),E(),l),D=o(()=>e("img",{src:C,alt:"back"},null,-1)),N={class:"rhs"},R={class:"center"},T=o(()=>e("div",{class:"header"}," Log In to Panel ",-1)),B=o(()=>e("div",{class:"desc"},"Enter your username and password below",-1)),M=o(()=>e("div",{class:"label"},"USERNAME",-1)),P=o(()=>e("div",{class:"label"},"PASSWORD",-1)),j={key:0,class:"error"},A={key:0,class:"loader"},L=k({__name:"login",setup(l){const h=x(),n=t(""),r=t(""),c=t(!1),u=t(""),_=t(!1),w=async(d,a)=>{let s=!1;return await V.post("http://51.20.192.129/auth/login",{username:d,password:a},{headers:{"Content-Type":"application/json"}}).then(i=>{console.log("Response:",i.data),localStorage.setItem("token",i.data.accessToken),s=!0}).catch(i=>{console.error("Error:",i),s=!1}),s},y=async()=>{if(!n.value||!r.value)u.value="Enter valid Username and Password",c.value=!0;else{c.value=!1,_.value=!0;const d=await w(n.value,r.value);_.value=!1,d||(u.value="User not Found!",c.value=!0),await h.push("/admin/profile")}};return(d,a)=>(v(),p("main",null,[D,e("div",N,[e("div",R,[T,B,M,m(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s)},null,512),[[g,n.value]]),P,m(e("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=s=>r.value=s)},null,512),[[g,r.value]]),c.value?(v(),p("div",j,S(u.value),1)):f("",!0),e("div",{class:"btn",onClick:y},[_.value?(v(),p("div",A)):f("",!0),b("Log In")])])])]))}});const W=U(L,[["__scopeId","data-v-4d799545"]]);export{W as default};