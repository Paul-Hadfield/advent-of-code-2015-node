import { getInputValue } from "./get-input-value.ts";
import type { NotInstruction } from "./instructions/not-instruction.ts";

export function processNotInstruction(
  instruction: NotInstruction,
  gates: Map<string, number>,
): void {
  const input = getInputValue(instruction.input, gates);
  if (input === undefined) {
    return;
  }

  const binaryVersion = input.toString(2).padStart(16, "0");

  let newValue = "";
  binaryVersion.split("").forEach((char) => {
    if (char === "0") {
      newValue = newValue + "1";
    } else {
      newValue = newValue + "0";
    }
  });

  gates.set(instruction.output.identifier, parseInt(newValue, 2));
  instruction.processed = true;
}
