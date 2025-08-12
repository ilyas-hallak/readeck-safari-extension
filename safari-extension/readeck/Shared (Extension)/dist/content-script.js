//SPDX-FileCopyrightText: © 2023 Olivier Meunier <olivier@neokraft.net>
//
//SPDX-License-Identifier: GPL-3.0-only
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
        "use strict";
        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    }
  });

  // src/content-script/metadata.js
  var require_metadata = __commonJS({
    "src/content-script/metadata.js"(exports, module) {
      "use strict";
      var REGEXPS2 = {
        normalize: /\s{2,}/g,
        tokenize: /\W+/g,
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
      };
      var HTML_ESCAPE_MAP = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      };
      function _forEachNode(nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn);
      }
      function _someNode(nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn);
      }
      function _concatNodeLists() {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function(list) {
          return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
      }
      function _getAllNodesWithTag(node, tagNames) {
        if (node.querySelectorAll) {
          return node.querySelectorAll(tagNames.join(","));
        }
        return [].concat.apply(
          [],
          tagNames.map(function(tag) {
            var collection = node.getElementsByTagName(tag);
            return Array.isArray(collection) ? collection : Array.from(collection);
          })
        );
      }
      function _unescapeHtmlEntities(str) {
        if (!str) {
          return str;
        }
        var htmlEscapeMap = HTML_ESCAPE_MAP;
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
          return htmlEscapeMap[tag];
        }).replace(
          /&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,
          function(_, hex, numStr) {
            var num = parseInt(hex || numStr, hex ? 16 : 10);
            return String.fromCharCode(num);
          }
        );
      }
      function _getInnerText(e, normalizeSpaces) {
        normalizeSpaces = typeof normalizeSpaces === "undefined" ? true : normalizeSpaces;
        var textContent = e.textContent.trim();
        if (normalizeSpaces) {
          return textContent.replace(REGEXPS2.normalize, " ");
        }
        return textContent;
      }
      function _textSimilarity(textA, textB) {
        var tokensA = textA.toLowerCase().split(REGEXPS2.tokenize).filter(Boolean);
        var tokensB = textB.toLowerCase().split(REGEXPS2.tokenize).filter(Boolean);
        if (!tokensA.length || !tokensB.length) {
          return 0;
        }
        var uniqTokensB = tokensB.filter((token) => !tokensA.includes(token));
        var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
        return 1 - distanceB;
      }
      function getArticleTitle(doc) {
        var curTitle = "";
        var origTitle = "";
        try {
          curTitle = origTitle = doc.title.trim();
          if (typeof curTitle !== "string")
            curTitle = origTitle = _getInnerText(doc.getElementsByTagName("title")[0]);
        } catch (e) {
        }
        var titleHadHierarchicalSeparators = false;
        function wordCount(str) {
          return str.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(curTitle)) {
          titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
          curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
          if (wordCount(curTitle) < 3)
            curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
        } else if (curTitle.indexOf(": ") !== -1) {
          var headings = _concatNodeLists(
            doc.getElementsByTagName("h1"),
            doc.getElementsByTagName("h2")
          );
          var trimmedTitle = curTitle.trim();
          var match = _someNode(headings, function(heading) {
            return heading.textContent.trim() === trimmedTitle;
          });
          if (!match) {
            curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
            if (wordCount(curTitle) < 3) {
              curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
            } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
              curTitle = origTitle;
            }
          }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
          var hOnes = doc.getElementsByTagName("h1");
          if (hOnes.length === 1) curTitle = _getInnerText(hOnes[0]);
        }
        curTitle = curTitle.trim().replace(REGEXPS2.normalize, " ");
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
          curTitle = origTitle;
        }
        return curTitle;
      }
      function getJSONLD(doc) {
        var scripts = _getAllNodesWithTag(doc, ["script"]);
        var metadata;
        _forEachNode(scripts, function(jsonLdElement) {
          if (!metadata && jsonLdElement.getAttribute("type") === "application/ld+json") {
            try {
              var content = jsonLdElement.textContent.replace(
                /^\s*<!\[CDATA\[|\]\]>\s*$/g,
                ""
              );
              var parsed = JSON.parse(content);
              if (!parsed["@context"] || !parsed["@context"].match(/^https?\:\/\/schema\.org$/)) {
                return;
              }
              if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
                parsed = parsed["@graph"].find(function(it) {
                  return (it["@type"] || "").match(REGEXPS2.jsonLdArticleTypes);
                });
              }
              if (!parsed || !parsed["@type"] || !parsed["@type"].match(REGEXPS2.jsonLdArticleTypes)) {
                return;
              }
              metadata = {};
              if (typeof parsed.name === "string" && typeof parsed.headline === "string" && parsed.name !== parsed.headline) {
                var title = getArticleTitle(doc);
                var nameMatches = _textSimilarity(parsed.name, title) > 0.75;
                var headlineMatches = _textSimilarity(parsed.headline, title) > 0.75;
                if (headlineMatches && !nameMatches) {
                  metadata.title = parsed.headline;
                } else {
                  metadata.title = parsed.name;
                }
              } else if (typeof parsed.name === "string") {
                metadata.title = parsed.name.trim();
              } else if (typeof parsed.headline === "string") {
                metadata.title = parsed.headline.trim();
              }
              if (parsed.author) {
                if (typeof parsed.author.name === "string") {
                  metadata.byline = parsed.author.name.trim();
                } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                  metadata.byline = parsed.author.filter(function(author) {
                    return author && typeof author.name === "string";
                  }).map(function(author) {
                    return author.name.trim();
                  }).join(", ");
                }
              }
              if (typeof parsed.description === "string") {
                metadata.excerpt = parsed.description.trim();
              }
              if (parsed.publisher && typeof parsed.publisher.name === "string") {
                metadata.siteName = parsed.publisher.name.trim();
              }
              if (parsed.keywords !== void 0 && Array.isArray(parsed.keywords)) {
                metadata.keywords = parsed.keywords;
              }
              return;
            } catch (err) {
              console.error(err);
            }
          }
        });
        return metadata ? metadata : {};
      }
      function getArticleMetadata2(doc) {
        var metadata = {};
        var values = {};
        var metaElements = doc.getElementsByTagName("meta");
        var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;
        var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|keywords|title|site_name)\s*$/i;
        _forEachNode(metaElements, function(element) {
          var elementName = element.getAttribute("name");
          var elementProperty = element.getAttribute("property");
          var content = element.getAttribute("content");
          if (!content) {
            return;
          }
          var matches = null;
          var name = null;
          if (elementProperty) {
            matches = elementProperty.match(propertyPattern);
            if (matches) {
              name = matches[0].toLowerCase().replace(/\s/g, "");
              values[name] = content.trim();
            }
          }
          if (!matches && elementName && namePattern.test(elementName)) {
            name = elementName;
            if (content) {
              name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
              values[name] = content.trim();
            }
          }
        });
        const jsonld = getJSONLD(doc);
        metadata.title = jsonld.title || values["dc:title"] || values["dcterm:title"] || values["og:title"] || values["weibo:article:title"] || values["weibo:webpage:title"] || values["title"] || values["twitter:title"];
        if (!metadata.title) {
          metadata.title = getArticleTitle(doc);
        }
        metadata.byline = jsonld.byline || values["dc:creator"] || values["dcterm:creator"] || values["author"];
        metadata.excerpt = jsonld.excerpt || values["dc:description"] || values["dcterm:description"] || values["og:description"] || values["weibo:article:description"] || values["weibo:webpage:description"] || values["description"] || values["twitter:description"];
        metadata.siteName = jsonld.siteName || values["og:site_name"];
        metadata.title = _unescapeHtmlEntities(metadata.title);
        metadata.byline = _unescapeHtmlEntities(metadata.byline);
        metadata.excerpt = _unescapeHtmlEntities(metadata.excerpt);
        metadata.siteName = _unescapeHtmlEntities(metadata.siteName);
        metadata.keywords = jsonld.keywords || ((values["keywords"] || "").split(/\s*,\s*/) || []).filter(
          (x) => x.trim() != ""
        );
        return metadata;
      }
      module.exports = {
        getArticleMetadata: getArticleMetadata2
      };
    }
  });

  // src/content-script/content-script.js
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  var import_metadata = __toESM(require_metadata());

  // src/consts.js
  var htmlTypes = ["text/html", "application/xhtml+xml"];
  var textTypes = ["text/plain"];
  var imageTypes = [
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/x-icon",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/webp",
    "image/svg+xml"
  ];
  var allowedTypes = htmlTypes.concat(textTypes, imageTypes);

  // src/content-script/readable.js
  var REGEXPS = {
    // NOTE: These two regular expressions are duplicated in
    // Readability.js. Please keep both copies in sync.
    unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
    okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
  };
  var blockedHosts = [
    "amazon.com",
    "github.com",
    "mail.google.com",
    "pinterest.com",
    "reddit.com",
    "twitter.com",
    "youtube.com",
    "app.slack.com"
  ];
  function isArticle(doc) {
    if ([].concat(textTypes, imageTypes).includes(doc.contentType)) {
      return true;
    }
    if (!(doc instanceof HTMLDocument)) {
      return false;
    }
    const { protocol, host, pathname } = doc.location;
    if (!["http:", "https:"].includes(protocol)) {
      return false;
    }
    if (pathname == "/") {
      return false;
    }
    const trimedHost = host.replace(/^www\./, "");
    if (blockedHosts.some((h) => trimedHost.endsWith(h))) {
      switch (trimedHost) {
        case "github.com":
          if (pathname.includes("/projects") || pathname.includes("/issues")) {
            return false;
          }
          break;
        case "reddit.com":
          if (pathname.includes("/comments/")) {
            return true;
          }
          return false;
        case "youtube.com":
          if (pathname.startsWith("/watch")) {
            return true;
          }
          break;
        default:
          return false;
      }
    }
    switch (trimedHost) {
      case "ted.com":
        if (pathname.startsWith("/talks/")) {
          return true;
        }
        break;
    }
    return isProbablyReaderable(doc, (node) => {
      return node.clientHeight > 0 && node.clientWidth > 0;
    });
  }
  function isNodeVisible(node) {
    return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && //check for "fallback-image" so that wikimedia math images are displayed
    (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
  }
  function isProbablyReaderable(doc, options = {}) {
    if (typeof options == "function") {
      options = { visibilityChecker: options };
    }
    var defaultOptions = {
      minScore: 20,
      minContentLength: 140,
      visibilityChecker: isNodeVisible
    };
    options = Object.assign(defaultOptions, options);
    var nodes = doc.querySelectorAll("p, pre, article");
    var brNodes = doc.querySelectorAll("div > br");
    if (brNodes.length) {
      var set = new Set(nodes);
      [].forEach.call(brNodes, function(node) {
        set.add(node.parentNode);
      });
      nodes = Array.from(set);
    }
    var score = 0;
    return [].some.call(nodes, function(node) {
      if (!options.visibilityChecker(node)) {
        return false;
      }
      var matchString = node.className + " " + node.id;
      if (REGEXPS.unlikelyCandidates.test(matchString) && !REGEXPS.okMaybeItsACandidate.test(matchString)) {
        return false;
      }
      if (node.matches("li p")) {
        return false;
      }
      var textContentLength = node.textContent.trim().length;
      if (textContentLength < options.minContentLength) {
        return false;
      }
      score += Math.sqrt(textContentLength - options.minContentLength);
      if (score > options.minScore) {
        return true;
      }
      return false;
    });
  }

  // src/content-script/content-script.js
  var port = import_webextension_polyfill.default.runtime.connect({ name: "readeck-cs" });
  var rxSrcsetURL = /\s*([^,]\S*[^,](?:\s+[^,]+)?)\s*(?:,|$)/g;
  var overlay = null;
  function sendProgress(value) {
    port.postMessage({ type: "progress", value });
  }
  async function loadImage(img) {
    if (img.complete) {
      return;
    }
    return await new Promise((r) => {
      img.addEventListener("load", r);
      img.addEventListener("error", r);
      img.removeAttribute("loading");
    });
  }
  function getSelection() {
    const doc = new Document();
    const html = document.createElement("html");
    const body = document.createElement("body");
    const section = document.createElement("section");
    section.setAttribute("class", "main");
    body.appendChild(section);
    html.appendChild(document.head.cloneNode(true));
    html.appendChild(body);
    doc.appendChild(html);
    const selection = window.getSelection();
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      const container = range.commonAncestorContainer.parentNode.cloneNode(false);
      container.appendChild(range.cloneContents());
      if (i > 0) {
        section.appendChild(document.createElement("hr"));
      }
      section.appendChild(container);
    }
    cleanupDocument(doc);
    return doc;
  }
  function cleanupDocument(doc) {
    doc.querySelectorAll("[class]").forEach((e) => {
      for (let x of e.classList) {
        if (x.match(/footnote/)) {
          e.classList.remove(x);
        }
      }
    });
  }
  function isSelection() {
    const selection = window.getSelection();
    return selection.type.toLowerCase() == "range" && selection.rangeCount > 0;
  }
  async function getPage() {
    let url = new URL(document.location.href);
    url.hash = "";
    const page = {
      url: url.toString(),
      title: document.title,
      metadata: {},
      headers: {},
      content: "",
      labels: [],
      fromSelection: false,
      prefetch: []
    };
    let count = 0;
    const allImages = Array.from(document.images);
    await Promise.all(
      Array.from(allImages).map(
        (img) => loadImage(img).then((val) => {
          sendProgress(parseInt(++count * 50 / allImages.length));
        })
      )
    );
    let doc;
    if (isSelection()) {
      doc = getSelection();
      page.fromSelection = true;
    } else {
      doc = document.cloneNode(true);
    }
    if (!doc) {
      return;
    }
    sendProgress(60);
    doc.querySelectorAll("head>meta[http-equiv]").forEach((e) => {
      if (e.getAttribute("http-equiv").toLowerCase() == "content-type") {
        e.remove();
      }
    });
    page.metadata = (0, import_metadata.getArticleMetadata)(document);
    page.title = page.metadata.title;
    doc.querySelectorAll("link").forEach((x) => {
      if (!x.href) {
        return;
      }
      if (/icon/i.exec(x.rel)) {
        page.prefetch.push(x.href);
        return;
      }
      if (x.type == "application/json+oembed") {
        page.prefetch.push(x.href);
      }
    });
    doc.querySelectorAll("meta").forEach((x) => {
      if (!x.content) {
        return;
      }
      if (x.getAttribute("property") == "og:image") {
        try {
          page.prefetch.push(new URL(x.content, document.baseURI).toString());
        } catch (e) {
        }
        return;
      }
      if (x.name == "twitter:image") {
        try {
          page.prefetch.push(new URL(x.content, document.baseURI).toString());
        } catch (e) {
        }
        return;
      }
    });
    Array.from(doc.images).forEach((x) => {
      fixImage(x);
      try {
        if (!x.src || !["http:", "https:"].includes(new URL(x.src, document.baseURI).protocol)) {
          return;
        }
        page.prefetch.push(x.src);
      } catch (e) {
      }
    });
    page.content = doc.documentElement.outerHTML;
    page.headers["content-type"] = "text/html; charset=utf-8";
    return page;
  }
  function fixImage(img) {
    for (let [k, v] of Object.entries({
      "data-src": "src",
      "data-srcset": "srcset"
    })) {
      if (img.hasAttribute(k)) {
        img.setAttribute(v, img.getAttribute(k));
        img.removeAttribute(k);
      }
    }
    if (!img.srcset) {
      return;
    }
    let m = img.srcset.matchAll(rxSrcsetURL);
    if (!m) {
      return;
    }
    let final = [];
    for (let x of m) {
      let parts = x[1].split(/\s+/);
      let src = parts.shift();
      let z = 1;
      if (parts.length > 0) {
        z = parseFloat(parts.shift());
        if (Object.is(NaN, z)) {
          continue;
        }
      }
      if (z > 3072) {
        continue;
      }
      final.push({ src, z });
    }
    final = final.sort((a, b) => {
      return a.z < b.z;
    });
    img.removeAttribute("srcset");
    if (final.length == 0) {
      return;
    }
    img.setAttribute("src", final[0].src);
    img.removeAttribute("width");
    img.removeAttribute("height");
  }
  port.onMessage.addListener(async (m) => {
    if (m.type != "command" || !m.id || !m.name) {
      return;
    }
    let result = {};
    try {
      switch (m.name) {
        case "getInfo":
          result = {
            contentType: document.contentType || "unknown",
            ...(0, import_metadata.getArticleMetadata)(document)
          };
          break;
        case "isSelection":
          result = isSelection();
          break;
        case "isArticle":
          result = isArticle(document);
          break;
        case "getPage":
          try {
            result = await getPage();
          } catch (e) {
            console.error(e);
          }
          break;
      }
    } catch (e) {
      result = { error: `${e}` };
    }
    port.postMessage({ type: "result", id: m.id, result });
  });
  port.onDisconnect.addListener(() => {
    if (overlay !== null) {
      document.body.removeChild(overlay);
      overlay = null;
    }
  });
})();
