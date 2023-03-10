/*Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 
let userName1 = '';


/**
 * Q2: Create abbreviation for a 4-word sentence //USE SLICE()
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 
let sentence2 = 'you NEVEr waLK aLOne'
let abbr = '';
// code
console.log(`abbr -> ${abbr}`);     // YNWA



/**
 * Q3: Count the number of words in the sentence
 
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';*/

let userName1 = 'John Gig'          
let userName2 = 'John Gig Hiyti'     
let userName3 = 'John'                
let userName4 = ''       

//Q1

//let names  = ['John Gig', 'John Gig Hiyti', 'John', '']
//let split  = names2.split(' ')
//let first_LastName = 'John Gig'
//let name1 = names[0] === first_LastName
//let name2 = names[1] === first_LastName
//let name3 = names[2] === first_LastName
//let name4 = names[3] === first_LastName

let username1 = 'John Gig Hiyti'
let names2 = username1.split(' ')
let result1 = names2.length === 2 


 
 //console.log(`\n\n** Is first and last name is provided. **`);
 //console.log(`\n\n${name1}, ${name2}, ${name3}, ${name4}`);
 console.log(result1);

//Q2

let sentence1 = "Good morning to You";     
let sentence2 = "you NEVEr waLK aLOne";    
let sentence3 = "have A great day";  

//abbr:GMTY

let sentenceAbbr1 = sentence1.split(' '); //**CORRECT; CODE IS AUTOMATED**/
let a = sentenceAbbr1[0].substring(0,1).toUpperCase() + sentenceAbbr1[1].substring(0,1).toUpperCase() + sentenceAbbr1[2].substring(0,1).toUpperCase() + sentenceAbbr1[3].substring(0,1).toUpperCase();
//let a = sentence1[0].toUpperCase() + sentence1[5].toUpperCase()  + sentence1[13].toUpperCase()  + sentence1[16].toUpperCase();

 console.log(`\n\nsentence1 Abbr= ${a}`);

//abbr:YNWA

let sentenceAbbr2 = sentence2.split(' '); //**CORRECT; CODE IS AUTOMATED**/
let b = sentenceAbbr2[0].substring(0,1).toUpperCase() + sentenceAbbr2[1].substring(0,1).toUpperCase() + sentenceAbbr2[2].substring(0,1).toUpperCase() + sentenceAbbr2[3].substring(0,1).toUpperCase();
//let b = sentence2[0].toUpperCase() + sentence2[4].toUpperCase()  + sentence2[10].toUpperCase()  + sentence2[15].toUpperCase();

 console.log(`\n\nsentence2 Abbr= ${b}`);

 //abbr:HAGD    //INCORRRECT BUT LOGIC BEHIND IS GOOD; YOU USED SENTENCE3 VALUE INSTEAD OF ARRAY IN LINE 82; USE SUBSTRING TO CALL FOR FIRST CHARACTER 
let sentenceAbbr3 = sentence3.split(' '); 
let c = sentence3[0].toUpperCase() + sentence3[5].toUpperCase() + sentence3[7].toUpperCase()  + sentence3[13].toUpperCase();

 console.log(`\n\nsentence3 Abbr= ${c}`);

//Q3
let sentenceCount3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';

let sentenceWords = sentenceCount3.split(' ');

let wordCount = sentenceWords.length;

 console.log(`\n\n Word count= ${wordCount}`);
