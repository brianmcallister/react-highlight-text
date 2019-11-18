import classnames from 'classnames';
import highlightText from '@brianmcallister/highlight-text/dist/browser';
import React from 'react';

interface Props {
  className?: string;
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
export default ({ className, text, words }: Props) => {
  return (
    <div
      className={classnames(baseClass, className)}
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: highlightText(text, words) }}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
};
