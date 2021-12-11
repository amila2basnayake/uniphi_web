"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
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

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(5698);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Shop/ProductIteam.js



const ProductContentWrap = ({ product  })=>{
    const { image , discountRate , name , orginalPrice , id  } = product;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-3 col-sm-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "product_wrp",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "product_img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `/assets/images/${image}`,
                            alt: "product"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "on_sale",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: discountRate
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "product_info",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/shop/${id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        "  ",
                                        name,
                                        "  "
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "product_rating",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-star"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-star"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-star"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-star"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-star"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "product_price",
                            children: orginalPrice
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "project_view",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-glyph-13"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#/",
                            className: "project-link",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-glyph-52"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const ProductIteam = (ProductContentWrap);

;// CONCATENATED MODULE: ./components/Shop/Product.js




const Product_ProductContentWrap = ()=>{
    const item = (0,external_react_.useContext)(ProductContext);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-md-12 product_show",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "product_count",
                            children: "Showing 1–8 of 12 results"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            className: "product_ordering",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                name: "orderby",
                                className: "orderby",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "menu_order",
                                        children: "Default sorting"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "popularity",
                                        children: "Sort by popularity"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "rating",
                                        children: "Sort by average rating"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "date",
                                        children: "Sort by newness"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "price",
                                        children: "Sort by price: low to high"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "price-desc",
                                        children: "Sort by price: high to low"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    item.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductIteam, {
                            product: product
                        }, product.id)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "prodt_pagination",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "page_number current",
                                        children: "1"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "page_number",
                                        children: "2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "page_number",
                                        children: "→"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Product = (Product_ProductContentWrap);

// EXTERNAL MODULE: ./data/Products/products.json
var products = __webpack_require__(4965);
;// CONCATENATED MODULE: ./components/Shop/index.js




const ProductContext = /*#__PURE__*/ (0,external_react_.createContext)();
const Shop_ProductContentWrap = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "product-section product_pg_prod",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(ProductContext.Provider, {
                value: products,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Product, {
                })
            })
        })
    }));
};
/* harmony default export */ const Shop = (Shop_ProductContentWrap);

;// CONCATENATED MODULE: ./pages/shop.js





const GalleryPg = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                    bgImg: '/assets/images/header.jpg',
                    title: "Our Shop"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Shop, {
                })
            ]
        })
    }));
};
/* harmony default export */ const shop = (GalleryPg);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948,965], () => (__webpack_exec__(7174)));
module.exports = __webpack_exports__;

})();