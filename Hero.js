import {getHealthBarHtml, getPercentage} from "./utils.js"

class Hero{
    constructor(data){
        Object.assign(this, data)

        this.maxHealth = this.health
        //troops placeholder !
    }
    getHeroTroop(){
        // create new troop from Creature constructor
        
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

}