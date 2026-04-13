import type { InputSignal } from "./input-signal.ts";
import type { Wire } from "./wire.ts";

export type AndInstruction = {
  command: "AND";
  leftInput: InputSignal | Wire;
  rightInput: InputSignal | Wire;
  output: Wire;
  processed: boolean;
};
