export function hasAtLeast2RepeatingCharacters(value: string): boolean {
  for (let i = 1; i < value.length; i++) {
    if (value[i] === value[i - 1]) return true;
  }
  return false;
}
