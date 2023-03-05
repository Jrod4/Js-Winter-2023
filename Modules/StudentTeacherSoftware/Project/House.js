class House {
  static houseIdCounter = 0;

  houseInfo = {
    Address: "-",
    HouseId: 0,
    City: "-",
    CurrentStatus: "-",
    TotalMembers: 0,
  };

  constructor(address, cityName, houseMembers) {
    // Create if, else if

    this.houseInfo.City = cityName;
    this.houseInfo.TotalMembers = houseMembers;
    this.houseInfo.Address = address;
    this.houseInfo.CurrentStatus = this.houseInfo.CurrentStatus;
    this.houseInfo.HouseId = ++House.houseIdCounter;
    console.log(
      `Your allowed to use, current status is ${this.houseInfo.CurrentStatus}!`
    );
    console.log(`Your new house Id is ${this.houseInfo.HouseId}!`);
  }

  lock() {
    if (CurrentStatus === true) {
      console.log("House is already locked");
    } else {
      CurrentStatus = true;
      console.log("House is locked");
    }
  }

  unlock() {
    if (CurrentStatus === false) {
      console.log("House is already unlocked");
    } else {
      CurrentStatus = false;
      console.log("The house is unlocked");
    }

  }

  showHouseDetails() {
    console.log(`\nHouse Details`);
    console.log(`Name : ${this.houseInfo.Name}`);
    console.log(`City : ${this.houseInfo.City}`);
    console.log(`Current Status : ${this.houseInfo.CurrentStatus}`);
    console.log(`Total Members: ${this.houseInfo.TotalMembers}`);
    console.log(`House Id : ${this.houseInfo.HouseId}`);
  }
}module.exports = House;