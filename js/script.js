// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];
//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "If you're having a bad day, catch a wave.",
		source: "Frosty Hesson",
		citation: "Surf Careers",
		year: "2019"
	},
	{
		quote: "Big waves aren't measured in feet, but in increments of fear.",
		source: "Buzzy Trent",
		citation: "Surf Careers",
		year: "2019"
	},
	{
		quote: "Surfing is not something you retire from.",
    source: "",
		citation: "Surf Careers",
		year: "2019"
	},
	{
		quote: "The best surfer out there is the one having the most fun.",
		source: "Phil Edwards",
		citation: "Surf Careers",
		year: "2019"
	},
	{
		quote: "If in doubt, paddle out.",
		source: "Nat Young",
		citation: "Surf Careers",
		year: "2019"
	},
];
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}
// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}