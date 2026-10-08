import React, {useEffect, useId, useLayoutEffect, useState} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useQueryString, useStorageSlot} from '@docusaurus/theme-common';
import CodeBlock from '@theme/CodeBlock';
import BrandIcon from './BrandIcon';
import styles from './styles.module.css';

// Step 1 of the HTTP, Local, and MCP install pages: two choices, your stack and
// your AI tool, then the command, ZIP link, and folder tree for that pair.
//
// Both choices are radio groups rather than tabs. Each records a setting that
// changes one block of instructions below it, which is the case the React
// tabs.basic pattern sends to a radio group. They are drawn as cards with a
// brand icon; the radio stays in the page for the keyboard and screen readers
// but is hidden, and the card's fill and border show the selection. Both
// choices carry across pages and can be set from a link, e.g.
// ?stack=compose&tool=cursor.

const SITE = 'https://a11y-context-project.vercel.app';

const STACKS = [
  {value: 'react', slug: 'web-react', name: 'React', sub: 'Web', icon: 'html5', project: ['src/', 'package.json']},
  {value: 'swiftui', slug: 'ios-swiftui', name: 'SwiftUI', sub: 'iOS', icon: 'apple', project: ['YourApp/', 'YourApp.xcodeproj']},
  {value: 'compose', slug: 'android-compose', name: 'Compose', sub: 'Android', icon: 'android', project: ['app/', 'settings.gradle.kts']},
];

const TOOLS = [
  {value: 'claude-code', name: 'Claude Code', icon: 'claude', dir: '.claude'},
  {value: 'codex', name: 'Codex', icon: 'codex', dir: '.agents'},
  {value: 'cursor', name: 'Cursor', icon: 'cursor', dir: '.cursor'},
  {value: 'copilot', name: 'Copilot', icon: 'copilot', dir: '.github'},
];

const PROTOCOL = ['decisions-protocol.md', "when to ask before replacing your codebase's components"];
const FILES = {
  http: [
    ['SKILL.md', 'brain: invocation + selection + fetch step'],
    PROTOCOL,
    ['patterns.json', 'local catalog (selection only)'],
    ['global_rules.md', 'local Foundations rules'],
  ],
  local: [
    ['SKILL.md', 'brain: invocation + selection + read step'],
    PROTOCOL,
    ['patterns.json', 'local catalog (with source.path)'],
    ['global_rules.md', 'local Foundations rules'],
    ['components/', 'bundled pattern files, one per component'],
  ],
  mcp: [
    ['SKILL.md', 'brain: invocation + selection, retrieves via MCP tools'],
    PROTOCOL,
  ],
};

const useIsomorphicLayoutEffect = ExecutionEnvironment.canUseDOM ? useLayoutEffect : useEffect;

// Same approach as Docusaurus's own Tabs: render the default on the server,
// then sync to the link or the stored choice before the browser paints.
function useChoice(queryKey, storageKey, options) {
  const isOption = (v) => options.some((o) => o.value === v);
  const [value, setValue] = useState(options[0].value);
  const [query, setQuery] = useQueryString(queryKey);
  const [stored, storage] = useStorageSlot(storageKey);
  const toSync = isOption(query) ? query : isOption(stored) ? stored : null;

  // A choice that arrives in a link is remembered too, so someone sent
  // ?stack=compose still sees Compose on the next install page.
  useIsomorphicLayoutEffect(() => {
    if (toSync) setValue(toSync);
    if (isOption(query) && query !== stored) storage.set(query);
  }, [toSync]);

  const choose = (next) => {
    setValue(next);
    setQuery(next);
    storage.set(next);
  };
  return [options.find((o) => o.value === value) ?? options[0], choose];
}

function ChoiceGroup({legend, options, selected, onChoose, className}) {
  const groupName = useId();
  return (
    <fieldset className={styles.picker}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={`${styles.options} ${className}`}>
        {options.map((o) => (
          <label key={o.value} className={styles.choice}>
            <input
              type="radio"
              className={styles.srRadio}
              name={groupName}
              value={o.value}
              checked={selected.value === o.value}
              onChange={() => onChoose(o.value)}
            />
            <span className={styles.card}>
              <BrandIcon name={o.icon} className={styles.icon} />
              <span className={styles.optionText}>
                <span className={styles.optionName}>{o.name}</span>
                {o.sub && (
                  <>
                    {' '}
                    <span className={styles.optionSub}>{o.sub}</span>
                  </>
                )}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function installCommand(stack, tool, variant) {
  const zip = `a11y-context-${stack.slug}-${variant}.zip`;
  return [
    `mkdir -p ${tool.dir}/skills`,
    `curl -fsSL ${SITE}/downloads/${zip} -o /tmp/a11y-context.zip`,
    `unzip -o /tmp/a11y-context.zip -d ${tool.dir}/skills/`,
  ].join('\n');
}

function folderTree(stack, tool, variant) {
  const rows = FILES[variant];
  const width = Math.max(...rows.map(([file]) => file.length)) + 2;
  const lines = [
    'your-project/',
    `├── ${tool.dir}/`,
    '│   └── skills/',
    `│       └── a11y-context-${stack.slug}-${variant}/`,
  ];
  rows.forEach(([file, comment], i) => {
    const branch = i === rows.length - 1 ? '└──' : '├──';
    lines.push(`│           ${branch} ${file.padEnd(width)}# ${comment}`);
  });
  lines.push(`├── ${stack.project[0]}`, `└── ${stack.project[1]}`);
  return lines.join('\n');
}

function ToolNote({tool, skill, variant}) {
  switch (tool.value) {
    case 'claude-code':
      return (
        <p>
          To install it for every project instead, unzip into <code>~/.claude/skills/</code>. Claude Code
          reaches for the skill on its own when you build UI; to call it by name, type <code>/{skill}</code>.
        </p>
      );
    case 'codex':
      return (
        <>
          <p>
            Codex reads <code>.agents/skills/</code> from your working directory up to the repository root, and{' '}
            <code>~/.agents/skills/</code> for every project. To call the skill by name, type <code>${skill}</code>.
          </p>
          {variant === 'http' && (
            <>
              <p>
                This variant fetches pattern pages, and Codex keeps network access off by default. Turn it on in{' '}
                <code>~/.codex/config.toml</code>, or use the{' '}
                <Link to="/getting-started/ai-coding-agents/install/local">Local</Link> variant instead:
              </p>
              <CodeBlock language="toml">{'[sandbox_workspace_write]\nnetwork_access = true'}</CodeBlock>
            </>
          )}
        </>
      );
    case 'cursor':
      return (
        <p>
          Cursor also reads <code>.agents/skills/</code> and <code>.claude/skills/</code>. If the skill is already in
          one of those for another tool, Cursor finds it there, so skip this step rather than install a second copy.
          For every project, use <code>~/.cursor/skills/</code>. To call the skill by name, type <code>/</code> in
          Agent chat and pick it.
        </p>
      );
    default:
      return (
        <p>
          This is for Copilot in VS Code, which also reads <code>.claude/skills/</code> and{' '}
          <code>.agents/skills/</code>. If the skill is already in one of those for another tool, skip this step
          rather than install a second copy. For every project, use <code>~/.copilot/skills/</code>. To call the
          skill by name, type <code>/</code> in Copilot Chat and pick it.
        </p>
      );
  }
}

export default function SkillInstall({variant}) {
  const [stack, chooseStack] = useChoice('stack', 'a11y-context.install.stack', STACKS);
  const [tool, chooseTool] = useChoice('tool', 'a11y-context.install.tool', TOOLS);
  const downloads = useBaseUrl('/downloads/');
  const skill = `a11y-context-${stack.slug}-${variant}`;

  return (
    <div className={styles.install}>
      <ChoiceGroup legend="Your stack" options={STACKS} selected={stack} onChoose={chooseStack} className={styles.stacks} />
      <ChoiceGroup legend="Your AI tool" options={TOOLS} selected={tool} onChoose={chooseTool} className={styles.tools} />

      <div className={styles.result}>
        <CodeBlock language="bash">{installCommand(stack, tool, variant)}</CodeBlock>
        <p>
          Or download{' '}
          <a href={`${downloads}${skill}.zip`} download>
            {skill}.zip
          </a>{' '}
          and unzip it into <code>{tool.dir}/skills/</code> yourself.
        </p>
        <CodeBlock language="text">{folderTree(stack, tool, variant)}</CodeBlock>
        <ToolNote tool={tool} skill={skill} variant={variant} />
      </div>
    </div>
  );
}
