"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Flage.tsx





function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const GermanFlage = ()=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/de",
        title: "Deutsch",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
            className: "flex items-center justify-center text-blue-700 mt-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    srcSet: "/assets/flags/deutschland-deutsch-de.webp",
                    type: "image/webp"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    srcSet: "/assets/flags/deutschland-deutsch-de.png",
                    type: "image/png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/flags/deutschland-deutsch-de.png",
                    alt: "deutsch",
                    loading: "lazy"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "ml-3",
                    children: "DE"
                })
            ]
        })
    })
;
const PortugueseFlage = ()=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/",
        title: "Portugu\xeas",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
            className: "flex items-center justify-center text-blue-700 mt-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    srcSet: "/assets/flags/brasil-portugues-pt-br.webp",
                    type: "image/webp"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    srcSet: "/assets/flags/brasil-portugues-pt-br.png",
                    type: "image/png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: "portugues",
                    loading: "lazy",
                    src: "/assets/flags/brasil-portugues-pt-br.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "ml-3",
                    children: "PT"
                })
            ]
        })
    })
;
const Flage = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('navbar');
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover, {
            className: "relative",
            children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                            className: classNames(open ? 'text-gray-900' : 'text-gray-500', 'mt-0.5 group w-14 rounded-md inline-flex items-center'),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                            srcSet: t('flage'),
                                            type: "image/png"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: t('flage'),
                                            alt: t('flageAlt'),
                                            loading: "lazy",
                                            width: 24,
                                            height: 24
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronDownIcon, {
                                    className: classNames(open ? 'text-blue-600' : 'text-blue-600', 'ml-1 h-5 w-5'),
                                    "aria-hidden": "true"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                            show: open,
                            as: external_react_.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover.Panel, {
                                static: true,
                                className: "absolute z-10 -ml-20 mt-3 transform px-2 w-auto max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white ml-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative bg-white px-8 py-4 -mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GermanFlage, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(PortugueseFlage, {})
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    }));
};
/* harmony default export */ const components_Flage = (Flage);

;// CONCATENATED MODULE: ./components/Logo.tsx


const Logo = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('navbar');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: t('logohref'),
        title: "Logo",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "AB Connection"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            srcSet: "/assets/logo.svg",
                            type: "image/svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/logo.svg",
                            alt: "AB-Connection",
                            loading: "lazy",
                            width: "33%",
                            height: "33%"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/NavHeader.tsx









function NavHeader_classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const NavHeader = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('navbar');
    const candidate = [
        {
            name: t('candidateway'),
            description: t('candidatenav'),
            href: t('candidatehref'),
            as: t('candidatepath'),
            icon: outline_namespaceObject.IdentificationIcon
        },
        {
            name: t('faq'),
            description: t('faqnav'),
            href: t('faqhref'),
            as: t('faqpath'),
            icon: outline_namespaceObject.NewspaperIcon
        },
        {
            name: t('blog1'),
            description: t('blognav'),
            href: t('candidatehref'),
            as: t('blogpath'),
            icon: outline_namespaceObject.NewspaperIcon
        }, 
    ];
    const service = [
        {
            name: t('services1'),
            description: t('servicesnav'),
            href: t('serviceshref'),
            as: t('servicespath'),
            icon: outline_namespaceObject.ChartBarIcon
        },
        {
            name: t('about1'),
            description: t('aboutnav'),
            href: t('abouthref'),
            as: t('aboutpath'),
            icon: outline_namespaceObject.UserGroupIcon
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover, {
        className: "relative bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-start lg:w-0 lg:flex-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "-mr-2 -my-2 md:hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                                className: "bg-white rounded-md border border-blue-600 rounded p-2 inline-flex items-center justify-center text-blue-600 focus-focus:none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Open menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MenuIcon, {
                                        className: "h-6 w-6",
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Group, {
                            as: "nav",
                            className: "hidden md:flex space-x-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover, {
                                    className: "relative",
                                    children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                                                    className: NavHeader_classNames(open ? 'text-blue-800' : 'text-blue-600', 'group bg-white rounded-md inline-flex items-center text-base text-lg font-medium hover:text-blue-900'),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t('candidate1')
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronDownIcon, {
                                                            className: NavHeader_classNames(open ? 'text-blue-800' : 'text-blue-700', 'ml-2 h-5 w-5 group-hover:text-blue-600'),
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                                                    as: external_react_.Fragment,
                                                    enter: "transition ease-out duration-200",
                                                    enterFrom: "opacity-0 translate-y-1",
                                                    enterTo: "opacity-100 translate-y-0",
                                                    leave: "transition ease-in duration-150",
                                                    leaveFrom: "opacity-100 translate-y-0",
                                                    leaveTo: "opacity-0 translate-y-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover.Panel, {
                                                        className: "absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                                                                children: candidate.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: item.href,
                                                                        as: item.as,
                                                                        prefetch: false,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                                                    className: "flex-shrink-0 h-6 w-6 text-blue-700",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "ml-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "text-base font-medium text-blue-600",
                                                                                            children: item.name
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "mt-1 text-sm text-gray-500",
                                                                                            children: item.description
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, item.name)
                                                                )
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover, {
                                    className: "relative",
                                    children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                                                    className: NavHeader_classNames(open ? 'text-blue-800' : 'text-blue-600', 'group bg-white rounded-md inline-flex items-center text-base text-lg font-medium hover:text-blue-900 focus:outline-none'),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t('services1')
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronDownIcon, {
                                                            className: NavHeader_classNames(open ? 'text-blue-800' : 'text-blue-700', 'ml-2 h-5 w-5 group-hover:text-blue-600'),
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                                                    as: external_react_.Fragment,
                                                    enter: "transition ease-out duration-200",
                                                    enterFrom: "opacity-0 translate-y-1",
                                                    enterTo: "opacity-100 translate-y-0",
                                                    leave: "transition ease-in duration-150",
                                                    leaveFrom: "opacity-100 translate-y-0",
                                                    leaveTo: "opacity-0 translate-y-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover.Panel, {
                                                        className: "absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                                                                children: service.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: item.href,
                                                                        as: item.as,
                                                                        prefetch: false,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                                                    className: "flex-shrink-0 h-6 w-6 text-blue-700",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "ml-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "text-base font-medium text-blue-600",
                                                                                            children: item.name
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "mt-1 text-sm text-gray-500",
                                                                                            children: item.description
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, item.name)
                                                                )
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: t('contacthref'),
                                    as: t('contactpath'),
                                    prefetch: false,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-base text-lg font-medium text-blue-600 hover:text-blue-900",
                                        children: t('contact1')
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Flage, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                as: external_react_.Fragment,
                enter: "duration-200 ease-out",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "duration-100 ease-in",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Popover.Panel, {
                    focus: true,
                    className: "absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pt-5 pb-6 px-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "-mr-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                                                className: "bg-white rounded-md p-2 mr-4 inline-flex items-center justify-center text-blue-700 border border-blue-600 hover:text-blue-800 hover:bg-blue-100",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Close menu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.XIcon, {
                                                        className: "h-6 w-6",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "grid gap-y-8",
                                        children: candidate.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: item.href,
                                                as: item.as,
                                                prefetch: false,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                            className: "flex-shrink-0 h-6 w-6 text-blue-700",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "ml-3 text-base font-medium text-gray-900",
                                                            children: item.name
                                                        })
                                                    ]
                                                })
                                            }, item.name)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-6 py-6 border-t border-b border-transparen",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "grid gap-y-8",
                                        children: service.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: item.href,
                                                prefetch: false,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                            className: "flex-shrink-0 h-6 w-6 text-blue-700",
                                                            "aria-hidden": "true"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "ml-3 text-base font-medium text-gray-900",
                                                            children: item.name
                                                        })
                                                    ]
                                                })
                                            }, item.name)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "grid gap-y-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: t('contacthref'),
                                                className: "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MailIcon, {
                                                        className: "flex-shrink-0 h-6 w-6 text-blue-700",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ml-3 text-base font-medium text-gray-900",
                                                        children: t('contact1')
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex space-x-10 -mt-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(PortugueseFlage, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GermanFlage, {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_NavHeader = (NavHeader);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./lib/gtagConfig.js
const gtag = `
							window.dataLayer = window.dataLayer || []
  							function gtag(){dataLayer.push(arguments)}
  							gtag('js', new Date());
  							gtag('config', '${process.env.GOOGLE_ANALYTICS}');
					  `;

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((script_default()), {
                strategy: "lazyOnload",
                children: [
                    " ",
                    gtag,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(1248)));
module.exports = __webpack_exports__;

})();