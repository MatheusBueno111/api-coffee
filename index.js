const express = require("express");
const cors = require('cors')
const app = express();
const products = require('./src/products.json')
const stock = require('./src/stock.json')


app.use(cors())

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/stock", (req, res) => {
  return res.json(stock);
});



app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;