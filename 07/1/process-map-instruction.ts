import { getInputValue } from "./get-input-value.ts";
import type { MapInstruction } from "./instructions/map-instruction.ts";

export function processMapInstruction(
  instruction: MapInstruction,
  gates: Map<string, number>,
): void {
  const input = getInputValue(instruction.input, gates);
  if (input === undefined) {
    return;
  }

  gates.set(instruction.output.identifier, input);
  instruction.processed = true;
}
