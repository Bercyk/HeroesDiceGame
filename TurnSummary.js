class TurnSummary{

    constructor(playersArray){
        
        this.playersArray = playersArray;
        
        this.player1 = playersArray[0];
        this.player2 = playersArray[1];
    }

    getRenderRoundSummary() {

        this.playersArray.map((player)=>
            document.getElementById("player"+player.heroInstanceId+"Deck").innerHTML = player.getPlayerDeckHtml()
        )

        //TODO: 
        //TODO:
        // this.playersArray.map((player)=>
        //     player.    
        // )

        // document.getElementById("player1Deck").innerHTML = this.player1.getPlayerDeckHtml()
        // document.getElementById("player2Deck").innerHTML = this.player2.getPlayerDeckHtml()
    }

    getFightingCreatureDamage(){

        const player1CreatureDamage = this.player1.fightingCreature.getCreatureDamageSummary()
        const player2CreatureDamage = this.player2.fightingCreature.getCreatureDamageSummary()

        this.player1.fightingCreatureHealth = this.player1.fightingCreatureHealth - player2CreatureDamage
        this.player2.fightingCreatureHealth = this.player2.fightingCreatureHealth - player1CreatureDamage

        
    }
    getHeroesDamage(){
        
    }
    getHeroesSpellStatus(){

    }

    getFightCreaturesDiceRollHtml(roundFightCounter){
        if(this.playersArray[0]&&this.playersArray[1]){
            const getCreatureDiceContainerArrayHtml = this.playersArray.map((gameTable) =>
                gameTable.getCreatureDiceContainerHtml(roundFightCounter)
            ).join("")
            document.getElementById("tableDeck").innerHTML = getCreatureDiceContainerArrayHtml
            return true
        }
        else{
            return false
        }
    }


}

export default TurnSummary