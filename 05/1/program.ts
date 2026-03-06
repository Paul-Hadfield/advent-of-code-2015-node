import * as fs from "fs";
import { isNiceString } from "./is-nice-string.ts";

const values = fs.readFileSync("./data.txt", "utf8").split("\n");
const numberOfNiceStrings = values.reduce((acc: number, value: string) => {
  return isNiceString(value) ? acc + 1 : acc;
}, 0);

console.log(numberOfNiceStrings);
