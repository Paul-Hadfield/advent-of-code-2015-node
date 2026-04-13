import { playGame } from "./play-game.ts";

export function playGames(value: string, repeat: number): string {
  let newValue = value;
  for (let i = 0; i < repeat; i++) {
    newValue = playGame(newValue);
  }
  return newValue;
}
