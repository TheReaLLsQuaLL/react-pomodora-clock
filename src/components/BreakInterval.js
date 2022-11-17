import React from "react";

const BreakInterval = (props) => {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    } else {
      props.decreaseBreak();
    }
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    } else {
      props.increaseBreak();
    }
  }
  return (
    <section>
      <h3>Break Length</h3>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseCounter}
        >
          Down
        </button>
        <p className="interval-container-length">{props.breakInterval}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseCounter}
        >
          Up
        </button>
      </section>
    </section>
  );
};

export default BreakInterval;
