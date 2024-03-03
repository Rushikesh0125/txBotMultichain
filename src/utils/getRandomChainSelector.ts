import { getRandomNumber } from "./getRandomNumber";

export const getRandomChainSelector = async (network: string) => {
  const chainSelectors = [
    "16015286601757825753",
    "12532609583862916517",
    "13264668187771770619",
    "3478487238524512106",
    "14767482510784806043",
  ];
  if (network == "sepolia") {
    let randFactor = getRandomNumber(1, 4);
    return chainSelectors[randFactor];
  } else if (network == "mumbai") {
    let randFactor = getRandomNumber(0, 4);
    if (randFactor == 1) {
      randFactor += 1;
    }
    return chainSelectors[randFactor];
  } else if (network == "bscTestnet") {
    let randFactor = getRandomNumber(0, 4);
    if (randFactor == 2) {
      randFactor += 1;
    }
    return chainSelectors[randFactor];
  } else if (network == "arbSepolia") {
    let randFactor = getRandomNumber(0, 4);
    if (randFactor == 3) {
      randFactor += 1;
    }
    return chainSelectors[randFactor];
  } else if (network == "fuji") {
    let randFactor = getRandomNumber(0, 3);
    return chainSelectors[randFactor];
  }
};
