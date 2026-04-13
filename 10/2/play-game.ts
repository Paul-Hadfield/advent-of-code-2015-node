import { groupDigits } from "./group-digits.ts";
import { sayDigits } from "./say-digits.ts";

export function playGame(value: string): string {
  return sayDigits(groupDigits(value));
}
