function optimalFreelancing(jobs) {
  const optimalPayment = jobs
    .sort(orderCriteria)
    .reduce((acc, curr, i, arr) => {
      if (i >= 1 && arr[i].deadline != arr[i - 1].deadline) {
        acc += arr[i].payment;
      } else if (i === 0) {
        acc += arr[i].payment;
      }
      return acc;
    }, 0);

  return optimalPayment;
}

function orderCriteria(a, b) {
  const { deadline: deadline1, payment: payment1 } = a;
  const { deadline: deadline2, payment: payment2 } = b;

  const order = -1;
  let orderResult;

  if (+deadline1 > +deadline2) {
    orderResult = -order;
  } else if (+deadline1 < +deadline2) {
    orderResult = order;
  } else if (+payment1 > +payment2) {
    orderResult = order;
  } else if (+payment1 < +payment2) {
    orderResult = -order;
  }
  console.log(a, b, orderResult);
  return orderResult;
}

module.exports = optimalFreelancing;
