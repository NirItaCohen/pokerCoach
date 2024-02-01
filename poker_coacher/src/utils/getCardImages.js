const getCardImage = async (cardName) => {
  const path = `../assets/cards/${cardName}.svg`;
  const importedImg = await import(path);
  return importedImg.default;
};

export default getCardImage;
