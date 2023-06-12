
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://zubeiro:zube12345@nodetuts.x8jrq25.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
  app.listen(3000);
}) 
.catch((err) => console.log(err));
// register view engine 
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbo routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  })
});

app.get('/single-blog', (req, res) => {
  Blog.findById('64865e5d38618fee6681e1a2')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  })
});

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