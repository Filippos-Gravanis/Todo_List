/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
  html,body{
    margin: 0px;
    height: 100%;
    
}

*{
    box-sizing: border-box;
    font-family: "Roboto";
}
.pageContainer{
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header{
    padding: 1rem;
    background-color: #68C174;
    display: flex;
    align-items: center;
}

.addButtonContainer{
    flex-grow: 1;
    display: flex;
    justify-content: center;
}
.addTodoButton{
    font-size: 1.2rem;
    padding: .4rem;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px
    
}

.addTodoButton:hover{
    cursor: pointer;
    background-color: rgb(247, 247, 247);
    border-color: rgb(247, 247, 247);
}

.logo{
    font-size: 1.5rem;
    color: white;
    margin: 0px;
    font-family: "Roboto";
    font-weight: 700;
}

.sidebar{
    max-height: 100%;
    display: inline-block;
    background-color: rgb(245, 245, 245);
    padding: 1rem;
}


.navItem,.projectItem{
    margin: .5rem;
    font-size: 1.1rem;
    font-family: "Roboto";
    cursor: pointer;
    background-color: white;
    padding: .5rem 1rem .5rem 1rem;
    border-radius: 5px;
    border: 1px solid white;
    min-width: 250px;
}
.sidebarContent{
    display: flex;
    flex-grow: 1;
}

.content{
    display:flex;
    flex-grow: 1;
    justify-content: center;
    margin-top: 1rem;
}

.navItem:hover,.projectItem:hover{
    border: 1px solid #68C174;
}

.navItem:hover .active,.projectItem:hover .active{
    border: 1px solid rgb(206, 32, 32);
}

.active{
    color: white;
    background-color: #68C174;
}

.flx-clm{
    display: flex;
    flex-direction: column;
}

.todoCard{
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: .5rem;
    background-color: rgb(236, 236, 236);
    border-radius: 5px;
}

.projectsTag{
    margin-left: .5rem;
    font-size: 1.2rem;
    flex-grow: 1;
}

#projectsHeaderBtn{
    height: 50px;
    width: 50px;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
}
#projectsHeaderBtn:hover{
    background-color: rgb(247, 247, 247);
    border-color: rgb(247, 247, 247);
    cursor: pointer;
}

.todosContainer{
    display: flex;
    gap:1rem;
    flex-direction: column;
    margin-top: .5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 100%;
}

.title{
    margin-bottom: .1rem;
    margin-top: .2rem;
    user-select: none;
}


.divider {
    border-top: 1px solid rgb(240, 240, 240);

    width: 100%;
}

#projectsHeader {
    margin-top: 2rem;
    padding-right: .5rem;
    display: flex;
    width: 100%;
    align-items: center;
}


.formItem{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin: 1rem;
    width: 80%;
}

dialog{
    border: 1px solid white;
    border-radius: 5px;
}

.formItem label {
    font-size: 1.2rem;
}


#addTodoForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.formSelectItem{
    width: 80%;
}


.formSubmitButton {
    width: 80%;
}

#addProjectDialog{
    display: flex;
    gap:1rem;
    margin:.5rem
}

.todoInfoColumn{
    display: flex;
    flex-direction: column;
    justify-content:end;
    flex-grow: 1;
    margin-left: .8rem;
}

.dueDate{
    color:rgb(87, 87, 87);
    user-select: none;
}

.todoExtraInfo{
    display: flex;
    gap: .5rem;
    padding-top: 5px;
}

.lowPriority{
    color: #68C174
}
.mediumPriority{
    color:rgb(184, 184, 0)
}
.highPriority{
    color:rgb(255, 72, 72)
}

.todoExtraInfo > p {
    margin: 0px;
    font-size: .8rem;
    user-select: none;
}


.removeButton{
    user-select: none;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";EAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB;;AAEJ;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,uBAAuB;IACvB,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;AACrB;;;AAGA;IACI,wCAAwC;;IAExC,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,QAAQ;IACR;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI;AACJ;AACA;IACI;AACJ;AACA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA;IACI,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\nhtml,body{\n    margin: 0px;\n    height: 100%;\n    \n}\n\n*{\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n}\n.pageContainer{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    padding: 1rem;\n    background-color: #68C174;\n    display: flex;\n    align-items: center;\n}\n\n.addButtonContainer{\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n}\n.addTodoButton{\n    font-size: 1.2rem;\n    padding: .4rem;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px\n    \n}\n\n.addTodoButton:hover{\n    cursor: pointer;\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n}\n\n.logo{\n    font-size: 1.5rem;\n    color: white;\n    margin: 0px;\n    font-family: \"Roboto\";\n    font-weight: 700;\n}\n\n.sidebar{\n    max-height: 100%;\n    display: inline-block;\n    background-color: rgb(245, 245, 245);\n    padding: 1rem;\n}\n\n\n.navItem,.projectItem{\n    margin: .5rem;\n    font-size: 1.1rem;\n    font-family: \"Roboto\";\n    cursor: pointer;\n    background-color: white;\n    padding: .5rem 1rem .5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid white;\n    min-width: 250px;\n}\n.sidebarContent{\n    display: flex;\n    flex-grow: 1;\n}\n\n.content{\n    display:flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin-top: 1rem;\n}\n\n.navItem:hover,.projectItem:hover{\n    border: 1px solid #68C174;\n}\n\n.navItem:hover .active,.projectItem:hover .active{\n    border: 1px solid rgb(206, 32, 32);\n}\n\n.active{\n    color: white;\n    background-color: #68C174;\n}\n\n.flx-clm{\n    display: flex;\n    flex-direction: column;\n}\n\n.todoCard{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    padding: .5rem;\n    background-color: rgb(236, 236, 236);\n    border-radius: 5px;\n}\n\n.projectsTag{\n    margin-left: .5rem;\n    font-size: 1.2rem;\n    flex-grow: 1;\n}\n\n#projectsHeaderBtn{\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n}\n#projectsHeaderBtn:hover{\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n    cursor: pointer;\n}\n\n.todosContainer{\n    display: flex;\n    gap:1rem;\n    flex-direction: column;\n    margin-top: .5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    width: 100%;\n}\n\n.title{\n    margin-bottom: .1rem;\n    margin-top: .2rem;\n    user-select: none;\n}\n\n\n.divider {\n    border-top: 1px solid rgb(240, 240, 240);\n\n    width: 100%;\n}\n\n#projectsHeader {\n    margin-top: 2rem;\n    padding-right: .5rem;\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n\n\n.formItem{\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    margin: 1rem;\n    width: 80%;\n}\n\ndialog{\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n.formItem label {\n    font-size: 1.2rem;\n}\n\n\n#addTodoForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.formSelectItem{\n    width: 80%;\n}\n\n\n.formSubmitButton {\n    width: 80%;\n}\n\n#addProjectDialog{\n    display: flex;\n    gap:1rem;\n    margin:.5rem\n}\n\n.todoInfoColumn{\n    display: flex;\n    flex-direction: column;\n    justify-content:end;\n    flex-grow: 1;\n    margin-left: .8rem;\n}\n\n.dueDate{\n    color:rgb(87, 87, 87);\n    user-select: none;\n}\n\n.todoExtraInfo{\n    display: flex;\n    gap: .5rem;\n    padding-top: 5px;\n}\n\n.lowPriority{\n    color: #68C174\n}\n.mediumPriority{\n    color:rgb(184, 184, 0)\n}\n.highPriority{\n    color:rgb(255, 72, 72)\n}\n\n.todoExtraInfo > p {\n    margin: 0px;\n    font-size: .8rem;\n    user-select: none;\n}\n\n\n.removeButton{\n    user-select: none;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTodoDialog.js":
/*!******************************!*\
  !*** ./src/addTodoDialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTododialog: () => (/* binding */ addTododialog)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todosUiControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosUiControl */ "./src/todosUiControl.js");



function addTododialog(todosList, projectList, active) {
    const mainContainer = document.querySelector('.pageContainer')
    if (!document.querySelector('dialog')) {

        const container = document.createElement('dialog')
        container.id = "todoDialog"
        container.appendChild(addTodoform(todosList, projectList, active))

        mainContainer.appendChild(container)
        container.showModal()
    }
    else {
        document.querySelector('dialog').showModal()
    }

}


function addTodoform(todosList, projectList,active) {
    const addTodoForm = document.createElement('form')
    const header = document.createElement('h2')
    header.textContent = "New Todo"
    const formSubmitButton = document.createElement('button')
    formSubmitButton.classList.add("formSubmitButton")
    formSubmitButton.textContent = "Add Todo"
    formSubmitButton.type = "submit"
    addTodoForm.id = "addTodoForm"

    addTodoForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.todo(document.querySelector("#text").value, document.querySelector("#date").value,

            document.querySelector("#importance").value, document.querySelector("#projects").value))
        ;(0,_todosUiControl__WEBPACK_IMPORTED_MODULE_1__.EmptyTodosUi)()
        document.querySelector('.content').appendChild((0,_todosUiControl__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(todosList, active.activeTab),active))
        document.querySelector('dialog').close()
    })
    addTodoForm.appendChild(header)
    const textInputed = formItem('text', "text")
    textInputed.id = "textInputed"
    addTodoForm.appendChild(textInputed)
    const dateInputed = formItem('date', "date")
    dateInputed.id = "dateInputed"
    addTodoForm.appendChild(dateInputed)
    const projectInputed = formSelectItem('projects', projectList)
    projectInputed.id = "projectInputed"
    addTodoForm.appendChild(projectInputed)
    const importanceInputed = formSelectItem('importance', ['Low', 'Medium', 'High'])
    importanceInputed.id = "importanceInputed"
    addTodoForm.appendChild(importanceInputed)
    addTodoForm.appendChild(formSubmitButton)
    return addTodoForm
}


function formItem(label, type) {
    const formItemContainer = document.createElement('div')
    const formItemLabel = document.createElement('label')
    formItemContainer.classList.add('formItem')
    formItemLabel.htmlFor = label
    formItemLabel.textContent = label + " : "
    formItemContainer.appendChild(formItemLabel)
    if (type == "text") {
        const formInputItem = document.createElement('input')
        formInputItem.required = true
        formInputItem.id = label
        formInputItem.type = type
        formInputItem.name = label
        formItemContainer.appendChild(formInputItem)
    }
    else if (type == "date") {
        const formDateInput = document.createElement('input')
        formDateInput.required = true
        formDateInput.type = type
        formDateInput.id = label
        formDateInput.name = label
        formItemContainer.appendChild(formDateInput)
    }



    return formItemContainer

}


function formSelectItem(label, options) {
    const formItemContainer = document.createElement('div')
    formItemContainer.classList.add('formItem')
    const formSelectItemLabel = document.createElement('label')
    formSelectItemLabel.htmlFor = label
    formSelectItemLabel.textContent = label + " :"
    const formSelectItem = document.createElement('select')
    formSelectItem.id = label
    formSelectItem.name = label
    formSelectItem.required = true
    formSelectItem.classList.add("formSelect" + label)

    
    if (options.projects) {
        options.projects.forEach((project) => {
            const selectorOption = document.createElement('option')
            selectorOption.value = project
            selectorOption.textContent = project
            formSelectItem.appendChild(selectorOption)
        })
    }
    else {
        options.forEach(option => {
            const selectorOption = document.createElement('option')
            selectorOption.value = option
            selectorOption.textContent = option
            formSelectItem.appendChild(selectorOption)
        })
    }

    formItemContainer.appendChild(formSelectItemLabel)
    formItemContainer.appendChild(formSelectItem)
    return formItemContainer
}




/***/ }),

/***/ "./src/clearDiv.js":
/*!*************************!*\
  !*** ./src/clearDiv.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDiv: () => (/* binding */ clearDiv)
/* harmony export */ });
function clearDiv(divElement){
    
    while(divElement.lastChild){
        divElement.removeChild(divElement.lastChild)
    }
    divElement.remove()
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _addTodoDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoDialog */ "./src/addTodoDialog.js");



function header(todosList,projectList,active) {
    const mainContainer = document.querySelector('.pageContainer');
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('p');
    const addTodoButton = document.createElement('button')
    const addButtonContainer = document.createElement('div')
    addButtonContainer.classList.add('addButtonContainer')
    addTodoButton.textContent = "+ Add Todo"
    addTodoButton.classList.add('addTodoButton')
    addTodoButton.addEventListener('click', () => (0,_addTodoDialog__WEBPACK_IMPORTED_MODULE_0__.addTododialog)(todosList,projectList,active))
    headerContainer.classList.add('header');
    headerLogo.classList.add('logo')
    headerLogo.textContent = "TodoList";
    addButtonContainer.appendChild(addTodoButton)
    headerContainer.appendChild(headerLogo)
    headerContainer.appendChild(addButtonContainer)
    mainContainer.appendChild(headerContainer)
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _clearDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDiv */ "./src/clearDiv.js");
/* harmony import */ var _todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosUiControl.js */ "./src/todosUiControl.js");


class sidebar {
    constructor(projects, index,todosList) {
        this.projects = projects
        this.index = index
        this.todosList = todosList
    }
    initializeSidebar() {
        const sidebarContainer = document.createElement('div')
        sidebarContainer.classList.add('sidebar')
        
        const projectsHeader = document.createElement('div')
        projectsHeader.id = 'projectsHeader'
        const projectsTag = document.createElement('p')
        projectsTag.textContent = "Projects"
        const addProjectButton = document.createElement('button')
        addProjectButton.textContent = "+"
        addProjectButton.id = 'projectsHeaderBtn'
        addProjectButton.addEventListener('click', () => {
            if (document.querySelector('#addProjectDialog')) {
                this.removeAddProjectDialog()
            }
            else {
                const projectsList = document.querySelector('#projectsList')
                projectsList.prepend(this.addProjetDialog(this.projects))
            }
        })
        projectsTag.classList.add('projectsTag')
        projectsHeader.appendChild(projectsTag)
        projectsHeader.appendChild(addProjectButton)
        const allNavItem = this.createNavItem("All")
        allNavItem.classList.add("active")
        sidebarContainer.appendChild(allNavItem)
        sidebarContainer.appendChild(this.createNavItem("Today"))
        sidebarContainer.appendChild(this.createNavItem("This Week"))
        sidebarContainer.appendChild(projectsHeader)
        sidebarContainer.appendChild(this.projectsList(this.projects,this.todosList))
        const navItems = document.querySelectorAll('navItem')
        
        return sidebarContainer
    }


    createNavItem(text) {
        const navItem = document.createElement('div')
        navItem.textContent = text
        navItem.classList.add('navItem')
        navItem.addEventListener('click', (ev) => {
            let navItems = document.querySelectorAll(".navItem")
            
            navItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('active')
                }
            });
            ev.target.classList.add('active')
            
            this.index.activeTab = ev.target.innerText
            ;(0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.EmptyTodosUi)()
            document.querySelector('.content').appendChild((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(this.todosList,this.index.activeTab)),this.index)
        })
        return navItem




    }



    addProjetDialog() {
        const dialogContainer = document.createElement('div')
        const newProjectNameInput = document.createElement('input')
        const addButton = document.createElement('button')
        dialogContainer.id = "addProjectDialog"
        addButton.textContent = "Add"
        addButton.addEventListener('click', () => {
            this.projects.addProject(newProjectNameInput.value)
            ;(0,_clearDiv__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(document.querySelector('#addProjectDialog'))
            document.querySelector('#projectsList').appendChild(this.addprojectItem(newProjectNameInput.value))
        })
        dialogContainer.appendChild(newProjectNameInput)
        dialogContainer.appendChild(addButton)
        return dialogContainer

    }

    removeAddProjectDialog() {
        const dialogContainer = document.querySelector('#addProjectDialog')
        while (dialogContainer.lastChild) {
            dialogContainer.removeChild(dialogContainer.lastChild)
        }
        dialogContainer.remove()
    }


    projectsList() {
        const projectsList = document.createElement('div')
        projectsList.id = "projectsList"
        this.projects.getProjects().forEach((project) => {

            projectsList.appendChild(this.addprojectItem(project))
        })
        return projectsList

    }

    addprojectItem(project) {
        const projectItemContainer = document.createElement('div')
        projectItemContainer.classList.add('projectItem')
        projectItemContainer.classList.add('navItem')
        projectItemContainer.textContent = project
        projectItemContainer.addEventListener('click', ev => {
            let navItems = document.querySelectorAll(".navItem")
            
            
            navItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('active')
                }
            });
            ev.target.classList.add('active')
            this.index.activeTab = ev.target.innerText
            
            ;(0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.EmptyTodosUi)()
            document.querySelector('.content').appendChild((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(this.todosList,this.index.activeTab),this.index))
            

            
        })
        return projectItemContainer
    }

}

/***/ }),

/***/ "./src/storedTodos.js":
/*!****************************!*\
  !*** ./src/storedTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storedTodos: () => (/* binding */ storedTodos)
/* harmony export */ });
function storedTodos (){
    function getTodos(){
        if (localStorage.getItem('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        else{
            return []
        }
    }
    function setTodos(todos){
        localStorage.setItem('todos',JSON.stringify(todos))
    }
    return {getTodos,setTodos}
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
class todo {
    constructor(title, duedate, priority,group) {
        this.id = Date.now() + Math.floor(Math.random() * 100000)
        this.title = title
        this.duedate = duedate
        this.priority = priority
        this.group = group
        this.completed = false
    }
}

/***/ }),

/***/ "./src/todoFinder.js":
/*!***************************!*\
  !*** ./src/todoFinder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoFinder: () => (/* binding */ todoFinder)
/* harmony export */ });
class todoFinder {
    constructor(todo, todos) {
        this.todo = todo
        this.todos = todos
    }

    find() {
        let index = 0
        this.todos.forEach(listTodo => {

            if (listTodo.id == this.todo.id) {
                index = this.todos.indexOf(listTodo)
            }
        })
        return index
    }

}

/***/ }),

/***/ "./src/todosUiControl.js":
/*!*******************************!*\
  !*** ./src/todosUiControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyTodosUi: () => (/* binding */ EmptyTodosUi),
/* harmony export */   filterTodos: () => (/* binding */ filterTodos),
/* harmony export */   todoElement: () => (/* binding */ todoElement),
/* harmony export */   todoElementsContainer: () => (/* binding */ todoElementsContainer)
/* harmony export */ });
/* harmony import */ var _todoFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFinder */ "./src/todoFinder.js");

function todoElementsContainer(todosList,active) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    
    todosList.todoItems.forEach(todo => {
        
        todosContainer.appendChild(todoElement(todo,todosList,active))

    }

    )
    return todosContainer

}

function EmptyTodosUi(){
    const  todosContainer = document.querySelector('.todosContainer')
    while (todosContainer.lastChild){
        todosContainer.removeChild(todosContainer.lastChild)
    }
    todosContainer.remove()
}

function filterTodos (todoList,active){
    let filteredTodos = {todoItems:[]}
    todoList.todoItems.forEach((todo)=>{
        if (active=="All"){
            filteredTodos = todoList
            return
        }
        else if (active=="Today"){}
        else if (active=="This Week"){}
        else {
            if (todo.group==active){
                filteredTodos.todoItems.push(todo)
            }
        }
    })
    return filteredTodos
}


function todoElement(todoinfo,todosList,active) {

    const todo = document.createElement('div')
    todo.classList.add("todoCard")

    const title = document.createElement('p')
    title.classList.add('title')
    title.textContent = todoinfo.title

    const todoInfoColumn = document.createElement('div')
    todoInfoColumn.classList.add('todoInfoColumn')

    const todoExtraInfo = document.createElement('div')
    todoExtraInfo.classList.add('todoExtraInfo')
    
    const priority = document.createElement('p')
    priority.textContent = todoinfo.priority + " priority"
    priority.classList.add(importanceStyling(todoinfo.priority))

    const removeButton = document.createElement('div')
    removeButton.textContent="x"
    removeButton.classList.add('removeButton')
    removeButton.addEventListener('click',(ev)=>{
        todosList.deleteTodo(todoinfo)
        EmptyTodosUi()
        document.querySelector('.content').appendChild(todoElementsContainer(filterTodos(todosList, active.activeTab),active.activeTab))
    })

    const completed = document.createElement('input')
    completed.type = "checkbox"
    completed.checked = todoinfo.completed
    completed.addEventListener('click',(ev)=>{
        const todoIndex = new _todoFinder__WEBPACK_IMPORTED_MODULE_0__.todoFinder(todoinfo,todosList.todoItems)
        todosList.todoItems[todoIndex.find()].completed = ev.target.checked
        
    })

    const dueDate = document.createElement('p')
    dueDate.textContent = todoinfo.duedate
    dueDate.classList.add('dueDate')
    
    todoExtraInfo.appendChild(dueDate)
    todoExtraInfo.appendChild(priority)
    
    todoInfoColumn.appendChild(title)
    todoInfoColumn.appendChild(todoExtraInfo)

    todo.appendChild(completed)
    todo.appendChild(todoInfoColumn)
    todo.appendChild(removeButton)
    
    return todo

}

function importanceStyling(importance){
    if (importance=='Low'){
        return 'lowPriority'
    }
    else if (importance=='Medium'){
        return 'mediumPriority'
    }
    else {
        return 'highPriority'
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todoFinder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoFinder.js */ "./src/todoFinder.js");
/* harmony import */ var _todosUiControl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todosUiControl.js */ "./src/todosUiControl.js");
/* harmony import */ var _storedTodos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storedTodos.js */ "./src/storedTodos.js");







class todoProjects {

    constructor (projects){
        this.projects = ["default"] 
    }

    addProject(name) {
    this.projects.push(name)    
    }
    getProjects(){
        return this.projects
    }
}

class todos {
    constructor() {
        this.todoItems = (0,_storedTodos_js__WEBPACK_IMPORTED_MODULE_6__.storedTodos)().getTodos()
    }

    addTodo(todo) {
        this.todoItems.push(todo)
        ;(0,_storedTodos_js__WEBPACK_IMPORTED_MODULE_6__.storedTodos)().setTodos(this.todoItems)
    }

    deleteTodo(todo) {
        let todoToDelete = new _todoFinder_js__WEBPACK_IMPORTED_MODULE_4__.todoFinder(todo, this.todoItems)
        this.todoItems.splice(todoToDelete.find(), 1)
        ;(0,_storedTodos_js__WEBPACK_IMPORTED_MODULE_6__.storedTodos)().setTodos(this.todoItems)
    }
}







function content(todosList,active) {
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoElements = (0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_5__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_5__.filterTodos)(todosList,active.activeTab),active)
    contentContainer.appendChild(todoElements)
    return contentContainer
}





function sidebarContentContainer(todosList,projects,active) {
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const contentContainer = content(todosList,active)
    const sidebarr = new _sidebar_js__WEBPACK_IMPORTED_MODULE_2__.sidebar(projects,active,todosList)
    sidebarContentContainer.appendChild(sidebarr.initializeSidebar())
    sidebarContentContainer.appendChild(contentContainer)
    mainContainer.appendChild(sidebarContentContainer)

}

function mainPageContainer () {
    let todosList = new todos()
    let projects = new todoProjects()
    let active = {
        "activeTab" : "All"
    }
    projects.addProject("adventure")
    projects.addProject("karma")
    ;(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.header)(todosList,projects,active)
    sidebarContentContainer(todosList,projects,active)
}

mainPageContainer()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RUFBNkUsS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFL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O0FBQ0E7Ozs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTtBQUNFO0FBQ047QUFDWTtBQUMyQjtBQUN6QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw0REFBVztBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw2REFBVztBQUNuQjs7QUFFQTtBQUNBLCtCQUErQixzREFBVTtBQUN6QztBQUNBLFFBQVEsNkRBQVc7QUFDbkI7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUVBQXFCLENBQUMsK0RBQVc7QUFDeEQ7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkVG9kb0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY2xlYXJEaXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3RvcmVkVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9GaW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9zVWlDb250cm9sLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4gIGh0bWwsYm9keXtcbiAgICBtYXJnaW46IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG59XG5cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cbi5wYWdlQ29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXJ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMTc0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZEJ1dHRvbkNvbnRhaW5lcntcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZGRUb2RvQnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IC40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgIFxufVxuXG4uYWRkVG9kb0J1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xufVxuXG4ubG9nb3tcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNpZGViYXJ7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cblxuLm5hdkl0ZW0sLnByb2plY3RJdGVte1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cbi5zaWRlYmFyQ29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubmF2SXRlbTpob3ZlciwucHJvamVjdEl0ZW06aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY4QzE3NDtcbn1cblxuLm5hdkl0ZW06aG92ZXIgLmFjdGl2ZSwucHJvamVjdEl0ZW06aG92ZXIgLmFjdGl2ZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA2LCAzMiwgMzIpO1xufVxuXG4uYWN0aXZle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMTc0O1xufVxuXG4uZmx4LWNsbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RvQ2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3RzVGFne1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbiNwcm9qZWN0c0hlYWRlckJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3Byb2plY3RzSGVhZGVyQnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2Rvc0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cblxuLmRpdmlkZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XG5cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3Byb2plY3RzSGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZm9ybUl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuZGlhbG9ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1JdGVtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuXG4jYWRkVG9kb0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybVNlbGVjdEl0ZW17XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuXG4uZm9ybVN1Ym1pdEJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI2FkZFByb2plY3REaWFsb2d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6MXJlbTtcbiAgICBtYXJnaW46LjVyZW1cbn1cblxuLnRvZG9JbmZvQ29sdW1ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XG59XG5cbi5kdWVEYXRle1xuICAgIGNvbG9yOnJnYig4NywgODcsIDg3KTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRvZG9FeHRyYUluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5sb3dQcmlvcml0eXtcbiAgICBjb2xvcjogIzY4QzE3NFxufVxuLm1lZGl1bVByaW9yaXR5e1xuICAgIGNvbG9yOnJnYigxODQsIDE4NCwgMClcbn1cbi5oaWdoUHJpb3JpdHl7XG4gICAgY29sb3I6cmdiKDI1NSwgNzIsIDcyKVxufVxuXG4udG9kb0V4dHJhSW5mbyA+IHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cblxuLnJlbW92ZUJ1dHRvbntcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0VBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkI7O0FBRUo7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSx3Q0FBd0M7O0lBRXhDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxufVxcbi5wYWdlQ29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRCdXR0b25Db250YWluZXJ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGRUb2RvQnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XFxuICAgIFxcbn1cXG5cXG4uYWRkVG9kb0J1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5cXG4ubmF2SXRlbSwucHJvamVjdEl0ZW17XFxuICAgIG1hcmdpbjogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuLnNpZGViYXJDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyLC5wcm9qZWN0SXRlbTpob3ZlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY4QzE3NDtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXIgLmFjdGl2ZSwucHJvamVjdEl0ZW06aG92ZXIgLmFjdGl2ZXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNiwgMzIsIDMyKTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMTc0O1xcbn1cXG5cXG4uZmx4LWNsbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9DYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNUYWd7XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI3Byb2plY3RzSGVhZGVyQnRue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3Byb2plY3RzSGVhZGVyQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2Rvc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5cXG4uZGl2aWRlciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHNIZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5mb3JtSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbmRpYWxvZ3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm1JdGVtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcbiNhZGRUb2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVNlbGVjdEl0ZW17XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcblxcbi5mb3JtU3VibWl0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuI2FkZFByb2plY3REaWFsb2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBtYXJnaW46LjVyZW1cXG59XFxuXFxuLnRvZG9JbmZvQ29sdW1ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZW5kO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbi1sZWZ0OiAuOHJlbTtcXG59XFxuXFxuLmR1ZURhdGV7XFxuICAgIGNvbG9yOnJnYig4NywgODcsIDg3KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvRXh0cmFJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4ubG93UHJpb3JpdHl7XFxuICAgIGNvbG9yOiAjNjhDMTc0XFxufVxcbi5tZWRpdW1Qcmlvcml0eXtcXG4gICAgY29sb3I6cmdiKDE4NCwgMTg0LCAwKVxcbn1cXG4uaGlnaFByaW9yaXR5e1xcbiAgICBjb2xvcjpyZ2IoMjU1LCA3MiwgNzIpXFxufVxcblxcbi50b2RvRXh0cmFJbmZvID4gcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuXFxuLnJlbW92ZUJ1dHRvbntcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyBmaWx0ZXJUb2RvcyxFbXB0eVRvZG9zVWksdG9kb0VsZW1lbnRzQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9kb3NVaUNvbnRyb2xcIjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvZGlhbG9nKHRvZG9zTGlzdCwgcHJvamVjdExpc3QsIGFjdGl2ZSkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRhaW5lcicpXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IFwidG9kb0RpYWxvZ1wiXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0LCBhY3RpdmUpKVxuXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICBjb250YWluZXIuc2hvd01vZGFsKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpLnNob3dNb2RhbCgpXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb2Zvcm0odG9kb3NMaXN0LCBwcm9qZWN0TGlzdCxhY3RpdmUpIHtcbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk5ldyBUb2RvXCJcbiAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtU3VibWl0QnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIlxuICAgIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCJcbiAgICBhZGRUb2RvRm9ybS5pZCA9IFwiYWRkVG9kb0Zvcm1cIlxuXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgXG4gICAgICAgIHRvZG9zTGlzdC5hZGRUb2RvKG5ldyB0b2RvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dFwiKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlLFxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcG9ydGFuY2VcIikudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIikudmFsdWUpKVxuICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50c0NvbnRhaW5lcihmaWx0ZXJUb2Rvcyh0b2Rvc0xpc3QsIGFjdGl2ZS5hY3RpdmVUYWIpLGFjdGl2ZSkpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpLmNsb3NlKClcbiAgICB9KVxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb25zdCB0ZXh0SW5wdXRlZCA9IGZvcm1JdGVtKCd0ZXh0JywgXCJ0ZXh0XCIpXG4gICAgdGV4dElucHV0ZWQuaWQgPSBcInRleHRJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZCh0ZXh0SW5wdXRlZClcbiAgICBjb25zdCBkYXRlSW5wdXRlZCA9IGZvcm1JdGVtKCdkYXRlJywgXCJkYXRlXCIpXG4gICAgZGF0ZUlucHV0ZWQuaWQgPSBcImRhdGVJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXRlZClcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRlZCA9IGZvcm1TZWxlY3RJdGVtKCdwcm9qZWN0cycsIHByb2plY3RMaXN0KVxuICAgIHByb2plY3RJbnB1dGVkLmlkID0gXCJwcm9qZWN0SW5wdXRlZFwiXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0ZWQpXG4gICAgY29uc3QgaW1wb3J0YW5jZUlucHV0ZWQgPSBmb3JtU2VsZWN0SXRlbSgnaW1wb3J0YW5jZScsIFsnTG93JywgJ01lZGl1bScsICdIaWdoJ10pXG4gICAgaW1wb3J0YW5jZUlucHV0ZWQuaWQgPSBcImltcG9ydGFuY2VJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbmNlSW5wdXRlZClcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtU3VibWl0QnV0dG9uKVxuICAgIHJldHVybiBhZGRUb2RvRm9ybVxufVxuXG5cbmZ1bmN0aW9uIGZvcm1JdGVtKGxhYmVsLCB0eXBlKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm1JdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZm9ybUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUl0ZW0nKVxuICAgIGZvcm1JdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybUl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOiBcIlxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1JdGVtTGFiZWwpXG4gICAgaWYgKHR5cGUgPT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZm9ybUlucHV0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5pZCA9IGxhYmVsXG4gICAgICAgIGZvcm1JbnB1dEl0ZW0udHlwZSA9IHR5cGVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5uYW1lID0gbGFiZWxcbiAgICAgICAgZm9ybUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUlucHV0SXRlbSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgICBjb25zdCBmb3JtRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnR5cGUgPSB0eXBlXG4gICAgICAgIGZvcm1EYXRlSW5wdXQuaWQgPSBsYWJlbFxuICAgICAgICBmb3JtRGF0ZUlucHV0Lm5hbWUgPSBsYWJlbFxuICAgICAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGF0ZUlucHV0KVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gZm9ybUl0ZW1Db250YWluZXJcblxufVxuXG5cbmZ1bmN0aW9uIGZvcm1TZWxlY3RJdGVtKGxhYmVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JdGVtJylcbiAgICBjb25zdCBmb3JtU2VsZWN0SXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGZvcm1TZWxlY3RJdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybVNlbGVjdEl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOlwiXG4gICAgY29uc3QgZm9ybVNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGZvcm1TZWxlY3RJdGVtLmlkID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5uYW1lID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICBmb3JtU2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9ybVNlbGVjdFwiICsgbGFiZWwpXG5cbiAgICBcbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0cykge1xuICAgICAgICBvcHRpb25zLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnZhbHVlID0gcHJvamVjdFxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udmFsdWUgPSBvcHRpb25cbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uXG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU2VsZWN0SXRlbUxhYmVsKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TZWxlY3RJdGVtKVxuICAgIHJldHVybiBmb3JtSXRlbUNvbnRhaW5lclxufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckRpdihkaXZFbGVtZW50KXtcbiAgICBcbiAgICB3aGlsZShkaXZFbGVtZW50Lmxhc3RDaGlsZCl7XG4gICAgICAgIGRpdkVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2RWxlbWVudC5sYXN0Q2hpbGQpXG4gICAgfVxuICAgIGRpdkVsZW1lbnQucmVtb3ZlKClcbn0iLCJpbXBvcnQgeyBhZGRUb2RvZGlhbG9nIH0gZnJvbSBcIi4vYWRkVG9kb0RpYWxvZ1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIodG9kb3NMaXN0LHByb2plY3RMaXN0LGFjdGl2ZSkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uQ29udGFpbmVyJylcbiAgICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBUb2RvXCJcbiAgICBhZGRUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG9CdXR0b24nKVxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb2RvZGlhbG9nKHRvZG9zTGlzdCxwcm9qZWN0TGlzdCxhY3RpdmUpKVxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcIlRvZG9MaXN0XCI7XG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcilcbn1cbiIsImltcG9ydCB7IGNsZWFyRGl2IH0gZnJvbSBcIi4vY2xlYXJEaXZcIjtcbmltcG9ydCB7IGZpbHRlclRvZG9zLHRvZG9FbGVtZW50c0NvbnRhaW5lcixFbXB0eVRvZG9zVWkgfSBmcm9tIFwiLi90b2Rvc1VpQ29udHJvbC5qc1wiXG5leHBvcnQgY2xhc3Mgc2lkZWJhciB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdHMsIGluZGV4LHRvZG9zTGlzdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgICAgIHRoaXMudG9kb3NMaXN0ID0gdG9kb3NMaXN0XG4gICAgfVxuICAgIGluaXRpYWxpemVTaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuaWQgPSAncHJvamVjdHNIZWFkZXInXG4gICAgICAgIGNvbnN0IHByb2plY3RzVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHByb2plY3RzVGFnLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9ICdwcm9qZWN0c0hlYWRlckJ0bidcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdERpYWxvZycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGRQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0xpc3QnKVxuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdC5wcmVwZW5kKHRoaXMuYWRkUHJvamV0RGlhbG9nKHRoaXMucHJvamVjdHMpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0c1RhZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c1RhZycpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzVGFnKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgICAgICBjb25zdCBhbGxOYXZJdGVtID0gdGhpcy5jcmVhdGVOYXZJdGVtKFwiQWxsXCIpXG4gICAgICAgIGFsbE5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbE5hdkl0ZW0pXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZJdGVtKFwiVG9kYXlcIikpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZJdGVtKFwiVGhpcyBXZWVrXCIpKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHNMaXN0KHRoaXMucHJvamVjdHMsdGhpcy50b2Rvc0xpc3QpKVxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdkl0ZW0nKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpZGViYXJDb250YWluZXJcbiAgICB9XG5cblxuICAgIGNyZWF0ZU5hdkl0ZW0odGV4dCkge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2SXRlbS50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbmRleC5hY3RpdmVUYWIgPSBldi50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudHNDb250YWluZXIoZmlsdGVyVG9kb3ModGhpcy50b2Rvc0xpc3QsdGhpcy5pbmRleC5hY3RpdmVUYWIpKSx0aGlzLmluZGV4KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmF2SXRlbVxuXG5cblxuXG4gICAgfVxuXG5cblxuICAgIGFkZFByb2pldERpYWxvZygpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLmlkID0gXCJhZGRQcm9qZWN0RGlhbG9nXCJcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGNsZWFyRGl2KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0RGlhbG9nJykpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNMaXN0JykuYXBwZW5kQ2hpbGQodGhpcy5hZGRwcm9qZWN0SXRlbShuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlKSlcbiAgICAgICAgfSlcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lSW5wdXQpXG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgICAgIHJldHVybiBkaWFsb2dDb250YWluZXJcblxuICAgIH1cblxuICAgIHJlbW92ZUFkZFByb2plY3REaWFsb2coKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0RGlhbG9nJylcbiAgICAgICAgd2hpbGUgKGRpYWxvZ0NvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChkaWFsb2dDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKVxuICAgIH1cblxuXG4gICAgcHJvamVjdHNMaXN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzTGlzdFwiXG4gICAgICAgIHRoaXMucHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmFkZHByb2plY3RJdGVtKHByb2plY3QpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvamVjdHNMaXN0XG5cbiAgICB9XG5cbiAgICBhZGRwcm9qZWN0SXRlbShwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKVxuICAgICAgICBwcm9qZWN0SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgIHByb2plY3RJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgdGhpcy5pbmRleC5hY3RpdmVUYWIgPSBldi50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEVtcHR5VG9kb3NVaSgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50c0NvbnRhaW5lcihmaWx0ZXJUb2Rvcyh0aGlzLnRvZG9zTGlzdCx0aGlzLmluZGV4LmFjdGl2ZVRhYiksdGhpcy5pbmRleCkpXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9qZWN0SXRlbUNvbnRhaW5lclxuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZWRUb2RvcyAoKXtcbiAgICBmdW5jdGlvbiBnZXRUb2Rvcygpe1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpe1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFRvZG9zKHRvZG9zKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJyxKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gICAgfVxuICAgIHJldHVybiB7Z2V0VG9kb3Msc2V0VG9kb3N9XG59IiwiZXhwb3J0IGNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSxncm91cCkge1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMClcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cFxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB0b2RvRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2Rvc1xuICAgIH1cblxuICAgIGZpbmQoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKGxpc3RUb2RvID0+IHtcblxuICAgICAgICAgICAgaWYgKGxpc3RUb2RvLmlkID09IHRoaXMudG9kby5pZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKGxpc3RUb2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyB0b2RvRmluZGVyIH0gZnJvbSBcIi4vdG9kb0ZpbmRlclwiO1xuZnVuY3Rpb24gdG9kb0VsZW1lbnRzQ29udGFpbmVyKHRvZG9zTGlzdCxhY3RpdmUpIHtcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3NDb250YWluZXInKVxuICAgIFxuICAgIHRvZG9zTGlzdC50b2RvSXRlbXMuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KHRvZG8sdG9kb3NMaXN0LGFjdGl2ZSkpXG5cbiAgICB9XG5cbiAgICApXG4gICAgcmV0dXJuIHRvZG9zQ29udGFpbmVyXG5cbn1cblxuZnVuY3Rpb24gRW1wdHlUb2Rvc1VpKCl7XG4gICAgY29uc3QgIHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zQ29udGFpbmVyJylcbiAgICB3aGlsZSAodG9kb3NDb250YWluZXIubGFzdENoaWxkKXtcbiAgICAgICAgdG9kb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb3NDb250YWluZXIubGFzdENoaWxkKVxuICAgIH1cbiAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmUoKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvcyAodG9kb0xpc3QsYWN0aXZlKXtcbiAgICBsZXQgZmlsdGVyZWRUb2RvcyA9IHt0b2RvSXRlbXM6W119XG4gICAgdG9kb0xpc3QudG9kb0l0ZW1zLmZvckVhY2goKHRvZG8pPT57XG4gICAgICAgIGlmIChhY3RpdmU9PVwiQWxsXCIpe1xuICAgICAgICAgICAgZmlsdGVyZWRUb2RvcyA9IHRvZG9MaXN0XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3RpdmU9PVwiVG9kYXlcIil7fVxuICAgICAgICBlbHNlIGlmIChhY3RpdmU9PVwiVGhpcyBXZWVrXCIpe31cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG9kby5ncm91cD09YWN0aXZlKXtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFRvZG9zLnRvZG9JdGVtcy5wdXNoKHRvZG8pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmaWx0ZXJlZFRvZG9zXG59XG5cblxuZnVuY3Rpb24gdG9kb0VsZW1lbnQodG9kb2luZm8sdG9kb3NMaXN0LGFjdGl2ZSkge1xuXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb0NhcmRcIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb2luZm8udGl0bGVcblxuICAgIGNvbnN0IHRvZG9JbmZvQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvSW5mb0NvbHVtbi5jbGFzc0xpc3QuYWRkKCd0b2RvSW5mb0NvbHVtbicpXG5cbiAgICBjb25zdCB0b2RvRXh0cmFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRXh0cmFJbmZvLmNsYXNzTGlzdC5hZGQoJ3RvZG9FeHRyYUluZm8nKVxuICAgIFxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvaW5mby5wcmlvcml0eSArIFwiIHByaW9yaXR5XCJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGltcG9ydGFuY2VTdHlsaW5nKHRvZG9pbmZvLnByaW9yaXR5KSlcblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50PVwieFwiXG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUJ1dHRvbicpXG4gICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXYpPT57XG4gICAgICAgIHRvZG9zTGlzdC5kZWxldGVUb2RvKHRvZG9pbmZvKVxuICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50c0NvbnRhaW5lcihmaWx0ZXJUb2Rvcyh0b2Rvc0xpc3QsIGFjdGl2ZS5hY3RpdmVUYWIpLGFjdGl2ZS5hY3RpdmVUYWIpKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29tcGxldGVkLnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICBjb21wbGV0ZWQuY2hlY2tlZCA9IHRvZG9pbmZvLmNvbXBsZXRlZFxuICAgIGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2KT0+e1xuICAgICAgICBjb25zdCB0b2RvSW5kZXggPSBuZXcgdG9kb0ZpbmRlcih0b2RvaW5mbyx0b2Rvc0xpc3QudG9kb0l0ZW1zKVxuICAgICAgICB0b2Rvc0xpc3QudG9kb0l0ZW1zW3RvZG9JbmRleC5maW5kKCldLmNvbXBsZXRlZCA9IGV2LnRhcmdldC5jaGVja2VkXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9pbmZvLmR1ZWRhdGVcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKVxuICAgIFxuICAgIHRvZG9FeHRyYUluZm8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICB0b2RvRXh0cmFJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIFxuICAgIHRvZG9JbmZvQ29sdW1uLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIHRvZG9JbmZvQ29sdW1uLmFwcGVuZENoaWxkKHRvZG9FeHRyYUluZm8pXG5cbiAgICB0b2RvLmFwcGVuZENoaWxkKGNvbXBsZXRlZClcbiAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9JbmZvQ29sdW1uKVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgIFxuICAgIHJldHVybiB0b2RvXG5cbn1cblxuZnVuY3Rpb24gaW1wb3J0YW5jZVN0eWxpbmcoaW1wb3J0YW5jZSl7XG4gICAgaWYgKGltcG9ydGFuY2U9PSdMb3cnKXtcbiAgICAgICAgcmV0dXJuICdsb3dQcmlvcml0eSdcbiAgICB9XG4gICAgZWxzZSBpZiAoaW1wb3J0YW5jZT09J01lZGl1bScpe1xuICAgICAgICByZXR1cm4gJ21lZGl1bVByaW9yaXR5J1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdoaWdoUHJpb3JpdHknXG4gICAgfVxufVxuXG5leHBvcnQge3RvZG9FbGVtZW50LHRvZG9FbGVtZW50c0NvbnRhaW5lcixmaWx0ZXJUb2RvcyxFbXB0eVRvZG9zVWl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci5qc1wiXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiXG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyB0b2RvRmluZGVyIH0gZnJvbSBcIi4vdG9kb0ZpbmRlci5qc1wiXG5pbXBvcnQgeyBmaWx0ZXJUb2Rvcyx0b2RvRWxlbWVudHNDb250YWluZXIgfSBmcm9tIFwiLi90b2Rvc1VpQ29udHJvbC5qc1wiXG5pbXBvcnQgeyBzdG9yZWRUb2RvcyB9IGZyb20gXCIuL3N0b3JlZFRvZG9zLmpzXCJcbmNsYXNzIHRvZG9Qcm9qZWN0cyB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdHMpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW1wiZGVmYXVsdFwiXSBcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmFtZSkgICAgXG4gICAgfVxuICAgIGdldFByb2plY3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gICAgfVxufVxuXG5jbGFzcyB0b2RvcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gc3RvcmVkVG9kb3MoKS5nZXRUb2RvcygpXG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kbylcbiAgICAgICAgc3RvcmVkVG9kb3MoKS5zZXRUb2Rvcyh0aGlzLnRvZG9JdGVtcylcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICAgICAgbGV0IHRvZG9Ub0RlbGV0ZSA9IG5ldyB0b2RvRmluZGVyKHRvZG8sIHRoaXMudG9kb0l0ZW1zKVxuICAgICAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UodG9kb1RvRGVsZXRlLmZpbmQoKSwgMSlcbiAgICAgICAgc3RvcmVkVG9kb3MoKS5zZXRUb2Rvcyh0aGlzLnRvZG9JdGVtcylcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNvbnRlbnQodG9kb3NMaXN0LGFjdGl2ZSkge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuICAgIGxldCB0b2RvRWxlbWVudHMgPSB0b2RvRWxlbWVudHNDb250YWluZXIoZmlsdGVyVG9kb3ModG9kb3NMaXN0LGFjdGl2ZS5hY3RpdmVUYWIpLGFjdGl2ZSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50cylcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lclxufVxuXG5cblxuXG5cbmZ1bmN0aW9uIHNpZGViYXJDb250ZW50Q29udGFpbmVyKHRvZG9zTGlzdCxwcm9qZWN0cyxhY3RpdmUpIHtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRhaW5lclwiKVxuICAgIGxldCBzaWRlYmFyQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckNvbnRlbnQnKVxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjb250ZW50KHRvZG9zTGlzdCxhY3RpdmUpXG4gICAgY29uc3Qgc2lkZWJhcnIgPSBuZXcgc2lkZWJhcihwcm9qZWN0cyxhY3RpdmUsdG9kb3NMaXN0KVxuICAgIHNpZGViYXJDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJyLmluaXRpYWxpemVTaWRlYmFyKCkpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJDb250ZW50Q29udGFpbmVyKVxuXG59XG5cbmZ1bmN0aW9uIG1haW5QYWdlQ29udGFpbmVyICgpIHtcbiAgICBsZXQgdG9kb3NMaXN0ID0gbmV3IHRvZG9zKClcbiAgICBsZXQgcHJvamVjdHMgPSBuZXcgdG9kb1Byb2plY3RzKClcbiAgICBsZXQgYWN0aXZlID0ge1xuICAgICAgICBcImFjdGl2ZVRhYlwiIDogXCJBbGxcIlxuICAgIH1cbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFwiYWR2ZW50dXJlXCIpXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChcImthcm1hXCIpXG4gICAgaGVhZGVyKHRvZG9zTGlzdCxwcm9qZWN0cyxhY3RpdmUpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIodG9kb3NMaXN0LHByb2plY3RzLGFjdGl2ZSlcbn1cblxubWFpblBhZ2VDb250YWluZXIoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=