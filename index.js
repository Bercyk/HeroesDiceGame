import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))


document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()

for(let i=0; i < heroCard1.troops.length; i++){

    let heroName = heroCard1.name

    document.getElementById(heroName+"Creature"+i).addEventListener("click",function(){
            heroCard1.updateHeroTroops(i)
    })
}

const heroCard2 = new Hero(getRandomObjectFromData(heroStats))


document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()

for(let i=0; i < heroCard2.troops.length; i++){

    let heroName = heroCard2.name

    document.getElementById(heroName+"Creature"+i).addEventListener("click",function(){
            heroCard2.updateHeroTroops(i)
    })
}