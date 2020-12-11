let quote = ["The Best Way To Get Started Is To Quit Talking And Begin Doing.", 
"Don’t Let Yesterday Take Up Too Much Of Today.",
"We May Encounter Many Defeats But We Must Not Be Defeated.",
"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
"We Generate Fears While We Sit. We Overcome Them By Action.",
"Creativity Is Intelligence Having Fun.",
"You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
"Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
"You Don’t Have To Be Great To Start, But You Have To Start To Be Great.",
"Today’s Accomplishments Were Yesterday’s Impossibilities."
];

let randomQuote = quote[Math.floor(Math.random()*quote.length)];


/*let newQuote = [];
newQuote.push(randomQuote);
console.log(newQuote);*/

let quoteAppear = function () {
    document.getElementById("new-quote").innerHTML = randomQuote;
    document.getElementById("new-quote").style.visibility = "visible";
}

let quoteButton = document.getElementById("quote-button");

quoteButton.onclick = quoteAppear; 