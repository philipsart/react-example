import React from 'react';
import PropTypes from 'prop-types';

class CustomSelect extends React.Component {
  renderOption(option) {
    const { value, renderOption, onSelect } = this.props;

    const selected = option.value === value;
    let optionClassName = 'option';
    if (selected) {
      optionClassName = `${optionClassName} selected`;
    }
    return (
      <div
        key={option.value}
        role="presentation"
        className={optionClassName}
        onClick={() => onSelect(option.value)}
      >
        {renderOption ? renderOption(option) : (
          <p className="option__label">{option.label}</p>
        )}
      </div>
    );
  }

  render() {
    const { options } = this.props;

    return (
      <div className="custom-select">
        {options.map(option => this.renderOption(option))}
      </div>
    );
  }
}

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any,
  renderOption: PropTypes.func,
  onSelect: PropTypes.func,
};

CustomSelect.defaultProps = {
  onSelect: () => null,
};

export default CustomSelect;
