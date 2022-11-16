import React from "react";

const BreakInterval = (props) => {
  return (
    <section>
      <button>Down</button>
      <p>{props.breakInterval}</p>
      <button>Up</button>
    </section>
  );
};

export default BreakInterval;
