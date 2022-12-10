/* eslint-disable no-return-assign */
const Ship = (shipĹength, hits, sunk) => ({
  shipĹength,
  hits,
  sunk,
  hit() {
    return (this.hits += 1);
  },
  isSunk() {
    if (this.hits === this.shipĹength) {
      return (this.sunk = 'yes');
    }
  },
});

module.exports = Ship;
