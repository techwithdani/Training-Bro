require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const exerciseRoutes = require('./routes/exercise');

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/exercises', exerciseRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to Database and listening port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });