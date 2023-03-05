"use strict";

// https://dummy-apis.netlify.app/api/quote

function createListEntry(quote, author) {
  const listElement = document.createElement("li");
  const listP = document.createElement("p");
  const listElementQuote = document.createTextNode(quote);
  listP.append(listElementQuote);
  const listSmall = document.createElement("small");
  const listElementAuthor = document.createTextNode(author);
  listSmall.append(listElementAuthor);
  listElement.append(listP, listSmall);
  return listElement;
}

function localStorageQuoteData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const showListButton = document.querySelector("#show-list");
const quoteList = document.querySelector("#quote-list");

if (
  localStorage.getItem("quote") !== "" &&
  localStorage.getItem("author") !== ""
) {
  const defaultQuote = JSON.parse(localStorage.getItem("quote"));
  const defaultAuthor = JSON.parse(localStorage.getItem("author"));
  const defaultListElement = createListEntry(defaultQuote, defaultAuthor);
  quoteList.appendChild(defaultListElement);
}

showListButton.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      console.log("response", response);
      console.log("json", response.json);
      return response.json();
    })
    .then((jsonData) => {
      console.log("jsonDataQuote", jsonData.quote);
      console.log("jsonDataAuthor", jsonData.author);

      const newEntry = createListEntry(jsonData.quote, jsonData.author);
      quoteList.append(newEntry);

      localStorageQuoteData("quote", jsonData.quote);
      localStorageQuoteData("author", jsonData.author);
    });
});
