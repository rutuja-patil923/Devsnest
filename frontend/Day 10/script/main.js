let firstCard;
let secondCard;
const cards = document.querySelectorAll(`.card`);

function flip() {
  if (firstCard === undefined) {
    firstCard = this;
  } else {
    secondCard = this;
  }
  this.classList.add(`flip`);
  if (firstCard !== undefined && secondCard !== undefined) {
    if (firstCard.innerText === secondCard.innerText) {
      correct();
    } else {
      setTimeout(wrong, 1000);
    }
  }
}

const attachListner = () => {
  for (let card of cards) {
    card.addEventListener("click", flip);
  }
};

attachListner();

const reset = () => {
  firstCard = secondCard = undefined;
};

const correct = () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const wrong = () => {
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset();
};

(() => {
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * 16);
  });
})();
