import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))


document.getElementById("player1Card-El").innerHTML = heroCard1.getHeroCardHtml()

//console.log(heroCard1)



/////////////////////////////////////////////////////////////////////////
//getting random object from data
// const randomHero1 = getRandomObjectFromData(heroStats)
// const randomHero2 = getRandomObjectFromData(heroStats)

// const randomCreature1 = getRandomObjectFromData(creatureStats)
// const randomCreature2 = getRandomObjectFromData(creatureStats)

// /////////////////////////////////////////////////////////////////////////

// const getCreatureDiceIconsHtml = (diceCount) => {
//     return new Array(diceCount).fill(0).map(() =>
//         `<img class="creature-dice" src="images/Icons/dice.png">`
//     ).join("")
// }


// // TODO: add form to choose between one or two players to play (can be random - computer)

// // function createTroop(player, dataTroop){
    
// //     const {name, avatar, 
// //         damageMin, damageMax, chanceRatio, 
// //         defense, health,
// //         diceCount, diceScoreArray} = dataTroop

// //     const creatureDice  = getCreatureDiceIconsHtml(diceCount)
                                          
// //     document.getElementById(`${player}Troops`).innerHTML = `
// //         <div class="creatures-layout">
// //             <div id="player1Creature1"class="creature-placeholder">
// //                 <img class="creature-avatar" src="${avatar}">
// //             </div>
// //             <div id="player1Creature2" class="creature-placeholder">

// //             </div>
// //             <div id="player1Creature3" class="creature-placeholder">

// //             </div>
// //             <div id="player1Creature4" class="creature-placeholder">

// //             </div>
// //         </div>
// //         <div class="creatures-details">
// //             <div class="creatures-stats">
// //                 <div class="stat-icon">
// //                     <img class="icon" src="images/Icons/dmg.png">
// //                     <p id="damage">: ${damageMin}-${damageMax}</p>
// //                 </div>
// //                 <div class="stat-icon">
// //                     <img class="icon" src="images/Icons/def.png">
// //                     <p id="defense">: ${defense}</p>
// //                 </div>
// //                 <div class="stat-icon">
// //                     <img class="icon" src="images/Icons/HP.png">
// //                     <p id="healthPoint">: ${health}</p>
// //                 </div>
// //                 <div class="stat-icon">
// //                     <img class="icon" src="images/Icons/chance.png">
// //                     <p id="chanceRatio">: ${chanceRatio}%</p>
// //                 </div>
// //             </div>
// //             <div class="creatures-description">
// //                 <h2 id="creatureName">${name}</h2>
// //                 <div class="creatures-dice-container">
// //                     ${creatureDice}
// //                 </div>
// //                 <button class="btn btn-selectCreature" id="selectCreatureBtn">Select creature</button>
// //             </div>
// //         </div>
// //     `
// // }


// // creating Hero instances according to random hero data

// const heroCardPlayer1 = new Hero(randomHero1)
// const heroCardPlayer2 = new Hero(randomHero2)


// const creatureCardPlayer1 = new Creature(randomCreature1)
// const creatureCardPlayer2 = new Creature(randomCreature2)


// function render(){
//     document.getElementById("player1Hero").innerHTML = heroCardPlayer1.getHeroHtml()
//     document.getElementById("player2Hero").innerHTML = heroCardPlayer2.getHeroHtml()

//     document.getElementById("player1Troops").innerHTML = creatureCardPlayer1.getTroopHtml()
//     document.getElementById("player2Troops").innerHTML = creatureCardPlayer2.getTroopHtml()

// }


// render()

// // let player = "player1"
// // createTroop(player, randomCharacter1)
// // player = "player2"
// // createTroop(player, randomCharacter2)

// // TO CREATE HERO SELECTOR
// // function render(){
// //     document.getElementById("player1Hero").innerHTML = heroCardPlayer1.getHeroHtml()
// //     document.getElementById("player2Hero").innerHTML = heroCardPlayer2.getHeroHtml()

// // }