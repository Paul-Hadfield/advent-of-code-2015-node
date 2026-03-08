import { hasRepeatingCharacter } from "./has-repeating-character.ts";
import { hasRepeatingValue } from "./has-repeating-value.ts";

export function isNiceString(value: string): boolean {
  return hasRepeatingCharacter(value) && hasRepeatingValue(value);
}
