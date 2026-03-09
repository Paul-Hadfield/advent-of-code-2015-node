import type { InputSignal } from "./input-signal.ts";
import type { Wire } from "./wire.ts";

export type MapInstruction = {
  command: "MAP";
  input: InputSignal | Wire;
  output: Wire;
  processed: boolean;
};
