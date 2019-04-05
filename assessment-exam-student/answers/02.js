/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function median(arr) {
  var result;

  var isEven = function(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  var sortArr = function(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  };

  function round(number) {
    return Math.round(number * 100) / 100;
  }

  var mean = function(num1, num2) {
    var sum = num1 + num2;
    return sum / 2;
  };

  var roundDown = function(num) {
    return num - 0.5;
  };

  var sortedArr = sortArr(arr);

  var isArrEven = isEven(arr.length);

  var halfArrLength = sortedArr.length / 2;

  if (isArrEven === true) {

    // console.log("array: ",sortedArr);
    // console.log("halfArrLength: ",halfArrLength);

    return round(mean(sortedArr[halfArrLength], sortedArr[(halfArrLength) - 1]));

  } else {

    // console.log("array: ",sortedArr);
    // console.log("halfArrLength: ",halfArrLength);
    // console.log("rounded down: ",roundDown(halfArrLength));
    // console.log("the corresponding num: ",sortedArr[roundDown(halfArrLength)]);

    return round(sortedArr[roundDown(halfArrLength)]);

  }

}

// console.log(median([2,1,3]));
// console.log(median([1,2,3]));
// console.log(median([1,2,3,4]));
// console.log(median([3,4,1,2]));

// Don't change below:

module.exports = { median: median };
