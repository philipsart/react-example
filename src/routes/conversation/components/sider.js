import React from 'react';
import PropTypes from 'prop-types';

class ConversationSider extends React.Component {
  isHumanProfile() {
    const { step } = this.props;
    return step <= 4;
  }

  isPetProfile() {
    const { step } = this.props;
    return step > 4 && step < 10;
  }

  isPetDetails() {
    const { step } = this.props;
    return step >= 10;
  }

  render() {
    return (
      <div className="conversation-sider">
        <button type="button" className="btn btn--exit">EXIT</button>

        <h1>This is a fun headline.</h1>
        <p>Intro copy that will help users navigate this experience.</p>

        <div className="tabs">
          <p className={this.isHumanProfile() ? 'selected' : ''}>Human Profile</p>
          <p className={this.isPetProfile() ? 'selected' : ''}>Pet Profile</p>
          <p className={this.isPetDetails() ? 'selected' : ''}>Details</p>
        </div>
      </div>
    );
  }
}

ConversationSider.propTypes = {
  step: PropTypes.number,
};

ConversationSider.defaultProps = {
  step: 0,
};

export default ConversationSider;
