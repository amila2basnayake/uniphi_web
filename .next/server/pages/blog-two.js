"use strict";
(() => {
var exports = {};
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 3214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_two)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(5698);
// EXTERNAL MODULE: ./components/PageWrapper/index.js
var PageWrapper = __webpack_require__(1284);
// EXTERNAL MODULE: ./data/Blog/blog.json
var blog = __webpack_require__(5881);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/BlogPage/BlogContent.js




const BlogContentWrap = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-md-9 col-sm-12 blog-area",
            children: [
                blog.reverse().slice(0, 2).map((post, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "blog_wrp",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blog/${post.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "blog_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: '../../assets/images/' + post.thumb,
                                        alt: post.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "blog_info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog_date",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-comment-o"
                                                    }),
                                                    "  ",
                                                    post.commentCount,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-calendar"
                                                    }),
                                                    " ",
                                                    post.publishDate,
                                                    "  "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-tags"
                                                    }),
                                                    " ",
                                                    post.tag,
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    " ",
                                                    post.title,
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            " ",
                                            post.content,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-link",
                                            children: " Read More "
                                        })
                                    })
                                ]
                            })
                        ]
                    }, i)
                ),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "prodt_pagination",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#/",
                                    className: "page_number current",
                                    children: "01"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#/",
                                    className: "page_number",
                                    children: " 02 "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#/",
                                    className: "page_number",
                                    children: "03"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#/",
                                    className: "page_number",
                                    children: ">"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const BlogContent = (BlogContentWrap);

// EXTERNAL MODULE: ./components/SidebarBlog/index.js + 3 modules
var SidebarBlog = __webpack_require__(3830);
;// CONCATENATED MODULE: ./components/BlogPage/index.js





const blogDetails = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageWrapper/* default */.Z, {
            classes: "blog_container blog_page_tw",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BlogContent, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SidebarBlog/* default */.Z, {
                })
            ]
        })
    }));
};
/* harmony default export */ const BlogPage = (blogDetails);

;// CONCATENATED MODULE: ./pages/blog-two.js





const BlogPg = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                    bgImg: '/assets/images/header.jpg',
                    title: "Our Blog"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlogPage, {
                })
            ]
        })
    }));
};
/* harmony default export */ const blog_two = (BlogPg);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948,881,538,830], () => (__webpack_exec__(3214)));
module.exports = __webpack_exports__;

})();