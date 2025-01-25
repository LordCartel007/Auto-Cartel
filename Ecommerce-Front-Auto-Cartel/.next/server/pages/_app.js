"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts?.length > 0) {\n                ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (ls && ls.getItem(\"cart\")) {\n                setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts.length === 0) {\n                ls?.removeItem(\"cart\");\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\components\\\\CartContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFFcEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBRUMsUUFBUSxFQUFFO0lBQzlDLE1BQU1DLEtBQUssTUFBNkIsR0FBR0MsQ0FBbUIsR0FBRztJQUVqRSxNQUFNLENBQUNFLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ERCxnREFBU0E7eUNBQUM7WUFDUixJQUFJUSxjQUFjRSxTQUFTLEdBQUc7Z0JBQzVCTCxJQUFJTSxRQUFRLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQ0w7WUFDckM7UUFDRjt3Q0FBRztRQUFDQTtLQUFhO0lBRWpCUixnREFBU0E7eUNBQUM7WUFDUixJQUFJSyxNQUFNQSxHQUFHUyxPQUFPLENBQUMsU0FBUztnQkFDNUJMLGdCQUFnQkcsS0FBS0csS0FBSyxDQUFDVixHQUFHUyxPQUFPLENBQUM7WUFDeEM7UUFDRjt3Q0FBRyxFQUFFO0lBQ0xkLGdEQUFTQTt5Q0FBQztZQUNSLElBQUlRLGFBQWFFLE1BQU0sS0FBSyxHQUFHO2dCQUM3QkwsSUFBSVcsV0FBVztZQUNqQjtRQUNGO3dDQUFHO1FBQUNSO0tBQWE7SUFFakIsU0FBU1MsV0FBV0MsU0FBUztRQUMzQlQsZ0JBQWdCLENBQUNVLE9BQVM7bUJBQUlBO2dCQUFNRDthQUFVO0lBQ2hEO0lBQ0EsU0FBU0UsY0FBY0YsU0FBUztRQUM5QlQsZ0JBQWdCLENBQUNVO1lBQ2YsTUFBTUUsTUFBTUYsS0FBS0csT0FBTyxDQUFDSjtZQUN6QixJQUFJRyxRQUFRLENBQUMsR0FBRztnQkFDZCxPQUFPRixLQUFLSSxNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVUEsVUFBVUo7WUFDakQ7WUFDQSxPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxTQUFTTztRQUNQakIsZ0JBQWdCLEVBQUU7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWXlCLFFBQVE7UUFDbkJILE9BQU87WUFDTGhCO1lBQ0FDO1lBQ0FRO1lBQ0FHO1lBQ0FNO1FBQ0Y7a0JBRUN0Qjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEF1dG8tQ2FydGVsXFxFY29tbWVyY2UtRnJvbnQtQXV0by1DYXJ0ZWxcXGNvbXBvbmVudHNcXENhcnRDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcnRDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgbHMgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2FsU3RvcmFnZSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IFtjYXJ0UHJvZHVjdHMsIHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbHM/LnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnRQcm9kdWN0cykpO1xyXG4gICAgfVxyXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChscyAmJiBscy5nZXRJdGVtKFwiY2FydFwiKSkge1xyXG4gICAgICBzZXRDYXJ0UHJvZHVjdHMoSlNPTi5wYXJzZShscy5nZXRJdGVtKFwiY2FydFwiKSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhcnRQcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbHM/LnJlbW92ZUl0ZW0oXCJjYXJ0XCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cygocHJldikgPT4gWy4uLnByZXYsIHByb2R1Y3RJZF0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KHByb2R1Y3RJZCkge1xyXG4gICAgc2V0Q2FydFByb2R1Y3RzKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvcyA9IHByZXYuaW5kZXhPZihwcm9kdWN0SWQpO1xyXG4gICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAhPT0gcG9zKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJldjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJDYXJ0KCkge1xyXG4gICAgc2V0Q2FydFByb2R1Y3RzKFtdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjYXJ0UHJvZHVjdHMsXHJcbiAgICAgICAgc2V0Q2FydFByb2R1Y3RzLFxyXG4gICAgICAgIGFkZFByb2R1Y3QsXHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdCxcclxuICAgICAgICBjbGVhckNhcnQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJscyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxlbmd0aCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsInBhcnNlIiwicmVtb3ZlSXRlbSIsImFkZFByb2R1Y3QiLCJwcm9kdWN0SWQiLCJwcmV2IiwicmVtb3ZlUHJvZHVjdCIsInBvcyIsImluZGV4T2YiLCJmaWx0ZXIiLCJ2YWx1ZSIsImluZGV4IiwiY2xlYXJDYXJ0IiwiUHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CartContext */ \"./components/CartContext.js\");\n\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)([\n    `body{background-color:#eee;padding:0;margin:0;font-family:\"poppins\",sans-serif;}`\n]);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel\\\\Ecommerce-Front-Auto-Cartel\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDVTtBQUVoRSxNQUFNRSxlQUFlRixvRUFBaUJBOzs7QUFVdkIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRTs7MEJBQ0UsOERBQUNIOzs7OzswQkFDRCw4REFBQ0Qsd0VBQW1CQTswQkFDbEIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEF1dG8tQ2FydGVsXFxFY29tbWVyY2UtRnJvbnQtQXV0by1DYXJ0ZWxcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDYXJ0Q29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydENvbnRleHRcIjtcblxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiBib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gfVxuIGA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJHbG9iYWxTdHlsZXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();