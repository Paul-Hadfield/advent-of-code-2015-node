import type { Point } from "./point.ts";

export function getPoint(value: string): Point {
  const values = value.split(",");
  return {
    x: parseInt(values[0]!),
    y: parseInt(values[1]!),
  };
}
