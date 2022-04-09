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
    console.log(this.state);
    return <Container>
              <Title>Please leave feedback</Title>
              <ul>
                  {Object.keys(this.state).map(feedbackName=> 
                  <FeedbackButton
                      key={feedbackName.valueOf().toUpperCase()}
                      buttonName={feedbackName.valueOf().toUpperCase()}/>)}
              </ul>
              
              <Title>Statistics</Title>
              <ul>
                {Object.keys(this.state).map(stat=>
                   <StatisticsList
                   key={stat.valueOf().toLowerCase()}
                   statName={stat.valueOf()}
                   value={stat}
                 />)}
                 {/* {this.state.map(stat=>
                   <StatisticsList
                   key={Object.keys(stat).valueOf().toLowerCase()}
                   statName={Object.keys(stat).valueOf()}
                   value={stat}
                 />)} */}
               
              </ul>
          </Container>;
  }
}

FeedbackButton.propTypes={
  buttonName:PropTypes.string
}

StatisticsList.propTypes={
  statName:PropTypes.string,
  value:PropTypes.number
}
