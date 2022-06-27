"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[459,487],{5459:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var n=o(8222),r=(0,n.createElementVNode)("p",{class:"text-5xl text-white text-center"},"Roles de usuario",-1),a={class:"flex md:flex-row flex-col m-2"},l={class:"sm:basis-6/12"},s=(0,n.createElementVNode)("p",{class:"text-white"},"Añade roles!",-1),d={class:"flex md:flex-row flex-col"},i={class:"mr-auto"},c={class:"p-input-icon-right"},u=(0,n.createElementVNode)("i",{class:"pi pi-search"},null,-1),m={class:"flex sm:flex-row sm:ml-auto flex-col"},f=["disabled"],p={class:"sm:basis-6/12 flex flex-col"},b=(0,n.createElementVNode)("div",{class:"mx-auto"},[(0,n.createElementVNode)("p",{class:"text-center text-white text-3xl"},"Añade roles")],-1),v={class:"mx-auto m-4"},h={class:"w-full flex flex-row"};var x=o(8094),g=o(5247),N=o(7487),V=o(6076),C=o(6358),E=o(3609),w=o(8642),_=o(1533),y=o(9680),k=o(9669),B=o.n(k);const S={props:{usuario:{type:Object,default:{}},roles:{type:Array,default:[]}},components:{InputText:V.Z,NavBar:N.default,DataTable:x.Z,Column:g.Z,Dialog:E.Z},setup:function(e){var t=(0,n.reactive)({global:{value:"",matchMode:C.a6.Contains}}),o=(0,n.reactive)({nombre:""}),r=(0,n.reactive)({rol_seleccionado:[]});return{delete_p:function(){w.Confirm.init({titleColor:"#FF0000",messageColor:"#FF0000",okButtonBackground:"#FF0000"}),w.Confirm.show("¿Estas seguro de eliminar el rol ".concat(r.rol_seleccionado.nombre,"?"),"Estás a punto de eliminar un rol","Eliminar","Cancelar",(function(){_.Loading.standard({clickToClose:!1,svgSize:"200"}),B().post(route("dashboard_adm_roles_eliminar"),{id:r.rol_seleccionado.id_rol}).then((function(e){e.data.success?(y.Inertia.reload({only:["roles"],preserveState:!1,preserveScroll:!0,onSuccess:function(){_.Loading.remove()}}),_.Notify.success(e.data.message)):(_.Loading.remove(),_.Notify.failure(e.data.message))}))}))},onCellEditComplete:function(e){_.Loading.standard({clickToClose:!1,svgSize:"200"}),B().post(route("dashboard_adm_roles_actualizar"),{id:e.data.id_rol,nombre:e.newValue}).then((function(e){e.data.success?(y.Inertia.reload({only:["roles"],preserveState:!1,preserveScroll:!0,onSuccess:function(){_.Loading.remove()}}),_.Notify.success(e.data.message)):(_.Notify.failure(e.data.message),_.Loading.remove())}))},crearNuevo:function(){""==o.nombre||o.nombre.length<3?_.Notify.failure("El nombre debe ser de 3 digitos o más"):e.roles.find((function(e){return e.nombre==o.nombre}))?_.Notify.failure("El nombre debe ser único"):(_.Loading.standard({clickToClose:!1,svgSize:"200"}),B().post(route("dashboard_adm_roles_crear"),{nombre:o.nombre}).then((function(e){e.data.success?(y.Inertia.reload({only:["roles"],preserveState:!1,preserveScroll:!0,onSuccess:function(){_.Loading.remove()}}),_.Notify.success(e.data.message)):(_.Loading.remove(),_.Notify.failure(e.data.message))})))},form_r:o,valores:r,filters:t}}};const T=(0,o(3744).Z)(S,[["render",function(e,t,o,x,g,N){var V=(0,n.resolveComponent)("NavBar"),C=(0,n.resolveComponent)("InputText"),E=(0,n.resolveComponent)("Column"),w=(0,n.resolveComponent)("DataTable");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(V,{usuario:o.usuario},null,8,["usuario"]),r,(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",l,[(0,n.createVNode)(w,{value:o.roles,paginator:!0,selectionMode:"single",rows:10,scrollable:!0,filters:x.filters,"onUpdate:filters":t[2]||(t[2]=function(e){return x.filters=e}),selection:x.valores.rol_seleccionado,"onUpdate:selection":t[3]||(t[3]=function(e){return x.valores.rol_seleccionado=e}),editMode:"cell",onCellEditComplete:x.onCellEditComplete},{empty:(0,n.withCtx)((function(){return[s]})),header:(0,n.withCtx)((function(){var e;return[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("span",c,[u,(0,n.createVNode)(C,{id:"search",modelValue:x.filters.global.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.filters.global.value=e})},null,8,["modelValue"])])]),(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("button",{onClick:t[1]||(t[1]=function(e){return x.delete_p()}),class:"m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",disabled:!(Object.keys(null!==(e=x.valores.rol_seleccionado)&&void 0!==e?e:{}).length>0)}," Eliminar ",8,f)])])]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(E,{field:"nombre",header:"Nombre",sorteable:!0},{editor:(0,n.withCtx)((function(e){return[(0,n.createVNode)(C,{modelValue:e.data[e.field],"onUpdate:modelValue":function(t){return e.data[e.field]=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,n.createVNode)(E,{field:"created_at",header:"Creado en"}),(0,n.createVNode)(E,{field:"updated_at",header:"Actualizado en"})]})),_:1},8,["value","filters","selection","onCellEditComplete"])]),(0,n.createElementVNode)("div",p,[b,(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",h,[(0,n.withDirectives)((0,n.createElementVNode)("input",{class:"w-5/5 py-2 text-center rounded-tl-lg rounded-bl-lg","onUpdate:modelValue":t[4]||(t[4]=function(e){return x.form_r.nombre=e})},null,512),[[n.vModelText,x.form_r.nombre]]),(0,n.createElementVNode)("button",{onClick:t[5]||(t[5]=function(e){return x.crearNuevo()}),class:"disabled:bg-gray-500 text-base bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-tr-lg rounded-br-lg"}," Crear ")])])])])],64)}]])},7487:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var n=o(8222),r={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},a=(0,n.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),l={class:"text-cyan-400"},s=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],d={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},i={key:0},c={class:"md:p-4 block"},u=(0,n.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),m={class:"md:p-4 py-2 block"},f=(0,n.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1);o(4154),o(7647),o(8294);var p=o(2262),b=o(9680),v=o(7712),h=o(4325);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const x={props:{usuario:{type:Object,default:{}}},components:{SplitButton:v.Z,Button:h.Z},setup:function(){var e=(0,n.ref)([{label:"Personas",command:function(){b.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){b.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){b.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){b.Inertia.visit(route("dashboard_adm_cursos"))}},{label:"Notas Estudiantes",command:function(){b.Inertia.visit(route("dashboard_adm_notas_usuarios"))}}]);return{menuOptions:(0,p.qj)({show:!0}),redirectTo:function(e){b.Inertia.visit(route(e))},urlsAdmin:e}}};const g=(0,o(3744).Z)(x,[["render",function(e,t,o,p,b,v){var h=(0,n.resolveComponent)("Button"),x=(0,n.resolveComponent)("SplitButton");return(0,n.openBlock)(),(0,n.createElementBlock)("header",null,[(0,n.createElementVNode)("nav",r,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return p.redirectTo("home")})},[a,(0,n.createElementVNode)("p",l," Bienvenido "+(0,n.toDisplayString)(o.usuario.persona.nombre),1)])]),((0,n.openBlock)(),(0,n.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return p.menuOptions.show=!p.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s)),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(p.menuOptions.show?" hidden":"")),id:"menu"},[(0,n.createElementVNode)("ul",d,[1==o.usuario.id_rol?((0,n.openBlock)(),(0,n.createElementBlock)("li",i,[(0,n.createElementVNode)("a",c,[(0,n.createVNode)(x,{model:p.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{onClick:t[2]||(t[2]=function(e){return p.redirectTo("dashboard-adm")})},{default:(0,n.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["model"])])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",m,[(0,n.createVNode)(h,{class:"p-button-md p-button-text p-button-secondary",onClick:t[3]||(t[3]=function(e){return p.redirectTo("logout")})},{default:(0,n.withCtx)((function(){return[f]})),_:1})])])])],2)])])}]])}}]);