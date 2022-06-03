import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))

const gameTableArray = new Array(2)


function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()


}

render()




document.getElementById("btnAtt").addEventListener("click", () => {
    
    document.getElementById("tableDeck").innerHTML = 
    gameTableArray[0].getCreatureDiceContainerHtml() + gameTableArray[1].getCreatureDiceContainerHtml()   
})

document.getElementById('Player1SelectCreatureBtn').onclick = function() {

    gameTableArray[0] = heroCard1.getSelectCreatureEventListener()
}
document.getElementById('Player2SelectCreatureBtn').onclick = function() {

    gameTableArray[1] = heroCard2.getSelectCreatureEventListener()
    }