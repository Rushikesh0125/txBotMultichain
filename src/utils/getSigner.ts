import { ethers } from "ethers";
import { getProviderURLs } from "./getProviderUrl";

export const getSigner = async (privateKey: string, network: string) => {
  const provider = new ethers.providers.JsonRpcProvider(
    getProviderURLs(network)
  );
  const signer = new ethers.Wallet(privateKey, provider);
  return signer;
};
