// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const emailKey = process.env.EMAIL_KEY;
  const passKey = process.env.PASS_KEY;

  const { officersNeeded, times, frequency, startDate, decisionTime } = req.body;

  try {
    // Set up the email transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or use another email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'enquiries@ugwumbacdiala.com',
      subject: 'New Security Service Request',
      text: `New request details:\n- Officers needed: ${officersNeeded}\n- Times required: ${times}\n- Frequency: ${frequency}\n- Start date: ${startDate}\n- Hiring decision time: ${decisionTime}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
