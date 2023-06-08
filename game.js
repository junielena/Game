const players = ['X', 'O'];
let currentPlayer = players[0];
const squares = document.querySelectorAll('.square');


function handleClick(event) {
    const square = event.target;
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
    displayWinner();
}

function clearBoard(){
    squares.forEach(square =>
        square.textContent ='');
}


squares.forEach(square =>
    square.addEventListener('click', handleClick)
    );
  

function checkForWinner() {
    const squares =
    Array.from(document.querySelectorAll('.square'));

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (squares[a].textContent === 
        squares[b].textContent && 
        squares[a].textContent === 
        squares[c].textContent && 
        squares[a].textContent !== "") {
      return true;
    }
  }
  return false;
}

function displayWinner(){
    const winner = checkForWinner();
    if (winner) {
        const message = 'Player ${currentPlayer} wins!';
        document.querySelector('.result').textContent = message;
    }
}
 
const clearButton =
document.querySelector('#clear-button');
clearButton.addEventListener('click', clearBoard);