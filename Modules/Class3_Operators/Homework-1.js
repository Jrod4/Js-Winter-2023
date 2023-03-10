//Weather conversions

//F -> C in Ft Meyers 

let tempFtMeyersF = 72;

let tempFtMeyersC = (tempFtMeyersF - 32) / 1.8;
 //console.log(tempFtMeyersC);
 console.log(`\n${tempFtMeyersF}°F is equal to ${tempFtMeyersC}°C in Ft Meyers FL.\n`);

//F -> K in Ft Meyers

let tempFtMeyersK = ( tempFtMeyersF + 459.67) * 5/9;

  console.log(`\n${tempFtMeyersF}°F is equal to ${tempFtMeyersK} K in Ft Meyers FL.`);

//C -> F in Ft Meyers

let tempFtMeyersC1 = tempFtMeyersC;

let tempFtMeyersF1 = (tempFtMeyersC1 * 1.8) + 32;

 console.log(`\n${tempFtMeyersC1}°C is equal to ${tempFtMeyersF1}°F in Ft Meyers FL.`);

//C -> K in Ft Meyers

let tempFtMeyersC2 = tempFtMeyersC;

let tempFtMeyersK1 = (tempFtMeyersC2 + 273.15);

 console.log(`\n${tempFtMeyersC2}°C is equal to ${tempFtMeyersK1} K in Ft Meyers FL.`); 

//K -> F in Ft Meyers

let tempFtMeyersK2 = tempFtMeyersK;

let tempFtMeyersF2 = tempFtMeyersK2 * 9/5 - 459.67;

 console.log(`\n${tempFtMeyersK2} K is equal to ${tempFtMeyersF2}°F in Ft Meyers FL.`);

//K -> C in Ft Meyers

let tempFtMeyersK3 = tempFtMeyersK;

let tempFtMeyersC3 = tempFtMeyersK3 - 273.15;

 console.log(`\n${tempFtMeyersK3} K is equal to ${tempFtMeyersC3}°C  in Ft Meyers FL.\n`); 


