const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

const playerSquare = document.getElementById('player');
const CPUSquare = document.getElementById('CPU');
const CPUPlayer = Player();
const playerBoard = Gameboard();
const CPUBoard = Gameboard();
// const firstPatrol = Ship(1, 0, 'no');
// const secondPatrol = Ship(1, 0, 'no');
// const thirdPatrol = Ship(1, 0, 'no');
// const fourthPatrol = Ship(1, 0, 'no');
// const firstSubmarine = Ship(2, 0, 'no');
// const secondSubmarine = Ship(2, 0, 'no');
// const thirdSubmarine = Ship(2, 0, 'no');
// const firstCruiser = Ship(3, 0, 'no');
// const secondCruiser = Ship(3, 0, 'no');
// const firstBattleship = Ship(4, 0, 'no');
// const shipsArray = [firstPatrol, secondPatrol, thirdPatrol, fourthPatrol, firstSubmarine, secondSubmarine, thirdSubmarine, firstCruiser, secondCruiser, firstBattleship];
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
  if (CPUBoard.board[square.target.id].shot) {
    return alert('already shot');
  }
  const squarePaint = document.getElementById(square.target.id);
  squarePaint.classList.add('hit');
  CPUBoard.receiveAttack(square.target.id);
  CPUPlayer.AIPlay(playerBoard);
  checkForAttacks(playerBoard);
  endGame();
}

function checkForAttacks(a) {
  a.board.forEach((el) => {
    if (el.shot) {
      const IDattacked = a.board.indexOf(el);
      const paintAttackOnPlayer = document.getElementById(IDattacked + 100);
      paintAttackOnPlayer.classList.add('hit');
      paintAttackOnPlayer.classList.remove('player-ship');
    }
  });
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

function createCPUSquad(board) {
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
  board.placeShip(1, firstPatrol);
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

createCPUSquad(CPUBoard);

function endGame() {
  console.log(CPUBoard.board);
  if (CPUBoard.displaySunkenShips() === true) {
    console.log(CPUBoard.board);
    return alert('Game over, you won.');
  }
  // console.log(playerBoard.board);
  if (playerBoard.displaySunkenShips() === true) {
    return alert('Game over, CPU won');
  }
}

function placePlayerShip(ship, name) {
  const xSearch = () => {
    const x = prompt(`${name} x location: please enter a number between 1 - 10`);
    if (!(x <= 10 && x >= 1) || Number(x) !== Math.round(x)) {
      return xSearch();
    }
    return x;
  };
  const ySearch = () => {
    if (ship.shipĹength === 1) {
      const y = prompt(`${name} y location: Please enter a number between 1 - 10`);
      if (!(y <= 10 && y >= 1) || Number(y) !== Math.round(y)) {
        return xSearch();
      }
      return y;
    }
    if (ship.shipĹength === 2) {
      const y = prompt(`${name} y location: Please enter a number between 1 - 9`);
      if (!(y <= 9 && y >= 1) || Number(y) !== Math.round(y)) {
        return xSearch();
      }
      return y;
    }
    if (ship.shipĹength === 3) {
      const y = prompt(`${name} y location: Please enter a number between 1 - 8`);
      if (!(y <= 8 && y >= 1) || Number(y) !== Math.round(y)) {
        return xSearch();
      }
      return y;
    }
    if (ship.shipĹength === 4) {
      const y = prompt(`${name} y location: Please enter a number between 1 - 7`);
      if (!(y <= 7 && y >= 1) || Number(y) !== Math.round(y)) {
        return xSearch();
      }
      return y;
    }
  };
  const xValue = Number(xSearch());
  const yValue = Number(ySearch());
  let userIndex = 0;
  const found = playerBoard.board.map((currElement, index) => {
    if (currElement[0] === xValue && currElement[1] === yValue) {
      return userIndex = index;
    }
  });
  if (playerBoard.board[userIndex].ship) {
    return placePlayerShip(ship, name);
  }
  const playerPaintID = (userIndex + 100);
  function paintShipPlace() {
    for (let i = 0; i < ship.shipĹength; i += 1) {
      const paintPlayerShip = document.getElementById((playerPaintID + i));
      paintPlayerShip.classList.add('player-ship');
    }
  }
  paintShipPlace();
  return playerBoard.placeShip(userIndex, ship);
}

function createPlayerSquad() {
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
  placePlayerShip(firstPatrol, 'First Patrol');
  placePlayerShip(secondPatrol, 'Second Patrol');
  placePlayerShip(thirdPatrol, 'Third Patrol');
  placePlayerShip(fourthPatrol, 'Fourth Patrol');
  placePlayerShip(firstSubmarine, 'First Submarine');
  placePlayerShip(secondSubmarine, 'Second Submarine');
  placePlayerShip(thirdSubmarine, 'Third Submarine');
  placePlayerShip(firstCruiser, 'First Cruiser');
  placePlayerShip(secondCruiser, 'Second Cruiser');
  placePlayerShip(firstBattleship, 'First Battleship');
}

createPlayerSquad();
