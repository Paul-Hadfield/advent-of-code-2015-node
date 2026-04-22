import type { Aunt } from "./aunt.ts";
import type { MFCSAMRecord } from "./mfcsam_record.ts";

const BASE_KNOWLEDGE: MFCSAMRecord = {
  children: undefined,
  cats: undefined,
  samoyeds: undefined,
  pomeranians: undefined,
  akitas: undefined,
  vizslas: undefined,
  goldfish: undefined,
  trees: undefined,
  cars: undefined,
  perfumes: undefined,
};

function parseValue(
  record: Partial<MFCSAMRecord>,
  value: string,
): Partial<MFCSAMRecord> {
  const parts = value.trim().split(":");
  record[
    parts[0] as
      | "children"
      | "cats"
      | "samoyeds"
      | "pomeranians"
      | "akitas"
      | "vizslas"
      | "goldfish"
      | "trees"
      | "cars"
      | "perfumes"
  ] = parseInt(parts[1]!);
  return record;
}

export function parseAuntKnowledge(data: string, index: number): Aunt {
  const knowledge = data
    .substring(data.indexOf(":") + 2)
    .split(",")
    .reduce(parseValue, {});
  return {
    number: index + 1,
    knowledge: { ...BASE_KNOWLEDGE, ...knowledge },
  };
}
