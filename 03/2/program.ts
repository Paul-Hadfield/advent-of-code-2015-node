import * as fs from "fs";
import { parseInstructions } from "./parse-instructions.ts";

const instructions = fs.readFileSync("./data.txt", "utf8").trim();

console.log(parseInstructions(instructions));
