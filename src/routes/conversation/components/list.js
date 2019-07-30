import React from 'react';
import PropTypes from 'prop-types';

import ConversationRow from './row';
import { CustomInput } from '../../../components';
import { InputTypes } from '../../../constants';

const ConversationList = ({
  data,
  values,
  onSubmitValue,
}) => {
  let inputVisible = false;
  if (data.length > 0) {
    inputVisible = data[data.length - 1].type === InputTypes.TEXT;
  }

  return (
    <div className="conversation-list">
      <div className="conversation-list__content">
        {data.map(conversation => (
          <ConversationRow
            key={conversation.key}
            data={conversation}
            values={values}
            onSubmitValue={onSubmitValue}
          />
        ))}
      </div>
      {inputVisible && (
        <CustomInput
          autoFocus
          onSubmit={onSubmitValue}
        />
      )}
    </div>
  );
};

ConversationList.propTypes = {
  data: PropTypes.array.isRequired,
  values: PropTypes.object,
  onSubmitValue: PropTypes.func,
};

ConversationList.defaultProps = {
  values: {},
};

export default ConversationList;
