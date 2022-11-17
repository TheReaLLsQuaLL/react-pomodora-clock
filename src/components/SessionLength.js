import React from "react";

const SessionLength = (props) => {
  function decreaseSessionCounter() {
    if (props.sessionLength === 1) {
      return;
    } else {
      props.decreaseSession();
    }
  }

  function increaseSessionCounter() {
    if (props.sessionLength === 60) {
      return;
    } else {
      props.increaseSession();
    }
  }

  return (
    <section>
      <h3 clas>Session Length</h3>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseSessionCounter}
        >
          Down
        </button>
        <p className="interval-container-length">{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaseSessionCounter}
        >
          Up
        </button>
      </section>
    </section>
  );
};

export default SessionLength;
