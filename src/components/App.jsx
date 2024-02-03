import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = event => {
    const actualState = this.state;
    const buttonText = event.target.innerHTML;

    this.setState({
      [buttonText.toLowerCase()]: actualState[buttonText.toLowerCase()] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.countTotalFeedback();

    if (totalCount > 0) {
      return Math.floor((good / totalCount) * 100);
    }

    return 0;
  };

  render() {
    const actualState = this.state;
    const { good, neutral, bad } = actualState;
    return (
      <>
        <MainHeading>Feedback App</MainHeading>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(actualState)}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
