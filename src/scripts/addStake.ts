//transfer 200 to 20000 buds from owner to user [randomized]
// fund the user wallet
//then call addStake

import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getBudsAndAllowance } from "./getBudsAndAllowance";

export const addStake = async (network: string) => {
  //choose random user
  const privateKey = (await getRandomUser()) || "";
  console.log(
    "randomizing user : ",
    ethers.utils.computeAddress(`0x${privateKey}`)
  );

  //get buds if don't have and give allowance to staking
  console.log("fetching buds");
  const amount = await getBudsAndAllowance(privateKey, network, true);

  //get instance for the staking contract
  console.log("getting contract");
  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );
  //adding stake
  console.log("adding stake");
  const tx = await stakingcontractInstance.addStake(amount, 0);
};
