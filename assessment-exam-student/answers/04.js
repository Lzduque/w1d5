/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
function stdev(arr) {

  function count(arr) {
    return arr.length;
  }


  function sum(arr) {
    var result = 0;

    for (var i = 0 ; i < arr.length ; i++) {
      result += arr[i];
    }

    return result;
  }


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


  function round(number) {
    return Math.round(number * 100) / 100;
  }

  /////start

  var meanOfArr = mean(arr);

  var deviationsOfEach = arr.map(x => Math.pow((x - meanOfArr), 2));

  var meanOfDeviations = mean(deviationsOfEach);

  var popStandardDev = Math.sqrt(meanOfDeviations);

  return round(popStandardDev);
}

// console.log(stdev([2,4,4,4,5,5,7,9]));
// console.log(stdev([-2,6,8,2,9]));
// console.log(stdev([2,4,4,4,5,5,7,9]));

// Don't change below:

module.exports = { stdev: stdev };
