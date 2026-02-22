const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();
const nodemailer = require('nodemailer');

// Check Environment Variables
console.log('Checking environment variables...');
console.log('- EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
console.log('- EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');
console.log('- MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET');

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    family: 4,    // Force IPv4 to avoid ENETUNREACH errors on cloud systems
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Helps with some cloud network restrictions
    },
    connectionTimeout: 10000, // 10 seconds timeout
    greetingTimeout: 10000
});

// Verify Transporter on Startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Nodemailer verification error details:');
        console.error('- Message:', error.message);
        console.error('- Code:', error.code);
        console.error('- Command:', error.command);
    } else {
        console.log('SUCCESS: Server is ready to send emails');
    }
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

// API Routes
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(`Processing new message from: ${name} (${email})`);

        // Save to Database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        console.log('Message saved to MongoDB Atlas');

        // Send response immediately (Non-blocking email)
        res.status(201).json({ message: 'Message sent successfully!' });

        // Email Notification in Background
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.NOTIFY_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        You have a new message from your portfolio:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
        };

        // Fire and forget email
        transporter.sendMail(mailOptions)
            .then(info => console.log('Notification email sent successfully:', info.response))
            .catch(mailError => console.error('SMTP/Nodemailer Error:', mailError));
    } catch (error) {
        console.error('Error in /api/contact logic:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
