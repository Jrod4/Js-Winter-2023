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
  changeName(newName) {
    if (newName.localCompare(this.sName) === 0) {
      console.log(
        `Name cannot be updated; as you have same name already stored in the system.${this.sName}`);
    } else {
      this.sName = newName;
      console.log(`You've succesfully updated your name ${this.sName}`);
    }
  }

  changeCourse(newCourse) {
    if (newCourse.localCompare(this.cName) === 0) {
      console.log(
        `Course cannot be updated as you have same course Registered already. ${this.cName}`);
    } else if (newCourse !== this.cName) {
      console.log(`We do not have this course ${this.cName}`);
    } else {
      this.cName = newCourse;
      console.log(`You've succesfully updated your course. ${this.cName}`);
    }
  }

  makePayment(amount) {
    if (amount <= 0) {
      console.log(`Plase enter correct amount`);
    } else if (amount > this.cName.balance) {
      console.log(`you cannot pay more than the balance amount ${amount}`);
    } else {
      amount -= this.cName.balance;
      console.log(
        `\nThank you for the payment of $${amount}. Your updated balance is $${this.cName.balance}`);
    }
  }
}
