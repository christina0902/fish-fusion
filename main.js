const { mongerInventory } = require("./fishMonger.js")
const { boatInventory } = require("./fishingBoat.js")
const { fishMenu } = require("./restaurant.js")
const { chefsFish } = require("./chefsFish.js")
const { database} = require("./data.js")
const {subractFish} = require("./updatedMongInventory.js")


let dailyPriceLimit = 8.01
const dailyCatch = boatInventory()
let fishForSale = mongerInventory(dailyCatch, database.mongMenu)
console.log(database.mongMenu)
let chefsFishies = chefsFish(dailyPriceLimit, fishForSale, database.filteredMongMenu,database.mongMenu)
//subractFish(database.mongMenu, database.filteredMongMenu)
let menu = fishMenu(chefsFishies)
console.log(menu)
console.log("--------")
console.log(database.mongMenu)

console.log(`------------`)
dailyPriceLimit = 5.5
fishForSale = mongerInventory(dailyCatch, database.mongMenu)
chefsFishies = chefsFish(dailyPriceLimit, fishForSale, database.filteredMongMenu)
menu = fishMenu(chefsFishies)
console.log(menu)

const kelsey = "kelsey jordan mcnutt"

const newComment = "did it work?"