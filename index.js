const express = require("express");
const app = express();
const cors = require('cors')

const products = require('./src/products.json')
const stock = require('./src/stock.json')

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  return res.json(products);
});


app.get("/stock", (req, res) => {
  return res.json(stock);
});

app.get("/stock/:id", (req, res) => {
  const { id } = req.params
  const formatedIdToNumber = +id 
  const productStock = stock.find((product) => product.id === formatedIdToNumber)

  return res.status(201).send(productStock)
});


app.listen(5000, () => {
  console.log("Running on port 5000.");
});
