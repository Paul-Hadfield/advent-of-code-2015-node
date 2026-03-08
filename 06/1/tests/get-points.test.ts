import { expect, test } from "vitest";
import { getPoints } from "../get-points.ts";

test("example 1", () => {
  expect(getPoints("0,0 through 999,999")).toEqual([
    { x: 0, y: 0 },
    { x: 999, y: 999 },
  ]);
});

test("example 2", () => {
  expect(getPoints("50,0 through 100,250")).toEqual([
    { x: 50, y: 0 },
    { x: 100, y: 250 },
  ]);
});
