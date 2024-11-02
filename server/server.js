require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth-routes/index')

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// CORS middleware
app.use(cors({
    origin: process.env.CLIENT_URL ,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

//routes configaration
app.use('/auth',authRoutes)



// Global error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
    });
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});
