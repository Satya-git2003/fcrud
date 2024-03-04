const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser"); // Corrected body-parser import
const path = require('path');

dotenv.config({ path: '.env' }); // Corrected config path

const app = express();
const PORT = process.env.PORT || 5000; // Change to a different port
 

// Log requests
app.use(morgan('tiny'));

// Parse requests
app.use(bodyparser.urlencoded({ extended: true })); // Corrected body-parser usage

// Set view engine
app.set("view engine", "ejs");

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Handle '/' route
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
//app.listen(PORT, () =>
//{ console.log(`Server is running on http://localhost:${PORT}')});

  

