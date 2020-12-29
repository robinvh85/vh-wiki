import React from 'react';
import { mount } from 'enzyme';

import SamplePage from 'pages/SamplePage';

describe('<SamplePage />', () => {
  let wrapper = mount(
      <SamplePage />
  );

  it('render correct text', () => {
    expect(wrapper.text()).toEqual('Sample Page');
  });
});
