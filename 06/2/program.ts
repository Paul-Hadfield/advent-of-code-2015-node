import * as fs from "fs";
import { determineCurrentLightStatus } from "./determine-current-light-status.ts";

const instructions = fs.readFileSync("./data.txt", "utf8").trim().split("\n");
const lightsOn = instructions.reduce(
  determineCurrentLightStatus,
  new Map<string, number>(),
);

let total = 0;

for (const value of lightsOn.values()) {
  total += value;
}

console.log(total);
