// VARIABLES
let turn;
let gameGridArray = [
        [undefined, undefined, undefined], 
        [undefined, undefined, undefined], 
        [undefined, undefined, undefined]
    ]
let gameBoard;


// INITIALIZATION 
const init = () => {
    console.log("Initialization")
    turn        = document.getElementById("turn")
    gameBoard   = document.getElementById("gameBoard")
}
window.onload = init;

// FUNCTIONS
window.choose = (x, y) => {
    console.log(x, y)

    gameBoard.children[x].children[y].innerHTML = "x"
    gameGridArray[x][y] = "0"
    console.log(gameGridArray)
    updateTurn()
}

window.updateTurn = () => {
    let text = turn.innerText
    console.log(text)
    if (text.slice(0, 7) === "Crosses") {
        turn.innerHTML = "Naughts turn"
    } else {
        turn.innerHTML = "Crosses turn"
    }
}