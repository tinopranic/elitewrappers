import { NextResponse } from "next/server"
import { sendNotification } from "@/lib/notify"

// Secret key for securing the endpoint - should match CRON_SECRET in env
const CRON_SECRET = process.env.CRON_SECRET

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron with proper authorization
  const { searchParams } = new URL(request.url)
  const authToken = searchParams.get('token')

  // Validate token to ensure the request is authorized
  if (authToken !== CRON_SECRET) {
    console.error('Unauthorized token refresh attempt')
    return NextResponse.json({ 
      success: false, 
      error: "Unauthorized" 
    }, { status: 401 })
  }

  try {
    const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN
    
    if (!currentToken) {
      console.error('No Instagram token found in environment variables')
      await sendNotification(
        "Instagram Token Refresh Failed", 
        "No Instagram token found in environment variables."
      )
      return NextResponse.json({ 
        success: false, 
        error: "No Instagram token found" 
      }, { status: 500 })
    }
    
    console.log('Attempting to refresh Instagram token starting with:', currentToken.substring(0, 10) + '...')
    
    // Call Instagram's refresh endpoint
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    )
    
    const data = await response.json()
    
    if (!response.ok || !data.access_token) {
      console.error("Failed to refresh token:", data)
      await sendNotification(
        "Instagram Token Refresh Failed", 
        `Failed to refresh Instagram token.\nError: ${JSON.stringify(data)}`
      )
      return NextResponse.json({ 
        success: false, 
        error: "Failed to refresh token",
        details: data
      }, { status: 500 })
    }
    
    // Successful token refresh
    const newToken = data.access_token
    const expiryDate = new Date(Date.now() + (data.expires_in || 5184000) * 1000).toISOString()
    
    console.log("New token obtained:", newToken.substring(0, 10) + "...")
    console.log("Token expiry:", expiryDate)
    
    // Send notification about successful token refresh
    await sendNotification(
      "Instagram Token Refreshed Successfully", 
      `Your Instagram token was successfully refreshed.\n\n` +
      `New token: ${newToken}\n\n` +
      `This token will expire on: ${expiryDate}\n\n` +
      `Please update your INSTAGRAM_ACCESS_TOKEN environment variable in Vercel with this new token.`
    )
    
    return NextResponse.json({ 
      success: true, 
      message: "Token refreshed successfully",
      expiresIn: data.expires_in || 5184000, // Seconds (60 days = 5184000 seconds)
      expiryDate: expiryDate
    })
    
  } catch (error) {
    console.error("Error refreshing Instagram token:", error)
    await sendNotification(
      "Instagram Token Refresh Error", 
      `An error occurred while refreshing the Instagram token.\n\nError: ${error instanceof Error ? error.message : "Unknown error"}`
    )
    return NextResponse.json({ 
      success: false, 
      error: "Error refreshing token",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
} 