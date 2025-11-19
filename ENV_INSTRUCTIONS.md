# Environment Variables Setup

To make the Contact Form work, you need to create a `.env.local` file in the root of your project (`d:\Freelance\Company website\xenoratech\.env.local`) and add the following keys:

```env
# SMTP Configuration (for Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password

# Recipient Email
CONTACT_RECIPIENT=recipient@example.com

# Google ReCAPTCHA v3 Keys
# Get these from: https://www.google.com/recaptcha/admin/create
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

## How to get ReCAPTCHA Keys:
1. Go to [Google ReCAPTCHA Admin](https://www.google.com/recaptcha/admin/create).
2. Label: `Xenoratech Contact Form`.
3. ReCAPTCHA type: **Score based (v3)**.
4. Domains: Add `localhost` (for dev) and your production domain.
5. Copy the **Site Key** to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
6. Copy the **Secret Key** to `RECAPTCHA_SECRET_KEY`.

## Important Note:
Restart your development server (`npm run dev`) after creating or modifying the `.env.local` file for the changes to take effect.
