const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/produtos/:item/:quantidade", function (req, res) {
  const item = req.params.item;
  const quantidade = req.params.quantidade;
  res.send("Item: " + item + "<br>Quantidade: " + quantidade);
});

app.listen(8081, function () {
  console.log("Servidor rodando!");
});
 