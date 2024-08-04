const express = require('express');
const {
    postExercise,
    getAllExercises,
    getSingleExercise,
    removeExercise,
    updateExercise
} = require('../controllers/trainingController');

const expressRouter = express.Router();

expressRouter.get('/', getAllExercises);

expressRouter.get('/:id', getSingleExercise);

expressRouter.post('/', postExercise);

expressRouter.delete('/:id', removeExercise);

expressRouter.patch('/:id', updateExercise);

module.exports = expressRouter;
