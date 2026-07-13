/**
 * A11y Context — navbar search.
 *
 * An accessible ARIA 1.2 combobox (editable input + listbox popup) providing
 * case-insensitive PREFIX matching over a curated page index. Ported from the
 * Version E mockup (design-mockups/vE-refined/component.html) and re-authored
 * in idiomatic, SSR-safe React. See DESIGN-SYSTEM.md §6 "Search".
 *
 * Behavior contract:
 *   - role="combobox" input with aria-autocomplete="list", aria-expanded,
 *     aria-controls, aria-activedescendant.
 *   - role="listbox" popup with role="option" children (aria-selected).
 *   - Full keyboard: ArrowDown/ArrowUp (wrap), Enter (select), Escape (close);
 *     "/" anywhere focuses the field.
 *   - Selecting an option navigates to its route via the Docusaurus router.
 *
 * The page index below is intentionally HARD-CODED (sanctioned by the build
 * spec). Component routes follow the documented URL contracts:
 *   web/react → /web/react/components/<id>   (sidebars-web-react.js)
 *   ios       → /ios/swiftui/components/<id>  (sidebars-ios.js)
 * Keep this list in sync with patterns/web/react/patterns.json and
 * patterns/ios/swiftui/patterns.json when the catalog changes.
 */
import React, {useCallback, useEffect, useId, useRef, useState} from 'react';
import clsx from 'clsx';
import {useHistory} from '@docusaurus/router';
import styles from './styles.module.css';

/** @type {Array<{label: string, to: string}>} */
const PAGES = [
  // ── Web / React — section pages ──────────────────────────────────────────
  {label: 'Overview · React (Web)', to: '/web/react'},
  {label: 'Foundations · React (Web)', to: '/web/react/foundations'},
  {label: 'Components · React (Web)', to: '/web/react/component-gallery'},
  {label: 'Release Notes · React (Web)', to: '/web/react/release-notes'},
  // ── Web / React — components (route: /web/react/components/<id>) ──────────
  {label: 'Accordion · React (Web)', to: '/web/react/components/accordion.basic'},
  {label: 'Button (Basic) · React (Web)', to: '/web/react/components/button.basic'},
  {label: 'Button (Toggle) · React (Web)', to: '/web/react/components/button.toggle'},
  {label: 'Carousel (Dots) · React (Web)', to: '/web/react/components/carousel.dots'},
  {label: 'Carousel (Thumbnails) · React (Web)', to: '/web/react/components/carousel.thumbnails'},
  {label: 'Collection Row · React (Web)', to: '/web/react/components/collection-row.basic'},
  {label: 'Combobox (Autocomplete) · React (Web)', to: '/web/react/components/combobox.autocomplete'},
  {label: 'Dialog (Modal) · React (Web)', to: '/web/react/components/dialog.modal'},
  {label: 'Dialog (Non-Modal) · React (Web)', to: '/web/react/components/dialog.nonmodal'},
  {label: 'Disclosure · React (Web)', to: '/web/react/components/disclosure.basic'},
  {label: 'Grid (Channel Guide) · React (Web)', to: '/web/react/components/grid.channel-guide'},
  {label: 'Link · React (Web)', to: '/web/react/components/link.basic'},
  {label: 'Listbox · React (Web)', to: '/web/react/components/listbox.basic'},
  {label: 'Menu · React (Web)', to: '/web/react/components/menu.basic'},
  {label: 'Menubar · React (Web)', to: '/web/react/components/menu.menubar'},
  {label: 'Navigation (Flat List) · React (Web)', to: '/web/react/components/navigation-menu.basic'},
  {label: 'Navigation (Disclosure) · React (Web)', to: '/web/react/components/navigation-menu.dropdown'},
  // Reordered so "Select (Basic)" (select.native) precedes "Select (Custom
  // Style)" (select.basic), matching the sidebar order. Slugs/URLs unchanged.
  {label: 'Select (Basic) · React (Web)', to: '/web/react/components/select.native'},
  {label: 'Select (Custom Style) · React (Web)', to: '/web/react/components/select.basic'},
  {label: 'Switch · React (Web)', to: '/web/react/components/switch.basic'},
  {label: 'Toast · React (Web)', to: '/web/react/components/toast.basic'},
  {label: 'Tooltip · React (Web)', to: '/web/react/components/tooltip.basic'},
  // ── SwiftUI / iOS ────────────────────────────────────────────────────────
  {label: 'Overview · SwiftUI (iOS)', to: '/ios'},
  {label: 'Button (Basic) · SwiftUI (iOS)', to: '/ios/swiftui/components/button.basic'},
  {label: 'Button (Toggle) · SwiftUI (iOS)', to: '/ios/swiftui/components/button.toggle'},
  {label: 'Checkbox · SwiftUI (iOS)', to: '/ios/swiftui/components/checkbox.basic'},
  {label: 'Dialog (Alert) · SwiftUI (iOS)', to: '/ios/swiftui/components/dialog.alert'},
  {label: 'Link · SwiftUI (iOS)', to: '/ios/swiftui/components/link.basic'},
  {label: 'Inline Link · SwiftUI (iOS)', to: '/ios/swiftui/components/link.inline'},
  {label: 'List Row (Navigable) · SwiftUI (iOS)', to: '/ios/swiftui/components/list.row'},
  {label: 'Select (Menu) · SwiftUI (iOS)', to: '/ios/swiftui/components/select.menu'},
  {label: 'Slider · SwiftUI (iOS)', to: '/ios/swiftui/components/slider.basic'},
  {label: 'Stepper · SwiftUI (iOS)', to: '/ios/swiftui/components/stepper.basic'},
  {label: 'Switch · SwiftUI (iOS)', to: '/ios/swiftui/components/switch.basic'},
  {label: 'Text Field · SwiftUI (iOS)', to: '/ios/swiftui/components/text-field.basic'},
  // ── Getting Started / general ────────────────────────────────────────────
  {label: 'Getting Started', to: '/getting-started/'},
  {label: 'Why This Works', to: '/getting-started/why-this-works'},
  {label: 'Using with AI Coding Agents', to: '/getting-started/ai-coding-agents/'},
  {label: 'Retrieval Options', to: '/getting-started/ai-coding-agents/install/'},
  {label: 'Downloads', to: '/getting-started/ai-coding-agents/install/downloads'},
  {label: 'QA & Testing', to: '/getting-started/qa-testing/'},
  {label: 'Troubleshooting', to: '/troubleshooting/'},
];

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.searchIcon}>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function NavbarSearch() {
  const history = useHistory();
  const inputRef = useRef(null);
  const listboxRef = useRef(null);

  const rawId = useId();
  const uid = rawId.replace(/[:]/g, '');
  const inputId = `${uid}-search-input`;
  const listboxId = `${uid}-search-listbox`;
  const optionId = (i) => `${listboxId}-opt-${i}`;

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const q = query.trim().toLowerCase();
  const results =
    q === '' ? PAGES : PAGES.filter((p) => p.label.toLowerCase().startsWith(q));

  const closeList = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const scrollOptionIntoView = useCallback((index) => {
    const lb = listboxRef.current;
    if (!lb) return;
    const opt = lb.querySelectorAll('[role="option"]')[index];
    if (opt) opt.scrollIntoView({block: 'nearest'});
  }, []);

  const selectIndex = useCallback(
    (index) => {
      const item = results[index];
      if (!item) return;
      closeList();
      setQuery('');
      if (inputRef.current) inputRef.current.blur();
      history.push(item.to);
    },
    [results, closeList, history],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!open) setOpen(true);
        if (results.length === 0) return;
        setActiveIndex((i) => {
          const next = i < results.length - 1 ? i + 1 : 0;
          window.requestAnimationFrame(() => scrollOptionIntoView(next));
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!open) setOpen(true);
        if (results.length === 0) return;
        setActiveIndex((i) => {
          const next = i > 0 ? i - 1 : results.length - 1;
          window.requestAnimationFrame(() => scrollOptionIntoView(next));
          return next;
        });
      } else if (e.key === 'Enter') {
        if (open && activeIndex > -1) {
          e.preventDefault();
          selectIndex(activeIndex);
        }
      } else if (e.key === 'Escape') {
        if (open) {
          e.preventDefault();
          closeList();
        }
      }
    },
    [open, results.length, activeIndex, selectIndex, closeList, scrollOptionIntoView],
  );

  // "/" anywhere focuses the search field (skip when already typing in a field).
  useEffect(() => {
    function onSlash(e) {
      if (e.key !== '/') return;
      const el = document.activeElement;
      const tag = el && el.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (el && el.isContentEditable)) {
        return;
      }
      e.preventDefault();
      if (inputRef.current) inputRef.current.focus();
    }
    document.addEventListener('keydown', onSlash);
    return () => document.removeEventListener('keydown', onSlash);
  }, []);

  return (
    <div className={styles.search} role="search">
      <SearchIcon />
      <label htmlFor={inputId} className={styles.srOnly}>
        Search patterns and pages
      </label>
      <input
        id={inputId}
        ref={inputRef}
        className={styles.input}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={
          open && activeIndex > -1 ? optionId(activeIndex) : undefined
        }
        autoComplete="off"
        spellCheck={false}
        placeholder="Search patterns…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        onBlur={() => window.setTimeout(closeList, 120)}
      />
      <kbd className={styles.kbd} aria-hidden="true">
        /
      </kbd>
      <ul
        id={listboxId}
        ref={listboxRef}
        className={styles.listbox}
        role="listbox"
        aria-label="Matching patterns and pages"
        hidden={!open}>
        {results.length === 0 ? (
          <li className={styles.empty} role="presentation">
            No matching results
          </li>
        ) : (
          results.map((item, i) => (
            <li
              key={item.to}
              id={optionId(i)}
              role="option"
              aria-selected={i === activeIndex}
              className={clsx(
                styles.option,
                i === activeIndex && styles.optionActive,
              )}
              onMouseDown={(e) => {
                // preventDefault keeps focus on the input so blur doesn't
                // close the list before the click registers.
                e.preventDefault();
                selectIndex(i);
              }}
              onMouseEnter={() => setActiveIndex(i)}>
              {item.label}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
