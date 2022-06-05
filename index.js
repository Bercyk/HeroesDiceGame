import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData, isEven} from "./utils.js"
import Hero from "./Hero.js"
import TurnSummary from "./TurnSummary.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))

const gameTableArray = new Array(2)

let roundFightCounter = 0

function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getCreaturesEventListeners()
    heroCard2.getCreaturesEventListeners()


}

render()



document.getElementById("btnAtt").addEventListener("click", () => {
    startGame()

})

function fightDiceRoll(){
    if(gameTableArray[0]&&gameTableArray[1]){
        const newArray = gameTableArray.map((gameTable) =>
            gameTable.getCreatureDiceContainerHtml(roundFightCounter)
        ).join("")
        document.getElementById("tableDeck").innerHTML = newArray
    }
    else{
        return false
    }
}

function startGame(){

    //TODO: NEW TURN SUMMARY -> 
    if(isEven(roundFightCounter)){
        fightDiceRoll()
        if(fightDiceRoll()){ 
            document.getElementById("btnAtt").innerText = "Sum up damage"
        }
    }
    else{
        const roundSummary = new TurnSummary(gameTableArray)

        roundSummary.getFightingCreatureDamage()
        // gameTableArray.map((gameTable) => 
        //     gameTable.getRoundSummary()
        // )
        
        

        console.log("need to take damage from characters, and render table and hero (if hit)")
        document.getElementById("btnAtt").innerText = "Fight! ⚔️"
    }
    
    roundFightCounter++
}

// TODO: change this action event to function

document.getElementById('Player1SelectCreatureBtn').onclick = function() {

    gameTableArray[0] = heroCard1.getSelectCreatureEventListener()
}
document.getElementById('Player2SelectCreatureBtn').onclick = function() {

    gameTableArray[1] = heroCard2.getSelectCreatureEventListener()
}

