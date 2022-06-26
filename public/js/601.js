"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[601,375],{9601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(8222),r={key:0,class:"px-4 mt-2"},a=(0,o.createElementVNode)("p",{class:"text-white text-3xl mb-2"},"Mis cursos",-1),l={class:"flex flex-row flex-wrap gap-4 justify-center"},s=["src"],c={key:1},i=[(0,o.createElementVNode)("p",{class:"text-white text-3xl text-center"}," Vaya... parece que aún no te asignan cursos. ",-1)];var u=n(2375),d=n(8382),m=n(4325),p=n(9680);const f={components:{sbar:u.default,Card:d.Z,Button:m.Z},props:{usuario:{type:Object,required:!1}},setup:function(){return{entrarCurso:function(e){p.Inertia.visit(route("curso",e))}}}};const b=(0,n(3744).Z)(f,[["render",function(e,t,n,u,d,m){var p=(0,o.resolveComponent)("sbar"),f=(0,o.resolveComponent)("Button"),b=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(p,{usuario:n.usuario},null,8,["usuario"]),n.usuario.cursos.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[a,(0,o.createElementVNode)("div",l,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.usuario.cursos,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(b,{key:e.id_curso,style:{width:"25em"}},{header:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("img",{class:"object-cover",src:"/"+e.foto.url},null,8,s)]})),title:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.plantilla.nombre)+" ",1),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["bg-green-500 rounded-lg p-2 text-base w-fit",""==e.usuarios.filter((function(e){return 2==e.id_rol})).map((function(e){return e.persona.nombre+" "+e.persona.apellido_p})).join(", ")?"bg-gray-500":""])},(0,o.toDisplayString)(""==e.usuarios.filter((function(e){return 2==e.id_rol})).map((function(e){return e.persona.nombre+" "+e.persona.apellido_p})).join(", ")?"Aún no tiene profesor":"Docente: "+e.usuarios.filter((function(e){return 2==e.id_rol})).map((function(e){return e.persona.nombre+" "+e.persona.apellido_p})).join(", ")),3)]})),content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.plantilla.descripcion),1)]})),footer:(0,o.withCtx)((function(){return[(0,o.createVNode)(f,{label:"Ingresar",onClick:function(t){return u.entrarCurso(e.id_curso)}},null,8,["onClick"])]})),_:2},1024)})),128))])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",c,i))],64)}]])},2375:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var o=n(8222),r={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},a=(0,o.createElementVNode)("p",{class:"text-5xl"},"ITECBO",-1),l={class:"text-cyan-400"},s=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],c={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},i={key:0},u={class:"md:p-4 block"},d=(0,o.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),m={class:"md:p-4 py-2 block"},p=(0,o.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Enlaces",-1),f={class:"md:p-4 py-2 block"},b=(0,o.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Aulas",-1),h=(0,o.createElementVNode)("li",null,null,-1),x={class:"md:p-4 py-2 block"},k=(0,o.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1);n(4154),n(7647),n(8294);var v=n(2262),w=n(9680),E=n(7712),C=n(4325);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const N={props:{usuario:{type:Object,default:{}}},components:{SplitButton:E.Z,Button:C.Z},setup:function(){var e=(0,o.ref)([{label:"Personas",command:function(){w.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){w.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){w.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){w.Inertia.visit(route("dashboard_adm_cursos"))}},{label:"Notas Estudiantes",command:function(){w.Inertia.visit(route("dashboard_adm_notas_usuarios"))}},{label:"Categorias de archivos",command:function(){w.Inertia.visit(route("dashboard_adm_categoria_archivos"))}}]);return{menuOptions:(0,v.qj)({show:!0}),redirectTo:function(e){w.Inertia.visit(route(e))},urlsAdmin:e}}};const V=(0,n(3744).Z)(N,[["render",function(e,t,n,v,w,E){var C=(0,o.resolveComponent)("Button"),N=(0,o.resolveComponent)("SplitButton");return(0,o.openBlock)(),(0,o.createElementBlock)("header",null,[(0,o.createElementVNode)("nav",r,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return v.redirectTo("home")})},[a,(0,o.createElementVNode)("p",l," Bienvenido "+(0,o.toDisplayString)(n.usuario.persona.nombre),1)])]),((0,o.openBlock)(),(0,o.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return v.menuOptions.show=!v.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s)),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(v.menuOptions.show?" hidden":"")),id:"menu"},[(0,o.createElementVNode)("ul",c,[1==n.usuario.id_rol?((0,o.openBlock)(),(0,o.createElementBlock)("li",i,[(0,o.createElementVNode)("a",u,[(0,o.createVNode)(N,{model:v.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(C,{onClick:t[2]||(t[2]=function(e){return v.redirectTo("dashboard-adm")})},{default:(0,o.withCtx)((function(){return[d]})),_:1})]})),_:1},8,["model"])])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",m,[(0,o.createVNode)(C,{class:"p-button-md p-button-text p-button-secondary",onClick:t[3]||(t[3]=function(e){return v.redirectTo("enlaces")})},{default:(0,o.withCtx)((function(){return[p]})),_:1})])]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",f,[(0,o.createVNode)(C,{class:"p-button-md p-button-text p-button-secondary",onClick:t[4]||(t[4]=function(e){return v.redirectTo("aulas")})},{default:(0,o.withCtx)((function(){return[b]})),_:1})])]),h,(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",x,[(0,o.createVNode)(C,{class:"p-button-md p-button-text p-button-secondary",onClick:t[5]||(t[5]=function(e){return v.redirectTo("logout")})},{default:(0,o.withCtx)((function(){return[k]})),_:1})])])])],2)])])}]])}}]);