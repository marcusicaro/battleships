/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
const Ship = (lngt, hts, snk) => {
  const shipĹength = lngt;
  let hits = hts;
  let sunk = snk;
  function hit() {
    return (this.hits += 1);
  }
  function isSunk() {
    if (this.hits === this.shipĹength) {
      return (this.sunk = 'yes');
    }
  }
  return {
    shipĹength, hits, sunk, hit, isSunk,
  };
};

module.exports = Ship;
