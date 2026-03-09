import { getInputValue } from "./get-input-value.ts";
import type { OrInstruction } from "./instructions/or-instruction.ts";

export function processOrInstruction(
  instruction: OrInstruction,
  gates: Map<string, number>,
): void {
  const leftInput = getInputValue(instruction.leftInput, gates);
  const rightInput = getInputValue(instruction.rightInput, gates);
  if (leftInput === undefined || rightInput === undefined) {
    return;
  }

  const result = leftInput | rightInput;
  gates.set(instruction.output.identifier, result);
  instruction.processed = true;
}
