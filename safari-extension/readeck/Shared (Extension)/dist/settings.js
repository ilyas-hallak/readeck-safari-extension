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
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
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
  function init(component, options, instance4, create_fragment4, not_equal, props, append_styles = null, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
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
    $$.ctx = instance4 ? instance4(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment4 ? create_fragment4($$.ctx) : false;
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

  // src/app/settings.svelte
  var import_webextension_polyfill3 = __toESM(require_browser_polyfill());

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

  // src/app/preferences.svelte
  function create_else_block_1(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        span.textContent = "not connected";
        attr(span, "class", "text-red-700 font-bold");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
      }
    };
  }
  function create_if_block_3(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        span.textContent = "connected";
        attr(span, "class", "text-green-700 font-bold");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
      }
    };
  }
  function create_else_block(ctx) {
    let p0;
    let t1;
    let p1;
    let t2;
    return {
      c() {
        p0 = element("p");
        p0.textContent = "You are not connected to Readeck with your current settings.";
        t1 = space();
        p1 = element("p");
        t2 = text(
          /*$connError*/
          ctx[4]
        );
        attr(p0, "class", "mb-2");
        attr(p1, "class", "text-red-700");
      },
      m(target, anchor) {
        insert(target, p0, anchor);
        insert(target, t1, anchor);
        insert(target, p1, anchor);
        append(p1, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*$connError*/
        16) set_data(
          t2,
          /*$connError*/
          ctx2[4]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(p0);
          detach(t1);
          detach(p1);
        }
      }
    };
  }
  function create_if_block_2(ctx) {
    let p;
    let t1;
    let table;
    let tr0;
    let td0;
    let t3;
    let td1;
    let t4;
    let t5;
    let tr1;
    let td2;
    let t7;
    let td3;
    let t8;
    return {
      c() {
        p = element("p");
        p.textContent = "Your are connected to Readeck.";
        t1 = space();
        table = element("table");
        tr0 = element("tr");
        td0 = element("td");
        td0.textContent = "Username:";
        t3 = space();
        td1 = element("td");
        t4 = text(
          /*$username*/
          ctx[2]
        );
        t5 = space();
        tr1 = element("tr");
        td2 = element("td");
        td2.textContent = "Token ID:";
        t7 = space();
        td3 = element("td");
        t8 = text(
          /*$tokenID*/
          ctx[3]
        );
        attr(p, "class", "mb-2");
        attr(td0, "class", "font-semibold");
        attr(td2, "class", "font-semibold");
      },
      m(target, anchor) {
        insert(target, p, anchor);
        insert(target, t1, anchor);
        insert(target, table, anchor);
        append(table, tr0);
        append(tr0, td0);
        append(tr0, t3);
        append(tr0, td1);
        append(td1, t4);
        append(table, t5);
        append(table, tr1);
        append(tr1, td2);
        append(tr1, t7);
        append(tr1, td3);
        append(td3, t8);
      },
      p(ctx2, dirty) {
        if (dirty & /*$username*/
        4) set_data(
          t4,
          /*$username*/
          ctx2[2]
        );
        if (dirty & /*$tokenID*/
        8) set_data(
          t8,
          /*$tokenID*/
          ctx2[3]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(p);
          detach(t1);
          detach(table);
        }
      }
    };
  }
  function create_if_block_1(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        div.textContent = `${_error}`;
        attr(div, "class", "bg-red-50 border border-red-700");
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
      }
    };
  }
  function create_if_block2(ctx) {
    let h2;
    let t1;
    let div;
    let p;
    let t3;
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        h2 = element("h2");
        h2.textContent = "Logout";
        t1 = space();
        div = element("div");
        p = element("p");
        p.textContent = "If you'd wish to disconnect and remove this token from Readeck, you can\n        logout.";
        t3 = space();
        button = element("button");
        button.textContent = "Logout";
        attr(h2, "class", "text-base mt-6 mb-2 font-semibold");
        attr(p, "class", "mb-2");
        attr(button, "class", "w-full p-2 rounded border border-red-700 bg-red-100 text-red-700 font-semibold hf:bg-red-700 hf:text-white");
        attr(div, "class", "my-4");
      },
      m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, div, anchor);
        append(div, p);
        append(div, t3);
        append(div, button);
        if (!mounted) {
          dispose = listen(button, "click", logout);
          mounted = true;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(h2);
          detach(t1);
          detach(div);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment2(ctx) {
    let div3;
    let h20;
    let t0;
    let t1;
    let t2;
    let h21;
    let t4;
    let form;
    let t5;
    let div0;
    let label0;
    let t7;
    let input0;
    let t8;
    let div1;
    let label1;
    let t10;
    let input1;
    let t11;
    let p;
    let t13;
    let div2;
    let t15;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
      if (
        /*$connected*/
        ctx2[1]
      ) return create_if_block_3;
      return create_else_block_1;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block0 = current_block_type(ctx);
    function select_block_type_1(ctx2, dirty) {
      if (
        /*$connected*/
        ctx2[1]
      ) return create_if_block_2;
      return create_else_block;
    }
    let current_block_type_1 = select_block_type_1(ctx, -1);
    let if_block1 = current_block_type_1(ctx);
    let if_block2 = !!_error && create_if_block_1(ctx);
    let if_block3 = (
      /*$connected*/
      ctx[1] && create_if_block2(ctx)
    );
    return {
      c() {
        div3 = element("div");
        h20 = element("h2");
        t0 = text("Status:\n    ");
        if_block0.c();
        t1 = space();
        if_block1.c();
        t2 = space();
        h21 = element("h2");
        h21.textContent = "Update parameters";
        t4 = space();
        form = element("form");
        if (if_block2) if_block2.c();
        t5 = space();
        div0 = element("div");
        label0 = element("label");
        label0.textContent = "Server URL";
        t7 = space();
        input0 = element("input");
        t8 = space();
        div1 = element("div");
        label1 = element("label");
        label1.textContent = "API Token";
        t10 = space();
        input1 = element("input");
        t11 = space();
        p = element("p");
        p.textContent = "Leave this field empty to keep the current API token.";
        t13 = space();
        div2 = element("div");
        div2.innerHTML = `<button type="submit" class="w-full btn">Update</button>`;
        t15 = space();
        if (if_block3) if_block3.c();
        attr(h20, "class", "text-base mb-2 font-semibold");
        attr(h21, "class", "text-base mt-6 mb-2 font-semibold");
        attr(label0, "for", "server");
        attr(label0, "class", "font-semibold");
        attr(input0, "type", "text");
        attr(input0, "id", "server");
        attr(input0, "class", "w-full form-input");
        attr(div0, "class", "mb-4");
        attr(label1, "for", "token");
        attr(label1, "class", "font-semibold");
        attr(input1, "type", "text");
        attr(input1, "id", "token");
        attr(input1, "class", "w-full form-input");
        attr(p, "class", "text-green-700");
        attr(div1, "class", "mb-6");
        attr(form, "class", "my-2");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, h20);
        append(h20, t0);
        if_block0.m(h20, null);
        append(div3, t1);
        if_block1.m(div3, null);
        append(div3, t2);
        append(div3, h21);
        append(div3, t4);
        append(div3, form);
        if (if_block2) if_block2.m(form, null);
        append(form, t5);
        append(form, div0);
        append(div0, label0);
        append(div0, t7);
        append(div0, input0);
        set_input_value(
          input0,
          /*$serverURL*/
          ctx[5]
        );
        append(form, t8);
        append(form, div1);
        append(div1, label1);
        append(div1, t10);
        append(div1, input1);
        set_input_value(
          input1,
          /*_token*/
          ctx[0]
        );
        append(div1, t11);
        append(div1, p);
        append(form, t13);
        append(form, div2);
        append(div3, t15);
        if (if_block3) if_block3.m(div3, null);
        if (!mounted) {
          dispose = [
            listen(
              input0,
              "input",
              /*input0_input_handler*/
              ctx[7]
            ),
            listen(
              input1,
              "input",
              /*input1_input_handler*/
              ctx[8]
            ),
            listen(form, "submit", prevent_default(
              /*credentialsUpdate*/
              ctx[6]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (current_block_type !== (current_block_type = select_block_type(ctx2, dirty))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx2);
          if (if_block0) {
            if_block0.c();
            if_block0.m(h20, null);
          }
        }
        if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx2, dirty)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type_1(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(div3, t2);
          }
        }
        if (!!_error) if_block2.p(ctx2, dirty);
        if (dirty & /*$serverURL*/
        32 && input0.value !== /*$serverURL*/
        ctx2[5]) {
          set_input_value(
            input0,
            /*$serverURL*/
            ctx2[5]
          );
        }
        if (dirty & /*_token*/
        1 && input1.value !== /*_token*/
        ctx2[0]) {
          set_input_value(
            input1,
            /*_token*/
            ctx2[0]
          );
        }
        if (
          /*$connected*/
          ctx2[1]
        ) {
          if (if_block3) {
          } else {
            if_block3 = create_if_block2(ctx2);
            if_block3.c();
            if_block3.m(div3, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        if_block0.d();
        if_block1.d();
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var _error = "";
  function instance2($$self, $$props, $$invalidate) {
    let $connected;
    let $username;
    let $tokenID;
    let $connError;
    let $serverURL;
    component_subscribe($$self, connected, ($$value) => $$invalidate(1, $connected = $$value));
    component_subscribe($$self, username, ($$value) => $$invalidate(2, $username = $$value));
    component_subscribe($$self, tokenID, ($$value) => $$invalidate(3, $tokenID = $$value));
    component_subscribe($$self, connError, ($$value) => $$invalidate(4, $connError = $$value));
    component_subscribe($$self, serverURL, ($$value) => $$invalidate(5, $serverURL = $$value));
    "use strict";
    let _token = "";
    async function credentialsUpdate() {
      if (!!_token.trim()) {
        token.set(_token);
      }
      await saveSettings();
      await loadProfile();
      $$invalidate(0, _token = "");
    }
    function input0_input_handler() {
      $serverURL = this.value;
      serverURL.set($serverURL);
    }
    function input1_input_handler() {
      _token = this.value;
      $$invalidate(0, _token);
    }
    return [
      _token,
      $connected,
      $username,
      $tokenID,
      $connError,
      $serverURL,
      credentialsUpdate,
      input0_input_handler,
      input1_input_handler
    ];
  }
  var Preferences = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, {});
    }
  };
  var preferences_default = Preferences;

  // src/app/settings.svelte
  function create_else_block2(ctx) {
    let preferences;
    let current;
    preferences = new preferences_default({});
    return {
      c() {
        create_component(preferences.$$.fragment);
      },
      m(target, anchor) {
        mount_component(preferences, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current) return;
        transition_in(preferences.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(preferences.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(preferences, detaching);
      }
    };
  }
  function create_if_block_12(ctx) {
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
  function create_if_block3(ctx) {
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
        p0.textContent = "Readeck needs your permission to access data remotely on any\n            website, for the following purposes:";
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
            ctx[3]
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
  function create_fragment3(ctx) {
    let div3;
    let div0;
    let t1;
    let div2;
    let div1;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block3, create_if_block_12, create_else_block2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (!/*$hasPermissions*/
      ctx2[0]) return 0;
      if (!/*$token*/
      ctx2[1]) return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        div0.innerHTML = `<img alt="Readeck" src="logo.svg" class="h-7 w-7"/>
    Readeck Settings`;
        t1 = space();
        div2 = element("div");
        div1 = element("div");
        if_block.c();
        attr(div0, "class", "p-3 bg-gray-100 border-b flex gap-2 items-center text-2xl");
        attr(div1, "class", "grow overflow-y-auto pt-4 flex flex-col place-content-start");
        attr(div2, "class", "bg-app-bg px-3");
        attr(div3, "class", "max-w-screen-sm min-h-screen mx-auto py-4 text-app-fg text-sm");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div3, t1);
        append(div3, div2);
        append(div2, div1);
        if_blocks[current_block_type_index].m(div1, null);
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
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div1, null);
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
          detach(div3);
        }
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let $hasPermissions;
    let $token;
    component_subscribe($$self, token, ($$value) => $$invalidate(1, $token = $$value));
    "use strict";
    const hasPermissions = writable();
    component_subscribe($$self, hasPermissions, (value) => $$invalidate(0, $hasPermissions = value));
    onMount(async () => {
      hasPermissions.subscribe((value) => {
        if (value) {
          loadSettings();
          loadProfile();
        }
      });
      hasPermissions.set(await import_webextension_polyfill3.default.permissions.contains({ origins: ["http://*/*", "https://*/*"] }));
    });
    async function grantPermissions() {
      hasPermissions.set(await import_webextension_polyfill3.default.permissions.request({ origins: ["http://*/*", "https://*/*"] }));
    }
    return [$hasPermissions, $token, hasPermissions, grantPermissions];
  }
  var Settings = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, {});
    }
  };
  var settings_default = Settings;

  // src/settings.js
  new settings_default({
    target: document.getElementById("app")
  });
})();
