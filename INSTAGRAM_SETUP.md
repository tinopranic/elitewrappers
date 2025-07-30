# Instagram Basic Display API Setup

This guide will help you set up Instagram Basic Display API to automatically fetch your recent posts.

## Step 1: Create Instagram App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Select "Consumer" as the app type
4. Fill in your app details:
   - App Name: "Elite Wrappers Website"
   - Contact Email: your email
   - Business Account: (optional)

## Step 2: Add Instagram Basic Display

1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Add your Instagram account:
   - Click "Add Instagram Test Users"
   - Enter your Instagram username: `elitewrapperssydney`
   - Click "Add"

## Step 3: Get Access Token

1. Go to "Instagram Basic Display" → "Basic Display"
2. Click "Generate Token"
3. Authorize your Instagram account
4. Copy the generated token

## Step 4: Add to Environment Variables

Add this to your `.env.local` file:

```env
INSTAGRAM_BASIC_DISPLAY_TOKEN=your_generated_token_here
```

## Step 5: Test

1. Restart your development server
2. Visit your gallery page
3. You should see your recent Instagram posts automatically loaded!

## Troubleshooting

- **Token expires**: Basic Display tokens expire after 60 days. You'll need to regenerate them.
- **No posts showing**: Make sure your Instagram account has public posts
- **Rate limits**: The API has limits, but they're generous for basic usage

## Alternative: Manual Post URLs

If you prefer not to set up the API, you can manually add post URLs to `app/api/instagram-simple/route.ts` instead. 