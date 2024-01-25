import { ethers } from "ethers";
import { getContractData } from "../utils/getContractData";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomChainSelector } from "../utils/getRandomChainSelector";
import { getRandomUser } from "../utils/getRandomUser";
import { getBudsAndAllowance } from "./getBudsAndAllowance";

export const crossChainStake = async (network: string) => {
  if (network == "mumbai") network = "sepolia";
  //choose random user
  const privateKey = (await getRandomUser()) || "";

  const chainSel = await getRandomChainSelector(network);

  //get buds if don't have and give allowance to staking
  const amount = ethers.utils.formatEther(
    await getBudsAndAllowance(privateKey, network, true)
  );

  //get instance for the staking contract
  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );

  //getting cross chain fees
  console.log(amount);
  console.log(chainSel);
  const fees = await stakingcontractInstance.getFeesForCCTX(
    ethers.utils.parseEther(amount),
    0,
    chainSel
  );

  console.log(ethers.utils.formatEther(fees));

  //staking;
  const tx = await stakingcontractInstance.crossChainStake(
    ethers.utils.parseEther(amount),
    0,
    chainSel,
    { value: fees }
  );

  await tx.wait();
};
