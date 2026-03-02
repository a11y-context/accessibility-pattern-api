"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[8583],{

/***/ 8597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_button_basic_md_f48_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-button-basic-md-f48.json
const site_patterns_web_react_components_button_basic_md_f48_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/button.basic","title":"Basic Button","description":"Use When","source":"@site/../patterns/web/react/components/button.basic.md","sourceDirName":"components","slug":"/components/button.basic","permalink":"/web/react/components/button.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"button","permalink":"/web/react/tags/button"},{"inline":true,"label":"control","permalink":"/web/react/tags/control"},{"inline":true,"label":"action","permalink":"/web/react/tags/action"},{"inline":true,"label":"icon-button","permalink":"/web/react/tags/icon-button"}],"version":"current","lastUpdatedAt":1771354701000,"frontMatter":{"id":"button.basic","title":"Basic Button","stack":"web/react","status":"beta","tags":["button","control","action","icon-button"],"aliases":["btn","primary button","icon button","call to action","cta"],"summary":"Native button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns."},"sidebar":"webReactSidebar","previous":{"title":"Accordion","permalink":"/web/react/components/accordion.basic"},"next":{"title":"Carousel with Dot Navigation","permalink":"/web/react/components/carousel.dots"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/button.basic.md


const frontMatter = {
	id: 'button.basic',
	title: 'Basic Button',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'button',
		'control',
		'action',
		'icon-button'
	],
	aliases: [
		'btn',
		'primary button',
		'icon button',
		'call to action',
		'cta'
	],
	summary: 'Native button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns.'
};
const contentTitle = 'Basic Button';

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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "basic-button",
        children: "Basic Button"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the user triggers an immediate action (e.g., “Save”, “Continue”, “Dismiss”)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the control navigates to a new URL (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "link"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the control represents an on/off pressed state (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button.toggle"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the control opens a menu (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "menu.button"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<button>"
        }), " for built-in semantics and keyboard behavior.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A custom implementation with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"button\""
            }), " is appropriate only when a native button cannot be used."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If role=\"button\" is used instead of a native ", (0,jsx_runtime.jsx)(_components.button, {
              children: ", add tabindex=\"0\" and keyboard support for Enter and Space, ensuring Space prevents page scrolling while activating the control."
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure the button has an accessible name that clearly describes its purpose or action."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For buttons with visible text, the button's inner text may serve as the accessible name. Additional context may be added for screen reader users with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ", or offscreen text, when needed."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the accessible name extends beyond the visible text, ensure the visible text appears at the beginning of the accessible name."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For icon-only buttons, provide an accessible name using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Icons within buttons must be decorative (", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-hidden=\"true\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the action is unavailable, disable the button using the native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " attribute. (It becomes unfocusable and non-interactive.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) around the button."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Buttons with visible text don't usually need additional context for screen reader users (though they might). If they do, then an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or offscreen element should be used."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t build a button out of a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<div>"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<span>"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"button\""
        }), " unless you absolutely must; native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<button>"
        }), " is the baseline."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t create icon-only buttons without an accessible name (no unlabeled icons)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " that conflicts with (or is wildly different from) the visible label text. Accessible names should at least begin with the visible label."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t hide focus outlines without providing a strong custom focus style."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import * as React from \"react\";\n\nexport function ButtonBasicDemo() {\n  return (\n    <div>\n      {/* Text-only */}\n      <button type=\"button\" onClick={() => alert(\"Saved\")}>\n        Save\n      </button>\n\n      {/* Icon + text */}\n      <button type=\"button\" onClick={() => alert(\"Downloaded\")}>\n        <span aria-hidden=\"true\">[icon]</span> Download\n      </button>\n\n      {/* Icon-only (must have accessible name) */}\n      <button\n        type=\"button\"\n        aria-label=\"Open settings\"\n        onClick={() => alert(\"Settings\")}\n      >\n        <span aria-hidden=\"true\">[icon]</span>\n      </button>\n\n      {/* Disabled */}\n      <button type=\"button\" disabled onClick={() => alert(\"Won't fire\")}>\n        Disabled\n      </button>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tab to the button: a visible focus indicator is present."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Press Space or Enter: the button activates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text-only button: screen reader announces the visible label."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Icon+text button: screen reader announces the text label (icon is not redundantly announced)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Icon-only button: screen reader announces the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " (e.g., \"Open settings\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Disabled button:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cannot be activated by click/keyboard."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Is not focusable when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled"
            }), " is set."]
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