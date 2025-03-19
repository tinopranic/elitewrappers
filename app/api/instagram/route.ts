import { NextResponse } from "next/server"

async function checkTokenValidity(accessToken: string) {
  try {
    const debugUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
    const response = await fetch(debugUrl)
    const data = await response.json()
    
    if (data.error) {
      console.error('Token validation error:', data.error)
      return false
    }
    
    return true
  } catch (error) {
    console.error('Token validation check failed:', error)
    return false
  }
}

async function refreshToken(currentToken: string) {
  try {
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    const response = await fetch(refreshUrl)
    const data = await response.json()
    
    if (data.access_token) {
      console.log('Token refreshed successfully')
      // Note: In a production environment, you would want to update this in your environment variables
      // For now, we'll just log it
      console.log('New token (first 10 chars):', data.access_token.substring(0, 10) + '...')
      return data.access_token
    }
    
    return null
  } catch (error) {
    console.error('Token refresh failed:', error)
    return null
  }
}

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
    // Check if token is valid
    const isTokenValid = await checkTokenValidity(accessToken)
    let currentToken = accessToken

    if (!isTokenValid) {
      console.log('Token appears to be invalid, attempting refresh...')
      const newToken = await refreshToken(accessToken)
      
      if (!newToken) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to refresh Instagram token' 
          },
          { status: 401 }
        )
      }
      
      currentToken = newToken
    }

    console.log('Fetching Instagram posts with token starting with:', currentToken.substring(0, 10) + '...')
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${currentToken}`
    
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
    
    return NextResponse.json({ 
      success: true, 
      data: data.data,
      tokenRefreshed: currentToken !== accessToken
    })
    
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

