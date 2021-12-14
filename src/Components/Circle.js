import React from "react";
import { FaHandRock, FaHandPeace, FaHandPaper } from "react-icons/fa";
const Circle = ({ name, onClick }) => {
  return (
    <div className="circle" onClick={onClick}>
      {name}
      {name === "바위" && <FaHandRock color="rgb(46, 45, 48)" />}
      {name === "가위" && <FaHandPeace color="rgb(46, 45, 48)" />}
      {name === "보" && <FaHandPaper color="rgb(46, 45, 48)" />}
    </div>
  );
};

export default Circle;
