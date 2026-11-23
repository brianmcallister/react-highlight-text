import { getBoundaries, highlightNode } from '@brianmcallister/highlight-text';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface HighlightTextProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'children' | 'dangerouslySetInnerHTML'
> {
  /** The element to render. Defaults to `div`. */
  as?: ElementType;
  /**
   * Treat `text` as HTML, and highlight only its text content. The HTML is inserted into the page
   * as is, so only use this with HTML you trust. Needs a DOM, so it doesn't work in server
   * rendering.
   */
  html?: boolean;
  /** The text to highlight. Plain text, unless `html` is set. */
  text: string;
  /** The words to highlight. Matching ignores case. */
  words: readonly string[];
}

const BASE_CLASS = 'highlight-text';

/**
 * Split `text` into strings and `<mark>` elements.
 */
const markText = (text: string, words: readonly string[]) => {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const [start, end] of getBoundaries(text, words)) {
    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(<mark key={start}>{text.slice(start, end)}</mark>);
    cursor = end;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
};

/**
 * Render `text` with every occurrence of `words` wrapped in a `<mark>` element.
 */
export const HighlightText = ({
  as: Component = 'div',
  className,
  html = false,
  style,
  text,
  words,
  ...props
}: HighlightTextProps) => {
  const shared = {
    ...props,
    className: className ? `${BASE_CLASS} ${className}` : BASE_CLASS,
    style: { whiteSpace: 'pre-wrap' as const, ...style },
  };

  if (html) {
    return (
      <Component {...shared} dangerouslySetInnerHTML={{ __html: highlightNode(text, words) }} />
    );
  }

  return <Component {...shared}>{markText(text, words)}</Component>;
};
