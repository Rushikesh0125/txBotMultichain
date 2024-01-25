import { ethers } from "ethers";
import { getContractData } from "../utils/getContractData";
import { getContractInstance } from "../utils/getContractInstance";
import { getSigner } from "../utils/getSigner";

export const getBudsAndAllowance = async (
  privateKey: string,
  network: string,
  approve: boolean
) => {
  console.log("randomizing the amount");
  const randAmmount = ethers.utils.parseEther(
    Math.floor(Math.random() * (12000 - 2000 + 1) + 2000).toString()
  );
  console.log("getting buds contract");
  const budsInstance = await getContractInstance("Buds", network, privateKey);

  console.log("checking balance");
  const address = ethers.utils.computeAddress(`0x${privateKey}`);
  console.log(address);
  const balance = await budsInstance.balanceOf(address);
  console.log(ethers.utils.formatEther(balance));
  console.log("getting required data");
  const stakingData = (await getContractData("Staking", network)) || {
    abi: [],
    address: "",
  };
  console.log("checking requiremnt");
  if (balance.lt(randAmmount)) {
    const budsFaucetInst = await getContractInstance(
      "BudsFaucet",
      network,
      privateKey
    );
    console.log("claiming buds");
    const tx = await budsFaucetInst.claim(address);

    await tx.wait();
  }

  if (approve) {
    console.log("allowing the interactors");
    const allowtx = await budsInstance.approve(
      stakingData.address,
      randAmmount
    );

    await allowtx.wait();
  }

  console.log("done claiming");

  return randAmmount;
};
