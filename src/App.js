import "./App.css";
import React from "react";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false,
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onPlayTimer = this.onPlayTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1,
      };
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return { timerMinute: prevState.timerMinute - 1 };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  }

  onReset() {
    this.setState({
      timerMinute: this.state.sessionLength,
    });
  }

  onPlayTimer(isPlay) {
    this.setState({
      isPlay: isPlay,
    });
  }

  render() {
    return (
      <main>
        <h1>Pomodora Clock</h1>
        <section className="interval-main-container">
          <BreakInterval
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
            isPlay={this.state.isPlay}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
            isPlay={this.state.isPlay}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          reset={this.onReset}
          onPlayTimer={this.onPlayTimer}
          isPlay={this.state.isPlay}
        />
      </main>
    );
  }
}

export default App;
