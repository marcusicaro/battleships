(()=>{var t={498:t=>{t.exports=()=>({board:[],populateBoard:function(){for(let t=1;t<=10;t++)for(let e=1;e<=10;e++)this.board.push([t,e])},placeShip:function(t,e){return 1===e.shipĹength?this.board[t].ship=e:2===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e):3===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e,this.board[t+2].ship=e):4===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e,this.board[t+2].ship=e,this.board[t+3].ship=e):void 0},receiveAttack:function(t){return this.board[t].ship?(this.board[t].shot=!0,this.board[t].ship.hit(),this.board[t].ship.isSunk()):(this.board[t].shot=!0,this.board[t].missedShot=!0)},displayMissedAttacks:function(){this.board.forEach((t=>{!0===t.missedShot&&console.log(t)}))},displaySunkenShips:function(){let t=0;return this.board.forEach((e=>{e.ship&&"yes"===e.ship.sunk&&(t+=1)})),t}})},507:t=>{t.exports=()=>{let t=e=>{let i=Math.floor(100*Math.random());if(e.board[i].shot)return t(e);e.receiveAttack(i)};return{AIPlay:t}}},643:t=>{t.exports=(t,e,i)=>({shipĹength:t,hits:e,sunk:i,hit:function(){return this.hits+=1},isSunk:function(){if(this.hits===this.shipĹength)return this.sunk="yes"}})}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,i),n.exports}(()=>{const t=i(643),e=i(498),o=i(507),r=document.getElementById("player"),n=document.getElementById("CPU"),s=o(),a=e(),h=e(),p=[t(1,0,"no"),t(1,0,"no"),t(1,0,"no"),t(1,0,"no"),t(2,0,"no"),t(2,0,"no"),t(2,0,"no"),t(3,0,"no"),t(3,0,"no"),t(4,0,"no")];let d=0,c=100,u=0;a.populateBoard(),h.populateBoard(),a.board.forEach((()=>function(){const t=document.createElement("div");t.classList.add("board-box"),t.setAttribute("id",c),t.addEventListener("click",(t=>{u=t.target.id})),r.appendChild(t),c+=1}())),h.board.forEach((()=>function(){const t=document.createElement("div");t.setAttribute("id",d),t.classList.add("board-box"),t.addEventListener("click",(t=>{var e;e=t,alert(h.board[e.target.id]),h.receiveAttack(e.target.id),s.AIPlay(a),function(){if(20===h.displaySunkenShips())return alert("Game over, you won.");20===a.displaySunkenShips()&&alert("Game over, CPU won")}()})),n.appendChild(t),d+=1}())),function(t){const e=p;t.placeShip(0,e[0]),t.placeShip(2,e[1]),t.placeShip(4,e[2]),t.placeShip(6,e[3]),t.placeShip(8,e[4]),t.placeShip(11,e[5]),t.placeShip(14,e[6]),t.placeShip(17,e[7]),t.placeShip(20,e[8]),t.placeShip(24,e[9])}(h),function(t,e){const i=()=>{const t=prompt("X: Please enter a number between 1 - 10");return t<10&&t>1&&Number(t)===Math.round(t)?t:i()},o=Number(i()),r=Number((()=>{const t=prompt("Y: Please enter a number between 1 - 10");return t<10&&t>1&&Number(t)===Math.round(t)?t:i()})());let n=0;a.board.map(((t,e)=>{if(t[0]===o&&t[1]===r)return n=e})),console.log(n)}()})()})();