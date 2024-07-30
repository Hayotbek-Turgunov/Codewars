/**Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

const findAverage = (array) => {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((sum, item, index) => sum + item, 0) / array.length;
};

//Time: 821ms
