class Creature{
    constructor(dataCreature){
        Object.assign(this, dataCreature);

        // required to create creature health bar
        this.maxHealth = this.health
    }

    getTroopDetailsHtml(){

        const {name, 
            damageMin, damageMax, chanceRatio, 
            defense, health, diceCount} = this

        const creatureDice  = this.getCreatureDiceIconsHtml(diceCount)

        return `<div class="creatures-details">
                    <div class="creatures-stats">
                        <div class="stat-icon">
                            <img class="icon" src="images/Icons/dmg.png">
                            <p id="damage">: ${damageMin}-${damageMax}</p>
                        </div>
                        <div class="stat-icon">
                            <img class="icon" src="images/Icons/def.png">
                            <p id="defense">: ${defense}</p>
                        </div>
                        <div class="stat-icon">
                            <img class="icon" src="images/Icons/HP.png">
                            <p id="healthPoint">: ${health}</p>
                        </div>
                        <div class="stat-icon">
                            <img class="icon" src="images/Icons/chance.png">
                            <p id="chanceRatio">: ${chanceRatio}%</p>
                        </div>
                    </div>
                    <div class="creatures-description">
                        <h2 id="creatureName">${name}</h2>
                        <div class="creatures-dice-container">
                            ${creatureDice}
                        </div>
                        <button class="btn btn-selectCreature" id="selectCreatureBtn">Select creature</button>
                    </div>
                </div>
                `
    }

    getCreatureDiceIconsHtml(creatureDiceCount){
        return new Array(creatureDiceCount).fill(0).map(() =>
            `<img class="creature-dice" src="images/Icons/dice.png">`
        ).join("")
    }

    getCreatureSelectedHtml(selectedCreatureIndex, heroData){

        for(let i=0; i<heroData.troopsCount; i++){
            document.getElementById(heroData.name+"Creature"+i).classList = "creature-placeholder"
        }
        
        return document.getElementById(heroData.name+"Creature"+selectedCreatureIndex).classList = "creature-placeholder creature-selected"
    }

    getCreatureHtml(index, heroData){

        const {name, troops} = heroData

        return `<div id="${name}Creature${index}" class="creature-placeholder ${index === 0 ? `creature-selected` : ""}">
                    <img class="creature-avatar" src="${troops[index].avatar}">
                </div>`
    }
}

export default Creature