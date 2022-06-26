"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Logeado_Tareas_Detalles_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_resources_themes_vela_blue_theme_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/resources/themes/vela-blue/theme.css */ "./node_modules/primevue/resources/themes/vela-blue/theme.css");
/* harmony import */ var primevue_resources_primevue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/resources/primevue.css */ "./node_modules/primevue/resources/primevue.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var primevue_splitbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/splitbutton */ "./node_modules/primevue/splitbutton/splitbutton.esm.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/button.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* No va pa atras */
history.pushState(null, document.title, location.href);
window.addEventListener("popstate", function () {
  history.pushState(null, document.title, location.href);
});
/* Primevue */









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    usuario: {
      type: Object,
      "default": {}
    }
  },
  components: {
    SplitButton: primevue_splitbutton__WEBPACK_IMPORTED_MODULE_4__["default"],
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  setup: function setup() {
    var urlsAdmin = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([{
      label: "Personas",
      command: function command() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route("dashboard_adm_personas"));
      }
    }, {
      label: "Usuarios",
      command: function command() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route("dashboard_adm_usuarios"));
      }
    }, {
      label: "Roles",
      command: function command() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route("dashboard_adm_roles"));
      }
    }, {
      label: "Crear Aulas",
      command: function command() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route("dashboard_adm_cursos"));
      }
    }, {
      label: "Notas Estudiantes",
      command: function command() {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route("dashboard_adm_notas_usuarios"));
      }
    }]);
    var menuOptions = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      show: true
    });

    var redirectTo = function redirectTo(url) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route(url));
    };

    return {
      menuOptions: menuOptions,
      redirectTo: redirectTo,
      urlsAdmin: urlsAdmin
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/js/Pages/Logeado/Navbar.vue");
/* harmony import */ var primevue_fieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/fieldset */ "./node_modules/primevue/fieldset/fieldset.esm.js");
/* harmony import */ var primevue_tabview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/tabview */ "./node_modules/primevue/tabview/tabview.esm.js");
/* harmony import */ var primevue_tabpanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/tabpanel */ "./node_modules/primevue/tabpanel/tabpanel.esm.js");
/* harmony import */ var primevue_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/fileupload */ "./node_modules/primevue/fileupload/fileupload.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var primevue_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/dialog */ "./node_modules/primevue/dialog/dialog.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix */ "./node_modules/notiflix/dist/notiflix-aio-3.2.5.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_9__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_10__["default"],
    Dialog: primevue_dialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__["default"],
    FileUpload: primevue_fileupload__WEBPACK_IMPORTED_MODULE_4__["default"],
    TabView: primevue_tabview__WEBPACK_IMPORTED_MODULE_2__["default"],
    TabPanel: primevue_tabpanel__WEBPACK_IMPORTED_MODULE_3__["default"],
    sbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Fieldset: primevue_fieldset__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    usuario: {
      type: Object,
      required: false
    },
    tarea: {
      type: Object,
      required: false
    }
  },
  setup: function setup(props) {
    var values = (0,vue__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      descripcion: "",
      modalArchivos: false,
      archivo: {},
      descripcion_p: ""
    });

    var myUploader = function myUploader(e) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_11__.Inertia.post(route("entregar_tarea"), {
        id_tarea: props.tarea.id_tarea,
        descripcion: values.descripcion,
        archivos: e.files
      }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.success("Tarea entregada correctamente");
          values.descripcion = "";
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure(error[i]);
          }
        }
      });
    };

    var uploadMaster = function uploadMaster(e) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_11__.Inertia.post(route("archivos_profe"), {
        id_tarea: props.tarea.id_tarea,
        descripcion: values.descripcion_p,
        archivos: e.files
      }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.success("Tarea entregada correctamente");
          values.descripcion_p = "";
        },
        onError: function onError(error) {
          for (var i in error) {
            notiflix__WEBPACK_IMPORTED_MODULE_8__.Notify.failure(error[i]);
          }
        }
      });
    };

    var eliminarArchivo = function eliminarArchivo() {};

    return {
      uploadMaster: uploadMaster,
      myUploader: myUploader,
      values: values
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-5xl"
}, "ITECBO", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "text-cyan-400"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  "class": "md:p-4 block"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-gray-700 hover:text-red-400"
}, "Admin", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "md:p-4 py-2 block"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-gray-700 hover:text-red-400"
}, "Enlaces", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "md:p-4 py-2 block"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-gray-700 hover:text-red-400"
}, "Aulas", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "md:p-4 py-2 block"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-red-700 hover:text-red-400"
}, "Cerrar sesión", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_SplitButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SplitButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.redirectTo('home');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Trash bo "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, " Bienvenido " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.usuario.persona.nombre), 1
  /* TEXT */
  )])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "menu-button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.menuOptions.show = !$setup.menuOptions.show;
    }),
    "class": "h-6 w-6 cursor-pointer md:hidden block",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _hoisted_5)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('w-full md:flex md:items-center md:w-auto' + ($setup.menuOptions.show ? ' hidden' : '')),
    id: "menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [$props.usuario.id_rol == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SplitButton, {
    model: $setup.urlsAdmin,
    "class": "p-button-md p-button-text p-button-secondary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.redirectTo('dashboard-adm');
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "p-button-md p-button-text p-button-secondary",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.redirectTo('enlaces');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "p-button-md p-button-text p-button-secondary",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.redirectTo('aulas');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  })])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "p-button-md p-button-text p-button-secondary",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.redirectTo('logout');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  })])])])], 2
  /* CLASS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-center text-white text-2xl"
}, " Archivos de la tarea ", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex"
};
var _hoisted_3 = ["disabled"];
var _hoisted_4 = ["href"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Arrastra o carga archivos manualmente.", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "text-white text-3xl text-center"
};
var _hoisted_7 = {
  "class": "mt-4 mx-2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-2xl text-white mb-2"
}, " Descripción de la entrega: ", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Arrastra o carga archivos manualmente.", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Archivos:", -1
/* HOISTED */
);

var _hoisted_11 = ["href"];
var _hoisted_12 = {
  key: 0
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Archivos:", -1
/* HOISTED */
);

var _hoisted_14 = ["href"];
var _hoisted_15 = {
  key: 1
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white text-center"
}, " No hay archivos para esta tarea ", -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_TabPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TabPanel");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_FileUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FileUpload");

  var _component_TabView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TabView");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_sbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("sbar");

  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    breakpoints: {
      '960px': '75vw',
      '640px': '100vw'
    },
    style: {
      width: '50vw'
    },
    modal: true,
    visible: $setup.values.modalArchivos,
    "onUpdate:visible": _cache[3] || (_cache[3] = function ($event) {
      return $setup.values.modalArchivos = $event;
    })
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabView, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabPanel, {
            header: "Lista de archivos"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
                value: $props.tarea.plantilla.archivos,
                selection: $setup.values.archivo,
                "onUpdate:selection": _cache[1] || (_cache[1] = function ($event) {
                  return $setup.values.archivo = $event;
                }),
                selectionMode: "single",
                paginator: true,
                rows: 10
              }, {
                header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  var _$setup$values$archiv;

                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    "class": "mx-auto disabled:bg-gray-500 bg-red-500 p-2 rounded-lg text-white",
                    disabled: Object.keys((_$setup$values$archiv = $setup.values.archivo) !== null && _$setup$values$archiv !== void 0 ? _$setup$values$archiv : {}).length == 0,
                    onClick: _cache[0] || (_cache[0] = function () {
                      return _ctx.eliminarArchivo && _ctx.eliminarArchivo.apply(_ctx, arguments);
                    })
                  }, " Eliminar ", 8
                  /* PROPS */
                  , _hoisted_3)])];
                }),
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
                    header: "Descripcion",
                    field: "descripcion"
                  }, {
                    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.descripcion == null ? "Sin descripción" : slotProps.data.descripcion), 1
                      /* TEXT */
                      )];
                    }),
                    _: 1
                    /* STABLE */

                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
                    header: "Archivo"
                  }, {
                    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                        href: slotProps.data.url,
                        target: "_blank"
                      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.nombre), 9
                      /* TEXT, PROPS */
                      , _hoisted_4)];
                    }),
                    _: 1
                    /* STABLE */

                  })];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["value", "selection"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabPanel, {
            header: "Subir archivo"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
                modelValue: $setup.values.descripcion_p,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $setup.values.descripcion_p = $event;
                }),
                placeholder: "Descripción (Opcional)",
                "class": "w-1/2"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FileUpload, {
                chooseLabel: 'Cargar',
                uploadLabel: 'Subir la tarea',
                showUploadButton: true,
                showCancelButton: false,
                name: "tarea[]",
                onUploader: $setup.uploadMaster,
                multiple: true,
                maxFileSize: 10000000,
                customUpload: true
              }, {
                empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_5];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["onUploader"])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sbar, {
    usuario: $props.usuario
  }, null, 8
  /* PROPS */
  , ["usuario"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Detalles de tarea " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tarea.plantilla.nombre) + " ", 1
  /* TEXT */
  ), $props.usuario.id_rol <= 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "p-2 bg-green-500 rounded-lg text-base",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.values.modalArchivos = true;
    })
  }, " Agregar archivos ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, {
    legend: 'Tarea: ' + $props.tarea.plantilla.nombre,
    "class": "mb-4"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Descripción: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tarea.plantilla.descripcion), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["legend"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabView, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabPanel, {
        header: "Entregar"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: $setup.values.descripcion,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.values.descripcion = $event;
            }),
            placeholder: "Descripción de la entrega (Opcional)",
            "class": "w-full"
          }, null, 8
          /* PROPS */
          , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FileUpload, {
            chooseLabel: 'Cargar',
            uploadLabel: 'Subir la tarea',
            showUploadButton: true,
            showCancelButton: false,
            name: "tarea[]",
            onUploader: $setup.myUploader,
            multiple: true,
            maxFileSize: 10000000,
            customUpload: true
          }, {
            empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["onUploader"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabPanel, {
        header: "Entregas previas"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.usuario.entregas, function (entrega) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Fieldset, {
              key: entrega.id_entrega,
              legend: 'Fecha: ' + entrega.created_at,
              "class": "mb-4"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Descripción: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(entrega.descripcion == null ? "Sin descripción" : entrega.descripcion), 1
                /* TEXT */
                ), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(entrega.archivos, function (archivo) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    key: archivo.id_archivo
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: archivo.url,
                    target: "_blank",
                    "class": "text-blue-500"
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(archivo.nombre), 9
                  /* TEXT, PROPS */
                  , _hoisted_11)]);
                }), 128
                /* KEYED_FRAGMENT */
                ))])];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["legend"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TabPanel, {
        header: "Archivos de la tarea"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$props.tarea.plantilla.archivos.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.tarea.plantilla.archivos, function (archivo) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
              key: archivo.id_archivo
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              href: archivo.url,
              target: "_blank",
              "class": "text-blue-500"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(archivo.nombre), 9
            /* TEXT, PROPS */
            , _hoisted_14)]);
          }), 128
          /* KEYED_FRAGMENT */
          ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_17))];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Logeado/Navbar.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Logeado/Navbar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_ac3b1986__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=ac3b1986 */ "./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_ac3b1986__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Logeado/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Logeado/Tareas_Detalles.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Logeado/Tareas_Detalles.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tareas_Detalles_vue_vue_type_template_id_6a5f99a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tareas_Detalles.vue?vue&type=template&id=6a5f99a8 */ "./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8");
/* harmony import */ var _Tareas_Detalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tareas_Detalles.vue?vue&type=script&lang=js */ "./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tareas_Detalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tareas_Detalles_vue_vue_type_template_id_6a5f99a8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Logeado/Tareas_Detalles.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tareas_Detalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tareas_Detalles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tareas_Detalles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_ac3b1986__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_ac3b1986__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=ac3b1986 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Navbar.vue?vue&type=template&id=ac3b1986");


/***/ }),

/***/ "./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tareas_Detalles_vue_vue_type_template_id_6a5f99a8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tareas_Detalles_vue_vue_type_template_id_6a5f99a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tareas_Detalles.vue?vue&type=template&id=6a5f99a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Tareas_Detalles.vue?vue&type=template&id=6a5f99a8");


/***/ })

}]);