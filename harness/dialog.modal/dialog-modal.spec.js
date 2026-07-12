// @ts-check
const {test, expect} = require('@playwright/test');
const {pathToFileURL} = require('url');
const path = require('path');

// Reference Playwright spec for `dialog.modal`, generated from the pattern's
// `runtime`-tagged rules in qa-catalog.json (patterns/web/react/qa-catalog.json).
// Each test names the catalog rule it verifies. This is the runtime layer of
// axe-a11y-context v0.1 — the component-aware behavioral checks generic axe
// cannot perform because it does not know the element is a modal dialog.
//
// It runs against dialog-modal.golden.html — the native `<dialog>` +
// `.showModal()` golden implementation. Point `page.goto` at your own
// component's rendered URL to run the same contract against your code.

const FIXTURE = pathToFileURL(
  path.join(__dirname, 'dialog-modal.golden.html'),
).href;

test.beforeEach(async ({page}) => {
  await page.goto(FIXTURE);
});

async function open(page) {
  await page.locator('#open-btn').click();
}

test('rule 1 — .showModal() puts the dialog in the :modal state (top layer)', async ({page}) => {
  await open(page);
  const isModal = await page.locator('#dialog').evaluate((el) => el.matches(':modal'));
  expect(isModal).toBe(true);
});

test('rule 11 — focus moves into the dialog on open', async ({page}) => {
  await open(page);
  const focusInside = await page.evaluate(() =>
    document.getElementById('dialog').contains(document.activeElement),
  );
  expect(focusInside).toBe(true);
});

test('rule 12 — focus is trapped within the dialog while open (never reaches background controls)', async ({page}) => {
  await open(page);
  // Native <dialog> cycles focus through its own focusables and, at the wrap
  // boundary, transiently through <body> — it never reaches a background
  // control. So the faithful assertion is: Tabbing (and Shift+Tabbing) far past
  // the dialog's focusable count never focuses an outside interactive element,
  // and does cycle through the dialog's own controls.
  const seen = new Set();
  const collect = async () => {
    seen.add(await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName || ''));
  };
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press('Tab');
    await collect();
  }
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press('Shift+Tab');
    await collect();
  }
  // Background interactive controls are never focused — focus cannot escape.
  expect(seen.has('background-btn')).toBe(false);
  expect(seen.has('open-btn')).toBe(false);
  // The dialog's own controls are cycled through — the trap keeps focus looping.
  expect(seen.has('dialog-input')).toBe(true);
  expect(seen.has('close-btn')).toBe(true);
});

test('rule 13 — Escape closes the dialog', async ({page}) => {
  await open(page);
  await page.keyboard.press('Escape');
  await expect(page.locator('#dialog')).not.toHaveJSProperty('open', true);
});

test('rule 14 / 26 — focus returns to the invoking element on close (close button and Escape)', async ({page}) => {
  // Close-button path.
  await open(page);
  await page.locator('#close-btn').click();
  expect(await page.evaluate(() => document.activeElement?.id)).toBe('open-btn');

  // Escape path.
  await open(page);
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.activeElement?.id)).toBe('open-btn');
});

test('rule 15 / 21 — background content is not reachable while open (independently of aria-modal)', async ({page}) => {
  await open(page);
  // Programmatically attempting to focus a background control must not land there.
  await page.evaluate(() => document.getElementById('background-btn').focus());
  const onBackground = await page.evaluate(
    () => document.activeElement?.id === 'background-btn',
  );
  expect(onBackground).toBe(false);
});

test('rule 16 — body scroll is prevented while open', async ({page}) => {
  await open(page);
  const before = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 600);
  await page.keyboard.press('End');
  const after = await page.evaluate(() => window.scrollY);
  expect(after).toBe(before);
});

test('rule 4 — aria-labelledby references a visible title element', async ({page}) => {
  await open(page);
  const id = await page.locator('#dialog').getAttribute('aria-labelledby');
  expect(id).toBeTruthy();
  await expect(page.locator(`#${id}`)).toBeVisible();
});

test('rule 8 — a visible close control with an accessible name is present', async ({page}) => {
  await open(page);
  const close = page.locator('#close-btn');
  await expect(close).toBeVisible();
  // Accessible name comes through as the button's aria-label.
  await expect(close).toHaveAttribute('aria-label', /close/i);
});

test('rule 23 — the open dialog is the topmost hit-testable element (not obscured)', async ({page}) => {
  await open(page);
  const topmostIsDialog = await page.locator('#dialog').evaluate((el) => {
    const r = el.getBoundingClientRect();
    const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    return el.contains(hit);
  });
  expect(topmostIsDialog).toBe(true);
});

test('rule 27 / 6 — at a 320px viewport the dialog reflows without horizontal scroll', async ({page}) => {
  await page.setViewportSize({width: 320, height: 640});
  await open(page);
  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflows).toBe(false);
  const width = await page.locator('#dialog').evaluate((el) => el.getBoundingClientRect().width);
  expect(width).toBeLessThanOrEqual(320);
});
