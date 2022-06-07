import {getPercentage, isEven} from "./utils.js"

class GameTable{

    constructor(heroCard1, heroCard2){

        this.playersDataArray = [heroCard1, heroCard2]

        this.fightingCreatureArray = this.getFightingCreatureArray()

        this.heroAttackSpellArray = this.getAttackSpellArray()

        this.heroPassiveSpellArray = this.getPassiveSpellArray()

    }

    getSelectedCreatureIndex(heroData){
        return parseInt(document.getElementById("Player"+heroData.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected")[0].id.substring(document.getElementById("Player"+heroData.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected")[0].id.length-1))
    }

    getFightingCreatureArray(){
        const fightingCreatureArray = this.playersDataArray.map((heroData) =>
            heroData.troops[this.getSelectedCreatureIndex(heroData)]
        )
        return fightingCreatureArray
    }

    getFightingCreatureDiceScoreArray(){
        const fightingCreatureDiceScoreArray = this.fightingCreatureArray.map((fightingCreature) =>
            fightingCreature.getCreatureDiceScoreArray()
        )
        console.log(fightingCreatureDiceScoreArray)
        return fightingCreatureDiceScoreArray
    }

    getFightingCreatureDamageScore(){
        
        const fightingCreatureDamageScoreArray = this.fightingCreatureArray.map((fightingCreature) =>
            fightingCreature.getCreatureDamageSummary()
        )

        console.log(fightingCreatureDamageScoreArray)

        return fightingCreatureDamageScoreArray
    }

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






    //static count = 1

    // constructor(heroCard){
        
    //     Object.assign(this, heroCard)
    //     this.attackSpell = this.specialties[0]
    //     this.passiveSpell = this.specialties[1]
    //     //this.tableInstanceId = GameTable.count++


    // }

    // getCreatureHealthBarHtml(){
    //     const percent = getPercentage(this.fightingCreatureHealth, this.fightingCreatureMaxHealth)
    //     return `<div class="health-bar-outer">
    //                 <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
    //                 style="width:${percent}%;">
    //                 </div>
    //             </div>
    //             ` 
    // }

    // getFightCreatureHtml(){

    //     const creatureHealthBar = this.getCreatureHealthBarHtml()

    //     return `<div id="Player${this.heroInstanceId}FightingCreature" class="deck-placeholder">
    //                 <div class="creature-fight-status">
    //                     <img class="creature-fight-avatar" src="${this.fightingCreature.avatar}">
    //                     ${creatureHealthBar}
    //                 </div>
    //             </div>
    //             `
    // }

    // // getSpellDetailsHtml(){
    //     // TODO: create dataSpell and assign attack values
    // // }

    // getAttackSpellHtml(){
    //     return `<button id="Player${this.heroInstanceId}AttackSpell" class="btn-spell">
    //                 <p class="action-icon">🔥</p>
    //             </button>`
    // }

    // getPassiveSpellHtml(){
    //     return `<button id="Player${this.heroInstanceId}PassiveSpell" class="btn-spell">
    //                 <p class="action-icon">📖</p>
    //             </button>`
    // }

    // getDiceScoreHtml(diceScoreIndex){

    //     const diceArrayHtml = new Array(6);

    //     diceArrayHtml[0] = `<div id="dice1Score" class="dice">
    //                             <div class="dot face-one dot-1"></div>
    //                         </div>`

    //     diceArrayHtml[1] = `<div id="dice2Score" class="dice">
    //                             <div class="dot face-two dot-1"></div>
    //                             <div class="dot face-two dot-2"></div>
    //                         </div>` 

    //     diceArrayHtml[2] = `<div id="dice3Score" class="dice">
    //                             <div class="dot face-three dot-1"></div>
    //                             <div class="dot face-three dot-2"></div>
    //                             <div class="dot face-three dot-3"></div> 
    //                         </div>`

    //     diceArrayHtml[3] = `<div id="dice4Score" class="dice">
    //                             <div class="dot face-four dot-1"></div>
    //                             <div class="dot face-four dot-2"></div>
    //                             <div class="dot face-four dot-3"></div>
    //                             <div class="dot face-four dot-4"></div>  
    //                         </div>`  

    //     diceArrayHtml[4] = `<div id="dice5Score" class="dice">
    //                             <div class="dot face-five dot-1"></div>
    //                             <div class="dot face-five dot-2"></div>
    //                             <div class="dot face-five dot-3"></div>
    //                             <div class="dot face-five dot-4"></div>
    //                             <div class="dot face-five dot-5"></div>   
    //                         </div>` 

    //     diceArrayHtml[5] = `<div id="dice6Score" class="dice">
    //                             <div class="dot face-six dot-1"></div>
    //                             <div class="dot face-six dot-2"></div>
    //                             <div class="dot face-six dot-3"></div>
    //                             <div class="dot face-six dot-4"></div>
    //                             <div class="dot face-six dot-5"></div>   
    //                             <div class="dot face-six dot-6"></div> 
    //                         </div>`
                            
    //     return diceArrayHtml[diceScoreIndex-1]                

    // }

    // getCreatureDiceHtml(diceValue, diceNumber){

    //     const creatureDiceHtml = this.getDiceScoreHtml(diceValue)

    //     return `<div id="dice${diceNumber}CreaturePlayer${this.heroInstanceId}">
    //                 ${creatureDiceHtml}
    //             </div>
    //             `
    // }

    // getCreatureDiceContainerHtml(roundFightCounter){

    //     if(isEven(roundFightCounter)){
    //         this.fightingCreature.diceScoreArray = this.fightingCreature.getCreatureDiceScoreArray()    
    //     }
    //     const diceScoreHtml = this.fightingCreature.diceScoreArray.map((num, index) =>
    //         this.getCreatureDiceHtml(num, index)
    //          ).join("")

    //     return `<div id="player${this.heroInstanceId}DiceContainer" class="table-dice-container">
    //                 ${diceScoreHtml}
    //             </div>`
    // }

    // getPlayerDeckHtml(){

    //     const fightingCreatureContainerHtml = this.getFightCreatureHtml()

    //     const passiveSpellHtml = this.getPassiveSpellHtml()

    //     const attackSpellHtml = this.getAttackSpellHtml()

    //     // TODO: HERE LOGGING GameTable
    //     //console.log(this)
    //     // TODO:

    //     return `
    //     ${attackSpellHtml}
    //     ${fightingCreatureContainerHtml}
    //     ${passiveSpellHtml}
    //     `
    // }  
    
    // //TODO: add take damage to creature
    // // TODO: add take damage to hero
    // // count it by ratio chance



}
    



export default GameTable