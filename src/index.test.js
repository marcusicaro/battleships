/* eslint-disable no-undef */
const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');

it('test Player function', () => {
  const playerTestGameboard = Gameboard();
  playerTestGameboard.populateBoard();

  const playerF = Player();
  expect(playerF.getCurrentPlayer()).toBe('player');
  playerF.play();
  expect(playerF.getCurrentPlayer()).toBe('PC');
  expect(playerF.AIPlay(playerTestGameboard)).toBe('player');
});

it('testing gameboard', () => {
  const ship1 = Ship(2, 0, 'no');
  const ship2 = Ship(1, 0, 'no');
  // const ship3 = Ship(3, 0, 'no');
  const gameboard = Gameboard();

  // assign ships to board
  // gameboard.boardShips(ship1, ship2, ship3);
  // expect(gameboard.ships).toEqual([ship1, ship2, ship3]);

  gameboard.populateBoard();

  expect(gameboard.board[0]).toEqual([1, 1]);
  expect(gameboard.board[1]).toEqual([1, 2]);

  // places ships for test
  gameboard.placeShip(gameboard.board[0], ship1);
  gameboard.placeShip(gameboard.board[1], ship2);

  // test attack on ship
  gameboard.receiveAttack(gameboard.board[0]);
  gameboard.receiveAttack(gameboard.board[1]);
  expect(gameboard.board[1].ship.sunk).toBe('yes');
  gameboard.displaySunkenShips();
  // expect(gameboard.board[0].shot).toBe(true);

  // // test missed attack
  gameboard.receiveAttack(gameboard.board[10]);
  expect(gameboard.board[1].shot).toBe(true);

  // gameboard.receiveAttack(gameboard.board[3]);
  // gameboard.receiveAttack(gameboard.board[4]);
  // gameboard.displayMissedAttacks();
});
