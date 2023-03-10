const Members = require("./Members");



class Restaurant extends Members {
  static RestaurantIdCounter = 0;

  restaurantInfo = {
    rName: "",
    rCity: "",
    rCurrentStatus: "closed",
    rGuestsSittingNow: 0,
    rMaxGuestCapacity: 0,
    rTotalEmployees: 0,
    restaurantId: 0,
  };

  constructor(restaurantName, cityName, maxGuestCapacity, totalEmployees) {
    super();
    if (restaurantName.length < 1) {
      console.log("invalid input requires more than one letter");
    } else if (cityName.length < 1) {
      console.log("invalid input requires more than one letter");
    } else if (maxGuestCapacity < 1) {
      console.log("invalid input requires more than one letter");
    } else if (totalEmployees < 1) {
      console.log("invalid input requires more than one letter");
    } else {
      this.restaurantInfo.rName = restaurantName;
      this.restaurantInfo.rCity = cityName;
      this.restaurantInfo.rMaxGuestCapacity = maxGuestCapacity;
      this.membersInfo.TotalMembers = totalEmployees;
      this.restaurantInfo.restaurantId = ++Restaurant.RestaurantIdCounter;
      console.log(`\nThank you for registering! ${this.restaurantInfo.rName}`);
      console.log(
        `This is your restaurant Id is ${this.restaurantInfo.restaurantId}\n`
      );
    }
  }

  open() {
    if (this.restaurantInfo.rCurrentStatus === "open") {
      console.log("\nRestaurant is already open");
    } else {
      this.restaurantInfo.rCurrentStatus = "open";
      this.restaurantInfo.isOpen = false;
      console.log("\nThe Restaurant is open");
    }
  }

  close() {
    if (this.restaurantInfo.rCurrentStatus === "closed") {
      console.log("\nRestaurant is already closed");
    } else {
      this.restaurantInfo.rCurrentStatus = "closed";
      console.log("\nThe Restaurant is closed");
    }
  }

  clean() {
    console.log("Restaurant area is now clean");
    super.clean();
  }

  guestSittingNow(guestSit) {
    if (guestSit <= 0) {
      console.log('Please add more than one guest');
    } else if (guestSit > this.restaurantInfo.rMaxGuestCapacity) {
      console.log(`Max capacity met ${this.restaurantInfo.rMaxGuestCapacity}`);
    } else {
     this.restaurantInfo.rGuestsSittingNow += guestSit;
    }
  }

  addGuest(guest) {
    
  }

  removeGuest(guest) {

  }


  showCurrentGuestCount() {
    console.log(`\nCurrent Guest Count: ${this.restaurantInfo.rGuestsSittingNow}`);
  }

  showRestaurantDetails() {
    console.log(`\nRestaurant Details\n`);
    console.log(`Name : ${this.restaurantInfo.rName}`);
    console.log(`City : ${this.restaurantInfo.rCity}`);
    console.log(`Max Guest : ${this.restaurantInfo.rMaxGuestCapacity}`);
    console.log(`Total Employees: ${this.membersInfo.TotalMembers}`);
    console.log(`Restaurant Id : ${this.restaurantInfo.restaurantId}`);
    console.log(`Current Status : ${this.restaurantInfo.rCurrentStatus}`);
  }

  // removeEmployee(y) {
  //   switch (this.removeMembers(y)) {
  //     case "Error1":
  //       console.log("Please input atleast 1 employee!");
  //       break;
  //     case "Error2":
  //       console.log(
  //         "There are less employees that the number of employees you want to remove!!"
  //       );
  //       break;
  //     case "Error3":
  //       console.log("Please make sure to input a NUMBER!");
  //       break;
  //     case "Success":
  //       console.log("Number fo employees got removeed successfully!");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  addEmployee(numEmpToAdd) {
    this.addMembers(numEmpToAdd, 'employee');
  }

  removeEmployee(numEmpToRemove) {
    this.removeMembers(numEmpToRemove, 'employee');
  }
}
module.exports = Restaurant;
