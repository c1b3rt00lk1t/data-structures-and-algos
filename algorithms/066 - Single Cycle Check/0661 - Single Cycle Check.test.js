const hasSingleCycle = require("./0661 - Single Cycle Check");

describe("Syngle Cycle Check testing", () => {
  xtest("test 1: returns true with a correct array", () => {
    const array = [2, 3, 1, -4, -4, 2];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 2: returns true with a correct array", () => {
    const array = [2, 2, -1];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 3: returns true with a correct array", () => {
    const array = [2, 2, 2];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 4: returns true with a correct array", () => {
    const array = [1, 1, 1, 1, 1];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 5: returns true with a correct array", () => {
    const array = [-1, 2, 2];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 6: returns true with a correct array", () => {
    const array = [0, 1, 1, 1, 1];
    expect(hasSingleCycle(array)).toBe(false);
  });
  xtest("test 7: returns true with a correct array", () => {
    const array = [1, 1, 0, 1, 1];
    expect(hasSingleCycle(array)).toBe(false);
  });
  xtest("test 8: returns true with a correct array", () => {
    const array = [1, 1, 1, 1, 2];
    expect(hasSingleCycle(array)).toBe(false);
  });
  xtest("test 9: returns true with a correct array", () => {
    const array = [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 10: returns true with a correct array", () => {
    const array = [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2];
    expect(hasSingleCycle(array)).toBe(false);
  });
  xtest("test 11: returns true with a correct array", () => {
    const array = [1, 2, 3, 4, -2, 3, 7, 8, 1];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 12: returns true with a correct array", () => {
    const array = [1, 2, 3, 4, -2, 3, 7, 8, -8];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 13: returns true with a correct array", () => {
    const array = [1, 2, 3, 4, -2, 3, 7, 8, -26];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 14: returns true with a correct array", () => {
    const array = [10, 11, -6, -23, -2, 3, 88, 908, -26];
    expect(hasSingleCycle(array)).toBe(true);
  });
  xtest("test 15: returns true with a correct array", () => {
    const array = [10, 11, -6, -23, -2, 3, 88, 909, -26];
    expect(hasSingleCycle(array)).toBe(false);
  });
  xtest("test 16: returns true with a correct array", () => {
    const array = [1, -1, 1, -1];
    expect(hasSingleCycle(array)).toBe(false);
  });

});
