export function hasAtLeast3Vowels(value: string): boolean {
  let count = 0;
  value.split("").forEach((char) => {
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;
      default:
        break;
    }
  });

  return count >= 3;
}
