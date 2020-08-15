const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM photos ORDER BY id;';

    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let photo = req.body;
    console.log('posting', photos);

    let queryText = `INSERT INTO "photos" ("path", "description")
                    VALUES ($1, $2);`
    pool.query(queryText, [photo.path, photo.description])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('Error adding Task', error);
            res.sendStatus(500);
        });
});1


router.put('/:id', (req, res) => {
    const id = req.params.id;
    
    console.log('in putLike', id);
    let sqlText = `UPDATE photos SET likes=likes+1 WHERE id=$1;`
                    
    pool.query(sqlText, [id])
        .then(result => {
            console.log(result);
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in put', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('server is deleting task', id);

    let sqlText = `
                    DELETE FROM photos
                    WHERE id = $1;
                    `;

    pool.query(sqlText, [id]).then(result => {
        console.log(result);
        res.sendStatus(201);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;