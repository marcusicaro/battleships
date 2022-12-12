/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
const Gameboard = () => {
  const board = [];
  function populateBoard() {
    for (let i = 1; i <= 10; i++) {
      for (let a = 1; a <= 10; a++) {
        this.board.push([i, a]);
      }
    }
  }

  // place a ship on of the board elements
  function placeShip(location, ship) {
    if (ship.shipĹength === 1) { return this.board[location].ship = ship; }
    if (ship.shipĹength === 2) {
      this.board[location].ship = ship;
      return this.board[location + 1].ship = ship;
    }
    if (ship.shipĹength === 3) {
      this.board[location].ship = ship;
      this.board[location + 1].ship = ship;
      return this.board[location + 2].ship = ship;
    }
    if (ship.shipĹength === 4) {
      this.board[location].ship = ship;
      this.board[location + 1].ship = ship;
      this.board[location + 2].ship = ship;
      return this.board[location + 3].ship = ship;
    }
  }

  // checks if the attack hit a ship or not and changes the boardCoordinate status
  function receiveAttack(location) {
    if (this.board[location].ship) {
      this.board[location].shot = true;
      this.board[location].ship.hit();
      return this.board[location].ship.isSunk();
    }
    this.board[location].shot = true;
    return this.board[location].missedShot = true;
  }

  // shows all missed attacks on the screen
  function displayMissedAttacks() {
    this.board.forEach((el) => {
      if (el.missedShot === true) {
        console.log(el);
      }
    });
  }

  // display a list with all sunken ships
  function displaySunkenShips() {
    let theReturn = true;
    for (let i = 0; i < 99; i++) {
      if (this.board[i].ship) {
        if (this.board[i].ship.sunk === 'no') { return theReturn = false; }
      }
    }
    return theReturn;
  }

  return {
    board, populateBoard, placeShip, receiveAttack, displayMissedAttacks, displaySunkenShips,
  };
};

module.exports = Gameboard;
