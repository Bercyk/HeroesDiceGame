import Hero from "./Hero.js"
import {getPercentage} from "./utils.js"



class GameTable{

    static count = 1

    constructor(heroCard){
        
        Object.assign(this, heroCard)
        //this.fightingCreature = this.getFightCreatureHtml()
        //this.attackSpell = this.getAttackSpellHtml()
        //this.passiveSpell = this.getPassiveSpellHtml()
        
        //this.summaryAttackScore = this.getSummaryAttackScoreHtml()
        
        //this.fightingCreature = document.getElementByClassName("creature selected")
        this.instanceId = GameTable.count++      

        //this.heroCard = heroCard1

    }

        getFightCreatureHtml(){

            

            const fightingCreatureId = document.querySelector(".creature-selected").id
            

            console.dir(this)

            return `<div id=${this.name} class="deck-placeholder">
                        <div class="creature-fight-status">
                            <img class="creature-fight-avatar" src="images/Creatures/Air_Elemental_portrait.gif">
                            <div class="health-bar-outer">
                                <div class="health-bar-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                    `
        }

        getPlayerDeckHtml(){

            const fightingCreature = this.getFightCreatureHtml()

            return `
            ${fightingCreature}
            `
        }
        

}
    



export default GameTable