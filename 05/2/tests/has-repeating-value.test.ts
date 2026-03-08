import { expect, test } from "vitest";
import { hasRepeatingCharacter } from "../has-repeating-character.ts";

test("example 1", () => {
  expect(hasRepeatingCharacter("xyx")).toEqual(true);
});

test("example 2", () => {
  expect(hasRepeatingCharacter("abcdefeghi")).toEqual(true);
});

test("example 3", () => {
  expect(hasRepeatingCharacter("aaa")).toEqual(true);
});

test("example 4", () => {
  expect(hasRepeatingCharacter("abcdefgehi")).toEqual(false);
});

test("example 5", () => {
  expect(hasRepeatingCharacter("aa")).toEqual(false);
});
