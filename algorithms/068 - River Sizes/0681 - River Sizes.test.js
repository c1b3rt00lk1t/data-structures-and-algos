const riverSizes = require("./0681 - River Sizes");

describe("Test suite for river sizes", () => {
  it("Test simple matrix with adjacent river cells", () => {
    const matrix = [
      [1, 0],
      [1, 0],
    ];
    const expected = [2];
    const result = riverSizes(matrix);
    expect(result).toStrictEqual(expected);
  });

  it("Test simple matrix with no adjacent river cells", () => {
    const matrix = [
      [1, 0],
      [0, 1],
    ];
    const expected = [1, 1];
    const result = riverSizes(matrix);
    expect(result).toStrictEqual(expected);
  });
});
