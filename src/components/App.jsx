import React, { Component } from "react";
import { Title } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    
    return <div>
          <p>Please leave feedback</p>
          <button type="button">GOOD</button>
          <p>Statistics</p>
          <ul>
            <li>Good:0</li>
          </ul>
      </div>;
  }
}

