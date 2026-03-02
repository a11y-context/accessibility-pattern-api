"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[9400],{

/***/ 8882
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_link_md_50d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-link-md-50d.json
const site_patterns_web_react_components_link_md_50d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link.basic","title":"Link","description":"Use When","source":"@site/../patterns/web/react/components/link.md","sourceDirName":"components","slug":"/components/link.basic","permalink":"/web/react/components/link.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"link","permalink":"/web/react/tags/link"},{"inline":true,"label":"anchor","permalink":"/web/react/tags/anchor"},{"inline":true,"label":"navigation","permalink":"/web/react/tags/navigation"},{"inline":true,"label":"external-link","permalink":"/web/react/tags/external-link"}],"version":"current","lastUpdatedAt":1771782749000,"frontMatter":{"id":"link.basic","title":"Link","stack":"web/react","status":"beta","tags":["link","anchor","navigation","external-link"],"aliases":["anchor","hyperlink","external link"],"summary":"Native link for navigation using <a href>. Supports optional context in the accessible name, including “opens in new tab/window/dialog”."},"sidebar":"webReactSidebar","previous":{"title":"Dialog (Modal)","permalink":"/web/react/components/dialog.modal"},"next":{"title":"Switch","permalink":"/web/react/components/switch.basic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/link.md


const frontMatter = {
	id: 'link.basic',
	title: 'Link',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'link',
		'anchor',
		'navigation',
		'external-link'
	],
	aliases: [
		'anchor',
		'hyperlink',
		'external link'
	],
	summary: 'Native link for navigation using <a href>. Supports optional context in the accessible name, including “opens in new tab/window/dialog”.'
};
const contentTitle = 'Link';

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
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "link",
        children: "Link"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when activating the element navigates to a different URL, route, or in-page anchor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the primary purpose of the element is destination-based navigation rather than performing an action."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when activating the element performs an in-place action such as submitting, saving, deleting, toggling, or opening a dialog (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the element changes UI state without navigation (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<a>"
        }), " element with an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "href"
        }), " whenever possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure the link’s purpose/destination is understandable from the link text alone, or from the link text plus programmatically determined context (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ", offscreen text)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure the link has an accessible name that describes its purpose/destination."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For links with visible text, the inner text may serve as the accessible name. Additional context may be added using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ", or offscreen text when needed."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the accessible name extends beyond the visible text, ensure the visible text appears at the beginning of the accessible name."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For icon-only links, provide an accessible name using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Icons within links must be decorative (", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-hidden=\"true\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keyboard activation must follow native link behavior: Enter activates; Space does not."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure the link is focusable:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Preferred: provide ", (0,jsx_runtime.jsx)(_components.code, {
              children: "href"
            }), " (native focus + native behaviors)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"link\""
            }), " on a non-", (0,jsx_runtime.jsx)(_components.code, {
              children: "<a>"
            }), " element, you must also provide keyboard support and focus management (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex=\"0\""
            }), " and Enter key activation)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a link opens a new tab/window, include both:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "programmatic context in the accessible name (e.g., “opens in new tab”), and"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a visual affordance: append an external-link icon at the end of the visible label."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) around the link."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Links with visible text don't usually need additional context for screen reader users (though they might). If they do, then an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or offscreen element should be used."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t style a link to look like plain text when it appears inline within a paragraph; inline links must be visually obvious (e.g., underlined)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t rely on color alone to indicate a link."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<a>"
        }), " without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "href"
        }), " for interactive behavior; it loses native link semantics and behaviors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"link\""
        }), " on non-link elements unless you cannot use a native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<a href>"
        }), ". Native links provide browser behaviors ARIA cannot add automatically.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Don’t use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"link\""
            }), " unless you also implement the missing link behaviors (focus, Enter activation, navigation, and expected link affordances)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t permit Space to activate links."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import * as React from \"react\";\n\nexport function LinkDemo() {\n  return (\n    <div>\n      {/* Simple link: accessible name from visible text */}\n      <a href=\"/account\">Sign in</a>\n\n      <br />\n\n      {/* Add context when needed (e.g., repeated links) */}\n      <h3 id=\"prod-1\">Superflo Water Bottle</h3>\n      <a href=\"/products/1\" aria-labelledby=\"prod-1-link prod-1\">\n        <span id=\"prod-1-link\">Read more</span>\n      </a>\n\n      <br />\n\n      {/* Opens in new tab: add accessible context + visible external icon */}\n      <a\n        href=\"https://example.com/report.pdf\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        aria-label=\"Download report, opens in a new tab\"\n      >\n        Download report <span aria-hidden=\"true\">[external-link-icon]</span>\n      </a>\n\n      <br />\n\n      {/* Icon-only link: must provide an accessible name */}\n      <a href=\"/settings\" aria-label=\"Settings\">\n        <span aria-hidden=\"true\">[icon]</span>\n      </a>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tab to each link: link receives focus and has a visible focus indicator."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press Enter on a focused link: navigation is triggered."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press Space on a focused link: does not activate the link."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline link in body text is visually identifiable as a link (e.g., underlined)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Screen reader announces an understandable name for each link:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple link: reads the visible text."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Contextual link: includes the additional context (e.g., “Superflo Water Bottle Read more”)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New tab/window link: includes “opens in a new tab/window” in the accessible name, and the external-link icon is not announced."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Icon-only link: announces the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-label"
            }), "."]
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