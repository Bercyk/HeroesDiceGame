import Creature from "./Creature.js"
import creatureStats from "./data/dataCreatures.js"
import {getPercentage, getRandomObjectFromData, getTroopsPlaceholderHtml} from "./utils.js"

class Hero{
    constructor(dataHero){
        Object.assign(this, dataHero)

        this.maxHealth = this.health
        //troops placeholder !
        this.troops = this.getHeroCreatureArray(this.troopsCount)
        this.troopsPlaceholder = getTroopsPlaceholderHtml(this.troopsCount)
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

    getHeroCardHtml(){
        const {name, heroClass, 
            avatar, health, 
            attack, specialties, troopsPlaceholder} = this

            const heroHealthBar = this.getHealthBarHtml()

            // generate random hero and troops
            const heroTroops = this.getHeroCreatureArray()
            
            //const creaturePlaceholder = this.getCreaturePlaceholderHtml()


        return `
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
             <div class="troops-container">
                <div class="creatures-layout">
                    {creaturePlaceholder ? creaturePlaceholder : troopsPlaceholder}
                </div>
            `
    }

    getCreaturePlaceholderHtml(){
        this.troopsPlaceholder = this.troops.map((num) => 
            `<div id="${this.name}creature${num}"class="creature-placeholder">
                <img class="creature-avatar" src="{this.troops[num].avatar}}">
            </div>`
        )
        return this.troopsPlaceholder.join("")
    }

    getHeroCreatureArray(){
        return new Array(this.troopsCount).fill(0).map(() =>
            new Creature(getRandomObjectFromData(creatureStats))
        )
    }

}

export default Hero