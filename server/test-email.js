const nodemailer = require('nodemailer');
const dns = require('dns');
require('dotenv').config();

// Fix for querySrv ECONNREFUSED in some Node environments
dns.setServers(['8.8.8.8', '1.1.1.1']);

console.log('Starting Nodemailer test...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('NOTIFY_EMAIL:', process.env.NOTIFY_EMAIL);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Test Result: FAILED');
        console.error(error);
    } else {
        console.log('Test Result: SUCCESS - Server is ready to take our messages');

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.NOTIFY_EMAIL,
            subject: 'Test Email from Portfolio Backend',
            text: 'This is a test email to verify Nodemailer configuration.'
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Send Error:', err);
            } else {
                console.log('Send Success:', info.response);
            }
            process.exit();
        });
    }
});
