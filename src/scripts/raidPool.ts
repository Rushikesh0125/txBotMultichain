import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getNarcAndAllowance } from "../utils/getNarcAndAllowance";

export const raidPool = async (network: string) => {
  const privateKey = (await getRandomUser()) || "";

  await getNarcAndAllowance(privateKey, network);

  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );

  const raidFees =
    network == "sepolia"
      ? ethers.utils.parseEther("0.005")
      : network == "bscTestnet"
      ? ethers.utils.parseEther("0.0041")
      : ethers.utils.parseEther("0.05");

  const tx = await stakingcontractInstance.raid(0, {
    value: raidFees,
  });
};
