const optimalFreelancing = require("./015b1 - Optimal Freelancing");

describe("Test suite for Optimal Freelancing", () => {
  test("initial example", () => {
    const jobs = [
      { deadline: 1, payment: 1 },
      { deadline: 2, payment: 1 },
      { deadline: 2, payment: 2 },
    ];
    const result = optimalFreelancing(jobs);
    expect(result).toBe(3);
  });
});
