import type { InputSignal } from "./instructions/input-signal.ts";
import type { Wire } from "./instructions/wire.ts";

export function getInputValue(
  input: InputSignal | Wire,
  gates: Map<string, number>,
): number | undefined {
  if (input.type === "signal") {
    return input.value;
  }

  if (!gates.has(input.identifier)) {
    return undefined;
  }

  return gates.get(input.identifier);
}
