# Contact Form Alternatives (Frontend-Only)

## Option 1: Formspree
```javascript
const onSubmit = async (data) => {
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      _replyto: data.email, // Auto-reply to sender
      _subject: `FEDCO Website Contact: ${data.subject}`,
    })
  });
};
```

## Option 2: EmailJS (Client-side only)
```javascript
// 1. Install: npm install emailjs-com
// 2. Setup at emailjs.com with Gmail/Outlook
// 3. Use your personal email as forwarding address

import emailjs from 'emailjs-com';

const onSubmit = async (data) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_email: 'your-email@gmail.com', // Your email
      },
      'YOUR_USER_ID'
    );
    alert("Message sent successfully!");
  } catch (error) {
    alert("Failed to send message.");
  }
};
```

## Option 3: Netlify Forms (If deploying on Netlify)
```html
<!-- Add to form element -->
<form onSubmit={handleSubmit} data-netlify="true" method="POST" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your existing form fields -->
</form>
```

## Option 4: Static Form Processors
- **Form-Data**: https://form-data.com
- **Getform**: https://getform.io  
- **Fabform**: https://fabform.io

All these services:
- ✅ Work with static sites
- ✅ No backend required
- ✅ Forward emails to any address
- ✅ Free tiers available 