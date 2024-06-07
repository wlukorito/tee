const handleArray = require("./handleArray");

describe("handleArray", () => {
  it("should return correct result", () => {
    const input = [
      { id: 1, name: "Christine" },
      { id: 2, name: "Luko" },
      { id: 3, name: "Castro" },
    ];

    const expected = ["Christine-1", "Luko-2", "Castro-3"];

    const result = handleArray(input);

    expect(result).toEqual(expected);
  });

  it("should return empty array for empty input array", () => {
    expect(handleArray([])).toEqual([]);
  });

  it("should return correct result", () => {
    const input = [{ id: 1, name: "" }, { id: 2, name: "Luko" }, { id: 3 }];

    const expected = ["Unknown-1", "Luko-2", "Missing-3"];

    const result = handleArray(input);

    expect(result).toEqual(expected);
  });
});
