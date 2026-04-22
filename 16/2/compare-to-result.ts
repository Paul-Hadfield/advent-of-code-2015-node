import type { Aunt } from "./aunt.ts";
import type { MFCSAMRecord } from "./mfcsam_record.ts";

export function compareToResult(
  value: Aunt,
  anaylsis: MFCSAMRecord,
): value is Aunt {
  if (
    value.knowledge.children !== undefined &&
    value.knowledge.children !== anaylsis.children
  ) {
    return false;
  }
  if (
    value.knowledge.cats !== undefined &&
    value.knowledge.cats <= anaylsis.cats!
  ) {
    return false;
  }
  if (
    value.knowledge.samoyeds !== undefined &&
    value.knowledge.samoyeds !== anaylsis.samoyeds
  ) {
    return false;
  }
  if (
    value.knowledge.pomeranians !== undefined &&
    value.knowledge.pomeranians >= anaylsis.pomeranians!
  ) {
    return false;
  }
  if (
    value.knowledge.akitas !== undefined &&
    value.knowledge.akitas !== anaylsis.akitas
  ) {
    return false;
  }
  if (value.knowledge.vizslas && value.knowledge.vizslas !== anaylsis.vizslas) {
    return false;
  }
  if (
    value.knowledge.goldfish !== undefined &&
    value.knowledge.goldfish >= anaylsis.goldfish!
  ) {
    return false;
  }
  if (
    value.knowledge.trees !== undefined &&
    value.knowledge.trees <= anaylsis.trees!
  ) {
    return false;
  }
  if (
    value.knowledge.cars !== undefined &&
    value.knowledge.cars !== anaylsis.cars
  ) {
    return false;
  }
  if (
    value.knowledge.perfumes !== undefined &&
    value.knowledge.perfumes !== anaylsis.perfumes
  ) {
    return false;
  }
  return true;
}
