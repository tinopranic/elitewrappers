# Instagram Token Auto-Refresh Setup

This document explains how to set up automatic Instagram token refreshing for Elite Wrappers.

## How It Works

A cron job runs twice a month (on the 1st and 15th) to automatically refresh your Instagram access token before it expires. The system:

1. Calls the Instagram Graph API to refresh your token
2. Logs the new token in the Vercel logs
3. Notifies you when the token is refreshed

## Setup Instructions

### 1. Add Required Environment Variables in Vercel

Log in to your Vercel dashboard and add the following environment variables:

- `INSTAGRAM_ACCESS_TOKEN`: Your current Instagram access token
- `CRON_SECRET`: A random string to secure your cron endpoint (generate a random string)

To set these variables:
1. Go to your project in the Vercel dashboard
2. Click on "Settings" > "Environment Variables"
3. Add the variables for all environments (Production, Preview, Development)

### 2. Generate a Secure CRON_SECRET

Generate a secure random string for your `CRON_SECRET`. You can use:
```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Testing the Token Refresh

After deployment, you can test the token refresh by visiting:
```
https://www.elitewrappers.com.au/api/refresh-instagram-token?token=YOUR_CRON_SECRET
```

Replace `YOUR_CRON_SECRET` with the value you set in the environment variables.

### 4. Monitoring Token Refreshes

Token refreshes will be logged in your Vercel deployment logs. You can view these in the Vercel dashboard.

### 5. Token Update Process

When the token is refreshed:
1. The new token will be logged in Vercel
2. You'll need to copy this new token and update your `INSTAGRAM_ACCESS_TOKEN` environment variable

## Troubleshooting

If token refreshing fails:

1. Check the Vercel logs for error messages
2. Verify your Instagram token is still valid
3. Ensure `CRON_SECRET` matches in both the environment variable and the URL when testing

## Important Notes

- Instagram tokens last 60 days. The cron job runs every 15 days to ensure your token never expires.
- You'll receive a notification when the token is refreshed. 