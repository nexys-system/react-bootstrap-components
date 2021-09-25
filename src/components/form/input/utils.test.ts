import * as U from "./utils";

test("accept numeric value", () => {
  expect(U.acceptNumericValue("12")).toEqual(true);
  expect(U.acceptNumericValue("12.")).toEqual(true);
  expect(U.acceptNumericValue("12.34")).toEqual(true);
  expect(U.acceptNumericValue("-")).toEqual(true);
  expect(U.acceptNumericValue("-3")).toEqual(true);
  expect(U.acceptNumericValue("-3.")).toEqual(true);
  expect(U.acceptNumericValue("-3.9")).toEqual(true);
  expect(U.acceptNumericValue("x")).toEqual(false);
  expect(U.acceptNumericValue(" -")).toEqual(false);
  expect(U.acceptNumericValue(" 2")).toEqual(false);
});
