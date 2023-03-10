
//! alwasy use brakets[] to pull the index value and to munipulate the index values of an array 
let arr6 = ["earTh", "JUPiTer"];

let jupiterLow = arr6[1].toLowerCase();

let jupiterPresent = jupiterLow.localeCompare("jupiter") === 0;

console.log(jupiterPresent);


//! Be sure to nest if() statement if wanting manipulate an Array or a string; returns index value 
//* in this EX im findng if index value start with 's' of FIRST occurence;Returns the STRING 
const arr = ['BaskETBall', 'FOOTBALL', 'rUGBy', 'swIMMinG', 'sOCcEr', 'bAsEbAlL', 'mARAthon'];

 for (let i=0; i < arr.length; i++) {
   if (arr[i].toLowerCase().startsWith('s')){
    console.log(arr[i]);
    break;
   }
       
}


const nums = [98, 34, 12, 43, 65, 43, 87, 17];

let minNum = nums[0]

for (let x=1 ; x<=nums.length-1 ; x++) {
    if (nums[x] < minNum) {
      minNum = nums[x];
    }
}

console.log(minNum);

let bigNum = nums[0];

for (let x = 1; x <= nums.length - 1; x++) { //*in Foor-loop use length-1 to go thru each index always 
  if (nums[x] > bigNum) {
    bigNum = nums[x];
  }
}

console.log(bigNum);


/**
 * Practice: Create code to find the total of length of all values in the array
 * Practice: Create code to find the number of values in the array which contains 'u' (ignoring cases)
 */
/**
 * Write code to find the number of words (given in an array) which are of length > 5
 */

//!Write code to find the number of words (given in an array) which are of length > 5
const arr1 = ['earTh', 'marS', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer', 'nePtUne', 'saturn'];

 let count1 = 0;

for (let x=0; x<=arr1.length-1; x++) {
     if(arr1[x].length > 5) {
     count1++;
     }  
 } 
 console.log(count1);


/**
 * Practice: Create code to find the smallest value in the given array
 */
/**
 * Find the longest value in the given array
 */
const arr2 = ['earTh', 'marS', 'abd', 'mercury', 'football'];

let smallestStr = arr2[0];

for (let i=0; i<=arr2.length-1; i++) {
  
  if (arr2[i].length < smallestStr.length) {
    smallestStr = arr2[i]
  }
}

console.log(smallestStr);

let longestStr = arr2[0];

for (let i = 0; i <= arr2.length-1; i++) {
  if (arr2[i].length > longestStr.length) {
    longestStr = arr2[i];
  }
}

console.log(longestStr);


//*this is how you count down 
// for (let i = 10; i >= 1; i--) {
//   console.log(`Days Left ${i}`);
// }

//*this is how you print out all values in an Array
for (let x=0; x<=arr2.length-1; x++) {
  console.log(arr2[x]);
}