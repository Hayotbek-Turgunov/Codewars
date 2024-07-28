/**Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

/**Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0 */

const sum = (numbers) => numbers.reduce((sum, curr) => sum + curr, 0);
sum([1, 5.2, 4, 0, -1]);

//Time 795ms
