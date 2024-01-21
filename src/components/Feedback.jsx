export const Feedback = ({feedbackTypes, totalFeedback}) => {
    return (
      <div>
        <p>Good:{feedbackTypes.good}</p>
        <p>Neutral:{feedbackTypes.neutral}</p>
        <p>Bad:{feedbackTypes.bad}</p>
        <p>Total:{totalFeedback}</p>
        <p>Positive:</p>
      </div>
    );
  };