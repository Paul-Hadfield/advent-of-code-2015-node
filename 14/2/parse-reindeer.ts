import type { ReindeerPace } from "./reindeer-pace.ts";

export type NamedReindeer = {
  name: string;
  pace: ReindeerPace;
};

const LINE =
  /^(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\.?$/;

export function parseReindeerLine(line: string): NamedReindeer {
  const m = line.trim().match(LINE);
  if (!m) {
    throw new Error(`Unrecognized reindeer line: ${line}`);
  }
  return {
    name: m[1]!,
    pace: {
      speedKms: Number(m[2]),
      duration: Number(m[3]),
      restPeriod: Number(m[4]),
    },
  };
}
