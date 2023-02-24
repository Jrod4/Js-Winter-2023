// Due date: Feb 23 (eod)

/**
 * Analyse the requirements and complete the code for below functions:
 *
 *      changeName
 *      changeCourse
 *      makePayment
 *
 * Pls refer "Class16/StudentTeacherSoftware-2/Requirements.js" for requirements
 *
 */

class StudentEnrollment1 {
  studentInformation = {
    sid: 0,
    sName: "Jeff Rod",
    sAge: 29,
    sCourseName: "Web Development",
    sBalance: 5000,
    sGrade: "A",
  };

  courseInformation = [
    {
      cName: "Web Development",
      cPrice: 5000,
    },
    {
      cName: "SDET Course",
      cPrice: 4000,
    },
    {
      cName: "Backend Development",
      cPrice: 3000,
    },
    {
      cName: "FrontEnd Development",
      cPrice: 2000,
    },
    {
      cName: "Manual QA",
      cPrice: 1000,
    },
  ];

  changeName(newName) {
    if (newName.localCompare(this.sName) === 0) {
      console.log(`\nName cannot be updated; as you have same name already stored in the system.${this.sName}`);
    } else {
      this.sName = newName;
      console.log(`\nYou've succesfully updated your name to ${this.sName}.`);
    }
  }

  changeCourse(newCourse) {
    if (newCourse.localCompare(this.sCourseName) === 0) {
      console.log(`\nCourse cannot be updated as you have same course Registered already, ${this.sCourseName}.`);
    } else if (newCourse !== this.cName) {
      console.log(`\nWe do not have this course, ${newCourse}.`);
    } else {
      this.sCourseName = newCourse;
      console.log(`\nYou've succesfully updated your course to ${this.sCourseName}`);
    }
  }

  makePayment(amount) {
    if (amount <= 0) {
      console.log(`\nPlase enter correct amount`);
    } else if (amount > this.sBalance) {
      console.log(`\nYou cannot pay more than the Course price amount, ${amount}`);
    } else {
      amount -= this.sBalance;
      console.log(`\nThank you for the payment of $${amount}. Your updated balance is $${this.sBalance}`);
    }
  }
}
