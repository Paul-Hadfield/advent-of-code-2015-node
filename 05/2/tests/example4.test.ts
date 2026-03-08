import { expect, test } from "vitest";

import { isNiceString } from "../is-nice-string.ts";
import { hasRepeatingCharacter } from "../has-repeating-character.ts";
import { hasRepeatingValue } from "../has-repeating-value.ts";

const VALUE = "ieodomkazucvgmuy";

test("example 4 - Has Repeating Character", () => {
  expect(hasRepeatingCharacter(VALUE)).toEqual(true);
});

test("example 4 - has Repeating Value", () => {
  expect(hasRepeatingValue(VALUE)).toEqual(false);
});

test("example 4 - Is a nice string", () => {
  expect(isNiceString(VALUE)).toEqual(false);
});
