import { BudsData } from "../../Artifacts/Buds";
import { StakingData } from "../../Artifacts/Staking";
import { NFTFaucetData } from "../../Artifacts/NFTFaucet";
import { BudsFaucetData } from "../../Artifacts/BudsFaucet";
import { NarcsData } from "../../Artifacts/Narcs";

export const getContractData = async (
  ContractName: string,
  network: string
) => {
  switch (ContractName) {
    case "Buds":
      return BudsData;
    case "Staking":
      return StakingData;
    case "NFTFaucet":
      return NFTFaucetData;
    case "Narcs":
      return NarcsData;
    case "BudsFaucet":
      return BudsFaucetData(network);
    default:
      break;
  }
};
