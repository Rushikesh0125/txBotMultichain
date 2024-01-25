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
exports.crossChainStake = void 0;
const ethers_1 = require("ethers");
const getContractInstance_1 = require("../utils/getContractInstance");
const getRandomChainSelector_1 = require("../utils/getRandomChainSelector");
const getRandomUser_1 = require("../utils/getRandomUser");
const getBudsAndAllowance_1 = require("./getBudsAndAllowance");
const crossChainStake = (network) => __awaiter(void 0, void 0, void 0, function* () {
    if (network == "mumbai")
        network = "sepolia";
    //choose random user
    const privateKey = (yield (0, getRandomUser_1.getRandomUser)()) || "";
    const chainSel = yield (0, getRandomChainSelector_1.getRandomChainSelector)(network);
    //get buds if don't have and give allowance to staking
    const amount = ethers_1.ethers.utils.formatEther(yield (0, getBudsAndAllowance_1.getBudsAndAllowance)(privateKey, network, true));
    //get instance for the staking contract
    const stakingcontractInstance = yield (0, getContractInstance_1.getContractInstance)("Staking", network, privateKey);
    //getting cross chain fees
    console.log(amount);
    console.log(chainSel);
    const fees = yield stakingcontractInstance.getFeesForCCTX(ethers_1.ethers.utils.parseEther(amount), 0, chainSel);
    console.log(ethers_1.ethers.utils.formatEther(fees));
    //staking;
    const tx = yield stakingcontractInstance.crossChainStake(ethers_1.ethers.utils.parseEther(amount), 0, chainSel, { value: fees });
    yield tx.wait();
});
exports.crossChainStake = crossChainStake;
