import HighlightText from '@brianmcallister/react-highlight-text';
import { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

import LogoIcon from '../LogoIcon';
import theme from './theme';

import './_app.scss';

// Only load the one language the demo shows, instead of all of them.
SyntaxHighlighter.registerLanguage('jsx', jsx);

const TEXT = "Hello world! I'm highlighted!";

/**
 * Base CSS component.
 * @private
 */
const baseClass = 'app';

/**
 * Split the input into words, ignoring extra spaces and commas.
 */
const parseWords = (value: string) => value.split(/[\s,]+/).filter(Boolean);

/**
 * App component.
 */
const App = () => {
  const [value, setValue] = useState('world, highlighted');
  const words = parseWords(value);
  const code = `import HighlightText from '@brianmcallister/react-highlight-text';

const MyComponent = () => (
  <HighlightText
    text="${TEXT}"
    words={[${words.map((word) => `'${word}'`).join(', ')}]}
  />
);
`;

  return (
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
        <HighlightText text={TEXT} words={words} />

        <label className={`${baseClass}__words`}>
          Words to highlight
          <input value={value} onChange={(event) => setValue(event.target.value)} />
        </label>

        <SyntaxHighlighter className={`${baseClass}__code`} language="jsx" style={theme}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default App;
