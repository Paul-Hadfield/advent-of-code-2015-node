import { expect, test } from "vitest";
import { parseInstructions } from "../parse-instructions.ts";

test("parse example 3", () => {
  expect(parseInstructions("^v^v^v^v^v")).toEqual(11);
});
