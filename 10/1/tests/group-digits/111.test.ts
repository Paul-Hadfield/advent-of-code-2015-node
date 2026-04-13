import { test, expect } from "vitest";
import { groupDigits } from "../../group-digits.ts";

const digits = groupDigits("111");

test("211 - has one array item", () => {
  expect(digits.length).toEqual(1);
});

test("111 - element one value is 1", () => {
  expect(digits[0]?.value).toEqual(1);
});

test("111 - element one occurences is 3", () => {
  expect(digits[0]?.occurences).toEqual(3);
});
