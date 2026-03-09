import type { NotInstruction } from "./instructions/not-instruction.ts";
import { parseInput } from "./parse-input.ts";

export function parseNotInstruction(value: string): NotInstruction {
  const values = value.split(" -> ");
  const inputs = values[0]!.split(" ");

  return {
    command: "NOT",
    input: parseInput(inputs[1]!),
    output: { type: "wire", identifier: values[1]! },
    processed: false,
  };
}
