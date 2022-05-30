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

    getCreatureSelectedHtml(index, heroData){

        const {name, troops} = heroData

        return `<div id="${name}Creature${index+1}" class="creature-placeholder">
                    <img class="creature-avatar creature-selected" src="${troops[index].avatar}">
                </div>`
    }

    getCreatureHtml(index, heroData){

        const {name, troops} = heroData

        return `<div id="${name}Creature${index+1}" class="creature-placeholder">
                    <img class="creature-avatar" src="${troops[index].avatar}">
                </div>`
    }

    getTroopsLayoutHtml(indexTroopsLayout, heroData){

        let troopArrayElement = new Array(heroData.troops.length).fill(0).map((element, index) =>
            this.getCreatureHtml(index, heroData)
            )

        switch(indexTroopsLayout){

            case 0:
                troopArrayElement[0] = this.getCreatureSelectedHtml(0,heroData)
            break;
            case 1:
                troopArrayElement[1] = this.getCreatureSelectedHtml(1,heroData)
            break;
            case 2:
                troopArrayElement[2] = this.getCreatureSelectedHtml(2,heroData)
            break;
            case 3:
                troopArrayElement[3] = this.getCreatureSelectedHtml(3,heroData)
            break;
        }
        
        return troopArrayElement.join("")

        // this.troopsPlaceholder = this.troops.map((number, index) => 
        //     `<div id="${this.name}creature${index+1}"class="creature-placeholder">
        //         <img class="creature-avatar" src="${number.avatar}">
        //     </div>`
        // )
        // if(this.isDefaultRender){
        //     this.troopsPlaceholder[0] = `<div id="${this.name}creature${1}"class="creature-placeholder">
        //     <img class="creature-avatar creature-selected" src="${this.troops[0].avatar}">
        //     </div>`
        //     this.isDefaultRender = false;
        // }

        // this.troopsPlaceholder.join("")


    }
}

export default Creature