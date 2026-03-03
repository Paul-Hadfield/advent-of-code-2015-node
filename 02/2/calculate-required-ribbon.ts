import type { Box } from "./box.ts";

export function calculateRequiredRibbon(box: Box): number {
  const dimensions: number[] = [box.length, box.width, box.height];

  dimensions.sort((a, b) => a - b);
  if (
    dimensions[0] === undefined ||
    dimensions[1] === undefined ||
    dimensions[2] === undefined
  ) {
    throw new Error("Invalid box dimensions");
  }

  const perimeter = 2 * (dimensions[0] + dimensions[1]);

  const volume = dimensions[0] * dimensions[1] * dimensions[2];

  return perimeter + volume;
}
