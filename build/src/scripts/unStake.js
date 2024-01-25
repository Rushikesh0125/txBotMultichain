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
exports.unStake = void 0;
const ethers_1 = require("ethers");
const getContractInstance_1 = require("../utils/getContractInstance");
const getRandomUser_1 = require("../utils/getRandomUser");
const unStake = (network) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = (yield (0, getRandomUser_1.getRandomUser)()) || "";
    const stakingcontractInstance = yield (0, getContractInstance_1.getContractInstance)("Staking", network, privateKey);
    const stake = yield stakingcontractInstance.stakeRecord(ethers_1.ethers.utils.computeAddress(`0x${privateKey}`));
    const stakedAmount = stake.budsAmount;
    if (stakedAmount == 0) {
        return;
    }
    const randomUnstakeAmount = Math.floor(Math.random() * (stakedAmount - stakedAmount / 10 + 1) + stakedAmount / 10);
    yield stakingcontractInstance.unStakeBuds(randomUnstakeAmount);
});
exports.unStake = unStake;
