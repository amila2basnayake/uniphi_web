"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 3871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./data/Services/service.json
var service = __webpack_require__(7532);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Services/ServiceItem.js



function ServiceItem({ service  }) {
    const { thumb , title , icon , id , shortDesc  } = service;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "service-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "img_serv",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: '../../../assets/images/' + thumb,
                    alt: "service",
                    style: {
                        width: 200,
                        height: 225
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "service_text",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/service/${id}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    " ",
                                    title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: shortDesc
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/service/${id}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "serv_link",
                            children: [
                                " Read More ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: " → "
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const Services_ServiceItem = (ServiceItem);

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(1437);
;// CONCATENATED MODULE: ./components/Services/index.js





const Service = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "service-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "base-header base-header-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            children: "OUR LATEST WORK"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Service We Offers"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Our service begins by assessing the frequency of how often the cars on your yard need to be cleaned:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "We take into consideration:"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "imglist",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "The standard you would like your cars to be"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Seasonal weather conditions"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Proximity to trees and other pollinating plants"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Distance to main road"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Length of exposure of the site"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Based on these factors we determine how often your yard needs to be cleaned and what days during the week will best suit the dealerships needs."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: service.slice(0, 6).map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6 col-sm-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Services_ServiceItem, {
                                service: service
                            }, service.id)
                        }, service.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Services = (Service);


/***/ })

};
;