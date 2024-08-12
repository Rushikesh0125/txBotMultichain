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
exports.getRandomChainSelector = void 0;
const getRandomNumber_1 = require("./getRandomNumber");
const getRandomChainSelector = (network) => __awaiter(void 0, void 0, void 0, function* () {
    const chainSelectors = [
        "40245", //base
        "40102", //bsc
        "40106", //fuji
        "40231", //arb
        "40267", //amoy
        "40291" //bera
    ];
    if (network == "baseSepolia") {
        let randFactor = (0, getRandomNumber_1.getRandomNumber)(1, 5);
        return chainSelectors[randFactor];
    }
    else if (network == "bscTestnet") {
        let randFactor = (0, getRandomNumber_1.getRandomNumber)(2, 5);
        return chainSelectors[randFactor];
    }
    else if (network == "fuji") {
        let randFactor = (0, getRandomNumber_1.getRandomNumber)(3, 5);
        return chainSelectors[randFactor];
    }
    else if (network == "arbSepolia") {
        let randFactor = (0, getRandomNumber_1.getRandomNumber)(4, 5);
        return chainSelectors[randFactor];
    }
    else if (network == "amoy") {
        return chainSelectors[5];
    }
});
exports.getRandomChainSelector = getRandomChainSelector;
