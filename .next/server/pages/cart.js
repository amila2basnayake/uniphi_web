"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 5698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PageHeader = ({ title , bgImg  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        id: "page-top",
        className: "blog-banner",
        style: {
            backgroundImage: `url(${bgImg})`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            id: "blog",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row blog-header text-left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: title
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ }),

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(5698);
;// CONCATENATED MODULE: ./components/Cart/CartItem.js


const CartItem = ({ image , name , total , price  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "prod",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: '/assets/images/' + image,
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "ptitle",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        " ",
                        name
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                className: "unit",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: price
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "qty",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "number",
                    placeholder: "1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "unit",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: total
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-trash"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Cart_CartItem = (CartItem);

;// CONCATENATED MODULE: ./components/Cart/Cart.js




const Cart = ()=>{
    const item = (0,external_react_.useContext)(CartContext);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "table-responsive text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            className: "table table-bordered",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "shop_cart_tr",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-center",
                                                children: "Product"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-center",
                                                children: "Products name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-center",
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-center",
                                                children: "Qty"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-center",
                                                children: "total"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    children: item.map((cart)=>/*#__PURE__*/ jsx_runtime_.jsx(Cart_CartItem, {
                                            ...cart
                                        }, cart.id)
                                    )
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shop_cart_bottom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5 col-md-7 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "discount-coupon",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                action: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "coupon",
                                                    type: "text"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "app-coupon",
                                                href: "#",
                                                children: "Apply Coupon"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7 col-md-5 col-sm-12 cart_update",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "app-coupon",
                                        href: "#",
                                        children: "Update Cart"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "offset-lg-7 col-lg-5 offset-md-5 col-md-7 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grand-total-area",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Cart Totals"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "sub-total",
                                            children: [
                                                "Subtotal",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "amt",
                                                    children: " $230.00"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "delivery",
                                            children: [
                                                "delivery",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "amt",
                                                    children: " $10.00"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "discount",
                                            children: [
                                                "discount",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "amt",
                                                    children: " $20.00"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "grand-total",
                                            children: [
                                                "total ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "amt",
                                                    children: "$200.00"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "pro-checkout",
                                            href: "checkout.html",
                                            children: "Proceed To Checkout"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Cart_Cart = (Cart);

;// CONCATENATED MODULE: ./data/CartItem/cart-item.json
const cart_item_namespaceObject = JSON.parse('[{"id":1,"image":"product01.png","name":"Samsung Mobile","price":"$160.00","total":"$190.00"},{"id":2,"image":"product02.png","name":"iPhone Mobile","price":"$130.00","total":"$290.00"}]');
;// CONCATENATED MODULE: ./components/Cart/index.js




const CartContext = /*#__PURE__*/ (0,external_react_.createContext)();
const ProductContentWrap = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shop_cart",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
                value: cart_item_namespaceObject,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Cart_Cart, {
                })
            })
        })
    }));
};
/* harmony default export */ const components_Cart = (ProductContentWrap);

;// CONCATENATED MODULE: ./pages/cart.js





const Service = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                    bgImg: '/assets/images/header.jpg',
                    title: "Cart Page"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Cart, {
                })
            ]
        })
    }));
};
/* harmony default export */ const cart = (Service);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948], () => (__webpack_exec__(4553)));
module.exports = __webpack_exports__;

})();