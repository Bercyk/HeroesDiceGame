import Creature from "./Creature.js"
import creatureStats from "./data/dataCreatures.js"
import {getPercentage, getRandomObjectFromData, getTroopsPlaceholderHtml} from "./utils.js"

class Hero{

    static count = 1

    constructor(dataHero){
        
        Object.assign(this, dataHero)
        this.maxHealth = this.health       
        this.troops = this.getHeroCreatureArray()
        this.instanceId = Hero.count++
        
    }

    getHeroCreatureArray(){
        return new Array(this.troopsCount).fill(0).map(() =>
            new Creature(getRandomObjectFromData(creatureStats))
        )
    }

    getHealthBarHtml(){
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
            attack, specialties, instanceId} = this

        const heroHealthBar = this.getHealthBarHtml()

        return `
            <div id="Player${instanceId}hero" class="hero-container">
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

        document.getElementById("Player"+this.instanceId+"CreatureDescription").innerHTML = heroTroopDetailsArray[creatureIndex]

    }

    getPlayerCardHtml(){

        const instanceId = this.instanceId
        const heroContainer = this.getHeroContainerHtml()
        const heroCreaturesLayoutHtml = this.getHeroCreaturesLayoutHtml()
        const heroTroopDetailsArray = this.getHeroTroopDetailsArray()

        return `${heroContainer}
                <div id="Player${instanceId}Troops" "class="troops-container"> 
                    <div id="Player${instanceId}CreaturesLayout" class="creatures-layout"> 
                        ${heroCreaturesLayoutHtml}
                    </div>
                    <div id="Player${instanceId}CreatureDescription">
                    ${heroTroopDetailsArray[0]}
                    </div>
                </div>`
    }


}

export default Hero