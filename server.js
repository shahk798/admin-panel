const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend directory
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/clinic_crm';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Import models
const Clinic = require('./models/Clinic');
const Patient = require('./models/Patient');

// Import routes
const adminRouter = require('./routes/admin')(Patient);

// Routes
app.use('/api/admin', adminRouter);

// Serve admin pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'admin.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'admin-dashboard.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Admin Panel Server running on port ${PORT}`);
});
