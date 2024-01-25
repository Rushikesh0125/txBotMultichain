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
const addStake_1 = require("./scripts/addStake");
const crossChainRaid_1 = require("./scripts/crossChainRaid");
const crossChainStake_1 = require("./scripts/crossChainStake");
const raidPool_1 = require("./scripts/raidPool");
const burnBuds_1 = require("./scripts/burnBuds");
const unStake_1 = require("./scripts/unStake");
function executeScript(script, network, interval) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Script ${script.name} scheduled at interval ${interval} minutes for network ${network}.`);
        yield script(network);
    });
}
function scheduleRandomScript() {
    return __awaiter(this, void 0, void 0, function* () {
        const scripts = [
            addStake_1.addStake,
            burnBuds_1.burnBuds,
            crossChainRaid_1.crossChainRaid,
            crossChainStake_1.crossChainStake,
            raidPool_1.raidPool,
            unStake_1.unStake,
        ];
        const networks = ["sepolia", "mumbai", "bscTestnet"];
        function runRandomScript() {
            return __awaiter(this, void 0, void 0, function* () {
                const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
                const network = networks[Math.floor(Math.random() * networks.length)];
                const interval = Math.floor(Math.random() * (90 - 60 + 1) + 60);
                yield executeScript(randomScript, network, interval);
                setTimeout(runRandomScript, interval * 60 * 1000);
            });
        }
        runRandomScript();
    });
}
scheduleRandomScript();
