export function hasBannedValues(value: string): boolean {
  return (
    value.includes("ab") ||
    value.includes("cd") ||
    value.includes("pq") ||
    value.includes("xy")
  );
}
