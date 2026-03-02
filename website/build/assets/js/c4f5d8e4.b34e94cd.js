"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[2634],{

/***/ 9216
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(6289);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(797);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(1410);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
;// ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"main":"main_iUjq","hero":"hero_aEcG","heroTitle":"heroTitle_qg2I","heroSubtitle":"heroSubtitle_jFu1","heroCopy":"heroCopy_zvrZ","frameworks":"frameworks_iEH8","sectionTitle":"sectionTitle_Ut5p","grid":"grid_VHx4","card":"card_M5pr","cardHeader":"cardHeader_D3gJ","cardLabel":"cardLabel_uoVK","badge":"badge__JoJ","badgeBeta":"badgeBeta_dOYa","badgeSoon":"badgeSoon_TrNK","cardDesc":"cardDesc_dDVo"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/index.js
const FRAMEWORKS=[{label:'React (Web)',href:'/web/react',description:'Accessible component patterns for React applications, covering buttons, dialogs, carousels, grids, and more.',badge:'Beta'},{label:'Android (Compose)',href:'/android',description:'Jetpack Compose accessibility patterns — coming soon.',badge:'Coming Soon'},{label:'iOS (SwiftUI)',href:'/ios',description:'SwiftUI accessibility patterns — coming soon.',badge:'Coming Soon'}];function FrameworkCard({label,href,description,badge}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{to:href,className:index_module.card,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.cardHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:index_module.cardLabel,children:label}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(index_module.badge,badge==='Beta'?index_module.badgeBeta:index_module.badgeSoon),children:badge})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:index_module.cardDesc,children:description})]});}function Home(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:siteConfig.title,description:siteConfig.tagline,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{className:index_module.main,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:index_module.hero,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:index_module.heroTitle,children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:index_module.heroSubtitle,children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:index_module.heroCopy,children:"A structured corpus of production-ready accessibility patterns for modern UI frameworks. Each pattern provides prescriptive guidance, a golden implementation, and acceptance checks \u2014 ready for developer AI contexts, design system docs, or direct team reference."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:index_module.frameworks,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:index_module.sectionTitle,children:"Choose a Framework"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.grid,children:FRAMEWORKS.map(fw=>/*#__PURE__*/(0,jsx_runtime.jsx)(FrameworkCard,{...fw},fw.href))})]})]})});}

/***/ }

}]);