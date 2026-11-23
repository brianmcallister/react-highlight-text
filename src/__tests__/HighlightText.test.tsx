import type { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import HighlightTextDefault, { HighlightText } from '../index';

const render = (element: ReactElement) => renderToStaticMarkup(element);

describe('HighlightText', () => {
  it('is the default export', () => {
    expect(HighlightTextDefault).toBe(HighlightText);
  });

  it('wraps matches in mark elements', () => {
    expect(render(<HighlightText text="Hello world!" words={['world']} />)).toBe(
      '<div class="highlight-text" style="white-space:pre-wrap">Hello <mark>world</mark>!</div>',
    );
  });

  it('ignores case and keeps the original text', () => {
    expect(render(<HighlightText text="Hello World" words={['WORLD', 'hello']} />)).toContain(
      '<mark>Hello</mark> <mark>World</mark>',
    );
  });

  it('merges overlapping matches', () => {
    expect(render(<HighlightText text="xx odio yy odio" words={['odio', 'io']} />)).toContain(
      'xx <mark>odio</mark> yy <mark>odio</mark>',
    );
  });

  it('renders the text unchanged when nothing matches', () => {
    expect(render(<HighlightText text="Hello" words={[]} />)).toContain('>Hello</div>');
  });

  // Regression: text used to be parsed as HTML, so user input could inject markup.
  it('treats text as plain text by default', () => {
    expect(
      render(<HighlightText text="<img src=x onerror=alert(1)> cats" words={['cats']} />),
    ).toBe(
      '<div class="highlight-text" style="white-space:pre-wrap">&lt;img src=x onerror=alert(1)&gt; <mark>cats</mark></div>',
    );
  });

  it('highlights only the text content of HTML when html is set', () => {
    expect(
      render(<HighlightText html text='<a href="/cats">cats</a> and dogs' words={['cats']} />),
    ).toContain('<a href="/cats"><mark>cats</mark></a> and dogs');
  });

  it('adds a className after the base class', () => {
    expect(render(<HighlightText className="extra" text="a" words={[]} />)).toContain(
      'class="highlight-text extra"',
    );
  });

  it('renders a different element with as', () => {
    expect(render(<HighlightText as="span" text="a" words={[]} />)).toMatch(/^<span /);
  });

  it('passes other props through and merges style', () => {
    expect(
      render(
        <HighlightText id="x" aria-label="label" style={{ color: 'red' }} text="a" words={[]} />,
      ),
    ).toBe(
      '<div id="x" aria-label="label" class="highlight-text" style="white-space:pre-wrap;color:red">a</div>',
    );
  });
});
