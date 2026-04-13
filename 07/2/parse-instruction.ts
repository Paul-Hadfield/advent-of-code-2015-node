import type { Instruction } from "./instructions/instruction.ts";
import { parseAndInstruction } from "./parse-and-instruction.ts";
import { parseMapInstruction } from "./parse-map-instruction.ts";
import { parseNotInstruction } from "./parse-not-instruction.ts";
import { parseOrInstruction } from "./parse-or-instruction.ts";
import { parseShiftInstruction } from "./parse-shift-instruction.ts";

export function parseInstruction(value: string): Instruction {
  if (value.includes("RSHIFT") || value.includes("LSHIFT")) {
    return parseShiftInstruction(value);
  }

  if (value.includes("OR")) {
    return parseOrInstruction(value);
  }

  if (value.includes("AND")) {
    return parseAndInstruction(value);
  }

  if (value.includes("NOT")) {
    return parseNotInstruction(value);
  }

  return parseMapInstruction(value);
}
