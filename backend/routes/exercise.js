const express = require('express');

const expressRouter = express.Router();

expressRouter.get('/', (req, res) => {
    res.json({msg:'GET all Exercises'});
});

expressRouter.get('/:id', (req, res) => {
    res.json({msg:'GET a single Exercise'});
});

expressRouter.post('/', (req, res) => {
    res.json({msg:'POST Exercise'});
});

expressRouter.delete('/:id', (req, res) => {
    res.json({msg:'DELETE Exercise'});
});

expressRouter.patch('/:id', (req, res) => {
    res.json({msg:'UPDATE Exercise'});
});

module.exports = expressRouter;