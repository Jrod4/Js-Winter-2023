let studentEnrollment = require("./studentEnrollment");
let teacherHire = require("./teacherHire");

let s1 = new studentEnrollment("Jeff Rod", 29, "Web Development");
s1.studentDetails();

let t1 = new teacherHire("Jeff Rod", 29, "Web Development");
t1.teacherDetails();

let t2 = new teacherHire("Rod James", 32, "manuAL qA");
t2.teacherDetails();

let s2 = new studentEnrollment("Kia", 22, "SDET course");
s2.studentDetails();

t1.studentGrade(1, "A");

s1.studentDetails();

t1.updateGrade(1, "A+");

s1.studentDetails();

t1.updateGrade(1, "A+");

t1.studentGrade(1, "A");
