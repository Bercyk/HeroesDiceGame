import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"
import GameTable from "./GameTable.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))

const gameTable1 = new GameTable(heroCard1)

console.log(heroCard1)


function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()

    document.getElementById("player1Deck").innerHTML = gameTable1.getPlayerDeckHtml(heroCard1)

    // getCreaturesEventListeners(heroCard1)
    // getCreaturesEventListeners(heroCard2)
}


// function getCreaturesEventListeners(card){
    
//     for(let i=0; i < card.troops.length; i++){
//         document.getElementById("Player"+card.instanceId+"Creature"+i).addEventListener("click",function(){
//             card.getUpdateHeroTroopsHtml(i)
//         })
//     }
// }







render()