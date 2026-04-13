import type { InputSignal } from "./input-signal.ts";
import type { Wire } from "./wire.ts";

export type ShiftInstruction = {
  command: "SHIFT";
  input: InputSignal | Wire;
  direction: "L" | "R";
  step: number;
  output: Wire;
  processed: boolean;
};
