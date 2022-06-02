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
            const child = document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").querySelector(".creature-selected")
            const parent = child.parentNode

            return Array.prototype.indexOf.call(parent.children, child);
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
        

}
    



export default GameTable