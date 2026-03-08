import { getPoint } from "./get-point.ts";
import type { Point } from "./point.ts";

export function getPoints(value: string): Point[] {
  const values = value.split(" through ");
  return [getPoint(values[0]!), getPoint(values[1]!)];
}
