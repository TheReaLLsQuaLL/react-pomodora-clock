import React from "react";

const SessionLength = (props) => {
  return (
    <section>
      <button>Down</button>
      <p>{props.sessionLength}</p>
      <button>Up</button>
    </section>
  );
};

export default SessionLength;
