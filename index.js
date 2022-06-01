import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))



function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    getEventListeners(heroCard1)
    getEventListeners(heroCard2)
}


function getEventListeners(card){
    
    for(let i=0; i < card.troops.length; i++){

        document.getElementById("Player"+card.instanceId+"Creature"+i).addEventListener("click",function(){
            card.getUpdateHeroTroopsHtml(i)
        })
    }
}

render()