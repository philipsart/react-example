import React from 'react';
import { shallow } from 'enzyme';

import Allergies from '../allergies';

describe('ConversationAllergies', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Allergies />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
