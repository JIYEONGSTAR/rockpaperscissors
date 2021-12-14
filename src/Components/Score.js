import React from "react";

const Score = ({ name, score, color }) => {
  return (
    <h1 className={color}>
      {name}
      <br />
      {score}점
    </h1>
  );
};

export default Score;
