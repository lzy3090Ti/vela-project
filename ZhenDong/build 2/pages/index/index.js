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
                                "demo-page"
                            ]
                        ],
                        {
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
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            width: "200px",
                            height: "40px",
                            marginTop: "20px",
                            borderRadius: "5px",
                            backgroundColor: "blue",
                            fontSize: "20px",
                            color: "#ffffff"
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
                        routeDetail () {
                            _system.default.push({
                                uri: "/pages/vibrator"
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
                                "demo-page"
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
                                    return _vm_.$t("a.b") + ",欢迎打开" + _vm_.title;
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
                                value: "启动跳蛋主页🍒🍆",
                                events: {
                                    click: function(evt) {
                                        return _vm_.routeDetail(evt);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9aaGVuRG9uZy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vWmhlbkRvbmcvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vWmhlbkRvbmcvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjQuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNC4xMVwiO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGVtby1wYWdlXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7ICR0KFwiYS5iXCIpIH19LOasoui/juaJk+W8gHt7IHRpdGxlIH19PC90ZXh0PlxuICAgIDwhLS0g54K55Ye76Lez6L2s6K+m5oOF6aG1IC0tPlxuICAgIDxpbnB1dCBjbGFzcz1cImJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuWQr+WKqOi3s+ibi+S4u+mhtfCfjZLwn42GXCIgb25jbGljaz1cInJvdXRlRGV0YWlsXCIgLz5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8g6aG16Z2i57qn57uE5Lu255qE5pWw5o2u5qih5Z6L77yM5b2x5ZON5Lyg5YWl5pWw5o2u55qE6KaG55uW5py65Yi277yacHJpdmF0ZeWGheWumuS5ieeahOWxnuaAp+S4jeWFgeiuuOiiq+imhuebllxuICBwcml2YXRlOiB7XG4gICAgdGl0bGU6IFwi56S65L6L6aG16Z2iXCJcbiAgfSxcblxuICByb3V0ZURldGFpbCgpIHtcbiAgICAvLyDot7PovazliLDlupTnlKjlhoXnmoTmn5DkuKrpobXpnaLvvIxyb3V0ZXLnlKjms5Xor6bop4HvvJrmlofmoaMtPuaOpeWPoy0+6aG16Z2i6Lev55SxXG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgdXJpOiBcIi9wYWdlcy92aWJyYXRvclwiXG4gICAgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5kZW1vLXBhZ2Uge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlIDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJ0aXRsZSIsInJvdXRlRGV0YWlsIiwicm91dGVyIiwicHVzaCIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1UzQixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBbUMsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXBCO3dCQUViRyxTQUFTOzRCQUNQQyxPQUFPO3dCQUNUO3dCQUVBQzs0QkFFRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQ1ZDLEtBQUs7NEJBQ1A7d0JBQ0Y7b0JBQ0YifQ==