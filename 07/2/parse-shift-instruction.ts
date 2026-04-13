import type { ShiftInstruction } from "./instructions/shift-instruction.ts";
import { parseInput } from "./parse-input.ts";

export function parseShiftInstruction(value: string): ShiftInstruction {
  const values = value.split(" -> ");
  const temp = values[0]!;
  const direction = temp.includes("RSHIFT") ? "R" : "L";
  const inputs = temp.split(direction === "R" ? " RSHIFT " : " LSHIFT ");

  return {
    command: "SHIFT",
    input: parseInput(inputs[0]!),
    direction,
    step: parseInt(inputs[1]!),
    output: { type: "wire", identifier: values[1]! },
    processed: false,
  };
}
