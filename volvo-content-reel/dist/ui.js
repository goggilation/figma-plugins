/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***\n    The new CSS reset - version 1.5.1 (last updated 1.3.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n    cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n    list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n    max-width: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n    border-collapse: collapse;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n    white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n    -webkit-appearance: revert;\n    appearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n    color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n    display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly. */\n:where([contenteditable]) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n    -webkit-user-drag: element;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.css"],"names":[],"mappings":"AAAA;;;GAGG;;AAEH;;;EAGE;CACD;IACG,UAAU;IACV,eAAe;AACnB;;AAEA,+BAA+B;AAC/B;;;IAGI,sBAAsB;AAC1B;;AAEA,+CAA+C;AAC/C;IACI,cAAc;AAClB;;AAEA,yCAAyC;AACzC;IACI,gBAAgB;AACpB;;AAEA,wDAAwD;AACxD;IACI,eAAe;AACnB;;AAEA,4CAA4C;AAC5C;IACI,yBAAyB;AAC7B;;AAEA,sEAAsE;AACtE;IACI,mBAAmB;AACvB;;AAEA,kDAAkD;AAClD;IACI,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD;IACI,YAAY;AAChB;;AAEA;2DAC2D;AAC3D;IACI,aAAa;AACjB;;AAEA;iEACiE;AACjE;IACI,4BAA4B;IAC5B,+BAA+B;IAC/B,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA,yEAAyE;AACzE;IACI,0BAA0B;AAC9B","sourcesContent":["/***\n    The new CSS reset - version 1.5.1 (last updated 1.3.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n    cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n    list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n    max-width: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n    border-collapse: collapse;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n    white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n    -webkit-appearance: revert;\n    appearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n    color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n    display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly. */\n:where([contenteditable]) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n    -webkit-user-drag: element;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/ui.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/ui.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main{\n  height: 100%;\n  padding: 16px;\n  overflow: auto;\n}\n#content{\n  overflow: auto;\n}\n#corner{\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n  margin: 20px;\n}\nbutton {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n\n/*LIST ITEMS*/\n#item-list{\n  list-style: none;\n}\n.list-item{\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  margin-bottom: 24px;\n}\n.list-item:hover{\n  background-color: rgba(0,0,0,.25);\n}\n.list-item .header{\n  font-size: medium;\n}\n.list-item .header, .list-item .attachment{\n  cursor: pointer;\n}\n\n.list-item .attachment{\n  width: 200px;\n}\n.list-item .attachement img{\n  width: 100%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/style/ui.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;AACA;EACE,8CAA8C;AAChD;AACA;EACE,mCAAmC;AACrC;;;AAGA,aAAa;AACb;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["*{\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 0;\n  box-sizing: border-box;\n}\n#main{\n  height: 100%;\n  padding: 16px;\n  overflow: auto;\n}\n#content{\n  overflow: auto;\n}\n#corner{\n  z-index: 99999;\n  position: fixed;\n  right: -1px;\n  bottom: -2px;\n  cursor: nwse-resize;\n}\nbody {\n  font: 12px sans-serif;\n  text-align: center;\n  margin: 20px;\n}\nbutton {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #0d99ff;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\nbutton:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #0d99ff;\n}\n\n\n/*LIST ITEMS*/\n#item-list{\n  list-style: none;\n}\n.list-item{\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  margin-bottom: 24px;\n}\n.list-item:hover{\n  background-color: rgba(0,0,0,.25);\n}\n.list-item .header{\n  font-size: medium;\n}\n.list-item .header, .list-item .attachment{\n  cursor: pointer;\n}\n\n.list-item .attachment{\n  width: 200px;\n}\n.list-item .attachement img{\n  width: 100%;\n  height: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/reset.css":
/*!*****************************!*\
  !*** ./src/style/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/ui.css":
/*!**************************!*\
  !*** ./src/style/ui.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/contentreel.config.js":
/*!***********************************!*\
  !*** ./src/contentreel.config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let configs = { AIRTABLE_API_KEY: "keyXNIVVnVuR9RCci" };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configs);


/***/ }),

/***/ "./src/utils/resizer.js":
/*!******************************!*\
  !*** ./src/utils/resizer.js ***!
  \******************************/
/***/ (() => {

//RESIZER FUNCTIONS
const corner = document.getElementById("corner");
function resizeWindow(e) {
  const size = {
    w: Math.max(50, Math.floor(e.clientX + 5)),
    h: Math.max(50, Math.floor(e.clientY + 5)),
  };
  parent.postMessage({ pluginMessage: { type: "resize", size: size } }, "*");
}
corner.onpointerdown = (e) => {
  corner.onpointermove = resizeWindow;
  corner.setPointerCapture(e.pointerId);
};
corner.onpointerup = (e) => {
  corner.onpointermove = null;
  corner.releasePointerCapture(e.pointerId);
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/ui.css */ "./src/style/ui.css");
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/reset.css */ "./src/style/reset.css");
/* harmony import */ var _utils_resizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/resizer */ "./src/utils/resizer.js");
/* harmony import */ var _utils_resizer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_resizer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentreel_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentreel.config.js */ "./src/contentreel.config.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let AirtableArray = [];
let newRequestNumber = 3;
const loadMoreButton = document.getElementById("load-more");
const populateButton = document.getElementById("list");
const itemListDiv = document.getElementById("item-list");
// On network request from the plugin, fetch information from Airtable and send data to AirtableArray.
// TODO: Add offset instead of iteratiing on requestmax
window.onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.data.pluginMessage.type === "networkRequest" && event.data.pluginMessage.style === 'search') {
        fetch(`https://api.airtable.com/v0/appLyOHUcdPl6D1mB/portfolioImgs?maxRecords=${newRequestNumber}&view=Grid%20view`, {
            headers: {
                Authorization: `Bearer ${_contentreel_config_js__WEBPACK_IMPORTED_MODULE_3__["default"].AIRTABLE_API_}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
            // Clear array since I'm just looping through maxRecords
            AirtableArray = [];
            const responseArray = data.records;
            responseArray.map((entry) => {
                //Loop through entries and add the 'fields' of each entry to the array 
                console.log(entry);
                AirtableArray.push(entry.fields);
                console.log(AirtableArray);
            });
        })
            .catch((error) => {
            console.log(error);
        });
        PopulateView();
        //window.parent.postMessage({pluginMessage: base}, '*')
    }
});
// When clicking "List Items" it wil render all items in UI.
// This should fetch items from remote and render accordingly. Then send messages to code.ts with type and src (text, media)
// so code can configure UI accordingly
loadMoreButton.onclick = () => {
    newRequestNumber += 3;
    window.parent.postMessage({ pluginMessage: "load" }, "*");
};
// Button that populates view
const PopulateView = () => {
    if (itemListDiv.innerHTML != null) {
        itemListDiv.innerHTML = "";
    }
    AirtableArray.map((m) => {
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        const descriptions = document.createElement("div");
        const header = document.createElement("p");
        header.className = "header";
        const name = document.createTextNode(m.Name);
        header.appendChild(name);
        const groupName = document.createElement("p");
        groupName.className = "group-name";
        const group = document.createTextNode(m.Group);
        groupName.appendChild(group);
        descriptions.appendChild(header);
        descriptions.appendChild(groupName);
        const attachment = new Image();
        attachment.src = m.imgLink;
        attachment.className = "attachment";
        listItem.appendChild(descriptions);
        listItem.appendChild(attachment);
        itemListDiv.appendChild(listItem);
        attachment.onclick = () => {
            const img = new Image();
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                fetch(m.imgLink)
                    .then((response) => response.blob())
                    .then((blob) => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(new Uint8Array(reader.result));
                    reader.readAsArrayBuffer(blob);
                }))
                    .then((imageBytes) => {
                    parent.postMessage({
                        pluginMessage: {
                            type: "attachment",
                            imageBytes,
                        },
                    }, "*");
                });
            };
            img.src = m.imgLink;
            //console.log(`should add ${m.Name} to UI :)`);
        };
        header.onclick = () => {
            parent.postMessage({ pluginMessage: { type: "text", data: m.Name } }, "*");
        };
    });
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUIsOEJBQThCO0FBQ2hGO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9zcmMvc3R5bGUvdWkuY3NzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcz80NDVlIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9zdHlsZS91aS5jc3M/MDVkZiIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9jb250ZW50cmVlbC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL3V0aWxzL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy91aS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKipcXG4gICAgVGhlIG5ldyBDU1MgcmVzZXQgLSB2ZXJzaW9uIDEuNS4xIChsYXN0IHVwZGF0ZWQgMS4zLjIwMjIpXFxuICAgIEdpdEh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vZWxhZDI0MTIvdGhlLW5ldy1jc3MtcmVzZXRcXG4qKiovXFxuXFxuLypcXG4gICAgUmVtb3ZlIGFsbCB0aGUgc3R5bGVzIG9mIHRoZSBcXFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XFxcIiwgZXhjZXB0IGZvciB0aGUgJ2Rpc3BsYXknIHByb3BlcnR5XFxuICAgIC0gVGhlIFxcXCJzeW1ib2wgKlxcXCIgcGFydCBpcyB0byBzb2x2ZSBGaXJlZm94IFNWRyBzcHJpdGUgYnVnXFxuICovXFxuICo6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICosIHN5bWJvbCAqKSkge1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBkaXNwbGF5OiByZXZlcnQ7XFxufVxcblxcbi8qIFByZWZlcnJlZCBib3gtc2l6aW5nIHZhbHVlICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3MgKi9cXG5hLCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHJldmVydDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpICovXFxub2wsIHVsLCBtZW51IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXMgKi9cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIHJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnQgKi9cXG5tZXRlciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbiAgICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxufVxcblxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLyogZml4IHRoZSBmZWF0dXJlIG9mICdoaWRkZW4nIGF0dHJpYnV0ZS5cXG4gICBkaXNwbGF5OnJldmVydDsgcmV2ZXJ0IHRvIGVsZW1lbnQgaW5zdGVhZCBvZiBhdHRyaWJ1dGUgKi9cXG46d2hlcmUoW2hpZGRlbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogcmV2ZXJ0IGZvciBidWcgaW4gQ2hyb21pdW0gYnJvd3NlcnNcXG4gICAtIGZpeCBmb3IgdGhlIGNvbnRlbnQgZWRpdGFibGUgYXR0cmlidXRlIHdpbGwgd29yayBwcm9wZXJseS4gKi9cXG46d2hlcmUoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgLW1vei11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG59XFxuXFxuLyogYXBwbHkgYmFjayB0aGUgZHJhZ2dhYmxlIGZlYXR1cmUgLSBleGlzdCBvbmx5IGluIENocm9taXVtIGFuZCBTYWZhcmkgKi9cXG46d2hlcmUoW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdKSB7XFxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7R0FHRzs7QUFFSDs7O0VBR0U7Q0FDRDtJQUNHLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLCtCQUErQjtBQUMvQjs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBLCtDQUErQztBQUMvQztJQUNJLGNBQWM7QUFDbEI7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7MkRBQzJEO0FBQzNEO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtpRUFDaUU7QUFDakU7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBRUEseUVBQXlFO0FBQ3pFO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKipcXG4gICAgVGhlIG5ldyBDU1MgcmVzZXQgLSB2ZXJzaW9uIDEuNS4xIChsYXN0IHVwZGF0ZWQgMS4zLjIwMjIpXFxuICAgIEdpdEh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vZWxhZDI0MTIvdGhlLW5ldy1jc3MtcmVzZXRcXG4qKiovXFxuXFxuLypcXG4gICAgUmVtb3ZlIGFsbCB0aGUgc3R5bGVzIG9mIHRoZSBcXFwiVXNlci1BZ2VudC1TdHlsZXNoZWV0XFxcIiwgZXhjZXB0IGZvciB0aGUgJ2Rpc3BsYXknIHByb3BlcnR5XFxuICAgIC0gVGhlIFxcXCJzeW1ib2wgKlxcXCIgcGFydCBpcyB0byBzb2x2ZSBGaXJlZm94IFNWRyBzcHJpdGUgYnVnXFxuICovXFxuICo6d2hlcmUoOm5vdChpZnJhbWUsIGNhbnZhcywgaW1nLCBzdmcsIHZpZGVvKTpub3Qoc3ZnICosIHN5bWJvbCAqKSkge1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBkaXNwbGF5OiByZXZlcnQ7XFxufVxcblxcbi8qIFByZWZlcnJlZCBib3gtc2l6aW5nIHZhbHVlICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3MgKi9cXG5hLCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHJldmVydDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpICovXFxub2wsIHVsLCBtZW51IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXMgKi9cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIHJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxudGV4dGFyZWEge1xcbiAgICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcbn1cXG5cXG4vKiBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnQgKi9cXG5tZXRlciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogcmV2ZXJ0O1xcbiAgICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxufVxcblxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLyogZml4IHRoZSBmZWF0dXJlIG9mICdoaWRkZW4nIGF0dHJpYnV0ZS5cXG4gICBkaXNwbGF5OnJldmVydDsgcmV2ZXJ0IHRvIGVsZW1lbnQgaW5zdGVhZCBvZiBhdHRyaWJ1dGUgKi9cXG46d2hlcmUoW2hpZGRlbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogcmV2ZXJ0IGZvciBidWcgaW4gQ2hyb21pdW0gYnJvd3NlcnNcXG4gICAtIGZpeCBmb3IgdGhlIGNvbnRlbnQgZWRpdGFibGUgYXR0cmlidXRlIHdpbGwgd29yayBwcm9wZXJseS4gKi9cXG46d2hlcmUoW2NvbnRlbnRlZGl0YWJsZV0pIHtcXG4gICAgLW1vei11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG59XFxuXFxuLyogYXBwbHkgYmFjayB0aGUgZHJhZ2dhYmxlIGZlYXR1cmUgLSBleGlzdCBvbmx5IGluIENocm9taXVtIGFuZCBTYWZhcmkgKi9cXG46d2hlcmUoW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdKSB7XFxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbntcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NvbnRlbnR7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2Nvcm5lcntcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBib3R0b206IC0ycHg7XFxuICBjdXJzb3I6IG53c2UtcmVzaXplO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2NyZWF0ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogIzBkOTlmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG4jY3JlYXRlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG5cXG5cXG4vKkxJU1QgSVRFTVMqL1xcbiNpdGVtLWxpc3R7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubGlzdC1pdGVtOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xcbn1cXG4ubGlzdC1pdGVtIC5oZWFkZXJ7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuLmxpc3QtaXRlbSAuaGVhZGVyLCAubGlzdC1pdGVtIC5hdHRhY2htZW50e1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50e1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWd7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3VpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7OztBQUdBLGFBQWE7QUFDYjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbWFpbntcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NvbnRlbnR7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2Nvcm5lcntcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBib3R0b206IC0ycHg7XFxuICBjdXJzb3I6IG53c2UtcmVzaXplO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2NyZWF0ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogIzBkOTlmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG4jY3JlYXRlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMGQ5OWZmO1xcbn1cXG5cXG5cXG4vKkxJU1QgSVRFTVMqL1xcbiNpdGVtLWxpc3R7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubGlzdC1pdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubGlzdC1pdGVtOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xcbn1cXG4ubGlzdC1pdGVtIC5oZWFkZXJ7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuLmxpc3QtaXRlbSAuaGVhZGVyLCAubGlzdC1pdGVtIC5hdHRhY2htZW50e1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5hdHRhY2htZW50e1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4ubGlzdC1pdGVtIC5hdHRhY2hlbWVudCBpbWd7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29uZmlncyA9IHsgQUlSVEFCTEVfQVBJX0tFWTogXCJrZXlYTklWVm5WdVI5UkNjaVwiIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3M7XG4iLCIvL1JFU0laRVIgRlVOQ1RJT05TXG5jb25zdCBjb3JuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcm5lclwiKTtcbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyhlKSB7XG4gIGNvbnN0IHNpemUgPSB7XG4gICAgdzogTWF0aC5tYXgoNTAsIE1hdGguZmxvb3IoZS5jbGllbnRYICsgNSkpLFxuICAgIGg6IE1hdGgubWF4KDUwLCBNYXRoLmZsb29yKGUuY2xpZW50WSArIDUpKSxcbiAgfTtcbiAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiBcInJlc2l6ZVwiLCBzaXplOiBzaXplIH0gfSwgXCIqXCIpO1xufVxuY29ybmVyLm9ucG9pbnRlcmRvd24gPSAoZSkgPT4ge1xuICBjb3JuZXIub25wb2ludGVybW92ZSA9IHJlc2l6ZVdpbmRvdztcbiAgY29ybmVyLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbn07XG5jb3JuZXIub25wb2ludGVydXAgPSAoZSkgPT4ge1xuICBjb3JuZXIub25wb2ludGVybW92ZSA9IG51bGw7XG4gIGNvcm5lci5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgXCIuL3N0eWxlL3VpLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vdXRpbHMvcmVzaXplclwiO1xuaW1wb3J0IGNvbmZpZ3MgZnJvbSAnLi9jb250ZW50cmVlbC5jb25maWcuanMnO1xubGV0IEFpcnRhYmxlQXJyYXkgPSBbXTtcbmxldCBuZXdSZXF1ZXN0TnVtYmVyID0gMztcbmNvbnN0IGxvYWRNb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkLW1vcmVcIik7XG5jb25zdCBwb3B1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcbmNvbnN0IGl0ZW1MaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWxpc3RcIik7XG4vLyBPbiBuZXR3b3JrIHJlcXVlc3QgZnJvbSB0aGUgcGx1Z2luLCBmZXRjaCBpbmZvcm1hdGlvbiBmcm9tIEFpcnRhYmxlIGFuZCBzZW5kIGRhdGEgdG8gQWlydGFibGVBcnJheS5cbi8vIFRPRE86IEFkZCBvZmZzZXQgaW5zdGVhZCBvZiBpdGVyYXRpaW5nIG9uIHJlcXVlc3RtYXhcbndpbmRvdy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UudHlwZSA9PT0gXCJuZXR3b3JrUmVxdWVzdFwiICYmIGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS5zdHlsZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbS92MC9hcHBMeU9IVWNkUGw2RDFtQi9wb3J0Zm9saW9JbWdzP21heFJlY29yZHM9JHtuZXdSZXF1ZXN0TnVtYmVyfSZ2aWV3PUdyaWQlMjB2aWV3YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb25maWdzLkFJUlRBQkxFX0FQSV99YCxcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIENsZWFyIGFycmF5IHNpbmNlIEknbSBqdXN0IGxvb3BpbmcgdGhyb3VnaCBtYXhSZWNvcmRzXG4gICAgICAgICAgICBBaXJ0YWJsZUFycmF5ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUFycmF5ID0gZGF0YS5yZWNvcmRzO1xuICAgICAgICAgICAgcmVzcG9uc2VBcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggZW50cmllcyBhbmQgYWRkIHRoZSAnZmllbGRzJyBvZiBlYWNoIGVudHJ5IHRvIHRoZSBhcnJheSBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgQWlydGFibGVBcnJheS5wdXNoKGVudHJ5LmZpZWxkcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coQWlydGFibGVBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFBvcHVsYXRlVmlldygpO1xuICAgICAgICAvL3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe3BsdWdpbk1lc3NhZ2U6IGJhc2V9LCAnKicpXG4gICAgfVxufSk7XG4vLyBXaGVuIGNsaWNraW5nIFwiTGlzdCBJdGVtc1wiIGl0IHdpbCByZW5kZXIgYWxsIGl0ZW1zIGluIFVJLlxuLy8gVGhpcyBzaG91bGQgZmV0Y2ggaXRlbXMgZnJvbSByZW1vdGUgYW5kIHJlbmRlciBhY2NvcmRpbmdseS4gVGhlbiBzZW5kIG1lc3NhZ2VzIHRvIGNvZGUudHMgd2l0aCB0eXBlIGFuZCBzcmMgKHRleHQsIG1lZGlhKVxuLy8gc28gY29kZSBjYW4gY29uZmlndXJlIFVJIGFjY29yZGluZ2x5XG5sb2FkTW9yZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG5ld1JlcXVlc3ROdW1iZXIgKz0gMztcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogXCJsb2FkXCIgfSwgXCIqXCIpO1xufTtcbi8vIEJ1dHRvbiB0aGF0IHBvcHVsYXRlcyB2aWV3XG5jb25zdCBQb3B1bGF0ZVZpZXcgPSAoKSA9PiB7XG4gICAgaWYgKGl0ZW1MaXN0RGl2LmlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW1MaXN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIEFpcnRhYmxlQXJyYXkubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtLk5hbWUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBncm91cE5hbWUuY2xhc3NOYW1lID0gXCJncm91cC1uYW1lXCI7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobS5Hcm91cCk7XG4gICAgICAgIGdyb3VwTmFtZS5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICAgIGRlc2NyaXB0aW9ucy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbnMuYXBwZW5kQ2hpbGQoZ3JvdXBOYW1lKTtcbiAgICAgICAgY29uc3QgYXR0YWNobWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhdHRhY2htZW50LnNyYyA9IG0uaW1nTGluaztcbiAgICAgICAgYXR0YWNobWVudC5jbGFzc05hbWUgPSBcImF0dGFjaG1lbnRcIjtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25zKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYXR0YWNobWVudCk7XG4gICAgICAgIGl0ZW1MaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgYXR0YWNobWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZmV0Y2gobS5pbWdMaW5rKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGJsb2IpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUJ5dGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhdHRhY2htZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VCeXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiKlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWcuc3JjID0gbS5pbWdMaW5rO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgc2hvdWxkIGFkZCAke20uTmFtZX0gdG8gVUkgOilgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaGVhZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6IFwidGV4dFwiLCBkYXRhOiBtLk5hbWUgfSB9LCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9