const express = require('express');
const {postExercise, getAllExercises, getSingleExercise} = require('../controllers/trainingController');

const expressRouter = express.Router();

expressRouter.get('/', getAllExercises);

expressRouter.get('/:id', getSingleExercise);

expressRouter.post('/', postExercise);

expressRouter.delete('/:id', (req, res) => {
    res.json({msg:'DELETE Exercise'});
});

expressRouter.patch('/:id', (req, res) => {
    res.json({msg:'UPDATE Exercise'});
});

module.exports = expressRouter;
