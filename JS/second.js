const theQuotes = [
    { 
        quote: 'Java is to JavaScript, <br> like Boter is to Boterham',
        from: 'M Auerbach, &copy; 2021'
    },
    { 
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        from: 'Eleonor Roosevelt'
    },
    { 
        quote: 'Life is what happens when you\'re busy making other plans',
        from: 'John Lennon'
    },
    { 
        quote: 'If life gives you lemons, <br> make lemonade',
        from: 'Dunno - sometime...'
    },
];

const quoteEl = document.querySelector('.quote');
const fromEl = document.querySelector('.copyright');
const reloadEl = document.querySelector('.reload');

function showQuote() {
    const getQuoteNo = Math.floor(Math.random() * theQuotes.length);
    const useQuote = theQuotes[getQuoteNo];
    quoteEl.innerHTML = useQuote.quote;
    fromEl.innerHTML = useQuote.from;
}

reloadEl.addEventListener('click', showQuote);

showQuote();


// Place JavaScript code above this line
console.log('Main JS loaded');