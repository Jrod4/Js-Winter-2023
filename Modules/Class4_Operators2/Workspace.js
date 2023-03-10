///
sentenceLength1 = 299;

let sentence_L3 = sentenceLength1 >= 100 ? 25 : 35; 

 console.log(sentence_L3); 

///
 let cNum1 = 10, cNum2 = 20;

let cNum1GrEqcNum2 = cNum1 >= cNum2;
 console.log(`\n${cNum1} >= ${cNum2} = ${cNum1GrEqcNum2}`);
 console.log(typeof cNum1GrEqcNum2);

///
let b = 4
let b1 = 'a'
b1 = 4 //reassigning Value in Variable "b1"

let answer  = b === b1   //same value and data-type
let answer1 = b == b1  //same value 
let answer2 = b !== b1 //states that both value and data-type are obviously NOT the same (ex) 1=2 2=A, numbers=strings
let answer3 = b != b1  //states that just values are NOT the same (ex) X=y,Y=a: does not output data-type

 console.log(`\n${answer}\n`);
 console.log(`\n${answer1}\n`);
 console.log(`\n${answer2}\n`);
 console.log(`\n${answer3}\n`);

 ///
let num = 1
let num2 = num++ //Post increment; finished last

num2 = ++num //Pre-incrment; finished first; reassigning "num2"

console.log(num2);

/// EX. Arrays
let numm = 1
let string = 'two' 

let numberAndString = [1,'two'] // [] is an array that group values together 

let keyValuesPaired = {
    name : 'jeff',
    age  : 29,
    heightInchs : 58,
    job : 'warehouse',
    city : 'Ft Myers'
}
  console.log(numberAndString);
  //console.log(numm,string);
  console.log(keyValuesPaired);

