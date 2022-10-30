/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreTotal = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
  if ( e.target.classList.contains('js-ball') ) {
    score += parseInt(e.target.dataset.increment);
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
