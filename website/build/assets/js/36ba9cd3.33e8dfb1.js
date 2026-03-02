"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[1548],{

/***/ 3556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_release_notes_md_36b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-release-notes-md-36b.json
const site_patterns_web_react_release_notes_md_36b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"release-notes","title":"Release Notes","description":"rev2026-02-17 (catalogrevision rev_2026-02-17T1800Z)","source":"@site/../patterns/web/react/release-notes.md","sourceDirName":".","slug":"/release-notes","permalink":"/web/react/release-notes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"release-notes","title":"Release Notes","slug":"/release-notes"},"sidebar":"webReactSidebar","previous":{"title":"Toggle Button","permalink":"/web/react/components/button.toggle"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/release-notes.md


const frontMatter = {
	id: 'release-notes',
	title: 'Release Notes',
	slug: '/release-notes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "rev_2026-02-17 (catalog_revision rev_2026-02-17T18:00:00Z)",
  "id": "rev_2026-02-17-catalog_revision-rev_2026-02-17t180000z",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "release-notes",
        children: "Release Notes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rev_2026-02-17-catalog_revision-rev_2026-02-17t180000z",
      children: "rev_2026-02-17 (catalog_revision rev_2026-02-17T18:00:00Z)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial beta release of the React (Web) accessibility pattern corpus."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New patterns (beta):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accordion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Button"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Toggle Button"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carousel with Dot Navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Carousel with Thumbnail Navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collection Row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dialog (Modal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channel Guide Grid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Toast"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All patterns are versioned at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1.0"
      }), " and carry ", (0,jsx_runtime.jsx)(_components.code, {
        children: "status: beta"
      }), ".\nBreaking changes will be communicated through catalog revision bumps."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);