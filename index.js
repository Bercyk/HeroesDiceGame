import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))



function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()

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