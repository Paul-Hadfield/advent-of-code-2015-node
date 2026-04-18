import { getInMemoryRepresentation } from "./get-inmemory-representation.ts";

export function getStringLenDifference(value: string): number {
  return value.length - getInMemoryRepresentation(value).length;
}
