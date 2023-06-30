function findMaxSubarraySum(arr) {
	let maxSum = arr[0];
	let currentSum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		currentSum += arr[i];
		if (currentSum < 0) currentSum = 0;
		maxSum = Math.max(currentSum, maxSum);
	}
	return maxSum;
}