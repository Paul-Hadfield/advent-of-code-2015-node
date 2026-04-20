import type { ReindeerPace } from "./reindeer-pace.ts";

export type Result = {
  pace: ReindeerPace;
  pacePeriods: number;
  remainingSeconds: number;
};

export function getPacePeriodsAndRemainder(
  elapsedTime: number,
  pace: ReindeerPace,
): Result {
  const cycleDuration = pace.duration + pace.restPeriod;
  const pacePeriods = Math.floor(elapsedTime / cycleDuration);
  return {
    pace,
    pacePeriods,
    remainingSeconds: elapsedTime - cycleDuration * pacePeriods,
  };
}
