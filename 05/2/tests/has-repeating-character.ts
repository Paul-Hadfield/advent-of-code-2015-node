import { expect, test } from "vitest";
import { hasRepeatingValue } from "../has-repeating-value.ts";

test("example 1", () => {
  expect(hasRepeatingValue("xyxy")).toEqual(true);
});

test("example 2", () => {
  expect(hasRepeatingValue("aabcdefgaa")).toEqual(true);
});

test("example 3", () => {
  expect(hasRepeatingValue("aaa")).toEqual(false);
});
