                              //!all these func. do not replace Original value on line 3 still a String

let sentence3             = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let split1                = sentence3.split(' ');

//!Your removing the Last index in he Array
let popRemoveLastIndex    = split1.pop();    
//!Your removing the First index in the Array
let shiftRemoveFirstIndex = split1.shift();   
//!RETURNS LENGTH OF ARRAY;Your adding your String to the Last index Value Array
let pushAddLastIndex      = split1.push('And yahoo!'); 
//!Your adding your String to the First index Value Array 
let unshiftAddFirstIndex  = split1.unshift('Wonderful')  
//!starting from index 1 im adding my string
let spliceAdding1         = split1.splice(1,0,'Girl')     
//!starting from index 1 im removing 2 Values; index 1 and the next index 
let spliceAdding2         = split1.splice(1,2)          
//!starting from index 1 im removing 2 and adding 1 string
let spliceAdding3         = split1.splice(1,2,'Welcome') 
//!concat can also add in an Array 
let concatAddString       = split1.concat('Good, Morning') 



//!when wanting to know length of Array after using all func. must use .length, add at the end of all Variables 
let length = split1.length 




console.log(`\n\nTurned sentence into Array--> ${split1}`);
console.log(popRemoveLastIndex);      
console.log(shiftRemoveFirstIndex);  
console.log(pushAddLastIndex );       
console.log(unshiftAddFirstIndex);   
console.log(`\n\nAdding String using contact()--> ${concatAddString}`);
console.log(`\n\nAdding Girl to Array--> ${spliceAdding1}`);
console.log(spliceAdding2);
console.log(spliceAdding3);

console.log(`\n\nThis is Length of Array split1--> ${length}`);

//!joined 3 Arrays together; make sure you put an Array before .concat()
let sentenceArray1 = ['Good','morning','to','You']
let sentenceArray2 = ['Venus','Queen','MaRS','Pluto']
let join2Arrays    = split1.concat(sentenceArray1, sentenceArray2)  

 console.log(`\n\nJoin 3 Arrays---> ${join2Arrays}`);

//! Arrays with .include() Returns: Boolean
let presentWord_Good = join2Arrays.includes('Good') //!.includes() in Arrays finds if the string of Exact pattern is present 

 console.log(`\n\nGood is present in Array--> ${presentWord_Good}`);



 let fruits = ['apple', 'BluebeRRY', 'Cherry', 'apple', 'Grapes', 'BAnana', 'BluebeRRY', 'apple'];

//! Arrays with .indexOf() Gives index of the First Occurence; Pay attention to pattern; Returns a number of values index            
let indexOfApple = fruits.indexOf('apple')

 console.log(`\n\napple index is--> ${indexOfApple}`);

//! Arrays with .lastIndexOf() Gives index of the Last Occurence; Pay attention to pattern; Returns a number 
let lastIndexOf_BluebeRRY = fruits.lastIndexOf('BluebeRRY')

 console.log(`\n\nBluebeRRY index is--> ${lastIndexOf_BluebeRRY}`);

 //! 1,-1 means word is not present 

//! Arrays with .isArray() checks if variable or assigned value is an Array; Returns: Boolean
let isThisAn_Array = Array.isArray(fruits) //before .isArray() func. must add word Array

 console.log(`\n\nIs this an Array?--> ${isThisAn_Array}`);

//! Arrays with .reverse() presents Array in reverse; func ony works for Array    
let numbersArray = [1,2,3,4]
let reverseArray = numbersArray.reverse()

 console.log(`\n\nArray numbers in reverse--> ${reverseArray}`);

/*let numbersDouble = numbersArray.map(double)
function double(value, index, arr) {
    return value * 2
}

console.log(numbersDouble);*/

//!Arrays with .fill() replaces value from an index
let animalsArray = ['Cats','Dogs','Birds']
let fillPigs     = animalsArray.fill('Pigs',0,1) //!replaces string Cats and Dogs with Pigs 
let fillPigs2     = animalsArray.fill('Pigs', 1) //!replaces just string Dogs with Pigs; replaces index at a certain index vaule

console.log(`\n\nReplace Dogs with Pigs--> ${fillPigs}`);
console.log(`\n\nReplace Dogs with Pigs--> ${fillPigs2}`);

//!Arrays with .join() places a separator between values and turns Array to a string
let animalsJoin1 = animalsArray.join('--') //!double dash replaces commas in Array 
let animalsJoin2 = animalsArray.join('')     //!joins all values together with no separator

console.log(`\n\nSeparator added and converted to a string--> ${animalsJoin1}`);
console.log(`\n\nJoined values and converted string--> ${animalsJoin2}`);

//!Arrays with .toString() turns Array into string 
let animalsToString = animalsArray.toString()

 console.log(`\n\nConverted Array into string--> ${animalsToString}`);


 



///////////////////////////////////////
function fillInNumbers(n)  {
    return Array(n)
      .fill(0)
      .map((_, idx) => idx + 1).join('--');

}
  console.log(fillInNumbers(10));
 

 
 









