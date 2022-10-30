/* Pscuedo code for Level 1 
 variables: score, scoreTotal, ball, 
 Javascript elements: addeventlister for listening to user input;
 Logic: User click on ball,score increases by 10 each time, with a total of 100 = game won.

 if score is less than 100 
   then accept input and keep going
 else state the winner   


 */
 let score = 0;
 let ball = document.querySelector('.js-ball');
 let scoreTotal = document.querySelector('.js-score');
 
 ball.addEventListener('click', function() {
   score += 10;
 
   if ( score < 100 ) {
     scoreTotal.innerText = score;
   } else {
     declareWinner();
   }
 });
 
 function declareWinner() {
   document.body.classList.add('game-over'); /*adds class game over if user gets 100 */
 }