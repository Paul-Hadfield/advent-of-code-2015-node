import * as fs from "fs";

import { computeLeaderPoints } from "./compute-leader-points.ts";
import { parseReindeerLine } from "./parse-reindeer.ts";

const RACE_SECONDS = 2503;

const lines = fs.readFileSync("./data.txt", "utf8").trim().split("\n");
const reindeer = lines.map(parseReindeerLine);

const points = computeLeaderPoints(reindeer, RACE_SECONDS);

console.log(Math.max(...points.values()));
