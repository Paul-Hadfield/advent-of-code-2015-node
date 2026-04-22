import * as fs from "fs";
import type { MFCSAMRecord } from "./mfcsam_record.ts";
import { parseAuntKnowledge } from "./parse-aunt-knowledge.ts";
import { compareToResult } from "./compare-to-result.ts";

const ANALYSIS: MFCSAMRecord = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

console.log(ANALYSIS);
const aunts = fs
  .readFileSync("./data.txt", "utf8")
  .trim()
  .split("\n")
  .map(parseAuntKnowledge)
  .filter((aunt) => compareToResult(aunt, ANALYSIS));
console.log(aunts);
