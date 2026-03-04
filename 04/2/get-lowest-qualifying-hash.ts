import { createHash } from "node:crypto";

export function getLowestQualifyingHash(secret: string): number {
  let notMatched = true;
  let number = 0;
  while (notMatched) {
    number++;
    const hash = createHash("MD5");
    hash.update(`${secret}${number}`);
    if (hash.digest("hex").startsWith("000000")) {
      notMatched = false;
    }
  }

  return number;
}
