const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText =
    // `SELECT * FROM "movies_genres"
    // INNER JOIN "movies" ON "movies"."id" = "movies_genres"."movies_id"
    // WHERE "movies_genres"."movies_id" = "movies"."id"
    // ORDER BY "movies"."id";`;

    'SELECT * FROM "movies"';

  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
  console.log('movie router was hit');

});

module.exports = router;