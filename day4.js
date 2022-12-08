const Quotes = [
  "You don't know who's watching you, do that thing right.",
  "Life is a stage and you are an actor who has a role to play",
  "Our thinking faculty is quite differnt hence our output varies.",
  "Lust is not Love, Lust might be blind but God is Love",
  "The rate at which you pratice is directly proportional to your ability",
  "Success is not a destination, Success is a Journey",
  "Take things poco a poco otherwise you'll not gain anything",
  "Don't start your climbing at the top of the ladder, you're prone to fall!",
  "Prepare yourself for what is coming ahead, don't be left out!",
  "When you Wake up daily, ask yourself; AM I STILL IN POWER.",
  "Do you know that a Life without Christ is full of crisis.",
  "Light is not obscure, learn to be transparent",
  "Cheer up! Today does not paint tomorrow black.",
  "Don't just be a sucessful person on earth while you are improvished spirtually",
  "Have you ever think of where you'll spend your eternity.",
  "With great power comes great responsibiltiy.",
  "Don't lose sight, keep the hope alive.",
  "Don't copy anybody, life is not about showing-off",
  "Give in not to the flesh, let the spirit of God controls you",
  "It's Maturity as a pro to identify with a navie so that he/she can learn",
  "Stay calm, stay together. Calm is smooth and smooth is fast.",
];
const quoteNumber = document.querySelector(".quote_no");
const randomQuote = document.querySelector("p");
const nextQuote = document.querySelector(".circle");

for (let index = 0; index < Quotes.length; index++) {
  nextQuote.addEventListener("click", () => {
    let quoteNo = Math.floor(Math.random() * Quotes.length);
    quoteNumber.textContent = quoteNo + 1;
    randomQuote.innerHTML = `<q>${Quotes[quoteNo]}</q>`;
  });
}
