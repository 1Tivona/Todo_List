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
   "Wash the car",  "Create Meal Plan for Next Week",  "Make Grocery List",
   "Grocery Shopping",  "Meal Prep",  "Wash Hair",  "Laundry",
   "Prepare Guest Bedroom"
];
const todosComp = [];

app.engine('js', mustache());
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  console.log(todos);
  res.render('index', { list: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.ToDo);
  console.log(todos);
  res.redirect('/');
});

app.post("/", function (req, res) {
  todosComp.push(req.body.ToDoComp);
  console.log(todos);
  res.redirect('/');
});

app.get('/', function (req, res) {
    res.render('complete');
});

// app.get('/', function(req, res){
//   // res.send('This is where the individual information for the robots go')
// });
app.get('/public', function(req, res){
  res.send('result')
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
