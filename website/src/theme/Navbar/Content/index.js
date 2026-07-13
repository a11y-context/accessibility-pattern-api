/**
 * Swizzled from @docusaurus/theme-classic Navbar/Content (v3.7.0).
 *
 * Changes vs. stock (to match the Version E navbar — see DESIGN-SYSTEM.md §6):
 *   1. A "v0.5" version pill is rendered immediately right of the brand wordmark.
 *   2. The right cluster order is search → GitHub icon → dark-mode toggle
 *      (stock renders items → toggle → search). Search is our own accessible
 *      combobox (src/components/NavbarSearch), not an Algolia/search plugin.
 *
 * Everything else (mobile sidebar toggle, logo, left items, error boundaries)
 * is preserved from stock.
 */
import React from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@site/src/components/NavbarSearch';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <span className="navbar__version-chip">v0.5</span>
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          <NavbarSearch />
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className="navbar__color-mode-toggle" />
        </>
      }
    />
  );
}
