function optimalFreelancing(jobs) {
  const LENGTH_OF_WEEK = 7;
  let profit = 0;
  const timeline = Array.from({ length: LENGTH_OF_WEEK }, (_) => false);
  jobs.sort(orderCriteria);

  jobs.forEach((job) => {
    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);
    for (let i = maxTime - 1; i >= 0; i--) {
      if (timeline[i] === false) {
        profit += job.payment;
        timeline[i] = true;
        break;
      }
    }
  });
  return profit;
}

function orderCriteria(a, b) {
  return a.payment > b.payment ? -1 : 1;
}

module.exports = optimalFreelancing;
