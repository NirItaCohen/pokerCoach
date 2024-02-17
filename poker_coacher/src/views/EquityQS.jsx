import { useEffect, useState } from "react";
import getCardImage from "../utils/getCardImages";

// TODO:
// Timer
// answer checker
// next prev qs

//TODO: 1. Check answer - True/False 2. Change button color according to answer 3. Render 'Next' button
// AnswersComp
const Answers = ({ answers }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (_e) => {
    setIsAnswered(true);
  };

  // ANSWER BUTTON
  const AnswerButton = ({ answer, handleAnswerClick }) => {
    const btnStyle = isAnswered
      ? answer.isCorrect
        ? "bg-green-400"
        : "bg-red-400"
      : "bg-blue-400 hover:bg-blue-600";

    return (
      <button
        value={answer.isCorrect}
        onClick={handleAnswerClick}
        className={`${btnStyle} text-white font-bold py-2 px-4 rounded`}
      >
        {answer.answer}
      </button>
    );
  };

  return answers.map((answer, i) => {
    return (
      <AnswerButton
        answer={answer}
        handleAnswerClick={handleAnswerClick}
        key={answer.id}
      />
    );
  });
};

function EquityQS({ data }) {
  const [svg, setSvg] = useState([]);

  useEffect(() => {
    loadImg();
  }, [data]);

  const loadImg = async () => {
    const cardsImgPaths = data.question.map(
      async (card) => await getCardImage(card)
    );
    const resolvedSvg = await Promise.all(cardsImgPaths);
    setSvg(resolvedSvg);
  };

  const displayCards = () => {
    return svg.length > 0 ? (
      svg.map((card, i) => {
        if (i === 1) {
          return (
            <div className="flex" key={i}>
              <img src={card} className="h-24 w-24" />
              <span className="text-3xl text-rose-400 tracking-wider">vs</span>
            </div>
          );
        }
        return <img src={card} key={i} className="h-24 w-24" />;
      })
    ) : (
      <h3>loading...</h3>
    );
  };

  // BUGFIX:need to attach correct answer to displayed question
  return (
    <div className="flex flex-col items-center justify-around h-full">
      <div className="grid grid-cols-4 gap-4 w-3/5">
        <div className="col-span-2 uppercase">hero</div>
        <div className="col-span-2 uppercase">villain</div>
        <div className="flex justify-center items-center mt-5 col-span-4">
          {displayCards()}
        </div>
      </div>
      <div className="flex justify-around w-1/3">
        <Answers answers={data.answers} />
      </div>
    </div>
  );
}

export default EquityQS;
