# @brianmcallister/react-highlight-text

[![codecov](https://codecov.io/gh/brianmcallister/react-highlight-text/branch/master/graph/badge.svg)](https://codecov.io/gh/brianmcallister/react-highlight-text) [![CircleCI](https://circleci.com/gh/brianmcallister/react-highlight-text.svg?style=svg)](https://circleci.com/gh/brianmcallister/react-highlight-text) [![npm version](https://img.shields.io/npm/v/@brianmcallister/react-highlight-text?label=version&color=%2354C536&logo=npm)](https://www.npmjs.com/package/@brianmcallister/react-highlight-text)

> React binding for @brianmcallister/highlight-text

`react-highlight-text` is a React component that integrates with [`highlight-text`](https://github.com/brianmcallister/highlight-text).

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
	- [`HighlightText`](#highlighttext)

## Demo

Hosted demo: [https://react-highlight-text.netlify.com/](https://react-highlight-text.netlify.com/)

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

```js
import HighlightText from '@brianmcallister/react-highlight-text';

const MyComponent = () => (
  <HighlightText
    text="Hello world! I'm highlighted!"
    words={['world', 'highlighted']}
  />
);
```

###### [⇡ Top](#table-of-contents)

## API

### `HighlightText`

This is the default export. Use this React component to highlight words in text.

```js
interface Props {
  text: string;
  words: string[];
}
```

###### [⇡ Top](#table-of-contents)
