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
Robot tests are in the `tests/` folder (for example `test.robot`).

Basic run (from repository root):

```bash
robot tests/test.robot
```

Recommended: run inside a Python virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install robotframework
```

Run and save outputs to a results directory:

```bash
robot --outputdir test-results --log test-results/log.html --report test-results/report.html tests/test.robot
```

Run a single test case or test by name (use `--test` / `-t`):

```bash
robot --outputdir test-results --test "Login Test" tests/test.robot
```

Run tests by tag or exclude tags:

```bash
robot --outputdir test-results --include smoke tests/
robot --outputdir test-results --exclude slow tests/
```

Generate the standard Robot Framework artifacts (`output.xml`, `log.html`, `report.html`) in `test-results/` and open `test-results/log.html` in a browser to view results.

## Test artifacts & reports

- Playwright HTML report: `playwright-report/index.html`
- Playwright traces: `results/browser/traces/`
- Robot Framework reports: `test-results/` or `report.html` / `log.html` produced by Robot