"use strict";

getToDoList("https://jsonplaceholder.typicode.com/todos");

const toDoList = document.querySelector("#toDo-list");

let toDoListItems = [];

function getToDoList(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      //data.forEach((item) => toDoListItems.push(item));
      toDoListItems = [...data];

      data.forEach((item) => {
        const listElement = document.createElement("li");
        const listElementText = document.createTextNode(item.title);
        const listElementCheckBox = document.createElement("input");
        listElementCheckBox.type = "checkbox";
        listElementCheckBox.checked = item.completed;

        if (listElementCheckBox.checked === true) {
          listElement.classList.add("toDoDone");
        }

        listElementCheckBox.addEventListener("change", function () {
          listElement.classList.toggle("toDoDone");
        });

        listElement.append(listElementCheckBox, listElementText);
        toDoList.append(listElement);
      });
    });
}
