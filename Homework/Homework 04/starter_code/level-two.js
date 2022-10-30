/*
 * DOTS: Level Two
 * Logic: Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their score until they reach 100.
 * varibles: score, scoreTotal, arenaEl
 * 
 * 
 * 
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreTotal = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
  if ( e.target.classList.contains('js-ball') ) { /* if class has js.ball then add score and select winner*/
    score += 10;   /* adds score 10, each and selects winner */
    if ( score < 100 ) {
      scoreTotal.innerText = score;
    } else {
      declareWinner();
    }
  }
})

function declareWinner() {
  document.body.classList.add('game-over');
}

