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
exports.raidPool = void 0;
const getContractInstance_1 = require("../utils/getContractInstance");
const getRandomUser_1 = require("../utils/getRandomUser");
const getNarcAndAllowance_1 = require("../utils/getNarcAndAllowance");
const getRaidFees_1 = require("../utils/getRaidFees");
const raidPool = (network) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = (yield (0, getRandomUser_1.getRandomUser)()) || "";
    yield (0, getNarcAndAllowance_1.getNarcAndAllowance)(privateKey, network);
    const stakingcontractInstance = yield (0, getContractInstance_1.getContractInstance)("Staking", network, privateKey);
    const raidFees = yield (0, getRaidFees_1.getRaidFees)(network);
    const tx = yield stakingcontractInstance.raid(0, {
        value: raidFees,
    });
});
exports.raidPool = raidPool;
