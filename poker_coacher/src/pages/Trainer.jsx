import React, { useEffect, useState } from "react";
import questions from "../assets/qs/questions.json";
import Question from "../components/Question";
function Trainer() {
  const [qs, setQs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setQs(questions.questions);
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-slate-200 w-75 h-full">
      <h3></h3>
      {!isLoading ? <Question data={qs[0]} /> : <h3>loading...</h3>}
    </div>
  );
}

export default Trainer;
