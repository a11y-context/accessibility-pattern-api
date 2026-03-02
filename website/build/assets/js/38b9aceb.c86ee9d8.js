"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[1040],{

/***/ 7974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_button_toggle_md_38b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-button-toggle-md-38b.json
const site_patterns_web_react_components_button_toggle_md_38b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/button.toggle","title":"Toggle Button","description":"Use When","source":"@site/../patterns/web/react/components/button.toggle.md","sourceDirName":"components","slug":"/components/button.toggle","permalink":"/web/react/components/button.toggle","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"button","permalink":"/web/react/tags/button"},{"inline":true,"label":"toggle","permalink":"/web/react/tags/toggle"},{"inline":true,"label":"pressed","permalink":"/web/react/tags/pressed"},{"inline":true,"label":"aria-pressed","permalink":"/web/react/tags/aria-pressed"},{"inline":true,"label":"mute-button","permalink":"/web/react/tags/mute-button"}],"version":"current","lastUpdatedAt":1771359095000,"frontMatter":{"id":"button.toggle","title":"Toggle Button","stack":"web/react","status":"beta","tags":["button","toggle","pressed","aria-pressed","mute-button"],"aliases":["toggle button","pressed button"],"summary":"Two- or three-state button that toggles between pressed and not pressed using aria-pressed."},"sidebar":"webReactSidebar","previous":{"title":"Toast","permalink":"/web/react/components/toast.basic"},"next":{"title":"Release Notes","permalink":"/web/react/release-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/button.toggle.md


const frontMatter = {
	id: 'button.toggle',
	title: 'Toggle Button',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'button',
		'toggle',
		'pressed',
		'aria-pressed',
		'mute-button'
	],
	aliases: [
		'toggle button',
		'pressed button'
	],
	summary: 'Two- or three-state button that toggles between pressed and not pressed using aria-pressed.'
};
const contentTitle = 'Toggle Button';

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
  "value": "Formatting toolbar exception",
  "id": "formatting-toolbar-exception",
  "level": 3
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
    h3: "h3",
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
        id: "toggle-button",
        children: "Toggle Button"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when a control toggles a feature or action within the current context (e.g., “Mute”, “Bold”, “Pin”, \"Enable Closed Captioning\")."
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
        children: ["Do not use when the control represents a persistent on/off system or application setting, such as “Enable notifications”, “Dark mode” (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
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
        }), " element for built-in semantics and keyboard behavior."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure the button has an accessible name that clearly describes its purpose or action."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default strategy: represent state by changing the accessible name to the next action (e.g., “Mute” ↔ “Unmute”, “Pin” ↔ “Remove pin”)."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatting-toolbar-exception",
      children: "Formatting toolbar exception"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the control is a formatting toggle in a toolbar (e.g., Bold/Italic/Underline), use aria-pressed=\"true|false\" to reflect whether formatting is currently applied."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In this toolbar case, keep the accessible name stable (e.g., “Bold”) and do not rename it to “Remove bold” or “Unbold”."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For most toggles (non-toolbar), you may express “next action” via:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Visible text (preferred when space allows), and/or"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "aria-label"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-labelledby"
            }), " (required for icon-only)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You may add context to the accessible name when multiple similar toggles exist (e.g., “Mute Trailer”, “Unmute Trailer”) using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ", or offscreen text."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don't use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-pressed"
        }), " for non-toolbar toggles ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "if"
        }), " you are already changing the accessible name to the next action (avoid conflicting models like \"Unmute, pressed\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don't leave ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-pressed"
        }), " incorrect, stale, or always ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"true\""
        }), " / always ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"false\""
        }), " when you choose the toolbar approach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don't ship icon-only toggles without an accessible name (", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don't put state only in the icon (screen reader users must get state via the accessible name change or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-pressed"
        }), ", depending on strategy)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import * as React from \"react\";\n\nexport function ToggleButtonDemo() {\n  const [muted, setMuted] = React.useState(false);\n  const [iconOnlyMuted, setIconOnlyMuted] = React.useState(false);\n  const [pinned, setPinned] = React.useState(false);\n  const [bold, setBold] = React.useState(false);\n\n  return (\n    <div>\n      <p>Toggle state indicated by accessible name change</p>\n\n      <button type=\"button\" onClick={() => setMuted((v) => !v)}>\n        <span aria-hidden=\"true\">[icon]</span>{\" \"}\n        {muted ? \"Unmute\" : \"Mute\"}\n      </button>\n\n      <button type=\"button\" onClick={() => setPinned((v) => !v)}>\n        <span aria-hidden=\"true\">[icon]</span>{\" \"}\n        {pinned ? \"Unpin\" : \"Pin\"}\n      </button>\n\n      <button\n        type=\"button\"\n        onClick={() => setIconOnlyMuted((v) => !v)}\n        aria-label={iconOnlyMuted ? \"Unmute\" : \"Mute\"}\n      >\n        <span aria-hidden=\"true\">[icon]</span>\n      </button>\n\n      <hr />\n\n      <p>Toggle state indicated by aria-pressed (toolbar formatting)</p>\n\n      <button\n        type=\"button\"\n        aria-pressed={bold ? \"true\" : \"false\"}\n        onClick={() => setBold((v) => !v)}\n      >\n        <span aria-hidden=\"true\">[icon]</span>{\" \"}\n        Bold\n      </button>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard activation\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab to each control: a visible focus indicator is present."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Press Space or Enter: the control activates/toggles."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Either the button's accessible name adjusts to reflect its state (preferred), or it remains constant and the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-pressed"
        }), " reflects its state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Icons are not announced (decorative via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-hidden=\"true\""
        }), ")."]
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