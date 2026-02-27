import { expect, test } from "vitest";

import type { Box } from "../box";
import { parseBox } from "../parse-box";
import { calculateRequiredPaper } from "../calculate-required-paper";

const BOX: Box = { length: 1, width: 1, height: 10 };

test("parse example 2", () => {
  expect(parseBox("1x1x10")).toEqual(BOX);
});

test("calculate example 2", () => {
  expect(calculateRequiredPaper(BOX)).toBe(43);
});
