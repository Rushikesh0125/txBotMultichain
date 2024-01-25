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
exports.getContractInstance = void 0;
const ethers_1 = require("ethers");
const getSigner_1 = require("./getSigner");
const BudsFaucet_1 = require("../../Artifacts/BudsFaucet");
const getContractData_1 = require("./getContractData");
const getContractInstance = (contractName, network, privateKey) => __awaiter(void 0, void 0, void 0, function* () {
    if (contractName == "BudsFaucet") {
        const abi = (0, BudsFaucet_1.BudsFaucetData)(network).abi;
        const address = (0, BudsFaucet_1.BudsFaucetData)(network).address;
        const signer = yield (0, getSigner_1.getSigner)(privateKey, network);
        const contract = new ethers_1.Contract(address, abi, signer);
        return contract;
    }
    else {
        const contractData = yield (0, getContractData_1.getContractData)(contractName, network);
        const address = (contractData === null || contractData === void 0 ? void 0 : contractData.address) || "";
        const abi = (contractData === null || contractData === void 0 ? void 0 : contractData.abi) || [];
        const signer = yield (0, getSigner_1.getSigner)(privateKey, network);
        const contract = new ethers_1.Contract(address, abi, signer);
        return contract;
    }
});
exports.getContractInstance = getContractInstance;
