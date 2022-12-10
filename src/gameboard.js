/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
const Gameboard = () => {
  const board = [];
  function populateBoard() {
    for (let i = 1; i < 10; i++) {
      for (let a = 1; a < 10; a++) {
        this.board.push([i, a]);
      }
    }
  }

  // place a ship on of the board elements
  function placeShip(value, ship) { return value.ship = ship; }

  // checks if the attack hit a ship or not and changes the coordinate status
  function receiveAttack(coordinate) {
    if (coordinate.ship) {
      coordinate.shot = true;
      coordinate.ship.hit();
      coordinate.ship.isSunk();
    }
    coordinate.shot = true;
    return coordinate.missedShot = true;
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
    if (result === 2) {
      return console.log('all ships are sunk');
    }
    return console.log('NOT ALL SHIPS ARE SUNK DAMN');
  }

  return {
    board, populateBoard, placeShip, receiveAttack, displayMissedAttacks, displaySunkenShips,
  };
};

module.exports = Gameboard;
