const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();
const nodemailer = require('nodemailer');

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify Transporter on Startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Nodemailer verification error:', error);
    } else {
        console.log('Server is ready to send emails');
    }
});

// Fix for querySrv ECONNREFUSED in some Node environments
dns.setServers(['8.8.8.8', '1.1.1.1']);

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

        // Email Notification
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

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Notification email sent successfully:', info.response);
        } catch (mailError) {
            console.error('SMTP/Nodemailer Error:', mailError);
            // We don't fail the whole request if email fails, as DB is already saved
        }

        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error in /api/contact logic:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
