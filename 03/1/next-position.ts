import type { Position } from "./position.ts";

export function nextPosition(
  currentPosition: Position,
  direction: string,
): Position {
  switch (direction) {
    case "^":
      return { x: currentPosition.x, y: currentPosition.y + 1 };
    case "v":
      return { x: currentPosition.x, y: currentPosition.y - 1 };
    case "<":
      return { x: currentPosition.x - 1, y: currentPosition.y };
    case ">":
      return { x: currentPosition.x + 1, y: currentPosition.y };
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
}
