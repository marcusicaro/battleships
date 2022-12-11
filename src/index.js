const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

const playerSquare = document.getElementById('player');
const CPUSquare = document.getElementById('CPU');
const playerOne = Player();
const CPUPlayer = Player();
const playerBoard = Gameboard();
const CPUBoard = Gameboard();
let id = 0;

playerBoard.populateBoard();
CPUBoard.populateBoard();

function createPlayerSquares() {
  const boardSquare = document.createElement('div');
  boardSquare.classList.add('board-box');
  boardSquare.addEventListener('click', () => {});
  playerSquare.appendChild(boardSquare);
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
  board.placeShip(0, firstPatrol);
  board.placeShip(2, secondPatrol);
  board.placeShip(4, thirdPatrol);
  board.placeShip(6, fourthPatrol);
  board.placeShip(8, firstSubmarine);
  board.placeShip(11, secondSubmarine);
  board.placeShip(14, thirdSubmarine);
  board.placeShip(17, firstCruiser);
  board.placeShip(20, secondCruiser);
  board.placeShip(24, firstBattleship);
}

// function chooseShipPlace(...shipName) {
//   for (let i = 0; i < shipName.length; i++) {
//     CPUBoard.placeShip;
//   }
// }

placeShips(CPUBoard);
// placeShips(playerBoard);

function endGame() {
  if (CPUBoard.displaySunkenShips() === 20) {
    return alert('Game over, you won.');
  }
  if (playerBoard.displaySunkenShips() === 20) {
    return alert('Game over, CPU won');
  }
}
