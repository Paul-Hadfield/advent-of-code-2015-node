import { nextPosition } from "./next-position.ts";
import type { Position } from "./position.ts";

function parseKey(position: Position): string {
  return `${position.x}_${position.y}`;
}

export function parseInstructions(instructions: string): number {
  let position: Position = { x: 0, y: 0 };
  const visitedHouses = new Set<string>();
  visitedHouses.add(parseKey(position));

  instructions.split("").forEach((instruction) => {
    position = nextPosition(position, instruction);
    visitedHouses.add(parseKey(position));
  });

  return visitedHouses.size;
}
