import { expect, test } from "vitest";

import type { Box } from "../box";
import { parseBox } from "../parse-box";
import { calculateRequiredRibbon } from "../calculate-required-ribbon";

const BOX: Box = { length: 2, width: 3, height: 4 };

test("parse example 1", () => {
  expect(parseBox("2x3x4")).toEqual(BOX);
});

test("calculate ribbon 1", () => {
  expect(calculateRequiredRibbon(BOX)).toBe(34);
});
