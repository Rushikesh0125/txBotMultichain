require("dotenv").config();

export const getProviderURLs = (networkName: string) => {
  switch (networkName) {
    case "mainnet":
      return process.env.MAINNET;
    case "sepolia":
      return process.env.SEPOLIA_URL;
    case "polygon":
      return process.env.POLYGON;
    case "mumbai":
      return process.env.MUMBAI_URL;
    case "bsc":
      return process.env.BSC;
    case "bscTestnet":
      return process.env.BSCTESTNET_URL;
    case "avalanche":
      return process.env.AVALANCH;
    case "fuji":
      return process.env.FUJI_URL;
    case "arbitrum":
      return process.env.ARBITRUM;
    case "arbSepolia":
      return process.env.ARBSEPOLIA_URL;
  }
};

// console.log(getProviderURLs("mumbai"));
