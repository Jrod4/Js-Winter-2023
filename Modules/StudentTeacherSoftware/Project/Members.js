class Members {
  membersInfo = {
    Name: "-",
    City: "-",
    CurrentStatus: true,
    TotalMembers: 0,
  };

  clean() {
    console.log("Area is clean now");
  }

  addMembers(x) {
    if (x < 1) {
      console.log(`Please input atleast 1 ${memberType}!`);
    } else if (x > this.membersInfo.TotalMembers) {
      console.log(
        `There are less ${memberType}s that the number of ${memberType}s you want to add!`
      );
    } else if (typeof x !== "number") {
      console.log("Please make sure to input a NUMBER");
    } else {
      this.membersInfo.TotalMembers -= x;
      console.log(`\nSuccessfully added ${y} ${memberType}`);
      console.log(`Total ${memberType}: ${this.membersInfo.TotalMembers}`);
    }
  }

  // removeMembers(y) {
  //   let actionResult = "";
  //   if (y < 1) {
  //     actionResult = "Error1";
  //   } else if (y > this.membersInfo.TotalMembers) {
  //     actionResult = "Error2";
  //   } else if (typeof y !== "number") {
  //     actionResult = "Error3";
  //   } else {
  //     this.membersInfo.TotalMembers -= y;
  //     actionResult = "Success";
  //   }
  //   return actionResult;
  // }

  removeMembers(y, memberType) {
    if (y < 1) {
      console.log(`Please input atleast 1 ${memberType}!`);
    } else if (y > this.membersInfo.TotalMembers) {
      console.log(
        `There are less ${memberType}s that the number of ${memberType}s you want to remove!`
      );
    } else if (typeof y !== "number") {
      console.log("Please make sure to input a NUMBER");
    } else {
      this.membersInfo.TotalMembers -= y;
      console.log(`\nSuccessfully removed ${y} ${memberType}`);
      console.log(`Total ${memberType}: ${this.membersInfo.TotalMembers}`);
    }
  }

  showCurrentMembers() {}
}
module.exports = Members;
