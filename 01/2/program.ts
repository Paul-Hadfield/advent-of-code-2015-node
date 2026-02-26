import * as fs from "fs";

type Result = {
  floor: number;
  firstEnteredBasement: number | null;
};

function processFloor(floor: number, instruction: string): number {
  switch (instruction) {
    case "(":
      return floor + 1;
    case ")":
      return floor - 1;
    default:
      return floor;
  }
}

function processFirstEnteredBasement(
  floor: number,
  firstEnteredBasement: number | null,
  index: number,
): number | null {
  if (floor === -1 && firstEnteredBasement === null) {
    return index + 1;
  }
  return firstEnteredBasement;
}

function processInstruction(
  result: Result,
  instruction: string,
  index: number,
): Result {
  const floor = processFloor(result.floor, instruction);

  const firstEnteredBasement = processFirstEnteredBasement(
    floor,
    result.firstEnteredBasement,
    index,
  );

  return { floor, firstEnteredBasement };
}

const instructions = fs.readFileSync("./data.txt", "utf8").trim().split("");

console.log(
  `Final floor: ${instructions.reduce(processInstruction, { floor: 0, firstEnteredBasement: null }).firstEnteredBasement}`,
);
