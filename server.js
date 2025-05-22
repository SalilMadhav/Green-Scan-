const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
    const { username, email } = req.body;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kelkaryatharth@gmail.com',      // ✅ your Gmail
            pass: 'dxxo esut pgjv raim'         // ✅ use an App Password
        }
    });

    const mailOptions = {
        from: 'kelkaryatharth@gmail.com',
        to: email,
        subject: 'Welcome to SmartAgro!',
        text: `Hi ${username},\n\nThank you for signing up to SmartAgro!`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent to', email);
        res.status(200).send('Email sent');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Email failed');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});