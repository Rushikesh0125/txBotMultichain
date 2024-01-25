import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";

export const unStake = async (network: string) => {
  const privateKey = (await getRandomUser()) || "";
  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );
  const stake = await stakingcontractInstance.stakeRecord(
    ethers.utils.computeAddress(`0x${privateKey}`)
  );
  const stakedAmount = stake.budsAmount;
  if (stakedAmount == 0) {
    return;
  }
  const randomUnstakeAmount = Math.floor(
    Math.random() * (stakedAmount - stakedAmount / 10 + 1) + stakedAmount / 10
  );

  await stakingcontractInstance.unStakeBuds(randomUnstakeAmount);
};
