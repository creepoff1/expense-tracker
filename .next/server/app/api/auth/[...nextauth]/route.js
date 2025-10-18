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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_olegbulygin_Projects_expense_tracker_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/olegbulygin/Projects/expense-tracker/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_olegbulygin_Projects_expense_tracker_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm9sZWdidWx5Z2luJTJGUHJvamVjdHMlMkZleHBlbnNlLXRyYWNrZXIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGb2xlZ2J1bHlnaW4lMkZQcm9qZWN0cyUyRmV4cGVuc2UtdHJhY2tlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlLXRyYWNrZXItcHJvLz9lNmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9vbGVnYnVseWdpbi9Qcm9qZWN0cy9leHBlbnNlLXRyYWNrZXIvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL29sZWdidWx5Z2luL1Byb2plY3RzL2V4cGVuc2UtdHJhY2tlci9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2UtdHJhY2tlci1wcm8vLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _zod_schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zod-schemas */ \"(rsc)/./lib/zod-schemas.ts\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ \"(rsc)/./lib/logger.ts\");\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Authorize called with:\", {\n                    email: credentials?.email\n                });\n                if (!credentials?.email || !credentials?.password) {\n                    _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Missing credentials\");\n                    return null;\n                }\n                const parsed = _zod_schemas__WEBPACK_IMPORTED_MODULE_3__.loginSchema.safeParse(credentials);\n                if (!parsed.success) {\n                    _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Invalid credentials format:\", parsed.error);\n                    return null;\n                }\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: parsed.data.email\n                    }\n                });\n                if (!user) {\n                    _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"User not found:\", parsed.data.email);\n                    return null;\n                }\n                _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"User found, checking password...\");\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(parsed.data.password, user.password);\n                if (!isPasswordValid) {\n                    _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Invalid password for user:\", parsed.data.email);\n                    return null;\n                }\n                _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Authentication successful for:\", parsed.data.email);\n                return {\n                    id: user.id,\n                    email: user.email\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"JWT callback:\", {\n                tokenId: token.id,\n                user: user?.email\n            });\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            _logger__WEBPACK_IMPORTED_MODULE_4__.logger.debug(\"Session callback:\", {\n                sessionUser: session.user?.email,\n                tokenId: token.id\n            });\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"lax\",\n                path: \"/\",\n                secure: \"development\" === \"production\"\n            }\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUXRDLGtCQUF5QjtZQUNuQztRQUNGO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZS10cmFja2VyLXByby8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcbmltcG9ydCB7IGxvZ2luU2NoZW1hIH0gZnJvbSBcIi4vem9kLXNjaGVtYXNcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIkF1dGhvcml6ZSBjYWxsZWQgd2l0aDpcIiwgeyBlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcIk1pc3NpbmcgY3JlZGVudGlhbHNcIik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBsb2dpblNjaGVtYS5zYWZlUGFyc2UoY3JlZGVudGlhbHMpO1xuICAgICAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiSW52YWxpZCBjcmVkZW50aWFscyBmb3JtYXQ6XCIsIHBhcnNlZC5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHBhcnNlZC5kYXRhLmVtYWlsIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVXNlciBub3QgZm91bmQ6XCIsIHBhcnNlZC5kYXRhLmVtYWlsKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlVzZXIgZm91bmQsIGNoZWNraW5nIHBhc3N3b3JkLi4uXCIpO1xuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBwYXJzZWQuZGF0YS5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoXCJJbnZhbGlkIHBhc3N3b3JkIGZvciB1c2VyOlwiLCBwYXJzZWQuZGF0YS5lbWFpbCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dnZXIuZGVidWcoXCJBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsIGZvcjpcIiwgcGFyc2VkLmRhdGEuZW1haWwpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgbG9nZ2VyLmRlYnVnKFwiSldUIGNhbGxiYWNrOlwiLCB7IHRva2VuSWQ6IHRva2VuLmlkLCB1c2VyOiB1c2VyPy5lbWFpbCB9KTtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBsb2dnZXIuZGVidWcoXCJTZXNzaW9uIGNhbGxiYWNrOlwiLCB7IHNlc3Npb25Vc2VyOiBzZXNzaW9uLnVzZXI/LmVtYWlsLCB0b2tlbklkOiB0b2tlbi5pZCB9KTtcbiAgICAgIGlmICh0b2tlbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG4gIGNvb2tpZXM6IHtcbiAgICBzZXNzaW9uVG9rZW46IHtcbiAgICAgIG5hbWU6IGBuZXh0LWF1dGguc2Vzc2lvbi10b2tlbmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJwcmlzbWEiLCJsb2dpblNjaGVtYSIsImxvZ2dlciIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJkZWJ1ZyIsInBhcnNlZCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJlcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJkYXRhIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImlkIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0b2tlbklkIiwic2Vzc2lvblVzZXIiLCJwYWdlcyIsInNpZ25JbiIsImNvb2tpZXMiLCJzZXNzaW9uVG9rZW4iLCJvcHRpb25zIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJzZWN1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/logger.ts":
/*!***********************!*\
  !*** ./lib/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logger: () => (/* binding */ logger)\n/* harmony export */ });\nclass Logger {\n    log(level, message, data) {\n        const entry = {\n            timestamp: new Date().toISOString(),\n            level,\n            message,\n            data\n        };\n        // Console logging\n        console[level === \"info\" ? \"log\" : level](`[${entry.timestamp}] ${level.toUpperCase()}: ${message}`, data || \"\");\n        // In production, send to logging service\n        if (false) {}\n    }\n    info(message, data) {\n        this.log(\"info\", message, data);\n    }\n    warn(message, data) {\n        this.log(\"warn\", message, data);\n    }\n    error(message, data) {\n        this.log(\"error\", message, data);\n    }\n    debug(message, data) {\n        if (true) {\n            this.log(\"debug\", message, data);\n        }\n    }\n}\nconst logger = new Logger();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbG9nZ2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFTQSxNQUFNQTtJQUNJQyxJQUFJQyxLQUFlLEVBQUVDLE9BQWUsRUFBRUMsSUFBVSxFQUFFO1FBQ3hELE1BQU1DLFFBQWtCO1lBQ3RCQyxXQUFXLElBQUlDLE9BQU9DLFdBQVc7WUFDakNOO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxrQkFBa0I7UUFDbEJLLE9BQU8sQ0FBQ1AsVUFBVSxTQUFTLFFBQVFBLE1BQU0sQ0FDdkMsQ0FBQyxDQUFDLEVBQUVHLE1BQU1DLFNBQVMsQ0FBQyxFQUFFLEVBQUVKLE1BQU1RLFdBQVcsR0FBRyxFQUFFLEVBQUVQLFFBQVEsQ0FBQyxFQUN6REMsUUFBUTtRQUdWLHlDQUF5QztRQUN6QyxJQUFJTyxLQUFxQyxFQUFFLEVBRTFDO0lBQ0g7SUFFQUMsS0FBS1QsT0FBZSxFQUFFQyxJQUFVLEVBQUU7UUFDaEMsSUFBSSxDQUFDSCxHQUFHLENBQUMsUUFBUUUsU0FBU0M7SUFDNUI7SUFFQVMsS0FBS1YsT0FBZSxFQUFFQyxJQUFVLEVBQUU7UUFDaEMsSUFBSSxDQUFDSCxHQUFHLENBQUMsUUFBUUUsU0FBU0M7SUFDNUI7SUFFQVUsTUFBTVgsT0FBZSxFQUFFQyxJQUFVLEVBQUU7UUFDakMsSUFBSSxDQUFDSCxHQUFHLENBQUMsU0FBU0UsU0FBU0M7SUFDN0I7SUFFQVcsTUFBTVosT0FBZSxFQUFFQyxJQUFVLEVBQUU7UUFDakMsSUFBSU8sSUFBc0MsRUFBRTtZQUMxQyxJQUFJLENBQUNWLEdBQUcsQ0FBQyxTQUFTRSxTQUFTQztRQUM3QjtJQUNGO0FBQ0Y7QUFFTyxNQUFNWSxTQUFTLElBQUloQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZS10cmFja2VyLXByby8uL2xpYi9sb2dnZXIudHM/ZmQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIExvZ0xldmVsID0gXCJpbmZvXCIgfCBcIndhcm5cIiB8IFwiZXJyb3JcIiB8IFwiZGVidWdcIjtcblxuaW50ZXJmYWNlIExvZ0VudHJ5IHtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGxldmVsOiBMb2dMZXZlbDtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhPzogYW55O1xufVxuXG5jbGFzcyBMb2dnZXIge1xuICBwcml2YXRlIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgIGNvbnN0IGVudHJ5OiBMb2dFbnRyeSA9IHtcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgbGV2ZWwsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZGF0YSxcbiAgICB9O1xuXG4gICAgLy8gQ29uc29sZSBsb2dnaW5nXG4gICAgY29uc29sZVtsZXZlbCA9PT0gXCJpbmZvXCIgPyBcImxvZ1wiIDogbGV2ZWxdKFxuICAgICAgYFske2VudHJ5LnRpbWVzdGFtcH1dICR7bGV2ZWwudG9VcHBlckNhc2UoKX06ICR7bWVzc2FnZX1gLFxuICAgICAgZGF0YSB8fCBcIlwiXG4gICAgKTtcblxuICAgIC8vIEluIHByb2R1Y3Rpb24sIHNlbmQgdG8gbG9nZ2luZyBzZXJ2aWNlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gVE9ETzogU2VuZCB0byBleHRlcm5hbCBsb2dnaW5nIHNlcnZpY2UgKFNlbnRyeSwgTG9nUm9ja2V0LCBldGMuKVxuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgdGhpcy5sb2coXCJpbmZvXCIsIG1lc3NhZ2UsIGRhdGEpO1xuICB9XG5cbiAgd2FybihtZXNzYWdlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLmxvZyhcIndhcm5cIiwgbWVzc2FnZSwgZGF0YSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLmxvZyhcImVycm9yXCIsIG1lc3NhZ2UsIGRhdGEpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIHRoaXMubG9nKFwiZGVidWdcIiwgbWVzc2FnZSwgZGF0YSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG4iXSwibmFtZXMiOlsiTG9nZ2VyIiwibG9nIiwibGV2ZWwiLCJtZXNzYWdlIiwiZGF0YSIsImVudHJ5IiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsInRvVXBwZXJDYXNlIiwicHJvY2VzcyIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJkZWJ1ZyIsImxvZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/logger.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\n// Optimized Prisma client configuration\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0,\n    // Enable connection pooling for better performance\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL || \"file:./dev.db\"\n        }\n    },\n    // Optimize for SQLite\n    ... false && 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSXhCLHdDQUF3QztBQUNqQyxNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsQ0FBQztJQUMvREksS0FBS0MsS0FBeUIsR0FBZ0I7UUFBQztRQUFTO1FBQVM7S0FBTyxHQUFHLENBQVM7SUFDcEYsbURBQW1EO0lBQ25EQyxhQUFhO1FBQ1hDLElBQUk7WUFDRkMsS0FBS0gsUUFBUUksR0FBRyxDQUFDQyxZQUFZLElBQUk7UUFDbkM7SUFDRjtJQUNBLHNCQUFzQjtJQUN0QixHQUFJTCxNQUF5QixJQUFnQixDQUc1QztBQUNILEdBQUU7QUFFRixJQUFJQSxJQUF5QixFQUFjSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlLXRyYWNrZXItcHJvLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG4vLyBPcHRpbWl6ZWQgUHJpc21hIGNsaWVudCBjb25maWd1cmF0aW9uXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KHtcbiAgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFsncXVlcnknLCAnZXJyb3InLCAnd2FybiddIDogWydlcnJvciddLFxuICAvLyBFbmFibGUgY29ubmVjdGlvbiBwb29saW5nIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgZGF0YXNvdXJjZXM6IHtcbiAgICBkYjoge1xuICAgICAgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgXCJmaWxlOi4vZGV2LmRiXCIsXG4gICAgfSxcbiAgfSxcbiAgLy8gT3B0aW1pemUgZm9yIFNRTGl0ZVxuICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB7XG4gICAgLy8gRGlzYWJsZSBxdWVyeSBsb2dnaW5nIGluIHByb2R1Y3Rpb25cbiAgICBsb2c6IFsnZXJyb3InXSxcbiAgfSksXG59KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIiwiZGF0YXNvdXJjZXMiLCJkYiIsInVybCIsImVudiIsIkRBVEFCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/zod-schemas.ts":
/*!****************************!*\
  !*** ./lib/zod-schemas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categorySchema: () => (/* binding */ categorySchema),\n/* harmony export */   categoryUpdateSchema: () => (/* binding */ categoryUpdateSchema),\n/* harmony export */   csvImportSchema: () => (/* binding */ csvImportSchema),\n/* harmony export */   expenseCreateSchema: () => (/* binding */ expenseCreateSchema),\n/* harmony export */   expenseQuerySchema: () => (/* binding */ expenseQuerySchema),\n/* harmony export */   expenseUpdateSchema: () => (/* binding */ expenseUpdateSchema),\n/* harmony export */   loginSchema: () => (/* binding */ loginSchema),\n/* harmony export */   registerSchema: () => (/* binding */ registerSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n// Auth schemas\nconst registerSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email(\"Invalid email address\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(6, \"Password must be at least 6 characters\")\n});\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email(\"Invalid email address\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, \"Password is required\")\n});\n// Expense schemas\nconst expenseCreateSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    amount: zod__WEBPACK_IMPORTED_MODULE_0__.number().positive(\"Amount must be positive\"),\n    currency: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(3).max(3).default(\"USD\"),\n    date: zod__WEBPACK_IMPORTED_MODULE_0__.string().datetime().or(zod__WEBPACK_IMPORTED_MODULE_0__.string().min(10)),\n    note: zod__WEBPACK_IMPORTED_MODULE_0__.string().max(280).optional(),\n    categoryId: zod__WEBPACK_IMPORTED_MODULE_0__.string().cuid().optional()\n});\nconst expenseUpdateSchema = expenseCreateSchema.partial();\n// Category schemas\nconst categorySchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, \"Name is required\").max(32, \"Name too long\"),\n    color: zod__WEBPACK_IMPORTED_MODULE_0__.string().regex(/^#([0-9A-Fa-f]{6})$/, \"Invalid color format\")\n});\nconst categoryUpdateSchema = categorySchema.partial();\n// Query schemas\nconst expenseQuerySchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    from: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    to: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    categoryId: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    q: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),\n    page: zod__WEBPACK_IMPORTED_MODULE_0__.string().transform(Number).pipe(zod__WEBPACK_IMPORTED_MODULE_0__.number().min(1)).optional().default(\"1\"),\n    limit: zod__WEBPACK_IMPORTED_MODULE_0__.string().transform(Number).pipe(zod__WEBPACK_IMPORTED_MODULE_0__.number().min(1).max(100)).optional().default(\"20\")\n});\nconst csvImportSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    file: zod__WEBPACK_IMPORTED_MODULE_0__[\"instanceof\"](File)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvem9kLXNjaGVtYXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdCO0FBRXhCLGVBQWU7QUFDUixNQUFNQyxpQkFBaUJELHVDQUFRLENBQUM7SUFDckNHLE9BQU9ILHVDQUFRLEdBQUdHLEtBQUssQ0FBQztJQUN4QkUsVUFBVUwsdUNBQVEsR0FBR00sR0FBRyxDQUFDLEdBQUc7QUFDOUIsR0FBRztBQUVJLE1BQU1DLGNBQWNQLHVDQUFRLENBQUM7SUFDbENHLE9BQU9ILHVDQUFRLEdBQUdHLEtBQUssQ0FBQztJQUN4QkUsVUFBVUwsdUNBQVEsR0FBR00sR0FBRyxDQUFDLEdBQUc7QUFDOUIsR0FBRztBQUVILGtCQUFrQjtBQUNYLE1BQU1FLHNCQUFzQlIsdUNBQVEsQ0FBQztJQUMxQ1MsUUFBUVQsdUNBQVEsR0FBR1csUUFBUSxDQUFDO0lBQzVCQyxVQUFVWix1Q0FBUSxHQUFHTSxHQUFHLENBQUMsR0FBR08sR0FBRyxDQUFDLEdBQUdDLE9BQU8sQ0FBQztJQUMzQ0MsTUFBTWYsdUNBQVEsR0FBR2dCLFFBQVEsR0FBR0MsRUFBRSxDQUFDakIsdUNBQVEsR0FBR00sR0FBRyxDQUFDO0lBQzlDWSxNQUFNbEIsdUNBQVEsR0FBR2EsR0FBRyxDQUFDLEtBQUtNLFFBQVE7SUFDbENDLFlBQVlwQix1Q0FBUSxHQUFHcUIsSUFBSSxHQUFHRixRQUFRO0FBQ3hDLEdBQUc7QUFFSSxNQUFNRyxzQkFBc0JkLG9CQUFvQmUsT0FBTyxHQUFHO0FBRWpFLG1CQUFtQjtBQUNaLE1BQU1DLGlCQUFpQnhCLHVDQUFRLENBQUM7SUFDckN5QixNQUFNekIsdUNBQVEsR0FBR00sR0FBRyxDQUFDLEdBQUcsb0JBQW9CTyxHQUFHLENBQUMsSUFBSTtJQUNwRGEsT0FBTzFCLHVDQUFRLEdBQUcyQixLQUFLLENBQUMsdUJBQXVCO0FBQ2pELEdBQUc7QUFFSSxNQUFNQyx1QkFBdUJKLGVBQWVELE9BQU8sR0FBRztBQUU3RCxnQkFBZ0I7QUFDVCxNQUFNTSxxQkFBcUI3Qix1Q0FBUSxDQUFDO0lBQ3pDOEIsTUFBTTlCLHVDQUFRLEdBQUdtQixRQUFRO0lBQ3pCWSxJQUFJL0IsdUNBQVEsR0FBR21CLFFBQVE7SUFDdkJDLFlBQVlwQix1Q0FBUSxHQUFHbUIsUUFBUTtJQUMvQmEsR0FBR2hDLHVDQUFRLEdBQUdtQixRQUFRO0lBQ3RCYyxNQUFNakMsdUNBQVEsR0FBR2tDLFNBQVMsQ0FBQ0MsUUFBUUMsSUFBSSxDQUFDcEMsdUNBQVEsR0FBR00sR0FBRyxDQUFDLElBQUlhLFFBQVEsR0FBR0wsT0FBTyxDQUFDO0lBQzlFdUIsT0FBT3JDLHVDQUFRLEdBQUdrQyxTQUFTLENBQUNDLFFBQVFDLElBQUksQ0FBQ3BDLHVDQUFRLEdBQUdNLEdBQUcsQ0FBQyxHQUFHTyxHQUFHLENBQUMsTUFBTU0sUUFBUSxHQUFHTCxPQUFPLENBQUM7QUFDMUYsR0FBRztBQUVJLE1BQU13QixrQkFBa0J0Qyx1Q0FBUSxDQUFDO0lBQ3RDdUMsTUFBTXZDLDhDQUFZLENBQUN5QztBQUNyQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZS10cmFja2VyLXByby8uL2xpYi96b2Qtc2NoZW1hcy50cz9jYTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIEF1dGggc2NoZW1hc1xuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU2NoZW1hID0gei5vYmplY3Qoe1xuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIiksXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luU2NoZW1hID0gei5vYmplY3Qoe1xuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiksXG59KTtcblxuLy8gRXhwZW5zZSBzY2hlbWFzXG5leHBvcnQgY29uc3QgZXhwZW5zZUNyZWF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgYW1vdW50OiB6Lm51bWJlcigpLnBvc2l0aXZlKFwiQW1vdW50IG11c3QgYmUgcG9zaXRpdmVcIiksXG4gIGN1cnJlbmN5OiB6LnN0cmluZygpLm1pbigzKS5tYXgoMykuZGVmYXVsdChcIlVTRFwiKSxcbiAgZGF0ZTogei5zdHJpbmcoKS5kYXRldGltZSgpLm9yKHouc3RyaW5nKCkubWluKDEwKSksIC8vIElTTyBvciBZWVlZLU1NLUREXG4gIG5vdGU6IHouc3RyaW5nKCkubWF4KDI4MCkub3B0aW9uYWwoKSxcbiAgY2F0ZWdvcnlJZDogei5zdHJpbmcoKS5jdWlkKCkub3B0aW9uYWwoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZXhwZW5zZVVwZGF0ZVNjaGVtYSA9IGV4cGVuc2VDcmVhdGVTY2hlbWEucGFydGlhbCgpO1xuXG4vLyBDYXRlZ29yeSBzY2hlbWFzXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEsIFwiTmFtZSBpcyByZXF1aXJlZFwiKS5tYXgoMzIsIFwiTmFtZSB0b28gbG9uZ1wiKSxcbiAgY29sb3I6IHouc3RyaW5nKCkucmVnZXgoL14jKFswLTlBLUZhLWZdezZ9KSQvLCBcIkludmFsaWQgY29sb3IgZm9ybWF0XCIpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yeVVwZGF0ZVNjaGVtYSA9IGNhdGVnb3J5U2NoZW1hLnBhcnRpYWwoKTtcblxuLy8gUXVlcnkgc2NoZW1hc1xuZXhwb3J0IGNvbnN0IGV4cGVuc2VRdWVyeVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZnJvbTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0bzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjYXRlZ29yeUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHE6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcGFnZTogei5zdHJpbmcoKS50cmFuc2Zvcm0oTnVtYmVyKS5waXBlKHoubnVtYmVyKCkubWluKDEpKS5vcHRpb25hbCgpLmRlZmF1bHQoXCIxXCIpLFxuICBsaW1pdDogei5zdHJpbmcoKS50cmFuc2Zvcm0oTnVtYmVyKS5waXBlKHoubnVtYmVyKCkubWluKDEpLm1heCgxMDApKS5vcHRpb25hbCgpLmRlZmF1bHQoXCIyMFwiKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3N2SW1wb3J0U2NoZW1hID0gei5vYmplY3Qoe1xuICBmaWxlOiB6Lmluc3RhbmNlb2YoRmlsZSksXG59KTtcbiJdLCJuYW1lcyI6WyJ6IiwicmVnaXN0ZXJTY2hlbWEiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsInBhc3N3b3JkIiwibWluIiwibG9naW5TY2hlbWEiLCJleHBlbnNlQ3JlYXRlU2NoZW1hIiwiYW1vdW50IiwibnVtYmVyIiwicG9zaXRpdmUiLCJjdXJyZW5jeSIsIm1heCIsImRlZmF1bHQiLCJkYXRlIiwiZGF0ZXRpbWUiLCJvciIsIm5vdGUiLCJvcHRpb25hbCIsImNhdGVnb3J5SWQiLCJjdWlkIiwiZXhwZW5zZVVwZGF0ZVNjaGVtYSIsInBhcnRpYWwiLCJjYXRlZ29yeVNjaGVtYSIsIm5hbWUiLCJjb2xvciIsInJlZ2V4IiwiY2F0ZWdvcnlVcGRhdGVTY2hlbWEiLCJleHBlbnNlUXVlcnlTY2hlbWEiLCJmcm9tIiwidG8iLCJxIiwicGFnZSIsInRyYW5zZm9ybSIsIk51bWJlciIsInBpcGUiLCJsaW1pdCIsImNzdkltcG9ydFNjaGVtYSIsImZpbGUiLCJpbnN0YW5jZW9mIiwiRmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/zod-schemas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/zod","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Folegbulygin%2FProjects%2Fexpense-tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();