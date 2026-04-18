import { expect, test } from "vitest";
import { getStringLenDifference } from "../get-string-len-difference.ts";

test("blank string", () => {
  expect(getStringLenDifference('""')).toBe(2);
});

test("abc string", () => {
  expect(getStringLenDifference('"abc"')).toBe(2);
});

test("escaped double quote string", () => {
  expect(getStringLenDifference('"aaa\\"aaa"')).toBe(3);
});

test("escaped double quote string", () => {
  expect(getStringLenDifference('"\\x27"')).toBe(5);
});
