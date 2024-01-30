const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

// Конфигурация на транспортъра за изпращане на имейли
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Пътят на електронната поща от която ще изпращате
        pass: 'your-email-password' // Паролата на пощата
    }
});

app.post('/send-email', (req, res) => {
    // Обработка на данните от заявката
    const emailData = req.body;

    // Опции за изпращане на имейла
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.body
    };

    // Изпращане на имейла
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ status: 'error', message: 'Failed to send email.' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ status: 'success', message: 'Email sent successfully!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
