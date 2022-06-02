import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"
import Hero from "./Hero.js"
import GameTable from "./GameTable.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))

let gameTable1
let gameTable2


function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()


    gameTable1 = new GameTable(heroCard1)
    gameTable2 = new GameTable(heroCard2)
    
    gameTable1.getCreatureSelected()
    gameTable2.getCreatureSelected()

    // document.getElementById("btnAtt").addEventListener("click", () => {
        
    // })

}

render()









