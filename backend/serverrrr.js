const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS
const connectDB = require('./config/db.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

dotenv.config();

connectDB();

const app = express();

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse incoming JSON requests

// Define routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
