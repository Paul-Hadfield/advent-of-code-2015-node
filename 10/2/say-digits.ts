import type { DigitGroup } from "./digit-group.ts";

function sayDigit(digit: DigitGroup): string {
  return digit.occurences.toString() + digit.value.toString();
}

export function sayDigits(digits: DigitGroup[]): string {
  return digits.map(sayDigit).join("");
}
