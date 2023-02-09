const express = require("express");
const app = express();
const cors = require('cors')

const products = require('./src/products.json')
const stock = require('./src/stock.json')

const corsOptions = {  
  origin:'http://localhost/5000',
  optionsSuccessStatus: 200
}

app.get("/products", cors(corsOptions), (req, res) => {
  return res.json(products);
});

app.get("/stock", (req, res) => {
  return res.json(stock);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;