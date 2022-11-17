import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { isSession: true, timerSecond: 0 };
  }
  render() {
    return (
      <section>
        <section className="timer-container">
          <h3>{this.state.isSession === true ? "Session" : "Break"}</h3>
          <span className="timer">{this.props.timerMinute}</span>
          <span className="timer">:</span>
          <span className="timer">
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerMinute < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </section>
        <section className="timer-actions">
          <button>Play</button>
          <button>Stop</button>
          <button>Refresh</button>
        </section>
      </section>
    );
  }
}

export default Timer;
