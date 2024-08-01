require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({msg:'Welcome to Training Bro'});
});

app.listen(process.env.PORT, () => {
    console.log(`Port No: ${process.env.PORT}`);
});