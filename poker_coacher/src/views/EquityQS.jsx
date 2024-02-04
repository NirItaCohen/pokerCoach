import { useEffect, useState } from "react";
import getCardImage from "../utils/getCardImages";

function EquityQS({ data }) {
  const [svg, setSvg] = useState([]);

  useEffect(() => {
    const loadImg = async () => {
      const cardsImgPaths = data.question.map(
        async (card) => await getCardImage(card)
      );
      const resolvedSvg = await Promise.all(cardsImgPaths);
      setSvg(resolvedSvg);
    };

    loadImg();
  }, []);
  const generateAnswers = () => {
    console.log(data.answers);
    return data.answers.map((ans) => {
      return (
        <button className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
          {ans.answer}
        </button>
      );
    });
  };
  const displayCards = () => {
    return svg.length > 0 ? (
      svg.map((card, i) => {
        if (i === 1) {
          return (
            <>
              <img src={card} key={card} className="h-24 w-24" />
              <span className="text-3xl text-rose-400 tracking-wider">vs</span>
            </>
          );
        }
        return <img src={card} key={card} className="h-24 w-24" />;
      })
    ) : (
      <h3>loading...</h3>
    );
  };

  return (
    <div className="flex flex-col items-center justify-around h-full">
      <div className="grid grid-cols-4 gap-4 w-3/5">
        <div className="col-span-2 uppercase">hero</div>
        <div className="col-span-2 uppercase">villain</div>
        <div className="flex justify-center items-center mt-5 col-span-4">
          {displayCards()}
        </div>
      </div>
      <div className="flex justify-around w-1/3">{generateAnswers()}</div>
    </div>
  );
}

export default EquityQS;
