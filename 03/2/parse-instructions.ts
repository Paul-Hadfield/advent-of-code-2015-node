import { nextPosition } from "./next-position.ts";
import type { Position } from "./position.ts";

function parseKey(position: Position): string {
  return `${position.x}_${position.y}`;
}

export function parseInstructions(instructions: string): number {
  const startingPosition: Position = { x: 0, y: 0 };
  const visitedHouses = new Set<string>();
  visitedHouses.add(parseKey(startingPosition));

  const santasInstructions: string[] = instructions
    .split("")
    .filter(evenOnly, new Array<string>());

  const roboSantasInstructions: string[] = instructions
    .split("")
    .filter(oddOnly, new Array<string>());

  let position = startingPosition;
  santasInstructions.forEach((instruction) => {
    position = nextPosition(position, instruction);
    visitedHouses.add(parseKey(position));
  });

  position = startingPosition;
  roboSantasInstructions.forEach((instruction) => {
    position = nextPosition(position, instruction);
    visitedHouses.add(parseKey(position));
  });

  return visitedHouses.size;
}

function evenOnly(_: string, index: number): _ is string {
  return (index + 1) % 2 === 0;
}

function oddOnly(_: string, index: number): _ is string {
  return (index + 1) % 2 !== 0;
}
