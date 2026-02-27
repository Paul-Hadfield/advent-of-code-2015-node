export type Box = {
  length: number;
  width: number;
  height: number;
};

export function parseBox(dimensions: string): Box {
  const values = dimensions.split("x");
  return {
    length: parseInt(values[0]),
    width: parseInt(values[1]),
    height: parseInt(values[2]),
  };
}

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
