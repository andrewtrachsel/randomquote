var quotes = [

  {
   quote: "Skiing combines outdoor fun with knocking down trees with your face.",
   source: "Dave Berry",
   citation: "quotationspage.com",
   tags: "Humor, Sports"
 },

  {
    quote: "Power never takes a back step",
    source: "Malcom X",
    citation: "quotationspage.com",
    tags: "Politics"
  },

  {
    quote: "I think it's absolutely a blessing when you just know what your purpose is and your destiny.",
    source: "Lady Gaga",
    citation: "quotationspage.com",
    tags: "Music, Self"
  },
];



function getRandomQuote() {

var randomNumber = Math.floor(Math.random() * quotes.length);

  for (var i = 0; i < quotes.length; i += 1) {
    return quotes[randomNumber];
  }
}





function printQuote() {

 var randomQuote = getRandomQuote();

  var message = '<p class ="quote">' + randomQuote.quote + '</p>';
  message += '<p class ="source">' + randomQuote.source;
  if (! randomQuote.citation) {
  } else {
    message += '<span class ="citation">' + randomQuote.citation + '</span>';
  }
  if (! randomQuote.year) {
  } else {
    message += '<span class ="year">' + randomQuote.year + '</span>';
  }
  message += ', <span class="tags">' + randomQuote.tags + '</span></p>';

	document.getElementById('quote-box').innerHTML = message;

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);