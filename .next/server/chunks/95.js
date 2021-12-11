"use strict";
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ gallery_one)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./data/Gallery/gallery.json
var gallery = __webpack_require__(1545);
;// CONCATENATED MODULE: ./components/Gallery/gallery-one/GalleryItems.js



const GalleryItems = ({ gallery  })=>{
    const { title , thumb , id  } = gallery;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "project-item",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "project_slide_img",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `assets/images/${thumb}`,
                    alt: "product"
                })
            })
        })
    }));
};
/* harmony default export */ const gallery_one_GalleryItems = (GalleryItems);

// EXTERNAL MODULE: ./components/SectionTitles/SectionTitleTwo.js
var SectionTitleTwo = __webpack_require__(3880);
;// CONCATENATED MODULE: ./components/Gallery/gallery-one/index.js







const GalleryContent = ()=>{
    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '200px',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            }, 
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "project-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SectionTitleTwo/* default */.Z, {
                        subTitle: "OUR LATEST WORK",
                        title: "Special Gallery"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    children: gallery.map((gallery)=>/*#__PURE__*/ jsx_runtime_.jsx(gallery_one_GalleryItems, {
                            gallery: gallery
                        }, gallery.id)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "project_btn text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/gallery-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "more-link",
                            children: " View More "
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const gallery_one = (GalleryContent);


/***/ })

};
;