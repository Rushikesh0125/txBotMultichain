import { getRandomNumber } from "./getRandomNumber";
export const getRandomUser = async () => {
  const randNo = getRandomNumber(0, 3);
  const privateKeys = [
    process.env.USER1_PRIVATE,
    process.env.USER2_PRIVATE,
    process.env.USER3_PRIVATE,
    process.env.USER4_PRIVATE,
  ];
  return privateKeys[randNo];
};
