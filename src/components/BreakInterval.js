import React from "react";

const BreakInterval = (props) => {
  return (
    <section>
      <h3>Break Length</h3>
      <section className="interval-container">
        <button>Down</button>
        <p className="interval-container-length">{props.breakInterval}</p>
        <button>Up</button>
      </section>
    </section>
  );
};

export default BreakInterval;
