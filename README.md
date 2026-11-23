# @brianmcallister/react-highlight-text

[![CI](https://github.com/brianmcallister/react-highlight-text/actions/workflows/ci.yml/badge.svg)](https://github.com/brianmcallister/react-highlight-text/actions/workflows/ci.yml) [![npm version](https://img.shields.io/npm/v/@brianmcallister/react-highlight-text?label=version&color=%2354C536&logo=npm)](https://www.npmjs.com/package/@brianmcallister/react-highlight-text)

> Highlight words in text, in React

`react-highlight-text` is a React component that integrates with [`highlight-text`](https://github.com/brianmcallister/highlight-text).

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [`HighlightText`](#highlighttext)
- [Upgrading from 1.x](#upgrading-from-1x)

## Demo

Hosted demo: [https://brianmcallister.github.io/react-highlight-text/](https://brianmcallister.github.io/react-highlight-text/)

You can also run the demo locally. To get started:

```sh
git clone git@github.com:brianmcallister/react-highlight-text.git
cd react-highlight-text/demo
npm i
npm start
```

###### [⇡ Top](#table-of-contents)

## Installation

```sh
npm install @brianmcallister/react-highlight-text
```

###### [⇡ Top](#table-of-contents)

## Usage

```jsx
import HighlightText from '@brianmcallister/react-highlight-text';

const MyComponent = () => (
  <HighlightText text="Hello world! I'm highlighted!" words={['world', 'highlighted']} />
);
// <div class="highlight-text">Hello <mark>world</mark>! I'm <mark>highlighted</mark>!</div>
```

Matching ignores case, and overlapping matches are combined into a single `<mark>`. Works with React 18 and later, including server rendering.

###### [⇡ Top](#table-of-contents)

## API

### `HighlightText`

The default export, also available as a named export. Renders `text` with every occurrence of `words` wrapped in a `<mark>` element.

```ts
interface HighlightTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  words: readonly string[];
  as?: React.ElementType;
  html?: boolean;
}
```

- `text`: the text to highlight. It's treated as plain text, so it's safe to pass user input.
- `words`: the words to highlight.
- `as`: the element to render. Defaults to `div`.
- `html`: treat `text` as HTML and highlight only its text content, leaving tags and attributes alone. The HTML is inserted as is, so only use this with HTML you trust. It needs a DOM, so it doesn't work in server rendering.

Any other props, like `className`, `id` or `style`, are passed to the rendered element. It always has the `highlight-text` class and `white-space: pre-wrap`, so line breaks in `text` are kept.

###### [⇡ Top](#table-of-contents)

## Upgrading from 1.x

- `text` is plain text by default. Version 1 parsed it as HTML, so user input could inject markup. If you're passing HTML you trust, add the `html` prop.
- The component renders one element, instead of a `div` inside a `div`.
- React is a peer dependency, so the component uses your app's copy of React. Version 1 listed React 16 as a dependency, which installed a second copy in apps on newer versions.
- Version 1 broke on fresh installs, because `@brianmcallister/highlight-text` 2.0.4 removed the file it imported. Version 2 uses `@brianmcallister/highlight-text` 3.

See the [changelog](CHANGELOG.md) for everything else.

###### [⇡ Top](#table-of-contents)
