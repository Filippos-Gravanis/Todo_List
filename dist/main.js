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
    font-size: 1.3rem;
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
    gap:1rem
}

.todoInfoColumn{
    display: flex;
    flex-direction: column;
    justify-content:end;
    margin-left: .8rem;
}

.dueDate{
    margin-top: 5px;
    margin-bottom:0px;
    font-size: .8rem;
    color:rgb(87, 87, 87);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";EAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB;;AAEJ;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,uBAAuB;IACvB,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;;AAGA;IACI,wCAAwC;;IAExC,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\nhtml,body{\n    margin: 0px;\n    height: 100%;\n    \n}\n\n*{\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n}\n.pageContainer{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    padding: 1rem;\n    background-color: #68C174;\n    display: flex;\n    align-items: center;\n}\n\n.addButtonContainer{\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n}\n.addTodoButton{\n    font-size: 1.2rem;\n    padding: .4rem;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px\n    \n}\n\n.addTodoButton:hover{\n    cursor: pointer;\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n}\n\n.logo{\n    font-size: 1.5rem;\n    color: white;\n    margin: 0px;\n    font-family: \"Roboto\";\n    font-weight: 700;\n}\n\n.sidebar{\n    max-height: 100%;\n    display: inline-block;\n    background-color: rgb(245, 245, 245);\n    padding: 1rem;\n}\n\n\n.navItem,.projectItem{\n    margin: .5rem;\n    font-size: 1.3rem;\n    font-family: \"Roboto\";\n    cursor: pointer;\n    background-color: white;\n    padding: .5rem 1rem .5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid white;\n    min-width: 250px;\n}\n.sidebarContent{\n    display: flex;\n    flex-grow: 1;\n}\n\n.content{\n    display:flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin-top: 1rem;\n}\n\n.navItem:hover,.projectItem:hover{\n    border: 1px solid #68C174;\n}\n\n.navItem:hover .active,.projectItem:hover .active{\n    border: 1px solid rgb(206, 32, 32);\n}\n\n.active{\n    color: white;\n    background-color: #68C174;\n}\n\n.flx-clm{\n    display: flex;\n    flex-direction: column;\n}\n\n.todoCard{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    padding: .5rem;\n    background-color: rgb(236, 236, 236);\n    border-radius: 5px;\n}\n\n.projectsTag{\n    margin-left: .5rem;\n    font-size: 1.2rem;\n    flex-grow: 1;\n}\n\n#projectsHeaderBtn{\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n}\n#projectsHeaderBtn:hover{\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n    cursor: pointer;\n}\n\n.todosContainer{\n    display: flex;\n    gap:1rem;\n    flex-direction: column;\n    margin-top: .5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    width: 100%;\n}\n\n.title{\n    margin-bottom: .1rem;\n    margin-top: .2rem;\n}\n\n\n.divider {\n    border-top: 1px solid rgb(240, 240, 240);\n\n    width: 100%;\n}\n\n#projectsHeader {\n    margin-top: 2rem;\n    padding-right: .5rem;\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n\n\n.formItem{\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    margin: 1rem;\n    width: 80%;\n}\n\ndialog{\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n.formItem label {\n    font-size: 1.2rem;\n}\n\n\n#addTodoForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.formSelectItem{\n    width: 80%;\n}\n\n\n.formSubmitButton {\n    width: 80%;\n}\n\n#addProjectDialog{\n    display: flex;\n    gap:1rem\n}\n\n.todoInfoColumn{\n    display: flex;\n    flex-direction: column;\n    justify-content:end;\n    margin-left: .8rem;\n}\n\n.dueDate{\n    margin-top: 5px;\n    margin-bottom:0px;\n    font-size: .8rem;\n    color:rgb(87, 87, 87);\n}"],"sourceRoot":""}]);
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
        document.querySelector('.content').appendChild((0,_todosUiControl__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(todosList, active.activeTab)))
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
    const importanceInputed = formSelectItem('importance', ['low', 'medium', 'high'])
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
                removeAddProjectDialog()
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
            document.querySelector('.content').appendChild((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(this.todosList,this.index.activeTab)))
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
            document.querySelector('.content').appendChild((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(this.todosList,this.index.activeTab)))
            

            
        })
        return projectItemContainer
    }

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

function todoElementsContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    
    todosList.todoItems.forEach(todo => {
        
        todosContainer.appendChild(todoElement(todo,todosList))

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


function todoElement(todoinfo,todosList) {

    const todo = document.createElement('div')
    todo.classList.add("todoCard")

    const title = document.createElement('p')
    title.classList.add('title')
    title.textContent = todoinfo.title

    const todoInfoColumn = document.createElement('div')
    todoInfoColumn.classList.add('todoInfoColumn')
    
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
    
    
    todoInfoColumn.appendChild(title)
    todoInfoColumn.appendChild(dueDate)

    todo.appendChild(completed)
    todo.appendChild(todoInfoColumn)
    
    return todo

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
        this.todoItems = []
    }

    addTodo(todo) {
        this.todoItems.push(todo)
    }

    deleteTodo(todo) {
        let todoToDelete = new _todoFinder_js__WEBPACK_IMPORTED_MODULE_4__.todoFinder(todo, this.todoItems)
        this.todoItems.splice(todoToDelete.find(), 1)
        
    }
}







function content(todosList,active) {
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoElements = (0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_5__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_5__.filterTodos)(todosList,active.activeTab))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkVBQTZFLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFP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Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkVG9kb0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY2xlYXJEaXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb0ZpbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb3NVaUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAgaHRtbCxib2R5e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLnBhZ2VDb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkQnV0dG9uQ29udGFpbmVye1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZFRvZG9CdXR0b257XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogLjRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgXG59XG5cbi5hZGRUb2RvQnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbi5sb2dve1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2lkZWJhcntcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4ubmF2SXRlbSwucHJvamVjdEl0ZW17XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuLnNpZGViYXJDb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5uYXZJdGVtOmhvdmVyLC5wcm9qZWN0SXRlbTpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjhDMTc0O1xufVxuXG4ubmF2SXRlbTpob3ZlciAuYWN0aXZlLC5wcm9qZWN0SXRlbTpob3ZlciAuYWN0aXZle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDYsIDMyLCAzMik7XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XG59XG5cbi5mbHgtY2xte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZG9DYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdHNUYWd7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuI3Byb2plY3RzSGVhZGVyQnRue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jcHJvamVjdHNIZWFkZXJCdG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG9zQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbn1cblxuXG4uZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdHNIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5mb3JtSXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogODAlO1xufVxuXG5kaWFsb2d7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybUl0ZW0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbiNhZGRUb2RvRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtU2VsZWN0SXRlbXtcbiAgICB3aWR0aDogODAlO1xufVxuXG5cbi5mb3JtU3VibWl0QnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jYWRkUHJvamVjdERpYWxvZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxcmVtXG59XG5cbi50b2RvSW5mb0NvbHVtbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmVuZDtcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XG59XG5cbi5kdWVEYXRle1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGNvbG9yOnJnYig4NywgODcsIDg3KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7RUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qjs7QUFFSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksd0NBQXdDOztJQUV4QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbmh0bWwsYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuLnBhZ2VDb250YWluZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QzE3NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZEJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFkZFRvZG9CdXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgXFxufVxcblxcbi5hZGRUb2RvQnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxufVxcblxcbi5sb2dve1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcblxcbi5uYXZJdGVtLC5wcm9qZWN0SXRlbXtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4uc2lkZWJhckNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXIsLnByb2plY3RJdGVtOmhvdmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjhDMTc0O1xcbn1cXG5cXG4ubmF2SXRlbTpob3ZlciAuYWN0aXZlLC5wcm9qZWN0SXRlbTpob3ZlciAuYWN0aXZle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA2LCAzMiwgMzIpO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XFxufVxcblxcbi5mbHgtY2xte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0NhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0c1RhZ3tcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jcHJvamVjdHNIZWFkZXJCdG57XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jcHJvamVjdHNIZWFkZXJCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IC4xcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcXG59XFxuXFxuXFxuLmRpdmlkZXIge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzSGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZm9ybUl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5kaWFsb2d7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtSXRlbSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4jYWRkVG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1TZWxlY3RJdGVte1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5cXG4uZm9ybVN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNhZGRQcm9qZWN0RGlhbG9ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbVxcbn1cXG5cXG4udG9kb0luZm9Db2x1bW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDplbmQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAuOHJlbTtcXG59XFxuXFxuLmR1ZURhdGV7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGNvbG9yOnJnYig4NywgODcsIDg3KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyBmaWx0ZXJUb2RvcyxFbXB0eVRvZG9zVWksdG9kb0VsZW1lbnRzQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9kb3NVaUNvbnRyb2xcIjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvZGlhbG9nKHRvZG9zTGlzdCwgcHJvamVjdExpc3QsIGFjdGl2ZSkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRhaW5lcicpXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IFwidG9kb0RpYWxvZ1wiXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0LCBhY3RpdmUpKVxuXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICBjb250YWluZXIuc2hvd01vZGFsKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpLnNob3dNb2RhbCgpXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb2Zvcm0odG9kb3NMaXN0LCBwcm9qZWN0TGlzdCxhY3RpdmUpIHtcbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk5ldyBUb2RvXCJcbiAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtU3VibWl0QnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIlxuICAgIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCJcbiAgICBhZGRUb2RvRm9ybS5pZCA9IFwiYWRkVG9kb0Zvcm1cIlxuXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgXG4gICAgICAgIHRvZG9zTGlzdC5hZGRUb2RvKG5ldyB0b2RvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dFwiKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlLFxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcG9ydGFuY2VcIikudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIikudmFsdWUpKVxuICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50c0NvbnRhaW5lcihmaWx0ZXJUb2Rvcyh0b2Rvc0xpc3QsIGFjdGl2ZS5hY3RpdmVUYWIpKSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuY2xvc2UoKVxuICAgIH0pXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnN0IHRleHRJbnB1dGVkID0gZm9ybUl0ZW0oJ3RleHQnLCBcInRleHRcIilcbiAgICB0ZXh0SW5wdXRlZC5pZCA9IFwidGV4dElucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRleHRJbnB1dGVkKVxuICAgIGNvbnN0IGRhdGVJbnB1dGVkID0gZm9ybUl0ZW0oJ2RhdGUnLCBcImRhdGVcIilcbiAgICBkYXRlSW5wdXRlZC5pZCA9IFwiZGF0ZUlucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dGVkKVxuICAgIGNvbnN0IHByb2plY3RJbnB1dGVkID0gZm9ybVNlbGVjdEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdExpc3QpXG4gICAgcHJvamVjdElucHV0ZWQuaWQgPSBcInByb2plY3RJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRlZClcbiAgICBjb25zdCBpbXBvcnRhbmNlSW5wdXRlZCA9IGZvcm1TZWxlY3RJdGVtKCdpbXBvcnRhbmNlJywgWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXSlcbiAgICBpbXBvcnRhbmNlSW5wdXRlZC5pZCA9IFwiaW1wb3J0YW5jZUlucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGltcG9ydGFuY2VJbnB1dGVkKVxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgcmV0dXJuIGFkZFRvZG9Gb3JtXG59XG5cblxuZnVuY3Rpb24gZm9ybUl0ZW0obGFiZWwsIHR5cGUpIHtcbiAgICBjb25zdCBmb3JtSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZm9ybUl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBmb3JtSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtSXRlbScpXG4gICAgZm9ybUl0ZW1MYWJlbC5odG1sRm9yID0gbGFiZWxcbiAgICBmb3JtSXRlbUxhYmVsLnRleHRDb250ZW50ID0gbGFiZWwgKyBcIiA6IFwiXG4gICAgZm9ybUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUl0ZW1MYWJlbClcbiAgICBpZiAodHlwZSA9PSBcInRleHRcIikge1xuICAgICAgICBjb25zdCBmb3JtSW5wdXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBmb3JtSW5wdXRJdGVtLnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICBmb3JtSW5wdXRJdGVtLmlkID0gbGFiZWxcbiAgICAgICAgZm9ybUlucHV0SXRlbS50eXBlID0gdHlwZVxuICAgICAgICBmb3JtSW5wdXRJdGVtLm5hbWUgPSBsYWJlbFxuICAgICAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSW5wdXRJdGVtKVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGZvcm1EYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIGZvcm1EYXRlSW5wdXQudHlwZSA9IHR5cGVcbiAgICAgICAgZm9ybURhdGVJbnB1dC5pZCA9IGxhYmVsXG4gICAgICAgIGZvcm1EYXRlSW5wdXQubmFtZSA9IGxhYmVsXG4gICAgICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1EYXRlSW5wdXQpXG4gICAgfVxuXG5cblxuICAgIHJldHVybiBmb3JtSXRlbUNvbnRhaW5lclxuXG59XG5cblxuZnVuY3Rpb24gZm9ybVNlbGVjdEl0ZW0obGFiZWwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBmb3JtSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUl0ZW0nKVxuICAgIGNvbnN0IGZvcm1TZWxlY3RJdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZm9ybVNlbGVjdEl0ZW1MYWJlbC5odG1sRm9yID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbUxhYmVsLnRleHRDb250ZW50ID0gbGFiZWwgKyBcIiA6XCJcbiAgICBjb25zdCBmb3JtU2VsZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgZm9ybVNlbGVjdEl0ZW0uaWQgPSBsYWJlbFxuICAgIGZvcm1TZWxlY3RJdGVtLm5hbWUgPSBsYWJlbFxuICAgIGZvcm1TZWxlY3RJdGVtLnJlcXVpcmVkID0gdHJ1ZVxuICAgIGZvcm1TZWxlY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb3JtU2VsZWN0XCIgKyBsYWJlbClcblxuICAgIFxuICAgIGlmIChvcHRpb25zLnByb2plY3RzKSB7XG4gICAgICAgIG9wdGlvbnMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udmFsdWUgPSBwcm9qZWN0XG4gICAgICAgICAgICBzZWxlY3Rvck9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RcbiAgICAgICAgICAgIGZvcm1TZWxlY3RJdGVtLmFwcGVuZENoaWxkKHNlbGVjdG9yT3B0aW9uKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rvck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICAgICBzZWxlY3Rvck9wdGlvbi52YWx1ZSA9IG9wdGlvblxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25cbiAgICAgICAgICAgIGZvcm1TZWxlY3RJdGVtLmFwcGVuZENoaWxkKHNlbGVjdG9yT3B0aW9uKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TZWxlY3RJdGVtTGFiZWwpXG4gICAgZm9ybUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVNlbGVjdEl0ZW0pXG4gICAgcmV0dXJuIGZvcm1JdGVtQ29udGFpbmVyXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGl2KGRpdkVsZW1lbnQpe1xuICAgIFxuICAgIHdoaWxlKGRpdkVsZW1lbnQubGFzdENoaWxkKXtcbiAgICAgICAgZGl2RWxlbWVudC5yZW1vdmVDaGlsZChkaXZFbGVtZW50Lmxhc3RDaGlsZClcbiAgICB9XG4gICAgZGl2RWxlbWVudC5yZW1vdmUoKVxufSIsImltcG9ydCB7IGFkZFRvZG9kaWFsb2cgfSBmcm9tIFwiLi9hZGRUb2RvRGlhbG9nXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcih0b2Rvc0xpc3QscHJvamVjdExpc3QsYWN0aXZlKSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b25Db250YWluZXInKVxuICAgIGFkZFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRvZG9cIlxuICAgIGFkZFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J1dHRvbicpXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRvZG9kaWFsb2codG9kb3NMaXN0LHByb2plY3RMaXN0LGFjdGl2ZSkpXG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gICAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwiVG9kb0xpc3RcIjtcbiAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbilcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbylcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uQ29udGFpbmVyKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKVxufVxuIiwiaW1wb3J0IHsgY2xlYXJEaXYgfSBmcm9tIFwiLi9jbGVhckRpdlwiO1xuaW1wb3J0IHsgZmlsdGVyVG9kb3MsdG9kb0VsZW1lbnRzQ29udGFpbmVyLEVtcHR5VG9kb3NVaSB9IGZyb20gXCIuL3RvZG9zVWlDb250cm9sLmpzXCJcbmV4cG9ydCBjbGFzcyBzaWRlYmFyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0cywgaW5kZXgsdG9kb3NMaXN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy50b2Rvc0xpc3QgPSB0b2Rvc0xpc3RcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVNpZGViYXIoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5pZCA9ICdwcm9qZWN0c0hlYWRlcidcbiAgICAgICAgY29uc3QgcHJvamVjdHNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcHJvamVjdHNUYWcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmlkID0gJ3Byb2plY3RzSGVhZGVyQnRuJ1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0RGlhbG9nJykpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVBZGRQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0xpc3QnKVxuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdC5wcmVwZW5kKHRoaXMuYWRkUHJvamV0RGlhbG9nKHRoaXMucHJvamVjdHMpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0c1RhZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c1RhZycpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzVGFnKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgICAgICBjb25zdCBhbGxOYXZJdGVtID0gdGhpcy5jcmVhdGVOYXZJdGVtKFwiQWxsXCIpXG4gICAgICAgIGFsbE5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbE5hdkl0ZW0pXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZJdGVtKFwiVG9kYXlcIikpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZJdGVtKFwiVGhpcyBXZWVrXCIpKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHNMaXN0KHRoaXMucHJvamVjdHMsdGhpcy50b2Rvc0xpc3QpKVxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdkl0ZW0nKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpZGViYXJDb250YWluZXJcbiAgICB9XG5cblxuICAgIGNyZWF0ZU5hdkl0ZW0odGV4dCkge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2SXRlbS50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbmRleC5hY3RpdmVUYWIgPSBldi50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudHNDb250YWluZXIoZmlsdGVyVG9kb3ModGhpcy50b2Rvc0xpc3QsdGhpcy5pbmRleC5hY3RpdmVUYWIpKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW1cblxuXG5cblxuICAgIH1cblxuXG5cbiAgICBhZGRQcm9qZXREaWFsb2coKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5pZCA9IFwiYWRkUHJvamVjdERpYWxvZ1wiXG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCJcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUpXG4gICAgICAgICAgICBjbGVhckRpdihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdERpYWxvZycpKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzTGlzdCcpLmFwcGVuZENoaWxkKHRoaXMuYWRkcHJvamVjdEl0ZW0obmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZUlucHV0KVxuICAgICAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgICByZXR1cm4gZGlhbG9nQ29udGFpbmVyXG5cbiAgICB9XG5cbiAgICByZW1vdmVBZGRQcm9qZWN0RGlhbG9nKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdERpYWxvZycpXG4gICAgICAgIHdoaWxlIChkaWFsb2dDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlQ2hpbGQoZGlhbG9nQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBkaWFsb2dDb250YWluZXIucmVtb3ZlKClcbiAgICB9XG5cblxuICAgIHByb2plY3RzTGlzdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHNMaXN0LmlkID0gXCJwcm9qZWN0c0xpc3RcIlxuICAgICAgICB0aGlzLnByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRwcm9qZWN0SXRlbShwcm9qZWN0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RzTGlzdFxuXG4gICAgfVxuXG4gICAgYWRkcHJvamVjdEl0ZW0ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJylcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2SXRlbScpXG4gICAgICAgIHByb2plY3RJdGVtQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdFxuICAgICAgICBwcm9qZWN0SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMuaW5kZXguYWN0aXZlVGFiID0gZXYudGFyZ2V0LmlubmVyVGV4dFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBFbXB0eVRvZG9zVWkoKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudHNDb250YWluZXIoZmlsdGVyVG9kb3ModGhpcy50b2Rvc0xpc3QsdGhpcy5pbmRleC5hY3RpdmVUYWIpKSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RJdGVtQ29udGFpbmVyXG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSxncm91cCkge1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMClcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cFxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB0b2RvRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2Rvc1xuICAgIH1cblxuICAgIGZpbmQoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKGxpc3RUb2RvID0+IHtcblxuICAgICAgICAgICAgaWYgKGxpc3RUb2RvLmlkID09IHRoaXMudG9kby5pZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKGxpc3RUb2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyB0b2RvRmluZGVyIH0gZnJvbSBcIi4vdG9kb0ZpbmRlclwiO1xuZnVuY3Rpb24gdG9kb0VsZW1lbnRzQ29udGFpbmVyKHRvZG9zTGlzdCkge1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpXG4gICAgXG4gICAgdG9kb3NMaXN0LnRvZG9JdGVtcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBcbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQodG9kbyx0b2Rvc0xpc3QpKVxuXG4gICAgfVxuXG4gICAgKVxuICAgIHJldHVybiB0b2Rvc0NvbnRhaW5lclxuXG59XG5cbmZ1bmN0aW9uIEVtcHR5VG9kb3NVaSgpe1xuICAgIGNvbnN0ICB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpXG4gICAgd2hpbGUgKHRvZG9zQ29udGFpbmVyLmxhc3RDaGlsZCl7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9zQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgdG9kb3NDb250YWluZXIucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gZmlsdGVyVG9kb3MgKHRvZG9MaXN0LGFjdGl2ZSl7XG4gICAgbGV0IGZpbHRlcmVkVG9kb3MgPSB7dG9kb0l0ZW1zOltdfVxuICAgIHRvZG9MaXN0LnRvZG9JdGVtcy5mb3JFYWNoKCh0b2RvKT0+e1xuICAgICAgICBpZiAoYWN0aXZlPT1cIkFsbFwiKXtcbiAgICAgICAgICAgIGZpbHRlcmVkVG9kb3MgPSB0b2RvTGlzdFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlPT1cIlRvZGF5XCIpe31cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlPT1cIlRoaXMgV2Vla1wiKXt9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvZG8uZ3JvdXA9PWFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRUb2Rvcy50b2RvSXRlbXMucHVzaCh0b2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmlsdGVyZWRUb2Rvc1xufVxuXG5cbmZ1bmN0aW9uIHRvZG9FbGVtZW50KHRvZG9pbmZvLHRvZG9zTGlzdCkge1xuXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb0NhcmRcIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb2luZm8udGl0bGVcblxuICAgIGNvbnN0IHRvZG9JbmZvQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvSW5mb0NvbHVtbi5jbGFzc0xpc3QuYWRkKCd0b2RvSW5mb0NvbHVtbicpXG4gICAgXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbXBsZXRlZC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgY29tcGxldGVkLmNoZWNrZWQgPSB0b2RvaW5mby5jb21wbGV0ZWRcbiAgICBjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldik9PntcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gbmV3IHRvZG9GaW5kZXIodG9kb2luZm8sdG9kb3NMaXN0LnRvZG9JdGVtcylcbiAgICAgICAgdG9kb3NMaXN0LnRvZG9JdGVtc1t0b2RvSW5kZXguZmluZCgpXS5jb21wbGV0ZWQgPSBldi50YXJnZXQuY2hlY2tlZFxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvaW5mby5kdWVkYXRlXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJylcbiAgICBcbiAgICBcbiAgICB0b2RvSW5mb0NvbHVtbi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0b2RvSW5mb0NvbHVtbi5hcHBlbmRDaGlsZChkdWVEYXRlKVxuXG4gICAgdG9kby5hcHBlbmRDaGlsZChjb21wbGV0ZWQpXG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvSW5mb0NvbHVtbilcbiAgICBcbiAgICByZXR1cm4gdG9kb1xuXG59XG5cblxuZXhwb3J0IHt0b2RvRWxlbWVudCx0b2RvRWxlbWVudHNDb250YWluZXIsZmlsdGVyVG9kb3MsRW1wdHlUb2Rvc1VpfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIuanNcIlxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIuanNcIlxuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIlxuaW1wb3J0IHsgdG9kb0ZpbmRlciB9IGZyb20gXCIuL3RvZG9GaW5kZXIuanNcIlxuaW1wb3J0IHsgZmlsdGVyVG9kb3MsdG9kb0VsZW1lbnRzQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9kb3NVaUNvbnRyb2wuanNcIlxuY2xhc3MgdG9kb1Byb2plY3RzIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0cyl7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXCJkZWZhdWx0XCJdIFxuICAgIH1cblxuICAgIGFkZFByb2plY3QobmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuYW1lKSAgICBcbiAgICB9XG4gICAgZ2V0UHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgICB9XG59XG5cbmNsYXNzIHRvZG9zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG8pXG4gICAgfVxuXG4gICAgZGVsZXRlVG9kbyh0b2RvKSB7XG4gICAgICAgIGxldCB0b2RvVG9EZWxldGUgPSBuZXcgdG9kb0ZpbmRlcih0b2RvLCB0aGlzLnRvZG9JdGVtcylcbiAgICAgICAgdGhpcy50b2RvSXRlbXMuc3BsaWNlKHRvZG9Ub0RlbGV0ZS5maW5kKCksIDEpXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gY29udGVudCh0b2Rvc0xpc3QsYWN0aXZlKSB7XG4gICAgdG9kb3NMaXN0LmFkZFRvZG8obmV3IHRvZG8oJzEyMycsICcxMjMnLCAnMTIzJywgJzEyMycpKVxuICAgIHRvZG9zTGlzdC5hZGRUb2RvKG5ldyB0b2RvKCcxMjMnLCAnMTIzJywgJzEyMycsICcxMjMnKSlcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbiAgICBsZXQgdG9kb0VsZW1lbnRzID0gdG9kb0VsZW1lbnRzQ29udGFpbmVyKGZpbHRlclRvZG9zKHRvZG9zTGlzdCxhY3RpdmUuYWN0aXZlVGFiKSlcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50cylcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lclxufVxuXG5cblxuXG5cbmZ1bmN0aW9uIHNpZGViYXJDb250ZW50Q29udGFpbmVyKHRvZG9zTGlzdCxwcm9qZWN0cyxhY3RpdmUpIHtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRhaW5lclwiKVxuICAgIGxldCBzaWRlYmFyQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckNvbnRlbnQnKVxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjb250ZW50KHRvZG9zTGlzdCxhY3RpdmUpXG4gICAgY29uc3Qgc2lkZWJhcnIgPSBuZXcgc2lkZWJhcihwcm9qZWN0cyxhY3RpdmUsdG9kb3NMaXN0KVxuICAgIHNpZGViYXJDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJyLmluaXRpYWxpemVTaWRlYmFyKCkpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJDb250ZW50Q29udGFpbmVyKVxuXG59XG5cbmZ1bmN0aW9uIG1haW5QYWdlQ29udGFpbmVyICgpIHtcbiAgICBsZXQgdG9kb3NMaXN0ID0gbmV3IHRvZG9zKClcbiAgICBsZXQgcHJvamVjdHMgPSBuZXcgdG9kb1Byb2plY3RzKClcbiAgICBsZXQgYWN0aXZlID0ge1xuICAgICAgICBcImFjdGl2ZVRhYlwiIDogXCJBbGxcIlxuICAgIH1cbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFwiYWR2ZW50dXJlXCIpXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChcImthcm1hXCIpXG4gICAgaGVhZGVyKHRvZG9zTGlzdCxwcm9qZWN0cyxhY3RpdmUpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIodG9kb3NMaXN0LHByb2plY3RzLGFjdGl2ZSlcbn1cblxubWFpblBhZ2VDb250YWluZXIoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=