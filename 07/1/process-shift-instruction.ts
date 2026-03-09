import { getInputValue } from "./get-input-value.ts";
import type { ShiftInstruction } from "./instructions/shift-instruction.ts";

export function processShiftInstruction(
  instruction: ShiftInstruction,
  gates: Map<string, number>,
): void {
  const input = getInputValue(instruction.input, gates);
  if (input === undefined) {
    return;
  }

  if (instruction.direction === "R") {
    gates.set(instruction.output.identifier, input >> instruction.step);
  } else {
    gates.set(instruction.output.identifier, input << instruction.step);
  }

  instruction.processed = true;
}
