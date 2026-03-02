"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[8355],{

/***/ 8201
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_intro_md_14f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-intro-md-14f.json
const site_patterns_web_react_intro_md_14f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"React (Web)","description":"Welcome to the React (Web) section of the Accessibility Pattern API.","source":"@site/../patterns/web/react/intro.md","sourceDirName":".","slug":"/","permalink":"/web/react/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"intro","title":"React (Web)","slug":"/"},"sidebar":"webReactSidebar","next":{"title":"Foundations","permalink":"/web/react/foundations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/intro.md


const frontMatter = {
	id: 'intro',
	title: 'React (Web)',
	slug: '/'
};
const contentTitle = 'React (Web) Accessibility Patterns';

const assets = {

};



const toc = [{
  "value": "What&#39;s here",
  "id": "whats-here",
  "level": 2
}, {
  "value": "How to use these patterns",
  "id": "how-to-use-these-patterns",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "react-web-accessibility-patterns",
        children: "React (Web) Accessibility Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Welcome to the React (Web) section of the Accessibility Pattern API."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This corpus provides prescriptive, production-ready accessibility patterns for React applications.\nEach pattern documents the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must-have"
      }), " semantics, focus management rules, and keyboard behavior —\nplus a golden implementation and a checklist of acceptance criteria."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-here",
      children: "What's here"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/web/react/foundations",
              children: "Foundations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline accessibility rules applied across all UI work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/web/react/component-gallery",
              children: "Component Gallery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browse all components at a glance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-component deep dives — use the sidebar to navigate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/web/react/release-notes",
              children: "Release Notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog revision history"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-these-patterns",
      children: "How to use these patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select a component"
        }), " from the sidebar or the Component Gallery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Haves"
        }), " section — these are non-negotiable for WCAG 2.2 AA conformance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Golden Pattern"
        }), " code as your starting implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run through the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Acceptance Checks"
        }), " as part of your pull request review."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "All patterns target WCAG 2.2 Level AA and the ARIA Authoring Practices Guide (APG)."
      }), "\n"]
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