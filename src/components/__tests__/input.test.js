import React from 'react';
import { shallow } from 'enzyme';

import CustomInput from '../input';

describe('CustomInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomInput />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
