const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    loading();
    // Pick a random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() *  apiQuotes.length)];
// Check if a author is unknown 
  if(!quote.author)
  {
      author.textContent = 'Unknown';
  }
  else{
    authorText.textContent = quote.author;
  }
//   Check the quote length to detemine styling
if(quote.text.length > 120)
{
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote');
}


//    Set Quote, Hide loader
    quoteText.textContent = quote.text;
    complete();

}

// Get Quotes from API
async function getQuotes() {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiURL);
        apiQuotes =await response.json();
        newQuote();

    }catch(error){
        // Catch error here

    }
}

// Tweet Quotes
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterbtn.addEventListener('click', tweetQuote);

//On load
getQuotes();
