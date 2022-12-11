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
  function placeShip(location, ship) { return this.board[location].ship = ship; }

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
    let result = 0;
    this.board.forEach((el) => {
      if (el.ship) {
        if (el.ship.sunk === 'yes') {
          result += 1;
        }
      }
    });
    if (result === 3) {
      return console.log('all ships are sunk');
    }
    return console.log('NOT ALL SHIPS ARE SUNK DAMN');
  }

  return {
    board, populateBoard, placeShip, receiveAttack, displayMissedAttacks, displaySunkenShips,
  };
};

module.exports = Gameboard;
