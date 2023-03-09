import { sum } from "../../src/matchers/sum";

describe("sum function", () => {
  it("should return 2 for add(4,2)", () => {
    expect(sum()).toBe(0);
  });
  it("should return 2 for sum(2,2)", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
