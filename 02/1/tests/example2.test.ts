import { expect, test } from "vitest";

import { parseBox, calculateRequiredPaper } from "../program";

const BOX = { length: 1, width: 1, height: 10 };

test("parse example 2", () => {
  expect(parseBox("1x1x10")).toEqual(BOX);
});

test("calculate example 2", () => {
  expect(calculateRequiredPaper(BOX)).toBe(43);
});
