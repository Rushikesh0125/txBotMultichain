export const getRandomUser = async () => {
  const randNo = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  const privateKeys = [
    process.env.USER1_PRIVATE,
    process.env.USER2_PRIVATE,
    process.env.USER3_PRIVATE,
    process.env.USER4_PRIVATE,
  ];
  return privateKeys[randNo];
};
