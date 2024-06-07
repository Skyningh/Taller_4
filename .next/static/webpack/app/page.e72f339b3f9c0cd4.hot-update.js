"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _useImageUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useImageUploader */ \"(app-pages-browser)/./app/useImageUploader.js\");\n/* harmony import */ var _Ancho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ancho */ \"(app-pages-browser)/./app/Ancho.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { imageData, handleImageUpload } = (0,_useImageUploader__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageDimensions, setImageDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ancho: 0,\n        alto: 0\n    });\n    const [anchura, setAnchura] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //esta funcion se ejecuta cuando el usuario elige una imagen en el input\n    const onFileChange = async (event)=>{\n        //obtiene el archivo seleccionado\n        const file = event.target.files[0];\n        try {\n            //await handleImageUpload(file) llama a handleImageUpload y espera a que la promesa se cumpla\n            const dataUrl = await handleImageUpload(file);\n            //creamos un objeto Image para poder obtener sus dimensiones\n            const img = new Image();\n            img.onload = ()=>{\n                setImageDimensions({\n                    ancho: img.width,\n                    alto: img.height\n                });\n            };\n            img.src = dataUrl;\n        //si hay un error durante la subida, se actualiza el estado a error. \n        } catch (err) {\n            setError(err);\n        }\n    };\n    //me dio paja colocar lo del css (no tenia idea como)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Conversor de im\\xe1genes bacano :D \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"custom-file-upload\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"file-upload\",\n                        type: \"file\",\n                        onChange: onFileChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    \"Seleccione un archivo\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, this),\n            imageData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Preview:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageData,\n                        alt: \"Uploaded\",\n                        style: {\n                            maxWidth: \"256px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Ancho: \",\n                            imageDimensions.ancho,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Alto: \",\n                            imageDimensions.alto,\n                            \"px\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"ancho\",\n                        children: \"Ancho:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Ancho__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setAnchura: setAnchura\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Home, {\n                        anchura: anchura\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Linux\\\\Taller4\\\\Taller_4\\\\app\\\\page.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"71TX850niv5WkuG8gWpFq/ZI1LU=\", false, function() {\n    return [\n        _useImageUploader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpQztBQUNWO0FBQzJCO0FBQ2Y7QUFFcEIsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHSiw2REFBZ0JBO0lBQ3pELE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBR0MsTUFBTTtJQUFFO0lBQzNFLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFFYiwrQ0FBUUEsQ0FBQztJQUVyQyx3RUFBd0U7SUFDeEUsTUFBTWMsZUFBZSxPQUFPQztRQUMxQixpQ0FBaUM7UUFDakMsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUNsQyxJQUFJO1lBQ0YsNkZBQTZGO1lBQzdGLE1BQU1DLFVBQVUsTUFBTWQsa0JBQWtCVztZQUN4Qyw0REFBNEQ7WUFDNUQsTUFBTUksTUFBSyxJQUFJQztZQUNmRCxJQUFJRSxNQUFNLEdBQUc7Z0JBQ1hiLG1CQUFtQjtvQkFBQ0MsT0FBT1UsSUFBSUcsS0FBSztvQkFBRVosTUFBTVMsSUFBSUksTUFBTTtnQkFBQTtZQUN4RDtZQUNBSixJQUFJSyxHQUFHLEdBQUNOO1FBQ1YscUVBQXFFO1FBQ3JFLEVBQUUsT0FBT08sS0FBSztZQUNabkIsU0FBU21CO1FBQ1g7SUFDRjtJQUNGLHFEQUFxRDtJQUVuRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0YsOERBQUNDO2dCQUFNRixXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQU1DLElBQUc7d0JBQWNDLE1BQUs7d0JBQU9DLFVBQVVwQjs7Ozs7O29CQUFnQjs7Ozs7OztZQUluRVIsdUJBQVMsOERBQUM2QjtnQkFBRUMsT0FBTztvQkFBRUMsT0FBTztnQkFBTTswQkFBSS9COzs7Ozs7WUFFdENGLDJCQUNDLDhEQUFDdUI7O2tDQUNDLDhEQUFDVztrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDbEI7d0JBQUlLLEtBQUtyQjt3QkFBV21DLEtBQUk7d0JBQVdILE9BQU87NEJBQUVJLFVBQVU7d0JBQVE7Ozs7OztrQ0FDL0QsOERBQUNMOzs0QkFBRTs0QkFBUTNCLGdCQUFnQkUsS0FBSzs0QkFBQzs7Ozs7OztrQ0FDakMsOERBQUN5Qjs7NEJBQUU7NEJBQU8zQixnQkFBZ0JHLElBQUk7NEJBQUM7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDZ0I7O2tDQUNDLDhEQUFDRzt3QkFBTVcsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ3ZDLDhDQUFZQTt3QkFBQ1csWUFBWUE7Ozs7OztrQ0FDMUIsOERBQUNWO3dCQUFLUyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCO0dBcER3QlQ7O1FBQ21CRix5REFBZ0JBOzs7S0FEbkNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHVzZUltYWdlVXBsb2FkZXIgZnJvbSBcIi4vdXNlSW1hZ2VVcGxvYWRlclwiO1xyXG5pbXBvcnQgR3VhcmRhckFuY2hvIGZyb20gXCIuL0FuY2hvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHsgaW1hZ2VEYXRhLCBoYW5kbGVJbWFnZVVwbG9hZCB9ID0gdXNlSW1hZ2VVcGxvYWRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlRGltZW5zaW9ucywgc2V0SW1hZ2VEaW1lbnNpb25zXSA9IHVzZVN0YXRlKHsgYW5jaG86IDAsIGFsdG86IDAgfSk7XHJcbiAgY29uc3QgW2FuY2h1cmEsc2V0QW5jaHVyYV09IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgLy9lc3RhIGZ1bmNpb24gc2UgZWplY3V0YSBjdWFuZG8gZWwgdXN1YXJpbyBlbGlnZSB1bmEgaW1hZ2VuIGVuIGVsIGlucHV0XHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAvL29idGllbmUgZWwgYXJjaGl2byBzZWxlY2Npb25hZG9cclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB0cnkge1xyXG4gICAgICAvL2F3YWl0IGhhbmRsZUltYWdlVXBsb2FkKGZpbGUpIGxsYW1hIGEgaGFuZGxlSW1hZ2VVcGxvYWQgeSBlc3BlcmEgYSBxdWUgbGEgcHJvbWVzYSBzZSBjdW1wbGFcclxuICAgICAgY29uc3QgZGF0YVVybCA9IGF3YWl0IGhhbmRsZUltYWdlVXBsb2FkKGZpbGUpO1xyXG4gICAgICAvL2NyZWFtb3MgdW4gb2JqZXRvIEltYWdlIHBhcmEgcG9kZXIgb2J0ZW5lciBzdXMgZGltZW5zaW9uZXNcclxuICAgICAgY29uc3QgaW1nID1uZXcgSW1hZ2UoKTtcclxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZURpbWVuc2lvbnMoe2FuY2hvOiBpbWcud2lkdGgsIGFsdG86IGltZy5oZWlnaHR9KVxyXG4gICAgICB9O1xyXG4gICAgICBpbWcuc3JjPWRhdGFVcmw7XHJcbiAgICAvL3NpIGhheSB1biBlcnJvciBkdXJhbnRlIGxhIHN1YmlkYSwgc2UgYWN0dWFsaXphIGVsIGVzdGFkbyBhIGVycm9yLiBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbi8vbWUgZGlvIHBhamEgY29sb2NhciBsbyBkZWwgY3NzIChubyB0ZW5pYSBpZGVhIGNvbW8pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDE+Q29udmVyc29yIGRlIGltw6FnZW5lcyBiYWNhbm8gOkQgPC9oMT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGUtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICBTZWxlY2Npb25lIHVuIGFyY2hpdm9cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICB7LypzaSBvY3VycmUgdW4gZXJyb3IgZW4gbGEgc3ViaWRhIGRlbCBhcmNoaXZvLCBlc3RhIGxpbmVhIG11ZXN0cmEgdW4gbWVuc2FqZSBkZSBlcnJvciBlbiByb2pvKi99XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XHJcbiAgICAgIHsvKnNpIGltYWdlRGF0YSB0aWVuZSB1biB2YWxvciBvY3VycmUgbG8gc2lndWllbnRlICovfVxyXG4gICAgICB7aW1hZ2VEYXRhICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPlByZXZpZXc6PC9oMz5cclxuICAgICAgICAgIHsvKlBhcmEgbW9zdHJhcmxvIGVuIHN1cyB2YWxvcmVzIG9yaWdpbmFsZXMgdGVuZHJpYW1vcyBxdWUgcXVpdGFyIFwic3R5bGU9e3sgbWF4V2lkdGg6ICcyNTZweCd9fVwiICovfVxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlRGF0YX0gYWx0PVwiVXBsb2FkZWRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzI1NnB4JyB9fSAvPlxyXG4gICAgICAgICAgPHA+QW5jaG86IHtpbWFnZURpbWVuc2lvbnMuYW5jaG99cHg8L3A+XHJcbiAgICAgICAgICA8cD5BbHRvOiB7aW1hZ2VEaW1lbnNpb25zLmFsdG99cHg8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbmNob1wiPkFuY2hvOjwvbGFiZWw+XHJcbiAgICAgICAgPEd1YXJkYXJBbmNobyBzZXRBbmNodXJhPXtzZXRBbmNodXJhfSAvPlxyXG4gICAgICAgIDxIb21lIGFuY2h1cmE9e2FuY2h1cmF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUltYWdlVXBsb2FkZXIiLCJHdWFyZGFyQW5jaG8iLCJIb21lIiwiaW1hZ2VEYXRhIiwiaGFuZGxlSW1hZ2VVcGxvYWQiLCJlcnJvciIsInNldEVycm9yIiwiaW1hZ2VEaW1lbnNpb25zIiwic2V0SW1hZ2VEaW1lbnNpb25zIiwiYW5jaG8iLCJhbHRvIiwiYW5jaHVyYSIsInNldEFuY2h1cmEiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImRhdGFVcmwiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImlucHV0IiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwIiwic3R5bGUiLCJjb2xvciIsImgzIiwiYWx0IiwibWF4V2lkdGgiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});