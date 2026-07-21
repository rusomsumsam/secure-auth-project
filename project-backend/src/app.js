const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api", routes);

// test route
app.get("/", (req, res) => {
    res.send("App working ✅");
});

module.exports = app;
