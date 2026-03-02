"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[8467],{

/***/ 2283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_toast_md_87d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-toast-md-87d.json
const site_patterns_web_react_components_toast_md_87d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/toast.basic","title":"Toast","description":"Use When","source":"@site/../patterns/web/react/components/toast.md","sourceDirName":"components","slug":"/components/toast.basic","permalink":"/web/react/components/toast.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"toast","permalink":"/web/react/tags/toast"},{"inline":true,"label":"notification","permalink":"/web/react/tags/notification"},{"inline":true,"label":"status","permalink":"/web/react/tags/status"},{"inline":true,"label":"live-region","permalink":"/web/react/tags/live-region"}],"version":"current","lastUpdatedAt":1771783272000,"frontMatter":{"id":"toast.basic","title":"Toast","stack":"web/react","status":"beta","tags":["toast","notification","status","live-region"],"aliases":["notification","toast","transient message","status message"],"summary":"Temporary, non-blocking status message announced via live region. May include optional dismiss control. Disappears automatically."},"sidebar":"webReactSidebar","previous":{"title":"Switch","permalink":"/web/react/components/switch.basic"},"next":{"title":"Toggle Button","permalink":"/web/react/components/button.toggle"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/toast.md


const frontMatter = {
	id: 'toast.basic',
	title: 'Toast',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'toast',
		'notification',
		'status',
		'live-region'
	],
	aliases: [
		'notification',
		'toast',
		'transient message',
		'status message'
	],
	summary: 'Temporary, non-blocking status message announced via live region. May include optional dismiss control. Disappears automatically.'
};
const contentTitle = 'Toast';

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
  "value": "Don&#39;ts",
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
        id: "toast",
        children: "Toast"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when presenting a temporary, non-blocking status message."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the message confirms an action (e.g., “Saved”, “Added to watchlist”)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the message is text-only and contains no required actions, except for (at most) a dismiss button."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the message requires user acknowledgment, moves keyboard focus, or blocks background interaction (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dialog"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the message is urgent or must interrupt the user immediately (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dialog.alert"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the message includes required actions or interactive controls beyond simple dismissal (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snackbar"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The live region container must be present in the DOM when the page/view loads."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The toast message must be announced via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"status\""
        }), ", or an equivalent such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-live=\"polite\""
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-atomic=\"true\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a toast is triggered, its message text must be injected into the existing live region container."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The toast must not move focus automatically when it appears."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The toast must disappear automatically (recommended ~5 seconds)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The live region text must be cleared when the toast dismisses to avoid stale messages being discovered later."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a dismiss button is present, it must not steal focus when the toast appears."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visual placement (top-right, bottom-center, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration (within reasonable non-disruptive bounds)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether a dismiss button is included."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Styling (color, elevation, animation)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don'ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t mount/unmount the live region container based on toast visibility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not move focus into the toast when it appears."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"alertdialog\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The toast must not contain buttons or elements that require user action (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snackbar"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dialog"
        }), " instead)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "\"use client\";\n\nimport * as React from \"react\";\n\nconst ToastContext = React.createContext(() => {});\n\nexport function ToastProvider({ children }) {\n  const [message, setMessage] = React.useState(\"\");\n  const timeoutRef = React.useRef(null);\n\n  const showToast = React.useCallback((text) => {\n    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);\n    setMessage(text);\n    timeoutRef.current = window.setTimeout(() => setMessage(\"\"), 5000);\n  }, []);\n\n  return (\n    <ToastContext.Provider value={showToast}>\n      {children}\n\n      {/* Live region is always mounted */}\n      <div role=\"status\" aria-atomic=\"true\">\n        {message}\n      </div>\n    </ToastContext.Provider>\n  );\n}\n\nexport function useToast() {\n  return React.useContext(ToastContext);\n}\n\n/** Demo */\nexport function ToastDemo() {\n  const toast = useToast();\n\n  return (\n    <div>\n      <button type=\"button\" onClick={() => toast(\"Saved successfully.\")}>\n        Save\n      </button>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trigger a toast via keyboard."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus remains on the triggering control."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No focus is moved into the toast."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Screen Reader\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When triggered, the message is announced once as a polite status update."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The message is not announced repeatedly."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "After the toast auto-dismisses, the live region is cleared (stale text is not discoverable later)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Triggering a new toast replaces the previous announcement."
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