import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Title, Container, ContentList } from "./App.styled";
import { FeedbackButton } from "./FeedbackButton";
import { StatisticsList } from "./StatisticsList";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    const totalFeedbacks=Object.values(this.state).reduce((sum,count)=>{return sum+count},0);
    const goodFeedback=this.state.good>0? this.state.good/totalFeedbacks:0;
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
                  <StatisticsList options={this.state} />
              </ul>
              <ul>
                <ContentList>
                  <p>Total: {totalFeedbacks}</p>
                </ContentList>
                <ContentList>
                  <p>Positive feedback: {goodFeedback*100} %</p>
                </ContentList>
              </ul>
          </Container>;
  }
}

FeedbackButton.propTypes={
  buttonName:PropTypes.string
}

StatisticsList.propTypes={
  options:PropTypes.object,
}
