// const { allFish } = require("./data.js")
// const { boatInventory } = require("./fishingBoat.js")

// const allFish = boatInventory()


const mongerInventory = (arrOfFish, mongMenuArr) => {


    for (const fish of arrOfFish) {
        if (fish.price < 7.50 && fish.amount >= 10) {
            mongMenuArr.push(
                {
                    species: fish.species,
                    weight: fish.weight,
                    price: fish.price,
                    amount: 10
                }
            ) 
        
        }
        
    }
    return mongMenuArr
}


    
module.exports = {mongerInventory}

