# Contact Form Implementation

This README provides instructions on how to set up and use the contact form in your portfolio website.

## Overview

The contact form allows visitors to send you messages directly from your website. When a user submits the form:

1. Their message is sent to your email address (ruthmwaniki202@gmail.com)
2. They receive a verification message confirming their message was sent successfully

## Setup Instructions

### 1. EmailJS Setup

First, you need to set up EmailJS to handle the email sending functionality:

1. Follow the instructions in the `EMAILJS_SETUP_GUIDE.md` file to create an EmailJS account and get your credentials.

2. Once you have your EmailJS credentials, update the following files:

   - In `src/App.jsx`:
     ```javascript
     const EMAILJS_USER_ID = "YOUR_USER_ID"; // Replace with your actual User ID
     ```

   - In `src/components/contacts.jsx`:
     ```javascript
     const SERVICE_ID = "YOUR_SERVICE_ID";
     const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
     const USER_ID = "YOUR_USER_ID"; // Same as in App.jsx
     ```

### 2. Testing the Contact Form

After setting up EmailJS and updating your credentials:

1. Start your development server:
   ```
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out the form with test information
4. Submit the form
5. Verify that:
   - You receive the email at ruthmwaniki202@gmail.com
   - The user sees a verification message

## Form Validation

The contact form includes validation for:
- Name (required)
- Email (required and must be valid format)
- Message (required)

## Customization

You can customize the form's appearance and behavior by modifying the `contacts.jsx` file. The form is already styled to match your website's theme (light/dark mode).

## Troubleshooting

If the form is not working as expected:

1. Check the browser console for any error messages
2. Verify that your EmailJS credentials are correct
3. Make sure your EmailJS service is properly connected to your email provider
4. Check that your email template contains the correct template variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email address

## Email Limits

The free plan of EmailJS allows 200 emails per month. If you need more, you can upgrade to a paid plan.