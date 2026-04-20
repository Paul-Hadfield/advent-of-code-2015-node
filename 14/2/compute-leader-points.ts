import { getDistanceCovered } from "./get-distance-covered.ts";
import { getPacePeriodsAndRemainder } from "./get-pace-periods-and-remainder.ts";
import type { NamedReindeer } from "./parse-reindeer.ts";

/**
 * Each second t in 1..raceSeconds, every reindeer tied for max distance gets +1 point.
 */
export function computeLeaderPoints(
  reindeer: NamedReindeer[],
  raceSeconds: number,
): Map<string, number> {
  const points = new Map<string, number>();
  for (const { name } of reindeer) {
    points.set(name, 0);
  }

  for (let t = 1; t <= raceSeconds; t++) {
    const distances = reindeer.map((r) => ({
      name: r.name,
      d: getDistanceCovered(getPacePeriodsAndRemainder(t, r.pace)),
    }));
    const maxD = Math.max(...distances.map((x) => x.d));
    for (const { name, d } of distances) {
      if (d === maxD) {
        points.set(name, (points.get(name) ?? 0) + 1);
      }
    }
  }

  return points;
}
