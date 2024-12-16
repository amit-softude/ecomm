(()=>{var e={};e.id=454,e.ids=[454],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},63488:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=t(70260),i=t(28203),n=t(25155),a=t.n(n),o=t(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let c=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,85753)),"/home/amitsoni/Amit Soni/Development/local/ecomm/src/app/register/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/home/amitsoni/Amit Soni/Development/local/ecomm/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/amitsoni/Amit Soni/Development/local/ecomm/src/app/register/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},72675:(e,r,t)=>{Promise.resolve().then(t.bind(t,85753))},38331:(e,r,t)=>{Promise.resolve().then(t.bind(t,82949))},53180:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(11855),i=t(58009);let n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};var a=t(78480);let o=i.forwardRef(function(e,r){return i.createElement(a.A,(0,s.A)({},e,{ref:r,icon:n}))})},82949:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(45512),i=t(58009),n=t(15800),a=t(41257),o=t(69967),l=t(28434),c=t(2443),d=t(28533),p=t(9334),m=t(24648),u=t(53180),g=t(2961),h=t(28531),x=t.n(h),f=t(79334),v=t(98979),_=t.n(v),A=t(74055);let{Title:j,Text:y}=n.A,b=()=>{let[e]=a.A.useForm(),r=(0,f.useRouter)(),[t,n]=(0,i.useState)(!1),h=async e=>{try{n(!0);let t=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();t.ok?(o.Ay.success("Registration successful! Please login."),r.push("/login")):o.Ay.error(s.message||"Registration failed. Please try again.")}catch(e){o.Ay.error("Registration failed. Please try again."),console.error("Registration error:",e)}finally{n(!1)}};return(0,s.jsx)("div",{className:_().registerContainer,children:(0,s.jsxs)(l.A,{className:_().registerCard,children:[(0,s.jsx)(j,{level:2,className:_().title,children:"Create Account"}),(0,s.jsx)(y,{className:_().subtitle,children:"Please fill in the details below to create your account"}),(0,s.jsxs)(a.A,{form:e,name:"register",onFinish:h,layout:"vertical",requiredMark:!1,children:[(0,s.jsx)(a.A.Item,{name:"name",rules:[(0,A.mw)(),(0,A.Ru)(50)],children:(0,s.jsx)(c.A,{prefix:(0,s.jsx)(m.A,{}),placeholder:"Full Name",size:"large",className:_().input})}),(0,s.jsx)(a.A.Item,{name:"email",rules:[(0,A.mw)(),(0,A.Ro)(),(0,A.Ru)(100)],children:(0,s.jsx)(c.A,{prefix:(0,s.jsx)(u.A,{}),placeholder:"Email",size:"large",className:_().input})}),(0,s.jsx)(a.A.Item,{name:"password",rules:[(0,A.mw)(),(0,A.Bp)(8),(0,A.Ru)(50)],children:(0,s.jsx)(c.A.Password,{prefix:(0,s.jsx)(g.A,{}),placeholder:"Password",size:"large",className:_().input})}),(0,s.jsx)(a.A.Item,{children:(0,s.jsx)(d.Ay,{type:"primary",htmlType:"submit",size:"large",block:!0,loading:t,className:_().registerButton,children:"Register"})}),(0,s.jsx)(p.A,{plain:!0,children:"Or"}),(0,s.jsxs)("div",{className:_().login,children:[(0,s.jsx)(y,{children:"Already have an account?"}),(0,s.jsx)(x(),{href:"/login",className:_().loginLink,children:"Login now"})]})]})]})})}},98979:e=>{e.exports={registerContainer:"register_registerContainer__dnkpd",registerCard:"register_registerCard__stRng",title:"register_title__CKvTH",subtitle:"register_subtitle__hlIl8",input:"register_input__0tkK3",registerButton:"register_registerButton__82vBQ",login:"register_login__5K4Z0",loginLink:"register_loginLink__Jf5rI"}},85753:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/amitsoni/Amit Soni/Development/local/ecomm/src/app/register/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/amitsoni/Amit Soni/Development/local/ecomm/src/app/register/page.tsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,668,379,77,751,273,618,536,434,800,533,237,198],()=>t(63488));module.exports=s})();