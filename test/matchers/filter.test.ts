import {filterArray} from "../../src/matchers/filter"

describe("filter array function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterArray(input, "link")).toEqual(output);
    expect(filterArray(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (uRL)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
    ];

    expect(filterArray(input, "uRL")).toEqual(output);
  });

  test("it should throw when searchTerm is empty string", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    expect(() => filterArray(input, "")).toThrow(Error);
  });

});
