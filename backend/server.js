const express = require('express');
const app = express();

const portNumber = 1305;

app.get('/', (req, res) => {
    res.json({msg:'Welcome to the App'});
});

app.listen(portNumber, () => {
    console.log('Listening on port 1305....');
});