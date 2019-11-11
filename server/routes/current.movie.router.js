const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText =
    `SELECT * FROM "movies"
    WHERE "id" = $1`;

    const queryValue = req.body;

  pool.query(queryText, queryValue)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
  console.log('movie router was hit');

});

module.exports = router;