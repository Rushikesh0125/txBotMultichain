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
exports.burnBuds = void 0;
const getContractInstance_1 = require("../utils/getContractInstance");
const getRandomUser_1 = require("../utils/getRandomUser");
const getBudsAndAllowance_1 = require("./getBudsAndAllowance");
const burnBuds = (network) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = (yield (0, getRandomUser_1.getRandomUser)()) || "";
    const budsContractInstance = yield (0, getContractInstance_1.getContractInstance)("Buds", network, privateKey);
    yield (0, getBudsAndAllowance_1.getBudsAndAllowance)(privateKey, network, false);
    const rand = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    console.log(rand);
    if (rand == 2) {
        console.log("burning for informant");
        yield budsContractInstance.burnForInformant();
    }
    else {
        console.log("burning for stoner");
        yield budsContractInstance.burnForStoner();
    }
});
exports.burnBuds = burnBuds;
