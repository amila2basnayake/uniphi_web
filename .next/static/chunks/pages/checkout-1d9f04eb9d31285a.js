(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{354:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return a(8283)}])},5698:function(e,n,a){"use strict";var t=a(5893);a(7294);n.Z=function(e){var n=e.title,a=e.bgImg;return(0,t.jsx)("header",{id:"page-top",className:"blog-banner",style:{backgroundImage:"url(".concat(a,")")},children:(0,t.jsx)("div",{className:"container",id:"blog",children:(0,t.jsx)("div",{className:"row blog-header text-left",children:(0,t.jsx)("div",{className:"col-sm-12",children:(0,t.jsx)("h3",{children:n})})})})})}},8418:function(e,n,a){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],t=!0,s=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(t=(l=c.next()).done)&&(a.push(l.value),!n||a.length!==n);t=!0);}catch(o){s=!0,r=o}finally{try{t||null==c.return||c.return()}finally{if(s)throw r}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var s,r=(s=a(7294))&&s.__esModule?s:{default:s},l=a(6273),c=a(387),o=a(7190);var i={};function d(e,n,a,t){if(e&&l.isLocalURL(n)){e.prefetch(n,a,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[n+"%"+a+(s?"%"+s:"")]=!0}}var u=function(e){var n,a=!1!==e.prefetch,s=c.useRouter(),u=r.default.useMemo((function(){var n=t(l.resolveHref(s,e.href,!0),2),a=n[0],r=n[1];return{href:a,as:e.as?l.resolveHref(s,e.as):r||a}}),[s,e.href,e.as]),m=u.href,h=u.as,f=e.children,p=e.replace,x=e.shallow,v=e.scroll,j=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var N=(n=r.default.Children.only(f))&&"object"===typeof n&&n.ref,y=t(o.useIntersection({rootMargin:"200px"}),2),b=y[0],g=y[1],k=r.default.useCallback((function(e){b(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[N,b]);r.default.useEffect((function(){var e=g&&a&&l.isLocalURL(m),n="undefined"!==typeof j?j:s&&s.locale,t=i[m+"%"+h+(n?"%"+n:"")];e&&!t&&d(s,m,h,{locale:n})}),[h,m,g,j,a,s]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,a,t,s,r,c,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(a))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[s?"replace":"push"](a,t,{shallow:r,locale:o,scroll:c}))}(e,s,m,h,p,x,v,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(m)&&d(s,m,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof j?j:s&&s.locale,_=s&&s.isLocaleDomain&&l.getDomainLocale(h,C,s&&s.locales,s&&s.domainLocales);w.href=_||l.addBasePath(l.addLocale(h,C,s&&s.defaultLocale))}return r.default.cloneElement(n,w)};n.default=u},7190:function(e,n,a){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],t=!0,s=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(t=(l=c.next()).done)&&(a.push(l.value),!n||a.length!==n);t=!0);}catch(o){s=!0,r=o}finally{try{t||null==c.return||c.return()}finally{if(s)throw r}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,a=e.disabled||!l,o=s.useRef(),i=t(s.useState(!1),2),d=i[0],u=i[1],m=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),a||d||e&&e.tagName&&(o.current=function(e,n,a){var t=function(e){var n=e.rootMargin||"",a=c.get(n);if(a)return a;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;n&&a&&n(a)}))}),e);return c.set(n,a={id:n,observer:s,elements:t}),a}(a),s=t.id,r=t.observer,l=t.elements;return l.set(e,n),r.observe(e),function(){l.delete(e),r.unobserve(e),0===l.size&&(r.disconnect(),c.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[a,n,d]);return s.useEffect((function(){if(!l&&!d){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[m,d]};var s=a(7294),r=a(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},8283:function(e,n,a){"use strict";a.r(n);var t=a(5893),s=a(7294),r=a(2948),l=a(5698);n.default=function(){return(0,t.jsx)(s.Fragment,{children:(0,t.jsxs)(r.Z,{pageTitle:"UNIPHI Car wash and Detailing",children:[(0,t.jsx)(l.Z,{bgImg:"/assets/images/header.jpg",title:"Checkout"}),(0,t.jsx)("section",{className:"checkout_section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{id:"content",className:"col-lg-6 col-sm-12",children:(0,t.jsxs)("form",{name:"contactform",method:"post",className:"shopform",children:[(0,t.jsx)("div",{className:"custom-title base-header base-header-left",children:(0,t.jsx)("h3",{children:"Billing details"})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,t.jsx)("label",{children:"First Name *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,t.jsx)("label",{children:"Last Name *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name1",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,t.jsx)("label",{children:"Address *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name3",className:"form-control"}),(0,t.jsx)("label",{children:"Address Line 2"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name4",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,t.jsx)("label",{children:"Town / City *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name5",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,t.jsx)("label",{children:"County *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name6",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,t.jsx)("label",{children:"Zip Code *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name7",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,t.jsx)("label",{children:"Email *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name8",className:"form-control"}),(0,t.jsx)("label",{children:"Phone Number *"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name9",className:"form-control"})]}),(0,t.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,t.jsx)("label",{children:"Other Notes"}),(0,t.jsx)("textarea",{rows:"5",className:"form-control",placeholder:"Add extra notes..."})]})]})]})}),(0,t.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,t.jsxs)("div",{className:"payment_mth",children:[(0,t.jsx)("div",{className:"custom-title base-header base-header-left",children:(0,t.jsx)("h3",{children:"Payment method "})}),(0,t.jsxs)("form",{id:"payment",className:"clearfix",children:[(0,t.jsxs)("label",{className:"checkbox payment-method inline",children:[(0,t.jsx)("input",{type:"checkbox",id:"customCheck1",value:"option1"})," Direct Bank Transfer"]}),(0,t.jsxs)("label",{className:"checkbox payment-method inline",children:[(0,t.jsx)("input",{type:"checkbox",id:"customCheck2",value:"option2"})," Cheque Payment"]}),(0,t.jsxs)("label",{className:"checkbox payment-method inline",children:[(0,t.jsx)("input",{type:"checkbox",id:"customCheck4",value:"option2"})," PayPal Payment"]}),(0,t.jsxs)("label",{className:"checkbox payment-method inline",children:[(0,t.jsx)("input",{type:"checkbox",id:"customCheck3",value:"option3"})," Google Checkout"]})]})]}),(0,t.jsx)("div",{className:"custom-title base-header base-header-left",children:(0,t.jsx)("h3",{children:"Your order"})}),(0,t.jsx)("div",{className:"coupon-area",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"grand-total-area",children:[(0,t.jsx)("h4",{children:"Cart Totals"}),(0,t.jsxs)("p",{className:"sub-total",children:["Subtotal",(0,t.jsx)("span",{className:"amt",children:" $230.00"})]}),(0,t.jsxs)("p",{className:"delivery",children:["delivery",(0,t.jsx)("span",{className:"amt",children:" $10.00"})]}),(0,t.jsxs)("p",{className:"discount",children:["discount",(0,t.jsx)("span",{className:"amt",children:" $20.00"})]}),(0,t.jsxs)("p",{className:"grand-total",children:["total ",(0,t.jsx)("span",{className:"amt",children:"$200.00"})]}),(0,t.jsx)("a",{className:"pro-checkout",href:"#",children:"Place An Order"})]})})})})})]})]})})})]})})}},9008:function(e,n,a){e.exports=a(5443)},1664:function(e,n,a){e.exports=a(8418)}},function(e){e.O(0,[948,774,888,179],(function(){return n=354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);