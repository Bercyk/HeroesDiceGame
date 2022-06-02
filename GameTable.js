import Hero from "./Hero.js"
import {getPercentage} from "./utils.js"



class GameTable{

    static count = 1

    constructor(heroCard){
        
        Object.assign(this, heroCard)
        //this.fightingCreature = this.getFightCreatureHtml()
        this.attackSpell = this.specialties[0]
        this.passiveSpell = this.specialties[1]
        //this.passiveSpell = this.getPassiveSpellHtml()
        
        //this.summaryAttackScore = this.getSummaryAttackScoreHtml()
        this.fightingCreature = this.troops[this.getChildIndexOfCreaturesLayout()]

        this.creatureHealth = this.fightingCreature.health
        this.creatureMaxHealth = this.fightingCreature.health

        this.tableInstanceId = GameTable.count++


    }

        getCreatureHealthBarHtml(){
            const percent = getPercentage(this.creatureHealth, this.creatureMaxHealth)
            return `<div class="health-bar-outer">
                        <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                        style="width:${percent}%;">
                        </div>
                    </div>
                    ` 
        }

        getChildIndexOfCreaturesLayout(){

            //let creatureIndex = parseInt(document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected").id.charAt(7))

            let creatureIndex = parseInt(document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected")[0].id.charAt(6))

            return creatureIndex
            // const child = document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").querySelector(" .creature-selected")
            // const parent = child.parentNode

            // return Array.prototype.indexOf.call(parent.children, child);
        }

        getFightCreatureHtml(){

            const creatureHealthBar = this.getCreatureHealthBarHtml()

            return `<div id="Player${this.tableInstanceId}${this.name}" class="deck-placeholder">
                        <div class="creature-fight-status">
                            <img class="creature-fight-avatar" src="${this.fightingCreature.avatar}">
                            ${creatureHealthBar}
                        </div>
                    </div>
                    `
        }

        // getSpellDetailsHtml(){
            // TODO: create dataSpell and assign values
        // }

        getAttackSpellHtml(){
            return `<button id="Player${this.heroInstanceId}AttackSpell" class="btn-spell">
                        <p class="action-icon">🔥</p>
                    </button>`
        }

        getPassiveSpellHtml(){
            return `<button id="Player${this.heroInstanceId}PassiveSpell" class="btn-spell">
                        <p class="action-icon">📖</p>
                    </button>`
        }

        getDiceArrayHtml(){

            const diceArrayHtml = new Array(6);

            diceArrayHtml[0] = `<div id="dice1Score" class="dice">
                                    <div class="dot face-one dot-1"></div>
                                </div>`

            diceArrayHtml[1] = `<div id="dice2Score" class="dice">
                                    <div class="dot face-two dot-1"></div>
                                    <div class="dot face-two dot-2"></div>
                                </div>` 

            diceArrayHtml[2] = `<div id="dice3Score" class="dice">
                                    <div class="dot face-three dot-1"></div>
                                    <div class="dot face-three dot-2"></div>
                                    <div class="dot face-three dot-3"></div> 
                                </div>`

            diceArrayHtml[3] = `<div id="dice4Score" class="dice">
                                    <div class="dot face-four dot-1"></div>
                                    <div class="dot face-four dot-2"></div>
                                    <div class="dot face-four dot-3"></div>
                                    <div class="dot face-four dot-4"></div>  
                                </div>`  

            diceArrayHtml[4] = `<div id="dice5Score" class="dice">
                                    <div class="dot face-five dot-1"></div>
                                    <div class="dot face-five dot-2"></div>
                                    <div class="dot face-five dot-3"></div>
                                    <div class="dot face-five dot-4"></div>
                                    <div class="dot face-five dot-5"></div>   
                                </div>` 

            diceArrayHtml[5] = `<div id="dice6Score" class="dice">
                                    <div class="dot face-six dot-1"></div>
                                    <div class="dot face-six dot-2"></div>
                                    <div class="dot face-six dot-3"></div>
                                    <div class="dot face-six dot-4"></div>
                                    <div class="dot face-six dot-5"></div>   
                                    <div class="dot face-six dot-6"></div> 
                                </div>`
                                
           return diceArrayHtml[1]                     

        }

        getPlayerDiceContainerHtml(){

            const diceScoreHtmlArray = this.getDiceArrayHtml()

            console.log(diceScoreHtmlArray)

            return `<div id="player${this.heroInstanceId}DiceContainer" class="table-dice-container">
                        ${diceScoreHtmlArray}
                    </div>`
        }

        getPlayerDeckHtml(){

            const fightingCreatureHTML = this.getFightCreatureHtml()

            const passiveSpellHtml = this.getPassiveSpellHtml()

            const attackSpellHtml = this.getAttackSpellHtml()

            return `
            ${attackSpellHtml}
            ${fightingCreatureHTML}
            ${passiveSpellHtml}
            `
        }

        getCreatureSelected(){

            if(!document.getElementById("Player"+this.heroInstanceId+"SelectCreatureBtn").getAttribute("listener")){
                document.getElementById("Player"+this.heroInstanceId+"SelectCreatureBtn").addEventListener("click", () => {

                    document.getElementById("player"+this.heroInstanceId+"Deck").innerHTML = this.getPlayerDeckHtml()
                })
            }
            else{
                document.getElementById("player"+this.heroInstanceId+"Deck").innerHTML = this.getPlayerDeckHtml()
            }


        }
        

}
    



export default GameTable