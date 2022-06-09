import {getPercentage} from "./utils.js"

class GameTable{

    constructor(heroCard1, heroCard2){

        this.playersDataArray = [heroCard1, heroCard2]

        this.fightingCreatureArray = this.getFightingCreatureArray()
        this.fightingCreatureMaxHealthArray = this.getFightingCreatureMaxHealthArray()

        this.heroAttackSpellArray = this.getAttackSpellArray()

        this.heroPassiveSpellArray = this.getPassiveSpellArray()

    }

    getSelectedCreatureIndex(heroData){
        return parseInt(document.getElementById("Player"+heroData.heroInstanceId+"CreaturesLayout")
        .getElementsByClassName("creature-selected")[0].id
        .substring(document.getElementById("Player"+heroData.heroInstanceId+"CreaturesLayout")
        .getElementsByClassName("creature-selected")[0].id.length-1))
    }

    getFightingCreatureArray(){
        const fightingCreatureArray = this.playersDataArray.map((heroData) =>
            heroData.troops[this.getSelectedCreatureIndex(heroData)]
        )
        return fightingCreatureArray
    }

    // rolling dice

    getFightingCreatureDiceScoreArray(){

        this.fightingCreatureArray.forEach(creature => creature.diceScoreArray = creature.getCreatureDiceScoreArray())
    }

    // get damage summary

    getFightingCreatureDiceDamageScore(){
        
        const fightingCreatureDamageScoreArray = this.fightingCreatureArray.map((fightingCreature) =>
            fightingCreature.getCreatureDamageSummary()
        )

        return fightingCreatureDamageScoreArray
    }

    getFightingCreatureMaxHealthArray(){
        return new Array(this.fightingCreatureArray.length).fill(0).map((num, index) =>
            num = this.fightingCreatureArray[index].health
        )
    }

    getCreatureHealthBarArrayHtml(){
        const percentArray = new Array(this.fightingCreatureMaxHealthArray.length).fill(0).map((num, index) =>
            num = getPercentage(this.fightingCreatureArray[index].health, this.fightingCreatureMaxHealthArray[index])
        )

        return percentArray.map((percent) =>
                                                `<div class="health-bar-outer">
                                                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                                                        style="width:${percent}%;">
                                                  </div>
                                                </div>
                                                ` 
        )
    }

    getFightingCreatureArrayHtml(){

        const creatureHealthBarArray = this.getCreatureHealthBarArrayHtml()
        return new Array(this.playersDataArray.length).fill(0).map((num, index) => 
                    `<div id="Player${index+1}FightingCreature" class="deck-placeholder">
                         <div class="creature-fight-status">
                             <img class="creature-fight-avatar" src="${this.fightingCreatureArray[index].avatar}">
                             ${creatureHealthBarArray[index]}
                         </div>
                     </div>
                     `
        )   
    }
    
    // getEndTableHtml(){

    // }



    // TODO: create dataSpell with spells and their details
    // create method for getting arraySpell

    getAttackSpellArray(){
        const attackSpellArray = this.playersDataArray.map((heroData) =>
            heroData.specialties[0]
        )
        return attackSpellArray
    }

    getPassiveSpellArray(){
        const passiveSpellArray = this.playersDataArray.map((heroData) =>
            heroData.specialties[1]
        )
        return passiveSpellArray
    }

    getAttackSpellArrayHtml(){

        const attackSpellArray = this.getAttackSpellArray()

        return attackSpellArray.map((num, index) => 
            `<button id="Player${index+1}AttackSpell" class="btn-spell">
                    <p class="action-icon">🔥</p>
                </button>`
        )
    }

    getPassiveSpellArrayHtml(){

        const passiveSpellArray = this.getAttackSpellArray()

        return passiveSpellArray.map((num, index) => 
            `<button id="Player${index+1}PassiveSpell" class="btn-spell">
                    <p class="action-icon">📖</p>
                </button>`
        )
    }



    getPlayerDeckArrayHtml(){

        this.getFightingCreatureDiceScoreArray()

        const fightingCreatureArrayHtml = this.getFightingCreatureArrayHtml()
        const attackSpellArrayHtml = this.getAttackSpellArrayHtml()
        const passiveSpellArrayHtml = this.getPassiveSpellArrayHtml()

        return  new Array(this.playersDataArray.length).fill(0).map((num, index) =>
            attackSpellArrayHtml[index]+fightingCreatureArrayHtml[index]+passiveSpellArrayHtml[index]
        )
    }

    getDiceScoreHtml(diceScore){

        const diceArrayHtml = new Array(6);

        diceArrayHtml[0] = `<div class="dice">
                                <div class="dot face-one dot-1"></div>
                            </div>`
        diceArrayHtml[1] = `<div class="dice">
                                <div class="dot face-two dot-1"></div>
                                <div class="dot face-two dot-2"></div>
                            </div>` 
        diceArrayHtml[2] = `<div class="dice">
                                <div class="dot face-three dot-1"></div>
                                <div class="dot face-three dot-2"></div>
                                <div class="dot face-three dot-3"></div> 
                            </div>`
        diceArrayHtml[3] = `<div class="dice">
                                <div class="dot face-four dot-1"></div>
                                <div class="dot face-four dot-2"></div>
                                <div class="dot face-four dot-3"></div>
                                <div class="dot face-four dot-4"></div>  
                            </div>`
        diceArrayHtml[4] = `<div class="dice">
                                <div class="dot face-five dot-1"></div>
                                <div class="dot face-five dot-2"></div>
                                <div class="dot face-five dot-3"></div>
                                <div class="dot face-five dot-4"></div>
                                <div class="dot face-five dot-5"></div>   
                            </div>` 
        diceArrayHtml[5] = `<div class="dice">
                                <div class="dot face-six dot-1"></div>
                                <div class="dot face-six dot-2"></div>
                                <div class="dot face-six dot-3"></div>
                                <div class="dot face-six dot-4"></div>
                                <div class="dot face-six dot-5"></div>   
                                <div class="dot face-six dot-6"></div> 
                            </div>`
      
        return diceArrayHtml[diceScore-1]              
    }

    getFightingCreatureDiceContainerArrayHtml(){

        return this.fightingCreatureArray.map((fightingCreature, indexArray)=>
                    fightingCreature.diceScoreArray.map((diceValue, indexDice) =>
                        `<div id="dice${indexDice+1}CreaturePlayer${indexArray+1}">
                            ${this.getDiceScoreHtml(diceValue)}
                        </div>
                        `
                    ).join("")
                )
    }

    getGameDiceRollRender(){
        const playerDeckArrayHtml = this.getPlayerDeckArrayHtml()

        playerDeckArrayHtml.map((playerHtml, playerIndex) =>
            document.getElementById("player"+(playerIndex+1)+"Deck").innerHTML = playerHtml
        )

        const fightingCreatureDiceContainerArrayHtml = this.getFightingCreatureDiceContainerArrayHtml()
     
        fightingCreatureDiceContainerArrayHtml.map((playerHtml, playerIndex) =>
        document.getElementById("player"+(playerIndex+1)+"DiceContainer").innerHTML = playerHtml
        )
    }

    getTurnSummary(){


        //creature dice damage
        const fightingCreatureDiceDamageScoreArray = this.getFightingCreatureDiceDamageScore()

        this.fightingCreatureArray.map((fightingCreature) =>
            fightingCreature.health -= fightingCreatureDiceDamageScoreArray.pop()
        )

        this.getClearDiceContainer()

        const isCreatureDead = this.getGameStatus()

        if(isCreatureDead){
            console.log("creature dead")

            const test = this.fightingCreatureArray.map((fightingCreature, indexPlayer) =>
                fightingCreature.health <= 0 ?  true : false
            )

            console.log(test)

            // const test2 = test.filter((value, arrayIndex) => {
            //         if(value){
            //             value = arrayIndex
            //             return value
            //         }
            //     }
            // )

            const test2 = test.filter(function(value, arrayIndex) {

                value ? arrayIndex : ""
                // if(value){
                //     return arrayIndex
                // }
            })

            console.log(test2)



            //this.getFightingCreatureDispose()
        }
        else{
            const playerDeckArrayHtml = this.getPlayerDeckArrayHtml()

            playerDeckArrayHtml.map((playerHtml, playerIndex) =>
                document.getElementById("player"+(playerIndex+1)+"Deck").innerHTML = playerHtml
            )

        }

        
         
    }

    getFightingCreatureHealthArray(){
        return this.fightingCreatureArray.map((fightingCreature) =>
        fightingCreature.health
        )
    }

    getClearDiceContainer(){
        return new Array(this.fightingCreatureArray.length).fill(0).map((num, playerIndex)=>
        document.getElementById("player"+(playerIndex+1)+"DiceContainer").innerHTML = ""
        ) 
    }

    getFightingCreatureDispose(deadCreatureIndex){

        this.fightingCreatureArray.splice(deadCreatureIndex)

        console.log(this.fightingCreatureArray)
    
    }

    //returns true if one of creature's health is zero or smaller
    getGameStatus(){
        
        const fightingCreatureHealthArray =  this.getFightingCreatureHealthArray()
        
        const fightingCreatureStatusArray =  fightingCreatureHealthArray.map((creatureHealth) => 
            creatureHealth =  creatureHealth <= 0 ? true : false
        )
        
        return fightingCreatureStatusArray.some(creatureStatus => creatureStatus === true)
    }

    getEndCreatureFight(){


        const isCreatureDead = this.getGameStatus()
        

        
        if(isCreatureDead){
            //console.log("Player")
        }

    }


}
    



export default GameTable