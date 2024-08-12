import { getRandomNumber } from "./getRandomNumber";

export const getRandomChainSelector = async (network: string) => {
  const chainSelectors = [
    "40245",//base
    "40102",//bsc
    "40106",//fuji
    "40231",//arb
    "40267",//amoy
    "40291"//bera
  ];
  if (network == "baseSepolia") {
    let randFactor = getRandomNumber(1, 5);
    return chainSelectors[randFactor];
  } else if (network == "bscTestnet") {
    let randFactor = getRandomNumber(2, 5);
    return chainSelectors[randFactor];
  } else if (network == "fuji") {
    let randFactor = getRandomNumber(3, 5);
    return chainSelectors[randFactor];
  } else if (network == "arbSepolia") {
    let randFactor = getRandomNumber(4, 5);
    return chainSelectors[randFactor];
  } else if (network == "amoy") {
    return chainSelectors[5];
  }
};
