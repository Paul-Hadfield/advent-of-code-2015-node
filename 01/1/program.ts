import * as fs from "fs";

const instructions = fs.readFileSync("./data.txt", "utf8").trim().split("");

function processInstruction(floor: number, instruction: string): number {
  switch (instruction) {
    case "(":
      return floor + 1;
    case ")":
      return floor - 1;
    default:
      return floor;
  }
}

console.log(`Final floor: ${instructions.reduce(processInstruction, 0)}`);
