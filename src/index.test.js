/* eslint-disable no-undef */
const Ship = require('./ship');
const Gameboard = require('./gameboard');

it('testing ship', () => {
  const shipTest = Ship(2, 0, 'no');
  expect(shipTest).toBeInstanceOf(Object);
  expect(shipTest.shipĹength).toBe(2);
  shipTest.hit();
  expect(shipTest.hits).toBe(1);
});

it('testing gameboard', () => {
  const ship1 = Ship(2, 0, 'no');
  const gameboard = Gameboard(ship1);
  gameboard.populateBoard();

  expect(gameboard.board[0]).toEqual([1, 1]);
  expect(gameboard.board[1]).toEqual([1, 2]);

  // places a ship for test
  gameboard.placeShip(gameboard.board[0], ship1);

  // test attack on ship
  expect(gameboard.receiveAttack(1, 1)).toBe(1);

  // test missed attack
  gameboard.receiveAttack(gameboard.board[1]);
  expect(gameboard.board[1].missedShot).toBe(true);
});
