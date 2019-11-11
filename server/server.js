const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
// route includes
const movieRouter = require('./routes/movie.router');
const genreRouter = require('./routes/genre.router');
const movieGenreRouter = require('./routes/movie.genre.router');
const editRouter = require('./routes/edit.movie.router');
const currentRouter = require('./routes/current.movie.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies', movieRouter);
app.use('/genres', genreRouter);
app.use('/movies_genres', movieGenreRouter);
app.use('/edit/movie', editRouter);
app.use('/current', currentRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});