"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
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
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: external "react-google-recaptcha"
const external_react_google_recaptcha_namespaceObject = require("react-google-recaptcha");
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_namespaceObject);
// EXTERNAL MODULE: ./components/Icons.tsx
var Icons = __webpack_require__(436);
;// CONCATENATED MODULE: ./components/FooterContact.tsx



const FooterContact = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('contact');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-4 bg-blue-600 shadow rounded sm:mx-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap mx-auto py-4 text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Facebook */.s1, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_next_i18next_.Trans, {
                            i18nKey: "contact5",
                            t: t,
                            components: {
                                strong: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: t('contact6'),
                                    rel: "nofollow",
                                    className: "my-auto text-white hover:text-green-400"
                                })
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap py-4 text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Whatsapp */.CD, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_next_i18next_.Trans, {
                            i18nKey: "contact7",
                            t: t,
                            components: {
                                strong: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: t('contact8'),
                                    rel: "nofollow",
                                    className: "my-auto text-white hover:text-green-400"
                                })
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap py-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Location */.Ye, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_next_i18next_.Trans, {
                            i18nKey: "contact9",
                            t: t,
                            components: {
                                strong: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: t('contact9'),
                                    rel: "nofollow",
                                    className: "my-auto text-white hover:text-green-400"
                                })
                            }
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_FooterContact = (FooterContact);

;// CONCATENATED MODULE: ./pages/contact.tsx









const Contact = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('contact');
    const captcha = (0,external_react_.useRef)(null);
    const { 0: captchaValido , 1: setCaptchaValido  } = (0,external_react_.useState)();
    const onCaptcha = ()=>{
        var ref;
        if ((ref = captcha.current) === null || ref === void 0 ? void 0 : ref.getValue()) return setCaptchaValido(true);
    };
    const handleOnSubmit = async (event)=>{
        var ref;
        event.preventDefault();
        if ((ref = captcha.current) === null || ref === void 0 ? void 0 : ref.getValue()) {
            const formData = {};
            Array.from(event.currentTarget.elements).forEach((field)=>{
                !(field.name ? formData[field.name] = field.value : field.value);
            });
            setCaptchaValido(true);
            fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            external_sweetalert2_default().fire('Enviado !', 'Seu E-Mail foi enviado com sucesso !', 'success');
            setTimeout(()=>{
                router_default().push('/sucess');
            }, 3000);
        } else {
            setCaptchaValido(false);
            external_sweetalert2_default().fire('Erro !', 'Preencha todos campos !', 'error');
        }
    };
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
                className: "mx-auto max-w-7xl px-4 py-8 pt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sm:px-6 sm:text-justify lg:text-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "block",
                                children: [
                                    " ",
                                    t('contact'),
                                    " "
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex mx-auto justify-center rounded mt-6 sm:px-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "w-full bg-white rounded shadow px-4 pt-4 pb-6 sm:px-8 border",
                            method: "post",
                            onSubmit: handleOnSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-2",
                                            htmlFor: "nome",
                                            children: t('contact1')
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ",
                                            type: "text",
                                            name: "nome",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-2",
                                            htmlFor: "email",
                                            children: t('contact2')
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ",
                                            type: "email",
                                            name: "email",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-2",
                                            htmlFor: "mensagem",
                                            children: t('contact3')
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 ",
                                            name: "mensagem",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                                            ref: captcha,
                                            sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
                                            onChange: onCaptcha
                                        }),
                                        captchaValido === false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-4 bg-red-600 text-white text-center rounded-md py-2",
                                            children: "Por favor aceite o captcha"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "rounded bg-blue-600 w-full mt-5 p-2 text-white uppercase hover:bg-blue-900",
                                    children: t('contact4')
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_FooterContact, {})
        ]
    }));
};
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                'contact',
                'navbar',
                'footer', 
            ])
        }
    })
;
/* harmony default export */ const contact = (Contact);


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

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
var __webpack_exports__ = __webpack_require__.X(0, [969,436], () => (__webpack_exec__(949)));
module.exports = __webpack_exports__;

})();