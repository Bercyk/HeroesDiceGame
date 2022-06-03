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

    const gameTablePlayer1 = heroCard1.getSelectCreatureEventListener()
    const gameTablePlayer2 = heroCard2.getSelectCreatureEventListener()


    document.getElementById("btnAtt").addEventListener("click", () => {
        if(gameTablePlayer1){
        document.getElementById("tableDeck").innerHTML = gameTablePlayer1.getCreatureDiceContainerHtml()
        }
        if(gameTablePlayer2){
            document.getElementById("tableDeck").innerHTML = gameTablePlayer2.getCreatureDiceContainerHtml()
        }    
    })


}

render()





