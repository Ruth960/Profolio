# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality in your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address if required.

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to the "Email Services" tab.
2. Click "Add New Service".
3. Choose your email provider (Gmail, Outlook, etc.).
4. Follow the authentication steps to connect your email account.
5. Name your service (e.g., "portfolio_contact") and save it.
6. Note down the **Service ID** for later use.

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab.
2. Click "Create New Template".
3. Design your email template. Here's a suggested format:

```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}

This email was sent from your portfolio contact form.
```

4. Save your template and note down the **Template ID**.

## Step 4: Get Your User ID

1. Go to "Account" > "API Keys".
2. Copy your **Public Key** (this is your USER_ID).

## Step 5: Update Your Code

Open the file `src/components/contacts.jsx` and update these constants with your actual values:

```javascript
const SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const USER_ID = "YOUR_USER_ID"; // Replace with your User ID (Public Key)
```

## Step 6: Test Your Contact Form

After updating the code with your EmailJS credentials, test your contact form to ensure emails are being sent correctly.

## Note

The free plan of EmailJS allows 200 emails per month, which should be sufficient for a personal portfolio website. If you need more, you can upgrade to a paid plan.