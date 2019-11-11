const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.put('/', (req, res) => {

    const updatedMovie = req.body;

    const queryValues = [
        updatedMovie.title,
        updatedMovie.description,
        updatedMovie.editId,
    ];

    const queryText = `
    UPDATE "movies"
    SET "title" = $1, 
    "description" = $2
    WHERE "id" = $3`;

    // console.log(u);

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); 
            console.log('req.body from /edit/movie route:', queryValues);
        })
        .catch((err) => {
            console.log('Error completing EDIT movie query', err);
            res.sendStatus(500);
        });

    // const queryText = 
    // `SELECT * FROM "movies_genres"
    // INNER JOIN "genres" ON "genres"."genres_id" = "movies_genres"."genres_id"
    // WHERE "movies_genres"."genres_id" = "genres"."genres_id"
    // ORDER BY "genres"."genres_id";`;
    // pool.query(queryText)
    //   .then((result) => { res.send(result.rows); })
    //   .catch((err) => {
    //     console.log('Error completing SELECT genre query', err);
    //     res.sendStatus(500);
    //   });
    console.log(req.body);
    console.log('edit.movie.router.js was hit');

});

module.exports = router;