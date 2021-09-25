import * as U from "./utils";

test("accept numeric value", () => {
  expect(U.acceptDecimalValue("12")).toEqual(true);
  expect(U.acceptDecimalValue("12.")).toEqual(true);
  expect(U.acceptDecimalValue("12.34")).toEqual(true);
  expect(U.acceptDecimalValue("-")).toEqual(true);
  expect(U.acceptDecimalValue("-3")).toEqual(true);
  expect(U.acceptDecimalValue("-3.")).toEqual(true);
  expect(U.acceptDecimalValue("-3.9")).toEqual(true);
  expect(U.acceptDecimalValue("x")).toEqual(false);
  expect(U.acceptDecimalValue(" -")).toEqual(false);
  expect(U.acceptDecimalValue(" 2")).toEqual(false);
});
