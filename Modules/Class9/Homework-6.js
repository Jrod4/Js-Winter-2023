studentScore = 85;
maxScore = 100;

studentPercentage = (studentScore/maxScore)*100;

console.log(studentPercentage);

if (studentPercentage > 100 || studentPercentage < 0) {

    console.log(`You have entered incorrect data.\nStudent score = ${studentScore}\nMax score = ${maxScore}`);

} else {

    if (studentPercentage >= 91) {
        studentGrade = 'A';
    } else if (studentPercentage >= 81) {
        studentGrade = 'B';
    } else if (studentPercentage >= 71) {
        studentGrade = 'C';
    } else if (studentPercentage >= 61) {
        studentGrade = 'D';
    } else if (studentPercentage >= 51) {
        studentGrade = 'E';
    } else {
        studentGrade = 'F';
    }

    console.log(`Your percentage is ${studentPercentage}% and your grade is ${studentGrade}`);

}