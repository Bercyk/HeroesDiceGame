import {getPercentage, getRandomObjectFromData} from "./utils.js"

class Hero{
    constructor(data){
        Object.assign(this, data)

        this.maxHealth = this.health
        //troops placeholder !
    }
    getHeroTroopArray(){
        // create new troop from Creature constructor

        // get random troop
        //getRandomObjectFromData
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

    getHeroHtml(data){
        const {name, heroClass, 
            avatar, health,
            attack, specialties} = this

            const heroHealthBar = this.getHealthBarHtml()
            // random troop array
            //troops = this.getHeroTroopsArray()

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
            `
    }

    getTroopsHtml(data, character){

    }

}

export default Hero