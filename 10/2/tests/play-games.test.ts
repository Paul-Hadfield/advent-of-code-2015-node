import { expect, test } from "vitest";
import { playGames } from "../play-games.ts";

test("1, repeated 5 times", () => {
  expect(playGames("1", 5)).toEqual("312211");
});
