let currentPlayer = 'X';
let winner = null;
const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.getElementById('winner');

function makeMove(row, col) {
    if (winner || cells[row * 3 + col].textContent !== '') return;

    cells[row * 3 + col].textContent = currentPlayer;
    if (checkWinner()) {
        winner = currentPlayer;
        winnerDisplay.textContent = `Player ${winner} wins!`;
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        winnerDisplay.textContent = "It's a draw!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    for (const cell of cells) {
        cell.textContent = '';
    }
    winner = null;
    winnerDisplay.textContent = '';
    currentPlayer = 'X';
}

// Add a reset button to restart the game.
