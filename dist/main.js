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


.navItem{
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

.navItem:hover{
    border: 1px solid #68C174;
}

.navItem:hover .active{
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
    flex-direction: column;
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
    justify-content: space-evenly;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";EAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB;;AAEJ;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,uBAAuB;IACvB,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;;AAGA;IACI,wCAAwC;;IAExC,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC","sourcesContent":["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\nhtml,body{\n    margin: 0px;\n    height: 100%;\n    \n}\n\n*{\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n}\n.pageContainer{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    padding: 1rem;\n    background-color: #68C174;\n    display: flex;\n    align-items: center;\n}\n\n.addButtonContainer{\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n}\n.addTodoButton{\n    font-size: 1.2rem;\n    padding: .4rem;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px\n    \n}\n\n.addTodoButton:hover{\n    cursor: pointer;\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n}\n\n.logo{\n    font-size: 1.5rem;\n    color: white;\n    margin: 0px;\n    font-family: \"Roboto\";\n    font-weight: 700;\n}\n\n.sidebar{\n    max-height: 100%;\n    display: inline-block;\n    background-color: rgb(245, 245, 245);\n    padding: 1rem;\n}\n\n\n.navItem{\n    margin: .5rem;\n    font-size: 1.3rem;\n    font-family: \"Roboto\";\n    cursor: pointer;\n    background-color: white;\n    padding: .5rem 1rem .5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid white;\n    min-width: 250px;\n}\n.sidebarContent{\n    display: flex;\n    flex-grow: 1;\n}\n\n.content{\n    display:flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin-top: 1rem;\n}\n\n.navItem:hover{\n    border: 1px solid #68C174;\n}\n\n.navItem:hover .active{\n    border: 1px solid rgb(206, 32, 32);\n}\n\n.active{\n    color: white;\n    background-color: #68C174;\n}\n\n.flx-clm{\n    display: flex;\n    flex-direction: column;\n}\n\n.todoCard{\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    padding: .5rem;\n    background-color: rgb(236, 236, 236);\n    border-radius: 5px;\n}\n\n.projectsTag{\n    margin-left: .5rem;\n    font-size: 1.2rem;\n    flex-grow: 1;\n}\n\n#projectsHeaderBtn{\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n}\n#projectsHeaderBtn:hover{\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n    cursor: pointer;\n}\n\n.todosContainer{\n    display: flex;\n    gap:1rem;\n    flex-direction: column;\n    margin-top: .5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    width: 100%;\n}\n\n.title{\n    margin-bottom: .1rem;\n    margin-top: .2rem;\n}\n\n\n.divider {\n    border-top: 1px solid rgb(240, 240, 240);\n\n    width: 100%;\n}\n\n#projectsHeader {\n    margin-top: 2rem;\n    padding-right: .5rem;\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n\n\n.formItem{\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    margin: 1rem;\n    width: 80%;\n}\n\ndialog{\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n.formItem label {\n    font-size: 1.2rem;\n}\n\n\n#addTodoForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.formSelectItem{\n    width: 80%;\n}\n\n\n.formSubmitButton {\n    width: 80%;\n}\n\n#addProjectDialog{\n    display: flex;\n    justify-content: space-evenly;\n}\n"],"sourceRoot":""}]);
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


function addTododialog(todosList, projectList) {
    const mainContainer = document.querySelector('.pageContainer')
    if (!document.querySelector('dialog')){

    const container = document.createElement('dialog')
    container.id = "todoDialog"
    container.appendChild(addTodoform(todosList, projectList))   
    
    mainContainer.appendChild(container)
    container.showModal()
    }
    else{
    document.querySelector('dialog').showModal()
    }
    
}


function addTodoform(todosList, projectList) {
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
        console.log(todosList)
        todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_0__.todo(document.querySelector("#text").value,document.querySelector("#date").value,
        
        document.querySelector("#importance").value,document.querySelector("#projects").value))
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
    const importanceInputed =  formSelectItem('importance', ['low', 'medium', 'high'])
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

    console.log(options);
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



function header(todosList,projectList) {
    const mainContainer = document.querySelector('.pageContainer');
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('p');
    const addTodoButton = document.createElement('button')
    const addButtonContainer = document.createElement('div')
    addButtonContainer.classList.add('addButtonContainer')
    addTodoButton.textContent = "+ Add Todo"
    addTodoButton.classList.add('addTodoButton')
    addTodoButton.addEventListener('click', () => (0,_addTodoDialog__WEBPACK_IMPORTED_MODULE_0__.addTododialog)(todosList,projectList))
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
function sidebar () {
    const sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebar')
    console.log(sidebarContainer);
    const projectsHeader = document.createElement('div') 
    projectsHeader.id = 'projectsHeader'
    const projectsTag = document.createElement('p')
    projectsTag.textContent = "Projects"
    const projectsHeaderBtn = document.createElement('button')
    projectsHeaderBtn.textContent = "+ New"
    projectsHeaderBtn.id = 'projectsHeaderBtn'
    projectsHeaderBtn.addEventListener('click',()=>{
        if (document.querySelector('#addProjectDialog')){
            removeAddProjectDialog()
        }
        else{
        sidebarContainer.appendChild(addProjetDialog()
        
        )
        }
    })
    projectsTag.classList.add('projectsTag')
    projectsHeader.appendChild(projectsTag)
    projectsHeader.appendChild(projectsHeaderBtn)
    sidebarContainer.appendChild(createNavItem("All"))
    sidebarContainer.appendChild(createNavItem("Today"))
    sidebarContainer.appendChild(createNavItem("This Week"))
    sidebarContainer.appendChild(projectsHeader)
    
    return sidebarContainer
}

function createNavItem (text) {
    const navItem = document.createElement('div')
    navItem.textContent = text
    navItem.classList.add('navItem')
    navItem.addEventListener('click',(ev) => {
        const navItems = document.querySelectorAll(".navItem")
        navItems.forEach(Item => {
            if (Item.classList.contains('active')){
                Item.classList.remove('active')
            }
        });
        ev.target.classList.add('active')
    })
    return navItem
    



}

function addProjetDialog () {
    const dialogContainer  = document.createElement('div')
    dialogContainer.id = "addProjectDialog"
    const newProjectInput = document.createElement('input')
    const addButton = document.createElement('button')
    addButton.textContent = "Add"
    dialogContainer.appendChild(newProjectInput)
    dialogContainer.appendChild(addButton)
    return dialogContainer

}

function removeAddProjectDialog(){
    const dialogContainer  = document.querySelector('#addProjectDialog')
    while (dialogContainer.lastChild){
        dialogContainer.removeChild(dialogContainer.lastChild)
    }
    dialogContainer.remove()
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





class todoProjects {

    constructor (projects){
        this.projects = ["none"] 
    }

    addProject(name) {
    this.projects.push(name)    
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
        let todoToDelete = new todoFinder(todo, this.todoItems)
        this.todoItems.splice(todoToDelete.find(), 1)
        console.log(this.todoItems)
    }
}

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



function todosContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    todosList.todoItems.forEach(todo => {
        todosContainer.appendChild(todoElement(todo))

    }

    )
    return todosContainer

}

function content(todosList) {
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoss = todosContainer(todosList)
    contentContainer.appendChild(todoss)
    return contentContainer
}




function todoElement(todoinfo) {
    const todo = document.createElement('div')
    todo.classList.add("todoCard")
    const title = document.createElement('p')
    const divider = document.createElement('hr')
    divider.classList.add('divider')
    title.classList.add('title')
    title.textContent = todoinfo.title
    todo.appendChild(title)
    todo.appendChild(divider)
    return todo

}

function sidebarContentContainer(todosList) {
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const sidebarr = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.sidebar)()
    const contentContainer = content(todosList)
    sidebarContentContainer.appendChild(sidebarr)
    sidebarContentContainer.appendChild(contentContainer)
    mainContainer.appendChild(sidebarContentContainer)

}

function mainPageContainer () {
    let todosList = new todos()
    let projects = new todoProjects()
    projects.addProject("adventure")
    ;(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.header)(todosList,projects)
    sidebarContentContainer(todosList,projects)
}

mainPageContainer()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZFQUE2RSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIZ0Q7OztBQUd6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkRBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0RU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7QUFDRTtBQUNOOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQiwwQ0FBSTtBQUM5QiwwQkFBMEIsMENBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFNO0FBQ1Y7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRUb2RvRGlhbG9nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAgaHRtbCxib2R5e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLnBhZ2VDb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkQnV0dG9uQ29udGFpbmVye1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZFRvZG9CdXR0b257XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogLjRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgXG59XG5cbi5hZGRUb2RvQnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbi5sb2dve1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2lkZWJhcntcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4ubmF2SXRlbXtcbiAgICBtYXJnaW46IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtIC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG4uc2lkZWJhckNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLm5hdkl0ZW06aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY4QzE3NDtcbn1cblxuLm5hdkl0ZW06aG92ZXIgLmFjdGl2ZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA2LCAzMiwgMzIpO1xufVxuXG4uYWN0aXZle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMTc0O1xufVxuXG4uZmx4LWNsbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RvQ2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3RzVGFne1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbiNwcm9qZWN0c0hlYWRlckJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3Byb2plY3RzSGVhZGVyQnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2Rvc0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG59XG5cblxuLmRpdmlkZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XG5cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3Byb2plY3RzSGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZm9ybUl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuZGlhbG9ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1JdGVtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuXG4jYWRkVG9kb0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybVNlbGVjdEl0ZW17XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuXG4uZm9ybVN1Ym1pdEJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI2FkZFByb2plY3REaWFsb2d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtFQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCOztBQUVKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSx3Q0FBd0M7O0lBRXhDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxufVxcbi5wYWdlQ29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRCdXR0b25Db250YWluZXJ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGRUb2RvQnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XFxuICAgIFxcbn1cXG5cXG4uYWRkVG9kb0J1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5cXG4ubmF2SXRlbXtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4uc2lkZWJhckNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OEMxNzQ7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyIC5hY3RpdmV7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDYsIDMyLCAzMik7XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QzE3NDtcXG59XFxuXFxuLmZseC1jbG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvQ2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzVGFne1xcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNwcm9qZWN0c0hlYWRlckJ0bntcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNwcm9qZWN0c0hlYWRlckJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3NDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50aXRsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjFyZW07XFxuICAgIG1hcmdpbi10b3A6IC4ycmVtO1xcbn1cXG5cXG5cXG4uZGl2aWRlciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHNIZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5mb3JtSXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbmRpYWxvZ3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm1JdGVtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcbiNhZGRUb2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVNlbGVjdEl0ZW17XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcblxcbi5mb3JtU3VibWl0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuI2FkZFByb2plY3REaWFsb2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvZGlhbG9nKHRvZG9zTGlzdCwgcHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250YWluZXInKVxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykpe1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBjb250YWluZXIuaWQgPSBcInRvZG9EaWFsb2dcIlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0KSkgICBcbiAgICBcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjb250YWluZXIuc2hvd01vZGFsKClcbiAgICB9XG4gICAgZWxzZXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKS5zaG93TW9kYWwoKVxuICAgIH1cbiAgICBcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgVG9kb1wiXG4gICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybVN1Ym1pdEJ1dHRvblwiKVxuICAgIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCJcbiAgICBmb3JtU3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiXG4gICAgYWRkVG9kb0Zvcm0uaWQgPSBcImFkZFRvZG9Gb3JtXCJcblxuICAgIGFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zTGlzdClcbiAgICAgICAgdG9kb3NMaXN0LmFkZFRvZG8obmV3IHRvZG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0XCIpLnZhbHVlLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wb3J0YW5jZVwiKS52YWx1ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpLnZhbHVlKSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuY2xvc2UoKVxuICAgIH0pXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnN0IHRleHRJbnB1dGVkID0gZm9ybUl0ZW0oJ3RleHQnLCBcInRleHRcIilcbiAgICB0ZXh0SW5wdXRlZC5pZCA9IFwidGV4dElucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRleHRJbnB1dGVkKVxuICAgIGNvbnN0IGRhdGVJbnB1dGVkID0gZm9ybUl0ZW0oJ2RhdGUnLCBcImRhdGVcIilcbiAgICBkYXRlSW5wdXRlZC5pZCA9IFwiZGF0ZUlucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dGVkKVxuICAgIGNvbnN0IHByb2plY3RJbnB1dGVkID0gZm9ybVNlbGVjdEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdExpc3QpXG4gICAgcHJvamVjdElucHV0ZWQuaWQgPSBcInByb2plY3RJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRlZClcbiAgICBjb25zdCBpbXBvcnRhbmNlSW5wdXRlZCA9ICBmb3JtU2VsZWN0SXRlbSgnaW1wb3J0YW5jZScsIFsnbG93JywgJ21lZGl1bScsICdoaWdoJ10pXG4gICAgaW1wb3J0YW5jZUlucHV0ZWQuaWQgPSBcImltcG9ydGFuY2VJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbmNlSW5wdXRlZClcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtU3VibWl0QnV0dG9uKVxuICAgIHJldHVybiBhZGRUb2RvRm9ybVxufVxuXG5cbmZ1bmN0aW9uIGZvcm1JdGVtKGxhYmVsLCB0eXBlKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm1JdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZm9ybUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUl0ZW0nKVxuICAgIGZvcm1JdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybUl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOiBcIlxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1JdGVtTGFiZWwpXG4gICAgaWYgKHR5cGUgPT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZm9ybUlucHV0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5pZCA9IGxhYmVsXG4gICAgICAgIGZvcm1JbnB1dEl0ZW0udHlwZSA9IHR5cGVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5uYW1lID0gbGFiZWxcbiAgICAgICAgZm9ybUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUlucHV0SXRlbSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgICBjb25zdCBmb3JtRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnR5cGUgPSB0eXBlXG4gICAgICAgIGZvcm1EYXRlSW5wdXQuaWQgPSBsYWJlbFxuICAgICAgICBmb3JtRGF0ZUlucHV0Lm5hbWUgPSBsYWJlbFxuICAgICAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGF0ZUlucHV0KVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gZm9ybUl0ZW1Db250YWluZXJcblxufVxuXG5cbmZ1bmN0aW9uIGZvcm1TZWxlY3RJdGVtKGxhYmVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JdGVtJylcbiAgICBjb25zdCBmb3JtU2VsZWN0SXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGZvcm1TZWxlY3RJdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybVNlbGVjdEl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOlwiXG4gICAgY29uc3QgZm9ybVNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGZvcm1TZWxlY3RJdGVtLmlkID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5uYW1lID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICBmb3JtU2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9ybVNlbGVjdFwiICsgbGFiZWwpXG5cbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0cykge1xuICAgICAgICBvcHRpb25zLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnZhbHVlID0gcHJvamVjdFxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udmFsdWUgPSBvcHRpb25cbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uXG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU2VsZWN0SXRlbUxhYmVsKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TZWxlY3RJdGVtKVxuICAgIHJldHVybiBmb3JtSXRlbUNvbnRhaW5lclxufVxuXG5cbiIsImltcG9ydCB7IGFkZFRvZG9kaWFsb2cgfSBmcm9tIFwiLi9hZGRUb2RvRGlhbG9nXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcih0b2Rvc0xpc3QscHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGFkZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbkNvbnRhaW5lcicpXG4gICAgYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVG9kb1wiXG4gICAgYWRkVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUb2RvQnV0dG9uJylcbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkVG9kb2RpYWxvZyh0b2Rvc0xpc3QscHJvamVjdExpc3QpKVxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICAgIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcIlRvZG9MaXN0XCI7XG4gICAgYWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcilcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaWRlYmFyICgpIHtcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuICAgIGNvbnNvbGUubG9nKHNpZGViYXJDb250YWluZXIpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXG4gICAgcHJvamVjdHNIZWFkZXIuaWQgPSAncHJvamVjdHNIZWFkZXInXG4gICAgY29uc3QgcHJvamVjdHNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcm9qZWN0c1RhZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcm9qZWN0c0hlYWRlckJ0bi50ZXh0Q29udGVudCA9IFwiKyBOZXdcIlxuICAgIHByb2plY3RzSGVhZGVyQnRuLmlkID0gJ3Byb2plY3RzSGVhZGVyQnRuJ1xuICAgIHByb2plY3RzSGVhZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3REaWFsb2cnKSl7XG4gICAgICAgICAgICByZW1vdmVBZGRQcm9qZWN0RGlhbG9nKClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2pldERpYWxvZygpXG4gICAgICAgIFxuICAgICAgICApXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHByb2plY3RzVGFnLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzVGFnJylcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c1RhZylcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlckJ0bilcbiAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oXCJBbGxcIikpXG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKFwiVG9kYXlcIikpXG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKFwiVGhpcyBXZWVrXCIpKVxuICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgXG4gICAgcmV0dXJuIHNpZGViYXJDb250YWluZXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbSAodGV4dCkge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdkl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIilcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChJdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChJdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcmV0dXJuIG5hdkl0ZW1cbiAgICBcblxuXG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamV0RGlhbG9nICgpIHtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaWFsb2dDb250YWluZXIuaWQgPSBcImFkZFByb2plY3REaWFsb2dcIlxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCJcbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KVxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lclxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFkZFByb2plY3REaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3REaWFsb2cnKVxuICAgIHdoaWxlIChkaWFsb2dDb250YWluZXIubGFzdENoaWxkKXtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpYWxvZ0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgfVxuICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKVxufSIsImV4cG9ydCBjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlZGF0ZSwgcHJpb3JpdHksZ3JvdXApIHtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXBcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZVxuXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIuanNcIlxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIuanNcIlxuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIlxuXG5jbGFzcyB0b2RvUHJvamVjdHMge1xuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3RzKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtcIm5vbmVcIl0gXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5hbWUpICAgIFxuICAgIH1cbn1cblxuY2xhc3MgdG9kb3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kbylcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICAgICAgbGV0IHRvZG9Ub0RlbGV0ZSA9IG5ldyB0b2RvRmluZGVyKHRvZG8sIHRoaXMudG9kb0l0ZW1zKVxuICAgICAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UodG9kb1RvRGVsZXRlLmZpbmQoKSwgMSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2RvSXRlbXMpXG4gICAgfVxufVxuXG5jbGFzcyB0b2RvRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2Rvc1xuICAgIH1cblxuICAgIGZpbmQoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKGxpc3RUb2RvID0+IHtcblxuICAgICAgICAgICAgaWYgKGxpc3RUb2RvLmlkID09IHRoaXMudG9kby5pZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKGxpc3RUb2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHRvZG9zQ29udGFpbmVyKHRvZG9zTGlzdCkge1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpXG4gICAgdG9kb3NMaXN0LnRvZG9JdGVtcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCh0b2RvKSlcblxuICAgIH1cblxuICAgIClcbiAgICByZXR1cm4gdG9kb3NDb250YWluZXJcblxufVxuXG5mdW5jdGlvbiBjb250ZW50KHRvZG9zTGlzdCkge1xuICAgIHRvZG9zTGlzdC5hZGRUb2RvKG5ldyB0b2RvKCcxMjMnLCAnMTIzJywgJzEyMycsICcxMjMnKSlcbiAgICB0b2Rvc0xpc3QuYWRkVG9kbyhuZXcgdG9kbygnMTIzJywgJzEyMycsICcxMjMnLCAnMTIzJykpXG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXG4gICAgbGV0IHRvZG9zcyA9IHRvZG9zQ29udGFpbmVyKHRvZG9zTGlzdClcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zcylcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lclxufVxuXG5cblxuXG5mdW5jdGlvbiB0b2RvRWxlbWVudCh0b2RvaW5mbykge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9DYXJkXCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZCgnZGl2aWRlcicpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb2luZm8udGl0bGVcbiAgICB0b2RvLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGl2aWRlcilcbiAgICByZXR1cm4gdG9kb1xuXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJDb250ZW50Q29udGFpbmVyKHRvZG9zTGlzdCkge1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGFpbmVyXCIpXG4gICAgbGV0IHNpZGViYXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyQ29udGVudCcpXG4gICAgY29uc3Qgc2lkZWJhcnIgPSBzaWRlYmFyKClcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gY29udGVudCh0b2Rvc0xpc3QpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcnIpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJDb250ZW50Q29udGFpbmVyKVxuXG59XG5cbmZ1bmN0aW9uIG1haW5QYWdlQ29udGFpbmVyICgpIHtcbiAgICBsZXQgdG9kb3NMaXN0ID0gbmV3IHRvZG9zKClcbiAgICBsZXQgcHJvamVjdHMgPSBuZXcgdG9kb1Byb2plY3RzKClcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFwiYWR2ZW50dXJlXCIpXG4gICAgaGVhZGVyKHRvZG9zTGlzdCxwcm9qZWN0cylcbiAgICBzaWRlYmFyQ29udGVudENvbnRhaW5lcih0b2Rvc0xpc3QscHJvamVjdHMpXG59XG5cbm1haW5QYWdlQ29udGFpbmVyKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9