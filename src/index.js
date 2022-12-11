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
  CPUBoard.displaySunkenShips();
  CPUPlayer.AIPlay(playerBoard);
  playerBoard.displaySunkenShips();
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
  const firstShip = Ship(1, 0, 'no');
  const secondShip = Ship(1, 0, 'no');
  const thirdShip = Ship(1, 0, 'no');
  board.placeShip(0, firstShip);
  board.placeShip(1, secondShip);
  board.placeShip(2, thirdShip);
}

placeShips(CPUBoard);
placeShips(playerBoard);
