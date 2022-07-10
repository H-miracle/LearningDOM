let btn = document.querySelector('#new__quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
   {
      quote: `"your confidence in the market is a important as your strategy"`,
      person: `Miracle fx`
   },
   {
      quote: `"never stop learning in the market"`,
      person: `Miracle fx`
   },
   {
      quote: `"the day you become complacent in the market is the beginning of your losses"`,
      person: `Miracle H`
   },
   {
      quote: `"the market is a study of human behaviour"`,
      person: `Miracle`
   },
   {
      quote: `"always remeber why you started"`,
      person: `Miracle fx`
   },
   {
      quote: `"the idea is to trade just like the commercials "`,
      person: `Miracle `
   },
];

btn.addEventListener('click', () => {

   let random = Math.floor(Math.random() * quotes.length);

   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
});