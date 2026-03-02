"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[2885],{

/***/ 703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_global_global_rules_md_14b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-global-global-rules-md-14b.json
const site_patterns_web_react_global_global_rules_md_14b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"global/global_ruleset.baseline","title":"Foundations","description":"Rule: Offscreen Text Utility (sr-only)","source":"@site/../patterns/web/react/global/global_rules.md","sourceDirName":"global","slug":"/foundations","permalink":"/web/react/foundations","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1771532333000,"frontMatter":{"id":"global_ruleset.baseline","title":"Foundations","slug":"/foundations","stack":"web/react","rule_set":"baseline","status":"beta","summary":"Baseline accessibility rules applied across most UI work.","cache_ttl_seconds":86400,"apply_policy":{"instruction":"Apply all MUST rules that match the current change scope. If the task does not touch a scope, do not introduce unrelated changes.","scopes_in_order":["utility","page","layout","component","style"]}},"sidebar":"webReactSidebar","previous":{"title":"Overview","permalink":"/web/react/"},"next":{"title":"Component Gallery","permalink":"/web/react/component-gallery"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/global/global_rules.md


const frontMatter = {
	id: 'global_ruleset.baseline',
	title: 'Foundations',
	slug: '/foundations',
	stack: 'web/react',
	rule_set: 'baseline',
	status: 'beta',
	summary: 'Baseline accessibility rules applied across most UI work.',
	cache_ttl_seconds: 86400,
	apply_policy: {
		instruction: 'Apply all MUST rules that match the current change scope. If the task does not touch a scope, do not introduce unrelated changes.',
		scopes_in_order: [
			'utility',
			'page',
			'layout',
			'component',
			'style'
		]
	}
};
const contentTitle = 'Global Rules (Baseline)';

const assets = {

};



const toc = [{
  "value": "Rule: Offscreen Text Utility (sr-only)",
  "id": "rule-offscreen-text-utility-sr-only",
  "level": 2
}, {
  "value": "Must Haves",
  "id": "must-haves",
  "level": 3
}, {
  "value": "Don&#39;ts",
  "id": "donts",
  "level": 3
}, {
  "value": "Snippets",
  "id": "snippets",
  "level": 3
}, {
  "value": "Acceptance Checks",
  "id": "acceptance-checks",
  "level": 3
}, {
  "value": "Rule: Page Title",
  "id": "rule-page-title",
  "level": 2
}, {
  "value": "Must Haves",
  "id": "must-haves-1",
  "level": 3
}, {
  "value": "Don&#39;ts",
  "id": "donts-1",
  "level": 3
}, {
  "value": "Acceptance Checks",
  "id": "acceptance-checks-1",
  "level": 3
}, {
  "value": "Rule: Landmarks",
  "id": "rule-landmarks",
  "level": 2
}, {
  "value": "Must Haves",
  "id": "must-haves-2",
  "level": 3
}, {
  "value": "Don&#39;ts",
  "id": "donts-2",
  "level": 3
}, {
  "value": "Acceptance Checks",
  "id": "acceptance-checks-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "global-rules-baseline",
        children: "Global Rules (Baseline)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-offscreen-text-utility-sr-only",
      children: "Rule: Offscreen Text Utility (sr-only)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: global.sr-only\nscope: [utility, component, style]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where a component's rules dictate the use of \"offscreen text\", then the snippet below must be included as a CSS class: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sr-only"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Offscreen text may be used as an alternative to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "donts",
      children: "Don'ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not hide offscreen text using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "display: none"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "visibility: hidden"
        }), " when it is needed for an accessible name."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "snippets",
      children: "Snippets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".sr-only {\n  clip: rect(1px,1px,1px,1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where offscreen text is implemented, it is not overridden by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-labelledby"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-page-title",
      children: "Rule: Page Title"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: global.page-title\nscope: [page]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-haves-1",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each page (route/view/document) sets a descriptive page title that reflects the central topic of the current page."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The page title begins with the name of the current page and is followed by the name of the site.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Page name and site name should be separated using a clear visual character, such as a hyphen, emdash, or vertical pipe."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Page name should be similar to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<h1>"
            }), " text on the page."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "donts-1",
      children: "Don'ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not leave the page title as a generic placeholder across routes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acceptance-checks-1",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser tab title changes appropriately when navigating to the page."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The browser tab title includes the page name and then the site name, with a clear separator between."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-landmarks",
      children: "Rule: Landmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: global.landmarks\nscope: [page, layout]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-haves-2",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When site or app navigation is present on a page (route/view/document), this is contained inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<nav>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"navigation\""
        }), ") landmark, which is contained inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<header>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"banner\""
        }), ") landmark.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If a single set of navigation is present, then it should be labeled (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<nav aria-label=\"primary\">"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If more than one set of navigation is present - e.g., primary and secondary or breadcrumbs - then each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "navigation"
            }), " landmark must be labeled (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<nav aria-label=\"primary\">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<nav aria-label=\"secondary\">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<nav aria-label=\"breadcrumbs\">"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When a footer is present - i.e., a section at the bottom of the page with information relevant to the entire site, such as a sitemap or navigation links - this is contained inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<footer>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"contentinfo\""
        }), ") landmark"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<main>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"main\""
        }), ") landmark must always be present.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " landmark contains the dominant content of the page, which directly relates to or expands upon the central topic of the page, or the central functionality of an application."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If site or app navigation is present at the top of the page or view (i.e., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "header"
            }), "), and/or a footer (", (0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), ") is present at the bottom of the page, the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " landmark should wrap all content between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "header"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), " content"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " landmark must be a sibling of the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "header"
            }), " and/or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), " containers."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the page contains complementary content - i.e., content that is only indirectly related to the page's main content - this is contained inside an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<aside>"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"complementary\""
        }), ") landmark\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aside"
            }), " landmark is infrequently used and does not need to be present."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If present, the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aside"
            }), " landmark should be a sibling to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " landmark, and to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "header"
            }), " and/or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), ", if present."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "donts-2",
      children: "Don'ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use multiple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " landmarks on the same page."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not wrap the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "header"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "footer"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aside"
        }), " inside the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " landmark, or vice-versa: these should all be siblings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acceptance-checks-2",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is one ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " landmark present on every page."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If there is site or app navigation present, this is contained inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nav"
        }), " landmark, which is contained inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "header"
        }), " landmark, sibling to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
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