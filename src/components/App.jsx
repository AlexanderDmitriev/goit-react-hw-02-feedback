import React, { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return <div>
          <p>Please leave feedback</p>
      </div>;
  }
}
