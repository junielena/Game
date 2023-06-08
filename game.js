const players = ['X', 'O'];
let currentPlayer = players[0];
const squares = document.querySelectorAll('.square');


function handleClick(event) {
    const square = event.target;
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
    if(checkWinningCondition()){
        alert('${currentPlayer} won!');
    }
    
    currentPlayer = currentPlayer ===
    players[0] ? players[1] : players[0];
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


  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (squares[a].textContent === 
        currentPlayer &&
        squares[b].textContent ===
        currentPlayer &&
        squares[c].textContent ===
        currentPlayer){
            return true;

        } 
        
    }

  return false;
}


const clearButton =
document.querySelector('#clear-button');
clearButton.addEventListener('click', clearBoard);