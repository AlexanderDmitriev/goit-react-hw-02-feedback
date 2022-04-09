import React, { Component } from "react";
import { Title, Container } from "./App.styled";
import { FeedbackButton } from "./FeedbackButton";
import { StatisticsList } from "./StatisticsList";
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {

    return <Container>
              <Title>Please leave feedback</Title>
              <ul>
                  {Object.keys(this.state).map(feedbackName=> 
                  <FeedbackButton
                      key={feedbackName.valueOf()}
                      buttonName={feedbackName.valueOf().toUpperCase()}/>)}
              </ul>
              
              <Title>Statistics</Title>
              <ul>
                <li>Good:0</li>
              </ul>
          </Container>;
  }
}

FeedbackButton.propTypes={
  buttonName:PropTypes.string
}
