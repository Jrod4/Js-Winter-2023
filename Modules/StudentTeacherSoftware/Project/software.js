const Restaurant = require("./Restaurant");
const House = require("./House");
const Members = require("./Members");



const r1 = new Restaurant("R1", "c2", 10, 2);
r1.close()
r1.open()
r1.showRestaurantDetails(`\n`);

const h2 = new House("Mark","New York Queens", 3);
 
 h2.unlock()
 //h2.lock();
 h2.showHouseDetails();

const m3 = new Members("jeff", "boston", 8);
m3.addMembers(2)




