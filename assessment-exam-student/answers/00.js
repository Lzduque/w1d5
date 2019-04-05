/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  return arr.length;
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  var result = 0;

  for (var i = 0 ; i < arr.length ; i++) {
    result += arr[i];
  }

  return result;
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function mean(arr) {

  var numFloat = 0;

  function round(number) {
    return Math.round(number * 100) / 100;
  }

  if (sum(arr) === 0 || count(arr) === 0) {
    numFloat = null;
  } else {
    numFloat = sum(arr) / count(arr);
    return round(numFloat);
  }
}


// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
