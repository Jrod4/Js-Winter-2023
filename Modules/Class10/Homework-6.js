// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 *
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 *
 */
// const str1 = "YOu lIVe ONlY ONcE";
// let titleCaseStr1 = ""; // final answer must be in the variable
// code
// console.log(str1); // 'YOu ONlY lIVe ONcE'
// console.log(titleCaseStr1); // 'You Only Live Once'
console.log(`\n\nQuestion 1 answer:\n`);

let str1 = "have a great day";
let arrStr1 = str1.toLowerCase().split(" ");

for (let i = 0; i < arrStr1.length; i++) {
  arrStr1[i] = arrStr1[i].charAt(0).toUpperCase() + arrStr1[i].slice(1);
}
console.log(arrStr1.join(" "));

let str2 = "YOu lIVe ONlY ONcE";
let arrStr2 = str2.split(" ");

let a = arrStr2[0].charAt(0).toUpperCase() + arrStr2[0].slice(1).toLowerCase();
let b = arrStr2[1].charAt(0).toUpperCase() + arrStr2[1].slice(1).toLowerCase();
let c = arrStr2[2].charAt(0).toUpperCase() + arrStr2[2].slice(1).toLowerCase();
let d = arrStr2[3].charAt(0).toUpperCase() + arrStr2[3].slice(1).toLowerCase();

let titleCaseStr1 = a + " " + b + " " + c + " " + d;

console.log(titleCaseStr1);

let str3 = "gooD mORNIng";

let arrStr3 = str3.toLowerCase().split(" ");

for (let i = 0; i < arrStr3.length; i++) {
  arrStr3[i] = arrStr3[i].charAt(0).toUpperCase() + arrStr3[i].slice(1);
}
console.log(arrStr3.join(" "));

let str4 = "apple banana cherry";

let arrStr4 = str4.toLowerCase().split(" ");

for (let i = 0; i < arrStr4.length; i++) {
  arrStr4[i] = arrStr4[i].charAt(0).toUpperCase() + arrStr4[i].slice(1);
}
console.log(arrStr4.join(" "));

let str5 = "heLlO deAR, haVE a great DAy tO yOu";

let arrStr5 = str5.toLowerCase().split(" ");

for (let i = 0; i < arrStr5.length; i++) {
  arrStr5[i] = arrStr5[i].charAt(0).toUpperCase() + arrStr5[i].slice(1);
}
console.log(arrStr5.join(" "));

let str6 = "qUEen";

let titleCaseStr2 = str6.charAt(0).toUpperCase() + str6.slice(1).toLowerCase();

console.log(titleCaseStr2);

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 
const str2 = 'hello dear how are you doing';
let reverseStr2 = '';           // final answer must be in the variable8*/

console.log(`\n\nQuestion 2 answer:\n`);

let str7 = "have a great day";
let arr1Str1 = str7.split(' ')
let reverseStr1 = ''

for (let i=arr1Str1.length-1 ; i>=0 ; i--) {
 reverseStr1 = reverseStr1 + arr1Str1[i] + ' '
}
console.log(reverseStr1);
//let reverseStr1 = str7.split(" ").reverse().join(" ");
//let f = [...'have a great day'].reverse().join(' ');

//console.log(reverseStr1);

let str8 = "good morning";

let reverseStr2 = str8.split(" ").reverse().join(" ");

console.log(reverseStr2);

let str9 = "hello dear how are you doing";

let reverseStr3 = str9.split(" ").reverse().join(" ");

console.log(reverseStr3);

let str10 = "Learn";

let reverseStr4 = str10.split("").reverse().join("");

console.log(reverseStr4);

/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 
const arr3 = [1, 1, 1, 2, 3, 1, 2];
let avg;                // final answer must be in the variable
// code
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57*/

console.log(`\n\nQuestion 3 answer:\n`);

let arr1 = [1, 2, 3, 4, 5];

let sum1 = 0;

for (let i = 0; i < arr1.length; i++) {
  sum1 = sum1 + arr1[i];
}

let avg = sum1 / arr1.length;

console.log(avg);

let arr2 = [1, 1, 1, 2, 3, 1, 2];

let sum2 = 0;

for (let i = 0; i < arr2.length; i++) {
  sum2 = sum2 + arr2[i];
}

let avg2 = sum2 / arr2.length;

console.log(avg2);

let arr3 = [1, -1];

let sum3 = 0;

for (let i = 0; i < arr3.length; i++) {
  sum3 = sum3 + arr3[i];
}

let avg3 = sum3 / arr3.length;

console.log(avg3);


/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 
const str4 = 'aPPlE bANAna chErRY';
let abbr = '';              // final answer must be in the variable
// code
console.log(str4);          // 'apple banana cherry'
console.log(abbr);          // ABC*/

console.log(`\n\nQuestion 4 answer:\n`);

let str11 = "have a great day";
let str11Split = str11.split(" ");

let abbrStr1 =
  str11Split[0].substring(0, 1).toUpperCase() +
  str11Split[1].substring(0, 1).toUpperCase() +
  str11Split[2].substring(0, 1).toUpperCase() +
  str11Split[3].substring(0, 1).toUpperCase();

console.log(abbrStr1);

let str12 = "YOu lIVe ONlY ONcE";
let str12Split = str12.split(" ");

let abbrStr2 =
  str12Split[0].substring(0, 1).toUpperCase() +
  str12Split[1].substring(0, 1).toUpperCase() +
  str12Split[2].substring(0, 1).toUpperCase() +
  str12Split[3].substring(0, 1).toUpperCase();

console.log(abbrStr2);

let str13 = "gooD mORNIng";
let str13Split = str13.split(" ");

let abbrStr3 =
  str13Split[0].substring(0, 1).toUpperCase() +
  str13Split[1].substring(0, 1).toUpperCase();

console.log(abbrStr3);

let str14 = "aPPlE bANAna chErRY";
let str14Split = str14.split(" ");

let abbrStr4 =
  str14Split[0].substring(0, 1).toUpperCase() +
  str14Split[1].substring(0, 1).toUpperCase() +
  str14Split[2].substring(0, 1).toUpperCase();

console.log(abbrStr4);

let str15 = "heLlO deAR, haVE a great DAy tO yOu";
let str15Split = str15.split(" ");

let abbrStr5 =
  str15Split[0].substring(0, 1).toUpperCase() +
  str15Split[1].substring(0, 1).toUpperCase() +
  str15Split[2].substring(0, 1).toUpperCase() +
  str15Split[3].substring(0, 1).toUpperCase() +
  str15Split[4].substring(0, 1).toUpperCase() +
  str15Split[5].substring(0, 1).toUpperCase() +
  str15Split[6].substring(0, 1).toUpperCase() +
  str15Split[7].substring(0, 1).toUpperCase();

console.log(abbrStr5);

let str16 = "qUEen";

let abbrStr16 = str16.substring(0, 1).toUpperCase();

console.log(abbrStr16);

/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
// code
console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']*/

console.log(`\n\nQuestion 5 answer:\n`);

let arr5 = ["earTh", "Mars", "JUPiTer"];

for (let i = 0; i < arr5.length; i++) {
  arr5[i] = arr5[i].toUpperCase();
}

console.log(arr5);

let arr6 = ["earTh", "JUPiTer"];

for (let i = 0; i < arr6.length; i++) {
  arr6[i] = arr6[i].toUpperCase();
}

console.log(arr6);

let arr7 = ["earTh", "meRCUrY", "VeNUs", "Mars", "JUPiTer"];

for (let i = 0; i < arr7.length; i++) {
  arr7[i] = arr7[i].toUpperCase();
}

console.log(arr7);


