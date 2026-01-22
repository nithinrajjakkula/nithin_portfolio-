import emailjs from '@emailjs/browser';

// EmailJS configuration
// Set these up in your EmailJS account (https://www.emailjs.com/)
// Add them to your .env file:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Check if EmailJS is configured
const isEmailJSConfigured = () => {
  return SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && 
         SERVICE_ID !== 'your_service_id' && 
         TEMPLATE_ID !== 'your_template_id' && 
         PUBLIC_KEY !== 'your_public_key';
};

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  // If EmailJS is not configured, fall back to mailto
  if (!isEmailJSConfigured()) {
    const subject = encodeURIComponent(data.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Nithin,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:nithinrajjakkula@gmail.com?subject=${subject}&body=${body}`;
    return true; // Return true to show success, even though it opens email client
  }

  try {
    // Initialize EmailJS with public key
    emailjs.init(PUBLIC_KEY);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'nithinrajjakkula@gmail.com',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
