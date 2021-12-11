"use strict";
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 8294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SidebarItem = ({ title , classes , children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes ? classes : 'sidebar-single',
        children: [
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "widget-title",
                children: title
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebar-body",
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarItem);


/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Sidebar = ({ classes , children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 3830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SidebarBlog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Sidebar/index.js
var Sidebar = __webpack_require__(5390);
// EXTERNAL MODULE: ./components/Sidebar/SidebarItem.js
var SidebarItem = __webpack_require__(8294);
// EXTERNAL MODULE: ./components/UI/List/index.js
var List = __webpack_require__(6249);
// EXTERNAL MODULE: ./components/UI/List/Item.js
var Item = __webpack_require__(100);
;// CONCATENATED MODULE: ./components/UI/Anchor/index.js


function Anchor({ path , classes , target , children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: path,
        className: classes,
        target: target,
        children: children
    }));
}
/* harmony default export */ const UI_Anchor = (Anchor);

// EXTERNAL MODULE: ./data/Blog/blog.json
var blog = __webpack_require__(5881);
;// CONCATENATED MODULE: ./data/Sidebar/sidebar.json
const sidebar_namespaceObject = JSON.parse('{"b":[{"id":1,"categoryName":"Restaurant Cleaning","catLink":"#/"},{"id":2,"categoryName":"Carpet Cleaning","catLink":"#/"},{"id":3,"categoryName":"House Cleaning","catLink":"#/"},{"id":4,"categoryName":"Pool Cleaning","catLink":"#/"},{"id":5,"categoryName":"Car Cleaning","catLink":"#/"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/RecentBlogPost/index.js



const RecentBlog = ({ title , thumb , publishDate , id  })=>{
    const shortTitle = title;
    const shortTitle2 = shortTitle.slice(0, 15);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "recent-post-box",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "recnt_pst_imge",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: '/assets/images/' + thumb,
                    alt: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "recent-title",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-calendar"
                            }),
                            " ",
                            publishDate,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/blog/${id}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                "  ",
                                shortTitle2,
                                "..."
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const RecentBlogPost = (RecentBlog);

;// CONCATENATED MODULE: ./components/SidebarBlog/index.js










const SidebarBlog = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sidebar/* default */.Z, {
        classes: "col-md-3 col-sm-12 widget-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem/* default */.Z, {
                classes: 'widget widget-search',
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-control",
                            placeholder: "Search",
                            type: "text"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "input-group-btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-search"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem/* default */.Z, {
                title: 'Recent Posts',
                classes: 'widget wiget-recent-post',
                children: blog.reverse().slice(0, 3).map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(RecentBlogPost, {
                        id: post.id,
                        title: post.title,
                        publishDate: post.publishDate,
                        thumb: post.thumb
                    }, post.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem/* default */.Z, {
                title: 'Post Categories',
                classes: 'widget widget-post-categories',
                children: /*#__PURE__*/ jsx_runtime_.jsx(List/* default */.Z, {
                    classes: 'categories-type',
                    children: sidebar_namespaceObject.b.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(Item/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(UI_Anchor, {
                                path: category.catLink,
                                children: category.categoryName
                            })
                        }, category.id)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem/* default */.Z, {
                title: 'Top Tags',
                classes: 'widget widget-tags',
                children: blog.map((tags, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#/",
                        children: tags.tag
                    }, i)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_SidebarBlog = (SidebarBlog);


/***/ })

};
;