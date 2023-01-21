/* if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
       assign 25 into result1
 otherwise
      assign 35 into result1
 
sentence1 = 'go to home'
 result1 = 25 */

let sentence1 = 'go to home';
/*
let sentenceLength1 = sentence1.length;
let startsWithGoTo = true;
startsWithGoTo = false;
let sentance_L2 = sentanceLength >= 100 || (startsWithGoTo) ? 25 : 35;*/

let sentence_Result1_OR = sentence1.length >= 10 || sentence1.startsWith('go to') ? 25 : 35;

let sentence_Result2_AND = sentence1.length >= 10 && sentence1.startsWith('go to') ? 25 : 35;

let sentence_Result3_AND_OR = (sentence1.length >= 10 && sentence1.startsWith('home')) || sentence1.length >= 10 ? 25 : 35;


 console.log(sentence_Result1_OR);            
 console.log(sentence_Result2_AND);
 console.log(sentence_Result3_AND_OR);
 














