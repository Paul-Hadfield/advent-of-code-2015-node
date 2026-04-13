import type { AndInstruction } from "./and-instruction.ts";
import type { MapInstruction } from "./map-instruction.ts";
import type { NotInstruction } from "./not-instruction.ts";
import type { OrInstruction } from "./or-instruction.ts";
import type { ShiftInstruction } from "./shift-instruction.ts";

export type Instruction =
  | AndInstruction
  | ShiftInstruction
  | OrInstruction
  | MapInstruction
  | NotInstruction;
