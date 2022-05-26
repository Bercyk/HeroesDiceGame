import creatureStats from "./data/dataCreatures.js"
import heroStats from "./data/dataHeroes.js"
import {getRandomObjectFromData} from "./utils.js"


// dumb data

const creature1 = {
    name: "Air Elemental",
    avatar: "images/Creatures/Air_Elemental_portrait.gif",
    damageMin: 2,
    damageMax: 9,
    chanceRatio: 90,
    defense: 9,
    health: 25,
    origin: "Conflux",
    diceCount: 1,
    diceScoreArray: []
}

const creature2 = {
    name: "Champion",
    avatar: "images/Creatures/Champion_portrait.gif",
    damageMin: 30,
    damageMax: 35,
    chanceRatio: 60,
    defense: 25,
    health: 120,
    origin: "Castle",
    diceCount: 2,
    diceScoreArray: []
}


// TODO: add form to choose between one or two players to play (can be random - computer)

                                            
document.getElementById("player1Troops").innerHTML = `
    <div class="creatures-layout">
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Air_Elemental_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Arch_Devil_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Black_Dragon_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Beholder_portrait.gif">
    </div>
    </div>
    <div class="creatures-details">
    <div class="creatures-stats">
        <div class="stat-icon">
            <img class="icon" src="images/Icons/dmg.png">
            <p id="damage">: 15-50</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/def.png">
            <p id="defense">: 25</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/HP.png">
            <p id="healthPoint">: 140</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/chance.png">
            <p id="chanceRatio">: 70%</p>
        </div>
    </div>
    <div class="creatures-description">
        <h2 id="creatureName">Dragon</h2>
        <div class="creatures-dice-container">
            <img class="creature-dice" src="images/Icons/dice.png">
            <img class="creature-dice" src="images/Icons/dice.png">
            <img class="creature-dice" src="images/Icons/dice.png">
        </div>
        <button class="btn btn-selectCreature" id="selectCreatureBtn">Select creature</button>
    </div>
    </div>
`
document.getElementById("player2Troops").innerHTML = `
    <div class="creatures-layout">
    <div class="creature-placeholder clear-border">
        <img class="creature-avatar creature-selected" src="images/Creatures/Air_Elemental_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Arch_Devil_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Black_Dragon_portrait.gif">
    </div>
    <div class="creature-placeholder">
        <img class="creature-avatar" src="images/Creatures/Beholder_portrait.gif">
    </div>
    </div>
    <div class="creatures-details">
    <div class="creatures-stats">
        <div class="stat-icon">
            <img class="icon" src="images/Icons/dmg.png">
            <p id="damage">: 15-50</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/def.png">
            <p id="defense">: 25</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/HP.png">
            <p id="healthPoint">: 140</p>
        </div>
        <div class="stat-icon">
            <img class="icon" src="images/Icons/chance.png">
            <p id="chanceRatio">: 70%</p>
        </div>
    </div>
    <div class="creatures-description">
        <h2 id="creatureName">Dragon</h2>
        <div class="creatures-dice-container">
            <img class="creature-dice" src="images/Icons/dice.png">
            <img class="creature-dice" src="images/Icons/dice.png">
            <img class="creature-dice" src="images/Icons/dice.png">
        </div>
        <button class="btn btn-selectCreature" id="selectCreatureBtn">Select creature</button>
    </div>
    </div>
`
                                            

function renderHero(player, data){

    const {name, avatar, health, attack, heroClass, specialties} = data;

    document.getElementById(`${player}Hero`).innerHTML = `
    <h2 class="hero-name" >${name}</h2>
    <div class="hero-details">
        <img class="hero-avatar" src="${avatar}"/>                   
        <div class="hero-stats">
            <p class="hero-health">Health: ${health}</p>
            <div class="health-bar-outer"><div class="health-bar-inner"></div></div>
            <p class="hero-attack">Attack: ${attack}</p>
            <p class="hero-class">Class: ${heroClass}</p>
            <p class="hero-special" id="heroSpecial1">${specialties[0]}</p>
            <p class="hero-special" id="heroSpecial2">${specialties[1]}</p>
        </div>
    </div>
`
}

// function renderCreature(player, data){

// }



let player
player = "player1"

//const player1Hero = new Hero(heroStats.)

//getting heros name to an array 
const heroPlayer1 = getRandomObjectFromData(heroStats)
const heroPlayer2 = getRandomObjectFromData(heroStats)

player = "player1"
renderHero(player, heroPlayer1)
player = "player2"
renderHero(player, heroPlayer2)