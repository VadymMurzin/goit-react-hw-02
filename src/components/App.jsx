import {useState, useEffect} from 'react';
import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';
import { Notification } from './Notification';

export default function App() {

  const initialFeedbackTypes = JSON.parse(localStorage.getItem('feedbackTypes')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);

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

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = totalFeedback > 0
    ? Math.round((feedbackTypes.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description/>
      <Options onFeedbackClick={handleFeedbackClick} onResetClick={handleResetClick} hasFeedback={totalFeedback > 0}/>
      {totalFeedback > 0 ? (
        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positivePercentage={positivePercentage}/>
      ) : (
        <Notification />
      )}
    </div>
  );
}
