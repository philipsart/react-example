import React from 'react';
import { shallow } from 'enzyme';

import Sider from '../sider';

describe('ConversationSider', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Sider />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
