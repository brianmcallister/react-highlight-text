# Changelog

## 2.0.0

### Breaking changes

- `text` is treated as plain text, so it's safe to pass user input. Version 1 parsed it as HTML. Add the new `html` prop to highlight HTML you trust.
- The component renders a single element instead of a `div` inside a `div`.
- React is a peer dependency (`>=18`) instead of a dependency on React 16.
- The package has an `exports` map, so deep imports from `dist/` no longer work.

### Fixes

- Fresh installs failed with "Cannot find module '@brianmcallister/highlight-text/dist/browser'", because highlight-text 2.0.4 removed that file. This version depends on highlight-text 3.
- Listing React as a dependency installed a second copy of React in apps on React 17 or later, which breaks hooks.
- Highlighting gets every fix in highlight-text 3, including correct results when matches overlap.

### Other changes

- Plain text is highlighted with React elements instead of `dangerouslySetInnerHTML`, so it works in server rendering.
- New `as` prop to choose the rendered element, and other props such as `id` and `style` are passed through.
- Ships ES modules and CommonJS, with TypeScript types for both. Built with tsup and tested with Vitest. CI runs on GitHub Actions, and releases are published from GitHub with npm provenance.
