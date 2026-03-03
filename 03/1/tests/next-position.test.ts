import { expect, test } from "vitest";
import { nextPosition } from "../next-position.ts";

test("Up", () => {
  expect(nextPosition({ x: 0, y: 0 }, "^")).toEqual({ x: 0, y: 1 });
});

test("Down", () => {
  expect(nextPosition({ x: 0, y: 0 }, "v")).toEqual({ x: 0, y: -1 });
});

test("Left", () => {
  expect(nextPosition({ x: 0, y: 0 }, "<")).toEqual({ x: -1, y: 0 });
});

test("Right", () => {
  expect(nextPosition({ x: 0, y: 0 }, ">")).toEqual({ x: 1, y: 0 });
});
