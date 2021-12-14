import React, { useState } from "react";
import "./App.css";
import Score from "./Components/Score";
import Interval from "./Components/Interval";
import Circle from "./Components/Circle";
function App() {
  const [hand, setHand] = useState(0);
  const [gamerScore, setGamerScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const handleClick = (what) => {
    // console.log(typeof what);
    // console.log(typeof hand);
    console.log(what + "user");
    console.log(hand + "gamer");
    if (what === hand) {
      alert("비겼습니다");
    } else if (hand === 0) {
      what === 2 ? userWin() : gamerWin();
      // what < hand ?  : gamerWin();
    } else if (hand === 1) {
      what === 0 ? userWin() : gamerWin();
      // hand === 0 && ;
    } else if (hand === 2) {
      what === 1 ? userWin() : gamerWin();
    }
  };
  const gamerWin = () => {
    setGamerScore(gamerScore + 1);
    alert("컴퓨터 승");
  };
  const userWin = () => {
    setUserScore(userScore + 1);
    alert("나 승");
  };
  const Refresh = () => {
    setUserScore(0);
    setGamerScore(0);
  };
  return (
    <div className="App">
      <h1>
        <span>가위바위보</span>게임을 해봅시다
      </h1>
      <div className="middleBox">
        <Score name="gamer" score={gamerScore} color="red" />
        <Interval hand={hand} setHand={setHand} />
        <Score name="user" score={userScore} />
      </div>
      <div className="bottomBox">
        <Circle name="바위" onClick={() => handleClick(0)} />
        <Circle name="가위" onClick={() => handleClick(1)} />
        <Circle name="보" onClick={() => handleClick(2)} />
        <Circle name="Refresh" onClick={Refresh} />
      </div>
    </div>
  );
}

export default App;
