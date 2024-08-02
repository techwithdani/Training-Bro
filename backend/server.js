require('dotenv').config();

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to Training Bro!'});
});

app.listen(process.env.PORT, () => {
    console.log(`Port no: ${process.env.PORT}`);
});