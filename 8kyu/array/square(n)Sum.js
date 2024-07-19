/**Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because */

//Solution
const squareSum = (numbers) =>
  numbers.reduce((sum, item, index) => sum + item ** 2, 0);

/**Time: 884ms  */
