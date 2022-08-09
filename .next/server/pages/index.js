"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(8969);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Icons.tsx
var Icons = __webpack_require__(436);
;// CONCATENATED MODULE: ./components/Footer.tsx




const Footer = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('footer');
    const footer = [
        {
            name: t('copyright'),
            href: '/copyright',
            rel: 'nofollow'
        },
        {
            name: t('privacy'),
            href: '/privacy',
            rel: 'nofollow'
        },
        {
            name: t('abconnection'),
            href: '/',
            rel: 'nofollow'
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full py-6 px-5 space-y-6 bg-blue-600 fixed bottom-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 gap-y-2 sm:grid-cols-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center text-white",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Facebook */.s1, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Instagram */.mr, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Whatsapp */.CD, {})
                        ]
                    })
                }),
                footer.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: item.href,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            rel: item.rel,
                            className: "flex justify-center items-center text-base font-medium text-white hover:text-gray-400",
                            children: item.name
                        })
                    }, item.name)
                )
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/enfermeira.webp
/* harmony default export */ const enfermeira = ({"src":"/_next/static/media/enfermeira.656073c7.webp","height":1281,"width":1920,"blurDataURL":"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoIAAUAAkA4JQBOgB5vdwsAAP5sCHvmnvnZU/LUDEYunvGIS6HRx/TbcpX+ytkAnDwwL7GndYOiUfIhVL1h0FAA"});
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                title: t('title'),
                keywords: t('keywords'),
                description: t('description'),
                path: t('path'),
                hreflang: t('hreflang'),
                author: t('author')
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "relative mx-auto max-w-7xl px-4 py-8 pt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed right-1 p-2 bottom-1 mr-2 mb-40 lg:mr-10 sm:mb-20 bg-whats-app border-4 border-whats-app rounded-full text-white z-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://wa.me/+491736218918",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "w-8 h-8 fill-current",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 448 512",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-end text-blue-600 -mb-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Facebook */.s1, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Instagram */.mr, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Whatsapp */.CD, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "block",
                            children: "AB Connection"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 grid grid-cols-1 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: enfermeira,
                                alt: "Enfermeira logo",
                                loading: "lazy",
                                objectFit: "cover"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-0 pt-8 sm:px-8 lg:py-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-xl text-gray-500 sm:text-2xl md:text-2xl lg:mx-0",
                                        children: t('home1')
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl md:mt-5 md:text-2xl lg:mx-0",
                                        children: t('home2')
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl md:mt-5 md:text-2xl lg:mx-0",
                                        children: t('home3')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 mt-2 space-x-0 sm:space-x-4 space-y-2 sm:space-y-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: t('candidatepath'),
                                                className: "flex justify-center items-center p-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 md:text-lg sm:p-4",
                                                children: t('home5')
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: t('contactpath'),
                                                className: "flex justify-center items-center p-4 border border-ab text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-200 md:text-lg sm:p-4",
                                                children: t('home6')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "mt-10 mb-40 sm:mb-20 sm:mt-6",
                        children: "*Para eventuais duvida(s) e/ou pergunta(s) clique no bot\xe3o do Whats App e deixe sua mensagem."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    }));
};
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                'common',
                'navbar',
                'footer', 
            ])
        }
    })
;
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,969,436], () => (__webpack_exec__(5474)));
module.exports = __webpack_exports__;

})();