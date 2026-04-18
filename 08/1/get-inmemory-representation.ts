/**
 * Decodes a double-quoted string literal (AoC 2015 day 8) into its in-memory value.
 * Escapes: `\"`, `\\`, `\xNN` (hex).
 */
export function getInMemoryRepresentation(value: string): string {
  if (value.length < 2 || value[0] !== '"' || value[value.length - 1] !== '"') {
    return value;
  }

  const inner = value.slice(1, -1);
  let out = "";

  for (let i = 0; i < inner.length; i++) {
    const c = inner[i]!;
    if (c !== "\\") {
      out += c;
      continue;
    }

    const next = inner[i + 1];
    if (next === undefined) {
      out += "\\";
      break;
    }

    if (next === "\\" || next === '"') {
      out += next;
      i += 1;
      continue;
    }

    if (
      next === "x" &&
      i + 3 < inner.length &&
      /^[0-9a-fA-F]{2}$/.test(inner.slice(i + 2, i + 4))
    ) {
      const code = Number.parseInt(inner.slice(i + 2, i + 4), 16);
      out += String.fromCharCode(code);
      i += 3;
      continue;
    }

    out += "\\";
  }

  return out;
}
