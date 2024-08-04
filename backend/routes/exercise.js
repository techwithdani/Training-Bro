const express = require('express');
const trainingModel = require('../models/trainingModel');

const expressRouter = express.Router();

expressRouter.get('/', (req, res) => {
    res.json({msg:'GET all Exercises'});
});

expressRouter.get('/:id', (req, res) => {
    res.json({msg:'GET a single Exercise'});
});

expressRouter.post('/', async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const exercise = await trainingModel.create({title, reps, load});
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

expressRouter.delete('/:id', (req, res) => {
    res.json({msg:'DELETE Exercise'});
});

expressRouter.patch('/:id', (req, res) => {
    res.json({msg:'UPDATE Exercise'});
});

module.exports = expressRouter;