import type { Box } from "./box.ts";

export function parseBox(dimensions: string): Box {
  const values = dimensions.split("x");

  if (values.length !== 3) {
    throw new Error("Invalid box dimensions");
  }

  if (
    values[0] === undefined ||
    values[1] === undefined ||
    values[2] === undefined
  ) {
    throw new Error("Invalid box dimensions");
  }

  return {
    length: parseInt(values[0]),
    width: parseInt(values[1]),
    height: parseInt(values[2]),
  };
}
