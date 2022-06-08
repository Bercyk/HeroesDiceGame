import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData, isEven} from "./utils.js"
import Hero from "./Hero.js"
import GameTable from "./GameTable.js"

const heroCard1 = new Hero(getRandomObjectFromData(heroStats))
const heroCard2 = new Hero(getRandomObjectFromData(heroStats))

//const gameTableArray = [heroCard1, heroCard2]

let roundFightCounter = 0

let test = false
let isGameActive = false
let gameTable

function render(){
    document.getElementById("player1Card-El").innerHTML = heroCard1.getPlayerCardHtml()
    document.getElementById("player2Card-El").innerHTML = heroCard2.getPlayerCardHtml()
    
    heroCard1.getHeroCardCreatureEventListener()
    heroCard2.getHeroCardCreatureEventListener()

    heroCard1.getSelectedCreatureToGameTableHtml()
    heroCard2.getSelectedCreatureToGameTableHtml()
}

render()



document.getElementById("btnAtt").addEventListener("click", () => {
    
    if(!isGameActive){
        gameTable = new GameTable(heroCard1, heroCard2)
        isGameActive = true
    }
   
    //TODO: get data from table (selected creature) and do new gameTable which contains both fightingCreatures
    if(!test){
        
        gameTable.getGameDiceRollRender()
        test = true
    }
    else{
        gameTable.getTurnSummary()
        test = false
    }

    gameTable.getEndGame()
    
})










function fightDiceRoll(){
    if(gameTableArray[0]&&gameTableArray[1]){
        const getCreatureDiceContainerArrayHtml = gameTableArray.map((gameTable) =>
            gameTable.getCreatureDiceContainerHtml(roundFightCounter)
        ).join("")
        document.getElementById("tableDeck").innerHTML = getCreatureDiceContainerArrayHtml
        return true
    }
    else{
        return false
    }
}


// function startGame(){



//     //TODO: NEW TURN SUMMARY -> 
//     if(isEven(roundFightCounter)){
//         fightDiceRoll()
//         if(fightDiceRoll()){ 
//             document.getElementById("btnAtt").innerText = "Next turn"
//             roundFightCounter++
//         }
//         else{
//             alert("Select creature to fight!")
//         }
        
//     }
//     else{

//         document.getElementById("tableDeck").innerHTML = ""
        
//         const roundSummary = new TurnSummary(gameTableArray)  

//         roundSummary.getFightingCreatureDamage()
//         roundSummary.getRenderRoundSummary()

//         fightDiceRoll()
//         // gameTableArray.map((gameTable) => 
//         //     gameTable.getRoundSummary()
//         // )
        
        

//         //console.log("need to take damage from characters, and render table and hero (if hit)")
//         document.getElementById("btnAtt").innerText = "Fight! ⚔️"
//         roundFightCounter++
//     }
    
    
// }

// TODO: change this action event to function



