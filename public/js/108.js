"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[108,776],{929:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var o=a(8222),n={class:"text-center text-variable text-2xl"},l={class:"grid grid-cols-2 gap-2"},r=(0,o.createElementVNode)("p",null,"Nombre para la tarea*",-1),i=(0,o.createElementVNode)("p",null,"Descripción de la tarea*",-1),c=(0,o.createElementVNode)("p",null,"Fecha de inicio*",-1),s=(0,o.createElementVNode)("p",null,"Fecha de fin (Hasta las 00)",-1),d={class:"text-center text-variable text-2xl"},u={class:"grid grid-cols-2 gap-2"},f=(0,o.createElementVNode)("p",null,"Nombre para el foro*",-1),m=(0,o.createElementVNode)("p",null,"Descripción del foro*",-1),p=(0,o.createElementVNode)("p",null,"Fecha de inicio*",-1),_=(0,o.createElementVNode)("p",null,"Fecha de fin",-1),v={class:"flex m-4"},h={class:"px-4 mt-2 flex flex-wrap gap-2"},b=(0,o.createElementVNode)("a",{class:"text-variable text-3xl mb-2"},"Tareas de la meta ",-1),V={class:"uppercase text-sky-400 text-3xl mb-2"},N={key:0},E={class:"flex flex-row flex-wrap gap-4 justify-center"},x={class:"flex"},k={key:0,class:"flex flex-wrap gap-2 justify-end text-base"},y=["onClick"],w=["onClick"],g=["onClick"],C={key:1},B=[(0,o.createElementVNode)("p",{class:"text-2xl text-variable text-center"},'"No hay tareas aún',-1)],S={class:"mx-8 mt-2"},F=(0,o.createElementVNode)("a",{class:"text-variable text-3xl mb-2"},"Foros de la meta ",-1),D={class:"uppercase text-sky-400 text-3xl mb-2"},A={key:2},I={class:"flex flex-row flex-wrap gap-4 justify-center"},T={class:"flex"},U={key:0,class:"flex flex-wrap gap-2 justify-end text-base"},Z=["onClick"],j=["onClick"],M=["onClick"],L={key:3},O=[(0,o.createElementVNode)("p",{class:"text-2xl text-variable text-center"},"No hay foros aún",-1)];var z=a(7915),q=a(4325),Y=a(7776),R=a(6060),H=a(6076),P=a(3609),Q=a(8223),$=a(1533),G=a(9680),J=a(8382),K=a(7484),W=a.n(K),X=a(285),ee=a.n(X);W().extend(ee()),$.Confirm.init({titleColor:"#FF0000",okButtonBackground:"#FF0000",titleMaxLength:"40"});const te={layout:Y.default,components:{Card:J.Z,Calendar:Q.Z,Dialog:P.Z,InputText:H.Z,sbar:Y.default,Button:q.Z,Sidebar:R.Z},directives:{Tooltip:z.Z},props:{usuario:{type:Object,required:!0},meta:{type:Object,required:!0}},setup:function(e){var t=(0,o.reactive)({accion_t:"Añadir",accion_f:"Añadir",nombre_t:"",nombre_f:"",descripcion_t:"",descripcion_f:"",fecha_inicio_t:"",fecha_inicio_f:"",fecha_fin_t:"",fecha_fin_f:"",vertareas:!1,verforos:!1,id_tarea:"",id_foro:""}),a=function(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])};return{verForo:function(e){G.Inertia.visit(route("detalles_foro",e))},evaluarFecha:function(e){var t=W()(e,["DD/MM/YYYY"]);return W()().diff(t)<0},verTarea:function(e){G.Inertia.visit(route("detalles_tarea",e))},eliminar_foro:function(e){$.Confirm.show("¿Estás seguro de eliminar este foro?","Estás por eliminar el foro "+e.plantilla.nombre,"Ok","Cancelar",(function(){G.Inertia.post(route("eliminar_foro"),{id_foro:e.id_foro},{onSuccess:function(){$.Notify.success("Foro eliminado")},onError:function(){$.Notify.failure("Error al eliminar el foro")}})}))},eliminar_tarea:function(e){$.Confirm.show("¿Estás seguro de eliminar esta tarea?","Estás por eliminar la tarea "+e.plantilla.nombre,"Ok","Cancelar",(function(){G.Inertia.post(route("eliminar_tarea"),{id_tarea:e.id_tarea},{onSuccess:function(){$.Notify.success("Tarea eliminada")},onError:function(){$.Notify.failure("Error al eliminar la tarea")}})}))},editar_foro:function(e){t.accion_f="Editar",t.id_foro=e.id_foro,t.nombre_f=e.plantilla.nombre,t.descripcion_f=e.plantilla.descripcion,t.fecha_inicio_f=a(e.plantilla.fecha_inicio),t.fecha_fin_f=a(e.plantilla.fecha_fin),t.verforos=!0},editar_tarea:function(e){t.accion_t="Editar",t.id_tarea=e.id_tarea,t.nombre_t=e.plantilla.nombre,t.descripcion_t=e.plantilla.descripcion,t.fecha_inicio_t=a(e.plantilla.fecha_inicio),t.fecha_fin_t=a(e.plantilla.fecha_fin),t.vertareas=!0},submit_f:function(){var a;(a=!1,""==t.nombre_f&&($.Notify.failure("El nombre del foro no puede estar vacio"),a=!0),""==t.descripcion_f&&($.Notify.failure("La descripción del foro no puede estar vacia"),a=!0),""==t.fecha_inicio_f&&($.Notify.failure("La fecha de inicio no puede estar vacia"),a=!0),""==t.fecha_fin_f&&($.Notify.failure("La fecha de fin no puede estar vacia"),a=!0),a)||G.Inertia.post(route("Añadir"==t.accion_f?"agregar_foro":"editar_foro"),{id_meta:e.meta.id_meta,id_foro:t.id_foro,nombre:t.nombre_f,descripcion:t.descripcion_f,fecha_inicio:t.fecha_inicio_f,fecha_fin:t.fecha_fin_f},{onSuccess:function(e){t.verforos=!1,t.nombre_f="",t.descripcion_f="",t.fecha_inicio_f="",t.fecha_fin_f="",$.Notify.success(e.props.flash.success)},onError:function(e){for(var t in e)$.Notify.failure(e[t])}})},values:t,submit_t:function(){var a;(a=!1,""==t.nombre_t&&($.Notify.failure("El nombre de la tarea no puede estar vacio"),a=!0),""==t.descripcion_t&&($.Notify.failure("La descripción de la tarea no puede estar vacia"),a=!0),""==t.fecha_inicio_t&&($.Notify.failure("La fecha de inicio no puede estar vacia"),a=!0),""==t.fecha_fin_t&&($.Notify.failure("La fecha de fin no puede estar vacia"),a=!0),a)||G.Inertia.post(route("Añadir"==t.accion_t?"agregar_tarea":"editar_tarea"),{id_meta:e.meta.id_meta,id_tarea:t.id_tarea,nombre:t.nombre_t,descripcion:t.descripcion_t,fecha_inicio:t.fecha_inicio_t,fecha_fin:t.fecha_fin_t},{onSuccess:function(){t.vertareas=!1,t.nombre_t="",t.descripcion_t="",t.fecha_inicio_t="",t.fecha_fin_t="",$.Notify.success("Tarea añadida")},onError:function(e){for(var t in e)$.Notify.failure(e[t])}})}}}};const ae=(0,a(3744).Z)(te,[["render",function(e,t,a,z,q,Y){var R=(0,o.resolveComponent)("InputText"),H=(0,o.resolveComponent)("Calendar"),P=(0,o.resolveComponent)("Dialog"),Q=(0,o.resolveComponent)("Button"),$=(0,o.resolveComponent)("Card"),G=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(P,{breakpoints:{"960px":"75vw","640px":"100vw"},style:{width:"50vw"},modal:!0,visible:z.values.vertareas,"onUpdate:visible":t[5]||(t[5]=function(e){return z.values.vertareas=e})},{header:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("h2",n,(0,o.toDisplayString)("Añadir"==z.values.accion_t?"Añade tareas a esta meta":"Estás editando una tarea"),1)]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return z.submit_t&&z.submit_t.apply(z,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",null,[r,(0,o.createVNode)(R,{class:"w-full",modelValue:z.values.nombre_t,"onUpdate:modelValue":t[0]||(t[0]=function(e){return z.values.nombre_t=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[i,(0,o.createVNode)(R,{class:"w-full",modelValue:z.values.descripcion_t,"onUpdate:modelValue":t[1]||(t[1]=function(e){return z.values.descripcion_t=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[c,(0,o.createVNode)(H,{dateFormat:"dd/mm/yy",class:"w-full",modelValue:z.values.fecha_inicio_t,"onUpdate:modelValue":t[2]||(t[2]=function(e){return z.values.fecha_inicio_t=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[s,(0,o.createVNode)(H,{dateFormat:"dd/mm/yy",class:"w-full",modelValue:z.values.fecha_fin_t,"onUpdate:modelValue":t[3]||(t[3]=function(e){return z.values.fecha_fin_t=e})},null,8,["modelValue"])])]),(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["rounded-lg p-2 w-full","Añadir"==z.values.accion_t?"bg-green-500 mt-2 ":"bg-yellow-500"])},(0,o.toDisplayString)("Añadir"==z.values.accion_t?"Añadir":"Editar"),3)],32)]})),_:1},8,["visible"]),(0,o.createVNode)(P,{breakpoints:{"960px":"75vw","640px":"100vw"},style:{width:"50vw"},modal:!0,visible:z.values.verforos,"onUpdate:visible":t[11]||(t[11]=function(e){return z.values.verforos=e})},{header:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("h2",d,(0,o.toDisplayString)("Añadir"==z.values.accion_f?"Añade foros a esta meta":"Estás editando un foro"),1)]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("form",{onSubmit:t[10]||(t[10]=(0,o.withModifiers)((function(){return z.submit_f&&z.submit_f.apply(z,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",null,[f,(0,o.createVNode)(R,{class:"w-full",modelValue:z.values.nombre_f,"onUpdate:modelValue":t[6]||(t[6]=function(e){return z.values.nombre_f=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[m,(0,o.createVNode)(R,{class:"w-full",modelValue:z.values.descripcion_f,"onUpdate:modelValue":t[7]||(t[7]=function(e){return z.values.descripcion_f=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[p,(0,o.createVNode)(H,{dateFormat:"dd/mm/yy",class:"w-full",modelValue:z.values.fecha_inicio_f,"onUpdate:modelValue":t[8]||(t[8]=function(e){return z.values.fecha_inicio_f=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",null,[_,(0,o.createVNode)(H,{dateFormat:"dd/mm/yy",class:"w-full",modelValue:z.values.fecha_fin_f,"onUpdate:modelValue":t[9]||(t[9]=function(e){return z.values.fecha_fin_f=e})},null,8,["modelValue"])])]),(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["rounded-lg p-2 w-full mt-2","Añadir"==z.values.accion_f?"bg-green-500 mt-2 w-full":"bg-yellow-500"])},(0,o.toDisplayString)("Añadir"==z.values.accion_f?"Añadir":"Editar"),3)],32)]})),_:1},8,["visible"]),(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("div",h,[b,(0,o.createElementVNode)("a",V,(0,o.toDisplayString)(a.meta.plantilla.nombre),1),a.usuario.rol.id_rol<=2?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)(Q,{key:0,icon:"pi pi-flag",onClick:t[12]||(t[12]=function(e){return z.values.vertareas=!0,z.values.accion_t="Añadir",z.values.nombre_t="",z.values.descripcion_t="",z.values.fecha_inicio_t="",z.values.fecha_fin_t=""})},null,512)),[[G,"Añade tareas",void 0,{top:!0}]]):(0,o.createCommentVNode)("",!0),a.usuario.rol.id_rol<=2?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)(Q,{key:1,icon:"pi pi-flag-fill",onClick:t[13]||(t[13]=function(e){return z.values.verforos=!0,z.values.accion_f="Añadir",z.values.nombre_f="",z.values.descripcion_f="",z.values.fecha_inicio_f="",z.values.fecha_fin_f=""})},null,512)),[[G,"Añade Foros",void 0,{top:!0}]]):(0,o.createCommentVNode)("",!0)])]),a.meta.tareas.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",N,[(0,o.createElementVNode)("div",E,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.meta.tareas,(function(e){return(0,o.openBlock)(),(0,o.createBlock)($,{key:e.id_tarea,style:{width:"25em"}},{title:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",x,(0,o.toDisplayString)(e.plantilla.nombre+" - "+e.plantilla.fecha_inicio+" - "+e.plantilla.fecha_fin),1),a.usuario.rol.id_rol<=2?((0,o.openBlock)(),(0,o.createElementBlock)("div",k,[(0,o.createElementVNode)("button",{class:"bg-yellow-500 rounded-lg p-2",onClick:function(t){return z.editar_tarea(e)}}," Editar ",8,y),(0,o.createElementVNode)("button",{class:"bg-red-500 rounded-lg p-2",onClick:function(t){return z.eliminar_tarea(e)}}," Eliminar ",8,w)])):(0,o.createCommentVNode)("",!0)]})),content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.plantilla.descripcion),1)]})),footer:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)([z.evaluarFecha(e.plantilla.fecha_fin)?"bg-green-500":"bg-yellow-500","w-full rounded-lg p-2"]),onClick:function(t){return z.verTarea(e.id_tarea)}},(0,o.toDisplayString)(z.evaluarFecha(e.plantilla.fecha_fin)?"Ver detalles":"Esta tarea ya expiró"),11,g)]})),_:2},1024)})),128))])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",C,B)),(0,o.createElementVNode)("div",S,[F,(0,o.createElementVNode)("a",D,(0,o.toDisplayString)(a.meta.plantilla.nombre),1)]),a.meta.foros.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",A,[(0,o.createElementVNode)("div",I,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.meta.foros,(function(e){return(0,o.openBlock)(),(0,o.createBlock)($,{key:e.id_foro,style:{width:"25em"}},{title:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",T,(0,o.toDisplayString)(e.plantilla.nombre+" - "+e.plantilla.fecha_inicio+" | "+e.plantilla.fecha_fin),1),a.usuario.rol.id_rol<=2?((0,o.openBlock)(),(0,o.createElementBlock)("div",U,[(0,o.createElementVNode)("button",{class:"bg-yellow-500 rounded-lg p-2",onClick:function(t){return z.editar_foro(e)}}," Editar ",8,Z),(0,o.createElementVNode)("button",{class:"bg-red-500 rounded-lg p-2",onClick:function(t){return z.eliminar_foro(e)}}," Eliminar ",8,j)])):(0,o.createCommentVNode)("",!0)]})),content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.plantilla.descripcion),1)]})),footer:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)([z.evaluarFecha(e.plantilla.fecha_fin)?"bg-green-500":"bg-yellow-500","w-full rounded-lg p-2"]),onClick:function(t){return z.verForo(e.id_foro)}},(0,o.toDisplayString)(z.evaluarFecha(e.plantilla.fecha_fin)?"Ver detalles":"Esta foro ya expiró"),11,M)]})),_:2},1024)})),128))])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",L,O))],64)}]])},7776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var o=a(8222),n={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},l=(0,o.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),r={class:"text-cyan-400"},i=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],c={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},s={key:0},d={class:"md:p-4 block"},u=(0,o.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),f={class:"self-center"},m={class:"md:p-4 py-2 block"},p=(0,o.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1),_=["href"];a(1645),a(8957),a(7887);var v=a(2262),h=a(9680),b=a(7712),V=a(4325),N=a(6663),E=a(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const x={directives:{Tooltip:E.Z},props:{usuario:{type:Object,default:{}}},components:{InputSwitch:N.Z,SplitButton:b.Z,Button:V.Z},setup:function(){var e=(0,o.ref)([{label:"Personas",command:function(){h.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){h.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){h.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){h.Inertia.visit(route("dashboard_adm_cursos"))}},{label:"Notas Estudiantes",command:function(){h.Inertia.visit(route("dashboard_adm_notas_usuarios"))}}]),t=(0,v.qj)({show:!0});return{data:(0,v.qj)({dark:!0}),menuOptions:t,redirectTo:function(e){h.Inertia.visit(route(e))},urlsAdmin:e}}};const k=(0,a(3744).Z)(x,[["render",function(e,t,a,v,h,b){var V=(0,o.resolveComponent)("Button"),N=(0,o.resolveComponent)("SplitButton"),E=(0,o.resolveComponent)("InputSwitch"),x=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("header",null,[(0,o.createElementVNode)("nav",n,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return v.redirectTo("home")})},[l,(0,o.createElementVNode)("p",r," Bienvenido "+(0,o.toDisplayString)(a.usuario.persona.nombre),1)])]),((0,o.openBlock)(),(0,o.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return v.menuOptions.show=!v.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i)),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(v.menuOptions.show?" hidden":"")),id:"menu"},[(0,o.createElementVNode)("ul",c,[1==a.usuario.id_rol?((0,o.openBlock)(),(0,o.createElementBlock)("li",s,[(0,o.createElementVNode)("a",d,[(0,o.createVNode)(N,{model:v.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(V,{onClick:t[2]||(t[2]=function(e){return v.redirectTo("dashboard-adm")})},{default:(0,o.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["model"])])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("li",f,[(0,o.withDirectives)((0,o.createVNode)(E,{modelValue:v.data.dark,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.data.dark=e})},null,8,["modelValue"]),[[x,v.data.dark?"Modo light":"Modo dark",void 0,{bottom:!0}]])]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",m,[(0,o.createVNode)(V,{class:"p-button-md p-button-text p-button-secondary",onClick:t[4]||(t[4]=function(e){return v.redirectTo("logout")})},{default:(0,o.withCtx)((function(){return[p]})),_:1})])])])],2)])]),(0,o.createElementVNode)("link",{href:v.data.dark?"/css/dark.css":"/css/light.css",rel:"stylesheet"},null,8,_),(0,o.createElementVNode)("article",null,[(0,o.renderSlot)(e.$slots,"default")])],64)}]])}}]);