// import React, { useState } from "react";

// const Interval = () => {
//   const [hand, setHand] = useState(0);
//   let timerId = setInterval(() => setHand((prev) => prev + 1), 20000);
//   console.log(timerId);
//   return <div>{hand}</div>;
// };

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FaHandRock, FaHandPeace, FaHandPaper } from "react-icons/fa";
function Interval(props) {
  const count = props.hand;
  const setCount = props.setHand;
  //   const [count, setCount] = useState(0);
  const savedCallback = useRef();

  function callback() {
    if (count === 2) {
      setCount(0);
    } else setCount(count + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="interval">
      {count === 0 && <FaHandRock size="100" color="rgb(46, 45, 48)" />}
      {count === 1 && <FaHandPeace size="100" color="rgb(46, 45, 48)" />}
      {count === 2 && <FaHandPaper size="100" color="rgb(46, 45, 48)" />}
    </h1>
  );
}
export default Interval;
