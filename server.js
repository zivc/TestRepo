const express = require("express");
const app = express();
const port = 8080;

const data = require('./data');

app.get("/data", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(data);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
