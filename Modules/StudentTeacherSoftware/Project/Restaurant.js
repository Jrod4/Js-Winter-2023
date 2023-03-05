class Restaurant {
  static RestaurantIdCounter = 0;

  restaurantInfo = {
    rName: "",
    rCity: "",
    rIsOpen: false, //currentStatus
    rGuestsSittingNow: 0,
    rMaxGuestCapacity: 0,
    rTotalEmployees: 0,
    restaurantId: 0
  };

  constructor(restaurantName, cityName, maxGuestCapacity, totalEmployees) {
    if (restaurantName.length < 1 ) {
      console.log('invalid input requires more than one letter');
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
    this.restaurantInfo.rTotalEmployees = totalEmployees;
    this.restaurantInfo.restaurantId = ++Restaurant.RestaurantIdCounter;
    console.log(`\nThank you for registering! ${this.restaurantInfo.rName}`);
    console.log(`\nThis is your restaurant Id is ${this.restaurantInfo.restaurantId}`);
    }
  }

  open() {
         if (rIsOpen === true){
          console.log('Restaurant is already open');
        } else {
          rIsOpen = true;
          console.log('the Restaurant is open');
        }
}



  close() { 
      if (rIsOpen === false) {
        console.log("Restaurant is already closed");
      } else {
        rIsOpen = false;
        console.log("the Restaurant is closed");
      }

  }

  showRestaurantDetails() {
    console.log(`\nRestaurant Details`);
    console.log(`Name : ${this.restaurantInfo.rName}`);
    console.log(`City : ${this.restaurantInfo.rCity}`);
    console.log(`Max Guest : ${this.restaurantInfo.rMaxGuestCapacity}`);
    console.log(`Total Employees: ${this.restaurantInfo.rTotalEmployees}`);
    console.log(`Restaurant Id : ${this.restaurantInfo.restaurantId}`);
  }
}
module.exports = Restaurant;
