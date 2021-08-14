const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn");

let cardsSelected = [];
let cardsId = [];
let cardsWon = [];
let counter = 0;

function flipCard() {
  this.classList.add("flip");
  cardsSelected.push(this.getAttribute("data-name"));
  cardsId.push(this.getAttribute("data-id"));
  // console.log(cardsSelected);
  // console.log(cardsId);
  if (cardsSelected.length > 2) {
    this.classList.remove("flip");
  }
  if (cardsSelected.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  let firstCard = cards[cardsId[0] - 1];
  let secondCard = cards[cardsId[1] - 1];

  if (cardsId[0] === cardsId[1]) {
    // console.log("clicked same img");
    counter+= 10;
    cardsId.pop();
    cardsSelected.pop();
  } else if (cardsSelected[0] === cardsSelected[1]) {
    // console.log("Matched");
    // counter-=2;
    firstCard.classList.add("hide");
    secondCard.classList.add("hide");

    cardsWon.push(cardsSelected);
    if (cardsWon.length === cards.length / 2) {
      if (counter>0){
        container.innerHTML = `
         <h1>You Won!! with scores: ${counter}</h1>
         `;
      }
      else{
      container.innerHTML = `
      <h1>You lose :( with scores: ${counter}</h1>
      `;
      }
      resetBtn.innerHTML = "Play Again?";
      container.classList.add("won");
    }
  } else {
    removeFlip(firstCard, secondCard);
    counter-=1;
  }

  cardsSelected = [];
  cardsId = [];
} 

function removeFlip(card1, card2) {
  card1.classList.remove("flip");
  card2.classList.remove("flip");
}

(function shuffleCards() {
  cards.forEach((card) => {
    let randomOrder = Math.floor(Math.random() * cards.length);
    card.style.order = randomOrder;
  });
})();

resetBtn.addEventListener("click", () => {
  cards.forEach((card) => card.classList.add("reset"));
  setTimeout(() => location.reload(), 500);
});

cards.forEach((card) => card.addEventListener("click", flipCard));