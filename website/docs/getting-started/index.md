---
title: What This Is
sidebar_label: What This Is
hide_title: true
hide_table_of_contents: true
description: A corpus of per-component accessibility specifications, written to be consumed by machines as much as by people.
---

<div class="gs-landing">
  <!-- page head -->
  <div class="gs-page-head">
    <span class="eyebrow">Getting started</span>
    <h1 class="gs-page-title">Put the corpus to work.</h1>
    <p class="gs-page-summary">A corpus of per-component accessibility specifications — selection boundaries, Must Haves, a tested golden pattern, and acceptance checks — written to be consumed by machines as much as by people.</p>
  </div>
  <!-- Two ways in -->
  <section class="gs-block" aria-labelledby="gs-doors-heading">
    <h2 class="gs-section-title" id="gs-doors-heading">Two ways in</h2>
    <p class="gs-section-sub gs-section-sub--full">The same corpus serves both ends of the pipeline — generation and verification.</p>
    <div class="door-grid">
      <div class="door">
        <div class="door-head">
          <span class="door-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><path d="M7 6 3.5 10 7 14M13 6l3.5 4L13 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div class="door-titles">
            <div class="door-titleline"><h3>For AI coding agents</h3></div>
            <p>Guidance at authoring time.</p>
          </div>
        </div>
        <a class="door-link" href="/getting-started/ai-coding-agents/">
          Get the agent set up
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9m0 0-3.2-3.2M12 8l-3.2 3.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="door">
        <div class="door-head">
          <span class="door-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M6.8 10.2l2.2 2.2 4.4-4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div class="door-titles">
            <div class="door-titleline">
              <h3>For QA &amp; testing</h3>
              <span class="tag-progress">In progress</span>
            </div>
            <p>The corpus as a test oracle.</p>
          </div>
        </div>
        <a class="door-link" href="/getting-started/qa-testing/">
          See how it works
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9m0 0-3.2-3.2M12 8l-3.2 3.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </section>
  <!-- Retrieval options at a glance -->
  <section class="gs-block" aria-labelledby="gs-retrieval-heading">
    <h2 class="gs-section-title" id="gs-retrieval-heading">Retrieval options at a glance</h2>
    <p class="gs-section-sub gs-section-sub--full">Four ways to get patterns in front of the agent — pick the one that matches your setup.</p>
    <div class="ret-mini-grid">
      <a class="ret-mini" href="/getting-started/ai-coding-agents/install/">
        <span class="rm-name">HTTP retrieval
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10 10 4M6 4h4v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <p>Fetch at generation time, needs network.</p>
      </a>
      <a class="ret-mini" href="/getting-started/ai-coding-agents/install/">
        <span class="rm-name">Local copy
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10 10 4M6 4h4v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <p>Clone into the repo, offline, needs refresh.</p>
      </a>
      <a class="ret-mini" href="/getting-started/ai-coding-agents/install/mcp-server">
        <span class="rm-name">MCP
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10 10 4M6 4h4v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <p>Deterministic JSON contracts, most reliable.</p>
      </a>
      <a class="ret-mini" href="/getting-started/ai-coding-agents/install/custom">
        <span class="rm-name">Enterprise RAG
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10 10 4M6 4h4v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <p>Index into your org's knowledge layer.</p>
      </a>
    </div>
  </section>
  <!-- Downloads -->
  <section class="gs-block" aria-labelledby="gs-downloads-heading">
    <h2 class="gs-section-title" id="gs-downloads-heading">Downloads</h2>
    <p class="gs-section-sub">Rules files, skill, and subagent — packaged per client (Claude Code, Cursor, Copilot). Copy in, done.</p>
    <div class="dl-grid">
      <div class="dl-card">
        <h3>Claude Code</h3>
        <p>Rules file · skill · subagent</p>
        <a class="dl-btn" href="/getting-started/ai-coding-agents/install/downloads">
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v7.5m0 0L4 6.2M7 9l3-2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10.5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          Download bundle<span class="sr-only"> for Claude Code</span>
        </a>
      </div>
      <div class="dl-card">
        <h3>Cursor</h3>
        <p>Rules file · skill · subagent</p>
        <a class="dl-btn" href="/getting-started/ai-coding-agents/install/downloads">
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v7.5m0 0L4 6.2M7 9l3-2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10.5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          Download bundle<span class="sr-only"> for Cursor</span>
        </a>
      </div>
      <div class="dl-card">
        <h3>Copilot</h3>
        <p>Rules file · skill · subagent</p>
        <a class="dl-btn" href="/getting-started/ai-coding-agents/install/downloads">
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v7.5m0 0L4 6.2M7 9l3-2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10.5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          Download bundle<span class="sr-only"> for Copilot</span>
        </a>
      </div>
    </div>
  </section>
</div>
