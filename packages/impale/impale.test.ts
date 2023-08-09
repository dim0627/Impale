import { expect, test } from "vitest";
import { impale } from "./impale";

const fn = (input: string) => {
  if (input === "foo") {
    return impale.err(new Error("input can't be foo"));
  }

  return impale.ok(input);
};

test.each([
  {
    input: "hello",
    expectation: { res: "hello", ok: true },
  },
  {
    input: "foo",
    expectation: { res: null, ok: false },
  },
])("fn($input) -> $expectation", ({ input, expectation }) => {
  expect(fn(input)).toEqual(expectation);
});
