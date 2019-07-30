import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from '../header';

describe('AppHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AppHeader />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
