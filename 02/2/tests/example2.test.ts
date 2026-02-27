import { expect, test } from "vitest";

import type { Box } from "../box";
import { parseBox } from "../parse-box";
import { calculateRequiredRibbon } from "../calculate-required-ribbon";

const BOX: Box = { length: 1, width: 1, height: 10 };

test("parse example 2", () => {
  expect(parseBox("1x1x10")).toEqual(BOX);
});

test("calculate ribbon 2", () => {
  expect(calculateRequiredRibbon(BOX)).toBe(14);
});
