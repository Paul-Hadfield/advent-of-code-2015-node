import type { InputSignal } from "./input-signal.ts";
import type { Wire } from "./wire.ts";

export type NotInstruction = {
  command: "NOT";
  input: InputSignal | Wire;
  output: Wire;
  processed: boolean;
};
