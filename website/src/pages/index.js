import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

// Checkmark used in the hero preview's accessibility-rule list.
function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M3 8l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={clsx(styles.container, styles.heroGrid)}>
        <div>
          <p className={styles.eyebrow}>Machine-readable accessibility patterns</p>
          <h1 className={styles.display}>
            Accessibility patterns built for AI coding agents.
          </h1>
          <p className={styles.subhead}>
            Retrieve per-component accessibility specs at the moment your agent
            generates UI code — so the code is born accessible.
          </p>
          <div className={styles.heroCtas}>
            <Link className={clsx(styles.btn, styles.btnPrimary)} to="/getting-started">
              Get started
            </Link>
            <Link className={clsx(styles.btn, styles.btnSecondary)} to="/web/react">
              Browse components
            </Link>
          </div>
          <ul className={styles.trustStrip}>
            <li>WCAG 2.2 AA</li>
            <li>ARIA APG</li>
            <li>MCP + RAG ready</li>
          </ul>
        </div>

        <div className={styles.previewWrap}>
          <figure className={styles.previewCard}>
            <figcaption className={styles.previewHead}>
              <span className={styles.previewDot} aria-hidden="true"></span>
              <span className={styles.previewTitle}>Accordion</span>
              <span className={styles.previewMeta}>React (Web)</span>
              <span className={styles.previewChip}>WCAG 2.2 AA</span>
            </figcaption>
            <div className={styles.previewBody}>
              <p className={styles.previewLabel}>Accessibility Rules</p>
              <ul className={styles.ruleList}>
                <li>
                  <Check />
                  <span>
                    Each header is a real <code>&lt;button&gt;</code> at the
                    section&rsquo;s heading level.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    Header carries <code>aria-expanded</code> and{' '}
                    <code>aria-controls</code>.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    Panel uses <code>role=&quot;region&quot;</code> with{' '}
                    <code>aria-labelledby</code>.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>Toggling never moves focus — it stays on the header.</span>
                </li>
              </ul>
            </div>
            <p className={styles.previewFoot}>
              Retrieved at generation time · one call per component
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className={styles.proof} aria-label="Measured results">
      <div className={clsx(styles.container, styles.proofGrid)}>
        <div className={styles.statCard}>
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statNum}>
                63% <span className={styles.arrow} aria-hidden="true">→</span> 90%
              </p>
              <p className={styles.statLabel}>Manual accessibility pass rate</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statNum}>−84%</p>
              <p className={styles.statLabel}>axe-core violations</p>
            </div>
          </div>
          <p className={styles.statFoot}>
            vs. unassisted generation (six enforced variants, n per the study).
          </p>
        </div>
        <figure className={styles.callout}>
          <blockquote>
            <p>
              Without accessibility instructions, AI-generated UI code passed
              accessibility checks just <strong>12%</strong> of the time across
              eight frontier models.
            </p>
          </blockquote>
          <figcaption>— Microsoft A11y LLM Eval</figcaption>
        </figure>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="h-how">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 id="h-how">How it works</h2>
          <p className={styles.sectionSub}>
            Three steps, run inside the agent&rsquo;s own loop — no change to how
            your team writes code.
          </p>
        </div>
        <ol className={styles.steps}>
          <li className={styles.step}>
            <span className={styles.stepNum} aria-hidden="true">01</span>
            <h3>Identify</h3>
            <p>The agent looks at what it&rsquo;s about to build and lists the components.</p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum} aria-hidden="true">02</span>
            <h3>Retrieve</h3>
            <p>It pulls only those patterns plus the global rules.</p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum} aria-hidden="true">03</span>
            <h3>Apply</h3>
            <p>It builds to each pattern&rsquo;s rules and golden pattern.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Frameworks() {
  return (
    <section
      className={clsx(styles.section, styles.sectionTight)}
      aria-labelledby="h-frameworks"
    >
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 id="h-frameworks">Frameworks</h2>
          <p className={styles.sectionSub}>One corpus, per-framework golden patterns.</p>
        </div>
        <div className={styles.fwGrid}>
          <Link
            className={clsx(styles.fwCard, styles.fwAvailable)}
            to="/web/react/component-gallery"
          >
            <h3>React (Web)</h3>
            <p className={styles.fwStatus}>Available</p>
            <span className={styles.fwLink}>Browse patterns →</span>
          </Link>
          <div className={clsx(styles.fwCard, styles.fwBeta)}>
            <h3>SwiftUI (iOS)</h3>
            <p className={styles.fwStatus}>Beta</p>
          </div>
          <div className={clsx(styles.fwCard, styles.fwSoon)}>
            <h3>Compose (Android)</h3>
            <p className={styles.fwStatus}>Coming soon</p>
          </div>
          <div className={clsx(styles.fwCard, styles.fwSoon)}>
            <h3>UIKit (iOS)</h3>
            <p className={styles.fwStatus}>Coming soon</p>
          </div>
          <div className={clsx(styles.fwCard, styles.fwSoon)}>
            <h3>Views (Android)</h3>
            <p className={styles.fwStatus}>Coming soon</p>
          </div>
          <div className={clsx(styles.fwCard, styles.fwSoon)}>
            <h3>Vanilla JS (Web)</h3>
            <p className={styles.fwStatus}>Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.home}>
        <Hero />
        <Proof />
        <HowItWorks />
        <Frameworks />
      </main>
    </Layout>
  );
}
