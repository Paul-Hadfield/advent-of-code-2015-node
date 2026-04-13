import { test, expect } from "vitest";
import { groupDigits } from "../../group-digits.ts";

const digits = groupDigits("211");

test("211 - has two array items", () => {
  expect(digits.length).toEqual(2);
});

test("211 - element one value is 2", () => {
  expect(digits[0]?.value).toEqual(2);
});

test("211 - element one occurences is 1", () => {
  expect(digits[0]?.occurences).toEqual(1);
});

test("211 - element two value is 1", () => {
  expect(digits[1]?.value).toEqual(1);
});

test("211 - element twp occurences is 2", () => {
  expect(digits[1]?.occurences).toEqual(2);
});
