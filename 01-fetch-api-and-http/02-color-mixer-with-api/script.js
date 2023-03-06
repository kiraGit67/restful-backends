"use strict";

// https://dummy-apis.netlify.app/api/color

function localStorageColorData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const randomColorButton = document.querySelector("#random-color");

const hexValue = document.querySelector("#hex-value");
const inputRed = document.querySelector("#red");
const inputGreen = document.querySelector("#green");
const inputBlue = document.querySelector("#blue");

document.body.style.backgroundColor =
  JSON.parse(localStorage.getItem("color")) || "#ff69b4";

randomColorButton.style.backgroundColor =
  JSON.parse(localStorage.getItem("color")) || "#ff69b4";

hexValue.innerHTML = JSON.parse(localStorage.getItem("color")) || "#ff69b4";
/*
if (localStorage.getItem("color") !== null) {
  console.log(localStorage.getItem("color"));
  document.body.style.backgroundColor = JSON.parse(
    localStorage.getItem("color")
  );
  randomColorButton.style.backgroundColor = JSON.parse(
    localStorage.getItem("color")
  );
  hexValue.innerHTML = JSON.parse(localStorage.getItem("color"));
} else {
  document.body.style.backgroundColor = "#ff69b4";
  randomColorButton.style.backgroundColor = "#ff69b4";
  hexValue.innerHTML = "#ff69b4";
}
*/
if (localStorage.getItem("rgb") !== null) {
  inputRed.value = JSON.parse(localStorage.getItem("rgb")).r;
  inputGreen.value = JSON.parse(localStorage.getItem("rgb")).g;
  inputBlue.value = JSON.parse(localStorage.getItem("rgb")).b;
} else {
  inputRed.value = "255";
  inputGreen.value = "105";
  inputBlue.value = "180";
}

function colorMixer() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((jsonData) => {
      document.body.style.backgroundColor = jsonData.color;
      randomColorButton.style.backgroundColor = jsonData.color;

      hexValue.innerText = jsonData.color;
      inputRed.value = jsonData.rgb.r;
      inputGreen.value = jsonData.rgb.g;
      inputBlue.value = jsonData.rgb.b;

      localStorageColorData("color", jsonData.color);
      localStorageColorData("rgb", jsonData.rgb);

      //localStorage.setItem("color", JSON.stringify(jsonData.color));
      //localStorage.setItem("rgb", JSON.stringify(jsonData.rgb));
    });
}

randomColorButton.addEventListener("click", colorMixer);
