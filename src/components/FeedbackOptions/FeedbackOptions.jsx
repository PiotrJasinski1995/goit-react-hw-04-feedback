import PropTypes from 'prop-types';
import { FeedbackOptionsListStyled, ButtonStyled } from './styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsListStyled>
      {options.map(option => (
        <li key={option}>
          <ButtonStyled onClick={onLeaveFeedback}>{option}</ButtonStyled>
        </li>
      ))}
    </FeedbackOptionsListStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
