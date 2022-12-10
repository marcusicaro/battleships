/* eslint-disable prefer-const */
const Player = () => {
  const player = 'player';
  const computer = 'PC';
  let currentPlayer = player;

  function play() {
    if (this.currentPlayer === player) {
      this.currentPlayer = computer;
      return currentPlayer;
    }
    this.currentPlayer = player;
    return currentPlayer;
  }

  function AIPlay() { 'asda'; }

  return {
    currentPlayer, play, AIPlay,
  };
};

module.exports = Player;
