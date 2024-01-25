"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossChainRaid = void 0;
const ethers_1 = require("ethers");
const getContractInstance_1 = require("../utils/getContractInstance");
const getRandomUser_1 = require("../utils/getRandomUser");
const getNarcAndAllowance_1 = require("../utils/getNarcAndAllowance");
const getRandomChainSelector_1 = require("../utils/getRandomChainSelector");
const crossChainRaid = (network) => __awaiter(void 0, void 0, void 0, function* () {
    if (network == "mumbai")
        network = "bscTestnet";
    const privateKey = (yield (0, getRandomUser_1.getRandomUser)()) || "";
    console.log("randomized private key");
    const chainSel = yield (0, getRandomChainSelector_1.getRandomChainSelector)(network);
    console.log(chainSel);
    yield (0, getNarcAndAllowance_1.getNarcAndAllowance)(privateKey, network);
    console.log("claime narc");
    const stakingcontractInstance = yield (0, getContractInstance_1.getContractInstance)("Staking", network, privateKey);
    console.log("getting raid fees");
    const raidFees = network == "sepolia"
        ? ethers_1.ethers.utils.parseEther("0.005").toString()
        : network == "bscTestnet"
            ? ethers_1.ethers.utils.parseEther("0.0041").toString()
            : ethers_1.ethers.utils.parseEther("0.05").toString();
    console.log("adjusting fees, raid fee:", raidFees);
    const cctxFee = yield stakingcontractInstance.getFeesForCCTX(0, 0, chainSel);
    console.log("cctx fees", cctxFee.toString());
    const finalFees = BigInt(cctxFee) + BigInt(raidFees);
    console.log("adjusted:", finalFees.toString());
    const tx = yield stakingcontractInstance.crossChainRaid(chainSel, 0, {
        value: finalFees,
    });
});
exports.crossChainRaid = crossChainRaid;
