# Stencil Starter

A minimal reproduction monorepo for testing Stencil components.

## Versions

- `@stencil/core`: latest
- `jest`: `^29.7.0`
- `puppeteer`: `^24.3.0`

## Setup

```bash
# Install dependencies
pnpm install

# Run the development app, server `dist` output
pnpm start 
# Or load the `dist-custom-elements` output
pnpm start:custom-elements 

# Build the components
pnpm build
```

Note: Puppeteer cannot run within CodeSandbox; if you want to demonstrate e2e tests, please fork this repo in Github.