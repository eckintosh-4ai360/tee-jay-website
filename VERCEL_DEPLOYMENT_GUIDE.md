# Vercel Deployment Guide - Contact Form with Gmail

## ✅ Your .env file is already protected!
Your `.gitignore` file already excludes `.env*` files, so your Gmail credentials are safe.

## 📝 Steps to Deploy to Vercel

### Step 1: Fix Local Environment Variables First

Before deploying, make sure your local `.env` file has the correct Gmail App Password (16 characters, no spaces):

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcdabcdabcdabcd  # 16 characters, NO SPACES
CONTACT_RECIPIENT_EMAIL=your-email@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

**Then restart your dev server:**
```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Step 2: Push Your Code to Git

```bash
# Check what will be committed (make sure .env is NOT listed)
git status

# Add your changes
git add .

# Commit
git commit -m "Add contact form with Gmail integration"

# Push to your repository
git push origin main
```

### Step 3: Configure Environment Variables on Vercel

1. **Go to your Vercel dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Navigate to Settings → Environment Variables:**
   - Click on "Settings" in the top navigation
   - Click on "Environment Variables" in the left sidebar

3. **Add these environment variables ONE BY ONE:**

   | Name | Value | Environment |
   |------|-------|-------------|
   | `GMAIL_USER` | your-email@gmail.com | Production, Preview, Development |
   | `GMAIL_APP_PASSWORD` | your-16-char-app-password | Production, Preview, Development |
   | `CONTACT_RECIPIENT_EMAIL` | your-email@gmail.com | Production, Preview, Development |
   | `NEXT_PUBLIC_SITE_URL` | https://your-site.vercel.app | Production, Preview, Development |

   **Important:** 
   - Click "Add" after entering each variable
   - Make sure to select all environments (Production, Preview, Development)
   - The `GMAIL_APP_PASSWORD` must be 16 characters without spaces

### Step 4: Redeploy Your Site

After adding the environment variables:

**Option A: Automatic Deployment**
- Vercel will automatically redeploy when you push new code
- Just wait a few minutes after pushing

**Option B: Manual Redeploy**
- Go to your project in Vercel Dashboard
- Click "Deployments" tab
- Click the three dots (•••) on the latest deployment
- Click "Redeploy"

### Step 5: Test Your Contact Form

1. **Visit your deployed site:**
   ```
   https://your-site.vercel.app/contact
   ```

2. **Submit a test message:**
   - Fill out all required fields
   - Click "Send Message"
   - You should receive:
     - ✅ A notification email to your business email
     - ✅ An auto-reply confirmation to the sender

3. **Check for errors:**
   - If something goes wrong, check Vercel logs:
   - Dashboard → Your Project → Deployments → Click on deployment → "Functions" tab

## 🔍 Troubleshooting on Vercel

### Check Runtime Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click on the latest deployment
5. Click "Functions" tab
6. Look for `/api/contact` and check logs

### Common Issues:

**Issue: "Email service is not configured"**
- Solution: Make sure all environment variables are set in Vercel
- Check that variable names are EXACTLY: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_RECIPIENT_EMAIL`

**Issue: "Invalid login" or "Authentication failed"**
- Solution: Your Gmail App Password might be incorrect
- Generate a new App Password: https://myaccount.google.com/apppasswords
- Update it in Vercel environment variables
- Redeploy

**Issue: Contact form works locally but not on Vercel**
- Solution: You forgot to add environment variables to Vercel
- Go to Settings → Environment Variables and add them

## 📧 How to Get Gmail App Password

1. **Enable 2-Step Verification:**
   - Visit: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Create App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device type
   - Click "Generate"
   - **Copy the 16-character password (REMOVE ALL SPACES)**

3. **Use the password:**
   - Add it to your local `.env` file
   - Add it to Vercel environment variables

## ✨ Success Checklist

- [ ] Local `.env` file has correct 16-char Gmail App Password
- [ ] Tested locally and contact form works
- [ ] `.env` is in `.gitignore` (already done ✅)
- [ ] Code pushed to Git
- [ ] Environment variables added to Vercel
- [ ] Site redeployed on Vercel
- [ ] Contact form tested on live site
- [ ] Received test emails successfully

## 🎯 What Happens When Someone Submits the Form?

1. **User fills out contact form** on your website
2. **Form data is sent** to `/api/contact` endpoint
3. **Two emails are sent via Gmail:**
   - 📨 **Business Notification:** Sent to `CONTACT_RECIPIENT_EMAIL` with the inquiry details
   - 📧 **Auto-reply:** Sent to the customer confirming their message was received
4. **User sees success message** on the website

This works identically on both localhost and Vercel! 🚀

## 📞 Need Help?

If you encounter any issues:
1. Check Vercel function logs (as described above)
2. Verify all environment variables are set correctly
3. Make sure your Gmail App Password is exactly 16 characters
4. Test locally first before deploying

---

**Note:** After adding or changing environment variables on Vercel, you MUST redeploy for the changes to take effect!

