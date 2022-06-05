class TurnSummary{

    constructor(playersArray){
        
        this.playersArray = playersArray;
        
        this.player1 = playersArray.shift();
        this.player2 = playersArray.shift();
    }

    getRoundSummary() {

        //this.getFightingCreatureDamage()

        console.log(this)

    }

    getFightingCreatureDamage(){

        const player1CreatureDamage = this.player1.fightingCreature.getCreatureDamageSummary()
        const player2CreatureDamage = this.player2.fightingCreature.getCreatureDamageSummary()

        this.player1.fightingCreatureHealth = this.player1.fightingCreature.health - player2CreatureDamage
        this.player2.fightingCreatureHealth = this.player2.fightingCreature.health - player1CreatureDamage

        
    }
    getHeroesDamage(){
        
    }
    getHeroesSpellStatus(){

    }


}

export default TurnSummary