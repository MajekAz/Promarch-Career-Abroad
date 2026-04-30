import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

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
      user: process.env.SMTP_USER || 'info@promarcareerabroad.co.uk',
      pass: process.env.SMTP_PASS,
    },
  });

  // API Route: Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info@promarcareerabroad.co.uk';

    const mailOptions = {
      from: process.env.SMTP_USER || 'info@promarcareerabroad.co.uk',
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
      from: process.env.SMTP_USER || 'info@promarcareerabroad.co.uk',
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

  // API Route: Book Assessment
  app.post('/api/book-assessment', async (req, res) => {
    const { name, email, phone, date, time, message } = req.body;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info@promarcareerabroad.co.uk';

    const mailOptions = {
      from: process.env.SMTP_USER || 'info@promarcareerabroad.co.uk',
      to: receiverEmail,
      replyTo: email,
      subject: `New Assessment Booking: ${name}`,
      text: `
        New Assessment Booking Request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Date: ${date}
        Preferred Time: ${time}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Assessment Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Booking request sent successfully' });
    } catch (error) {
      console.error('Error sending booking email:', error);
      res.status(500).json({ error: 'Failed to send booking email' });
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
      const buildPath = path.join(process.cwd(), 'build');
      app.use(express.static(buildPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
      });
    }
  } else {
    // In production, server.cjs is usually inside the build folder
    // But we should handle cases where it might be run from the root
    const buildPath = path.resolve(__dirname);
    console.log(`Serving static files from buildPath: ${buildPath}`);
    console.log(`Current working directory: ${process.cwd()}`);
    
    app.use(express.static(buildPath));
    
    app.get('*', (req, res) => {
      // Priority 1: path relative to server.cjs (expected to be in build/ folder)
      let indexPath = path.join(buildPath, 'index.html');
      
      // Fallback: path relative to process.cwd() / build
      if (!fs.existsSync(indexPath)) {
        indexPath = path.join(process.cwd(), 'build', 'index.html');
      }

      console.log(`Request for ${req.url}, serving: ${indexPath}`);
      
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error(`Error sending index.html from ${indexPath}:`, err);
          res.status(500).send(`Server Error: Missing index.html at ${indexPath}. Current __dirname: ${__dirname}, CWD: ${process.cwd()}`);
        }
      });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
