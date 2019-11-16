import highlightText from '@brianmcallister/highlight-text/dist/browser';
import React from 'react';

interface Props {
  text: string;
  words: string[];
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'highlight-text';

/**
 * HighlightText component.
 */
export default ({ text, words }: Props) => {
  return (
    <div className={baseClass}>
      <div
        style={{ whiteSpace: 'pre-wrap' }}
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: highlightText(text, words) }}
      />
    </div>
  );
};
