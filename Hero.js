import Creature from "./Creature.js"
import creatureStats from "./data/dataCreatures.js"
import {getPercentage, getRandomObjectFromData, getTroopsPlaceholderHtml} from "./utils.js"

class Hero{
    constructor(dataHero){
        Object.assign(this, dataHero)

        this.maxHealth = this.health       
        this.troops = this.getHeroCreatureArray()
        
        this.isDefaultRender = true;
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
            attack, specialties} = this

        const heroHealthBar = this.getHealthBarHtml()

        return `
            <div id="${name.replace(/\s+/g, '')}" class="hero-container">
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

    getPlayerCardHtml(){

        const heroContainer = this.getHeroContainerHtml()
        //TODO: hero troops
        
        const heroTroopsLayoutArray = this.troops.map((troopObject, index) => 
                troopObject.getTroopsLayoutArrayHtml(index, this)
            )

        const heroTroopDetailsArray = this.troops.map((troopObject) =>
            troopObject.getTroopDetailsHtml()
        )


        return `${heroContainer}
                <div id="${this.name}Troops" "class="troops-container"> 
                    <div id="creaturesLayout" class="creatures-layout"> 
                        ${heroTroopsLayoutArray[0]}
                    </div>
                    ${heroTroopDetailsArray[0]}
                </div>`
    }

    getHeroCreatureArray(){
        return new Array(this.troopsCount).fill(0).map(() =>
            new Creature(getRandomObjectFromData(creatureStats))
        )
    }

    getHeroTroopsDetailsHtml(creatureIndex){
        
        const heroTroopsLayoutArray = this.troops.map((troopObject, index) => 
                troopObject.getTroopsLayoutArrayHtml(index, this)
            )

        const heroTroopDetailsArray = this.troops.map((troopObject) =>
            troopObject.getTroopDetailsHtml()
        )

        document.getElementById(`${this.name}Troops`).innerHTML = `
            <div id="creaturesLayout" class="creatures-layout"> 
                ${heroTroopsLayoutArray[creatureIndex-1]}
            </div>
            ${heroTroopDetailsArray[creatureIndex-1]}`
    }



}

export default Hero