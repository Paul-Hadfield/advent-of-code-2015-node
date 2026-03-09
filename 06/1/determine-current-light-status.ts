import { parseInstruction } from "./parse-instruction.ts";

export function determineCurrentLightStatus(
  lightsOn: Set<string>,
  currentValue: string,
): Set<string> {
  const instruction = parseInstruction(currentValue);

  for (let x = instruction.start.x; x <= instruction.end.x; x++) {
    for (let y = instruction.start.y; y <= instruction.end.y; y++) {
      const key = `${x}_${y}`;
      switch (instruction.command) {
        case "on":
          lightsOn.add(key);
          break;
        case "off":
          lightsOn.delete(key);
          break;
        case "toggle":
          if (lightsOn.has(key)) {
            lightsOn.delete(key);
          } else {
            lightsOn.add(key);
          }
          break;
        default:
          throw new Error("unknown command");
      }
    }
  }

  return lightsOn;
}
