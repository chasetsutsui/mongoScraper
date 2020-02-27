const express = require("express");
const exphbs = require("express-handlebars");
const logger = require("morgan");
const mongoose = require("mongoose");
var axios = require("axios");
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const router = express.Router();
app.use(logger("dev"));
app.use(router);

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
