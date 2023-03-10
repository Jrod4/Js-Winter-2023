const Restaurant = require("./Restaurant");
const House = require("./House");
const Members = require("./Members");

const r1 = new Restaurant("R1", "c2", 50, 20);
r1.close();
r1.open();
r1.showRestaurantDetails();
r1.close();
r1.showRestaurantDetails();
r1.removeEmployee(1);
r1.showRestaurantDetails();
r1.guestSittingNow(10);
r1.showCurrentGuestCount();
r1.guestSittingNow(-1);

// const h2 = new House("Mark", "New York Queens", 1000);

// h2.unlock()
// h2.lock();
// h2.clean()
// h2.showHouseDetails();
// h2.showTotalMembers();
// h2.addHouseMembers(100);
// h2.removeHouseMember(20);
// h2.showHouseDetails();
