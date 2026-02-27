import type { Box } from "./box.ts";

export function parseBox(dimensions: string): Box {
  const values = dimensions.split("x");
  return {
    length: parseInt(values[0]),
    width: parseInt(values[1]),
    height: parseInt(values[2]),
  };
}
