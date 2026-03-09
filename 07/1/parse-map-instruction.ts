import type { MapInstruction } from "./instructions/map-instruction.ts";
import { parseInput } from "./parse-input.ts";

export function parseMapInstruction(value: string): MapInstruction {
  const values = value.split(" -> ");
  return {
    command: "MAP",
    input: parseInput(values[0]!),
    output: { type: "wire", identifier: values[1]! },
    processed: false,
  };
}
