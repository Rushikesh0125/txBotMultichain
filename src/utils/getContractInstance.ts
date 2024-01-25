import ethers, { Contract, Signer } from "ethers";
import { getSigner } from "./getSigner";
import { BudsFaucetData } from "../../Artifacts/BudsFaucet";
import { getContractData } from "./getContractData";

export const getContractInstance = async (
  contractName: string,
  network: string,
  privateKey: string
) => {
  if (contractName == "BudsFaucet") {
    const abi = BudsFaucetData(network).abi;
    const address = BudsFaucetData(network).address;
    const signer = await getSigner(privateKey, network);
    const contract = new Contract(address, abi, signer);
    return contract;
  } else {
    const contractData = await getContractData(contractName, network);
    const address = contractData?.address || "";
    const abi = contractData?.abi || [];
    const signer = await getSigner(privateKey, network);
    const contract = new Contract(address, abi, signer);
    return contract;
  }
};
