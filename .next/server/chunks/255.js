"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 2255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/About/AboutList.js


const AboutItem = ({ about  })=>{
    const { icon , title , text  } = about;
    return(/*#__PURE__*/ _jsxs("div", {
        className: "about_item",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "abt_icon",
                children: /*#__PURE__*/ _jsx("i", {
                    className: `${icon}`
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "about_item_text",
                children: [
                    /*#__PURE__*/ _jsx("h4", {
                        children: title
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                        children: [
                            " ",
                            text,
                            " "
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const AboutList = ((/* unused pure expression or super */ null && (AboutItem)));

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitleTwo.js
var SectionTitleTwo = __webpack_require__(3880);
;// CONCATENATED MODULE: ./data/About/about.json
const about_namespaceObject = [];
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./components/About/index.js






const AboutContent = ()=>{
    const { 0: modalStatus , 1: isOpen  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about-section",
        id: "about",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-sm-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "about_img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/images/howweareimg/aa.jpg",
                                alt: "about"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-sm-12 about_why_choose",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "about_item_tb",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "about_item_tbcell",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTitleTwo/* default */.Z, {
                                        title: "Who We Are ?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We here at UniPhi Car Cleaning are a newly established business and are committed to providing the optimal solution for your dealerships car cleaning needs. We have been in business for 5 years now and have designed car cleaning protocols for over 20 dealerships in South Australia."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                style: {
                                                    marginTop: 82
                                                },
                                                children: "Our Goal"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Our Goal is to provide the most optimal and cost-effective solution for your dealerships car cleaning needs. We provide a cleaning service that is tailored to the unique circumstances of your dealership and take many factors into consideration when designing a cleaning protocol."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About = (AboutContent);


/***/ }),

/***/ 3880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitleTwo = ({ title , subTitle  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `base-header base-header-left`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                children: subTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: title
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitleTwo);


/***/ })

};
;