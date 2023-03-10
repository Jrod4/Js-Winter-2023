/* if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
       assign 25 into result1
 otherwise
      assign 35 into result1
 
sentence1 = 'go to home'
 result1 = 25 */

/** 
* all comparisons (===, >=, <=, <, >, !=) will give a Boolean output in the terminal(true or false)
* use Tenray(? number : number) to output Boolean but with a number instead of; truth and false answer*/
 

let sentence1 = 'go to home';

//lines 18-21 and 25-27; are shorter and organized code
//Use short and simple code get the same answer as well; try minimize code 
let sentenceLength1 = sentence1.length;
let startsWithGoTo = true;
startsWithGoTo = false; //EX. reassigning value "startsWithGoTo" 
let sentance_L2 = sentanceLength >= 100 || (startsWithGoTo) ? 25 : 35;



let res1 = sentence1.length >= 100;
let res2 = sentence1.startsWith("go to");
result = res1 || res2;

 console.log(result); 
 


//answers Func:(.startsWith(), .length()) / Comp: =, >= / Logical:(&&, ||)
let sentence_Result1_OR = sentence1.length >= 100 || sentence1.startsWith('go to') ? 25 : 35;

let sentence_Result2_AND = sentence1.length >= 100 && sentence1.startsWith('go to') ? 25 : 35;

let sentence_Result3_AND_OR = (sentence1.length >= 100 && sentence1.startsWith('home')) || sentence1.length >= 100 ? 25 : 35;

 console.log(sentence_Result1_OR);            
 console.log(sentence_Result2_AND);
 console.log(sentence_Result3_AND_OR);














  
  


 




