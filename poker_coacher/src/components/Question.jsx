import React from "react";
import EquityQS from "../views/EquityQS";

function Question({ data }) {
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
      <h2>question</h2>
      {generateQuestion()}
    </>
  );
}

export default Question;
