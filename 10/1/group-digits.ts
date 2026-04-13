export type DigitGroup = {
  value: number;
  occurences: number;
};

function reduceDigits(
  previousValue: DigitGroup[],
  currentValue: string,
): DigitGroup[] {
  const value = parseInt(currentValue);
  if (
    previousValue.length === 0 ||
    previousValue[previousValue.length - 1]?.value !== value
  ) {
    previousValue.push({ value, occurences: 1 });
    return previousValue;
  }

  previousValue[previousValue.length - 1]!.occurences++;
  return previousValue;
}

export function groupDigits(value: string): Array<DigitGroup> {
  const values = value.split("");
  return values.reduce(reduceDigits, new Array<DigitGroup>());
}
