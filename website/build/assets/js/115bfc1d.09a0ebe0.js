"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[3654],{

/***/ 6325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_switch_md_115_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-switch-md-115.json
const site_patterns_web_react_components_switch_md_115_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/switch.basic","title":"Switch","description":"Use When","source":"@site/../patterns/web/react/components/switch.md","sourceDirName":"components","slug":"/components/switch.basic","permalink":"/web/react/components/switch.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"switch","permalink":"/web/react/tags/switch"},{"inline":true,"label":"settings","permalink":"/web/react/tags/settings"},{"inline":true,"label":"on-off","permalink":"/web/react/tags/on-off"},{"inline":true,"label":"form-control","permalink":"/web/react/tags/form-control"},{"inline":true,"label":"toggle","permalink":"/web/react/tags/toggle"}],"version":"current","lastUpdatedAt":1771783048000,"frontMatter":{"id":"switch.basic","title":"Switch","stack":"web/react","status":"beta","tags":["switch","settings","on-off","form-control","toggle"],"aliases":["toggle switch","preference toggle"],"summary":"Two-state on/off control representing a persistent setting. Uses role=\\"switch\\" with aria-checked, or native checkbox semantics when applicable."},"sidebar":"webReactSidebar","previous":{"title":"Link","permalink":"/web/react/components/link.basic"},"next":{"title":"Toast","permalink":"/web/react/components/toast.basic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/switch.md


const frontMatter = {
	id: 'switch.basic',
	title: 'Switch',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'switch',
		'settings',
		'on-off',
		'form-control',
		'toggle'
	],
	aliases: [
		'toggle switch',
		'preference toggle'
	],
	summary: 'Two-state on/off control representing a persistent setting. Uses role="switch" with aria-checked, or native checkbox semantics when applicable.'
};
const contentTitle = 'Switch';

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
        id: "switch",
        children: "Switch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when a control represents a persistent binary setting that remains on or off beyond the current interaction (e.g., “Enable notifications”, “Dark mode”)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the setting takes effect immediately when toggled, without requiring form submission."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the control reflects the current state of a system or application preference."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the control triggers an in-place action or transient feature toggle within the current context (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button.toggle"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when selecting one or more options from a group of related choices (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkbox"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when more than two states are required (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button.toggle"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The switch has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"switch\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The switch should have an associated visible text label."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure the switch has an accessible name that clearly describes its action. Often this is worded to be true when the switch is set to \"on\" (e.g., \"Enable notifications\")."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The accessible name should be equivalent to the visible text label. Additional context may be added for screen reader users with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), ", or offscreen text (i.e., ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sr-only"
        }), "), when needed.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If the accessible name extends beyond the visible text, ensure the visible text appears at the beginning of the accessible name."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When on, the switch has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-checked=\"true\""
        }), ". When off, the switch has ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-checked=\"false\""
        }), ".\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If the switch is implemented as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "input[type=\"checkbox\"]"
            }), ", use the native ", (0,jsx_runtime.jsx)(_components.code, {
              children: "checked"
            }), " attribute instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-checked"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The switch must be focusable:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Native input (i.e., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "input[type=\"checkbox\"]"
            }), ") is focusable by default."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Non-native elements must include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex=\"0\""
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab/Shift+Tab moves focus to the switch."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Space toggles the switch."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Enter toggles the switch.\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Exception: If using native input ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "input[type=\"checkbox\"]"
                }), ", then only Space toggles the switch, not Enter."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If multiple switches are presented as a labeled set:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fieldset"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "legend"
            }), ", or"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Wrap in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"group\""
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-labelledby"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If additional descriptive static text is relevant to a switch or switch group, associate it using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether the visual design resembles a sliding switch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether the accessible name is contained within the switch or referenced externally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether state text (“On”/“Off”) is visually displayed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether multiple switches may be grouped."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t use a switch for non-setting actions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t omit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-checked"
        }), " when using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "div"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "button"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"switch\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t use both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checked"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-checked"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "input[type=\"checkbox\"]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not use a switch to trigger actions; use it only for persistent on/off settings."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "\"use client\";\n\nimport * as React from \"react\";\n\nexport function SwitchDemo() {\n  const [notifications, setNotifications] = React.useState(false);\n\n  function toggle() {\n    setNotifications((v) => !v);\n  }\n\n  return (\n    <div>\n      {/* \n        This example uses a <div>.\n        The same pattern may also be implemented using:\n        - <button role=\"switch\">, or\n        - <input type=\"checkbox\" role=\"switch\">\n      */}\n\n      <div\n        role=\"switch\"\n        aria-checked={notifications ? \"true\" : \"false\"}\n        tabIndex={0}\n        aria-labelledby=\"sw-label\"\n        onClick={toggle}\n        onKeyDown={(e) => {\n          if (e.key === \" \" || e.key === \"Enter\") {\n            e.preventDefault();\n            toggle();\n          }\n        }}\n      >\n        <span id=\"sw-label\">Notifications</span>\n        <span aria-hidden=\"true\">\n          {notifications ? \"On\" : \"Off\"}\n        </span>\n      </div>\n\n      <fieldset>\n        <legend>Playback Settings</legend>\n        <p id=\"playback-desc\">\n          These settings apply to all videos.\n        </p>\n\n        <div\n          role=\"switch\"\n          aria-checked=\"true\"\n          tabIndex={0}\n          aria-labelledby=\"autoplay-label\"\n          aria-describedby=\"playback-desc\"\n        >\n          <span id=\"autoplay-label\">Autoplay</span>\n          <span aria-hidden=\"true\">On</span>\n        </div>\n\n        <div\n          role=\"switch\"\n          aria-checked=\"false\"\n          tabIndex={0}\n          aria-labelledby=\"captions-label\"\n          aria-describedby=\"playback-desc\"\n        >\n          <span id=\"captions-label\">Always show captions</span>\n          <span aria-hidden=\"true\">Off</span>\n        </div>\n      </fieldset>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab moves focus to each switch."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Space toggles state."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enter toggles state."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus remains on the switch after toggling."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Screen Reader\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Switch is announced with its accessible name and role (“switch”)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "State is announced correctly as on/off."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Group label is announced when using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fieldset/legend"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"group\""
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Additional descriptive text is announced when associated via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-describedby"
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