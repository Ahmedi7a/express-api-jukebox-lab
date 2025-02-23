const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
require("./config/database")
const morgan = require('morgan');
const cors = require('cors');

//models
const Track = require("./models/track");

//controllers
const trackController = require("./controllers/tracks")

//=================================
//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Public Routes
app.use("/tracks", trackController)


//=============================================
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
});