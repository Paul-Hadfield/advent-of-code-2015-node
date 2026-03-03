import { expect, test } from "vitest";
import { parseInstructions } from "../parse-instructions.ts";

test("parse example 1", () => {
  expect(parseInstructions("^v")).toEqual(3);
});
