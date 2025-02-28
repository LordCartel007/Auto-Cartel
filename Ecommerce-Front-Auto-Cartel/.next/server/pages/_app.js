/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts?.length > 0) {\n                ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (ls && ls.getItem(\"cart\")) {\n                setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts.length === 0) {\n                ls?.removeItem(\"cart\");\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Code Warrior\\\\Final-Projects\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\components\\\\CartContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFFcEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBRUMsUUFBUSxFQUFFO0lBQzlDLE1BQU1DLEtBQUssTUFBNkIsR0FBR0MsQ0FBbUIsR0FBRztJQUVqRSxNQUFNLENBQUNFLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ERCxnREFBU0E7eUNBQUM7WUFDUixJQUFJUSxjQUFjRSxTQUFTLEdBQUc7Z0JBQzVCTCxJQUFJTSxRQUFRLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQ0w7WUFDckM7UUFDRjt3Q0FBRztRQUFDQTtLQUFhO0lBRWpCUixnREFBU0E7eUNBQUM7WUFDUixJQUFJSyxNQUFNQSxHQUFHUyxPQUFPLENBQUMsU0FBUztnQkFDNUJMLGdCQUFnQkcsS0FBS0csS0FBSyxDQUFDVixHQUFHUyxPQUFPLENBQUM7WUFDeEM7UUFDRjt3Q0FBRyxFQUFFO0lBQ0xkLGdEQUFTQTt5Q0FBQztZQUNSLElBQUlRLGFBQWFFLE1BQU0sS0FBSyxHQUFHO2dCQUM3QkwsSUFBSVcsV0FBVztZQUNqQjtRQUNGO3dDQUFHO1FBQUNSO0tBQWE7SUFFakIsU0FBU1MsV0FBV0MsU0FBUztRQUMzQlQsZ0JBQWdCLENBQUNVLE9BQVM7bUJBQUlBO2dCQUFNRDthQUFVO0lBQ2hEO0lBQ0EsU0FBU0UsY0FBY0YsU0FBUztRQUM5QlQsZ0JBQWdCLENBQUNVO1lBQ2YsTUFBTUUsTUFBTUYsS0FBS0csT0FBTyxDQUFDSjtZQUN6QixJQUFJRyxRQUFRLENBQUMsR0FBRztnQkFDZCxPQUFPRixLQUFLSSxNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVUEsVUFBVUo7WUFDakQ7WUFDQSxPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxTQUFTTztRQUNQakIsZ0JBQWdCLEVBQUU7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWXlCLFFBQVE7UUFDbkJILE9BQU87WUFDTGhCO1lBQ0FDO1lBQ0FRO1lBQ0FHO1lBQ0FNO1FBQ0Y7a0JBRUN0Qjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEZpbmFsLVByb2plY3RzXFxBdXRvLUNhcnRlbFxcRWNvbW1lcmNlLUZyb250LUF1dG8tQ2FydGVsXFxjb21wb25lbnRzXFxDYXJ0Q29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGxzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiBudWxsO1xyXG5cclxuICBjb25zdCBbY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FydFByb2R1Y3RzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxzPy5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobHMgJiYgbHMuZ2V0SXRlbShcImNhcnRcIikpIHtcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKEpTT04ucGFyc2UobHMuZ2V0SXRlbShcImNhcnRcIikpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxzPy5yZW1vdmVJdGVtKFwiY2FydFwiKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMoKHByZXYpID0+IFsuLi5wcmV2LCBwcm9kdWN0SWRdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBwb3MgPSBwcmV2LmluZGV4T2YocHJvZHVjdElkKTtcclxuICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gcHJldi5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyQ2FydCgpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cyhbXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY2FydFByb2R1Y3RzLFxyXG4gICAgICAgIHNldENhcnRQcm9kdWN0cyxcclxuICAgICAgICBhZGRQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3QsXHJcbiAgICAgICAgY2xlYXJDYXJ0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibHMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJjYXJ0UHJvZHVjdHMiLCJzZXRDYXJ0UHJvZHVjdHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJwYXJzZSIsInJlbW92ZUl0ZW0iLCJhZGRQcm9kdWN0IiwicHJvZHVjdElkIiwicHJldiIsInJlbW92ZVByb2R1Y3QiLCJwb3MiLCJpbmRleE9mIiwiZmlsdGVyIiwidmFsdWUiLCJpbmRleCIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var _styles_videobackground_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/videobackground.css */ \"./styles/videobackground.css\");\n/* harmony import */ var _styles_videobackground_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_videobackground_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)([\n    `body{background-color:#eee;padding:0;margin:0;font-family:\"poppins\",sans-serif;}`\n]);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Final-Projects\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code Warrior\\\\Final-Projects\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Code Warrior\\\\Final-Projects\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code Warrior\\\\Final-Projects\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNVO0FBQ3pCO0FBQ1M7QUFDRDtBQUUvQyxNQUFNRyxlQUFlSCxvRUFBaUJBOzs7QUFVdkIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRTs7MEJBQ0UsOERBQUNIOzs7OzswQkFDRCw4REFBQ0Ysd0VBQW1CQTs7a0NBQ2xCLDhEQUFDSTt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDSiwwREFBY0E7Ozs7Ozs7Ozs7Ozs7QUFJdkIiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEZpbmFsLVByb2plY3RzXFxBdXRvLUNhcnRlbFxcRWNvbW1lcmNlLUZyb250LUF1dG8tQ2FydGVsXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ2FydENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRDb250ZXh0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvdmlkZW9iYWNrZ3JvdW5kLmNzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiBib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gfVxuIGA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICA8L0NhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJHbG9iYWxTdHlsZXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/videobackground.css":
/*!************************************!*\
  !*** ./styles/videobackground.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();