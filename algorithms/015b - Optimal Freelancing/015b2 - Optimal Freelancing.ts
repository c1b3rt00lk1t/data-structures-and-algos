type FreelanceJob = {
    deadline: number;
    payment: number;
  }

function orderCriteria(a: FreelanceJob, b: FreelanceJob): number {
  return a.payment > b.payment ? -1 : 1;
}

export function optimalFreelancing(jobs: FreelanceJob[]) {  
  const DAYS_IN_WEEK: number = 7;
  let profit: number = 0;
  const timeline: boolean[] = Array.from({ length: DAYS_IN_WEEK }, (_) => false);
  jobs.sort(orderCriteria);

  jobs.forEach(job =>{
    const maxTime: number = Math.min(job.deadline, DAYS_IN_WEEK);
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

