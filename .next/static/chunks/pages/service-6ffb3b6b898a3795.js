(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{2106:function(e,i,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service",function(){return r(9028)}])},5698:function(e,i,r){"use strict";var t=r(5893);r(7294);i.Z=function(e){var i=e.title,r=e.bgImg;return(0,t.jsx)("header",{id:"page-top",className:"blog-banner",style:{backgroundImage:"url(".concat(r,")")},children:(0,t.jsx)("div",{className:"container",id:"blog",children:(0,t.jsx)("div",{className:"row blog-header text-left",children:(0,t.jsx)("div",{className:"col-sm-12",children:(0,t.jsx)("h3",{children:i})})})})})}},1437:function(e,i,r){"use strict";var t=r(5893);r(7294);i.Z=function(e){var i=e.title,r=e.subTitle;return(0,t.jsxs)("div",{className:"base-header",children:[(0,t.jsx)("h3",{children:i}),r&&(0,t.jsx)("p",{children:r})]})}},3871:function(e,i,r){"use strict";r.d(i,{Z:function(){return s}});var t=r(5893),n=(r(7294),r(7532)),a=r(1664);var o=function(e){var i=e.service,r=i.thumb,n=i.title,o=(i.icon,i.id),s=i.shortDesc;return(0,t.jsxs)("div",{className:"service-item",children:[(0,t.jsx)("div",{className:"img_serv",children:(0,t.jsx)("img",{src:"../../../assets/images/"+r,alt:"service",style:{width:200,height:225}})}),(0,t.jsxs)("div",{className:"service_text",children:[(0,t.jsx)("h4",{children:(0,t.jsx)(a.default,{href:"/service/".concat(o),children:(0,t.jsxs)("a",{children:[" ",n]})})}),(0,t.jsx)("p",{children:s}),(0,t.jsx)(a.default,{href:"/service/".concat(o),children:(0,t.jsxs)("a",{className:"serv_link",children:[" Read More ",(0,t.jsx)("span",{children:" \u2192 "})," "]})})]})]})},s=(r(1437),function(){return(0,t.jsx)("section",{className:"service-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{class:"base-header base-header-left",children:[(0,t.jsx)("small",{children:"OUR LATEST WORK"}),(0,t.jsx)("h3",{children:"Service We Offers"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:"Our service begins by assessing the frequency of how often the cars on your yard need to be cleaned:"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"We take into consideration:"})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{className:"imglist",children:[(0,t.jsx)("li",{class:"",children:(0,t.jsx)("a",{href:"#",children:"The standard you would like your cars to be"})}),(0,t.jsx)("li",{class:"",children:(0,t.jsx)("a",{href:"#",children:"Seasonal weather conditions"})}),(0,t.jsx)("li",{class:"",children:(0,t.jsx)("a",{href:"#",children:"Proximity to trees and other pollinating plants"})}),(0,t.jsx)("li",{class:"",children:(0,t.jsx)("a",{href:"#",children:"Distance to main road"})}),(0,t.jsx)("li",{class:"",children:(0,t.jsx)("a",{href:"#",children:"Length of exposure of the site"})})]})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"Based on these factors we determine how often your yard needs to be cleaned and what days during the week will best suit the dealerships needs."}),(0,t.jsx)("br",{})]}),(0,t.jsx)("div",{className:"row",children:n.slice(0,6).map((function(e){return(0,t.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,t.jsx)(o,{service:e},e.id)},e.id)}))})]})})})},8418:function(e,i,r){"use strict";function t(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=[],t=!0,n=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(r.push(o.value),!i||r.length!==i);t=!0);}catch(l){n=!0,a=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}return r}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}i.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(6273),s=r(387),l=r(7190);var c={};function d(e,i,r,t){if(e&&o.isLocalURL(i)){e.prefetch(i,r,t).catch((function(e){0}));var n=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[i+"%"+r+(n?"%"+n:"")]=!0}}var h=function(e){var i,r=!1!==e.prefetch,n=s.useRouter(),h=a.default.useMemo((function(){var i=t(o.resolveHref(n,e.href,!0),2),r=i[0],a=i[1];return{href:r,as:e.as?o.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),u=h.href,p=h.as,f=e.children,y=e.replace,g=e.shallow,m=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var b=(i=a.default.Children.only(f))&&"object"===typeof i&&i.ref,w=t(l.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],T=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=j&&r&&o.isLocalURL(u),i="undefined"!==typeof v?v:n&&n.locale,t=c[u+"%"+p+(i?"%"+i:"")];e&&!t&&d(n,u,p,{locale:i})}),[p,u,j,v,r,n]);var k={ref:T,onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||function(e,i,r,t,n,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var i=e.currentTarget.target;return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),i[n?"replace":"push"](r,t,{shallow:a,locale:l,scroll:s}))}(e,n,u,p,y,g,m,v)},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),o.isLocalURL(u)&&d(n,u,p,{priority:!0})}};if(e.passHref||"a"===i.type&&!("href"in i.props)){var C="undefined"!==typeof v?v:n&&n.locale,N=n&&n.isLocaleDomain&&o.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);k.href=N||o.addBasePath(o.addLocale(p,C,n&&n.defaultLocale))}return a.default.cloneElement(i,k)};i.default=h},7190:function(e,i,r){"use strict";function t(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=[],t=!0,n=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(r.push(o.value),!i||r.length!==i);t=!0);}catch(l){n=!0,a=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}return r}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(i,"__esModule",{value:!0}),i.useIntersection=function(e){var i=e.rootMargin,r=e.disabled||!o,l=n.useRef(),c=t(n.useState(!1),2),d=c[0],h=c[1],u=n.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,i,r){var t=function(e){var i=e.rootMargin||"",r=s.get(i);if(r)return r;var t=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var i=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;i&&r&&i(r)}))}),e);return s.set(i,r={id:i,observer:n,elements:t}),r}(r),n=t.id,a=t.observer,o=t.elements;return o.set(e,i),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(n))}}(e,(function(e){return e&&h(e)}),{rootMargin:i}))}),[r,i,d]);return n.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[u,d]};var n=r(7294),a=r(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},9028:function(e,i,r){"use strict";r.r(i);var t=r(5893),n=r(7294),a=r(2948),o=r(5698),s=r(3871);i.default=function(){return(0,t.jsx)(n.Fragment,{children:(0,t.jsxs)(a.Z,{pageTitle:"UNIPHI Car wash and Detailing",children:[(0,t.jsx)(o.Z,{bgImg:"/assets/images/img37.jpg",title:"Our Services"}),(0,t.jsx)(s.Z,{})]})})}},9008:function(e,i,r){e.exports=r(5443)},1664:function(e,i,r){e.exports=r(8418)},7532:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"Car Yard Cleaning Service","titleTwo":"Car Yard Cleaning Service","shortDesc":"Our car yard cleaning service is by far our most popular service! ...                           ","description":"<p>During the allocated days a team of highly experienced car yard hands will come in and:</p><p> <ul class=\'imglist\'><li>Thoroughly house each vehicle </li><li>Clean each vehicle with a chamois</li></ul> <br/> <br/> This will leave your yard looking great!</p>","descriptionTwo":"<p>During the allocated days a team of highly experienced car yard hands will come in and:</p><p> <ul class=\'imglist\'><li>Thoroughly house each vehicle </li><li>Clean each vehicle with a chamois</li></ul> <br/> <br/> This will leave your yard looking great!</p>","thumb":"img131.jpg","icon":"car-wash-shop.png","singleThumb":"s5.jpg"},{"id":2,"title":"Car Yard Soaping Service","titleTwo":"Car Yard Soaping Service","shortDesc":"Perfect for sales or if your yard has been left neglected for a while!.. ","description":"<p>Perfect for sales or if your yard has been left neglected for a while!</P><p>A team of highly trained detailers will:</p> <ul class=\'imglist\'><li> Thoroughly house each vehicle</li><li> Will soap the vehicle using a high end soaping/wax compound (perfect for removing pollen and dirt)</li><li>Will hose the vehicle again to remove soaping suds</li><li>Finish off with a Chamois service</li></ul> <br/> <p>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly oron a request basis.</p><p>This will make your yard look brand new!</p>","descriptionTwo":"<p>Perfect for sales or if your yard has been left neglected for a while!</P><p>A team of highly trained detailers will:</p> <ul class=\'imglist\'><li> Thoroughly house each vehicle</li><li> Will soap the vehicle using a high end soaping/wax compound (perfect for removing pollen and dirt)</li><li>Will hose the vehicle again to remove soaping suds</li><li>Finish off with a Chamois service</li></ul> <br/> <p>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly oron a request basis.</p><p>This will make your yard look brand new!</p>","thumb":"img36.png","icon":"car-wash-shop.png","singleThumb":"s1.jpg"},{"id":3,"title":"Car Yard Tyre Service - Alloys","titleTwo":"Car Yard Tyre Service - Alloys","shortDesc":"Nobody likes buying a car with dirty tyres, let us solve the problem! ... ","description":"<p>Nobody likes buying a car with dirty tyres, let us solve the problem!</p> <p>A team of highly trained detailers will:</p><ul class=\'imglist\'><li> Utilising microfibres and a chamois we will go around to each alloy on the yard and clean of all the brake dust and grime.</li> <li>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly or  on a request basis.</li></ul> <br/><p>Perfect to give your yard that completed look!</p>","descriptionTwo":"<p>Nobody likes buying a car with dirty tyres, let us solve the problem!</p> <p>A team of highly trained detailers will:</p><ul class=\'imglist\'><li> Utilising microfibres and a chamois we will go around to each alloy on the yard and clean of all the brake dust and grime.</li> <li>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly or  on a request basis.</li></ul> <br/><p>Perfect to give your yard that completed look!</p>","thumb":"img51.jpg","icon":"icon-glyph-252","singleThumb":"s4.jpg"},{"id":4,"title":"Car Yard Tyre Service \u2013 Tyre Shine","titleTwo":"Car Yard Tyre Service \u2013 Tyre Shine","shortDesc":"The best way to make your yard stand out! ... ","description":"<p>The best way to make your yard stand out!</p> <p>A team of highly trained detailers will:</p> <ul class=\'imglist\'><li> Coat the wheels on yard with a superior tyre shine product. Being a silicone-based product, it has a strong adhesive quality. This will keep the tyres looking shiny for longer!</li></ul> <br/> <p>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly or on a request basis.</p>","descriptionTwo":"<p>The best way to make your yard stand out!</p> <p>A team of highly trained detailers will:</p> <ul class=\'imglist\'><li> Coat the wheels on yard with a superior tyre shine product. Being a silicone-based product, it has a strong adhesive quality. This will keep the tyres looking shiny for longer!</li></ul> <br/> <p>This service can be organised into your yards cleaning protocol in a weekly, fortnightly, monthly or on a request basis.</p>","thumb":"img113.jpg","icon":"icon-glyph-252","singleThumb":"s2.jpg"},{"id":5,"title":"Car Detailing Service","titleTwo":"Car Detailing Service","shortDesc":"Need some experienced detailers to help out your staff? End of month quotas caused a chaos?... ","description":"<p>Need some experienced detailers to help out your staff? End of month quotas caused a chaos? Let us help you out!</p><p>Our detailers are trained in high quality details and are perfect for preparing vehicles for customer collection. Many of our detailers are experienced in paint protections and cut and polishing. Essential skills for those aftermarket product applications.</p><p>Whether you need one of our detailers to assist your current detailing team or would like one of our mobile detailers to come and handle those extra few cars, we can provide the solution you need.</p>","descriptionTwo":"<p>Need some experienced detailers to help out your staff? End of month quotas caused a chaos? Let us help you out!</p><p>Our detailers are trained in high quality details and are perfect for preparing vehicles for customer collection. Many of our detailers are experienced in paint protections and cut and polishing. Essential skills for those aftermarket product applications.</p><p>Whether you need one of our detailers to assist your current detailing team or would like one of our mobile detailers to come and handle those extra few cars, we can provide the solution you need.</p>","thumb":"img137.jpg","icon":"icon-glyph-252","singleThumb":"s7.jpg"}]')}},function(e){e.O(0,[948,774,888,179],(function(){return i=2106,e(e.s=i);var i}));var i=e.O();_N_E=i}]);