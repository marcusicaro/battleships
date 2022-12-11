const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

const playerSquare = document.getElementById('player');
const CPUSquare = document.getElementById('CPU');
const CPUPlayer = Player();
const playerBoard = Gameboard();
const CPUBoard = Gameboard();
const firstPatrol = Ship(1, 0, 'no');
const secondPatrol = Ship(1, 0, 'no');
const thirdPatrol = Ship(1, 0, 'no');
const fourthPatrol = Ship(1, 0, 'no');
const firstSubmarine = Ship(2, 0, 'no');
const secondSubmarine = Ship(2, 0, 'no');
const thirdSubmarine = Ship(2, 0, 'no');
const firstCruiser = Ship(3, 0, 'no');
const secondCruiser = Ship(3, 0, 'no');
const firstBattleship = Ship(4, 0, 'no');
const shipsArray = [firstPatrol, secondPatrol, thirdPatrol, fourthPatrol, firstSubmarine, secondSubmarine, thirdSubmarine, firstCruiser, secondCruiser, firstBattleship];
let id = 0;
let playerID = 100;
let playerIDtoPlaceShip = 0;

playerBoard.populateBoard();
CPUBoard.populateBoard();

function createPlayerSquares() {
  const boardSquare = document.createElement('div');
  boardSquare.classList.add('board-box');
  boardSquare.setAttribute('id', playerID);
  boardSquare.addEventListener('click', (e) => {
    playerIDtoPlaceShip = e.target.id;
  });
  playerSquare.appendChild(boardSquare);
  playerID += 1;
}

function squareClick(square) {
  alert(CPUBoard.board[square.target.id]);
  CPUBoard.receiveAttack(square.target.id);
  CPUPlayer.AIPlay(playerBoard);
  endGame();
}

function createCPUSquares() {
  const boardSquare = document.createElement('div');
  boardSquare.setAttribute('id', id);
  boardSquare.classList.add('board-box');
  boardSquare.addEventListener('click', (e) => { squareClick(e); });
  CPUSquare.appendChild(boardSquare);
  id += 1;
}

function fillBoards() {
  playerBoard.board.forEach(() => createPlayerSquares());
  CPUBoard.board.forEach(() => createCPUSquares());
}

fillBoards();

function placeShips(board) {
  const CPUShipsArray = shipsArray;
  board.placeShip(0, CPUShipsArray[0]);
  board.placeShip(2, CPUShipsArray[1]);
  board.placeShip(4, CPUShipsArray[2]);
  board.placeShip(6, CPUShipsArray[3]);
  board.placeShip(8, CPUShipsArray[4]);
  board.placeShip(11, CPUShipsArray[5]);
  board.placeShip(14, CPUShipsArray[6]);
  board.placeShip(17, CPUShipsArray[7]);
  board.placeShip(20, CPUShipsArray[8]);
  board.placeShip(24, CPUShipsArray[9]);
}

placeShips(CPUBoard);

function endGame() {
  if (CPUBoard.displaySunkenShips() === 20) {
    return alert('Game over, you won.');
  }
  if (playerBoard.displaySunkenShips() === 20) {
    return alert('Game over, CPU won');
  }
}

function doSomething(ship, name) {
  const xSearch = () => {
    const x = prompt('X: Please enter a number between 1 - 10');
    if (!(x < 10 && x > 1) || Number(x) !== Math.round(x)) {
      return xSearch();
    }
    return x;
  };
  const ySearch = () => {
    const y = prompt('Y: Please enter a number between 1 - 10');
    if (!(y < 10 && y > 1) || Number(y) !== Math.round(y)) {
      return xSearch();
    }
    return y;
  };
  const xValue = Number(xSearch());
  const yValue = Number(ySearch());
  let userIndex = 0;
  const found = playerBoard.board.map((currElement, index) => {
    if (currElement[0] === xValue && currElement[1] === yValue) {
      return userIndex = index;
    }
  });
  console.log(userIndex);
}

doSomething();

// console.log(typeof [1, 2, 3, 4]);
