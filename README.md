# Playwrite Tests

This repository contains end-to-end tests implemented with two frameworks:

- Playwright (TypeScript) for browser automation and UI tests.
- Robot Framework for keyword-driven acceptance tests.

## Requirements

- Node.js (16+ recommended) and npm
- Playwright (installed via npm)
- Python 3.8+ and `pip`
- Robot Framework (installed via pip)

## Install

Install Node dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

Install Robot Framework and any needed libraries:

```bash
pip install --user robotframework
```

## Playwright tests

Playwright test specs are located under the `tests/` folder (files like `*.spec.ts`).

Run all Playwright tests:

```bash
npx playwright test
```

Run a single spec or folder:

```bash
npx playwright test tests/anmelden.spec.ts
```

Open the Playwright HTML report (generated to `playwright-report/`):

```bash
npx playwright show-report
# or open playwright-report/index.html in a browser
```

Browser traces and artifacts are saved under `results/browser/traces/`.

## Robot Framework tests

Robot tests are in the `tests/` folder (file `test.robot`).

Run the Robot test file:

```bash
# from repository root
robot tests/test.robot
```

Robot output files (`output.xml`, `log.html`, `report.html`) are created in the working directory by default; check the `test-results/` directory for saved results.

## Test artifacts & reports

- Playwright HTML report: `playwright-report/index.html`
- Playwright traces: `results/browser/traces/`
- Robot Framework reports: `test-results/` or `report.html` / `log.html` produced by Robot