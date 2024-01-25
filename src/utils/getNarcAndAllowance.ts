import { ethers } from "ethers";
import { getContractInstance } from "./getContractInstance";
import { getSigner } from "./getSigner";

export const getNarcAndAllowance = async (
  privateKey: string,
  network: string
) => {
  console.log("getting narc inst");
  const narcInstance = await getContractInstance("Narcs", network, privateKey);
  console.log("getting signer inst");
  const signer = await getSigner(privateKey, network);
  console.log("getting balance of narcs");
  const balance = await narcInstance.balanceOf(await signer.getAddress());

  if (balance < 1) {
    const nftFaucet = await getContractInstance(
      "NFTFaucet",
      network,
      privateKey
    );
    console.log("claiming narc");
    const tx = await nftFaucet.claimNarc();

    await tx.wait();
  }
  console.log("done claiming");
};
