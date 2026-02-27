import * as fs from "fs";
import type { Box } from "./box.ts";
import { parseBox } from "./parse-box.ts";
import { calculateRequiredRibbon } from "./calculate-required-ribbon.ts";

const boxes = fs
  .readFileSync("./data.txt", "utf8")
  .trim()
  .split("\n")
  .map(parseBox)
  .reduce((acc, box) => acc + calculateRequiredRibbon(box), 0);

console.log(boxes);
