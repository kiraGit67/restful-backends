"use strict";

const button = document.querySelector("button");
const blockquote = document.querySelector("blockquote");
const cite = document.querySelector("cite");

function getQuoteData() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      render(data);
    });
}

async function getQuoteDataAwait() {
  const response = await fetch("https://dummy-apis.netlify.app/api/quote");
  const data = await response.json();
  render(data);
}

function render(data) {
  blockquote.innerText = data.quote;
  cite.innerText = data.author;
}

button.addEventListener("click", () => {
  getQuoteDataAwait();
});
