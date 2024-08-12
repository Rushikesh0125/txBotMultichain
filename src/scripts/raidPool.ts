import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getNarcAndAllowance } from "../utils/getNarcAndAllowance";
import { getRaidFees } from "../utils/getRaidFees";

export const raidPool = async (network: string) => {
  const privateKey = (await getRandomUser()) || "";

  await getNarcAndAllowance(privateKey, network);

  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );

  const raidFees =await getRaidFees(network);

  const tx = await stakingcontractInstance.raid(0, {
    value: raidFees,
  });
};
