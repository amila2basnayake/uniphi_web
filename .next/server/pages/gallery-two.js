"use strict";
(() => {
var exports = {};
exports.id = 314;
exports.ids = [314];
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

/***/ 1437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitle = ({ title , subTitle  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `base-header`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: title
            }),
            subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: subTitle
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 6207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_gallery_two)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(5698);
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(1437);
;// CONCATENATED MODULE: ./components/Gallery/gallery-two/CategoryItems.js


const Catitems = ({ filterMenu , catItems  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: catItems.map((curElem, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                onClick: ()=>filterMenu(curElem)
                ,
                children: [
                    " ",
                    curElem,
                    " "
                ]
            }, index));
        })
    }));
};
/* harmony default export */ const CategoryItems = (Catitems);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Gallery/gallery-two/GalleryItems.js



const GalleryItems = ({ title , thumb , tag , id  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-4 col-sm-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "single-project-item",
            style: {
                backgroundImage: `url(${'../../assets/images/' + thumb})`
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "project-hover",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "project_cnt"
                })
            })
        })
    }));
};
/* harmony default export */ const gallery_two_GalleryItems = (GalleryItems);

// EXTERNAL MODULE: ./data/Gallery/gallery.json
var gallery = __webpack_require__(1545);
;// CONCATENATED MODULE: ./components/Gallery/gallery-two/index.js






const allCatValues = [
    ...new Set(gallery.map((curElem)=>curElem.category
    )),
    "all"
];
const GalleryContent = ()=>{
    const { 0: items , 1: setItems  } = (0,external_react_.useState)(gallery);
    const { 0: catItems , 1: setCatItems  } = (0,external_react_.useState)(allCatValues);
    const filterMenu = (catList)=>{
        if (catList === 'all') {
            setItems(gallery);
            return;
        }
        const updateedItems = gallery.filter((curElem)=>{
            return curElem.category === catList;
        });
        setItems(updateedItems);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `work_section_v3`,
        id: "work",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            style: {
                marginTop: 50
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                        title: "Special Gallery",
                        subTitle: " Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now. "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "projects-titles",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryItems, {
                            filterMenu: filterMenu,
                            catItems: catItems
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-12 col-sm-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row projects-list",
                            children: items.slice(0, 9).map((elem)=>/*#__PURE__*/ jsx_runtime_.jsx(gallery_two_GalleryItems, {
                                    id: elem.id,
                                    title: elem.title,
                                    thumb: elem.thumb,
                                    tag: elem.tag
                                }, elem.id)
                            )
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const gallery_two = (GalleryContent);

;// CONCATENATED MODULE: ./pages/gallery-two.js





const GalleryPg = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                    bgImg: '/assets/images/img37.jpg',
                    title: "Our Gallery"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(gallery_two, {
                    classes: "workpg_v2"
                })
            ]
        })
    }));
};
/* harmony default export */ const pages_gallery_two = (GalleryPg);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948,545], () => (__webpack_exec__(6207)));
module.exports = __webpack_exports__;

})();