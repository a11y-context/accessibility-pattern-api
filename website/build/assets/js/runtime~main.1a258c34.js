/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "assets/js/" + ({"312":"03ee8eed","420":"22f73058","525":"a8e53781","562":"53c6948e","858":"5d378772","918":"00a5d4f9","939":"e0b2d234","1040":"38b9aceb","1235":"a7456010","1332":"ab0f4123","1335":"1476a249","1434":"397213cc","1534":"d6b7b8d4","1548":"36ba9cd3","1664":"abd30706","1666":"11e23263","1755":"ae5da983","1773":"34877bcf","1813":"96c4e6a0","1817":"1f0583f7","1875":"a8617a75","2110":"5c1fd5ef","2163":"421bde2d","2164":"21f502d1","2347":"24b62b2d","2542":"e6e3cac1","2634":"c4f5d8e4","2782":"6e331d47","2855":"7be3eb02","2885":"14b238c1","2945":"7adca7eb","2991":"8b5e662f","3284":"3272c88f","3316":"77e46d53","3461":"180c9c11","3503":"fbdcca0c","3575":"46aabbc9","3580":"f4698a76","3654":"115bfc1d","4040":"a5924eb7","4053":"04daf09b","4279":"df203c0f","4353":"e215bcf2","4721":"480ef32d","4787":"3720c009","4815":"85392ae5","5173":"d50cfd8b","5212":"3194e9a9","5498":"06522040","5605":"50856ceb","5823":"239db9af","5837":"4f94e651","6222":"b603f1b7","6673":"ed887cc6","6683":"dbb03a62","6840":"e64fd72e","6898":"3609984d","7098":"a7bd4aaa","7248":"2fa88909","7823":"0b676f87","7832":"3d56992c","7968":"bd08ac41","7986":"2dc3116e","8150":"32a23b04","8355":"14fdf2f7","8401":"17896441","8467":"87d0b799","8554":"35aa0e68","8583":"f4843b1b","8847":"3003100a","9048":"a94703ab","9160":"451898aa","9286":"dac18ab3","9354":"6d06a5be","9396":"2075773f","9400":"50d26817","9501":"1321c0d4","9518":"878ca80f","9573":"35b4fc7d","9603":"936a9cf9","9647":"5e95c892"}[chunkId] || chunkId) + "." + {"312":"55382ef8","420":"b7651835","525":"952a7feb","562":"6e40677b","858":"a80f0612","918":"c902a28e","939":"29b739b1","1040":"c86ee9d8","1235":"e7357b52","1332":"693cc321","1335":"090a21d8","1434":"6e2ae48b","1534":"74bfd1c6","1548":"33e8dfb1","1664":"d7a0352f","1666":"7485f25b","1755":"249b2917","1773":"38027e34","1813":"1b6bfa41","1817":"51f2da66","1875":"f6868a29","2110":"2e8ace05","2163":"c4771e0d","2164":"91764d14","2347":"915aad77","2542":"e44dd588","2634":"b34e94cd","2782":"a20a65ae","2855":"ef20798d","2885":"ad468d02","2945":"2ef1e16c","2991":"9b8ea957","3042":"2bd7a254","3284":"a92d3fda","3316":"f4ca2197","3461":"aa6c6110","3503":"3f09a65b","3575":"1f0f6603","3580":"b88016ff","3654":"09a0ebe0","4040":"5c60d582","4053":"b6e4af45","4279":"7f31c949","4353":"812b9d51","4721":"92545702","4787":"162c0ace","4815":"9c028507","5173":"9221a6fc","5212":"a75242b5","5498":"93036072","5605":"2b7e6c2f","5823":"f3548cca","5837":"d817a6f5","6222":"9d702147","6673":"57f689a6","6683":"14c4364b","6840":"ec13a278","6898":"f61e8773","7098":"2e7e132f","7248":"e1c16d89","7823":"3f3cb4fe","7832":"c86d2c61","7968":"cb928733","7986":"c150ec00","8150":"ff4333a7","8355":"ddda2bfd","8401":"4bdfa6da","8467":"b52f82a4","8554":"ea2afc21","8583":"13c62e1c","8847":"e25b9e8f","9048":"5b747d1e","9160":"485e92a1","9286":"82d03c1b","9354":"5075dc72","9396":"1da3c40a","9400":"9792c59c","9501":"0b31dde9","9518":"bf1468dd","9573":"d9611f74","9603":"00093b08","9647":"3774f258"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "accessibility-pattern-api-docs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ChunkAssetRuntimeModule */
/******/ 	(() => {
/******/ 		// Docusaurus function to get chunk asset
/******/ 		__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"8401","03ee8eed":"312","22f73058":"420","a8e53781":"525","53c6948e":"562","5d378772":"858","00a5d4f9":"918","e0b2d234":"939","38b9aceb":"1040","a7456010":"1235","ab0f4123":"1332","1476a249":"1335","397213cc":"1434","d6b7b8d4":"1534","36ba9cd3":"1548","abd30706":"1664","11e23263":"1666","ae5da983":"1755","34877bcf":"1773","96c4e6a0":"1813","1f0583f7":"1817","a8617a75":"1875","5c1fd5ef":"2110","421bde2d":"2163","21f502d1":"2164","24b62b2d":"2347","e6e3cac1":"2542","c4f5d8e4":"2634","6e331d47":"2782","7be3eb02":"2855","14b238c1":"2885","7adca7eb":"2945","8b5e662f":"2991","3272c88f":"3284","77e46d53":"3316","180c9c11":"3461","fbdcca0c":"3503","46aabbc9":"3575","f4698a76":"3580","115bfc1d":"3654","a5924eb7":"4040","04daf09b":"4053","df203c0f":"4279","e215bcf2":"4353","480ef32d":"4721","3720c009":"4787","85392ae5":"4815","d50cfd8b":"5173","3194e9a9":"5212","06522040":"5498","50856ceb":"5605","239db9af":"5823","4f94e651":"5837","b603f1b7":"6222","ed887cc6":"6673","dbb03a62":"6683","e64fd72e":"6840","3609984d":"6898","a7bd4aaa":"7098","2fa88909":"7248","0b676f87":"7823","3d56992c":"7832","bd08ac41":"7968","2dc3116e":"7986","32a23b04":"8150","14fdf2f7":"8355","87d0b799":"8467","35aa0e68":"8554","f4843b1b":"8583","3003100a":"8847","a94703ab":"9048","451898aa":"9160","dac18ab3":"9286","6d06a5be":"9354","2075773f":"9396","50d26817":"9400","1321c0d4":"9501","878ca80f":"9518","35b4fc7d":"9573","936a9cf9":"9603","5e95c892":"9647"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			5354: 0,
/******/ 			1869: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(1869|5354)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	
/******/ })()
;