export function calculateRequiredRibbon(box: Box): number {
  const dimensions = [box.length, box.width, box.height];

  dimensions.sort((a, b) => a - b);

  const perimeter = 2 * (dimensions[0] + dimensions[1]);

  const volume = dimensions[0] * dimensions[1] * dimensions[2];

  return perimeter + volume;
}
