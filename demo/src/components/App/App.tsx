import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';

import HighlightText from '../HighlightText';
import LogoIcon from '../LogoIcon';
import theme from './theme';

import './_app.scss';

/**
 * Example code.
 * @private
 */
const CODE_STRING = `import HighlightText from '@brianmcallister/react-highlight-text';

const MyComponent = () => (
  <HighlightText
    text="Hello world! I'm highlighted!"
    words={['world', 'highlighted']}
  />
);
`;

/**
 * Base CSS component.
 * @private
 */
const baseClass = 'app';

/**
 * App component.
 */
export default () => (
  <div className={baseClass}>
    <header className={`${baseClass}__header`}>
      <LogoIcon />

      <a className={`${baseClass}__header-link`} href="https://www.brianmcallister.com">
        Brian Wm. McAllister
      </a>

      <div className={`${baseClass}__header-links`}>
        <a href="https://github.com/brianmcallister/react-highlight-text">GitHub</a>
        <a href="https://npmjs.com/package/@brianmcallister/react-highlight-text">npm</a>
      </div>
    </header>

    <div className={`${baseClass}__content`}>
      <HighlightText text="Hello world! I'm highlighted!" words={['world', 'highlighted']} />

      <SyntaxHighlighter className={`${baseClass}__code`} language="javascript" style={theme}>
        {CODE_STRING}
      </SyntaxHighlighter>
    </div>
  </div>
);
