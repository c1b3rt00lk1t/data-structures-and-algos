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

  test("test case 9", () => {
    //  [{"deadline": 2, "payment": 7}, {"deadline": 2, "payment": 6}, {"deadline": 2, "payment": 5}, {"deadline": 2, "payment": 4}, {"deadline": 2, "payment": 3}, {"deadline": 2, "payment": 2}, {"deadline": 2, "payment": 1}]
    {
      const jobs = [
        {
          deadline: 2,
          payment: 1,
        },
        {
          deadline: 2,
          payment: 2,
        },
        {
          deadline: 2,
          payment: 3,
        },
        {
          deadline: 2,
          payment: 4,
        },
        {
          deadline: 2,
          payment: 5,
        },
        {
          deadline: 2,
          payment: 6,
        },
        {
          deadline: 2,
          payment: 7,
        },
      ];
      const result = optimalFreelancing(jobs);
      expect(result).toBe(13);
    }
  });
});
