# EmailJS Setup Instructions

This portfolio uses EmailJS to send emails directly from the contact form. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{reply_to}}` - Reply-to email (optional)

4. Example template:
   ```
   Subject: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys

## Step 6: Restart Your Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## Fallback Behavior

If EmailJS is not configured, the form will automatically fall back to opening the user's default email client with a pre-filled message. This ensures the contact form always works, even without EmailJS setup.

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message
4. You should also see a success toast notification

## Troubleshooting

- **Emails not sending**: Check that all environment variables are set correctly
- **CORS errors**: Make sure your EmailJS service is properly configured
- **Template errors**: Verify that all template variables match what's in your template

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)
