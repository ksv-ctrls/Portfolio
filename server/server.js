const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { Resend } = require('resend');

// Check Environment Variables
console.log('Checking environment variables...');
console.log('- RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'SET' : 'NOT SET');
console.log('- NOTIFY_EMAIL:', process.env.NOTIFY_EMAIL ? 'SET' : 'NOT SET');
console.log('- MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running with Resend!');
});

// Test Route for Email
app.get('/api/test-email', async (req, res) => {
    try {
        console.log('Starting Resend email test...');
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: process.env.NOTIFY_EMAIL,
            subject: 'Test Email from Resend',
            text: 'This confirms that Resend API is working perfectly from Render!'
        });

        if (error) {
            console.error('Resend Test Error:', error);
            return res.status(500).json({ status: 'failed', error });
        }

        console.log('Test email sent successfully via Resend');
        res.json({ status: 'success', data });
    } catch (error) {
        console.error('Test endpoint failure:', error.message);
        res.status(500).json({ status: 'failed', error: error.message });
    }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(`Processing new message from: ${name} (${email})`);

        // Save to Database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        console.log('Message saved to MongoDB Atlas');

        // Send response immediately
        res.status(201).json({ message: 'Message sent successfully!' });

        // Email Notification via Resend (Background)
        resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: process.env.NOTIFY_EMAIL,
            subject: `New Portfolio Message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
        }).then(({ data, error }) => {
            if (error) console.error('Resend delivery error:', error);
            else console.log('Email delivered via Resend:', data.id);
        }).catch(err => console.error('Resend background failure:', err.message));

    } catch (error) {
        console.error('Error in /api/contact logic:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
