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
    gap:1rem
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";EAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB;;AAEJ;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,uBAAuB;IACvB,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;;AAGA;IACI,wCAAwC;;IAExC,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb;AACJ","sourcesContent":["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\nhtml,body{\n    margin: 0px;\n    height: 100%;\n    \n}\n\n*{\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n}\n.pageContainer{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    padding: 1rem;\n    background-color: #68C174;\n    display: flex;\n    align-items: center;\n}\n\n.addButtonContainer{\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n}\n.addTodoButton{\n    font-size: 1.2rem;\n    padding: .4rem;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px\n    \n}\n\n.addTodoButton:hover{\n    cursor: pointer;\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n}\n\n.logo{\n    font-size: 1.5rem;\n    color: white;\n    margin: 0px;\n    font-family: \"Roboto\";\n    font-weight: 700;\n}\n\n.sidebar{\n    max-height: 100%;\n    display: inline-block;\n    background-color: rgb(245, 245, 245);\n    padding: 1rem;\n}\n\n\n.navItem,.projectItem{\n    margin: .5rem;\n    font-size: 1.3rem;\n    font-family: \"Roboto\";\n    cursor: pointer;\n    background-color: white;\n    padding: .5rem 1rem .5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid white;\n    min-width: 250px;\n}\n.sidebarContent{\n    display: flex;\n    flex-grow: 1;\n}\n\n.content{\n    display:flex;\n    flex-grow: 1;\n    justify-content: center;\n    margin-top: 1rem;\n}\n\n.navItem:hover,.projectItem:hover{\n    border: 1px solid #68C174;\n}\n\n.navItem:hover .active,.projectItem:hover .active{\n    border: 1px solid rgb(206, 32, 32);\n}\n\n.active{\n    color: white;\n    background-color: #68C174;\n}\n\n.flx-clm{\n    display: flex;\n    flex-direction: column;\n}\n\n.todoCard{\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    padding: .5rem;\n    background-color: rgb(236, 236, 236);\n    border-radius: 5px;\n}\n\n.projectsTag{\n    margin-left: .5rem;\n    font-size: 1.2rem;\n    flex-grow: 1;\n}\n\n#projectsHeaderBtn{\n    height: 50px;\n    width: 50px;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n}\n#projectsHeaderBtn:hover{\n    background-color: rgb(247, 247, 247);\n    border-color: rgb(247, 247, 247);\n    cursor: pointer;\n}\n\n.todosContainer{\n    display: flex;\n    gap:1rem;\n    flex-direction: column;\n    margin-top: .5rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    width: 100%;\n}\n\n.title{\n    margin-bottom: .1rem;\n    margin-top: .2rem;\n}\n\n\n.divider {\n    border-top: 1px solid rgb(240, 240, 240);\n\n    width: 100%;\n}\n\n#projectsHeader {\n    margin-top: 2rem;\n    padding-right: .5rem;\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n\n\n.formItem{\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    margin: 1rem;\n    width: 80%;\n}\n\ndialog{\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n.formItem label {\n    font-size: 1.2rem;\n}\n\n\n#addTodoForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.formSelectItem{\n    width: 80%;\n}\n\n\n.formSubmitButton {\n    width: 80%;\n}\n\n#addProjectDialog{\n    display: flex;\n    gap:1rem\n}\n"],"sourceRoot":""}]);
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
    console.log(divElement);
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
        console.log(sidebarContainer);
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
        console.log(navItems);
        return sidebarContainer
    }


    createNavItem(text) {
        const navItem = document.createElement('div')
        navItem.textContent = text
        navItem.classList.add('navItem')
        navItem.addEventListener('click', (ev) => {
            let navItems = document.querySelectorAll(".navItem")
            console.log(navItems);
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
            console.log(navItems);
            console.log(this.index)
            navItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('active')
                }
            });
            ev.target.classList.add('active')
            this.index.activeTab = ev.target.innerText
            console.log(this.todosList.todoItems);
            (0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.EmptyTodosUi)()
            document.querySelector('.content').appendChild((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_1__.filterTodos)(this.todosList,this.index.activeTab)))
            

            console.log(this.index);
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
function todoElementsContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    console.log(todosList.todoItems);
    todosList.todoItems.forEach(todo => {
        console.log(2);
        todosContainer.appendChild(todoElement(todo))

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
/* harmony import */ var _todosUiControl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todosUiControl.js */ "./src/todosUiControl.js");





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





function content(todosList,active) {
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    todosList.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_3__.todo('123', '123', '123', '123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoElements = (0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_4__.todoElementsContainer)((0,_todosUiControl_js__WEBPACK_IMPORTED_MODULE_4__.filterTodos)(todosList,active.activeTab))
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
    ;(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.header)(todosList,projects)
    sidebarContentContainer(todosList,projects,active)
}

mainPageContainer()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZFQUE2RSxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxL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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlO0FBQ0U7QUFDTjtBQUN1QztBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQSwwQkFBMEIsMENBQUk7QUFDOUIsMEJBQTBCLDBDQUFJO0FBQzlCO0FBQ0E7QUFDQSx1QkFBdUIseUVBQXFCLENBQUMsK0RBQVc7QUFDeEQ7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkVG9kb0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY2xlYXJEaXYuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb3NVaUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAgaHRtbCxib2R5e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLnBhZ2VDb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkQnV0dG9uQ29udGFpbmVye1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZFRvZG9CdXR0b257XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogLjRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgXG59XG5cbi5hZGRUb2RvQnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG5cbi5sb2dve1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2lkZWJhcntcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4ubmF2SXRlbSwucHJvamVjdEl0ZW17XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuLnNpZGViYXJDb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5uYXZJdGVtOmhvdmVyLC5wcm9qZWN0SXRlbTpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjhDMTc0O1xufVxuXG4ubmF2SXRlbTpob3ZlciAuYWN0aXZlLC5wcm9qZWN0SXRlbTpob3ZlciAuYWN0aXZle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDYsIDMyLCAzMik7XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XG59XG5cbi5mbHgtY2xte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZG9DYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdHNUYWd7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuI3Byb2plY3RzSGVhZGVyQnRue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jcHJvamVjdHNIZWFkZXJCdG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG9zQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbn1cblxuXG4uZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdHNIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5mb3JtSXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogODAlO1xufVxuXG5kaWFsb2d7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybUl0ZW0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbiNhZGRUb2RvRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtU2VsZWN0SXRlbXtcbiAgICB3aWR0aDogODAlO1xufVxuXG5cbi5mb3JtU3VibWl0QnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jYWRkUHJvamVjdERpYWxvZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxcmVtXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7RUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qjs7QUFFSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksd0NBQXdDOztJQUV4QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbmh0bWwsYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuLnBhZ2VDb250YWluZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QzE3NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZEJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFkZFRvZG9CdXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgXFxufVxcblxcbi5hZGRUb2RvQnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxufVxcblxcbi5sb2dve1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcblxcbi5uYXZJdGVtLC5wcm9qZWN0SXRlbXtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbSAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG4uc2lkZWJhckNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXIsLnByb2plY3RJdGVtOmhvdmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjhDMTc0O1xcbn1cXG5cXG4ubmF2SXRlbTpob3ZlciAuYWN0aXZlLC5wcm9qZWN0SXRlbTpob3ZlciAuYWN0aXZle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA2LCAzMiwgMzIpO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OEMxNzQ7XFxufVxcblxcbi5mbHgtY2xte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0NhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0c1RhZ3tcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jcHJvamVjdHNIZWFkZXJCdG57XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jcHJvamVjdHNIZWFkZXJCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IC4xcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcXG59XFxuXFxuXFxuLmRpdmlkZXIge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzSGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZm9ybUl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5kaWFsb2d7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtSXRlbSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4jYWRkVG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1TZWxlY3RJdGVte1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5cXG4uZm9ybVN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNhZGRQcm9qZWN0RGlhbG9ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvZGlhbG9nKHRvZG9zTGlzdCwgcHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250YWluZXInKVxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykpe1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBjb250YWluZXIuaWQgPSBcInRvZG9EaWFsb2dcIlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0KSkgICBcbiAgICBcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjb250YWluZXIuc2hvd01vZGFsKClcbiAgICB9XG4gICAgZWxzZXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKS5zaG93TW9kYWwoKVxuICAgIH1cbiAgICBcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvZm9ybSh0b2Rvc0xpc3QsIHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgVG9kb1wiXG4gICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybVN1Ym1pdEJ1dHRvblwiKVxuICAgIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCJcbiAgICBmb3JtU3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiXG4gICAgYWRkVG9kb0Zvcm0uaWQgPSBcImFkZFRvZG9Gb3JtXCJcblxuICAgIGFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zTGlzdClcbiAgICAgICAgdG9kb3NMaXN0LmFkZFRvZG8obmV3IHRvZG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0XCIpLnZhbHVlLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wb3J0YW5jZVwiKS52YWx1ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpLnZhbHVlKSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuY2xvc2UoKVxuICAgIH0pXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnN0IHRleHRJbnB1dGVkID0gZm9ybUl0ZW0oJ3RleHQnLCBcInRleHRcIilcbiAgICB0ZXh0SW5wdXRlZC5pZCA9IFwidGV4dElucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKHRleHRJbnB1dGVkKVxuICAgIGNvbnN0IGRhdGVJbnB1dGVkID0gZm9ybUl0ZW0oJ2RhdGUnLCBcImRhdGVcIilcbiAgICBkYXRlSW5wdXRlZC5pZCA9IFwiZGF0ZUlucHV0ZWRcIlxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dGVkKVxuICAgIGNvbnN0IHByb2plY3RJbnB1dGVkID0gZm9ybVNlbGVjdEl0ZW0oJ3Byb2plY3RzJywgcHJvamVjdExpc3QpXG4gICAgcHJvamVjdElucHV0ZWQuaWQgPSBcInByb2plY3RJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRlZClcbiAgICBjb25zdCBpbXBvcnRhbmNlSW5wdXRlZCA9ICBmb3JtU2VsZWN0SXRlbSgnaW1wb3J0YW5jZScsIFsnbG93JywgJ21lZGl1bScsICdoaWdoJ10pXG4gICAgaW1wb3J0YW5jZUlucHV0ZWQuaWQgPSBcImltcG9ydGFuY2VJbnB1dGVkXCJcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChpbXBvcnRhbmNlSW5wdXRlZClcbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtU3VibWl0QnV0dG9uKVxuICAgIHJldHVybiBhZGRUb2RvRm9ybVxufVxuXG5cbmZ1bmN0aW9uIGZvcm1JdGVtKGxhYmVsLCB0eXBlKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm1JdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZm9ybUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUl0ZW0nKVxuICAgIGZvcm1JdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybUl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOiBcIlxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1JdGVtTGFiZWwpXG4gICAgaWYgKHR5cGUgPT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZm9ybUlucHV0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5pZCA9IGxhYmVsXG4gICAgICAgIGZvcm1JbnB1dEl0ZW0udHlwZSA9IHR5cGVcbiAgICAgICAgZm9ybUlucHV0SXRlbS5uYW1lID0gbGFiZWxcbiAgICAgICAgZm9ybUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUlucHV0SXRlbSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgICBjb25zdCBmb3JtRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICBmb3JtRGF0ZUlucHV0LnR5cGUgPSB0eXBlXG4gICAgICAgIGZvcm1EYXRlSW5wdXQuaWQgPSBsYWJlbFxuICAgICAgICBmb3JtRGF0ZUlucHV0Lm5hbWUgPSBsYWJlbFxuICAgICAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGF0ZUlucHV0KVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gZm9ybUl0ZW1Db250YWluZXJcblxufVxuXG5cbmZ1bmN0aW9uIGZvcm1TZWxlY3RJdGVtKGxhYmVsLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JdGVtJylcbiAgICBjb25zdCBmb3JtU2VsZWN0SXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGZvcm1TZWxlY3RJdGVtTGFiZWwuaHRtbEZvciA9IGxhYmVsXG4gICAgZm9ybVNlbGVjdEl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCIgOlwiXG4gICAgY29uc3QgZm9ybVNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGZvcm1TZWxlY3RJdGVtLmlkID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5uYW1lID0gbGFiZWxcbiAgICBmb3JtU2VsZWN0SXRlbS5yZXF1aXJlZCA9IHRydWVcbiAgICBmb3JtU2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9ybVNlbGVjdFwiICsgbGFiZWwpXG5cbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0cykge1xuICAgICAgICBvcHRpb25zLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnZhbHVlID0gcHJvamVjdFxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgc2VsZWN0b3JPcHRpb24udmFsdWUgPSBvcHRpb25cbiAgICAgICAgICAgIHNlbGVjdG9yT3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uXG4gICAgICAgICAgICBmb3JtU2VsZWN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3Rvck9wdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmb3JtSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU2VsZWN0SXRlbUxhYmVsKVxuICAgIGZvcm1JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TZWxlY3RJdGVtKVxuICAgIHJldHVybiBmb3JtSXRlbUNvbnRhaW5lclxufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckRpdihkaXZFbGVtZW50KXtcbiAgICBjb25zb2xlLmxvZyhkaXZFbGVtZW50KTtcbiAgICB3aGlsZShkaXZFbGVtZW50Lmxhc3RDaGlsZCl7XG4gICAgICAgIGRpdkVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2RWxlbWVudC5sYXN0Q2hpbGQpXG4gICAgfVxuICAgIGRpdkVsZW1lbnQucmVtb3ZlKClcbn0iLCJpbXBvcnQgeyBhZGRUb2RvZGlhbG9nIH0gZnJvbSBcIi4vYWRkVG9kb0RpYWxvZ1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIodG9kb3NMaXN0LHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b25Db250YWluZXInKVxuICAgIGFkZFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFRvZG9cIlxuICAgIGFkZFRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J1dHRvbicpXG4gICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRvZG9kaWFsb2codG9kb3NMaXN0LHByb2plY3RMaXN0KSlcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJylcbiAgICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJUb2RvTGlzdFwiO1xuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKVxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKVxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b25Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpXG59XG4iLCJpbXBvcnQgeyBjbGVhckRpdiB9IGZyb20gXCIuL2NsZWFyRGl2XCI7XG5pbXBvcnQgeyBmaWx0ZXJUb2Rvcyx0b2RvRWxlbWVudHNDb250YWluZXIsRW1wdHlUb2Rvc1VpIH0gZnJvbSBcIi4vdG9kb3NVaUNvbnRyb2wuanNcIlxuZXhwb3J0IGNsYXNzIHNpZGViYXIge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzLCBpbmRleCx0b2Rvc0xpc3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgICAgICB0aGlzLnRvZG9zTGlzdCA9IHRvZG9zTGlzdFxuICAgIH1cbiAgICBpbml0aWFsaXplU2lkZWJhcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgICAgIGNvbnNvbGUubG9nKHNpZGViYXJDb250YWluZXIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmlkID0gJ3Byb2plY3RzSGVhZGVyJ1xuICAgICAgICBjb25zdCBwcm9qZWN0c1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwcm9qZWN0c1RhZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uaWQgPSAncHJvamVjdHNIZWFkZXJCdG4nXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3REaWFsb2cnKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZFByb2plY3REaWFsb2coKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzTGlzdCcpXG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LnByZXBlbmQodGhpcy5hZGRQcm9qZXREaWFsb2codGhpcy5wcm9qZWN0cykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RzVGFnLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzVGFnJylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUYWcpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pXG4gICAgICAgIGNvbnN0IGFsbE5hdkl0ZW0gPSB0aGlzLmNyZWF0ZU5hdkl0ZW0oXCJBbGxcIilcbiAgICAgICAgYWxsTmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsTmF2SXRlbSlcbiAgICAgICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdkl0ZW0oXCJUb2RheVwiKSlcbiAgICAgICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdkl0ZW0oXCJUaGlzIFdlZWtcIikpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0c0xpc3QodGhpcy5wcm9qZWN0cyx0aGlzLnRvZG9zTGlzdCkpXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2SXRlbScpXG4gICAgICAgIGNvbnNvbGUubG9nKG5hdkl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHNpZGViYXJDb250YWluZXJcbiAgICB9XG5cblxuICAgIGNyZWF0ZU5hdkl0ZW0odGV4dCkge1xuICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2SXRlbS50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYXZJdGVtcyk7XG4gICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChJdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB0aGlzLmluZGV4LmFjdGl2ZVRhYiA9IGV2LnRhcmdldC5pbm5lclRleHRcbiAgICAgICAgICAgIEVtcHR5VG9kb3NVaSgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50c0NvbnRhaW5lcihmaWx0ZXJUb2Rvcyh0aGlzLnRvZG9zTGlzdCx0aGlzLmluZGV4LmFjdGl2ZVRhYikpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmF2SXRlbVxuXG5cblxuXG4gICAgfVxuXG5cblxuICAgIGFkZFByb2pldERpYWxvZygpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLmlkID0gXCJhZGRQcm9qZWN0RGlhbG9nXCJcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGNsZWFyRGl2KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0RGlhbG9nJykpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNMaXN0JykuYXBwZW5kQ2hpbGQodGhpcy5hZGRwcm9qZWN0SXRlbShuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlKSlcbiAgICAgICAgfSlcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lSW5wdXQpXG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgICAgIHJldHVybiBkaWFsb2dDb250YWluZXJcblxuICAgIH1cblxuICAgIHJlbW92ZUFkZFByb2plY3REaWFsb2coKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0RGlhbG9nJylcbiAgICAgICAgd2hpbGUgKGRpYWxvZ0NvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChkaWFsb2dDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5yZW1vdmUoKVxuICAgIH1cblxuXG4gICAgcHJvamVjdHNMaXN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzTGlzdFwiXG4gICAgICAgIHRoaXMucHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZCh0aGlzLmFkZHByb2plY3RJdGVtKHByb2plY3QpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvamVjdHNMaXN0XG5cbiAgICB9XG5cbiAgICBhZGRwcm9qZWN0SXRlbShwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKVxuICAgICAgICBwcm9qZWN0SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZJdGVtJylcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgIHByb2plY3RJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYXZJdGVtcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KVxuICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgdGhpcy5pbmRleC5hY3RpdmVUYWIgPSBldi50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9zTGlzdC50b2RvSXRlbXMpO1xuICAgICAgICAgICAgRW1wdHlUb2Rvc1VpKClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnRzQ29udGFpbmVyKGZpbHRlclRvZG9zKHRoaXMudG9kb3NMaXN0LHRoaXMuaW5kZXguYWN0aXZlVGFiKSkpXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9qZWN0SXRlbUNvbnRhaW5lclxuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlZGF0ZSwgcHJpb3JpdHksZ3JvdXApIHtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXBcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZVxuXG4gICAgfVxufSIsImZ1bmN0aW9uIHRvZG9FbGVtZW50c0NvbnRhaW5lcih0b2Rvc0xpc3QpIHtcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3NDb250YWluZXInKVxuICAgIGNvbnNvbGUubG9nKHRvZG9zTGlzdC50b2RvSXRlbXMpO1xuICAgIHRvZG9zTGlzdC50b2RvSXRlbXMuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KHRvZG8pKVxuXG4gICAgfVxuXG4gICAgKVxuICAgIHJldHVybiB0b2Rvc0NvbnRhaW5lclxuXG59XG5cbmZ1bmN0aW9uIEVtcHR5VG9kb3NVaSgpe1xuICAgIGNvbnN0ICB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvc0NvbnRhaW5lcicpXG4gICAgd2hpbGUgKHRvZG9zQ29udGFpbmVyLmxhc3RDaGlsZCl7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9zQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgdG9kb3NDb250YWluZXIucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gZmlsdGVyVG9kb3MgKHRvZG9MaXN0LGFjdGl2ZSl7XG4gICAgbGV0IGZpbHRlcmVkVG9kb3MgPSB7dG9kb0l0ZW1zOltdfVxuICAgIHRvZG9MaXN0LnRvZG9JdGVtcy5mb3JFYWNoKCh0b2RvKT0+e1xuICAgICAgICBpZiAoYWN0aXZlPT1cIkFsbFwiKXtcbiAgICAgICAgICAgIGZpbHRlcmVkVG9kb3MgPSB0b2RvTGlzdFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlPT1cIlRvZGF5XCIpe31cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlPT1cIlRoaXMgV2Vla1wiKXt9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvZG8uZ3JvdXA9PWFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRUb2Rvcy50b2RvSXRlbXMucHVzaCh0b2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmlsdGVyZWRUb2Rvc1xufVxuXG5cbmZ1bmN0aW9uIHRvZG9FbGVtZW50KHRvZG9pbmZvKSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb0NhcmRcIilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdkaXZpZGVyJylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvaW5mby50aXRsZVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgdG9kby5hcHBlbmRDaGlsZChkaXZpZGVyKVxuICAgIHJldHVybiB0b2RvXG5cbn1cblxuXG5leHBvcnQge3RvZG9FbGVtZW50LHRvZG9FbGVtZW50c0NvbnRhaW5lcixmaWx0ZXJUb2RvcyxFbXB0eVRvZG9zVWl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci5qc1wiXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiXG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyBmaWx0ZXJUb2Rvcyx0b2RvRWxlbWVudHNDb250YWluZXIgfSBmcm9tIFwiLi90b2Rvc1VpQ29udHJvbC5qc1wiXG5jbGFzcyB0b2RvUHJvamVjdHMge1xuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3RzKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtcImRlZmF1bHRcIl0gXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5hbWUpICAgIFxuICAgIH1cbiAgICBnZXRQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICAgIH1cbn1cblxuY2xhc3MgdG9kb3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kbylcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICAgICAgbGV0IHRvZG9Ub0RlbGV0ZSA9IG5ldyB0b2RvRmluZGVyKHRvZG8sIHRoaXMudG9kb0l0ZW1zKVxuICAgICAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UodG9kb1RvRGVsZXRlLmZpbmQoKSwgMSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2RvSXRlbXMpXG4gICAgfVxufVxuXG5jbGFzcyB0b2RvRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2Rvc1xuICAgIH1cblxuICAgIGZpbmQoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKGxpc3RUb2RvID0+IHtcblxuICAgICAgICAgICAgaWYgKGxpc3RUb2RvLmlkID09IHRoaXMudG9kby5pZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKGxpc3RUb2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbn1cblxuXG5cblxuXG5mdW5jdGlvbiBjb250ZW50KHRvZG9zTGlzdCxhY3RpdmUpIHtcbiAgICB0b2Rvc0xpc3QuYWRkVG9kbyhuZXcgdG9kbygnMTIzJywgJzEyMycsICcxMjMnLCAnMTIzJykpXG4gICAgdG9kb3NMaXN0LmFkZFRvZG8obmV3IHRvZG8oJzEyMycsICcxMjMnLCAnMTIzJywgJzEyMycpKVxuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuICAgIGxldCB0b2RvRWxlbWVudHMgPSB0b2RvRWxlbWVudHNDb250YWluZXIoZmlsdGVyVG9kb3ModG9kb3NMaXN0LGFjdGl2ZS5hY3RpdmVUYWIpKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnRzKVxuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyXG59XG5cblxuXG5cblxuZnVuY3Rpb24gc2lkZWJhckNvbnRlbnRDb250YWluZXIodG9kb3NMaXN0LHByb2plY3RzLGFjdGl2ZSkge1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGFpbmVyXCIpXG4gICAgbGV0IHNpZGViYXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyQ29udGVudCcpXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNvbnRlbnQodG9kb3NMaXN0LGFjdGl2ZSlcbiAgICBjb25zdCBzaWRlYmFyciA9IG5ldyBzaWRlYmFyKHByb2plY3RzLGFjdGl2ZSx0b2Rvc0xpc3QpXG4gICAgc2lkZWJhckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcnIuaW5pdGlhbGl6ZVNpZGViYXIoKSlcbiAgICBzaWRlYmFyQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnRDb250YWluZXIpXG5cbn1cblxuZnVuY3Rpb24gbWFpblBhZ2VDb250YWluZXIgKCkge1xuICAgIGxldCB0b2Rvc0xpc3QgPSBuZXcgdG9kb3MoKVxuICAgIGxldCBwcm9qZWN0cyA9IG5ldyB0b2RvUHJvamVjdHMoKVxuICAgIGxldCBhY3RpdmUgPSB7XG4gICAgICAgIFwiYWN0aXZlVGFiXCIgOiBcIkFsbFwiXG4gICAgfVxuICAgIHByb2plY3RzLmFkZFByb2plY3QoXCJhZHZlbnR1cmVcIilcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KFwia2FybWFcIilcbiAgICBoZWFkZXIodG9kb3NMaXN0LHByb2plY3RzKVxuICAgIHNpZGViYXJDb250ZW50Q29udGFpbmVyKHRvZG9zTGlzdCxwcm9qZWN0cyxhY3RpdmUpXG59XG5cbm1haW5QYWdlQ29udGFpbmVyKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9