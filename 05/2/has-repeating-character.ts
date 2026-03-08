export function hasRepeatingCharacter(value: string): boolean {
  if (value.length < 3) {
    return false;
  }

  for (let i = 2; i < value.length; i++) {
    if (value[i] === value[i - 2]) return true;
  }
  return false;
}
