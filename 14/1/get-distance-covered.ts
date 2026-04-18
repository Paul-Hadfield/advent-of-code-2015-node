import type { Result } from "./get-pace-periods-and-remainder.ts";

export function getDistanceCovered(result: Result): number {
  return (
    result.pace.speedKms * result.pace.duration * result.pacePeriods +
    Math.min(result.pace.duration, result.remainingSeconds) *
      result.pace.speedKms
  );
}
