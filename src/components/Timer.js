import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { isSession: true, timerSecond: 0, intervalId: 0 };
    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleInterval(this.props.breakInterval);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.props.sessionLength);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({ timerSecond: 59 });
        }

        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  stop() {
    clearInterval(this.state.intervalId);
    this.props.onPlayTimer(false);
  }

  reset() {
    this.stop();
    this.props.reset();
    this.props.onPlayTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
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
          <button
            disabled={this.props.isPlay === true ? "disabled" : ""}
            onClick={this.play}
          >
            Play
          </button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </section>
    );
  }
}

export default Timer;
