import { expect, test } from "vitest";
import { parseInstructions } from "../parse-instructions.ts";

test("parse example 2", () => {
  expect(parseInstructions("^>v<")).toEqual(4);
});
