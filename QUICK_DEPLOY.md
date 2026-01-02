# Quick Deploy Commands

## Push to Git
```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Add contact form with Gmail integration and improved error handling"

# Push to GitHub
git push origin master
```

## After Pushing - Configure Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add these variables (click "Add" after each one):

   - **GMAIL_USER** = your-email@gmail.com
   - **GMAIL_APP_PASSWORD** = your-16-char-password (NO SPACES!)
   - **CONTACT_RECIPIENT_EMAIL** = your-email@gmail.com
   - **NEXT_PUBLIC_SITE_URL** = https://your-site.vercel.app

5. **Redeploy** (Vercel will do this automatically after you push)

## Test on Vercel

Visit: https://your-site.vercel.app/contact
- Submit a test message
- Check your email for both:
  ✅ Business notification
  ✅ Auto-reply confirmation

## If Something Goes Wrong

Check Vercel logs:
1. Vercel Dashboard → Your Project
2. Deployments → Click latest deployment
3. Functions tab → Look for `/api/contact`
4. Read the error logs

---

**Remember:** The contact form will work on Vercel just like it works locally, as long as the environment variables are set correctly!

