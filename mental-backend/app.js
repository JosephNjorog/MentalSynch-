const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware'); // Custom error handler

// Import routes
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const physioRoutes = require('./routes/physioRoutes');

const app = express();

// Environment Variables
require('dotenv').config();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(helmet()); // Set security headers
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/physio', physioRoutes);

// Error Handling Middleware
app.use(errorHandler); // Handle errors

// Connect to Database and Start Server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
