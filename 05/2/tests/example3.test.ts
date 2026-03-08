import { expect, test } from "vitest";

import { isNiceString } from "../is-nice-string.ts";
import { hasRepeatingCharacter } from "../has-repeating-character.ts";
import { hasRepeatingValue } from "../has-repeating-value.ts";

const VALUE = "uurcxstgmygtbstg";

test("example 3 - Has Repeating Character", () => {
  expect(hasRepeatingCharacter(VALUE)).toEqual(false);
});

test("example 3 - has Repeating Value", () => {
  expect(hasRepeatingValue(VALUE)).toEqual(true);
});

test("example 3 - Is a nice string", () => {
  expect(isNiceString(VALUE)).toEqual(false);
});
