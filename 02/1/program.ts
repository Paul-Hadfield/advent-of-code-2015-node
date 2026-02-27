import * as fs from "fs";
import type { Box } from "./box.ts";
import { parseBox } from "./parse-box.ts";
import { calculateRequiredPaper } from "./calculate-required-paper.ts";

const boxes = fs
  .readFileSync("./data.txt", "utf8")
  .trim()
  .split("\n")
  .map(parseBox)
  .reduce((acc, box) => acc + calculateRequiredPaper(box), 0);

console.log(boxes);
