const studentEnrollment = require("./studentEnrollment");

class teacherHire {
  courseData = [
    {
      cName: "Web Development",
      cSalary: 15000,
    },
    {
      cName: "SDET Course",
      cSalary: 14000,
    },
    {
      cName: "Backend Development",
      cSalary: 13000,
    },
    {
      cName: "FrontEnd Development",
      cSalary: 12000,
    },
    {
      cName: "Manual QA",
      cSalary: 10000,
    },
  ];

  constructor(name, age, courseName) {
    if (age < 21) {
      console.log(`\nSorry, we only hire who is 21 or above`);
      throw "Invalid Teacher age";
    } else if (!this.isCourseValid(courseName)) {
      console.log(`We don't have any course for courseName ${courseName}`);
      throw "Invalid course name by user";
    } else {
      this.teacherInfo.tName = name;
      this.teacherInfo.tAge = age;
      const courseObject = this.isCourseValid(courseName)
      this.teacherInfo.tCourseName = courseName;
      this.teacherInfo.tBalance = courseData.cSalary;
      teacherHire.teacherCounterId++;
      this.teacherInfo.tId = teacherHire.teacherCounterId;
      console.log(`Congratulations for enrolling in ${courseName}`);
      console.log(`Your student id: ${this.teacherInfo.tId}`);
    }
  }
    isCourseValid(courseName) {
        return teacherHire.courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }
  
 static teacherCounterId = 0;

  teacherInfo = {
    tId: 0,
    tName: "Default",
    tAge: 0,
    tCourseName: "Default",
    tSalary: 0,
    
  };

  teacherDetails () {
    console.log(`\nTeacher Details`)
    console.log(`\nId : ${this.teacherInfo.tId}`);
    console.log(`\nName : ${this.teacherInfo.tName}`);
    console.log(`\nAge : ${this.teacherInfo.tAge}`);
    console.log(`\nCourse Name: ${this.teacherInfo.tCourseName}`);
    console.log(`\nSalary : ${this.teacherInfo.tSalary}`);
  }

    changeName(newName) {
    if (newName.localCompare(this.teacherInfo.tName) === 0) {
      console.log(`\nName cannot be updated; as you have same name already stored in the system.${this.sName}`);
    } else {
      this.teacherInfo.tName = newName;
      console.log(`\nYou've succesfully updated your name to ${this.tName}.`);
    }
  }

  studentGrade(sID,sGrade) {
 const studentInfoObj = studentEnrollment.findByStudentID(sID);
   if (!studentInfoObj) {
            console.log(`\nIncorrect student id "${studentId}" provided`);
       } else if (studentInfoObj.sGrade.localeCompare('-') !== 0) {
            console.log(`\nStudent with id "${studentId}" is already graded; to update student-grade pls use updateGrade-method`);
       } else {
            studentInfoObj.sGrade = sGrade;
            console.log(`\nThank you for grading student with id`);
       }
    }

    updateGrade(sID,sGrade) {
        const studentInfoObj = studentEnrollment.findByStudentID(sID);
        if (!studentInfoObj) {
          console.log(`\nIncorrect student id "${sID}" provided`);
        } else if (studentInfoObj.sGrade.localeCompare('-') === 0 && studentInfoObj.sGrade.localeCompare('-') !== 0 ){
            console.log('Student is not graded; to provide student-grade pls use gradeStudent-method');
        } else if (studentInfoObj.sGrade.localeCompare('-') === 0){
            console.log("Student has the same grade");
        } else {
            studentInfoObj.sGrade = sGrade;
            console.log(`Thank you for updating grade of student with id ${sID}`);
        }
    }
        
}




module.exports = teacherHire;

