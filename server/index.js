const express = require("express");
const bodyParser = require("body-parser");

const { doCalculation } = require("./calculation");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
    const { operation, num1, num2 } = req.body;
    const result = doCalculation(operation, num1, num2);
    res.send({result});
});

app.get("/", (req,res) => {
    res.send("To get a result please send a POST request with the following data in json: operation (+,-,*,/), num1, num2");
})

app.listen(port, () => {
    console.log("Server is up!");
})