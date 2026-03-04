import { expect, test } from "vitest";
import { getLowestQualifyingHash } from "../get-lowest-qualifying-hash.ts";

test("parse example 1", () => {
  expect(getLowestQualifyingHash("abcdef")).toEqual(609043);
});
