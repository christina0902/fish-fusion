// const { mongerInventory } = require("./fishMonger.js")


const fishMenu = (fishForSaleArr) => {
    let meals = ""
    // const mongMenu = mongerInventory(price)
    
    meals += `<h1> Menu </h1> 
    <article class= "menu">
    `
    for (const fish of fishForSaleArr) {
        meals += `<h2> ${fish.species} </h2> 
        <section class= "menu__item"> ${fish.species} Soup </section>
        <section class= "menu__item"> ${fish.species} Sandwhich </section>
        <section class= "menu__item"> Grilled ${fish.species}  </section>
        `
    }
    meals += `</article>`
    return meals

}

module.exports = {fishMenu}

