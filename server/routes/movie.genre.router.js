const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM genres';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT genre query', err);
        res.sendStatus(500);
      });
    console.log('movie_genre router was hit');
    
  });

  module.exports = router;