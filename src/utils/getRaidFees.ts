export const getRaidFees = async (chain:string) => {
    switch (chain) {
        case "amoy":
            return "0.5"
        case "bscTestnet":
            return "0.0041"
        case "fuji":
            return "0.05"
        case "baseSepolia":
            return "0.005"
        case "arbSepolia":
            return "0.5"
        case "beraTestnet":
            return "0.005"
        default:
            return ""
    }
}