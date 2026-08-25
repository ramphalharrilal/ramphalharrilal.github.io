# RH Tech Support

[![CI](https://github.com/ramphalharrilal/ramphalharrilal.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/ramphalharrilal/ramphalharrilal.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/ramphalharrilal/ramphalharrilal.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ramphalharrilal/ramphalharrilal.github.io/actions/workflows/deploy.yml)

**Websites that work.** RH Tech Support is the business-focused portfolio of Ramphal Harrilal, showing professional web design, digital support, customer-protection tools, support systems, QA, marketing, and real client work across the United States, Trinidad and Tobago, and worldwide.

## Live website

[ramphalharrilal.github.io](https://ramphalharrilal.github.io)

## Featured work

- [SiteCare website care monitor](https://ramphalharrilal.github.io/website-care-monitor/) — turns availability, speed, certificate, and inquiry-path checks into clear business priorities
- RelayDesk privacy-aware WhatsApp support operations
- Java 17 hardware inventory operations dashboard
- Manual QA portfolio with Gherkin and BDD scenarios
- IT service desk operations and PowerShell diagnostics
- Real-world website, communications, marketing, and client work

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The production build is a static Next.js export. GitHub Actions verifies every change and deploys the generated `out` directory to GitHub Pages.
