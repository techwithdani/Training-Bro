require('dotenv').config();

const express = require('express');
const app = express();

const exerciseRoutes = require('./routes/exercise');

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/exercises', exerciseRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Port no: ${process.env.PORT}`);
});