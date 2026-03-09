import { expect, test } from "vitest";
import { parseInstruction } from "../parse-instruction.ts";

test("toogle", () => {
  expect(parseInstruction("toggle 0,0 through 999,0")).toEqual({
    command: "toggle",
    start: { x: 0, y: 0 },
    end: { x: 999, y: 0 },
  });
});

test("on", () => {
  expect(parseInstruction("turn on 0,0 through 999,999")).toEqual({
    command: "on",
    start: { x: 0, y: 0 },
    end: { x: 999, y: 999 },
  });
});

test("off", () => {
  expect(parseInstruction("turn off 499,499 through 500,500")).toEqual({
    command: "off",
    start: { x: 499, y: 499 },
    end: { x: 500, y: 500 },
  });
});
