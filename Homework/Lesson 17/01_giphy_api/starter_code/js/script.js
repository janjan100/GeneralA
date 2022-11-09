
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "ua8UBbC6TluCrxugKmx5Lmq7NZBTak00";


async function giphySearch(e) {

  // prevent the page from submitting/reloading
e.preventDefault();
console.log("WEEE");
  // get the user input from the form
 let UserInput = document.querySelector('#search-form input[name="search-term"]').value;


  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
const requestURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + UserInput;
const potato = await fetch(requestURL);
  // convert your response data into .json()
const giphyData = await potato.json();
  // print your data to the console to see its format, dont forget to delete later
console.log(giphyData);
 // clear out all gifs from previous searches
document.getElementById('giphy-results').innerHTML="";


  // use a loop to create and append each image to the dom

}

// dont forget your event listener
document.getElementById('search-form').addEventListener('submit',giphySearch);
