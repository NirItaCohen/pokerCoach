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

  const displayCards = () => {
    return svg.length > 0 ? (
      svg.map((card) => <img src={card} key={card} className="h-24 w-24" />)
    ) : (
      <h3>loading...</h3>
    );
  };

  return (
    <div>
      EquityQS
      <div className="flex">{displayCards()}</div>
    </div>
  );
}

export default EquityQS;
