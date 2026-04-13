import { getInputValue } from "./get-input-value.ts";
import type { AndInstruction } from "./instructions/and-instruction.ts";

export function processAndInstruction(
  instruction: AndInstruction,
  gates: Map<string, number>,
): void {
  /*if ((instruction.output.identifier = "h")) {
    console.log(instruction);
    }*/
  const leftInput = getInputValue(instruction.leftInput, gates);
  const rightInput = getInputValue(instruction.rightInput, gates);
  if (leftInput === undefined || rightInput === undefined) {
    return;
  }

  const result = leftInput & rightInput;
  gates.set(instruction.output.identifier, result);
  instruction.processed = true;
}
