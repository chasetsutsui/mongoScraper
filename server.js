const express = require("express");
const app = express();

const router = express.Router();

app.use(router);

app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});


