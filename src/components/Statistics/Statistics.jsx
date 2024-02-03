import { Component } from 'react';
import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <ul>
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
            <li>
              <p>Total: {total}</p>
            </li>
            <li>
              <p>Positive feedback: {positivePercentage}%</p>
            </li>
          </ul>
        )}
      </>
    );
  }
}

export default Statistics;
