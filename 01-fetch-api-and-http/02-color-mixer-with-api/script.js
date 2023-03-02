"use strict";

// https://dummy-apis.netlify.app/api/color

const randomColorButton = document.querySelector("#random-color");

function colorMixer() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((jsonData) => {
      console.log("jsonColorData", jsonData.color);
      console.log("jsonRGBdata", jsonData.rgb);
      console.log("jsonColorDataRed", jsonData.rgb.r);
      console.log("jsonColorDataGreen", jsonData.rgb.g);
      console.log("jsonColorDataBlue", jsonData.rgb.b);

      document.body.style.backgroundColor = jsonData.color;
      randomColorButton.style.backgroundColor = jsonData.color;

      const hexValue = document.querySelector("#hex-value");
      hexValue.innerText = jsonData.color;

      const inputRed = document.querySelector("#red");
      inputRed.value = jsonData.rgb.r;

      const inputGreen = document.querySelector("#green");
      inputGreen.value = jsonData.rgb.g;

      const inputBlue = document.querySelector("#blue");
      inputBlue.value = jsonData.rgb.b;
    });
}

randomColorButton.addEventListener("click", colorMixer);
