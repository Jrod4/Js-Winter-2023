studentScore = 10;
maxScore = 100;

let studentPercentage = (studentScore / maxScore) * 100;

if (studentPercentage < 0 || studentPercentage > 100) {
  console.log("You have enterted the wrong credentials");
} else {
  if (studentPercentage >= 91) {
    studentGrade = "A";
  } else if (studentPercentage >= 81) {
    studentGrade = "B";
  } else if (studentPercentage >= 71) {
    studentGrade = "C";
  } else if (studentPercentage >= 61) {
    studentGrade = "D";
  } else if (studentPercentage >= 51) {
    studentGrade = "E";
  } else {
    studentGrade = "F";
  }

  console.log(
    `\n\nYour percentage is %${studentPercentage} and your grade is ${studentGrade}`
  );
}

let dayName = "saturday";

switch (dayName) {
  case "Monday":
  case "monday":
  case "mon":
  case "Wednsday":
  case "wednsday":
  case "wed":
  case "Friday":
  case "friday":
  case "fri":
    console.log("You have class today");
    break;
  case "Tuesday":
  case "tuesday":
  case "tue":
  case "Thursday":
  case "thursday":
  case "thu":
    console.log("Study");
    break;
  case "Saturday":
  case "saturday":
  case "sat":
    console.log("No class today");
    break;
}
console.log(dayName);

num1 = 30;
num2 = 20;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

var x = -3;
var y = 7;
var z = -2;
if (x > 0 || y > 0 || z > 0) {
  console.log("The sign is +");
} else if (x < 0 || y < 0 || z < 0) {
  console.log("The sign is -");
} else if (x > 0 || y < 0 || z < 0) {
  console.log("The sign is +");
} else if (x < 0 || y > 0 || z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}

let isValidNum = 20;

if (isNaN(isValidNum)) {
  console.log("The number is not a number");
} else {
  console.log("The number is a number");
}

let isEvenOrOdd = 11;

if (isEvenOrOdd % 2 == 0) {
  console.log(`\n\nYour number is even ${isEvenOrOdd}`);
} else {
  console.log(`\n\nYour number is odd ${isEvenOrOdd}`);
}

let marksAge = 31;

if (marksAge > 90) {
  console.log("AA");
} else if (marksAge > 80 && marksAge <= 90) {
  console.log("AB");
} else if (marksAge > 70 && marksAge <= 80) {
  console.log("BB");
} else if (marksAge > 60 && marksAge <= 70) {
  console.log("BC");
} else if (marksAge > 50 && marksAge <= 60) {
  console.log("CC");
} else if (marksAge > 40 && marksAge <= 50) {
  console.log("CD");
} else if (marksAge > 30 && marksAge <= 40) {
  console.log("DD");
} else if (marksAge <= 30) {
  console.log("FF");
}



for (i=20 ; i<=100 ; i++){
  console.log(i);
}