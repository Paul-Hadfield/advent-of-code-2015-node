import { getDistanceCovered } from "./get-distance-covered.ts";
import { getPacePeriodsAndRemainder } from "./get-pace-periods-and-remainder.ts";

const cometPace = {
  speedKms: 14,
  duration: 10,
  restPeriod: 127,
};

const dancerPace = {
  speedKms: 16,
  duration: 11,
  restPeriod: 162,
};

const cometResult = getDistanceCovered(
  getPacePeriodsAndRemainder(2503, cometPace),
);
const dancerResult = getDistanceCovered(
  getPacePeriodsAndRemainder(2503, dancerPace),
);

console.log(cometResult, dancerResult);

console.log(Math.max(cometResult, dancerResult));
