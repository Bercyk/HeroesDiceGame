class Creature{
    constructor(data){
        Object.assign(this, data);

        // required to create creature health bar
        this.maxHealth = this.health

 
    }

    getTroopHtml(dataTroop){
    
        const {avatar} = this
    
        const troopDetails = this.getTroopDetailsHtml(dataTroop)
                                              
        return `
            <div class="creatures-layout">
                <div id="player1Creature1"class="creature-placeholder">
                    <img class="creature-avatar" src="${avatar}">
                </div>
                <div id="player1Creature2" class="creature-placeholder">
    
                </div>
                <div id="player1Creature3" class="creature-placeholder">
    
                </div>
                <div id="player1Creature4" class="creature-placeholder">
    
                </div>
            </div>
            ${troopDetails}
        `
    }

    getTroopDetailsHtml(data){

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

    getCreatureDiceIconsHtml = (diceCount) => {
        return new Array(diceCount).fill(0).map(() =>
            `<img class="creature-dice" src="images/Icons/dice.png">`
        ).join("")
    }
}

export default Creature