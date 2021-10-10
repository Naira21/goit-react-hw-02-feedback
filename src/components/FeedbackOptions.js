import PropTypes from "prop-types";

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.array.isRequired,
};
