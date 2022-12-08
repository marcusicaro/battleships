const Ship = require('./index');
const Gameboard = require('./index');

it('testing ship', () => {
  const shipTest = Ship(2, 0, 'no');
  expect(shipTest).toBeInstanceOf(Object);
  expect(shipTest.shipĹength).toBe(2);
  shipTest.hit();
  expect(shipTest.hits).toBe(1);
});

// it('testing gameboard', () => {
//   const ship1 = Ship(2, 0, 'no');
//   const gameboard = Gameboard(ship1);

//   // check if gameboard is an object
//   //   expect(Gameboard).toBeInstanceOf(Object);

//   // check if gameboard is returning the ship correctly
//   expect(gameboard.placeShip()).toBe(ship1);
// });
