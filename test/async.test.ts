import { fetchData } from "../src/async";

describe("concatenate function", () => {
  test("the data is peanut butter", async () => {
    const res = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    const data = await fetchData();
    expect(data).toEqual(res);
  });
});
