import type { Box } from "./box.ts";

export function calculateRequiredPaper(box: Box): number {
  return (
    2 * box.length * box.width +
    2 * box.width * box.height +
    2 * box.height * box.length +
    Math.min(
      box.length * box.width,
      box.length * box.height,
      box.width * box.height,
    )
  );
}
