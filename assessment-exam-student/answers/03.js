/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {

  var howManyTimesEach = {};

  // console.log("the object starts like: ", howManyTimesEach);

  for (var i = 0 ; i < arr.length ; i++) {

    // console.log("does the number has a property? ",howManyTimesEach[arr[i]]);
    // console.log("i: ",i);
    // console.log("arr[i]",arr[i]);

    if (howManyTimesEach[arr[i]] === undefined) {
      // console.log("is the number UNdefined as a property? ",howManyTimesEach[arr[i]] === undefined);

      howManyTimesEach[arr[i]] = 1;

      // console.log("and now? ",howManyTimesEach[arr[i]] === undefined);

    } else {
      howManyTimesEach[arr[i]] ++;

      // console.log("how many times did it appear so far? ",howManyTimesEach[arr[i]]);

    }
  }

  var appearedMost = 0;

  var whoAppearedMost;

  // console.log("who appeared most? ",whoAppearedMost);
  // console.log("how many times did it appear? ",appearedMost);
  // console.log("how many times each one appeared? ",howManyTimesEach);

  for (var id in howManyTimesEach) {
    if (howManyTimesEach[id] > appearedMost) {
      appearedMost = howManyTimesEach[id];
      whoAppearedMost = id;

      // console.log("how many times who appearedMost? ",appearedMost);
    }
    // console.log("how many times who appearedMost - FINAL? ",appearedMost);
  }

  return whoAppearedMost;

}

// console.log("result is.... ",mode([1,5,2,6,3,5]));

// Don't change below:

module.exports = { mode: mode };
