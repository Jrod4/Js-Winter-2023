// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 *
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 *
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */
console.log('Q1\n');

// var array = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
// var minvalue = array[0];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] < minvalue) {
//     minvalue = array[i];
//   }
// }
// console.log(minvalue);

let words = ["hApPY", "gIFts", "laUGhable", "leARning", "GrOW", "coNNecT"];

let smallest = words[0];

function getSmallest() {
    for (let i = 0; i < words.length; i++) {
        if (words[i] < smallest) {
             return words[i];
        }
 }
 }

 console.log(getSmallest(words));









/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 *
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 *
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 *
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 *
 */

console.log("\nQ2");
let nums1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];

let getFirstGreaterThanTen1 = nums1.find((num) => num > 10);

console.log(getFirstGreaterThanTen1);

let nums2 = [1, 3, 3, 65, 43, 87, 17];

let getFirstGreaterThanTen2 = nums2.find((num) => num > 10);

console.log(getFirstGreaterThanTen2);

let nums3 = [1, 3, 3, 6, 10, 7, 23, 1, 20];

let getFirstGreaterThanTen3 = nums3.find((num) => num > 10);

console.log(getFirstGreaterThanTen3);

/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 *
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 *
 * [1, -3, 33, 65, 3, 87, 17];                          //
 *
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 *
 */
console.log(`\nQ3`);

let miniumValArr1 = function (numsArr) {
  let minValue;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] < minValue) {
      minValue.push(numsArr[i]);
    }
  }
  return minValue;
};
let arr = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];
let result1 = miniumValArr1(arr);
console.log(result1);
