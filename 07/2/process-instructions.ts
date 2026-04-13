import type { Instruction } from "./instructions/instruction.ts";
import { processAndInstruction } from "./process-and-instruction.ts";
import { processMapInstruction } from "./process-map-instruction.ts";
import { processNotInstruction } from "./process-not-instruction.ts";
import { processOrInstruction } from "./process-or-instruction.ts";
import { processShiftInstruction } from "./process-shift-instruction.ts";

export function processInstructions(
  instructions: Array<Instruction>,
): Map<string, number> {
  const gates = new Map<string, number>();
  while (true) {
    const instructionsToProcess = instructions.filter(
      (instruction) => !instruction.processed,
    );
    if (instructionsToProcess.length === 0) {
      return gates;
    }

    instructionsToProcess.forEach((instruction) => {
      switch (instruction.command) {
        case "AND":
          processAndInstruction(instruction, gates);
          break;
        case "NOT":
          processNotInstruction(instruction, gates);
          break;
        case "OR":
          processOrInstruction(instruction, gates);
          break;
        case "SHIFT":
          processShiftInstruction(instruction, gates);
          break;
        case "MAP":
          processMapInstruction(instruction, gates);
          break;
        default:
          throw new Error("Unknown command!");
      }
    });
  }
}
