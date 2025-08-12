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
      (function(global2, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global2.browser = mod.exports;
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

  // node_modules/boxicons/svg/regular/bx-archive.svg
  var require_bx_archive = __commonJS({
    "node_modules/boxicons/svg/regular/bx-archive.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.706 5.291-2.999-2.998A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.291A.994.994 0 0 0 2 5.999V19c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5.999a.994.994 0 0 0-.294-.708zM6.414 4h11.172l.999.999H5.415L6.414 4zM4 19V6.999h16L20.002 19H4z"/><path d="M15 12H9v-2H7v4h10v-4h-2z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/solid/bxs-archive.svg
  var require_bxs_archive = __commonJS({
    "node_modules/boxicons/svg/solid/bxs-archive.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.704 5.29-2.997-2.997A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.296 5.29A.994.994 0 0 0 2 5.999V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.999a.994.994 0 0 0-.296-.709zM6.414 4h11.172l1 1H5.414l1-1zM17 13v1H7v-4h2v2h6v-2h2v3z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/solid/bxs-x-circle.svg
  var require_bxs_x_circle = __commonJS({
    "node_modules/boxicons/svg/solid/bxs-x-circle.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/regular/bx-x.svg
  var require_bx_x = __commonJS({
    "node_modules/boxicons/svg/regular/bx-x.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/regular/bx-chevron-down.svg
  var require_bx_chevron_down = __commonJS({
    "node_modules/boxicons/svg/regular/bx-chevron-down.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/regular/bx-chevron-up.svg
  var require_bx_chevron_up = __commonJS({
    "node_modules/boxicons/svg/regular/bx-chevron-up.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/regular/bx-heart.svg
  var require_bx_heart = __commonJS({
    "node_modules/boxicons/svg/regular/bx-heart.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/solid/bxs-heart.svg
  var require_bxs_heart = __commonJS({
    "node_modules/boxicons/svg/solid/bxs-heart.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"/></svg>';
    }
  });

  // node_modules/boxicons/svg/regular/bx-info-circle.svg
  var require_bx_info_circle = __commonJS({
    "node_modules/boxicons/svg/regular/bx-info-circle.svg"(exports, module) {
      module.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M11 11h2v6h-2zm0-4h2v2h-2z"/></svg>';
    }
  });

  // node_modules/svelte/src/runtime/internal/utils.js
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
  }
  function not_equal(a, b) {
    return a != a ? b == b : a !== b;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      for (const callback of callbacks) {
        callback(void 0);
      }
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function get_store_value(store) {
    let value;
    subscribe(store, (_) => value = _)();
    return value;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }

  // node_modules/svelte/src/runtime/internal/globals.js
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
    // @ts-ignore Node typings have this
    global
  );

  // node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
  var ResizeObserverSingleton = class _ResizeObserverSingleton {
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    _listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    /**
     * @private
     * @type {ResizeObserver}
     */
    _observer = void 0;
    /** @type {ResizeObserverOptions} */
    options;
    /** @param {ResizeObserverOptions} options */
    constructor(options) {
      this.options = options;
    }
    /**
     * @param {Element} element
     * @param {import('./private.js').Listener} listener
     * @returns {() => void}
     */
    observe(element2, listener) {
      this._listeners.set(element2, listener);
      this._getObserver().observe(element2, this.options);
      return () => {
        this._listeners.delete(element2);
        this._observer.unobserve(element2);
      };
    }
    /**
     * @private
     */
    _getObserver() {
      return this._observer ?? (this._observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          this._listeners.get(entry.target)?.(entry);
        }
      }));
    }
  };
  ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

  // node_modules/svelte/src/runtime/internal/dom.js
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function prevent_default(fn) {
    return function(event) {
      event.preventDefault();
      return fn.call(this, event);
    };
  }
  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data) return;
    text2.data = /** @type {string} */
    data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function get_custom_elements_slots(element2) {
    const result = {};
    element2.childNodes.forEach(
      /** @param {Element} node */
      (node) => {
        result[node.slot || "default"] = true;
      }
    );
    return result;
  }

  // node_modules/svelte/src/runtime/internal/lifecycle.js
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  // node_modules/svelte/src/runtime/internal/scheduler.js
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = /* @__PURE__ */ Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length) binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
  }

  // node_modules/svelte/src/runtime/internal/transitions.js
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2) block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }

  // node_modules/svelte/src/runtime/internal/each.js
  function ensure_array_like(array_like_or_iterator) {
    return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }

  // node_modules/svelte/src/shared/boolean_attributes.js
  var _boolean_attributes = (
    /** @type {const} */
    [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]
  );
  var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

  // node_modules/svelte/src/runtime/internal/Component.js
  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance7, create_fragment7, not_equal2, props, append_styles = null, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal: not_equal2,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance7 ? instance7(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment7 ? create_fragment7($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, Function[]>} Event listeners */
      $$l = {};
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      constructor($$componentCtor, $$slots, use_shadow_dom) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (use_shadow_dom) {
          this.attachShadow({ mode: "open" });
        }
      }
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
        if (this.$$l[type]) {
          const idx = this.$$l[type].indexOf(listener);
          if (idx >= 0) {
            this.$$l[type].splice(idx, 1);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return () => {
              let node;
              const obj = {
                c: function create() {
                  node = element("slot");
                  if (name !== "default") {
                    attr(node, "name", name);
                  }
                },
                /**
                 * @param {HTMLElement} target
                 * @param {HTMLElement} [anchor]
                 */
                m: function mount(target, anchor) {
                  insert(target, node, anchor);
                },
                d: function destroy(detaching) {
                  if (detaching) {
                    detach(node);
                  }
                }
              };
              return obj;
            };
          };
          await Promise.resolve();
          if (!this.$$cn || this.$$c) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              $$slots[name] = [create_slot(name)];
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          for (const key in this.$$p_d) {
            if (!(key in this.$$d) && this[key] !== void 0) {
              this.$$d[key] = this[key];
              delete this[key];
            }
          }
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$scope: {
                ctx: []
              }
            }
          });
          const reflect_attributes = () => {
            this.$$r = true;
            for (const key in this.$$p_d) {
              this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
              if (this.$$p_d[key].reflect) {
                const attribute_value = get_custom_element_value(
                  key,
                  this.$$d[key],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(this.$$p_d[key].attribute || key);
                } else {
                  this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
                }
              }
            }
            this.$$r = false;
          };
          this.$$c.$$.after_update.push(reflect_attributes);
          reflect_attributes();
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      attributeChangedCallback(attr2, _oldValue, newValue) {
        if (this.$$r) return;
        attr2 = this.$$g_p(attr2);
        this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr2]: this.$$d[attr2] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn && this.$$c) {
            this.$$c.$destroy();
            this.$$c = void 0;
          }
        });
      }
      $$g_p(attribute_name) {
        return Object.keys(this.$$p_d).find(
          (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop, value, props_definition, transform) {
    const type = props_definition[prop]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  var SvelteComponent = class {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$ = void 0;
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$set = void 0;
    /** @returns {void} */
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    /**
     * @template {Extract<keyof Events, string>} K
     * @param {K} type
     * @param {((e: Events[K]) => void) | null | undefined} callback
     * @returns {() => void}
     */
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
    /**
     * @param {Partial<Props>} props
     * @returns {void}
     */
    $set(props) {
      if (this.$$set && !is_empty(props)) {
        this.$$.skip_bound = true;
        this.$$set(props);
        this.$$.skip_bound = false;
      }
    }
  };

  // node_modules/svelte/src/shared/version.js
  var PUBLIC_VERSION = "4";

  // node_modules/svelte/src/runtime/internal/disclose-version/index.js
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

  // src/app/app.svelte
  var import_webextension_polyfill5 = __toESM(require_browser_polyfill());

  // node_modules/svelte/src/runtime/store/index.js
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set, update2) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }
  function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    if (!stores_array.every(Boolean)) {
      throw new Error("derived() expects stores as input, got a falsy value");
    }
    const auto = fn.length < 2;
    return readable(initial_value, (set, update2) => {
      let started = false;
      const values = [];
      let pending = 0;
      let cleanup = noop;
      const sync = () => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values[0] : values, set, update2);
        if (auto) {
          set(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      };
      const unsubscribers = stores_array.map(
        (store, i) => subscribe(
          store,
          (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (started) {
              sync();
            }
          },
          () => {
            pending |= 1 << i;
          }
        )
      );
      started = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
        started = false;
      };
    });
  }

  // src/lib/store.js
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());

  // src/lib/readeck-api.js
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  async function logIn(url, username2, password) {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: url,
      path: "api/auth",
      params: {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username2,
          password,
          application: "browser-extension",
          roles: ["scoped_bookmarks_r", "scoped_bookmarks_w"]
        })
      }
    });
  }
  async function checkUser() {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: get_store_value(serverURL),
      path: "api/profile",
      params: {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        }
      }
    });
  }
  async function deleteToken() {
    if (!get_store_value(tokenID)) {
      return;
    }
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: get_store_value(serverURL),
      path: `api/profile/tokens/${get_store_value(tokenID)}`,
      params: {
        method: "delete",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        }
      }
    });
  }
  async function savePage(page) {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "save-page",
      serverURL: get_store_value(serverURL),
      path: "api/bookmarks",
      params: {
        method: "post",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        }
      },
      page
    });
  }
  async function getBookmark(id) {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: get_store_value(serverURL),
      path: `api/bookmarks/${id}`,
      params: {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        }
      }
    });
  }
  async function updateBookmark(id, params) {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: get_store_value(serverURL),
      path: `api/bookmarks/${id}`,
      params: {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        },
        body: JSON.stringify(params)
      }
    });
  }
  async function getLabels() {
    return await import_webextension_polyfill.default.runtime.sendMessage({
      type: "readeck-api",
      serverURL: get_store_value(serverURL),
      path: "api/bookmarks/labels",
      params: {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${get_store_value(token)}`
        }
      }
    });
  }

  // src/lib/store.js
  var serverURL = writable("https://readeck.com/");
  var token = writable(null);
  var tokenID = writable(null);
  var username = writable(null);
  var online = writable(false);
  var connError = writable("");
  var labelList = (() => {
    const { subscribe: subscribe2, set } = writable([]);
    return {
      subscribe: subscribe2,
      refresh: async () => {
        set((await getLabels()).json.map((x) => x.name));
      }
    };
  })();
  var connected = derived(
    [online, username],
    ([$online, $username]) => $online && !!$username
  );
  online.subscribe(async (value) => {
    if (value) {
      connError.set("");
      await labelList.refresh();
    }
  });
  async function loadSettings() {
    let r = await import_webextension_polyfill2.default.storage.local.get("settings");
    if (typeof r.settings === "undefined") {
      return;
    }
    token.set(r.settings.token);
    if (r.settings.serverURL) {
      serverURL.set(r.settings.serverURL);
    }
  }
  async function saveSettings() {
    return await import_webextension_polyfill2.default.storage.local.set({
      settings: {
        serverURL: get_store_value(serverURL),
        token: get_store_value(token)
      }
    });
  }
  async function loadProfile() {
    online.set(false);
    username.set(null);
    tokenID.set(null);
    await loadSettings();
    if (!get_store_value(token)) {
      return;
    }
    let rsp = await checkUser();
    if (!rsp.ok || rsp.status === 0) {
      connError.set(rsp.error);
      return;
    }
    online.set(true);
    username.set(rsp.json.user.username);
    tokenID.set(rsp.json.provider.id);
  }
  async function logout() {
    await loadProfile();
    if (get_store_value(tokenID)) {
      await deleteToken();
      tokenID.set(null);
    }
    token.set(null);
    await saveSettings();
    username.set(null);
    online.set(false);
  }
  async function grantApiPermission(serverURL2) {
    let url = new URL(serverURL2);
    let hostPermission = `${url.protocol}//${url.hostname}/*`;
    let granted = await import_webextension_polyfill2.default.permissions.request({
      origins: [hostPermission]
    });
    if (!granted) {
      return false;
    }
    return true;
  }

  // src/lib/tab.js
  var import_webextension_polyfill3 = __toESM(require_browser_polyfill());

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
  var allowedSchemes = ["http:", "https:"];

  // src/lib/tab.js
  var currentTab = writable();
  function navigateTo(evt) {
    evt.preventDefault();
    import_webextension_polyfill3.default.tabs.create({ url: evt.target.href });
    window.close();
  }
  var TabItem = class {
    constructor(tab) {
      this.tab = tab;
      this.canSave = false;
      this.port = null;
    }
    /**
     * id is the attached tab's ID.
     *
     * @returns {number | undefined} Tab's ID
     */
    get id() {
      return this.tab.id;
    }
    /**
     * url is the attached tab's URL.
     *
     * @returns {string | undefined} Tab's ID
     */
    get url() {
      return this.tab.url;
    }
    /**
     * loaded is true when the tab is fully loaded.
     *
     * @returns {boolean} true when the tab is loaded.
     */
    get loaded() {
      return this.tab.status == "complete";
    }
    /**
     * sendCommand sends a command to the tab's content script
     * and returns its response.
     *
     * @param {string} name Command name
     * @param {object | undefined} options Command options
     * @returns {Promise<any>} Command result
     */
    sendCommand(name, options) {
      let message = {
        type: "command",
        id: Math.random().toString(36).substring(2, 9),
        name,
        options
      };
      const port = this.port;
      return new Promise(async (resolve, reject) => {
        async function onMessage(m) {
          if (m.type != "result" || m.id !== message.id) {
            return;
          }
          port.onMessage.removeListener(onMessage);
          if (m.result.error) {
            reject(m.result.error);
            return;
          }
          resolve(m.result);
        }
        port.onMessage.addListener(onMessage);
        port.postMessage(message);
      });
    }
    /**
     * connect creates the communication port for passing commands and receive events.
     *
     * @returns {Promise<void>}
     */
    async connect() {
      try {
        if (!this.url) {
          throw new Error("no URL");
        }
        if (this.tab.status != "complete") {
          throw new Error("not loaded");
        }
        if (!allowedSchemes.includes(new URL(this.url).protocol)) {
          throw new Error("invalid scheme");
        }
      } catch (e) {
        return;
      } finally {
        this.disconnect();
      }
      const tabId = this.tab.id;
      this.port = await new Promise(async (resolve) => {
        const onConnect = (p) => {
          if (p.sender.tab && p.sender.tab.id == tabId) {
            resolve(p);
          }
        };
        import_webextension_polyfill3.default.runtime.onConnect.addListener(onConnect);
        try {
          const res = await import_webextension_polyfill3.default.scripting.executeScript({
            files: ["/dist/content-script.js"],
            target: { tabId: this.tab.id }
          });
          if (res.length == 0) {
            import_webextension_polyfill3.default.runtime.onConnect.removeListener(onConnect);
            resolve(null);
          }
        } catch (e) {
          this.disconnect();
          resolve(null);
        }
      });
      this.canSave = this.port !== null;
    }
    /**
     * disconnect closes the communication port and reset the item's properties to an initial state.
     */
    disconnect() {
      if (this.port !== null) {
        this.port.disconnect();
      }
      this.port = null;
      this.canSave = false;
      this.state = 0;
      this.progress = 0;
    }
  };
  (async () => {
    import_webextension_polyfill3.default.tabs.onActivated.addListener(async ({ tabId }) => {
      const tab = await import_webextension_polyfill3.default.tabs.get(tabId);
      let item = get_store_value(currentTab);
      if (item === void 0) {
        item = new TabItem(tab);
      } else {
        item.tab = tab;
      }
      await item.connect();
      currentTab.update(() => item);
    });
    import_webextension_polyfill3.default.tabs.onUpdated.addListener(async (tabId) => {
      const tab = await import_webextension_polyfill3.default.tabs.get(tabId);
      if (!tab.active) {
        return;
      }
      let item = get_store_value(currentTab);
      item.tab = tab;
      await item.connect();
      currentTab.update(() => item);
    });
    const tabs = await import_webextension_polyfill3.default.tabs.query({
      active: true,
      currentWindow: true
    });
    if (tabs.length > 0) {
      const item = new TabItem(tabs[0]);
      currentTab.set(item);
      await item.connect();
      currentTab.update(() => item);
    }
  })();

  // src/app/login.svelte
  function create_if_block(ctx) {
    let div;
    let strong;
    let t1;
    let t2;
    return {
      c() {
        div = element("div");
        strong = element("strong");
        strong.textContent = "Error:";
        t1 = space();
        t2 = text(
          /*error*/
          ctx[3]
        );
        attr(div, "class", "p-2 bg-red-100 border border-red-800 text-red-800 rounded-md");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, strong);
        append(div, t1);
        append(div, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*error*/
        8) set_data(
          t2,
          /*error*/
          ctx2[3]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
      }
    };
  }
  function create_fragment(ctx) {
    let div4;
    let h2;
    let t1;
    let p;
    let t3;
    let t4;
    let form;
    let div0;
    let label0;
    let t6;
    let input0;
    let t7;
    let div1;
    let label1;
    let t9;
    let input1;
    let t10;
    let div2;
    let label2;
    let t12;
    let input2;
    let t13;
    let div3;
    let button;
    let t14;
    let button_disabled_value;
    let form_disabled_value;
    let mounted;
    let dispose;
    let if_block = (
      /*error*/
      ctx[3] && create_if_block(ctx)
    );
    return {
      c() {
        div4 = element("div");
        h2 = element("h2");
        h2.textContent = "Welcome to Readeck!";
        t1 = space();
        p = element("p");
        p.textContent = "Please log-in to your Readeck server.";
        t3 = space();
        if (if_block) if_block.c();
        t4 = space();
        form = element("form");
        div0 = element("div");
        label0 = element("label");
        label0.textContent = "Username";
        t6 = space();
        input0 = element("input");
        t7 = space();
        div1 = element("div");
        label1 = element("label");
        label1.textContent = "Password";
        t9 = space();
        input1 = element("input");
        t10 = space();
        div2 = element("div");
        label2 = element("label");
        label2.textContent = "Server URL";
        t12 = space();
        input2 = element("input");
        t13 = space();
        div3 = element("div");
        button = element("button");
        t14 = text("Login");
        attr(h2, "class", "mb-2 text-lg font-semibold");
        attr(p, "class", "mb-4");
        attr(label0, "for", "username");
        attr(label0, "class", "font-semibold");
        attr(input0, "type", "text");
        attr(input0, "id", "username");
        attr(input0, "class", "w-full form-input");
        attr(div0, "class", "mb-2");
        attr(label1, "for", "password");
        attr(label1, "class", "font-semibold");
        attr(input1, "type", "password");
        attr(input1, "id", "password");
        attr(input1, "class", "w-full form-input");
        attr(div1, "class", "mb-2");
        attr(label2, "for", "server");
        attr(label2, "class", "font-semibold");
        attr(input2, "type", "text");
        attr(input2, "id", "server");
        attr(input2, "class", "w-full form-input");
        attr(div2, "class", "mb-6");
        attr(button, "type", "submit");
        attr(button, "class", "w-full btn");
        button.disabled = button_disabled_value = !/*canLogin*/
        ctx[4];
        attr(form, "class", "my-2");
        attr(form, "disabled", form_disabled_value = !/*canLogin*/
        ctx[4]);
        attr(div4, "class", "px-3");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, h2);
        append(div4, t1);
        append(div4, p);
        append(div4, t3);
        if (if_block) if_block.m(div4, null);
        append(div4, t4);
        append(div4, form);
        append(form, div0);
        append(div0, label0);
        append(div0, t6);
        append(div0, input0);
        set_input_value(
          input0,
          /*username*/
          ctx[0]
        );
        append(form, t7);
        append(form, div1);
        append(div1, label1);
        append(div1, t9);
        append(div1, input1);
        set_input_value(
          input1,
          /*password*/
          ctx[1]
        );
        append(form, t10);
        append(form, div2);
        append(div2, label2);
        append(div2, t12);
        append(div2, input2);
        set_input_value(
          input2,
          /*server*/
          ctx[2]
        );
        append(form, t13);
        append(form, div3);
        append(div3, button);
        append(button, t14);
        if (!mounted) {
          dispose = [
            listen(
              input0,
              "input",
              /*input0_input_handler*/
              ctx[6]
            ),
            listen(
              input1,
              "input",
              /*input1_input_handler*/
              ctx[7]
            ),
            listen(
              input2,
              "input",
              /*input2_input_handler*/
              ctx[8]
            ),
            listen(form, "submit", prevent_default(
              /*apiLogin*/
              ctx[5]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*error*/
          ctx2[3]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(div4, t4);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*username*/
        1 && input0.value !== /*username*/
        ctx2[0]) {
          set_input_value(
            input0,
            /*username*/
            ctx2[0]
          );
        }
        if (dirty & /*password*/
        2 && input1.value !== /*password*/
        ctx2[1]) {
          set_input_value(
            input1,
            /*password*/
            ctx2[1]
          );
        }
        if (dirty & /*server*/
        4 && input2.value !== /*server*/
        ctx2[2]) {
          set_input_value(
            input2,
            /*server*/
            ctx2[2]
          );
        }
        if (dirty & /*canLogin*/
        16 && button_disabled_value !== (button_disabled_value = !/*canLogin*/
        ctx2[4])) {
          button.disabled = button_disabled_value;
        }
        if (dirty & /*canLogin*/
        16 && form_disabled_value !== (form_disabled_value = !/*canLogin*/
        ctx2[4])) {
          attr(form, "disabled", form_disabled_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div4);
        }
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let canLogin;
    "use strict";
    let username2 = "";
    let password = "";
    let server = "";
    let error = "";
    serverURL.subscribe((value) => {
      $$invalidate(2, server = value);
    });
    async function apiLogin() {
      let hasPermission = await grantApiPermission(server);
      if (!hasPermission) {
        return;
      }
      try {
        let r = await logIn(server + "/", username2, password);
        $$invalidate(2, server = r.url.replace(/api\/auth$/, ""));
        if (r.ok) {
          token.set(r.json.token);
          serverURL.set(server);
          await saveSettings();
          await loadProfile();
        } else if (r.status == 403) {
          $$invalidate(3, error = "Invalid username and/or password");
        } else {
          $$invalidate(3, error = "Unable to connect to server");
        }
      } catch (e) {
        console.error(e);
        $$invalidate(3, error = "Could not connect to the server");
      }
    }
    function input0_input_handler() {
      username2 = this.value;
      $$invalidate(0, username2);
    }
    function input1_input_handler() {
      password = this.value;
      $$invalidate(1, password);
    }
    function input2_input_handler() {
      server = this.value;
      $$invalidate(2, server);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*server, username, password*/
      7) {
        $: $$invalidate(4, canLogin = server != "" && username2 != "" && password != "");
      }
    };
    return [
      username2,
      password,
      server,
      error,
      canLogin,
      apiLogin,
      input0_input_handler,
      input1_input_handler,
      input2_input_handler
    ];
  }
  var Login = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  };
  var login_default = Login;

  // src/app/save.svelte
  var import_webextension_polyfill4 = __toESM(require_browser_polyfill());

  // src/app/icon.svelte
  function create_else_block(ctx) {
    let span;
    let span_class_value;
    return {
      c() {
        span = element("span");
        attr(span, "class", span_class_value = "inline leading-none relative h-[1em] top-[-0.08em] [&_svg]:inline [&_svg]:h-[1em] [&_svg]:w-[1em] " + /*className*/
        ctx[1]);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        ctx[3](span);
      },
      p(ctx2, dirty) {
        if (dirty & /*className*/
        2 && span_class_value !== (span_class_value = "inline leading-none relative h-[1em] top-[-0.08em] [&_svg]:inline [&_svg]:h-[1em] [&_svg]:w-[1em] " + /*className*/
        ctx2[1])) {
          attr(span, "class", span_class_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
        ctx[3](null);
      }
    };
  }
  function create_if_block2(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        span.textContent = "--missing-icon--";
        attr(span, "class", "text-red-600");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(span);
        }
      }
    };
  }
  function create_fragment2(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (icons[
        /*name*/
        ctx2[0]
      ] === void 0) return create_if_block2;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if_block.d(detaching);
      }
    };
  }
  var icons = {
    "archive-off": require_bx_archive(),
    "archive-on": require_bxs_archive(),
    "close-circle": require_bxs_x_circle(),
    close: require_bx_x(),
    "chevron-down": require_bx_chevron_down(),
    "chevron-up": require_bx_chevron_up(),
    "favorite-off": require_bx_heart(),
    "favorite-on": require_bxs_heart(),
    info: require_bx_info_circle()
  };
  function instance2($$self, $$props, $$invalidate) {
    "use strict";
    let { name } = $$props;
    let { class: className = "" } = $$props;
    let container;
    onMount(() => {
      const icon = new DOMParser().parseFromString(icons[name], "image/svg+xml");
      container.appendChild(icon.firstChild);
    });
    function span_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        container = $$value;
        $$invalidate(2, container);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2) $$invalidate(0, name = $$props2.name);
      if ("class" in $$props2) $$invalidate(1, className = $$props2.class);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*name, container*/
      5) {
        $: {
          if (name && container) {
            container.removeChild(container.firstChild);
            const icon = new DOMParser().parseFromString(icons[name], "image/svg+xml");
            container.appendChild(icon.firstChild);
          }
        }
      }
    };
    return [name, className, container, span_binding];
  }
  var Icon = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, not_equal, { name: 0, class: 1 });
    }
  };
  var icon_default = Icon;

  // src/app/labels.svelte
  var { Boolean: Boolean_1 } = globals;
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[28] = list[i];
    child_ctx[29] = list;
    child_ctx[30] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    return child_ctx;
  }
  function create_each_block_1(ctx) {
    let li;
    let span;
    let t0_value = (
      /*label*/
      ctx[4] + ""
    );
    let t0;
    let t1;
    let button;
    let icon;
    let li_title_value;
    let current;
    let mounted;
    let dispose;
    icon = new icon_default({
      props: { name: "close", class: "text-xl" }
    });
    function click_handler() {
      return (
        /*click_handler*/
        ctx[16](
          /*label*/
          ctx[4]
        )
      );
    }
    return {
      c() {
        li = element("li");
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        button = element("button");
        create_component(icon.$$.fragment);
        attr(span, "class", "pl-2 truncate");
        attr(button, "type", "button");
        attr(button, "class", "py-[0.1rem] border-l border-blue-200 fill-red-900 enabled:hf:fill-red-700 enabled:hf:bg-blue-200 enabled:hf:ring-0 rounded-r");
        button.disabled = /*disabled*/
        ctx[2];
        attr(li, "class", "flex gap-1 items-center bg-blue-100 rounded max-w-full");
        attr(li, "title", li_title_value = /*label*/
        ctx[4]);
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, span);
        append(span, t0);
        append(li, t1);
        append(li, button);
        mount_component(icon, button, null);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", prevent_default(click_handler));
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty[0] & /*labels*/
        1) && t0_value !== (t0_value = /*label*/
        ctx[4] + "")) set_data(t0, t0_value);
        if (!current || dirty[0] & /*disabled*/
        4) {
          button.disabled = /*disabled*/
          ctx[2];
        }
        if (!current || dirty[0] & /*labels*/
        1 && li_title_value !== (li_title_value = /*label*/
        ctx[4])) {
          attr(li, "title", li_title_value);
        }
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        destroy_component(icon);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_2(ctx) {
    let div;
    let button;
    let current_block_type_index;
    let if_block;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block_3, create_else_block2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*listVisible*/
        ctx2[7]
      ) return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1, -1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        button = element("button");
        if_block.c();
        attr(button, "type", "button");
        attr(button, "tabindex", "-1");
        attr(button, "class", "fill-gray-500 hf:fill-primary");
        attr(div, "class", "flex items-center border-l");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        if_blocks[current_block_type_index].m(button, null);
        current = true;
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler_1*/
            ctx[19]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
          }
          transition_in(if_block, 1);
          if_block.m(button, null);
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        if_blocks[current_block_type_index].d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_else_block2(ctx) {
    let icon;
    let current;
    icon = new icon_default({
      props: { name: "chevron-down", class: "text-lg" }
    });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function create_if_block_3(ctx) {
    let icon;
    let current;
    icon = new icon_default({
      props: { name: "chevron-up", class: "text-lg" }
    });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function create_if_block3(ctx) {
    let div;
    let ul;
    let t;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*optionList*/
      ctx[8]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    let if_block = !!/*label*/
    ctx[4] && create_if_block_1(ctx);
    return {
      c() {
        div = element("div");
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        if (if_block) if_block.c();
        attr(ul, "class", "max-h-44 overflow-y-auto");
        attr(ul, "role", "listbox");
        attr(ul, "tabindex", "-1");
        attr(div, "class", "absolute z-50 border shadow-md bg-gray-light min-w-full max-w-full rounded");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, ul);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
        ctx[22](ul);
        append(div, t);
        if (if_block) if_block.m(div, null);
        if (!mounted) {
          dispose = listen(
            div,
            "mousedown",
            /*onListMouseDown*/
            ctx[13]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*optionList, _optionRefs, pushLabel*/
        16648) {
          each_value = ensure_array_like(
            /*optionList*/
            ctx2[8]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(ul, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (!!/*label*/
        ctx2[4]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_1(ctx2);
            if_block.c();
            if_block.m(div, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        ctx[22](null);
        if (if_block) if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block(ctx) {
    let li;
    let t0_value = (
      /*option*/
      ctx[28] + ""
    );
    let t0;
    let t1;
    let li_data_value_value;
    let i = (
      /*i*/
      ctx[30]
    );
    let mounted;
    let dispose;
    const assign_li = () => (
      /*li_binding*/
      ctx[20](li, i)
    );
    const unassign_li = () => (
      /*li_binding*/
      ctx[20](null, i)
    );
    function click_handler_2() {
      return (
        /*click_handler_2*/
        ctx[21](
          /*option*/
          ctx[28]
        )
      );
    }
    return {
      c() {
        li = element("li");
        t0 = text(t0_value);
        t1 = space();
        attr(li, "role", "option");
        attr(li, "class", "block w-full max-w-full text-left p-1 truncate cursor-default hf:bg-primary hf:text-white aria-selected:bg-primary aria-selected:text-white");
        attr(li, "data-value", li_data_value_value = /*option*/
        ctx[28]);
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, t0);
        append(li, t1);
        assign_li();
        if (!mounted) {
          dispose = listen(li, "click", click_handler_2);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*optionList*/
        256 && t0_value !== (t0_value = /*option*/
        ctx[28] + "")) set_data(t0, t0_value);
        if (dirty[0] & /*optionList*/
        256 && li_data_value_value !== (li_data_value_value = /*option*/
        ctx[28])) {
          attr(li, "data-value", li_data_value_value);
        }
        if (i !== /*i*/
        ctx[30]) {
          unassign_li();
          i = /*i*/
          ctx[30];
          assign_li();
        }
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        unassign_li();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_1(ctx) {
    let span1;
    let t0;
    let strong;
    let t1;
    let t2;
    let span0;
    let t4;
    let mounted;
    let dispose;
    return {
      c() {
        span1 = element("span");
        t0 = text("Add ");
        strong = element("strong");
        t1 = text(
          /*label*/
          ctx[4]
        );
        t2 = text("\n          (or press\n          ");
        span0 = element("span");
        span0.textContent = "Enter";
        t4 = text(")");
        attr(strong, "class", "truncate");
        attr(span0, "class", "inline-block p-0.5 rounded border bg-gray-50");
        attr(span1, "role", "button");
        attr(span1, "class", "flex flex-wrap gap-1 w-full border-t p-2 items-center justify-center text-primary hf:text-primary-dark");
      },
      m(target, anchor) {
        insert(target, span1, anchor);
        append(span1, t0);
        append(span1, strong);
        append(strong, t1);
        append(span1, t2);
        append(span1, span0);
        append(span1, t4);
        if (!mounted) {
          dispose = listen(
            span1,
            "click",
            /*click_handler_3*/
            ctx[23]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*label*/
        16) set_data(
          t1,
          /*label*/
          ctx2[4]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(span1);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment3(ctx) {
    let div1;
    let div0;
    let ul;
    let t0;
    let li;
    let input;
    let t1;
    let t2;
    let current;
    let mounted;
    let dispose;
    let each_value_1 = ensure_array_like(
      /*labels*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block0 = (
      /*options*/
      ctx[1].length > 0 && create_if_block_2(ctx)
    );
    let if_block1 = (
      /*listVisible*/
      ctx[7] && create_if_block3(ctx)
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        ul = element("ul");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        li = element("li");
        input = element("input");
        t1 = space();
        if (if_block0) if_block0.c();
        t2 = space();
        if (if_block1) if_block1.c();
        attr(input, "class", "w-full bg-transparent");
        attr(input, "type", "text");
        attr(input, "id", "label");
        attr(input, "size", "5");
        input.disabled = /*disabled*/
        ctx[2];
        attr(input, "autocomplete", "off");
        attr(li, "class", "grow");
        attr(ul, "class", "grow flex gap-1 flex-wrap items-center overflow-hidden");
        attr(div0, "class", "form-input pr-0.5 min-h-11 focus-within:border-primary flex gap-1");
        attr(div1, "class", "relative");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        append(div0, ul);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(ul, null);
          }
        }
        append(ul, t0);
        append(ul, li);
        append(li, input);
        set_input_value(
          input,
          /*label*/
          ctx[4]
        );
        ctx[18](input);
        append(div0, t1);
        if (if_block0) if_block0.m(div0, null);
        append(div1, t2);
        if (if_block1) if_block1.m(div1, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[17]
            ),
            listen(
              input,
              "keyup",
              /*onInputKeyUp*/
              ctx[9]
            ),
            listen(
              input,
              "keydown",
              /*onInputKeyDown*/
              ctx[10]
            ),
            listen(
              input,
              "input",
              /*onInputChange*/
              ctx[11]
            ),
            listen(
              input,
              "blur",
              /*onInputBlur*/
              ctx[12]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*labels, disabled, removeLabel*/
        32773) {
          each_value_1 = ensure_array_like(
            /*labels*/
            ctx2[0]
          );
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_1(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(ul, t0);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (!current || dirty[0] & /*disabled*/
        4) {
          input.disabled = /*disabled*/
          ctx2[2];
        }
        if (dirty[0] & /*label*/
        16 && input.value !== /*label*/
        ctx2[4]) {
          set_input_value(
            input,
            /*label*/
            ctx2[4]
          );
        }
        if (
          /*options*/
          ctx2[1].length > 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty[0] & /*options*/
            2) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_2(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div0, null);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (
          /*listVisible*/
          ctx2[7]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block3(ctx2);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      i(local) {
        if (current) return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block0);
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean_1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block0);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        destroy_each(each_blocks, detaching);
        ctx[18](null);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let optionRefs;
    let optionList;
    "use strict";
    let { labels = [] } = $$props;
    let { options = [] } = $$props;
    let { disabled = false } = $$props;
    let label = "";
    let inputElement;
    let listElement;
    let listVisible = false;
    let optionMouseDown = false;
    let _optionRefs = [];
    function onInputKeyUp(evt) {
      switch (evt.key) {
        case "Enter":
          const selected = getSelected();
          if (selected) {
            evt.preventDefault();
            pushLabel(selected.dataset["value"]);
          } else if (label) {
            evt.preventDefault();
            pushLabel(label);
          }
          break;
        case "Escape":
          evt.preventDefault();
          $$invalidate(7, listVisible = false);
          break;
      }
    }
    function onInputKeyDown(evt) {
      let moveStep;
      switch (evt.key) {
        case "ArrowDown":
          moveStep = 1;
          break;
        case "PageDown":
          moveStep = 5;
          break;
        case "ArrowUp":
          moveStep = -1;
          break;
        case "PageUp":
          moveStep = -5;
          break;
        case "Backspace":
          if (!label) {
            $$invalidate(4, label = `${labels[labels.length - 1] || ""} `);
            $$invalidate(0, labels = labels.slice(0, -1));
          }
          break;
      }
      if (moveStep !== void 0) {
        evt.preventDefault();
        $$invalidate(7, listVisible = true);
        moveSelection(moveStep);
      }
    }
    function onInputChange(evt) {
      optionRefs.forEach((e) => e.removeAttribute("aria-selected"));
      $$invalidate(7, listVisible = true);
    }
    function onInputBlur(evt) {
      if (!optionMouseDown) {
        $$invalidate(7, listVisible = false);
      }
    }
    function onListMouseDown(evt) {
      optionMouseDown = true;
      evt.target.addEventListener(
        "mouseup",
        () => {
          optionMouseDown = false;
        },
        { once: true }
      );
    }
    function moveSelection(step) {
      if (optionRefs.length == 0) {
        return;
      }
      const selected = getSelected();
      const idx = optionRefs.indexOf(selected);
      const sibling = optionRefs[idx + step] || (step > 0 ? optionRefs[0] : optionRefs[optionRefs.length - 1]);
      if (!!selected) {
        selected.removeAttribute("aria-selected");
      }
      sibling.setAttribute("aria-selected", "true");
      sibling.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    function pushLabel(value) {
      if (!value || value.trim() == "") {
        return;
      }
      $$invalidate(0, labels = [...labels, value.trim()].filter((v, i, self2) => {
        return self2.indexOf(v) === i;
      }));
      $$invalidate(4, label = "");
      inputElement.focus();
      $$invalidate(7, listVisible = false);
    }
    function removeLabel(label2) {
      $$invalidate(0, labels = labels.filter((v) => v != label2));
      inputElement.focus();
    }
    function getSelected() {
      return optionRefs.find((e) => e.getAttribute("aria-selected") == "true");
    }
    const click_handler = (label2) => removeLabel(label2);
    function input_input_handler() {
      label = this.value;
      $$invalidate(4, label);
    }
    function input_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        inputElement = $$value;
        $$invalidate(5, inputElement);
      });
    }
    const click_handler_1 = () => {
      $$invalidate(7, listVisible = !listVisible);
      inputElement.focus();
    };
    function li_binding($$value, i) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        _optionRefs[i] = $$value;
        $$invalidate(3, _optionRefs);
      });
    }
    const click_handler_2 = (option) => pushLabel(option);
    function ul_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        listElement = $$value;
        $$invalidate(6, listElement);
      });
    }
    const click_handler_3 = () => pushLabel(label);
    $$self.$$set = ($$props2) => {
      if ("labels" in $$props2) $$invalidate(0, labels = $$props2.labels);
      if ("options" in $$props2) $$invalidate(1, options = $$props2.options);
      if ("disabled" in $$props2) $$invalidate(2, disabled = $$props2.disabled);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*_optionRefs*/
      8) {
        $: optionRefs = _optionRefs.filter(Boolean);
      }
      if ($$self.$$.dirty[0] & /*options, label*/
      18) {
        $: $$invalidate(8, optionList = options.reduce(
          (acc, cur) => {
            if (cur.toLowerCase().includes(label.toLowerCase())) {
              acc.push(cur);
            }
            return acc;
          },
          []
        ));
      }
    };
    return [
      labels,
      options,
      disabled,
      _optionRefs,
      label,
      inputElement,
      listElement,
      listVisible,
      optionList,
      onInputKeyUp,
      onInputKeyDown,
      onInputChange,
      onInputBlur,
      onListMouseDown,
      pushLabel,
      removeLabel,
      click_handler,
      input_input_handler,
      input_binding,
      click_handler_1,
      li_binding,
      click_handler_2,
      ul_binding,
      click_handler_3
    ];
  }
  var Labels = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, { labels: 0, options: 1, disabled: 2 }, null, [-1, -1]);
    }
  };
  var labels_default = Labels;

  // src/app/progress.svelte
  function create_fragment4(ctx) {
    let div1;
    let div0;
    let style_width = `${/*progress*/
    ctx[0]}%`;
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        attr(div0, "class", "h-2 bg-yellow-500");
        set_style(div0, "width", style_width);
        attr(div1, "class", "w-full bg-gray-400");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        ctx[2](div0);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*progress*/
        1 && style_width !== (style_width = `${/*progress*/
        ctx2[0]}%`)) {
          set_style(div0, "width", style_width);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        ctx[2](null);
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    "use strict";
    let { progress = 0 } = $$props;
    let p;
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        p = $$value;
        $$invalidate(1, p);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("progress" in $$props2) $$invalidate(0, progress = $$props2.progress);
    };
    return [progress, p, div0_binding];
  }
  var Progress = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment4, safe_not_equal, { progress: 0 });
    }
  };
  var progress_default = Progress;

  // src/app/save.svelte
  function create_else_block_1(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "You cannot save this page";
        attr(p, "class", "font-semibold text-red-700");
      },
      m(target, anchor) {
        insert(target, p, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(p);
        }
      }
    };
  }
  function create_if_block4(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_12, create_if_block_7, create_if_block_11, create_if_block_13];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (
        /*state*/
        ctx2[0] == /*States*/
        ctx2[21].Initial
      ) return 0;
      if (
        /*state*/
        ctx2[0] == /*States*/
        ctx2[21].Saving
      ) return 1;
      if (
        /*state*/
        ctx2[0] == /*States*/
        ctx2[21].Done
      ) return 2;
      if (
        /*state*/
        ctx2[0] == /*States*/
        ctx2[21].Error
      ) return 3;
      return -1;
    }
    if (~(current_block_type_index = select_block_type_1(ctx, [-1, -1]))) {
      if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    return {
      c() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(target, anchor);
        }
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx2, dirty);
          }
        } else {
          if (if_block) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block = if_blocks[current_block_type_index];
            if (!if_block) {
              if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
              if_block.c();
            } else {
              if_block.p(ctx2, dirty);
            }
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          } else {
            if_block = null;
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d(detaching);
        }
      }
    };
  }
  function create_if_block_13(ctx) {
    let h1;
    let t1;
    let p0;
    let t3;
    let p1;
    let t4;
    return {
      c() {
        h1 = element("h1");
        h1.textContent = "Something went wrong :-(";
        t1 = space();
        p0 = element("p");
        p0.textContent = "The extension could not save this page.";
        t3 = space();
        p1 = element("p");
        t4 = text(
          /*error*/
          ctx[12]
        );
        attr(h1, "class", "text-2xl text-center text-red-700");
        attr(p0, "class", "my-4");
        attr(p1, "class", "font-semibold");
      },
      m(target, anchor) {
        insert(target, h1, anchor);
        insert(target, t1, anchor);
        insert(target, p0, anchor);
        insert(target, t3, anchor);
        insert(target, p1, anchor);
        append(p1, t4);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*error*/
        4096) set_data(
          t4,
          /*error*/
          ctx2[12]
        );
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(h1);
          detach(t1);
          detach(p0);
          detach(t3);
          detach(p1);
        }
      }
    };
  }
  function create_if_block_11(ctx) {
    let h1;
    let t1;
    let if_block_anchor;
    let current;
    let if_block = (
      /*bookmarkID*/
      ctx[1] && create_if_block_122(ctx)
    );
    return {
      c() {
        h1 = element("h1");
        h1.textContent = "Bookmark saved! \u{1F389}";
        t1 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr(h1, "class", "text-2xl text-center");
      },
      m(target, anchor) {
        insert(target, h1, anchor);
        insert(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (
          /*bookmarkID*/
          ctx2[1]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*bookmarkID*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_122(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(h1);
          detach(t1);
          detach(if_block_anchor);
        }
        if (if_block) if_block.d(detaching);
      }
    };
  }
  function create_if_block_7(ctx) {
    let h1;
    let t1;
    let progress_1;
    let t2;
    let p;
    let current;
    progress_1 = new progress_default({
      props: {
        progress: Math.min(
          100,
          /*progress*/
          ctx[10]
        )
      }
    });
    function select_block_type_3(ctx2, dirty) {
      if (
        /*savingState*/
        ctx2[11] == /*SavingStates*/
        ctx2[22].Content
      ) return create_if_block_8;
      if (
        /*savingState*/
        ctx2[11] == /*SavingStates*/
        ctx2[22].Saving
      ) return create_if_block_9;
      if (
        /*savingState*/
        ctx2[11] == /*SavingStates*/
        ctx2[22].Saved
      ) return create_if_block_10;
    }
    let current_block_type = select_block_type_3(ctx, [-1, -1]);
    let if_block = current_block_type && current_block_type(ctx);
    return {
      c() {
        h1 = element("h1");
        h1.textContent = "Saving Bookmark";
        t1 = space();
        create_component(progress_1.$$.fragment);
        t2 = space();
        p = element("p");
        if (if_block) if_block.c();
        attr(h1, "class", "mb-4 text-2xl text-center");
        attr(p, "class", "mt-4 text-lg text-center");
      },
      m(target, anchor) {
        insert(target, h1, anchor);
        insert(target, t1, anchor);
        mount_component(progress_1, target, anchor);
        insert(target, t2, anchor);
        insert(target, p, anchor);
        if (if_block) if_block.m(p, null);
        current = true;
      },
      p(ctx2, dirty) {
        const progress_1_changes = {};
        if (dirty[0] & /*progress*/
        1024) progress_1_changes.progress = Math.min(
          100,
          /*progress*/
          ctx2[10]
        );
        progress_1.$set(progress_1_changes);
        if (current_block_type !== (current_block_type = select_block_type_3(ctx2, dirty))) {
          if (if_block) if_block.d(1);
          if_block = current_block_type && current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(p, null);
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(progress_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(progress_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(h1);
          detach(t1);
          detach(t2);
          detach(p);
        }
        destroy_component(progress_1, detaching);
        if (if_block) {
          if_block.d();
        }
      }
    };
  }
  function create_if_block_12(ctx) {
    let div1;
    let label0;
    let t1;
    let input;
    let t2;
    let div0;
    let span;
    let label1;
    let t4;
    let t5;
    let labels_1;
    let updating_labels;
    let t6;
    let t7;
    let button;
    let t8;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*keywords*/
      ctx[8].length > 0 && create_if_block_6(ctx)
    );
    function labels_1_labels_binding(value) {
      ctx[28](value);
    }
    let labels_1_props = {
      disabled: (
        /*disabled*/
        ctx[18]
      ),
      options: (
        /*$labelList*/
        ctx[20]
      )
    };
    if (
      /*labels*/
      ctx[9] !== void 0
    ) {
      labels_1_props.labels = /*labels*/
      ctx[9];
    }
    labels_1 = new labels_default({ props: labels_1_props });
    binding_callbacks.push(() => bind(labels_1, "labels", labels_1_labels_binding));
    let if_block1 = !/*isArticle*/
    ctx[5] && !/*isSelection*/
    ctx[7] && !/*isImage*/
    ctx[6] && create_if_block_5(ctx);
    function select_block_type_2(ctx2, dirty) {
      if (
        /*isImage*/
        ctx2[6]
      ) return create_if_block_32;
      if (
        /*isSelection*/
        ctx2[7]
      ) return create_if_block_4;
      return create_else_block3;
    }
    let current_block_type = select_block_type_2(ctx, [-1, -1]);
    let if_block2 = current_block_type(ctx);
    let if_block3 = !/*isSelection*/
    ctx[7] && !/*isImage*/
    ctx[6] && create_if_block_22(ctx);
    return {
      c() {
        div1 = element("div");
        label0 = element("label");
        label0.textContent = "Title";
        t1 = space();
        input = element("input");
        t2 = space();
        div0 = element("div");
        span = element("span");
        label1 = element("label");
        label1.textContent = "Labels";
        t4 = space();
        if (if_block0) if_block0.c();
        t5 = space();
        create_component(labels_1.$$.fragment);
        t6 = space();
        if (if_block1) if_block1.c();
        t7 = space();
        button = element("button");
        if_block2.c();
        t8 = space();
        if (if_block3) if_block3.c();
        attr(label0, "for", "title");
        attr(label0, "class", "block font-semibold");
        input.disabled = /*disabled*/
        ctx[18];
        attr(input, "type", "text");
        attr(input, "id", "title");
        attr(input, "class", "w-full form-input min-h-11");
        attr(label1, "for", "label");
        attr(label1, "class", "font-semibold");
        attr(span, "class", "flex gap-2");
        attr(div0, "class", "mt-2 mb-4");
        button.disabled = /*disabled*/
        ctx[18];
        attr(button, "class", "w-full btn");
        attr(div1, "class", "w-full");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, label0);
        append(div1, t1);
        append(div1, input);
        set_input_value(
          input,
          /*title*/
          ctx[4]
        );
        append(div1, t2);
        append(div1, div0);
        append(div0, span);
        append(span, label1);
        append(span, t4);
        if (if_block0) if_block0.m(span, null);
        append(div0, t5);
        mount_component(labels_1, div0, null);
        append(div1, t6);
        if (if_block1) if_block1.m(div1, null);
        append(div1, t7);
        append(div1, button);
        if_block2.m(button, null);
        append(div1, t8);
        if (if_block3) if_block3.m(div1, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[26]
            ),
            listen(
              button,
              "click",
              /*save*/
              ctx[23]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & /*disabled*/
        262144) {
          input.disabled = /*disabled*/
          ctx2[18];
        }
        if (dirty[0] & /*title*/
        16 && input.value !== /*title*/
        ctx2[4]) {
          set_input_value(
            input,
            /*title*/
            ctx2[4]
          );
        }
        if (
          /*keywords*/
          ctx2[8].length > 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_6(ctx2);
            if_block0.c();
            if_block0.m(span, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        const labels_1_changes = {};
        if (dirty[0] & /*disabled*/
        262144) labels_1_changes.disabled = /*disabled*/
        ctx2[18];
        if (dirty[0] & /*$labelList*/
        1048576) labels_1_changes.options = /*$labelList*/
        ctx2[20];
        if (!updating_labels && dirty[0] & /*labels*/
        512) {
          updating_labels = true;
          labels_1_changes.labels = /*labels*/
          ctx2[9];
          add_flush_callback(() => updating_labels = false);
        }
        labels_1.$set(labels_1_changes);
        if (!/*isArticle*/
        ctx2[5] && !/*isSelection*/
        ctx2[7] && !/*isImage*/
        ctx2[6]) {
          if (if_block1) {
            if (dirty[0] & /*isArticle, isSelection, isImage*/
            224) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_5(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div1, t7);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (current_block_type !== (current_block_type = select_block_type_2(ctx2, dirty))) {
          if_block2.d(1);
          if_block2 = current_block_type(ctx2);
          if (if_block2) {
            if_block2.c();
            if_block2.m(button, null);
          }
        }
        if (!current || dirty[0] & /*disabled*/
        262144) {
          button.disabled = /*disabled*/
          ctx2[18];
        }
        if (!/*isSelection*/
        ctx2[7] && !/*isImage*/
        ctx2[6]) {
          if (if_block3) {
          } else {
            if_block3 = create_if_block_22(ctx2);
            if_block3.c();
            if_block3.m(div1, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
      },
      i(local) {
        if (current) return;
        transition_in(labels_1.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(labels_1.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        if (if_block0) if_block0.d();
        destroy_component(labels_1);
        if (if_block1) if_block1.d();
        if_block2.d();
        if (if_block3) if_block3.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_122(ctx) {
    let p;
    let a;
    let t0;
    let t1;
    let ul;
    let li0;
    let button0;
    let icon0;
    let t2;
    let t3;
    let t4;
    let li1;
    let button1;
    let icon1;
    let t5;
    let t6;
    let current;
    let mounted;
    let dispose;
    icon0 = new icon_default({
      props: {
        name: (
          /*favoriteIcon*/
          ctx[16]
        ),
        class: "fill-current"
      }
    });
    icon1 = new icon_default({
      props: {
        name: (
          /*archiveIcon*/
          ctx[14]
        ),
        class: "fill-current"
      }
    });
    return {
      c() {
        p = element("p");
        a = element("a");
        t0 = text("Open in Readeck");
        t1 = space();
        ul = element("ul");
        li0 = element("li");
        button0 = element("button");
        create_component(icon0.$$.fragment);
        t2 = space();
        t3 = text(
          /*favoriteLabel*/
          ctx[15]
        );
        t4 = space();
        li1 = element("li");
        button1 = element("button");
        create_component(icon1.$$.fragment);
        t5 = space();
        t6 = text(
          /*archiveLabel*/
          ctx[13]
        );
        attr(
          a,
          "href",
          /*bookmarkLink*/
          ctx[17]
        );
        attr(a, "class", "text-primary font-semibold hf:text-primary-dark");
        attr(p, "class", "my-4 text-center");
        attr(button0, "class", "p-2 border border-primary rounded-full text-primary hf:bg-primary hf:text-white");
        attr(button1, "class", "p-2 border border-primary rounded-full text-primary hf:bg-primary hf:text-white");
        attr(ul, "class", "my-4 flex gap-2");
      },
      m(target, anchor) {
        insert(target, p, anchor);
        append(p, a);
        append(a, t0);
        insert(target, t1, anchor);
        insert(target, ul, anchor);
        append(ul, li0);
        append(li0, button0);
        mount_component(icon0, button0, null);
        append(button0, t2);
        append(button0, t3);
        append(ul, t4);
        append(ul, li1);
        append(li1, button1);
        mount_component(icon1, button1, null);
        append(button1, t5);
        append(button1, t6);
        current = true;
        if (!mounted) {
          dispose = [
            listen(a, "click", navigateTo),
            listen(
              button0,
              "click",
              /*click_handler_1*/
              ctx[29]
            ),
            listen(
              button1,
              "click",
              /*click_handler_2*/
              ctx[30]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & /*bookmarkLink*/
        131072) {
          attr(
            a,
            "href",
            /*bookmarkLink*/
            ctx2[17]
          );
        }
        const icon0_changes = {};
        if (dirty[0] & /*favoriteIcon*/
        65536) icon0_changes.name = /*favoriteIcon*/
        ctx2[16];
        icon0.$set(icon0_changes);
        if (!current || dirty[0] & /*favoriteLabel*/
        32768) set_data(
          t3,
          /*favoriteLabel*/
          ctx2[15]
        );
        const icon1_changes = {};
        if (dirty[0] & /*archiveIcon*/
        16384) icon1_changes.name = /*archiveIcon*/
        ctx2[14];
        icon1.$set(icon1_changes);
        if (!current || dirty[0] & /*archiveLabel*/
        8192) set_data(
          t6,
          /*archiveLabel*/
          ctx2[13]
        );
      },
      i(local) {
        if (current) return;
        transition_in(icon0.$$.fragment, local);
        transition_in(icon1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon0.$$.fragment, local);
        transition_out(icon1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(p);
          detach(t1);
          detach(ul);
        }
        destroy_component(icon0);
        destroy_component(icon1);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_10(ctx) {
    let t0;
    let br;
    let t1;
    return {
      c() {
        t0 = text("Bookmark saved.");
        br = element("br");
        t1 = text("\n          Waiting for Readeck's link.");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, br, anchor);
        insert(target, t1, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t0);
          detach(br);
          detach(t1);
        }
      }
    };
  }
  function create_if_block_9(ctx) {
    let t;
    return {
      c() {
        t = text("Saving page.");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_8(ctx) {
    let t;
    return {
      c() {
        t = text("Processing content");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_6(ctx) {
    let div;
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        button = element("button");
        button.textContent = "Use page keywords";
        attr(button, "type", "button");
        attr(button, "class", "font-semibold text-primary hf:text-primary-dark");
        attr(div, "class", "ml-auto");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler*/
            ctx[27]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_5(ctx) {
    let div;
    let span;
    let icon;
    let t0;
    let p;
    let current;
    icon = new icon_default({
      props: { name: "info", class: "text-2xl" }
    });
    return {
      c() {
        div = element("div");
        span = element("span");
        create_component(icon.$$.fragment);
        t0 = space();
        p = element("p");
        p.textContent = "This page doesn't seem to be an article. You may try to save a\n              selection instead of the whole page if Readeck yields unexpected\n              results.";
        attr(span, "class", "fill-blue-700");
        attr(p, "class", "grow");
        attr(div, "class", "flex gap-1 p-1 items-start my-6 bg-blue-50 rounded shadow text-blue-800");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span);
        mount_component(icon, span, null);
        append(div, t0);
        append(div, p);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_component(icon);
      }
    };
  }
  function create_else_block3(ctx) {
    let t;
    return {
      c() {
        t = text("Save this page");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_4(ctx) {
    let t;
    return {
      c() {
        t = text("Save this selection");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_32(ctx) {
    let t;
    return {
      c() {
        t = text("Save this image");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_22(ctx) {
    let div0;
    let t3;
    let div1;
    return {
      c() {
        div0 = element("div");
        div0.innerHTML = `<h2 class="font-semibold text-base">Save the entire page</h2> <p>Click on the button above to retrieve and save this page to
              Readeck.</p>`;
        t3 = space();
        div1 = element("div");
        div1.innerHTML = `<h2 class="font-semibold text-base">Save selections</h2> <p>Alternatively, you can select one or several parts of the page to
              restrict what you want Readeck to save for you.</p>`;
        attr(div0, "class", "my-4");
        attr(div1, "class", "mb-8");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        insert(target, t3, anchor);
        insert(target, div1, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(div0);
          detach(t3);
          detach(div1);
        }
      }
    };
  }
  function create_fragment5(ctx) {
    let div;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block4, create_else_block_1];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*$currentTab*/
        ctx2[19].canSave
      ) return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1, -1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "flex-grow px-3 flex flex-col justify-center items-center");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_blocks[current_block_type_index].m(div, null);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function getTitle(text2, url) {
    text2 = text2.trim();
    if (text2 != "") {
      return text2;
    }
    text2 = new URL(url).pathname.split("/").slice(-1)[0];
    text2 = text2.replace(/\.(.*)$/, "").replace(/[_-]+/g, " ");
    return decodeURIComponent(text2);
  }
  function instance5($$self, $$props, $$invalidate) {
    let disabled;
    let bookmarkLink;
    let favoriteIcon;
    let favoriteLabel;
    let archiveIcon;
    let archiveLabel;
    let $currentTab;
    let $serverURL;
    let $connected;
    let $labelList;
    component_subscribe($$self, currentTab, ($$value) => $$invalidate(19, $currentTab = $$value));
    component_subscribe($$self, serverURL, ($$value) => $$invalidate(24, $serverURL = $$value));
    component_subscribe($$self, connected, ($$value) => $$invalidate(25, $connected = $$value));
    component_subscribe($$self, labelList, ($$value) => $$invalidate(20, $labelList = $$value));
    "use strict";
    const States = Object.freeze({ Initial: 0, Saving: 1, Done: 2, Error: 3 });
    const SavingStates = Object.freeze({ Content: 0, Saving: 1, Saved: 2 });
    let state = States.Initial;
    let title = "";
    let contentType = "";
    let isArticle = false;
    let isImage = false;
    let isSelection = false;
    let keywords = [];
    let labels = [];
    let progress = 0;
    let savingState = SavingStates.Content;
    let bookmarkID = "";
    let isArchived = void 0;
    let isMarked = void 0;
    let error = "";
    let page;
    currentTab.subscribe(async () => {
      if ($currentTab.id && $currentTab.port) {
        $$invalidate(0, state = States.Initial);
        $$invalidate(11, savingState = SavingStates.Content);
        $$invalidate(5, isArticle = await $currentTab.sendCommand("isArticle"));
        $$invalidate(7, isSelection = await $currentTab.sendCommand("isSelection"));
        const info = await $currentTab.sendCommand("getInfo");
        contentType = info.contentType;
        $$invalidate(4, title = info.title);
        $$invalidate(8, keywords = info.keywords);
        $$invalidate(9, labels = []);
        $$invalidate(6, isImage = imageTypes.includes(contentType));
        if (isImage) {
          $$invalidate(4, title = "");
        }
        $$invalidate(4, title = getTitle(title, $currentTab.url));
        $currentTab.port.onMessage.addListener((m) => {
          if (m.type == "progress") {
            $$invalidate(10, progress = m.value);
          }
        });
        page = $currentTab.sendCommand("getPage");
        const port = await import_webextension_polyfill4.default.runtime.connect({ name: "readeck-popup" });
        port.onMessage.addListener(async (msg) => {
          switch (msg.id) {
            case "set-image":
              $$invalidate(4, title = getTitle("", msg.url));
              page = new Promise((resolve) => {
                resolve({
                  url: msg.url,
                  prefetch: [msg.url],
                  title,
                  metadata: {},
                  headers: {},
                  content: "",
                  labels: [],
                  fromSelection: false
                });
              });
              $$invalidate(6, isImage = true);
              break;
            case "save-page":
              await port.disconnect();
              save();
              break;
          }
        });
      }
    });
    async function save() {
      $$invalidate(0, state = States.Saving);
      try {
        const payload = await page;
        const pageRsp = await fetch(payload.url);
        for (let [k, v] of pageRsp.headers) {
          if (k.toLowerCase() in payload.headers) {
            continue;
          }
          payload.headers[k.toLowerCase()] = v;
        }
        $$invalidate(10, progress = 75);
        payload.title = title;
        payload.labels = labels;
        $$invalidate(11, savingState = SavingStates.Saving);
        const rsp = await savePage(payload);
        if (rsp.error) {
          throw new Error(rsp.error);
        }
        $$invalidate(11, savingState = SavingStates.Saved);
        const id = rsp.headers["bookmark-id"];
        await checkBookmark(id);
        $$invalidate(0, state = States.Done);
      } catch (e) {
        $$invalidate(0, state = States.Error);
        $$invalidate(12, error = e.message);
        console.error(e);
      } finally {
        $$invalidate(10, progress = 100);
      }
    }
    async function checkBookmark(id) {
      let rsp = await getBookmark(id);
      if (rsp.error) {
        throw new Error(rsp.error);
      }
      $$invalidate(10, progress += 5);
      if (rsp.json.loaded) {
        $$invalidate(1, bookmarkID = rsp.headers["bookmark-id"]);
        return;
      }
      await new Promise((resolve, reject) => {
        setTimeout(
          async () => {
            try {
              await checkBookmark(id);
              resolve();
            } catch (e) {
              reject(e);
            }
          },
          1e3
        );
      });
    }
    function input_input_handler() {
      title = this.value;
      $$invalidate(4, title), $$invalidate(0, state);
    }
    const click_handler = () => {
      $$invalidate(9, labels = [...new Set(labels.concat(keywords))]);
    };
    function labels_1_labels_binding(value) {
      labels = value;
      $$invalidate(9, labels), $$invalidate(0, state);
    }
    const click_handler_1 = () => $$invalidate(3, isMarked = !isMarked);
    const click_handler_2 = () => $$invalidate(2, isArchived = !isArchived);
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*$connected, state*/
      33554433) {
        $: $$invalidate(18, disabled = !$connected || state != States.Initial);
      }
      if ($$self.$$.dirty[0] & /*bookmarkID, $serverURL*/
      16777218) {
        $: $$invalidate(17, bookmarkLink = new URL(`bookmarks/${bookmarkID}`, $serverURL).toString());
      }
      if ($$self.$$.dirty[0] & /*state*/
      1) {
        $: {
          if (state != States.Saving) {
            $$invalidate(10, progress = 0);
          }
          if (state == States.Initial) {
            $$invalidate(4, title = "");
            contentType = "";
            $$invalidate(5, isArticle = false);
            $$invalidate(6, isImage = false);
            $$invalidate(7, isSelection = false);
            $$invalidate(2, isArchived = void 0);
            $$invalidate(3, isMarked = void 0);
            $$invalidate(9, labels = []);
          }
        }
      }
      if ($$self.$$.dirty[0] & /*isMarked*/
      8) {
        $: $$invalidate(16, favoriteIcon = isMarked ? "favorite-on" : "favorite-off");
      }
      if ($$self.$$.dirty[0] & /*isMarked*/
      8) {
        $: $$invalidate(15, favoriteLabel = isMarked ? "Remove from favorites" : "Add to favorites");
      }
      if ($$self.$$.dirty[0] & /*isArchived*/
      4) {
        $: $$invalidate(14, archiveIcon = isArchived ? "archive-on" : "archive-off");
      }
      if ($$self.$$.dirty[0] & /*isArchived*/
      4) {
        $: $$invalidate(13, archiveLabel = isArchived ? "Remove from archive" : "Add to archive");
      }
      if ($$self.$$.dirty[0] & /*bookmarkID, isArchived, isMarked*/
      14) {
        $: {
          if (bookmarkID && (isArchived !== void 0 || isMarked !== void 0)) {
            const params = {};
            if (isArchived !== void 0) {
              params["is_archived"] = isArchived;
            }
            if (isMarked !== void 0) {
              params["is_marked"] = isMarked;
            }
            updateBookmark(bookmarkID, params);
          }
        }
      }
    };
    return [
      state,
      bookmarkID,
      isArchived,
      isMarked,
      title,
      isArticle,
      isImage,
      isSelection,
      keywords,
      labels,
      progress,
      savingState,
      error,
      archiveLabel,
      archiveIcon,
      favoriteLabel,
      favoriteIcon,
      bookmarkLink,
      disabled,
      $currentTab,
      $labelList,
      States,
      SavingStates,
      save,
      $serverURL,
      $connected,
      input_input_handler,
      click_handler,
      labels_1_labels_binding,
      click_handler_1,
      click_handler_2
    ];
  }
  var Save = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment5, safe_not_equal, {}, null, [-1, -1]);
    }
  };
  var save_default = Save;

  // src/app/app.svelte
  function create_else_block_12(ctx) {
    let save;
    let current;
    save = new save_default({});
    return {
      c() {
        create_component(save.$$.fragment);
      },
      m(target, anchor) {
        mount_component(save, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current) return;
        transition_in(save.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(save.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(save, detaching);
      }
    };
  }
  function create_if_block_33(ctx) {
    let login;
    let current;
    login = new login_default({});
    return {
      c() {
        create_component(login.$$.fragment);
      },
      m(target, anchor) {
        mount_component(login, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current) return;
        transition_in(login.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(login.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(login, detaching);
      }
    };
  }
  function create_if_block_23(ctx) {
    let div;
    let p0;
    let t1;
    let ul;
    let t7;
    let p1;
    let t9;
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        p0 = element("p");
        p0.textContent = "Readeck needs your permission to access data remotely on any website,\n          for the following purposes:";
        t1 = space();
        ul = element("ul");
        ul.innerHTML = `<li>Connect to Readeck</li> <li>Retrieve the current page information</li> <li>Fetch images</li>`;
        t7 = space();
        p1 = element("p");
        p1.textContent = "This is only used to create a new bookmark.";
        t9 = space();
        button = element("button");
        button.textContent = "Grant Permissions";
        attr(p0, "class", "mb-4");
        attr(ul, "class", "mb-4 list-disc list-inside");
        attr(p1, "class", "mb-4");
        attr(button, "class", "w-full bg-primary hover:bg-primary-dark text-white font-semibold p-2 text-base rounded");
        attr(div, "class", "px-3");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, p0);
        append(div, t1);
        append(div, ul);
        append(div, t7);
        append(div, p1);
        append(div, t9);
        append(div, button);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*grantPermissions*/
            ctx[7]
          );
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block5(ctx) {
    let div;
    let t0;
    let span;
    let button;
    let mounted;
    let dispose;
    function select_block_type_1(ctx2, dirty) {
      if (
        /*$connected*/
        ctx2[4]
      ) return create_if_block_14;
      return create_else_block4;
    }
    let current_block_type = select_block_type_1(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        t0 = space();
        span = element("span");
        button = element("button");
        button.textContent = "Logout";
        attr(button, "class", "font-semibold bg-gray-200 hf:bg-gray-300 px-2 py-1 rounded");
        attr(div, "class", "border-t-gray-200 bg-gray-100 border-t px-3 py-4 flex gap-2 items-center");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_block.m(div, null);
        append(div, t0);
        append(div, span);
        append(span, button);
        if (!mounted) {
          dispose = listen(button, "click", logout);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(div, t0);
          }
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_else_block4(ctx) {
    let span;
    let t0;
    let a;
    let t1;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t0 = text("You are not connected to ");
        a = element("a");
        t1 = text(
          /*domain*/
          ctx[0]
        );
        attr(
          a,
          "href",
          /*server*/
          ctx[1]
        );
        attr(a, "class", "text-primary font-semibold hf:text-primary-dark");
        attr(span, "class", "grow");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, a);
        append(a, t1);
        if (!mounted) {
          dispose = listen(a, "click", navigateTo);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*domain*/
        1) set_data(
          t1,
          /*domain*/
          ctx2[0]
        );
        if (dirty & /*server*/
        2) {
          attr(
            a,
            "href",
            /*server*/
            ctx2[1]
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_14(ctx) {
    let span;
    let t0;
    let strong;
    let t1;
    let t2;
    let a;
    let t3;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t0 = text("Connected as ");
        strong = element("strong");
        t1 = text(
          /*$username*/
          ctx[5]
        );
        t2 = text(" on\n          ");
        a = element("a");
        t3 = text(
          /*domain*/
          ctx[0]
        );
        attr(
          a,
          "href",
          /*server*/
          ctx[1]
        );
        attr(a, "class", "text-primary font-semibold hf:text-primary-dark");
        attr(span, "class", "grow");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, strong);
        append(strong, t1);
        append(span, t2);
        append(span, a);
        append(a, t3);
        if (!mounted) {
          dispose = listen(a, "click", navigateTo);
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$username*/
        32) set_data(
          t1,
          /*$username*/
          ctx2[5]
        );
        if (dirty & /*domain*/
        1) set_data(
          t3,
          /*domain*/
          ctx2[0]
        );
        if (dirty & /*server*/
        2) {
          attr(
            a,
            "href",
            /*server*/
            ctx2[1]
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment6(ctx) {
    let div2;
    let div0;
    let t1;
    let div1;
    let current_block_type_index;
    let if_block0;
    let t2;
    let current;
    const if_block_creators = [create_if_block_23, create_if_block_33, create_else_block_12];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (!/*$hasPermissions*/
      ctx2[2]) return 0;
      if (!/*$token*/
      ctx2[3]) return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    let if_block1 = (
      /*$token*/
      ctx[3] && create_if_block5(ctx)
    );
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        div0.innerHTML = `<img alt="Readeck" src="../logo.svg" class="h-7 w-7"/>
    Readeck`;
        t1 = space();
        div1 = element("div");
        if_block0.c();
        t2 = space();
        if (if_block1) if_block1.c();
        attr(div0, "class", "p-3 bg-gray-100 border-b flex gap-2 items-center text-2xl");
        attr(div1, "class", "grow overflow-y-auto pt-4 flex flex-col place-content-start");
        attr(div2, "class", "h-screen flex flex-col bg-app-bg text-app-fg text-sm");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div2, t1);
        append(div2, div1);
        if_blocks[current_block_type_index].m(div1, null);
        append(div2, t2);
        if (if_block1) if_block1.m(div2, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(div1, null);
        }
        if (
          /*$token*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block5(ctx2);
            if_block1.c();
            if_block1.m(div2, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block0);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div2);
        }
        if_blocks[current_block_type_index].d();
        if (if_block1) if_block1.d();
      }
    };
  }
  function instance6($$self, $$props, $$invalidate) {
    let server;
    let domain;
    let $serverURL;
    let $hasPermissions;
    let $token;
    let $connected;
    let $username;
    component_subscribe($$self, serverURL, ($$value) => $$invalidate(8, $serverURL = $$value));
    component_subscribe($$self, token, ($$value) => $$invalidate(3, $token = $$value));
    component_subscribe($$self, connected, ($$value) => $$invalidate(4, $connected = $$value));
    component_subscribe($$self, username, ($$value) => $$invalidate(5, $username = $$value));
    "use strict";
    const hasPermissions = writable();
    component_subscribe($$self, hasPermissions, (value) => $$invalidate(2, $hasPermissions = value));
    import_webextension_polyfill5.default.runtime.getPlatformInfo().then((info) => {
      if (info.os != "android") {
        document.body.style.width = "375px";
        document.body.style.minHeight = "520px";
      }
    });
    onMount(async () => {
      hasPermissions.subscribe((value) => {
        if (value) {
          loadSettings();
          loadProfile();
        }
      });
      hasPermissions.set(await import_webextension_polyfill5.default.permissions.contains({ origins: ["http://*/*", "https://*/*"] }));
    });
    async function grantPermissions() {
      hasPermissions.set(await import_webextension_polyfill5.default.permissions.request({ origins: ["http://*/*", "https://*/*"] }));
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$serverURL*/
      256) {
        $: $$invalidate(1, server = $serverURL);
      }
      if ($$self.$$.dirty & /*$serverURL*/
      256) {
        $: $$invalidate(0, domain = ((x) => {
          return new URL(x).host;
        })($serverURL));
      }
    };
    return [
      domain,
      server,
      $hasPermissions,
      $token,
      $connected,
      $username,
      hasPermissions,
      grantPermissions,
      $serverURL
    ];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment6, safe_not_equal, {});
    }
  };
  var app_default = App;

  // src/main.js
  new app_default({
    target: document.getElementById("app")
  });
})();
