const { database} = require("./data.js")

const boatInventory = () => {
    return database.allFish
}

module.exports = { boatInventory }