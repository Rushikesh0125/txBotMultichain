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
exports.getBudsAndAllowance = void 0;
const ethers_1 = require("ethers");
const getContractData_1 = require("../utils/getContractData");
const getContractInstance_1 = require("../utils/getContractInstance");
const getBudsAndAllowance = (privateKey, network, approve) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("randomizing the amount");
    const randAmmount = ethers_1.ethers.utils.parseEther(Math.floor(Math.random() * (12000 - 2000 + 1) + 2000).toString());
    console.log("getting buds contract");
    const budsInstance = yield (0, getContractInstance_1.getContractInstance)("Buds", network, privateKey);
    console.log("checking balance");
    const address = ethers_1.ethers.utils.computeAddress(`0x${privateKey}`);
    console.log(address);
    const balance = yield budsInstance.balanceOf(address);
    console.log(ethers_1.ethers.utils.formatEther(balance));
    console.log("getting required data");
    const stakingData = (yield (0, getContractData_1.getContractData)("Staking", network)) || {
        abi: [],
        address: "",
    };
    console.log("checking requiremnt");
    if (balance.lt(randAmmount)) {
        const budsFaucetInst = yield (0, getContractInstance_1.getContractInstance)("BudsFaucet", network, privateKey);
        console.log("claiming buds");
        const tx = yield budsFaucetInst.claim(address);
        yield tx.wait();
    }
    if (approve) {
        console.log("allowing the interactors");
        const allowtx = yield budsInstance.approve(stakingData.address, randAmmount);
        yield allowtx.wait();
    }
    console.log("done claiming");
    return randAmmount;
});
exports.getBudsAndAllowance = getBudsAndAllowance;
