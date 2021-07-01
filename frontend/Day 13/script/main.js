const colors = [
  "#7C98B3",
  "#536B78",
  "#637081",
  "#A2A3BB",
  "#7C7C7C",
  "#35524A",
  "#6D6875",
  "#627C85",
  "#B5838D",
  "#885053",
];

const loadQuote = async (card) => {
  const res = await fetch("https://api.quotable.io/random");
  const json = await res.json();
  card.style.backgroundColor = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
  card.childNodes[0].innerText = `"${json.content}"`;
  card.childNodes[1].innerText = `- ${json.author}`;
}

(function () {
  const first = document.querySelector(`.first`);
  first.childNodes[0].innerText = `Click For Quotes!`;
  first.style.backgroundColor = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
  loadQuote(document.querySelector(`.second`));
})();


function handleClick() {
  this.parentElement.classList.toggle(`flip`);
  loadQuote(this);
}

(function () {
  document.querySelector(`.first`).addEventListener("click", handleClick);
  document.querySelector(`.second`).addEventListener("click", handleClick);
})();
