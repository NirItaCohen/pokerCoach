import React, { useState } from "react";

import Questions from "../components/Questions";
function Trainer() {
  const [isStartTrain, setIsStartTrain] = useState(true);

  const handleStartTrain = () => {
    setIsStartTrain((prev) => !prev);
  };

  const startBtn = () => {
    return (
      <button onClick={handleStartTrain}>
        {"click start train".toUpperCase()}
      </button>
    );
  };

  return (
    <div className="bg-slate-200 w-full h-full flex flex-col items-center">
      {isStartTrain ? <Questions /> : startBtn()}
    </div>
  );
}

export default Trainer;
