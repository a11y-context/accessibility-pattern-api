/**
 * Swizzled from @docusaurus/theme-classic CodeBlock/Content/String (v3.7.0).
 *
 * Adds the Version E code-block chrome (see DESIGN-SYSTEM.md §6):
 *   - A persistent toolbar bar: filename (from `title=`) + language badge on the
 *     LEFT; word-wrap toggle + copy button on the RIGHT. No "Tested" badge.
 *   - Buttons are icon + text pills (aria-pressed on wrap; copied state on copy).
 *
 * The Prism-rendered <pre>/<code> pipeline, word-wrap behavior (useCodeWordWrap),
 * line highlighting, and line numbering are all unchanged from stock. Surfaces
 * (#0B0B0C dark / #F0F0F3 light) come from the Prism theme object + custom.css.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {useThemeConfig, usePrismTheme} from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import {Highlight} from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import Container from '@theme/CodeBlock/Container';
import styles from './styles.module.css';

// Prism languages are always lowercase.
function normalizeLanguage(language) {
  return language?.toLowerCase();
}

function WrapIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 4h12M2 8h8a2.5 2.5 0 0 1 0 5H7m0 0 2-2m-2 2 2 2M2 12h2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5.5" y="5.5" width="8" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 10.5V3a1 1 0 0 1 1-1h6.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3.2 3.2L13 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyCodeButton({code}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(undefined);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const onCopy = useCallback(() => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code);
      }
    } catch {
      // Clipboard may be unavailable (insecure context); fail silently.
    }
    setCopied(true);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1500);
  }, [code]);
  return (
    <button
      type="button"
      className={styles.codeBtn}
      onClick={onCopy}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: {defaultLanguage, magicComments},
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage,
  );
  // G: a fence with NO language — or an explicitly plain one (text / tree /
  // none) — is a directory tree or plain-text block, not code. Render it as a
  // clean monospace surface WITHOUT the toolbar (no language badge, no Wrap, no
  // Copy); the surface + border from custom.css still apply. Language fences
  // (jsx/tsx/bash/…) keep the toolbar. We test the AUTHORED language, before the
  // config's `defaultLanguage` fallback, so adding a default can never silently
  // re-attach the toolbar to a language-less block.
  const authoredLanguage = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName),
  );
  const showToolbar = Boolean(
    authoredLanguage &&
      !['text', 'txt', 'plaintext', 'tree', 'none'].includes(authoredLanguage),
  );
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const {lineClassNames, code} = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`,
      )}>
      {showToolbar && (
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            {title && <span className={styles.filename}>{title}</span>}
            {language && (
              <span className={styles.langBadge}>{language.toUpperCase()}</span>
            )}
          </div>
          <div className={styles.toolbarRight}>
            <button
              type="button"
              className={styles.codeBtn}
              aria-pressed={wordWrap.isEnabled}
              aria-label="Toggle word wrap"
              onClick={() => wordWrap.toggle()}>
              <WrapIcon />
              <span aria-hidden="true">
                {wordWrap.isEnabled ? 'No wrap' : 'Wrap'}
              </span>
            </button>
            <CopyCodeButton code={code} />
          </div>
        </div>
      )}
      <div className={styles.codeBlockContent}>
        <Highlight theme={prismTheme} code={code} language={language ?? 'text'}>
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre
              /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
              tabIndex={0}
              ref={wordWrap.codeBlockRef}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={style}>
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering,
                )}>
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </Container>
  );
}
