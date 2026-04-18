import { expect, test } from "vitest";
import { getInMemoryRepresentation } from "../get-inmemory-representation.ts";

test("blank string", () => {
  expect(getInMemoryRepresentation('""')).toBe("");
});

test("abc string", () => {
  expect(getInMemoryRepresentation('"abc"')).toBe("abc");
});

test("escaped double quote string", () => {
  expect(getInMemoryRepresentation('"aaa\\"aaa"')).toBe('aaa"aaa');
});

test("escaped double quote string", () => {
  expect(getInMemoryRepresentation('"\\x27"')).toBe("'");
});
