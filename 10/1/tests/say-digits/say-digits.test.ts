import { test, expect } from "vitest";
import { sayDigits } from "../../say-digits.ts";

test("1 1", () => {
  expect(sayDigits([{ value: 1, occurences: 1 }])).toEqual("11");
});

test("1 2, 2 1's", () => {
  expect(
    sayDigits([
      { value: 2, occurences: 1 },
      { value: 1, occurences: 2 },
    ]),
  ).toEqual("1221");
});

test("3 1's", () => {
  expect(sayDigits([{ value: 1, occurences: 3 }])).toEqual("31");
});
