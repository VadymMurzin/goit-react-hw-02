import {useState} from 'react';
import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';
import { Notification } from './Notification';

export default function App() {

  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedbackClick = (type) => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const handleResetClick = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <div>
      <Description/>
      <Options onFeedbackClick={handleFeedbackClick} onResetClick={handleResetClick} hasFeedback={totalFeedback > 0}/>
      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
