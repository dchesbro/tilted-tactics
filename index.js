import { strategies } from "./src/strategies";

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function tactic() {
  const e = random((strategies.length - 1), 0);
  const t = random((strategies[e].strategies.length - 1), 0);

  return {
    ...strategies[e],
    strategies: strategies[e].strategies[t],
  };
}
