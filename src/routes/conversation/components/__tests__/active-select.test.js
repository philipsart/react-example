import React from 'react';
import { shallow } from 'enzyme';

import ActiveSelect from '../active-select';

describe('ConversationActiveSelect', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ActiveSelect />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
