import React from "react";
import EquityQS from "../views/EquityQS";

function Question({ data }) {
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

  const generateQuestion = () => {
    switch (data.questionType) {
      case "equity":
        return <EquityQS data={data} />;
      case "position":
        return <PositionQS data={data} />;
      case "table":
        return <TableQS data={data} />;
    }
  };

  return (
    <>
      <div className="mb-3">{getQsTitle()}</div>
      <div className="bg-white rounded h-3/5 w-4/5 ">{generateQuestion()}</div>
    </>
  );
}

export default Question;
