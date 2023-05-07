const { response } = require('express');
const express = require('express');
// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Getting to know cairo', snippet: 'Your start to learning to navigate the historical city of Cairo'},
    {title: 'How to learn arabic', snippet: 'Starting from the basics' },
    {title: 'Essentials for every student', snippet: 'What you need to survive and thrive in Cairo'},
  ]  
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', {root: __dirname });
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
})

app.use((req, res)=> {
  // res.status(404).sendFile('./views/404.html', {root: __dirname});
  res.status(404).render('404', { title: '404' });
})