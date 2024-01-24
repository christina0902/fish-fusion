const { database} = require("./data.js")

const chefsFish = (price, mongMenuArr, filteredArr, mongMenuData) => {
    for (const fish of mongMenuArr) {
        if (fish.price <= price) {
            let something = fish.amount / 2
            fish.amount -= something
            filteredArr.push(fish)
            if (fish.amount === 0) {
               delete(mongMenuArr.fish)
                //mongMenuArr.remove(fish)
            }
        }
    }
    return filteredArr
}

module.exports = {chefsFish}

