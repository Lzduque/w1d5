// circle.js
// var PI = Math.PI;

// exports.area = function(r) {
//   return PI * r ** 2;
// };

// exports.circumference = function(r) {
//   return 2 * PI * r;
// };

var listA = [];

exports.insertNum = function(num) {
  listA.push(num);
};

exports.accending = function(list1) {
  listA.sort(function (a,b) {
    return a - b;
  });
  return listA;
};

// insertNum(2);
// console.log(listA);
// insertNum(7);
// console.log(listA);
// insertNum(1);
// insertNum(8);
// insertNum(4);
// insertNum(34);
// insertNum(13);
// console.log(listA);
// console.log("");
// accending();
// console.log(listA);