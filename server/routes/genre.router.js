const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 
    `SELECT * FROM "movies_genres"
    INNER JOIN "genres" ON "genres"."genres_id" = "movies_genres"."genres_id"
    WHERE "movies_genres"."genres_id" = "genres"."genres_id"
    ORDER BY "genres"."genres_id";`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT genre query', err);
        res.sendStatus(500);
      });
    console.log('genre router was hit');
    
  });

  module.exports = router;