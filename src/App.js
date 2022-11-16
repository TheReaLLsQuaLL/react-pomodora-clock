import logo from "./logo.svg";
import "./App.css";
import React from "react";
import BreakInterval from "./components/BreakInterval";

class App extends React.Component {
  constructor() {
    super();
    this.state = { breakLength: 5, sessionLength: 25 };
  }
  render() {
    return (
      <main>
        <h1>Pomodora Clock</h1>
        <BreakInterval breakInterval={this.state.breakLength} />
      </main>
    );
  }
}

export default App;
