import React from 'react';
import CustomSelect from '../../../components/select';

const activeOptions = [{
  value: 'low',
}, {
  value: 'medium',
}, {
  value: 'high',
}];

const activeOptionLabels = {
  low: {
    primary: 'Couch Potato',
    secondary: 'She enjoyes a long snooze over a run at the park',
  },
  medium: {
    primary: 'Moderate',
    secondary: 'She gets some good exercise about 3x a week',
  },
  high: {
    primary: 'Other',
    secondary: 'She gets very much exercise about 7x a week',
  },
};

class ActiveSelect extends React.Component {
  renderOption(option) {
    const labelData = activeOptionLabels[option.value];
    if (!labelData) {
      return null;
    }

    const { primary, secondary } = labelData;
    return (
      <React.Fragment>
        <p className="option__label">{primary}</p>
        <p className="option__label--secondary">{secondary}</p>
      </React.Fragment>
    );
  }

  render() {
    return (
      <CustomSelect
        options={activeOptions}
        renderOption={this.renderOption}
        {...this.props}
      />
    );
  }
}

export default ActiveSelect;
