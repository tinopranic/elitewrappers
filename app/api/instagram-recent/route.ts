import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.INSTAGRAM_BASIC_DISPLAY_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Instagram Basic Display token not configured. Please set INSTAGRAM_BASIC_DISPLAY_TOKEN in your environment variables.' 
      },
      { status: 500 }
    );
  }

  try {
    // Fetch recent media using Instagram Basic Display API
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=8`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid response from Instagram API');
    }

    // Filter out posts without media URLs
    const validPosts = data.data.filter((post: any) => {
      return post.media_url || (post.media_type === 'VIDEO' && post.thumbnail_url);
    });

    return NextResponse.json({
      success: true,
      data: validPosts
    });

  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch Instagram posts' 
      },
      { status: 500 }
    );
  }
} 