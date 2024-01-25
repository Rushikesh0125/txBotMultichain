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
exports.getNarcAndAllowance = void 0;
const getContractInstance_1 = require("./getContractInstance");
const getSigner_1 = require("./getSigner");
const getNarcAndAllowance = (privateKey, network) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getting narc inst");
    const narcInstance = yield (0, getContractInstance_1.getContractInstance)("Narcs", network, privateKey);
    console.log("getting signer inst");
    const signer = yield (0, getSigner_1.getSigner)(privateKey, network);
    console.log("getting balance of narcs");
    const balance = yield narcInstance.balanceOf(yield signer.getAddress());
    if (balance < 1) {
        const nftFaucet = yield (0, getContractInstance_1.getContractInstance)("NFTFaucet", network, privateKey);
        console.log("claiming narc");
        const tx = yield nftFaucet.claimNarc();
        yield tx.wait();
    }
    console.log("done claiming");
});
exports.getNarcAndAllowance = getNarcAndAllowance;
