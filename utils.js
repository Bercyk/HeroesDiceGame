function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1)
}

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth


function getRandomObjectFromData(object) {
    const key = Object.keys(object)
    return object[key[ key.length * Math.random() << 0]]
} 



export {getDiceRollArray, getPercentage, getRandomObjectFromData}