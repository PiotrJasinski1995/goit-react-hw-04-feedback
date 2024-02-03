import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Styled.FeedbackOptionsListStyled>
        {options.map(option => (
          <li key={option}>
            <Styled.ButtonStyled onClick={onLeaveFeedback}>
              {option}
            </Styled.ButtonStyled>
          </li>
        ))}
      </Styled.FeedbackOptionsListStyled>
    );
  }
}

export default FeedbackOptions;
