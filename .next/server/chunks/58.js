"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 8109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Aside)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Aside/NavLink/index.js


const NavLink = ({ link , children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "activeNav",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            className: `${className ?? "text-violet hover:text-gray-400 hover:bg-white active:bg-gray-100 p-2 rounded-xl transition duration-500 text-base uppercase text-center mx-auto w-full justify-center"} font-link `,
            "aria-label": "Ir a la secci\xf3n",
            children: children
        })
    });
};
/* harmony default export */ const Aside_NavLink = (NavLink);

;// CONCATENATED MODULE: ./src/components/Resume/ContactLinks/ContactLink/index.js



const ContactLink = ({ link , src  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            className: "text-gray-400 hover:text-violet px-4 text-base text-center md:text-left",
            "aria-label": "Ir a la p\xe1gina",
            target: "_blank",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: src,
                alt: "Picture of the author",
                height: 150,
                width: 150,
                className: "inline mt-2 mx-auto md:mx-0 w-7 h-7 "
            })
        })
    });
};
/* harmony default export */ const ContactLinks_ContactLink = (ContactLink);

;// CONCATENATED MODULE: ./src/components/Resume/ContactLinks/index.js

const ContactLinks = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "text-gray-400 text-center my-3 md:my-0 flex justify-center",
        children: children
    });
};
/* harmony default export */ const Resume_ContactLinks = (ContactLinks);

;// CONCATENATED MODULE: ./src/components/Aside/index.js





const Aside = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "bg-gray-100 md:w-[220px] md:h-[500px] md:flex-shrink-0 md:mx-0 md:px-0 text-center rounded-xl p-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center text-violet md:text-base text-xs uppercase my-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/icons/logoviolet.png",
                        alt: "logo",
                        height: 50,
                        width: 50,
                        className: "items-center align-middle mx-auto mt-12"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "bg-violet uppercase p-2 mt-2 text-white rounded shadow-lg border border-transparent hover:shadow-lg transition duration-500",
                        children: "Julieta Dirzieh"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex flex-row md:flex-col items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-row md:flex-col flex-wrap items-center justify-center gap-5 mx-auto p-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2023",
                            children: "2023"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2022",
                            children: "2022"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Aside_NavLink, {
                            link: "/2021",
                            children: "2021"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Resume_ContactLinks, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "https://www.linkedin.com/in/julieta-erika-dirzieh-59b50a159/",
                        src: "/icons/linkedin.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "mailto:julidirzieh@gmail.com",
                        src: "/icons/mail.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactLinks_ContactLink, {
                        link: "https://api.whatsapp.com/send?phone=5491158125574",
                        src: "/icons/telefono.svg"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Aside = (Aside);


/***/ }),

/***/ 3041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DevProjects_Project)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Loader/index.js

const Loader = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        role: "status",
        className: "flex items-center justify-center m-0 p-0",
        children: /*#__PURE__*/ _jsxs("svg", {
            "aria-hidden": "true",
            className: "w-12 h-12 mr-2 text-violet animate-spin dark:text-gray-100 fill-black",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Loader = ((/* unused pure expression or super */ null && (Loader)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/DevProjects/Project/index.js





const Project = ({ data  })=>{
    const { src , name , description , link  } = data;
    /*     const [loading, setLoading] = useState(false) */ return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center mx-auto items-center justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: link,
                className: "text-violet font-bold hover:underline hover:text-gray-400 p-2 rounded-xl text-xl uppercase text-center mx-auto w-full justify-center",
                "aria-label": "Ir a la p\xe1gina web desarrollada",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: src,
                        alt: "gif de la pagina",
                        className: "rounded-xl my-3"
                    }),
                    name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-base",
                children: description
            })
        ]
    });
};
/* harmony default export */ const DevProjects_Project = (Project);


/***/ }),

/***/ 6919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DevProjects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Title/index.js

const Title = ({ caption  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-violet font-bold text-3xl uppercase tracking-wider text-center md:text-left",
        children: caption
    });
};
/* harmony default export */ const components_Title = (Title);

;// CONCATENATED MODULE: ./src/components/DevProjects/index.js



const DevProjects = ({ children , year  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {
                caption: `Proyectos - ${year}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 mb-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const components_DevProjects = (DevProjects);


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const HeadLinks = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Portfolio | Julieta Dirzieh"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Desarrolladora Web Front-end."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: "Desarrolladora Web, frontend, front-end, desarrollo web, programaci\xf3n, programador web, p\xe1gina web, sitio web, desarrollo de sitio web"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/icons/logoviolet.png"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadLinks);


/***/ })

};
;