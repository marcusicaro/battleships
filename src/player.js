/* eslint-disable prefer-const */
const Player = () => {
  const player = 'player';
  const computer = 'PC';
  let currentPlayer = player;

  let play = () => {
    if (currentPlayer === player) {
      currentPlayer = computer;
      return currentPlayer;
    }
    currentPlayer = player;
    return currentPlayer;
  };

  let AIPlay = (gameboard) => {
    let randomNuber = Math.floor(Math.random() * 100);
    if (!gameboard.board[randomNuber].shot) {
    //   console.log(randomNuber);
      gameboard.receiveAttack(randomNuber);
      currentPlayer = player;
      return currentPlayer;
    }
    return AIPlay(gameboard);
  };

  let getCurrentPlayer = () => currentPlayer;

  return {
    play, AIPlay, getCurrentPlayer,
  };
};

module.exports = Player;
