import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ConversationSider, ConversationList } from './components';
import { navigateNextStep, submitValue } from '../../actions';
import { CONVERSATION_TIMEOUT } from '../../constants';

class Conversation extends React.Component {
  componentDidMount() {
    const { navigateNextStep } = this.props;
    navigateNextStep();
  }

  componentDidUpdate(prevProps) {
    const { list, navigateNextStep } = this.props;
    if (prevProps.list.length !== list.length) {
      const lastItem = list[list.length - 1];
      if (!lastItem.type) {
        setTimeout(() => {
          navigateNextStep();
        }, CONVERSATION_TIMEOUT);
      }
    }
  }

  render() {
    const { list, values, submitValue } = this.props;

    return (
      <div className="route route--conversation">
        <ConversationSider
          step={list.length}
        />
        <ConversationList
          data={list}
          values={values}
          onSubmitValue={submitValue}
        />
      </div>
    );
  }
}

Conversation.propTypes = {
  list: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  navigateNextStep: PropTypes.func.isRequired,
  submitValue: PropTypes.func.isRequired,
};

Conversation.defaultProps = {
  //
};

const mapStateToProps = state => ({
  list: state.conversation.list,
  values: state.conversation.values,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateNextStep,
  submitValue,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
