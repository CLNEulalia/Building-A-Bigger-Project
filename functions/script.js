let turn = 0
let numMoves = 0

let rowTally = [[0, 0], [0, 0], [0, 0]]
let colTally = [[0, 0], [0, 0], [0, 0]]
let diagTally = [[0, 0], [0, 0]]

const boxes = $('.box')
const turnDiv = $('#turn')

boxes.click(boxSelect)

function boxSelect(e) {
    if (this.dataset.clicked == 'true') return
    const x = parseInt(this.dataset.x)
    const y = parseInt(this.dataset.y)

    editHTML(this)
    updateGame(x, y)
}


function togglePlayer () {
    turn = turn === 0 ? 1 : 0
    turnDiv.text(`Player ${currentChip()} it's your turn!`)
}


function currentChip () {
    return turn === 0 ? 'O' : 'X'
}


function incrementDiagonals (x, y) {
    if (y === x) diagTally[0][turn]++
    if ((y === 2 && x === 0) ||
        (y === 1 && x === 1) ||
        (y === 0 && x === 2)) diagTally[1][turn]++
}


function incrementChecks (x, y) {
    numMoves ++

    rowTally[x][turn] ++
    colTally[y][turn] ++

    incrementDiagonals(x, y)
}


function checkWin (x, y) {
    return (rowTally[x][turn] === 3 ||
            colTally[y][turn] === 3 ||
            diagTally[0][turn] === 3 ||
            diagTally[1][turn] === 3)
}


function resetBox () {
    boxes.text('')
    boxes.attr('data-clicked', 'false')
}


function resetGame () {
    rowTally = [[0, 0], [0, 0], [0, 0]]
    colTally = [[0, 0], [0, 0], [0, 0]]
    diagTally = [[0, 0], [0, 0]]
    numMoves = 0
    resetBox()
}


function checkReset (x, y) {
    const winner = checkWin(x, y)
    if (winner || numMoves >= 9) {
        const message = winner ? `Congrats ${currentChip()} you win!` : `No winner, resetting game`
        alert(message)
        resetGame()
    }
}


function editHTML (el) {
    $(el).text(currentChip())
    $(el).attr('data-clicked', 'true')
}


function updateGame (x, y) {
    incrementChecks(x, y)
    checkReset(x, y)

    togglePlayer()
}