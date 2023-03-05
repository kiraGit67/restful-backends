"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('{ color: "red"}');
});

app.listen(port, () => {
  console.log(`Go to http://localhost:3000/`);
});
