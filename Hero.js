import Creature from "./Creature.js"
import creatureStats from "./data/dataCreatures.js"
import {getPercentage, getRandomObjectFromData} from "./utils.js"

class Hero{

    static count = 1

    constructor(dataHero){
        
        Object.assign(this, dataHero)
        this.maxHealth = this.health       
        this.troops = this.getHeroCreatureArray()
        this.heroInstanceId = Hero.count++        
    }

    getHeroCreatureArray(){
        return new Array(this.troopsCount).fill(0).map(() =>
            new Creature(getRandomObjectFromData(creatureStats))
        )
    }

    getHeroHealthBarHtml(){
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                    style="width:${percent}%;">
                    </div>
                </div>
                ` 
    }

    getHeroContainerHtml(){
        const {name, heroClass, 
            avatar, health,
            attack, specialties, heroInstanceId} = this

        const heroHealthBar = this.getHeroHealthBarHtml()

        return `
            <div id="Player${heroInstanceId}hero" class="hero-container">
                <h2 class="hero-name" >${name}</h2>
                <div class="hero-details">
                    <img class="hero-avatar" src="${avatar}"/>                   
                    <div class="hero-stats">
                        <p class="hero-health">Health: ${health}</p>
                        ${heroHealthBar}
                        <p class="hero-attack">Attack: ${attack}</p>
                        <p class="hero-class">Class: ${heroClass}</p>
                        <p class="hero-special" id="heroSpecial1">${specialties[0]}</p>
                        ${specialties[1] ?  `<p class="hero-special" id="heroSpecial2">${specialties[1]}</p>` : ""}
                    </div>
                </div>
             </div>
            `
    }

    getHeroCreaturesLayoutHtml(){
        return this.troops.map((troopObject, index) => 
        troopObject.getCreatureHtml(index, this)
        ).join("")
    }

    getHeroTroopDetailsArray(){
        return this.troops.map((troopObject) =>
            troopObject.getTroopDetailsHtml()
        )
    }

    getUpdateHeroTroopsHtml(creatureIndex){

        this.troops[creatureIndex].getSelectedCreatureStyle(creatureIndex, this)

        const heroTroopDetailsArray = this.getHeroTroopDetailsArray()

        document.getElementById("Player"+this.heroInstanceId+"CreatureDescription").innerHTML = heroTroopDetailsArray[creatureIndex]

    }

    getHeroCardCreatureEventListener(){

        for(let i=0; i < this.troops.length; i++){
            document.getElementById("Player"+this.heroInstanceId+"Creature"+i).addEventListener("click",() =>
                this.getUpdateHeroTroopsHtml(i)
                )
        }
    }

    getSelectedCreatureToGameTableHtml(){

        document.getElementById("Player"+this.heroInstanceId+"SelectCreatureBtn").onclick = () => {
            
            const selectedCreature = this.troops[this.getIndexOfSelectedCreature()]
            document.getElementById("player"+this.heroInstanceId+"FightCreature").innerHTML = `<div class="creature-fight-status">
                                                                                                    <img class="creature-fight-avatar" src="${selectedCreature.avatar}">
                                                                                                </div>`
         }
    }

    getIndexOfSelectedCreature(){
        const creatureIndex = parseInt(document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected")[0].id.substring(document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").getElementsByClassName("creature-selected")[0].id.length-1))
        return creatureIndex
        
        // const child = document.getElementById("Player"+this.heroInstanceId+"CreaturesLayout").querySelector(" .creature-selected")
        // const parent = child.parentNode

        // return Array.prototype.indexOf.call(parent.children, child);
    }

    getPlayerCardHtml(){

        const instanceId = this.heroInstanceId
        const heroContainerHtml = this.getHeroContainerHtml()
        const heroCreaturesLayoutHtml = this.getHeroCreaturesLayoutHtml()
        const heroTroopDetailsArray = this.getHeroTroopDetailsArray()

        return `${heroContainerHtml}
                <div id="Player${instanceId}Troops" "class="troops-container"> 
                    <div id="Player${instanceId}CreaturesLayout" class="creatures-layout"> 
                        ${heroCreaturesLayoutHtml}
                    </div>
                    <div id="Player${instanceId}CreatureDescription" class="creatures-details">
                    ${heroTroopDetailsArray[0]}
                    </div>
                </div>
                <button class="btn btn-selectCreature" id="Player${instanceId}SelectCreatureBtn">Select creature</button>
                `
    }

}

export default Hero