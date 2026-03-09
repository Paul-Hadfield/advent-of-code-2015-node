import type { InputSignal } from "./instructions/input-signal.ts";
import type { Wire } from "./instructions/wire.ts";

function isNumeric(value: string): boolean {
  return !isNaN(parseFloat(value));
}

export function parseInput(value: string): InputSignal | Wire {
  if (isNumeric(value)) {
    return {
      type: "signal",
      value: parseInt(value),
    };
  }

  return {
    type: "wire",
    identifier: value,
  };
}
