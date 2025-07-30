import { NextResponse } from 'next/server';

// Instagram post URLs - replace these with actual URLs from your Instagram account
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/ACTUAL_POST_ID_1/", // Replace with actual post URLs from @elitewrapperssydney
  "https://www.instagram.com/p/ACTUAL_POST_ID_2/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_3/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_4/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_5/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_6/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_7/",
  "https://www.instagram.com/p/ACTUAL_POST_ID_8/",
];

export async function GET() {
  try {
    const embedPromises = INSTAGRAM_POSTS.map(async (postUrl) => {
      try {
        // Use Instagram's public oEmbed API
        const embedUrl = `https://api.instagram.com/oembed/?url=${encodeURIComponent(postUrl)}&omitscript=true&hidecaption=true&maxwidth=540`;
        const response = await fetch(embedUrl);
        
        if (response.ok) {
          const embedData = await response.json();
          return {
            url: postUrl,
            ...embedData
          };
        } else {
          console.warn('Failed to fetch embed for:', postUrl);
          return null;
        }
      } catch (error) {
        console.warn('Error fetching embed for:', postUrl, error);
        return null;
      }
    });

    const embedResults = await Promise.all(embedPromises);
    const validEmbeds = embedResults.filter(Boolean);

    return NextResponse.json({
      success: true,
      data: validEmbeds
    });

  } catch (error) {
    console.error('Error in Instagram simple API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch Instagram embeds' 
      },
      { status: 500 }
    );
  }
} 