/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
const Gameboard = () => ({
  board: [],
  populateBoard() {
    for (let i = 1; i < 10; i++) {
      for (let a = 1; a < 10; a++) {
        this.board.push([i, a]);
      }
    }
  },

  placeShip(value, ship) { return value.ship = ship; },

  receiveAttack(coordinate) {
    if (coordinate.ship) {
      returncoordinate.ship.hit();
    }
    return coordinate.missedShot = true;
  },
});

module.exports = Gameboard;
