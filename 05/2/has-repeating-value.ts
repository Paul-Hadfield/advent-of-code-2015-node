export function hasRepeatingValue(value: string): boolean {
  const part = value.slice(0, 2);
  const toCheck = value.substring(2);

  if (toCheck.length < 2) {
    return false;
  }

  if (toCheck.includes(part)) {
    return true;
  }

  return hasRepeatingValue(value.substring(1));
}
