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

  test("gaps in deadline", () => {
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
  test("test case 11", () => {
    // [{"deadline": 1, "payment": 4}, {"deadline": 1, "payment": 3}, {"deadline": 2, "payment": 1}, {"deadline": 3, "payment": 2}, {"deadline": 4, "payment": 3}, {"deadline": 4, "payment": 2}, {"deadline": 4, "payment": 1}, {"deadline": 5, "payment": 4}, {"deadline": 8, "payment": 1}]
    const jobs = [
      {
        deadline: 2,
        payment: 1,
      },
      {
        deadline: 1,
        payment: 4,
      },
      {
        deadline: 3,
        payment: 2,
      },
      {
        deadline: 1,
        payment: 3,
      },
      {
        deadline: 4,
        payment: 3,
      },
      {
        deadline: 4,
        payment: 2,
      },
      {
        deadline: 4,
        payment: 1,
      },
      {
        deadline: 5,
        payment: 4,
      },
      {
        deadline: 8,
        payment: 1,
      },
    ];
    const result = optimalFreelancing(jobs);
    expect(result).toBe(16);
  });
});
