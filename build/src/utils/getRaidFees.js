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
exports.getRaidFees = void 0;
const getRaidFees = (chain) => __awaiter(void 0, void 0, void 0, function* () {
    switch (chain) {
        case "amoy":
            return "0.5";
        case "bscTestnet":
            return "0.0041";
        case "fuji":
            return "0.05";
        case "baseSepolia":
            return "0.005";
        case "arbSepolia":
            return "0.5";
        case "beraTestnet":
            return "0.005";
        default:
            return "";
    }
});
exports.getRaidFees = getRaidFees;
