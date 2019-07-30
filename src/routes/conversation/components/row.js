import React from 'react';
import PropTypes from 'prop-types';

import { InputTypes, CustomInputTypes } from '../../../constants';
import CustomSelect from '../../../components/select';
import ActiveSelect from './active-select';
import Allergies from './allergies';
import { replaceCurlyBraces } from '../../../utils';

class ConversationRow extends React.Component { //eslint-disable-line
  componentDidMount() {
    if (this.el) {
      this.el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const { data, values, onSubmitValue } = this.props;
    const {
      text,
      image,
      secondary,
      type,
      subtype,
      options,
      value,
    } = data;

    const actualText = replaceCurlyBraces(text, values);

    let rowClassName = 'conversation-row';
    if (secondary) {
      rowClassName = `${rowClassName} conversation-row--secondary`;
    }

    let contentNode = null;
    if (type === InputTypes.TEXT) {
      contentNode = !!value && (
        <div className="content content--text">
          <p className="content__value">{value}</p>
        </div>
      );
    } else if (type === InputTypes.SELECT) {
      contentNode = (
        <div className="content content--select">
          <CustomSelect
            options={options}
            value={value}
            onSelect={onSubmitValue}
          />
        </div>
      );
    } else if (type === InputTypes.CUSTOM) {
      if (subtype === CustomInputTypes.ACTIVE) {
        contentNode = (
          <div className="content">
            <ActiveSelect
              value={value}
              onSelect={onSubmitValue}
            />
          </div>
        );
      } else if (subtype === CustomInputTypes.ALLERGIES) {
        if (!values['dog.has_allergies']) {
          return null;
        }
        contentNode = (
          <div className="content">
            <Allergies />
          </div>
        );
      }
    }

    return (
      <div
        className={rowClassName}
        ref={(ref) => {
          this.el = ref;
        }}
      >
        <div className="message">
          <div className="avatar-wrapper">
            <div className="avatar" />
          </div>
          <div className="message__content">
            {!!text && <p>{actualText}</p>}
            {!!image && <img src={image} alt="pet" />}
          </div>
        </div>
        {contentNode}
      </div>
    );
  }
}

ConversationRow.propTypes = {
  data: PropTypes.object.isRequired,
  values: PropTypes.object,
  onSubmitValue: PropTypes.func,
};

ConversationRow.defaultProps = {
  values: {},
};

export default ConversationRow;
