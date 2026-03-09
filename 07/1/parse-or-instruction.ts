import type { OrInstruction } from "./instructions/or-instruction.ts";
import { parseInput } from "./parse-input.ts";

export function parseOrInstruction(value: string): OrInstruction {
  const values = value.split(" -> ");
  const inputs = values[0]!.split(" OR ");

  return {
    command: "OR",
    leftInput: parseInput(inputs[0]!),
    rightInput: parseInput(inputs[1]!),
    output: { type: "wire", identifier: values[1]! },
    processed: false,
  };
}
