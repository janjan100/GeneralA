
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value); // id=#a, gets the value
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
     // are the user input number
    
    
    console.log(a);
    console.log(b);

     // are the user input number
    if(isNaN(a) || isNaN(b)){
      comparison = "N/A";
       // are the user input number
    }
    
    // is A more than B
    else if ( a > b){
      comparison = ">";
 // is A more than B

 // is B more than A
    }
  else if ( a < b){
      comparison = "<";
  }
  // is B more than A
else {
  comparison = "=";
}
     document.querySelector('#comparison').innerText = comparison;
   };
 