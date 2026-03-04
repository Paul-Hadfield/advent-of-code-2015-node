import { expect, test } from "vitest";
import { getLowestQualifyingHash } from "../get-lowest-qualifying-hash.ts";

test("parse example 1", () => {
  expect(getLowestQualifyingHash("pqrstuv")).toEqual(1048970);
});
