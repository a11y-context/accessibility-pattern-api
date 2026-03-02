"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[525],{

/***/ 2181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_collection_row_md_a8e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-collection-row-md-a8e.json
const site_patterns_web_react_components_collection_row_md_a8e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/collection-row.basic","title":"Collection Row","description":"Use When","source":"@site/../patterns/web/react/components/collection-row.md","sourceDirName":"components","slug":"/components/collection-row.basic","permalink":"/web/react/components/collection-row.basic","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"collection-row","permalink":"/web/react/tags/collection-row"},{"inline":true,"label":"shelf","permalink":"/web/react/tags/shelf"},{"inline":true,"label":"rail","permalink":"/web/react/tags/rail"},{"inline":true,"label":"horizontal-list","permalink":"/web/react/tags/horizontal-list"},{"inline":true,"label":"ecommerce","permalink":"/web/react/tags/ecommerce"},{"inline":true,"label":"navigation","permalink":"/web/react/tags/navigation"}],"version":"current","lastUpdatedAt":1771782373000,"frontMatter":{"id":"collection-row.basic","title":"Collection Row","stack":"web/react","status":"beta","tags":["collection-row","shelf","rail","horizontal-list","ecommerce","navigation"],"aliases":["content row","content rail","rail","strip","shelf","multi item carousel","product row"],"summary":"Horizontal product shelf with a heading, list semantics, and Prev/Next paging that moves focus to newly revealed items."},"sidebar":"webReactSidebar","previous":{"title":"Channel Guide Grid","permalink":"/web/react/components/grid.channel-guide"},"next":{"title":"Dialog (Modal)","permalink":"/web/react/components/dialog.modal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/collection-row.md


const frontMatter = {
	id: 'collection-row.basic',
	title: 'Collection Row',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'collection-row',
		'shelf',
		'rail',
		'horizontal-list',
		'ecommerce',
		'navigation'
	],
	aliases: [
		'content row',
		'content rail',
		'rail',
		'strip',
		'shelf',
		'multi item carousel',
		'product row'
	],
	summary: 'Horizontal product shelf with a heading, list semantics, and Prev/Next paging that moves focus to newly revealed items.'
};
const contentTitle = 'Collection Row';

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
        id: "collection-row",
        children: "Collection Row"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when displaying multiple related items in a horizontally scrollable row under a shared category heading (e.g., e.g., “Customers Also Viewed”, “Action Movies”)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when multiple items are visible simultaneously and can be scrolled left or right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when each item is a compact card with a primary visual element and brief supporting text."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when only one item is visible at a time within a rotatable sequence (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "carousel"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when items are arranged in a multi-row or multi-column layout (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grid"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when items are presented as a simple vertical list without horizontal scrolling (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a visible heading, typically an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<h2>"
        }), ", above the row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use list semantics for the row: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ul"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "li"
        }), " items."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) on each item and button."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each item must comprise a single focus stop: in other words, consist of a single link ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<a>"
        }), " that contains:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A visual element (image, poster, thumbnail, or media preview)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A visible title that identifies the item."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional visible metadata (e.g., price, episode number, rating)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each item link must have an accessible name composed of:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["title + metadata (optional) via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-labelledby"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each item link should expose position context (e.g., “3 of 18”) as supplemental information:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide an offscreen “X of Y” element."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reference it via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-describedby"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The position must reflect the item’s index within the full set, not just the currently visible subset."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide paging controls:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Next button on the right edge of the row container (vertically centered)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Previous button on the left edge when not on the first page"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Paging focus behavior:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Activating Next moves focus to the first newly revealed item (left-most visible link).\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "For example, if items 1 through 6 are visible, and the user activates the Next button, then items 7 through 12 become visible, and focus moves to item 7."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Activating Previous moves focus to the last newly revealed item (right-most visible link)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the golden pattern, we wrap the component in a container with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"group\""
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), " pointing to the heading ID. This is optional. Engineers may choose instead to use a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<section>"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"region\""
        }), ", or to eschew the container entirely."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Items must at minimum have some \"title\" text that gives each item a name, but they are not required to also have metadata, like a price, or rating, etc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a user's focus is on the last visible item, and they press Tab, focus should move to a 'Next' button, not to the next item in the collection row."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t split the item into multiple separate interactive elements (one item = one link)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not rely solely on poster art or imagery to communicate the name of each item."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "\"use client\";\n\nimport * as React from \"react\";\n\nexport function CollectionRow({ heading = \"Customers Also Viewed\", items = ITEMS, pageSize = 4 }) {\n  const headingId = React.useId();\n  const [startIndex, setStartIndex] = React.useState(0);\n\n  const linkRefs = React.useRef([]);\n\n  const total = items.length;\n  const endIndex = Math.min(startIndex + pageSize, total);\n  const visible = items.slice(startIndex, endIndex);\n\n  const canPrev = startIndex > 0;\n  const canNext = endIndex < total;\n\n  function goNext() {\n    if (!canNext) return;\n    const nextStart = Math.min(startIndex + pageSize, Math.max(total - pageSize, 0));\n    setStartIndex(nextStart);\n    requestAnimationFrame(() => linkRefs.current[0]?.focus());\n  }\n\n  function goPrev() {\n    if (!canPrev) return;\n    const prevStart = Math.max(startIndex - pageSize, 0);\n    setStartIndex(prevStart);\n    requestAnimationFrame(() => linkRefs.current[visible.length - 1]?.focus());\n  }\n\n  return (\n    <div role=\"group\" aria-labelledby={headingId}>\n      <h2 id={headingId}>{heading}</h2>\n\n      {canPrev && (\n        <button type=\"button\" onClick={goPrev} aria-label=\"Previous items\">\n          Prev\n        </button>\n      )}\n\n      <ul>\n        {visible.map((item, i) => {\n          const globalIndex = startIndex + i;\n          const titleId = `${headingId}-title-${globalIndex}`;\n          const metaId = `${headingId}-meta-${globalIndex}`;\n          const posId = `${headingId}-pos-${globalIndex}`;\n\n          return (\n            <li key={item.id}>\n              <a\n                href={item.href}\n                ref={(el) => (linkRefs.current[i] = el)}\n                aria-labelledby={`${titleId} ${metaId}`}\n                aria-describedby={posId}\n              >\n                <span aria-hidden=\"true\">[image]</span>\n                <div id={titleId}>{item.title}</div>\n                <span id={posId} style={srOnly}>\n                  {globalIndex + 1} of {total}\n                </span>\n                <div id={metaId}>{item.meta}</div>\n              </a>\n            </li>\n          );\n        })}\n      </ul>\n\n      {canNext && (\n        <button type=\"button\" onClick={goNext} aria-label=\"Next items\">\n          Next\n        </button>\n      )}\n    </div>\n  );\n}\n\nconst srOnly = {\n  position: \"absolute\",\n  width: 1,\n  height: 1,\n  padding: 0,\n  margin: -1,\n  overflow: \"hidden\",\n  clip: \"rect(0,0,0,0)\",\n  whiteSpace: \"nowrap\",\n  border: 0,\n};\n\nconst ITEMS = [\n  { id: \"1\", title: \"Item One\", meta: \"$24.95\", href: \"#\" },\n  { id: \"2\", title: \"Item Two\", meta: \"$29.00\", href: \"#\" },\n  { id: \"3\", title: \"Item Three\", meta: \"$18.50\", href: \"#\" },\n  { id: \"4\", title: \"Item Four\", meta: \"$22.00\", href: \"#\" },\n  { id: \"5\", title: \"Item Five\", meta: \"$27.99\", href: \"#\" },\n  { id: \"6\", title: \"Item Six\", meta: \"$16.95\", href: \"#\" },\n  { id: \"7\", title: \"Item Seven\", meta: \"$25.50\", href: \"#\" },\n  { id: \"8\", title: \"Item Eight\", meta: \"$34.00\", href: \"#\" },\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Structure:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A visible heading is present."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The row uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ul"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "li"
            }), " semantics."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each item is a single link wrapping its content."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accessible naming:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each link exposes a programmatic name that includes the visible title."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If metadata is present, it contributes to the accessible name."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each link exposes position context (e.g., “3 of 18”) once via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-describedby"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab order reaches Previous and Next buttons without forcing navigation through hidden items."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Activating Next moves focus to the first newly visible item."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Activating Previous moves focus to the last newly visible item."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tabbing from the last visible item moves to the Next button (not to hidden items)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Visual focus:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All interactive elements (item links and paging buttons) have a visible focus indicator."
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