require("dotenv").config();
const express = require('express');

const app = express();

app.use('/example', require('./src/router/exampleRouter'))

const server = require('http').createServer(app);

const PORT = process.env.PORT || 2000;

server.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`server running on port ${PORT}`) 
})