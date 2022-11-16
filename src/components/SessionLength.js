import React from "react";

const SessionLength = (props) => {
  return (
    <section>
      <h3 clas>Session Length</h3>
      <section className="interval-container">
        <button>Down</button>
        <p className="interval-container-length">{props.sessionLength}</p>
        <button>Up</button>
      </section>
    </section>
  );
};

export default SessionLength;
