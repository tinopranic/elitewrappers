import { NextResponse } from "next/server"

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    console.error('Instagram access token not found in environment variables')
    return NextResponse.json(
      { 
        success: false, 
        error: 'Instagram configuration error' 
      },
      { status: 500 }
    )
  }

  try {
    console.log('Fetching Instagram posts...')
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Instagram API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch Instagram posts',
          details: errorData
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    if (!data.data || !Array.isArray(data.data)) {
      console.error('Invalid Instagram API response format:', data)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid response from Instagram' 
        },
        { status: 500 }
      )
    }

    console.log(`Successfully fetched ${data.data.length} Instagram posts`)
    return NextResponse.json({ success: true, data: data.data })
    
  } catch (error) {
    console.error('Error in Instagram API route:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

