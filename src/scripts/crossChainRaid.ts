import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getNarcAndAllowance } from "../utils/getNarcAndAllowance";
import { getRandomChainSelector } from "../utils/getRandomChainSelector";

export const crossChainRaid = async (network: string) => {
  if (network == "mumbai") network = "bscTestnet";
  const privateKey = (await getRandomUser()) || "";
  console.log("randomized private key");
  const chainSel = await getRandomChainSelector(network);
  console.log(chainSel);
  await getNarcAndAllowance(privateKey, network);
  console.log("claime narc");
  const stakingcontractInstance = await getContractInstance(
    "Staking",
    network,
    privateKey
  );
  console.log("getting raid fees");
  const raidFees =
    network == "sepolia"
      ? ethers.utils.parseEther("0.005").toString()
      : network == "bscTestnet"
      ? ethers.utils.parseEther("0.0041").toString()
      : ethers.utils.parseEther("0.05").toString();
  console.log("adjusting fees, raid fee:", raidFees);
  const cctxFee = await stakingcontractInstance.getFeesForCCTX(0, 0, chainSel);
  console.log("cctx fees", cctxFee.toString());
  const finalFees = BigInt(cctxFee) + BigInt(raidFees);
  console.log("adjusted:", finalFees.toString());
  const tx = await stakingcontractInstance.crossChainRaid(chainSel, 0, {
    value: finalFees,
  });
};
