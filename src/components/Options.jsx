export const Options = ({ onFeedbackClick }) => {
    return (
      <div>
        <button onClick={() => onFeedbackClick('good')}>Good</button>
        <button onClick={() => onFeedbackClick('bad')}>Bad</button>
        <button onClick={() => onFeedbackClick('neutral')}>Neutral</button>
      </div>
    );
  };