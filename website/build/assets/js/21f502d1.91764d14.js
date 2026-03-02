"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[2164],{

/***/ 1196
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_dialog_modal_md_21f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-dialog-modal-md-21f.json
const site_patterns_web_react_components_dialog_modal_md_21f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/dialog.modal","title":"Dialog (Modal)","description":"Use When","source":"@site/../patterns/web/react/components/dialog.modal.md","sourceDirName":"components","slug":"/components/dialog.modal","permalink":"/web/react/components/dialog.modal","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"dialog","permalink":"/web/react/tags/dialog"},{"inline":true,"label":"modal","permalink":"/web/react/tags/modal"},{"inline":true,"label":"pop-up","permalink":"/web/react/tags/pop-up"},{"inline":true,"label":"overlay","permalink":"/web/react/tags/overlay"},{"inline":true,"label":"focus-trap","permalink":"/web/react/tags/focus-trap"},{"inline":true,"label":"blocking","permalink":"/web/react/tags/blocking"}],"version":"current","lastUpdatedAt":1771782550000,"frontMatter":{"id":"dialog.modal","title":"Dialog (Modal)","stack":"web/react","status":"beta","tags":["dialog","modal","pop-up","overlay","focus-trap","blocking"],"aliases":["dialog","modal","pop-up"],"summary":"User-initiated blocking dialog that traps focus, inerts background content, and restores focus on close."},"sidebar":"webReactSidebar","previous":{"title":"Collection Row","permalink":"/web/react/components/collection-row.basic"},"next":{"title":"Link","permalink":"/web/react/components/link.basic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/dialog.modal.md


const frontMatter = {
	id: 'dialog.modal',
	title: 'Dialog (Modal)',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'dialog',
		'modal',
		'pop-up',
		'overlay',
		'focus-trap',
		'blocking'
	],
	aliases: [
		'dialog',
		'modal',
		'pop-up'
	],
	summary: 'User-initiated blocking dialog that traps focus, inerts background content, and restores focus on close.'
};
const contentTitle = 'Dialog (Modal)';

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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dialog-modal",
        children: "Dialog (Modal)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when content appears in an overlay that blocks interaction with the underlying page."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when keyboard focus must move into the dialog and remain contained until dismissal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when the user must explicitly complete or dismiss the dialog before returning to the main interface."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not use when the content is part of the normal page flow and does not block background interaction."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when presenting brief, non-blocking status messages that do not require focus movement (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toast"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snackbar"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when the message is urgent and requires immediate acknowledgment (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dialog.alert"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not use when the interaction involves complex, multi-step workflows spanning multiple screens."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Render an overlay/backdrop that is not exposed as a separate landmark:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Backdrop uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"presentation\""
            }), " (or equivalent non-semantic container)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking the backdrop (outside the dialog surface) closes the dialog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking inside the dialog must not close the dialog."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dialog semantics:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dialog surface has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"dialog\""
            }), " (or native ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<dialog>"
            }), " with equivalent semantics)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dialog surface sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-modal=\"true\""
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dialog surface is focusable for entry (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex={-1}"
            }), " or equivalent) and receives initial focus on open."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accessible naming (required):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dialog has an accessible name via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-labelledby"
            }), " (preferred) or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-label"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-labelledby"
            }), " is used, it must reference a visible title element (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<h2 id=\"...\">"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accessible description (recommended when present):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If a description is rendered, it should be referenced by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-describedby"
            }), " (do not rely on incidental reading order)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Focus management:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Capture the invoking element on open."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move focus into the dialog on open."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Trap keyboard focus within the dialog while open."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Restore focus to the invoking element on close."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dismiss behavior:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Escape closes the dialog."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provide a visible close control (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<button type=\"button\">"
            }), ") with an accessible name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-label=\"Close dialog\""
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Background isolation:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Background application content ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must not"
            }), " be focusable or reachable by keyboard or screen readers while the dialog is open."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Enforce via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inert"
            }), " on the app root (preferred when available) or an equivalent approach."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Visible focus:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All focusable elements inside the dialog must have a clearly visible focus indicator."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<dialog>"
        }), " element does not have perfect browser support yet. For this reason, we still recommend using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"dialog\""
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-modal=\"true\""
        }), ". The engineer may use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<dialog>"
        }), ", but if they do, they must still include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-modal=\"true\""
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not rely on the native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<dialog>"
        }), " element for consistent cross-browser modal behavior in portal-based applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t rely on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-modal=\"true\""
        }), " to block background interaction; it does not prevent focus/pointer access on its own."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t render the modal inside containers that create clipping or stacking contexts (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "overflow: hidden/auto"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transform"
        }), "), and don’t rely on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z-index"
        }), " alone to “make it work.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Don’t inert ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document.body"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document.documentElement"
        }), "; inert only the application content root."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t omit focus restoration; closing a modal must return the user to where they were."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "\"use client\";\n\nimport * as React from \"react\";\nimport { createPortal } from \"react-dom\";\n\nexport function ModalDialog({\n  open,\n  title,\n  description,\n  onClose,\n  children,\n  inertRoot,\n}) {\n  const titleId = React.useId();\n\n  const dialogRef = React.useRef(null);\n  const openerRef = React.useRef(null);\n\n  // Capture the opener at the moment we open (so focus can be restored on close).\n  React.useLayoutEffect(() => {\n    if (!open) return;\n    openerRef.current = document.activeElement;\n  }, [open]);\n\n  // Background inert while open (optional; depends on target root existing).\n  React.useEffect(() => {\n    const target =\n      inertRoot || document.getElementById(\"app-root\");\n\n    if (!target) return;\n\n    if (open) {\n      target.setAttribute(\"inert\", \"\");\n    } else {\n      target.removeAttribute(\"inert\");\n    }\n\n    return () => {\n      target.removeAttribute(\"inert\");\n    };\n  }, [open, inertRoot]);\n\n  // Focus entry + restore.\n  React.useEffect(() => {\n    if (!open) {\n      if (openerRef.current && typeof openerRef.current.focus === \"function\") {\n        openerRef.current.focus();\n      }\n      return;\n    }\n\n    if (dialogRef.current && typeof dialogRef.current.focus === \"function\") {\n      dialogRef.current.focus();\n    }\n  }, [open]);\n\n  // Close on Escape.\n  React.useEffect(() => {\n    if (!open) return;\n\n    function onKeyDown(e) {\n      if (e.key === \"Escape\") {\n        e.preventDefault();\n        onClose();\n      }\n    }\n\n    document.addEventListener(\"keydown\", onKeyDown);\n    return () => document.removeEventListener(\"keydown\", onKeyDown);\n  }, [open, onClose]);\n\n  if (!open) return null;\n\n  const modal = (\n    <div\n      role=\"presentation\"\n      onMouseDown={(e) => {\n        if (e.target === e.currentTarget) {\n          onClose();\n        }\n      }}\n      style={{\n        position: \"fixed\",\n        inset: 0,\n        display: \"grid\",\n        placeItems: \"center\",\n        padding: 16,\n        background: \"rgba(0,0,0,0.55)\",\n      }}\n    >\n      <div\n        ref={dialogRef}\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby={titleId}\n        tabIndex={-1}\n        style={{\n          width: \"min(560px, 100%)\",\n          background: \"white\",\n          color: \"black\",\n          borderRadius: 12,\n          padding: 16,\n          boxShadow: \"0 24px 60px rgba(0,0,0,0.35)\",\n        }}\n      >\n        <div\n          style={{\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"flex-start\",\n            gap: 12,\n          }}\n        >\n          <div style={{ minWidth: 0 }}>\n            <h2 id={titleId} style={{ margin: 0 }}>\n              {title}\n            </h2>\n            {description ? (\n              <p style={{ marginTop: 8, marginBottom: 0 }}>\n                {description}\n              </p>\n            ) : null}\n          </div>\n\n          <button\n            type=\"button\"\n            onClick={onClose}\n            aria-label=\"Close dialog\"\n            style={{\n              width: 36,\n              height: 36,\n              borderRadius: 8,\n              border: \"1px solid rgba(0,0,0,0.2)\",\n              background: \"transparent\",\n              display: \"inline-grid\",\n              placeItems: \"center\",\n              lineHeight: 1,\n              cursor: \"pointer\",\n              flex: \"0 0 auto\",\n            }}\n          >\n            <span aria-hidden=\"true\" style={{ fontSize: 18 }}>\n              ×\n            </span>\n          </button>\n        </div>\n\n        <div style={{ marginTop: 16 }}>{children}</div>\n      </div>\n    </div>\n  );\n\n  return createPortal(modal, document.body);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "On open:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus moves to the dialog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dialog is announced with its accessible name."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Background content is not reachable by keyboard or screen reader."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "While open:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab and Shift+Tab remain within the dialog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Escape closes the dialog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking the backdrop closes the dialog."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking inside the dialog does not close it."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus indicators are visible on all interactive elements."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "On close:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus returns to the invoking element."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Background content becomes interactive again."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Semantics:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dialog has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"dialog\""
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-modal=\"true\""
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dialog has an accessible name."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Close button has an accessible name."
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