function optimalFreelancing(jobs) {
  const LENGTH_OF_WEEK = 7;
  let profit = 0;
  const timeline = Array.from({ length: LENGTH_OF_WEEK }, (_) => false);
  jobs.sort(orderCriteria);

  for (const job of jobs) {
    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);
    for (let i = maxTime - 1; i >= 0; i--) {
      if (timeline[i] === false) {
        profit += job.payment;
        timeline[i] = true;
        break;
      }
    }
  }
  return profit;
}

function orderCriteria(a, b) {
  const { payment: payment1 } = a;
  const { payment: payment2 } = b;
  const order = -1;
  if (+payment1 > +payment2) {
    return order;
  } else if (+payment1 <= +payment2) {
    return -order;
  }
}

module.exports = optimalFreelancing;
