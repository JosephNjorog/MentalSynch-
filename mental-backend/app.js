const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const csrfProtection = require('./middleware/csrfProtection');
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const physioRoutes = require('./routes/physioRoutes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(csrfProtection);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/physio', physioRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
