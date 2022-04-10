import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Title, Container } from "./App.styled";
import { FeedbackButton } from "./FeedbackButton";
import {Statistics} from './Statistics ';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleAddFeedback = (e) => {
    const eventName = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [eventName]: prevState[eventName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum,count)=>{return sum+count},0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good>0? (this.state.good/this.countTotalFeedback()).toFixed(2):0;
  };

  render() {
  
    return <Container>
              <Title>Please leave feedback</Title>
              <ul>
                  {Object.keys(this.state).map(feedbackName=> 
                  <FeedbackButton
                      key={feedbackName.valueOf().toUpperCase()}
                      buttonName={feedbackName.valueOf().toUpperCase()}
                      onIncrement={this.handleAddFeedback}
                      />
                      )}
              </ul>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
          </Container>;
  }
}

FeedbackButton.propTypes={
  buttonName:PropTypes.string
}


