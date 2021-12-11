"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(2948);
// EXTERNAL MODULE: ./components/UI/Carousel/slick.js
var slick = __webpack_require__(5784);
;// CONCATENATED MODULE: ./data/Slider/home-one.json
const home_one_namespaceObject = JSON.parse('[{"id":2,"title":"We’re your Dream Car Wash Team!","description":"","bg":"1.jpg","smallImg":"1.jpg","btnText":"Contact Us","btnLink":"/contact"},{"id":2,"title":"We’re your Dream Car Wash Team!","description":"","bg":"2.jpg","smallImg":"2.jpg","btnText":"Contact Us","btnLink":"/contact"},{"id":2,"title":"We’re your Dream Car Wash Team!","description":"","bg":"3.jpg","smallImg":"3.jpg","btnText":"Contact Us","btnLink":"/contact"},{"id":2,"title":"We’re your Dream Car Wash Team!","description":" ","bg":"4.jpg","smallImg":"4.jpg","btnText":"Contact Us","btnLink":"/contact"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Slider/SliderOne.js





const NextArrow = ({ className , onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "arrow_right"
        })
    }));
};
const PrevArrow = ({ className , onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa fa-facebook"
        })
    }));
};
const SliderOne_Slider = ()=>{
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        margin: 0,
        infinite: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NextArrow, {
        }),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(PrevArrow, {
        }),
        responsive: [
            {
                breakpoint: 1229,
                settings: {
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slides_wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "slider_home",
            children: /*#__PURE__*/ jsx_runtime_.jsx(slick/* default */.Z, {
                ...settings,
                children: home_one_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `slider-${item.id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "single_slider",
                            style: {
                                backgroundImage: `url(${'../../assets/images/' + item.bg})`
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "slider_item_tb",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "slider_item_tbcell",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-lg-8 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: item.title
                                                            },
                                                            style: {
                                                                color: 'white'
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                " ",
                                                                item.description
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "slider_btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: `${item.btnLink}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "slider_btn_one more-link",
                                                                    children: item.btnText
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "animate_item animate_item4 bounce_animate col-lg-6 col-sm-12"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const SliderOne = (SliderOne_Slider);

// EXTERNAL MODULE: ./components/About/index.js + 2 modules
var About = __webpack_require__(2255);
// EXTERNAL MODULE: ./components/Services/index.js + 1 modules
var Services = __webpack_require__(3871);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
;// CONCATENATED MODULE: ./components/FunFacts/FunFactItem.js




function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class FunFactItem_FunfactItem extends (/* unused pure expression or super */ null && (Component)) {
    render() {
        return(/*#__PURE__*/ _jsx("div", {
            className: "col-md-3 col-sm-6",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "facts_wrapper",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "stat-count count",
                        children: /*#__PURE__*/ _jsx(CountUp, {
                            start: this.state.appear ? 0 : null,
                            end: this.props.counterNumber,
                            children: ({ countUpRef  })=>/*#__PURE__*/ _jsxs(Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ _jsx(VisibilitySensor, {
                                            onChange: (isVisible)=>this.visibleChangeHandler(isVisible)
                                            ,
                                            children: /*#__PURE__*/ _jsx("span", {
                                                className: "math-symb",
                                                children: this.props.mathSymbol
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ _jsx("h5", {
                        children: this.props.counterText
                    })
                ]
            })
        }));
    }
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            appear: false
        });
        _defineProperty(this, "visibleChangeHandler", (isVisible)=>{
            if (isVisible) {
                this.setState({
                    appear: true
                });
            }
        });
    }
}
/* harmony default export */ const FunFactItem = ((/* unused pure expression or super */ null && (FunFactItem_FunfactItem)));

;// CONCATENATED MODULE: ./data/Funfact/funfact.json
const funfact_namespaceObject = [];
;// CONCATENATED MODULE: ./components/FunFacts/index.js




const Funfact = ({ classes  })=>{
    return(/*#__PURE__*/ _jsx("div", {
        className: `funfact-section ${classes}`,
        style: {
            backgroundImage: `url("${'/assets/images/video_bg.jpg'}")`
        },
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "col-sm-12",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "funfact_title",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Watch Our Computer Repair Services Video"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    children: "We're here to help you manage your problem regular emails that will."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "funfact_wapr row",
                            children: Funfacts.map((funfact)=>/*#__PURE__*/ _jsx(FunfactItem, {
                                    counterNumber: funfact.counterNumber,
                                    counterText: funfact.counterText,
                                    counterIcon: funfact.counterIcon,
                                    mathSymbol: funfact.mathSymbol
                                }, funfact.id)
                            )
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const FunFacts = ((/* unused pure expression or super */ null && (Funfact)));

// EXTERNAL MODULE: ./components/Team/index.js + 2 modules
var Team = __webpack_require__(2642);
;// CONCATENATED MODULE: ./components/WorkProcess/WorkProcessList.js


const ProcessItem = ({ process  })=>{
    const { img , title , text , count  } = process;
    return(/*#__PURE__*/ _jsx("div", {
        className: "col-md-3 col-sm-12",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "process-item",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "img_process",
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: '/assets/images/' + img,
                            alt: "process"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: count
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "process_text",
                    children: [
                        /*#__PURE__*/ _jsx("h4", {
                            children: title
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: text
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const WorkProcess_WorkProcessList = ((/* unused pure expression or super */ null && (ProcessItem)));

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitles_SectionTitle = __webpack_require__(1437);
;// CONCATENATED MODULE: ./data/WorkProcess/index.json
const WorkProcess_namespaceObject = [];
;// CONCATENATED MODULE: ./components/WorkProcess/index.js





const WorkProcess = ()=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: "process-section",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: "How Does We Work ",
                    subTitle: "Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: Data.map((process)=>/*#__PURE__*/ _jsx(WorkProcessList, {
                            process: process
                        }, process.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_WorkProcess = ((/* unused pure expression or super */ null && (WorkProcess)));

;// CONCATENATED MODULE: ./components/WhyChooseUs/ChooseUsList.js


const Item = ({ whychoose  })=>{
    const { icon , title , text  } = whychoose;
    return(/*#__PURE__*/ _jsx("div", {
        className: "special_ser_item",
        children: /*#__PURE__*/ _jsx("div", {
            className: "special_ser_icon",
            children: /*#__PURE__*/ _jsx("i", {
                className: `${icon}`
            })
        })
    }));
};
/* harmony default export */ const ChooseUsList = ((/* unused pure expression or super */ null && (Item)));

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitleTwo.js
var SectionTitleTwo = __webpack_require__(3880);
;// CONCATENATED MODULE: ./data/WhyChooseUs/why-choose.json
const why_choose_namespaceObject = [];
;// CONCATENATED MODULE: ./components/WhyChooseUs/index.js





const AboutContent = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "whychose-section",
        style: {
            backgroundImage: `url("${'/assets/images/img40.jpg'}")`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-sm-12 my-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whychose_wrp",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    paddingTop: 100,
                                    paddingBottom: 100
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `base-header base-header-left`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                style: {
                                                    color: '#0D72BA'
                                                },
                                                children: "WHAT WE DO"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                style: {
                                                    color: 'black'
                                                },
                                                children: "Why Choose Us"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "whychose_list",
                                        style: {
                                            color: 'black'
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Many Dealerships around South Australia have begun to ditch their car yard hand and instead use our service. After using our service, many have not gone back to the traditional yard hand model. Why?"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "imglist",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Most dealerships find our service is cheaper than hiring their own yard hand full time"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "As we send in a team of yard hands, the yard is completed much quicker"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "If your dealership is accessible before hours, most of the time your yard is completed prior to opening (meaning you’ll never see a dirty yard!)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "We offer multiple services that cannot be completed by a single yard hand alone"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "During the event of rain or bad weather, we simply reschedule the service to a later time"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "We supply the chemicals, equipment and chamois. Saving your dealership money"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "All our yard hands are experienced, in the case of a new worker they are trained amongst experienced yard hands, making them get good at what we do, quickly. This makes our quality of work really high"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Still not convinced?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "We have no lock in contract. Give us a go and if you’re not happy with our service there is no need to commit!"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-sm-12 whychose_bg",
                        style: {
                            backgroundImage: `url("${'/assets/images/whychoose.jpg'}")`
                        }
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const WhyChooseUs = (AboutContent);

// EXTERNAL MODULE: ./components/UI/List/index.js
var UI_List = __webpack_require__(6249);
// EXTERNAL MODULE: ./components/UI/List/Item.js
var List_Item = __webpack_require__(100);
;// CONCATENATED MODULE: ./components/PricingTable/PricingList.js





const PricingItem = ({ pricing  })=>{
    const { planName , currencyType , planPrice , planFeatures , buttonLink , subscribePlan  } = pricing;
    return(/*#__PURE__*/ _jsx("div", {
        className: "col-md-4 col-sm-12",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "pricing-box",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "pricing_heading",
                    children: [
                        /*#__PURE__*/ _jsxs("h4", {
                            children: [
                                " ",
                                planName
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("h2", {
                            children: [
                                planPrice,
                                currencyType,
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        "/",
                                        subscribePlan
                                    ]
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(List, {
                    classes: "price-list",
                    children: planFeatures.map((feature, indx)=>/*#__PURE__*/ _jsx(LI, {
                            children: feature
                        }, indx)
                    )
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: `${buttonLink}`,
                    children: /*#__PURE__*/ _jsx("a", {
                        className: "more-link",
                        children: " order now "
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const PricingTable_PricingList = ((/* unused pure expression or super */ null && (PricingItem)));

;// CONCATENATED MODULE: ./data/PricingTable/pricingTable.json
const pricingTable_namespaceObject = [];
;// CONCATENATED MODULE: ./components/PricingTable/index.js





const Pricing = ()=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: `pricing-section`,
        style: {
            backgroundImage: `url("${'../../../assets/images/bg_2.jpg'}")`
        },
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(SectionTitle, {
                    title: "Our Special Plan",
                    subTitle: "Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: Data.map((pricing)=>/*#__PURE__*/ _jsx(PricingList, {
                            pricing: pricing
                        }, pricing.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const PricingTable = ((/* unused pure expression or super */ null && (Pricing)));

// EXTERNAL MODULE: ./components/Gallery/gallery-one/index.js + 1 modules
var gallery_one = __webpack_require__(95);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
;// CONCATENATED MODULE: ./data/Testimonials/home-one.json
const Testimonials_home_one_namespaceObject = [];
;// CONCATENATED MODULE: ./components/Testimonial/TestimonialItems.js


const GalleryItems = ({ gallery  })=>{
    const { quote , author , authorThumb , designation  } = gallery;
    return(/*#__PURE__*/ _jsx("div", {
        className: "item",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "testi_wrp",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "testi_info",
                    children: /*#__PURE__*/ _jsxs("p", {
                        children: [
                            " ",
                            quote,
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "testi_img",
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: `assets/images/${authorThumb}`,
                            alt: "author"
                        }),
                        /*#__PURE__*/ _jsxs("h4", {
                            children: [
                                author,
                                " ",
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        " ",
                                        designation
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Testimonial_TestimonialItems = ((/* unused pure expression or super */ null && (GalleryItems)));

;// CONCATENATED MODULE: ./components/Testimonial/QuoteForm.js


class ContactForm extends (/* unused pure expression or super */ null && (Component)) {
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
    handleChangeSubject(e2) {
        this.setState({
            subject: e2.target.value
        });
        if (e2.target.value === '') this.setState({
            subject_err: 'Required Field'
        });
        else this.setState({
            subject_err: ''
        });
    }
    handleChangeMessage(e3) {
        this.setState({
            message: e3.target.value
        });
        if (e3.target.message === '') this.setState({
            message_err: 'Required Field'
        });
        else this.setState({
            message_err: ''
        });
    }
    handleSubmit1() {
        if (this.state.name === '') this.setState({
            name_err: 'Required Field'
        });
        if (this.state.email === '') this.setState({
            email_err: 'Required Field'
        });
        if (this.state.subject === '') this.setState({
            subject_err: 'Required Field'
        });
        if (this.state.message === '') this.setState({
            message_err: 'Required Field'
        });
        if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '') {
            this.setState({
                return_msg: 'Fill All First',
                flag: true
            });
        } else {
            this.setState({
                return_msg: 'Success.',
                flag: true
            });
        }
    }
    render() {
        return(/*#__PURE__*/ _jsxs("div", {
            id: "contact",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    id: "message",
                    children: this.state.flag ? /*#__PURE__*/ _jsx("div", {
                        className: "alert alert-success",
                        children: /*#__PURE__*/ _jsx("strong", {
                            children: this.state.return_msg
                        })
                    }) : null
                }),
                /*#__PURE__*/ _jsxs("form", {
                    method: "post",
                    id: "contact-form",
                    className: "form-order",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-12 col-sm-12",
                                children: [
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "text",
                                        id: "name",
                                        value: this.state.name,
                                        onChange: this.handleChangeName,
                                        className: "con-field",
                                        placeholder: "Full Name:"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        id: "err",
                                        children: this.state.name_err
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-12 col-sm-12",
                                children: [
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "text",
                                        className: "con-field",
                                        value: this.state.email,
                                        onChange: this.handleChangeEmail,
                                        id: "email",
                                        placeholder: "Email:"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        id: "err",
                                        children: this.state.email_err
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-12 col-sm-12",
                                children: [
                                    /*#__PURE__*/ _jsx("textarea", {
                                        name: "message",
                                        id: "message",
                                        value: this.state.message,
                                        onChange: this.handleChangeMessage,
                                        rows: "4",
                                        className: "con-field",
                                        placeholder: "Message"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        id: "err",
                                        children: this.state.message_err
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "submit-area",
                                        children: [
                                            /*#__PURE__*/ _jsx("button", {
                                                type: "button",
                                                name: "send",
                                                onClick: this.handleSubmit1,
                                                className: "submit-contact",
                                                value: "Submit",
                                                children: "Submit"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
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
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
}
/* harmony default export */ const Testimonial_QuoteForm = ((/* unused pure expression or super */ null && (ContactForm)));

;// CONCATENATED MODULE: ./components/Testimonial/index.js







const TestimonialSec = ()=>{
    var settings = {
        autoplay: false,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(/*#__PURE__*/ _jsx("section", {
        className: "testi-section",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-6 col-sm-12",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "quote_bg"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "contact-form",
                                children: [
                                    /*#__PURE__*/ _jsx("h4", {
                                        children: "Request A Quote"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "We're here to help you mobile repair service soon going to much easier to get your iPhone fixed. Apple said early day that it"
                                    }),
                                    /*#__PURE__*/ _jsx(QuoteForm, {
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-md-6 col-sm-12 my-auto",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "testi_raper",
                            children: [
                                /*#__PURE__*/ _jsx(SectionTitle, {
                                    subTitle: "CLIENT SATISFAIT",
                                    title: "What Client's Say"
                                }),
                                /*#__PURE__*/ _jsx(Slider, {
                                    ...settings,
                                    children: Data.map((gallery)=>/*#__PURE__*/ _jsx(TestimonialItems, {
                                            gallery: gallery
                                        }, gallery.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Testimonial = ((/* unused pure expression or super */ null && (TestimonialSec)));

// EXTERNAL MODULE: ./components/Blog/index.js + 1 modules
var Blog = __webpack_require__(5430);
;// CONCATENATED MODULE: ./components/BrandLogo/LogoItem.js


function LogoItem(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "client-box",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: '../../assets/images/' + props.logoSrc,
            alt: "logo"
        })
    }));
}
/* harmony default export */ const BrandLogo_LogoItem = (LogoItem);

;// CONCATENATED MODULE: ./data/BrandLogo/brandlogo.json
const brandlogo_namespaceObject = JSON.parse('[{"id":1,"logoSrc":"client-1.png","URL":"/"},{"id":2,"logoSrc":"client-4.png","URL":"/"},{"id":3,"logoSrc":"client-2.png","URL":"/"},{"id":4,"logoSrc":"client-3.png","URL":"/"},{"id":5,"logoSrc":"client-1.png","URL":"/"},{"id":6,"logoSrc":"client-2.png","URL":"/"},{"id":7,"logoSrc":"client-3.png","URL":"/"}]');
;// CONCATENATED MODULE: ./components/BrandLogo/index.js





const ClinetCarousel = ({ classes  })=>{
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        // Responsive breakpoints
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `client-section`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(slick/* default */.Z, {
                        settings: settings,
                        children: brandlogo_namespaceObject.map((logo)=>/*#__PURE__*/ jsx_runtime_.jsx(BrandLogo_LogoItem, {
                                logoSrc: logo.logoSrc,
                                URL: logo.URL
                            }, logo.id)
                        )
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const BrandLogo = (ClinetCarousel);

;// CONCATENATED MODULE: ./pages/index.js















const Home = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
            pageTitle: "UNIPHI Car Wash and Detailing",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SliderOne, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(About/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Services/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(gallery_one/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(WhyChooseUs, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BrandLogo, {
                })
            ]
        })
    }));
};
/* harmony default export */ const pages = (Home);


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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,948,881,545,642,532,871,255,430,95], () => (__webpack_exec__(2029)));
module.exports = __webpack_exports__;

})();