/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */


const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */


/**
 * localeCompare
 * substring/slice
 * split
 */

///Q-1
let sentenceReplace_A = sentence1.replace(/A/ig, 'Queen and king');

 console.log(`/Q-1\n${sentenceReplace_A}`);
 

///Q2-1 Answer:98
let lengthSentence2 = sentence2.length;

 console.log(`/Q2-1\n${lengthSentence2}`);

///Q2-2 Answer:true

let sentenceLow = sentence2.toLowerCase();
let patternLowerCase = 'COM'.toLowerCase();
let result1 = sentenceLow.startsWith(patternLowerCase);
 
 console.log(`/Q2-2\n${result1}`);

///Q2-3 Answer:false

let sentence_low = sentence2.toLowerCase();
let pattern_LowerCase = 'Google news'.toLowerCase();
let result2 = sentence_low.endsWith(pattern_LowerCase);

 console.log(`/Q2-3\n${result2}`);

 ///Q2-4 Answer:true
let sentence_lower = sentence2.toLowerCase();
let patternLowerCase1 = 'from'.toLowerCase();
let result3 = patternLowerCase1.startsWith('from');

//let sentenceLength = sentence_lower.length

 console.log(`/Q2-4\n${result3}`);
 //console.log(`/Q2-4\n${sentenceLength}`);
//console.log(patternLowerCase1);
//console.log(`/Q2-4\n${sentence_lower}`);


///Q2-5 Answer: .
let length = sentence2.length - 1
let characterAT = sentence2.charAt(length);

 console.log(`/Q2-5\n${characterAT}`);


 






 
