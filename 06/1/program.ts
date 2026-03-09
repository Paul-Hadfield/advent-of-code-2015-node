import * as fs from "fs";
import { determineCurrentLightStatus } from "./determine-current-light-status.ts";

const instructions = fs.readFileSync("./data.txt", "utf8").trim().split("\n");
const lightsOn = instructions.reduce(
  determineCurrentLightStatus,
  new Set<string>(),
);

console.log(lightsOn.size);
