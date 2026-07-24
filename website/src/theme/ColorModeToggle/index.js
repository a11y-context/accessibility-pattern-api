/**
 * Swizzled ColorModeToggle (@docusaurus/theme-classic v3.7.0) — Version E toggle.
 *
 * N3 (fidelity): the stock circular "clean-btn" toggle looked janky, so this is
 * restyled to the Version E .theme-toggle (design-mockups/vE-refined/*.html): a
 * clean 36×36 bordered button on the surface, muted icon, hover → ink + muted
 * border. The 17px sun / moon glyphs are the exact Version E icons, inlined here.
 *
 * Icon convention (matches Version E and the stock inverted setup): show the
 * TARGET mode's icon — a MOON in light mode (switch to dark), a SUN in dark mode
 * (switch to light). Visibility is driven by [data-theme] in styles.module.css.
 * The descriptive "currently {mode}" aria-label / title is preserved.
 */
import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function SunIcon({className}) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 1.5v2M10 16.5v2M3.6 3.6l1.4 1.4M15 15l1.4 1.4M1.5 10h2M16.5 10h2M3.6 16.4l1.4-1.4M15 5l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({className}) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true">
      <path
        d="M17 11.3A7 7 0 1 1 8.7 3a5.5 5.5 0 0 0 8.3 8.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ColorModeToggle({className, buttonClassName, value, onChange}) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    },
  );
  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => onChange(value === 'dark' ? 'light' : 'dark')}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
        aria-pressed={value === 'dark' ? 'true' : 'false'}>
        <SunIcon className={clsx(styles.toggleIcon, styles.iconSun)} />
        <MoonIcon className={clsx(styles.toggleIcon, styles.iconMoon)} />
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
