import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const FRAMEWORKS = [
  {
    label: 'React (Web)',
    href: '/web/react',
    description:
      'Accessible component patterns for React applications, covering buttons, dialogs, carousels, grids, and more.',
    badge: 'Beta',
  },
  {
    label: 'Android (Compose)',
    href: '/android',
    description:
      'Jetpack Compose accessibility patterns — coming soon.',
    badge: 'Coming Soon',
  },
  {
    label: 'iOS (SwiftUI)',
    href: '/ios',
    description:
      'SwiftUI accessibility patterns — coming soon.',
    badge: 'Coming Soon',
  },
];

function FrameworkCard({ label, href, description, badge }) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardLabel}>{label}</span>
        <span className={clsx(styles.badge, badge === 'Beta' ? styles.badgeBeta : styles.badgeSoon)}>
          {badge}
        </span>
      </div>
      <p className={styles.cardDesc}>{description}</p>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroCopy}>
            A structured corpus of production-ready accessibility patterns for modern UI frameworks.
            Each pattern provides prescriptive guidance, a golden implementation, and acceptance checks —
            ready for developer AI contexts, design system docs, or direct team reference.
          </p>
        </section>

        <section className={styles.frameworks}>
          <h2 className={styles.sectionTitle}>Choose a Framework</h2>
          <div className={styles.grid}>
            {FRAMEWORKS.map((fw) => (
              <FrameworkCard key={fw.href} {...fw} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
