const fetch = require('node-fetch');
const DarkSky = require('dark-sky');

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('src'));
app.use(express.json({limit: '1mb'}));
// Setup Server
app.listen(7000, function () {
    console.log('Example app listening on port 7000!')
});
