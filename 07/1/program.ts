import * as fs from "fs";
import { parseInstruction } from "./parse-instruction.ts";
import { processInstructions } from "./process-instructions.ts";

const instructions = fs
  .readFileSync("./data.txt", "utf8")
  .trim()
  .split("\n")
  .map(parseInstruction);

const gates = processInstructions(instructions);
console.log(gates.get("a"));
