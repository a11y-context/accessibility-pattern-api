import React, {useMemo, useState} from 'react';
import catalog from '../../../../patterns/web/react/qa-catalog.json';
import styles from './styles.module.css';

// qa-catalog.json is an object keyed by pattern_id; each value is
// { pattern_id, catalog_revision, rules: [...] }. See patterns/web/react/qa-catalog.json.
const WRAPPERS = Object.values(catalog).sort((a, b) =>
  a.pattern_id.localeCompare(b.pattern_id),
);
const CATALOG_REVISION = WRAPPERS[0]?.catalog_revision ?? '';

const TECHNIQUES = [
  {key: 'static', label: 'Static', blurb: 'Checkable from source (lint / AST).'},
  {key: 'llm-eval', label: 'LLM eval', blurb: 'Semantic judgment on the code.'},
  {key: 'runtime', label: 'Runtime', blurb: 'Observable only when rendered (Playwright).'},
];
const TECH_LABEL = {static: 'Static', 'llm-eval': 'LLM eval', runtime: 'Runtime'};

function techniqueTally(rules) {
  const t = {static: 0, 'llm-eval': 0, runtime: 0};
  for (const r of rules) for (const k of r.techniques) if (k in t) t[k] += 1;
  return t;
}

function TechniqueBadges({techniques}) {
  return (
    <span className={styles.badges}>
      {techniques.map((t) => (
        <span key={t} className={`${styles.badge} ${styles[`badge_${t.replace('-', '_')}`]}`}>
          {TECH_LABEL[t] ?? t}
        </span>
      ))}
    </span>
  );
}

function RuleRow({rule}) {
  const detail =
    rule.static_hint || rule.llm_eval_question || rule.runtime_check;
  return (
    <li className={styles.rule}>
      <div className={styles.ruleHead}>
        <TechniqueBadges techniques={rule.techniques} />
        <span className={styles.ruleText}>{rule.rule}</span>
      </div>
      {detail && (
        <dl className={styles.ruleDetail}>
          {rule.static_hint && (
            <>
              <dt>Static hint</dt>
              <dd>{rule.static_hint}</dd>
            </>
          )}
          {rule.llm_eval_question && (
            <>
              <dt>LLM eval question</dt>
              <dd>{rule.llm_eval_question}</dd>
            </>
          )}
          {rule.runtime_check && (
            <>
              <dt>Runtime check</dt>
              <dd>{rule.runtime_check}</dd>
            </>
          )}
        </dl>
      )}
    </li>
  );
}

function PatternSection({wrapper, activeFilter}) {
  const rules = activeFilter
    ? wrapper.rules.filter((r) => r.techniques.includes(activeFilter))
    : wrapper.rules;
  if (rules.length === 0) return null;

  const mustHaves = rules.filter((r) => r.source === 'must_have');
  const donts = rules.filter((r) => r.source === 'dont');
  const tally = techniqueTally(rules);

  return (
    <details className={styles.pattern}>
      <summary className={styles.summary}>
        <code className={styles.patternId}>{wrapper.pattern_id}</code>
        <span className={styles.count}>{rules.length} rules</span>
        <span className={styles.miniTally}>
          {TECHNIQUES.map((t) =>
            tally[t.key] ? (
              <span key={t.key} className={styles.miniTallyItem}>
                {tally[t.key]} {t.label}
              </span>
            ) : null,
          )}
        </span>
      </summary>
      {mustHaves.length > 0 && (
        <>
          <h4 className={styles.groupHead}>Must Haves</h4>
          <ul className={styles.ruleList}>
            {mustHaves.map((r, i) => (
              <RuleRow key={i} rule={r} />
            ))}
          </ul>
        </>
      )}
      {donts.length > 0 && (
        <>
          <h4 className={styles.groupHead}>Don&apos;ts</h4>
          <ul className={styles.ruleList}>
            {donts.map((r, i) => (
              <RuleRow key={i} rule={r} />
            ))}
          </ul>
        </>
      )}
    </details>
  );
}

export default function QaCatalog() {
  const [filter, setFilter] = useState(null);

  const totals = useMemo(() => {
    const allRules = WRAPPERS.flatMap((w) => w.rules);
    return {
      patterns: WRAPPERS.length,
      rules: allRules.length,
      tally: techniqueTally(allRules),
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.statBar}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{totals.patterns}</span>
          <span className={styles.statLabel}>patterns</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{totals.rules}</span>
          <span className={styles.statLabel}>classified rules</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>catalog {CATALOG_REVISION}</span>
          <span className={styles.statLabel}>revision</span>
        </div>
      </div>

      <div className={styles.filterBar} role="group" aria-label="Filter rules by verification technique">
        <button
          type="button"
          className={styles.filterBtn}
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}>
          All ({totals.rules})
        </button>
        {TECHNIQUES.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`${styles.filterBtn} ${styles[`filter_${t.key.replace('-', '_')}`]}`}
            aria-pressed={filter === t.key}
            title={t.blurb}
            onClick={() => setFilter(filter === t.key ? null : t.key)}>
            {t.label} ({totals.tally[t.key]})
          </button>
        ))}
      </div>

      <p className={styles.hint}>
        {filter
          ? `Showing patterns with at least one ${TECH_LABEL[filter]} rule. `
          : 'Each rule is tagged with the technique(s) that can verify it. '}
        Expand a pattern to see its rules; each rule shows the linter hint, LLM
        question, or runtime assertion behind it.
      </p>

      <div className={styles.patterns}>
        {WRAPPERS.map((w) => (
          <PatternSection key={w.pattern_id} wrapper={w} activeFilter={filter} />
        ))}
      </div>
    </div>
  );
}
