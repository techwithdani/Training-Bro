const trainingModel = require('../models/trainingModel');

const postExercise = async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const exercise = await trainingModel.create({title, reps, load});
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getAllExercises = async (req, res) => {
    const exercises = await trainingModel.find({}).sort({createdAt: -1});

    res.status(200).json(exercises);
}

const getSingleExercise = async (req, res) => {
    const {id} = req.params;
    const exercise = trainingModel.findById(id);

    if (!exercise) {
        return res.status(404).json({error: "Exercise doesn't exist."});
    }

    res.status(200).json(exercise);
}

module.exports = {
    postExercise,
    getAllExercises,
    getSingleExercise
}
