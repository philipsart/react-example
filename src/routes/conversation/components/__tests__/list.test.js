import React from 'react';
import { shallow } from 'enzyme';

import List from '../list';

describe('ConversationList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <List
        data={[]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
