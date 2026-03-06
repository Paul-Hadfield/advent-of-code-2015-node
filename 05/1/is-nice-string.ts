import { hasAtLeast2RepeatingCharacters } from "./has-atleast-2-repeating-characters.ts";
import { hasAtLeast3Vowels } from "./has-atleast-3-vowels.ts";
import { hasBannedValues } from "./has-banned-values.ts";

export function isNiceString(value: string): boolean {
  if (hasBannedValues(value)) {
    return false;
  }

  return hasAtLeast2RepeatingCharacters(value) && hasAtLeast3Vowels(value);
}
