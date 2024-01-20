import {useState} from 'react';
import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';

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


  return (
    <div>
      <Description/>
      <Options onFeedbackClick={handleFeedbackClick}/>
      <Feedback feedbackTypes={feedbackTypes}/>
    </div>
  );
}
