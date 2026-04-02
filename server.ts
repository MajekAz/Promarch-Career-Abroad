import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  app.use(cors());
  app.use(express.json());

  // Email Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API Route: Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info@promarcareerabroad.co.uk';

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // API Route: Lead Magnet Form
  app.post('/api/lead-magnet', async (req, res) => {
    const { name, email } = req.body;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info@promarcareerabroad.co.uk';

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: receiverEmail,
      replyTo: email,
      subject: `New Lead Magnet Request: Free UK Study Guide`,
      text: `
        Name: ${name}
        Email: ${email}
        Requested: Free UK Study Guide
      `,
      html: `
        <h3>New Lead Magnet Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Requested:</strong> Free UK Study Guide</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  const isProduction = process.env.NODE_ENV === 'production';
  console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);

  if (!isProduction) {
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.warn('Vite not found, falling back to static serving');
      const distPath = path.join(process.cwd(), 'dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  } else {
    // In production, server.cjs is inside the dist folder
    const distPath = __dirname;
    console.log(`Serving static files from: ${distPath}`);
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
