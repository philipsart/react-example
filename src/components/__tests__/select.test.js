import React from 'react';
import { shallow } from 'enzyme';

import CustomSelect from '../select';

describe('CustomSelect', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomSelect
        options={[]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
