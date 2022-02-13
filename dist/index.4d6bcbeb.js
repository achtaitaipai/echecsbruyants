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
})({"fcvSp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chessboard = require("./js/chessboard");
var _chessboardDefault = parcelHelpers.interopDefault(_chessboard);
// import pieces from './js/pieces'
var _pieces = require("./js/pieces");
var _cmPgn = require("cm-pgn");
var _fenParser = require("@chess-fu/fen-parser");
var _fenParserDefault = parcelHelpers.interopDefault(_fenParser);
var _pgns = require("./pgn/pgns");
const prev = document.getElementById('prev-js');
const play = document.getElementById('play-js');
const next = document.getElementById('next-js');
const stop = document.getElementById('stop-js');
const delay = document.getElementById('delay-js');
const gameInput = document.getElementById('game-js');
const audioInputs = [
    ...document.getElementsByClassName('audio-input')
];
let audios = {
};
let cursor = 0;
let pgn, fens, moves, boards;
const chessboard = new _chessboardDefault.default(document.getElementById('chessboard'));
/**
 * Load a game
 * @param {Number} g number of the game to load
 */ function initGame(g) {
    cursor = 0;
    pgn = new _cmPgn.Pgn(_pgns.rounds[g]);
    fens = pgn.history.moves.map((m)=>{
        const fen = new _fenParserDefault.default(m.fen);
        return fen.ranks;
    });
    const initialPosition = new _fenParserDefault.default('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    fens.unshift(initialPosition.ranks);
    boards = [];
    fens.forEach((fen)=>{
        const pieces = [];
        fen.forEach((row, y)=>{
            [
                ...row
            ].forEach((p, x)=>{
                if (p === 'P') pieces.push(new _pieces.Pawn({
                    y: x,
                    x: 7 - y
                }, true));
                else if (p === 'p') pieces.push(new _pieces.Pawn({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'r') pieces.push(new _pieces.Rook({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'R') pieces.push(new _pieces.Rook({
                    y: x,
                    x: 7 - y
                }, true));
                else if (p === 'n') pieces.push(new _pieces.Knight({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'N') pieces.push(new _pieces.Knight({
                    y: x,
                    x: 7 - y
                }, true));
                else if (p === 'b') pieces.push(new _pieces.Bishop({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'B') pieces.push(new _pieces.Bishop({
                    y: x,
                    x: 7 - y
                }, true));
                else if (p === 'q') pieces.push(new _pieces.Queen({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'Q') pieces.push(new _pieces.Queen({
                    y: x,
                    x: 7 - y
                }, true));
                else if (p === 'k') pieces.push(new _pieces.King({
                    y: x,
                    x: 7 - y
                }, false));
                else if (p === 'K') pieces.push(new _pieces.King({
                    y: x,
                    x: 7 - y
                }, true));
            });
        });
        boards.push(pieces);
    });
    moves = pgn.history.moves.map((m)=>{
        return m.flags;
    });
}
/**
 * draw chessboard and pieces of current position of current game
 */ function draw() {
    chessboard.draw();
    boards[cursor].forEach((p)=>{
        p.draw(chessboard);
    });
}
/**
 * play the correspondant audio on new move
 */ function nextMove() {
    const m = moves[cursor];
    if (audios[m]) audios[m].play();
}
/////Events
//event on each audio input
audioInputs.forEach((el)=>{
    el.addEventListener('change', (e)=>{
        const id = e.target.id;
        // Make sure we have files to use
        if (!e.target.files.length) return;
        // Create a blob that we can use as an src for our audio element
        const urlObj = URL.createObjectURL(e.target.files[0]);
        // Create an audio element
        audios[id] = document.createElement('audio');
        // Clean up the URL Object after we are done with it
        audios[id].addEventListener('load', ()=>{
            URL.revokeObjectURL(urlObj);
        });
        // Append the audio element
        // document.body.appendChild(audio)
        // Allow us to control the audio
        audios[id].controls = 'true';
        // Set the src and start loading the audio from the file
        audios[id].src = urlObj;
        audios[id].play();
    });
});
//event on select game
gameInput.addEventListener('change', (e)=>{
    initGame(e.target.value);
});
//event on next btn
next.addEventListener('click', (e)=>{
    nextMove();
    cursor = Math.min(cursor + 1, boards.length - 1);
    draw();
});
//event on prev btn
prev.addEventListener('click', (e)=>{
    cursor = Math.max(cursor - 1, 0);
    draw();
});
//event on stop btn
stop.addEventListener('click', (e)=>{
    cursor = 0;
    if (playing) playPause();
    draw();
});
//play/pause game
let playingId;
let playing = false;
play.addEventListener('click', playPause);
function playPause() {
    playing = !playing;
    play.innerHTML = playing ? '<i class="fa fa-pause" aria-hidden="true"></i>' : '<i class="fa fa-play" aria-hidden="true"></i>';
    if (playing) playingId = window.setInterval(()=>{
        nextMove();
        cursor++;
        if (cursor >= boards.length - 1) playPause();
        else draw();
    }, delay.value * 1000);
    else clearInterval(playingId);
}
initGame(0);
draw();

},{"./js/chessboard":"jZQvm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","cm-pgn":"3gZf5","@chess-fu/fen-parser":"hbC51","./js/pieces":"hFj5y","./pgn/pgns":"fkEgz"}],"jZQvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Chessboard(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.width;
    this.cellWidth = this.width / 8;
    this.cellHeight = this.height / 8;
    this.draw = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for(let index = 0; index < 64; index++){
            const y = Math.floor(index / 8);
            const x = index - y * 8;
            const color = 'rgb(233, 244, 251)';
            this.ctx.strokeStyle = color;
            this.ctx.strokeRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
        }
    };
}
exports.default = Chessboard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3gZf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pgn", ()=>Pgn
);
/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-pgn
 * License: MIT, see file 'LICENSE'
 */ var _headerJs = require("./Header.js");
var _historyJs = require("./History.js");
class Pgn {
    constructor(pgnString = "", props = {
    }){
        // only the header?
        const lastHeaderElement = pgnString.trim().substr(-1) === "]" ? pgnString.length : pgnString.lastIndexOf("]\n\n") + 1;
        const headerString = pgnString.substr(0, lastHeaderElement);
        const historyString = pgnString.substr(lastHeaderElement);
        const sloppy = !!props.sloppy;
        this.header = new _headerJs.Header(headerString);
        if (this.header.tags[_headerJs.TAGS.SetUp] === "1" && this.header.tags[_headerJs.TAGS.FEN]) this.history = new _historyJs.History(historyString, this.header.tags[_headerJs.TAGS.FEN], sloppy);
        else this.history = new _historyJs.History(historyString, undefined, sloppy);
    }
    render() {
        let pgn = "";
        pgn += this.header.render();
        pgn += "\n";
        pgn += this.history.render();
        return pgn;
    }
}

},{"./Header.js":"axrdu","./History.js":"eUNQ4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axrdu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAGS", ()=>TAGS
);
parcelHelpers.export(exports, "Header", ()=>Header
);
const TAGS = {
    // Standard "Seven Tag Roster"
    Event: "Event",
    Site: "Site",
    Date: "Date",
    Round: "Round",
    White: "White",
    Black: "Black",
    Result: "Result",
    // Optional (http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm#c9)
    //      Player related information
    WhiteTitle: "WhiteTitle",
    BlackTitle: "BlackTitle",
    WhiteElo: "WhiteElo",
    BlackElo: "BlackElo",
    WhiteUSCF: "WhiteUSCF",
    BlackUSCF: "BlackUSCF",
    WhiteNA: "WhiteNA",
    BlackNA: "BlackNA:",
    WhiteType: "WhiteType",
    BlackType: "BlackType",
    //      Event related information
    EventDate: "EventDate",
    EventSponsor: "EventSponsor",
    Section: "Section",
    Stage: "Stage",
    Board: "Board",
    //      Opening information (locale specific)
    Opening: "Opening",
    ECO: "ECO",
    //      Time and date related information
    Time: "Time",
    UTCTime: "UTCTime",
    UTCDate: "UTCDate",
    //      Time control
    TimeControl: "TimeControl",
    //      Alternative starting positions
    SetUp: "SetUp",
    FEN: "FEN",
    //      Game conclusion
    Termination: "Termination",
    //      Miscellaneous
    Annotator: "Annotator",
    Mode: "Mode",
    PlyCount: "PlyCount"
};
class Header {
    constructor(headerString = ""){
        this.clear();
        const rows = headerString.match(/\[([^\]]+)]/g);
        if (rows && rows.length > 0) for(let i = 0; i < rows.length; i++){
            let tag = rows[i].match(/\[(\w+)\s+"([^"]+)"/);
            if (tag) this.tags[tag[1]] = tag[2];
        }
    }
    clear() {
        this.tags = {
        };
    }
    render() {
        let rendered = "";
        for(const tag in this.tags)rendered += `[${tag} "${this.tags[tag]}"]\n`;
        return rendered;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUNQ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "History", ()=>History
);
/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-pgn
 * License: MIT, see file 'LICENSE'
 */ var _pgnParserJs = require("./parser/pgnParser.js");
var _chessJs = require("../../lib/chess.mjs/Chess.js");
function IllegalMoveException(fen, notation) {
    this.fen = fen;
    this.notation = notation;
    this.toString = function() {
        return "IllegalMoveException: " + fen + " => " + notation;
    };
}
class History {
    constructor(historyString, setUpFen, sloppy = false){
        if (!historyString) this.clear();
        else {
            const parsedMoves = _pgnParserJs.pgnParser.parse(historyString.replace(/\s\s+/g, " ").replace(/\n/g, " "));
            this.moves = this.traverse(parsedMoves[0], setUpFen, undefined, 1, sloppy);
        }
        this.setUpFen = setUpFen;
    }
    clear() {
        this.moves = [];
    }
    traverse(parsedMoves, fen, parent, ply = 1, sloppy = false) {
        const chess = fen ? new _chessJs.Chess(fen) : new _chessJs.Chess() // chess.js must be included in HTML
        ;
        const moves = [];
        let previousMove = parent;
        for (let parsedMove of parsedMoves){
            if (parsedMove.notation) {
                const notation = parsedMove.notation.notation;
                const move = chess.move(notation, {
                    sloppy: sloppy
                });
                if (move) {
                    if (previousMove) {
                        move.previous = previousMove;
                        previousMove.next = move;
                    } else move.previous = undefined;
                    move.ply = ply;
                    this.fillMoveFromChessState(move, chess);
                    if (parsedMove.nag) move.nag = parsedMove.nag[0];
                    if (parsedMove.commentBefore) move.commentBefore = parsedMove.commentBefore;
                    if (parsedMove.commentMove) move.commentMove = parsedMove.commentMove;
                    if (parsedMove.commentAfter) move.commentAfter = parsedMove.commentAfter;
                    move.variations = [];
                    const parsedVariations = parsedMove.variations;
                    if (parsedVariations.length > 0) {
                        const lastFen = moves.length > 0 ? moves[moves.length - 1].fen : fen;
                        for (let parsedVariation of parsedVariations)move.variations.push(this.traverse(parsedVariation, lastFen, previousMove, ply, sloppy));
                    }
                    move.variation = moves;
                    moves.push(move);
                    previousMove = move;
                } else throw new IllegalMoveException(chess.fen(), notation);
            }
            ply++;
        }
        return moves;
    }
    fillMoveFromChessState(move, chess) {
        move.fen = chess.fen();
        move.variations = [];
        if (chess.game_over()) {
            move.gameOver = true;
            if (chess.in_draw()) move.inDraw = true;
            if (chess.in_stalemate()) move.inStalemate = true;
            if (chess.insufficient_material()) move.insufficientMaterial = true;
            if (chess.in_threefold_repetition()) move.inThreefoldRepetition = true;
            if (chess.in_checkmate()) move.inCheckmate = true;
        }
        if (chess.in_check()) move.inCheck = true;
    }
    /**
     * @param move
     * @return the history to the move which may be in a variation
     */ historyToMove(move) {
        const moves = [];
        let pointer = move;
        moves.push(pointer);
        while(pointer.previous){
            moves.push(pointer.previous);
            pointer = pointer.previous;
        }
        return moves.reverse();
    }
    addMove(notation, previous, sloppy = true) {
        if (!previous) {
            if (this.moves.length > 0) previous = this.moves[this.moves.length - 1];
        }
        const chess = new _chessJs.Chess(this.setUpFen ? this.setUpFen : undefined);
        if (previous) {
            const historyToMove = this.historyToMove(previous);
            for (const moveInHistory of historyToMove)chess.move(moveInHistory);
        }
        const move = chess.move(notation, {
            sloppy: sloppy
        });
        if (!move) throw new Error("invalid move");
        this.fillMoveFromChessState(move, chess);
        if (previous) {
            move.previous = previous;
            move.ply = previous.ply + 1;
            if (previous.next) {
                previous.next.variations.push([]);
                move.variation = previous.next.variations[previous.next.variations.length - 1];
                move.variation.push(move);
            } else {
                previous.next = move;
                move.variation = previous.variation;
                previous.variation.push(move);
            }
        } else {
            move.variation = this.moves;
            move.ply = 1;
            this.moves.push(move);
        }
        return move;
    }
    render() {
        // TODO Variants
        let rendered = "";
        // let i = 0
        for (const move of this.moves)rendered += move.san + " ";
        return rendered;
    }
}

},{"./parser/pgnParser.js":"02ZNp","../../lib/chess.mjs/Chess.js":"amMsp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"02ZNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
*/ parcelHelpers.export(exports, "pgnParser", ()=>pgnParser
);
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */ "use strict";
function peg$subclass(child, parent) {
    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
}
function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";
    if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, peg$SyntaxError);
}
peg$subclass(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = function(expected1, found1) {
    var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
        },
        "class": function(expectation) {
            var escapedParts = "", i;
            for(i = 0; i < expectation.parts.length; i++)escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function(expectation) {
            return "any character";
        },
        end: function(expectation) {
            return "end of input";
        },
        other: function(expectation) {
            return expectation.description;
        }
    };
    function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
    }
    function literalEscape(s) {
        return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function(ch) {
            return '\\x0' + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return '\\x' + hex(ch);
        });
    }
    function classEscape(s) {
        return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function(ch) {
            return '\\x0' + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
            return '\\x' + hex(ch);
        });
    }
    function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }
    function describeExpected(expected) {
        var descriptions = new Array(expected.length), i, j;
        for(i = 0; i < expected.length; i++)descriptions[i] = describeExpectation(expected[i]);
        descriptions.sort();
        if (descriptions.length > 0) {
            for(i = 1, j = 1; i < descriptions.length; i++)if (descriptions[i - 1] !== descriptions[i]) {
                descriptions[j] = descriptions[i];
                j++;
            }
            descriptions.length = j;
        }
        switch(descriptions.length){
            case 1:
                return descriptions[0];
            case 2:
                return descriptions[0] + " or " + descriptions[1];
            default:
                return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
    }
    function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }
    return "Expected " + describeExpected(expected1) + " but " + describeFound(found1) + " found.";
};
function peg$parse(input, options) {
    options = options !== void 0 ? options : {
    };
    var peg$FAILED = {
    }, peg$startRuleFunctions = {
        pgn: peg$parsepgn
    }, peg$startRuleFunction = peg$parsepgn, peg$c0 = function(pw, all) {
        var arr = all ? all : [];
        arr.unshift(pw);
        return arr;
    }, peg$c1 = function(pb, all) {
        var arr = all ? all : [];
        arr.unshift(pb);
        return arr;
    }, peg$c2 = function() {
        return [
            []
        ];
    }, peg$c3 = function(pw) {
        return pw;
    }, peg$c4 = function(pb) {
        return pb;
    }, peg$c5 = function(cm, mn, cb, hm, nag, ca, vari, all) {
        var arr = all ? all : [];
        var move = {
        };
        move.turn = 'w';
        move.moveNumber = mn;
        move.notation = hm;
        move.commentBefore = cb;
        move.commentAfter = ca;
        move.commentMove = cm;
        move.variations = vari ? vari : [];
        move.nag = nag ? nag : null;
        arr.unshift(move);
        return arr;
    }, peg$c6 = function(cm, me, cb, hm, nag, ca, vari, all) {
        var arr = all ? all : [];
        var move = {
        };
        move.turn = 'b';
        move.moveNumber = me;
        move.notation = hm;
        move.commentBefore = cb;
        move.commentAfter = ca;
        move.variations = vari ? vari : [];
        arr.unshift(move);
        move.nag = nag ? nag : null;
        return arr;
    }, peg$c7 = "1:0", peg$c8 = peg$literalExpectation("1:0", false), peg$c9 = function() {
        return [
            "1:0"
        ];
    }, peg$c10 = "0:1", peg$c11 = peg$literalExpectation("0:1", false), peg$c12 = function() {
        return [
            "0:1"
        ];
    }, peg$c13 = "1-0", peg$c14 = peg$literalExpectation("1-0", false), peg$c15 = function() {
        return [
            "1-0"
        ];
    }, peg$c16 = "0-1", peg$c17 = peg$literalExpectation("0-1", false), peg$c18 = function() {
        return [
            "0-1"
        ];
    }, peg$c19 = "1/2-1/2", peg$c20 = peg$literalExpectation("1/2-1/2", false), peg$c21 = function() {
        return [
            "1/2-1/2"
        ];
    }, peg$c22 = "*", peg$c23 = peg$literalExpectation("*", false), peg$c24 = function() {
        return [
            "*"
        ];
    }, peg$c25 = /^[^}]/, peg$c26 = peg$classExpectation([
        "}"
    ], true, false), peg$c27 = function(cm) {
        return cm.join("").trim();
    }, peg$c28 = "{", peg$c29 = peg$literalExpectation("{", false), peg$c30 = "}", peg$c31 = peg$literalExpectation("}", false), peg$c32 = function(vari, all, me) {
        var arr = all ? all : [];
        arr.unshift(vari);
        return arr;
    }, peg$c33 = function(vari, all) {
        var arr = all ? all : [];
        arr.unshift(vari);
        return arr;
    }, peg$c34 = "(", peg$c35 = peg$literalExpectation("(", false), peg$c36 = ")", peg$c37 = peg$literalExpectation(")", false), peg$c38 = ".", peg$c39 = peg$literalExpectation(".", false), peg$c40 = function(num) {
        return num;
    }, peg$c41 = peg$otherExpectation("integer"), peg$c42 = /^[0-9]/, peg$c43 = peg$classExpectation([
        [
            "0",
            "9"
        ]
    ], false, false), peg$c44 = function(digits) {
        return makeInteger(digits);
    }, peg$c45 = " ", peg$c46 = peg$literalExpectation(" ", false), peg$c47 = function() {
        return '';
    }, peg$c48 = function(fig, disc, str, col, row, pr, ch) {
        var hm = {
        };
        hm.fig = fig ? fig : null;
        hm.disc = disc ? disc : null;
        hm.strike = str ? str : null;
        hm.col = col;
        hm.row = row;
        hm.check = ch ? ch : null;
        hm.promotion = pr;
        hm.notation = (fig ? fig : "") + (disc ? disc : "") + (str ? str : "") + col + row + (pr ? pr : "") + (ch ? ch : "");
        return hm;
    }, peg$c49 = function(fig, cols, rows, str, col, row, pr, ch) {
        var hm = {
        };
        hm.fig = fig ? fig : null;
        hm.strike = str == 'x' ? str : null;
        hm.col = col;
        hm.row = row;
        hm.check = ch ? ch : null;
        hm.notation = (fig && fig !== 'P' ? fig : "") + cols + rows + (str == 'x' ? str : "-") + col + row + (pr ? pr : "") + (ch ? ch : "");
        hm.promotion = pr;
        return hm;
    }, peg$c50 = function(fig, str, col, row, pr, ch) {
        var hm = {
        };
        hm.fig = fig ? fig : null;
        hm.strike = str ? str : null;
        hm.col = col;
        hm.row = row;
        hm.check = ch ? ch : null;
        hm.notation = (fig ? fig : "") + (str ? str : "") + col + row + (pr ? pr : "") + (ch ? ch : "");
        hm.promotion = pr;
        return hm;
    }, peg$c51 = "O-O-O", peg$c52 = peg$literalExpectation("O-O-O", false), peg$c53 = function(ch) {
        var hm = {
        };
        hm.notation = 'O-O-O' + (ch ? ch : "");
        hm.check = ch ? ch : null;
        return hm;
    }, peg$c54 = "O-O", peg$c55 = peg$literalExpectation("O-O", false), peg$c56 = function(ch) {
        var hm = {
        };
        hm.notation = 'O-O' + (ch ? ch : "");
        hm.check = ch ? ch : null;
        return hm;
    }, peg$c57 = "+-", peg$c58 = peg$literalExpectation("+-", false), peg$c59 = "+", peg$c60 = peg$literalExpectation("+", false), peg$c61 = function(ch) {
        return ch[1];
    }, peg$c62 = "$$$", peg$c63 = peg$literalExpectation("$$$", false), peg$c64 = "#", peg$c65 = peg$literalExpectation("#", false), peg$c66 = "=", peg$c67 = peg$literalExpectation("=", false), peg$c68 = function(f) {
        return '=' + f;
    }, peg$c69 = function(nag, nags) {
        var arr = nags ? nags : [];
        arr.unshift(nag);
        return arr;
    }, peg$c70 = "$", peg$c71 = peg$literalExpectation("$", false), peg$c72 = function(num) {
        return '$' + num;
    }, peg$c73 = "!!", peg$c74 = peg$literalExpectation("!!", false), peg$c75 = function() {
        return '$3';
    }, peg$c76 = "??", peg$c77 = peg$literalExpectation("??", false), peg$c78 = function() {
        return '$4';
    }, peg$c79 = "!?", peg$c80 = peg$literalExpectation("!?", false), peg$c81 = function() {
        return '$5';
    }, peg$c82 = "?!", peg$c83 = peg$literalExpectation("?!", false), peg$c84 = function() {
        return '$6';
    }, peg$c85 = "!", peg$c86 = peg$literalExpectation("!", false), peg$c87 = function() {
        return '$1';
    }, peg$c88 = "?", peg$c89 = peg$literalExpectation("?", false), peg$c90 = function() {
        return '$2';
    }, peg$c91 = "\u203C", peg$c92 = peg$literalExpectation("\u203C", false), peg$c93 = "\u2047", peg$c94 = peg$literalExpectation("\u2047", false), peg$c95 = "\u2049", peg$c96 = peg$literalExpectation("\u2049", false), peg$c97 = "\u2048", peg$c98 = peg$literalExpectation("\u2048", false), peg$c99 = "\u25A1", peg$c100 = peg$literalExpectation("\u25A1", false), peg$c101 = function() {
        return '$7';
    }, peg$c102 = function() {
        return '$10';
    }, peg$c103 = "\u221E", peg$c104 = peg$literalExpectation("\u221E", false), peg$c105 = function() {
        return '$13';
    }, peg$c106 = "\u2A72", peg$c107 = peg$literalExpectation("\u2A72", false), peg$c108 = function() {
        return '$14';
    }, peg$c109 = "\u2A71", peg$c110 = peg$literalExpectation("\u2A71", false), peg$c111 = function() {
        return '$15';
    }, peg$c112 = "\xB1", peg$c113 = peg$literalExpectation("\xB1", false), peg$c114 = function() {
        return '$16';
    }, peg$c115 = "\u2213", peg$c116 = peg$literalExpectation("\u2213", false), peg$c117 = function() {
        return '$17';
    }, peg$c118 = function() {
        return '$18';
    }, peg$c119 = "-+", peg$c120 = peg$literalExpectation("-+", false), peg$c121 = function() {
        return '$19';
    }, peg$c122 = "\u2A00", peg$c123 = peg$literalExpectation("\u2A00", false), peg$c124 = function() {
        return '$22';
    }, peg$c125 = "\u27F3", peg$c126 = peg$literalExpectation("\u27F3", false), peg$c127 = function() {
        return '$32';
    }, peg$c128 = "\u2192", peg$c129 = peg$literalExpectation("\u2192", false), peg$c130 = function() {
        return '$36';
    }, peg$c131 = "\u2191", peg$c132 = peg$literalExpectation("\u2191", false), peg$c133 = function() {
        return '$40';
    }, peg$c134 = "\u21C6", peg$c135 = peg$literalExpectation("\u21C6", false), peg$c136 = function() {
        return '$132';
    }, peg$c137 = "D", peg$c138 = peg$literalExpectation("D", false), peg$c139 = function() {
        return '$220';
    }, peg$c140 = /^[RNBQKP]/, peg$c141 = peg$classExpectation([
        "R",
        "N",
        "B",
        "Q",
        "K",
        "P"
    ], false, false), peg$c142 = /^[a-h]/, peg$c143 = peg$classExpectation([
        [
            "a",
            "h"
        ]
    ], false, false), peg$c144 = /^[1-8]/, peg$c145 = peg$classExpectation([
        [
            "1",
            "8"
        ]
    ], false, false), peg$c146 = "x", peg$c147 = peg$literalExpectation("x", false), peg$c148 = "-", peg$c149 = peg$literalExpectation("-", false), peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [
        {
            line: 1,
            column: 1
        }
    ], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0, peg$result;
    if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text1() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function location1() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected2(description, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([
            peg$otherExpectation(description)
        ], input.substring(peg$savedPos, peg$currPos), location);
    }
    function error(message, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location);
    }
    function peg$literalExpectation(text, ignoreCase) {
        return {
            type: "literal",
            text: text,
            ignoreCase: ignoreCase
        };
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return {
            type: "class",
            parts: parts,
            inverted: inverted,
            ignoreCase: ignoreCase
        };
    }
    function peg$anyExpectation() {
        return {
            type: "any"
        };
    }
    function peg$endExpectation() {
        return {
            type: "end"
        };
    }
    function peg$otherExpectation(description) {
        return {
            type: "other",
            description: description
        };
    }
    function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos], p;
        if (details) return details;
        else {
            p = pos - 1;
            while(!peg$posDetailsCache[p])p--;
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while(p < pos){
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                } else details.column++;
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos), endPosDetails = peg$computePosDetails(endPos);
        return {
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) return;
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected);
    }
    function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
    }
    function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
    }
    function peg$parsepgn() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$parsepgnStartWhite();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsepgnBlack();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c0(s1, s2);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsepgnStartBlack();
            if (s1 !== peg$FAILED) {
                s2 = peg$parsepgnWhite();
                if (s2 === peg$FAILED) s2 = null;
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c1(s1, s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parsewhiteSpace();
                if (s1 === peg$FAILED) s1 = null;
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c2();
                }
                s0 = s1;
            }
        }
        return s0;
    }
    function peg$parsepgnStartWhite() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsepgnWhite();
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c3(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsepgnStartBlack() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsepgnBlack();
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsepgnWhite() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
        s0 = peg$currPos;
        s1 = peg$parsewhiteSpace();
        if (s1 === peg$FAILED) s1 = null;
        if (s1 !== peg$FAILED) {
            s2 = peg$parsecomment();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                s3 = peg$parsewhiteSpace();
                if (s3 === peg$FAILED) s3 = null;
                if (s3 !== peg$FAILED) {
                    s4 = peg$parsemoveNumber();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsewhiteSpace();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parsecomment();
                            if (s6 === peg$FAILED) s6 = null;
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parsewhiteSpace();
                                if (s7 === peg$FAILED) s7 = null;
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parsehalfMove();
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$parsewhiteSpace();
                                        if (s9 === peg$FAILED) s9 = null;
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parsenags();
                                            if (s10 === peg$FAILED) s10 = null;
                                            if (s10 !== peg$FAILED) {
                                                s11 = peg$parsewhiteSpace();
                                                if (s11 === peg$FAILED) s11 = null;
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parsecomment();
                                                    if (s12 === peg$FAILED) s12 = null;
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parsewhiteSpace();
                                                        if (s13 === peg$FAILED) s13 = null;
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parsevariationWhite();
                                                            if (s14 === peg$FAILED) s14 = null;
                                                            if (s14 !== peg$FAILED) {
                                                                s15 = peg$parsepgnBlack();
                                                                if (s15 === peg$FAILED) s15 = null;
                                                                if (s15 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c5(s2, s4, s6, s8, s10, s12, s14, s15);
                                                                    s0 = s1;
                                                                } else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            } else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) s0 = peg$parseendGame();
        return s0;
    }
    function peg$parsepgnBlack() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
        s0 = peg$currPos;
        s1 = peg$parsewhiteSpace();
        if (s1 === peg$FAILED) s1 = null;
        if (s1 !== peg$FAILED) {
            s2 = peg$parsecomment();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                s3 = peg$parsewhiteSpace();
                if (s3 === peg$FAILED) s3 = null;
                if (s3 !== peg$FAILED) {
                    s4 = peg$parsemoveEllipse();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsewhiteSpace();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parsecomment();
                            if (s6 === peg$FAILED) s6 = null;
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parsewhiteSpace();
                                if (s7 === peg$FAILED) s7 = null;
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parsehalfMove();
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$parsewhiteSpace();
                                        if (s9 === peg$FAILED) s9 = null;
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parsenags();
                                            if (s10 === peg$FAILED) s10 = null;
                                            if (s10 !== peg$FAILED) {
                                                s11 = peg$parsewhiteSpace();
                                                if (s11 === peg$FAILED) s11 = null;
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parsecomment();
                                                    if (s12 === peg$FAILED) s12 = null;
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parsewhiteSpace();
                                                        if (s13 === peg$FAILED) s13 = null;
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parsevariationBlack();
                                                            if (s14 === peg$FAILED) s14 = null;
                                                            if (s14 !== peg$FAILED) {
                                                                s15 = peg$parsepgnWhite();
                                                                if (s15 === peg$FAILED) s15 = null;
                                                                if (s15 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c6(s2, s4, s6, s8, s10, s12, s14, s15);
                                                                    s0 = s1;
                                                                } else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            } else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) s0 = peg$parseendGame();
        return s0;
    }
    function peg$parseendGame() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c7) {
            s1 = peg$c7;
            peg$currPos += 3;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c8);
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c9();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c10) {
                s1 = peg$c10;
                peg$currPos += 3;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c11);
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c12();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 3) === peg$c13) {
                    s1 = peg$c13;
                    peg$currPos += 3;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c14);
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c15();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 3) === peg$c16) {
                        s1 = peg$c16;
                        peg$currPos += 3;
                    } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c17);
                    }
                    if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c18();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 7) === peg$c19) {
                            s1 = peg$c19;
                            peg$currPos += 7;
                        } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) peg$fail(peg$c20);
                        }
                        if (s1 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c21();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 42) {
                                s1 = peg$c22;
                                peg$currPos++;
                            } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) peg$fail(peg$c23);
                            }
                            if (s1 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c24();
                            }
                            s0 = s1;
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parsecomment() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parsecl();
        if (s1 !== peg$FAILED) {
            s2 = [];
            if (peg$c25.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c26);
            }
            while(s3 !== peg$FAILED){
                s2.push(s3);
                if (peg$c25.test(input.charAt(peg$currPos))) {
                    s3 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c26);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parsecr();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c27(s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsecl() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 123) {
            s0 = peg$c28;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c29);
        }
        return s0;
    }
    function peg$parsecr() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 125) {
            s0 = peg$c30;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c31);
        }
        return s0;
    }
    function peg$parsevariationWhite() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        s1 = peg$parsepl();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsepgnWhite();
            if (s2 !== peg$FAILED) {
                s3 = peg$parsepr();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parsewhiteSpace();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsevariationWhite();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parsewhiteSpace();
                            if (s6 === peg$FAILED) s6 = null;
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parsemoveEllipse();
                                if (s7 === peg$FAILED) s7 = null;
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c32(s2, s5, s7);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsevariationBlack() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parsepl();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsepgnStartBlack();
            if (s2 !== peg$FAILED) {
                s3 = peg$parsepr();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parsewhiteSpace();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsevariationBlack();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c33(s2, s5);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsepl() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c34;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c35);
        }
        return s0;
    }
    function peg$parsepr() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 41) {
            s0 = peg$c36;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c37);
        }
        return s0;
    }
    function peg$parsemoveNumber() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$parseinteger();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
                s2 = peg$c38;
                peg$currPos++;
            } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c39);
            }
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c40(s1);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseinteger() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c42.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c43);
        }
        if (s2 !== peg$FAILED) while(s2 !== peg$FAILED){
            s1.push(s2);
            if (peg$c42.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c43);
            }
        }
        else s1 = peg$FAILED;
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c44(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c41);
        }
        return s0;
    }
    function peg$parsewhiteSpace() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (input.charCodeAt(peg$currPos) === 32) {
            s2 = peg$c45;
            peg$currPos++;
        } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c46);
        }
        if (s2 !== peg$FAILED) while(s2 !== peg$FAILED){
            s1.push(s2);
            if (input.charCodeAt(peg$currPos) === 32) {
                s2 = peg$c45;
                peg$currPos++;
            } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c46);
            }
        }
        else s1 = peg$FAILED;
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c47();
        }
        s0 = s1;
        return s0;
    }
    function peg$parsehalfMove() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;
        s0 = peg$currPos;
        s1 = peg$parsefigure();
        if (s1 === peg$FAILED) s1 = null;
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            peg$silentFails++;
            s3 = peg$parsecheckdisc();
            peg$silentFails--;
            if (s3 !== peg$FAILED) {
                peg$currPos = s2;
                s2 = void 0;
            } else s2 = peg$FAILED;
            if (s2 !== peg$FAILED) {
                s3 = peg$parsediscriminator();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parsestrike();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsecolumn();
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parserow();
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parsepromotion();
                                if (s7 === peg$FAILED) s7 = null;
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parsecheck();
                                    if (s8 === peg$FAILED) s8 = null;
                                    if (s8 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c48(s1, s3, s4, s5, s6, s7, s8);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsefigure();
            if (s1 === peg$FAILED) s1 = null;
            if (s1 !== peg$FAILED) {
                s2 = peg$parsecolumn();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parserow();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parsestrikeOrDash();
                        if (s4 === peg$FAILED) s4 = null;
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parsecolumn();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parserow();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parsepromotion();
                                    if (s7 === peg$FAILED) s7 = null;
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parsecheck();
                                        if (s8 === peg$FAILED) s8 = null;
                                        if (s8 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c49(s1, s2, s3, s4, s5, s6, s7, s8);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parsefigure();
                if (s1 === peg$FAILED) s1 = null;
                if (s1 !== peg$FAILED) {
                    s2 = peg$parsestrike();
                    if (s2 === peg$FAILED) s2 = null;
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parsecolumn();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parserow();
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parsepromotion();
                                if (s5 === peg$FAILED) s5 = null;
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parsecheck();
                                    if (s6 === peg$FAILED) s6 = null;
                                    if (s6 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c50(s1, s2, s3, s4, s5, s6);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 5) === peg$c51) {
                        s1 = peg$c51;
                        peg$currPos += 5;
                    } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c52);
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parsecheck();
                        if (s2 === peg$FAILED) s2 = null;
                        if (s2 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c53(s2);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 3) === peg$c54) {
                            s1 = peg$c54;
                            peg$currPos += 3;
                        } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) peg$fail(peg$c55);
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parsecheck();
                            if (s2 === peg$FAILED) s2 = null;
                            if (s2 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c56(s2);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parsecheck() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c57) {
            s3 = peg$c57;
            peg$currPos += 2;
        } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c58);
        }
        peg$silentFails--;
        if (s3 === peg$FAILED) s2 = void 0;
        else {
            peg$currPos = s2;
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 43) {
                s3 = peg$c59;
                peg$currPos++;
            } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c60);
            }
            if (s3 !== peg$FAILED) {
                s2 = [
                    s2,
                    s3
                ];
                s1 = s2;
            } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
        } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c61(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 3) === peg$c62) {
                s3 = peg$c62;
                peg$currPos += 3;
            } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c63);
            }
            peg$silentFails--;
            if (s3 === peg$FAILED) s2 = void 0;
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 35) {
                    s3 = peg$c64;
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c65);
                }
                if (s3 !== peg$FAILED) {
                    s2 = [
                        s2,
                        s3
                    ];
                    s1 = s2;
                } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                }
            } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61(s1);
            }
            s0 = s1;
        }
        return s0;
    }
    function peg$parsepromotion() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
            s1 = peg$c66;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c67);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsefigure();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c68(s2);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsenags() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parsenag();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsewhiteSpace();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                s3 = peg$parsenags();
                if (s3 === peg$FAILED) s3 = null;
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c69(s1, s3);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsenag() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 36) {
            s1 = peg$c70;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c71);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseinteger();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c72(s2);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c73) {
                s1 = peg$c73;
                peg$currPos += 2;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c74);
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c75();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c76) {
                    s1 = peg$c76;
                    peg$currPos += 2;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c77);
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c78();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c79) {
                        s1 = peg$c79;
                        peg$currPos += 2;
                    } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c80);
                    }
                    if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c81();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c82) {
                            s1 = peg$c82;
                            peg$currPos += 2;
                        } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) peg$fail(peg$c83);
                        }
                        if (s1 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c84();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 33) {
                                s1 = peg$c85;
                                peg$currPos++;
                            } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) peg$fail(peg$c86);
                            }
                            if (s1 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c87();
                            }
                            s0 = s1;
                            if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                if (input.charCodeAt(peg$currPos) === 63) {
                                    s1 = peg$c88;
                                    peg$currPos++;
                                } else {
                                    s1 = peg$FAILED;
                                    if (peg$silentFails === 0) peg$fail(peg$c89);
                                }
                                if (s1 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c90();
                                }
                                s0 = s1;
                                if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 8252) {
                                        s1 = peg$c91;
                                        peg$currPos++;
                                    } else {
                                        s1 = peg$FAILED;
                                        if (peg$silentFails === 0) peg$fail(peg$c92);
                                    }
                                    if (s1 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c75();
                                    }
                                    s0 = s1;
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 8263) {
                                            s1 = peg$c93;
                                            peg$currPos++;
                                        } else {
                                            s1 = peg$FAILED;
                                            if (peg$silentFails === 0) peg$fail(peg$c94);
                                        }
                                        if (s1 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c78();
                                        }
                                        s0 = s1;
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$currPos;
                                            if (input.charCodeAt(peg$currPos) === 8265) {
                                                s1 = peg$c95;
                                                peg$currPos++;
                                            } else {
                                                s1 = peg$FAILED;
                                                if (peg$silentFails === 0) peg$fail(peg$c96);
                                            }
                                            if (s1 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c81();
                                            }
                                            s0 = s1;
                                            if (s0 === peg$FAILED) {
                                                s0 = peg$currPos;
                                                if (input.charCodeAt(peg$currPos) === 8264) {
                                                    s1 = peg$c97;
                                                    peg$currPos++;
                                                } else {
                                                    s1 = peg$FAILED;
                                                    if (peg$silentFails === 0) peg$fail(peg$c98);
                                                }
                                                if (s1 !== peg$FAILED) {
                                                    peg$savedPos = s0;
                                                    s1 = peg$c84();
                                                }
                                                s0 = s1;
                                                if (s0 === peg$FAILED) {
                                                    s0 = peg$currPos;
                                                    if (input.charCodeAt(peg$currPos) === 9633) {
                                                        s1 = peg$c99;
                                                        peg$currPos++;
                                                    } else {
                                                        s1 = peg$FAILED;
                                                        if (peg$silentFails === 0) peg$fail(peg$c100);
                                                    }
                                                    if (s1 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c101();
                                                    }
                                                    s0 = s1;
                                                    if (s0 === peg$FAILED) {
                                                        s0 = peg$currPos;
                                                        if (input.charCodeAt(peg$currPos) === 61) {
                                                            s1 = peg$c66;
                                                            peg$currPos++;
                                                        } else {
                                                            s1 = peg$FAILED;
                                                            if (peg$silentFails === 0) peg$fail(peg$c67);
                                                        }
                                                        if (s1 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c102();
                                                        }
                                                        s0 = s1;
                                                        if (s0 === peg$FAILED) {
                                                            s0 = peg$currPos;
                                                            if (input.charCodeAt(peg$currPos) === 8734) {
                                                                s1 = peg$c103;
                                                                peg$currPos++;
                                                            } else {
                                                                s1 = peg$FAILED;
                                                                if (peg$silentFails === 0) peg$fail(peg$c104);
                                                            }
                                                            if (s1 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c105();
                                                            }
                                                            s0 = s1;
                                                            if (s0 === peg$FAILED) {
                                                                s0 = peg$currPos;
                                                                if (input.charCodeAt(peg$currPos) === 10866) {
                                                                    s1 = peg$c106;
                                                                    peg$currPos++;
                                                                } else {
                                                                    s1 = peg$FAILED;
                                                                    if (peg$silentFails === 0) peg$fail(peg$c107);
                                                                }
                                                                if (s1 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c108();
                                                                }
                                                                s0 = s1;
                                                                if (s0 === peg$FAILED) {
                                                                    s0 = peg$currPos;
                                                                    if (input.charCodeAt(peg$currPos) === 10865) {
                                                                        s1 = peg$c109;
                                                                        peg$currPos++;
                                                                    } else {
                                                                        s1 = peg$FAILED;
                                                                        if (peg$silentFails === 0) peg$fail(peg$c110);
                                                                    }
                                                                    if (s1 !== peg$FAILED) {
                                                                        peg$savedPos = s0;
                                                                        s1 = peg$c111();
                                                                    }
                                                                    s0 = s1;
                                                                    if (s0 === peg$FAILED) {
                                                                        s0 = peg$currPos;
                                                                        if (input.charCodeAt(peg$currPos) === 177) {
                                                                            s1 = peg$c112;
                                                                            peg$currPos++;
                                                                        } else {
                                                                            s1 = peg$FAILED;
                                                                            if (peg$silentFails === 0) peg$fail(peg$c113);
                                                                        }
                                                                        if (s1 !== peg$FAILED) {
                                                                            peg$savedPos = s0;
                                                                            s1 = peg$c114();
                                                                        }
                                                                        s0 = s1;
                                                                        if (s0 === peg$FAILED) {
                                                                            s0 = peg$currPos;
                                                                            if (input.charCodeAt(peg$currPos) === 8723) {
                                                                                s1 = peg$c115;
                                                                                peg$currPos++;
                                                                            } else {
                                                                                s1 = peg$FAILED;
                                                                                if (peg$silentFails === 0) peg$fail(peg$c116);
                                                                            }
                                                                            if (s1 !== peg$FAILED) {
                                                                                peg$savedPos = s0;
                                                                                s1 = peg$c117();
                                                                            }
                                                                            s0 = s1;
                                                                            if (s0 === peg$FAILED) {
                                                                                s0 = peg$currPos;
                                                                                if (input.substr(peg$currPos, 2) === peg$c57) {
                                                                                    s1 = peg$c57;
                                                                                    peg$currPos += 2;
                                                                                } else {
                                                                                    s1 = peg$FAILED;
                                                                                    if (peg$silentFails === 0) peg$fail(peg$c58);
                                                                                }
                                                                                if (s1 !== peg$FAILED) {
                                                                                    peg$savedPos = s0;
                                                                                    s1 = peg$c118();
                                                                                }
                                                                                s0 = s1;
                                                                                if (s0 === peg$FAILED) {
                                                                                    s0 = peg$currPos;
                                                                                    if (input.substr(peg$currPos, 2) === peg$c119) {
                                                                                        s1 = peg$c119;
                                                                                        peg$currPos += 2;
                                                                                    } else {
                                                                                        s1 = peg$FAILED;
                                                                                        if (peg$silentFails === 0) peg$fail(peg$c120);
                                                                                    }
                                                                                    if (s1 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c121();
                                                                                    }
                                                                                    s0 = s1;
                                                                                    if (s0 === peg$FAILED) {
                                                                                        s0 = peg$currPos;
                                                                                        if (input.charCodeAt(peg$currPos) === 10752) {
                                                                                            s1 = peg$c122;
                                                                                            peg$currPos++;
                                                                                        } else {
                                                                                            s1 = peg$FAILED;
                                                                                            if (peg$silentFails === 0) peg$fail(peg$c123);
                                                                                        }
                                                                                        if (s1 !== peg$FAILED) {
                                                                                            peg$savedPos = s0;
                                                                                            s1 = peg$c124();
                                                                                        }
                                                                                        s0 = s1;
                                                                                        if (s0 === peg$FAILED) {
                                                                                            s0 = peg$currPos;
                                                                                            if (input.charCodeAt(peg$currPos) === 10227) {
                                                                                                s1 = peg$c125;
                                                                                                peg$currPos++;
                                                                                            } else {
                                                                                                s1 = peg$FAILED;
                                                                                                if (peg$silentFails === 0) peg$fail(peg$c126);
                                                                                            }
                                                                                            if (s1 !== peg$FAILED) {
                                                                                                peg$savedPos = s0;
                                                                                                s1 = peg$c127();
                                                                                            }
                                                                                            s0 = s1;
                                                                                            if (s0 === peg$FAILED) {
                                                                                                s0 = peg$currPos;
                                                                                                if (input.charCodeAt(peg$currPos) === 8594) {
                                                                                                    s1 = peg$c128;
                                                                                                    peg$currPos++;
                                                                                                } else {
                                                                                                    s1 = peg$FAILED;
                                                                                                    if (peg$silentFails === 0) peg$fail(peg$c129);
                                                                                                }
                                                                                                if (s1 !== peg$FAILED) {
                                                                                                    peg$savedPos = s0;
                                                                                                    s1 = peg$c130();
                                                                                                }
                                                                                                s0 = s1;
                                                                                                if (s0 === peg$FAILED) {
                                                                                                    s0 = peg$currPos;
                                                                                                    if (input.charCodeAt(peg$currPos) === 8593) {
                                                                                                        s1 = peg$c131;
                                                                                                        peg$currPos++;
                                                                                                    } else {
                                                                                                        s1 = peg$FAILED;
                                                                                                        if (peg$silentFails === 0) peg$fail(peg$c132);
                                                                                                    }
                                                                                                    if (s1 !== peg$FAILED) {
                                                                                                        peg$savedPos = s0;
                                                                                                        s1 = peg$c133();
                                                                                                    }
                                                                                                    s0 = s1;
                                                                                                    if (s0 === peg$FAILED) {
                                                                                                        s0 = peg$currPos;
                                                                                                        if (input.charCodeAt(peg$currPos) === 8646) {
                                                                                                            s1 = peg$c134;
                                                                                                            peg$currPos++;
                                                                                                        } else {
                                                                                                            s1 = peg$FAILED;
                                                                                                            if (peg$silentFails === 0) peg$fail(peg$c135);
                                                                                                        }
                                                                                                        if (s1 !== peg$FAILED) {
                                                                                                            peg$savedPos = s0;
                                                                                                            s1 = peg$c136();
                                                                                                        }
                                                                                                        s0 = s1;
                                                                                                        if (s0 === peg$FAILED) {
                                                                                                            s0 = peg$currPos;
                                                                                                            if (input.charCodeAt(peg$currPos) === 68) {
                                                                                                                s1 = peg$c137;
                                                                                                                peg$currPos++;
                                                                                                            } else {
                                                                                                                s1 = peg$FAILED;
                                                                                                                if (peg$silentFails === 0) peg$fail(peg$c138);
                                                                                                            }
                                                                                                            if (s1 !== peg$FAILED) {
                                                                                                                peg$savedPos = s0;
                                                                                                                s1 = peg$c139();
                                                                                                            }
                                                                                                            s0 = s1;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parsediscriminator() {
        var s0;
        s0 = peg$parsecolumn();
        if (s0 === peg$FAILED) s0 = peg$parserow();
        return s0;
    }
    function peg$parsecheckdisc() {
        var s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$parsediscriminator();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsestrike();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                s3 = peg$parsecolumn();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parserow();
                    if (s4 !== peg$FAILED) {
                        s1 = [
                            s1,
                            s2,
                            s3,
                            s4
                        ];
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsemoveEllipse() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parseinteger();
        if (s1 !== peg$FAILED) {
            s2 = [];
            if (input.charCodeAt(peg$currPos) === 46) {
                s3 = peg$c38;
                peg$currPos++;
            } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c39);
            }
            if (s3 !== peg$FAILED) while(s3 !== peg$FAILED){
                s2.push(s3);
                if (input.charCodeAt(peg$currPos) === 46) {
                    s3 = peg$c38;
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c39);
                }
            }
            else s2 = peg$FAILED;
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c40(s1);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsefigure() {
        var s0;
        if (peg$c140.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c141);
        }
        return s0;
    }
    function peg$parsecolumn() {
        var s0;
        if (peg$c142.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c143);
        }
        return s0;
    }
    function peg$parserow() {
        var s0;
        if (peg$c144.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c145);
        }
        return s0;
    }
    function peg$parsestrike() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 120) {
            s0 = peg$c146;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c147);
        }
        return s0;
    }
    function peg$parsestrikeOrDash() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 120) {
            s0 = peg$c146;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c147);
        }
        if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
                s0 = peg$c148;
                peg$currPos++;
            } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c149);
            }
        }
        return s0;
    }
    function makeInteger(o) {
        return parseInt(o.join(""), 10);
    }
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) return peg$result;
    else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) peg$fail(peg$endExpectation());
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
class pgnParser {
    static parse(history, options) {
        return peg$parse(history, options);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amMsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ES6 Wrapper for chess.js
 * The API of ChessJs will be the same as of chess.js
 */ parcelHelpers.export(exports, "Chess", ()=>Chess
);
/*
 * Copyright (c) 2020, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/ /* minified license below  */ /* @license
 * Copyright (c) 2018, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */ var Chess = function(fen1) {
    var BLACK = 'b';
    var WHITE = 'w';
    var EMPTY = -1;
    var PAWN = 'p';
    var KNIGHT = 'n';
    var BISHOP = 'b';
    var ROOK = 'r';
    var QUEEN = 'q';
    var KING = 'k';
    var SYMBOLS = 'pnbrqkPNBRQK';
    var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    var POSSIBLE_RESULTS = [
        '1-0',
        '0-1',
        '1/2-1/2',
        '*'
    ];
    var PAWN_OFFSETS = {
        b: [
            16,
            32,
            17,
            15
        ],
        w: [
            -16,
            -32,
            -17,
            -15
        ]
    };
    var PIECE_OFFSETS = {
        n: [
            -18,
            -33,
            -31,
            -14,
            18,
            33,
            31,
            14
        ],
        b: [
            -17,
            -15,
            17,
            15
        ],
        r: [
            -16,
            1,
            16,
            -1
        ],
        q: [
            -17,
            -16,
            -15,
            1,
            17,
            16,
            15,
            -1
        ],
        k: [
            -17,
            -16,
            -15,
            1,
            17,
            16,
            15,
            -1
        ]
    };
    // prettier-ignore
    var ATTACKS = [
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        24,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        2,
        24,
        2,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        53,
        56,
        53,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        24,
        24,
        24,
        24,
        24,
        56,
        0,
        56,
        24,
        24,
        24,
        24,
        24,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        53,
        56,
        53,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        2,
        24,
        2,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        24,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        20
    ];
    // prettier-ignore
    var RAYS = [
        17,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        17,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        16,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        16,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        16,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        -16,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        -16,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        -16,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        0,
        -17,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        0,
        0,
        -17
    ];
    var SHIFTS = {
        p: 0,
        n: 1,
        b: 2,
        r: 3,
        q: 4,
        k: 5
    };
    var FLAGS = {
        NORMAL: 'n',
        CAPTURE: 'c',
        BIG_PAWN: 'b',
        EP_CAPTURE: 'e',
        PROMOTION: 'p',
        KSIDE_CASTLE: 'k',
        QSIDE_CASTLE: 'q'
    };
    var BITS = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    };
    var RANK_1 = 7;
    var RANK_2 = 6;
    var RANK_3 = 5;
    var RANK_4 = 4;
    var RANK_5 = 3;
    var RANK_6 = 2;
    var RANK_7 = 1;
    var RANK_8 = 0;
    // prettier-ignore
    var SQUARES = {
        a8: 0,
        b8: 1,
        c8: 2,
        d8: 3,
        e8: 4,
        f8: 5,
        g8: 6,
        h8: 7,
        a7: 16,
        b7: 17,
        c7: 18,
        d7: 19,
        e7: 20,
        f7: 21,
        g7: 22,
        h7: 23,
        a6: 32,
        b6: 33,
        c6: 34,
        d6: 35,
        e6: 36,
        f6: 37,
        g6: 38,
        h6: 39,
        a5: 48,
        b5: 49,
        c5: 50,
        d5: 51,
        e5: 52,
        f5: 53,
        g5: 54,
        h5: 55,
        a4: 64,
        b4: 65,
        c4: 66,
        d4: 67,
        e4: 68,
        f4: 69,
        g4: 70,
        h4: 71,
        a3: 80,
        b3: 81,
        c3: 82,
        d3: 83,
        e3: 84,
        f3: 85,
        g3: 86,
        h3: 87,
        a2: 96,
        b2: 97,
        c2: 98,
        d2: 99,
        e2: 100,
        f2: 101,
        g2: 102,
        h2: 103,
        a1: 112,
        b1: 113,
        c1: 114,
        d1: 115,
        e1: 116,
        f1: 117,
        g1: 118,
        h1: 119
    };
    var ROOKS = {
        w: [
            {
                square: SQUARES.a1,
                flag: BITS.QSIDE_CASTLE
            },
            {
                square: SQUARES.h1,
                flag: BITS.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: SQUARES.a8,
                flag: BITS.QSIDE_CASTLE
            },
            {
                square: SQUARES.h8,
                flag: BITS.KSIDE_CASTLE
            }
        ]
    };
    var board1 = new Array(128);
    var kings = {
        w: EMPTY,
        b: EMPTY
    };
    var turn = WHITE;
    var castling = {
        w: 0,
        b: 0
    };
    var ep_square = EMPTY;
    var half_moves = 0;
    var move_number = 1;
    var history = [];
    var header1 = {
    };
    /* if the user passes in a fen string, load it, else default to
     * starting position
     */ if (typeof fen1 === 'undefined') load(DEFAULT_POSITION);
    else load(fen1);
    function clear(keep_headers) {
        if (typeof keep_headers === 'undefined') keep_headers = false;
        board1 = new Array(128);
        kings = {
            w: EMPTY,
            b: EMPTY
        };
        turn = WHITE;
        castling = {
            w: 0,
            b: 0
        };
        ep_square = EMPTY;
        half_moves = 0;
        move_number = 1;
        history = [];
        if (!keep_headers) header1 = {
        };
        update_setup(generate_fen());
    }
    function reset() {
        load(DEFAULT_POSITION);
    }
    function load(fen, keep_headers) {
        if (typeof keep_headers === 'undefined') keep_headers = false;
        var tokens = fen.split(/\s+/);
        var position = tokens[0];
        var square = 0;
        if (!validate_fen(fen).valid) return false;
        clear(keep_headers);
        for(var i = 0; i < position.length; i++){
            var piece = position.charAt(i);
            if (piece === '/') square += 8;
            else if (is_digit(piece)) square += parseInt(piece, 10);
            else {
                var color = piece < 'a' ? WHITE : BLACK;
                put({
                    type: piece.toLowerCase(),
                    color: color
                }, algebraic(square));
                square++;
            }
        }
        turn = tokens[1];
        if (tokens[2].indexOf('K') > -1) castling.w |= BITS.KSIDE_CASTLE;
        if (tokens[2].indexOf('Q') > -1) castling.w |= BITS.QSIDE_CASTLE;
        if (tokens[2].indexOf('k') > -1) castling.b |= BITS.KSIDE_CASTLE;
        if (tokens[2].indexOf('q') > -1) castling.b |= BITS.QSIDE_CASTLE;
        ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]];
        half_moves = parseInt(tokens[4], 10);
        move_number = parseInt(tokens[5], 10);
        update_setup(generate_fen());
        return true;
    }
    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */ function validate_fen(fen) {
        var errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: '4th field (en-passant square) is invalid.',
            5: '3rd field (castling availability) is invalid.',
            6: '2nd field (side to move) is invalid.',
            7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: 'Illegal en-passant square'
        };
        /* 1st criterion: 6 space-seperated fields? */ var tokens = fen.split(/\s+/);
        if (tokens.length !== 6) return {
            valid: false,
            error_number: 1,
            error: errors[1]
        };
        /* 2nd criterion: move number field is a integer value > 0? */ if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) return {
            valid: false,
            error_number: 2,
            error: errors[2]
        };
        /* 3rd criterion: half move counter is an integer >= 0? */ if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) return {
            valid: false,
            error_number: 3,
            error: errors[3]
        };
        /* 4th criterion: 4th field is a valid e.p.-string? */ if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) return {
            valid: false,
            error_number: 4,
            error: errors[4]
        };
        /* 5th criterion: 3th field is a valid castle-string? */ if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) return {
            valid: false,
            error_number: 5,
            error: errors[5]
        };
        /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */ if (!/^(w|b)$/.test(tokens[1])) return {
            valid: false,
            error_number: 6,
            error: errors[6]
        };
        /* 7th criterion: 1st field contains 8 rows? */ var rows = tokens[0].split('/');
        if (rows.length !== 8) return {
            valid: false,
            error_number: 7,
            error: errors[7]
        };
        /* 8th criterion: every row is valid? */ for(var i = 0; i < rows.length; i++){
            /* check for right sum of fields AND not two numbers in succession */ var sum_fields = 0;
            var previous_was_number = false;
            for(var k = 0; k < rows[i].length; k++)if (!isNaN(rows[i][k])) {
                if (previous_was_number) return {
                    valid: false,
                    error_number: 8,
                    error: errors[8]
                };
                sum_fields += parseInt(rows[i][k], 10);
                previous_was_number = true;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) return {
                    valid: false,
                    error_number: 9,
                    error: errors[9]
                };
                sum_fields += 1;
                previous_was_number = false;
            }
            if (sum_fields !== 8) return {
                valid: false,
                error_number: 10,
                error: errors[10]
            };
        }
        if (tokens[3][1] == '3' && tokens[1] == 'w' || tokens[3][1] == '6' && tokens[1] == 'b') return {
            valid: false,
            error_number: 11,
            error: errors[11]
        };
        /* everything's okay! */ return {
            valid: true,
            error_number: 0,
            error: errors[0]
        };
    }
    function generate_fen() {
        var empty = 0;
        var fen = '';
        for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
            if (board1[i] == null) empty++;
            else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                var color = board1[i].color;
                var piece = board1[i].type;
                fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
            }
            if (i + 1 & 136) {
                if (empty > 0) fen += empty;
                if (i !== SQUARES.h1) fen += '/';
                empty = 0;
                i += 8;
            }
        }
        var cflags = '';
        if (castling[WHITE] & BITS.KSIDE_CASTLE) cflags += 'K';
        if (castling[WHITE] & BITS.QSIDE_CASTLE) cflags += 'Q';
        if (castling[BLACK] & BITS.KSIDE_CASTLE) cflags += 'k';
        if (castling[BLACK] & BITS.QSIDE_CASTLE) cflags += 'q';
        /* do we have an empty castling flag? */ cflags = cflags || '-';
        var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square);
        return [
            fen,
            turn,
            cflags,
            epflags,
            half_moves,
            move_number
        ].join(' ');
    }
    function set_header(args) {
        for(var i = 0; i < args.length; i += 2)if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') header1[args[i]] = args[i + 1];
        return header1;
    }
    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */ function update_setup(fen) {
        if (history.length > 0) return;
        if (fen !== DEFAULT_POSITION) {
            header1['SetUp'] = '1';
            header1['FEN'] = fen;
        } else {
            delete header1['SetUp'];
            delete header1['FEN'];
        }
    }
    function get(square) {
        var piece = board1[SQUARES[square]];
        return piece ? {
            type: piece.type,
            color: piece.color
        } : null;
    }
    function put(piece, square) {
        /* check for valid piece object */ if (!('type' in piece && 'color' in piece)) return false;
        /* check for piece */ if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) return false;
        /* check for valid square */ if (!(square in SQUARES)) return false;
        var sq = SQUARES[square];
        /* don't let the user place more than one king */ if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) return false;
        board1[sq] = {
            type: piece.type,
            color: piece.color
        };
        if (piece.type === KING) kings[piece.color] = sq;
        update_setup(generate_fen());
        return true;
    }
    function remove(square) {
        var piece = get(square);
        board1[SQUARES[square]] = null;
        if (piece && piece.type === KING) kings[piece.color] = EMPTY;
        update_setup(generate_fen());
        return piece;
    }
    function build_move(board, from, to, flags, promotion) {
        var move = {
            color: turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type
        };
        if (promotion) {
            move.flags |= BITS.PROMOTION;
            move.promotion = promotion;
        }
        if (board[to]) move.captured = board[to].type;
        else if (flags & BITS.EP_CAPTURE) move.captured = PAWN;
        return move;
    }
    function generate_moves(options) {
        function add_move(board, moves, from, to, flags) {
            /* if pawn promotion */ if (board[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
                var pieces = [
                    QUEEN,
                    ROOK,
                    BISHOP,
                    KNIGHT
                ];
                for(var i = 0, len = pieces.length; i < len; i++)moves.push(build_move(board, from, to, flags, pieces[i]));
            } else moves.push(build_move(board, from, to, flags));
        }
        var moves1 = [];
        var us = turn;
        var them = swap_color(us);
        var second_rank = {
            b: RANK_7,
            w: RANK_2
        };
        var first_sq = SQUARES.a8;
        var last_sq = SQUARES.h1;
        var single_square = false;
        /* do we want legal moves? */ var legal = typeof options !== 'undefined' && 'legal' in options ? options.legal : true;
        /* are we generating moves for a single square? */ if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in SQUARES) {
                first_sq = last_sq = SQUARES[options.square];
                single_square = true;
            } else /* invalid square */ return [];
        }
        for(var i1 = first_sq; i1 <= last_sq; i1++){
            /* did we run off the end of the board */ if (i1 & 136) {
                i1 += 7;
                continue;
            }
            var piece = board1[i1];
            if (piece == null || piece.color !== us) continue;
            if (piece.type === PAWN) {
                /* single square, non-capturing */ var square = i1 + PAWN_OFFSETS[us][0];
                if (board1[square] == null) {
                    add_move(board1, moves1, i1, square, BITS.NORMAL);
                    /* double square */ var square = i1 + PAWN_OFFSETS[us][1];
                    if (second_rank[us] === rank(i1) && board1[square] == null) add_move(board1, moves1, i1, square, BITS.BIG_PAWN);
                }
                /* pawn captures */ for(j = 2; j < 4; j++){
                    var square = i1 + PAWN_OFFSETS[us][j];
                    if (square & 136) continue;
                    if (board1[square] != null && board1[square].color === them) add_move(board1, moves1, i1, square, BITS.CAPTURE);
                    else if (square === ep_square) add_move(board1, moves1, i1, ep_square, BITS.EP_CAPTURE);
                }
            } else for(var j = 0, len1 = PIECE_OFFSETS[piece.type].length; j < len1; j++){
                var offset = PIECE_OFFSETS[piece.type][j];
                var square = i1;
                while(true){
                    square += offset;
                    if (square & 136) break;
                    if (board1[square] == null) add_move(board1, moves1, i1, square, BITS.NORMAL);
                    else {
                        if (board1[square].color === us) break;
                        add_move(board1, moves1, i1, square, BITS.CAPTURE);
                        break;
                    }
                    /* break, if knight or king */ if (piece.type === 'n' || piece.type === 'k') break;
                }
            }
        }
        /* check for castling if: a) we're generating all moves, or b) we're doing
         * single square move generation on the king's square
         */ if (!single_square || last_sq === kings[us]) {
            /* king-side castling */ if (castling[us] & BITS.KSIDE_CASTLE) {
                var castling_from = kings[us];
                var castling_to = castling_from + 2;
                if (board1[castling_from + 1] == null && board1[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) add_move(board1, moves1, kings[us], castling_to, BITS.KSIDE_CASTLE);
            }
            /* queen-side castling */ if (castling[us] & BITS.QSIDE_CASTLE) {
                var castling_from = kings[us];
                var castling_to = castling_from - 2;
                if (board1[castling_from - 1] == null && board1[castling_from - 2] == null && board1[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) add_move(board1, moves1, kings[us], castling_to, BITS.QSIDE_CASTLE);
            }
        }
        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */ if (!legal) return moves1;
        /* filter out illegal moves */ var legal_moves = [];
        for(var i1 = 0, len1 = moves1.length; i1 < len1; i1++){
            make_move(moves1[i1]);
            if (!king_attacked(us)) legal_moves.push(moves1[i1]);
            undo_move();
        }
        return legal_moves;
    }
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */ function move_to_san(move, sloppy) {
        var output = '';
        if (move.flags & BITS.KSIDE_CASTLE) output = 'O-O';
        else if (move.flags & BITS.QSIDE_CASTLE) output = 'O-O-O';
        else {
            var disambiguator = get_disambiguator(move, sloppy);
            if (move.piece !== PAWN) output += move.piece.toUpperCase() + disambiguator;
            if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
                if (move.piece === PAWN) output += algebraic(move.from)[0];
                output += 'x';
            }
            output += algebraic(move.to);
            if (move.flags & BITS.PROMOTION) output += '=' + move.promotion.toUpperCase();
        }
        make_move(move);
        if (in_check()) {
            if (in_checkmate()) output += '#';
            else output += '+';
        }
        undo_move();
        return output;
    }
    // parses all of the decorators out of a SAN string
    function stripped_san(move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }
    function attacked(color, square) {
        for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
            /* did we run off the end of the board */ if (i & 136) {
                i += 7;
                continue;
            }
            /* if empty square or wrong color */ if (board1[i] == null || board1[i].color !== color) continue;
            var piece = board1[i];
            var difference = i - square;
            var index = difference + 119;
            if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
                if (piece.type === PAWN) {
                    if (difference > 0) {
                        if (piece.color === WHITE) return true;
                    } else {
                        if (piece.color === BLACK) return true;
                    }
                    continue;
                }
                /* if the piece is a knight or a king */ if (piece.type === 'n' || piece.type === 'k') return true;
                var offset = RAYS[index];
                var j = i + offset;
                var blocked = false;
                while(j !== square){
                    if (board1[j] != null) {
                        blocked = true;
                        break;
                    }
                    j += offset;
                }
                if (!blocked) return true;
            }
        }
        return false;
    }
    function king_attacked(color) {
        return attacked(swap_color(color), kings[color]);
    }
    function in_check() {
        return king_attacked(turn);
    }
    function in_checkmate() {
        return in_check() && generate_moves().length === 0;
    }
    function in_stalemate() {
        return !in_check() && generate_moves().length === 0;
    }
    function insufficient_material() {
        var pieces = {
        };
        var bishops = [];
        var num_pieces = 0;
        var sq_color = 0;
        for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
            sq_color = (sq_color + 1) % 2;
            if (i & 136) {
                i += 7;
                continue;
            }
            var piece = board1[i];
            if (piece) {
                pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
                if (piece.type === BISHOP) bishops.push(sq_color);
                num_pieces++;
            }
        }
        /* k vs. k */ if (num_pieces === 2) return true;
        else if (/* k vs. kn .... or .... k vs. kb */ num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) return true;
        else if (num_pieces === pieces[BISHOP] + 2) {
            /* kb vs. kb where any number of bishops are all on the same color */ var sum = 0;
            var len = bishops.length;
            for(var i = 0; i < len; i++)sum += bishops[i];
            if (sum === 0 || sum === len) return true;
        }
        return false;
    }
    function in_threefold_repetition() {
        /* TODO: while this function is fine for casual use, a better
         * implementation would use a Zobrist key (instead of FEN). the
         * Zobrist key would be maintained in the make_move/undo_move functions,
         * avoiding the costly that we do below.
         */ var moves = [];
        var positions = {
        };
        var repetition = false;
        while(true){
            var move = undo_move();
            if (!move) break;
            moves.push(move);
        }
        while(true){
            /* remove the last two fields in the FEN string, they're not needed
             * when checking for draw by rep */ var fen = generate_fen().split(' ').slice(0, 4).join(' ');
            /* has the position occurred three or move times */ positions[fen] = fen in positions ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) repetition = true;
            if (!moves.length) break;
            make_move(moves.pop());
        }
        return repetition;
    }
    function push(move) {
        history.push({
            move: move,
            kings: {
                b: kings.b,
                w: kings.w
            },
            turn: turn,
            castling: {
                b: castling.b,
                w: castling.w
            },
            ep_square: ep_square,
            half_moves: half_moves,
            move_number: move_number
        });
    }
    function make_move(move) {
        var us = turn;
        var them = swap_color(us);
        push(move);
        board1[move.to] = board1[move.from];
        board1[move.from] = null;
        /* if ep capture, remove the captured pawn */ if (move.flags & BITS.EP_CAPTURE) {
            if (turn === BLACK) board1[move.to - 16] = null;
            else board1[move.to + 16] = null;
        }
        /* if pawn promotion, replace with new piece */ if (move.flags & BITS.PROMOTION) board1[move.to] = {
            type: move.promotion,
            color: us
        };
        /* if we moved the king */ if (board1[move.to].type === KING) {
            kings[board1[move.to].color] = move.to;
            /* if we castled, move the rook next to the king */ if (move.flags & BITS.KSIDE_CASTLE) {
                var castling_to = move.to - 1;
                var castling_from = move.to + 1;
                board1[castling_to] = board1[castling_from];
                board1[castling_from] = null;
            } else if (move.flags & BITS.QSIDE_CASTLE) {
                var castling_to = move.to + 1;
                var castling_from = move.to - 2;
                board1[castling_to] = board1[castling_from];
                board1[castling_from] = null;
            }
            /* turn off castling */ castling[us] = '';
        }
        /* turn off castling if we move a rook */ if (castling[us]) {
            for(var i = 0, len = ROOKS[us].length; i < len; i++)if (move.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
                castling[us] ^= ROOKS[us][i].flag;
                break;
            }
        }
        /* turn off castling if we capture a rook */ if (castling[them]) {
            for(var i = 0, len = ROOKS[them].length; i < len; i++)if (move.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
                castling[them] ^= ROOKS[them][i].flag;
                break;
            }
        }
        /* if big pawn move, update the en passant square */ if (move.flags & BITS.BIG_PAWN) {
            if (turn === 'b') ep_square = move.to - 16;
            else ep_square = move.to + 16;
        } else ep_square = EMPTY;
        /* reset the 50 move counter if a pawn is moved or a piece is captured */ if (move.piece === PAWN) half_moves = 0;
        else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) half_moves = 0;
        else half_moves++;
        if (turn === BLACK) move_number++;
        turn = swap_color(turn);
    }
    function undo_move() {
        var old = history.pop();
        if (old == null) return null;
        var move = old.move;
        kings = old.kings;
        turn = old.turn;
        castling = old.castling;
        ep_square = old.ep_square;
        half_moves = old.half_moves;
        move_number = old.move_number;
        var us = turn;
        var them = swap_color(turn);
        board1[move.from] = board1[move.to];
        board1[move.from].type = move.piece // to undo any promotions
        ;
        board1[move.to] = null;
        if (move.flags & BITS.CAPTURE) board1[move.to] = {
            type: move.captured,
            color: them
        };
        else if (move.flags & BITS.EP_CAPTURE) {
            var index;
            if (us === BLACK) index = move.to - 16;
            else index = move.to + 16;
            board1[index] = {
                type: PAWN,
                color: them
            };
        }
        if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
            var castling_to, castling_from;
            if (move.flags & BITS.KSIDE_CASTLE) {
                castling_to = move.to + 1;
                castling_from = move.to - 1;
            } else if (move.flags & BITS.QSIDE_CASTLE) {
                castling_to = move.to - 2;
                castling_from = move.to + 1;
            }
            board1[castling_to] = board1[castling_from];
            board1[castling_from] = null;
        }
        return move;
    }
    /* this function is used to uniquely identify ambiguous moves */ function get_disambiguator(move, sloppy) {
        var moves = generate_moves({
            legal: !sloppy
        });
        var from = move.from;
        var to = move.to;
        var piece = move.piece;
        var ambiguities = 0;
        var same_rank = 0;
        var same_file = 0;
        for(var i = 0, len = moves.length; i < len; i++){
            var ambig_from = moves[i].from;
            var ambig_to = moves[i].to;
            var ambig_piece = moves[i].piece;
            /* if a move of the same piece type ends on the same to square, we'll
             * need to add a disambiguator to the algebraic notation
             */ if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++;
                if (rank(from) === rank(ambig_from)) same_rank++;
                if (file(from) === file(ambig_from)) same_file++;
            }
        }
        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
             * the move in question, use the square as the disambiguator
             */ if (same_rank > 0 && same_file > 0) return algebraic(from);
            else if (same_file > 0) /* if the moving piece rests on the same file, use the rank symbol as the
                 * disambiguator
                 */ return algebraic(from).charAt(1);
            else /* else use the file symbol */ return algebraic(from).charAt(0);
        }
        return '';
    }
    function ascii() {
        var s = '   +------------------------+\n';
        for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
            /* display the rank */ if (file(i) === 0) s += ' ' + '87654321'[rank(i)] + ' |';
            /* empty piece */ if (board1[i] == null) s += ' . ';
            else {
                var piece = board1[i].type;
                var color = board1[i].color;
                var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
                s += ' ' + symbol + ' ';
            }
            if (i + 1 & 136) {
                s += '|\n';
                i += 8;
            }
        }
        s += '   +------------------------+\n';
        s += '     a  b  c  d  e  f  g  h\n';
        return s;
    }
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    function move_from_san(move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        var clean_move = stripped_san(move);
        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        if (sloppy) {
            var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
            if (matches) {
                var piece = matches[1];
                var from = matches[2];
                var to = matches[3];
                var promotion = matches[4];
            }
        }
        var moves = generate_moves();
        for(var i = 0, len = moves.length; i < len; i++){
            // try the strict parser first, then the sloppy parser if requested
            // by the user
            if (clean_move === stripped_san(move_to_san(moves[i])) || sloppy && clean_move === stripped_san(move_to_san(moves[i], true))) return moves[i];
            else {
                if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) return moves[i];
            }
        }
        return null;
    }
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/ function rank(i) {
        return i >> 4;
    }
    function file(i) {
        return i & 15;
    }
    function algebraic(i) {
        var f = file(i), r = rank(i);
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    }
    function swap_color(c) {
        return c === WHITE ? BLACK : WHITE;
    }
    function is_digit(c) {
        return '0123456789'.indexOf(c) !== -1;
    }
    /* pretty = external move object */ function make_pretty(ugly_move) {
        var move = clone(ugly_move);
        move.san = move_to_san(move, false);
        move.to = algebraic(move.to);
        move.from = algebraic(move.from);
        var flags = '';
        for(var flag in BITS)if (BITS[flag] & move.flags) flags += FLAGS[flag];
        move.flags = flags;
        return move;
    }
    function clone(obj) {
        var dupe = obj instanceof Array ? [] : {
        };
        for(var property in obj)if (typeof property === 'object') dupe[property] = clone(obj[property]);
        else dupe[property] = obj[property];
        return dupe;
    }
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/ function perft(depth) {
        var moves = generate_moves({
            legal: false
        });
        var nodes = 0;
        var color = turn;
        for(var i = 0, len = moves.length; i < len; i++){
            make_move(moves[i]);
            if (!king_attacked(color)) {
                if (depth - 1 > 0) {
                    var child_nodes = perft(depth - 1);
                    nodes += child_nodes;
                } else nodes++;
            }
            undo_move();
        }
        return nodes;
    }
    return {
        /***************************************************************************
         * PUBLIC CONSTANTS (is there a better way to do this?)
         **************************************************************************/ WHITE: WHITE,
        BLACK: BLACK,
        PAWN: PAWN,
        KNIGHT: KNIGHT,
        BISHOP: BISHOP,
        ROOK: ROOK,
        QUEEN: QUEEN,
        KING: KING,
        SQUARES: (function() {
            /* from the ECMA-262 spec (section 12.6.4):
             * "The mechanics of enumerating the properties ... is
             * implementation dependent"
             * so: for (var sq in SQUARES) { keys.push(sq); } might not be
             * ordered correctly
             */ var keys = [];
            for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
                if (i & 136) {
                    i += 7;
                    continue;
                }
                keys.push(algebraic(i));
            }
            return keys;
        })(),
        FLAGS: FLAGS,
        /***************************************************************************
         * PUBLIC API
         **************************************************************************/ load: function(fen) {
            return load(fen);
        },
        reset: function() {
            return reset();
        },
        moves: function(options) {
            /* The internal representation of a chess move is in 0x88 format, and
             * not meant to be human-readable.  The code below converts the 0x88
             * square coordinates to algebraic coordinates.  It also prunes an
             * unnecessary move keys resulting from a verbose call.
             */ var ugly_moves = generate_moves(options);
            var moves = [];
            for(var i = 0, len = ugly_moves.length; i < len; i++)/* does the user want a full move object (most likely not), or just
                 * SAN
                 */ if (typeof options !== 'undefined' && 'verbose' in options && options.verbose) moves.push(make_pretty(ugly_moves[i]));
            else moves.push(move_to_san(ugly_moves[i], false));
            return moves;
        },
        in_check: function() {
            return in_check();
        },
        in_checkmate: function() {
            return in_checkmate();
        },
        in_stalemate: function() {
            return in_stalemate();
        },
        in_draw: function() {
            return half_moves >= 100 || in_stalemate() || insufficient_material() || in_threefold_repetition();
        },
        insufficient_material: function() {
            return insufficient_material();
        },
        in_threefold_repetition: function() {
            return in_threefold_repetition();
        },
        game_over: function() {
            return half_moves >= 100 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition();
        },
        validate_fen: function(fen) {
            return validate_fen(fen);
        },
        fen: function() {
            return generate_fen();
        },
        board: function() {
            var output = [], row = [];
            for(var i = SQUARES.a8; i <= SQUARES.h1; i++){
                if (board1[i] == null) row.push(null);
                else row.push({
                    type: board1[i].type,
                    color: board1[i].color
                });
                if (i + 1 & 136) {
                    output.push(row);
                    row = [];
                    i += 8;
                }
            }
            return output;
        },
        pgn: function(options) {
            /* using the specification from http://www.chessclub.com/help/PGN-spec
             * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
             */ var newline = typeof options === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\n';
            var max_width = typeof options === 'object' && typeof options.max_width === 'number' ? options.max_width : 0;
            var result = [];
            var header_exists = false;
            /* add the PGN header headerrmation */ for(var i in header1){
                /* TODO: order of enumerated properties in header object is not
                 * guaranteed, see ECMA-262 spec (section 12.6.4)
                 */ result.push('[' + i + ' "' + header1[i] + '"]' + newline);
                header_exists = true;
            }
            if (header_exists && history.length) result.push(newline);
            /* pop all of history onto reversed_history */ var reversed_history = [];
            while(history.length > 0)reversed_history.push(undo_move());
            var moves = [];
            var move_string = '';
            /* build the list of moves.  a move_string looks like: "3. e3 e6" */ while(reversed_history.length > 0){
                var move = reversed_history.pop();
                /* if the position started with black to move, start PGN with 1. ... */ if (!history.length && move.color === 'b') move_string = move_number + '. ...';
                else if (move.color === 'w') {
                    /* store the previous generated move_string if we have one */ if (move_string.length) moves.push(move_string);
                    move_string = move_number + '.';
                }
                move_string = move_string + ' ' + move_to_san(move, false);
                make_move(move);
            }
            /* are there any other leftover moves? */ if (move_string.length) moves.push(move_string);
            /* is there a result? */ if (typeof header1.Result !== 'undefined') moves.push(header1.Result);
            /* history should be back to what is was before we started generating PGN,
             * so join together moves
             */ if (max_width === 0) return result.join('') + moves.join(' ');
            /* wrap the PGN output at max_width */ var current_width = 0;
            for(var i = 0; i < moves.length; i++){
                /* if the current move will push past max_width */ if (current_width + moves[i].length > max_width && i !== 0) {
                    /* don't end the line with whitespace */ if (result[result.length - 1] === ' ') result.pop();
                    result.push(newline);
                    current_width = 0;
                } else if (i !== 0) {
                    result.push(' ');
                    current_width++;
                }
                result.push(moves[i]);
                current_width += moves[i].length;
            }
            return result.join('');
        },
        load_pgn: function(pgn, options1) {
            // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            var sloppy = typeof options1 !== 'undefined' && 'sloppy' in options1 ? options1.sloppy : false;
            function mask(str) {
                return str.replace(/\\/g, '\\');
            }
            function has_keys(object) {
                for(var key in object)return true;
                return false;
            }
            function parse_pgn_header(header, options) {
                var newline_char = typeof options === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
                var header_obj = {
                };
                var headers = header.split(new RegExp(mask(newline_char)));
                var key = '';
                var value = '';
                for(var i = 0; i < headers.length; i++){
                    key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
                    value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
                    if (trim(key).length > 0) header_obj[key] = value;
                }
                return header_obj;
            }
            var newline_char1 = typeof options1 === 'object' && typeof options1.newline_char === 'string' ? options1.newline_char : '\r?\n';
            // RegExp to split header. Takes advantage of the fact that header and movetext
            // will always have a blank line between them (ie, two newline_char's).
            // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/
            var header_regex = new RegExp('^(\\[((?:' + mask(newline_char1) + ')|.)*\\])' + '(?:' + mask(newline_char1) + '){2}');
            // If no header given, begin with moves.
            var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : '';
            // Put the board in the starting position
            reset();
            /* parse PGN header */ var headers1 = parse_pgn_header(header_string, options1);
            for(var key1 in headers1)set_header([
                key1,
                headers1[key1]
            ]);
            /* load the starting position indicated by [Setup '1'] and
             * [FEN position] */ if (headers1['SetUp'] === '1') {
                if (!('FEN' in headers1 && load(headers1['FEN'], true))) // second argument to load: don't clear the headers
                return false;
            }
            /* delete header to get the moves */ var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char1), 'g'), ' ');
            /* delete comments */ ms = ms.replace(/(\{[^}]+\})+?/g, '');
            /* delete recursive annotation variations */ var rav_regex = /(\([^\(\)]+\))+?/g;
            while(rav_regex.test(ms))ms = ms.replace(rav_regex, '');
            /* delete move numbers */ ms = ms.replace(/\d+\.(\.\.)?/g, '');
            /* delete ... indicating black to move */ ms = ms.replace(/\.\.\./g, '');
            /* delete numeric annotation glyphs */ ms = ms.replace(/\$\d+/g, '');
            /* trim and get array of moves */ var moves = trim(ms).split(new RegExp(/\s+/));
            /* delete empty entries */ moves = moves.join(',').replace(/,,+/g, ',').split(',');
            var move = '';
            for(var half_move = 0; half_move < moves.length - 1; half_move++){
                move = move_from_san(moves[half_move], sloppy);
                /* move not possible! (don't clear the board to examine to show the
                 * latest valid position)
                 */ if (move == null) return false;
                else make_move(move);
            }
            /* examine last move */ move = moves[moves.length - 1];
            if (POSSIBLE_RESULTS.indexOf(move) > -1) {
                if (has_keys(header1) && typeof header1.Result === 'undefined') set_header([
                    'Result',
                    move
                ]);
            } else {
                move = move_from_san(move, sloppy);
                if (move == null) return false;
                else make_move(move);
            }
            return true;
        },
        header: function() {
            return set_header(arguments);
        },
        ascii: function() {
            return ascii();
        },
        turn: function() {
            return turn;
        },
        move: function(move, options) {
            /* The move function can be called with in the following parameters:
             *
             * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
             *
             * .move({ from: 'h7', <- where the 'move' is a move object (additional
             *         to :'h8',      fields are ignored)
             *         promotion: 'q',
             *      })
             */ // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
            var move_obj = null;
            if (typeof move === 'string') move_obj = move_from_san(move, sloppy);
            else if (typeof move === 'object') {
                var moves = generate_moves();
                /* convert the pretty move object to an ugly move object */ for(var i = 0, len = moves.length; i < len; i++)if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!('promotion' in moves[i]) || move.promotion === moves[i].promotion)) {
                    move_obj = moves[i];
                    break;
                }
            }
            /* failed to find move */ if (!move_obj) return null;
            /* need to make a copy of move because we can't generate SAN after the
             * move is made
             */ var pretty_move = make_pretty(move_obj);
            make_move(move_obj);
            return pretty_move;
        },
        undo: function() {
            var move = undo_move();
            return move ? make_pretty(move) : null;
        },
        clear: function() {
            return clear();
        },
        put: function(piece, square) {
            return put(piece, square);
        },
        get: function(square) {
            return get(square);
        },
        remove: function(square) {
            return remove(square);
        },
        perft: function(depth) {
            return perft(depth);
        },
        square_color: function(square) {
            if (square in SQUARES) {
                var sq_0x88 = SQUARES[square];
                return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark';
            }
            return null;
        },
        history: function(options) {
            var reversed_history = [];
            var move_history = [];
            var verbose = typeof options !== 'undefined' && 'verbose' in options && options.verbose;
            while(history.length > 0)reversed_history.push(undo_move());
            while(reversed_history.length > 0){
                var move = reversed_history.pop();
                if (verbose) move_history.push(make_pretty(move));
                else move_history.push(move_to_san(move));
                make_move(move);
            }
            return move_history;
        }
    };
};
/* export Chess object if using node or any other CommonJS compatible
 * environment */ if (typeof exports !== 'undefined') exports.Chess = Chess;
/* export Chess object for any RequireJS compatible environment */ if (typeof define !== 'undefined') define(function() {
    return Chess;
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbC51":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchFullFEN = /^\s*([prnbqkPRNBQK12345678]{1,8}(?:\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(w|b)\s+([KQkqA-Ha-h]{1,4}|\-)\s+(?:(?:([a-h][36]|\-)\s+(\d{1,3})\s+(\d{1,4}))|(?:0\s+0))\s*$/;
var fenExpand = /[1-8]+/g;
var fenPack = /\-+/g;
var fenSubst = {
    1: '-',
    2: '--',
    3: '---',
    4: '----',
    5: '-----',
    6: '------',
    7: '-------',
    8: '--------'
};
var FenParser = function() {
    function FenParser1(value) {
        this.original = '';
        this.isValid = false;
        this.positions = '';
        this.ranks = [];
        this.turn = '';
        this.castles = '';
        this.enpass = '';
        this.halfmoveClock = 0;
        this.moveNumber = 0;
        this.original = typeof value === 'string' ? value : '';
        var match = this.original.match(matchFullFEN);
        this.isValid = !!match;
        if (match) {
            this.positions = match[1];
            this.ranks = match[1].split('/').map(function(s) {
                return s.replace(fenExpand, function(i) {
                    return fenSubst[i];
                });
            });
            this.turn = match[2];
            this.castles = match[3];
            this.enpass = match[4] !== undefined ? match[4] : '-';
            this.halfmoveClock = match[5] !== undefined ? parseInt(match[5], 10) : 0;
            this.moveNumber = match[6] !== undefined ? parseInt(match[6], 10) : 1;
            this.isValid = this.ranks.reduce(function(before, rank) {
                return before && rank.length === 8;
            }, true);
        }
    }
    FenParser1.prototype.toString = function() {
        var positions = this.ranks.map(function(rank) {
            return rank.replace(fenPack, function(m) {
                return m.length.toString();
            });
        }).join('/');
        return positions + " " + this.turn + " " + this.castles + " " + this.enpass + " " + this.halfmoveClock + " " + this.moveNumber;
    };
    FenParser1.prototype.hasPiece = function(piece) {
        return this.positions.indexOf(piece) >= 0;
    };
    FenParser1.prototype.counts = function() {
        var counts = {
        };
        for(var _i = 0, _a = this.ranks; _i < _a.length; _i++){
            var rank = _a[_i];
            for(var _b = 0, rank_1 = rank; _b < rank_1.length; _b++){
                var ch = rank_1[_b];
                if (ch !== '-') counts[ch] = (counts[ch] || 0) + 1;
            }
        }
        return counts;
    };
    FenParser1.isFen = function(text) {
        return typeof text === 'string' && matchFullFEN.test(text);
    };
    return FenParser1;
}();
exports.FenParser = FenParser;
exports.default = FenParser; //# sourceMappingURL=fenParser.js.map

},{}],"hFj5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "Pawn", ()=>Pawn
);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "Rook", ()=>Rook
);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "Knight", ()=>Knight
);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "Bishop", ()=>Bishop
);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "Queen", ()=>Queen
);
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */ parcelHelpers.export(exports, "King", ()=>King
) // export pieces = [
 // 	new Rook('a1', true),
 // 	new Knight('b1', true),
 // 	new Bishop('c1', true),
 // 	new Queen('d1', true),
 // 	new King('e1', true),
 // 	new Bishop('f1', true),
 // 	new Knight('g1', true),
 // 	new Rook('a1', true),
 // 	new Rook('h1', true),
 // 	new Pawn('a2', true),
 // 	new Pawn('b2', true),
 // 	new Pawn('c2', true),
 // 	new Pawn('d2', true),
 // 	new Pawn('e2', true),
 // 	new Pawn('f2', true),
 // 	new Pawn('g2', true),
 // 	new Pawn('h2', true),
 // 	new Rook('a8', false),
 // 	new Knight('b8', false),
 // 	new Bishop('c8', false),
 // 	new Queen('d8', false),
 // 	new King('e8', false),
 // 	new Bishop('f8', false),
 // 	new Knight('g8', false),
 // 	new Rook('a8', false),
 // 	new Rook('h8', false),
 // 	new Pawn('a7', false),
 // 	new Pawn('b7', false),
 // 	new Pawn('c7', false),
 // 	new Pawn('d7', false),
 // 	new Pawn('e7', false),
 // 	new Pawn('f7', false),
 // 	new Pawn('g7', false),
 // 	new Pawn('h7', false),
 // ]
;
var _utils = require("./utils");
function Pawn(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const x = this.pos.x * width + width / 2;
        const y = this.pos.y * height + height / 2;
        const r = width * 0.15;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fill();
        }
        ctx.closePath();
    };
}
function Rook(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const rectWidth = width * 0.4;
        const rectHeight = height * 0.6;
        const x = this.pos.x * width + (width - rectWidth) * 0.5;
        const y = this.pos.y * height + (height - rectHeight) * 0.5;
        const r = width * 0.15;
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0,0,0)';
            ctx.strokeRect(x, y, rectWidth, rectHeight);
        } else {
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.fillRect(x, y, rectWidth, rectHeight);
        }
    };
}
function Knight(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const horizontalW = width * 0.5;
        const horizontalH = width * 0.2;
        const verticalW = width * 0.3;
        const verticalH = width * 0.6;
        const x = -verticalW * 0.5;
        const y = -verticalH * 0.5;
        const tx = this.pos.x * width + horizontalW;
        const ty = this.pos.y * height + horizontalW;
        ctx.translate(tx, ty);
        if (!this.isWhite) ctx.scale(-1, 1);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + horizontalW, y);
        ctx.lineTo(x + horizontalW, y + horizontalH);
        ctx.lineTo(x + verticalW, y + horizontalH);
        ctx.lineTo(x + verticalW, y + verticalH);
        ctx.lineTo(x, y + verticalH);
        ctx.closePath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fill();
        }
    };
}
function Bishop(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const tWidth = width * 0.4;
        const tHeight = height * 0.6;
        const x = this.pos.x * width + width * 0.5;
        const y = this.pos.y * height + (height - tHeight) * 0.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + tWidth * 0.5, y + tHeight);
        ctx.lineTo(x - tWidth * 0.5, y + tHeight);
        ctx.closePath();
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fill();
        }
    };
}
function Queen(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const hWidth = width * 0.6;
        const hHeight = width * 0.1;
        const vWidth = height * 0.1;
        const vHeight = height * 0.6;
        const x = (width - vWidth) * 0.5 - width * 0.5;
        const y = (height - vHeight) * 0.5 - height * 0.5;
        const tx = this.pos.x * width + width * 0.5;
        const ty = this.pos.y * height + height * 0.5;
        ctx.translate(tx, ty);
        ctx.rotate(45 * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + vWidth, y);
        ctx.lineTo(x + vWidth, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x + vWidth, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x + vWidth, y + vHeight);
        ctx.lineTo(x, y + vHeight);
        ctx.lineTo(x, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x, y + (vHeight - hHeight) * 0.5);
        ctx.closePath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fill();
        }
    };
}
function King(pos, isWhite) {
    this.cnPos = pos;
    this.pos = pos;
    this.isWhite = isWhite;
    /**
	 *
	 * @param {Object} chessboard
	 */ this.draw = function(chessboard) {
        const ctx = chessboard.ctx;
        const width = chessboard.cellWidth;
        const height = chessboard.cellHeight;
        const hWidth = width * 0.6;
        const hHeight = width * 0.2;
        const vWidth = height * 0.2;
        const vHeight = height * 0.6;
        const x = (width - vWidth) * 0.5 - width * 0.5;
        const y = (height - vHeight) * 0.5 - height * 0.5;
        const tx = this.pos.x * width + width * 0.5;
        const ty = this.pos.y * height + height * 0.5;
        ctx.translate(tx, ty);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + vWidth, y);
        ctx.lineTo(x + vWidth, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x + vWidth, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x + vWidth, y + vHeight);
        ctx.lineTo(x, y + vHeight);
        ctx.lineTo(x, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5);
        ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5);
        ctx.lineTo(x, y + (vHeight - hHeight) * 0.5);
        ctx.closePath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        if (this.isWhite) {
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fill();
        }
    };
}

},{"./utils":"72Dku","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * @param {String} pos
 * @returns {{x:Number, grid:Number}}
 * @example
 * // return {0,0}
 * chessNotationToGridPosition('a1')
 */ parcelHelpers.export(exports, "chessNotationToGridPosition", ()=>chessNotationToGridPosition
);
const letterToGrid = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7
};
function chessNotationToGridPosition(pos) {
    const y = letterToGrid[pos[0]];
    const x = pos[1] - 1;
    return {
        x,
        y
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkEgz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rounds", ()=>rounds
);
const rounds = [
    `[Event "Match"]
[Site "Philadelphie, USA"]
[Date "1996.02.10"]
[Round "1"]
[White "Deep Blue (Computer)"]
[Black "Garry Kasparov"]
[Result "1-0"]
[ECO "B22"]
[PlyCount "73"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. e4 c5 {Garry choisi sa défense favorite contre 1.e4} 2. c3
{L'ordinateur évite les grandes lignes en jouant l'Alapine.} 2... d5 3.
exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. h3 Bh5 8. O-O Nc6 9. Be3 cxd4 10.
cxd4 Bb4 {Un coup assez rare.} (10... Be7 {Est le coup le plus joué dans
cette position.} 11. Nc3 Qd6) 11. a3 Ba5 12. Nc3 Qd6 13. Nb5 Qe7 14. Ne5 Bxe2
15. Qxe2 O-O 16. Rac1 Rac8 {Les deux camps ont terminé leur
développement et activé toutes leurs pièces. Les blancs
jouent avec un pion isolé et vont devoir être très actifs
pour justifier cette légère faiblesse.} 17. Bg5 Bb6 18. Bxf6 gxf6
19. Nc4 Rfd8 20. Nxb6 axb6 21. Rfd1 f5 22. Qe3 {Les blancs activent leur dame et
menace d'envahir l'aile roi adverse.} 22... Qf6 23. d5 Rxd5 24. Rxd5 exd5 25. b3
Kh8 26. Qxb6 Rg8 {Pour compenser leur structure de pions ruinée, les
noirs tentent d'organiser une attaque.} 27. Qc5 d4 $2 (27... f4 {garde la position
&agrave; peu près égale.}) 28. Nd6 $1 f4 29. Nxb7 Ne5 30. Qd5 f3 31.
g3 Nd3 32. Rc7 {Les pièces blanches se coordonnent pour attaquer la
position noire.} 32... Re8 $4 {L'erreur fatale.} 33. Nd6 Re1+ 34. Kh2 Nxf2 35.
Nxf7+ Kg7 36. Ng5+ Kh6 37. Rxh7+ {C'est la première fois qu'un ordinateur
bat le champion du monde en cadence classique. Un moment historique  $1} 1-0`,
    `[Event "Match"]
[Site "Philadelphie USA"]
[Date "1996.02.11"]
[Round "2"]
[White "Garry Kasparov"]
[Black "Deep Blue (Computer)"]
[Result "1-0"]
[ECO "E04"]
[PlyCount "145"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. Nf3 d5 2. d4 e6 3. g3 c5 4. Bg2 Nc6 5. O-O Nf6 6. c4 dxc4 7. Ne5 Bd7 8. Na3
cxd4 9. Naxc4 Bc5 10. Qb3 O-O 11. Qxb7 Nxe5 12. Nxe5 Rb8 13. Qf3 Bd6 14. Nc6
Bxc6 15. Qxc6 e5 16. Rb1 Rb6 17. Qa4 Qb8 18. Bg5 Be7 19. b4 {Kasparov sacrifie
le pion b pour s'ouvrir un chemin vers le roi noir.} 19... Bxb4 20. Bxf6 gxf6
(20... Rxf6 21. Rxb4 Qc8 {et les blancs gagnent une pi&egrave;ce.}) 21. Qd7 Qc8
22. Qxa7 Rb8 23. Qa4 {L'&eacute;quilibre mat&eacute;riel est restaur&eacute;,
mais la position du roi noir n'est pas enviable.} 23... Bc3 24. Rxb8 Qxb8 25.
Be4 Qc7 {Il faut stopper l'id&eacute;e Dd7-f5.} 26. Qa6 Kg7 27. Qd3 Rb8 (27...
h6 28. Qf3 Rb8 29. Qf5) 28. Bxh7 Rb2 29. Be4 Rxa2 30. h4 Qc8 31. Qf3 Ra1 32.
Rxa1 Bxa1 33. Qh5 {La pr&eacute;sence de fous de couleurs oppos&eacute;es laisse
des chances de nulle &agrave; Deep Blue, mais Kasparov pousse &agrave; chaque
coup pour garder l'initiative.} 33... Qh8 34. Qg4+ {Hors de question
d'&eacute;changer les dames  $1} 34... Kf8 35. Qc8+ Kg7 36. Qg4+ Kf8 37. Bd5 Ke7
38. Bc6 {A chaque coup, Kasparov tente de poser des probl&egrave;mes &agrave;
l'ordinateur.} 38... Kf8 39. Bd5 Ke7 40. Qf3 Bc3 41. Bc4 Qc8 42. Qd5 Qe6 43. Qb5
{Toujours pas  $1} 43... Qd7 {Les noirs tentent d&eacute;sesp&eacute;r&eacute;ment
de rentrer dans une finale de fous de couleurs oppos&eacute;es.} 44. Qc5+ Qd6
45. Qa7+ Qd7 46. Qa8 Qc7 47. Qa3+ Qd6 48. Qa2 f5 49. Bxf7 {La patience du
champion du monde paie. Il gagne un pion primordial.} 49... e4 50. Bh5 Qf6 51.
Qa3+ Kd7 52. Qa7+ Kd8 53. Qb8+ Kd7 54. Be8+ $1 {La chasse au roi commence  $1} 54...
Ke7 55. Bb5 Bd2 56. Qc7+ Kf8 57. Bc4 {Kasparov continue &agrave; priver le roi
noir de cases de fuites importantes.} 57... Bc3 58. Kg2 Be1 59. Kf1 Bc3 60. f4 $1
{Maintenant que le roi adverse est coinc&eacute;, les blancs peuvent aller de
l'avant.} 60... exf3 61. exf3 Bd2 62. f4 Ke8 63. Qc8+ Ke7 64. Qc5+ Kd8 65. Bd3
Be3 66. Qxf5 Qc6 67. Qf8+ Kc7 68. Qe7+ Kc8 69. Bf5+ Kb8 70. Qd8+ Kb7 71. Qd7+
{Kasparov &eacute;change finalement les dames selon ses conditions. Le pion
pass&eacute; va d&eacute;cider.} 71... Qxd7 72. Bxd7 Kc7 73. Bb5 1-0`,
    `[Event "Match"]
[Site "Philadelphie, USA"]
[Date "1996.02.13"]
[Round "3"]
[White "Deep Blue (Computer)"]
[Black "Garry Kasparov"]
[Result "1/2-1/2"]
[ECO "B22"]
[PlyCount "78"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. O-O {Deep Blue
est le premier &agrave; d&eacute;vier. Dans la premi&egrave;re partie,
l'ordinateur avait pos&eacute; une question au fou g4 par h3.} 7... Nc6 8. Be3
cxd4 9. cxd4 Bb4 10. a3 Ba5 11. Nc3 Qd6 12. Ne5 Bxe2 13. Qxe2 Bxc3 {Cette fois,
Kasparov d&eacute;cide de ne pas laisser le cavalier rentrer en b5 et
l'&eacute;change contre le fou de cases noires.} 14. bxc3 Nxe5 15. Bf4 Nf3+ 16.
Qxf3 Qd5 17. Qd3 Rc8 18. Rfc1 Qc4 19. Qxc4 Rxc4 {Rentre dans une finale de tours
avec fou contre cavalier. Kasparov va pouvoir essayer d'exploiter les quelques
pions faibles de la position blanche.} 20. Rcb1 b6 21. Bb8 Ra4 22. Rb4 {Deep
Blue joue avec &eacute;nergie, essayant de s'activer au maximum face &agrave; un
camp noir pas encore totalement d&eacute;velopp&eacute;.} 22... Ra5 23. Rc4 O-O
24. Bd6 Ra8 25. Rc6 b5 26. Kf1 Ra4 27. Rb1 a6 28. Ke2 h5 {Offre un peu d'espace
au roi noir et joue sur les deux flancs de l'&eacute;chiquier.} 29. Kd3 {Les
blancs centralisent leur roi pour la finale.} 29... Rd8 30. Be7 Rd7 31. Bxf6
{Les blancs se s&eacute;parent du fou pour cr&eacute;er quelques faiblesses dans
le camp adverse.} 31... gxf6 32. Rb3 Kg7 33. Ke3 e5 34. g3 exd4+ 35. cxd4 Re7+
36. Kf3 Rd7 37. Rd3 Raxd4 38. Rxd4 Rxd4 39. Rxa6 b4 {Les pions de l'aile dame
sont &eacute;chang&eacute;s, et la finale de tours avec trois pions contre trois
&agrave; l'aile roi est une nulle connue.} 1/2-1/2`,
    `[Event "Match"]
[Site "Philadelphie, USA"]
[Date "1996.02.14"]
[Round "4"]
[White "Garry Kasparov"]
[Black "Deep Blue (Computer)"]
[Result "1/2-1/2"]
[ECO "D46"]
[PlyCount "100"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. Nf3 {Kasparov reste fid&egrave;le &agrave; sa strat&eacute;gie en gardant le
jeu ferm&eacute;.} 1... d5 2. d4 c6 3. c4 e6 4. Nbd2 Nf6 5. e3 Nbd7 6. Bd3 Bd6
7. e4 dxe4 8. Nxe4 Nxe4 9. Bxe4 O-O 10. O-O h6 11. Bc2 {Kasparov a un fort
centre et un avantage d'espace qui va l'avantager &agrave; long-terme.} 11... e5
{les noirs cherchent du contre-jeu en s'activant.} 12. Re1 exd4 13. Qxd4 Bc5 14.
Qc3 a5 15. a3 Nf6 16. Be3 Bxe3 17. Rxe3 Bg4 18. Ne5 Re8 19. Rae1 Be6 20. f4 Qc8
21. h3 b5 22. f5 Bxc4 23. Nxc4 bxc4 24. Rxe8+ Nxe8 25. Re4 Nf6 (25... Qxf5 26.
Rxe8+ Rxe8 27. Bxf5 {aurait &eacute;t&eacute; une erreur &eacute;trange  $1}) 26.
Rxc4 Nd5 27. Qe5 Qd7 28. Rg4 f6 29. Qd4 Kh7 30. Re4 Rd8 31. Kh1 Qc7 32. Qf2 Qb8
33. Ba4 c5 34. Bc6 c4 35. Rxc4 Nb4 36. Bf3 (36. axb4 $4 Rd1+ 37. Qg1 Rxg1+ 38.
Kxg1 axb4 {et les noirs gagnent.}) 36... Nd3 37. Qh4 $6 {Kasparov perd le fil. Il
aurait &eacute;t&eacute; plus solide de laisser la dame au centre.} (37. Qe3
Qxb2 38. Qe7 Qa1+ 39. Kh2 Qe5+ 40. Qxe5 Nxe5 41. Rc5 Nxf3+ 42. gxf3 a4 43. Ra5
Rd3 44. Rxa4 Rxf3 $11) 37... Qxb2 38. Qg3 Qxa3 39. Rc7 Qf8 40. Ra7 Ne5 41. Rxa5
Qf7 42. Rxe5 $5 {Kasparov voit qu'il peut construire une forteresse et assurer la
nulle.} 42... fxe5 43. Qxe5 Re8 44. Qf4 Qf6 45. Bh5 Rf8 46. Bg6+ Kh8 47. Qc7 Qd4
48. Kh2 Ra8 49. Bh5 Qf6 50. Bg6 Rg8 {La nulle est sign&eacute;e. Aucun camp ne
peut progresser.} 1/2-1/2`,
    `[Event "Match"]
[Site "Philadelphie, USA"]
[Date "1996.02.16"]
[Round "5"]
[White "Deep Blue (Computer)"]
[Black "Garry Kasparov"]
[Result "0-1"]
[ECO "C47"]
[PlyCount "94"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. e4 e5 $1 {Un coup somme toute logique, mais quelle surprise de ne pas voir
Kasparov jouer son chouchou 1...c5  $1} 2. Nf3 Nf6 {La d&eacute;fense russe, un
choix solide.} 3. Nc3 (3. Nxe5 d6 4. Nf3 Nxe4 {Est une suite plus
th&eacute;orique, mais Deep Blue pr&eacute;f&egrave;re d&eacute;velopper ses
pi&egrave;ces.}) 3... Nc6 4. d4 {L'&eacute;cossaise des quatre cavaliers. Encore
un choix solide.} (4. Bb5 {est l'espagnole des quatre cavaliers.}) 4... exd4 5.
Nxd4 Bb4 6. Nxc6 bxc6 7. Bd3 d5 8. exd5 cxd5 9. O-O O-O 10. Bg5 c6 11. Qf3 Be7
(11... Bd6 {Un coup aujourd'hui plus en vogue. Les noirs ne craignent pas de
voir les blancs endommager leur roque, car ils obtiendraient la paire de fous et
des lignes ouvertes vers le roi adverse.}) 12. Rae1 (12. h3 {Un coup plus commun
dirig&eacute; contre l'invasion du fou de cases blanches.}) 12... Re8 13. Ne2 h6
14. Bf4 Bd6 15. Nd4 Bg4 16. Qg3 Bxf4 17. Qxf4 Qb6 18. c4 Bd7 19. cxd5 cxd5 20.
Rxe8+ Rxe8 21. Qd2 Ne4 22. Bxe4 dxe4 23. b3 Rd8 {Dans cette position totalement
&eacute;gale, Kasparov propose la nulle &agrave; Deep Blue, mais l'ordinateur la
refuse.} 24. Qc3 f5 25. Rd1 Be6 26. Qe3 Bf7 27. Qc3 f4 {Profitant des errements
des blancs, Kasparov se saisit de l'initiative pour ne plus la l&acirc;cher  $1}
28. Rd2 Qf6 29. g3 Rd5 30. a3 Kh7 {Le russe est maintenant gagnant  $1} 31. Kg2
Qe5 $3 32. f3 e3 33. Rd3 e2 34. gxf4 e1=Q 35. fxe5 Qxc3 36. Rxc3 Rxd4 37. b4 Bc4
38. Kf2 g5 39. Re3 Be6 40. Rc3 Bc4 41. Re3 Rd2+ 42. Ke1 Rd3 43. Kf2 Kg6 44. Rxd3
Bxd3 45. Ke3 Bc2 46. Kd4 Kf5 47. Kd5 h5 {Deep Blue abandonne  $1 Une fois
l'initiative pass&eacute;e aux mains du champion du monde, l'IA n'a rien pu
faire. Une belle victoire de l'homme sur la machine.} 0-1`,
    `[Event "Match"]
[Site "Philadelphie, USA"]
[Date "1996.02.17"]
[Round "6"]
[White "Garry Kasparov"]
[Black "Deep Blue (Computer)"]
[Result "1-0"]
[ECO "D30"]
[PlyCount "85"]
[EventDate "1996.??.??"]
[WhiteElo ""]
[BlackElo ""]

1. Nf3 {Kasparov choisit &agrave; nouveau le terrain du combat
strat&eacute;gique.} 1... d5 2. d4 c6 3. c4 e6 4. Nbd2 Nf6 5. e3 c5 6. b3 Nc6 7.
Bb2 cxd4 8. exd4 Be7 9. Rc1 O-O 10. Bd3 Bd7 11. O-O {Kasparov a termin&eacute;
son d&eacute;veloppement. Il a le contr&ocirc;le du centre et des pi&egrave;ces
plus actives.} 11... Nh5 12. Re1 Nf4 13. Bb1 Bd6 14. g3 Ng6 15. Ne5 Rc8 16. Nxd7
Qxd7 17. Nf3 Bb4 18. Re3 Rfd8 19. h4 Nge7 20. a3 $1 {Le russe obtient un avantage
massif  $1} (20. Bxh7+ $1 {Ce coup gagne &eacute;galement, mais de mani&egrave;re
plus compliqu&eacute;e} 20... Kxh7 21. Ng5+ Kg8 22. Qh5 Qe8 23. Qh7+ Kf8 24.
Qh8+ Ng8 25. Rc2 {et les blancs vont l'emporter, mais Garry veut &eacute;viter
toute erreur de calcul potentielle.}) 20... Ba5 21. b4 (21. Bxh7+ {&eacute;tait
encore possible.}) 21... Bc7 22. c5 {Dur de trouver un plan pour les noirs, qui
sont totalement &eacute;touff&eacute;s. Kasparov, lui, peut jouer au centre ou
attaquer &agrave; l'aile roi.} 22... Re8 23. Qd3 g6 24. Re2 Nf5 25. Bc3 h5 26.
b5 Nce7 27. Bd2 Kg7 28. a4 Ra8 29. a5 a6 30. b6 Bb8 31. Bc2 {Les noirs semblent
sur le point de se faire bouter hors de l'&eacute;chiquier  $1} 31... Nc6 32. Ba4
Re7 33. Bc3 Ne5 34. dxe5 Qxa4 35. Nd4 Nxd4 36. Qxd4 Qd7 37. Bd2 Re8 38. Bg5
{Kasparov contr&ocirc;le l'int&eacute;gralit&eacute; du plateau.} 38... Rc8 39.
Bf6+ {Les cases noires sont maintenant sous pression  $1} 39... Kh7 40. c6 $3 {Le
bouquet final.} 40... bxc6 41. Qc5 Kh6 42. Rb2 Qb7 43. Rb4 {et les noirs n'ont
plus le moindre coup utile. Deep Blue abandonne.} 1-0`, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fcvSp","gLLPy"], "gLLPy", "parcelRequire1d75")

//# sourceMappingURL=index.4d6bcbeb.js.map
