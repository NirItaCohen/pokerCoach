import React, { useEffect, useState } from "react";
import questions from "../assets/qs/questions.json";
import Question from "../components/Question";
function Trainer() {
  const [qs, setQs] = useState([]);

  useEffect(() => {
    setQs(questions);
  }, []);

  return (
    <div>
      <Question data={questions} />
    </div>
  );
}

export default Trainer;
