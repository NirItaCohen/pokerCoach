import React, { useEffect, useState } from "react";
import questionsData from "../assets/qs/questions.json";
import EquityQS from "../views/EquityQS";
import PositionQS from "../views/PositionQS";
import TableQS from "../views/TableQS";

function Questions({ data }) {
  const [questions, setQuestions] = useState([]);
  const [currentQsNumber, setCurrentQsNumber] = useState(0);
  const [currentQs, setCurrentQs] = useState(null);

  useEffect(() => {
    setQuestions(questionsData.questions);
    generateQuestion(questions[currentQsNumber]);
  }, [currentQsNumber, questions]);

  const getQsTitle = () => {
    switch (data.subType) {
      case "hvh":
        return <h2>{data.questionType.toUpperCase()}: Hand VS Hand</h2>;
      case "hvr":
        return <h2>{data.questionType.toUpperCase()}: Hand VS Range</h2>;
      case "rvr":
        return <h2>{data.questionType.toUpperCase()}: Range VS Range</h2>;
    }
  };

  const generateQuestion = (qsData) => {
    if (qsData && qsData.questionType) {
      switch (qsData.questionType) {
        case "equity":
          return setCurrentQs(<EquityQS data={qsData} />);
        case "position":
          return setCurrentQs(<PositionQS data={qsData} />);
        case "table":
          return setCurrentQs(<TableQS data={qsData} />);
        default:
          return <h3>loading...</h3>;
      }
    }
  };

  const handleNextClick = () => {
    currentQsNumber < questions.length - 1 &&
      setCurrentQsNumber((prev) => prev + 1);
    generateQuestion(questions[currentQsNumber]);
  };

  const handlePrevClick = () => {
    currentQsNumber > 0 && setCurrentQsNumber((prev) => prev - 1);
    generateQuestion(questions[currentQsNumber]);
  };

  // i can pass this function
  const renderQuestion = () => {
    return currentQs ? currentQs : <h3>loading...</h3>;
  };

  return (
    <>
      <div className="mb-3">{currentQs > 0 && getQsTitle()}</div>
      <div className="bg-white rounded h-3/5 w-4/5 ">{renderQuestion()}</div>
      <div className="flex">
        <button className="m-2" onClick={handleNextClick}>
          Next
        </button>
        <button className="m-2" onClick={handlePrevClick}>
          Previous
        </button>
      </div>
    </>
  );
}

export default Questions;
