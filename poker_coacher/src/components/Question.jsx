import React from "react";
import EquityQS from "../views/EquityQS";
import As from "@assets/cards/Kd.svg";
import { Suspense, useEffect, useState } from "react";

function Question({ data }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const loadImg = async () => {
      const cardImgPath = await getCardImage(data.question.hand1[0]);
      setSvg(cardImgPath);
    };

    loadImg();
  }, []);

  const getCardImage = async (cardName) => {
    const path = `../assets/cards/${cardName}.svg`;
    const importedImg = await import(path);
    console.log(importedImg);

    return importedImg.default;
  };

  const getLazyCardImage = async (cardName) => {
    const path = `../assets/cards/${cardName}.svg`;
    const importedImg = React.lazy(() => import(path).default);
    console.log(importedImg);

    return importedImg;
  };

  console.log(svg);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <img src={svg} />
      </Suspense>
      <img src={As} />

      <img src={svg} />
    </>
  );
}

export default Question;
