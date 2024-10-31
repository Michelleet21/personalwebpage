const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


const names = [];
const tasks = [];

app.get('/', (req, res) => {
    res.render('index', { names, tasks, error: null });
  });

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
      names.push(name);
      res.redirect('/');
    } else {
      res.render('index', { names, tasks, error: "Please enter a name." });
    }
  });
  

  app.get('/greet/:index', (req, res, next) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < names.length) {
      res.render('wazzup', { name: names[index] });
    } else {
      const err = new Error('Name index out of range');
      err.status = 404;
      next(err);
    }
  });

app.post('/task', (req, res) => {
    const task = req.body.task;
    if (task) tasks.push(task);
    res.redirect('/');
  });
  

  app.get('/task/move-up/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index > 0 && index < tasks.length) {
      [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    res.redirect('/');
  });
  
  app.get('/task/move-down/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    }
    res.redirect('/');
  });

  app.get('/task', (req, res) => {
    res.json(tasks);
  });
  app.put('/greet/:name', (req, res) => {
    const name = req.params.name;
    names.push(name);
    res.json(names);
  });

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('index', { names, tasks, error: err.message });
  });
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.set('views', __dirname + '/views');
