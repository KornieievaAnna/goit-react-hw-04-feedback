import { useState } from 'react';
import { Feedback, Statistic, Section, Notification } from 'components/index';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const showFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
    return 0;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black',
        fontSize: '23',
        borderRadius: '5px',
        padding: '10px',
        backgroundImage: 'linear-gradient(270deg, #33353a 15%, #000 65%)',
        color: 'rgb(235, 229, 222)',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={showFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
export default App;
