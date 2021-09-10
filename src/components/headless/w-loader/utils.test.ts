import * as U from "./utils";

describe("is null type", () => {
  test("true", () => {
    expect(U.isNullType({}, "null")).toEqual(true);
  });

  test("false", () => {
    expect(U.isNullType("null", "null")).toEqual(false);
  });
});
