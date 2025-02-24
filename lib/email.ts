import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  jobDescription: string;
}

export async function sendEmail(data: EmailData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'getwrapped@elitewrappers.com.au',
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      <p><strong>Job Description:</strong> ${data.jobDescription}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 