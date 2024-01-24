const { database} = require("./data.js")

const subractFish = (mongerArr, chefsArr) => {
   for (const fish of chefsArr) {
    if (mongerArr.includes(fish.species)) {
        mongerArr.fish.amount = fish.amount - mongerArr.fish.amount
    }
   }
   return
}

module.exports = {
    subractFish
}