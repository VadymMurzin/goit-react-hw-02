export const Options = ({ onFeedbackClick, onResetClick, hasFeedback }) => {
    return (
      <div>
        <button onClick={() => onFeedbackClick('good')}>Good</button>
        <button onClick={() => onFeedbackClick('bad')}>Bad</button>
        <button onClick={() => onFeedbackClick('neutral')}>Neutral</button>
        {hasFeedback && <button onClick={onResetClick}>Reset</button>}
      </div>
    );
  };