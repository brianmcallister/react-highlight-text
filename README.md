# @brianmcallister/react-highlight-text

<!-- [![codecov](https://codecov.io/gh/brianmcallister/highlight-text/branch/master/graph/badge.svg)](https://codecov.io/gh/brianmcallister/highlight-text) [![CircleCI](https://circleci.com/gh/brianmcallister/highlight-text.svg?style=svg)](https://circleci.com/gh/brianmcallister/highlight-text)  -->

[![npm version](https://badge.fury.io/js/%40brianmcallister%2Freact-highlight-text.svg)](https://badge.fury.io/js/%40brianmcallister%2Freact-highlight-text)

`react-highlight-text` is a React component that works with [`highlight-text`](https://github.com/brianmcallister/highlight-text).

## Demo

Check out the hosted demo right here: [https://react-highlight-text.netlify.com/](https://react-highlight-text.netlify.com/)

## Installation

```sh
npm install @brianmcallister/react-highlight-text
```

## API

### `HighlightText`

This is the default export. Use this React component to highlight words in text.

```js
interface Props {
  text: string;
  words: string[];
}
```

#### Example

```js
import HighlightText from '@brianmcallister/react-highlight-text';

const MyComponent = () => (
  <HighlightText
    text="Hello world! I'm highlighted!"
    words={['world', 'highlighted']}
  />
);
```
