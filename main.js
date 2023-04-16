let currentPlayer = "player1";
let gameMatrix = [];
let gameStatus = true;
let cout = 0;
const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const gameSquares = document.getElementsByClassName("square");

initializeGame();

function initializeGame() {
    alert(jogada);
    currentPlayer = "player1";
    gameStatus = true;
    gameMatrix = [];
    cout = 0;
    for (let i = 0; i < gameSquares.length; i++) {
        gameSquares[i].innerHTML = "";
        gameMatrix[i] = "";
    }
    for (let i = 0; i < gameSquares.length; i++) {
        gameMatrix[i] = "";
        gameSquares[i].addEventListener("click", () => {
            makeMove(gameSquares[i], i);
        });
    }
}

function makeMove(square, index) {
    if (
        !square.classList.contains("X") &&
        currentPlayer == "player1" &&
        gameStatus == true
    ) {
        square.innerHTML = "X";
        gameMatrix[index] = "X";
        currentPlayer = "player2";
        checkoutGameStatus("X");
        runAI();
    }
}

function runAI() {
    while (currentPlayer == "player2") {
        valuePlayer = Math.floor(Math.random() * 9);
        if (gameMatrix[valuePlayer] == "") {
            gameSquares[valuePlayer].innerHTML = "O";
            gameMatrix[valuePlayer] = "O";
            currentPlayer = "player1";
            checkoutGameStatus("O");
        }
    }
}

function checkoutGameStatus(jogada) {
    if (winGame(jogada)) {
        alert(jogada + " Venceu");
        gameStatus = false;
    }

    cout++;
    if (cout == 8 && gameStatus == true) {
        alert("Deu Velha");
        gameStatus = false;
    }
}

function winGame(jogada) {
    for (let i = 0; i < winningLines.length; i++) {
        let [a, b, c] = winningLines[i];
        if (
            gameMatrix[a] == jogada &&
            gameMatrix[b] == jogada &&
            gameMatrix[c] == jogada
        ) {
            return true;
        }
    }
    return false;
}
