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
    console.log('Fetching Instagram posts with token starting with:', accessToken.substring(0, 10) + '...')
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
    console.log('Fetch URL:', url.replace(accessToken, '[REDACTED]'))
    
    const response = await fetch(url)
    console.log('Instagram API response status:', response.status, response.statusText)
    
    let responseText;
    try {
      responseText = await response.text()
      console.log('Instagram API response body preview:', responseText.substring(0, 200) + '...')
    } catch (err) {
      console.error('Failed to get response text:', err)
    }

    if (!response.ok) {
      console.error('Instagram API error: Response not OK', {
        status: response.status,
        statusText: response.statusText,
        responsePreview: responseText ? responseText.substring(0, 300) : 'No response body'
      })
      
      let errorData;
      try {
        errorData = responseText ? JSON.parse(responseText) : { error: 'Empty response' }
      } catch (e) {
        errorData = { error: 'Invalid JSON response' }
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch Instagram posts',
          details: errorData
        },
        { status: response.status }
      )
    }

    let data;
    try {
      data = responseText ? JSON.parse(responseText) : { error: 'Empty response' }
    } catch (e) {
      console.error('Failed to parse JSON response:', e)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid JSON response from Instagram',
          responsePreview: responseText ? responseText.substring(0, 300) : 'No response body'
        },
        { status: 500 }
      )
    }
    
    if (!data.data || !Array.isArray(data.data)) {
      console.error('Invalid Instagram API response format:', JSON.stringify(data).substring(0, 300))
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid response from Instagram',
          response: data
        },
        { status: 500 }
      )
    }

    console.log(`Successfully fetched ${data.data.length} Instagram posts`)
    if (data.data.length > 0) {
      console.log('First post preview:', JSON.stringify(data.data[0]).substring(0, 200))
    }
    
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

