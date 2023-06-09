const players = ['X', 'O'];
let currentPlayer = players[0];
const squares = document.querySelectorAll('.square');
const restartButton = document.querySelector('#clear-button');

function handleCtick(event) {
  const clickedSquare = event.target;
  clickedSquare.textContent = currentPlayer;
  clickedSquare.removeEventListener('click', handleCtick);
  checkForWinner();
  switchPlayers();
}

function switchPlayers() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

let isDraw = true
for (let i = 0; i <squares.length; i++){
    if(squares[i].textContent ===''){
        isDraw = false;
        break;
    }
}

if (isDraw){
    alert('Draw!');
    return;
}

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      alert(`${currentPlayer} wins!`);
      restartGame();
    }
  }
}

function restartGame() {
  squares.forEach(square => {
    square.textContent = '';
    square.addEventListener('click', handleCtick, { once: true });
  });
  currentPlayer = players[0];
}

squares.forEach(square => {
  square.addEventListener('click', handleCtick, { once: true });
});

restartButton.addEventListener('click', restartGame);
