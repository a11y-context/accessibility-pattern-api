import React, {useEffect, useId, useLayoutEffect, useState} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useQueryString, useStorageSlot} from '@docusaurus/theme-common';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import styles from './styles.module.css';

// Step 1 of the HTTP, Local, and MCP install pages: a stack picker above the
// tool tabs, and the command, ZIP link, and folder tree for that pair.
//
// The stack picker is a radio group, not a second row of tabs. It records a
// setting that changes the contents of every tool tab instead of showing a
// panel of its own, which is the case the React tabs.basic pattern sends to
// a radio group. Both choices carry across pages and can be set from a link,
// e.g. ?stack=compose&tool=cursor.

const SITE = 'https://a11y-context-project.vercel.app';
const STACK_STORAGE_KEY = 'a11y-context.install.stack';

const STACKS = [
  {value: 'react', slug: 'web-react', name: 'React', platform: 'Web', project: ['src/', 'package.json']},
  {value: 'swiftui', slug: 'ios-swiftui', name: 'SwiftUI', platform: 'iOS', project: ['YourApp/', 'YourApp.xcodeproj']},
  {value: 'compose', slug: 'android-compose', name: 'Compose', platform: 'Android', project: ['app/', 'settings.gradle.kts']},
];

const TOOLS = [
  {value: 'claude-code', label: 'Claude Code', dir: '.claude'},
  {value: 'codex', label: 'Codex', dir: '.agents'},
  {value: 'cursor', label: 'Cursor', dir: '.cursor'},
  {value: 'copilot', label: 'Copilot', dir: '.github'},
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
const isStack = (value) => STACKS.some((s) => s.value === value);

// Same approach as Docusaurus's own Tabs: render the default on the server,
// then sync to the link or the stored choice before the browser paints.
function useStackChoice() {
  const [value, setValue] = useState(STACKS[0].value);
  const [query, setQuery] = useQueryString('stack');
  const [stored, storage] = useStorageSlot(STACK_STORAGE_KEY);
  const toSync = isStack(query) ? query : isStack(stored) ? stored : null;

  useIsomorphicLayoutEffect(() => {
    if (toSync) setValue(toSync);
  }, [toSync]);

  const choose = (next) => {
    setValue(next);
    setQuery(next);
    storage.set(next);
  };
  return [value, choose];
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
  const [stackValue, chooseStack] = useStackChoice();
  const stack = STACKS.find((s) => s.value === stackValue) ?? STACKS[0];
  const groupName = useId();
  const downloads = useBaseUrl('/downloads/');
  const skill = `a11y-context-${stack.slug}-${variant}`;

  return (
    <div className={styles.install}>
      <fieldset className={styles.picker}>
        <legend className={styles.legend}>Your stack</legend>
        <div className={styles.options}>
          {STACKS.map((s) => (
            <label key={s.value} className={styles.option}>
              <input
                type="radio"
                className={styles.radio}
                name={groupName}
                value={s.value}
                checked={stack.value === s.value}
                onChange={() => chooseStack(s.value)}
              />
              <span className={styles.optionText}>
                <span className={styles.optionName}>{s.name}</span>{' '}
                <span className={styles.optionPlatform}>{s.platform}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Tabs groupId="ai-tool" queryString="tool">
        {TOOLS.map((tool, i) => (
          <TabItem key={tool.value} value={tool.value} label={tool.label} default={i === 0}>
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
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
