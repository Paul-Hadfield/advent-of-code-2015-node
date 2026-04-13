import type { AndInstruction } from "./instructions/and-instruction.ts";
import { parseInput } from "./parse-input.ts";

export function parseAndInstruction(value: string): AndInstruction {
  const values = value.split(" -> ");
  const inputs = values[0]!.split(" AND ");
  return {
    command: "AND",
    leftInput: parseInput(inputs[0]!),
    rightInput: parseInput(inputs[1]!),
    output: { type: "wire", identifier: values[1]! },
    processed: false,
  };
}
