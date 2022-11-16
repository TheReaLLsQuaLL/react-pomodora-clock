import "./App.css";
import React from "react";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { breakLength: 5, sessionLength: 25, timerMinute: 25 };
  }
  render() {
    return (
      <main>
        <h1>Pomodora Clock</h1>
        <section className="interval-main-container">
          <BreakInterval breakInterval={this.state.breakLength} />
          <SessionLength sessionLength={this.state.sessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;
