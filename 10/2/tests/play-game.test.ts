import { expect, test } from "vitest";
import { playGame } from "../play-game.ts";

test("1", () => {
  expect(playGame("1")).toEqual("11");
});

test("11", () => {
  expect(playGame("11")).toEqual("21");
});

test("211", () => {
  expect(playGame("211")).toEqual("1221");
});
