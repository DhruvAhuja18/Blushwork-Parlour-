// server.js
// Main entry point for the Rosé & Co. backend API server

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

// ── Connect to MongoDB ──────────────────────
connectDB();

// ── Initialize Express App ──────────────────
const app = express();

// ── Middleware ──────────────────────────────
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ── Routes ──────────────────────────────────
app.use('/api/contact', contactRoutes);

// ── Health Check ────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🌸 Blushwork Beauty Parlour API is running!',
    timestamp: new Date().toISOString(),
  });
});

// ── 404 Handler ─────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// ── Global Error Handler ─────────────────────
app.use(errorHandler);

// ── Start Server ─────────────────────────────
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`\n🌸 Blushwork Beauty Parlour Server running on http://localhost:${PORT}`);
  console.log(`📋 API Health: http://localhost:${PORT}/api/health\n`);
});
