(()=>{var t={498:t=>{t.exports=()=>({board:[],populateBoard:function(){for(let t=1;t<=10;t++)for(let e=1;e<=10;e++)this.board.push([t,e])},placeShip:function(t,e){return 1===e.shipĹength?this.board[t].ship=e:2===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e):3===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e,this.board[t+2].ship=e):4===e.shipĹength?(this.board[t].ship=e,this.board[t+1].ship=e,this.board[t+2].ship=e,this.board[t+3].ship=e):void 0},receiveAttack:function(t){return this.board[t].ship?(this.board[t].shot=!0,this.board[t].ship.hit(),this.board[t].ship.isSunk()):(this.board[t].shot=!0,this.board[t].missedShot=!0)},displayMissedAttacks:function(){this.board.forEach((t=>{!0===t.missedShot&&console.log(t)}))},displaySunkenShips:function(){for(let t=0;t<99;t++)if(this.board[t].ship&&"no"===this.board[t].ship.sunk)return!1;return!0}})},507:t=>{t.exports=()=>{let t=e=>{let o=Math.floor(100*Math.random());if(e.board[o].shot)return t(e);e.receiveAttack(o)};return{AIPlay:t}}},643:t=>{t.exports=(t,e,o)=>({shipĹength:t,hits:e,sunk:o,hit:function(){return this.hits+=1},isSunk:function(){if(this.hits===this.shipĹength)return this.sunk="yes"}})}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}(()=>{const t=o(643),e=o(498),n=o(507),r=document.getElementById("player"),i=document.getElementById("CPU"),s=n(),a=e(),h=e();let d=0,p=100,c=0;function u(t,e){const o=()=>{const t=prompt(`${e} x location: please enter a number between 1 - 10`);return t<=10&&t>=1&&Number(t)===Math.round(t)?t:o()},n=Number(o()),r=Number((()=>{if(1===t.shipĹength){const t=prompt(`${e} y location: Please enter a number between 1 - 10`);return t<=10&&t>=1&&Number(t)===Math.round(t)?t:o()}if(2===t.shipĹength){const t=prompt(`${e} y location: Please enter a number between 1 - 9`);return t<=9&&t>=1&&Number(t)===Math.round(t)?t:o()}if(3===t.shipĹength){const t=prompt(`${e} y location: Please enter a number between 1 - 8`);return t<=8&&t>=1&&Number(t)===Math.round(t)?t:o()}if(4===t.shipĹength){const t=prompt(`${e} y location: Please enter a number between 1 - 7`);return t<=7&&t>=1&&Number(t)===Math.round(t)?t:o()}})());let i=0;if(a.board.map(((t,e)=>{if(t[0]===n&&t[1]===r)return i=e})),a.board[i].ship)return u(t,e);const s=i+100;return function(){for(let e=0;e<t.shipĹength;e+=1)document.getElementById(s+e).classList.add("player-ship")}(),a.placeShip(i,t)}a.populateBoard(),h.populateBoard(),a.board.forEach((()=>function(){const t=document.createElement("div");t.classList.add("board-box"),t.setAttribute("id",p),t.addEventListener("click",(t=>{c=t.target.id})),r.appendChild(t),p+=1}())),h.board.forEach((()=>function(){const t=document.createElement("div");t.setAttribute("id",d),t.classList.add("board-box"),t.addEventListener("click",(t=>{!function(t){if(h.board[t.target.id].shot)return alert("already shot");var e;document.getElementById(t.target.id).classList.add("hit"),h.receiveAttack(t.target.id),s.AIPlay(a),(e=a).board.forEach((t=>{if(t.shot){const o=e.board.indexOf(t),n=document.getElementById(o+100);n.classList.add("hit"),n.classList.remove("player-ship")}})),function(){if(console.log(h.board),!0===h.displaySunkenShips())return console.log(h.board),alert("Game over, you won.");!0===a.displaySunkenShips()&&alert("Game over, CPU won")}()}(t)})),i.appendChild(t),d+=1}())),function(e){const o=t(1,0,"no"),n=t(1,0,"no"),r=t(1,0,"no"),i=t(1,0,"no"),s=t(2,0,"no"),a=t(2,0,"no"),h=t(2,0,"no"),d=t(3,0,"no"),p=t(3,0,"no"),c=t(4,0,"no");e.placeShip(1,o),e.placeShip(2,n),e.placeShip(4,r),e.placeShip(6,i),e.placeShip(8,s),e.placeShip(11,a),e.placeShip(14,h),e.placeShip(17,d),e.placeShip(20,p),e.placeShip(24,c)}(h),function(){const e=t(1,0,"no"),o=t(1,0,"no"),n=t(1,0,"no"),r=t(1,0,"no"),i=t(2,0,"no"),s=t(2,0,"no"),a=t(2,0,"no"),h=t(3,0,"no"),d=t(3,0,"no"),p=t(4,0,"no");u(e,"First Patrol"),u(o,"Second Patrol"),u(n,"Third Patrol"),u(r,"Fourth Patrol"),u(i,"First Submarine"),u(s,"Second Submarine"),u(a,"Third Submarine"),u(h,"First Cruiser"),u(d,"Second Cruiser"),u(p,"First Battleship")}()})()})();