const express = require("express");
const hex2rgb = require("hex2rgb");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  return response.json({
    hex: "f10000",
    rgb: {
      r: "255",
      g: "0",
      b: "0",
    },
  });
});

app.get("/color", (request, response) => {
  //retrieves color and returns the hex value
  console.log(request.query.hex);

  return response.json({
    hexValue: request.query.hex,
    rgb: hex2rgb(request.query.hex).rgbString,
  });
});

app.get("/toDos", (request, response) => {
  return response.json([
    {
      id: 1,
      description: "Learn HTML",
      done: false,
    },
  ]);
});

app.get("/kurse", (request, response) => {
  return response.json([
    {
      kursId: 1,
      title: "Argumentorik",
      autor: "Wladislaw Jachtchenko",
      start: "01.04.2023",
      end: "30.11.2023",
    },
  ]);
});

app.listen(port, () => {
  console.log("Server started on port: ", port);
});
