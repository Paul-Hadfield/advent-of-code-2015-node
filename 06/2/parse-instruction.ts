import { getPoints } from "./get-points.ts";
import type { Instruction } from "./instruction.ts";

export function parseInstruction(value: string): Instruction {
  if (value.startsWith("turn on ")) {
    const points = getPoints(value.substring(7).trim());
    return {
      command: "on",
      start: points[0]!,
      end: points[1]!,
    };
  }

  if (value.startsWith("toggle ")) {
    const points = getPoints(value.substring(6).trim());
    return {
      command: "toggle",
      start: points[0]!,
      end: points[1]!,
    };
  }

  if (value.startsWith("turn off ")) {
    const points = getPoints(value.substring(8).trim());
    return {
      command: "off",
      start: points[0]!,
      end: points[1]!,
    };
  }

  throw new Error("Unknown Exception");
}
