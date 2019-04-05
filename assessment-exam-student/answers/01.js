/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  var result = arr[0];

  for (var i = 1 ; i < arr.length ; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  var result = arr[0];

  for (var i = 1 ; i < arr.length ; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
}
/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  return max(arr) - min(arr);
}

// Don't change below:

module.exports = { min: min, max: max, range: range };
