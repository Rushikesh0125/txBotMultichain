import * as cron from "node-cron";
import { addStake } from "./scripts/addStake";
import { crossChainRaid } from "./scripts/crossChainRaid";
import { crossChainStake } from "./scripts/crossChainStake";
import { raidPool } from "./scripts/raidPool";
import { burnBuds } from "./scripts/burnBuds";
import { unStake } from "./scripts/unStake";
import { getRandomNumber } from "./utils/getRandomNumber";

async function executeScript(
  script: Function,
  network: string,
  interval: number
) {
  console.log(
    `Script ${script.name} scheduled at interval ${interval} minutes for network ${network}.`
  );
  await script(network);
}

function scheduleScriptsForNetwork(network: string, scripts: Function[]) {
  async function runScript() {
    const randomScript = scripts[getRandomNumber(0, 5)];
    const interval = Math.floor(Math.random() * (3 - 2 + 1) + 2);

    await executeScript(randomScript, network, interval);

    // Reschedule a new job after the previous one is finished
    setTimeout(runScript, interval * 60 * 1000);
  }

  // Initial schedule when the app starts
  runScript();
}

// Networks and the common set of scripts
const networks = ["sepolia", "mumbai", "bscTestnet", "arbSepolia", "fuji"];
const commonScripts = [
  addStake,
  burnBuds,
  crossChainRaid,
  crossChainStake,
  raidPool,
  unStake,
];

// Schedule scripts for each network
networks.forEach((network) => {
  scheduleScriptsForNetwork(network, commonScripts);
});
