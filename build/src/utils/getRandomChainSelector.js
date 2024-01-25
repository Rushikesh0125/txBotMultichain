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
const getRandomChainSelector = (network) => __awaiter(void 0, void 0, void 0, function* () {
    let randFactor = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    randFactor = randFactor % 2;
    const chainSelectors = [
        "16015286601757825753",
        "12532609583862916517",
        "13264668187771770619",
    ];
    if (network == "sepolia") {
        if (randFactor == 0) {
            return chainSelectors[1];
        }
        else {
            return chainSelectors[2];
        }
    }
    else if (network == "mumbai") {
        if (randFactor == 0) {
            return chainSelectors[0];
        }
        else {
            return chainSelectors[2];
        }
    }
    else {
        if (randFactor == 0) {
            return chainSelectors[0];
        }
        else {
            return chainSelectors[1];
        }
    }
});
exports.getRandomChainSelector = getRandomChainSelector;
