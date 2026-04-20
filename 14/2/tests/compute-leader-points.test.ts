import { expect, test } from "vitest";

import { computeLeaderPoints } from "../compute-leader-points.ts";
import { parseReindeerLine } from "../parse-reindeer.ts";

const EXAMPLE_LINES = [
  "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.",
  "Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.",
];

test("AoC example: 1000 seconds, two reindeer (Dancer wins points)", () => {
  const reindeer = EXAMPLE_LINES.map(parseReindeerLine);
  const points = computeLeaderPoints(reindeer, 1000);
  expect(points.get("Comet")).toBe(312);
  expect(points.get("Dancer")).toBe(689);
  expect(Math.max(...points.values())).toBe(689);
});
