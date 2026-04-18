import * as fs from "fs";
import { getStringLenDifference } from "./get-string-len-difference.ts";

const strings = fs.readFileSync("./data.txt", "utf8").trim().split("\n");

console.log(strings.map(getStringLenDifference).reduce((a, b) => a + b, 0));