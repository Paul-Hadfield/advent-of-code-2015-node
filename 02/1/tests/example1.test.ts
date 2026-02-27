import { expect, test } from "vitest";

import { parseBox, calculateRequiredPaper } from "../program";

const BOX = { length: 2, width: 3, height: 4 };

test("parse example 1", () => {
  expect(parseBox("2x3x4")).toEqual(BOX);
});

test("calculate example 1", () => {
  expect(calculateRequiredPaper(BOX)).toBe(58);
});
