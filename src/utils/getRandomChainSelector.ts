export const getRandomChainSelector = async (network: string) => {
  let randFactor = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  randFactor = randFactor % 2;
  const chainSelectors = [
    "16015286601757825753",
    "12532609583862916517",
    "13264668187771770619",
  ];
  if (network == "sepolia") {
    if (randFactor == 0) {
      return chainSelectors[1];
    } else {
      return chainSelectors[2];
    }
  } else if (network == "mumbai") {
    if (randFactor == 0) {
      return chainSelectors[0];
    } else {
      return chainSelectors[2];
    }
  } else {
    if (randFactor == 0) {
      return chainSelectors[0];
    } else {
      return chainSelectors[1];
    }
  }
};
