import type { Point } from "./point.ts";

export type Instruction = {
  command: "on" | "off" | "toggle";
  start: Point;
  end: Point;
};
