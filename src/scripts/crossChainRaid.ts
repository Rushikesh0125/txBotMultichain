import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getNarcAndAllowance } from "../utils/getNarcAndAllowance";
import { getRandomChainSelector } from "../utils/getRandomChainSelector";
import { getRaidFees } from "../utils/getRaidFees";

export const crossChainRaid = async (network: string) => {
  if (network == "beraTestnet") network = "bscTestnet";
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
  const raidFees = await getRaidFees(network);

  console.log("adjusting fees, raid fee:", raidFees);
  const cctxFee = await stakingcontractInstance.getFeesForCCTX(
    chainSel,
    0,
    0,
    "0x4dC6c07bcd69a3a53052fB24b487a74623aE8a45"
  );

  console.log("cctx fees", cctxFee.toString());
  const finalFees = BigInt(cctxFee) + BigInt(raidFees);

  console.log("adjusted:", finalFees.toString());
  const tx = await stakingcontractInstance.crossChainRaid(chainSel, 0, {
    value: finalFees,
  });
};
