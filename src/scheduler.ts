import { addStake } from "./scripts/addStake";
import { crossChainRaid } from "./scripts/crossChainRaid";
import { crossChainStake } from "./scripts/crossChainStake";
import { raidPool } from "./scripts/raidPool";
import { burnBuds } from "./scripts/burnBuds";
import { unStake } from "./scripts/unStake";

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

async function scheduleRandomScript() {
  const scripts = [
    addStake,
    burnBuds,
    crossChainRaid,
    crossChainStake,
    raidPool,
    unStake,
  ];

  const networks = ["sepolia", "mumbai", "bscTestnet"];

  async function runRandomScript() {
    const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
    const network = networks[Math.floor(Math.random() * networks.length)];
    const interval = Math.floor(Math.random() * (90 - 60 + 1) + 60);

    await executeScript(randomScript, network, interval);

    setTimeout(runRandomScript, interval * 60 * 1000);
  }

  runRandomScript();
}

scheduleRandomScript();
