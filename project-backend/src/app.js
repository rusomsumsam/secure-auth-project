const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();

// Middleware
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://secure-auth-project-pi.vercel.app",
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// Database connection
connectDB();

// Routes
app.use("/api", routes);

// Test route
app.get("/", (req, res) => {
    res.send("App working ✅");
});

module.exports = app;