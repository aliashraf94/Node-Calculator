const { query } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello there this is your server and its online')
});

// Build the next endpoints of our calculator:
// - http://localhost:3000/add?value1=10&value2=2
// - http://localhost:3000/substract?value1=10&value2=2
// - http://localhost:3000/multiply?value1=10&value2=2
// - http://localhost:3000/divide?value1=10&value2=2

app.get('/add', (req, res) => {
    const number1 = parseInt(req.query.value1)
    const number2 = parseInt(req.query.value2)
    const add = number1 + number2
    res.send(`By adding the sum of two numbers is ${add}`)
});

app.get('/substract', (req, res) => {
    const number1 = parseInt(req.query.value1)
    const number2 = parseInt(req.query.value2)
    const substract = number1 - number2
    res.send(`By subtracting the sum of two numbers is ${substract}`)
});

app.get('/multiply', (req, res) => {
    const number1 = parseInt(req.query.value1)
    const number2 = parseInt(req.query.value2)
    const multiply = number1 * number2
    res.send(`By multiplying the sum of two numbers is ${multiply}`)
});

app.get('/divide', (req, res) => {
    const number1 = parseInt(req.query.value1)
    const number2 = parseInt(req.query.value2)
    const divide = number1 / number2
    res.send(`By dividing the sum of two numbers is ${divide}`)
});


app.listen(3000, () => console.log("Server is up and running"))