require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5100;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello there!" });
});

// connect to DB & start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Connected to Mongo DB`);
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
