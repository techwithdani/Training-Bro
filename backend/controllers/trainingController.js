const trainingModel = require('../models/trainingModel');
const mongoose = require('mongoose');

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

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Id and Exercise doesn't exist."});
    }

    const exercise = await trainingModel.findById(id);

    if (!exercise) {
        return res.status(404).json({error: "Exercise doesn't exist."});
    }

    res.status(200).json(exercise);
}

const updateExercise = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Id and Exercise doesn't exist."});
    }

    const exercise = await trainingModel.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!exercise) {
        return res.status(400).json({error: "Exercise doesn't exist."});
    }

    res.status(200).json(exercise);
}

const removeExercise = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Id and Exercise doesn't exist."});
    }

    const exercise = await trainingModel.findOneAndDelete({_id: id});

    if (!exercise) {
        return res.status(400).json({error: "Exercise doesn't exist."});
    }

    res.status(200).json(exercise);
}

module.exports = {
    postExercise,
    getAllExercises,
    getSingleExercise,
    removeExercise,
    updateExercise
}
