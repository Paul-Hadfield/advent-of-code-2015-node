import { expect, test } from "vitest";

import { isNiceString } from "../is-nice-string.ts";
import { hasRepeatingCharacter } from "../has-repeating-character.ts";
import { hasRepeatingValue } from "../has-repeating-value.ts";

const VALUE = "xxyxx";

test("example 2 - Has Repeating Character", () => {
  expect(hasRepeatingCharacter(VALUE)).toEqual(true);
});

test("example 2 - has Repeating Value", () => {
  expect(hasRepeatingValue(VALUE)).toEqual(true);
});

test("example 2 - Is a nice string", () => {
  expect(isNiceString(VALUE)).toEqual(true);
});
