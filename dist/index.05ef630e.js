// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fjSRR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "136dd88705ef630e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aMYz0":[function(require,module,exports) {
//https://www.embla-carousel.com/get-started/module/
//https://codesandbox.io/s/embla-carousel-dragfree-vanilla-y1rnu?file=/src/js/prevAndNextButtons.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _emblaCarousel = require("embla-carousel");
var _emblaCarouselDefault = parcelHelpers.interopDefault(_emblaCarousel);
const onThumbClick = (mainCarousel, thumbCarousel, index)=>()=>{
        if (!thumbCarousel.clickAllowed()) return;
        mainCarousel.scrollTo(index);
    };
const followMainCarousel = (mainCarousel, thumbCarousel)=>()=>{
        thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
        selectThumbBtn(mainCarousel, thumbCarousel);
    };
const selectThumbBtn = (mainCarousel, thumbCarousel)=>{
    const previous = mainCarousel.previousScrollSnap();
    const selected = mainCarousel.selectedScrollSnap();
    thumbCarousel.slideNodes()[previous].classList.remove("is-selected");
    thumbCarousel.slideNodes()[selected].classList.add("is-selected");
};
//=========================================================
const mainCarouselWrap = document.getElementById("main-carousel");
const mainCarouselView = mainCarouselWrap.querySelector(".embla__viewport");
const mainCarousel = (0, _emblaCarouselDefault.default)(mainCarouselView, {
    selectedClass: "",
    loop: false,
    skipSnaps: false
});
const thumbCarouselWrap = document.getElementById("thumb-carousel");
const thumbCarouselView = thumbCarouselWrap.querySelector(".embla__viewport");
const thumbCarousel = (0, _emblaCarouselDefault.default)(thumbCarouselView, {
    selectedClass: "",
    containScroll: "keepSnaps",
    dragFree: true
});
thumbCarousel.slideNodes().forEach((thumbNode, index)=>{
    const onClick = onThumbClick(mainCarousel, thumbCarousel, index);
    thumbNode.addEventListener("click", onClick, false);
});
const syncThumbCarousel = followMainCarousel(mainCarousel, thumbCarousel);
mainCarousel.on("select", syncThumbCarousel);
thumbCarousel.on("init", syncThumbCarousel);

},{"embla-carousel":"aM3Qi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aM3Qi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EmblaCarousel);
function map(value, iStart, iStop, oStart, oStop) {
    return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}
function isNumber(subject) {
    return typeof subject === "number";
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === "[object Object]";
}
function isArray(subject) {
    return Array.isArray(subject);
}
function isRecord(subject) {
    return isObject(subject) || isArray(subject);
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return !n ? 0 : n / mathAbs(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    var diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToDecimals(decimalPoints) {
    var pow = Math.pow(10, decimalPoints);
    return function(n) {
        return Math.round(n * pow) / pow;
    };
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce(function(mergedObjects, currentObject) {
        objectKeys(currentObject).forEach(function(key) {
            var valueA = mergedObjects[key];
            var valueB = currentObject[key];
            var areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function objectsAreEqual(objectA, objectB) {
    var objectAKeys = objectKeys(objectA);
    var objectBKeys = objectKeys(objectB);
    if (objectAKeys.length !== objectBKeys.length) return false;
    return objectAKeys.every(function(key) {
        var valueA = objectA[key];
        var valueB = objectB[key];
        if (typeof valueA === "function") return "".concat(valueA) === "".concat(valueB);
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return objectsAreEqual(valueA, valueB);
    });
}
function Alignment(align, viewSize) {
    var predefined = {
        start: start,
        center: center,
        end: end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function percent() {
        return viewSize * Number(align);
    }
    function measure(n) {
        if (isNumber(align)) return percent();
        return predefined[align](n);
    }
    var self = {
        measure: measure
    };
    return self;
}
function Animation(callback) {
    var animationFrame = 0;
    function ifAnimating(active, cb) {
        return function() {
            if (active === !!animationFrame) cb();
        };
    }
    function start() {
        animationFrame = window.requestAnimationFrame(callback);
    }
    function stop() {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
    }
    var self = {
        proceed: ifAnimating(true, start),
        start: ifAnimating(false, start),
        stop: ifAnimating(true, stop)
    };
    return self;
}
function Axis(axis, direction) {
    var scroll = axis === "y" ? "y" : "x";
    var cross = axis === "y" ? "x" : "y";
    var startEdge = getStartEdge();
    var endEdge = getEndEdge();
    function measureSize(rect) {
        var width = rect.width, height = rect.height;
        return scroll === "x" ? width : height;
    }
    function getStartEdge() {
        if (scroll === "y") return "top";
        return direction === "rtl" ? "right" : "left";
    }
    function getEndEdge() {
        if (scroll === "y") return "bottom";
        return direction === "rtl" ? "left" : "right";
    }
    var self = {
        scroll: scroll,
        cross: cross,
        startEdge: startEdge,
        endEdge: endEdge,
        measureSize: measureSize
    };
    return self;
}
function Limit(min, max) {
    var length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    var self = {
        length: length,
        max: max,
        min: min,
        constrain: constrain,
        reachedAny: reachedAny,
        reachedMax: reachedMax,
        reachedMin: reachedMin,
        removeOffset: removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    var _a = Limit(0, max), min = _a.min, constrain = _a.constrain;
    var loopEnd = max + 1;
    var counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    var self = {
        add: add,
        clone: clone,
        get: get,
        set: set,
        min: min,
        max: max
    };
    return self;
}
function Direction(direction) {
    var sign = direction === "rtl" ? -1 : 1;
    function apply(n) {
        return n * sign;
    }
    var self = {
        apply: apply
    };
    return self;
}
function EventStore() {
    var listeners = [];
    function add(node, type, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(type, handler, options);
        listeners.push(function() {
            return node.removeEventListener(type, handler, options);
        });
        return self;
    }
    function removeAll() {
        listeners = listeners.filter(function(remove) {
            return remove();
        });
        return self;
    }
    var self = {
        add: add,
        removeAll: removeAll
    };
    return self;
}
function Vector1D(value) {
    var vector = value;
    function get() {
        return vector;
    }
    function set(n) {
        vector = readNumber(n);
        return self;
    }
    function add(n) {
        vector += readNumber(n);
        return self;
    }
    function subtract(n) {
        vector -= readNumber(n);
        return self;
    }
    function multiply(n) {
        vector *= n;
        return self;
    }
    function divide(n) {
        vector /= n;
        return self;
    }
    function normalize() {
        if (vector !== 0) divide(vector);
        return self;
    }
    function readNumber(n) {
        return isNumber(n) ? n : n.get();
    }
    var self = {
        add: add,
        divide: divide,
        get: get,
        multiply: multiply,
        normalize: normalize,
        set: set,
        subtract: subtract
    };
    return self;
}
function DragHandler(axis, direction, rootNode, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, loop, dragFree, skipSnaps) {
    var crossAxis = axis.cross;
    var focusNodes = [
        "INPUT",
        "SELECT",
        "TEXTAREA"
    ];
    var dragStartPoint = Vector1D(0);
    var activationEvents = EventStore();
    var interactionEvents = EventStore();
    var dragThreshold = percentOfView.measure(20);
    var snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    var freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    var baseSpeed = dragFree ? 5 : 16;
    var baseMass = 1;
    var startScroll = 0;
    var startCross = 0;
    var pointerIsDown = false;
    var preventScroll = false;
    var preventClick = false;
    var isMouse = false;
    function addActivationEvents() {
        var node = rootNode;
        activationEvents.add(node, "touchmove", function() {
            return undefined;
        }).add(node, "touchend", function() {
            return undefined;
        }).add(node, "touchstart", down).add(node, "mousedown", down).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click);
    }
    function addInteractionEvents() {
        var node = !isMouse ? rootNode : document;
        interactionEvents.add(node, "touchmove", move).add(node, "touchend", up).add(node, "mousemove", move).add(node, "mouseup", up);
    }
    function removeAllEvents() {
        activationEvents.removeAll();
        interactionEvents.removeAll();
    }
    function isFocusNode(node) {
        var name = node.nodeName || "";
        return focusNodes.indexOf(name) > -1;
    }
    function forceBoost() {
        var boost = dragFree ? freeForceBoost : snapForceBoost;
        var type = isMouse ? "mouse" : "touch";
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        var next = index.clone().add(mathSign(force) * -1);
        var isEdge = next.get() === index.min || next.get() === index.max;
        var baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < dragThreshold) return baseForce;
        if (!loop && isEdge) return baseForce * 0.4;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        isMouse = evt.type === "mousedown";
        if (isMouse && evt.button !== 0) return;
        var isMoving = deltaAbs(target.get(), location.get()) >= 2;
        var clearPreventClick = isMouse || !isMoving;
        var isNotFocusNode = !isFocusNode(evt.target);
        var preventDefault = isMoving || isMouse && isNotFocusNode;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        dragStartPoint.set(target);
        target.set(location);
        scrollBody.useBaseMass().useSpeed(80);
        addInteractionEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit("pointerDown");
        if (clearPreventClick) preventClick = false;
        if (preventDefault) evt.preventDefault();
    }
    function move(evt) {
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            var lastScroll = dragTracker.readPoint(evt);
            var lastCross = dragTracker.readPoint(evt, crossAxis);
            var diffScroll = deltaAbs(lastScroll, startScroll);
            var diffCross = deltaAbs(lastCross, startCross);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll && !preventClick) return up(evt);
        }
        var diff = dragTracker.pointerMove(evt);
        if (!preventClick && diff) preventClick = true;
        animation.start();
        target.add(direction.apply(diff));
        evt.preventDefault();
    }
    function up(evt) {
        var currentLocation = scrollTarget.byDistance(0, false);
        var targetChanged = currentLocation.index !== index.get();
        var rawForce = dragTracker.pointerUp(evt) * forceBoost();
        var force = allowedForce(direction.apply(rawForce), targetChanged);
        var forceFactor = factorAbs(rawForce, force);
        var isMoving = deltaAbs(target.get(), dragStartPoint.get()) >= 0.5;
        var isVigorous = targetChanged && forceFactor > 0.75;
        var isBelowThreshold = mathAbs(rawForce) < dragThreshold;
        var speed = isVigorous ? 10 : baseSpeed;
        var mass = isVigorous ? baseMass + 2.5 * forceFactor : baseMass;
        if (isMoving && !isMouse) preventClick = true;
        preventScroll = false;
        pointerIsDown = false;
        interactionEvents.removeAll();
        scrollBody.useSpeed(isBelowThreshold ? 9 : speed).useMass(mass);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit("pointerUp");
    }
    function click(evt) {
        if (preventClick) evt.preventDefault();
    }
    function clickAllowed() {
        return !preventClick;
    }
    function pointerDown() {
        return pointerIsDown;
    }
    var self = {
        addActivationEvents: addActivationEvents,
        clickAllowed: clickAllowed,
        pointerDown: pointerDown,
        removeAllEvents: removeAllEvents
    };
    return self;
}
function DragTracker(axis) {
    var logInterval = 170;
    var startEvent;
    var lastEvent;
    function isTouchEvent(evt) {
        return typeof TouchEvent !== "undefined" && evt instanceof TouchEvent;
    }
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        var property = evtAxis || axis.scroll;
        var coord = "client".concat(property === "x" ? "X" : "Y");
        return (isTouchEvent(evt) ? evt.touches[0] : evt)[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        var diff = readPoint(evt) - readPoint(lastEvent);
        var expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        var diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        var diffTime = readTime(evt) - readTime(startEvent);
        var expired = readTime(evt) - readTime(lastEvent) > logInterval;
        var force = diffDrag / diffTime;
        var isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    var self = {
        isTouchEvent: isTouchEvent,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        readPoint: readPoint
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    var self = {
        measure: measure
    };
    return self;
}
function ScrollBody(location, baseSpeed, baseMass) {
    var roundToTwoDecimals = roundToDecimals(2);
    var velocity = Vector1D(0);
    var acceleration = Vector1D(0);
    var attraction = Vector1D(0);
    var attractionDirection = 0;
    var speed = baseSpeed;
    var mass = baseMass;
    function update() {
        velocity.add(acceleration);
        location.add(velocity);
        acceleration.multiply(0);
    }
    function applyForce(force) {
        force.divide(mass);
        acceleration.add(force);
    }
    function seek(target) {
        attraction.set(target).subtract(location);
        var magnitude = map(attraction.get(), 0, 100, 0, speed);
        attractionDirection = mathSign(attraction.get());
        attraction.normalize().multiply(magnitude).subtract(velocity);
        applyForce(attraction);
        return self;
    }
    function settle(target) {
        var diff = target.get() - location.get();
        var hasSettled = !roundToTwoDecimals(diff);
        if (hasSettled) location.set(target);
        return hasSettled;
    }
    function direction() {
        return attractionDirection;
    }
    function useBaseSpeed() {
        return useSpeed(baseSpeed);
    }
    function useBaseMass() {
        return useMass(baseMass);
    }
    function useSpeed(n) {
        speed = n;
        return self;
    }
    function useMass(n) {
        mass = n;
        return self;
    }
    var self = {
        direction: direction,
        seek: seek,
        settle: settle,
        update: update,
        useBaseMass: useBaseMass,
        useBaseSpeed: useBaseSpeed,
        useMass: useMass,
        useSpeed: useSpeed
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    var pullBackThreshold = percentOfView.measure(10);
    var edgeOffsetTolerance = percentOfView.measure(50);
    var maxFriction = 0.85;
    var disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        var edge = limit.reachedMin(location.get()) ? "min" : "max";
        var diffToEdge = mathAbs(limit[edge] - location.get());
        var diffToTarget = target.get() - location.get();
        var friction = Math.min(diffToEdge / edgeOffsetTolerance, maxFriction);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useSpeed(10).useMass(3);
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    var self = {
        constrain: constrain,
        toggleActive: toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll) {
    var scrollBounds = Limit(-contentSize + viewSize, snapsAligned[0]);
    var snapsBounded = snapsAligned.map(scrollBounds.constrain);
    var snapsContained = measureContained();
    function findDuplicates() {
        var startSnap = snapsBounded[0];
        var endSnap = arrayLast(snapsBounded);
        var min = snapsBounded.lastIndexOf(startSnap);
        var max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureContained() {
        if (contentSize <= viewSize) return [
            scrollBounds.max
        ];
        if (containScroll === "keepSnaps") return snapsBounded;
        var _a = findDuplicates(), min = _a.min, max = _a.max;
        return snapsBounded.slice(min, max);
    }
    var self = {
        snapsContained: snapsContained
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    var limit = measureLimit();
    function measureLimit() {
        var startSnap = scrollSnaps[0];
        var endSnap = arrayLast(scrollSnaps);
        var min = loop ? startSnap - contentSize : endSnap;
        var max = startSnap;
        return Limit(min, max);
    }
    var self = {
        limit: limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    var jointSafety = 0.1;
    var min = limit.min + jointSafety;
    var max = limit.max + jointSafety;
    var _a = Limit(min, max), reachedMin = _a.reachedMin, reachedMax = _a.reachedMax;
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        var loopDistance = contentSize * (direction * -1);
        vectors.forEach(function(v) {
            return v.add(loopDistance);
        });
    }
    var self = {
        loop: loop
    };
    return self;
}
function ScrollProgress(limit) {
    var max = limit.max, scrollLength = limit.length;
    function get(n) {
        var currentLocation = n - max;
        return currentLocation / -scrollLength;
    }
    var self = {
        get: get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slideSizesWithGaps, slidesToScroll, containScroll) {
    var startEdge = axis.startEdge, endEdge = axis.endEdge;
    var groupSlides = slidesToScroll.groupSlides;
    var alignments = measureSizes().map(alignment.measure);
    var snaps = measureUnaligned();
    var snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map(function(rects) {
            return arrayLast(rects)[endEdge] - rects[0][startEdge];
        }).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map(function(rect) {
            return containerRect[startEdge] - rect[startEdge];
        }).map(function(snap) {
            return -mathAbs(snap);
        });
    }
    function measureAligned() {
        var containedStartSnap = 0;
        var containedEndSnap = arrayLast(snaps) - arrayLast(slideSizesWithGaps);
        return groupSlides(snaps).map(function(g) {
            return g[0];
        }).map(function(snap, index, groupedSnaps) {
            var isFirst = !index;
            var isLast = index === arrayLastIndex(groupedSnaps);
            if (containScroll && isFirst) return containedStartSnap;
            if (containScroll && isLast) return containedEndSnap;
            return snap + alignments[index];
        });
    }
    var self = {
        snaps: snaps,
        snapsAligned: snapsAligned
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    var reachedAny = limit.reachedAny, removeOffset = limit.removeOffset, constrain = limit.constrain;
    function minDistance(distances) {
        return distances.concat().sort(function(a, b) {
            return mathAbs(a) - mathAbs(b);
        })[0];
    }
    function findTargetSnap(target) {
        var distance = loop ? removeOffset(target) : constrain(target);
        var ascDiffsToSnaps = scrollSnaps.map(function(scrollSnap) {
            return scrollSnap - distance;
        }).map(function(diffToSnap) {
            return shortcut(diffToSnap, 0);
        }).map(function(diff, i) {
            return {
                diff: diff,
                index: i
            };
        }).sort(function(d1, d2) {
            return mathAbs(d1.diff) - mathAbs(d2.diff);
        });
        var index = ascDiffsToSnaps[0].index;
        return {
            index: index,
            distance: distance
        };
    }
    function shortcut(target, direction) {
        var targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return targets[0];
        if (!direction) return minDistance(targets);
        var matchingTargets = targets.filter(function(t) {
            return mathSign(t) === direction;
        });
        return minDistance(matchingTargets);
    }
    function byIndex(index, direction) {
        var diffToSnap = scrollSnaps[index] - targetVector.get();
        var distance = shortcut(diffToSnap, direction);
        return {
            index: index,
            distance: distance
        };
    }
    function byDistance(distance, snap) {
        var target = targetVector.get() + distance;
        var _a = findTargetSnap(target), index = _a.index, targetSnapDistance = _a.distance;
        var reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index: index,
            distance: distance
        };
        var diffToSnap = scrollSnaps[index] - targetSnapDistance;
        var snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index: index,
            distance: snapDistance
        };
    }
    var self = {
        byDistance: byDistance,
        byIndex: byIndex,
        shortcut: shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        var distanceDiff = target.distance;
        var indexDiff = target.index !== indexCurrent.get();
        if (distanceDiff) {
            animation.start();
            targetVector.add(distanceDiff);
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit("select");
        }
    }
    function distance(n, snap) {
        var target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        var targetIndex = indexCurrent.clone().set(n);
        var target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    var self = {
        distance: distance,
        index: index
    };
    return self;
}
function Translate(axis, direction, container) {
    var translate = axis.scroll === "x" ? x : y;
    var containerStyle = container.style;
    var disabled = false;
    function x(n) {
        return "translate3d(".concat(n, "px,0px,0px)");
    }
    function y(n) {
        return "translate3d(0px,".concat(n, "px,0px)");
    }
    function to(target) {
        if (disabled) return;
        containerStyle.transform = translate(direction.apply(target.get()));
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = "";
        if (!container.getAttribute("style")) container.removeAttribute("style");
    }
    var self = {
        clear: clear,
        to: to,
        toggleActive: toggleActive
    };
    return self;
}
function SlideLooper(axis, direction, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, scroll, slides) {
    var ascItems = arrayKeys(slideSizesWithGaps);
    var descItems = arrayKeys(slideSizesWithGaps).reverse();
    var loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce(function(a, i) {
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce(function(a, i) {
            var remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findLoopPoints(indexes, edge) {
        var isStartEdge = edge === "start";
        var offset = isStartEdge ? -contentSize : contentSize;
        var slideBounds = slidesInView.findSlideBounds([
            offset
        ]);
        return indexes.map(function(index) {
            var initial = isStartEdge ? 0 : -contentSize;
            var altered = isStartEdge ? contentSize : 0;
            var bounds = slideBounds.filter(function(b) {
                return b.index === index;
            })[0];
            var point = bounds[isStartEdge ? "end" : "start"];
            var shift = Vector1D(-1);
            var location = Vector1D(-1);
            var translate = Translate(axis, direction, slides[index]);
            var target = function() {
                return shift.set(scroll.get() > point ? initial : altered);
            };
            return {
                index: index,
                location: location,
                translate: translate,
                target: target
            };
        });
    }
    function startPoints() {
        var gap = scrollSnaps[0] - 1;
        var indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, "end");
    }
    function endPoints() {
        var gap = viewSize - scrollSnaps[0] - 1;
        var indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, "start");
    }
    function canLoop() {
        return loopPoints.every(function(_a) {
            var index = _a.index;
            var otherIndexes = ascItems.filter(function(i) {
                return i !== index;
            });
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach(function(loopPoint) {
            var target = loopPoint.target, translate = loopPoint.translate, location = loopPoint.location;
            var shift = target();
            if (shift.get() === location.get()) return;
            if (shift.get() === 0) translate.clear();
            else translate.to(shift);
            location.set(shift);
        });
    }
    function clear() {
        loopPoints.forEach(function(loopPoint) {
            return loopPoint.translate.clear();
        });
    }
    var self = {
        canLoop: canLoop,
        clear: clear,
        loop: loop,
        loopPoints: loopPoints
    };
    return self;
}
function SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold) {
    var removeOffset = limit.removeOffset, constrain = limit.constrain;
    var roundingSafety = 0.5;
    var cachedOffsets = loop ? [
        0,
        contentSize,
        -contentSize
    ] : [
        0
    ];
    var cachedBounds = findSlideBounds(cachedOffsets, inViewThreshold);
    function findSlideThresholds(threshold) {
        var slideThreshold = threshold || 0;
        return slideSizes.map(function(slideSize) {
            var thresholdLimit = Limit(roundingSafety, slideSize - roundingSafety);
            return thresholdLimit.constrain(slideSize * slideThreshold);
        });
    }
    function findSlideBounds(offsets, threshold) {
        var slideOffsets = offsets || cachedOffsets;
        var slideThresholds = findSlideThresholds(threshold);
        return slideOffsets.reduce(function(list, offset) {
            var bounds = snaps.map(function(snap, index) {
                return {
                    start: snap - slideSizes[index] + slideThresholds[index] + offset,
                    end: snap + viewSize - slideThresholds[index] + offset,
                    index: index
                };
            });
            return list.concat(bounds);
        }, []);
    }
    function check(location, bounds) {
        var limitedLocation = loop ? removeOffset(location) : constrain(location);
        var slideBounds = bounds || cachedBounds;
        return slideBounds.reduce(function(list, slideBound) {
            var index = slideBound.index, start = slideBound.start, end = slideBound.end;
            var inList = list.indexOf(index) !== -1;
            var inView = start < limitedLocation && end > limitedLocation;
            return !inList && inView ? list.concat([
                index
            ]) : list;
        }, []);
    }
    var self = {
        check: check,
        findSlideBounds: findSlideBounds
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, includeEdgeGap) {
    var measureSize = axis.measureSize, startEdge = axis.startEdge, endEdge = axis.endEdge;
    var startGap = measureStartGap();
    var endGap = measureEndGap();
    var slideSizes = slideRects.map(measureSize);
    var slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!includeEdgeGap) return 0;
        var slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!includeEdgeGap) return 0;
        var style = window.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue("margin-".concat(endEdge)));
    }
    function measureWithGaps() {
        return slideRects.map(function(rect, index, rects) {
            var isFirst = !index;
            var isLast = index === arrayLastIndex(rects);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    var self = {
        slideSizes: slideSizes,
        slideSizesWithGaps: slideSizesWithGaps
    };
    return self;
}
function SlidesToScroll(viewSize, slideSizesWithGaps, slidesToScroll) {
    var groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter(function(i) {
            return i % groupSize === 0;
        }).map(function(i) {
            return array.slice(i, i + groupSize);
        });
    }
    function bySize(array) {
        return arrayKeys(array).reduce(function(groupSizes, i) {
            var chunk = slideSizesWithGaps.slice(arrayLast(groupSizes), i + 1);
            var chunkSize = chunk.reduce(function(a, s) {
                return a + s;
            }, 0);
            return !i || chunkSize > viewSize ? groupSizes.concat(i) : groupSizes;
        }, []).map(function(start, i, groupSizes) {
            return array.slice(start, groupSizes[i + 1]);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    var self = {
        groupSlides: groupSlides
    };
    return self;
}
function Engine(root, container, slides, options, eventHandler) {
    // Options
    var align = options.align, scrollAxis = options.axis, contentDirection = options.direction, startIndex = options.startIndex, inViewThreshold = options.inViewThreshold, loop = options.loop, speed = options.speed, dragFree = options.dragFree, groupSlides = options.slidesToScroll, skipSnaps = options.skipSnaps, containScroll = options.containScroll; // Measurements
    var containerRect = container.getBoundingClientRect();
    var slideRects = slides.map(function(slide) {
        return slide.getBoundingClientRect();
    });
    var direction = Direction(contentDirection);
    var axis = Axis(scrollAxis, contentDirection);
    var viewSize = axis.measureSize(containerRect);
    var percentOfView = PercentOfView(viewSize);
    var alignment = Alignment(align, viewSize);
    var containSnaps = !loop && containScroll !== "";
    var includeEdgeGap = loop || containScroll !== "";
    var _a = SlideSizes(axis, containerRect, slideRects, slides, includeEdgeGap), slideSizes = _a.slideSizes, slideSizesWithGaps = _a.slideSizesWithGaps;
    var slidesToScroll = SlidesToScroll(viewSize, slideSizesWithGaps, groupSlides);
    var _b = ScrollSnaps(axis, alignment, containerRect, slideRects, slideSizesWithGaps, slidesToScroll, containSnaps), snaps = _b.snaps, snapsAligned = _b.snapsAligned;
    var contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    var snapsContained = ScrollContain(viewSize, contentSize, snapsAligned, containScroll).snapsContained;
    var scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    var limit = ScrollLimit(contentSize, scrollSnaps, loop).limit; // Indexes
    var index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    var indexPrevious = index.clone();
    var slideIndexes = arrayKeys(slides); // Draw
    var update = function() {
        if (!loop) engine.scrollBounds.constrain(engine.dragHandler.pointerDown());
        engine.scrollBody.seek(target).update();
        var settled = engine.scrollBody.settle(target);
        if (settled && !engine.dragHandler.pointerDown()) {
            engine.animation.stop();
            eventHandler.emit("settle");
        }
        if (!settled) eventHandler.emit("scroll");
        if (loop) {
            engine.scrollLooper.loop(engine.scrollBody.direction());
            engine.slideLooper.loop();
        }
        engine.translate.to(location);
        engine.animation.proceed();
    }; // Shared
    var animation = Animation(update);
    var startLocation = scrollSnaps[index.get()];
    var location = Vector1D(startLocation);
    var target = Vector1D(startLocation);
    var scrollBody = ScrollBody(location, speed, 1);
    var scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    var scrollTo = ScrollTo(animation, index, indexPrevious, scrollTarget, target, eventHandler);
    var slidesInView = SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold); // DragHandler
    var dragHandler = DragHandler(axis, direction, root, target, DragTracker(axis), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, loop, dragFree, skipSnaps); // Engine
    var engine = {
        containerRect: containerRect,
        slideRects: slideRects,
        animation: animation,
        axis: axis,
        direction: direction,
        dragHandler: dragHandler,
        eventStore: EventStore(),
        percentOfView: percentOfView,
        index: index,
        indexPrevious: indexPrevious,
        limit: limit,
        location: location,
        options: options,
        scrollBody: scrollBody,
        scrollBounds: ScrollBounds(limit, location, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, location, [
            location,
            target
        ]),
        scrollProgress: ScrollProgress(limit),
        scrollSnaps: scrollSnaps,
        scrollTarget: scrollTarget,
        scrollTo: scrollTo,
        slideLooper: SlideLooper(axis, direction, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, location, slides),
        slidesToScroll: slidesToScroll,
        slidesInView: slidesInView,
        slideIndexes: slideIndexes,
        target: target,
        translate: Translate(axis, direction, container)
    };
    return engine;
}
function EventHandler() {
    var listeners = {};
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach(function(e) {
            return e(evt);
        });
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter(function(e) {
            return e !== cb;
        });
        return self;
    }
    var self = {
        emit: emit,
        off: off,
        on: on
    };
    return self;
}
var defaultOptions = {
    align: "center",
    axis: "x",
    containScroll: "",
    direction: "ltr",
    slidesToScroll: 1,
    breakpoints: {},
    dragFree: false,
    draggable: true,
    inViewThreshold: 0,
    loop: false,
    skipSnaps: false,
    speed: 10,
    startIndex: 0,
    active: true
};
function OptionsHandler() {
    function merge(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function areEqual(optionsA, optionsB) {
        var breakpointsA = JSON.stringify(objectKeys(optionsA.breakpoints || {}));
        var breakpointsB = JSON.stringify(objectKeys(optionsB.breakpoints || {}));
        if (breakpointsA !== breakpointsB) return false;
        return objectsAreEqual(optionsA, optionsB);
    }
    function atMedia(options) {
        var optionsAtMedia = options.breakpoints || {};
        var matchedMediaOptions = objectKeys(optionsAtMedia).filter(function(media) {
            return window.matchMedia(media).matches;
        }).map(function(media) {
            return optionsAtMedia[media];
        }).reduce(function(a, mediaOption) {
            return merge(a, mediaOption);
        }, {});
        return merge(options, matchedMediaOptions);
    }
    var self = {
        merge: merge,
        areEqual: areEqual,
        atMedia: atMedia
    };
    return self;
}
function PluginsHandler() {
    var _a = OptionsHandler(), atMedia = _a.atMedia, areEqual = _a.areEqual;
    var activePlugins = [];
    var pluginsChanged = [];
    function haveChanged() {
        return pluginsChanged.some(function(hasChanged) {
            return hasChanged();
        });
    }
    function hasChanged(plugin) {
        var options = atMedia(plugin.options);
        return function() {
            return !areEqual(options, atMedia(plugin.options));
        };
    }
    function init(plugins, embla) {
        pluginsChanged = plugins.map(hasChanged);
        activePlugins = plugins.filter(function(plugin) {
            return atMedia(plugin.options).active;
        });
        activePlugins.forEach(function(plugin) {
            return plugin.init(embla);
        });
        return plugins.reduce(function(map, plugin) {
            var _a;
            return Object.assign(map, (_a = {}, _a[plugin.name] = plugin, _a));
        }, {});
    }
    function destroy() {
        activePlugins = activePlugins.filter(function(plugin) {
            return plugin.destroy();
        });
    }
    var self = {
        init: init,
        destroy: destroy,
        haveChanged: haveChanged
    };
    return self;
}
function EmblaCarousel(nodes, userOptions, userPlugins) {
    var resizeHandlers = EventStore();
    var optionsHandler = OptionsHandler();
    var pluginsHandler = PluginsHandler();
    var eventHandler = EventHandler();
    var on = eventHandler.on, off = eventHandler.off;
    var reInit = reActivate;
    var destroyed = false;
    var engine;
    var optionsBase = optionsHandler.merge(defaultOptions, EmblaCarousel.globalOptions);
    var options = optionsHandler.merge(optionsBase);
    var pluginList = [];
    var pluginApis;
    var rootSize = 0;
    var root;
    var container;
    var slides;
    function storeElements() {
        var providedContainer = "container" in nodes && nodes.container;
        var providedSlides = "slides" in nodes && nodes.slides;
        root = "root" in nodes ? nodes.root : nodes;
        container = providedContainer || root.children[0];
        slides = providedSlides || [].slice.call(container.children);
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        storeElements();
        optionsBase = optionsHandler.merge(optionsBase, withOptions);
        options = optionsHandler.atMedia(optionsBase);
        engine = Engine(root, container, slides, options, eventHandler);
        rootSize = engine.axis.measureSize(root.getBoundingClientRect());
        if (!options.active) return deActivate();
        engine.translate.to(engine.location);
        pluginList = withPlugins || pluginList;
        pluginApis = pluginsHandler.init(pluginList, self);
        if (options.loop) {
            if (!engine.slideLooper.canLoop()) {
                deActivate();
                return activate({
                    loop: false
                }, withPlugins);
            }
            engine.slideLooper.loop();
        }
        if (options.draggable && container.offsetParent && slides.length) engine.dragHandler.addActivationEvents();
    }
    function reActivate(withOptions, withPlugins) {
        var startIndex = selectedScrollSnap();
        deActivate();
        activate(optionsHandler.merge({
            startIndex: startIndex
        }, withOptions), withPlugins);
        eventHandler.emit("reInit");
    }
    function deActivate() {
        engine.dragHandler.removeAllEvents();
        engine.animation.stop();
        engine.eventStore.removeAll();
        engine.translate.clear();
        engine.slideLooper.clear();
        pluginsHandler.destroy();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        resizeHandlers.removeAll();
        deActivate();
        eventHandler.emit("destroy");
    }
    function resize() {
        var newOptions = optionsHandler.atMedia(optionsBase);
        var optionsChanged = !optionsHandler.areEqual(newOptions, options);
        var newRootSize = engine.axis.measureSize(root.getBoundingClientRect());
        var rootSizeChanged = rootSize !== newRootSize;
        var pluginsChanged = pluginsHandler.haveChanged();
        if (rootSizeChanged || optionsChanged || pluginsChanged) reActivate();
        eventHandler.emit("resize");
    }
    function slidesInView(target) {
        var location = engine[target ? "target" : "location"].get();
        var type = options.loop ? "removeOffset" : "constrain";
        return engine.slidesInView.check(engine.limit[type](location));
    }
    function slidesNotInView(target) {
        var inView = slidesInView(target);
        return engine.slideIndexes.filter(function(index) {
            return inView.indexOf(index) === -1;
        });
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseMass().useSpeed(jump ? 100 : options.speed);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        var next = engine.index.clone().add(1);
        scrollTo(next.get(), jump === true, -1);
    }
    function scrollPrev(jump) {
        var prev = engine.index.clone().add(-1);
        scrollTo(prev.get(), jump === true, 1);
    }
    function canScrollNext() {
        var next = engine.index.clone().add(1);
        return next.get() !== selectedScrollSnap();
    }
    function canScrollPrev() {
        var prev = engine.index.clone().add(-1);
        return prev.get() !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnaps.map(engine.scrollProgress.get);
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.location.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function clickAllowed() {
        return engine.dragHandler.clickAllowed();
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    var self = {
        canScrollNext: canScrollNext,
        canScrollPrev: canScrollPrev,
        clickAllowed: clickAllowed,
        containerNode: containerNode,
        internalEngine: internalEngine,
        destroy: destroy,
        off: off,
        on: on,
        plugins: plugins,
        previousScrollSnap: previousScrollSnap,
        reInit: reInit,
        rootNode: rootNode,
        scrollNext: scrollNext,
        scrollPrev: scrollPrev,
        scrollProgress: scrollProgress,
        scrollSnapList: scrollSnapList,
        scrollTo: scrollTo,
        selectedScrollSnap: selectedScrollSnap,
        slideNodes: slideNodes,
        slidesInView: slidesInView,
        slidesNotInView: slidesNotInView
    };
    activate(userOptions, userPlugins);
    resizeHandlers.add(window, "resize", resize);
    setTimeout(function() {
        return eventHandler.emit("init");
    }, 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
EmblaCarousel.optionsHandler = OptionsHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fjSRR","aMYz0"], "aMYz0", "parcelRequire14d2")

//# sourceMappingURL=index.05ef630e.js.map
