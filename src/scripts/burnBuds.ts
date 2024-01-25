import { ethers } from "ethers";
import { getContractInstance } from "../utils/getContractInstance";
import { getRandomUser } from "../utils/getRandomUser";
import { getBudsAndAllowance } from "./getBudsAndAllowance";

export const burnBuds = async (network: string) => {
  const privateKey = (await getRandomUser()) || "";

  const budsContractInstance = await getContractInstance(
    "Buds",
    network,
    privateKey
  );

  await getBudsAndAllowance(privateKey, network, false);

  const rand = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  console.log(rand);
  if (rand == 2) {
    console.log("burning for informant");
    await budsContractInstance.burnForInformant();
  } else {
    console.log("burning for stoner");
    await budsContractInstance.burnForStoner();
  }
};
