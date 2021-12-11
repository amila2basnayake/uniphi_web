"use strict";
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 5430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/UI/Carousel/slick.js
var slick = __webpack_require__(5784);
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(1437);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Blog/BlogList.js



const BlogItem = ({ blog  })=>{
    const { title , thumb , id , publishDate  } = blog;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog_wrp",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "blog_img",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: 'assets/images/' + thumb,
                    alt: "service"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "blog_info",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/blog/${id}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    " ",
                                    title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "blog_date",
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-calendar"
                                    }),
                                    " ",
                                    publishDate,
                                    " "
                                ]
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "blog_read",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blog/${id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Read more"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-right-open"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const BlogList = (BlogItem);

// EXTERNAL MODULE: ./data/Blog/blog.json
var blog = __webpack_require__(5881);
;// CONCATENATED MODULE: ./components/Blog/index.js






const Blog = ({ classes  })=>{
    const settings = {
        dots: false,
        arrows: false,
        margin: 0,
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        // Responsive breakpoints
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `blog-section`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    title: "Articles & Tips",
                    subTitle: " Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(slick/* default */.Z, {
                            settings: settings,
                            children: blog.map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BlogList, {
                                        blog: blog
                                    }, blog.id)
                                }, blog.id)
                            )
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Blog = (Blog);


/***/ }),

/***/ 5784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);



function SlickSlider({ children , settings  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...settings,
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlickSlider);


/***/ })

};
;