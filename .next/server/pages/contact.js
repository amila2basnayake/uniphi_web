"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
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

/***/ 6645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(5698);
;// CONCATENATED MODULE: external "google-maps-react"
const external_google_maps_react_namespaceObject = require("google-maps-react");
;// CONCATENATED MODULE: ./components/ContactForm/Map.js



const ContactMap = (props)=>{
    const mapStyles = {
        width: "100%",
        height: "100%"
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Map, {
        google: props.google,
        zoom: 10,
        style: mapStyles,
        initialCenter: {
            lat: props.latitude,
            lng: props.longitude
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_google_maps_react_namespaceObject.Marker, {
            position: {
                lat: props.latitude,
                lng: props.longitude
            },
            icon: {
                url: `${"/assets/images/map.png"}`
            },
            animation: props.google.maps.Animation.BOUNCE
        })
    }));
};
/* harmony default export */ const Map = ((0,external_google_maps_react_namespaceObject.GoogleApiWrapper)({
    apiKey: "AIzaSyDbOU5JUmNH8BTiOaCiRWPrvdGlapqdD34"
})(ContactMap));

;// CONCATENATED MODULE: external "@aws-sdk/client-ses"
const client_ses_namespaceObject = require("@aws-sdk/client-ses");
;// CONCATENATED MODULE: ./components/ContactForm/Form.js



class ContactForm extends external_react_.Component {
    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
        var EmailReg = /(\w+)\s(\w+)/;
        if (e.target.value === '') this.setState({
            email_err: 'Required Field'
        });
        else if (EmailReg.test(e.target.value)) this.setState({
            email_err: ''
        });
        else this.setState({
            email_err: 'Enter Valid Email'
        });
    }
    handleChangeName(e1) {
        this.setState({
            name: e1.target.value
        });
        if (e1.target.value === '') this.setState({
            name_err: 'Required Field'
        });
        else this.setState({
            name_err: ''
        });
    }
    // handleChangeSubject(e){
    //   this.setState({subject:  e.target.value});
    //     if(e.target.value === '') 
    //       this.setState({subject_err: 'Required Field'});
    //     else 
    //       this.setState({subject_err: ''});
    // }
    handleChangeMessage(e2) {
        this.setState({
            message: e2.target.value
        });
        if (e2.target.message === '') this.setState({
            message_err: 'Required Field'
        });
        else this.setState({
            message_err: ''
        });
    }
    handleSubmit1() {
        console.log("name " + this.state.name);
        console.log("email " + this.state.email);
        console.log("subject " + this.state.subject);
        console.log("message " + this.state.message);
        if (this.state.name === '') this.setState({
            name_err: 'Required Field'
        });
        if (this.state.email === '') this.setState({
            email_err: 'Required Field'
        });
        // if(this.state.subject === '')
        //    this.setState({subject_err: 'Required Field'});
        if (this.state.message === '') this.setState({
            message_err: 'Required Field'
        });
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            this.setState({
                return_msg: 'Fill All First',
                flag: true
            });
        } else {
            const endpoint = "https://5s9y5dlb58.execute-api.ap-southeast-2.amazonaws.com/default/SendContactEmails";
            // We use JSON.stringify here so the data can be sent as a string via HTTP
            const body = JSON.stringify({
                senderName: this.state.name,
                senderEmail: this.state.email,
                message: this.state.message
            });
            console.log(body);
            const requestOptions = {
                method: "POST",
                body
            };
            fetch(endpoint, requestOptions).then((response)=>{
                if (!response.ok) throw new Error("Error in fetch");
                return response.json();
            }).then((response)=>{
                console.log("response " + response);
                this.setState({
                    return_msg: 'Email sent successfully!',
                    flag: true
                });
            // document.getElementById("result-text").innerText =
            // "Email sent successfully!";
            }).catch((error)=>{
                console.log("error " + error);
                this.setState({
                    return_msg: 'An unkown error occured!',
                    flag: false
                });
            //document.getElementById("result-text").innerText =
            //  "An unkown error occured.";
            });
            console.log("form " + body);
            this.setState({
                return_msg: 'Success.',
                flag: true
            });
        }
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "contact-form",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "message",
                    children: this.state.flag ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "alert alert-success",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: this.state.return_msg
                        })
                    }) : null
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    method: "post",
                    id: "contact-form",
                    className: "form-order",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-6 col-sm-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            id: "name",
                                            value: this.state.name,
                                            onChange: this.handleChangeName,
                                            className: "con-field",
                                            placeholder: "Full Name:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            id: "err",
                                            children: this.state.name_err
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-6 col-sm-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "con-field",
                                            value: this.state.email,
                                            onChange: this.handleChangeEmail,
                                            id: "email",
                                            placeholder: "Email:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            id: "err",
                                            children: this.state.email_err
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-12 col-sm-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "con-field",
                                            value: this.state.phone,
                                            onChange: this.handleChangePhone,
                                            id: "phone",
                                            placeholder: "Phone:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            id: "err",
                                            children: this.state.phone_err
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-12 col-sm-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        name: "comments",
                                        id: "message",
                                        value: this.state.message,
                                        onChange: this.handleChangeMessage,
                                        rows: "6",
                                        className: "con-field",
                                        placeholder: "Message"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        id: "err",
                                        children: this.state.message_err
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "submit-area",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                name: "send",
                                                onClick: this.handleSubmit1,
                                                className: "submit-contact",
                                                value: "Submit",
                                                children: "Send Message"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "simple-msg"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }));
    }
    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
            subject: '',
            message: '',
            email_err: '',
            name_err: '',
            subject_err: '',
            message_err: '',
            return_msg: '',
            flag: false
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        // this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
}
/* harmony default export */ const Form = (ContactForm);

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(1437);
;// CONCATENATED MODULE: ./components/ContactForm/index.js





const ContactForm_ContactForm = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact-section contact_pg_contact",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    title: "Send Us Message",
                    subTitle: " If you would like to contact any of the Customer Services. please fill out the form below. "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-8 col-sm-12 inner-contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Form, {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4 col-sm-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contact_pg_address",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "single_con_add",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-glyph-226"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Company Address :"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontSize: 14
                                                    },
                                                    children: "3567 New Alaska, us"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "single_con_add",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-glyph-334"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Email Address :"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontSize: 14
                                                    },
                                                    children: "connect2.rahan.rahman@gmail.com"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "single_con_add",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-glyph-33"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Contact Us :"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontSize: 14
                                                    },
                                                    children: "+61 0407 247 886"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "single_con_add",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "fa fa-clock-o",
                                                    "aria-hidden": "true"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Working hours :"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    style: {
                                                        fontSize: 14
                                                    },
                                                    children: [
                                                        "Mon to Fri 7am-6pm ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                        }),
                                                        "Saturdays 7am to 3pm"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ContactForm = (ContactForm_ContactForm);

;// CONCATENATED MODULE: ./pages/contact.js





const Contact = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                    bgImg: '/assets/images/img08.jpg',
                    title: "Contact Us"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_ContactForm, {
                })
            ]
        })
    }));
};
/* harmony default export */ const contact = (Contact);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948], () => (__webpack_exec__(6645)));
module.exports = __webpack_exports__;

})();