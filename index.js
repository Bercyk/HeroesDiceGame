import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"
import GameTable from "./GameTable.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))
let isGameTable = false



function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()
    isGameTable = true

}

render()

if(isGameTable){

    document.getElementById("Player1SelectCreatureBtn").addEventListener("click", () => {
        const gameTable1 = new GameTable(heroCard1)
        document.getElementById("player1Deck").innerHTML = gameTable1.getPlayerDeckHtml(heroCard1)
    })

    document.getElementById("Player2SelectCreatureBtn").addEventListener("click", () => {
        const gameTable2 = new GameTable(heroCard2)
        document.getElementById("player2Deck").innerHTML = gameTable2.getPlayerDeckHtml(heroCard1)
    })
}








