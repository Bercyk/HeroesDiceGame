// function getDiceRollArray(diceCount) {
//     return new Array(diceCount).fill(0).map(() =>
//         Math.floor(Math.random() * 6) + 1)
// }

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth


function getRandomObjectFromData(object) {
    const key = Object.keys(object)
    return object[key[ key.length * Math.random() << 0]]
} 

function getTroopsPlaceholderHtml(troopsCount) {
    return new Array(troopsCount).fill(0).map(()=>
        `<div class="creature-placeholder">
        </div>`
    ).join("")
}


export {getPercentage, getRandomObjectFromData, getTroopsPlaceholderHtml}