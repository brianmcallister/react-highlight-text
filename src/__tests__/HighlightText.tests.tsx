import React from 'react';
import { mount } from 'enzyme';

import HighlightText from '../HighlightText';

describe('<HighlightText />', () => {
  it('should render without errors', () => {
    const wrapper = mount(<HighlightText text="test" words={['es']} />);

    expect(wrapper).toBeDefined();
  });

  it('should accept a className prop', () => {
    const wrapper = mount(<HighlightText className="test-test-test" text="test" words={['es']} />);

    expect(wrapper.hasClass('test-test-test')).toBe(true);
  });

  it('should render a mark tag with the correct content', () => {
    const wrapper = mount(<HighlightText text="test" words={['es']} />);
    const mark = wrapper.render().find('mark');

    expect(mark.length).toBe(1);
    expect(mark.text()).toStrictEqual('es');
  });
});
