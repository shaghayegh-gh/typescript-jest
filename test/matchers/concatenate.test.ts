import { concatenate } from "../../src/matchers/concatenate";

describe("concatenate function", () => {
  it("should concatenate obj1 and obj2", () => {
    const obj1 = { one: 1, two: 2 };
    const obj2 = { three: 3 };
    const output = { one: 1, two: 2, three: 3 };
    expect(concatenate(obj1, obj2)).toEqual(output);
  });
});
