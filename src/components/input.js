import React from 'react';
import PropTypes from 'prop-types';

class CustomInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    this.setState({ value: '' }, () => {
      onSubmit(value);
    });
  }

  render() {
    const { onSubmit, ...otherProps } = this.props;
    const { value } = this.state;

    const canSubmit = !!value;
    let inputClassName = 'custom-input';
    if (canSubmit) {
      inputClassName = `${inputClassName} submittable`;
    }

    return (
      <div className={inputClassName}>
        <input
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          {...otherProps}
        />
        <button type="button" onClick={this.handleSubmit}>
          <img src="/images/submit.jpg" alt="submit" />
        </button>
      </div>
    );
  }
}

CustomInput.propTypes = {
  onSubmit: PropTypes.func,
};

CustomInput.defaultProps = {
  onSubmit: () => null,
};

export default CustomInput;
