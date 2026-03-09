import { parseInstruction } from "./parse-instruction.ts";

function upsert(
  lightsOn: Map<string, number>,
  key: string,
  increment: number,
): void {
  const value = lightsOn.get(key) ?? 0;
  lightsOn.set(key, value + increment);
}

export function determineCurrentLightStatus(
  lightsOn: Map<string, number>,
  currentValue: string,
): Map<string, number> {
  const instruction = parseInstruction(currentValue);

  for (let x = instruction.start.x; x <= instruction.end.x; x++) {
    for (let y = instruction.start.y; y <= instruction.end.y; y++) {
      const key = `${x}_${y}`;
      switch (instruction.command) {
        case "on":
          upsert(lightsOn, key, 1);
          break;
        case "off":
          if (lightsOn.has(key)) {
            const value = lightsOn.get(key);
            if (value !== undefined && value > 0) {
              lightsOn.set(key, value - 1);
            }
          }
          break;
        case "toggle":
          upsert(lightsOn, key, 2);
          break;
        default:
          throw new Error("unknown command");
      }
    }
  }

  return lightsOn;
}
