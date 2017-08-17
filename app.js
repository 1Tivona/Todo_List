const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const form = require('express-form');
const bodyParser = require('body-parser')
const field = form.field;
const formValid = require('validator')
const todos = [
  { "Todo": "Wash the car", "Todo": "Create Meal Plan for Next Week", "Todo": "Make Grocery List",
  "Todo": "Grocery Shopping", "Todo": "Meal Prep", "Todo": "Wash Hair", "Todo": "Laundry",
  "Todo": "Prepare Guest Bedroom"}
];

app.engine('mustache', mustache());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser());

app.get("/", function (req, res) {
  console.log(todos);
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});

app.get('/public', function(req, res){
  res.send('This is where the individual information for the robots go')
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
