"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[1434],{

/***/ 7645
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_accordion_md_397_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-accordion-md-397.json
const site_patterns_web_react_components_accordion_md_397_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/accordion.basic","title":"Accordion","description":"Use When","source":"@site/../patterns/web/react/components/accordion.md","sourceDirName":"components","slug":"/components/accordion.basic","permalink":"/web/react/components/accordion.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"accordion","permalink":"/web/react/tags/accordion"},{"inline":true,"label":"disclosure","permalink":"/web/react/tags/disclosure"},{"inline":true,"label":"show-hide","permalink":"/web/react/tags/show-hide"}],"version":"current","lastUpdatedAt":1771623861000,"frontMatter":{"id":"accordion.basic","title":"Accordion","stack":"web/react","status":"beta","tags":["accordion","disclosure","show-hide"],"aliases":["accordion","disclosure group","expand collapse","collapsible panels"],"summary":"A set of show/hide sections with heading-wrapped buttons controlling associated panels via aria-expanded (and optionally aria-controls / region)."},"sidebar":"webReactSidebar","previous":{"title":"Component Gallery","permalink":"/web/react/component-gallery"},"next":{"title":"Basic Button","permalink":"/web/react/components/button.basic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/accordion.md


const frontMatter = {
	id: 'accordion.basic',
	title: 'Accordion',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'accordion',
		'disclosure',
		'show-hide'
	],
	aliases: [
		'accordion',
		'disclosure group',
		'expand collapse',
		'collapsible panels'
	],
	summary: 'A set of show/hide sections with heading-wrapped buttons controlling associated panels via aria-expanded (and optionally aria-controls / region).'
};
const contentTitle = 'Accordion';

const assets = {

};



const toc = [{
  "value": "Use When",
  "id": "use-when",
  "level": 2
}, {
  "value": "Do Not Use When",
  "id": "do-not-use-when",
  "level": 2
}, {
  "value": "Must Haves",
  "id": "must-haves",
  "level": 2
}, {
  "value": "Customizable",
  "id": "customizable",
  "level": 2
}, {
  "value": "Don’ts",
  "id": "donts",
  "level": 2
}, {
  "value": "Golden Pattern",
  "id": "golden-pattern",
  "level": 2
}, {
  "value": "Acceptance Checks",
  "id": "acceptance-checks",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "accordion",
        children: "Accordion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when content can be organized into collapsible sections to reduce scanning and scrolling."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not use when content must be visible for comparison or comprehension (use static, non-collapsing sections instead)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accordion is composed of a series of header + panel pairs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each accordion header control is a native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<button>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"button\""
        }), " only when a native button cannot be used).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If role=\"button\" is used instead of a native ", (0,jsx_runtime.jsx)(_components.button, {
              children: ", add tabindex=\"0\" and keyboard support for Enter and Space, ensuring Space prevents page scrolling while activating the control."
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each header button is contained within a heading element (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<h2>"
        }), "–", (0,jsx_runtime.jsx)(_components.code, {
          children: "<h6>"
        }), ") or an element with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"heading\""
        }), " and the appropriate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-level"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The header button uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-expanded=\"true\""
        }), " when its panel is visible and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"false\""
        }), " when hidden."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The panel is shown/hidden in the DOM (e.g., via the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hidden"
        }), " attribute), so that hidden content ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cannot"
        }), " be accessed by screen readers."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users move focus between accordion headers using Tab / Shift+Tab."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Since the header control is a button, it is activated with Enter or Space."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the accordion does not permit a panel to be collapsed while expanded, the expanded header button uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-disabled=\"true\""
        }), " (rare case)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "aria-controls"
        }), " on the header button pointing to the panel ID (recommended, but optional)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Panel container uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"region\""
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), " referencing the header button ID (optional).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"region\""
            }), " when it would create landmark proliferation (e.g., many panels can be expanded at once, especially > ~6)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"region\""
            }), " when panels contain headings."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Whether multiple panels can be expanded at the same time.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If only one panel may be expanded, expanding a new panel collapses the previously open panel."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The heading level will usually be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h2"
        }), ", but this is customizable and depends on the heading hierarchy of the surrounding page."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t use non-focusable headers (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<div>"
        }), " without proper button semantics) as the interactive control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t make the panel visible while leaving ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-expanded=\"false\""
        }), " (and vice versa)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t remove panel content from the DOM in a way that breaks expected focus behavior (e.g., collapsing a panel while focus remains inside it without moving focus)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"heading\""
        }), " without an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-level"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't nest accordions within accordion panels."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "\"use client\";\n\nimport * as React from \"react\";\n\nexport function AccordionDemo() {\n  // Single-expand: exactly one panel open at a time.\n  const [openId, setOpenId] = React.useState(\"overview\");\n\n  function toggle(id) {\n    setOpenId(id);\n  }\n\n  const overviewOpen = openId === \"overview\";\n  const detailsOpen = openId === \"details\";\n  const shippingOpen = openId === \"shipping\";\n\n  return (\n    <div>\n      <h3>\n        <button\n          id=\"acc-btn-overview\"\n          type=\"button\"\n          aria-expanded={overviewOpen ? \"true\" : \"false\"}\n          aria-controls=\"acc-panel-overview\"\n          onClick={() => toggle(\"overview\")}\n        >\n          Overview\n        </button>\n      </h3>\n      <div\n        id=\"acc-panel-overview\"\n        hidden={!overviewOpen}\n        role=\"region\"\n        aria-labelledby=\"acc-btn-overview\"\n      >\n        <p>\n          This section contains summary information. Learn more in the{\" \"}\n          <a href=\"#details\">details section</a>.\n        </p>\n      </div>\n\n      <h3>\n        <button\n          id=\"acc-btn-details\"\n          type=\"button\"\n          aria-expanded={detailsOpen ? \"true\" : \"false\"}\n          aria-controls=\"acc-panel-details\"\n          onClick={() => toggle(\"details\")}\n        >\n          Details\n        </button>\n      </h3>\n      <div\n        id=\"acc-panel-details\"\n        hidden={!detailsOpen}\n        role=\"region\"\n        aria-labelledby=\"acc-btn-details\"\n      >\n        <p>\n          This panel includes supporting text and a link to{\" \"}\n          <a href=\"#policies\">policies</a>.\n        </p>\n      </div>\n\n      <h3>\n        <button\n          id=\"acc-btn-shipping\"\n          type=\"button\"\n          aria-expanded={shippingOpen ? \"true\" : \"false\"}\n          aria-controls=\"acc-panel-shipping\"\n          onClick={() => toggle(\"shipping\")}\n        >\n          Shipping\n        </button>\n      </h3>\n      <div\n        id=\"acc-panel-shipping\"\n        hidden={!shippingOpen}\n        role=\"region\"\n        aria-labelledby=\"acc-btn-shipping\"\n      >\n        <p>Shipping information goes here. This panel contains only text.</p>\n      </div>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab/Shift+Tab moves focus through accordion header buttons in order."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enter and Space toggle the associated panel visibility."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus remains on the header button after toggling."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If a panel is collapsed while focus is inside it (implementation choice), focus is moved to a sensible place (typically the controlling header)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Screen Reader\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each header is announced as a button within a heading."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The expanded/collapsed state is announced via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-expanded"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"region\""
            }), " is used, the panel is announced with a name that matches the controlling header."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Links inside expanded panels are reachable and operate normally."
          }), "\n"]
        }), "\n"]
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