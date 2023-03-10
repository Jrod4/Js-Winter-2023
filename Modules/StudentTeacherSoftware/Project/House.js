const Members = require("./Members");

// class House extends Members {
//   clean() {
//     console.log('House area is now clean');
//     super.clean();
//   }
//   }

class House extends Members {
  static houseIdCounter = 0;

  houseInfo = {
    Name: "-",
    HouseId: 0,
    City: "-",
    CurrentStatus: "locked",
    houseMembers: 0,
  };

  constructor(Name, cityName, houseMembers) {
    super();
    if (this.houseInfo.Name === "") {
      console.log(`\nPlease enter a name.`);
    } else if (this.houseInfo.cityName === "") {
      console.log(`\nPlease enter your city`);
    } else if (this.houseInfo.houseMembers === "") {
      console.log(`\nPlease enter the number of members in household.`);
    } else {
      this.houseInfo.City = cityName;
      this.membersInfo.TotalMembers = houseMembers;
      this.houseInfo.Name = Name;
      this.houseInfo.CurrentStatus = this.houseInfo.CurrentStatus;
      this.houseInfo.HouseId = ++House.houseIdCounter;
      // console.log(`\nYour allowed to use, current status is ${this.houseInfo.CurrentStatus}!`
      // );
      console.log(`\nYour new house Id is ${this.houseInfo.HouseId}`);
    }
  }

  lock() {
    if (this.houseInfo.CurrentStatus === "locked") {
      console.log("House is already locked");
    } else if (this.houseInfo.CurrentStatus === "unlocked") {
      this.houseInfo.CurrentStatus = "locked";
      console.log("House is now locked");
    }
  }

  unlock() {
    if (this.houseInfo.CurrentStatus === "unlocked") {
      console.log("House is already unlocked");
    } else if (this.houseInfo.CurrentStatus === "locked") {
      this.houseInfo.CurrentStatus = "unlocked";
      console.log("The house is unlocked");
    }
  }

  clean() {
    console.log("House area is now clean");
    super.clean();
  }

  showTotalMembers() {
    console.log(`Total Members: ${this.houseInfo.houseMembers}`);
  }

  showHouseDetails() {
    console.log(`House Details\n`);
    console.log(`Name : ${this.houseInfo.Name}`);
    console.log(`City : ${this.houseInfo.City}`);
    console.log(`Current Status : ${this.houseInfo.CurrentStatus}`);
    console.log(`Total House Members: ${this.membersInfo.TotalMembers}`);
    console.log(`House Id : ${this.houseInfo.HouseId}`);
  }
  addHouseMembers(numMemToAdd) {
    this.addMembers(numMemToAdd, 'member');
  }

  removeHouseMember(numMemToRemove) {
    this.removeMembers(numMemToRemove, "member");
  }
}
module.exports = House;
