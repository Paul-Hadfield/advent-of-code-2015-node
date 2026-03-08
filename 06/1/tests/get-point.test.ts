import { expect, test } from "vitest";
import { getPoint } from "../get-point.ts";

test("example 1", () => {
  expect(getPoint("0,0")).toEqual({ x: 0, y: 0 });
});

test("example 2", () => {
  expect(getPoint("499,250")).toEqual({ x: 499, y: 250 });
});
