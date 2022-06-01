import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))


document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()

for(let i=0; i < heroCard1.troops.length; i++){

    document.getElementById("Player"+heroCard1.instanceId+"Creature"+i).addEventListener("click",function(){
            heroCard1.updateHeroTroops(i)
    })
}

// console.dir(heroCard1)

// console.log(heroCard1.instanceId)

const heroCard2 = new Hero(getRandomObjectFromData(heroStats))


document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()

for(let i=0; i < heroCard2.troops.length; i++){

    document.getElementById("Player"+heroCard2.instanceId+"Creature"+i).addEventListener("click",function(){
            heroCard2.updateHeroTroops(i)
    })
}

// console.dir(heroCard2)

// console.log(heroCard2.instanceId)