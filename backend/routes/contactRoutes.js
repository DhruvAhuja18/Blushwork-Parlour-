// routes/contactRoutes.js
// REST API routes for contact form submissions

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// ─────────────────────────────────────────────
// POST /api/contact — Submit a new message
// ─────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been received! We will get back to you soon. 💌',
      data: newContact,
    });
  } catch (error) {
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('Contact POST error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// ─────────────────────────────────────────────
// GET /api/contact — Fetch all messages (admin)
// ─────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    // Simple password check via query param ?password=xxx
    const { password } = req.query;
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Unauthorized. Invalid admin password.' });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Contact GET error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// ─────────────────────────────────────────────
// PATCH /api/contact/:id/read — Mark as read
// ─────────────────────────────────────────────
router.patch('/:id/read', async (req, res) => {
  try {
    const { password } = req.query;
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Unauthorized.' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Message not found.' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
