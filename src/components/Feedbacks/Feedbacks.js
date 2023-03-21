import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={css.button__list}>
    {Object.keys(options).map(option => (
      <button
        type="button"
        key={option}
        name={option}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
