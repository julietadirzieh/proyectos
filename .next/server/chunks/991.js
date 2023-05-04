"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 8991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Projects2023)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/DevProjects/Project/index.js + 1 modules
var Project = __webpack_require__(3041);
;// CONCATENATED MODULE: ./src/components/DevProjects/Projects2023/listProjects2023.js
const listProjects2023 = [
    {
        src: "/videos/delucas.gif",
        name: "Mago Bryan De Lucas",
        link: "https://bryandelucas.com/",
        description: "React JS, Vite y Tailwind CSS"
    },
    {
        src: "/videos/hometoshow.gif",
        name: "Home to Show",
        link: "https://hometoshow.com.ar/",
        description: "HTML5, CSS, Javascript y Bootstrap"
    },
    {
        src: "/videos/eitis.gif",
        name: "Eitis Magia",
        link: "https://eitismagia.com/",
        description: "React JS y Tailwind CSS"
    },
    {
        src: "/videos/1981textil.gif",
        name: "1981 Textil",
        link: "http://1981textil.com/",
        description: "Tienda Online Wordpress"
    },
    {
        src: "/videos/camilagalante.gif",
        name: "Camila Galante",
        link: "http://psicamilagalante.com/",
        description: "Wordpress"
    }
];
/* harmony default export */ const Projects2023_listProjects2023 = (listProjects2023);

;// CONCATENATED MODULE: ./src/components/DevProjects/Projects2023/index.js




const ProjectsDev2023 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full pb-6 grid grid-cols-1 md:grid-cols-2 gap-6",
        children: Projects2023_listProjects2023.map((data, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.Z, {
                data: data
            }, index);
        })
    });
};
/* harmony default export */ const Projects2023 = (ProjectsDev2023);


/***/ })

};
;