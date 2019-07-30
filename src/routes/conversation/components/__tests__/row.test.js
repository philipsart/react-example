import React from 'react';
import { shallow } from 'enzyme';

import Row from '../row';

describe('ConversationRow', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Row
        data={{}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
