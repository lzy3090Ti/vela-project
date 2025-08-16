export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.4.11";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.4.11";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page-container"
                            ]
                        ],
                        {
                            backgroundColor: "red",
                            width: "100%",
                            minHeight: "100vh",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            textAlign: "center",
                            color: "#333333",
                            paddingTop: "20px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px"
                        }
                    ],
                    [
                        [
                            [
                                2,
                                "page"
                            ]
                        ],
                        {
                            marginTop: "0",
                            marginRight: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            paddingTop: "0",
                            paddingRight: "0",
                            paddingBottom: "0",
                            paddingLeft: "0"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            title: "示例页面"
                        },
                        back () {
                            _system.default.push({
                                uri: "/index"
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page-container"
                            ]
                        }
                    }, [
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: function() {
                                    return _vm_.text;
                                }
                            }
                        }, []),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn"
                                ],
                                type: "button",
                                value: "返回🔙",
                                events: {
                                    click: function(evt) {
                                        return _vm_.back(evt);
                                    }
                                }
                            }
                        }, [])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1poZW5Eb25nL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9aaGVuRG9uZy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9aaGVuRG9uZy9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS40LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjQuMTFcIjtcbiIsIjx0ZW1wbGF0ZT5cbiAgPCEtLSDmnIDlpJblsYLlrrnlmajorr7nva7lhajlsY/og4zmma8gLS0+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57eyB0ZXh0IH19PC90ZXh0PlxuICAgIDxpbnB1dCBjbGFzcz1cImJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIui/lOWbnvCflJlcIiBvbmNsaWNrPVwiYmFja1wiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyDpobXpnaLnuqfnu4Tku7bnmoTmlbDmja7mqKHlnovvvIzlvbHlk43kvKDlhaXmlbDmja7nmoTopobnm5bmnLrliLbvvJpwcml2YXRl5YaF5a6a5LmJ55qE5bGe5oCn5LiN5YWB6K646KKr6KaG55uWXG4gIHByaXZhdGU6IHtcbiAgICB0aXRsZTogXCLnpLrkvovpobXpnaJcIlxuICB9LFxuXG4gIGJhY2soKSB7XG4gICAgLy8g6Lez6L2s5Yiw5bqU55So5YaF55qE5p+Q5Liq6aG16Z2i77yMcm91dGVy55So5rOV6K+m6KeB77ya5paH5qGjLT7mjqXlj6MtPumhtemdoui3r+eUsVxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvaW5kZXhcIlxuICAgIH0pXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG5cblxuXG48c3R5bGU+XG4vKiDpobXpnaLmlbTkvZPmoLflvI8gKi9cbi5wYWdlLWNvbnRhaW5lciB7XG4gIC8qIOiuvue9ruiDjOaZr+minOiJsiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAvKiDlhbPplK7vvJrorqnlrrnlmajlhYXmu6HmlbTkuKrlsY/luZUgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiDljaDmu6HlsY/luZXpq5jluqYgKi9cbiAgXG4gIC8qIOWGhemDqOWGheWuueWxheS4rSAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzOyAvKiDmloflrZfpopzoibLkuI7og4zmma/ljLrliIblvIAgKi9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyog5Y+v6YCJ77ya5raI6Zmk6aG16Z2i6buY6K6k6L656LedICovXG5wYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJ0aXRsZSIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDUzNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFcEI7d0JBRWJHLFNBQVM7NEJBQ1BDLE9BQU87d0JBQ1Q7d0JBRUFDOzRCQUVFQyxRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FDVkMsS0FBSzs0QkFDUDt3QkFDRjtvQkFDRiJ9