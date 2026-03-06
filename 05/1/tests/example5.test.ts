import { expect, test } from "vitest";

import { hasBannedValues } from "../has-banned-values.ts";
import { hasAtLeast3Vowels } from "../has-atleast-3-vowels.ts";
import { hasAtLeast2RepeatingCharacters } from "../has-atleast-2-repeating-characters.ts";
import { isNiceString } from "../is-nice-string.ts";

const VALUE = "dvszwmarrgswjxmb";

test("example 5 - No Banned Values", () => {
  expect(hasBannedValues(VALUE)).toEqual(false);
});

test("example 5 - Dont not have at least 3 Vowels", () => {
  expect(hasAtLeast3Vowels(VALUE)).toEqual(false);
});

test("example 5 - At least 2 repeating characters", () => {
  expect(hasAtLeast2RepeatingCharacters(VALUE)).toEqual(true);
});

test("example 5 - Is a nice string", () => {
  expect(isNiceString(VALUE)).toEqual(false);
});
